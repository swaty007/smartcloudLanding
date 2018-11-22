Cute.CuteGallery = function () {
    this.element = document.createElement("div");
    this.element.className = "br-cutegallery";
    this.fs_btn = document.createElement("div");
    this.fs_btn.className = "br-fullscreen-btn";
    this.slider_wrapper = document.createElement("div");
    this.slider_wrapper.className = "br-gallery-wrapper";
    this.top_cont = document.createElement("div");
    this.top_cont.className = "br-top";
    this.bot_cont = document.createElement("div");
    this.bot_cont.className = "br-bottom";
    this.play_btn = document.createElement("div");
    this.play_btn.className = "br-play-btn"
};
Cute.CuteGallery.prototype = {
    constructor: Cute.CuteGallery, setup: function (b) {
        this.slider = b;
        var g = b.element.parentElement, f = document.createElement("div");
        g.removeChild(b.element);
        g.appendChild(this.element);
        this.slider_wrapper.appendChild(b.element);
        this.thumbList = new Cute.ThumbList(b.slideManager);
        this.thumbList.config.type = "horizontal";
        this.thumbList.setup(f);
        this.thumbList.list.type = "horizontal";
        this.next = new Cute.Next(b.slideManager);
        this.next.setup(f);
        this.prev = new Cute.Previous(b.slideManager);
        this.prev.setup(f);
        this.bot_cont.appendChild(this.play_btn);
        this.bot_cont.appendChild(this.thumbList.domElement);
        !Cute.FallBack.isIE7 && !Cute.FallBack.isIE8 && this.element.appendChild(this.fs_btn);
        this.top_cont.appendChild(this.slider_wrapper);
        this.top_cont.appendChild(this.next.domElement);
        this.top_cont.appendChild(this.prev.domElement);
        this.element.appendChild(this.top_cont);
        this.element.appendChild(this.bot_cont);
        var c = this.element, d = false, a = this, i = function () {
            d = true;
            if (c.mozRequestFullScreen) c.mozRequestFullScreen(); else if (c.webkitRequestFullScreen) c.webkitRequestFullScreen(); else {
                a.element.style.position = "fixed";
                a.element.style.left = "0";
                a.element.style.top = "0";
                a.element.style.height = window.innerHeight + "px"
            }
            b.__setSize();
            b.slideManager.resize();
            a.bot_cont.className += " fullscreen";
            a.slider_wrapper.className += " fullscreen";
            a.fs_btn.className += " fullscreen";
            a.__onresize();
            window.addResizeListener(a.__onresize, a)
        }, e = function () {
            d = false;
            if (document.mozCancelFullScreen) document.mozCancelFullScreen(); else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen(); else {
                a.element.style.position = "";
                a.element.style.height = "";
                a.element.style.left = "";
                a.element.style.top = ""
            }
            b.__setSize();
            b.slideManager.resize();
            a.element.style.height = "auto";
            a.bot_cont.className = "br-bottom";
            a.slider_wrapper.className = "br-gallery-wrapper";
            a.fs_btn.className = "br-fullscreen-btn";
            b.element.style.top = "";
            window.removeResizeListener(a.__onresize, a)
        }, h = function () {
            if (!d) i(); else e()
        };
        this.__onresize = function () {
            if (d) {
                b.element.style.top = (window.innerHeight - a.bot_cont.offsetHeight - parseInt(b.element.style.height)) / 2 + "px";
                a.element.style.height = window.innerHeight + "px"
            }
        };
        this.fs_btn.onclick = h;
        if (c.mozRequestFullScreen || c.webkitRequestFullScreen) {
            document.addEventListener("mozfullscreenchange", function () {
                !document.mozFullScreen && d && e()
            }, false);
            document.addEventListener("webkitfullscreenchange", function () {
                !document.webkitIsFullScreen && d && e()
            }, false)
        }
        b.wrapper = this.slider_wrapper;
        b.__setSize();
        b.slideManager.resize();
        if (!Cute.AbstractControl.paused) this.play_btn.className += " br-pause-btn";
        this.play_btn.onclick = function () {
            if (Cute.AbstractControl.paused) {
                a.slider.play();
                this.className = "br-play-btn"
            } else {
                a.slider.pause();
                this.className += " br-pause-btn"
            }
        }
    }
};