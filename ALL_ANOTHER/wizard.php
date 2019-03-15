<?php
class Animal
{
    public $name;
    function __construct($name) {
        $this->name = $name;
    }
    public function getName()
    {
        return $this->name;
    }
}

class Cat extends Animal
{
    public $catname;
    function __construct($name)
    {
        parent::__construct($name);
        $this->catname = $name;
    }

    function meow()
    {
        echo 'Cat ' . $this->catname . ' is saying meow';
    }
}
$cat = new Cat('Caat');
$cat->getName();
$cat->meow();
?>




<input class="alex-js-radio" id="win-office-radio" value="1" type="radio" name="dva"/>
<input class="alex-js-radio" id="win-outlook-radio" value="2" type="radio" name="dva"/>
<input class="alex-js-radio" id="win-gmail-radio" value="3" type="radio" name="dva"/>
<input class="alex-js-radio" id="mac-officeoutlook-radio" value="4" type="radio" name="dva"/>
<input class="alex-js-radio" id="mac-gmail-radio" value="5" type="radio" name="dva"/>
<input class="alex-js-radio" id="wizard2018-pc-notsure" value="6" type="radio" name="dva"/>
<input class="alex-js-radio" id="wizard2018-mac-notsure" value="7" type="radio" name="dva"/>

<a style="display: none;" id="modal-tnx-btn" target="_self" data-toggle="modal" data-target=".modal-tnx" href="#" class="green-btn"></a>

