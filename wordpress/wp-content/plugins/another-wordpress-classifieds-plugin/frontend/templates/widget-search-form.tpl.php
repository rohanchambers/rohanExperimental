<p>
    <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php _e('Title:', 'another-wordpress-classifieds-plugin'); ?></label>
    <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
</p>

<p>
    <label for="<?php echo esc_attr( $this->get_field_id( 'subtitle' ) ); ?>"><?php _e('Subtitle:', 'another-wordpress-classifieds-plugin'); ?></label>
    <input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'subtitle' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'subtitle' ) ); ?>" type="text" value="<?php echo esc_attr($subtitle); ?>" />
</p>

<p>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_keyword' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_keyword' ) ); ?>" type="checkbox" value="1" <?php echo $show_keyword == 1 ? " checked='checked'" : "" ?> />
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_keyword' ) ); ?>"><?php _e('Show keyword field?', 'another-wordpress-classifieds-plugin'); ?></label>
    <br/>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_by' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_by' ) ); ?>" type="checkbox" value="1" <?php echo $show_by == 1 ? " checked='checked'" : "" ?> />
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_by' ) ); ?>"><?php _e('Show Posted By field?', 'another-wordpress-classifieds-plugin'); ?></label>
    <br/>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_city' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_city' ) ); ?>" type="checkbox" value="1" <?php echo $show_city == 1 ? " checked='checked'" : "" ?> />
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_city' ) ); ?>"><?php _e('Show City field?', 'another-wordpress-classifieds-plugin'); ?></label>
    <br/>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_county' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_county' ) ); ?>" type="checkbox" value="1" <?php checked( $show_county, 1 ); ?>/>
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_county' ) ); ?>"><?php esc_html_e( 'Show County field?', 'another-wordpress-classifieds-plugin' ); ?></label>
    <br/>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_state' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_state' ) ); ?>" type="checkbox" value="1" <?php echo $show_state == 1 ? " checked='checked'" : "" ?> />
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_state' ) ); ?>"><?php _e('Show State field?', 'another-wordpress-classifieds-plugin'); ?></label>
    <br/>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_country' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_country' ) ); ?>" type="checkbox" value="1" <?php echo $show_country == 1 ? " checked='checked'" : "" ?> />
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_country' ) ); ?>"><?php _e('Show Country field?', 'another-wordpress-classifieds-plugin'); ?></label>
    <br/>
    <input id="<?php echo esc_attr( $this->get_field_id( 'show_category' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'show_category' ) ); ?>" type="checkbox" value="1" <?php echo $show_category == 1 ? " checked='checked'" : "" ?> />
    <label for="<?php echo esc_attr( $this->get_field_id( 'show_category' ) ); ?>"><?php _e('Show Category field?', 'another-wordpress-classifieds-plugin'); ?></label>
</p>
