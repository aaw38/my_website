<!doctype html>
<?php
  include './common.php';
?>
<html>
  <?php
      echoHead("contact");
  ?>  
  <body>
    <?php
      echoHeader("Contact");
    ?>
    <main>
      <h1>Contact</h1>
      <noscript>
        <p>
          JavaScript appears to be disabled on your browser. Please enable JavaScript to submit this form.
        </p>
      </noscript>
      <?php
        if (isSet)
      <form id="contact-form" action="submit.php" method="post">
        <div class="question">
          <p>
            *Name:
          </p>
          <input type="text" id="name" name="yourName"/>
        </div>
        <div class="question">
          <p>
            *Email:
          </p>
          <input type="text" id="email" name="yourEmail"/>
        </div>
        <div class="question">
          <p>
            *Subject:
          </p>
          <input type="text" id="subject" name="yourSubject"/>
        </div>
        <div class="question">
          <p>
            *Message:
          </p>
          <textarea id="message" name="yourMessage"></textarea>
        </div>
        <div>
          <p id="required-message">
            * denotes a required field
          </p>
          <input type="reset" id="resetbutton" value="Reset" />
          <input type="submit" id="submitbutton" value="Submit" />
          <input type="button" id="starwars" value="I'm feelin' the force" />
        </div>
      </form>
      <div id="funfact"></div>
   	</main>
   	<?php
      echoFooter();
    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script src="./js/contact.js"></script>
  </body>
</html>