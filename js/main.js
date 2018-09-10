var button = document.querySelector(".button-search");
  
  var popup = document.querySelector(".search-form");
  popup.classList.add("modal-hide");
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hide");
  });

