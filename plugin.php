<?php
/**
 * Plugin Name: Basis Technologies Custom Gutenberg Blocks
 * Description: Basis Technologies Custom Gutenberg Blocks
 * Version: 1.0.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
