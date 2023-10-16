document
  .getElementById("injuryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      location: document.getElementById("location").value,
      description: document.getElementById("description").value,
    };

    // Send data to the server (to be implemented in the backend)
    // You can use fetch() or another AJAX library to make a POST request.
  });
  let popup = document.getElementById("popup");

  function openPopup(){
      popup.classList.add("open-popup");
  }
  function closePopup(){
      popup.classList.remove("open-popup");
  }