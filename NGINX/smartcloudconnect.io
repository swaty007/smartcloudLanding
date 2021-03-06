
#wordpress cache
    fastcgi_cache_path /var/cache/nginx/fastcgi_temp/cache levels=1:2 keys_zone=WORDPRESS:10m max_size=2g inactive=20m use_temp_path=off;
    fastcgi_cache_key $scheme$request_method$host$request_uri;
    fastcgi_cache_use_stale error timeout invalid_header http_500;
    add_header X-Cached $upstream_cache_status;
######
    fastcgi_cache_lock on;
    fastcgi_cache_revalidate on;
    fastcgi_cache_background_update on;
    fastcgi_cache_valid any 60m;
    fastcgi_pass_header Set-Cookie;
    fastcgi_pass_header Cookie;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;
############

pagespeed on;
pagespeed Rewritelevel CoreFilters;
	pagespeed FetchWithGzip on;
	pagespeed CreateSharedMemoryMetadataCache "/var/cache/ngx_pagespeed/" 251200;
    pagespeed DefaultSharedMemoryCacheKB 251200;
pagespeed ShmMetadataCacheCheckpointIntervalSec 300;
#	pagespeed CustomFetchHeader Accept-Encoding gzip;

#admin pages
pagespeed Statistics on;
pagespeed StatisticsLogging on;
pagespeed StatisticsLoggingIntervalMs    60000;
pagespeed StatisticsLoggingMaxFileSizeKb 20024;
pagespeed UsePerVhostStatistics on;
pagespeed LogDir /var/log/pagespeed;
pagespeed MessageBufferSize 1000000;
#pagespeed ListOutstandingUrlsOnError on;
pagespeed StatisticsPath /ngx_pagespeed_statistics;
pagespeed GlobalStatisticsPath /ngx_pagespeed_global_statistics;
pagespeed MessagesPath /ngx_pagespeed_message;
pagespeed ConsolePath /pagespeed_console;
pagespeed AdminPath /pagespeed_admin;
pagespeed GlobalAdminPath /pagespeed_global_admin;
#admin pages end
pagespeed EnableCachePurge on;
pagespeed PurgeMethod PURGE;
pagespeed ImageMaxRewritesAtOnce -1;

pagespeed LRUCacheKbPerProcess     8192;
pagespeed LRUCacheByteLimit        32768;

pagespeed UseNativeFetcher on;
resolver 1.1.1.1;
#resolver 8.8.8.8;
#pagespeed InPlaceRewriteDeadlineMs deadline_value_in_milliseconds;

#pagespeed StaticAssetPrefix /custom/static/;
pagespeed StaticAssetPrefix /pagespeed_static/;

#server {
#  listen 80;
#  listen 443;
#  server_name *.smartcloudconnect.io;
#server_name docs.sf.invisiblesolutions.com;

#return 301 https://smartcloudconnect.io/$request_uri?docs=main;
#}

