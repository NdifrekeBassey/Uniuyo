document.getElementById("notify-button").addEventListener("click", function () {
  const emailInput = document.getElementById("email").value;
  if (emailInput) {
    alert(`You will be notified at ${emailInput} when updates are available!`);
  } else {
    alert("Please enter a valid email address.");
  }
});
