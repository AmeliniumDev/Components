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


