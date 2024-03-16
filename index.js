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
  var inputElement=document.querySelector(".input");

  // Get the generate button
  var generateBtn=document.getElementById("generateBtn");

  var inputWarning=document.getElementById("input_warning");

  // Show or hide the warning message based on input presence
  inputWarning.style.display=inputElement.value.trim()===""? "block": "none";

  // Enable the generate button if the input has data, otherwise disable it
  generateBtn.disabled=inputElement.value.trim()==="";

  console.log("Checking Input");
}

function generateLinkIG() {
  // Get the current scroll position
  var scrollPosition=window.scrollY;

  // Construct the Instagram profile link
  var inputElement=document.querySelector(".input");
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var generatedLink="https://www.instagram.com/"+encodeURIComponent(userInput);

  // Set the generated link as the value of the input field
  inputElement.value=generatedLink;

  // Open the generated link in a new tab if the action is 'test'

  // Enable buttons in the button_tray
  var buttonTray=document.getElementById("buttons_holder");
  buttonTray.classList.remove("disabled-buttons");

  // Restore the scroll position after the link is generated
  window.scrollTo(0, scrollPosition);

  // Enable the copy link button
  var copyLink=document.getElementById("copyLink");
  copyLink.disabled=false;

  // Additional logic for generating the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Link generated!");
  console.log("Buttons are open now");
}



// var userInput="";

function validateInputFB() {
  // Get the input element
  var inputElement=document.querySelector(".inputFB");

  // Get the generate button
  var generateBtn=document.getElementById("generateBtnFB");

  var inputWarning=document.getElementById("input_warningFB");

  // Show or hide the warning message based on input presence
  inputWarning.style.display=inputElement.value.trim()===""? "block": "none";

  // Enable the generate button if the input has data, otherwise disable it
  generateBtn.disabled=inputElement.value.trim()==="";

  console.log("Checking Input");


}


function generateLinkFB() {
  // Get the current scroll position
  var scrollPosition=window.scrollY;

  // Construct the Instagram profile link
  var inputElement=document.querySelector(".inputFB");
  console.log(inputElement);
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var generatedLink="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(userInput);

  // Set the generated link as the value of the input field
  inputElement.value=generatedLink;

  // Open the generated link in a new tab if the action is 'test'

  // Enable buttons in the button_tray
  var buttonTrayFB=document.getElementById("buttons_holderFB");
  buttonTrayFB.classList.remove("disabled-buttonsFB");

  // Restore the scroll position after the link is generated
  window.scrollTo(0, scrollPosition);

  // Enable the copy link button
  var copyLink=document.getElementById("copyLink");
  copyLink.disabled=false;

  // Additional logic for generating the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Link generated!");
  console.log("Buttons are open now");
  console.log(generatedLink);
}


function validateInputLK() {
  // Get the input element
  var inputElement=document.querySelector(".inputLK");

  // Get the generate button
  var generateBtn=document.getElementById("generateBtnLK");

  var inputWarning=document.getElementById("input_warningLK");

  // Show or hide the warning message based on input presence
  inputWarning.style.display=inputElement.value.trim()===""? "block": "none";

  // Enable the generate button if the input has data, otherwise disable it
  generateBtn.disabled=inputElement.value.trim()==="";

  console.log("Checking Input");


}


function generateLinkLK() {
  // Get the current scroll position
  var scrollPosition=window.scrollY;

  // Construct the Instagram profile link
  var inputElement=document.querySelector(".inputLK");
  console.log(inputElement);
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var generatedLink="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(userInput);

  // Set the generated link as the value of the input field
  inputElement.value=generatedLink;

  // Open the generated link in a new tab if the action is 'test'

  // Enable buttons in the button_tray
  var buttonTrayLK=document.getElementById("buttons_holderLK");
  buttonTrayLK.classList.remove("disabled-buttonsLK");

  // Restore the scroll position after the link is generated
  window.scrollTo(0, scrollPosition);

  // Enable the copy link button
  var copyLink=document.getElementById("copyLink");
  copyLink.disabled=false;

  // Additional logic for generating the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Link generated!");
  console.log("Buttons are open now");
  console.log(generatedLink);
}

