(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[521], {
    7568: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
            return n(2352)
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
        var i = n(6162)
          , a = n(5924)
          , r = n(959)
          , s = n(8666)
          , o = n(2317)
          , l = n.n(o);
        function c(e) {
            let {children: t=null, diagonal: n=!1, reversed: o=!1, style: c={}, className: d="", durationIn: u=1.2, durationOut: m=1, ...p} = e
              , _ = (0,
            r.useRef)(null);
            return (0,
            i.jsx)(s.f, {
                ...p,
                ref: _,
                className: (0,
                a.Z)(d, l().slide, {
                    [l().diagonal]: n,
                    [l().reversed]: o
                }),
                durationIn: u,
                durationOut: m,
                style: {
                    ...c
                },
                children: (0,
                i.jsx)("div", {
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
        var i = n(6162)
          , a = n(6590)
          , r = n(5924)
          , s = n(8365)
          , o = n.n(s)
          , l = n(959)
          , c = n(7728)
          , d = n.n(c)
          , u = n(5100)
          , m = n.n(u);
        function p(e) {
            let {className: t="", style: n={}, loading: s="eager", objectFit: c="cover", quality: u=80, alt: p="", ..._} = e
              , h = _.field ? a.Z : o()
              , [f,x] = (0,
            l.useState)(!1);
            return (0,
            i.jsx)("div", {
                className: (0,
                r.Z)(m().wrapper, d().wrapper, {
                    [d().loaded]: f
                }),
                children: (0,
                i.jsx)(h, {
                    ..._,
                    onLoad: () => x(!0),
                    className: (0,
                    r.Z)(m().image, t),
                    style: {
                        objectFit: c,
                        ...n
                    },
                    loading: s,
                    quality: u,
                    alt: p
                })
            })
        }
    },
    6706: function(e, t, n) {
        "use strict";
        function i() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e)
                return [null, null];
            let[t,n] = e.replace(/\s/g, "").split(",").map(e => Number(e));
            if (!t || !n)
                return null;
            let i = "https://www.google.com/maps/dir//''/@".concat(t, ",").concat(n, ",17z/data=!3m1!5s0x47e66e2874e2dc1b:0xa6a7093cc44962d7!4m9!4m8!1m0!1m5!1m1!1s0x47e66e162116aaab:0xe74f4029b5369a33!2m2!1d2.3395636!2d48.8676204!3e0")
              , a = "".concat(t.toFixed(7), "' ").concat(n.toFixed(7));
            return [a, i]
        }
        n.d(t, {
            r: function() {
                return i
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
        var i = n(6162)
          , a = n(3439)
          , r = n(5924)
          , s = n(1379)
          , o = n(5373)
          , l = n.n(o)
          , c = n(5927);
        function d(e) {
            let {title: t="", description: n, image: a, keywords: r} = e;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(l(), {
                    children: [(0,
                    i.jsx)("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }), (0,
                    i.jsx)("meta", {
                        name: "robots",
                        content: "index,follow"
                    }), (0,
                    i.jsx)("meta", {
                        name: "googlebot",
                        content: "index,follow"
                    }), (0,
                    i.jsx)("meta", {
                        name: "keywords",
                        content: r && r.length ? r.join(",") : r
                    }), (0,
                    i.jsx)("meta", {
                        name: "author",
                        content: "Redot Studio"
                    }), (0,
                    i.jsx)("meta", {
                        name: "referrer",
                        content: "no-referrer"
                    }), (0,
                    i.jsx)("meta", {
                        name: "format-detection",
                        content: "telephone=no"
                    }), (0,
                    i.jsx)("meta", {
                        httpEquiv: "x-dns-prefetch-control",
                        content: "off"
                    }), (0,
                    i.jsx)("meta", {
                        httpEquiv: "Window-Target",
                        content: "_value"
                    }), (0,
                    i.jsx)("meta", {
                        name: "geo.region",
                        content: "FR"
                    }), (0,
                    i.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }), (0,
                    i.jsx)("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }), (0,
                    i.jsx)("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#336cff"
                    }), (0,
                    i.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#336cff"
                    }), (0,
                    i.jsx)("meta", {
                        name: "theme-color",
                        content: "#336CFF"
                    }), (0,
                    i.jsx)("link", {
                        rel: "icon",
                        id: "favicon",
                        href: "/favicon.ico"
                    }), (0,
                    i.jsx)("title", {
                        children: t
                    })]
                }), (0,
                i.jsx)(s.PB, {
                    title: t,
                    description: n,
                    openGraph: {
                        title: t,
                        description: n,
                        type: "website",
                        locale: "en_EU",
                        images: [{
                            url: a ? a.url : "".concat(c.env.NEXT_PUBLIC_WEBSITE_URL, "/og.jpg"),
                            width: a ? a.width : 1200,
                            height: a ? a.height : 630,
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
          , p = n(959)
          , _ = n(330)
          , h = n(3521)
          , f = n(6706)
          , x = n(1172)
          , g = n(6598)
          , j = n.n(g);
        function v(e) {
            let {children: t, appear: n, delayIn: a=0, ...r} = e;
            return n ? (0,
            i.jsx)(_.E, {
                intersection: !0,
                delayIn: a,
                ...r,
                children: t
            }) : (0,
            i.jsx)("div", {
                ...r,
                children: t
            })
        }
        function N(e) {
            let {settings: t, appear: n=!0, className: a=""} = e
              , s = (0,
            u.useRouter)()
              , o = (0,
            x.o)(e => {
                let {isRouteTransitioning: t} = e;
                return t
            }
            )
              , l = (0,
            p.useRef)("/contact" === s.pathname);
            (0,
            p.useEffect)( () => {
                o || (l.current = "/contact" === s.pathname)
            }
            , [o]);
            let {geoloc: c, socials: d} = t
              , m = (0,
            f.r)(c)
              , _ = m[1];
            return (0,
            i.jsx)("footer", {
                id: "footer",
                className: (0,
                r.Z)("theme-red", "section-over", j().wrapper, a),
                children: (0,
                i.jsxs)("div", {
                    className: j().inner,
                    children: [(0,
                    i.jsx)("div", {
                        className: (0,
                        r.Z)(j().part, "-location"),
                        children: (0,
                        i.jsx)(v, {
                            appear: n,
                            className: j().location,
                            children: (0,
                            i.jsx)(h.r, {
                                href: _,
                                children: "Creative Studio, based in Paris"
                            })
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: (0,
                        r.Z)(j().part, "-socials"),
                        children: (0,
                        i.jsx)("ul", {
                            className: j().socials_list,
                            children: d.map( (e, t) => (0,
                            i.jsx)("li", {
                                className: j().socials_item,
                                children: (0,
                                i.jsx)(v, {
                                    appear: n,
                                    delayIn: 0 + .2 * t,
                                    children: (0,
                                    i.jsx)(h.r, {
                                        href: e.link.url,
                                        children: e.label
                                    })
                                })
                            }, e.label))
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: (0,
                        r.Z)(j().part, "-date"),
                        children: (0,
                        i.jsx)(v, {
                            appear: n,
                            children: "\xa92024"
                        })
                    })]
                })
            })
        }
        var b = n(6494)
          , w = n.n(b);
        function y(e) {
            let {seo: t={
                title: "Redot Studio | Creative studio specialized in 3D & motion Design",
                description: "Redot is a creative studio based in Paris. Redot collaborates with communication agencies to produce creative content : 3D & motion design. Discover the studio's portfolio.",
                image: null,
                keywords: ""
            }, children: n, theme: s="light", className: o="", settings: l={}, withFooter: c=!0, footerClassName: _=null, footerAppear: h=!0} = e
              , f = (0,
            a.LZ)(null, null, null)
              , g = (0,
            u.useRouter)()
              , j = (0,
            x.o)(e => {
                let {addRouteToHistory: t} = e;
                return t
            }
            );
            return (0,
            p.useEffect)( () => {
                function e(e) {
                    e = "#" + e.split("#").pop(),
                    f.scrollTo(e)
                }
                return m().events.on("hashChangeStart", e),
                () => {
                    m().events.off("hashChangeStart", e)
                }
            }
            , [f]),
            (0,
            p.useEffect)( () => {
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
            p.useEffect)( () => {
                let e = g.route;
                j(e);
                let t = e.split("/").pop();
                document.documentElement.dataset.route = t || "home"
            }
            , [j, g.route]),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(d, {
                    ...t
                }), (0,
                i.jsx)(a.Ei, {
                    root: !0,
                    children: (0,
                    i.jsxs)("div", {
                        className: (0,
                        r.Z)("theme-".concat(s), w().layout, o),
                        children: [(0,
                        i.jsx)("main", {
                            className: w().main,
                            children: n
                        }), c && (0,
                        i.jsx)(N, {
                            className: _,
                            settings: l,
                            appear: h
                        })]
                    })
                })]
            })
        }
    },
    2352: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return v
            },
            default: function() {
                return N
            }
        });
        var i = n(6162)
          , a = n(5924)
          , r = n(959)
          , s = n(3952)
          , o = n(3001)
          , l = n(1218)
          , c = n(7034)
          , d = n(7650)
          , u = n(330)
          , m = n(5801)
          , p = n(3944)
          , _ = n(3521)
          , h = n(4539)
          , f = n(112)
          , x = n(1172)
          , g = n(947)
          , j = n.n(g)
          , v = !0;
        function N(e) {
            var t, n, g, v, N;
            let {settings: b={}, seo: w, intro: y, services: k} = e
              , E = (0,
            r.useRef)(null)
              , {isPreloaded: I, setGlMaskingOffset: S, setGlIsInteractive: T, setGlIsHidden: C} = (0,
            x.o)(e => {
                let {isPreloaded: t, setGlMaskingOffset: n, setGlIsInteractive: i, setGlIsHidden: a} = e;
                return {
                    isPreloaded: t,
                    setGlMaskingOffset: n,
                    setGlIsInteractive: i,
                    setGlIsHidden: a
                }
            }
            , o.X)
              , [R,Z] = (0,
            r.useState)(!1)
              , {addTimeline: L} = (0,
            r.useContext)(l.q);
            return (0,
            s.Z)( () => {
                T(!1),
                S((0,
                f.s)()),
                C(!0),
                L("global", {
                    onStart: () => {
                        Z(!0)
                    }
                }).to({}, {
                    duration: .4
                })
            }
            , []),
            (0,
            i.jsxs)(c.A, {
                theme: "light",
                settings: b,
                seo: {
                    title: w.title || "About | Redot Studio",
                    description: w.description,
                    image: {
                        url: null === (t = w.image) || void 0 === t ? void 0 : t.url,
                        width: null === (n = w.image) || void 0 === n ? void 0 : null === (g = n.dimensions) || void 0 === g ? void 0 : g.width,
                        height: null === (v = w.image) || void 0 === v ? void 0 : null === (N = v.dimensions) || void 0 === N ? void 0 : N.height
                    },
                    keywords: ""
                },
                children: [(0,
                i.jsx)("h1", {
                    className: "sr-only",
                    children: "About"
                }), (0,
                i.jsxs)("section", {
                    ref: E,
                    className: j().wrapper,
                    children: [(0,
                    i.jsx)(u.E, {
                        active: I,
                        leaving: R,
                        className: j().title,
                        dangerouslySetInnerHTML: {
                            __html: y.text
                        }
                    }), (0,
                    i.jsx)("ul", {
                        className: j().items,
                        children: k.items.map( (e, t) => {
                            let n = .1 + .05 * t;
                            return (0,
                            i.jsx)("li", {
                                className: j().item,
                                children: (0,
                                i.jsxs)("div", {
                                    className: j().itemInner,
                                    children: [(0,
                                    i.jsx)(d.g, {
                                        active: !0,
                                        leaving: R,
                                        delayIn: n,
                                        children: (0,
                                        i.jsxs)("div", {
                                            className: j().itemHeader,
                                            children: [(0,
                                            i.jsx)("div", {
                                                className: j().itemDot,
                                                children: (0,
                                                i.jsx)(h.l, {
                                                    name: "circle"
                                                })
                                            }), (0,
                                            i.jsx)("div", {
                                                className: j().itemTitleWrapper,
                                                children: (0,
                                                i.jsx)("h3", {
                                                    className: j().itemTitle,
                                                    children: e.title
                                                })
                                            })]
                                        })
                                    }), (0,
                                    i.jsx)("div", {
                                        className: j().itemDescription,
                                        children: (0,
                                        i.jsx)(u.E, {
                                            active: I,
                                            leaving: R,
                                            delayIn: n + .2,
                                            dangerouslySetInnerHTML: {
                                                __html: e.description
                                            }
                                        })
                                    })]
                                })
                            }, t)
                        }
                        )
                    }), (0,
                    i.jsx)(m.o, {
                        active: I,
                        leaving: R,
                        className: j().imageWrapper,
                        children: (0,
                        i.jsx)("div", {
                            className: (0,
                            a.Z)("aspect-ratio", j().image),
                            children: (0,
                            i.jsx)(p.E, {
                                field: y.image,
                                alt: y.image.alt || "",
                                width: 720,
                                height: 524,
                                priority: !0
                            })
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: j().text,
                        children: (0,
                        i.jsx)(u.E, {
                            active: I,
                            leaving: R,
                            delayIn: .6,
                            className: j().text,
                            dangerouslySetInnerHTML: {
                                __html: "<p>From our Parisian office, our lovely team crafts 3D goods, produces films, takes photographs, and designs campaigns. Crafting for brands, agencies, Institutions, and artists.</p>"
                            }
                        })
                    }), (0,
                    i.jsxs)("div", {
                        className: j().contactWrapper,
                        children: [(0,
                        i.jsx)("div", {
                            className: j().contactTitle,
                            children: (0,
                            i.jsx)(d.g, {
                                active: I,
                                leaving: R,
                                delayIn: .7,
                                children: "Ready to work with us ?"
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: j().contactBody,
                            children: (0,
                            i.jsx)(d.g, {
                                active: I,
                                leaving: R,
                                delayIn: .8,
                                children: (0,
                                i.jsx)("p", {
                                    children: "Come on, have a coffee with us, it's really nice here."
                                })
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: j().contactLinkWrapper,
                            children: (0,
                            i.jsx)(d.g, {
                                active: I,
                                leaving: R,
                                delayIn: 1,
                                children: (0,
                                i.jsx)(_.r, {
                                    href: "/contact",
                                    className: (0,
                                    a.Z)(j().contactLink, "o-link-underline"),
                                    children: "Contact us"
                                })
                            })
                        })]
                    })]
                })]
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
    947: function(e) {
        e.exports = {
            wrapper: "about_wrapper__RWQSA",
            title: "about_title__MTtdm",
            underline: "about_underline__zKgH5",
            italic: "about_italic__eergV",
            imageWrapper: "about_imageWrapper__iMKtA",
            image: "about_image__GbQ_S",
            items: "about_items___T8iV",
            item: "about_item__CFwSm",
            itemInner: "about_itemInner__yxB1Y",
            itemHeader: "about_itemHeader__3JjFs",
            itemLetter: "about_itemLetter__nntTg",
            itemDot: "about_itemDot__vqBR5",
            itemTitle: "about_itemTitle__ZDYBr",
            itemDescription: "about_itemDescription__HMZEa",
            text: "about_text__Nl3et",
            contactWrapper: "about_contactWrapper__NbKfk",
            contactTitle: "about_contactTitle__tYOws",
            contactBody: "about_contactBody__R53Um",
            contactLinkWrapper: "about_contactLinkWrapper__NyOkz"
        }
    }
}, function(e) {
    e.O(0, [590, 156, 774, 888, 179], function() {
        return e(e.s = 7568)
    }),
    _N_E = e.O()
}
]);
