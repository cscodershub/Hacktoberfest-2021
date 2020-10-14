define("layouts/premium", ["require", "exports", "module", "lib/lingua", "lib/layouts/page", "lib/futures"], function(e, t, n) {
        var r = e("lib/lingua"),
            i = e("lib/layouts/page"),
            s = e("lib/futures"),
            o = r.t("Enjoy the custom experience for creators with SoundCloud Pulse."),
            u = n.exports = i.extend({
                setup: function(e) {
                    return window.location = "https://checkout.soundcloud.com/" + e.pageName, s.resolve()
                },
                getUpsellText: function() {
                    return o
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
    define("lib/layouts/page.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".l-page{background:#f2f2f2;overflow:hidden}")), data = null
    }),
    define("lib/layouts/page.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            return this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {}, '<div class="l-page"> <div class="l-main"> </div>\n</div>\n'
        })
    })