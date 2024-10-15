(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[335], {
    1592: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
            return n(2547)
        }
        ])
    },
    5801: function(e, t, n) {
        "use strict";
        n.d(t, {
            o: function() {
                return c
            }
        });
        var a = n(6162)
          , i = n(5924)
          , o = n(959)
          , s = n(8666)
          , r = n(2317)
          , l = n.n(r);
        function c(e) {
            let {children: t=null, diagonal: n=!1, reversed: r=!1, style: c={}, className: d="", durationIn: u=1.2, durationOut: m=1, ...h} = e
              , _ = (0,
            o.useRef)(null);
            return (0,
            a.jsx)(s.f, {
                ...h,
                ref: _,
                className: (0,
                i.Z)(d, l().slide, {
                    [l().diagonal]: n,
                    [l().reversed]: r
                }),
                durationIn: u,
                durationOut: m,
                style: {
                    ...c
                },
                children: (0,
                a.jsx)("div", {
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
                return h
            }
        });
        var a = n(6162)
          , i = n(6590)
          , o = n(5924)
          , s = n(8365)
          , r = n.n(s)
          , l = n(959)
          , c = n(7728)
          , d = n.n(c)
          , u = n(5100)
          , m = n.n(u);
        function h(e) {
            let {className: t="", style: n={}, loading: s="eager", objectFit: c="cover", quality: u=80, alt: h="", ..._} = e
              , p = _.field ? i.Z : r()
              , [x,f] = (0,
            l.useState)(!1);
            return (0,
            a.jsx)("div", {
                className: (0,
                o.Z)(m().wrapper, d().wrapper, {
                    [d().loaded]: x
                }),
                children: (0,
                a.jsx)(p, {
                    ..._,
                    onLoad: () => f(!0),
                    className: (0,
                    o.Z)(m().image, t),
                    style: {
                        objectFit: c,
                        ...n
                    },
                    loading: s,
                    quality: u,
                    alt: h
                })
            })
        }
    },
    6706: function(e, t, n) {
        "use strict";
        function a() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e)
                return [null, null];
            let[t,n] = e.replace(/\s/g, "").split(",").map(e => Number(e));
            if (!t || !n)
                return null;
            let a = "https://www.google.com/maps/dir//''/@".concat(t, ",").concat(n, ",17z/data=!3m1!5s0x47e66e2874e2dc1b:0xa6a7093cc44962d7!4m9!4m8!1m0!1m5!1m1!1s0x47e66e162116aaab:0xe74f4029b5369a33!2m2!1d2.3395636!2d48.8676204!3e0")
              , i = "".concat(t.toFixed(7), "' ").concat(n.toFixed(7));
            return [i, a]
        }
        n.d(t, {
            r: function() {
                return a
            }
        })
    },
    7034: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return b
            }
        });
        var a = n(6162)
          , i = n(3439)
          , o = n(5924)
          , s = n(1379)
          , r = n(5373)
          , l = n.n(r)
          , c = n(5927);
        function d(e) {
            let {title: t="", description: n, image: i, keywords: o} = e;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(l(), {
                    children: [(0,
                    a.jsx)("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }), (0,
                    a.jsx)("meta", {
                        name: "robots",
                        content: "index,follow"
                    }), (0,
                    a.jsx)("meta", {
                        name: "googlebot",
                        content: "index,follow"
                    }), (0,
                    a.jsx)("meta", {
                        name: "keywords",
                        content: o && o.length ? o.join(",") : o
                    }), (0,
                    a.jsx)("meta", {
                        name: "author",
                        content: "Redot Studio"
                    }), (0,
                    a.jsx)("meta", {
                        name: "referrer",
                        content: "no-referrer"
                    }), (0,
                    a.jsx)("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }), (0,
                    a.jsx)("meta", {
                        httpEquiv: "x-dns-prefetch-control",
                        content: "off"
                    }), (0,
                    a.jsx)("meta", {
                        httpEquiv: "Window-Target",
                        content: "_value"
                    }), (0,
                    a.jsx)("meta", {
                        name: "geo.region",
                        content: "FR"
                    }), (0,
                    a.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }), (0,
                    a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }), (0,
                    a.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }), (0,
                    a.jsx)("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }), (0,
                    a.jsx)("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#336cff"
                    }), (0,
                    a.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#336cff"
                    }), (0,
                    a.jsx)("meta", {
                        name: "theme-color",
                        content: "#336CFF"
                    }), (0,
                    a.jsx)("link", {
                        rel: "icon",
                        id: "favicon",
                        href: "/favicon.ico"
                    }), (0,
                    a.jsx)("title", {
                        children: t
                    })]
                }), (0,
                a.jsx)(s.PB, {
                    title: t,
                    description: n,
                    openGraph: {
                        title: t,
                        description: n,
                        type: "website",
                        locale: "en_EU",
                        images: [{
                            url: i ? i.url : "".concat(c.env.NEXT_PUBLIC_WEBSITE_URL, "/og.jpg"),
                            width: i ? i.width : 1200,
                            height: i ? i.height : 630,
                            alt: t
                        }],
                        defaultImageWidth: 1200,
                        defaultImageHeight: 630,
                        site_name: ""
                    }
                })]
            })
        }
        var u = n(1517)
          , m = n.n(u)
          , h = n(959)
          , _ = n(330)
          , p = n(3521)
          , x = n(6706)
          , f = n(1172)
          , g = n(6598)
          , j = n.n(g);
        function v(e) {
            let {children: t, appear: n, delayIn: i=0, ...o} = e;
            return n ? (0,
            a.jsx)(_.E, {
                intersection: !0,
                delayIn: i,
                ...o,
                children: t
            }) : (0,
            a.jsx)("div", {
                ...o,
                children: t
            })
        }
        function y(e) {
            let {settings: t, appear: n=!0, className: i=""} = e
              , s = (0,
            u.useRouter)()
              , r = (0,
            f.o)(e => {
                let {isRouteTransitioning: t} = e;
                return t
            }
            )
              , l = (0,
            h.useRef)("/contact" === s.pathname);
            (0,
            h.useEffect)( () => {
                r || (l.current = "/contact" === s.pathname)
            }
            , [r]);
            let {geoloc: c, socials: d} = t
              , m = (0,
            x.r)(c)
              , _ = m[1];
            return (0,
            a.jsx)("footer", {
                id: "footer",
                className: (0,
                o.Z)("theme-red", "section-over", j().wrapper, i),
                children: (0,
                a.jsxs)("div", {
                    className: j().inner,
                    children: [(0,
                    a.jsx)("div", {
                        className: (0,
                        o.Z)(j().part, "-location"),
                        children: (0,
                        a.jsx)(v, {
                            appear: n,
                            className: j().location,
                            children: (0,
                            a.jsx)(p.r, {
                                href: _,
                                children: "Creative Studio, based in Paris"
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: (0,
                        o.Z)(j().part, "-socials"),
                        children: (0,
                        a.jsx)("ul", {
                            className: j().socials_list,
                            children: d.map( (e, t) => (0,
                            a.jsx)("li", {
                                className: j().socials_item,
                                children: (0,
                                a.jsx)(v, {
                                    appear: n,
                                    delayIn: 0 + .2 * t,
                                    children: (0,
                                    a.jsx)(p.r, {
                                        href: e.link.url,
                                        children: e.label
                                    })
                                })
                            }, e.label))
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: (0,
                        o.Z)(j().part, "-date"),
                        children: (0,
                        a.jsx)(v, {
                            appear: n,
                            children: "\xa92024"
                        })
                    })]
                })
            })
        }
        var w = n(6494)
          , N = n.n(w);
        function b(e) {
            let {seo: t={
                title: "Redot Studio | Creative studio specialized in 3D & motion Design",
                description: "Redot is a creative studio based in Paris. Redot collaborates with communication agencies to produce creative content : 3D & motion design. Discover the studio's portfolio.",
                image: null,
                keywords: ""
            }, children: n, theme: s="light", className: r="", settings: l={}, withFooter: c=!0, footerClassName: _=null, footerAppear: p=!0} = e
              , x = (0,
            i.LZ)(null, null, null)
              , g = (0,
            u.useRouter)()
              , j = (0,
            f.o)(e => {
                let {addRouteToHistory: t} = e;
                return t
            }
            );
            return (0,
            h.useEffect)( () => {
                function e(e) {
                    e = "#" + e.split("#").pop(),
                    x.scrollTo(e)
                }
                return m().events.on("hashChangeStart", e),
                () => {
                    m().events.off("hashChangeStart", e)
                }
            }
            , [x]),
            (0,
            h.useEffect)( () => {
                function e(e) {
                    j(e)
                }
                return m().events.on("routeChangeStart", e),
                () => {
                    m().events.off("routeChangeStart", e)
                }
            }
            , [j]),
            (0,
            h.useEffect)( () => {
                let e = g.route;
                j(e);
                let t = e.split("/").pop();
                document.documentElement.dataset.route = t || "home"
            }
            , [j, g.route]),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(d, {
                    ...t
                }), (0,
                a.jsx)(i.Ei, {
                    root: !0,
                    children: (0,
                    a.jsxs)("div", {
                        className: (0,
                        o.Z)("theme-".concat(s), N().layout, r),
                        children: [(0,
                        a.jsx)("main", {
                            className: N().main,
                            children: n
                        }), c && (0,
                        a.jsx)(y, {
                            className: _,
                            settings: l,
                            appear: p
                        })]
                    })
                })]
            })
        }
    },
    2547: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return N
            },
            default: function() {
                return b
            }
        });
        var a = n(6162)
          , i = n(4899)
          , o = n(5924)
          , s = n(959)
          , r = n(3952)
          , l = n(3001)
          , c = n(1218)
          , d = n(7034)
          , u = n(330)
          , m = n(5801)
          , h = n(3944)
          , _ = n(112)
          , p = n(6706)
          , x = n(7650)
          , f = n(3521)
          , g = n(4539)
          , j = n(1172)
          , v = n(9293)
          , y = n.n(v);
        let w = e => {
            let {title: t, children: n, isPreloaded: i, leaving: o, delayIn: s=0} = e;
            return (0,
            a.jsxs)("div", {
                className: y().bodySection,
                children: [(0,
                a.jsx)(x.g, {
                    active: i,
                    leaving: o,
                    delayIn: s,
                    children: (0,
                    a.jsx)("h2", {
                        className: y().bodyTitle,
                        children: t
                    })
                }), (0,
                a.jsx)("div", {
                    className: y().bodyContent,
                    children: n
                })]
            })
        }
        ;
        var N = !0;
        function b(e) {
            var t, n, v, N, b;
            let {text: I, seo: k, image: E, imageMobile: S, settings: Z={}} = e
              , {geoloc: C, email: P, address: T, socials: R} = Z
              , [F,W] = (0,
            p.r)(C)
              , {isPreloaded: L, setGlMaskingOffset: q, setGlIsInteractive: D, setGlIsHidden: O} = (0,
            j.o)(e => {
                let {isPreloaded: t, setGlMaskingOffset: n, setGlIsInteractive: a, setGlIsHidden: i} = e;
                return {
                    isPreloaded: t,
                    setGlMaskingOffset: n,
                    setGlIsInteractive: a,
                    setGlIsHidden: i
                }
            }
            , l.X)
              , [z,B] = (0,
            s.useState)(!1)
              , {addTimeline: H} = (0,
            s.useContext)(c.q);
            return (0,
            r.Z)( () => {
                D(!1),
                q((0,
                _.s)()),
                O(!0),
                H("global", {
                    onStart: () => {
                        B(!0)
                    }
                }).to({}, {
                    duration: .4
                })
            }
            , []),
            (0,
            a.jsx)(d.A, {
                theme: "light",
                settings: Z,
                seo: {
                    title: k.title || "Contact | Redot Studio",
                    description: k.description,
                    image: {
                        url: null === (t = k.image) || void 0 === t ? void 0 : t.url,
                        width: null === (n = k.image) || void 0 === n ? void 0 : null === (v = n.dimensions) || void 0 === v ? void 0 : v.width,
                        height: null === (N = k.image) || void 0 === N ? void 0 : null === (b = N.dimensions) || void 0 === b ? void 0 : b.height
                    },
                    keywords: ""
                },
                footerClassName: [y().footer],
                children: (0,
                a.jsxs)("div", {
                    className: (0,
                    o.Z)(y().wrapper),
                    children: [(0,
                    a.jsx)("div", {
                        className: (0,
                        o.Z)(y().hero),
                        children: (0,
                        a.jsxs)("div", {
                            className: "layout-block",
                            children: [(0,
                            a.jsx)(m.o, {
                                active: L,
                                leaving: z,
                                className: y().image,
                                children: (0,
                                a.jsxs)("div", {
                                    className: "aspect-ratio",
                                    style: {
                                        "--aspect-ratio": "calc(1360/340)"
                                    },
                                    children: [(0,
                                    a.jsx)(h.E, {
                                        className: "desktop",
                                        field: E,
                                        alt: E.alt || "",
                                        width: 2720,
                                        height: 680,
                                        imgixParams: {
                                            width: 2720,
                                            height: 680
                                        },
                                        priority: !0
                                    }), !!S && (0,
                                    a.jsx)(h.E, {
                                        className: "mobile",
                                        field: S,
                                        alt: S.alt || "",
                                        width: 800,
                                        height: 800,
                                        imgixParams: {
                                            width: 800,
                                            height: 800,
                                            fit: "crop",
                                            ar: "1:1"
                                        },
                                        priority: !0
                                    })]
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: y().basedWrapper,
                                children: (0,
                                a.jsx)(u.E, {
                                    tag: "p",
                                    active: L,
                                    leaving: z,
                                    delayIn: .2,
                                    className: y().based,
                                    children: "BASED IN PARIS, WORKING WORLDWIDE"
                                })
                            })]
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: (0,
                        o.Z)(y().body, {
                            "-active": L
                        }),
                        children: (0,
                        a.jsxs)("div", {
                            className: (0,
                            o.Z)(y().bodyInner, "layout-grid"),
                            children: [(0,
                            a.jsxs)(w, {
                                title: "Project Inquiries",
                                isPreloaded: L,
                                leaving: z,
                                delayIn: .4,
                                children: [(0,
                                a.jsx)(u.E, {
                                    tag: "p",
                                    active: L,
                                    leaving: z,
                                    delayIn: .4,
                                    className: (0,
                                    o.Z)(y().bodyText),
                                    dangerouslySetInnerHTML: {
                                        __html: I
                                    }
                                }), (0,
                                a.jsxs)(x.g, {
                                    active: L,
                                    delayIn: .6,
                                    leaving: z,
                                    children: [" ", (0,
                                    a.jsx)("a", {
                                        href: "mailto:".concat(P),
                                        className: "o-link-underline",
                                        children: P
                                    })]
                                })]
                            }), (0,
                            a.jsxs)(w, {
                                title: "Our location",
                                leaving: z,
                                isPreloaded: L,
                                delayIn: .4,
                                children: [(0,
                                a.jsx)(u.E, {
                                    tag: "p",
                                    active: L,
                                    leaving: z,
                                    delayIn: .4,
                                    className: (0,
                                    o.Z)(y().bodyText),
                                    dangerouslySetInnerHTML: {
                                        __html: i.S(T).replace(/\n/g, "<br />")
                                    }
                                }), (0,
                                a.jsx)(x.g, {
                                    active: L,
                                    leaving: z,
                                    delayIn: .6,
                                    children: (0,
                                    a.jsx)(f.r, {
                                        href: W,
                                        className: "o-link-underline",
                                        children: "View on map"
                                    })
                                })]
                            }), (0,
                            a.jsx)(w, {
                                title: "Socials networks",
                                isPreloaded: L,
                                leaving: z,
                                delayIn: .4,
                                children: (0,
                                a.jsx)("ul", {
                                    className: y().socials,
                                    children: R.map( (e, t) => (0,
                                    a.jsx)(x.g, {
                                        tag: "li",
                                        active: !0,
                                        leaving: z,
                                        delayIn: .4 + .2 * t,
                                        className: (0,
                                        o.Z)(y().socials_item),
                                        children: (0,
                                        a.jsx)("div", {
                                            children: (0,
                                            a.jsxs)(f.r, {
                                                href: e.link.url,
                                                className: "o-link-arrow",
                                                children: [(0,
                                                a.jsx)("span", {
                                                    children: e.label
                                                }), (0,
                                                a.jsx)("span", {
                                                    className: "o-link-arrow_arrow",
                                                    children: (0,
                                                    a.jsx)(g.l, {
                                                        name: "arrow-angle",
                                                        className: "o-link-arrow_arrow-icon"
                                                    })
                                                })]
                                            })
                                        })
                                    }, e.label))
                                })
                            }), (0,
                            a.jsx)(x.g, {
                                className: (0,
                                o.Z)("desktop", y().geoloc),
                                active: L,
                                leaving: z,
                                delayIn: 1,
                                children: (0,
                                a.jsx)(f.r, {
                                    href: W,
                                    children: F
                                })
                            })]
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
    9293: function(e) {
        e.exports = {
            desktop: "contact_desktop__x0mO8",
            wrapper: "contact_wrapper__LizBI",
            hero: "contact_hero__P_bwk",
            image: "contact_image__QEVTT",
            grow: "contact_grow__eweZy",
            title: "contact_title__l71m_",
            titleWrapper: "contact_titleWrapper__QYphM",
            body: "contact_body__7_Pon",
            bodyInner: "contact_bodyInner__vFwMR",
            geoloc: "contact_geoloc___iU8e",
            socials_item: "contact_socials_item__YaTGX",
            based: "contact_based__Hu6DC",
            basedWrapper: "contact_basedWrapper__r__Ax",
            bodySection: "contact_bodySection__Jr55g",
            bodyContent: "contact_bodyContent___6Bqx",
            bodyTitle: "contact_bodyTitle__js8eJ",
            footer: "contact_footer__P6duf"
        }
    }
}, function(e) {
    e.O(0, [590, 156, 774, 888, 179], function() {
        return e(e.s = 1592)
    }),
    _N_E = e.O()
}
]);
