/* Modernizr  */

;
window.Modernizr = function(a, b, c) {
        function C(a) { j.cssText = a }

        function D(a, b) { return C(n.join(a + ";") + (b || "")) }

        function E(a, b) { return typeof a === b }

        function F(a, b) { return !!~("" + a).indexOf(b) }

        function G(a, b) { for (var d in a) { var e = a[d]; if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 }

        function H(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f } return !1 }

        function I(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" "); return E(b, "string") || E(b, "undefined") ? G(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), H(e, b, c)) }

        function J() { e.input = function(c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t }("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = { svg: "http://www.w3.org/2000/svg" },
            s = {},
            t = {},
            u = {},
            v = [],
            w = v.slice,
            x, y = function(a, c, d, e) { var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body"); if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i },
            z = function() {
                function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = E(e[d], "function"), E(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d }(),
            A = {}.hasOwnProperty,
            B;!E(A, "undefined") && !E(A.call, "undefined") ? B = function(a, b) { return A.call(a, b) } : B = function(a, b) { return b in a && E(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function(b) { var c = this; if (typeof c != "function") throw new TypeError; var d = w.call(arguments, 1),
                e = function() { if (this instanceof e) { var a = function() {};
                        a.prototype = c.prototype; var f = new a,
                            g = c.apply(f, d.concat(w.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(w.call(arguments))) }; return e }), s.flexbox = function() { return I("flexWrap") }, s.canvas = function() { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function() { return !!e.canvas && !!E(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function() { return !!a.WebGLRenderingContext }, s.touch = function() { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) { c = a.offsetTop === 9 }), c }, s.geolocation = function() { return "geolocation" in navigator }, s.postmessage = function() { return !!a.postMessage }, s.websqldatabase = function() { return !!a.openDatabase }, s.indexedDB = function() { return !!I("indexedDB", a) }, s.hashchange = function() { return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function() { return !!a.history && !!history.pushState }, s.draganddrop = function() { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function() { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function() { return C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba") }, s.hsla = function() { return C("background-color:hsla(120,40%,100%,.5)"), F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla") }, s.multiplebgs = function() { return C("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function() { return I("backgroundSize") }, s.borderimage = function() { return I("borderImage") }, s.borderradius = function() { return I("borderRadius") }, s.boxshadow = function() { return I("boxShadow") }, s.textshadow = function() { return b.createElement("div").style.textShadow === "" }, s.opacity = function() { return D("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function() { return I("animationName") }, s.csscolumns = function() { return I("columnCount") }, s.cssgradients = function() { var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);"; return C((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), F(j.backgroundImage, "gradient") }, s.cssreflections = function() { return I("boxReflect") }, s.csstransforms = function() { return !!I("transform") }, s.csstransforms3d = function() { var a = !!I("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function() { return I("transition") }, s.fontface = function() { var a; return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) { var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0 }), a }, s.generatedcontent = function() { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) { a = b.offsetHeight >= 3 }), a }, s.video = function() { var a = b.createElement("video"),
                c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) {} return c }, s.audio = function() { var a = b.createElement("audio"),
                c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) {} return c }, s.localstorage = function() { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function() { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function() { return !!a.Worker }, s.applicationcache = function() { return !!a.applicationCache }, s.svg = function() { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function() { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function() { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function() { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) }; for (var K in s) B(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x)); return e.input || J(), e.addTest = function(a, b) { if (typeof a == "object")
                    for (var d in a) B(a, d) && e.addTest(d, a[d]);
                else { a = a.toLowerCase(); if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, C(""), i = k = null,
            function(a, b) {
                function l(a, b) { var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) }

                function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a }

                function n(a) { var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b }

                function o(a, c, d) { c || (c = b); if (k) return c.createElement(a);
                    d || (d = n(c)); var g; return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g }

                function p(a, c) { a || (a = b); if (k) return a.createDocumentFragment();
                    c = c || n(a); var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length; for (; e < g; e++) d.createElement(f[e]); return d }

                function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) }

                function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a } var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() { try { var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { g = !0, k = !0 } })(); var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p };
                a.html5 = s, r(b) }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.hasEvent = z, e.testProp = function(a) { return G([a]) }, e.testAllProps = I, e.testStyles = y, e.prefixed = function(a, b, c) { return b ? I(a, b, c) : I(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e }(this, this.document),
    function(a, b, c) {
        function d(a) { return "[object Function]" == o.call(a) }

        function e(a) { return "string" == typeof a }

        function f() {}

        function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a }

        function h() { var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 }

        function i(a, c, d, e, f, i, j) {
            function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function() { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) }

        function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this }

        function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) { return "[object Array]" == o.call(a) },
            x = [],
            y = {},
            z = { timeout: function(a, b) { return b.length && (a.timeout = b[0]), a } },
            A, B;
        B = function(a) {
            function b(a) { var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c }

            function g(a, e, f, g, h) { var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) }

            function h(a, b) {
                function c(a, c) { if (a) { if (e(a)) c || (j = function() { var a = [].slice.call(arguments);
                            k.apply(this, a), l() }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() { var b = 0,
                                        c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() { var a = [].slice.call(arguments);
                                k.apply(this, a), l() } : j[n] = function(a) { return function() { var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l) }, B.addPrefix = function(a, b) { z[a] = b }, B.addFilter = function(a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) { var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a; for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function() { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function(a, c, d, e, g, i) { var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) };

/* FlexNav  */

! function() { var a;
    a = jQuery, a.fn.flexNav = function(b) { var c, d, e, f, g, h, i, j, k, l, m, n; return k = a.extend({ animationSpeed: 250, transitionOpacity: !0, buttonSelector: "#menu-burger", hoverIntent: !1, hoverIntentTimeout: 150, calcItemWidths: !1, hover: !0 }, b), c = a(this), c.addClass("with-js"), k.transitionOpacity === !0 && c.addClass("opacity"), c.find("li").each(function() { return a(this).has("ul").length ? a(this).addClass("item-with-ul").find("ul").hide() : void 0 }), k.calcItemWidths === !0 && (d = c.find(">li"), f = d.length, h = 100 / f, g = h + "%"), c.data("breakpoint") && (e = c.data("breakpoint")), l = function() { return c.hasClass("lg-screen") === !0 && k.hover === !0 ? k.transitionOpacity === !0 ? a(this).find(">ul").addClass("flexnav-show").stop(!0, !0).animate({ height: ["toggle", "swing"], opacity: "toggle" }, k.animationSpeed) : a(this).find(">ul").addClass("flexnav-show").stop(!0, !0).animate({ height: ["toggle", "swing"] }, k.animationSpeed) : void 0 }, i = function() { return c.hasClass("lg-screen") === !0 && a(this).find(">ul").hasClass("flexnav-show") === !0 && k.hover === !0 ? k.transitionOpacity === !0 ? a(this).find(">ul").removeClass("flexnav-show").stop(!0, !0).animate({ height: ["toggle", "swing"], opacity: "toggle" }, k.animationSpeed) : a(this).find(">ul").removeClass("flexnav-show").stop(!0, !0).animate({ height: ["toggle", "swing"] }, k.animationSpeed) : void 0 }, j = function() { var b; if (a(window).width() <= e) return c.removeClass("lg-screen").addClass("sm-screen"), k.calcItemWidths === !0 && d.css("width", "100%"), b = k.buttonSelector + ", " + k.buttonSelector + " .touch-button", a(b).removeClass("active"), a(".one-page li a").on("click", function() { return c.removeClass("flexnav-show") }); if (a(window).width() > e) { if (c.removeClass("sm-screen").addClass("lg-screen"), k.calcItemWidths === !0 && d.css("width", g), c.removeClass("flexnav-show").find(".item-with-ul").on(), a(".item-with-ul").find("ul").removeClass("flexnav-show"), i(), k.hoverIntent === !0) return a(".item-with-ul").hoverIntent({ over: l, out: i, timeout: k.hoverIntentTimeout }); if (k.hoverIntent === !1) return a(".item-with-ul").on("mouseenter", l).on("mouseleave", i) } }, a(k.buttonSelector).data("navEl", c), n = ".item-with-ul, " + k.buttonSelector, a(n).append('<span class="touch-button"><i class="navicon">&#9660;</i></span>'), m = k.buttonSelector + ", " + k.buttonSelector + " .touch-button", a(m).on("click", function(b) { var c, d, e; return a(m).toggleClass("active"), b.preventDefault(), b.stopPropagation(), e = k.buttonSelector, c = a(this).is(e) ? a(this) : a(this).parent(e), d = c.data("navEl"), d.toggleClass("flexnav-show") }), a(".touch-button").on("click", function() { var b, d; return b = a(this).parent(".item-with-ul").find(">ul"), d = a(this).parent(".item-with-ul").find(">span.touch-button"), c.hasClass("lg-screen") === !0 && a(this).parent(".item-with-ul").siblings().find("ul.flexnav-show").removeClass("flexnav-show").hide(), b.hasClass("flexnav-show") === !0 ? (b.removeClass("flexnav-show").slideUp(k.animationSpeed), d.removeClass("active")) : b.hasClass("flexnav-show") === !1 ? (b.addClass("flexnav-show").slideDown(k.animationSpeed), d.addClass("active")) : void 0 }), c.find(".item-with-ul *").focus(function() { return a(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide(), a(this).parent(".item-with-ul").find(">ul").addClass("open").show() }), j(), a(window).on("resize", j) } }.call(this);

/*  Wait For Images */

! function(a) { var b = "waitForImages";
    a.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"], hasImageAttributes: ["srcset"] }, a.expr[":"].uncached = function(b) { if (!a(b).is('img[src][src!=""]')) return !1; var c = new Image; return c.src = b.src, !c.complete }, a.fn.waitForImages = function() { var c, d, e, f = 0,
            g = 0,
            h = a.Deferred(); if (a.isPlainObject(arguments[0]) ? (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? e = arguments[0] : (c = arguments[0], d = arguments[1], e = arguments[2]), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied."); return this.each(function() { var i = a(this),
                j = [],
                k = a.waitForImages.hasImageProperties || [],
                l = a.waitForImages.hasImageAttributes || [],
                m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            e ? i.find("*").addBack().each(function() { var b = a(this);
                b.is("img:uncached") && j.push({ src: b.attr("src"), element: b[0] }), a.each(k, function(a, c) { var d, e = b.css(c); if (!e) return !0; for (; d = m.exec(e);) j.push({ src: d[2], element: b[0] }) }), a.each(l, function(c, d) { var e, f = b.attr(d); return f ? (e = f.split(","), void a.each(e, function(c, d) { d = a.trim(d).split(" ")[0], j.push({ src: d, element: b[0] }) })) : !0 }) }) : i.find("img:uncached").each(function() { j.push({ src: this.src, element: this }) }), f = j.length, g = 0, 0 === f && (c.call(i[0]), h.resolveWith(i[0])), a.each(j, function(e, j) { var k = new Image,
                    l = "load." + b + " error." + b;
                a(k).one(l, function m(b) { var e = [g, f, "load" == b.type]; return g++, d.apply(j.element, e), h.notifyWith(j.element, e), a(this).off(l, m), g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0 }), k.src = j.src }) }), h.promise() } }(jQuery);


/*  Appear */

! function(e) { e.fn.appear = function(a, r) { var n = e.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, r); return this.each(function() { var r = e(this); if (r.appeared = !1, !a) return void r.trigger("appear", n.data); var p = e(window),
                t = function() { if (!r.is(":visible")) return void(r.appeared = !1); var e = p.scrollLeft(),
                        a = p.scrollTop(),
                        t = r.offset(),
                        c = t.left,
                        i = t.top,
                        o = n.accX,
                        f = n.accY,
                        s = r.height(),
                        u = p.height(),
                        d = r.width(),
                        l = p.width();
                    i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : r.appeared = !1 },
                c = function() { if (r.appeared = !0, n.one) { p.unbind("scroll", t); var c = e.inArray(t, e.fn.appear.checks);
                        c >= 0 && e.fn.appear.checks.splice(c, 1) }
                    a.apply(this, arguments) };
            n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c), p.scroll(t), e.fn.appear.checks.push(t), t() }) }, e.extend(e.fn.appear, { checks: [], timeout: null, checkAll: function() { var a = e.fn.appear.checks.length; if (a > 0)
                for (; a--;) e.fn.appear.checks[a]() }, run: function() { e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20) } }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) { var n = e.fn[r];
        n && (e.fn[r] = function() { var a = n.apply(this, arguments); return e.fn.appear.run(), a }) }) }(jQuery);


/*  Owl Carousel */

! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Pipe, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }

    function f(a) { if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (a.touches === d) { if (a.pageX !== d) return { x: a.pageX, y: a.pageY }; if (a.pageX === d) return { x: a.clientX, y: a.clientY } } }

    function g(a) { var b, d, e = c.createElement("div"),
            f = a; for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1] }

    function h() { return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

    function i() { return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

    function j() { return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

    function k() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints }

    function l() { return b.navigator.msPointerEnabled } var m, n, o;
    m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function() { var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0; for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function() { var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0; for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f) } }, { filter: ["width", "items", "settings"], run: function() { var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" }; if (this.$stage.css(e), e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) { return a > 1 }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e) } }, { filter: ["width", "items", "settings"], run: function(a) { a.current && this.reset(this.$stage.children().index(a.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], e.prototype.initialize = function() { if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var b, c, e; if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1 }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })) }, e.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {} }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed") }, e.prototype.eventsCall = function() { this.e._onDragStart = a.proxy(function(a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function(a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function(a) { this.onDragEnd(a) }, this), this.e._onResize = a.proxy(function(a) { this.onResize(a) }, this), this.e._transitionEnd = a.proxy(function(a) { this.transitionEnd(a) }, this), this.e._preventClick = a.proxy(function(a) { this.preventClick(a) }, this) }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, e.prototype.eventsRouter = function(a) { var b = a.type; "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a) }, e.prototype.internalEvents = function() { var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this)) }, e.prototype.onDragStart = function(d) { var e, g, h, i; if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1; if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) { this.eventsRouter(a) }, this)) }, e.prototype.onDragMove = function(a) { var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, e.prototype.onDragEnd = function(b) { var d, e, f; if (this.state.isTouch) { if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents") } }, e.prototype.removeClick = function(c) { this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() { a(c).off("click.preventClick") }, 300) }, e.prototype.preventClick = function(b) { b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick") }, e.prototype.getTransformProperty = function() { var a, c; return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12] }, e.prototype.closest = function(b) { var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates(); return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) { return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c }, e.prototype.animate = function(b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b + "px" }) : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(a) { this._invalidated[a] = !0 }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(b, c) { var e = c ? this._items.length : this._items.length + this._clones.length; return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b)) }, e.prototype.relative = function(a) { return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = 0,
            f = this.settings; if (a) return this._items.length - 1; if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else { if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position."; for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e }
        else b = this._items.length - f.items; return b }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c = null; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c) }, e.prototype.duration = function(a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(c, d) { if (this.settings.loop) { var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update() }, this), 30) } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.transitionEnd = function(a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, e.prototype.viewport = function() { var d; if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else { if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth } return d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(a, b) { b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", { content: a, position: b }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a, position: b }) }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.addTriggerableEvents = function() { var b = a.proxy(function(b, c) { return a.proxy(function(a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this);
        a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function(a, c) { this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this)) }, e.prototype.watchVisibility = function() {
        function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 }

        function d() { c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)) }, e.prototype.preloadAutoWidthImages = function(b) { var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) { e = a(h), f = new Image, f.onload = function() { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") }) }, e.prototype.destroy = function() { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd); for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d) { var e = { item: { count: this._items.length, index: this.current() } },
            f = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(g) }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function() { if (this.support3d = j(), this.support3d) { this.transformVendor = i(); var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" }
        this.state.orientation = b.orientation }, a.fn.owlCarousel = function(b) { return this.each(function() { a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b)) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b) { var c = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) { this.load(b) }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h) }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    c.Defaults = { lazyLoad: !1 }, c.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, c.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c }(window.Zepto || window.jQuery, window, document),
