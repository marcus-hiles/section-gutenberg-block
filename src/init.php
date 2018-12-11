<?php
/**
 * Blocks Initializer
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 */
function marcus_hiles_gutenberg_blocks_cgb_block_assets() {
	wp_enqueue_style(
		'marcus_hiles_gutenberg_blocks-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array(),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' )
	);
}

add_action( 'enqueue_block_assets', 'marcus_hiles_gutenberg_blocks_cgb_block_assets', 1000 );

/**
 * Enqueue Gutenberg block assets for backend editor.
 */
function marcus_hiles_gutenberg_blocks_cgb_editor_assets() {
	wp_enqueue_script(
		'marcus_hiles_gutenberg_blocks-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ),
		true
	);
	wp_enqueue_style(
		'marcus_hiles_gutenberg_blocks-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' )
	);
}

add_action( 'enqueue_block_editor_assets', 'marcus_hiles_gutenberg_blocks_cgb_editor_assets' );