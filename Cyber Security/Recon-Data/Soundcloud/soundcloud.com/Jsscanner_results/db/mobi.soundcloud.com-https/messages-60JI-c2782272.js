define("layouts/messages", ["require", "exports", "module", "lib/layouts/fullheight", "lib/lingua"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = e("lib/lingua"),
            s = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setTitle(i.t("Messages", null, {
                        comment: "Title of the messages page"
                    })), this.setViews({
                        "l-main": ["views/messages/messages", e]
                    })
                }
            })
    }),
    define("views/messages/messages", ["require", "exports", "module", "lib/cookies", "lib/url", "lib/view", "views/messages/messages.tmpl", "views/messages/messages.css"], function(e, t, n) {
        function u() {
            r.set("nomob", 1, {
                minutes: 1
            }), window.location = "https://soundcloud.com" + i.parse(window.location).path
        }
        var r = e("lib/cookies"),
            i = e("lib/url"),
            s = e("lib/view"),
            o = n.exports = s.extend({
                template: e("views/messages/messages.tmpl"),
                css: e("views/messages/messages.css"),
                className: "messagesPage",
                events: {
                    "click .messages__desktopLink": u
                }
            })
    }),
    define("views/messages/messages.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o = this.escapeExpression;
            return s += '<h1 class="messages__title g-font-20">' + o(n.$t.call(t, "Messages are only<br> supported on desktop browsers.", {
                hash: {},
                data: i
            })) + '</h1> <p class="g-font-14">' + o(n.$t.call(t, "Pages might not display correctly <br>in mobile browsers.", {
                hash: {},
                data: i
            })) + '</p>\n<br>\n<p class="g-font-16"><button class="g-button messages__desktopLink">' + o(n.$t.call(t, "Go to Messages", {
                hash: {},
                data: i
            })) + "</button></p>\n", s
        })
    }),
    define("views/messages/messages.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".messagesPage{color:#666;padding:30px 10px 10px;position:relative;height:100%;text-align:center;background:#efefef}.messages__title{margin-bottom:15px}")), data = null
    })