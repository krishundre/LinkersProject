function SendMail(){
    var paras= {
      from_name : document.getElementById("fullName").value,
      email_id : document.getElementByID("email_id").value,
      message: document.getElementById("message").value
    }
  emailjs.send("service_h9fc05o","template_kqdqxfq",paras).then(function(res){
    alert("Success!!" + res.status);
  })
  }