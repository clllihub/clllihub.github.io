(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[873], {
    5801: function(e, t, i) {
        "use strict";
        i.d(t, {
            o: function() {
                return d
            }
        });
        var n = i(6162)
          , r = i(5924)
          , l = i(959)
          , a = i(8666)
          , s = i(2317)
          , c = i.n(s);
        function d(e) {
            let {children: t=null, diagonal: i=!1, reversed: s=!1, style: d={}, className: o="", durationIn: u=1.2, durationOut: m=1, ...h} = e
              , g = (0,
            l.useRef)(null);
            return (0,
            n.jsx)(a.f, {
                ...h,
                ref: g,
                className: (0,
                r.Z)(o, c().slide, {
                    [c().diagonal]: i,
                    [c().reversed]: s
                }),
                durationIn: u,
                durationOut: m,
                style: {
                    ...d
                },
                children: (0,
                n.jsx)("div", {
                    className: c().slideInner,
                    children: t
                })
            })
        }
    },
    873: function(e, t, i) {
        "use strict";
        i.d(t, {
            wx: function() {
                return Y
            }
        });
        var n = i(6162)
          , r = i(624)
          , l = i(5924)
          , a = i(5801)
          , s = i(3944)
          , c = i(7297)
          , d = i(4448)
          , o = i(733)
          , u = i.n(o)
          , m = i(959)
          , h = i(7339)
          , g = i.n(h)
          , _ = (0,
        m.memo)(function(e) {
            let {slice: t} = e
              , {primary: i, items: c} = t
              , {layout: o, centered: u} = i;
            return (0,
            n.jsx)("section", {
                className: "o-section",
                children: (0,
                n.jsx)("div", {
                    style: {
                        "--length": c.length
                    },
                    className: (0,
                    l.Z)(g().grid, "layout-grid-inner", {
                        [g().l1]: "layout_x11-11" === o,
                        [g().l1alt]: "layout_x11-1" === o,
                        [g().l2]: "layout_11-1" === o,
                        [g().l3]: "layout_4-1" === o,
                        [g().l4]: "layout_4" === o,
                        [g().centered]: u
                    }),
                    children: c.map( (e, t) => {
                        let {image: i, video: c} = e;
                        return (0,
                        n.jsx)("div", {
                            className: (0,
                            l.Z)(g().grid_item),
                            children: r.OI(c) ? (0,
                            n.jsx)(d.W, {
                                className: (0,
                                l.Z)(g().video),
                                src: c.url
                            }) : (0,
                            n.jsx)(a.o, {
                                intersection: !0,
                                children: (0,
                                n.jsx)(s.E, {
                                    field: i,
                                    alt: i.alt,
                                    width: "1000",
                                    height: "auto"
                                })
                            })
                        }, t)
                    }
                    )
                })
            })
        })
          , x = (0,
        m.memo)(function(e) {
            var t, i;
            let {slice: r} = e;
            if (!(null === (t = r.primary) || void 0 === t ? void 0 : null === (i = t.image) || void 0 === i ? void 0 : i.dimensions))
                return null;
            let l = r.primary.image.dimensions.width
              , a = r.primary.image.dimensions.height;
            return (0,
            n.jsx)("section", {
                className: "o-section -full",
                children: (0,
                n.jsx)("div", {
                    class: "aspect-ratio",
                    style: {
                        "--aspect-ratio": l / a
                    },
                    children: (0,
                    n.jsx)(s.E, {
                        field: r.primary.image,
                        ...r.primary.image.dimensions,
                        alt: r.primary.image.alt
                    })
                })
            })
        })
          , v = i(6624)
          , f = i(9028)
          , p = i(3106)
          , w = i(3439)
          , j = i(2206)
          , y = i(1022)
          , b = i(8207);
        let E = () => {
            let[e,t] = (0,
            m.useState)(void 0);
            return (0,
            m.useEffect)( () => {
                let e = () => {
                    let e = parseFloat(getComputedStyle(document.getElementById("full-vh")).height)
                      , i = window.innerHeight;
                    t(e - i)
                }
                ;
                return e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
            }
            , []),
            e
        }
        ;
        var N = i(4888)
          , Z = i.n(N);
        let I = e => {
            let {size: t, scale: i, gap: n, gapIncrement: r} = e;
            return t / 2 * i + n * i + n * r * .1
        }
          , S = (e, t, i, n) => Math.hypot(i - e, n - t);
        function L(e) {
            let {children: t=null, enabled: r=!1, inView: a=!1, useGui: s=!1, className: c="", showNext: d=null, isMobile: o=!1, wrapperRef: u=null} = e
              , {width: h, height: g} = (0,
            y.Z)()
              , _ = E()
              , [x,f] = (0,
            m.useState)(0)
              , [p,N] = (0,
            m.useState)(!1)
              , [L,P] = (0,
            m.useState)(!1)
              , [C,R] = (0,
            v.EL)()
              , [z,F] = (0,
            v.EL)()
              , M = (0,
            m.useRef)(null)
              , [O,T] = (0,
            m.useState)({
                x: 0,
                y: 0
            })
              , [W,D] = (0,
            m.useState)(0)
              , k = (0,
            m.useRef)()
              , V = (0,
            m.useRef)()
              , X = (0,
            m.useRef)()
              , U = (0,
            m.useRef)()
              , Y = (0,
            m.useRef)();
            (0,
            w.LZ)(e => {
                let {scroll: t} = e;
                D(t)
            }
            );
            let A = (0,
            m.useRef)({
                scaleMin: .2,
                scaleMax: 1,
                gap: 72,
                space: 20,
                threshold: 72,
                duration: 1,
                lineDuration: 1
            })
              , G = g + _
              , H = A.current.gap * h / 1440
              , J = A.current.space * h / 1440
              , q = "expo.out";
            (0,
            m.useEffect)( () => {
                if (!s)
                    return;
                let e = i(464)
                  , t = new e.GUI({
                    autoPlace: !1
                });
                M.current.appendChild(t.domElement);
                let n = t.addFolder("Global")
                  , r = t.addFolder("Line")
                  , l = t.addFolder("Images");
                return n.add(A.current, "scaleMin", .1, 1, .05).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                n.add(A.current, "scaleMax", .1, 1, .05).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                n.add(A.current, "duration", .2, 3, .02).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                n.add(A.current, "space", 0, 200, 1).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                r.add(A.current, "gap", 0, 200, 1).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                r.add(A.current, "lineDuration", .2, 3, .02).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                l.add(A.current, "threshold", 10, 200, 1).onFinishChange( () => {
                    f(new Date().getTime())
                }
                ),
                t.domElement.id = "gui",
                t.domElement.parentElement.style.zIndex = 999,
                t.add,
                () => {
                    t.destroy()
                }
            }
            , [s]);
            let {scaleMin: B, scaleMax: K, threshold: Q, duration: $, lineDuration: ee} = A.current;
            (0,
            m.useEffect)( () => {
                u && u.current && C(u.current)
            }
            , [u, C]);
            let et = (0,
            m.useCallback)(function(e) {
                let {xPercent: t=.5, yPercent: i=.5} = e
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}
                  , r = j.ZP.utils.mapRange(0, 1, -1, 1, t)
                  , l = j.ZP.utils.mapRange(0, 1, -1, 1, i)
                  , a = j.ZP.utils.mapRange(0, 2, K, B, Math.abs(r) + Math.abs(l))
                  , s = h / 2 * r - F.width * a / 2 * r;
                Math.abs(s) > h / 2 - F.width * a / 2 - J && (s = (h / 2 - F.width * a / 2 - J) * Math.sign(s));
                let c = G / 2 * l - F.height * a / 2 * l;
                Math.abs(c) > G / 2 - F.height * a / 2 - J && (c = (G / 2 - F.height * a / 2 - J) * Math.sign(c));
                let d = K - a
                  , o = I({
                    size: F.width,
                    scale: a,
                    gap: H,
                    gapIncrement: d
                })
                  , u = -o
                  , m = I({
                    size: F.height,
                    scale: a,
                    gap: H,
                    gapIncrement: d
                })
                  , g = -m;
                return j.ZP.to(k.current, {
                    x: s,
                    y: c,
                    scale: a,
                    duration: $,
                    ease: q
                }),
                j.ZP.to(V.current, {
                    x: h / 2 + s - o,
                    duration: ee,
                    ease: q
                }),
                j.ZP.to(X.current, {
                    x: h / 2 + s - u,
                    duration: ee,
                    ease: q
                }),
                j.ZP.to(U.current, {
                    y: G / 2 + c - m,
                    duration: ee,
                    ease: q
                }),
                j.ZP.to(Y.current, {
                    y: G / 2 + c - g,
                    duration: ee,
                    ease: q
                }),
                j.ZP.delayedCall($, n),
                {
                    x: s,
                    y: c,
                    scale: a,
                    x1: o,
                    x2: u,
                    y1: m,
                    y2: g
                }
            }, [x, F])
              , ei = (0,
            m.useCallback)(e => {
                let {width: t, height: i, top: n} = R
                  , r = e.clientX
                  , l = e.clientY - (n - W);
                et({
                    xPercent: r / t,
                    yPercent: l / i
                }),
                S(O.x, O.y, e.clientX, e.clientY) > Q && (d && d(),
                T({
                    x: e.clientX,
                    y: e.clientY
                }))
            }
            , [R, et, O, W]);
            return (0,
            m.useEffect)( () => {
                if (r && a && !o)
                    return u.current.addEventListener("pointermove", ei, !1),
                    () => {
                        u && u.current && u.current.removeEventListener("pointermove", ei, !1)
                    }
            }
            , [r, a, ei, o]),
            (0,
            m.useEffect)( () => {
                F.width && !p && (N(!0),
                et({
                    xPercent: .5,
                    yPercent: .5
                }, () => {
                    j.ZP.set([V.current, X.current], {
                        scaleY: 0
                    }),
                    j.ZP.set([U.current, Y.current], {
                        scaleX: 0
                    })
                }
                ))
            }
            , [F.width, p]),
            (0,
            m.useEffect)( () => {
                if (!a || L)
                    return;
                let e = j.ZP.timeline({
                    onComplete: () => {
                        P(!0)
                    }
                });
                e.to([V.current, X.current, U.current, Y.current], {
                    scaleX: 1,
                    scaleY: 1,
                    transformOrigin: function(e, t) {
                        return t.classList.contains(Z().vertical) ? "top center" : "center right"
                    },
                    duration: 1,
                    stagger: .2,
                    ease: "power4.out"
                })
            }
            , [a, L]),
            (0,
            m.useEffect)( () => {
                o && et({
                    xPercent: .5,
                    yPercent: .5
                })
            }
            , [o, et]),
            (0,
            n.jsxs)("div", {
                className: c,
                children: [s && (0,
                n.jsx)("div", {
                    ref: M,
                    className: Z().gui
                }), (0,
                n.jsx)(b.x, {
                    ref: V,
                    vertical: !0,
                    className: (0,
                    l.Z)(Z().line, Z().vertical, Z().left, {
                        [Z().inView]: a
                    })
                }), (0,
                n.jsx)(b.x, {
                    ref: X,
                    vertical: !0,
                    className: (0,
                    l.Z)(Z().line, Z().vertical, Z().right, {
                        [Z().inView]: a
                    })
                }), (0,
                n.jsx)(b.x, {
                    ref: U,
                    horizontal: !0,
                    className: (0,
                    l.Z)(Z().line, Z().horizontal, Z().top, {
                        [Z().inView]: a
                    })
                }), (0,
                n.jsx)(b.x, {
                    ref: Y,
                    horizontal: !0,
                    className: (0,
                    l.Z)(Z().line, Z().horizontal, Z().bottom, {
                        [Z().inView]: a
                    })
                }), (0,
                n.jsx)("div", {
                    ref: e => {
                        k.current = e,
                        z(e)
                    }
                    ,
                    children: t
                })]
            })
        }
        var P = i(6095)
          , C = i.n(P);
        function R(e) {
            let {images: t=[], isLandscape: i=!1} = e
              , [r,c] = (0,
            m.useState)(0)
              , [d,o] = (0,
            m.useState)(!1)
              , u = (0,
            f.Z)("(max-width: 800px)")
              , [h,g] = (0,
            p.s)({
                threshold: .5,
                once: !0
            })
              , {setRef: _, inView: x} = (0,
            v.Or)({
                threshold: 0
            })
              , w = (0,
            m.useRef)(null)
              , j = (0,
            m.useCallback)( () => {
                c(e => (e + 1) % t.length)
            }
            , [r]);
            (0,
            m.useEffect)( () => {
                if (h) {
                    let e = setTimeout( () => {
                        o(!0)
                    }
                    , 1200);
                    return () => clearTimeout(e)
                }
            }
            , [h]),
            (0,
            m.useEffect)( () => {
                if (!w.current)
                    return;
                if (u) {
                    let e = setInterval( () => {
                        j()
                    }
                    , 2e3)
                      , t = () => {
                        j(),
                        clearInterval(e),
                        e = setInterval( () => {
                            j()
                        }
                        , 2e3)
                    }
                    ;
                    return w.current.addEventListener("click", t),
                    () => {
                        clearInterval(e),
                        w.current && w.current.removeEventListener("click", t)
                    }
                }
                let e = () => {
                    document.documentElement.classList.add("is-cursor-move")
                }
                  , t = () => {
                    document.documentElement.classList.remove("is-cursor-move")
                }
                ;
                return w.current.addEventListener("mouseenter", e),
                w.current.addEventListener("mouseleave", t),
                () => {
                    document.documentElement.classList.remove("is-cursor-move"),
                    w.current && (w.current.removeEventListener("mouseenter", e),
                    w.current.removeEventListener("mouseleave", t))
                }
            }
            , [u]);
            let y = i ? 480 : 328
              , b = i ? 328 : 480;
            return (0,
            n.jsx)("div", {
                className: (0,
                l.Z)(C().hero),
                ref: e => {
                    g(e),
                    _(e),
                    w.current = e
                }
                ,
                children: (0,
                n.jsx)(L, {
                    showNext: j,
                    enabled: d,
                    inView: x,
                    isMobile: u,
                    wrapperRef: w,
                    children: (0,
                    n.jsx)(a.o, {
                        active: h,
                        className: (0,
                        l.Z)("aspect-ratio", C().heroImageInner, {
                            [C().landscape]: i
                        }),
                        style: {
                            "--aspect-ratio": i ? 480 / 328 : 328 / 480
                        },
                        children: t.map( (e, t) => (0,
                        n.jsx)(s.E, {
                            className: (0,
                            l.Z)(C().heroImage, {
                                [C().active]: r === t
                            }),
                            field: e,
                            alt: e.alt,
                            width: 1.4 * y,
                            height: 1.4 * b
                        }, e.url))
                    })
                })
            })
        }
        let z = e => {
            let {slice: t} = e
              , {items: i, primary: r} = t
              , {isLandscape: l} = r
              , a = i.map(e => {
                let {image: t} = e;
                return t
            }
            ).filter(e => e.url);
            return a.length ? (0,
            n.jsx)("section", {
                className: "section-over theme-white theme-consumer o-section -full",
                children: (0,
                n.jsx)(R, {
                    images: a,
                    isLandscape: l
                })
            }) : null
        }
        ;
        var F = (0,
        m.memo)(z)
          , M = i(2017)
          , O = i(8666)
          , T = i(330)
          , W = i(4445)
          , D = i.n(W);
        let k = e => {
            let {slice: t} = e
              , {primary: i} = t
              , {text: a, rightAligned: s} = i
              , [c,d] = (0,
            m.useState)([]);
            return (0,
            n.jsx)("section", {
                className: "o-section",
                children: (0,
                n.jsx)("div", {
                    className: "layout-grid-inner",
                    children: (0,
                    n.jsx)(O.v, {
                        intersection: !0,
                        className: (0,
                        l.Z)(D().textWrapper, {
                            [D().fullWidth]: !s,
                            [D().rightAligned]: s
                        }),
                        children: r.qO(a) && (0,
                        n.jsx)(M.v, {
                            field: a,
                            components: {
                                paragraph: e => {
                                    let {node: t, children: i} = e
                                      , r = a.findIndex(e => JSON.stringify(e) === JSON.stringify(t))
                                      , s = c.reduce( (e, t, i) => i < r ? e + t : e, 0)
                                      , o = t.text.length
                                      , u = t.spans.reduce( (e, t) => "label" === t.type && "small" === t.data.label ? e + t.end - t.start : e, 0);
                                    return (0,
                                    n.jsx)(T.E, {
                                        controlled: !0,
                                        tag: "p",
                                        className: (0,
                                        l.Z)(D().text, {
                                            [D().textSmall]: u / o > .9
                                        }),
                                        delayIn: .2 * s,
                                        ref: e => {
                                            if (!e)
                                                return;
                                            let {linesCount: t} = e;
                                            t && c[r] !== t && d(e => {
                                                let i = [...e];
                                                return i[r] = t,
                                                i
                                            }
                                            )
                                        }
                                        ,
                                        children: i
                                    })
                                }
                                ,
                                label: e => {
                                    let {node: t} = e;
                                    return (0,
                                    n.jsx)(n.Fragment, {
                                        children: t.text.split(" ").map( (e, i) => (0,
                                        n.jsxs)(n.Fragment, {
                                            children: [i > 0 && " ", (0,
                                            n.jsx)("span", {
                                                className: t.data.label,
                                                children: e
                                            }, "".concat(e, "_").concat(i))]
                                        }))
                                    })
                                }
                            }
                        })
                    })
                })
            })
        }
        ;
        var V = (0,
        m.memo)(k);
        let X = e => {
            let {slice: t} = e
              , {primary: i} = t
              , {video: r, cover: l, preview: a} = i
              , s = r.embed_url
              , d = a.url
              , o = r.height > r.width
              , [u,m] = (0,
            p.s)({
                rootMargin: "0px 0px -20px 0px"
            });
            return (0,
            n.jsx)("section", {
                className: "o-section -full",
                ref: e => {
                    m(e)
                }
                ,
                style: {
                    visibility: u ? "visible" : "hidden"
                },
                children: (0,
                n.jsx)(c.Z, {
                    portrait: o,
                    coverImagePrismic: l,
                    videoUrl: s,
                    previewUrl: d
                })
            })
        }
        ;
        var U = (0,
        m.memo)(X);
        let Y = {
            grid: _,
            image: x,
            magnetic_images: F,
            text: V,
            video: U,
            assets_row: function(e) {
                let {slice: t} = e
                  , {items: i, isLeaving: o} = t
                  , m = 1 === i.length
                  , h = 12 / i.length
                  , g = e => {
                    if (e && e.embed && e.embed.embed_url)
                        return e.embed.width / e.embed.height;
                    if (e && e.image && e.image.dimensions)
                        return e.image.dimensions.width / e.image.dimensions.height;
                    if (e.video && e.video.url) {
                        if (e.video_dimensions) {
                            let[t,i] = e.video_dimensions.toLowerCase().replace(/\s/g, "").replace("\xd7", "x").split("x");
                            return t / i
                        }
                        return null
                    }
                    return 1
                }
                ;
                return (0,
                n.jsx)("section", {
                    className: "o-section",
                    children: (0,
                    n.jsx)("div", {
                        className: u().row,
                        children: i.map( (e, t) => (0,
                        n.jsx)("div", {
                            className: (0,
                            l.Z)(u().item, {
                                "-is-embed": e.embed.embed_url,
                                "-is-video": e.video.url,
                                "-large": m
                            }),
                            style: {
                                "--size": "".concat(h),
                                "--aspect": g(e)
                            },
                            children: (0,
                            n.jsxs)("div", {
                                className: u().itemInner,
                                children: [r.OI(e.video) && (0,
                                n.jsx)(a.o, {
                                    intersection: !0,
                                    leaving: o,
                                    children: (0,
                                    n.jsx)(d.W, {
                                        className: (0,
                                        l.Z)(u().video),
                                        src: e.video.url
                                    })
                                }), !!e.image && !!e.image.url && (0,
                                n.jsx)(a.o, {
                                    intersection: !0,
                                    leaving: o,
                                    children: (0,
                                    n.jsx)(s.E, {
                                        field: e.image,
                                        alt: e.image.alt || "",
                                        width: "1000",
                                        height: "auto"
                                    })
                                }), !!e.embed && !!e.embed.embed_url && (0,
                                n.jsx)(a.o, {
                                    intersection: !0,
                                    leaving: o,
                                    children: (0,
                                    n.jsx)(c.Z, {
                                        videoUrl: e.embed.embed_url,
                                        playOnVisible: !0,
                                        muted: !0,
                                        useInterface: !e.embed_player_hidden,
                                        ratio: g(e)
                                    })
                                })]
                            })
                        }, t))
                    })
                })
            }
        }
    },
    6095: function(e) {
        e.exports = {
            hero: "magnetic-image-animated_hero__gnWGH",
            heroImageInner: "magnetic-image-animated_heroImageInner__01Ct2",
            landscape: "magnetic-image-animated_landscape__tNlSt",
            heroImage: "magnetic-image-animated_heroImage__RYISp",
            active: "magnetic-image-animated_active__OygVZ"
        }
    },
    4888: function(e) {
        e.exports = {
            line: "magnetic-image_line__DvHGs",
            horizontal: "magnetic-image_horizontal__sOppw",
            vertical: "magnetic-image_vertical__rZbh_",
            gui: "magnetic-image_gui__LWnrO"
        }
    },
    733: function(e) {
        e.exports = {
            row: "slice-assets_row__XjJxR",
            item: "slice-assets_item__fjbbm",
            itemInner: "slice-assets_itemInner__Nm5JH"
        }
    },
    7339: function(e) {
        e.exports = {
            grid: "slice-grid_grid__ANEo3",
            grid_item: "slice-grid_grid_item__OROSf",
            l1: "slice-grid_l1__0eeU9",
            l1alt: "slice-grid_l1alt__Iyb_S",
            l2: "slice-grid_l2__tzS0M",
            l3: "slice-grid_l3__yTgRw",
            l4: "slice-grid_l4__ptZZG",
            centered: "slice-grid_centered__XfIr2",
            video: "slice-grid_video__wmeNV"
        }
    },
    4445: function(e) {
        e.exports = {
            text: "slice-text_text__Fm0Aq",
            textWrapper: "slice-text_textWrapper__9igSS",
            textSmall: "slice-text_textSmall__iwIiT",
            fullWidth: "slice-text_fullWidth__Uz6_H",
            rightAligned: "slice-text_rightAligned__W_SqT"
        }
    }
}]);
