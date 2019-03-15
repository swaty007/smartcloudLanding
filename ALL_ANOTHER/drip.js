<script>

var _dcq_msg = function() {


    var check_select_product = function () {
        if (page_url_a == '/wizard/') {
            var product = document.querySelector('.alex-js-radio:checked').value;
            switch (Number(product)) {
                case 1:
                    return "wizard2018-pc-office365";
                    break;
                case 2:
                    return "wizard2018-pc-Outlook";
                    break;
                case 3:
                    return "wizard2018-pc-gmail";
                    break;
                case 4:
                    return "wizard2018-mac-outlook-office365";
                    break;
                case 5:
                    return "wizard2018-mac-gmail";
                    break;
            }
        }
    }

    var push_msg = function (_event,cb) {
        var params = {
            tags: ["Website lead"],
            baseURI: page_url_a,
            success: function(response) {
                console.log(response,'response');
            }
        };

        _event.detail.inputs.forEach(function(item, i, arr) {
            if (item.name == "your-email") {
                params["email"] = item.value;
            } else {
                params[item.name.replace('-','_')] = item.value;
            }

        });

        var UrlParams = getAllUrlParams();
        if (UrlParams != '') {
            /* params = Object.assign(params,UrlParams); */
            for (var key in UrlParams) {
                params['UrlParams_'+(key.replace('-','_'))] = UrlParams[key];
            }
        }

        var check_product_wizard = check_select_product();
        if (check_product_wizard != undefined) {
            params["Wizard_product_selected"] = check_product_wizard;
        }

        console.log(params,'params')

        _dcq.push(["identify", params]);





        if (cb != undefined) {
            cb(response);
        }

    }


    var anotherFunction = function (number) {
        return number+2;
    }

    return {
        push_msg: function (_event,cb) {
            return push_msg(_event,cb);
        },
        function2: function (number) {
            return anotherFunction(number);
        }
    }
}();


</script>








<script type="text/javascript">



    function getWizzardCookie() {
        function get_cookie ( cookie_name )
        {
            var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
            if ( results )
                return ( unescape ( results[2] ) );
            else
                return null;
        }
        var answer = JSON.parse(get_cookie('form6369'));
        if (answer !== null)
        {
            var name_inp = document.querySelectorAll('input[name="FirstName"]');
            var lastn_inp = document.querySelectorAll('input[name="LastName"]');
            var email_inp = document.querySelectorAll('input[name="your-email"]');
            var company_inp = document.querySelectorAll('input[name="company"]');
            name_inp[0].value=answer.name;
            name_inp[1].value=answer.name;
            lastn_inp[0].value=answer.lastName;
            lastn_inp[1].value=answer.lastName;
            email_inp[0].value=answer.email;
            email_inp[1].value=answer.email;
            company_inp[0].value=answer.company;
            company_inp[1].value=answer.company;
        }
    }

    document.addEventListener('DOMContentLoaded',function () {
        jQuery.noConflict();
        (function ($) {
            $('input[type="submit"]').prop( "disabled", true );
        })(jQuery);

        CompleteFormWizard();
        getWizzardCookie();
    });



    document.addEventListener( 'wpcf7mailsent', function( event ) {

        var name_inp = document.querySelectorAll('input[name$="FirstName"]');
        var lastn_inp = document.querySelectorAll('input[name$="LastName"]');
        var email_inp = document.querySelectorAll('input[name$="your-email"]');
        var company_inp = document.querySelectorAll('input[name$="company"]');

        var name = (name_inp[0].value != '') ? name_inp[0].value : name_inp[1].value;
        var last_name = (lastn_inp[0].value != '') ? lastn_inp[0].value : lastn_inp[1].value;
        var email = (email_inp[0].value != '') ? email_inp[0].value : email_inp[1].value;
        var company = (company_inp[0].value != '') ? company_inp[0].value : company_inp[1].value;

        var info = {
            name:name,
            lastName:last_name,
            email:email,
            company:company,
        };
        var form = JSON.stringify(info);

        var d = new Date();
        var exdays = 180;
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "form6369="+form+";"+expires+";domain=smartcloudconnect.io;path=/;";

        jQuery.noConflict();
        (function ($) {
            $('input[type="submit"]').prop( "disabled", true );

         
        })(jQuery);


        setTimeout( getWizzardCookie(),2000);

    }, false );
</script>