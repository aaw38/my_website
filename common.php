<?php
	function echoHead($current)
	{
		echo '<head>
			    <title>Abigail Wezelis</title>
			    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css">
			    <link rel="stylesheet" type="text/css" href="./css/common.css">
			    <link rel="stylesheet" type="text/css" href="./css/' . $current . '.css">
			    <link rel="icon" href="./images/favicon.ico">
			  </head>';
	}

	function echoHeader($current)
	{
		$urls = array(
			'Home' => './index.php', 
			'About' => './about.php', 
			'Resume' => './resume.php', 
			'Contact' => './contact.php'
		);

		foreach ($urls as $key => $value)
		{
			if ($key === $current)
				$urls[$key] = '#" class="current-selected';
		}

		echo '<header>
			    <nav>
			      <ul>
					<li id="home-block">
				      <a href="' . $urls['Home'] . '">
				        <img id="home-widget" src="./images/handwriting.png" alt="my non-legal signature">
				      </a>
				    </li>';

	    foreach($urls as $key => $value)
	    {
	    	echo   '<li>
	    	          <a href="' . $value . '">' . $key . '</a>
	    	        </li>';
	   	}


	    echo '    </ul>
	            </nav>
	          </header>'; 
	}

	function echoFooter()
	{
	    echo '<footer>
		        <nav>
		          <ul>
		            <li id="footer-quote">
		              "It is our choices ... that show what we truly are, far more than our abilities." - J.K. Rowling
		            </li>
		            <li>
		              <a href="https://www.linkedin.com/in/abigail-wezelis-87bb0a107/" target="_blank">
		                <img src="./images/linkedin-icon.png" alt="linkedin icon">
		              </a>
		            </li >
		            <li>
		              <a href="https://studylyon.wordpress.com" target="_blank">
		                <img src="./images/wordpress-icon.png" alt="wordpress icon">
		              </a>
		            </li>
		            <li>
		              <a href="https://www.instagram.com/abby314159/?hl=en" target="_blank">
		                <img src="./images/instagram-icon.png" alt="instagram icon">
		              </a>
		            </li>
		            <li>
		              <a href="https://github.com/aaw38" target="_blank">
		                <img src="./images/github-icon.png" alt="github icon">
		              </a>
		            </li>
		          </ul>
		        </nav>
		   	  </footer>';
	}
?>