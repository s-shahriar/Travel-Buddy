// JavaScript code to hide/show the menu icon based on screen width
function updateMenuIconVisibility() {
    var menuIcon = document.getElementById('menu');
    var headRight = document.querySelector('.head-right');
    var shouldHide = window.innerWidth <= 767; // Adjust the breakpoint as needed
  
    if (shouldHide && menuIcon.parentNode === headRight) {
      // Remove the menu icon if it's not already removed
      headRight.removeChild(menuIcon);
    } else if (!shouldHide && menuIcon.parentNode !== headRight) {
      // Append the menu icon if it's not already appended
      headRight.appendChild(menuIcon);
    }
  }
  
  // Initial check on page load
  updateMenuIconVisibility();
  
  // Update on window resize
  window.addEventListener('resize', updateMenuIconVisibility);
  