function(a) { var b = function(c) { this._core = c, this._handlers = { "initialized.owl.carousel": a.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, b.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, b.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b }(window.Zepto || window.jQuery, window, document),
function(a, b, c) { var d = function(b) { this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": a.proxy(function(a) { this._core.settings.video && !this.isInFullScreen() && a.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function() { this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) }, this) }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, d.prototype.fetch = function(a, b) { var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else { if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo" }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, d.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } })) }, d.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, d.prototype.play = function(b) { this._core.trigger("play", null, "video"), this._playing && this.stop(); var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height(); "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d) }, d.prototype.isInFullScreen = function() { var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0 }, d.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = d }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) { this.play(b, c) }, this),
            "stop.owl.autoplay": a.proxy(function() { this.stop() }, this),
            "mouseover.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this),
            "mouseleave.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, d.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, d.prototype.play = function() { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, d.prototype.stop = function() { b.clearInterval(this.interval) }, d.prototype.pause = function() { b.clearInterval(this.interval) }, d.prototype.destroy = function() { var a, c;
        b.clearInterval(this.interval); for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) { "use strict"; var b = function(c) { this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": a.proxy(function(b) { this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) { this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "change.owl.carousel": a.proxy(function(a) { if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) { var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value } }, this), "changed.owl.carousel": a.proxy(function(a) { "position" == a.property.name && this.draw() }, this), "refreshed.owl.carousel": a.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers) };
    b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function() { var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) { var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed) }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() { this.prev(d.navSpeed) }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() { this.next(d.navSpeed) }, this)); for (c in this._overrides) this._core[c] = a.proxy(this[c], this) }, b.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function() { var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items; if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this._core.mergers(this._core.relative(a)) }, b.prototype.draw = function() { var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current())); if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) { if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) { for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d) } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active") }
        this._controls.$indicators.toggle(e.dots) }, b.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) } }, b.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, function(a) { return a.start <= b && a.end >= b }).pop() }, b.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, b.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, b.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, b.prototype.to = function(b, c, d) { var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b }(window.Zepto || window.jQuery, window, document),
