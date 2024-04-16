

var inputElement;
var generateBtn;
var inputWarning;

// INSTAGRAM OPTIONS STARTS FROM HERE
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

  var count=1;
  function generateQRCode() {
    // Get the input field value
    var generatedLinkField=document.querySelector(".input");
  
    // Check if the input value is not empty
    if (generatedLinkField !==""&& count==1) {
      console.log(generatedLinkField.value)
      // Create a QR code with the input value
      var qrCode=new QRCode(document.getElementById("qr-code"), {
          text: generatedLinkField.value,
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
    var generatedLinkField=document.querySelector(".input");
  
    // Get the value of the input field
    var inputValue=generatedLinkField.value;
  
    // Construct the anchor tag code
    var codeforweb="<a href=\""+inputValue+"\" title=\"Instagram\">Click to visit us on Instagram</a>  // This code was generated on Linkers' Project. Visit us for more";
  
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
// INSTAGRAM OPTIONS ENDS FROM HERE

// Facebook OPTIONS STARTS FROM HERE
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


  countFB=1
  function generateQRCodeFB() {
    // Get the input field value
    var generatedLinkField=document.querySelector(".inputFB");
  
    // Check if the input value is not empty
    if (generatedLinkField !==""&& countFB==1) {
      console.log(generatedLinkField.value)
      // Create a QR code with the input value
      var qrCode=new QRCode(document.getElementById("qr-codeFB"), {
          text: generatedLinkField.value,
          width: 200,
          height: 200,
        }
  
      );
      countFB++;
      console.log("qr generated");
  
      // Show the QR code section
      document.getElementById("qr-code-sectionFB").style.display="block";
    }
  
    else {
      alert("QR code already generated.");
    }
  
  }

  function anchorcodeFB() {
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
// Facebook OPTIONS ENDS FROM HERE











// Email OPTIONS START FROM HERE
function validateInputEM() {
  var inputElement = document.querySelector(".inputEM");
  var generateBtn = document.getElementById("generateBtnEM");
  var inputWarning = document.getElementById("input_warningEM");
  
  inputWarning.style.display = inputElement.value.trim() === "" ? "block" : "none";
  generateBtn.disabled = inputElement.value.trim() === "";
  console.log("Checking Input");
}

function generateLinkEM() {

  var inputElement=document.querySelector(".inputEM");
  var inputElement_subj=document.querySelector(".inputEM_subj");
  var inputElement_cc=document.querySelector(".inputEM_cc");
  var inputElement_bcc=document.querySelector(".inputEM_bcc");
  var inputElement_body=document.querySelector(".inputEM_body");
  var userInput=inputElement.value.trim(); // Get user input
  var userInput_subj=inputElement_subj.value.trim(); // Get user input
  var userInput_cc=inputElement_cc.value.trim(); // Get user input
  var userInput_bcc=inputElement_bcc.value.trim(); // Get user input
  var userInput_body=inputElement_body.value.trim(); // _bodyGet user input

  // Construct the full Instagram profile link with proper encoding
  var generatedLink="mailto:"+userInput+"?subject="+userInput_subj+"&cc="+userInput_cc+"&bcc="+userInput_bcc+"&body="+userInput_body;
  console.log(generatedLink); 
  // Set the generated link as the value of the input field
  inputElement.value=generatedLink;

  // Open the generated link in a new tab if the action is 'test'

  // Enable buttons in the button_tray
  var buttonTray=document.getElementById("buttons_holderEM");
  buttonTray.classList.remove("disabled-buttonsEM");
  var scrollPosition = window.scrollY;
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

function testLinkEM() {
  // Construct the Instagram profile link
  var inputElement=document.querySelector(".inputEM");
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var testLink=userInput;

  // Open the test link in a new tab
  window.open(testLink, "_blank");

  // Additional logic for testing the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Testing link...");
}

 function copyLinkEM() {
    // Get the generated link input field
    var generatedLinkField=document.querySelector(".inputEM");
  
    // Get the value of the input field
    var inputValue=generatedLinkField.value;
  
    // Set the generated link as the value of the input field
    generatedLinkField.value=inputValue;
    
      // Log a message or perform any other actions after copying
      console.log("Link copied to clipboard!");
  
    // Select the text in the generated link input field
    generatedLinkField.select();
    // generatedLinkField.setSelectionRange(0, 99999);
    /* For mobile devices */
  
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Deselect the text
    generatedLinkField.blur();
  }

countEM=1;
function generateQRCodeEM() {
  console.log("generate !R")
  // Get the input field value
  var generatedLinkField=document.querySelector(".inputEM");

  // Check if the input value is not empty
  if (generatedLinkField !==""&& countEM==1) {
    console.log(generatedLinkField.value)
    // Create a QR code with the input value
    var qrCode=new QRCode(document.getElementById("qr-codeEM"), {
        text: generatedLinkField.value,
        width: 200,
        height: 200,
      }

    );
    countEM++;
    console.log("qr generated");

    // Show the QR code section
    document.getElementById("qr-code-sectionEM").style.display="block";
  }

  else {
    alert("QR code already generated.");
  }

}

function anchorcodeEM() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".inputEM");

  // Get the value of the input field
  var inputValue=generatedLinkField.value;

  // Construct the anchor tag code
  var codeforweb="<a href=\""+inputValue+"\" title=\"EMail\">Click here to Mail us.</a>  // This code was generated on Linkers' Project. Visit us for more";

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

// Email OPTIONS END FROM HERE







// Whatsapp OPTIONS START FROM HERE
function validateInputWA() {
  var inputElement = document.querySelector(".inputWA");
  var generateBtn = document.getElementById("generateBtnWA");
  var inputWarning = document.getElementById("input_warningWA");

  inputWarning.style.display = inputElement.value.trim() === "" ? "block" : "none";
  generateBtn.disabled = inputElement.value.trim() === "";
}

function generateLinkWA() {
  var inputElement = document.querySelector(".inputWA");
  var inputElementtext = document.querySelector(".inputWA_text");
  var userInput = inputElement.value.trim();
  var userInput_text = inputElementtext.value.trim();
  var generatedLink = "https://wa.me/" + userInput + "?&text=" + encodeURIComponent(userInput_text);

  inputElement.value = generatedLink;

  var buttonTray = document.getElementById("buttons_holderWA");
  buttonTray.classList.remove("disabled-buttonsWA");

  window.scrollTo(0, scrollPosition);

  var copyLink = document.getElementById("copyLink");
  copyLink.disabled = false;

  console.log("Link generated!");
}

function testLinkWA() {
  // Construct the Instagram profile link
  var inputElement=document.querySelector(".inputWA");
  var userInput=inputElement.value.trim(); // Get user input

  // Construct the full Instagram profile link with proper encoding
  var testLink=userInput;

  // Open the test link in a new tab
  window.open(testLink, "_blank");

  // Additional logic for testing the link goes here
  // For demonstration purposes, we'll just log a message
  console.log("Testing link...");
}

function copyLinkWA() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".inputWA");

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

countWA=1;

function generateQRCodeWA() {
  // Get the input field value
  var generatedLinkField=document.querySelector(".inputWA");

  // Check if the input value is not empty
  if (generatedLinkField !==""&& countWA==1) {
    console.log(generatedLinkField.value)
    // Create a QR code with the input value
    var qrCode=new QRCode(document.getElementById("qr-codeWA"), {
        text: generatedLinkField.value,
        width: 200,
        height: 200,
      }

    );
    countWA++;
    console.log("qr generated");

    // Show the QR code section
    document.getElementById("qr-code-sectionWA").style.display="block";
  }

  else {
    alert("QR code already generated.");
  }

}

function anchorcodeWA() {
  // Get the generated link input field
  var generatedLinkField=document.querySelector(".inputWA");

  // Get the value of the input field
  var inputValue=generatedLinkField.value;

  // Construct the anchor tag code
  var codeforweb="<a href=\""+inputValue+"\" title=\"Whatsapp\">Click to chat on Whatsapp</a>  // This code was generated on Linkers' Project. Visit us for more";

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

// Whatsapp OPTIONS ENDS FROM HERE


// Linkedin OPTIONS START FROM HERE
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
  countLK=1;

  function generateQRCodeLK() {
    // Get the input field value
    var generatedLinkFieldLK=document.querySelector(".inputLK");
  
    // Check if the input value is not empty
    if (generatedLinkFieldLK !==""&& countLK==1) {
      console.log(generatedLinkFieldLK.value)
      // Create a QR code with the input value
      var qrCode=new QRCode(document.getElementById("qr-codeLK"), {
          text: generatedLinkFieldLK.value,
          width: 200,
          height: 200,
        }
  
      );
      countLK++;
      console.log("qr generated");
  
      // Show the QR code section
      document.getElementById("qr-code-sectionLK").style.display="block";
    }
  
    else {
      alert("QR code already generated.");
    }
  
  }

  function anchorcodeLK() {
    // Get the generated link input field
    var generatedLinkField=document.querySelector(".inputLK");
  
    // Get the value of the input field
    var inputValue=generatedLinkField.value;
  
    // Construct the anchor tag code
    var codeforweb="<a href=\""+inputValue+"\" title=\"Linkedin\">Click to visit us on Linkedin </a>  // This code was generated on Linkers' Project. Visit us for more";
  
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
  
  // Linkedin OPTIONS END FROM HERE

  