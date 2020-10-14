(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        "0mN4": function(e, t, a) {
            "use strict";
            a("OGtf")("fixed", (function(e) {
                return function() {
                    return e(this, "tt", "", "")
                }
            }))
        },
        yZlL: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "pageQuery", (function() {
                return p
            }));
            a("0mN4");
            var r = a("q1tI"),
                n = a.n(r),
                l = a("Wbzz"),
                o = a("7oih"),
                s = a("vrFN"),
                c = a("svvY"),
                i = a("L24t");
            a("cXBx");
            var m = function(e) {
                var t, a;

                function r() {
                    return e.apply(this, arguments) || this
                }
                return a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.prototype.render = function() {
                    var e = this.props.data.markdownRemark,
                        t = this.props.pageContext,
                        a = t.previous,
                        r = t.next,
                        m = e.frontmatter,
                        p = m.title,
                        u = m.date,
                        d = m.categories,
                        f = m.authors,
                        g = m.image,
                        _ = g && g.childImageSharp.fixed.src;
                    return n.a.createElement(o.a, null, n.a.createElement(s.a, {
                        title: p,
                        description: e.fields.teaserPlainText || e.excerpt,
                        image: _
                    }), n.a.createElement("h1", {
                        className: "blogPost__title"
                    }, p), n.a.createElement("p", {
                        className: "blogPost__metadata"
                    }, u, " ", f && n.a.createElement(n.a.Fragment, null, "by ", n.a.createElement(c.a, {
                        authors: f
                    }))), n.a.createElement("div", {
                        className: "blogPost__content",
                        dangerouslySetInnerHTML: {
                            __html: e.html
                        }
                    }), d && n.a.createElement("aside", {
                        className: "blogPost__categories"
                    }, n.a.createElement(i.a, {
                        categories: d
                    })), n.a.createElement("hr", {
                        className: "blogPost__separator"
                    }), n.a.createElement("ul", {
                        className: "blogPost__prevNextLinks"
                    }, n.a.createElement("li", null, a && n.a.createElement(l.a, {
                        to: a.fields.slug,
                        rel: "prev"
                    }, "← ", a.frontmatter.title)), n.a.createElement("li", null, r && n.a.createElement(l.a, {
                        to: r.fields.slug,
                        rel: "next"
                    }, r.frontmatter.title, " →"))))
                }, r
            }(n.a.Component);
            t.default = m;
            var p = "733497197"
        }
    }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-d5489d149bf2f7b6178b.js.map