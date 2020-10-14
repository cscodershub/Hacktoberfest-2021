define("layouts/system-playlist", ["require", "exports", "module", "lib/layouts/fullheight"], function(e, t, n) {
        var r = e("lib/layouts/fullheight"),
            i = "https://soundcloud.com/discover/sets/",
            s = n.exports = r.extend({
                includeFooter: null,
                systemPlaylistPermalink: null,
                setup: function(e) {
                    return this.systemPlaylistPermalink = e.systemPlaylistPermalink, this.setViews({
                        "l-main": ["views/system-playlist/system-playlist", e]
                    })
                },
                getPagePermalink: function() {
                    return i + this.systemPlaylistPermalink
                }
            })
    }),
    define("views/system-playlist/system-playlist", ["require", "exports", "module", "lib/view", "views/system-playlist/system-playlist.tmpl", "views/system-playlist/system-playlist.css"], function(e, t, n) {
        var r = e("lib/view"),
            i = n.exports = r.extend({
                className: "systemPlaylist",
                template: e("views/system-playlist/system-playlist.tmpl"),
                css: e("views/system-playlist/system-playlist.css")
            })
    }),
    define("views/system-playlist/system-playlist.tmpl", ["vendor/handlebars-runtime"], function() {
        return require("vendor/handlebars-runtime").template(function(e, t, n, r, i) {
            this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, e.helpers), i = i || {};
            var s = "",
                o = this.escapeExpression;
            return s += '<div class="systemPlaylist__text"> <p class="systemPlaylist__emphasis">' + o(n.$t.call(t, "SoundCloud for mobile is<br> only available as an app.", {
                hash: {},
                data: i
            })) + "</p> <br> <p>" + o(n.$t.call(t, "Open or download now<br> to use SoundCloud on<br> your device.", {
                hash: {},
                data: i
            })) + "</p>\n</div>\n", s
        })
    }),
    define("views/system-playlist/system-playlist.css", ["require", "exports", "module", "css"], function(e, t, n, r) {
        n.exports = r.stringToStyleElement(r.transform(".systemPlaylist{background:#fff;height:100%;display:flex;flex-direction:column;justify-content:center}.systemPlaylist__text{font-size:20px;line-height:1.5;text-align:center;padding:0 0 122px}.systemPlaylist__emphasis{color:#f50}")), data = null
    })