/* Project-owned JavaScript repairs for the static Hobart Motorcycles scrape. */

(function () {
  "use strict";

  var ROTATION_DELAY = 4000;

  function initHeroRotator() {
    var rotator = document.querySelector("[data-hero-rotator]");

    if (!rotator || rotator.dataset.rotatorInitialized === "true") {
      return;
    }

    rotator.dataset.rotatorInitialized = "true";

    var hero = document.querySelector(".main-slide");
    if (hero && rotator.parentNode !== hero) {
      hero.appendChild(rotator);
    }

    Array.prototype.slice.call(rotator.querySelectorAll("img")).forEach(function (image) {
      if (!image.classList.contains("hero-slide")) {
        image.remove();
      }
    });

    var slides = Array.prototype.slice.call(
      rotator.querySelectorAll(".hero-slide"),
    );

    if (window.jQuery) {
      window.jQuery(slides).stop(true, true).css("opacity", "");
    }
    var timer = null;
    var activeIndex = 0;
    var reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function availableSlides() {
      return slides.filter(function (slide) {
        return !slide.classList.contains("has-error");
      });
    }

    function showSlide(slide) {
      slides.forEach(function (item) {
        item.classList.toggle("is-active", item === slide);
      });
      activeIndex = slides.indexOf(slide);
    }

    function stop() {
      if (timer !== null) {
        window.clearTimeout(timer);
        timer = null;
      }
    }

    function schedule() {
      stop();

      if (
        reducedMotion.matches ||
        document.hidden ||
        availableSlides().length < 2
      ) {
        return;
      }

      timer = window.setTimeout(advance, ROTATION_DELAY);
    }

    function advance() {
      var validSlides = availableSlides();
      var currentPosition = validSlides.indexOf(slides[activeIndex]);
      var nextPosition = (currentPosition + 1) % validSlides.length;

      showSlide(validSlides[nextPosition]);
      schedule();
    }

    function resetToFirstSlide() {
      var firstSlide = availableSlides()[0];

      stop();
      if (firstSlide) {
        showSlide(firstSlide);
      }
      schedule();
    }

    slides.forEach(function (slide) {
      slide.addEventListener("error", function () {
        slide.classList.add("has-error");
        slide.classList.remove("is-active");

        if (slides[activeIndex] === slide) {
          var firstSlide = availableSlides()[0];
          if (firstSlide) {
            showSlide(firstSlide);
          }
        }

        schedule();
      });
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
      } else {
        schedule();
      }
    });

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", resetToFirstSlide);
    } else if (typeof reducedMotion.addListener === "function") {
      reducedMotion.addListener(resetToFirstSlide);
    }

    showSlide(availableSlides()[0]);
    schedule();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeroRotator);
  } else {
    initHeroRotator();
  }
})();
