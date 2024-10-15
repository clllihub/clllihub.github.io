"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[941], {
    7941: function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        n.d(t, {
            i: function() {
                return tN
            }
        });
        /*!
 * Observer 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var i, o, a, s, l, c, u, f, p, d, h, g, v = function() {
            return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
        }, m = 1, y = [], x = [], b = [], w = Date.now, _ = function(e, t) {
            return t
        }, k = function() {
            var e = p.core
              , t = e.bridge || {}
              , n = e._scrollers
              , r = e._proxies;
            n.push.apply(n, x),
            r.push.apply(r, b),
            x = n,
            b = r,
            _ = function(e, n) {
                return t[e](n)
            }
        }, S = function(e, t) {
            return ~b.indexOf(e) && b[b.indexOf(e) + 1][t]
        }, T = function(e) {
            return !!~d.indexOf(e)
        }, M = function(e, t, n, r, i) {
            return e.addEventListener(t, n, {
                passive: !r,
                capture: !!i
            })
        }, E = function(e, t, n, r) {
            return e.removeEventListener(t, n, !!r)
        }, P = "scrollLeft", C = "scrollTop", O = function() {
            return h && h.isPressed || x.cache++
        }, A = function(e, t) {
            var n = function n(r) {
                if (r || 0 === r) {
                    m && (a.history.scrollRestoration = "manual");
                    var i = h && h.isPressed;
                    r = n.v = Math.round(r) || (h && h.iOS ? 1 : 0),
                    e(r),
                    n.cacheID = x.cache,
                    i && _("ss", r)
                } else
                    (t || x.cache !== n.cacheID || _("ref")) && (n.cacheID = x.cache,
                    n.v = e());
                return n.v + n.offset
            };
            return n.offset = 0,
            e && n
        }, D = {
            s: P,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: A(function(e) {
                return arguments.length ? a.scrollTo(e, R.sc()) : a.pageXOffset || s[P] || l[P] || c[P] || 0
            })
        }, R = {
            s: C,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: D,
            sc: A(function(e) {
                return arguments.length ? a.scrollTo(D.sc(), e) : a.pageYOffset || s[C] || l[C] || c[C] || 0
            })
        }, Y = function(e) {
            return i.utils.toArray(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
        }, I = function(e, t) {
            var n = t.s
              , r = t.sc
              , i = x.indexOf(e)
              , o = r === R.sc ? 1 : 2;
            return ~i || (i = x.push(e) - 1),
            x[i + o] || (x[i + o] = A(S(e, n), !0) || (T(e) ? r : A(function(t) {
                return arguments.length ? e[n] = t : e[n]
            })))
        }, X = function(e, t, n) {
            var r = e
              , i = e
              , o = w()
              , a = o
              , s = t || 50
              , l = Math.max(500, 3 * s)
              , c = function(e, t) {
                var l = w();
                t || l - o > s ? (i = r,
                r = e,
                a = o,
                o = l) : n ? r += e : r = i + (e - i) / (l - a) * (o - a)
            };
            return {
                update: c,
                reset: function() {
                    i = r = n ? 0 : r,
                    a = o = 0
                },
                getVelocity: function(e) {
                    var t = a
                      , s = i
                      , u = w();
                    return (e || 0 === e) && e !== r && c(e),
                    o === a || u - a > l ? 0 : (r + (n ? s : -s)) / ((n ? u : o) - t) * 1e3
                }
            }
        }, z = function(e, t) {
            return t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
        }, B = function(e) {
            var t = Math.max.apply(Math, e)
              , n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n
        }, L = function() {
            (p = i.core.globals().ScrollTrigger) && p.core && k()
        }, N = function(e) {
            return (i = e || v()) && "undefined" != typeof document && document.body && (a = window,
            l = (s = document).documentElement,
            c = s.body,
            d = [a, s, l, c],
            i.utils.clamp,
            f = "onpointerenter"in c ? "pointer" : "mouse",
            u = F.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
            g = F.eventTypes = ("ontouchstart"in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
            setTimeout(function() {
                return m = 0
            }, 500),
            L(),
            o = 1),
            o
        };
        D.op = R,
        x.cache = 0;
        var F = function() {
            var e;
            function t(e) {
                this.init(e)
            }
            return t.prototype.init = function(e) {
                o || N(i) || console.warn("Please gsap.registerPlugin(Observer)"),
                p || L();
                var t = e.tolerance
                  , n = e.dragMinimum
                  , r = e.type
                  , d = e.target
                  , v = e.lineHeight
                  , m = e.debounce
                  , x = e.preventDefault
                  , b = e.onStop
                  , _ = e.onStopDelay
                  , k = e.ignore
                  , S = e.wheelSpeed
                  , P = e.event
                  , C = e.onDragStart
                  , A = e.onDragEnd
                  , F = e.onDrag
                  , H = e.onPress
                  , W = e.onRelease
                  , V = e.onRight
                  , q = e.onLeft
                  , G = e.onUp
                  , U = e.onDown
                  , j = e.onChangeX
                  , K = e.onChangeY
                  , Z = e.onChange
                  , $ = e.onToggleX
                  , J = e.onToggleY
                  , Q = e.onHover
                  , ee = e.onHoverEnd
                  , et = e.onMove
                  , en = e.ignoreCheck
                  , er = e.isNormalizer
                  , ei = e.onGestureStart
                  , eo = e.onGestureEnd
                  , ea = e.onWheel
                  , es = e.onEnable
                  , el = e.onDisable
                  , ec = e.onClick
                  , eu = e.scrollSpeed
                  , ef = e.capture
                  , ep = e.allowClicks
                  , ed = e.lockAxis
                  , eh = e.onLockAxis;
                this.target = d = Y(d) || l,
                this.vars = e,
                k && (k = i.utils.toArray(k)),
                t = t || 1e-9,
                n = n || 0,
                S = S || 1,
                eu = eu || 1,
                r = r || "wheel,touch,pointer",
                m = !1 !== m,
                v || (v = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
                var eg, ev, em, ey, ex, eb, ew, e_ = this, ek = 0, eS = 0, eT = I(d, D), eM = I(d, R), eE = eT(), eP = eM(), eC = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === g[0], eO = T(d), eA = d.ownerDocument || s, eD = [0, 0, 0], eR = [0, 0, 0], eY = 0, eI = function() {
                    return eY = w()
                }, eX = function(e, t) {
                    return (e_.event = e) && k && ~k.indexOf(e.target) || t && eC && "touch" !== e.pointerType || en && en(e, t)
                }, ez = function() {
                    var e = e_.deltaX = B(eD)
                      , n = e_.deltaY = B(eR)
                      , r = Math.abs(e) >= t
                      , i = Math.abs(n) >= t;
                    Z && (r || i) && Z(e_, e, n, eD, eR),
                    r && (V && e_.deltaX > 0 && V(e_),
                    q && e_.deltaX < 0 && q(e_),
                    j && j(e_),
                    $ && e_.deltaX < 0 != ek < 0 && $(e_),
                    ek = e_.deltaX,
                    eD[0] = eD[1] = eD[2] = 0),
                    i && (U && e_.deltaY > 0 && U(e_),
                    G && e_.deltaY < 0 && G(e_),
                    K && K(e_),
                    J && e_.deltaY < 0 != eS < 0 && J(e_),
                    eS = e_.deltaY,
                    eR[0] = eR[1] = eR[2] = 0),
                    (ey || em) && (et && et(e_),
                    em && (F(e_),
                    em = !1),
                    ey = !1),
                    eb && (eb = !1,
                    1) && eh && eh(e_),
                    ex && (ea(e_),
                    ex = !1),
                    eg = 0
                }, eB = function(e, t, n) {
                    eD[n] += e,
                    eR[n] += t,
                    e_._vx.update(e),
                    e_._vy.update(t),
                    m ? eg || (eg = requestAnimationFrame(ez)) : ez()
                }, eL = function(e, t) {
                    "y" !== ew && (eD[2] += e,
                    e_._vx.update(e, !0)),
                    "x" !== ew && (eR[2] += t,
                    e_._vy.update(t, !0)),
                    ed && !ew && (e_.axis = ew = Math.abs(e) > Math.abs(t) ? "x" : "y",
                    eb = !0),
                    m ? eg || (eg = requestAnimationFrame(ez)) : ez()
                }, eN = function(e) {
                    if (!eX(e, 1)) {
                        var t = (e = z(e, x)).clientX
                          , r = e.clientY
                          , i = t - e_.x
                          , o = r - e_.y
                          , a = e_.isDragging;
                        e_.x = t,
                        e_.y = r,
                        (a || Math.abs(e_.startX - t) >= n || Math.abs(e_.startY - r) >= n) && (F && (em = !0),
                        a || (e_.isDragging = !0),
                        eL(i, o),
                        a || C && C(e_))
                    }
                }, eF = e_.onPress = function(e) {
                    !eX(e, 1) && (e_.axis = ew = null,
                    ev.pause(),
                    e_.isPressed = !0,
                    e = z(e),
                    ek = eS = 0,
                    e_.startX = e_.x = e.clientX,
                    e_.startY = e_.y = e.clientY,
                    e_._vx.reset(),
                    e_._vy.reset(),
                    M(er ? d : eA, g[1], eN, x, !0),
                    e_.deltaX = e_.deltaY = 0,
                    H && H(e_))
                }
                , eH = function(e) {
                    if (!eX(e, 1)) {
                        E(er ? d : eA, g[1], eN, !0);
                        var t = e_.isDragging && (Math.abs(e_.x - e_.startX) > 3 || Math.abs(e_.y - e_.startY) > 3)
                          , n = z(e);
                        !t && (e_._vx.reset(),
                        e_._vy.reset(),
                        x && ep && i.delayedCall(.08, function() {
                            if (w() - eY > 300 && !e.defaultPrevented) {
                                if (e.target.click)
                                    e.target.click();
                                else if (eA.createEvent) {
                                    var t = eA.createEvent("MouseEvents");
                                    t.initMouseEvent("click", !0, !0, a, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                                    e.target.dispatchEvent(t)
                                }
                            }
                        })),
                        e_.isDragging = e_.isGesturing = e_.isPressed = !1,
                        b && !er && ev.restart(!0),
                        A && t && A(e_),
                        W && W(e_, t)
                    }
                }, eW = function(e) {
                    return e.touches && e.touches.length > 1 && (e_.isGesturing = !0) && ei(e, e_.isDragging)
                }, eV = function() {
                    return e_.isGesturing = !1,
                    eo(e_)
                }, eq = function(e) {
                    if (!eX(e)) {
                        var t = eT()
                          , n = eM();
                        eB((t - eE) * eu, (n - eP) * eu, 1),
                        eE = t,
                        eP = n,
                        b && ev.restart(!0)
                    }
                }, eG = function(e) {
                    if (!eX(e)) {
                        e = z(e, x),
                        ea && (ex = !0);
                        var t = (1 === e.deltaMode ? v : 2 === e.deltaMode ? a.innerHeight : 1) * S;
                        eB(e.deltaX * t, e.deltaY * t, 0),
                        b && !er && ev.restart(!0)
                    }
                }, eU = function(e) {
                    if (!eX(e)) {
                        var t = e.clientX
                          , n = e.clientY
                          , r = t - e_.x
                          , i = n - e_.y;
                        e_.x = t,
                        e_.y = n,
                        ey = !0,
                        (r || i) && eL(r, i)
                    }
                }, ej = function(e) {
                    e_.event = e,
                    Q(e_)
                }, eK = function(e) {
                    e_.event = e,
                    ee(e_)
                }, eZ = function(e) {
                    return eX(e) || z(e, x) && ec(e_)
                };
                ev = e_._dc = i.delayedCall(_ || .25, function() {
                    e_._vx.reset(),
                    e_._vy.reset(),
                    ev.pause(),
                    b && b(e_)
                }).pause(),
                e_.deltaX = e_.deltaY = 0,
                e_._vx = X(0, 50, !0),
                e_._vy = X(0, 50, !0),
                e_.scrollX = eT,
                e_.scrollY = eM,
                e_.isDragging = e_.isGesturing = e_.isPressed = !1,
                e_.enable = function(e) {
                    return !e_.isEnabled && (M(eO ? eA : d, "scroll", O),
                    r.indexOf("scroll") >= 0 && M(eO ? eA : d, "scroll", eq, x, ef),
                    r.indexOf("wheel") >= 0 && M(d, "wheel", eG, x, ef),
                    (r.indexOf("touch") >= 0 && u || r.indexOf("pointer") >= 0) && (M(d, g[0], eF, x, ef),
                    M(eA, g[2], eH),
                    M(eA, g[3], eH),
                    ep && M(d, "click", eI, !1, !0),
                    ec && M(d, "click", eZ),
                    ei && M(eA, "gesturestart", eW),
                    eo && M(eA, "gestureend", eV),
                    Q && M(d, f + "enter", ej),
                    ee && M(d, f + "leave", eK),
                    et && M(d, f + "move", eU)),
                    e_.isEnabled = !0,
                    e && e.type && eF(e),
                    es && es(e_)),
                    e_
                }
                ,
                e_.disable = function() {
                    e_.isEnabled && (y.filter(function(e) {
                        return e !== e_ && T(e.target)
                    }).length || E(eO ? eA : d, "scroll", O),
                    e_.isPressed && (e_._vx.reset(),
                    e_._vy.reset(),
                    E(er ? d : eA, g[1], eN, !0)),
                    E(eO ? eA : d, "scroll", eq, ef),
                    E(d, "wheel", eG, ef),
                    E(d, g[0], eF, ef),
                    E(eA, g[2], eH),
                    E(eA, g[3], eH),
                    E(d, "click", eI, !0),
                    E(d, "click", eZ),
                    E(eA, "gesturestart", eW),
                    E(eA, "gestureend", eV),
                    E(d, f + "enter", ej),
                    E(d, f + "leave", eK),
                    E(d, f + "move", eU),
                    e_.isEnabled = e_.isPressed = e_.isDragging = !1,
                    el && el(e_))
                }
                ,
                e_.kill = function() {
                    e_.disable();
                    var e = y.indexOf(e_);
                    e >= 0 && y.splice(e, 1),
                    h === e_ && (h = 0)
                }
                ,
                y.push(e_),
                er && T(d) && (h = e_),
                e_.enable(P)
            }
            ,
            r(t.prototype, [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }]),
            e && r(t, e),
            t
        }();
        F.version = "3.11.0",
        F.create = function(e) {
            return new F(e)
        }
        ,
        F.register = N,
        F.getAll = function() {
            return y.slice()
        }
        ,
        F.getById = function(e) {
            return y.filter(function(t) {
                return t.vars.id === e
            })[0]
        }
        ,
        v() && i.registerPlugin(F);
        /*!
 * ScrollTrigger 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var H, W, V, q, G, U, j, K, Z, $, J, Q, ee, et, en, er, ei, eo, ea, es, el, ec, eu, ef, ep, ed, eh, eg, ev, em, ey, ex, eb = 1, ew = Date.now, e_ = ew(), ek = 0, eS = 0, eT = function() {
            return et = 1
        }, eM = function() {
            return et = 0
        }, eE = function(e) {
            return e
        }, eP = function(e) {
            return Math.round(1e5 * e) / 1e5 || 0
        }, eC = function() {
            return "undefined" != typeof window
        }, eO = function() {
            return H || eC() && (H = window.gsap) && H.registerPlugin && H
        }, eA = function(e) {
            return !!~j.indexOf(e)
        }, eD = function(e) {
            return S(e, "getBoundingClientRect") || (eA(e) ? function() {
                return tI.width = V.innerWidth,
                tI.height = V.innerHeight,
                tI
            }
            : function() {
                return e5(e)
            }
            )
        }, eR = function(e, t, n) {
            var r = n.d
              , i = n.d2
              , o = n.a;
            return (o = S(e, "getBoundingClientRect")) ? function() {
                return o()[r]
            }
            : function() {
                return (t ? V["inner" + i] : e["client" + i]) || 0
            }
        }, eY = function(e, t) {
            var n = t.s
              , r = t.d2
              , i = t.d
              , o = t.a;
            return (o = S(e, n = "scroll" + r)) ? o() - eD(e)()[i] : eA(e) ? (G[n] || U[n]) - (V["inner" + r] || G["client" + r] || U["client" + r]) : e[n] - e["offset" + r]
        }, eI = function(e, t) {
            for (var n = 0; n < ea.length; n += 3)
                (!t || ~t.indexOf(ea[n + 1])) && e(ea[n], ea[n + 1], ea[n + 2])
        }, eX = function(e) {
            return "string" == typeof e
        }, ez = function(e) {
            return "function" == typeof e
        }, eB = function(e) {
            return "number" == typeof e
        }, eL = function(e) {
            return "object" == typeof e
        }, eN = function(e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause()
        }, eF = function(e, t) {
            if (e.enabled) {
                var n = t(e);
                n && n.totalTime && (e.callbackAnimation = n)
            }
        }, eH = Math.abs, eW = "left", eV = "right", eq = "bottom", eG = "width", eU = "height", ej = "Right", eK = "Left", eZ = "Bottom", e$ = "padding", eJ = "margin", eQ = "Width", e0 = "Height", e1 = function(e) {
            return V.getComputedStyle(e)
        }, e2 = function(e) {
            var t = e1(e).position;
            e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
        }, e3 = function(e, t) {
            for (var n in t)
                n in e || (e[n] = t[n]);
            return e
        }, e5 = function(e, t) {
            var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== e1(e)[en] && H.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1)
              , r = e.getBoundingClientRect();
            return n && n.progress(0).kill(),
            r
        }, e4 = function(e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0
        }, e9 = function(e) {
            var t, n = [], r = e.labels, i = e.duration();
            for (t in r)
                n.push(r[t] / i);
            return n
        }, e8 = function(e) {
            var t = H.utils.snap(e)
              , n = Array.isArray(e) && e.slice(0).sort(function(e, t) {
                return e - t
            });
            return n ? function(e, r, i) {
                var o;
                if (void 0 === i && (i = .001),
                !r)
                    return t(e);
                if (r > 0) {
                    for (e -= i,
                    o = 0; o < n.length; o++)
                        if (n[o] >= e)
                            return n[o];
                    return n[o - 1]
                }
                for (o = n.length,
                e += i; o--; )
                    if (n[o] <= e)
                        return n[o];
                return n[0]
            }
            : function(n, r, i) {
                void 0 === i && (i = .001);
                var o = t(n);
                return !r || Math.abs(o - n) < i || o - n < 0 == r < 0 ? o : t(r < 0 ? n - e : n + e)
            }
        }, e6 = function(e, t, n, r) {
            return n.split(",").forEach(function(n) {
                return e(t, n, r)
            })
        }, e7 = function(e, t, n, r, i) {
            return e.addEventListener(t, n, {
                passive: !r,
                capture: !!i
            })
        }, te = function(e, t, n, r) {
            return e.removeEventListener(t, n, !!r)
        }, tt = function(e, t, n) {
            return n && n.wheelHandler && e(t, "wheel", n)
        }, tn = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        }, tr = {
            toggleActions: "play",
            anticipatePin: 0
        }, ti = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        }, to = function(e, t) {
            if (eX(e)) {
                var n = e.indexOf("=")
                  , r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
                ~n && (e.indexOf("%") > n && (r *= t / 100),
                e = e.substr(0, n - 1)),
                e = r + (e in ti ? ti[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
            }
            return e
        }, ta = function(e, t, n, r, i, o, a, s) {
            var l = i.startColor
              , c = i.endColor
              , u = i.fontSize
              , f = i.indent
              , p = i.fontWeight
              , d = q.createElement("div")
              , h = eA(n) || "fixed" === S(n, "pinType")
              , g = -1 !== e.indexOf("scroller")
              , v = h ? U : n
              , m = -1 !== e.indexOf("start")
              , y = m ? l : c
              , x = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return x += "position:" + ((g || s) && h ? "fixed;" : "absolute;"),
            (g || s || !h) && (x += (r === R ? eV : eq) + ":" + (o + parseFloat(f)) + "px;"),
            a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
            d._isStart = m,
            d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
            d.style.cssText = x,
            d.innerText = t || 0 === t ? e + "-" + t : e,
            v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
            d._offset = d["offset" + r.op.d2],
            ts(d, 0, r, m),
            d
        }, ts = function(e, t, n, r) {
            var i = {
                display: "block"
            }
              , o = n[r ? "os2" : "p2"]
              , a = n[r ? "p2" : "os2"];
            e._isFlipped = r,
            i[n.a + "Percent"] = r ? -100 : 0,
            i[n.a] = r ? "1px" : 0,
            i["border" + o + eQ] = 1,
            i["border" + a + eQ] = 0,
            i[n.p] = t + "px",
            H.set(e, i)
        }, tl = [], tc = {}, tu = function() {
            return ew() - ek > 34 && tM()
        }, tf = function() {
            eu && eu.isPressed && !(eu.startX > U.clientWidth) || (x.cache++,
            em || (em = requestAnimationFrame(tM)),
            ek || tm("scrollStart"),
            ek = ew())
        }, tp = function() {
            ed = V.innerWidth,
            ep = V.innerHeight
        }, td = function() {
            x.cache++,
            !(!ee && !ec && !q.fullscreenElement && !q.webkitFullscreenElement && (!ef || ed !== V.innerWidth || Math.abs(V.innerHeight - ep) > .25 * V.innerHeight)) || K.restart(!0)
        }, th = {}, tg = [], tv = function e() {
            return te(tN, "scrollEnd", e) || tk(!0)
        }, tm = function(e) {
            return th[e] && th[e].map(function(e) {
                return e()
            }) || tg
        }, ty = [], tx = function(e) {
            for (var t = 0; t < ty.length; t += 5)
                (!e || ty[t + 4] && ty[t + 4].query === e) && (ty[t].style.cssText = ty[t + 1],
                ty[t].getBBox && ty[t].setAttribute("transform", ty[t + 2] || ""),
                ty[t + 3].uncache = 1)
        }, tb = function(e, t) {
            var n;
            for (er = 0; er < tl.length; er++)
                (n = tl[er]) && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
            t && tx(t),
            t || tm("revert")
        }, tw = function() {
            return x.cache++ && x.forEach(function(e) {
                return "function" == typeof e && (e.rec = 0)
            })
        }, t_ = 0, tk = function(e, t) {
            if (ek && !e) {
                e7(tN, "scrollEnd", tv);
                return
            }
            ey = !0;
            var n = tm("refreshInit");
            es && tN.sort(),
            t || tb(),
            tl.slice(0).forEach(function(e) {
                return e.refresh()
            }),
            tl.forEach(function(e) {
                return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, eY(e.scroller, e._dir)))
            }),
            n.forEach(function(e) {
                return e && e.render && e.render(-1)
            }),
            tw(),
            K.pause(),
            t_++,
            ey = !1,
            tm("refresh")
        }, tS = 0, tT = 1, tM = function() {
            if (!ey) {
                tN.isUpdating = !0,
                ex && ex.update(0);
                var e = tl.length
                  , t = ew()
                  , n = t - e_ >= 50
                  , r = e && tl[0].scroll();
                if (tT = tS > r ? -1 : 1,
                tS = r,
                n && (ek && !et && t - ek > 200 && (ek = 0,
                tm("scrollEnd")),
                J = e_,
                e_ = t),
                tT < 0) {
                    for (er = e; er-- > 0; )
                        tl[er] && tl[er].update(0, n);
                    tT = 1
                } else
                    for (er = 0; er < e; er++)
                        tl[er] && tl[er].update(0, n);
                tN.isUpdating = !1
            }
            em = 0
        }, tE = [eW, "top", eq, eV, eJ + eZ, eJ + ej, eJ + "Top", eJ + eK, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], tP = tE.concat([eG, eU, "boxSizing", "max" + eQ, "max" + e0, "position", eJ, e$, e$ + "Top", e$ + ej, e$ + eZ, e$ + eK]), tC = function(e, t, n) {
            tD(n);
            var r = e._gsap;
            if (r.spacerIsNative)
                tD(r.spacerState);
            else if (e._gsap.swappedIn) {
                var i = t.parentNode;
                i && (i.insertBefore(e, t),
                i.removeChild(t))
            }
            e._gsap.swappedIn = !1
        }, tO = function(e, t, n, r) {
            if (!e._gsap.swappedIn) {
                for (var i, o = tE.length, a = t.style, s = e.style; o--; )
                    a[i = tE[o]] = n[i];
                a.position = "absolute" === n.position ? "absolute" : "relative",
                "inline" === n.display && (a.display = "inline-block"),
                s[eq] = s[eV] = a.flexBasis = "auto",
                a.overflow = "visible",
                a.boxSizing = "border-box",
                a[eG] = e4(e, D) + "px",
                a[eU] = e4(e, R) + "px",
                a[e$] = s[eJ] = s.top = s[eW] = "0",
                tD(r),
                s[eG] = s["max" + eQ] = n[eG],
                s[eU] = s["max" + e0] = n[eU],
                s[e$] = n[e$],
                e.parentNode !== t && (e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
                e._gsap.swappedIn = !0
            }
        }, tA = /([A-Z])/g, tD = function(e) {
            if (e) {
                var t, n, r = e.t.style, i = e.length, o = 0;
                for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; o < i; o += 2)
                    n = e[o + 1],
                    t = e[o],
                    n ? r[t] = n : r[t] && r.removeProperty(t.replace(tA, "-$1").toLowerCase())
            }
        }, tR = function(e) {
            for (var t = tP.length, n = e.style, r = [], i = 0; i < t; i++)
                r.push(tP[i], n[tP[i]]);
            return r.t = e,
            r
        }, tY = function(e, t, n) {
            for (var r, i = [], o = e.length, a = n ? 8 : 0; a < o; a += 2)
                r = e[a],
                i.push(r, r in t ? t[r] : e[a + 1]);
            return i.t = e.t,
            i
        }, tI = {
            left: 0,
            top: 0
        }, tX = function(e, t, n, r, i, o, a, s, l, c, u, f, p) {
            ez(e) && (e = e(s)),
            eX(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? to("0" + e.substr(3), n) : 0));
            var d, h, g, v = p ? p.time() : 0;
            if (p && p.seek(0),
            eB(e))
                a && ts(a, n, r, !0);
            else {
                ez(t) && (t = t(s));
                var m, y, x, b, w = (e || "0").split(" ");
                (m = e5(g = Y(t) || U) || {}).left || m.top || "none" !== e1(g).display || (b = g.style.display,
                g.style.display = "block",
                m = e5(g),
                b ? g.style.display = b : g.style.removeProperty("display")),
                y = to(w[0], m[r.d]),
                x = to(w[1] || "0", n),
                e = m[r.p] - l[r.p] - c + y + i - x,
                a && ts(a, x, r, n - x < 20 || a._isStart && x > 20),
                n -= n - x
            }
            if (o) {
                var _ = e + n
                  , k = o._isStart;
                d = "scroll" + r.d2,
                ts(o, _, r, k && _ > 20 || !k && (u ? Math.max(U[d], G[d]) : o.parentNode[d]) <= _ + 1),
                u && (l = e5(a),
                u && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + "px"))
            }
            return p && g && (d = e5(g),
            p.seek(f),
            h = e5(g),
            p._caScrollDist = d[r.p] - h[r.p],
            e = e / p._caScrollDist * f),
            p && p.seek(v),
            p ? e : Math.round(e)
        }, tz = /(webkit|moz|length|cssText|inset)/i, tB = function(e, t, n, r) {
            if (e.parentNode !== t) {
                var i, o, a = e.style;
                if (t === U) {
                    for (i in e._stOrig = a.cssText,
                    o = e1(e))
                        +i || tz.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                    a.top = n,
                    a.left = r
                } else
                    a.cssText = e._stOrig;
                H.core.getCache(e).uncache = 1,
                t.appendChild(e)
            }
        }, tL = function(e, t) {
            var n, r, i = I(e, t), o = "_scroll" + t.p2, a = function t(a, s, l, c, u) {
                var f = t.tween
                  , p = s.onComplete
                  , d = {};
                return l = l || i(),
                u = c && u || 0,
                c = c || a - l,
                f && f.kill(),
                n = Math.round(l),
                s[o] = a,
                s.modifiers = d,
                d[o] = function(e) {
                    return (e = Math.round(i())) !== n && e !== r && Math.abs(e - n) > 3 && Math.abs(e - r) > 3 ? (f.kill(),
                    t.tween = 0) : e = l + c * f.ratio + u * f.ratio * f.ratio,
                    r = n,
                    n = Math.round(e)
                }
                ,
                s.onComplete = function() {
                    t.tween = 0,
                    p && p.call(f)
                }
                ,
                f = t.tween = H.to(e, s)
            };
            return e[o] = i,
            i.wheelHandler = function() {
                return a.tween && a.tween.kill() && (a.tween = 0)
            }
            ,
            e7(e, "wheel", i.wheelHandler),
            a
        }, tN = function() {
            function e(t, n) {
                W || e.register(H) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(t, n)
            }
            return e.prototype.init = function(t, n) {
                if (this.progress = this.start = 0,
                this.vars && this.kill(!0, !0),
                !eS) {
                    this.update = this.refresh = this.kill = eE;
                    return
                }
                var r, i, o, a, s, l, c, u, f, p, d, h, g, v, m, y, x, w, _, k, T, M, E, P, C, O, A, X, z, B, L, N, F, W, j, K, Q, en, ei, eo, ea = t = e3(eX(t) || eB(t) || t.nodeType ? {
                    trigger: t
                } : t, tr), ec = ea.onUpdate, eu = ea.toggleClass, ef = ea.id, ep = ea.onToggle, ed = ea.onRefresh, eh = ea.scrub, em = ea.trigger, e_ = ea.pin, eT = ea.pinSpacing, eM = ea.invalidateOnRefresh, eC = ea.anticipatePin, eO = ea.onScrubComplete, eI = ea.onSnapComplete, eW = ea.once, eV = ea.snap, eq = ea.pinReparent, e6 = ea.pinSpacer, tt = ea.containerAnimation, ti = ea.fastScrollEnd, ts = ea.preventOverlaps, tu = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? D : R, tp = !eh && 0 !== eh, th = Y(t.scroller || V), tg = H.core.getCache(th), tm = eA(th), ty = ("pinType"in t ? t.pinType : S(th, "pinType") || tm && "fixed") === "fixed", tx = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], tb = tp && t.toggleActions.split(" "), tw = "markers"in t ? t.markers : tr.markers, t_ = tm ? 0 : parseFloat(e1(th)["border" + tu.p2 + eQ]) || 0, tk = this, tS = t.onRefreshInit && function() {
                    return t.onRefreshInit(tk)
                }
                , tM = eR(th, tm, tu), tE = !tm || ~b.indexOf(th) ? eD(th) : function() {
                    return tI
                }
                , tP = 0, tA = 0, tz = I(th, tu);
                if (eg(tk),
                tk._dir = tu,
                eC *= 45,
                tk.scroller = th,
                tk.scroll = tt ? tt.time.bind(tt) : tz,
                l = tz(),
                tk.vars = t,
                n = n || t.animation,
                "refreshPriority"in t && (es = 1,
                -9999 === t.refreshPriority && (ex = tk)),
                tg.tweenScroll = tg.tweenScroll || {
                    top: tL(th, R),
                    left: tL(th, D)
                },
                tk.tweenTo = o = tg.tweenScroll[tu.p],
                tk.scrubDuration = function(e) {
                    (F = eB(e) && e) ? N ? N.duration(e) : N = H.to(n, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: F,
                        paused: !0,
                        onComplete: function() {
                            return eO && eO(tk)
                        }
                    }) : (N && N.progress(1).kill(),
                    N = 0)
                }
                ,
                n && (n.vars.lazy = !1,
                n._initted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.render(0, !0, !0),
                tk.animation = n.pause(),
                n.scrollTrigger = tk,
                tk.scrubDuration(eh),
                B = 0,
                ef || (ef = n.vars.id)),
                tl.push(tk),
                eV && ((!eL(eV) || eV.push) && (eV = {
                    snapTo: eV
                }),
                "scrollBehavior"in U.style && H.set(tm ? [U, G] : th, {
                    scrollBehavior: "auto"
                }),
                s = ez(eV.snapTo) ? eV.snapTo : "labels" === eV.snapTo ? (r = n,
                function(e) {
                    return H.utils.snap(e9(r), e)
                }
                ) : "labelsDirectional" === eV.snapTo ? (i = n,
                function(e, t) {
                    return e8(e9(i))(e, t.direction)
                }
                ) : !1 !== eV.directional ? function(e, t) {
                    return e8(eV.snapTo)(e, ew() - tA < 500 ? 0 : t.direction)
                }
                : H.utils.snap(eV.snapTo),
                W = eL(W = eV.duration || {
                    min: .1,
                    max: 2
                }) ? $(W.min, W.max) : $(W, W),
                j = H.delayedCall(eV.delay || F / 2 || .1, function() {
                    var e = tz()
                      , t = ew() - tA < 500
                      , r = o.tween;
                    if ((t || 10 > Math.abs(tk.getVelocity())) && !r && !et && tP !== e) {
                        var i = (e - u) / m
                          , a = n && !tp ? n.totalProgress() : i
                          , l = t ? 0 : (a - L) / (ew() - J) * 1e3 || 0
                          , c = H.utils.clamp(-i, 1 - i, eH(l / 2) * l / .185)
                          , p = i + (!1 === eV.inertia ? 0 : c)
                          , d = $(0, 1, s(p, tk))
                          , h = Math.round(u + d * m)
                          , g = eV
                          , v = g.onStart
                          , y = g.onInterrupt
                          , x = g.onComplete;
                        if (e <= f && e >= u && h !== e) {
                            if (r && !r._initted && r.data <= eH(h - e))
                                return;
                            !1 === eV.inertia && (c = d - i),
                            o(h, {
                                duration: W(eH(.185 * Math.max(eH(p - a), eH(d - a)) / l / .05 || 0)),
                                ease: eV.ease || "power3",
                                data: eH(h - e),
                                onInterrupt: function() {
                                    return j.restart(!0) && y && y(tk)
                                },
                                onComplete: function() {
                                    tk.update(),
                                    tP = tz(),
                                    B = L = n && !tp ? n.totalProgress() : tk.progress,
                                    eI && eI(tk),
                                    x && x(tk)
                                }
                            }, e, c * m, h - e - c * m),
                            v && v(tk, o.tween)
                        }
                    } else
                        tk.isActive && tP !== e && j.restart(!0)
                }).pause()),
                ef && (tc[ef] = tk),
                (eo = (em = tk.trigger = Y(em || e_)) && em._gsap && em._gsap.stRevert) && (eo = eo(tk)),
                e_ = !0 === e_ ? em : Y(e_),
                eX(eu) && (eu = {
                    targets: em,
                    className: eu
                }),
                e_ && (!1 === eT || eT === eJ || (eT = (!!eT || "flex" !== e1(e_.parentNode).display) && e$),
                tk.pin = e_,
                !1 !== t.force3D && H.set(e_, {
                    force3D: !0
                }),
                (a = H.core.getCache(e_)).spacer ? y = a.pinState : (e6 && ((e6 = Y(e6)) && !e6.nodeType && (e6 = e6.current || e6.nativeElement),
                a.spacerIsNative = !!e6,
                e6 && (a.spacerState = tR(e6))),
                a.spacer = _ = e6 || q.createElement("div"),
                _.classList.add("pin-spacer"),
                ef && _.classList.add("pin-spacer-" + ef),
                a.pinState = y = tR(e_)),
                tk.spacer = _ = a.spacer,
                C = (z = e1(e_))[eT + tu.os2],
                T = H.getProperty(e_),
                M = H.quickSetter(e_, tu.a, "px"),
                tO(e_, _, z),
                w = tR(e_)),
                tw) {
                    h = ta("scroller-start", ef, th, tu, v = eL(tw) ? e3(tw, tn) : tn, 0),
                    g = ta("scroller-end", ef, th, tu, v, 0, h),
                    k = h["offset" + tu.op.d2];
                    var tN = Y(S(th, "content") || th);
                    p = this.markerStart = ta("start", ef, tN, tu, v, k, 0, tt),
                    d = this.markerEnd = ta("end", ef, tN, tu, v, k, 0, tt),
                    tt && (ei = H.quickSetter([p, d], tu.a, "px")),
                    ty || b.length && !0 === S(th, "fixedMarkers") || (e2(tm ? U : th),
                    H.set([h, g], {
                        force3D: !0
                    }),
                    A = H.quickSetter(h, tu.a, "px"),
                    X = H.quickSetter(g, tu.a, "px"))
                }
                if (tt) {
                    var tF = tt.vars.onUpdate
                      , tH = tt.vars.onUpdateParams;
                    tt.eventCallback("onUpdate", function() {
                        tk.update(0, 0, 1),
                        tF && tF.apply(tH || [])
                    })
                }
                tk.previous = function() {
                    return tl[tl.indexOf(tk) - 1]
                }
                ,
                tk.next = function() {
                    return tl[tl.indexOf(tk) + 1]
                }
                ,
                tk.revert = function(e, t) {
                    if (!t)
                        return tk.kill(!0);
                    var r = !1 !== e || !tk.enabled
                      , i = ee;
                    r !== tk.isReverted && (r && (!tk.scroll.rec && ee && ey && (tk.scroll.rec = tz()),
                    Q = Math.max(tz(), tk.scroll.rec || 0),
                    K = tk.progress,
                    en = n && n.progress()),
                    p && [p, d, h, g].forEach(function(e) {
                        return e.style.display = r ? "none" : "block"
                    }),
                    r && (ee = 1),
                    tk.update(r),
                    ee = i,
                    !e_ || (r ? tC(e_, _, y) : eq && tk.isActive || tO(e_, _, e1(e_), O)),
                    tk.isReverted = r)
                }
                ,
                tk.refresh = function(r, i) {
                    if (!ee && tk.enabled || i) {
                        if (e_ && r && ek) {
                            e7(e, "scrollEnd", tv);
                            return
                        }
                        !ey && tS && tS(tk),
                        ee = 1,
                        tA = ew(),
                        o.tween && (o.tween.kill(),
                        o.tween = 0),
                        N && N.pause(),
                        eM && n && n.revert().invalidate(),
                        tk.isReverted || tk.revert(!0, !0);
                        for (var a, s, v, b, k, S, M, C, A, X, z = tM(), B = tE(), L = tt ? tt.duration() : eY(th, tu), F = 0, W = 0, V = t.end, q = t.endTrigger || em, G = t.start || (0 !== t.start && em ? e_ ? "0 0" : "0 100%" : 0), Z = tk.pinnedContainer = t.pinnedContainer && Y(t.pinnedContainer), $ = em && Math.max(0, tl.indexOf(tk)) || 0, J = $; J--; )
                            (S = tl[J]).end || S.refresh(0, 1) || (ee = 1),
                            (M = S.pin) && (M === em || M === e_) && !S.isReverted && (X || (X = []),
                            X.unshift(S),
                            S.revert(!0, !0)),
                            S !== tl[J] && ($--,
                            J--);
                        for (ez(G) && (G = G(tk)),
                        u = tX(G, em, z, tu, tz(), p, h, tk, B, t_, ty, L, tt) || (e_ ? -.001 : 0),
                        ez(V) && (V = V(tk)),
                        eX(V) && !V.indexOf("+=") && (~V.indexOf(" ") ? V = (eX(G) ? G.split(" ")[0] : "") + V : (F = to(V.substr(2), z),
                        V = eX(G) ? G : u + F,
                        q = em)),
                        m = (f = Math.max(u, tX(V || (q ? "100% 0" : L), q, z, tu, tz() + F, d, g, tk, B, t_, ty, L, tt)) || -.001) - u || (u -= .01) && .001,
                        F = 0,
                        J = $; J--; )
                            (M = (S = tl[J]).pin) && S.start - S._pinPush < u && !tt && S.end > 0 && (a = S.end - S.start,
                            M !== em && M !== Z || eB(G) || (F += a * (1 - S.progress)),
                            M === e_ && (W += a));
                        if (u += F,
                        f += F,
                        tk._pinPush = W,
                        p && F && ((a = {})[tu.a] = "+=" + F,
                        Z && (a[tu.p] = "-=" + tz()),
                        H.set([p, d], a)),
                        e_)
                            a = e1(e_),
                            b = tu === R,
                            v = tz(),
                            E = parseFloat(T(tu.a)) + W,
                            !L && f > 1 && ((tm ? U : th).style["overflow-" + tu.a] = "scroll"),
                            tO(e_, _, a),
                            w = tR(e_),
                            s = e5(e_, !0),
                            C = ty && I(th, b ? D : R)(),
                            eT && ((O = [eT + tu.os2, m + W + "px"]).t = _,
                            (J = eT === e$ ? e4(e_, tu) + m + W : 0) && O.push(tu.d, J + "px"),
                            tD(O),
                            ty && tz(Q)),
                            ty && ((k = {
                                top: s.top + (b ? v - u : C) + "px",
                                left: s.left + (b ? C : v - u) + "px",
                                boxSizing: "border-box",
                                position: "fixed"
                            })[eG] = k["max" + eQ] = Math.ceil(s.width) + "px",
                            k[eU] = k["max" + e0] = Math.ceil(s.height) + "px",
                            k[eJ] = k[eJ + "Top"] = k[eJ + ej] = k[eJ + eZ] = k[eJ + eK] = "0",
                            k[e$] = a[e$],
                            k[e$ + "Top"] = a[e$ + "Top"],
                            k[e$ + ej] = a[e$ + ej],
                            k[e$ + eZ] = a[e$ + eZ],
                            k[e$ + eK] = a[e$ + eK],
                            x = tY(y, k, eq)),
                            n ? (A = n._initted,
                            el(1),
                            n.render(n.duration(), !0, !0),
                            P = T(tu.a) - E + m + W,
                            m !== P && ty && x.splice(x.length - 2, 2),
                            n.render(0, !0, !0),
                            A || n.invalidate(),
                            el(0)) : P = m;
                        else if (em && tz() && !tt)
                            for (s = em.parentNode; s && s !== U; )
                                s._pinOffset && (u -= s._pinOffset,
                                f -= s._pinOffset),
                                s = s.parentNode;
                        X && X.forEach(function(e) {
                            return e.revert(!1, !0)
                        }),
                        tk.start = u,
                        tk.end = f,
                        l = c = tz(),
                        tt || (l < Q && tz(Q),
                        tk.scroll.rec = 0),
                        tk.revert(!1, !0),
                        j && (tP = -1,
                        tk.isActive && tz(u + m * K),
                        j.restart(!0)),
                        ee = 0,
                        n && tp && (n._initted || en) && n.progress() !== en && n.progress(en, !0).render(n.time(), !0, !0),
                        (K !== tk.progress || tt) && (n && !tp && n.totalProgress(K, !0),
                        tk.progress = (l - u) / m === K ? 0 : K,
                        tk.update(0, 0, 1)),
                        e_ && eT && (_._pinOffset = Math.round(tk.progress * P)),
                        ed && ed(tk)
                    }
                }
                ,
                tk.getVelocity = function() {
                    return (tz() - c) / (ew() - J) * 1e3 || 0
                }
                ,
                tk.endAnimation = function() {
                    eN(tk.callbackAnimation),
                    n && (N ? N.progress(1) : n.paused() ? tp || eN(n, tk.direction < 0, 1) : eN(n, n.reversed()))
                }
                ,
                tk.labelToScroll = function(e) {
                    return n && n.labels && (u || tk.refresh() || u) + n.labels[e] / n.duration() * m || 0
                }
                ,
                tk.getTrailing = function(e) {
                    var t = tl.indexOf(tk)
                      , n = tk.direction > 0 ? tl.slice(0, t).reverse() : tl.slice(t + 1);
                    return (eX(e) ? n.filter(function(t) {
                        return t.vars.preventOverlaps === e
                    }) : n).filter(function(e) {
                        return tk.direction > 0 ? e.end <= u : e.start >= f
                    })
                }
                ,
                tk.update = function(e, t, r) {
                    if (!tt || r || e) {
                        var i, a, s, p, d, g, v, y = tk.scroll(), b = e ? 0 : (y - u) / m, k = b < 0 ? 0 : b > 1 ? 1 : b || 0, S = tk.progress;
                        if (t && (c = l,
                        l = tt ? tz() : y,
                        eV && (L = B,
                        B = n && !tp ? n.totalProgress() : k)),
                        eC && !k && e_ && !ee && !eb && ek && u < y + (y - c) / (ew() - J) * eC && (k = 1e-4),
                        k !== S && tk.enabled) {
                            if (p = (d = (i = tk.isActive = !!k && k < 1) != (!!S && S < 1)) || !!k != !!S,
                            tk.direction = k > S ? 1 : -1,
                            tk.progress = k,
                            p && !ee && (a = k && !S ? 0 : 1 === k ? 1 : 1 === S ? 2 : 3,
                            tp && (s = !d && "none" !== tb[a + 1] && tb[a + 1] || tb[a],
                            v = n && ("complete" === s || "reset" === s || s in n))),
                            ts && (d || v) && (v || eh || !n) && (ez(ts) ? ts(tk) : tk.getTrailing(ts).forEach(function(e) {
                                return e.endAnimation()
                            })),
                            !tp && (!N || ee || eb ? n && n.totalProgress(k, !!ee) : ((tt || ex && ex !== tk) && N.render(N._dp._time - N._start),
                            N.resetTo ? N.resetTo("totalProgress", k, n._tTime / n._tDur) : (N.vars.totalProgress = k,
                            N.invalidate().restart()))),
                            e_) {
                                if (e && eT && (_.style[eT + tu.os2] = C),
                                ty) {
                                    if (p) {
                                        if (g = !e && k > S && f + 1 > y && y + 1 >= eY(th, tu),
                                        eq) {
                                            if (!e && (i || g)) {
                                                var T = e5(e_, !0)
                                                  , O = y - u;
                                                tB(e_, U, T.top + (tu === R ? O : 0) + "px", T.left + (tu === R ? 0 : O) + "px")
                                            } else
                                                tB(e_, _)
                                        }
                                        tD(i || g ? x : w),
                                        P !== m && k < 1 && i || M(E + (1 !== k || g ? 0 : P))
                                    }
                                } else
                                    M(eP(E + P * k))
                            }
                            !eV || o.tween || ee || eb || j.restart(!0),
                            eu && (d || eW && k && (k < 1 || !ev)) && Z(eu.targets).forEach(function(e) {
                                return e.classList[i || eW ? "add" : "remove"](eu.className)
                            }),
                            !ec || tp || e || ec(tk),
                            p && !ee ? (tp && (v && ("complete" === s ? n.pause().totalProgress(1) : "reset" === s ? n.restart(!0).pause() : "restart" === s ? n.restart(!0) : n[s]()),
                            ec && ec(tk)),
                            (d || !ev) && (ep && d && eF(tk, ep),
                            tx[a] && eF(tk, tx[a]),
                            eW && (1 === k ? tk.kill(!1, 1) : tx[a] = 0),
                            !d && tx[a = 1 === k ? 1 : 3] && eF(tk, tx[a])),
                            ti && !i && Math.abs(tk.getVelocity()) > (eB(ti) ? ti : 2500) && (eN(tk.callbackAnimation),
                            N ? N.progress(1) : eN(n, !k, 1))) : tp && ec && !ee && ec(tk)
                        }
                        if (X) {
                            var D = tt ? y / tt.duration() * (tt._caScrollDist || 0) : y;
                            A(D + (h._isFlipped ? 1 : 0)),
                            X(D)
                        }
                        ei && ei(-y / tt.duration() * (tt._caScrollDist || 0))
                    }
                }
                ,
                tk.enable = function(t, n) {
                    tk.enabled || (tk.enabled = !0,
                    e7(th, "resize", td),
                    e7(tm ? q : th, "scroll", tf),
                    tS && e7(e, "refreshInit", tS),
                    !1 !== t && (tk.progress = K = 0,
                    l = c = tP = tz()),
                    !1 !== n && tk.refresh())
                }
                ,
                tk.getTween = function(e) {
                    return e && o ? o.tween : N
                }
                ,
                tk.setPositions = function(e, t) {
                    e_ && (E += e - u,
                    P += t - e - m),
                    tk.start = u = e,
                    tk.end = f = t,
                    m = t - e,
                    tk.update()
                }
                ,
                tk.disable = function(t, n) {
                    if (tk.enabled && (!1 !== t && tk.revert(!0, !0),
                    tk.enabled = tk.isActive = !1,
                    n || N && N.pause(),
                    Q = 0,
                    a && (a.uncache = 1),
                    tS && te(e, "refreshInit", tS),
                    j && (j.pause(),
                    o.tween && o.tween.kill() && (o.tween = 0)),
                    !tm)) {
                        for (var r = tl.length; r--; )
                            if (tl[r].scroller === th && tl[r] !== tk)
                                return;
                        te(th, "resize", td),
                        te(th, "scroll", tf)
                    }
                }
                ,
                tk.kill = function(e, r) {
                    tk.disable(e, r),
                    N && !r && N.kill(),
                    ef && delete tc[ef];
                    var i = tl.indexOf(tk);
                    i >= 0 && tl.splice(i, 1),
                    i === er && tT > 0 && er--,
                    i = 0,
                    tl.forEach(function(e) {
                        return e.scroller === tk.scroller && (i = 1)
                    }),
                    i || (tk.scroll.rec = 0),
                    n && (n.scrollTrigger = null,
                    e && n.render(-1),
                    r || n.kill()),
                    p && [p, d, h, g].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }),
                    ex === tk && (ex = 0),
                    e_ && (a && (a.uncache = 1),
                    i = 0,
                    tl.forEach(function(e) {
                        return e.pin === e_ && i++
                    }),
                    i || (a.spacer = 0)),
                    t.onKill && t.onKill(tk)
                }
                ,
                tk.enable(!1, !1),
                eo && eo(tk),
                n && n.add && !m ? H.delayedCall(.01, function() {
                    return u || f || tk.refresh()
                }) && (m = .01) && (u = f = 0) : tk.refresh()
            }
            ,
            e.register = function(t) {
                return W || (H = t || eO(),
                eC() && window.document && e.enable(),
                W = eS),
                W
            }
            ,
            e.defaults = function(e) {
                if (e)
                    for (var t in e)
                        tr[t] = e[t];
                return tr
            }
            ,
            e.disable = function(e, t) {
                eS = 0,
                tl.forEach(function(n) {
                    return n[t ? "kill" : "disable"](e)
                }),
                te(V, "wheel", tf),
                te(q, "scroll", tf),
                clearInterval(Q),
                te(q, "touchcancel", eE),
                te(U, "touchstart", eE),
                e6(te, q, "pointerdown,touchstart,mousedown", eT),
                e6(te, q, "pointerup,touchend,mouseup", eM),
                K.kill(),
                eI(te);
                for (var n = 0; n < x.length; n += 3)
                    tt(te, x[n], x[n + 1]),
                    tt(te, x[n], x[n + 2])
            }
            ,
            e.enable = function() {
                if (V = window,
                G = (q = document).documentElement,
                U = q.body,
                H && (Z = H.utils.toArray,
                $ = H.utils.clamp,
                eg = H.core.context || eE,
                el = H.core.suppressOverwrites || eE,
                H.core.globals("ScrollTrigger", e),
                U)) {
                    eS = 1,
                    F.register(H),
                    e.isTouch = F.isTouch,
                    eh = F.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    e7(V, "wheel", tf),
                    j = [V, q, G, U],
                    H.matchMedia ? (e.matchMedia = function(e) {
                        var t, n;
                        for (n in e)
                            t ? t.add(n, e[n]) : t = H.matchMedia(n, e[n]);
                        return t
                    }
                    ,
                    H.addEventListener("matchMediaInit", function() {
                        return tb()
                    }),
                    H.addEventListener("matchMediaRevert", function() {
                        return tx()
                    }),
                    H.addEventListener("matchMedia", function() {
                        tk(0, 1),
                        tm("matchMedia")
                    }),
                    H.matchMedia("(orientation: portrait)", function() {
                        return tp(),
                        tp
                    })) : console.warn("Requires GSAP 3.11.0 or later"),
                    e7(q, "scroll", tf);
                    var t, n, r = U.style, i = r.borderTopStyle, o = H.core.Animation.prototype;
                    for (o.revert || Object.defineProperty(o, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }),
                    r.borderTopStyle = "solid",
                    t = e5(U),
                    R.m = Math.round(t.top + R.sc()) || 0,
                    D.m = Math.round(t.left + D.sc()) || 0,
                    i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
                    Q = setInterval(tu, 250),
                    H.delayedCall(.5, function() {
                        return eb = 0
                    }),
                    e7(q, "touchcancel", eE),
                    e7(U, "touchstart", eE),
                    e6(e7, q, "pointerdown,touchstart,mousedown", eT),
                    e6(e7, q, "pointerup,touchend,mouseup", eM),
                    en = H.utils.checkPrefix("transform"),
                    tP.push(en),
                    W = ew(),
                    K = H.delayedCall(.2, tk).pause(),
                    ea = [q, "visibilitychange", function() {
                        var e = V.innerWidth
                          , t = V.innerHeight;
                        q.hidden ? (ei = e,
                        eo = t) : (ei !== e || eo !== t) && td()
                    }
                    , q, "DOMContentLoaded", tk, V, "load", tk, V, "resize", td],
                    eI(e7),
                    tl.forEach(function(e) {
                        return e.enable(0, 1)
                    }),
                    n = 0; n < x.length; n += 3)
                        tt(te, x[n], x[n + 1]),
                        tt(te, x[n], x[n + 2])
                }
            }
            ,
            e.config = function(t) {
                "limitCallbacks"in t && (ev = !!t.limitCallbacks);
                var n = t.syncInterval;
                n && clearInterval(Q) || (Q = n) && setInterval(tu, n),
                "ignoreMobileResize"in t && (ef = 1 === e.isTouch && t.ignoreMobileResize),
                "autoRefreshEvents"in t && (eI(te) || eI(e7, t.autoRefreshEvents || "none"),
                ec = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            }
            ,
            e.scrollerProxy = function(e, t) {
                var n = Y(e)
                  , r = x.indexOf(n)
                  , i = eA(n);
                ~r && x.splice(r, i ? 6 : 2),
                t && (i ? b.unshift(V, t, U, t, G, t) : b.unshift(n, t))
            }
            ,
            e.clearMatchMedia = function(e) {
                tl.forEach(function(t) {
                    return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
                })
            }
            ,
            e.isInViewport = function(e, t, n) {
                var r = (eX(e) ? Y(e) : e).getBoundingClientRect()
                  , i = r[n ? eG : eU] * t || 0;
                return n ? r.right - i > 0 && r.left + i < V.innerWidth : r.bottom - i > 0 && r.top + i < V.innerHeight
            }
            ,
            e.positionInViewport = function(e, t, n) {
                eX(e) && (e = Y(e));
                var r = e.getBoundingClientRect()
                  , i = r[n ? eG : eU]
                  , o = null == t ? i / 2 : t in ti ? ti[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
                return n ? (r.left + o) / V.innerWidth : (r.top + o) / V.innerHeight
            }
            ,
            e.killAll = function(e) {
                if (tl.forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }),
                !0 !== e) {
                    var t = th.killAll || [];
                    th = {},
                    t.forEach(function(e) {
                        return e()
                    })
                }
            }
            ,
            e
        }();
        tN.version = "3.11.0",
        tN.saveStyles = function(e) {
            return e ? Z(e).forEach(function(e) {
                if (e && e.style) {
                    var t = ty.indexOf(e);
                    t >= 0 && ty.splice(t, 5),
                    ty.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), H.core.getCache(e), eg())
                }
            }) : ty
        }
        ,
        tN.revert = function(e, t) {
            return tb(!e, t)
        }
        ,
        tN.create = function(e, t) {
            return new tN(e,t)
        }
        ,
        tN.refresh = function(e) {
            return e ? td() : (W || tN.register()) && tk(!0)
        }
        ,
        tN.update = tM,
        tN.clearScrollMemory = tw,
        tN.maxScroll = function(e, t) {
            return eY(e, t ? D : R)
        }
        ,
        tN.getScrollFunc = function(e, t) {
            return I(Y(e), t ? D : R)
        }
        ,
        tN.getById = function(e) {
            return tc[e]
        }
        ,
        tN.getAll = function() {
            return tl.filter(function(e) {
                return "ScrollSmoother" !== e.vars.id
            })
        }
        ,
        tN.isScrolling = function() {
            return !!ek
        }
        ,
        tN.snapDirectional = e8,
        tN.addEventListener = function(e, t) {
            var n = th[e] || (th[e] = []);
            ~n.indexOf(t) || n.push(t)
        }
        ,
        tN.removeEventListener = function(e, t) {
            var n = th[e]
              , r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1)
        }
        ,
        tN.batch = function(e, t) {
            var n, r = [], i = {}, o = t.interval || .016, a = t.batchMax || 1e9, s = function(e, t) {
                var n = []
                  , r = []
                  , i = H.delayedCall(o, function() {
                    t(n, r),
                    n = [],
                    r = []
                }).pause();
                return function(e) {
                    n.length || i.restart(!0),
                    n.push(e.trigger),
                    r.push(e),
                    a <= n.length && i.progress(1)
                }
            };
            for (n in t)
                i[n] = "on" === n.substr(0, 2) && ez(t[n]) && "onRefreshInit" !== n ? s(n, t[n]) : t[n];
            return ez(a) && (a = a(),
            e7(tN, "refresh", function() {
                return a = t.batchMax()
            })),
            Z(e).forEach(function(e) {
                var t = {};
                for (n in i)
                    t[n] = i[n];
                t.trigger = e,
                r.push(tN.create(t))
            }),
            r
        }
        ;
        var tF, tH = function(e, t, n, r) {
            return t > r ? e(r) : t < 0 && e(0),
            n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
        }, tW = function e(t, n) {
            !0 === n ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === n ? "auto" : n ? "pan-" + n + (F.isTouch ? " pinch-zoom" : "") : "none",
            t === G && e(U, n)
        }, tV = {
            auto: 1,
            scroll: 1
        }, tq = function(e) {
            var t, n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, a = o._gsap || H.core.getCache(o), s = ew();
            if (!a._isScrollT || s - a._isScrollT > 2e3) {
                for (; o && o.scrollHeight <= o.clientHeight; )
                    o = o.parentNode;
                a._isScroll = o && !eA(o) && o !== r && (tV[(t = e1(o)).overflowY] || tV[t.overflowX]),
                a._isScrollT = s
            }
            (a._isScroll || "x" === i) && (n.stopPropagation(),
            n._gsapAllow = !0)
        }, tG = function(e, t, n, r) {
            return F.create({
                target: e,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: t,
                onWheel: r = r && tq,
                onPress: r,
                onDrag: r,
                onScroll: r,
                onEnable: function() {
                    return n && e7(q, F.eventTypes[0], tj, !1, !0)
                },
                onDisable: function() {
                    return te(q, F.eventTypes[0], tj, !0)
                }
            })
        }, tU = /(input|label|select|textarea)/i, tj = function(e) {
            var t = tU.test(e.target.tagName);
            (t || tF) && (e._gsapAllow = !0,
            tF = t)
        }, tK = function(e) {
            eL(e) || (e = {}),
            e.preventDefault = e.isNormalizer = e.allowClicks = !0,
            e.type || (e.type = "wheel,touch"),
            e.debounce = !!e.debounce,
            e.id = e.id || "normalizer";
            var t, n, r, i, o, a, s, l, c = e, u = c.normalizeScrollX, f = c.momentum, p = c.allowNestedScroll, d = Y(e.target) || G, h = H.core.globals().ScrollSmoother, g = h && h.get(), v = eh && (e.content && Y(e.content) || g && !1 !== e.content && !g.smooth() && g.content()), m = I(d, R), y = I(d, D), b = 1, w = (F.isTouch && V.visualViewport ? V.visualViewport.scale * V.visualViewport.width : V.outerWidth) / V.innerWidth, _ = 0, k = ez(f) ? function() {
                return f(t)
            }
            : function() {
                return f || 2.8
            }
            , S = tG(d, e.type, !0, p), T = function() {
                return i = !1
            }, M = eE, E = eE, P = function() {
                E = $(eh ? 1 : 0, n = eY(d, R)),
                u && (M = $(0, eY(d, D))),
                r = t_
            }, C = function() {
                v._gsap.y = eP(parseFloat(v._gsap.y) + m.offset) + "px",
                v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)",
                m.offset = m.cacheID = 0
            }, O = function() {
                if (i) {
                    requestAnimationFrame(T);
                    var e = eP(t.deltaY / 2)
                      , n = E(m.v - e);
                    if (v && n !== m.v + m.offset) {
                        m.offset = n - m.v;
                        var r = eP((parseFloat(v && v._gsap.y) || 0) - m.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)",
                        v._gsap.y = r + "px",
                        m.cacheID = x.cache,
                        tM()
                    }
                    return !0
                }
                m.offset && C(),
                i = !0
            }, A = function() {
                P(),
                o.isActive() && o.vars.scrollY > n && (m() > n ? o.progress(1) && m(n) : o.resetTo("scrollY", n))
            };
            return v && H.set(v, {
                y: "+=0"
            }),
            e.ignoreCheck = function(e) {
                return eh && "touchmove" === e.type && O(e) || b > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1
            }
            ,
            e.onPress = function() {
                var e = b;
                b = eP((V.visualViewport && V.visualViewport.scale || 1) / w),
                o.pause(),
                e !== b && tW(d, b > 1.01 || !u && "x"),
                a = y(),
                s = m(),
                P(),
                r = t_
            }
            ,
            e.onRelease = e.onGestureStart = function(e, t) {
                if (m.offset && C(),
                t) {
                    x.cache++;
                    var r, i, a = k();
                    u && (i = (r = y()) + -(.05 * a * e.velocityX) / .227,
                    a *= tH(y, r, i, eY(d, D)),
                    o.vars.scrollX = M(i)),
                    i = (r = m()) + -(.05 * a * e.velocityY) / .227,
                    a *= tH(m, r, i, eY(d, R)),
                    o.vars.scrollY = E(i),
                    o.invalidate().duration(a).play(.01),
                    (eh && o.vars.scrollY >= n || r >= n - 1) && H.to({}, {
                        onUpdate: A,
                        duration: a
                    })
                } else
                    l.restart(!0)
            }
            ,
            e.onWheel = function() {
                o._ts && o.pause(),
                ew() - _ > 1e3 && (r = 0,
                _ = ew())
            }
            ,
            e.onChange = function(e, t, n, i, o) {
                if (t_ !== r && P(),
                t && u && y(M(i[2] === t ? a + (e.startX - e.x) : y() + t - i[1])),
                n) {
                    m.offset && C();
                    var l = o[2] === n
                      , c = l ? s + e.startY - e.y : m() + n - o[1]
                      , f = E(c);
                    l && c !== f && (s += f - c),
                    m(f)
                }
                (n || t) && tM()
            }
            ,
            e.onEnable = function() {
                tW(d, !u && "x"),
                e7(V, "resize", A),
                S.enable()
            }
            ,
            e.onDisable = function() {
                tW(d, !0),
                te(V, "resize", A),
                S.kill()
            }
            ,
            e.lockAxis = !1 !== e.lockAxis,
            (t = new F(e)).iOS = eh,
            eh && !m() && m(1),
            eh && H.ticker.add(eE),
            l = t._dc,
            o = H.to(t, {
                ease: "power4",
                paused: !0,
                scrollX: u ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                onComplete: l.vars.onComplete
            }),
            t
        };
        tN.sort = function(e) {
            return tl.sort(e || function(e, t) {
                return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
            }
            )
        }
        ,
        tN.observe = function(e) {
            return new F(e)
        }
        ,
        tN.normalizeScroll = function(e) {
            if (void 0 === e)
                return eu;
            if (!0 === e && eu)
                return eu.enable();
            if (!1 === e)
                return eu && eu.kill();
            var t = e instanceof F ? e : tK(e);
            return eu && eu.target === t.target && eu.kill(),
            eA(t.target) && (eu = t),
            t
        }
        ,
        tN.core = {
            _getVelocityProp: X,
            _inputObserver: tG,
            _scrollers: x,
            _proxies: b,
            bridge: {
                ss: function() {
                    ek || tm("scrollStart"),
                    ek = ew()
                },
                ref: function() {
                    return ee
                }
            }
        },
        eO() && H.registerPlugin(tN)
    }
}]);
