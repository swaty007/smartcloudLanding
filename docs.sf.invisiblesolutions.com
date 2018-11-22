server {
pagespeed standby;
	    listen 80;
	    #listen [::]:80;
        listen 443 ssl http2;
	    #listen [::]:443 ssl http2 ipv6only=on;
        server_name docs.sf.invisiblesolutions.com;
#server_name dontneed.com;
       root /var/www/wp-smartcloudconnect.io/;

#        ssl on;
 ssl_session_cache   shared:SSL:10m;
 ssl_session_timeout 15m;
   ssl_certificate /etc/ssl/certs/star.sf.invisiblesolutions.com.crt;
    ssl_certificate_key /etc/ssl/private/star.sf.invisiblesolutions.com.key;

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
  ssl_trusted_certificate /etc/ssl/certs/comodo.pem;

pagespeed SslCertDirectory "/etc/ssl/certs/";
#pagespeed SslCertFile /etc/ssl/certs/ssl-cert-snakeoil.pem;
pagespeed SslCertFile /etc/ssl/certs/comodo.pem;
#resolver 1.1.1.1; #cloudflare
#resolver 8.8.8.8;


location = / {
 return 301 https://smartcloudconnect.io/docs/fast-channel/;
}

  location / {
return 301 https://smartcloudconnect.io$request_uri;
}

#return 301 https://smartcloudconnect.io$request_uri;


proxy_buffering on;
proxy_http_version 1.1;
proxy_set_header Connection "";


        error_log /var/log/nginx/wp-docs.error.log;
        access_log /var/log/nginx/wp-docs.access.log;
#	access_log off;


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

}