function(a, b) { "use strict"; var c = function(d) { this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function() { "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() { var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0; return a ? void this._core.to(d, !1, !0) : !1 }, this)) };
    c.Defaults = { URLhashListener: !1 }, c.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = c }(window.Zepto || window.jQuery, window, document);


/*  Magnific PopUp */

! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(a) { var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) { b.ev.on(o + a + p, c) },
        x = function(b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
        y = function(c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
        z = function(c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn },
        A = function() { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) },
        B = function() { var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1 };
    t.prototype = { constructor: t, init: function() { var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function(c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function() { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(),
                n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize();
                o && (n.marginRight = o) }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function() { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function(a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function() { var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function(c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function(a, c) { var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
            c || (c = {}); var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function(c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g)
                    if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function(a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function(c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function(b, c, d) { var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function() { if (void 0 === b.scrollbarSize) { var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function(c) { A(); var d = a(this); if ("string" == typeof c)
            if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline",
        G = function() { E && (D.after(E.addClass(C)).detach(), E = null) };
    a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { b.types.push(F), w(h + "." + F, function() { G() }) }, getInline: function(c, d) { if (G(), c.src) { var e = b.st.inline,
                        f = a(c.src); if (f.length) { var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax",
        J = function() { H && a(document.body).removeClass(H) },
        K = function() { J(), b.req && b.req.abort() };
    a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function(c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function(d, e, f) { var g = { data: d, xhr: f };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function() { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function(c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" };
    a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function() { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function() { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function(a) { var c = 0,
                    d = a.img[0],
                    e = function(f) { L && clearInterval(L), L = setInterval(function() { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                e(1) }, getImage: function(c, d) { var e = 0,
                    f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                    g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                    h = b.st.image,
                    i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function() { var a, c = b.st.zoom,
                    d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration,
                        j = function(a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b },
                        k = function() { b.content.css("visibility", "visible") };
                    w("BuildControls" + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function() { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return;
                                f = j(a) }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16) } }), w(h + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function() { return "image" === b.currItem.type }, _getItemToZoom: function() { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function(c) { var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe",
        Q = "//about:blank",
        R = function(a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } };
    a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { b.types.push(P), w("BeforeChange", function(a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function() { R() }) }, getIframe: function(c, d) { var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function(a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a },
        T = function(a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
    a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var c = b.st.gallery,
                    e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function(a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function(a, d, e, f) { var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function() { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() { b.prev() }), f.click(function() { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function() { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function() { var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a) }, _preloadItem: function(c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina";
    a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a) { return a.src.replace(/\.\w+$/, function(a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function(b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });

/* Isotope PACKAGED */

(function(t) {
    function e() {}

    function i(t) {
        function i(e) { e.prototype.option || (e.prototype.option = function(e) { t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)) }) }

        function n(e, i) { t.fn[e] = function(n) { if ("string" == typeof n) { for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) { var p = this[a],
                            h = t.data(p, e); if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) { var f = h[n].apply(h, s); if (void 0 !== f) return f } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'") } return this } return this.each(function() { var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o)) }) } } if (t) { var r = "undefined" == typeof console ? e : function(t) { console.error(t) }; return t.bridget = function(t, e) { i(e), n(t, e) }, t.bridget } } var o = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery) })(window),
function(t) {
    function e(e) { var i = t.event; return i.target = i.target || i.srcElement || e, i } var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) { t.addEventListener(e, i, !1) } : i.attachEvent && (o = function(t, i, o) { t[i + o] = o.handleEvent ? function() { var i = e(t);
            o.handleEvent.call(o, i) } : function() { var i = e(t);
            o.call(t, i) }, t.attachEvent("on" + i, t[i + o]) }); var n = function() {};
    i.removeEventListener ? n = function(t, e, i) { t.removeEventListener(e, i, !1) } : i.detachEvent && (n = function(t, e, i) { t.detachEvent("on" + e, t[e + i]); try { delete t[e + i] } catch (o) { t[e + i] = void 0 } }); var r = { bind: o, unbind: n }; "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r }(this),
function(t) {
    function e(t) { "function" == typeof t && (e.isReady ? t() : s.push(t)) }

    function i(t) { var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || o() }

    function o() { e.isReady = !0; for (var t = 0, i = s.length; i > t; t++) { var o = s[t];
            o() } }

    function n(n) { return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e } var r = t.document,
        s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie) }(window),
function() {
    function t() {}

    function e(t, e) { for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1 }

    function i(t) { return function() { return this[t].apply(this, arguments) } } var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) { var e, i, o = this._getEvents(); if (t instanceof RegExp) { e = {}; for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]) } else e = o[t] || (o[t] = []); return e }, o.flattenListeners = function(t) { var e, i = []; for (e = 0; t.length > e; e += 1) i.push(t[e].listener); return i }, o.getListenersAsObject = function(t) { var e, i = this.getListeners(t); return i instanceof Array && (e = {}, e[t] = i), e || i }, o.addListener = function(t, i) { var o, n = this.getListenersAsObject(t),
            r = "object" == typeof i; for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : { listener: i, once: !1 }); return this }, o.on = i("addListener"), o.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, o.once = i("addOnceListener"), o.defineEvent = function(t) { return this.getListeners(t), this }, o.defineEvents = function(t) { for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]); return this }, o.removeListener = function(t, i) { var o, n, r = this.getListenersAsObject(t); for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1)); return this }, o.off = i("removeListener"), o.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, o.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, o.manipulateListeners = function(t, e, i) { var o, n, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners; if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;) r.call(this, e, i[o]);
        else
            for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n)); return this }, o.removeEvent = function(t) { var e, i = typeof t,
            o = this._getEvents(); if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events; return this }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) { var i, o, n, r, s = this.getListenersAsObject(t); for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this }, o.trigger = i("emitEvent"), o.emit = function(t) { var e = Array.prototype.slice.call(arguments, 1); return this.emitEvent(t, e) }, o.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, o._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, o._getEvents = function() { return this._events || (this._events = {}) }, t.noConflict = function() { return n.EventEmitter = r, t }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t }.call(this),
    function(t) {
        function e(t) { if (t) { if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1); for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e } } var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() { return e }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e }(window),
    function(t) {
        function e(t) { var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e); return i && e }

        function i() {}

        function o() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = s.length; i > e; e++) { var o = s[e];
                t[o] = 0 } return t }

        function n(i) {
            function n() { if (!d) { d = !0; var o = t.getComputedStyle; if (p = function() { var t = o ? function(t) { return o(t, null) } : function(t) { return t.currentStyle }; return function(e) { var i = t(e); return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i } }(), h = i("boxSizing")) { var n = document.createElement("div");
                        n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box"; var s = document.body || document.documentElement;
                        s.appendChild(n); var a = p(n);
                        f = 200 === e(a.width), s.removeChild(n) } } }

            function a(t) { if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) { var i = p(t); if ("none" === i.display) return o(); var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight; for (var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) { var c = s[d],
                            y = i[c];
                        y = u(t, y); var m = parseFloat(y);
                        r[c] = isNaN(m) ? 0 : m } var g = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        _ = r.marginLeft + r.marginRight,
                        I = r.marginTop + r.marginBottom,
                        L = r.borderLeftWidth + r.borderRightWidth,
                        z = r.borderTopWidth + r.borderBottomWidth,
                        b = a && f,
                        x = e(i.width);
                    x !== !1 && (r.width = x + (b ? 0 : g + L)); var S = e(i.height); return S !== !1 && (r.height = S + (b ? 0 : v + z)), r.innerWidth = r.width - (g + L), r.innerHeight = r.height - (v + z), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r } }

            function u(e, i) { if (t.getComputedStyle || -1 === i.indexOf("%")) return i; var o = e.style,
                    n = o.left,
                    r = e.runtimeStyle,
                    s = r && r.left; return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i } var p, h, f, d = !1; return a } var r = "undefined" == typeof console ? i : function(t) { console.error(t) },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty) }(window),
    function(t) {
        function e(t, e) { return t[s](e) }

        function i(t) { if (!t.parentNode) { var e = document.createDocumentFragment();
                e.appendChild(t) } }

        function o(t, e) { i(t); for (var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)
                if (o[n] === t) return !0;
            return !1 }

        function n(t, o) { return i(t), e(t, o) } var r, s = function() { if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) { var n = e[i],
                    r = n + "MatchesSelector"; if (t[r]) return r } }(); if (s) { var a = document.createElement("div"),
                u = e(a, "div");
            r = u ? e : n } else r = o; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() { return r }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r }(Element.prototype),
    function(t) {
        function e(t, e) { for (var i in e) t[i] = e[i]; return t }

        function i(t) { for (var e in t) return !1; return e = null, !0 }

        function o(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }

        function n(t, n, r) {
            function a(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } var u = r("transition"),
                p = r("transform"),
                h = u && p,
                f = !!r("perspective"),
                d = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[u],
                l = ["transform", "transition", "transitionDuration", "transitionProperty"],
                c = function() { for (var t = {}, e = 0, i = l.length; i > e; e++) { var o = l[e],
                            n = r(o);
                        n && n !== o && (t[o] = n) } return t }();
            e(a.prototype, t.prototype), a.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, a.prototype.handleEvent = function(t) { var e = "on" + t.type;
                this[e] && this[e](t) }, a.prototype.getSize = function() { this.size = n(this.element) }, a.prototype.css = function(t) { var e = this.element.style; for (var i in t) { var o = c[i] || i;
                    e[o] = t[i] } }, a.prototype.getPosition = function() { var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    o = e.isOriginTop,
                    n = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[o ? "top" : "bottom"], 10);
                n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r; var a = this.layout.size;
                n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r }, a.prototype.layoutPosition = function() { var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this]) }; var y = f ? function(t, e) { return "translate3d(" + t + "px, " + e + "px, 0)" } : function(t, e) { return "translate(" + t + "px, " + e + "px)" };
            a.prototype._transitionTo = function(t, e) { this.getPosition(); var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = n === this.position.x && r === this.position.y; if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0; var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({ to: p, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, a.prototype.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, a.prototype._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, a.prototype._transition = function(t) { if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0; var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var o = this.element.offsetHeight;
                    o = null }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var m = p && o(p) + ",opacity";
            a.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: m, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(d, this, !1)) }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, a.prototype.onotransitionend = function(t) { this.ontransitionend(t) }; var g = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
            a.prototype.ontransitionend = function(t) { if (t.target === this.element) { var e = this._transn,
                        o = g[t.propertyName] || t.propertyName; if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) { var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o] }
                    this.emitEvent("transitionEnd", [this]) } }, a.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1 }, a.prototype._removeStyles = function(t) { var e = {}; for (var i in t) e[i] = "";
                this.css(e) }; var v = { transitionProperty: "", transitionDuration: "" }; return a.prototype.removeTransitionStyles = function() { this.css(v) }, a.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]) }, a.prototype.remove = function() { if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0; var t = this;
                this.on("transitionEnd", function() { return t.removeElem(), !0 }), this.hide() }, a.prototype.reveal = function() { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options;
                this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0 }) }, a.prototype.hide = function() { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options;
                this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: { opacity: function() { this.isHidden && this.css({ display: "none" }) } } }) }, a.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, a } var r = t.getComputedStyle,
            s = r ? function(t) { return r(t, null) } : function(t) { return t.currentStyle }; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty)) }(window),
    function(t) {
        function e(t, e) { for (var i in e) t[i] = e[i]; return t }

        function i(t) { return "[object Array]" === f.call(t) }

        function o(t) { var e = []; if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t); return e }

        function n(t, e) { var i = l(e, t); - 1 !== i && e.splice(i, 1) }

        function r(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() }

        function s(i, s, f, l, c, y) {
            function m(t, i) { if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i); var o = ++g;
                this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout() } var g = 0,
                v = {}; return m.namespace = "outlayer", m.Item = y, m.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, e(m.prototype, f.prototype), m.prototype.option = function(t) { e(this.options, t) }, m.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, m.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, m.prototype._itemize = function(t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) { var s = e[n],
                        a = new i(s, this);
                    o.push(a) } return o }, m.prototype._filterFindItemElements = function(t) { t = o(t); for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) { var s = t[n]; if (d(s))
                        if (e) { c(s, e) && i.push(s); for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u]) } else i.push(s) } return i }, m.prototype.getItemElements = function() { for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element); return t }, m.prototype.layout = function() { this._resetLayout(), this._manageStamps(); var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0 }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() { this.getSize() }, m.prototype.getSize = function() { this.size = l(this.element) }, m.prototype._getMeasurement = function(t, e) { var i, o = this.options[t];
                o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0 }, m.prototype.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, m.prototype._getItemsForLayout = function(t) { for (var e = [], i = 0, o = t.length; o > i; i++) { var n = t[i];
                    n.isIgnored || e.push(n) } return e }, m.prototype._layoutItems = function(t, e) {
                function i() { o.emitEvent("layoutComplete", [o, t]) } var o = this; if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i); for (var n = [], r = 0, s = t.length; s > r; r++) { var a = t[r],
                        u = this._getItemLayoutPosition(a);
                    u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u) }
                this._processLayoutQueue(n) }, m.prototype._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, m.prototype._processLayoutQueue = function(t) { for (var e = 0, i = t.length; i > e; e++) { var o = t[e];
                    this._positionItem(o.item, o.x, o.y, o.isInstant) } }, m.prototype._positionItem = function(t, e, i, o) { o ? t.goTo(e, i) : t.moveTo(e, i) }, m.prototype._postLayout = function() { this.resizeContainer() }, m.prototype.resizeContainer = function() { if (this.options.isResizingContainer) { var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)) } }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) { if (void 0 !== t) { var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, m.prototype._itemsOn = function(t, e, i) {
                function o() { return n++, n === r && i.call(s), !0 } for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) { var p = t[a];
                    p.on(e, o) } }, m.prototype.ignore = function(t) { var e = this.getItem(t);
                e && (e.isIgnored = !0) }, m.prototype.unignore = function(t) { var e = this.getItem(t);
                e && delete e.isIgnored }, m.prototype.stamp = function(t) { if (t = this._find(t)) { this.stamps = this.stamps.concat(t); for (var e = 0, i = t.length; i > e; e++) { var o = t[e];
                        this.ignore(o) } } }, m.prototype.unstamp = function(t) { if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) { var o = t[e];
                        n(o, this.stamps), this.unignore(o) } }, m.prototype._find = function(t) { return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0 }, m.prototype._manageStamps = function() { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var t = 0, e = this.stamps.length; e > t; t++) { var i = this.stamps[t];
                        this._manageStamp(i) } } }, m.prototype._getBoundingRect = function() { var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) { var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    o = l(t),
                    n = { left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom }; return n }, m.prototype.handleEvent = function(t) { var e = "on" + t.type;
                this[e] && this[e](t) }, m.prototype.bindResize = function() { this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0) }, m.prototype.unbindResize = function() { this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1 }, m.prototype.onresize = function() {
                function t() { e.resize(), delete e.resizeTimeout }
                this.resizeTimeout && clearTimeout(this.resizeTimeout); var e = this;
                this.resizeTimeout = setTimeout(t, 100) }, m.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, m.prototype.needsResizeLayout = function() { var t = l(this.element),
                    e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, m.prototype.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, m.prototype.appended = function(t) { var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e)) }, m.prototype.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, m.prototype.reveal = function(t) { var e = t && t.length; if (e)
                    for (var i = 0; e > i; i++) { var o = t[i];
                        o.reveal() } }, m.prototype.hide = function(t) { var e = t && t.length; if (e)
                    for (var i = 0; e > i; i++) { var o = t[i];
                        o.hide() } }, m.prototype.getItem = function(t) { for (var e = 0, i = this.items.length; i > e; e++) { var o = this.items[e]; if (o.element === t) return o } }, m.prototype.getItems = function(t) { if (t && t.length) { for (var e = [], i = 0, o = t.length; o > i; i++) { var n = t[i],
                            r = this.getItem(n);
                        r && e.push(r) } return e } }, m.prototype.remove = function(t) { t = o(t); var e = this.getItems(t); if (e && e.length) { this._itemsOn(e, "remove", function() { this.emitEvent("removeComplete", [this, e]) }); for (var i = 0, r = e.length; r > i; i++) { var s = e[i];
                        s.remove(), n(s, this.items) } } }, m.prototype.destroy = function() { var t = this.element.style;
                t.height = "", t.position = "", t.width = ""; for (var e = 0, i = this.items.length; i > e; e++) { var o = this.items[e];
                    o.destroy() }
                this.unbindResize(); var n = this.element.outlayerGUID;
                delete v[n], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace) }, m.data = function(t) { var e = t && t.outlayerGUID; return e && v[e] }, m.create = function(t, i) {
                function o() { m.apply(this, arguments) } return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() { y.apply(this, arguments) }, o.Item.prototype = new y, s(function() { for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) { var f, d = i[s],
                            l = d.getAttribute(n); try { f = l && JSON.parse(l) } catch (c) { u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c); continue } var y = new o(d, f);
                        p && p.data(d, t, y) } }), p && p.bridget && p.bridget(t, o), o }, m.Item = y, m } var a = t.document,
            u = t.console,
            p = t.jQuery,
            h = function() {},
            f = Object.prototype.toString,
            d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) { return t instanceof HTMLElement } : function(t) { return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName },
            l = Array.prototype.indexOf ? function(t, e) { return t.indexOf(e) } : function(t, e) { for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1 }; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item) }(window),
    function(t) {
        function e(t) {
            function e() { t.Item.apply(this, arguments) }
            e.prototype = new t.Item, e.prototype._create = function() { this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {} }, e.prototype.updateSortData = function() { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData,
                        e = this.layout._sorters; for (var i in t) { var o = e[i];
                        this.sortData[i] = o(this.element, this) } } }; var i = e.prototype.destroy; return e.prototype.destroy = function() { i.apply(this, arguments), this.css({ display: "" }) }, e } "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window),
    function(t) {
        function e(t, e) {
            function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } return function() {
                function t(t) { return function() { return e.prototype[t].apply(this.isotope, arguments) } } for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) { var s = o[n];
                    i.prototype[s] = t(s) } }(), i.prototype.needsVerticalResizeLayout = function() { var e = t(this.isotope.element),
                    i = this.isotope.size && e; return i && e.innerHeight !== this.isotope.size.innerHeight }, i.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, i.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, i.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, i.prototype.getSegmentSize = function(t, e) { var i = t + e,
                    o = "outer" + e; if (this._getMeasurement(i, o), !this[i]) { var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e] } }, i.prototype.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, i.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, i.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
                function o() { i.apply(this, arguments) } return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o }, i } "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window),
    function(t) {
        function e(t, e) { var o = t.create("masonry"); return o.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(); var t = this.cols; for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0 }, o.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1) }, o.prototype.getContainerWidth = function() { var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth }, o.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth,
                    o = e && 1 > e ? "round" : "ceil",
                    n = Math[o](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols); for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = { x: this.columnWidth * a, y: s }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p; return u }, o.prototype._getColGroup = function(t) { if (2 > t) return this.colYs; for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) { var n = this.colYs.slice(o, o + t);
                    e[o] = Math.max.apply(Math, n) } return e }, o.prototype._manageStamp = function(t) { var i = e(t),
                    o = this._getElementOffset(t),
                    n = this.options.isOriginLeft ? o.left : o.right,
                    r = n + i.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s); var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a); for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p]) }, o.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t }, o.prototype._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, o.prototype.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t !== this.containerWidth }, o } var i = Array.prototype.indexOf ? function(t, e) { return t.indexOf(e) } : function(t, e) { for (var i = 0, o = t.length; o > i; i++) { var n = t[i]; if (n === e) return i } return -1 }; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window),
    function(t) {
        function e(t, e) { for (var i in e) t[i] = e[i]; return t }

        function i(t, i) { var o = t.create("masonry"),
                n = o.prototype._getElementOffset,
                r = o.prototype.layout,
                s = o.prototype._getMeasurement;
            e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s; var a = o.prototype.measureColumns;
            o.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, a.call(this) }; var u = o.prototype._manageStamp; return o.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments) }, o } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry) }(window),
    function(t) {
        function e(t) { var e = t.create("fitRows"); return e.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, e.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var o = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o }, e.prototype._getContainerSize = function() { return { height: this.maxY } }, e } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window),
    function(t) {
        function e(t) { var e = t.create("vertical", { horizontalAlignment: 0 }); return e.prototype._resetLayout = function() { this.y = 0 }, e.prototype._getItemLayoutPosition = function(t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, e.prototype._getContainerSize = function() { return { height: this.y } }, e } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window),
    function(t) {
        function e(t, e) { for (var i in e) t[i] = e[i]; return t }

        function i(t) { return "[object Array]" === h.call(t) }

        function o(t) { var e = []; if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t); return e }

        function n(t, e) { var i = f(e, t); - 1 !== i && e.splice(i, 1) }

        function r(t, i, r, u, h) {
            function f(t, e) { return function(i, o) { for (var n = 0, r = t.length; r > n; n++) { var s = t[n],
                            a = i.sortData[s],
                            u = o.sortData[s]; if (a > u || u > a) { var p = void 0 !== e[s] ? e[s] : e,
                                h = p ? 1 : -1; return (a > u ? 1 : -1) * h } } return 0 } }
            var d = t.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
            d.Item = u, d.LayoutMode = h, d.prototype._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var e in h.modes) this._initLayoutMode(e) }, d.prototype.reloadItems = function() { this.itemGUID = 0, t.prototype.reloadItems.call(this) }, d.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) { var n = e[i];
                    n.id = this.itemGUID++ }
                return this._updateItemsSortData(e), e
            }, d.prototype._initLayoutMode = function(t) { var i = h.modes[t],
                    o = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this) }, d.prototype.layout = function() { return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0) }, d.prototype._layout = function() { var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, d.prototype.arrange = function(t) { this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout() }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() { var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = t, t }, d.prototype._filter = function(t) {
                function e() { f.reveal(n), f.hide(r) } var i = this.options.filter;
                i = i || "*"; for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) { var p = t[a]; if (!p.isIgnored) { var h = s(p);
                        h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p) } } var f = this; return this._isInstant ? this._noTransition(e) : e(), o }, d.prototype._getFilterTest = function(t) { return s && this.options.isJQueryFiltering ? function(e) { return s(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return r(e.element, t) } }, d.prototype.updateSortData = function(t) { var e;
                t ? (t = o(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, d.prototype._getSorters = function() { var t = this.options.getSortData; for (var e in t) { var i = t[e];
                    this._sorters[e] = l(i) } }, d.prototype._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && e > i; i++) { var o = t[i];
                    o.updateSortData() } };
            var l = function() {
                function t(t) { if ("string" != typeof t) return t; var i = a(t).split(" "),
                        o = i[0],
                        n = o.match(/^\[(.+)\]$/),
                        r = n && n[1],
                        s = e(r, o),
                        u = d.sortDataParsers[i[1]]; return t = u ? function(t) { return t && u(s(t)) } : function(t) { return t && s(t) } }

                function e(t, e) { var i; return i = t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && p(i) } } return t }();
            d.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, d.prototype._sort = function() { var t = this.options.sortBy; if (t) { var e = [].concat.apply(t, this.sortHistory),
                        i = f(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t) } }, d.prototype._mode = function() { var t = this.options.layoutMode,
                    e = this.modes[t]; if (!e) throw Error("No layout mode: " + t); return e.options = this.options[t], e }, d.prototype._resetLayout = function() { t.prototype._resetLayout.call(this), this._mode()._resetLayout() }, d.prototype._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, d.prototype._manageStamp = function(t) { this._mode()._manageStamp(t) }, d.prototype._getContainerSize = function() { return this._mode()._getContainerSize() }, d.prototype.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, d.prototype.appended = function(t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i) } }, d.prototype.prepended = function(t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(); var o = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems) } }, d.prototype._filterRevealAdded = function(t) { var e = this._noTransition(function() { return this._filter(t) }); return this.layoutItems(e, !0), this.reveal(e), t }, d.prototype.insert = function(t) { var e = this.addItems(t); if (e.length) { var i, o, n = e.length; for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element); var r = this._filter(e); for (this._noTransition(function() { this.hide(r) }), i = 0; n > i; i++) e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r) } };
            var c = d.prototype.remove;
            return d.prototype.remove = function(t) { t = o(t); var e = this.getItems(t); if (c.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) { var s = e[i];
                        n(s, this.filteredItems) } }, d.prototype.shuffle = function() { for (var t = 0, e = this.items.length; e > t; t++) { var i = this.items[t];
                    i.sortData.random = Math.random() }
                this.options.sortBy = "random", this._sort(), this._layout() }, d.prototype._noTransition = function(t) { var e = this.options.transitionDuration;
                this.options.transitionDuration = 0; var i = t.call(this); return this.options.transitionDuration = e, i }, d.prototype.getFilteredItemElements = function() { for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element); return t }, d
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            u = document.documentElement,
            p = u.textContent ? function(t) { return t.textContent } : function(t) { return t.innerText },
            h = Object.prototype.toString,
            f = Array.prototype.indexOf ? function(t, e) { return t.indexOf(e) } : function(t, e) { for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1 };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window);


