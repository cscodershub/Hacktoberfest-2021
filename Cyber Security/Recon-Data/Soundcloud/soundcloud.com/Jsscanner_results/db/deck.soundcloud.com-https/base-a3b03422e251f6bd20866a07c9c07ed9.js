/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 2.0.0
 */

/*
 * qTip2 - Pretty powerful tooltips - v2.2.1
 * http://qtip2.com
 *
 * Copyright (c) 2014 
 * Released under the MIT licenses
 * http://jquery.org/license
 *
 * Date: Sat Sep 6 2014 11:12 GMT+0100+0100
 * Plugins: tips modal viewport svg imagemap ie6
 * Styles: core basic css3
 */

/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// moment.js
// version : 1.7.0
// author : Tim Wood
// license : MIT
// momentjs.com

Function.prototype.bind || (Function.prototype.bind = function(e) {
        if (typeof this != "function") throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            r = function() {},
            i = function() {
                return n.apply(this instanceof r ? this : e, t.concat(Array.prototype.slice.call(arguments)));
            };
        return r.prototype = this.prototype, i.prototype = new r, i;
    }),
    function() {
        var e = !1,
            t = /xyz/.test(function() {
                xyz;
            }) ? /\b_super\b/ : /.*/;
        this.Class = function() {}, Class.extend = function(n) {
            function f() {
                if (!e && this.initialize) return this.initialize.apply(this, arguments);
            }
            var r = this.prototype,
                i, s, o, u;
            e = !0;
            var a = new this;
            e = !1, Object.prototype.toString.call(n) !== "[object Array]" ? u = [n] : u = n;
            for (s = 0, o = u.length; s < o; ++s) {
                n = u[s];
                for (i in n) a[i] = typeof n[i] == "function" && typeof r[i] == "function" && t.test(n[i]) ? function(e, t) {
                    return function() {
                        var n = this._super;
                        this._super = r[e];
                        var i = t.apply(this, arguments);
                        return this._super = n, i;
                    };
                }(i, n[i]) : n[i];
            }
            return f.prototype = a, f.prototype.constructor = f, f.extend = arguments.callee, f;
        };
    }(),
    function(e, t) {
        function _(e) {
            var t = M[e] = {};
            return v.each(e.split(y), function(e, n) {
                t[n] = !0;
            }), t;
        }

        function H(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(P, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r;
                    } catch (s) {}
                    v.data(e, n, r);
                } else r = t;
            }
            return r;
        }

        function B(e) {
            var t;
            for (t in e) {
                if (t === "data" && v.isEmptyObject(e[t])) continue;
                if (t !== "toJSON") return !1;
            }
            return !0;
        }

        function et() {
            return !1;
        }

        function tt() {
            return !0;
        }

        function ut(e) {
            return !e || !e.parentNode || e.parentNode.nodeType === 11;
        }

        function at(e, t) {
            do e = e[t]; while (e && e.nodeType !== 1);
            return e;
        }

        function ft(e, t, n) {
            t = t || 0;
            if (v.isFunction(t)) return v.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n;
            });
            if (t.nodeType) return v.grep(e, function(e, r) {
                return e === t === n;
            });
            if (typeof t == "string") {
                var r = v.grep(e, function(e) {
                    return e.nodeType === 1;
                });
                if (it.test(t)) return v.filter(t, r, !n);
                t = v.filter(t, r);
            }
            return v.grep(e, function(e, r) {
                return v.inArray(e, t) >= 0 === n;
            });
        }

        function lt(e) {
            var t = ct.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length) n.createElement(t.pop());
            return n;
        }

        function Lt(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
        }

        function At(e, t) {
            if (t.nodeType !== 1 || !v.hasData(e)) return;
            var n, r, i, s = v._data(e),
                o = v._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r]);
            }
            o.data && (o.data = v.extend({}, o.data));
        }

        function Ot(e, t) {
            var n;
            if (t.nodeType !== 1) return;
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando);
        }

        function Mt(e) {
            return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
        }

        function _t(e) {
            Et.test(e.type) && (e.defaultChecked = e.checked);
        }

        function Qt(e, t) {
            if (t in e) return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = Jt.length;
            while (i--) {
                t = Jt[i] + n;
                if (t in e) return t;
            }
            return r;
        }

        function Gt(e, t) {
            return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e);
        }

        function Yt(e, t) {
            var n, r, i = [],
                s = 0,
                o = e.length;
            for (; s < o; s++) {
                n = e[s];
                if (!n.style) continue;
                i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r));
            }
            for (s = 0; s < o; s++) {
                n = e[s];
                if (!n.style) continue;
                if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none";
            }
            return e;
        }

        function Zt(e, t, n) {
            var r = Rt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
        }

        function en(e, t, n, r) {
            var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                s = 0;
            for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
            return s;
        }

        function tn(e, t, n) {
            var r = t === "width" ? e.offsetWidth : e.offsetHeight,
                i = !0,
                s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
            if (r <= 0 || r == null) {
                r = Dt(e, t);
                if (r < 0 || r == null) r = e.style[t];
                if (Ut.test(r)) return r;
                i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
            }
            return r + en(e, t, n || (s ? "border" : "content"), i) + "px";
        }

        function nn(e) {
            if (Wt[e]) return Wt[e];
            var t = v("<" + e + ">").appendTo(i.body),
                n = t.css("display");
            t.remove();
            if (n === "none" || n === "") {
                Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                }));
                if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
                t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt);
            }
            return Wt[e] = n, n;
        }

        function fn(e, t, n, r) {
            var i;
            if (v.isArray(t)) v.each(t, function(t, i) {
                n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
            });
            else if (!n && v.type(t) === "object")
                for (i in t) fn(e + "[" + i + "]", t[i], n, r);
            else r(e, t);
        }

        function Cn(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i, s, o = t.toLowerCase().split(y),
                    u = 0,
                    a = o.length;
                if (v.isFunction(n))
                    for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n);
            };
        }

        function kn(e, n, r, i, s, o) {
            s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
            var u, a = e[s],
                f = 0,
                l = a ? a.length : 0,
                c = e === Sn;
            for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
            return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u;
        }

        function Ln(e, n) {
            var r, i, s = v.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
            i && v.extend(!0, e, i);
        }

        function An(e, n, r) {
            var i, s, o, u, a = e.contents,
                f = e.dataTypes,
                l = e.responseFields;
            for (s in l) s in r && (n[l[s]] = r[s]);
            while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i)
                for (s in a)
                    if (a[s] && a[s].test(i)) {
                        f.unshift(s);
                        break;
                    }
            if (f[0] in r) o = f[0];
            else {
                for (s in r) {
                    if (!f[0] || e.converters[s + " " + f[0]]) {
                        o = s;
                        break;
                    }
                    u || (u = s);
                }
                o = o || u;
            }
            if (o) return o !== f[0] && f.unshift(o), r[o];
        }

        function On(e, t) {
            var n, r, i, s, o = e.dataTypes.slice(),
                u = o[0],
                a = {},
                f = 0;
            e.dataFilter && (t = e.dataFilter(t, e.dataType));
            if (o[1])
                for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
            for (; i = o[++f];)
                if (i !== "*") {
                    if (u !== "*" && u !== i) {
                        n = a[u + " " + i] || a["* " + i];
                        if (!n)
                            for (r in a) {
                                s = r.split(" ");
                                if (s[1] === i) {
                                    n = a[u + " " + s[0]] || a["* " + s[0]];
                                    if (n) {
                                        n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                        break;
                                    }
                                }
                            }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + u + " to " + i
                                };
                            }
                    }
                    u = i;
                }
            return {
                state: "success",
                data: t
            };
        }

        function Fn() {
            try {
                return new e.XMLHttpRequest;
            } catch (t) {}
        }

        function In() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP");
            } catch (t) {}
        }

        function $n() {
            return setTimeout(function() {
                qn = t;
            }, 0), qn = v.now();
        }

        function Jn(e, t) {
            v.each(t, function(t, n) {
                var r = (Vn[t] || []).concat(Vn["*"]),
                    i = 0,
                    s = r.length;
                for (; i < s; i++)
                    if (r[i].call(e, t, n)) return;
            });
        }

        function Kn(e, t, n) {
            var r, i = 0,
                s = 0,
                o = Xn.length,
                u = v.Deferred().always(function() {
                    delete a.elem;
                }),
                a = function() {
                    var t = qn || $n(),
                        n = Math.max(0, f.startTime + f.duration - t),
                        r = n / f.duration || 0,
                        i = 1 - r,
                        s = 0,
                        o = f.tweens.length;
                    for (; s < o; s++) f.tweens[s].run(i);
                    return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1);
                },
                f = u.promise({
                    elem: e,
                    props: v.extend({}, t),
                    opts: v.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: qn || $n(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n, r) {
                        var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(i), i;
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? f.tweens.length : 0;
                        for (; n < r; n++) f.tweens[n].run(1);
                        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
                    }
                }),
                l = f.props;
            Qn(l, f.opts.specialEasing);
            for (; i < o; i++) {
                r = Xn[i].call(f, e, l, f.opts);
                if (r) return r;
            }
            return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
                anim: f,
                queue: f.opts.queue,
                elem: e
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
        }

        function Qn(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
                if (o && "expand" in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s) n in e || (e[n] = s[n], t[n] = i);
                } else t[r] = i;
            }
        }

        function Gn(e, t, n) {
            var r, i, s, o, u, a, f, l, c, h = this,
                p = e.style,
                d = {},
                m = [],
                g = e.nodeType && Gt(e);
            n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                l.unqueued || c();
            }), l.unqueued++, h.always(function() {
                h.always(function() {
                    l.unqueued--, v.queue(e, "fx").length || l.empty.fire();
                });
            })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
            }));
            for (r in t) {
                s = t[r];
                if (Un.exec(s)) {
                    delete t[r], a = a || s === "toggle";
                    if (s === (g ? "hide" : "show")) continue;
                    m.push(r);
                }
            }
            o = m.length;
            if (o) {
                u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                    v(e).hide();
                }), h.done(function() {
                    var t;
                    v.removeData(e, "fxshow", !0);
                    for (t in d) v.style(e, t, d[t]);
                });
                for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0));
            }
        }

        function Yn(e, t, n, r, i) {
            return new Yn.prototype.init(e, t, n, r, i);
        }

        function Zn(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
        }

        function tr(e) {
            return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
        }
        var n, r, i = e.document,
            s = e.location,
            o = e.navigator,
            u = e.jQuery,
            a = e.$,
            f = Array.prototype.push,
            l = Array.prototype.slice,
            c = Array.prototype.indexOf,
            h = Object.prototype.toString,
            p = Object.prototype.hasOwnProperty,
            d = String.prototype.trim,
            v = function(e, t) {
                return new v.fn.init(e, t, n);
            },
            m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            g = /\S/,
            y = /\s+/,
            b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            S = /^[\],:{}\s]*$/,
            x = /(?:^|:|,)(?:\s*\[)+/g,
            T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            C = /^-ms-/,
            k = /-([\da-z])/gi,
            L = function(e, t) {
                return (t + "").toUpperCase();
            },
            A = function() {
                i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready());
            },
            O = {};
        v.fn = v.prototype = {
            constructor: v,
            init: function(e, n, r) {
                var s, o, u, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                    if (s && (s[1] || !n)) {
                        if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                        o = i.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) return r.find(e);
                            this.length = 1, this[0] = o;
                        }
                        return this.context = i, this.selector = e, this;
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                }
                return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this));
            },
            selector: "",
            jquery: "1.8.3",
            length: 0,
            size: function() {
                return this.length;
            },
            toArray: function() {
                return l.call(this);
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
            },
            pushStack: function(e, t, n) {
                var r = v.merge(this.constructor(), e);
                return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r;
            },
            each: function(e, t) {
                return v.each(this, e, t);
            },
            ready: function(e) {
                return v.ready.promise().done(e), this;
            },
            eq: function(e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","));
            },
            map: function(e) {
                return this.pushStack(v.map(this, function(t, n) {
                    return e.call(t, n, t);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: f,
            sort: [].sort,
            splice: [].splice
        }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((e = arguments[a]) != null)
                    for (n in e) {
                        r = u[n], i = e[n];
                        if (u === i) continue;
                        l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i);
                    }
            return u;
        }, v.extend({
            noConflict: function(t) {
                return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v;
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? v.readyWait++ : v.ready(!0);
            },
            ready: function(e) {
                if (e === !0 ? --v.readyWait : v.isReady) return;
                if (!i.body) return setTimeout(v.ready, 1);
                v.isReady = !0;
                if (e !== !0 && --v.readyWait > 0) return;
                r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready");
            },
            isFunction: function(e) {
                return v.type(e) === "function";
            },
            isArray: Array.isArray || function(e) {
                return v.type(e) === "array";
            },
            isWindow: function(e) {
                return e != null && e == e.window;
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function(e) {
                return e == null ? String(e) : O[h.call(e)] || "object";
            },
            isPlainObject: function(e) {
                if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
                try {
                    if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (n) {
                    return !1;
                }
                var r;
                for (r in e);
                return r === t || p.call(e, r);
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            error: function(e) {
                throw new Error(e);
            },
            parseHTML: function(e, t, n) {
                var r;
                return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)));
            },
            parseJSON: function(t) {
                if (!t || typeof t != "string") return null;
                t = v.trim(t);
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
                v.error("Invalid JSON: " + t);
            },
            parseXML: function(n) {
                var r, i;
                if (!n || typeof n != "string") return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
                } catch (s) {
                    r = t;
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r;
            },
            noop: function() {},
            globalEval: function(t) {
                t && g.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t);
                })(t);
            },
            camelCase: function(e) {
                return e.replace(C, "ms-").replace(k, L);
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function(e, n, r) {
                var i, s = 0,
                    o = e.length,
                    u = o === t || v.isFunction(e);
                if (r) {
                    if (u) {
                        for (i in e)
                            if (n.apply(e[i], r) === !1) break;
                    } else
                        for (; s < o;)
                            if (n.apply(e[s++], r) === !1) break;
                } else if (u) {
                    for (i in e)
                        if (n.call(e[i], i, e[i]) === !1) break;
                } else
                    for (; s < o;)
                        if (n.call(e[s], s, e[s++]) === !1) break;
                return e;
            },
            trim: d && !d.call("﻿ ") ? function(e) {
                return e == null ? "" : d.call(e);
            } : function(e) {
                return e == null ? "" : (e + "").replace(b, "");
            },
            makeArray: function(e, t) {
                var n, r = t || [];
                return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r;
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (c) return c.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if (typeof r == "number")
                    for (; s < r; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e;
            },
            grep: function(e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                n = !!n;
                for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i;
            },
            map: function(e, n, r) {
                var i, s, o = [],
                    u = 0,
                    a = e.length,
                    f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
                if (f)
                    for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
                else
                    for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
                return o.concat.apply([], o);
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                    return e.apply(n, i.concat(l.call(arguments)));
                }, s.guid = e.guid = e.guid || v.guid++, s) : t;
            },
            access: function(e, n, r, i, s, o, u) {
                var a, f = r == null,
                    l = 0,
                    c = e.length;
                if (r && typeof r == "object") {
                    for (l in r) v.access(e, n, l, r[l], 1, o, i);
                    s = 1;
                } else if (i !== t) {
                    a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                        return a.call(v(e), n);
                    }) : (n.call(e, i), n = null));
                    if (n)
                        for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                    s = 1;
                }
                return s ? e : f ? n.call(e) : c ? n(e[0], r) : o;
            },
            now: function() {
                return (new Date).getTime();
            }
        }), v.ready.promise = function(t) {
            if (!r) {
                r = v.Deferred();
                if (i.readyState === "complete") setTimeout(v.ready, 1);
                else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
                else {
                    i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                    var n = !1;
                    try {
                        n = e.frameElement == null && i.documentElement;
                    } catch (s) {}
                    n && n.doScroll && function o() {
                        if (!v.isReady) {
                            try {
                                n.doScroll("left");
                            } catch (e) {
                                return setTimeout(o, 50);
                            }
                            v.ready();
                        }
                    }();
                }
            }
            return r.promise(t);
        }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            O["[object " + t + "]"] = t.toLowerCase();
        }), n = v(i);
        var M = {};
        v.Callbacks = function(e) {
            e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
            var n, r, i, s, o, u, a = [],
                f = !e.once && [],
                l = function(t) {
                    n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                    for (; a && u < o; u++)
                        if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break;
                        }
                    i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable());
                },
                c = {
                    add: function() {
                        if (a) {
                            var t = a.length;
                            (function r(t) {
                                v.each(t, function(t, n) {
                                    var i = v.type(n);
                                    i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n);
                                });
                            })(arguments), i ? o = a.length : n && (s = t, l(n));
                        }
                        return this;
                    },
                    remove: function() {
                        return a && v.each(arguments, function(e, t) {
                            var n;
                            while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--);
                        }), this;
                    },
                    has: function(e) {
                        return v.inArray(e, a) > -1;
                    },
                    empty: function() {
                        return a = [], this;
                    },
                    disable: function() {
                        return a = f = n = t, this;
                    },
                    disabled: function() {
                        return !a;
                    },
                    lock: function() {
                        return f = t, n || c.disable(), this;
                    },
                    locked: function() {
                        return !f;
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this;
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!r;
                    }
                };
            return c;
        }, v.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", v.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n;
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function() {
                            var e = arguments;
                            return v.Deferred(function(n) {
                                v.each(t, function(t, r) {
                                    var s = r[0],
                                        o = e[t];
                                    i[r[1]](v.isFunction(o) ? function() {
                                        var e = o.apply(this, arguments);
                                        e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e]);
                                    } : n[s]);
                                }), e = null;
                            }).promise();
                        },
                        promise: function(e) {
                            return e != null ? v.extend(e, r) : r;
                        }
                    },
                    i = {};
                return r.pipe = r.then, v.each(t, function(e, s) {
                    var o = s[2],
                        u = s[3];
                    r[s[1]] = o.add, u && o.add(function() {
                        n = u;
                    }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith;
                }), r.promise(i), e && e.call(i, i), i;
            },
            when: function(e) {
                var t = 0,
                    n = l.call(arguments),
                    r = n.length,
                    i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                    s = i === 1 ? e : v.Deferred(),
                    o = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
                        };
                    },
                    u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
                }
                return i || s.resolveWith(f, n), s.promise();
            }
        }), v.support = function() {
            var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
            p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
            if (!n || !r || !n.length) return {};
            s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
                leadingWhitespace: p.firstChild.nodeType === 3,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: u.value === "on",
                optSelected: o.selected,
                getSetAttribute: p.className !== "t",
                enctype: !!i.createElement("form").enctype,
                html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: i.compatMode === "CSS1Compat",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete p.test;
            } catch (d) {
                t.deleteExpando = !1;
            }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
                t.noCloneEvent = !1;
            }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
            if (p.attachEvent)
                for (l in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
            return v(function() {
                var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    a = i.getElementsByTagName("body")[0];
                if (!a) return;
                n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                    width: "4px"
                }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null;
            }), a.removeChild(p), n = r = s = o = u = a = p = null, t;
        }();
        var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            P = /([A-Z])/g;
        v.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e);
            },
            data: function(e, n, r, i) {
                if (!v.acceptData(e)) return;
                var s, o, u = v.expando,
                    a = typeof n == "string",
                    f = e.nodeType,
                    l = f ? v.cache : e,
                    c = f ? e[u] : e[u] && u;
                if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
                c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
                if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
                return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o;
            },
            removeData: function(e, t, n) {
                if (!v.acceptData(e)) return;
                var r, i, s, o = e.nodeType,
                    u = o ? v.cache : e,
                    a = o ? e[v.expando] : v.expando;
                if (!u[a]) return;
                if (t) {
                    r = n ? u[a] : u[a].data;
                    if (r) {
                        v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                        if (!(n ? B : v.isEmptyObject)(r)) return;
                    }
                }
                if (!n) {
                    delete u[a].data;
                    if (!B(u[a])) return;
                }
                o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null;
            },
            _data: function(e, t, n) {
                return v.data(e, t, n, !0);
            },
            acceptData: function(e) {
                var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t;
            }
        }), v.fn.extend({
            data: function(e, n) {
                var r, i, s, o, u, a = this[0],
                    f = 0,
                    l = null;
                if (e === t) {
                    if (this.length) {
                        l = v.data(a);
                        if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                            s = a.attributes;
                            for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                            v._data(a, "parsedAttrs", !0);
                        }
                    }
                    return l;
                }
                return typeof e == "object" ? this.each(function() {
                    v.data(this, e);
                }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                    if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                    r[1] = n, this.each(function() {
                        var t = v(this);
                        t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r);
                    });
                }, null, n, arguments.length > 1, null, !1));
            },
            removeData: function(e) {
                return this.each(function() {
                    v.removeData(this, e);
                });
            }
        }), v.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || [];
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = v.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    s = v._queueHooks(e, t),
                    o = function() {
                        v.dequeue(e, t);
                    };
                i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return v._data(e, n) || v._data(e, n, {
                    empty: v.Callbacks("once memory").add(function() {
                        v.removeData(e, t + "queue", !0), v.removeData(e, n, !0);
                    })
                });
            }
        }), v.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = v.queue(this, e, n);
                    v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e);
                });
            },
            dequeue: function(e) {
                return this.each(function() {
                    v.dequeue(this, e);
                });
            },
            delay: function(e, t) {
                return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r);
                    };
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, n) {
                var r, i = 1,
                    s = v.Deferred(),
                    o = this,
                    u = this.length,
                    a = function() {
                        --i || s.resolveWith(o, [o]);
                    };
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(n);
            }
        });
        var j, F, I, q = /[\t\r\n]/g,
            R = /\r/g,
            U = /^(?:button|input)$/i,
            z = /^(?:button|input|object|select|textarea)$/i,
            W = /^a(?:rea|)$/i,
            X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            V = v.support.getSetAttribute;
        v.fn.extend({
            attr: function(e, t) {
                return v.access(this, v.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    v.removeAttr(this, e);
                });
            },
            prop: function(e, t) {
                return v.access(this, v.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
                return e = v.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e];
                    } catch (n) {}
                });
            },
            addClass: function(e) {
                var t, n, r, i, s, o, u;
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).addClass(e.call(this, t, this.className));
                });
                if (e && typeof e == "string") {
                    t = e.split(y);
                    for (n = 0, r = this.length; n < r; n++) {
                        i = this[n];
                        if (i.nodeType === 1)
                            if (!i.className && t.length === 1) i.className = e;
                            else {
                                s = " " + i.className + " ";
                                for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                                i.className = v.trim(s);
                            }
                    }
                }
                return this;
            },
            removeClass: function(e) {
                var n, r, i, s, o, u, a;
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, this.className));
                });
                if (e && typeof e == "string" || e === t) {
                    n = (e || "").split(y);
                    for (u = 0, a = this.length; u < a; u++) {
                        i = this[u];
                        if (i.nodeType === 1 && i.className) {
                            r = (" " + i.className + " ").replace(q, " ");
                            for (s = 0, o = n.length; s < o; s++)
                                while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                            i.className = e ? v.trim(r) : "";
                        }
                    }
                }
                return this;
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = typeof t == "boolean";
                return v.isFunction(e) ? this.each(function(n) {
                    v(this).toggleClass(e.call(this, n, this.className, t), t);
                }) : this.each(function() {
                    if (n === "string") {
                        var i, s = 0,
                            o = v(this),
                            u = t,
                            a = e.split(y);
                        while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
                    } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || "";
                });
            },
            hasClass: function(e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
                return !1;
            },
            val: function(e) {
                var n, r, i, s = this[0];
                if (!arguments.length) {
                    if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                    return;
                }
                return i = v.isFunction(e), this.each(function(r) {
                    var s, o = v(this);
                    if (this.nodeType !== 1) return;
                    i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                        return e == null ? "" : e + "";
                    })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s;
                });
            }
        }), v.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text;
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r = e.options,
                            i = e.selectedIndex,
                            s = e.type === "select-one" || i < 0,
                            o = s ? null : [],
                            u = s ? i + 1 : r.length,
                            a = i < 0 ? u : s ? i : 0;
                        for (; a < u; a++) {
                            n = r[a];
                            if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                                t = v(n).val();
                                if (s) return t;
                                o.push(t);
                            }
                        }
                        return o;
                    },
                    set: function(e, t) {
                        var n = v.makeArray(t);
                        return v(e).find("option").each(function() {
                            this.selected = v.inArray(v(this).val(), n) >= 0;
                        }), n.length || (e.selectedIndex = -1), n;
                    }
                }
            },
            attrFn: {},
            attr: function(e, n, r, i) {
                var s, o, u, a = e.nodeType;
                if (!e || a === 3 || a === 8 || a === 2) return;
                if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
                if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
                u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
                if (r !== t) {
                    if (r === null) {
                        v.removeAttr(e, n);
                        return;
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r);
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
            },
            removeAttr: function(e, t) {
                var n, r, i, s, o = 0;
                if (t && e.nodeType === 1) {
                    r = t.split(y);
                    for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1));
                }
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                        else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    }
                },
                value: {
                    get: function(e, t) {
                        return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null;
                    },
                    set: function(e, t, n) {
                        if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                        e.value = t;
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2) return;
                return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t;
                    }
                }
            }
        }), F = {
            get: function(e, n) {
                var r, i = v.prop(e, n);
                return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
            },
            set: function(e, t, n) {
                var r;
                return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
            }
        }, V || (I = {
            name: !0,
            id: !0,
            coords: !0
        }, j = v.valHooks.button = {
            get: function(e, n) {
                var r;
                return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t;
            },
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + "";
            }
        }, v.each(["width", "height"], function(e, t) {
            v.attrHooks[t] = v.extend(v.attrHooks[t], {
                set: function(e, n) {
                    if (n === "") return e.setAttribute(t, "auto"), n;
                }
            });
        }), v.attrHooks.contenteditable = {
            get: j.get,
            set: function(e, t, n) {
                t === "" && (t = "false"), j.set(e, t, n);
            }
        }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
            v.attrHooks[n] = v.extend(v.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return r === null ? t : r;
                }
            });
        }), v.support.style || (v.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t;
            },
            set: function(e, t) {
                return e.style.cssText = t + "";
            }
        }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
            }
        })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                }
            };
        }), v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = v.extend(v.valHooks[this], {
                set: function(e, t) {
                    if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0;
                }
            });
        });
        var $ = /^(?:textarea|input|select)$/i,
            J = /^([^\.]*|)(?:\.(.+)|)$/,
            K = /(?:^|\s)hover(\.\S+|)\b/,
            Q = /^key/,
            G = /^(?:mouse|contextmenu)|click/,
            Y = /^(?:focusinfocus|focusoutblur)$/,
            Z = function(e) {
                return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1");
            };
        v.event = {
                add: function(e, n, r, i, s) {
                    var o, u, a, f, l, c, h, p, d, m, g;
                    if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                    r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                        return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments);
                    }, u.elem = e), n = v.trim(Z(n)).split(" ");
                    for (f = 0; f < n.length; f++) {
                        l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                            type: c,
                            origType: l[1],
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: s,
                            needsContext: s && v.expr.match.needsContext.test(s),
                            namespace: h.join(".")
                        }, d), m = a[c];
                        if (!m) {
                            m = a[c] = [], m.delegateCount = 0;
                            if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
                        }
                        g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0;
                    }
                    e = null;
                },
                global: {},
                remove: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                    if (!g || !(h = g.events)) return;
                    t = v.trim(Z(t || "")).split(" ");
                    for (s = 0; s < t.length; s++) {
                        o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                        if (!u) {
                            for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                            continue;
                        }
                        p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                        d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u]);
                    }
                    v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0));
                },
                customEvent: {
                    getData: !0,
                    setData: !0,
                    changeData: !0
                },
                trigger: function(n, r, s, o) {
                    if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                        var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                            b = [];
                        if (Y.test(y + v.event.triggered)) return;
                        y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                        if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                        n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                        if (!s) {
                            u = v.cache;
                            for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                            return;
                        }
                        n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                        if (p.trigger && p.trigger.apply(s, r) === !1) return;
                        m = [
                            [s, p.bindType || y]
                        ];
                        if (!o && !p.noBubble && !v.isWindow(s)) {
                            g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                            for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                            c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g]);
                        }
                        for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                        return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result;
                    }
                    return;
                },
                dispatch: function(n) {
                    n = v.event.fix(n || e.event);
                    var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                        m = d.delegateCount,
                        g = l.call(arguments),
                        y = !n.exclusive && !n.namespace,
                        b = v.event.special[n.type] || {},
                        w = [];
                    g[0] = n, n.delegateTarget = this;
                    if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
                    if (m && (!n.button || n.type !== "click"))
                        for (s = n.target; s != this; s = s.parentNode || this)
                            if (s.disabled !== !0 || n.type !== "click") {
                                u = {}, f = [];
                                for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                                f.length && w.push({
                                    elem: s,
                                    matches: f
                                });
                            }
                    d.length > m && w.push({
                        elem: this,
                        matches: d.slice(m)
                    });
                    for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                        a = w[r], n.currentTarget = a.elem;
                        for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                            c = a.matches[i];
                            if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()));
                        }
                    }
                    return b.postDispatch && b.postDispatch.call(this, n), n.result;
                },
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var r, s, o, u = n.button,
                            a = n.fromElement;
                        return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e;
                    }
                },
                fix: function(e) {
                    if (e[v.expando]) return e;
                    var t, n, r = e,
                        s = v.event.fixHooks[e.type] || {},
                        o = s.props ? this.props.concat(s.props) : this.props;
                    e = v.Event(r);
                    for (t = o.length; t;) n = o[--t], e[n] = r[n];
                    return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e;
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        delegateType: "focusin"
                    },
                    blur: {
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        setup: function(e, t, n) {
                            v.isWindow(this) && (this.onbeforeunload = n);
                        },
                        teardown: function(e, t) {
                            this.onbeforeunload === t && (this.onbeforeunload = null);
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = v.extend(new v.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
                }
            }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n));
            }, v.Event = function(e, t) {
                if (!(this instanceof v.Event)) return new v.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0;
            }, v.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = tt;
                    var e = this.originalEvent;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                },
                stopPropagation: function() {
                    this.isPropagationStopped = tt;
                    var e = this.originalEvent;
                    if (!e) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = tt, this.stopPropagation();
                },
                isDefaultPrevented: et,
                isPropagationStopped: et,
                isImmediatePropagationStopped: et
            }, v.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                v.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj,
                            o = s.selector;
                        if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                        return n;
                    }
                };
            }), v.support.submitBubbles || (v.event.special.submit = {
                setup: function() {
                    if (v.nodeName(this, "form")) return !1;
                    v.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                        r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                            e._submit_bubble = !0;
                        }), v._data(r, "_submit_attached", !0));
                    });
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown: function() {
                    if (v.nodeName(this, "form")) return !1;
                    v.event.remove(this, "._submit");
                }
            }), v.support.changeBubbles || (v.event.special.change = {
                setup: function() {
                    if ($.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
                        }), v.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0);
                        });
                        return !1;
                    }
                    v.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0);
                        }), v._data(t, "_change_attached", !0));
                    });
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
                },
                teardown: function() {
                    return v.event.remove(this, "._change"), !$.test(this.nodeName);
                }
            }), v.support.focusinBubbles || v.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    r = function(e) {
                        v.event.simulate(t, e.target, v.event.fix(e), !0);
                    };
                v.event.special[t] = {
                    setup: function() {
                        n++ === 0 && i.addEventListener(e, r, !0);
                    },
                    teardown: function() {
                        --n === 0 && i.removeEventListener(e, r, !0);
                    }
                };
            }), v.fn.extend({
                on: function(e, n, r, i, s) {
                    var o, u;
                    if (typeof e == "object") {
                        typeof n != "string" && (r = r || n, n = t);
                        for (u in e) this.on(u, n, r, e[u], s);
                        return this;
                    }
                    r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                    if (i === !1) i = et;
                    else if (!i) return this;
                    return s === 1 && (o = i, i = function(e) {
                        return v().off(e), o.apply(this, arguments);
                    }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                        v.event.add(this, e, i, r, n);
                    });
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1);
                },
                off: function(e, n, r) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if (typeof e == "object") {
                        for (s in e) this.off(s, n, e[s]);
                        return this;
                    }
                    if (n === !1 || typeof n == "function") r = n, n = t;
                    return r === !1 && (r = et), this.each(function() {
                        v.event.remove(this, e, r, n);
                    });
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                live: function(e, t, n) {
                    return v(this.context).on(e, this.selector, t, n), this;
                },
                die: function(e, t) {
                    return v(this.context).off(e, this.selector || "**", t), this;
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        v.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function(e, t) {
                    if (this[0]) return v.event.trigger(e, t, this[0], !0);
                },
                toggle: function(e) {
                    var t = arguments,
                        n = e.guid || v.guid++,
                        r = 0,
                        i = function(n) {
                            var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                            return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
                        };
                    i.guid = n;
                    while (r < t.length) t[r++].guid = n;
                    return this.click(i);
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                v.fn[t] = function(e, n) {
                    return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks);
            }),
            function(e, t) {
                function nt(e, t, n, r) {
                    n = n || [], t = t || g;
                    var i, s, a, f, l = t.nodeType;
                    if (!e || typeof e != "string") return n;
                    if (l !== 1 && l !== 9) return [];
                    a = o(t);
                    if (!a && !r)
                        if (i = R.exec(e))
                            if (f = i[1]) {
                                if (l === 9) {
                                    s = t.getElementById(f);
                                    if (!s || !s.parentNode) return n;
                                    if (s.id === f) return n.push(s), n;
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n;
                            } else {
                                if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                                if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n;
                            }
                    return vt(e.replace(j, "$1"), t, n, r, a);
                }

                function rt(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e;
                    };
                }

                function it(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e;
                    };
                }

                function st(e) {
                    return N(function(t) {
                        return t = +t, N(function(n, r) {
                            var i, s = e([], n.length, t),
                                o = s.length;
                            while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
                        });
                    });
                }

                function ot(e, t, n) {
                    if (e === t) return n;
                    var r = e.nextSibling;
                    while (r) {
                        if (r === t) return -1;
                        r = r.nextSibling;
                    }
                    return 1;
                }

                function ut(e, t) {
                    var n, r, s, o, u, a, f, l = L[d][e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    u = e, a = [], f = i.preFilter;
                    while (u) {
                        if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                        n = !1;
                        if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                        for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                        if (!n) break;
                    }
                    return t ? u.length : u ? nt.error(e) : L(e, a).slice(0);
                }

                function at(e, t, r) {
                    var i = t.dir,
                        s = r && t.dir === "parentNode",
                        o = w++;
                    return t.first ? function(t, n, r) {
                        while (t = t[i])
                            if (s || t.nodeType === 1) return e(t, n, r);
                    } : function(t, r, u) {
                        if (!u) {
                            var a, f = b + " " + o + " ",
                                l = f + n;
                            while (t = t[i])
                                if (s || t.nodeType === 1) {
                                    if ((a = t[d]) === l) return t.sizset;
                                    if (typeof a == "string" && a.indexOf(f) === 0) {
                                        if (t.sizset) return t;
                                    } else {
                                        t[d] = l;
                                        if (e(t, r, u)) return t.sizset = !0, t;
                                        t.sizset = !1;
                                    }
                                }
                        } else
                            while (t = t[i])
                                if (s || t.nodeType === 1)
                                    if (e(t, r, u)) return t;
                    };
                }

                function ft(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0;
                    } : e[0];
                }

                function lt(e, t, n, r, i) {
                    var s, o = [],
                        u = 0,
                        a = e.length,
                        f = t != null;
                    for (; u < a; u++)
                        if (s = e[u])
                            if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                    return o;
                }

                function ct(e, t, n, r, i, s) {
                    return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                        var f, l, c, h = [],
                            p = [],
                            d = o.length,
                            v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                            m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                            g = n ? i || (s ? e : d || r) ? [] : o : m;
                        n && n(m, g, u, a);
                        if (r) {
                            f = lt(g, p), r(f, [], u, a), l = f.length;
                            while (l--)
                                if (c = f[l]) g[p[l]] = !(m[p[l]] = c);
                        }
                        if (s) {
                            if (i || e) {
                                if (i) {
                                    f = [], l = g.length;
                                    while (l--)(c = g[l]) && f.push(m[l] = c);
                                    i(null, g = [], f, a);
                                }
                                l = g.length;
                                while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c));
                            }
                        } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g);
                    });
                }

                function ht(e) {
                    var t, n, r, s = e.length,
                        o = i.relative[e[0].type],
                        u = o || i.relative[" "],
                        a = o ? 1 : 0,
                        f = at(function(e) {
                            return e === t;
                        }, u, !0),
                        l = at(function(e) {
                            return T.call(t, e) > -1;
                        }, u, !0),
                        h = [function(e, n, r) {
                            return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r));
                        }];
                    for (; a < s; a++)
                        if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                        else {
                            n = i.filter[e[a].type].apply(null, e[a].matches);
                            if (n[d]) {
                                r = ++a;
                                for (; r < s; r++)
                                    if (i.relative[e[r].type]) break;
                                return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""));
                            }
                            h.push(n);
                        }
                    return ft(h);
                }

                function pt(e, t) {
                    var r = t.length > 0,
                        s = e.length > 0,
                        o = function(u, a, f, l, h) {
                            var p, d, v, m = [],
                                y = 0,
                                w = "0",
                                x = u && [],
                                T = h != null,
                                N = c,
                                C = u || s && i.find.TAG("*", h && a.parentNode || a),
                                k = b += N == null ? 1 : Math.E;
                            T && (c = a !== g && a, n = o.el);
                            for (;
                                (p = C[w]) != null; w++) {
                                if (s && p) {
                                    for (d = 0; v = e[d]; d++)
                                        if (v(p, a, f)) {
                                            l.push(p);
                                            break;
                                        }
                                    T && (b = k, n = ++o.el);
                                }
                                r && ((p = !v && p) && y--, u && x.push(p));
                            }
                            y += w;
                            if (r && w !== y) {
                                for (d = 0; v = t[d]; d++) v(x, m, a, f);
                                if (u) {
                                    if (y > 0)
                                        while (w--) !x[w] && !m[w] && (m[w] = E.call(l));
                                    m = lt(m);
                                }
                                S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l);
                            }
                            return T && (b = k, c = N), x;
                        };
                    return o.el = 0, r ? N(o) : o;
                }

                function dt(e, t, n) {
                    var r = 0,
                        i = t.length;
                    for (; r < i; r++) nt(e, t[r], n);
                    return n;
                }

                function vt(e, t, n, r, s) {
                    var o, u, f, l, c, h = ut(e),
                        p = h.length;
                    if (!r && h.length === 1) {
                        u = h[0] = h[0].slice(0);
                        if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                            t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                            if (!t) return n;
                            e = e.slice(u.shift().length);
                        }
                        for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                            f = u[o];
                            if (i.relative[l = f.type]) break;
                            if (c = i.find[l])
                                if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                                    u.splice(o, 1), e = r.length && u.join("");
                                    if (!e) return S.apply(n, x.call(r, 0)), n;
                                    break;
                                }
                        }
                    }
                    return a(e, h)(r, t, s, n, z.test(e)), n;
                }

                function mt() {}
                var n, r, i, s, o, u, a, f, l, c, h = !0,
                    p = "undefined",
                    d = ("sizcache" + Math.random()).replace(".", ""),
                    m = String,
                    g = e.document,
                    y = g.documentElement,
                    b = 0,
                    w = 0,
                    E = [].pop,
                    S = [].push,
                    x = [].slice,
                    T = [].indexOf || function(e) {
                        var t = 0,
                            n = this.length;
                        for (; t < n; t++)
                            if (this[t] === e) return t;
                        return -1;
                    },
                    N = function(e, t) {
                        return e[d] = t == null || t, e;
                    },
                    C = function() {
                        var e = {},
                            t = [];
                        return N(function(n, r) {
                            return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r;
                        }, e);
                    },
                    k = C(),
                    L = C(),
                    A = C(),
                    O = "[\\x20\\t\\r\\n\\f]",
                    M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    _ = M.replace("w", "w#"),
                    D = "([*^$|!~]?=)",
                    P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
                    H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
                    B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
                    j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                    F = new RegExp("^" + O + "*," + O + "*"),
                    I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                    q = new RegExp(H),
                    R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    U = /^:not/,
                    z = /[\x20\t\r\n\f]*[+~]/,
                    W = /:not\($/,
                    X = /h\d/i,
                    V = /input|select|textarea|button/i,
                    $ = /\\(?!\\)/g,
                    J = {
                        ID: new RegExp("^#(" + M + ")"),
                        CLASS: new RegExp("^\\.(" + M + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + P),
                        PSEUDO: new RegExp("^" + H),
                        POS: new RegExp(B, "i"),
                        CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
                    },
                    K = function(e) {
                        var t = g.createElement("div");
                        try {
                            return e(t);
                        } catch (n) {
                            return !1;
                        } finally {
                            t = null;
                        }
                    },
                    Q = K(function(e) {
                        return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length;
                    }),
                    G = K(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#";
                    }),
                    Y = K(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return t !== "boolean" && t !== "string";
                    }),
                    Z = K(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2);
                    }),
                    et = K(function(e) {
                        e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                        var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                        return r = !g.getElementById(d), y.removeChild(e), t;
                    });
                try {
                    x.call(y.childNodes, 0)[0].nodeType;
                } catch (tt) {
                    x = function(e) {
                        var t, n = [];
                        for (; t = this[e]; e++) n.push(t);
                        return n;
                    };
                }
                nt.matches = function(e, t) {
                    return nt(e, null, null, t);
                }, nt.matchesSelector = function(e, t) {
                    return nt(t, null, null, [e]).length > 0;
                }, s = nt.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (i === 1 || i === 9 || i === 11) {
                            if (typeof e.textContent == "string") return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                        } else if (i === 3 || i === 4) return e.nodeValue;
                    } else
                        for (; t = e[r]; r++) n += s(t);
                    return n;
                }, o = nt.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1;
                }, u = nt.contains = y.contains ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r));
                } : y.compareDocumentPosition ? function(e, t) {
                    return t && !!(e.compareDocumentPosition(t) & 16);
                } : function(e, t) {
                    while (t = t.parentNode)
                        if (t === e) return !0;
                    return !1;
                }, nt.attr = function(e, t) {
                    var n, r = o(e);
                    return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null);
                }, i = nt.selectors = {
                    cacheLength: 50,
                    createPseudo: N,
                    match: J,
                    attrHandle: G ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2);
                        },
                        type: function(e) {
                            return e.getAttribute("type");
                        }
                    },
                    find: {
                        ID: r ? function(e, t, n) {
                            if (typeof t.getElementById !== p && !n) {
                                var r = t.getElementById(e);
                                return r && r.parentNode ? [r] : [];
                            }
                        } : function(e, n, r) {
                            if (typeof n.getElementById !== p && !r) {
                                var i = n.getElementById(e);
                                return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : [];
                            }
                        },
                        TAG: Q ? function(e, t) {
                            if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e);
                        } : function(e, t) {
                            var n = t.getElementsByTagName(e);
                            if (e === "*") {
                                var r, i = [],
                                    s = 0;
                                for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                                return i;
                            }
                            return n;
                        },
                        NAME: et && function(e, t) {
                            if (typeof t.getElementsByName !== p) return t.getElementsByName(name);
                        },
                        CLASS: Z && function(e, t, n) {
                            if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e);
                        }
                    },
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
                            return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e;
                        },
                        PSEUDO: function(e) {
                            var t, n;
                            if (J.CHILD.test(e[0])) return null;
                            if (e[3]) e[2] = e[3];
                            else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                            return e.slice(0, 3);
                        }
                    },
                    filter: {
                        ID: r ? function(e) {
                            return e = e.replace($, ""),
                                function(t) {
                                    return t.getAttribute("id") === e;
                                };
                        } : function(e) {
                            return e = e.replace($, ""),
                                function(t) {
                                    var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                    return n && n.value === e;
                                };
                        },
                        TAG: function(e) {
                            return e === "*" ? function() {
                                return !0;
                            } : (e = e.replace($, "").toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e;
                            });
                        },
                        CLASS: function(e) {
                            var t = k[d][e + " "];
                            return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "");
                            });
                        },
                        ATTR: function(e, t, n) {
                            return function(r, i) {
                                var s = nt.attr(r, e);
                                return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0;
                            };
                        },
                        CHILD: function(e, t, n, r) {
                            return e === "nth" ? function(e) {
                                var t, i, s = e.parentNode;
                                if (n === 1 && r === 0) return !0;
                                if (s) {
                                    i = 0;
                                    for (t = s.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType === 1) {
                                            i++;
                                            if (e === t) break;
                                        }
                                }
                                return i -= r, i === n || i % n === 0 && i / n >= 0;
                            } : function(t) {
                                var n = t;
                                switch (e) {
                                    case "only":
                                    case "first":
                                        while (n = n.previousSibling)
                                            if (n.nodeType === 1) return !1;
                                        if (e === "first") return !0;
                                        n = t;
                                    case "last":
                                        while (n = n.nextSibling)
                                            if (n.nodeType === 1) return !1;
                                        return !0;
                                }
                            };
                        },
                        PSEUDO: function(e, t) {
                            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                            return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                                var i, s = r(e, t),
                                    o = s.length;
                                while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o]);
                            }) : function(e) {
                                return r(e, 0, n);
                            }) : r;
                        }
                    },
                    pseudos: {
                        not: N(function(e) {
                            var t = [],
                                n = [],
                                r = a(e.replace(j, "$1"));
                            return r[d] ? N(function(e, t, n, i) {
                                var s, o = r(e, null, i, []),
                                    u = e.length;
                                while (u--)
                                    if (s = o[u]) e[u] = !(t[u] = s);
                            }) : function(e, i, s) {
                                return t[0] = e, r(t, null, s, n), !n.pop();
                            };
                        }),
                        has: N(function(e) {
                            return function(t) {
                                return nt(e, t).length > 0;
                            };
                        }),
                        contains: N(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || s(t)).indexOf(e) > -1;
                            };
                        }),
                        enabled: function(e) {
                            return e.disabled === !1;
                        },
                        disabled: function(e) {
                            return e.disabled === !0;
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e);
                        },
                        empty: function(e) {
                            var t;
                            e = e.firstChild;
                            while (e) {
                                if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                                e = e.nextSibling;
                            }
                            return !0;
                        },
                        header: function(e) {
                            return X.test(e.nodeName);
                        },
                        text: function(e) {
                            var t, n;
                            return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t);
                        },
                        radio: rt("radio"),
                        checkbox: rt("checkbox"),
                        file: rt("file"),
                        password: rt("password"),
                        image: rt("image"),
                        submit: it("submit"),
                        reset: it("reset"),
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button";
                        },
                        input: function(e) {
                            return V.test(e.nodeName);
                        },
                        focus: function(e) {
                            var t = e.ownerDocument;
                            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        active: function(e) {
                            return e === e.ownerDocument.activeElement;
                        },
                        first: st(function() {
                            return [0];
                        }),
                        last: st(function(e, t) {
                            return [t - 1];
                        }),
                        eq: st(function(e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: st(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: st(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: st(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e;
                        }),
                        gt: st(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e;
                        })
                    }
                }, f = y.compareDocumentPosition ? function(e, t) {
                    return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1;
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        s = [],
                        o = e.parentNode,
                        u = t.parentNode,
                        a = o;
                    if (o === u) return ot(e, t);
                    if (!o) return -1;
                    if (!u) return 1;
                    while (a) i.unshift(a), a = a.parentNode;
                    a = u;
                    while (a) s.unshift(a), a = a.parentNode;
                    n = i.length, r = s.length;
                    for (var f = 0; f < n && f < r; f++)
                        if (i[f] !== s[f]) return ot(i[f], s[f]);
                    return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1);
                }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    l = h, e.sort(f);
                    if (l) {
                        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                        while (i--) e.splice(n[i], 1);
                    }
                    return e;
                }, nt.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, a = nt.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        s = A[d][e + " "];
                    if (!s) {
                        t || (t = ut(e)), n = t.length;
                        while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                        s = A(e, pt(i, r));
                    }
                    return s;
                }, g.querySelectorAll && function() {
                    var e, t = vt,
                        n = /'|\\/g,
                        r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        i = [":focus"],
                        s = [":active"],
                        u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                    K(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked");
                    }), K(function(e) {
                        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled");
                    }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                        if (!o && !u && !i.test(e)) {
                            var a, f, l = !0,
                                c = d,
                                h = r,
                                p = r.nodeType === 9 && e;
                            if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                                a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                                while (f--) a[f] = c + a[f].join("");
                                h = z.test(e) && r.parentNode || r, p = a.join(",");
                            }
                            if (p) try {
                                return S.apply(s, x.call(h.querySelectorAll(p), 0)), s;
                            } catch (v) {} finally {
                                l || r.removeAttribute("id");
                            }
                        }
                        return t(e, r, s, o, u);
                    }, u && (K(function(t) {
                        e = u.call(t, "div");
                        try {
                            u.call(t, "[test!='']:sizzle"), s.push("!=", H);
                        } catch (n) {}
                    }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                        n = n.replace(r, "='$1']");
                        if (!o(t) && !s.test(n) && !i.test(n)) try {
                            var a = u.call(t, n);
                            if (a || e || t.document && t.document.nodeType !== 11) return a;
                        } catch (f) {}
                        return nt(n, null, null, [t]).length > 0;
                    });
                }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains;
            }(e);
        var nt = /Until$/,
            rt = /^(?:parents|prev(?:Until|All))/,
            it = /^.[^:#\[\.,]*$/,
            st = v.expr.match.needsContext,
            ot = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        v.fn.extend({
            find: function(e) {
                var t, n, r, i, s, o, u = this;
                if (typeof e != "string") return v(e).filter(function() {
                    for (t = 0, n = u.length; t < n; t++)
                        if (v.contains(u[t], this)) return !0;
                });
                o = this.pushStack("", "find", e);
                for (t = 0, n = this.length; t < n; t++) {
                    r = o.length, v.find(e, this[t], o);
                    if (t > 0)
                        for (i = r; i < o.length; i++)
                            for (s = 0; s < r; s++)
                                if (o[s] === o[i]) {
                                    o.splice(i--, 1);
                                    break;
                                }
                }
                return o;
            },
            has: function(e) {
                var t, n = v(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (v.contains(this, n[t])) return !0;
                });
            },
            not: function(e) {
                return this.pushStack(ft(this, e, !1), "not", e);
            },
            filter: function(e) {
                return this.pushStack(ft(this, e, !0), "filter", e);
            },
            is: function(e) {
                return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0);
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    s = [],
                    o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
                for (; r < i; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                        if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                            s.push(n);
                            break;
                        }
                        n = n.parentNode;
                    }
                }
                return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e);
            },
            index: function(e) {
                return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
            },
            add: function(e, t) {
                var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                    r = v.merge(this.get(), n);
                return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r));
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
            }
        }), v.fn.andSelf = v.fn.addBack, v.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null;
            },
            parents: function(e) {
                return v.dir(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
                return v.dir(e, "parentNode", n);
            },
            next: function(e) {
                return at(e, "nextSibling");
            },
            prev: function(e) {
                return at(e, "previousSibling");
            },
            nextAll: function(e) {
                return v.dir(e, "nextSibling");
            },
            prevAll: function(e) {
                return v.dir(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
                return v.dir(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
                return v.dir(e, "previousSibling", n);
            },
            siblings: function(e) {
                return v.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
                return v.sibling(e.firstChild);
            },
            contents: function(e) {
                return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes);
            }
        }, function(e, t) {
            v.fn[e] = function(n, r) {
                var i = v.map(this, t, n);
                return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","));
            };
        }), v.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t);
            },
            dir: function(e, n, r) {
                var i = [],
                    s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
                return i;
            },
            sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n;
            }
        });
        var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ht = / jQuery\d+="(?:null|\d+)"/g,
            pt = /^\s+/,
            dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            vt = /<([\w:]+)/,
            mt = /<tbody/i,
            gt = /<|&#?\w+;/,
            yt = /<(?:script|style|link)/i,
            bt = /<(?:script|object|embed|option|style)/i,
            wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
            Et = /^(?:checkbox|radio)$/,
            St = /checked\s*(?:[^=]|=\s*.checked.)/i,
            xt = /\/(java|ecma)script/i,
            Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Nt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            Ct = lt(i),
            kt = Ct.appendChild(i.createElement("div"));
        Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
                text: function(e) {
                    return v.access(this, function(e) {
                        return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e));
                    }, null, e, arguments.length);
                },
                wrapAll: function(e) {
                    if (v.isFunction(e)) return this.each(function(t) {
                        v(this).wrapAll(e.call(this, t));
                    });
                    if (this[0]) {
                        var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            var e = this;
                            while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                            return e;
                        }).append(this);
                    }
                    return this;
                },
                wrapInner: function(e) {
                    return v.isFunction(e) ? this.each(function(t) {
                        v(this).wrapInner(e.call(this, t));
                    }) : this.each(function() {
                        var t = v(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
                },
                wrap: function(e) {
                    var t = v.isFunction(e);
                    return this.each(function(n) {
                        v(this).wrapAll(t ? e.call(this, n) : e);
                    });
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes);
                    }).end();
                },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e);
                    });
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild);
                    });
                },
                before: function() {
                    if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                        this.parentNode.insertBefore(e, this);
                    });
                    if (arguments.length) {
                        var e = v.clean(arguments);
                        return this.pushStack(v.merge(e, this), "before", this.selector);
                    }
                },
                after: function() {
                    if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                        this.parentNode.insertBefore(e, this.nextSibling);
                    });
                    if (arguments.length) {
                        var e = v.clean(arguments);
                        return this.pushStack(v.merge(this, e), "after", this.selector);
                    }
                },
                remove: function(e, t) {
                    var n, r = 0;
                    for (;
                        (n = this[r]) != null; r++)
                        if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                    return this;
                },
                empty: function() {
                    var e, t = 0;
                    for (;
                        (e = this[t]) != null; t++) {
                        e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                        while (e.firstChild) e.removeChild(e.firstChild);
                    }
                    return this;
                },
                clone: function(e, t) {
                    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                        return v.clone(this, e, t);
                    });
                },
                html: function(e) {
                    return v.access(this, function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                        if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(dt, "<$1></$2>");
                            try {
                                for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                n = 0;
                            } catch (s) {}
                        }
                        n && this.empty().append(e);
                    }, null, e, arguments.length);
                },
                replaceWith: function(e) {
                    return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                        var n = v(this),
                            r = n.html();
                        n.replaceWith(e.call(this, t, r));
                    }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        v(this).remove(), t ? v(t).before(e) : v(n).append(e);
                    }));
                },
                detach: function(e) {
                    return this.remove(e, !0);
                },
                domManip: function(e, n, r) {
                    e = [].concat.apply([], e);
                    var i, s, o, u, a = 0,
                        f = e[0],
                        l = [],
                        c = this.length;
                    if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                        v(this).domManip(e, n, r);
                    });
                    if (v.isFunction(f)) return this.each(function(i) {
                        var s = v(this);
                        e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
                    });
                    if (this[0]) {
                        i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                        if (s) {
                            n = n && v.nodeName(s, "tr");
                            for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0));
                        }
                        o = s = null, l.length && v.each(l, function(e, t) {
                            t.src ? v.ajax ? v.ajax({
                                url: t.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t);
                        });
                    }
                    return this;
                }
            }), v.buildFragment = function(e, n, r) {
                var s, o, u, a = e[0];
                return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                    fragment: s,
                    cacheable: o
                };
            }, v.fragments = {}, v.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                v.fn[e] = function(n) {
                    var r, i = 0,
                        s = [],
                        o = v(n),
                        u = o.length,
                        a = this.length === 1 && this[0].parentNode;
                    if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                    for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                    return this.pushStack(s, e, o.selector);
                };
            }), v.extend({
                clone: function(e, t, n) {
                    var r, i, s, o;
                    v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                    if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                        Ot(e, o), r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s]);
                    }
                    if (t) {
                        At(e, o);
                        if (n) {
                            r = Mt(e), i = Mt(o);
                            for (s = 0; r[s]; ++s) At(r[s], i[s]);
                        }
                    }
                    return r = i = null, o;
                },
                clean: function(e, t, n, r) {
                    var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                        b = [];
                    if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                    for (s = 0;
                        (u = e[s]) != null; s++) {
                        typeof u == "number" && (u += "");
                        if (!u) continue;
                        if (typeof u == "string")
                            if (!gt.test(u)) u = t.createTextNode(u);
                            else {
                                y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                                while (l--) c = c.lastChild;
                                if (!v.support.tbody) {
                                    h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                    for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                                }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c);
                            }
                        u.nodeType ? b.push(u) : v.merge(b, u);
                    }
                    c && (u = c = y = null);
                    if (!v.support.appendChecked)
                        for (s = 0;
                            (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                    if (n) {
                        m = function(e) {
                            if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
                        };
                        for (s = 0;
                            (u = b[s]) != null; s++)
                            if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length);
                    }
                    return b;
                },
                cleanData: function(e, t) {
                    var n, r, i, s, o = 0,
                        u = v.expando,
                        a = v.cache,
                        f = v.support.deleteExpando,
                        l = v.event.special;
                    for (;
                        (i = e[o]) != null; o++)
                        if (t || v.acceptData(i)) {
                            r = i[u], n = r && a[r];
                            if (n) {
                                if (n.events)
                                    for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                                a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r));
                            }
                        }
                }
            }),
            function() {
                var e, t;
                v.uaMatch = function(e) {
                    e = e.toLowerCase();
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    };
                }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
                    function e(t, n) {
                        return new e.fn.init(t, n);
                    }
                    v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                        return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t);
                    }, e.fn.init.prototype = e.fn;
                    var t = e(i);
                    return e;
                };
            }();
        var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
            jt = /opacity=([^)]*)/,
            Ft = /^(top|right|bottom|left)$/,
            It = /^(none|table(?!-c[ea]).+)/,
            qt = /^margin/,
            Rt = new RegExp("^(" + m + ")(.*)$", "i"),
            Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
            zt = new RegExp("^([-+])=(" + m + ")", "i"),
            Wt = {
                BODY: "block"
            },
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Vt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            $t = ["Top", "Right", "Bottom", "Left"],
            Jt = ["Webkit", "O", "Moz", "ms"],
            Kt = v.fn.toggle;
        v.fn.extend({
            css: function(e, n) {
                return v.access(this, function(e, n, r) {
                    return r !== t ? v.style(e, n, r) : v.css(e, n);
                }, e, n, arguments.length > 1);
            },
            show: function() {
                return Yt(this, !0);
            },
            hide: function() {
                return Yt(this);
            },
            toggle: function(e, t) {
                var n = typeof e == "boolean";
                return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                    (n ? e : Gt(this)) ? v(this).show(): v(this).hide();
                });
            }
        }), v.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Dt(e, "opacity");
                            return n === "" ? "1" : n;
                        }
                    }
                }
            },
            cssNumber: {
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
                "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                var s, o, u, a = v.camelCase(n),
                    f = e.style;
                n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
                if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !v.cssNumber[a] && (r += "px");
                if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                    f[n] = r;
                } catch (l) {}
            },
            css: function(e, n, r, i) {
                var s, o, u, a = v.camelCase(n);
                return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s;
            },
            swap: function(e, t, n) {
                var r, i, s = {};
                for (i in t) s[i] = e.style[i], e.style[i] = t[i];
                r = n.call(e);
                for (i in t) e.style[i] = s[i];
                return r;
            }
        }), e.getComputedStyle ? Dt = function(t, n) {
            var r, i, s, o, u = e.getComputedStyle(t, null),
                a = t.style;
            return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r;
        } : i.documentElement.currentStyle && (Dt = function(e, t) {
            var n, r, i = e.currentStyle && e.currentStyle[t],
                s = e.style;
            return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i;
        }), v.each(["height", "width"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                        return tn(e, t, r);
                    }) : tn(e, t, r);
                },
                set: function(e, n, r) {
                    return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0);
                }
            };
        }), v.support.opacity || (v.cssHooks.opacity = {
            get: function(e, t) {
                return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    s = r && r.filter || n.filter || "";
                n.zoom = 1;
                if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (r && !r.filter) return;
                }
                n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i;
            }
        }), v(function() {
            v.support.reliableMarginRight || (v.cssHooks.marginRight = {
                get: function(e, t) {
                    return v.swap(e, {
                        display: "inline-block"
                    }, function() {
                        if (t) return Dt(e, "marginRight");
                    });
                }
            }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
                v.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) {
                            var r = Dt(e, t);
                            return Ut.test(r) ? v(e).position()[t] + "px" : r;
                        }
                    }
                };
            });
        }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
            return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none";
        }, v.expr.filters.visible = function(e) {
            return !v.expr.filters.hidden(e);
        }), v.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            v.cssHooks[e + t] = {
                expand: function(n) {
                    var r, i = typeof n == "string" ? n.split(" ") : [n],
                        s = {};
                    for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                    return s;
                }
            }, qt.test(e) || (v.cssHooks[e + t].set = Zt);
        });
        var rn = /%20/g,
            sn = /\[\]$/,
            on = /\r?\n/g,
            un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            an = /^(?:select|textarea)/i;
        v.fn.extend({
            serialize: function() {
                return v.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? v.makeArray(this.elements) : this;
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type));
                }).map(function(e, t) {
                    var n = v(this).val();
                    return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                        return {
                            name: t.name,
                            value: e.replace(on, "\r\n")
                        };
                    }) : {
                        name: t.name,
                        value: n.replace(on, "\r\n")
                    };
                }).get();
            }
        }), v.param = function(e, n) {
            var r, i = [],
                s = function(e, t) {
                    t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
                };
            n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
            if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
                s(this.name, this.value);
            });
            else
                for (r in e) fn(r, e[r], n, s);
            return i.join("&").replace(rn, "+");
        };
        var ln, cn, hn = /#.*$/,
            pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            vn = /^(?:GET|HEAD)$/,
            mn = /^\/\//,
            gn = /\?/,
            yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            bn = /([?&])_=[^&]*/,
            wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            En = v.fn.load,
            Sn = {},
            xn = {},
            Tn = ["*/"] + ["*"];
        try {
            cn = s.href;
        } catch (Nn) {
            cn = i.createElement("a"), cn.href = "", cn = cn.href;
        }
        ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
            if (typeof e != "string" && En) return En.apply(this, arguments);
            if (!this.length) return this;
            var i, s, o, u = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n,
                complete: function(e, t) {
                    r && u.each(r, o || [e.responseText, t, e]);
                }
            }).done(function(e) {
                o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e);
            }), this;
        }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            v.fn[t] = function(e) {
                return this.on(t, e);
            };
        }), v.each(["get", "post"], function(e, n) {
            v[n] = function(e, r, i, s) {
                return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                    type: n,
                    url: e,
                    data: r,
                    success: i,
                    dataType: s
                });
            };
        }), v.extend({
            getScript: function(e, n) {
                return v.get(e, t, n, "script");
            },
            getJSON: function(e, t, n) {
                return v.get(e, t, n, "json");
            },
            ajaxSetup: function(e, t) {
                return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e;
            },
            ajaxSettings: {
                url: cn,
                isLocal: dn.test(ln[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Tn
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": v.parseJSON,
                    "text xml": v.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: Cn(Sn),
            ajaxTransport: Cn(xn),
            ajax: function(e, n) {
                function T(e, n, s, a) {
                    var l, y, b, w, S, T = n;
                    if (E === 2) return;
                    E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                    if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                    else {
                        b = T;
                        if (!T || e) T = "error", e < 0 && (e = 0);
                    }
                    x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"));
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                    h = c.context || c,
                    p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                    d = v.Deferred(),
                    m = v.Callbacks("once memory"),
                    g = c.statusCode || {},
                    b = {},
                    w = {},
                    E = 0,
                    S = "canceled",
                    x = {
                        readyState: 0,
                        setRequestHeader: function(e, t) {
                            if (!E) {
                                var n = e.toLowerCase();
                                e = w[n] = w[n] || e, b[e] = t;
                            }
                            return this;
                        },
                        getAllResponseHeaders: function() {
                            return E === 2 ? i : null;
                        },
                        getResponseHeader: function(e) {
                            var n;
                            if (E === 2) {
                                if (!s) {
                                    s = {};
                                    while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2];
                                }
                                n = s[e.toLowerCase()];
                            }
                            return n === t ? null : n;
                        },
                        overrideMimeType: function(e) {
                            return E || (c.mimeType = e), this;
                        },
                        abort: function(e) {
                            return e = e || S, o && o.abort(e), T(0, e), this;
                        }
                    };
                d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (E < 2)
                            for (t in e) g[t] = [g[t], e[t]];
                        else t = e[x.status], x.always(t);
                    }
                    return this;
                }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
                if (E === 2) return x;
                f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
                if (!c.hasContent) {
                    c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                    if (c.cache === !1) {
                        var N = v.now(),
                            C = c.url.replace(bn, "$1_=" + N);
                        c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "");
                    }
                }
                (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
                for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
                if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                    S = "abort";
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[l](c[l]);
                    o = kn(xn, c, n, x);
                    if (!o) T(-1, "No Transport");
                    else {
                        x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                            x.abort("timeout");
                        }, c.timeout));
                        try {
                            E = 1, o.send(b, T);
                        } catch (k) {
                            if (!(E < 2)) throw k;
                            T(-1, k);
                        }
                    }
                    return x;
                }
                return x.abort();
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var Mn = [],
            _n = /\?/,
            Dn = /(=)\?(?=&|$)|\?\?/,
            Pn = v.now();
        v.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Mn.pop() || v.expando + "_" + Pn++;
                return this[e] = !0, e;
            }
        }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
            var s, o, u, a = n.data,
                f = n.url,
                l = n.jsonp !== !1,
                c = l && Dn.test(f),
                h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
            if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return u || v.error(s + " was not called"), u[0];
            }, n.dataTypes[0] = "json", e[s] = function() {
                u = arguments;
            }, i.always(function() {
                e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t;
            }), "script";
        }), v.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return v.globalEval(e), e;
                }
            }
        }), v.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
        }), v.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
                return {
                    send: function(s, o) {
                        n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                            if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success");
                        }, r.insertBefore(n, r.firstChild);
                    },
                    abort: function() {
                        n && n.onload(0, 1);
                    }
                };
            }
        });
        var Hn, Bn = e.ActiveXObject ? function() {
                for (var e in Hn) Hn[e](0, 1);
            } : !1,
            jn = 0;
        v.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && Fn() || In();
            } : Fn,
            function(e) {
                v.extend(v.support, {
                    ajax: !!e,
                    cors: !!e && "withCredentials" in e
                });
            }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
                if (!n.crossDomain || v.support.cors) {
                    var r;
                    return {
                        send: function(i, s) {
                            var o, u, a = n.xhr();
                            n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                            if (n.xhrFields)
                                for (u in n.xhrFields) a[u] = n.xhrFields[u];
                            n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (u in i) a.setRequestHeader(u, i[u]);
                            } catch (f) {}
                            a.send(n.hasContent && n.data || null), r = function(e, i) {
                                var u, f, l, c, h;
                                try {
                                    if (r && (i || a.readyState === 4)) {
                                        r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                        if (i) a.readyState !== 4 && a.abort();
                                        else {
                                            u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                            try {
                                                c.text = a.responseText;
                                            } catch (p) {}
                                            try {
                                                f = a.statusText;
                                            } catch (p) {
                                                f = "";
                                            }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204);
                                        }
                                    }
                                } catch (d) {
                                    i || s(-1, d);
                                }
                                c && s(u, f, c, l);
                            }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r();
                        },
                        abort: function() {
                            r && r(0, 1);
                        }
                    };
                }
            });
        var qn, Rn, Un = /^(?:toggle|show|hide)$/,
            zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
            Wn = /queueHooks$/,
            Xn = [Gn],
            Vn = {
                "*": [function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = zn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = v.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f);
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
                    }
                    return i;
                }]
            };
        v.Animation = v.extend(Kn, {
            tweener: function(e, t) {
                v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t);
            },
            prefilter: function(e, t) {
                t ? Xn.unshift(e) : Xn.push(e);
            }
        }), v.Tween = Yn, Yn.prototype = {
            constructor: Yn,
            init: function(e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px");
            },
            cur: function() {
                var e = Yn.propHooks[this.prop];
                return e && e.get ? e.get(this) : Yn.propHooks._default.get(this);
            },
            run: function(e) {
                var t, n = Yn.propHooks[this.prop];
                return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this;
            }
        }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
                },
                set: function(e) {
                    v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
                }
            }
        }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
        }, v.each(["toggle", "show", "hide"], function(e, t) {
            var n = v.fn[t];
            v.fn[t] = function(r, i, s) {
                return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s);
            };
        }), v.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Gt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r);
            },
            animate: function(e, t, n, r) {
                var i = v.isEmptyObject(e),
                    s = v.speed(t, n, r),
                    o = function() {
                        var t = Kn(this, v.extend({}, e), s);
                        i && t.stop(!0);
                    };
                return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                };
                return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = e != null && e + "queueHooks",
                        s = v.timers,
                        o = v._data(this);
                    if (n) o[n] && o[n].stop && i(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                    for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                    (t || !r) && v.dequeue(this, e);
                });
            }
        }), v.each({
            slideDown: Zn("show"),
            slideUp: Zn("hide"),
            slideToggle: Zn("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            v.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r);
            };
        }), v.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? v.extend({}, e) : {
                complete: n || !n && t || v.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !v.isFunction(t) && t
            };
            r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue);
            }, r;
        }, v.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            }
        }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
            var e, n = v.timers,
                r = 0;
            qn = v.now();
            for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
            n.length || v.fx.stop(), qn = t;
        }, v.fx.timer = function(e) {
            e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval));
        }, v.fx.interval = 13, v.fx.stop = function() {
            clearInterval(Rn), Rn = null;
        }, v.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
            return v.grep(v.timers, function(t) {
                return e === t.elem;
            }).length;
        });
        var er = /^(?:body|html)$/i;
        v.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                v.offset.setOffset(this, e, t);
            });
            var n, r, i, s, o, u, a, f = {
                    top: 0,
                    left: 0
                },
                l = this[0],
                c = l && l.ownerDocument;
            if (!c) return;
            return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
                top: f.top + u - s,
                left: f.left + a - o
            }) : f);
        }, v.offset = {
            bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                };
            },
            setOffset: function(e, t, n) {
                var r = v.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = v(e),
                    s = i.offset(),
                    o = v.css(e, "top"),
                    u = v.css(e, "left"),
                    a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                    f = {},
                    l = {},
                    c, h;
                a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
            }
        }, v.fn.extend({
            position: function() {
                if (!this[0]) return;
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = er.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || i.body;
                    while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                    return e || i.body;
                });
            }
        }), v.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            v.fn[e] = function(i) {
                return v.access(this, function(e, i, s) {
                    var o = tr(e);
                    if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s;
                }, e, i, arguments.length, null);
            };
        }), v.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            v.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                v.fn[i] = function(i, s) {
                    var o = arguments.length && (r || typeof i != "boolean"),
                        u = r || (i === !0 || s === !0 ? "margin" : "border");
                    return v.access(this, function(n, r, i) {
                        var s;
                        return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u);
                    }, n, o ? i : t, o, null);
                };
            });
        }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return v;
        });
    }(window),
    function(e) {
        "use strict";
        e(["jquery"], function(e) {
            function n(t) {
                return !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1;
            }

            function r(t) {
                return e.isFunction(t) || e.isPlainObject(t) ? t : {
                    top: t,
                    left: t
                };
            }
            var t = e.scrollTo = function(t, n, r) {
                return e(window).scrollTo(t, n, r);
            };
            return t.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            }, e.fn.scrollTo = function(i, s, o) {
                return typeof s == "object" && (o = s, s = 0), typeof o == "function" && (o = {
                    onAfter: o
                }), i === "max" && (i = 9e9), o = e.extend({}, t.defaults, o), s = s || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (s /= 2), o.offset = r(o.offset), o.over = r(o.over), this.each(function() {
                    function d(t) {
                        var n = e.extend({}, o, {
                            duration: s,
                            complete: t && function() {
                                t.call(a, l, o);
                            }
                        });
                        f.animate(c, n);
                    }
                    if (i === null) return;
                    var u = n(this),
                        a = u ? this.contentWindow || window : this,
                        f = e(a),
                        l = i,
                        c = {},
                        h;
                    switch (typeof l) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)) {
                                l = r(l);
                                break;
                            }
                            l = u ? e(l) : e(l, a);
                            if (!l.length) return;
                        case "object":
                            if (l.is || l.style) h = (l = e(l)).offset();
                    }
                    var p = e.isFunction(o.offset) && o.offset(a, l) || o.offset;
                    e.each(o.axis.split(""), function(n, r) {
                        var i = r === "x" ? "Left" : "Top",
                            s = i.toLowerCase(),
                            v = "scroll" + i,
                            m = e(a)[v](),
                            g = t.max(a, r);
                        if (h) c[v] = h[s] + (u ? 0 : m - f.offset()[s]), o.margin && (c[v] -= parseInt(l.css("margin" + i), 10) || 0, c[v] -= parseInt(l.css("border" + i + "Width"), 10) || 0), c[v] += p[s] || 0, o.over[s] && (c[v] += l[r === "x" ? "width" : "height"]() * o.over[s]);
                        else {
                            var y = l[s];
                            c[v] = y.slice && y.slice(-1) === "%" ? parseFloat(y) / 100 * g : y;
                        }
                        o.limit && /^\d+$/.test(c[v]) && (c[v] = c[v] <= 0 ? 0 : Math.min(c[v], g)), !n && o.queue && (m !== c[v] && d(o.onAfterFirst), c = {});
                    }), d(o.onAfter);
                });
            }, t.max = function(t, r) {
                var i = r === "x" ? "Width" : "Height",
                    s = "scroll" + i;
                if (!n(t)) return t[s] - e(t)[i.toLowerCase()]();
                var o = "client" + i,
                    u = t.ownerDocument || t.document,
                    a = u.documentElement,
                    f = u.body;
                return Math.max(a[s], f[s]) - Math.min(a[o], f[o]);
            }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
                get: function(t) {
                    return e(t.elem)[t.prop]();
                },
                set: function(t) {
                    var n = Math.round(t.now);
                    this.get(t) !== n && e(t.elem)[t.prop](n);
                }
            }, t;
        });
    }(typeof define == "function" && define.amd ? define : function(e, t) {
        "use strict";
        typeof module != "undefined" && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
    }),
    function(e, t, n) {
        (function(e) {
            "use strict";
            typeof define == "function" && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.qtip && e(jQuery);
        })(function(r) {
            "use strict";

            function I(e, t, n, i) {
                this.id = n, this.target = e, this.tooltip = o, this.elements = {
                    target: e
                }, this._id = T + "-" + n, this.timers = {
                    img: {}
                }, this.options = t, this.plugins = {}, this.cache = {
                    event: {},
                    target: r(),
                    disabled: s,
                    attr: i,
                    onTooltip: s,
                    lastClass: ""
                }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = s;
            }

            function q(e) {
                return e === o || r.type(e) !== "object";
            }

            function R(e) {
                return !(r.isFunction(e) || e && e.attr || e.length || r.type(e) === "object" && (e.jquery || e.then));
            }

            function U(e) {
                var t, n, u, a;
                return q(e) ? s : (q(e.metadata) && (e.metadata = {
                    type: e.metadata
                }), "content" in e && (t = e.content, q(t) || t.jquery || t.done ? t = e.content = {
                    text: n = R(t) ? s : t
                } : n = t.text, "ajax" in t && (u = t.ajax, a = u && u.once !== s, delete t.ajax, t.text = function(e, t) {
                    var i = n || r(this).attr(t.options.content.attr) || "Loading...",
                        s = r.ajax(r.extend({}, u, {
                            context: t
                        })).then(u.success, o, u.error).then(function(e) {
                            return e && a && t.set("content.text", e), e;
                        }, function(e, n, r) {
                            if (t.destroyed || e.status === 0) return;
                            t.set("content.text", n + ": " + r);
                        });
                    return a ? i : (t.set("content.text", i), s);
                }), "title" in t && (r.isPlainObject(t.title) && (t.button = t.title.button, t.title = t.title.text), R(t.title || s) && (t.title = s))), "position" in e && q(e.position) && (e.position = {
                    my: e.position,
                    at: e.position
                }), "show" in e && q(e.show) && (e.show = e.show.jquery ? {
                    target: e.show
                } : e.show === i ? {
                    ready: i
                } : {
                    event: e.show
                }), "hide" in e && q(e.hide) && (e.hide = e.hide.jquery ? {
                    target: e.hide
                } : {
                    event: e.hide
                }), "style" in e && q(e.style) && (e.style = {
                    classes: e.style
                }), r.each(x, function() {
                    this.sanitize && this.sanitize(e);
                }), e);
            }

            function z(e, t) {
                var n = 0,
                    r, i = e,
                    s = t.split(".");
                while (i = i[s[n++]]) n < s.length && (r = i);
                return [r || e, s.pop()];
            }

            function W(e, t) {
                var n, r, i;
                for (n in this.checks)
                    for (r in this.checks[n])
                        if (i = (new RegExp(r, "i")).exec(e)) t.push(i), (n === "builtin" || this.plugins[n]) && this.checks[n][r].apply(this.plugins[n] || this, t);
            }

            function J(e) {
                return k.concat("").join(e ? "-" + e + " " : " ");
            }

            function K(e, t) {
                if (t > 0) return setTimeout(r.proxy(e, this), t);
                e.call(this);
            }

            function Q(e) {
                if (this.tooltip.hasClass(P)) return;
                clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = K.call(this, function() {
                    this.toggle(i, e);
                }, this.options.show.delay);
            }

            function G(e) {
                if (this.tooltip.hasClass(P) || this.destroyed) return;
                var t = r(e.relatedTarget),
                    n = t.closest(L)[0] === this.tooltip[0],
                    i = t[0] === this.options.show.target[0];
                clearTimeout(this.timers.show), clearTimeout(this.timers.hide);
                if (this !== t[0] && this.options.position.target === "mouse" && n || this.options.hide.fixed && /mouse(out|leave|move)/.test(e.type) && (n || i)) {
                    try {
                        e.preventDefault(), e.stopImmediatePropagation();
                    } catch (o) {}
                    return;
                }
                this.timers.hide = K.call(this, function() {
                    this.toggle(s, e);
                }, this.options.hide.delay, this);
            }

            function Y(e) {
                if (this.tooltip.hasClass(P) || !this.options.hide.inactive) return;
                clearTimeout(this.timers.inactive), this.timers.inactive = K.call(this, function() {
                    this.hide(e);
                }, this.options.hide.inactive);
            }

            function Z(e) {
                this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(e);
            }

            function et(e, n, i) {
                r(t.body).delegate(e, (n.split ? n : n.join("." + T + " ")) + "." + T, function() {
                    var e = b.api[r.attr(this, C)];
                    e && !e.disabled && i.apply(e, arguments);
                });
            }

            function tt(e, n, u) {
                var a, f, l, c, h, p = r(t.body),
                    d = e[0] === t ? p : e,
                    v = e.metadata ? e.metadata(u.metadata) : o,
                    m = u.metadata.type === "html5" && v ? v[u.metadata.name] : o,
                    g = e.data(u.metadata.name || "qtipopts");
                try {
                    g = typeof g == "string" ? r.parseJSON(g) : g;
                } catch (y) {}
                c = r.extend(i, {}, b.defaults, u, typeof g == "object" ? U(g) : o, U(m || v)), f = c.position, c.id = n;
                if ("boolean" == typeof c.content.text) {
                    l = e.attr(c.content.attr);
                    if (c.content.attr === s || !l) return s;
                    c.content.text = l;
                }
                f.container.length || (f.container = p), f.target === s && (f.target = d), c.show.target === s && (c.show.target = d), c.show.solo === i && (c.show.solo = f.container.closest("body")), c.hide.target === s && (c.hide.target = d), c.position.viewport === i && (c.position.viewport = f.container), f.container = f.container.eq(0), f.at = new E(f.at, i), f.my = new E(f.my);
                if (e.data(T))
                    if (c.overwrite) e.qtip("destroy", !0);
                    else if (c.overwrite === s) return s;
                return e.attr(N, n), c.suppress && (h = e.attr("title")) && e.removeAttr("title").attr(B, h).attr("title", ""), a = new I(e, c, n, !!l), e.data(T, a), a;
            }

            function ht(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
            }

            function vt(e, t) {
                var r = t.charAt(0).toUpperCase() + t.slice(1),
                    i = (t + " " + dt.join(r + " ") + r).split(" "),
                    s, o, u = 0;
                if (pt[t]) return e.css(pt[t]);
                while (s = i[u++])
                    if ((o = e.css(s)) !== n) return pt[t] = s, o;
            }

            function mt(e, t) {
                return Math.ceil(parseFloat(vt(e, t)));
            }

            function Et(e, t) {
                this._ns = "tip", this.options = t, this.offset = t.offset, this.size = [t.width, t.height], this.init(this.qtip = e);
            }

            function Ct(e, t) {
                this.options = t, this._ns = "-modal", this.init(this.qtip = e);
            }

            function At(e, t) {
                this._ns = "ie6", this.init(this.qtip = e);
            }
            var i = !0,
                s = !1,
                o = null,
                u = "x",
                a = "y",
                f = "width",
                l = "height",
                c = "top",
                h = "left",
                p = "bottom",
                d = "right",
                v = "center",
                m = "flip",
                g = "flipinvert",
                y = "shift",
                b, w, E, S, x = {},
                T = "qtip",
                N = "data-hasqtip",
                C = "data-qtip-id",
                k = ["ui-widget", "ui-tooltip"],
                L = "." + T,
                A = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
                O = T + "-fixed",
                M = T + "-default",
                _ = T + "-focus",
                D = T + "-hover",
                P = T + "-disabled",
                H = "_replacedByqTip",
                B = "oldtitle",
                j, F = {
                    ie: function() {
                        for (var e = 4, n = t.createElement("div");
                            (n.innerHTML = "<!--[if gt IE " + e + "]><i></i><![endif]-->") && n.getElementsByTagName("i")[0]; e += 1);
                        return e > 4 ? e : NaN;
                    }(),
                    iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || s
                };
            w = I.prototype, w._when = function(e) {
                return r.when.apply(r, e);
            }, w.render = function(e) {
                if (this.rendered || this.destroyed) return this;
                var t = this,
                    n = this.options,
                    o = this.cache,
                    u = this.elements,
                    a = n.content.text,
                    f = n.content.title,
                    l = n.content.button,
                    c = n.position,
                    h = "." + this._id + " ",
                    p = [],
                    d;
                return r.attr(this.target[0], "aria-describedby", this._id), o.posClass = this._createPosClass((this.position = {
                    my: c.my,
                    at: c.at
                }).my), this.tooltip = u.tooltip = d = r("<div/>", {
                    id: this._id,
                    "class": [T, M, n.style.classes, o.posClass].join(" "),
                    width: n.style.width || "",
                    height: n.style.height || "",
                    tracking: c.target === "mouse" && c.adjust.mouse,
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": s,
                    "aria-describedby": this._id + "-content",
                    "aria-hidden": i
                }).toggleClass(P, this.disabled).attr(C, this.id).data(T, this).appendTo(c.container).append(u.content = r("<div />", {
                    "class": T + "-content",
                    id: this._id + "-content",
                    "aria-atomic": i
                })), this.rendered = -1, this.positioning = i, f && (this._createTitle(), r.isFunction(f) || p.push(this._updateTitle(f, s))), l && this._createButton(), r.isFunction(a) || p.push(this._updateContent(a, s)), this.rendered = i, this._setWidget(), r.each(x, function(e) {
                    var n;
                    this.initialize === "render" && (n = this(t)) && (t.plugins[e] = n);
                }), this._unassignEvents(), this._assignEvents(), this._when(p).then(function() {
                    t._trigger("render"), t.positioning = s, !t.hiddenDuringWait && (n.show.ready || e) && t.toggle(i, o.event, s), t.hiddenDuringWait = s;
                }), b.api[this.id] = this, this;
            }, w.destroy = function(e) {
                function t() {
                    if (this.destroyed) return;
                    this.destroyed = i;
                    var e = this.target,
                        t = e.attr(B),
                        n;
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), r.each(this.plugins, function(e) {
                        this.destroy && this.destroy();
                    });
                    for (n in this.timers) clearTimeout(this.timers[n]);
                    e.removeData(T).removeAttr(C).removeAttr(N).removeAttr("aria-describedby"), this.options.suppress && t && e.attr("title", t).removeAttr(B), this._unassignEvents(), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = o, delete b.api[this.id];
                }
                return this.destroyed ? this.target : (e === i && this.triggering !== "hide" || !this.rendered ? t.call(this) : (this.tooltip.one("tooltiphidden", r.proxy(t, this)), !this.triggering && this.hide()), this.target);
            }, S = w.checks = {
                builtin: {
                    "^id$": function(e, t, n, o) {
                        var u = n === i ? b.nextid : n,
                            a = T + "-" + u;
                        u !== s && u.length > 0 && !r("#" + a).length ? (this._id = a, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : e[t] = o;
                    },
                    "^prerender": function(e, t, n) {
                        n && !this.rendered && this.render(this.options.show.ready);
                    },
                    "^content.text$": function(e, t, n) {
                        this._updateContent(n);
                    },
                    "^content.attr$": function(e, t, n, r) {
                        this.options.content.text === this.target.attr(r) && this._updateContent(this.target.attr(n));
                    },
                    "^content.title$": function(e, t, n) {
                        if (!n) return this._removeTitle();
                        n && !this.elements.title && this._createTitle(), this._updateTitle(n);
                    },
                    "^content.button$": function(e, t, n) {
                        this._updateButton(n);
                    },
                    "^content.title.(text|button)$": function(e, t, n) {
                        this.set("content." + t, n);
                    },
                    "^position.(my|at)$": function(e, t, n) {
                        "string" == typeof n && (this.position[t] = e[t] = new E(n, t === "at"));
                    },
                    "^position.container$": function(e, t, n) {
                        this.rendered && this.tooltip.appendTo(n);
                    },
                    "^show.ready$": function(e, t, n) {
                        n && (!this.rendered && this.render(i) || this.toggle(i));
                    },
                    "^style.classes$": function(e, t, n, r) {
                        this.rendered && this.tooltip.removeClass(r).addClass(n);
                    },
                    "^style.(width|height)": function(e, t, n) {
                        this.rendered && this.tooltip.css(t, n);
                    },
                    "^style.widget|content.title": function() {
                        this.rendered && this._setWidget();
                    },
                    "^style.def": function(e, t, n) {
                        this.rendered && this.tooltip.toggleClass(M, !!n);
                    },
                    "^events.(render|show|move|hide|focus|blur)$": function(e, t, n) {
                        this.rendered && this.tooltip[(r.isFunction(n) ? "" : "un") + "bind"]("tooltip" + t, n);
                    },
                    "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                        if (!this.rendered) return;
                        var e = this.options.position;
                        this.tooltip.attr("tracking", e.target === "mouse" && e.adjust.mouse), this._unassignEvents(), this._assignEvents();
                    }
                }
            }, w.get = function(e) {
                if (this.destroyed) return this;
                var t = z(this.options, e.toLowerCase()),
                    n = t[0][t[1]];
                return n.precedance ? n.string() : n;
            };
            var X = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
                V = /^prerender|show\.ready/i;
            w.set = function(e, t) {
                if (this.destroyed) return this;
                var n = this.rendered,
                    u = s,
                    a = this.options,
                    f = this.checks,
                    l;
                return "string" == typeof e ? (l = e, e = {}, e[l] = t) : e = r.extend({}, e), r.each(e, function(t, i) {
                    if (n && V.test(t)) {
                        delete e[t];
                        return;
                    }
                    var s = z(a, t.toLowerCase()),
                        o;
                    o = s[0][s[1]], s[0][s[1]] = i && i.nodeType ? r(i) : i, u = X.test(t) || u, e[t] = [s[0], s[1], i, o];
                }), U(a), this.positioning = i, r.each(e, r.proxy(W, this)), this.positioning = s, this.rendered && this.tooltip[0].offsetWidth > 0 && u && this.reposition(a.position.target === "mouse" ? o : this.cache.event), this;
            }, w._update = function(e, t, n) {
                var u = this,
                    a = this.cache;
                return !this.rendered || !e ? s : (r.isFunction(e) && (e = e.call(this.elements.target, a.event, this) || ""), r.isFunction(e.then) ? (a.waiting = i, e.then(function(e) {
                    return a.waiting = s, u._update(e, t);
                }, o, function(e) {
                    return u._update(e, t);
                })) : e === s || !e && e !== "" ? s : (e.jquery && e.length > 0 ? t.empty().append(e.css({
                    display: "block",
                    visibility: "visible"
                })) : t.html(e), this._waitForContent(t).then(function(e) {
                    u.rendered && u.tooltip[0].offsetWidth > 0 && u.reposition(a.event, !e.length);
                })));
            }, w._waitForContent = function(e) {
                var t = this.cache;
                return t.waiting = i, (r.fn.imagesLoaded ? e.imagesLoaded() : r.Deferred().resolve([])).done(function() {
                    t.waiting = s;
                }).promise();
            }, w._updateContent = function(e, t) {
                this._update(e, this.elements.content, t);
            }, w._updateTitle = function(e, t) {
                this._update(e, this.elements.title, t) === s && this._removeTitle(s);
            }, w._createTitle = function() {
                var e = this.elements,
                    t = this._id + "-title";
                e.titlebar && this._removeTitle(), e.titlebar = r("<div />", {
                    "class": T + "-titlebar " + (this.options.style.widget ? J("header") : "")
                }).append(e.title = r("<div />", {
                    id: t,
                    "class": T + "-title",
                    "aria-atomic": i
                })).insertBefore(e.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(e) {
                    r(this).toggleClass("ui-state-active ui-state-focus", e.type.substr(-4) === "down");
                }).delegate(".qtip-close", "mouseover mouseout", function(e) {
                    r(this).toggleClass("ui-state-hover", e.type === "mouseover");
                }), this.options.content.button && this._createButton();
            }, w._removeTitle = function(e) {
                var t = this.elements;
                t.title && (t.titlebar.remove(), t.titlebar = t.title = t.button = o, e !== s && this.reposition());
            }, w._createPosClass = function(e) {
                return T + "-pos-" + (e || this.options.position.my).abbrev();
            }, w.reposition = function(n, o) {
                if (!this.rendered || this.positioning || this.destroyed) return this;
                this.positioning = i;
                var u = this.cache,
                    a = this.tooltip,
                    f = this.options.position,
                    l = f.target,
                    m = f.my,
                    g = f.at,
                    y = f.viewport,
                    b = f.container,
                    w = f.adjust,
                    E = w.method.split(" "),
                    S = a.outerWidth(s),
                    T = a.outerHeight(s),
                    N = 0,
                    C = 0,
                    k = a.css("position"),
                    L = {
                        left: 0,
                        top: 0
                    },
                    A = a[0].offsetWidth > 0,
                    O = n && n.type === "scroll",
                    M = r(e),
                    _ = b[0].ownerDocument,
                    D = this.mouse,
                    P, H, B, j;
                if (r.isArray(l) && l.length === 2) g = {
                    x: h,
                    y: c
                }, L = {
                    left: l[0],
                    top: l[1]
                };
                else if (l === "mouse") g = {
                    x: h,
                    y: c
                }, (!w.mouse || this.options.hide.distance) && u.origin && u.origin.pageX ? n = u.origin : !n || n && (n.type === "resize" || n.type === "scroll") ? n = u.event : D && D.pageX && (n = D), k !== "static" && (L = b.offset()), _.body.offsetWidth !== (e.innerWidth || _.documentElement.clientWidth) && (H = r(t.body).offset()), L = {
                    left: n.pageX - L.left + (H && H.left || 0),
                    top: n.pageY - L.top + (H && H.top || 0)
                }, w.mouse && O && D && (L.left -= (D.scrollX || 0) - M.scrollLeft(), L.top -= (D.scrollY || 0) - M.scrollTop());
                else {
                    l === "event" ? n && n.target && n.type !== "scroll" && n.type !== "resize" ? u.target = r(n.target) : n.target || (u.target = this.elements.target) : l !== "event" && (u.target = r(l.jquery ? l : this.elements.target)), l = u.target, l = r(l).eq(0);
                    if (l.length === 0) return this;
                    l[0] === t || l[0] === e ? (N = F.iOS ? e.innerWidth : l.width(), C = F.iOS ? e.innerHeight : l.height(), l[0] === e && (L = {
                        top: (y || l).scrollTop(),
                        left: (y || l).scrollLeft()
                    })) : x.imagemap && l.is("area") ? P = x.imagemap(this, l, g, x.viewport ? E : s) : x.svg && l && l[0].ownerSVGElement ? P = x.svg(this, l, g, x.viewport ? E : s) : (N = l.outerWidth(s), C = l.outerHeight(s), L = l.offset()), P && (N = P.width, C = P.height, H = P.offset, L = P.position), L = this.reposition.offset(l, L, b);
                    if (F.iOS > 3.1 && F.iOS < 4.1 || F.iOS >= 4.3 && F.iOS < 4.33 || !F.iOS && k === "fixed") L.left -= M.scrollLeft(), L.top -= M.scrollTop();
                    if (!P || P && P.adjustable !== s) L.left += g.x === d ? N : g.x === v ? N / 2 : 0, L.top += g.y === p ? C : g.y === v ? C / 2 : 0;
                }
                return L.left += w.x + (m.x === d ? -S : m.x === v ? -S / 2 : 0), L.top += w.y + (m.y === p ? -T : m.y === v ? -T / 2 : 0), x.viewport ? (B = L.adjusted = x.viewport(this, L, f, N, C, S, T), H && B.left && (L.left += H.left), H && B.top && (L.top += H.top), B.my && (this.position.my = B.my)) : L.adjusted = {
                    left: 0,
                    top: 0
                }, u.posClass !== (j = this._createPosClass(this.position.my)) && a.removeClass(u.posClass).addClass(u.posClass = j), this._trigger("move", [L, y.elem || y], n) ? (delete L.adjusted, o === s || !A || isNaN(L.left) || isNaN(L.top) || l === "mouse" || !r.isFunction(f.effect) ? a.css(L) : r.isFunction(f.effect) && (f.effect.call(a, this, r.extend({}, L)), a.queue(function(e) {
                    r(this).css({
                        opacity: "",
                        height: ""
                    }), F.ie && this.style.removeAttribute("filter"), e();
                })), this.positioning = s, this) : this;
            }, w.reposition.offset = function(e, n, i) {
                function h(e, t) {
                    n.left += t * e.scrollLeft(), n.top += t * e.scrollTop();
                }
                if (!i[0]) return n;
                var s = r(e[0].ownerDocument),
                    o = !!F.ie && t.compatMode !== "CSS1Compat",
                    u = i[0],
                    a, f, l, c;
                do(f = r.css(u, "position")) !== "static" && (f === "fixed" ? (l = u.getBoundingClientRect(), h(s, -1)) : (l = r(u).position(), l.left += parseFloat(r.css(u, "borderLeftWidth")) || 0, l.top += parseFloat(r.css(u, "borderTopWidth")) || 0), n.left -= l.left + (parseFloat(r.css(u, "marginLeft")) || 0), n.top -= l.top + (parseFloat(r.css(u, "marginTop")) || 0), !a && (c = r.css(u, "overflow")) !== "hidden" && c !== "visible" && (a = r(u))); while (u = u.offsetParent);
                return a && (a[0] !== s[0] || o) && h(a, 1), n;
            };
            var $ = (E = w.reposition.Corner = function(e, t) {
                e = ("" + e).replace(/([A-Z])/, " $1").replace(/middle/gi, v).toLowerCase(), this.x = (e.match(/left|right/i) || e.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (e.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!t;
                var n = e.charAt(0);
                this.precedance = n === "t" || n === "b" ? a : u;
            }).prototype;
            $.invert = function(e, t) {
                this[e] = this[e] === h ? d : this[e] === d ? h : t || this[e];
            }, $.string = function(e) {
                var t = this.x,
                    n = this.y,
                    r = t !== n ? t === "center" || n !== "center" && (this.precedance === a || this.forceY) ? [n, t] : [t, n] : [t];
                return e !== !1 ? r.join(" ") : r;
            }, $.abbrev = function() {
                var e = this.string(!1);
                return e[0].charAt(0) + (e[1] && e[1].charAt(0) || "");
            }, $.clone = function() {
                return new E(this.string(), this.forceY);
            }, w.toggle = function(e, n) {
                var u = this.cache,
                    a = this.options,
                    f = this.tooltip;
                if (n) {
                    if (/over|enter/.test(n.type) && u.event && /out|leave/.test(u.event.type) && a.show.target.add(n.target).length === a.show.target.length && f.has(n.relatedTarget).length) return this;
                    u.event = r.event.fix(n);
                }
                this.waiting && !e && (this.hiddenDuringWait = i);
                if (!this.rendered) return e ? this.render(1) : this;
                if (this.destroyed || this.disabled) return this;
                var l = e ? "show" : "hide",
                    c = this.options[l],
                    h = this.options[e ? "hide" : "show"],
                    p = this.options.position,
                    d = this.options.content,
                    v = this.tooltip.css("width"),
                    m = this.tooltip.is(":visible"),
                    g = e || c.target.length === 1,
                    y = !n || c.target.length < 2 || u.target[0] === n.target,
                    b, w, E, S, x;
                return (typeof e).search("boolean|number") && (e = !m), b = !f.is(":animated") && m === e && y, w = b ? o : !!this._trigger(l, [90]), this.destroyed ? this : (w !== s && e && this.focus(n), !w || b ? this : (r.attr(f[0], "aria-hidden", !e), e ? (this.mouse && (u.origin = r.event.fix(this.mouse)), r.isFunction(d.text) && this._updateContent(d.text, s), r.isFunction(d.title) && this._updateTitle(d.title, s), !j && p.target === "mouse" && p.adjust.mouse && (r(t).bind("mousemove." + T, this._storeMouse), j = i), v || f.css("width", f.outerWidth(s)), this.reposition(n, arguments[2]), v || f.css("width", ""), !c.solo || (typeof c.solo == "string" ? r(c.solo) : r(L, c.solo)).not(f).not(c.target).qtip("hide", r.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete u.origin, j && !r(L + '[tracking="true"]:visible', c.solo).not(f).length && (r(t).unbind("mousemove." + T), j = s), this.blur(n)), x = r.proxy(function() {
                    e ? (F.ie && f[0].style.removeAttribute("filter"), f.css("overflow", ""), "string" == typeof c.autofocus && r(this.options.show.autofocus, f).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : f.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: ""
                    }), this._trigger(e ? "visible" : "hidden");
                }, this), c.effect === s || g === s ? (f[l](), x()) : r.isFunction(c.effect) ? (f.stop(1, 1), c.effect.call(f, this), f.queue("fx", function(e) {
                    x(), e();
                })) : f.fadeTo(90, e ? 1 : 0, x), e && c.target.trigger("qtip-" + this.id + "-inactive"), this));
            }, w.show = function(e) {
                return this.toggle(i, e);
            }, w.hide = function(e) {
                return this.toggle(s, e);
            }, w.focus = function(e) {
                if (!this.rendered || this.destroyed) return this;
                var t = r(L),
                    n = this.tooltip,
                    i = parseInt(n[0].style.zIndex, 10),
                    s = b.zindex + t.length,
                    o;
                return n.hasClass(_) || this._trigger("focus", [s], e) && (i !== s && (t.each(function() {
                    this.style.zIndex > i && (this.style.zIndex = this.style.zIndex - 1);
                }), t.filter("." + _).qtip("blur", e)), n.addClass(_)[0].style.zIndex = s), this;
            }, w.blur = function(e) {
                return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(_), this._trigger("blur", [this.tooltip.css("zIndex")], e), this);
            }, w.disable = function(e) {
                return this.destroyed ? this : (e === "toggle" ? e = this.rendered ? !this.tooltip.hasClass(P) : !this.disabled : "boolean" != typeof e && (e = i), this.rendered && this.tooltip.toggleClass(P, e).attr("aria-disabled", e), this.disabled = !!e, this);
            }, w.enable = function() {
                return this.disable(s);
            }, w._createButton = function() {
                var e = this,
                    t = this.elements,
                    n = t.tooltip,
                    i = this.options.content.button,
                    o = typeof i == "string",
                    u = o ? i : "Close tooltip";
                t.button && t.button.remove(), i.jquery ? t.button = i : t.button = r("<a />", {
                    "class": "qtip-close " + (this.options.style.widget ? "" : T + "-icon"),
                    title: u,
                    "aria-label": u
                }).prepend(r("<span />", {
                    "class": "ui-icon ui-icon-close",
                    html: "&times;"
                })), t.button.appendTo(t.titlebar || n).attr("role", "button").click(function(t) {
                    return n.hasClass(P) || e.hide(t), s;
                });
            }, w._updateButton = function(e) {
                if (!this.rendered) return s;
                var t = this.elements.button;
                e ? this._createButton() : t.remove();
            }, w._setWidget = function() {
                var e = this.options.style.widget,
                    t = this.elements,
                    n = t.tooltip,
                    r = n.hasClass(P);
                n.removeClass(P), P = e ? "ui-state-disabled" : "qtip-disabled", n.toggleClass(P, r), n.toggleClass("ui-helper-reset " + J(), e).toggleClass(M, this.options.style.def && !e), t.content && t.content.toggleClass(J("content"), e), t.titlebar && t.titlebar.toggleClass(J("header"), e), t.button && t.button.toggleClass(T + "-icon", !e);
            }, w._storeMouse = function(e) {
                return (this.mouse = r.event.fix(e)).type = "mousemove", this;
            }, w._bind = function(e, t, n, i, s) {
                if (!e || !n || !t.length) return;
                var o = "." + this._id + (i ? "-" + i : "");
                return r(e).bind((t.split ? t : t.join(o + " ")) + o, r.proxy(n, s || this)), this;
            }, w._unbind = function(e, t) {
                return e && r(e).unbind("." + this._id + (t ? "-" + t : "")), this;
            }, w._trigger = function(e, t, n) {
                var i = r.Event("tooltip" + e);
                return i.originalEvent = n && r.extend({}, n) || this.cache.event || o, this.triggering = e, this.tooltip.trigger(i, [this].concat(t || [])), this.triggering = s, !i.isDefaultPrevented();
            }, w._bindEvents = function(e, t, n, i, s, o) {
                var u = n.filter(i).add(i.filter(n)),
                    a = [];
                u.length && (r.each(t, function(t, n) {
                    var i = r.inArray(n, e);
                    i > -1 && a.push(e.splice(i, 1)[0]);
                }), a.length && (this._bind(u, a, function(e) {
                    var t = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                    (t ? o : s).call(this, e);
                }), n = n.not(u), i = i.not(u))), this._bind(n, e, s), this._bind(i, t, o);
            }, w._assignInitialEvents = function(e) {
                function f(e) {
                    if (this.disabled || this.destroyed) return s;
                    this.cache.event = e && r.event.fix(e), this.cache.target = e && r(e.target), clearTimeout(this.timers.show), this.timers.show = K.call(this, function() {
                        this.render(typeof e == "object" || t.show.ready);
                    }, t.prerender ? 0 : t.show.delay);
                }
                var t = this.options,
                    n = t.show.target,
                    o = t.hide.target,
                    u = t.show.event ? r.trim("" + t.show.event).split(" ") : [],
                    a = t.hide.event ? r.trim("" + t.hide.event).split(" ") : [];
                this._bind(this.elements.target, ["remove", "removeqtip"], function(e) {
                    this.destroy(!0);
                }, "destroy"), /mouse(over|enter)/i.test(t.show.event) && !/mouse(out|leave)/i.test(t.hide.event) && a.push("mouseleave"), this._bind(n, "mousemove", function(e) {
                    this._storeMouse(e), this.cache.onTarget = i;
                }), this._bindEvents(u, a, n, o, f, function() {
                    if (!this.timers) return s;
                    clearTimeout(this.timers.show);
                }), (t.show.ready || t.prerender) && f.call(this, e);
            }, w._assignEvents = function() {
                var n = this,
                    i = this.options,
                    o = i.position,
                    u = this.tooltip,
                    a = i.show.target,
                    f = i.hide.target,
                    l = o.container,
                    c = o.viewport,
                    h = r(t),
                    p = r(t.body),
                    d = r(e),
                    v = i.show.event ? r.trim("" + i.show.event).split(" ") : [],
                    m = i.hide.event ? r.trim("" + i.hide.event).split(" ") : [];
                r.each(i.events, function(e, t) {
                    n._bind(u, e === "toggle" ? ["tooltipshow", "tooltiphide"] : ["tooltip" + e], t, null, u);
                }), /mouse(out|leave)/i.test(i.hide.event) && i.hide.leave === "window" && this._bind(h, ["mouseout", "blur"], function(e) {
                    !/select|option/.test(e.target.nodeName) && !e.relatedTarget && this.hide(e);
                }), i.hide.fixed ? f = f.add(u.addClass(O)) : /mouse(over|enter)/i.test(i.show.event) && this._bind(f, "mouseleave", function() {
                    clearTimeout(this.timers.show);
                }), ("" + i.hide.event).indexOf("unfocus") > -1 && this._bind(l.closest("html"), ["mousedown", "touchstart"], function(e) {
                    var t = r(e.target),
                        n = this.rendered && !this.tooltip.hasClass(P) && this.tooltip[0].offsetWidth > 0,
                        i = t.parents(L).filter(this.tooltip[0]).length > 0;
                    t[0] !== this.target[0] && t[0] !== this.tooltip[0] && !i && !this.target.has(t[0]).length && n && this.hide(e);
                }), "number" == typeof i.hide.inactive && (this._bind(a, "qtip-" + this.id + "-inactive", Y, "inactive"), this._bind(f.add(u), b.inactiveEvents, Y)), this._bindEvents(v, m, a, f, Q, G), this._bind(a.add(u), "mousemove", function(e) {
                    if ("number" == typeof i.hide.distance) {
                        var t = this.cache.origin || {},
                            n = this.options.hide.distance,
                            r = Math.abs;
                        (r(e.pageX - t.pageX) >= n || r(e.pageY - t.pageY) >= n) && this.hide(e);
                    }
                    this._storeMouse(e);
                }), o.target === "mouse" && o.adjust.mouse && (i.hide.event && this._bind(a, ["mouseenter", "mouseleave"], function(e) {
                    if (!this.cache) return s;
                    this.cache.onTarget = e.type === "mouseenter";
                }), this._bind(h, "mousemove", function(e) {
                    this.rendered && this.cache.onTarget && !this.tooltip.hasClass(P) && this.tooltip[0].offsetWidth > 0 && this.reposition(e);
                })), (o.adjust.resize || c.length) && this._bind(r.event.special.resize ? c : d, "resize", Z), o.adjust.scroll && this._bind(d.add(o.container), "scroll", Z);
            }, w._unassignEvents = function() {
                var n = this.options,
                    i = n.show.target,
                    s = n.hide.target,
                    o = r.grep([this.elements.target[0], this.rendered && this.tooltip[0], n.position.container[0], n.position.viewport[0], n.position.container.closest("html")[0], e, t], function(e) {
                        return typeof e == "object";
                    });
                i && i.toArray && (o = o.concat(i.toArray())), s && s.toArray && (o = o.concat(s.toArray())), this._unbind(o)._unbind(o, "destroy")._unbind(o, "inactive");
            }, r(function() {
                et(L, ["mouseenter", "mouseleave"], function(e) {
                    var t = e.type === "mouseenter",
                        n = r(e.currentTarget),
                        i = r(e.relatedTarget || e.target),
                        s = this.options;
                    t ? (this.focus(e), n.hasClass(O) && !n.hasClass(P) && clearTimeout(this.timers.hide)) : s.position.target === "mouse" && s.position.adjust.mouse && s.hide.event && s.show.target && !i.closest(s.show.target[0]).length && this.hide(e), n.toggleClass(D, t);
                }), et("[" + C + "]", A, Y);
            }), b = r.fn.qtip = function(e, t, u) {
                var a = ("" + e).toLowerCase(),
                    f = o,
                    l = r.makeArray(arguments).slice(1),
                    c = l[l.length - 1],
                    h = this[0] ? r.data(this[0], T) : o;
                if (!arguments.length && h || a === "api") return h;
                if ("string" == typeof e) return this.each(function() {
                    var e = r.data(this, T);
                    if (!e) return i;
                    c && c.timeStamp && (e.cache.event = c);
                    if (!t || a !== "option" && a !== "options") e[a] && e[a].apply(e, l);
                    else {
                        if (u === n && !r.isPlainObject(t)) return f = e.get(t), s;
                        e.set(t, u);
                    }
                }), f !== o ? f : this;
                if ("object" == typeof e || !arguments.length) return h = U(r.extend(i, {}, e)), this.each(function(e) {
                    var t, n;
                    n = r.isArray(h.id) ? h.id[e] : h.id, n = !n || n === s || n.length < 1 || b.api[n] ? b.nextid++ : n, t = tt(r(this), n, h);
                    if (t === s) return i;
                    b.api[n] = t, r.each(x, function() {
                        this.initialize === "initialize" && this(t);
                    }), t._assignInitialEvents(c);
                });
            }, r.qtip = I, b.api = {}, r.each({
                attr: function(e, t) {
                    if (this.length) {
                        var n = this[0],
                            i = "title",
                            s = r.data(n, "qtip");
                        if (e === i && s && "object" == typeof s && s.options.suppress) return arguments.length < 2 ? r.attr(n, B) : (s && s.options.content.attr === i && s.cache.attr && s.set("content.text", t), this.attr(B, t));
                    }
                    return r.fn["attr" + H].apply(this, arguments);
                },
                clone: function(e) {
                    var t = r([]),
                        n = "title",
                        i = r.fn["clone" + H].apply(this, arguments);
                    return e || i.filter("[" + B + "]").attr("title", function() {
                        return r.attr(this, B);
                    }).removeAttr(B), i;
                }
            }, function(e, t) {
                if (!t || r.fn[e + H]) return i;
                var n = r.fn[e + H] = r.fn[e];
                r.fn[e] = function() {
                    return t.apply(this, arguments) || n.apply(this, arguments);
                };
            }), r.ui || (r["cleanData" + H] = r.cleanData, r.cleanData = function(e) {
                for (var t = 0, n;
                    (n = r(e[t])).length; t++)
                    if (n.attr(N)) try {
                        n.triggerHandler("removeqtip");
                    } catch (i) {}
                r["cleanData" + H].apply(this, arguments);
            }), b.version = "2.2.1", b.nextid = 0, b.inactiveEvents = A, b.zindex = 15e3, b.defaults = {
                prerender: s,
                id: s,
                overwrite: i,
                suppress: i,
                content: {
                    text: i,
                    attr: "title",
                    title: s,
                    button: s
                },
                position: {
                    my: "top left",
                    at: "bottom right",
                    target: s,
                    container: s,
                    viewport: s,
                    adjust: {
                        x: 0,
                        y: 0,
                        mouse: i,
                        scroll: i,
                        resize: i,
                        method: "flipinvert flipinvert"
                    },
                    effect: function(e, t, n) {
                        r(this).animate(t, {
                            duration: 200,
                            queue: s
                        });
                    }
                },
                show: {
                    target: s,
                    event: "mouseenter",
                    effect: i,
                    delay: 90,
                    solo: s,
                    ready: s,
                    autofocus: s
                },
                hide: {
                    target: s,
                    event: "mouseleave",
                    effect: i,
                    delay: 0,
                    fixed: s,
                    inactive: s,
                    leave: "window",
                    distance: s
                },
                style: {
                    classes: "",
                    widget: s,
                    width: s,
                    height: s,
                    def: i
                },
                events: {
                    render: o,
                    move: o,
                    show: o,
                    hide: o,
                    toggle: o,
                    visible: o,
                    hidden: o,
                    focus: o,
                    blur: o
                }
            };
            var nt, rt = ".qtip-tip",
                it = "margin",
                st = "border",
                ot = "color",
                ut = "background-color",
                at = "transparent",
                ft = " !important",
                lt = !!t.createElement("canvas").getContext,
                ct = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
                pt = {},
                dt = ["Webkit", "O", "Moz", "ms"];
            if (!lt) var gt = function(e, t, n) {
                return "<qtipvml:" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (n || "") + '" />';
            };
            else var yt = e.devicePixelRatio || 1,
                bt = function() {
                    var e = t.createElement("canvas").getContext("2d");
                    return e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1;
                }(),
                wt = yt / bt;
            r.extend(Et.prototype, {
                init: function(e) {
                    var t, n;
                    n = this.element = e.elements.tip = r("<div />", {
                        "class": T + "-tip"
                    }).prependTo(e.tooltip), lt ? (t = r("<canvas />").appendTo(this.element)[0].getContext("2d"), t.lineJoin = "miter", t.miterLimit = 1e5, t.save()) : (t = gt("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(t + t), e._bind(r("*", n).add(n), ["click", "mousedown"], function(e) {
                        e.stopPropagation();
                    }, this._ns)), e._bind(e.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create();
                },
                _swapDimensions: function() {
                    this.size[0] = this.options.height, this.size[1] = this.options.width;
                },
                _resetDimensions: function() {
                    this.size[0] = this.options.width, this.size[1] = this.options.height;
                },
                _useTitle: function(e) {
                    var t = this.qtip.elements.titlebar;
                    return t && (e.y === c || e.y === v && this.element.position().top + this.size[1] / 2 + this.options.offset < t.outerHeight(i));
                },
                _parseCorner: function(e) {
                    var t = this.qtip.options.position.my;
                    return e === s || t === s ? e = s : e === i ? e = new E(t.string()) : e.string || (e = new E(e), e.fixed = i), e;
                },
                _parseWidth: function(e, t, n) {
                    var r = this.qtip.elements,
                        i = st + ht(t) + "Width";
                    return (n ? mt(n, i) : mt(r.content, i) || mt(this._useTitle(e) && r.titlebar || r.content, i) || mt(r.tooltip, i)) || 0;
                },
                _parseRadius: function(e) {
                    var t = this.qtip.elements,
                        n = st + ht(e.y) + ht(e.x) + "Radius";
                    return F.ie < 9 ? 0 : mt(this._useTitle(e) && t.titlebar || t.content, n) || mt(t.tooltip, n) || 0;
                },
                _invalidColour: function(e, t, n) {
                    var r = e.css(t);
                    return !r || n && r === e.css(n) || ct.test(r) ? s : r;
                },
                _parseColours: function(e) {
                    var t = this.qtip.elements,
                        n = this.element.css("cssText", ""),
                        i = st + ht(e[e.precedance]) + ht(ot),
                        s = this._useTitle(e) && t.titlebar || t.content,
                        o = this._invalidColour,
                        u = [];
                    return u[0] = o(n, ut) || o(s, ut) || o(t.content, ut) || o(t.tooltip, ut) || n.css(ut), u[1] = o(n, i, ot) || o(s, i, ot) || o(t.content, i, ot) || o(t.tooltip, i, ot) || t.tooltip.css(i), r("*", n).add(n).css("cssText", ut + ":" + at + ft + ";" + st + ":0" + ft + ";"), u;
                },
                _calculateSize: function(e) {
                    var t = e.precedance === a,
                        n = this.options.width,
                        r = this.options.height,
                        i = e.abbrev() === "c",
                        s = (t ? n : r) * (i ? .5 : 1),
                        o = Math.pow,
                        u = Math.round,
                        f, l, c, h = Math.sqrt(o(s, 2) + o(r, 2)),
                        p = [this.border / s * h, this.border / r * h];
                    return p[2] = Math.sqrt(o(p[0], 2) - o(this.border, 2)), p[3] = Math.sqrt(o(p[1], 2) - o(this.border, 2)), f = h + p[2] + p[3] + (i ? 0 : p[0]), l = f / h, c = [u(l * n), u(l * r)], t ? c : c.reverse();
                },
                _calculateTip: function(e, t, n) {
                    n = n || 1, t = t || this.size;
                    var r = t[0] * n,
                        i = t[1] * n,
                        s = Math.ceil(r / 2),
                        o = Math.ceil(i / 2),
                        u = {
                            br: [0, 0, r, i, r, 0],
                            bl: [0, 0, r, 0, 0, i],
                            tr: [0, i, r, 0, r, i],
                            tl: [0, 0, 0, i, r, i],
                            tc: [0, i, s, 0, r, i],
                            bc: [0, 0, r, 0, s, i],
                            rc: [0, 0, r, o, 0, i],
                            lc: [r, 0, r, i, 0, o]
                        };
                    return u.lt = u.br, u.rt = u.bl, u.lb = u.tr, u.rb = u.tl, u[e.abbrev()];
                },
                _drawCoords: function(e, t) {
                    e.beginPath(), e.moveTo(t[0], t[1]), e.lineTo(t[2], t[3]), e.lineTo(t[4], t[5]), e.closePath();
                },
                create: function() {
                    var e = this.corner = (lt || F.ie) && this._parseCorner(this.options.corner);
                    if (this.enabled = !!this.corner && this.corner.abbrev() !== "c") this.qtip.cache.corner = e.clone(), this.update();
                    return this.element.toggle(this.enabled), this.corner;
                },
                update: function(t, n) {
                    if (!this.enabled) return this;
                    var o = this.qtip.elements,
                        m = this.element,
                        g = m.children(),
                        y = this.options,
                        b = this.size,
                        w = y.mimic,
                        S = Math.round,
                        x, T, N, C, k, L, A, O, M;
                    t || (t = this.qtip.cache.corner || this.corner), w === s ? w = t : (w = new E(w), w.precedance = t.precedance, w.x === "inherit" ? w.x = t.x : w.y === "inherit" ? w.y = t.y : w.x === w.y && (w[t.precedance] = t[t.precedance])), T = w.precedance, t.precedance === u ? this._swapDimensions() : this._resetDimensions(), x = this.color = this._parseColours(t), x[1] !== at ? (O = this.border = this._parseWidth(t, t[t.precedance]), y.border && O < 1 && !ct.test(x[1]) && (x[0] = x[1]), this.border = O = y.border !== i ? y.border : O) : this.border = O = 0, A = this.size = this._calculateSize(t), m.css({
                        width: A[0],
                        height: A[1],
                        lineHeight: A[1] + "px"
                    }), t.precedance === a ? L = [S(w.x === h ? O : w.x === d ? A[0] - b[0] - O : (A[0] - b[0]) / 2), S(w.y === c ? A[1] - b[1] : 0)] : L = [S(w.x === h ? A[0] - b[0] : 0), S(w.y === c ? O : w.y === p ? A[1] - b[1] - O : (A[1] - b[1]) / 2)], lt ? (N = g[0].getContext("2d"), N.restore(), N.save(), N.clearRect(0, 0, 6e3, 6e3), C = this._calculateTip(w, b, wt), k = this._calculateTip(w, this.size, wt), g.attr(f, A[0] * wt).attr(l, A[1] * wt), g.css(f, A[0]).css(l, A[1]), this._drawCoords(N, k), N.fillStyle = x[1], N.fill(), N.translate(L[0] * wt, L[1] * wt), this._drawCoords(N, C), N.fillStyle = x[0], N.fill()) : (C = this._calculateTip(w), C = "m" + C[0] + "," + C[1] + " l" + C[2] + "," + C[3] + " " + C[4] + "," + C[5] + " xe", L[2] = O && /^(r|b)/i.test(t.string()) ? F.ie === 8 ? 2 : 1 : 0, g.css({
                        coordsize: A[0] + O + " " + (A[1] + O),
                        antialias: "" + (w.string().indexOf(v) > -1),
                        left: L[0] - L[2] * Number(T === u),
                        top: L[1] - L[2] * Number(T === a),
                        width: A[0] + O,
                        height: A[1] + O
                    }).each(function(e) {
                        var t = r(this);
                        t[t.prop ? "prop" : "attr"]({
                            coordsize: A[0] + O + " " + (A[1] + O),
                            path: C,
                            fillcolor: x[0],
                            filled: !!e,
                            stroked: !e
                        }).toggle(!!O || !!e), !e && t.html(gt("stroke", 'weight="' + O * 2 + 'px" color="' + x[1] + '" miterlimit="1000" joinstyle="miter"'));
                    })), e.opera && setTimeout(function() {
                        o.tip.css({
                            display: "inline-block",
                            visibility: "visible"
                        });
                    }, 1), n !== s && this.calculate(t, A);
                },
                calculate: function(e, t) {
                    if (!this.enabled) return s;
                    var n = this,
                        i = this.qtip.elements,
                        o = this.element,
                        f = this.options.offset,
                        l = i.tooltip.hasClass("ui-widget"),
                        p = {},
                        d, m;
                    return e = e || this.corner, d = e.precedance, t = t || this._calculateSize(e), m = [e.x, e.y], d === u && m.reverse(), r.each(m, function(r, s) {
                        var o, u, l;
                        s === v ? (o = d === a ? h : c, p[o] = "50%", p[it + "-" + o] = -Math.round(t[d === a ? 0 : 1] / 2) + f) : (o = n._parseWidth(e, s, i.tooltip), u = n._parseWidth(e, s, i.content), l = n._parseRadius(e), p[s] = Math.max(-n.border, r ? u : f + (l > o ? l : -o)));
                    }), p[e[d]] -= t[d === u ? 0 : 1], o.css({
                        margin: "",
                        top: "",
                        bottom: "",
                        left: "",
                        right: ""
                    }).css(p), p;
                },
                reposition: function(e, t, r, o) {
                    function N(e, t, n, r, i) {
                        e === y && l.precedance === t && m[r] && l[n] !== v ? l.precedance = l.precedance === u ? a : u : e !== y && m[r] && (l[t] = l[t] === v ? m[r] > 0 ? r : i : l[t] === r ? i : r);
                    }

                    function C(e, t, i) {
                        l[e] === v ? x[it + "-" + t] = E[e] = S[it + "-" + t] - m[t] : (T = S[i] !== n ? [m[t], -S[t]] : [-m[t], S[t]], (E[e] = Math.max(T[0], T[1])) > T[0] && (r[t] -= m[t], E[t] = s), x[S[i] !== n ? i : t] = E[e]);
                    }
                    if (!this.enabled) return;
                    var f = t.cache,
                        l = this.corner.clone(),
                        m = r.adjusted,
                        g = t.options.position.adjust.method.split(" "),
                        b = g[0],
                        w = g[1] || g[0],
                        E = {
                            left: s,
                            top: s,
                            x: 0,
                            y: 0
                        },
                        S, x = {},
                        T;
                    this.corner.fixed !== i && (N(b, u, a, h, d), N(w, a, u, c, p), (l.string() !== f.corner.string() || f.cornerTop !== m.top || f.cornerLeft !== m.left) && this.update(l, s)), S = this.calculate(l), S.right !== n && (S.left = -S.right), S.bottom !== n && (S.top = -S.bottom), S.user = this.offset, (E.left = b === y && !!m.left) && C(u, h, d), (E.top = w === y && !!m.top) && C(a, c, p), this.element.css(x).toggle(!(E.x && E.y || l.x === v && E.y || l.y === v && E.x)), r.left -= S.left.charAt ? S.user : b !== y || E.top || !E.left && !E.top ? S.left + this.border : 0, r.top -= S.top.charAt ? S.user : w !== y || E.left || !E.left && !E.top ? S.top + this.border : 0, f.cornerLeft = m.left, f.cornerTop = m.top, f.corner = l.clone();
                },
                destroy: function() {
                    this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove();
                }
            }), nt = x.tip = function(e) {
                return new Et(e, e.options.style.tip);
            }, nt.initialize = "render", nt.sanitize = function(e) {
                if (e.style && "tip" in e.style) {
                    var t = e.style.tip;
                    typeof t != "object" && (t = e.style.tip = {
                        corner: t
                    }), /string|boolean/i.test(typeof t.corner) || (t.corner = i);
                }
            }, S.tip = {
                "^position.my|style.tip.(corner|mimic|border)$": function() {
                    this.create(), this.qtip.reposition();
                },
                "^style.tip.(height|width)$": function(e) {
                    this.size = [e.width, e.height], this.update(), this.qtip.reposition();
                },
                "^content.title|style.(classes|widget)$": function() {
                    this.update();
                }
            }, r.extend(i, b.defaults, {
                style: {
                    tip: {
                        corner: i,
                        mimic: s,
                        width: 6,
                        height: 6,
                        border: i,
                        offset: 0
                    }
                }
            });
            var St, xt, Tt = "qtip-modal",
                Nt = "." + Tt;
            xt = function() {
                function c(e) {
                    if (r.expr[":"].focusable) return r.expr[":"].focusable;
                    var t = !isNaN(r.attr(e, "tabindex")),
                        n = e.nodeName && e.nodeName.toLowerCase(),
                        i, s, o;
                    return "area" === n ? (i = e.parentNode, s = i.name, !e.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = r("img[usemap=#" + s + "]")[0], !!o && o.is(":visible"))) : /input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t;
                }

                function h(e) {
                    n.length < 1 && e.length ? e.not("body").blur() : n.first().focus();
                }

                function p(e) {
                    if (!l.is(":visible")) return;
                    var t = r(e.target),
                        i = u.tooltip,
                        o = t.closest(L),
                        f;
                    f = o.length < 1 ? s : parseInt(o[0].style.zIndex, 10) > parseInt(i[0].style.zIndex, 10), !f && t.closest(L)[0] !== i[0] && h(t), a = e.target === n[n.length - 1];
                }
                var e = this,
                    n = {},
                    u, a, f, l;
                r.extend(e, {
                    init: function() {
                        return l = e.elem = r("<div />", {
                            id: "qtip-overlay",
                            html: "<div></div>",
                            mousedown: function() {
                                return s;
                            }
                        }).hide(), r(t.body).bind("focusin" + Nt, p), r(t).bind("keydown" + Nt, function(e) {
                            u && u.options.show.modal.escape && e.keyCode === 27 && u.hide(e);
                        }), l.bind("click" + Nt, function(e) {
                            u && u.options.show.modal.blur && u.hide(e);
                        }), e;
                    },
                    update: function(e) {
                        u = e, e.options.show.modal.stealfocus !== s ? n = e.tooltip.find("*").filter(function() {
                            return c(this);
                        }) : n = [];
                    },
                    toggle: function(n, a, c) {
                        var p = r(t.body),
                            d = n.tooltip,
                            v = n.options.show.modal,
                            m = v.effect,
                            g = a ? "show" : "hide",
                            y = l.is(":visible"),
                            b = r(Nt).filter(":visible:not(:animated)").not(d),
                            w;
                        return e.update(n), a && v.stealfocus !== s && h(r(":focus")), l.toggleClass("blurs", v.blur), a && l.appendTo(t.body), l.is(":animated") && y === a && f !== s || !a && b.length ? e : (l.stop(i, s), r.isFunction(m) ? m.call(l, a) : m === s ? l[g]() : l.fadeTo(parseInt(c, 10) || 90, a ? 1 : 0, function() {
                            a || l.hide();
                        }), a || l.queue(function(e) {
                            l.css({
                                left: "",
                                top: ""
                            }), r(Nt).length || l.detach(), e();
                        }), f = a, u.destroyed && (u = o), e);
                    }
                }), e.init();
            }, xt = new xt, r.extend(Ct.prototype, {
                init: function(e) {
                    var t = e.tooltip;
                    if (!this.options.on) return this;
                    e.elements.overlay = xt.elem, t.addClass(Tt).css("z-index", b.modal_zindex + r(Nt).length), e._bind(t, ["tooltipshow", "tooltiphide"], function(e, n, i) {
                        var s = e.originalEvent;
                        if (e.target === t[0])
                            if (s && e.type === "tooltiphide" && /mouse(leave|enter)/.test(s.type) && r(s.relatedTarget).closest(xt.elem[0]).length) try {
                                e.preventDefault();
                            } catch (o) {} else(!s || s && s.type !== "tooltipsolo") && this.toggle(e, e.type === "tooltipshow", i);
                    }, this._ns, this), e._bind(t, "tooltipfocus", function(e, n) {
                        if (e.isDefaultPrevented() || e.target !== t[0]) return;
                        var i = r(Nt),
                            s = b.modal_zindex + i.length,
                            o = parseInt(t[0].style.zIndex, 10);
                        xt.elem[0].style.zIndex = s - 1, i.each(function() {
                            this.style.zIndex > o && (this.style.zIndex -= 1);
                        }), i.filter("." + _).qtip("blur", e.originalEvent), t.addClass(_)[0].style.zIndex = s, xt.update(n);
                        try {
                            e.preventDefault();
                        } catch (u) {}
                    }, this._ns, this), e._bind(t, "tooltiphide", function(e) {
                        e.target === t[0] && r(Nt).filter(":visible").not(t).last().qtip("focus", e);
                    }, this._ns, this);
                },
                toggle: function(e, t, n) {
                    if (e && e.isDefaultPrevented()) return this;
                    xt.toggle(this.qtip, !!t, n);
                },
                destroy: function() {
                    this.qtip.tooltip.removeClass(Tt), this.qtip._unbind(this.qtip.tooltip, this._ns), xt.toggle(this.qtip, s), delete this.qtip.elements.overlay;
                }
            }), St = x.modal = function(e) {
                return new Ct(e, e.options.show.modal);
            }, St.sanitize = function(e) {
                e.show && (typeof e.show.modal != "object" ? e.show.modal = {
                    on: !!e.show.modal
                } : typeof e.show.modal.on == "undefined" && (e.show.modal.on = i));
            }, b.modal_zindex = b.zindex - 200, St.initialize = "render", S.modal = {
                "^show.modal.(on|blur)$": function() {
                    this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0);
                }
            }, r.extend(i, b.defaults, {
                show: {
                    modal: {
                        on: s,
                        effect: i,
                        blur: i,
                        stealfocus: i,
                        escape: i
                    }
                }
            }), x.viewport = function(n, r, i, o, m, b, w) {
                function R(e, t, n, i, s, o, u, a, l) {
                    var c = r[s],
                        h = x[e],
                        p = T[e],
                        d = n === y,
                        m = h === s ? l : h === o ? -l : -l / 2,
                        b = p === s ? a : p === o ? -a : -a / 2,
                        w = I[s] + q[s] - (B ? 0 : H[s]),
                        E = w - c,
                        S = c + l - (u === f ? j : F) - w,
                        N = m - (x.precedance === e || h === x[t] ? b : 0) - (p === v ? a / 2 : 0);
                    return d ? (N = (h === s ? 1 : -1) * m, r[s] += E > 0 ? E : S > 0 ? -S : 0, r[s] = Math.max(-H[s] + q[s], c - N, Math.min(Math.max(-H[s] + q[s] + (u === f ? j : F), c + N), r[s], h === "center" ? c - m : 1e9))) : (i *= n === g ? 2 : 0, E > 0 && (h !== s || S > 0) ? (r[s] -= N + i, P.invert(e, s)) : S > 0 && (h !== o || E > 0) && (r[s] -= (h === v ? -N : N) + i, P.invert(e, o)), r[s] < I && -r[s] > S && (r[s] = c, P = x.clone())), r[s] - c;
                }
                var E = i.target,
                    S = n.elements.tooltip,
                    x = i.my,
                    T = i.at,
                    N = i.adjust,
                    C = N.method.split(" "),
                    k = C[0],
                    L = C[1] || C[0],
                    A = i.viewport,
                    O = i.container,
                    M = n.cache,
                    _ = {
                        left: 0,
                        top: 0
                    },
                    D, P, H, B, j, F, I, q;
                if (!A.jquery || E[0] === e || E[0] === t.body || N.method === "none") return _;
                H = O.offset() || _, B = O.css("position") === "static", D = S.css("position") === "fixed", j = A[0] === e ? A.width() : A.outerWidth(s), F = A[0] === e ? A.height() : A.outerHeight(s), I = {
                    left: D ? 0 : A.scrollLeft(),
                    top: D ? 0 : A.scrollTop()
                }, q = A.offset() || _;
                if (k !== "shift" || L !== "shift") P = x.clone();
                return _ = {
                    left: k !== "none" ? R(u, a, k, N.x, h, d, f, o, b) : 0,
                    top: L !== "none" ? R(a, u, L, N.y, c, p, l, m, w) : 0,
                    my: P
                }, _;
            }, x.polys = {
                polygon: function(e, t) {
                    var n = {
                            width: 0,
                            height: 0,
                            position: {
                                top: 1e10,
                                right: 0,
                                bottom: 0,
                                left: 1e10
                            },
                            adjustable: s
                        },
                        r = 0,
                        i, o = [],
                        u = 1,
                        a = 1,
                        f = 0,
                        l = 0,
                        m, g;
                    r = e.length;
                    while (r--) i = [parseInt(e[--r], 10), parseInt(e[r + 1], 10)], i[0] > n.position.right && (n.position.right = i[0]), i[0] < n.position.left && (n.position.left = i[0]), i[1] > n.position.bottom && (n.position.bottom = i[1]), i[1] < n.position.top && (n.position.top = i[1]), o.push(i);
                    m = n.width = Math.abs(n.position.right - n.position.left), g = n.height = Math.abs(n.position.bottom - n.position.top);
                    if (t.abbrev() === "c") n.position = {
                        left: n.position.left + n.width / 2,
                        top: n.position.top + n.height / 2
                    };
                    else {
                        while (m > 0 && g > 0 && u > 0 && a > 0) {
                            m = Math.floor(m / 2), g = Math.floor(g / 2), t.x === h ? u = m : t.x === d ? u = n.width - m : u += Math.floor(m / 2), t.y === c ? a = g : t.y === p ? a = n.height - g : a += Math.floor(g / 2), r = o.length;
                            while (r--) {
                                if (o.length < 2) break;
                                f = o[r][0] - n.position.left, l = o[r][1] - n.position.top, (t.x === h && f >= u || t.x === d && f <= u || t.x === v && (f < u || f > n.width - u) || t.y === c && l >= a || t.y === p && l <= a || t.y === v && (l < a || l > n.height - a)) && o.splice(r, 1);
                            }
                        }
                        n.position = {
                            left: o[0][0],
                            top: o[0][1]
                        };
                    }
                    return n;
                },
                rect: function(e, t, n, r) {
                    return {
                        width: Math.abs(n - e),
                        height: Math.abs(r - t),
                        position: {
                            left: Math.min(e, n),
                            top: Math.min(t, r)
                        }
                    };
                },
                _angles: {
                    tc: 1.5,
                    tr: 7 / 4,
                    tl: 5 / 4,
                    bc: .5,
                    br: .25,
                    bl: .75,
                    rc: 2,
                    lc: 1,
                    c: 0
                },
                ellipse: function(e, t, n, r, i) {
                    var o = x.polys._angles[i.abbrev()],
                        u = o === 0 ? 0 : n * Math.cos(o * Math.PI),
                        a = r * Math.sin(o * Math.PI);
                    return {
                        width: n * 2 - Math.abs(u),
                        height: r * 2 - Math.abs(a),
                        position: {
                            left: e + u,
                            top: t + a
                        },
                        adjustable: s
                    };
                },
                circle: function(e, t, n, r) {
                    return x.polys.ellipse(e, t, n, n, r);
                }
            }, x.svg = function(e, n, i) {
                var o = r(t),
                    u = n[0],
                    a = r(u.ownerSVGElement),
                    f = u.ownerDocument,
                    l = (parseInt(n.css("stroke-width"), 10) || 0) / 2,
                    c, h, p, d, v, m, g, y, b, w, E;
                while (!u.getBBox) u = u.parentNode;
                if (!u.getBBox || !u.parentNode) return s;
                switch (u.nodeName) {
                    case "ellipse":
                    case "circle":
                        b = x.polys.ellipse(u.cx.baseVal.value, u.cy.baseVal.value, (u.rx || u.r).baseVal.value + l, (u.ry || u.r).baseVal.value + l, i);
                        break;
                    case "line":
                    case "polygon":
                    case "polyline":
                        y = u.points || [{
                            x: u.x1.baseVal.value,
                            y: u.y1.baseVal.value
                        }, {
                            x: u.x2.baseVal.value,
                            y: u.y2.baseVal.value
                        }];
                        for (b = [], g = -1, v = y.numberOfItems || y.length; ++g < v;) m = y.getItem ? y.getItem(g) : y[g], b.push.apply(b, [m.x, m.y]);
                        b = x.polys.polygon(b, i);
                        break;
                    default:
                        b = u.getBBox(), b = {
                            width: b.width,
                            height: b.height,
                            position: {
                                left: b.x,
                                top: b.y
                            }
                        };
                }
                return w = b.position, a = a[0], a.createSVGPoint && (h = u.getScreenCTM(), y = a.createSVGPoint(), y.x = w.left, y.y = w.top, p = y.matrixTransform(h), w.left = p.x, w.top = p.y), f !== t && e.position.target !== "mouse" && (c = r((f.defaultView || f.parentWindow).frameElement).offset(), c && (w.left += c.left, w.top += c.top)), f = r(f), w.left += f.scrollLeft(), w.top += f.scrollTop(), b;
            }, x.imagemap = function(e, t, n, i) {
                t.jquery || (t = r(t));
                var o = (t.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"),
                    u = r('img[usemap="#' + t.parent("map").attr("name") + '"]'),
                    a = r.trim(t.attr("coords")),
                    f = a.replace(/,$/, "").split(","),
                    l, c, h, p, d, v;
                if (!u.length) return s;
                if (o === "polygon") d = x.polys.polygon(f, n);
                else {
                    if (!x.polys[o]) return s;
                    for (h = -1, v = f.length, c = []; ++h < v;) c.push(parseInt(f[h], 10));
                    d = x.polys[o].apply(this, c.concat(n));
                }
                return l = u.offset(), l.left += Math.ceil((u.outerWidth(s) - u.width()) / 2), l.top += Math.ceil((u.outerHeight(s) - u.height()) / 2), d.position.left += l.left, d.position.top += l.top, d;
            };
            var kt, Lt = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
            r.extend(At.prototype, {
                _scroll: function() {
                    var t = this.qtip.elements.overlay;
                    t && (t[0].style.top = r(e).scrollTop() + "px");
                },
                init: function(n) {
                    var i = n.tooltip,
                        s;
                    r("select, object").length < 1 && (this.bgiframe = n.elements.bgiframe = r(Lt).appendTo(i), n._bind(i, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = r("<div/>", {
                        id: T + "-rcontainer"
                    }).appendTo(t.body), n.elements.overlay && n.elements.overlay.addClass("qtipmodal-ie6fix") && (n._bind(e, ["scroll", "resize"], this._scroll, this._ns, this), n._bind(i, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw();
                },
                adjustBGIFrame: function() {
                    var e = this.qtip.tooltip,
                        t = {
                            height: e.outerHeight(s),
                            width: e.outerWidth(s)
                        },
                        n = this.qtip.plugins.tip,
                        r = this.qtip.elements.tip,
                        i, o;
                    o = parseInt(e.css("borderLeftWidth"), 10) || 0, o = {
                        left: -o,
                        top: -o
                    }, n && r && (i = n.corner.precedance === "x" ? [f, h] : [l, c], o[i[1]] -= r[i[0]]()), this.bgiframe.css(o).css(t);
                },
                redraw: function() {
                    if (this.qtip.rendered < 1 || this.drawing) return this;
                    var e = this.qtip.tooltip,
                        t = this.qtip.options.style,
                        n = this.qtip.options.position.container,
                        r, i, s, o;
                    return this.qtip.drawing = 1, t.height && e.css(l, t.height), t.width ? e.css(f, t.width) : (e.css(f, "").appendTo(this.redrawContainer), i = e.width(), i % 2 < 1 && (i += 1), s = e.css("maxWidth") || "", o = e.css("minWidth") || "", r = (s + o).indexOf("%") > -1 ? n.width() / 100 : 0, s = (s.indexOf("%") > -1 ? r : 1) * parseInt(s, 10) || i, o = (o.indexOf("%") > -1 ? r : 1) * parseInt(o, 10) || 0, i = s + o ? Math.min(Math.max(i, o), s) : i, e.css(f, Math.round(i)).appendTo(n)), this.drawing = 0, this;
                },
                destroy: function() {
                    this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([e, this.qtip.tooltip], this._ns);
                }
            }), kt = x.ie6 = function(e) {
                return F.ie === 6 ? new At(e) : s;
            }, kt.initialize = "render", S.ie6 = {
                "^content|style$": function() {
                    this.redraw();
                }
            };
        });
    }(window, document), this.Handlebars = {},
    function(e) {
        e.VERSION = "1.0.0-rc.3", e.COMPILER_REVISION = 2, e.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: ">= 1.0.0-rc.3"
        }, e.helpers = {}, e.partials = {}, e.registerHelper = function(e, t, n) {
            n && (t.not = n), this.helpers[e] = t;
        }, e.registerPartial = function(e, t) {
            this.partials[e] = t;
        }, e.registerHelper("helperMissing", function(e) {
            if (arguments.length === 2) return undefined;
            throw new Error("Could not find property '" + e + "'");
        });
        var t = Object.prototype.toString,
            n = "[object Function]";
        e.registerHelper("blockHelperMissing", function(r, i) {
            var s = i.inverse || function() {},
                o = i.fn,
                u = "",
                a = t.call(r);
            return a === n && (r = r.call(this)), r === !0 ? o(this) : r === !1 || r == null ? s(this) : a === "[object Array]" ? r.length > 0 ? e.helpers.each(r, i) : s(this) : o(r);
        }), e.K = function() {}, e.createFrame = Object.create || function(t) {
            e.K.prototype = t;
            var n = new e.K;
            return e.K.prototype = null, n;
        }, e.logger = {
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            log: function(t, n) {
                if (e.logger.level <= t) {
                    var r = e.logger.methodMap[t];
                    typeof console != "undefined" && console[r] && console[r].call(console, n);
                }
            }
        }, e.log = function(t, n) {
            e.logger.log(t, n);
        }, e.registerHelper("each", function(t, n) {
            var r = n.fn,
                i = n.inverse,
                s = 0,
                o = "",
                u;
            n.data && (u = e.createFrame(n.data));
            if (t && typeof t == "object")
                if (t instanceof Array)
                    for (var a = t.length; s < a; s++) u && (u.index = s), o += r(t[s], {
                        data: u
                    });
                else
                    for (var f in t) t.hasOwnProperty(f) && (u && (u.key = f), o += r(t[f], {
                        data: u
                    }), s++);
            return s === 0 && (o = i(this)), o;
        }), e.registerHelper("if", function(r, i) {
            var s = t.call(r);
            return s === n && (r = r.call(this)), !r || e.Utils.isEmpty(r) ? i.inverse(this) : i.fn(this);
        }), e.registerHelper("unless", function(t, n) {
            var r = n.fn,
                i = n.inverse;
            return n.fn = i, n.inverse = r, e.helpers["if"].call(this, t, n);
        }), e.registerHelper("with", function(e, t) {
            return t.fn(e);
        }), e.registerHelper("log", function(t, n) {
            var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
            e.log(r, t);
        });
    }(this.Handlebars);

var errorProps = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

Handlebars.Exception = function(e) {
        var t = Error.prototype.constructor.apply(this, arguments);
        for (var n = 0; n < errorProps.length; n++) this[errorProps[n]] = t[errorProps[n]];
    }, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
        this.string = e;
    }, Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString();
    },
    function() {
        var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            t = /[&<>"'`]/g,
            n = /[&<>"'`]/,
            r = function(t) {
                return e[t] || "&amp;";
            };
        Handlebars.Utils = {
            escapeExpression: function(e) {
                return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e;
            },
            isEmpty: function(e) {
                return !e && e !== 0 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1;
            }
        };
    }(), Handlebars.VM = {
        template: function(e) {
            var t = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(e, t, n) {
                    var r = this.programs[e];
                    return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r);
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop,
                compilerInfo: null
            };
            return function(n, r) {
                r = r || {};
                var i = e.call(t, Handlebars, n, r.helpers, r.partials, r.data),
                    s = t.compilerInfo || [],
                    o = s[0] || 1,
                    u = Handlebars.COMPILER_REVISION;
                if (o !== u) {
                    if (o < u) {
                        var a = Handlebars.REVISION_CHANGES[u],
                            f = Handlebars.REVISION_CHANGES[o];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + a + ") or downgrade your runtime to an older version (" + f + ").";
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + s[1] + ").";
                }
                return i;
            };
        },
        programWithDepth: function(e, t, n) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function(n, i) {
                return i = i || {}, e.apply(this, [n, i.data || t].concat(r));
            };
        },
        program: function(e, t) {
            return function(n, r) {
                return r = r || {}, e(n, r.data || t);
            };
        },
        noop: function() {
            return "";
        },
        invokePartial: function(e, t, n, r, i, s) {
            var o = {
                helpers: r,
                partials: i,
                data: s
            };
            if (e === undefined) throw new Handlebars.Exception("The partial " + t + " could not be found");
            if (e instanceof Function) return e(n, o);
            if (!Handlebars.compile) throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
            return i[t] = Handlebars.compile(e, {
                data: s !== undefined
            }), i[t](n, o);
        }
    }, Handlebars.template = Handlebars.VM.template,
    function(e, t) {
        function _(e, t, n) {
            this._d = e, this._isUTC = !!t, this._a = e._a || null, e._a = null, this._lang = n || !1;
        }

        function D(e) {
            var t = this._data = {},
                n = e.years || e.y || 0,
                r = e.months || e.M || 0,
                i = e.weeks || e.w || 0,
                s = e.days || e.d || 0,
                o = e.hours || e.h || 0,
                u = e.minutes || e.m || 0,
                a = e.seconds || e.s || 0,
                f = e.milliseconds || e.ms || 0;
            this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += P(f / 1e3), t.seconds = a % 60, u += P(a / 60), t.minutes = u % 60, o += P(u / 60), t.hours = o % 24, s += P(o / 24), s += i * 7, t.days = s % 30, r += P(s / 30), t.months = r % 12, n += P(r / 12), t.years = n, this._lang = !1;
        }

        function P(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        }

        function H(e, t) {
            var n = e + "";
            while (n.length < t) n = "0" + n;
            return n;
        }

        function B(e, t, n) {
            var r = t._milliseconds,
                i = t._days,
                s = t._months,
                o;
            r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())));
        }

        function j(e) {
            return Object.prototype.toString.call(e) === "[object Array]";
        }

        function F(e, t) {
            var n = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                i = 0,
                s;
            for (s = 0; s < n; s++) ~~e[s] !== ~~t[s] && i++;
            return i + r;
        }

        function I(t, n) {
            var r, i;
            for (r = 1; r < 7; r++) t[r] = t[r] == null ? r === 2 ? 1 : 0 : t[r];
            return t[7] = n, i = new e(0), n ? (i.setUTCFullYear(t[0], t[1], t[2]), i.setUTCHours(t[3], t[4], t[5], t[6])) : (i.setFullYear(t[0], t[1], t[2]), i.setHours(t[3], t[4], t[5], t[6])), i._a = t, i;
        }

        function q(e, t) {
            var r, i, s = [];
            !t && a && (t = require("./lang/" + e));
            for (r = 0; r < f.length; r++) t[f[r]] = t[f[r]] || o.en[f[r]];
            for (r = 0; r < 12; r++) i = n([2e3, r]), s[r] = new RegExp("^" + (t.months[r] || t.months(i, "")) + "|^" + (t.monthsShort[r] || t.monthsShort(i, "")).replace(".", ""), "i");
            return t.monthsParse = t.monthsParse || s, o[e] = t, t;
        }

        function R(e) {
            var t = typeof e == "string" && e || e && e._lang || null;
            return t ? o[t] || q(t) : n;
        }

        function U(e) {
            return A[e] ? "'+(" + A[e] + ")+'" : e.replace(p, "").replace(/\\?'/g, "\\'");
        }

        function z(e) {
            return R().longDateFormat[e] || e;
        }

        function W(e) {
            var t = "var a,b;return '" + e.replace(c, U) + "';",
                n = Function;
            return new n("t", "v", "o", "p", "m", t);
        }

        function X(e) {
            return L[e] || (L[e] = W(e)), L[e];
        }

        function V(e, t) {
            function r(r, i) {
                return n[r].call ? n[r](e, t) : n[r][i];
            }
            var n = R(e);
            while (h.test(t)) t = t.replace(h, z);
            return L[t] || (L[t] = W(t)), L[t](e, r, n.ordinal, H, n.meridiem);
        }

        function $(e) {
            switch (e) {
                case "DDDD":
                    return g;
                case "YYYY":
                    return y;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return m;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                case "a":
                case "A":
                    return b;
                case "Z":
                case "ZZ":
                    return w;
                case "T":
                    return E;
                case "MM":
                case "DD":
                case "YY":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                    return v;
                default:
                    return new RegExp(e.replace("\\", ""));
            }
        }

        function J(e, t, n, r) {
            var i;
            switch (e) {
                case "M":
                case "MM":
                    n[1] = t == null ? 0 : ~~t - 1;
                    break;
                case "MMM":
                case "MMMM":
                    for (i = 0; i < 12; i++)
                        if (R().monthsParse[i].test(t)) {
                            n[1] = i;
                            break;
                        }
                    break;
                case "D":
                case "DD":
                case "DDD":
                case "DDDD":
                    t != null && (n[2] = ~~t);
                    break;
                case "YY":
                    t = ~~t, n[0] = t + (t > 70 ? 1900 : 2e3);
                    break;
                case "YYYY":
                    n[0] = ~~Math.abs(t);
                    break;
                case "a":
                case "A":
                    r.isPm = (t + "").toLowerCase() === "pm";
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    n[3] = ~~t;
                    break;
                case "m":
                case "mm":
                    n[4] = ~~t;
                    break;
                case "s":
                case "ss":
                    n[5] = ~~t;
                    break;
                case "S":
                case "SS":
                case "SSS":
                    n[6] = ~~(("0." + t) * 1e3);
                    break;
                case "Z":
                case "ZZ":
                    r.isUTC = !0, i = (t + "").match(N), i && i[1] && (r.tzh = ~~i[1]), i && i[2] && (r.tzm = ~~i[2]), i && i[0] === "+" && (r.tzh = -r.tzh, r.tzm = -r.tzm);
            }
        }

        function K(e, t) {
            var n = [0, 0, 1, 0, 0, 0, 0],
                r = {
                    tzh: 0,
                    tzm: 0
                },
                i = t.match(c),
                s, o;
            for (s = 0; s < i.length; s++) o = ($(i[s]).exec(e) || [])[0], e = e.replace($(i[s]), ""), J(i[s], o, n, r);
            return r.isPm && n[3] < 12 && (n[3] += 12), r.isPm === !1 && n[3] === 12 && (n[3] = 0), n[3] += r.tzh, n[4] += r.tzm, I(n, r.isUTC);
        }

        function Q(e, t) {
            var n, r = e.match(d) || [],
                i, s = 99,
                o, u, a;
            for (o = 0; o < t.length; o++) u = K(e, t[o]), i = V(new _(u), t[o]).match(d) || [], a = F(r, i), a < s && (s = a, n = u);
            return n;
        }

        function G(t) {
            var n = "YYYY-MM-DDT",
                r;
            if (S.exec(t)) {
                for (r = 0; r < 4; r++)
                    if (T[r][1].exec(t)) {
                        n += T[r][0];
                        break;
                    }
                return w.exec(t) ? K(t, n + " Z") : K(t, n);
            }
            return new e(t);
        }

        function Y(e, t, n, r, i) {
            var s = i.relativeTime[e];
            return typeof s == "function" ? s(t || 1, !!n, e, r) : s.replace(/%d/i, t || 1);
        }

        function Z(e, t, n) {
            var r = i(Math.abs(e) / 1e3),
                s = i(r / 60),
                o = i(s / 60),
                u = i(o / 24),
                a = i(u / 365),
                f = r < 45 && ["s", r] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", i(u / 30)] || a === 1 && ["y"] || ["yy", a];
            return f[2] = t, f[3] = e > 0, f[4] = n, Y.apply({}, f);
        }

        function et(e, t) {
            n.fn[e] = function(e) {
                var n = this._isUTC ? "UTC" : "";
                return e != null ? (this._d["set" + n + t](e), this) : this._d["get" + n + t]();
            };
        }

        function tt(e) {
            n.duration.fn[e] = function() {
                return this._data[e];
            };
        }

        function nt(e, t) {
            n.duration.fn["as" + e] = function() {
                return +this / t;
            };
        }
        var n, r = "1.7.0",
            i = Math.round,
            s, o = {},
            u = "en",
            a = typeof module != "undefined" && module.exports,
            f = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
            l = /^\/?Date\((\-?\d+)/i,
            c = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?)/g,
            h = /(LT|LL?L?L?)/g,
            p = /(^\[)|(\\)|\]$/g,
            d = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
            v = /\d\d?/,
            m = /\d{1,3}/,
            g = /\d{3}/,
            y = /\d{1,4}/,
            b = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
            w = /Z|[\+\-]\d\d:?\d\d/i,
            E = /T/i,
            S = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
            x = "YYYY-MM-DDTHH:mm:ssZ",
            T = [
                ["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /T\d\d:\d\d:\d\d/],
                ["HH:mm", /T\d\d:\d\d/],
                ["HH", /T\d\d/]
            ],
            N = /([\+\-]|\d\d)/gi,
            C = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
            k = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            },
            L = {},
            A = {
                M: "(a=t.month()+1)",
                MMM: 'v("monthsShort",t.month())',
                MMMM: 'v("months",t.month())',
                D: "(a=t.date())",
                DDD: "(a=new Date(t.year(),t.month(),t.date()),b=new Date(t.year(),0,1),a=~~(((a-b)/864e5)+1.5))",
                d: "(a=t.day())",
                dd: 'v("weekdaysMin",t.day())',
                ddd: 'v("weekdaysShort",t.day())',
                dddd: 'v("weekdays",t.day())',
                w: "(a=new Date(t.year(),t.month(),t.date()-t.day()+5),b=new Date(a.getFullYear(),0,4),a=~~((a-b)/864e5/7+1.5))",
                YY: "p(t.year()%100,2)",
                YYYY: "p(t.year(),4)",
                a: "m(t.hours(),t.minutes(),!0)",
                A: "m(t.hours(),t.minutes(),!1)",
                H: "t.hours()",
                h: "t.hours()%12||12",
                m: "t.minutes()",
                s: "t.seconds()",
                S: "~~(t.milliseconds()/100)",
                SS: "p(~~(t.milliseconds()/10),2)",
                SSS: "p(t.milliseconds(),3)",
                Z: '((a=-t.zone())<0?((a=-a),"-"):"+")+p(~~(a/60),2)+":"+p(~~a%60,2)',
                ZZ: '((a=-t.zone())<0?((a=-a),"-"):"+")+p(~~(10*a/6),4)'
            },
            O = "DDD w M D d".split(" "),
            M = "M D H h m s w".split(" ");
        while (O.length) s = O.pop(), A[s + "o"] = A[s] + "+o(a)";
        while (M.length) s = M.pop(), A[s + s] = "p(" + A[s] + ",2)";
        A.DDDD = "p(" + A.DDD + ",3)", n = function(r, i) {
            if (r === null || r === "") return null;
            var s, o;
            return n.isMoment(r) ? new _(new e(+r._d), r._isUTC, r._lang) : (i ? j(i) ? s = Q(r, i) : s = K(r, i) : (o = l.exec(r), s = r === t ? new e : o ? new e(+o[1]) : r instanceof e ? r : j(r) ? I(r) : typeof r == "string" ? G(r) : new e(r)), new _(s));
        }, n.utc = function(e, t) {
            return j(e) ? new _(I(e, !0), !0) : (typeof e == "string" && !w.exec(e) && (e += " +0000", t && (t += " Z")), n(e, t).utc());
        }, n.unix = function(e) {
            return n(e * 1e3);
        }, n.duration = function(e, t) {
            var r = n.isDuration(e),
                i = typeof e == "number",
                s = r ? e._data : i ? {} : e,
                o;
            return i && (t ? s[t] = e : s.milliseconds = e), o = new D(s), r && (o._lang = e._lang), o;
        }, n.humanizeDuration = function(e, t, r) {
            return n.duration(e, t === !0 ? null : t).humanize(t === !0 ? !0 : r);
        }, n.version = r, n.defaultFormat = x, n.lang = function(e, t) {
            var r;
            if (!e) return u;
            (t || !o[e]) && q(e, t);
            if (o[e]) {
                for (r = 0; r < f.length; r++) n[f[r]] = o[e][f[r]];
                n.monthsParse = o[e].monthsParse, u = e;
            }
        }, n.langData = R, n.isMoment = function(e) {
            return e instanceof _;
        }, n.isDuration = function(e) {
            return e instanceof D;
        }, n.lang("en", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(e) {
                var t = e % 10;
                return ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            }
        }), n.fn = _.prototype = {
            clone: function() {
                return n(this);
            },
            valueOf: function() {
                return +this._d;
            },
            unix: function() {
                return Math.floor(+this._d / 1e3);
            },
            toString: function() {
                return this._d.toString();
            },
            toDate: function() {
                return this._d;
            },
            toArray: function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds(), !!this._isUTC];
            },
            isValid: function() {
                return this._a ? !F(this._a, (this._a[7] ? n.utc(this) : this).toArray()) : !isNaN(this._d.getTime());
            },
            utc: function() {
                return this._isUTC = !0, this;
            },
            local: function() {
                return this._isUTC = !1, this;
            },
            format: function(e) {
                return V(this, e ? e : n.defaultFormat);
            },
            add: function(e, t) {
                var r = t ? n.duration(+t, e) : n.duration(e);
                return B(this, r, 1), this;
            },
            subtract: function(e, t) {
                var r = t ? n.duration(+t, e) : n.duration(e);
                return B(this, r, -1), this;
            },
            diff: function(e, t, r) {
                var s = this._isUTC ? n(e).utc() : n(e).local(),
                    o = (this.zone() - s.zone()) * 6e4,
                    u = this._d - s._d - o,
                    a = this.year() - s.year(),
                    f = this.month() - s.month(),
                    l = this.date() - s.date(),
                    c;
                return t === "months" ? c = a * 12 + f + l / 30 : t === "years" ? c = a + (f + l / 30) / 12 : c = t === "seconds" ? u / 1e3 : t === "minutes" ? u / 6e4 : t === "hours" ? u / 36e5 : t === "days" ? u / 864e5 : t === "weeks" ? u / 6048e5 : u, r ? c : i(c);
            },
            from: function(e, t) {
                return n.duration(this.diff(e)).lang(this._lang).humanize(!t);
            },
            fromNow: function(e) {
                return this.from(n(), e);
            },
            calendar: function() {
                var e = this.diff(n().sod(), "days", !0),
                    t = this.lang().calendar,
                    r = t.sameElse,
                    i = e < -6 ? r : e < -1 ? t.lastWeek : e < 0 ? t.lastDay : e < 1 ? t.sameDay : e < 2 ? t.nextDay : e < 7 ? t.nextWeek : r;
                return this.format(typeof i == "function" ? i.apply(this) : i);
            },
            isLeapYear: function() {
                var e = this.year();
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
            },
            isDST: function() {
                return this.zone() < n([this.year()]).zone() || this.zone() < n([this.year(), 5]).zone();
            },
            day: function(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return e == null ? t : this.add({
                    d: e - t
                });
            },
            startOf: function(e) {
                switch (e.replace(/s$/, "")) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0);
                }
                return this;
            },
            endOf: function(e) {
                return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1);
            },
            sod: function() {
                return this.clone().startOf("day");
            },
            eod: function() {
                return this.clone().endOf("day");
            },
            zone: function() {
                return this._isUTC ? 0 : this._d.getTimezoneOffset();
            },
            daysInMonth: function() {
                return n.utc([this.year(), this.month() + 1, 0]).date();
            },
            lang: function(e) {
                return e === t ? R(this) : (this._lang = e, this);
            }
        };
        for (s = 0; s < C.length; s++) et(C[s].toLowerCase(), C[s]);
        et("year", "FullYear"), n.duration.fn = D.prototype = {
            weeks: function() {
                return P(this.days() / 7);
            },
            valueOf: function() {
                return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
            },
            humanize: function(e) {
                var t = +this,
                    n = this.lang().relativeTime,
                    r = Z(t, !e, this.lang());
                return e && (r = (t <= 0 ? n.past : n.future).replace(/%s/i, r)), r;
            },
            lang: n.fn.lang
        };
        for (s in k) k.hasOwnProperty(s) && (nt(s, k[s]), tt(s.toLowerCase()));
        nt("Weeks", 6048e5), a && (module.exports = n), typeof ender == "undefined" && (this.moment = n), typeof define == "function" && define.amd && define("moment", [], function() {
            return n;
        });
    }.call(this, Date), moment.monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"], RegExp.escape = function(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    },
    function(e) {
        "use strict";
        e.csv = {
            defaults: {
                separator: ",",
                delimiter: '"',
                headers: !0
            },
            hooks: {
                castToScalar: function(e, t) {
                    var n = /\./;
                    if (isNaN(e)) return e;
                    if (n.test(e)) return parseFloat(e);
                    var r = parseInt(e);
                    return isNaN(r) ? null : r;
                }
            },
            parsers: {
                parse: function(e, t) {
                    function f() {
                        o = 0, u = "";
                        if (t.start && t.state.rowNum < t.start) {
                            s = [], t.state.rowNum++, t.state.colNum = 1;
                            return;
                        }
                        if (t.onParseEntry === undefined) i.push(s);
                        else {
                            var e = t.onParseEntry(s, t.state);
                            e !== !1 && i.push(e);
                        }
                        s = [], t.end && t.state.rowNum >= t.end && (a = !0), t.state.rowNum++, t.state.colNum = 1;
                    }

                    function l() {
                        if (t.onParseValue === undefined) s.push(u);
                        else {
                            var e = t.onParseValue(u, t.state);
                            e !== !1 && s.push(e);
                        }
                        u = "", o = 0, t.state.colNum++;
                    }
                    var n = t.separator,
                        r = t.delimiter;
                    t.state.rowNum || (t.state.rowNum = 1), t.state.colNum || (t.state.colNum = 1);
                    var i = [],
                        s = [],
                        o = 0,
                        u = "",
                        a = !1,
                        c = RegExp.escape(n),
                        h = RegExp.escape(r),
                        p = /(D|S|\n|\r|[^DS\r\n]+)/,
                        d = p.source;
                    return d = d.replace(/S/g, c), d = d.replace(/D/g, h), p = RegExp(d, "gm"), e.replace(p, function(e) {
                        if (a) return;
                        switch (o) {
                            case 0:
                                if (e === n) {
                                    u += "", l();
                                    break;
                                }
                                if (e === r) {
                                    o = 1;
                                    break;
                                }
                                if (e === "\n") {
                                    l(), f();
                                    break;
                                }
                                if (/^\r$/.test(e)) break;
                                u += e, o = 3;
                                break;
                            case 1:
                                if (e === r) {
                                    o = 2;
                                    break;
                                }
                                u += e, o = 1;
                                break;
                            case 2:
                                if (e === r) {
                                    u += e, o = 1;
                                    break;
                                }
                                if (e === n) {
                                    l();
                                    break;
                                }
                                if (e === "\n") {
                                    l(), f();
                                    break;
                                }
                                if (/^\r$/.test(e)) break;
                                throw new Error("CSVDataError: Illegal State [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                            case 3:
                                if (e === n) {
                                    l();
                                    break;
                                }
                                if (e === "\n") {
                                    l(), f();
                                    break;
                                }
                                if (/^\r$/.test(e)) break;
                                if (e === r) throw new Error("CSVDataError: Illegal Quote [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                                throw new Error("CSVDataError: Illegal Data [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                            default:
                                throw new Error("CSVDataError: Unknown State [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                        }
                    }), s.length !== 0 && (l(), f()), i;
                },
                splitLines: function(e, t) {
                    function a() {
                        s = 0;
                        if (t.start && t.state.rowNum < t.start) {
                            o = "", t.state.rowNum++;
                            return;
                        }
                        if (t.onParseEntry === undefined) i.push(o);
                        else {
                            var e = t.onParseEntry(o, t.state);
                            e !== !1 && i.push(e);
                        }
                        o = "", t.end && t.state.rowNum >= t.end && (u = !0), t.state.rowNum++;
                    }
                    var n = t.separator,
                        r = t.delimiter;
                    t.state.rowNum || (t.state.rowNum = 1);
                    var i = [],
                        s = 0,
                        o = "",
                        u = !1,
                        f = RegExp.escape(n),
                        l = RegExp.escape(r),
                        c = /(D|S|\n|\r|[^DS\r\n]+)/,
                        h = c.source;
                    return h = h.replace(/S/g, f), h = h.replace(/D/g, l), c = RegExp(h, "gm"), e.replace(c, function(e) {
                        if (u) return;
                        switch (s) {
                            case 0:
                                if (e === n) {
                                    o += e, s = 0;
                                    break;
                                }
                                if (e === r) {
                                    o += e, s = 1;
                                    break;
                                }
                                if (e === "\n") {
                                    a();
                                    break;
                                }
                                if (/^\r$/.test(e)) break;
                                o += e, s = 3;
                                break;
                            case 1:
                                if (e === r) {
                                    o += e, s = 2;
                                    break;
                                }
                                o += e, s = 1;
                                break;
                            case 2:
                                var i = o.substr(o.length - 1);
                                if (e === r && i === r) {
                                    o += e, s = 1;
                                    break;
                                }
                                if (e === n) {
                                    o += e, s = 0;
                                    break;
                                }
                                if (e === "\n") {
                                    a();
                                    break;
                                }
                                if (e === "\r") break;
                                throw new Error("CSVDataError: Illegal state [Row:" + t.state.rowNum + "]");
                            case 3:
                                if (e === n) {
                                    o += e, s = 0;
                                    break;
                                }
                                if (e === "\n") {
                                    a();
                                    break;
                                }
                                if (e === "\r") break;
                                if (e === r) throw new Error("CSVDataError: Illegal quote [Row:" + t.state.rowNum + "]");
                                throw new Error("CSVDataError: Illegal state [Row:" + t.state.rowNum + "]");
                            default:
                                throw new Error("CSVDataError: Unknown state [Row:" + t.state.rowNum + "]");
                        }
                    }), o !== "" && a(), i;
                },
                parseEntry: function(e, t) {
                    function u() {
                        if (t.onParseValue === undefined) i.push(o);
                        else {
                            var e = t.onParseValue(o, t.state);
                            e !== !1 && i.push(e);
                        }
                        o = "", s = 0, t.state.colNum++;
                    }
                    var n = t.separator,
                        r = t.delimiter;
                    t.state.rowNum || (t.state.rowNum = 1), t.state.colNum || (t.state.colNum = 1);
                    var i = [],
                        s = 0,
                        o = "";
                    if (!t.match) {
                        var a = RegExp.escape(n),
                            f = RegExp.escape(r),
                            l = /(D|S|\n|\r|[^DS\r\n]+)/,
                            c = l.source;
                        c = c.replace(/S/g, a), c = c.replace(/D/g, f), t.match = RegExp(c, "gm");
                    }
                    return e.replace(t.match, function(e) {
                        switch (s) {
                            case 0:
                                if (e === n) {
                                    o += "", u();
                                    break;
                                }
                                if (e === r) {
                                    s = 1;
                                    break;
                                }
                                if (e === "\n" || e === "\r") break;
                                o += e, s = 3;
                                break;
                            case 1:
                                if (e === r) {
                                    s = 2;
                                    break;
                                }
                                o += e, s = 1;
                                break;
                            case 2:
                                if (e === r) {
                                    o += e, s = 1;
                                    break;
                                }
                                if (e === n) {
                                    u();
                                    break;
                                }
                                if (e === "\n" || e === "\r") break;
                                throw new Error("CSVDataError: Illegal State [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                            case 3:
                                if (e === n) {
                                    u();
                                    break;
                                }
                                if (e === "\n" || e === "\r") break;
                                if (e === r) throw new Error("CSVDataError: Illegal Quote [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                                throw new Error("CSVDataError: Illegal Data [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                            default:
                                throw new Error("CSVDataError: Unknown State [Row:" + t.state.rowNum + "][Col:" + t.state.colNum + "]");
                        }
                    }), u(), i;
                }
            },
            toArray: function(t, n, r) {
                var n = n !== undefined ? n : {},
                    i = {};
                i.callback = r !== undefined && typeof r == "function" ? r : !1, i.separator = "separator" in n ? n.separator : e.csv.defaults.separator, i.delimiter = "delimiter" in n ? n.delimiter : e.csv.defaults.delimiter;
                var s = n.state !== undefined ? n.state : {},
                    n = {
                        delimiter: i.delimiter,
                        separator: i.separator,
                        onParseEntry: n.onParseEntry,
                        onParseValue: n.onParseValue,
                        state: s
                    },
                    o = e.csv.parsers.parseEntry(t, n);
                if (!i.callback) return o;
                i.callback("", o);
            },
            toArrays: function(t, n, r) {
                var n = n !== undefined ? n : {},
                    i = {};
                i.callback = r !== undefined && typeof r == "function" ? r : !1, i.separator = "separator" in n ? n.separator : e.csv.defaults.separator, i.delimiter = "delimiter" in n ? n.delimiter : e.csv.defaults.delimiter;
                var s = [],
                    n = {
                        delimiter: i.delimiter,
                        separator: i.separator,
                        onParseEntry: n.onParseEntry,
                        onParseValue: n.onParseValue,
                        start: n.start,
                        end: n.end,
                        state: {
                            rowNum: 1,
                            colNum: 1
                        }
                    };
                s = e.csv.parsers.parse(t, n);
                if (!i.callback) return s;
                i.callback("", s);
            },
            toObjects: function(t, n, r) {
                var n = n !== undefined ? n : {},
                    i = {};
                i.callback = r !== undefined && typeof r == "function" ? r : !1, i.separator = "separator" in n ? n.separator : e.csv.defaults.separator, i.delimiter = "delimiter" in n ? n.delimiter : e.csv.defaults.delimiter, i.headers = "headers" in n ? n.headers : e.csv.defaults.headers, n.start = "start" in n ? n.start : 1, i.headers && n.start++, n.end && i.headers && n.end++;
                var s = [],
                    o = [],
                    n = {
                        delimiter: i.delimiter,
                        separator: i.separator,
                        onParseEntry: n.onParseEntry,
                        onParseValue: n.onParseValue,
                        start: n.start,
                        end: n.end,
                        state: {
                            rowNum: 1,
                            colNum: 1
                        },
                        match: !1
                    },
                    u = {
                        delimiter: i.delimiter,
                        separator: i.separator,
                        start: 1,
                        end: 1,
                        state: {
                            rowNum: 1,
                            colNum: 1
                        }
                    },
                    a = e.csv.parsers.splitLines(t, u),
                    f = e.csv.toArray(a[0], n),
                    s = e.csv.parsers.splitLines(t, n);
                n.state.colNum = 1, f ? n.state.rowNum = 2 : n.state.rowNum = 1;
                for (var l = 0, c = s.length; l < c; l++) {
                    var h = e.csv.toArray(s[l], n),
                        p = {};
                    for (var d in f) p[f[d]] = h[d];
                    o.push(p), n.state.rowNum++;
                }
                if (!i.callback) return o;
                i.callback("", o);
            },
            fromArrays: function(t, n, r) {
                var n = n !== undefined ? n : {},
                    s = {};
                s.callback = r !== undefined && typeof r == "function" ? r : !1, s.separator = "separator" in n ? n.separator : e.csv.defaults.separator, s.delimiter = "delimiter" in n ? n.delimiter : e.csv.defaults.delimiter, s.escaper = "escaper" in n ? n.escaper : e.csv.defaults.escaper, s.experimental = "experimental" in n ? n.experimental : !1;
                if (!s.experimental) throw new Error("not implemented");
                var o = [];
                for (i in t) o.push(t[i]);
                if (!s.callback) return o;
                s.callback("", o);
            },
            fromObjects2CSV: function(t, n, r) {
                var n = n !== undefined ? n : {},
                    s = {};
                s.callback = r !== undefined && typeof r == "function" ? r : !1, s.separator = "separator" in n ? n.separator : e.csv.defaults.separator, s.delimiter = "delimiter" in n ? n.delimiter : e.csv.defaults.delimiter, s.experimental = "experimental" in n ? n.experimental : !1;
                if (!s.experimental) throw new Error("not implemented");
                var o = [];
                for (i in t) o.push(arrays[i]);
                if (!s.callback) return o;
                s.callback("", o);
            }
        }, e.csvEntry2Array = e.csv.toArray, e.csv2Array = e.csv.toArrays, e.csv2Dictionary = e.csv.toObjects;
    }(jQuery);;