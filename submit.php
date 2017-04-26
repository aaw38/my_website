<?php
$servername = "localhost";
$username = "name";
$password = "password";
$dbname = "contact";

if (!isset($_POST['yourName']) || 
  !isset($_POST['yourEmail']) || 
  !isset($_POST['yourSubject']) || 
  !isset($_POST['yourMessage']))
{
  echo "<script>";
  echo "alert('Error.  Something went wrong when processing form. Please try again');";
  echo "window.location = './contact.php';";
  echo "</script>";
}

// Create connection
$db = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
    echo "<script>";
    echo "alert('Error.  Something went wrong when processing form. Please try again');";
    echo "window.location = './contact.php';";
    echo "</script>";
} 

//assume that database will be read in and displayed as html -> convert special chars
//also to avoid conflict with either double or single quotes
$name = htmlspecialchars($_POST['yourName'], ENT_QUOTES);
$email = htmlspecialchars($_POST['yourEmail'], ENT_QUOTES);
$subject = htmlspecialchars($_POST['yourSubject'], ENT_QUOTES);
$message = htmlspecialchars($_POST['yourMessage'], ENT_QUOTES);

$sql = "INSERT INTO Users (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

if ($db->query($sql) !== TRUE)
{
  echo "<script>";
  echo "alert('Error.  Something went wrong when processing form. " . $db->error . " Please try again');";
  $db->close();
  echo "window.location = './contact.php';";
  echo "</script>";
}
else
{
  $db->close();
  echo "<script>";
  echo "alert('Form submission successful. Thank you for contacting us!');";
  echo "window.location = './contact.php';";
  echo "</script>";
}
?>