function testLink() {
  // Construct the Instagram profile link
  var inputElement=document.querySelector(".input");
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var testLink=userInput;

  // Open the test link in a new tab
  window.open(testLink, "_blank");

  // Additional logic for testing the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Testing link...");
}

function copyLink() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".input");

  // Get the value of the input field
  var inputValue=generatedLinkField.value;

  // Set the generated link as the value of the input field
  generatedLinkField.value=inputValue;

  // Select the text in the generated link input field
  generatedLinkField.select();
  generatedLinkField.setSelectionRange(0, 99999);
  /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  generatedLinkField.blur();

  // Log a message or perform any other actions after copying
  console.log("Link copied to clipboard!");
}

function testLinkFB() {
  // Construct the Instagram profile link
  var inputElement=document.querySelector(".inputFB");
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var testLink=userInput;

  // Open the test link in a new tab
  window.open(testLink, "_blank");

  // Additional logic for testing the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Testing link...");
}

function copyLinkFB() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".inputFB");

  // Get the value of the input field
  var inputValue=generatedLinkField.value;

  // Set the generated link as the value of the input field
  generatedLinkField.value=inputValue;

  // Select the text in the generated link input field
  generatedLinkField.select();
  generatedLinkField.setSelectionRange(0, 99999);
  /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  generatedLinkField.blur();

  // Log a message or perform any other actions after copying
  console.log("Link copied to clipboard!");
}

function testLinkLK() {
  // Construct the Instagram profile link
  var inputElement=document.querySelector(".inputLK");
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var testLink=userInput;

  // Open the test link in a new tab
  window.open(testLink, "_blank");

  // Additional logic for testing the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Testing link...");
}

function copyLinkLK() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".inputLK");

  // Get the value of the input field
  var inputValue=generatedLinkField.value;

  // Set the generated link as the value of the input field
  generatedLinkField.value=inputValue;

  // Select the text in the generated link input field
  generatedLinkField.select();
  generatedLinkField.setSelectionRange(0, 99999);
  /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  generatedLinkField.blur();

  // Log a message or perform any other actions after copying
  console.log("Link copied to clipboard!");
}

var count=1;

function generateQRCode() {
  // Get the input field value
  var generatedLinkField=document.querySelector(".inputFB");

  // Check if the input value is not empty
  if (generatedLinkField !==""&& count==1) {

    // Create a QR code with the input value
    var qrCode=new QRCode(document.getElementById("qr-code"), {
        text: generatedLinkField,
        width: 200,
        height: 200,
      }

    );
    count++;
    console.log("qr generated");

    // Show the QR code section
    document.getElementById("qr-code-section").style.display="block";
  }

  else {
    alert("QR code already generated.");
  }

}

function anchorcode() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".inputFB");

  // Get the value of the input field
  var inputValue=generatedLinkField.value;

  // Construct the anchor tag code
  var codeforweb="<a href=\""+inputValue+"\" title=\"Facebook\">Click to visit us on Facebook</a>  // This code was generated on Linkers' Project. Visit us for more";

  // Create a temporary textarea to copy the code
  var tempTextarea=document.createElement("textarea");
  tempTextarea.value=codeforweb;
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999);
  /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Log a message or perform any other actions after copying
  console.log("Link code copied to clipboard!");
}

var imageUrls = ["Help Slide show images/1.png", "Help Slide show images/2.png", "Help Slide show images/3.png", "Help Slide show images/4.png"];
var currentImageIndex = 0;
function prev(){
  currentImageIndex--;

    // Reset to the last image if index goes below zero
    if (currentImageIndex < 0) {
      currentImageIndex = imageUrls.length - 1;
    }

    // Display the previous image
    displayImage();
}

function next(){
  currentImageIndex++;

    // Reset to the first image if index exceeds array length
    if (currentImageIndex >= imageUrls.length) {
      currentImageIndex = 0;
    }

    // Display the next image
    displayImage();
}

  function displayImage() {
    // Get the main image element
    var mainImage = document.getElementById("main-image");

    // Set the source attribute of the main image to the current image URL
    mainImage.src = imageUrls[currentImageIndex];
  }