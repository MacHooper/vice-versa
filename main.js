// Mobile Nav
function navClick() {
    var nav = document.getElementById("mobile-nav");
    if (nav.style.display === "none") {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  }

// Dropdown
  function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

// Merch Modals
function navClick() {
  var nav    = document.getElementById("mobile-nav");
  if (
    nav.style.display   === "none") {
    nav.style.display   = "flex";
  } else {
    nav.style.display   = "none";
  }
}
function modal1() {
  var modal1    = document.getElementById("modal-1");
  if (
    modal1.style.display   === "none") {
    modal1.style.display   = "flex";
  } else {
    modal1.style.display   = "none";
  }
  window.onclick = function(event) {
    if (event.target ==modal1) {
      modal.style.display = "none";
    }
  }
}
function modal2() {
  var modal2    = document.getElementById("modal-2");
  if (
    modal2.style.display   === "none") {
    modal2.style.display   = "flex";
  } else {
    modal2.style.display   = "none";
  }
  window.onclick = function(event) {
    if (event.target ==modal2) {
      modal.style.display = "none";
    }
  }
}
function modal3() {
  var modal3    = document.getElementById("modal-3");
  if (
    modal3.style.display   === "none") {
    modal3.style.display   = "flex";
  } else {
    modal3.style.display   = "none";
  }
  window.onclick = function(event) {
    if (event.target ==modal3) {
      modal.style.display = "none";
    }
  }
}