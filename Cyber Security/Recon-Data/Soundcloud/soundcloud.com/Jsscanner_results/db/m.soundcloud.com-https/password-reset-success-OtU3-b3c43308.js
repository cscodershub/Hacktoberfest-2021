define("layouts/password-reset-success", ["require", "exports", "module", "lib/layouts/fullheight"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setViews({
                        "l-main": ["views/signin/password-reset-success", e]
                    })
                }
            })
    }),
    define("views/signin/password-reset-success", ["require", "exports", "module", "lib/view", "views/signin/password-reset-success.tmpl", "views/signin/password-reset-success.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = n.exports = r.extend({
                className: "signinPasswordResetSuccess",
                template: e("views/signin/password-reset-success.tmpl"),
                css: e("views/signin/password-reset-success.css")
            })
    }),
    define("views/signin/password-reset-success.tmpl", ["vendor/handlebars-runtime", "views/signin/signin-deeplink-button"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o = this.escapeExpression;
            return s += '<div class="signinPasswordResetSuccess__text"> <p>' + o(n.$t.call(t, "You have successfully<br>changed your password.", {
                hash: {},
                data: i
            })) + '</p>\n</div>\n<div class="signinPasswordResetSuccess__action"> ' + o(n.$view.call(t, "views/signin/signin-deeplink-button", {
                hash: {},
                data: i
            })) + "\n</div>\n", s
        })
    }),
    define("views/signin/password-reset-success.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".signinPasswordResetSuccess{background:#fff;height:100%}.signinPasswordResetSuccess__text{font-size:20px;line-height:1.5;text-align:center;margin:0 auto;display:table;position:relative;top:30%;padding:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.signinPasswordResetSuccess__action{display:block;position:absolute;bottom:20%;left:0;right:0;margin:0 auto;height:57px;overflow:hidden}")), data = null
    }),
    define("views/signin/signin-deeplink-button", ["require", "exports", "module", "lib/helpers/client-environment-helper", "lib/lingua", "lib/tracking/tracking-core", "lib/native-links", "lib/view", "views/signin/signin-deeplink-button.css", "views/signin/signin-deeplink-button.tmpl"], function(e, t, n) {
        function f() {
            s.action("submit", "signin_deeplink_button:signin")
        }

        function l() {
            return !o.useDeeplinks() && !r.supportsNativeApp
        }
        var r = e("lib/helpers/client-environment-helper").device,
            i = e("lib/lingua"),
            s = e("lib/tracking/tracking-core"),
            o = e("lib/native-links"),
            u = e("lib/view"),
            a = n.exports = u.extend({
                className: "signinDeeplinkButton",
                css: e("views/signin/signin-deeplink-button.css"),
                template: e("views/signin/signin-deeplink-button.tmpl"),
                events: {
                    "click .signinDeeplinkButton__button": f
                },
                states: {
                    hide: function(e) {
                        this.$el.toggleClass("sc-hidden", e)
                    }
                },
                setup: function() {
                    this.toggleState("hide", l())
                },
                getTemplateData: function(e) {
                    var t, n;
                    return t = o.getSigninDeepLink(), t ? n = i.t("Sign in to SoundCloud", null, {
                        context: "button"
                    }) : (t = o.getStoreLink(), n = i.t("Download our free app", null, {
                        context: "button"
                    })), e.url = t, e.text = n, e
                }
            })
    }),
    define("views/signin/signin-deeplink-button.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".signinDeeplinkButton{position:relative;overflow:hidden;text-align:center;-webkit-transition:-webkit-transform .2s linear;transition:transform .2s linear}")), data = null
    }),
    define("views/signin/signin-deeplink-button.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var n = "",
                    r;
                return n += ' <a href="' + a((r = e && e.url, typeof r === u ? r.apply(e) : r)) + '" class="signinDeeplinkButton__button g-button g-button-large g-button-cta g-touch-padding">' + a((r = e && e.text, typeof r === u ? r.apply(e) : r)) + "</a>\n", n
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            o = n["if"].call(t, t && t.url, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    })