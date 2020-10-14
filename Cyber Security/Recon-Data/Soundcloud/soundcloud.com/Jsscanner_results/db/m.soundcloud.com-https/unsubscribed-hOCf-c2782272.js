define("layouts/unsubscribed", ["require", "exports", "module", "lib/layouts/fullheight", "lib/lingua"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = e("lib/lingua"),
            s = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setTitle(i.t("Unsubscribed successfully", null, {
                        comment: "Title of an unsubscribe page"
                    })), this.setViews({
                        "l-main": ["views/pages/unsubscribed", e]
                    })
                }
            })
    }),
    define("views/pages/unsubscribed", ["require", "exports", "module", "lib/view", "views/pages/unsubscribed.tmpl", "views/pages/unsubscribed.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = n.exports = r.extend({
                template: e("views/pages/unsubscribed.tmpl"),
                css: e("views/pages/unsubscribed.css"),
                className: "unsubscribed"
            })
    }),
    define("views/pages/unsubscribed.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o = this.escapeExpression;
            return s += '<h1 class="g-font-20">' + o(n.$t.call(t, "Unsubscribed successfully", {
                hash: {},
                data: i
            })) + '</h1>\n<p class="unsubscribed__messaging g-font-12"> ' + o(n.$t.call(t, "We’re sorry to hear you’re leaving.", {
                hash: {},
                data: i
            })) + '\n</p>\n<p class="g-font-12 unsubscribed__footnote"> ' + o(n.$t.call(t, "Review your email subscriptions at", {
                hash: {},
                data: i
            })) + "<br> soundcloud.com/settings/email\n</p>\n", s
        })
    }),
    define("views/pages/unsubscribed.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".unsubscribed{color:#666;padding:170px 10px 10px;position:relative;height:100%;text-align:center;background:#efefef url(https://mobi.sndcdn.com/assets/images/ldpi/unsubscribed-2d62878d.png) no-repeat center 45px;background-size:165px 103px}.unsubscribed__messaging{margin:5px 0 2.5em}.unsubscribed__footnote{position:absolute;bottom:15px;left:0;right:0;padding:0 30px}")), data = null
    })