/*  Packery layout mode PACKAGED */

! function(a) {
    function b(a) { return new RegExp("(^|\\s+)" + a + "(\\s+|$)") }

    function c(a, b) { var c = d(a, b) ? f : e;
        c(a, b) } var d, e, f; "classList" in document.documentElement ? (d = function(a, b) { return a.classList.contains(b) }, e = function(a, b) { a.classList.add(b) }, f = function(a, b) { a.classList.remove(b) }) : (d = function(a, c) { return b(c).test(a.className) }, e = function(a, b) { d(a, b) || (a.className = a.className + " " + b) }, f = function(a, c) { a.className = a.className.replace(b(c), " ") }); var g = { hasClass: d, addClass: e, removeClass: f, toggleClass: c, has: d, add: e, remove: f, toggle: c }; "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g }(window),
function(a) {
    function b() {
        function a(b) { for (var c in a.defaults) this[c] = a.defaults[c]; for (c in b) this[c] = b[c] } return c.Rect = a, a.defaults = { x: 0, y: 0, width: 0, height: 0 }, a.prototype.contains = function(a) { var b = a.width || 0,
                c = a.height || 0; return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c }, a.prototype.overlaps = function(a) { var b = this.x + this.width,
                c = this.y + this.height,
                d = a.x + a.width,
                e = a.y + a.height; return this.x < d && b > a.x && this.y < e && c > a.y }, a.prototype.getMaximalFreeRects = function(b) { if (!this.overlaps(b)) return !1; var c, d = [],
                e = this.x + this.width,
                f = this.y + this.height,
                g = b.x + b.width,
                h = b.y + b.height; return this.y < b.y && (c = new a({ x: this.x, y: this.y, width: this.width, height: b.y - this.y }), d.push(c)), e > g && (c = new a({ x: g, y: this.y, width: e - g, height: this.height }), d.push(c)), f > h && (c = new a({ x: this.x, y: h, width: this.width, height: f - h }), d.push(c)), this.x < b.x && (c = new a({ x: this.x, y: this.y, width: b.x - this.x, height: this.height }), d.push(c)), d }, a.prototype.canFit = function(a) { return this.width >= a.width && this.height >= a.height }, a } var c = a.Packery = function() {}; "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b()) }(window),
function(a) {
    function b(a) {
        function b(a, b, c) { this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset() }
        b.prototype.reset = function() { this.spaces = [], this.newSpaces = []; var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
            this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight }, b.prototype.pack = function(a) { for (var b = 0, c = this.spaces.length; c > b; b++) { var d = this.spaces[b]; if (d.canFit(a)) { this.placeInSpace(a, d); break } } }, b.prototype.placeInSpace = function(a, b) { a.x = b.x, a.y = b.y, this.placed(a) }, b.prototype.placed = function(a) { for (var b = [], c = 0, d = this.spaces.length; d > c; c++) { var e = this.spaces[c],
                    f = e.getMaximalFreeRects(a);
                f ? b.push.apply(b, f) : b.push(e) }
            this.spaces = b, this.mergeSortSpaces() }, b.prototype.mergeSortSpaces = function() { b.mergeRects(this.spaces), this.spaces.sort(this.sorter) }, b.prototype.addSpace = function(a) { this.spaces.push(a), this.mergeSortSpaces() }, b.mergeRects = function(a) { for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; if (d) { var e = a.slice(0);
                    e.splice(b, 1); for (var f = 0, g = 0, h = e.length; h > g; g++) { var i = e[g],
                            j = b > g ? 0 : 1;
                        d.contains(i) && (a.splice(g + j - f, 1), f++) } } } return a }; var c = { downwardLeftToRight: function(a, b) { return a.y - b.y || a.x - b.x }, rightwardTopToBottom: function(a, b) { return a.x - b.x || a.y - b.y } }; return b } if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports) module.exports = b(require("./rect"));
    else { var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect) } }(window),
