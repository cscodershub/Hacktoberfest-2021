define("layouts/user-profile", ["require", "exports", "module", "$", "underscore", "config/error-messages", "models/exception", "lib/lingua", "lib/layouts/page", "models/user"], function(e, t, n) {
        function c(e) {
            var t = e.get("username");
            return this.args = i.extend(this.args, {
                userId: e.resource_id,
                username: t
            }), this.getUpsellText = function() {
                return u.t("Be the first to hear what [[username]] posts next with our free app.", {
                    username: t
                })
            }, this.setTitle(u.t("[[username]]’s stream", {
                username: t
            })), this.setViews({
                "l-main": ["views/user/user-profile", {
                    resource_id: e.resource_id
                }]
            })
        }
        var r = e("$"),
            i = e("underscore"),
            s = e("config/error-messages"),
            o = e("models/exception"),
            u = e("lib/lingua"),
            a = e("lib/layouts/page"),
            f = e("models/user"),
            l = n.exports = a.extend({
                setup: function(e) {
                    var t = r.Deferred();
                    return this.pageUrn = "", f.resolve(e.userPermalink).fail(o.ajaxFatal(s.USER_NOT_FOUND)).then(function(e) {
                        return this.pageUrn = e.getUrn(), c.call(this, e)
                    }.bind(this)).then(t.resolve), t
                },
                getPageUrn: function() {
                    return this.pageUrn
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
    define("views/user/user-profile", ["require", "exports", "module", "underscore", "lib/views/mixins/audible-control", "config", "lib/views/mixins/fullscreen-loader", "lib/views/mixins/has-queue-source", "lib/play-manager", "models/user-profile", "collections/user-profile-audibles", "lib/view", "views/user/user-profile.tmpl", "views/user/user-profile.css"], function(e, t, n) {
        function p() {
            if (this.disposed) return;
            this.toggleSource(this.getQueueSource(), {
                userInitiated: !0
            }), s.get("router").goToSoundPage(a.getCurrentSound())
        }

        function d(e) {
            return !!e.collection.length
        }
        var r = e("underscore"),
            i = e("lib/views/mixins/audible-control"),
            s = e("config"),
            o = e("lib/views/mixins/fullscreen-loader"),
            u = e("lib/views/mixins/has-queue-source"),
            a = e("lib/play-manager"),
            f = e("models/user-profile"),
            l = e("collections/user-profile-audibles"),
            c = e("lib/view"),
            h = n.exports = c.extend(o, u, i, {
                template: e("views/user/user-profile.tmpl"),
                css: e("views/user/user-profile.css"),
                ModelClass: f,
                className: "userProfile",
                requiredAttributes: ["user", "spotlight", "likes", "posts", "playlists"],
                events: {
                    "click .userProfile__artwork": p
                },
                getQueueSource: function() {
                    return this.queueSource
                },
                setup: function() {
                    this.queueSource = new l(null, {
                        resource_id: this.options.resource_id
                    })
                },
                dispose: function() {
                    this.queueSource && (this.queueSource.release(), this.queueSource = null)
                },
                getTemplateData: function(e) {
                    var t = e.user;
                    return r.extend(e, {
                        address: [t.city, t.country].filter(Boolean).join(", "),
                        show_spotlight: d(e.spotlight),
                        show_likes: d(e.likes),
                        show_tracks: d(e.posts),
                        show_playlists: d(e.playlists)
                    })
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
    define("models/user-profile", ["require", "exports", "module", "underscore", "lib/model", "lib/mixins/urn", "collections/user-posts", "collections/user-playlists", "collections/user-likes", "collections/user-spotlight"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/model"),
            s = e("lib/mixins/urn"),
            o = e("collections/user-posts"),
            u = e("collections/user-playlists"),
            a = e("collections/user-likes"),
            f = e("collections/user-spotlight"),
            l = n.exports = i.extend(s, {
                urnPrefix: "soundcloud:users",
                defaults: {
                    resource_id: null
                },
                subcollectionMap: {
                    likes: a,
                    posts: o,
                    playlists: u,
                    spotlight: f
                },
                subcollections: [],
                baseUrl: function() {
                    return this.getEndpointUrl("userProfileItems", {
                        id: this.id
                    })
                },
                parse: function(e) {
                    return r.each(this.subcollectionMap, function(t, n) {
                        var r = e[n],
                            i;
                        r && (i = new t(null, {
                            resource_id: e.user.id
                        }), i.add(r, {
                            parse: !0
                        }), i.next_href = r.next_href || !1, this.subcollections.push(i))
                    }, this), e
                }
            }, {
                onCleanup: function(e) {
                    e.subcollections.forEach(function(e) {
                        e.release()
                    }), e.subcollections = [], i.onCleanup(e)
                },
                hashFn: function(e) {
                    return e.id ? e.id : e.user ? e.user.id : null
                }
            })
    }),
    define("collections/user-profile-audibles", ["require", "exports", "module", "models/audible", "lib/mixins/audio-source", "lib/composite-collection", "collections/user-audible-items", "collections/user-posts", "collections/user-playlists", "collections/user-likes", "collections/user-spotlight"], function(e, t, n) {
        var r = e("models/audible"),
            i = e("lib/mixins/audio-source"),
            s = e("lib/composite-collection"),
            o = e("collections/user-audible-items"),
            u = e("collections/user-posts"),
            a = e("collections/user-playlists"),
            f = e("collections/user-likes"),
            l = e("collections/user-spotlight"),
            c = n.exports = s.extend(i, {
                model: r,
                getSourceInfo: function() {
                    return {
                        type: "user-audible-items-profile"
                    }
                },
                getSounds: function() {
                    return o.prototype.getSounds.apply(this, arguments)
                },
                setupSources: function() {
                    var e = this.options.resource_id;
                    return [new l(null, {
                        resource_id: e
                    }), new u(null, {
                        resource_id: e
                    }), new a(null, {
                        resource_id: e
                    }), new f(null, {
                        resource_id: e
                    })]
                },
                extractModel: function(e) {
                    return e
                }
            })
    }),
    define("views/user/user-profile.tmpl", ["vendor/handlebars-runtime", "views/user/user-profile-group"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/user/user-profile-group", {
                    hash: {
                        type: "spotlight",
                        resource_id: (i = e && e.user, i == null || i === !1 ? i : i.id),
                        initialDisplay: 5
                    },
                    data: t
                })) + "\n", r
            }

            function c(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/user/user-profile-group", {
                    hash: {
                        type: "posts",
                        resource_id: (i = e && e.user, i == null || i === !1 ? i : i.id),
                        initialDisplay: 3
                    },
                    data: t
                })) + "\n", r
            }

            function h(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/user/user-profile-group", {
                    hash: {
                        type: "playlists",
                        design: "vertical",
                        resource_id: (i = e && e.user, i == null || i === !1 ? i : i.id),
                        initialDisplay: 4
                    },
                    data: t
                })) + "\n", r
            }

            function p(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/user/user-profile-group", {
                    hash: {
                        type: "likes",
                        resource_id: (i = e && e.user, i == null || i === !1 ? i : i.id),
                        initialDisplay: 5
                    },
                    data: t
                })) + "\n", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = "function",
                f = this;
            s += '<div class="userProfile__artwork g-header-artwork-image sc-selection-disabled"> ' + u(n.$image.call(t, t && t.user, {
                hash: {
                    size: "fill",
                    fade: !0
                },
                data: i
            })) + ' <div class="g-header-artwork-controls"> <div class="userProfile__playButton g-play-button"></div> </div> <div class="g-header-artwork-info"> <div class="g-header-artwork-info-content"> <h2 class="g-header-artwork-title g-type-shrinkwrap-inline sc-truncate">' + u((o = (o = t && t.user, o == null || o === !1 ? o : o.username), typeof o === a ? o.apply(t) : o)) + '</h2> </div> <div class="g-header-artwork-info-content"> <p class="g-header-artwork-text g-type-shrinkwrap-inline">' + u((o = t && t.address, typeof o === a ? o.apply(t) : o)) + "</p> </div> </div>\n</div> ", o = n["if"].call(t, t && t.show_spotlight, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += " ", o = n["if"].call(t, t && t.show_tracks, {
                hash: {},
                inverse: f.noop,
                fn: f.program(3, c, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += " ", o = n["if"].call(t, t && t.show_playlists, {
                hash: {},
                inverse: f.noop,
                fn: f.program(5, h, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += " ", o = n["if"].call(t, t && t.show_likes, {
                hash: {},
                inverse: f.noop,
                fn: f.program(7, p, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("views/user/user-profile.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".userProfile.playing .userProfile__playButton{display:none}")), data = null
    }),
    define("collections/user-posts", ["require", "exports", "module", "collections/user-audible-items"], function(e, t, n) {
        function s(e) {
            var t = e.playlist || e.track;
            if (t) {
                var n = o(e);
                t.isReposted = n, t.reposted_by = n ? e.user.urn : null
            }
            return t
        }

        function o(e) {
            var t = e.type;
            return t === "track-repost" || t === "playlist-repost"
        }
        var r = e("collections/user-audible-items"),
            i = n.exports = r.extend({
                baseUrl: function() {
                    return this.getEndpointUrl("userPosts", {
                        id: this.options.resource_id
                    })
                },
                defaults: {
                    type: "posts",
                    resource_id: null
                },
                parse: function(e) {
                    return e.collection.map(s).filter(Boolean)
                }
            })
    }),
    define("collections/user-playlists", ["require", "exports", "module", "collections/user-audible-items"], function(e, t, n) {
        var r = e("collections/user-audible-items"),
            i = n.exports = r.extend({
                defaults: {
                    type: "playlists"
                },
                baseUrl: function() {
                    return this.getEndpointUrl("userPlaylists", {
                        id: this.options.resource_id
                    })
                }
            })
    }),
    define("collections/user-likes", ["require", "exports", "module", "collections/user-audible-items"], function(e, t, n) {
        function s(e) {
            return e.playlist || e.track
        }
        var r = e("collections/user-audible-items"),
            i = n.exports = r.extend({
                defaults: {
                    type: "likes"
                },
                baseUrl: function() {
                    return this.getEndpointUrl("userLikes", {
                        id: this.options.resource_id
                    })
                },
                parse: function(e) {
                    var t = e.collection;
                    return t.map(s).filter(Boolean)
                }
            })
    }),
    define("collections/user-spotlight", ["require", "exports", "module", "collections/user-audible-items"], function(e, t, n) {
        var r = e("collections/user-audible-items"),
            i = n.exports = r.extend({
                defaults: {
                    type: "spotlight"
                },
                baseUrl: function() {
                    return this.getEndpointUrl("spotlightItems", {
                        id: this.options.resource_id
                    })
                }
            })
    }),
    define("models/audible", ["require", "exports", "module", "underscore", "models/playlist", "models/sound"], function(e, t, n) {
        var r = e("underscore"),
            i = e("models/playlist"),
            s = e("models/sound"),
            o = n.exports = function(e, t) {
                var n = e.resource_type || e.kind;
                return e = r.omit(e, "resource_type"), n === "playlist" ? new i(e, t) : new s(e, t)
            };
        o.getClass = function(e) {
            var t = e.resource_type;
            return t === "playlist" ? i : s
        }
    }),
    define("lib/composite-collection", ["require", "exports", "module", "models/audible", "lib/multi-collection"], function(e, t, n) {
        function o() {
            return $.Deferred().resolve()
        }

        function u(e) {
            return function() {}
        }
        var r = e("models/audible"),
            i = e("lib/multi-collection"),
            s = n.exports = i.extend({
                model: r,
                setup: function() {
                    this.next_href = !1, i.prototype.setup.apply(this, arguments)
                },
                fetch: o,
                bulkFetch: o,
                url: u("url"),
                parse: u("parse"),
                empty: u("empty"),
                setLimit: u("setLimit")
            })
    }),
    define("collections/user-audible-items", ["require", "exports", "module", "underscore", "lib/mixins/audio-source", "models/audible", "lib/collection", "lib/mixins/urn"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/mixins/audio-source"),
            s = e("models/audible"),
            o = e("lib/collection"),
            u = e("lib/mixins/urn"),
            a = n.exports = o.extend(u, i, {
                urnPrefix: "soundcloud:users",
                defaults: {
                    type: null,
                    resource_id: null
                },
                model: s,
                getSourceInfo: function() {
                    return {
                        type: "user-audible-items-" + this.options.type
                    }
                },
                getSounds: function() {
                    return r.flatten(this.models.map(function(e) {
                        return e.getSounds()
                    }))
                }
            }, {
                hashFn: function(e, t) {
                    return t && t.resource_id || null
                }
            })
    }),
    define("views/user/user-profile-group", ["require", "exports", "module", "underscore", "lib/lingua", "models/user-profile", "lib/view", "views/user/user-profile-group.tmpl", "views/user/user-profile-group.css"], function(e, t, n) {
        function a(e, t) {
            var n = "",
                r = "";
            switch (e) {
                case "spotlight":
                    n = i.t("Spotlight");
                    break;
                case "posts":
                    n = i.t("Tracks"), r = i.t("Show more tracks");
                    break;
                case "playlists":
                    n = i.t("Playlists"), r = i.t("Show more playlists");
                    break;
                case "likes":
                    n = i.t("Likes"), r = i.t("Show more likes")
            }
            return {
                title: n,
                showMore: r
            }
        }
        var r = e("underscore"),
            i = e("lib/lingua"),
            s = e("models/user-profile"),
            o = e("lib/view"),
            u = n.exports = o.extend({
                template: e("views/user/user-profile-group.tmpl"),
                css: e("views/user/user-profile-group.css"),
                ModelClass: s,
                className: "userProfileGroup g-list-wrapper",
                tagName: "section",
                requiredAttributes: ["user"],
                element2selector: {
                    "load-more": ".userProfileGroup__showMore"
                },
                defaults: {
                    type: null
                },
                getTemplateData: function(e) {
                    var t = e.user,
                        n = this.options.type,
                        i = a.call(this, n, t);
                    return r.extend(e, {
                        user: t,
                        groupType: n,
                        groupTitle: i.title,
                        showMoreText: !!i.showMore && i.showMore,
                        design: n === "playlists" ? "vertical" : "horizontal"
                    })
                }
            })
    }),
    define("lib/multi-collection", ["require", "exports", "module", "$", "underscore", "lib/backbone", "lib/hirsch", "lib/collection"], function(e, t, n) {
        function f() {
            var e = this._ignoredCollections;
            return i.find(this.sources, function(t, n) {
                return e.indexOf(n) < 0 && !t.isFullyPopulated()
            })
        }

        function l(e, t) {
            var n = e ? "on" : "off";
            t[n]("all", v, this)[n]("add", p, this)[n]("reset", h, this)[n]("remove", d, this)
        }

        function c() {
            this._map = {
                dupes: [],
                blacklist: []
            }, this.filters.reduce(function(e, t, n) {
                return e[n] = [], e
            }, this._map)
        }

        function h(e) {
            var t = this.length,
                n = !t && (!!e.length || i.last(this.sources) === e);
            e.models.forEach(function(t, r) {
                p.call(this, t, e, {
                    index: r,
                    silent: n
                })
            }.bind(this));
            if (n || this.length > t) this.lastFetchTime = Date.now();
            n && this.trigger("reset", this, {})
        }

        function p(e, t, n) {
            n = n || {};
            var r = n.index || t.indexOf(e);
            this.sources.some(function(e) {
                if (e === t) return !0;
                r += e.length
            }), this.lastFetchTime = Date.now(), w.call(this, e, r, n)
        }

        function d(e, t, n) {
            var r = n.index;
            this.sources.some(function(e) {
                if (e === t) return !0;
                r += e.length
            }), E.call(this, e, r)
        }

        function v(e) {
            switch (e) {
                case "add":
                case "remove":
                case "reset":
                case "destroy":
                    return;
                default:
                    this.trigger.apply(this, arguments)
            }
        }

        function m(e, t) {
            var n = this.length,
                r = n + this._ignore.length,
                i = r,
                s = n + e,
                o = {
                    silent: t
                },
                u = !this.lastFetchTime;
            return this.sources.every(function(t) {
                var n, a, f, l;
                do {
                    n = t.models.slice(r, r + e), f = n.length, f && (this.lastFetchTime = t.lastFetchTime || Date.now(), u && (u = !1, this.trigger("reset", this, {}))), l = this.length;
                    while (a = n.shift()) r++, w.call(this, a, i++, o);
                    e -= this.length - l
                } while (this.length < s && f);
                return r -= t.length, this.length < s && t.isFullyPopulated()
            }, this), this.length > n
        }

        function g(e) {
            var t = e,
                n, r;
            for (n = 0, r = this._ignore.length; n < r; ++n) {
                if (!(this._ignore[n] <= t)) break;
                ++t
            }
            return t
        }

        function y(e) {
            var t = g.call(this, e),
                n, r, i;
            if (e > -1)
                for (n = 0, r = this.sources.length; n < r; ++n) {
                    i = this.sources[n];
                    if (!(t >= i.length)) return {
                        source: i,
                        index: t,
                        model: i.at(t)
                    };
                    t -= i.length
                }
        }

        function b(e) {
            var t = this.sources.indexOf(e);
            t > -1 && t < this.sources.length - 1 && this._ignoredCollections.push(t)
        }

        function w(e, t, n) {
            var r, i, s = this._map;
            i = t === this._sourceModels.length ? function(e, t) {
                e.push(t)
            } : function(e, n) {
                e.splice(t, 0, n)
            }, e instanceof this.model || (e = this.extractModel(e, t));
            if (!e) return;
            r = this.indexOfEquivalentModel(e, this._sourceModels), i(this._sourceModels, e), i(s.blacklist, r > -1 ? s.blacklist[r] : !0), r === -1 ? i(s.dupes, !0) : r < t ? i(s.dupes, !1) : (s.dupes[r] = !1, i(s.dupes, !0)), this.filters.forEach(function(t, n) {
                i(s[n], !!t.call(this, e))
            }, this), x.call(this), T.call(this, n)
        }

        function E(e, t) {
            var n = this._map,
                r = n.dupes,
                s, o, u, a;
            a = t === this._sourceModels.length - 1 ? function(e) {
                e.pop()
            } : function(e) {
                e.splice(t, 1)
            };
            if (r[t])
                for (o = t + 1, u = i.last(this._ignore); o <= u; ++o) r[o] === !1 && (s = this._sourceModels[o], this.compareModels(e, s) && (r[o] = !0));
            a(this._sourceModels), a(r), a(n.blacklist), this.filters.forEach(function(e, t) {
                a(n[t])
            }), x.call(this), T.call(this)
        }

        function S(e, t) {
            var n = this._map,
                r;
            for (r = this._sourceModels.length; r--;)
                if (this.compareModels(e, this._sourceModels[r])) {
                    n.blacklist[r] = t;
                    if (n.dupes[r]) break
                } x.call(this), T.call(this)
        }

        function x() {
            var e = this._map;
            this._ignore = this._sourceModels.reduce(function(t, n, r) {
                return i.every(i.pluck(e, r)) || t.push(r), t
            }, [])
        }

        function T(e) {
            function c(e, t) {
                return n.indexOf(t) === -1
            }
            var t, n = this._ignore,
                r, u, a, f, l;
            t = this._sourceModels.filter(c), l = o(this.models, t, this.compareModels);
            for (r = 0, u = l.length; r < u; r += 2) a = l[r + 1], l[r] ? (f = t[a], this.add(f, i.defaults({
                at: a,
                parse: !(f instanceof s.Model)
            }, e))) : this.remove(this.at(a), {
                _propagateToSource: !1
            })
        }
        var r = e("$"),
            i = e("underscore"),
            s = e("lib/backbone"),
            o = e("lib/hirsch"),
            u = e("lib/collection"),
            a = n.exports = u.extend({
                sources: null,
                _sourceModels: null,
                filters: null,
                _map: null,
                _ignore: null,
                _fetchDeferred: null,
                _bulkFetchDeferred: null,
                _ignoredCollections: null,
                setup: function() {
                    this.sources = this.setupSources(), this.sources.forEach(l.bind(this, !0)), this._sourceModels = [], this.filters || (this.filters = []), c.call(this), this._ignore = [], this._ignoredCollections = [], m.call(this, this.options.limit, !0)
                },
                setupSources: function() {},
                bulkFetch: function(e, t) {
                    var n, i = this.options.limit,
                        s = e - this.length;
                    return n = this._bulkFetchDeferred, n && !t ? n : (n || (n = this._bulkFetchDeferred = r.Deferred().always(function() {
                        this._bulkFetchDeferred = null, this.options.limit = i
                    }.bind(this))), s <= 0 || this.isFullyPopulated() ? n.resolve() : (this.options.limit = s, this.fetch().done(function() {
                        this.bulkFetch(e, !0)
                    }.bind(this)).fail(n.reject), n))
                },
                fetch: function(e) {
                    var t, n, s, o, u, a;
                    return e || (e = {}), s = this.options.limit, u = this.length, o = this._fetchDeferred, o && !e.internalFetch ? this._fetchDeferred : (o || (o = this._fetchDeferred = r.Deferred().always(function() {
                        this._fetchDeferred = null
                    }.bind(this)), o.originalLimit = s), m.call(this, s, e.silent) || (t = f.call(this)), t ? (e.add = !!this.length, e.reset = !e.add, e.remove = !1, a = this, n = t.options.limit, t.setLimit(s), t.fetch(e).fail(function() {
                        a.sources.indexOf(t) === a.sources.length - 1 ? o.reject() : b.call(a, t)
                    }).always(function() {
                        if (o.state() === "rejected") return;
                        var r = s - (a.length - u),
                            f;
                        t.setLimit(n), r <= 0 ? (a.options.limit = o.originalLimit, t.setLimit(o.originalLimit), o.resolve()) : (a.options.limit = r, f = i.clone(e), f.internalFetch = !0, delete f.url, a.fetch(f))
                    }), o) : o.resolve({}))
                },
                extractModel: null,
                blacklist: function(e) {
                    S.call(this, e, !1)
                },
                unblacklist: function(e) {
                    S.call(this, e, !0)
                },
                remove: function(e, t) {
                    var n = !t || t._propagateToSource === undefined || t._propagateToSource;
                    return n ? (Array.isArray(e) || (e = [e]), e.forEach(function(e) {
                        var t = y.call(this, this.indexOf(e));
                        t && t.source.remove(t.model)
                    }, this)) : u.prototype.remove.call(this, e, i.defaults({
                        _propagateToSource: !1
                    }, t)), this
                },
                isFullyPopulated: function() {
                    return !f.call(this)
                },
                recalculateFilters: function() {
                    this.filters.forEach(function(e, t) {
                        this._sourceModels.forEach(function(n, r) {
                            this._map[t][r] = !!e.call(this, n)
                        }, this)
                    }, this), x.call(this), T.call(this)
                },
                setQueryForFilters: function(e) {
                    this._queryData = e, this.recalculateFilters()
                }
            }, {
                onCleanup: function(e) {
                    var t;
                    while (t = e.sources.pop()) t.release(), l.call(e, !1, t);
                    e._sourceModels = e._map = null
                }
            })
    }),
    define("views/user/user-profile-group.tmpl", ["vendor/handlebars-runtime", "views/user/user-audible-items-list"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression;
            return s += '<h1 class="userProfileGroup__title g-font-14 sc-text sc-truncate">' + a((o = t && t.groupTitle, typeof o === u ? o.apply(t) : o)) + "</h1>\n" + a(n.$view.call(t, "views/user/user-audible-items-list", {
                hash: {
                    key: "listView",
                    type: t && t.groupType,
                    resource_id: (o = t && t.user, o == null || o === !1 ? o : o.id),
                    design: t && t.design,
                    initialDisplay: (o = t && t._options, o == null || o === !1 ? o : o.initialDisplay),
                    showMoreText: t && t.showMoreText
                },
                data: i
            })) + "\n", s
        })
    }),
    define("views/user/user-profile-group.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".userProfileGroup{background:#fff;margin:0 0 9px}.userProfileGroup__title{padding:0 10px;line-height:55px;border-bottom:1px solid #f2f2f2}")), data = null
    }),
    define("lib/hirsch", ["require", "exports", "module"], function(e, t, n) {
        function u(e, t, n) {
            var u = [],
                a = [
                    [],
                    []
                ],
                f = [
                    [],
                    []
                ],
                h = [],
                p;
            return n || (n = c), l(0, e.length, 0, t.length, e, t, u, a, f, n), p = 0, u.forEach(function(e) {
                switch (e) {
                    case i:
                    case s:
                        h.push(!1, p);
                        break;
                    case r:
                        ++p
                }
            }), p = 0, u.forEach(function(e) {
                switch (e) {
                    case o:
                    case s:
                        h.push(!0, p);
                    case r:
                        ++p
                }
            }), h
        }

        function a(e, t, n, r, i, s, o, u) {
            var a, f, l;
            i[e % 2][n] = 0;
            for (f = n + 1; f <= r; f++) i[e % 2][f] = i[e % 2][f - 1] + 1;
            for (a = e + 1; a <= t; a++) {
                i[a % 2][n] = i[(a - 1) % 2][n] + 1;
                for (f = n + 1; f <= r; f++) l = i[(a - 1) % 2][f - 1], u(s[a - 1], o[f - 1]) || l++, i[a % 2][f] = Math.min(l, Math.min(i[(a - 1) % 2][f] + 1, i[a % 2][f - 1] + 1))
            }
        }

        function f(e, t, n, r, i, s, o, u) {
            var a, f, l;
            i[t % 2][r] = 0;
            for (f = r - 1; f >= n; f--) i[t % 2][f] = i[t % 2][f + 1] + 1;
            for (a = t - 1; a >= e; a--) {
                i[a % 2][r] = i[(a + 1) % 2][r] + 1;
                for (f = r - 1; f >= n; f--) l = i[(a + 1) % 2][f + 1], u(s[a], o[f]) || l++, i[a % 2][f] = Math.min(l, Math.min(i[(a + 1) % 2][f] + 1, i[a % 2][f + 1] + 1))
            }
        }

        function l(e, t, n, u, c, h, p, d, v, m) {
            var g, y, b, w, E, S, x;
            if (t <= e)
                for (g = n; g < u; g++) p.push(o);
            else if (u <= n)
                for (g = e; g < t; g++) p.push(i);
            else if (t - 1 === e) {
                y = c[e], b = n;
                for (g = n + 1; g < u; g++) m(h[g], y) && (b = g);
                for (g = n; g < u; g++) g === b ? m(h[g], y) ? p.push(r) : p.push(s) : p.push(o)
            } else {
                w = Math.floor((e + t) / 2), a(e, w, n, u, d, c, h, m), f(w, t, n, u, v, c, h, m), E = n, S = Infinity;
                for (g = n; g <= u; g++) x = d[w % 2][g] + v[w % 2][g], x < S && (S = x, E = g);
                l(e, w, n, E, c, h, p, d, v, m), l(w, t, E, u, c, h, p, d, v, m)
            }
        }

        function c(e, t) {
            return e === t
        }
        var r = 0,
            i = 1,
            s = 2,
            o = 3;
        n.exports = u
    }),
    define("views/user/user-audible-items-list", ["require", "exports", "module", "underscore", "views/sound/audible-badge", "lib/views/bucket-list", "collections/user-likes", "collections/user-posts", "collections/user-playlists", "collections/user-spotlight"], function(e, t, n) {
        var r = e("underscore"),
            i = e("views/sound/audible-badge"),
            s = e("lib/views/bucket-list"),
            o = {
                likes: e("collections/user-likes"),
                posts: e("collections/user-posts"),
                playlists: e("collections/user-playlists"),
                spotlight: e("collections/user-spotlight")
            },
            u = "user-audible-items",
            a = n.exports = s.extend({
                Subview: i,
                getSubviewArgs: function() {
                    var e = s.prototype.getSubviewArgs.apply(this, arguments);
                    return r.defaults(e, this.options)
                },
                className: u,
                itemClassName: "user-audible-item g-list-item",
                defaults: {
                    type: null,
                    design: "horizontal"
                },
                setup: function(e) {
                    var t = e.design === "vertical",
                        n = " " + u + "-" + this.options.type,
                        r = o[this.options.type];
                    this.el.className += n + (t ? " sc-media g-list g-list-vertical" : " g-list"), this.collection = new r(null, {
                        resource_id: this.options.resource_id
                    })
                }
            })
    }),
    define("views/sound/audible-badge", ["require", "exports", "module", "underscore", "models/audible", "lib/views/mixins/deferred-images", "lib/view", "views/sound/audible-badge.tmpl"], function(e, t, n) {
        var r = e("underscore"),
            i = e("models/audible"),
            s = e("lib/views/mixins/deferred-images"),
            o = e("lib/view"),
            u = n.exports = o.extend(s, {
                template: e("views/sound/audible-badge.tmpl"),
                ModelClass: i,
                className: "audibleBadge",
                getTemplateData: function() {
                    return r.extend(this.options, {
                        isPlaylist: this.model.get("kind") === "playlist"
                    })
                }
            })
    }),
    define("lib/views/bucket-list", ["require", "exports", "module", "lib/views/list", "lib/views/load-more"], function(e, t, n) {
        function o(e) {
            e.stopPropagation(), this.getListItemViews().length < this.collection.length ? this.addAvailableItems() : this.collection.fetch({
                add: !0,
                remove: !1,
                reset: !1
            }).done(function(e) {
                e.next_href || this.subviews.loadMore._dispose()
            }.bind(this))
        }

        function u() {
            if (!this.options.showMoreText) return;
            var e = this.addSubview(new i({
                text: this.options.showMoreText
            }), "loadMore");
            (!this.collection.isPopulated() || !this.collection.isFullyPopulated()) && this.getListContainer().append(e.render().el)
        }
        var r = e("lib/views/list"),
            i = e("lib/views/load-more"),
            s = n.exports = r.extend({
                defaults: {
                    initialDisplay: null,
                    showMoreText: "",
                    maxDisplay: 0
                },
                bubbleEvents: {
                    loadMore: o
                },
                setup: function() {
                    r.prototype.setup.call(this)
                },
                renderDecorate: function() {
                    r.prototype.renderDecorate.call(this), this.collection.length && u.call(this)
                },
                addInitialItems: function() {
                    var e, t = this.getModelsToRender(),
                        n = Math.min(this.options.initialDisplay || Infinity, t.length);
                    for (e = 0; e < n; ++e) this.createAndInsertListItemView(t[e], -1)
                },
                addAvailableItems: function() {
                    var e = this.getListItemViews().length,
                        t = this.getModelsToRender(),
                        n = t.length;
                    for (; e < n; ++e) this.createAndInsertListItemView(t[e], -1)
                }
            })
    }),
    define("views/sound/audible-badge.tmpl", ["vendor/handlebars-runtime", "views/sound/playlist-badge", "views/sound/sound-badge"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function f(e, t) {
                var r = "";
                return r += " " + u(n.$view.call(e, "views/sound/playlist-badge", {
                    hash: {
                        resource_id: e && e.resource_id,
                        design: e && e.design
                    },
                    data: t
                })) + "\n", r
            }

            function l(e, t) {
                var r = "";
                return r += " " + u(n.$view.call(e, "views/sound/sound-badge", {
                    hash: {
                        resource_id: e && e.resource_id
                    },
                    data: t
                })) + "\n", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = this;
            o = n["if"].call(t, t && t.isPlaylist, {
                hash: {},
                inverse: a.program(3, l, i),
                fn: a.program(1, f, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("lib/views/load-more", ["require", "exports", "module", "lib/view", "lib/views/load-more.css"], function(e, t, n) {
        function s() {
            this.bubble("loadMore")
        }
        var r = e("lib/view"),
            i = n.exports = r.extend({
                css: e("lib/views/load-more.css"),
                className: "loadMore",
                defaults: {
                    text: ""
                },
                events: {
                    "click .loadMoreButton": s
                },
                setup: function(e) {
                    this.$el.addClass(e.size)
                },
                template: function() {
                    return '<a role="button" class="loadMoreButton sc-text g-font-12">' + this.options.text + "</a>"
                }
            })
    }),
    define("views/sound/playlist-badge", ["require", "exports", "module", "lib/views/mixins/deferred-images", "models/playlist", "lib/view", "views/sound/playlist-badge.css", "views/sound/playlist-badge.tmpl"], function(e, t, n) {
        function f(e) {
            return e.design === "vertical"
        }

        function l(e) {
            var t = e ? "on" : "off";
            this.model[t]("play pause", c, this)
        }

        function c() {
            h.call(this)
        }

        function h() {
            if (this.disposed) return;
            this.toggleState("playing", this.model.isPlaying())
        }
        var r = e("lib/views/mixins/deferred-images"),
            i = e("models/playlist"),
            s = e("lib/view"),
            o = 15,
            u = (document.body.offsetWidth - o * 2) / 2,
            a = n.exports = s.extend(r, {
                ModelClass: i,
                css: e("views/sound/playlist-badge.css"),
                template: e("views/sound/playlist-badge.tmpl"),
                className: "playlistBadge g-badge",
                defaults: {
                    design: "horizontal"
                },
                requiredAttributes: ["title"],
                setup: function(e) {
                    f(e) && (this._verticalItemSize = u, this.el.style.width = u + "px"), l.call(this, !0)
                },
                dispose: function() {
                    l.call(this, !1)
                },
                renderDecorate: function() {
                    h.call(this)
                },
                getTemplateData: function(e) {
                    return e.is_vertical = f(this.options), e.vert_item_size = this._verticalItemSize, e
                }
            })
    }),
    define("lib/views/load-more.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".loadMore{clear:both;overflow:hidden}.loadMoreButton{border-top:1px solid #f2f2f2;text-align:center;display:block;line-height:55px;background:#fff;transition:background-color .1s linear,color .1s linear}.loadMoreButton:active{background:#f2f2f2}")), data = null
    }),
    define("views/sound/playlist-badge.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".playlistBadge .playlistBadge__indicator{display:none}.playlistBadge>.g-badge-link:active{background:inherit}.playlistBadge.playing .playlistBadge__indicator{display:block}")), data = null
    }),
    define("views/sound/playlist-badge.tmpl", ["vendor/handlebars-runtime", "views/stats/playlist-stats", "lib/views/promoted"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                return "g-badge-vertical"
            }

            function c(e, t) {
                var r = "";
                return r += " " + u(n.$image.call(e, e, {
                    hash: {
                        size: e && e.vert_item_size,
                        defer: !0
                    },
                    data: t
                })) + " ", r
            }

            function h(e, t) {
                var r = "";
                return r += " " + u(n.$image.call(e, e, {
                    hash: {
                        size: 120,
                        "class": "sc-media-left",
                        defer: !0
                    },
                    data: t
                })) + " ", r
            }

            function p(e, t) {
                var r = "";
                return r += " " + u(n.$view.call(e, "lib/views/promoted", {
                    hash: {},
                    data: t
                })) + " ", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = this,
                f = "function";
            s += '<a class="g-badge-link ', o = n["if"].call(t, t && t.is_vertical, {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += '" href="' + u(n.$route.call(t, "playlist", t, {
                hash: {},
                data: i
            })) + '"> ', o = n["if"].call(t, t && t.is_vertical, {
                hash: {},
                inverse: a.program(5, h, i),
                fn: a.program(3, c, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += ' <div class="sc-media g-badge-info"> <h2 class="g-badge-username g-font-14 sc-truncate">' + u((o = t && t.username, typeof o === f ? o.apply(t) : o)) + '</h2> <h3 class="g-badge-title g-font-14 sc-truncate">' + u((o = t && t.title, typeof o === f ? o.apply(t) : o)) + '</h3> <div class="g-badge-stats">' + u(n.$view.call(t, "views/stats/playlist-stats", {
                hash: {
                    resource_id: t && t._resource_id
                },
                data: i
            })) + "</div> </div> ", o = n["if"].call(t, t && t.is_promoted, {
                hash: {},
                inverse: a.noop,
                fn: a.program(7, p, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n</a>\n", s
        })
    }),
    define("views/stats/playlist-stats", ["require", "exports", "module", "models/playlist", "lib/views/mixins/stats", "lib/view"], function(e, t, n) {
        var r = e("models/playlist"),
            i = e("lib/views/mixins/stats"),
            s = e("lib/view"),
            o = n.exports = s.extend(i, {
                ModelClass: r,
                defaults: {
                    resource_id: null,
                    resource_type: "playlist"
                },
                requiredAttributes: ["track_count"],
                displayStats: ["track_count"]
            })
    })