<script id="footer-js" type="text/javascript" async>
function getAllUrlParams(url) {

    // извлекаем строку из URL или объекта window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // объект для хранения параметров
    var obj = {};

    // если есть строка запроса
    if (queryString) {

        // данные после знака # будут опущены
        queryString = queryString.split('#')[0];

        // разделяем параметры
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
            // разделяем параметр на ключ => значение
            var a = arr[i].split('=');

            // обработка данных вида: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });

            // передача значения параметра ('true' если значение не задано)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];

            // преобразование регистра
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // если ключ параметра уже задан
            if (obj[paramName]) {
                // преобразуем текущее значение в массив
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // если не задан индекс...
                if (typeof paramNum === 'undefined') {
                    // помещаем значение в конец массива
                    obj[paramName].push(paramValue);
                }
                // если индекс задан...
                else {
                    // размещаем элемент по заданному индексу
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // если параметр не задан, делаем это вручную
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
};
getAllUrlParams.url = getAllUrlParams();
console.log(getAllUrlParams.url,'url');

//outbound google analitics start
function recordOutboundLink(link, category, action) {
    ga('send', 'event', category, action);
    if ( link.target == '_blank' ) return true;
    setTimeout('document.location = "' + link.href + '"', 100);
    return false;
}
/* use regular Javascript for this */
function getAttr(ele, attr) {
    var result = (ele.getAttribute && ele.getAttribute(attr)) || null;
    if( !result ) {
        var attrs = ele.attributes;
        var length = attrs.length;
        for(var i = 0; i < length; i++)
            if(attr[i].nodeName === attr) result = attr[i].nodeValue;
    }
    return result;
}

function aiosp_addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

function aiosp_addEvent(element, evnt, funct){
    if (element.attachEvent)
        return element.attachEvent('on'+evnt, funct);
    else
        return element.addEventListener(evnt, funct, false);
}
aiosp_addLoadEvent(function () {
    var links = document.getElementsByTagName('a');
    for (var x=0; x < links.length; x++) {
        if (typeof links[x] == 'undefined') continue;
        aiosp_addEvent( links[x], 'click', function () {
            var mydomain = new RegExp(document.domain, 'i');
            href = getAttr(this, 'href');
            if (href && href.toLowerCase().indexOf('http') === 0 && !mydomain.test(href)) {
                recordOutboundLink(this, 'Outbound Links', href);
            }
        });
    }
});

//outbound google analitics end





var _dcq_msg = function() {

    var check_select_product = function () {
        if (page_url_a == '/wizard/' || page_url_a == '/recommended-sales-technology/' || page_url_a ==  '/salesforce-outlook-plugin/') {
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
    };

    var push_msg = function (_event,cb) {
        var params = {
            tags: ["Website lead"],
            baseURI: page_url_a,
            success: function(response) {
                console.log(response,'response');
            }
        };

        _event.detail.inputs.forEach(function(item, i, arr) {
            switch (item.name) {
                case "first_name":
                    params["first_name"] = item.value;
                    break;
                case "last_name":
                    params["last_name"] = item.value;
                    break;
                case "your-email":
                    params["email"] = item.value;
                    break;
                case "tel-387":
                    params["PhoneNumber"] = item.value;
                    break;
                case "textarea-183":
                    params["MessageText"] = item.value;
                    break;
                case "Message-Text":
                    params["MessageText"] = item.value;
                    break;
                case "menu-332":
                    // params["ContactReason"] = item.value;
                    break;
                case "company":
                    params["company"] = item.value;
                    break;
                case "LeadSource":
                    params["LeadSource"] = item.value;
                    break;
                case "LeadOwner":
                    params["LeadOwner"] = item.value;
                    break;
                case "url_referrer":
                    params["Refferer"] = item.value;
                    break;
                case "lang":break;
                default:
                    params[item.name.replace('-','_')] = item.value;
                    break;
            }

        });

        //Get URL PARAMS
        // var UrlParams = getAllUrlParams();
        //  if (UrlParams != '') {
        /* params = Object.assign(params,UrlParams); */
        //    for (var key in UrlParams) {
        //         params['UrlParams_'+(key.replace('-','_'))] = UrlParams[key];
        //     }
        // }

        var check_product_wizard = check_select_product();
        if (check_product_wizard != undefined) {
            params["Wizard_product_selected"] = check_product_wizard;
        }

        // check which page came from
        if(getAllUrlParams.url.cf != undefined) {
            // params["Wizard_coming_from"] = getAllUrlParams.url.cf;
        }

        console.log(params,'params');

        _dcq.push(["identify", params]);

        if (cb != undefined) {
            cb(response);
        }

    };

    var anotherFunction = function (number) {
        return number+2;
    };

    return {
        push_msg: function (_event,cb) {
            return push_msg(_event,cb);
        },
        function2: function (number) {
            return anotherFunction(number);
        }
    };
}();



jQuery.noConflict();
(function($) {//ready start

    $(document).on('click','.modal-backdrop',function(){
        $('.modal').modal('hide'); // closes all active pop ups.
        $('.modal-backdrop').remove(); // removes the grey overlay.
    });

    // check which page came from

    // $('a.green-btn').each(function() {//,.menu-item a
    //     $(this).attr('href', $(this).attr('href').replace('/wizard/','/wizard/?cf='+page_url_a) );
    // });

// check which page came from end


    //  search icon mobile version
    $('.fusion-main-menu .fusion-menu .fusion-main-menu-search .searchform')
        .clone()
        .prependTo('.fusion-mobile-nav-holder .fusion-menu')
        .wrap('<li class="fusion-mobile-nav-item" style="padding:  15px 28px;background: #f9f9f9;"></li>');
//  search dont work when empty text

    // searchform
    $('form.searchform').on('submit', function(e){
        var input_text = $(this).find("[name='s']").val();
        if(input_text == "") {
            e.preventDefault();
            $(this).parent('.fusion-custom-menu-item-contents').hide();
        }
    });
    // searchform

    // некликабельный фичи
    $('.fusion-main-menu ul.fusion-menu>li>a').each(function(){

        if($(this).attr('href') == undefined) return;

        if( $(this).attr('href').indexOf("features/") > -1 && $(this).attr('href').indexOf("wizard/") == -1) {
            $(this).css('pointerEvents','none');
        };
    });
    // некликабельный фичи

    //load page for header and async fonts
    $('body').addClass('load');
    //load page for header




    // HIDE NAVISTART
    let navi_img = "data:image/png;base64,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";
    $('img').each(function () {
        let src = $(this).attr('src');
        if (src == navi_img) {
            $(this).hide();
            $(this).parent('div').hide();
        }
    });
    setInterval(function () {
        $('img').each(function () {
            let src = $(this).attr('src');
            if (src == navi_img) {
                $(this).hide();
                $(this).parent('div').hide();
            }
        });
    },5000)
    // HIDE NAVISTART



})(jQuery);//ready end

document.addEventListener( 'wpcf7mailsent', function( event ) {
    _dcq_msg.push_msg(event);

    if (page_url_a != '/wizard/') {
        ga('send', 'event', 'Contact Form', 'submit', page_url_a);
        _dcq.push(
            [
                "track", "Request a demo",
            ]
        );
    }

    jQuery.noConflict();
    (function($) {
        $('body').append('<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=689601&conversionId=775042&fmt=gif" />')
        $('.modal').modal('hide') // closes all active pop ups.
        $('.modal-backdrop').remove() // removes the grey overlay.
    })(jQuery);
}, false );


// Blog addaptive webkit-line-clamp property for "..." in the end of post-content

jQuery.noConflict();
(function($) {
    $(window).load(function(){

        var lineH = 32;
        $('.blog #content .post').each(function () {
            var title_h = $(this).find('.post-content h2').outerHeight();
            var elem_p = $(this).find('.post-content .fusion-post-content-container p');
            //   console.log(title_h);
            if (title_h > 96) {
                var num = 6;
                var difference = Math.round((title_h - 96)/lineH);
                var num = num - difference;
                elem_p.css({"-webkit-line-clamp":String(num)});
            }
        });

    });
})(jQuery);

//    Cookie aut start
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function gaCreateUserCookie() {
    var clientId = CliendIdGoogle;

    console.log(clientId,'clientId',typeof clientId );

    var user_id_cookie = clientId;
    var d = new Date();
    var exdays = 180;
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "user_id_cookie=" + user_id_cookie + ";" + expires + ";domain=smartcloudconnect.io;path=/;";
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
var text = 'We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we\'ll assume that you are happy to receive all cookies from our website. However, if you would like to, you can change your cookie settings at any time. Feel free to read through our <a href="/cookie-policy/">cookie policy.</a>'
html_modal.innerHTML = '<div style="all: initial!important;left: 0!important;right: 0!important;top: 0!important;bottom: 0!important;margin: auto!important;height: 100vh!important;width: 100vw!important;border: none!important;position: fixed!important;z-index: 2147483647!important;background: none!important;padding: 0!important;"><div style="color: black;background-color: rgba(0, 0, 0, 0.54);z-index: 2147483647;overflow: hidden;position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;right: 0px;bottom: 0px;margin: auto;display: flex;flex: 1 1 0%;"><div style="background: white;width: 100%;bottom: 0px;position: absolute;max-height: 75%;overflow: auto;padding-bottom: 0px;"><div style="color: rgba(0, 0, 0, 0.54);margin-top: 25px;margin-left: 40px;margin-right: 58px;font-size: 16px;font-weight: 300;line-height: 1.5;height: fit-content;font-family: \'Aktiv Grotesk\',\'Cabin\',\'Open Sans\', sans-serif ;white-space: pre-wrap;">'+text+'</div><div style="width: 100%; height: 75px; bottom: 0px;"><div style="padding-top: 20px;padding-right: 17px;float: right;"><button onclick="gaCreateUserCookie()" style="min-width: 105px;padding:0; margin-left: 10px; margin-right: 25px; height: 36px; border-radius: 3px; border: none; background-color: #37a148; color: #ffffff;"><span style="font-family: \'Cabin\',\'Aktiv Grotesk\',\'Open Sans\', sans-serif;  font-size: 14px; font-weight: 600; font-style: normal; font-stretch: normal; letter-spacing: 0.5px; text-align: center; margin-left: 10px; margin-right: 10px;">ACCEPT</span></button></div></div></div></div></div>';

if (cookie_id === undefined) {
    document.body.appendChild(html_modal);
} else {
    var clientId = CliendIdGoogle;
    if (clientId === cookie_id) {
        console.log('id match',clientId);
    }
}

//    Cookie aut end



//UTM parameters save in cookie
(function SaveUtmCookie() {

    var UrlParams = getAllUrlParams();

    var utm_source_input = document.querySelectorAll('input[name="utm_source"]');
    var utm_medium_input = document.querySelectorAll('input[name="utm_medium"]');
    var utm_term_input = document.querySelectorAll('input[name="utm_term"]');
    var utm_campaign_input = document.querySelectorAll('input[name="utm_campaign"]');
    var utm_content_input = document.querySelectorAll('input[name="utm_content"]');
    var url_referrer_input = document.querySelectorAll('input[name="url_referrer"]');

    var utm_parameters = {},
        utm_source = "",
        utm_medium = "",
        utm_term = "",
        utm_campaign = "",
        utm_content = "",
        url_referrer = "";

    var cookie_utm = getCookie("utm_parameters");
    var cookie_referrer = getCookie("url_referrer");
    var referrer = document.referrer;
    if (cookie_referrer !== undefined) {
        url_referrer = cookie_referrer;
    }
    if (referrer.indexOf('smartcloudconnect.io') == -1 && referrer != "" && referrer !== " ") {
        let params_ = referrer;
        let d_ = new Date();
        let exdays_ = 30;
        d_.setTime(d_.getTime() + (exdays_ * 24 * 60 * 60 * 1000));
        let expires_ = "expires=" + d_.toUTCString();
        document.cookie = "url_referrer=" + params_ + ";" + expires_ + ";domain=smartcloudconnect.io;path=/;";
        url_referrer = referrer;
    }
    if (Object.keys(UrlParams).length) {
        if (UrlParams.utm_medium) {
            utm_medium = UrlParams.utm_medium;
            utm_parameters.utm_medium = utm_medium;
        }
        if (UrlParams.utm_source) {
            utm_source = UrlParams.utm_source;
            utm_parameters.utm_source = utm_source;
        }
        if (UrlParams.utm_term) {
            utm_term = UrlParams.utm_term;
            utm_parameters.utm_term = utm_term;
        }
        if (UrlParams.utm_campaign) {
            utm_campaign = UrlParams.utm_campaign;
            utm_parameters.utm_campaign = utm_campaign;
        }
        if (UrlParams.utm_content) {
            utm_content = UrlParams.utm_content;
            utm_parameters.utm_content = utm_content;
        }
    }
    if (cookie_utm !== undefined) {
        cookie_utm = JSON.parse(cookie_utm);
        if (cookie_utm.utm_medium && utm_medium == "") {
            utm_medium = cookie_utm.utm_medium;
        }
        if (cookie_utm.utm_source && utm_source == "") {
            utm_source = cookie_utm.utm_source;
        }
        if (cookie_utm.utm_term && utm_term == "") {
            utm_term = cookie_utm.utm_term;
        }
        if (cookie_utm.utm_campaign && utm_campaign == "") {
            utm_campaign = cookie_utm.utm_campaign;
        }
        if (cookie_utm.utm_content && utm_content == "") {
            utm_content = cookie_utm.utm_content;
        }
    }

    for (var i = 0;i < utm_medium_input.length; ++i) {
        utm_medium_input[i].value = utm_medium;
    }
    for (var i1 = 0;i1 < utm_source_input.length; ++i1) {
        utm_source_input[i1].value = utm_source;
    }
    for (var i2 = 0;i2 < utm_term_input.length; ++i2) {
        utm_term_input[i2].value = utm_term;
    }
    for (var i3 = 0;i3 < utm_campaign_input.length; ++i3) {
        utm_campaign_input[i3].value = utm_campaign;
    }
    for (var i4 = 0;i4 < utm_content_input.length; ++i4) {
        utm_content_input[i4].value = utm_content;
    }
    for (var i5 = 0;i5 < url_referrer_input.length; ++i5) {
        url_referrer_input[i5].value = url_referrer;
    }

    if (Object.keys(utm_parameters).length) {
        var params = JSON.stringify(utm_parameters);
        var d = new Date();
        var exdays = 30;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "utm_parameters=" + params + ";" + expires + ";domain=smartcloudconnect.io;path=/;";
    }

})();
//UTM parameters save in cookie

// ASYNC LOAD IFRAME
function AsyncLoadIframe(state) {
    jQuery.noConflict();

    var ytIframes = jQuery('iframe[src*="www.youtube.com"],iframe[src*="youtube.com"],iframe[src*="player.vimeo.com"]');
    ytIframes.each(function (i,e) {
        var ytFrame = jQuery(e);
        var ytSrc = ytFrame.attr('src');
        //ytFrame.attr('src','about:blank');

        var ytWidth = ytFrame.width();
        var ytHeight = ytFrame.height();
        var ytId,imgSrc;
        var tmp = ytFrame.attr('src').split(/\//);
        var siteFrom = tmp[2];
        tmp = tmp[tmp.length - 1];
        tmp = tmp.split('?');
        ytId = tmp[0];
        var ytLoader = jQuery('<div class="ytLoader">');

        switch (siteFrom) {
            case "youtube.com","www.youtube.com":
                imgSrc = 'https://i.ytimg.com/vi/'+ytId+'/hqdefault.jpg';
                removeVideoFrame(imgSrc);
                break;
            case "player.vimeo.com":
                jQuery.ajax({
                    type: "GET",
                    url: "https://vimeo.com/api/v2/video/261124764.json",
                    data: "",
                    success: function (msg) {
                        console.log(msg,'ajax');
                        imgSrc = msg[0].thumbnail_large;
                        removeVideoFrame(imgSrc);
                    }
                });
                break;
        };
        function removeVideoFrame(imgSrc) {
            ytLoader.append(jQuery('<img style="width:'+ytWidth+'px" class="cover" src="'+imgSrc+'">'));
            // ytLoader.append($('<img class="playBtn" src="play_button.png">'));
            ytLoader.data('ytFrame',ytFrame);
            ytFrame.replaceWith(ytLoader);
            ytLoader.click(function () {
                var ytFrame = ytLoader.data('ytFrame');
                ytFrame.attr('src',ytSrc+'?autoplay=1');
                ytLoader.replaceWith(ytFrame);
            });
        };
        console.log(state,'END',i);
    });

};
// ASYNC LOAD IFRAME

(function(w,d){
    w.HelpCrunch=function(){w.HelpCrunch.q.push(arguments)};w.HelpCrunch.q=[];
    function r(){var s=document.createElement('script');s.async=true;s.type='text/javascript';s.src='https://widget.helpcrunch.com/';(d.body||d.head).appendChild(s);}
    if(w.attachEvent){w.attachEvent('onload',r)}else{w.addEventListener('load',r,false)}
})(window, document);

HelpCrunch('init', 'smartcloudconnect', {
    applicationId: 3277,
    applicationSecret: 'JDYNbQPTs28Y5WyYo+JDLElP4SHxqQ/FFH+Fbq5wck9CAN4R7azHvXS+jeRwrH9f2SthCWlhXfAVkUzOW+omJQ=='
});

HelpCrunch('showChatWidget');

HelpCrunch('onPreChatFormSubmit', function (event) {
    _dcq.push(
        [
            "track", "Chat started",
        ]
    );
    // event.detail.userData.company
    // event.detail.userData.email
    // event.detail.userData.name
    // event.detail.userData.phone
    ga('send', 'event', 'Contact Form', 'submit', 'Chat');
});

(function (c, p, d, u, id, i) {
    id = CliendIdGoogle; // Optional Custom ID for user in your system
    u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;
    i = document.createElement('script');
    i.type = 'application/javascript';
    i.src = u;
    i.async = true;
    d.getElementsByTagName('head')[0].appendChild(i);
}("1497", document.location.href, document));



// POP WHITEPAPER
function showPopUpGuide(hours) {
    if (hours == undefined) {
        hours = 24;
    }

    var learn_guide = "show";
    var d = new Date();
    var exdays = 1;
    d.setTime(d.getTime() + (exdays * hours * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "show_guide=" + learn_guide + ";" + expires + ";domain="+String(window.location.hostname)+";path=/;";
    if(typeof document.getElementById('popup_learn_guide').remove=='function'){
        //If support  is found
        document.getElementById('popup_learn_guide').remove()
    }
    else{
        //If not
        document.getElementById('popup_learn_guide').outerHTML='';
    }
}

var cookie_guide = getCookie("show_guide");
var html_pop_guide = document.createElement('div');
html_pop_guide.id = "popup_learn_guide";
html_pop_guide.className = "popup-fixed";

html_pop_guide.innerHTML = `
    <div class="pop-wrap">
      <button onclick="showPopUpGuide()" class="close" type="button" data-dismiss="modal" aria-hidden="true">×</button>
      <h3 class="pop-title">Free E-book: Sales Automation Guide</h3><p class="pop-text">Learn how to boost productivity at every stage of your  sales cycle</p>
      <a onclick="ga('send', 'event', 'button', 'click', 'WP Modal');showPopUpGuide(54)" href="https://smartcloudconnect.io/sales-automation-software/" class="green-btn">
          Get a free guide
      </a>
  </div>`;

if (false && cookie_guide === undefined && page_url_a !== "/top-sales-automation-tools/" && page_url_a !== "/sales-automation-software/" && page_url_a !== "/wizard/") {
    setTimeout(function () {
        document.body.appendChild(html_pop_guide);
        setTimeout(function () {
            document.getElementById('popup_learn_guide').className += " show-pop";
        },100);
    },12500)
}
//POP WHITEPAPER
</script>


<script async type="text/javascript">
_linkedin_data_partner_id = "116028";
</script><script type="text/javascript">
    (function(){var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=116028&fmt=gif" />
    </noscript>

    <script async src="https://checkout.stripe.com/checkout.js"></script>
    <script async src="https://smartcloudconnect.io/wp-content/themes/smartcloud/stripe-test/js/smart-cloud11.js?v=002"></script>


    <!--POP STYLE-->
<style>
.popup-fixed {
    background-image: url(https://smartcloudconnect.io/wp-content/uploads/Book-bang-for-entherpise.png);
    background-color: #305475;
    width: 284px;
    min-height: 200px;
    max-width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 16777001;
    background-size: 120px auto;
    background-repeat: no-repeat;
    background-position: 47% 35px;
    opacity: 0;
    transition: 0.6s all;
}
@media (max-width: 768px) {
.popup-fixed {
        max-width: 100%;
        width: 100%;
        background-position: 0 35px;
    }
}
.popup-fixed.show-pop {
    opacity: 1;
}
.popup-fixed .pop-wrap {
    padding: 190px 35px 35px 35px;
    position: relative;
}
@media (max-width: 768px) {
.popup-fixed .pop-wrap {
        padding: 35px 35px 160px 145px;
        height: 260px;
    }
}
.popup-fixed .pop-wrap .pop-title {
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
    margin-top: 0;
    margin-bottom: 5px;
}
.popup-fixed .pop-wrap .pop-text {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin-top: 0;
    margin-bottom: 15px;
}
@media (max-width: 768px) {
.popup-fixed .pop-wrap .pop-title {
        margin-bottom: 0;
    }
.popup-fixed .pop-wrap .pop-text {
        margin-bottom: 0;
    }
}
.popup-fixed .pop-wrap .green-btn {
    background-color: #37a148;
    border-radius: 2px;
    color: #ffffff;
    border: 2px solid transparent;
    font-size: 17px;
    font-weight: bold;
    line-height: 50px;
    padding: 0 20px;
    text-transform: uppercase;
    outline: none;
    text-decoration: none;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    transition: 0.3s all;
    text-align: center !important;
    max-width: 100%;
}
@media (max-width: 768px) {
.popup-fixed .pop-wrap .green-btn {
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 10px;
    }
}
.popup-fixed .pop-wrap .green-btn:hover {
    border-color: #37a148;
    color: #37a148;
    background-color: transparent;
}
.popup-fixed .pop-wrap .close {
    position: absolute;
    right: 15px;
    top: 15px;
    display: inline-block;
    font-size: 30px;
    margin-top: -5px;
    text-shadow: none;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    float: right;
    line-height: 1;
    color: #fff;
    opacity: .4;
}
.popup-fixed .pop-wrap .close:hover {
    opacity: .6;
}
</style>

<script async type="text/javascript">
    //        stars anim
    jQuery.noConflict();
(function ($) {
    function starsAnim () {
        var scrollTop = $(window).scrollTop();
        var WindowHeigth = $(window).height() / 1.4;
        $('.stars-anim').each(function () {
            if (scrollTop > ($(this).offset().top - WindowHeigth) && scrollTop < ($(this).offset().top + WindowHeigth)) {
                $(this).addClass('do');
            }
        })
    }
    $(window).scroll(function () {
        starsAnim();
    });
    starsAnim();
})(jQuery);
//stars anim end
</script>
<style>
.stars-anim {
    display: inline-block;
    position: relative;
    font-size: 14px;
    vertical-align: middle;
}
.stars-anim .empty {
    width: 96px;
}
.stars-anim .empty img {
    width: 16px;
}
.stars-anim .wrap-anim {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 0%;
    transition: 0.8s all;
}
.stars-anim .wrap-anim .full {
    width: 96px;
}
.stars-anim .wrap-anim .full img {
    width: 16px;
}
.stars-anim.do .wrap-anim {
    width: 100%;
}
@media(max-width:991px) {
.stars-anim .wrap-anim {
        width: 100%!important;
    }
}
</style>