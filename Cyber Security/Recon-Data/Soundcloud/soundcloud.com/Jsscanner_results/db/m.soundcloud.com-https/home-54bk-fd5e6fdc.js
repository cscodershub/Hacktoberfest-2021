define("layouts/home", ["require", "exports", "module", "lib/layouts/page"], function(e, t, n) {
        var r = e("lib/layouts/page"),
            i = n.exports = r.extend({
                setup: function(e) {
                    return this.setTitle(""), this.setViews({
                        "l-main": ["views/home/home", e]
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
    define("views/home/home", ["require", "exports", "module", "underscore", "lib/views/mixins/audible-control", "css", "lib/views/mixins/has-queue-source", "collections/home", "lib/helpers/image-helper", "lib/views/loading", "lib/view", "views/home/home.tmpl", "views/home/home.css"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/views/mixins/audible-control"),
            s = e("css"),
            o = e("lib/views/mixins/has-queue-source"),
            u = e("collections/home"),
            a = e("lib/helpers/image-helper"),
            f = e("lib/views/loading"),
            l = e("lib/view"),
            c = [{
                artwork: "https://mobi.sndcdn.com/assets/images/ldpi/homepage/01-cbf1777f.jpg",
                link: {
                    permalink: "littlesimz"
                }
            }, {
                artwork: "https://mobi.sndcdn.com/assets/images/ldpi/homepage/02-cbf1777f.jpg",
                link: {
                    permalink: "zedsdead"
                }
            }],
            h = n.exports = l.extend(i, o, {
                element2selector: {
                    artwork: ".home__artwork"
                },
                LoadingView: f,
                loadingViewArgs: function() {
                    return {
                        size: "fullscreen"
                    }
                },
                className: "home g-list-wrapper",
                template: e("views/home/home.tmpl"),
                css: e("views/home/home.css"),
                setup: function() {
                    this.collection = new u, this._combination = r.shuffle(c)[0]
                },
                renderDecorate: function() {
                    var e = s.transformDPI(this._combination.artwork),
                        t = this.getElement("artwork")[0];
                    a.fadeInBackground(e, t)
                },
                getTemplateData: function(e) {
                    return e.getHomeCollection = function() {
                        return new u
                    }, r.extend(e, this._combination)
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
    define("collections/home", ["require", "exports", "module", "underscore", "lib/mixins/audio-source", "shared/config/charts", "lib/helpers/charts-helper", "lib/collection", "models/sound"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/mixins/audio-source"),
            s = e("shared/config/charts"),
            o = e("lib/helpers/charts-helper"),
            u = e("lib/collection"),
            a = e("models/sound"),
            f = n.exports = u.extend(i, {
                model: a,
                baseUrl: function() {
                    return this.getEndpointUrl("charts", {}, {
                        kind: s.defaultKind,
                        genre: o.genreUrn(s.defaultGenre)
                    })
                },
                getSourceInfo: function() {
                    return {
                        type: "homepage"
                    }
                },
                getSounds: function() {
                    return this.models
                },
                parse: function(e) {
                    return r.pluck(e.collection, "track")
                }
            }, {
                hashFn: function() {
                    return "trending-tracks"
                }
            })
    }),
    define("views/home/home.tmpl", ["vendor/handlebars-runtime", "lib/views/sounds-list"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = "function";
            return s += '<a href="' + u(n.$route.call(t, "user", t && t.link, {
                hash: {},
                data: i
            })) + '" class="home__artwork g-transition-fade g-transition-fade-out" style="background-image:url(' + u((o = t && t.artwork, typeof o === a ? o.apply(t) : o)) + ');"\n> <h2 class="home__title">' + u(n.$t.call(t, "Hear the world's sounds", {
                hash: {},
                data: i
            })) + '</h2>\n</a>\n<h1 class="g-type-bucket-title g-font-14 sc-text sc-truncate">' + u(n.$t.call(t, "Trending tracks on SoundCloud", {
                hash: {},
                data: i
            })) + "</h1>\n" + u(n.$view.call(t, "lib/views/sounds-list", {
                hash: {
                    getCollection: t && t.getHomeCollection
                },
                data: i
            })) + "\n", s
        })
    }),
    define("views/home/home.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".home{height:100%}.home__artwork{display:block;height:200px;background:no-repeat 0 0;background-size:cover;position:relative}.home__title{color:#fff;font-size:160%;height:21px;width:100%;position:absolute;top:50%;transform:translateY(-50%);text-align:center}")), data = null
    })