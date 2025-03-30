// menuLoader.js
document.addEventListener("DOMContentLoaded", function () {
	fetch("menu.html") // Load the menu
	  .then(response => response.text())
	  .then(data => {
		document.getElementById("menu-container").innerHTML = data;
		attachMenuScripts(); // Attach menu functions
	  })
	  .catch(error => console.error("Error loading menu:", error));
  });
  
  function attachMenuScripts() {
	function isUserSignedIn() { 
		return true; // Replace with real authentication check
	} 
  
	window.toggleMenu = function (menuClass) {
	  event.stopPropagation();
	  
	  const menu = document.querySelector(`.${menuClass}`);
	  const isAlreadyOpen = menu.classList.contains("show");
  
	  // Close all menus first
	  document.querySelectorAll('.menu-content, .account-menu-content')
		.forEach(m => m.classList.remove('show'));
  
	  // If the clicked menu was not open, open it
	  if (!isAlreadyOpen) {
		menu.classList.add("show");
	  }
  
	  // Handle sign-in options only if it's the account menu
	  if (menuClass === "account-menu-content") {
		const isSignedIn = isUserSignedIn();
		document.getElementById("login-signup").style.display = isSignedIn ? "none" : "block";
		document.getElementById("reset-password").style.display = isSignedIn ? "block" : "none";
		document.getElementById("logout").style.display = isSignedIn ? "block" : "none";
	  }
	};
  
	// Close menus when clicking outside
	document.addEventListener("click", () => {
	  document.querySelectorAll('.menu-content, .account-menu-content')
		.forEach(menu => menu.classList.remove('show'));
	});
  }
  