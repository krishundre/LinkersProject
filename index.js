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


