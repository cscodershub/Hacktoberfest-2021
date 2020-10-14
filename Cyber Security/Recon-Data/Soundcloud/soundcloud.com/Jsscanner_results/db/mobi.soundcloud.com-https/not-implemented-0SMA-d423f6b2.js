define("layouts/not-implemented", ["require", "exports", "module", "underscore", "lib/layouts/fullheight", "lib/helpers/client-environment-helper", "config/not-implemented-messages"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/layouts/fullheight"),
            s = e("lib/helpers/client-environment-helper"),
            o = e("config/not-implemented-messages"),
            u = n.exports = i.extend({
                includeFooter: null,
                setup: function(e) {
                    var t = o[e.page];
                    return t.pageTitle && this.setTitle(t.pageTitle), e.page === "upload" && (s.device.iOS || s.device.android) ? this.setViews({
                        "l-main": ["views/not-implemented/not-implemented-upload"]
                    }) : this.setViews({
                        "l-main": ["views/not-implemented/not-implemented", r.pick(t, "title", "messages")]
                    })
                }
            })
    }),
    define("config/not-implemented-messages", ["require", "exports", "module", "lib/lingua"], function(e, t, n) {
        var r = e("lib/lingua"),
            i = {
                pageTitle: r.t("Charts on SoundCloud."),
                title: r.t("Charts are only available on desktop browsers."),
                messages: [r.t("Alternatively, download our mobile app to discover trending music &amp; audio on the go.")]
            },
            s = {
                pageTitle: r.t("SoundCloud Premier"),
                title: r.t("SoundCloud Premier is only available on desktop."),
                messages: [r.t("Please visit [[[linkStart]]][[premierLink]][[[linkEnd]]] on a desktop computer or laptop to get started.", {
                    linkStart: '<a href="//soundcloud.com/you/premier">',
                    linkEnd: "</a>",
                    premierLink: "soundcloud.com/you/premier"
                })]
            },
            o = n.exports = {
                upload: {
                    pageTitle: r.t("Upload your music &amp; audio and share it with the world.", null, {
                        comment: "Title of the upload page"
                    }),
                    title: r.t("Upload is only supported on desktop browsers."),
                    messages: [r.t("Come back when you’re at your computer to upload more tracks.")]
                },
                "you/premier": s,
                "you/premier/faqs": s,
                "you/premier/onboarding": s,
                "you/premier/resources": s,
                explore: i,
                charts: i,
                "charts/top": i,
                "charts/new": i,
                people: {
                    pageTitle: r.t("Connect with Facebook friends."),
                    title: r.t("Connect is only available on desktop browsers."),
                    messages: [r.t("Looking to connect with Facebook friends or find new people to follow? This feature is only available on desktop browsers."), r.t("Come back when you’re at your computer to find new people to follow.")]
                },
                you: {
                    pageTitle: r.t("Your profile"),
                    title: r.t("Managing your account is only available on desktop browsers."),
                    messages: [r.t('For more information on optimizing your profile, visit our <a href="[[url]]">Creator Guide</a>.', {
                        url: "https://on.soundcloud.com/creator-guide/profile"
                    })]
                },
                "you/releases": {
                    pageTitle: r.t("Your releases"),
                    title: r.t("SoundCloud Premier distribution is only available on desktop."),
                    messages: [r.t('To manage your releases, please visit <a href="[[url]]">soundcloud.com/you/releases</a> on a desktop computer or laptop.', {
                        url: "https://soundcloud.com/you/releases"
                    })]
                },
                "you/mastering": {
                    pageTitle: r.t("The page you are trying to reach is only available on desktop"),
                    title: r.t("The page you are trying to reach is only available on desktop"),
                    messages: [r.t("Please visit soundcloud.com on a desktop computer or laptop to get started.")]
                }
            }
    }),
    define("views/not-implemented/not-implemented-upload", ["require", "exports", "module", "lib/view", "lib/lingua", "lib/helpers/client-environment-helper", "views/not-implemented/not-implemented-upload.tmpl", "views/not-implemented/not-implemented.css", "views/not-implemented/not-implemented-upload.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("lib/lingua"),
            s = e("lib/helpers/client-environment-helper"),
            o = s.device.android,
            u = n.exports = r.extend({
                template: e("views/not-implemented/not-implemented-upload.tmpl"),
                css: [e("views/not-implemented/not-implemented.css"), e("views/not-implemented/not-implemented-upload.css")],
                className: "notImplementedPage",
                getTemplateData: function() {
                    return o ? {
                        deepLink: "soundcloud://upload",
                        platformName: i.t("Android")
                    } : {
                        deepLink: "soundcloud://discover",
                        platformName: i.t("iOS")
                    }
                }
            })
    }),
    define("views/not-implemented/not-implemented", ["require", "exports", "module", "lib/view", "views/not-implemented/not-implemented.tmpl", "views/not-implemented/not-implemented.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = n.exports = r.extend({
                template: e("views/not-implemented/not-implemented.tmpl"),
                css: e("views/not-implemented/not-implemented.css"),
                className: "notImplementedPage",
                defaults: {
                    title: "",
                    messages: null
                }
            })
    }),
    define("views/not-implemented/not-implemented-upload.tmpl", ["vendor/handlebars-runtime", "views/banner/launch-app"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o = this.escapeExpression;
            return s += '<div class="notImplementedPageUpload__visual"></div>\n<p class="notImplementedPage__text g-font-14 sc-text-light"> ' + o(n.$t.call(t, "Easily upload your audio to instantly reach millions of listeners with our [[platformName]] app or on desktop", {
                hash: {
                    platformName: t && t.platformName
                },
                data: i
            })) + "\n</p>\n" + o(n.$view.call(t, "views/banner/launch-app", {
                hash: {
                    deepLink: t && t.deepLink
                },
                data: i
            })) + "\n", s
        })
    }),
    define("views/not-implemented/not-implemented.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".notImplementedPage{padding:30px 10% 10px;position:relative;height:100%;text-align:center;background:#fff}.notImplementedPage__title,.notImplementedPage__text{margin-bottom:20px}.notImplementedPage__visual{background:url(https://mobi.sndcdn.com/assets/images/ldpi/desktop-9ffb5fb2.png) no-repeat 0 0/205px 90px;width:205px;height:90px;margin:30px auto}")), data = null
    }),
    define("views/not-implemented/not-implemented-upload.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".notImplementedPageUpload__visual{background:url(https://mobi.sndcdn.com/assets/images/ldpi/mobile-upload-ios-f1790de5.jpg) no-repeat 0 0/205px 154px;width:205px;height:154px;margin:0 auto 30px}.notImplementedPage .launchApp{margin-top:0;height:auto}.notImplementedPage .launchApp>div{margin:10px 0}")), data = null
    }),
    define("views/not-implemented/not-implemented.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var n = "",
                    r;
                n += ' <p class="notImplementedPage__text g-font-14 sc-text-light">', r = typeof e === u ? e.apply(e) : e;
                if (r || r === 0) n += r;
                return n += "</p>\n", n
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            s += '<div class="notImplementedPage__visual"></div>\n<h1 class="notImplementedPage__title g-font-16 sc-text">' + a((o = (o = t && t._options, o == null || o === !1 ? o : o.title), typeof o === u ? o.apply(t) : o)) + "</h1>\n", o = n.each.call(t, (o = t && t._options, o == null || o === !1 ? o : o.messages), {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    })