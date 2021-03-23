
    <footer class="main-footer <?php if(!is_page_template('page-home.php') and !is_page_template('template-about.php')){ echo 'border-top-footer'; } ?>">
        <div class="bottom_footer">
            <div class="wrapper">
				<div class="footer_logo footer_inner width pulse">
                    <?php if(ale_get_option('footerlogo')){ ?>
                        <a href="<?php echo home_url("/"); ?>" class="logo_link"><img src="<?php echo ale_get_option('footerlogo'); ?>" /></a>
                   <?php  } ?>
                </div>
                <div class="copyrights width">
                    <?php if (ale_get_option('copyrights')) : ?>
                        <?php echo ale_get_option('copyrights'); ?>
                        <div class="footer_socials width">
                            <?php if(ale_get_option('yt')){ ?><a href="<?php echo ale_get_option('yt') ?>"><i class="fa fa-vk" aria-hidden="true"></i></a><?php } ?>
                            <?php if(ale_get_option('insta')){ ?><a href="<?php echo ale_get_option('insta') ?>"><i class="fa fa-instagram" aria-hidden="true"></i></a><?php } ?>
                            <?php if(ale_get_option('twi')){ ?><a href="<?php echo ale_get_option('twi') ?>"><i class="fa fa-twitter-square" aria-hidden="true"></i></a><?php } ?>
                            <?php if(ale_get_option('fb')){ ?><a href="<?php echo ale_get_option('fb') ?>"><i class="fa fa-facebook" aria-hidden="true"></i></a><?php } ?>
                        </div>
                    <?php else: ?>
                        &copy; <?php _e('2016 All Rights Reserved “Iglesia” ', 'aletheme')?>
                    <?php endif; ?>
                </div>
                <div class="footer_social width">
                    <?php if(ale_get_option('yt')){ ?><a href="<?php echo ale_get_option('yt') ?>"><i class="fa fa-vk" aria-hidden="true"></i></a><?php } ?>
                    <?php if(ale_get_option('insta')){ ?><a href="<?php echo ale_get_option('insta') ?>"><i class="fa fa-instagram" aria-hidden="true"></i></a><?php } ?>
                    <?php if(ale_get_option('twi')){ ?><a href="<?php echo ale_get_option('twi') ?>"><i class="fa fa-twitter-square" aria-hidden="true"></i></a><?php } ?>
                    <?php if(ale_get_option('fb')){ ?><a href="<?php echo ale_get_option('fb') ?>"><i class="fa fa-facebook" aria-hidden="true"></i></a><?php } ?>

                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    
</body>
<?php wp_footer(); ?>
</html>