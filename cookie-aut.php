
<script>
//    Cookie aut start
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function gaCreateUserCookie() {
        ga(function(tracker) {
            var clientId = tracker.get('clientId');

            console.log(clientId,'clientId',typeof clientId );

            var user_id_cookie = clientId;
            var d = new Date();
            var exdays = 180;
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "user_id_cookie=" + user_id_cookie + ";" + expires + ";domain=smartcloudconnect.io;path=/;";
        });

        if(typeof document.getElementById('user_id_cookie_modal').remove=='function'){
            //If support  is found
            document.getElementById('user_id_cookie_modal').remove()
        }
        else{
            //If not
            document.getElementById('user_id_cookie_modal').outerHTML='';
        }
    }

    var cookie_id = getCookie("user_id_cookie");
    var html_modal = document.createElement('div');
    html_modal.id = "user_id_cookie_modal";
    var text = 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies from our website. However, if you would like to, you can change your cookie settings at any time. Feel free to read through our <a href="/cookie-policy/">cookie policу.</a>'
    html_modal.innerHTML = '<div style="all: initial!important;left: 0!important;right: 0!important;top: 0!important;bottom: 0!important;margin: auto!important;height: 100vh!important;width: 100vw!important;border: none!important;position: fixed!important;z-index: 2147483647!important;background: none!important;padding: 0!important;"><div style="color: black;background-color: rgba(0, 0, 0, 0.54);z-index: 2147483647;overflow: hidden;position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;right: 0px;bottom: 0px;margin: auto;display: flex;flex: 1 1 0%;"><div style="background: white;width: 100%;bottom: 0px;position: absolute;max-height: 75%;overflow: auto;padding-bottom: 0px;"><div style="color: rgba(0, 0, 0, 0.54);margin-top: 25px;margin-left: 40px;margin-right: 58px;font-size: 16px;font-weight: 300;line-height: 1.5;height: fit-content;font-family: \'Aktiv Grotesk\',\'Cabin\',\'Open Sans\', sans-serif ;white-space: pre-wrap;">'+text+'</div><div style="width: 100%; height: 75px; bottom: 0px;"><div style="padding-top: 20px;padding-right: 17px;float: right;"><button onclick="gaCreateUserCookie()" style="min-width: 105px;padding:0; margin-left: 10px; margin-right: 25px; height: 36px; border-radius: 3px; border: none; background-color: #37a148; color: #ffffff;"><span style="font-family: \'Cabin\',\'Aktiv Grotesk\',\'Open Sans\', sans-serif;  font-size: 14px; font-weight: 600; font-style: normal; font-stretch: normal; letter-spacing: 0.5px; text-align: center; margin-left: 10px; margin-right: 10px;">ACCEPT</span></button></div></div></div></div></div>';

    if (cookie_id === undefined) {
        document.body.appendChild(html_modal);
    } else {
        ga(function(tracker) {
            var clientId = tracker.get('clientId');
            if (clientId === cookie_id) {
                console.log('id match');
            }
            });
    }

//    Cookie aut end
</script>


<div style="all: initial!important;
    left: 0!important;
    right: 0!important;
    top: 0!important;
    bottom: 0!important;
    margin: auto!important;
    height: 100vh!important;
    width: 100vw!important;
    border: none!important;
    position: fixed!important;
    z-index: 2147483647!important;
    background: none!important;
    padding: 0!important;">
    <div style="color: black;
    background-color: rgba(0, 0, 0, 0.54);
    z-index: 2147483647;
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    display: flex;
    flex: 1 1 0%;">
        <div style="background: white;
    width: 100%;
    bottom: 0px;
    position: absolute;
    max-height: 75%;
    overflow: auto;
    padding-bottom: 0px;">
            <div style="color: rgba(0, 0, 0, 0.54);
             margin-top: 25px;
              margin-left: 40px;
               margin-right: 58px;
                font-size: 16px;
                 font-weight: 300;
                  line-height: 1.5;
                   height: fit-content;
                   font-family: \'Aktiv Grotesk\',\'Cabin\',\'Open Sans\', sans-serif ;
                    white-space: pre-wrap;">We use cookies to help our site work, to understand how it is used, and to tailor the adverts presented on our site. By clicking “Accept” below, you agree to us doing so. You can read more in our cookie notice. Or, if you do not agree, you can click Manage below to access other choices.
            </div>

            <div style="width: 100%; height: 120px; bottom: 0px;">
                <div style="padding-top: 20px;
                 padding-right: 17px;
                  float: right;">

                    <button onclick="gaCreateUserCookie()" style="min-width: 105px;padding:0; margin-left: 10px; margin-right: 25px; height: 36px; border-radius: 3px; border: none; background-color: #a13737; color: #ffffff;"><span style="font-family: \'Cabin\',\'Aktiv Grotesk\','Open Sans', sans-serif  font-size: 14px; font-weight: 600; font-style: normal; font-stretch: normal; letter-spacing: 0.5px; text-align: center; margin-left: 10px; margin-right: 10px;">DECLINE</span></button>

                    <button onclick="gaCreateUserCookie()" style="min-width: 105px;padding:0; margin-left: 10px; margin-right: 25px; height: 36px; border-radius: 3px; border: none; background-color: #a13737; color: #ffffff;">
                        <span style="font-family: \'Cabin\',\'Aktiv Grotesk\','Open Sans', sans-serif  font-size: 14px; font-weight: 600; font-style: normal; font-stretch: normal; letter-spacing: 0.5px; text-align: center; margin-left: 10px; margin-right: 10px;">
                            DECLINE
                        </span>
                    </button>

                    <button onclick="gaCreateUserCookie()" style="min-width: 105px;padding:0; margin-left: 10px; margin-right: 25px; height: 36px; border-radius: 3px; border: none; background-color: #37a148; color: #ffffff;">
                        <span style="font-family: \'Cabin\',\'Aktiv Grotesk\','Open Sans', sans-serif  font-size: 14px; font-weight: 600; font-style: normal; font-stretch: normal; letter-spacing: 0.5px; text-align: center; margin-left: 10px; margin-right: 10px;">
                            ACCEPT
                        </span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>



<div id="event-notification">
    <p style="
    margin:  0;
    height: 52px;
    font-size: 18px;
    color: #055492;
    line-height: 52px;
    text-align:  center;
    font-weight:  400;">Meet us September 25-28 at <img src="https://smartcloudconnect.io/wp-content/uploads/dreamforce_logo.png" style="width:  107px;">
        <a id="event-notification-btn" target="_blank" href="https://smartcloudconnect.io/dreamforce-2018/" style="
    color: #37a148;
    padding: 7px 20px;
    border: 1px solid #37a148;
    border-radius:  2px;
    font-size: 13px;
    text-decoration:  none;
    font-weight:  700;
    transition: 0.3s all;
    margin-left: 80px;">READ MORE</a>
    </p>
    <style>
        #event-notification-btn:hover {
            background-color: #37a148!important;
            color: #ffffff!important;
        }
        @media(max-width:470px) {
            #event-notification p{
                height: auto!important;
                font-size: 12px!important;
                line-height: 35px!important;
            }
            #event-notification img {
                width: 61px!important;
            }
            #event-notification a {
                font-size: 10px!important;
                padding: 7px 7px!important;
            }
        }
        @media(max-width:768px) {
            #event-notification a {
                margin-left: 0!important;
            }
        }
    </style>
</div>