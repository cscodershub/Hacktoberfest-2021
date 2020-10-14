define("layouts/static-page", ["require", "exports", "module", "lib/layouts/page"], function(e, t, n) {
        var r = e("lib/layouts/page"),
            i = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setViews({
                        "l-main": ["views/pages/static", e]
                    })
                }
            })
    }),
    define("lib/layouts/page", ["require", "exports", "module", "lib/layout", "lib/layouts/page.css", "lib/layouts/page.tmpl"], function(e, t, n) {
        var r = e("lib/layout"),
            i = n.exports = r.extend({
                css: e("lib/layouts/page.css"),
                template: e("lib/layouts/page.tmpl")
            })
    }),
    define("views/pages/static", ["require", "exports", "module", "underscore", "vendor/static-content/client", "lib/helpers/title-helper", "config/error-messages", "models/exception", "lib/view", "lib/lingua", "views/pages/static.css"], function(e, t, n) {
        var r = e("underscore"),
            i = e("vendor/static-content/client").default,
            s = e("lib/helpers/title-helper"),
            o = e("config/error-messages"),
            u = e("models/exception"),
            a = e("lib/view"),
            f = e("lib/lingua").getLocale,
            l = n.exports = a.extend({
                template: !1,
                css: e("views/pages/static.css"),
                className: "staticPage sc-font-light",
                defaults: {
                    pageName: null
                },
                setup: function(e) {
                    var t = window.location.pathname.slice(1),
                        n = e.pageName;
                    this.fetchData(n)
                },
                fetchData: function(e) {
                    var t = new i({
                        baseUrl: "https://pages.soundcloud.com/",
                        appLocale: f()
                    });
                    t.retrieve(function(e, t) {
                        if (e) u.raise(r.extend(o.PAGE_NOT_FOUND, {
                            fatal: !0
                        }));
                        else {
                            this.el.innerHTML = t.html, s.set(t.title);
                            if (window.location.hash) {
                                var n = window.document.getElementById(window.location.hash.slice(1));
                                n && n.scrollIntoView(!0)
                            }
                        }
                    }.bind(this), e)
                }
            })
    }),
    define("lib/layouts/page.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".l-page{background:#f2f2f2;overflow:hidden}")), data = null
    }),
    define("lib/layouts/page.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {}, '<div class="l-page"> <div class="l-main"> </div>\n</div>\n'
        })
    }),
    function(e) {
        if (typeof module == "object" && typeof module.exports == "object") {
            var t = e(require, exports);
            t !== undefined && (module.exports = t)
        } else typeof define == "function" && define.amd &&
            define("vendor/static-content/client", ["require", "exports"], e)
    }(function(e, t) {
        "use strict";

        function o(e) {
            var t = n.exec(e);
            return t ? t[1].toLowerCase() : "html"
        }

        function u(e) {
            return e[0] === "/" && e[1] !== "/"
        }

        function a(e) {
            return e[0] === "/" ? e.substr(1) : e
        }

        function f(t) {
            return r ? s.parseFromString(t, "text/html") : (new(e("jsdom").JSDOM)(t)).window.document
        }

        function l() {
            return r ? window.document.createElement("div") : (new(e("jsdom").JSDOM)).window.document.createElement("div")
        }

        function c(e, t, n) {
            var r = function(e) {
                    return n(e || new Error("Unexpected error."))
                },
                i = function() {
                    return r(new Error("Aborted."))
                },
                s = function() {
                    return r(new Error("Timed out."))
                },
                o = function() {
                    try {
                        u.status !== 200 ? r(new Error("Invalid status: " + u.status)) : u.responseText ? n(null, u.responseText) : r(new Error("Empty response: " + u.responseText))
                    } catch (e) {
                        r(e)
                    }
                },
                u = new XMLHttpRequest;
            u.addEventListener("load", o), u.addEventListener("abort", i), u.addEventListener("error", r), u.addEventListener("timeout", s), u.open("GET", e, !0), u.timeout = t, u.responseType = "text", u.send()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = /^.+\.([^/]+?)(?:[\?#;].*)?$/,
            r = typeof window != "undefined",
            i = /^SoundCloud[ -]?/i,
            s = r ? new DOMParser : undefined,
            h = function() {
                function e(e) {
                    e === void 0 && (e = {}), this._baseUrl = e.baseUrl || "https://pages.soundcloud.com/", this._timeout = e.timeout || 1e4, this._appLocale = e.appLocale ? e.appLocale.toLowerCase() : null
                }
                return e.prototype.retrieve = function(e, t) {
                    var n = this;
                    t === void 0 && (t = window.location.pathname), t.indexOf("/") === 0 && (t = t.substr(1));
                    var r = this._baseUrl + t;
                    this._appLocale && (r += "?app_locale=" + encodeURIComponent(this._appLocale)), c(r, this._timeout, function(t, r) {
                        try {
                            if (t) throw t;
                            e(null, n.build(r))
                        } catch (i) {
                            e(i || new Error("Unexpected error."))
                        }
                    })
                }, e.prototype.build = function(e) {
                    var t = this,
                        n = f(e),
                        r = l();
                    while (n.body.childNodes.length > 0) r.appendChild(n.body.childNodes[0]);
                    var s = r.querySelectorAll("a");
                    s.forEach(function(e) {
                        var n = e.getAttribute("href") || "";
                        if (!u(n)) return;
                        var r = o(n);
                        r !== "html" && e.setAttribute("href", t._baseUrl + a(n))
                    });
                    var c = r.querySelector("h1"),
                        h = (c && c.textContent || "").replace(i, "");
                    return {
                        title: h,
                        html: r.outerHTML
                    }
                }, e
            }();
        t.default = h
    }),
    define("views/pages/static.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform('.staticPage{font-size:14px;line-height:1.4em;padding-bottom:2em;background:#fff;width:100%;padding:10px 12px 60px}.staticPage p{margin:0 0 10px}.staticPage p a:not(.sc-button),.staticPage li a{color:#06c}.staticPage li a:only-child{color:#333}.staticPage li a:only-child:hover{color:#000}.staticPage h1,.staticPage h2,.staticPage h3{margin:22px 0 12px;padding-bottom:18px;border-bottom:1px solid #f2f2f2;color:#333;font-size:14px}.staticPage h3{border-bottom:0}.staticPage ul{list-style:none;margin-left:15px;margin-bottom:6px}.staticPage ol{list-style-type:decimal;margin-left:15px;margin-bottom:6px}.staticPage ol li{list-style-type:decimal}.staticPage ul+p{margin-top:20px}.staticPage li,.staticPage li{margin-bottom:.5em}.staticPage ul li:before{content:"•";color:#f60;font-size:10px;position:absolute;margin:1px 0 0 -13px}.staticPage li>ul{margin-top:.5em}.staticPage li p{margin-bottom:30px}.staticPage h2>a,.staticPage h3>a,.staticPage h4>a,.staticPage h5>a{position:absolute;top:-60px}.staticPage p>img{max-width:100%}')), data = null
    })