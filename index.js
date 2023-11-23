function SendMail() {
  var paras = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementByID("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_h9fc05o", "template_kqdqxfq", paras)
    .then(function (res) {
      alert("Success!!" + res.status);
    });
}

function submitForm() {
  const submitButton = document.getElementById("submitBtn");
  const messageInput = document.getElementById("message");
  const submittedMessage = document.getElementById("submittedMessage");

  // Check if the message input is not empty
  if (messageInput.value.trim() !== "") {
    // Change the button text and disable it
    submitButton.innerText = "Message Submitted";
    submitButton.disabled = true;

    // Display the submitted message
    submittedMessage.innerText = "Thank you for your message!";
  }
}

// Show or hide the "Scroll to Top" button based on the scroll position
window.onscroll = function () {
  showScrollTopButton();
};

function showScrollTopButton() {
  var scrollTopButton = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
