// initialise function
function validate(){
  var name = document.getElementById("name").value; // variable to pull name in from contact form
  var subject = document.getElementById("subject").value; // variable to pull subject in from contact form
  var email = document.getElementById("email").value; // variable to pull email in from contact form
  var message = document.getElementById("message").value; // variable to pull message in from contact form
  var error_message = document.getElementById("error_message"); // variable to pull error message in from contact form
  
  // add padding to error message
  error_message.style.padding = "10px";

  // validate user name
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  // validate subject more than 5 characters
  if(subject.length < 5){
    text = "Please Enter More than 5 Characters";
    error_message.innerHTML = text;
    return false;
  }
  // validate email address
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  // validate message of no more then 30 characters
  if(message.length <= 30){
    text = "Message should contain 30 characters";
    error_message.innerHTML = text;
    return false;
  }
  // alert to show form submission
  alert("Form Submitted Successfully!");
  return true;
}