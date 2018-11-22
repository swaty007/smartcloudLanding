jQuery.noConflict();
(function($) {

    $(document).on('click', 'a.event-page-s2-span3', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('html, body').animate({
            scrollTop: $($this.attr('href')).offset().top - 120
        }, 500, 'linear');
    });

    //event time logic
    var upcoming = $('#upcoming-events');
    var first_event = true;

    $('li.fusion-one-third').each(function (i,el) {
        //console.log(i,el);

        if ( !$(el).find('.events-page-list-date').hasClass('events-page-list-date-past') ) {
            if(el.dataset.time != undefined) {

                let eventTime = new Date(el.dataset.time).getTime();
                let nowTime = new Date().getTime();


                if( (eventTime + (60*60*24) ) < nowTime) {
                    $(el).find('.events-page-list-date').addClass('events-page-list-date-past');
                    $(el).find('.events-page-list-li-img').addClass('events-page-img-past');
                } else {
                    if (first_event) {
                        let date = Number($(el).find('.events-page-list-date').text().replace(/\D+/g,""));
                        let mounth = $(el).find('.events-page-list-month').text();
                        let name_event = $(el).find('.events-page-list-h3').text();
                        $(el).attr('id','upcoming_li_block');
                        upcoming.find('.event-page-s2-span2').html(date+'<br> <span class="event-page-s2-month">'+mounth+'</span>');
                        upcoming.find('.event-page-s2-span3').text(name_event);
                        first_event = false;
                    }
                }
            }
        }

    });
    //event time logic

})(jQuery);