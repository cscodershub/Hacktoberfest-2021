define("layouts/pulse-app", ["require", "exports", "module", "lib/layouts/fullheight"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setViews({
                        "l-main": ["views/pulse-app/pulse-app", e]
                    })
                }
            })
    }),
    define("views/pulse-app/pulse-app", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/lingua", "lib/view", "views/pulse-app/pulse-app.tmpl", "views/pulse-app/pulse-app.css"], function(e, t, n) {
        var r = e("lib/helpers/client-environment-helper").device,
            i = e("lib/lingua"),
            s = e("lib/view"),
            o = {
                "you/tracks": {
                    title: i.t("Get SoundCloud Pulse to manage your tracks on the go"),
                    body: i.t("Edit track titles, descriptions, tags, privacy settings and more right from your phone, wherever you are.")
                },
                "you/stats": {
                    title: i.t("Get SoundCloud Pulse to check your stats on the go"),
                    body: i.t("See your play count skyrocket in real time, identify your top listeners and check your top cities to plan your next show.")
                },
                notifications: {
                    title: i.t("Get SoundCloud Pulse to check your notifications on the go"),
                    body: i.t("Get notified about new followers, likes, reposts, and comments so you can engage with your fans and the community.")
                }
            },
            u = n.exports = s.extend({
                className: "pulseApp",
                template: e("views/pulse-app/pulse-app.tmpl"),
                css: e("views/pulse-app/pulse-app.css"),
                defaults: {
                    page: null
                },
                getTemplateData: function(e) {
                    return e.copy = o[this.options.page], e.showAppStoreButton = r.supportsPulseApp, e
                }
            })
    }),
    define("views/pulse-app/pulse-app.tmpl", ["vendor/handlebars-runtime", "views/app-buttons/app-buttons"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var n = "",
                    r;
                return n += ' <h1 class="pulseApp__title g-font-20">' + a((r = (r = e && e.copy, r == null || r === !1 ? r : r.title), typeof r === u ? r.apply(e) : r)) + '</h1> <p class="pulseApp__body g-font-16">' + a((r = (r = e && e.copy, r == null || r === !1 ? r : r.body), typeof r === u ? r.apply(e) : r)) + "</p> ", n
            }

            function c(e, t) {
                var r = "";
                return r += ' <div class="pulseApp__appStore"> ' + a(n.$view.call(e, "views/app-buttons/app-buttons", {
                    hash: {},
                    data: t
                })) + " </div> ", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            s += '<div class="pulseApp__content"> ', o = n["if"].call(t, t && t.copy, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += " ", o = n["if"].call(t, t && t.showAppStoreButton, {
                hash: {},
                inverse: f.noop,
                fn: f.program(3, c, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n</div>\n", s
        })
    }),
    define("views/pulse-app/pulse-app.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".pulseApp{height:100%;padding:150px 32px 0;background-color:#f2f2f2}.pulseApp__content{max-width:450px;margin:0 auto;text-align:center}.pulseApp__title{line-height:28px;margin-bottom:16px}.pulseApp__title::after{content:'';display:block;height:2px;width:50px;margin:16px auto 0;background-color:#f50}.pulseApp__body{line-height:22px}.pulseApp__appStore{margin-top:50px}")), data = null
    })