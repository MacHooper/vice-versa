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
  var nav = document.getElementById("mobile-nav");
  if (nav.style.display === "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}
function modal1() {
  var modal1 = document.getElementById("modal-1");
  if (modal1.style.display === "none") {
    modal1.style.display = "flex";
  } else {
    modal1.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal.style.display = "none";
    }
  };
}
function modal2() {
  var modal2 = document.getElementById("modal-2");
  if (modal2.style.display === "none") {
    modal2.style.display = "flex";
  } else {
    modal2.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal.style.display = "none";
    }
  };
}
function modal3() {
  var modal3 = document.getElementById("modal-3");
  if (modal3.style.display === "none") {
    modal3.style.display = "flex";
  } else {
    modal3.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal3) {
      modal.style.display = "none";
    }
  };
}

// FAQ Accordion
// grab collected variables for the accordion, li and questions
const accordion = document.querySelector(".accordion");
const items = accordion.querySelectorAll("li");
const questions = accordion.querySelectorAll(".question");

// function
// created a variable based on the parentNode of the button click event, the fucntion then applies the class of 'open' to the affected element.
function toggleAccordion() {
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("open");
      return;
    }
    item.classList.remove("open");
  });
}

// event listeners
// added event listener which checks to see if the question has been clicked.
questions.forEach((question) =>
  question.addEventListener("click", toggleAccordion)
);