function(a) {
    function b(a, b, c) { var d = a("transform"),
            e = function() { b.Item.apply(this, arguments) };
        e.prototype = new b.Item; var f = e.prototype._create; return e.prototype._create = function() { f.call(this), this.rect = new c, this.placeRect = new c }, e.prototype.dragStart = function() { this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1 }, e.prototype.dragMove = function(a, b) { this.didDrag = !0; var c = this.layout.size;
            a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b) }, e.prototype.dragStop = function() { this.getPosition(); var a = this.position.x !== this.placeRect.x,
                b = this.position.y !== this.placeRect.y;
            this.needsPositioning = a || b, this.didDrag = !1 }, e.prototype.positionPlaceRect = function(a, b, c) { this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c) }, e.prototype.getPlaceRectCoord = function(a, b, c) { var d = b ? "Width" : "Height",
                e = this.size["outer" + d],
                f = this.layout[b ? "columnWidth" : "rowHeight"],
                g = this.layout.size["inner" + d];
            b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter)); var h; if (f) { f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f); var i;
                i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil"; var j = Math[i](g / f);
                j -= Math.ceil(e / f), h = j } else h = g - e; return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a) }, e.prototype.copyPlaceRectPosition = function() { this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y }, e.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]) }, e } "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect) }(window),
