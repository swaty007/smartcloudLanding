<?php get_template_part('parts/overall/overall', 'header'); ?>
<style>
    .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .img-rounded {
        border-radius: 6px;
    }
    .img-thumbnail {
        padding: 4px;
        line-height: 1.42857143;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        max-width: 100%;
        height: auto;
    }
    .img-circle {
        border-radius: 50%;
    }
    hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eeeeee;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    .sr-only-focusable:active,
    .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        clip: auto;
    }
    [role="button"] {
        cursor: pointer;
    }
    .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    @media (min-width: 768px) {
        .container {
            width: 750px;
        }
    }
    @media (min-width: 992px) {
        .container {
            width: 970px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }
    .container-fluid {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
    .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
        float: left;
    }
    .col-xs-12 {
        width: 100%;
    }
    .col-xs-11 {
        width: 91.66666667%;
    }
    .col-xs-10 {
        width: 83.33333333%;
    }
    .col-xs-9 {
        width: 75%;
    }
    .col-xs-8 {
        width: 66.66666667%;
    }
    .col-xs-7 {
        width: 58.33333333%;
    }
    .col-xs-6 {
        width: 50%;
    }
    .col-xs-5 {
        width: 41.66666667%;
    }
    .col-xs-4 {
        width: 33.33333333%;
    }
    .col-xs-3 {
        width: 25%;
    }
    .col-xs-2 {
        width: 16.66666667%;
    }
    .col-xs-1 {
        width: 8.33333333%;
    }
    .col-xs-pull-12 {
        right: 100%;
    }
    .col-xs-pull-11 {
        right: 91.66666667%;
    }
    .col-xs-pull-10 {
        right: 83.33333333%;
    }
    .col-xs-pull-9 {
        right: 75%;
    }
    .col-xs-pull-8 {
        right: 66.66666667%;
    }
    .col-xs-pull-7 {
        right: 58.33333333%;
    }
    .col-xs-pull-6 {
        right: 50%;
    }
    .col-xs-pull-5 {
        right: 41.66666667%;
    }
    .col-xs-pull-4 {
        right: 33.33333333%;
    }
    .col-xs-pull-3 {
        right: 25%;
    }
    .col-xs-pull-2 {
        right: 16.66666667%;
    }
    .col-xs-pull-1 {
        right: 8.33333333%;
    }
    .col-xs-pull-0 {
        right: auto;
    }
    .col-xs-push-12 {
        left: 100%;
    }
    .col-xs-push-11 {
        left: 91.66666667%;
    }
    .col-xs-push-10 {
        left: 83.33333333%;
    }
    .col-xs-push-9 {
        left: 75%;
    }
    .col-xs-push-8 {
        left: 66.66666667%;
    }
    .col-xs-push-7 {
        left: 58.33333333%;
    }
    .col-xs-push-6 {
        left: 50%;
    }
    .col-xs-push-5 {
        left: 41.66666667%;
    }
    .col-xs-push-4 {
        left: 33.33333333%;
    }
    .col-xs-push-3 {
        left: 25%;
    }
    .col-xs-push-2 {
        left: 16.66666667%;
    }
    .col-xs-push-1 {
        left: 8.33333333%;
    }
    .col-xs-push-0 {
        left: auto;
    }
    .col-xs-offset-12 {
        margin-left: 100%;
    }
    .col-xs-offset-11 {
        margin-left: 91.66666667%;
    }
    .col-xs-offset-10 {
        margin-left: 83.33333333%;
    }
    .col-xs-offset-9 {
        margin-left: 75%;
    }
    .col-xs-offset-8 {
        margin-left: 66.66666667%;
    }
    .col-xs-offset-7 {
        margin-left: 58.33333333%;
    }
    .col-xs-offset-6 {
        margin-left: 50%;
    }
    .col-xs-offset-5 {
        margin-left: 41.66666667%;
    }
    .col-xs-offset-4 {
        margin-left: 33.33333333%;
    }
    .col-xs-offset-3 {
        margin-left: 25%;
    }
    .col-xs-offset-2 {
        margin-left: 16.66666667%;
    }
    .col-xs-offset-1 {
        margin-left: 8.33333333%;
    }
    .col-xs-offset-0 {
        margin-left: 0%;
    }
    @media (min-width: 768px) {
        .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
            float: left;
        }
        .col-sm-12 {
            width: 100%;
        }
        .col-sm-11 {
            width: 91.66666667%;
        }
        .col-sm-10 {
            width: 83.33333333%;
        }
        .col-sm-9 {
            width: 75%;
        }
        .col-sm-8 {
            width: 66.66666667%;
        }
        .col-sm-7 {
            width: 58.33333333%;
        }
        .col-sm-6 {
            width: 50%;
        }
        .col-sm-5 {
            width: 41.66666667%;
        }
        .col-sm-4 {
            width: 33.33333333%;
        }
        .col-sm-3 {
            width: 25%;
        }
        .col-sm-2 {
            width: 16.66666667%;
        }
        .col-sm-1 {
            width: 8.33333333%;
        }
        .col-sm-pull-12 {
            right: 100%;
        }
        .col-sm-pull-11 {
            right: 91.66666667%;
        }
        .col-sm-pull-10 {
            right: 83.33333333%;
        }
        .col-sm-pull-9 {
            right: 75%;
        }
        .col-sm-pull-8 {
            right: 66.66666667%;
        }
        .col-sm-pull-7 {
            right: 58.33333333%;
        }
        .col-sm-pull-6 {
            right: 50%;
        }
        .col-sm-pull-5 {
            right: 41.66666667%;
        }
        .col-sm-pull-4 {
            right: 33.33333333%;
        }
        .col-sm-pull-3 {
            right: 25%;
        }
        .col-sm-pull-2 {
            right: 16.66666667%;
        }
        .col-sm-pull-1 {
            right: 8.33333333%;
        }
        .col-sm-pull-0 {
            right: auto;
        }
        .col-sm-push-12 {
            left: 100%;
        }
        .col-sm-push-11 {
            left: 91.66666667%;
        }
        .col-sm-push-10 {
            left: 83.33333333%;
        }
        .col-sm-push-9 {
            left: 75%;
        }
        .col-sm-push-8 {
            left: 66.66666667%;
        }
        .col-sm-push-7 {
            left: 58.33333333%;
        }
        .col-sm-push-6 {
            left: 50%;
        }
        .col-sm-push-5 {
            left: 41.66666667%;
        }
        .col-sm-push-4 {
            left: 33.33333333%;
        }
        .col-sm-push-3 {
            left: 25%;
        }
        .col-sm-push-2 {
            left: 16.66666667%;
        }
        .col-sm-push-1 {
            left: 8.33333333%;
        }
        .col-sm-push-0 {
            left: auto;
        }
        .col-sm-offset-12 {
            margin-left: 100%;
        }
        .col-sm-offset-11 {
            margin-left: 91.66666667%;
        }
        .col-sm-offset-10 {
            margin-left: 83.33333333%;
        }
        .col-sm-offset-9 {
            margin-left: 75%;
        }
        .col-sm-offset-8 {
            margin-left: 66.66666667%;
        }
        .col-sm-offset-7 {
            margin-left: 58.33333333%;
        }
        .col-sm-offset-6 {
            margin-left: 50%;
        }
        .col-sm-offset-5 {
            margin-left: 41.66666667%;
        }
        .col-sm-offset-4 {
            margin-left: 33.33333333%;
        }
        .col-sm-offset-3 {
            margin-left: 25%;
        }
        .col-sm-offset-2 {
            margin-left: 16.66666667%;
        }
        .col-sm-offset-1 {
            margin-left: 8.33333333%;
        }
        .col-sm-offset-0 {
            margin-left: 0%;
        }
    }
    @media (min-width: 992px) {
        .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
            float: left;
        }
        .col-md-12 {
            width: 100%;
        }
        .col-md-11 {
            width: 91.66666667%;
        }
        .col-md-10 {
            width: 83.33333333%;
        }
        .col-md-9 {
            width: 75%;
        }
        .col-md-8 {
            width: 66.66666667%;
        }
        .col-md-7 {
            width: 58.33333333%;
        }
        .col-md-6 {
            width: 50%;
        }
        .col-md-5 {
            width: 41.66666667%;
        }
        .col-md-4 {
            width: 33.33333333%;
        }
        .col-md-3 {
            width: 25%;
        }
        .col-md-2 {
            width: 16.66666667%;
        }
        .col-md-1 {
            width: 8.33333333%;
        }
        .col-md-pull-12 {
            right: 100%;
        }
        .col-md-pull-11 {
            right: 91.66666667%;
        }
        .col-md-pull-10 {
            right: 83.33333333%;
        }
        .col-md-pull-9 {
            right: 75%;
        }
        .col-md-pull-8 {
            right: 66.66666667%;
        }
        .col-md-pull-7 {
            right: 58.33333333%;
        }
        .col-md-pull-6 {
            right: 50%;
        }
        .col-md-pull-5 {
            right: 41.66666667%;
        }
        .col-md-pull-4 {
            right: 33.33333333%;
        }
        .col-md-pull-3 {
            right: 25%;
        }
        .col-md-pull-2 {
            right: 16.66666667%;
        }
        .col-md-pull-1 {
            right: 8.33333333%;
        }
        .col-md-pull-0 {
            right: auto;
        }
        .col-md-push-12 {
            left: 100%;
        }
        .col-md-push-11 {
            left: 91.66666667%;
        }
        .col-md-push-10 {
            left: 83.33333333%;
        }
        .col-md-push-9 {
            left: 75%;
        }
        .col-md-push-8 {
            left: 66.66666667%;
        }
        .col-md-push-7 {
            left: 58.33333333%;
        }
        .col-md-push-6 {
            left: 50%;
        }
        .col-md-push-5 {
            left: 41.66666667%;
        }
        .col-md-push-4 {
            left: 33.33333333%;
        }
        .col-md-push-3 {
            left: 25%;
        }
        .col-md-push-2 {
            left: 16.66666667%;
        }
        .col-md-push-1 {
            left: 8.33333333%;
        }
        .col-md-push-0 {
            left: auto;
        }
        .col-md-offset-12 {
            margin-left: 100%;
        }
        .col-md-offset-11 {
            margin-left: 91.66666667%;
        }
        .col-md-offset-10 {
            margin-left: 83.33333333%;
        }
        .col-md-offset-9 {
            margin-left: 75%;
        }
        .col-md-offset-8 {
            margin-left: 66.66666667%;
        }
        .col-md-offset-7 {
            margin-left: 58.33333333%;
        }
        .col-md-offset-6 {
            margin-left: 50%;
        }
        .col-md-offset-5 {
            margin-left: 41.66666667%;
        }
        .col-md-offset-4 {
            margin-left: 33.33333333%;
        }
        .col-md-offset-3 {
            margin-left: 25%;
        }
        .col-md-offset-2 {
            margin-left: 16.66666667%;
        }
        .col-md-offset-1 {
            margin-left: 8.33333333%;
        }
        .col-md-offset-0 {
            margin-left: 0%;
        }
    }
    @media (min-width: 1200px) {
        .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
            float: left;
        }
        .col-lg-12 {
            width: 100%;
        }
        .col-lg-11 {
            width: 91.66666667%;
        }
        .col-lg-10 {
            width: 83.33333333%;
        }
        .col-lg-9 {
            width: 75%;
        }
        .col-lg-8 {
            width: 66.66666667%;
        }
        .col-lg-7 {
            width: 58.33333333%;
        }
        .col-lg-6 {
            width: 50%;
        }
        .col-lg-5 {
            width: 41.66666667%;
        }
        .col-lg-4 {
            width: 33.33333333%;
        }
        .col-lg-3 {
            width: 25%;
        }
        .col-lg-2 {
            width: 16.66666667%;
        }
        .col-lg-1 {
            width: 8.33333333%;
        }
        .col-lg-pull-12 {
            right: 100%;
        }
        .col-lg-pull-11 {
            right: 91.66666667%;
        }
        .col-lg-pull-10 {
            right: 83.33333333%;
        }
        .col-lg-pull-9 {
            right: 75%;
        }
        .col-lg-pull-8 {
            right: 66.66666667%;
        }
        .col-lg-pull-7 {
            right: 58.33333333%;
        }
        .col-lg-pull-6 {
            right: 50%;
        }
        .col-lg-pull-5 {
            right: 41.66666667%;
        }
        .col-lg-pull-4 {
            right: 33.33333333%;
        }
        .col-lg-pull-3 {
            right: 25%;
        }
        .col-lg-pull-2 {
            right: 16.66666667%;
        }
        .col-lg-pull-1 {
            right: 8.33333333%;
        }
        .col-lg-pull-0 {
            right: auto;
        }
        .col-lg-push-12 {
            left: 100%;
        }
        .col-lg-push-11 {
            left: 91.66666667%;
        }
        .col-lg-push-10 {
            left: 83.33333333%;
        }
        .col-lg-push-9 {
            left: 75%;
        }
        .col-lg-push-8 {
            left: 66.66666667%;
        }
        .col-lg-push-7 {
            left: 58.33333333%;
        }
        .col-lg-push-6 {
            left: 50%;
        }
        .col-lg-push-5 {
            left: 41.66666667%;
        }
        .col-lg-push-4 {
            left: 33.33333333%;
        }
        .col-lg-push-3 {
            left: 25%;
        }
        .col-lg-push-2 {
            left: 16.66666667%;
        }
        .col-lg-push-1 {
            left: 8.33333333%;
        }
        .col-lg-push-0 {
            left: auto;
        }
        .col-lg-offset-12 {
            margin-left: 100%;
        }
        .col-lg-offset-11 {
            margin-left: 91.66666667%;
        }
        .col-lg-offset-10 {
            margin-left: 83.33333333%;
        }
        .col-lg-offset-9 {
            margin-left: 75%;
        }
        .col-lg-offset-8 {
            margin-left: 66.66666667%;
        }
        .col-lg-offset-7 {
            margin-left: 58.33333333%;
        }
        .col-lg-offset-6 {
            margin-left: 50%;
        }
        .col-lg-offset-5 {
            margin-left: 41.66666667%;
        }
        .col-lg-offset-4 {
            margin-left: 33.33333333%;
        }
        .col-lg-offset-3 {
            margin-left: 25%;
        }
        .col-lg-offset-2 {
            margin-left: 16.66666667%;
        }
        .col-lg-offset-1 {
            margin-left: 8.33333333%;
        }
        .col-lg-offset-0 {
            margin-left: 0%;
        }
    }
    .fade {
        opacity: 0;
        -webkit-transition: opacity 0.15s linear;
        -o-transition: opacity 0.15s linear;
        transition: opacity 0.15s linear;
    }
    .fade.in {
        opacity: 1;
    }
    .collapse {
        display: none;
    }
    .collapse.in {
        display: block;
    }
    tr.collapse.in {
        display: table-row;
    }
    tbody.collapse.in {
        display: table-row-group;
    }
    .collapsing {
        position: relative;
        height: 0;
        overflow: hidden;
        -webkit-transition-property: height, visibility;
        -o-transition-property: height, visibility;
        transition-property: height, visibility;
        -webkit-transition-duration: 0.35s;
        -o-transition-duration: 0.35s;
        transition-duration: 0.35s;
        -webkit-transition-timing-function: ease;
        -o-transition-timing-function: ease;
        transition-timing-function: ease;
    }
    .clearfix:before,
    .clearfix:after,
    .container:before,
    .container:after,
    .container-fluid:before,
    .container-fluid:after,
    .row:before,
    .row:after {
        content: " ";
        display: table;
    }
    .clearfix:after,
    .container:after,
    .container-fluid:after,
    .row:after {
        clear: both;
    }
    .center-block {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .pull-right {
        float: right !important;
    }
    .pull-left {
        float: left !important;
    }
    .hide {
        display: none !important;
    }
    .show {
        display: block !important;
    }
    .invisible {
        visibility: hidden;
    }
    .text-hide {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
    }
    .hidden {
        display: none !important;
    }
    .affix {
        position: fixed;
    }
    @media (max-width: 767px) {
        .hidden-xs {
            display: none !important;
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        .hidden-sm {
            display: none !important;
        }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        .hidden-md {
            display: none !important;
        }
    }
    @media (min-width: 1200px) {
        .hidden-lg {
            display: none !important;
        }
    }
    .text-left {
        text-align: left;
    }
    .text-right {
        text-align: right;
    }
    .text-center {
        text-align: center;
    }
    .text-justify {
        text-align: justify;
    }
    .text-nowrap {
        white-space: nowrap;
    }
    .text-lowercase {
        text-transform: lowercase;
    }
    .text-uppercase {
        text-transform: uppercase;
    }
    .text-capitalize {
        text-transform: capitalize;
    }
</style>
<style type="text/css" id="less:invisible_seminar-css-less-main">img {
        max-width: 100%;
    }

    h1.title {
        color: #ffffff;
        font-size: 50px;
        font-weight: 300;
        line-height: 53px;
        margin-bottom: 120px;
        margin-top: 0;
    }
    @media (max-width: 991px) {
        h1.title {
            font-size: 35px;
            line-height: 45px;
            margin-bottom: 70px;
            text-align: center;
        }
    }
    .sub-title {
        color: #275475;
        font-size: 44px;
        font-weight: 300;
        line-height: 40px;
        margin-bottom: 30px;
        margin-top: 0;
    }
    .sub-title.small {
        color: #275475;
        font-size: 17px;
        font-weight: 700;
        line-height: 31px;
        text-transform: uppercase;
        margin-bottom: 25px;
        margin-top: 30px;
    }
    @media (max-width: 991px) {
        .sub-title {
            text-align: center;
        }
    }
    .desc,
    .text {
        color: #055492;
        font-size: 17px;
        font-weight: 400;
        line-height: 31px;
        margin-bottom: 17px;
    }
    .desc.big,
    .text.big {
        font-size: 18px;
        line-height: 40px;
    }
    .desc.small,
    .text.small {
        font-size: 15px;
    }
    .description {
        color: #055492;
        font-size: 17px;
        font-weight: 400;
        line-height: 27px;
        margin-bottom: 25px;
        position: relative;
        padding-left: 30px;
        padding-right: 15px;
    }
    .description:before {
        content: "";
        position: absolute;
        vertical-align: top;
        left: 0;
        width: 12px;
        height: 12px;
        background-color: #88c6f5;
        border-radius: 30px;
        border: 5px solid #b2deff;
        top: 3px;    }
    .description.ask:before {
        content: url(https://smartcloudconnect.io/wp-content/uploads/question-mark-green-icon.svg);
    }
    .blue-bullet {
        color: #299aec;
        font-size: 17px;
        font-weight: 700;
        line-height: 31px;
        text-transform: uppercase;
        margin-bottom: 15px;
    }
    @media (max-width: 991px) {
        .blue-bullet {
            text-align: center;
        }
    }
    .main-block {
        background-image: url(https://smartcloudconnect.io/wp-content/uploads/invisible-seminar-bg.png);
        background-size: cover;
        padding-top: 200px;
        padding-bottom: 25px;
        text-align: left;
    }
    @media (max-width: 991px) {
        .main-block {
            padding-top: 120px;
        }
    }
    .content-block {
        text-align: left;
        padding-top: 80px;
        padding-bottom: 120px;
    }
    .logos-wrap img {
        width: 130px;    vertical-align: middle;
    }
    .logos-wrap img.plus-icon {
        width: 13px;
    }
    .speaker-block {
        position: relative;
        padding-left: 72px;
        height: 58px;
        margin-bottom: 24px;
    }
    .speaker-block .img-block {
        position: absolute;
        left: 0;
    }
    .speaker-block .img-block img {
        width: 58px;
    }
    .speaker-block .name {
        color: #275475;
        font-size: 17px;
        font-weight: 700;
        line-height: 26px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .speaker-block .role {
        color: #568aaf;
        font-size: 17px;
        font-weight: 300;
        line-height: 26px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .white-block.popUpWrapper {
        visibility: visible;
        opacity: 1;
        width: auto;
        margin: 0;
        min-height: unset;
        transform: none;
        position: static;
        box-shadow: 0 0 106px rgba(152, 173, 190, 0.2);
        background-color: #ffffff;
        padding: 25px 28px 28px 28px;
        margin-top: 30px;
    }
    @media (min-width: 992px) {
        .white-block.popUpWrapper {
            margin-top: -350px;
        }
    }
</style>



<section id="main-block" class="main-block">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <p class="blue-bullet">
                    Seminar &bull; 12 March 2019 14:00 - 18:00 PM &bull; Baku
                </p>
                <h1 class="title">
                    Seminar: Sales Automation
                </h1>
                <div class="logos-wrap">
                    <img src="https://smartcloudconnect.io/wp-content/uploads/microsoft-logo-white.png"/>&nbsp;&nbsp;
                    <img class="plus-icon" src="https://smartcloudconnect.io/wp-content/uploads/plus-icon.svg"/>&nbsp;&nbsp;
                    <img src="https://smartcloudconnect.io/wp-content/uploads/invisible-logo-white-text.png"/>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="content-block" class="content-block">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h2 class="sub-title">
                    Agenda
                </h2>
                <p class="text">
                    Sales process is the lifeblood of any business, but the sale itself often grind to a halt when communication with clients fails. In today's rich on SaaS solutions reality, you can optimize these processes and thereby allow the sales department to increase the profitability of the company.  During the seminar, the speakers will navigate you exactly how this can be done.
                </p>
                <h3 class="sub-title small"></h3>
                <p class="description">
                    How to use Microsoft Office tools to reduce sales operating expenses and enable sales professionals to focus on the main thing - selling.
                </p>
                <p class="description">
                    How to increase sales figures by changing the internal processes, both qualitatively and quantitatively, without changing people; and what automation tools can help accomplish this?
                </p>
                <p class="description">
                    Automated sales team analysis: who is the best seller in your company and why?
                </p>
                <p class="description">
                    “Mechanical Sales” vs “Sales Engagement”: what is the difference and how to automate them?
                </p>
                <p class="description">
                    If CRM is already implemented, how to synchronize its data with the "real life" to maximize the value for the sales processes?
                </p>
                <h3 class="sub-title small">
                    speakers:
                </h3>
                <div class="speaker-block">
                    <div class="img-block">
                        <img src="https://smartcloudconnect.io/wp-content/uploads/vlad-1.png" alt="">
                    </div>
                    <h4 class="name">Vlad Voskresensky</h4>
                    <p class="role">СЕО Invisible.io</p>
                </div>
                <div class="speaker-block">
                    <div class="img-block">
                        <img src="https://smartcloudconnect.io/wp-content/uploads/sviatoslav-lobash.png" alt="">
                    </div>
                    <h4 class="name">Sviat Lobach</h4>
                    <p class="role">Product Owner Invisible.io</p>
                </div>
                <div class="speaker-block">
                    <div class="img-block">
                        <img src="https://smartcloudconnect.io/wp-content/uploads/Desni_pasechnick.png" alt="">
                    </div>
                    <h4 class="name">Denys Pasechnyk</h4>
                    <p class="role">Microsoft PDM</p>
                </div>
                <h3 class="sub-title small">
                    Details:
                </h3>
                <p class="text">
                    Baku, Hyatt Regency<br>
                    Address: 6 Izmir St, Baku 1065, Azerbaijan<br>
                    Telephone: +994 12 490 12 34<br>
                    Date: March 12<br>
                    Time: 2-6 PM<br>
                </p>
            </div>
            <div class="col-md-5">
                <div class="white-block popUpWrapper">
                    <div class="content">
                        <p style="margin-bottom: 25px;
    font-size: 25px;
    font-weight: 300;text-align:center;" class="title">Registration Form</p>
                        <form>
                            <p class="input">
                                <label>
                                    <input type="text" class="textInput required" name="Name" id="Name">
                                    <span class="label"><span class="red">*</span>Full Name</span>
                                </label></p>
                            <p class="input"><label>
                                    <input type="text" class="textInput required email" name="Email" id="Email">
                                    <span class="label"><span class="red">*</span>Email</span></label></p>
                            <p class="input">
                                <label>
                                    <input type="text" class="textInput required" name="Company" id="Company">
                                    <span class="label"><span class="red">*</span>Company</span>
                                </label>
                            </p>
                            <p class="input">
                                <label>
                                    <input type="text" class="textInput" name="Position" id="Position">
                                    <span class="label">Business role</span>
                                </label>
                            </p>
                            <p class="input">
                                <label>
                                    <input type="text" class="textInput" name="CRM" id="CRM">
                                    <span class="label">Which CRM system do you use?</span>
                                </label>
                            </p>

                            <p class="button text-center"><a href="#"><span>Register</span></a></p>
                            <p style="color: #055492;font-size: 13px;font-weight: 400;line-height: 17px;margin: 0 0 15px 0!important;">
                                By submitting your information to our website you agree to the terms outlined in our <a
                                        href="/privacy-policy/" target="_blank">privacy policy</a> and our <a
                                        href="/terms-conditions/" target="_blank">terms and conditions</a>.</p></form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function () {
        jQuery.noConflict();
        (function ($) {

            $('.white-block .content input').focus(function() {
                $(this).addClass('hasText');
            });

            $('.white-block .content input').blur(function() {
                if ($(this).val() == '') {
                    $(this).removeClass('hasText');
                }
            });

            $(".white-block .button a").click(function(){

                var contactForm = $(this).parent().parent();

                if(!contactForm.hasClass("busy")){

                    $(".successful").remove();

                    var readyToSend = true;

                    contactForm.find(".required").each(function(){
                        if($(this).val().trim() == ""){
                            readyToSend = false;
                            $(this).addClass("red");
                        } else {
                            $(this).removeClass("red");
                        }
                    });

                    contactForm.find(".email").each(function(){
                        if(!isValidEmailAddress($(this).val().trim())){
                            readyToSend = false;
                            $(this).addClass("red");
                        } else {
                            $(this).removeClass("red");
                        }
                    });

                    if(readyToSend == true){

                        var formData = contactForm.serializeArray();

                        contactForm.addClass("busy");

                        /**
                         * Ajax send
                         */
                        $.ajax({
                            type: "POST",
                            url: "/wp-admin/admin-ajax.php",
                            dataType: "json",
                            cache: false,
                            data: {
                                "action": "contact_form_submit_webinar",
                                "formData": formData,
                                "currentPage": document.URL
                            },
                            success : function (out) {
                                if(out.status == "ok"){
                                    contactForm.removeClass("busy");
                                    contactForm.trigger("reset");
                                    contactForm.parent().append(out.successful);

                                    contactForm.click(function(){
                                        $(".successful").remove();
                                    });
                                }
                            }
                        });

                    }

                }

                return false;
            });

        })(jQuery);
    });
</script>