const form = document.querySelector(".form");
const status = document.querySelector(".status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";

  const formData = new FormData(form);
  const plainFormData = Object.fromEntries(formData.entries());
  const jsonFormData = JSON.stringify(plainFormData);

  try {
    const response = await fetch("https://formspree.io/f/xanbywzv", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: jsonFormData
    });

    if (response.ok) {
      status.textContent = "Thanks for your message!";
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem. Please try again.";
    }
  } catch (error) {
    status.textContent = "Oops! There was a problem.";
  }
});