function(a) {
    function b(a, b, c, d, e, f) {
        function g(a, b) { return a.position.y - b.position.y || a.position.x - b.position.x }

        function h(a, b) { return a.position.x - b.position.x || a.position.y - b.position.y }
        d.prototype.canFit = function(a) { return this.width >= a.width - 1 && this.height >= a.height - 1 }; var i = c.create("packery"); return i.Item = f, i.prototype._create = function() { c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped); var a = this;
            this.handleDraggabilly = { dragStart: function(b) { a.itemDragStart(b.element) }, dragMove: function(b) { a.itemDragMove(b.element, b.position.x, b.position.y) }, dragEnd: function(b) { a.itemDragEnd(b.element) } }, this.handleUIDraggable = { start: function(b) { a.itemDragStart(b.currentTarget) }, drag: function(b, c) { a.itemDragMove(b.currentTarget, c.position.left, c.position.top) }, stop: function(b) { a.itemDragEnd(b.currentTarget) } } }, i.prototype._resetLayout = function() { this.getSize(), this._getMeasurements(); var a = this.packer;
            this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0 }, i.prototype._getMeasurements = function() { this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width") }, i.prototype._getItemLayoutPosition = function(a) { return this._packItem(a), a.rect }, i.prototype._packItem = function(a) { this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect) }, i.prototype._setMaxXY = function(a) { this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY) }, i.prototype._setRectSize = function(a, c) { var d = b(a),
                e = d.outerWidth,
                f = d.outerHeight;
            (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height) }, i.prototype._applyGridGutter = function(a, b) { if (!b) return a + this.gutter;
            b += this.gutter; var c = a % b,
                d = c && 1 > c ? "round" : "ceil"; return a = Math[d](a / b) * b }, i.prototype._getContainerSize = function() { return this.options.isHorizontal ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter } }, i.prototype._manageStamp = function(a) { var b, c = this.getItem(a); if (c && c.isPlacing) b = c.placeRect;
            else { var e = this._getElementOffset(a);
                b = new d({ x: this.options.isOriginLeft ? e.left : e.right, y: this.options.isOriginTop ? e.top : e.bottom }) }
            this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b) }, i.prototype.sortItemsByPosition = function() { var a = this.options.isHorizontal ? h : g;
            this.items.sort(a) }, i.prototype.fit = function(a, b, c) { var d = this.getItem(a);
            d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition()) }, i.prototype._bindFitEvents = function(a) {
            function b() { d++, 2 === d && c.emitEvent("fitComplete", [c, a]) } var c = this,
                d = 0;
            a.on("layout", function() { return b(), !0 }), this.on("layoutComplete", function() { return b(), !0 }) }, i.prototype.resize = function() { var a = b(this.element),
                c = this.size && a,
                d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
            c && a[d] === this.size[d] || this.layout() }, i.prototype.itemDragStart = function(a) { this.stamp(a); var b = this.getItem(a);
            b && b.dragStart() }, i.prototype.itemDragMove = function(a, b, c) {
            function d() { f.layout(), delete f.dragTimeout } var e = this.getItem(a);
            e && e.dragMove(b, c); var f = this;
            this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40) }, i.prototype.clearDragTimeout = function() { this.dragTimeout && clearTimeout(this.dragTimeout) }, i.prototype.itemDragEnd = function(b) { var c, d = this.getItem(b); if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
            a.add(d.element, "is-positioning-post-drag"); var e = this._getDragEndLayoutComplete(b, d);
            d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout() }, i.prototype._getDragEndLayoutComplete = function(b, c) { var d = c && c.needsPositioning,
                e = 0,
                f = d ? 2 : 1,
                g = this; return function() { return e++, e !== f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [g, c]), !0) } }, i.prototype.bindDraggabillyEvents = function(a) { a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd) }, i.prototype.bindUIDraggableEvents = function(a) { a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop) }, i.Rect = d, i.Packer = e, i } "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item) }(window),
