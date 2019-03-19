<!DOCTYPE html>
<?php global $woocommerce; ?>
<html class="" <?php language_attributes(); ?>>
<head>
    <?php if ( isset( $_SERVER['HTTP_USER_AGENT'] ) && ( false !== strpos( $_SERVER['HTTP_USER_AGENT'], 'MSIE' ) ) ) : ?>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <?php endif; ?>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <?php
    if ( ! function_exists( '_wp_render_title_tag' ) ) {
        function avada_render_title() {
            ?>
            <title><?php wp_title( '' ); ?></title>
            <?php
        }
        add_action( 'wp_head', 'avada_render_title' );
    }
    ?>

    <!--[if lte IE 8]>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/html5shiv.js"></script>
    <![endif]-->

    <?php $isiPad = (bool) strpos( $_SERVER['HTTP_USER_AGENT'],'iPad' ); ?>

    <?php
    $viewport = '';
    if ( Avada()->settings->get( 'responsive' ) && $isiPad ) {
        $viewport = '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />';
    } else if ( Avada()->settings->get( 'responsive' ) ) {
        if ( Avada()->settings->get( 'mobile_zoom' ) ) {
            $viewport .= '<meta name="viewport" content="width=device-width, initial-scale=1" />';
        } else {
            $viewport .= '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />';
        }
    }

    $viewport = apply_filters( 'avada_viewport_meta', $viewport );
    echo $viewport;
    ?>

    <?php wp_head(); ?>

    <?php

    $object_id = get_queried_object_id();
    $c_pageID  = Avada::c_pageID();
    ?>


    <script type="text/javascript">
        var doc = document.documentElement;
        doc.setAttribute('data-useragent', navigator.userAgent);
    </script>

    <?php echo Avada()->settings->get( 'google_analytics' ); ?>

    <?php echo Avada()->settings->get( 'space_head' ); ?>

    <?php

    require __DIR__ . '/stripe-test/vendor/autoload.php';
    require_once __DIR__ . '/stripe-test/stripe_config.php';



    $couponCodeParam = null;
    if (array_key_exists('coupon', $_GET) && $_GET['coupon']) {
        $couponCodeParam = $_GET['coupon'];
    }


    $couponObj = null;
    if ($couponCodeParam) {


        $couponObj = $wpdb->get_row($wpdb->prepare(
            "
 SELECT      *
 FROM        stripe_coupons
 WHERE       stripe_coupons.coupon_identifier = %s
 ",
            $couponCodeParam
        ));

    }
    global $PHPPC;
    $PHPPC::$_vars["coupon"] = $couponObj;
    $PHPPC::$_vars["publishableKey"]= StripeData::$publishableKey;
    $PHPPC::$_vars["dataPlans"]= json_encode(StripeData::$dataPlans);
    ?>


</head>
<?php
$wrapper_class = '';


if ( is_page_template( 'blank.php' ) ) {
    $wrapper_class  = 'wrapper_blank';
}

if ( 'modern' == Avada()->settings->get( 'mobile_menu_design' ) ) {
    $mobile_logo_pos = strtolower( Avada()->settings->get( 'logo_alignment' ) );
    if ( 'center' == strtolower( Avada()->settings->get( 'logo_alignment' ) ) ) {
        $mobile_logo_pos = 'left';
    }
}

?>
<body <?php body_class(); ?>>
<?php do_action( 'avada_before_body_content' ); ?>
<?php $boxed_side_header_right = false; ?>
<?php if ( ( ( 'Boxed' == Avada()->settings->get( 'layout' ) && ( 'default' == get_post_meta( $c_pageID, 'pyre_page_bg_layout', true ) || '' == get_post_meta( $c_pageID, 'pyre_page_bg_layout', true ) ) ) || 'boxed' == get_post_meta( $c_pageID, 'pyre_page_bg_layout', true ) ) && 'Top' != Avada()->settings->get( 'header_position' ) ) : ?>
<?php if ( Avada()->settings->get( 'slidingbar_widgets' ) && ! is_page_template( 'blank.php' ) && ( 'Right' == Avada()->settings->get( 'header_position' ) || 'Left' == Avada()->settings->get( 'header_position' ) ) ) : ?>
    <?php get_template_part( 'slidingbar' ); ?>
    <?php $boxed_side_header_right = true; ?>
