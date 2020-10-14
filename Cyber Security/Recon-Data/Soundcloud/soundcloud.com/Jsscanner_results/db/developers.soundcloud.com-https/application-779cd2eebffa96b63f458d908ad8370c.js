/*!
 * jQuery JavaScript Library v1.10.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-24T18:39Z
 */
function injectSDK() {
    var e = document.createElement("script"),
        t = document.getElementsByTagName("script")[0];
    e.async = !0, e.src = "//connect.soundcloud.com/sdk-2.0.0.js", e.addEventListener("load", function() {
        window.SC.initialize({
            client_id: "z8LRYFPM4UK5MMLaBe9vixfph5kqNA25",
            redirect_uri: "https://developers.soundcloud.com/callback.html"
        })
    }), t.parentNode.insertBefore(e, t)
}

function formatCodeExamples() {
    $(".language-selector li:first-child").addClass("selected"), $(".code-example").each(function() {
        var e = $(this).find("code").map(function() {
                return $(this).height()
            }),
            t = Math.max.apply(Math, $.makeArray(e));
        $(this).find("pre").css("height", t + 20 + "px")
    }), $(".language-selector a").click(function(e) {
        e.preventDefault();
        var t = $(this).text().toLowerCase();
        $(".language-selector li").removeClass("selected").filter(function() {
            return $(this).children("a").text().toLowerCase() == t
        }).addClass("selected"), $(".code-example code").not(".standalone").css("visibility", "hidden").filter(function() {
            return $(this).attr("data-language") == t
        }).css("visibility", "visible")
    })
}

