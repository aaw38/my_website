function validate() {
	var name = document.forms["contact-form"]["yourname"].value;
	var email = document.forms["contact-form"]["youremail"].value;
	var org = document.forms["contact-form"]["yourorg"].value;
	var subject = document.forms["contact-form"]["yoursubject"].value;
	var message = document.forms["contact-form"]["yourmessage"].value;

	if (name === "")
	{
		alert("You must provide your name");
		return;
	}

	if (email === "")
	{
		alert("You must provide your email");
		return;
	}

	if (subject === "")
	{
		alert("You must provide your subject");
		return;
	}

	if (message === "")
	{
		alert("You must provide your message");
		return;
	}

	if (!testEmail(email))
	{
		alert("Invalid email address");
		document.getElementById("email").reset();
		return;
	}

	submit(name, email, org, subject, message);
	return;
}

function submit(name, email, org, subject, message) {
	document.forms["contact-form"].reset();
	//do something with the data collected here.
	return;
}

function testEmail(email) {
	var at = email.indexOf("@");
	var dot = email.lastIndexOf(".");
	if (at < 1 || dot < at + 2 || email.length <= dot + 2)
	{
		return false;
	}
	return true;
}