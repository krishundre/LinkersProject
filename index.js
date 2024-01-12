function SendMail() {
  var paras= {
    from_name: document.getElementById("fullName").value,
      email_id: document.getElementByID("email_id").value,
      message: document.getElementById("message").value,
  }

  ;

  emailjs .send("service_h9fc05o", "template_kqdqxfq", paras) .then(function (res) {
      alert("Success!!"+ res.status);
    }

  );
}

function submitForm() {
  const submitButton=document.getElementById("submitBtn");
  const messageInput=document.getElementById("message");
  const submittedMessage=document.getElementById("submittedMessage");

  // Check if the message input is not empty
  if (messageInput.value.trim() !=="") {
    // Change the button text and disable it
    submitButton.innerText="Message Submitted";
    submitButton.disabled=true;

    // Display the submitted message
    submittedMessage.innerText="Thank you for your message!";
  }
}

// Show or hide the "Scroll to Top" button based on the scroll position
window.onscroll=function () {
  showScrollTopButton();
}

;

function showScrollTopButton() {
  var scrollTopButton=document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.classList.add("visible");
  }

  else {
    scrollTopButton.classList.remove("visible");
  }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
  document.body.scrollTop=0; // For Safari
  document.documentElement.scrollTop=0; // For Chrome, Firefox, IE, and Opera
}

function toggleContent(contentId) {
  // Hide all content divs
  document.getElementById('selContent').style.display='none';
  document.getElementById('igContent').style.display='none';
  document.getElementById('fbContent').style.display='none';
  document.getElementById('emailContent').style.display='none';
  document.getElementById('waContent').style.display='none';
  document.getElementById('lkContent').style.display='none';

  // Show the selected content
  document.getElementById(contentId).style.display='block';
}


function validateInput() {
  // Get the input element
  var inputElement = document.querySelector(".input");

  // Get the generate button
  var generateBtn = document.getElementById("generateBtn");

  // Get the test link and copy link elements
  var testLink = document.getElementById("testLink");
  var copyLink = document.getElementById("copyLink");
  var inputWarning = document.getElementById("input_warning");

  // Show or hide the warning message based on input presence
  inputWarning.style.display =
    inputElement.value.trim() === "" ? "block" : "none";

  // Enable the generate button if the input has data, otherwise disable it
  generateBtn.disabled = inputElement.value.trim() === "";

  // Disable the test link and copy link initially and after input warning
  testLink.disabled = true;
  copyLink.disabled = true;
}
function generateLink(action) {
  // Get the current scroll position
  var scrollPosition = window.scrollY;

  // Construct the Instagram profile link
  var inputElement = document.querySelector(".input");
  var userInput = inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var generatedLink =
    "https://www.instagram.com/" + encodeURIComponent(userInput);

  // Set the generated link as the value of the input field
  inputElement.value = generatedLink;

  // Open the generated link in a new tab if the action is 'test'
  if (action === "test") {
    window.open(generatedLink, "_blank");
  }

  // Enable buttons in the button_tray
  var buttonTray = document.getElementById("buttons_holder");
  buttonTray.classList.remove("disabled-buttons");

  // Restore the scroll position after the link is generated
  window.scrollTo(0, scrollPosition);

  // Enable the copy link button
  var copyLink = document.getElementById("copyLink");
  copyLink.disabled = false;

  // Additional logic for generating the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Link generated!");
}

function testLink() {
  // Construct the Instagram profile link
  var inputElement = document.querySelector(".input");
  var userInput = inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var testLink =  userInput;

  // Open the test link in a new tab
  window.open(testLink, "_blank");

  // Additional logic for testing the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Testing link...");
}
function copyLink() {
  // Get the generated link input field
  var generatedLinkField = document.querySelector(".input");

  // Get the value of the input field
  var inputValue = generatedLinkField.value;

  // Set the generated link as the value of the input field
  generatedLinkField.value = inputValue;

  // Select the text in the generated link input field
  generatedLinkField.select();
  generatedLinkField.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  generatedLinkField.blur();

  // Log a message or perform any other actions after copying
  console.log("Link copied to clipboard!");
}

function generateQRCode() {
  // Get the input field value
  var generatedLinkField = document.querySelector(".input");

  // Check if the input value is not empty
  if (generatedLinkField !== "") {
      // Create a QR code with the input value
      var qrCode = new QRCode(document.getElementById("qr-code"), {
          text: generatedLinkField,
          width: 200,
          height: 200,
      });
      console.log("qr generated");
      const logo = document.getElementById("logo");
  qrCode.appendChild(logo);
      // Show the QR code section
      document.getElementById("qr-code-section").style.display = "block";
  } else {
      alert("Please enter a valid input before generating the QR code.");
  }

}
