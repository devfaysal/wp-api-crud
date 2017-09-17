<?php
/**
 * Plugin Name: Fay Bulk Post
 * Plugin URI: http://faysal.me
 * Description: Fay Bulk Post is a plugin to create thousands of posts in one click
 * Author: Faysal Ahamed
 * Author URI: http://faysal.me
 * Version: 0.0.1
 */
function learningWordPress_resources() {
	$plugin_url = plugin_dir_url( __FILE__ );
	wp_enqueue_script('main_js', $plugin_url . 'main.js', NULL, 1.0, true);
	wp_localize_script('main_js', 'magicalData', array(
		'nonce' => wp_create_nonce('wp_rest'),
		'siteURL' => get_site_url()
	));
}
add_action('admin_enqueue_scripts', 'learningWordPress_resources');


function fay_bulk_post() {
    add_menu_page('Fay Bulk Post', 'Fay Bulk Post', 'manage_options', 'fay_bulk_post', 'fay_bulk_post_function', 'dashicons-video-alt3');
    
}
add_action( 'admin_menu', 'fay_bulk_post' );


function fay_bulk_post_function(){
    include_once 'form.php';
}