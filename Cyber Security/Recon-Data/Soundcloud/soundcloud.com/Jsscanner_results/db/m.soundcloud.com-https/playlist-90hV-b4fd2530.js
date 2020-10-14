define("layouts/playlist", ["require", "exports", "module", "$", "config/error-messages", "models/exception", "lib/lingua", "lib/layouts/page", "models/playlist"], function(e, t, n) {
        function c(e) {
            var t = o.t("[[playlistTitle]] by [[authorName]]", {
                playlistTitle: e.get("title"),
                authorName: e.get("user").username
            });
            return this.pageUrn = e.getUrn(), this.pagePermalink = e.get("permalink_url"), this.setTitle(t), this.setViews({
                "l-main": ["views/playlist/playlist", {
                    resource_id: e.resource_id
                }]
            })
        }
        var r = e("$"),
            i = e("config/error-messages"),
            s = e("models/exception"),
            o = e("lib/lingua"),
            u = e("lib/layouts/page"),
            a = e("models/playlist"),
            f = o.t("Take this playlist with you and enjoy the full SoundCloud experience with our free app."),
            l = n.exports = u.extend({
                setup: function(e) {
                    var t = r.Deferred();
                    return a.resolve(e.userPermalink, e.playlistPermalink, e.secretToken).fail(s.ajaxFatal(i.PLAYLIST_NOT_FOUND)).then(c.bind(this)).then(t.resolve), t
                },
                getPageUrn: function() {
                    return this.pageUrn
                },
                getUpsellText: function() {
                    return f
                },
                getPagePermalink: function() {
                    return this.pagePermalink
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
    define("views/playlist/playlist", ["require", "exports", "module", "lib/views/mixins/audible-control", "config", "lib/helpers/datetime-helper", "lib/views/mixins/fullscreen-loader", "lib/views/mixins/has-queue-source", "models/playlist", "lib/lingua", "lib/play-manager", "lib/view", "views/playlist/playlist.tmpl", "views/playlist/playlist.css"], function(e, t, n) {
        function p() {
            this.toggleAudible(this.model, {
                userInitiated: !0
            }), i.get("router").goToSoundPage(l.getCurrentSound())
        }
        var r = e("lib/views/mixins/audible-control"),
            i = e("config"),
            s = e("lib/helpers/datetime-helper"),
            o = e("lib/views/mixins/fullscreen-loader"),
            u = e("lib/views/mixins/has-queue-source"),
            a = e("models/playlist"),
            f = e("lib/lingua"),
            l = e("lib/play-manager"),
            c = e("lib/view"),
            h = n.exports = c.extend(o, r, u, {
                template: e("views/playlist/playlist.tmpl"),
                css: e("views/playlist/playlist.css"),
                ModelClass: a,
                className: "playlist g-list-wrapper",
                requiredAttributes: ["artwork_url"],
                events: {
                    "click .playlist__artwork": p
                },
                getTemplateData: function(e) {
                    var t = e.track_count;
                    return e.track_count_text = f.tp("%d track", "%d tracks", t), e.timecode_text = s.timecode(e.duration, {
                        inWords: !0
                    }), e
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
    define("views/playlist/playlist.tmpl", ["vendor/handlebars-runtime", "views/playlist/playlist-tracklist"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o, u = this.escapeExpression,
                a = "function";
            return s += '<div class="playlist__artwork g-header-artwork-image sc-selection-disabled"> ' + u(n.$image.call(t, t, {
                hash: {
                    size: "fill",
                    fade: !0
                },
                data: i
            })) + ' <div class="g-header-artwork-controls"> <div class="playlist__playButton g-play-button"></div> </div> <div class="g-header-artwork-info"> <div class="g-header-artwork-info-content"> <h2 class="g-header-artwork-title g-type-shrinkwrap-inline sc-truncate"> <a href="' + u(n.$route.call(t, "user", t && t.user, {
                hash: {},
                data: i
            })) + '" class="g-touch-padding">' + u((o = (o = t && t.user, o == null || o === !1 ? o : o.username), typeof o === a ? o.apply(t) : o)) + '</a> </h2> </div> <div class="g-header-artwork-info-content"> <p class="g-header-artwork-text g-type-shrinkwrap-inline">' + u((o = t && t.title, typeof o === a ? o.apply(t) : o)) + '</p> </div> </div>\n</div> <h1 class="g-type-bucket-title g-font-14 sc-text">' + u((o = t && t.track_count_text, typeof o === a ? o.apply(t) : o)) + ", " + u((o = t && t.timecode_text, typeof o === a ? o.apply(t) : o)) + "</h1> " + u(n.$view.call(t, "views/playlist/playlist-tracklist", {
                hash: {
                    resource_id: t && t._resource_id,
                    secret_token: t && t.secret_token
                },
                data: i
            })) + "\n", s
        })
    }),
    define("views/playlist/playlist.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".playlist.playing .playlist__playButton{display:none}")), data = null
    }),
    define("views/playlist/playlist-tracklist", ["require", "exports", "module", "lib/views/lazy-loading-list", "models/playlist", "views/sound/sound-badge"], function(e, t, n) {
        var r = e("lib/views/lazy-loading-list"),
            i = e("models/playlist"),
            s = e("views/sound/sound-badge"),
            o = n.exports = r.extend({
                Subview: s,
                defaults: {
                    secret_token: null,
                    initialPageSize: 4,
                    pageSize: 10,
                    preloadAt: 40
                },
                className: "playlistTracklist g-list",
                itemClassName: "playlistTracklist__item g-list-item",
                setup: function(e) {
                    this.playlistModel = new i({
                        id: e.resource_id
                    }), this.collection = this.playlistModel.soundsCollection
                },
                dispose: function() {
                    this.playlistModel.release()
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
    })