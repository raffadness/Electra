// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileToggle = document.querySelector(".mobile-toggle");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      // Create mobile menu if it doesn't exist
      let mobileMenu = document.querySelector(".mobile-menu");

      if (!mobileMenu) {
        mobileMenu = document.createElement("div");
        mobileMenu.className = "mobile-menu";

        // Create close button
        const closeButton = document.createElement("button");
        closeButton.className = "mobile-menu__close";
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", function () {
          mobileMenu.classList.remove("active");
        });

        // Create menu list
        const menuList = document.createElement("ul");
        menuList.className = "mobile-menu__list";

        // Get all nav items and clone them for mobile menu
        const navItems = document.querySelectorAll(".nav__item");
        navItems.forEach((item) => {
          const link = item.querySelector("a");
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = link.href;
          a.className = "mobile-menu__link";
          a.textContent = link.textContent;
          a.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
          });
          li.appendChild(a);
          menuList.appendChild(li);
        });

        // Add CTA button
        const ctaButton = document.querySelector(".header__cta a");
        if (ctaButton) {
          const ctaClone = ctaButton.cloneNode(true);
          ctaClone.className = "btn btn--primary";
          ctaClone.style.marginTop = "30px";
          ctaClone.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
          });
          menuList.appendChild(ctaClone);
        }

        // Append elements to mobile menu
        mobileMenu.appendChild(closeButton);
        mobileMenu.appendChild(menuList);
        document.body.appendChild(mobileMenu);
      }

      // Toggle mobile menu
      mobileMenu.classList.add("active");
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Gallery slider functionality
  const gallerySlides = document.querySelectorAll(".gallery__slide");
  const galleryDots = document.querySelectorAll(".gallery__dot");
  const prevButton = document.querySelector(".gallery__arrow--prev");
  const nextButton = document.querySelector(".gallery__arrow--next");

  if (gallerySlides.length > 0) {
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      gallerySlides.forEach((slide) => {
        slide.classList.remove("active");
      });

      // Remove active class from all dots
      galleryDots.forEach((dot) => {
        dot.classList.remove("active");
      });

      // Show the current slide and activate the corresponding dot
      gallerySlides[index].classList.add("active");
      galleryDots[index].classList.add("active");
    }

    // Next slide function
    function nextSlide() {
      currentSlide = (currentSlide + 1) % gallerySlides.length;
      showSlide(currentSlide);
    }

    // Previous slide function
    function prevSlide() {
      currentSlide =
        (currentSlide - 1 + gallerySlides.length) % gallerySlides.length;
      showSlide(currentSlide);
    }

    // Event listeners for next and previous buttons
    if (nextButton) {
      nextButton.addEventListener("click", nextSlide);
    }

    if (prevButton) {
      prevButton.addEventListener("click", prevSlide);
    }

    // Event listeners for dots
    galleryDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
  }

  // Form validation
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate name
      const nameInput = document.getElementById("name");
      const nameError = nameInput.nextElementSibling;

      if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        nameError.style.display = "block";
        isValid = false;
      } else {
        nameError.style.display = "none";
      }

      // Validate email
      const emailInput = document.getElementById("email");
      const emailError = emailInput.nextElementSibling;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }

      // Validate phone
      const phoneInput = document.getElementById("phone");
      const phoneError = phoneInput.nextElementSibling;
      const phonePattern = /^\d{10,}$/;

      if (!phonePattern.test(phoneInput.value.replace(/\D/g, ""))) {
        phoneError.textContent = "Please enter a valid phone number";
        phoneError.style.display = "block";
        isValid = false;
      } else {
        phoneError.style.display = "none";
      }

      // Validate interest
      const interestInput = document.getElementById("interest");
      const interestError = interestInput.nextElementSibling;

      if (interestInput.value === "") {
        interestError.textContent = "Please select an option";
        interestError.style.display = "block";
        isValid = false;
      } else {
        interestError.style.display = "none";
      }

      // Validate message
      const messageInput = document.getElementById("message");
      const messageError = messageInput.nextElementSibling;

      if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message";
        messageError.style.display = "block";
        isValid = false;
      } else {
        messageError.style.display = "none";
      }

      // If form is valid, show success message
      if (isValid) {
        // In a real application, you would send the form data to a server here

        // Show success message
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.textContent =
          "Thank you for your message! We will get back to you soon.";
        successMessage.style.backgroundColor = "#4CAF50";
        successMessage.style.color = "white";
        successMessage.style.padding = "15px";
        successMessage.style.borderRadius = "4px";
        successMessage.style.marginBottom = "20px";

        contactForm.prepend(successMessage);

        // Reset form
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  }

  // Header scroll effect
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(17, 17, 17, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.backgroundColor = "rgba(17, 17, 17, 0.9)";
        header.style.boxShadow = "none";
      }
    });
  }

  // Highlight active nav link based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", function () {
      let current = "";
      const headerHeight = document.querySelector(".header").offsetHeight;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  }
});
