define("layouts/activate", ["require", "exports", "module", "lib/layouts/fullheight"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setViews({
                        "l-main": ["views/signin/signin-activate", e]
                    })
                }
            })
    }),
    define("views/signin/signin-activate", ["require", "exports", "module", "underscore", "lib/helpers/client-environment-helper", "lib/native-links", "lib/view", "views/signin/signin-activate.tmpl", "views/signin/signin-activate.css"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/helpers/client-environment-helper"),
            s = i.device,
            o = e("lib/native-links"),
            u = e("lib/view"),
            a = n.exports = u.extend({
                className: "signinActivate",
                template: e("views/signin/signin-activate.tmpl"),
                css: e("views/signin/signin-activate.css"),
                defaults: {
                    code: null
                },
                getTemplateData: function(e) {
                    var t = "https://secure.soundcloud.com/activate";
                    this.options.code && (t += "/" + this.options.code);
                    if (!s.iOS && !s.android) {
                        window.location = t;
                        return
                    }
                    return r.extend(e, {
                        storeLink: o.getStoreLink(),
                        activateLink: t,
                        activateDeeplink: o.getActivateDeeplink()
                    })
                }
            })
    }),
    define("views/signin/signin-activate.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = "function";
            return s += '<div class="signinActivate__section"> <h1 class="sc-header-h1"> ' + u(n.$t.call(t, "Activate your device", {
                hash: {},
                data: i
            })) + ' </h1> <div class="signinActivate__buttonContainer"> <a href="' + u((o = t && t.activateDeeplink, typeof o === a ? o.apply(t) : o)) + '" class="g-button g-button-large g-button-cta g-touch-padding"> ' + u(n.$t.call(t, "Open the SoundCloud app", {
                hash: {},
                data: i
            })) + ' </a> </div> <p class="sc-header-h2 sc-text-light"> ' + u(n.$t.call(t, "When prompted, enter the activation code from your device. Activation is only available in the latest version of the app.", {
                hash: {},
                data: i
            })) + ' </p> <div class="signinActivate__buttonContainer"> <a href="' + u((o = t && t.storeLink, typeof o === a ? o.apply(t) : o)) + '" class="g-button g-button-large g-touch-padding"> ' + u(n.$t.call(t, "Download SoundCloud", {
                hash: {},
                data: i
            })) + ' </a> </div>\n</div> <div class="signinActivate__alternative"> <p> <a class="sc-text-link" href="' + u((o = t && t.activateLink, typeof o === a ? o.apply(t) : o)) + '">' + u(n.$t.call(t, "Or, continue in your browser", {
                hash: {},
                data: i
            })) + "</a> </p>\n</div>\n", s
        })
    }),
    define("views/signin/signin-activate.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".signinActivate{background:#fff;height:100%;padding-left:2em;padding-right:2em}.signinActivate__section{margin:0 auto;display:table;position:relative;top:40%;padding:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.signinActivate h1{margin:1em auto}.signinActivate p{line-height:1.5;margin:1.5em auto}.signinActivate__buttonContainer{text-align:center}.signinActivate__alternative{display:block;position:absolute;bottom:0;left:0;right:0;margin:0 auto;border-top:1px solid #eee;padding:1.5em 0}.signinActivate__alternative p{text-align:center;margin:0 auto;display:block;position:relative}")), data = null
    })