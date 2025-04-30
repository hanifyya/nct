document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on a page with a login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      localStorage.setItem("loggedIn", "true");
      alert("Login successful! Your progress will now be recorded.");
      window.location.href = "home.html";
    });
  }

  // Other script logic for progress tracking and conditional navbar elements
  const progressLink = document.getElementById("progressLink");
  if (progressLink) {
    if (
      !localStorage.getItem("loggedIn") ||
      localStorage.getItem("loggedIn") !== "true"
    ) {
      progressLink.style.display = "none";
    } else {
      progressLink.style.display = "block";
    }
  }
});
