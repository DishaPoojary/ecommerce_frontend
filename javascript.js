
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  localStorage.setItem("sidebarOpen", "true");
  
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  localStorage.setItem("sidebarOpen", "false");
}
document.addEventListener("DOMContentLoaded", function() {
  const isSidebarOpen = localStorage.getItem("sidebarOpen") === "true";
  if (!isSidebarOpen) {
    closeNav();
  }
});


// Function to handle the onbeforeunload event
function removeSidebarOnPageChange() {
  localStorage.setItem("sidebarOpen", "false");
}

// Add an event listener to handle the onbeforeunload event
window.addEventListener("beforeunload", removeSidebarOnPageChange);

function openNav1() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav1() {
  document.getElementById("myNav").style.display = "none";
}
function openNewPage() {
  window.location.href = 'products.html'; // Replace 'new_page.html' with the URL of the new HTML page
}
