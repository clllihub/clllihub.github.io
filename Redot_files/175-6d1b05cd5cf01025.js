(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[175], {
    5801: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return c
            }
        });
        var o = n(6162)
          , r = n(5924)
          , i = n(959)
          , a = n(8666)
          , s = n(2317)
          , l = n.n(s);
        function c(e) {
            let {children: t=null, diagonal: n=!1, reversed: s=!1, style: c={}, className: d="", durationIn: m=1.2, durationOut: u=1, ...p} = e
              , h = (0,
            i.useRef)(null);
            return (0,
            o.jsx)(a.f, {
                ...p,
                ref: h,
                className: (0,
                r.Z)(d, l().slide, {
                    [l().diagonal]: n,
                    [l().reversed]: s
                }),
                durationIn: m,
                durationOut: u,
                style: {
                    ...c
                },
                children: (0,
                o.jsx)("div", {
                    className: l().slideInner,
                    children: t
                })
            })
        }
    },
    3944: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return p
            }
        });
        var o = n(6162)
          , r = n(6590)
          , i = n(5924)
          , a = n(8365)
          , s = n.n(a)
          , l = n(959)
          , c = n(7728)
          , d = n.n(c)
          , m = n(5100)
          , u = n.n(m);
        function p(e) {
            let {className: t="", style: n={}, loading: a="eager", objectFit: c="cover", quality: m=80, alt: p="", ...h} = e
              , _ = h.field ? r.Z : s()
              , [j,f] = (0,
            l.useState)(!1);
            return (0,
            o.jsx)("div", {
                className: (0,
                i.Z)(u().wrapper, d().wrapper, {
                    [d().loaded]: j
                }),
                children: (0,
                o.jsx)(_, {
                    ...h,
                    onLoad: () => f(!0),
                    className: (0,
                    i.Z)(u().image, t),
                    style: {
                        objectFit: c,
                        ...n
                    },
                    loading: a,
                    quality: m,
                    alt: p
                })
            })
        }
    },
    6706: function(e, t, n) {
        "use strict";
        function o() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e)
                return [null, null];
            let[t,n] = e.replace(/\s/g, "").split(",").map(e => Number(e));
            if (!t || !n)
                return null;
            let o = "https://www.google.com/maps/dir//''/@".concat(t, ",").concat(n, ",17z/data=!3m1!5s0x47e66e2874e2dc1b:0xa6a7093cc44962d7!4m9!4m8!1m0!1m5!1m1!1s0x47e66e162116aaab:0xe74f4029b5369a33!2m2!1d2.3395636!2d48.8676204!3e0")
              , r = "".concat(t.toFixed(7), "' ").concat(n.toFixed(7));
            return [r, o]
        }
        n.d(t, {
            r: function() {
                return o
            }
        })
    },
    7034: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return y
            }
        });
        var o = n(6162)
          , r = n(3439)
          , i = n(5924)
          , a = n(1379)
          , s = n(5373)
          , l = n.n(s)
          , c = n(5927);
        function d(e) {
            let {title: t="", description: n, image: r, keywords: i} = e;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsxs)(l(), {
                    children: [(0,
                    o.jsx)("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }), (0,
                    o.jsx)("meta", {
                        name: "robots",
                        content: "index,follow"
                    }), (0,
                    o.jsx)("meta", {
                        name: "googlebot",
                        content: "index,follow"
                    }), (0,
                    o.jsx)("meta", {
                        name: "keywords",
                        content: i && i.length ? i.join(",") : i
                    }), (0,
                    o.jsx)("meta", {
                        name: "author",
                        content: "Redot Studio"
                    }), (0,
                    o.jsx)("meta", {
                        name: "referrer",
                        content: "no-referrer"
                    }), (0,
                    o.jsx)("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }), (0,
                    o.jsx)("meta", {
                        httpEquiv: "x-dns-prefetch-control",
                        content: "off"
                    }), (0,
                    o.jsx)("meta", {
                        httpEquiv: "Window-Target",
                        content: "_value"
                    }), (0,
                    o.jsx)("meta", {
                        name: "geo.region",
                        content: "FR"
                    }), (0,
                    o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }), (0,
                    o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }), (0,
                    o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }), (0,
                    o.jsx)("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }), (0,
                    o.jsx)("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#336cff"
                    }), (0,
                    o.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#336cff"
                    }), (0,
                    o.jsx)("meta", {
                        name: "theme-color",
                        content: "#336CFF"
                    }), (0,
                    o.jsx)("link", {
                        rel: "icon",
                        id: "favicon",
                        href: "/favicon.ico"
                    }), (0,
                    o.jsx)("title", {
                        children: t
                    })]
                }), (0,
                o.jsx)(a.PB, {
                    title: t,
                    description: n,
                    openGraph: {
                        title: t,
                        description: n,
                        type: "website",
                        locale: "en_EU",
                        images: [{
                            url: r ? r.url : "".concat(c.env.NEXT_PUBLIC_WEBSITE_URL, "/og.jpg"),
                            width: r ? r.width : 1200,
                            height: r ? r.height : 630,
                            alt: t
                        }],
                        defaultImageWidth: 1200,
                        defaultImageHeight: 630,
                        site_name: ""
                    }
                })]
            })
        }
        var m = n(1517)
          , u = n.n(m)
          , p = n(959)
          , h = n(330)
          , _ = n(3521)
          , j = n(6706)
          , f = n(1172)
          , x = n(6598)
          , v = n.n(x);
        function g(e) {
            let {children: t, appear: n, delayIn: r=0, ...i} = e;
            return n ? (0,
            o.jsx)(h.E, {
                intersection: !0,
                delayIn: r,
                ...i,
                children: t
            }) : (0,
            o.jsx)("div", {
                ...i,
                children: t
            })
        }
        function w(e) {
            let {settings: t, appear: n=!0, className: r=""} = e
              , a = (0,
            m.useRouter)()
              , s = (0,
            f.o)(e => {
                let {isRouteTransitioning: t} = e;
                return t
            }
            )
              , l = (0,
            p.useRef)("/contact" === a.pathname);
            (0,
            p.useEffect)( () => {
                s || (l.current = "/contact" === a.pathname)
            }
            , [s]);
            let {geoloc: c, socials: d} = t
              , u = (0,
            j.r)(c)
              , h = u[1];
            return (0,
            o.jsx)("footer", {
                id: "footer",
                className: (0,
                i.Z)("theme-red", "section-over", v().wrapper, r),
                children: (0,
                o.jsxs)("div", {
                    className: v().inner,
                    children: [(0,
                    o.jsx)("div", {
                        className: (0,
                        i.Z)(v().part, "-location"),
                        children: (0,
                        o.jsx)(g, {
                            appear: n,
                            className: v().location,
                            children: (0,
                            o.jsx)(_.r, {
                                href: h,
                                children: "Creative Studio, based in Paris"
                            })
                        })
                    }), (0,
                    o.jsx)("div", {
                        className: (0,
                        i.Z)(v().part, "-socials"),
                        children: (0,
                        o.jsx)("ul", {
                            className: v().socials_list,
                            children: d.map( (e, t) => (0,
                            o.jsx)("li", {
                                className: v().socials_item,
                                children: (0,
                                o.jsx)(g, {
                                    appear: n,
                                    delayIn: 0 + .2 * t,
                                    children: (0,
                                    o.jsx)(_.r, {
                                        href: e.link.url,
                                        children: e.label
                                    })
                                })
                            }, e.label))
                        })
                    }), (0,
                    o.jsx)("div", {
                        className: (0,
                        i.Z)(v().part, "-date"),
                        children: (0,
                        o.jsx)(g, {
                            appear: n,
                            children: "\xa92024"
                        })
                    })]
                })
            })
        }
        var N = n(6494)
          , b = n.n(N);
        function y(e) {
            let {seo: t={
                title: "Redot Studio | Creative studio specialized in 3D & motion Design",
                description: "Redot is a creative studio based in Paris. Redot collaborates with communication agencies to produce creative content : 3D & motion design. Discover the studio's portfolio.",
                image: null,
                keywords: ""
            }, children: n, theme: a="light", className: s="", settings: l={}, withFooter: c=!0, footerClassName: h=null, footerAppear: _=!0} = e
              , j = (0,
            r.LZ)(null, null, null)
              , x = (0,
            m.useRouter)()
              , v = (0,
            f.o)(e => {
                let {addRouteToHistory: t} = e;
                return t
            }
            );
            return (0,
            p.useEffect)( () => {
                function e(e) {
                    e = "#" + e.split("#").pop(),
                    j.scrollTo(e)
                }
                return u().events.on("hashChangeStart", e),
                () => {
                    u().events.off("hashChangeStart", e)
                }
            }
            , [j]),
            (0,
            p.useEffect)( () => {
                function e(e) {
                    v(e)
                }
                return u().events.on("routeChangeStart", e),
                () => {
                    u().events.off("routeChangeStart", e)
                }
            }
            , [v]),
            (0,
            p.useEffect)( () => {
                let e = x.route;
                v(e);
                let t = e.split("/").pop();
                document.documentElement.dataset.route = t || "home"
            }
            , [v, x.route]),
            (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(d, {
                    ...t
                }), (0,
                o.jsx)(r.Ei, {
                    root: !0,
                    children: (0,
                    o.jsxs)("div", {
                        className: (0,
                        i.Z)("theme-".concat(a), b().layout, s),
                        children: [(0,
                        o.jsx)("main", {
                            className: b().main,
                            children: n
                        }), c && (0,
                        o.jsx)(w, {
                            className: h,
                            settings: l,
                            appear: _
                        })]
                    })
                })]
            })
        }
    },
    3175: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return k
            },
            default: function() {
                return S
            }
        });
        var o = n(6162)
          , r = n(4899)
          , i = n(6624)
          , a = n(3439)
          , s = n(5924)
          , l = n(1218)
          , c = n(2206)
          , d = n(959)
          , m = n(3952)
          , u = n(3001)
          , p = n(330)
          , h = n(6598)
          , _ = n.n(h)
          , j = n(3944)
          , f = n(3521)
          , x = n(112)
          , v = n(7034)
          , g = n(1172)
          , w = n(8666)
          , N = n(7650)
          , b = n(5801)
          , y = n(648)
          , I = n(1670)
          , E = n.n(I)
          , k = !0;
        function S(e) {
            var t, n, h, I, k;
            let {projects: S=[], settings: Z, seo: C} = e
              , {addTimeline: T} = (0,
            d.useContext)(l.q)
              , R = (0,
            a.LZ)(null)
              , L = (0,
            i.ac)("(max-width: 800px)")
              , F = [...S]
              , {isPreloaded: H, setGlMaskingOffset: D, setGlIsInteractive: U, setGlIsHidden: W, setMobileProjects: q} = (0,
            g.o)(e => {
                let {isPreloaded: t, setGlMaskingOffset: n, setGlIsInteractive: o, setGlIsHidden: r, setMobileProjects: i} = e;
                return {
                    isPreloaded: t,
                    setGlMaskingOffset: n,
                    setGlIsInteractive: o,
                    setGlIsHidden: r,
                    setMobileProjects: i
                }
            }
            , u.X)
              , z = {
                onStart: () => {
                    R.stop(),
                    U(!1)
                }
                ,
                onComplete: () => {
                    R.start()
                }
            };
            return (0,
            m.Z)( () => {
                U(!0),
                W(!1),
                D(0),
                q(F),
                c.p8.fromTo(".".concat(_().inner), {
                    y: "5vw"
                }, {
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    clearProps: "y",
                    immediateRender: !1
                });
                let e = {
                    value: 0
                }
                  , t = c.p8.timeline();
                t.fromTo(".".concat(_().inner), {
                    y: 0
                }, {
                    y: "3vw",
                    duration: .6,
                    ease: "power3.in",
                    immediateRender: !1
                });
                let n = T("global", {
                    ...z
                }).fromTo(".".concat(_().inner), {
                    y: 0
                }, {
                    y: "3vw",
                    duration: .6,
                    ease: "power3.in",
                    immediateRender: !1
                });
                n.add(t, "<"),
                n.to(e, {
                    value: function() {
                        return (0,
                        x.s)()
                    },
                    duration: 1,
                    ease: "expo.in",
                    onStart: () => {
                        W(!0)
                    }
                    ,
                    onUpdate: () => {
                        D(e.value)
                    }
                }, "<")
            }
            , [R]),
            (0,
            d.useEffect)( () => {
                if (void 0 !== L) {
                    if (L)
                        T("project");
                    else {
                        let e = {
                            value: 0
                        }
                          , t = c.p8.timeline();
                        t.fromTo([".".concat(_().inner)], {
                            y: 0
                        }, {
                            y: "5vw",
                            duration: .4,
                            ease: "power3.in",
                            immediateRender: !1
                        });
                        let n = T("project", {
                            ...z
                        });
                        n.add(t),
                        n.to({
                            value: 0
                        }, {
                            value: 1,
                            duration: .4,
                            onStart: () => {
                                c.p8.to(e, {
                                    value: 1,
                                    duration: 1.6,
                                    ease: "power4.inOut",
                                    onUpdate: () => {
                                        D(e.value)
                                    }
                                })
                            }
                        }, "<")
                    }
                }
            }
            , [L, R, T]),
            (0,
            o.jsx)(v.A, {
                theme: "light",
                settings: Z,
                seo: {
                    title: C.title || "Redot Studio | Creative studio specialized in 3D & motion Design",
                    description: C.description,
                    image: {
                        url: null === (t = C.image) || void 0 === t ? void 0 : t.url,
                        width: null === (n = C.image) || void 0 === n ? void 0 : null === (h = n.dimensions) || void 0 === h ? void 0 : h.width,
                        height: null === (I = C.image) || void 0 === I ? void 0 : null === (k = I.dimensions) || void 0 === k ? void 0 : k.height
                    },
                    keywords: ""
                },
                footerAppear: !1,
                footerClassName: [E().footer, "-borderless"],
                children: (0,
                o.jsxs)("div", {
                    className: E().wrapper,
                    children: [(0,
                    o.jsx)("div", {
                        className: (0,
                        s.Z)(E().mobileHero, {
                            "sr-only": void 0 !== L && !L
                        }),
                        children: (0,
                        o.jsx)("div", {
                            className: E().intro,
                            children: (0,
                            o.jsxs)(p.E, {
                                tag: "p",
                                active: H,
                                delayIn: .4,
                                children: ["We’re a full-service studio working", (0,
                                o.jsx)("br", {}), "globally with brands & businesses", (0,
                                o.jsx)("br", {}), " at all stages of their journey"]
                            })
                        })
                    }), (0,
                    o.jsx)("div", {
                        className: (0,
                        s.Z)(E().mobileProjects, {
                            "sr-only": !L
                        }),
                        children: (0,
                        o.jsx)("ul", {
                            className: (0,
                            s.Z)(E().projectList, {
                                [E().even]: S.length % 2 == 0,
                                [E().odd]: S.length % 2 != 0
                            }),
                            children: F.map( (e, t) => {
                                let {uid: n} = e
                                  , {title: i, client: a, date: l, image: c, image_mobile: d, comingSoon: m} = e.data
                                  , u = (t + 1) % 5 == 0 && 0 !== t;
                                return (0,
                                o.jsxs)("li", {
                                    className: (0,
                                    s.Z)(E().project, {
                                        "-large": u
                                    }),
                                    children: [(0,
                                    o.jsxs)(w.v, {
                                        intersection: !0,
                                        children: [(0,
                                        o.jsxs)("div", {
                                            className: E().projectHeader,
                                            children: [(0,
                                            o.jsx)(N.g, {
                                                controlled: !0,
                                                className: E().counter,
                                                children: (0,
                                                o.jsx)(y.M, {
                                                    number: t + 1
                                                })
                                            }), m && (0,
                                            o.jsx)("div", {
                                                className: E().comingSoon,
                                                children: "Coming soon"
                                            })]
                                        }), (0,
                                        o.jsxs)("div", {
                                            className: E().projectInner,
                                            children: [(0,
                                            o.jsxs)("div", {
                                                className: E().projectTitleWrapper,
                                                children: [(0,
                                                o.jsxs)("div", {
                                                    className: E().projectInfos,
                                                    children: [!!a && (0,
                                                    o.jsx)(p.E, {
                                                        controlled: !0,
                                                        className: E().projectClient,
                                                        children: a
                                                    }), !!l && (0,
                                                    o.jsx)(p.E, {
                                                        controlled: !0,
                                                        className: E().projectDate,
                                                        children: l
                                                    })]
                                                }), (0,
                                                o.jsx)(p.E, {
                                                    controlled: !0,
                                                    className: E().projectTitle,
                                                    dangerouslySetInnerHTML: {
                                                        __html: r.S(i).replace(/\n/g, "<br />")
                                                    }
                                                })]
                                            }), (0,
                                            o.jsx)("div", {
                                                className: E().projectImageWrapper,
                                                children: (0,
                                                o.jsx)(b.o, {
                                                    intersection: !0,
                                                    className: E().projectImage,
                                                    children: (0,
                                                    o.jsx)("div", {
                                                        className: "aspect-ratio",
                                                        children: (0,
                                                        o.jsx)(j.E, {
                                                            field: (null == d ? void 0 : d.url) && !u ? d : c,
                                                            alt: r.S(i),
                                                            width: 326,
                                                            height: 462,
                                                            priority: !0
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    }), !m && (0,
                                    o.jsx)(f.r, {
                                        href: "/project/".concat(n),
                                        className: E().projectLink
                                    })]
                                }, n)
                            }
                            )
                        })
                    })]
                })
            })
        }
    },
    6598: function(e) {
        e.exports = {
            wrapper: "footer_wrapper__H2pi7",
            inner: "footer_inner__nOFwt",
            part: "footer_part__PcaZf",
            socials_list: "footer_socials_list__pvQL1",
            socials_item: "footer_socials_item__NH03p"
        }
    },
    5100: function(e) {
        e.exports = {
            image: "image_image__4ehsq",
            wrapper: "image_wrapper__hj__d"
        }
    },
    7728: function(e) {
        e.exports = {
            wrapper: "skeleton_wrapper__I2jxS",
            loaded: "skeleton_loaded__mFFyr"
        }
    },
    6494: function(e) {
        e.exports = {
            layout: "layout_layout__KUVXp",
            main: "layout_main__jba1g"
        }
    },
    1670: function(e) {
        e.exports = {
            home: "home_home___Q0oU",
            wrapper: "home_wrapper__2kXsb",
            footer: "home_footer__pmOls",
            mobileHero: "home_mobileHero__KqNzI",
            intro: "home_intro__y_hFE",
            projectList: "home_projectList__XRi6n",
            project: "home_project__BifOI",
            projectHeader: "home_projectHeader__2IXa7",
            comingSoon: "home_comingSoon__TDsZ1",
            projectInner: "home_projectInner__0fynv",
            projectImage: "home_projectImage__6mGwZ",
            projectLink: "home_projectLink__VGUKI",
            projectInfos: "home_projectInfos__bp7Bg",
            projectTitleWrapper: "home_projectTitleWrapper__DFhnj",
            projectTitle: "home_projectTitle___Lwxi",
            counter: "home_counter__egbK3",
            counter_inner: "home_counter_inner__o3b2r",
            counter_dot: "home_counter_dot__K32JC"
        }
    }
}]);