server {
pagespeed on;
	    listen 80 default_server reuseport;
	    listen [::]:80 default_server reuseport;
        listen 443 ssl http2 default_server reuseport;
	    #listen [::]:443 ssl http2 ipv6only=on default_server;
        server_name smartcloudconnect.io _;
       root /var/www/wp-smartcloudconnect.io;

#        ssl on;
 ssl_session_cache   shared:SSL:10m;
 ssl_session_timeout 15m;
        ssl_certificate /etc/ssl/certs/star.smartcloudconnect.io.crt;
        ssl_certificate_key /etc/ssl/private/star.smartcloudconnect.io.key;

    add_header 'Access-Control-Allow-Origin' '*';
    ssl_prefer_server_ciphers on;
    ssl_protocols TLSv1.1 TLSv1.2;
	#ssl_ciphers AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;
	#ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
	ssl_ciphers ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS;
	#ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK;
	#ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH:ECDHE-RSA-AES128-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA128:DHE-RSA-AES128-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-GCM-SHA128:ECDHE-RSA-AES128-SHA384:ECDHE-RSA-AES128-SHA128:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA:DHE-RSA-AES128-SHA128:DHE-RSA-AES128-SHA128:DHE-RSA-AES128-SHA:DHE-RSA-AES128-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA384:AES128-GCM-SHA128:AES128-SHA128:AES128-SHA128:AES128-SHA:AES128-SHA:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!MD5:!PSK:!RC4";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
ssl_dhparam /etc/nginx/dhparam.pem;
ssl_session_ticket_key current.key;
ssl_session_ticket_key prev.key;
ssl_session_ticket_key prevprev.key;
  ssl_stapling on; # Requires nginx >= 1.3.7
  ssl_stapling_verify on; # Requires nginx >= 1.3.7
   ssl_trusted_certificate /etc/ssl/certs/comodoRSA.pem;
#  ssl_trusted_certificate /etc/ssl/certs/comodo.pem;

pagespeed SslCertDirectory "/etc/ssl/certs/";
#pagespeed SslCertFile /etc/ssl/certs/ssl-cert-snakeoil.pem;
pagespeed SslCertFile /etc/ssl/certs/comodoRSA.pem;
resolver 1.1.1.1; #cloudflare
#resolver 8.8.8.8;




proxy_buffering on;
proxy_http_version 1.1;
proxy_set_header Connection "";


        error_log /var/log/nginx/wp-scc.error.log;
        #access_log /var/log/nginx/wp-scc.access.log;
        access_log off;


        ## This should be in your http block and if it is, it's not needed here.
        index index.php;


        location = /favicon.ico {
                log_not_found off;
                access_log off;
        }

        location = /robots.txt {
                allow all;
                log_not_found off;
                access_log off;
        }

aio threads=default;

location ~ "\.pagespeed\.([a-z]\.)?[a-z]{2}\.[^.]{10}\.[^.]+" {
    set $skip_cache 1;
  add_header "" "";
}
location ~ "^/pagespeed_static/" { }
location ~ "^/ngx_pagespeed_beacon$" { }

location /ngx_pagespeed_statistics {
allow all;
 }
location /ngx_pagespeed_global_statistics {
 allow all;
 }
location /ngx_pagespeed_message {
 allow all;
 }
location /pagespeed_console {
 allow all;
 }
location ~ ^/pagespeed_admin {
 allow all;
 }
location ~ ^/pagespeed_global_admin {
 allow all;
  }

rewrite ^^/docs/fast-channel/articles/.*/articles/(.*)$ https://smartcloudconnect.io/docs/fast-channel/articles/$1 permanent;
rewrite ^^/docs/stable-channel/articles/.*/articles/(.*)$ https://smartcloudconnect.io/docs/stable-channel/articles/$1 permanent;
include scc-redirects.conf;
location /docs/ {
#root /var/www/docs/fast-channel;
index index.html;
pagespeed standby;
error_page 404 404.html;
       }


        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff)$ {
                #~* ^.+.(ogg|ogv|svg|svgz|eot|otf|woff|mp4|ttf|rss|atom|jpg|jpeg|gif|png|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf)$
        #add_header Cache-Control "public, max-age=320000";
                expires max;
                access_log off;
                log_not_found off;

		open_file_cache max=20000 inactive=20s;
                open_file_cache_valid 30s;
                open_file_cache_min_uses 2;
                open_file_cache_errors off;
                #open_file_cache_errors on;
	}

pagespeed Domain https://smartcloudconnect.io;
pagespeed Domain smartcloudconnect.io;
#pagespeed Domain *.smartcloudconnect.io;
pagespeed Domain http://52.226.23.142;
pagespeed Domain localhost;
pagespeed Domain https://docs.sf.invisiblesolutions.com;
pagespeed Domain docs.sf.invisiblesolutions.com;


##pagespeed MapOriginDomain smartcloudconnect.io https://smartcloudconnect.io;
pagespeed MapOriginDomain http://localhost https://smartcloudconnect.io;
#pagespeed MapOriginDomain smartcloudconnect.io https://smartcloudconnect.io;
pagespeed MapRewriteDomain https://smartcloudconnect.io/ smartcloudconnect.io;


