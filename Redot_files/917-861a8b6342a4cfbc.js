(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[917], {
    3944: function(e, r, t) {
        "use strict";
        t.d(r, {
            E: function() {
                return v
            }
        });
        var n = t(6162)
          , l = t(6590)
          , s = t(5924)
          , o = t(8365)
          , a = t.n(o)
          , u = t(959)
          , i = t(7728)
          , c = t.n(i)
          , d = t(5100)
          , _ = t.n(d);
        function v(e) {
            let {className: r="", style: t={}, loading: o="eager", objectFit: i="cover", quality: d=80, alt: v="", ...p} = e
              , m = p.field ? l.Z : a()
              , [f,h] = (0,
            u.useState)(!1);
            return (0,
            n.jsx)("div", {
                className: (0,
                s.Z)(_().wrapper, c().wrapper, {
                    [c().loaded]: f
                }),
                children: (0,
                n.jsx)(m, {
                    ...p,
                    onLoad: () => h(!0),
                    className: (0,
                    s.Z)(_().image, r),
                    style: {
                        objectFit: i,
                        ...t
                    },
                    loading: o,
                    quality: d,
                    alt: v
                })
            })
        }
    },
    8207: function(e, r, t) {
        "use strict";
        t.d(r, {
            x: function() {
                return u
            }
        });
        var n = t(6162)
          , l = t(5924)
          , s = t(959)
          , o = t(9471)
          , a = t.n(o);
        let u = (0,
        s.forwardRef)( (e, r) => {
            let {vertical: t=!1, horizontal: s=!1, animated: o=!1, order: u=0, direction: i=1, className: c, ...d} = e;
            return (0,
            n.jsx)("div", {
                ref: r,
                className: (0,
                l.Z)(a().line, t && a().vertical, s && a().horizontal, o && a().animated, !1, c),
                "data-order": u,
                "data-direction": i,
                ...d
            })
        }
        );
        u.displayName = "Line"
    },
    4448: function(e, r, t) {
        "use strict";
        t.d(r, {
            W: function() {
                return d
            }
        });
        var n = t(6162)
          , l = t(6624)
          , s = t(5924)
          , o = t(959)
          , a = t(7728)
          , u = t.n(a)
          , i = t(1033)
          , c = t.n(i);
        function d(e) {
            let r = (0,
            o.useRef)(null)
              , [t,a] = (0,
            o.useState)(!1)
              , {setRef: i, inView: d} = (0,
            l.Or)({
                threshold: 0
            });
            return (0,
            o.useEffect)( () => {
                var e, t;
                r.current && d ? null === (e = r.current) || void 0 === e || e.play() : null === (t = r.current) || void 0 === t || t.pause()
            }
            , [r.current, d]),
            (0,
            n.jsx)("div", {
                className: (0,
                s.Z)(c().wrapper, u().wrapper, {
                    [u().loaded]: t
                }),
                children: (0,
                n.jsx)("video", {
                    ref: e => {
                        r.current = e,
                        i(e)
                    }
                    ,
                    playsInline: !0,
                    loop: !0,
                    muted: !0,
                    onCanPlay: () => a(!0),
                    ...e
                })
            })
        }
    },
    7297: function(e, r, t) {
        "use strict";
        t.d(r, {
            Z: function() {
                return k
            }
        });
        var n = t(6162)
          , l = t(6624)
          , s = t(3439)
          , o = t(5924)
          , a = t(959)
          , u = t(6580)
          , i = t(8791);
        function c(e) {
            let {children: r} = e
              , [t,n] = (0,
            a.useState)(!1);
            return ((0,
            a.useEffect)( () => n(!0), []),
            t) ? r : null
        }
        var d = t(3944)
          , _ = t(4448)
          , v = t(3709)
          , p = t.n(v);
        function m(e) {
            let {coverImagePrismic: r=null, previewUrl: t="", isStarted: l=!1} = e;
            return (0,
            n.jsxs)("div", {
                className: (0,
                o.Z)(p().cover, {
                    [p()["is-started"]]: l
                }),
                children: [!!t && (0,
                n.jsx)(_.W, {
                    src: t,
                    className: p().preview
                }), !!r && (0,
                n.jsx)(d.E, {
                    field: r,
                    role: "presentation",
                    alt: "",
                    width: 1600,
                    height: 900
                })]
            })
        }
        var f = t(4539)
          , h = t(5949);
        let x = e => {
            let r = Math.floor(e / 60)
              , t = Math.floor(e - 60 * r);
            return "".concat(r < 10 ? "0".concat(r) : r, ":").concat(t < 10 ? "0".concat(t) : t)
        }
          , g = e => {
            let {show: r=!0, isBuffering: t=!1, isFullScreen: l=!1, progress: s=0, duration: u=0, pause: i, seek: c, muted: d, toggle: _, toggleMute: v, requestFullScreen: m, exitFullScreen: g} = e
              , w = (0,
            a.useRef)(null)
              , j = (0,
            a.useRef)(null)
              , [y,b] = (0,
            a.useState)(!1)
              , [E,k] = (0,
            a.useState)(!1)
              , [N,S] = (0,
            a.useState)(0)
              , [C,R] = (0,
            a.useState)(d ? 0 : 1)
              , L = (0,
            a.useCallback)(e => {
                var r;
                let {left: t, width: n} = j.current || {
                    left: 0,
                    width: 1
                }
                  , l = e.clientX || (null === (r = e.touches[0]) || void 0 === r ? void 0 : r.clientX);
                return l ? Math.max(0, Math.min(1, (l - t) / n)) : N
            }
            , [N])
              , q = x(u * s)
              , I = x(u)
              , [M,Z] = (0,
            h.Ro)(e => {
                let {setCursor: r, clearCursor: t} = e;
                return [r, t]
            }
            )
              , F = () => {
                w.current && (j.current = w.current.getBoundingClientRect())
            }
              , P = (0,
            a.useCallback)( () => {
                d ? R(.6) : R(.4),
                M("volume")
            }
            , [d])
              , O = (0,
            a.useCallback)( () => {
                R(d ? 0 : 1),
                Z()
            }
            , [d])
              , U = (0,
            a.useCallback)(e => {
                E || (k(!0),
                i(),
                F(),
                S(L(e)))
            }
            , [E, L])
              , V = (0,
            a.useCallback)(e => {
                E && S(L(e))
            }
            , [E, L])
              , X = (0,
            a.useCallback)(e => {
                if (!E)
                    return;
                k(!1);
                let r = L(e);
                c(r)
            }
            , [E, L])
              , z = () => {
                M("fullscreen")
            }
              , D = () => {
                Z()
            }
              , A = (0,
            a.useCallback)( () => {
                l ? g() : m()
            }
            , [l, g, m]);
            return (0,
            a.useEffect)( () => {
                E || S(s)
            }
            , [s]),
            (0,
            a.useEffect)( () => {
                if (E)
                    return document.addEventListener("mousemove", V),
                    document.addEventListener("touchmove", V),
                    document.addEventListener("mouseup", X),
                    document.addEventListener("touchend", X),
                    () => {
                        document.removeEventListener("mousemove", V),
                        document.removeEventListener("touchmove", V),
                        document.removeEventListener("mouseup", X),
                        document.removeEventListener("touchend", X)
                    }
            }
            , [E]),
            (0,
            a.useEffect)( () => {
                d ? R(0) : R(1)
            }
            , [d]),
            (0,
            n.jsxs)("div", {
                className: (0,
                o.Z)(p().ui, {
                    [p().buffering]: t,
                    [p().hidden]: !r,
                    [p()["progress-hovered"]]: y || E,
                    [p()["progress-down"]]: E
                }),
                children: [(0,
                n.jsx)("div", {
                    className: p().backdrop,
                    onClick: _
                }), (0,
                n.jsxs)("div", {
                    className: p().controls,
                    children: [(0,
                    n.jsx)("div", {
                        ref: e => {
                            w.current = e
                        }
                        ,
                        className: p().progress,
                        onTouchStart: U,
                        onMouseDown: U,
                        onMouseEnter: () => b(!0),
                        onMouseLeave: () => b(!1),
                        children: (0,
                        n.jsx)("div", {
                            className: p().progress_outer,
                            children: (0,
                            n.jsx)("div", {
                                className: p().progress_inner,
                                style: {
                                    transform: "scaleX(".concat(N, ")")
                                }
                            })
                        })
                    }), (0,
                    n.jsx)("button", {
                        className: p().volume,
                        onClick: v,
                        style: {
                            "--volume": C
                        },
                        onMouseEnter: P,
                        onMouseLeave: O,
                        children: (0,
                        n.jsx)(f.l, {
                            name: "volume"
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: p().time,
                        children: [(0,
                        n.jsx)("div", {
                            className: p().time_current,
                            children: q
                        }), (0,
                        n.jsx)("div", {
                            className: p().time_total,
                            children: I
                        })]
                    }), (0,
                    n.jsx)("button", {
                        className: p().fullscreen,
                        onClick: A,
                        onMouseEnter: z,
                        onMouseLeave: D,
                        children: l ? (0,
                        n.jsx)(f.l, {
                            name: "fullscreen-exit"
                        }) : (0,
                        n.jsx)(f.l, {
                            name: "fullscreen-enter"
                        })
                    })]
                })]
            })
        }
        ;
        g.displayName = "VideoUI";
        var w = t(2317)
          , j = t.n(w)
          , y = t(7728)
          , b = t.n(y);
        function E(e) {
            let {isFullScreen: r=!1, setIsFullScreen: t, coverImagePrismic: s=null, videoUrl: i="https://vimeo.com/468908751", previewUrl: d="", playOnVisible: _=!1, playOnReady: v=!1, useInterface: f=!0, ratio: x=16 / 9, muted: w=!1} = e
              , j = (0,
            a.useRef)()
              , y = (0,
            a.useRef)()
              , [E,k] = (0,
            a.useState)(!1)
              , [N,S] = (0,
            a.useState)(!1)
              , [C,R] = (0,
            a.useState)(!1)
              , [L,q] = (0,
            a.useState)(0)
              , [I,M] = (0,
            a.useState)(0)
              , Z = (0,
            a.useRef)(!1)
              , [F,P] = (0,
            a.useState)(w)
              , [O,U] = (0,
            a.useState)(!1)
              , [V,X] = (0,
            h.Ro)(e => {
                let {setCursor: r, clearCursor: t} = e;
                return [r, t]
            }
            )
              , {setRef: z, inView: D} = (0,
            l.Or)({
                threshold: 0
            })
              , A = (0,
            l.ac)("(max-width: 800px)")
              , B = () => {
                k(!E)
            }
              , J = () => {
                P(!F)
            }
              , K = e => {
                let {played: r} = e;
                q(r)
            }
              , W = () => {
                R(!0)
            }
              , G = () => {
                R(!1)
            }
              , H = () => {
                A && T()
            }
              , T = (0,
            a.useCallback)( () => {
                if (t(!0),
                A) {
                    if (y.current.requestFullscreen)
                        y.current.requestFullscreen();
                    else if (y.current.webkitRequestFullScreen)
                        y.current.webkitRequestFullScreen();
                    else if (j.current) {
                        var e, r;
                        null === (e = null === (r = j.current) || void 0 === r ? void 0 : r.getInternalPlayer()) || void 0 === e || e.requestFullscreen()
                    }
                }
            }
            , [A])
              , Y = (0,
            a.useCallback)( () => {
                if (t(!1),
                A && j.current) {
                    var e, r;
                    null === (e = null === (r = j.current) || void 0 === r ? void 0 : r.getInternalPlayer()) || void 0 === e || e.exitFullscreen()
                }
            }
            , [A])
              , Q = e => {
                if (void 0 !== e.fullscreen) {
                    t(e.fullscreen);
                    return
                }
                if (void 0 !== e.returnValue) {
                    t(e.returnValue);
                    return
                }
                document.fullscreenElement ? t(!0) : t(!1)
            }
              , $ = (0,
            a.useCallback)(e => {
                j.current && (j.current.seekTo(e, "fraction"),
                k(!0),
                q(e))
            }
            , [j])
              , ee = () => k(!1)
              , er = () => {
                var e;
                let r = null === (e = j.current) || void 0 === e ? void 0 : e.getInternalPlayer();
                r && (U(!0),
                null == r || r.on("fullscreenchange", Q),
                v && k(!0))
            }
            ;
            return (0,
            a.useEffect)( () => (y.current && y.current.addEventListener("fullscreenchange", Q),
            () => {
                var e;
                let r = null === (e = j.current) || void 0 === e ? void 0 : e.getInternalPlayer();
                r && (null == r || r.off("fullscreenchange", Q)),
                y.current && y.current.removeEventListener("fullscreenchange", Q)
            }
            ), []),
            (0,
            a.useEffect)( () => {
                _ && D && k(!0),
                D || k(!1)
            }
            , [D]),
            (0,
            a.useEffect)( () => {
                E && S(!0)
            }
            , [E]),
            (0,
            a.useEffect)( () => {
                if (!C || !f) {
                    Z.current = !1,
                    X();
                    return
                }
                let e = "play";
                E && (e = "pause"),
                Z.current && (e = E ? "play-pause" : "pause-play"),
                V(e),
                setTimeout( () => {
                    Z.current = !0
                }
                , 100)
            }
            , [E, C]),
            (0,
            a.useEffect)( () => {
                j.current && E && !D && ee()
            }
            , [j.current, D, E, ee]),
            (0,
            n.jsxs)("div", {
                onMouseEnter: W,
                onMouseLeave: G,
                onClick: H,
                className: (0,
                o.Z)("aspect-ratio", p().wrapperInner, b().wrapper, {
                    [b().loaded]: O,
                    "-portrait": x < 1
                }),
                style: {
                    "--aspect-ratio": x
                },
                ref: e => {
                    z(e),
                    y.current = e
                }
                ,
                children: [(0,
                n.jsx)(m, {
                    coverImagePrismic: s,
                    isStarted: N,
                    previewUrl: d
                }), (0,
                n.jsx)("button", {
                    className: (0,
                    o.Z)(p().close, {
                        [p().closeVisible]: r
                    }),
                    onClick: Y,
                    children: "Close"
                }), f ? (0,
                n.jsx)(g, {
                    show: N,
                    isFullScreen: r,
                    requestFullScreen: T,
                    exitFullScreen: Y,
                    muted: F,
                    toggle: B,
                    toggleMute: J,
                    progress: L,
                    seek: $,
                    pause: ee,
                    duration: I
                }) : (0,
                n.jsx)("div", {
                    className: p().ui
                }), (0,
                n.jsx)(c, {
                    children: (0,
                    n.jsx)(u.Z, {
                        ref: j,
                        className: p().player,
                        url: i,
                        muted: F,
                        loop: !0,
                        width: "100%",
                        height: "100%",
                        progressInterval: 300,
                        playing: E,
                        onReady: er,
                        onProgress: K,
                        onDuration: M,
                        playsinline: !0
                    })
                })]
            })
        }
        function k(e) {
            let {className: r="", coverImagePrismic: t=null, videoUrl: u="https://vimeo.com/468908751", previewUrl: c="", playOnVisible: d=!1, playOnReady: _=!1, useInterface: v=!0, ratio: m=16 / 9, muted: f=!0} = e
              , [h,x] = (0,
            a.useState)(!1)
              , g = (0,
            a.useRef)()
              , w = (0,
            l.ac)("(max-width: 800px)")
              , y = (0,
            s.LZ)(null);
            return (0,
            i.Z)( () => {
                if (w)
                    return;
                let e = g.current.closest(".".concat(j().animation));
                if (!e)
                    return;
                let r = e.querySelector(".".concat(j().slideInner));
                h ? (y.stop(),
                r && (r.style.willChange = "unset",
                r.style.clipPath = "unset")) : (y.start(),
                r && (r.style.willChange = "",
                r.style.clipPath = ""))
            }
            , [h, w]),
            (0,
            a.useEffect)( () => {
                let e = e => {
                    if ("Escape" === e.key) {
                        x(!1);
                        return
                    }
                }
                ;
                return document.addEventListener("keyup", e),
                () => {
                    document.removeEventListener("keyup", e)
                }
            }
            , []),
            (0,
            n.jsx)("div", {
                ref: g,
                className: (0,
                o.Z)(p().wrapper, r, {
                    "-fullscreen": h && !w
                }),
                children: (0,
                n.jsx)("div", {
                    className: (0,
                    o.Z)(p().wrapperOuter),
                    children: (0,
                    n.jsx)(E, {
                        isFullScreen: h,
                        setIsFullScreen: x,
                        coverImagePrismic: t,
                        videoUrl: u,
                        previewUrl: c,
                        playOnVisible: d,
                        playOnReady: _,
                        useInterface: v,
                        ratio: m,
                        muted: f
                    })
                })
            }, "wrapper")
        }
    },
    5100: function(e) {
        e.exports = {
            image: "image_image__4ehsq",
            wrapper: "image_wrapper__hj__d"
        }
    },
    9471: function(e) {
        e.exports = {
            line: "line_line__rN53r",
            horizontal: "line_horizontal__FvNLh",
            vertical: "line_vertical__RPCm9",
            debug: "line_debug__rE54L",
            animated: "line_animated__nKxCW"
        }
    },
    7728: function(e) {
        e.exports = {
            wrapper: "skeleton_wrapper__I2jxS",
            loaded: "skeleton_loaded__mFFyr"
        }
    },
    1033: function(e) {
        e.exports = {
            wrapper: "video-loop_wrapper__w5DxB"
        }
    },
    3709: function(e) {
        e.exports = {
            wrapper: "video_wrapper__NGSrX",
            wrapperOuter: "video_wrapperOuter__salaZ",
            portrait: "video_portrait__VxjDJ",
            line: "video_line__Uid_n",
            horizontal: "video_horizontal__A6k8N",
            vertical: "video_vertical__xKBot",
            left: "video_left__8_RlR",
            right: "video_right__8FP9_",
            top: "video_top__n9NEZ",
            bottom: "video_bottom__bzbhu",
            square: "video_square__8cuMR",
            tr: "video_tr__s7Ztp",
            br: "video_br__XiiG2",
            tl: "video_tl__v9WIY",
            bl: "video_bl__1x7dq",
            wrapperInner: "video_wrapperInner__3s3AX",
            player: "video_player__AVxaM",
            ui: "video_ui__RUkcM",
            cover: "video_cover__oqfZn",
            "is-started": "video_is-started__yisnn",
            marquee: "video_marquee__KaHCI",
            marquee_label: "video_marquee_label__PMMOj",
            marquee_icon: "video_marquee_icon__cHnhf",
            preview: "video_preview___6qsK",
            backdrop: "video_backdrop__ACutD",
            "progress-hovered": "video_progress-hovered__tA_NJ",
            controls: "video_controls__mM9OI",
            hidden: "video_hidden__oBQXx",
            "is-fullscreen": "video_is-fullscreen__uUYZR",
            progress: "video_progress__jH_Bc",
            progress_outer: "video_progress_outer__fPYwp",
            progress_inner: "video_progress_inner__cOy7J",
            time: "video_time__GIJuR",
            time_total: "video_time_total__coD_r",
            volume: "video_volume__353au",
            fullscreen: "video_fullscreen___ckUg",
            close: "video_close__sJbsR"
        }
    }
}]);
