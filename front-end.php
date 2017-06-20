<?php
/*
Template Name: Front_End_Listings
*/
?>
<?php require("head.php") ?>
<body>
<?php require("navigation.php") ?>
<div class="wrapper listing-wrapper">
	<h1>Front End Resources</h1>
	<div class="container">
		<h2>HTML/CSS</h2>
	</div><!--container-->
	<div id="html-css-resources"></div>
		<h3>Bootstrap</h3>
		<h3>Foundations</h3>
	<div class="container">
		<h2>JavaScript</h2>
	</div><!--container-->
		<h3>jQuery</h3>
		<h3>AngularJS</h3>
		<h3>ReactJS</h3>
	<div class="container">
		<h2>Wordpress</h2>
	</div><!--container-->
</div><!--listing wrapper-->
<?php require("footer-tags.php") ?>
<script src="<?php bloginfo( 'template_directory' ); ?>/js/components/ListingContainer.js"></script>
</body>
</html>