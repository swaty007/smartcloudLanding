<?php

/*
Template name: Page Webinar Rus Almati
*/
get_header();

if (have_posts()) : while (have_posts()) : the_post();

    get_template_part( 'parts/pages/webinar-rus/part', 'webinar-rus-almati' );

endwhile; else: endif;

get_template_part( 'parts/overall/overall', 'footer' );
get_footer();