pagespeed ModifyCachingHeaders on;
pagespeed FileCachePath /var/cache/ngx_pagespeed/;
pagespeed FileCacheSizeKb 400200;
pagespeed FileCacheCleanIntervalMs 360000;
pagespeed FileCacheInodeLimit 500000;
pagespeed MemcachedServers "127.0.0.1:11211";
pagespeed CacheFragment smartcloudconnect;
#pagespeed MemcachedServers memcache;
pagespeed LoadFromFile "https://smartcloudconnect.io" "/var/www/wp-smartcloudconnect.io/";
pagespeed LoadFromFile "localhost" "/var/www/wp-smartcloudconnect.io";
pagespeed LoadFromFile "smartcloudconnect.io" "/var/www/wp-smartcloudconnect.io/";
pagespeed LoadFromFileRuleMatch Disallow \.php$;
pagespeed HttpCacheCompressionLevel 9;
#pagespeed FetchHttps enable,allow_self_signed;

pagespeed AllowVaryOn "Accept, Save-Data, User-Agent";
pagespeed RespectVary on;
pagespeed Allow "*";
pagespeed Disallow */wp-admin/*;
pagespeed Disallow "*.svg";

pagespeed InPlaceRewriteDeadlineMs 50; #10

#fastcgi_cache start
    set $skip_cache 0;
	# POST requests and urls with a query string should always go to PHP
	if ($request_method = POST) {
		set $skip_cache 1;
	}
	if ($query_string != "") {
		set $skip_cache 1;
	}
	# Don't cache uris containing the following segments
	if ($request_uri ~* "(/wp-admin/|/xmlrpc.php|/wp-(app|cron|login|register|mail).php|wp-.*.php|/feed/|index.php|wp-comments-popup.php|wp-links-opml.php|wp-locations.php|sitemap(_index)?.xml|[a-z0-9_-]+-sitemap([0-9]+)?.xml)") {
		set $skip_cache 1;
	}
# Don't cache url's containing the following segments
#    if ($request_uri ~* "/wp-admin/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml") {
#        set $skip_cache 1;
#    }
	# Don't use the cache for logged in users or recent commenters
	if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_no_cache|wordpress_logged_in") {
		set $skip_cache 1;
	}


    location / {
        # This is cool because no php is touched for static content.
        # include the "?$args" part so non-default permalinks doesn't break when using query string
        try_files $uri $uri/ /index.php?$args;

#WORDPRESS SECURE
# Deny access to any files with a .php extension in the uploads directory
# Works in sub-directory installs and also in multisite network
location ~* /(?:uploads|files)/.*\.php$ {
        deny all;
}
# Make sure files with the following extensions do not get loaded by nginx because nginx would display the source code, and these files can contain PASSWORDS!
location ~* \.(engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\.php)?|xtmpl)$|^(\..*|Entries.*|Repository|Root|Tag|Template)$|\.php_
{
        return 444;
}
#nocgi
location ~* \.(pl|cgi|py|sh|lua)\$ {
        return 444;
}
#disallow
    location ~* (roundcube|webdav|smtp|http\:|soap|w00tw00t) {
        return 444;
}
location ~ /(\.|wp-config\.php|readme\.html|license\.txt) { deny all; }
#WORDPRESS SECURE END

    }

##############3#WORDPRESS CACHE###################
location ~ \.php$ {
   # try_files $uri =404;
         include snippets/fastcgi-php.conf;
         include fastcgi_params;
         fastcgi_pass phpfcgi;#unix:/var/run/php/php7.0-fpm.sock;
         fastcgi_cache_bypass $skip_cache;
         fastcgi_no_cache $skip_cache;
         fastcgi_cache WORDPRESS;

         fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
         fastcgi_param  HTTPS on;
         fastcgi_buffer_size 128k;
         fastcgi_send_timeout 5m;
         fastcgi_read_timeout 150s;
         fastcgi_buffers 256 16k;
         fastcgi_busy_buffers_size 256k;
         fastcgi_temp_file_write_size 256k;
	 fastcgi_keep_conn on;
    }
###################
#	location ~ /purge(/.*) {
#	    fastcgi_cache_purge WORDPRESS "$scheme$request_method$host$1";
#	}



pagespeed AddResourceHeader "Access-Control-Allow-Origin" "*";

   # Honoring Content-Security-Policy Headers
    #pagespeed HonorCsp on;
#pagespeed FetchWithGzip on;
#pagespeed ForceCaching on; #cache nocache

###pagespeed DisableFilters sprite_images,convert_jpeg_to_webp,convert_to_webp_lossless;
pagespeed DisableFilters insert_image_dimensions;
#pagespeed EnableFilters debug,add_instrumentation,rewrite_domains;
#pagespeed DomainRewriteHyperlinks on;
pagespeed EnableFilters insert_dns_prefetch;
pagespeed EnableFilters convert_jpeg_to_webp,convert_to_webp_lossless,convert_to_webp_animated,recompress_webp; #in_place_optimize_for_browser;
pagespeed PrivateNotVaryForIE off;
pagespeed EnableFilters inline_preview_images;
pagespeed MinImageSizeLowResolutionBytes 50000;
#pagespeed ForbidAllDisabledFilters true;

pagespeed EnableFilters responsive_images,inline_import_to_link,outline_css,fallback_rewrite_css_urls,rewrite_style_attributes,rewrite_css,inline_css;
pagespeed EnableFilters make_show_ads_async,make_google_analytics_async,remove_comments,collapse_whitespace,remove_quotes;
pagespeed EnableFilters rewrite_javascript,inline_javascript;
pagespeed EnableFilters rewrite_images,inline_images,convert_jpeg_to_progressive,convert_png_to_jpeg,recompress_images,recompress_jpeg,recompress_png,strip_image_color_profile,strip_image_meta_data,jpeg_subsampling;
pagespeed EnableFilters resize_images,resize_mobile_images,lazyload_images; #resize_rendered_image_dimensions
pagespeed EnableFilters local_storage_cache,extend_cache,extend_cache_pdfs;
#pagespeed EnableFilters trim_urls;
pagespeed EnableFilters dedup_inlined_images,canonicalize_javascript_libraries;
pagespeed EnableFilters convert_meta_tags,combine_css,elide_attributes,outline_javascript,combine_javascript;
#pagespeed EnableFilters move_css_above_scripts,move_css_to_head,hint_preload_subresources;
#pagespeed EnableFilters insert_dns_prefetch,prioritize_critical_css,defer_javascript;

##pagespeed UseExperimentalJsMinifier on;
pagespeed InPlaceResourceOptimization on;
 pagespeed LoadFromFileCacheTtlMs 604800000;
 pagespeed ImplicitCacheTtlMs 604800000;

pagespeed CssInlineMaxBytes 4540;
pagespeed CssOutlineMinBytes 30000;  #8800;
pagespeed JsInlineMaxBytes 2048;
pagespeed JsOutlineMinBytes 8800;
pagespeed CssImageInlineMaxBytes 3048;
pagespeed ImageInlineMaxBytes 5080;
pagespeed MaxCombinedJsBytes 8000000; #4Mb

#pagespeed CombineAcrossPaths off; #test = fail to combine css
pagespeed PermitIdsForCssCombining *; #test combine with id

pagespeed AvoidRenamingIntrospectiveJavascript off;
pagespeed MaxSegmentLength 2048;
#pagespeed LazyloadImagesAfterOnload off;

pagespeed MaxCacheableContentLength -1;
pagespeed MaxCombinedCssBytes -1;

pagespeed EnableFilters flatten_css_imports;
pagespeed CssFlattenMaxBytes 804800;

pagespeed InPlaceSMaxAgeSec 60480;#-1; #10 proxy cache

pagespeed PreserveUrlRelativity on;
pagespeed LowercaseHtmlNames on;
pagespeed RespectXForwardedProto on;

# beacon default (2hrs) change to 12 (12*3600*1000)
#pagespeed FinderPropertiesCacheExpirationTimeMs 43200000;
########################

}

