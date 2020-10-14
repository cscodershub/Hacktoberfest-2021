define("layouts/error", ["require", "exports", "module", "lib/layouts/fullheight", "lib/lingua"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = e("lib/lingua"),
            s = n.exports = r.extend({
                includeFooter: null,
                setup: function(e) {
                    return this.setTitle(i.t("Something doesn’t sound right.")), this.setViews({
                        "l-main": ["views/error/error", e]
                    })
                }
            })
    }),
    define("views/error/error", ["require", "exports", "module", "config", "lib/event-bus", "models/exception", "lib/view", "views/error/error.tmpl"], function(e, t, n) {
        function a() {
            r.get("router").reload()
        }
        var r = e("config"),
            i = e("lib/event-bus"),
            s = e("models/exception"),
            o = e("lib/view"),
            u = n.exports = o.extend({
                template: e("views/error/error.tmpl"),
                ModelClass: s,
                className: "errorPage",
                renderDecorate: function() {
                    i.once("connect:login", a)
                },
                teardown: function() {
                    i.off("connect:login", a)
                }
            })
    }),
    define("views/error/error.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var n = "",
                    r;
                n += ' <p class="errorText g-font-14">', r = (r = e && e.message, typeof r === u ? r.apply(e) : r);
                if (r || r === 0) n += r;
                return n += "</p> ", n
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            s += '<div class="errorPage__inner"> <div class="errorVisual ' + a((o = t && t.error_type, typeof o === u ? o.apply(t) : o)) + '"></div> <div class="errorMessage"> <h1 class="errorTitle g-font-20">' + a((o = t && t.title, typeof o === u ? o.apply(t) : o)) + "</h1> ", o = n["if"].call(t, t && t.message, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += " </div>\n</div>\n", s
        })
    })