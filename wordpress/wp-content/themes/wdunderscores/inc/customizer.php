<?php
/**
 * wdunderscores Theme Customizer.
 *
 * @package wdunderscores
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function _customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	// Add our social link options.
    $wp_customize->add_section(
        '_social_links_section',
        array(
            'title'       => esc_html__( 'Social Links', 'wdunderscores' ),
            'description' => esc_html__( 'These are the settings for social links. Please limit the number of social links to 5.', 'wdunderscores' ),
            'priority'    => 90,
        )
    );

    // Create an array of our social links for ease of setup.
    $social_networks = array( 'facebook', 'googleplus', 'instagram', 'linkedin', 'twitter' );

    // Loop through our networks to setup our fields.
    foreach( $social_networks as $network ) {

	    $wp_customize->add_setting(
	        '_' . $network . '_link',
	        array(
	            'default' => '',
	            'sanitize_callback' => '_sanitize_customizer_url'
	        )
	    );
	    $wp_customize->add_control(
	        '_' . $network . '_link',
	        array(
	            'label'   => sprintf( esc_html__( '%s Link', 'wdunderscores' ), ucwords( $network ) ),
	            'section' => '_social_links_section',
	            'type'    => 'text',
	        )
	    );
    }

    // Add our Footer Customization section section.
    $wp_customize->add_section(
        '_footer_section',
        array(
            'title'    => esc_html__( 'Footer Customization', 'wdunderscores' ),
            'priority' => 90,
        )
    );

    // Add our copyright text field.
    $wp_customize->add_setting(
        '_copyright_text',
        array(
            'default' => ''
        )
    );
    $wp_customize->add_control(
        '_copyright_text',
        array(
            'label'       => esc_html__( 'Copyright Text', 'wdunderscores' ),
            'description' => esc_html__( 'The copyright text will be displayed beneath the menu in the footer.', 'wdunderscores' ),
            'section'     => '_footer_section',
            'type'        => 'text',
            'sanitize'    => 'html'
        )
    );
}
add_action( 'customize_register', '_customize_register' );

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function _customize_preview_js() {
    wp_enqueue_script( '_customizer', get_template_directory_uri() . '/assets/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', '_customize_preview_js' );

/**
 * Sanitize our customizer text inputs.
 */
function _sanitize_customizer_text( $input ) {
    return sanitize_text_field( force_balance_tags( $input ) );
}

/**
 * Sanitize our customizer URL inputs.
 */
function _sanitize_customizer_url( $input ) {
    return esc_url( $input );
}
