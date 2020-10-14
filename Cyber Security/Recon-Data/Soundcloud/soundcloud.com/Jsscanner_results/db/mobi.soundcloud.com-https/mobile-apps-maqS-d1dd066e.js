define("layouts/mobile-apps", ["require", "exports", "module", "lib/layouts/fullheight"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setViews({
                        "l-main": ["views/mobile-apps/mobile-apps", e]
                    })
                }
            })
    }),
    define("views/mobile-apps/mobile-apps", ["require", "exports", "module", "underscore", "lib/helpers/client-environment-helper", "lib/native-links", "lib/view", "views/mobile-apps/mobile-apps.tmpl", "views/mobile-apps/mobile-apps.css"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/helpers/client-environment-helper").device,
            s = e("lib/native-links"),
            o = e("lib/view"),
            u = "https://app.adjust.com/hkw6re",
            a = "https://app.adjust.com/w5btb4",
            f = n.exports = o.extend({
                className: "mobileApps",
                template: e("views/mobile-apps/mobile-apps.tmpl"),
                css: e("views/mobile-apps/mobile-apps.css"),
                defaults: {
                    page: null
                },
                getTemplateData: function(e) {
                    var t = s.useDeeplinks(),
                        n = "";
                    return t && (i.iOS ? n = s.getAdjustDeeplink(u) : n = s.getAdjustDeeplink(a, this.options.page)), r.extend(e, {
                        cta_link: n
                    })
                }
            })
    }),
    define("views/mobile-apps/mobile-apps.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var r = "",
                    i;
                return r += '\n<div class="mobileApps__action"> <a href="' + a((i = e && e.cta_link, typeof i === u ? i.apply(e) : i)) + '" class="g-button g-button-large g-button-cta g-touch-padding"> ' + a(n.$t.call(e, "Open or get the app", {
                    hash: {},
                    data: t
                })) + " </a>\n</div>\n", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            s += '<div class="mobileApps__text"> <p class="mobileApps__emphasis">' + a(n.$t.call(t, "SoundCloud for mobile is<br> only available as an app.", {
                hash: {},
                data: i
            })) + "</p> <br> <p>" + a(n.$t.call(t, "Open or download now<br> to use SoundCloud on<br> your device.", {
                hash: {},
                data: i
            })) + "</p>\n</div>\n", o = n["if"].call(t, t && t.cta_link, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("views/mobile-apps/mobile-apps.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".mobileApps{background:#fff;height:100%;display:flex;flex-direction:column;justify-content:center}.mobileApps__text{font-size:20px;line-height:1.5;text-align:center;padding:0 0 122px}.mobileApps__emphasis{color:#f50}.mobileApps__action{display:block;position:absolute;bottom:65px;left:0;right:0;margin:0 auto;height:57px;overflow:hidden;text-align:center}")), data = null
    })