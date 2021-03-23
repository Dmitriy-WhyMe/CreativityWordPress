<?php get_header(); ?>
    <!-- Content -->
    <div class="page-center">
        <div class="content">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="h2" ><?php the_title(); ?></div>
                <div class="contact-content">
                    <?php ale_part('pagehead');?>
                    <?php the_content(); ?>
                    <?php ale_part('pagefooter');?>
                </div>
            <?php endwhile; else: ?>
            <?php ale_part('notfound')?>
            <?php endif; ?>
            <!-- Blog Nav  -->
                <div class="blog-nav">
                    <span class="left"><?php echo get_previous_posts_link(__('<i class="fa fa-angle-left" aria-hidden="true"></i> Новые публикации','aletheme')); ?></span>
                    <span class="right"><?php echo get_next_posts_link(__('Прошлые публикации <i class="fa fa-angle-right" aria-hidden="true"></i>','aletheme')); ?></span>
                    <div class="center"><?php _e('Страница','aletheme'); ?> <?php echo $paged; ?> <?php _e('из','aletheme'); ?> <?php echo $wp_query->max_num_pages; ?></div>
                </div>
        </div>
    </div>
<?php get_footer(); ?>