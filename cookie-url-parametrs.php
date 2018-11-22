<script>
    document.addEventListener("DOMContentLoaded", function() {

        var UrlParams = getAllUrlParams();

        var utm_source_input = document.querySelectorAll('input[name="utm_source"]');
        var utm_medium_input = document.querySelectorAll('input[name="utm_medium"]');
        var utm_term_input = document.querySelectorAll('input[name="utm_term"]');

        var utm_parameters = {},
            utm_source = "",
            utm_medium = "",
            utm_term = "";

        var cookie_utm = getCookie("utm_parameters");
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
        } else if (cookie_utm !== undefined) {
            cookie_utm = JSON.parse(cookie_utm);
            if (cookie_utm.utm_medium) {
                utm_medium = cookie_utm.utm_medium;
            }
            if (cookie_utm.utm_source) {
                utm_source = cookie_utm.utm_source;
            }
            if (cookie_utm.utm_term) {
                utm_term = cookie_utm.utm_term;
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

        if (Object.keys(utm_parameters).length) {
            var params = JSON.stringify(utm_parameters);
            var d = new Date();
            var exdays = 1;
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "utm_parameters=" + params + ";" + expires + ";domain=smartcloudconnect.io;path=/;";
        }

    });
</script>
















