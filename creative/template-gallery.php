<?php 
/**
 * Template Name: Template Gallery
 */
// send gallery
if (isset($_POST['gallery'])) {
	$error = ale_send_contact($_POST['gallery']);
}
get_header();
?>
    <?php 
        $arg_cat = array(
            'orderby'      => 'name',
            'order'        => 'ASC',
            'hide_empty'   => 1,
            'exclude'      => '',
            'include'      => 12,
            'taxonomy'     => 'category',
        );
        $categories = get_categories( $arg_cat );
    ?>
<div class="template_gallery">
            <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
            <div id="post-<?php the_ID(); ?>" <?php post_class('g post'); ?>>
                <div class="single_page">
                    <div class="post-content box mark-links entry-content">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
            <?php endwhile; ?>
            <?php 
                if( $categories ){
                foreach( $categories as $cat ){
                    
                $arg_posts =  array(
                    'orderby'      => 'name',
                    'order'        => 'ASC',
                    'post_type' => 'post',
                    'post_status' => 'publish',
                    'cat' => $cat->cat_ID,
                );
                $query = new WP_Query($arg_posts);
        
                ?>
                <?php if ($query->have_posts() ) ?>
                <div class="h2category"><h2><?php echo $cat->name; ?> </h2></div>
                <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                                <div class="main-page-post">
                                    <!--<a href="<?php// the_permalink(); ?>">-->
                                    <!--<?php// the_post_thumbnail( 'widgetfull' );?>-->
                                    </a>
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    <?php the_content(); ?>
                                </div>
                <?php endwhile; wp_reset_postdata()?>
                <?php       
                    }
                }
            ?>
            <!-- Blog Nav  -->
                <div class="blog-nav">
                    <span class="left"><?php echo get_previous_posts_link(__('<i class="fa fa-angle-left" aria-hidden="true"></i> Новые публикации','aletheme')); ?></span>
                    <span class="right"><?php echo get_next_posts_link(__('Прошлые публикации <i class="fa fa-angle-right" aria-hidden="true"></i>','aletheme')); ?></span>
                    <div class="center"><?php _e('Страница','aletheme'); ?> <?php echo $paged; ?> <?php _e('из','aletheme'); ?> <?php echo $wp_query->max_num_pages; ?></div>
                </div>
                

</div>
<?php get_footer(); ?>  
