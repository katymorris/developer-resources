<?php
/*
Template Name: Web_Developer_Resources
*/
?>
<?php require("head.php") ?>
<body>
<div class="loading-screen">
	<div class="placeholder">
	  <div class="loading-circle"></div>
	</div>
</div>
<!--Navigation-->
<?php require("navigation.php") ?>
<div class="wrapper home-wrapper">
	<div id="main-img"></div>
	<div id="main-img-overlay"></div>
	<div id="resource-box-container">
		<a href="<?php echo get_page_link(26); ?>">
			<div class="resource-box resource-box-1">
				<p>Front End Development</p>
			</div>
		</a>
		<a href="<?php echo get_page_link(28); ?>">
			<div class="resource-box resource-box-2">
				<p>Back End Development</p>
			</div>
		</a>
	</div><!--resource box container-->
</div><!--home wrapper-->
<?php require("footer-tags.php") ?>
</body>
</html>