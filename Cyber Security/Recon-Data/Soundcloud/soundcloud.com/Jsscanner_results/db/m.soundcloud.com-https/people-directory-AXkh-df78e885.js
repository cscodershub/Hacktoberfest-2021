define("layouts/people-directory", ["require", "exports", "module", "lib/layouts/page"], function(e, t, n) {
        var r, i = e("lib/layouts/page");
        r = n.exports = i.extend({
            setup: function(e) {
                return this.setViews({
                    "l-main": ["views/people/directory", e]
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
    define("views/people/directory", ["require", "exports", "module", "underscore", "$", "lib/helpers/title-helper", "config/error-messages", "models/exception", "lib/lingua", "shared/lib/helpers/people-directory-helper", "lib/view", "views/people/directory.tmpl", "views/people/directory.css"], function(e, t, n) {
        function d(e) {
            var t = e && e.split("-") || [];
            return t.length >= 2
        }

        function v() {
            window.history.back()
        }

        function m() {
            var e = this.options.subpage.split("-")[0],
                t = this.getElement("characterList")[0].querySelector('a[href$="/' + e + '"]'),
                n = document.createTextNode(e);
            t.parentNode.replaceChild(n, t)
        }

        function g(e) {
            var t = "<div>" + e + "</div>";
            return Array.prototype.map.call(s(t).find("li"), function(e) {
                var t = s(e).find("a");
                return {
                    href: t.attr("href"),
                    range: t.html().split(" - ")
                }
            })
        }
        var r, i = e("underscore"),
            s = e("$"),
            o = e("lib/helpers/title-helper"),
            u = e("config/error-messages"),
            a = e("models/exception"),
            f = e("lib/lingua"),
            l = e("shared/lib/helpers/people-directory-helper"),
            c = e("lib/view"),
            h = "https://directory.soundcloud.com/people/",
            p = l.supportedSubpages;
        r = n.exports = c.extend({
            template: e("views/people/directory.tmpl"),
            css: e("views/people/directory.css"),
            className: "peopleDirectory",
            defaults: {
                subpage: ""
            },
            element2selector: {
                characterList: ".peopleDirectory__characterList"
            },
            events: {
                "click .peopleDirectory__historyBack": v
            },
            renderDecorate: function() {
                m.call(this)
            },
            getTemplateData: function(e) {
                var t = l.getContentForEntries(this.directoryEntries);
                return o.set(t.first + " | " + t.last + " | " + f.t("People directory")), e.generatedContent = t.content, e.generatedSummary = [t.first, t.last].join(" - "), e.hasBackLink = d(this.options.subpage), e.subpageLinks = p, e
            },
            directoryEntries: null,
            hasData: function() {
                return !!this.directoryEntries
            },
            _getTemplateData: function() {
                var e = {};
                return e._options = i.clone(this.options), this.hasData() ? this.getTemplateData(e) : e
            },
            fetchData: function() {
                return s.ajax({
                    url: h + this.options.subpage
                }).done(function(e) {
                    this.directoryEntries = g(e), this.rerender()
                }.bind(this)).fail(a.ajaxFatal(u.UNKNOWN))
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
    define("shared/lib/helpers/people-directory-helper", ["require", "exports", "module", "underscore"], function(e, t, n) {
        function s(e) {
            return '<span class="sc-text">' + e + "</span>"
        }

        function o(e) {
            var t = e.href.substr(0, 1) === "/",
                n, r;
            return t ? (n = e.href, r = [e.range[0], s(e.range[1])]) : (n = "/people/directory/" + e.href, r = e.range), '<li class="sc-truncate peopleDirectory__generatedContentListItem"><a href="' + n + '">' + r.join(s(" &mdash; ")) + "</a>" + "</li>"
        }

        function u(e) {
            return '<ul class="peopleDirectory__generatedContentList sc-text sc-type-small sc-list-nostyle">' + e.join("\n") + "</ul>"
        }

        function a(e) {
            var t = 4,
                n = Math.ceil(e.length / t);
            return r.chain(e).map(o).groupBy(function(e, t) {
                return Math.floor(t / n)
            }).map(u).value().join("")
        }
        var r = e("underscore"),
            i = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "-"];
        n.exports = {
            supportedSubpages: i,
            getContentForEntries: function(e) {
                var t = r.first(e),
                    n = r.last(e);
                return {
                    first: t && t.range[0] || "",
                    last: n && n.range[1] || "",
                    content: a(e)
                }
            }
        }
    }),
    define("views/people/directory.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var r = "";
                return r += ' <li class="peopleDirectory__character"><a href="' + u(n.$route.call(e, "peopleDirectory", e, {
                    hash: {},
                    data: t
                })) + '">' + u(typeof e === a ? e.apply(e) : e) + "</a></li> ", r
            }

            function c(e, t) {
                return " Results for: [[generatedSummary]] "
            }

            function h(e, t) {
                var r = "";
                return r += '&nbsp;·&nbsp;<a role="button" class="peopleDirectory__historyBack">' + u(n.$t.call(e, "back", {
                    hash: {},
                    data: t
                })) + "</a>", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = "function",
                f = this;
            s += '<h1 class="peopleDirectory__title">' + u(n.$t.call(t, "People directory", {
                hash: {},
                data: i
            })) + '</h1>\n<ul class="peopleDirectory__characterList sc-list-nostyle sc-type-small sc-media"> ', o = n.each.call(t, t && t.subpageLinks, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += '\n</ul>\n<p class="peopleDirectory__hRule peopleDirectory__resultsSummary sc-type-small sc-text-light sc-border-light-bottom">\n<span class="peopleDirectory__generatedSummary sc-truncate"> ', o = n.$t.call(t, {
                hash: {
                    generatedSummary: t && t.generatedSummary
                },
                inverse: f.noop,
                fn: f.program(3, c, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += "\n</span>\n", o = n["if"].call(t, t && t.hasBackLink, {
                hash: {},
                inverse: f.noop,
                fn: f.program(5, h, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += '\n</p>\n<div class="peopleDirectory__generatedContent"> ', o = (o = t && t.generatedContent, typeof o === a ? o.apply(t) : o);
            if (o || o === 0) s += o;
            return s += '\n</div>\n<br>\n<p class="peopleDirectory__optOutText sc-text-verylight"> ' + u(n.$t.call(t, "Don't want to be included? Visit the desktop version of this page to opt out.", {
                hash: {},
                data: i
            })) + "\n</p>\n", s
        })
    }),
    define("views/people/directory.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".peopleDirectory{position:relative;background:#fff;padding:10px 12px 60px;font-size:14px}.peopleDirectory__character{float:left;margin:0 14px .5em 0}.peopleDirectory a{color:#38d;padding:1px}.peopleDirectory__generatedContent{overflow:hidden}.peopleDirectory__generatedContentListItem{margin-bottom:.5em}.peopleDirectory__character:last-child,.peopleDirectory__generatedContentList:last-child{margin-right:0}.peopleDirectory__generatedContent,.peopleDirectory__characterList{margin:18px 0 28px}.peopleDirectory__title{margin:22px 0 12px;padding-bottom:18px;border-bottom:1px solid #f2f2f2;color:#333;font-size:14px}.peopleDirectory__generatedSummary{display:inline-block;max-width:82%;vertical-align:bottom}.peopleDirectory__hRule{padding-bottom:18px}")), data = null
    })