<script type="text/javascript">
    jQuery.noConflict();
    (function ($) {
        $('#contact-us-wizard-modal').on('click', function () {
            $('.modal').modal('hide');
            HelpCrunch('openChat');
        });
    })(jQuery);
    function selectProduct(_this, prod) {
        jQuery.noConflict();
        (function ($) {
            $('.newa-wizard-ms-right-button').removeClass('checked-product');
            switch (prod) {
                case 1:
                    $('#button1').addClass('checked-product');
                    document.getElementById('win-office-radio').checked = true;
                    break;
                case 2:
                    $('#button2').addClass('checked-product');
                    document.getElementById('win-outlook-radio').checked = true;
                    break;
                case 3:
                    $('#button3').addClass('checked-product');
                    document.getElementById('win-gmail-radio').checked = true;
                    break;
                case 4:
                    $('#button1mac').addClass('checked-product');
                    document.getElementById('mac-officeoutlook-radio').checked = true;
                    break;
                case 5:
                    $('#button2mac').addClass('checked-product');
                    document.getElementById('mac-gmail-radio').checked = true;
                    break;
                case 6:
                    $('#button4').addClass('checked-product');
                    document.getElementById('wizard2018-pc-notsure').checked = true;
                    break;
                case 7:
                    $('#button3mac').addClass('checked-product');
                    document.getElementById('wizard2018-mac-notsure').checked = true;
                    break;
            }
            _dcq.push(
                [
                    "track", "Download SCC"
                ]
            );
            $('input[type="submit"]').prop("disabled", false);
        })(jQuery);
    }

    function getWizzardCookie() {
        function get_cookie(cookie_name) {
            var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
            if (results)
                return ( unescape(results[2]) );
            else
                return null;
        }

        var answer = JSON.parse(get_cookie('form6369'));
        if (answer !== null) {
            var name_inp = document.querySelectorAll('input[name="first_name"]');
            var lastn_inp = document.querySelectorAll('input[name="last_name"]');
            var email_inp = document.querySelectorAll('input[name="your-email"]');
            var company_inp = document.querySelectorAll('input[name="company"]');
            name_inp[0].value = answer.name;
            name_inp[1].value = answer.name;
            lastn_inp[0].value = answer.lastName;
            lastn_inp[1].value = answer.lastName;
            email_inp[0].value = answer.email;
            email_inp[1].value = answer.email;
            company_inp[0].value = answer.company;
            company_inp[1].value = answer.company;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        jQuery.noConflict();
        (function ($) {
            $('input[type="submit"]').prop("disabled", true);

        })(jQuery);

        CompleteFormWizard();
        getWizzardCookie();
    });


    function CompleteFormWizard() {
        jQuery.noConflict();
        (function ($) {
            $("#slider").addClass('newa-wizard-slider2');

            $("#button1").addClass('newa-wizard-ms-right-buttonactivate');
            $("#button2").addClass('newa-wizard-ms-right-buttonactivate');
            $("#button3").addClass('newa-wizard-ms-right-buttonactivate');
            $("#button4").addClass('newa-wizard-ms-right-buttonactivate');

            $("#button1p1").addClass('newa-wizard-ms-right-p1activate');
            $("#button1p2").addClass('newa-wizard-ms-right-p2activate');
            $("#button2p1").addClass('newa-wizard-ms-right-p1activate');
            $("#button2p2").addClass('newa-wizard-ms-right-p2activate');
            $("#button3p1").addClass('newa-wizard-ms-right-p1activate');
            $("#button3p2").addClass('newa-wizard-ms-right-p2activate');
            $("#button4p1").addClass('newa-wizard-ms-right-p1activate');
            $("#button4p2").addClass('newa-wizard-ms-right-p2activate');


            $("#tymac").addClass('newa-wizard-ms-form-visible');
            $("#header2mac").addClass('newa-wizard-ms-form-header2s');
            $("#leftbgmac").addClass('newa-wizard-ms-left-white');
            $("#leftformhidemac").addClass('newa-wizard-ms-leftformhide');

            $("#rightbgmac").addClass('newa-wizard-color-right-active');
            $("#button1mac").addClass('newa-wizard-ms-right-buttonactivate');
            $("#button2mac").addClass('newa-wizard-ms-right-buttonactivate');
            $("#button3mac").addClass('newa-wizard-ms-right-buttonactivate');

            $("#button1p1mac").addClass('newa-wizard-ms-right-p1activate');
            $("#button1p2mac").addClass('newa-wizard-ms-right-p2activate');
            $("#button2p1mac").addClass('newa-wizard-ms-right-p1activate');
            $("#button2p2mac").addClass('newa-wizard-ms-right-p2activate');
            $("#button3p1mac").addClass('newa-wizard-ms-right-p1activate');
            $("#button3p2mac").addClass('newa-wizard-ms-right-p2activate');


            $("#img1").addClass('newa-wizard-ms-showimg');
            $("#img2").addClass('newa-wizard-ms-showimg');
            $("#img3").addClass('newa-wizard-ms-showimg');
            $("#img4").addClass('newa-wizard-ms-showimg');

            $("#img1mac").addClass('newa-wizard-ms-showimg');
            $("#img2mac").addClass('newa-wizard-ms-showimg');
            $("#img3mac").addClass('newa-wizard-ms-showimg');


            $("#img1_grey").addClass('hidden');
            $("#img2_grey").addClass('hidden');
            $("#img3_grey").addClass('hidden');
            $("#img4_grey").addClass('hidden');

            $("#img1mac_grey").addClass('hidden');
            $("#img2mac_grey").addClass('hidden');
            $("#img3mac_grey").addClass('hidden');
        })(jQuery);
    }



    function changeModalTnx(n) {
        jQuery.noConflict();
        (function ($) {
            if (n == 1 || n == 4) {
                $('#modal-tnx #modal-tnx-link').attr('href','https://outlook.office365.com/owa/?path=/options/manageapps/action/installFromURL.slab&assetid=WA104379517&lc=en-US&pm=US&scope=1');
                $('#modal-tnx #img-tnx-product').attr('src','/wp-content/uploads/Office365.svg');
                $('#modal-tnx #tnx-product-name').text('Office 365');
                setTimeout(function () {
                    $('#modal-tnx').modal('show');
                }, 50);
            }
            if (n == 2) {
                $('#modal-tnx #modal-tnx-link').attr('href','https://smartcloudconnect.io/download/SmartCloudConnectAddIn_x32-bit.msi');
                $('#modal-tnx #img-tnx-product').attr('src','/wp-content/uploads/Outlook.svg');
                $('#modal-tnx #tnx-product-name').text('Outlook');
                setTimeout(function () {
                    $('#modal-tnx').modal('show');
                }, 50);
            }
            if (n == 3 || n == 5) {
                $('#modal-tnx #modal-tnx-link').attr('href','https://chrome.google.com/webstore/detail/agfekjndkedoakoeahndfnjilkifbicn');
                $('#modal-tnx #img-tnx-product').attr('src','/wp-content/uploads/Gmail.svg');
                $('#modal-tnx #tnx-product-name').text('Gmail');
                $('#modal-tnx').modal('show');
                setTimeout(function () {
                    $('#modal-tnx').modal('show');
                }, 50);
            }
        })(jQuery);

    }


    document.addEventListener('wpcf7submit', function (event) {
        jQuery.noConflict();
        (function ($) {

            var product = $('.alex-js-radio:checked').val();
            changeModalTnx(Number(product));

        })(jQuery);
    }, false);



    document.addEventListener('wpcf7mailsent', function (event) {
        jQuery.noConflict();
        (function ($) {
            $('input[type="submit"]').prop("disabled", true);

            var product = $('.alex-js-radio:checked').val();
            switch (Number(product)) {
                case 1:
                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-pc-office365');
                    document.location.href = "https://outlook.office365.com/owa/?path=/options/manageapps/action/installFromURL.slab&assetid=WA104379517&lc=en-US&pm=US&scope=3";
                    break;
                case 2:
                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-pc-Outlook');
                    document.location.href = "https://smartcloudconnect.io/download/SmartCloudConnectAddIn_x32-bit.msi";
                    break;
                case 3:
//                    chrome.webstore.install();
                    document.location.href = "https://chrome.google.com/webstore/detail/agfekjndkedoakoeahndfnjilkifbicn";

                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-pc-gmail');
                    break;
                case 4:
                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-mac-outlook-office365');
                    document.location.href = "https://outlook.office365.com/owa/?path=/options/manageapps/action/installFromURL.slab&assetid=WA104379517&lc=en-US&pm=US&scope=3";
                    break;
                case 5:
//                    chrome.webstore.install();
                    document.location.href = "https://chrome.google.com/webstore/detail/agfekjndkedoakoeahndfnjilkifbicn";
                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-mac-gmail');
                    break;
                case 6:
//                    Tawk_API.toggle();
                    HelpCrunch('openChat');
                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-pc-notsure');
                    break;
                case 7:
//                    Tawk_API.toggle();
                    HelpCrunch('openChat');
                    ga('send', 'event', 'Download SCC', 'Download', 'wizard2018-mac-notsure');
                    break;
            }

        })(jQuery);

        var name_inp = document.querySelectorAll('input[name$="first_name"]');
        var lastn_inp = document.querySelectorAll('input[name$="last_name"]');
        var email_inp = document.querySelectorAll('input[name$="your-email"]');
        var company_inp = document.querySelectorAll('input[name$="company"]');

        var name = (name_inp[0].value != '') ? name_inp[0].value : name_inp[1].value;
        var last_name = (lastn_inp[0].value != '') ? lastn_inp[0].value : lastn_inp[1].value;
        var email = (email_inp[0].value != '') ? email_inp[0].value : email_inp[1].value;
        var company = (company_inp[0].value != '') ? company_inp[0].value : company_inp[1].value;

        var info = {
            name: name,
            lastName: last_name,
            email: email,
            company: company
        };
        var form = JSON.stringify(info);

        var d = new Date();
        var exdays = 180;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "form6369=" + form + ";" + expires + ";domain=smartcloudconnect.io;path=/;";


        setTimeout(getWizzardCookie(), 2000);

    }, false);
</script>
