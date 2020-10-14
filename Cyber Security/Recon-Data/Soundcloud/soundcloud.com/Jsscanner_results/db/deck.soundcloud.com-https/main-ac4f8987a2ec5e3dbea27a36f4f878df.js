//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

define("views/content-management/mock-ajax", ["require", "exports", "module"], function(e, t, n) {}),
    function() {
        function x(e) {
            function t(t, n, r, i, s, o) {
                for (; s >= 0 && s < o; s += e) {
                    var u = i ? i[s] : s;
                    r = n(r, t[u], u, t);
                }
                return r;
            }
            return function(n, r, i, s) {
                r = v(r, s, 4);
                var o = !S(n) && d.keys(n),
                    u = (o || n).length,
                    a = e > 0 ? 0 : u - 1;
                return arguments.length < 3 && (i = n[o ? o[a] : a], a += e), t(n, r, i, o, a, u);
            };
        }

        function C(e) {
            return function(t, n, r) {
                n = m(n, r);
                var i = E(t),
                    s = e > 0 ? 0 : i - 1;
                for (; s >= 0 && s < i; s += e)
                    if (n(t[s], s, t)) return s;
                return -1;
            };
        }

        function k(e, t, n) {
            return function(r, i, s) {
                var u = 0,
                    a = E(r);
                if (typeof s == "number") e > 0 ? u = s >= 0 ? s : Math.max(s + a, u) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                else if (n && s && a) return s = n(r, i), r[s] === i ? s : -1;
                if (i !== i) return s = t(o.call(r, u, a), d.isNaN), s >= 0 ? s + u : -1;
                for (s = e > 0 ? u : a - 1; s >= 0 && s < a; s += e)
                    if (r[s] === i) return s;
                return -1;
            };
        }

        function M(e, t) {
            var n = O.length,
                i = e.constructor,
                s = d.isFunction(i) && i.prototype || r,
                o = "constructor";
            d.has(e, o) && !d.contains(t, o) && t.push(o);
            while (n--) o = O[n], o in e && e[o] !== s[o] && !d.contains(t, o) && t.push(o);
        }
        var e = this,
            t = e._,
            n = Array.prototype,
            r = Object.prototype,
            i = Function.prototype,
            s = n.push,
            o = n.slice,
            u = r.toString,
            a = r.hasOwnProperty,
            f = Array.isArray,
            l = Object.keys,
            c = i.bind,
            h = Object.create,
            p = function() {},
            d = function(e) {
                if (e instanceof d) return e;
                if (!(this instanceof d)) return new d(e);
                this._wrapped = e;
            };
        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = d), exports._ = d) : e._ = d, d.VERSION = "1.8.3";
        var v = function(e, t, n) {
                if (t === void 0) return e;
                switch (n == null ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r);
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i);
                        };
                    case 4:
                        return function(n, r, i, s) {
                            return e.call(t, n, r, i, s);
                        };
                }
                return function() {
                    return e.apply(t, arguments);
                };
            },
            m = function(e, t, n) {
                return e == null ? d.identity : d.isFunction(e) ? v(e, t, n) : d.isObject(e) ? d.matcher(e) : d.property(e);
            };
        d.iteratee = function(e, t) {
            return m(e, t, Infinity);
        };
        var g = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (r < 2 || n == null) return n;
                    for (var i = 1; i < r; i++) {
                        var s = arguments[i],
                            o = e(s),
                            u = o.length;
                        for (var a = 0; a < u; a++) {
                            var f = o[a];
                            if (!t || n[f] === void 0) n[f] = s[f];
                        }
                    }
                    return n;
                };
            },
            y = function(e) {
                if (!d.isObject(e)) return {};
                if (h) return h(e);
                p.prototype = e;
                var t = new p;
                return p.prototype = null, t;
            },
            b = function(e) {
                return function(t) {
                    return t == null ? void 0 : t[e];
                };
            },
            w = Math.pow(2, 53) - 1,
            E = b("length"),
            S = function(e) {
                var t = E(e);
                return typeof t == "number" && t >= 0 && t <= w;
            };
        d.each = d.forEach = function(e, t, n) {
            t = v(t, n);
            var r, i;
            if (S(e))
                for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
            else {
                var s = d.keys(e);
                for (r = 0, i = s.length; r < i; r++) t(e[s[r]], s[r], e);
            }
            return e;
        }, d.map = d.collect = function(e, t, n) {
            t = m(t, n);
            var r = !S(e) && d.keys(e),
                i = (r || e).length,
                s = Array(i);
            for (var o = 0; o < i; o++) {
                var u = r ? r[o] : o;
                s[o] = t(e[u], u, e);
            }
            return s;
        }, d.reduce = d.foldl = d.inject = x(1), d.reduceRight = d.foldr = x(-1), d.find = d.detect = function(e, t, n) {
            var r;
            S(e) ? r = d.findIndex(e, t, n) : r = d.findKey(e, t, n);
            if (r !== void 0 && r !== -1) return e[r];
        }, d.filter = d.select = function(e, t, n) {
            var r = [];
            return t = m(t, n), d.each(e, function(e, n, i) {
                t(e, n, i) && r.push(e);
            }), r;
        }, d.reject = function(e, t, n) {
            return d.filter(e, d.negate(m(t)), n);
        }, d.every = d.all = function(e, t, n) {
            t = m(t, n);
            var r = !S(e) && d.keys(e),
                i = (r || e).length;
            for (var s = 0; s < i; s++) {
                var o = r ? r[s] : s;
                if (!t(e[o], o, e)) return !1;
            }
            return !0;
        }, d.some = d.any = function(e, t, n) {
            t = m(t, n);
            var r = !S(e) && d.keys(e),
                i = (r || e).length;
            for (var s = 0; s < i; s++) {
                var o = r ? r[s] : s;
                if (t(e[o], o, e)) return !0;
            }
            return !1;
        }, d.contains = d.includes = d.include = function(e, t, n, r) {
            S(e) || (e = d.values(e));
            if (typeof n != "number" || r) n = 0;
            return d.indexOf(e, t, n) >= 0;
        }, d.invoke = function(e, t) {
            var n = o.call(arguments, 2),
                r = d.isFunction(t);
            return d.map(e, function(e) {
                var i = r ? t : e[t];
                return i == null ? i : i.apply(e, n);
            });
        }, d.pluck = function(e, t) {
            return d.map(e, d.property(t));
        }, d.where = function(e, t) {
            return d.filter(e, d.matcher(t));
        }, d.findWhere = function(e, t) {
            return d.find(e, d.matcher(t));
        }, d.max = function(e, t, n) {
            var r = -Infinity,
                i = -Infinity,
                s, o;
            if (t == null && e != null) {
                e = S(e) ? e : d.values(e);
                for (var u = 0, a = e.length; u < a; u++) s = e[u], s > r && (r = s);
            } else t = m(t, n), d.each(e, function(e, n, s) {
                o = t(e, n, s);
                if (o > i || o === -Infinity && r === -Infinity) r = e, i = o;
            });
            return r;
        }, d.min = function(e, t, n) {
            var r = Infinity,
                i = Infinity,
                s, o;
            if (t == null && e != null) {
                e = S(e) ? e : d.values(e);
                for (var u = 0, a = e.length; u < a; u++) s = e[u], s < r && (r = s);
            } else t = m(t, n), d.each(e, function(e, n, s) {
                o = t(e, n, s);
                if (o < i || o === Infinity && r === Infinity) r = e, i = o;
            });
            return r;
        }, d.shuffle = function(e) {
            var t = S(e) ? e : d.values(e),
                n = t.length,
                r = Array(n);
            for (var i = 0, s; i < n; i++) s = d.random(0, i), s !== i && (r[i] = r[s]), r[s] = t[i];
            return r;
        }, d.sample = function(e, t, n) {
            return t == null || n ? (S(e) || (e = d.values(e)), e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, Math.max(0, t));
        }, d.sortBy = function(e, t, n) {
            return t = m(t, n), d.pluck(d.map(e, function(e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                };
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || n === void 0) return 1;
                    if (n < r || r === void 0) return -1;
                }
                return e.index - t.index;
            }), "value");
        };
        var T = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = m(n, r), d.each(t, function(r, s) {
                    var o = n(r, s, t);
                    e(i, r, o);
                }), i;
            };
        };
        d.groupBy = T(function(e, t, n) {
            d.has(e, n) ? e[n].push(t) : e[n] = [t];
        }), d.indexBy = T(function(e, t, n) {
            e[n] = t;
        }), d.countBy = T(function(e, t, n) {
            d.has(e, n) ? e[n]++ : e[n] = 1;
        }), d.toArray = function(e) {
            return e ? d.isArray(e) ? o.call(e) : S(e) ? d.map(e, d.identity) : d.values(e) : [];
        }, d.size = function(e) {
            return e == null ? 0 : S(e) ? e.length : d.keys(e).length;
        }, d.partition = function(e, t, n) {
            t = m(t, n);
            var r = [],
                i = [];
            return d.each(e, function(e, n, s) {
                (t(e, n, s) ? r : i).push(e);
            }), [r, i];
        }, d.first = d.head = d.take = function(e, t, n) {
            return e == null ? void 0 : t == null || n ? e[0] : d.initial(e, e.length - t);
        }, d.initial = function(e, t, n) {
            return o.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)));
        }, d.last = function(e, t, n) {
            return e == null ? void 0 : t == null || n ? e[e.length - 1] : d.rest(e, Math.max(0, e.length - t));
        }, d.rest = d.tail = d.drop = function(e, t, n) {
            return o.call(e, t == null || n ? 1 : t);
        }, d.compact = function(e) {
            return d.filter(e, d.identity);
        };
        var N = function(e, t, n, r) {
            var i = [],
                s = 0;
            for (var o = r || 0, u = E(e); o < u; o++) {
                var a = e[o];
                if (S(a) && (d.isArray(a) || d.isArguments(a))) {
                    t || (a = N(a, t, n));
                    var f = 0,
                        l = a.length;
                    i.length += l;
                    while (f < l) i[s++] = a[f++];
                } else n || (i[s++] = a);
            }
            return i;
        };
        d.flatten = function(e, t) {
            return N(e, t, !1);
        }, d.without = function(e) {
            return d.difference(e, o.call(arguments, 1));
        }, d.uniq = d.unique = function(e, t, n, r) {
            d.isBoolean(t) || (r = n, n = t, t = !1), n != null && (n = m(n, r));
            var i = [],
                s = [];
            for (var o = 0, u = E(e); o < u; o++) {
                var a = e[o],
                    f = n ? n(a, o, e) : a;
                t ? ((!o || s !== f) && i.push(a), s = f) : n ? d.contains(s, f) || (s.push(f), i.push(a)) : d.contains(i, a) || i.push(a);
            }
            return i;
        }, d.union = function() {
            return d.uniq(N(arguments, !0, !0));
        }, d.intersection = function(e) {
            var t = [],
                n = arguments.length;
            for (var r = 0, i = E(e); r < i; r++) {
                var s = e[r];
                if (d.contains(t, s)) continue;
                for (var o = 1; o < n; o++)
                    if (!d.contains(arguments[o], s)) break;
                o === n && t.push(s);
            }
            return t;
        }, d.difference = function(e) {
            var t = N(arguments, !0, !0, 1);
            return d.filter(e, function(e) {
                return !d.contains(t, e);
            });
        }, d.zip = function() {
            return d.unzip(arguments);
        }, d.unzip = function(e) {
            var t = e && d.max(e, E).length || 0,
                n = Array(t);
            for (var r = 0; r < t; r++) n[r] = d.pluck(e, r);
            return n;
        }, d.object = function(e, t) {
            var n = {};
            for (var r = 0, i = E(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n;
        }, d.findIndex = C(1), d.findLastIndex = C(-1), d.sortedIndex = function(e, t, n, r) {
            n = m(n, r, 1);
            var i = n(t),
                s = 0,
                o = E(e);
            while (s < o) {
                var u = Math.floor((s + o) / 2);
                n(e[u]) < i ? s = u + 1 : o = u;
            }
            return s;
        }, d.indexOf = k(1, d.findIndex, d.sortedIndex), d.lastIndexOf = k(-1, d.findLastIndex), d.range = function(e, t, n) {
            t == null && (t = e || 0, e = 0), n = n || 1;
            var r = Math.max(Math.ceil((t - e) / n), 0),
                i = Array(r);
            for (var s = 0; s < r; s++, e += n) i[s] = e;
            return i;
        };
        var L = function(e, t, n, r, i) {
            if (r instanceof t) {
                var s = y(e.prototype),
                    o = e.apply(s, i);
                return d.isObject(o) ? o : s;
            }
            return e.apply(n, i);
        };
        d.bind = function(e, t) {
            if (c && e.bind === c) return c.apply(e, o.call(arguments, 1));
            if (!d.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = o.call(arguments, 2),
                r = function() {
                    return L(e, r, t, this, n.concat(o.call(arguments)));
                };
            return r;
        }, d.partial = function(e) {
            var t = o.call(arguments, 1),
                n = function() {
                    var r = 0,
                        i = t.length,
                        s = Array(i);
                    for (var o = 0; o < i; o++) s[o] = t[o] === d ? arguments[r++] : t[o];
                    while (r < arguments.length) s.push(arguments[r++]);
                    return L(e, n, this, this, s);
                };
            return n;
        }, d.bindAll = function(e) {
            var t, n = arguments.length,
                r;
            if (n <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < n; t++) r = arguments[t], e[r] = d.bind(e[r], e);
            return e;
        }, d.memoize = function(e, t) {
            var n = function(r) {
                var i = n.cache,
                    s = "" + (t ? t.apply(this, arguments) : r);
                return d.has(i, s) || (i[s] = e.apply(this, arguments)), i[s];
            };
            return n.cache = {}, n;
        }, d.delay = function(e, t) {
            var n = o.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n);
            }, t);
        }, d.defer = d.partial(d.delay, d, 1), d.throttle = function(e, t, n) {
            var r, i, s, o = null,
                u = 0;
            n || (n = {});
            var a = function() {
                u = n.leading === !1 ? 0 : d.now(), o = null, s = e.apply(r, i), o || (r = i = null);
            };
            return function() {
                var f = d.now();
                !u && n.leading === !1 && (u = f);
                var l = t - (f - u);
                return r = this, i = arguments, l <= 0 || l > t ? (o && (clearTimeout(o), o = null), u = f, s = e.apply(r, i), o || (r = i = null)) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s;
            };
        }, d.debounce = function(e, t, n) {
            var r, i, s, o, u, a = function() {
                var f = d.now() - o;
                f < t && f >= 0 ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), r || (s = i = null)));
            };
            return function() {
                s = this, i = arguments, o = d.now();
                var f = n && !r;
                return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u;
            };
        }, d.wrap = function(e, t) {
            return d.partial(t, e);
        }, d.negate = function(e) {
            return function() {
                return !e.apply(this, arguments);
            };
        }, d.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                var n = t,
                    r = e[t].apply(this, arguments);
                while (n--) r = e[n].call(this, r);
                return r;
            };
        }, d.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments);
            };
        }, d.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
            };
        }, d.once = d.partial(d.before, 2);
        var A = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        d.keys = function(e) {
            if (!d.isObject(e)) return [];
            if (l) return l(e);
            var t = [];
            for (var n in e) d.has(e, n) && t.push(n);
            return A && M(e, t), t;
        }, d.allKeys = function(e) {
            if (!d.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return A && M(e, t), t;
        }, d.values = function(e) {
            var t = d.keys(e),
                n = t.length,
                r = Array(n);
            for (var i = 0; i < n; i++) r[i] = e[t[i]];
            return r;
        }, d.mapObject = function(e, t, n) {
            t = m(t, n);
            var r = d.keys(e),
                i = r.length,
                s = {},
                o;
            for (var u = 0; u < i; u++) o = r[u], s[o] = t(e[o], o, e);
            return s;
        }, d.pairs = function(e) {
            var t = d.keys(e),
                n = t.length,
                r = Array(n);
            for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
            return r;
        }, d.invert = function(e) {
            var t = {},
                n = d.keys(e);
            for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t;
        }, d.functions = d.methods = function(e) {
            var t = [];
            for (var n in e) d.isFunction(e[n]) && t.push(n);
            return t.sort();
        }, d.extend = g(d.allKeys), d.extendOwn = d.assign = g(d.keys), d.findKey = function(e, t, n) {
            t = m(t, n);
            var r = d.keys(e),
                i;
            for (var s = 0, o = r.length; s < o; s++) {
                i = r[s];
                if (t(e[i], i, e)) return i;
            }
        }, d.pick = function(e, t, n) {
            var r = {},
                i = e,
                s, o;
            if (i == null) return r;
            d.isFunction(t) ? (o = d.allKeys(i), s = v(t, n)) : (o = N(arguments, !1, !1, 1), s = function(e, t, n) {
                return t in n;
            }, i = Object(i));
            for (var u = 0, a = o.length; u < a; u++) {
                var f = o[u],
                    l = i[f];
                s(l, f, i) && (r[f] = l);
            }
            return r;
        }, d.omit = function(e, t, n) {
            if (d.isFunction(t)) t = d.negate(t);
            else {
                var r = d.map(N(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !d.contains(r, t);
                };
            }
            return d.pick(e, t, n);
        }, d.defaults = g(d.allKeys, !0), d.create = function(e, t) {
            var n = y(e);
            return t && d.extendOwn(n, t), n;
        }, d.clone = function(e) {
            return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e;
        }, d.tap = function(e, t) {
            return t(e), e;
        }, d.isMatch = function(e, t) {
            var n = d.keys(t),
                r = n.length;
            if (e == null) return !r;
            var i = Object(e);
            for (var s = 0; s < r; s++) {
                var o = n[s];
                if (t[o] !== i[o] || !(o in i)) return !1;
            }
            return !0;
        };
        var _ = function(e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e === 1 / t;
            if (e == null || t == null) return e === t;
            e instanceof d && (e = e._wrapped), t instanceof d && (t = t._wrapped);
            var i = u.call(e);
            if (i !== u.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    if (+e !== +e) return +t !== +t;
                    return +e === 0 ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t;
            }
            var s = i === "[object Array]";
            if (!s) {
                if (typeof e != "object" || typeof t != "object") return !1;
                var o = e.constructor,
                    a = t.constructor;
                if (o !== a && !(d.isFunction(o) && o instanceof o && d.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
            }
            n = n || [], r = r || [];
            var f = n.length;
            while (f--)
                if (n[f] === e) return r[f] === t;
            n.push(e), r.push(t);
            if (s) {
                f = e.length;
                if (f !== t.length) return !1;
                while (f--)
                    if (!_(e[f], t[f], n, r)) return !1;
            } else {
                var l = d.keys(e),
                    c;
                f = l.length;
                if (d.keys(t).length !== f) return !1;
                while (f--) {
                    c = l[f];
                    if (!d.has(t, c) || !_(e[c], t[c], n, r)) return !1;
                }
            }
            return n.pop(), r.pop(), !0;
        };
        d.isEqual = function(e, t) {
            return _(e, t);
        }, d.isEmpty = function(e) {
            return e == null ? !0 : S(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? e.length === 0 : d.keys(e).length === 0;
        }, d.isElement = function(e) {
            return !!e && e.nodeType === 1;
        }, d.isArray = f || function(e) {
            return u.call(e) === "[object Array]";
        }, d.isObject = function(e) {
            var t = typeof e;
            return t === "function" || t === "object" && !!e;
        }, d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            d["is" + e] = function(t) {
                return u.call(t) === "[object " + e + "]";
            };
        }), d.isArguments(arguments) || (d.isArguments = function(e) {
            return d.has(e, "callee");
        }), typeof /./ != "function" && typeof Int8Array != "object" && (d.isFunction = function(e) {
            return typeof e == "function" || !1;
        }), d.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e));
        }, d.isNaN = function(e) {
            return d.isNumber(e) && e !== +e;
        }, d.isBoolean = function(e) {
            return e === !0 || e === !1 || u.call(e) === "[object Boolean]";
        }, d.isNull = function(e) {
            return e === null;
        }, d.isUndefined = function(e) {
            return e === void 0;
        }, d.has = function(e, t) {
            return e != null && a.call(e, t);
        }, d.noConflict = function() {
            return e._ = t, this;
        }, d.identity = function(e) {
            return e;
        }, d.constant = function(e) {
            return function() {
                return e;
            };
        }, d.noop = function() {}, d.property = b, d.propertyOf = function(e) {
            return e == null ? function() {} : function(t) {
                return e[t];
            };
        }, d.matcher = d.matches = function(e) {
            return e = d.extendOwn({}, e),
                function(t) {
                    return d.isMatch(t, e);
                };
        }, d.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            t = v(t, n, 1);
            for (var i = 0; i < e; i++) r[i] = t(i);
            return r;
        }, d.random = function(e, t) {
            return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
        }, d.now = Date.now || function() {
            return (new Date).getTime();
        };
        var D = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            P = d.invert(D),
            H = function(e) {
                var t = function(t) {
                        return e[t];
                    },
                    n = "(?:" + d.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = e == null ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
                };
            };
        d.escape = H(D), d.unescape = H(P), d.result = function(e, t, n) {
            var r = e == null ? void 0 : e[t];
            return r === void 0 && (r = n), d.isFunction(r) ? r.call(e) : r;
        };
        var B = 0;
        d.uniqueId = function(e) {
            var t = ++B + "";
            return e ? e + t : t;
        }, d.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = /(.)^/,
            F = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            I = /\\|'|\r|\n|\u2028|\u2029/g,
            q = function(e) {
                return "\\" + F[e];
            };
        d.template = function(e, t, n) {
            !t && n && (t = n), t = d.defaults({}, t, d.templateSettings);
            var r = RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
                i = 0,
                s = "__p+='";
            e.replace(r, function(t, n, r, o, u) {
                return s += e.slice(i, u).replace(I, q), i = u + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t;
            }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj", "_", s);
            } catch (u) {
                throw u.source = s, u;
            }
            var a = function(e) {
                    return o.call(this, e, d);
                },
                f = t.variable || "obj";
            return a.source = "function(" + f + "){\n" + s + "}", a;
        }, d.chain = function(e) {
            var t = d(e);
            return t._chain = !0, t;
        };
        var R = function(e, t) {
            return e._chain ? d(t).chain() : t;
        };
        d.mixin = function(e) {
            d.each(d.functions(e), function(t) {
                var n = d[t] = e[t];
                d.prototype[t] = function() {
                    var e = [this._wrapped];
                    return s.apply(e, arguments), R(this, n.apply(d, e));
                };
            });
        }, d.mixin(d), d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = n[e];
            d.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0], R(this, n);
            };
        }), d.each(["concat", "join", "slice"], function(e) {
            var t = n[e];
            d.prototype[e] = function() {
                return R(this, t.apply(this._wrapped, arguments));
            };
        }), d.prototype.value = function() {
            return this._wrapped;
        }, d.prototype.valueOf = d.prototype.toJSON = d.prototype.value, d.prototype.toString = function() {
            return "" + this._wrapped;
        }, typeof define == "function" && define.amd && define("underscore", [], function() {
            return d;
        });
    }.call(this), define("vendor/underscore", function(e) {
        return function() {
            var t, n;
            return t || e._;
        };
    }(this)), define("config/modules", ["require", "exports", "module"], function(e, t, n) {
        n.exports.tools = [{
            title: "Accounts",
            capacity: "accounts",
            route: "/accounts"
        }, {
            isHashRoute: !0,
            title: "Takedowns",
            capacity: "track-blacklist",
            route: "/takedowns",
            names: "route:trackBlacklist"
        }, {
            isHashRoute: !0,
            title: "Content Management",
            capacity: "content-management",
            route: "/ingestions",
            names: "route:ingestions, route:ingestions:emergencyUpload, route:ingestions:emergeyUploadContent"
        }, {
            isHashRoute: !0,
            title: "API Access",
            capacity: "api-access",
            route: "/api-access",
            names: "route:apiaccess:topapps, route:apiaccess:accounts, route:apiaccess:tracks",
            forceReload: !0
        }, {
            isHashRoute: !0,
            title: "ISRC Whitelist",
            capacity: "content-management",
            route: "/isrc-whitelist",
            names: "route:whitelistedIsrcs"
        }, {
            isHashRoute: !0,
            title: "Priority Content Protection",
            capacity: "priority-content-protection",
            route: "/high-value-references",
            names: "route:highValueReferences"
        }, {
            isHashRoute: !0,
            title: "Reports",
            capacity: "stats-reports",
            route: "/stats-reports",
            names: "route:statsReports"
        }, {
            title: "Premier Guides",
            capacity: "premier-guides",
            route: "/premier-guides"
        }, {
            isHashRoute: !0,
            title: "Administrate Users",
            capacity: "users",
            route: "/users",
            names: "route:deckUsers"
        }, {
            isHashRoute: !0,
            title: "Edit Profiles",
            capacity: "owned-profiles",
            route: "/profile-edit",
            names: "route:profileEdit"
        }, {
            isHashRoute: !0,
            title: "Conflicts & Ownership",
            capacity: "conflict-resolution",
            route: "/conflicts",
            names: "route:conflictsDashboard, route:conflictsAllResults, route:conflictsAllFeedResults, route:conflictsLast7Days, route:conflictsLast7DaysForFeed, route:conflictsTop20Accounts, route:conflictsHasMonetizedTerritories, route:conflictsTop20AccountsForFeed, route:conflictsHasMonetizedTerritoriesForFeed, route:conflictsManualUploadsUnknownOwner, route:conflictsMissingRightsholderMonetized, route:conflictsFromFeed, route:conflictsFromFeedInMonetized, route:conflictsSearch, route:conflicts, route:conflictsDashboardAllTerritories"
        }, {
            title: "Track Status",
            capacity: "track-status",
            route: "/track-status"
        }, {
            title: "Manual Monetization",
            capacity: "manual-monetization",
            route: "/manual-monetization"
        }, {
            title: "Help",
            route: "/help"
        }];
        var r = !!localStorage.getItem("deck:feature:show-new-pages");
        r && n.exports.tools.push({
            title: "Takedowns 2.0",
            capacity: "track-blacklist",
            route: "/takedowns"
        });
    }), define("config/env", ["require", "exports", "module", "config/modules"], function(e, t, n) {
        __DEBUG_WARNINGS__ = !1, __DEBUG_ATTACH_VIEWS__ = !1;
        var r = e("config/modules").tools,
            i = 3,
            s = "/";
        n.exports = {
            APIDeckUrl: window.APIDeckUrl,
            ARMSUrl: s,
            SCUrl: window.SCUrl,
            tools: r,
            terms_version: i
        };
    }),
    function() {
        var e = this,
            t = e.Backbone,
            n = Array.prototype.slice,
            r = Array.prototype.splice,
            i;
        typeof exports != "undefined" ? i = exports : i = e.Backbone = {}, i.VERSION = "0.9.2";
        var s = e._;
        !s && typeof require != "undefined" && (s = require("underscore"));
        var o = e.jQuery || e.Zepto || e.ender;
        i.setDomLibrary = function(e) {
            o = e;
        }, i.noConflict = function() {
            return e.Backbone = t, this;
        }, i.emulateHTTP = !1, i.emulateJSON = !1;
        var u = /\s+/,
            a = i.Events = {
                on: function(e, t, n) {
                    var r, i, s, o, a;
                    if (!t) return this;
                    e = e.split(u), r = this._callbacks || (this._callbacks = {});
                    while (i = e.shift()) a = r[i], s = a ? a.tail : {}, s.next = o = {}, s.context = n, s.callback = t, r[i] = {
                        tail: o,
                        next: a ? a.next : s
                    };
                    return this;
                },
                off: function(e, t, n) {
                    var r, i, o, a, f, l;
                    if (!(i = this._callbacks)) return;
                    if (!(e || t || n)) return delete this._callbacks, this;
                    e = e ? e.split(u) : s.keys(i);
                    while (r = e.shift()) {
                        o = i[r], delete i[r];
                        if (!o || !t && !n) continue;
                        a = o.tail;
                        while ((o = o.next) !== a) f = o.callback, l = o.context, (t && f !== t || n && l !== n) && this.on(r, f, l);
                    }
                    return this;
                },
                trigger: function(e) {
                    var t, r, i, s, o, a, f;
                    if (!(i = this._callbacks)) return this;
                    a = i.all, e = e.split(u), f = n.call(arguments, 1);
                    while (t = e.shift()) {
                        if (r = i[t]) {
                            s = r.tail;
                            while ((r = r.next) !== s) r.callback.apply(r.context || this, f);
                        }
                        if (r = a) {
                            s = r.tail, o = [t].concat(f);
                            while ((r = r.next) !== s) r.callback.apply(r.context || this, o);
                        }
                    }
                    return this;
                }
            };
        a.bind = a.on, a.unbind = a.off;
        var f = i.Model = function(e, t) {
            var n;
            e || (e = {}), t && t.parse && (e = this.parse(e));
            if (n = C(this, "defaults")) e = s.extend({}, n, e);
            t && t.collection && (this.collection = t.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
                silent: !0
            }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments);
        };
        s.extend(f.prototype, a, {
            changed: null,
            _silent: null,
            _pending: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return s.clone(this.attributes);
            },
            get: function(e) {
                return this.attributes[e];
            },
            escape: function(e) {
                var t;
                if (t = this._escapedAttributes[e]) return t;
                var n = this.get(e);
                return this._escapedAttributes[e] = s.escape(n == null ? "" : "" + n);
            },
            has: function(e) {
                return this.get(e) != null;
            },
            set: function(e, t, n) {
                var r, i, o;
                s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n || (n = {});
                if (!r) return this;
                r instanceof f && (r = r.attributes);
                if (n.unset)
                    for (i in r) r[i] = void 0;
                if (!this._validate(r, n)) return !1;
                this.idAttribute in r && (this.id = r[this.idAttribute]);
                var u = n.changes = {},
                    a = this.attributes,
                    l = this._escapedAttributes,
                    c = this._previousAttributes || {};
                for (i in r) {
                    o = r[i];
                    if (!s.isEqual(a[i], o) || n.unset && s.has(a, i)) delete l[i], (n.silent ? this._silent : u)[i] = !0;
                    n.unset ? delete a[i] : a[i] = o, !s.isEqual(c[i], o) || s.has(a, i) != s.has(c, i) ? (this.changed[i] = o, n.silent || (this._pending[i] = !0)) : (delete this.changed[i], delete this._pending[i]);
                }
                return n.silent || this.change(n), this;
            },
            unset: function(e, t) {
                return (t || (t = {})).unset = !0, this.set(e, null, t);
            },
            clear: function(e) {
                return (e || (e = {})).unset = !0, this.set(s.clone(this.attributes), e);
            },
            fetch: function(e) {
                e = e ? s.clone(e) : {};
                var t = this,
                    n = e.success;
                return e.success = function(r, i, s) {
                    t.lastFetchTime = Date.now();
                    if (!t.set(t.parse(r, s), e)) return !1;
                    n && n(t, r);
                }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e);
            },
            save: function(e, t, n) {
                var r, o;
                s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n = n ? s.clone(n) : {};
                if (n.wait) {
                    if (!this._validate(r, n)) return !1;
                    o = s.clone(this.attributes);
                }
                var u = s.extend({}, n, {
                    silent: !0
                });
                if (r && !this.set(r, n.wait ? u : n)) return !1;
                var a = this,
                    f = n.success;
                n.success = function(e, t, i) {
                    var o = a.parse(e, i);
                    n.wait && (delete n.wait, o = s.extend(r || {}, o));
                    if (!a.set(o, n)) return !1;
                    f ? f(a, e) : a.trigger("sync", a, e, n);
                }, n.error = i.wrapError(n.error, a, n);
                var l = this.isNew() ? "create" : "update",
                    c = (this.sync || i.sync).call(this, l, this, n);
                return n.wait && this.set(o, u), c;
            },
            destroy: function(e) {
                e = e ? s.clone(e) : {};
                var t = this,
                    n = e.success,
                    r = function() {
                        t.trigger("destroy", t, t.collection, e);
                    };
                if (this.isNew()) return r(), !1;
                e.success = function(i) {
                    e.wait && r(), n ? n(t, i) : t.trigger("sync", t, i, e);
                }, e.error = i.wrapError(e.error, t, e);
                var o = (this.sync || i.sync).call(this, "delete", this, e);
                return e.wait || r(), o;
            },
            url: function() {
                var e = C(this, "urlRoot") || C(this.collection, "url") || k();
                return this.isNew() ? e : e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id);
            },
            parse: function(e, t) {
                return e;
            },
            clone: function() {
                return new this.constructor(this.attributes);
            },
            isNew: function() {
                return this.id == null;
            },
            change: function(e) {
                e || (e = {});
                var t = this._changing;
                this._changing = !0;
                for (var n in this._silent) this._pending[n] = !0;
                var r = s.extend({}, e.changes, this._silent);
                this._silent = {};
                for (var n in r) this.trigger("change:" + n, this, this.get(n), e);
                if (t) return this;
                while (!s.isEmpty(this._pending)) {
                    this._pending = {}, this.trigger("change", this, e);
                    for (var n in this.changed) {
                        if (this._pending[n] || this._silent[n]) continue;
                        delete this.changed[n];
                    }
                    this._previousAttributes = s.clone(this.attributes);
                }
                return this._changing = !1, this;
            },
            hasChanged: function(e) {
                return arguments.length ? s.has(this.changed, e) : !s.isEmpty(this.changed);
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
                var t, n = !1,
                    r = this._previousAttributes;
                for (var i in e) {
                    if (s.isEqual(r[i], t = e[i])) continue;
                    (n || (n = {}))[i] = t;
                }
                return n;
            },
            previous: function(e) {
                return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[e];
            },
            previousAttributes: function() {
                return s.clone(this._previousAttributes);
            },
            isValid: function() {
                return !this.validate(this.attributes);
            },
            _validate: function(e, t) {
                if (t.silent || !this.validate) return !0;
                e = s.extend({}, this.attributes, e);
                var n = this.validate(e, t);
                return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0;
            }
        });
        var l = i.Collection = function(e, t) {
            t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
                silent: !0,
                parse: t.parse
            });
        };
        s.extend(l.prototype, a, {
            model: f,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e);
                });
            },
            add: function(e, t) {
                var n, i, o, u, a, f, l = {},
                    c = {},
                    h = [];
                t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
                for (n = 0, o = e.length; n < o; n++) {
                    if (!(u = e[n] = this._prepareModel(e[n], t))) throw new Error("Can't add an invalid model to a collection");
                    a = u.cid, f = u.id;
                    if (l[a] || this._byCid[a] || f != null && (c[f] || this._byId[f])) {
                        h.push(n);
                        continue;
                    }
                    l[a] = c[f] = u;
                }
                n = h.length;
                while (n--) e.splice(h[n], 1);
                for (n = 0, o = e.length; n < o; n++)(u = e[n]).on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id != null && (this._byId[u.id] = u);
                this.length += o, i = t.at != null ? t.at : this.models.length, r.apply(this.models, [i, 0].concat(e)), this.comparator && this.sort({
                    silent: !0
                });
                if (t.silent) return this;
                for (n = 0, o = this.models.length; n < o; n++) {
                    if (!l[(u = this.models[n]).cid]) continue;
                    t.index = n, u.trigger("add", u, this, t);
                }
                return this;
            },
            remove: function(e, t) {
                var n, r, i, o;
                t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
                for (n = 0, r = e.length; n < r; n++) {
                    o = this.getByCid(e[n]) || this.get(e[n]);
                    if (!o) continue;
                    delete this._byId[o.id], delete this._byCid[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o);
                }
                return this;
            },
            push: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, t), e;
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t;
            },
            unshift: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, s.extend({
                    at: 0
                }, t)), e;
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t;
            },
            get: function(e) {
                return e == null ? void 0 : this._byId[e.id != null ? e.id : e];
            },
            getByCid: function(e) {
                return e && this._byCid[e.cid || e];
            },
            at: function(e) {
                return this.models[e];
            },
            where: function(e) {
                return s.isEmpty(e) ? [] : this.filter(function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0;
                });
            },
            sort: function(e) {
                e || (e = {});
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                var t = s.bind(this.comparator, this);
                return this.comparator.length == 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this;
            },
            pluck: function(e) {
                return s.map(this.models, function(t) {
                    return t.get(e);
                });
            },
            reset: function(e, t) {
                e || (e = []), t || (t = {});
                for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                return this._reset(), this.add(e, s.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), this;
            },
            fetch: function(e) {
                e = e ? s.clone(e) : {}, e.parse === undefined && (e.parse = !0);
                var t = this,
                    n = e.success;
                return e.success = function(r, i, s) {
                    t.lastFetchTime = Date.now(), t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r);
                }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync).call(this, "read", this, e);
            },
            create: function(e, t) {
                var n = this;
                t = t ? s.clone(t) : {}, e = this._prepareModel(e, t);
                if (!e) return !1;
                t.wait || n.add(e, t);
                var r = t.success;
                return t.success = function(i, s, o) {
                    t.wait && n.add(i, t), r ? r(i, s) : i.trigger("sync", e, s, t);
                }, e.save(null, t), e;
            },
            parse: function(e, t) {
                return e;
            },
            chain: function() {
                return s(this.models).chain();
            },
            _reset: function(e) {
                this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
            },
            _prepareModel: function(e, t) {
                t || (t = {});
                if (e instanceof f) e.collection || (e.collection = this);
                else {
                    var n = e;
                    t.collection = this, e = new this.model(n, t), e._validate(e.attributes, t) || (e = !1);
                }
                return e;
            },
            _removeReference: function(e) {
                this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
            },
            _onModelEvent: function(e, t, n, r) {
                if ((e == "add" || e == "remove") && n != this) return;
                e == "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments);
            }
        });
        var c = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
        s.each(c, function(e) {
            l.prototype[e] = function() {
                return s[e].apply(s, [this.models].concat(s.toArray(arguments)));
            };
        });
        var h = i.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
            },
            p = /:\w+/g,
            d = /\*\w+/g,
            v = /[-[\]{}()+?.,\\^$|#\s]/g;
        s.extend(h.prototype, a, {
            initialize: function() {},
            route: function(e, t, n) {
                return i.history || (i.history = new m), s.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), i.history.route(e, s.bind(function(r) {
                    var s = this._extractParameters(e, r);
                    n && n.apply(this, s), this.trigger.apply(this, ["route:" + t].concat(s)), i.history.trigger("route", this, t, s);
                }, this)), this;
            },
            navigate: function(e, t) {
                i.history.navigate(e, t);
            },
            _bindRoutes: function() {
                if (!this.routes) return;
                var e = [];
                for (var t in this.routes) e.unshift([t, this.routes[t]]);
                for (var n = 0, r = e.length; n < r; n++) this.route(e[n][0], e[n][1], this[e[n][1]]);
            },
            _routeToRegExp: function(e) {
                return e = e.replace(v, "\\$&").replace(p, "([^/]+)").replace(d, "(.*?)"), new RegExp("^" + e + "$");
            },
            _extractParameters: function(e, t) {
                return e.exec(t).slice(1);
            }
        });
        var m = i.History = function() {
                this.handlers = [], s.bindAll(this, "checkUrl");
            },
            g = /^[#\/]/,
            y = /msie [\w.]+/;
        m.started = !1, s.extend(m.prototype, a, {
            interval: 50,
            getHash: function(e) {
                var t = e ? e.location : window.location,
                    n = t.href.match(/#(.*)$/);
                return n ? n[1] : "";
            },
            getFragment: function(e, t) {
                if (e == null)
                    if (this._hasPushState || t) {
                        e = window.location.pathname;
                        var n = window.location.search;
                        n && (e += n);
                    } else e = this.getHash();
                return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(g, "");
            },
            start: function(e) {
                if (m.started) throw new Error("Backbone.history has already been started");
                m.started = !0, this.options = s.extend({}, {
                    root: "/"
                }, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
                var t = this.getFragment(),
                    n = document.documentMode,
                    r = y.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                r && (this.iframe = o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
                var i = window.location,
                    u = i.pathname == this.options.root;
                if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
                this._wantsPushState && this._hasPushState && u && i.hash && (this.fragment = this.getHash().replace(g, ""), window.history.replaceState({}, document.title, i.protocol + "//" + i.host + this.options.root + this.fragment));
                if (!this.options.silent) return this.loadUrl();
            },
            stop: function() {
                o(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), m.started = !1;
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                });
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                if (t == this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash());
            },
            loadUrl: function(e) {
                var t = this.fragment = this.getFragment(e),
                    n = s.any(this.handlers, function(e) {
                        if (e.route.test(t)) return e.callback(t), !0;
                    });
                return n;
            },
            navigate: function(e, t) {
                if (!m.started) return !1;
                if (!t || t === !0) t = {
                    trigger: t
                };
                var n = (e || "").replace(g, "");
                if (this.fragment == n) return;
                this._hasPushState ? (n.indexOf(this.options.root) != 0 && (n = this.options.root + n), this.fragment = n, window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n)) : this._wantsHashChange ? (this.fragment = n, this._updateHash(window.location, n, t.replace), this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, t.replace))) : window.location.assign(this.options.root + e), t.trigger && this.loadUrl(e);
            },
            _updateHash: function(e, t, n) {
                n ? e.replace(e.toString().replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t;
            }
        });
        var b = i.View = function(e) {
                this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.delegateEvents(), this.initialize.apply(this, arguments);
            },
            w = /^(\S+)\s*(.*)$/,
            E = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
        s.extend(b.prototype, a, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e);
            },
            initialize: function() {},
            render: function() {
                return this;
            },
            remove: function() {
                return this.$el.remove(), this;
            },
            make: function(e, t, n) {
                var r = document.createElement(e);
                return t && o(r).attr(t), n && o(r).html(n), r;
            },
            setElement: function(e, t) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof o ? e : o(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this;
            },
            delegateEvents: function(e) {
                if (!e && !(e = C(this, "events"))) return;
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    s.isFunction(n) || (n = this[e[t]]);
                    if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                    var r = t.match(w),
                        i = r[1],
                        o = r[2];
                    n = s.bind(n, this), i += ".delegateEvents" + this.cid, o === "" ? this.$el.bind(i, n) : this.$el.delegate(o, i, n);
                }
            },
            undelegateEvents: function() {
                this.$el.unbind(".delegateEvents" + this.cid);
            },
            _configure: function(e) {
                this.options && (e = s.extend({}, this.options, e));
                for (var t = 0, n = E.length; t < n; t++) {
                    var r = E[t];
                    e[r] && (this[r] = e[r]);
                }
                this.options = e;
            },
            _ensureElement: function() {
                if (!this.el) {
                    var e = C(this, "attributes") || {};
                    this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1);
                } else this.setElement(this.el, !1);
            }
        });
        var S = function(e, t) {
            var n = N(this, e, t);
            return n.extend = this.extend, n;
        };
        f.extend = l.extend = h.extend = b.extend = S;
        var x = {
            create: "POST",
            update: "PUT",
            "delete": "DELETE",
            read: "GET"
        };
        i.sync = function(e, t, n) {
            var r = x[e];
            n || (n = {});
            var u = {
                type: r,
                dataType: "json"
            };
            return n.url || (u.url = C(t, "url") || k()), !n.data && t && (e == "create" || e == "update") && (u.contentType = "application/json", u.data = JSON.stringify(t.toJSON())), i.emulateJSON && (u.contentType = "application/x-www-form-urlencoded", u.data = u.data ? {
                model: u.data
            } : {}), i.emulateHTTP && (r === "PUT" || r === "DELETE") && (i.emulateJSON && (u.data._method = r), u.type = "POST", u.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
            }), u.type !== "GET" && !i.emulateJSON && (u.processData = !1), o.ajax(s.extend(u, n));
        }, i.wrapError = function(e, t, n) {
            return function(r, i) {
                i = r === t ? i : r, e ? e(t, i, n) : t.trigger("error", t, i, n);
            };
        };
        var T = function() {},
            N = function(e, t, n) {
                var r;
                return t && t.hasOwnProperty("constructor") ? r = t.constructor : r = function() {
                    e.apply(this, arguments);
                }, s.extend(r, e), T.prototype = e.prototype, r.prototype = new T, t && s.extend(r.prototype, t), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r;
            },
            C = function(e, t) {
                return !e || !e[t] ? null : s.isFunction(e[t]) ? e[t]() : e[t];
            },
            k = function() {
                throw new Error('A "url" property or function must be specified');
            };
    }.call(this), define("vendor/backbone", ["vendor/underscore"], function(e) {
        return function() {
            var t, n;
            return t || e.Backbone;
        };
    }(this)), define("lib/backbone", ["require", "exports", "module", "vendor/underscore", "vendor/backbone"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("vendor/backbone");
        n.exports = i;
        var s = {
                create: "POST",
                update: "PUT",
                "delete": "DELETE",
                read: "GET"
            },
            o = function(e) {
                if (!e || !e.url) throw new Error("A 'url' property or function must be specified");
                return r.isFunction(e.url) ? e.url() : e.url;
            };
        i.setDomLibrary(window.jQuery), i.sync = function(e, t, n) {
                var i = r.extend({
                    type: s[e]
                }, n);
                return t && !i.data && (e == "create" || e == "update") && (i.data = t.attributes), i.data && i.sendAsJson && (i.data = JSON.stringify(i.data), i.contentType = "application/json;charset=utf-8"), i.url || (i.url = o(t)), i.data && delete i.data.id, $.ajax(i);
            }, i.History.prototype.getFragment = function(e) {
                var t = /\/*(?:[#?].*)?$/;
                return function() {
                    var n = e.apply(this, arguments);
                    return n.replace(t, "");
                };
            }(i.History.prototype.getFragment),
            function() {
                var e, t;
                e = function(e, t) {
                    return function() {
                        delete e._requests[t];
                    };
                }, t = function(t) {
                    return function(n) {
                        var i;
                        return n = n || {}, n.url = n.url || (r.isFunction(this.url) ? this.url() : this.url), this._requests || (this._requests = {}), i = this._requests[n.url], i ? (n.success && i.done(function(e) {
                            n.success(this, e);
                        }.bind(this)), n.error && i.fail(n.error)) : (i = this._requests[n.url] = t.call(this, n), i.always(e(this, n.url))), i;
                    };
                }, i.Model.prototype.fetch = t(i.Model.prototype.fetch), i.Collection.prototype.fetch = t(i.Collection.prototype.fetch);
            }(), i.Model.extend = i.Collection.extend = i.Router.extend = i.View.extend = function(e) {
                return function(t, n) {
                    r.isArray(t) && (t = r.extend.apply(r, [{}].concat(t)));
                    var i = e.call(this, t, n);
                    return r.invoke(i.prototype.mixins, "applyTo", i.prototype), i;
                };
            }(i.View.extend), i.Collection.prototype.add = function(e, t) {
                var n, i, s, o, u, a, f = {},
                    l = {},
                    c, h;
                t || (t = {}), e = r.isArray(e) ? e.slice() : [e];
                for (n = e.length; n--;) {
                    c = !1;
                    if (!(o = e[n] = this._prepareModel(e[n], t))) __DEBUG_WARNINGS__ && window.console.warn("Can't add an invalid model to a collection"), c = !0;
                    else if (f[u = o.cid] || this._byCid[u] || (a = o.id) !== null && a !== h && (l[a] || this._byId[a])) __DEBUG_WARNINGS__ && window.console.warn("Can't add the same model to a collection twice %o %o", o, this), o.release(), c = !0;
                    c ? e.splice(n, 1) : f[u] = l[a] = o;
                }
                for (n = 0, s = e.length; n < s; n++)(o = e[n]).on("all", this._onModelEvent, this), this._byCid[o.cid] = o, o.id !== null && o.id !== h && (this._byId[o.id] = o);
                this.length += s, i = t.at !== null && t.at !== h ? t.at : this.models.length, Array.prototype.splice.apply(this.models, [i, 0].concat(e)), this.comparator && this.sort({
                    silent: !0
                });
                if (t.silent) return this;
                for (n = 0, s = this.models.length; n < s; n++) f[(o = this.models[n]).cid] && (t.index = n, o.trigger("add", o, this, t));
                return this;
            };
    }), define("app", ["require", "exports", "module", "vendor/underscore", "config/env"], function(e, t, n) {
        function s() {
            return this instanceof s ? (r.extend(this, i), this) : new s(arguments);
        }
        var r = e("vendor/underscore"),
            i = e("config/env");
        n.exports = window.Deck ? window.Deck : window.Deck = new s;
    }), define("views/page-container-view", ["require", "exports", "module", "vendor/underscore", "lib/backbone"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = e("lib/backbone");
        r = n.exports = s.View.extend({
            initialize: function() {
                i.bindAll(this, "render", "clean", "appendPage", "switchTo"), this.collection = new s.Collection, this.collection.bind("add", this.appendPage), this.model = new s.Model({
                    current: null,
                    previous: null
                }), this.model.bind("change:current", this.render), this.showShadows();
            },
            events: {
                "click .back-to-top": "scrollTo"
            },
            clean: function() {
                i.each(this.collection.models, function(e) {
                    $(e.get("view").el).remove();
                }), this.collection.reset(), this.model.set({
                    current: null
                });
            },
            appendPage: function(e) {
                var t = e.get("view");
                $(this.el).append(t.el), t.trigger("appended");
            },
            switchTo: function(e, t, n) {
                window.scrollTo(0, 1), n = n || {};
                var r = this.model.get("current"),
                    o = this.collection.get(r),
                    u = o && o.get("view");
                u && u.disposeOnLeave && (u._dispose(), this.collection.remove(r));
                var a, f = this.collection.get(e);
                return f && (a = f.get("view"), n && a.controller && a.controller.set(n)), a || (a = new t(i.extend(n, {
                    tagName: "div",
                    id: e
                })), this.collection.add({
                    view: a,
                    id: e
                })), this.model.set({
                    current: e
                }), a.options && a.options instanceof s.Model && a.options.set(n), a;
            },
            render: function() {
                var e = this.collection.get(this.model.get("current")),
                    t = this.collection.get(this.model.get("previous"));
                return t && $(t.get("view").el).hide(), e && $(e.get("view").el).show(), this.model.set({
                    previous: this.model.get("current")
                }), this;
            },
            scrollTo: function(e) {
                var t = 0;
                typeof e == "string" && $("#" + e) && (t = $("#" + e).offset().top - 75), $.scrollTo(t);
            },
            showShadows: function() {
                $(window).scroll(function() {
                    this.$(".shadow").toggle(window.pageYOffset > 0);
                });
            }
        });
    }), define("views/stateful-view", ["require", "exports", "module", "vendor/underscore", "lib/backbone"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = {};
        n.exports = s = i.View.extend({
            triggerStateChange: function() {
                var e = this.model.get("state");
                this.states[e] && this[e]();
            },
            delegateEvents: function(e) {
                var t = function(e, t) {
                    var n = t === undefined ? [] : r.uniq(r.keys(t)),
                        i = null,
                        s = function(e) {
                            return r.map(r.uniq(e), function(e) {
                                return '[data-state*="' + e + '"]';
                            }).join();
                        },
                        o = function(t, o) {
                            var u = this.states[i],
                                a = this.states[o],
                                f;
                            u !== undefined && typeof u.onExit == "function" && u.onExit.apply(e, [r.without(n, i)]), u !== undefined && $(this.el).removeClass(i + "-state-on"), a !== undefined && (f = r.without(n, o), $(this.el).addClass(o + "-state-on"), typeof a.hide != "boolean" && a.hide !== !1 && (this.$(s(f)).addClass("hide"), this.$(s([o])).removeClass("hide"))), i = o, a !== undefined && typeof a.onEnter == "function" && a.onEnter.apply(e, [t, f]);
                        };
                    r.each(n, function(t) {
                        e[t] = function(n) {
                            n && typeof n.preventDefault == "function" && n.preventDefault(), o.apply(e, [n, t]);
                        };
                    }), this.selector = s, this.all = n;
                };
                this.state = new t(this, this.states), i.View.prototype.delegateEvents.call(this, e);
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/terms-of-use"] = function(obj) {
            var __p = [],
                print = function() {
                    __p.push.apply(__p, arguments);
                };
            with(obj || {}) __p.push('<!-- update env.js after updating this file. -->\n<div class="l-header header">\n  <h2>SoundCloud DECK Terms of Use</h2>\n  <div class="shadow"></div>\n</div>\n<div class="section">\n\n<p>\n  Welcome to SoundCloud Deck, a service provided\n  by SoundCloud Limited (&ldquo;<strong>SoundCloud</strong>&rdquo;,\n  &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>our</strong>&rdquo;,\n  &ldquo;<strong>us</strong>&rdquo;).\n</p>\n\n<p>\n  These Terms of Use govern your use of the\n  SoundCloud Deck portal at deck.soundclound.com (the\n  &ldquo;<strong>Portal</strong>&rdquo;), and the tools provided and accessible\n  within the Portal (the &ldquo;<strong>Tools</strong>&rdquo;). These Terms\n  of Use do not govern your use of soundcloud.com, or any related players,\n  widgets, tools, apps, data, software, APIs or other services\n  (together, the &ldquo;<strong>Platform</strong>&rdquo;). Any use that you\n  make of the Platform is governed by separate\n  <a href="http://soundcloud.com/terms-of-use">Terms of Use</a>\n  (&ldquo;<strong>Platform Terms</strong>&rdquo;).\n</p>\n<p>\n  By accepting these Terms of Use you create a\n  legally binding agreement (the &ldquo;<strong>Agreement</strong>&rdquo;)\n  between you and SoundCloud in relation to your use of the Portal and each\n  of the Tools to which you are provided access via the Portal\n  (together, &ldquo;<strong>SoundCloud Deck</strong>&rdquo;).\n</p>\n<p>\n  Please note that SoundCloud is headquartered in Berlin, Germany and its\n  services are provided according to German law.\n</p>\n\n<h3>Acceptance of Terms of Use</h3>\n<p>\n  By accepting these Terms of Use, you create a legally\n  binding Agreement.  By doing so, you represent and warrant to SoundCloud\n  that: (i) you have read and understood these Terms of Use and will abide by\n  them, and (ii) you are a duly authorised representative of any company or\n  organisation on whose behalf you will be accessing and using SoundCloud DECK,\n  and that you are entitled to enter into legal agreements and to create legal\n  obligations on behalf of such company or organisation.\n</p>\n\n<h3>Changes to Terms of Use</h3>\n<p>\n  We reserve the right to change, alter, replace or otherwise\n  modify these Terms of Use at any time. Any material change to these Terms of\n  Use will be notified to you at least thirty (30) prior to the date on which\n  such changes are due to take effect, and if you choose not to terminate this\n  Agreement within such thirty (30) day period, your continued use of SoundCloud\n  DECK after the expiry of such thirty (30) day period will constitute your\n  acceptance of such revised Terms of Use and a valid modification to this\n  Agreement.\n</p>\n\n<h3>Description of SoundCloud Deck</h3>\n<p>\n  Your SoundCloud DECK account provides you with access to\n  certain web-based Tools, which enable you to manage the availability on the\n  Platform of any audio content to which you own or control the relevant rights\n  (&ldquo;Your Content&rdquo;) and to retrieve information and data about Your\n  Content.\n</p>\n\n<p>\n  The Tools available within your SoundCloud DECK account shall\n  include one or more of the following tools, as determined by SoundCloud\n  (&ldquo;Your Toolset&rdquo;):\n</p>\n\n<ol style="list-style-type: lower-roman">\n  <li>\n    the &ldquo;Accounts Tool&rdquo;, which provides an aggregated overview of\n    all SoundCloud accounts within your Account Portfolio, and includes the\n    following Tool:\n    <ol style="list-style-type: lower-alpha">\n      <li>\n        the &ldquo;Whitelist Tool&rdquo;, which enables you to authorize\n        individual third party users of the Platform (including, without\n        limitation, users affiliated with you, PR agencies appointed by you,\n        recognised bloggers or other third parties to whom you distribute Your\n        Content for publicity purposes) (&ldquo;Authorised Third\n        Parties&rdquo;), to upload Your Content or selected items from Your\n        Content to their nominated user account on the Platform, and to store,\n        distribute, send, transmit, display, perform, make available or\n        otherwise communicate to the public Your Content or selected items from\n        Your Content  via that account in accordance with the Platform Terms (to\n        &ldquo;Whitelist&rdquo;, with each user account so Whitelisted being a\n        &ldquo;Whitelisted Account&rdquo;), regardless of whether the\n        authorisation applies to all of Your Content or selected items);\n      </li>\n    </ol>\n  </li>\n  <li>\n    the &ldquo;Take Down Tool&rdquo;, which enables you to remove items of Your\n    Content from the Platform where such items of Your Content have been\n    uploaded without your authorisation or a valid basis for use under\n    applicable laws, as the case may be (to &ldquo;Take Down&rdquo;, with each\n    such action being a &ldquo;Take Down&rdquo;); and\n  </li>\n  <li>\n    the &ldquo;Content Management Tool&rdquo;, which, if you deliver digital\n    fingerprints or reference files to SoundCloud for the purposes of content\n    identification and filtering, including the following Tools:\n    <ol style="list-style-type: lower-alpha">\n      <li>\n        a search tool, enabling you to review and search for content previous\n        delivered and ingested into SoundCloud&#8217;s proprietary content\n        identification system; and\n      </li>\n      <li>\n        the &ldquo;Emergency Upload Tool&rdquo;, which enables you to upload\n        individual reference files and associated metadata, and to have such\n        individual files fingerprinted and ingested directly into\n        SoundCloud&#8217;s proprietary content identification system, on a\n        timely basis, without having to wait for ingestion through your usual\n        digital supply chain.\n      </li>\n    </ol>\n  </li>\n</ol>\n<p>\n  We may, from time to time, release new Tools and/or services and features of\n  the Portal. Any new Tools, services and features will be subject to these\n  Terms of Use as well as any additional terms of use that we may release for\n  those specific Tools, services or features.\n</p>\n\n\n<h3>Your SoundCloud DECK Account</h3>\n<p>\n  You are solely responsible for maintaining the confidentiality and security of\n  your SoundCloud DECK username and password.  You will remain responsible for\n  all use of your username and password, and all activity emanating from your\n  SoundCloud DECK account, whether or not such activity was authorized by you.\n  SoundCloud shall have no liability for any unauthorized activity emanating\n  from your SoundCloud DECK account.\n</p>\n<p>\n  If your username or password is lost or stolen, or if you believe that your\n  account has been accessed by unauthorized third parties, you must notify\n  SoundCloud immediately.\n</p>\n\n<h3>Your Use of SoundCloud DECK</h3>\n<p>\n  Subject to your strict compliance with these Terms of Use, SoundCloud grants\n  you a limited, personal, non-exclusive, revocable, non-assignable and\n  non-transferable right and licence to access the Portal and use Your Toolset\n  for the following purposes:\n</p>\n<ol style="list-style-type: lower-roman">\n  <li>\n    if Your Toolset includes the Whitelist Tool, you may use the Whitelist Tool\n    to Whitelist Authorised Third Parties, and to revoke any Whitelist status\n    previous afforded by you to any Authorised Third Party;\n  </li>\n  <li>\n    if Your Toolset includes the Take Down Tool, you may use the Take Down Tool\n    to Take Down items of Your Content from the Platform where such items of\n    Your Content have been uploaded without your authorisation or a valid basis\n    for use under applicable laws, as the case may be; and\n  </li>\n  <li>\n    if Your Toolset includes the Emergency Upload Tool, you may use the\n    Emergency Upload Tool to upload items of Your Content for the purposes of\n    fingerprinting and ingestion into SoundCloud&#8217;s proprietary content\n    identification system.\n  </li>\n</ol>\n<p>\n  The above licences are conditional upon your strict compliance with these\n  Terms of Use, including without limitation, the following:\n</p>\n<p>\n  With respect to the Whitelist Tool:\n</p>\n<ol style="list-style-type: lower-alpha">\n  <li>\n    You must not use the Whitelist Tool to Whitelist users unless such users are\n    Authorised Third Parties, and you must revoke such users&#8217; Whitelist\n    status as soon as such users cease to be Authorised Third Parties.\n  </li>\n  <li>\n    You must not revoke the Whitelist status of any Whitelisted user unless such\n    user&#8217;s Whitelist status was granted by you and such user has ceased to\n    be an Authorised Third Party.\n  </li>\n</ol>\n<p>\n  With respect to the Take Down Tool:\n</p>\n<ol style="list-style-type: lower-alpha" start="4">\n  <li>\n    You must not use the Take Down Tool to Take Down any content, or permit or\n    authorize others to Take Down any content, other than content to which you\n    own or control the relevant rights, and where such  content has been\n    uploaded without your authorisation or a valid basis for use under\n    applicable laws, as the case may be.\n  </li>\n  <li>\n    By using the Take Down Tool, you represent, warrant and covenant that each\n    Take Down initiated by you will constitute your representation, warranty,\n    covenant and agreement that you have the full right, power and authority to\n    Take Down the content concerned, free of any and all claims and contrary\n    assertions made by or on behalf of any person or entity (including, for the\n    avoidance of doubt and without limitation, the user that originally uploaded\n    the content, and any of your affiliates and associated entities) whether\n    such claims or contrary assertions are made in the form of a counter\n    notification under the United States Digital Millennium Copyright Act 17\n    U.S.C §512(g) (and any successor and reasonably analogous or equivalent\n    laws, rules or regulations, whether under state law, federal law or\n    otherwise, anywhere in the world), or otherwise.\n  </li>\n  <li>\n    Where any user of the Platform files a counter-notification or otherwise\n    makes a reasonable case that any Take Down initiated by you is the result of\n    a mistake or misidentification of Your Content or is otherwise erroneous\n    (for example, because such user owns and/or controls the necessary rights in\n    and to the materials embodied in the content concerned, the use of such\n    content is not infringing, such content is being made under the\n    authorization of the copyright owner or his authorized agent and/or the\n    relevant content may be used without authorization from the copyright owner\n    e.g. pursuant to statutory licence, statutory safe harbours, or reliance on\n    any bona fide legal doctrines recognized as exceptions or exclusions from\n    infringement liability under applicable laws) (&ldquo;Dispute&rdquo;),\n    SoundCloud will notify you of such Dispute (&ldquo;Dispute\n    Notification&rdquo;). Where the relevant user has made a bona fide case that\n    the Take Down was the result of a mistake or misidentification of Your\n    Content or is otherwise erroneous as described above, you undertake to\n    notify SoundCloud promptly (and in any event within 8 business days of\n    SoundCloud&#8217;s Dispute Notification), either (i) that you have filed an\n    action seeking a court order to restrain the user from continuing to make\n    the relevant content available on the Platform, and SoundCloud should\n    continue to maintain the Take Down of the content concerned (in which case,\n    the &ldquo;Indemnification&rdquo; section below, shall continue in full\n    force and effect); or (ii) that SoundCloud reinstates the content concerned\n    (in which case, if reinstated by SoundCloud, your representation and\n    warranty in paragraph (d) above, and your indemnification obligation in the\n    &ldquo;Indemnification&rdquo; section below, shall cease to apply with\n    respect to that content only, on a prospective basis). If you do not notify\n    SoundCloud as described above within 8 business days of SoundCloud&#8217;s\n    Dispute Notification, SoundCloud reserves the right to republish the\n    relevant content. You hereby acknowledge that the foregoing is a fair and\n    reasonable process that recognizes the legitimate interests of you and other\n    SoundCloud users, and consequently you irrevocably waive the right to assert\n    any claim against SoundCloud or any of its subsidiaries, affiliates,\n    successors, assigns, employees, agents, directors, officers or shareholders\n    with respect to any republication of Your Content by SoundCloud following\n    the process outlined above.\n  </li>\n</ol>\n<p>\n  With respect to the Emergency Upload Tool:\n</p>\n<ol style="list-style-type: lower-alpha" start="8">\n  <li>\n    You must only use the Emergency Upload Tool to upload content to which you\n    own or control all relevant rights, and with respect to which you are\n    authorized to block or authorize distribution by others.\n  </li>\n  <li>\n    You must ensure that all of Your Content uploaded using the Emergency Upload\n    tool is accompanied by full, complete and accurate metadata, including at a\n    minimum, artist name, track title and label, and where available, ISRC and\n    ICPN numbers and any separate release title.\n  </li>\n  <li>\n    You must ensure that any item of Your Content that is uploaded via the\n    Emergency Upload Tool is also delivered to SoundCloud via your usual digital\n    supply chain within sixty (60) days of upload via the Emergency Upload Tool.\n  </li>\n</ol>\n<p>\n  With respect to all Tools and all other use of SoundCloud DECK:\n</p>\n<ol style="list-style-type: lower-alpha" start="11">\n  <li>\n    You must not use or attempt to use or discover any other person&#8217;s\n    SoundCloud DECK account login, password, or other information, and must not\n    access or attempt to access any other person&#8217;s SoundCloud DECK\n    account,  unless you have express permission from that other person.\n  </li>\n  <li>\n    You must not, and must not permit any third party to, copy or adapt the\n    object code of the Portal or any of the Tools,  or reverse engineer, reverse\n    assemble, decompile, modify or attempt to discover any source or object code\n    of any part of Portal or the Tools.\n  </li>\n  <li>\n    You must not violate, circumvent or attempt to violate or circumvent any\n    data security measures employed by SoundCloud; access or attempt to access\n    data or materials which are not intended for your use;  log into, or attempt\n    to log into, a server or account which you are not authorized to access;\n    attempt to scan or test the vulnerability of SoundCloud&#8217;s servers,\n    system or network or attempt to breach SoundCloud&#8217;s data security or\n    authentication measures; attempt to interfere with the Website or the Tools\n    provided to any user, host or network, by any means including, without\n    limitation, hacking SoundCloud&#8217;s servers or systems, submitting a\n    virus, overloading, mail-bombing or crashing. Without limitation to any\n    other rights or remedies of SoundCloud under these Terms of Use, SoundCloud\n    reserves the right to investigate any situation that appears to involve any\n    of the above, and may report such matters to, and co-operate with,\n    appropriate law enforcement authorities in prosecuting any users who have\n    participated in any such violations.\n  </li>\n</ol>\n<p>\n  You hereby represent, warrant and agree that you will comply with the above\n  conditions, and acknowledge and agree that SoundCloud has the right, in its\n  sole discretion, to terminate your SoundCloud DECK account or take such other\n  action as we see fit if you breach the above conditions or any of the other\n  terms of these Terms of Use.\n</p>\n\n<h3>Liability for Content</h3>\n<p>\n  You hereby acknowledge and agree that (i) SoundCloud stores audio, text,\n  photos, pictures, graphics, comments, and other content, data or information\n  (&ldquo;Content&rdquo;) at the direction, request and with the authorisation\n  of its users, (ii) acts merely as a passive conduit and/or host for the\n  uploading, storage and distribution of such Content, and (iii) plays no active\n  role in the presentation or use of the Content. To the extent permissible by\n  law, SoundCloud excludes all liability with respect to all Content on the\n  Platform and the activities of its users.\n</p>\n<p>\n  You hereby acknowledge and agree that SoundCloud cannot and does not review\n  the Content created or uploaded by its users, and neither SoundCloud nor its\n  subsidiaries, successors, assigns, employees, agents, directors, officers and\n  shareholders has any obligation, and does not undertake or assume any duty, to\n  monitor the Platform for Content that is inappropriate, that does or might\n  infringe any third party rights, or has otherwise been uploaded in breach of\n  the Platform or applicable law. The fact that (i) SoundCloud provides you with\n  access to SoundCloud DECK to enable you to better monitor, control and manage\n  the availability of Your Content on the Platform, and (ii) SoundCloud uses\n  automated content identification technology to match and block known\n  copyrighted works from appearing on the Platform without authorization, does\n  not and shall not create, or be deemed or construed as creating, any liability\n  or obligation on the part of SoundCloud or its subsidiaries, successors,\n  assigns, employees, agents, directors, officers and shareholders to monitor\n  the Platform as aforesaid, or otherwise increase or limit either party&#8217;s\n  rights, obligations or limitations of liability under the United States\n  Digital Millennium Copyright Act U.S.C. 17 §512, the European E-Commerce\n  Directive 2000/31/EC, or similar legislation anywhere in the world.\n</p>\n<p>\n  With respect to the Emergency Upload Tool, you acknowledge that such Tool is\n  intended to provide a short term solution to ensure timely ingestion of\n  individual items of Your Content in specific situations where delivery of that\n  content via your established supply chain is not appropriate. The Emergency\n  Upload Tool is not intended to replace or supersede delivery and ingestion of\n  Your Content through your established supply chain. You acknowledge that any\n  reference files of Your Content and/or fingerprints thereof uploaded via the\n  Emergency Upload Tool will be deleted after sixty (60) days and it is your\n  sole responsibility to ensure that the same are replaced prior to such\n  deletion by delivery of the relevant item(s) of Your Content to SoundCloud for\n  ingestion via your established digital supply chain. Without limitation to the\n  Disclaimer and/or Limitation of Liability sections below, SoundCloud shall\n  have no liability to you for any failure to block any unauthorized uploads of\n  Your Content as the result of any failure to deliver replacement files within\n  such sixty (60) day period.\n</p>\n<p>\n  SoundCloud and its subsidiaries, affiliates, successors, assigns, employees,\n  agents, directors, officers and shareholders hereby exclude, to the fullest\n  extent permitted by law, any and all liability which may arise from any\n  Content uploaded to the Platform by users, including, but not limited to, any\n  claims for infringement of intellectual property rights, rights of privacy or\n  publicity rights, any claims relating to publication of defamatory,\n  pornographic, illegal, obscene or offensive material, or any claims relating\n  to the completeness, accuracy, currency or reliability of any information\n  provided by users on the Platform. By accessing and using SoundCloud DECK, you\n  irrevocably waive the right to assert any claim with respect to any of the\n  foregoing against SoundCloud or any of its subsidiaries, affiliates,\n  successors, assigns, employees, agents, directors, officers or shareholders.\n</p>\n\n<h3>Disclaimer</h3>\n<p>\n  THE PORTAL AND THE TOOLS ARE PROVIDED &ldquo;AS IS&rdquo;, &ldquo;AS\n  AVAILABLE&rdquo;, AND &ldquo;WITH ALL FAULTS&rdquo;.\n</p>\n<p>\n  WHILST SOUNDCLOUD USES ALL REASONABLE ENDEAVOURS TO CORRECT ANY ERRORS OR\n  OMISSIONS ON THEPLATFORM AND WITHIN SOUNDCLOUD DECK AS SOON AS PRACTICABLE\n  ONCE THE HAVE BEEN BROUGHT TO SOUNDCLOUD&#8217;S ATTENTION, SOUNDCLOUD MAKE NO\n  GUARANTEES, REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER (EXPRESS OR\n  IMPLIED) REGARDING THE PORTAL, THE TOOLS OR ANY PART OR PARTS THEREOF.\n  SOUNDCLOUD DOES NOT WARRANT THAT YOUR USE OF SOUNDCLOUD DECK WILL BE\n  UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED,\n  OR THAT THE PORTAL, THE TOOLS, ANY PART OR PARTS THEREOF, OR THE SERVERS ON\n  WHICH THE VARIOUS PARTS OF SOUNDCLOUD DECK OPERATE ARE OR WILL BE FREE OF\n  VIRUSES OR OTHER HARMFUL COMPONENTS.\n</p>\n<p>\n  SOUNDCLOUD AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, ASSIGNS, EMPLOYEES,\n  AGENTS, DIRECTORS, OFFICERS AND SHAREHOLDERS SPECIFICALLY DISCLAIM ALL OF THE\n  FOREGOING WARRANTIES TO THE FULLEST EXTENT PERMITTED BY LAW, TOGETHER WITH ANY\n  EXPRESS OR IMPLIED WARRANTIES REGARDING NON-INFRINGEMENT, MERCHANTABILITY AND\n  FITNESS FOR A PARTICULAR PURPOSE.\n</p>\n<p>\n  WHERE THE LAW OF ANY JURISDICTION LIMITS OR PROHIBITS THE DISCLAIMER OF\n  IMPLIED OR OTHER WARRANTIES AS SET OUT ABOVE, THE ABOVE DISCLAIMERS SHALL NOT\n  APPLY TO THE EXTENT THAT THE LAW OF SUCH JURISDICTION APPLIES TO THIS\n  AGREEMENT.\n</p>\n\n<h3>Limitation of Liability</h3>\n<p>\n  IF YOU ARE DISSATISFIED WITH THE PORTAL OR ANY OF THE TOOLS, YOU SHOULD\n  DISCONTINUE ACCESSING AND USING SOUNDCLOUD DECK. IN NO EVENT SHALL\n  SOUNDCLOUD&#8217;S AGGREGATE LIABILITY TO YOU UNDER THIS AGREEMENT EXCEED THE\n  GREATER OF 100 EURO OR THE AMOUNTS (IF ANY) PAID BY YOU TO SOUNDCLOUD DURING\n  THE PREVIOUS SIX MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM.\n</p>\n<p>\n  SOUNDCLOUD AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS, AND\n  THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND SHAREHOLDERS SHALL\n  HAVE NO LIABILITY FOR:\n</p>\n<ol style="list-style-type: lower-roman">\n  <li>\n    ANY LOSS OR DAMAGE ARISING FROM:\n    <ol style="list-style-type: lower-alpha">\n      <li>\n        YOUR INABILITY TO ACCESS OR USE THE PORTAL OR ANY OF THE TOOLS OR ANY\n        PART OR PARTS THEREOF;\n      </li>\n      <li>\n        ANY CHANGES THAT SOUNDCLOUD MAY MAKE TO THE PORTAL OR THE TOOLS OR ANY\n        PART OR PARTS THEREOF;\n      </li>\n      <li>\n        ANY ERRORS OR OMISSIONS IN THE TECHNICAL OPERATION OF THE PORTAL OR THE\n        TOOLS, OR FROM ANY INACCURACY OR DEFECT IN ANY PART OF SOUNDCLOUD DECK;\n      </li>\n      <li>\n        YOUR FAILURE TO PROVIDE SOUNDCLOUD WITH ACCURATE OR COMPLETE\n        INFORMATION, OR YOUR FAILURE TO KEEP YOUR USERNAME OR PASSWORD SUITABLY\n        CONFIDENTIAL;\n      </li>\n      <li>\n        THE AVAILABILITY ON THE PLATFORM OF ANY CONTENT THAT CONTAINS OR\n        REPRESENTS AN UNAUTHORISED USE OF YOUR CONTENT WHERE SUCH CONTENT HAS\n        BEEN UPLOADED BY A USER TO WHOM YOU HAVE GRANTED WHITELIST STATUS, OR\n        WHERE SUCH CONTENT IS AVAILABLE ON THE PLATFORM AS THE RESULT OF\n        REPUBLICATION BY SOUNDCLOUD FOLLOWING THE DISPUTES PROCESS OUTLINED IN\n        PARAGRAPH (E) OF THE &ldquo;YOUR USE OF SOUNDCLOUD DECK&rdquo; SECTION\n        ABOVE, OR WHERE SOUNDCLOUD HAS PROVIDED YOU WITH THE MEANS TO TAKE DOWN,\n        OR EFFECT A REQUEST FOR THE TAKE DOWN OF SUCH CONTENT (THROUGH THE\n        PROVISION OF THE TOOLS OR OTHERWISE), WHETHER OR NOT YOU ACTUALLY\n        IDENTIFY AND/OR TAKE DOWN SUCH CONTENT;\n      </li>\n    </ol>\n  </li>\n  <li>\n    ANY LOSS OR DAMAGE TO ANY COMPUTER HARDWARE OR SOFTWARE, ANY LOSS OF DATA,\n    OR ANY LOSS OR DAMAGE FROM ANY SECURITY BREACH; AND/OR\n  </li>\n  <li>\n    ANY LOSS OF PROFITS, LOSS OF OPPORTUNITY, OR ANY SPECIAL, DIRECT, INDIRECT,\n    INCIDENTAL, EXEMPLARY, ECONOMIC, PUNITIVE, OR CONSEQUENTIAL DAMAGES\n    WHATSOEVER, WHETHER OR NOT SUCH LOSS OR DAMAGE IS FORESEEABLE, AND WHETHER\n    OR NOT SOUNDCLOUD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR\n    DAMAGE.\n  </li>\n</ol>\n\n<p>\n  YOU AGREE THAT REGARDLESS OF ANY STATUTE OR LAW TO THE CONTRARY, ANY CLAIM OR\n  CAUSE OF ACTION ARISING OUT OF OR RELATED TO YOUR USE OF THE PORTAL OR THE\n  TOOLS MUST BE FILED WITHIN ONE (1) YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION\n  AROSE.\n</p>\n<p>\n  NOTHING IN THESE TERMS OF USE LIMITS OR EXCLUDES THE LIABILITY OF SOUNDCLOUD,\n  ITS SUBSIDIARIES, SUCCESSORS, ASSIGNS, OR THEIR RESPECTIVE EMPLOYEES, AGENTS,\n  DIRECTORS, OFFICERS AND/OR SHAREHOLDERS FOR ANY DEATH OR PERSONAL INJURY\n  CAUSED BY ITS OR THEIR NEGLIGENCE, FOR ANY FORM OF FRAUD OR DECEIT, OR FOR ANY\n  FORM OF LIABILITY WHICH CANNOT BE LIMITED OR EXCLUDED BY LAW.\n</p>\n<p>\n  ADDITIONALLY, APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF\n  LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR\n  EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH CASES, YOU ACKNOWLEDGE AND AGREE THAT\n  SUCH LIMITATIONS AND EXCLUSIONS REFLECT A REASONABLE AND FAIR ALLOCATION OF\n  RISK BETWEEN YOU AND SOUNDCLOUD AND ARE FUNDAMENTAL ELEMENTS OF THE BARGAIN\n  BETWEEN YOU AND SOUNDCLOUD, AND THAT SOUNDCLOUD&#8217;S LIABILITY WILL BE\n  LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.\n</p>\n\n<h3>Indemnification</h3>\n<p>\n  You hereby agree to indemnify, defend and hold harmless SoundCloud, its\n  successors, assigns, affiliates, agents, directors, officers, employees,\n  shareholders, licensors, licensees and users from and against any and all\n  claims, obligations, damages, losses, expenses, and costs, including\n  reasonable attorneys\' fees, resulting from:\n</p>\n<ol style="list-style-type: lower-roman">\n  <li>\n    any violation by you of this Agreement, including without limitation,\n    paragraphs (a)-(h) in the Your Use of SoundCloud DECK section above; and\n  </li>\n  <li>\n    any activity related to your SoundCloud DECK account, be it by you or by any\n    other person accessing your account with or without your consent.\n  </li>\n</ol>\n\n<h3>Confidentiality</h3>\n<p>\n  All data and information provided to and accessible by you within your\n  SoundCloud DECK account is provided for your internal use only. By accessing\n  such information you agree that such information will not be publicly\n  disclosed without the prior written approval of SoundCloud.\n</p>\n\n<h3>Data Protection and Privacy</h3>\n<p>\n  All personal data that you provide to us in connection with your use of\n  SoundCloud DECK is collected, stored, used and disclosed by SoundCloud in\n  accordance with our <a href="http://soundcloud.com/pages/privacy">Privacy\n  Policy</a>. By accepting these Terms of Use and using SoundCloud DECK, you\n  also accept the terms of that\n  <a href="http://soundcloud.com/pages/privacy">Privacy Policy</a>.\n</p>\n\n<h3>Termination</h3>\n<p>\n  You may terminate this Agreement at any time by sending notice in writing to\n  SoundCloud at Rheinsberger Str. 76/77, 10115 Berlin, Germany confirming such\n  termination, and thereafter by ceasing to use SoundCloud DECK.\n</p>\n<p>\n  SoundCloud may suspend your use of SoundCloud DECK and/or terminate this\n  Agreement at any time (i) if you are in breach of any of the material\n  provisions of these Terms of Use, (ii) you cease to be a registered user of\n  the Platform, or (iii) in other reasonable circumstances as determined by\n  SoundCloud at its discretion.\n</p>\n\n<h3>Assignment to Third Parties</h3>\n<p>\n  SoundCloud may assign its rights and (where permissible by law) its\n  obligations under this Agreement, in whole or in part, to any third party at\n  any time without notice, including without limitation, to any person or entity\n  acquiring all or substantially all of the assets or business of SoundCloud.\n  You may not assign this Agreement or the rights and duties hereunder, in whole\n  or in part, to any third party without the prior written consent of\n  SoundCloud.\n</p>\n\n<h3>Severability </h3>\n<p>\n  Should one or more provisions of these Terms of Use be found to be unlawful,\n  void or unenforceable, such provision(s) shall be deemed severable and will\n  not affect the validity and/or enforceability of the remaining provisions of\n  this Agreement, which will remain in full force and effect.\n</p>\n\n<h3>Entire Agreement</h3>\n<p>\n  This Agreement constitutes the entire agreement between you and SoundCloud\n  with respect to your use of the Portal and the Tools, and supersedes any prior\n  agreement between you and SoundCloud with respect to the same. Any\n  modifications to this Agreement must be made in writing.\n</p>\n\n<h3>Third Party Rights</h3>\n<p>\n  This Agreement is not intended to give rights to anyone except you and\n  SoundCloud. This does not affect our right to transfer our rights or\n  obligations to a third party as described in the Assignment to Third Parties\n  section above.\n</p>\n\n<h3>Applicable Law and Jurisdiction</h3>\n<p>\n  Except where otherwise required by the mandatory law of the United States or\n  any member state of the European Union, all disputes arising out of or related\n  to this Agreement shall be resolved and finally settled exclusively by binding\n  arbitration under the Rules of Arbitration of the International Chamber\n  Commerce by one or more arbitrators appointed in accordance with ICC rules.\n  The location for the arbitration shall be Berlin, Germany. This contract shall\n  be construed in accordance with the laws of Germany, without reference to any\n  jurisdiction&#8217;s choice of law principles, and the arbitral tribunal shall\n  apply the laws of Germany to the merits of any dispute arising out of or in\n  connection with this Agreement. The arbitrator or arbitrators appointed in\n  accordance with ICC rules, and not any federal, state, or local court or\n  agency, shall have exclusive authority to resolve any dispute relating to the\n  interpretation, applicability, enforceability or formation of the present\n  contract including, but not limited to any claim that all or any part of the\n  present contract is void or voidable.\n</p>\n<p>\n  The foregoing provisions of this Applicable Law and Jurisdiction section do\n  not apply to any claim in which SoundCloud seeks equitable relief of any kind.\n  You acknowledge that, in the event of a breach of this Agreement by SoundCloud\n  or any third party, the damage or harm, if any, caused to  you will not\n  entitle you to seek injunctive or other equitable relief against SoundCloud,\n  including with respect to Your Content, and your only remedy shall be for\n  monetary damages, subject to the limitations of liability set forth in these\n  Terms of Use.\n</p>\n\n<h3>Disclosures</h3>\n<p>\n  The services hereunder are offered by SoundCloud Limited, located at\n  Rheinsberger Str. 76/77, 10115 Berlin, Germany. More information about\n  SoundCloud is available here. You may contact us by sending correspondence to\n  the foregoing address or by emailing us at contact@soundcloud.com. If you are\n  a resident of the State of California, you may have these Terms of Use mailed\n  to you electronically by sending a letter to the foregoing address with your\n  electronic mail address and a request for these Terms of Use.\n</p>\n\n<p>\n  Date: &nbsp;21 July 2014\n</p>\n\n</div> <!-- section -->\n');
            return __p.join("");
        };
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/content-management/ingestions-welcome"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["content-management/ingestions-welcome"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<div class="l-header header">\n  <h2>Content Management</h2>\n  <div class="shadow"></div>\n</div>\n\n<div class="section">\n\n  <p>\n    Your content feed is not activated yet.<br>\n    Please\n    <a href="mailto:content-operations@soundcloud.com?subject=Deck Contact: SoundCloud Content Operations" target="_blank">get in touch</a>\n    to find out more.\n  </p>\n</div>\n';
            }), this.HandlebarsTemplates["content-management/ingestions-welcome"];
        }.call(this);
    }.call(this), define("views/static-view", ["require", "exports", "module", "app", "lib/backbone", "vendor/underscore"], function(e, t, n) {
        var r = e("app"),
            i = e("lib/backbone"),
            s = e("vendor/underscore"),
            o = {};
        n.exports = o = i.View.extend({
            className: "static-text-page",
            initialize: function() {
                s.bindAll(this, "template", "render"), this.render();
            },
            render: function() {
                var e = r.currentUser === null || !r.currentUser.get("user_id") ? {
                    capabilities: {}
                } : r.currentUser.toJSON();
                return $(this.el).html(this.template(e)), this;
            },
            template: function(e) {
                return JST["templates/" + this.id](e);
            }
        });
    }), define("views/login-view", ["require", "exports", "module", "app", "vendor/underscore", "lib/backbone", "views/stateful-view", "views/static-view"], function(e, t, n) {
        var r = e("app"),
            i = e("vendor/underscore"),
            s = e("lib/backbone"),
            o = e("views/stateful-view"),
            u = e("views/static-view"),
            a = {};
        n.exports = a = o.extend({
            events: {
                "click #arms-login input[name=arms-submit]": "submit",
                "click #arms-terms input[type=submit]": "accepting",
                "click #arms-terms .cancel": "logout"
            },
            initialize: function() {
                i.bindAll(this, "render", "success", "authenticationError"), this.router = this.options.router || new s.Router, this.router.bind("logged-in", this.hide);
            },
            states: {
                initial: {},
                hide: {
                    onEnter: function() {
                        $(this.el).hide();
                    }
                },
                ready: {
                    onEnter: function() {
                        $(this.el).show();
                    }
                },
                submit: {
                    onEnter: function() {
                        var e = {
                                username: $("#arms-login input[name=username]").val(),
                                password: $("#arms-login input[name=password]").val(),
                                terms_version: r.terms_version
                            },
                            t = {
                                success: this.success,
                                error: this.authenticationError,
                                authenticating: !0
                            };
                        r.currentUser.save(e, t);
                    }
                },
                failed: {},
                terms: {
                    onEnter: function() {
                        this.$el.find(".terms-text").html((new u({
                            id: "terms-of-use"
                        })).render().el), $(this.el).show(), this.$("[name=terms_version]").val(r.terms_version);
                    }
                },
                accepting: {
                    onEnter: function() {
                        return $.ajax({
                            url: "/_api/terms",
                            type: "PUT",
                            data: $("#arms-terms").serializeArray(),
                            success: r.currentUser.fetch,
                            error: this.mustAccept
                        });
                    }
                },
                mustAccept: {
                    onEnter: function(e) {
                        e.globalError = !1;
                    }
                },
                logout: {
                    onEnter: function() {
                        this.router.logout();
                    }
                }
            },
            success: function(e) {
                $("#arms-login input[name=username]").blur(), $("#arms-login input[name=password]").blur(), $("#persist-credentials").click(), r.currentUser.checkTerms(e);
            },
            authenticationError: function(e, t) {
                t.status === 401 && (t.globalError = !1, this.failed());
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/sidebar"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.sidebar = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    r += '\n  <div class="sidebar-tools">\n    <div class="account-wrapper">\n      Hi ', (i = n.username) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.username, i = typeof i === u ? i.apply(e) : i), r += a(i) + "\n    </div>\n    <ul>\n      ", i = n.each.call(e, e.tools, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(2, c, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += '\n      <li id="sidebar-logout"><a href="#/logout">Sign out</a></li>\n    </ul>\n  </div>\n<', r;
                }

                function c(e, t) {
                    var r = "",
                        i;
                    r += '\n      <li data-names="', (i = n.names) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.names, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\n        <a href="', i = n["if"].call(e, e.isHashRoute, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(3, h, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    (i = n.route) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }): (i = e.route, i = typeof i === u ? i.apply(e) : i), r += a(i) + '" ', i = n["if"].call(e, e.forceReload, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(5, p, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    r += ">", (i = n.title) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.title, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n        ", i = n["if"].call(e, e.children, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(7, d, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "\n      </li>\n      ", r;
                }

                function h(e, t) {
                    return "#";
                }

                function p(e, t) {
                    return ' data-force-reload="true"';
                }

                function d(e, t) {
                    var r = "",
                        i;
                    r += '\n        <ul class="children">\n          ', i = n.each.call(e, e.children, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(8, v, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "\n        </ul>\n        ", r;
                }

                function v(e, t) {
                    var r = "",
                        i;
                    r += '\n          <li data-names="', (i = n.names) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.names, i = typeof i === u ? i.apply(e) : i), r += a(i) + '"><a href="', i = n["if"].call(e, e.isHashRoute, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(3, h, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return (i = n.route) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.route, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">', (i = n.title) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.title, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a></li>\n          ", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<a href="/">\n  <h1>SoundCloud Deck</h1>\n</a>\n\n', o = n["if"].call(t, t.user_id, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += "\n", s;
            }), this.HandlebarsTemplates.sidebar;
        }.call(this);
    }.call(this), define("views/sidebar-view", ["require", "exports", "module", "app", "vendor/underscore", "lib/backbone"], function(e, t, n) {
        var r = e("app"),
            i = e("vendor/underscore"),
            s = e("lib/backbone"),
            o = {};
        n.exports = o = s.View.extend({
            initialize: function() {
                i.bindAll(this, "render", "logout", "highlight"), this.router = this.options.router || new s.Router, this.router.bind("all", this.highlight), this.router.bind("logged-in", this.render), this.router.bind("logged-out", this.render), this.render();
            },
            template: JST["templates/sidebar"],
            events: {
                "click #sidebar-logout": "logout",
                "click [data-force-reload]": "forceReload"
            },
            forceReload: function() {
                s.history.loadUrl(s.history.fragment);
            },
            render: function() {
                if (r.currentUser && !r.currentUser.authenticated()) return !1;
                var e = r.currentUser,
                    t = !e || !e.get("user_id") ? {
                        user_id: null
                    } : e.toJSON();
                return t.tools = i.filter(r.tools, function(e) {
                    return e.visibleIf ? e.visibleIf.call(this, t) : e.capacity ? i.indexOf(t.capabilities, e.capacity) > -1 : !0;
                }.bind(this)), $(this.el).html(this.template(t)), this;
            },
            highlight: function(e) {
                $("li", this.el).each(function() {
                    function t(e) {
                        var n = $(e),
                            r = n.attr("data-names") || "",
                            s = r.split(", "),
                            o = i.flatten(i.map(n.find("li"), t));
                        return s.concat(o);
                    }
                    var n = t(this);
                    $(this).toggleClass("active", i.contains(n, e)), $(this).toggleClass("open", e.indexOf(n.join(" ")) > -1);
                });
            },
            logout: function(e) {
                e.preventDefault(), this.router.logout();
            }
        });
    }), define("lib/mixin", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = ["before", "after", "around", "requires", "override", "defaults", "applyTo"];
        r = n.exports = Class.extend({
            initialize: function(e) {
                this.properties = e;
            },
            applyTo: function(e) {
                var t = this.properties;
                return this.requires(e, t.requires), this.extend(e, t), this.defaults(e, t.defaults), this.override(e, t.override), this.before(e, t.before), this.after(e, t.after), this.around(e, t.around), t.applyTo && t.applyTo.apply(this, arguments), e;
            },
            before: function(e, t) {
                i.each(t, function(t, n) {
                    if (__DEBUG_WARNINGS__ && !i.isFunction(e[n])) throw new Error('Object is missing function property "' + n + '"');
                    var r = e[n];
                    e[n] = function() {
                        return t.apply(this, arguments), r.apply(this, arguments);
                    };
                });
            },
            after: function(e, t) {
                i.each(t, function(t, n) {
                    if (__DEBUG_WARNINGS__ && !i.isFunction(e[n])) throw new Error('Object is missing function property "' + n + '"');
                    var r = e[n];
                    e[n] = function() {
                        var e = r.apply(this, arguments);
                        return t.apply(this, arguments), e;
                    };
                });
            },
            around: function(e, t) {
                i.each(t, function(t, n) {
                    if (__DEBUG_WARNINGS__ && !i.isFunction(e[n])) throw new Error('Object is missing function property "' + n + '"');
                    var r = e[n],
                        s = Array.prototype.slice;
                    e[n] = function() {
                        var e = s.apply(arguments);
                        return e.unshift(r.bind(this)), t.apply(this, e);
                    };
                });
            },
            override: function(e, t) {
                i.each(t, function(t, n) {
                    __DEBUG_WARNINGS__ && t && i.isObject(t) && !i.isFunction(t) && window.console.warn('Mixin has defined an object as a property value: "' + n + '"'), e[n] = t;
                });
            },
            defaults: function(e, t) {
                i.each(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t);
                });
            },
            extend: function(e, t) {
                i.each(t, function(t, n) {
                    if (s.indexOf(n) < 0) {
                        if (__DEBUG_WARNINGS__) {
                            if (n in e) throw new Error('Mixin overrides existing property "' + n + '"');
                            t && i.isObject(t) && !i.isFunction(t) && window.console.warn('Mixin has defined an object as a property value: "' + n + '"');
                        }
                        e[n] = t;
                    }
                });
            },
            requires: function(e, t) {
                if (__DEBUG_WARNINGS__ && t) {
                    if (!i.isArray(t)) throw new Error("requires should be an array of required property names");
                    t.forEach(function(t) {
                        if (!(t in e)) throw new Error('Object is missing required property "' + t + '"');
                    });
                }
            }
        });
    }), define("lib/views/mixins/stateful", ["require", "exports", "module", "vendor/underscore", "lib/mixin"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = e("lib/mixin");
        r = n.exports = new s({
            states: null,
            _states: null,
            toggleState: function(e, t) {
                var n, r;
                return !this.states || !this.states[e] ? this : (this._states = this._states || {}, this._states[e] = this._states[e] || !1, t = typeof t != "undefined" ? !!t : !this._states[e], this._states[e] === t ? this : (this._states[e] = t, n = this.states[e], typeof n == "string" ? (r = n, this.$el[t ? "addClass" : "removeClass"](r)) : i.isFunction(n) ? n.call(this, t) : n && n[t ? "setup" : "teardown"].call(this), this.trigger("state:" + e, t), this));
            },
            getState: function(e) {
                return !!this._states && !!this._states[e];
            }
        });
    }), define("lib/subview-plugin", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
        function o(t, n) {
            var r = t.getAttribute("data-id"),
                s = i[r],
                o, u, a;
            s.__path ? (u = e(s.__path), delete s.__path) : (u = s.__class, delete s.__class), delete i[r], s.key && (a = s.key, delete s.key), s.parentView = n, o = n.addSubview(new u(s), a), o.render(), $(t).replaceWith(o.el);
        }

        function u(t, n) {
            var o, u;
            return typeof t == "string" ? (n.hash.__path = t, u = e(t)) : (n.hash.__class = t, u = t), n.hash.args && (r.isFunction(n.hash.args) && (n.hash.args = n.hash.args(this)), n.hash = r.extend({}, n.hash.args, n.hash)), delete n.hash.args, n.hash.className && (n.hash.className = [u.prototype.className, n.hash.className].filter(Boolean).join(" ")), o = s++, i[o] = n.hash, '<view data-id="' + o + '"></view>';
        }

        function a(e) {
            e.$("view").each(function() {
                o(this, e);
            });
        }
        var r = e("vendor/underscore"),
            i = {},
            s = 0;
        t.handlebarHelper = u, t.replacePlaceholders = a;
    }), define("lib/time", ["require", "exports", "module"], function(e, t, n) {
        n.exports = function() {
            var e, t;
            e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var n = function(e) {
                    return e.slice(0, 3);
                },
                r = function(e, t) {
                    return e === 1 ? t : t + "s";
                },
                i = function(e) {
                    return e > 9 ? e : "0" + e;
                },
                s = function(r) {
                    if (!r) return "";
                    r = new Date(r * 1e3);
                    var s = i(r.getUTCDate()),
                        o = r.getUTCDay(),
                        u = r.getUTCFullYear(),
                        a = i(r.getUTCHours()),
                        f = i(r.getUTCMinutes()),
                        l = r.getUTCMonth(),
                        c = a + ":" + f;
                    return [n(t[o]), n(e[l]), s, u, c, "(UTC)"].join(" ");
                },
                o = function(t) {
                    if (!t) return "";
                    t = new Date(t * 1e3);
                    var n = t.getUTCMonth(),
                        r = i(t.getUTCDate()),
                        s = t.getUTCFullYear();
                    return [e[n], r, s].join(" ");
                },
                u = function(e) {
                    if (!e) return "";
                    var t = e >= 0 ? !0 : !1,
                        n = t ? "in %amount %unit" : "%amount %unit ago",
                        i = Math.abs(e),
                        s = Math.floor(i / 60),
                        o = Math.floor(i / 3600),
                        u = Math.floor(i / 86400);
                    return o > 48 ? n.replace("%amount", u).replace("%unit", r(u, "day")) : o <= 48 && o >= 1 ? n.replace("%amount", o).replace("%unit", r(o, "hour")) : s >= 1 ? n.replace("%amount", s).replace("%unit", r(s, "minute")) : t ? "in less than 1 minute" : "1 minute ago";
                },
                a = function(e) {
                    var t = Math.round(e / 1e3, 0),
                        n = Math.floor(t / 60),
                        r = Math.floor(t / 60 / 60),
                        i = t - n * 60,
                        s = n - r * 60,
                        o = i < 10 ? "0" : "",
                        u = s < 10 ? "0" : "",
                        a = r > 0 ? r + ":" + u : "",
                        f = a + s + ":" + o + i;
                    return f;
                };
            return {
                "long": s,
                "short": o,
                effective: u,
                duration: a
            };
        }();
    }), define("lib/num", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
        var r = e("vendor/underscore");
        n.exports = function() {
            var e = function(e) {
                    return e === 0 ? e.toString() : e < 1e3 ? e.toString() : e < 1e6 ? Math.floor(e / 1e3) + "," + (e % 1e3 + 1e3).toString().substring(1) : (e / 1e6).toFixed(2) + "M";
                },
                t = function(e) {
                    return r.map(e.split(""), function(e) {
                        return '<span class="char">' + e + "</span>";
                    }).join("");
                },
                n = function(n, r) {
                    var i = e(n);
                    return r ? t(i) : i;
                },
                i = function(e, t, i) {
                    return r.isObject(e) ? r.reduce(t, function(t, r) {
                        return t[r] = n(e[r], i), t;
                    }, {}) : n(e, i);
                };
            return {
                format: i
            };
        }();
    }), define("views/count-helper", ["require", "exports", "module", "underscore"], function(e, t, n) {
        function u(e) {
            var t = 0;
            return e < 10 ? t = 2 : e < 100 ? t = 1 : t = 0, t;
        }

        function a(e, t, n) {
            n = n || Math.round;
            var r = Math.pow(10, t || 0);
            return n(e * r) / r;
        }
        var r = e("underscore"),
            i, s = ["K", "M", "B"],
            o;
        o = {
            max: null,
            suffix: "+",
            useSIUnits: !1,
            precision: null
        }, i = n.exports = {
            render: function(e, t) {
                if (typeof e != "number") return e;
                var n = 0,
                    i = "",
                    f = 0;
                t = t || {}, r.defaults(t, o);
                if (t.max && e > t.max) e = t.max, i = t.suffix;
                else if (t.useSIUnits) {
                    while (e >= 1e3 && n < s.length) e /= 1e3, i = s[n++];
                    f = t.precision !== null ? t.precision : u(e);
                }
                return a(e, f, Math.floor) + i;
            }
        };
    }), define("lib/template-helpers", ["require", "exports", "module", "lib/subview-plugin", "lib/time", "lib/num", "views/count-helper"], function(e, t, n) {
        var r, i = e("lib/subview-plugin"),
            s = e("lib/time"),
            o = e("lib/num"),
            u = e("views/count-helper");
        r = n.exports = {
            relativeUrl: function(e) {
                return e.replace(/^https?:.+?\w\//, "/");
            },
            equals: function(e, t, n) {
                return e === t ? n.fn(this) : n.inverse(this);
            },
            isIn: function() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.pop(),
                    n = e.reverse().pop();
                return e.indexOf(n) > -1 ? t.fn(this) : t.inverse(this);
            },
            notequals: function(e, t, n) {
                return e !== t ? n.fn(this) : n.inverse(this);
            },
            firstN: function(e, t, n, r) {
                var i = Array.prototype.slice.call(e, 0, parseInt(t, 10)),
                    s = {};
                return s[n] = i, r.fn(s);
            },
            restN: function(e, t, n, r) {
                var i = Array.prototype.slice.call(e, parseInt(t, 10)),
                    s = {};
                return s[n] = i, r.fn(s);
            },
            greaterThan: function(e, t, n) {
                return e > t ? n.fn(this) : n.inverse(this);
            },
            lessThan: function(e, t, n) {
                return e < t ? n.fn(this) : n.inverse(this);
            },
            math: function(e, t, n) {
                var r = parseInt(e, 10),
                    i = parseInt(n, 10);
                switch (t) {
                    case "+":
                        return r + i;
                    case "-":
                        return r - i;
                    case "*":
                        return r * i;
                    case "/":
                        return r / i;
                }
            },
            view: function() {
                return new Handlebars.SafeString(i.handlebarHelper.apply(this, arguments));
            },
            option: function(e, t, n) {
                var r = e === n ? "selected" : "",
                    i = '<option value="' + e + '" ' + r + ">" + t + "</option>";
                return new Handlebars.SafeString(i);
            },
            formatDate: function(e, t) {
                return e ? moment(e).format(t) : "";
            },
            formatDateInUtc: function(e, t) {
                return e ? moment.utc(e).format(t) : "";
            },
            valueOf: function(e) {
                return e.valueOf();
            },
            formatNumber: function(e, t) {
                return t = typeof t == "undefined" ? "" : t, typeof e == "number" ? o.format(e) : t;
            },
            formatDuration: function(e) {
                return typeof e == "number" ? s.duration(e) : e;
            },
            formatCount: function(e) {
                return u.render(e, {
                    useSIUnits: !0
                });
            },
            join: function(e) {
                return e ? e.join(", ") : "";
            }
        };
    }), define("lib/template", ["require", "exports", "module", "lib/subview-plugin", "lib/template-helpers", "vendor/underscore"], function(e, t, n) {
        var r, i = e("lib/subview-plugin"),
            s = e("lib/template-helpers"),
            o = e("vendor/underscore");
        o.each(s, function(e, t) {
            Handlebars.registerHelper(t, e);
        }), r = n.exports = {
            render: function(e, t, n) {
                var r = e(t || {}),
                    i, s, u;
                if (n) {
                    o.isArray(n) ? (i = n[0], s = n[1], u = document.createElement(i), s && $(u).attr(s)) : u = n;
                    var a = $(u).empty();
                    return a.append.apply(a, o.flatten([r])), u;
                }
                return r;
            },
            subviews: function(e) {
                i.replacePlaceholders(e);
            }
        };
    }), define("lib/view/subviews", ["require", "exports", "module", "lib/mixin"], function(e, t, n) {
        var r = e("lib/mixin");
        n.exports = new r({
            subviews: null,
            _subviews_keys: null,
            before: {
                initialize: function() {
                    this.subviews = [], this._subviews_keys = [];
                }
            },
            disposeSubviews: function() {
                while (this.subviews.length) this.subviews.pop()._dispose();
                this.subviews = [], this._subviews_keys = [];
            },
            addSubview: function(e, t) {
                return this.subviews.push(e), this._subviews_keys.push(t), t && (this.subviews[t] = e), this.promise = $.when(this.promise, e.promise), e;
            },
            removeSubview: function(e) {
                var t;
                for (t = this.subviews.length; t--;)
                    if (this.subviews[t] === e) {
                        this._subviews_keys[t] && delete this.subviews[this._subviews_keys[t]], this.subviews.splice(t, 1), this._subviews_keys.splice(t, 1);
                        return;
                    }
            }
        });
    }), define("lib/view", ["require", "exports", "module", "lib/views/mixins/stateful", "lib/template", "lib/backbone", "vendor/underscore", "lib/view/subviews"], function(e, t, n) {
        var r = e("lib/views/mixins/stateful"),
            i = e("lib/template"),
            s = e("lib/backbone"),
            o = e("vendor/underscore"),
            u = e("lib/view/subviews"),
            a, f;
        f = n.exports = s.View.extend(u.applyTo({
            ModelClass: null,
            observableAttributes: null,
            _lastEventId: null,
            constructorArguments: null,
            template: $.noop,
            LoadingView: null,
            loadingTemplate: function() {
                return "";
            },
            emptyTemplate: function() {
                return "";
            },
            errorTemplate: null,
            element2selector: null,
            _element2selector_cache: null,
            requiresFullData: !0,
            defaults: null,
            disposed: !1,
            _whenInsertedDefer: null,
            _deferreds: null,
            initialize: function(e) {
                e = a(this.constructor, e || {}), this.constructorArguments = o.clone(e), e.resource_id && this.ModelClass ? this.model = this.getResource(e.resource_id, e.resource_type) : typeof this.collection == "function" && (this.collection = new this.collection), this._deferreds = [], this.resetElementCache(), this._setup.call(this, e), this.model ? this.setupModelListeners() : this.collection && this.toggleCollectionListeners("on"), this.render(), __DEBUG_ATTACH_VIEWS__ && this.$el.data("__view__", this);
            },
            _setup: function() {
                this.setup.apply(this, arguments);
            },
            setup: $.noop,
            toggleCollectionListeners: function(e) {
                var t = e === "on" ? "on" : "off";
                this.collection[t]("add", this.onAdd, this)[t]("remove", this.onRemove, this)[t]("reset", this.onCollectionReset, this)[t]("error", this.renderError, this);
            },
            _dispose: function() {
                if (this.disposed) return;
                this._teardown(), this.dispose(), this.disposed = !0;
                while (this._deferreds.length) typeof this._deferreds[0] == "number" ? clearTimeout(this._deferreds.shift()) : this._deferreds[0].reject("viewDisposed");
                this.off(), this.model && (this.teardownModelListeners(), this.model.release()), this.collection && (this.toggleCollectionListeners("off"), this.collection.release()), this.$el.remove(), delete this.el, delete this.$el, delete this.model, delete this.collection, this.constructorArguments = null;
            },
            dispose: $.noop,
            _teardown: function() {
                this.resetElementCache(), this.disposeSubviews(), this._whenInsertedDefer && (this._whenInsertedDefer.reject(), this._whenInsertedDefer = null), this.teardown();
            },
            teardown: $.noop,
            getResource: function(e, t) {
                var n, r, i, s, o;
                return s = {
                    id: e,
                    resource_type: t
                }, i = this.ModelClass.getClass ? this.ModelClass.getClass(s) : this.ModelClass, n = i.hashFn(s), r = i.instances.get(n), r ? r.hold() : (o = {
                    id: e
                }, t && (o.resource_type = t), r = new i(o)), r;
            },
            setupModelListeners: function() {
                this.observableAttributes && this.observableAttributes.length && this.observableAttributes.forEach(function(e) {
                    var t = "change" + (e === "*" ? "" : ":" + e);
                    this.model.on(t, this.onModelChange, this);
                }.bind(this)), this.model.on("error", this.renderError, this);
            },
            teardownModelListeners: function() {
                this.observableAttributes && this.observableAttributes.length && this.observableAttributes.forEach(function(e) {
                    var t = "change" + (e === "*" ? "" : ":" + e);
                    this.model.off(t, this.onModelChange, this);
                }.bind(this)), this.model.off("error", this.renderError, this);
            },
            addDeferred: function(e) {
                return typeof e == "number" ? this._deferreds.push(e) : e.state() === "pending" && (e.always(function() {
                    var t = this._deferreds.indexOf(e);
                    t > -1 && this._deferreds.splice(t, 1);
                }.bind(this)), this._deferreds.push(e)), e;
            },
            getElement: function(e) {
                var t;
                return this._element2selector_cache[e] === t && (this._element2selector_cache[e] = this.$(this.element2selector[e])), this._element2selector_cache[e];
            },
            resetElementCache: function() {
                this._element2selector_cache = {};
            },
            render: function() {
                if (this.disposed) return;
                !this.disposed && this.rendered ? this._teardown() : this.rendered = !0;
                var e = this.hasData(),
                    t = this.getTemplate(e),
                    n = this.model || this.collection,
                    r = this._getTemplateData(e);
                if (__DEBUG_WARNINGS__ && !r) throw new Error("No data object for this view");
                return t && this.renderTemplate(t, r), e ? this.renderDecorate() : n && (!t && this.LoadingView && this.addSubview(new this.LoadingView, "loading").render().$el.appendTo(this.el), this.options.fetch !== !1 && this.fetchData(n)), this;
            },
            renderTemplate: function(e, t) {
                i.render(e.bind(this), t, this.el), i.subviews(this);
            },
            renderDecorate: $.noop,
            getTemplate: function(e) {
                var t = this.model || this.collection || null;
                return t && t.lastFetchTime && !e ? this.emptyTemplate : e || !this.LoadingView && !this.loadingTemplate ? this.template : this.LoadingView ? null : this.loadingTemplate;
            },
            getErrorTemplate: function(e) {
                if (this.errorTemplate) {
                    var t = e && e.status;
                    if (t && this.errorTemplate[t]) return this.errorTemplate[t];
                    if (typeof this.errorTemplate == "function") return this.errorTemplate;
                }
            },
            renderError: function(e, t, n) {
                !this.disposed && this.rendered ? this._teardown() : this.rendered = !0;
                var r = this.getErrorTemplate(t, n);
                if (r) {
                    t.globalError = !1;
                    var i;
                    this.model ? i = this.getModelData() : this.collection && (i = this.getCollectionData()), this.renderTemplate(r, i);
                }
            },
            _getTemplateData: function(e) {
                var t = {};
                return this.model ? t = this.getModelData() : this.collection && (t = this.getCollectionData()), t._options = o.clone(this.options), e && (t = this.getTemplateData(t) || t), t;
            },
            getCollectionData: function() {
                return this.collection.toJSON();
            },
            getModelData: function() {
                return this.model.toJSON();
            },
            fetchData: function(e) {
                this.promise = e.fetch();
            },
            getTemplateData: $.noop,
            hasData: function(e) {
                e = e || this.model || this.collection;
                if (!e) return !0;
                if (e.models) {
                    if (!e.models[0]) return e.lastFetchTime && e.models.length === 0 ? !0 : !1;
                    e = e.models[0];
                }
                var t = o.every(this.observableAttributes, function(t) {
                    return e.attributes.hasOwnProperty(t);
                });
                return t;
            },
            scrollIntoView: function(e) {
                var t, n = this.$el.offset(),
                    r, i, s, u, a, f, l;
                e = o.defaults({}, e, {
                    position: "auto"
                });
                if (!n) return !1;
                f = $(".g-main-scroll-area").first(), f.length || (f = $("#content")), s = $(document).scrollTop(), l = f.offset().top, r = s + l, i = s + $(window).height(), u = Math.floor(n.top), a = Math.floor(u + this.$el.height()), t = u > r && a < i, t || (e.position === "top" || e.position === "auto" && u < r ? window.scrollTo(0, u - l) : this.el.scrollIntoView(!1));
            },
            isEquivalentTo: function(e, t) {
                var n = t || {};
                return this.constructor === e && o.isEqual(a(e, n), this.constructorArguments);
            },
            whenInserted: function(e) {
                var t = this._whenInsertedDefer,
                    n, r;
                return t || (e = e || document.body, r = function(i) {
                    i.closest(e).length !== 0 ? t.resolve() : n = setTimeout(r, 100);
                }.bind(null, this.$el), this._whenInsertedDefer = t = $.Deferred(), t.fail(function() {
                    clearTimeout(n);
                }), r()), t;
            },
            onModelChange: function() {
                this.render();
            },
            onCollectionReset: function() {
                this.render();
            },
            onAdd: $.noop,
            onRemove: $.noop
        })), r.applyTo(f.prototype), a = function(e, t) {
            return o.defaults(t, e.prototype.defaults), e === f ? t : a(e.__super__.constructor, t);
        };
    }), define("lib/list-view", ["require", "exports", "module", "lib/view", "vendor/underscore"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("vendor/underscore"),
            s;
        s = n.exports = r.extend({
            render: function() {
                r.prototype.render.apply(this, arguments);
                var e = this.getListEl();
                e.length && (this.collectionView = new o({
                    el: e,
                    parent: this
                }), this.addSubview(this.collectionView, "collectionView"));
            },
            getListEl: function() {
                return this.$(".list-items tbody:last");
            },
            hasData: function() {
                return !0;
            },
            renderItems: function() {
                return this.collectionView.render();
            },
            onCollectionReset: $.noop,
            renderError: $.noop
        });
        var o = r.extend({
            initialize: function(e) {
                var t = ["emptyTemplate", "errorTemplate", "collection", "itemView", "collectionTemplate"];
                i.each(t, function(t) {
                    this[t] = e.parent[t];
                }, this), this.itemView || (this.itemView = r.extend({
                    tagName: "tr",
                    className: "list-item",
                    template: e.parent.itemTemplate
                })), r.prototype.initialize.apply(this, arguments);
            },
            onAdd: function(e, t, n) {
                var r = this.renderItem(e, "add");
                n.index == t.length - 1 ? t.length == 1 ? this.$el.html(r) : this.$el.append(r) : this.$el.children().eq(n.index).before(r);
            },
            onRemove: function(e, t, n) {
                this.$el.children().eq(n.index).remove(), this.subviews[n.index].dispose(), t.length || this.$el.html(this.renderEmpty());
            },
            template: function() {
                return this.collectionTemplate ? this.collectionTemplate.bind(this.options.parent)(this.collection, function(e) {
                    return this.renderItem(e, "reset");
                }.bind(this)) : this.collection.length === 0 && this.emptyTemplate ? this.emptyTemplate.apply(this.options.parent, arguments) : this.collection.map(function(e) {
                    return this.renderItem(e, "reset");
                }, this);
            },
            renderItem: function(e, t) {
                var n = new this.itemView({
                    model: e,
                    parent: this.options.parent,
                    renderMode: t
                });
                return this.addSubview(n), n.$el;
            },
            renderEmpty: function(e) {
                return this.emptyTemplate.call(this, e);
            }
        });
    }), define("lib/sc", ["require", "exports", "module", "config/env"], function(e, t, n) {
        var r = e("config/env").SCUrl,
            i, s, o;
        i = function(e) {
            if (!e) return;
            var t = document.createElement("a");
            t.href = e;
            var n = t.hash.substring(1);
            return n.length && n.charAt(0) !== "/" && (n = "/" + n), t.host === location.host ? o.url.concat(e) : t.protocol + "//" + t.host.split(".").slice(-2).join(".") + (n ? n : t.pathname);
        }, s = function(e) {
            return e ? e.replace(o.url, "") : e;
        }, o = n.exports = {
            url: r,
            ensureUrl: i,
            stripUrl: s
        };
    }), define("lib/url", ["require", "exports", "module", "underscore"], function(e, t, n) {
        function a(e) {
            return e.split("/").map(f).join("/");
        }

        function f(e) {
            return encodeURI(e).replace(/#/g, "%23").replace(/\?/g, "%3F");
        }
        var r = e("underscore"),
            i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:\/@]*)(?::([^:\/@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            s = ["---", "scheme", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
            o, u = n.exports = {
                parse: function(e, t) {
                    var n = i.exec(e),
                        r, o, a = {};
                    t || (t = s);
                    for (r = 1; r < s.length; ++r) {
                        o = s[r];
                        if (t.indexOf(o) !== -1)
                            if (n[r] || o === "query") switch (o) {
                                case "port":
                                    a[o] = parseInt(n[r], 10);
                                    break;
                                case "path":
                                    a[o] = n[r].split("/").map(decodeURIComponent).join("/");
                                    break;
                                case "query":
                                    a[o] = u.parseQueryString(n[r]);
                                    break;
                                default:
                                    a[o] = n[r];
                            }
                    }
                    return a;
                },
                joinPath: function(e) {
                    return e.filter(Boolean).join("/");
                },
                parseQueryString: function(e) {
                    var t = {};
                    return e && e.replace(/([^?=&]+)(?:=([^&]*))?/g, function(e, n, r) {
                        n = decodeURIComponent(n), r = decodeURIComponent((r || "").replace(/\+/g, " "));
                        switch (typeof t[n]) {
                            case "object":
                                t[n].push(r);
                                break;
                            case "undefined":
                                t[n] = r;
                                break;
                            default:
                                t[n] = [t[n], r];
                        }
                    }), t;
                },
                param: function(e, t) {
                    t = t || {};
                    var n = [],
                        i = function(e, t) {
                            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
                        },
                        s = function(e, n) {
                            r.isArray(n) ? n.forEach(function(n, r) {
                                s(e + "[" + (typeof n == "object" && t.jquerySerialize ? r : "") + "]", n);
                            }) : r.isObject(n) ? r.each(n, function(t, n) {
                                s(e + "[" + n + "]", t);
                            }) : i(e, n);
                        };
                    return r.each(e, function(e, t) {
                        s(t, e);
                    }), n.join("&").replace(/%20/g, "+");
                },
                stringify: function(e, t) {
                    var n = [],
                        i, s;
                    return t && (s = u.parse(t), e.query && s.query && (r.assign(s.query, e.query), delete e.query), e = r.assign({}, s, e)), e.scheme && n.push(e.scheme + "://"), e.user && (n.push(e.user), e.password && n.push(":" + e.password), n.push("@")), e.host && n.push(e.host), e.port && n.push(":" + e.port), e.path && (typeof e.path == "string" ? n.push(a(e.path)) : n.push(a(u.joinPath(e.path)))), i = o(e.query), i && n.push("?" + i), e.fragment && n.push("#" + e.fragment), n.join("");
                },
                modify: function(e, t) {
                    var n = u.parse(e);
                    return r.isFunction(t) ? n = t.call(null, n) : typeof t == "object" && (t.query && (r.assign(n.query, t.query), delete t.query), r.assign(n, t)), u.stringify(n);
                },
                normalize: function(e) {
                    var t = r.defaults(u.parse(e), {
                        scheme: "http"
                    });
                    return u.stringify(t);
                }
            };
        o = function(e) {
            var t, n, r, i, s, o = [];
            if (e)
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        i = e[t];
                        if (i !== null && i !== s)
                            if (typeof i == "object") {
                                r = i.length;
                                for (n = 0; n < r; ++n) o.push(encodeURIComponent(t) + "=" + encodeURIComponent(i[n]).replace(/%2F/g, "/"));
                            } else o.push(encodeURIComponent(t) + "=" + encodeURIComponent(i).replace(/%2F/g, "/"));
                    }
            return o.join("&");
        };
    }), define("lib/store", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = {};
        ["each", "forEach", "map", "find", "detect", "filter", "select", "reject", "every", "all", "any", "some", "include", "contains"].forEach(function(e) {
            s[e] = function() {
                var t = [this._store];
                return t.push.apply(t, arguments), i[e].apply(i, t);
            };
        }), r = n.exports = Class.extend([s, {
            initialize: function(e) {
                this._store = {}, this.length = 0, this._final = !1, this.maxLength = e && e.maxLength || !1, this.maxLength && (this._keys = []);
            },
            maxLength: 0,
            get: function(e) {
                return this._store[e];
            },
            set: function(e, t) {
                return this.has(e) ? this.maxLength && this._keys.splice(this._keys.indexOf(e), 1) : (__DEBUG_WARNINGS__ && this._final && window.console.warn("New key added to locked store: %s", e), ++this.length, this.maxLength && this.length > this.maxLength && this.unset(this._keys[0])), this.maxLength && this._keys.push(e), this._store[e] = t, this;
            },
            unset: function(e) {
                var t;
                return this.has(e) && (--this.length, this._final ? this._store[e] = t : (delete this._store[e], this.maxLength && this._keys.splice(this._keys.indexOf(e), 1))), this;
            },
            reset: function() {
                return this._store = {}, this.maxLength && (this._keys = []), this._final = !1, this.length = 0, this;
            },
            has: function(e) {
                return this._store.hasOwnProperty(e);
            },
            finalize: function() {
                this._final = !0;
            }
        }]);
    }), define("lib/mixins/usage-counting", ["require", "exports", "module", "lib/mixin"], function(e, t, n) {
        var r, i = e("lib/mixin");
        r = n.exports = new i({
            after: {
                initialize: function(e) {
                    this._counts = {}, this._needsGC = !1, this._autoCleanup = !!e && !!e.autoCleanup;
                },
                reset: function() {
                    this._counts = {}, this._needsGC = !1;
                },
                set: function(e) {
                    this._counts[e] || (this._counts[e] = 1);
                },
                unset: function(e) {
                    delete this._counts[e];
                }
            },
            before: {
                reset: function(e) {
                    e && this.forEach(e);
                }
            },
            countFor: function(e) {
                return this._counts[e] || 0;
            },
            increment: function(e, t) {
                return this.has(e) && (this._counts[e] = (this._counts[e] || 0) + (typeof t == "number" ? t : 1)), this;
            },
            decrement: function(e) {
                return this.has(e) && (this._counts[e] = (this._counts[e] || 1) - 1, this._counts[e] === 0 && (this._needsGC = !0, this._autoCleanup && this.cleanup())), this;
            },
            cleanup: function(e) {
                var t;
                if (this._needsGC) {
                    for (t in this._counts) this._counts.hasOwnProperty(t) && this._counts[t] === 0 && (e && e(this.get(t)), this.unset(t));
                    this._needsGC = !1;
                }
            }
        });
    }), define("lib/gc-store", ["require", "exports", "module", "lib/store", "lib/mixins/usage-counting"], function(e, t, n) {
        var r, i = e("lib/store"),
            s = e("lib/mixins/usage-counting");
        r = n.exports = i.extend(), s.applyTo(r.prototype);
    }), define("lib/single", ["require", "exports", "module", "vendor/underscore", "lib/backbone", "lib/gc-store"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = e("lib/gc-store"),
            o = $.noop,
            u = 0,
            a = 6e4,
            f;
        n.exports = {
            applyTo: function l(e, t) {
                t = r.extend({
                    neverRelease: !1,
                    cleanupInstantly: !1,
                    hashFn: function(e) {
                        return null;
                    },
                    prepareArgs: function(e) {
                        return arguments;
                    },
                    prepareInstance: function(e) {
                        return this;
                    },
                    getIncrementValue: function(e) {
                        return 1;
                    },
                    onHold: o,
                    onRelease: o,
                    onCleanup: o,
                    GC_INTERVAL: a
                }, t, e);
                var n = new s({
                        autoCleanup: t.cleanupInstantly
                    }),
                    c = e.extend || i.Model.extend,
                    h = t.neverRelease,
                    p, d, v, m, g, y;
                return h ? v = m = g = o : (g = function() {
                    n.cleanup(p.onCleanup), d = n.length ? setTimeout(g, t.GC_INTERVAL) : null;
                }, v = function() {
                    n.increment(this.resource_id), p.onHold.call(this);
                }, m = function() {
                    n.decrement(this.resource_id), p.onRelease.call(this);
                }), y = {
                    hold: v,
                    release: m,
                    _usageCount: function() {
                        return n.countFor(this.resource_id);
                    },
                    constructor: function() {
                        var r = p.prepareArgs.apply(this, arguments),
                            i = p.hashFn.apply(this, r) || "faux-" + ++u,
                            s = p.neverRelease ? 1 : p.getIncrementValue.apply(null, r),
                            o = n.get(i);
                        if (o) return this.constructor.neverRelease || n.increment(i, s), p.prepareInstance.apply(o, r), o;
                        !d && !p.cleanupInstantly && (d = setTimeout(g, t.GC_INTERVAL)), n.set(i, this), n.increment(i, s - 1), this.resource_id = i, f(e).apply(this, r), p.prepareInstance.apply(this, r);
                    }
                }, p = c.call(e, y, t), r.extend(p, {
                    __constructor__: f(e),
                    reset: function() {
                        n.reset(p.onCleanup), d && (clearTimeout(d), d = null);
                    },
                    extend: function(t, n) {
                        t = t || {}, r.isArray(t) && (t = r.extend.apply(null, [{}].concat(t))), t.hasOwnProperty("constructor") || (t.constructor = f(e));
                        var i = c.apply(p, arguments);
                        return i.extend = c, l(i, p);
                    },
                    instances: function() {
                        return n.add = function(e) {
                            var t = p.hashFn(e.attributes);
                            e.resource_id = t, t && this.set(t, e);
                        }, n;
                    }(),
                    getNewInstance: function() {
                        function r() {
                            return f(e).apply(this, t);
                        }
                        var t = arguments,
                            n;
                        return r.prototype = p.prototype, n = new r, n.release = n.hold = n._usageCount = o, n;
                    }
                });
            }
        }, f = function(e) {
            return e.__constructor__ || e;
        };
    }), define("lib/collection", ["require", "exports", "module", "lib/backbone", "lib/single", "vendor/underscore"], function(e, t, n) {
        var r, i = e("lib/backbone"),
            s = e("lib/single"),
            o = e("vendor/underscore"),
            u = {},
            a;
        r = i.Collection.extend({
            next_href: null,
            lastFetchTime: null,
            model: u,
            initialize: function(e, t) {
                if (__DEBUG_WARNINGS__ && this.model === u) throw new Error("Collections must define a Model class");
                this.options = a(this.constructor, t || {}), this.setup(t);
            },
            setup: $.noop,
            _reset: function() {
                return i.Collection.prototype._reset.apply(this, arguments);
            },
            fetch: function(e) {
                var t = e && e.url || o.result(this, "url"),
                    n;
                return t ? this._requests && this._requests[t] || i.Collection.prototype.fetch.call(this, e) : (n = $.Deferred(), n.done(e && e.success).resolve(!0), n);
            }
        }), n.exports = s.applyTo(r, {
            hashFn: function(e, t) {
                return t && t.resource_id || null;
            },
            onHold: function() {
                this.models.length && this.models[0].hold && o.invoke(this.models, "hold");
            },
            onRelease: function() {
                this.models.length && this.models[0].release && o.invoke(this.models, "release");
            }
        }), a = function(e, t) {
            return o.defaults(t, e.prototype.defaults), e === r ? t : a(e.__super__.constructor, t);
        };
    }), define("lib/model", ["require", "exports", "module", "vendor/underscore", "lib/backbone", "lib/single"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = e("lib/backbone"),
            o = e("lib/single");
        r = s.Model.extend({
            resource_type: null,
            lastFetchTime: null,
            hasMiniData: !1,
            _submodels: null,
            submodelMap: null,
            initialize: function() {
                this._submodels = [], i.each(this.submodelMap, function(e, t) {
                    this.on("change:" + t, this.createSubmodel.bind(this, e, t));
                }, this), this.setup.apply(this, arguments), i.each(this.submodelMap, function(e, t) {
                    this.get(t) && this.createSubmodel(e, t);
                }, this);
            },
            setup: $.noop,
            createSubmodel: function(e, t) {
                this.addSubmodel(new e(this.get(t), {
                    data: "mini"
                }));
            },
            addSubmodel: function() {
                [].slice.call(arguments).forEach(function(e) {
                    this._submodels.indexOf(e) === -1 ? this._submodels.push(e) : e.release();
                }.bind(this));
            },
            baseUrl: function() {
                throw new Error("baseUrl should be defined for every model");
            },
            doAction: function(e, t) {
                var n = t && t.success;
                return t = i.defaults({
                    url: this.url(),
                    data: i.defaults({
                        action: e
                    }, t && t.data),
                    success: i.bind(function(e) {
                        this.set(this.parse(e)), n && n(e);
                    }, this)
                }, t), s.sync.call(this, "create", null, t);
            },
            toJSON: function() {
                var e = s.Model.prototype.toJSON.apply(this, arguments);
                return e._resource_id = this.resource_id, e._resource_type = this.resource_type, e;
            },
            toString: function() {
                return this.resource_type ? this.resource_type + " (" + (this.isNew() ? "new" : this.resource_id) + ")" + ": " + (this.attributes.permalink || this.attributes.title || this.attributes.name) : Object.prototype.toString.call(this);
            }
        }), n.exports = o.applyTo(r, {
            hashFn: function(e) {
                return e && e.id || null;
            },
            onCleanup: function() {
                this._submodels && this._submodels.length && (i.invoke(this._submodels, "release"), this._submodels = []);
            },
            prepareArgs: function(e, t) {
                return t = t || {}, e = e || {}, t.parse && (e = this.parse(e)), [e, t];
            },
            prepareInstance: function(e, t) {
                return t = t || {}, t.collection || t.data === "full" ? this.lastFetchTime = Date.now() : t.data === "mini" && (this.hasMiniData = !0), i.isEmpty(e) || this.set(e), delete this.attributes.resource_id, this;
            },
            getIncrementValue: function(e, t) {
                var n = t && t.collection;
                return n ? n.constructor.instances.countFor(n.resource_id) : 1;
            }
        });
    }), define("models/rightsholder", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r = e("lib/model"),
            i;
        i = n.exports = r.extend({
            urlRoot: "/_api/rightsholders"
        }, {
            hashFn: function(e) {
                return e && e.id || null;
            }
        });
    }), define("collections/rightsholders", ["require", "exports", "module", "lib/collection", "models/rightsholder"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("models/rightsholder"),
            s;
        s = n.exports = r.extend({
            model: i,
            url: "/_api/rightsholders"
        }, {
            hashFn: function() {
                return "all";
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/error-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["error-item"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<tr class="list-item">\n  <td colspan="', (o = n.colspan) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.colspan, o = typeof o === u ? o.apply(t) : o), s += a(o) + '">\n    <span class="text-error">', (o = n.error) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.error, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</span>\n  </td>\n  <td class="actions">\n    <button class="sc-button sc-button-small dismiss-error">Dismiss</button>\n  </td>\n</tr>\n', s;
            }), this.HandlebarsTemplates["error-item"];
        }.call(this);
    }.call(this), define("lib/views/mixins/list-errors", ["require", "exports", "module", "vendor/underscore", "lib/mixin"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/mixin"),
            s = {
                "click .dismiss-error": "dismissError"
            };
        n.exports = new i({
            errorItemTemplate: JST["templates/error-item"],
            getErrorsEl: function() {
                return this.$(".list-items tbody.errors");
            },
            dismissError: function(e) {
                return $(e.currentTarget).closest("tr").remove(), !1;
            },
            dismissErrors: function() {
                this.getErrorsEl().empty();
            },
            addError: function(e) {
                var t = this.$(".list-items tr:last > *").length,
                    n = this.errorItemTemplate.call(this, {
                        colspan: t < 2 ? 1 : t - 1,
                        error: e
                    });
                this.getErrorsEl().append(n);
            },
            applyTo: function(e) {
                e.events = r.extend(e.events || {}, s);
            }
        });
    }), define("lib/views/mixins/drawer", ["require", "exports", "module", "vendor/underscore", "lib/mixin"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/mixin"),
            s = {
                "click .show-form": "openDrawer",
                "click .hide-form": "closeDrawer",
                "transitionend .drawer": "drawerTransitioned",
                "webkitTransitionEnd .drawer": "drawerTransitioned"
            };
        n.exports = new i({
            openDrawer: function() {
                this.$el.addClass("drawer-open").removeClass("drawer-closed"), this.$(".show-form").hide(), this.$(".hide-form").show(), this.headerHeight = this.$(".header").outerHeight(), this.updateDrawerHeight();
            },
            closeDrawer: function() {
                this.$el.addClass("drawer-closed").removeClass("drawer-open"), this.resetDrawer(), this.$(".drawer").css("height", "");
            },
            resetDrawer: function() {
                this.$el.removeClass("drawer-open"), this.$(".show-form").show(), this.$(".hide-form").hide();
            },
            updateDrawerHeight: function() {
                var e = this.$(".drawer-liner").outerHeight();
                this.$(".drawer").css("height", e + "px");
            },
            drawerTransitioned: function() {
                this.$el.toggleClass("drawer-really-open", this.$el.hasClass("drawer-open"));
            },
            after: {
                render: function() {
                    this.resetDrawer();
                }
            },
            applyTo: function(e) {
                e.events = r.extend(e.events || {}, s);
            }
        });
    }), define("lib/views/mixins/list-header", ["require", "exports", "module", "lib/backbone", "lib/mixin", "vendor/underscore"], function(e, t, n) {
        var r, i = e("lib/backbone"),
            s = e("lib/mixin"),
            o = e("vendor/underscore");
        r = i.View.extend({
            initialize: function() {
                this.table = this.$(".list .list-items"), this.thead = this.table.find(".list-items-header"), this.header = this.$(".header"), this.tbody = this.table.find("tbody:last");
                if (!this.table.length) return;
                this.createHeader(), this.updateHeaderHeight(), this.updateColumnWidths(), this.observeTable();
            },
            appended: function() {
                this.updateHeaderHeight();
            },
            dispose: function() {
                $(window).off("resize", this.updateColumnWidthsThrottled), this.tableObserver && this.tableObserver.disconnect();
            },
            createHeader: function() {
                var e = $("<table>", {
                    "class": this.table.attr("class"),
                    html: this.thead.clone()
                });
                $("<div>", {
                    "class": "section header-table-wrapper",
                    html: e
                }).appendTo(this.header), $("<span>", {
                    "class": "shadow"
                }).appendTo(this.header), this.headerCells = e.find("td");
            },
            updateHeaderHeight: function() {
                if (!this.table.length) return;
                this.table.css("margin-top", "-" + this.thead.height() + "px");
            },
            updateColumnWidths: function() {
                if (this.table.css("table-layout") !== "auto") return;
                var e = this.tbody.find("tr:first td").map(function(e, t) {
                    return $(t).width();
                });
                this.headerCells.each(function(t, n) {
                    $(n).width(e[t]);
                });
            },
            observeTable: function() {
                this.updateColumnWidthsThrottled = o.debounce(this.updateColumnWidths.bind(this), 100), $(window).resize(this.updateColumnWidthsThrottled);
                var e = window.MutationObserver || window.WebKitMutationObserver;
                e && (this.tableObserver = new e(this.updateColumnWidths.bind(this)), this.tableObserver.observe(this.tbody[0], {
                    childList: !0
                }));
            }
        }), n.exports = new s({
            after: {
                render: function() {
                    this.listHeaderView = new r({
                        el: this.el
                    }), this.on("appended", this.listHeaderView.appended, this.listHeaderView);
                },
                teardown: function() {
                    this.listHeaderView.dispose(), this.off("appended", this.listHeaderView.appended, this.listHeaderView);
                }
            }
        });
    }), define("models/pager", ["require", "exports", "module", "vendor/underscore", "lib/model"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = e("lib/model");
        r = n.exports = s.extend({
            defaults: {
                offset: 0,
                limit: 50,
                page: 1
            },
            setup: function() {
                i.bindAll(this, "setCount", "update"), this.bind("change:page", this.update, this), this.bind("change:count", this.update, this), this.get("count") || this.getCount(), this.set("page", Math.floor(this.get("offset") / this.get("limit")) + 1);
            },
            update: function() {
                var e = this.get("page"),
                    t = this.get("limit"),
                    n = this.get("count"),
                    r = e * t - t,
                    i = r + t,
                    s = i > n ? n : i;
                this.set({
                    offset: r,
                    lower_range: r + 1,
                    upper_range: s > n ? n : s
                });
            },
            setCount: function(e) {
                this.set({
                    count: e.count
                });
            },
            getCount: function() {
                $.ajax({
                    url: this.get("url"),
                    success: this.setCount
                });
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/pager-view"] = function(obj) {
            var __p = [],
                print = function() {
                    __p.push.apply(__p, arguments);
                };
            with(obj || {}) __p.push(""), upper_range < count && __p.push("\n  ", ("" + lower_range).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), " – ", ("" + upper_range).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), " of\n"), __p.push("\n", ("" + count).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), " ", ("" + type).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n<a class="pager-newer ', ("" + newer_disabled).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '">', ("" + prev).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</a>\n<a class="pager-older ', ("" + older_disabled).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '">', ("" + next).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</a>\n");
            return __p.join("");
        };
    }.call(this), define("views/pager-view", ["require", "exports", "module", "vendor/underscore", "lib/view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/view"),
            s = {};
        n.exports = s = i.extend({
            className: "pager",
            setup: function() {
                this.options.fetch = !1, this.model.on("change", function() {
                    this.render();
                }, this);
            },
            events: {
                "click .pager-newer": "goToNewerPage",
                "click .pager-older": "goToOlderPage"
            },
            template: JST["templates/pager-view"],
            hasData: function() {
                return this.model.has("lower_range") && this.model.has("upper_range");
            },
            getTemplateData: function() {
                var e = this.model.toJSON();
                return r.extend(e, {
                    newer_disabled: e.lower_range === 1 ? "disabled" : "",
                    older_disabled: e.upper_range >= e.count ? "disabled" : "",
                    type: this.options.type || "items",
                    prev: this.options.prev || "Newer",
                    next: this.options.next || "Older"
                }), e;
            },
            goToNewerPage: function() {
                var e = this.model.get("page");
                e > 1 && this.model.set({
                    page: e - 1
                });
            },
            goToOlderPage: function() {
                var e = this.model.toJSON(),
                    t = e.page,
                    n = e.offset,
                    r = e.limit,
                    i = e.count;
                n + r < i && this.model.set({
                    page: t + 1
                });
            }
        });
    }), define("lib/views/mixins/list-pager", ["require", "exports", "module", "vendor/underscore", "models/pager", "views/pager-view", "lib/view", "lib/mixin"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("models/pager"),
            s = e("views/pager-view"),
            o = e("lib/view"),
            u = e("lib/mixin");
        n.exports = new u({
            after: {
                render: function() {
                    this.setPager();
                },
                remove: function() {
                    this.pager.model.off(), this.pager.remove();
                }
            },
            defaults: {
                render: function() {
                    return o.prototype.render.apply(this, arguments);
                }
            },
            setPager: function() {
                this.pager && this.pager.remove(), this.updatePager();
            },
            updatePager: function() {
                this.pager && this.pager.model.off();
                var e = this.$(".pager");
                if (e.length) {
                    var t = r.extend({
                        el: e,
                        model: new i({
                            url: r.result(this.collection, "countUrl"),
                            limit: this.collection.options.limit,
                            offset: this.collection.options.offset
                        })
                    }, r.result(this, "pagerOptions"));
                    this.pager = new s(t), this.pager.model.bind("change:page", function(e) {
                        this.collection.fetch({
                            offset: e.get("offset")
                        });
                    }, this);
                }
            }
        });
    }), define("models/track-blacklisting", ["require", "exports", "module", "app", "vendor/underscore", "lib/model"], function(e, t, n) {
        var r = e("app"),
            i = e("vendor/underscore"),
            s = e("lib/model"),
            o = {};
        n.exports = o = s.extend({
            defaults: {
                external_id: null,
                permalink: null,
                state: "resolving",
                surface: !1,
                is_dmca: !1,
                reference_artist: null,
                reference_title: null,
                strikeable: !0,
                rightsholder: null,
                whitelisted_user: !1,
                cpp_user: !1,
                whitelisted_user_isrc: !1
            },
            url: "/_api/blacklist/tracks",
            initialize: function() {
                i.bindAll(this, "_success", "_fail"), this.get("date") || this.set({
                    date: this._getDate()
                }), this.get("external_id") || this.takedown();
            },
            _getDate: function() {
                var e = new Date,
                    t = ("0" + e.getDate()).slice(-2),
                    n = ("0" + (e.getMonth() + 1)).slice(-2),
                    r = e.getFullYear();
                return [t, n, r].join(".");
            },
            _fail: function(e) {
                var t = e.status,
                    n = this;
                e.globalError = !1, typeof t == "number" ? t === 0 || t === 408 || t >= 500 ? n.set({
                    state: "timeout",
                    surface: !0
                }) : t === 401 ? r.Router.logout() : t === 404 ? n.set({
                    state: "not found",
                    surface: !0
                }) : n.set({
                    state: "not found",
                    surface: !0
                }) : n.set({
                    state: "not found",
                    surface: !0
                });
            },
            _success: function(e) {
                var t = this;
                e.tracks ? (i.each(e.tracks, function(e) {
                    e.is_dmca = t.get("is_dmca");
                    var n = new o(e);
                    t.collection.add(n), n.takedown();
                }), t.set({
                    state: "set"
                })) : (t.set(e), t.takedown(), e.state === "duplicate" && t.set({
                    surface: !0
                }));
            },
            setWarningMessage: function(e) {
                var t;
                try {
                    t = JSON.parse(e.responseText);
                } catch (n) {}
                t && this.set({
                    whitelisted_user: t.error == "user is whitelisted",
                    whitelisted_user_isrc: t.error == "user has isrc whitelistings",
                    cpp_user: t.error == "user is content partner"
                });
            },
            takedown: function() {
                this.set({
                    state: "saving"
                });
                var e = this,
                    t = {
                        500: "error",
                        412: "rejected",
                        404: "not found",
                        0: "timeout",
                        408: "timeout",
                        422: "malformed",
                        201: "created",
                        200: "duplicate"
                    };
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    data: {
                        url: e.get("permalink_url"),
                        force: this.get("force") || !1,
                        reference_artist: this.get("reference_artist"),
                        reference_title: this.get("reference_title"),
                        strikeable: this.get("strikeable"),
                        is_dmca: this.get("is_dmca"),
                        rightsholder: this.get("rightsholder"),
                        rightsholder_name: this.get("rightsholder_name")
                    },
                    url: "/_api/blacklist/tracks",
                    success: function(n, r, i) {
                        n.state = t[i.status], n.response = i.body, e.set(n);
                    },
                    error: function(n) {
                        n.globalError = !1, e.setWarningMessage(n), e.set({
                            state: t[n.status]
                        });
                    }
                });
            }
        });
    }), define("lib/mixins/paged-collection", ["require", "exports", "module", "lib/mixin", "lib/collection", "vendor/underscore"], function(e, t, n) {
        var r = e("lib/mixin"),
            i = e("lib/collection"),
            s = e("vendor/underscore");
        n.exports = new r({
            applyTo: function(e) {
                e.defaults || (e.defaults = {}), this.defaults(e.defaults, {
                    offset: 0,
                    limit: 50
                });
            },
            fetch: function(e) {
                return e = e || {}, "offset" in e && (this.options.offset = e.offset), "limit" in e && (this.options.limit = e.limit), e = s.extend({
                    data: {
                        offset: this.options.offset,
                        limit: this.options.limit
                    }
                }, e), i.prototype.fetch.call(this, e);
            }
        });
    }), define("collections/track-blacklisting", ["require", "exports", "module", "lib/collection", "lib/mixins/paged-collection", "models/track-blacklisting"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("lib/mixins/paged-collection"),
            s = e("models/track-blacklisting"),
            o = {};
        n.exports = o = r.extend({
            mixins: [i],
            model: s,
            defaults: {
                limit: 50,
                offset: 0
            },
            url: "/_api/blacklist/tracks",
            countUrl: "/_api/blacklist/tracks/count"
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/track-blacklisting"] = function(obj) {
            var __p = [],
                print = function() {
                    __p.push.apply(__p, arguments);
                };
            with(obj || {}) __p.push(""), state == "rejected" ? (__p.push('\n\n  <td class="bl-permalink-url">\n    <a href="', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '" target="_blank">\n      ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </a>\n  </td>\n\n  <td class="actions" colspan="3">\n    <label class="warning" >\n      '), whitelisted_user ? __p.push("\n          Whitelisted user. Please confirm takedown.\n      ") : cpp_user ? __p.push("\n          User is content partner. Please confirm takedown.\n      ") : whitelisted_user_isrc && __p.push("\n          User has ISRCs whitelisted. Please confirm takedown.\n      "), __p.push('\n    </label>\n    <span class="keep-together">\n      <a class="force sc-button sc-button-small">Confirm takedown</a>\n      <a class="do-not-takedown sc-button sc-button-small sc-button-text cancel">Cancel</a>\n    </span>\n  </td>\n\n')) : state == "created" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Taken down</span>\n    ', ("" + date).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td class="bl-blacklisted-by">\n    <span class="data-label">Requested by</span>\n    ', ("" + blacklisted_by).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </td>\n\n") : state == "resolving" || state == "saving" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <img src="/assets/images/spinner.gif" width="16" height="16" alt="', ("" + state).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '..." />\n  </td>\n\n  <td class="bl-blacklisted-by"></td>\n\n') : state == "duplicate" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Duplicate</span>\n  </td>\n\n  <td class="bl-blacklisted-by"></td>\n\n') : state == "error" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Error</span>\n  </td>\n\n  <td class="bl-blacklisted-by"></td>\n\n') : state == "malformed" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Error: check rightsholder spelling</span>\n  </td>\n\n  <td></td>\n\n') : state == "not found" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Not Found</span>\n  </td>\n\n  <td></td>\n\n') : state == "timeout" && __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td colspan="2">\n    <label class="warning">\n      Request timed out.\n    </label>\n    <span class="keep-together">\n      <a class="retry sc-button sc-button-small">Retry</a>\n      <a class="do-not-takedown sc-button sc-button-small sc-button-text cancel">Cancel</a>\n    </span>\n  </td>\n\n'), __p.push("\n");
            return __p.join("");
        };
    }.call(this), define("views/track-blacklisting-view", ["require", "exports", "module", "vendor/underscore", "lib/backbone"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = {};
        n.exports = s = i.View.extend({
            tagName: "tr",
            className: "list-item",
            initialize: function() {
                r.bindAll(this, "render", "highlight", "_takedown", "_force", "checkState", "toSurface"), this.render(), this.model.bind("change", this.render), this.model.bind("change", this.highlight), this.model.bind("change:state", this.checkState), this.model.bind("change:surface", this.toSurface);
            },
            events: {
                "click a.do-not-takedown": "_do_not_takedown",
                "click a.confirm": "_takedown",
                "click a.force": "_force",
                "click a.retry": "_retry"
            },
            template: JST["templates/track-blacklisting"],
            highlight: function() {
                var e = $(this.el);
                e.addClass("new"), setTimeout(function() {
                    e.removeClass("new");
                }, 3e3);
            },
            toSurface: function(e, t) {
                if (t !== !0) return;
                var n = $(this.el);
                return n.prependTo(n.parent()), this;
            },
            render: function() {
                return $(this.el).html(this.template(this.model.toJSON())), this;
            },
            _retry: function(e) {
                return e = e && e.preventDefault(), this.model.set({
                    state: "resolving"
                }), this.model._resolve(this.model.get("permalink_url")), this;
            },
            _do_not_takedown: function(e) {
                e = e && e.preventDefault(), this.model.destroy(), this.remove();
            },
            _force: function(e) {
                e = e && e.preventDefault(), this.model.set({
                    force: !0
                }), this._takedown();
            },
            _takedown: function(e) {
                e = e && e.preventDefault(), this.model.takedown();
            },
            checkState: function(e, t) {
                var n = {
                    "not found": function(e) {
                        e.model.collection.remove(e.model);
                    },
                    "new": $.noop,
                    set: function(e) {
                        e.model.collection.remove(e.model), e.remove();
                    },
                    duplicate: $.noop,
                    saving: $.noop,
                    created: $.noop,
                    timeout: $.noop,
                    rejected: $.noop,
                    error: $.noop,
                    malformed: $.noop
                };
                if (!n[t]) throw "Unexpected track blacklisting state " + t;
                n[t](this);
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/track-blacklist"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["track-blacklist"] = Handlebars.template(function(e, t, n, r, i) {
                function a(e, t) {
                    return '\n                <label class="form-checkbox-group-label" for="reference-non-strikeable">\n                  <input type="checkbox" name="reference-non-strikeable" id="reference-non-strikeable" required/>\n                  I don’t want this takedown to result in a strike for the user.\n                </label>\n                <label class="form-checkbox-group-label">\n                  Users receive strikes for copyright infringement. In accordance with SoundCloud’s copyright policy, accounts of repeat infringers will be automatically terminated to prevent further copyright infringement. If you tick the check-box, the account may not be terminated on grounds of your takedown.\n                  <br />\n                  <br />\n                  <a href="/#/help/What-does-the-checkbox-for-optional-strikes-do">What does this mean?</a>\n                </label>\n              ';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = this;
                s += '<div class="l-header header">\n\n  <div class="header-tools">\n\n    <span class="pager"></span>\n\n    <button class="sc-button sc-button-small sc-button-add show-form">\n      Take Down Tracks\n    </button>\n\n    <button class="sc-button sc-button-small sc-button-caret hide-form">\n      Close\n    </button>\n\n  </div>\n\n  <h2>Takedowns</h2>\n\n  <div class="section drawer">\n    <div class="drawer-liner has-toolbar">\n\n      <form name="takedown-form" action="">\n        <ul id="takedown-nav" class="nav nav-tabs nav-drawer">\n          <li id="takedown-manual-tab-btn" role="presentation" class="active" class="sc-link-light" data-toggle="tab"><a class="sc-link-light">Manual takedown</a></li>\n          <li id="takedown-from-file-tab-btn" role="presentation" class="sc-link-light"  data-toggle="tab"><a class="sc-link-light">From file</a></li>\n        </ul>\n        <div class="two-column-form sc-clearfix">\n          <div class="two-column-form-left-column">\n            <div id="takedown-from-file-tab">\n              <h3 class="g-type-h1">Import takedowns from CSV file</h3>\n              <div class="form-input">\n                <label class="form-checkbox-group-label">\n                  Take down more than one track using the CSV upload tool. The tool supports taking down tracks that infringe on multiple copyrighted works.\n                  <br/>\n                  Check out the <a href="/assets/sample.csv">sample CSV</a> file to understand the syntax.\n                  <br/>\n                  For detailed instructions, check out our <a href="/help/csv-tool.pdf">CSV takedown tool user guide.</a>\n                </label>\n                \n                <input type="file" class="sc-visuallyhidden" id="takedown-form-file" name="takedown-form-file" value="Upload CSV"/>\n                <div class="upload-button">\n                  <label for="takedown-form-file" name="takedown-form-file-label" class="sc-button sc-button-large">Select File</label>\n                  <label id="takedown-form-file-name">No file selected</label>\n                </div>\n                <label class="error" id="takedown-form-file-malformed">The file you provided is invalid. Please check the syntax.</label>\n                <label class="feedback" id="takedown-form-file-ok">The file is ready to be processed. Confirm using the “Take down” button on the right to take down the tracks listed in the file.</label>\n              </div>\n            </div>\n            \n            <div id="takedown-manual-tab">\n              <div id="rightsholders-select">\n              </div>\n              <h3 class="g-type-h1">Enter the artist name and title of the copyrighted work</h3>\n              <div class="two-column-form sc-clearfix">\n                <div class="two-column-form-left-column">\n                  <div class="form-input">\n                    <label for="reference-artist" title="Enter Artist Name">Artist Name</label>\n                    <input type="text" name="reference-artist" value="" id="reference-artist" required autocorrect="off" autocapitalize="off" />\n                  </div>\n                </div>\n                <div class="two-column-form-right-column">\n                  <div class="form-input">\n                    <label for="reference-title" title="Enter Track Title">Title</label>\n                    <input type="text" name="reference-title" id="reference-title" required autocorrect="off" autocapitalize="off"/>\n                  </div>\n                </div>\n              </div>\n              <label class="form-checkbox-group-label">\n                All URLs submitted need to match the metadata you provided. If you want to take down tracks infringing on several different copyrighted works consider using the CSV importer tool.\n              </label>\n              ', o = n["if"].call(t, t.hasOptionalStrikesCapability, {
                    hash: {},
                    inverse: u.noop,
                    fn: u.program(1, a, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += '\n              <h3 class="g-type-h1">Paste list of infringing URLs</h3>\n              <div class="form-input">\n                <label for="takedown-form-urls" title="Please enter one or more URLs, e.g. http://soundcloud.com/username/track-to-take-down">URLs</label>\n                <textarea name="takedown-form-urls" id="takedown-form-urls" placeholder="http://soundcloud.com/username/track-to-take-down" autocorrect="off" autocapitalize="off"></textarea>\n              </div>\n            </div>\n          </div>  \n\n          <div id="dmca-statements" class="two-column-form-right-column">\n\n            <div id="takedown-form-checkbox-group" class="form-checkbox-group">\n\n              <div class="form-checkbox">\n                <label for="is-dmca">\n                  The take down notice was filed pursuant to the United States <strong>Digital Millennium Copyright Act</strong> U.S.C. 17 §512(c).\n                </label>\n                <input type="checkbox" name="is-dmca" id="is-dmca" value="true" />\n              </div>\n\n            </div>\n          </div>\n          \n          <div id="non-dmca-statements" class="two-column-form-right-column">\n            <h3 class="g-type-h1">Agree with the following statements</h3>\n            \n\n            <div id="takedown-form-checkbox-group" class="form-checkbox-group">\n\n              <label class="form-checkbox-group-label">\n                I have listened to these sounds in their entirety, and confirm that:\n              </label>\n\n              <div class="form-checkbox">\n                <label for="controlled-by-me">\n                  the sounds comprise or contain copyright work(s) owned and/or exclusively controlled by me or the company that I represent;\n                </label>\n                <input type="checkbox" name="controlled-by-me" id="controlled-by-me" value="true" required />\n              </div>\n\n              <div class="form-checkbox">\n                <label for="user-not-authorized">\n                  the SoundCloud user who uploaded these sounds has not been authorized to do so by me or the company that I represent;\n                </label>\n                <input type="checkbox" name="user-not-authorized" id="user-not-authorized" value="true" required />\n              </div>\n\n              <div class="form-checkbox">\n                <label for="am-liable">\n                  I am authorized to take down these sounds, and understand that I may be liable for any damage suffered by SoundCloud if I take down sounds to which I do not own or control the relevant rights.\n                </label>\n                <input type="checkbox" name="am-liable" id="am-liable" value="true" required />\n              </div>\n\n              <label class="form-checkbox-group-label error" id="takedown-conditions">You must confirm your agreement to these statements.</label>\n            </div>\n          </div>\n        </div>\n        <div class="submit-wrapper takedown-form-above-baseline">\n          <div class="sc-button-toolbar">\n            <a class="sc-button sc-button-large sc-button-text cancel" title="Cancel">Cancel</a>\n            <input type="submit" class="sc-button sc-button-large" id="arms-submit-blacklist" name="arms-submit-blacklist" value="Take down" disabled>\n          </div>\n        </div>\n\n      </form>\n    </div>\n\n  </div> <!-- section -->\n  <div class="shadow"></div>\n</div> <!-- header -->\n\n\n<div class="section list">\n  <table class="list-items list-items-cleared applications-list">\n    <thead class="list-items-header">\n      <tr>\n        <td class="takedowns-url-header">URL</td>\n        <td class="takedowns-date-header">Date</td>\n        <td class="takedowns-resolution-header"></td>\n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n  </table>\n\n  <div class="l-footer" data-state="ready drawerOpen">\n  </div> <!-- /footer -->\n\n</div> <!-- section -->\n', s;
            }), this.HandlebarsTemplates["track-blacklist"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/track-blacklisting"] = function(obj) {
            var __p = [],
                print = function() {
                    __p.push.apply(__p, arguments);
                };
            with(obj || {}) __p.push(""), state == "rejected" ? (__p.push('\n\n  <td class="bl-permalink-url">\n    <a href="', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '" target="_blank">\n      ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </a>\n  </td>\n\n  <td class="actions" colspan="3">\n    <label class="warning" >\n      '), whitelisted_user ? __p.push("\n          Whitelisted user. Please confirm takedown.\n      ") : cpp_user ? __p.push("\n          User is content partner. Please confirm takedown.\n      ") : whitelisted_user_isrc && __p.push("\n          User has ISRCs whitelisted. Please confirm takedown.\n      "), __p.push('\n    </label>\n    <span class="keep-together">\n      <a class="force sc-button sc-button-small">Confirm takedown</a>\n      <a class="do-not-takedown sc-button sc-button-small sc-button-text cancel">Cancel</a>\n    </span>\n  </td>\n\n')) : state == "created" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Taken down</span>\n    ', ("" + date).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td class="bl-blacklisted-by">\n    <span class="data-label">Requested by</span>\n    ', ("" + blacklisted_by).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </td>\n\n") : state == "resolving" || state == "saving" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <img src="/assets/images/spinner.gif" width="16" height="16" alt="', ("" + state).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '..." />\n  </td>\n\n  <td class="bl-blacklisted-by"></td>\n\n') : state == "duplicate" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Duplicate</span>\n  </td>\n\n  <td class="bl-blacklisted-by"></td>\n\n') : state == "error" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Error</span>\n  </td>\n\n  <td class="bl-blacklisted-by"></td>\n\n') : state == "malformed" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Error: check rightsholder spelling</span>\n  </td>\n\n  <td></td>\n\n') : state == "not found" ? __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td>\n    <span class="data-label">Not Found</span>\n  </td>\n\n  <td></td>\n\n') : state == "timeout" && __p.push('\n\n  <td class="bl-permalink-url">\n    ', ("" + permalink_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </td>\n\n  <td colspan="2">\n    <label class="warning">\n      Request timed out.\n    </label>\n    <span class="keep-together">\n      <a class="retry sc-button sc-button-small">Retry</a>\n      <a class="do-not-takedown sc-button sc-button-small sc-button-text cancel">Cancel</a>\n    </span>\n  </td>\n\n'), __p.push("\n");
            return __p.join("");
        };
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/rightsholders-select"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["rightsholders-select"] = Handlebars.template(function(e, t, n, r, i) {
                function c(e, t) {
                    var r = "",
                        i;
                    r += '\n    <h3 class="g-type-h1">Issue takedowns on behalf of</h3>\n    <select name="rightsholder" id="rightsholder-select">\n      ', i = n.each.call(e, e.rightsholders, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.programWithDepth(h, t, e),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "\n    </select>\n  ", r;
                }

                function h(e, t, r) {
                    var i = "",
                        s, o, c;
                    i += '\n      <option value="', (s = n.id) ? s = s.call(e, {
                        hash: {},
                        data: t
                    }) : (s = e.id, s = typeof s === u ? s.apply(e) : s), i += a(s) + '"\n      ', c = {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(3, p, t),
                        data: t
                    }, o = (s = n.equals, s ? s.call(e, e.id, r.rightsholderId, c) : l.call(e, "equals", e.id, r.rightsholderId, c));
                    if (o || o === 0) i += o;
                    return i += ">\n      ", (o = n.name) ? o = o.call(e, {
                        hash: {},
                        data: t
                    }) : (o = e.name, o = typeof o === u ? o.apply(e) : o), i += a(o) + "\n      </option>\n      ", i;
                }

                function p(e, t) {
                    return 'selected="selected"';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this,
                    l = n.helperMissing;
                s += "<div>\n  ", o = n["if"].call(t, t.rightsholders, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, c, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += "\n</div>\n", s;
            }), this.HandlebarsTemplates["rightsholders-select"];
        }.call(this);
    }.call(this), define("views/track-blacklist-view", ["require", "exports", "module", "app", "lib/list-view", "vendor/underscore", "lib/sc", "lib/url", "lib/backbone", "collections/rightsholders", "lib/views/mixins/list-errors", "lib/views/mixins/drawer", "lib/views/mixins/list-header", "lib/views/mixins/list-pager", "models/track-blacklisting", "collections/track-blacklisting", "views/track-blacklisting-view"], function(e, t, n) {
        var r, i, s = e("app"),
            o = e("lib/list-view"),
            u = e("vendor/underscore"),
            a = e("lib/sc"),
            f = e("lib/url"),
            l = e("lib/backbone"),
            c = e("collections/rightsholders"),
            h = e("lib/views/mixins/list-errors"),
            p = e("lib/views/mixins/drawer"),
            d = e("lib/views/mixins/list-header"),
            v = e("lib/views/mixins/list-pager"),
            m = e("models/track-blacklisting"),
            g = e("collections/track-blacklisting"),
            y = e("views/track-blacklisting-view");
        i = n.exports = l.View.extend({
            template: JST["templates/rightsholders-select"],
            render: function() {
                return this.$el.html(this.template(this.model)), this;
            }
        }), r = n.exports = o.extend({
            mixins: [p, h, d, v],
            template: JST["templates/track-blacklist"],
            itemTemplate: JST["templates/track-blacklisting"],
            collection: g,
            setup: function() {
                u.bindAll(this, "render", "toggleTabs"), this.hasDmcaCapability = s.currentUser.hasCapability("dmca"), this.hasAntipiracyAgentCapability = s.currentUser.hasCapability("antipiracy-agent"), this.hasOptionalStrikesCapability = s.currentUser.hasCapability("optional-strikes"), this.collection = new g, this.collection.bind("reset", this.refreshBlacklist, this), this.collection.bind("add", this.prependBlacklist, this), this.hasAntipiracyAgentCapability && this.fetchRighsholders(), this.render();
            },
            events: {
                "click .cancel": "reset",
                "click input[type=submit]": "submit",
                "click #takedown-manual-tab-btn": "toggleTabs",
                "click #takedown-from-file-tab-btn": "toggleTabs",
                "change input[id=takedown-form-file]": "onFileSelect",
                "change form": "validateInput",
                "keyup form": "validateInput",
                'change [name="controlled-by-me"]': "validateCheckboxes",
                'change [name="user-not-authorized"]': "validateCheckboxes",
                'change [name="am-liable"]': "validateCheckboxes"
            },
            dispose: function() {
                this.rightsholders && (this.rightsholders.release(), this.rightsholders.off(null, null, this));
            },
            toggleTabs: function(e) {
                this.selectTab(this.$(e.currentTarget));
            },
            selectTab: function(e) {
                this.$("#takedown-nav li").removeClass("active"), this.$(e).addClass("active"), this.$("#takedown-manual-tab").toggle(this.$("#takedown-manual-tab-btn").is(e)), this.$("#takedown-from-file-tab").toggle(this.$("#takedown-from-file-tab-btn").is(e)), this.updateDrawerHeight();
            },
            render: function() {
                return o.prototype.render.apply(this, arguments), this.prepareForm(), this.table = this.$(".list-items tbody"), this.inputReferenceArtist = this.$('[name="reference-artist"]'), this.inputReferenceTitle = this.$('[name="reference-title"]'), this.inputReferenceNonStrikeable = this.$("[name=reference-non-strikeable]"), this.inputTakedownsFile = this.$('[name="takedown-form-file"]'), this.malformedFileWaring = this.$("#takedown-form-file-malformed"), this.fileOkWaring = this.$("#takedown-form-file-ok"), this.takedownsFileName = this.$("#takedown-form-file-name"), this.submitButton = this.$("#arms-submit-blacklist"), this.dmcaStatemets = this.$("#dmca-statements").toggle(this.hasDmcaCapability), this.nondmcaStatemets = this.$("#non-dmca-statements").toggle(!this.hasDmcaCapability), this.inputIsDMCA = this.$('[name="is-dmca"]'), this.haveConfirmed = this.$("#takedown-conditions"), this.takedownManualTab = this.$("#takedown-manual-tab"), this.takedownFromFileTab = this.$("#takedown-from-file-tab"), this;
            },
            cleanUrls: function() {
                return u.chain(this.$('[name="takedown-form-urls"]').val().split("\n")).reject(function(e) {
                    return e.length === 0;
                }).uniq().map(f.normalize).value();
            },
            prepareForm: function() {
                this.$("form").trigger("reset"), this.$("#takedown-form-file-name").html("No file selected"), this.selectTab(this.$("#takedown-manual-tab-btn")), this.$("#takedown-form-file-malformed").hide(), this.$("#takedown-form-file-ok").hide(), this.$("#takedown-conditions").hide(), this.takedownsFromFile = [];
            },
            reset: function() {
                this.prepareForm(), this.validateInput(), this.closeDrawer();
            },
            fetchRighsholders: function() {
                this.rightsholders = new c, this.rightsholders.fetch({
                    success: u.bind(function() {
                        this.rightsholderSelect = new i({
                            el: this.$("#rightsholders-select"),
                            model: {
                                rightsholders: this.rightsholders.toJSON().sort(function(e, t) {
                                    return e.name > t.name ? 1 : -1;
                                }),
                                rightsholderId: s.currentUser.get("rightsholders")[0]
                            }
                        }), this.rightsholderSelect.render();
                    }, this)
                });
            },
            appendBlacklist: function(e) {
                var t = new y({
                    model: e
                });
                this.table.append(t.el);
            },
            prependBlacklist: function(e) {
                var t = new y({
                    model: e
                });
                this.table.prepend(t.el);
            },
            refreshBlacklist: function() {
                this.table.html(""), this.collection.each(this.appendBlacklist, this), this.reset();
            },
            createBlacklisting: function(e) {
                var t = this.hasDmcaCapability && this.inputIsDMCA.is(":checked"),
                    n = new m({
                        permalink_url: a.ensureUrl(e.permalinkURL),
                        blacklisted_by: e.blacklistedBy,
                        reference_artist: e.artist,
                        reference_title: e.title,
                        strikeable: e.strikeable,
                        is_dmca: t,
                        rightsholder: e.rightsholderId,
                        rightsholder_name: e.rightsholderName
                    });
                this.collection.add(n);
            },
            submitFromFile: function() {
                this.takedownsFromFile.forEach(function(e) {
                    this.createBlacklisting({
                        permalinkURL: e.url,
                        artist: e.artist,
                        title: e.title,
                        strikeable: !0,
                        blacklistedBy: s.currentUser.get("username"),
                        rightsholderId: e.rightsholderId,
                        rightsholderName: e.rightsholderName
                    });
                }.bind(this));
            },
            submitManual: function() {
                this.cleanUrls().forEach(function(e) {
                    this.createBlacklisting({
                        permalinkURL: e,
                        artist: this.inputReferenceArtist.val(),
                        title: this.inputReferenceTitle.val(),
                        strikeable: !this.inputReferenceNonStrikeable.is(":checked"),
                        blacklistedBy: s.currentUser.get("username"),
                        rightsholderId: this.selectedRighsholderId(),
                        rightsholderName: null
                    });
                }.bind(this));
            },
            selectedRighsholderId: function() {
                return this.hasAntipiracyAgentCapability && this.rightsholderSelect ? this.rightsholderSelect.$el.find("select").val() : null;
            },
            submit: function() {
                this.validateInput();
                if (!this.manualInputValid && !this.fileInputValid) return;
                this.validateCheckboxes();
                if (!this.checkboxValid) {
                    this.haveConfirmed.show();
                    return;
                }
                this.fileInputValid ? this.submitFromFile() : this.manualInputValid && this.submitManual(), this.reset();
            },
            onFileSelect: function(e) {
                var t = e.target.files[0];
                this.takedownsFromFile = undefined;
                if (t) {
                    this.$("#takedown-form-file-name").html(t.name);
                    var n = new FileReader;
                    n.onload = function(e) {
                        var t = e.target.result;
                        try {
                            $.csv.toObjects(t, {}, function(e, t) {
                                this.takedownsFromFile = t;
                            }.bind(this));
                        } finally {
                            this.showFileWarnings();
                        }
                    }.bind(this), n.readAsText(t);
                } else this.showFileWarnings();
            },
            showFileWarnings: function() {
                this.validateInput(), this.malformedFileWaring.toggle(!this.fileInputValid), this.fileOkWaring.toggle(this.fileInputValid);
            },
            checkCheckboxes: function() {
                if (this.hasDmcaCapability) return !0;
                var e = this.$('[name="controlled-by-me"]'),
                    t = this.$('[name="user-not-authorized"]'),
                    n = this.$('[name="am-liable"]'),
                    r = [e, t, n];
                return u.every(r, function(e) {
                    return e.is(":checked");
                });
            },
            checkManualInput: function() {
                return this.takedownManualTab.is(":visible") && !!this.inputReferenceTitle.val() && !!this.inputReferenceArtist.val() && this.cleanUrls().length > 0;
            },
            checkFileInput: function() {
                return this.takedownFromFileTab.is(":visible") && !!this.takedownsFromFile && this.takedownsFromFile.length > 0 && this.takedownsFromFile.every(function(e) {
                    return "artist" in e && "title" in e && "url" in e && e.artist.length > 0 && e.title.length > 0 && e.url.length > 0;
                });
            },
            validateCheckboxes: function() {
                this.checkboxValid = this.checkCheckboxes(), this.checkboxValid && this.haveConfirmed.hide();
            },
            validateInput: function() {
                this.manualInputValid = this.checkManualInput(), this.fileInputValid = this.checkFileInput(), this.submitButton.attr("disabled", !this.manualInputValid && !this.fileInputValid);
            },
            getTemplateData: function() {
                var e = [],
                    t;
                return this.rightsholders && (e = this.rightsholders.toJSON().sort(function(e, t) {
                    return e.name > t.name ? 1 : -1;
                }), t = this.rightsholders.get(this.rightsholderId)), {
                    rightsholderId: this.rightsholderId,
                    rightsholderName: t && t.get("name"),
                    rightsholders: e,
                    hasOptionalStrikesCapability: this.hasOptionalStrikesCapability
                };
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/notification"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.notification = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<div class="notice ', (o = n.severity) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.severity, o = typeof o === u ? o.apply(t) : o), s += a(o) + '-notice">\n  ', (o = n.message) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.message, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n  <button class="hide-msg" title="Hide message"></button>\n</div>\n', s;
            }), this.HandlebarsTemplates.notification;
        }.call(this);
    }.call(this), define("lib/backbone-notifications", ["require", "exports", "module", "vendor/underscore", "lib/backbone"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = {};
        t.Notification = s.Notification = i.Model.extend({
            defaults: {
                severity: "warning",
                message: "An undefined error has occurred."
            }
        }), t.Notifications = s.Notifications = i.Collection.extend({
            model: s.Notification
        }), t.NotificationView = s.NotificationView = i.View.extend({
            tagName: "section",
            className: "notice-wrapper",
            template: JST["templates/notification"],
            events: {
                "click .hide-msg": "hide"
            },
            initialize: function(e) {
                this.model = new s.Notification(e), this.model.on("change", this.render, this), r.bindAll(this, "hide");
            },
            show: function(e, t) {
                return clearTimeout(this._hide), this.model.set(r.extend({
                    message: e,
                    severity: "warning"
                }, t)), this.$el.show(), t && t.hide && (this._hide = setTimeout(this.hide, typeof t.hide == "number" ? t.hide : 2e3)), this;
            },
            hide: function() {
                return this.$el.hide(), this;
            },
            render: function() {
                return this.$el.html(this.template(this.model.toJSON())), this;
            },
            remove: function() {
                return this.model.off(null, null, this), this.$el.remove(), this;
            },
            has: function(e) {
                return this.model.get("message") === e;
            }
        }), t.NotificationsView = s.NotificationsView = i.View.extend({
            initialize: function() {
                r.bindAll(this, "notify", "prependNotice"), this.collection = new s.Notifications, this.collection.bind("add", this.prependNotice);
            },
            notify: function(e) {
                this.collection.add(e);
            },
            prependNotice: function(e) {
                var t = new s.NotificationView({
                    model: e,
                    collection: this.collection
                });
                $(".notifications-holder").html(t.render().el), $(".page-view").addClass("error-state");
            }
        });
        var o = ["ajaxError"];
        t.AjaxNotification = s.AjaxNotification = s.NotificationView.extend({
            initialize: function() {
                s.NotificationView.prototype.initialize.apply(this, arguments), r.each(o, function(e) {
                    r.bindAll(this, e), $(document).bind(e, this[e]);
                }, this), this.hide(), this.$el.appendTo("body");
            },
            ajaxError: function(e, t, n) {
                if (t.status > 0 && t.status < 600 && t.globalError !== !1) {
                    var r, i = t.getResponseHeader("Content-Type");
                    if (i && i.match(/(application|text\/json)/)) try {
                        r = JSON.parse(t.responseText).error;
                    } catch (o) {}
                    var u = s.AjaxNotification.STATUS_MSG[t.status] || s.AjaxNotification.STATUS_MSG["default"];
                    this.show(u, {
                        severity: "error"
                    });
                    if (s.AjaxNotification.DO_NOT_REPORT.indexOf(t.status) == -1) {
                        var a = "Unexpected response: " + (t ? t.status : "unknown status") + " " + (n && n.url ? n.url : "unknown url") + (r ? " (" + r + ")" : ""),
                            o = new Error(a);
                        throw o.name = "HTTPError", o;
                    }
                }
            },
            remove: function() {
                return r.each(o, function(e) {
                    $(document).unbind(e, this[e]);
                }, this), s.NotificationView.prototype.remove.call(this);
            }
        }, {
            STATUS_MSG: {
                "default": "Something went wrong :(",
                502: "Unable to reach the server.",
                503: "Unable to reach the server.",
                504: "Unable to reach the server."
            },
            DO_NOT_REPORT: [500, 502, 503, 504]
        });
        var u = t.HTTPError = function(e, t, n) {
            this.name = "HTTPError", this.message = "Unexpected response: " + (e ? e.status : "unknown status") + " " + (t && t.url ? t.url : "unknown url") + (n ? " (" + n + ")" : "");
        };
        u.prototype = new Error;
    }), define("models/user", ["require", "exports", "module", "app", "vendor/underscore", "lib/backbone", "app"], function(e, t, n) {
        e("app");
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = e("app"),
            o = {};
        o = n.exports = i.Model.extend({
            url: "/_api/sessions",
            initialize: function() {
                r.bindAll(this, "checkTerms", "fetch", "authenticationError");
            },
            authenticated: function() {
                return !!this.get("user_id");
            },
            authenticate: function(e) {
                this.callback = e, this.fetch();
            },
            fetch: function() {
                i.Model.prototype.fetch.call(this, {
                    authenticating: !0,
                    success: this.checkTerms,
                    error: this.authenticationError
                });
            },
            checkTerms: function(e) {
                this.set(e), this.get("terms_version") < s.terms_version ? s.Router.loginView.terms() : this.authenticationSuccess();
            },
            authenticationError: function(e, t) {
                if (t.status === 401) {
                    var n;
                    try {
                        n = JSON.parse(t.responseText).csrf_token;
                    } catch (r) {
                        window.console.error("Error getting csrf token from the response");
                    }
                    this.set("csrf_token", n), t.globalError = !1, s.Router.loginView.ready();
                }
            },
            authenticationSuccess: function() {
                s.Router.trigger("logged-in"), this.callback();
            },
            hasCapability: function(e) {
                return r.include(this.get("capabilities"), e);
            }
        });
    }), define("models/deck-user", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r = e("lib/model"),
            i;
        i = n.exports = r.extend({
            urlRoot: "/_api/deck_users"
        });
    }), define("collections/deck-users", ["require", "exports", "module", "lib/collection", "models/deck-user"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("models/deck-user"),
            s;
        s = n.exports = r.extend({
            model: i,
            url: "/_api/deck_users",
            fetchByRightsholder: function(e) {
                return this.fetch({
                    data: {
                        rightsholder: e
                    },
                    success: function(t) {
                        t.invoke("set", "rightsholder", e);
                    }
                });
            }
        });
    }), define("collections/capabilities", ["require", "exports", "module", "lib/collection", "lib/backbone", "vendor/underscore"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("lib/backbone"),
            s = e("vendor/underscore"),
            o;
        o = n.exports = r.extend({
            model: i.Model,
            url: function() {
                return "/_api/" + this.options.scope + "/capabilities";
            },
            fetchByRightsholder: function(e) {
                return this.fetch({
                    data: {
                        rightsholder: e
                    }
                });
            },
            order: ["accounts", "user-whitelist", "managed-accounts", "app-whitelist", "stats-reports", "track-blacklist", "users", "dmca", "reports", "priority-content-protection"],
            comparator: function(e) {
                var t = this.order.indexOf(e.id);
                return t > -1 ? t : Infinity;
            },
            getAll: function(e) {
                return s.chain(e).map(function(e) {
                    return this.get(e);
                }, this).compact().value();
            }
        }, {
            hashFn: function(e, t) {
                return t && t.scope || "all";
            }
        });
    }), define("models/user-search-result", ["require", "exports", "module", "lib/backbone", "lib/sc"], function(e, t, n) {
        var r = e("lib/backbone"),
            i = e("lib/sc"),
            s = {};
        n.exports = s = r.Model.extend({
            toJSON: function() {
                var e = r.Model.prototype.toJSON.call(this);
                return e.permalink = e.permalink_url.replace(i.url, ""), e.avatar_url = e.badge.avatar_url, e.whitelisted = e.state === "created", e;
            }
        });
    }), define("views/search-result-view", ["require", "exports", "module", "vendor/underscore", "lib/backbone"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = {};
        n.exports = s = i.View.extend({
            tagName: "li",
            className: "search-result",
            initialize: function() {
                $(this.el).html(this.template(this.model.toJSON()));
            },
            template: r.template("<%- permalink_url %>")
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/user-result"] = function(obj) {
            var __p = [],
                print = function() {
                    __p.push.apply(__p, arguments);
                };
            with(obj || {}) __p.push(""), avatar_url && __p.push('\n<div class="sc-media-image">\n  <div class="image image-has-placeholder image-has-placeholder-user image-has-placeholder-40" style="width: 40px; height: 40px;">\n    <img src="', ("" + avatar_url).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '" width="40" height="40" alt="', ("" + username).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '’s avatar" class="image__full g-opacity-transition" style="opacity: 1;">\n  </div>\n</div>\n'), __p.push('\n\n<div class="sc-media-content">\n  <h3 class="user-badge-title sc-truncate sc-font">\n    ', ("" + username).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), ' <span class="user-badge-subtitle">', ("" + permalink).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</span>\n  </h3>\n  "), badge && badge.tracks_count !== null && badge.followers_count !== null && __p.push('\n    <ul class="stats sc-list-nostyle sc-clearfix stats-small">\n      <li class="stats-item">\n        <span class="sc-icon sc-icon-medium sc-icon-sound-light sc-ir">\n        Sounds:</span> ', ("" + badge.tracks_count).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n      </li>\n      <li class="stats-item">\n        <span class="sc-icon sc-icon-medium sc-icon-follower-light sc-ir">\n        Followers:</span> ', ("" + badge.followers_count).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n      </li>\n    </ul>\n  "), __p.push("\n</div>\n\n"), whitelisted && __p.push('\n  <span class="label label-round">Whitelisted</span>\n'), __p.push("\n");
            return __p.join("");
        };
    }.call(this), define("views/user-result-view", ["require", "exports", "module", "models/user-search-result", "views/search-result-view"], function(e, t, n) {
        var r = e("models/user-search-result"),
            i = e("views/search-result-view"),
            s = {};
        n.exports = s = i.extend({
            className: "drop-down-list-selectable-item search-result user-badge",
            initialize: function() {
                this.model = new r(this.model.toJSON()), $(this.el).html(this.template(this.model.toJSON()));
            },
            template: JST["templates/user-result"]
        });
    }), define("collections/user-results", ["require", "exports", "module", "lib/backbone", "models/user-search-result"], function(e, t, n) {
        var r = e("lib/backbone"),
            i = e("models/user-search-result"),
            s = {};
        n.exports = s = r.Collection.extend({
            model: i,
            url: "/_api/users/search"
        });
    }), define("views/user-search-hint-view", ["require", "exports", "module", "vendor/underscore", "views/stateful-view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("views/stateful-view"),
            s = {};
        n.exports = s = i.extend({
            initialize: function() {
                this.found_label = $('<label class="feedback"></label>'), this.not_found_label = $('<label class="error">Not Found</label>'), this.link_template = r.template('<a href="<%- permalink_url %>" target="_blank">Found user “<%- username %>”</a>'), this.model.bind("change:state", this.triggerStateChange, this), this.model.bind("change:selected", this.triggerStateChange, this), this.triggerStateChange(), $(this.el).append(this.found_label, this.not_found_label);
            },
            states: {
                error: {
                    onEnter: function() {
                        this.found_label.hide(), this.not_found_label.show();
                    }
                },
                success: {
                    onEnter: function() {
                        this.not_found_label.hide(), this.found_label.html(this.link_template(this.model.get("selected").toJSON())).show();
                    }
                },
                initial: {
                    onEnter: function() {
                        this.hide();
                    }
                },
                idle: {
                    onEnter: function() {
                        this.hide();
                    }
                },
                resolving: {
                    onEnter: function() {
                        this.hide();
                    }
                }
            },
            hide: function() {
                this.found_label.hide(), this.not_found_label.hide();
            }
        });
    }), define("views/search-indicator-view", ["require", "exports", "module", "views/stateful-view"], function(e, t, n) {
        var r = e("views/stateful-view"),
            i = {};
        n.exports = i = r.extend({
            tagName: "div",
            className: "search-indicator",
            initialize: function() {
                this.model.bind("change:state", this.triggerStateChange, this), this.triggerStateChange();
            },
            states: {
                initial: {},
                idle: {},
                resolving: {},
                busy: {},
                error: {},
                success: {}
            }
        });
    }), define("views/search-results-view", ["require", "exports", "module", "vendor/underscore", "views/stateful-view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("views/stateful-view"),
            s = {};
        n.exports = s = i.extend({
            tagName: "ul",
            className: "search-results drop-down-list",
            initialize: function() {
                r.bindAll(this, "query", "abortQuery", "navigate", "select", "isHidden", "hide", "show"), this.resultViewType = this.options.resultViewType, this.default_html = '<li><div class="drop-down-list-notice">Searching ...</div></li>', this.no_results_html = '<li><div class="drop-down-list-notice">No results found</div></li>', this.collection.bind("reset", this.fill, this), this.model.set({
                    index: -1
                }), this.model.bind("change:index", this.updateCursor, this), this.model.bind("change:state", this.triggerStateChange, this), this.ready();
            },
            states: {
                initial: {
                    onEnter: function() {
                        this.ready();
                    }
                },
                busy: {
                    onEnter: function() {
                        this.collection.length === 0 && this.ready();
                    }
                },
                idle: {},
                error: {},
                resolving: {},
                no_results: {
                    onEnter: function() {
                        $(this.el).html(this.no_results_html);
                    }
                }
            },
            query: function(e) {
                this.pendingQuery && this.pendingQuery.abort(), this.pendingQuery = this.collection.fetch({
                    data: {
                        query: e
                    }
                });
            },
            abortQuery: function() {
                this.pendingQuery && (this.pendingQuery.abort(), this.model.set({
                    state: "idle"
                }));
            },
            fill: function() {
                this.model.set({
                    index: -1
                }), this.collection.length === 0 ? this.model.set({
                    state: "no_results"
                }) : ($(this.el).html(""), r.each(this.collection.models, this.appendToResults, this), this.model.set({
                    index: 0
                }));
            },
            appendToResults: function(e) {
                var t = new this.resultViewType({
                    model: e
                });
                $(this.el).append(t.el);
            },
            ready: function() {
                $(this.el).html(this.default_html), this.collection.reset([], {
                    silent: !0
                }), this.model.set({
                    index: -1
                }), this.model.unset("selected", {
                    silent: !0
                });
            },
            updateCursor: function() {
                var e = this.model.get("index");
                $("li.drop-down-list-selectable-item", this.el).removeClass("drop-down-list-cursor"), $("li.drop-down-list-selectable-item", this.el).eq(e).addClass("drop-down-list-cursor");
            },
            navigate: function(e) {
                if (this.isHidden()) return this.show();
                this.abortQuery();
                var t = e === "down" ? 1 : -1,
                    n = this.model.get("index") + t,
                    r = this.collection.length - 1;
                if (n < 0 || n > r) return;
                this.model.set({
                    index: n
                });
            },
            setSelected: function(e) {
                this.model.set({
                    index: e
                }), this.select();
            },
            select: function() {
                if (this.isHidden()) return this.show();
                var e = this.collection.at(this.model.get("index"));
                if (!e) return;
                this.model.set({
                    selected: e
                }), this.hide();
            },
            isHidden: function() {
                return $(this.el).is(":hidden");
            },
            show: function() {
                $(this.el).slideDown(300);
            },
            hide: function() {
                $(this.el).slideUp(300);
            }
        });
    }), define("views/search-view", ["require", "exports", "module", "app", "vendor/underscore", "lib/backbone", "views/search-indicator-view", "views/search-results-view"], function(e, t, n) {
        var r = e("app"),
            i = e("vendor/underscore"),
            s = e("lib/backbone"),
            o = e("views/search-indicator-view"),
            u = e("views/search-results-view"),
            a = {};
        n.exports = a = s.View.extend({
            initialize: function() {
                i.bindAll(this, "search"), this.inputField = $("input", this.el), this.key = this.options.key, this.model = new s.Model({
                    state: "initial"
                }), this.model.bind("change:selected", this.update, this), this.indicator = new o({
                    model: this.model
                }), this.inputField.after(this.indicator.el), this.results = new u({
                    model: this.model,
                    collection: this.collection,
                    resultViewType: r.SearchResultView,
                    key: this.key
                }), this.collection.bind("reset", this.success, this);
            },
            events: {
                "keydown input": "navigateResults",
                "keyup   input": "processInput",
                "focus   input": "resultsToggle",
                "blur    input": "resultsToggle",
                "click .search-indicator": "clear",
                "click .search-result": "pickResult"
            },
            clear: function() {
                this.model.set({
                    state: "initial"
                }), this.inputField.val("");
            },
            pickResult: function(e) {
                this.results.setSelected($(e.currentTarget).index());
            },
            processInput: function(e) {
                e.preventDefault();
                var t = this.inputField.val();
                if (t.length === 0) {
                    this.abortSearch(), this.model.set({
                        state: "initial"
                    }), this.results.hide();
                    return;
                }
                this.search();
            },
            search: function() {
                var e = this;
                this.model.set({
                    state: "busy"
                }), this.results.show(), clearTimeout(this.pendingSearch), this.pendingSearch = setTimeout(function() {
                    e.results.query(e.inputField.val());
                }, 400);
            },
            abortSearch: function() {
                clearTimeout(this.pendingSearch), this.results.abortQuery();
            },
            success: function() {
                this.model.set({
                    state: "idle"
                });
            },
            navigateResults: function(e) {
                if (this.inputField.val().length === 0) return;
                switch (e.which) {
                    case 38:
                        return this.results.navigate("up");
                    case 40:
                        return this.results.navigate("down");
                    case 13:
                        if (this.results.isHidden()) return;
                        return e.preventDefault(), this.results.select();
                    case 27:
                        return this.abortSearch(), this.results.hide();
                }
            },
            update: function(e, t) {
                if (!t) {
                    this.inputField.val("");
                    return;
                }
                this.inputField.val(t.get(this.key)), this.model.set({
                    state: "success"
                });
            },
            resultsToggle: function(e) {
                var t = e.type === "focusin" && this.inputField.val() !== "";
                t ? this.results.show() : setTimeout(function() {
                    this.results.hide();
                }.bind(this), 100);
            },
            properKey: function(e) {
                return e >= 48 && e <= 105 && e != 91 && e != 92 || e == 189 || e == 32 || e == 8 || e == 46 || e == 186 || e == 191 || e == 17 || e == 224 || e == 91;
            }
        });
    }), define("views/user-search-view", ["require", "exports", "module", "vendor/underscore", "lib/backbone", "lib/sc", "views/user-result-view", "collections/user-results", "views/user-search-hint-view", "views/search-indicator-view", "views/search-view", "views/search-results-view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/backbone"),
            s = e("lib/sc"),
            o = e("views/user-result-view"),
            u = e("collections/user-results"),
            a = e("views/user-search-hint-view"),
            f = e("views/search-indicator-view"),
            l = e("views/search-view"),
            c = e("views/search-results-view"),
            h = {};
        n.exports = h = l.extend({
            initialize: function() {
                r.bindAll(this, "resolveUser", "resolveSuccess", "resolveError", "search"), this.inputField = this.$(".search-mode-input input"), this.key = "permalink_url", this.model = new i.Model({
                    state: "initial"
                }), this.model.bind("change:selected", this.update, this), this.collection = new u, this.indicator = new f({
                    model: this.model
                }), this.inputField.after(this.indicator.el), this.hint = new a({
                    model: this.model
                }), this.inputField.after(this.hint.el), this.results = new c({
                    model: this.model,
                    collection: this.collection,
                    resultViewType: o,
                    key: this.key
                }), this.inputField.after(this.results.el), this.collection.bind("reset", this.success, this);
            },
            dispose: function() {
                this.model.off(null, null, this), this.collection.off(null, null, this);
            },
            processInput: function(e) {
                var t = this.inputField.val();
                if (t.length === 0) {
                    this.model.set({
                        state: "initial"
                    }), this.results.hide();
                    return;
                }
                if (!this.properKey(e.which)) return;
                this.abortResolve(), s.ensureUrl(t) && t.length > s.url.length ? (this.resolveUser(), this.results.hide()) : t.indexOf("http:") === -1 && t.indexOf("https:") === -1 ? ($(this.results.el).css({
                    width: this.inputField.width() + "px"
                }), this.search()) : (this.abortSearch(), this.results.ready(), this.results.hide());
            },
            resolveUser: function() {
                var e = this;
                this.abortSearch(), this.model.set({
                    state: "resolving"
                }), clearTimeout(this.pendingResolve), this.pendingResolve = setTimeout(function() {
                    e.resolve = $.ajax({
                        url: "/_api/users/resolve",
                        data: {
                            url: e.inputField.val()
                        },
                        success: e.resolveSuccess,
                        error: e.resolveError
                    });
                }, 400);
            },
            abortResolve: function() {
                clearTimeout(this.pendingResolve), this.resolve && this.resolve.abort(), this.model.set({
                    state: "idle"
                });
            },
            resolveError: function(e) {
                e.globalError = !1, this.model.set({
                    state: "error"
                });
            },
            resolveSuccess: function(e) {
                this.model.set({
                    selected: new i.Model(e),
                    state: "success"
                });
            }
        });
    }), define("views/add-users-view", ["require", "exports", "module", "vendor/underscore", "views/user-search-view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("views/user-search-view"),
            s;
        n.exports = s = i.extend({
            events: function() {
                return r.extend({}, i.prototype.events, {
                    "click .form-switch": "switchFormMode"
                });
            },
            initialize: function() {
                i.prototype.initialize.apply(this, arguments), this.batchInput = this.$(".bulk-mode-input textarea"), this.model.bind("change:state", this.updateFormState, this), this.formElement = this.$el.closest("form"), this.submitButton = this.formElement.find('[type="submit"]'), this.formElement.on("reset.addUsers", this.reset.bind(this));
            },
            dispose: function() {
                i.prototype.dispose.apply(this, arguments), this.model.off(null, null, this), this.formElement.off("reset.addUsers");
            },
            switchFormMode: function(e) {
                var t = e.currentTarget.dataset.formState;
                t === "bulk-mode" ? this.submitButton.removeAttr("disabled") : this.submitButton.attr("disabled", "disabled"), this.formElement.removeClass("search-mode bulk-mode").addClass(t), this.trigger("change:mode", t);
            },
            val: function() {
                return r.reject(this.batchInput.val().split("\n"), function(e) {
                    return e.length === 0;
                });
            },
            updateFormState: function(e, t) {
                t === "success" ? (this.submitButton.removeAttr("disabled"), this.batchInput.val(e.get("selected").get("permalink_url"))) : this.submitButton.attr("disabled", "disabled");
            },
            reset: function() {
                this.model.set({
                    state: "initial"
                });
            }
        });
    }), define("lib/views/mixins/action-buttons", ["require", "exports", "module", "vendor/underscore", "lib/mixin"], function(e, t, n) {
        function s(e, t) {
            var n = $(t.currentTarget),
                r = n.data("busy-message") || "Please wait ...",
                i = n.html(),
                s = n.val();
            n.css("min-width", n.css("width")).html(r).val(r).attr("disabled", "disabled"), $.when(e.call(this, t)).always(function() {
                n.removeAttr("disabled").css("min-width", "").html(i).val(s);
            });
        }
        var r = e("vendor/underscore"),
            i = e("lib/mixin");
        n.exports = new i({
            delegateActions: function(e) {
                var t = r.result(this, "events") || {};
                r.each(e, function(e, n) {
                    r.isFunction(e) || (e = this[e]), t[n] = r.wrap(e, s);
                }, this), this.delegateEvents(t);
            }
        });
    }), define("lib/deferred-progress", ["require", "exports", "module"], function(e, t, n) {
        var r;
        n.exports = r = function() {
            var e = $.Deferred(),
                t = $.makeArray(arguments),
                n = 0,
                r = !1;
            return $.each(t, function(i, s) {
                s.fail(function() {
                    r = !0;
                }).always(function() {
                    e.notifyWith(s, [++n, t.length]), n == t.length && (r ? e.reject() : e.resolve());
                });
            }), e;
        };
    }), define("lib/views/mixins/form", ["require", "exports", "module", "vendor/underscore", "lib/deferred-progress", "lib/mixin"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/deferred-progress"),
            s = e("lib/mixin"),
            o = {
                "click .cancel": "cancel"
            };
        n.exports = new s({
            after: {
                initialize: function() {
                    this.delegateActions({
                        "click input[type=submit]": "submit"
                    }), r.bindAll(this, "complete", "successs", "closeDrawer");
                },
                render: function() {
                    this.progressBar = this.$(".progress"), this.formElement = this.$("form");
                }
            },
            submit: function(e) {
                e.preventDefault(), this.dismissErrors && this.dismissErrors();
                var t = this.getFormData();
                if (typeof t == "undefined") return;
                var n = r.map(t, function(e) {
                        var t = this.request(e);
                        return t.fail(this.error.bind(this, e)), t;
                    }, this),
                    s = i.apply(null, n);
                return t.length > 1 ? (this.progressBar.show().find("progress").attr("max", t.length), s.progress(function(e) {
                    this.progressBar.find("progress").attr("value", e);
                }.bind(this)), this.closeDrawer()) : s.always(this.closeDrawer), s.always(this.complete), s.done(this.successs), $(window).scrollTop(0), s;
            },
            error: function(e, t) {
                var n = this.getErrorMessage(e, t);
                t.globalError = !n || !n.text, this.addError(n.key + " " + (n.text || "unexpected error"));
            },
            successs: function() {
                this.resetForm(), this.closeDrawer();
            },
            complete: function() {
                this.progressBar.hide(), this.resetForm();
            },
            cancel: function() {
                this.closeDrawer(), this.resetForm();
            },
            resetForm: function() {
                this.formElement[0].reset();
            },
            applyTo: function(e) {
                e.events = r.extend(e.events || {}, o);
            }
        });
    }),
    function() {
        function e(e) {
            e.preventDefault(), e.stopPropagation(), $(document.body).removeClass("dropdown-open"), $(".dropdown-menu").hide();
        }
        $(document).delegate(".dropdown-open", "click", e), $(document).delegate(".dropdown-open", "keydown", function(t) {
            t.keyCode === 27 && e(t);
        }), $(document).delegate(".dropdown-button", "click", function(e) {
            $(document.body).toggleClass("dropdown-open"), $(e.currentTarget).next(".dropdown-menu").toggle();
        }), $(document).delegate(".dropdown-menu", "click", function() {
            $(document.body).removeClass("dropdown-open");
        });
    }(), define("lib/views/mixins/capabilities-edit", ["require", "exports", "module", "vendor/underscore", "lib/mixin"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/mixin"),
            s = {
                "change [name=capabilities]": "constrainCapabilities"
            };
        n.exports = new i({
            after: {
                renderDecorate: function() {
                    this.constrainCapabilities();
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t = e.call(this, t), t.capabilities || (t.capabilities = this.capabilities.toJSON()), t;
                }
            },
            getCapabilities: function() {
                var e = [];
                return r.each(this.formElement.serializeArray(), function(t) {
                    t.name == "capabilities" && e.push(t.value);
                }), e;
            },
            constrainCapabilities: function() {
                var e = {
                    "managed-accounts": "accounts",
                    "user-whitelist": "accounts",
                    "app-whitelist": "accounts",
                    "manual-monetization-admin": "manual-monetization"
                };
                r.each(e, function(e, t) {
                    var n = this.$("[name=capabilities][value=" + t + "]");
                    if (n.length) {
                        var r = this.getCapabilities().indexOf(e) === -1;
                        n[0].disabled = r, r && (n[0].checked = !1), this.$("label[for=" + n.attr("id") + "]").toggleClass("disabled", r), n.closest("label").toggleClass("disabled", r);
                    }
                }, this);
            },
            applyTo: function(e) {
                e.events = r.extend({}, s, e.events);
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/capabilities-edit-dropdown"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["capabilities-edit-dropdown"] = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    r += '\n  <li title="', (i = n.description) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.description, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\n    <label>\n      <input type="checkbox" name="capabilities" value="', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '"\n        ', i = n["if"].call(e, e.enabled, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(2, c, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "/>\n      ", (i = n.name) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.name, i = typeof i === u ? i.apply(e) : i), r += a(i) + "\n    </label>\n  </li>\n  ", r;
                }

                function c(e, t) {
                    return ' checked="checked"';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<ul class="dropdown-menu" style="display:none">\n  ', o = n.each.call(t, t.capabilities, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += '\n  <li class="done"><span>Close</span></li>\n</ul>\n', s;
            }), this.HandlebarsTemplates["capabilities-edit-dropdown"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/capabilities-edit"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["capabilities-edit"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<span class="button-container">\n  <button class="sc-button sc-button-small sc-button-edit sc-button-icon dropdown-button edit-capabilities" data-toggle="dropdown" type="button">Edit</button>\n</span>\n<span class="values"></span>\n\n';
            }), this.HandlebarsTemplates["capabilities-edit"];
        }.call(this);
    }.call(this), define("views/capabilities-edit-view", ["require", "exports", "module", "lib/view", "vendor/underscore", "lib/views/mixins/capabilities-edit"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("vendor/underscore"),
            s = e("lib/views/mixins/capabilities-edit"),
            o;
        o = n.exports = r.extend({
            mixins: [s],
            tagName: "form",
            className: "edit-capabilities-form",
            template: JST["templates/capabilities-edit"],
            dropdownTemplate: JST["templates/capabilities-edit-dropdown"],
            events: {
                "click .edit-capabilities": "createDropdown",
                "click li:has(input)": function(e) {
                    e.stopPropagation();
                },
                "change input": "update"
            },
            setup: function(e) {
                this.formElement = this.$el, this.observableAttributes = [e.field], this.capabilities = e.capabilities, this.capabilities.hold(), this.capabilities.on("reset", this.renderDropdown, this), this.capabilities.on("reset", this.render, this), this.renderTemplate(this.template);
            },
            dispose: function() {
                this.capabilities.off(null, null, this), this.capabilities.release();
            },
            createDropdown: function() {
                this.$(".dropdown-menu").length || this.renderDropdown();
            },
            update: function(e) {
                var t = this.getCapabilities(),
                    n = {};
                n[this.options.field] = t, this.model.save(n, {
                    wait: !0
                }), e.stopPropagation();
            },
            render: function() {
                if (this.disposed) return;
                var e = this.capabilities.getAll(this.model.get(this.options.field)),
                    t = i.invoke(e, "get", "name").join(", ");
                this.$(".values").html('<span class="data-label">Enabled features</span> ' + t);
            },
            renderDropdown: function() {
                if (this.disposed) return;
                var e = this.dropdownTemplate.call(this, this.getTemplateData());
                this.$("button").after(e), this.constrainCapabilities();
            },
            getTemplateData: function() {
                var e = this.capabilities.map(function(e) {
                    var t = e.toJSON();
                    return t.enabled = this.model.get(this.options.field).indexOf(t.id) > -1, t;
                }, this);
                return {
                    capabilities: e
                };
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/deck-users"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["deck-users"] = Handlebars.template(function(e, t, n, r, i) {
                function c(e, t) {
                    var r = "",
                        i;
                    r += '\n    <div>\n      <label for="deck-users-rightsholder">Rightsholder</label>\n      <select name="rightsholder" id="deck-users-rightsholder">\n        ', i = n.each.call(e, e.rightsholders, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.programWithDepth(h, t, e),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += '\n      </select>\n      <a class="sc-button sc-button-small sc-button-icon sc-button-edit" href="#/rightsholders">\n        Edit rightsholders\n      </a>\n    </div>\n    ', r;
                }

                function h(e, t, r) {
                    var i = "",
                        s, o, c;
                    i += '\n        <option value="', (s = n.id) ? s = s.call(e, {
                        hash: {},
                        data: t
                    }) : (s = e.id, s = typeof s === u ? s.apply(e) : s), i += a(s) + '"\n        ', c = {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(3, p, t),
                        data: t
                    }, o = (s = n.equals, s ? s.call(e, e.id, r.rightsholderId, c) : l.call(e, "equals", e.id, r.rightsholderId, c));
                    if (o || o === 0) i += o;
                    return i += ">\n        ", (o = n.name) ? o = o.call(e, {
                        hash: {},
                        data: t
                    }) : (o = e.name, o = typeof o === u ? o.apply(e) : o), i += a(o) + "\n        </option>\n        ", i;
                }

                function p(e, t) {
                    return 'selected="selected"';
                }

                function d(e, t) {
                    var r = "",
                        i;
                    return r += '\n          <div class="form-checkbox">\n            <label for="deck-user-capability-', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\n              <strong>', (i = n.name) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.name, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</strong>\n              <span>", (i = n.description) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.description, i = typeof i === u ? i.apply(e) : i), r += a(i) + '</span>\n            </label>\n            <input type="checkbox" name="capabilities" value="', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '" id="deck-user-capability-', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '"/>\n          </div>\n          ', r;
                }

                function v(e, t) {
                    var r = "",
                        i;
                    r += "\n            ", i = n["if"].call(e, e.rightsholders, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(8, m, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "\n          ", r;
                }

                function m(e, t) {
                    var r = "",
                        i;
                    return r += '\n              Nothing here? Edit the <a href="#/rightsholders">list of available capabilities</a>\n              to ', (i = n.rightsholderName) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.rightsholderName, i = typeof i === u ? i.apply(e) : i), r += a(i) + "!\n            ", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this,
                    l = n.helperMissing;
                s += '<div class="l-header header">\n\n  <div class="header-tools">\n\n    ', o = n["if"].call(t, t.rightsholders, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, c, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += '\n\n    <button class="sc-button sc-button-small sc-button-add show-form">\n      Add user\n    </button>\n\n    <button class="sc-button sc-button-small sc-button-caret hide-form" style="display:none">\n      Close\n    </button>\n\n  </div>\n\n  <h2>Deck Users</h2>\n\n  <div class="section drawer">\n    <div class="drawer-liner" id="">\n      <form name="" action="" class="search-mode">\n\n        <h3 class="g-type-h1">Add new user<span class="bulk-mode-only">s</span> to Deck</h3>\n\n        <div class="add-users">\n          <div class="form-input search-mode-input">\n            <a class="secondary-label form-switch" data-form-state="bulk-mode"\n              title="Add multiple permalinks at once">Add multiple users</a>\n            <label for="whitelist-form-search" title="Enter a permalink or URL">User to add</label>\n            <input type="text" name="whitelist-form-search" value="" id=""\n              placeholder="Username or URL" />\n          </div>\n\n          <div class="form-input bulk-mode-input">\n            <a class="secondary-label form-switch" data-form-state="search-mode">Add single user</a>\n            <label for="deck-user-batch"\n              title="Please enter one or more URLs, e.g. http://soundcloud.com/usertowhitelist">Add URLs</label>\n            <textarea name="deck-user-batch" id="deck-user-batch"\n              placeholder="http://soundcloud.com/usertowhitelist"></textarea>\n          </div>\n\n        </div>\n\n        <div class="user-capabilities form-checkbox-group">\n          <label class="form-checkbox-group-label">Features enabled for the user(s):</label>\n          ', o = n.each.call(t, t.capabilities, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(5, d, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += "\n          ", o = n.unless.call(t, t.capabilities, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(7, v, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += '\n        </div>\n\n        <div class="submit-wrapper">\n          <div class="sc-button-toolbar">\n            <a class="sc-button sc-button-large sc-button-text cancel" title="Cancel">Cancel</a>\n            <input type="submit" class="sc-button sc-button-large" value="Add account" disabled>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div> <!-- /header -->\n\n<div class="section list">\n  <table class="list-items">\n    <tbody class="progress" style="display:none">\n      <tr class="list-item"><td colspan="2"><progress></progress></td></tr>\n    </tbody>\n    <tbody class="errors"></tbody>\n    <tbody></tbody>\n  </table>\n</div> <!-- /section -->\n', s;
            }), this.HandlebarsTemplates["deck-users"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/deck-users-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["deck-users-item"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a = n.helperMissing,
                    f = this.escapeExpression;
                return s += '<td class="wl-user-badge">\n  ', u = {
                    hash: {
                        id: t.soundcloud_id
                    },
                    data: i
                }, s += f((o = n.view, o ? o.call(t, "views/user-badge-view", u) : a.call(t, "view", "views/user-badge-view", u))) + '\n</td>\n<td class="capabilities">\n  ', u = {
                    hash: {
                        field: "capabilities",
                        model: (o = t._options, o == null || o === !1 ? o : o.model),
                        capabilities: (o = (o = t._options, o == null || o === !1 ? o : o.parent), o == null || o === !1 ? o : o.capabilities)
                    },
                    data: i
                }, s += f((o = n.view, o ? o.call(t, "views/capabilities-edit-view", u) : a.call(t, "view", "views/capabilities-edit-view", u))) + "\n</td>\n", s;
            }), this.HandlebarsTemplates["deck-users-item"];
        }.call(this);
    }.call(this), define("views/deck-users-view", ["require", "exports", "module", "app", "lib/list-view", "vendor/underscore", "collections/deck-users", "collections/capabilities", "collections/rightsholders", "views/add-users-view", "lib/views/mixins/action-buttons", "lib/views/mixins/list-errors", "lib/views/mixins/drawer", "lib/views/mixins/form", "lib/views/mixins/list-header", "lib/views/mixins/capabilities-edit", "views/capabilities-edit-view"], function(e, t, n) {
        var r = e("app"),
            i = e("lib/list-view"),
            s = e("vendor/underscore"),
            o = e("collections/deck-users"),
            u = e("collections/capabilities"),
            a = e("collections/rightsholders"),
            f = e("views/add-users-view"),
            l = e("lib/views/mixins/action-buttons"),
            c = e("lib/views/mixins/list-errors"),
            h = e("lib/views/mixins/drawer"),
            p = e("lib/views/mixins/form"),
            d = e("lib/views/mixins/list-header"),
            v = e("lib/views/mixins/capabilities-edit"),
            m;
        e("views/capabilities-edit-view"), m = n.exports = i.extend({
            mixins: [h, c, l, p, v, d],
            className: "deck-users",
            loadingTemplate: function() {
                return '<div class="more-loading">Loading Deck users ...</div>';
            },
            template: JST["templates/deck-users"],
            emptyTemplate: function() {
                return '<td colspan="4"><div class="more-loading">No deck users to display.</div></td>';
            },
            itemTemplate: JST["templates/deck-users-item"],
            collection: o,
            events: {
                "change [name=rightsholder]": "switchRightsholder"
            },
            setup: function() {
                this.rightsholderId = r.currentUser.get("rightsholders")[0], this.capabilities = new u(null, {
                    scope: "deck_users"
                }), this.capabilities.on("reset", this.render, this), this.capabilities.fetch(), this.capabilities.hold(), r.currentUser.hasCapability("dmca") && (this.rightsholders = new a, this.rightsholders.on("reset", this.render, this), this.rightsholders.on("add", this.render, this), this.rightsholders.on("remove", this.render, this), this.rightsholders.on("change:default_capabilities", function() {
                    this.capabilities.fetchByRightsholder(this.rightsholderId);
                }, this), this.rightsholders.fetch());
            },
            dispose: function() {
                this.capabilities.off(null, null, this), this.capabilities.release(), this.rightsholders && (this.rightsholders.release(), this.rightsholders.off(null, null, this));
            },
            renderDecorate: function() {
                this.addUsers = new f({
                    el: this.$(".add-users")
                }), this.addUsers.on("change:mode", this.updateDrawerHeight, this);
            },
            teardown: function() {
                this.addUsers.dispose(), this.addUsers.off(null, null, this);
            },
            getErrorMessage: function(e, t) {
                var n = {
                    key: e.permalink_url
                };
                switch (t.status) {
                    case 409:
                        n.text = JSON.parse(t.responseText).error;
                        break;
                    case 404:
                        n.text = "user not found";
                }
                return n;
            },
            getFormData: function() {
                var e = this.addUsers.val();
                if (!e.length) return;
                var t = this.getCapabilities();
                if (t.length === 0) {
                    var n = "Are you sure you want to add user" + (e.length > 0 ? "s" : "") + " without any features enabled?";
                    if (!window.confirm(n)) return;
                }
                return s.map(e, function(e) {
                    return {
                        permalink_url: e,
                        capabilities: t,
                        rightsholder: r.currentUser.get("rightsholders")[0] != this.rightsholderId ? this.rightsholderId : undefined
                    };
                }, this);
            },
            request: function(e) {
                var t = new this.collection.model(e);
                return t.save().done(function() {
                    this.collection.add(t, {
                        at: 0
                    });
                }.bind(this));
            },
            switchRightsholder: function(e) {
                this.rightsholderId = parseInt(e.target.value, 10), this.capabilities.fetchByRightsholder(this.rightsholderId), this.collection.fetchByRightsholder(this.rightsholderId);
            },
            getTemplateData: function(e) {
                var t, n;
                return this.rightsholders && (t = this.rightsholders.toJSON().sort(function(e, t) {
                    return e.name > t.name ? 1 : -1;
                }), n = this.rightsholders.get(this.rightsholderId)), {
                    rightsholderId: this.rightsholderId,
                    rightsholderName: n && n.get("name"),
                    rightsholders: t,
                    deckUsers: e,
                    _options: e._options
                };
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/capabilities-party-id-edit-dropdown"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["capabilities-party-id-edit-dropdown"] = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    r += '\n  <li title="', (i = n.description) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.description, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\n    <label>\n      <input type="checkbox" name="capabilities" value="', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '"\n        ', i = n["if"].call(e, e.enabled, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(2, c, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "/>\n      ", (i = n.name) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.name, i = typeof i === u ? i.apply(e) : i), r += a(i) + "\n    </label>\n  ", r;
                }

                function c(e, t) {
                    return ' checked="checked"';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<ul class="dropdown-menu" style="display:none">\n  ', o = n.each.call(t, t.capabilities, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += '\n  <li>\n    <label>party ID</label>\n    <input type="text" name="party_id" value="', (o = n.party_id) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.party_id, o = typeof o === u ? o.apply(t) : o), s += a(o) + '"/>\n  </li>\n  <li>\n    <label>delivery partners party-ids (comma separated)</label>\n    <input type="text" name="delivery_partners_party_ids" value="', (o = n.delivery_partners_party_ids_pretty) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.delivery_partners_party_ids_pretty, o = typeof o === u ? o.apply(t) : o), s += a(o) + '"/>\n  </li>\n  <li>\n    <label for="has_feed">Has monetization feed?</label>\n    <input type="checkbox" name="has_feed" id="has_feed"\n      ', o = n["if"].call(t, t.has_feed, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(2, c, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += '\n    />\n  </li>\n  <li class="done"><span>Close</span></li>\n</ul>\n', s;
            }), this.HandlebarsTemplates["capabilities-party-id-edit-dropdown"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/capabilities-edit"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["capabilities-edit"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<span class="button-container">\n  <button class="sc-button sc-button-small sc-button-edit sc-button-icon dropdown-button edit-capabilities" data-toggle="dropdown" type="button">Edit</button>\n</span>\n<span class="values"></span>\n\n';
            }), this.HandlebarsTemplates["capabilities-edit"];
        }.call(this);
    }.call(this), define("views/capabilities-party-id-edit-view", ["require", "exports", "module", "lib/views/mixins/capabilities-edit", "views/capabilities-edit-view", "vendor/underscore"], function(e, t, n) {
        var r = e("lib/views/mixins/capabilities-edit"),
            i = e("views/capabilities-edit-view"),
            s = e("vendor/underscore"),
            o;
        o = n.exports = i.extend({
            mixins: [r],
            dropdownTemplate: JST["templates/capabilities-party-id-edit-dropdown"],
            events: s.extend({
                keydown: "preventSubmitOnEnter"
            }, i.prototype.events),
            update: function(e) {
                var t = {};
                t[this.options.field] = this.getCapabilities();
                var n = this.$("input[name=party_id]").val();
                t.party_id = n;
                var r = this.$("input[name=delivery_partners_party_ids]").val();
                t.delivery_partners_party_ids = r.split(", ").map(function(e) {
                    return e.trim();
                }).filter(function(e) {
                    return e !== "";
                }), t.has_feed = this.$("input[name=has_feed]").is(":checked"), this.model.save(t, {
                    wait: !0
                }), e.stopPropagation();
            },
            getTemplateData: function() {
                var e = i.prototype.getTemplateData.call(this);
                e.party_id = this.model.attributes.party_id, e.has_feed = this.model.attributes.has_feed;
                var t = this.model.attributes.delivery_partners_party_ids;
                return e.delivery_partners_party_ids_pretty = t.join(", "), e;
            },
            preventSubmitOnEnter: function(e) {
                e.which == 13 && (this.update(e), e.preventDefault());
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/rightsholders"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.rightsholders = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    return r += '\n          <div class="form-checkbox">\n            <label for="rightsholder-capability-', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '">\n              <strong>', (i = n.name) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.name, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</strong>\n              <span>", (i = n.description) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.description, i = typeof i === u ? i.apply(e) : i), r += a(i) + '</span>\n            </label>\n            <input type="checkbox" name="capabilities" value="', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '"\n              id="rightsholder-capability-', (i = n.id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.id, i = typeof i === u ? i.apply(e) : i), r += a(i) + '"/>\n          </div>\n          ', r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<div class="l-header header">\n\n  <div class="header-tools">\n\n    <a class="sc-button sc-button-small" href="#/users">\n      &lt; Back to users\n    </a>\n\n    <button class="sc-button sc-button-small sc-button-add show-form">\n      Add rightsholder\n    </button>\n\n    <button class="sc-button sc-button-small sc-button-caret hide-form" style="display:none">\n      Close\n    </button>\n\n  </div>\n\n  <h2>Rightsholders</h2>\n\n  <div class="section drawer">\n    <div class="drawer-liner" id="">\n      <form name="" action="">\n\n        <h3 class="g-type-h1">Add new rightsholders to Deck</h3>\n\n        <div class="form-input">\n          <span class="secondary-label"></span>\n          <label for="rightsholders-rightsholder-name">Rightsholder names</label>\n          <textarea name="rightsholder-name" id="rightsholders-rightsholder-name"\n            placeholder="Enter one rightsholder name per line"></textarea>\n        </div>\n\n        <div class="user-capabilities form-checkbox-group">\n          <label class="form-checkbox-group-label">\n            Features available when creating/editing users of this rightsholder(s):\n          </label>\n          ', o = n.each.call(t, t.capabilities, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += '\n        </div>\n\n        <div class="submit-wrapper">\n          <div class="sc-button-toolbar">\n            <a class="sc-button sc-button-large sc-button-text cancel" title="Cancel">Cancel</a>\n            <input type="submit" class="sc-button sc-button-large" value="Add rightsholders">\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n</div> <!-- /header -->\n\n<div class="section list">\n  <table class="list-items">\n    <thead class="list-items-header">\n      <tr>\n          <td class="id">ID</td>\n          <td class="name">Name</td>\n          <td class="capabilities">Available features</td>\n          <td class="party_id">Party-id</td>\n      </tr>\n    </thead>\n    <tbody class="progress" style="display:none">\n      <tr class="list-item"><td colspan="4"><progress></progress></td></tr>\n    </tbody>\n    <tbody class="errors"></tbody>\n    <tbody></tbody>\n  </table>\n</div> <!-- /section -->\n', s;
            }), this.HandlebarsTemplates.rightsholders;
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/rightsholders-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["rightsholders-item"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = n.helperMissing;
                return s += '<td class="id">\n  ', (o = n.id) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.id, o = typeof o === f ? o.apply(t) : o), s += l(o) + '\n</td>\n<td class="name">', (o = n.name) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.name, o = typeof o === f ? o.apply(t) : o), s += l(o) + '</td>\n<td class="capabilities">\n  ', a = {
                    hash: {
                        field: "default_capabilities",
                        model: (o = t._options, o == null || o === !1 ? o : o.model),
                        capabilities: (o = (o = t._options, o == null || o === !1 ? o : o.parent), o == null || o === !1 ? o : o.capabilities)
                    },
                    data: i
                }, s += l((o = n.view, o ? o.call(t, "views/capabilities-party-id-edit-view", a) : c.call(t, "view", "views/capabilities-party-id-edit-view", a))) + '\n</td>\n<td class="party_id">', (u = n.party_id) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.party_id, u = typeof u === f ? u.apply(t) : u), s += l(u) + "</td>\n" + "\n", s;
            }), this.HandlebarsTemplates["rightsholders-item"];
        }.call(this);
    }.call(this), define("views/rightsholders-view", ["require", "exports", "module", "lib/list-view", "vendor/underscore", "collections/capabilities", "collections/rightsholders", "lib/views/mixins/action-buttons", "lib/views/mixins/list-errors", "lib/views/mixins/drawer", "lib/views/mixins/form", "lib/views/mixins/list-header", "lib/views/mixins/capabilities-edit", "views/capabilities-party-id-edit-view"], function(e, t, n) {
        var r = e("lib/list-view"),
            i = e("vendor/underscore"),
            s = e("collections/capabilities"),
            o = e("collections/rightsholders"),
            u = e("lib/views/mixins/action-buttons"),
            a = e("lib/views/mixins/list-errors"),
            f = e("lib/views/mixins/drawer"),
            l = e("lib/views/mixins/form"),
            c = e("lib/views/mixins/list-header"),
            h = e("lib/views/mixins/capabilities-edit"),
            p;
        e("views/capabilities-party-id-edit-view"), p = n.exports = r.extend({
            mixins: [f, a, u, l, h, c],
            className: "rightsholders",
            loadingTemplate: function() {
                return '<div class="more-loading">Loading rightsholders ...</div>';
            },
            template: JST["templates/rightsholders"],
            itemTemplate: JST["templates/rightsholders-item"],
            collection: o,
            setup: function() {
                this.capabilities = new s(null, {
                    scope: "rightsholders"
                }), this.capabilities.on("reset", this.render, this), this.capabilities.fetch(), this.capabilities.hold();
            },
            render: function() {
                r.prototype.render.apply(this, arguments), this.nameInput = this.$("[name=rightsholder-name]");
            },
            dispose: function() {
                this.capabilities.release(), this.capabilities.off(null, null, this);
            },
            getFormData: function() {
                var e = i.filter(this.nameInput.val().split("\n"), function(e) {
                    return e.length;
                });
                if (!e.length) return;
                var t = this.getCapabilities();
                return i.map(e, function(e) {
                    return {
                        name: e,
                        default_capabilities: t
                    };
                }, this);
            },
            request: function(e) {
                var t = new this.collection.model(e);
                return t.save().done(function() {
                    this.collection.add(t, {
                        at: 0
                    });
                }.bind(this));
            },
            getErrorMessage: function(e) {
                return {
                    key: e.name
                };
            },
            getTemplateData: function(e) {
                return {
                    rightsholders: e,
                    _options: e._options
                };
            }
        });
    }), define("collections/ingestions", ["require", "exports", "module", "lib/collection", "lib/model"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("lib/model"),
            s;
        s = n.exports = r.extend({
            model: i.extend({}),
            url: "/_api/content_ingestion/search",
            fetch: function() {
                if (this.options.q) return r.prototype.fetch.call(this, {
                    data: {
                        q: this.options.q
                    }
                });
            },
            parse: function(e) {
                var t = {
                        deprecated: "Deprecated",
                        content: "Content",
                        fingerprinting: "Fingerprinting",
                        content_and_fingerprinting: "Content and Fingerprinting"
                    },
                    n = e["content-ingested-tracks"];
                return n.map(function(e) {
                    e.display_content_id_policy = e.feed_type == "fingerprinting" || e.feed_type == "content_and_fingerprinting", e.feed_type = t[e.feed_type];
                }), n;
            }
        }, {
            fetchMappedRightsholder: function(e) {
                $.ajax({
                    url: "/_api/rightsholders/mapping",
                    success: function(t) {
                        e(t);
                    },
                    error: function(t) {
                        t.status === 404 && (t.globalError = !1, e({}));
                    }
                });
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/content-management/ingestions"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["content-management/ingestions"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<div class="l-header header">\n  <h2>Content Management</h2>\n\n  <ul class="nav-tabs">\n    <li class="active"><a href="#/ingestions"  class="sc-link-light"class="sc-link-light">Ingested Content</a></li>\n    <li><a href="#/ingestions/emergency-upload" class="sc-link-light">Emergency upload</a></li>\n    <li><a href="#/ingestions/emergency-upload-content"  class="sc-link-light"class="sc-link-light">Emergency Upload Content</a></li>\n  </ul>\n\n  <div class="toolbar">\n    <div class="clearfix toolbar-liner">\n      <div class="filter-toolbar">\n        <form name="search">\n          <input name="q" type="text" class="sc-input" placeholder="Enter your search term" autocorrect="off" autocapitalize="off">\n          <button class="sc-button">Search</button>\n          <span class="filter-hint">\n            <strong>Exact matches only</strong>\n            (case insensitive)\n          </span>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div> <!-- /header -->\n\n<div class="section list">\n  <table class="list-items">\n    <thead>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div> <!-- /section -->\n';
            }), this.HandlebarsTemplates["content-management/ingestions"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/content-management/ingestions-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["content-management/ingestions-item"] = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <a href="#" data-search="true">', (i = n.display_artist) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.display_artist, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n  ", r;
                }

                function c(e, t) {
                    return "\n    [Artist not provided]\n  ";
                }

                function h(e, t) {
                    var r = "",
                        i;
                    return r += '\n  Content-ID Policy: <span class="label label-', (i = n.rule) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.rule, i = typeof i === u ? i.apply(e) : i), r += a(i) + '" title="Content ID Policy" tooltip-position="center">', (i = n.rule) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.rule, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</span>\n", r;
                }

                function p(e, t) {
                    var r = "",
                        i;
                    r += '\n  <td>\n    <span class="data-label">', (i = n.release_type) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.release_type, i = typeof i === u ? i.apply(e) : i), r += a(i) + '</span><br>\n    <a href="#" data-search="true">', (i = n.release_title) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.release_title, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n    ", i = n["if"].call(e, e.release_date, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(8, d, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += '\n    <br><a href="#" data-search="true">', (i = n.barcode) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.barcode, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n    <br>Feed Type: ", (i = n.feed_type) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.feed_type, i = typeof i === u ? i.apply(e) : i), r += a(i) + "\n  </td>\n", r;
                }

                function d(e, t) {
                    var r = "",
                        i;
                    return r += "\n      ", (i = n.release_date) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.release_date, i = typeof i === u ? i.apply(e) : i), r += a(i) + "\n    ", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<td>\n  <strong><a href="#" data-search="true">', (o = n.isrc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.isrc, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a></strong><br>\n  <a href="#" data-search="true">', (o = n.title) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.title, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a>\n  <span class="data-label">by</span>\n  ', o = n["if"].call(t, t.display_artist, {
                    hash: {},
                    inverse: f.program(3, c, i),
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += "\n  <br>", (o = n.label) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.label, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n</td>\n<td class="ingestions-rule">\n', o = n["if"].call(t, t.display_content_id_policy, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(5, h, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += "\n</td>\n", o = n["if"].call(t, t.release_type, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(7, p, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += "\n", s;
            }), this.HandlebarsTemplates["content-management/ingestions-item"];
        }.call(this);
    }.call(this), define("views/content-management/ingestions-view", ["require", "exports", "module", "lib/list-view", "lib/view", "collections/ingestions", "lib/views/mixins/list-header"], function(e, t, n) {
        var r = e("lib/list-view"),
            i = e("lib/view"),
            s = e("collections/ingestions"),
            o = e("lib/views/mixins/list-header"),
            u;
        u = n.exports = r.extend({
            mixins: [o],
            className: "ingestions has-toolbar",
            loadingTemplate: function() {
                return "";
            },
            template: JST["templates/content-management/ingestions"],
            emptyTemplate: function() {
                return '<td colspan="100"><div class="more-loading">No matches found</div></td>';
            },
            itemView: i.extend({
                tagName: "tr",
                className: "list-item",
                template: JST["templates/content-management/ingestions-item"],
                getTemplateData: function(e) {
                    e && (e.rule = e.allowed ? "allowed" : "blocked");
                }
            }),
            collection: s,
            progressIndicatorTemplate: function() {
                return '<td colspan="100"><div class="more-loading">Searching ...</div></td>';
            },
            showProgressIndicator: function() {
                this.getListEl().html(this.progressIndicatorTemplate());
            },
            events: {
                "submit [name=search]": "doSearch",
                "click  [data-search]": "doSearchThis"
            },
            hasData: function() {
                return !0;
            },
            search: function() {
                var e = $.trim(this.$("[name=q]").val());
                e.length && ($(window).scrollTop(0), this.showProgressIndicator(), this.collection.options = {
                    q: e
                }, this.collection.fetch());
            },
            doSearchThis: function(e) {
                e.preventDefault();
                var t = $.trim($(e.currentTarget).text());
                this.$("[name=q]").val(t), this.search();
            },
            doSearch: function(e) {
                e.preventDefault(), this.search();
            }
        });
    }), define("models/emergency_ingestion", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r, i = e("lib/model");
        r = n.exports = i.extend({
            resource_type: "emergency_ingestion",
            urlRoot: "/_api/content_ingestion/emergency"
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/content-management/emergency-ingestion"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["content-management/emergency-ingestion"] = Handlebars.template(function(e, t, n, r, i) {
                function a(e, t) {
                    return '\n<div class="l-header header">\n  <h2>Content Management</h2>\n\n  <ul class="nav-tabs">\n    <li><a href="#/ingestions" class="sc-link-light">Ingested Content</a></li>\n    <li class="active"><a href="#/ingestions/emergency-upload" class="sc-link-light">Emergency upload</a></li>\n    <li><a href="#/ingestions/emergency-upload-content"  class="sc-link-light"class="sc-link-light">Emergency Upload Content</a></li>\n  </ul>\n</div> <!-- /header -->\n';
                }

                function f(e, t) {
                    return '\n<div class="l-header header">\n  <h2>Emergency Upload</h2>\n</div> <!-- /header -->\n';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = this;
                o = n.unless.call(t, t.uploadFeed, {
                    hash: {},
                    inverse: u.program(3, f, i),
                    fn: u.program(1, a, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += '\n\n<div class="form-section">\n<form name="emergency-ingestion-form" id="emergency-ingestion-form" action="">\n\n  <div class="two-column-form sc-clearfix">\n\n    <div class="two-column-form-left-column">\n      <div class="form-input">\n        <label for="field_file">File</label>\n        <input type="file" name="soundfile" id="field_file">\n      </div>\n\n      <div class="form-input">\n        <label for="field_artist">Artist</label>\n        <input type="text" name="artist" id="field_artist">\n      </div>\n\n      <div class="form-input">\n        <label for="field_track_title">Track Title</label>\n        <input type="text" name="track_title" id="field_track_title">\n      </div>\n\n      <div class="form-input">\n        <label for="field_label">Label</label>\n        <input type="text" name="label" id="field_label">\n      </div>\n    </div>\n\n    <div class="two-column-form-right-column">\n      <div class="form-input">\n        <label for="field_business_rule">Business Rule</label>\n        <select name="business_rule" id="business_rule">\n          <option value="block" selected>Block</option>\n          <option value="allow">Allow</option>\n        </select>\n      </div>\n\n      <div class="form-input">\n        <label for="field_isrc">ISRC (Optional)</label>\n        <input type="text" name="isrc" id="field_isrc">\n      </div>\n\n      <div class="form-input">\n        <label for="field_icpn">ICPN (Optional)</label>\n        <input type="text" name="icpn" id="field_icpn">\n      </div>\n\n      <div class="form-input">\n        <label for="field_release_title">Release Title (Optional)</label>\n        <input type="text" name="release_title" id="field_release_title">\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="two-column-form sc-clearfix">\n    <div class="two-column-form-left-column">\n      <div class="form-checkbox">\n        <label for="field_i_own">I own or control all relevant rights to this track, and I am authorized to block or authorize distribution by others.</label>\n        <input type="checkbox" name="i_own" id="field_i_own" value="">\n      </div>\n      <div class="form-checkbox">\n        <label for="field_i_confirm">I confirm that the track is accompanied by the required and accurate metadata.</label>\n        <input type="checkbox" name="i_confirm" id="field_i_confirm" value="">\n      </div>\n    </div>\n\n    <div class="two-column-form-right-column">\n      <div class="form-checkbox">\n        <label for="field_i_acknowledge">I acknowledge that the track uploaded via the Emergency Upload Tool is deleted from the content identification system within sixty (60) days of its upload. It is my responsibility to deliver the track prior to its deletion also via my established supply chain.</label>\n        <input type="checkbox" name="i_acknowledge" id="field_i_acknowledge" value="">\n      </div>\n      <div class="submit-wrapper">\n        <div class="sc-button-toolbar">\n          <a href="/#/ingestions" class="sc-button sc-button-large sc-button-text cancel" title="Cancel">Cancel</a>\n          <input type="submit" class="sc-button sc-button-large" id="emergency-ingestion-submit" name="emergency-ingestion-submit" value="Upload" disabled="disabled">\n        </div>\n      </div>\n    </div>\n  </div>\n\n</form>\n</div>\n', s;
            }), this.HandlebarsTemplates["content-management/emergency-ingestion"];
        }.call(this);
    }.call(this), define("views/content-management/emergency-ingestion-view", ["require", "exports", "module", "vendor/underscore", "lib/view", "app", "models/emergency_ingestion"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/view"),
            s = e("app"),
            o = e("models/emergency_ingestion"),
            u;
        u = n.exports = i.extend(function() {
            function n() {
                return {
                    artist: e.find('[name="artist"]').val(),
                    track_title: e.find('[name="track_title"]').val(),
                    label: e.find('[name="label"]').val(),
                    business_rule: e.find('[name="business_rule"]').val(),
                    isrc: e.find('[name="isrc"]').val(),
                    icpn: e.find('[name="icpn"]').val(),
                    release_title: e.find('[name="release_title"]').val(),
                    file: t,
                    i_own: e.find("[name=i_own]").is(":checked"),
                    i_confirm: e.find("[name=i_confirm]").is(":checked"),
                    i_acknowledge: e.find("[name=i_acknowledge]").is(":checked")
                };
            }

            function i() {
                e.find('[name="artist"]').val(""), e.find('[name="track_title"]').val(""), e.find('[name="label"]').val(""), e.find('[name="business_rule"]').val(""), e.find('[name="isrc"]').val(""), e.find('[name="icpn"]').val(""), e.find('[name="release_title"]').val(""), e.find('[name="soundfile"]').val(""), e.find("[name=field_i_own]").attr("checked", !1), e.find("[name=field_i_confirm]").attr("checked", !1), e.find("[name=field_i_acknowledge]").attr("checked", !1), e.find("input[type=submit]").val("Upload"), t = null, f(), s.Router.notification.show("Upload finished. Your track is being processed and will take effect in some minutes.");
            }

            function u() {
                s.Router.notification.show("Upload failed. Please try again; if the error persists, contact us.", {
                    severity: "error"
                }), e.find("input[type=submit]").removeAttr("disabled"), e.find("input[type=submit]").attr("value", "Submit");
            }

            function a(e) {
                return {
                    artist: !e.artist,
                    track_title: !e.track_title,
                    label: !e.label,
                    business_rule: !e.business_rule,
                    file: !e.file,
                    isrc: e.isrc.length !== 0 && !/^[A-Z]{2}[A-Z\d]{3}\d{7}$/.test(e.isrc),
                    i_own: !e.i_own,
                    i_confirm: !e.i_confirm,
                    i_acknowledge: !e.i_acknowledge
                };
            }

            function f() {
                var t = a(n()),
                    i = r.keys(t).filter(function(e) {
                        return t[e] === !0;
                    }).length === 0,
                    s = e.find("#emergency-ingestion-submit");
                i ? s.removeAttr("disabled") : s.attr("disabled", "disabled"), e.find("#emergency-ingestion-form label").removeClass("for-error"), r.keys(t).forEach(function(n) {
                    t[n] === !0 && e.find("label[for=field_" + n + "]").addClass("for-error");
                });
            }
            var e = null,
                t = null;
            return {
                className: "emergency-ingestion has-toolbar",
                template: JST["templates/content-management/emergency-ingestion"],
                renderDecorate: function() {
                    e = this.$el;
                },
                events: {
                    "change [name=soundfile]": "onFileSelected",
                    "change form input": "onFieldChanged",
                    "change form select": "onFieldChanged",
                    "blur form input": "onFieldChanged",
                    "submit form": "onSubmit",
                    "click [type=submit]": "onSubmit"
                },
                hasData: function() {
                    return !0;
                },
                getTemplateData: function() {
                    return {};
                },
                onFieldChanged: function(e) {
                    e.preventDefault(), f();
                },
                onFileSelected: function(e) {
                    var n = new FileReader;
                    return n.onload = function(e) {
                        t = e.target.result, f();
                    }, n.readAsDataURL(e.target.files[0]), n;
                },
                onSubmit: function(t) {
                    t.preventDefault(), e.find("input[type=submit]").attr("disabled", "disabled"), e.find("input[type=submit]").attr("value", "Uploading ...");
                    var r = new o;
                    r.save(n(), {
                        success: i,
                        error: u
                    });
                }
            };
        }());
    }), define("collections/emergency-upload-content", ["require", "exports", "module", "lib/collection", "lib/model"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("lib/model"),
            s;
        s = n.exports = r.extend({
            model: i.extend({}),
            url: "/_api/content_ingestion/emergency-tracks/search",
            fetch: function() {
                if (this.options.q) return r.prototype.fetch.call(this, {
                    data: {
                        q: this.options.q
                    }
                });
            },
            parse: function(e) {
                return e.adhoc_fingerprinting_tracks.map(function(e) {
                    e.start_time = moment.utc(e.start_time).format("YYYY-MM-DD[T]HH:mm"), e.end_time = moment.utc(e.end_time).format("YYYY-MM-DD[T]HH:mm");
                }), e.adhoc_fingerprinting_tracks;
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/content-management/emergency-upload-content"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["content-management/emergency-upload-content"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<div class="l-header header">\n  <h2>Content Management</h2>\n\n  <ul class="nav-tabs">\n    <li><a href="#/ingestions"  class="sc-link-light"class="sc-link-light">Ingested Content</a></li>\n    <li><a href="#/ingestions/emergency-upload" class="sc-link-light">Emergency upload</a></li>\n    <li class="active"><a href="#/ingestions/emergency-upload-content" class="sc-link-light"class="sc-link-light">Emergency Upload Content</a></li>\n  </ul>\n  <div class="toolbar">\n    <div class="clearfix toolbar-liner">\n      <div class="filter-toolbar">\n        <form name="search">\n          <input name="q" type="text" class="sc-input" placeholder="Enter your search term" autocorrect="off" autocapitalize="off">\n          <button class="sc-button">Search</button>\n          <span class="filter-hint">\n            <strong>Exact matches only</strong>\n            (case insensitive)\n          </span>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div> <!-- /header -->\n\n<div class="section list">\n  <table class="list-items">\n    <tbody>\n      <tr>\n        <td>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div> <!-- /section -->\n';
            }), this.HandlebarsTemplates["content-management/emergency-upload-content"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/content-management/emergency-upload-content-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["content-management/emergency-upload-content-item"] = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <a href="#" data-search="true">', (i = n.artist) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.artist, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n  ", r;
                }

                function c(e, t) {
                    return "\n    [Artist not provided]\n  ";
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<td>\n  <strong><a href="#" data-search="true">', (o = n.isrc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.isrc, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a></strong><br>\n  <a href="#" data-search="true">', (o = n.title) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.title, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a>\n  <span class="data-label">by</span>\n  ', o = n["if"].call(t, t.artist, {
                    hash: {},
                    inverse: f.program(3, c, i),
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += "\n  <br>", (o = n.label) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.label, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n</td>\n<td>\n  <span class="data-label" style="display: inline-block; width: 70px">Barcode</span><a href="#" data-search="true">', (o = n.barcode) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.barcode, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a>\n  <br>\n  <span class="data-label" style="display: inline-block; width: 70px">Start time</span> ', (o = n.start_time) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.start_time, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n  <br>\n  <span class="data-label" style="display: inline-block; width: 70px">End time</span> ', (o = n.end_time) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.end_time, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n\n</td>\n<td class="ingestions-rule"><span class="label label-', (o = n.rule) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.rule, o = typeof o === u ? o.apply(t) : o), s += a(o) + '">', (o = n.rule) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.rule, o = typeof o === u ? o.apply(t) : o), s += a(o) + "</span></td>\n", s;
            }), this.HandlebarsTemplates["content-management/emergency-upload-content-item"];
        }.call(this);
    }.call(this), define("views/content-management/emergency-upload-content-view", ["require", "exports", "module", "lib/list-view", "lib/view", "collections/emergency-upload-content", "lib/views/mixins/list-header"], function(e, t, n) {
        var r = e("lib/list-view"),
            i = e("lib/view"),
            s = e("collections/emergency-upload-content"),
            o = e("lib/views/mixins/list-header"),
            u;
        u = n.exports = r.extend({
            mixins: [o],
            className: "ingestions has-toolbar",
            loadingTemplate: function() {
                return "";
            },
            template: JST["templates/content-management/emergency-upload-content"],
            emptyTemplate: function() {
                return '<td colspan="100"><div class="more-loading">No matches found</div></td>';
            },
            itemView: i.extend({
                tagName: "tr",
                className: "list-item",
                template: JST["templates/content-management/emergency-upload-content-item"],
                getTemplateData: function(e) {
                    e && (e.rule = e.allowed ? "allowed" : "blocked");
                }
            }),
            collection: s,
            progressIndicatorTemplate: function() {
                return '<td colspan="100"><div class="more-loading">Searching ...</div></td>';
            },
            showProgressIndicator: function() {
                this.getListEl().html(this.progressIndicatorTemplate());
            },
            events: {
                "submit [name=search]": "doSearch",
                "click  [data-search]": "doSearchThis"
            },
            hasData: function() {
                return !0;
            },
            search: function() {
                var e = $.trim(this.$("[name=q]").val());
                e.length && ($(window).scrollTop(0), this.showProgressIndicator(), this.collection.options = {
                    q: e
                }, this.collection.fetch());
            },
            doSearchThis: function(e) {
                e.preventDefault();
                var t = $.trim($(e.currentTarget).text());
                this.$("[name=q]").val(t), this.search();
            },
            doSearch: function(e) {
                e.preventDefault(), this.search();
            }
        });
    }), define("lib/mixins/undoable-model", ["require", "exports", "module", "vendor/underscore", "lib/mixin"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/mixin"),
            s;
        n.exports = s = new i({
            defaults: {
                excludedAttributeKeys: []
            },
            after: {
                setup: function() {
                    this.setCurrentAttributesAsBase();
                }
            },
            override: {
                originalAttributes: null,
                revertingChanges: !1,
                isModified: function() {
                    return !r.isEqual(this._filterAttributes(this.attributes), this.originalAttributes);
                },
                setCurrentAttributesAsBase: function() {
                    this.originalAttributes = this._filterAttributes(this.attributes);
                },
                getChangedAttributes: function() {
                    return this._getDiff(this._filterAttributes(this.attributes), this.originalAttributes);
                },
                revertChanges: function() {
                    this.revertingChanges = !0, this.set(this._getDiff(this.originalAttributes, this.attributes)), this.revertingChanges = !1;
                },
                _getDiff: function(e, t) {
                    return r.chain(e).map(function(e, t) {
                        return {
                            key: t,
                            value: e
                        };
                    }).filter(function(e) {
                        return t[e.key] !== e.value;
                    }).reduce(function(e, t) {
                        return e[t.key] = t.value, e;
                    }, {}).value();
                },
                _filterAttributes: function(e) {
                    var t = r.clone(e);
                    return r.each(this.excludedAttributeKeys, function(e) {
                        delete t[e];
                    }), t;
                }
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/confirm-modal"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/confirm-modal"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<div class="modal-overlay">\n  <div class="modal-box">\n    <div class="modal-text">\n      <p>Blocking the SoundCloud Visual Player will turn off all embedding for your accounts. Existing embedded tracks will no longer work.</p>\n      <p>Are you sure you want to block the Visual Player?<br><strong>This will break things!</strong></p>\n    </div>\n    <div class="modal-actions">\n      <button class="sc-button modal-cancel">Cancel</button>\n      <button class="sc-button sc-button-cta modal-ok">Block player</button>\n    </div>\n  </div>\n</div>\n';
            }), this.HandlebarsTemplates["api-access/confirm-modal"];
        }.call(this);
    }.call(this), define("views/api-access/confirm-modal", ["require", "exports", "module", "vendor/underscore", "lib/view"], function(e, t, n) {
        function o(e) {
            e.keyCode == 27 && e.data.modal.remove();
        }
        var r = e("vendor/underscore"),
            i = e("lib/view"),
            s, u = i.extend({
                className: "modal",
                tagName: "div",
                events: {
                    "click .modal-ok": "accept",
                    "click .modal-cancel": "remove",
                    "click .modal-overlay": "remove"
                },
                accept: function() {
                    r.defer(this.options.accept.bind(this.options.context)), this.remove();
                },
                onRemove: function() {
                    $(document.body).off("keydown", null, o);
                },
                renderDecorate: function() {
                    $(document.body).on("keydown", null, {
                        modal: this
                    }, o);
                },
                template: JST["templates/api-access/confirm-modal"]
            });
        n.exports = s = function(e, t) {
            var n = new u({
                context: t,
                accept: e
            });
            $(document.body).append(n.el);
        };
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/api-access-edit"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/api-access-edit"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<button class="sc-button sc-button-nostyle api-access-cancel-button" disabled>Cancel</button>\n<button class="sc-button sc-button-cta sc-button-medium api-access-save-button" disabled>Save</button>\n';
            }), this.HandlebarsTemplates["api-access/api-access-edit"];
        }.call(this);
    }.call(this), define("views/api-access/mixins/api-access-edit", ["require", "exports", "module", "vendor/underscore", "lib/mixin", "lib/view", "views/api-access/confirm-modal"], function(e, t, n) {
        function a(e) {
            e.isModified() ? this.modifiedModels.push(e) : this.modifiedModels = r.without(this.modifiedModels, e), r.isEmpty(this.modifiedModels) ? this.exitEditMode() : this.enterEditMode();
        }

        function f(e) {
            this.editView && this.editView.trigger("modified", e);
        }

        function l() {
            this.toggleState("unsaved"), this.options.parent && this.options.parent.trigger("childModified", this.model);
        }

        function c() {
            this.render();
        }
        var r = e("vendor/underscore"),
            i = e("lib/mixin"),
            s = e("lib/view"),
            o = e("views/api-access/confirm-modal"),
            u, h = s.extend({
                modifiedModels: [],
                setup: function(e) {
                    this.modifiedModels = [], this.on("modified", a, this), e.parent && (r.isFunction(e.saveModel) && (this.saveModel = e.saveModel.bind(e.parent)), r.isFunction(e.saveModels) && (this.saveModels = e.saveModels.bind(e.parent)), r.isFunction(e.onSaveSuccess) && (this.onSaveSuccess = e.onSaveSuccess.bind(e.parent)));
                },
                dispose: function() {
                    this.off("modified", a, this);
                },
                className: "content-access-edit",
                states: {
                    editmode: function(e) {
                        this.cancelButton().attr("disabled", !e), this.saveButton().attr("disabled", !e);
                    }
                },
                events: {
                    "click .api-access-save-button:not([disabled])": "saveClicked",
                    "click .api-access-cancel-button:not([disabled])": "cancelClicked"
                },
                cancelButton: function() {
                    return this.$(".api-access-cancel-button");
                },
                saveButton: function() {
                    return this.$(".api-access-save-button");
                },
                onSaveSuccess: $.noop,
                saveModel: function(e) {
                    return e.save();
                },
                saveModels: function(e) {
                    var t = e.length,
                        n = t,
                        i = !1,
                        s = this,
                        o = this.options.collection;
                    r.each(e, function(t) {
                        s.saveModel(t).success(function() {
                            n--, n === 0 && (s.onSaveSuccess(e), o.fetch(), s.exitEditMode());
                        }).error(function() {
                            i = !0;
                        });
                    });
                },
                enterEditMode: function() {
                    return this.toggleState("editmode", !0);
                },
                exitEditMode: function() {
                    return this.modifiedModels = [], this.toggleState("editmode", !1);
                },
                saveClicked: function() {
                    this.saveModels(this.modifiedModels);
                },
                cancelClicked: function() {
                    r.isEmpty(this.modifiedModels) || r.each(this.modifiedModels, function(e) {
                        e.revertChanges();
                    }), this.exitEditMode();
                },
                template: JST["templates/api-access/api-access-edit"]
            });
        n.exports = u = {
            listView: new i({
                override: {
                    editView: null
                },
                after: {
                    setup: function() {
                        this.on("childModified", f, this);
                    },
                    dispose: function() {
                        this.off("childModified", f, this);
                    },
                    renderDecorate: function() {
                        this.editView && this.editView._dispose(), this.editView = new h({
                            parent: this,
                            saveModel: this.saveModel,
                            saveModels: this.saveModels,
                            onSaveSuccess: this.onSaveSuccess,
                            collection: this.collection
                        }), this.$(".edit-actions").append(this.editView.el), this.addSubview(this.editView, "editView");
                    }
                }
            }),
            itemView: new i({
                applyTo: function(e) {
                    e.states = e.states || {}, this.extend(e.states, {
                        unsaved: "unsaved"
                    }), e.events = e.events || {}, this.extend(e.events, {
                        "click .content-access-switch :not(.enabled)": function() {
                            !this.model.isModified() && this.model.isWidget() && this.model.isAllow() ? o(function() {
                                this.model.toggleContentAccess();
                            }, this) : this.model.toggleContentAccess();
                        }
                    });
                },
                after: {
                    setup: function() {
                        this.model.on("change:content_access", l, this), this.model.on("change", c, this);
                    },
                    dispose: function() {
                        this.model.off("change:content_access", l, this), this.model.off("change", c, this);
                    }
                }
            }),
            model: new i({
                override: {
                    oppositeValues: {
                        ALLOW: "BLOCK",
                        BLOCK: "ALLOW"
                    },
                    getDefaultContentAccess: function() {
                        return this.get("default_content_access");
                    },
                    isDifferentFromDefault: function() {
                        return this.get("content_access") != this.getDefaultContentAccess();
                    },
                    isAllow: function() {
                        return this.get("content_access") == "ALLOW";
                    },
                    isBlock: function() {
                        return this.get("content_access") == "BLOCK";
                    },
                    isWidget: function() {
                        return this.get("widget") === !0;
                    },
                    toggleContentAccess: function() {
                        var e = this.get("content_access");
                        this.set("content_access", this.oppositeValues[e]);
                    }
                }
            })
        };
    }), define("models/api-access/application", ["require", "exports", "module", "vendor/underscore", "lib/model", "lib/backbone", "lib/mixins/undoable-model", "views/api-access/mixins/api-access-edit"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/model"),
            s = e("lib/backbone"),
            o = e("lib/mixins/undoable-model"),
            u = e("views/api-access/mixins/api-access-edit"),
            a;
        n.exports = a = i.extend({
            mixins: [o, u.model],
            idAttribute: "application_urn",
            url: function() {
                var e;
                return this.get("is_exception") ? e = this.oppositeValues[this.get("content_access")] : e = this.get("content_access"), "/_api/api_access/applications/" + this.id + "/" + e.toLowerCase();
            },
            parse: function(e) {
                return e && (e.application_id = r.last(e.application_urn.split(":"))), e;
            },
            sync: function(e, t, n) {
                return t.get("is_exception") ? n.type = "DELETE" : n.type = "PUT", s.sync.call(this, e, t, n);
            }
        });
    }), define("api-access/top-applications", ["require", "exports", "module"], function(e, t, n) {
        var r;
        r = n.exports = [{
            application_urn: "soundcloud:applications:422",
            name: "Hype Machine",
            url: "http://hypem.com"
        }, {
            application_urn: "soundcloud:applications:44058",
            name: "Indie Shuffle",
            url: null
        }, {
            application_urn: "soundcloud:applications:110636",
            name: "Wonder.FM",
            url: "http://wonder.fm/"
        }, {
            application_urn: "soundcloud:applications:96125",
            name: "Resident Advisor",
            url: "http://www.residentadvisor.net/"
        }, {
            application_urn: "soundcloud:applications:302415",
            name: "Hot New Hip Hop",
            url: "https://soundcloud.com/hotnewhiphop"
        }, {
            application_urn: "soundcloud:applications:47852",
            name: "Flipboard",
            url: null
        }, {
            application_urn: "soundcloud:applications:56139",
            name: "Délicieuse Musique",
            url: null
        }, {
            application_urn: "soundcloud:applications:67236",
            name: "letournedisque",
            url: null
        }, {
            application_urn: "soundcloud:applications:41765",
            name: "pitchfork-player",
            url: null
        }, {
            application_urn: "soundcloud:applications:111807",
            name: "Sonos",
            url: "https://soundcloud-test.ws.sonos.com"
        }, {
            application_urn: "soundcloud:applications:82986",
            name: "SoundCloud on Sonos",
            url: null
        }, {
            application_urn: "soundcloud:applications:155239",
            name: "HEOS by Denon",
            url: null
        }, {
            application_urn: "soundcloud:applications:175566",
            name: "Raumfeld",
            url: "https://www.raumfeld.com/"
        }, {
            application_urn: "soundcloud:applications:300128",
            name: "Google Developer",
            url: null
        }, {
            application_urn: "soundcloud:applications:5741",
            name: "Tumblr",
            url: null
        }, {
            application_urn: "soundcloud:applications:179522",
            name: "Facebook Partner",
            url: null
        }, {
            application_urn: "soundcloud:applications:120502",
            name: "Twitter Audio Card",
            url: null
        }];
    }), define("collections/api-access/applications", ["require", "exports", "module", "vendor/underscore", "lib/collection", "models/api-access/application", "api-access/top-applications"], function(e, t, n) {
        function a(e) {
            e.toJSON && (e = e.toJSON());
            if (e.application_urn) return e.application_urn;
            if (e.self && e.self.urn) return e.self.urn;
            if (e.urn) return e.urn;
        }

        function h(e) {
            var t = jQuery.Deferred();
            return $.ajax({
                url: "/_api/api_access/applications/search",
                data: {
                    limit: 50,
                    name_starts_with: e
                },
                success: function(n) {
                    var i = n.collection.items,
                        s = r.find(l, function(t) {
                            return t.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                        }),
                        o = r.find(c, function(t) {
                            return t.toLowerCase().indexOf(e.toLowerCase()) >= 0;
                        });
                    (s || o) && i.unshift(r.extend({}, f, {
                        serviceName: s
                    })), t.resolve(i);
                },
                error: function() {
                    t.reject(arguments);
                }
            }), t;
        }
        var r = e("vendor/underscore"),
            i = e("lib/collection"),
            s = e("models/api-access/application"),
            o = e("api-access/top-applications"),
            u;
        u = n.exports = i.extend({
            model: s,
            applications: [],
            setup: function() {
                this.applications = o;
            },
            url: function() {
                var e = r.map(this.applications, function(e) {
                    return a(e);
                });
                return "/_api/api_access/applications?application_urns=" + e.join(",");
            },
            clearSearch: function() {
                this.applications = o, this.fetch();
            },
            search: function(e) {
                return h(e).then(function(t) {
                    this.applications = t, this.fetch({
                        searchTerm: e
                    });
                }.bind(this));
            },
            parse: function(e) {
                var t = this.applications,
                    n = e.applications || e.collection.items || [],
                    i = r.groupBy(t, a);
                return r.forEach(n, function(e) {
                    r.extend(e, r.first(i[a(e)]));
                }), n;
            }
        });
        var f = {
                application_urn: "soundcloud:applications:90575",
                name: "SoundCloud Visual Embed Player",
                url: "https://www.soundcloud.com",
                widget: !0
            },
            l = ["Google", "Bing"],
            c = ["widget", "embed", "player", "visual"];
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/application-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/application-item"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <a href="', (i = n.url) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.url, i = typeof i === f ? i.apply(e) : i), r += l(i) + '" target="_blank" class="app-url-link">', (i = n.url) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.url, i = typeof i === f ? i.apply(e) : i), r += l(i) + "</a>\n    ", r;
                }

                function d(e, t) {
                    return '\n  <td class="widget-warning" colspan="3">Blocking the embedded player removes embedded streaming for all your accounts!</td>\n';
                }

                function v(e, t) {
                    var r = "",
                        i;
                    return r += '\n  <td class="app-action">\n      <a href="#/api-access/applications/', (i = n.application_id) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.application_id, i = typeof i === f ? i.apply(e) : i), r += l(i) + '/accounts" class="sc-button sc-button-medium">Accounts</a>\n  </td>\n  <td class="app-account-exceptions">\n      ', (i = n.user_exceptions_count) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.user_exceptions_count, i = typeof i === f ? i.apply(e) : i), r += l(i) + '\n  </td>\n  <td class="app-track-exceptions">\n      ', (i = n.track_exceptions_count) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.track_exceptions_count, i = typeof i === f ? i.apply(e) : i), r += l(i) + "\n  </td>\n", r;
                }

                function m(e, t) {
                    return "enabled";
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = this,
                    h = n.helperMissing;
                s += '<td class="app-name">', (o = n.name) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.name, o = typeof o === f ? o.apply(t) : o), s += l(o) + '</td>\n<td class="app-url">\n    ', o = n["if"].call(t, t.url, {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, p, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += "\n</td>\n", o = n["if"].call(t, t.widget, {
                    hash: {},
                    inverse: c.program(5, v, i),
                    fn: c.program(3, d, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += '\n<td class="app-content-access content-access">\n    <div class="sc-button-group sc-button-group-pill content-access-switch">\n        <button class="sc-button sc-button-medium content-access-allow ', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(7, m, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.content_access, "ALLOW", a) : h.call(t, "equals", t.content_access, "ALLOW", a));
                if (u || u === 0) s += u;
                s += '">Allow</button>\n        <button class="sc-button sc-button-medium content-access-block ', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(7, m, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.content_access, "BLOCK", a) : h.call(t, "equals", t.content_access, "BLOCK", a));
                if (u || u === 0) s += u;
                return s += '">Block</button>\n    </div>\n</td>\n', s;
            }), this.HandlebarsTemplates["api-access/application-item"];
        }.call(this);
    }.call(this), define("views/api-access/application-item-view", ["require", "exports", "module", "lib/view", "views/api-access/mixins/api-access-edit"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("views/api-access/mixins/api-access-edit"),
            s;
        s = n.exports = r.extend({
            mixins: [i.itemView],
            tagName: "tr",
            className: "list-item application-item",
            template: JST["templates/api-access/application-item"]
        });
    }), define("views/api-access/mixins/current-state", ["require", "exports", "module", "vendor/underscore", "lib/view", "lib/model", "lib/mixin"], function(e, t, n) {
        function f(e, t) {
            this.currentStateView.setText(this.getCurrentState(this.collection, t));
        }
        var r = e("vendor/underscore"),
            i = e("lib/view"),
            s = e("lib/model"),
            o = e("lib/mixin"),
            u, a = i.extend({
                observableAttributes: ["text"],
                tagName: "span",
                className: "sc-text-light",
                setup: function(e) {
                    this.model = new s, this.model.set("text", e.text || "");
                },
                setText: function(e) {
                    this.model.set("text", e);
                },
                template: function() {
                    return this.model.get("text");
                },
                hasData: function() {
                    return !0;
                }
            });
        n.exports = u = new o({
            after: {
                setup: function() {
                    var e = r.result(this, "initialStateText", "");
                    this.currentStateView = new a({
                        text: e
                    }), this.addSubview(this.currentStateView, "currentStateView"), this.collection.on("reset", f, this);
                },
                dispose: function() {
                    this.collection.off("reset", f, this);
                },
                renderDecorate: function() {
                    this.$(".current-state").append(this.currentStateView.el);
                }
            },
            defaults: {
                currentStatePrefix: "",
                itemsType: "Items",
                getCurrentState: function(e, t) {
                    var n = e.size();
                    return t.searchTerm ? (n === 0 ? "No" : this.currentStatePrefix + n) + " result" + (n === 1 ? "" : "s") + " for: " + t.searchTerm : this.currentStatePrefix + n + " " + this.itemsType;
                }
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/pagination"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.pagination = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return (o = n.lower_range) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.lower_range, o = typeof o === u ? o.apply(t) : o), s += a(o) + " - ", (o = n.upper_range) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.upper_range, o = typeof o === u ? o.apply(t) : o), s += a(o) + " of ", (o = n.count) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.count, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n<div class="sc-button-group sc-button-group-pill pagination-button-group">\n  <a title="', (o = n.prev) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.prev, o = typeof o === u ? o.apply(t) : o), s += a(o) + '" class="pager-newer ', (o = n.newer_disabled) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.newer_disabled, o = typeof o === u ? o.apply(t) : o), s += a(o) + ' sc-button sc-button-medium sc-button-pageleft sc-button-icon">', (o = n.prev) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.prev, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a>\n  <a title="', (o = n.next) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.next, o = typeof o === u ? o.apply(t) : o), s += a(o) + '" class="pager-older ', (o = n.older_disabled) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.older_disabled, o = typeof o === u ? o.apply(t) : o), s += a(o) + ' sc-button sc-button-medium sc-button-pageright sc-button-icon">', (o = n.next) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.next, o = typeof o === u ? o.apply(t) : o), s += a(o) + "</a>\n</div>\n", s;
            }), this.HandlebarsTemplates.pagination;
        }.call(this);
    }.call(this), define("lib/views/mixins/static-pagination", ["require", "exports", "module", "views/pager-view", "models/pager", "lib/mixin"], function(e, t, n) {
        function f(e) {
            this.allItems = e.models, this.pagerView && (this.currentPage = 1, this.pagerView.model.set("page", this.currentPage), this.pagerView.model.setCount(this.allItems.length)), this.paginate(e);
        }
        var r = e("views/pager-view"),
            i = e("models/pager"),
            s = e("lib/mixin"),
            o, u = i.extend({
                setup: function(e) {
                    this.set("lower_range", 1), this.set("upper_range", e.count), i.prototype.setup.apply(this, arguments);
                },
                getCount: $.noop,
                setCount: function(e) {
                    this.set("count", e);
                }
            }),
            a = r.extend({
                hasData: function() {
                    return this.model.has("count");
                },
                template: JST["templates/pagination"]
            });
        n.exports = o = new s({
            defaults: {
                currentPage: 1,
                pageSize: 10
            },
            override: {
                allItems: [],
                paginate: function(e) {
                    var t = (this.currentPage - 1) * this.pageSize,
                        n = t + this.pageSize;
                    e.models = this.allItems.slice(t, n), e.trigger("paginate", e);
                }
            },
            after: {
                setup: function() {
                    this.collection.on("reset", f, this);
                },
                remove: function() {
                    this.pagerView && (this.pagerView.model.off(), this.pagerView.remove()), this.collection.off("reset", f, this);
                },
                render: function() {
                    this.pagerView && this.pagerView.remove();
                    var e = this.$(".pager");
                    e.length && (this.pagerView = new a({
                        parent: this,
                        el: e,
                        prev: "Previous",
                        next: "Next",
                        type: " ",
                        fetch: !1,
                        model: new u({
                            page: this.currentPage,
                            limit: this.pageSize
                        })
                    }), this.pagerView.model.on("change:page", function(e, t) {
                        this.currentPage = t, this.paginate(this.collection), this.renderItems();
                    }, this));
                }
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/applications"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/applications"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "";
                return s += '<div class="l-header header">\n  <h2>API Access</h2>\n\n  <div class="top-bar">\n    <div class="title">\n      <div>\n        <h1>Apps</h1>\n      </div>\n    </div>\n\n    <div class="search-box">\n      <div class="search-input-container">\n        <input class="sc-input sc-input-large search-input" type="text"\n        placeholder="Search for app by name"/>\n        <button class="sc-button sc-button-large search-button" title="Search"></button>\n      </div>\n    </div>\n\n    <div class="current-state">\n      \n    </div>\n\n    <div class="edit-actions">\n      \n    </div>\n\n    <div class="pager">\n      \n    </div>\n  </div>\n</div>\n\n<div class="section list">\n  <table class="list-items list-items-cleared applications-list">\n    <thead class="list-items-header">\n      <tr>\n        <td class="app-name-header">App Name</td>\n        <td class="app-url-header">URL</td>\n        <td class="app-action-header">Account Access</td>\n        <td class="app-account-exceptions-header">Account Exceptions</td>\n        <td class="app-track-exceptions-header">Track Exceptions</td>\n        <td class="app-content-access-header content-access-header">Content Access</td>\n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n  </table>\n</div>\n', s;
            }), this.HandlebarsTemplates["api-access/applications"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/widget-warning"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/widget-warning"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<div class="widget-service-warning">\n    <p>Looking for ', (o = n.serviceName) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.serviceName, o = typeof o === u ? o.apply(t) : o), s += a(o) + "? ", (o = n.serviceName) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.serviceName, o = typeof o === u ? o.apply(t) : o), s += a(o) + " streaming is done with SoundCloud’s Visual Player, so it's not possible to block just ", (o = n.serviceName) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.serviceName, o = typeof o === u ? o.apply(t) : o), s += a(o) + ".\n      You can only turn off the embedded player for <strong>all sites and services</strong> below.</p>\n</div>\n", s;
            }), this.HandlebarsTemplates["api-access/widget-warning"];
        }.call(this);
    }.call(this), define("views/api-access/applications-view", ["require", "exports", "module", "app", "vendor/underscore", "lib/list-view", "lib/views/mixins/list-header", "collections/api-access/applications", "views/api-access/application-item-view", "views/api-access/mixins/api-access-edit", "views/api-access/mixins/current-state", "lib/views/mixins/static-pagination"], function(e, t, n) {
        var r = e("app"),
            i = e("vendor/underscore"),
            s = e("lib/list-view"),
            o = e("lib/views/mixins/list-header"),
            u = e("collections/api-access/applications"),
            a = e("views/api-access/application-item-view"),
            f = e("views/api-access/mixins/api-access-edit"),
            l = e("views/api-access/mixins/current-state"),
            c = e("lib/views/mixins/static-pagination"),
            h;
        h = n.exports = s.extend({
            mixins: [o, f.listView, l, c],
            pageSize: 30,
            itemView: a,
            collection: u,
            currentStatePrefix: "Top ",
            disposeOnLeave: !0,
            itemsType: "Apps",
            onSaveSuccess: function(e) {
                var t = i.filter(e, function(e) {
                        return e.isBlock();
                    }),
                    n = ["Your changes are saved:"];
                switch (t.length) {
                    case 0:
                        n = n.concat([e.length, "application" + (e.length == 1 ? "is" : "s are"), "now allowed to stream your content"]);
                        break;
                    case 1:
                        n = n.concat(['"' + t[0].get("name") + '"', "is now blocked from streaming your content"]);
                        break;
                    case 2:
                        n = n.concat(['"' + t[0].get("name") + '"', "and", '"' + t[1].get("name") + '"', "are now blocked from streaming your content"]);
                        break;
                    default:
                        n = n.concat(['"' + t[0].get("name") + '",']), n = n.concat(['"' + t[1].get("name") + '"', "and"]), n = n.concat([t.length - 2, "other application" + (t.length > 3 ? "s" : ""), "are now blocked from streaming your content"]);
                }
                r.Router.notification.show(n.join(" "), {
                    hide: 5e3
                });
            },
            emptyTemplate: function() {
                return '<tr><td colspan="6"><div class="no-results-found sc-text-light">No results found</div></td></tr>';
            },
            className: "api-access api-access-applications",
            events: {
                "click .search-button": "doSearch",
                "keyup .search-input": function(e) {
                    e.keyCode == 13 && this.doSearch(e);
                }
            },
            setup: function() {
                this.collection.on("reset", function(e) {
                    $(".widget-service-warning").remove();
                    var t = e.find(function(e) {
                        return e.get("widget");
                    });
                    if (t) {
                        var n = t.get("serviceName");
                        if (n) {
                            var r = JST["templates/api-access/widget-warning"]({
                                serviceName: n
                            });
                            $(r).appendTo(this.$(".top-bar"));
                        }
                    }
                    this.trigger("appended");
                }, this);
            },
            showProgressIndicator: function() {
                this.getListEl().html('<tr><td colspan="6"><div class="more-loading">Searching ...</div></td></tr>');
            },
            doSearch: function() {
                var e = this.$(".search-input").val();
                this.showProgressIndicator(), e ? this.collection.search(e) : this.collection.clearSearch();
            },
            template: JST["templates/api-access/applications"]
        });
    }), define("tooltip", ["require", "exports", "module"], function(e, t, n) {
        var r;
        n.exports = r = {
            defaults: {
                style: "deck-tooltip",
                position: {
                    target: "mouse",
                    adjust: {
                        mouse: !1
                    }
                }
            },
            presets: {
                left: {
                    position: {
                        my: "top right",
                        at: "bottom left"
                    }
                },
                right: {
                    position: {
                        my: "top left",
                        at: "bottom right"
                    }
                },
                center: {
                    position: {
                        my: "top center",
                        at: "bottom center"
                    }
                }
            },
            bootstrap: function(e, t) {
                var n = e.is("[title]") ? e : e.find("[title]");
                n.each(function(e, n) {
                    var r = $(n),
                        i = $.extend(!0, {}, this.defaults, this.presets[r.attr("tooltip-position") || "left"], t);
                    r.qtip(i);
                }.bind(this));
            }
        };
    }), define("models/user-badge", ["require", "exports", "module", "vendor/underscore", "lib/model"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = e("lib/model");
        r = n.exports = s.extend({
            url: function() {
                return "/_api/users/" + this.id;
            },
            resource_type: "user-badge",
            defaults: {
                external_id: null,
                tracks_count: null,
                followers_count: null,
                avatar_url: null,
                state: "resolving"
            },
            update: function(e) {
                this.set({
                    tracks_count: e.tracks_count,
                    followers_count: e.followers_count,
                    avatar_url: e.avatar_url,
                    state: "resolved"
                });
            },
            parse: function(e) {
                return e.length ? e[0] : e;
            }
        }, {
            hasAddress: function(e) {
                return !!e && !!(e.street || e.postal_code || e.city || e.country_code);
            },
            formatAddress: function(e) {
                if (!(e.street || e.postal_code || e.city)) return e.country_code || "";
                var t = i.filter([e.street, e.postal_code, e.city], function(e) {
                    return e;
                }).join(" ");
                return e.country_code ? t + ", " + e.country_code : t;
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/user-badge"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["user-badge"] = Handlebars.template(function(e, t, n, r, i) {
                function h(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n        <img src="' + f((i = (i = e.badge, i == null || i === !1 ? i : i.avatar_url), typeof i === a ? i.apply(e) : i)) + '" width="40" height="40" alt="', (s = n.username) ? s = s.call(e, {
                        hash: {},
                        data: t
                    }) : (s = e.username, s = typeof s === a ? s.apply(e) : s), r += f(s) + '’s avatar" class="image__full g-opacity-transition" style="opacity: 1;">\n      ', r;
                }

                function p(e, t) {
                    var r = "",
                        i;
                    return r += '\n        <img width="40" height="40" alt="', (i = n.username) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.username, i = typeof i === a ? i.apply(e) : i), r += f(i) + '’s avatar" class="image__full g-opacity-transition asynchronous resolving" style="opacity: 1;">\n      ', r;
                }

                function d(e, t) {
                    return '\n        <span class="label label-round">Whitelisted</span>\n        ';
                }

                function v(e, t) {
                    return '\n      <span class="icon conflict-alert"></span>\n      ';
                }

                function m(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n      <ul class="stats sc-list-nostyle sc-clearfix stats-small">\n        <li class="stats-item">\n          <span class="sc-icon sc-icon-medium sc-icon-sound-light sc-ir">\n          Tracks:</span> ', s = {
                        hash: {},
                        data: t
                    }, r += f((i = n.formatCount, i ? i.call(e, (i = e.badge, i == null || i === !1 ? i : i.tracks_count), s) : l.call(e, "formatCount", (i = e.badge, i == null || i === !1 ? i : i.tracks_count), s))) + '\n        </li>\n        <li class="stats-item">\n          <span class="sc-icon sc-icon-medium sc-icon-follower-light sc-ir">\n          Followers:</span> ', s = {
                        hash: {},
                        data: t
                    }, r += f((i = n.formatCount, i ? i.call(e, (i = e.badge, i == null || i === !1 ? i : i.followers_count), s) : l.call(e, "formatCount", (i = e.badge, i == null || i === !1 ? i : i.followers_count), s))) + "\n        </li>\n      </ul>\n    ", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression,
                    l = n.helperMissing,
                    c = this;
                s += '<div class="user-badge sc-media">\n  <div class="sc-media-image">\n    <a href="', (o = n.permalink_url) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.permalink_url, o = typeof o === a ? o.apply(t) : o), s += f(o) + '" title="Visit ', (o = n.username) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.username, o = typeof o === a ? o.apply(t) : o), s += f(o) + '’s profile"></a>\n    <div class="image-has-placeholder image-has-placeholder-user image-has-placeholder-40" style="width: 40px; height: 40px;">\n      ', u = n["if"].call(t, (o = t.badge, o == null || o === !1 ? o : o.avatar_url), {
                    hash: {},
                    inverse: c.program(3, p, i),
                    fn: c.program(1, h, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '\n    </div>\n  </div>\n  <div class="sc-media-content">\n    <h3 class="user-badge-title sc-truncate sc-font">\n      <a href="', (u = n.permalink_url) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.permalink_url, u = typeof u === a ? u.apply(t) : u), s += f(u) + '" title="Visit ', (u = n.username) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.username, u = typeof u === a ? u.apply(t) : u), s += f(u) + '’s profile"class="sc-link-dark">\n        ', u = n["if"].call(t, t.whitelisted, {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(5, d, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += "\n        ", (u = n.username) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.username, u = typeof u === a ? u.apply(t) : u), s += f(u) + "\n      </a>\n      ", u = n["if"].call(t, t.conflict, {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(7, v, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += "\n    </h3>\n    ", u = n["if"].call(t, t.has_counts, {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(9, m, i),
                    data: i
                });
                if (u || u === 0) s += u;
                return s += "\n  </div>\n</div>\n", s;
            }), this.HandlebarsTemplates["user-badge"];
        }.call(this);
    }.call(this), define("views/user-badge-view", ["require", "exports", "module", "models/user-badge", "lib/view", "views/user-badge-view"], function(e, t, n) {
        var r, i = e("models/user-badge"),
            s = e("lib/view");
        e("views/user-badge-view"), r = n.exports = s.extend({
            template: JST["templates/user-badge"],
            loadingTemplate: function() {
                return '<img src="/assets/images/spinner.gif" class="spinner" width="16" height="16" alt="loading..." />';
            },
            errorTemplate: {
                "404": function(e) {
                    return '<p class="missing">User (id ' + e.id + ") not found</p>";
                }
            },
            observableAttributes: ["avatar_url", "permalink_url"],
            setup: function(e) {
                this.model = new i(e.model ? e.model : {
                    id: e.id
                });
            },
            getTemplateData: function(e) {
                return {
                    has_counts: e.tracks_count !== null && e.followers_count !== null,
                    badge: {
                        tracks_count: e.tracks_count,
                        followers_count: e.followers_count,
                        avatar_url: e.avatar_url
                    },
                    username: e.username,
                    permalink_url: e.permalink_url,
                    role: e.role,
                    whitelisted: this.options.account && this.options.account.get("state") == "created",
                    conflict: this.options.conflict
                };
            },
            hasData: function() {
                return this.model.get("avatar_url") && this.model.get("permalink_url");
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/account-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/account-item"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    return "enabled";
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = n.helperMissing,
                    l = this.escapeExpression,
                    c = "function",
                    h = this;
                s += '<td class="account-badge wl-user-badge">\n  ', a = {
                    hash: {
                        id: t.external_id,
                        model: t.badge,
                        fetch: !1,
                        conflict: t.same_level_conflict
                    },
                    data: i
                }, s += l((o = n.view, o ? o.call(t, "../views/user-badge-view", a) : f.call(t, "view", "../views/user-badge-view", a))) + '\n</td>\n<td class="account-action">\n    <a href="#/api-access/applications/', (u = n.application_id) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.application_id, u = typeof u === c ? u.apply(t) : u), s += l(u) + "/accounts/", (u = n.external_id) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.external_id, u = typeof u === c ? u.apply(t) : u), s += l(u) + '/tracks" class="sc-button sc-button-medium">Tracks</a>\n</td>\n<td class="account-track-exceptions">\n    ', (u = n.track_exceptions_count) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.track_exceptions_count, u = typeof u === c ? u.apply(t) : u), s += l(u) + '\n</td>\n<td class="account-content-access content-access">\n    <div class="sc-button-group sc-button-group-pill content-access-switch">\n        <button class="sc-button sc-button-medium content-access-allow ', a = {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, p, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.content_access, "ALLOW", a) : f.call(t, "equals", t.content_access, "ALLOW", a));
                if (u || u === 0) s += u;
                s += '">Allow</button>\n        <button class="sc-button sc-button-medium content-access-block ', a = {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, p, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.content_access, "BLOCK", a) : f.call(t, "equals", t.content_access, "BLOCK", a));
                if (u || u === 0) s += u;
                return s += '">Block</button>\n    </div>\n</td>\n', s;
            }), this.HandlebarsTemplates["api-access/account-item"];
        }.call(this);
    }.call(this), define("views/api-access/account-item-view", ["require", "exports", "module", "lib/view", "views/api-access/mixins/api-access-edit", "tooltip", "views/user-badge-view"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("views/api-access/mixins/api-access-edit"),
            s = e("tooltip"),
            o;
        e("views/user-badge-view"), o = n.exports = r.extend({
            mixins: [i.itemView],
            tagName: "tr",
            className: "list-item account-item",
            template: JST["templates/api-access/account-item"],
            renderDecorate: function() {
                var e = this.model.get("same_level_conflict"),
                    t = this.$(".account-badge");
                e && t.attr("title", "Another rightsholder also controls this account and some permissions may conflict."), s.bootstrap(this.$el);
            }
        });
    }), define("models/api-access/account", ["require", "exports", "module", "lib/model", "lib/backbone", "lib/mixins/undoable-model", "views/api-access/mixins/api-access-edit"], function(e, t, n) {
        var r = e("lib/model"),
            i = e("lib/backbone"),
            s = e("lib/mixins/undoable-model"),
            o = e("views/api-access/mixins/api-access-edit"),
            u;
        n.exports = u = r.extend({
            mixins: [s, o.model],
            url: function() {
                var e = "soundcloud:applications:" + this.get("application_id"),
                    t = this.oppositeValues[this.getDefaultContentAccess()].toLowerCase();
                return "/_api/api_access/applications/" + e + "/" + t + "/" + this.get("user_urn");
            },
            sync: function(e, t, n) {
                return t.isDifferentFromDefault() ? n.type = "PUT" : n.type = "DELETE", i.sync.call(this, e, t, n);
            }
        });
    }), define("lib/fetch-in-batches", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
        function i(e, t) {
            return r.reduce(e, function(e, n) {
                var i = r.last(e);
                if (!i || i.length >= t) e.push([]), i = r.last(e);
                return i.push(n), e;
            }, []);
        }
        var r = e("vendor/underscore");
        n.exports = function(t) {
            var n = t.batchSize || 20,
                s = t.parse || r.identity,
                o = t.promise || $.Deferred(),
                u = t.identifiers || [],
                a = t.url,
                f = t.batchSuccess || $.noop,
                l = i(u, n),
                c = [],
                h = l.length,
                p = h;
            return r.each(l, function(e) {
                $.ajax({
                    url: r.isFunction(a) ? a(e) : a,
                    error: o.reject.bind(o),
                    beforeSend: function(t) {
                        t.sliceIds = e;
                    }
                }).then(function(e) {
                    f.apply(this, arguments), c = c.concat(s(e)), --p === 0 && o.resolve(c);
                });
            }), o;
        };
    }), define("collections/api-access/api-access-accounts", ["require", "exports", "module", "vendor/underscore", "app", "lib/collection", "models/api-access/account", "lib/fetch-in-batches"], function(e, t, n) {
        function f(e, t) {
            return u({
                identifiers: t,
                batchSize: 100,
                url: function(t) {
                    return "/_api/api_access/accounts/" + e + "?user_urns=" + t.join(",");
                },
                parse: function(e) {
                    return e.users;
                }
            });
        }

        function l(e) {
            return $.ajax({
                url: "/_api/api_access/search-users?limit=200&q=" + e
            });
        }
        var r = e("vendor/underscore"),
            i = e("app"),
            s = e("lib/collection"),
            o = e("models/api-access/account"),
            u = e("lib/fetch-in-batches"),
            a;
        a = n.exports = s.extend({
            model: o,
            currentAccounts: [],
            currentAccountUrns: [],
            allAccountUrns: [],
            allCPPMemberUrns: [],
            default_content_access: null,
            setApplicationData: function(e) {
                this.application_id = e.id, $.when(this.fetchAccountUrns(), this.fetchCPPMemberUrns()).then(function() {
                    this.allPlusCPPAccountUrns = this.allAccountUrns, setTimeout(function() {
                        this.allPlusCPPAccountUrns = this.allCPPMemberUrns.concat(this.allAccountUrns);
                    }.bind(this), 1), this.fetch();
                }.bind(this)), this.default_content_access = e.get("default_content_access");
            },
            fetch: function(e) {
                var t = "soundcloud:applications:" + this.application_id;
                f(t, this.currentAccountUrns).then(function(t) {
                    this.currentAccounts = t, s.prototype.fetch.call(this, e);
                }.bind(this));
            },
            fetchAccountUrns: function() {
                return $.ajax({
                    url: "/_api/users",
                    success: function(e) {
                        this.currentAccountUrns = this.allAccountUrns = e.user_urns;
                    }.bind(this)
                });
            },
            fetchCPPMemberUrns: function() {
                return $.ajax({
                    url: "/cpp_linked_members",
                    success: function(e) {
                        this.allCPPMemberUrns = e.member_urns;
                    }.bind(this)
                });
            },
            sync: function(e, t, n) {
                var r = this.url;
                return u({
                    identifiers: this.currentAccountUrns,
                    batchSize: 100,
                    url: function(e) {
                        return r + "?sc_user_urns=" + e.join(",");
                    },
                    parse: function(e) {
                        return e.users;
                    }
                }).done(n.success);
            },
            url: "/_api/users/rightsholders",
            parse: function(e) {
                var t = this.currentAccounts,
                    n = e,
                    s = "soundcloud:rightsholders:" + i.currentUser.get("rightsholders")[0],
                    o = function(e) {
                        var t = r.find(n, function(t) {
                                return t.self.urn == e;
                            }),
                            i = function(e) {
                                return e.length > 1 && r.contains(e, s);
                            },
                            o = !r.isEmpty(t.managers) && !r.contains(t.managers, s),
                            u = !o && (i(t.managers) || i(t.whitelisters));
                        return {
                            same_level_conflict: u,
                            managed_by_others: o
                        };
                    };
                return r.map(t, function(e) {
                    var t = e.user_urn,
                        n = o(t);
                    return r.extend({}, e, n, {
                        application_id: this.application_id,
                        external_id: parseInt(r.last(t.split(":")), 10),
                        default_content_access: this.default_content_access
                    });
                }.bind(this));
            },
            search: function(e) {
                return l(e).then(function(t) {
                    var n = r.pluck(t.docs, "urn"),
                        i = r.intersection(this.allPlusCPPAccountUrns, n);
                    this.currentAccountUrns = i, r.isEmpty(this.currentAccountUrns) ? this.reset([], {
                        searchTerm: e
                    }) : this.fetch({
                        searchTerm: e
                    });
                }.bind(this));
            },
            clearSearch: function() {
                this.currentAccountUrns = this.allAccountUrns, this.fetch();
            }
        });
    }), define("collections/user-badges", ["require", "exports", "module", "vendor/underscore", "vendor/backbone", "models/user-badge", "lib/fetch-in-batches", "lib/collection"], function(e, t, n) {
        var r, i = e("vendor/underscore"),
            s = e("vendor/backbone"),
            o = e("models/user-badge"),
            u = e("lib/fetch-in-batches"),
            a = e("lib/collection");
        r = n.exports = a.extend({
            model: o,
            resource_id: "user-badges",
            url: function() {
                return "/_api/users/lookup";
            },
            fetchByUserIds: function(e, t) {
                return this.fetch(i.defaults({
                    userIds: e,
                    add: !0
                }, t));
            },
            parse: function(e, t) {
                if (!t.sliceIds) return e;
                var n = i.groupBy(e, function(e) {
                    return e.id;
                });
                return i.map(t.sliceIds, function(e) {
                    var t = n[e];
                    return t ? i.first(t) : [{
                        id: e,
                        _status: "lookuperror"
                    }];
                });
            },
            sync: function(e, t, n) {
                if (n.userIds) {
                    var r = n.url || this.url();
                    return u({
                        identifiers: n.userIds,
                        batchSize: 50,
                        url: function(e) {
                            return r + "?id=" + e.join(",");
                        },
                        batchSuccess: n.success
                    });
                }
                return s.sync.apply(this, arguments);
            },
            add: function(e, t) {
                return a.prototype.add.apply(this, arguments), t.userIds && i.chain(this.models).filter(function(e) {
                    return e.get("_status") == "lookuperror";
                }).each(function(e) {
                    e.trigger("error", e, {
                        status: 404
                    }, t);
                }), this;
            }
        });
    }), define("models/api-access/application-metadata", ["require", "exports", "module", "vendor/underscore", "lib/model"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/model"),
            s;
        n.exports = s = i.extend({
            applicationUrn: function() {
                return "soundcloud:applications:" + this.id;
            },
            url: function() {
                return "/_api/api_access/applications/" + this.applicationUrn() + "/content_access";
            },
            application: {},
            fetchApplicationMetadata: function(e) {
                var t = "/_api/api_access/applications/" + this.applicationUrn() + "/metadata";
                $.ajax({
                    url: t,
                    success: function(t) {
                        e(r.first(t.collection.items));
                    }.bind(this)
                });
            },
            fetch: function(e) {
                this.fetchApplicationMetadata(function(t) {
                    this.application = t, i.prototype.fetch.call(this, e);
                }.bind(this));
            },
            parse: function(e) {
                return r.extend({}, this.application, e);
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/default-content-access"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/default-content-access"] = Handlebars.template(function(e, t, n, r, i) {
                function c(e, t) {
                    return "enabled";
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = this,
                    l = n.helperMissing;
                s += 'Default:\n<div class="sc-button-group sc-button-group-pill content-access-switch disabled">\n  <button class="sc-button sc-button-medium content-access-allow ', a = {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, c, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.default_content_access, "ALLOW", a) : l.call(t, "equals", t.default_content_access, "ALLOW", a));
                if (u || u === 0) s += u;
                s += '">Allow</button>\n  <button class="sc-button sc-button-medium content-access-block ', a = {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(1, c, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.default_content_access, "BLOCK", a) : l.call(t, "equals", t.default_content_access, "BLOCK", a));
                if (u || u === 0) s += u;
                return s += '">Block</button>\n</div>\n', s;
            }), this.HandlebarsTemplates["api-access/default-content-access"];
        }.call(this);
    }.call(this), define("views/api-access/default-content-access-view", ["require", "exports", "module", "lib/view"], function(e, t, n) {
        var r = e("lib/view"),
            i;
        n.exports = i = r.extend({
            setup: function(e) {
                this.default_content_access = e.default_content_access;
            },
            template: JST["templates/api-access/default-content-access"],
            getTemplateData: function() {
                return {
                    default_content_access: this.default_content_access
                };
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/accounts-header"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/accounts-header"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<div class="application-name">\n  <h1>', (o = n.name) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.name, o = typeof o === u ? o.apply(t) : o), s += a(o) + " - Accounts</h1>\n</div>\n<div>\n</div>\n", s;
            }), this.HandlebarsTemplates["api-access/accounts-header"];
        }.call(this);
    }.call(this), define("views/api-access/accounts-header-view", ["require", "exports", "module", "lib/view", "models/api-access/application-metadata", "views/api-access/default-content-access-view"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("models/api-access/application-metadata"),
            s;
        e("views/api-access/default-content-access-view"), n.exports = s = r.extend({
            className: "api-access-accounts-header",
            ModelClass: i,
            observableAttributes: ["name", "default_content_access"],
            template: JST["templates/api-access/accounts-header"]
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/accounts"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/accounts"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a = n.helperMissing,
                    f = this.escapeExpression;
                return s += '<div class="l-header header">\n  <div class="section-title">\n    <div class="back-button">\n      <a href="#/api-access" class="sc-button sc-button-medium">Apps</a>\n    </div>\n    <h2>API Access</h2>\n  </div>\n\n  <div class="top-bar">\n    <div class="title">\n      ', u = {
                    hash: {
                        resource_id: t.applicationId
                    },
                    data: i
                }, s += f((o = n.view, o ? o.call(t, "../views/api-access/accounts-header-view", u) : a.call(t, "view", "../views/api-access/accounts-header-view", u))) + '\n    </div>\n\n    <div class="search-box">\n      <div class="search-input-container">\n        <input class="sc-input sc-input-large search-input" type="text"\n        placeholder="Search for whitelisted or managed accounts" />\n        <button class="sc-button sc-button-large search-button" title="Search"></button>\n      </div>\n    </div>\n\n    <div class="current-state">\n      ' + '\n    </div>\n\n    <div class="edit-actions">\n      ' + '\n    </div>\n\n    <div class="pager">\n      ' + '\n    </div>\n  </div>\n</div>\n\n<div class="section list">\n  <table class="list-items list-items-cleared accounts-list">\n    <thead class="list-items-header">\n      <tr>\n        <td class="account-badge-header">SoundCloud Account</td>\n        <td class="account-action-header">Track Access</td>\n        <td class="account-track-exceptions-header">Track Exceptions</td>\n        <td class="account-content-access-header content-access-header">Content Access</td>\n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n  </table>\n</div>\n', s;
            }), this.HandlebarsTemplates["api-access/accounts"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/accounts-table-header"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/accounts-table-header"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<tr><td colspan="4" class="table-header">', (o = n.appName) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.appName, o = typeof o === u ? o.apply(t) : o), s += a(o) + " Account ", (o = n.headerDescription) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.headerDescription, o = typeof o === u ? o.apply(t) : o), s += a(o) + "</td></tr>\n", s;
            }), this.HandlebarsTemplates["api-access/accounts-table-header"];
        }.call(this);
    }.call(this), define("views/api-access/accounts-view", ["require", "exports", "module", "vendor/underscore", "app", "lib/list-view", "lib/views/mixins/list-header", "views/api-access/account-item-view", "collections/api-access/api-access-accounts", "collections/user-badges", "models/api-access/application-metadata", "views/api-access/mixins/api-access-edit", "views/api-access/mixins/current-state", "lib/views/mixins/static-pagination", "views/api-access/accounts-header-view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("app"),
            s = e("lib/list-view"),
            o = e("lib/views/mixins/list-header"),
            u = e("views/api-access/account-item-view"),
            a = e("collections/api-access/api-access-accounts"),
            f = e("collections/user-badges"),
            l = e("models/api-access/application-metadata"),
            c = e("views/api-access/mixins/api-access-edit"),
            h = e("views/api-access/mixins/current-state"),
            p = e("lib/views/mixins/static-pagination"),
            d;
        e("views/api-access/accounts-header-view"), d = n.exports = s.extend({
            mixins: [o, c.listView, h, p],
            itemView: u,
            disposeOnLeave: !0,
            collection: a,
            itemsType: "Accounts",
            onSaveSuccess: function() {
                var e = this.collection.default_content_access,
                    t = r.filter(this.allItems, function(e) {
                        return e.isDifferentFromDefault();
                    }),
                    n = this.application.get("name"),
                    s = ["Your changes are saved:", n, "is"];
                t.length ? (e == "ALLOW" ? s = s.concat("blocked from streaming") : s = s.concat("allowed to stream"), s = s.concat(["content from", t.length, "of your accounts"])) : (e == "BLOCK" ? s = s.concat("blocked from streaming") : s = s.concat("allowed to stream"), s = s.concat("all content from your accounts")), i.Router.notification.show(s.join(" "), {
                    hide: 5e3
                });
            },
            emptyTemplate: function() {
                return '<tr><td colspan="4"><div class="no-results-found sc-text-light">No results found</div></td></tr>';
            },
            className: "api-access api-access-accounts",
            events: {
                "click .search-button": "doSearch",
                "keyup .search-input": function(e) {
                    e.keyCode == 13 && this.doSearch(e);
                }
            },
            showProgressIndicator: function() {
                this.getListEl().html('<tr><td colspan="4"><div class="more-loading">Searching ...</div></td></tr>');
            },
            doSearch: function() {
                var e = this.$(".search-input").val();
                this.showProgressIndicator(), e ? this.collection.search(e) : this.collection.clearSearch();
            },
            template: JST["templates/api-access/accounts"],
            setup: function(e) {
                this.application = new l({
                    id: e.applicationId
                }), this.application.fetch({
                    success: function() {
                        this.collection.setApplicationData(this.application);
                    }.bind(this)
                }), this.userBadges = new f, this.collection.on("reset", function(e) {
                    e.models = r.sortBy(e.models, function(e) {
                        var t = e.get("content_access") !== this.application.get("default_content_access") ? -1 : 1;
                        return r.last(e.get("user_urn").split(":")) * t;
                    }.bind(this));
                }, this), this.collection.on("paginate", this.fetchDecorators, this);
            },
            fetchDecorators: function(e) {
                var t = e.invoke("get", "user_urn"),
                    n = r.map(t, function(e) {
                        return e.split(":").pop();
                    });
                n.length && this.userBadges.fetchByUserIds(n);
            },
            collectionTemplate: function(e, t) {
                var n = e.models,
                    i = this.application.get("default_content_access"),
                    s = this.application.get("name"),
                    o = this.filterAndRender(n, function(e) {
                        return e.get("content_access") === i;
                    }, t),
                    u = JST["templates/api-access/accounts-table-header"]({
                        appName: s,
                        headerDescription: "Defaults"
                    }),
                    a = this.filterAndRender(n, function(e) {
                        return e.get("content_access") !== i;
                    }, t),
                    f = "";
                return r.isEmpty(a) || (f = JST["templates/api-access/accounts-table-header"]({
                    appName: s,
                    headerDescription: "Exceptions"
                })), r.flatten([f, a, u, o]);
            },
            getTemplateData: function(e) {
                return e.applicationId = this.options.applicationId, e;
            },
            filterAndRender: function(e, t, n) {
                return r.filter(e, function(e) {
                    return t(e);
                }).map(function(e) {
                    return n(e);
                });
            }
        });
    }), define("models/api-access/track", ["require", "exports", "module", "lib/model", "lib/backbone", "lib/mixins/undoable-model", "views/api-access/mixins/api-access-edit"], function(e, t, n) {
        var r = e("lib/model"),
            i = e("lib/backbone"),
            s = e("lib/mixins/undoable-model"),
            o = e("views/api-access/mixins/api-access-edit"),
            u;
        n.exports = u = r.extend({
            mixins: [s, o.model],
            url: function() {
                var e = "soundcloud:applications:" + this.get("application_id"),
                    t = "soundcloud:users:" + this.get("user_id"),
                    n = "soundcloud:tracks:" + this.id,
                    r = this.oppositeValues[this.getDefaultContentAccess()].toLowerCase();
                return "/_api/api_access/applications/" + e + "/" + r + "/" + t + "/tracks/" + n;
            },
            sync: function(e, t, n) {
                return t.isDifferentFromDefault() ? n.type = "PUT" : n.type = "DELETE", i.sync.call(this, e, t, n);
            }
        });
    }), define("collections/api-access/tracks", ["require", "exports", "module", "vendor/underscore", "lib/collection", "models/api-access/track"], function(e, t, n) {
        function u(e) {
            var t = {
                ALLOW: "BLOCK",
                BLOCK: "ALLOW"
            };
            return t[e];
        }

        function a(e, t) {
            return $.ajax({
                url: "/_api/api_access/search-tracks?filter.user=" + e + "&q=" + t
            });
        }

        function f(e, t) {
            var n;
            return t ? n = "/_api/users/" + e + "/tracks/fetch?track_urns=" + t.join(",") : n = "/_api/users/" + e + "/tracks", $.ajax({
                url: n
            });
        }
        var r = e("vendor/underscore"),
            i = e("lib/collection"),
            s = e("models/api-access/track"),
            o;
        o = n.exports = i.extend({
            model: s,
            tracks: [],
            default_content_access: null,
            url: function() {
                if (this.options.applicationId && this.options.accountId) return "/_api/api_access/applications/soundcloud:applications:" + this.options.applicationId + "/users/soundcloud:users:" + this.options.accountId;
            },
            bootstrap: function(e) {
                this.options.applicationId = e.applicationId, this.options.accountId = e.accountId, this.default_content_access = e.account.get("default_content_access"), this.fetchTracks();
            },
            fetchTracks: function(e, t) {
                return f(this.options.accountId, e).then(function(e) {
                    this.tracks = e, this.fetch(t);
                }.bind(this));
            },
            search: function(e) {
                return a(this.options.accountId, e).then(function(t) {
                    var n = r.pluck(t.docs, "urn");
                    this.fetchTracks(n, {
                        searchTerm: e
                    });
                }.bind(this));
            },
            clearSearch: function() {
                return this.fetchTracks();
            },
            parse: function(e) {
                var t = e.default_content_access,
                    n = u(t),
                    i = e.track_exception_urns;
                return r.map(this.tracks, function(e) {
                    var s = "soundcloud:tracks:" + e.id;
                    return r.extend({}, e, {
                        content_access: r.contains(i, s) ? n : t,
                        application_id: this.options.applicationId,
                        default_content_access: t
                    });
                }.bind(this));
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/track-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/track-item"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    return '<div class="sc-label sc-label-small sc-label-private sc-label-icon-only"></div>';
                }

                function d(e, t) {
                    return "enabled";
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = this,
                    h = n.helperMissing;
                s += '<td class="track-title">\n    <a target="_blank" href="', (o = n.permalink_url) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.permalink_url, o = typeof o === f ? o.apply(t) : o), s += l(o) + '">', (o = n.title) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.title, o = typeof o === f ? o.apply(t) : o), s += l(o) + '</a>\n</td>\n<td class="track-private">', o = n["if"].call(t, t["private"], {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, p, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += '</td>\n<td class="track-isrc">', (o = n.irsc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.irsc, o = typeof o === f ? o.apply(t) : o), s += l(o) + '</td>\n<td class="track-content-access content-access">\n    <div class="sc-button-group sc-button-group-pill content-access-switch">\n        <button class="sc-button sc-button-medium content-access-allow ', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(3, d, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.content_access, "ALLOW", a) : h.call(t, "equals", t.content_access, "ALLOW", a));
                if (u || u === 0) s += u;
                s += '">Allow</button>\n        <button class="sc-button sc-button-medium content-access-block ', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(3, d, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, t.content_access, "BLOCK", a) : h.call(t, "equals", t.content_access, "BLOCK", a));
                if (u || u === 0) s += u;
                return s += '">Block</button>\n    </div>\n</td>\n', s;
            }), this.HandlebarsTemplates["api-access/track-item"];
        }.call(this);
    }.call(this), define("views/api-access/track-item-view", ["require", "exports", "module", "lib/view", "views/api-access/mixins/api-access-edit"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("views/api-access/mixins/api-access-edit"),
            s;
        s = n.exports = r.extend({
            mixins: [i.itemView],
            tagName: "tr",
            className: "list-item track-item",
            template: JST["templates/api-access/track-item"]
        });
    }), define("models/api-access/account-metadata", ["require", "exports", "module", "vendor/underscore", "lib/model", "models/api-access/application-metadata"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("lib/model"),
            s = e("models/api-access/application-metadata"),
            o;
        n.exports = o = i.extend({
            setup: function(e) {
                this.application_id = e.application_id, this.application = new s({
                    id: this.application_id
                }), this.application.fetch();
            },
            applicationUrn: function() {
                return "soundcloud:applications:" + this.application_id;
            },
            userUrn: function() {
                return "soundcloud:users:" + this.id;
            },
            url: function() {
                return "/_api/api_access/applications/" + this.applicationUrn() + "/users/" + this.userUrn() + "/content_access";
            },
            account: {},
            fetchAccountMetadata: function(e) {
                var t = "/_api/users/" + this.id;
                $.ajax({
                    url: t,
                    success: function(t) {
                        e(t);
                    }.bind(this)
                });
            },
            fetch: function(e) {
                this.fetchAccountMetadata(function(t) {
                    this.account = t, i.prototype.fetch.call(this, e);
                }.bind(this));
            },
            parse: function(e) {
                return r.extend({}, this.account, e, {
                    application_name: this.application.get("name")
                });
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/tracks-header"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/tracks-header"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<div class="account-name">\n  <h1>', (o = n.application_name) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.application_name, o = typeof o === u ? o.apply(t) : o), s += a(o) + " - ", (o = n.username) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.username, o = typeof o === u ? o.apply(t) : o), s += a(o) + " - Tracks</h1>\n</div>\n<div>\n</div>\n", s;
            }), this.HandlebarsTemplates["api-access/tracks-header"];
        }.call(this);
    }.call(this), define("views/api-access/tracks-header-view", ["require", "exports", "module", "lib/view", "models/api-access/account-metadata", "views/api-access/default-content-access-view"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("models/api-access/account-metadata"),
            s;
        e("views/api-access/default-content-access-view"), n.exports = s = r.extend({
            className: "api-access-tracks-header",
            ModelClass: i,
            observableAttributes: ["username", "default_content_access"],
            template: JST["templates/api-access/tracks-header"]
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/tracks"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/tracks"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression,
                    l = n.helperMissing;
                return s += '<div class="l-header header">\n  <div class="section-title">\n    <div class="back-button">\n      <a href="#/api-access/applications/', (o = n.application_id) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.application_id, o = typeof o === a ? o.apply(t) : o), s += f(o) + '/accounts" class="sc-button sc-button-medium">Accounts</a>\n    </div>\n    <h2>API Access</h2>\n  </div>\n\n  <div class="top-bar">\n    <div class="title">\n      ', u = {
                    hash: {
                        resource_id: t.account_id
                    },
                    data: i
                }, s += f((o = n.view, o ? o.call(t, "../views/api-access/tracks-header-view", u) : l.call(t, "view", "../views/api-access/tracks-header-view", u))) + '\n    </div>\n\n    <div class="search-box">\n      <div class="search-input-container">\n        <input class="sc-input sc-input-large search-input" type="text"\n        placeholder="Search for track by title"/>\n        <button class="sc-button sc-button-large search-button" title="Search"></button>\n      </div>\n    </div>\n\n    <div class="current-state">\n      ' + '\n    </div>\n\n    <div class="edit-actions">\n      ' + '\n    </div>\n\n    <div class="pager">\n      ' + '\n    </div>\n  </div>\n</div>\n\n<div class="section list">\n  <table class="list-items list-items-cleared tracks-list">\n    <thead class="list-items-header">\n      <tr>\n        <td class="track-title-header">Track Title</td>\n        <td class="track-private-header">Private</td>\n        <td class="track-isrc-header">ISRC</td>\n        <td class="track-content-access-header content-access-header">Content Access</td>\n      </tr>\n    </thead>\n    <tbody>\n    </tbody>\n  </table>\n</div>\n', s;
            }), this.HandlebarsTemplates["api-access/tracks"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/api-access/tracks-table-header"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["api-access/tracks-table-header"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<tr><td colspan="4" class="table-header">', (o = n.accountName) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.accountName, o = typeof o === u ? o.apply(t) : o), s += a(o) + " Track ", (o = n.headerDescription) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.headerDescription, o = typeof o === u ? o.apply(t) : o), s += a(o) + "</td></tr>\n", s;
            }), this.HandlebarsTemplates["api-access/tracks-table-header"];
        }.call(this);
    }.call(this), define("views/api-access/tracks-view", ["require", "exports", "module", "vendor/underscore", "app", "lib/list-view", "lib/views/mixins/list-header", "collections/api-access/tracks", "views/api-access/track-item-view", "views/api-access/mixins/api-access-edit", "views/api-access/mixins/current-state", "models/api-access/account-metadata", "lib/views/mixins/static-pagination", "views/api-access/tracks-header-view"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = e("app"),
            s = e("lib/list-view"),
            o = e("lib/views/mixins/list-header"),
            u = e("collections/api-access/tracks"),
            a = e("views/api-access/track-item-view"),
            f = e("views/api-access/mixins/api-access-edit"),
            l = e("views/api-access/mixins/current-state"),
            c = e("models/api-access/account-metadata"),
            h = e("lib/views/mixins/static-pagination"),
            p;
        e("views/api-access/tracks-header-view"), p = n.exports = s.extend({
            mixins: [o, f.listView, l, h],
            setup: function(e) {
                this.account = new c({
                    id: e.accountId,
                    application_id: e.applicationId
                }), this.account.fetch({
                    success: function() {
                        e.account = this.account, this.collection.bootstrap(e);
                    }.bind(this)
                }), this.collection.on("reset", function(e) {
                    e.models = r.sortBy(e.models, function(t) {
                        var n = t.get("content_access") !== e.default_content_access ? -1 : 1;
                        return n * (t.get("playback_count") + 1);
                    });
                });
            },
            itemView: a,
            collection: u,
            itemsType: "Tracks",
            disposeOnLeave: !0,
            onSaveSuccess: function() {
                var e = this.collection.default_content_access,
                    t = r.filter(this.allItems, function(e) {
                        return e.isDifferentFromDefault();
                    }),
                    n = this.account.get("application_name"),
                    s = this.account.get("username"),
                    o = ["Your changes are saved:", n, "can"];
                t.length ? (e == "ALLOW" && (o = o.concat("not")), o = o.concat(["stream", t.length, s, "track" + (t.length > 1 ? "s" : "")])) : (e == "BLOCK" && (o = o.concat("not")), o = o.concat(["stream all of", s, "tracks"])), i.Router.notification.show(o.join(" "), {
                    hide: 5e3
                });
            },
            events: {
                "click .search-button": "doSearch",
                "keyup .search-input": function(e) {
                    e.keyCode == 13 && this.doSearch(e);
                }
            },
            emptyTemplate: function() {
                return '<tr><td colspan="6"><div class="no-results-found sc-text-light">No results found</div></td></tr>';
            },
            showProgressIndicator: function() {
                this.getListEl().html('<tr><td colspan="6"><div class="more-loading">Searching ...</div></td></tr>');
            },
            doSearch: function() {
                var e = this.$(".search-input").val();
                this.showProgressIndicator(), e ? this.collection.search(e) : this.collection.clearSearch();
            },
            collectionTemplate: function(e, t) {
                var n = e.models,
                    i = this.account.get("default_content_access"),
                    s = this.account.get("username"),
                    o = this.filterAndRender(n, function(e) {
                        return e.get("content_access") === i;
                    }, t),
                    u = JST["templates/api-access/tracks-table-header"]({
                        accountName: s,
                        headerDescription: "Defaults"
                    }),
                    a = this.filterAndRender(n, function(e) {
                        return e.get("content_access") !== i;
                    }, t),
                    f = "";
                return r.isEmpty(a) || (f = JST["templates/api-access/tracks-table-header"]({
                    accountName: s,
                    headerDescription: "Exceptions"
                })), r.flatten([f, a, u, o]);
            },
            className: "api-access api-access-tracks",
            template: JST["templates/api-access/tracks"],
            getTemplateData: function(e) {
                return e.account_id = this.account.id, e.application_id = this.account.application_id, e;
            },
            filterAndRender: function(e, t, n) {
                return r.filter(e, function(e) {
                    return t(e);
                }).map(function(e) {
                    return n(e);
                });
            }
        });
    }), define("models/whitelisted-isrc-for-user", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r, i = e("lib/model");
        r = n.exports = i.extend({
            resource_type: "emergency_ingestion",
            urlRoot: "/_api/content_ingestion/whitelisted_isrc_for_user",
            parse: function(e) {
                return e.confirmDelete = !1, e;
            }
        });
    }), define("collections/whitelisted-isrcs-for-user", ["require", "exports", "module", "lib/collection", "models/whitelisted-isrc-for-user"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("models/whitelisted-isrc-for-user"),
            s;
        s = n.exports = r.extend({
            model: i,
            url: "/_api/content_ingestion/whitelisted_isrcs_for_users"
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/whitelisted-isrcs"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["whitelisted-isrcs"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, '<div class="l-header header">\n\n  <div class="header-tools">\n    <button class="sc-button sc-button-small sc-button-add show-form">\n      Add entry\n    </button>\n\n    <button class="sc-button sc-button-small sc-button-caret hide-form" style="display: none;">\n      Close\n    </button>\n  </div>\n\n  <h2>ISRC Whitelist</h2>\n\n  <div class="section drawer">\n    <div class="drawer-liner">\n      <form name="add-whitelisted-isrc-form" action="" class="search-mode">\n        <h3 class="g-type-h1">Allow an ISRC to be upload by a specific SoundCloud account</h3>\n        <div class="two-column-form sc-clearfix">\n          <div class="two-column-form-left-column">\n            <div class="add-users">\n              <div class="form-input search-mode-input">\n                <a class="secondary-label form-switch" data-form-state="bulk-mode" title="Add multiple permalinks at once">Add multiple accounts</a>\n                <label for="isrc-search-user" title="Enter a permalink or URL">Account to add</label>\n                <input type="text" name="isrc-search-user" value="" id="isrc-search-user" placeholder="Username or URL" autocorrect="off" autocapitalize="off" />\n              </div>\n\n              <div class="form-input bulk-mode-input">\n                <a class="secondary-label form-switch" data-form-state="search-mode">Add single account</a>\n                <label for="arms-user-batch" title="Please enter one or more URLs, e.g. http://soundcloud.com/usertowhitelist">Add URLs</label>\n                <textarea name="arms-user-batch" id="arms-user-batch" placeholder="http://soundcloud.com/usertowhitelist" autocorrect="off" autocapitalize="off"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class="two-column-form-right-column">\n            <div class="form-input">\n              <label for="isrc" title="Enter a valid IRC">ISRC</label>\n              <input type="text" name="isrc" id="isrc" required  autocorrect="off" autocapitalize="off"/>\n              <label for="isrc" class="error" style="display:none">You must provide a valid ISRC.</label>\n            </div>\n          </div>\n        </div>\n        <div class="submit-wrapper">\n          <div class="sc-button-toolbar">\n            <a class="sc-button sc-button-large sc-button-text cancel" title="Cancel">Cancel</a>\n            <input type="submit" class="sc-button sc-button-large" value="Add Entry" disabled>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div> <!-- /header -->\n\n<div class="section list table-container">\n  <table class="list-items">\n    <tbody class="errors"></tbody>\n    <tbody class="whitelisted-isrcs-list"></tbody>\n  </table>\n</div>\n';
            }), this.HandlebarsTemplates["whitelisted-isrcs"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/whitelisted-isrcs-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["whitelisted-isrcs-item"] = Handlebars.template(function(e, t, n, r, i) {
                function c(e, t) {
                    var r = "",
                        i;
                    return r += "\n    ", (i = n.user) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.user, i = typeof i === u ? i.apply(e) : i), r += a(i) + "\n  ", r;
                }

                function h(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <a href="', (i = n.user_permalink) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.user_permalink, i = typeof i === u ? i.apply(e) : i), r += a(i) + '" target="blank">', (i = n.user) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.user, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n  ", r;
                }

                function p(e, t) {
                    var r = "",
                        i, s;
                    return r += '\n  <td class="created_at">\n    <span class="data-label">since</span>\n    ', s = {
                        hash: {},
                        data: t
                    }, r += a((i = n.formatDate, i ? i.call(e, e.created_at, "MMMM DD YYYY hh:mm", s) : f.call(e, "formatDate", e.created_at, "MMMM DD YYYY hh:mm", s))) + '\n  </td>\n  <td class="actions last">\n    <a class="perhaps-remove sc-button sc-button-small">Revoke</a>\n  </td>\n', r;
                }

                function d(e, t) {
                    return '\n  <td colspan="2" class="actions last">\n    <label class="warning">\n      Please confirm\n    </label>\n    <span class="keep-together">\n      <a class="confirm-remove sc-button sc-button-small">Yes, revoke</a>\n      <a class="cancel-remove sc-button sc-button-small sc-button-text cancel">Cancel</a>\n    </span>\n  </td>\n';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = n.helperMissing,
                    l = this;
                s += '<td class="user">\n  ', o = n["if"].call(t, t.deleted, {
                    hash: {},
                    inverse: l.program(3, h, i),
                    fn: l.program(1, c, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += '\n</td>\n<td class="isrc">\n  <span class="data-label">can upload</span>\n  ', (o = n.isrc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.isrc, o = typeof o === u ? o.apply(t) : o), s += a(o) + "\n</td>\n", o = n.unless.call(t, t.confirmRemove, {
                    hash: {},
                    inverse: l.program(7, d, i),
                    fn: l.program(5, p, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += "\n", s;
            }), this.HandlebarsTemplates["whitelisted-isrcs-item"];
        }.call(this);
    }.call(this), define("views/content-management/whitelisted-isrcs-view", ["require", "exports", "module", "lib/sc", "vendor/underscore", "lib/list-view", "lib/view", "models/whitelisted-isrc-for-user", "collections/whitelisted-isrcs-for-user", "lib/views/mixins/list-header", "lib/views/mixins/list-errors", "lib/views/mixins/drawer", "lib/views/mixins/action-buttons", "lib/views/mixins/form", "views/add-users-view"], function(e, t, n) {
        var r = e("lib/sc"),
            i = e("vendor/underscore"),
            s = e("lib/list-view"),
            o = e("lib/view"),
            u = e("models/whitelisted-isrc-for-user"),
            a = e("collections/whitelisted-isrcs-for-user"),
            f = e("lib/views/mixins/list-header"),
            l = e("lib/views/mixins/list-errors"),
            c = e("lib/views/mixins/drawer"),
            h = e("lib/views/mixins/action-buttons"),
            p = e("lib/views/mixins/form"),
            d = e("views/add-users-view"),
            v;
        v = n.exports = s.extend({
            mixins: [f, c, h, p, l],
            tableContainer: ".table-container",
            className: "whitelisted-isrcs",
            template: JST["templates/whitelisted-isrcs"],
            collection: a,
            renderDecorate: function() {
                this.addUsers = new d({
                    el: this.$(".add-users")
                }), this.addUsers.on("change:mode", this.updateDrawerHeight, this);
            },
            getFormData: function() {
                function e(e) {
                    return e = e.toUpperCase().replace(/[^0-9A-Z]/g, ""), e.match("^[A-Z]{2}[0-9A-Z]{3}[0-9]{7}$") !== null;
                }
                var t = this.$('[name="isrc"]'),
                    n = this.$("[for=isrc].error"),
                    s = this.addUsers.val();
                if (!s.length) return;
                n.hide();
                var o = t.val();
                if (!o.length || !e(o)) {
                    n.show();
                    return;
                }
                return i.map(s, function(e) {
                    return {
                        permalink_url: r.ensureUrl(e),
                        isrc: o
                    };
                }, this);
            },
            request: function(e) {
                var t = new u(e);
                return t.save().done(function() {
                    this.collection.add(t.toJSON(), {
                        at: 0
                    });
                }.bind(this));
            },
            getErrorMessage: function(e, t) {
                var n = {
                    422: "Invalid ISRC",
                    404: "User not found",
                    409: "This ISRC is already allowed for this account"
                };
                return {
                    key: e.permalink_url,
                    text: n[t.status]
                };
            },
            emptyTemplate: function() {
                return '<tr class="list-item"><td><div class="more-loading">No entries. Click “Add entry” to allow an ISRC to be upload by a specific SoundCloud account.</div></td></tr>';
            },
            itemView: o.extend({
                tagName: "tr",
                className: "list-item",
                template: JST["templates/whitelisted-isrcs-item"],
                events: {
                    "click a.cancel-remove": "cancelRemove",
                    "click a.confirm-remove": "remove",
                    "click a.perhaps-remove": "showConfirmRemove"
                },
                setup: function() {
                    this.model.bind("change:confirmRemove", this.render.bind(this));
                },
                showConfirmRemove: function() {
                    this.model.set({
                        confirmRemove: !0
                    });
                },
                cancelRemove: function() {
                    this.model.set({
                        confirmRemove: !1
                    });
                },
                remove: function() {
                    this.model.destroy();
                }
            })
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/stats-reports"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["stats-reports"] = Handlebars.template(function(e, t, n, r, i) {
                function c(e, t) {
                    return "active";
                }

                function h(e, t) {
                    return '\n    <div class="stats-reports-help">\n      <p>\n        Operational reports enable you to view the content you have uploaded to\n        the platform.<br>\n        These reports are updated daily - download your report, unzip it and add\n        .csv to the end of the file.\n      </p>\n      <ul>\n        <li>To find out what content is playable but not monetized, filter\n          the desired_us_policy column for ALLOW. To find out what content is\n          monetized, filter this column for MONETIZE.\n      </ul>\n    </div>\n  ';
                }

                function p(e, t) {
                    return '\n    <p class="stats-reports-help">\n      Financial reports detail the revenue earned from your monetized tracks,\n      these are updated monthly.\n    </p>\n  ';
                }

                function d(e, t) {
                    return '\n    <div class="stats-reports-help">\n      <p>\n        Monthly reports detail the performance of public content on your\n        whitelisted accounts and all content on your managed accounts. They\n        display the following, per account:\n      </p>\n      <ul>\n        <li>How many followers are gained, per territory per day.\n        <li>How many new accounts are being followed by your whitelisted/managed account\n        <li>Track performance per day/source/territory: playcounts, likes, downloads, reposts, comments\n      </ul>\n    </div>\n  ';
                }

                function v(e, t) {
                    var r = "",
                        i;
                    return r += '\n        <tr class="list-item">\n          <td>\n            <a href="', (i = n.url) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.url, i = typeof i === a ? i.apply(e) : i), r += f(i) + '" target="_blank">', (i = n.name) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.name, i = typeof i === a ? i.apply(e) : i), r += f(i) + "</a>\n          </td>\n        </tr>\n      ", r;
                }

                function m(e, t) {
                    var n = "",
                        r;
                    return n += '\n        <tr class="list-item">\n          <td>\n            <div class="more-loading">No ' + f((r = (r = e._options, r == null || r === !1 ? r : r.kind), typeof r === a ? r.apply(e) : r)) + " reports to display.</div>\n          </td>\n        </tr>\n      ", n;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression,
                    l = this;
                s += '<div class="l-header header">\n\n  <h2>Stats Reports</h2>\n\n  <ul class="nav-tabs">\n    <li class="', u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.operational), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(1, c, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '"><a href="#/stats-reports/operational" class="sc-link-light">Operational reports</a></li>\n    <li class="', u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.financial), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(1, c, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '"><a href="#/stats-reports/financial" class="sc-link-light">Financial reports</a></li>\n    <li class="', u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.performance), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(1, c, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '"><a href="#/stats-reports/performance" class="sc-link-light">Monthly performance reports</a></li>\n    <li class="', u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.other), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(1, c, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '"><a href="#/stats-reports/other" class="sc-link-light">Other reports</a></li>\n  </ul>\n\n</div> <!-- /header -->\n\n<div class="section list">\n  ', u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.operational), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(3, h, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += "\n  ", u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.financial), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(5, p, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += "\n  ", u = n["if"].call(t, (o = t.tabs, o == null || o === !1 ? o : o.performance), {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(7, d, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '\n  <table class="list-items">\n    <tbody>\n      ', u = n.each.call(t, t.statsReports, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(9, v, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += "\n      ", u = n.unless.call(t, t.statsReports, {
                    hash: {},
                    inverse: l.noop,
                    fn: l.program(11, m, i),
                    data: i
                });
                if (u || u === 0) s += u;
                return s += "\n    </tbody>\n  </table>\n</div> <!-- /section -->\n", s;
            }), this.HandlebarsTemplates["stats-reports"];
        }.call(this);
    }.call(this), define("views/stats-reports-view", ["require", "exports", "module", "vendor/underscore", "lib/view", "lib/model", "lib/collection", "lib/views/mixins/list-header"], function(e, t, n) {
        function l(e) {
            return i.sortBy(e, function(e) {
                return e.name;
            }).reverse();
        }

        function c(e, t) {
            function r(e) {
                return i.every(n, function(t) {
                    return !t.test(e);
                });
            }
            var n = {
                performance: /performance|stats/,
                financial: /OnSoundCloud/,
                operational: /operational/
            };
            return e.filter(function(e) {
                var i = n[t];
                return i ? i.test(e.name) : r(e.name);
            });
        }
        var r, i = e("vendor/underscore"),
            s = e("lib/view"),
            o = e("lib/model"),
            u = e("lib/collection"),
            a = e("lib/views/mixins/list-header"),
            f = ["operational", "financial", "performance", "other"];
        r = n.exports = s.extend({
            mixins: [a],
            className: "stats-reports has-toolbar",
            loadingTemplate: function() {
                return '<div class="more-loading">Loading ' + this.options.kind + " reports ...</div>";
            },
            template: JST["templates/stats-reports"],
            emptyTemplate: JST["templates/stats-reports"],
            defaults: {
                kind: "operational"
            },
            collection: u.extend({
                model: o.extend(),
                url: "/reports"
            }),
            getTemplateData: function(e) {
                var t = this.options.kind,
                    n = f.reduce(function(e, n) {
                        return e[n] = n === t, e;
                    }.bind(), {});
                return {
                    tabs: n,
                    statsReports: l(this.options.kind ? c(e, this.options.kind) : e)
                };
            }
        });
    }), define("lib/high-value-references/uploader", ["require", "exports", "module"], function(e, t, n) {
        function r(e, t) {
            var n = new XMLHttpRequest,
                r = $.Deferred();
            return n.addEventListener("error", function() {
                r.reject("Error uploading sound file");
            }), n.addEventListener("load", function(e) {
                e.target.status == 200 ? (r.notify("Activating reference"), i(t.get("urn")).then(r.resolve.bind(r), function() {
                    r.reject("Error activating reference");
                }, r.notify.bind(r))) : r.reject("Error uploading sound file: " + e.target.status);
            }), n.upload.addEventListener("progress", function(e) {
                var t = parseInt(e.loaded / e.total * 100);
                r.notify("Uploading sound file: " + t + "%");
            }), n.open("PUT", t.get("temporary_upload_url")), n.setRequestHeader("Content-Type", "application/octet-stream"), n.setRequestHeader("x-amz-server-side-encryption", "AES256"), r.notify("Uploading sound file..."), n.send(e), r;
        }

        function i(e) {
            return $.ajax({
                url: "/high_value_references/" + encodeURIComponent(e) + "/activate",
                type: "PUT"
            });
        }
        n.exports = function(t) {
            var n = t.get("audio_file"),
                i = $.Deferred();
            return i.notify("Creating track..."), t.save(null, {
                success: function(e) {
                    r(n, e).then(i.resolve.bind(i), i.reject.bind(i), i.notify.bind(i));
                },
                error: function() {
                    i.reject("Error creating reference");
                }
            }), i;
        };
    }), define("lib/utils/string-utils", ["require", "exports", "module"], function(e, t, n) {
        n.exports = {
            isBlank: function(e) {
                return !e || /^\s*$/.test(e);
            },
            safeTrim: function(e) {
                return e && e.trim();
            }
        };
    }), define("models/high-value-reference", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r, i = e("lib/model");
        r = n.exports = i.extend({
            idAttribute: "urn",
            urlRoot: "/high_value_references",
            save: function(e, t) {
                var n = $.extend(t, {
                    sendAsJson: !0
                });
                this.get("audio_file") && (this.set("file_name", this.get("audio_file").name, {
                    silent: !0
                }), this.unset("audio_file", {
                    silent: !0
                })), i.prototype.save.call(this, e, n);
            },
            softDelete: function() {
                return $.ajax({
                    url: "/high_value_references/" + encodeURIComponent(this.get("urn")),
                    type: "DELETE",
                    success: function() {
                        this.set({
                            confirmRemove: !1,
                            state: "deleted"
                        });
                    }.bind(this),
                    error: function() {
                        this.set({
                            confirmRemove: !1
                        });
                    }.bind(this)
                });
            }
        }, {
            hashFn: function(e) {
                return e && e.urn || null;
            }
        });
    }), define("collections/high-value-references", ["require", "exports", "module", "lib/collection", "lib/mixins/paged-collection", "lib/utils/string-utils", "lib/url", "models/high-value-reference"], function(e, t, n) {
        var r = e("lib/collection"),
            i = e("lib/mixins/paged-collection"),
            s = e("lib/utils/string-utils"),
            o = e("lib/url"),
            u = e("models/high-value-reference"),
            a, f = Class.extend({
                initialize: function(e, t) {
                    this.field = e, this.order = t;
                },
                toParams: function() {
                    return {
                        sort: this.order == f.Descending ? "-" + this.field : this.field
                    };
                },
                invertOrder: function() {
                    var e = this.order == f.Descending ? f.Ascending : f.Descending;
                    return new f(this.field, e);
                }
            });
        f.Ascending = "ASC", f.Descending = "DESC", a = n.exports = r.extend({
            mixins: [i],
            model: u,
            defaults: {
                limit: 20,
                offset: 0
            },
            includeArchived: !1,
            searchItem: {
                "show-archived": this.includeArchived
            },
            sortItem: new f("created_at", f.Descending),
            url: function() {
                return o.stringify({
                    path: "/high_value_references",
                    query: $.extend(this.searchItem, this.sortItem.toParams())
                });
            },
            countUrl: function() {
                return o.stringify({
                    path: "/high_value_references_count",
                    query: this.searchItem
                });
            },
            parse: function(e) {
                return e.high_value_references;
            },
            search: function(e, t) {
                this.options.offset = 0;
                if (s.isBlank(e) || s.isBlank(t)) this.searchItem = {};
                else {
                    var n = {};
                    n[e] = t, this.searchItem = n;
                }
                return $.extend(this.searchItem, {
                    "show-archived": this.includeArchived
                }), this.fetch(), this.searchItem;
            },
            sort: function(e) {
                return this.sortItem.field == e ? this.sortItem = this.sortItem.invertOrder() : this.sortItem = new f(e, f.Descending), this.fetch(), this.sortItem;
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/high-value-references-item"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["high-value-references-item"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    var r = "",
                        i;
                    return r += "\n    ", (i = n.label) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.label, i = typeof i === f ? i.apply(e) : i), r += l(i) + "\n  ", r;
                }

                function d(e, t) {
                    return '\n    <span class="data-label">-</span>\n  ';
                }

                function v(e, t) {
                    var r = "",
                        i, s, o;
                    r += '\n  <td class="expire_at">\n    ', i = n["if"].call(e, e.expire_at, {
                        hash: {},
                        inverse: h.noop,
                        fn: h.program(6, m, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    r += "\n    ", i = n.unless.call(e, e.expire_at, {
                        hash: {},
                        inverse: h.noop,
                        fn: h.program(8, g, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    r += "\n  </td>\n  ", o = {
                        hash: {},
                        inverse: h.program(12, b, t),
                        fn: h.program(10, y, t),
                        data: t
                    }, s = (i = n.equals, i ? i.call(e, e.state, "active", o) : c.call(e, "equals", e.state, "active", o));
                    if (s || s === 0) r += s;
                    return r += "\n", r;
                }

                function m(e, t) {
                    var r = "",
                        i, s;
                    return r += "\n      ", s = {
                        hash: {},
                        data: t
                    }, r += l((i = n.formatDateInUtc, i ? i.call(e, e.expire_at, "MMMM DD YYYY Z", s) : c.call(e, "formatDateInUtc", e.expire_at, "MMMM DD YYYY Z", s))) + "\n    ", r;
                }

                function g(e, t) {
                    return '\n      <span class="data-label">-</span>\n    ';
                }

                function y(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <td class="actions last">\n      <a class="sc-button sc-button-small" href="/#/high-value-references/', (i = n.urn) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.urn, i = typeof i === f ? i.apply(e) : i), r += l(i) + '">Edit</a>\n      <a class="perhaps-remove sc-button sc-button-small">Remove</a>\n    </td>\n    ', r;
                }

                function b(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <td class="last">\n      <span class="archived-ref-state">', (i = n.state) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.state, i = typeof i === f ? i.apply(e) : i), r += l(i) + "</span>\n    </td>\n  ", r;
                }

                function w(e, t) {
                    return '\n  <td colspan="2" class="actions last">\n    <label class="warning">\n      Please confirm\n    </label>\n    <span class="keep-together">\n      <a class="confirm-remove sc-button sc-button-small">Yes, remove</a>\n      <a class="cancel-remove sc-button sc-button-small sc-button-text cancel">Cancel</a>\n    </span>\n  </td>\n';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = n.helperMissing,
                    h = this;
                s += '<td class="isrc">\n  ', (o = n.isrc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.isrc, o = typeof o === f ? o.apply(t) : o), s += l(o) + '\n</td>\n<td class="artist">\n  ', (o = n.artist) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.artist, o = typeof o === f ? o.apply(t) : o), s += l(o) + '\n</td>\n<td class="title">\n  ', (o = n.title) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.title, o = typeof o === f ? o.apply(t) : o), s += l(o) + '\n</td>\n<td class="label">\n  ', o = n["if"].call(t, t.label, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(1, p, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += "\n  ", o = n.unless.call(t, t.label, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(3, d, i),
                    data: i
                });
                if (o || o === 0) s += o;
                s += '\n</td>\n<td class="created_at">\n  ', a = {
                    hash: {},
                    data: i
                }, s += l((o = n.formatDateInUtc, o ? o.call(t, t.created_at, "MMMM DD YYYY hh:mm Z", a) : c.call(t, "formatDateInUtc", t.created_at, "MMMM DD YYYY hh:mm Z", a))) + '\n</td>\n<td class="updated_at">\n  ', a = {
                    hash: {},
                    data: i
                }, s += l((o = n.formatDateInUtc, o ? o.call(t, t.updated_at, "MMMM DD YYYY hh:mm Z", a) : c.call(t, "formatDateInUtc", t.updated_at, "MMMM DD YYYY hh:mm Z", a))) + "\n</td>\n", u = n.unless.call(t, t.confirmRemove, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(5, v, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += "\n", u = n["if"].call(t, t.confirmRemove, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(14, w, i),
                    data: i
                });
                if (u || u === 0) s += u;
                return s += "\n", s;
            }), this.HandlebarsTemplates["high-value-references-item"];
        }.call(this);
    }.call(this), define("views/high-value-references-item-view", ["require", "exports", "module", "lib/view"], function(e, t, n) {
        var r = e("lib/view");
        n.exports = r.extend({
            tagName: "tr",
            className: "list-item",
            template: JST["templates/high-value-references-item"],
            observableAttributes: ["artist", "title", "label", "expire_at"],
            events: {
                "click .cancel-remove": "cancelRemove",
                "click .confirm-remove": "remove",
                "click .perhaps-remove": "showConfirmRemove"
            },
            setup: function() {
                this.model.on("change:confirmRemove", this.render.bind(this));
            },
            showConfirmRemove: function() {
                this.model.set({
                    confirmRemove: !0
                });
            },
            cancelRemove: function() {
                this.model.set({
                    confirmRemove: !1
                });
            },
            remove: function() {
                this.model.softDelete();
            }
        });
    }), define("validators/high-value-reference-validator", ["require", "exports", "module", "lib/utils/string-utils"], function(e, t, n) {
        function s(e) {
            return {
                name: e,
                message: "can not be blank"
            };
        }

        function o(e) {
            return {
                name: e,
                message: "can not contain emojis"
            };
        }

        function u(e) {
            return /([\uD800-\uDBFF][\uDC00-\uDFFF])/g.test(e);
        }

        function a(e) {
            return !e || !e.files || e.files.length === 0 ? [s("audio-file")] : [];
        }

        function l(e) {
            return i.isBlank(e) ? [s("isrc")] : f.test(e) ? [] : [{
                name: "isrc",
                message: "is invalid"
            }];
        }

        function c(e) {
            return i.isBlank(e) ? [s("artist")] : u(e) ? [o("artist")] : [];
        }

        function h(e) {
            return i.isBlank(e) ? [s("title")] : u(e) ? [o("title")] : [];
        }

        function p(e) {
            var t = moment.utc(e, "YYYY-MM-DD");
            return i.isBlank(e) ? s("expire-at-date") : t <= moment.utc() ? [{
                name: "expire-at-date",
                message: "is in the past"
            }] : [];
        }

        function d(e) {
            var t = f.exec(e);
            return i.safeTrim(t[1] + t[2] + t[3] + t[4]).toUpperCase();
        }
        var r, i = e("lib/utils/string-utils"),
            f = /([A-Z]{2})\W*([A-Z0-9]{3})\W*([0-9]{2})\W*([0-9]{5})/i;
        r = n.exports = {
            validateUpdate: function(e) {
                var t = [].concat(c(e.artist), h(e.title), p(e.expireAtDate));
                if (t.length === 0) {
                    var n = {};
                    return n.artist = i.safeTrim(e.artist), n.title = i.safeTrim(e.title), n.label = i.isBlank(e.label) ? null : i.safeTrim(e.label), n.expire_at = moment.utc(e.expireAtDate).format("YYYY-MM-DD[T]HH:mm:ss.SSSZ"), n.allow_derivatives = e.allowDerivatives, {
                        isSuccess: !0,
                        attributes: n
                    };
                }
                return {
                    isSuccess: !1,
                    errors: t
                };
            },
            validateCreate: function(e) {
                var t = [].concat(a(e.audioFile), l(e.isrc), c(e.artist), h(e.title), p(e.expireAtDate));
                if (t.length === 0) {
                    var n = {};
                    return n.audio_file = e.audioFile.files[0], n.isrc = d(e.isrc), n.artist = i.safeTrim(e.artist), n.title = i.safeTrim(e.title), n.label = i.safeTrim(e.label), n.expire_at = moment.utc(e.expireAtDate).format("YYYY-MM-DD[T]HH:mm:ss.SSSZ"), n.allow_derivatives = e.allowDerivatives, {
                        isSuccess: !0,
                        attributes: n
                    };
                }
                return {
                    isSuccess: !1,
                    errors: t
                };
            }
        };
    }), define("validators/high-value-reference-error-parser", ["require", "exports", "module"], function(e, t, n) {
        var r;
        r = n.exports = {
            toErrorMessage: function(e) {
                try {
                    var t = JSON.parse(e).errors[0].code;
                    return {
                        key: "",
                        text: t
                    };
                } catch (n) {
                    return {
                        key: "unknown.error",
                        text: e
                    };
                }
            }
        };
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/high-value-references"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["high-value-references"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "";
                return s += '<div class="l-header header">\n  <h2>Priority Content Protection</h2>\n\n  <div>\n    <div class="reference-search">\n        <div class="reference-search-value-container">\n          <input name="search-value" type="text" class="sc-input search-value" placeholder="Find references" autocorrect="off" autocapitalize="off">\n        </div>\n        <div class="reference-search-field-container">\n          <select name="search-field" class="search-field">\n            <option value="artist">Artist</option>\n            <option value="title">Title</option>\n            <option value="isrc">ISRC</option>\n          </select>\n        </div>\n        <div class="reference-search-button-container">\n          <button class="sc-button sc-button-middle search-button">Search</button>\n        </div>\n    </div>\n    <div class="reference-list-controls">\n      <div class="reference-show-archived">\n        <input id="show-archived" type="checkbox" class="show-archived"/>\n        <label for="show-archived">Show archived</label>\n      </div>\n      <div class="pager reference-pager">\n        \n      </div>\n      <div>\n        <button class="sc-button sc-button-add show-form">\n          + Add reference\n        </button>\n\n        <button class="sc-button sc-button-caret hide-form">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class="section drawer">\n    <div class="drawer-liner">\n      <form>\n        <h3 class="g-type-h1">Add a new reference</h3>\n        <div class="section">\n          <div class="two-column-form sc-clearfix">\n            <div class="two-column-form-left-column">\n              <div class="form-input">\n                <label for="audio" class="reference-label">Reference <span name="audio-file-error" class="inline-error"></span></label>\n                <input tabindex="1" type="file" name="audio-file"/>\n              </div>\n            </div>\n            <div class="two-column-form-right-column">\n              <div class="form-input">\n                <label for="isrc" class="reference-label">ISRC <span name="isrc-error" class="inline-error"></span></label>\n                <input tabindex="2" type="text" name="isrc"/>\n              </div>\n            </div>\n          </div>\n          <div class="two-column-form sc-clearfix">\n            <div class="two-column-form-left-column">\n              <div class="form-input">\n                <label for="artist" class="reference-label">Artist <span name="artist-error" class="inline-error"></span></label>\n                <input tabindex="3" type="text" name="artist" maxlength="255"/>\n              </div>\n            </div>\n            <div class="two-column-form-right-column">\n              <div class="form-input">\n                <label for="title" class="reference-label">Title <span name="title-error" class="inline-error"></span></label>\n                <input tabindex="4" type="text" name="title" maxlength="255"/>\n              </div>\n            </div>\n          </div>\n          <div class="two-column-form sc-clearfix">\n            <div class="two-column-form-left-column">\n              <div class="form-input">\n                <label for="label" class="reference-label">Label</label>\n                <input tabindex="5" type="text" name="label" maxlength="255"/>\n              </div>\n            </div>\n            <div class="two-column-form-right-column">\n              <div class="form-input">\n                <label for="expire-at-date" class="reference-label">Expire At (UTC) <span name="expire-at-date-error" class="inline-error"></span></label>\n                <div class="reference-date-container">\n                  <input tabindex="6" type="date" name="expire-at-date"/>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="two-column-form sc-clearfix">\n            <div class="two-column-form-left-column">&nbsp;</div>\n            <div class="two-column-form-right-column">\n              <div class="submit-wrapper">\n                <div class="sc-button-toolbar">\n                  <a class="sc-button sc-button-large sc-button-text cancel" title="Back">Back</a>\n                  <input tabindex="8" name="add-reference" type="submit" class="sc-button sc-button-large" data-busy-message="Uploading..." value="Add reference"/>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class="section list table-container references-list">\n  <table class="list-items reference-items">\n    <thead>\n      <tr>\n        <th class="reference-header" data-field="isrc">ISRC</th>\n        <th class="reference-header" data-field="artist">Artist</th>\n        <th class="reference-header" data-field="title">Title</th>\n        <th>Label</th>\n        <th class="reference-header reference-sort-desc" data-field="created_at">Created At</th>\n        <th class="reference-header" data-field="updated_at">Updated At</th>\n        <th class="reference-header" data-field="expire_at">Expire At</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody class="errors"></tbody>\n    <tbody class="high-value-references-list"></tbody>\n  </table>\n</div>\n', s;
            }), this.HandlebarsTemplates["high-value-references"];
        }.call(this);
    }.call(this), define("views/high-value-references-view", ["require", "exports", "module", "lib/list-view", "lib/views/mixins/list-header", "lib/views/mixins/list-errors", "lib/views/mixins/drawer", "lib/views/mixins/action-buttons", "lib/views/mixins/form", "lib/views/mixins/list-pager", "lib/high-value-references/uploader", "collections/high-value-references", "views/high-value-references-item-view", "models/high-value-reference", "validators/high-value-reference-validator", "validators/high-value-reference-error-parser", "app"], function(e, t, n) {
        var r = e("lib/list-view"),
            i = e("lib/views/mixins/list-header"),
            s = e("lib/views/mixins/list-errors"),
            o = e("lib/views/mixins/drawer"),
            u = e("lib/views/mixins/action-buttons"),
            a = e("lib/views/mixins/form"),
            f = e("lib/views/mixins/list-pager"),
            l = e("lib/high-value-references/uploader"),
            c = e("collections/high-value-references"),
            h = e("views/high-value-references-item-view"),
            p = e("models/high-value-reference"),
            d = e("validators/high-value-reference-validator"),
            v = e("validators/high-value-reference-error-parser"),
            m = e("app"),
            g;
        g = n.exports = r.extend({
            mixins: [i, o, u, a, s, f],
            tableContainer: ".table-container",
            className: "high-value-references",
            template: JST["templates/high-value-references"],
            collection: c,
            itemView: h,
            pagerOptions: {
                type: "references",
                prev: "Prev",
                next: "Next"
            },
            element2selector: {
                "search-field": ".search-field",
                "search-value": ".search-value",
                "show-archived": "#show-archived",
                "audio-file": "[name=audio-file]",
                "audio-file-error": "[name=audio-file-error]",
                isrc: "[name=isrc]",
                "isrc-error": "[name=isrc-error]",
                artist: "[name=artist]",
                "artist-error": "[name=artist-error]",
                title: "[name=title]",
                "title-error": "[name=title-error]",
                label: "[name=label]",
                "expire-at-date": "[name=expire-at-date]",
                "expire-at-date-error": "[name=expire-at-date-error]",
                "allow-derivatives": "[name=allow-derivatives]"
            },
            emptyTemplate: function() {
                return '<tr class="list-item"><td colspan="7"><div class="more-loading">No entries.</div></td></tr>';
            },
            events: {
                "click .search-button": "search",
                "keyup .search-value": function(e) {
                    e.keyCode == 13 && this.search(e);
                },
                "click .reference-header": "sort",
                "click #show-archived": "refreshAfterShowArchivedToggle"
            },
            loadingTemplate: function() {
                return '<div class="more-loading">Loading tracks...</div>';
            },
            showArchived: function() {
                return this.getElement("show-archived").is(":checked");
            },
            refreshAfterShowArchivedToggle: function() {
                this.collection.includeArchived = this.showArchived(), this.search();
            },
            search: function() {
                var e = this.getElement("search-field").val(),
                    t = this.getElement("search-value").val();
                this.collection.search(e, t), this.updatePager();
            },
            clearSearch: function() {
                this.collection.search("", ""), this.updatePager();
            },
            SortAscClass: "reference-sort-asc",
            SortDescClass: "reference-sort-desc",
            sort: function(e) {
                var t = $(e.target),
                    n = t.data("field");
                this.removeCurrentSortClass();
                var r = this.collection.sort(n),
                    i = this.sortClassFrom(r.order);
                t.addClass(i);
            },
            sortClassFrom: function(e) {
                return e === "DESC" ? this.SortDescClass : this.SortAscClass;
            },
            removeCurrentSortClass: function() {
                var e = this.$("." + this.SortDescClass);
                e.length === 0 && (e = this.$("." + this.SortAscClass)), e.removeClass(this.SortDescClass).removeClass(this.SortAscClass);
            },
            getFormData: function() {
                var e = d.validateCreate({
                    audioFile: this.getElement("audio-file")[0],
                    isrc: this.getElement("isrc").val(),
                    artist: this.getElement("artist").val(),
                    title: this.getElement("title").val(),
                    label: this.getElement("label").val(),
                    expireAtDate: this.getElement("expire-at-date").val(),
                    allowDerivatives: !0
                });
                this.clearErrors();
                if (e.isSuccess) return [e.attributes];
                e.errors.forEach(function(e) {
                    this.getElement(e.name).addClass("invalid"), this.getElement(e.name + "-error").text(e.message);
                }, this);
                return;
            },
            request: function(e) {
                var t = new p(e);
                return l(t).then(this.onUploadSuccess.bind(this, t), this.onUploadError.bind(this), function(e) {
                    m.Router.notification.show(e, {
                        severity: "in-progress"
                    });
                });
            },
            onUploadSuccess: function(e) {
                m.Router.notification.show("Reference successfully created", {
                    severity: "accepted",
                    hide: 5e3
                }), this.collection.add(e, {
                    at: 0
                }), this.clearSearch(), this.closeDrawer(), this.resetForm();
            },
            onUploadError: function(e) {
                m.Router.notification.show(e, {
                    severity: "error"
                }), $("input[name='add-track']").removeAttr("disabled").css("min-width", "").html("Add reference");
            },
            getErrorMessage: function(e, t) {
                return v.toErrorMessage(t.responseText);
            },
            clearErrors: function() {
                this.getElement("audio-file").removeClass("invalid"), this.getElement("audio-file-error").text(""), this.getElement("isrc").removeClass("invalid"), this.getElement("isrc-error").text(""), this.getElement("artist").removeClass("invalid"), this.getElement("artist-error").text(""), this.getElement("title").removeClass("invalid"), this.getElement("title-error").text(""), this.getElement("label").removeClass("invalid"), this.getElement("expire-at-date").removeClass("invalid"), this.getElement("expire-at-date-error").text("");
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/high-value-reference-detail"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["high-value-reference-detail"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a = "function",
                    f = this.escapeExpression,
                    l = n.helperMissing;
                return s += '<div class="l-header header">\n\n  <h2>\n    Reference ', (o = n.isrc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.isrc, o = typeof o === a ? o.apply(t) : o), s += f(o) + '\n  </h2>\n\n  <div class="shadow"></div>\n</div>\n\n<form>\n  <div class="section">\n    <div class="two-column-form sc-clearfix">\n      <div class="two-column-form-left-column">\n        <div class="form-input">\n          <label class="reference-label">Created By</label>\n          ', (o = n.created_by) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.created_by, o = typeof o === a ? o.apply(t) : o), s += f(o) + '\n        </div>\n      </div>\n      <div class="two-column-form-right-column">\n        <div class="form-input">\n          <label class="reference-label">ISRC</label>\n          ', (o = n.isrc) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.isrc, o = typeof o === a ? o.apply(t) : o), s += f(o) + '\n        </div>\n      </div>\n    </div>\n    <div class="two-column-form sc-clearfix">\n      <div class="two-column-form-left-column">\n        <div class="form-input">\n          <label for="artist" class="reference-label">Artist <span name="artist-error" class="inline-error"></span></label>\n          <input tabindex="1" type="text" name="artist" value="', (o = n.artist) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.artist, o = typeof o === a ? o.apply(t) : o), s += f(o) + '" maxlength="255"/>\n        </div>\n      </div>\n      <div class="two-column-form-right-column">\n        <div class="form-input">\n          <label for="title" class="reference-label">Title <span name="title-error" class="inline-error"></span></label>\n          <input tabindex="2" type="text" name="title" value="', (o = n.title) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.title, o = typeof o === a ? o.apply(t) : o), s += f(o) + '" maxlength="255"/>\n        </div>\n      </div>\n    </div>\n    <div class="two-column-form sc-clearfix">\n      <div class="two-column-form-left-column">\n        <div class="form-input">\n          <label for="label" class="reference-label">Label</label>\n          <input tabindex="3" type="text" name="label" value="', (o = n.label) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.label, o = typeof o === a ? o.apply(t) : o), s += f(o) + '" maxlength="255"/>\n        </div>\n      </div>\n      <div class="two-column-form-right-column">\n        <div class="form-input">\n          <label for="expire-at-date" class="reference-label">Expire At (UTC) <span name="expire-at-date-error" class="inline-error"></span></label>\n          <div class="reference-date-container">\n            <input tabindex="4" type="date" name="expire-at-date" value="', u = {
                    hash: {},
                    data: i
                }, s += f((o = n.formatDate, o ? o.call(t, t.expire_at, "YYYY-MM-DD", u) : l.call(t, "formatDate", t.expire_at, "YYYY-MM-DD", u))) + '"/>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="two-column-form sc-clearfix">\n      <div class="two-column-form-left-column">\n        <div class="form-input">\n          <label class="reference-label">Created at</label>\n          ', u = {
                    hash: {},
                    data: i
                }, s += f((o = n.formatDateInUtc, o ? o.call(t, t.created_at, "MMMM DD YYYY hh:mm Z", u) : l.call(t, "formatDateInUtc", t.created_at, "MMMM DD YYYY hh:mm Z", u))) + '\n        </div>\n      </div>\n      <div class="two-column-form-right-column">\n        <div class="form-input">\n          <label class="reference-label">Updated at</label>\n          ', u = {
                    hash: {},
                    data: i
                }, s += f((o = n.formatDateInUtc, o ? o.call(t, t.updated_at, "MMMM DD YYYY hh:mm Z", u) : l.call(t, "formatDateInUtc", t.updated_at, "MMMM DD YYYY hh:mm Z", u))) + '\n        </div>\n      </div>\n    </div>\n    <div class="two-column-form sc-clearfix">\n      <div class="two-column-form-left-column">&nbsp;</div>\n      <div class="two-column-form-right-column">\n        <div class="form-submit"></div>\n          <div class="submit-wrapper">\n            <div class="sc-button-toolbar">\n              <a href="/#/high-value-references" class="sc-button sc-button-large sc-button-text cancel reference-cancel" title="Back">Back</a>\n              <input type="submit" tabindex="6" class="sc-button sc-button-large reference-save" value="Save" disabled/>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</form>\n', s;
            }), this.HandlebarsTemplates["high-value-reference-detail"];
        }.call(this);
    }.call(this), define("views/high-value-reference-detail-view", ["require", "exports", "module", "lib/view", "models/high-value-reference", "validators/high-value-reference-validator", "app"], function(e, t, n) {
        var r, i = e("lib/view"),
            s = e("models/high-value-reference"),
            o = e("validators/high-value-reference-validator"),
            u = e("app");
        r = n.exports = i.extend({
            className: "high-value-reference detail-view",
            template: JST["templates/high-value-reference-detail"],
            disposeOnLeave: !0,
            element2selector: {
                artist: "[name=artist]",
                "artist-error": "[name=artist-error]",
                title: "[name=title]",
                "title-error": "[name=title-error]",
                label: "[name=label]",
                "expire-at-date": "[name=expire-at-date]",
                "expire-at-date-error": "[name=expire-at-date-error]",
                "allow-derivatives": "[name=allow-derivatives]",
                "save-button": ".reference-save"
            },
            states: {
                init: function() {
                    this.clearErrors();
                },
                dirty: function() {
                    this.clearErrors(), this.getElement("save-button").removeAttr("disabled");
                },
                saving: function() {
                    this.clearErrors(), this.getElement("save-button").attr("disabled");
                }
            },
            events: {
                submit: function(e) {
                    e.preventDefault();
                    var t = o.validateUpdate({
                        artist: this.getElement("artist").val(),
                        title: this.getElement("title").val(),
                        label: this.getElement("label").val(),
                        expireAtDate: this.getElement("expire-at-date").val(),
                        allowDerivatives: this.getElement("allow-derivatives").is(":checked")
                    });
                    t.isSuccess ? (this.toggleSaving(), this.model.save(t.attributes, {
                        sendAsJson: !0
                    }).done(function() {
                        u.Router.notification.show("Track successfully updated", {
                            severity: "accepted",
                            hide: 5e3
                        }), u.Router.navigate("#/high-value-references");
                    })) : t.errors.forEach(function(e) {
                        this.getElement(e.name).addClass("invalid"), this.getElement(e.name + "-error").text(e.message);
                    }.bind(this));
                },
                "input input": function() {
                    this.clearStates(), this.toggleDirty();
                },
                "click input[type=checkbox]": function() {
                    this.clearStates(), this.toggleDirty();
                },
                "click a": function(e) {
                    this.getState("dirty") && !window.confirm("You have unsaved changes. Are you sure you want to leave?") && e.preventDefault();
                }
            },
            errorTemplate: {
                "404": function(e) {
                    return '<div class="error-notice">Track ' + e.urn + " does not exist</div>";
                }
            },
            setup: function(e) {
                this.model = new s({
                    urn: e.resource_id
                }), this.model.on("change", this.render, this), this.model.on("sync", this.toggleInit, this), this.model.fetch();
            },
            clearErrors: function() {
                this.getElement("artist").removeClass("invalid"), this.getElement("artist-error").text(""), this.getElement("title").removeClass("invalid"), this.getElement("title-error").text(""), this.getElement("label").removeClass("invalid"), this.getElement("expire-at-date").removeClass("invalid"), this.getElement("expire-at-date-error").text("");
            },
            clearStates: function() {
                this.toggleState("init", !1), this.toggleState("dirty", !1), this.toggleState("saving", !1);
            },
            toggleInit: function() {
                this.toggleState("init", !0), this.toggleState("dirty", !1), this.toggleState("saving", !1);
            },
            toggleDirty: function() {
                this.toggleState("init", !1), this.toggleState("dirty", !0), this.toggleState("saving", !1);
            },
            toggleSaving: function() {
                this.toggleState("init", !1), this.toggleState("dirty", !1), this.toggleState("saving", !0);
            }
        });
    }), define("models/profile-access", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r = e("lib/model"),
            i;
        i = n.exports = r.extend({
            url: "/profiles/access_to",
            generateAccessURL: function(e) {
                var t = this,
                    n = {
                        permalink_url: e
                    },
                    r = {
                        sendAsJson: !0,
                        wait: !0,
                        error: function(n, r) {
                            r.status === 404 && (r.globalError = !1, t.set({
                                permalink_url: e,
                                access_url: null
                            }));
                        }
                    };
                this.save(n, r);
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/profile-edit"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["profile-edit"] = Handlebars.template(function(e, t, n, r, i) {
                function l(e, t) {
                    var r = "",
                        i;
                    return r += '\n    <p>\n      You can log into this profile with the link below. Please open this link in an incognito window.\n    </p>\n    <p>\n      <a href="', (i = n.access_url) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.access_url, i = typeof i === u ? i.apply(e) : i), r += a(i) + '" target="_blank">', (i = n.access_url) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.access_url, i = typeof i === u ? i.apply(e) : i), r += a(i) + "</a>\n    </p>\n  ", r;
                }

                function c(e, t) {
                    var r = "",
                        i;
                    r += "\n    ", i = n["if"].call(e, e.permalink_url, {
                        hash: {},
                        inverse: f.noop,
                        fn: f.program(4, h, t),
                        data: t
                    });
                    if (i || i === 0) r += i;
                    return r += "\n  ", r;
                }

                function h(e, t) {
                    return "\n      <p>This permalink cannot be edited with Deck access. This might be because:</p>\n      <ol>\n        <li>the permalink does not exist\n        <li>the profile was created by the artist or their representative\n        <li>the profile was not created on your behalf\n      </ol>\n    ";
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression,
                    f = this;
                s += '<div class="l-header header">\n  <h2>Edit profile</h2>\n</div>\n\n<form>\n  <div class="search-box">\n    <div class="search-input-container">\n      <input class="sc-input sc-input-large search-input"\n        type="url"\n        placeholder="Search for profile by full url"\n        required\n        name="permalink-url"\n        pattern="https?://soundcloud.com/[^/]+"\n        title="Please enter a valid SoundCloud permalink url, eg. https://soundcloud.com/my-awesome-band"\n        value="', (o = n.permalink_url) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.permalink_url, o = typeof o === u ? o.apply(t) : o), s += a(o) + '">\n      <button class="sc-button sc-button-large search-button" title="Search" type="submit"></button>\n    </div>\n  </div>\n\n  <p>\n    This is a temporary feature and we will be modifying to provide other editing tools in the future.\n  </p>\n\n  ', o = n["if"].call(t, t.access_url, {
                    hash: {},
                    inverse: f.program(3, c, i),
                    fn: f.program(1, l, i),
                    data: i
                });
                if (o || o === 0) s += o;
                return s += "\n</form>\n", s;
            }), this.HandlebarsTemplates["profile-edit"];
        }.call(this);
    }.call(this), define("views/profile-edit-view", ["require", "exports", "module", "lib/view", "models/profile-access"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("models/profile-access"),
            s;
        s = n.exports = r.extend({
            disposeOnLeave: !0,
            className: "profile-edit",
            template: JST["templates/profile-edit"],
            errorTemplate: {
                404: JST["templates/profile-edit"]
            },
            events: {
                submit: "onSubmit"
            },
            element2selector: {
                permalinkUrl: "[name=permalink-url]"
            },
            observableAttributes: ["access_url", "permalink_url"],
            setup: function() {
                this.model = new i;
            },
            onSubmit: function(e) {
                e.preventDefault();
                var t = this.getElement("permalinkUrl").val();
                this.model.generateAccessURL(t);
            },
            hasData: function() {
                return !0;
            },
            getTemplateData: function(e) {
                return e;
            }
        });
    }), define("models/conflict-stats", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r = e("lib/model"),
            i;
        i = n.exports = r.extend({
            resource_type: "conflict_summary",
            urlRoot: "/conflicts/stats_v2"
        }, {
            hashFn: function() {
                return 1;
            }
        });
    }), define("models/conflict-filter", ["require", "exports", "module", "lib/model", "underscore"], function(e, t, n) {
        function f(e) {
            var t = i.assign({}, o[e.filter], i.pick(e, u));
            t.search && !t.sort_by && (t.sort_by = "user_name"), t.sort_by || (t.sort_by = "popularity");
            if (!t.sort_order) switch (t.sort_by) {
                case "popularity":
                case "last_update":
                    t.sort_order = "desc";
                    break;
                case "user_name":
                default:
                    t.sort_order = "asc";
            }
            return t;
        }

        function l(e) {
            var t = u.reduce(function(t, n) {
                return e[n] !== null && n !== "filter" && (t[n] = e[n]), t;
            }, {});
            return t;
        }
        var r = e("lib/model"),
            i = e("underscore"),
            s, o = {
                "from-feed": {
                    conflict_type: "rightsholders_in_conflict",
                    supply_chain_status: "supply_chain",
                    sort_by: "popularity",
                    sort_order: "desc"
                },
                "last-7-days-for-feed": {
                    conflict_type: "rightsholders_in_conflict",
                    supply_chain_status: "supply_chain",
                    age: "last-7-days",
                    has_monetized_territories: !0,
                    sort_by: "updated_at",
                    sort_order: "desc"
                },
                "last-7-days": {
                    age: "last-7-days",
                    has_monetized_territories: !0,
                    supply_chain_status: "manual_upload",
                    conflict_type: "missing_rightsholder",
                    sort_by: "updated_at",
                    sort_order: "desc"
                },
                "top-20-accounts-for-feed": {
                    conflict_type: "rightsholders_in_conflict",
                    supply_chain_status: "supply_chain",
                    ranking: "top_20",
                    has_monetized_territories: !0,
                    sort_by: "popularity",
                    sort_order: "desc"
                },
                "top-20-accounts": {
                    ranking: "top_20",
                    has_monetized_territories: !0,
                    supply_chain_status: "manual_upload",
                    conflict_type: "missing_rightsholder",
                    sort_by: "popularity",
                    sort_order: "desc"
                },
                "has-monetized-territories-for-feed": {
                    conflict_type: "rightsholders_in_conflict",
                    supply_chain_status: "supply_chain",
                    has_monetized_territories: !0,
                    sort_by: "popularity",
                    sort_order: "desc"
                },
                "manual-uploads-unknown-owner": {
                    has_monetized_territories: !0,
                    sort_by: "popularity",
                    sort_order: "desc",
                    conflict_type: "missing_rightsholder",
                    supply_chain_status: "manual_upload"
                },
                "manual-uploads-unknown-owner-all": {
                    sort_by: "popularity",
                    sort_order: "desc",
                    conflict_type: "missing_rightsholder",
                    supply_chain_status: "manual_upload"
                }
            },
            u = ["conflict_type", "age", "ranking", "search", "has_monetized_territories", "supply_chain_status", "sort_by", "sort_order"],
            a = u.reduce(function(e, t) {
                return e[t] = null, e;
            }, {});
        a.filter = null, s = n.exports = r.extend({
            setup: function() {
                this.setFilter(null);
            },
            setFilter: function(e) {
                e = e || {}, this.clearFilter(), this.set(f(e)), this.setSort({
                    sort_by: this.get("sort_by"),
                    sort_order: this.get("sort_order")
                });
            },
            setSort: function(e) {
                this.set(e), this.sortOrderClasses = {}, this.sortOrderClasses[e.sort_by] = "sort-" + e.sort_order, this.trigger("change_sort_order", e);
            },
            clearFilter: function() {
                this.set(a);
            },
            getQueryParameters: function() {
                return l(this.attributes);
            }
        }, {
            hashFn: function() {
                return 1;
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflict-search-input"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflict-search-input"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<input type="text" placeholder="Search by account name, label name, keyword, ISRCs, UPCs" value="', (o = n.search) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.search, o = typeof o === u ? o.apply(t) : o), s += a(o) + '">\n<button class="sc-button sc-button-large search-button" title="Search"></button>\n', s;
            }), this.HandlebarsTemplates["conflict-search-input"];
        }.call(this);
    }.call(this), define("views/conflict-search-input-view", ["require", "exports", "module", "lib/view", "models/conflict-filter"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("models/conflict-filter"),
            s;
        s = n.exports = r.extend({
            disposeOnLeave: !0,
            className: "conflict-search-input",
            template: JST["templates/conflict-search-input"],
            events: {
                "keyup input": "handleSearchKeyUp",
                "click .sc-button": "doSearch"
            },
            setup: function() {
                this.model = new i;
            },
            handleSearchKeyUp: function(e) {
                e.keyCode === 13 && this.doSearch();
            },
            doSearch: function() {
                var e = this.$("input").val();
                this.model.set("search", e || null);
            }
        });
    }), define("views/get-tracks-text-helper", ["require", "exports", "module", "../views/count-helper"], function(e, t, n) {
        function i(e) {
            return r.render(e, {
                useSIUnits: !0
            });
        }

        function s(e) {
            return typeof e == "number" ? e === 1 ? "1 Track" : i(e) + " Tracks" : "";
        }
        var r = e("../views/count-helper");
        n.exports = s;
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflicts-dashboard-feed"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflicts-dashboard-feed"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    return "active";
                }

                function d(e, t) {
                    var r = "",
                        i;
                    return r += '\n<div style="margin-left: 0px">\n  <div class="menu-title spacer">Supply chain tracks</div>\n  <div class="main-menu">\n    <div class="menu-link monetized">\n      <h2 class="sc-text-link"><a href="#/conflicts/has-monetized-territories-for-feed">All Conflicts</a></h2>\n      <p class="track-count sc-text">', (i = n.has_monetized_territories_for_feed) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.has_monetized_territories_for_feed, i = typeof i === f ? i.apply(e) : i), r += l(i) + '</p>\n    </div>\n    <div class="menu-link monetized">\n      <h2 class="sc-text-link"><a href="#/conflicts/last-7-days-for-feed">Conflicts Triggered in Last 7 Days</a></h2>\n      <p class="track-count sc-text">', (i = n.last_7_days_for_feed) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.last_7_days_for_feed, i = typeof i === f ? i.apply(e) : i), r += l(i) + '</p>\n    </div>\n    <div class="menu-link monetized">\n      <h2 class="sc-text-link"><a href="#/conflicts/top-20-accounts-for-feed">Conflicts in Top 20 Monetized Accounts</a></h2>\n      <p class="track-count sc-text">', (i = n.top_20_accounts_for_feed) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.top_20_accounts_for_feed, i = typeof i === f ? i.apply(e) : i), r += l(i) + '</p>\n    </div>\n\n</div>\n\n  <div class="menu-title spacer">Manually uploaded tracks</div>\n  <div class="main-menu">\n    <div class="menu-link monetized">\n      <h2 class="sc-text-link"><a href="#/conflicts/manual-uploads-unknown-owner">Unknown ownership</a></h2>\n      <p class="track-count sc-text">', (i = n.manual_upload_missing_rightsholder) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.manual_upload_missing_rightsholder, i = typeof i === f ? i.apply(e) : i), r += l(i) + "</p>\n    </div>\n  </div>\n</div>\n", r;
                }

                function v(e, t) {
                    var r = "",
                        i;
                    return r += '\n<div class="menu-title spacer">Supply chain tracks</div>\n<div class="main-menu">\n  <div class="menu-link">\n    <h2 class="sc-text-link"><a href="#/conflicts/all-feed">All Conflicts</a></h2>\n    <p class="track-count sc-text">', (i = n.all) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.all, i = typeof i === f ? i.apply(e) : i), r += l(i) + "</p>\n  </div>\n</div>\n", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = this,
                    h = n.helperMissing;
                s += '\n<ul class="nav-tabs">\n  <li class="', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, p, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a));
                if (u || u === 0) s += u;
                s += '"><a href="#/conflicts" class="sc-link-light">Monetized territories</a></li>\n  <li class="', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, p, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a));
                if (u || u === 0) s += u;
                s += '"><a href="#/conflicts/all-territories" class="sc-link-light">All territories</a></li>\n</ul>\n', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(3, d, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a));
                if (u || u === 0) s += u;
                s += "\n\n", a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(5, v, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a));
                if (u || u === 0) s += u;
                return s += "\n\n", s;
            }), this.HandlebarsTemplates["conflicts-dashboard-feed"];
        }.call(this);
    }.call(this), define("views/conflicts-dashboard-feed-view", ["require", "exports", "module", "lib/view", "models/conflict-stats", "views/get-tracks-text-helper"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("models/conflict-stats"),
            s = e("views/get-tracks-text-helper"),
            o;
        o = n.exports = r.extend({
            disposeOnLeave: !0,
            className: "conflict-dashboard-feed",
            template: JST["templates/conflicts-dashboard-feed"],
            loadingTemplate: JST["templates/conflicts-dashboard-feed"],
            observableAttributes: ["all"],
            setup: function() {
                this.model = new i, this.options = this.options || {}, this.options.tab = this.options.tab || "monetized";
            },
            getTemplateData: function(e) {
                return {
                    _options: this.options,
                    all: s(e.all),
                    last_7_days_for_feed: s(e.last_7_days_for_feed),
                    top_20_accounts_for_feed: s(e.top_20_accounts_for_feed),
                    has_monetized_territories_for_feed: s(e.has_monetized_territories_for_feed),
                    manual_upload_missing_rightsholder: s(e.manual_upload_missing_rightsholder),
                    is_feed_rightsholder: e.is_feed_rightsholder
                };
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflicts-dashboard-non-feed"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflicts-dashboard-non-feed"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    return "active";
                }

                function d(e, t) {
                    var r = "",
                        i;
                    return r += '\n<div class="menu-title spacer">Manually uploaded tracks</div>\n<div class="main-menu">\n  <div class="menu-link">\n    <h2 class="sc-text-link"><a href="#/conflicts/manual-uploads-unknown-owner">Unknown ownership</a></h2>\n    <p class="track-count sc-text">', (i = n.has_monetized_territories) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.has_monetized_territories, i = typeof i === f ? i.apply(e) : i), r += l(i) + '</p>\n  </div>\n  <div class="menu-link">\n    <h2 class="sc-text-link"><a href="#/conflicts/last-7-days">Triggered in Last 7 Days</a></h2>\n    <p class="track-count sc-text">', (i = n.last_7_days) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.last_7_days, i = typeof i === f ? i.apply(e) : i), r += l(i) + '</p>\n  </div>\n  <div class="menu-link">\n    <h2 class="sc-text-link"><a href="#/conflicts/top-20-accounts">Top 20 Monetized Accounts</a></h2>\n    <p class="track-count sc-text">', (i = n.top_20_accounts) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.top_20_accounts, i = typeof i === f ? i.apply(e) : i), r += l(i) + "</p>\n  </div>\n</div>\n", r;
                }

                function v(e, t) {
                    var r = "",
                        i;
                    return r += '\n<div class="menu-title spacer">Manually uploaded tracks</div>\n<div class="main-menu">\n  <div class="menu-link">\n    <h2 class="sc-text-link"><a href="#/conflicts/all-unknown-owner">All tracks with unknown ownership</a></h2>\n    <p class="track-count sc-text">', (i = n.all) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.all, i = typeof i === f ? i.apply(e) : i), r += l(i) + "</p>\n  </div>\n</div>\n", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = this,
                    h = n.helperMissing;
                s += '<ul class="nav-tabs">\n  <li class="', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, p, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a));
                if (u || u === 0) s += u;
                s += '"><a href="#/conflicts" class="sc-link-light">Monetized territories</a></li>\n  <li class="', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(1, p, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a));
                if (u || u === 0) s += u;
                s += '"><a href="#/conflicts/all-territories" class="sc-link-light">All territories</a></li>\n</ul>\n\n', a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(3, d, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "monetized", a));
                if (u || u === 0) s += u;
                s += "\n\n", a = {
                    hash: {},
                    inverse: c.noop,
                    fn: c.program(5, v, i),
                    data: i
                }, u = (o = n.equals, o ? o.call(t, (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a) : h.call(t, "equals", (o = t._options, o == null || o === !1 ? o : o.tab), "allTerritories", a));
                if (u || u === 0) s += u;
                return s += "\n", s;
            }), this.HandlebarsTemplates["conflicts-dashboard-non-feed"];
        }.call(this);
    }.call(this), define("views/conflicts-dashboard-non-feed-view", ["require", "exports", "module", "lib/view", "models/conflict-stats", "views/get-tracks-text-helper"], function(e, t, n) {
        var r = e("lib/view"),
            i = e("models/conflict-stats"),
            s = e("views/get-tracks-text-helper"),
            o;
        o = n.exports = r.extend({
            disposeOnLeave: !0,
            className: "conflict-dashboard-non-feed",
            template: JST["templates/conflicts-dashboard-non-feed"],
            loadingTemplate: JST["templates/conflicts-dashboard-non-feed-loading"],
            observableAttributes: ["all"],
            setup: function() {
                this.model = new i, this.options = this.options || {}, this.options.tab = this.options.tab || "monetized";
            },
            getTemplateData: function(e) {
                return {
                    _options: this.options,
                    all: s(e.all),
                    last_7_days: s(e.last_7_days),
                    top_20_accounts: s(e.top_20_accounts),
                    has_monetized_territories: s(e.has_monetized_territories),
                    is_feed_rightsholder: e.is_feed_rightsholder
                };
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflicts-dashboard"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflicts-dashboard"] = Handlebars.template(function(e, t, n, r, i) {
                function h(e, t) {
                    var r = "",
                        i, s;
                    return r += "\n  ", s = {
                        hash: {
                            tab: e.tab
                        },
                        data: t
                    }, r += l((i = n.view, i ? i.call(e, "../views/conflicts-dashboard-feed-view", s) : f.call(e, "view", "../views/conflicts-dashboard-feed-view", s))) + "\n", r;
                }

                function p(e, t) {
                    var r = "",
                        i, s;
                    return r += "\n  ", s = {
                        hash: {
                            tab: e.tab
                        },
                        data: t
                    }, r += l((i = n.view, i ? i.call(e, "../views/conflicts-dashboard-non-feed-view", s) : f.call(e, "view", "../views/conflicts-dashboard-non-feed-view", s))) + "\n", r;
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = n.helperMissing,
                    l = this.escapeExpression,
                    c = this;
                s += '<div class="l-header header">\n    <h2>Conflicts &amp; Ownership</h2>\n</div>\n\n', a = {
                    hash: {
                        model: t.filterModel
                    },
                    data: i
                }, s += l((o = n.view, o ? o.call(t, "../views/conflict-search-input-view", a) : f.call(t, "view", "../views/conflict-search-input-view", a))) + "\n\n", u = n["if"].call(t, t.is_feed_rightsholder, {
                    hash: {},
                    inverse: c.program(3, p, i),
                    fn: c.program(1, h, i),
                    data: i
                });
                if (u || u === 0) s += u;
                return s += "\n", s;
            }), this.HandlebarsTemplates["conflicts-dashboard"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflict-search-input"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflict-search-input"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<input type="text" placeholder="Search by account name, label name, keyword, ISRCs, UPCs" value="', (o = n.search) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.search, o = typeof o === u ? o.apply(t) : o), s += a(o) + '">\n<button class="sc-button sc-button-large search-button" title="Search"></button>\n', s;
            }), this.HandlebarsTemplates["conflict-search-input"];
        }.call(this);
    }.call(this), define("views/conflicts-dashboard-view", ["require", "exports", "module", "lib/view", "models/conflict-stats", "models/conflict-filter", "views/conflict-search-input-view", "views/conflicts-dashboard-feed-view", "views/conflicts-dashboard-non-feed-view"], function(e, t, n) {
        function u() {
            var e = this.filterModel.get("search");
            e && e.trim() && window.Deck.Router.navigate("#/conflicts/search/" + encodeURIComponent(e));
        }
        var r = e("lib/view"),
            i = e("models/conflict-stats"),
            s = e("models/conflict-filter"),
            o;
        e("views/conflict-search-input-view"), e("views/conflicts-dashboard-feed-view"), e("views/conflicts-dashboard-non-feed-view"), o = n.exports = r.extend({
            disposeOnLeave: !0,
            className: "conflicts-dashboard",
            template: JST["templates/conflicts-dashboard"],
            loadingTemplate: JST["templates/conflicts-dashboard"],
            observableAttributes: ["is_feed_rightsholder"],
            setup: function(e) {
                this.model = new i, this.filterModel = new s, this.filterModel.setFilter({
                    search: e.search
                }), this.filterModel.on("change:search", u, this);
            },
            getTemplateData: function(e) {
                return {
                    is_feed_rightsholder: e.is_feed_rightsholder,
                    tab: this.options.tab
                };
            },
            dispose: function() {
                this.filterModel.off("change:search", u, this);
            }
        }, {
            hashFn: function(e) {
                return e && e.resource_id;
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflict"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.conflict = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = n.helperMissing,
                    l = this.escapeExpression,
                    c = "function";
                return s += '  <td class="user">\n    ', a = {
                    hash: {
                        model: t.user,
                        fetch: !1
                    },
                    data: i
                }, s += l((o = n.view, o ? o.call(t, "../views/user-badge-view", a) : f.call(t, "view", "../views/user-badge-view", a))) + '\n  </td>\n  <td class="popularity">', (u = n.popularity_display) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.popularity_display, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</td>\n  <td class="trackTitle"><a target="_blank" href="', (u = n.permalink_url) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.permalink_url, u = typeof u === c ? u.apply(t) : u), s += l(u) + '">', (u = n.track_title) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.track_title, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</a></td>\n  <td class="labelName">', (u = n.label_name) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.label_name, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</td>\n  <td>\n    <span class="isrc">', (u = n.isrc) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.isrc, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</span>\n    <span class="upc">', (u = n.upc) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.upc, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</span>\n  </td>\n  <td class="last-update"><span title="', (u = n.updated_at_tooltip) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.updated_at_tooltip, u = typeof u === c ? u.apply(t) : u), s += l(u) + '">', (u = n.updated_at_display) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.updated_at_display, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</span></td>\n  <td><i class="', (u = n.missing_rightsholder_class) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.missing_rightsholder_class, u = typeof u === c ? u.apply(t) : u), s += l(u) + '" title="', (u = n.missing_rightsholder_tooltip) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.missing_rightsholder_tooltip, u = typeof u === c ? u.apply(t) : u), s += l(u) + '"></i></td>\n  <td><i class="', (u = n.money_class) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.money_class, u = typeof u === c ? u.apply(t) : u), s += l(u) + '" title="', (u = n.money_tooltip) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.money_tooltip, u = typeof u === c ? u.apply(t) : u), s += l(u) + '"></i></td>\n  <td class="track-status"><button class="track-status" title="Check track status"><img src="/assets/images/ic_chevronRight_12_platinum.svg"></button></td>\n\n', s;
            }), this.HandlebarsTemplates.conflict;
        }.call(this);
    }.call(this), define("views/conflict-view", ["require", "exports", "module", "views/count-helper", "lib/view"], function(e, t, n) {
        var r = e("views/count-helper"),
            i = e("lib/view"),
            s;
        s = n.exports = i.extend({
            disposeOnLeave: !0,
            tagName: "tr",
            className: "list-item conflict__item",
            template: JST["templates/conflict"],
            events: {
                "click button.track-status": "onTrackStatusClick"
            },
            observableAttributes: ["account_name"],
            hasData: function() {
                return !0;
            },
            getTemplateData: function(e) {
                e.has_missing_rightsholder && (e.missing_rightsholder_class = "conflict-icon-missing-rightsholder", e.missing_rightsholder_tooltip = "Territories are missing rightsholder"), e.has_monetized_territories && (e.money_class = "conflict-icon-money-issue", e.money_tooltip = "Monetized territories have conflicts"), e.popularity_display = r.render(e.popularity, {
                    useSIUnits: !0
                }), e.upc = e.upcs && e.upcs.length && e.upcs[e.upcs.length - 1] || "";
                if (e.updated_at) {
                    var t = new Date(e.updated_at);
                    e.updated_at_display = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
                }
                return e;
            },
            onTrackStatusClick: function() {
                window.location.href = "/track-status/id/" + this.model.get("track_urn");
            }
        });
    }), define("models/conflict", ["require", "exports", "module", "lib/model"], function(e, t, n) {
        var r = e("lib/model"),
            i;
        i = n.exports = r.extend({
            urlRoot: "/conflicts",
            resource_type: "conflict"
        });
    }), define("lib/mixins/cursor-paged-collection", ["require", "exports", "module", "lib/mixin"], function(e, t, n) {
        var r = e("lib/mixin");
        n.exports = new r({
            hasNextPage: function() {
                return !!this.next_href;
            },
            hasPreviousPage: function() {
                return !!this.previous_href;
            },
            _extractMetadata: function(e) {
                this.next_href = null, this.previous_href = null, e && e.meta && (this.next_href = e.meta.next_href || null), e && e.meta && (this.previous_href = e.meta.previous_href || null), e && e.meta && (this.fullCount = e.meta.count);
            },
            fetchNext: function() {
                if (this.next_href) return this.fetch({
                    url: this.next_href
                });
            },
            fetchPrevious: function() {
                if (this.previous_href) return this.fetch({
                    url: this.previous_href
                });
            },
            ensureInitialPage: function() {
                return this.previous_href ? (this.next_href = null, this.previous_href = null, this.fetch()) : $.Deferred().resolve();
            },
            before: {
                parse: function(e) {
                    this._extractMetadata(e);
                }
            }
        });
    }), define("collections/conflicts", ["require", "exports", "module", "lib/collection", "models/conflict", "lib/mixins/cursor-paged-collection", "lib/url"], function(e, t, n) {
        var r, i = e("lib/collection"),
            s = e("models/conflict"),
            o = e("lib/mixins/cursor-paged-collection"),
            u = e("lib/url");
        n.exports = r = i.extend({
            mixins: [o],
            model: s,
            setup: function(e) {
                this.query = e.query;
            },
            url: function() {
                var e = "/conflicts";
                return u.stringify({
                    path: e,
                    query: this.query
                });
            },
            parse: function(e) {
                return e.conflicts;
            }
        }, {
            hashFn: function(e, t) {
                return t && t.resource_id || JSON.stringify(t.query);
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/server-pager-view"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["server-pager-view"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = n.helperMissing,
                    l = this.escapeExpression,
                    c = "function";
                return s += '<span class="pager-count">', a = {
                    hash: {},
                    data: i
                }, s += l((o = n.formatCount, o ? o.call(t, t.count, a) : f.call(t, "formatCount", t.count, a))) + " ", (u = n.type) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.type, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</span>\n<a class="pager-previous sc-button sc-button-medium sc-button-icon sc-button-pageleft ', (u = n.previous_disabled) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.previous_disabled, u = typeof u === c ? u.apply(t) : u), s += l(u) + '">', (u = n.prev) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.prev, u = typeof u === c ? u.apply(t) : u), s += l(u) + '</a>\n<a class="pager-next sc-button sc-button-medium sc-button-icon sc-button-pageright ', (u = n.next_disabled) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.next_disabled, u = typeof u === c ? u.apply(t) : u), s += l(u) + '">', (u = n.next) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.next, u = typeof u === c ? u.apply(t) : u), s += l(u) + "</a>\n", s;
            }), this.HandlebarsTemplates["server-pager-view"];
        }.call(this);
    }.call(this), define("views/server-pager-view", ["require", "exports", "module", "lib/view"], function(e, t, n) {
        var r = e("lib/view"),
            i;
        n.exports = i = r.extend({
            className: "pager",
            setup: function(e) {
                this.options = e || {}, this.collection = e.collection, this.collection.on("metadata", function() {
                    this.render();
                }.bind(this));
            },
            events: {
                "click .pager-next": "fetchNext",
                "click .pager-previous": "fetchPrevious"
            },
            template: JST["templates/server-pager-view"],
            getTemplateData: function() {
                return {
                    count: this.collection.fullCount,
                    type: this.options.type || "items",
                    next: this.options.next || "Next",
                    prev: this.options.previous || "Previous",
                    next_disabled: this.collection.hasNextPage() ? "" : "disabled",
                    previous_disabled: this.collection.hasPreviousPage() ? "" : "disabled"
                };
            },
            fetchNext: function() {
                return this.collection.fetchNext();
            },
            fetchPrevious: function() {
                return this.collection.fetchPrevious();
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/pagination"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates.pagination = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return (o = n.lower_range) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.lower_range, o = typeof o === u ? o.apply(t) : o), s += a(o) + " - ", (o = n.upper_range) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.upper_range, o = typeof o === u ? o.apply(t) : o), s += a(o) + " of ", (o = n.count) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.count, o = typeof o === u ? o.apply(t) : o), s += a(o) + '\n<div class="sc-button-group sc-button-group-pill pagination-button-group">\n  <a title="', (o = n.prev) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.prev, o = typeof o === u ? o.apply(t) : o), s += a(o) + '" class="pager-newer ', (o = n.newer_disabled) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.newer_disabled, o = typeof o === u ? o.apply(t) : o), s += a(o) + ' sc-button sc-button-medium sc-button-pageleft sc-button-icon">', (o = n.prev) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.prev, o = typeof o === u ? o.apply(t) : o), s += a(o) + '</a>\n  <a title="', (o = n.next) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.next, o = typeof o === u ? o.apply(t) : o), s += a(o) + '" class="pager-older ', (o = n.older_disabled) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.older_disabled, o = typeof o === u ? o.apply(t) : o), s += a(o) + ' sc-button sc-button-medium sc-button-pageright sc-button-icon">', (o = n.next) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.next, o = typeof o === u ? o.apply(t) : o), s += a(o) + "</a>\n</div>\n", s;
            }), this.HandlebarsTemplates.pagination;
        }.call(this);
    }.call(this), define("lib/views/mixins/server-pagination", ["require", "exports", "module", "views/server-pager-view", "lib/mixin"], function(e, t, n) {
        var r = e("views/server-pager-view"),
            i = e("lib/mixin"),
            s;
        n.exports = s = new i({
            after: {
                remove: function() {
                    this.pagerView && (this.pagerView.model.off(), this.pagerView.remove());
                },
                setup: function(e) {
                    this._pagerOptions = e;
                },
                render: function() {
                    this.pagerView && this.pagerView.remove();
                    var e = this.$(".pager");
                    e.length && (this.pagerView = new r({
                        parent: this,
                        el: e,
                        previous: this._pagerOptions.previous,
                        next: this._pagerOptions.next,
                        type: this._pagerOptions.type,
                        collection: this.collection
                    }));
                },
                dispose: function() {
                    this.pagerView && (this.pagerView._dispose(), this.pagerView = null);
                }
            }
        });
    }),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflicts-results"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflicts-results"] = Handlebars.template(function(e, t, n, r, i) {
                function p(e, t) {
                    var r = "",
                        i;
                    return r += '\n      <a href="', (i = n.exportCsvLink) ? i = i.call(e, {
                        hash: {},
                        data: t
                    }) : (i = e.exportCsvLink, i = typeof i === f ? i.apply(e) : i), r += l(i) + '">Export to CSV</a>\n    ', r;
                }

                function d(e, t) {
                    return '\n      <span href="#" class="disabled" title="CSV downloads are limited, it will be re-enabled within a few seconds">Export to CSV</span>\n    ';
                }

                function v(e, t) {
                    return '\n    <tr><td colspan="7" class="loading-spinner"><img src="/assets/images/spinner.gif" alt="Loading..."></td></tr>\n  ';
                }
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u, a, f = "function",
                    l = this.escapeExpression,
                    c = n.helperMissing,
                    h = this;
                s += '<div class="l-header header">\n  <div class="back-button">\n    <a href="#/conflicts" class="sc-button sc-button-medium">&lt; Back to conflicts dashboard</a>\n  </div>\n  <div class="header-text">\n    <h2>Conflicts &amp; Ownership Search Results</h2>\n  </div>\n</div>\n\n', a = {
                    hash: {
                        search: (o = t.filterModel, o == null || o === !1 ? o : o.search)
                    },
                    data: i
                }, s += l((o = n.view, o ? o.call(t, "../views/conflict-search-input-view", a) : c.call(t, "view", "../views/conflict-search-input-view", a))) + '\n\n<div class="search-title-container">\n  <div class="search-title">\n    ', (u = n.searchTitle) ? u = u.call(t, {
                    hash: {},
                    data: i
                }) : (u = t.searchTitle, u = typeof u === f ? u.apply(t) : u), s += l(u) + '\n  </div>\n  <div class="export-csv-link">\n    ', u = n["if"].call(t, t.exportCsvLink, {
                    hash: {},
                    inverse: h.program(3, d, i),
                    fn: h.program(1, p, i),
                    data: i
                });
                if (u || u === 0) s += u;
                s += '\n  </div>\n</div>\n\n<div class="pager">\n  \n</div>\n\n<table class="conflicts-table">\n  <thead>\n    <th class="header-user sortable">\n      <span title="SoundCloud Account"\n            tooltip-position="center"\n            class="' + l((o = (o = (o = t.filterModel, o == null || o === !1 ? o : o.sortOrderClasses), o == null || o === !1 ? o : o.user_name), typeof o === f ? o.apply(t) : o)) + '">\n        SoundCloud Account\n      </span>\n    </th>\n    <th class="header-popularity sortable">\n      <span title="Number of monetized plays on account in last month"\n            tooltip-position="center"\n            class="' + l((o = (o = (o = t.filterModel, o == null || o === !1 ? o : o.sortOrderClasses), o == null || o === !1 ? o : o.popularity), typeof o === f ? o.apply(t) : o)) + '">\n        Popularity\n      </span>\n    </th>\n    <th class="header-track-title"><span title="Track Title" tooltip-position="center">Track Title</span></th>\n    <th class="header-label-name"><span title="Label Name" tooltip-position="center">Label Name</span></th>\n    <th class="header-isrc"><span title="ISRC and most recent UPC" tooltip-position="center">ISRC / UPC</span></th>\n    <th class="header-last-update sortable">\n      <span title="Last date track was updated"\n            tooltip-position="center"\n            class="' + l((o = (o = (o = t.filterModel, o == null || o === !1 ? o : o.sortOrderClasses), o == null || o === !1 ? o : o.updated_at), typeof o === f ? o.apply(t) : o)) + '">\n        Last Update\n      </span>\n    </th>\n    <th class="header-missing-rightsholder sortable icon">\n      <i title="Territories are missing rightsholder"\n         class="conflict-icon-missing-rightsholder"></i>\n      <span class="' + l((o = (o = (o = t.filterModel, o == null || o === !1 ? o : o.sortOrderClasses), o == null || o === !1 ? o : o.has_missing_rightsholder), typeof o === f ? o.apply(t) : o)) + '"></span>\n    </th>\n    <th class="header-monetized sortable icon">\n      <i title="Monetized territories have conflicts"\n         class="conflict-icon-money-issue"></i>\n      <span class="' + l((o = (o = (o = t.filterModel, o == null || o === !1 ? o : o.sortOrderClasses), o == null || o === !1 ? o : o.has_monetized_territories), typeof o === f ? o.apply(t) : o)) + '"></span>\n    </th>\n    <th class="header-status icon">\n    </th>\n  </thead>\n  ', u = n["if"].call(t, t.isLoading, {
                    hash: {},
                    inverse: h.noop,
                    fn: h.program(5, v, i),
                    data: i
                });
                if (u || u === 0) s += u;
                return s += '\n  <tbody class="conflicts">\n\n  </tbody>\n</table>\n', s;
            }), this.HandlebarsTemplates["conflicts-results"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflicts-results-loading"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflicts-results-loading"] = Handlebars.template(function(e, t, n, r, i) {
                return this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {}, "<div>\n  Loading...\n</div>\n";
            }), this.HandlebarsTemplates["conflicts-results-loading"];
        }.call(this);
    }.call(this),
    function() {
        this.JST || (this.JST = {}), this.JST["templates/conflict-search-input"] = function() {
            return this.HandlebarsTemplates || (this.HandlebarsTemplates = {}), this.HandlebarsTemplates["conflict-search-input"] = Handlebars.template(function(e, t, n, r, i) {
                this.compilerInfo = [2, ">= 1.0.0-rc.3"], n = n || e.helpers, i = i || {};
                var s = "",
                    o, u = "function",
                    a = this.escapeExpression;
                return s += '<input type="text" placeholder="Search by account name, label name, keyword, ISRCs, UPCs" value="', (o = n.search) ? o = o.call(t, {
                    hash: {},
                    data: i
                }) : (o = t.search, o = typeof o === u ? o.apply(t) : o), s += a(o) + '">\n<button class="sc-button sc-button-large search-button" title="Search"></button>\n', s;
            }), this.HandlebarsTemplates["conflict-search-input"];
        }.call(this);
    }.call(this), define("views/conflicts-results-view", ["require", "exports", "module", "underscore", "views/count-helper", "views/conflict-view", "collections/conflicts", "config/env", "lib/views/mixins/list-header", "lib/list-view", "models/conflict-filter", "lib/views/mixins/server-pagination", "tooltip", "lib/url", "views/conflict-search-input-view"], function(e, t, n) {
        function m(e) {
            return e === "desc" ? "asc" : "desc";
        }
        var r = e("underscore"),
            i = e("views/count-helper"),
            s = e("views/conflict-view"),
            o = e("collections/conflicts"),
            u = e("config/env"),
            a = e("lib/views/mixins/list-header"),
            f = e("lib/list-view"),
            l = e("models/conflict-filter"),
            c = e("lib/views/mixins/server-pagination"),
            h = e("tooltip"),
            p = e("lib/url"),
            d;
        e("views/conflict-search-input-view");
        var v = {
            "last-7-days": "{count} issues triggered in the last 7 days",
            "missing-rightsholder": "{count} tracks missing rightsholder for some territories",
            all: "{count} issues",
            "top-20-accounts": "{count} tracks with conflicts in the top 20 monetized accounts",
            "resolved-last-7-days": "{count} conflicts resolved in the last 7 days",
            "has-monetized-territories": "{count} conflicts in monetized territories"
        };
        d = n.exports = f.extend({
            mixins: [a, c],
            disposeOnLeave: !0,
            className: "conflicts-results",
            template: JST["templates/conflicts-results"],
            loadingTemplate: JST["templates/conflicts-results-loading"],
            itemView: s,
            events: {
                "click th.header-user": "handleUserColumnClick",
                "click th.header-popularity": "handlePopularityColumnClick",
                "click th.header-last-update": "handleLastUpdateColumnClick",
                "click th.header-missing-rightsholder": "handleMissingRightsholderColumnClick",
                "click th.header-monetized": "handleMonetizedColumnClick",
                "click .export-csv-link a": "handleExportCsvClick",
                "mouseover [title]": "handleMouseOver"
            },
            getListEl: function() {
                return this.$(".conflicts");
            },
            setup: function(e) {
                this.options = e || {}, this.filterModel = new l, this.filterModel.setFilter(r.pick(e, "filter", "search")), this.providedFilterName = e.filter, this.collection = new o(null, {
                    query: this.filterModel.getQueryParameters()
                }), this.handleFilterChange = this.handleFilterChange.bind(this), this.filterModel.on("change:search change_sort_order", this.handleFilterChange);
            },
            onCollectionReset: function() {
                this.render();
            },
            getTemplateData: function(e) {
                var t = v[this.providedFilterName] || "";
                t && typeof this.collection.fullCount == "number" ? e.searchTitle = t.replace("{count}", i.render(this.collection.fullCount, {
                    useSIUnits: !0
                })) : typeof this.collection.fullCount != "number" && (e.searchTitle = "Loading...", e.isLoading = !0), e.filterModel = this.filterModel;
                if (e.filterModel.get("csvDisabled") !== !0) {
                    var n = this.filterModel.getQueryParameters();
                    n.format = "csv", e.exportCsvLink = u.APIDeckUrl + p.stringify({
                        path: "/conflicts",
                        query: n
                    });
                }
                return e;
            },
            resetCollection: function() {
                this.collection && (this.toggleCollectionListeners("off"), this.collection.release()), this.collection = new o(null, {
                    query: this.filterModel.getQueryParameters()
                }), this.toggleCollectionListeners("on"), this.collection.ensureInitialPage();
            },
            handleFilterChange: function() {
                this.resetCollection(), this.render();
            },
            handleMouseOver: function(e) {
                var t = $(e.target);
                t.qtip("api") || (this.tooltipsEnabled = !0, h.bootstrap(t, {
                    style: "deck-tooltip conflicts-results",
                    position: {
                        target: "event"
                    }
                }), t.qtip("show"));
            },
            handleColumnClick: function(e, t) {
                var n = this.filterModel.get("sort_by"),
                    r = this.filterModel.get("sort_order"),
                    i = t || "asc";
                n === e && (i = m(r)), this.filterModel.setSort({
                    sort_order: i,
                    sort_by: e
                });
            },
            handleUserColumnClick: function() {
                this.handleColumnClick("user_name");
            },
            handlePopularityColumnClick: function() {
                this.handleColumnClick("popularity", "desc");
            },
            handleLastUpdateColumnClick: function() {
                this.handleColumnClick("updated_at", "desc");
            },
            handleMissingRightsholderColumnClick: function() {
                this.handleColumnClick("has_missing_rightsholder");
            },
            handleMonetizedColumnClick: function() {
                this.handleColumnClick("has_monetized_territories");
            },
            handleExportCsvClick: function() {
                this.filterModel.set("csvDisabled", !0), this.reenableCsvTimeout && (window.clearTimeout(this.reenableCsvTimeout), this.reenableCsvTimeout = null), this.reenableCsvTimeout = window.setTimeout(function() {
                    this.filterModel.set("csvDisabled", !1), this.render();
                }.bind(this), 6e4), this.render();
            },
            teardown: function() {
                this.tooltipsEnabled && this.$("[title]").qtip("destroy", !0);
            },
            dispose: function() {
                this.reenableCsvTimeout && window.clearTimeout(this.reenableCsvTimeout), this.filterModel.off("change:search change_sort_order", this.handleFilterChange), this.filterModel.release();
            }
        });
    }), define("router/router", ["require", "exports", "module", "lib/backbone", "vendor/underscore", "app", "views/page-container-view", "views/login-view", "views/sidebar-view", "views/static-view", "views/track-blacklist-view", "lib/backbone-notifications", "models/user", "views/deck-users-view", "views/rightsholders-view", "views/content-management/ingestions-view", "views/content-management/emergency-ingestion-view", "views/content-management/emergency-upload-content-view", "views/api-access/applications-view", "views/api-access/accounts-view", "views/api-access/tracks-view", "views/content-management/whitelisted-isrcs-view", "collections/ingestions", "views/stats-reports-view", "views/high-value-references-view", "views/high-value-reference-detail-view", "views/profile-edit-view", "views/conflicts-dashboard-view", "views/conflicts-results-view"], function(e, t, n) {
        var r = e("lib/backbone"),
            i = e("vendor/underscore"),
            s = e("app"),
            o = e("views/page-container-view"),
            u = e("views/login-view"),
            a = e("views/sidebar-view"),
            f = e("views/static-view"),
            l = e("views/track-blacklist-view"),
            c = e("lib/backbone-notifications"),
            h = e("models/user"),
            p = e("views/deck-users-view"),
            d = e("views/rightsholders-view"),
            v = e("views/content-management/ingestions-view"),
            m = e("views/content-management/emergency-ingestion-view"),
            g = e("views/content-management/emergency-upload-content-view"),
            y = e("views/api-access/applications-view"),
            b = e("views/api-access/accounts-view"),
            w = e("views/api-access/tracks-view"),
            E = e("views/content-management/whitelisted-isrcs-view"),
            S = e("collections/ingestions"),
            x = e("views/stats-reports-view"),
            T = e("views/high-value-references-view"),
            N = e("views/high-value-reference-detail-view"),
            C = e("views/profile-edit-view"),
            k = e("views/conflicts-dashboard-view"),
            L = e("views/conflicts-results-view");
        n.exports = r.Router.extend({
            routes: {
                whitelist: "userWhitelist",
                accounts: "userWhitelist",
                "accounts/:id": "account",
                takedowns: "trackBlacklist",
                "terms-of-use": "termsOfUse",
                users: "deckUsers",
                rightsholders: "rightsholders",
                ingestions: "ingestions",
                "ingestions/emergency-upload": "ingestions:emergencyUpload",
                "ingestions/emergency-upload-content": "ingestions:emergencyUploadContent",
                "isrc-whitelist": "whitelistedIsrcs",
                "stats-reports": "statsReports",
                "stats-reports/:kind": "statsReports",
                "high-value-references": "highValueReferences",
                "high-value-references/:urn": "highValueReference",
                "api-access": "apiaccess:topapps",
                "api-access/applications/:application_id/accounts": "apiaccess:accounts",
                "api-access/applications/:application_id/accounts/:account_id/tracks": "apiaccess:tracks",
                "profile-edit": "profileEdit",
                conflicts: "conflictsDashboard",
                "conflicts/all-territories": "conflictsDashboardAllTerritories",
                "conflicts/all-unknown-owner": "conflictsAllResults",
                "conflicts/all-feed": "conflictsAllFeedResults",
                "conflicts/last-7-days-for-feed": "conflictsLast7DaysForFeed",
                "conflicts/last-7-days": "conflictsLast7Days",
                "conflicts/top-20-accounts-for-feed": "conflictsTop20AccountsForFeed",
                "conflicts/top-20-accounts": "conflictsTop20Accounts",
                "conflicts/has-monetized-territories-for-feed": "conflictsHasMonetizedTerritoriesForFeed",
                "conflicts/manual-uploads-unknown-owner": "conflictsManualUploadsUnknownOwner",
                "conflicts/search/:query": "conflictsSearch",
                ".*": "login",
                "/": "login"
            },
            initialize: function() {
                i.bindAll(this, "login", "logout"), this.sidebar = new a({
                    el: $("div.sidebar"),
                    router: this
                }), this.loginView = new u({
                    el: $("#login-view"),
                    router: this
                }), $(document).ajaxError(function(e, t, n) {
                    t.status === 401 && !n.authenticating && (this.logout(), t.globalError = !1);
                }.bind(this)), this.pageContainer = new o({
                    el: $("div.content")
                }), this.notification = new c.AjaxNotification({
                    className: "ajax-notice-wrapper notice-wrapper"
                });
            },
            login: function(e) {
                if (typeof window != "undefined") {
                    var t = !e && window.location.hash || "/";
                    this.navigate("/", {
                        replace: !1
                    }), s.currentUser.authenticate(this._authenticated.bind(this, t));
                }
            },
            _authenticated: function(e) {
                if (e === "/") {
                    var t = i.find(s.tools, function(e) {
                        return !e.capacity || s.currentUser.hasCapability(e.capacity);
                    });
                    e = "/#" + t.route;
                }
                this.navigate(e, !0);
            },
            logout: function() {
                function n() {
                    delete s.currentUser, t.trigger("logged-out"), s.currentUser = new h, e(!0);
                }
                var e = this.login,
                    t = this;
                return this.pageContainer.clean(), delete this.isMapped, $("#arms-login input[name=username]").val(""), $("#arms-login input[name=password]").val(""), $.ajax({
                    url: "/_api/sessions",
                    type: "DELETE",
                    success: function() {
                        n();
                    },
                    error: function() {
                        n();
                    }
                });
            },
            account: function(e) {
                if (!s.currentUser.authenticated()) return this.login();
                window.location = "/accounts/" + encodeURIComponent(e);
            },
            userWhitelist: function() {
                if (!s.currentUser.authenticated()) return this.login();
                window.location = "/accounts";
            },
            trackBlacklist: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("track-blacklist", l);
            },
            termsOfUse: function() {
                this.pageContainer.switchTo("terms-of-use", f);
            },
            deckUsers: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("deck-users", p);
            },
            rightsholders: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("rightsholders", d);
            },
            statsReports: function(e) {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("stats-reports-" + e, x, {
                    kind: e
                });
            },
            ingestions: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.isMapped ? this.pageContainer.switchTo("ingestions", v) : S.fetchMappedRightsholder(function(e) {
                    this.isMapped = !!e.party_id, this.isMapped ? this.ingestions() : this.pageContainer.switchTo("content-management/ingestions-welcome", f);
                }.bind(this));
            },
            "ingestions:emergencyUpload": function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("emergency-ingestion", m);
            },
            "ingestions:emergencyUploadContent": function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("emergency-upload-content", g);
            },
            "apiaccess:topapps": function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("api-access", y);
            },
            "apiaccess:accounts": function(e) {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("api-access-accounts", b, {
                    applicationId: e
                });
            },
            "apiaccess:tracks": function(e, t) {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("api-access-tracks", w, {
                    applicationId: e,
                    accountId: t
                });
            },
            whitelistedIsrcs: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("whitelisted-isrcs", E);
            },
            highValueReferences: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("priority-content-protection", T);
            },
            highValueReference: function(e) {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("high-value-reference", N, {
                    resource_id: e,
                    urn: e
                });
            },
            profileEdit: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("profile-edit", C);
            },
            conflictsDashboard: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts", k);
            },
            conflictsDashboardAllTerritories: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts", k, {
                    tab: "allTerritories"
                });
            },
            conflictsAllResults: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/all-unknown-owner", L, {
                    filter: "manual-uploads-unknown-owner-all"
                });
            },
            conflictsAllFeedResults: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/all-feed", L, {
                    filter: "from-feed"
                });
            },
            conflictsMissingRightsholder: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/missing-rightsholder", L, {
                    filter: "missing-rightsholder"
                });
            },
            conflictsMissingRightsholderMonetized: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/missing-rightsholder-monetized", L, {
                    filter: "missing-rightsholder-monetized"
                });
            },
            conflictsFromFeed: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/from-feed", L, {
                    filter: "from-feed"
                });
            },
            conflictsLast7DaysForFeed: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/last-7-days-for-feed", L, {
                    filter: "last-7-days-for-feed"
                });
            },
            conflictsLast7Days: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/last-7-days", L, {
                    filter: "last-7-days"
                });
            },
            conflictsTop20AccountsForFeed: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/top-20-accounts-for-feed", L, {
                    filter: "top-20-accounts-for-feed"
                });
            },
            conflictsTop20Accounts: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/top-20-accounts", L, {
                    filter: "top-20-accounts"
                });
            },
            conflictsHasMonetizedTerritoriesForFeed: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/has-monetized-territories-for-feed", L, {
                    filter: "has-monetized-territories-for-feed"
                });
            },
            conflictsHasMonetizedTerritories: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/has-monetized-territories", L, {
                    filter: "has-monetized-territories"
                });
            },
            conflictsManualUploadsUnknownOwner: function() {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/manual-uploads-unknown-owner", L, {
                    filter: "manual-uploads-unknown-owner"
                });
            },
            conflictsSearch: function(e) {
                if (!s.currentUser.authenticated()) return this.login();
                this.pageContainer.switchTo("conflicts/search/" + e, L, {
                    search: decodeURIComponent(e)
                });
            },
            clearView: function(e) {
                var t = this.pageContainer.collection,
                    n = t.get(e);
                if (n) {
                    var r = n.get("view");
                    r.disposeSubviews(), r.remove(), t.remove(n);
                }
            }
        });
    }), define("mobile-navigation", ["require", "exports", "module", "vendor/underscore"], function(e, t, n) {
        var r = e("vendor/underscore"),
            i = $(window),
            s = !1;
        n.exports = function() {
            function e() {
                s = i.width() <= 768;
            }

            function t() {
                s && $(".sidebar-tools").toggleClass("navigation-open");
            }

            function n() {
                e(), $(".sidebar-tools").removeClass("navigation-open");
            }
            e(), i.bind("orientationchange", e), i.bind("resize", r.debounce(n, 100)), $("body").on("click", ".sidebar-tools", t);
        };
    }), require.config({
        paths: {
            underscore: "vendor/underscore"
        },
        shim: {
            "vendor/underscore": {
                exports: "_"
            },
            "vendor/backbone": {
                deps: ["vendor/underscore"],
                exports: "Backbone"
            }
        }
    }), define("main", ["require", "views/content-management/mock-ajax", "vendor/underscore", "config/env", "lib/backbone", "router/router", "app", "models/user", "mobile-navigation"], function(e) {
        e("views/content-management/mock-ajax"), document.getElementById("loading-view").style.display = "none";
        var t = e("vendor/underscore"),
            n = e("config/env"),
            r = e("lib/backbone"),
            i = e("router/router"),
            s = e("app"),
            o = e("models/user"),
            u = e("mobile-navigation");
        s.currentUser = new o, window._ = t, s.Router = new i;
        var a = /^https?:\/\//;
        jQuery(document).ajaxSend(function(e, t, r) {
            ["POST", "PUT", "DELETE", "PATCH"].indexOf(r.type) != -1 && t.setRequestHeader("X-CSRF-Token", s.currentUser.get("csrf_token")), n.APIDeckUrl && r.url && (r.crossDomain = !0, a.test(r.url) || (r.url = n.APIDeckUrl + r.url), r.xhrFields = {
                withCredentials: !0
            });
        }), r.history.start(), u();
    });;