/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
 
 
 
 
(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);




/*global jQuery */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);




/* jQuery Tipsy */

(function($) {

    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };

    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);

                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }

                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },

        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },

        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },

        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },

        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };

    $.fn.tipsy = function(options) {

        $.fn.tipsy.enable();

        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            if ($.fn.tipsy.enabled !== true) {
                return;
            }
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };

        if (!options.live) this.each(function() { get(this); });

        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;

    };

    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    $.fn.tipsy.enable = function() {
        $.fn.tipsy.enabled = true;
    }

    $.fn.tipsy.disable = function() {
        $.fn.tipsy.enabled = false;
    }

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };

    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };

    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };

    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
        return function() {
            var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
                boundTop = $(document).scrollTop() + margin,
                boundLeft = $(document).scrollLeft() + margin,
                $this = $(this);

            if ($this.offset().top < boundTop) dir.ns = 'n';
            if ($this.offset().left < boundLeft) dir.ew = 'w';
            if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
            if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

            return dir.ns + (dir.ew ? dir.ew : '');
        }
    };

})(jQuery);



/*
  AUTHOR: Osvaldas Valutis, www.osvaldas.info AudioPlayer CoDrops
*/

(function(e,t,n,r){var i="ontouchstart"in t,s=i?"touchstart":"mousedown",o=i?"touchmove":"mousemove",u=i?"touchend":"mouseup",a=i?"touchcancel":"mouseup",f=function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.ceil(e%3600%60);return(t==0?"":t>0&&t.toString().length<2?"0"+t+":":t+":")+(n.toString().length<2?"0"+n:n)+":"+(r.toString().length<2?"0"+r:r)},l=function(e){var t=n.createElement("audio");return!!(t.canPlayType&&t.canPlayType("audio/"+e.split(".").pop().toLowerCase()+";").replace(/no/,""))};e.fn.audioPlayer=function(t){var t=e.extend({classPrefix:"audioplayer",strPlay:"Play",strPause:"Pause",strVolume:"Volume"},t),n={},r={playPause:"playpause",playing:"playing",time:"time",timeCurrent:"time-current",timeDuration:"time-duration",bar:"bar",barLoaded:"bar-loaded",barPlayed:"bar-played",volume:"volume",volumeButton:"volume-button",volumeAdjust:"volume-adjust",noVolume:"novolume",mute:"mute",mini:"mini"};for(var u in r)n[u]=t.classPrefix+"-"+r[u];this.each(function(){if(e(this).prop("tagName").toLowerCase()!="audio")return false;var r=e(this),u=r.attr("src"),c=r.get(0).getAttribute("autoplay"),c=c===""||c==="autoplay"?true:false,h=r.get(0).getAttribute("loop"),h=h===""||h==="loop"?true:false,p=false;if(typeof u==="undefined"){r.find("source").each(function(){u=e(this).attr("src");if(typeof u!=="undefined"&&l(u)){p=true;return false}})}else if(l(u))p=true;var d=e('<div class="'+t.classPrefix+'">'+(p?e("<div>").append(r.eq(0).clone()).html():'<embed src="'+u+'" width="0" height="0" volume="100" autostart="'+c.toString()+'" loop="'+h.toString()+'" />')+'<div class="'+n.playPause+'" title="'+t.strPlay+'"><a href="#">'+t.strPlay+"</a></div></div>"),v=p?d.find("audio"):d.find("embed"),v=v.get(0);if(p){d.find("audio").css({width:0,height:0,visibility:"hidden"});d.append('<div class="'+n.time+" "+n.timeCurrent+'"></div><div class="'+n.bar+'"><div class="'+n.barLoaded+'"></div><div class="'+n.barPlayed+'"></div></div><div class="'+n.time+" "+n.timeDuration+'"></div><div class="'+n.volume+'"><div class="'+n.volumeButton+'" title="'+t.strVolume+'"><a href="#">'+t.strVolume+'</a></div><div class="'+n.volumeAdjust+'"><div><div></div></div></div></div>');var m=d.find("."+n.bar),g=d.find("."+n.barPlayed),y=d.find("."+n.barLoaded),b=d.find("."+n.timeCurrent),w=d.find("."+n.timeDuration),E=d.find("."+n.volumeButton),S=d.find("."+n.volumeAdjust+" > div"),x=0,T=function(e){theRealEvent=i?e.originalEvent.touches[0]:e;v.currentTime=Math.round(v.duration*(theRealEvent.pageX-m.offset().left)/m.width())},N=function(e){theRealEvent=i?e.originalEvent.touches[0]:e;v.volume=Math.abs((theRealEvent.pageY-(S.offset().top+S.height()))/S.height())},C=setInterval(function(){y.width(v.buffered.end(0)/v.duration*100+"%");if(v.buffered.end(0)>=v.duration)clearInterval(C)},100);var k=v.volume,L=v.volume=.111;if(Math.round(v.volume*1e3)/1e3==L)v.volume=k;else d.addClass(n.noVolume);w.html("…");b.text(f(0));v.addEventListener("loadeddata",function(){w.text(f(v.duration));S.find("div").height(v.volume*100+"%");x=v.volume});v.addEventListener("timeupdate",function(){b.text(f(v.currentTime));g.width(v.currentTime/v.duration*100+"%")});v.addEventListener("volumechange",function(){S.find("div").height(v.volume*100+"%");if(v.volume>0&&d.hasClass(n.mute))d.removeClass(n.mute);if(v.volume<=0&&!d.hasClass(n.mute))d.addClass(n.mute)});v.addEventListener("ended",function(){d.removeClass(n.playing)});m.on(s,function(e){T(e);m.on(o,function(e){T(e)})}).on(a,function(){m.unbind(o)});E.on("click",function(){if(d.hasClass(n.mute)){d.removeClass(n.mute);v.volume=x}else{d.addClass(n.mute);x=v.volume;v.volume=0}return false});S.on(s,function(e){N(e);S.on(o,function(e){N(e)})}).on(a,function(){S.unbind(o)})}else d.addClass(n.mini);if(c)d.addClass(n.playing);d.find("."+n.playPause).on("click",function(){if(d.hasClass(n.playing)){e(this).attr("title",t.strPlay).find("a").html(t.strPlay);d.removeClass(n.playing);p?v.pause():v.Stop()}else{e(this).attr("title",t.strPause).find("a").html(t.strPause);d.addClass(n.playing);p?v.play():v.Play()}return false});r.replaceWith(d)});return this}})(jQuery,window,document);



/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

	// soon to be deprecated
	$.fn.extend({
		hideSuperfishUl: methods.hide,
		showSuperfishUl: methods.show
	});

})(jQuery);




/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);




/**
 *
 * Twitter Feed Fetcher
 *
 */


function sm_format_twitter(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'" target="_blank">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<li><span>'+status+'</span><small><a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></small></li>');
  }
  return statusHTML.join('');
}

function sm_format_twitter2(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'" target="_blank">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'" target="_blank">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<div class="slide"><span>'+status+'</span><small><a href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'" target="_blank">'+relative_time(twitters[i].created_at)+'</a></small></div>');
  }
  return statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'less than a minute ago';
  } else if(delta < 120) {
    return 'about a minute ago';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
    return 'about an hour ago';
  } else if(delta < (24*60*60)) {
    return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}




/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function($){$.fn.jflickrfeed=function(settings,callback){settings=$.extend(true,{flickrbase:'http://api.flickr.com/services/feeds/',feedapi:'photos_public.gne',limit:20,qstrings:{lang:'en-us',format:'json',jsoncallback:'?'},cleanDescription:true,useTemplate:true,itemTemplate:'',itemCallback:function(){}},settings);var url=settings.flickrbase+settings.feedapi+'?';var first=true;for(var key in settings.qstrings){if(!first)
url+='&';url+=key+'='+settings.qstrings[key];first=false;}
return $(this).each(function(){var $container=$(this);var container=this;$.getJSON(url,function(data){$.each(data.items,function(i,item){if(i<settings.limit){if(settings.cleanDescription){var regex=/<p>(.*?)<\/p>/g;var input=item.description;if(regex.test(input)){item.description=input.match(regex)[2]
if(item.description!=undefined)
item.description=item.description.replace('<p>','').replace('</p>','');}}
item['image_s']=item.media.m.replace('_m','_s');item['image_t']=item.media.m.replace('_m','_t');item['image_m']=item.media.m.replace('_m','_m');item['image']=item.media.m.replace('_m','');item['image_b']=item.media.m.replace('_m','_b');delete item.media;if(settings.useTemplate){var template=settings.itemTemplate;for(var key in item){var rgx=new RegExp('{{'+key+'}}','g');template=template.replace(rgx,item[key]);}
$container.append(template)}
settings.itemCallback.call(container,item);}});if($.isFunction(callback)){callback.call(container,data);}});});}})(jQuery);




/*!
 * jQuery - Spectragram by Adrian Quevedo
 * http://adrianquevedo.com/  - http://lab.adrianquevedo.com/ - http://elnucleo.com.co/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * You are free to use this plugin in commercial projects as long as the copyright header is left intact.
 *
 * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc. 
 * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc.
 *
 * Date: Thu Jul 15 14:05:02 2012 -0500
 */
 
if(typeof Object.create!=='function'){Object.create=function(obj){function F(){};F.prototype=obj;return new F()}}(function($,window,document,undefined){var Instagram={init:function(options,elem){var self=this;self.elem=elem;self.$elem=$(elem);self.api='https://api.instagram.com/v1',self.accessData=$.fn.spectragram.accessData,self.options=$.extend({},$.fn.spectragram.options,options)},getRecentMedia:function(userID){var self=this,getData='/users/'+userID+'/media/recent/?'+self.accessData.clientID+'&access_token='+self.accessData.accessToken+'';self.fetch(getData).done(function(results){self.display(results)})},getUserFeed:function(){var self=this,getData='/users/search?q='+self.options.query+'&count='+self.options.max+'&client_id='+self.accessData.clientID+'';self.fetch(getData).done(function(results){if(results.data.length){self.getRecentMedia(results.data[0].id)}else{$.error('Spectagram.js - Error: the username '+self.options.query+' does not exist.')}})},getPopular:function(){var self=this,getData='/media/popular?client_id='+self.accessData.clientID+'&access_token='+self.accessData.accessToken+'';self.fetch(getData).done(function(results){self.display(results)})},getRecentTagged:function(){var self=this,getData='/tags/'+self.options.query+'/media/recent?client_id='+self.accessData.clientID+'&access_token='+self.accessData.accessToken+'';self.fetch(getData).done(function(results){if(results.data.length){self.display(results)}else{$.error('Spectagram.js - Error: the tag '+self.options.query+' does not have results.')}})},fetch:function(getData){var self=this,getUrl=self.api+getData;return $.ajax({type:"GET",dataType:"jsonp",cache:false,url:getUrl})},display:function(results){var self=this,setSize=self.options.size,size,max=(self.options.max>=results.data.length)?results.data.length:self.options.max;if(results.data.length===0){self.$elem.append($(self.options.wrapEachWith).append(self.options.notFoundMsg))}else{for(var i=0;i<max;i++){if(setSize=="small"){size=results.data[i].images.thumbnail.url}else if(setSize=="medium"){size=results.data[i].images.low_resolution.url}else{size=results.data[i].images.standard_resolution.url}self.$elem.append($(self.options.wrapEachWith).append("<a target='_blank' href='"+results.data[i].link+"'><img src='"+size+"'></img></a>"))}}}};jQuery.fn.spectragram=function(method,options){if(jQuery.fn.spectragram.accessData.clientID){this.each(function(){var instagram=Object.create(Instagram);instagram.init(options,this);if(instagram[method]){return instagram[method](this)}else{$.error('Method '+method+' does not exist on jQuery.spectragram')}})}else{$.error('You must define an accessToken and a clientID on jQuery.spectragram')}};jQuery.fn.spectragram.options={max:10,query:'coffee',size:'medium',wrapEachWith:'<li></li>'};jQuery.fn.spectragram.accessData={accessToken:null,clientID:null}})(jQuery,window,document);




/**
 * jQuery Plugin - Jribbble v@VERSION
 * A jQuery plugin to fetch shot and player data from the Dribbble API, 
 * http://dribbble.com/api
 * 
 * Copyright (c) 2011 Tyler Gaw
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 *
 * Date: @DATE
 *
 */

(function ($) {
	'use strict';

	// @return OBJ
	$.fn.jribbble = function () {

		// Make a request to the API
		// @param STRING url
		// @param FUNCTION callback
		// @param OBJ OPTIONAL options
		this.makeRequest = function (url, callback, options) {
			var successHandler = function (data) {
				if ($.isFunction(callback)) {
					callback(data);
				}
			},

				// Catch any double '/' that may be caused by our pathname storage
				cleanURL = url.replace('//', '/');

			$.ajax({
				data: options,
				dataType: 'jsonp',
				success: successHandler,
				type: 'GET',
				url: $.jribbble.baseUrl + cleanURL
			});
		};

        // Returning "this", allows this plugin to be chainable
		return this;
    };

	// Create a public object for jribbble
	$.jribbble = {};

	// Public Static Members
	// Can be set globally for all jquery.jribbble requests

	// @member STRING baseUrl - Will be prepended to all API requests
	$.jribbble.baseUrl = 'http://api.dribbble.com';

	// @member OBJ paths - Pathnames to resourses
	$.jribbble.paths = {
		shots:     '/shots/',
		rebounds:  '/rebounds/',
		following: '/following/',
		players:   '/players/',
		followers: '/followers/',
		draftees:  '/draftees/',
		comments:  '/comments/',
		likes:     '/likes/'
	};

	// Public Static Methods
	// These are available at any time, you do not have to
	// instantiate the jribbble plugin on an element to use

	// Retrieve the shot specified by shotId
	// @param INT shotId - The id of the shot you want.
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback
	$.jribbble.getShotById = function (shotId, callback) {
		var resource = $.jribbble.paths.shots + shotId;
		$.fn.jribbble().makeRequest(resource, callback);
	};

	// Retrieve the rebounds of a shot specified by shotId
	// @param INT shotId - The id of the shot you want rebounds for.
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 } 
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getReboundsOfShot = function (shotId, callback, pagingOpts) {
		var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.rebounds;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// @param STRING listName - One of the following: 'debuts', 'everyone', 'popular'
	// @param FUNCTION callback  - Function that will be called once the
	//                             request has successfully completed. The data
	//                             from the request will be passed to the callback
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 } 
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsByList = function (listName, callback, pagingOpts) {
		var resource = $.jribbble.paths.shots + listName;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the most recent shots for the player specified by playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 } 
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsByPlayerId = function (playerId, callback, pagingOpts) {	
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the most recent shots published by those the player, specified by playerId, follows
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 } 
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsThatPlayerFollows = function (playerId, callback, pagingOpts) {		
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.following;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve profile details for the player specified by playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerById = function (playerId, callback) {
		var resource = $.jribbble.paths.players + playerId;
		$.fn.jribbble().makeRequest(resource, callback);
	};

	// Retrieve followers of a player by the playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerFollowers = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.followers;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the list of players that are following playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerFollowing = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.following;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the list of players drafted by the playerId
	// @param STRING | INT playerId - Can be 'username' or 2318
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	$.jribbble.getPlayerDraftees = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.draftees;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the set of comments for the shot specified by shotId
	// @param INT shotId - The id of the shot you want comments for.
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 } 
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getCommentsOfShot = function (shotId, callback, pagingOpts) {
		var resource = $.jribbble.paths.shots + shotId + $.jribbble.paths.comments;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

	// Retrieve the set of likes of the player specified by playerID
	// @param INT playerId - The id of the player whose likes you want
	// @param FUNCTION callback - Function that will be called once the
	//                            request has successfully completed. The data
	//                            from the request will be passed to the callback.
	// @param OBJ OPTIONAL pagingOpts - { page: 1, per_page: 15 } 
	//                                  @see http://dribbble.com/api#pagination
	$.jribbble.getShotsThatPlayerLikes = function (playerId, callback, pagingOpts) {
		var resource = $.jribbble.paths.players + playerId + $.jribbble.paths.shots + $.jribbble.paths.likes;
		$.fn.jribbble().makeRequest(resource, callback, pagingOpts);
	};

}(jQuery));




