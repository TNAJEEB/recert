function sendEmail() {
  let req = new XMLHttpRequest();
  var email = document.querySelector("#emailid");

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      if (req.status >= 200 && req.status < 300) {
        alert("Email received successfully! We will send the book chapter to you soon after it's published. Thank you!");
        email.value = "AnotherEmail@mail.com ;)"
      } else {
        alert("Error in Email. Please try again.");
      }
    }
  };

  req.open("POST", "https://api.jsonbin.io/v3/b", true);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader(
    "X-Access-Key",
    "$2a$10$A3g864DXph8y8R2L9qrE8.4jOS0ykTLtfmYRmKZ709t6L4Nm2sTp6"
  );

  var jsonPayload = JSON.stringify({ email: email.value });

  req.send(jsonPayload); 
  return false;
}
