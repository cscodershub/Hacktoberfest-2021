define("layouts/search", ["require", "exports", "module", "config", "lib/lingua", "lib/layouts/page", "lib/helpers/search-helper", "lib/url"], function(e, t, n) {
        var r = e("config"),
            i = e("lib/lingua"),
            s = e("lib/layouts/page"),
            o = e("lib/helpers/search-helper"),
            u = e("lib/url"),
            a = n.exports = s.extend({
                setup: function(e) {
                    var t = u.parse(window.location.href),
                        n = o.getValidParams(t.query),
                        s = e.category || "all",
                        a, f;
                    n.q || (f = /^q\[/g, Object.keys(n).some(function(e) {
                        return f.test(e) ? (n.q = n[e], delete n[e], r.get("router").navigate(u.stringify({
                            path: t.path,
                            query: n
                        }), {
                            trigger: !1,
                            replace: !0
                        }), !0) : !1
                    }));
                    switch (s) {
                        case "all":
                            a = i.t("Search", null, {
                                comment: "Search page title, when the user is searching all categories"
                            });
                            break;
                        case "tracks":
                            a = i.t("Search tracks", null, {
                                comment: "Search page title, when user searched over tracks"
                            });
                            break;
                        case "playlists":
                            a = i.t("Search playlists", null, {
                                comment: "Search page title, when user searched over playlists"
                            });
                            break;
                        case "people":
                            a = i.t("Search people", null, {
                                comment: "Search page title, when user searched over people"
                            });
                            break;
                        case "groups":
                            a = i.t("Search groups", null, {
                                comment: "Search page title, when user searched over groups"
                            });
                            break;
                        default:
                            a = i.t("Search [[category]]", {
                                category: s
                            }, {
                                comment: "Search page title, where category is a category name"
                            })
                    }
                    return this.setTitle(a), this.setViews({
                        "l-main": ["views/search/search", {
                            category: s,
                            q: n.q,
                            params: n
                        }]
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
    define("views/search/search", ["require", "exports", "module", "lib/view", "views/search/search.tmpl", "views/search/search.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = n.exports = r.extend({
                template: e("views/search/search.tmpl"),
                css: e("views/search/search.css"),
                className: "search",
                defaults: {
                    category: "all",
                    q: "",
                    params: null
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
    define("views/search/search.tmpl", ["vendor/handlebars-runtime", "views/search/categories", "views/search/results"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function f(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/search/categories", {
                    hash: {
                        q: (i = e && e._options, i == null || i === !1 ? i : i.q),
                        category: (i = e && e._options, i == null || i === !1 ? i : i.category)
                    },
                    data: t
                })) + " " + u(n.$view.call(e, "views/search/results", {
                    hash: {
                        q: (i = e && e._options, i == null || i === !1 ? i : i.q),
                        category: (i = e && e._options, i == null || i === !1 ? i : i.category),
                        params: (i = e && e._options, i == null || i === !1 ? i : i.params)
                    },
                    data: t
                })) + "\n", r
            }

            function l(e, t) {
                var r = "";
                return r += ' <h1 class="search__blank search__banner g-font-20">' + u(n.$t.call(e, "Find people, tracks and playlists", {
                    hash: {},
                    data: t
                })) + "</h1>\n", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = this;
            o = n["if"].call(t, (o = t && t._options, o == null || o === !1 ? o : o.q), {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, f, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += "\n", o = n.unless.call(t, (o = t && t._options, o == null || o === !1 ? o : o.q), {
                hash: {},
                inverse: a.noop,
                fn: a.program(3, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("views/search/categories", ["require", "exports", "module", "lib/view", "views/search/categories.tmpl", "views/search/categories.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = n.exports = r.extend({
                tagName: "nav",
                template: e("views/search/categories.tmpl"),
                css: e("views/search/categories.css"),
                className: "categories g-font-14",
                getTemplateData: function(e) {
                    switch (e._options.category) {
                        case "playlists":
                            e.is_playlists = !0;
                            break;
                        case "people":
                            e.is_people = !0;
                            break;
                        case "tracks":
                            e.is_sounds = !0;
                            break;
                        default:
                            e.is_all = !0
                    }
                }
            })
    }),
    define("views/search/results", ["require", "exports", "module", "underscore", "lib/lingua", "models/search-with-ht", "lib/views/mixins/throbbing", "lib/view", "views/search/results.tmpl", "views/search/results.css"], function(e, t, n) {
        function f(e) {
            var t = e.map(function(e) {
                var t = e.count > 500 ? "500+" : String(e.count);
                switch (e.modelKind) {
                    case "tracks":
                        return i.tp("%d track", "[[count]] tracks", e.count, {
                            count: t
                        }, {
                            context: "searchResults"
                        });
                    case "users":
                        return i.tp("%d person", "[[count]] people", e.count, {
                            count: t
                        });
                    case "playlists":
                        return i.tp("%d playlist", "[[count]] playlists", e.count, {
                            count: t
                        });
                    default:
                        return null
                }
            }).filter(Boolean).join(", ");
            return i.t("Found [[joinedCounts]]", {
                joinedCounts: t
            }, {
                context: 'eg. "Found 12 tracks, 1 person"'
            })
        }
        var r = e("underscore"),
            i = e("lib/lingua"),
            s = e("models/search-with-ht"),
            o = e("lib/views/mixins/throbbing"),
            u = e("lib/view"),
            a = n.exports = u.extend(o, {
                requiredAttributes: ["premium_result_count", "free_result_count"],
                template: e("views/search/results.tmpl"),
                css: e("views/search/results.css"),
                className: "searchResults",
                defaults: {
                    q: "",
                    category: "all"
                },
                setup: function(e) {
                    this.model = new s({
                        q: e.q,
                        category: e.category
                    })
                },
                getTemplateData: function(e) {
                    var t = r.filter([{
                        modelKind: "tracks",
                        count: e.free_tracks_count
                    }, {
                        modelKind: "users",
                        count: e.users_count
                    }, {
                        modelKind: "playlists",
                        count: e.playlist_count
                    }], function(e) {
                        return e.count > 0
                    });
                    return e.hasPremiumResults = e.premium_result_count > 0, e.hasFreeResults = e.free_result_count > 0, e.hasAnyResults = e.hasPremiumResults || e.hasFreeResults, e.resultCountTitle = f(t), e
                }
            })
    }),
    define("views/search/categories.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function c(e, t) {
                return "active"
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this,
                f = n.blockHelperMissing,
                l = this.escapeExpression;
            s += '<ul> <li class="categories__category ', o = (o = (o = t && t.is_all, typeof o === u ? o.apply(t) : o), f.call(t, o, {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, c, i),
                data: i
            }));
            if (o || o === 0) s += o;
            s += '"> <a class="g-font-14 sc-text sc-font-light" href="' + l(n.$route.call(t, "search", "", (o = t && t._options, o == null || o === !1 ? o : o.q), {
                hash: {},
                data: i
            })) + '">' + l(n.$t.call(t, "All", {
                hash: {
                    _comment: "Search category name, search over all"
                },
                data: i
            })) + '</a> </li> <li class="categories__category ', o = (o = (o = t && t.is_sounds, typeof o === u ? o.apply(t) : o), f.call(t, o, {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, c, i),
                data: i
            }));
            if (o || o === 0) s += o;
            s += '"> <a class="g-font-14 sc-text sc-font-light" href="' + l(n.$route.call(t, "search", "tracks", (o = t && t._options, o == null || o === !1 ? o : o.q), {
                hash: {},
                data: i
            })) + '">' + l(n.$t.call(t, "Tracks", {
                hash: {
                    _comment: "Search category name, search over tracks"
                },
                data: i
            })) + '</a> </li> <li class="categories__category ', o = (o = (o = t && t.is_playlists, typeof o === u ? o.apply(t) : o), f.call(t, o, {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, c, i),
                data: i
            }));
            if (o || o === 0) s += o;
            s += '"> <a class="g-font-14 sc-text sc-font-light" href="' + l(n.$route.call(t, "search", "playlists", (o = t && t._options, o == null || o === !1 ? o : o.q), {
                hash: {},
                data: i
            })) + '">' + l(n.$t.call(t, "Playlists", {
                hash: {
                    _comment: "Search category name, search over playlists"
                },
                data: i
            })) + '</a> </li> <li class="categories__category ', o = (o = (o = t && t.is_people, typeof o === u ? o.apply(t) : o), f.call(t, o, {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, c, i),
                data: i
            }));
            if (o || o === 0) s += o;
            return s += '"> <a class="g-font-14 sc-text sc-font-light" href="' + l(n.$route.call(t, "search", "people", (o = t && t._options, o == null || o === !1 ? o : o.q), {
                hash: {},
                data: i
            })) + '">' + l(n.$t.call(t, "People", {
                hash: {
                    _comment: "Search category name, search over people"
                },
                data: i
            })) + "</a> </li>\n</ul>\n", s
        })
    }),
    define("views/search/categories.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".categories{background:#e5e5e5;border-bottom:1px solid #d6d6d6;font-size:0}.categories__category{position:relative;display:inline-block;margin-bottom:-1px;padding:10px 10px 16px;margin-top:7px;min-width:70px;text-align:center}.categories__category:first-child{margin-left:14px}.categories__category.active{background:#fff;border:1px solid #d6d6d6;border-bottom:none;border-radius:2px 2px 0 0}.categories__category::before{content:'';position:absolute;background:#d6d6d6;height:24px;width:1px;left:0;top:7px}.categories__category:first-child:not(.active)::before{display:none}.categories__category.active::before,.categories__category.active::after{content:'';position:absolute;width:4px;height:4px;border:1px solid #d6d6d6;background:none;border-top:0;bottom:0;top:auto;right:auto;z-index:1}.categories__category.active+.categories__category::before{display:none}.categories__category.active::before{left:-4px;border-left:0;border-bottom-right-radius:2px;box-shadow:2px 0 #fff}.categories__category.active::after{right:-4px;border-right:0;border-bottom-left-radius:2px;box-shadow:-2px 0 #fff}")), data = null
    }),
    define("models/search-with-ht", ["require", "exports", "module", "underscore", "lib/model", "collections/search"], function(e, t, n) {
        function a(e, t, n) {
            var i = n.facets && n.facets[0] && n.facets[0].facets || [];
            return t === "all" ? (r.findWhere(i, {
                value: e
            }) || {
                count: 0
            }).count : t === o[e] ? n.total_results : 0
        }
        var r = e("underscore"),
            i = e("lib/model"),
            s = e("collections/search"),
            o = {
                sound: "tracks",
                person: "people",
                set: "playlists"
            },
            u = n.exports = i.extend({
                subcollections: [],
                baseUrl: function() {
                    return s.apiWebEndpoint(this.get("category"), this.get("q"))
                },
                parse: function(e) {
                    var t = this.get("category");
                    return this.subcollections.push(s.constructFromResponse(t, this.get("q"), e), s.constructFromResponse("ht", this.get("q"), e.premium_content || {})), {
                        premium_result_count: e.premium_content ? e.premium_content.total_results : 0,
                        free_result_count: e.total_results,
                        free_tracks_count: a("sound", t, e),
                        users_count: a("person", t, e),
                        playlist_count: a("set", t, e)
                    }
                }
            }, {
                onCleanup: function(e) {
                    r.invoke(e.subcollections, "release"), e.subcollections = [], i.onCleanup(e)
                },
                hashFn: function(e) {
                    return (e.category || "all") + "-" + e.q
                }
            })
    }),
    define("lib/views/mixins/throbbing", ["require", "exports", "module", "lib/views/loading", "lib/mixin"], function(e, t, n) {
        var r = e("lib/views/loading"),
            i = e("lib/mixin"),
            s = n.exports = new i({
                override: {
                    LoadingView: r
                }
            })
    }),
    define("views/search/results.tmpl", ["vendor/handlebars-runtime", "views/search/premium-bucket", "views/search/results-list"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var r = "",
                    i;
                r += " ", i = n["if"].call(e, e && e.hasPremiumResults, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(2, c, t),
                    data: t
                });
                if (i || i === 0) r += i;
                r += " ", i = n["if"].call(e, e && e.hasFreeResults, {
                    hash: {},
                    inverse: f.noop,
                    fn: f.program(4, h, t),
                    data: t
                });
                if (i || i === 0) r += i;
                return r += "\n", r
            }

            function c(e, t) {
                var r = "",
                    i;
                return r += ' <div class="searchResults__section"> <h1 class="searchResults__sectionTitle searchResults__sectionTitleWithHelp sc-truncate g-font-12 sc-text-light sc-text"> ' + u(n.$tp.call(e, e && e.premium_result_count, "Found %d SoundCloud Go+ result", "Found %d SoundCloud Go+ results", {
                    hash: {},
                    data: t
                })) + ' <a class="searchResults__helpLink" href="' + u(n.$route.call(e, "consumerPremium", {
                    hash: {},
                    data: t
                })) + '"></a> </h1> ' + u(n.$view.call(e, "views/search/premium-bucket", {
                    hash: {
                        q: (i = e && e._options, i == null || i === !1 ? i : i.q),
                        showMoreText: n.$t.call(e, "Show more SoundCloud Go+ results", {
                            hash: {},
                            data: t
                        })
                    },
                    data: t
                })) + " </div> ", r
            }

            function h(e, t) {
                var r = "",
                    i;
                return r += ' <div class="searchResults__section"> <h1 class="searchResults__sectionTitle g-font-12 sc-text-light sc-text sc-truncate">' + u((i = e && e.resultCountTitle, typeof i === a ? i.apply(e) : i)) + "</h1> " + u(n.$view.call(e, "views/search/results-list", {
                    hash: {
                        q: (i = e && e._options, i == null || i === !1 ? i : i.q),
                        category: (i = e && e._options, i == null || i === !1 ? i : i.category),
                        params: (i = e && e._options, i == null || i === !1 ? i : i.params)
                    },
                    data: t
                })) + " </div> ", r
            }

            function p(e, t) {
                var r = "";
                return r += ' <div class="searchResults__noResultContainer"> <h1 class="searchResults__noResult search__banner g-font-20">' + u(n.$t.call(e, "Sorry, nothing matches your search.", {
                    hash: {},
                    data: t
                })) + "</h1> </div>\n", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = "function",
                f = this;
            o = n["if"].call(t, t && t.hasAnyResults, {
                hash: {},
                inverse: f.program(6, p, i),
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("views/search/results.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".searchResults{background:#f2f2f2}.searchResults__section{background:#fff;border-bottom:1px solid #e5e5e5}.searchResults__section+.searchResults__section{margin-top:10px;border-top:1px solid #e5e5e5}.searchResults__sectionTitle{padding:0 10px;line-height:48px;border-bottom:1px solid #f2f2f2}.searchResults__sectionTitleWithHelp{position:relative;padding-right:48px}.searchResults__helpLink{display:block;position:absolute;height:48px;width:48px;background-image:url(https://mobi.sndcdn.com/assets/images/ldpi/search/help_icon-b8a7b6cd.png);background-repeat:no-repeat;background-size:20px 20px;background-position:center;top:0;right:0}.searchResults__noResultContainer{background:#fff;padding-bottom:40px}.searchResults__noResult{background-image:url(https://mobi.sndcdn.com/assets/images/ldpi/search/search_noresult-bd02f9a1.png);background-color:#fff}")), data = null
    }),
    define("collections/search", ["require", "exports", "module", "underscore", "lib/mixins/audio-source", "lib/collection", "lib/endpoints", "vendor/event-gateway/event-gateway", "models/search"], function(e, t, n) {
        function h(e) {
            return r.compact(r.map(e, function(e) {
                return e.kind === "group" ? null : {
                    origin: e,
                    kind: e.kind
                }
            }))
        }

        function p(e) {
            var t = e.promoted,
                n = l[e.type];
            return n ? {
                ad_urn: t.ad_urn,
                campaign: "promoted",
                kind: n,
                origin: e[n],
                tracking: t.tracking
            } : (window.console.warn("Unknown promoted type:", e.type), null)
        }
        var r = e("underscore"),
            i = e("lib/mixins/audio-source"),
            s = e("lib/collection"),
            o = e("lib/endpoints"),
            u = e("vendor/event-gateway/event-gateway"),
            a = e("models/search"),
            f = {
                ht: "tracks",
                tracks: "tracks",
                people: "users",
                playlists: "playlists"
            },
            l = {
                "user-promoted": "user",
                "track-promoted": "track",
                "playlist-promoted": "playlist"
            },
            c = n.exports = s.extend(i, {
                model: a,
                defaults: {
                    limit: 20,
                    index: 0
                },
                baseUrl: function() {
                    return c.apiWebEndpoint(this.options.category, this.options.q)
                },
                parse: function(e) {
                    return h(e.collection || [])
                },
                soundAt: function(e) {
                    var t = this.at(e);
                    return t && t.getAudible()
                },
                getSourceInfo: function() {
                    return {
                        type: "search"
                    }
                },
                getSounds: function() {
                    return r.flatten(this.models.map(function(e) {
                        return e.getAudible()
                    }).filter(Boolean).map(function(e) {
                        return e.getSounds()
                    }))
                },
                audibleAt: function(e) {
                    var t = this.at(e);
                    return t && t.getAudible()
                },
                couldContainSounds: function() {
                    var e = this.options.category;
                    return e !== "groups" && e !== "people"
                }
            }, {
                apiWebEndpoint: function(e, t) {
                    var n = f[e],
                        r = {
                            q: t || ""
                        };
                    return e === "ht" && (r["filter.content_tier"] = "SUB_HIGH_TIER"), e === "all" && (r.facet = "model"), r.user_id = u.getAnonymousId(), n ? o.getEndpointUrl("searchCategory", {
                        category: n
                    }, r) : o.getEndpointUrl("search", null, r)
                },
                constructFromResponse: function(e, t, n) {
                    var r = h(n.collection || []),
                        i = n.promoted_content ? p(n.promoted_content) : null;
                    i && r.unshift(i);
                    var s = new c(r, {
                        category: e,
                        q: t
                    });
                    return s.next_href = n.next_href || !1, !s.lastFetchTime && !n.next_href && !n.query_urn && (s.next_href = n.total_results > r.length ? null : !1), s.lastFetchTime = Date.now(), s
                },
                hashFn: function(e, t) {
                    return (t.category || "all") + "-" + t.q
                }
            })
    }),
    define("views/search/premium-bucket", ["require", "exports", "module", "lib/views/bucket-list", "collections/search", "views/search/item"], function(e, t, n) {
        var r = e("lib/views/bucket-list"),
            i = e("collections/search"),
            s = e("views/search/item"),
            o = n.exports = r.extend({
                Subview: s,
                className: "premiumTracksBucketList",
                itemClassName: "user-audible-item g-list-item",
                defaults: {
                    q: null
                },
                setup: function(e) {
                    this.collection = new i(null, {
                        category: "ht",
                        q: e.q
                    })
                }
            })
    }),
    define("views/search/results-list", ["require", "exports", "module", "lib/views/mixins/has-queue-source", "lib/views/lazy-loading-list", "collections/search", "views/search/item"], function(e, t, n) {
        var r = e("lib/views/mixins/has-queue-source"),
            i = e("lib/views/lazy-loading-list"),
            s = e("collections/search"),
            o = e("views/search/item"),
            u = n.exports = i.extend(r, {
                className: "searchResultsList g-list",
                Subview: o,
                itemClassName: "searchResultsList__item g-list-item",
                setup: function(e) {
                    this.collection = new s(null, {
                        category: e.category,
                        q: e.q,
                        params: e.params
                    })
                },
                getQueueSource: function() {
                    return this.collection.couldContainSounds() ? this.collection : null
                }
            })
    }),
    define("models/search", ["require", "exports", "module", "lib/model", "models/playlist", "models/sound", "models/user"], function(e, t, n) {
        var r = e("lib/model"),
            i = e("models/playlist"),
            s = e("models/sound"),
            o = e("models/user"),
            u = n.exports = r.extend({
                resource_type: "search",
                baseUrl: null,
                submodelMap: {
                    origin: null
                },
                resource: null,
                createSubmodel: function() {
                    var e, t;
                    switch (this.get("kind")) {
                        case "user":
                            e = o;
                            break;
                        case "track":
                            e = s;
                            break;
                        case "playlist":
                            e = i
                    }
                    t = new e(this.get("origin")), this.addSubmodel(t), this.resource = t
                },
                getAudible: function() {
                    switch (this.get("kind")) {
                        case "track":
                        case "playlist":
                            return this.resource;
                        default:
                            return null
                    }
                }
            }, {
                hashFn: function(e) {
                    return e.id ? e.id : [e.origin.kind, e.origin.id].join("_")
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
    define("views/search/item", ["require", "exports", "module", "models/search", "lib/view", "views/search/item.tmpl"], function(e, t, n) {
        var r = e("models/search"),
            i = e("lib/view"),
            s = n.exports = i.extend({
                ModelClass: r,
                template: e("views/search/item.tmpl"),
                className: "searchItem",
                getTemplateData: function(e) {
                    var t = e.kind;
                    e.category_is_sounds = t === "track", e.category_is_people = t === "user", e.category_is_groups = t === "group", e.category_is_playlists = t === "playlist"
                }
            })
    }),
    define("lib/views/lazy-loading-list", ["require", "exports", "module", "$", "underscore", "config", "lib/views/list", "lib/views/mixins/loader-list"], function(e, t, n) {
        function l() {
            return !this.collection.isFullyPopulated() && this.getLength() < this.getDesiredNumItems()
        }

        function c() {
            var e = this.collection,
                t = this.getModelsToRender().length,
                n = this.options.maxDisplay || Infinity,
                r = this.getLength(),
                i = this.options.showReadMore ? this.getReadMoreViews().length : 0;
            return r + i >= n || r === t && e.isFullyPopulated()
        }

        function h() {
            p.call(this, !1), this.removeThrobber()
        }

        function p(e) {
            var t, n;
            this._scrollListenersOn !== e && (t = e ? "on" : "off", this.options.fullPageList ? a[t]("scroll", this.checkScrollPosition) : (n = this.getScrollableContainer()) && n[t]("scroll", this.checkScrollPosition), this._scrollListenersOn = e)
        }
        var r = e("$"),
            i = e("underscore"),
            s = e("config"),
            o = e("lib/views/list"),
            u = e("lib/views/mixins/loader-list"),
            a = r(window.document),
            f = n.exports = o.extend(u, {
                listClassName: "lazyLoadingList__list sc-list-nostyle sc-clearfix",
                defaults: {
                    preloadAt: 200,
                    maxDisplay: 0,
                    fullPageList: !0,
                    initialPageSize: 0,
                    pageSize: 10
                },
                _lastScrollPosition: 0,
                _scrollListenersOn: !1,
                _setup: function(e) {
                    o.prototype._setup.apply(this, arguments), this._desiredLength = Math.min(e.maxDisplay || Infinity, e.initialPageSize || e.pageSize), this.$el.addClass("lazyLoadingList"), this.checkScrollPosition = i.debounce(this.checkScrollPosition.bind(this), 400)
                },
                renderDecorate: function() {
                    o.prototype.renderDecorate.call(this), c.call(this) || this.whenInserted().done(function() {
                        this.addThrobber(), p.call(this, !0), this.checkScrollPosition()
                    }.bind(this))
                },
                teardown: function() {
                    p.call(this, !1)
                },
                onRemove: function() {
                    o.prototype.onRemove.apply(this, arguments), c.call(this) || p.call(this, !0), this.checkScrollPosition({
                        forceCheck: !0
                    })
                },
                onCollectionReset: function() {
                    if (this.disposed) return;
                    c.call(this) && this.removeThrobber(), this.rerender()
                },
                getScrollableContainer: function() {
                    var e = s.get("appView").nativeScrollEl,
                        t = this.options.fullPageList;
                    return t && e ? e : t ? a : this.$el
                },
                checkScrollPosition: function(e) {
                    if (this.disposed) return;
                    var t = !1,
                        n = this.getListElement(),
                        r = this.getScrollableContainer(),
                        i = this.options.preloadAt || 0,
                        s = this.options.fullPageList,
                        o = r.scrollTop() + (s ? window.innerHeight : 0),
                        u, a, f;
                    if (s) {
                        if (o >= this._lastScrollPosition || e && e.forceCheck) u = n.children().last(), a = u.length ? u.offset() : {
                            top: 0
                        }, f = a && a.top || 0, t = f < o + i
                    } else t = n.height() - r.height() - o < i;
                    t && this.addPage(), this._lastScrollPosition = o
                },
                addPage: function() {
                    this.setDisplayedItems(this._desiredLength + this.options.pageSize), c.call(this) ? h.call(this) : l.call(this) ? (p.call(this, !1), this.addThrobber(), this.fetchNextPage()) : this.checkScrollPosition()
                },
                afterFetch: function() {
                    if (this.disposed) return;
                    c.call(this) ? h.call(this) : (p.call(this, !0), this.checkScrollPosition(), this.addThrobber())
                }
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
    define("views/search/item.tmpl", ["vendor/handlebars-runtime", "views/search/sound-item", "views/search/user-item", "views/search/playlist-item"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function f(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/search/sound-item", {
                    hash: {
                        resource_id: (i = e && e.origin, i == null || i === !1 ? i : i.id),
                        campaign: e && e.campaign
                    },
                    data: t
                })) + "\n", r
            }

            function l(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/search/user-item", {
                    hash: {
                        resource_id: (i = e && e.origin, i == null || i === !1 ? i : i.id),
                        campaign: e && e.campaign
                    },
                    data: t
                })) + "\n", r
            }

            function c(e, t) {
                var r = "",
                    i;
                return r += " " + u(n.$view.call(e, "views/search/playlist-item", {
                    hash: {
                        resource_id: (i = e && e.origin, i == null || i === !1 ? i : i.id),
                        campaign: e && e.campaign
                    },
                    data: t
                })) + "\n", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = this;
            o = n["if"].call(t, t && t.category_is_sounds, {
                hash: {},
                inverse: a.noop,
                fn: a.program(1, f, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += "\n", o = n["if"].call(t, t && t.category_is_people, {
                hash: {},
                inverse: a.noop,
                fn: a.program(3, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += "\n", o = n["if"].call(t, t && t.category_is_playlists, {
                hash: {},
                inverse: a.noop,
                fn: a.program(5, c, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("lib/views/mixins/loader-list", ["require", "exports", "module", "underscore", "views/error/inline-error", "lib/views/list", "lib/lingua", "lib/views/loading", "lib/mixin"], function(e, t, n) {
        function p() {
            this.removeLoader(), this.removeThrobber(), this.appendError()
        }

        function d() {
            c = f, this.afterFetch.apply(this, arguments)
        }
        var r = e("underscore"),
            i = e("views/error/inline-error"),
            s = e("lib/views/list"),
            o = e("lib/lingua"),
            u = e("lib/views/loading"),
            a = e("lib/mixin"),
            f = 250,
            l = 16e3,
            c = f,
            h = n.exports = new a({
                defaults: {
                    ThrobberView: u,
                    automaticErrorHandling: !0,
                    afterFetch: r.noop
                },
                requirePrototype: s.prototype,
                after: {
                    setup: function() {
                        this.automaticErrorHandling && this.collection.on("error", p, this)
                    },
                    dispose: function() {
                        this.collection.off("error", p, this)
                    }
                },
                addThrobber: function() {
                    var e = this.subviews.throbber;
                    return this.subviews.throbber || (e = this.addSubview(new this.ThrobberView, "throbber"), e.render()), this.appendDOMElement(e.el), e
                },
                removeThrobber: function() {
                    if (this.disposed) return;
                    var e = this.subviews.throbber;
                    e && (e._dispose(), this.removeSubview(e))
                },
                appendError: function() {
                    if (this.disposed) return;
                    var e = this.subviews.errorView;
                    e || (e = this.addSubview(new i({
                        button_label: o.t("Retry"),
                        tagName: "div"
                    })), e.on("button_click", function() {
                        this.removeSubview(e), e._dispose(), this.addThrobber(), this.fetchNextPage({
                            delay: c
                        }), c = Math.min(c * 4, l)
                    }.bind(this)), e.render(), this.appendDOMElement(e.el))
                },
                fetchNextPage: function(e) {
                    var t = function() {
                        this.collection.fetch({
                            reset: !this.collection.isPopulated(),
                            add: !0
                        }).done(d.bind(this))
                    }.bind(this);
                    e && e.delay ? this.addDeferred(r.delay(t, e.delay)) : t()
                }
            })
    }),
    define("lib/views/load-more.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".loadMore{clear:both;overflow:hidden}.loadMoreButton{border-top:1px solid #f2f2f2;text-align:center;display:block;line-height:55px;background:#fff;transition:background-color .1s linear,color .1s linear}.loadMoreButton:active{background:#f2f2f2}")), data = null
    }),
    define("views/search/sound-item", ["require", "exports", "module", "lib/views/mixins/on-context-request", "lib/views/mixins/promoted-item", "views/sound/sound-badge"], function(e, t, n) {
        var r = e("lib/views/mixins/on-context-request"),
            i = e("lib/views/mixins/promoted-item"),
            s = e("views/sound/sound-badge"),
            o = n.exports = s.extend(i, r, {
                contextName: "searchItem"
            })
    }),
    define("views/search/user-item", ["require", "exports", "module", "lib/views/mixins/deferred-images", "lib/views/mixins/on-context-request", "lib/views/mixins/promoted-item", "lib/tracking/tracking-core", "models/user", "lib/view", "views/search/user-item.tmpl", "views/search/user-item.css"], function(e, t, n) {
        function l() {
            o.action("navigate", "user")
        }
        var r = e("lib/views/mixins/deferred-images"),
            i = e("lib/views/mixins/on-context-request"),
            s = e("lib/views/mixins/promoted-item"),
            o = e("lib/tracking/tracking-core"),
            u = e("models/user"),
            a = e("lib/view"),
            f = n.exports = a.extend(s, i, r, {
                contextName: "searchItem",
                className: "userItem",
                ModelClass: u,
                template: e("views/search/user-item.tmpl"),
                css: e("views/search/user-item.css"),
                events: {
                    click: l
                },
                getTemplateData: function(e) {
                    e.location = [e.city, e.country].filter(Boolean).join(", ")
                }
            })
    }),
    define("views/search/playlist-item", ["require", "exports", "module", "lib/views/mixins/on-context-request", "views/sound/playlist-badge", "lib/views/mixins/promoted-item"], function(e, t, n) {
        var r = e("lib/views/mixins/on-context-request"),
            i = e("views/sound/playlist-badge"),
            s = e("lib/views/mixins/promoted-item"),
            o = n.exports = i.extend(s, r, {
                contextName: "searchItem"
            })
    }),
    define("views/error/inline-error", ["require", "exports", "module", "lib/lingua", "lib/view", "views/error/inline-error.tmpl", "views/error/inline-error.css"], function(e, t, n) {
        function o(e) {
            (e.originalEvent || e).preventDefault(), this.trigger("button_click", e, this)
        }
        var r = e("lib/lingua"),
            i = e("lib/view"),
            s = n.exports = i.extend({
                template: e("views/error/inline-error.tmpl"),
                css: e("views/error/inline-error.css"),
                className: "inlineError",
                events: {
                    "click a": o
                },
                defaults: {
                    button_label: r.t("Retry", null, {
                        comment: "Error button text. When user clicks it, action (like re-fetching) is performed once again."
                    })
                }
            })
    }),
    define("lib/views/mixins/on-context-request", ["require", "exports", "module", "underscore", "lib/mixin"], function(e, t, n) {
        var r = e("underscore"),
            i = e("lib/mixin"),
            s = ["tracking"],
            o = n.exports = new i({
                requires: ["contextName"],
                applyTo: function(e) {
                    e.bubbleEvents = r.extend(e.bubbleEvents || {}, {
                        contextrequest: "onContextRequest"
                    })
                },
                onContextRequest: function(e) {
                    var t = this.model,
                        n, r;
                    t && (n = t.get("campaign") === "promoted", r = n && t.get("promoted_by"), e.data.campaign = n ? "promoted" : e.data.campaign, e.data.promoted_by = r || e.data.promoted_by, s.forEach(function(n) {
                        e.data[n] = t.get(n) || e.data[n]
                    })), e.data.scope || (e.data.scope = []), e.data.scope.unshift(this.contextName)
                }
            })
    }),
    define("lib/views/mixins/promoted-item", ["require", "exports", "module", "underscore", "lib/integrations/promoted", "lib/mixin", "models/sound", "lib/tracking/tracking-core", "models/user"], function(e, t, n) {
        function l() {
            if (this.getState("promoted")) {
                var e = this.model instanceof o ? "soundClickThrough" : this.model instanceof a ? "userClickThrough" : null;
                e && i.trackEvent(e, this.getContextData())
            }
        }
        var r = e("underscore"),
            i = e("lib/integrations/promoted"),
            s = e("lib/mixin"),
            o = e("models/sound"),
            u = e("lib/tracking/tracking-core"),
            a = e("models/user"),
            f = n.exports = new s({
                defaults: {
                    campaign: null
                },
                applyTo: function(e) {
                    e.states = r.defaults({
                        promoted: "promoted"
                    }, e.states), e.events = r.defaults({
                        "click.promoted-item": l
                    }, e.events)
                },
                before: {
                    setup: function() {
                        this.toggleState("promoted", this.options.campaign === "promoted")
                    },
                    getTemplateData: function(e) {
                        e.is_promoted = this.getState("promoted")
                    }
                },
                after: {
                    renderDecorate: function() {
                        if (this.getState("promoted")) {
                            var e = this.getContextData(),
                                t = {
                                    context: r.pick(e, "campaign", "scope"),
                                    id: this.model.get("id"),
                                    kind: this.model.get("kind")
                                };
                            u.impression("searchItem", t), i.trackEvent("impression", e)
                        }
                    }
                }
            })
    }),
    define("views/search/user-item.tmpl", ["vendor/handlebars-runtime", "views/stats/user-stats", "lib/views/promoted"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var n = "",
                    r;
                return n += ' <p class="userItem__location g-font-12 sc-truncate">' + a((r = e && e.location, typeof r === u ? r.apply(e) : r)) + "</p> ", n
            }

            function c(e, t) {
                var r = "";
                return r += " " + a(n.$view.call(e, "lib/views/promoted", {
                    hash: {},
                    data: t
                })) + " ", r
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            s += '<a class="userItem__link" href="' + a(n.$route.call(t, "user", t, {
                hash: {},
                data: i
            })) + '"> <div class="userItem__container"> ' + a(n.$image.call(t, t, {
                hash: {
                    size: 60,
                    "class": "sc-media-left",
                    defer: !0
                },
                data: i
            })) + ' <div class="sc-media userItem__info"> <h2 class="userItem__username g-font-16 sc-text sc-truncate">' + a((o = t && t.username, typeof o === u ? o.apply(t) : o)) + "</h2> ", o = n["if"].call(t, t && t.location, {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            s += ' <div class="userItem__stats">' + a(n.$view.call(t, "views/stats/user-stats", {
                hash: {
                    resource_id: t && t._resource_id
                },
                data: i
            })) + "</div> </div> ", o = n["if"].call(t, t && t.is_promoted, {
                hash: {},
                inverse: f.noop,
                fn: f.program(3, c, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += " </div>\n</a>\n", s
        })
    }),
    define("views/search/user-item.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".userItem__link{display:block;overflow:hidden;padding:16px 0 0;height:92px}.promoted>.userItem__link{height:111px}.userItem__stats{overflow:hidden}.userItem__link:active{background:#f2f2f2}.userItem__container{overflow:hidden;height:100%;margin:0 16px}.userItem__info{min-height:60px}.userItem__username{font-weight:700;margin-top:-3px;padding-bottom:4px}.userItem__location{color:#666}.userItem__stats{padding-top:10px}")), data = null
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
    define("views/error/inline-error.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            function l(e, t) {
                var n = "",
                    r;
                return n += ' <a href="#" class="g-button">' + a((r = (r = e && e._options, r == null || r === !1 ? r : r.button_label), typeof r === u ? r.apply(e) : r)) + "</a>\n", n
            }
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = "function",
                a = this.escapeExpression,
                f = this;
            s += '<p class="inlineError__message sc-type-medium">' + a(n.$t.call(t, "Something doesn’t sound right.", {
                hash: {},
                data: i
            })) + "</p>\n", o = n["if"].call(t, (o = t && t._options, o == null || o === !1 ? o : o.button_label), {
                hash: {},
                inverse: f.noop,
                fn: f.program(1, l, i),
                data: i
            });
            if (o || o === 0) s += o;
            return s += "\n", s
        })
    }),
    define("views/error/inline-error.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".inlineError{padding:15px;text-align:center}")), data = null
    }),
    define("views/stats/user-stats", ["require", "exports", "module", "lib/views/mixins/stats", "models/user", "lib/view"], function(e, t, n) {
        var r = e("lib/views/mixins/stats"),
            i = e("models/user"),
            s = e("lib/view"),
            o = n.exports = s.extend(r, {
                ModelClass: i,
                defaults: {
                    resource_id: null,
                    resource_type: "user"
                },
                requiredAttributes: ["followers_count"],
                displayStats: ["followers_count"]
            })
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