function(a) {
    function b(a, b) { for (var c in b) a[c] = b[c]; return a }

    function c(a, c, d) { var e = a.create("packery"),
            f = e.prototype._getElementOffset,
            g = e.prototype._getMeasurement;
        b(e.prototype, c.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g; var h = e.prototype._resetLayout;
        e.prototype._resetLayout = function() { this.packer = this.packer || new c.Packer, h.apply(this, arguments) }; var i = e.prototype._getItemLayoutPosition;
        e.prototype._getItemLayoutPosition = function(a) { return a.rect = a.rect || new c.Rect, i.call(this, a) }; var j = e.prototype._manageStamp; return e.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments) }, e.prototype.needsResizeLayout = function() { var a = d(this.element),
                b = this.size && a,
                c = this.options.isHorizontal ? "innerHeight" : "innerWidth"; return b && a[c] !== this.size[c] }, e } "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], c) : "object" == typeof exports ? module.exports = c(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : c(a.Isotope.LayoutMode, a.Packery, a.getSize) }(window);

/*  Collage Plus */

! function(t) { t.fn.collagePlus = function(e) {
        function a(e, a, l, d) { for (var n = l.padding * (e.length - 1) + e.length * e[0][3], r = l.albumWidth - n, h = r / (a - n), o = n, s = a < l.albumWidth ? !0 : !1, g = 0; g < e.length; g++) { var f = t(e[g][0]),
                    c = Math.floor(e[g][1] * h),
                    u = Math.floor(e[g][2] * h),
                    m = !!(g < e.length - 1);
                l.allowPartialLastRow === !0 && s === !0 && (c = e[g][1], u = e[g][2]), o += c, !m && o < l.albumWidth && (l.allowPartialLastRow === !0 && s === !0 ? c = c : c += l.albumWidth - o), c--; var p = f.is("img") ? f : f.find("img");
                p.width(c), f.is("img") || f.width(c + e[g][3]), p.height(u), f.is("img") || f.height(u + e[g][4]), i(f, m, l), p.one("load", function(t) { return function() { if ("default" == l.effect) t.animate({ opacity: "1" }, { duration: l.fadeSpeed });
                        else { if ("vertical" == l.direction) var e = 10 >= d ? d : 10;
                            else var e = 9 >= g ? g + 1 : 10;
                            t.removeClass(function(t, e) { return (e.match(/\beffect-\S+/g) || []).join(" ") }), t.addClass(l.effect), t.addClass("effect-duration-" + e) } } }(f)).each(function() { this.complete && t(this).trigger("load") }) } }

        function i(t, e, a) { var i = { "margin-bottom": a.padding + "px", "margin-right": e ? a.padding + "px" : "0px", display: a.display, "vertical-align": "bottom", overflow: "hidden" }; return t.css(i) }

        function l(e) { $img = t(e); var a = new Array; return a.w = parseFloat($img.css("border-left-width")) + parseFloat($img.css("border-right-width")), a.h = parseFloat($img.css("border-top-width")) + parseFloat($img.css("border-bottom-width")), a } return this.each(function() { var i = 0,
                d = [],
                n = 1,
                r = t(this);
            t.fn.collagePlus.defaults.albumWidth = r.width(), t.fn.collagePlus.defaults.padding = parseFloat(r.css("padding-left")), t.fn.collagePlus.defaults.images = r.children(); var h = t.extend({}, t.fn.collagePlus.defaults, e);
            h.images.each(function(e) { var r = t(this),
                    o = r.is("img") ? r : t(this).find("img"),
                    s = "undefined" != typeof o.data("width") ? o.data("width") : o.width(),
                    g = "undefined" != typeof o.data("height") ? o.data("height") : o.height(),
                    f = l(o);
                o.data("width", s), o.data("height", g); var c = Math.ceil(s / g * h.targetHeight),
                    u = Math.ceil(h.targetHeight);
                d.push([this, c, u, f.w, f.h]), i += c + f.w + h.padding, i > h.albumWidth && 0 != d.length && (a(d, i - h.padding, h, n), delete i, delete d, i = 0, d = [], n += 1), h.images.length - 1 == e && 0 != d.length && (a(d, i, h, n), delete i, delete d, i = 0, d = [], n += 1) }) }) }, t.fn.collagePlus.defaults = { targetHeight: 400, fadeSpeed: "fast", display: "inline-block", effect: "default", direction: "vertical", allowPartialLastRow: !1 } }(jQuery);