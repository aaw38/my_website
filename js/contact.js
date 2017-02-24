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

	if (!testEmail(email))
	{
		alert("Invalid email address");
		document.getElementById("email").reset();
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

	submit(name, email, org, subject, message);
	return;
}

function submit(name, email, org, subject, message) {
	document.forms["contact-form"].innerHTML = "Sorry, not taking contact information at this time. Feel free to contact me at aaw38@pitt.edu or on any of my social networking profiles (linked at bottom of page)";
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