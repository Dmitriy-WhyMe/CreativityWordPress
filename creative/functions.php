<?php
/****************************************************************
 * DO NOT DELETE
 ****************************************************************/
if ( get_stylesheet_directory() == get_template_directory() ) {
	define('ALETHEME_PATH', get_template_directory() . '/aletheme');
	define('ALETHEME_URL', get_template_directory_uri() . '/aletheme');
}  else {
    define('ALETHEME_PATH', get_theme_root() . '/fuerza/aletheme');
    define('ALETHEME_URL', get_theme_root_uri() . '/fuerza/aletheme');
}

require_once ALETHEME_PATH . '/init.php';

load_theme_textdomain( 'aletheme', get_template_directory() . '/lang' );
$locale = get_locale();
$locale_file = get_template_directory() . "/lang/$locale.php";
if ( is_readable($locale_file) )
    require_once($locale_file);

/****************************************************************
 * You can add your functions here.
 * 
 * BE CAREFULL! Functions will dissapear after update.
 * If you want to add custom functions you should do manual
 * updates only.
 ****************************************************************/
function my_register_sidebars() {
/* регистрация правого сайдбара */
	register_sidebar(
		array(
			'id' => 'right-side', // уникальный id для сайта, назначается правому сайдбару
			'name' => 'Правая колонка', // название сайдбара, которое будет отображаться в админке
			'description' => 'Перетяните виджеты, чтобы добавить их в сайдбар.', // описание выводимое в админке для сайдбара
			'before_widget' => '<div class="r-sidebar">', // по умолчанию виджеты выводятся <li>-списком
			'after_widget' => '</div>', // в этой и предыдущей строке мы задали контейнер в котором будет размещен сайдбар
			'before_title' => '<h3 class="r-wtitle">', // если оставить пустым, будет выводиться в <h2>
			'after_title' => '</h3>'
		)
	);
 
/* регистрация левого сайдбара */
	register_sidebar(
		array(
			'id' => 'left-side', // уникальный id для сайта, назначается правому сайдбару
			'name' => 'Левая колонка', // название сайдбара, которое будет отображаться в админке
			'description' => 'Перетяните виджеты, чтобы добавить их в сайдбар.', // описание выводимое в админке для сайдбара
			'before_widget' => '<div class="l-sidebar">', // по умолчанию виджеты выводятся <li>-списком
			'after_widget' => '</div>', // в этой и предыдущей строке мы задали контейнер в котором будет размещен сайдбар
			'before_title' => '<h3 class="l-wtitle">', // если оставить пустым, будет выводиться в <h2>
			'after_title' => '</h3>'
		)
	);
/* регистрация сайдбара для футера */
	register_sidebar(
		array(
			'id' => 'footer-side', // уникальный id для сайта, назначается правому сайдбару
			'name' => 'Нижний сайдбар', // название сайдбара, которое будет отображаться в админке
			'description' => 'Перетяните виджеты, чтобы добавить их в сайдбар.', // описание выводимое в админке для сайдбара
			'before_widget' => '<div class="f-sidebar">', // по умолчанию виджеты выводятся <li>-списком
			'after_widget' => '</div>', // в этой и предыдущей строке мы задали контейнер в котором будет размещен сайдбар
			'before_title' => '<h3 class="f-wtitle">', // если оставить пустым, будет выводиться в <h2>
			'after_title' => '</h3>'
		)
	);
}
 
add_action( 'widgets_init', 'my_register_sidebars' );