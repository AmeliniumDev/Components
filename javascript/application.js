// rotating cards on click or mouseenter & mouseleave
// (doesnt work for moveover -> constantly flips)
document.querySelectorAll(".flip-card-inner").forEach(function(element) {
  element.addEventListener("mouseenter", function() {
    // show is a class in css cards .flip-card-inner.show {...}
    this.classList.toggle("show");
  });
  // the section below is not needed if we wre using "click" instead of mouceenter & mouseleave
  // -----------------------
  element.addEventListener("mouseleave", function() {
    // show is a class in css cards .flip-card-inner.show {...}
    this.classList.toggle("show");
  });
  // -----------------------
});


// carousel

document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel-item")
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;

  });

  carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
      ${ buttonsHtml.join("") }
    </div>
  `);

  const buttons = carousel.querySelectorAll(".carousel-button")

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // unselect all the items
      items.forEach(item => item.classList.remove("carousel-item-selected"));
      buttons.forEach(button => button.classList.remove("carousel-button-selected"));

      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-button-selected");
    });
  });
  // Select the first item on page load
  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-button-selected");
});

// navbar
// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("respNavbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
