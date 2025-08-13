document.getElementById("submit-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const story = document.getElementById("story").value.trim();
  const tag = document.getElementById("tag").value;
  const agreed = document.getElementById("terms").checked;

  if (!story || !tag || !agreed) {
    alert("Please fill everything out correctly.");
    return;
  }

  alert("Thank you for submitting. Your tea has been recorded.");
  
  // Here’s where you’d send it to a backend or use localStorage for testing
  // e.g. console.log({ story, tag });
  this.reset();
});

