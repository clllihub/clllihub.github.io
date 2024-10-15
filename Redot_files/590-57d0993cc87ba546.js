(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[590], {
    6590: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return f
            }
        });
        var i = r(1527)
          , n = r(8365)
          , a = r.n(n);
        let o = e => e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
          , l = (e, t) => {
            let r = new URL(e);
            for (let e in t) {
                let i = o(e)
                  , n = t[e];
                void 0 === n ? r.searchParams.delete(i) : Array.isArray(n) ? r.searchParams.set(i, n.join(",")) : r.searchParams.set(i, `${n}`)
            }
            let i = r.searchParams.get("s");
            return i && (r.searchParams.delete("s"),
            r.searchParams.append("s", i)),
            r.toString()
        }
          , s = e => {
            let t = new URL(e.src)
              , r = {
                fit: t.searchParams.get("fit") || "max",
                w: e.width,
                h: void 0
            };
            return e.quality && (r.q = e.quality),
            l(e.src, r)
        }
          , u = e => null != e
          , c = e => u(e) && !!e.url
          , d = e => {
            if ("number" == typeof e || void 0 === e)
                return e;
            {
                let t = Number.parseInt(e);
                if (Number.isNaN(t))
                    return;
                return t
            }
        }
          , f = ({field: e, imgixParams: t={}, alt: r, fallbackAlt: n, fill: o, width: u, height: f, fallback: g=null, ...h}) => {
            if (!c(e))
                return (0,
                i.jsx)(i.Fragment, {
                    children: g
                });
            {
                let c = t;
                for (let e in t)
                    null === c[e] && (c[e] = void 0);
                let g = l(e.url, t)
                  , m = e.dimensions.width / e.dimensions.height
                  , p = d(u)
                  , v = d(f)
                  , w = p ?? e.dimensions.width
                  , b = v ?? e.dimensions.height;
                null != p && null == v ? b = p / m : null == p && null != v && (w = v * m);
                let y = r ?? (e.alt || n)
                  , E = a();
                return "default"in E && (E = E.default),
                (0,
                i.jsx)(E, {
                    src: g,
                    width: o ? void 0 : w,
                    height: o ? void 0 : b,
                    alt: y,
                    fill: o,
                    loader: s,
                    ...h
                })
            }
        }
    },
    9436: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = r(5321).Z
          , n = r(1322).Z
          , a = r(6687).Z
          , o = r(6239).Z
          , l = a(r(959))
          , s = n(r(685))
          , u = r(2871)
          , c = r(4274)
          , d = r(6383);
        r(7180);
        var f = n(r(5120));
        let g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function h(e) {
            return void 0 !== e.default
        }
        function m(e) {
            return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function p(e, t, r, n, a, o, l) {
            if (!e || e["data-loaded-src"] === t)
                return;
            e["data-loaded-src"] = t;
            let s = "decode"in e ? e.decode() : Promise.resolve();
            s.catch( () => {}
            ).then( () => {
                if (e.parentNode) {
                    if ("blur" === r && o(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , a = !1;
                        n.current(i({}, t, {
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => a,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                a = !0,
                                t.stopPropagation()
                            }
                        }))
                    }
                    (null == a ? void 0 : a.current) && a.current(e)
                }
            }
            )
        }
        let v = l.forwardRef( (e, t) => {
            var {imgAttributes: r, heightInt: n, widthInt: a, qualityInt: s, className: u, imgStyle: c, blurStyle: d, isLazy: f, fill: g, placeholder: h, loading: m, srcString: v, config: w, unoptimized: b, loader: y, onLoadRef: E, onLoadingCompleteRef: S, setBlurComplete: C, setShowAltText: j, onLoad: _, onError: x} = e
              , z = o(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
            return m = f ? "lazy" : m,
            l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, z, r, {
                width: a,
                height: n,
                decoding: "async",
                "data-nimg": g ? "fill" : "1",
                className: u,
                loading: m,
                style: i({}, c, d),
                ref: l.useCallback(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (x && (e.src = e.src),
                    e.complete && p(e, v, h, E, S, C, b))
                }
                , [v, h, E, S, C, x, b, t]),
                onLoad: e => {
                    let t = e.currentTarget;
                    p(t, v, h, E, S, C, b)
                }
                ,
                onError: e => {
                    j(!0),
                    "blur" === h && C(!0),
                    x && x(e)
                }
            })))
        }
        )
          , w = l.forwardRef( (e, t) => {
            let r, n;
            var a, {src: p, sizes: w, unoptimized: b=!1, priority: y=!1, loading: E, className: S, quality: C, width: j, height: _, fill: x, style: z, onLoad: P, onLoadingComplete: R, placeholder: k="empty", blurDataURL: I, layout: N, objectFit: O, objectPosition: A, lazyBoundary: L, lazyRoot: M} = e, q = o(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
            let B = l.useContext(d.ImageConfigContext)
              , D = l.useMemo( () => {
                let e = g || B || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , r = e.deviceSizes.sort( (e, t) => e - t);
                return i({}, e, {
                    allSizes: t,
                    deviceSizes: r
                })
            }
            , [B])
              , F = q
              , W = F.loader || f.default;
            delete F.loader;
            let Z = "__next_img_default"in W;
            if (Z) {
                if ("custom" === D.loader)
                    throw Error('Image with src "'.concat(p, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
            } else {
                let e = W;
                W = t => {
                    let {config: r} = t
                      , i = o(t, ["config"]);
                    return e(i)
                }
            }
            if (N) {
                "fill" === N && (x = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[N];
                e && (z = i({}, z, e));
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[N];
                t && !w && (w = t)
            }
            let T = ""
              , U = m(j)
              , G = m(_);
            if ("object" == typeof (a = p) && (h(a) || void 0 !== a.src)) {
                let e = h(p) ? p.default : p;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                if (r = e.blurWidth,
                n = e.blurHeight,
                I = I || e.blurDataURL,
                T = e.src,
                !x) {
                    if (U || G) {
                        if (U && !G) {
                            let t = U / e.width;
                            G = Math.round(e.height * t)
                        } else if (!U && G) {
                            let t = G / e.height;
                            U = Math.round(e.width * t)
                        }
                    } else
                        U = e.width,
                        G = e.height
                }
            }
            let V = !y && ("lazy" === E || void 0 === E);
            ((p = "string" == typeof p ? p : T).startsWith("data:") || p.startsWith("blob:")) && (b = !0,
            V = !1),
            D.unoptimized && (b = !0),
            Z && p.endsWith(".svg") && !D.dangerouslyAllowSVG && (b = !0);
            let[$,J] = l.useState(!1)
              , [H,K] = l.useState(!1)
              , Q = m(C)
              , X = Object.assign(x ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: A
            } : {}, H ? {} : {
                color: "transparent"
            }, z)
              , Y = "blur" === k && I && !$ ? {
                backgroundSize: X.objectFit || "cover",
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({
                    widthInt: U,
                    heightInt: G,
                    blurWidth: r,
                    blurHeight: n,
                    blurDataURL: I
                }), '")')
            } : {}
              , ee = function(e) {
                let {config: t, src: r, unoptimized: i, width: n, quality: a, sizes: o, loader: l} = e;
                if (i)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: s, kind: u} = function(e, t, r) {
                    let {deviceSizes: i, allSizes: n} = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let i; i = e.exec(r); i)
                            t.push(parseInt(i[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: n.filter(t => t >= i[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: n,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof t)
                        return {
                            widths: i,
                            kind: "w"
                        };
                    let a = [...new Set([t, 2 * t].map(e => n.find(t => t >= e) || n[n.length - 1]))];
                    return {
                        widths: a,
                        kind: "x"
                    }
                }(t, n, o)
                  , c = s.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: s.map( (e, i) => "".concat(l({
                        config: t,
                        src: r,
                        quality: a,
                        width: e
                    }), " ").concat("w" === u ? e : i + 1).concat(u)).join(", "),
                    src: l({
                        config: t,
                        src: r,
                        quality: a,
                        width: s[c]
                    })
                }
            }({
                config: D,
                src: p,
                unoptimized: b,
                width: U,
                quality: Q,
                sizes: w,
                loader: W
            })
              , et = p
              , er = {
                imageSrcSet: ee.srcSet,
                imageSizes: ee.sizes,
                crossOrigin: F.crossOrigin
            }
              , ei = l.useRef(P);
            l.useEffect( () => {
                ei.current = P
            }
            , [P]);
            let en = l.useRef(R);
            l.useEffect( () => {
                en.current = R
            }
            , [R]);
            let ea = i({
                isLazy: V,
                imgAttributes: ee,
                heightInt: G,
                widthInt: U,
                qualityInt: Q,
                className: S,
                imgStyle: X,
                blurStyle: Y,
                loading: E,
                config: D,
                fill: x,
                unoptimized: b,
                placeholder: k,
                loader: W,
                srcString: et,
                onLoadRef: ei,
                onLoadingCompleteRef: en,
                setBlurComplete: J,
                setShowAltText: K
            }, F);
            return l.default.createElement(l.default.Fragment, null, l.default.createElement(v, Object.assign({}, ea, {
                ref: t
            })), y ? l.default.createElement(s.default, null, l.default.createElement("link", Object.assign({
                key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                rel: "preload",
                as: "image",
                href: ee.srcSet ? void 0 : ee.src
            }, er))) : null)
        }
        );
        t.default = w,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    2871: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getImageBlurSvg = function(e) {
            let {widthInt: t, heightInt: r, blurWidth: i, blurHeight: n, blurDataURL: a} = e
              , o = i || t
              , l = n || r
              , s = a.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return o && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o, " ").concat(l, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i && n ? "1" : "20", "'/%3E").concat(s, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a, "'/%3E%3C/svg%3E")
        }
    },
    5120: function(e, t) {
        "use strict";
        function r(e) {
            let {config: t, src: r, width: i, quality: n} = e;
            return "".concat(t.path, "?url=").concat(encodeURIComponent(r), "&w=").concat(i, "&q=").concat(n || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        r.__next_img_default = !0,
        t.default = r
    },
    8365: function(e, t, r) {
        e.exports = r(9436)
    }
}]);