<?php endif; ?>
<div id="boxed-wrapper">
    <?php endif; ?>
    <div id="wrapper" class="<?php echo $wrapper_class; ?>">
        <div id="home" style="position:relative;top:1px;"></div>
        <?php if ( Avada()->settings->get( 'slidingbar_widgets' ) && ! is_page_template( 'blank.php' ) && ! $boxed_side_header_right ) : ?>
            <?php get_template_part( 'slidingbar' ); ?>
        <?php endif; ?>










        <?php //avada_header_template( 'Below' ); ?>
        <?php

        $c_pageID = Avada::c_pageID();
        if ('no' != $ndsa = get_post_meta( $c_pageID, 'pyre_display_header', true) ) :?>

            <style type="text/css" id="less:new_header-css-less-main">html {
                    overflow: unset!important;
                }
                .navbar-scc-height-fix {
                    height: 77px;
                }
                @media (max-width: 991px) {
                    body.show-scc-navbar {
                        overflow: hidden!important;
                    }
                }
                body.show-scc-navbar .navbar-scc .collapse-scc {
                    opacity: 1;
                    pointer-events: inherit;
                }
                @media (max-width: 991px) {
                    body.show-scc-navbar .navbar-scc .scc-bg {
                        visibility: visible;
                    }
                }
                body.show-scc-navbar .navbar-scc .scc-bg:before {
                    width: 3000px;
                    height: 3000px;
                    top: -1500px;
                    right: -1500px;
                }
                .load .navbar-scc ul.menu-scc li.menu-item .menu-link {
                    opacity: unset;
                }
                .navbar-scc {
                    box-shadow: 0 5px 39px rgba(115, 136, 151, 0.15);
                    background-color: #ffffff;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 99997;
                    display: block;
                }
                .navbar-scc .navbar-container {
                    max-width: 1370px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .navbar-scc .navbar-scc-header {
                    display: inline-block;
                    float: left;
                }
                @media (max-width: 991px) {
                    .navbar-scc .navbar-scc-header {
                        float: none;
                    }
                }
                .navbar-scc .navbar-scc-header .navbar-scc-brand {
                    line-height: 77px;
                    height: 77px;
                }
                .navbar-scc .navbar-scc-header .navbar-scc-brand img {
                    height: 51px;
                }
                .navbar-scc .scc-bg {
                    position: fixed;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100%;
                    width: 100%;
                    visibility: hidden;
                }
                @media (min-width: 992px) {
                    .navbar-scc .scc-bg {
                        display: none;
                    }
                }
                .navbar-scc .scc-bg:before {
                    content: "";
                    outline: none;
                    display: block;
                    position: absolute;
                    z-index: 1;
                    background-color: #fff;
                    border-radius: 100%;
                    transition: all 0.45s;
                    top: 28px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                }
                .navbar-scc .collapse-scc {
                    display: block;
                    text-align: right;
                    height: 77px;
                    margin: 0 -15px;
                }
                @media (max-width: 991px) {
                    .navbar-scc .collapse-scc {
                        display: none;
                        position: fixed;
                        height: auto;
                        z-index: 1000;
                        overflow: scroll!important;
                        background: transparent;
                        padding: 0 25px 25px;
                        top: 77px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity .3s  ease;
                        text-align: left;
                    }
                }
                .navbar-scc ul.menu-scc {
                    display: inline-block;
                    float: none;
                    margin: 0;
                    list-style: none;
                    padding-left: 0;
                }
                @media (max-width: 991px) {
                    .navbar-scc ul.menu-scc {
                        display: block;
                    }
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc {
                        width: 70%;
                    }
                }
                @media (min-width: 1200px) {
                    .navbar-scc ul.menu-scc {
                        width: 65%;
                    }
                }
                .navbar-scc ul.menu-scc li.menu-item {
                    position: static;
                    border-bottom: 4px solid transparent;
                    float: left;
                    display: block;
                }
                @media (max-width: 991px) {
                    .navbar-scc ul.menu-scc li.menu-item {
                        float: none;
                        position: relative;
                        display: block;
                        width: 100%;
                        border-bottom: 1px solid #eaecee;
                    }
                    .navbar-scc ul.menu-scc li.menu-item:last-child:after {
                        content: "";
                        background-image: url(https://smartcloudconnect.io/wp-content/uploads/poweredbyinvisible-1.svg);
                        background-position: 50% 100%;
                        background-size: contain;
                        background-repeat: no-repeat;
                        display: block;
                        width: 60%;
                        height: 74px;
                        margin: 10px auto 0px;
                    }
                }
                .navbar-scc ul.menu-scc li.menu-item:hover {
                    background-color: transparent;
                }
                .navbar-scc ul.menu-scc li.menu-item:hover > a {
                    background-color: transparent;
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc li.menu-item:hover {
                        border-bottom: 4px solid #37a148;
                    }
                    .navbar-scc ul.menu-scc li.menu-item:hover .sub-menu-drop {
                        opacity: 1;
                        visibility: visible;
                    }
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc li.menu-item.no-border {
                        border-bottom: 4px solid transparent!important;
                    }
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc li.menu-item.fusion-menu-item-button {
                        float: right;
                        margin-right: 15px;
                    }
                }
                .navbar-scc ul.menu-scc li.menu-item.open ul.sub-menu-drop {
                    max-height: 160em;
                }
                .navbar-scc ul.menu-scc li.menu-item .menu-button {
                    line-height: 73px;
                }
                .navbar-scc ul.menu-scc li.menu-item .menu-link {
                    color: #023358;
                    line-height: 73px;
                    padding: 0 15px;
                    text-decoration: none;
                    outline: none;
                    font-size: 15px;
                    font-weight: 500;
                    opacity: 0;
                    cursor: pointer;
                    display: inline-block;
                }
                .navbar-scc ul.menu-scc li.menu-item .menu-link:hover {
                    background-color: transparent;
                }
                @media (max-width: 991px) {
                    .navbar-scc ul.menu-scc li.menu-item .menu-link {
                        font-size: 22px;
                    }
                }
                .navbar-scc ul.menu-scc li.menu-item .menu_drop_trigger {
                    position: absolute;
                    right: 0;
                    top: 0;
                    line-height: 73px;
                    padding: 0 15px;
                    color: #023358;
                    font-size: 24px;
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc li.menu-item .menu_drop_trigger {
                        display: none;
                    }
                }
                .navbar-scc ul.menu-scc li.menu-item ul.sub-menu-drop {
                    list-style: none;
                    margin: 0;
                    transition: 0.3s all;
                    text-align: left;
                }
                @media (max-width: 991px) {
                    .navbar-scc ul.menu-scc li.menu-item ul.sub-menu-drop {
                        position: relative;
                        padding: 0;
                        overflow: hidden;
                        transition: max-height 0.5s ease;
                        max-height: 0;
                    }
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc li.menu-item ul.sub-menu-drop {
                        opacity: 0;
                        visibility: hidden;
                        box-shadow: 0 5px 39px rgba(115, 136, 151, 0.1);
                        background-color: #fff;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 77px;
                        padding: 25px 0;
                    }
                }
                @media (min-width: 992px) {
                    .navbar-scc ul.menu-scc li.menu-item ul.sub-menu-drop li.sub-item {
                        position: relative;
                    }
                    .navbar-scc ul.menu-scc li.menu-item ul.sub-menu-drop li.sub-item:before {
                        content: "";
                        background-image: url(https://smartcloudconnect.io/wp-content/uploads/poweredbyinvisible-1.svg);
                        background-position: 95% 99%;
                        background-size: 100% auto;
                        background-repeat: no-repeat;
                        position: absolute;
                        width: 140px;
                        height: 30px;
                        display: block;
                        bottom: -20px;
                        right: 16%;
                        cursor: pointer;
                    }
                }
                .navbar-scc .menu-sub-title {
                    margin: 0;
                    color: #023358;
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 42px;
                    text-decoration: none;
                    outline: none;
                }
                @media (max-width: 480px) {
                    .navbar-scc .menu-sub-title {
                        display: inline-block;
                        margin-top: 15px;
                        margin-bottom: -5px;
                    }
                }
                .navbar-scc .menu-sub-link {
                    display: block;
                    color: #055492;
                    padding: 7px 0;
                    line-height: 20px;
                    text-decoration: none;
                    outline: none;
                    font-size: 15px;
                }
                .navbar-scc .menu-sub-link:hover {
                    opacity: 0.8;
                }
                .navbar-scc .menu-seporate {
                    margin-top: 10px;
                    margin-bottom: 15px;
                    border: 0;
                    border-top: 1px solid #eaecee;
                }
                .navbar-scc #menu-btn {
                    display: none;
                    float: right;
                    padding: 9px 10px;
                    background-color: transparent;
                    background-image: none;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    width: 28px;
                    cursor: pointer;
                    text-decoration: none;
                    outline: none;
                    margin: 0;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                @media (max-width: 991px) {
                    .navbar-scc #menu-btn {
                        display: block;
                    }
                }
                .navbar-scc #menu-btn:not(.collapsed) span {
                    background-color: #023358;
                }
                .navbar-scc #menu-btn:not(.collapsed) span#bar-1 {
                    top: 9px;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                .navbar-scc #menu-btn:not(.collapsed) span#bar-2 {
                    opacity: 0;
                }
                .navbar-scc #menu-btn:not(.collapsed) span#bar-3 {
                    top: 9px;
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -ms-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
                .navbar-scc #menu-btn span {
                    position: absolute;
                    left: 0;
                    width: 24px;
                    height: 4px;
                    background-color: #023358;
                    -webkit-transition: all 500ms ease-in-out;
                    -moz-transition: all 500ms ease-in-out;
                    -ms-transition: all 500ms ease-in-out;
                    -o-transition: all 500ms ease-in-out;
                    transition: all 500ms ease-in-out;
                }
                .navbar-scc #menu-btn span#bar-1 {
                    top: 0;
                }
                .navbar-scc #menu-btn span#bar-2 {
                    top: 7px;
                }
                .navbar-scc #menu-btn span#bar-3 {
                    top: 14px;
                }
                .fusion-menu-item-button .menu-text {
                    background-color: #37a148;
                    color: #ffffff;
                    border-radius: 2px;
                    border: 1px solid #37a148;
                    text-transform: uppercase;
                    padding: 7px 23px;
                }
                .menu-search {
                    position: relative!important;
                    margin-left: 15px;
                    margin-right: 15px;
                }
                @media (min-width: 992px) {
                    .menu-search {
                        float: right!important;
                    }
                }
                .menu-search .fusion-main-menu-icon {
                    font-family: FontAwesome;
                    cursor: pointer;
                }
                @media (max-width: 991px) {
                    .menu-search .fusion-main-menu-icon {
                        visibility: hidden;
                    }
                }
                .menu-search .fusion-main-menu-icon:after {
                    border-radius: 50%;
                    content: '\f002';
                    height: 15px;
                    width: 15px;
                    font-size: 14px;
                    color: #29639a;
                }
                .menu-search .fusion-main-menu-icon:hover:after {
                    color: #023358;
                }
                .menu-search .fusion-custom-menu-item-contents {
                    display: none;
                    width: 250px;
                    padding: 0;
                    text-align: right;
                    border: 0;
                    top: 48%;
                    transform: translateY(-50%);
                    right: -13px;
                    background: 0 0!important;
                    position: absolute;
                    left: auto;
                    transition: opacity 0.2s ease-in;
                }
                @media (max-width: 991px) {
                    .menu-search .fusion-custom-menu-item-contents {
                        display: block!important;
                        width: 95%;
                        right: 5%;
                    }
                }
                .menu-search .searchform {
                    margin: 0;
                    padding: 0;
                }
                .menu-search .searchform .search-field input {
                    border-top-left-radius: 16px;
                    border-bottom-left-radius: 16px;
                    line-height: 33px;
                    height: 33px;
                    border-color: #d2d2d2;
                    background-color: #fff;
                    padding-top: 0;
                    padding-bottom: 0;
                    color: #055492;
                }
                .menu-search .searchform .search-button input[type="submit"] {
                    border-top-right-radius: 16px;
                    border-bottom-right-radius: 16px;
                    line-height: 33px;
                    height: 33px;
                    background: #055492;
                    font-size: 14px;
                }
                .menu-search .searchform .search-button input[type="submit"]:hover {
                    background: #37a148;
                }
                #wrapper .search-table .search-field input {
                    color: #055492;
                }
            </style>
            <div class="navbar-scc-height-fix"></div>
            <?php if (get_current_blog_id() == 1):?>
            <nav id="navbar_scc" class="navbar-scc">
                <div class="container-fluid navbar-container">
                    <div class="navbar-scc-header">
                        <button id="menu-btn" class="collapsed">
                            <span class="sr-only">Toggle navigation</span>
                            <span id="bar-1" class=""></span>
                            <span id="bar-2" class=""></span>
                            <span id="bar-3" class=""></span>
                        </button>
                        <a class="navbar-scc-brand" href="<?=home_url();?>/">
                            <img src="//smartcloudconnect.io/wp-content/uploads/Logo-Color.png" alt="logo">
                        </a>
                    </div>
                    <div id="scc_collapse" class="collapse-scc">
                        <ul id="menu_scc" class="menu-scc">
                            <li class="menu-item">
                                <a class="menu-link">Product</a>
                                <a class="menu_drop_trigger" href="#"><i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu-drop">
                                    <li class="sub-item">
                                        <div class="container origin">
                                            <div class="row">
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/features/" class="menu-sub-title">Features</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/features/enterprise-sync-engine/" class="menu-sub-link">Data Synchronization</a>
                                                    <a href="<?=home_url();?>/features/email-sidebar/" class="menu-sub-link">Email Sidebar</a>
                                                    <a href="<?=home_url();?>/features/outlook-salesforce-calendar-synchronization/" class="menu-sub-link">Calendar Features</a>
                                                    <a href="<?=home_url();?>/features/documents/" class="menu-sub-link">Document Features</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-title">Integrations</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">All</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">Salesforce</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">Oracle Siebel</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">SAP</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">Outlook</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">Microsoft Exchange</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">Office365</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">Gmail</a>
                                                    <a href="<?=home_url();?>/integration-tools/" class="menu-sub-link">IBM Notes</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <h4 class="menu-sub-title">Comparison</h4>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/salesforce-inbox-alternatives/" class="menu-sub-link">SmartCloud Connect vs Salesforce Inbox</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/personas/" class="menu-sub-title">Personas</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/personas#for-sales-managers" class="menu-sub-link">Sales managers</a>
                                                    <a href="<?=home_url();?>/personas#for-sales-reps" class="menu-sub-link">Sales reps</a>
                                                    <a href="<?=home_url();?>/personas#for-sales-operations" class="menu-sub-link">Sales operations</a>
                                                    <a href="<?=home_url();?>/personas#for-sales-professionals" class="menu-sub-link">Service professionals</a>
                                                    <a href="<?=home_url();?>/personas#for-salesforce-admins" class="menu-sub-link">CRM admin</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a class="menu-link" href="<?=home_url();?>/pricing/">Pricing</a>
                            </li>
                            <li class="menu-item">
                                <a class="menu-link">Why SmartCloud</a>
                                <a class="menu_drop_trigger" href="#"><i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu-drop">
                                    <li class="sub-item">
                                        <div class="container origin">
                                            <div class="row">
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/customer-success/" class="menu-sub-title">Customers</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/customer-voice/" class="menu-sub-link">Customer voice</a>
                                                    <a href="<?=home_url();?>/morgan-morgan/" class="menu-sub-link">Case study - Morgan & Morgan</a>
                                                    <a href="<?=home_url();?>/vapotherm/" class="menu-sub-link">Case study - Vapotherm</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/enterprise/" class="menu-sub-title">Enterprise</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/enterprise/" class="menu-sub-link">SmartCloud Connect for Enterprise</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <h4 class="menu-sub-title">Partnerships</h4>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/our-partners/" class="menu-sub-link">Our partners</a>
                                                    <a href="<?=home_url();?>/our-partners#contact-section" class="menu-sub-link">Become a partner</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/about-us/" class="menu-sub-title">About us</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/about-us/" class="menu-sub-link">Who we are</a>
                                                    <a href="<?=home_url();?>/about-us#who-we-are" class="menu-sub-link">Our vision & mission</a>
                                                    <a href="<?=home_url();?>/about-us#core-values" class="menu-sub-link">Core values</a>
                                                    <a href="<?=home_url();?>/about-us#hall-of-flame" class="menu-sub-link">Awards</a>
                                                    <a href="https://invisible.io/" target="_blank" class="menu-sub-link">Invisible.io</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a class="menu-link">Resources</a>
                                <a class="menu_drop_trigger" href="#"><i class="fa fa-angle-down"></i></a>
                                <ul class="sub-menu-drop">
                                    <li class="sub-item">
                                        <div class="container origin">
                                            <div class="row">
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/docs/stable-channel/" class="menu-sub-title">Knowledge base</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/docs/fast-channel/articles/How-SmartCloud-Connect-Works-and-What-It-Syncs/" class="menu-sub-link">Getting started</a>
                                                    <a href="<?=home_url();?>/docs/fast-channel/articles/How-to-Install-and-Run-SmartCloud-Connect-(Office-365)/" class="menu-sub-link">Configuring SCC</a>
                                                    <a href="<?=home_url();?>/docs/fast-channel/" class="menu-sub-link">Fast prod</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/blog/" class="menu-sub-title">Blog and News</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/top-sales-automation-tools/" class="menu-sub-link">Experts Interview: Top Sales Automation Tools to Crush your Sales Goals</a>
                                                    <a href="<?=home_url();?>/3-inside-sales-activities-to-boost-your-sales/" class="menu-sub-link">3 Inside sales activities to boost your sales</a>
                                                    <a href="<?=home_url();?>/7-best-practices-in-lead-management/" class="menu-sub-link">7 best practices in lead management</a>
                                                    <a href="<?=home_url();?>/spring-release-2019/" class="menu-sub-link">New Spring 19' Release</a>
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/salesforce-events/" class="menu-sub-title">Events</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/salesforce-events/" class="menu-sub-link">Events 2019</a>
                                                    <!--<a href="<?=home_url();?>/salesforce-events#upcoming_li_block" class="menu-sub-link">Events 2019</a>-->
                                                </div>
                                                <div class="col-xs-6 col-sm-3">
                                                    <a href="<?=home_url();?>/sales-automation-software/" class="menu-sub-title">Whitepapers</a>
                                                    <hr class="menu-seporate">
                                                    <a href="<?=home_url();?>/sales-automation-software/" class="menu-sub-link">Sales Automation Software: the Ultimate Guide</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item">
                                <a class="menu-link" href="<?=home_url();?>/contact-us/">Contact us</a>
                            </li>
                            <li class="menu-item no-border fusion-menu-item-button">
                                <a class="menu-button" href="<?=home_url();?>/wizard/">
                                    <span class="menu-text fusion-button button-default button-medium">FREE TRIAL</span>
                                </a>
                            </li>
                            <li class="menu-item no-border menu-search fusion-custom-menu-item fusion-main-menu-search fusion-last-menu-item">
                                <a class="fusion-main-menu-icon menu-button" style="line-height: 73px; height: 77px;"></a>
                                <div class="fusion-custom-menu-item-contents" style="display: none;">
                                    <form role="search" class="searchform" action="<?=home_url();?>">
                                        <div class="search-table">
                                            <div class="search-field">
                                                <input type="text" value="" name="s" class="s" placeholder="Search ...">
                                            </div>
                                            <div class="search-button"><input type="submit" class="searchsubmit" value="&#xf002;"></div>
                                        </div>
                                        <input type="hidden" name="lang" value="en" onload="this.value=body.getAttribute('lang');">
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="scc-bg"></div>
                </div>
            </nav>
                <?php endif;?>




                <?php if (get_current_blog_id() == 2):?>
            <nav id="navbar_scc" class="navbar-scc">
                <div class="container-fluid navbar-container">
                    <div class="navbar-scc-header">
                        <button id="menu-btn" class="collapsed">
                            <span class="sr-only">Toggle navigation</span>
                            <span id="bar-1" class=""></span>
                            <span id="bar-2" class=""></span>
                            <span id="bar-3" class=""></span>
                        </button>
                        <a class="navbar-scc-brand" href="<?=home_url();?>/">
                            <img src="//smartcloudconnect.io/wp-content/uploads/Logo-Color.png" alt="logo">
                        </a>
                    </div>
                    <div id="scc_collapse" class="collapse-scc">
                        <ul id="menu_scc" class="menu-scc">
                            <li class="menu-item">
                                <a href="<?=home_url();?>/features/enterprise-sync-engine/" class="menu-link">Features</a>
                            </li>
                            <li class="menu-item">
                                <a class="menu-link" href="<?=home_url();?>/pricing/">Pricing</a>
                            </li>
                            <li class="menu-item">
                                <a class="menu-link" href="<?=home_url();?>/contact-us/">Contact us</a>
                            </li>
                            <li class="menu-item no-border fusion-menu-item-button">
                                <a class="menu-button" href="<?=home_url();?>/wizard/">
                                    <span class="menu-text fusion-button button-default button-medium">FREE TRIAL</span>
                                </a>
                            </li>
                            <li class="menu-item no-border menu-search fusion-custom-menu-item fusion-main-menu-search fusion-last-menu-item">
                                <a class="fusion-main-menu-icon menu-button" style="line-height: 73px; height: 77px;"></a>
                                <div class="fusion-custom-menu-item-contents" style="display: none;">
                                    <form role="search" class="searchform" action="<?=home_url();?>">
                                        <div class="search-table">
                                            <div class="search-field">
                                                <input type="text" value="" name="s" class="s" placeholder="Search ...">
                                            </div>
                                            <div class="search-button"><input type="submit" class="searchsubmit" value="&#xf002;"></div>
                                        </div>
                                        <input type="hidden" name="lang" value="en" onload="this.value=body.getAttribute('lang');">
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="scc-bg"></div>
                </div>
            </nav>
        <?php endif;?>
            <script>
                jQuery.noConflict();
                (function ($) {
                    $( document ).ready(function() {

                        $(document).on('click', '#menu_scc .menu_drop_trigger', function(){
                            // var silka = $(this).Attr('href');
                            // $(this).removeAttr('href'); //óäàëÿòü ññûëêó
                            // $(this).append("<a class='silka' href='"+silka+"' ></a>");
                            var element = $(this).parent('li');

                            if (element.hasClass('open')) {
                                element.removeClass('open');
//                    element.find('ul').slideUp();

                                // $('a').attr('href', silka);
                            } else {
                                element.addClass('open');
//                    element.children('ul').slideDown(3000);

//                    element.siblings('li').children('ul').slideUp();
//                    element.siblings('li').removeClass('open');
                            }
                        });
                        var block = 0;
                        $(document).on('click', '#menu-btn', function () {
                            if (block === 1) {return;}
                            block = 1;
                            $(this).toggleClass('collapsed');
                            $('body').toggleClass('show-scc-navbar');
//                    $('#scc_collapse').slideToggle();
                            setTimeout(function () {
                                $('#scc_collapse').show();
                                block = 0;
                            },300)
                        })

                        $(document).on('click', '.sub-menu-drop', function (e) {
//                console.log(e.offsetX, 'width click');
//                console.log($(this).outerHeight(), 'height click');

                            let maxH = $(this).offset().top + $(this).outerHeight(),
                                minH = maxH - 30, // 30 is the height of the :after
                                maxW = $(this).offset().left + $(this).outerWidth() - (($(this).outerWidth() / 100)*16),
                                minW = maxW - 140,
                                y = e.pageY,
                                x = e.pageX;

//                console.log(maxH,'=>',y,'=>',minH,'HEIGHT');
//                console.log(maxW,'=>',x,'=>',minW,'width');
                            if (y >= minH && y <= maxH && x >= minW && x <= maxW) {
//                    console.log('true click')
                                let url = "https://invisible.io/";
//                    document.location.href = url;
                                let win = window.open(url, '_blank');
                                win.focus();
                            }

                        })


                    });
                } )( jQuery );

            </script>
        <?php endif; ?>






















        <?php if ( 'Left' == Avada()->settings->get( 'header_position' ) || 'Right' == Avada()->settings->get( 'header_position' ) ) : ?>
            <?php avada_side_header(); ?>
        <?php endif; ?>

        <div id="sliders-container">
            <?php
            if ( is_search() ) {
                $slider_page_id = '';
            } else {
                $slider_page_id = '';
                if ( ! is_home() && ! is_front_page() && ! is_archive() && isset( $object_id ) ) {
                    $slider_page_id = $object_id;
                }
                if ( ! is_home() && is_front_page() && isset( $object_id ) ) {
                    $slider_page_id = $object_id;
                }
                if ( is_home() && ! is_front_page() ) {
                    $slider_page_id = get_option( 'page_for_posts' );
                }
                if ( class_exists( 'WooCommerce' ) && is_shop() ) {
                    $slider_page_id = get_option( 'woocommerce_shop_page_id' );
                }

                if ( ( 'publish' == get_post_status( $slider_page_id ) && ! post_password_required() ) || ( current_user_can( 'read_private_pages' ) && in_array( get_post_status( $slider_page_id ), array( 'private', 'draft', 'pending' ) ) ) ) {
                    avada_slider( $slider_page_id );
                }
            } ?>
        </div>

        <?php avada_header_template( 'Above' ); ?>

        <?php if ( has_action( 'avada_override_current_page_title_bar' ) ) : ?>
            <?php do_action( 'avada_override_current_page_title_bar', $c_pageID ); ?>
        <?php else : ?>
            <?php avada_current_page_title_bar( $c_pageID ); ?>
        <?php endif; ?>

        <?php if ( is_page_template( 'contact.php' ) && Avada()->settings->get( 'recaptcha_public' ) && Avada()->settings->get( 'recaptcha_private' ) ) : ?>
            <script type="text/javascript">var RecaptchaOptions = { theme : '<?php echo Avada()->settings->get( 'recaptcha_color_scheme' ); ?>' };</script>
        <?php endif; ?>

        <?php if ( is_page_template( 'contact.php' ) && Avada()->settings->get( 'gmap_address' ) && Avada()->settings->get( 'status_gmap' ) ) : ?>
            <?php
            $map_popup             = ( ! Avada()->settings->get( 'map_popup' ) )          ? 'yes' : 'no';
            $map_scrollwheel       = ( Avada()->settings->get( 'map_scrollwheel' ) )    ? 'yes' : 'no';
            $map_scale             = ( Avada()->settings->get( 'map_scale' ) )          ? 'yes' : 'no';
            $map_zoomcontrol       = ( Avada()->settings->get( 'map_zoomcontrol' ) )    ? 'yes' : 'no';
            $address_pin           = ( Avada()->settings->get( 'map_pin' ) )            ? 'yes' : 'no';
            $address_pin_animation = ( Avada()->settings->get( 'gmap_pin_animation' ) ) ? 'yes' : 'no';
            ?>
            <div id="fusion-gmap-container">
                <?php echo Avada()->google_map->render_map( array(
                    'address'                  => Avada()->settings->get( 'gmap_address' ),
                    'type'                     => Avada()->settings->get( 'gmap_type' ),
                    'address_pin'              => $address_pin,
                    'animation'                => $address_pin_animation,
                    'map_style'                => Avada()->settings->get( 'map_styling' ),
                    'overlay_color'            => Avada()->settings->get( 'map_overlay_color' ),
                    'infobox'                  => Avada()->settings->get( 'map_infobox_styling' ),
                    'infobox_background_color' => Avada()->settings->get( 'map_infobox_bg_color' ),
                    'infobox_text_color'       => Avada()->settings->get( 'map_infobox_text_color' ),
                    'infobox_content'          => htmlentities( Avada()->settings->get( 'map_infobox_content' ) ),
                    'icon'                     => Avada()->settings->get( 'map_custom_marker_icon' ),
                    'width'                    => Avada()->settings->get( 'gmap_dimensions', 'width' ),
                    'height'                   => Avada()->settings->get( 'gmap_dimensions', 'height' ),
                    'zoom'                     => Avada()->settings->get( 'map_zoom_level' ),
                    'scrollwheel'              => $map_scrollwheel,
                    'scale'                    => $map_scale,
                    'zoom_pancontrol'          => $map_zoomcontrol,
                    'popup'                    => $map_popup
                ) ); ?>
            </div>
        <?php endif; ?>

        <?php if ( is_page_template( 'contact-2.php' ) && Avada()->settings->get( 'gmap_address' ) && Avada()->settings->get( 'status_gmap' ) ) : ?>
            <?php
            $map_popup             = ( ! Avada()->settings->get( 'map_popup' ) )          ? 'yes' : 'no';
            $map_scrollwheel       = ( Avada()->settings->get( 'map_scrollwheel' ) )    ? 'yes' : 'no';
            $map_scale             = ( Avada()->settings->get( 'map_scale' ) )          ? 'yes' : 'no';
            $map_zoomcontrol       = ( Avada()->settings->get( 'map_zoomcontrol' ) )    ? 'yes' : 'no';
            $address_pin_animation = ( Avada()->settings->get( 'gmap_pin_animation' ) ) ? 'yes' : 'no';
            ?>
            <div id="fusion-gmap-container">
                <?php echo Avada()->google_map->render_map( array(
                    'address'                  => Avada()->settings->get( 'gmap_address' ),
                    'type'                     => Avada()->settings->get( 'gmap_type' ),
                    'map_style'                => Avada()->settings->get( 'map_styling' ),
                    'animation'                => $address_pin_animation,
                    'overlay_color'            => Avada()->settings->get( 'map_overlay_color' ),
                    'infobox'                  => Avada()->settings->get( 'map_infobox_styling' ),
                    'infobox_background_color' => Avada()->settings->get( 'map_infobox_bg_color' ),
                    'infobox_text_color'       => Avada()->settings->get( 'map_infobox_text_color' ),
                    'infobox_content'          => htmlentities( Avada()->settings->get( 'map_infobox_content' ) ),
                    'icon'                     => Avada()->settings->get( 'map_custom_marker_icon' ),
                    'width'                    => Avada()->settings->get( 'gmap_dimensions', 'width' ),
                    'height'                   => Avada()->settings->get( 'gmap_dimensions', 'height' ),
                    'zoom'                     => Avada()->settings->get( 'map_zoom_level' ),
                    'scrollwheel'              => $map_scrollwheel,
                    'scale'                    => $map_scale,
                    'zoom_pancontrol'          => $map_zoomcontrol,
                    'popup'                    => $map_popup
                ) ); ?>
            </div>
        <?php endif; ?>
        <?php
        $main_css      = '';
        $row_css       = '';
        $main_class    = '';

        if ( Avada()->layout->is_hundred_percent_template() ) {
            $main_css = 'padding-left:0px;padding-right:0px;';
            if ( Avada()->settings->get( 'hundredp_padding' ) && ! get_post_meta( $c_pageID, 'pyre_hundredp_padding', true ) ) {
                $main_css = 'padding-left:' . Avada()->settings->get( 'hundredp_padding' ) . ';padding-right:' . Avada()->settings->get( 'hundredp_padding' );
            }
            if ( get_post_meta( $c_pageID, 'pyre_hundredp_padding', true ) ) {
                $main_css = 'padding-left:' . get_post_meta( $c_pageID, 'pyre_hundredp_padding', true ) . ';padding-right:' . get_post_meta( $c_pageID, 'pyre_hundredp_padding', true );
            }
            $row_css    = 'max-width:100%;';
            $main_class = 'width-100';
        }
        do_action( 'avada_before_main_container' );
        ?>
        <div id="main" class="clearfix <?php echo $main_class; ?>" style="<?php echo $main_css; ?>">
            <div class="fusion-row" style="<?php echo $row_css; ?>">



                <?php if(is_category()){ ?>
                    <div class="fusion-page-title-bar category-page-news-names212">
                        <div class="fusion-page-title-row">
                            <div class="fusion-page-title-wrapper">
                                <div class="fusion-page-title-captions">
                                    <h1 class="entry-title"><?php single_cat_title(''); ?></h1>
                                    <div class="fusion-separator fusion-full-width-sep sep-none divider_img new-blog-divider" style="border-color:#e0dede;margin-left: auto;margin-right: auto;margin-top:20px;"></div>
                                </div></div></div></div>

                <?php }
                else{

                }
                ?>

<?php if ( false ) {
    $c_pageID = Avada::c_pageID();
    if ('no' != $ndsa = get_post_meta( $c_pageID, 'pyre_display_header', true) ) {}

} ?>