/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.5 BETA
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);




/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);




/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,r){var h,n=Array.prototype.slice,t=decodeURIComponent,a=$.param,j,c,m,y,b=$.bbq=$.bbq||{},s,x,k,e=$.event.special,d="hashchange",B="querystring",F="fragment",z="elemUrlAttr",l="href",w="src",p=/^.*\?|#.*$/g,u,H,g,i,C,E={};function G(I){return typeof I==="string"}function D(J){var I=n.call(arguments,1);return function(){return J.apply(this,I.concat(n.call(arguments)))}}function o(I){return I.replace(H,"$2")}function q(I){return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(K,P,I,L,J){var R,O,N,Q,M;if(L!==h){N=I.match(K?H:/^([^#?]*)\??([^#]*)(#?.*)/);M=N[3]||"";if(J===2&&G(L)){O=L.replace(K?u:p,"")}else{Q=m(N[2]);L=G(L)?m[K?F:B](L):L;O=J===2?L:J===1?$.extend({},L,Q):$.extend({},Q,L);O=j(O);if(K){O=O.replace(g,t)}}R=N[1]+(K?C:O||!N[1]?"?":"")+O+M}else{R=P(I!==h?I:location.href)}return R}a[B]=D(f,0,q);a[F]=c=D(f,1,o);a.sorted=j=function(J,K){var I=[],L={};$.each(a(J,K).split("&"),function(P,M){var O=M.replace(/(?:%5B|=).*$/,""),N=L[O];if(!N){N=L[O]=[];I.push(O)}N.push(M)});return $.map(I.sort(),function(M){return L[M]}).join("&")};c.noEscape=function(J){J=J||"";var I=$.map(J.split(""),encodeURIComponent);g=new RegExp(I.join("|"),"g")};c.noEscape(",/");c.ajaxCrawlable=function(I){if(I!==h){if(I){u=/^.*(?:#!|#)/;H=/^([^#]*)(?:#!|#)?(.*)$/;C="#!"}else{u=/^.*#/;H=/^([^#]*)#?(.*)$/;C="#"}i=!!I}return i};c.ajaxCrawlable(0);$.deparam=m=function(L,I){var K={},J={"true":!0,"false":!1,"null":null};$.each(L.replace(/\+/g," ").split("&"),function(O,T){var N=T.split("="),S=t(N[0]),M,R=K,P=0,U=S.split("]["),Q=U.length-1;if(/\[/.test(U[0])&&/\]$/.test(U[Q])){U[Q]=U[Q].replace(/\]$/,"");U=U.shift().split("[").concat(U);Q=U.length-1}else{Q=0}if(N.length===2){M=t(N[1]);if(I){M=M&&!isNaN(M)?+M:M==="undefined"?h:J[M]!==h?J[M]:M}if(Q){for(;P<=Q;P++){S=U[P]===""?R.length:U[P];R=R[S]=P<Q?R[S]||(U[P+1]&&isNaN(U[P+1])?{}:[]):M}}else{if($.isArray(K[S])){K[S].push(M)}else{if(K[S]!==h){K[S]=[K[S],M]}else{K[S]=M}}}}else{if(S){K[S]=I?h:""}}});return K};function A(K,I,J){if(I===h||typeof I==="boolean"){J=I;I=a[K?F:B]()}else{I=G(I)?I.replace(K?u:p,""):I}return m(I,J)}m[B]=D(A,0);m[F]=y=D(A,1);$[z]||($[z]=function(I){return $.extend(E,I)})({a:l,base:l,iframe:w,img:w,input:w,form:"action",link:l,script:w});k=$[z];function v(L,J,K,I){if(!G(K)&&typeof K!=="object"){I=K;K=J;J=h}return this.each(function(){var O=$(this),M=J||k()[(this.nodeName||"").toLowerCase()]||"",N=M&&O.attr(M)||"";O.attr(M,a[L](N,K,I))})}$.fn[B]=D(v,B);$.fn[F]=D(v,F);b.pushState=s=function(L,I){if(G(L)&&/^#/.test(L)&&I===h){I=2}var K=L!==h,J=c(location.href,K?L:{},K?I:2);location.href=J};b.getState=x=function(I,J){return I===h||typeof I==="boolean"?y(I):y(J)[I]};b.removeState=function(I){var J={};if(I!==h){J=x();$.each($.isArray(I)?I:arguments,function(L,K){delete J[K]})}s(J,2)};e[d]=$.extend(e[d],{add:function(I){var K;function J(M){var L=M[F]=c();M.getState=function(N,O){return N===h||typeof N==="boolean"?m(L,N):m(L,O)[N]};K.apply(this,arguments)}if($.isFunction(I)){K=I;return J}else{K=I.handler;I.handler=J}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function p(){var n=f(),i=h(u);if(n!==u){c(u=n,i);e(t).trigger(r)}else if(i!==u){location.href=location.href.replace(/#.*/,"")+i}o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;s.start=function(){o||p()};s.stop=function(){o&&clearTimeout(o);o=n};navigator.appName==="Microsoft Internet Explorer"&&!a&&function(){var t,n;s.start=function(){if(!t){n=e.fn[r].src;n=n&&n+f();t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f());p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow;i.onpropertychange=function(){try{if(event.propertyName==="title"){t.document.title=i.title}}catch(e){}}}};s.stop=l;h=function(){return f(t.location.href)};c=function(n,s){var o=t.document,u=e.fn[r].domain;if(n!==s){o.title=i.title;o.open();u&&o.write('<script>document.domain="'+u+'"</script>');o.close();t.location.hash=n}}}();return s}()})(jQuery,this);




/*
* jQuery Form Plugin; v20130711
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=n,l&&l.call(this,e,t)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(D),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",d),u||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(k)},m.timeout));var o=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(e.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(w)[0]));m.iframeTarget||(v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1)),setTimeout(t,15);try{w.submit()}catch(c){var p=document.createElement("form").submit;p.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=D),t===k&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==D&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var l=(m.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(c){var d=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];d?x.responseText=d.textContent?d.textContent:d.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==l&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{L=_(x,l,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,L,"success",x),S.resolve(x.responseText,"success",x),p&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),p&&e.event.trigger("ajaxError",[x,m,r])),p&&e.event.trigger("ajaxComplete",[x,m]),p&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget||v.remove(),x.responseXML=null},100)}}}var l,c,m,p,d,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(r)for(c=0;h.length>c;c++)l=e(h[c]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,d="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?d=y:v.attr2("name",d)):(v=e('<iframe name="'+d+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),p&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},p=m.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var k=1,D=2,A=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&A&&(m.extraData=m.extraData||{},m.extraData[E]=A),m.forceSync?o():setTimeout(o,10);var L,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var d,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,d=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,p);d&&(g=g?g+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e('input[type=file]:enabled[value!=""]',this),w=j.length>0,S="multipart/form-data",k=f.attr("enctype")==S||f.attr("encoding")==S,D=n.fileapi&&n.formdata;a("fileAPI :"+D);var A,E=(w||k)&&!D;t.iframe!==!1&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||k)&&D?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var L=0;h.length>L;L++)h[L]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,l,c,f,m,p;for(s=0,m=o.length;m>s;s++)if(f=o[s],l=f.name,l&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:l,value:e(f).val(),type:f.type}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}));else if(c=e.fieldValue(f,!0),c&&c.constructor==Array)for(r&&r.push(f),u=0,p=c.length;p>u;u++)a.push({name:l,value:c[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var d=f.files;if(d.length)for(u=0;d.length>u;u++)a.push({name:l,value:d[u],type:f.type});else a.push({name:l,value:"",type:f.type})}else null!==c&&c!==void 0&&(r&&r.push(f),a.push({name:l,value:c,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];l=v.name,l&&!v.disabled&&"image"==v.type&&(a.push({name:l,value:h.val()}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var p=m.value;if(p||(p=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1})(jQuery);




/*! Magnific Popup - v0.9.5 - 2013-08-21
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t="Close",n="BeforeClose",r="AfterClose",i="BeforeAppend",s="MarkupParse",o="Open",u="Change",a="mfp",f="."+a,l="mfp-ready",c="mfp-removing",h="mfp-prevent-close";var p,d=function(){},v=!!window.jQuery,m,g=e(window),y,b,w,E,S;var x=function(e,t){p.ev.on(a+e+f,t)},T=function(t,n,r,i){var s=document.createElement("div");s.className="mfp-"+t;if(r){s.innerHTML=r}if(!i){s=e(s);if(n){s.appendTo(n)}}else if(n){n.appendChild(s)}return s},N=function(t,n){p.ev.triggerHandler(a+t,n);if(p.st.callbacks){t=t.charAt(0).toLowerCase()+t.slice(1);if(p.st.callbacks[t]){p.st.callbacks[t].apply(p,e.isArray(n)?n:[n])}}},C=function(){(p.st.focus?p.content.find(p.st.focus).eq(0):p.wrap).focus()},k=function(t){if(t!==S||!p.currTemplate.closeBtn){p.currTemplate.closeBtn=e(p.st.closeMarkup.replace("%title%",p.st.tClose));S=t}return p.currTemplate.closeBtn},L=function(){if(!e.magnificPopup.instance){p=new d;p.init();e.magnificPopup.instance=p}},A=function(t){if(e(t).hasClass(h)){return}var n=p.st.closeOnContentClick;var r=p.st.closeOnBgClick;if(n&&r){return true}else{if(!p.content||e(t).hasClass("mfp-close")||p.preloader&&t===p.preloader[0]){return true}if(t!==p.content[0]&&!e.contains(p.content[0],t)){if(r){if(e.contains(document,t)){return true}}}else if(n){return true}}return false},O=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e["transition"]!==undefined){return true}while(t.length){if(t.pop()+"Transition"in e){return true}}return false};d.prototype={constructor:d,init:function(){var t=navigator.appVersion;p.isIE7=t.indexOf("MSIE 7.")!==-1;p.isIE8=t.indexOf("MSIE 8.")!==-1;p.isLowIE=p.isIE7||p.isIE8;p.isAndroid=/android/gi.test(t);p.isIOS=/iphone|ipad|ipod/gi.test(t);p.supportsTransition=O();p.probablyMobile=p.isAndroid||p.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);y=e(document.body);b=e(document);p.popupsCache={}},open:function(t){var n;if(t.isObj===false){p.items=t.items.toArray();p.index=0;var r=t.items,i;for(n=0;n<r.length;n++){i=r[n];if(i.parsed){i=i.el[0]}if(i===t.el[0]){p.index=n;break}}}else{p.items=e.isArray(t.items)?t.items:[t.items];p.index=t.index||0}if(p.isOpen){p.updateItemHTML();return}p.types=[];E="";if(t.mainEl&&t.mainEl.length){p.ev=t.mainEl.eq(0)}else{p.ev=b}if(t.key){if(!p.popupsCache[t.key]){p.popupsCache[t.key]={}}p.currTemplate=p.popupsCache[t.key]}else{p.currTemplate={}}p.st=e.extend(true,{},e.magnificPopup.defaults,t);p.fixedContentPos=p.st.fixedContentPos==="auto"?!p.probablyMobile:p.st.fixedContentPos;if(p.st.modal){p.st.closeOnContentClick=false;p.st.closeOnBgClick=false;p.st.showCloseBtn=false;p.st.enableEscapeKey=false}if(!p.bgOverlay){p.bgOverlay=T("bg").on("click"+f,function(){p.close()});p.wrap=T("wrap").attr("tabindex",-1).on("click"+f,function(e){if(A(e.target)){p.close()}});p.container=T("container",p.wrap)}p.contentContainer=T("content");if(p.st.preloader){p.preloader=T("preloader",p.container,p.st.tLoading)}var u=e.magnificPopup.modules;for(n=0;n<u.length;n++){var a=u[n];a=a.charAt(0).toUpperCase()+a.slice(1);p["init"+a].call(p)}N("BeforeOpen");if(p.st.showCloseBtn){if(!p.st.closeBtnInside){p.wrap.append(k())}else{x(s,function(e,t,n,r){n.close_replaceWith=k(r.type)});E+=" mfp-close-btn-in"}}if(p.st.alignTop){E+=" mfp-align-top"}if(p.fixedContentPos){p.wrap.css({overflow:p.st.overflowY,overflowX:"hidden",overflowY:p.st.overflowY})}else{p.wrap.css({top:g.scrollTop(),position:"absolute"})}if(p.st.fixedBgPos===false||p.st.fixedBgPos==="auto"&&!p.fixedContentPos){p.bgOverlay.css({height:b.height(),position:"absolute"})}if(p.st.enableEscapeKey){b.on("keyup"+f,function(e){if(e.keyCode===27){p.close()}})}g.on("resize"+f,function(){p.updateSize()});if(!p.st.closeOnContentClick){E+=" mfp-auto-cursor"}if(E)p.wrap.addClass(E);var c=p.wH=g.height();var h={};var d=p.st.mainClass;if(p.isIE7){d+=" mfp-ie7"}if(d){p._addClassToMFP(d)}p.updateItemHTML();N("BuildControls");e("html").css(h);p.bgOverlay.add(p.wrap).prependTo(document.body);p._lastFocusedEl=document.activeElement;setTimeout(function(){if(p.content){p._addClassToMFP(l);C()}else{p.bgOverlay.addClass(l)}b.on("focusin"+f,function(t){if(t.target!==p.wrap[0]&&!e.contains(p.wrap[0],t.target)){C();return false}})},16);p.isOpen=true;p.updateSize(c);N(o)},close:function(){if(!p.isOpen)return;N(n);p.isOpen=false;if(p.st.removalDelay&&!p.isLowIE&&p.supportsTransition){p._addClassToMFP(c);setTimeout(function(){p._close()},p.st.removalDelay)}else{p._close()}},_close:function(){N(t);var n=c+" "+l+" ";p.bgOverlay.detach();p.wrap.detach();p.container.empty();if(p.st.mainClass){n+=p.st.mainClass+" "}p._removeClassFromMFP(n);b.off("keyup"+f+" focusin"+f);p.ev.off(f);p.wrap.attr("class","mfp-wrap").removeAttr("style");p.bgOverlay.attr("class","mfp-bg");p.container.attr("class","mfp-container");if(p.st.showCloseBtn&&(!p.st.closeBtnInside||p.currTemplate[p.currItem.type]===true)){if(p.currTemplate.closeBtn)p.currTemplate.closeBtn.detach()}if(p._lastFocusedEl){e(p._lastFocusedEl).focus()}p.currItem=null;p.content=null;p.currTemplate=null;p.prevHeight=0;N(r)},updateSize:function(e){if(p.isIOS){var t=document.documentElement.clientWidth/window.innerWidth;var n=window.innerHeight*t;p.wrap.css("height",n);p.wH=n}else{p.wH=e||g.height()}if(!p.fixedContentPos){p.wrap.css("height",p.wH)}N("Resize")},updateItemHTML:function(){var t=p.items[p.index];p.contentContainer.detach();if(p.content)p.content.detach();if(!t.parsed){t=p.parseEl(p.index)}var n=t.type;N("BeforeChange",[p.currItem?p.currItem.type:"",n]);p.currItem=t;if(!p.currTemplate[n]){var r=p.st[n]?p.st[n].markup:false;N("FirstMarkupParse",r);if(r){p.currTemplate[n]=e(r)}else{p.currTemplate[n]=true}}if(w&&w!==t.type){p.container.removeClass("mfp-"+w+"-holder")}var i=p["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,p.currTemplate[n]);p.appendContent(i,n);t.preloaded=true;N(u,t);w=t.type;p.container.prepend(p.contentContainer);N("AfterChange")},appendContent:function(e,t){p.content=e;if(e){if(p.st.showCloseBtn&&p.st.closeBtnInside&&p.currTemplate[t]===true){if(!p.content.find(".mfp-close").length){p.content.append(k())}}else{p.content=e}}else{p.content=""}N(i);p.container.addClass("mfp-"+t+"-holder");p.contentContainer.append(p.content)},parseEl:function(t){var n=p.items[t],r=n.type;if(n.tagName){n={el:e(n)}}else{n={data:n,src:n.src}}if(n.el){var i=p.types;for(var s=0;s<i.length;s++){if(n.el.hasClass("mfp-"+i[s])){r=i[s];break}}n.src=n.el.attr("data-mfp-src");if(!n.src){n.src=n.el.attr("href")}}n.type=r||p.st.type||"inline";n.index=t;n.parsed=true;p.items[t]=n;N("ElementParse",n);return p.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this;p._openClick(n,e,t)};if(!t){t={}}var r="click.magnificPopup";t.mainEl=e;if(t.items){t.isObj=true;e.off(r).on(r,n)}else{t.isObj=false;if(t.delegate){e.off(r).on(r,t.delegate,n)}else{t.items=e;e.off(r).on(r,n)}}},_openClick:function(t,n,r){var i=r.midClick!==undefined?r.midClick:e.magnificPopup.defaults.midClick;if(!i&&(t.which===2||t.ctrlKey||t.metaKey)){return}var s=r.disableOn!==undefined?r.disableOn:e.magnificPopup.defaults.disableOn;if(s){if(e.isFunction(s)){if(!s.call(p)){return true}}else{if(g.width()<s){return true}}}if(t.type){t.preventDefault();if(p.isOpen){t.stopPropagation()}}r.el=e(t.mfpEl);if(r.delegate){r.items=n.find(r.delegate)}p.open(r)},updateStatus:function(e,t){if(p.preloader){if(m!==e){p.container.removeClass("mfp-s-"+m)}if(!t&&e==="loading"){t=p.st.tLoading}var n={status:e,text:t};N("UpdateStatus",n);e=n.status;t=n.text;p.preloader.html(t);p.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()});p.container.addClass("mfp-s-"+e);m=e}},_addClassToMFP:function(e){p.bgOverlay.addClass(e);p.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e);p.wrap.removeClass(e)},_hasScrollBar:function(e){return(p.isIE7?b.height():document.body.scrollHeight)>(e||g.height())},_parseMarkup:function(t,n,r){var i;if(r.data){n=e.extend(r.data,n)}N(s,[t,n,r]);e.each(n,function(e,n){if(n===undefined||n===false){return true}i=e.split("_");if(i.length>1){var r=t.find(f+"-"+i[0]);if(r.length>0){var s=i[1];if(s==="replaceWith"){if(r[0]!==n[0]){r.replaceWith(n)}}else if(s==="img"){if(r.is("img")){r.attr("src",n)}else{r.replaceWith('<img src="'+n+'" class="'+r.attr("class")+'" />')}}else{r.attr(i[1],n)}}}else{t.find(f+"-"+e).html(n)}})},_getScrollbarSize:function(){if(p.scrollbarSize===undefined){var e=document.createElement("div");e.id="mfp-sbm";e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";document.body.appendChild(e);p.scrollbarSize=e.offsetWidth-e.clientWidth;document.body.removeChild(e)}return p.scrollbarSize}};e.magnificPopup={instance:null,proto:d.prototype,modules:[],open:function(e,t){L();if(!e)e={};e.isObj=true;e.index=t||0;return this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,n){if(n.options){e.magnificPopup.defaults[t]=n.options}e.extend(this.proto,n.proto);this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:false,mainClass:"",preloader:true,focus:"",closeOnContentClick:false,closeOnBgClick:true,closeBtnInside:true,showCloseBtn:true,enableEscapeKey:true,modal:false,alignTop:false,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}};e.fn.magnificPopup=function(t){L();var n=e(this);if(typeof t==="string"){if(t==="open"){var r,i=v?n.data("magnificPopup"):n[0].magnificPopup,s=parseInt(arguments[1],10)||0;if(i.items){r=i.items[s]}else{r=n;if(i.delegate){r=r.find(i.delegate)}r=r.eq(s)}p._openClick({mfpEl:r},n,i)}else{if(p.isOpen)p[t].apply(p,Array.prototype.slice.call(arguments,1))}}else{if(v){n.data("magnificPopup",t)}else{n[0].magnificPopup=t}p.addGroup(n,t)}return n};var M="inline",_,D,P,H=function(){if(P){D.after(P.addClass(_)).detach();P=null}};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){p.types.push(M);x(t+"."+M,function(){H()})},getInline:function(t,n){H();if(t.src){var r=p.st.inline,i=e(t.src);if(i.length){var s=i[0].parentNode;if(s&&s.tagName){if(!D){_=r.hiddenClass;D=T(_);_="mfp-"+_}P=i.after(D).detach().removeClass(_)}p.updateStatus("ready")}else{p.updateStatus("error",r.tNotFound);i=e("<div>")}t.inlineElement=i;return i}p.updateStatus("ready");p._parseMarkup(n,{},t);return n}}});var B="ajax",j,F=function(){if(j){y.removeClass(j)}};e.magnificPopup.registerModule(B,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){p.types.push(B);j=p.st.ajax.cursor;x(t+"."+B,function(){F();if(p.req){p.req.abort()}})},getAjax:function(t){if(j)y.addClass(j);p.updateStatus("loading");var n=e.extend({url:t.src,success:function(n,r,i){var s={data:n,xhr:i};N("ParseAjax",s);p.appendContent(e(s.data),B);t.finished=true;F();C();setTimeout(function(){p.wrap.addClass(l)},16);p.updateStatus("ready");N("AjaxContentAdded")},error:function(){F();t.finished=t.loadError=true;p.updateStatus("error",p.st.ajax.tError.replace("%url%",t.src))}},p.st.ajax.settings);p.req=e.ajax(n);return""}}});var I,q=function(t){if(t.data&&t.data.title!==undefined)return t.data.title;var n=p.st.image.titleSrc;if(n){if(e.isFunction(n)){return n.call(p,t)}else if(t.el){return t.el.attr(n)||""}}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure">'+'<div class="mfp-close"></div>'+'<div class="mfp-img"></div>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-counter"></div>'+"</div>"+"</div>",cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:true,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=p.st.image,n=".image";p.types.push("image");x(o+n,function(){if(p.currItem.type==="image"&&e.cursor){y.addClass(e.cursor)}});x(t+n,function(){if(e.cursor){y.removeClass(e.cursor)}g.off("resize"+f)});x("Resize"+n,p.resizeImage);if(p.isLowIE){x("AfterChange",p.resizeImage)}},resizeImage:function(){var e=p.currItem;if(!e||!e.img)return;if(p.st.image.verticalFit){var t=0;if(p.isLowIE){t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)}e.img.css("max-height",p.wH-t)}},_onImageHasSize:function(e){if(e.img){e.hasSize=true;if(I){clearInterval(I)}e.isCheckingImgSize=false;N("ImageHasSize",e);if(e.imgHidden){if(p.content)p.content.removeClass("mfp-loading");e.imgHidden=false}}},findImageSize:function(e){var t=0,n=e.img[0],r=function(i){if(I){clearInterval(I)}I=setInterval(function(){if(n.naturalWidth>0){p._onImageHasSize(e);return}if(t>200){clearInterval(I)}t++;if(t===3){r(10)}else if(t===40){r(50)}else if(t===100){r(500)}},i)};r(1)},getImage:function(t,n){var r=0,i=function(){if(t){if(t.img[0].complete){t.img.off(".mfploader");if(t===p.currItem){p._onImageHasSize(t);p.updateStatus("ready")}t.hasSize=true;t.loaded=true;N("ImageLoadComplete")}else{r++;if(r<200){setTimeout(i,100)}else{s()}}}},s=function(){if(t){t.img.off(".mfploader");if(t===p.currItem){p._onImageHasSize(t);p.updateStatus("error",o.tError.replace("%url%",t.src))}t.hasSize=true;t.loaded=true;t.loadError=true}},o=p.st.image;var u=n.find(".mfp-img");if(u.length){var a=document.createElement("img");a.className="mfp-img";t.img=e(a).on("load.mfploader",i).on("error.mfploader",s);a.src=t.src;if(u.is("img")){t.img=t.img.clone()}if(t.img[0].naturalWidth>0){t.hasSize=true}}p._parseMarkup(n,{title:q(t),img_replaceWith:t.img},t);p.resizeImage();if(t.hasSize){if(I)clearInterval(I);if(t.loadError){n.addClass("mfp-loading");p.updateStatus("error",o.tError.replace("%url%",t.src))}else{n.removeClass("mfp-loading");p.updateStatus("ready")}return n}p.updateStatus("loading");t.loading=true;if(!t.hasSize){t.imgHidden=true;n.addClass("mfp-loading");p.findImageSize(t)}return n}}});var R,U=function(){if(R===undefined){R=document.createElement("p").style.MozTransform!==undefined}return R};e.magnificPopup.registerModule("zoom",{options:{enabled:false,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e=p.st.zoom,r=".zoom";if(!e.enabled||!p.supportsTransition){return}var i=e.duration,s=function(t){var n=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),r="all "+e.duration/1e3+"s "+e.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},s="transition";i["-webkit-"+s]=i["-moz-"+s]=i["-o-"+s]=i[s]=r;n.css(i);return n},o=function(){p.content.css("visibility","visible")},u,a;x("BuildControls"+r,function(){if(p._allowZoom()){clearTimeout(u);p.content.css("visibility","hidden");image=p._getItemToZoom();if(!image){o();return}a=s(image);a.css(p._getOffset());p.wrap.append(a);u=setTimeout(function(){a.css(p._getOffset(true));u=setTimeout(function(){o();setTimeout(function(){a.remove();image=a=null;N("ZoomAnimationEnded")},16)},i)},16)}});x(n+r,function(){if(p._allowZoom()){clearTimeout(u);p.st.removalDelay=i;if(!image){image=p._getItemToZoom();if(!image){return}a=s(image)}a.css(p._getOffset(true));p.wrap.append(a);p.content.css("visibility","hidden");setTimeout(function(){a.css(p._getOffset())},16)}});x(t+r,function(){if(p._allowZoom()){o();if(a){a.remove()}}})},_allowZoom:function(){return p.currItem.type==="image"},_getItemToZoom:function(){if(p.currItem.hasSize){return p.currItem.img}else{return false}},_getOffset:function(t){var n;if(t){n=p.currItem.img}else{n=p.st.zoom.opener(p.currItem.el||p.currItem)}var r=n.offset();var i=parseInt(n.css("padding-top"),10);var s=parseInt(n.css("padding-bottom"),10);r.top-=e(window).scrollTop()-i;var o={width:n.width(),height:(v?n.innerHeight():n[0].offsetHeight)-s-i};if(U()){o["-moz-transform"]=o["transform"]="translate("+r.left+"px,"+r.top+"px)"}else{o.left=r.left;o.top=r.top}return o}}});var z="iframe",W="//about:blank",X=function(e){if(p.currTemplate[z]){var t=p.currTemplate[z].find("iframe");if(t.length){if(!e){t[0].src=W}if(p.isIE8){t.css("display",e?"block":"none")}}}};e.magnificPopup.registerModule(z,{options:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+"</div>",srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){p.types.push(z);x("BeforeChange",function(e,t,n){if(t!==n){if(t===z){X()}else if(n===z){X(true)}}});x(t+"."+z,function(){X()})},getIframe:function(t,n){var r=t.src;var i=p.st.iframe;e.each(i.patterns,function(){if(r.indexOf(this.index)>-1){if(this.id){if(typeof this.id==="string"){r=r.substr(r.lastIndexOf(this.id)+this.id.length,r.length)}else{r=this.id.call(this,r)}}r=this.src.replace("%id%",r);return false}});var s={};if(i.srcAction){s[i.srcAction]=r}p._parseMarkup(n,s,t);p.updateStatus("ready");return n}}});var V=function(e){var t=p.items.length;if(e>t-1){return e-t}else if(e<0){return t+e}return e},$=function(e,t,n){return e.replace("%curr%",t+1).replace("%total%",n)};e.magnificPopup.registerModule("gallery",{options:{enabled:false,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:true,arrows:true,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=p.st.gallery,r=".mfp-gallery",i=Boolean(e.fn.mfpFastClick);p.direction=true;if(!n||!n.enabled)return false;E+=" mfp-gallery";x(o+r,function(){if(n.navigateByImgClick){p.wrap.on("click"+r,".mfp-img",function(){if(p.items.length>1){p.next();return false}})}b.on("keydown"+r,function(e){if(e.keyCode===37){p.prev()}else if(e.keyCode===39){p.next()}})});x("UpdateStatus"+r,function(e,t){if(t.text){t.text=$(t.text,p.currItem.index,p.items.length)}});x(s+r,function(e,t,r,i){var s=p.items.length;r.counter=s>1?$(n.tCounter,i.index,s):""});x("BuildControls"+r,function(){if(p.items.length>1&&n.arrows&&!p.arrowLeft){var t=n.arrowMarkup,r=p.arrowLeft=e(t.replace("%title%",n.tPrev).replace("%dir%","left")).addClass(h),s=p.arrowRight=e(t.replace("%title%",n.tNext).replace("%dir%","right")).addClass(h);var o=i?"mfpFastClick":"click";r[o](function(){p.prev()});s[o](function(){p.next()});if(p.isIE7){T("b",r[0],false,true);T("a",r[0],false,true);T("b",s[0],false,true);T("a",s[0],false,true)}p.container.append(r.add(s))}});x(u+r,function(){if(p._preloadTimeout)clearTimeout(p._preloadTimeout);p._preloadTimeout=setTimeout(function(){p.preloadNearbyImages();p._preloadTimeout=null},16)});x(t+r,function(){b.off(r);p.wrap.off("click"+r);if(p.arrowLeft&&i){p.arrowLeft.add(p.arrowRight).destroyMfpFastClick()}p.arrowRight=p.arrowLeft=null})},next:function(){p.direction=true;p.index=V(p.index+1);p.updateItemHTML()},prev:function(){p.direction=false;p.index=V(p.index-1);p.updateItemHTML()},goTo:function(e){p.direction=e>=p.index;p.index=e;p.updateItemHTML()},preloadNearbyImages:function(){var e=p.st.gallery.preload,t=Math.min(e[0],p.items.length),n=Math.min(e[1],p.items.length),r;for(r=1;r<=(p.direction?n:t);r++){p._preloadItem(p.index+r)}for(r=1;r<=(p.direction?t:n);r++){p._preloadItem(p.index-r)}},_preloadItem:function(t){t=V(t);if(p.items[t].preloaded){return}var n=p.items[t];if(!n.parsed){n=p.parseEl(t)}N("LazyLoad",n);if(n.type==="image"){n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=true}).on("error.mfploader",function(){n.hasSize=true;n.loadError=true;N("LazyLoadError",n)}).attr("src",n.src)}n.preloaded=true}}});var J="retina";e.magnificPopup.registerModule(J,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=p.st.retina,t=e.ratio;t=!isNaN(t)?t:t();if(t>1){x("ImageHasSize"+"."+J,function(e,n){n.img.css({"max-width":n.img[0].naturalWidth/t,width:"100%"})});x("ElementParse"+"."+J,function(n,r){r.src=e.replaceSrc(r,t)})}}}}});(function(){var t=1e3,n="ontouchstart"in window,r=function(){g.off("touchmove"+s+" touchend"+s)},i="mfpFastClick",s="."+i;e.fn.mfpFastClick=function(i){return e(this).each(function(){var o=e(this),u;if(n){var a,f,l,c,h,p;o.on("touchstart"+s,function(e){c=false;p=1;h=e.originalEvent?e.originalEvent.touches[0]:e.touches[0];f=h.clientX;l=h.clientY;g.on("touchmove"+s,function(e){h=e.originalEvent?e.originalEvent.touches:e.touches;p=h.length;h=h[0];if(Math.abs(h.clientX-f)>10||Math.abs(h.clientY-l)>10){c=true;r()}}).on("touchend"+s,function(e){r();if(c||p>1){return}u=true;e.preventDefault();clearTimeout(a);a=setTimeout(function(){u=false},t);i()})})}o.on("click"+s,function(){if(!u){i()}})})};e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+s+" click"+s);if(n)g.off("touchmove"+s+" touchend"+s)}})()})(window.jQuery||window.Zepto);




/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
 b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
 function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
 function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
 !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
 a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
 "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
 0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
 setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
 d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
 d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
 f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
 a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
 keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
 i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);
 
 
 

// jQuery Paginate v0.4
;(function($){$.fn.pajinate=function(options){var current_page="current_page";var items_per_page="items_per_page";var meta;var defaults={item_container_id:".content",items_per_page:10,nav_panel_id:".page_navigation",nav_info_id:".info_text",num_page_links_to_display:20,start_page:0,wrap_around:false,nav_label_first:"First",nav_label_prev:"Prev",nav_label_next:"Next",nav_label_last:"Last",nav_order:["first","prev","num","next","last"],nav_label_info:"Showing {0}-{1} of {2} results",show_first_last:true,abort_on_small_lists:false,jquery_ui:false,jquery_ui_active:"ui-state-highlight",jquery_ui_default:"ui-state-default",jquery_ui_disabled:"ui-state-disabled"};var options=$.extend(defaults,options);var $item_container;var $page_container;var $items;var $nav_panels;var total_page_no_links;var jquery_ui_default_class=options.jquery_ui?options.jquery_ui_default:"";var jquery_ui_active_class=options.jquery_ui?options.jquery_ui_active:"";var jquery_ui_disabled_class=options.jquery_ui?options.jquery_ui_disabled:"";return this.each(function(){$page_container=$(this);$item_container=$(this).find(options.item_container_id);$items=$page_container.find(options.item_container_id).children();if(options.abort_on_small_lists&&options.items_per_page>=$items.size()){return $page_container}meta=$page_container;meta.data(current_page,0);meta.data(items_per_page,options.items_per_page);var total_items=$item_container.children().size();var number_of_pages=Math.ceil(total_items/options.items_per_page);var more='<li class="disabled ellipse more"><span>...</span></li>';var less='<li class="disabled ellipse less"><span>...</span></li>';var first=!options.show_first_last?"":'<li class="first_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_first+"</a></li>";var last=!options.show_first_last?"":'<li class="last_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_last+"</a></li>";var navigation_html="";for(var i=0;i<options.nav_order.length;i++){switch(options.nav_order[i]){case"first":navigation_html+=first;break;case"last":navigation_html+=last;break;case"next":navigation_html+='<li class="next_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_next+"</a></li>";break;case"prev":navigation_html+='<li class="previous_link '+jquery_ui_default_class+'"><a href="#">'+options.nav_label_prev+"</a></li>";break;case"num":navigation_html+=less;var current_link=0;while(number_of_pages>current_link){navigation_html+='<li class="page_link '+jquery_ui_default_class+'" longdesc="'+current_link+'"><a href="#">'+(current_link+1)+"</a></li>";current_link++}navigation_html+=more;break;default:break}}$nav_panels=$page_container.find(options.nav_panel_id);$nav_panels.html(navigation_html).each(function(){$(this).find(".page_link:first").addClass("first");$(this).find(".page_link:last").addClass("last")});$nav_panels.children(".ellipse").hide();$nav_panels.find(".previous_link").next().next().addClass("active "+jquery_ui_active_class);$items.hide();$items.slice(0,meta.data(items_per_page)).show();total_page_no_links=$page_container.find(options.nav_panel_id+":first").children(".page_link").size();options.num_page_links_to_display=Math.min(options.num_page_links_to_display,total_page_no_links);$nav_panels.children(".page_link").hide();$nav_panels.each(function(){$(this).children(".page_link").slice(0,options.num_page_links_to_display).show()});$page_container.find(".first_link").click(function(e){e.preventDefault();movePageNumbersRight($(this),0);gotopage(0)});$page_container.find(".last_link").click(function(e){e.preventDefault();var lastPage=total_page_no_links-1;movePageNumbersLeft($(this),lastPage);gotopage(lastPage)});$page_container.find(".previous_link").click(function(e){e.preventDefault();showPrevPage($(this))});$page_container.find(".next_link").click(function(e){e.preventDefault();showNextPage($(this))});$page_container.find(".page_link").click(function(e){e.preventDefault();gotopage($(this).attr("longdesc"))});gotopage(parseInt(options.start_page));toggleMoreLess();if(!options.wrap_around){tagNextPrev()}});function showPrevPage(e){new_page=parseInt(meta.data(current_page))-1;if($(e).siblings(".active").prev(".page_link").length==true){movePageNumbersRight(e,new_page);gotopage(new_page)}else{if(options.wrap_around){gotopage(total_page_no_links-1)}}}function showNextPage(e){new_page=parseInt(meta.data(current_page))+1;if($(e).siblings(".active").next(".page_link").length==true){movePageNumbersLeft(e,new_page);gotopage(new_page)}else{if(options.wrap_around){gotopage(0)}}}function gotopage(page_num){page_num=parseInt(page_num,10);var ipp=parseInt(meta.data(items_per_page));start_from=page_num*ipp;end_on=start_from+ipp;var items=$items.hide().slice(start_from,end_on);items.fadeIn(700);$page_container.find(options.nav_panel_id).children(".page_link[longdesc="+page_num+"]").addClass("active "+jquery_ui_active_class).siblings(".active").removeClass("active "+jquery_ui_active_class);meta.data(current_page,page_num);var $current_page=parseInt(meta.data(current_page)+1);var total_items=$item_container.children().size();var $number_of_pages=Math.ceil(total_items/options.items_per_page);$page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}",start_from+1).replace("{1}",start_from+items.length).replace("{2}",$items.length).replace("{3}",$current_page).replace("{4}",$number_of_pages));toggleMoreLess();tagNextPrev();if(typeof(options.onPageDisplayed)!=="undefined"){options.onPageDisplayed.call(this,page_num+1)}}function movePageNumbersLeft(e,new_p){var new_page=new_p;var $current_active_link=$(e).siblings(".active");if($current_active_link.siblings(".page_link[longdesc="+new_page+"]").css("display")=="none"){$nav_panels.each(function(){$(this).children(".page_link").hide().slice(parseInt(new_page-options.num_page_links_to_display+1),new_page+1).show()})}}function movePageNumbersRight(e,new_p){var new_page=new_p;var $current_active_link=$(e).siblings(".active");if($current_active_link.siblings(".page_link[longdesc="+new_page+"]").css("display")=="none"){$nav_panels.each(function(){$(this).children(".page_link").hide().slice(new_page,new_page+parseInt(options.num_page_links_to_display)).show()})}}function toggleMoreLess(){}function tagNextPrev(){if($nav_panels.children(".last").hasClass("active")){$nav_panels.children(".next_link").add(".last_link").addClass("no_more "+jquery_ui_disabled_class)}else{$nav_panels.children(".next_link").add(".last_link").removeClass("no_more "+jquery_ui_disabled_class)}if($nav_panels.children(".first").hasClass("active")){$nav_panels.children(".previous_link").add(".first_link").addClass("no_more "+jquery_ui_disabled_class)}else{$nav_panels.children(".previous_link").add(".first_link").removeClass("no_more "+jquery_ui_disabled_class)}}}})(jQuery);
 
 
 
 
 /*
 *	jQuery carouFredSel 6.1.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(C($){8($.1r.1v){G}$.1r.6s=$.1r.1v=C(u,w){8(1k.R==0){17(I,\'6t 57 6u 1j "\'+1k.4p+\'".\');G 1k}8(1k.R>1){G 1k.1W(C(){$(1k).1v(u,w)})}E y=1k,$13=1k[0],59=K;8(y.1m(\'5a\')){59=y.1Q(\'3p\',\'4q\');y.S(\'3p\',[\'4r\',I])}y.5b=C(o,a,b){o=3T($13,o);o.D=6v($13,o.D);o.1M=6w($13,o.1M);o.M=6x($13,o.M);o.V=5c($13,o.V);o.Z=5c($13,o.Z);o.1a=6y($13,o.1a);o.1q=6z($13,o.1q);o.1h=6A($13,o.1h);8(a){34=$.1N(I,{},$.1r.1v.5d,o)}7=$.1N(I,{},$.1r.1v.5d,o);7.d=6B(7);z.2b=(7.2b==\'4s\'||7.2b==\'1n\')?\'Z\':\'V\';E c=y.14(),2n=5e($1s,7,\'N\');8(3q(7.23)){7.23=\'7T\'+F.3U}7.3V=5f(7,2n);7.D=6C(7.D,7,c,b);7[7.d[\'N\']]=6D(7[7.d[\'N\']],7,c);7[7.d[\'1d\']]=6E(7[7.d[\'1d\']],7,c);8(7.2o){8(!3W(7[7.d[\'N\']])){7[7.d[\'N\']]=\'2J%\'}}8(3W(7[7.d[\'N\']])){z.6F=I;z.4t=7[7.d[\'N\']];7[7.d[\'N\']]=4u(2n,z.4t);8(!7.D.L){7.D.T.1c=I}}8(7.2o){7.1R=K;7.1i=[0,0,0,0];7.1A=K;7.D.T.1c=K}O{8(!7.D.L){7=6G(7,2n)}8(!7[7.d[\'N\']]){8(!7.D.T.1c&&11(7.D[7.d[\'N\']])&&7.D.1t==\'*\'){7[7.d[\'N\']]=7.D.L*7.D[7.d[\'N\']];7.1A=K}O{7[7.d[\'N\']]=\'1c\'}}8(1E(7.1A)){7.1A=(11(7[7.d[\'N\']]))?\'5g\':K}8(7.D.T.1c){7.D.L=35(c,7,0)}}8(7.D.1t!=\'*\'&&!7.D.T.1c){7.D.T.4v=7.D.L;7.D.L=3X(c,7,0)}7.D.L=2z(7.D.L,7,7.D.T.2c,$13);7.D.T.1Z=7.D.L;8(7.2o){8(!7.D.T.36){7.D.T.36=7.D.L}8(!7.D.T.1X){7.D.T.1X=7.D.L}7=5h(7,c,2n)}O{7.1i=6H(7.1i);8(7.1A==\'3r\'){7.1A=\'1n\'}O 8(7.1A==\'5i\'){7.1A=\'3a\'}1B(7.1A){Q\'5g\':Q\'1n\':Q\'3a\':8(7[7.d[\'N\']]!=\'1c\'){7=5j(7,c);7.1R=I}16;2A:7.1A=K;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?K:I;16}}8(!11(7.1M.1F)){7.1M.1F=6I}8(1E(7.1M.D)){7.1M.D=(7.2o||7.D.T.1c||7.D.1t!=\'*\')?\'L\':7.D.L}7.M=$.1N(I,{},7.1M,7.M);7.V=$.1N(I,{},7.1M,7.V);7.Z=$.1N(I,{},7.1M,7.Z);7.1a=$.1N(I,{},7.1M,7.1a);7.M=6J($13,7.M);7.V=5k($13,7.V);7.Z=5k($13,7.Z);7.1a=6K($13,7.1a);7.1q=6L($13,7.1q);7.1h=6M($13,7.1h);8(7.2p){7.2p=5l(7.2p)}8(7.M.5m){7.M.4w=7.M.5m;2K(\'M.5m\',\'M.4w\')}8(7.M.5n){7.M.4x=7.M.5n;2K(\'M.5n\',\'M.4x\')}8(7.M.5o){7.M.4y=7.M.5o;2K(\'M.5o\',\'M.4y\')}8(7.M.5p){7.M.2L=7.M.5p;2K(\'M.5p\',\'M.2L\')}};y.6N=C(){y.1m(\'5a\',I);E a=y.14(),3Y=5q(y,[\'6O\',\'6P\',\'3s\',\'3r\',\'3a\',\'5i\',\'1n\',\'3Z\',\'N\',\'1d\',\'6Q\',\'1S\',\'5r\',\'6R\']),5s=\'7U\';1B(3Y.3s){Q\'6S\':Q\'7V\':5s=3Y.3s;16}$1s.X(3Y).X({\'7W\':\'3t\',\'3s\':5s});y.1m(\'5t\',3Y).X({\'6O\':\'1n\',\'6P\':\'41\',\'3s\':\'6S\',\'3r\':0,\'3a\':\'M\',\'5i\':\'M\',\'1n\':0,\'6Q\':0,\'1S\':0,\'5r\':0,\'6R\':0});4z(a,7);5u(a,7);8(7.2o){5v(7,a)}};y.6T=C(){y.5w();y.12(H(\'5x\',F),C(e,a){e.1f();8(!z.2d){8(7.M.W){7.M.W.3b(2B(\'4A\',F))}}z.2d=I;8(7.M.1G){7.M.1G=K;y.S(H(\'3c\',F),a)}G I});y.12(H(\'5y\',F),C(e){e.1f();8(z.25){42(U)}G I});y.12(H(\'3c\',F),C(e,a,b){e.1f();1u=3u(1u);8(a&&z.25){U.2d=I;E c=2q()-U.2M;U.1F-=c;8(U.3v){U.3v.1F-=c}8(U.3w){U.3w.1F-=c}42(U,K)}8(!z.26&&!z.25){8(b){1u.3x+=2q()-1u.2M}}8(!z.26){8(7.M.W){7.M.W.3b(2B(\'6U\',F))}}z.26=I;8(7.M.4x){E d=7.M.2L-1u.3x,3d=2J-1H.2C(d*2J/7.M.2L);7.M.4x.1g($13,3d,d)}G I});y.12(H(\'1G\',F),C(e,b,c,d){e.1f();1u=3u(1u);E v=[b,c,d],t=[\'2N\',\'27\',\'3e\'],a=3f(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'V\'&&b!=\'Z\'){b=z.2b}8(!11(c)){c=0}8(!1l(d)){d=K}8(d){z.2d=K;7.M.1G=I}8(!7.M.1G){e.2e();G 17(F,\'3y 4A: 2r 3g.\')}8(z.26){8(7.M.W){7.M.W.2O(2B(\'4A\',F));7.M.W.2O(2B(\'6U\',F))}}z.26=K;1u.2M=2q();E f=7.M.2L+c;43=f-1u.3x;3d=2J-1H.2C(43*2J/f);8(7.M.1e){1u.1e=7X(C(){E a=2q()-1u.2M+1u.3x,3d=1H.2C(a*2J/f);7.M.1e.4B.1g(7.M.1e.2s[0],3d)},7.M.1e.5z)}1u.M=7Y(C(){8(7.M.1e){7.M.1e.4B.1g(7.M.1e.2s[0],2J)}8(7.M.4y){7.M.4y.1g($13,3d,43)}8(z.25){y.S(H(\'1G\',F),b)}O{y.S(H(b,F),7.M)}},43);8(7.M.4w){7.M.4w.1g($13,3d,43)}G I});y.12(H(\'3h\',F),C(e){e.1f();8(U.2d){U.2d=K;z.26=K;z.25=I;U.2M=2q();2P(U)}O{y.S(H(\'1G\',F))}G I});y.12(H(\'V\',F)+\' \'+H(\'Z\',F),C(e,b,f,g,h){e.1f();8(z.2d||y.2f(\':3t\')){e.2e();G 17(F,\'3y 4A 7Z 3t: 2r 3g.\')}E i=(11(7.D.4C))?7.D.4C:7.D.L+1;8(i>J.P){e.2e();G 17(F,\'2r 6V D (\'+J.P+\' P, \'+i+\' 6W): 2r 3g.\')}E v=[b,f,g,h],t=[\'2g\',\'27/2N\',\'C\',\'3e\'],a=3f(v,t);b=a[0];f=a[1];g=a[2];h=a[3];E k=e.5A.18(F.3z.44.R);8(!1I(b)){b={}}8(1o(g)){b.3i=g}8(1l(h)){b.2Q=h}b=$.1N(I,{},7[k],b);8(b.5B&&!b.5B.1g($13,k)){e.2e();G 17(F,\'80 "5B" 81 K.\')}8(!11(f)){8(7.D.1t!=\'*\'){f=\'L\'}O{E m=[f,b.D,7[k].D];1j(E a=0,l=m.R;a<l;a++){8(11(m[a])||m[a]==\'6X\'||m[a]==\'L\'){f=m[a];16}}}1B(f){Q\'6X\':e.2e();G y.1Q(H(k+\'82\',F),[b,g]);16;Q\'L\':8(!7.D.T.1c&&7.D.1t==\'*\'){f=7.D.L}16}}8(U.2d){y.S(H(\'3h\',F));y.S(H(\'2Q\',F),[k,[b,f,g]]);e.2e();G 17(F,\'3y 83 3g.\')}8(b.1F>0){8(z.25){8(b.2Q){8(b.2Q==\'2R\'){2h=[]}8(b.2Q!=\'Y\'||2h.R==0){y.S(H(\'2Q\',F),[k,[b,f,g]])}}e.2e();G 17(F,\'3y 84 3g.\')}}1u.3x=0;y.S(H(\'6Y\'+k,F),[b,f]);8(7.2p){E s=7.2p,c=[b,f];1j(E j=0,l=s.R;j<l;j++){E d=k;8(!s[j][2]){d=(d==\'V\')?\'Z\':\'V\'}8(!s[j][1]){c[0]=s[j][0].1Q(\'3p\',[\'4D\',d])}c[1]=f+s[j][3];s[j][0].S(\'3p\',[\'6Y\'+d,c])}}G I});y.12(H(\'85\',F),C(e,b,c){e.1f();E d=y.14();8(!7.1T){8(J.Y==0){8(7.3A){y.S(H(\'Z\',F),J.P-1)}G e.2e()}}1U(d,7);8(!11(c)){8(7.D.T.1c){c=4E(d,7,J.P-1)}O 8(7.D.1t!=\'*\'){E f=(11(b.D))?b.D:5C(y,7);c=6Z(d,7,J.P-1,f)}O{c=7.D.L}c=4F(c,7,b.D,$13)}8(!7.1T){8(J.P-c<J.Y){c=J.P-J.Y}}7.D.T.1Z=7.D.L;8(7.D.T.1c){E g=2z(35(d,7,J.P-c),7,7.D.T.2c,$13);8(7.D.L+c<=g&&c<J.P){c++;g=2z(35(d,7,J.P-c),7,7.D.T.2c,$13)}7.D.L=g}O 8(7.D.1t!=\'*\'){E g=3X(d,7,J.P-c);7.D.L=2z(g,7,7.D.T.2c,$13)}1U(d,7,I);8(c==0){e.2e();G 17(F,\'0 D 45 1M: 2r 3g.\')}17(F,\'70 \'+c+\' D 5D.\');J.Y+=c;2i(J.Y>=J.P){J.Y-=J.P}8(!7.1T){8(J.Y==0&&b.4G){b.4G.1g($13,\'V\')}8(!7.3A){3B(7,J.Y,F)}}y.14().18(J.P-c,J.P).86(y);8(J.P<7.D.L+c){y.14().18(0,(7.D.L+c)-J.P).4H(I).46(y)}E d=y.14(),3j=71(d,7,c),2j=72(d,7),1Y=d.1O(c-1),20=3j.2R(),2t=2j.2R();1U(d,7);E h=0,2D=0;8(7.1A){E p=4I(2j,7);h=p[0];2D=p[1]}E i=(h<0)?7.1i[7.d[3]]:0;E j=K,2S=$();8(7.D.L<c){2S=d.18(7.D.T.1Z,c);8(b.1V==\'73\'){E k=7.D[7.d[\'N\']];j=2S;1Y=2t;5E(j);7.D[7.d[\'N\']]=\'1c\'}}E l=K,3C=2T(d.18(0,c),7,\'N\'),2k=4J(4K(2j,7,I),7,!7.1R),3D=0,28={},4L={},2u={},2U={},4M={},2V={},5F={},2W=5G(b,7,c,3C);1B(b.1V){Q\'1J\':Q\'1J-1w\':3D=2T(d.18(0,7.D.L),7,\'N\');16}8(j){7.D[7.d[\'N\']]=k}1U(d,7,I);8(2D>=0){1U(20,7,7.1i[7.d[1]])}8(h>=0){1U(1Y,7,7.1i[7.d[3]])}8(7.1A){7.1i[7.d[1]]=2D;7.1i[7.d[3]]=h}2V[7.d[\'1n\']]=-(3C-i);5F[7.d[\'1n\']]=-(3D-i);4L[7.d[\'1n\']]=2k[7.d[\'N\']];E m=C(){},1P=C(){},1C=C(){},3E=C(){},2E=C(){},5H=C(){},1D=C(){},3F=C(){},1x=C(){},1y=C(){},1K=C(){};1B(b.1V){Q\'3k\':Q\'1J\':Q\'1J-1w\':Q\'21\':Q\'21-1w\':l=y.4H(I).46($1s);16}1B(b.1V){Q\'3k\':Q\'21\':Q\'21-1w\':l.14().18(0,c).2v();l.14().18(7.D.T.1Z).2v();16;Q\'1J\':Q\'1J-1w\':l.14().18(7.D.L).2v();l.X(5F);16}y.X(2V);U=47(2W,b.2l);28[7.d[\'1n\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){m=C(){$1s.X(2k)};1P=C(){U.19.1b([$1s,2k])}}8(7.1R){8(2t.4N(1Y).R){2u[7.d[\'1S\']]=1Y.1m(\'29\');8(h<0){1Y.X(2u)}O{1D=C(){1Y.X(2u)};3F=C(){U.19.1b([1Y,2u])}}}1B(b.1V){Q\'1J\':Q\'1J-1w\':l.14().1O(c-1).X(2u);16}8(2t.4N(20).R){2U[7.d[\'1S\']]=20.1m(\'29\');1C=C(){20.X(2U)};3E=C(){U.19.1b([20,2U])}}8(2D>=0){4M[7.d[\'1S\']]=2t.1m(\'29\')+7.1i[7.d[1]];2E=C(){2t.X(4M)};5H=C(){U.19.1b([2t,4M])}}}1K=C(){y.X(28)};E n=7.D.L+c-J.P;1y=C(){8(n>0){y.14().18(J.P).2v();3j=$(y.14().18(J.P-(7.D.L-n)).3G().74(y.14().18(0,n).3G()))}5I(j);8(7.1R){E a=y.14().1O(7.D.L+c-1);a.X(7.d[\'1S\'],a.1m(\'29\'))}};E o=5J(3j,2S,2j,c,\'V\',2W,2k);1x=C(){5K(y,l,b);z.25=K;2a.3i=48($13,b,\'3i\',o,2a);2h=5L(y,2h,F);8(!z.26){y.S(H(\'1G\',F))}};z.25=I;1u=3u(1u);2a.3H=48($13,b,\'3H\',o,2a);1B(b.1V){Q\'41\':y.X(28);m();1C();2E();1D();1K();1y();1x();16;Q\'1w\':U.19.1b([y,{\'1L\':0},C(){m();1C();2E();1D();1K();1y();U=47(2W,b.2l);U.19.1b([y,{\'1L\':1},1x]);2P(U)}]);16;Q\'3k\':y.X({\'1L\':0});U.19.1b([l,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1C();2E();1D();1K();1y();16;Q\'1J\':U.19.1b([l,28,C(){1C();2E();1D();1K();1y();1x()}]);1P();16;Q\'1J-1w\':U.19.1b([y,{\'1L\':0}]);U.19.1b([l,28,C(){y.X({\'1L\':1});1C();2E();1D();1K();1y();1x()}]);1P();16;Q\'21\':U.19.1b([l,4L,1x]);1P();1C();2E();1D();1K();1y();16;Q\'21-1w\':y.X({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([l,4L,1x]);1P();1C();2E();1D();1K();1y();16;2A:U.19.1b([y,28,C(){1y();1x()}]);1P();3E();5H();3F();16}2P(U);5M(7.23,y,F);y.S(H(\'3I\',F),[K,2k]);G I});y.12(H(\'87\',F),C(e,c,d){e.1f();E f=y.14();8(!7.1T){8(J.Y==7.D.L){8(7.3A){y.S(H(\'V\',F),J.P-1)}G e.2e()}}1U(f,7);8(!11(d)){8(7.D.1t!=\'*\'){E g=(11(c.D))?c.D:5C(y,7);d=75(f,7,0,g)}O{d=7.D.L}d=4F(d,7,c.D,$13)}E h=(J.Y==0)?J.P:J.Y;8(!7.1T){8(7.D.T.1c){E i=35(f,7,d),g=4E(f,7,h-1)}O{E i=7.D.L,g=7.D.L}8(d+i>h){d=h-g}}7.D.T.1Z=7.D.L;8(7.D.T.1c){E i=2z(5N(f,7,d,h),7,7.D.T.2c,$13);2i(7.D.L-d>=i&&d<J.P){d++;i=2z(5N(f,7,d,h),7,7.D.T.2c,$13)}7.D.L=i}O 8(7.D.1t!=\'*\'){E i=3X(f,7,d);7.D.L=2z(i,7,7.D.T.2c,$13)}1U(f,7,I);8(d==0){e.2e();G 17(F,\'0 D 45 1M: 2r 3g.\')}17(F,\'70 \'+d+\' D 76.\');J.Y-=d;2i(J.Y<0){J.Y+=J.P}8(!7.1T){8(J.Y==7.D.L&&c.4G){c.4G.1g($13,\'Z\')}8(!7.3A){3B(7,J.Y,F)}}8(J.P<7.D.L+d){y.14().18(0,(7.D.L+d)-J.P).4H(I).46(y)}E f=y.14(),3j=77(f,7),2j=78(f,7,d),1Y=f.1O(d-1),20=3j.2R(),2t=2j.2R();1U(f,7);E j=0,2D=0;8(7.1A){E p=4I(2j,7);j=p[0];2D=p[1]}E k=K,2S=$();8(7.D.T.1Z<d){2S=f.18(7.D.T.1Z,d);8(c.1V==\'73\'){E l=7.D[7.d[\'N\']];k=2S;1Y=20;5E(k);7.D[7.d[\'N\']]=\'1c\'}}E m=K,3C=2T(f.18(0,d),7,\'N\'),2k=4J(4K(2j,7,I),7,!7.1R),3D=0,28={},4O={},2u={},2U={},2V={},2W=5G(c,7,d,3C);1B(c.1V){Q\'21\':Q\'21-1w\':3D=2T(f.18(0,7.D.T.1Z),7,\'N\');16}8(k){7.D[7.d[\'N\']]=l}8(7.1A){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1U(f,7,I);1U(20,7,7.1i[7.d[1]]);8(7.1A){7.1i[7.d[1]]=2D;7.1i[7.d[3]]=j}2V[7.d[\'1n\']]=(7.1R)?7.1i[7.d[3]]:0;E n=C(){},1P=C(){},1C=C(){},3E=C(){},1D=C(){},3F=C(){},1x=C(){},1y=C(){},1K=C(){};1B(c.1V){Q\'3k\':Q\'1J\':Q\'1J-1w\':Q\'21\':Q\'21-1w\':m=y.4H(I).46($1s);m.14().18(7.D.T.1Z).2v();16}1B(c.1V){Q\'3k\':Q\'1J\':Q\'1J-1w\':y.X(\'3Z\',1);m.X(\'3Z\',0);16}U=47(2W,c.2l);28[7.d[\'1n\']]=-3C;4O[7.d[\'1n\']]=-3D;8(j<0){28[7.d[\'1n\']]+=j}8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){n=C(){$1s.X(2k)};1P=C(){U.19.1b([$1s,2k])}}8(7.1R){E o=2t.1m(\'29\');8(2D>=0){o+=7.1i[7.d[1]]}2t.X(7.d[\'1S\'],o);8(1Y.4N(20).R){2U[7.d[\'1S\']]=20.1m(\'29\')}1C=C(){20.X(2U)};3E=C(){U.19.1b([20,2U])};E q=1Y.1m(\'29\');8(j>0){q+=7.1i[7.d[3]]}2u[7.d[\'1S\']]=q;1D=C(){1Y.X(2u)};3F=C(){U.19.1b([1Y,2u])}}1K=C(){y.X(2V)};E r=7.D.L+d-J.P;1y=C(){8(r>0){y.14().18(J.P).2v()}E a=y.14().18(0,d).46(y).2R();8(r>0){2j=3J(f,7)}5I(k);8(7.1R){8(J.P<7.D.L+d){E b=y.14().1O(7.D.L-1);b.X(7.d[\'1S\'],b.1m(\'29\')+7.1i[7.d[3]])}a.X(7.d[\'1S\'],a.1m(\'29\'))}};E s=5J(3j,2S,2j,d,\'Z\',2W,2k);1x=C(){y.X(\'3Z\',y.1m(\'5t\').3Z);5K(y,m,c);z.25=K;2a.3i=48($13,c,\'3i\',s,2a);2h=5L(y,2h,F);8(!z.26){y.S(H(\'1G\',F))}};z.25=I;1u=3u(1u);2a.3H=48($13,c,\'3H\',s,2a);1B(c.1V){Q\'41\':y.X(28);n();1C();1D();1K();1y();1x();16;Q\'1w\':U.19.1b([y,{\'1L\':0},C(){n();1C();1D();1K();1y();U=47(2W,c.2l);U.19.1b([y,{\'1L\':1},1x]);2P(U)}]);16;Q\'3k\':y.X({\'1L\':0});U.19.1b([m,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1C();1D();1K();1y();16;Q\'1J\':y.X(7.d[\'1n\'],$1s[7.d[\'N\']]());U.19.1b([y,2V,1x]);1P();1C();1D();1y();16;Q\'1J-1w\':y.X(7.d[\'1n\'],$1s[7.d[\'N\']]());U.19.1b([m,{\'1L\':0}]);U.19.1b([y,2V,1x]);1P();1C();1D();1y();16;Q\'21\':U.19.1b([m,4O,1x]);1P();1C();1D();1K();1y();16;Q\'21-1w\':y.X({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([m,4O,1x]);1P();1C();1D();1K();1y();16;2A:U.19.1b([y,28,C(){1K();1y();1x()}]);1P();3E();3F();16}2P(U);5M(7.23,y,F);y.S(H(\'3I\',F),[K,2k]);G I});y.12(H(\'3l\',F),C(e,b,c,d,f,g,h){e.1f();E v=[b,c,d,f,g,h],t=[\'2N/27/2g\',\'27\',\'3e\',\'2g\',\'2N\',\'C\'],a=3f(v,t);f=a[3];g=a[4];h=a[5];b=3K(a[0],a[1],a[2],J,y);8(b==0){G K}8(!1I(f)){f=K}8(g!=\'V\'&&g!=\'Z\'){8(7.1T){g=(b<=J.P/2)?\'Z\':\'V\'}O{g=(J.Y==0||J.Y>b)?\'Z\':\'V\'}}8(g==\'V\'){b=J.P-b}y.S(H(g,F),[f,b,h]);G I});y.12(H(\'88\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'4a\',F));G y.1Q(H(\'5O\',F),[c-1,a,\'V\',b])});y.12(H(\'89\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'4a\',F));G y.1Q(H(\'5O\',F),[c+1,a,\'Z\',b])});y.12(H(\'5O\',F),C(e,a,b,c,d){e.1f();8(!11(a)){a=y.1Q(H(\'4a\',F))}E f=7.1a.D||7.D.L,1X=1H.2C(J.P/f)-1;8(a<0){a=1X}8(a>1X){a=0}G y.1Q(H(\'3l\',F),[a*f,0,I,b,c,d])});y.12(H(\'79\',F),C(e,s){e.1f();8(s){s=3K(s,0,I,J,y)}O{s=0}s+=J.Y;8(s!=0){8(J.P>0){2i(s>J.P){s-=J.P}}y.8a(y.14().18(s,J.P))}G I});y.12(H(\'2p\',F),C(e,s){e.1f();8(s){s=5l(s)}O 8(7.2p){s=7.2p}O{G 17(F,\'6t 8b 45 2p.\')}E n=y.1Q(H(\'4q\',F)),x=I;1j(E j=0,l=s.R;j<l;j++){8(!s[j][0].1Q(H(\'3l\',F),[n,s[j][3],I])){x=K}}G x});y.12(H(\'2Q\',F),C(e,a,b){e.1f();8(1o(a)){a.1g($13,2h)}O 8(2X(a)){2h=a}O 8(!1E(a)){2h.1b([a,b])}G 2h});y.12(H(\'8c\',F),C(e,b,c,d,f){e.1f();E v=[b,c,d,f],t=[\'2N/2g\',\'2N/27/2g\',\'3e\',\'27\'],a=3f(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1I(b)&&!2w(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2w(b)||b.R==0){G 17(F,\'2r a 5P 2g.\')}8(1E(c)){c=\'4b\'}4z(b,7);5u(b,7);E g=c,4c=\'4c\';8(c==\'4b\'){8(d){8(J.Y==0){c=J.P-1;4c=\'7a\'}O{c=J.Y;J.Y+=b.R}8(c<0){c=0}}O{c=J.P-1;4c=\'7a\'}}O{c=3K(c,f,d,J,y)}E h=y.14().1O(c);8(h.R){h[4c](b)}O{17(F,\'8d 8e-3s 4N 6u! 8f 8g 45 3L 4b.\');y.7b(b)}8(g!=\'4b\'&&!d){8(c<J.Y){J.Y+=b.R}}J.P=y.14().R;8(J.Y>=J.P){J.Y-=J.P}y.S(H(\'4P\',F));y.S(H(\'5Q\',F));G I});y.12(H(\'7c\',F),C(e,c,d,f){e.1f();E v=[c,d,f],t=[\'2N/27/2g\',\'3e\',\'27\'],a=3f(v,t);c=a[0];d=a[1];f=a[2];E g=K;8(c 2Y $&&c.R>1){h=$();c.1W(C(i,a){E b=y.S(H(\'7c\',F),[$(1k),d,f]);8(b)h=h.8h(b)});G h}8(1E(c)||c==\'4b\'){h=y.14().2R()}O{c=3K(c,f,d,J,y);E h=y.14().1O(c);8(h.R){8(c<J.Y)J.Y-=h.R}}8(h&&h.R){h.8i();J.P=y.14().R;y.S(H(\'4P\',F))}G h});y.12(H(\'3H\',F)+\' \'+H(\'3i\',F),C(e,a){e.1f();E b=e.5A.18(F.3z.44.R);8(2X(a)){2a[b]=a}8(1o(a)){2a[b].1b(a)}G 2a[b]});y.12(H(\'4q\',F),C(e,a){e.1f();8(J.Y==0){E b=0}O{E b=J.P-J.Y}8(1o(a)){a.1g($13,b)}G b});y.12(H(\'4a\',F),C(e,a){e.1f();E b=7.1a.D||7.D.L,1X=1H.2C(J.P/b-1),2m;8(J.Y==0){2m=0}O 8(J.Y<J.P%b){2m=0}O 8(J.Y==b&&!7.1T){2m=1X}O{2m=1H.7d((J.P-J.Y)/b)}8(2m<0){2m=0}8(2m>1X){2m=1X}8(1o(a)){a.1g($13,2m)}G 2m});y.12(H(\'8j\',F),C(e,a){e.1f();E b=3J(y.14(),7);8(1o(a)){a.1g($13,b)}G b});y.12(H(\'18\',F),C(e,f,l,b){e.1f();8(J.P==0){G K}E v=[f,l,b],t=[\'27\',\'27\',\'C\'],a=3f(v,t);f=(11(a[0]))?a[0]:0;l=(11(a[1]))?a[1]:J.P;b=a[2];f+=J.Y;l+=J.Y;8(D.P>0){2i(f>J.P){f-=J.P}2i(l>J.P){l-=J.P}2i(f<0){f+=J.P}2i(l<0){l+=J.P}}E c=y.14(),$i;8(l>f){$i=c.18(f,l)}O{$i=$(c.18(f,J.P).3G().74(c.18(0,l).3G()))}8(1o(b)){b.1g($13,$i)}G $i});y.12(H(\'26\',F)+\' \'+H(\'2d\',F)+\' \'+H(\'25\',F),C(e,a){e.1f();E b=e.5A.18(F.3z.44.R),5R=z[b];8(1o(a)){a.1g($13,5R)}G 5R});y.12(H(\'4D\',F),C(e,a,b,c){e.1f();E d=K;8(1o(a)){a.1g($13,7)}O 8(1I(a)){34=$.1N(I,{},34,a);8(b!==K)d=I;O 7=$.1N(I,{},7,a)}O 8(!1E(a)){8(1o(b)){E f=4Q(\'7.\'+a);8(1E(f)){f=\'\'}b.1g($13,f)}O 8(!1E(b)){8(2Z c!==\'3e\')c=I;4Q(\'34.\'+a+\' = b\');8(c!==K)d=I;O 4Q(\'7.\'+a+\' = b\')}O{G 4Q(\'7.\'+a)}}8(d){1U(y.14(),7);y.5b(34);y.5S();E g=4R(y,7);y.S(H(\'3I\',F),[I,g])}G 7});y.12(H(\'5Q\',F),C(e,a,b){e.1f();8(1E(a)){a=$(\'8k\')}O 8(1p(a)){a=$(a)}8(!2w(a)||a.R==0){G 17(F,\'2r a 5P 2g.\')}8(!1p(b)){b=\'a.6s\'}a.8l(b).1W(C(){E h=1k.7e||\'\';8(h.R>0&&y.14().7f($(h))!=-1){$(1k).22(\'5T\').5T(C(e){e.2F();y.S(H(\'3l\',F),h)})}});G I});y.12(H(\'3I\',F),C(e,b,c){e.1f();8(!7.1a.1z){G}E d=7.1a.D||7.D.L,4S=1H.2C(J.P/d);8(b){8(7.1a.3M){7.1a.1z.14().2v();7.1a.1z.1W(C(){1j(E a=0;a<4S;a++){E i=y.14().1O(3K(a*d,0,I,J,y));$(1k).7b(7.1a.3M.1g(i[0],a+1))}})}7.1a.1z.1W(C(){$(1k).14().22(7.1a.3N).1W(C(a){$(1k).12(7.1a.3N,C(e){e.2F();y.S(H(\'3l\',F),[a*d,-7.1a.4T,I,7.1a])})})})}E f=y.1Q(H(\'4a\',F))+7.1a.4T;8(f>=4S){f=0}8(f<0){f=4S-1}7.1a.1z.1W(C(){$(1k).14().2O(2B(\'7g\',F)).1O(f).3b(2B(\'7g\',F))});G I});y.12(H(\'4P\',F),C(e){E a=7.D.L,2G=y.14(),2n=5e($1s,7,\'N\');J.P=2G.R;8(z.4t){7.3V=2n;7[7.d[\'N\']]=4u(2n,z.4t)}O{7.3V=5f(7,2n)}8(7.2o){7.D.N=7.D.3O.N;7.D.1d=7.D.3O.1d;7=5h(7,2G,2n);a=7.D.L;5v(7,2G)}O 8(7.D.T.1c){a=35(2G,7,0)}O 8(7.D.1t!=\'*\'){a=3X(2G,7,0)}8(!7.1T&&J.Y!=0&&a>J.Y){8(7.D.T.1c){E b=4E(2G,7,J.Y)-J.Y}O 8(7.D.1t!=\'*\'){E b=7h(2G,7,J.Y)-J.Y}O{E b=7.D.L-J.Y}17(F,\'8m 8n-1T: 8o \'+b+\' D 5D.\');y.S(H(\'V\',F),b)}7.D.L=2z(a,7,7.D.T.2c,$13);7.D.T.1Z=7.D.L;7=5j(7,2G);E c=4R(y,7);y.S(H(\'3I\',F),[I,c]);4U(7,J.P,F);3B(7,J.Y,F);G c});y.12(H(\'4r\',F),C(e,a){e.1f();1u=3u(1u);y.1m(\'5a\',K);y.S(H(\'5y\',F));8(a){y.S(H(\'79\',F))}1U(y.14(),7);8(7.2o){y.14().1W(C(){$(1k).X($(1k).1m(\'7i\'))})}y.X(y.1m(\'5t\'));y.5w();y.5U();$1s.8p(y);G I});y.12(H(\'17\',F),C(e){17(F,\'3y N: \'+7.N);17(F,\'3y 1d: \'+7.1d);17(F,\'7j 8q: \'+7.D.N);17(F,\'7j 8r: \'+7.D.1d);17(F,\'4d 4e D L: \'+7.D.L);8(7.M.1G){17(F,\'4d 4e D 5V 8s: \'+7.M.D)}8(7.V.W){17(F,\'4d 4e D 5V 5D: \'+7.V.D)}8(7.Z.W){17(F,\'4d 4e D 5V 76: \'+7.Z.D)}G F.17});y.12(\'3p\',C(e,n,o){e.1f();G y.1Q(H(n,F),o)})};y.5w=C(){y.22(H(\'\',F));y.22(H(\'\',F,K));y.22(\'3p\')};y.5S=C(){y.5U();4U(7,J.P,F);3B(7,J.Y,F);8(7.M.2H){E b=3P(7.M.2H);$1s.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}8(7.M.W){7.M.W.12(H(7.M.3N,F,K),C(e){e.2F();E a=K,b=2x;8(z.26){a=\'1G\'}O 8(7.M.4X){a=\'3c\';b=3P(7.M.4X)}8(a){y.S(H(a,F),b)}})}8(7.V.W){7.V.W.12(H(7.V.3N,F,K),C(e){e.2F();y.S(H(\'V\',F))});8(7.V.2H){E b=3P(7.V.2H);7.V.W.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}}8(7.Z.W){7.Z.W.12(H(7.Z.3N,F,K),C(e){e.2F();y.S(H(\'Z\',F))});8(7.Z.2H){E b=3P(7.Z.2H);7.Z.W.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}}8(7.1a.1z){8(7.1a.2H){E b=3P(7.1a.2H);7.1a.1z.12(H(\'4V\',F,K),C(){y.S(H(\'3c\',F),b)}).12(H(\'4W\',F,K),C(){y.S(H(\'3h\',F))})}}8(7.V.31||7.Z.31){$(4f).12(H(\'7k\',F,K,I,I),C(e){E k=e.7l;8(k==7.Z.31){e.2F();y.S(H(\'Z\',F))}8(k==7.V.31){e.2F();y.S(H(\'V\',F))}})}8(7.1a.4Y){$(4f).12(H(\'7k\',F,K,I,I),C(e){E k=e.7l;8(k>=49&&k<58){k=(k-49)*7.D.L;8(k<=J.P){e.2F();y.S(H(\'3l\',F),[k,0,I,7.1a])}}})}8(7.V.4Z||7.Z.4Z){2K(\'3L 4g-7m\',\'3L 8t-7m\');8($.1r.4g){E c=(7.V.4Z)?C(){y.S(H(\'V\',F))}:2x,4h=(7.Z.4Z)?C(){y.S(H(\'Z\',F))}:2x;8(4h||4h){8(!z.4g){z.4g=I;E d={\'8u\':30,\'8v\':30,\'8w\':I};1B(7.2b){Q\'4s\':Q\'5W\':d.8x=c;d.8y=4h;16;2A:d.8z=4h;d.8A=c}$1s.4g(d)}}}}8($.1r.1q){E f=\'8B\'8C 3m;8((f&&7.1q.4i)||(!f&&7.1q.5X)){E g=$.1N(I,{},7.V,7.1q),7n=$.1N(I,{},7.Z,7.1q),5Y=C(){y.S(H(\'V\',F),[g])},5Z=C(){y.S(H(\'Z\',F),[7n])};1B(7.2b){Q\'4s\':Q\'5W\':7.1q.2I.8D=5Z;7.1q.2I.8E=5Y;16;2A:7.1q.2I.8F=5Z;7.1q.2I.8G=5Y}8(z.1q){y.1q(\'4r\')}$1s.1q(7.1q.2I);$1s.X(\'7o\',\'8H\');z.1q=I}}8($.1r.1h){8(7.V.1h){2K(\'7p V.1h 7q\',\'3L 1h 4D 2g\');7.V.1h=2x;7.1h={D:61(7.V.1h)}}8(7.Z.1h){2K(\'7p Z.1h 7q\',\'3L 1h 4D 2g\');7.Z.1h=2x;7.1h={D:61(7.Z.1h)}}8(7.1h){E h=$.1N(I,{},7.V,7.1h),7r=$.1N(I,{},7.Z,7.1h);8(z.1h){$1s.22(H(\'1h\',F,K))}$1s.12(H(\'1h\',F,K),C(e,a){e.2F();8(a>0){y.S(H(\'V\',F),[h])}O{y.S(H(\'Z\',F),[7r])}});z.1h=I}}8(7.M.1G){y.S(H(\'1G\',F),7.M.62)}8(z.6F){E i=C(e){y.S(H(\'5y\',F));8(7.M.63&&!z.26){y.S(H(\'1G\',F))}1U(y.14(),7);y.S(H(\'4P\',F))};E j=$(3m),4j=2x;8($.64&&F.65==\'64\'){4j=$.64(8I,i)}O 8($.51&&F.65==\'51\'){4j=$.51(8J,i)}O{E l=0,66=0;4j=C(){E a=j.N(),68=j.1d();8(a!=l||68!=66){i();l=a;66=68}}}j.12(H(\'8K\',F,K,I,I),4j)}};y.5U=C(){E a=H(\'\',F),3Q=H(\'\',F,K);69=H(\'\',F,K,I,I);$(4f).22(69);$(3m).22(69);$1s.22(3Q);8(7.M.W){7.M.W.22(3Q)}8(7.V.W){7.V.W.22(3Q)}8(7.Z.W){7.Z.W.22(3Q)}8(7.1a.1z){7.1a.1z.22(3Q);8(7.1a.3M){7.1a.1z.14().2v()}}8(z.1q){y.1q(\'4r\');$1s.X(\'7o\',\'2A\');z.1q=K}8(z.1h){z.1h=K}4U(7,\'4k\',F);3B(7,\'2O\',F)};8(1l(w)){w={\'17\':w}}E z={\'2b\':\'Z\',\'26\':I,\'25\':K,\'2d\':K,\'1h\':K,\'1q\':K},J={\'P\':y.14().R,\'Y\':0},1u={\'M\':2x,\'1e\':2x,\'2M\':2q(),\'3x\':0},U={\'2d\':K,\'1F\':0,\'2M\':0,\'2l\':\'\',\'19\':[]},2a={\'3H\':[],\'3i\':[]},2h=[],F=$.1N(I,{},$.1r.1v.7s,w),7={},34=$.1N(I,{},u),$1s=y.8L(\'<\'+F.6a.57+\' 8M="\'+F.6a.7t+\'" />\').6b();F.4p=y.4p;F.3U=$.1r.1v.3U++;y.5b(34,I,59);y.6N();y.6T();y.5S();8(2X(7.D.3n)){E A=7.D.3n}O{E A=[];8(7.D.3n!=0){A.1b(7.D.3n)}}8(7.23){A.8N(4l(7u(7.23),10))}8(A.R>0){1j(E a=0,l=A.R;a<l;a++){E s=A[a];8(s==0){6c}8(s===I){s=3m.8O.7e;8(s.R<1){6c}}O 8(s===\'7v\'){s=1H.4m(1H.7v()*J.P)}8(y.1Q(H(\'3l\',F),[s,0,I,{1V:\'41\'}])){16}}}E B=4R(y,7),7w=3J(y.14(),7);8(7.7x){7.7x.1g($13,{\'N\':B.N,\'1d\':B.1d,\'D\':7w})}y.S(H(\'3I\',F),[I,B]);y.S(H(\'5Q\',F));8(F.17){y.S(H(\'17\',F))}G y};$.1r.1v.3U=1;$.1r.1v.5d={\'2p\':K,\'3A\':I,\'1T\':I,\'2o\':K,\'2b\':\'1n\',\'D\':{\'3n\':0},\'1M\':{\'2l\':\'8P\',\'1F\':6I,\'2H\':K,\'3N\':\'5T\',\'2Q\':K}};$.1r.1v.7s={\'17\':K,\'65\':\'51\',\'3z\':{\'44\':\'\',\'7y\':\'8Q\'},\'6a\':{\'57\':\'8R\',\'7t\':\'8S\'},\'6d\':{}};$.1r.1v.7z=C(a){G\'<a 8T="#"><7A>\'+a+\'</7A></a>\'};$.1r.1v.7B=C(a){$(1k).X(\'N\',a+\'%\')};$.1r.1v.23={3G:C(n){n+=\'=\';E b=4f.23.3R(\';\');1j(E a=0,l=b.R;a<l;a++){E c=b[a];2i(c.8U(0)==\' \'){c=c.18(1)}8(c.3S(n)==0){G c.18(n.R)}}G 0},6e:C(n,v,d){E e="";8(d){E a=6f 7C();a.8V(a.2q()+(d*24*60*60*8W));e="; 8X="+a.8Y()}4f.23=n+\'=\'+v+e+\'; 8Z=/\'},2v:C(n){$.1r.1v.23.6e(n,"",-1)}};C 47(d,e){G{19:[],1F:d,90:d,2l:e,2M:2q()}}C 2P(s){8(1I(s.3v)){2P(s.3v)}1j(E a=0,l=s.19.R;a<l;a++){E b=s.19[a];8(!b){6c}8(b[3]){b[0].5x()}b[0].91(b[1],{92:b[2],1F:s.1F,2l:s.2l})}8(1I(s.3w)){2P(s.3w)}}C 42(s,c){8(!1l(c)){c=I}8(1I(s.3v)){42(s.3v,c)}1j(E a=0,l=s.19.R;a<l;a++){E b=s.19[a];b[0].5x(I);8(c){b[0].X(b[1]);8(1o(b[2])){b[2]()}}}8(1I(s.3w)){42(s.3w,c)}}C 5K(a,b,o){8(b){b.2v()}1B(o.1V){Q\'1w\':Q\'3k\':Q\'1J-1w\':Q\'21-1w\':a.X(\'1t\',\'\');16}}C 48(d,o,b,a,c){8(o[b]){o[b].1g(d,a)}8(c[b].R){1j(E i=0,l=c[b].R;i<l;i++){c[b][i].1g(d,a)}}G[]}C 5L(a,q,c){8(q.R){a.S(H(q[0][0],c),q[0][1]);q.93()}G q}C 5E(b){b.1W(C(){E a=$(1k);a.1m(\'7D\',a.2f(\':3t\')).4k()})}C 5I(b){8(b){b.1W(C(){E a=$(1k);8(!a.1m(\'7D\')){a.4n()}})}}C 3u(t){8(t.M){94(t.M)}8(t.1e){95(t.1e)}G t}C 5J(a,b,c,d,e,f,g){G{\'N\':g.N,\'1d\':g.1d,\'D\':{\'1Z\':a,\'96\':b,\'L\':c,\'6f\':c},\'1M\':{\'D\':d,\'2b\':e,\'1F\':f}}}C 5G(a,o,b,c){E d=a.1F;8(a.1V==\'41\'){G 0}8(d==\'M\'){d=o.1M.1F/o.1M.D*b}O 8(d<10){d=c/d}8(d<1){G 0}8(a.1V==\'1w\'){d=d/2}G 1H.7d(d)}C 4U(o,t,c){E a=(11(o.D.4C))?o.D.4C:o.D.L+1;8(t==\'4n\'||t==\'4k\'){E f=t}O 8(a>t){17(c,\'2r 6V D (\'+t+\' P, \'+a+\' 6W): 97 98.\');E f=\'4k\'}O{E f=\'4n\'}E s=(f==\'4n\')?\'2O\':\'3b\',h=2B(\'3t\',c);8(o.M.W){o.M.W[f]()[s](h)}8(o.V.W){o.V.W[f]()[s](h)}8(o.Z.W){o.Z.W[f]()[s](h)}8(o.1a.1z){o.1a.1z[f]()[s](h)}}C 3B(o,f,c){8(o.1T||o.3A)G;E a=(f==\'2O\'||f==\'3b\')?f:K,52=2B(\'99\',c);8(o.M.W&&a){o.M.W[a](52)}8(o.V.W){E b=a||(f==0)?\'3b\':\'2O\';o.V.W[b](52)}8(o.Z.W){E b=a||(f==o.D.L)?\'3b\':\'2O\';o.Z.W[b](52)}}C 3T(a,b){8(1o(b)){b=b.1g(a)}O 8(1E(b)){b={}}G b}C 6v(a,b){b=3T(a,b);8(11(b)){b={\'L\':b}}O 8(b==\'1c\'){b={\'L\':b,\'N\':b,\'1d\':b}}O 8(!1I(b)){b={}}G b}C 6w(a,b){b=3T(a,b);8(11(b)){8(b<=50){b={\'D\':b}}O{b={\'1F\':b}}}O 8(1p(b)){b={\'2l\':b}}O 8(!1I(b)){b={}}G b}C 53(a,b){b=3T(a,b);8(1p(b)){E c=6g(b);8(c==-1){b=$(b)}O{b=c}}G b}C 6x(a,b){b=53(a,b);8(2w(b)){b={\'W\':b}}O 8(1l(b)){b={\'1G\':b}}O 8(11(b)){b={\'2L\':b}}8(b.1e){8(1p(b.1e)||2w(b.1e)){b.1e={\'2s\':b.1e}}}G b}C 6J(a,b){8(1o(b.W)){b.W=b.W.1g(a)}8(1p(b.W)){b.W=$(b.W)}8(!1l(b.1G)){b.1G=I}8(!11(b.62)){b.62=0}8(1E(b.4X)){b.4X=I}8(!1l(b.63)){b.63=I}8(!11(b.2L)){b.2L=(b.1F<10)?9a:b.1F*5}8(b.1e){8(1o(b.1e.2s)){b.1e.2s=b.1e.2s.1g(a)}8(1p(b.1e.2s)){b.1e.2s=$(b.1e.2s)}8(b.1e.2s){8(!1o(b.1e.4B)){b.1e.4B=$.1r.1v.7B}8(!11(b.1e.5z)){b.1e.5z=50}}O{b.1e=K}}G b}C 5c(a,b){b=53(a,b);8(2w(b)){b={\'W\':b}}O 8(11(b)){b={\'31\':b}}G b}C 5k(a,b){8(1o(b.W)){b.W=b.W.1g(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.31)){b.31=6g(b.31)}G b}C 6y(a,b){b=53(a,b);8(2w(b)){b={\'1z\':b}}O 8(1l(b)){b={\'4Y\':b}}G b}C 6K(a,b){8(1o(b.1z)){b.1z=b.1z.1g(a)}8(1p(b.1z)){b.1z=$(b.1z)}8(!11(b.D)){b.D=K}8(!1l(b.4Y)){b.4Y=K}8(!1o(b.3M)&&!54(b.3M)){b.3M=$.1r.1v.7z}8(!11(b.4T)){b.4T=0}G b}C 6z(a,b){8(1o(b)){b=b.1g(a)}8(1E(b)){b={\'4i\':K}}8(3q(b)){b={\'4i\':b}}O 8(11(b)){b={\'D\':b}}G b}C 6L(a,b){8(!1l(b.4i)){b.4i=I}8(!1l(b.5X)){b.5X=K}8(!1I(b.2I)){b.2I={}}8(!1l(b.2I.7E)){b.2I.7E=K}G b}C 6A(a,b){8(1o(b)){b=b.1g(a)}8(3q(b)){b={}}O 8(11(b)){b={\'D\':b}}O 8(1E(b)){b=K}G b}C 6M(a,b){G b}C 3K(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1I(a)){a=$(a,e)}8(2w(a)){a=e.14().7f(a);8(!1l(c)){c=K}}O{8(!1l(c)){c=I}}8(!11(a)){a=0}8(!11(b)){b=0}8(c){a+=d.Y}a+=b;8(d.P>0){2i(a>=d.P){a-=d.P}2i(a<0){a+=d.P}}G a}C 4E(i,o,s){E t=0,x=0;1j(E a=s;a>=0;a--){E j=i.1O(a);t+=(j.2f(\':L\'))?j[o.d[\'2y\']](I):0;8(t>o.3V){G x}8(a==0){a=i.R}x++}}C 7h(i,o,s){G 6h(i,o.D.1t,o.D.T.4v,s)}C 6Z(i,o,s,m){G 6h(i,o.D.1t,m,s)}C 6h(i,f,m,s){E t=0,x=0;1j(E a=s,l=i.R;a>=0;a--){x++;8(x==l){G x}E j=i.1O(a);8(j.2f(f)){t++;8(t==m){G x}}8(a==0){a=l}}}C 5C(a,o){G o.D.T.4v||a.14().18(0,o.D.L).1t(o.D.1t).R}C 35(i,o,s){E t=0,x=0;1j(E a=s,l=i.R-1;a<=l;a++){E j=i.1O(a);t+=(j.2f(\':L\'))?j[o.d[\'2y\']](I):0;8(t>o.3V){G x}x++;8(x==l+1){G x}8(a==l){a=-1}}}C 5N(i,o,s,l){E v=35(i,o,s);8(!o.1T){8(s+v>l){v=l-s}}G v}C 3X(i,o,s){G 6i(i,o.D.1t,o.D.T.4v,s,o.1T)}C 75(i,o,s,m){G 6i(i,o.D.1t,m+1,s,o.1T)-1}C 6i(i,f,m,s,c){E t=0,x=0;1j(E a=s,l=i.R-1;a<=l;a++){x++;8(x>=l){G x}E j=i.1O(a);8(j.2f(f)){t++;8(t==m){G x}}8(a==l){a=-1}}}C 3J(i,o){G i.18(0,o.D.L)}C 71(i,o,n){G i.18(n,o.D.T.1Z+n)}C 72(i,o){G i.18(0,o.D.L)}C 77(i,o){G i.18(0,o.D.T.1Z)}C 78(i,o,n){G i.18(n,o.D.L+n)}C 4z(i,o,d){8(o.1R){8(!1p(d)){d=\'29\'}i.1W(C(){E j=$(1k),m=4l(j.X(o.d[\'1S\']),10);8(!11(m)){m=0}j.1m(d,m)})}}C 1U(i,o,m){8(o.1R){E x=(1l(m))?m:K;8(!11(m)){m=0}4z(i,o,\'7F\');i.1W(C(){E j=$(1k);j.X(o.d[\'1S\'],((x)?j.1m(\'7F\'):m+j.1m(\'29\')))})}}C 5u(i,o){8(o.2o){i.1W(C(){E j=$(1k),s=5q(j,[\'N\',\'1d\']);j.1m(\'7i\',s)})}}C 5v(o,b){E c=o.D.L,7G=o.D[o.d[\'N\']],6j=o[o.d[\'1d\']],7H=3W(6j);b.1W(C(){E a=$(1k),6k=7G-7I(a,o,\'9b\');a[o.d[\'N\']](6k);8(7H){a[o.d[\'1d\']](4u(6k,6j))}})}C 4R(a,o){E b=a.6b(),$i=a.14(),$v=3J($i,o),55=4J(4K($v,o,I),o,K);b.X(55);8(o.1R){E p=o.1i,r=p[o.d[1]];8(o.1A&&r<0){r=0}E c=$v.2R();c.X(o.d[\'1S\'],c.1m(\'29\')+r);a.X(o.d[\'3r\'],p[o.d[0]]);a.X(o.d[\'1n\'],p[o.d[3]])}a.X(o.d[\'N\'],55[o.d[\'N\']]+(2T($i,o,\'N\')*2));a.X(o.d[\'1d\'],6l($i,o,\'1d\'));G 55}C 4K(i,o,a){G[2T(i,o,\'N\',a),6l(i,o,\'1d\',a)]}C 6l(i,o,a,b){8(!1l(b)){b=K}8(11(o[o.d[a]])&&b){G o[o.d[a]]}8(11(o.D[o.d[a]])){G o.D[o.d[a]]}a=(a.6m().3S(\'N\')>-1)?\'2y\':\'3o\';G 4o(i,o,a)}C 4o(i,o,b){E s=0;1j(E a=0,l=i.R;a<l;a++){E j=i.1O(a);E m=(j.2f(\':L\'))?j[o.d[b]](I):0;8(s<m){s=m}}G s}C 2T(i,o,b,c){8(!1l(c)){c=K}8(11(o[o.d[b]])&&c){G o[o.d[b]]}8(11(o.D[o.d[b]])){G o.D[o.d[b]]*i.R}E d=(b.6m().3S(\'N\')>-1)?\'2y\':\'3o\',s=0;1j(E a=0,l=i.R;a<l;a++){E j=i.1O(a);s+=(j.2f(\':L\'))?j[o.d[d]](I):0}G s}C 5e(a,o,d){E b=a.2f(\':L\');8(b){a.4k()}E s=a.6b()[o.d[d]]();8(b){a.4n()}G s}C 5f(o,a){G(11(o[o.d[\'N\']]))?o[o.d[\'N\']]:a}C 6n(i,o,b){E s=K,v=K;1j(E a=0,l=i.R;a<l;a++){E j=i.1O(a);E c=(j.2f(\':L\'))?j[o.d[b]](I):0;8(s===K){s=c}O 8(s!=c){v=I}8(s==0){v=I}}G v}C 7I(i,o,d){G i[o.d[\'9c\'+d]](I)-i[o.d[d.6m()]]()}C 4u(s,o){8(3W(o)){o=4l(o.18(0,-1),10);8(!11(o)){G s}s*=o/2J}G s}C H(n,c,a,b,d){8(!1l(a)){a=I}8(!1l(b)){b=I}8(!1l(d)){d=K}8(a){n=c.3z.44+n}8(b){n=n+\'.\'+c.3z.7y}8(b&&d){n+=c.3U}G n}C 2B(n,c){G(1p(c.6d[n]))?c.6d[n]:n}C 4J(a,o,p){8(!1l(p)){p=I}E b=(o.1R&&p)?o.1i:[0,0,0,0];E c={};c[o.d[\'N\']]=a[0]+b[1]+b[3];c[o.d[\'1d\']]=a[1]+b[0]+b[2];G c}C 3f(c,d){E e=[];1j(E a=0,7J=c.R;a<7J;a++){1j(E b=0,7K=d.R;b<7K;b++){8(d[b].3S(2Z c[a])>-1&&1E(e[b])){e[b]=c[a];16}}}G e}C 6H(p){8(1E(p)){G[0,0,0,0]}8(11(p)){G[p,p,p,p]}8(1p(p)){p=p.3R(\'9d\').7L(\'\').3R(\'9e\').7L(\'\').3R(\' \')}8(!2X(p)){G[0,0,0,0]}1j(E i=0;i<4;i++){p[i]=4l(p[i],10)}1B(p.R){Q 0:G[0,0,0,0];Q 1:G[p[0],p[0],p[0],p[0]];Q 2:G[p[0],p[1],p[0],p[1]];Q 3:G[p[0],p[1],p[2],p[1]];2A:G[p[0],p[1],p[2],p[3]]}}C 4I(a,o){E x=(11(o[o.d[\'N\']]))?1H.2C(o[o.d[\'N\']]-2T(a,o,\'N\')):0;1B(o.1A){Q\'1n\':G[0,x];Q\'3a\':G[x,0];Q\'5g\':2A:G[1H.2C(x/2),1H.4m(x/2)]}}C 6B(o){E a=[[\'N\',\'7M\',\'2y\',\'1d\',\'7N\',\'3o\',\'1n\',\'3r\',\'1S\',0,1,2,3],[\'1d\',\'7N\',\'3o\',\'N\',\'7M\',\'2y\',\'3r\',\'1n\',\'5r\',3,2,1,0]];E b=a[0].R,7O=(o.2b==\'3a\'||o.2b==\'1n\')?0:1;E c={};1j(E d=0;d<b;d++){c[a[0][d]]=a[7O][d]}G c}C 4F(x,o,a,b){E v=x;8(1o(a)){v=a.1g(b,v)}O 8(1p(a)){E p=a.3R(\'+\'),m=a.3R(\'-\');8(m.R>p.R){E c=I,6o=m[0],32=m[1]}O{E c=K,6o=p[0],32=p[1]}1B(6o){Q\'9f\':v=(x%2==1)?x-1:x;16;Q\'9g\':v=(x%2==0)?x-1:x;16;2A:v=x;16}32=4l(32,10);8(11(32)){8(c){32=-32}v+=32}}8(!11(v)||v<1){v=1}G v}C 2z(x,o,a,b){G 6p(4F(x,o,a,b),o.D.T)}C 6p(v,i){8(11(i.36)&&v<i.36){v=i.36}8(11(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}G v}C 5l(s){8(!2X(s)){s=[[s]]}8(!2X(s[0])){s=[s]}1j(E j=0,l=s.R;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1l(s[j][1])){s[j][1]=I}8(!1l(s[j][2])){s[j][2]=I}8(!11(s[j][3])){s[j][3]=0}}G s}C 6g(k){8(k==\'3a\'){G 39}8(k==\'1n\'){G 37}8(k==\'4s\'){G 38}8(k==\'5W\'){G 40}G-1}C 5M(n,a,c){8(n){E v=a.1Q(H(\'4q\',c));$.1r.1v.23.6e(n,v)}}C 7u(n){E c=$.1r.1v.23.3G(n);G(c==\'\')?0:c}C 5q(a,b){E c={},56;1j(E p=0,l=b.R;p<l;p++){56=b[p];c[56]=a.X(56)}G c}C 6C(a,b,c,d){8(!1I(a.T)){a.T={}}8(!1I(a.3O)){a.3O={}}8(a.3n==0&&11(d)){a.3n=d}8(1I(a.L)){a.T.36=a.L.36;a.T.1X=a.L.1X;a.L=K}O 8(1p(a.L)){8(a.L==\'1c\'){a.T.1c=I}O{a.T.2c=a.L}a.L=K}O 8(1o(a.L)){a.T.2c=a.L;a.L=K}8(!1p(a.1t)){a.1t=(c.1t(\':3t\').R>0)?\':L\':\'*\'}8(!a[b.d[\'N\']]){8(b.2o){17(I,\'7P a \'+b.d[\'N\']+\' 1j 3L D!\');a[b.d[\'N\']]=4o(c,b,\'2y\')}O{a[b.d[\'N\']]=(6n(c,b,\'2y\'))?\'1c\':c[b.d[\'2y\']](I)}}8(!a[b.d[\'1d\']]){a[b.d[\'1d\']]=(6n(c,b,\'3o\'))?\'1c\':c[b.d[\'3o\']](I)}a.3O.N=a.N;a.3O.1d=a.1d;G a}C 6G(a,b){8(a.D[a.d[\'N\']]==\'1c\'){a.D.T.1c=I}8(!a.D.T.1c){8(11(a[a.d[\'N\']])){a.D.L=1H.4m(a[a.d[\'N\']]/a.D[a.d[\'N\']])}O{a.D.L=1H.4m(b/a.D[a.d[\'N\']]);a[a.d[\'N\']]=a.D.L*a.D[a.d[\'N\']];8(!a.D.T.2c){a.1A=K}}8(a.D.L==\'9h\'||a.D.L<1){17(I,\'2r a 5P 27 4e L D: 7P 45 "1c".\');a.D.T.1c=I}}G a}C 6D(a,b,c){8(a==\'M\'){a=4o(c,b,\'2y\')}G a}C 6E(a,b,c){8(a==\'M\'){a=4o(c,b,\'3o\')}8(!a){a=b.D[b.d[\'1d\']]}G a}C 5j(o,a){E p=4I(3J(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];G o}C 5h(o,a,b){E c=6p(1H.2C(o[o.d[\'N\']]/o.D[o.d[\'N\']]),o.D.T);8(c>a.R){c=a.R}E d=1H.4m(o[o.d[\'N\']]/c);o.D.L=c;o.D[o.d[\'N\']]=d;o[o.d[\'N\']]=c*d;G o}C 3P(p){8(1p(p)){E i=(p.3S(\'9i\')>-1)?I:K,r=(p.3S(\'3h\')>-1)?I:K}O{E i=r=K}G[i,r]}C 61(a){G(11(a))?a:2x}C 6q(a){G(a===2x)}C 1E(a){G(6q(a)||2Z a==\'7Q\'||a===\'\'||a===\'7Q\')}C 2X(a){G(a 2Y 9j)}C 2w(a){G(a 2Y 7R)}C 1I(a){G((a 2Y 9k||2Z a==\'2g\')&&!6q(a)&&!2w(a)&&!2X(a))}C 11(a){G((a 2Y 4d||2Z a==\'27\')&&!9l(a))}C 1p(a){G((a 2Y 9m||2Z a==\'2N\')&&!1E(a)&&!3q(a)&&!54(a))}C 1o(a){G(a 2Y 9n||2Z a==\'C\')}C 1l(a){G(a 2Y 9o||2Z a==\'3e\'||3q(a)||54(a))}C 3q(a){G(a===I||a===\'I\')}C 54(a){G(a===K||a===\'K\')}C 3W(x){G(1p(x)&&x.18(-1)==\'%\')}C 2q(){G 6f 7C().2q()}C 2K(o,n){17(I,o+\' 2f 9p, 9q 1j 9r 9s 9t 9u. 9v \'+n+\' 9w.\')}C 17(d,m){8(1I(d)){E s=\' (\'+d.4p+\')\';d=d.17}O{E s=\'\'}8(!d){G K}8(1p(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}8(3m.6r&&3m.6r.7S){3m.6r.7S(m)}G K}$.1N($.2l,{\'9x\':C(t){E a=t*t;G t*(-a*t+4*a-6*t+4)},\'9y\':C(t){G t*(4*t*t-9*t+6)},\'9z\':C(t){E a=t*t;G t*(33*a*a-9A*a*t+9B*a-67*t+15)}})})(7R);',62,596,'|||||||opts|if||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|width|else|total|case|length|trigger|visibleConf|scrl|prev|button|css|first|next||is_number|bind|tt0|children||break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|mousewheel|padding|for|this|is_boolean|data|left|is_function|is_string|swipe|fn|wrp|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|container|align|switch|_s_paddingold|_s_paddingcur|is_undefined|duration|play|Math|is_object|cover|_position|opacity|scroll|extend|eq|_a_wrapper|triggerHandler|usePadding|marginRight|circular|sz_resetMargin|fx|each|max|i_cur_l|old|i_old_l|uncover|unbind|cookie||isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|direction|adjust|isStopped|stopImmediatePropagation|is|object|queu|while|i_new|w_siz|easing|nr|avail_primary|responsive|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|is_jquery|null|outerWidth|cf_getItemsAdjust|default|cf_c|ceil|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|100|deprecated|timeoutDuration|startTime|string|removeClass|sc_startScroll|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof||key|adj||opts_orig|gn_getVisibleItemsNext|min||||right|addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|hidden|sc_clearTimers|pre|post|timePassed|Carousel|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|the|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|orgCSS|zIndex||none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll|sc_fireCallbacks||currentPage|end|before|Number|of|document|touchwipe|wN|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|up|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|updater|minimum|configuration|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|mouseenter|mouseleave|pauseOnEvent|keys|wipe||throttle|di|go_getNaviObject|is_false|sz|prop|element||starting_position|_cfs_isCarousel|_cfs_init|go_getPrevNextObject|defaults|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|in_mapCss|marginBottom|newPosition|_cfs_origCss|sz_storeSizes|sz_setResponsiveSizes|_cfs_unbind_events|stop|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|down|onMouse|swP|swN||bt_mousesheelNumber|delay|pauseOnResize|debounce|onWindowResize|_windowHeight||nh|ns3|wrapper|parent|continue|classnames|set|new|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|textAlign|float|marginTop|marginLeft|absolute|_cfs_bind_events|paused|enough|needed|page|slide_|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|_cfs_origCssSizes|Item|keyup|keyCode|plugin|scN|cursor|The|option|mcN|configs|classname|cf_getCookie|random|itm|onCreate|namespace|pageAnchorBuilder|span|progressbarUpdater|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|touchSwipe|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|orgDuration|animate|complete|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'),0,{}));




(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);




/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){function d(){a(".dropdown-backdrop").remove(),a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click",d),f.toggleClass("open")),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var c=a(this),d=c.data("target")||c.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f,g,h,i;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,g=this.options.trigger.split(" ");for(i=g.length;i--;)h=g[i],h=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):h!="manual"&&(e=h=="hover"?"mouseenter":"focus",f=h=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this)));this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a.fn[this.type].defaults,d={},e;this._options&&a.each(this._options,function(a,b){c[a]!=b&&(d[a]=b)},this),e=a(b.currentTarget)[this.type](d).data(this.type);if(!e.options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){e.hoverState=="in"&&e.show()},e.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var b,c,d,e,f,g,h=a.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(h);if(h.isDefaultPrevented())return;b=this.tip(),this.setContent(),this.options.animation&&b.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,b.detach().css({top:0,left:0,display:"block"}),this.options.container?b.appendTo(this.options.container):b.insertAfter(this.$element),c=this.getPosition(),d=b[0].offsetWidth,e=b[0].offsetHeight;switch(f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}this.applyPlacement(g,f),this.$element.trigger("shown")}},applyPlacement:function(a,b){var c=this.tip(),d=c[0].offsetWidth,e=c[0].offsetHeight,f,g,h,i;c.offset(a).addClass(b).addClass("in"),f=c[0].offsetWidth,g=c[0].offsetHeight,b=="top"&&g!=e&&(a.top=a.top+e-g,i=!0),b=="bottom"||b=="top"?(h=0,a.left<0&&(h=a.left*-2,a.left=0,c.offset(a),f=c[0].offsetWidth,g=c[0].offsetHeight),this.replaceArrow(h-d+f,f,"left")):this.replaceArrow(g-e,g,"top"),i&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function e(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip(),d=a.Event("hide");this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e():c.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=b?a(b.currentTarget)[this.type](this._options).data(this.type):this;c.tip().hasClass("in")?c.hide():c.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=(typeof c.content=="function"?c.content.call(b[0]):c.content)||b.attr("data-content"),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning||this.$element.hasClass("in"))return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning||!this.$element.hasClass("in"))return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),typeof c=="object"&&c);e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.typeahead;a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;c.typeahead(c.data())})}(window.jQuery);




/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
"");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);