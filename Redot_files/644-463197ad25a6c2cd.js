"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[644], {
    2017: function(e, t, n) {
        n.d(t, {
            v: function() {
                return j
            }
        });
        var i = n(1527);
        let o = (...e) => (...t) => {
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (i) {
                    let e = i(...t);
                    if (null != e)
                        return e
                }
            }
        }
          , r = {
            heading1: "heading1",
            heading2: "heading2",
            heading3: "heading3",
            heading4: "heading4",
            heading5: "heading5",
            heading6: "heading6",
            paragraph: "paragraph",
            preformatted: "preformatted",
            strong: "strong",
            em: "em",
            listItem: "list-item",
            oListItem: "o-list-item",
            list: "group-list-item",
            oList: "group-o-list-item",
            image: "image",
            embed: "embed",
            hyperlink: "hyperlink",
            label: "label",
            span: "span"
        }
          , s = {
            [r.listItem]: "listItem",
            [r.oListItem]: "oListItem",
            [r.list]: "list",
            [r.oList]: "oList"
        }
          , a = e => (t, n, i, o, r) => {
            let a = e[s[t] || t];
            if (a)
                return a({
                    type: t,
                    node: n,
                    text: i,
                    children: o,
                    key: r
                })
        }
        ;
        var l = n(959);
        let d = () => (++d.i).toString();
        d.i = 0;
        let u = e => {
            let t = _(e)
              , n = [];
            for (let e = 0; e < t.length; e++)
                n.push(p(t[e]));
            return {
                key: d(),
                children: n
            }
        }
          , c = (e, t=[]) => ({
            key: d(),
            type: e.type,
            text: "text"in e ? e.text : void 0,
            node: e,
            children: t
        })
          , h = e => c({
            type: r.span,
            text: e,
            spans: []
        })
          , _ = e => {
            let t = e.slice(0);
            for (let e = 0; e < t.length; e++) {
                let n = t[e];
                if (n.type === r.listItem || n.type === r.oListItem) {
                    let i = [n];
                    for (; t[e + 1] && t[e + 1].type === n.type; )
                        i.push(t[e + 1]),
                        t.splice(e, 1);
                    n.type === r.listItem ? t[e] = {
                        type: r.list,
                        items: i
                    } : t[e] = {
                        type: r.oList,
                        items: i
                    }
                }
            }
            return t
        }
          , p = e => {
            if ("text"in e)
                return c(e, f(e.spans, e));
            if ("items"in e) {
                let t = [];
                for (let n = 0; n < e.items.length; n++)
                    t.push(p(e.items[n]));
                return c(e, t)
            }
            return c(e)
        }
          , f = (e, t, n) => {
            if (!e.length)
                return [h(t.text)];
            let i = e.slice(0);
            i.sort( (e, t) => e.start - t.start || t.end - e.end);
            let o = [];
            for (let e = 0; e < i.length; e++) {
                let r = i[e]
                  , s = n && n.start || 0
                  , a = r.start - s
                  , l = r.end - s
                  , d = t.text.slice(a, l)
                  , u = [];
                for (let t = e; t < i.length; t++) {
                    let e = i[t];
                    e !== r && (e.start >= r.start && e.end <= r.end ? (u.push(e),
                    i.splice(t, 1),
                    t--) : e.start < r.end && e.end > r.start && (u.push({
                        ...e,
                        end: r.end
                    }),
                    i[t] = {
                        ...e,
                        start: r.end
                    }))
                }
                0 === e && a > 0 && o.push(h(t.text.slice(0, a)));
                let _ = {
                    ...r,
                    text: d
                };
                o.push(c(_, f(u, {
                    ...t,
                    text: d
                }, r))),
                l < t.text.length && o.push(h(t.text.slice(l, i[e + 1] ? i[e + 1].start - s : void 0)))
            }
            return o
        }
          , m = (e, t) => g(u(e).children, t)
          , g = (e, t) => {
            let n = [];
            for (let i = 0; i < e.length; i++) {
                let o = e[i]
                  , r = t(o.type, o.node, o.text, g(o.children, t), o.key);
                null != r && n.push(r)
            }
            return n
        }
          , b = e => {
            let t = /^(\/(?!\/)|#)/.test(e)
              , n = !t && !/^https?:\/\//.test(e);
            return t && !n
        }
          , v = {
            Any: "Any",
            Document: "Document",
            Media: "Media",
            Web: "Web"
        }
          , y = e => {
            var t;
            return {
                link_type: v.Document,
                id: e.id,
                uid: e.uid || void 0,
                type: e.type,
                tags: e.tags,
                lang: e.lang,
                url: null == e.url ? void 0 : e.url,
                slug: null == (t = e.slugs) ? void 0 : t[0],
                ...e.data && Object.keys(e.data).length > 0 ? {
                    data: e.data
                } : {}
            }
        }
          , x = (e, ...t) => {
            let n;
            if (!e)
                return null;
            let i = "link_type"in e ? e : y(e)
              , [o] = t;
            switch (n = "function" == typeof o || null == o ? {
                linkResolver: o
            } : {
                ...o
            },
            i.link_type) {
            case v.Media:
            case v.Web:
                return "url"in i ? i.url : null;
            case v.Document:
                if ("id"in i && n.linkResolver) {
                    let e = n.linkResolver(i);
                    if (null != e)
                        return e
                }
                if ("url"in i && i.url)
                    return i.url;
                return null;
            case v.Any:
            default:
                return null
            }
        }
          , w = e => null != e
          , C = e => !!w(e) && (1 === e.length && "text"in e[0] ? !!e[0].text : !!e.length)
          , E = e => w(e) && ("id"in e || "url"in e)
          , k = (e, t={}) => {
            if (e && ("link_type"in e ? E(e) : e)) {
                let n = "target"in e ? e.target : void 0
                  , i = x(e, t.linkResolver)
                  , o = null == i ? void 0 : i
                  , r = "string" == typeof o && !b(o)
                  , s = t.rel ? t.rel({
                    href: o,
                    isExternal: r,
                    target: n
                }) : r ? "noreferrer" : void 0;
                return {
                    href: o,
                    target: n,
                    rel: null == s ? void 0 : s
                }
            }
            return {}
        }
          , A = e => {
            let t = /^(\/(?!\/)|#)/.test(e)
              , n = !t && !/^https?:\/\//.test(e);
            return t && !n
        }
        ;
        n(5927);
        let S = l.forwardRef(function({field: e, document: t, linkResolver: n, internalComponent: o, externalComponent: r, ...s}, a) {
            let {href: l, rel: d, ...u} = k(e ?? t, {
                linkResolver: n,
                rel: "function" == typeof s.rel ? s.rel : void 0
            })
              , c = d;
            "rel"in s && "function" != typeof s.rel && (c = s.rel);
            let h = ("href"in s ? s.href : l) || ""
              , _ = h && A(h) ? o || "a" : r || "a";
            return (0,
            i.jsx)(_, {
                ref: a,
                ...u,
                ...s,
                href: h,
                rel: c
            })
        });
        n(5927);
        let O = e => a({
            heading1: ({children: e, key: t}) => (0,
            i.jsx)("h1", {
                children: e
            }, t),
            heading2: ({children: e, key: t}) => (0,
            i.jsx)("h2", {
                children: e
            }, t),
            heading3: ({children: e, key: t}) => (0,
            i.jsx)("h3", {
                children: e
            }, t),
            heading4: ({children: e, key: t}) => (0,
            i.jsx)("h4", {
                children: e
            }, t),
            heading5: ({children: e, key: t}) => (0,
            i.jsx)("h5", {
                children: e
            }, t),
            heading6: ({children: e, key: t}) => (0,
            i.jsx)("h6", {
                children: e
            }, t),
            paragraph: ({children: e, key: t}) => (0,
            i.jsx)("p", {
                children: e
            }, t),
            preformatted: ({node: e, key: t}) => (0,
            i.jsx)("pre", {
                children: e.text
            }, t),
            strong: ({children: e, key: t}) => (0,
            i.jsx)("strong", {
                children: e
            }, t),
            em: ({children: e, key: t}) => (0,
            i.jsx)("em", {
                children: e
            }, t),
            listItem: ({children: e, key: t}) => (0,
            i.jsx)("li", {
                children: e
            }, t),
            oListItem: ({children: e, key: t}) => (0,
            i.jsx)("li", {
                children: e
            }, t),
            list: ({children: e, key: t}) => (0,
            i.jsx)("ul", {
                children: e
            }, t),
            oList: ({children: e, key: t}) => (0,
            i.jsx)("ol", {
                children: e
            }, t),
            image: ({node: t, key: n}) => {
                let o = (0,
                i.jsx)("img", {
                    src: t.url,
                    alt: t.alt ?? void 0,
                    "data-copyright": t.copyright ? t.copyright : void 0
                });
                return (0,
                i.jsx)("p", {
                    className: "block-img",
                    children: t.linkTo ? (0,
                    i.jsx)(S, {
                        linkResolver: e.linkResolver,
                        internalComponent: e.internalLinkComponent,
                        externalComponent: e.externalLinkComponent,
                        field: t.linkTo,
                        children: o
                    }) : o
                }, n)
            }
            ,
            embed: ({node: e, key: t}) => (0,
            i.jsx)("div", {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: {
                    __html: e.oembed.html ?? ""
                }
            }, t),
            hyperlink: ({node: t, children: n, key: o}) => (0,
            i.jsx)(S, {
                field: t.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: n
            }, o),
            label: ({node: e, children: t, key: n}) => (0,
            i.jsx)("span", {
                className: e.data.label,
                children: t
            }, n),
            span: ({text: e, key: t}) => {
                let n = []
                  , o = 0;
                for (let t of e.split("\n"))
                    o > 0 && n.push((0,
                    i.jsx)("br", {}, `${o}__break`)),
                    n.push((0,
                    i.jsx)(l.Fragment, {
                        children: t
                    }, `${o}__line`)),
                    o++;
                return (0,
                i.jsx)(l.Fragment, {
                    children: n
                }, t)
            }
        });
        function L({linkResolver: e, field: t, fallback: n, components: r, externalLinkComponent: s, internalLinkComponent: d, ...u}) {
            return l.useMemo( () => {
                if (!C(t))
                    return null != n ? (0,
                    i.jsx)(i.Fragment, {
                        children: n
                    }) : null;
                {
                    let n = o("object" == typeof r ? a(r) : r, O({
                        linkResolver: e,
                        internalLinkComponent: d,
                        externalLinkComponent: s
                    }))
                      , u = m(t, (e, t, i, o, r) => {
                        let s = n(e, t, i, o, r);
                        return l.isValidElement(s) && null == s.key ? l.cloneElement(s, {
                            key: r
                        }) : s
                    }
                    );
                    return (0,
                    i.jsx)(i.Fragment, {
                        children: u
                    })
                }
            }
            , [t, d, s, r, e, n])
        }
        var T = n(5320);
        let R = () => l.useContext(T.Z) || {}
          , j = function({components: e, ...t}) {
            let n = R()
              , r = o("object" == typeof e ? a(e) : e, "object" == typeof n.richTextComponents ? a(n.richTextComponents) : n.richTextComponents);
            return (0,
            i.jsx)(L, {
                components: r,
                internalLinkComponent: n.internalLinkComponent,
                externalLinkComponent: n.externalLinkComponent,
                ...t
            })
        }
    },
    3830: function(e, t, n) {
        n.d(t, {
            p: function() {
                return s
            }
        });
        var i = n(1527);
        let o = e => {
            let t = e.replace(/(?:-|_)(\w)/g, (e, t) => t ? t.toUpperCase() : "");
            return t[0].toUpperCase() + t.slice(1)
        }
        ;
        n(5927);
        let r = ({slice: e}) => null;
        function s({slices: e=[], components: t={}, resolver: n, defaultComponent: s=r, context: a={}}) {
            let l = e.map( (r, l) => {
                let d = "slice_type"in r ? r.slice_type : r.type
                  , u = t[d] || s;
                if (n) {
                    let e = n({
                        slice: r,
                        sliceName: o(d),
                        i: l
                    });
                    e && (u = e)
                }
                let c = "id"in r && r.id ? r.id : `${l}-${JSON.stringify(r)}`;
                if (!r.__mapped)
                    return (0,
                    i.jsx)(u, {
                        slice: r,
                        index: l,
                        slices: e,
                        context: a
                    }, c);
                {
                    let {__mapped: e, ...t} = r;
                    return (0,
                    i.jsx)(u, {
                        ...t
                    }, c)
                }
            }
            );
            return (0,
            i.jsx)(i.Fragment, {
                children: l
            })
        }
    },
    464: function(e, t, n) {
        function i(e, t) {
            var n = e.__state.conversionName.toString()
              , i = Math.round(e.r)
              , o = Math.round(e.g)
              , r = Math.round(e.b)
              , s = e.a
              , a = Math.round(e.h)
              , l = e.s.toFixed(1)
              , d = e.v.toFixed(1);
            if (t || "THREE_CHAR_HEX" === n || "SIX_CHAR_HEX" === n) {
                for (var u = e.hex.toString(16); u.length < 6; )
                    u = "0" + u;
                return "#" + u
            }
            if ("CSS_RGB" === n)
                return "rgb(" + i + "," + o + "," + r + ")";
            if ("CSS_RGBA" === n)
                return "rgba(" + i + "," + o + "," + r + "," + s + ")";
            if ("HEX" === n)
                return "0x" + e.hex.toString(16);
            if ("RGB_ARRAY" === n)
                return "[" + i + "," + o + "," + r + "]";
            if ("RGBA_ARRAY" === n)
                return "[" + i + "," + o + "," + r + "," + s + "]";
            if ("RGB_OBJ" === n)
                return "{r:" + i + ",g:" + o + ",b:" + r + "}";
            else if ("RGBA_OBJ" === n)
                return "{r:" + i + ",g:" + o + ",b:" + r + ",a:" + s + "}";
            else if ("HSV_OBJ" === n)
                return "{h:" + a + ",s:" + l + ",v:" + d + "}";
            else if ("HSVA_OBJ" === n)
                return "{h:" + a + ",s:" + l + ",v:" + d + ",a:" + s + "}";
            return "unknown format"
        }
        n.r(t),
        n.d(t, {
            GUI: function() {
                return ed
            },
            color: function() {
                return er
            },
            controllers: function() {
                return es
            },
            dom: function() {
                return ea
            },
            gui: function() {
                return el
            }
        });
        var o = Array.prototype.forEach
          , r = Array.prototype.slice
          , s = {
            BREAK: {},
            extend: function(e) {
                return this.each(r.call(arguments, 1), function(t) {
                    (this.isObject(t) ? Object.keys(t) : []).forEach((function(n) {
                        this.isUndefined(t[n]) || (e[n] = t[n])
                    }
                    ).bind(this))
                }, this),
                e
            },
            defaults: function(e) {
                return this.each(r.call(arguments, 1), function(t) {
                    (this.isObject(t) ? Object.keys(t) : []).forEach((function(n) {
                        this.isUndefined(e[n]) && (e[n] = t[n])
                    }
                    ).bind(this))
                }, this),
                e
            },
            compose: function() {
                var e = r.call(arguments);
                return function() {
                    for (var t = r.call(arguments), n = e.length - 1; n >= 0; n--)
                        t = [e[n].apply(this, t)];
                    return t[0]
                }
            },
            each: function(e, t, n) {
                if (e) {
                    if (o && e.forEach && e.forEach === o)
                        e.forEach(t, n);
                    else if (e.length === e.length + 0) {
                        var i = void 0
                          , r = void 0;
                        for (i = 0,
                        r = e.length; i < r; i++)
                            if (i in e && t.call(n, e[i], i) === this.BREAK)
                                return
                    } else
                        for (var s in e)
                            if (t.call(n, e[s], s) === this.BREAK)
                                return
                }
            },
            defer: function(e) {
                setTimeout(e, 0)
            },
            debounce: function(e, t, n) {
                var i = void 0;
                return function() {
                    var o = this
                      , r = arguments
                      , s = n || !i;
                    clearTimeout(i),
                    i = setTimeout(function() {
                        i = null,
                        n || e.apply(o, r)
                    }, t),
                    s && e.apply(o, r)
                }
            },
            toArray: function(e) {
                return e.toArray ? e.toArray() : r.call(e)
            },
            isUndefined: function(e) {
                return void 0 === e
            },
            isNull: function(e) {
                return null === e
            },
            isNaN: function(e) {
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }(function(e) {
                return isNaN(e)
            }),
            isArray: Array.isArray || function(e) {
                return e.constructor === Array
            }
            ,
            isObject: function(e) {
                return e === Object(e)
            },
            isNumber: function(e) {
                return e === e + 0
            },
            isString: function(e) {
                return e === e + ""
            },
            isBoolean: function(e) {
                return !1 === e || !0 === e
            },
            isFunction: function(e) {
                return e instanceof Function
            }
        }
          , a = [{
            litmus: s.isString,
            conversions: {
                THREE_CHAR_HEX: {
                    read: function(e) {
                        var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                        return null !== t && {
                            space: "HEX",
                            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
                        }
                    },
                    write: i
                },
                SIX_CHAR_HEX: {
                    read: function(e) {
                        var t = e.match(/^#([A-F0-9]{6})$/i);
                        return null !== t && {
                            space: "HEX",
                            hex: parseInt("0x" + t[1].toString(), 0)
                        }
                    },
                    write: i
                },
                CSS_RGB: {
                    read: function(e) {
                        var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                        return null !== t && {
                            space: "RGB",
                            r: parseFloat(t[1]),
                            g: parseFloat(t[2]),
                            b: parseFloat(t[3])
                        }
                    },
                    write: i
                },
                CSS_RGBA: {
                    read: function(e) {
                        var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                        return null !== t && {
                            space: "RGB",
                            r: parseFloat(t[1]),
                            g: parseFloat(t[2]),
                            b: parseFloat(t[3]),
                            a: parseFloat(t[4])
                        }
                    },
                    write: i
                }
            }
        }, {
            litmus: s.isNumber,
            conversions: {
                HEX: {
                    read: function(e) {
                        return {
                            space: "HEX",
                            hex: e,
                            conversionName: "HEX"
                        }
                    },
                    write: function(e) {
                        return e.hex
                    }
                }
            }
        }, {
            litmus: s.isArray,
            conversions: {
                RGB_ARRAY: {
                    read: function(e) {
                        return 3 === e.length && {
                            space: "RGB",
                            r: e[0],
                            g: e[1],
                            b: e[2]
                        }
                    },
                    write: function(e) {
                        return [e.r, e.g, e.b]
                    }
                },
                RGBA_ARRAY: {
                    read: function(e) {
                        return 4 === e.length && {
                            space: "RGB",
                            r: e[0],
                            g: e[1],
                            b: e[2],
                            a: e[3]
                        }
                    },
                    write: function(e) {
                        return [e.r, e.g, e.b, e.a]
                    }
                }
            }
        }, {
            litmus: s.isObject,
            conversions: {
                RGBA_OBJ: {
                    read: function(e) {
                        return !!(s.isNumber(e.r) && s.isNumber(e.g) && s.isNumber(e.b) && s.isNumber(e.a)) && {
                            space: "RGB",
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: e.a
                        }
                    },
                    write: function(e) {
                        return {
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: e.a
                        }
                    }
                },
                RGB_OBJ: {
                    read: function(e) {
                        return !!(s.isNumber(e.r) && s.isNumber(e.g) && s.isNumber(e.b)) && {
                            space: "RGB",
                            r: e.r,
                            g: e.g,
                            b: e.b
                        }
                    },
                    write: function(e) {
                        return {
                            r: e.r,
                            g: e.g,
                            b: e.b
                        }
                    }
                },
                HSVA_OBJ: {
                    read: function(e) {
                        return !!(s.isNumber(e.h) && s.isNumber(e.s) && s.isNumber(e.v) && s.isNumber(e.a)) && {
                            space: "HSV",
                            h: e.h,
                            s: e.s,
                            v: e.v,
                            a: e.a
                        }
                    },
                    write: function(e) {
                        return {
                            h: e.h,
                            s: e.s,
                            v: e.v,
                            a: e.a
                        }
                    }
                },
                HSV_OBJ: {
                    read: function(e) {
                        return !!(s.isNumber(e.h) && s.isNumber(e.s) && s.isNumber(e.v)) && {
                            space: "HSV",
                            h: e.h,
                            s: e.s,
                            v: e.v
                        }
                    },
                    write: function(e) {
                        return {
                            h: e.h,
                            s: e.s,
                            v: e.v
                        }
                    }
                }
            }
        }]
          , l = void 0
          , d = void 0
          , u = function() {
            d = !1;
            var e = arguments.length > 1 ? s.toArray(arguments) : arguments[0];
            return s.each(a, function(t) {
                if (t.litmus(e))
                    return s.each(t.conversions, function(t, n) {
                        if (l = t.read(e),
                        !1 === d && !1 !== l)
                            return d = l,
                            l.conversionName = n,
                            l.conversion = t,
                            s.BREAK
                    }),
                    s.BREAK
            }),
            d
        }
          , c = void 0
          , h = {
            hsv_to_rgb: function(e, t, n) {
                var i = e / 60 - Math.floor(e / 60)
                  , o = n * (1 - t)
                  , r = n * (1 - i * t)
                  , s = n * (1 - (1 - i) * t)
                  , a = [[n, s, o], [r, n, o], [o, n, s], [o, r, n], [s, o, n], [n, o, r]][Math.floor(e / 60) % 6];
                return {
                    r: 255 * a[0],
                    g: 255 * a[1],
                    b: 255 * a[2]
                }
            },
            rgb_to_hsv: function(e, t, n) {
                var i = Math.max(e, t, n)
                  , o = i - Math.min(e, t, n)
                  , r = void 0
                  , s = void 0;
                return 0 === i ? {
                    h: NaN,
                    s: 0,
                    v: 0
                } : (s = o / i,
                (r = (e === i ? (t - n) / o : t === i ? 2 + (n - e) / o : 4 + (e - t) / o) / 6) < 0 && (r += 1),
                {
                    h: 360 * r,
                    s: s,
                    v: i / 255
                })
            },
            rgb_to_hex: function(e, t, n) {
                var i = this.hex_with_component(0, 2, e);
                return i = this.hex_with_component(i, 1, t),
                i = this.hex_with_component(i, 0, n)
            },
            component_from_hex: function(e, t) {
                return e >> 8 * t & 255
            },
            hex_with_component: function(e, t, n) {
                return n << (c = 8 * t) | e & ~(255 << c)
            }
        }
          , _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , p = function(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
          , f = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }()
          , m = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(t);
                if (null === r)
                    return;
                return e(r, n, i)
            }
            if ("value"in o)
                return o.value;
            var s = o.get;
            if (void 0 !== s)
                return s.call(i)
        }
          , g = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
          , b = function(e, t) {
            if (!e)
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e
        }
          , v = function() {
            function e() {
                if (p(this, e),
                this.__state = u.apply(this, arguments),
                !1 === this.__state)
                    throw Error("Failed to interpret color arguments");
                this.__state.a = this.__state.a || 1
            }
            return f(e, [{
                key: "toString",
                value: function() {
                    return i(this)
                }
            }, {
                key: "toHexString",
                value: function() {
                    return i(this, !0)
                }
            }, {
                key: "toOriginal",
                value: function() {
                    return this.__state.conversion.write(this)
                }
            }]),
            e
        }();
        function y(e, t, n) {
            Object.defineProperty(e, t, {
                get: function() {
                    return "RGB" === this.__state.space || v.recalculateRGB(this, t, n),
                    this.__state[t]
                },
                set: function(e) {
                    "RGB" !== this.__state.space && (v.recalculateRGB(this, t, n),
                    this.__state.space = "RGB"),
                    this.__state[t] = e
                }
            })
        }
        function x(e, t) {
            Object.defineProperty(e, t, {
                get: function() {
                    return "HSV" === this.__state.space || v.recalculateHSV(this),
                    this.__state[t]
                },
                set: function(e) {
                    "HSV" !== this.__state.space && (v.recalculateHSV(this),
                    this.__state.space = "HSV"),
                    this.__state[t] = e
                }
            })
        }
        v.recalculateRGB = function(e, t, n) {
            if ("HEX" === e.__state.space)
                e.__state[t] = h.component_from_hex(e.__state.hex, n);
            else if ("HSV" === e.__state.space)
                s.extend(e.__state, h.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
            else
                throw Error("Corrupted color state")
        }
        ,
        v.recalculateHSV = function(e) {
            var t = h.rgb_to_hsv(e.r, e.g, e.b);
            s.extend(e.__state, {
                s: t.s,
                v: t.v
            }),
            s.isNaN(t.h) ? s.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h
        }
        ,
        v.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"],
        y(v.prototype, "r", 2),
        y(v.prototype, "g", 1),
        y(v.prototype, "b", 0),
        x(v.prototype, "h"),
        x(v.prototype, "s"),
        x(v.prototype, "v"),
        Object.defineProperty(v.prototype, "a", {
            get: function() {
                return this.__state.a
            },
            set: function(e) {
                this.__state.a = e
            }
        }),
        Object.defineProperty(v.prototype, "hex", {
            get: function() {
                return "HEX" !== this.__state.space && (this.__state.hex = h.rgb_to_hex(this.r, this.g, this.b),
                this.__state.space = "HEX"),
                this.__state.hex
            },
            set: function(e) {
                this.__state.space = "HEX",
                this.__state.hex = e
            }
        });
        var w = function() {
            function e(t, n) {
                p(this, e),
                this.initialValue = t[n],
                this.domElement = document.createElement("div"),
                this.object = t,
                this.property = n,
                this.__onChange = void 0,
                this.__onFinishChange = void 0
            }
            return f(e, [{
                key: "onChange",
                value: function(e) {
                    return this.__onChange = e,
                    this
                }
            }, {
                key: "onFinishChange",
                value: function(e) {
                    return this.__onFinishChange = e,
                    this
                }
            }, {
                key: "setValue",
                value: function(e) {
                    return this.object[this.property] = e,
                    this.__onChange && this.__onChange.call(this, e),
                    this.updateDisplay(),
                    this
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.object[this.property]
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return this
                }
            }, {
                key: "isModified",
                value: function() {
                    return this.initialValue !== this.getValue()
                }
            }]),
            e
        }()
          , C = {};
        s.each({
            HTMLEvents: ["change"],
            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
            KeyboardEvents: ["keydown"]
        }, function(e, t) {
            s.each(e, function(e) {
                C[e] = t
            })
        });
        var E = /(\d+(\.\d+)?)px/;
        function k(e) {
            if ("0" === e || s.isUndefined(e))
                return 0;
            var t = e.match(E);
            return s.isNull(t) ? 0 : parseFloat(t[1])
        }
        var A = {
            makeSelectable: function(e, t) {
                void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                    return !1
                }
                : function() {}
                ,
                e.style.MozUserSelect = t ? "auto" : "none",
                e.style.KhtmlUserSelect = t ? "auto" : "none",
                e.unselectable = t ? "on" : "off")
            },
            makeFullscreen: function(e, t, n) {
                var i = n
                  , o = t;
                s.isUndefined(o) && (o = !0),
                s.isUndefined(i) && (i = !0),
                e.style.position = "absolute",
                o && (e.style.left = 0,
                e.style.right = 0),
                i && (e.style.top = 0,
                e.style.bottom = 0)
            },
            fakeEvent: function(e, t, n, i) {
                var o = n || {}
                  , r = C[t];
                if (!r)
                    throw Error("Event type " + t + " not supported.");
                var a = document.createEvent(r);
                switch (r) {
                case "MouseEvents":
                    var l = o.x || o.clientX || 0
                      , d = o.y || o.clientY || 0;
                    a.initMouseEvent(t, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, l, d, !1, !1, !1, !1, 0, null);
                    break;
                case "KeyboardEvents":
                    var u = a.initKeyboardEvent || a.initKeyEvent;
                    s.defaults(o, {
                        cancelable: !0,
                        ctrlKey: !1,
                        altKey: !1,
                        shiftKey: !1,
                        metaKey: !1,
                        keyCode: void 0,
                        charCode: void 0
                    }),
                    u(t, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                    break;
                default:
                    a.initEvent(t, o.bubbles || !1, o.cancelable || !0)
                }
                s.defaults(a, i),
                e.dispatchEvent(a)
            },
            bind: function(e, t, n, i) {
                return e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n),
                A
            },
            unbind: function(e, t, n, i) {
                return e.removeEventListener ? e.removeEventListener(t, n, i || !1) : e.detachEvent && e.detachEvent("on" + t, n),
                A
            },
            addClass: function(e, t) {
                if (void 0 === e.className)
                    e.className = t;
                else if (e.className !== t) {
                    var n = e.className.split(/ +/);
                    -1 === n.indexOf(t) && (n.push(t),
                    e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return A
            },
            removeClass: function(e, t) {
                if (t) {
                    if (e.className === t)
                        e.removeAttribute("class");
                    else {
                        var n = e.className.split(/ +/)
                          , i = n.indexOf(t);
                        -1 !== i && (n.splice(i, 1),
                        e.className = n.join(" "))
                    }
                } else
                    e.className = void 0;
                return A
            },
            hasClass: function(e, t) {
                return RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
            },
            getWidth: function(e) {
                var t = getComputedStyle(e);
                return k(t["border-left-width"]) + k(t["border-right-width"]) + k(t["padding-left"]) + k(t["padding-right"]) + k(t.width)
            },
            getHeight: function(e) {
                var t = getComputedStyle(e);
                return k(t["border-top-width"]) + k(t["border-bottom-width"]) + k(t["padding-top"]) + k(t["padding-bottom"]) + k(t.height)
            },
            getOffset: function(e) {
                var t = e
                  , n = {
                    left: 0,
                    top: 0
                };
                if (t.offsetParent)
                    do
                        n.left += t.offsetLeft,
                        n.top += t.offsetTop,
                        t = t.offsetParent;
                    while (t);
                return n
            },
            isActive: function(e) {
                return e === document.activeElement && (e.type || e.href)
            }
        }
          , S = function(e) {
            function t(e, n) {
                p(this, t);
                var i = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return i.__prev = i.getValue(),
                i.__checkbox = document.createElement("input"),
                i.__checkbox.setAttribute("type", "checkbox"),
                A.bind(i.__checkbox, "change", function() {
                    i.setValue(!i.__prev)
                }, !1),
                i.domElement.appendChild(i.__checkbox),
                i.updateDisplay(),
                i
            }
            return g(t, e),
            f(t, [{
                key: "setValue",
                value: function(e) {
                    var n = m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
                    this.__prev = this.getValue(),
                    n
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"),
                    this.__checkbox.checked = !0,
                    this.__prev = !0) : (this.__checkbox.checked = !1,
                    this.__prev = !1),
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]),
            t
        }(w)
          , O = function(e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
                  , r = i;
                if (o.__select = document.createElement("select"),
                s.isArray(r)) {
                    var a = {};
                    s.each(r, function(e) {
                        a[e] = e
                    }),
                    r = a
                }
                return s.each(r, function(e, t) {
                    var n = document.createElement("option");
                    n.innerHTML = t,
                    n.setAttribute("value", e),
                    o.__select.appendChild(n)
                }),
                o.updateDisplay(),
                A.bind(o.__select, "change", function() {
                    var e = this.options[this.selectedIndex].value;
                    o.setValue(e)
                }),
                o.domElement.appendChild(o.__select),
                o
            }
            return g(t, e),
            f(t, [{
                key: "setValue",
                value: function(e) {
                    var n = m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()),
                    n
                }
            }, {
                key: "updateDisplay",
                value: function() {
                    return A.isActive(this.__select) ? this : (this.__select.value = this.getValue(),
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this))
                }
            }]),
            t
        }(w)
          , L = function(e) {
            function t(e, n) {
                p(this, t);
                var i = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                function o() {
                    i.setValue(i.__input.value)
                }
                return i.__input = document.createElement("input"),
                i.__input.setAttribute("type", "text"),
                A.bind(i.__input, "keyup", o),
                A.bind(i.__input, "change", o),
                A.bind(i.__input, "blur", function() {
                    i.__onFinishChange && i.__onFinishChange.call(i, i.getValue())
                }),
                A.bind(i.__input, "keydown", function(e) {
                    13 === e.keyCode && this.blur()
                }),
                i.updateDisplay(),
                i.domElement.appendChild(i.__input),
                i
            }
            return g(t, e),
            f(t, [{
                key: "updateDisplay",
                value: function() {
                    return A.isActive(this.__input) || (this.__input.value = this.getValue()),
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]),
            t
        }(w);
        function T(e) {
            var t = e.toString();
            return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0
        }
        var R = function(e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
                  , r = i || {};
                return o.__min = r.min,
                o.__max = r.max,
                o.__step = r.step,
                s.isUndefined(o.__step) ? 0 === o.initialValue ? o.__impliedStep = 1 : o.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(o.initialValue)) / Math.LN10)) / 10 : o.__impliedStep = o.__step,
                o.__precision = T(o.__impliedStep),
                o
            }
            return g(t, e),
            f(t, [{
                key: "setValue",
                value: function(e) {
                    var n = e;
                    return void 0 !== this.__min && n < this.__min ? n = this.__min : void 0 !== this.__max && n > this.__max && (n = this.__max),
                    void 0 !== this.__step && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step),
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n)
                }
            }, {
                key: "min",
                value: function(e) {
                    return this.__min = e,
                    this
                }
            }, {
                key: "max",
                value: function(e) {
                    return this.__max = e,
                    this
                }
            }, {
                key: "step",
                value: function(e) {
                    return this.__step = e,
                    this.__impliedStep = e,
                    this.__precision = T(e),
                    this
                }
            }]),
            t
        }(w)
          , j = function(e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));
                o.__truncationSuspended = !1;
                var r = o
                  , a = void 0;
                function l() {
                    r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
                }
                function d(e) {
                    var t = a - e.clientY;
                    r.setValue(r.getValue() + t * r.__impliedStep),
                    a = e.clientY
                }
                function u() {
                    A.unbind(window, "mousemove", d),
                    A.unbind(window, "mouseup", u),
                    l()
                }
                return o.__input = document.createElement("input"),
                o.__input.setAttribute("type", "text"),
                A.bind(o.__input, "change", function() {
                    var e = parseFloat(r.__input.value);
                    s.isNaN(e) || r.setValue(e)
                }),
                A.bind(o.__input, "blur", function() {
                    l()
                }),
                A.bind(o.__input, "mousedown", function(e) {
                    A.bind(window, "mousemove", d),
                    A.bind(window, "mouseup", u),
                    a = e.clientY
                }),
                A.bind(o.__input, "keydown", function(e) {
                    13 === e.keyCode && (r.__truncationSuspended = !0,
                    this.blur(),
                    r.__truncationSuspended = !1,
                    l())
                }),
                o.updateDisplay(),
                o.domElement.appendChild(o.__input),
                o
            }
            return g(t, e),
            f(t, [{
                key: "updateDisplay",
                value: function() {
                    var e;
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : Math.round(this.getValue() * (e = Math.pow(10, this.__precision))) / e,
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]),
            t
        }(R)
          , N = function(e) {
            function t(e, n, i, o, r) {
                p(this, t);
                var s = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, {
                    min: i,
                    max: o,
                    step: r
                }));
                function a(e) {
                    e.preventDefault();
                    var t, n, i, o, r = s.__background.getBoundingClientRect();
                    return s.setValue((t = e.clientX,
                    n = r.left,
                    i = r.right,
                    (o = s.__min) + (s.__max - o) * ((t - n) / (i - n)))),
                    !1
                }
                function l() {
                    A.unbind(window, "mousemove", a),
                    A.unbind(window, "mouseup", l),
                    s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                }
                function d(e) {
                    var t, n, i, o = e.touches[0].clientX, r = s.__background.getBoundingClientRect();
                    s.setValue((t = r.left,
                    n = r.right,
                    (i = s.__min) + (s.__max - i) * ((o - t) / (n - t))))
                }
                function u() {
                    A.unbind(window, "touchmove", d),
                    A.unbind(window, "touchend", u),
                    s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
                }
                return s.__background = document.createElement("div"),
                s.__foreground = document.createElement("div"),
                A.bind(s.__background, "mousedown", function(e) {
                    document.activeElement.blur(),
                    A.bind(window, "mousemove", a),
                    A.bind(window, "mouseup", l),
                    a(e)
                }),
                A.bind(s.__background, "touchstart", function(e) {
                    1 === e.touches.length && (A.bind(window, "touchmove", d),
                    A.bind(window, "touchend", u),
                    d(e))
                }),
                A.addClass(s.__background, "slider"),
                A.addClass(s.__foreground, "slider-fg"),
                s.updateDisplay(),
                s.__background.appendChild(s.__foreground),
                s.domElement.appendChild(s.__background),
                s
            }
            return g(t, e),
            f(t, [{
                key: "updateDisplay",
                value: function() {
                    var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * e + "%",
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this)
                }
            }]),
            t
        }(R)
          , B = function(e) {
            function t(e, n, i) {
                p(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return o.__button = document.createElement("div"),
                o.__button.innerHTML = void 0 === i ? "Fire" : i,
                A.bind(o.__button, "click", function(e) {
                    return e.preventDefault(),
                    o.fire(),
                    !1
                }),
                A.addClass(o.__button, "button"),
                o.domElement.appendChild(o.__button),
                o
            }
            return g(t, e),
            f(t, [{
                key: "fire",
                value: function() {
                    this.__onChange && this.__onChange.call(this),
                    this.getValue().call(this.object),
                    this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
                }
            }]),
            t
        }(w)
          , H = function(e) {
            function t(e, n) {
                p(this, t);
                var i, o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                o.__color = new v(o.getValue()),
                o.__temp = new v(0);
                var r = o;
                o.domElement = document.createElement("div"),
                A.makeSelectable(o.domElement, !1),
                o.__selector = document.createElement("div"),
                o.__selector.className = "selector",
                o.__saturation_field = document.createElement("div"),
                o.__saturation_field.className = "saturation-field",
                o.__field_knob = document.createElement("div"),
                o.__field_knob.className = "field-knob",
                o.__field_knob_border = "2px solid ",
                o.__hue_knob = document.createElement("div"),
                o.__hue_knob.className = "hue-knob",
                o.__hue_field = document.createElement("div"),
                o.__hue_field.className = "hue-field",
                o.__input = document.createElement("input"),
                o.__input.type = "text",
                o.__input_textShadow = "0 1px 1px ",
                A.bind(o.__input, "keydown", function(e) {
                    13 === e.keyCode && _.call(this)
                }),
                A.bind(o.__input, "blur", _),
                A.bind(o.__selector, "mousedown", function() {
                    A.addClass(this, "drag").bind(window, "mouseup", function() {
                        A.removeClass(r.__selector, "drag")
                    })
                }),
                A.bind(o.__selector, "touchstart", function() {
                    A.addClass(this, "drag").bind(window, "touchend", function() {
                        A.removeClass(r.__selector, "drag")
                    })
                });
                var a = document.createElement("div");
                function l(e) {
                    m(e),
                    A.bind(window, "mousemove", m),
                    A.bind(window, "touchmove", m),
                    A.bind(window, "mouseup", c),
                    A.bind(window, "touchend", c)
                }
                function d(e) {
                    g(e),
                    A.bind(window, "mousemove", g),
                    A.bind(window, "touchmove", g),
                    A.bind(window, "mouseup", h),
                    A.bind(window, "touchend", h)
                }
                function c() {
                    A.unbind(window, "mousemove", m),
                    A.unbind(window, "touchmove", m),
                    A.unbind(window, "mouseup", c),
                    A.unbind(window, "touchend", c),
                    f()
                }
                function h() {
                    A.unbind(window, "mousemove", g),
                    A.unbind(window, "touchmove", g),
                    A.unbind(window, "mouseup", h),
                    A.unbind(window, "touchend", h),
                    f()
                }
                function _() {
                    var e = u(this.value);
                    !1 !== e ? (r.__color.__state = e,
                    r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString()
                }
                function f() {
                    r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal())
                }
                function m(e) {
                    -1 === e.type.indexOf("touch") && e.preventDefault();
                    var t = r.__saturation_field.getBoundingClientRect()
                      , n = e.touches && e.touches[0] || e
                      , i = n.clientX
                      , o = n.clientY
                      , s = (i - t.left) / (t.right - t.left)
                      , a = 1 - (o - t.top) / (t.bottom - t.top);
                    return a > 1 ? a = 1 : a < 0 && (a = 0),
                    s > 1 ? s = 1 : s < 0 && (s = 0),
                    r.__color.v = a,
                    r.__color.s = s,
                    r.setValue(r.__color.toOriginal()),
                    !1
                }
                function g(e) {
                    -1 === e.type.indexOf("touch") && e.preventDefault();
                    var t = r.__hue_field.getBoundingClientRect()
                      , n = 1 - ((e.touches && e.touches[0] || e).clientY - t.top) / (t.bottom - t.top);
                    return n > 1 ? n = 1 : n < 0 && (n = 0),
                    r.__color.h = 360 * n,
                    r.setValue(r.__color.toOriginal()),
                    !1
                }
                return s.extend(o.__selector.style, {
                    width: "122px",
                    height: "102px",
                    padding: "3px",
                    backgroundColor: "#222",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                }),
                s.extend(o.__field_knob.style, {
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    border: o.__field_knob_border + (o.__color.v < .5 ? "#fff" : "#000"),
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                    borderRadius: "12px",
                    zIndex: 1
                }),
                s.extend(o.__hue_knob.style, {
                    position: "absolute",
                    width: "15px",
                    height: "2px",
                    borderRight: "4px solid #fff",
                    zIndex: 1
                }),
                s.extend(o.__saturation_field.style, {
                    width: "100px",
                    height: "100px",
                    border: "1px solid #555",
                    marginRight: "3px",
                    display: "inline-block",
                    cursor: "pointer"
                }),
                s.extend(a.style, {
                    width: "100%",
                    height: "100%",
                    background: "none"
                }),
                I(a, "top", "rgba(0,0,0,0)", "#000"),
                s.extend(o.__hue_field.style, {
                    width: "15px",
                    height: "100px",
                    border: "1px solid #555",
                    cursor: "ns-resize",
                    position: "absolute",
                    top: "3px",
                    right: "3px"
                }),
                (i = o.__hue_field).style.background = "",
                i.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",
                i.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                i.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                i.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                i.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
                s.extend(o.__input.style, {
                    outline: "none",
                    textAlign: "center",
                    color: "#fff",
                    border: 0,
                    fontWeight: "bold",
                    textShadow: o.__input_textShadow + "rgba(0,0,0,0.7)"
                }),
                A.bind(o.__saturation_field, "mousedown", l),
                A.bind(o.__saturation_field, "touchstart", l),
                A.bind(o.__field_knob, "mousedown", l),
                A.bind(o.__field_knob, "touchstart", l),
                A.bind(o.__hue_field, "mousedown", d),
                A.bind(o.__hue_field, "touchstart", d),
                o.__saturation_field.appendChild(a),
                o.__selector.appendChild(o.__field_knob),
                o.__selector.appendChild(o.__saturation_field),
                o.__selector.appendChild(o.__hue_field),
                o.__hue_field.appendChild(o.__hue_knob),
                o.domElement.appendChild(o.__input),
                o.domElement.appendChild(o.__selector),
                o.updateDisplay(),
                o
            }
            return g(t, e),
            f(t, [{
                key: "updateDisplay",
                value: function() {
                    var e = u(this.getValue());
                    if (!1 !== e) {
                        var t = !1;
                        s.each(v.COMPONENTS, function(n) {
                            if (!s.isUndefined(e[n]) && !s.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n])
                                return t = !0,
                                {}
                        }, this),
                        t && s.extend(this.__color.__state, e)
                    }
                    s.extend(this.__temp.__state, this.__color.__state),
                    this.__temp.a = 1;
                    var n = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0
                      , i = 255 - n;
                    s.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toHexString(),
                        border: this.__field_knob_border + "rgb(" + n + "," + n + "," + n + ")"
                    }),
                    this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px",
                    this.__temp.s = 1,
                    this.__temp.v = 1,
                    I(this.__saturation_field, "left", "#fff", this.__temp.toHexString()),
                    this.__input.value = this.__color.toString(),
                    s.extend(this.__input.style, {
                        backgroundColor: this.__color.toHexString(),
                        color: "rgb(" + n + "," + n + "," + n + ")",
                        textShadow: this.__input_textShadow + "rgba(" + i + "," + i + "," + i + ",.7)"
                    })
                }
            }]),
            t
        }(w)
          , F = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
        function I(e, t, n, i) {
            e.style.background = "",
            s.each(F, function(o) {
                e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); "
            })
        }
        var D = function(e, t) {
            var n = e[t];
            return s.isArray(arguments[2]) || s.isObject(arguments[2]) ? new O(e,t,arguments[2]) : s.isNumber(n) ? s.isNumber(arguments[2]) && s.isNumber(arguments[3]) ? s.isNumber(arguments[4]) ? new N(e,t,arguments[2],arguments[3],arguments[4]) : new N(e,t,arguments[2],arguments[3]) : s.isNumber(arguments[4]) ? new j(e,t,{
                min: arguments[2],
                max: arguments[3],
                step: arguments[4]
            }) : new j(e,t,{
                min: arguments[2],
                max: arguments[3]
            }) : s.isString(n) ? new L(e,t) : s.isFunction(n) ? new B(e,t,"") : s.isBoolean(n) ? new S(e,t) : null
        }
          , P = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        }
          , V = function() {
            function e() {
                p(this, e),
                this.backgroundElement = document.createElement("div"),
                s.extend(this.backgroundElement.style, {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    top: 0,
                    left: 0,
                    display: "none",
                    zIndex: "1000",
                    opacity: 0,
                    WebkitTransition: "opacity 0.2s linear",
                    transition: "opacity 0.2s linear"
                }),
                A.makeFullscreen(this.backgroundElement),
                this.backgroundElement.style.position = "fixed",
                this.domElement = document.createElement("div"),
                s.extend(this.domElement.style, {
                    position: "fixed",
                    display: "none",
                    zIndex: "1001",
                    opacity: 0,
                    WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                    transition: "transform 0.2s ease-out, opacity 0.2s linear"
                }),
                document.body.appendChild(this.backgroundElement),
                document.body.appendChild(this.domElement);
                var t = this;
                A.bind(this.backgroundElement, "click", function() {
                    t.hide()
                })
            }
            return f(e, [{
                key: "show",
                value: function() {
                    var e = this;
                    this.backgroundElement.style.display = "block",
                    this.domElement.style.display = "block",
                    this.domElement.style.opacity = 0,
                    this.domElement.style.webkitTransform = "scale(1.1)",
                    this.layout(),
                    s.defer(function() {
                        e.backgroundElement.style.opacity = 1,
                        e.domElement.style.opacity = 1,
                        e.domElement.style.webkitTransform = "scale(1)"
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this
                      , t = function t() {
                        e.domElement.style.display = "none",
                        e.backgroundElement.style.display = "none",
                        A.unbind(e.domElement, "webkitTransitionEnd", t),
                        A.unbind(e.domElement, "transitionend", t),
                        A.unbind(e.domElement, "oTransitionEnd", t)
                    };
                    A.bind(this.domElement, "webkitTransitionEnd", t),
                    A.bind(this.domElement, "transitionend", t),
                    A.bind(this.domElement, "oTransitionEnd", t),
                    this.backgroundElement.style.opacity = 0,
                    this.domElement.style.opacity = 0,
                    this.domElement.style.webkitTransform = "scale(1.1)"
                }
            }, {
                key: "layout",
                value: function() {
                    this.domElement.style.left = window.innerWidth / 2 - A.getWidth(this.domElement) / 2 + "px",
                    this.domElement.style.top = window.innerHeight / 2 - A.getHeight(this.domElement) / 2 + "px"
                }
            }]),
            e
        }();
        ({
            load: function(e, t) {
                var n = t || document
                  , i = n.createElement("link");
                i.type = "text/css",
                i.rel = "stylesheet",
                i.href = e,
                n.getElementsByTagName("head")[0].appendChild(i)
            },
            inject: function(e, t) {
                var n = document.createElement("style");
                n.type = "text/css",
                n.innerHTML = e;
                var i = (t || document).getElementsByTagName("head")[0];
                try {
                    i.appendChild(n)
                } catch (e) {}
            }
        }).inject(function(e) {
            if (e && "undefined" != typeof window) {
                var t = document.createElement("style");
                return t.setAttribute("type", "text/css"),
                t.innerHTML = e,
                document.head.appendChild(t),
                e
            }
        }(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n"));
        var M = "Default"
          , z = function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !1
            }
        }()
          , U = void 0
          , G = !0
          , X = void 0
          , W = !1
          , K = []
          , Y = function e(t) {
            var n, i = this, o = t || {};
            this.domElement = document.createElement("div"),
            this.__ul = document.createElement("ul"),
            this.domElement.appendChild(this.__ul),
            A.addClass(this.domElement, "dg"),
            this.__folders = {},
            this.__controllers = [],
            this.__rememberedObjects = [],
            this.__rememberedObjectIndecesToControllers = [],
            this.__listening = [],
            o = s.defaults(o, {
                closeOnTop: !1,
                autoPlace: !0,
                width: e.DEFAULT_WIDTH
            }),
            o = s.defaults(o, {
                resizable: o.autoPlace,
                hideable: o.autoPlace
            }),
            s.isUndefined(o.load) ? o.load = {
                preset: M
            } : o.preset && (o.load.preset = o.preset),
            s.isUndefined(o.parent) && o.hideable && K.push(this),
            o.resizable = s.isUndefined(o.parent) && o.resizable,
            o.autoPlace && s.isUndefined(o.scrollable) && (o.scrollable = !0);
            var r = z && "true" === localStorage.getItem(ee(this, "isLocal"))
              , a = void 0
              , l = void 0;
            if (Object.defineProperties(this, {
                parent: {
                    get: function() {
                        return o.parent
                    }
                },
                scrollable: {
                    get: function() {
                        return o.scrollable
                    }
                },
                autoPlace: {
                    get: function() {
                        return o.autoPlace
                    }
                },
                closeOnTop: {
                    get: function() {
                        return o.closeOnTop
                    }
                },
                preset: {
                    get: function() {
                        return i.parent ? i.getRoot().preset : o.load.preset
                    },
                    set: function(e) {
                        i.parent ? i.getRoot().preset = e : o.load.preset = e,
                        function(e) {
                            for (var t = 0; t < e.__preset_select.length; t++)
                                e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t)
                        }(this),
                        i.revert()
                    }
                },
                width: {
                    get: function() {
                        return o.width
                    },
                    set: function(e) {
                        o.width = e,
                        ei(i, e)
                    }
                },
                name: {
                    get: function() {
                        return o.name
                    },
                    set: function(e) {
                        o.name = e,
                        l && (l.innerHTML = o.name)
                    }
                },
                closed: {
                    get: function() {
                        return o.closed
                    },
                    set: function(t) {
                        o.closed = t,
                        o.closed ? A.addClass(i.__ul, e.CLASS_CLOSED) : A.removeClass(i.__ul, e.CLASS_CLOSED),
                        this.onResize(),
                        i.__closeButton && (i.__closeButton.innerHTML = t ? e.TEXT_OPEN : e.TEXT_CLOSED)
                    }
                },
                load: {
                    get: function() {
                        return o.load
                    }
                },
                useLocalStorage: {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        z && (r = e,
                        e ? A.bind(window, "unload", a) : A.unbind(window, "unload", a),
                        localStorage.setItem(ee(i, "isLocal"), e))
                    }
                }
            }),
            s.isUndefined(o.parent)) {
                if (this.closed = o.closed || !1,
                A.addClass(this.domElement, e.CLASS_MAIN),
                A.makeSelectable(this.domElement, !1),
                z && r) {
                    i.useLocalStorage = !0;
                    var d = localStorage.getItem(ee(this, "gui"));
                    d && (o.load = JSON.parse(d))
                }
                this.__closeButton = document.createElement("div"),
                this.__closeButton.innerHTML = e.TEXT_CLOSED,
                A.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON),
                o.closeOnTop ? (A.addClass(this.__closeButton, e.CLASS_CLOSE_TOP),
                this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (A.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM),
                this.domElement.appendChild(this.__closeButton)),
                A.bind(this.__closeButton, "click", function() {
                    i.closed = !i.closed
                })
            } else {
                void 0 === o.closed && (o.closed = !0);
                var u = document.createTextNode(o.name);
                A.addClass(u, "controller-name"),
                l = J(i, u),
                A.addClass(this.__ul, e.CLASS_CLOSED),
                A.addClass(l, "title"),
                A.bind(l, "click", function(e) {
                    return e.preventDefault(),
                    i.closed = !i.closed,
                    !1
                }),
                o.closed || (this.closed = !1)
            }
            o.autoPlace && (s.isUndefined(o.parent) && (G && (X = document.createElement("div"),
            A.addClass(X, "dg"),
            A.addClass(X, e.CLASS_AUTO_PLACE_CONTAINER),
            document.body.appendChild(X),
            G = !1),
            X.appendChild(this.domElement),
            A.addClass(this.domElement, e.CLASS_AUTO_PLACE)),
            this.parent || ei(i, o.width)),
            this.__resizeHandler = function() {
                i.onResizeDebounced()
            }
            ,
            A.bind(window, "resize", this.__resizeHandler),
            A.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
            A.bind(this.__ul, "transitionend", this.__resizeHandler),
            A.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
            this.onResize(),
            o.resizable && function(e) {
                var t = void 0;
                function n(n) {
                    return n.preventDefault(),
                    e.width += t - n.clientX,
                    e.onResize(),
                    t = n.clientX,
                    !1
                }
                function i() {
                    A.removeClass(e.__closeButton, Y.CLASS_DRAG),
                    A.unbind(window, "mousemove", n),
                    A.unbind(window, "mouseup", i)
                }
                function o(o) {
                    return o.preventDefault(),
                    t = o.clientX,
                    A.addClass(e.__closeButton, Y.CLASS_DRAG),
                    A.bind(window, "mousemove", n),
                    A.bind(window, "mouseup", i),
                    !1
                }
                e.__resize_handle = document.createElement("div"),
                s.extend(e.__resize_handle.style, {
                    width: "6px",
                    marginLeft: "-3px",
                    height: "200px",
                    cursor: "ew-resize",
                    position: "absolute"
                }),
                A.bind(e.__resize_handle, "mousedown", o),
                A.bind(e.__closeButton, "mousedown", o),
                e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
            }(this),
            a = function() {
                z && "true" === localStorage.getItem(ee(i, "isLocal")) && localStorage.setItem(ee(i, "gui"), JSON.stringify(i.getSaveObject()))
            }
            ,
            this.saveToLocalStorageIfPossible = a,
            o.parent || (n = i.getRoot(),
            n.width += 1,
            s.defer(function() {
                n.width -= 1
            }))
        };
        function J(e, t, n) {
            var i = document.createElement("li");
            return t && i.appendChild(t),
            n ? e.__ul.insertBefore(i, n) : e.__ul.appendChild(i),
            e.onResize(),
            i
        }
        function Q(e) {
            A.unbind(window, "resize", e.__resizeHandler),
            e.saveToLocalStorageIfPossible && A.unbind(window, "unload", e.saveToLocalStorageIfPossible)
        }
        function Z(e, t) {
            var n = e.__preset_select[e.__preset_select.selectedIndex];
            t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
        }
        function q(e, t) {
            var n = e.getRoot()
              , i = n.__rememberedObjects.indexOf(t.object);
            if (-1 !== i) {
                var o = n.__rememberedObjectIndecesToControllers[i];
                if (void 0 === o && (o = {},
                n.__rememberedObjectIndecesToControllers[i] = o),
                o[t.property] = t,
                n.load && n.load.remembered) {
                    var r = n.load.remembered
                      , s = void 0;
                    if (r[e.preset])
                        s = r[e.preset];
                    else {
                        if (!r[M])
                            return;
                        s = r[M]
                    }
                    if (s[i] && void 0 !== s[i][t.property]) {
                        var a = s[i][t.property];
                        t.initialValue = a,
                        t.setValue(a)
                    }
                }
            }
        }
        function $(e, t, n, i) {
            if (void 0 === t[n])
                throw Error('Object "' + t + '" has no property "' + n + '"');
            var o = void 0;
            if (i.color)
                o = new H(t,n);
            else {
                var r = [t, n].concat(i.factoryArgs);
                o = D.apply(e, r)
            }
            i.before instanceof w && (i.before = i.before.__li),
            q(e, o),
            A.addClass(o.domElement, "c");
            var a = document.createElement("span");
            A.addClass(a, "property-name"),
            a.innerHTML = o.property;
            var l = document.createElement("div");
            l.appendChild(a),
            l.appendChild(o.domElement);
            var d = J(e, l, i.before);
            return A.addClass(d, Y.CLASS_CONTROLLER_ROW),
            o instanceof H ? A.addClass(d, "color") : A.addClass(d, _(o.getValue())),
            !function(e, t, n) {
                if (n.__li = t,
                n.__gui = e,
                s.extend(n, {
                    options: function(t) {
                        if (arguments.length > 1) {
                            var i = n.__li.nextElementSibling;
                            return n.remove(),
                            $(e, n.object, n.property, {
                                before: i,
                                factoryArgs: [s.toArray(arguments)]
                            })
                        }
                        if (s.isArray(t) || s.isObject(t)) {
                            var o = n.__li.nextElementSibling;
                            return n.remove(),
                            $(e, n.object, n.property, {
                                before: o,
                                factoryArgs: [t]
                            })
                        }
                    },
                    name: function(e) {
                        return n.__li.firstElementChild.firstElementChild.innerHTML = e,
                        n
                    },
                    listen: function() {
                        return n.__gui.listen(n),
                        n
                    },
                    remove: function() {
                        return n.__gui.remove(n),
                        n
                    }
                }),
                n instanceof N) {
                    var i = new j(n.object,n.property,{
                        min: n.__min,
                        max: n.__max,
                        step: n.__step
                    });
                    s.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(e) {
                        var t = n[e]
                          , o = i[e];
                        n[e] = i[e] = function() {
                            var e = Array.prototype.slice.call(arguments);
                            return o.apply(i, e),
                            t.apply(n, e)
                        }
                    }),
                    A.addClass(t, "has-slider"),
                    n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild)
                } else if (n instanceof j) {
                    var o = function(t) {
                        if (s.isNumber(n.__min) && s.isNumber(n.__max)) {
                            var i = n.__li.firstElementChild.firstElementChild.innerHTML
                              , o = n.__gui.__listening.indexOf(n) > -1;
                            n.remove();
                            var r = $(e, n.object, n.property, {
                                before: n.__li.nextElementSibling,
                                factoryArgs: [n.__min, n.__max, n.__step]
                            });
                            return r.name(i),
                            o && r.listen(),
                            r
                        }
                        return t
                    };
                    n.min = s.compose(o, n.min),
                    n.max = s.compose(o, n.max)
                } else
                    n instanceof S ? (A.bind(t, "click", function() {
                        A.fakeEvent(n.__checkbox, "click")
                    }),
                    A.bind(n.__checkbox, "click", function(e) {
                        e.stopPropagation()
                    })) : n instanceof B ? (A.bind(t, "click", function() {
                        A.fakeEvent(n.__button, "click")
                    }),
                    A.bind(t, "mouseover", function() {
                        A.addClass(n.__button, "hover")
                    }),
                    A.bind(t, "mouseout", function() {
                        A.removeClass(n.__button, "hover")
                    })) : n instanceof H && (A.addClass(t, "color"),
                    n.updateDisplay = s.compose(function(e) {
                        return t.style.borderLeftColor = n.__color.toString(),
                        e
                    }, n.updateDisplay),
                    n.updateDisplay());
                n.setValue = s.compose(function(t) {
                    return e.getRoot().__preset_select && n.isModified() && Z(e.getRoot(), !0),
                    t
                }, n.setValue)
            }(e, d, o),
            e.__controllers.push(o),
            o
        }
        function ee(e, t) {
            return document.location.href + "." + t
        }
        function et(e, t, n) {
            var i = document.createElement("option");
            i.innerHTML = t,
            i.value = t,
            e.__preset_select.appendChild(i),
            n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
        }
        function en(e, t) {
            t.style.display = e.useLocalStorage ? "block" : "none"
        }
        function ei(e, t) {
            e.domElement.style.width = t + "px",
            e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"),
            e.__closeButton && (e.__closeButton.style.width = t + "px")
        }
        function eo(e, t) {
            var n = {};
            return s.each(e.__rememberedObjects, function(i, o) {
                var r = {}
                  , a = e.__rememberedObjectIndecesToControllers[o];
                s.each(a, function(e, n) {
                    r[n] = t ? e.initialValue : e.getValue()
                }),
                n[o] = r
            }),
            n
        }
        Y.toggleHide = function() {
            W = !W,
            s.each(K, function(e) {
                e.domElement.style.display = W ? "none" : ""
            })
        }
        ,
        Y.CLASS_AUTO_PLACE = "a",
        Y.CLASS_AUTO_PLACE_CONTAINER = "ac",
        Y.CLASS_MAIN = "main",
        Y.CLASS_CONTROLLER_ROW = "cr",
        Y.CLASS_TOO_TALL = "taller-than-window",
        Y.CLASS_CLOSED = "closed",
        Y.CLASS_CLOSE_BUTTON = "close-button",
        Y.CLASS_CLOSE_TOP = "close-top",
        Y.CLASS_CLOSE_BOTTOM = "close-bottom",
        Y.CLASS_DRAG = "drag",
        Y.DEFAULT_WIDTH = 245,
        Y.TEXT_CLOSED = "Close Controls",
        Y.TEXT_OPEN = "Open Controls",
        Y._keydownHandler = function(e) {
            "text" !== document.activeElement.type && (72 === e.which || 72 === e.keyCode) && Y.toggleHide()
        }
        ,
        A.bind(window, "keydown", Y._keydownHandler, !1),
        s.extend(Y.prototype, {
            add: function(e, t) {
                return $(this, e, t, {
                    factoryArgs: Array.prototype.slice.call(arguments, 2)
                })
            },
            addColor: function(e, t) {
                return $(this, e, t, {
                    color: !0
                })
            },
            remove: function(e) {
                this.__ul.removeChild(e.__li),
                this.__controllers.splice(this.__controllers.indexOf(e), 1);
                var t = this;
                s.defer(function() {
                    t.onResize()
                })
            },
            destroy: function() {
                if (this.parent)
                    throw Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
                this.autoPlace && X.removeChild(this.domElement);
                var e = this;
                s.each(this.__folders, function(t) {
                    e.removeFolder(t)
                }),
                A.unbind(window, "keydown", Y._keydownHandler, !1),
                Q(this)
            },
            addFolder: function(e) {
                if (void 0 !== this.__folders[e])
                    throw Error('You already have a folder in this GUI by the name "' + e + '"');
                var t = {
                    name: e,
                    parent: this
                };
                t.autoPlace = this.autoPlace,
                this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed,
                t.load = this.load.folders[e]);
                var n = new Y(t);
                this.__folders[e] = n;
                var i = J(this, n.domElement);
                return A.addClass(i, "folder"),
                n
            },
            removeFolder: function(e) {
                this.__ul.removeChild(e.domElement.parentElement),
                delete this.__folders[e.name],
                this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name],
                Q(e);
                var t = this;
                s.each(e.__folders, function(t) {
                    e.removeFolder(t)
                }),
                s.defer(function() {
                    t.onResize()
                })
            },
            open: function() {
                this.closed = !1
            },
            close: function() {
                this.closed = !0
            },
            hide: function() {
                this.domElement.style.display = "none"
            },
            show: function() {
                this.domElement.style.display = ""
            },
            onResize: function() {
                var e = this.getRoot();
                if (e.scrollable) {
                    var t = A.getOffset(e.__ul).top
                      , n = 0;
                    s.each(e.__ul.childNodes, function(t) {
                        e.autoPlace && t === e.__save_row || (n += A.getHeight(t))
                    }),
                    window.innerHeight - t - 20 < n ? (A.addClass(e.domElement, Y.CLASS_TOO_TALL),
                    e.__ul.style.height = window.innerHeight - t - 20 + "px") : (A.removeClass(e.domElement, Y.CLASS_TOO_TALL),
                    e.__ul.style.height = "auto")
                }
                e.__resize_handle && s.defer(function() {
                    e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                }),
                e.__closeButton && (e.__closeButton.style.width = e.width + "px")
            },
            onResizeDebounced: s.debounce(function() {
                this.onResize()
            }, 50),
            remember: function() {
                if (s.isUndefined(U) && ((U = new V).domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>'),
                this.parent)
                    throw Error("You can only call remember on a top level GUI.");
                var e = this;
                s.each(Array.prototype.slice.call(arguments), function(t) {
                    0 === e.__rememberedObjects.length && function(e) {
                        var t = e.__save_row = document.createElement("li");
                        A.addClass(e.domElement, "has-save"),
                        e.__ul.insertBefore(t, e.__ul.firstChild),
                        A.addClass(t, "save-row");
                        var n = document.createElement("span");
                        n.innerHTML = "&nbsp;",
                        A.addClass(n, "button gears");
                        var i = document.createElement("span");
                        i.innerHTML = "Save",
                        A.addClass(i, "button"),
                        A.addClass(i, "save");
                        var o = document.createElement("span");
                        o.innerHTML = "New",
                        A.addClass(o, "button"),
                        A.addClass(o, "save-as");
                        var r = document.createElement("span");
                        r.innerHTML = "Revert",
                        A.addClass(r, "button"),
                        A.addClass(r, "revert");
                        var a = e.__preset_select = document.createElement("select");
                        if (e.load && e.load.remembered ? s.each(e.load.remembered, function(t, n) {
                            et(e, n, n === e.preset)
                        }) : et(e, M, !1),
                        A.bind(a, "change", function() {
                            for (var t = 0; t < e.__preset_select.length; t++)
                                e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                            e.preset = this.value
                        }),
                        t.appendChild(a),
                        t.appendChild(n),
                        t.appendChild(i),
                        t.appendChild(o),
                        t.appendChild(r),
                        z) {
                            var l = document.getElementById("dg-local-explain")
                              , d = document.getElementById("dg-local-storage");
                            document.getElementById("dg-save-locally").style.display = "block",
                            "true" === localStorage.getItem(ee(e, "isLocal")) && d.setAttribute("checked", "checked"),
                            en(e, l),
                            A.bind(d, "change", function() {
                                e.useLocalStorage = !e.useLocalStorage,
                                en(e, l)
                            })
                        }
                        var u = document.getElementById("dg-new-constructor");
                        A.bind(u, "keydown", function(e) {
                            e.metaKey && (67 === e.which || 67 === e.keyCode) && U.hide()
                        }),
                        A.bind(n, "click", function() {
                            u.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2),
                            U.show(),
                            u.focus(),
                            u.select()
                        }),
                        A.bind(i, "click", function() {
                            e.save()
                        }),
                        A.bind(o, "click", function() {
                            var t = prompt("Enter a new preset name.");
                            t && e.saveAs(t)
                        }),
                        A.bind(r, "click", function() {
                            e.revert()
                        })
                    }(e),
                    -1 === e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
                }),
                this.autoPlace && ei(this, this.width)
            },
            getRoot: function() {
                for (var e = this; e.parent; )
                    e = e.parent;
                return e
            },
            getSaveObject: function() {
                var e = this.load;
                return e.closed = this.closed,
                this.__rememberedObjects.length > 0 && (e.preset = this.preset,
                e.remembered || (e.remembered = {}),
                e.remembered[this.preset] = eo(this)),
                e.folders = {},
                s.each(this.__folders, function(t, n) {
                    e.folders[n] = t.getSaveObject()
                }),
                e
            },
            save: function() {
                this.load.remembered || (this.load.remembered = {}),
                this.load.remembered[this.preset] = eo(this),
                Z(this, !1),
                this.saveToLocalStorageIfPossible()
            },
            saveAs: function(e) {
                this.load.remembered || (this.load.remembered = {},
                this.load.remembered[M] = eo(this, !0)),
                this.load.remembered[e] = eo(this),
                this.preset = e,
                et(this, e, !0),
                this.saveToLocalStorageIfPossible()
            },
            revert: function(e) {
                s.each(this.__controllers, function(t) {
                    this.getRoot().load.remembered ? q(e || this.getRoot(), t) : t.setValue(t.initialValue),
                    t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
                }, this),
                s.each(this.__folders, function(e) {
                    e.revert(e)
                }),
                e || Z(this.getRoot(), !1)
            },
            listen: function(e) {
                var t = 0 === this.__listening.length;
                this.__listening.push(e),
                t && function e(t) {
                    0 !== t.length && P.call(window, function() {
                        e(t)
                    }),
                    s.each(t, function(e) {
                        e.updateDisplay()
                    })
                }(this.__listening)
            },
            updateDisplay: function() {
                s.each(this.__controllers, function(e) {
                    e.updateDisplay()
                }),
                s.each(this.__folders, function(e) {
                    e.updateDisplay()
                })
            }
        });
        var er = {
            Color: v,
            math: h,
            interpret: u
        }
          , es = {
            Controller: w,
            BooleanController: S,
            OptionController: O,
            StringController: L,
            NumberController: R,
            NumberControllerBox: j,
            NumberControllerSlider: N,
            FunctionController: B,
            ColorController: H
        }
          , ea = {
            dom: A
        }
          , el = {
            GUI: Y
        }
          , ed = Y;
        t.default = {
            color: er,
            controllers: es,
            dom: ea,
            gui: el,
            GUI: ed
        }
    },
    9028: function(e, t, n) {
        var i = n(959)
          , o = n(2982);
        t.Z = function(e, t) {
            var n = (0,
            i.useState)(void 0 !== t ? t : !!o.jU && window.matchMedia(e).matches)
              , r = n[0]
              , s = n[1];
            return (0,
            i.useEffect)(function() {
                var t = !0
                  , n = window.matchMedia(e)
                  , i = function() {
                    t && s(!!n.matches)
                };
                return n.addListener(i),
                s(n.matches),
                function() {
                    t = !1,
                    n.removeListener(i)
                }
            }, [e]),
            r
        }
    },
    1022: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var i = n(959)
          , o = n(6061)
          , r = function(e) {
            var t = (0,
            i.useRef)(e);
            t.current = e,
            (0,
            o.Z)(function() {
                return function() {
                    return t.current()
                }
            })
        }
          , s = function(e) {
            var t = (0,
            i.useRef)(0)
              , n = (0,
            i.useState)(e)
              , o = n[0]
              , s = n[1]
              , a = (0,
            i.useCallback)(function(e) {
                cancelAnimationFrame(t.current),
                t.current = requestAnimationFrame(function() {
                    s(e)
                })
            }, []);
            return r(function() {
                cancelAnimationFrame(t.current)
            }),
            [o, a]
        }
          , a = n(2982)
          , l = function(e, t) {
            void 0 === e && (e = 1 / 0),
            void 0 === t && (t = 1 / 0);
            var n = s({
                width: a.jU ? window.innerWidth : e,
                height: a.jU ? window.innerHeight : t
            })
              , o = n[0]
              , r = n[1];
            return (0,
            i.useEffect)(function() {
                if (a.jU) {
                    var e = function() {
                        r({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    };
                    return (0,
                    a.on)(window, "resize", e),
                    function() {
                        (0,
                        a.S1)(window, "resize", e)
                    }
                }
            }, []),
            o
        }
    },
    624: function(e, t, n) {
        n.d(t, {
            OI: function() {
                return s
            },
            qO: function() {
                return o
            }
        });
        let i = e => null != e
          , o = e => !!i(e) && (1 === e.length && "text"in e[0] ? !!e[0].text : !!e.length)
          , r = e => i(e) && ("id"in e || "url"in e)
          , s = r
          , a = e => i(a) && !!e
    }
}]);
