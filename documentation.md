# Documentation of changes from Project Part 1
### Abigail Wezelis
* PHP used for:
	* All html file extentions changed to php
	* To echo head, header, and footer on each page
		* Implemeted by importing a common php file which has functions to echo the head, header, and footer.  The functions to echo the head/header take a string input of the current page url so that the correct information can be formatted in the echoed output.  This is not needed for the footer, since it is formatted the same on each page.
	* To handle form submission
		* On submit, the contact.php page is redirected to submit.php, which adds the POST data to the "contact" database (if it exists) and then redirects back to the contact.php page.
* JQuery / Javascript used for:
	* Form checking
		* Check whether the form inputs are properly filled out, and if not suppress the default submit action (redirection to submit.php).  This functionality was improved with the use of JQuery instead of Vanilla JS.
	* AJAX request
		* On the click of the "I'm feelin' the force" button, make a request to the Star Wars API (https://swapi.co/) for a random piece of data, and then format and echo the returned JSON object below the contact form.  
