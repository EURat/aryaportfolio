document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.querySelector('a[href="index.html"]');
  const header = document.querySelector("header");

  homeLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    header.classList.toggle("nav-expanded");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Initially make the navigation bar partially visible
  header.classList.add("partial");

  // Detect mouse movement near the left edge of the screen
  document.addEventListener("mousemove", (e) => {
    if (e.clientX < 50) {
      // If the mouse is near the left edge, show the navigation bar fully
      header.classList.remove("partial");
      header.classList.add("active");
    } else if (e.clientX > 300) {
      // If the mouse moves away, make the navigation bar partially visible
      header.classList.remove("active");
      header.classList.add("partial");
    }
  });

  // Handle navigation link clicks
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const target = e.target.getAttribute("href");
      window.location.href = target; // Navigate to the clicked page
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Function to slide the navigation bar in
  const slideIn = () => {
    header.classList.remove("partial");
    header.classList.add("active");
  };

  // Function to slide the navigation bar out
  const slideOut = () => {
    header.classList.remove("active");
    header.classList.add("partial");
  };

  // Slide in the navigation bar automatically when the page loads
  setTimeout(() => {
    slideIn();
  }, 1000); // Slide in after 1 second

  // Automatically slide the navigation bar in and out on a timer
  setInterval(() => {
    if (header.classList.contains("active")) {
      slideOut(); // Slide out if it's currently active
    } else {
      slideIn(); // Slide in if it's currently partial
    }
  }, 5000); // Change every 5 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  // Handle navigation link clicks
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const target = e.target.getAttribute("href");
      window.location.href = target; // Navigate to the clicked page
    });
  });

  // Add animation to buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  });
});