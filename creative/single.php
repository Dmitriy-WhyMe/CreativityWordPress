<?php get_header(); ?>

    <div class="single_post">
        <div class="wrapper">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <h2 class="post_title"><?php the_title(); ?></h2>
                    <div class="post_info">
                    	 <div class="post_img">
                        	<?php echo get_the_post_thumbnail( $post_id = null, $size = 'post-thumbnail', $attr = '' ); ?>
                        </div>
                        <div class="sew">
                        	<div class="post_author">
                            	<i class="fa fa-user" aria-hidden="true"></i> <?php echo the_author_posts_link(); ?>
                        	</div>
	                        <div class="post_date">
	                            <i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo get_the_date(); ?>
	                        </div>
                        </div>
                        
                       
                        
                    </div>
                <div class="post_content story">
                    <?php the_content(); ?>
                </div>
            <?php endwhile;  endif;  ?>
            <div class="blog-line"></div>
            <?php comments_template(); ?>
        </div>
    </div>

<?php get_footer(); ?>