function scrollToAnchor(e, t) {
    var n = $(e);
    if (t = t || function() {}, 0 < n.length) {
        var i = n.offset().top;
        $(document.documentElement).add(document.body).animate({
            scrollTop: i
        }, 100, "linear", t)
    }
}! function(m, k) {
    function s(e) {
        var t = e.length,
            n = Ae.type(e);
        return !Ae.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && 0 < t && t - 1 in e)))
    }

    function e(e) {
        var n = Ce[e] = {};
        return Ae.each(e.match(de) || [], function(e, t) {
            n[t] = !0
        }), n
    }

    function i(e, t, n, i) {
        if (Ae.acceptData(e)) {
            var r, o, a = Ae.expando,
                s = e.nodeType,
                l = s ? Ae.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (i || l[u].data) || n !== k || "string" != typeof t) return u || (u = s ? e[a] = te.pop() || Ae.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: Ae.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = Ae.extend(l[u], t) : l[u].data = Ae.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), n !== k && (o[Ae.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[Ae.camelCase(t)]) : r = o, r
        }
    }

    function n(e, t, n) {
        if (Ae.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? Ae.cache : e,
                s = o ? e[Ae.expando] : Ae.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    r = (t = Ae.isArray(t) ? t.concat(Ae.map(t, Ae.camelCase)) : t in i ? [t] : (t = Ae.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !Ae.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? Ae.cleanData([e], !0) : Ae.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function l(e, t, n) {
        if (n === k && 1 === e.nodeType) {
            var i = "data-" + t.replace(Se, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _e.test(n) ? Ae.parseJSON(n) : n)
                } catch (r) {}
                Ae.data(e, t, n)
            } else n = k
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !Ae.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function r() {
        return !0
    }

    function c() {
        return !1
    }

    function t() {
        try {
            return Y.activeElement
        } catch (e) {}
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e, n, i) {
        if (Ae.isFunction(n)) return Ae.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return Ae.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (Ie.test(n)) return Ae.filter(n, e, i);
            n = Ae.filter(n, e)
        }
        return Ae.grep(e, function(e) {
            return 0 <= Ae.inArray(e, n) !== i
        })
    }

    function g(e) {
        var t = Xe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return Ae.nodeName(e, "table") && Ae.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function v(e) {
        return e.type = (null !== Ae.find.attr(e, "type")) + "/" + e.type, e
    }

    function y(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) Ae._data(n, "globalEval", !t || Ae._data(t[i], "globalEval"))
    }

    function f(e, t) {
        if (1 === t.nodeType && Ae.hasData(e)) {
            var n, i, r, o = Ae._data(e),
                a = Ae._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (i = 0, r = s[n].length; i < r; i++) Ae.event.add(t, n, s[n][i]);
            a.data && (a.data = Ae.extend({}, a.data))
        }
    }

    function p(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !Ae.support.noCloneEvent && t[Ae.expando]) {
                for (i in (r = Ae._data(t)).events) Ae.removeEvent(t, i, r.handle);
                t.removeAttribute(Ae.expando)
            }
            "script" === n && t.text !== e.text ? (v(t).text = e.text, y(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), Ae.support.html5Clone && e.innerHTML && !Ae.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(t || "*") : k;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || Ae.nodeName(i, t) ? o.push(i) : Ae.merge(o, x(i, t));
        return t === k || t && Ae.nodeName(e, t) ? Ae.merge([e], o) : o
    }

    function w(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function h(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = kt.length; r--;)
            if ((t = kt[r] + n) in e) return t;
        return i
    }

    function T(e, t) {
        return e = t || e, "none" === Ae.css(e, "display") || !Ae.contains(e.ownerDocument, e)
    }

    function C(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = Ae._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (o[a] = Ae._data(i, "olddisplay", N(i.nodeName)))) : o[a] || (r = T(i), (n && "none" !== n || !r) && Ae._data(i, "olddisplay", r ? n : Ae.css(i, "display"))));
        for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function _(e, t, n) {
        var i = gt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function S(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += Ae.css(e, n + Tt[o], !0, r)), i ? ("content" === n && (a -= Ae.css(e, "padding" + Tt[o], !0, r)), "margin" !== n && (a -= Ae.css(e, "border" + Tt[o] + "Width", !0, r))) : (a += Ae.css(e, "padding" + Tt[o], !0, r), "padding" !== n && (a += Ae.css(e, "border" + Tt[o] + "Width", !0, r)));
        return a
    }

    function E(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ut(e),
            a = Ae.support.boxSizing && "border-box" === Ae.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = ct(e, t, o)) < 0 || null == r) && (r = e.style[t]), vt.test(r)) return r;
            i = a && (Ae.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + S(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function N(e) {
        var t = Y,
            n = bt[e];
        return n || ("none" !== (n = A(e, t)) && n || ((t = ((lt = (lt || Ae("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || lt[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = A(e, t), lt.detach()), bt[e] = n), n
    }

    function A(e, t) {
        var n = Ae(t.createElement(e)).appendTo(t.body),
            i = Ae.css(n[0], "display");
        return n.remove(), i
    }

    function D(n, e, i, r) {
        var t;
        if (Ae.isArray(e)) Ae.each(e, function(e, t) {
            i || _t.test(n) ? r(n, t) : D(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== Ae.type(e)) r(n, e);
        else
            for (t in e) D(n + "[" + t + "]", e[t], i, r)
    }

    function j(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(de) || [];
            if (Ae.isFunction(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function L(t, r, o, a) {
        function s(e) {
            var i;
            return l[e] = !0, Ae.each(t[e] || [], function(e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), s(n), !1)
            }), i
        }
        var l = {},
            u = t === It;
        return s(r.dataTypes[0]) || !l["*"] && s("*")
    }

    function H(e, t) {
        var n, i, r = Ae.ajaxSettings.flatOptions || {};
        for (i in t) t[i] !== k && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && Ae.extend(!0, e, n), e
    }

    function M(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), r === k && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function P(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function W() {
        try {
            return new m.XMLHttpRequest
        } catch (e) {}
    }

    function q() {
        try {
            return new m.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function F() {
        return setTimeout(function() {
            Yt = k
        }), Yt = Ae.now()
    }

    function O(e, t, n) {
        for (var i, r = (nn[t] || []).concat(nn["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function R(o, e, t) {
        var n, a, i = 0,
            r = tn.length,
            s = Ae.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = Yt || F(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return s.notifyWith(o, [u, n, t]), n < 1 && r ? t : (s.resolveWith(o, [u]), !1)
            },
            u = s.promise({
                elem: o,
                props: Ae.extend({}, e),
                opts: Ae.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Yt || F(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = Ae.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? s.resolveWith(o, [u, e]) : s.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); i < r; i++)
            if (n = tn[i].call(u, o, c, u.opts)) return n;
        return Ae.map(c, O, u), Ae.isFunction(u.opts.start) && u.opts.start.call(o, u), Ae.fx.timer(Ae.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function $(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (r = t[i = Ae.camelCase(n)], o = e[n], Ae.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = Ae.cssHooks[i]) && "expand" in a)
                for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
            else t[i] = r
    }

    function I(t, e, n) {
        var i, r, o, a, s, l, u = this,
            c = {},
            d = t.style,
            f = t.nodeType && T(t),
            p = Ae._data(t, "fxshow");
        for (i in n.queue || (null == (s = Ae._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, Ae.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === Ae.css(t, "display") && "none" === Ae.css(t, "float") && (Ae.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", Ae.support.shrinkWrapBlocks || u.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            })), e)
            if (r = e[i], Jt.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) continue;
                c[i] = p && p[i] || Ae.style(t, i)
            } if (!Ae.isEmptyObject(c))
            for (i in p ? "hidden" in p && (f = p.hidden) : p = Ae._data(t, "fxshow", {}), o && (p.hidden = !f), f ? Ae(t).show() : u.done(function() {
                    Ae(t).hide()
                }), u.done(function() {
                    var e;
                    for (e in Ae._removeData(t, "fxshow"), c) Ae.style(t, e, c[e])
                }), c) a = O(f ? p[i] : 0, i, u), i in p || (p[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }

    function B(e, t, n, i, r) {
        return new B.prototype.init(e, t, n, i, r)
    }

    function z(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Tt[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function U(e) {
        return Ae.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var X, Q, G = typeof k,
        V = m.location,
        Y = m.document,
        K = Y.documentElement,
        J = m.jQuery,
        Z = m.$,
        ee = {},
        te = [],
        ne = "1.10.0",
        ie = te.concat,
        re = te.push,
        oe = te.slice,
        ae = te.indexOf,
        se = ee.toString,
        le = ee.hasOwnProperty,
        ue = ne.trim,
        Ae = function(e, t) {
            return new Ae.fn.init(e, t, Q)
        },
        ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = /\S+/g,
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        me = /^[\],:{}\s]*$/,
        ge = /(?:^|:|,)(?:\s*\[)+/g,
        ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        be = /^-ms-/,
        xe = /-([\da-z])/gi,
        we = function(e, t) {
            return t.toUpperCase()
        },
        Te = function(e) {
            (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (ke(), Ae.ready())
        },
        ke = function() {
            Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", Te, !1), m.removeEventListener("load", Te, !1)) : (Y.detachEvent("onreadystatechange", Te), m.detachEvent("onload", Te))
        };
    Ae.fn = Ae.prototype = {
            jquery: ne,
            constructor: Ae,
            init: function(e, t, n) {
                var i, r;
                if (!e) return this;
                if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Ae.isFunction(e) ? n.ready(e) : (e.selector !== k && (this.selector = e.selector, this.context = e.context), Ae.makeArray(e, this));
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : pe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof Ae ? t[0] : t, Ae.merge(this, Ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), he.test(i[1]) && Ae.isPlainObject(t))
                        for (i in t) Ae.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((r = Y.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2]) return n.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = Y, this.selector = e, this
            },
            selector: "",
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = Ae.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return Ae.each(this, e, t)
            },
            ready: function(e) {
                return Ae.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            map: function(n) {
                return this.pushStack(Ae.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: re,
            sort: [].sort,
            splice: [].splice
        }, Ae.fn.init.prototype = Ae.fn, Ae.extend = Ae.fn.extend = function(e, t) {
            var n, i, r, o, a, s, l = e || {},
                u = 1,
                c = arguments.length,
                d = !1;
            for ("boolean" == typeof l && (d = l, l = t || {}, u = 2), "object" == typeof l || Ae.isFunction(l) || (l = {}), c === u && (l = this, --u); u < c; u++)
                if (null != (a = arguments[u]))
                    for (o in a) n = l[o], l !== (r = a[o]) && (d && r && (Ae.isPlainObject(r) || (i = Ae.isArray(r))) ? (i ? (i = !1, s = n && Ae.isArray(n) ? n : []) : s = n && Ae.isPlainObject(n) ? n : {}, l[o] = Ae.extend(d, s, r)) : r !== k && (l[o] = r));
            return l
        }, Ae.extend({
            expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                return m.$ === Ae && (m.$ = Z), e && m.jQuery === Ae && (m.jQuery = J), Ae
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Ae.readyWait++ : Ae.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--Ae.readyWait : !Ae.isReady) {
                    if (!Y.body) return setTimeout(Ae.ready);
                    (Ae.isReady = !0) !== e && 0 < --Ae.readyWait || (X.resolveWith(Y, [Ae]), Ae.fn.trigger && Ae(Y).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === Ae.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === Ae.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== Ae.type(e) || e.nodeType || Ae.isWindow(e)) return !1;
                try {
                    if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (Ae.support.ownLast)
                    for (t in e) return le.call(e, t);
                for (t in e);
                return t === k || le.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || Y;
                var i = he.exec(e),
                    r = !n && [];
                return i ? [t.createElement(i[1])] : (i = Ae.buildFragment([e], t, r), r && Ae(r).remove(), Ae.merge([], i.childNodes))
            },
            parseJSON: function(e) {
                return m.JSON && m.JSON.parse ? m.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = Ae.trim(e)) && me.test(e.replace(ve, "@").replace(ye, "]").replace(ge, "")) ? new Function("return " + e)() : void Ae.error("Invalid JSON: " + e)
            },
            parseXML: function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    m.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                } catch (n) {
                    t = k
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || Ae.error("Invalid XML: " + e), t
            },
            noop: function() {},
            globalEval: function(e) {
                e && Ae.trim(e) && (m.execScript || function(e) {
                    m.eval.call(m, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(be, "ms-").replace(xe, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i = 0,
                    r = e.length,
                    o = s(e);
                if (n) {
                    if (o)
                        for (; i < r && !1 !== t.apply(e[i], n); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], n)) break
                } else if (o)
                    for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: ue && !ue.call("\ufeff\xa0") ? function(e) {
                return null == e ? "" : ue.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(fe, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? Ae.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (ae) return ae.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                var n = t.length,
                    i = e.length,
                    r = 0;
                if ("number" == typeof n)
                    for (; r < n; r++) e[i++] = t[r];
                else
                    for (; t[r] !== k;) e[i++] = t[r++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var i = [],
                    r = 0,
                    o = e.length;
                for (n = !!n; r < o; r++) n !== !!t(e[r], r) && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r = 0,
                    o = e.length,
                    a = [];
                if (s(e))
                    for (; r < o; r++) null != (i = t(e[r], r, n)) && (a[a.length] = i);
                else
                    for (r in e) null != (i = t(e[r], r, n)) && (a[a.length] = i);
                return ie.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), Ae.isFunction(e) ? (n = oe.call(arguments, 2), (i = function() {
                    return e.apply(t || this, n.concat(oe.call(arguments)))
                }).guid = e.guid = e.guid || Ae.guid++, i) : k
            },
            access: function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === Ae.type(n))
                    for (s in r = !0, n) Ae.access(e, t, s, n[s], !0, o, a);
                else if (i !== k && (r = !0, Ae.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(Ae(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
                return r
            }
        }), Ae.ready.promise = function(e) {
            if (!X)
                if (X = Ae.Deferred(), "complete" === Y.readyState) setTimeout(Ae.ready);
                else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", Te, !1), m.addEventListener("load", Te, !1);
            else {
                Y.attachEvent("onreadystatechange", Te), m.attachEvent("onload", Te);
                var t = !1;
                try {
                    t = null == m.frameElement && Y.documentElement
                } catch (n) {}
                t && t.doScroll && function i() {
                    if (!Ae.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (n) {
                            return setTimeout(i, 50)
                        }
                        ke(), Ae.ready()
                    }
                }()
            }
            return X.promise(e)
        }, Ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        }), Q = Ae(Y),
        /*!
         * Sizzle CSS Selector Engine v1.9.4-pre
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2013-05-15
         */
        function(n, r) {
            function w(e, t, n, i) {
                var r, o, a, s, l, u, c, d, f, p;
                if ((t ? t.ownerDocument || t : z) !== W && P(t), n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = (t = t || W).nodeType) && 9 !== s) return [];
                if (F && !i) {
                    if (r = Te.exec(e))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return re.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && E.getElementsByClassName && t.getElementsByClassName) return re.apply(n, t.getElementsByClassName(a)), n
                        } if (E.qsa && (!O || !O.test(e))) {
                        if (d = c = B, f = t, p = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = m(e), (c = t.getAttribute("id")) ? d = c.replace(_e, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + g(u[l]);
                            f = ge.test(e) && t.parentNode || t, p = u.join(",")
                        }
                        if (p) try {
                            return re.apply(n, f.querySelectorAll(p)), n
                        } catch (h) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return C(e.replace(pe, "$1"), t, n, i)
            }

            function t(e) {
                return we.test(e + "")
            }

            function e() {
                function n(e, t) {
                    return i.push(e += " ") > A.cacheLength && delete n[i.shift()], n[e] = t
                }
                var i = [];
                return n
            }

            function l(e) {
                return e[B] = !0, e
            }

            function i(e) {
                var t = W.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t, n) {
                for (var i, r = (e = e.split("|")).length, o = n ? null : t; r--;)(i = A.attrHandle[e[r]]) && i !== t || (A.attrHandle[e[r]] = o)
            }

            function a(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null
            }

            function s(e, t) {
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }

            function u(e) {
                if ("input" === e.nodeName.toLowerCase()) return e.defaultValue
            }

            function c(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function d(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function f(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function p(a) {
                return l(function(o) {
                    return o = +o, l(function(e, t) {
                        for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function m(e, t) {
                var n, i, r, o, a, s, l, u = G[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, s = [], l = A.preFilter; a;) {
                    for (o in n && !(i = he.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = me.exec(a)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(pe, " ")
                        }), a = a.slice(n.length)), A.filter) !(i = xe[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: o,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? w.error(e) : G(e, s).slice(0)
            }

            function g(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function h(s, e, t) {
                var l = e.dir,
                    u = t && "parentNode" === l,
                    c = X++;
                return e.first ? function(e, t, n) {
                    for (; e = e[l];)
                        if (1 === e.nodeType || u) return s(e, t, n)
                } : function(e, t, n) {
                    var i, r, o, a = U + " " + c;
                    if (n) {
                        for (; e = e[l];)
                            if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                    } else
                        for (; e = e[l];)
                            if (1 === e.nodeType || u)
                                if ((r = (o = e[B] || (e[B] = {}))[l]) && r[0] === a) {
                                    if (!0 === (i = r[1]) || i === N) return !0 === i
                                } else if ((r = o[l] = [a])[1] = s(e, t, n) || N, !0 === r[1]) return !0
                }
            }

            function v(r) {
                return 1 < r.length ? function(e, t, n) {
                    for (var i = r.length; i--;)
                        if (!r[i](e, t, n)) return !1;
                    return !0
                } : r[0]
            }

            function T(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
                return a
            }

            function y(p, h, m, g, v, e) {
                return g && !g[B] && (g = y(g)), v && !v[B] && (v = y(v, e)), l(function(e, t, n, i) {
                    var r, o, a, s = [],
                        l = [],
                        u = t.length,
                        c = e || k(h || "*", n.nodeType ? [n] : n, []),
                        d = !p || !e && h ? c : T(c, s, p, n, i),
                        f = m ? v || (e ? p : u || g) ? [] : t : d;
                    if (m && m(d, f, n, i), g)
                        for (r = T(f, l), g(r, [], n, i), o = r.length; o--;)(a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
                    if (e) {
                        if (v || p) {
                            if (v) {
                                for (r = [], o = f.length; o--;)(a = f[o]) && r.push(d[o] = a);
                                v(null, f = [], r, i)
                            }
                            for (o = f.length; o--;)(a = f[o]) && -1 < (r = v ? ae.call(e, a) : s[o]) && (e[r] = !(t[r] = a))
                        }
                    } else f = T(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, i) : re.apply(t, f)
                })
            }

            function b(e) {
                for (var i, t, n, r = e.length, o = A.relative[e[0].type], a = o || A.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                        return e === i
                    }, a, !0), u = h(function(e) {
                        return -1 < ae.call(i, e)
                    }, a, !0), c = [function(e, t, n) {
                        return !o && (n || t !== H) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n))
                    }]; s < r; s++)
                    if (t = A.relative[e[s].type]) c = [h(v(c), t)];
                    else {
                        if ((t = A.filter[e[s].type].apply(null, e[s].matches))[B]) {
                            for (n = ++s; n < r && !A.relative[e[n].type]; n++);
                            return y(1 < s && v(c), 1 < s && g(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(pe, "$1"), t, s < n && b(e.slice(s, n)), n < r && b(e = e.slice(n)), n < r && g(e))
                        }
                        c.push(t)
                    } return v(c)
            }

            function x(g, v) {
                var y = 0,
                    b = 0 < v.length,
                    x = 0 < g.length,
                    e = function(e, t, n, i, r) {
                        var o, a, s, l = [],
                            u = 0,
                            c = "0",
                            d = e && [],
                            f = null != r,
                            p = H,
                            h = e || x && A.find.TAG("*", r && t.parentNode || t),
                            m = U += null == p ? 1 : Math.random() || .1;
                        for (f && (H = t !== W && t, N = y); null != (o = h[c]); c++) {
                            if (x && o) {
                                for (a = 0; s = g[a++];)
                                    if (s(o, t, n)) {
                                        i.push(o);
                                        break
                                    } f && (U = m, N = ++y)
                            }
                            b && ((o = !s && o) && u--, e && d.push(o))
                        }
                        if (u += c, b && c !== u) {
                            for (a = 0; s = v[a++];) s(d, l, t, n);
                            if (e) {
                                if (0 < u)
                                    for (; c--;) d[c] || l[c] || (l[c] = ne.call(i));
                                l = T(l)
                            }
                            re.apply(i, l), f && !e && 0 < l.length && 1 < u + v.length && w.uniqueSort(i)
                        }
                        return f && (U = m, H = p), d
                    };
                return b ? l(e) : e
            }

            function k(e, t, n) {
                for (var i = 0, r = t.length; i < r; i++) w(e, t[i], n);
                return n
            }

            function C(e, t, n, i) {
                var r, o, a, s, l, u = m(e);
                if (!i && 1 === u.length) {
                    if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && E.getById && 9 === t.nodeType && F && A.relative[o[1].type]) {
                        if (!(t = (A.find.ID(a.matches[0].replace(Se, Ee), t) || [])[0])) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (r = xe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !A.relative[s = a.type]);)
                        if ((l = A.find[s]) && (i = l(a.matches[0].replace(Se, Ee), ge.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(r, 1), !(e = i.length && g(o))) return re.apply(n, i), n;
                            break
                        }
                }
                return L(e, u)(i, t, !F, n, ge.test(e)), n
            }

            function _() {}
            var S, E, N, A, D, j, L, H, M, P, W, q, F, O, R, $, I, B = "sizzle" + -new Date,
                z = n.document,
                U = 0,
                X = 0,
                Q = e(),
                G = e(),
                V = e(),
                Y = !1,
                K = function() {
                    return 0
                },
                J = typeof r,
                Z = 1 << 31,
                ee = {}.hasOwnProperty,
                te = [],
                ne = te.pop,
                ie = te.push,
                re = te.push,
                oe = te.slice,
                ae = te.indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                se = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                le = "[\\x20\\t\\r\\n\\f]",
                ue = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ce = ue.replace("w", "w#"),
                de = "\\[" + le + "*(" + ue + ")" + le + "*(?:([*^$|!~]?=)" + le + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ce + ")|)|)" + le + "*\\]",
                fe = ":(" + ue + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + de.replace(3, 8) + ")*)|.*)\\)|)",
                pe = new RegExp("^" + le + "+|((?:^|[^\\\\])(?:\\\\.)*)" + le + "+$", "g"),
                he = new RegExp("^" + le + "*," + le + "*"),
                me = new RegExp("^" + le + "*([>+~]|" + le + ")" + le + "*"),
                ge = new RegExp(le + "*[+~]"),
                ve = new RegExp("=" + le + "*([^\\]'\"]*)" + le + "*\\]", "g"),
                ye = new RegExp(fe),
                be = new RegExp("^" + ce + "$"),
                xe = {
                    ID: new RegExp("^#(" + ue + ")"),
                    CLASS: new RegExp("^\\.(" + ue + ")"),
                    TAG: new RegExp("^(" + ue.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + de),
                    PSEUDO: new RegExp("^" + fe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + le + "*(even|odd|(([+-]|)(\\d*)n|)" + le + "*(?:([+-]|)" + le + "*(\\d+)|))" + le + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + se + ")$", "i"),
                    needsContext: new RegExp("^" + le + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + le + "*((?:-\\d)?\\d*)" + le + "*\\)|)(?=[^-]|$)", "i")
                },
                we = /^[^{]+\{\s*\[native \w/,
                Te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ke = /^(?:input|select|textarea|button)$/i,
                Ce = /^h\d$/i,
                _e = /'|\\/g,
                Se = new RegExp("\\\\([\\da-f]{1,6}" + le + "?|(" + le + ")|.)", "ig"),
                Ee = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                re.apply(te = oe.call(z.childNodes), z.childNodes), te[z.childNodes.length].nodeType
            } catch (Ne) {
                re = {
                    apply: te.length ? function(e, t) {
                        ie.apply(e, oe.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            for (S in j = w.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, E = w.support = {}, P = w.setDocument = function(e) {
                    var l = e ? e.ownerDocument || e : z;
                    return l !== W && 9 === l.nodeType && l.documentElement ? (q = (W = l).documentElement, F = !j(l), E.attributes = i(function(e) {
                        return e.innerHTML = "<a href='#'></a>", o("type|href|height|width", s, "#" === e.firstChild.getAttribute("href")), o(se, a, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
                    }), E.input = i(function(e) {
                        return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }), o("value", u, E.attributes && E.input), E.getElementsByTagName = i(function(e) {
                        return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                    }), E.getElementsByClassName = i(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), E.getById = i(function(e) {
                        return q.appendChild(e).id = B, !l.getElementsByName || !l.getElementsByName(B).length
                    }), E.getById ? (A.find.ID = function(e, t) {
                        if (typeof t.getElementById !== J && F) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, A.filter.ID = function(e) {
                        var t = e.replace(Se, Ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete A.find.ID, A.filter.ID = function(e) {
                        var n = e.replace(Se, Ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), A.find.TAG = E.getElementsByTagName ? function(e, t) {
                        if (typeof t.getElementsByTagName !== J) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, A.find.CLASS = E.getElementsByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName !== J && F) return t.getElementsByClassName(e)
                    }, R = [], O = [], (E.qsa = t(l.querySelectorAll)) && (i(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + le + "*(?:value|" + se + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                    }), i(function(e) {
                        var t = l.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + le + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (E.matchesSelector = t($ = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                        E.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), R.push("!=", fe)
                    }), O = O.length && new RegExp(O.join("|")), R = R.length && new RegExp(R.join("|")), I = t(q.contains) || q.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, E.sortDetached = i(function(e) {
                        return 1 & e.compareDocumentPosition(l.createElement("div"))
                    }), K = q.compareDocumentPosition ? function(e, t) {
                        if (e === t) return Y = !0, 0;
                        var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return n ? 1 & n || !E.sortDetached && t.compareDocumentPosition(e) === n ? e === l || I(z, e) ? -1 : t === l || I(z, t) ? 1 : M ? ae.call(M, e) - ae.call(M, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (e === t) return Y = !0, 0;
                        if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : M ? ae.call(M, e) - ae.call(M, t) : 0;
                        if (r === o) return c(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? c(a[i], s[i]) : a[i] === z ? -1 : s[i] === z ? 1 : 0
                    }, l) : W
                }, w.matches = function(e, t) {
                    return w(e, null, null, t)
                }, w.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== W && P(e), t = t.replace(ve, "='$1']"), E.matchesSelector && F && (!R || !R.test(t)) && (!O || !O.test(t))) try {
                        var n = $.call(e, t);
                        if (n || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (Ne) {}
                    return 0 < w(t, W, null, [e]).length
                }, w.contains = function(e, t) {
                    return (e.ownerDocument || e) !== W && P(e), I(e, t)
                }, w.attr = function(e, t) {
                    (e.ownerDocument || e) !== W && P(e);
                    var n = A.attrHandle[t.toLowerCase()],
                        i = n && ee.call(A.attrHandle, t.toLowerCase()) ? n(e, t, !F) : r;
                    return i === r ? E.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i
                }, w.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, w.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (Y = !E.detectDuplicates, M = !E.sortStable && e.slice(0), e.sort(K), Y) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, D = w.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += D(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += D(t);
                    return n
                }, A = w.selectors = {
                    cacheLength: 50,
                    createPseudo: l,
                    match: xe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Se, Ee), e[3] = (e[4] || e[5] || "").replace(Se, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return xe.CHILD.test(e[0]) ? null : (e[3] && e[4] !== r ? e[2] = e[4] : n && ye.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Se, Ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = Q[e + " "];
                            return t || (t = new RegExp("(^|" + le + ")" + e + "(" + le + "|$)")) && Q(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, i, r) {
                            return function(e) {
                                var t = w.attr(e, n);
                                return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(p, e, t, h, m) {
                            var g = "nth" !== p.slice(0, 3),
                                v = "last" !== p.slice(-4),
                                y = "of-type" === e;
                            return 1 === h && 0 === m ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var i, r, o, a, s, l, u = g !== v ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    d = y && e.nodeName.toLowerCase(),
                                    f = !n && !y;
                                if (c) {
                                    if (g) {
                                        for (; u;) {
                                            for (o = e; o = o[u];)
                                                if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                            l = u = "only" === p && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [v ? c.firstChild : c.lastChild], v && f) {
                                        for (s = (i = (r = c[B] || (c[B] = {}))[p] || [])[0] === U && i[1], a = i[0] === U && i[2], o = s && c.childNodes[s]; o = ++s && o && o[u] || (a = s = 0) || l.pop();)
                                            if (1 === o.nodeType && ++a && o === e) {
                                                r[p] = [U, s, a];
                                                break
                                            }
                                    } else if (f && (i = (e[B] || (e[B] = {}))[p]) && i[0] === U) a = i[1];
                                    else
                                        for (;
                                            (o = ++s && o && o[u] || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++a || (f && ((o[B] || (o[B] = {}))[p] = [U, a]), o !== e)););
                                    return (a -= m) === h || a % h == 0 && 0 <= a / h
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = A.pseudos[e] || A.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                            return a[B] ? a(o) : 1 < a.length ? (t = [e, e, "", o], A.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                                for (var n, i = a(e, o), r = i.length; r--;) e[n = ae.call(e, i[r])] = !(t[n] = i[r])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: l(function(e) {
                            var i = [],
                                r = [],
                                s = L(e.replace(pe, "$1"));
                            return s[B] ? l(function(e, t, n, i) {
                                for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                            }) : function(e, t, n) {
                                return i[0] = e, s(i, null, n, r), !r.pop()
                            }
                        }),
                        has: l(function(t) {
                            return function(e) {
                                return 0 < w(t, e).length
                            }
                        }),
                        contains: l(function(t) {
                            return function(e) {
                                return -1 < (e.textContent || e.innerText || D(e)).indexOf(t)
                            }
                        }),
                        lang: l(function(n) {
                            return be.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(Se, Ee).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === q
                        },
                        focus: function(e) {
                            return e === W.activeElement && (!W.hasFocus || W.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !A.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Ce.test(e.nodeName)
                        },
                        input: function(e) {
                            return ke.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: p(function() {
                            return [0]
                        }),
                        last: p(function(e, t) {
                            return [t - 1]
                        }),
                        eq: p(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: p(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: p(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: p(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: p(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) A.pseudos[S] = d(S);
            for (S in {
                    submit: !0,
                    reset: !0
                }) A.pseudos[S] = f(S);
            L = w.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = m(e)), n = t.length; n--;)(o = b(t[n]))[B] ? i.push(o) : r.push(o);
                    o = V(e, x(r, i))
                }
                return o
            }, A.pseudos.nth = A.pseudos.eq, _.prototype = A.filters = A.pseudos, A.setFilters = new _, E.sortStable = B.split("").sort(K).join("") === B, P(), [0, 0].sort(K), E.detectDuplicates = Y, Ae.find = w, Ae.expr = w.selectors, Ae.expr[":"] = Ae.expr.pseudos, Ae.unique = w.uniqueSort, Ae.text = w.getText, Ae.isXMLDoc = w.isXML, Ae.contains = w.contains
        }(m);
    var Ce = {};
    Ae.Callbacks = function(r) {
        r = "string" == typeof r ? Ce[r] || e(r) : Ae.extend({}, r);
        var o, t, n, a, i, s, l = [],
            u = !r.once && [],
            c = function(e) {
                for (t = r.memory && e, n = !0, i = s || 0, s = 0, a = l.length, o = !0; l && i < a; i++)
                    if (!1 === l[i].apply(e[0], e[1]) && r.stopOnFalse) {
                        t = !1;
                        break
                    } o = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        ! function i(e) {
                            Ae.each(e, function(e, t) {
                                var n = Ae.type(t);
                                "function" === n ? r.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        }(arguments), o ? a = l.length : t && (s = e, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && Ae.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = Ae.inArray(t, l, n));) l.splice(n, 1), o && (n <= a && a--, n <= i && i--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < Ae.inArray(e, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = u = t = k, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = k, t || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = [e, (t = t || []).slice ? t.slice() : t], !l || n && !u || (o ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, Ae.extend({
        Deferred: function(e) {
            var a = [
                    ["resolve", "done", Ae.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Ae.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Ae.Callbacks("memory")]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return l.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return Ae.Deferred(function(r) {
                            Ae.each(a, function(e, t) {
                                var n = t[0],
                                    i = Ae.isFunction(o[e]) && o[e];
                                l[t[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && Ae.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[n + "With"](this === s ? r.promise() : this, i ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Ae.extend(e, s) : s
                    }
                },
                l = {};
            return s.pipe = s.then, Ae.each(a, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, a[1 ^ e][2].disable, a[2][2].lock), l[t[0]] = function() {
                    return l[t[0] + "With"](this === l ? s : this, arguments), this
                }, l[t[0] + "With"] = n.fireWith
            }), s.promise(l), e && e.call(l, l), l
        },
        when: function(e) {
            var r, t, n, i = 0,
                o = oe.call(arguments),
                a = o.length,
                s = 1 !== a || e && Ae.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : Ae.Deferred(),
                u = function(t, n, i) {
                    return function(e) {
                        n[t] = this, i[t] = 1 < arguments.length ? oe.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (1 < a)
                for (r = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) o[i] && Ae.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(l.reject).progress(u(i, t, r)) : --s;
            return s || l.resolveWith(n, o), l.promise()
        }
    }), Ae.support = function(o) {
        var e, t, n, i, r, a, s, l, u, c = Y.createElement("div");
        if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("*") || [], !(t = c.getElementsByTagName("a")[0]) || !t.style || !e.length) return o;
        a = (i = Y.createElement("select")).appendChild(Y.createElement("option")), n = c.getElementsByTagName("input")[0], t.style.cssText = "top:1px;float:left;opacity:.5", o.getSetAttribute = "t" !== c.className, o.leadingWhitespace = 3 === c.firstChild.nodeType, o.tbody = !c.getElementsByTagName("tbody").length, o.htmlSerialize = !!c.getElementsByTagName("link").length, o.style = /top/.test(t.getAttribute("style")), o.hrefNormalized = "/a" === t.getAttribute("href"), o.opacity = /^0.5/.test(t.style.opacity), o.cssFloat = !!t.style.cssFloat, o.checkOn = !!n.value, o.optSelected = a.selected, o.enctype = !!Y.createElement("form").enctype, o.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, o.inlineBlockNeedsLayout = !1, o.shrinkWrapBlocks = !1, o.pixelPosition = !1, o.deleteExpando = !0, o.noCloneEvent = !0, o.reliableMarginRight = !0, o.boxSizingReliable = !0, n.checked = !0, o.noCloneChecked = n.cloneNode(!0).checked, i.disabled = !0, o.optDisabled = !a.disabled;
        try {
            delete c.test
        } catch (d) {
            o.deleteExpando = !1
        }
        for (u in (n = Y.createElement("input")).setAttribute("value", ""), o.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), o.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), (r = Y.createDocumentFragment()).appendChild(n), o.appendChecked = n.checked, o.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function() {
                o.noCloneEvent = !1
            }), c.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) c.setAttribute(s = "on" + u, "t"), o[u + "Bubbles"] = s in m || !1 === c.attributes[s].expando;
        for (u in c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === c.style.backgroundClip, Ae(o)) break;
        return o.ownLast = "0" !== u, Ae(function() {
            var e, t, n, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                r = Y.getElementsByTagName("body")[0];
            r && ((e = Y.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(e).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (n = c.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", o.reliableHiddenOffsets = l && 0 === n[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", Ae.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                o.boxSizing = 4 === c.offsetWidth
            }), m.getComputedStyle && (o.pixelPosition = "1%" !== (m.getComputedStyle(c, null) || {}).top, o.boxSizingReliable = "4px" === (m.getComputedStyle(c, null) || {
                width: "4px"
            }).width, (t = c.appendChild(Y.createElement("div"))).style.cssText = c.style.cssText = i, t.style.marginRight = t.style.width = "0", c.style.width = "1px", o.reliableMarginRight = !parseFloat((m.getComputedStyle(t, null) || {}).marginRight)), typeof c.style.zoom !== G && (c.innerHTML = "", c.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", o.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", o.shrinkWrapBlocks = 3 !== c.offsetWidth, o.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(e), e = c = n = t = null)
        }), e = i = r = a = t = n = null, o
    }({});
    var _e = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Se = /([A-Z])/g;
    Ae.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? Ae.cache[e[Ae.expando]] : e[Ae.expando]) && !u(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return n(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return n(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && Ae.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }), Ae.fn.extend({
        data: function(e, t) {
            var n, i, r = null,
                o = 0,
                a = this[0];
            if (e !== k) return "object" == typeof e ? this.each(function() {
                Ae.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                Ae.data(this, e, t)
            }) : a ? l(a, e, Ae.data(a, e)) : null;
            if (this.length && (r = Ae.data(a), 1 === a.nodeType && !Ae._data(a, "parsedAttrs"))) {
                for (n = a.attributes; o < n.length; o++) 0 === (i = n[o].name).indexOf("data-") && l(a, i = Ae.camelCase(i.slice(5)), r[i]);
                Ae._data(a, "parsedAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                Ae.removeData(this, e)
            })
        }
    }), Ae.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ae._data(e, t), n && (!i || Ae.isArray(n) ? i = Ae._data(e, t, Ae.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Ae.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = Ae._queueHooks(e, t),
                a = function() {
                    Ae.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), (o.cur = r) && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ae._data(e, n) || Ae._data(e, n, {
                empty: Ae.Callbacks("once memory").add(function() {
                    Ae._removeData(e, t + "queue"), Ae._removeData(e, n)
                })
            })
        }
    }), Ae.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? Ae.queue(this[0], t) : n === k ? this : this.each(function() {
                var e = Ae.queue(this, t, n);
                Ae._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && Ae.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Ae.dequeue(this, e)
            })
        },
        delay: function(i, e) {
            return i = Ae.fx && Ae.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = setTimeout(e, i);
                t.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = Ae.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = k), e = e || "fx"; a--;)(n = Ae._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Ee, Ne, De = /[\t\r\n\f]/g,
        je = /\r/g,
        Le = /^(?:input|select|textarea|button|object)$/i,
        He = /^(?:a|area)$/i,
        Me = /^(?:checked|selected)$/i,
        Pe = Ae.support.getSetAttribute,
        We = Ae.support.input;
    Ae.fn.extend({
        attr: function(e, t) {
            return Ae.access(this, Ae.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Ae.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return Ae.access(this, Ae.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = Ae.propFix[t] || t, this.each(function() {
                try {
                    this[t] = k, delete this[t]
                } catch (e) {}
            })
        },
        addClass: function(t) {
            var e, n, i, r, o, a = 0,
                s = this.length,
                l = "string" == typeof t && t;
            if (Ae.isFunction(t)) return this.each(function(e) {
                Ae(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(de) || []; a < s; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(De, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        n.className = Ae.trim(i)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (Ae.isFunction(t)) return this.each(function(e) {
                Ae(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(de) || []; a < s; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(De, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        n.className = t ? Ae.trim(i) : ""
                    } return this
        },
        toggleClass: function(o, a) {
            var s = typeof o,
                l = "boolean" == typeof a;
            return Ae.isFunction(o) ? this.each(function(e) {
                Ae(this).toggleClass(o.call(this, e, this.className, a), a)
            }) : this.each(function() {
                if ("string" === s)
                    for (var e, t = 0, n = Ae(this), i = a, r = o.match(de) || []; e = r[t++];) i = l ? i : !n.hasClass(e), n[i ? "addClass" : "removeClass"](e);
                else s !== G && "boolean" !== s || (this.className && Ae._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : Ae._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(De, " ").indexOf(t)) return !0;
            return !1
        },
        val: function(n) {
            var e, i, r, t = this[0];
            return arguments.length ? (r = Ae.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, Ae(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Ae.isArray(t) && (t = Ae.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = Ae.valHooks[this.type] || Ae.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== k || (this.value = t))
            })) : t ? (i = Ae.valHooks[t.type] || Ae.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== k ? e : "string" == typeof(e = t.value) ? e.replace(je, "") : null == e ? "" : e : void 0
        }
    }), Ae.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Ae.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (((n = i[l]).selected || l === r) && (Ae.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Ae.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Ae(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = Ae.makeArray(t), a = r.length; a--;)((i = r[a]).selected = 0 <= Ae.inArray(Ae(i).val(), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === G ? Ae.prop(e, t, n) : (1 === o && Ae.isXMLDoc(e) || (t = t.toLowerCase(), i = Ae.attrHooks[t] || (Ae.expr.match.bool.test(t) ? Ne : Ee)), n === k ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = Ae.find.attr(e, t)) ? k : r : null !== n ? i && "set" in i && (r = i.set(e, n, t)) !== k ? r : (e.setAttribute(t, n + ""), n) : void Ae.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = Ae.propFix[n] || n, Ae.expr.match.bool.test(n) ? We && Pe || !Me.test(n) ? e[i] = !1 : e[Ae.camelCase("default-" + n)] = e[i] = !1 : Ae.attr(e, n, ""), e.removeAttribute(Pe ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Ae.support.radioValue && "radio" === t && Ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Ae.isXMLDoc(e)) && (t = Ae.propFix[t] || t, r = Ae.propHooks[t]), n !== k ? r && "set" in r && (i = r.set(e, n, t)) !== k ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = Ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Le.test(e.nodeName) || He.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Ne = {
        set: function(e, t, n) {
            return !1 === t ? Ae.removeAttr(e, n) : We && Pe || !Me.test(n) ? e.setAttribute(!Pe && Ae.propFix[n] || n, n) : e[Ae.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Ae.each(Ae.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = Ae.expr.attrHandle[t] || Ae.find.attr;
        Ae.expr.attrHandle[t] = We && Pe || !Me.test(t) ? function(e, t, n) {
            var i = Ae.expr.attrHandle[t],
                r = n ? k : (Ae.expr.attrHandle[t] = k) != o(e, t, n) ? t.toLowerCase() : null;
            return Ae.expr.attrHandle[t] = i, r
        } : function(e, t, n) {
            return n ? k : e[Ae.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), We && Pe || (Ae.attrHooks.value = {
        set: function(e, t, n) {
            if (!Ae.nodeName(e, "input")) return Ee && Ee.set(e, t, n);
            e.defaultValue = t
        }
    }), Pe || (Ee = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : k
        }
    }, Ae.expr.attrHandle.id = Ae.expr.attrHandle.name = Ae.expr.attrHandle.coords = function(e, t, n) {
        var i;
        return n ? k : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, Ae.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : k
        },
        set: Ee.set
    }, Ae.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Ee.set(e, "" !== t && t, n)
        }
    }, Ae.each(["width", "height"], function(e, n) {
        Ae.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), Ae.support.hrefNormalized || Ae.each(["href", "src"], function(e, t) {
        Ae.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), Ae.support.style || (Ae.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || k
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), Ae.support.optSelected || (Ae.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex), null
        }
    }), Ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Ae.propFix[this.toLowerCase()] = this
    }), Ae.support.enctype || (Ae.propFix.enctype = "encoding"), Ae.each(["radio", "checkbox"], function() {
        Ae.valHooks[this] = {
            set: function(e, t) {
                if (Ae.isArray(t)) return e.checked = 0 <= Ae.inArray(Ae(e).val(), t)
            }
        }, Ae.support.checkOn || (Ae.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var qe = /^(?:input|select|textarea)$/i,
        Fe = /^key/,
        Oe = /^(?:mouse|contextmenu)|click/,
        Re = /^(?:focusinfocus|focusoutblur)$/,
        $e = /^([^.]*)(?:\.(.+)|)$/;
    Ae.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = Ae._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = Ae.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                        return typeof Ae === G || e && Ae.event.triggered === e.type ? k : Ae.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(de) || [""]).length; s--;) p = m = (o = $e.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (u = Ae.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = Ae.event.special[p] || {}, d = Ae.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && Ae.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), Ae.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, f, p, h, m, g = Ae.hasData(e) && Ae._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(de) || [""]).length; u--;)
                    if (p = m = (s = $e.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = Ae.event.special[p] || {}, f = c[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || Ae.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) Ae.event.remove(e, p + t[u], n, i, !0);
                Ae.isEmptyObject(c) && (delete g.handle, Ae._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var r, o, a, s, l, u, c, d = [n || Y],
                f = le.call(e, "type") ? e.type : e,
                p = le.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || Y, 3 !== n.nodeType && 8 !== n.nodeType && !Re.test(f + Ae.event.triggered) && (0 <= f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, (e = e[Ae.expando] ? e : new Ae.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = k, e.target || (e.target = n), t = null == t ? [e] : Ae.makeArray(t, [e]), l = Ae.event.special[f] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !Ae.isWindow(n)) {
                    for (s = l.delegateType || f, Re.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || Y) && d.push(u.defaultView || u.parentWindow || m)
                }
                for (c = 0;
                    (a = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : l.bindType || f, (r = (Ae._data(a, "events") || {})[e.type] && Ae._data(a, "handle")) && r.apply(a, t), (r = o && a[o]) && Ae.acceptData(a) && r.apply && !1 === r.apply(a, t) && e.preventDefault();
                if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && Ae.acceptData(n) && o && n[f] && !Ae.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), Ae.event.triggered = f;
                    try {
                        n[f]()
                    } catch (h) {}
                    Ae.event.triggered = k, u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = Ae.event.fix(e);
            var t, n, i, r, o, a = [],
                s = oe.call(arguments),
                l = (Ae._data(this, "events") || {})[e.type] || [],
                u = Ae.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = Ae.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, (n = ((Ae.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) !== k && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], o = 0; o < s; o++) r[n = (i = t[o]).selector + " "] === k && (r[n] = i.needsContext ? 0 <= Ae(n, this).index(l) : Ae.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[Ae.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Oe.test(r) ? this.mouseHooks : Fe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Ae.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || Y).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === k || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== t() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === t() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (Ae.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return Ae.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== k && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = Ae.extend(new Ae.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Ae.event.trigger(r, null, t) : Ae.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, Ae.removeEvent = Y.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === G && (e[i] = null), e.detachEvent(i, n))
    }, Ae.Event = function(e, t) {
        if (!(this instanceof Ae.Event)) return new Ae.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? r : c) : this.type = e, t && Ae.extend(this, t), this.timeStamp = e && e.timeStamp || Ae.now(), this[Ae.expando] = !0
    }, Ae.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = r, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = r, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = r, this.stopPropagation()
        }
    }, Ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, o) {
        Ae.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === n || Ae.contains(n, i)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), Ae.support.submitBubbles || (Ae.event.special.submit = {
        setup: function() {
            if (Ae.nodeName(this, "form")) return !1;
            Ae.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = Ae.nodeName(t, "input") || Ae.nodeName(t, "button") ? t.form : k;
                n && !Ae._data(n, "submitBubbles") && (Ae.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), Ae._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Ae.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (Ae.nodeName(this, "form")) return !1;
            Ae.event.remove(this, "._submit")
        }
    }), Ae.support.changeBubbles || (Ae.event.special.change = {
        setup: function() {
            if (qe.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (Ae.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), Ae.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), Ae.event.simulate("change", this, e, !0)
            })), !1;
            Ae.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                qe.test(t.nodeName) && !Ae._data(t, "changeBubbles") && (Ae.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || Ae.event.simulate("change", this.parentNode, e, !0)
                }), Ae._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return Ae.event.remove(this, "._change"), !qe.test(this.nodeName)
        }
    }), Ae.support.focusinBubbles || Ae.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            i = function(e) {
                Ae.event.simulate(t, e.target, Ae.event.fix(e), !0)
            };
        Ae.event.special[t] = {
            setup: function() {
                0 == n++ && Y.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 == --n && Y.removeEventListener(e, i, !0)
            }
        }
    }), Ae.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = k), e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = k) : null == i && ("string" == typeof t ? (i = n, n = k) : (i = n, n = t, t = k)), !1 === i) i = c;
            else if (!i) return this;
            return 1 === r && (a = i, (i = function(e) {
                return Ae().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = Ae.guid++)), this.each(function() {
                Ae.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = k), !1 === n && (n = c), this.each(function() {
                Ae.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                Ae.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return Ae.event.trigger(e, t, n, !0)
        }
    });
    var Ie = /^.[^:#\[\.,]*$/,
        Be = /^(?:parents|prev(?:Until|All))/,
        ze = Ae.expr.match.needsContext,
        Ue = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Ae.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(Ae(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (Ae.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) Ae.find(e, i[t], n);
            return (n = this.pushStack(1 < r ? Ae.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = Ae(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (Ae.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && ze.test(e) ? Ae(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ze.test(e) || "string" != typeof e ? Ae(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && Ae.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? Ae.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Ae.inArray(this[0], Ae(e)) : Ae.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? Ae(e, t) : Ae.makeArray(e && e.nodeType ? [e] : e),
                i = Ae.merge(this.get(), n);
            return this.pushStack(Ae.unique(i))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ae.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Ae.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Ae.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ae.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ae.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Ae.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Ae.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ae.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ae.sibling(e.firstChild)
        },
        contents: function(e) {
            return Ae.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Ae.merge([], e.childNodes)
        }
    }, function(i, r) {
        Ae.fn[i] = function(e, t) {
            var n = Ae.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = Ae.filter(t, n)), 1 < this.length && (Ue[i] || (n = Ae.unique(n)), Be.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    }), Ae.extend({
        filter: function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Ae.find.matchesSelector(i, e) ? [i] : [] : Ae.find.matches(e, Ae.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (n === k || 1 !== r.nodeType || !Ae(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Qe = / jQuery\d+="(?:null|\d+)"/g,
        Ge = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
        Ve = /^\s+/,
        Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ke = /<([\w:]+)/,
        Je = /<tbody/i,
        Ze = /<|&#?\w+;/,
        et = /<(?:script|style|link)/i,
        tt = /^(?:checkbox|radio)$/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^$|\/(?:java|ecma)script/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: Ae.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        st = g(Y).appendChild(Y.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, Ae.fn.extend({
        text: function(e) {
            return Ae.access(this, function(e) {
                return e === k ? Ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? Ae.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || Ae.cleanData(x(n)), n.parentNode && (t && Ae.contains(n.ownerDocument, n) && b(x(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && Ae.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && Ae.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Ae.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae.access(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === k) return 1 === t.nodeType ? t.innerHTML.replace(Qe, "") : k;
                if ("string" == typeof e && !et.test(e) && (Ae.support.htmlSerialize || !Ge.test(e)) && (Ae.support.leadingWhitespace || !Ve.test(e)) && !at[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ye, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (Ae.cleanData(x(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = Ae.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                r = 0;
            return this.domManip(arguments, function(e) {
                var t = i[r++],
                    n = i[r++];
                n && (t && t.parentNode !== n && (t = this.nextSibling), Ae(this).remove(), n.insertBefore(e, t))
            }, !0), r ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i, r) {
            n = ie.apply([], n);
            var e, t, o, a, s, l, u = 0,
                c = this.length,
                d = this,
                f = c - 1,
                p = n[0],
                h = Ae.isFunction(p);
            if (h || !(c <= 1 || "string" != typeof p || Ae.support.checkClone) && nt.test(p)) return this.each(function(e) {
                var t = d.eq(e);
                h && (n[0] = p.call(this, e, t.html())), t.domManip(n, i, r)
            });
            if (c && (e = (l = Ae.buildFragment(n, this[0].ownerDocument, !1, !r && this)).firstChild, 1 === l.childNodes.length && (l = e), e)) {
                for (o = (a = Ae.map(x(l, "script"), v)).length; u < c; u++) t = l, u !== f && (t = Ae.clone(t, !0, !0), o && Ae.merge(a, x(t, "script"))), i.call(this[u], t, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, Ae.map(a, y), u = 0; u < o; u++) t = a[u], it.test(t.type || "") && !Ae._data(t, "globalEval") && Ae.contains(s, t) && (t.src ? Ae._evalUrl(t.src) : Ae.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ot, "")));
                l = e = null
            }
            return this
        }
    }), Ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        Ae.fn[e] = function(e) {
            for (var t, n = 0, i = [], r = Ae(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), Ae(r[n])[a](t), re.apply(i, t.get());
            return this.pushStack(i)
        }
    }), Ae.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s, l = Ae.contains(e.ownerDocument, e);
            if (Ae.support.html5Clone || Ae.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(Ae.support.noCloneEvent && Ae.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ae.isXMLDoc(e)))
                for (i = x(o), s = x(e), a = 0; null != (r = s[a]); ++a) i[a] && p(r, i[a]);
            if (t)
                if (n)
                    for (s = s || x(e), i = i || x(o), a = 0; null != (r = s[a]); a++) f(r, i[a]);
                else f(e, o);
            return 0 < (i = x(o, "script")).length && b(i, !l && x(e, "script")), i = s = r = null, o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, u, c, d = e.length, f = g(t), p = [], h = 0; h < d; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === Ae.type(o)) Ae.merge(p, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), c = at[l] || at._default, s.innerHTML = c[1] + o.replace(Ye, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                if (!Ae.support.leadingWhitespace && Ve.test(o) && p.push(t.createTextNode(Ve.exec(o)[0])), !Ae.support.tbody)
                    for (r = (o = "table" !== l || Je.test(o) ? "<table>" !== c[1] || Je.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; r--;) Ae.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (Ae.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), Ae.support.appendChecked || Ae.grep(x(p, "input"), w), h = 0; o = p[h++];)
                if ((!i || -1 === Ae.inArray(o, i)) && (a = Ae.contains(o.ownerDocument, o), s = x(f.appendChild(o), "script"), a && b(s), n))
                    for (r = 0; o = s[r++];) it.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, a = 0, s = Ae.expando, l = Ae.cache, u = Ae.support.deleteExpando, c = Ae.event.special; null != (n = e[a]); a++)
                if ((t || Ae.acceptData(n)) && (o = (r = n[s]) && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? Ae.event.remove(n, i) : Ae.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== G ? n.removeAttribute(s) : n[s] = null, te.push(r))
                }
        },
        _evalUrl: function(e) {
            return Ae.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), Ae.fn.extend({
        wrapAll: function(t) {
            if (Ae.isFunction(t)) return this.each(function(e) {
                Ae(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = Ae(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return Ae.isFunction(n) ? this.each(function(e) {
                Ae(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = Ae(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = Ae.isFunction(t);
            return this.each(function(e) {
                Ae(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Ae.nodeName(this, "body") || Ae(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var lt, ut, ct, dt = /alpha\([^)]*\)/i,
        ft = /opacity\s*=\s*([^)]*)/,
        pt = /^(top|right|bottom|left)$/,
        ht = /^(none|table(?!-c[ea]).+)/,
        mt = /^margin/,
        gt = new RegExp("^(" + ce + ")(.*)$", "i"),
        vt = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
        yt = new RegExp("^([+-])=(" + ce + ")", "i"),
        bt = {
            BODY: "block"
        },
        xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Tt = ["Top", "Right", "Bottom", "Left"],
        kt = ["Webkit", "O", "Moz", "ms"];
    Ae.fn.extend({
        css: function(e, t) {
            return Ae.access(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (Ae.isArray(t)) {
                    for (r = ut(e), i = t.length; a < i; a++) o[t[a]] = Ae.css(e, t[a], !1, r);
                    return o
                }
                return n !== k ? Ae.style(e, t, n) : Ae.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : T(this)) ? Ae(this).show(): Ae(this).hide()
            })
        }
    }), Ae.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ct(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": Ae.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = Ae.camelCase(t),
                    l = e.style;
                if (t = Ae.cssProps[s] || (Ae.cssProps[s] = h(l, s)), a = Ae.cssHooks[t] || Ae.cssHooks[s], n === k) return a && "get" in a && (r = a.get(e, !1, i)) !== k ? r : l[t];
                if (!("string" === (o = typeof n) && (r = yt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Ae.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || Ae.cssNumber[s] || (n += "px"), Ae.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && (n = a.set(e, n, i)) === k))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = Ae.camelCase(t);
            return t = Ae.cssProps[s] || (Ae.cssProps[s] = h(e.style, s)), (a = Ae.cssHooks[t] || Ae.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), o === k && (o = ct(e, t, i)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || Ae.isNumeric(r) ? r || 0 : o) : o
        }
    }), m.getComputedStyle ? (ut = function(e) {
        return m.getComputedStyle(e, null)
    }, ct = function(e, t, n) {
        var i, r, o, a = n || ut(e),
            s = a ? a.getPropertyValue(t) || a[t] : k,
            l = e.style;
        return a && ("" !== s || Ae.contains(e.ownerDocument, e) || (s = Ae.style(e, t)), vt.test(s) && mt.test(t) && (i = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = a.width, l.width = i, l.minWidth = r, l.maxWidth = o)), s
    }) : Y.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle
    }, ct = function(e, t, n) {
        var i, r, o, a = n || ut(e),
            s = a ? a[t] : k,
            l = e.style;
        return null == s && l && l[t] && (s = l[t]), vt.test(s) && !pt.test(t) && (i = l.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : s, s = l.pixelLeft + "px", l.left = i, o && (r.left = o)), "" === s ? "auto" : s
    }), Ae.each(["height", "width"], function(e, r) {
        Ae.cssHooks[r] = {
            get: function(e, t, n) {
                if (t) return 0 === e.offsetWidth && ht.test(Ae.css(e, "display")) ? Ae.swap(e, xt, function() {
                    return E(e, r, n)
                }) : E(e, r, n)
            },
            set: function(e, t, n) {
                var i = n && ut(e);
                return _(e, t, n ? S(e, r, n, Ae.support.boxSizing && "border-box" === Ae.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Ae.support.opacity || (Ae.cssHooks.opacity = {
        get: function(e, t) {
            return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = Ae.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === Ae.trim(o.replace(dt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = dt.test(o) ? o.replace(dt, r) : o + " " + r)
        }
    }), Ae(function() {
        Ae.support.reliableMarginRight || (Ae.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return Ae.swap(e, {
                    display: "inline-block"
                }, ct, [e, "marginRight"])
            }
        }), !Ae.support.pixelPosition && Ae.fn.position && Ae.each(["top", "left"], function(e, n) {
            Ae.cssHooks[n] = {
                get: function(e, t) {
                    if (t) return t = ct(e, n), vt.test(t) ? Ae(e).position()[n] + "px" : t
                }
            }
        })
    }), Ae.expr && Ae.expr.filters && (Ae.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !Ae.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || Ae.css(e, "display"))
    }, Ae.expr.filters.visible = function(e) {
        return !Ae.expr.filters.hidden(e)
    }), Ae.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        Ae.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Tt[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, mt.test(r) || (Ae.cssHooks[r + o].set = _)
    });
    var Ct = /%20/g,
        _t = /\[\]$/,
        St = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    Ae.fn.extend({
        serialize: function() {
            return Ae.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Ae.prop(this, "elements");
                return e ? Ae.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Ae(this).is(":disabled") && Nt.test(this.nodeName) && !Et.test(e) && (this.checked || !tt.test(e))
            }).map(function(e, t) {
                var n = Ae(this).val();
                return null == n ? null : Ae.isArray(n) ? Ae.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }), Ae.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = Ae.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === k && (t = Ae.ajaxSettings && Ae.ajaxSettings.traditional), Ae.isArray(e) || e.jquery && !Ae.isPlainObject(e)) Ae.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) D(n, e[n], t, r);
        return i.join("&").replace(Ct, "+")
    }, Ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        Ae.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), Ae.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var At, Dt, jt = Ae.now(),
        Lt = /\?/,
        Ht = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Ot = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = Ae.fn.load,
        $t = {},
        It = {},
        Bt = "*/".concat("*");
    try {
        Dt = V.href
    } catch (rn) {
        (Dt = Y.createElement("a")).href = "", Dt = Dt.href
    }
    At = Ot.exec(Dt.toLowerCase()) || [], Ae.fn.load = function(e, t, n) {
        if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return 0 <= s && (i = e.slice(s, e.length), e = e.slice(0, s)), Ae.isFunction(t) ? (n = t, t = k) : t && "object" == typeof t && (o = "POST"), 0 < a.length && Ae.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, a.html(i ? Ae("<div>").append(Ae.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, Ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Ae.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt,
            type: "GET",
            isLocal: Wt.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Ae.parseJSON,
                "text xml": Ae.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, Ae.ajaxSettings), t) : H(Ae.ajaxSettings, e)
        },
        ajaxPrefilter: j($t),
        ajaxTransport: j(It),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, o, a, s, l, u = t;
                2 !== w && (w = 2, f && clearTimeout(f), h = k, d = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = M(m, T, n)), s = P(m, s, T, r), r ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (Ae.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (Ae.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, r = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", r ? y.resolveWith(g, [o, u, T]) : y.rejectWith(g, [T, u, a]), T.statusCode(x), x = k, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [T, m, r ? o : a]), b.fireWith(g, [T, u]), p && (v.trigger("ajaxComplete", [T, m]), --Ae.active || Ae.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = k), t = t || {};
            var i, r, c, d, f, p, h, o, m = Ae.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? Ae(g) : Ae.event,
                y = Ae.Deferred(),
                b = Ae.Callbacks("once memory"),
                x = m.statusCode || {},
                a = {},
                s = {},
                w = 0,
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!o)
                                for (o = {}; t = Pt.exec(d);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return h && h.abort(t), n(0, t), this
                    }
                };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || Dt) + "").replace(Ht, "").replace(Ft, At[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = Ae.trim(m.dataType || "*").toLowerCase().match(de) || [""], null == m.crossDomain && (i = Ot.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === At[1] && i[2] === At[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = Ae.param(m.data, m.traditional)), L($t, m, t, T), 2 === w) return T;
            for (r in (p = m.global) && 0 == Ae.active++ && Ae.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qt.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Lt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Mt.test(c) ? c.replace(Mt, "$1_=" + jt++) : c + (Lt.test(c) ? "&" : "?") + "_=" + jt++)), m.ifModified && (Ae.lastModified[c] && T.setRequestHeader("If-Modified-Since", Ae.lastModified[c]), Ae.etag[c] && T.setRequestHeader("If-None-Match", Ae.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === w)) return T.abort();
            for (r in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[r](m[r]);
            if (h = L(It, m, t, T)) {
                T.readyState = 1, p && v.trigger("ajaxSend", [T, m]), m.async && 0 < m.timeout && (f = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    w = 1, h.send(a, n)
                } catch (rn) {
                    if (!(w < 2)) throw rn;
                    n(-1, rn)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return Ae.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Ae.get(e, k, t, "script")
        }
    }), Ae.each(["get", "post"], function(e, r) {
        Ae[r] = function(e, t, n, i) {
            return Ae.isFunction(t) && (i = i || n, n = t, t = k), Ae.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), Ae.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Ae.globalEval(e), e
            }
        }
    }), Ae.ajaxPrefilter("script", function(e) {
        e.cache === k && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), Ae.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, r = Y.head || Ae("head")[0] || Y.documentElement;
            return {
                send: function(e, n) {
                    (i = Y.createElement("script")).async = !0, t.scriptCharset && (
                        i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, r.insertBefore(i, r.firstChild)
                },
                abort: function() {
                    i && i.onload(k, !0)
                }
            }
        }
    });
    var zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    Ae.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || Ae.expando + "_" + jt++;
            return this[e] = !0, e
        }
    }), Ae.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = Ae.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || Ae.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = m[i], m[i] = function() {
            o = arguments
        }, n.always(function() {
            m[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, zt.push(i)), o && Ae.isFunction(r) && r(o[0]), o = r = k
        }), "script"
    });
    var Xt, Qt, Gt = 0,
        Vt = m.ActiveXObject && function() {
            var e;
            for (e in Xt) Xt[e](k, !0)
        };
    Ae.ajaxSettings.xhr = m.ActiveXObject ? function() {
        return !this.isLocal && W() || q()
    } : W, Qt = Ae.ajaxSettings.xhr(), Ae.support.cors = !!Qt && "withCredentials" in Qt, (Qt = Ae.support.ajax = !!Qt) && Ae.ajaxTransport(function(c) {
        var d;
        if (!c.crossDomain || Ae.support.cors) return {
            send: function(e, s) {
                var l, t, u = c.xhr();
                if (c.username ? u.open(c.type, c.url, c.async, c.username, c.password) : u.open(c.type, c.url, c.async), c.xhrFields)
                    for (t in c.xhrFields) u[t] = c.xhrFields[t];
                c.mimeType && u.overrideMimeType && u.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (t in e) u.setRequestHeader(t, e[t])
                } catch (n) {}
                u.send(c.hasContent && c.data || null), d = function(e, t) {
                    var n, i, r, o;
                    try {
                        if (d && (t || 4 === u.readyState))
                            if (d = k, l && (u.onreadystatechange = Ae.noop, Vt && delete Xt[l]), t) 4 !== u.readyState && u.abort();
                            else {
                                o = {}, n = u.status, i = u.getAllResponseHeaders(), "string" == typeof u.responseText && (o.text = u.responseText);
                                try {
                                    r = u.statusText
                                } catch (rn) {
                                    r = ""
                                }
                                n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                            }
                    } catch (a) {
                        t || s(-1, a)
                    }
                    o && s(n, r, o, i)
                }, c.async ? 4 === u.readyState ? setTimeout(d) : (l = ++Gt, Vt && (Xt || (Xt = {}, Ae(m).unload(Vt)), Xt[l] = d), u.onreadystatechange = d) : d()
            },
            abort: function() {
                d && d(k, !0)
            }
        }
    });
    var Yt, Kt, Jt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [I],
        nn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Zt.exec(t),
                    o = r && r[3] || (Ae.cssNumber[e] ? "" : "px"),
                    a = (Ae.cssNumber[e] || "px" !== o && +i) && Zt.exec(Ae.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o)
                    for (o = o || a[3], r = r || [], a = +i || 1; a /= s = s || ".5", Ae.style(n.elem, e, a + o), s !== (s = n.cur() / i) && 1 !== s && --l;);
                return r && (n.unit = o, n.start = +a || +i || 0, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    Ae.Animation = Ae.extend(R, {
        tweener: function(e, t) {
            Ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }
    }), (Ae.Tween = B).prototype = {
        constructor: B,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Ae.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Ae.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                Ae.fx.step[e.prop] ? Ae.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Ae.cssProps[e.prop]] || Ae.cssHooks[e.prop]) ? Ae.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ae.each(["toggle", "show", "hide"], function(e, i) {
        var r = Ae.fn[i];
        Ae.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(z(i, !0), e, t, n)
        }
    }), Ae.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = Ae.isEmptyObject(t),
                o = Ae.speed(e, n, i),
                a = function() {
                    var e = R(this, Ae.extend({}, t), o);
                    a.finish = function() {
                        e.stop(!0)
                    }, (r || Ae._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(r, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = k), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = Ae.timers,
                    i = Ae._data(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && en.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || Ae.dequeue(this, r)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Ae._data(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    r = Ae.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, Ae.queue(this, a, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), Ae.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        Ae.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), Ae.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? Ae.extend({}, e) : {
            complete: n || !n && t || Ae.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Ae.isFunction(t) && t
        };
        return i.duration = Ae.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Ae.fx.speeds ? Ae.fx.speeds[i.duration] : Ae.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            Ae.isFunction(i.old) && i.old.call(this), i.queue && Ae.dequeue(this, i.queue)
        }, i
    }, Ae.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Ae.timers = [], Ae.fx = B.prototype.init, Ae.fx.tick = function() {
        var e, t = Ae.timers,
            n = 0;
        for (Yt = Ae.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || Ae.fx.stop(), Yt = k
    }, Ae.fx.timer = function(e) {
        e() && Ae.timers.push(e) && Ae.fx.start()
    }, Ae.fx.interval = 13, Ae.fx.start = function() {
        Kt || (Kt = setInterval(Ae.fx.tick, Ae.fx.interval))
    }, Ae.fx.stop = function() {
        clearInterval(Kt), Kt = null
    }, Ae.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, Ae.fx.step = {}, Ae.expr && Ae.expr.filters && (Ae.expr.filters.animated = function(t) {
        return Ae.grep(Ae.timers, function(e) {
            return t === e.elem
        }).length
    }), Ae.fn.offset = function(t) {
        if (arguments.length) return t === k ? this : this.each(function(e) {
            Ae.offset.setOffset(this, t, e)
        });
        var e, n, i = {
                top: 0,
                left: 0
            },
            r = this[0],
            o = r && r.ownerDocument;
        return o ? (e = o.documentElement, Ae.contains(e, r) ? (typeof r.getBoundingClientRect !== G && (i = r.getBoundingClientRect()), n = U(o), {
            top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : i) : void 0
    }, Ae.offset = {
        setOffset: function(e, t, n) {
            var i = Ae.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, a = Ae(e),
                s = a.offset(),
                l = Ae.css(e, "top"),
                u = Ae.css(e, "left"),
                c = {},
                d = {};
            ("absolute" === i || "fixed" === i) && -1 < Ae.inArray("auto", [l, u]) ? (r = (d = a.position()).top, o = d.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), Ae.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + r), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(c)
        }
    }, Ae.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === Ae.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Ae.nodeName(e[0], "html") || (n = e.offset()), n.top += Ae.css(e[0], "borderTopWidth", !0), n.left += Ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - Ae.css(i, "marginTop", !0),
                    left: t.left - n.left - Ae.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || K; e && !Ae.nodeName(e, "html") && "static" === Ae.css(e, "position");) e = e.offsetParent;
                return e || K
            })
        }
    }), Ae.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = /Y/.test(r);
        Ae.fn[t] = function(e) {
            return Ae.access(this, function(e, t, n) {
                var i = U(e);
                if (n === k) return i ? r in i ? i[r] : i.document.documentElement[t] : e[t];
                i ? i.scrollTo(o ? Ae(i).scrollLeft() : n, o ? n : Ae(i).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), Ae.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        Ae.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(i, e) {
            Ae.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return Ae.access(this, function(e, t, n) {
                    var i;
                    return Ae.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : n === k ? Ae.css(e, t, r) : Ae.style(e, t, n, r)
                }, a, n ? e : k, n, null)
            }
        })
    }), Ae.fn.size = function() {
        return this.length
    }, Ae.fn.andSelf = Ae.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = Ae : (m.jQuery = m.$ = Ae, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Ae
    }))
}(window),
/*!
 * jQuery UI Core 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
function(s, l) {
    function i(e, t) {
        var n, i, r, o = e.nodeName.toLowerCase();
        return "area" === o ? (i = (n = e.parentNode).name, !(!e.href || !i || "map" !== n.nodeName.toLowerCase()) && (!!(r = s("img[usemap=#" + i + "]")[0]) && a(r))) : (/input|select|textarea|button|object/.test(o) ? !e.disabled : "a" === o && e.href || t) && a(e)
    }

    function a(e) {
        return s.expr.filters.visible(e) && !s(e).parents().addBack().filter(function() {
            return "hidden" === s.css(this, "visibility")
        }).length
    }
    var e, t, n = 0,
        r = /^ui-id-\d+$/;
    s.ui = s.ui || {}, s.extend(s.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), s.fn.extend({
        focus: (e = s.fn.focus, function(t, n) {
            return "number" == typeof t ? this.each(function() {
                var e = this;
                setTimeout(function() {
                    s(e).focus(), n && n.call(e)
                }, t)
            }) : e.apply(this, arguments)
        }),
        scrollParent: function() {
            var e;
            return e = s.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(s.css(this, "position")) && /(auto|scroll)/.test(s.css(this, "overflow") + s.css(this, "overflow-y") + s.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(s.css(this, "overflow") + s.css(this, "overflow-y") + s.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? s(document) : e
        },
        zIndex: function(e) {
            if (e !== l) return this.css("zIndex", e);
            if (this.length)
                for (var t, n, i = s(this[0]); i.length && i[0] !== document;) {
                    if (("absolute" === (t = i.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(i.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    i = i.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && s(this).removeAttr("id")
            })
        }
    }), s.extend(s.expr[":"], {
        data: s.expr.createPseudo ? s.expr.createPseudo(function(t) {
            return function(e) {
                return !!s.data(e, t)
            }
        }) : function(e, t, n) {
            return !!s.data(e, n[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(s.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var t = s.attr(e, "tabindex"),
                n = isNaN(t);
            return (n || 0 <= t) && i(e, !n)
        }
    }), s("<a>").outerWidth(1).jquery || s.each(["Width", "Height"], function(e, n) {
        function i(e, t, n, i) {
            return s.each(r, function() {
                t -= parseFloat(s.css(e, "padding" + this)) || 0, n && (t -= parseFloat(s.css(e, "border" + this + "Width")) || 0), i && (t -= parseFloat(s.css(e, "margin" + this)) || 0)
            }), t
        }
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            o = n.toLowerCase(),
            a = {
                innerWidth: s.fn.innerWidth,
                innerHeight: s.fn.innerHeight,
                outerWidth: s.fn.outerWidth,
                outerHeight: s.fn.outerHeight
            };
        s.fn["inner" + n] = function(e) {
            return e === l ? a["inner" + n].call(this) : this.each(function() {
                s(this).css(o, i(this, e) + "px")
            })
        }, s.fn["outer" + n] = function(e, t) {
            return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function() {
                s(this).css(o, i(this, e, !0, t) + "px")
            })
        }
    }), s.fn.addBack || (s.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), s("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (s.fn.removeData = (t = s.fn.removeData, function(e) {
        return arguments.length ? t.call(this, s.camelCase(e)) : t.call(this)
    })), s.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), s.support.selectstart = "onselectstart" in document.createElement("div"), s.fn.extend({
        disableSelection: function() {
            return this.bind((s.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), s.extend(s.ui, {
        plugin: {
            add: function(e, t, n) {
                var i, r = s.ui[e].prototype;
                for (i in n) r.plugins[i] = r.plugins[i] || [], r.plugins[i].push([t, n[i]])
            },
            call: function(e, t, n) {
                var i, r = e.plugins[t];
                if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        hasScroll: function(e, t) {
            if ("hidden" === s(e).css("overflow")) return !1;
            var n = t && "left" === t ? "scrollLeft" : "scrollTop",
                i = !1;
            return 0 < e[n] || (e[n] = 1, i = 0 < e[n], e[n] = 0, i)
        }
    })
}(jQuery),
/*!
 * jQuery UI Widget 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(c, s) {
    var n = 0,
        l = Array.prototype.slice,
        r = c.cleanData;
    c.cleanData = function(e) {
        for (var t, n = 0; null != (t = e[n]); n++) try {
            c(t).triggerHandler("remove")
        } catch (i) {}
        r(e)
    }, c.widget = function(e, n, t) {
        var i, r, o, a, s = {},
            l = e.split(".")[0];
        e = e.split(".")[1], i = l + "-" + e, t || (t = n, n = c.Widget), c.expr[":"][i.toLowerCase()] = function(e) {
            return !!c.data(e, i)
        }, c[l] = c[l] || {}, r = c[l][e], o = c[l][e] = function(e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, c.extend(o, r, {
            version: t.version,
            _proto: c.extend({}, t),
            _childConstructors: []
        }), (a = new n).options = c.widget.extend({}, a.options), c.each(t, function(t, i) {
            var r, o;
            c.isFunction(i) ? s[t] = (r = function() {
                return n.prototype[t].apply(this, arguments)
            }, o = function(e) {
                return n.prototype[t].apply(this, e)
            }, function() {
                var e, t = this._super,
                    n = this._superApply;
                return this._super = r, this._superApply = o, e = i.apply(this, arguments), this._super = t, this._superApply = n, e
            }) : s[t] = i
        }), o.prototype = c.widget.extend(a, {
            widgetEventPrefix: r && a.widgetEventPrefix || e
        }, s, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: i
        }), r ? (c.each(r._childConstructors, function(e, t) {
            var n = t.prototype;
            c.widget(n.namespace + "." + n.widgetName, o, t._proto)
        }), delete r._childConstructors) : n._childConstructors.push(o), c.widget.bridge(e, o)
    }, c.widget.extend = function(e) {
        for (var t, n, i = l.call(arguments, 1), r = 0, o = i.length; r < o; r++)
            for (t in i[r]) n = i[r][t], i[r].hasOwnProperty(t) && n !== s && (c.isPlainObject(n) ? e[t] = c.isPlainObject(e[t]) ? c.widget.extend({}, e[t], n) : c.widget.extend({}, n) : e[t] = n);
        return e
    }, c.widget.bridge = function(o, t) {
        var a = t.prototype.widgetFullName || o;
        c.fn[o] = function(n) {
            var e = "string" == typeof n,
                i = l.call(arguments, 1),
                r = this;
            return n = !e && i.length ? c.widget.extend.apply(null, [n].concat(i)) : n, e ? this.each(function() {
                var e, t = c.data(this, a);
                return t ? c.isFunction(t[n]) && "_" !== n.charAt(0) ? (e = t[n].apply(t, i)) !== t && e !== s ? (r = e && e.jquery ? r.pushStack(e.get()) : e, !1) : void 0 : c.error("no such method '" + n + "' for " + o + " widget instance") : c.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + n + "'")
            }) : this.each(function() {
                var e = c.data(this, a);
                e ? e.option(n || {})._init() : c.data(this, a, new t(n, this))
            }), r
        }
    }, c.Widget = function() {}, c.Widget._childConstructors = [], c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, t) {
            t = c(t || this.defaultElement || this)[0], this.element = c(t), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = c.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = c(), this.hoverable = c(), this.focusable = c(), t !== this && (c.data(t, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === t && this.destroy()
                }
            }), this.document = c(t.style ? t.ownerDocument : t.document || t), this.window = c(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: c.noop,
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: c.noop,
        widget: function() {
            return this.element
        },
        option: function(e, t) {
            var n, i, r, o = e;
            if (0 === arguments.length) return c.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (o = {}, e = (n = e.split(".")).shift(), n.length) {
                    for (i = o[e] = c.widget.extend({}, this.options[e]), r = 0; r < n.length - 1; r++) i[n[r]] = i[n[r]] || {}, i = i[n[r]];
                    if (e = n.pop(), 1 === arguments.length) return i[e] === s ? null : i[e];
                    i[e] = t
                } else {
                    if (1 === arguments.length) return this.options[e] === s ? null : this.options[e];
                    o[e] = t
                } return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(a, s, e) {
            var l, u = this;
            "boolean" != typeof a && (e = s, s = a, a = !1), e ? (s = l = c(s), this.bindings = this.bindings.add(s)) : (e = s, s = this.element, l = this.widget()), c.each(e, function(e, t) {
                function n() {
                    if (a || !0 !== u.options.disabled && !c(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? u[t] : t).apply(u, arguments)
                }
                "string" != typeof t && (n.guid = t.guid = t.guid || n.guid || c.guid++);
                var i = e.match(/^(\w+)\s*(.*)$/),
                    r = i[1] + u.eventNamespace,
                    o = i[2];
                o ? l.delegate(o, r, n) : s.bind(r, n)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    c(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    c(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    c(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    c(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, t, n) {
            var i, r, o = this.options[e];
            if (n = n || {}, (t = c.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], r = t.originalEvent)
                for (i in r) i in t || (t[i] = r[i]);
            return this.element.trigger(t, n), !(c.isFunction(o) && !1 === o.apply(this.element[0], [t].concat(n)) || t.isDefaultPrevented())
        }
    }, c.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, a) {
        c.Widget.prototype["_" + o] = function(t, e, n) {
            "string" == typeof e && (e = {
                effect: e
            });
            var i, r = e ? !0 === e || "number" == typeof e ? a : e.effect || a : o;
            "number" == typeof(e = e || {}) && (e = {
                duration: e
            }), i = !c.isEmptyObject(e), e.complete = n, e.delay && t.delay(e.delay), i && c.effects && c.effects.effect[r] ? t[o](e) : r !== o && t[r] ? t[r](e.duration, e.easing, n) : t.queue(function(e) {
                c(this)[o](), n && n.call(t[0]), e()
            })
        }
    })
}(jQuery),
/*!
 * jQuery UI Position 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(T, r) {
    function k(e, t, n) {
        return [parseFloat(e[0]) * (u.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (u.test(e[1]) ? n / 100 : 1)]
    }

    function C(e, t) {
        return parseInt(T.css(e, t), 10) || 0
    }

    function t(e) {
        var t = e[0];
        return 9 === t.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : T.isWindow(t) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : t.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: t.pageY,
                left: t.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    T.ui = T.ui || {};
    var o, _ = Math.max,
        S = Math.abs,
        E = Math.round,
        i = /left|center|right/,
        a = /top|center|bottom/,
        s = /[\+\-]\d+(\.[\d]+)?%?/,
        l = /^\w+/,
        u = /%$/,
        n = T.fn.position;
    T.position = {
            scrollbarWidth: function() {
                if (o !== r) return o;
                var e, t, n = T("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    i = n.children()[0];
                return T("body").append(n), e = i.offsetWidth, n.css("overflow", "scroll"), e === (t = i.offsetWidth) && (t = n[0].clientWidth), n.remove(), o = e - t
            },
            getScrollInfo: function(e) {
                var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    i = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? T.position.scrollbarWidth() : 0,
                    height: i ? T.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var t = T(e || window),
                    n = T.isWindow(t[0]);
                return {
                    element: t,
                    isWindow: n,
                    isDocument: !!t[0] && 9 === t[0].nodeType,
                    offset: t.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: t.scrollLeft(),
                    scrollTop: t.scrollTop(),
                    width: n ? t.width() : t.outerWidth(),
                    height: n ? t.height() : t.outerHeight()
                }
            }
        }, T.fn.position = function(d) {
            if (!d || !d.of) return n.apply(this, arguments);
            d = T.extend({}, d);
            var f, p, h, m, g, e, v = T(d.of),
                y = T.position.getWithinInfo(d.within),
                b = T.position.getScrollInfo(y),
                x = (d.collision || "flip").split(" "),
                w = {};
            return e = t(v), v[0].preventDefault && (d.at = "left top"), p = e.width, h = e.height, m = e.offset, g = T.extend({}, m), T.each(["my", "at"], function() {
                var e, t, n = (d[this] || "").split(" ");
                1 === n.length && (n = i.test(n[0]) ? n.concat(["center"]) : a.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = i.test(n[0]) ? n[0] : "center", n[1] = a.test(n[1]) ? n[1] : "center", e = s.exec(n[0]), t = s.exec(n[1]), w[this] = [e ? e[0] : 0, t ? t[0] : 0], d[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === d.at[0] ? g.left += p : "center" === d.at[0] && (g.left += p / 2), "bottom" === d.at[1] ? g.top += h : "center" === d.at[1] && (g.top += h / 2), f = k(w.at, p, h), g.left += f[0], g.top += f[1], this.each(function() {
                var n, e, a = T(this),
                    s = a.outerWidth(),
                    l = a.outerHeight(),
                    t = C(this, "marginLeft"),
                    i = C(this, "marginTop"),
                    r = s + t + C(this, "marginRight") + b.width,
                    o = l + i + C(this, "marginBottom") + b.height,
                    u = T.extend({}, g),
                    c = k(w.my, a.outerWidth(), a.outerHeight());
                "right" === d.my[0] ? u.left -= s : "center" === d.my[0] && (u.left -= s / 2), "bottom" === d.my[1] ? u.top -= l : "center" === d.my[1] && (u.top -= l / 2), u.left += c[0], u.top += c[1], T.support.offsetFractions || (u.left = E(u.left), u.top = E(u.top)), n = {
                    marginLeft: t,
                    marginTop: i
                }, T.each(["left", "top"], function(e, t) {
                    T.ui.position[x[e]] && T.ui.position[x[e]][t](u, {
                        targetWidth: p,
                        targetHeight: h,
                        elemWidth: s,
                        elemHeight: l,
                        collisionPosition: n,
                        collisionWidth: r,
                        collisionHeight: o,
                        offset: [f[0] + c[0], f[1] + c[1]],
                        my: d.my,
                        at: d.at,
                        within: y,
                        elem: a
                    })
                }), d.using && (e = function(e) {
                    var t = m.left - u.left,
                        n = t + p - s,
                        i = m.top - u.top,
                        r = i + h - l,
                        o = {
                            target: {
                                element: v,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: h
                            },
                            element: {
                                element: a,
                                left: u.left,
                                top: u.top,
                                width: s,
                                height: l
                            },
                            horizontal: n < 0 ? "left" : 0 < t ? "right" : "center",
                            vertical: r < 0 ? "top" : 0 < i ? "bottom" : "middle"
                        };
                    p < s && S(t + n) < p && (o.horizontal = "center"), h < l && S(i + r) < h && (o.vertical = "middle"), _(S(t), S(n)) > _(S(i), S(r)) ? o.important = "horizontal" : o.important = "vertical", d.using.call(this, e, o)
                }), a.offset(T.extend(u, {
                    using: e
                }))
            })
        }, T.ui.position = {
            fit: {
                left: function(e, t) {
                    var n, i = t.within,
                        r = i.isWindow ? i.scrollLeft : i.offset.left,
                        o = i.width,
                        a = e.left - t.collisionPosition.marginLeft,
                        s = r - a,
                        l = a + t.collisionWidth - o - r;
                    t.collisionWidth > o ? 0 < s && l <= 0 ? (n = e.left + s + t.collisionWidth - o - r, e.left += s - n) : e.left = 0 < l && s <= 0 ? r : l < s ? r + o - t.collisionWidth : r : 0 < s ? e.left += s : 0 < l ? e.left -= l : e.left = _(e.left - a, e.left)
                },
                top: function(e, t) {
                    var n, i = t.within,
                        r = i.isWindow ? i.scrollTop : i.offset.top,
                        o = t.within.height,
                        a = e.top - t.collisionPosition.marginTop,
                        s = r - a,
                        l = a + t.collisionHeight - o - r;
                    t.collisionHeight > o ? 0 < s && l <= 0 ? (n = e.top + s + t.collisionHeight - o - r, e.top += s - n) : e.top = 0 < l && s <= 0 ? r : l < s ? r + o - t.collisionHeight : r : 0 < s ? e.top += s : 0 < l ? e.top -= l : e.top = _(e.top - a, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var n, i, r = t.within,
                        o = r.offset.left + r.scrollLeft,
                        a = r.width,
                        s = r.isWindow ? r.scrollLeft : r.offset.left,
                        l = e.left - t.collisionPosition.marginLeft,
                        u = l - s,
                        c = l + t.collisionWidth - a - s,
                        d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        p = -2 * t.offset[0];
                    u < 0 ? ((n = e.left + d + f + p + t.collisionWidth - a - o) < 0 || n < S(u)) && (e.left += d + f + p) : 0 < c && (0 < (i = e.left - t.collisionPosition.marginLeft + d + f + p - s) || S(i) < c) && (e.left += d + f + p)
                },
                top: function(e, t) {
                    var n, i, r = t.within,
                        o = r.offset.top + r.scrollTop,
                        a = r.height,
                        s = r.isWindow ? r.scrollTop : r.offset.top,
                        l = e.top - t.collisionPosition.marginTop,
                        u = l - s,
                        c = l + t.collisionHeight - a - s,
                        d = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        p = -2 * t.offset[1];
                    u < 0 ? (i = e.top + d + f + p + t.collisionHeight - a - o, e.top + d + f + p > u && (i < 0 || i < S(u)) && (e.top += d + f + p)) : 0 < c && (n = e.top - t.collisionPosition.marginTop + d + f + p - s, e.top + d + f + p > c && (0 < n || S(n) < c) && (e.top += d + f + p))
                }
            },
            flipfit: {
                left: function() {
                    T.ui.position.flip.left.apply(this, arguments), T.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    T.ui.position.flip.top.apply(this, arguments), T.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, t, n, i, r, o = document.getElementsByTagName("body")[0],
                a = document.createElement("div");
            for (r in e = document.createElement(o ? "div" : "body"), n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, o && T.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                }), n) e.style[r] = n[r];
            e.appendChild(a), (t = o || document.documentElement).insertBefore(e, t.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", i = T(a).offset().left, T.support.offsetFractions = 10 < i && i < 11, e.innerHTML = "", t.removeChild(e)
        }()
}(jQuery),
/*!
 * jQuery UI Menu 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
function(l) {
    l.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, l.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var t = l(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && l(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var t = l(e.currentTarget);
                    t.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, t)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function(e) {
                    this._delay(function() {
                        l.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    l(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = l(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function t(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, i, r, o, a, s = !0;
            switch (e.keyCode) {
                case l.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case l.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case l.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case l.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case l.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case l.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case l.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case l.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case l.ui.keyCode.ENTER:
                case l.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case l.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    s = !1, i = this.previousFilter || "", r = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), r === i ? o = !0 : r = i + r, a = new RegExp("^" + t(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return a.test(l(this).children("a").text())
                    }), (n = o && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n).length || (r = String.fromCharCode(e.keyCode), a = new RegExp("^" + t(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return a.test(l(this).children("a").text())
                    })), n.length ? (this.focus(e, n), 1 < n.length ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            s && e.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                t = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), t.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = l(this),
                    t = e.prev("a"),
                    n = l("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                t.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", t.attr("id"))
            }), (e = t.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = l(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !l.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
        },
        focus: function(e, t) {
            var n, i;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), (n = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(e) {
            var t, n, i, r, o, a;
            this._hasScroll() && (t = parseFloat(l.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(l.css(this.activeMenu[0], "paddingTop")) || 0, i = e.offset().top - this.activeMenu.offset().top - t - n, r = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = e.height(), i < 0 ? this.activeMenu.scrollTop(r + i) : o < i + a && this.activeMenu.scrollTop(r + i - o + a))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            }))
        },
        _startOpening: function(e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function(e) {
            var t = l.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var e = n ? this.element : l(t && t.target).closest(this.element.find(".ui-menu"));
                e.length || (e = this.element), this._close(e), this.blur(t), this.activeMenu = e
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var i;
            this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(n, i)
        },
        nextPage: function(e) {
            var t, n, i;
            this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (t = l(this)).offset().top - n - i < 0
            }), this.focus(e, t)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(e)
        },
        previousPage: function(e) {
            var t, n, i;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (t = l(this)).offset().top - n + i
            }), this.focus(e, t)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())) : this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || l(e.target).closest(".ui-menu-item");
            var t = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, t)
        }
    })
}(jQuery),
/*!
 * jQuery UI Autocomplete 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 *	jquery.ui.menu.js
 */
function(a) {
    a.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var n, i, r, e = this.element[0].nodeName.toLowerCase(),
                t = "textarea" === e,
                o = "input" === e;
            this.isMultiLine = !!t || !o && this.element.prop("isContentEditable"), this.valueMethod = this.element[t || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) i = r = n = !0;
                    else {
                        i = r = n = !1;
                        var t = a.ui.keyCode;
                        switch (e.keyCode) {
                            case t.PAGE_UP:
                                n = !0, this._move("previousPage", e);
                                break;
                            case t.PAGE_DOWN:
                                n = !0, this._move("nextPage", e);
                                break;
                            case t.UP:
                                n = !0, this._keyEvent("previous", e);
                                break;
                            case t.DOWN:
                                n = !0, this._keyEvent("next", e);
                                break;
                            case t.ENTER:
                            case t.NUMPAD_ENTER:
                                this.menu.active && (n = !0, e.preventDefault(), this.menu.select(e));
                                break;
                            case t.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case t.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(e)
                        }
                    }
                },
                keypress: function(e) {
                    if (n) return n = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault());
                    if (!i) {
                        var t = a.ui.keyCode;
                        switch (e.keyCode) {
                            case t.PAGE_UP:
                                this._move("previousPage", e);
                                break;
                            case t.PAGE_DOWN:
                                this._move("nextPage", e);
                                break;
                            case t.UP:
                                this._keyEvent("previous", e);
                                break;
                            case t.DOWN:
                                this._keyEvent("next", e)
                        }
                    }
                },
                input: function(e) {
                    if (r) return r = !1, void e.preventDefault();
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), this._change(e))
                }
            }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    a(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(e) {
                            e.target === t.element[0] || e.target === n || a.contains(n, e.target) || t.close()
                        })
                    })
                },
                menufocus: function(e, t) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        a(e.target).trigger(e.originalEvent)
                    });
                    var n = t.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item"),
                        i = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function() {
                        this.previous = i, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? a(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var n, i, r = this;
            a.isArray(this.options.source) ? (n = this.options.source, this.source = function(e, t) {
                t(a.ui.autocomplete.filter(n, e.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, t) {
                r.xhr && r.xhr.abort(), r.xhr = a.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        t(e)
                    },
                    error: function() {
                        t([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return a.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : a.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : a.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function(e) {
            var t = this.menu.element.empty();
            this._renderMenu(t, e), this.isNewMenu = !0, this.menu.refresh(), t.show(), this._resizeMenu(), t.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(n, e) {
            var i = this;
            a.each(e, function(e, t) {
                i._renderItemData(n, t)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(e, t) {
            return a("<li>").append(a("<a>").text(t.label)).appendTo(e)
        },
        _move: function(e, t) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur()) : void this.menu[e](t);
            this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, t) {
            var n = new RegExp(a.ui.autocomplete.escapeRegex(t), "i");
            return a.grep(e, function(e) {
                return n.test(e.label || e.value || e)
            })
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
}(jQuery),
function(d, f) {
    var p;
    d.rails !== f && d.error("jquery-ujs has already been loaded!"), d.rails = p = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var t = d('meta[name="csrf-token"]').attr("content");
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        fire: function(e, t, n) {
            var i = d.Event(t);
            return e.trigger(i, n), !1 !== i.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(e) {
            return d.ajax(e)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(i) {
            var e, t, n, r, o, a, s, l;
            if (p.fire(i, "ajax:before")) {
                if (o = (r = i.data("cross-domain")) === f ? null : r, a = i.data("with-credentials") || null, s = i.data("type") || d.ajaxSettings && d.ajaxSettings.dataType, i.is("form")) {
                    e = i.attr("method"), t = i.attr("action"), n = i.serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (n.push(u), i.data("ujs:submit-button", null))
                } else i.is(p.inputChangeSelector) ? (e = i.data("method"), t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(p.buttonClickSelector) ? (e = i.data("method") || "get", t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (e = i.data("method"), t = p.href(i), n = i.data("params") || null);
                l = {
                    type: e || "GET",
                    data: n,
                    dataType: s,
                    beforeSend: function(e, t) {
                        return t.dataType === f && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script), p.fire(i, "ajax:beforeSend", [e, t])
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: o
                }, a && (l.xhrFields = {
                    withCredentials: a
                }), t && (l.url = t);
                var c = p.ajax(l);
                return i.trigger("ajax:send", c), c
            }
            return !1
        },
        handleMethod: function(e) {
            var t = p.href(e),
                n = e.data("method"),
                i = e.attr("target"),
                r = d("meta[name=csrf-token]").attr("content"),
                o = d("meta[name=csrf-param]").attr("content"),
                a = d('<form method="post" action="' + t + '"></form>'),
                s = '<input name="_method" value="' + n + '" type="hidden" />';
            o !== f && r !== f && (s += '<input name="' + o + '" value="' + r + '" type="hidden" />'), i && a.attr("target", i), a.hide().append(s).appendTo("body"), a.submit()
        },
        disableFormElements: function(e) {
            e.find(p.disableSelector).each(function() {
                var e = d(this),
                    t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[t]()), e[t](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(p.enableSelector).each(function() {
                var e = d(this),
                    t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"),
                i = !1;
            return !n || (p.fire(e, "confirm") && (i = p.confirm(n), t = p.fire(e, "confirm:complete", [i])), i && t)
        },
        blankInputs: function(e, t, n) {
            var i, r = d(),
                o = t || "input,textarea",
                a = e.find(o);
            return a.each(function() {
                if (i = d(this), !(i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : i.val()) == !n) {
                    if (i.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length) return !0;
                    r = r.add(i)
                }
            }), !!r.length && r
        },
        nonBlankInputs: function(e, t) {
            return p.blankInputs(e, t, !0)
        },
        stopEverything: function(e) {
            return d(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return p.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== f && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, p.fire(d(document), "rails:attachBindings") && (d.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || p.CSRFProtection(n)
    }), d(document).delegate(p.linkDisableSelector, "ajax:complete", function() {
        p.enableElement(d(this))
    }), d(document).delegate(p.linkClickSelector, "click.rails", function(e) {
        var t = d(this),
            n = t.data("method"),
            i = t.data("params");
        if (!p.allowAction(t)) return p.stopEverything(e);
        if (t.is(p.linkDisableSelector) && p.disableElement(t), t.data("remote") === f) return t.data("method") ? (p.handleMethod(t), !1) : void 0;
        if ((e.metaKey || e.ctrlKey) && (!n || "GET" === n) && !i) return !0;
        var r = p.handleRemote(t);
        return !1 === r ? p.enableElement(t) : r.error(function() {
            p.enableElement(t)
        }), !1
    }), d(document).delegate(p.buttonClickSelector, "click.rails", function(e) {
        var t = d(this);
        return p.allowAction(t) ? (p.handleRemote(t), !1) : p.stopEverything(e)
    }), d(document).delegate(p.inputChangeSelector, "change.rails", function(e) {
        var t = d(this);
        return p.allowAction(t) ? (p.handleRemote(t), !1) : p.stopEverything(e)
    }), d(document).delegate(p.formSubmitSelector, "submit.rails", function(e) {
        var t = d(this),
            n = t.data("remote") !== f,
            i = p.blankInputs(t, p.requiredInputSelector),
            r = p.nonBlankInputs(t, p.fileInputSelector);
        if (!p.allowAction(t)) return p.stopEverything(e);
        if (i && t.attr("novalidate") == f && p.fire(t, "ajax:aborted:required", [i])) return p.stopEverything(e);
        if (n) {
            if (r) {
                setTimeout(function() {
                    p.disableFormElements(t)
                }, 13);
                var o = p.fire(t, "ajax:aborted:file", [r]);
                return o || setTimeout(function() {
                    p.enableFormElements(t)
                }, 13), o
            }
            return p.handleRemote(t), !1
        }
        setTimeout(function() {
            p.disableFormElements(t)
        }, 13)
    }), d(document).delegate(p.formInputClickSelector, "click.rails", function(e) {
        var t = d(this);
        if (!p.allowAction(t)) return p.stopEverything(e);
        var n = t.attr("name"),
            i = n ? {
                name: n,
                value: t.val()
            } : null;
        t.closest("form").data("ujs:submit-button", i)
    }), d(document).delegate(p.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && p.disableFormElements(d(this))
    }), d(document).delegate(p.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && p.enableFormElements(d(this))
    }), d(function() {
        var e = d("meta[name=csrf-token]").attr("content"),
            t = d("meta[name=csrf-param]").attr("content");
        d('form input[name="' + t + '"]').val(e)
    }))
}(jQuery),
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 0.11.1
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2011, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
function(f) {
    function n() {
        var e = t(this);
        return isNaN(e.datetime) || f(this).text(i(e.datetime)), this
    }

    function t(e) {
        if (!(e = f(e)).data("timeago")) {
            e.data("timeago", {
                datetime: o.datetime(e)
            });
            var t = f.trim(e.text());
            0 < t.length && e.attr("title", t)
        }
        return e.data("timeago")
    }

    function i(e) {
        return o.inWords(r(e))
    }

    function r(e) {
        return (new Date).getTime() - e.getTime()
    }
    f.timeago = function(e) {
        return e instanceof Date ? i(e) : i("string" == typeof e ? f.timeago.parse(e) : f.timeago.datetime(e))
    };
    var o = f.timeago;
    f.extend(f.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(r) {
            function e(e, t) {
                var n = f.isFunction(e) ? e(t, r) : e,
                    i = o.numbers && o.numbers[t] || t;
                return n.replace(/%d/i, i)
            }
            var o = this.settings.strings,
                t = o.prefixAgo,
                n = o.suffixAgo;
            this.settings.allowFuture && r < 0 && (t = o.prefixFromNow, n = o.suffixFromNow);
            var i = Math.abs(r) / 1e3,
                a = i / 60,
                s = a / 60,
                l = s / 24,
                u = l / 365,
                c = i < 45 && e(o.seconds, Math.round(i)) || i < 90 && e(o.minute, 1) || a < 45 && e(o.minutes, Math.round(a)) || a < 90 && e(o.hour, 1) || s < 24 && e(o.hours, Math.round(s)) || s < 42 && e(o.day, 1) || l < 30 && e(o.days, Math.round(l)) || l < 45 && e(o.month, 1) || l < 365 && e(o.months, Math.round(l / 30)) || u < 1.5 && e(o.year, 1) || e(o.years, Math.round(u)),
                d = o.wordSeparator === undefined ? " " : o.wordSeparator;
            return f.trim([t, c, n].join(d))
        },
        parse: function(e) {
            var t = f.trim(e);
            return t = (t = (t = (t = t.replace(/\.\d\d\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(t)
        },
        datetime: function(e) {
            var t = "time" === f(e).get(0).tagName.toLowerCase() ? f(e).attr("datetime") : f(e).attr("title");
            return o.parse(t)
        }
    }), f.fn.timeago = function() {
        var e = this;
        e.each(n);
        var t = o.settings;
        return 0 < t.refreshMillis && setInterval(function() {
            e.each(n)
        }, t.refreshMillis), e
    }, document.createElement("abbr"), document.createElement("time")
}(jQuery), window.Rainbow = function() {
        function e(e) {
            var t = e.getAttribute && e.getAttribute("data-language") || null;
            if (!t) {
                var n;
                e = e.attributes.length;
                for (n = 0; n < e; ++n) "data-language" === "data-language" [n].nodeName && (t = "data-language" [n].nodeValue)
            }
            return t
        }

        function o(e) {
            e.className += e.className ? " rainbow" : "rainbow"
        }

        function d(e, t) {
            for (var n in x[w])
                if (e == (n = parseInt(n, 10)) && t == x[w][n] || !(e <= n && t >= x[w][n]) || (delete x[w][n], delete b[w][n]), n <= e && e < x[w][n] || n < t && t < x[w][n]) return !0;
            return !1
        }

        function f(e, t) {
            return '<span class="' + e.replace(/\./g, " ") + (n ? " " + n : "") + '">' + t + "</span>"
        }

        function p(e, t) {
            var n, i = 0;
            for (n = 1; n < t; ++n) e[n] && (i += e[n].length);
            return i
        }

        function h(t, s, n, i) {
            var l = t.exec(n);
            if (l) {
                ++k, !s.name && s.matches[0] && (s.name = s.matches[0], delete s.matches[0]);
                var u = l[0],
                    r = l.index,
                    o = l[0].length + r,
                    a = function() {
                        function e() {
                            h(t, s, n, i)
                        }
                        0 < k % 100 ? e() : setTimeout(e, 0)
                    };
                if (d(r, o)) a();
                else {
                    var e = g(s.matches),
                        c = function(e, t, n) {
                            if (e >= t.length) n(u);
                            else {
                                var i = function() {
                                        c(++e, t, n)
                                    },
                                    r = l[t[e]];
                                if (r) {
                                    var o = s.matches[t[e]],
                                        a = o.language;
                                    a ? y(r, a, function(e) {
                                        u = u.replace(r, e), i()
                                    }) : "object" == typeof o ? v(r, o.length ? o : [o], function(e) {
                                        u = u.replace(r, e), i()
                                    }) : (u = m(p(l, t[e]), r, f(o, r), u), i())
                                } else i()
                            }
                        };
                    c(0, e, function(e) {
                        s.name && (e = f(s.name, e)), b[w] || (b[w] = {}, x[w] = {}), b[w][r] = {
                            replace: l[0],
                            "with": e
                        }, x[w][r] = o, a()
                    })
                }
            } else i()
        }

        function m(e, t, n, i) {
            return i.substr(0, e) + i.substr(e).replace(t, n)
        }

        function g(e) {
            var t, n = [];
            for (t in e) e.hasOwnProperty(t) && n.push(t);
            return n.sort(function(e, t) {
                return t - e
            })
        }

        function v(n, e, i) {
            function r(e, t) {
                t < e.length ? h(e[t].pattern, e[t], n, function() {
                    r(e, ++t)
                }) : a(n, function(e) {
                    delete b[w], delete x[w], --w, i(e)
                })
            }++w, r(e, 0)
        }

        function a(e, t) {
            function a(e, t, n, i) {
                if (n < t.length) {
                    ++C;
                    var r = t[n],
                        o = b[w][r];
                    e = m(r, o.replace, o["with"], e), r = function() {
                        a(e, t, ++n, i)
                    };
                    0 < C % 250 ? r() : setTimeout(r, 0)
                } else i(e)
            }
            a(e, g(b[w]), 0, t)
        }

        function y(e, t, n) {
            var i = u[t] || [],
                r = u[T] || [];
            t = c[t] ? i : i.concat(r);
            v(e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t, n)
        }

        function s(t, n, i) {
            if (n < t.length) {
                var r = e(t[n]) || e(t[n].parentNode);
                return -1 < (" " + t[n].className + " ").indexOf(" rainbow ") || !r ? s(t, ++n, i) : (r = r.toLowerCase(), o(t[n]), y(t[n].innerHTML, r, function(e) {
                    t[n].innerHTML = e, b = {}, x = {}, l && l(t[n], r), setTimeout(function() {
                        s(t, ++n, i)
                    }, 0)
                }))
            }
            i && i()
        }

        function i(e, t) {
            var n, i = (e || document).getElementsByTagName("pre"),
                r = (e || document).getElementsByTagName("code"),
                o = [];
            for (n = 0; n < r.length; ++n) o.push(r[n]);
            for (n = 0; n < i.length; ++n) i[n].getElementsByTagName("code").length || o.push(i[n]);
            s(o, 0, t)
        }
        var n, l, b = {},
            x = {},
            u = {},
            c = {},
            w = 0,
            T = 0,
            k = 0,
            C = 0;
        return {
            extend: function(e, t, n) {
                1 == arguments.length && (t = e, e = T), c[e] = n, u[e] = t.concat(u[e] || [])
            },
            b: function(e) {
                l = e
            },
            a: function(e) {
                n = e
            },
            color: function(e, t, n) {
                return "string" == typeof e ? y(e, t, n) : "function" == typeof e ? i(null, e) : void i(e instanceof Event ? null : e, t)
            }
        }
    }(), window.addEventListener ? window.addEventListener("load", Rainbow.color, !1) : window.attachEvent("onload", Rainbow.color), Rainbow.onHighlight = Rainbow.b, Rainbow.addClass = Rainbow.a, Rainbow.color = Rainbow.color, Rainbow.extend("shell", [{
        name: "shell",
        matches: {
            1: {
                language: "shell"
            }
        },
        pattern: /\$\(([\s\S]*?)\)/gm
    }, {
        matches: {
            2: "string"
        },
        pattern: /(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm
    }, {
        name: "keyword.operator",
        pattern: /&lt;|&gt;|&amp;/g
    }, {
        name: "comment",
        pattern: /\#[\s\S]*?$/gm
    }, {
        name: "meta.function",
        pattern: /(.+?)(?=\(\)\s{0,}\{)/g
    }, {
        name: "support.command",
        pattern: /\b(echo|rm|ls|(mk|rm)dir|cd|find|cp|exit|pwd|exec|trap|source|shift|unset)/g
    }, {
        matches: {
            1: "keyword"
        },
        pattern: /\b(break|case|continue|do|done|elif|else|esac|eval|export|fi|for|function|if|in|local|return|set|then|unset|until|while)(?=\(|\b)/g
    }], !0), Rainbow.extend([{
        matches: {
            1: {
                name: "keyword.operator",
                pattern: /\=/g
            },
            2: "string"
        },
        pattern: /(\(|\s|\[|\=)(('|")[\s\S]*?(\3))/gm
    }, {
        name: "comment",
        pattern: /\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm
    }, {
        name: "integer",
        pattern: /\b(0x[\da-f]+|\d+)\b/g
    }, {
        name: "constant",
        pattern: /\b[A-Z0-9_]{2,}\b/g
    }, {
        matches: {
            1: "keyword"
        },
        pattern: /\b(and|array|as|bool(ean)?|c(atch|har|lass|onst)|d(ef|elete|ie|o(uble)?)|e(cho|lse(if)?|xit|xtends)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/g
    }, {
        name: "constant.language",
        pattern: /true|false|null/g
    }, {
        name: "keyword.operator",
        pattern: /\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g
    }, {
        matches: {
            1: "function.call"
        },
        pattern: /(\w+?)(?=\()/g
    }, {
        matches: {
            1: "keyword",
            2: "meta.function-call"
        },
        pattern: /(function)\s(.*?)(?=\()/g
    }]), Rainbow.extend("javascript", [{
        name: "selector",
        pattern: /\s\$(?=\.|\()/g
    }, {
        name: "support",
        pattern: /\b(window|document)\b/g
    }, {
        matches: {
            1: "support.property"
        },
        pattern: /\.(length|node(Name|Value))\b/g
    }, {
        matches: {
            1: "support.function"
        },
        pattern: /(setTimeout|setInterval)(?=\()/g
    }, {
        matches: {
            1: "support.method"
        },
        pattern: /\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g
    }, {
        matches: {
            2: [{
                name: "string",
                pattern: /('|")(.*?)(\1)/g
            }, {
                name: "meta.script-tag",
                pattern: /(\w+)/g
            }]
        },
        pattern: /(&lt;\/?)(script(.*?))(&gt;)/g
    }, {
        name: "regex",
        matches: {
            1: "regex.open",
            2: {
                name: "constant.regex.escape",
                pattern: /\\(.){1}/g
            },
            3: "regex.close",
            4: "regex.modifier"
        },
        pattern: /(\/)(.+)(\/)([igm]{0,3})/g
    }, {
        name: "meta.function-call",
        pattern: /(\w+)(?=:\s{0,}function)/g
    }]), Rainbow.extend("python", [{
        name: "variable",
        pattern: /\b[A-Z0-9_]{2,}\b/g
    }, {
        name: "variable.self",
        pattern: /self/g
    }, {
        name: "constant.language",
        pattern: /None|True|False/g
    }, {
        name: "support.object",
        pattern: /object/g
    }, {
        matches: {
            1: "keyword"
        },
        pattern: /\b(not|self|in|from)(?=\(|\b)/g
    }, {
        matches: {
            1: "keyword.class",
            2: "meta.class-name",
            3: "meta.parent.class-name"
        },
        pattern: /(class)\s+(\w+?)\((\w+?)\)/g
    }, {
        matches: {
            1: "keyword",
            2: "support.magic"
        },
        pattern: /(def)\s(__.*?)(?=\()/g
    }, {
        matches: {
            1: "keyword",
            2: "meta.function"
        },
        pattern: /(def)\s(.*?)(?=\()/g
    }]), Rainbow.extend("html", [{
        name: "php",
        matches: {
            2: {
                language: "php"
            }
        },
        pattern: /&lt;\?(php)?([\s\S]*?)(\?&gt;)/gm
    }, {
        name: "css",
        matches: {
            0: {
                language: "css"
            }
        },
        pattern: /&lt;style(.*?)&gt;([\s\S]*?)&lt;\/style&gt;/gm
    }, {
        name: "js",
        matches: {
            0: {
                language: "javascript"
            }
        },
        pattern: /&lt;script(?! src)(.*?)&gt;([\s\S]*?)&lt;\/script&gt;/gm
    }, {
        name: "comment.html",
        pattern: /&lt;\!--[\S\s]*?--&gt;/g
    }, {
        matches: {
            1: "support.tag.open",
            2: "support.tag.close"
        },
        pattern: /(&lt;)|(&gt;)/g
    }, {
        name: "support.tag",
        matches: {
            1: "support.tag",
            2: "support.tag.special",
            3: "support.tag-name"
        },
        pattern: /(&lt;)(\/|\!?)(\w+)/g
    }, {
        matches: {
            1: "support.attribute"
        },
        pattern: /([a-z-]+)(?=\=)/g
    }, {
        matches: {
            1: "support.operator",
            2: "string.quote",
            3: "string.value",
            4: "string.quote"
        },
        pattern: /(=)('|")(.*?)(\2)/g
    }, {
        matches: {
            1: "support.operator",
            2: "support.value"
        },
        pattern: /(=)([a-zA-Z\-0-9]*)\b/g
    }, {
        name: "support.attribute",
        pattern: /(\w+)(?=&gt;)/g
    }], !0), Rainbow.extend("php", [{
        name: "support",
        pattern: /\becho\b/g
    }, {
        matches: {
            1: "variable.dollar-sign",
            2: "variable"
        },
        pattern: /(\$)(\w+)\b/g
    }, {
        name: "keyword.dot",
        pattern: /\./g
    }, {
        name: "keyword",
        pattern: /\b(continue|break|case|require(_once)?|include(_once)?)\b/g
    }, {
        matches: {
            1: "keyword",
            2: {
                name: "support.class",
                pattern: /\w+/g
            }
        },
        pattern: /(instanceof)\s([^\$].*?)(\)|;)/g
    }, {
        matches: {
            1: "support.function"
        },
        pattern: /\b(apc_(fetch|store)|array(_sum|_rand)?|asort|count|empty|explode|file_(get_contents|exists)|get_(called_)?class|getenv|in_array|is_(numeric|array|link)|isset|json_(encode|decode)|mt_rand|rand|rmdir|round|spl_autoload_register|str(tolower|str|pos|_replace)|trigger_error|un(link|set))(?=\()/g
    }, {
        name: "phptag",
        pattern: /(&lt;\?(php)?|\?&gt;)/g
    }, {
        matches: {
            1: "keyword.namespace",
            2: {
                name: "support.namespace",
                pattern: /\w+/g
            }
        },
        pattern: /\b(namespace\s)(.*?);/g
    }, {
        matches: {
            1: "keyword.class.description",
            2: "keyword.class",
            3: "meta.class-name",
            4: "keyword.extends",
            5: "meta.parent.class-name"
        },
        pattern: /\b(abstract|final)?\s?(class)\s(\w+)(\sextends\s)?([\w\\]*)?\s?\{?\n/g
    }, {
        name: "keyword.static",
        pattern: /self::/g
    }, {
        matches: {
            1: "keyword",
            2: "support.magic"
        },
        pattern: /(function)\s(__.*?)(?=\()/g
    }, {
        matches: {
            1: "keyword.new",
            2: {
                name: "support.class",
                pattern: /\w+/g
            }
        },
        pattern: /\b(new)\s([^\$].*?)(?=\)|\(|;)/g
    }, {
        matches: {
            1: {
                name: "support.class",
                pattern: /\w+/g
            }
        },
        pattern: /([\w\\]*?)::\b/g
    }, {
        matches: {
            2: {
                name: "support.class",
                pattern: /\w+/g
            }
        },
        pattern: /(\(|,\s?)([\w\\]*?)(?=\s\$)/g
    }]), Rainbow.extend("ruby", [{
        name: "string",
        pattern: /(?=['"](.*?)['"])(?:"\1"|'\1')/g
    }, {
        name: "string",
        pattern: /%[qQ](?=(\(|\[|\{|&lt;|.)(.*?)(?:'|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)/g
    }, {
        matches: {
            1: "string",
            2: "string",
            3: "string"
        },
        pattern: /(&lt;&lt;)(\w+).*?$([\s\S]*?^\2)/gm
    }, {
        matches: {
            1: "string",
            2: "string",
            3: "string"
        },
        pattern: /(&lt;&lt;\-)(\w+).*?$([\s\S]*?\2)/gm
    }, {
        name: "regex",
        matches: {
            1: "regex.open",
            2: {
                name: "constant.regex.escape",
                pattern: /\\(.){1}/g
            },
            3: "regex.close",
            4: "regex.modifier"
        },
        pattern: /(\/)(.*?)(\/)([a-z]*)/g
    }, {
        name: "constant.regex",
        matches: {
            1: "support.regex.open",
            2: {
                name: "constant.regex.escape",
                pattern: /\\(.){1}/g
            },
            3: "support.regex.close",
            4: "support.regex.modifier"
        },
        pattern: /%r(?=(\(|\[|\{|&lt;|.)(.*?)('|\)|\]|\}|&gt;|\1))(?:\(\2\)|\[\2\]|\{\2\}|\&lt;\2&gt;|\1\2\1)([a-z]*)/g
    }, {
        name: "comment",
        pattern: /^=begin[\s\S]*?^=end|\#.*?$/gm
    }, {
        matches: {
            1: "constant"
        },
        pattern: /(\w+:)[^:]/g
    }, {
        matches: {
            1: "constant"
        },
        pattern: /[^:](:(?:\w+|(?=['"](.*?)['"])(?:"\2"|'\2')))/g
    }, {
        name: "integer",
        pattern: /\b(0x[\da-f]+|\d+)\b/g
    }, {
        name: "constant",
        pattern: /\b[A-Z0-9_]{2,}\b/g
    }, {
        matches: {
            1: "keyword.class",
            2: "meta.class-name",
            4: "meta.parent.class-name"
        },
        pattern: /(class|module)\s+(\w+)(<\s+(\w+))?/g
    }, {
        name: "meta.class-name",
        pattern: /\b[A-Z]\w*[a-z]\w*\b/g
    }, {
        name: "variable.global",
        pattern: /\$(\w+)\b/g
    }, {
        name: "variable.class",
        pattern: /@@(\w+)\b/g
    }, {
        name: "variable.instance",
        pattern: /@(\w+)\b/g
    }, {
        matches: {
            1: "keyword"
        },
        pattern: /\b(alias|and|begin|break|case|class|continue|def|defined|do|else|elsif|end|ensure|extend|false|for|if|in|include|module|next|nil|not|private|or|raise|redo|require|rescue|retry|return|self|super|then|true|undef|unless|until|when|while|yield)(?=\(|\b)/g
    }], !0),
    /*
     *   JavaScript interface for the SoundCloud Player widget
     *   Author: Matas Petrikas, matas@soundcloud.com
     *   Copyright (c) 2009  SoundCloud Ltd.
     *   Licensed under the MIT license:
     *   http://www.opensource.org/licenses/mit-license.php
     */
    function() {
        var i = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
        window.soundcloud = {
            version: "0.1",
            debug: !1,
            _listeners: [],
            _redispatch: function(e, t, n) {
                var i, r = this._listeners[e] || [],
                    o = "soundcloud:" + e;
                try {
                    i = this.getPlayer(t)
                } catch (l) {
                    return void(this.debug && window.console && console.error("unable to dispatch widget event " + e + " for the widget id " + t, n, l))
                }
                window.jQuery ? jQuery(i).trigger(o, [n]) : window.Prototype && $(i).fire(o, n);
                for (var a = 0, s = r.length; a < s; a += 1) r[a].apply(i, [i, n]);
                this.debug && window.console && console.log(o, e, t, n)
            },
            addEventListener: function(e, t) {
                this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t)
            },
            removeEventListener: function(e, t) {
                for (var n = this._listeners[e] || [], i = 0, r = n.length; i < r; i += 1) n[i] === t && n.splice(i, 1)
            },
            getPlayer: function(e) {
                var t;
                try {
                    if (!e) throw "The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";
                    if (t = i ? window[e] : document[e]) {
                        if (t.api_getFlashId) return t;
                        throw "The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code"
                    }
                    throw "The SoundCloud Widget with an id " + e + " couldn't be found"
                } catch (n) {
                    throw console && console.error && console.error(n), n
                }
            },
            onPlayerReady: function(e, t) {
                this._redispatch("onPlayerReady", e, t)
            },
            onMediaStart: function(e, t) {
                this._redispatch("onMediaStart", e, t)
            },
            onMediaEnd: function(e, t) {
                this._redispatch("onMediaEnd", e, t)
            },
            onMediaPlay: function(e, t) {
                this._redispatch("onMediaPlay", e, t)
            },
            onMediaPause: function(e, t) {
                this._redispatch("onMediaPause", e, t)
            },
            onMediaBuffering: function(e, t) {
                this._redispatch("onMediaBuffering", e, t)
            },
            onMediaSeek: function(e, t) {
                this._redispatch("onMediaSeek", e, t)
            },
            onMediaDoneBuffering: function(e, t) {
                this._redispatch("onMediaDoneBuffering", e, t)
            },
            onPlayerError: function(e, t) {
                this._redispatch("onPlayerError", e, t)
            }
        }
    }(),
    /*
    jQuery Waypoints - v2.0.4
    Copyright (c) 2011-2014 Caleb Troughton
    Dual licensed under the MIT license and GPL license.
    https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
    */
    function() {
        var t, n, e = [].indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            b = [].slice;
        t = this, n = function(l, o) {
            var t, a, s, u, n, c, d, r, f, i, p, h, m, g, v, y;
            return t = l(o), r = 0 <= e.call(o, "ontouchstart"), u = {
                horizontal: {},
                vertical: {}
            }, d = {}, c = "waypoints-context-id", p = "resize.waypoints", h = "scroll.waypoints", m = n = 1, g = "waypoints-waypoint-ids", v = "waypoint", y = "waypoints", a = function() {
                function e(e) {
                    var t = this;
                    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + n++, this.oldScroll = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[c] = this.id, d[this.id] = this, e.bind(h, function() {
                        var e;
                        if (!t.didScroll && !r) return t.didScroll = !0, e = function() {
                            return t.doScroll(), t.didScroll = !1
                        }, o.setTimeout(e, l[y].settings.scrollThrottle)
                    }), e.bind(p, function() {
                        var e;
                        if (!t.didResize) return t.didResize = !0, e = function() {
                            return l[y]("refresh"), t.didResize = !1
                        }, o.setTimeout(e, l[y].settings.resizeThrottle)
                    })
                }
                return e.prototype.doScroll = function() {
                    var e, i = this;
                    return e = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !r || e.vertical.oldScroll && e.vertical.newScroll || l[y]("refresh"), l.each(e, function(e, r) {
                        var n, t, o;
                        return o = [], t = r.newScroll > r.oldScroll, n = t ? r.forward : r.backward, l.each(i.waypoints[e], function(e, t) {
                            var n, i;
                            return r.oldScroll < (n = t.offset) && n <= r.newScroll ? o.push(t) : r.newScroll < (i = t.offset) && i <= r.oldScroll ? o.push(t) : void 0
                        }), o.sort(function(e, t) {
                            return e.offset - t.offset
                        }), t || o.reverse(), l.each(o, function(e, t) {
                            if (t.options.continuous || e === o.length - 1) return t.trigger([n])
                        })
                    }), this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.refresh = function() {
                    var e, t, n, i = this;
                    return n = l.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                        horizontal: {
                            contextOffset: n ? 0 : t.left,
                            contextScroll: n ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: n ? 0 : t.top,
                            contextScroll: n ? 0 : this.oldScroll.y,
                            contextDimension: n ? l[y]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, l.each(e, function(e, s) {
                        return l.each(i.waypoints[e], function(e, t) {
                            var n, i, r, o, a;
                            if (n = t.options.offset, r = t.offset, i = l.isWindow(t.element) ? 0 : t.$element.offset()[s.offsetProp], l.isFunction(n) ? n = n.apply(t.element) : "string" == typeof n && (n = parseFloat(n), -1 < t.options.offset.indexOf("%") && (n = Math.ceil(s.contextDimension * n / 100))), t.offset = i - s.contextOffset + s.contextScroll - n, (!t.options.onlyOnScroll || null == r) && t.enabled) return null !== r && r < (o = s.oldScroll) && o <= t.offset ? t.trigger([s.backward]) : null !== r && r > (a = s.oldScroll) && a >= t.offset ? t.trigger([s.forward]) : null === r && s.oldScroll >= t.offset ? t.trigger([s.forward]) : void 0
                        })
                    })
                }, e.prototype.checkEmpty = function() {
                    if (l.isEmptyObject(this.waypoints.horizontal) && l.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, h].join(" ")), delete d[this.id]
                }, e
            }(), s = function() {
                function e(e, t, n) {
                    var i, r;
                    "bottom-in-view" === (n = l.extend({}, l.fn[v].defaults, n)).offset && (n.offset = function() {
                        var e;
                        return e = l[y]("viewportHeight"), l.isWindow(t.element) || (e = t.$element.height()), e - l(this).outerHeight()
                    }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = t, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, t.waypoints[this.axis][this.id] = this, (i = null != (r = (u[this.axis][this.id] = this).element[g]) ? r : []).push(this.id), this.element[g] = i
                }
                return e.prototype.trigger = function(e) {
                    if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
                }, e.prototype.disable = function() {
                    return this.enabled = !1
                }, e.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, e.prototype.destroy = function() {
                    return delete u[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, e.getWaypointsByElement = function(e) {
                    var t, n;
                    return (n = e[g]) ? (t = l.extend({}, u.horizontal, u.vertical), l.map(n, function(e) {
                        return t[e]
                    })) : []
                }, e
            }(), i = {
                init: function(e, r) {
                    return null == r && (r = {}), null == r.handler && (r.handler = e), this.each(function() {
                        var e, t, n, i;
                        return e = l(this), n = null != (i = r.context) ? i : l.fn[v].defaults.context, l.isWindow(n) || (n = e.closest(n)), n = l(n), (t = d[n[0][c]]) || (t = new a(n)), new s(e, t, r)
                    }), l[y]("refresh"), this
                },
                disable: function() {
                    return i._invoke.call(this, "disable")
                },
                enable: function() {
                    return i._invoke.call(this, "enable")
                },
                destroy: function() {
                    return i._invoke.call(this, "destroy")
                },
                prev: function(e, t) {
                    return i._traverse.call(this, e, t, function(e, t, n) {
                        if (0 < t) return e.push(n[t - 1])
                    })
                },
                next: function(e, t) {
                    return i._traverse.call(this, e, t, function(e, t, n) {
                        if (t < n.length - 1) return e.push(n[t + 1])
                    })
                },
                _traverse: function(t, e, n) {
                    var i, r;
                    return null == t && (t = "vertical"), null == e && (e = o), r = f.aggregate(e), i = [], this.each(function() {
                        var e;
                        return e = l.inArray(this, r[t]), n(i, e, r[t])
                    }), this.pushStack(i)
                },
                _invoke: function(n) {
                    return this.each(function() {
                        var e;
                        return e = s.getWaypointsByElement(this), l.each(e, function(e, t) {
                            return t[n](), !0
                        })
                    }), this
                }
            }, l.fn[v] = function(e) {
                var t, n;
                return n = e, t = 2 <= arguments.length ? b.call(arguments, 1) : [], i[n] ? i[n].apply(this, t) : l.isFunction(n) ? i.init.apply(this, arguments) : l.isPlainObject(n) ? i.init.apply(this, [null, n]) : n ? l.error("The " + n + " method does not exist in jQuery Waypoints.") : l.error("jQuery Waypoints needs a callback function or handler option.")
            }, l.fn[v].defaults = {
                context: o,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, f = {
                refresh: function() {
                    return l.each(d, function(e, t) {
                        return t.refresh()
                    })
                },
                viewportHeight: function() {
                    var e;
                    return null != (e = o.innerHeight) ? e : t.height()
                },
                aggregate: function(e) {
                    var t, i, n;
                    return t = u, e && (t = null != (n = d[l(e)[0][c]]) ? n.waypoints : void 0), t ? (i = {
                        horizontal: [],
                        vertical: []
                    }, l.each(i, function(e, n) {
                        return l.each(t[e], function(e, t) {
                            return n.push(t)
                        }), n.sort(function(e, t) {
                            return e.offset - t.offset
                        }), i[e] = l.map(n, function(e) {
                            return e.element
                        }), i[e] = l.unique(i[e])
                    }), i) : []
                },
                above: function(e) {
                    return null == e && (e = o), f._filter(e, "vertical", function(e, t) {
                        return t.offset <= e.oldScroll.y
                    })
                },
                below: function(e) {
                    return null == e && (e = o), f._filter(e, "vertical", function(e, t) {
                        return t.offset > e.oldScroll.y
                    })
                },
                left: function(e) {
                    return null == e && (e = o), f._filter(e, "horizontal", function(e, t) {
                        return t.offset <= e.oldScroll.x
                    })
                },
                right: function(e) {
                    return null == e && (e = o), f._filter(e, "horizontal", function(e, t) {
                        return t.offset > e.oldScroll.x
                    })
                },
                enable: function() {
                    return f._invoke("enable")
                },
                disable: function() {
                    return f._invoke("disable")
                },
                destroy: function() {
                    return f._invoke("destroy")
                },
                extendFn: function(e, t) {
                    return i[e] = t
                },
                _invoke: function(n) {
                    var e;
                    return e = l.extend({}, u.vertical, u.horizontal), l.each(e, function(e, t) {
                        return t[n](), !0
                    })
                },
                _filter: function(e, t, n) {
                    var i, r;
                    return (i = d[l(e)[0][c]]) ? (r = [], l.each(i.waypoints[t], function(e, t) {
                        if (n(i, t)) return r.push(t)
                    }), r.sort(function(e, t) {
                        return e.offset - t.offset
                    }), l.map(r, function(e) {
                        return e.element
                    })) : []
                }
            }, l[y] = function(e) {
                var t, n;
                return n = e, t = 2 <= arguments.length ? b.call(arguments, 1) : [], f[n] ? f[n].apply(null, t) : f.aggregate.call(null, n)
            }, l[y].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, t.load(function() {
                return l[y]("refresh")
            })
        }, "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(e) {
            return n(e, t)
        }) : n(t.jQuery, t)
    }.call(this), Rainbow.extend("objective-c", [{
        name: "keyword",
        pattern: /void/g
    }, {
        name: "constant.language",
        pattern: /nil/g
    }, {
        matches: {
            1: "entity.name.class"
        },
        pattern: /\[(\S+) /g
    }, {
        name: "string",
        pattern: /@?("|').*?("|')/g
    }, {
        matches: {
            1: "support.function"
        },
        pattern: /(\S+):/g
    }], !0),
    /*
     * jQuery UI Autocomplete HTML Extension
     *
     * Copyright 2010, Scott González (http://scottgonzalez.com)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     * https://github.com/scottgonzalez/jquery-ui-extensions
     */
    function(c) {
        function n(e, t) {
            var n = new RegExp(c.ui.autocomplete.escapeRegex(t), "i");
            return c.grep(e, function(e) {
                return n.test(c("<div>").html(e.label || e.value || e).text())
            })
        }
        var e = c.ui.autocomplete.prototype,
            t = e._initSource;
        c.extend(e, {
            _initSource: function() {
                this.options.html && c.isArray(this.options.source) ? this.source = function(e, t) {
                    t(n(this.options.source, e.term))
                } : t.call(this)
            },
            _renderItem: function(e, t) {
                return c("<li></li>").data("item.autocomplete", t).append(c("<a></a>")[this.options.html ? "html" : "text"](t.label)).appendTo(e)
            }
        }), c.extend(c.fn, {
            enableScrollingEffects: function() {
                function i(e) {
                    history.pushState ? (e = e ? "#" + e : window.location.pathname) != window.location.hash && history.pushState({}, null, e) : window.location.hash = e
                }

                function r(e) {
                    return n(t.find("a[href=#" + e + "]"))
                }

                function o() {
                    return t.find(".current").removeClass("current")
                }

                function n(e) {
                    return o(), e.parent().addClass("current")
                }
                var t = this,
                    a = c("#content > h2[id]"),
                    s = a.next();
                t.find(".sub a").click(function(e) {
                    var t = c(this);
                    "_blank" !== t.attr("target") && (e.preventDefault(), a.waypoint("disable"), s.waypoint("disable"), n(t), scrollToAnchor(t[0].hash, function() {
                        i(t[0].hash.replace(/^#/, "")), window.setTimeout(function() {
                            a.waypoint("enable"), s.waypoint("enable")
                        }, 5)
                    }))
                });
                var e = {
                        continuous: !1,
                        onlyOnScroll: !0
                    },
                    l = c.waypoints("viewportHeight"),
                    u = c(document).height();
                return a.waypoint(function(e) {
                    var t = c(this);
                    if (this === a.first()[0] && "up" == e) return i(), void o();
                    if ("down" == e) r(this.id), i(this.id);
                    else if (t.data("shorty")) {
                        var n = t.prev().prev()[0].id;
                        r(n), i(n)
                    }
                }, c.extend({}, e, {
                    offset: function() {
                        var e = c(this),
                            t = e.next(),
                            n = e.offset().top,
                            i = t.outerHeight();
                        return u - n <= l ? (e.data("shorty", !0), i <= l ? l - i : l - i / 2) : 5
                    }
                })), s.waypoint(function(e) {
                    if ("up" == e) {
                        var t = c(this).prev()[0].id;
                        r(t), i(t)
                    }
                }, c.extend({}, e, {
                    offset: function() {
                        return -1 * (c(this).outerHeight() + 10)
                    }
                })), {
                    mark: r.bind(this),
                    clearMark: o.bind(this)
                }
            }
        })
    }(jQuery);
var App = {
    track: function(e, t) {
        _gaq.push(["_trackEvent", e, t])
    },
    Support: {
        questionsIndex: [],
        pagesToLoad: 5,
        loadQuestionsIndex: function(t) {
            $.get("/support/questions?page=" + t, function(e) {
                e.error_id ? console.error("SO returned error", e) : (e.has_more && t < App.Support.pagesToLoad && App.Support.loadQuestionsIndex(t + 1), questions = $.map(e.items, function(e) {
                    return {
                        label: e.title,
                        value: e.link
                    }
                }), App.Support.questionsIndex = $.merge(App.Support.questionsIndex, questions))
            })
        },
        find: function(e) {
            for (var t = [], n = new RegExp(e.replace(" ", ".*"), "i"), i = 0; i < this.questionsIndex.length && t.length < 5; i++) this.questionsIndex[i].label.match(n) && t.push(this.questionsIndex[i]);
            return t
        }
    }
};
$(function() {
    function t() {
        return o - l > $(window).height()
    }
    $.timeago.settings.strings.seconds = "a minute", $.timeago.settings.strings.minute = "a minute", $.timeago.settings.strings.hour = "an hour", $.timeago.settings.strings.hours = "%d hours", $.timeago.settings.strings.month = "a month", $.timeago.settings.strings.year = "a year", $("abbr.timeago").timeago();
    var e = $(document.body);
    if (e.hasClass("support")) {
        var n = $(".stackoverflow-search"),
            i = $(".stackoverflow-search-form");
        App.Support.loadQuestionsIndex(1), n.autocomplete({
            appendTo: i,
            html: !0,
            position: {
                at: "left bottom-2px"
            },
            focus: function() {
                return !1
            },
            source: function(e, t) {
                t(App.Support.find(e.term))
            },
            select: function(e, t) {
                return App.track("Support", "Autocomplete"), window.location = t.item.value, !1
            }
        }), i.submit(function(e) {
            e.preventDefault(), App.track("Support", "Search");
            var t = n.val();
            window.location = "http://stackoverflow.com/search?q=%5Bsoundcloud%5D+" + encodeURIComponent(t)
        })
    }
    e.hasClass("docs") || e.hasClass("policies") || window.location.hash && scrollToAnchor(window.location.hash);
    var r = $(".main-menu"),
        o = r.find("ul").height(),
        a = $("<span>", {
            "class": "menu-wp-marker"
        }).appendTo(r.parent()),
        s = r.find("li.active"),
        l = 0;
    if (s.length && (l = s.position().top - 7, a.css("top", l + "px")), a.waypoint(function(e) {
            "up" == e ? (r.css("top", "auto").removeClass("scroll").removeClass("fixed"), u && u.clearMark()) : "down" == e && (r.css("top", -1 * l + "px").addClass("fixed"), t() && r.addClass("scroll"))
        }, {
            offset: 5
        }), e.hasClass("docs") || e.hasClass("policies")) {
        var u = r.enableScrollingEffects();
        $(window).on("popstate", function() {
            window.location.hash ? scrollToAnchor(window.location.hash) : window.setTimeout(function() {
                window.scrollTo(0, 0)
            }, 15)
        }), formatCodeExamples(), injectSDK(), $("#client-side-auth").click(function(e) {
            e.preventDefault(), SC.connect(function() {
                SC.get("/me", function(e) {
                    alert("Hello, " + e.username)
                })
            })
        })
    }
    $("a.anchorjump").click(function(e) {
        var t = $(this).attr("href");
        scrollToAnchor(t), window.history.pushState({}, document.title, t), e.preventDefault()
    }), $(".example").click(function(e) {
        e.preventDefault(), $(this).toggleClass("expanded")
    })
}), $(function() {
    function e() {
        try {
            return window.localStorage && "function" == typeof window.localStorage.getItem
        } catch (e) {
            return !1
        }
    }

    function t() {
        return !(!e() || !window.localStorage.getItem(o)) || !!new RegExp(o + "=1").test(document.cookie)
    }

    function n() {
        e() ? window.localStorage.setItem(o, "1") : document.cookie = o + "=1; path=/"
    }

    function i() {
        $(".announcements").removeClass("m-hidden")
    }

    function r() {
        $(".announcements").addClass("m-hidden")
    }
    var o = "banner-2018-05-15";
    $(".announcement__dismiss").on("click", function(e) {
        e.preventDefault(), r(), n()
    }), t() || i()
});