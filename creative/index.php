<?php get_header(); ?>
    <!-- Content -->
    <div class="blog-center-align">
        <div class="wrapper">
            <div class="left-colon">
                <div class="search_container">
                    <h3>Поиск по сайту</h3>
                    <?php echo get_search_form(); ?> 
                </div>
                <?php if ( is_active_sidebar( 'left-side' ) ) : ?>
                    <div class="sidebar">
                        <?php dynamic_sidebar( 'left-side' ); ?>
                    </div> 
            <?php endif; ?> 
            </div>
            <div class="main">
                <div class="bg">
                    <h2>Последнии публикации</h2>
                </div>
                
                <!-- Blog Content -->
                <div class="blog-content">
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <?php ale_part('postpreview' );?>
                        <div class="info_post">
                            <p>Автор публикации: <?php the_author_posts_link(); ?></p>
                            <!-- <p class="date_post">Опубликовано: <?php the_date(); ?></p>-->
                            <p class="rubrik">Рубрика:</p> <?php the_category();?>
                        </div>
                        <div class="blog-line"></div>
                    <?php endwhile; else: ?>
                        <?php ale_part('notfound')?>
                    <?php endif; ?>
                </div>
                <!-- Blog Nav  -->
                <div class="blog-nav">
                    <span class="left"><?php echo get_previous_posts_link(__('<i class="fa fa-angle-left" aria-hidden="true"></i> Новые публикации','aletheme')); ?></span>
                    <span class="right"><?php echo get_next_posts_link(__('Прошлые публикации <i class="fa fa-angle-right" aria-hidden="true"></i>','aletheme')); ?></span>
                    <div class="center"><?php _e('Страница','aletheme'); ?> <?php echo $paged; ?> <?php _e('из','aletheme'); ?> <?php echo $wp_query->max_num_pages; ?></div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer(); ?>