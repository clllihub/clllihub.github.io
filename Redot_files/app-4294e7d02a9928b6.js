(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
   8874: function(t, e) {
       var i, r, n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w;
       i = e,
       r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
       n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
       s = Math.PI / 180,
       a = Math.sin,
       o = Math.cos,
       u = Math.abs,
       l = Math.sqrt,
       h = function(t) {
           return Math.round(1e5 * t) / 1e5 || 0
       }
       ,
       f = function() {
           return c || "undefined" != typeof window && (c = window.gsap) && c.registerPlugin && c
       }
       ,
       p = function() {
           (c = f()) ? (c.registerEase("_CE", w.create),
           d = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
       }
       ,
       m = function(t) {
           return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
       }
       ,
       g = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
       v = /[cLlsSaAhHvVtTqQ]/g,
       x = function(t) {
           var e, i = t.length, r = 1e20;
           for (e = 1; e < i; e += 6)
               +t[e] < r && (r = +t[e]);
           return r
       }
       ,
       y = function(t, e, i) {
           i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
           var r, n = -1 * +t[0], s = -i, a = t.length, o = 1 / (+t[a - 2] + n), u = -e || (Math.abs(+t[a - 1] - +t[1]) < .01 * (+t[a - 2] - +t[0]) ? x(t) + s : +t[a - 1] + s);
           for (r = 0,
           u = u ? 1 / u : -o; r < a; r += 2)
               t[r] = (+t[r] + n) * o,
               t[r + 1] = (+t[r + 1] + s) * u
       }
       ,
       D = function t(e, i, r, n, s, a, o, u, l, h, c) {
           var d, f = (e + r) / 2, p = (i + n) / 2, m = (r + s) / 2, g = (n + a) / 2, v = (s + o) / 2, x = (a + u) / 2, y = (f + m) / 2, D = (p + g) / 2, w = (m + v) / 2, b = (g + x) / 2, _ = (y + w) / 2, k = (D + b) / 2, E = o - e, T = u - i, C = Math.abs((r - o) * T - (n - u) * E), A = Math.abs((s - o) * T - (a - u) * E);
           return h || (h = [{
               x: e,
               y: i
           }, {
               x: o,
               y: u
           }],
           c = 1),
           h.splice(c || h.length - 1, 0, {
               x: _,
               y: k
           }),
           (C + A) * (C + A) > l * (E * E + T * T) && (d = h.length,
           t(e, i, f, p, y, D, _, k, l, h, c),
           t(_, k, w, b, v, x, o, u, l, h, c + 1 + (h.length - d))),
           h
       }
       ,
       w = function() {
           function t(t, e, i) {
               d || p(),
               this.id = t,
               this.setData(e, i)
           }
           var e = t.prototype;
           return e.setData = function(t, e) {
               e = e || {};
               var i, h, d, f, p, m, x, w, b, _ = (t = t || "0,0,1,1").match(g), k = 1, E = [], T = [], C = e.precision || 1, A = C <= 1;
               if (this.data = t,
               (v.test(t) || ~t.indexOf("M") && 0 > t.indexOf("C")) && (_ = function(t) {
                   var e, i, h, c, d, f, p, m, g, v, x, y, D, w, b, _ = (t + "").replace(n, function(t) {
                       var e = +t;
                       return e < 1e-4 && e > -.0001 ? 0 : e
                   }).match(r) || [], k = [], E = 0, T = 0, C = 2 / 3, A = _.length, S = 0, M = "ERROR: malformed path: " + t, F = function(t, e, i, r) {
                       v = (i - t) / 3,
                       x = (r - e) / 3,
                       p.push(t + v, e + x, i - v, r - x, i, r)
                   };
                   if (!t || !isNaN(_[0]) || isNaN(_[1]))
                       return console.log(M),
                       k;
                   for (e = 0; e < A; e++)
                       if (D = d,
                       isNaN(_[e]) ? f = (d = _[e].toUpperCase()) !== _[e] : e--,
                       h = +_[e + 1],
                       c = +_[e + 2],
                       f && (h += E,
                       c += T),
                       e || (m = h,
                       g = c),
                       "M" === d)
                           p && (p.length < 8 ? k.length -= 1 : S += p.length),
                           E = m = h,
                           T = g = c,
                           p = [h, c],
                           k.push(p),
                           e += 2,
                           d = "L";
                       else if ("C" === d)
                           p || (p = [0, 0]),
                           f || (E = T = 0),
                           p.push(h, c, E + 1 * _[e + 3], T + 1 * _[e + 4], E += 1 * _[e + 5], T += 1 * _[e + 6]),
                           e += 6;
                       else if ("S" === d)
                           v = E,
                           x = T,
                           ("C" === D || "S" === D) && (v += E - p[p.length - 4],
                           x += T - p[p.length - 3]),
                           f || (E = T = 0),
                           p.push(v, x, h, c, E += 1 * _[e + 3], T += 1 * _[e + 4]),
                           e += 4;
                       else if ("Q" === d)
                           v = E + (h - E) * C,
                           x = T + (c - T) * C,
                           f || (E = T = 0),
                           E += 1 * _[e + 3],
                           T += 1 * _[e + 4],
                           p.push(v, x, E + (h - E) * C, T + (c - T) * C, E, T),
                           e += 4;
                       else if ("T" === d)
                           v = E - p[p.length - 4],
                           x = T - p[p.length - 3],
                           p.push(E + v, T + x, h + (E + 1.5 * v - h) * C, c + (T + 1.5 * x - c) * C, E = h, T = c),
                           e += 2;
                       else if ("H" === d)
                           F(E, T, E = h, T),
                           e += 1;
                       else if ("V" === d)
                           F(E, T, E, T = h + (f ? T - E : 0)),
                           e += 1;
                       else if ("L" === d || "Z" === d)
                           "Z" === d && (h = m,
                           c = g,
                           p.closed = !0),
                           ("L" === d || u(E - h) > .5 || u(T - c) > .5) && (F(E, T, h, c),
                           "L" === d && (e += 2)),
                           E = h,
                           T = c;
                       else if ("A" === d) {
                           if (w = _[e + 4],
                           b = _[e + 5],
                           v = _[e + 6],
                           x = _[e + 7],
                           i = 7,
                           w.length > 1 && (w.length < 3 ? (x = v,
                           v = b,
                           i--) : (x = b,
                           v = w.substr(2),
                           i -= 2),
                           b = w.charAt(1),
                           w = w.charAt(0)),
                           y = function(t, e, i, r, n, h, c, d, f) {
                               if (t !== d || e !== f) {
                                   i = u(i),
                                   r = u(r);
                                   var p = n % 360 * s
                                     , m = o(p)
                                     , g = a(p)
                                     , v = Math.PI
                                     , x = 2 * v
                                     , y = (t - d) / 2
                                     , D = (e - f) / 2
                                     , w = m * y + g * D
                                     , b = -g * y + m * D
                                     , _ = w * w
                                     , k = b * b
                                     , E = _ / (i * i) + k / (r * r);
                                   E > 1 && (i = l(E) * i,
                                   r = l(E) * r);
                                   var T = i * i
                                     , C = r * r
                                     , A = (T * C - T * k - C * _) / (T * k + C * _);
                                   A < 0 && (A = 0);
                                   var S = (h === c ? -1 : 1) * l(A)
                                     , M = S * (i * b / r)
                                     , F = -(S * (r * w / i))
                                     , O = (t + d) / 2 + (m * M - g * F)
                                     , P = (e + f) / 2 + (g * M + m * F)
                                     , R = (w - M) / i
                                     , B = (b - F) / r
                                     , L = (-w - M) / i
                                     , I = (-b - F) / r
                                     , j = R * R + B * B
                                     , z = (B < 0 ? -1 : 1) * Math.acos(R / l(j))
                                     , N = (R * I - B * L < 0 ? -1 : 1) * Math.acos((R * L + B * I) / l(j * (L * L + I * I)));
                                   isNaN(N) && (N = v),
                                   !c && N > 0 ? N -= x : c && N < 0 && (N += x),
                                   z %= x;
                                   var V, G = Math.ceil(u(N %= x) / (x / 4)), U = [], H = N / G, q = 4 / 3 * a(H / 2) / (1 + o(H / 2)), W = m * i, Y = g * i, X = -(g * r), Z = m * r;
                                   for (V = 0; V < G; V++)
                                       w = o(n = z + V * H),
                                       b = a(n),
                                       R = o(n += H),
                                       B = a(n),
                                       U.push(w - q * b, b + q * w, R + q * B, B - q * R, R, B);
                                   for (V = 0; V < U.length; V += 2)
                                       w = U[V],
                                       b = U[V + 1],
                                       U[V] = w * W + b * X + O,
                                       U[V + 1] = w * Y + b * Z + P;
                                   return U[V - 2] = d,
                                   U[V - 1] = f,
                                   U
                               }
                           }(E, T, +_[e + 1], +_[e + 2], +_[e + 3], +w, +b, (f ? E : 0) + 1 * v, (f ? T : 0) + 1 * x),
                           e += i,
                           y)
                               for (i = 0; i < y.length; i++)
                                   p.push(y[i]);
                           E = p[p.length - 2],
                           T = p[p.length - 1]
                       } else
                           console.log(M);
                   return (e = p.length) < 6 ? (k.pop(),
                   e = 0) : p[0] === p[e - 2] && p[1] === p[e - 1] && (p.closed = !0),
                   k.totalPoints = S + e,
                   k
               }(t)[0]),
               4 === (i = _.length))
                   _.unshift(0, 0),
                   _.push(1, 1),
                   i = 8;
               else if ((i - 2) % 6)
                   throw "Invalid CustomEase";
               for ((0 != +_[0] || 1 != +_[i - 2]) && y(_, e.height, e.originY),
               this.segment = _,
               f = 2; f < i; f += 6)
                   h = {
                       x: +_[f - 2],
                       y: +_[f - 1]
                   },
                   d = {
                       x: +_[f + 4],
                       y: +_[f + 5]
                   },
                   E.push(h, d),
                   D(h.x, h.y, +_[f], +_[f + 1], +_[f + 2], +_[f + 3], d.x, d.y, 1 / (2e5 * C), E, E.length - 1);
               for (f = 0,
               i = E.length; f < i; f++)
                   x = E[f],
                   w = E[f - 1] || x,
                   (x.x > w.x || w.y !== x.y && w.x === x.x || x === w) && x.x <= 1 ? (w.cx = x.x - w.x,
                   w.cy = x.y - w.y,
                   w.n = x,
                   w.nx = x.x,
                   A && f > 1 && Math.abs(w.cy / w.cx - E[f - 2].cy / E[f - 2].cx) > 2 && (A = 0),
                   w.cx < k && (w.cx ? k = w.cx : (w.cx = .001,
                   f === i - 1 && (w.x -= .001,
                   k = Math.min(k, .001),
                   A = 0)))) : (E.splice(f--, 1),
                   i--);
               if (p = 1 / (i = 1 / k + 1 | 0),
               m = 0,
               x = E[0],
               A) {
                   for (f = 0; f < i; f++)
                       b = f * p,
                       x.nx < b && (x = E[++m]),
                       h = x.y + (b - x.x) / x.cx * x.cy,
                       T[f] = {
                           x: b,
                           cx: p,
                           y: h,
                           cy: 0,
                           nx: 9
                       },
                       f && (T[f - 1].cy = h - T[f - 1].y);
                   T[i - 1].cy = E[E.length - 1].y - h
               } else {
                   for (f = 0; f < i; f++)
                       x.nx < f * p && (x = E[++m]),
                       T[f] = x;
                   m < E.length - 1 && (T[f - 1] = E[E.length - 2])
               }
               return this.ease = function(t) {
                   var e = T[t * i | 0] || T[i - 1];
                   return e.nx < t && (e = e.n),
                   e.y + (t - e.x) / e.cx * e.cy
               }
               ,
               this.ease.custom = this,
               this.id && c && c.registerEase(this.id, this.ease),
               this
           }
           ,
           e.getSVGData = function(e) {
               return t.getSVGData(this, e)
           }
           ,
           t.create = function(e, i, r) {
               return new t(e,i,r).ease
           }
           ,
           t.register = function(t) {
               c = t,
               p()
           }
           ,
           t.get = function(t) {
               return c.parseEase(t)
           }
           ,
           t.getSVGData = function(e, i) {
               var r, n, s, a, o, u, l, d, f, p, g = (i = i || {}).width || 100, v = i.height || 100, x = i.x || 0, y = (i.y || 0) + v, D = c.utils.toArray(i.path)[0];
               if (i.invert && (v = -v,
               y = 0),
               "string" == typeof e && (e = c.parseEase(e)),
               e.custom && (e = e.custom),
               e instanceof t)
                   r = function(t) {
                       "number" == typeof t[0] && (t = [t]);
                       var e, i, r, n, s = "", a = t.length;
                       for (i = 0; i < a; i++) {
                           for (s += "M" + h((n = t[i])[0]) + "," + h(n[1]) + " C",
                           e = n.length,
                           r = 2; r < e; r++)
                               s += h(n[r++]) + "," + h(n[r++]) + " " + h(n[r++]) + "," + h(n[r++]) + " " + h(n[r++]) + "," + h(n[r]) + " ";
                           n.closed && (s += "z")
                       }
                       return s
                   }(function(t, e, i, r, n, s, a) {
                       for (var o, u, l, h, c, d = t.length; --d > -1; )
                           for (l = 0,
                           u = (o = t[d]).length; l < u; l += 2)
                               h = o[l],
                               c = o[l + 1],
                               o[l] = h * e + 0 * c + s,
                               o[l + 1] = 0 * h + c * n + a;
                       return t._dirty = 1,
                       t
                   }([e.segment], g, 0, 0, -v, x, y));
               else {
                   for (r = [x, y],
                   a = 1 / (l = Math.max(5, 200 * (i.precision || 1))),
                   l += 2,
                   d = 5 / l,
                   f = m(x + a * g),
                   n = ((p = m(y + -(e(a) * v))) - y) / (f - x),
                   s = 2; s < l; s++)
                       o = m(x + s * a * g),
                       (Math.abs(((u = m(y + -(e(s * a) * v))) - p) / (o - f) - n) > d || s === l - 1) && (r.push(f, p),
                       n = (u - p) / (o - f)),
                       f = o,
                       p = u;
                   r = "M" + r.join(",")
               }
               return D && D.setAttribute("d", r),
               r
           }
           ,
           t
       }(),
       f() && c.registerPlugin(w),
       w.version = "3.11.0",
       i.CustomEase = w,
       i.default = w,
       Object.defineProperty(i, "__esModule", {
           value: !0
       })
   },
   8269: function(t, e) {
       !function(t) {
           "use strict";
           function e(t, e) {
               for (var i = 0; i < e.length; i++) {
                   var r = e[i];
                   r.enumerable = r.enumerable || !1,
                   r.configurable = !0,
                   "value"in r && (r.writable = !0),
                   Object.defineProperty(t, r.key, r)
               }
           }
           /*!
  * Observer 3.11.0
  * https://greensock.com
  *
  * @license Copyright 2008-2022, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
 */
           var i, r, n, s, a, o, u, l, h, c, d, f, p = function() {
               return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
           }, m = 1, g = [], v = [], x = [], y = Date.now, D = function(t, e) {
               return e
           }, w = function() {
               var t = h.core
                 , e = t.bridge || {}
                 , i = t._scrollers
                 , r = t._proxies;
               i.push.apply(i, v),
               r.push.apply(r, x),
               v = i,
               x = r,
               D = function(t, i) {
                   return e[t](i)
               }
           }, b = function(t, e) {
               return ~x.indexOf(t) && x[x.indexOf(t) + 1][e]
           }, _ = function(t) {
               return !!~c.indexOf(t)
           }, k = function(t, e, i, r, n) {
               return t.addEventListener(e, i, {
                   passive: !r,
                   capture: !!n
               })
           }, E = function(t, e, i, r) {
               return t.removeEventListener(e, i, !!r)
           }, T = "scrollLeft", C = "scrollTop", A = function() {
               return d && d.isPressed || v.cache++
           }, S = function(t, e) {
               var i = function i(r) {
                   if (r || 0 === r) {
                       m && (n.history.scrollRestoration = "manual");
                       var s = d && d.isPressed;
                       r = i.v = Math.round(r) || (d && d.iOS ? 1 : 0),
                       t(r),
                       i.cacheID = v.cache,
                       s && D("ss", r)
                   } else
                       (e || v.cache !== i.cacheID || D("ref")) && (i.cacheID = v.cache,
                       i.v = t());
                   return i.v + i.offset
               };
               return i.offset = 0,
               t && i
           }, M = {
               s: T,
               p: "left",
               p2: "Left",
               os: "right",
               os2: "Right",
               d: "width",
               d2: "Width",
               a: "x",
               sc: S(function(t) {
                   return arguments.length ? n.scrollTo(t, F.sc()) : n.pageXOffset || s[T] || a[T] || o[T] || 0
               })
           }, F = {
               s: C,
               p: "top",
               p2: "Top",
               os: "bottom",
               os2: "Bottom",
               d: "height",
               d2: "Height",
               a: "y",
               op: M,
               sc: S(function(t) {
                   return arguments.length ? n.scrollTo(M.sc(), t) : n.pageYOffset || s[C] || a[C] || o[C] || 0
               })
           }, O = function(t) {
               return i.utils.toArray(t)[0] || ("string" == typeof t && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
           }, P = function(t, e) {
               var i = e.s
                 , r = e.sc
                 , n = v.indexOf(t)
                 , s = r === F.sc ? 1 : 2;
               return ~n || (n = v.push(t) - 1),
               v[n + s] || (v[n + s] = S(b(t, i), !0) || (_(t) ? r : S(function(e) {
                   return arguments.length ? t[i] = e : t[i]
               })))
           }, R = function(t, e, i) {
               var r = t
                 , n = t
                 , s = y()
                 , a = s
                 , o = e || 50
                 , u = Math.max(500, 3 * o)
                 , l = function(t, e) {
                   var u = y();
                   e || u - s > o ? (n = r,
                   r = t,
                   a = s,
                   s = u) : i ? r += t : r = n + (t - n) / (u - a) * (s - a)
               };
               return {
                   update: l,
                   reset: function() {
                       n = r = i ? 0 : r,
                       a = s = 0
                   },
                   getVelocity: function(t) {
                       var e = a
                         , o = n
                         , h = y();
                       return (t || 0 === t) && t !== r && l(t),
                       s === a || h - a > u ? 0 : (r + (i ? o : -o)) / ((i ? h : s) - e) * 1e3
                   }
               }
           }, B = function(t, e) {
               return e && !t._gsapAllow && t.preventDefault(),
               t.changedTouches ? t.changedTouches[0] : t
           }, L = function(t) {
               var e = Math.max.apply(Math, t)
                 , i = Math.min.apply(Math, t);
               return Math.abs(e) >= Math.abs(i) ? e : i
           }, I = function() {
               (h = i.core.globals().ScrollTrigger) && h.core && w()
           }, j = function(t) {
               return (i = t || p()) && "undefined" != typeof document && document.body && (n = window,
               a = (s = document).documentElement,
               o = s.body,
               c = [n, s, a, o],
               i.utils.clamp,
               l = "onpointerenter"in o ? "pointer" : "mouse",
               u = z.isTouch = n.matchMedia && n.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in n || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
               f = z.eventTypes = ("ontouchstart"in a ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in a ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
               setTimeout(function() {
                   return m = 0
               }, 500),
               I(),
               r = 1),
               r
           };
           M.op = F,
           v.cache = 0;
           var z = function() {
               var t;
               function c(t) {
                   this.init(t)
               }
               return c.prototype.init = function(t) {
                   r || j(i) || console.warn("Please gsap.registerPlugin(Observer)"),
                   h || I();
                   var e = t.tolerance
                     , c = t.dragMinimum
                     , p = t.type
                     , m = t.target
                     , v = t.lineHeight
                     , x = t.debounce
                     , D = t.preventDefault
                     , w = t.onStop
                     , b = t.onStopDelay
                     , T = t.ignore
                     , C = t.wheelSpeed
                     , S = t.event
                     , z = t.onDragStart
                     , N = t.onDragEnd
                     , V = t.onDrag
                     , G = t.onPress
                     , U = t.onRelease
                     , H = t.onRight
                     , q = t.onLeft
                     , W = t.onUp
                     , Y = t.onDown
                     , X = t.onChangeX
                     , Z = t.onChangeY
                     , $ = t.onChange
                     , K = t.onToggleX
                     , Q = t.onToggleY
                     , J = t.onHover
                     , tt = t.onHoverEnd
                     , te = t.onMove
                     , ti = t.ignoreCheck
                     , tr = t.isNormalizer
                     , tn = t.onGestureStart
                     , ts = t.onGestureEnd
                     , ta = t.onWheel
                     , to = t.onEnable
                     , tu = t.onDisable
                     , tl = t.onClick
                     , th = t.scrollSpeed
                     , tc = t.capture
                     , td = t.allowClicks
                     , tf = t.lockAxis
                     , tp = t.onLockAxis;
                   this.target = m = O(m) || a,
                   this.vars = t,
                   T && (T = i.utils.toArray(T)),
                   e = e || 1e-9,
                   c = c || 0,
                   C = C || 1,
                   th = th || 1,
                   p = p || "wheel,touch,pointer",
                   x = !1 !== x,
                   v || (v = parseFloat(n.getComputedStyle(o).lineHeight) || 22);
                   var tm, tg, tv, tx, ty, tD, tw, tb = this, t_ = 0, tk = 0, tE = P(m, M), tT = P(m, F), tC = tE(), tA = tT(), tS = ~p.indexOf("touch") && !~p.indexOf("pointer") && "pointerdown" === f[0], tM = _(m), tF = m.ownerDocument || s, tO = [0, 0, 0], tP = [0, 0, 0], tR = 0, tB = function() {
                       return tR = y()
                   }, tL = function(t, e) {
                       return (tb.event = t) && T && ~T.indexOf(t.target) || e && tS && "touch" !== t.pointerType || ti && ti(t, e)
                   }, tI = function() {
                       var t = tb.deltaX = L(tO)
                         , i = tb.deltaY = L(tP)
                         , r = Math.abs(t) >= e
                         , n = Math.abs(i) >= e;
                       $ && (r || n) && $(tb, t, i, tO, tP),
                       r && (H && tb.deltaX > 0 && H(tb),
                       q && tb.deltaX < 0 && q(tb),
                       X && X(tb),
                       K && tb.deltaX < 0 != t_ < 0 && K(tb),
                       t_ = tb.deltaX,
                       tO[0] = tO[1] = tO[2] = 0),
                       n && (Y && tb.deltaY > 0 && Y(tb),
                       W && tb.deltaY < 0 && W(tb),
                       Z && Z(tb),
                       Q && tb.deltaY < 0 != tk < 0 && Q(tb),
                       tk = tb.deltaY,
                       tP[0] = tP[1] = tP[2] = 0),
                       (tx || tv) && (te && te(tb),
                       tv && (V(tb),
                       tv = !1),
                       tx = !1),
                       tD && (tD = !1,
                       1) && tp && tp(tb),
                       ty && (ta(tb),
                       ty = !1),
                       tm = 0
                   }, tj = function(t, e, i) {
                       tO[i] += t,
                       tP[i] += e,
                       tb._vx.update(t),
                       tb._vy.update(e),
                       x ? tm || (tm = requestAnimationFrame(tI)) : tI()
                   }, tz = function(t, e) {
                       "y" !== tw && (tO[2] += t,
                       tb._vx.update(t, !0)),
                       "x" !== tw && (tP[2] += e,
                       tb._vy.update(e, !0)),
                       tf && !tw && (tb.axis = tw = Math.abs(t) > Math.abs(e) ? "x" : "y",
                       tD = !0),
                       x ? tm || (tm = requestAnimationFrame(tI)) : tI()
                   }, tN = function(t) {
                       if (!tL(t, 1)) {
                           var e = (t = B(t, D)).clientX
                             , i = t.clientY
                             , r = e - tb.x
                             , n = i - tb.y
                             , s = tb.isDragging;
                           tb.x = e,
                           tb.y = i,
                           (s || Math.abs(tb.startX - e) >= c || Math.abs(tb.startY - i) >= c) && (V && (tv = !0),
                           s || (tb.isDragging = !0),
                           tz(r, n),
                           s || z && z(tb))
                       }
                   }, tV = tb.onPress = function(t) {
                       !tL(t, 1) && (tb.axis = tw = null,
                       tg.pause(),
                       tb.isPressed = !0,
                       t = B(t),
                       t_ = tk = 0,
                       tb.startX = tb.x = t.clientX,
                       tb.startY = tb.y = t.clientY,
                       tb._vx.reset(),
                       tb._vy.reset(),
                       k(tr ? m : tF, f[1], tN, D, !0),
                       tb.deltaX = tb.deltaY = 0,
                       G && G(tb))
                   }
                   , tG = function(t) {
                       if (!tL(t, 1)) {
                           E(tr ? m : tF, f[1], tN, !0);
                           var e = tb.isDragging && (Math.abs(tb.x - tb.startX) > 3 || Math.abs(tb.y - tb.startY) > 3)
                             , r = B(t);
                           !e && (tb._vx.reset(),
                           tb._vy.reset(),
                           D && td && i.delayedCall(.08, function() {
                               if (y() - tR > 300 && !t.defaultPrevented) {
                                   if (t.target.click)
                                       t.target.click();
                                   else if (tF.createEvent) {
                                       var e = tF.createEvent("MouseEvents");
                                       e.initMouseEvent("click", !0, !0, n, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
                                       t.target.dispatchEvent(e)
                                   }
                               }
                           })),
                           tb.isDragging = tb.isGesturing = tb.isPressed = !1,
                           w && !tr && tg.restart(!0),
                           N && e && N(tb),
                           U && U(tb, e)
                       }
                   }, tU = function(t) {
                       return t.touches && t.touches.length > 1 && (tb.isGesturing = !0) && tn(t, tb.isDragging)
                   }, tH = function() {
                       return tb.isGesturing = !1,
                       ts(tb)
                   }, tq = function(t) {
                       if (!tL(t)) {
                           var e = tE()
                             , i = tT();
                           tj((e - tC) * th, (i - tA) * th, 1),
                           tC = e,
                           tA = i,
                           w && tg.restart(!0)
                       }
                   }, tW = function(t) {
                       if (!tL(t)) {
                           t = B(t, D),
                           ta && (ty = !0);
                           var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? n.innerHeight : 1) * C;
                           tj(t.deltaX * e, t.deltaY * e, 0),
                           w && !tr && tg.restart(!0)
                       }
                   }, tY = function(t) {
                       if (!tL(t)) {
                           var e = t.clientX
                             , i = t.clientY
                             , r = e - tb.x
                             , n = i - tb.y;
                           tb.x = e,
                           tb.y = i,
                           tx = !0,
                           (r || n) && tz(r, n)
                       }
                   }, tX = function(t) {
                       tb.event = t,
                       J(tb)
                   }, tZ = function(t) {
                       tb.event = t,
                       tt(tb)
                   }, t$ = function(t) {
                       return tL(t) || B(t, D) && tl(tb)
                   };
                   tg = tb._dc = i.delayedCall(b || .25, function() {
                       tb._vx.reset(),
                       tb._vy.reset(),
                       tg.pause(),
                       w && w(tb)
                   }).pause(),
                   tb.deltaX = tb.deltaY = 0,
                   tb._vx = R(0, 50, !0),
                   tb._vy = R(0, 50, !0),
                   tb.scrollX = tE,
                   tb.scrollY = tT,
                   tb.isDragging = tb.isGesturing = tb.isPressed = !1,
                   tb.enable = function(t) {
                       return !tb.isEnabled && (k(tM ? tF : m, "scroll", A),
                       p.indexOf("scroll") >= 0 && k(tM ? tF : m, "scroll", tq, D, tc),
                       p.indexOf("wheel") >= 0 && k(m, "wheel", tW, D, tc),
                       (p.indexOf("touch") >= 0 && u || p.indexOf("pointer") >= 0) && (k(m, f[0], tV, D, tc),
                       k(tF, f[2], tG),
                       k(tF, f[3], tG),
                       td && k(m, "click", tB, !1, !0),
                       tl && k(m, "click", t$),
                       tn && k(tF, "gesturestart", tU),
                       ts && k(tF, "gestureend", tH),
                       J && k(m, l + "enter", tX),
                       tt && k(m, l + "leave", tZ),
                       te && k(m, l + "move", tY)),
                       tb.isEnabled = !0,
                       t && t.type && tV(t),
                       to && to(tb)),
                       tb
                   }
                   ,
                   tb.disable = function() {
                       tb.isEnabled && (g.filter(function(t) {
                           return t !== tb && _(t.target)
                       }).length || E(tM ? tF : m, "scroll", A),
                       tb.isPressed && (tb._vx.reset(),
                       tb._vy.reset(),
                       E(tr ? m : tF, f[1], tN, !0)),
                       E(tM ? tF : m, "scroll", tq, tc),
                       E(m, "wheel", tW, tc),
                       E(m, f[0], tV, tc),
                       E(tF, f[2], tG),
                       E(tF, f[3], tG),
                       E(m, "click", tB, !0),
                       E(m, "click", t$),
                       E(tF, "gesturestart", tU),
                       E(tF, "gestureend", tH),
                       E(m, l + "enter", tX),
                       E(m, l + "leave", tZ),
                       E(m, l + "move", tY),
                       tb.isEnabled = tb.isPressed = tb.isDragging = !1,
                       tu && tu(tb))
                   }
                   ,
                   tb.kill = function() {
                       tb.disable();
                       var t = g.indexOf(tb);
                       t >= 0 && g.splice(t, 1),
                       d === tb && (d = 0)
                   }
                   ,
                   g.push(tb),
                   tr && _(m) && (d = tb),
                   tb.enable(S)
               }
               ,
               e(c.prototype, [{
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
               t && e(c, t),
               c
           }();
           z.version = "3.11.0",
           z.create = function(t) {
               return new z(t)
           }
           ,
           z.register = j,
           z.getAll = function() {
               return g.slice()
           }
           ,
           z.getById = function(t) {
               return g.filter(function(e) {
                   return e.vars.id === t
               })[0]
           }
           ,
           p() && i.registerPlugin(z);
           /*!
  * ScrollTrigger 3.11.0
  * https://greensock.com
  *
  * @license Copyright 2008-2022, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
 */
           var N, V, G, U, H, q, W, Y, X, Z, $, K, Q, J, tt, te, ti, tr, tn, ts, ta, to, tu, tl, th, tc, td, tf, tp, tm, tg, tv, tx = 1, ty = Date.now, tD = ty(), tw = 0, tb = 0, t_ = function() {
               return J = 1
           }, tk = function() {
               return J = 0
           }, tE = function(t) {
               return t
           }, tT = function(t) {
               return Math.round(1e5 * t) / 1e5 || 0
           }, tC = function() {
               return "undefined" != typeof window
           }, tA = function() {
               return N || tC() && (N = window.gsap) && N.registerPlugin && N
           }, tS = function(t) {
               return !!~W.indexOf(t)
           }, tM = function(t) {
               return b(t, "getBoundingClientRect") || (tS(t) ? function() {
                   return eP.width = G.innerWidth,
                   eP.height = G.innerHeight,
                   eP
               }
               : function() {
                   return t2(t)
               }
               )
           }, tF = function(t, e, i) {
               var r = i.d
                 , n = i.d2
                 , s = i.a;
               return (s = b(t, "getBoundingClientRect")) ? function() {
                   return s()[r]
               }
               : function() {
                   return (e ? G["inner" + n] : t["client" + n]) || 0
               }
           }, tO = function(t, e) {
               var i = e.s
                 , r = e.d2
                 , n = e.d
                 , s = e.a;
               return (s = b(t, i = "scroll" + r)) ? s() - tM(t)()[n] : tS(t) ? (H[i] || q[i]) - (G["inner" + r] || H["client" + r] || q["client" + r]) : t[i] - t["offset" + r]
           }, tP = function(t, e) {
               for (var i = 0; i < tn.length; i += 3)
                   (!e || ~e.indexOf(tn[i + 1])) && t(tn[i], tn[i + 1], tn[i + 2])
           }, tR = function(t) {
               return "string" == typeof t
           }, tB = function(t) {
               return "function" == typeof t
           }, tL = function(t) {
               return "number" == typeof t
           }, tI = function(t) {
               return "object" == typeof t
           }, tj = function(t, e, i) {
               return t && t.progress(e ? 0 : 1) && i && t.pause()
           }, tz = function(t, e) {
               if (t.enabled) {
                   var i = e(t);
                   i && i.totalTime && (t.callbackAnimation = i)
               }
           }, tN = Math.abs, tV = "left", tG = "right", tU = "bottom", tH = "width", tq = "height", tW = "Right", tY = "Left", tX = "Bottom", tZ = "padding", t$ = "margin", tK = "Width", tQ = "Height", tJ = function(t) {
               return G.getComputedStyle(t)
           }, t0 = function(t) {
               var e = tJ(t).position;
               t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
           }, t1 = function(t, e) {
               for (var i in e)
                   i in t || (t[i] = e[i]);
               return t
           }, t2 = function(t, e) {
               var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== tJ(t)[tt] && N.to(t, {
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
                 , r = t.getBoundingClientRect();
               return i && i.progress(0).kill(),
               r
           }, t5 = function(t, e) {
               var i = e.d2;
               return t["offset" + i] || t["client" + i] || 0
           }, t6 = function(t) {
               var e, i = [], r = t.labels, n = t.duration();
               for (e in r)
                   i.push(r[e] / n);
               return i
           }, t3 = function(t) {
               var e = N.utils.snap(t)
                 , i = Array.isArray(t) && t.slice(0).sort(function(t, e) {
                   return t - e
               });
               return i ? function(t, r, n) {
                   var s;
                   if (void 0 === n && (n = .001),
                   !r)
                       return e(t);
                   if (r > 0) {
                       for (t -= n,
                       s = 0; s < i.length; s++)
                           if (i[s] >= t)
                               return i[s];
                       return i[s - 1]
                   }
                   for (s = i.length,
                   t += n; s--; )
                       if (i[s] <= t)
                           return i[s];
                   return i[0]
               }
               : function(i, r, n) {
                   void 0 === n && (n = .001);
                   var s = e(i);
                   return !r || Math.abs(s - i) < n || s - i < 0 == r < 0 ? s : e(r < 0 ? i - t : i + t)
               }
           }, t4 = function(t, e, i, r) {
               return i.split(",").forEach(function(i) {
                   return t(e, i, r)
               })
           }, t8 = function(t, e, i, r, n) {
               return t.addEventListener(e, i, {
                   passive: !r,
                   capture: !!n
               })
           }, t9 = function(t, e, i, r) {
               return t.removeEventListener(e, i, !!r)
           }, t7 = function(t, e, i) {
               return i && i.wheelHandler && t(e, "wheel", i)
           }, et = {
               startColor: "green",
               endColor: "red",
               indent: 0,
               fontSize: "16px",
               fontWeight: "normal"
           }, ee = {
               toggleActions: "play",
               anticipatePin: 0
           }, ei = {
               top: 0,
               left: 0,
               center: .5,
               bottom: 1,
               right: 1
           }, er = function(t, e) {
               if (tR(t)) {
                   var i = t.indexOf("=")
                     , r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                   ~i && (t.indexOf("%") > i && (r *= e / 100),
                   t = t.substr(0, i - 1)),
                   t = r + (t in ei ? ei[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
               }
               return t
           }, en = function(t, e, i, r, n, s, a, o) {
               var u = n.startColor
                 , l = n.endColor
                 , h = n.fontSize
                 , c = n.indent
                 , d = n.fontWeight
                 , f = U.createElement("div")
                 , p = tS(i) || "fixed" === b(i, "pinType")
                 , m = -1 !== t.indexOf("scroller")
                 , g = p ? q : i
                 , v = -1 !== t.indexOf("start")
                 , x = v ? u : l
                 , y = "border-color:" + x + ";font-size:" + h + ";color:" + x + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
               return y += "position:" + ((m || o) && p ? "fixed;" : "absolute;"),
               (m || o || !p) && (y += (r === F ? tG : tU) + ":" + (s + parseFloat(c)) + "px;"),
               a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
               f._isStart = v,
               f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
               f.style.cssText = y,
               f.innerText = e || 0 === e ? t + "-" + e : t,
               g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f),
               f._offset = f["offset" + r.op.d2],
               es(f, 0, r, v),
               f
           }, es = function(t, e, i, r) {
               var n = {
                   display: "block"
               }
                 , s = i[r ? "os2" : "p2"]
                 , a = i[r ? "p2" : "os2"];
               t._isFlipped = r,
               n[i.a + "Percent"] = r ? -100 : 0,
               n[i.a] = r ? "1px" : 0,
               n["border" + s + tK] = 1,
               n["border" + a + tK] = 0,
               n[i.p] = e + "px",
               N.set(t, n)
           }, ea = [], eo = {}, eu = function() {
               return ty() - tw > 34 && ek()
           }, el = function() {
               tu && tu.isPressed && !(tu.startX > q.clientWidth) || (v.cache++,
               tm || (tm = requestAnimationFrame(ek)),
               tw || em("scrollStart"),
               tw = ty())
           }, eh = function() {
               tc = G.innerWidth,
               th = G.innerHeight
           }, ec = function() {
               v.cache++,
               !(!Q && !to && !U.fullscreenElement && !U.webkitFullscreenElement && (!tl || tc !== G.innerWidth || Math.abs(G.innerHeight - th) > .25 * G.innerHeight)) || Y.restart(!0)
           }, ed = {}, ef = [], ep = function t() {
               return t9(ej, "scrollEnd", t) || ew(!0)
           }, em = function(t) {
               return ed[t] && ed[t].map(function(t) {
                   return t()
               }) || ef
           }, eg = [], ev = function(t) {
               for (var e = 0; e < eg.length; e += 5)
                   (!t || eg[e + 4] && eg[e + 4].query === t) && (eg[e].style.cssText = eg[e + 1],
                   eg[e].getBBox && eg[e].setAttribute("transform", eg[e + 2] || ""),
                   eg[e + 3].uncache = 1)
           }, ex = function(t, e) {
               var i;
               for (te = 0; te < ea.length; te++)
                   (i = ea[te]) && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
               e && ev(e),
               e || em("revert")
           }, ey = function() {
               return v.cache++ && v.forEach(function(t) {
                   return "function" == typeof t && (t.rec = 0)
               })
           }, eD = 0, ew = function(t, e) {
               if (tw && !t) {
                   t8(ej, "scrollEnd", ep);
                   return
               }
               tg = !0;
               var i = em("refreshInit");
               ts && ej.sort(),
               e || ex(),
               ea.slice(0).forEach(function(t) {
                   return t.refresh()
               }),
               ea.forEach(function(t) {
                   return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, tO(t.scroller, t._dir)))
               }),
               i.forEach(function(t) {
                   return t && t.render && t.render(-1)
               }),
               ey(),
               Y.pause(),
               eD++,
               tg = !1,
               em("refresh")
           }, eb = 0, e_ = 1, ek = function() {
               if (!tg) {
                   ej.isUpdating = !0,
                   tv && tv.update(0);
                   var t = ea.length
                     , e = ty()
                     , i = e - tD >= 50
                     , r = t && ea[0].scroll();
                   if (e_ = eb > r ? -1 : 1,
                   eb = r,
                   i && (tw && !J && e - tw > 200 && (tw = 0,
                   em("scrollEnd")),
                   $ = tD,
                   tD = e),
                   e_ < 0) {
                       for (te = t; te-- > 0; )
                           ea[te] && ea[te].update(0, i);
                       e_ = 1
                   } else
                       for (te = 0; te < t; te++)
                           ea[te] && ea[te].update(0, i);
                   ej.isUpdating = !1
               }
               tm = 0
           }, eE = [tV, "top", tU, tG, t$ + tX, t$ + tW, t$ + "Top", t$ + tY, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], eT = eE.concat([tH, tq, "boxSizing", "max" + tK, "max" + tQ, "position", t$, tZ, tZ + "Top", tZ + tW, tZ + tX, tZ + tY]), eC = function(t, e, i) {
               eM(i);
               var r = t._gsap;
               if (r.spacerIsNative)
                   eM(r.spacerState);
               else if (t._gsap.swappedIn) {
                   var n = e.parentNode;
                   n && (n.insertBefore(t, e),
                   n.removeChild(e))
               }
               t._gsap.swappedIn = !1
           }, eA = function(t, e, i, r) {
               if (!t._gsap.swappedIn) {
                   for (var n, s = eE.length, a = e.style, o = t.style; s--; )
                       a[n = eE[s]] = i[n];
                   a.position = "absolute" === i.position ? "absolute" : "relative",
                   "inline" === i.display && (a.display = "inline-block"),
                   o[tU] = o[tG] = a.flexBasis = "auto",
                   a.overflow = "visible",
                   a.boxSizing = "border-box",
                   a[tH] = t5(t, M) + "px",
                   a[tq] = t5(t, F) + "px",
                   a[tZ] = o[t$] = o.top = o[tV] = "0",
                   eM(r),
                   o[tH] = o["max" + tK] = i[tH],
                   o[tq] = o["max" + tQ] = i[tq],
                   o[tZ] = i[tZ],
                   t.parentNode !== e && (t.parentNode.insertBefore(e, t),
                   e.appendChild(t)),
                   t._gsap.swappedIn = !0
               }
           }, eS = /([A-Z])/g, eM = function(t) {
               if (t) {
                   var e, i, r = t.t.style, n = t.length, s = 0;
                   for ((t.t._gsap || N.core.getCache(t.t)).uncache = 1; s < n; s += 2)
                       i = t[s + 1],
                       e = t[s],
                       i ? r[e] = i : r[e] && r.removeProperty(e.replace(eS, "-$1").toLowerCase())
               }
           }, eF = function(t) {
               for (var e = eT.length, i = t.style, r = [], n = 0; n < e; n++)
                   r.push(eT[n], i[eT[n]]);
               return r.t = t,
               r
           }, eO = function(t, e, i) {
               for (var r, n = [], s = t.length, a = i ? 8 : 0; a < s; a += 2)
                   r = t[a],
                   n.push(r, r in e ? e[r] : t[a + 1]);
               return n.t = t.t,
               n
           }, eP = {
               left: 0,
               top: 0
           }, eR = function(t, e, i, r, n, s, a, o, u, l, h, c, d) {
               tB(t) && (t = t(o)),
               tR(t) && "max" === t.substr(0, 3) && (t = c + ("=" === t.charAt(4) ? er("0" + t.substr(3), i) : 0));
               var f, p, m, g = d ? d.time() : 0;
               if (d && d.seek(0),
               tL(t))
                   a && es(a, i, r, !0);
               else {
                   tB(e) && (e = e(o));
                   var v, x, y, D, w = (t || "0").split(" ");
                   (v = t2(m = O(e) || q) || {}).left || v.top || "none" !== tJ(m).display || (D = m.style.display,
                   m.style.display = "block",
                   v = t2(m),
                   D ? m.style.display = D : m.style.removeProperty("display")),
                   x = er(w[0], v[r.d]),
                   y = er(w[1] || "0", i),
                   t = v[r.p] - u[r.p] - l + x + n - y,
                   a && es(a, y, r, i - y < 20 || a._isStart && y > 20),
                   i -= i - y
               }
               if (s) {
                   var b = t + i
                     , _ = s._isStart;
                   f = "scroll" + r.d2,
                   es(s, b, r, _ && b > 20 || !_ && (h ? Math.max(q[f], H[f]) : s.parentNode[f]) <= b + 1),
                   h && (u = t2(a),
                   h && (s.style[r.op.p] = u[r.op.p] - r.op.m - s._offset + "px"))
               }
               return d && m && (f = t2(m),
               d.seek(c),
               p = t2(m),
               d._caScrollDist = f[r.p] - p[r.p],
               t = t / d._caScrollDist * c),
               d && d.seek(g),
               d ? t : Math.round(t)
           }, eB = /(webkit|moz|length|cssText|inset)/i, eL = function(t, e, i, r) {
               if (t.parentNode !== e) {
                   var n, s, a = t.style;
                   if (e === q) {
                       for (n in t._stOrig = a.cssText,
                       s = tJ(t))
                           +n || eB.test(n) || !s[n] || "string" != typeof a[n] || "0" === n || (a[n] = s[n]);
                       a.top = i,
                       a.left = r
                   } else
                       a.cssText = t._stOrig;
                   N.core.getCache(t).uncache = 1,
                   e.appendChild(t)
               }
           }, eI = function(t, e) {
               var i, r, n = P(t, e), s = "_scroll" + e.p2, a = function e(a, o, u, l, h) {
                   var c = e.tween
                     , d = o.onComplete
                     , f = {};
                   return u = u || n(),
                   h = l && h || 0,
                   l = l || a - u,
                   c && c.kill(),
                   i = Math.round(u),
                   o[s] = a,
                   o.modifiers = f,
                   f[s] = function(t) {
                       return (t = Math.round(n())) !== i && t !== r && Math.abs(t - i) > 3 && Math.abs(t - r) > 3 ? (c.kill(),
                       e.tween = 0) : t = u + l * c.ratio + h * c.ratio * c.ratio,
                       r = i,
                       i = Math.round(t)
                   }
                   ,
                   o.onComplete = function() {
                       e.tween = 0,
                       d && d.call(c)
                   }
                   ,
                   c = e.tween = N.to(t, o)
               };
               return t[s] = n,
               n.wheelHandler = function() {
                   return a.tween && a.tween.kill() && (a.tween = 0)
               }
               ,
               t8(t, "wheel", n.wheelHandler),
               a
           }, ej = function() {
               function t(e, i) {
                   V || t.register(N) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                   this.init(e, i)
               }
               return t.prototype.init = function(e, i) {
                   if (this.progress = this.start = 0,
                   this.vars && this.kill(!0, !0),
                   !tb) {
                       this.update = this.refresh = this.kill = tE;
                       return
                   }
                   var r, n, s, a, o, u, l, h, c, d, f, p, m, g, v, y, D, w, _, k, E, T, C, A, S, R, B, L, I, j, z, V, W, Y, K, tt, ti, tr, tn, to, tu = e = t1(tR(e) || tL(e) || e.nodeType ? {
                       trigger: e
                   } : e, ee), tl = tu.onUpdate, th = tu.toggleClass, tc = tu.id, td = tu.onToggle, tm = tu.onRefresh, tD = tu.scrub, t_ = tu.trigger, tk = tu.pin, tC = tu.pinSpacing, tA = tu.invalidateOnRefresh, tP = tu.anticipatePin, tV = tu.onScrubComplete, tG = tu.onSnapComplete, tU = tu.once, t4 = tu.snap, t7 = tu.pinReparent, ei = tu.pinSpacer, es = tu.containerAnimation, eu = tu.fastScrollEnd, eh = tu.preventOverlaps, ed = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? M : F, ef = !tD && 0 !== tD, em = O(e.scroller || G), eg = N.core.getCache(em), ev = tS(em), ex = ("pinType"in e ? e.pinType : b(em, "pinType") || ev && "fixed") === "fixed", ey = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], eD = ef && e.toggleActions.split(" "), ew = "markers"in e ? e.markers : ee.markers, eb = ev ? 0 : parseFloat(tJ(em)["border" + ed.p2 + tK]) || 0, ek = this, eE = e.onRefreshInit && function() {
                       return e.onRefreshInit(ek)
                   }
                   , eT = tF(em, ev, ed), eS = !ev || ~x.indexOf(em) ? tM(em) : function() {
                       return eP
                   }
                   , eB = 0, ej = 0, ez = P(em, ed);
                   if (tf(ek),
                   ek._dir = ed,
                   tP *= 45,
                   ek.scroller = em,
                   ek.scroll = es ? es.time.bind(es) : ez,
                   u = ez(),
                   ek.vars = e,
                   i = i || e.animation,
                   "refreshPriority"in e && (ts = 1,
                   -9999 === e.refreshPriority && (tv = ek)),
                   eg.tweenScroll = eg.tweenScroll || {
                       top: eI(em, F),
                       left: eI(em, M)
                   },
                   ek.tweenTo = s = eg.tweenScroll[ed.p],
                   ek.scrubDuration = function(t) {
                       (W = tL(t) && t) ? V ? V.duration(t) : V = N.to(i, {
                           ease: "expo",
                           totalProgress: "+=0.001",
                           duration: W,
                           paused: !0,
                           onComplete: function() {
                               return tV && tV(ek)
                           }
                       }) : (V && V.progress(1).kill(),
                       V = 0)
                   }
                   ,
                   i && (i.vars.lazy = !1,
                   i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0),
                   ek.animation = i.pause(),
                   i.scrollTrigger = ek,
                   ek.scrubDuration(tD),
                   j = 0,
                   tc || (tc = i.vars.id)),
                   ea.push(ek),
                   t4 && ((!tI(t4) || t4.push) && (t4 = {
                       snapTo: t4
                   }),
                   "scrollBehavior"in q.style && N.set(ev ? [q, H] : em, {
                       scrollBehavior: "auto"
                   }),
                   o = tB(t4.snapTo) ? t4.snapTo : "labels" === t4.snapTo ? (r = i,
                   function(t) {
                       return N.utils.snap(t6(r), t)
                   }
                   ) : "labelsDirectional" === t4.snapTo ? (n = i,
                   function(t, e) {
                       return t3(t6(n))(t, e.direction)
                   }
                   ) : !1 !== t4.directional ? function(t, e) {
                       return t3(t4.snapTo)(t, ty() - ej < 500 ? 0 : e.direction)
                   }
                   : N.utils.snap(t4.snapTo),
                   Y = tI(Y = t4.duration || {
                       min: .1,
                       max: 2
                   }) ? Z(Y.min, Y.max) : Z(Y, Y),
                   K = N.delayedCall(t4.delay || W / 2 || .1, function() {
                       var t = ez()
                         , e = ty() - ej < 500
                         , r = s.tween;
                       if ((e || 10 > Math.abs(ek.getVelocity())) && !r && !J && eB !== t) {
                           var n = (t - h) / v
                             , a = i && !ef ? i.totalProgress() : n
                             , u = e ? 0 : (a - z) / (ty() - $) * 1e3 || 0
                             , l = N.utils.clamp(-n, 1 - n, tN(u / 2) * u / .185)
                             , d = n + (!1 === t4.inertia ? 0 : l)
                             , f = Z(0, 1, o(d, ek))
                             , p = Math.round(h + f * v)
                             , m = t4
                             , g = m.onStart
                             , x = m.onInterrupt
                             , y = m.onComplete;
                           if (t <= c && t >= h && p !== t) {
                               if (r && !r._initted && r.data <= tN(p - t))
                                   return;
                               !1 === t4.inertia && (l = f - n),
                               s(p, {
                                   duration: Y(tN(.185 * Math.max(tN(d - a), tN(f - a)) / u / .05 || 0)),
                                   ease: t4.ease || "power3",
                                   data: tN(p - t),
                                   onInterrupt: function() {
                                       return K.restart(!0) && x && x(ek)
                                   },
                                   onComplete: function() {
                                       ek.update(),
                                       eB = ez(),
                                       j = z = i && !ef ? i.totalProgress() : ek.progress,
                                       tG && tG(ek),
                                       y && y(ek)
                                   }
                               }, t, l * v, p - t - l * v),
                               g && g(ek, s.tween)
                           }
                       } else
                           ek.isActive && eB !== t && K.restart(!0)
                   }).pause()),
                   tc && (eo[tc] = ek),
                   (to = (t_ = ek.trigger = O(t_ || tk)) && t_._gsap && t_._gsap.stRevert) && (to = to(ek)),
                   tk = !0 === tk ? t_ : O(tk),
                   tR(th) && (th = {
                       targets: t_,
                       className: th
                   }),
                   tk && (!1 === tC || tC === t$ || (tC = (!!tC || "flex" !== tJ(tk.parentNode).display) && tZ),
                   ek.pin = tk,
                   !1 !== e.force3D && N.set(tk, {
                       force3D: !0
                   }),
                   (a = N.core.getCache(tk)).spacer ? y = a.pinState : (ei && ((ei = O(ei)) && !ei.nodeType && (ei = ei.current || ei.nativeElement),
                   a.spacerIsNative = !!ei,
                   ei && (a.spacerState = eF(ei))),
                   a.spacer = _ = ei || U.createElement("div"),
                   _.classList.add("pin-spacer"),
                   tc && _.classList.add("pin-spacer-" + tc),
                   a.pinState = y = eF(tk)),
                   ek.spacer = _ = a.spacer,
                   S = (I = tJ(tk))[tC + ed.os2],
                   E = N.getProperty(tk),
                   T = N.quickSetter(tk, ed.a, "px"),
                   eA(tk, _, I),
                   w = eF(tk)),
                   ew) {
                       p = en("scroller-start", tc, em, ed, g = tI(ew) ? t1(ew, et) : et, 0),
                       m = en("scroller-end", tc, em, ed, g, 0, p),
                       k = p["offset" + ed.op.d2];
                       var eN = O(b(em, "content") || em);
                       d = this.markerStart = en("start", tc, eN, ed, g, k, 0, es),
                       f = this.markerEnd = en("end", tc, eN, ed, g, k, 0, es),
                       es && (tn = N.quickSetter([d, f], ed.a, "px")),
                       ex || x.length && !0 === b(em, "fixedMarkers") || (t0(ev ? q : em),
                       N.set([p, m], {
                           force3D: !0
                       }),
                       B = N.quickSetter(p, ed.a, "px"),
                       L = N.quickSetter(m, ed.a, "px"))
                   }
                   if (es) {
                       var eV = es.vars.onUpdate
                         , eG = es.vars.onUpdateParams;
                       es.eventCallback("onUpdate", function() {
                           ek.update(0, 0, 1),
                           eV && eV.apply(eG || [])
                       })
                   }
                   ek.previous = function() {
                       return ea[ea.indexOf(ek) - 1]
                   }
                   ,
                   ek.next = function() {
                       return ea[ea.indexOf(ek) + 1]
                   }
                   ,
                   ek.revert = function(t, e) {
                       if (!e)
                           return ek.kill(!0);
                       var r = !1 !== t || !ek.enabled
                         , n = Q;
                       r !== ek.isReverted && (r && (!ek.scroll.rec && Q && tg && (ek.scroll.rec = ez()),
                       ti = Math.max(ez(), ek.scroll.rec || 0),
                       tt = ek.progress,
                       tr = i && i.progress()),
                       d && [d, f, p, m].forEach(function(t) {
                           return t.style.display = r ? "none" : "block"
                       }),
                       r && (Q = 1),
                       ek.update(r),
                       Q = n,
                       !tk || (r ? eC(tk, _, y) : t7 && ek.isActive || eA(tk, _, tJ(tk), R)),
                       ek.isReverted = r)
                   }
                   ,
                   ek.refresh = function(r, n) {
                       if (!Q && ek.enabled || n) {
                           if (tk && r && tw) {
                               t8(t, "scrollEnd", ep);
                               return
                           }
                           !tg && eE && eE(ek),
                           Q = 1,
                           ej = ty(),
                           s.tween && (s.tween.kill(),
                           s.tween = 0),
                           V && V.pause(),
                           tA && i && i.revert().invalidate(),
                           ek.isReverted || ek.revert(!0, !0);
                           for (var a, o, g, x, b, k, T, S, B, L, I = eT(), j = eS(), z = es ? es.duration() : tO(em, ed), G = 0, U = 0, H = e.end, W = e.endTrigger || t_, Y = e.start || (0 !== e.start && t_ ? tk ? "0 0" : "0 100%" : 0), X = ek.pinnedContainer = e.pinnedContainer && O(e.pinnedContainer), Z = t_ && Math.max(0, ea.indexOf(ek)) || 0, $ = Z; $--; )
                               (k = ea[$]).end || k.refresh(0, 1) || (Q = 1),
                               (T = k.pin) && (T === t_ || T === tk) && !k.isReverted && (L || (L = []),
                               L.unshift(k),
                               k.revert(!0, !0)),
                               k !== ea[$] && (Z--,
                               $--);
                           for (tB(Y) && (Y = Y(ek)),
                           h = eR(Y, t_, I, ed, ez(), d, p, ek, j, eb, ex, z, es) || (tk ? -.001 : 0),
                           tB(H) && (H = H(ek)),
                           tR(H) && !H.indexOf("+=") && (~H.indexOf(" ") ? H = (tR(Y) ? Y.split(" ")[0] : "") + H : (G = er(H.substr(2), I),
                           H = tR(Y) ? Y : h + G,
                           W = t_)),
                           v = (c = Math.max(h, eR(H || (W ? "100% 0" : z), W, I, ed, ez() + G, f, m, ek, j, eb, ex, z, es)) || -.001) - h || (h -= .01) && .001,
                           G = 0,
                           $ = Z; $--; )
                               (T = (k = ea[$]).pin) && k.start - k._pinPush < h && !es && k.end > 0 && (a = k.end - k.start,
                               T !== t_ && T !== X || tL(Y) || (G += a * (1 - k.progress)),
                               T === tk && (U += a));
                           if (h += G,
                           c += G,
                           ek._pinPush = U,
                           d && G && ((a = {})[ed.a] = "+=" + G,
                           X && (a[ed.p] = "-=" + ez()),
                           N.set([d, f], a)),
                           tk)
                               a = tJ(tk),
                               x = ed === F,
                               g = ez(),
                               C = parseFloat(E(ed.a)) + U,
                               !z && c > 1 && ((ev ? q : em).style["overflow-" + ed.a] = "scroll"),
                               eA(tk, _, a),
                               w = eF(tk),
                               o = t2(tk, !0),
                               S = ex && P(em, x ? M : F)(),
                               tC && ((R = [tC + ed.os2, v + U + "px"]).t = _,
                               ($ = tC === tZ ? t5(tk, ed) + v + U : 0) && R.push(ed.d, $ + "px"),
                               eM(R),
                               ex && ez(ti)),
                               ex && ((b = {
                                   top: o.top + (x ? g - h : S) + "px",
                                   left: o.left + (x ? S : g - h) + "px",
                                   boxSizing: "border-box",
                                   position: "fixed"
                               })[tH] = b["max" + tK] = Math.ceil(o.width) + "px",
                               b[tq] = b["max" + tQ] = Math.ceil(o.height) + "px",
                               b[t$] = b[t$ + "Top"] = b[t$ + tW] = b[t$ + tX] = b[t$ + tY] = "0",
                               b[tZ] = a[tZ],
                               b[tZ + "Top"] = a[tZ + "Top"],
                               b[tZ + tW] = a[tZ + tW],
                               b[tZ + tX] = a[tZ + tX],
                               b[tZ + tY] = a[tZ + tY],
                               D = eO(y, b, t7)),
                               i ? (B = i._initted,
                               ta(1),
                               i.render(i.duration(), !0, !0),
                               A = E(ed.a) - C + v + U,
                               v !== A && ex && D.splice(D.length - 2, 2),
                               i.render(0, !0, !0),
                               B || i.invalidate(),
                               ta(0)) : A = v;
                           else if (t_ && ez() && !es)
                               for (o = t_.parentNode; o && o !== q; )
                                   o._pinOffset && (h -= o._pinOffset,
                                   c -= o._pinOffset),
                                   o = o.parentNode;
                           L && L.forEach(function(t) {
                               return t.revert(!1, !0)
                           }),
                           ek.start = h,
                           ek.end = c,
                           u = l = ez(),
                           es || (u < ti && ez(ti),
                           ek.scroll.rec = 0),
                           ek.revert(!1, !0),
                           K && (eB = -1,
                           ek.isActive && ez(h + v * tt),
                           K.restart(!0)),
                           Q = 0,
                           i && ef && (i._initted || tr) && i.progress() !== tr && i.progress(tr, !0).render(i.time(), !0, !0),
                           (tt !== ek.progress || es) && (i && !ef && i.totalProgress(tt, !0),
                           ek.progress = (u - h) / v === tt ? 0 : tt,
                           ek.update(0, 0, 1)),
                           tk && tC && (_._pinOffset = Math.round(ek.progress * A)),
                           tm && tm(ek)
                       }
                   }
                   ,
                   ek.getVelocity = function() {
                       return (ez() - l) / (ty() - $) * 1e3 || 0
                   }
                   ,
                   ek.endAnimation = function() {
                       tj(ek.callbackAnimation),
                       i && (V ? V.progress(1) : i.paused() ? ef || tj(i, ek.direction < 0, 1) : tj(i, i.reversed()))
                   }
                   ,
                   ek.labelToScroll = function(t) {
                       return i && i.labels && (h || ek.refresh() || h) + i.labels[t] / i.duration() * v || 0
                   }
                   ,
                   ek.getTrailing = function(t) {
                       var e = ea.indexOf(ek)
                         , i = ek.direction > 0 ? ea.slice(0, e).reverse() : ea.slice(e + 1);
                       return (tR(t) ? i.filter(function(e) {
                           return e.vars.preventOverlaps === t
                       }) : i).filter(function(t) {
                           return ek.direction > 0 ? t.end <= h : t.start >= c
                       })
                   }
                   ,
                   ek.update = function(t, e, r) {
                       if (!es || r || t) {
                           var n, a, o, d, f, m, g, x = ek.scroll(), y = t ? 0 : (x - h) / v, b = y < 0 ? 0 : y > 1 ? 1 : y || 0, k = ek.progress;
                           if (e && (l = u,
                           u = es ? ez() : x,
                           t4 && (z = j,
                           j = i && !ef ? i.totalProgress() : b)),
                           tP && !b && tk && !Q && !tx && tw && h < x + (x - l) / (ty() - $) * tP && (b = 1e-4),
                           b !== k && ek.enabled) {
                               if (d = (f = (n = ek.isActive = !!b && b < 1) != (!!k && k < 1)) || !!b != !!k,
                               ek.direction = b > k ? 1 : -1,
                               ek.progress = b,
                               d && !Q && (a = b && !k ? 0 : 1 === b ? 1 : 1 === k ? 2 : 3,
                               ef && (o = !f && "none" !== eD[a + 1] && eD[a + 1] || eD[a],
                               g = i && ("complete" === o || "reset" === o || o in i))),
                               eh && (f || g) && (g || tD || !i) && (tB(eh) ? eh(ek) : ek.getTrailing(eh).forEach(function(t) {
                                   return t.endAnimation()
                               })),
                               !ef && (!V || Q || tx ? i && i.totalProgress(b, !!Q) : ((es || tv && tv !== ek) && V.render(V._dp._time - V._start),
                               V.resetTo ? V.resetTo("totalProgress", b, i._tTime / i._tDur) : (V.vars.totalProgress = b,
                               V.invalidate().restart()))),
                               tk) {
                                   if (t && tC && (_.style[tC + ed.os2] = S),
                                   ex) {
                                       if (d) {
                                           if (m = !t && b > k && c + 1 > x && x + 1 >= tO(em, ed),
                                           t7) {
                                               if (!t && (n || m)) {
                                                   var E = t2(tk, !0)
                                                     , M = x - h;
                                                   eL(tk, q, E.top + (ed === F ? M : 0) + "px", E.left + (ed === F ? 0 : M) + "px")
                                               } else
                                                   eL(tk, _)
                                           }
                                           eM(n || m ? D : w),
                                           A !== v && b < 1 && n || T(C + (1 !== b || m ? 0 : A))
                                       }
                                   } else
                                       T(tT(C + A * b))
                               }
                               !t4 || s.tween || Q || tx || K.restart(!0),
                               th && (f || tU && b && (b < 1 || !tp)) && X(th.targets).forEach(function(t) {
                                   return t.classList[n || tU ? "add" : "remove"](th.className)
                               }),
                               !tl || ef || t || tl(ek),
                               d && !Q ? (ef && (g && ("complete" === o ? i.pause().totalProgress(1) : "reset" === o ? i.restart(!0).pause() : "restart" === o ? i.restart(!0) : i[o]()),
                               tl && tl(ek)),
                               (f || !tp) && (td && f && tz(ek, td),
                               ey[a] && tz(ek, ey[a]),
                               tU && (1 === b ? ek.kill(!1, 1) : ey[a] = 0),
                               !f && ey[a = 1 === b ? 1 : 3] && tz(ek, ey[a])),
                               eu && !n && Math.abs(ek.getVelocity()) > (tL(eu) ? eu : 2500) && (tj(ek.callbackAnimation),
                               V ? V.progress(1) : tj(i, !b, 1))) : ef && tl && !Q && tl(ek)
                           }
                           if (L) {
                               var O = es ? x / es.duration() * (es._caScrollDist || 0) : x;
                               B(O + (p._isFlipped ? 1 : 0)),
                               L(O)
                           }
                           tn && tn(-x / es.duration() * (es._caScrollDist || 0))
                       }
                   }
                   ,
                   ek.enable = function(e, i) {
                       ek.enabled || (ek.enabled = !0,
                       t8(em, "resize", ec),
                       t8(ev ? U : em, "scroll", el),
                       eE && t8(t, "refreshInit", eE),
                       !1 !== e && (ek.progress = tt = 0,
                       u = l = eB = ez()),
                       !1 !== i && ek.refresh())
                   }
                   ,
                   ek.getTween = function(t) {
                       return t && s ? s.tween : V
                   }
                   ,
                   ek.setPositions = function(t, e) {
                       tk && (C += t - h,
                       A += e - t - v),
                       ek.start = h = t,
                       ek.end = c = e,
                       v = e - t,
                       ek.update()
                   }
                   ,
                   ek.disable = function(e, i) {
                       if (ek.enabled && (!1 !== e && ek.revert(!0, !0),
                       ek.enabled = ek.isActive = !1,
                       i || V && V.pause(),
                       ti = 0,
                       a && (a.uncache = 1),
                       eE && t9(t, "refreshInit", eE),
                       K && (K.pause(),
                       s.tween && s.tween.kill() && (s.tween = 0)),
                       !ev)) {
                           for (var r = ea.length; r--; )
                               if (ea[r].scroller === em && ea[r] !== ek)
                                   return;
                           t9(em, "resize", ec),
                           t9(em, "scroll", el)
                       }
                   }
                   ,
                   ek.kill = function(t, r) {
                       ek.disable(t, r),
                       V && !r && V.kill(),
                       tc && delete eo[tc];
                       var n = ea.indexOf(ek);
                       n >= 0 && ea.splice(n, 1),
                       n === te && e_ > 0 && te--,
                       n = 0,
                       ea.forEach(function(t) {
                           return t.scroller === ek.scroller && (n = 1)
                       }),
                       n || (ek.scroll.rec = 0),
                       i && (i.scrollTrigger = null,
                       t && i.render(-1),
                       r || i.kill()),
                       d && [d, f, p, m].forEach(function(t) {
                           return t.parentNode && t.parentNode.removeChild(t)
                       }),
                       tv === ek && (tv = 0),
                       tk && (a && (a.uncache = 1),
                       n = 0,
                       ea.forEach(function(t) {
                           return t.pin === tk && n++
                       }),
                       n || (a.spacer = 0)),
                       e.onKill && e.onKill(ek)
                   }
                   ,
                   ek.enable(!1, !1),
                   to && to(ek),
                   i && i.add && !v ? N.delayedCall(.01, function() {
                       return h || c || ek.refresh()
                   }) && (v = .01) && (h = c = 0) : ek.refresh()
               }
               ,
               t.register = function(e) {
                   return V || (N = e || tA(),
                   tC() && window.document && t.enable(),
                   V = tb),
                   V
               }
               ,
               t.defaults = function(t) {
                   if (t)
                       for (var e in t)
                           ee[e] = t[e];
                   return ee
               }
               ,
               t.disable = function(t, e) {
                   tb = 0,
                   ea.forEach(function(i) {
                       return i[e ? "kill" : "disable"](t)
                   }),
                   t9(G, "wheel", el),
                   t9(U, "scroll", el),
                   clearInterval(K),
                   t9(U, "touchcancel", tE),
                   t9(q, "touchstart", tE),
                   t4(t9, U, "pointerdown,touchstart,mousedown", t_),
                   t4(t9, U, "pointerup,touchend,mouseup", tk),
                   Y.kill(),
                   tP(t9);
                   for (var i = 0; i < v.length; i += 3)
                       t7(t9, v[i], v[i + 1]),
                       t7(t9, v[i], v[i + 2])
               }
               ,
               t.enable = function() {
                   if (G = window,
                   H = (U = document).documentElement,
                   q = U.body,
                   N && (X = N.utils.toArray,
                   Z = N.utils.clamp,
                   tf = N.core.context || tE,
                   ta = N.core.suppressOverwrites || tE,
                   N.core.globals("ScrollTrigger", t),
                   q)) {
                       tb = 1,
                       z.register(N),
                       t.isTouch = z.isTouch,
                       td = z.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                       t8(G, "wheel", el),
                       W = [G, U, H, q],
                       N.matchMedia ? (t.matchMedia = function(t) {
                           var e, i;
                           for (i in t)
                               e ? e.add(i, t[i]) : e = N.matchMedia(i, t[i]);
                           return e
                       }
                       ,
                       N.addEventListener("matchMediaInit", function() {
                           return ex()
                       }),
                       N.addEventListener("matchMediaRevert", function() {
                           return ev()
                       }),
                       N.addEventListener("matchMedia", function() {
                           ew(0, 1),
                           em("matchMedia")
                       }),
                       N.matchMedia("(orientation: portrait)", function() {
                           return eh(),
                           eh
                       })) : console.warn("Requires GSAP 3.11.0 or later"),
                       t8(U, "scroll", el);
                       var e, i, r = q.style, n = r.borderTopStyle, s = N.core.Animation.prototype;
                       for (s.revert || Object.defineProperty(s, "revert", {
                           value: function() {
                               return this.time(-.01, !0)
                           }
                       }),
                       r.borderTopStyle = "solid",
                       e = t2(q),
                       F.m = Math.round(e.top + F.sc()) || 0,
                       M.m = Math.round(e.left + M.sc()) || 0,
                       n ? r.borderTopStyle = n : r.removeProperty("border-top-style"),
                       K = setInterval(eu, 250),
                       N.delayedCall(.5, function() {
                           return tx = 0
                       }),
                       t8(U, "touchcancel", tE),
                       t8(q, "touchstart", tE),
                       t4(t8, U, "pointerdown,touchstart,mousedown", t_),
                       t4(t8, U, "pointerup,touchend,mouseup", tk),
                       tt = N.utils.checkPrefix("transform"),
                       eT.push(tt),
                       V = ty(),
                       Y = N.delayedCall(.2, ew).pause(),
                       tn = [U, "visibilitychange", function() {
                           var t = G.innerWidth
                             , e = G.innerHeight;
                           U.hidden ? (ti = t,
                           tr = e) : (ti !== t || tr !== e) && ec()
                       }
                       , U, "DOMContentLoaded", ew, G, "load", ew, G, "resize", ec],
                       tP(t8),
                       ea.forEach(function(t) {
                           return t.enable(0, 1)
                       }),
                       i = 0; i < v.length; i += 3)
                           t7(t9, v[i], v[i + 1]),
                           t7(t9, v[i], v[i + 2])
                   }
               }
               ,
               t.config = function(e) {
                   "limitCallbacks"in e && (tp = !!e.limitCallbacks);
                   var i = e.syncInterval;
                   i && clearInterval(K) || (K = i) && setInterval(eu, i),
                   "ignoreMobileResize"in e && (tl = 1 === t.isTouch && e.ignoreMobileResize),
                   "autoRefreshEvents"in e && (tP(t9) || tP(t8, e.autoRefreshEvents || "none"),
                   to = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
               }
               ,
               t.scrollerProxy = function(t, e) {
                   var i = O(t)
                     , r = v.indexOf(i)
                     , n = tS(i);
                   ~r && v.splice(r, n ? 6 : 2),
                   e && (n ? x.unshift(G, e, q, e, H, e) : x.unshift(i, e))
               }
               ,
               t.clearMatchMedia = function(t) {
                   ea.forEach(function(e) {
                       return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                   })
               }
               ,
               t.isInViewport = function(t, e, i) {
                   var r = (tR(t) ? O(t) : t).getBoundingClientRect()
                     , n = r[i ? tH : tq] * e || 0;
                   return i ? r.right - n > 0 && r.left + n < G.innerWidth : r.bottom - n > 0 && r.top + n < G.innerHeight
               }
               ,
               t.positionInViewport = function(t, e, i) {
                   tR(t) && (t = O(t));
                   var r = t.getBoundingClientRect()
                     , n = r[i ? tH : tq]
                     , s = null == e ? n / 2 : e in ei ? ei[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0;
                   return i ? (r.left + s) / G.innerWidth : (r.top + s) / G.innerHeight
               }
               ,
               t.killAll = function(t) {
                   if (ea.forEach(function(t) {
                       return "ScrollSmoother" !== t.vars.id && t.kill()
                   }),
                   !0 !== t) {
                       var e = ed.killAll || [];
                       ed = {},
                       e.forEach(function(t) {
                           return t()
                       })
                   }
               }
               ,
               t
           }();
           ej.version = "3.11.0",
           ej.saveStyles = function(t) {
               return t ? X(t).forEach(function(t) {
                   if (t && t.style) {
                       var e = eg.indexOf(t);
                       e >= 0 && eg.splice(e, 5),
                       eg.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), N.core.getCache(t), tf())
                   }
               }) : eg
           }
           ,
           ej.revert = function(t, e) {
               return ex(!t, e)
           }
           ,
           ej.create = function(t, e) {
               return new ej(t,e)
           }
           ,
           ej.refresh = function(t) {
               return t ? ec() : (V || ej.register()) && ew(!0)
           }
           ,
           ej.update = ek,
           ej.clearScrollMemory = ey,
           ej.maxScroll = function(t, e) {
               return tO(t, e ? M : F)
           }
           ,
           ej.getScrollFunc = function(t, e) {
               return P(O(t), e ? M : F)
           }
           ,
           ej.getById = function(t) {
               return eo[t]
           }
           ,
           ej.getAll = function() {
               return ea.filter(function(t) {
                   return "ScrollSmoother" !== t.vars.id
               })
           }
           ,
           ej.isScrolling = function() {
               return !!tw
           }
           ,
           ej.snapDirectional = t3,
           ej.addEventListener = function(t, e) {
               var i = ed[t] || (ed[t] = []);
               ~i.indexOf(e) || i.push(e)
           }
           ,
           ej.removeEventListener = function(t, e) {
               var i = ed[t]
                 , r = i && i.indexOf(e);
               r >= 0 && i.splice(r, 1)
           }
           ,
           ej.batch = function(t, e) {
               var i, r = [], n = {}, s = e.interval || .016, a = e.batchMax || 1e9, o = function(t, e) {
                   var i = []
                     , r = []
                     , n = N.delayedCall(s, function() {
                       e(i, r),
                       i = [],
                       r = []
                   }).pause();
                   return function(t) {
                       i.length || n.restart(!0),
                       i.push(t.trigger),
                       r.push(t),
                       a <= i.length && n.progress(1)
                   }
               };
               for (i in e)
                   n[i] = "on" === i.substr(0, 2) && tB(e[i]) && "onRefreshInit" !== i ? o(i, e[i]) : e[i];
               return tB(a) && (a = a(),
               t8(ej, "refresh", function() {
                   return a = e.batchMax()
               })),
               X(t).forEach(function(t) {
                   var e = {};
                   for (i in n)
                       e[i] = n[i];
                   e.trigger = t,
                   r.push(ej.create(e))
               }),
               r
           }
           ;
           var ez, eN = function(t, e, i, r) {
               return e > r ? t(r) : e < 0 && t(0),
               i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1
           }, eV = function t(e, i) {
               !0 === i ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (z.isTouch ? " pinch-zoom" : "") : "none",
               e === H && t(q, i)
           }, eG = {
               auto: 1,
               scroll: 1
           }, eU = function(t) {
               var e, i = t.event, r = t.target, n = t.axis, s = (i.changedTouches ? i.changedTouches[0] : i).target, a = s._gsap || N.core.getCache(s), o = ty();
               if (!a._isScrollT || o - a._isScrollT > 2e3) {
                   for (; s && s.scrollHeight <= s.clientHeight; )
                       s = s.parentNode;
                   a._isScroll = s && !tS(s) && s !== r && (eG[(e = tJ(s)).overflowY] || eG[e.overflowX]),
                   a._isScrollT = o
               }
               (a._isScroll || "x" === n) && (i.stopPropagation(),
               i._gsapAllow = !0)
           }, eH = function(t, e, i, r) {
               return z.create({
                   target: t,
                   capture: !0,
                   debounce: !1,
                   lockAxis: !0,
                   type: e,
                   onWheel: r = r && eU,
                   onPress: r,
                   onDrag: r,
                   onScroll: r,
                   onEnable: function() {
                       return i && t8(U, z.eventTypes[0], eW, !1, !0)
                   },
                   onDisable: function() {
                       return t9(U, z.eventTypes[0], eW, !0)
                   }
               })
           }, eq = /(input|label|select|textarea)/i, eW = function(t) {
               var e = eq.test(t.target.tagName);
               (e || ez) && (t._gsapAllow = !0,
               ez = e)
           }, eY = function(t) {
               tI(t) || (t = {}),
               t.preventDefault = t.isNormalizer = t.allowClicks = !0,
               t.type || (t.type = "wheel,touch"),
               t.debounce = !!t.debounce,
               t.id = t.id || "normalizer";
               var e, i, r, n, s, a, o, u, l = t, h = l.normalizeScrollX, c = l.momentum, d = l.allowNestedScroll, f = O(t.target) || H, p = N.core.globals().ScrollSmoother, m = p && p.get(), g = td && (t.content && O(t.content) || m && !1 !== t.content && !m.smooth() && m.content()), x = P(f, F), y = P(f, M), D = 1, w = (z.isTouch && G.visualViewport ? G.visualViewport.scale * G.visualViewport.width : G.outerWidth) / G.innerWidth, b = 0, _ = tB(c) ? function() {
                   return c(e)
               }
               : function() {
                   return c || 2.8
               }
               , k = eH(f, t.type, !0, d), E = function() {
                   return n = !1
               }, T = tE, C = tE, A = function() {
                   C = Z(td ? 1 : 0, i = tO(f, F)),
                   h && (T = Z(0, tO(f, M))),
                   r = eD
               }, S = function() {
                   g._gsap.y = tT(parseFloat(g._gsap.y) + x.offset) + "px",
                   g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)",
                   x.offset = x.cacheID = 0
               }, R = function() {
                   if (n) {
                       requestAnimationFrame(E);
                       var t = tT(e.deltaY / 2)
                         , i = C(x.v - t);
                       if (g && i !== x.v + x.offset) {
                           x.offset = i - x.v;
                           var r = tT((parseFloat(g && g._gsap.y) || 0) - x.offset);
                           g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)",
                           g._gsap.y = r + "px",
                           x.cacheID = v.cache,
                           ek()
                       }
                       return !0
                   }
                   x.offset && S(),
                   n = !0
               }, B = function() {
                   A(),
                   s.isActive() && s.vars.scrollY > i && (x() > i ? s.progress(1) && x(i) : s.resetTo("scrollY", i))
               };
               return g && N.set(g, {
                   y: "+=0"
               }),
               t.ignoreCheck = function(t) {
                   return td && "touchmove" === t.type && R() || D > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
               }
               ,
               t.onPress = function() {
                   var t = D;
                   D = tT((G.visualViewport && G.visualViewport.scale || 1) / w),
                   s.pause(),
                   t !== D && eV(f, D > 1.01 || !h && "x"),
                   a = y(),
                   o = x(),
                   A(),
                   r = eD
               }
               ,
               t.onRelease = t.onGestureStart = function(t, e) {
                   if (x.offset && S(),
                   e) {
                       v.cache++;
                       var r, n, a = _();
                       h && (n = (r = y()) + -(.05 * a * t.velocityX) / .227,
                       a *= eN(y, r, n, tO(f, M)),
                       s.vars.scrollX = T(n)),
                       n = (r = x()) + -(.05 * a * t.velocityY) / .227,
                       a *= eN(x, r, n, tO(f, F)),
                       s.vars.scrollY = C(n),
                       s.invalidate().duration(a).play(.01),
                       (td && s.vars.scrollY >= i || r >= i - 1) && N.to({}, {
                           onUpdate: B,
                           duration: a
                       })
                   } else
                       u.restart(!0)
               }
               ,
               t.onWheel = function() {
                   s._ts && s.pause(),
                   ty() - b > 1e3 && (r = 0,
                   b = ty())
               }
               ,
               t.onChange = function(t, e, i, n, s) {
                   if (eD !== r && A(),
                   e && h && y(T(n[2] === e ? a + (t.startX - t.x) : y() + e - n[1])),
                   i) {
                       x.offset && S();
                       var u = s[2] === i
                         , l = u ? o + t.startY - t.y : x() + i - s[1]
                         , c = C(l);
                       u && l !== c && (o += c - l),
                       x(c)
                   }
                   (i || e) && ek()
               }
               ,
               t.onEnable = function() {
                   eV(f, !h && "x"),
                   t8(G, "resize", B),
                   k.enable()
               }
               ,
               t.onDisable = function() {
                   eV(f, !0),
                   t9(G, "resize", B),
                   k.kill()
               }
               ,
               t.lockAxis = !1 !== t.lockAxis,
               (e = new z(t)).iOS = td,
               td && !x() && x(1),
               td && N.ticker.add(tE),
               u = e._dc,
               s = N.to(e, {
                   ease: "power4",
                   paused: !0,
                   scrollX: h ? "+=0.1" : "+=0",
                   scrollY: "+=0.1",
                   onComplete: u.vars.onComplete
               }),
               e
           };
           ej.sort = function(t) {
               return ea.sort(t || function(t, e) {
                   return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
               }
               )
           }
           ,
           ej.observe = function(t) {
               return new z(t)
           }
           ,
           ej.normalizeScroll = function(t) {
               if (void 0 === t)
                   return tu;
               if (!0 === t && tu)
                   return tu.enable();
               if (!1 === t)
                   return tu && tu.kill();
               var e = t instanceof z ? t : eY(t);
               return tu && tu.target === e.target && tu.kill(),
               tS(e.target) && (tu = e),
               e
           }
           ,
           ej.core = {
               _getVelocityProp: R,
               _inputObserver: eH,
               _scrollers: v,
               _proxies: x,
               bridge: {
                   ss: function() {
                       tw || em("scrollStart"),
                       tw = ty()
                   },
                   ref: function() {
                       return Q
                   }
               }
           },
           tA() && N.registerPlugin(ej),
           t.ScrollTrigger = ej,
           t.default = ej,
           "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
               value: !0
           }) : delete window.default
       }(e)
   },
   3693: function(t, e) {
       var i, r, n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b, _, k, E;
       i = e,
       r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/,
       o = /(?:\r|\n|\t\t)/g,
       u = /(?:\s\s+)/g,
       l = function() {
           n = document,
           s = window,
           a = 1
       }
       ,
       h = function(t) {
           return s.getComputedStyle(t)
       }
       ,
       c = Array.isArray,
       d = [].slice,
       f = function(t, e) {
           var i;
           return c(t) ? t : "string" == (i = typeof t) && !e && t ? d.call(n.querySelectorAll(t), 0) : t && "object" === i && "length"in t ? d.call(t, 0) : t ? [t] : []
       }
       ,
       p = function(t) {
           return "absolute" === t.position || !0 === t.absolute
       }
       ,
       m = function(t, e) {
           for (var i, r = e.length; --r > -1; )
               if (i = e[r],
               t.substr(0, i.length) === i)
                   return i.length
       }
       ,
       g = function(t, e) {
           void 0 === t && (t = "");
           var i = ~t.indexOf("++")
             , r = 1;
           return i && (t = t.split("++").join("")),
           function() {
               return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
           }
       }
       ,
       v = function t(e, i, r) {
           var n = e.nodeType;
           if (1 === n || 9 === n || 11 === n)
               for (e = e.firstChild; e; e = e.nextSibling)
                   t(e, i, r);
           else
               (3 === n || 4 === n) && (e.nodeValue = e.nodeValue.split(i).join(r))
       }
       ,
       x = function(t, e) {
           for (var i = e.length; --i > -1; )
               t.push(e[i])
       }
       ,
       y = function(t, e, i) {
           for (var r; t && t !== e; ) {
               if (r = t._next || t.nextSibling)
                   return r.textContent.charAt(0) === i;
               t = t.parentNode || t._parent
           }
       }
       ,
       D = function t(e) {
           var i, r, n = f(e.childNodes), s = n.length;
           for (i = 0; i < s; i++)
               (r = n[i])._isSplit ? t(r) : i && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue,
               e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r),
               e.removeChild(r))
       }
       ,
       w = function(t, e) {
           return parseFloat(e[t]) || 0
       }
       ,
       b = function(t, e, i, r, s, a, o) {
           var u, l, c, d, f, m, g, b, _, k, E, T, C = h(t), A = w("paddingLeft", C), S = -999, M = w("borderBottomWidth", C) + w("borderTopWidth", C), F = w("borderLeftWidth", C) + w("borderRightWidth", C), O = w("paddingTop", C) + w("paddingBottom", C), P = w("paddingLeft", C) + w("paddingRight", C), R = w("fontSize", C) * (e.lineThreshold || .2), B = C.textAlign, L = [], I = [], j = [], z = e.wordDelimiter || " ", N = e.tag ? e.tag : e.span ? "span" : "div", V = e.type || e.split || "chars,words,lines", G = s && ~V.indexOf("lines") ? [] : null, U = ~V.indexOf("words"), H = ~V.indexOf("chars"), q = p(e), W = e.linesClass, Y = ~(W || "").indexOf("++"), X = [], Z = "flex" === C.display, $ = t.style.display;
           for (Y && (W = W.split("++").join("")),
           Z && (t.style.display = "block"),
           c = (l = t.getElementsByTagName("*")).length,
           f = [],
           u = 0; u < c; u++)
               f[u] = l[u];
           if (G || q)
               for (u = 0; u < c; u++)
                   ((m = (d = f[u]).parentNode === t) || q || H && !U) && (T = d.offsetTop,
                   G && m && Math.abs(T - S) > R && ("BR" !== d.nodeName || 0 === u) && (g = [],
                   G.push(g),
                   S = T),
                   q && (d._x = d.offsetLeft,
                   d._y = T,
                   d._w = d.offsetWidth,
                   d._h = d.offsetHeight),
                   G && ((d._isSplit && m || !H && m || U && m || !U && d.parentNode.parentNode === t && !d.parentNode._isSplit) && (g.push(d),
                   d._x -= A,
                   y(d, t, z) && (d._wordEnd = !0)),
                   "BR" === d.nodeName && (d.nextSibling && "BR" === d.nextSibling.nodeName || 0 === u) && G.push([])));
           for (u = 0; u < c; u++) {
               if (m = (d = f[u]).parentNode === t,
               "BR" === d.nodeName) {
                   G || q ? (d.parentNode && d.parentNode.removeChild(d),
                   f.splice(u--, 1),
                   c--) : U || t.appendChild(d);
                   continue
               }
               if (q && (_ = d.style,
               U || m || (d._x += d.parentNode._x,
               d._y += d.parentNode._y),
               _.left = d._x + "px",
               _.top = d._y + "px",
               _.position = "absolute",
               _.display = "block",
               _.width = d._w + 1 + "px",
               _.height = d._h + "px"),
               !U && H) {
                   if (d._isSplit)
                       for (d._next = l = d.nextSibling,
                       d.parentNode.appendChild(d); l && 3 === l.nodeType && " " === l.textContent; )
                           d._next = l.nextSibling,
                           d.parentNode.appendChild(l),
                           l = l.nextSibling;
                   else
                       d.parentNode._isSplit ? (d._parent = d.parentNode,
                       !d.previousSibling && d.firstChild && (d.firstChild._isFirst = !0),
                       d.nextSibling && " " === d.nextSibling.textContent && !d.nextSibling.nextSibling && X.push(d.nextSibling),
                       d._next = d.nextSibling && d.nextSibling._isFirst ? null : d.nextSibling,
                       d.parentNode.removeChild(d),
                       f.splice(u--, 1),
                       c--) : m || (T = !d.nextSibling && y(d.parentNode, t, z),
                       d.parentNode._parent && d.parentNode._parent.appendChild(d),
                       T && d.parentNode.appendChild(n.createTextNode(" ")),
                       "span" === N && (d.style.display = "inline"),
                       L.push(d))
               } else
                   d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML ? I.push(d) : H && !d._isSplit && ("span" === N && (d.style.display = "inline"),
                   L.push(d))
           }
           for (u = X.length; --u > -1; )
               X[u].parentNode.removeChild(X[u]);
           if (G) {
               for (q && (k = n.createElement(N),
               t.appendChild(k),
               E = k.offsetWidth + "px",
               T = k.offsetParent === t ? 0 : t.offsetLeft,
               t.removeChild(k)),
               _ = t.style.cssText,
               t.style.cssText = "display:none;"; t.firstChild; )
                   t.removeChild(t.firstChild);
               for (u = 0,
               b = " " === z && (!q || !U && !H); u < G.length; u++) {
                   for (g = G[u],
                   (k = n.createElement(N)).style.cssText = "display:block;text-align:" + B + ";position:" + (q ? "absolute;" : "relative;"),
                   W && (k.className = W + (Y ? u + 1 : "")),
                   j.push(k),
                   c = g.length,
                   l = 0; l < c; l++)
                       "BR" !== g[l].nodeName && (d = g[l],
                       k.appendChild(d),
                       b && d._wordEnd && k.appendChild(n.createTextNode(" ")),
                       q && (0 === l && (k.style.top = d._y + "px",
                       k.style.left = A + T + "px"),
                       d.style.top = "0px",
                       T && (d.style.left = d._x - T + "px")));
                   0 === c ? k.innerHTML = "&nbsp;" : U || H || (D(k),
                   v(k, String.fromCharCode(160), " ")),
                   q && (k.style.width = E,
                   k.style.height = d._h + "px"),
                   t.appendChild(k)
               }
               t.style.cssText = _
           }
           q && (o > t.clientHeight && (t.style.height = o - O + "px",
           t.clientHeight < o && (t.style.height = o + M + "px")),
           a > t.clientWidth && (t.style.width = a - P + "px",
           t.clientWidth < a && (t.style.width = a + F + "px"))),
           Z && ($ ? t.style.display = $ : t.style.removeProperty("display")),
           x(i, L),
           U && x(r, I),
           x(s, j)
       }
       ,
       _ = function(t, e, i, s) {
           var a, l, h, c, d, f, g, x, y = e.tag ? e.tag : e.span ? "span" : "div", D = ~(e.type || e.split || "chars,words,lines").indexOf("chars"), w = p(e), b = e.wordDelimiter || " ", _ = " " !== b ? "" : w ? "&#173; " : " ", k = "</" + y + ">", E = 1, T = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : m : null, C = n.createElement("div"), A = t.parentNode;
           for (A.insertBefore(C, t),
           C.textContent = t.nodeValue,
           A.removeChild(t),
           g = -1 !== (a = function t(e) {
               var i = e.nodeType
                 , r = "";
               if (1 === i || 9 === i || 11 === i) {
                   if ("string" == typeof e.textContent)
                       return e.textContent;
                   for (e = e.firstChild; e; e = e.nextSibling)
                       r += t(e)
               } else if (3 === i || 4 === i)
                   return e.nodeValue;
               return r
           }(t = C)).indexOf("<"),
           !1 !== e.reduceWhiteSpace && (a = a.replace(u, " ").replace(o, "")),
           g && (a = a.split("<").join("{{LT}}")),
           d = a.length,
           l = (" " === a.charAt(0) ? _ : "") + i(),
           h = 0; h < d; h++)
               if (f = a.charAt(h),
               T && (x = T(a.substr(h), e.specialChars)))
                   f = a.substr(h, x || 1),
                   l += D && " " !== f ? s() + f + "</" + y + ">" : f,
                   h += x - 1;
               else if (f === b && a.charAt(h - 1) !== b && h) {
                   for (l += E ? k : "",
                   E = 0; a.charAt(h + 1) === b; )
                       l += _,
                       h++;
                   h === d - 1 ? l += _ : ")" !== a.charAt(h + 1) && (l += _ + i(),
                   E = 1)
               } else
                   "{" === f && "{{LT}}" === a.substr(h, 6) ? (l += D ? s() + "{{LT}}</" + y + ">" : "{{LT}}",
                   h += 5) : f.charCodeAt(0) >= 55296 && 56319 >= f.charCodeAt(0) || a.charCodeAt(h + 1) >= 65024 && 65039 >= a.charCodeAt(h + 1) ? (c = ((a.substr(h, 12).split(r) || [])[1] || "").length || 2,
                   l += D && " " !== f ? s() + a.substr(h, c) + "</" + y + ">" : a.substr(h, c),
                   h += c - 1) : l += D && " " !== f ? s() + f + "</" + y + ">" : f;
           t.outerHTML = l + (E ? k : ""),
           g && v(A, "{{LT}}", "<")
       }
       ,
       k = function t(e, i, r, n) {
           var s, a, o = f(e.childNodes), u = o.length, l = p(i);
           if (3 !== e.nodeType || u > 1) {
               for (s = 0,
               i.absolute = !1; s < u; s++)
                   (a = o[s])._next = a._isFirst = a._parent = a._wordEnd = null,
                   (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (l && 3 !== a.nodeType && "inline" === h(a).display && (a.style.display = "inline-block",
                   a.style.position = "relative"),
                   a._isSplit = !0,
                   t(a, i, r, n));
               i.absolute = l,
               e._isSplit = !0;
               return
           }
           _(e, i, r, n)
       }
       ,
       (E = function() {
           function t(t, e) {
               a || l(),
               this.elements = f(t),
               this.chars = [],
               this.words = [],
               this.lines = [],
               this._originals = [],
               this.vars = e || {},
               this.split(e)
           }
           var e = t.prototype;
           return e.split = function(t) {
               this.isSplit && this.revert(),
               this.vars = t = t || this.vars,
               this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
               for (var e, i, r, n = this.elements.length, s = t.tag ? t.tag : t.span ? "span" : "div", a = g(t.wordsClass, s), o = g(t.charsClass, s); --n > -1; )
                   r = this.elements[n],
                   this._originals[n] = r.innerHTML,
                   e = r.clientHeight,
                   i = r.clientWidth,
                   k(r, t, a, o),
                   b(r, t, this.chars, this.words, this.lines, i, e);
               return this.chars.reverse(),
               this.words.reverse(),
               this.lines.reverse(),
               this.isSplit = !0,
               this
           }
           ,
           e.revert = function() {
               var t = this._originals;
               if (!t)
                   throw "revert() call wasn't scoped properly.";
               return this.elements.forEach(function(e, i) {
                   return e.innerHTML = t[i]
               }),
               this.chars = [],
               this.words = [],
               this.lines = [],
               this.isSplit = !1,
               this
           }
           ,
           t.create = function(e, i) {
               return new t(e,i)
           }
           ,
           t
       }()).version = "3.11.0",
       i.SplitText = E,
       i.default = E,
       Object.defineProperty(i, "__esModule", {
           value: !0
       })
   },
   2206: function(t, e, i) {
       "use strict";
       function r(t) {
           if (void 0 === t)
               throw ReferenceError("this hasn't been initialised - super() hasn't been called");
           return t
       }
       function n(t, e) {
           t.prototype = Object.create(e.prototype),
           t.prototype.constructor = t,
           t.__proto__ = e
       }
       i.d(e, {
           ZP: function() {
               return rR
           },
           p8: function() {
               return rR
           }
       });
       /*!
* GSAP 3.11.0
* https://greensock.com
*
* @license Copyright 2008-2022, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
       var s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b, _, k, E, T, C, A, S, M, F, O, P, R = {
           autoSleep: 120,
           force3D: "auto",
           nullTargetWarn: 1,
           units: {
               lineHeight: ""
           }
       }, B = {
           duration: .5,
           overwrite: !1,
           delay: 0
       }, L = 2 * Math.PI, I = L / 4, j = 0, z = Math.sqrt, N = Math.cos, V = Math.sin, G = function(t) {
           return "string" == typeof t
       }, U = function(t) {
           return "function" == typeof t
       }, H = function(t) {
           return "number" == typeof t
       }, q = function(t) {
           return void 0 === t
       }, W = function(t) {
           return "object" == typeof t
       }, Y = function(t) {
           return !1 !== t
       }, X = function() {
           return "undefined" != typeof window
       }, Z = function(t) {
           return U(t) || G(t)
       }, $ = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
       , K = Array.isArray, Q = /(?:-?\.?\d|\.)+/gi, J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ti = /[+-]=-?[.\d]+/, tr = /[^,'"\[\]\s]+/gi, tn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ts = {}, ta = {}, to = function(t) {
           return (ta = tB(t, ts)) && iC
       }, tu = function(t, e) {
           return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
       }, tl = function(t, e) {
           return !e && console.warn(t)
       }, th = function(t, e) {
           return t && (ts[t] = e) && ta && (ta[t] = e) || ts
       }, tc = function() {
           return 0
       }, td = {
           suppressEvents: !0,
           isStart: !0
       }, tf = {
           suppressEvents: !0
       }, tp = {}, tm = [], tg = {}, tv = {}, tx = {}, ty = 30, tD = [], tw = "", tb = function(t) {
           var e, i, r = t[0];
           if (W(r) || U(r) || (t = [t]),
           !(e = (r._gsap || {}).harness)) {
               for (i = tD.length; i-- && !tD[i].targetTest(r); )
                   ;
               e = tD[i]
           }
           for (i = t.length; i--; )
               t[i] && (t[i]._gsap || (t[i]._gsap = new eG(t[i],e))) || t.splice(i, 1);
           return t
       }, t_ = function(t) {
           return t._gsap || tb(es(t))[0]._gsap
       }, tk = function(t, e, i) {
           return (i = t[e]) && U(i) ? t[e]() : q(i) && t.getAttribute && t.getAttribute(e) || i
       }, tE = function(t, e) {
           return (t = t.split(",")).forEach(e) || t
       }, tT = function(t) {
           return Math.round(1e5 * t) / 1e5 || 0
       }, tC = function(t) {
           return Math.round(1e7 * t) / 1e7 || 0
       }, tA = function(t, e) {
           var i = e.charAt(0)
             , r = parseFloat(e.substr(2));
           return t = parseFloat(t),
           "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r
       }, tS = function(t, e) {
           for (var i = e.length, r = 0; 0 > t.indexOf(e[r]) && ++r < i; )
               ;
           return r < i
       }, tM = function() {
           var t, e, i = tm.length, r = tm.slice(0);
           for (t = 0,
           tg = {},
           tm.length = 0; t < i; t++)
               (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
       }, tF = function(t, e, i, r) {
           tm.length && tM(),
           t.render(e, i, r || k),
           tm.length && tM()
       }, tO = function(t) {
           var e = parseFloat(t);
           return (e || 0 === e) && (t + "").match(tr).length < 2 ? e : G(t) ? t.trim() : t
       }, tP = function(t) {
           return t
       }, tR = function(t, e) {
           for (var i in e)
               i in t || (t[i] = e[i]);
           return t
       }, tB = function(t, e) {
           for (var i in e)
               t[i] = e[i];
           return t
       }, tL = function t(e, i) {
           for (var r in i)
               "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = W(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
           return e
       }, tI = function(t, e) {
           var i, r = {};
           for (i in t)
               i in e || (r[i] = t[i]);
           return r
       }, tj = function(t) {
           var e, i = t.parent || T, r = t.keyframes ? (e = K(t.keyframes),
           function(t, i) {
               for (var r in i)
                   r in t || "duration" === r && e || "ease" === r || (t[r] = i[r])
           }
           ) : tR;
           if (Y(t.inherit))
               for (; i; )
                   r(t, i.vars.defaults),
                   i = i.parent || i._dp;
           return t
       }, tz = function(t, e) {
           for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
               ;
           return i < 0
       }, tN = function(t, e, i, r, n) {
           void 0 === i && (i = "_first"),
           void 0 === r && (r = "_last");
           var s, a = t[r];
           if (n)
               for (s = e[n]; a && a[n] > s; )
                   a = a._prev;
           return a ? (e._next = a._next,
           a._next = e) : (e._next = t[i],
           t[i] = e),
           e._next ? e._next._prev = e : t[r] = e,
           e._prev = a,
           e.parent = e._dp = t,
           e
       }, tV = function(t, e, i, r) {
           void 0 === i && (i = "_first"),
           void 0 === r && (r = "_last");
           var n = e._prev
             , s = e._next;
           n ? n._next = s : t[i] === e && (t[i] = s),
           s ? s._prev = n : t[r] === e && (t[r] = n),
           e._next = e._prev = e.parent = null
       }, tG = function(t, e) {
           t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
           t._act = 0
       }, tU = function(t, e) {
           if (t && (!e || e._end > t._dur || e._start < 0))
               for (var i = t; i; )
                   i._dirty = 1,
                   i = i.parent;
           return t
       }, tH = function(t) {
           for (var e = t.parent; e && e.parent; )
               e._dirty = 1,
               e.totalDuration(),
               e = e.parent;
           return t
       }, tq = function(t, e, i, r) {
           return t._startAt && (k ? t._startAt.revert(tf) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
       }, tW = function(t) {
           return t._repeat ? tY(t._tTime, t = t.duration() + t._rDelay) * t : 0
       }, tY = function(t, e) {
           var i = Math.floor(t /= e);
           return t && i === t ? i - 1 : i
       }, tX = function(t, e) {
           return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
       }, tZ = function(t) {
           return t._end = tC(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
       }, t$ = function(t, e) {
           var i = t._dp;
           return i && i.smoothChildTiming && t._ts && (t._start = tC(i._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))),
           tZ(t),
           i._dirty || tU(i, t)),
           t
       }, tK = function(t, e) {
           var i;
           if ((e._time || e._initted && !e._dur) && (i = tX(t.rawTime(), e),
           (!e._dur || ee(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)),
           tU(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
               if (t._dur < t.duration())
                   for (i = t; i._dp; )
                       i.rawTime() >= 0 && i.totalTime(i._tTime),
                       i = i._dp;
               t._zTime = -.00000001
           }
       }, tQ = function(t, e, i, r) {
           return e.parent && tG(e),
           e._start = tC((H(i) ? i : i || t !== T ? t9(t, i, e) : t._time) + e._delay),
           e._end = tC(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
           tN(t, e, "_first", "_last", t._sort ? "_start" : 0),
           t2(e) || (t._recent = e),
           r || tK(t, e),
           t._ts < 0 && t$(t, t._tTime),
           t
       }, tJ = function(t, e) {
           return (ts.ScrollTrigger || tu("scrollTrigger", e)) && ts.ScrollTrigger.create(e, t)
       }, t0 = function(t, e, i, r) {
           return (e1(t, e),
           t._initted) ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && F !== eC.frame ? (tm.push(t),
           t._lazy = [e, r],
           1) : void 0 : 1
       }, t1 = function t(e) {
           var i = e.parent;
           return i && i._ts && i._initted && !i._lock && (0 > i.rawTime() || t(i))
       }, t2 = function(t) {
           var e = t.data;
           return "isFromStart" === e || "isStart" === e
       }, t5 = function(t, e, i, r) {
           var n, s, a, o = t.ratio, u = e < 0 || !e && (!t._start && t1(t) && !(!t._initted && t2(t)) || (t._ts < 0 || t._dp._ts < 0) && !t2(t)) ? 0 : 1, l = t._rDelay, h = 0;
           if (l && t._repeat && (s = tY(h = ee(0, t._tDur, e), l),
           t._yoyo && 1 & s && (u = 1 - u),
           s !== tY(t._tTime, l) && (o = 1 - u,
           t.vars.repeatRefresh && t._initted && t.invalidate())),
           u !== o || k || r || 1e-8 === t._zTime || !e && t._zTime) {
               if (!t._initted && t0(t, e, r, i))
                   return;
               for (a = t._zTime,
               t._zTime = e || (i ? 1e-8 : 0),
               i || (i = e && !a),
               t.ratio = u,
               t._from && (u = 1 - u),
               t._time = 0,
               t._tTime = h,
               n = t._pt; n; )
                   n.r(u, n.d),
                   n = n._next;
               e < 0 && tq(t, e, i, !0),
               t._onUpdate && !i && eg(t, "onUpdate"),
               h && t._repeat && !i && t.parent && eg(t, "onRepeat"),
               (e >= t._tDur || e < 0) && t.ratio === u && (u && tG(t, 1),
               !i && (eg(t, u ? "onComplete" : "onReverseComplete", !0),
               t._prom && t._prom()))
           } else
               t._zTime || (t._zTime = e)
       }, t6 = function(t, e, i) {
           var r;
           if (i > e)
               for (r = t._first; r && r._start <= i; ) {
                   if ("isPause" === r.data && r._start > e)
                       return r;
                   r = r._next
               }
           else
               for (r = t._last; r && r._start >= i; ) {
                   if ("isPause" === r.data && r._start < e)
                       return r;
                   r = r._prev
               }
       }, t3 = function(t, e, i, r) {
           var n = t._repeat
             , s = tC(e) || 0
             , a = t._tTime / t._tDur;
           return a && !r && (t._time *= s / t._dur),
           t._dur = s,
           t._tDur = n ? n < 0 ? 1e10 : tC(s * (n + 1) + t._rDelay * n) : s,
           a > 0 && !r ? t$(t, t._tTime = t._tDur * a) : t.parent && tZ(t),
           i || tU(t.parent, t),
           t
       }, t4 = function(t) {
           return t instanceof eH ? tU(t) : t3(t, t._dur)
       }, t8 = {
           _start: 0,
           endTime: tc,
           totalDuration: tc
       }, t9 = function t(e, i, r) {
           var n, s, a, o = e.labels, u = e._recent || t8, l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
           return G(i) && (isNaN(i) || i in o) ? (s = i.charAt(0),
           a = "%" === i.substr(-1),
           n = i.indexOf("="),
           "<" === s || ">" === s) ? (n >= 0 && (i = i.replace(/=/, "")),
           ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (n < 0 ? u : r).totalDuration() / 100 : 1)) : n < 0 ? (i in o || (o[i] = l),
           o[i]) : (s = parseFloat(i.charAt(n - 1) + i.substr(n + 1)),
           a && r && (s = s / 100 * (K(r) ? r[0] : r).totalDuration()),
           n > 1 ? t(e, i.substr(0, n - 1), r) + s : l + s) : null == i ? l : +i
       }, t7 = function(t, e, i) {
           var r, n, s = H(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
           if (s && (o.duration = e[1]),
           o.parent = i,
           t) {
               for (r = o,
               n = i; n && !("immediateRender"in r); )
                   r = n.vars.defaults || {},
                   n = Y(n.vars.inherit) && n.parent;
               o.immediateRender = Y(r.immediateRender),
               t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
           }
           return new e9(e[0],o,e[a + 1])
       }, et = function(t, e) {
           return t || 0 === t ? e(t) : e
       }, ee = function(t, e, i) {
           return i < t ? t : i > e ? e : i
       }, ei = function(t, e) {
           return G(t) && (e = tn.exec(t)) ? e[1] : ""
       }, er = [].slice, en = function(t, e) {
           return t && W(t) && "length"in t && (!e && !t.length || t.length - 1 in t && W(t[0])) && !t.nodeType && t !== C
       }, es = function(t, e, i) {
           var r;
           return E && !e && E.selector ? E.selector(t) : G(t) && !i && (A || !eA()) ? er.call((e || S).querySelectorAll(t), 0) : K(t) ? (void 0 === r && (r = []),
           t.forEach(function(t) {
               var e;
               return G(t) && !i || en(t, 1) ? (e = r).push.apply(e, es(t)) : r.push(t)
           }) || r) : en(t) ? er.call(t, 0) : t ? [t] : []
       }, ea = function(t) {
           return t = es(t)[0] || tl("Invalid scope") || {},
           function(e) {
               var i = t.current || t.nativeElement || t;
               return es(e, i.querySelectorAll ? i : i === t ? tl("Invalid scope") || S.createElement("div") : t)
           }
       }, eo = function(t) {
           return t.sort(function() {
               return .5 - Math.random()
           })
       }, eu = function(t) {
           if (U(t))
               return t;
           var e = W(t) ? t : {
               each: t
           }
             , i = eI(e.ease)
             , r = e.from || 0
             , n = parseFloat(e.base) || 0
             , s = {}
             , a = r > 0 && r < 1
             , o = isNaN(r) || a
             , u = e.axis
             , l = r
             , h = r;
           return G(r) ? l = h = ({
               center: .5,
               edges: .5,
               end: 1
           })[r] || 0 : !a && o && (l = r[0],
           h = r[1]),
           function(t, a, c) {
               var d, f, p, m, g, v, x, y, D, w = (c || e).length, b = s[w];
               if (!b) {
                   if (!(D = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                       for (x = -1e8; x < (x = c[D++].getBoundingClientRect().left) && D < w; )
                           ;
                       D--
                   }
                   for (v = 0,
                   b = s[w] = [],
                   d = o ? Math.min(D, w) * l - .5 : r % D,
                   f = 1e8 === D ? 0 : o ? w * h / D - .5 : r / D | 0,
                   x = 0,
                   y = 1e8; v < w; v++)
                       p = v % D - d,
                       m = f - (v / D | 0),
                       b[v] = g = u ? Math.abs("y" === u ? m : p) : z(p * p + m * m),
                       g > x && (x = g),
                       g < y && (y = g);
                   "random" === r && eo(b),
                   b.max = x - y,
                   b.min = y,
                   b.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (D > w ? w - 1 : u ? "y" === u ? w / D : D : Math.max(D, w / D)) || 0) * ("edges" === r ? -1 : 1),
                   b.b = w < 0 ? n - w : n,
                   b.u = ei(e.amount || e.each) || 0,
                   i = i && w < 0 ? eB(i) : i
               }
               return w = (b[t] - b.min) / b.max || 0,
               tC(b.b + (i ? i(w) : w) * b.v) + b.u
           }
       }, el = function(t) {
           var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
           return function(i) {
               var r = tC(Math.round(parseFloat(i) / t) * t * e);
               return (r - r % 1) / e + (H(i) ? 0 : ei(i))
           }
       }, eh = function(t, e) {
           var i, r, n = K(t);
           return !n && W(t) && (i = n = t.radius || 1e8,
           t.values ? (r = !H((t = es(t.values))[0])) && (i *= i) : t = el(t.increment)),
           et(e, n ? U(t) ? function(e) {
               return Math.abs((r = t(e)) - e) <= i ? r : e
           }
           : function(e) {
               for (var n, s, a = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), u = 1e8, l = 0, h = t.length; h--; )
                   (n = r ? (n = t[h].x - a) * n + (s = t[h].y - o) * s : Math.abs(t[h] - a)) < u && (u = n,
                   l = h);
               return l = !i || u <= i ? t[l] : e,
               r || l === e || H(e) ? l : l + ei(e)
           }
           : el(t))
       }, ec = function(t, e, i, r) {
           return et(K(t) ? !e : !0 === i ? (i = 0,
           !1) : !r, function() {
               return K(t) ? t[~~(Math.random() * t.length)] : (r = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
           })
       }, ed = function(t, e, i) {
           return et(i, function(i) {
               return t[~~e(i)]
           })
       }, ef = function(t) {
           for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
               r = t.indexOf(")", e),
               n = "[" === t.charAt(e + 7),
               i = t.substr(e + 7, r - e - 7).match(n ? tr : Q),
               a += t.substr(s, e - s) + ec(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5),
               s = r + 1;
           return a + t.substr(s, t.length - s)
       }, ep = function(t, e, i, r, n) {
           var s = e - t
             , a = r - i;
           return et(n, function(e) {
               return i + ((e - t) / s * a || 0)
           })
       }, em = function(t, e, i) {
           var r, n, s, a = t.labels, o = 1e8;
           for (r in a)
               (n = a[r] - e) < 0 == !!i && n && o > (n = Math.abs(n)) && (s = r,
               o = n);
           return s
       }, eg = function(t, e, i) {
           var r, n, s, a = t.vars, o = a[e], u = E, l = t._ctx;
           if (o)
               return r = a[e + "Params"],
               n = a.callbackScope || t,
               i && tm.length && tM(),
               l && (E = l),
               s = r ? o.apply(n, r) : o.call(n),
               E = u,
               s
       }, ev = function(t) {
           return tG(t),
           t.scrollTrigger && t.scrollTrigger.kill(!1),
           1 > t.progress() && eg(t, "onInterrupt"),
           t
       }, ex = function(t) {
           var e = (t = !t.name && t.default || t).name
             , i = U(t)
             , r = e && !i && t.init ? function() {
               this._props = []
           }
           : t
             , n = {
               init: tc,
               render: iu,
               add: eQ,
               kill: ih,
               modifier: il,
               rawVars: 0
           }
             , s = {
               targetTest: 0,
               get: 0,
               getSetter: ir,
               aliases: {},
               register: 0
           };
           if (eA(),
           t !== r) {
               if (tv[e])
                   return;
               tR(r, tR(tI(t, n), s)),
               tB(r.prototype, tB(n, tI(t, s))),
               tv[r.prop = e] = r,
               t.targetTest && (tD.push(r),
               tp[e] = 1),
               e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
           }
           th(e, r),
           t.register && t.register(iC, r, ip)
       }, ey = {
           aqua: [0, 255, 255],
           lime: [0, 255, 0],
           silver: [192, 192, 192],
           black: [0, 0, 0],
           maroon: [128, 0, 0],
           teal: [0, 128, 128],
           blue: [0, 0, 255],
           navy: [0, 0, 128],
           white: [255, 255, 255],
           olive: [128, 128, 0],
           yellow: [255, 255, 0],
           orange: [255, 165, 0],
           gray: [128, 128, 128],
           purple: [128, 0, 128],
           green: [0, 128, 0],
           red: [255, 0, 0],
           pink: [255, 192, 203],
           cyan: [0, 255, 255],
           transparent: [255, 255, 255, 0]
       }, eD = function(t, e, i) {
           return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
       }, ew = function(t, e, i) {
           var r, n, s, a, o, u, l, h, c, d, f = t ? H(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ey.black;
           if (!f) {
               if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
               ey[t])
                   f = ey[t];
               else if ("#" === t.charAt(0)) {
                   if (t.length < 6 && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                   9 === t.length)
                       return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                   f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
               } else if ("hsl" === t.substr(0, 3)) {
                   if (f = d = t.match(Q),
                   e) {
                       if (~t.indexOf("="))
                           return f = t.match(J),
                           i && f.length < 4 && (f[3] = 1),
                           f
                   } else
                       a = +f[0] % 360 / 360,
                       o = +f[1] / 100,
                       n = (u = +f[2] / 100) <= .5 ? u * (o + 1) : u + o - u * o,
                       r = 2 * u - n,
                       f.length > 3 && (f[3] *= 1),
                       f[0] = eD(a + 1 / 3, r, n),
                       f[1] = eD(a, r, n),
                       f[2] = eD(a - 1 / 3, r, n)
               } else
                   f = t.match(Q) || ey.transparent;
               f = f.map(Number)
           }
           return e && !d && (r = f[0] / 255,
           n = f[1] / 255,
           s = f[2] / 255,
           u = ((l = Math.max(r, n, s)) + (h = Math.min(r, n, s))) / 2,
           l === h ? a = o = 0 : (c = l - h,
           o = u > .5 ? c / (2 - l - h) : c / (l + h),
           a = (l === r ? (n - s) / c + (n < s ? 6 : 0) : l === n ? (s - r) / c + 2 : (r - n) / c + 4) * 60),
           f[0] = ~~(a + .5),
           f[1] = ~~(100 * o + .5),
           f[2] = ~~(100 * u + .5)),
           i && f.length < 4 && (f[3] = 1),
           f
       }, eb = function(t) {
           var e = []
             , i = []
             , r = -1;
           return t.split(ek).forEach(function(t) {
               var n = t.match(tt) || [];
               e.push.apply(e, n),
               i.push(r += n.length + 1)
           }),
           e.c = i,
           e
       }, e_ = function(t, e, i) {
           var r, n, s, a, o = "", u = (t + o).match(ek), l = e ? "hsla(" : "rgba(", h = 0;
           if (!u)
               return t;
           if (u = u.map(function(t) {
               return (t = ew(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
           }),
           i && (s = eb(t),
           (r = i.c).join(o) !== s.c.join(o)))
               for (a = (n = t.replace(ek, "1").split(tt)).length - 1; h < a; h++)
                   o += n[h] + (~r.indexOf(h) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : i).shift());
           if (!n)
               for (a = (n = t.split(ek)).length - 1; h < a; h++)
                   o += n[h] + u[h];
           return o + n[a]
       }, ek = function() {
           var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
           for (t in ey)
               e += "|" + t + "\\b";
           return RegExp(e + ")", "gi")
       }(), eE = /hsl[a]?\(/, eT = function(t) {
           var e, i = t.join(" ");
           if (ek.lastIndex = 0,
           ek.test(i))
               return e = eE.test(i),
               t[1] = e_(t[1], e),
               t[0] = e_(t[0], e, eb(t[1])),
               !0
       }, eC = (m = 500,
       g = 33,
       x = v = (p = Date.now)(),
       y = 1e3 / 240,
       D = 1e3 / 240,
       w = [],
       b = function t(e) {
           var i, r, n, s, a = p() - x, o = !0 === e;
           if (a > m && (v += a - g),
           x += a,
           ((i = (n = x - v) - D) > 0 || o) && (s = ++c.frame,
           d = n - 1e3 * c.time,
           c.time = n /= 1e3,
           D += i + (i >= y ? 4 : y - i),
           r = 1),
           o || (u = l(t)),
           r)
               for (f = 0; f < w.length; f++)
                   w[f](n, d, s, e)
       }
       ,
       c = {
           time: 0,
           frame: 0,
           tick: function() {
               b(!0)
           },
           deltaRatio: function(t) {
               return d / (1e3 / (t || 60))
           },
           wake: function() {
               M && (!A && X() && (S = (C = A = window).document || {},
               ts.gsap = iC,
               (C.gsapVersions || (C.gsapVersions = [])).push(iC.version),
               to(ta || C.GreenSockGlobals || !C.gsap && C || {}),
               h = C.requestAnimationFrame),
               u && c.sleep(),
               l = h || function(t) {
                   return setTimeout(t, D - 1e3 * c.time + 1 | 0)
               }
               ,
               P = 1,
               b(2))
           },
           sleep: function() {
               (h ? C.cancelAnimationFrame : clearTimeout)(u),
               P = 0,
               l = tc
           },
           lagSmoothing: function(t, e) {
               g = Math.min(e, m = t || 1e8, 0)
           },
           fps: function(t) {
               y = 1e3 / (t || 240),
               D = 1e3 * c.time + y
           },
           add: function(t, e, i) {
               var r = e ? function(e, i, n, s) {
                   t(e, i, n, s),
                   c.remove(r)
               }
               : t;
               return c.remove(t),
               w[i ? "unshift" : "push"](r),
               eA(),
               r
           },
           remove: function(t, e) {
               ~(e = w.indexOf(t)) && w.splice(e, 1) && f >= e && f--
           },
           _listeners: w
       }), eA = function() {
           return !P && eC.wake()
       }, eS = {}, eM = /^[\d.\-M][\d.\-,\s]/, eF = /["']/g, eO = function(t) {
           for (var e, i, r, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++)
               i = s[o],
               e = o !== u - 1 ? i.lastIndexOf(",") : i.length,
               r = i.substr(0, e),
               n[a] = isNaN(r) ? r.replace(eF, "").trim() : +r,
               a = i.substr(e + 1).trim();
           return n
       }, eP = function(t) {
           var e = t.indexOf("(") + 1
             , i = t.indexOf(")")
             , r = t.indexOf("(", e);
           return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
       }, eR = function(t) {
           var e = (t + "").split("(")
             , i = eS[e[0]];
           return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [eO(e[1])] : eP(t).split(",").map(tO)) : eS._CE && eM.test(t) ? eS._CE("", t) : i
       }, eB = function(t) {
           return function(e) {
               return 1 - t(1 - e)
           }
       }, eL = function t(e, i) {
           for (var r, n = e._first; n; )
               n instanceof eH ? t(n, i) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === i || (n.timeline ? t(n.timeline, i) : (r = n._ease,
               n._ease = n._yEase,
               n._yEase = r,
               n._yoyo = i)),
               n = n._next
       }, eI = function(t, e) {
           return t && (U(t) ? t : eS[t] || eR(t)) || e
       }, ej = function(t, e, i, r) {
           void 0 === i && (i = function(t) {
               return 1 - e(1 - t)
           }
           ),
           void 0 === r && (r = function(t) {
               return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
           }
           );
           var n, s = {
               easeIn: e,
               easeOut: i,
               easeInOut: r
           };
           return tE(t, function(t) {
               for (var e in eS[t] = ts[t] = s,
               eS[n = t.toLowerCase()] = i,
               s)
                   eS[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eS[t + "." + e] = s[e]
           }),
           s
       }, ez = function(t) {
           return function(e) {
               return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
           }
       }, eN = function t(e, i, r) {
           var n = i >= 1 ? i : 1
             , s = (r || (e ? .3 : .45)) / (i < 1 ? i : 1)
             , a = s / L * (Math.asin(1 / n) || 0)
             , o = function(t) {
               return 1 === t ? 1 : n * Math.pow(2, -10 * t) * V((t - a) * s) + 1
           }
             , u = "out" === e ? o : "in" === e ? function(t) {
               return 1 - o(1 - t)
           }
           : ez(o);
           return s = L / s,
           u.config = function(i, r) {
               return t(e, i, r)
           }
           ,
           u
       }, eV = function t(e, i) {
           void 0 === i && (i = 1.70158);
           var r = function(t) {
               return t ? --t * t * ((i + 1) * t + i) + 1 : 0
           }
             , n = "out" === e ? r : "in" === e ? function(t) {
               return 1 - r(1 - t)
           }
           : ez(r);
           return n.config = function(i) {
               return t(e, i)
           }
           ,
           n
       };
       tE("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
           var i = e < 5 ? e + 1 : e;
           ej(t + ",Power" + (i - 1), e ? function(t) {
               return Math.pow(t, i)
           }
           : function(t) {
               return t
           }
           , function(t) {
               return 1 - Math.pow(1 - t, i)
           }, function(t) {
               return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow((1 - t) * 2, i) / 2
           })
       }),
       eS.Linear.easeNone = eS.none = eS.Linear.easeIn,
       ej("Elastic", eN("in"), eN("out"), eN()),
       eW = 2 * (eq = 1 / 2.75),
       eY = 2.5 * eq,
       ej("Bounce", function(t) {
           return 1 - eX(1 - t)
       }, eX = function(t) {
           return t < eq ? 7.5625 * t * t : t < eW ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < eY ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
       }
       ),
       ej("Expo", function(t) {
           return t ? Math.pow(2, 10 * (t - 1)) : 0
       }),
       ej("Circ", function(t) {
           return -(z(1 - t * t) - 1)
       }),
       ej("Sine", function(t) {
           return 1 === t ? 1 : -N(t * I) + 1
       }),
       ej("Back", eV("in"), eV("out"), eV()),
       eS.SteppedEase = eS.steps = ts.SteppedEase = {
           config: function(t, e) {
               void 0 === t && (t = 1);
               var i = 1 / t
                 , r = t + (e ? 0 : 1)
                 , n = e ? 1 : 0;
               return function(t) {
                   return ((r * ee(0, .99999999, t) | 0) + n) * i
               }
           }
       },
       B.ease = eS["quad.out"],
       tE("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
           return tw += t + "," + t + "Params,"
       });
       var eG = function(t, e) {
           this.id = j++,
           t._gsap = this,
           this.target = t,
           this.harness = e,
           this.get = e ? e.get : tk,
           this.set = e ? e.getSetter : ir
       }
         , eU = function() {
           function t(t) {
               this.vars = t,
               this._delay = +t.delay || 0,
               (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
               this._yoyo = !!t.yoyo || !!t.yoyoEase),
               this._ts = 1,
               t3(this, +t.duration, 1, 1),
               this.data = t.data,
               E && (this._ctx = E,
               E.data.push(this)),
               P || eC.wake()
           }
           var e = t.prototype;
           return e.delay = function(t) {
               return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
               this._delay = t,
               this) : this._delay
           }
           ,
           e.duration = function(t) {
               return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
           }
           ,
           e.totalDuration = function(t) {
               return arguments.length ? (this._dirty = 0,
               t3(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
           }
           ,
           e.totalTime = function(t, e) {
               if (eA(),
               !arguments.length)
                   return this._tTime;
               var i = this._dp;
               if (i && i.smoothChildTiming && this._ts) {
                   for (t$(this, t),
                   !i._dp || i.parent || tK(i, this); i && i.parent; )
                       i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : -((i.totalDuration() - i._tTime) / i._ts)) && i.totalTime(i._tTime, !0),
                       i = i.parent;
                   !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && tQ(this._dp, this, this._start - this._delay)
               }
               return this._tTime === t && (this._dur || e) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (t || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = t),
               tF(this, t, e)),
               this
           }
           ,
           e.time = function(t, e) {
               return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + tW(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
           }
           ,
           e.totalProgress = function(t, e) {
               return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
           }
           ,
           e.progress = function(t, e) {
               return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + tW(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
           }
           ,
           e.iteration = function(t, e) {
               var i = this.duration() + this._rDelay;
               return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? tY(this._tTime, i) + 1 : 1
           }
           ,
           e.timeScale = function(t) {
               if (!arguments.length)
                   return -.00000001 === this._rts ? 0 : this._rts;
               if (this._rts === t)
                   return this;
               var e = this.parent && this._ts ? tX(this.parent._time, this) : this._tTime;
               return this._rts = +t || 0,
               this._ts = this._ps || -.00000001 === t ? 0 : this._rts,
               this.totalTime(ee(-this._delay, this._tDur, e), !0),
               tZ(this),
               tH(this)
           }
           ,
           e.paused = function(t) {
               return arguments.length ? (this._ps !== t && (this._ps = t,
               t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
               this._ts = this._act = 0) : (eA(),
               this._ts = this._rts,
               this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
               this) : this._ps
           }
           ,
           e.startTime = function(t) {
               if (arguments.length) {
                   this._start = t;
                   var e = this.parent || this._dp;
                   return e && (e._sort || !this.parent) && tQ(e, this, t - this._delay),
                   this
               }
               return this._start
           }
           ,
           e.endTime = function(t) {
               return this._start + (Y(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
           }
           ,
           e.rawTime = function(t) {
               var e = this.parent || this._dp;
               return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tX(e.rawTime(t), this) : this._tTime : this._tTime
           }
           ,
           e.revert = function(t) {
               void 0 === t && (t = tf);
               var e = k;
               return k = t,
               this.timeline && this.timeline.revert(t),
               this.totalTime(-.01, t.suppressEvents),
               "nested" !== this.data && tG(this),
               k = e,
               this
           }
           ,
           e.globalTime = function(t) {
               for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                   i = e._start + i / (e._ts || 1),
                   e = e._dp;
               return !this.parent && this.vars.immediateRender ? -1 : i
           }
           ,
           e.repeat = function(t) {
               return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
               t4(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
           }
           ,
           e.repeatDelay = function(t) {
               if (arguments.length) {
                   var e = this._time;
                   return this._rDelay = t,
                   t4(this),
                   e ? this.time(e) : this
               }
               return this._rDelay
           }
           ,
           e.yoyo = function(t) {
               return arguments.length ? (this._yoyo = t,
               this) : this._yoyo
           }
           ,
           e.seek = function(t, e) {
               return this.totalTime(t9(this, t), Y(e))
           }
           ,
           e.restart = function(t, e) {
               return this.play().totalTime(t ? -this._delay : 0, Y(e))
           }
           ,
           e.play = function(t, e) {
               return null != t && this.seek(t, e),
               this.reversed(!1).paused(!1)
           }
           ,
           e.reverse = function(t, e) {
               return null != t && this.seek(t || this.totalDuration(), e),
               this.reversed(!0).paused(!1)
           }
           ,
           e.pause = function(t, e) {
               return null != t && this.seek(t, e),
               this.paused(!0)
           }
           ,
           e.resume = function() {
               return this.paused(!1)
           }
           ,
           e.reversed = function(t) {
               return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -.00000001 : 0)),
               this) : this._rts < 0
           }
           ,
           e.invalidate = function() {
               return this._initted = this._act = 0,
               this._zTime = -.00000001,
               this
           }
           ,
           e.isActive = function() {
               var t, e = this.parent || this._dp, i = this._start;
               return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8)
           }
           ,
           e.eventCallback = function(t, e, i) {
               var r = this.vars;
               return arguments.length > 1 ? (e ? (r[t] = e,
               i && (r[t + "Params"] = i),
               "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
               this) : r[t]
           }
           ,
           e.then = function(t) {
               var e = this;
               return new Promise(function(i) {
                   var r = U(t) ? t : tP
                     , n = function() {
                       var t = e.then;
                       e.then = null,
                       U(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                       i(r),
                       e.then = t
                   };
                   e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
               }
               )
           }
           ,
           e.kill = function() {
               ev(this)
           }
           ,
           t
       }();
       tR(eU.prototype, {
           _time: 0,
           _start: 0,
           _end: 0,
           _tTime: 0,
           _tDur: 0,
           _dirty: 0,
           _repeat: 0,
           _yoyo: !1,
           parent: null,
           _initted: !1,
           _rDelay: 0,
           _ts: 1,
           _dp: 0,
           ratio: 0,
           _zTime: -.00000001,
           _prom: 0,
           _ps: !1,
           _rts: 1
       });
       var eH = function(t) {
           function e(e, i) {
               var n;
               return void 0 === e && (e = {}),
               (n = t.call(this, e) || this).labels = {},
               n.smoothChildTiming = !!e.smoothChildTiming,
               n.autoRemoveChildren = !!e.autoRemoveChildren,
               n._sort = Y(e.sortChildren),
               T && tQ(e.parent || T, r(n), i),
               e.reversed && n.reverse(),
               e.paused && n.paused(!0),
               e.scrollTrigger && tJ(r(n), e.scrollTrigger),
               n
           }
           n(e, t);
           var i = e.prototype;
           return i.to = function(t, e, i) {
               return t7(0, arguments, this),
               this
           }
           ,
           i.from = function(t, e, i) {
               return t7(1, arguments, this),
               this
           }
           ,
           i.fromTo = function(t, e, i, r) {
               return t7(2, arguments, this),
               this
           }
           ,
           i.set = function(t, e, i) {
               return e.duration = 0,
               e.parent = this,
               tj(e).repeatDelay || (e.repeat = 0),
               e.immediateRender = !!e.immediateRender,
               new e9(t,e,t9(this, i),1),
               this
           }
           ,
           i.call = function(t, e, i) {
               return tQ(this, e9.delayedCall(0, t, e), i)
           }
           ,
           i.staggerTo = function(t, e, i, r, n, s, a) {
               return i.duration = e,
               i.stagger = i.stagger || r,
               i.onComplete = s,
               i.onCompleteParams = a,
               i.parent = this,
               new e9(t,i,t9(this, n)),
               this
           }
           ,
           i.staggerFrom = function(t, e, i, r, n, s, a) {
               return i.runBackwards = 1,
               tj(i).immediateRender = Y(i.immediateRender),
               this.staggerTo(t, e, i, r, n, s, a)
           }
           ,
           i.staggerFromTo = function(t, e, i, r, n, s, a, o) {
               return r.startAt = i,
               tj(r).immediateRender = Y(r.immediateRender),
               this.staggerTo(t, e, r, n, s, a, o)
           }
           ,
           i.render = function(t, e, i) {
               var r, n, s, a, o, u, l, h, c, d, f, p, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, x = t <= 0 ? 0 : tC(t), y = this._zTime < 0 != t < 0 && (this._initted || !v);
               if (this !== T && x > g && t >= 0 && (x = g),
               x !== this._tTime || i || y) {
                   if (m !== this._time && v && (x += this._time - m,
                   t += this._time - m),
                   r = x,
                   c = this._start,
                   u = !(h = this._ts),
                   y && (v || (m = this._zTime),
                   (t || !e) && (this._zTime = t)),
                   this._repeat) {
                       if (f = this._yoyo,
                       o = v + this._rDelay,
                       this._repeat < -1 && t < 0)
                           return this.totalTime(100 * o + t, e, i);
                       if (r = tC(x % o),
                       x === g ? (a = this._repeat,
                       r = v) : ((a = ~~(x / o)) && a === x / o && (r = v,
                       a--),
                       r > v && (r = v)),
                       d = tY(this._tTime, o),
                       !m && this._tTime && d !== a && (d = a),
                       f && 1 & a && (r = v - r,
                       p = 1),
                       a !== d && !this._lock) {
                           var D = f && 1 & d
                             , w = D === (f && 1 & a);
                           if (a < d && (D = !D),
                           m = D ? 0 : v,
                           this._lock = 1,
                           this.render(m || (p ? 0 : tC(a * o)), e, !v)._lock = 0,
                           this._tTime = x,
                           !e && this.parent && eg(this, "onRepeat"),
                           this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                           m && m !== this._time || !this._ts !== u || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur,
                           g = this._tDur,
                           w && (this._lock = 2,
                           m = D ? v : -.0001,
                           this.render(m, !0),
                           this.vars.repeatRefresh && !p && this.invalidate()),
                           this._lock = 0,
                           !this._ts && !u))
                               return this;
                           eL(this, p)
                       }
                   }
                   if (this._hasPause && !this._forcing && this._lock < 2 && (l = t6(this, tC(m), tC(r))) && (x -= r - (r = l._start)),
                   this._tTime = x,
                   this._time = r,
                   this._act = !h,
                   this._initted || (this._onUpdate = this.vars.onUpdate,
                   this._initted = 1,
                   this._zTime = t,
                   m = 0),
                   !m && r && !e && (eg(this, "onStart"),
                   this._tTime !== x))
                       return this;
                   if (r >= m && t >= 0)
                       for (n = this._first; n; ) {
                           if (s = n._next,
                           (n._act || r >= n._start) && n._ts && l !== n) {
                               if (n.parent !== this)
                                   return this.render(t, e, i);
                               if (n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i),
                               r !== this._time || !this._ts && !u) {
                                   l = 0,
                                   s && (x += this._zTime = -.00000001);
                                   break
                               }
                           }
                           n = s
                       }
                   else {
                       i = i || k,
                       n = this._last;
                       for (var b = t < 0 ? t : r; n; ) {
                           if (s = n._prev,
                           (n._act || b <= n._end) && n._ts && l !== n) {
                               if (n.parent !== this)
                                   return this.render(t, e, i);
                               if (n.render(n._ts > 0 ? (b - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (b - n._start) * n._ts, e, i),
                               r !== this._time || !this._ts && !u) {
                                   l = 0,
                                   s && (x += this._zTime = b ? -.00000001 : 1e-8);
                                   break
                               }
                           }
                           n = s
                       }
                   }
                   if (l && !e && (this.pause(),
                   l.render(r >= m ? 0 : -.00000001)._zTime = r >= m ? 1 : -1,
                   this._ts))
                       return this._start = c,
                       tZ(this),
                       this.render(t, e, i);
                   this._onUpdate && !e && eg(this, "onUpdate", !0),
                   (x === g && this._tTime >= this.totalDuration() || !x && m) && (c === this._start || Math.abs(h) !== Math.abs(this._ts)) && !this._lock && ((t || !v) && (x === g && this._ts > 0 || !x && this._ts < 0) && tG(this, 1),
                   e || t < 0 && !m || !x && !m && g || (eg(this, x === g && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                   this._prom && !(x < g && this.timeScale() > 0) && this._prom()))
               }
               return this
           }
           ,
           i.add = function(t, e) {
               var i = this;
               if (H(e) || (e = t9(this, e, t)),
               !(t instanceof eU)) {
                   if (K(t))
                       return t.forEach(function(t) {
                           return i.add(t, e)
                       }),
                       this;
                   if (G(t))
                       return this.addLabel(t, e);
                   if (!U(t))
                       return this;
                   t = e9.delayedCall(0, t)
               }
               return this !== t ? tQ(this, t, e) : this
           }
           ,
           i.getChildren = function(t, e, i, r) {
               void 0 === t && (t = !0),
               void 0 === e && (e = !0),
               void 0 === i && (i = !0),
               void 0 === r && (r = -1e8);
               for (var n = [], s = this._first; s; )
                   s._start >= r && (s instanceof e9 ? e && n.push(s) : (i && n.push(s),
                   t && n.push.apply(n, s.getChildren(!0, e, i)))),
                   s = s._next;
               return n
           }
           ,
           i.getById = function(t) {
               for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                   if (e[i].vars.id === t)
                       return e[i]
           }
           ,
           i.remove = function(t) {
               return G(t) ? this.removeLabel(t) : U(t) ? this.killTweensOf(t) : (tV(this, t),
               t === this._recent && (this._recent = this._last),
               tU(this))
           }
           ,
           i.totalTime = function(e, i) {
               return arguments.length ? (this._forcing = 1,
               !this._dp && this._ts && (this._start = tC(eC.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))),
               t.prototype.totalTime.call(this, e, i),
               this._forcing = 0,
               this) : this._tTime
           }
           ,
           i.addLabel = function(t, e) {
               return this.labels[t] = t9(this, e),
               this
           }
           ,
           i.removeLabel = function(t) {
               return delete this.labels[t],
               this
           }
           ,
           i.addPause = function(t, e, i) {
               var r = e9.delayedCall(0, e || tc, i);
               return r.data = "isPause",
               this._hasPause = 1,
               tQ(this, r, t9(this, t))
           }
           ,
           i.removePause = function(t) {
               var e = this._first;
               for (t = t9(this, t); e; )
                   e._start === t && "isPause" === e.data && tG(e),
                   e = e._next
           }
           ,
           i.killTweensOf = function(t, e, i) {
               for (var r = this.getTweensOf(t, i), n = r.length; n--; )
                   eZ !== r[n] && r[n].kill(t, e);
               return this
           }
           ,
           i.getTweensOf = function(t, e) {
               for (var i, r = [], n = es(t), s = this._first, a = H(e); s; )
                   s instanceof e9 ? tS(s._targets, n) && (a ? (!eZ || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
                   s = s._next;
               return r
           }
           ,
           i.tweenTo = function(t, e) {
               e = e || {};
               var i, r = this, n = t9(r, t), s = e, a = s.startAt, o = s.onStart, u = s.onStartParams, l = s.immediateRender, h = e9.to(r, tR({
                   ease: e.ease || "none",
                   lazy: !1,
                   immediateRender: !1,
                   time: n,
                   overwrite: "auto",
                   duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : r._time)) / r.timeScale()) || 1e-8,
                   onStart: function() {
                       if (r.pause(),
                       !i) {
                           var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : r._time)) / r.timeScale());
                           h._dur !== t && t3(h, t, 0, 1).render(h._time, !0, !0),
                           i = 1
                       }
                       o && o.apply(h, u || [])
                   }
               }, e));
               return l ? h.render(0) : h
           }
           ,
           i.tweenFromTo = function(t, e, i) {
               return this.tweenTo(e, tR({
                   startAt: {
                       time: t9(this, t)
                   }
               }, i))
           }
           ,
           i.recent = function() {
               return this._recent
           }
           ,
           i.nextLabel = function(t) {
               return void 0 === t && (t = this._time),
               em(this, t9(this, t))
           }
           ,
           i.previousLabel = function(t) {
               return void 0 === t && (t = this._time),
               em(this, t9(this, t), 1)
           }
           ,
           i.currentLabel = function(t) {
               return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
           }
           ,
           i.shiftChildren = function(t, e, i) {
               void 0 === i && (i = 0);
               for (var r, n = this._first, s = this.labels; n; )
                   n._start >= i && (n._start += t,
                   n._end += t),
                   n = n._next;
               if (e)
                   for (r in s)
                       s[r] >= i && (s[r] += t);
               return tU(this)
           }
           ,
           i.invalidate = function() {
               var e = this._first;
               for (this._lock = 0; e; )
                   e.invalidate(),
                   e = e._next;
               return t.prototype.invalidate.call(this)
           }
           ,
           i.clear = function(t) {
               void 0 === t && (t = !0);
               for (var e, i = this._first; i; )
                   e = i._next,
                   this.remove(i),
                   i = e;
               return this._dp && (this._time = this._tTime = this._pTime = 0),
               t && (this.labels = {}),
               tU(this)
           }
           ,
           i.totalDuration = function(t) {
               var e, i, r, n = 0, s = this, a = s._last, o = 1e8;
               if (arguments.length)
                   return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
               if (s._dirty) {
                   for (r = s.parent; a; )
                       e = a._prev,
                       a._dirty && a.totalDuration(),
                       (i = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1,
                       tQ(s, a, i - a._delay, 1)._lock = 0) : o = i,
                       i < 0 && a._ts && (n -= i,
                       (!r && !s._dp || r && r.smoothChildTiming) && (s._start += i / s._ts,
                       s._time -= i,
                       s._tTime -= i),
                       s.shiftChildren(-i, !1, -Infinity),
                       o = 0),
                       a._end > n && a._ts && (n = a._end),
                       a = e;
                   t3(s, s === T && s._time > n ? s._time : n, 1, 1),
                   s._dirty = 0
               }
               return s._tDur
           }
           ,
           e.updateRoot = function(t) {
               if (T._ts && (tF(T, tX(t, T)),
               F = eC.frame),
               eC.frame >= ty) {
                   ty += R.autoSleep || 120;
                   var e = T._first;
                   if ((!e || !e._ts) && R.autoSleep && eC._listeners.length < 2) {
                       for (; e && !e._ts; )
                           e = e._next;
                       e || eC.sleep()
                   }
               }
           }
           ,
           e
       }(eU);
       tR(eH.prototype, {
           _lock: 0,
           _hasPause: 0,
           _forcing: 0
       });
       var eq, eW, eY, eX, eZ, e$, eK = function(t, e, i, r, n, s, a) {
           var o, u, l, h, c, d, f, p, m = new ip(this._pt,t,e,0,1,io,null,n), g = 0, v = 0;
           for (m.b = i,
           m.e = r,
           i += "",
           r += "",
           (f = ~r.indexOf("random(")) && (r = ef(r)),
           s && (s(p = [i, r], t, e),
           i = p[0],
           r = p[1]),
           u = i.match(te) || []; o = te.exec(r); )
               h = o[0],
               c = r.substring(g, o.index),
               l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1),
               h !== u[v++] && (d = parseFloat(u[v - 1]) || 0,
               m._pt = {
                   _next: m._pt,
                   p: c || 1 === v ? c : ",",
                   s: d,
                   c: "=" === h.charAt(1) ? tA(d, h) - d : parseFloat(h) - d,
                   m: l && l < 4 ? Math.round : 0
               },
               g = te.lastIndex);
           return m.c = g < r.length ? r.substring(g, r.length) : "",
           m.fp = a,
           (ti.test(r) || f) && (m.e = 0),
           this._pt = m,
           m
       }, eQ = function(t, e, i, r, n, s, a, o, u, l) {
           U(r) && (r = r(n || 0, t, s));
           var h, c = t[e], d = "get" !== i ? i : U(c) ? u ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : c, f = U(c) ? u ? ie : it : e7;
           if (G(r) && (~r.indexOf("random(") && (r = ef(r)),
           "=" === r.charAt(1) && ((h = tA(d, r) + (ei(d) || 0)) || 0 === h) && (r = h)),
           !l || d !== r || e$)
               return isNaN(d * r) || "" === r ? (c || e in t || tu(e, r),
               eK.call(this, t, e, d, r, f, o || R.stringFilter, u)) : (h = new ip(this._pt,t,e,+d || 0,r - (d || 0),"boolean" == typeof c ? ia : is,0,f),
               u && (h.fp = u),
               a && h.modifier(a, this, t),
               this._pt = h)
       }, eJ = function(t, e, i, r, n) {
           if (U(t) && (t = e3(t, n, e, i, r)),
           !W(t) || t.style && t.nodeType || K(t) || $(t))
               return G(t) ? e3(t, n, e, i, r) : t;
           var s, a = {};
           for (s in t)
               a[s] = e3(t[s], n, e, i, r);
           return a
       }, e0 = function(t, e, i, r, n, s) {
           var a, o, u, l;
           if (tv[t] && !1 !== (a = new tv[t]).init(n, a.rawVars ? e[t] : eJ(e[t], r, n, s, i), i, r, s) && (i._pt = o = new ip(i._pt,n,t,0,1,a.render,a,0,a.priority),
           i !== O))
               for (u = i._ptLookup[i._targets.indexOf(n)],
               l = a._props.length; l--; )
                   u[a._props[l]] = o;
           return a
       }, e1 = function t(e, i) {
           var r, n, s, a, o, u, l, h, c, d, f, p, m, g = e.vars, v = g.ease, x = g.startAt, y = g.immediateRender, D = g.lazy, w = g.onUpdate, b = g.onUpdateParams, E = g.callbackScope, C = g.runBackwards, A = g.yoyoEase, S = g.keyframes, M = g.autoRevert, F = e._dur, O = e._startAt, P = e._targets, R = e.parent, L = R && "nested" === R.data ? R.parent._targets : P, I = "auto" === e._overwrite && !_, j = e.timeline;
           if (!j || S && v || (v = "none"),
           e._ease = eI(v, B.ease),
           e._yEase = A ? eB(eI(!0 === A ? v : A, B.ease)) : 0,
           A && e._yoyo && !e._repeat && (A = e._yEase,
           e._yEase = e._ease,
           e._ease = A),
           e._from = !j && !!g.runBackwards,
           !j || S && !g.stagger) {
               if (p = (h = P[0] ? t_(P[0]).harness : 0) && g[h.prop],
               r = tI(g, tp),
               O && (O.revert(C && F ? tf : td),
               O._lazy = 0),
               x) {
                   if (tG(e._startAt = e9.set(P, tR({
                       data: "isStart",
                       overwrite: !1,
                       parent: R,
                       immediateRender: !0,
                       lazy: Y(D),
                       startAt: null,
                       delay: 0,
                       onUpdate: w,
                       onUpdateParams: b,
                       callbackScope: E,
                       stagger: 0
                   }, x))),
                   i < 0 && (k || !y && !M) && e._startAt.revert(tf),
                   y && F && i <= 0) {
                       i && (e._zTime = i);
                       return
                   }
               } else if (C && F && !O) {
                   if (i && (y = !1),
                   s = tR({
                       overwrite: !1,
                       data: "isFromStart",
                       lazy: y && Y(D),
                       immediateRender: y,
                       stagger: 0,
                       parent: R
                   }, r),
                   p && (s[h.prop] = p),
                   tG(e._startAt = e9.set(P, s)),
                   i < 0 && (k ? e._startAt.revert(tf) : e._startAt.render(-1, !0)),
                   e._zTime = i,
                   y) {
                       if (!i)
                           return
                   } else
                       t(e._startAt, 1e-8)
               }
               for (n = 0,
               e._pt = e._ptCache = 0,
               D = F && Y(D) || D && !F; n < P.length; n++) {
                   if (l = (o = P[n])._gsap || tb(P)[n]._gsap,
                   e._ptLookup[n] = d = {},
                   tg[l.id] && tm.length && tM(),
                   f = L === P ? n : L.indexOf(o),
                   h && !1 !== (c = new h).init(o, p || r, e, f, L) && (e._pt = a = new ip(e._pt,o,c.name,0,1,c.render,c,0,c.priority),
                   c._props.forEach(function(t) {
                       d[t] = a
                   }),
                   c.priority && (u = 1)),
                   !h || p)
                       for (s in r)
                           tv[s] && (c = e0(s, r, e, f, o, L)) ? c.priority && (u = 1) : d[s] = a = eQ.call(e, o, s, "get", r[s], f, L, 0, g.stringFilter);
                   e._op && e._op[n] && e.kill(o, e._op[n]),
                   I && e._pt && (eZ = e,
                   T.killTweensOf(o, d, e.globalTime(i)),
                   m = !e.parent,
                   eZ = 0),
                   e._pt && D && (tg[l.id] = 1)
               }
               u && id(e),
               e._onInit && e._onInit(e)
           }
           e._onUpdate = w,
           e._initted = (!e._op || e._pt) && !m,
           S && i <= 0 && j.render(1e8, !0, !0)
       }, e2 = function(t, e, i, r, n, s, a) {
           var o, u, l, h, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
           if (!c)
               for (c = t._ptCache[e] = [],
               l = t._ptLookup,
               h = t._targets.length; h--; ) {
                   if ((o = l[h][e]) && o.d && o.d._pt)
                       for (o = o.d._pt; o && o.p !== e && o.fp !== e; )
                           o = o._next;
                   if (!o)
                       return e$ = 1,
                       t.vars[e] = "+=0",
                       e1(t, a),
                       e$ = 0,
                       1;
                   c.push(o)
               }
           for (h = c.length; h--; )
               (o = (u = c[h])._pt || u).s = (r || 0 === r) && !n ? r : o.s + (r || 0) + s * o.c,
               o.c = i - o.s,
               u.e && (u.e = tT(i) + ei(u.e)),
               u.b && (u.b = o.s + ei(u.b))
       }, e5 = function(t, e) {
           var i, r, n, s, a = t[0] ? t_(t[0]).harness : 0, o = a && a.aliases;
           if (!o)
               return e;
           for (r in i = tB({}, e),
           o)
               if (r in i)
                   for (n = (s = o[r].split(",")).length; n--; )
                       i[s[n]] = i[r];
           return i
       }, e6 = function(t, e, i, r) {
           var n, s, a = e.ease || r || "power1.inOut";
           if (K(e))
               s = i[t] || (i[t] = []),
               e.forEach(function(t, i) {
                   return s.push({
                       t: i / (e.length - 1) * 100,
                       v: t,
                       e: a
                   })
               });
           else
               for (n in e)
                   s = i[n] || (i[n] = []),
                   "ease" === n || s.push({
                       t: parseFloat(t),
                       v: e[n],
                       e: a
                   })
       }, e3 = function(t, e, i, r, n) {
           return U(t) ? t.call(e, i, r, n) : G(t) && ~t.indexOf("random(") ? ef(t) : t
       }, e4 = tw + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", e8 = {};
       tE(e4 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
           return e8[t] = 1
       });
       var e9 = function(t) {
           function e(e, i, n, s) {
               "number" == typeof i && (n.duration = i,
               i = n,
               n = null);
               var a, o, u, l, h, c, d, f, p, m = (a = t.call(this, s ? i : tj(i)) || this).vars, g = m.duration, v = m.delay, x = m.immediateRender, y = m.stagger, D = m.overwrite, w = m.keyframes, b = m.defaults, k = m.scrollTrigger, E = m.yoyoEase, C = i.parent || T, A = (K(e) || $(e) ? H(e[0]) : "length"in i) ? [e] : es(e);
               if (a._targets = A.length ? tb(A) : tl("GSAP target " + e + " not found. https://greensock.com", !R.nullTargetWarn) || [],
               a._ptLookup = [],
               a._overwrite = D,
               w || y || Z(g) || Z(v)) {
                   if (i = a.vars,
                   (o = a.timeline = new eH({
                       data: "nested",
                       defaults: b || {}
                   })).kill(),
                   o.parent = o._dp = r(a),
                   o._start = 0,
                   y || Z(g) || Z(v)) {
                       if (h = A.length,
                       f = y && eu(y),
                       W(y))
                           for (c in y)
                               ~e4.indexOf(c) && (p || (p = {}),
                               p[c] = y[c]);
                       for (u = 0; u < h; u++)
                           (l = tI(i, e8)).stagger = 0,
                           E && (l.yoyoEase = E),
                           p && tB(l, p),
                           d = A[u],
                           l.duration = +e3(g, r(a), u, d, A),
                           l.delay = (+e3(v, r(a), u, d, A) || 0) - a._delay,
                           !y && 1 === h && l.delay && (a._delay = v = l.delay,
                           a._start += v,
                           l.delay = 0),
                           o.to(d, l, f ? f(u, d, A) : 0),
                           o._ease = eS.none;
                       o.duration() ? g = v = 0 : a.timeline = 0
                   } else if (w) {
                       tj(tR(o.vars.defaults, {
                           ease: "none"
                       })),
                       o._ease = eI(w.ease || i.ease || "none");
                       var S, M, F, O = 0;
                       if (K(w))
                           w.forEach(function(t) {
                               return o.to(A, t, ">")
                           }),
                           o.duration();
                       else {
                           for (c in l = {},
                           w)
                               "ease" === c || "easeEach" === c || e6(c, w[c], l, w.easeEach);
                           for (c in l)
                               for (u = 0,
                               S = l[c].sort(function(t, e) {
                                   return t.t - e.t
                               }),
                               O = 0; u < S.length; u++)
                                   (F = {
                                       ease: (M = S[u]).e,
                                       duration: (M.t - (u ? S[u - 1].t : 0)) / 100 * g
                                   })[c] = M.v,
                                   o.to(A, F, O),
                                   O += F.duration;
                           o.duration() < g && o.to({}, {
                               duration: g - o.duration()
                           })
                       }
                   }
                   g || a.duration(g = o.duration())
               } else
                   a.timeline = 0;
               return !0 !== D || _ || (eZ = r(a),
               T.killTweensOf(A),
               eZ = 0),
               tQ(C, r(a), n),
               i.reversed && a.reverse(),
               i.paused && a.paused(!0),
               (x || !g && !w && a._start === tC(C._time) && Y(x) && function t(e) {
                   return !e || e._ts && t(e.parent)
               }(r(a)) && "nested" !== C.data) && (a._tTime = -.00000001,
               a.render(Math.max(0, -v))),
               k && tJ(r(a), k),
               a
           }
           n(e, t);
           var i = e.prototype;
           return i.render = function(t, e, i) {
               var r, n, s, a, o, u, l, h, c, d = this._time, f = this._tDur, p = this._dur, m = t < 0, g = t > f - 1e-8 && !m ? f : t < 1e-8 ? 0 : t;
               if (p) {
                   if (g !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                       if (r = g,
                       h = this.timeline,
                       this._repeat) {
                           if (a = p + this._rDelay,
                           this._repeat < -1 && m)
                               return this.totalTime(100 * a + t, e, i);
                           if (r = tC(g % a),
                           g === f ? (s = this._repeat,
                           r = p) : ((s = ~~(g / a)) && s === g / a && (r = p,
                           s--),
                           r > p && (r = p)),
                           (u = this._yoyo && 1 & s) && (c = this._yEase,
                           r = p - r),
                           o = tY(this._tTime, a),
                           r === d && !i && this._initted)
                               return this._tTime = g,
                               this;
                           s === o || (h && this._yEase && eL(h, u),
                           !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1,
                           this.render(tC(a * s), !0).invalidate()._lock = 0))
                       }
                       if (!this._initted) {
                           if (t0(this, m ? t : r, i, e))
                               return this._tTime = 0,
                               this;
                           if (d !== this._time)
                               return this;
                           if (p !== this._dur)
                               return this.render(t, e, i)
                       }
                       if (this._tTime = g,
                       this._time = r,
                       !this._act && this._ts && (this._act = 1,
                       this._lazy = 0),
                       this.ratio = l = (c || this._ease)(r / p),
                       this._from && (this.ratio = l = 1 - l),
                       r && !d && !e && (eg(this, "onStart"),
                       this._tTime !== g))
                           return this;
                       for (n = this._pt; n; )
                           n.r(l, n.d),
                           n = n._next;
                       h && h.render(t < 0 ? t : !r && u ? -.00000001 : h._dur * h._ease(r / this._dur), e, i) || this._startAt && (this._zTime = t),
                       this._onUpdate && !e && (m && tq(this, t, e, i),
                       eg(this, "onUpdate")),
                       this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && eg(this, "onRepeat"),
                       g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && tq(this, t, !0, !0),
                       (t || !p) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && tG(this, 1),
                       !e && !(m && !d) && (g || d) && (eg(this, g === f ? "onComplete" : "onReverseComplete", !0),
                       this._prom && !(g < f && this.timeScale() > 0) && this._prom()))
                   }
               } else
                   t5(this, t, e, i);
               return this
           }
           ,
           i.targets = function() {
               return this._targets
           }
           ,
           i.invalidate = function() {
               return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
               this._ptLookup = [],
               this.timeline && this.timeline.invalidate(),
               t.prototype.invalidate.call(this)
           }
           ,
           i.resetTo = function(t, e, i, r) {
               P || eC.wake(),
               this._ts || this.play();
               var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
               return (this._initted || e1(this, n),
               e2(this, t, e, i, r, this._ease(n / this._dur), n)) ? this.resetTo(t, e, i, r) : (t$(this, 0),
               this.parent || tN(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
               this.render(0))
           }
           ,
           i.kill = function(t, e) {
               if (void 0 === e && (e = "all"),
               !t && (!e || "all" === e))
                   return this._lazy = this._pt = 0,
                   this.parent ? ev(this) : this;
               if (this.timeline) {
                   var i = this.timeline.totalDuration();
                   return this.timeline.killTweensOf(t, e, eZ && !0 !== eZ.vars.overwrite)._first || ev(this),
                   this.parent && i !== this.timeline.totalDuration() && t3(this, this._dur * this.timeline._tDur / i, 0, 1),
                   this
               }
               var r, n, s, a, o, u, l, h = this._targets, c = t ? es(t) : h, d = this._ptLookup, f = this._pt;
               if ((!e || "all" === e) && tz(h, c))
                   return "all" === e && (this._pt = 0),
                   ev(this);
               for (r = this._op = this._op || [],
               "all" !== e && (G(e) && (o = {},
               tE(e, function(t) {
                   return o[t] = 1
               }),
               e = o),
               e = e5(h, e)),
               l = h.length; l--; )
                   if (~c.indexOf(h[l]))
                       for (o in n = d[l],
                       "all" === e ? (r[l] = e,
                       a = n,
                       s = {}) : (s = r[l] = r[l] || {},
                       a = e),
                       a)
                           (u = n && n[o]) && ("kill"in u.d && !0 !== u.d.kill(o) || tV(this, u, "_pt"),
                           delete n[o]),
                           "all" !== s && (s[o] = 1);
               return this._initted && !this._pt && f && ev(this),
               this
           }
           ,
           e.to = function(t, i) {
               return new e(t,i,arguments[2])
           }
           ,
           e.from = function(t, e) {
               return t7(1, arguments)
           }
           ,
           e.delayedCall = function(t, i, r, n) {
               return new e(i,0,{
                   immediateRender: !1,
                   lazy: !1,
                   overwrite: !1,
                   delay: t,
                   onComplete: i,
                   onReverseComplete: i,
                   onCompleteParams: r,
                   onReverseCompleteParams: r,
                   callbackScope: n
               })
           }
           ,
           e.fromTo = function(t, e, i) {
               return t7(2, arguments)
           }
           ,
           e.set = function(t, i) {
               return i.duration = 0,
               i.repeatDelay || (i.repeat = 0),
               new e(t,i)
           }
           ,
           e.killTweensOf = function(t, e, i) {
               return T.killTweensOf(t, e, i)
           }
           ,
           e
       }(eU);
       tR(e9.prototype, {
           _targets: [],
           _lazy: 0,
           _startAt: 0,
           _op: 0,
           _onInit: 0
       }),
       tE("staggerTo,staggerFrom,staggerFromTo", function(t) {
           e9[t] = function() {
               var e = new eH
                 , i = er.call(arguments, 0);
               return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
               e[t].apply(e, i)
           }
       });
       var e7 = function(t, e, i) {
           return t[e] = i
       }
         , it = function(t, e, i) {
           return t[e](i)
       }
         , ie = function(t, e, i, r) {
           return t[e](r.fp, i)
       }
         , ii = function(t, e, i) {
           return t.setAttribute(e, i)
       }
         , ir = function(t, e) {
           return U(t[e]) ? it : q(t[e]) && t.setAttribute ? ii : e7
       }
         , is = function(t, e) {
           return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
       }
         , ia = function(t, e) {
           return e.set(e.t, e.p, !!(e.s + e.c * t), e)
       }
         , io = function(t, e) {
           var i = e._pt
             , r = "";
           if (!t && e.b)
               r = e.b;
           else if (1 === t && e.e)
               r = e.e;
           else {
               for (; i; )
                   r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r,
                   i = i._next;
               r += e.c
           }
           e.set(e.t, e.p, r, e)
       }
         , iu = function(t, e) {
           for (var i = e._pt; i; )
               i.r(t, i.d),
               i = i._next
       }
         , il = function(t, e, i, r) {
           for (var n, s = this._pt; s; )
               n = s._next,
               s.p === r && s.modifier(t, e, i),
               s = n
       }
         , ih = function(t) {
           for (var e, i, r = this._pt; r; )
               i = r._next,
               (r.p !== t || r.op) && r.op !== t ? r.dep || (e = 1) : tV(this, r, "_pt"),
               r = i;
           return !e
       }
         , ic = function(t, e, i, r) {
           r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
       }
         , id = function(t) {
           for (var e, i, r, n, s = t._pt; s; ) {
               for (e = s._next,
               i = r; i && i.pr > s.pr; )
                   i = i._next;
               (s._prev = i ? i._prev : n) ? s._prev._next = s : r = s,
               (s._next = i) ? i._prev = s : n = s,
               s = e
           }
           t._pt = r
       }
         , ip = function() {
           function t(t, e, i, r, n, s, a, o, u) {
               this.t = e,
               this.s = r,
               this.c = n,
               this.p = i,
               this.r = s || is,
               this.d = a || this,
               this.set = o || e7,
               this.pr = u || 0,
               this._next = t,
               t && (t._prev = this)
           }
           return t.prototype.modifier = function(t, e, i) {
               this.mSet = this.mSet || this.set,
               this.set = ic,
               this.m = t,
               this.mt = i,
               this.tween = e
           }
           ,
           t
       }();
       tE(tw + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
           return tp[t] = 1
       }),
       ts.TweenMax = ts.TweenLite = e9,
       ts.TimelineLite = ts.TimelineMax = eH,
       T = new eH({
           sortChildren: !1,
           defaults: B,
           autoRemoveChildren: !0,
           id: "root",
           smoothChildTiming: !0
       }),
       R.stringFilter = eT;
       var im = []
         , ig = {}
         , iv = []
         , ix = 0
         , iy = function(t) {
           return (ig[t] || iv).map(function(t) {
               return t()
           })
       }
         , iD = function() {
           var t = Date.now()
             , e = [];
           t - ix > 2 && (iy("matchMediaInit"),
           im.forEach(function(t) {
               var i, r, n, s, a = t.queries, o = t.conditions;
               for (r in a)
                   (i = C.matchMedia(a[r]).matches) && (n = 1),
                   i !== o[r] && (o[r] = i,
                   s = 1);
               s && (t.revert(),
               n && e.push(t))
           }),
           iy("matchMediaRevert"),
           e.forEach(function(t) {
               return t.onMatch(t)
           }),
           ix = t,
           iy("matchMedia"))
       }
         , iw = function() {
           function t(t, e) {
               this.selector = e && ea(e),
               this.data = [],
               this._r = [],
               this.isReverted = !1,
               t && this.add(t)
           }
           var e = t.prototype;
           return e.add = function(t, e, i) {
               U(t) && (i = e,
               e = t,
               t = U);
               var r = this
                 , n = function() {
                   var t, n = E, s = r.selector;
                   return n && n.data.push(r),
                   i && (r.selector = ea(i)),
                   E = r,
                   t = e.apply(r, arguments),
                   U(t) && r._r.push(t),
                   E = n,
                   r.selector = s,
                   r.isReverted = !1,
                   t
               };
               return r.last = n,
               t === U ? n(r) : t ? r[t] = n : n
           }
           ,
           e.ignore = function(t) {
               var e = E;
               E = null,
               t(this),
               E = e
           }
           ,
           e.getTweens = function() {
               var e = [];
               return this.data.forEach(function(i) {
                   return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof e9 && i._targets[0] !== i.vars.onComplete && e.push(i)
               }),
               e
           }
           ,
           e.clear = function() {
               this._r.length = this.data.length = 0
           }
           ,
           e.kill = function(t, e) {
               var i = this;
               if (t ? (this.getTweens().map(function(t) {
                   return {
                       g: t.globalTime(0),
                       t: t
                   }
               }).sort(function(t, e) {
                   return e.g - t.g || -1
               }).forEach(function(e) {
                   return e.t.revert(t)
               }),
               this.data.forEach(function(e) {
                   return !(e instanceof eU) && e.revert && e.revert(t)
               }),
               this._r.forEach(function(e) {
                   return e(t, i)
               }),
               this.isReverted = !0) : this.data.forEach(function(t) {
                   return t.kill && t.kill()
               }),
               this.clear(),
               e) {
                   var r = im.indexOf(this);
                   ~r && im.splice(r, 1)
               }
           }
           ,
           e.revert = function(t) {
               this.kill(t || {})
           }
           ,
           t
       }()
         , ib = function() {
           function t(t) {
               this.contexts = [],
               this.scope = t
           }
           var e = t.prototype;
           return e.add = function(t, e, i) {
               W(t) || (t = {
                   matches: t
               });
               var r, n, s, a = new iw(0,i || this.scope), o = a.conditions = {};
               for (n in this.contexts.push(a),
               e = a.add("onMatch", e),
               a.queries = t,
               t)
                   "all" === n ? s = 1 : (r = C.matchMedia(t[n])) && (0 > im.indexOf(a) && im.push(a),
                   (o[n] = r.matches) && (s = 1),
                   r.addListener ? r.addListener(iD) : r.addEventListener("change", iD));
               return s && e(a),
               this
           }
           ,
           e.revert = function(t) {
               this.kill(t || {})
           }
           ,
           e.kill = function(t) {
               this.contexts.forEach(function(e) {
                   return e.kill(t, !0)
               })
           }
           ,
           t
       }()
         , i_ = {
           registerPlugin: function() {
               for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                   e[i] = arguments[i];
               e.forEach(function(t) {
                   return ex(t)
               })
           },
           timeline: function(t) {
               return new eH(t)
           },
           getTweensOf: function(t, e) {
               return T.getTweensOf(t, e)
           },
           getProperty: function(t, e, i, r) {
               G(t) && (t = es(t)[0]);
               var n = t_(t || {}).get
                 , s = i ? tP : tO;
               return "native" === i && (i = ""),
               t ? e ? s((tv[e] && tv[e].get || n)(t, e, i, r)) : function(e, i, r) {
                   return s((tv[e] && tv[e].get || n)(t, e, i, r))
               }
               : t
           },
           quickSetter: function(t, e, i) {
               if ((t = es(t)).length > 1) {
                   var r = t.map(function(t) {
                       return iC.quickSetter(t, e, i)
                   })
                     , n = r.length;
                   return function(t) {
                       for (var e = n; e--; )
                           r[e](t)
                   }
               }
               t = t[0] || {};
               var s = tv[e]
                 , a = t_(t)
                 , o = a.harness && (a.harness.aliases || {})[e] || e
                 , u = s ? function(e) {
                   var r = new s;
                   O._pt = 0,
                   r.init(t, i ? e + i : e, O, 0, [t]),
                   r.render(1, r),
                   O._pt && iu(1, O)
               }
               : a.set(t, o);
               return s ? u : function(e) {
                   return u(t, o, i ? e + i : e, a, 1)
               }
           },
           quickTo: function(t, e, i) {
               var r, n = iC.to(t, tB(((r = {})[e] = "+=0.1",
               r.paused = !0,
               r), i || {})), s = function(t, i, r) {
                   return n.resetTo(e, t, i, r)
               };
               return s.tween = n,
               s
           },
           isTweening: function(t) {
               return T.getTweensOf(t, !0).length > 0
           },
           defaults: function(t) {
               return t && t.ease && (t.ease = eI(t.ease, B.ease)),
               tL(B, t || {})
           },
           config: function(t) {
               return tL(R, t || {})
           },
           registerEffect: function(t) {
               var e = t.name
                 , i = t.effect
                 , r = t.plugins
                 , n = t.defaults
                 , s = t.extendTimeline;
               (r || "").split(",").forEach(function(t) {
                   return t && !tv[t] && !ts[t] && tl(e + " effect requires " + t + " plugin.")
               }),
               tx[e] = function(t, e, r) {
                   return i(es(t), tR(e || {}, n), r)
               }
               ,
               s && (eH.prototype[e] = function(t, i, r) {
                   return this.add(tx[e](t, W(i) ? i : (r = i) && {}, this), r)
               }
               )
           },
           registerEase: function(t, e) {
               eS[t] = eI(e)
           },
           parseEase: function(t, e) {
               return arguments.length ? eI(t, e) : eS
           },
           getById: function(t) {
               return T.getById(t)
           },
           exportRoot: function(t, e) {
               void 0 === t && (t = {});
               var i, r, n = new eH(t);
               for (n.smoothChildTiming = Y(t.smoothChildTiming),
               T.remove(n),
               n._dp = 0,
               n._time = n._tTime = T._time,
               i = T._first; i; )
                   r = i._next,
                   (e || !(!i._dur && i instanceof e9 && i.vars.onComplete === i._targets[0])) && tQ(n, i, i._start - i._delay),
                   i = r;
               return tQ(T, n, 0),
               n
           },
           context: function(t, e) {
               return t ? new iw(t,e) : E
           },
           matchMedia: function(t) {
               return new ib(t)
           },
           matchMediaRefresh: function() {
               return im.forEach(function(t) {
                   var e, i, r = t.conditions;
                   for (i in r)
                       r[i] && (r[i] = !1,
                       e = 1);
                   e && t.revert()
               }) || iD()
           },
           addEventListener: function(t, e) {
               var i = ig[t] || (ig[t] = []);
               ~i.indexOf(e) || i.push(e)
           },
           removeEventListener: function(t, e) {
               var i = ig[t]
                 , r = i && i.indexOf(e);
               r >= 0 && i.splice(r, 1)
           },
           utils: {
               wrap: function t(e, i, r) {
                   var n = i - e;
                   return K(e) ? ed(e, t(0, e.length), i) : et(r, function(t) {
                       return (n + (t - e) % n) % n + e
                   })
               },
               wrapYoyo: function t(e, i, r) {
                   var n = i - e
                     , s = 2 * n;
                   return K(e) ? ed(e, t(0, e.length - 1), i) : et(r, function(t) {
                       return t = (s + (t - e) % s) % s || 0,
                       e + (t > n ? s - t : t)
                   })
               },
               distribute: eu,
               random: ec,
               snap: eh,
               normalize: function(t, e, i) {
                   return ep(t, e, 0, 1, i)
               },
               getUnit: ei,
               clamp: function(t, e, i) {
                   return et(i, function(i) {
                       return ee(t, e, i)
                   })
               },
               splitColor: ew,
               toArray: es,
               selector: ea,
               mapRange: ep,
               pipe: function() {
                   for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                       e[i] = arguments[i];
                   return function(t) {
                       return e.reduce(function(t, e) {
                           return e(t)
                       }, t)
                   }
               },
               unitize: function(t, e) {
                   return function(i) {
                       return t(parseFloat(i)) + (e || ei(i))
                   }
               },
               interpolate: function t(e, i, r, n) {
                   var s = isNaN(e + i) ? 0 : function(t) {
                       return (1 - t) * e + t * i
                   }
                   ;
                   if (!s) {
                       var a, o, u, l, h, c = G(e), d = {};
                       if (!0 === r && (n = 1) && (r = null),
                       c)
                           e = {
                               p: e
                           },
                           i = {
                               p: i
                           };
                       else if (K(e) && !K(i)) {
                           for (o = 1,
                           u = [],
                           h = (l = e.length) - 2; o < l; o++)
                               u.push(t(e[o - 1], e[o]));
                           l--,
                           s = function(t) {
                               var e = Math.min(h, ~~(t *= l));
                               return u[e](t - e)
                           }
                           ,
                           r = i
                       } else
                           n || (e = tB(K(e) ? [] : {}, e));
                       if (!u) {
                           for (a in i)
                               eQ.call(d, e, a, "get", i[a]);
                           s = function(t) {
                               return iu(t, d) || (c ? e.p : e)
                           }
                       }
                   }
                   return et(r, s)
               },
               shuffle: eo
           },
           install: to,
           effects: tx,
           ticker: eC,
           updateRoot: eH.updateRoot,
           plugins: tv,
           globalTimeline: T,
           core: {
               PropTween: ip,
               globals: th,
               Tween: e9,
               Timeline: eH,
               Animation: eU,
               getCache: t_,
               _removeLinkedListItem: tV,
               reverting: function() {
                   return k
               },
               context: function(t) {
                   return t && E && (E.data.push(t),
                   t._ctx = E),
                   E
               },
               suppressOverwrites: function(t) {
                   return _ = t
               }
           }
       };
       tE("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
           return i_[t] = e9[t]
       }),
       eC.add(eH.updateRoot),
       O = i_.to({}, {
           duration: 0
       });
       var ik = function(t, e) {
           for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
               i = i._next;
           return i
       }
         , iE = function(t, e) {
           var i, r, n, s = t._targets;
           for (i in e)
               for (r = s.length; r--; )
                   (n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = ik(n, i)),
                   n && n.modifier && n.modifier(e[i], t, s[r], i))
       }
         , iT = function(t, e) {
           return {
               name: t,
               rawVars: 1,
               init: function(t, i, r) {
                   r._onInit = function(t) {
                       var r, n;
                       if (G(i) && (r = {},
                       tE(i, function(t) {
                           return r[t] = 1
                       }),
                       i = r),
                       e) {
                           for (n in r = {},
                           i)
                               r[n] = e(i[n]);
                           i = r
                       }
                       iE(t, i)
                   }
               }
           }
       }
         , iC = i_.registerPlugin({
           name: "attr",
           init: function(t, e, i, r, n) {
               var s, a, o;
               for (s in this.tween = i,
               e)
                   o = t.getAttribute(s) || "",
                   (a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s)).op = s,
                   a.b = o,
                   this._props.push(s)
           },
           render: function(t, e) {
               for (var i = e._pt; i; )
                   k ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
                   i = i._next
           }
       }, {
           name: "endArray",
           init: function(t, e) {
               for (var i = e.length; i--; )
                   this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
           }
       }, iT("roundProps", el), iT("modifiers"), iT("snap", eh)) || i_;
       e9.version = eH.version = iC.version = "3.11.0",
       M = 1,
       X() && eA(),
       eS.Power0,
       eS.Power1,
       eS.Power2,
       eS.Power3,
       eS.Power4,
       eS.Linear,
       eS.Quad,
       eS.Cubic,
       eS.Quart,
       eS.Quint,
       eS.Strong,
       eS.Elastic,
       eS.Back,
       eS.SteppedEase,
       eS.Bounce,
       eS.Sine,
       eS.Expo,
       eS.Circ;
       /*!
* CSSPlugin 3.11.0
* https://greensock.com
*
* Copyright 2008-2022, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
       var iA, iS, iM, iF, iO, iP, iR, iB = {}, iL = 180 / Math.PI, iI = Math.PI / 180, ij = Math.atan2, iz = /([A-Z])/g, iN = /(left|right|width|margin|padding|x)/i, iV = /[\s,\(]\S/, iG = {
           autoAlpha: "opacity,visibility",
           scale: "scaleX,scaleY",
           alpha: "opacity"
       }, iU = function(t, e) {
           return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
       }, iH = function(t, e) {
           return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
       }, iq = function(t, e) {
           return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
       }, iW = function(t, e) {
           var i = e.s + e.c * t;
           e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
       }, iY = function(t, e) {
           return e.set(e.t, e.p, t ? e.e : e.b, e)
       }, iX = function(t, e) {
           return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
       }, iZ = function(t, e, i) {
           return t.style[e] = i
       }, i$ = function(t, e, i) {
           return t.style.setProperty(e, i)
       }, iK = function(t, e, i) {
           return t._gsap[e] = i
       }, iQ = function(t, e, i) {
           return t._gsap.scaleX = t._gsap.scaleY = i
       }, iJ = function(t, e, i, r, n) {
           var s = t._gsap;
           s.scaleX = s.scaleY = i,
           s.renderTransform(n, s)
       }, i0 = function(t, e, i, r, n) {
           var s = t._gsap;
           s[e] = i,
           s.renderTransform(n, s)
       }, i1 = "transform", i2 = i1 + "Origin", i5 = function(t) {
           var e = this
             , i = this.target
             , r = i.style;
           if (t in iB) {
               if (this.tfm = this.tfm || {},
               "transform" !== t && (~(t = iG[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                   return e.tfm[t] = rc(i, t)
               }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : rc(i, t)),
               i._gsap.svg && (this.svg = i.getAttribute(t) || ""),
               this.props.indexOf(i1) >= 0)
                   return;
               t = i1
           }
           r && this.props.push(t, r[t])
       }, i6 = function(t) {
           t.translate && (t.removeProperty("translate"),
           t.removeProperty("scale"),
           t.removeProperty("rotate"))
       }, i3 = function() {
           var t, e, i = this.props, r = this.target, n = r.style, s = r._gsap;
           for (t = 0; t < i.length; t += 2)
               i[t + 1] ? n[i[t]] = i[t + 1] : n.removeProperty(i[t].replace(iz, "-$1").toLowerCase());
           if (this.tfm) {
               for (e in s.svg && r.setAttribute("transform", this.svg || ""),
               this.tfm)
                   s[e] = this.tfm[e];
               (t = iP()) && !t.isStart && !n[i1] && (i6(n),
               s.uncache = 1)
           }
       }, i4 = function(t, e) {
           var i = {
               target: t,
               props: [],
               revert: i3,
               save: i5
           };
           return e && e.split(",").forEach(function(t) {
               return i.save(t)
           }),
           i
       }, i8 = function(t, e) {
           var i = iA.createElementNS ? iA.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : iA.createElement(t);
           return i.style ? i : iA.createElement(t)
       }, i9 = function t(e, i, r) {
           var n = getComputedStyle(e);
           return n[i] || n.getPropertyValue(i.replace(iz, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && t(e, rt(i) || i, 1) || ""
       }, i7 = "O,Moz,ms,Ms,Webkit".split(","), rt = function(t, e, i) {
           var r = (e || iF).style
             , n = 5;
           if (t in r && !i)
               return t;
           for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(i7[n] + t in r); )
               ;
           return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? i7[n] : "") + t
       }, re = function() {
           "undefined" != typeof window && window.document && (iS = (iA = window.document).documentElement,
           iF = i8("div") || {
               style: {}
           },
           i8("div"),
           i2 = (i1 = rt(i1)) + "Origin",
           iF.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
           iR = !!rt("perspective"),
           iP = iC.core.reverting,
           iM = 1)
       }, ri = function t(e) {
           var i, r = i8("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, a = this.style.cssText;
           if (iS.appendChild(r),
           r.appendChild(this),
           this.style.display = "block",
           e)
               try {
                   i = this.getBBox(),
                   this._gsapBBox = this.getBBox,
                   this.getBBox = t
               } catch (t) {}
           else
               this._gsapBBox && (i = this._gsapBBox());
           return n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
           iS.removeChild(r),
           this.style.cssText = a,
           i
       }, rr = function(t, e) {
           for (var i = e.length; i--; )
               if (t.hasAttribute(e[i]))
                   return t.getAttribute(e[i])
       }, rn = function(t) {
           var e;
           try {
               e = t.getBBox()
           } catch (i) {
               e = ri.call(t, !0)
           }
           return e && (e.width || e.height) || t.getBBox === ri || (e = ri.call(t, !0)),
           !e || e.width || e.x || e.y ? e : {
               x: +rr(t, ["x", "cx", "x1"]) || 0,
               y: +rr(t, ["y", "cy", "y1"]) || 0,
               width: 0,
               height: 0
           }
       }, rs = function(t) {
           return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && rn(t))
       }, ra = function(t, e) {
           if (e) {
               var i = t.style;
               e in iB && e !== i2 && (e = i1),
               i.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
               i.removeProperty(e.replace(iz, "-$1").toLowerCase())) : i.removeAttribute(e)
           }
       }, ro = function(t, e, i, r, n, s) {
           var a = new ip(t._pt,e,i,0,1,s ? iX : iY);
           return t._pt = a,
           a.b = r,
           a.e = n,
           t._props.push(i),
           a
       }, ru = {
           deg: 1,
           rad: 1,
           turn: 1
       }, rl = {
           grid: 1,
           flex: 1
       }, rh = function t(e, i, r, n) {
           var s, a, o, u, l = parseFloat(r) || 0, h = (r + "").trim().substr((l + "").length) || "px", c = iF.style, d = iN.test(i), f = "svg" === e.tagName.toLowerCase(), p = (f ? "client" : "offset") + (d ? "Width" : "Height"), m = "px" === n, g = "%" === n;
           return n === h || !l || ru[n] || ru[h] ? l : ("px" === h || m || (l = t(e, i, r, "px")),
           u = e.getCTM && rs(e),
           (g || "%" === h) && (iB[i] || ~i.indexOf("adius"))) ? (s = u ? e.getBBox()[d ? "width" : "height"] : e[p],
           tT(g ? l / s * 100 : l / 100 * s)) : (c[d ? "width" : "height"] = 100 + (m ? h : n),
           a = ~i.indexOf("adius") || "em" === n && e.appendChild && !f ? e : e.parentNode,
           u && (a = (e.ownerSVGElement || {}).parentNode),
           a && a !== iA && a.appendChild || (a = iA.body),
           (o = a._gsap) && g && o.width && d && o.time === eC.time && !o.uncache) ? tT(l / o.width * 100) : ((g || "%" === h) && !rl[i9(a, "display")] && (c.position = i9(e, "position")),
           a === e && (c.position = "static"),
           a.appendChild(iF),
           s = iF[p],
           a.removeChild(iF),
           c.position = "absolute",
           d && g && ((o = t_(a)).time = eC.time,
           o.width = a[p]),
           tT(m ? s * l / 100 : s && l ? 100 / s * l : 0))
       }, rc = function(t, e, i, r) {
           var n;
           return iM || re(),
           e in iG && "transform" !== e && ~(e = iG[e]).indexOf(",") && (e = e.split(",")[0]),
           iB[e] && "transform" !== e ? (n = r_(t, r),
           n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : rk(i9(t, i2)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = rg[e] && rg[e](t, e, i) || i9(t, e) || tk(t, e) || ("opacity" === e ? 1 : 0)),
           i && !~(n + "").trim().indexOf(" ") ? rh(t, e, n, i) + i : n
       }, rd = function(t, e, i, r) {
           if (!i || "none" === i) {
               var n = rt(e, t, 1)
                 , s = n && i9(t, n, 1);
               s && s !== i ? (e = n,
               i = s) : "borderColor" === e && (i = i9(t, "borderTopColor"))
           }
           var a, o, u, l, h, c, d, f, p, m, g, v = new ip(this._pt,t.style,e,0,1,io), x = 0, y = 0;
           if (v.b = i,
           v.e = r,
           i += "",
           "auto" == (r += "") && (t.style[e] = r,
           r = i9(t, e) || r,
           t.style[e] = i),
           eT(a = [i, r]),
           i = a[0],
           r = a[1],
           u = i.match(tt) || [],
           (r.match(tt) || []).length) {
               for (; o = tt.exec(r); )
                   d = o[0],
                   p = r.substring(x, o.index),
                   h ? h = (h + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (h = 1),
                   d !== (c = u[y++] || "") && (l = parseFloat(c) || 0,
                   g = c.substr((l + "").length),
                   "=" === d.charAt(1) && (d = tA(l, d) + g),
                   f = parseFloat(d),
                   m = d.substr((f + "").length),
                   x = tt.lastIndex - m.length,
                   m || (m = m || R.units[e] || g,
                   x !== r.length || (r += m,
                   v.e += m)),
                   g !== m && (l = rh(t, e, c, m) || 0),
                   v._pt = {
                       _next: v._pt,
                       p: p || 1 === y ? p : ",",
                       s: l,
                       c: f - l,
                       m: h && h < 4 || "zIndex" === e ? Math.round : 0
                   });
               v.c = x < r.length ? r.substring(x, r.length) : ""
           } else
               v.r = "display" === e && "none" === r ? iX : iY;
           return ti.test(r) && (v.e = 0),
           this._pt = v,
           v
       }, rf = {
           top: "0%",
           bottom: "100%",
           left: "0%",
           right: "100%",
           center: "50%"
       }, rp = function(t) {
           var e = t.split(" ")
             , i = e[0]
             , r = e[1] || "50%";
           return ("top" === i || "bottom" === i || "left" === r || "right" === r) && (t = i,
           i = r,
           r = t),
           e[0] = rf[i] || i,
           e[1] = rf[r] || r,
           e.join(" ")
       }, rm = function(t, e) {
           if (e.tween && e.tween._time === e.tween._dur) {
               var i, r, n, s = e.t, a = s.style, o = e.u, u = s._gsap;
               if ("all" === o || !0 === o)
                   a.cssText = "",
                   r = 1;
               else
                   for (n = (o = o.split(",")).length; --n > -1; )
                       iB[i = o[n]] && (r = 1,
                       i = "transformOrigin" === i ? i2 : i1),
                       ra(s, i);
               r && (ra(s, i1),
               u && (u.svg && s.removeAttribute("transform"),
               r_(s, 1),
               u.uncache = 1,
               i6(a)))
           }
       }, rg = {
           clearProps: function(t, e, i, r, n) {
               if ("isFromStart" !== n.data) {
                   var s = t._pt = new ip(t._pt,e,i,0,0,rm);
                   return s.u = r,
                   s.pr = -10,
                   s.tween = n,
                   t._props.push(i),
                   1
               }
           }
       }, rv = [1, 0, 0, 1, 0, 0], rx = {}, ry = function(t) {
           return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
       }, rD = function(t) {
           var e = i9(t, i1);
           return ry(e) ? rv : e.substr(7).match(J).map(tT)
       }, rw = function(t, e) {
           var i, r, n, s, a = t._gsap || t_(t), o = t.style, u = rD(t);
           return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? rv : u : (u !== rv || t.offsetParent || t === iS || a.svg || (n = o.display,
           o.display = "block",
           (i = t.parentNode) && t.offsetParent || (s = 1,
           r = t.nextElementSibling,
           iS.appendChild(t)),
           u = rD(t),
           n ? o.display = n : ra(t, "display"),
           s && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : iS.removeChild(t))),
           e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
       }, rb = function(t, e, i, r, n, s) {
           var a, o, u, l, h = t._gsap, c = n || rw(t, !0), d = h.xOrigin || 0, f = h.yOrigin || 0, p = h.xOffset || 0, m = h.yOffset || 0, g = c[0], v = c[1], x = c[2], y = c[3], D = c[4], w = c[5], b = e.split(" "), _ = parseFloat(b[0]) || 0, k = parseFloat(b[1]) || 0;
           i ? c !== rv && (o = g * y - v * x) && (u = _ * (y / o) + k * (-x / o) + (x * w - y * D) / o,
           l = _ * (-v / o) + k * (g / o) - (g * w - v * D) / o,
           _ = u,
           k = l) : (_ = (a = rn(t)).x + (~b[0].indexOf("%") ? _ / 100 * a.width : _),
           k = a.y + (~(b[1] || b[0]).indexOf("%") ? k / 100 * a.height : k)),
           r || !1 !== r && h.smooth ? (D = _ - d,
           w = k - f,
           h.xOffset = p + (D * g + w * x) - D,
           h.yOffset = m + (D * v + w * y) - w) : h.xOffset = h.yOffset = 0,
           h.xOrigin = _,
           h.yOrigin = k,
           h.smooth = !!r,
           h.origin = e,
           h.originIsAbsolute = !!i,
           t.style[i2] = "0px 0px",
           s && (ro(s, h, "xOrigin", d, _),
           ro(s, h, "yOrigin", f, k),
           ro(s, h, "xOffset", p, h.xOffset),
           ro(s, h, "yOffset", m, h.yOffset)),
           t.setAttribute("data-svg-origin", _ + " " + k)
       }, r_ = function(t, e) {
           var i = t._gsap || new eG(t);
           if ("x"in i && !e && !i.uncache)
               return i;
           var r, n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b, _, k, E, T, C, A, S, M, F, O, P, B, L = t.style, I = i.scaleX < 0, j = getComputedStyle(t), z = i9(t, i2) || "0";
           return r = n = s = u = l = h = c = d = f = 0,
           a = o = 1,
           i.svg = !!(t.getCTM && rs(t)),
           j.translate && (("none" !== j.translate || "none" !== j.scale || "none" !== j.rotate) && (L[i1] = ("none" !== j.translate ? "translate3d(" + (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") + ("none" !== j.scale ? "scale(" + j.scale.split(" ").join(",") + ") " : "") + j[i1]),
           L.scale = L.rotate = L.translate = "none"),
           g = rw(t, i.svg),
           i.svg && (T = (!i.uncache || "0px 0px" === z) && !e && t.getAttribute("data-svg-origin"),
           rb(t, T || z, !!T || i.originIsAbsolute, !1 !== i.smooth, g)),
           p = i.xOrigin || 0,
           m = i.yOrigin || 0,
           g !== rv && (D = g[0],
           w = g[1],
           b = g[2],
           _ = g[3],
           r = k = g[4],
           n = E = g[5],
           6 === g.length ? (a = Math.sqrt(D * D + w * w),
           o = Math.sqrt(_ * _ + b * b),
           u = D || w ? ij(w, D) * iL : 0,
           (c = b || _ ? ij(b, _) * iL + u : 0) && (o *= Math.abs(Math.cos(c * iI))),
           i.svg && (r -= p - (p * D + m * b),
           n -= m - (p * w + m * _))) : (B = g[6],
           O = g[7],
           S = g[8],
           M = g[9],
           F = g[10],
           P = g[11],
           r = g[12],
           n = g[13],
           s = g[14],
           l = (v = ij(B, F)) * iL,
           v && (T = k * (x = Math.cos(-v)) + S * (y = Math.sin(-v)),
           C = E * x + M * y,
           A = B * x + F * y,
           S = -(k * y) + S * x,
           M = -(E * y) + M * x,
           F = -(B * y) + F * x,
           P = -(O * y) + P * x,
           k = T,
           E = C,
           B = A),
           h = (v = ij(-b, F)) * iL,
           v && (T = D * (x = Math.cos(-v)) - S * (y = Math.sin(-v)),
           C = w * x - M * y,
           A = b * x - F * y,
           P = _ * y + P * x,
           D = T,
           w = C,
           b = A),
           u = (v = ij(w, D)) * iL,
           v && (x = Math.cos(v),
           y = Math.sin(v),
           T = D * x + w * y,
           C = k * x + E * y,
           w = w * x - D * y,
           E = E * x - k * y,
           D = T,
           k = C),
           l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0,
           h = 180 - h),
           a = tT(Math.sqrt(D * D + w * w + b * b)),
           o = tT(Math.sqrt(E * E + B * B)),
           c = Math.abs(v = ij(k, E)) > 2e-4 ? v * iL : 0,
           f = P ? 1 / (P < 0 ? -P : P) : 0),
           i.svg && (T = t.getAttribute("transform"),
           i.forceCSS = t.setAttribute("transform", "") || !ry(i9(t, i1)),
           T && t.setAttribute("transform", T))),
           Math.abs(c) > 90 && 270 > Math.abs(c) && (I ? (a *= -1,
           c += u <= 0 ? 180 : -180,
           u += u <= 0 ? 180 : -180) : (o *= -1,
           c += c <= 0 ? 180 : -180)),
           e = e || i.uncache,
           i.x = r - ((i.xPercent = r && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px",
           i.y = n - ((i.yPercent = n && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px",
           i.z = s + "px",
           i.scaleX = tT(a),
           i.scaleY = tT(o),
           i.rotation = tT(u) + "deg",
           i.rotationX = tT(l) + "deg",
           i.rotationY = tT(h) + "deg",
           i.skewX = c + "deg",
           i.skewY = d + "deg",
           i.transformPerspective = f + "px",
           (i.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (L[i2] = rk(z)),
           i.xOffset = i.yOffset = 0,
           i.force3D = R.force3D,
           i.renderTransform = i.svg ? rS : iR ? rA : rT,
           i.uncache = 0,
           i
       }, rk = function(t) {
           return (t = t.split(" "))[0] + " " + t[1]
       }, rE = function(t, e, i) {
           var r = ei(e);
           return tT(parseFloat(e) + parseFloat(rh(t, "x", i + "px", r))) + r
       }, rT = function(t, e) {
           e.z = "0px",
           e.rotationY = e.rotationX = "0deg",
           e.force3D = 0,
           rA(t, e)
       }, rC = "0deg", rA = function(t, e) {
           var i = e || this
             , r = i.xPercent
             , n = i.yPercent
             , s = i.x
             , a = i.y
             , o = i.z
             , u = i.rotation
             , l = i.rotationY
             , h = i.rotationX
             , c = i.skewX
             , d = i.skewY
             , f = i.scaleX
             , p = i.scaleY
             , m = i.transformPerspective
             , g = i.force3D
             , v = i.target
             , x = i.zOrigin
             , y = ""
             , D = "auto" === g && t && 1 !== t || !0 === g;
           if (x && (h !== rC || l !== rC)) {
               var w, b = parseFloat(l) * iI, _ = Math.sin(b), k = Math.cos(b);
               s = rE(v, s, -(_ * (w = Math.cos(b = parseFloat(h) * iI)) * x)),
               a = rE(v, a, -(-Math.sin(b) * x)),
               o = rE(v, o, -(k * w * x) + x)
           }
           "0px" !== m && (y += "perspective(" + m + ") "),
           (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
           (D || "0px" !== s || "0px" !== a || "0px" !== o) && (y += "0px" !== o || D ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "),
           u !== rC && (y += "rotate(" + u + ") "),
           l !== rC && (y += "rotateY(" + l + ") "),
           h !== rC && (y += "rotateX(" + h + ") "),
           (c !== rC || d !== rC) && (y += "skew(" + c + ", " + d + ") "),
           (1 !== f || 1 !== p) && (y += "scale(" + f + ", " + p + ") "),
           v.style[i1] = y || "translate(0, 0)"
       }, rS = function(t, e) {
           var i, r, n, s, a, o = e || this, u = o.xPercent, l = o.yPercent, h = o.x, c = o.y, d = o.rotation, f = o.skewX, p = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, x = o.xOrigin, y = o.yOrigin, D = o.xOffset, w = o.yOffset, b = o.forceCSS, _ = parseFloat(h), k = parseFloat(c);
           d = parseFloat(d),
           f = parseFloat(f),
           (p = parseFloat(p)) && (f += p = parseFloat(p),
           d += p),
           d || f ? (d *= iI,
           f *= iI,
           i = Math.cos(d) * m,
           r = Math.sin(d) * m,
           n = -(Math.sin(d - f) * g),
           s = Math.cos(d - f) * g,
           f && (p *= iI,
           n *= a = Math.sqrt(1 + (a = Math.tan(f - p)) * a),
           s *= a,
           p && (i *= a = Math.sqrt(1 + (a = Math.tan(p)) * a),
           r *= a)),
           i = tT(i),
           r = tT(r),
           n = tT(n),
           s = tT(s)) : (i = m,
           s = g,
           r = n = 0),
           (_ && !~(h + "").indexOf("px") || k && !~(c + "").indexOf("px")) && (_ = rh(v, "x", h, "px"),
           k = rh(v, "y", c, "px")),
           (x || y || D || w) && (_ = tT(_ + x - (x * i + y * n) + D),
           k = tT(k + y - (x * r + y * s) + w)),
           (u || l) && (_ = tT(_ + u / 100 * (a = v.getBBox()).width),
           k = tT(k + l / 100 * a.height)),
           a = "matrix(" + i + "," + r + "," + n + "," + s + "," + _ + "," + k + ")",
           v.setAttribute("transform", a),
           b && (v.style[i1] = a)
       }, rM = function(t, e, i, r, n) {
           var s, a, o = G(n), u = parseFloat(n) * (o && ~n.indexOf("rad") ? iL : 1) - r, l = r + u + "deg";
           return o && ("short" === (s = n.split("_")[1]) && (u %= 360) != u % 180 && (u += u < 0 ? 360 : -360),
           "cw" === s && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === s && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))),
           t._pt = a = new ip(t._pt,e,i,r,u,iH),
           a.e = l,
           a.u = "deg",
           t._props.push(i),
           a
       }, rF = function(t, e) {
           for (var i in e)
               t[i] = e[i];
           return t
       }, rO = function(t, e, i) {
           var r, n, s, a, o, u, l, h = rF({}, i._gsap), c = i.style;
           for (n in h.svg ? (s = i.getAttribute("transform"),
           i.setAttribute("transform", ""),
           c[i1] = e,
           r = r_(i, 1),
           ra(i, i1),
           i.setAttribute("transform", s)) : (s = getComputedStyle(i)[i1],
           c[i1] = e,
           r = r_(i, 1),
           c[i1] = s),
           iB)
               (s = h[n]) !== (a = r[n]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) && (o = ei(s) !== (l = ei(a)) ? rh(i, n, s, l) : parseFloat(s),
               u = parseFloat(a),
               t._pt = new ip(t._pt,r,n,o,u - o,iU),
               t._pt.u = l || 0,
               t._props.push(n));
           rF(r, h)
       };
       tE("padding,margin,Width,Radius", function(t, e) {
           var i = "Right"
             , r = "Bottom"
             , n = "Left"
             , s = (e < 3 ? ["Top", i, r, n] : ["Top" + n, "Top" + i, r + i, r + n]).map(function(i) {
               return e < 2 ? t + i : "border" + i + t
           });
           rg[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
               var a, o;
               if (arguments.length < 4)
                   return 5 === (o = (a = s.map(function(e) {
                       return rc(t, e, i)
                   })).join(" ")).split(a[0]).length ? a[0] : o;
               a = (r + "").split(" "),
               o = {},
               s.forEach(function(t, e) {
                   return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
               }),
               t.init(e, o, n)
           }
       });
       var rP = {
           name: "css",
           register: re,
           targetTest: function(t) {
               return t.style && t.nodeType
           },
           init: function(t, e, i, r, n) {
               var s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w = this._props, b = t.style, _ = i.vars.startAt;
               for (c in iM || re(),
               this.styles = this.styles || i4(t),
               D = this.styles.props,
               this.tween = i,
               e)
                   if ("autoRound" !== c && (a = e[c],
                   !(tv[c] && e0(c, e, i, r, t, n)))) {
                       if (l = typeof a,
                       h = rg[c],
                       "function" === l && (l = typeof (a = a.call(i, r, t, n))),
                       "string" === l && ~a.indexOf("random(") && (a = ef(a)),
                       h)
                           h(this, t, c, a, i) && (y = 1);
                       else if ("--" === c.substr(0, 2))
                           s = (getComputedStyle(t).getPropertyValue(c) + "").trim(),
                           a += "",
                           ek.lastIndex = 0,
                           ek.test(s) || (d = ei(s),
                           f = ei(a)),
                           f ? d !== f && (s = rh(t, c, s, f) + f) : d && (a += d),
                           this.add(b, "setProperty", s, a, r, n, 0, 0, c),
                           w.push(c),
                           D.push(c, b[c]);
                       else if ("undefined" !== l) {
                           if (_ && c in _ ? (G(s = "function" == typeof _[c] ? _[c].call(i, r, t, n) : _[c]) && ~s.indexOf("random(") && (s = ef(s)),
                           ei(s + "") || (s += R.units[c] || ei(rc(t, c)) || ""),
                           "=" === (s + "").charAt(1) && (s = rc(t, c))) : s = rc(t, c),
                           u = parseFloat(s),
                           (p = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                           o = parseFloat(a),
                           c in iG && ("autoAlpha" === c && (1 === u && "hidden" === rc(t, "visibility") && o && (u = 0),
                           D.push("visibility", b.visibility),
                           ro(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                           "scale" !== c && "transform" !== c && ~(c = iG[c]).indexOf(",") && (c = c.split(",")[0])),
                           m = c in iB) {
                               if (this.styles.save(c),
                               g || ((v = t._gsap).renderTransform && !e.parseTransform || r_(t, e.parseTransform),
                               x = !1 !== e.smoothOrigin && v.smooth,
                               (g = this._pt = new ip(this._pt,b,i1,0,1,v.renderTransform,v,0,-1)).dep = 1),
                               "scale" === c)
                                   this._pt = new ip(this._pt,v,"scaleY",v.scaleY,(p ? tA(v.scaleY, p + o) : o) - v.scaleY || 0,iU),
                                   this._pt.u = 0,
                                   w.push("scaleY", c),
                                   c += "X";
                               else if ("transformOrigin" === c) {
                                   D.push(i2, b[i2]),
                                   a = rp(a),
                                   v.svg ? rb(t, a, 0, x, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && ro(this, v, "zOrigin", v.zOrigin, f),
                                   ro(this, b, c, rk(s), rk(a)));
                                   continue
                               } else if ("svgOrigin" === c) {
                                   rb(t, a, 1, x, 0, this);
                                   continue
                               } else if (c in rx) {
                                   rM(this, v, c, u, p ? tA(u, p + a) : a);
                                   continue
                               } else if ("smoothOrigin" === c) {
                                   ro(this, v, "smooth", v.smooth, a);
                                   continue
                               } else if ("force3D" === c) {
                                   v[c] = a;
                                   continue
                               } else if ("transform" === c) {
                                   rO(this, a, t);
                                   continue
                               }
                           } else
                               c in b || (c = rt(c) || c);
                           if (m || (o || 0 === o) && (u || 0 === u) && !iV.test(a) && c in b)
                               d = (s + "").substr((u + "").length),
                               o || (o = 0),
                               f = ei(a) || (c in R.units ? R.units[c] : d),
                               d !== f && (u = rh(t, c, s, f)),
                               this._pt = new ip(this._pt,m ? v : b,c,u,(p ? tA(u, p + o) : o) - u,m || "px" !== f && "zIndex" !== c || !1 === e.autoRound ? iU : iW),
                               this._pt.u = f || 0,
                               d !== f && "%" !== f && (this._pt.b = s,
                               this._pt.r = iq);
                           else if (c in b)
                               rd.call(this, t, c, s, p ? p + a : a);
                           else if (c in t)
                               this.add(t, c, s || t[c], p ? p + a : a, r, n);
                           else {
                               tu(c, a);
                               continue
                           }
                           m || D.push(c, b[c]),
                           w.push(c)
                       }
                   }
               y && id(this)
           },
           render: function(t, e) {
               if (e.tween._time || !iP())
                   for (var i = e._pt; i; )
                       i.r(t, i.d),
                       i = i._next;
               else
                   e.styles.revert()
           },
           get: rc,
           aliases: iG,
           getSetter: function(t, e, i) {
               var r = iG[e];
               return r && 0 > r.indexOf(",") && (e = r),
               e in iB && e !== i2 && (t._gsap.x || rc(t, "x")) ? i && iO === i ? "scale" === e ? iQ : iK : (iO = i || {},
               "scale" === e ? iJ : i0) : t.style && !q(t.style[e]) ? iZ : ~e.indexOf("-") ? i$ : ir(t, e)
           },
           core: {
               _removeProperty: ra,
               _getMatrix: rw
           }
       };
       iC.utils.checkPrefix = rt,
       iC.core.getStyleSaver = i4,
       o = tE((s = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (a = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
           iB[t] = 1
       }),
       tE(a, function(t) {
           R.units[t] = "deg",
           rx[t] = 1
       }),
       iG[o[13]] = s + "," + a,
       tE("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
           var e = t.split(":");
           iG[e[1]] = o[e[0]]
       }),
       tE("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
           R.units[t] = "px"
       }),
       iC.registerPlugin(rP);
       var rR = iC.registerPlugin(rP) || iC;
       rR.core.Tween
   },
   5320: function(t, e, i) {
       "use strict";
       i.d(e, {
           Z: function() {
               return s
           },
           c: function() {
               return a
           }
       });
       var r = i(1527)
         , n = i(959);
       let s = n.createContext({})
         , a = ({client: t, linkResolver: e, richTextComponents: i, internalLinkComponent: a, externalLinkComponent: o, children: u}) => {
           let l = n.useMemo( () => ({
               client: t,
               linkResolver: e,
               richTextComponents: i,
               internalLinkComponent: a,
               externalLinkComponent: o
           }), [t, e, i, a, o]);
           return (0,
           r.jsx)(s.Provider, {
               value: l,
               children: u
           })
       }
   },
   6162: function(t, e, i) {
       t.exports = i(1527)
   },
   5924: function(t, e, i) {
       "use strict";
       e.Z = function() {
           for (var t, e, i = 0, r = ""; i < arguments.length; )
               (t = arguments[i++]) && (e = function t(e) {
                   var i, r, n = "";
                   if ("string" == typeof e || "number" == typeof e)
                       n += e;
                   else if ("object" == typeof e) {
                       if (Array.isArray(e))
                           for (i = 0; i < e.length; i++)
                               e[i] && (r = t(e[i])) && (n && (n += " "),
                               n += r);
                       else
                           for (i in e)
                               e[i] && (n && (n += " "),
                               n += i)
                   }
                   return n
               }(t)) && (r && (r += " "),
               r += e);
           return r
       }
   },
   22: function(t, e, i) {
       var r;
       !function(e) {
           "use strict";
           var n = function() {}
             , s = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
               return setTimeout(t, 16)
           }
           ;
           function a() {
               var t = this;
               t.reads = [],
               t.writes = [],
               t.raf = s.bind(e),
               n("initialized", t)
           }
           function o(t) {
               t.scheduled || (t.scheduled = !0,
               t.raf(u.bind(null, t)),
               n("flush scheduled"))
           }
           function u(t) {
               n("flush");
               var e, i = t.writes, r = t.reads;
               try {
                   n("flushing reads", r.length),
                   t.runTasks(r),
                   n("flushing writes", i.length),
                   t.runTasks(i)
               } catch (t) {
                   e = t
               }
               if (t.scheduled = !1,
               (r.length || i.length) && o(t),
               e) {
                   if (n("task errored", e.message),
                   t.catch)
                       t.catch(e);
                   else
                       throw e
               }
           }
           function l(t, e) {
               var i = t.indexOf(e);
               return !!~i && !!t.splice(i, 1)
           }
           a.prototype = {
               constructor: a,
               runTasks: function(t) {
                   var e;
                   for (n("run tasks"); e = t.shift(); )
                       e()
               },
               measure: function(t, e) {
                   n("measure");
                   var i = e ? t.bind(e) : t;
                   return this.reads.push(i),
                   o(this),
                   i
               },
               mutate: function(t, e) {
                   n("mutate");
                   var i = e ? t.bind(e) : t;
                   return this.writes.push(i),
                   o(this),
                   i
               },
               clear: function(t) {
                   return n("clear", t),
                   l(this.reads, t) || l(this.writes, t)
               },
               extend: function(t) {
                   if (n("extend", t),
                   "object" != typeof t)
                       throw Error("expected object");
                   var e = Object.create(this);
                   return function(t, e) {
                       for (var i in e)
                           e.hasOwnProperty(i) && (t[i] = e[i])
                   }(e, t),
                   e.fastdom = this,
                   e.initialize && e.initialize(),
                   e
               },
               catch: null
           };
           var h = e.fastdom = e.fastdom || new a;
           void 0 !== (r = (function() {
               return h
           }
           ).call(h, i, h, t)) && (t.exports = r)
       }("undefined" != typeof window ? window : this)
   },
   5927: function(t, e, i) {
       "use strict";
       var r, n;
       t.exports = (null == (r = i.g.process) ? void 0 : r.env) && "object" == typeof (null == (n = i.g.process) ? void 0 : n.env) ? i.g.process : i(597)
   },
   14: function(t, e, i) {
       (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
           return i(3878)
       }
       ])
   },
   8666: function(t, e, i) {
       "use strict";
       i.d(e, {
           f: function() {
               return m
           },
           v: function() {
               return g
           }
       });
       var r = i(6162)
         , n = i(5924)
         , s = i(22)
         , a = i.n(s)
         , o = i(959)
         , u = i(1172)
         , l = i(3106)
         , h = i(8263)
         , c = i(8791)
         , d = i(3952)
         , f = i(2317)
         , p = i.n(f);
       let m = (0,
       o.forwardRef)( (t, e) => {
           let {children: i=null, className: s="", tag: f="div", active: m=!1, activeOnParentHover: g=!1, instant: v=!1, leaving: x=!1, controlled: y=!1, intersection: D=!1, intersectionConfig: w={
               rootMargin: "0px 0px -20px 0px"
           }, delayIn: b=0, delayOut: _=0, durationIn: k=1.4, durationOut: E=.3, effect: T= () => {}
           , dependencies: C=[], style: A={}, noPointerEvents: S=!1, ...M} = t
             , F = (0,
           o.useRef)(null)
             , O = function() {
               let t = (0,
               u.o)(t => {
                   let {fontsLoaded: e} = t;
                   return e
               }
               );
               return t
           }()
             , [P,R] = (0,
           l.s)({
               ...w,
               once: !0
           })
             , B = (0,
           u.o)(t => {
               let {isPreloaded: e} = t;
               return e
           }
           )
             , [L,I] = (0,
           o.useState)(!1)
             , [j,z] = (0,
           o.useState)(!1);
           return A = {
               "--delay-in": "".concat(b, "s"),
               "--delay-out": "".concat(_, "s"),
               "--duration-in": "".concat(k, "s"),
               "--duration-out": "".concat(E, "s"),
               ...A
           },
           (0,
           o.useImperativeHandle)(e, () => F.current),
           (0,
           h.Z)( () => {
               m && a().mutate( () => {
                   setTimeout( () => {
                       I(!0)
                   }
                   , 100)
               }
               )
           }
           ),
           (0,
           c.Z)( () => {
               a().mutate( () => {
                   I(m)
               }
               )
           }
           , [m]),
           (0,
           o.useEffect)( () => {
               D && I(P)
           }
           , [D, P]),
           (0,
           d.Z)( () => {
               if (!O)
                   return;
               let t = T();
               return z(!0),
               t
           }
           , [O, ...C]),
           (0,
           r.jsx)("".concat(f), {
               ...M,
               className: (0,
               n.Z)(p().animation, {
                   [p()["is-active"]]: B && L && j && !x,
                   [p()["is-instant"]]: v,
                   [p()["is-controlled"]]: y,
                   [p()["on-parent-hover"]]: g,
                   [p()["no-pointer-events"]]: S
               }, s),
               ref: t => {
                   D && !y && R(t),
                   F.current = t
               }
               ,
               style: A,
               children: i
           })
       }
       );
       m.displayName = "Animation";
       let g = t => {
           let {children: e=null, className: i="", tag: s="div", active: d=!1, instant: f=!1, leaving: m=!1, intersection: g=!1, intersectionConfig: v={
               rootMargin: "0px 0px -20px 0px"
           }, ...x} = t
             , [y,D] = (0,
           l.s)({
               ...v,
               once: !0
           })
             , w = (0,
           u.o)(t => {
               let {isPreloaded: e} = t;
               return e
           }
           )
             , [b,_] = (0,
           o.useState)(!1);
           return (0,
           h.Z)( () => {
               d && a().mutate( () => {
                   setTimeout( () => {
                       _(!0)
                   }
                   , 100)
               }
               )
           }
           ),
           (0,
           c.Z)( () => {
               a().mutate( () => {
                   _(d)
               }
               )
           }
           , [d]),
           (0,
           o.useEffect)( () => {
               g && a().mutate( () => {
                   _(y)
               }
               )
           }
           , [g, y]),
           (0,
           r.jsx)("".concat(s), {
               ...x,
               className: (0,
               n.Z)(p().controller, {
                   [p()["is-active"]]: w && b && !m,
                   "is-animation-active": w && b && !m,
                   [p()["is-instant"]]: f
               }, i),
               ref: t => {
                   g && D(t)
               }
               ,
               children: e
           })
       }
       ;
       g.displayName = "AnimationController"
   },
   330: function(t, e, i) {
       "use strict";
       i.d(e, {
           E: function() {
               return m
           }
       });
       var r = i(6162)
         , n = i(5924)
         , s = i(22)
         , a = i.n(s)
         , o = i(2206)
         , u = i(3693)
         , l = i.n(u)
         , h = i(959)
         , c = i(2909)
         , d = i(8666)
         , f = i(2317)
         , p = i.n(f);
       let m = (0,
       h.forwardRef)( (t, e) => {
           let {children: i=null, yPercent: s=120, centered: u=!1, className: f="", ...m} = t
             , g = (0,
           h.useRef)(null)
             , v = (0,
           h.useRef)(0)
             , [x,y] = (0,
           h.useState)(!1)
             , D = () => {
               if (!g.current)
                   return;
               o.p8.registerPlugin(l());
               let t = null
                 , e = null
                 , i = g.current;
               1 === i.childNodes.length && i.childNodes[0] && i.childNodes[0].tagName && "br" !== i.childNodes[0].tagName.toLowerCase() && (i = i.children[0]),
               t = new (l())(i,{
                   type: "lines",
                   linesClass: p().appear_inner
               }),
               e = new (l())(i,{
                   type: "lines",
                   linesClass: p().appear_line
               }),
               i.querySelectorAll(".".concat(p().appear_inner)).forEach( (t, e) => {
                   a().mutate( () => {
                       t.style.setProperty("--line-index", e)
                   }
                   )
               }
               ),
               v.current = e.lines.length,
               y(!0);
               let r = (0,
               c.D)(200, function() {
                   null == e || e.revert(),
                   null == t || t.revert(),
                   t = new (l())(i,{
                       type: "lines",
                       linesClass: p().appear_inner
                   }),
                   e = new (l())(i,{
                       type: "lines",
                       linesClass: p().appear_line
                   }),
                   i.querySelectorAll(".".concat(p().appear_inner)).forEach( (t, e) => {
                       t.style.setProperty("--line-index", e)
                   }
                   ),
                   v.current = e.lines.length
               });
               return window.addEventListener("resize", r),
               () => {
                   null == e || e.revert(),
                   null == t || t.revert(),
                   window.removeEventListener("resize", r)
               }
           }
           ;
           return (0,
           h.useImperativeHandle)(e, () => ({
               linesCount: v.current
           }), [v.current, x]),
           (0,
           r.jsx)(d.f, {
               ...m,
               effect: D,
               ref: g,
               className: (0,
               n.Z)(p().appear, p().childrenAsIB, {
                   [p()["not-ready"]]: !x,
                   [p()["-centered"]]: u
               }, f),
               style: {
                   "--y": "".concat(s, "%"),
                   ...m.style
               },
               children: i
           })
       }
       );
       m.displayName = "AppearLines"
   },
   7650: function(t, e, i) {
       "use strict";
       i.d(e, {
           g: function() {
               return l
           }
       });
       var r = i(6162)
         , n = i(5924)
         , s = i(959)
         , a = i(8666)
         , o = i(2317)
         , u = i.n(o);
       function l(t) {
           let {children: e=null, yPercent: i=120, style: o={}, className: l="", ...h} = t
             , c = (0,
           s.useRef)(null)
             , d = (0,
           s.useMemo)( () => ({
               "--y": "".concat(i, "%"),
               ...o
           }), [i, o]);
           return (0,
           r.jsx)(a.f, {
               ...h,
               ref: c,
               className: (0,
               n.Z)(u().appear, l),
               style: d,
               children: (0,
               r.jsx)("div", {
                   className: u().appear_inner,
                   children: e
               })
           })
       }
   },
   3521: function(t, e, i) {
       "use strict";
       i.d(e, {
           r: function() {
               return u
           }
       });
       var r = i(6162)
         , n = i(3551)
         , s = i.n(n)
         , a = i(959);
       let o = ["?demo=true"]
         , u = (0,
       a.forwardRef)( (t, e) => {
           let {href: i, children: n, className: a="", shallow: u, ...l} = t
             , h = {
               ref: e,
               className: a,
               ...l
           }
             , c = (null == i ? void 0 : i.startsWith("mailto:")) || (null == i ? void 0 : i.startsWith("tel:"))
             , d = !!o.find(t => null == i ? void 0 : i.includes(t))
             , f = null == i ? void 0 : i.startsWith("http");
           return "string" != typeof i ? (0,
           r.jsx)("button", {
               ...h,
               children: n
           }) : (0,
           r.jsx)(s(), {
               href: i,
               shallow: d || u,
               ...c || f ? {
                   target: "_blank",
                   rel: "noopener noreferrer"
               } : {},
               ...h,
               scroll: !1,
               children: n
           })
       }
       );
       u.displayName = "Link"
   },
   648: function(t, e, i) {
       "use strict";
       i.d(e, {
           M: function() {
               return o
           }
       });
       var r = i(6162)
         , n = i(4539)
         , s = i(6036)
         , a = i.n(s);
       function o(t) {
           let {left: e="00", number: i} = t
             , s = i.toString().padStart(2, "0");
           return (0,
           r.jsxs)("div", {
               className: a().inner,
               children: [(0,
               r.jsx)("span", {
                   className: a().number,
                   children: e
               }), (0,
               r.jsx)("span", {
                   className: a().dot,
                   children: (0,
                   r.jsx)(n.l, {
                       name: "circle"
                   })
               }), (0,
               r.jsx)("span", {
                   className: a().number,
                   children: s
               })]
           })
       }
   },
   3227: function(t, e, i) {
       "use strict";
       i.d(e, {
           v: function() {
               return h
           }
       });
       var r = i(6162)
         , n = i(5924)
         , s = i(7650)
         , a = i(330)
         , o = i(648)
         , u = i(9178)
         , l = i.n(u);
       function h(t) {
           let {client: e, date: i, title: u, number: h, delayIn: c=0, delayInCounter: d=0, active: f=null, leaving: p=null, controlled: m=null, className: g=null, titleTag: v="div"} = t;
           return d || (d = c),
           (0,
           r.jsxs)("div", {
               className: (0,
               n.Z)(l().wrapper, g),
               children: [(0,
               r.jsxs)("div", {
                   className: l().header,
                   children: [(0,
                   r.jsx)("div", {
                       className: l().counter,
                       children: (0,
                       r.jsx)(s.g, {
                           active: f,
                           leaving: p,
                           delayIn: c + .3,
                           yPercent: 200,
                           controlled: m,
                           children: (0,
                           r.jsx)(o.M, {
                               number: h
                           })
                       })
                   }), (0,
                   r.jsxs)("div", {
                       className: l().infos,
                       children: [!!e && (0,
                       r.jsx)("div", {
                           className: l().client,
                           children: (0,
                           r.jsx)(a.E, {
                               active: f,
                               leaving: p,
                               delayIn: c,
                               controlled: m,
                               children: e
                           })
                       }), !!i && (0,
                       r.jsx)("div", {
                           className: l().date,
                           children: (0,
                           r.jsx)(a.E, {
                               active: f,
                               leaving: p,
                               delayIn: c,
                               controlled: m,
                               children: i
                           })
                       })]
                   })]
               }), (0,
               r.jsx)("div", {
                   className: l().title,
                   children: (0,
                   r.jsx)(a.E, {
                       active: f,
                       leaving: p,
                       controlled: m,
                       tag: v,
                       delayIn: c,
                       dangerouslySetInnerHTML: {
                           __html: u
                       }
                   })
               })]
           })
       }
   },
   4539: function(t, e, i) {
       "use strict";
       i.d(e, {
           l: function() {
               return s
           }
       });
       var r = i(6162)
         , n = i(5924);
       let s = t => {
           let {name: e, className: i="", ...s} = t;
           return (0,
           r.jsx)("svg", {
               className: (0,
               n.Z)(i),
               ...s,
               children: (0,
               r.jsx)("use", {
                   xlinkHref: "#".concat(e)
               })
           })
       }
   },
   112: function(t, e, i) {
       "use strict";
       i.d(e, {
           Z: function() {
               return tN
           },
           s: function() {
               return tV
           }
       });
       var r = i(2206)
         , n = i(8874);
       function s(t) {
           let e = t[0]
             , i = t[1]
             , r = t[2];
           return Math.sqrt(e * e + i * i + r * r)
       }
       function a(t, e) {
           return t[0] = e[0],
           t[1] = e[1],
           t[2] = e[2],
           t
       }
       function o(t, e, i) {
           return t[0] = e[0] + i[0],
           t[1] = e[1] + i[1],
           t[2] = e[2] + i[2],
           t
       }
       function u(t, e, i) {
           return t[0] = e[0] - i[0],
           t[1] = e[1] - i[1],
           t[2] = e[2] - i[2],
           t
       }
       function l(t, e, i) {
           return t[0] = e[0] * i,
           t[1] = e[1] * i,
           t[2] = e[2] * i,
           t
       }
       function h(t) {
           let e = t[0]
             , i = t[1]
             , r = t[2];
           return e * e + i * i + r * r
       }
       function c(t, e) {
           let i = e[0]
             , r = e[1]
             , n = e[2]
             , s = i * i + r * r + n * n;
           return s > 0 && (s = 1 / Math.sqrt(s)),
           t[0] = e[0] * s,
           t[1] = e[1] * s,
           t[2] = e[2] * s,
           t
       }
       function d(t, e) {
           return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
       }
       function f(t, e, i) {
           let r = e[0]
             , n = e[1]
             , s = e[2]
             , a = i[0]
             , o = i[1]
             , u = i[2];
           return t[0] = n * u - s * o,
           t[1] = s * a - r * u,
           t[2] = r * o - n * a,
           t
       }
       let p = function() {
           let t = [0, 0, 0]
             , e = [0, 0, 0];
           return function(i, r) {
               a(t, i),
               a(e, r),
               c(t, t),
               c(e, e);
               let n = d(t, e);
               return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n)
           }
       }();
       class m extends Array {
           constructor(t=0, e=t, i=t) {
               return super(t, e, i),
               this
           }
           get x() {
               return this[0]
           }
           get y() {
               return this[1]
           }
           get z() {
               return this[2]
           }
           set x(t) {
               this[0] = t
           }
           set y(t) {
               this[1] = t
           }
           set z(t) {
               this[2] = t
           }
           set(t, e=t, i=t) {
               var r;
               return t.length ? this.copy(t) : (r = this,
               r[0] = t,
               r[1] = e,
               r[2] = i,
               this)
           }
           copy(t) {
               return a(this, t),
               this
           }
           add(t, e) {
               return e ? o(this, t, e) : o(this, this, t),
               this
           }
           sub(t, e) {
               return e ? u(this, t, e) : u(this, this, t),
               this
           }
           multiply(t) {
               if (t.length) {
                   var e;
                   e = this,
                   e[0] = this[0] * t[0],
                   e[1] = this[1] * t[1],
                   e[2] = this[2] * t[2]
               } else
                   l(this, this, t);
               return this
           }
           divide(t) {
               if (t.length) {
                   var e;
                   e = this,
                   e[0] = this[0] / t[0],
                   e[1] = this[1] / t[1],
                   e[2] = this[2] / t[2]
               } else
                   l(this, this, 1 / t);
               return this
           }
           inverse(t=this) {
               var e;
               return e = this,
               e[0] = 1 / t[0],
               e[1] = 1 / t[1],
               e[2] = 1 / t[2],
               this
           }
           len() {
               return s(this)
           }
           distance(t) {
               let e, i, r;
               return t ? Math.sqrt((e = t[0] - this[0]) * e + (i = t[1] - this[1]) * i + (r = t[2] - this[2]) * r) : s(this)
           }
           squaredLen() {
               return h(this)
           }
           squaredDistance(t) {
               let e, i, r;
               return t ? (e = t[0] - this[0]) * e + (i = t[1] - this[1]) * i + (r = t[2] - this[2]) * r : h(this)
           }
           negate(t=this) {
               var e;
               return e = this,
               e[0] = -t[0],
               e[1] = -t[1],
               e[2] = -t[2],
               this
           }
           cross(t, e) {
               return e ? f(this, t, e) : f(this, this, t),
               this
           }
           scale(t) {
               return l(this, this, t),
               this
           }
           normalize() {
               return c(this, this),
               this
           }
           dot(t) {
               return d(this, t)
           }
           equals(t) {
               return this[0] === t[0] && this[1] === t[1] && this[2] === t[2]
           }
           applyMatrix3(t) {
               var e;
               let i, r, n;
               return e = this,
               i = this[0],
               r = this[1],
               n = this[2],
               e[0] = i * t[0] + r * t[3] + n * t[6],
               e[1] = i * t[1] + r * t[4] + n * t[7],
               e[2] = i * t[2] + r * t[5] + n * t[8],
               this
           }
           applyMatrix4(t) {
               var e;
               let i, r, n, s;
               return e = this,
               i = this[0],
               r = this[1],
               n = this[2],
               s = (s = t[3] * i + t[7] * r + t[11] * n + t[15]) || 1,
               e[0] = (t[0] * i + t[4] * r + t[8] * n + t[12]) / s,
               e[1] = (t[1] * i + t[5] * r + t[9] * n + t[13]) / s,
               e[2] = (t[2] * i + t[6] * r + t[10] * n + t[14]) / s,
               this
           }
           scaleRotateMatrix4(t) {
               var e;
               let i, r, n, s;
               return e = this,
               i = this[0],
               r = this[1],
               n = this[2],
               s = (s = t[3] * i + t[7] * r + t[11] * n + t[15]) || 1,
               e[0] = (t[0] * i + t[4] * r + t[8] * n) / s,
               e[1] = (t[1] * i + t[5] * r + t[9] * n) / s,
               e[2] = (t[2] * i + t[6] * r + t[10] * n) / s,
               this
           }
           applyQuaternion(t) {
               var e;
               let i, r, n, s, a, o, u, l, h, c, d, f, p, m;
               return e = this,
               i = this[0],
               r = this[1],
               n = this[2],
               s = t[0],
               a = t[1],
               o = t[2],
               u = t[3],
               l = a * n - o * r,
               h = o * i - s * n,
               c = s * r - a * i,
               d = a * c - o * h,
               f = o * l - s * c,
               p = s * h - a * l,
               l *= m = 2 * u,
               h *= m,
               c *= m,
               d *= 2,
               f *= 2,
               p *= 2,
               e[0] = i + l + d,
               e[1] = r + h + f,
               e[2] = n + c + p,
               this
           }
           angle(t) {
               return p(this, t)
           }
           lerp(t, e) {
               var i;
               let r, n, s;
               return i = this,
               r = this[0],
               n = this[1],
               s = this[2],
               i[0] = r + e * (t[0] - r),
               i[1] = n + e * (t[1] - n),
               i[2] = s + e * (t[2] - s),
               this
           }
           clone() {
               return new m(this[0],this[1],this[2])
           }
           fromArray(t, e=0) {
               return this[0] = t[e],
               this[1] = t[e + 1],
               this[2] = t[e + 2],
               this
           }
           toArray(t=[], e=0) {
               return t[e] = this[0],
               t[e + 1] = this[1],
               t[e + 2] = this[2],
               t
           }
           transformDirection(t) {
               let e = this[0]
                 , i = this[1]
                 , r = this[2];
               return this[0] = t[0] * e + t[4] * i + t[8] * r,
               this[1] = t[1] * e + t[5] * i + t[9] * r,
               this[2] = t[2] * e + t[6] * i + t[10] * r,
               this.normalize()
           }
       }
       let g = new m
         , v = 1
         , x = 1
         , y = !1;
       class D {
           constructor(t, e={}) {
               for (let i in t.canvas || console.error("gl not passed as first argument to Geometry"),
               this.gl = t,
               this.attributes = e,
               this.id = v++,
               this.VAOs = {},
               this.drawRange = {
                   start: 0,
                   count: 0
               },
               this.instancedCount = 0,
               this.gl.renderer.bindVertexArray(null),
               this.gl.renderer.currentGeometry = null,
               this.glState = this.gl.renderer.state,
               e)
                   this.addAttribute(i, e[i])
           }
           addAttribute(t, e) {
               if (this.attributes[t] = e,
               e.id = x++,
               e.size = e.size || 1,
               e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
               e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
               e.normalized = e.normalized || !1,
               e.stride = e.stride || 0,
               e.offset = e.offset || 0,
               e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size),
               e.divisor = e.instanced || 0,
               e.needsUpdate = !1,
               e.usage = e.usage || this.gl.STATIC_DRAW,
               e.buffer || this.updateAttribute(e),
               e.divisor) {
                   if (this.isInstanced = !0,
                   this.instancedCount && this.instancedCount !== e.count * e.divisor)
                       return console.warn("geometry has multiple instanced buffers of different length"),
                       this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                   this.instancedCount = e.count * e.divisor
               } else
                   "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
           }
           updateAttribute(t) {
               let e = !t.buffer;
               e && (t.buffer = this.gl.createBuffer()),
               this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer),
               this.glState.boundBuffer = t.buffer),
               e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data),
               t.needsUpdate = !1
           }
           setIndex(t) {
               this.addAttribute("index", t)
           }
           setDrawRange(t, e) {
               this.drawRange.start = t,
               this.drawRange.count = e
           }
           setInstancedCount(t) {
               this.instancedCount = t
           }
           createVAO(t) {
               this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(),
               this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
               this.bindAttributes(t)
           }
           bindAttributes(t) {
               t.attributeLocations.forEach( (t, {name: e, type: i}) => {
                   if (!this.attributes[e]) {
                       console.warn(`active attribute ${e} not being supplied`);
                       return
                   }
                   let r = this.attributes[e];
                   this.gl.bindBuffer(r.target, r.buffer),
                   this.glState.boundBuffer = r.buffer;
                   let n = 1;
                   35674 === i && (n = 2),
                   35675 === i && (n = 3),
                   35676 === i && (n = 4);
                   let s = r.size / n
                     , a = 1 === n ? 0 : n * n * n
                     , o = 1 === n ? 0 : n * n;
                   for (let e = 0; e < n; e++)
                       this.gl.vertexAttribPointer(t + e, s, r.type, r.normalized, r.stride + a, r.offset + e * o),
                       this.gl.enableVertexAttribArray(t + e),
                       this.gl.renderer.vertexAttribDivisor(t + e, r.divisor)
               }
               ),
               this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
           }
           draw({program: t, mode: e=this.gl.TRIANGLES}) {
               this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t),
               this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
               this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`),
               t.attributeLocations.forEach( (t, {name: e}) => {
                   let i = this.attributes[e];
                   i.needsUpdate && this.updateAttribute(i)
               }
               );
               let i = 2;
               this.attributes.index?.type === this.gl.UNSIGNED_INT && (i = 4),
               this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * i, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * i) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
           }
           getPosition() {
               let t = this.attributes.position;
               return t.data ? t : y ? void 0 : (console.warn("No position buffer data found to compute bounds"),
               y = !0)
           }
           computeBoundingBox(t) {
               t || (t = this.getPosition());
               let e = t.data
                 , i = t.size;
               this.bounds || (this.bounds = {
                   min: new m,
                   max: new m,
                   center: new m,
                   scale: new m,
                   radius: 1 / 0
               });
               let r = this.bounds.min
                 , n = this.bounds.max
                 , s = this.bounds.center
                 , a = this.bounds.scale;
               r.set(Infinity),
               n.set(-1 / 0);
               for (let t = 0, s = e.length; t < s; t += i) {
                   let i = e[t]
                     , s = e[t + 1]
                     , a = e[t + 2];
                   r.x = Math.min(i, r.x),
                   r.y = Math.min(s, r.y),
                   r.z = Math.min(a, r.z),
                   n.x = Math.max(i, n.x),
                   n.y = Math.max(s, n.y),
                   n.z = Math.max(a, n.z)
               }
               a.sub(n, r),
               s.add(r, n).divide(2)
           }
           computeBoundingSphere(t) {
               t || (t = this.getPosition());
               let e = t.data
                 , i = t.size;
               this.bounds || this.computeBoundingBox(t);
               let r = 0;
               for (let t = 0, n = e.length; t < n; t += i)
                   g.fromArray(e, t),
                   r = Math.max(r, this.bounds.center.squaredDistance(g));
               this.bounds.radius = Math.sqrt(r)
           }
           remove() {
               for (let t in this.VAOs)
                   this.gl.renderer.deleteVertexArray(this.VAOs[t]),
                   delete this.VAOs[t];
               for (let t in this.attributes)
                   this.gl.deleteBuffer(this.attributes[t].buffer),
                   delete this.attributes[t]
           }
       }
       class w extends D {
           constructor(t, {width: e=1, height: i=1, widthSegments: r=1, heightSegments: n=1, attributes: s={}}={}) {
               let a = (r + 1) * (n + 1)
                 , o = r * n * 6
                 , u = new Float32Array(3 * a)
                 , l = new Float32Array(3 * a)
                 , h = new Float32Array(2 * a)
                 , c = o > 65536 ? new Uint32Array(o) : new Uint16Array(o);
               w.buildPlane(u, l, h, c, e, i, 0, r, n),
               Object.assign(s, {
                   position: {
                       size: 3,
                       data: u
                   },
                   normal: {
                       size: 3,
                       data: l
                   },
                   uv: {
                       size: 2,
                       data: h
                   },
                   index: {
                       data: c
                   }
               }),
               super(t, s)
           }
           static buildPlane(t, e, i, r, n, s, a, o, u, l=0, h=1, c=2, d=1, f=-1, p=0, m=0) {
               let g = p
                 , v = n / o
                 , x = s / u;
               for (let y = 0; y <= u; y++) {
                   let D = y * x - s / 2;
                   for (let s = 0; s <= o; s++,
                   p++) {
                       let x = s * v - n / 2;
                       if (t[3 * p + l] = x * d,
                       t[3 * p + h] = D * f,
                       t[3 * p + c] = a / 2,
                       e[3 * p + l] = 0,
                       e[3 * p + h] = 0,
                       e[3 * p + c] = a >= 0 ? 1 : -1,
                       i[2 * p] = s / o,
                       i[2 * p + 1] = 1 - y / u,
                       y === u || s === o)
                           continue;
                       let w = g + s + y * (o + 1)
                         , b = g + s + (y + 1) * (o + 1)
                         , _ = g + s + (y + 1) * (o + 1) + 1
                         , k = g + s + y * (o + 1) + 1;
                       r[6 * m] = w,
                       r[6 * m + 1] = b,
                       r[6 * m + 2] = k,
                       r[6 * m + 3] = b,
                       r[6 * m + 4] = _,
                       r[6 * m + 5] = k,
                       m++
                   }
               }
           }
       }
       let b = new m
         , _ = 1;
       class k {
           constructor({canvas: t=document.createElement("canvas"), width: e=300, height: i=150, dpr: r=1, alpha: n=!1, depth: s=!0, stencil: a=!1, antialias: o=!1, premultipliedAlpha: u=!1, preserveDrawingBuffer: l=!1, powerPreference: h="default", autoClear: c=!0, webgl: d=2}={}) {
               let f = {
                   alpha: n,
                   depth: s,
                   stencil: a,
                   antialias: o,
                   premultipliedAlpha: u,
                   preserveDrawingBuffer: l,
                   powerPreference: h
               };
               this.dpr = r,
               this.alpha = n,
               this.color = !0,
               this.depth = s,
               this.stencil = a,
               this.premultipliedAlpha = u,
               this.autoClear = c,
               this.id = _++,
               2 === d && (this.gl = t.getContext("webgl2", f)),
               this.isWebgl2 = !!this.gl,
               this.gl || (this.gl = t.getContext("webgl", f)),
               this.gl || console.error("unable to create webgl context"),
               this.gl.renderer = this,
               this.setSize(e, i),
               this.state = {},
               this.state.blendFunc = {
                   src: this.gl.ONE,
                   dst: this.gl.ZERO
               },
               this.state.blendEquation = {
                   modeRGB: this.gl.FUNC_ADD
               },
               this.state.cullFace = null,
               this.state.frontFace = this.gl.CCW,
               this.state.depthMask = !0,
               this.state.depthFunc = this.gl.LESS,
               this.state.premultiplyAlpha = !1,
               this.state.flipY = !1,
               this.state.unpackAlignment = 4,
               this.state.framebuffer = null,
               this.state.viewport = {
                   x: 0,
                   y: 0,
                   width: null,
                   height: null
               },
               this.state.textureUnits = [],
               this.state.activeTextureUnit = 0,
               this.state.boundBuffer = null,
               this.state.uniformLocations = new Map,
               this.state.currentProgram = null,
               this.extensions = {},
               this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
               this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
               this.getExtension("OES_texture_float_linear"),
               this.getExtension("OES_texture_half_float"),
               this.getExtension("OES_texture_half_float_linear"),
               this.getExtension("OES_element_index_uint"),
               this.getExtension("OES_standard_derivatives"),
               this.getExtension("EXT_sRGB"),
               this.getExtension("WEBGL_depth_texture"),
               this.getExtension("WEBGL_draw_buffers")),
               this.getExtension("WEBGL_compressed_texture_astc"),
               this.getExtension("EXT_texture_compression_bptc"),
               this.getExtension("WEBGL_compressed_texture_s3tc"),
               this.getExtension("WEBGL_compressed_texture_etc1"),
               this.getExtension("WEBGL_compressed_texture_pvrtc"),
               this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
               this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
               this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
               this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
               this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
               this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
               this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
               this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
               this.parameters = {},
               this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
               this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
           }
           setSize(t, e) {
               this.width = t,
               this.height = e,
               this.gl.canvas.width = t * this.dpr,
               this.gl.canvas.height = e * this.dpr,
               this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
                   width: t + "px",
                   height: e + "px"
               })
           }
           setViewport(t, e, i=0, r=0) {
               (this.state.viewport.width !== t || this.state.viewport.height !== e) && (this.state.viewport.width = t,
               this.state.viewport.height = e,
               this.state.viewport.x = i,
               this.state.viewport.y = r,
               this.gl.viewport(i, r, t, e))
           }
           setScissor(t, e, i=0, r=0) {
               this.gl.scissor(i, r, t, e)
           }
           enable(t) {
               !0 !== this.state[t] && (this.gl.enable(t),
               this.state[t] = !0)
           }
           disable(t) {
               !1 !== this.state[t] && (this.gl.disable(t),
               this.state[t] = !1)
           }
           setBlendFunc(t, e, i, r) {
               (this.state.blendFunc.src !== t || this.state.blendFunc.dst !== e || this.state.blendFunc.srcAlpha !== i || this.state.blendFunc.dstAlpha !== r) && (this.state.blendFunc.src = t,
               this.state.blendFunc.dst = e,
               this.state.blendFunc.srcAlpha = i,
               this.state.blendFunc.dstAlpha = r,
               void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, r) : this.gl.blendFunc(t, e))
           }
           setBlendEquation(t, e) {
               t = t || this.gl.FUNC_ADD,
               (this.state.blendEquation.modeRGB !== t || this.state.blendEquation.modeAlpha !== e) && (this.state.blendEquation.modeRGB = t,
               this.state.blendEquation.modeAlpha = e,
               void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
           }
           setCullFace(t) {
               this.state.cullFace !== t && (this.state.cullFace = t,
               this.gl.cullFace(t))
           }
           setFrontFace(t) {
               this.state.frontFace !== t && (this.state.frontFace = t,
               this.gl.frontFace(t))
           }
           setDepthMask(t) {
               this.state.depthMask !== t && (this.state.depthMask = t,
               this.gl.depthMask(t))
           }
           setDepthFunc(t) {
               this.state.depthFunc !== t && (this.state.depthFunc = t,
               this.gl.depthFunc(t))
           }
           activeTexture(t) {
               this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t,
               this.gl.activeTexture(this.gl.TEXTURE0 + t))
           }
           bindFramebuffer({target: t=this.gl.FRAMEBUFFER, buffer: e=null}={}) {
               this.state.framebuffer !== e && (this.state.framebuffer = e,
               this.gl.bindFramebuffer(t, e))
           }
           getExtension(t, e, i) {
               return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
               e) ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t]
           }
           sortOpaque(t, e) {
               return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
           }
           sortTransparent(t, e) {
               return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
           }
           sortUI(t, e) {
               return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
           }
           getRenderList({scene: t, camera: e, frustumCull: i, sort: r}) {
               let n = [];
               if (e && i && e.updateFrustum(),
               t.traverse(t => {
                   if (!t.visible)
                       return !0;
                   if (t.draw) {
                       if (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t))
                           return;
                       n.push(t)
                   }
               }
               ),
               r) {
                   let t = []
                     , i = []
                     , r = [];
                   n.forEach(n => {
                       n.program.transparent ? n.program.depthTest ? i.push(n) : r.push(n) : t.push(n),
                       n.zDepth = 0,
                       0 === n.renderOrder && n.program.depthTest && e && (n.worldMatrix.getTranslation(b),
                       b.applyMatrix4(e.projectionViewMatrix),
                       n.zDepth = b.z)
                   }
                   ),
                   t.sort(this.sortOpaque),
                   i.sort(this.sortTransparent),
                   r.sort(this.sortUI),
                   n = t.concat(i, r)
               }
               return n
           }
           render({scene: t, camera: e, target: i=null, update: r=!0, sort: n=!0, frustumCull: s=!0, clear: a}) {
               null === i ? (this.bindFramebuffer(),
               this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i),
               this.setViewport(i.width, i.height)),
               (a || this.autoClear && !1 !== a) && (this.depth && (!i || i.depth) && (this.enable(this.gl.DEPTH_TEST),
               this.setDepthMask(!0)),
               this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
               r && t.updateMatrixWorld(),
               e && e.updateMatrixWorld();
               let o = this.getRenderList({
                   scene: t,
                   camera: e,
                   frustumCull: s,
                   sort: n
               });
               o.forEach(t => {
                   t.draw({
                       camera: e
                   })
               }
               )
           }
       }
       function E(t, e, i) {
           let r = e[0]
             , n = e[1]
             , s = e[2]
             , a = e[3]
             , o = i[0]
             , u = i[1]
             , l = i[2]
             , h = i[3];
           return t[0] = r * h + a * o + n * l - s * u,
           t[1] = n * h + a * u + s * o - r * l,
           t[2] = s * h + a * l + r * u - n * o,
           t[3] = a * h - r * o - n * u - s * l,
           t
       }
       let T = function(t, e) {
           let i = e[0]
             , r = e[1]
             , n = e[2]
             , s = e[3]
             , a = i * i + r * r + n * n + s * s;
           return a > 0 && (a = 1 / Math.sqrt(a)),
           t[0] = i * a,
           t[1] = r * a,
           t[2] = n * a,
           t[3] = s * a,
           t
       };
       class C extends Array {
           constructor(t=0, e=0, i=0, r=1) {
               return super(t, e, i, r),
               this.onChange = () => {}
               ,
               this
           }
           get x() {
               return this[0]
           }
           get y() {
               return this[1]
           }
           get z() {
               return this[2]
           }
           get w() {
               return this[3]
           }
           set x(t) {
               this[0] = t,
               this.onChange()
           }
           set y(t) {
               this[1] = t,
               this.onChange()
           }
           set z(t) {
               this[2] = t,
               this.onChange()
           }
           set w(t) {
               this[3] = t,
               this.onChange()
           }
           identity() {
               var t;
               return t = this,
               t[0] = 0,
               t[1] = 0,
               t[2] = 0,
               t[3] = 1,
               this.onChange(),
               this
           }
           set(t, e, i, r) {
               var n;
               return t.length ? this.copy(t) : (n = this,
               n[0] = t,
               n[1] = e,
               n[2] = i,
               n[3] = r,
               this.onChange(),
               this)
           }
           rotateX(t) {
               var e, i;
               let r, n, s, a, o, u;
               return e = this,
               i = .5 * t,
               r = this[0],
               n = this[1],
               s = this[2],
               a = this[3],
               o = Math.sin(i),
               u = Math.cos(i),
               e[0] = r * u + a * o,
               e[1] = n * u + s * o,
               e[2] = s * u - n * o,
               e[3] = a * u - r * o,
               this.onChange(),
               this
           }
           rotateY(t) {
               var e, i;
               let r, n, s, a, o, u;
               return e = this,
               i = .5 * t,
               r = this[0],
               n = this[1],
               s = this[2],
               a = this[3],
               o = Math.sin(i),
               u = Math.cos(i),
               e[0] = r * u - s * o,
               e[1] = n * u + a * o,
               e[2] = s * u + r * o,
               e[3] = a * u - n * o,
               this.onChange(),
               this
           }
           rotateZ(t) {
               var e, i;
               let r, n, s, a, o, u;
               return e = this,
               i = .5 * t,
               r = this[0],
               n = this[1],
               s = this[2],
               a = this[3],
               o = Math.sin(i),
               u = Math.cos(i),
               e[0] = r * u + n * o,
               e[1] = n * u - r * o,
               e[2] = s * u + a * o,
               e[3] = a * u - s * o,
               this.onChange(),
               this
           }
           inverse(t=this) {
               var e;
               let i, r, n, s, a, o;
               return e = this,
               i = t[0],
               o = (a = i * i + (r = t[1]) * r + (n = t[2]) * n + (s = t[3]) * s) ? 1 / a : 0,
               e[0] = -i * o,
               e[1] = -r * o,
               e[2] = -n * o,
               e[3] = s * o,
               this.onChange(),
               this
           }
           conjugate(t=this) {
               var e;
               return e = this,
               e[0] = -t[0],
               e[1] = -t[1],
               e[2] = -t[2],
               e[3] = t[3],
               this.onChange(),
               this
           }
           copy(t) {
               var e;
               return e = this,
               e[0] = t[0],
               e[1] = t[1],
               e[2] = t[2],
               e[3] = t[3],
               this.onChange(),
               this
           }
           normalize(t=this) {
               return T(this, t),
               this.onChange(),
               this
           }
           multiply(t, e) {
               return e ? E(this, t, e) : E(this, this, t),
               this.onChange(),
               this
           }
           dot(t) {
               return this[0] * t[0] + this[1] * t[1] + this[2] * t[2] + this[3] * t[3]
           }
           fromMatrix3(t) {
               return !function(t, e) {
                   let i, r = e[0] + e[4] + e[8];
                   if (r > 0)
                       i = Math.sqrt(r + 1),
                       t[3] = .5 * i,
                       i = .5 / i,
                       t[0] = (e[5] - e[7]) * i,
                       t[1] = (e[6] - e[2]) * i,
                       t[2] = (e[1] - e[3]) * i;
                   else {
                       let r = 0;
                       e[4] > e[0] && (r = 1),
                       e[8] > e[3 * r + r] && (r = 2);
                       let n = (r + 1) % 3
                         , s = (r + 2) % 3;
                       i = Math.sqrt(e[3 * r + r] - e[3 * n + n] - e[3 * s + s] + 1),
                       t[r] = .5 * i,
                       i = .5 / i,
                       t[3] = (e[3 * n + s] - e[3 * s + n]) * i,
                       t[n] = (e[3 * n + r] + e[3 * r + n]) * i,
                       t[s] = (e[3 * s + r] + e[3 * r + s]) * i
                   }
               }(this, t),
               this.onChange(),
               this
           }
           fromEuler(t) {
               return !function(t, e, i="YXZ") {
                   let r = Math.sin(.5 * e[0])
                     , n = Math.cos(.5 * e[0])
                     , s = Math.sin(.5 * e[1])
                     , a = Math.cos(.5 * e[1])
                     , o = Math.sin(.5 * e[2])
                     , u = Math.cos(.5 * e[2]);
                   "XYZ" === i ? (t[0] = r * a * u + n * s * o,
                   t[1] = n * s * u - r * a * o,
                   t[2] = n * a * o + r * s * u,
                   t[3] = n * a * u - r * s * o) : "YXZ" === i ? (t[0] = r * a * u + n * s * o,
                   t[1] = n * s * u - r * a * o,
                   t[2] = n * a * o - r * s * u,
                   t[3] = n * a * u + r * s * o) : "ZXY" === i ? (t[0] = r * a * u - n * s * o,
                   t[1] = n * s * u + r * a * o,
                   t[2] = n * a * o + r * s * u,
                   t[3] = n * a * u - r * s * o) : "ZYX" === i ? (t[0] = r * a * u - n * s * o,
                   t[1] = n * s * u + r * a * o,
                   t[2] = n * a * o - r * s * u,
                   t[3] = n * a * u + r * s * o) : "YZX" === i ? (t[0] = r * a * u + n * s * o,
                   t[1] = n * s * u + r * a * o,
                   t[2] = n * a * o - r * s * u,
                   t[3] = n * a * u - r * s * o) : "XZY" === i && (t[0] = r * a * u - n * s * o,
                   t[1] = n * s * u - r * a * o,
                   t[2] = n * a * o + r * s * u,
                   t[3] = n * a * u + r * s * o)
               }(this, t, t.order),
               this
           }
           fromAxisAngle(t, e) {
               var i, r;
               let n;
               return i = this,
               n = Math.sin(r = .5 * e),
               i[0] = n * t[0],
               i[1] = n * t[1],
               i[2] = n * t[2],
               i[3] = Math.cos(r),
               this.onChange(),
               this
           }
           slerp(t, e) {
               var i;
               let r, n, s, a, o, u, l, h, c, d, f, p, m;
               return i = this,
               u = this[0],
               l = this[1],
               h = this[2],
               c = this[3],
               d = t[0],
               (n = u * d + l * (f = t[1]) + h * (p = t[2]) + c * (m = t[3])) < 0 && (n = -n,
               d = -d,
               f = -f,
               p = -p,
               m = -m),
               1 - n > 1e-6 ? (s = Math.sin(r = Math.acos(n)),
               a = Math.sin((1 - e) * r) / s,
               o = Math.sin(e * r) / s) : (a = 1 - e,
               o = e),
               i[0] = a * u + o * d,
               i[1] = a * l + o * f,
               i[2] = a * h + o * p,
               i[3] = a * c + o * m,
               this.onChange(),
               this
           }
           fromArray(t, e=0) {
               return this[0] = t[e],
               this[1] = t[e + 1],
               this[2] = t[e + 2],
               this[3] = t[e + 3],
               this.onChange(),
               this
           }
           toArray(t=[], e=0) {
               return t[e] = this[0],
               t[e + 1] = this[1],
               t[e + 2] = this[2],
               t[e + 3] = this[3],
               t
           }
       }
       function A(t, e, i) {
           let r = e[0]
             , n = e[1]
             , s = e[2]
             , a = e[3]
             , o = e[4]
             , u = e[5]
             , l = e[6]
             , h = e[7]
             , c = e[8]
             , d = e[9]
             , f = e[10]
             , p = e[11]
             , m = e[12]
             , g = e[13]
             , v = e[14]
             , x = e[15]
             , y = i[0]
             , D = i[1]
             , w = i[2]
             , b = i[3];
           return t[0] = y * r + D * o + w * c + b * m,
           t[1] = y * n + D * u + w * d + b * g,
           t[2] = y * s + D * l + w * f + b * v,
           t[3] = y * a + D * h + w * p + b * x,
           y = i[4],
           D = i[5],
           w = i[6],
           b = i[7],
           t[4] = y * r + D * o + w * c + b * m,
           t[5] = y * n + D * u + w * d + b * g,
           t[6] = y * s + D * l + w * f + b * v,
           t[7] = y * a + D * h + w * p + b * x,
           y = i[8],
           D = i[9],
           w = i[10],
           b = i[11],
           t[8] = y * r + D * o + w * c + b * m,
           t[9] = y * n + D * u + w * d + b * g,
           t[10] = y * s + D * l + w * f + b * v,
           t[11] = y * a + D * h + w * p + b * x,
           y = i[12],
           D = i[13],
           w = i[14],
           b = i[15],
           t[12] = y * r + D * o + w * c + b * m,
           t[13] = y * n + D * u + w * d + b * g,
           t[14] = y * s + D * l + w * f + b * v,
           t[15] = y * a + D * h + w * p + b * x,
           t
       }
       function S(t, e) {
           let i = e[0]
             , r = e[1]
             , n = e[2]
             , s = e[4]
             , a = e[5]
             , o = e[6]
             , u = e[8]
             , l = e[9]
             , h = e[10];
           return t[0] = Math.hypot(i, r, n),
           t[1] = Math.hypot(s, a, o),
           t[2] = Math.hypot(u, l, h),
           t
       }
       let M = function() {
           let t = [0, 0, 0];
           return function(e, i) {
               S(t, i);
               let r = 1 / 0
                 , n = 1 / 0
                 , s = 1 / 0
                 , a = i[0] * r
                 , o = i[1] * n
                 , u = i[2] * s
                 , l = i[4] * r
                 , h = i[5] * n
                 , c = i[6] * s
                 , d = i[8] * r
                 , f = i[9] * n
                 , p = i[10] * s
                 , m = a + h + p
                 , g = 0;
               return m > 0 ? (g = 2 * Math.sqrt(m + 1),
               e[3] = .25 * g,
               e[0] = (c - f) / g,
               e[1] = (d - u) / g,
               e[2] = (o - l) / g) : a > h && a > p ? (g = 2 * Math.sqrt(1 + a - h - p),
               e[3] = (c - f) / g,
               e[0] = .25 * g,
               e[1] = (o + l) / g,
               e[2] = (d + u) / g) : h > p ? (g = 2 * Math.sqrt(1 + h - a - p),
               e[3] = (d - u) / g,
               e[0] = (o + l) / g,
               e[1] = .25 * g,
               e[2] = (c + f) / g) : (g = 2 * Math.sqrt(1 + p - a - h),
               e[3] = (o - l) / g,
               e[0] = (d + u) / g,
               e[1] = (c + f) / g,
               e[2] = .25 * g),
               e
           }
       }();
       function F(t, e, i) {
           return t[0] = e[0] + i[0],
           t[1] = e[1] + i[1],
           t[2] = e[2] + i[2],
           t[3] = e[3] + i[3],
           t[4] = e[4] + i[4],
           t[5] = e[5] + i[5],
           t[6] = e[6] + i[6],
           t[7] = e[7] + i[7],
           t[8] = e[8] + i[8],
           t[9] = e[9] + i[9],
           t[10] = e[10] + i[10],
           t[11] = e[11] + i[11],
           t[12] = e[12] + i[12],
           t[13] = e[13] + i[13],
           t[14] = e[14] + i[14],
           t[15] = e[15] + i[15],
           t
       }
       function O(t, e, i) {
           return t[0] = e[0] - i[0],
           t[1] = e[1] - i[1],
           t[2] = e[2] - i[2],
           t[3] = e[3] - i[3],
           t[4] = e[4] - i[4],
           t[5] = e[5] - i[5],
           t[6] = e[6] - i[6],
           t[7] = e[7] - i[7],
           t[8] = e[8] - i[8],
           t[9] = e[9] - i[9],
           t[10] = e[10] - i[10],
           t[11] = e[11] - i[11],
           t[12] = e[12] - i[12],
           t[13] = e[13] - i[13],
           t[14] = e[14] - i[14],
           t[15] = e[15] - i[15],
           t
       }
       class P extends Array {
           constructor(t=1, e=0, i=0, r=0, n=0, s=1, a=0, o=0, u=0, l=0, h=1, c=0, d=0, f=0, p=0, m=1) {
               return super(t, e, i, r, n, s, a, o, u, l, h, c, d, f, p, m),
               this
           }
           get x() {
               return this[12]
           }
           get y() {
               return this[13]
           }
           get z() {
               return this[14]
           }
           get w() {
               return this[15]
           }
           set x(t) {
               this[12] = t
           }
           set y(t) {
               this[13] = t
           }
           set z(t) {
               this[14] = t
           }
           set w(t) {
               this[15] = t
           }
           set(t, e, i, r, n, s, a, o, u, l, h, c, d, f, p, m) {
               var g;
               return t.length ? this.copy(t) : (g = this,
               g[0] = t,
               g[1] = e,
               g[2] = i,
               g[3] = r,
               g[4] = n,
               g[5] = s,
               g[6] = a,
               g[7] = o,
               g[8] = u,
               g[9] = l,
               g[10] = h,
               g[11] = c,
               g[12] = d,
               g[13] = f,
               g[14] = p,
               g[15] = m,
               this)
           }
           translate(t, e=this) {
               var i;
               let r, n, s, a, o, u, l, h, c, d, f, p, m, g, v;
               return i = this,
               m = t[0],
               g = t[1],
               v = t[2],
               e === i ? (i[12] = e[0] * m + e[4] * g + e[8] * v + e[12],
               i[13] = e[1] * m + e[5] * g + e[9] * v + e[13],
               i[14] = e[2] * m + e[6] * g + e[10] * v + e[14],
               i[15] = e[3] * m + e[7] * g + e[11] * v + e[15]) : (r = e[0],
               n = e[1],
               s = e[2],
               a = e[3],
               o = e[4],
               u = e[5],
               l = e[6],
               h = e[7],
               c = e[8],
               d = e[9],
               f = e[10],
               p = e[11],
               i[0] = r,
               i[1] = n,
               i[2] = s,
               i[3] = a,
               i[4] = o,
               i[5] = u,
               i[6] = l,
               i[7] = h,
               i[8] = c,
               i[9] = d,
               i[10] = f,
               i[11] = p,
               i[12] = r * m + o * g + c * v + e[12],
               i[13] = n * m + u * g + d * v + e[13],
               i[14] = s * m + l * g + f * v + e[14],
               i[15] = a * m + h * g + p * v + e[15]),
               this
           }
           rotate(t, e, i=this) {
               var r;
               let n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b, _, k, E, T, C, A, S, M, F;
               return r = this,
               1e-6 > Math.abs(F = Math.hypot(A = e[0], S = e[1], M = e[2])) || (A *= F = 1 / F,
               S *= F,
               M *= F,
               n = Math.sin(t),
               a = 1 - (s = Math.cos(t)),
               o = i[0],
               u = i[1],
               l = i[2],
               h = i[3],
               c = i[4],
               d = i[5],
               f = i[6],
               p = i[7],
               m = i[8],
               g = i[9],
               v = i[10],
               x = i[11],
               y = A * A * a + s,
               D = S * A * a + M * n,
               w = M * A * a - S * n,
               b = A * S * a - M * n,
               _ = S * S * a + s,
               k = M * S * a + A * n,
               E = A * M * a + S * n,
               T = S * M * a - A * n,
               C = M * M * a + s,
               r[0] = o * y + c * D + m * w,
               r[1] = u * y + d * D + g * w,
               r[2] = l * y + f * D + v * w,
               r[3] = h * y + p * D + x * w,
               r[4] = o * b + c * _ + m * k,
               r[5] = u * b + d * _ + g * k,
               r[6] = l * b + f * _ + v * k,
               r[7] = h * b + p * _ + x * k,
               r[8] = o * E + c * T + m * C,
               r[9] = u * E + d * T + g * C,
               r[10] = l * E + f * T + v * C,
               r[11] = h * E + p * T + x * C,
               i !== r && (r[12] = i[12],
               r[13] = i[13],
               r[14] = i[14],
               r[15] = i[15])),
               this
           }
           scale(t, e=this) {
               var i, r;
               let n, s, a;
               return i = this,
               n = (r = "number" == typeof t ? [t, t, t] : t)[0],
               s = r[1],
               a = r[2],
               i[0] = e[0] * n,
               i[1] = e[1] * n,
               i[2] = e[2] * n,
               i[3] = e[3] * n,
               i[4] = e[4] * s,
               i[5] = e[5] * s,
               i[6] = e[6] * s,
               i[7] = e[7] * s,
               i[8] = e[8] * a,
               i[9] = e[9] * a,
               i[10] = e[10] * a,
               i[11] = e[11] * a,
               i[12] = e[12],
               i[13] = e[13],
               i[14] = e[14],
               i[15] = e[15],
               this
           }
           add(t, e) {
               return e ? F(this, t, e) : F(this, this, t),
               this
           }
           sub(t, e) {
               return e ? O(this, t, e) : O(this, this, t),
               this
           }
           multiply(t, e) {
               if (t.length)
                   e ? A(this, t, e) : A(this, this, t);
               else {
                   var i;
                   i = this,
                   i[0] = this[0] * t,
                   i[1] = this[1] * t,
                   i[2] = this[2] * t,
                   i[3] = this[3] * t,
                   i[4] = this[4] * t,
                   i[5] = this[5] * t,
                   i[6] = this[6] * t,
                   i[7] = this[7] * t,
                   i[8] = this[8] * t,
                   i[9] = this[9] * t,
                   i[10] = this[10] * t,
                   i[11] = this[11] * t,
                   i[12] = this[12] * t,
                   i[13] = this[13] * t,
                   i[14] = this[14] * t,
                   i[15] = this[15] * t
               }
               return this
           }
           identity() {
               var t;
               return t = this,
               t[0] = 1,
               t[1] = 0,
               t[2] = 0,
               t[3] = 0,
               t[4] = 0,
               t[5] = 1,
               t[6] = 0,
               t[7] = 0,
               t[8] = 0,
               t[9] = 0,
               t[10] = 1,
               t[11] = 0,
               t[12] = 0,
               t[13] = 0,
               t[14] = 0,
               t[15] = 1,
               this
           }
           copy(t) {
               var e;
               return e = this,
               e[0] = t[0],
               e[1] = t[1],
               e[2] = t[2],
               e[3] = t[3],
               e[4] = t[4],
               e[5] = t[5],
               e[6] = t[6],
               e[7] = t[7],
               e[8] = t[8],
               e[9] = t[9],
               e[10] = t[10],
               e[11] = t[11],
               e[12] = t[12],
               e[13] = t[13],
               e[14] = t[14],
               e[15] = t[15],
               this
           }
           fromPerspective({fov: t, aspect: e, near: i, far: r}={}) {
               var n;
               let s, a;
               return n = this,
               s = 1 / Math.tan(t / 2),
               a = 1 / (i - r),
               n[0] = s / e,
               n[1] = 0,
               n[2] = 0,
               n[3] = 0,
               n[4] = 0,
               n[5] = s,
               n[6] = 0,
               n[7] = 0,
               n[8] = 0,
               n[9] = 0,
               n[10] = (r + i) * a,
               n[11] = -1,
               n[12] = 0,
               n[13] = 0,
               n[14] = 2 * r * i * a,
               n[15] = 0,
               this
           }
           fromOrthogonal({left: t, right: e, bottom: i, top: r, near: n, far: s}) {
               var a;
               let o, u, l;
               return a = this,
               o = 1 / (t - e),
               u = 1 / (i - r),
               l = 1 / (n - s),
               a[0] = -2 * o,
               a[1] = 0,
               a[2] = 0,
               a[3] = 0,
               a[4] = 0,
               a[5] = -2 * u,
               a[6] = 0,
               a[7] = 0,
               a[8] = 0,
               a[9] = 0,
               a[10] = 2 * l,
               a[11] = 0,
               a[12] = (t + e) * o,
               a[13] = (r + i) * u,
               a[14] = (s + n) * l,
               a[15] = 1,
               this
           }
           fromQuaternion(t) {
               var e;
               let i, r, n, s, a, o, u, l, h, c, d, f, p, m, g, v;
               return e = this,
               i = t[0],
               r = t[1],
               n = t[2],
               s = t[3],
               a = i + i,
               o = r + r,
               u = n + n,
               l = i * a,
               h = r * a,
               c = r * o,
               d = n * a,
               f = n * o,
               p = n * u,
               m = s * a,
               g = s * o,
               v = s * u,
               e[0] = 1 - c - p,
               e[1] = h + v,
               e[2] = d - g,
               e[3] = 0,
               e[4] = h - v,
               e[5] = 1 - l - p,
               e[6] = f + m,
               e[7] = 0,
               e[8] = d + g,
               e[9] = f - m,
               e[10] = 1 - l - c,
               e[11] = 0,
               e[12] = 0,
               e[13] = 0,
               e[14] = 0,
               e[15] = 1,
               this
           }
           setPosition(t) {
               return this.x = t[0],
               this.y = t[1],
               this.z = t[2],
               this
           }
           inverse(t=this) {
               var e;
               let i, r, n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b, _, k, E, T, C, A, S, M;
               return e = this,
               i = t[0],
               r = t[1],
               n = t[2],
               s = t[3],
               a = t[4],
               o = t[5],
               u = t[6],
               l = t[7],
               h = t[8],
               c = t[9],
               d = t[10],
               f = t[11],
               p = t[12],
               m = t[13],
               g = t[14],
               v = t[15],
               x = i * o - r * a,
               y = i * u - n * a,
               D = i * l - s * a,
               w = r * u - n * o,
               b = r * l - s * o,
               _ = n * l - s * u,
               k = h * m - c * p,
               E = h * g - d * p,
               T = h * v - f * p,
               C = c * g - d * m,
               A = c * v - f * m,
               (M = x * (S = d * v - f * g) - y * A + D * C + w * T - b * E + _ * k) && (M = 1 / M,
               e[0] = (o * S - u * A + l * C) * M,
               e[1] = (n * A - r * S - s * C) * M,
               e[2] = (m * _ - g * b + v * w) * M,
               e[3] = (d * b - c * _ - f * w) * M,
               e[4] = (u * T - a * S - l * E) * M,
               e[5] = (i * S - n * T + s * E) * M,
               e[6] = (g * D - p * _ - v * y) * M,
               e[7] = (h * _ - d * D + f * y) * M,
               e[8] = (a * A - o * T + l * k) * M,
               e[9] = (r * T - i * A - s * k) * M,
               e[10] = (p * b - m * D + v * x) * M,
               e[11] = (c * D - h * b - f * x) * M,
               e[12] = (o * E - a * C - u * k) * M,
               e[13] = (i * C - r * E + n * k) * M,
               e[14] = (m * y - p * w - g * x) * M,
               e[15] = (h * w - c * y + d * x) * M),
               this
           }
           compose(t, e, i) {
               var r;
               let n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b;
               return r = this,
               n = t[0],
               s = t[1],
               a = t[2],
               o = t[3],
               u = n + n,
               l = s + s,
               h = a + a,
               c = n * u,
               d = n * l,
               f = n * h,
               p = s * l,
               m = s * h,
               g = a * h,
               v = o * u,
               x = o * l,
               y = o * h,
               D = i[0],
               w = i[1],
               b = i[2],
               r[0] = (1 - (p + g)) * D,
               r[1] = (d + y) * D,
               r[2] = (f - x) * D,
               r[3] = 0,
               r[4] = (d - y) * w,
               r[5] = (1 - (c + g)) * w,
               r[6] = (m + v) * w,
               r[7] = 0,
               r[8] = (f + x) * b,
               r[9] = (m - v) * b,
               r[10] = (1 - (c + p)) * b,
               r[11] = 0,
               r[12] = e[0],
               r[13] = e[1],
               r[14] = e[2],
               r[15] = 1,
               this
           }
           getRotation(t) {
               return M(t, this),
               this
           }
           getTranslation(t) {
               var e;
               return (e = t)[0] = this[12],
               e[1] = this[13],
               e[2] = this[14],
               this
           }
           getScaling(t) {
               return S(t, this),
               this
           }
           getMaxScaleOnAxis() {
               let t, e, i, r, n, s, a, o, u;
               return t = this[0],
               e = this[1],
               i = this[2],
               r = this[4],
               n = this[5],
               s = this[6],
               Math.sqrt(Math.max(t * t + e * e + i * i, r * r + n * n + s * s, (a = this[8]) * a + (o = this[9]) * o + (u = this[10]) * u))
           }
           lookAt(t, e, i) {
               var r;
               let n, s, a, o, u, l, h, c, d, f, p, m, g;
               return r = this,
               n = t[0],
               s = t[1],
               a = t[2],
               o = i[0],
               u = i[1],
               l = i[2],
               0 == (f = (h = n - e[0]) * h + (c = s - e[1]) * c + (d = a - e[2]) * d) ? d = 1 : (h *= f = 1 / Math.sqrt(f),
               c *= f,
               d *= f),
               0 == (f = (p = u * d - l * c) * p + (m = l * h - o * d) * m + (g = o * c - u * h) * g) && (l ? o += 1e-6 : u ? l += 1e-6 : u += 1e-6,
               f = (p = u * d - l * c) * p + (m = l * h - o * d) * m + (g = o * c - u * h) * g),
               p *= f = 1 / Math.sqrt(f),
               m *= f,
               g *= f,
               r[0] = p,
               r[1] = m,
               r[2] = g,
               r[3] = 0,
               r[4] = c * g - d * m,
               r[5] = d * p - h * g,
               r[6] = h * m - c * p,
               r[7] = 0,
               r[8] = h,
               r[9] = c,
               r[10] = d,
               r[11] = 0,
               r[12] = n,
               r[13] = s,
               r[14] = a,
               r[15] = 1,
               this
           }
           determinant() {
               let t, e, i, r, n, s, a, o, u, l, h, c, d, f, p, m;
               return t = this[0],
               e = this[1],
               i = this[2],
               r = this[3],
               n = this[4],
               s = this[5],
               a = this[6],
               o = this[7],
               u = this[8],
               l = this[9],
               h = this[10],
               c = this[11],
               d = this[12],
               f = this[13],
               p = this[14],
               (t * s - e * n) * (h * (m = this[15]) - c * p) - (t * a - i * n) * (l * m - c * f) + (t * o - r * n) * (l * p - h * f) + (e * a - i * s) * (u * m - c * d) - (e * o - r * s) * (u * p - h * d) + (i * o - r * a) * (u * f - l * d)
           }
           fromArray(t, e=0) {
               return this[0] = t[e],
               this[1] = t[e + 1],
               this[2] = t[e + 2],
               this[3] = t[e + 3],
               this[4] = t[e + 4],
               this[5] = t[e + 5],
               this[6] = t[e + 6],
               this[7] = t[e + 7],
               this[8] = t[e + 8],
               this[9] = t[e + 9],
               this[10] = t[e + 10],
               this[11] = t[e + 11],
               this[12] = t[e + 12],
               this[13] = t[e + 13],
               this[14] = t[e + 14],
               this[15] = t[e + 15],
               this
           }
           toArray(t=[], e=0) {
               return t[e] = this[0],
               t[e + 1] = this[1],
               t[e + 2] = this[2],
               t[e + 3] = this[3],
               t[e + 4] = this[4],
               t[e + 5] = this[5],
               t[e + 6] = this[6],
               t[e + 7] = this[7],
               t[e + 8] = this[8],
               t[e + 9] = this[9],
               t[e + 10] = this[10],
               t[e + 11] = this[11],
               t[e + 12] = this[12],
               t[e + 13] = this[13],
               t[e + 14] = this[14],
               t[e + 15] = this[15],
               t
           }
       }
       let R = new P;
       class B extends Array {
           constructor(t=0, e=t, i=t, r="YXZ") {
               return super(t, e, i),
               this.order = r,
               this.onChange = () => {}
               ,
               this
           }
           get x() {
               return this[0]
           }
           get y() {
               return this[1]
           }
           get z() {
               return this[2]
           }
           set x(t) {
               this[0] = t,
               this.onChange()
           }
           set y(t) {
               this[1] = t,
               this.onChange()
           }
           set z(t) {
               this[2] = t,
               this.onChange()
           }
           set(t, e=t, i=t) {
               return t.length ? this.copy(t) : (this[0] = t,
               this[1] = e,
               this[2] = i,
               this.onChange(),
               this)
           }
           copy(t) {
               return this[0] = t[0],
               this[1] = t[1],
               this[2] = t[2],
               this.onChange(),
               this
           }
           reorder(t) {
               return this.order = t,
               this.onChange(),
               this
           }
           fromRotationMatrix(t, e=this.order) {
               return !function(t, e, i="YXZ") {
                   "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)),
                   .99999 > Math.abs(e[8]) ? (t[0] = Math.atan2(-e[9], e[10]),
                   t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]),
                   t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)),
                   .99999 > Math.abs(e[9]) ? (t[1] = Math.atan2(e[8], e[10]),
                   t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]),
                   t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)),
                   .99999 > Math.abs(e[6]) ? (t[1] = Math.atan2(-e[2], e[10]),
                   t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0,
                   t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)),
                   .99999 > Math.abs(e[2]) ? (t[0] = Math.atan2(e[6], e[10]),
                   t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0,
                   t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)),
                   .99999 > Math.abs(e[1]) ? (t[0] = Math.atan2(-e[9], e[5]),
                   t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0,
                   t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)),
                   .99999 > Math.abs(e[4]) ? (t[0] = Math.atan2(e[6], e[5]),
                   t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]),
                   t[1] = 0))
               }(this, t, e),
               this.onChange(),
               this
           }
           fromQuaternion(t, e=this.order) {
               return R.fromQuaternion(t),
               this.fromRotationMatrix(R, e)
           }
           fromArray(t, e=0) {
               return this[0] = t[e],
               this[1] = t[e + 1],
               this[2] = t[e + 2],
               this
           }
           toArray(t=[], e=0) {
               return t[e] = this[0],
               t[e + 1] = this[1],
               t[e + 2] = this[2],
               t
           }
       }
       class L {
           constructor() {
               this.parent = null,
               this.children = [],
               this.visible = !0,
               this.matrix = new P,
               this.worldMatrix = new P,
               this.matrixAutoUpdate = !0,
               this.position = new m,
               this.quaternion = new C,
               this.scale = new m(1),
               this.rotation = new B,
               this.up = new m(0,1,0),
               this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation),
               this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion)
           }
           setParent(t, e=!0) {
               this.parent && t !== this.parent && this.parent.removeChild(this, !1),
               this.parent = t,
               e && t && t.addChild(this, !1)
           }
           addChild(t, e=!0) {
               ~this.children.indexOf(t) || this.children.push(t),
               e && t.setParent(this, !1)
           }
           removeChild(t, e=!0) {
               ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
               e && t.setParent(null, !1)
           }
           updateMatrixWorld(t) {
               this.matrixAutoUpdate && this.updateMatrix(),
               (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
               this.worldMatrixNeedsUpdate = !1,
               t = !0);
               for (let e = 0, i = this.children.length; e < i; e++)
                   this.children[e].updateMatrixWorld(t)
           }
           updateMatrix() {
               this.matrix.compose(this.quaternion, this.position, this.scale),
               this.worldMatrixNeedsUpdate = !0
           }
           traverse(t) {
               if (!t(this))
                   for (let e = 0, i = this.children.length; e < i; e++)
                       this.children[e].traverse(t)
           }
           decompose() {
               this.matrix.getTranslation(this.position),
               this.matrix.getRotation(this.quaternion),
               this.matrix.getScaling(this.scale),
               this.rotation.fromQuaternion(this.quaternion)
           }
           lookAt(t, e=!1) {
               e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
               this.matrix.getRotation(this.quaternion),
               this.rotation.fromQuaternion(this.quaternion)
           }
       }
       let I = new P
         , j = new m
         , z = new m;
       class N extends L {
           constructor(t, {near: e=.1, far: i=100, fov: r=45, aspect: n=1, left: s, right: a, bottom: o, top: u, zoom: l=1}={}) {
               super(),
               Object.assign(this, {
                   near: e,
                   far: i,
                   fov: r,
                   aspect: n,
                   left: s,
                   right: a,
                   bottom: o,
                   top: u,
                   zoom: l
               }),
               this.projectionMatrix = new P,
               this.viewMatrix = new P,
               this.projectionViewMatrix = new P,
               this.worldPosition = new m,
               this.type = s || a ? "orthographic" : "perspective",
               "orthographic" === this.type ? this.orthographic() : this.perspective()
           }
           perspective({near: t=this.near, far: e=this.far, fov: i=this.fov, aspect: r=this.aspect}={}) {
               return Object.assign(this, {
                   near: t,
                   far: e,
                   fov: i,
                   aspect: r
               }),
               this.projectionMatrix.fromPerspective({
                   fov: i * (Math.PI / 180),
                   aspect: r,
                   near: t,
                   far: e
               }),
               this.type = "perspective",
               this
           }
           orthographic({near: t=this.near, far: e=this.far, left: i=this.left, right: r=this.right, bottom: n=this.bottom, top: s=this.top, zoom: a=this.zoom}={}) {
               return Object.assign(this, {
                   near: t,
                   far: e,
                   left: i,
                   right: r,
                   bottom: n,
                   top: s,
                   zoom: a
               }),
               i /= a,
               r /= a,
               n /= a,
               s /= a,
               this.projectionMatrix.fromOrthogonal({
                   left: i,
                   right: r,
                   bottom: n,
                   top: s,
                   near: t,
                   far: e
               }),
               this.type = "orthographic",
               this
           }
           updateMatrixWorld() {
               return super.updateMatrixWorld(),
               this.viewMatrix.inverse(this.worldMatrix),
               this.worldMatrix.getTranslation(this.worldPosition),
               this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
               this
           }
           lookAt(t) {
               return super.lookAt(t, !0),
               this
           }
           project(t) {
               return t.applyMatrix4(this.viewMatrix),
               t.applyMatrix4(this.projectionMatrix),
               this
           }
           unproject(t) {
               return t.applyMatrix4(I.inverse(this.projectionMatrix)),
               t.applyMatrix4(this.worldMatrix),
               this
           }
           updateFrustum() {
               this.frustum || (this.frustum = [new m, new m, new m, new m, new m, new m]);
               let t = this.projectionViewMatrix;
               this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12],
               this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12],
               this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13],
               this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13],
               this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14],
               this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
               for (let t = 0; t < 6; t++) {
                   let e = 1 / this.frustum[t].distance();
                   this.frustum[t].multiply(e),
                   this.frustum[t].constant *= e
               }
           }
           frustumIntersectsMesh(t, e=t.worldMatrix) {
               if (!t.geometry.attributes.position || (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(),
               !t.geometry.bounds))
                   return !0;
               j.copy(t.geometry.bounds.center),
               j.applyMatrix4(e);
               let i = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
               return this.frustumIntersectsSphere(j, i)
           }
           frustumIntersectsSphere(t, e) {
               for (let i = 0; i < 6; i++) {
                   let r = this.frustum[i]
                     , n = z.copy(r).dot(t) + r.constant;
                   if (n < -e)
                       return !1
               }
               return !0
           }
       }
       function V(t, e, i) {
           return t[0] = e[0] + i[0],
           t[1] = e[1] + i[1],
           t
       }
       function G(t, e, i) {
           return t[0] = e[0] - i[0],
           t[1] = e[1] - i[1],
           t
       }
       function U(t, e, i) {
           return t[0] = e[0] * i,
           t[1] = e[1] * i,
           t
       }
       function H(t) {
           var e = t[0]
             , i = t[1];
           return Math.sqrt(e * e + i * i)
       }
       function q(t, e) {
           return t[0] * e[1] - t[1] * e[0]
       }
       class W extends Array {
           constructor(t=0, e=t) {
               return super(t, e),
               this
           }
           get x() {
               return this[0]
           }
           get y() {
               return this[1]
           }
           set x(t) {
               this[0] = t
           }
           set y(t) {
               this[1] = t
           }
           set(t, e=t) {
               var i;
               return t.length ? this.copy(t) : (i = this,
               i[0] = t,
               i[1] = e,
               this)
           }
           copy(t) {
               var e;
               return e = this,
               e[0] = t[0],
               e[1] = t[1],
               this
           }
           add(t, e) {
               return e ? V(this, t, e) : V(this, this, t),
               this
           }
           sub(t, e) {
               return e ? G(this, t, e) : G(this, this, t),
               this
           }
           multiply(t) {
               if (t.length) {
                   var e;
                   e = this,
                   e[0] = this[0] * t[0],
                   e[1] = this[1] * t[1]
               } else
                   U(this, this, t);
               return this
           }
           divide(t) {
               if (t.length) {
                   var e;
                   e = this,
                   e[0] = this[0] / t[0],
                   e[1] = this[1] / t[1]
               } else
                   U(this, this, 1 / t);
               return this
           }
           inverse(t=this) {
               var e;
               return e = this,
               e[0] = 1 / t[0],
               e[1] = 1 / t[1],
               this
           }
           len() {
               return H(this)
           }
           distance(t) {
               var e, i;
               return t ? Math.sqrt((e = t[0] - this[0]) * e + (i = t[1] - this[1]) * i) : H(this)
           }
           squaredLen() {
               return this.squaredDistance()
           }
           squaredDistance(t) {
               var e, i, r, n;
               return t ? (e = t[0] - this[0]) * e + (i = t[1] - this[1]) * i : (r = this[0]) * r + (n = this[1]) * n
           }
           negate(t=this) {
               var e;
               return e = this,
               e[0] = -t[0],
               e[1] = -t[1],
               this
           }
           cross(t, e) {
               return e ? q(t, e) : q(this, t)
           }
           scale(t) {
               return U(this, this, t),
               this
           }
           normalize() {
               var t, e, i, r;
               return t = this,
               (r = (e = this[0]) * e + (i = this[1]) * i) > 0 && (r = 1 / Math.sqrt(r)),
               t[0] = this[0] * r,
               t[1] = this[1] * r,
               this
           }
           dot(t) {
               return this[0] * t[0] + this[1] * t[1]
           }
           equals(t) {
               return this[0] === t[0] && this[1] === t[1]
           }
           applyMatrix3(t) {
               var e, i, r;
               return e = this,
               i = this[0],
               r = this[1],
               e[0] = t[0] * i + t[3] * r + t[6],
               e[1] = t[1] * i + t[4] * r + t[7],
               this
           }
           applyMatrix4(t) {
               var e;
               let i, r;
               return e = this,
               i = this[0],
               r = this[1],
               e[0] = t[0] * i + t[4] * r + t[12],
               e[1] = t[1] * i + t[5] * r + t[13],
               this
           }
           lerp(t, e) {
               var i, r, n;
               return i = this,
               r = this[0],
               n = this[1],
               i[0] = r + e * (t[0] - r),
               i[1] = n + e * (t[1] - n),
               this
           }
           clone() {
               return new W(this[0],this[1])
           }
           fromArray(t, e=0) {
               return this[0] = t[e],
               this[1] = t[e + 1],
               this
           }
           toArray(t=[], e=0) {
               return t[e] = this[0],
               t[e + 1] = this[1],
               t
           }
       }
       let Y = {
           NONE: -1,
           ROTATE: 0,
           DOLLY: 1,
           PAN: 2,
           DOLLY_PAN: 3
       }
         , X = new m
         , Z = new W
         , $ = new W;
       function K(t, {element: e=document, enabled: i=!0, target: r=new m, ease: n=.25, inertia: s=.85, enableRotate: a=!0, rotateSpeed: o=.1, autoRotate: u=!1, autoRotateSpeed: l=1, enableZoom: h=!0, zoomSpeed: c=1, zoomStyle: d="dolly", enablePan: f=!0, panSpeed: p=.1, minPolarAngle: g=0, maxPolarAngle: v=Math.PI, minAzimuthAngle: x=-1 / 0, maxAzimuthAngle: y=1 / 0, minDistance: D=0, maxDistance: w=1 / 0}={}) {
           this.enabled = i,
           this.target = r,
           this.zoomStyle = d,
           n = n || 1,
           s = s || 0,
           this.minDistance = D,
           this.maxDistance = w;
           let b = {
               radius: 1,
               phi: 0,
               theta: 0
           }
             , _ = {
               radius: 1,
               phi: 0,
               theta: 0
           }
             , k = {
               radius: 1,
               phi: 0,
               theta: 0
           }
             , E = new m
             , T = new m;
           T.copy(t.position).sub(this.target),
           k.radius = _.radius = T.distance(),
           k.theta = _.theta = Math.atan2(T.x, T.z),
           k.phi = _.phi = Math.acos(Math.min(Math.max(T.y / _.radius, -1), 1)),
           this.offset = T,
           this.update = () => {
               u && (b.theta -= 2 * Math.PI / 60 / 60 * l),
               _.radius *= b.radius,
               _.theta += b.theta,
               _.phi += b.phi,
               _.theta = Math.max(x, Math.min(y, _.theta)),
               _.phi = Math.max(g, Math.min(v, _.phi)),
               _.radius = Math.max(this.minDistance, Math.min(this.maxDistance, _.radius)),
               k.phi += (_.phi - k.phi) * n,
               k.theta += (_.theta - k.theta) * n,
               k.radius += (_.radius - k.radius) * n,
               this.target.add(E);
               let e = k.radius * Math.sin(Math.max(1e-6, k.phi));
               T.x = e * Math.sin(k.theta),
               T.y = k.radius * Math.cos(k.phi),
               T.z = e * Math.cos(k.theta),
               t.position.copy(this.target).add(T),
               t.lookAt(this.target),
               b.theta *= s,
               b.phi *= s,
               E.multiply(s),
               b.radius = 1
           }
           ,
           this.forcePosition = () => {
               T.copy(t.position).sub(this.target),
               k.radius = _.radius = T.distance(),
               k.theta = _.theta = Math.atan2(T.x, T.z),
               k.phi = _.phi = Math.acos(Math.min(Math.max(T.y / _.radius, -1), 1)),
               t.lookAt(this.target)
           }
           ;
           let C = new W
             , A = new W
             , S = new W
             , M = Y.NONE;
           function F() {
               return Math.pow(.95, c)
           }
           this.mouseButtons = {
               ORBIT: 0,
               ZOOM: 1,
               PAN: 2
           };
           let O = (i, r) => {
               var n, s, a, o;
               let u = e === document ? document.body : e;
               X.copy(t.position).sub(this.target);
               let l = X.distance();
               l *= Math.tan((t.fov || 45) / 2 * Math.PI / 180),
               n = 2 * i * l / u.clientHeight,
               s = t.matrix,
               X.set(s[0], s[1], s[2]),
               X.multiply(-n),
               E.add(X),
               a = 2 * r * l / u.clientHeight,
               o = t.matrix,
               X.set(o[4], o[5], o[6]),
               X.multiply(a),
               E.add(X)
           }
             , P = e => {
               "dolly" === this.zoomStyle ? b.radius /= e : (t.fov /= e,
               "orthographic" === t.type ? t.orthographic() : t.perspective())
           }
           ;
           function R(t, i) {
               Z.set(t, i),
               $.sub(Z, C).multiply(o);
               let r = e === document ? document.body : e;
               b.theta -= 2 * Math.PI * $.x / r.clientHeight,
               b.phi -= 2 * Math.PI * $.y / r.clientHeight,
               C.copy(Z)
           }
           function B(t, e) {
               Z.set(t, e),
               $.sub(Z, A).multiply(p),
               O($.x, $.y),
               A.copy(Z)
           }
           let L = t => {
               if (this.enabled) {
                   switch (t.button) {
                   case this.mouseButtons.ORBIT:
                       if (!1 === a)
                           return;
                       C.set(t.clientX, t.clientY),
                       M = Y.ROTATE;
                       break;
                   case this.mouseButtons.ZOOM:
                       if (!1 === h)
                           return;
                       S.set(t.clientX, t.clientY),
                       M = Y.DOLLY;
                       break;
                   case this.mouseButtons.PAN:
                       if (!1 === f)
                           return;
                       A.set(t.clientX, t.clientY),
                       M = Y.PAN
                   }
                   M !== Y.NONE && (window.addEventListener("mousemove", I, !1),
                   window.addEventListener("mouseup", j, !1))
               }
           }
             , I = t => {
               if (this.enabled)
                   switch (M) {
                   case Y.ROTATE:
                       if (!1 === a)
                           return;
                       R(t.clientX, t.clientY);
                       break;
                   case Y.DOLLY:
                       if (!1 === h)
                           return;
                       Z.set(t.clientX, t.clientY),
                       $.sub(Z, S),
                       $.y > 0 ? P(F()) : $.y < 0 && P(1 / F()),
                       S.copy(Z);
                       break;
                   case Y.PAN:
                       if (!1 === f)
                           return;
                       B(t.clientX, t.clientY)
                   }
           }
             , j = () => {
               window.removeEventListener("mousemove", I, !1),
               window.removeEventListener("mouseup", j, !1),
               M = Y.NONE
           }
             , z = t => {
               this.enabled && h && (M === Y.NONE || M === Y.ROTATE) && (t.stopPropagation(),
               t.preventDefault(),
               t.deltaY < 0 ? P(1 / F()) : t.deltaY > 0 && P(F()))
           }
             , N = t => {
               if (this.enabled)
                   switch (t.preventDefault(),
                   t.touches.length) {
                   case 1:
                       if (!1 === a)
                           return;
                       C.set(t.touches[0].pageX, t.touches[0].pageY),
                       M = Y.ROTATE;
                       break;
                   case 2:
                       if (!1 === h && !1 === f)
                           return;
                       !function(t) {
                           if (h) {
                               let e = t.touches[0].pageX - t.touches[1].pageX
                                 , i = t.touches[0].pageY - t.touches[1].pageY;
                               S.set(0, Math.sqrt(e * e + i * i))
                           }
                           if (f) {
                               let e = .5 * (t.touches[0].pageX + t.touches[1].pageX)
                                 , i = .5 * (t.touches[0].pageY + t.touches[1].pageY);
                               A.set(e, i)
                           }
                       }(t),
                       M = Y.DOLLY_PAN;
                       break;
                   default:
                       M = Y.NONE
                   }
           }
             , V = t => {
               if (this.enabled)
                   switch (t.preventDefault(),
                   t.stopPropagation(),
                   t.touches.length) {
                   case 1:
                       if (!1 === a)
                           return;
                       R(t.touches[0].pageX, t.touches[0].pageY);
                       break;
                   case 2:
                       if (!1 === h && !1 === f)
                           return;
                       !function(t) {
                           if (h) {
                               let e = t.touches[0].pageX - t.touches[1].pageX
                                 , i = t.touches[0].pageY - t.touches[1].pageY;
                               Z.set(0, Math.sqrt(e * e + i * i)),
                               $.set(0, Math.pow(Z.y / S.y, c)),
                               P($.y),
                               S.copy(Z)
                           }
                           f && B(.5 * (t.touches[0].pageX + t.touches[1].pageX), .5 * (t.touches[0].pageY + t.touches[1].pageY))
                       }(t);
                       break;
                   default:
                       M = Y.NONE
                   }
           }
             , G = () => {
               this.enabled && (M = Y.NONE)
           }
             , U = t => {
               this.enabled && t.preventDefault()
           }
           ;
           this.remove = function() {
               e.removeEventListener("contextmenu", U),
               e.removeEventListener("mousedown", L),
               e.removeEventListener("wheel", z),
               e.removeEventListener("touchstart", N),
               e.removeEventListener("touchend", G),
               e.removeEventListener("touchmove", V),
               window.removeEventListener("mousemove", I),
               window.removeEventListener("mouseup", j)
           }
           ,
           e.addEventListener("contextmenu", U, !1),
           e.addEventListener("mousedown", L, !1),
           e.addEventListener("wheel", z, {
               passive: !1
           }),
           e.addEventListener("touchstart", N, {
               passive: !1
           }),
           e.addEventListener("touchend", G, !1),
           e.addEventListener("touchmove", V, {
               passive: !1
           })
       }
       let Q = new W
         , J = new W
         , tt = new W
         , te = new m
         , ti = new m
         , tr = new m
         , tn = new m
         , ts = new m
         , ta = new m
         , to = new m
         , tu = new m
         , tl = new m
         , th = new m
         , tc = new m
         , td = new P;
       class tf {
           constructor() {
               this.origin = new m,
               this.direction = new m
           }
           castMouse(t, e=[0, 0]) {
               if ("orthographic" === t.type) {
                   let {left: i, right: r, bottom: n, top: s, zoom: a} = t
                     , o = i / a + (r - i) / a * (.5 * e[0] + .5)
                     , u = n / a + (s - n) / a * (.5 * e[1] + .5);
                   this.origin.set(o, u, 0),
                   this.origin.applyMatrix4(t.worldMatrix),
                   this.direction.x = -t.worldMatrix[8],
                   this.direction.y = -t.worldMatrix[9],
                   this.direction.z = -t.worldMatrix[10]
               } else
                   t.worldMatrix.getTranslation(this.origin),
                   this.direction.set(e[0], e[1], .5),
                   t.unproject(this.direction),
                   this.direction.sub(this.origin).normalize()
           }
           intersectBounds(t, {maxDistance: e, output: i=[]}={}) {
               Array.isArray(t) || (t = [t]);
               let r = i;
               return r.length = 0,
               t.forEach(t => {
                   let i;
                   t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
                   let n = t.geometry.bounds;
                   if (td.inverse(t.worldMatrix),
                   e && (ti.copy(this.direction).scaleRotateMatrix4(td),
                   i = e * ti.len()),
                   te.copy(this.origin).applyMatrix4(td),
                   ti.copy(this.direction).transformDirection(td),
                   e && te.distance(n.center) - n.radius > i)
                       return;
                   let s = 0;
                   if ("sphere" === t.geometry.raycast) {
                       if (te.distance(n.center) > n.radius && !(s = this.intersectSphere(n, te, ti)))
                           return
                   } else if ((te.x < n.min.x || te.x > n.max.x || te.y < n.min.y || te.y > n.max.y || te.z < n.min.z || te.z > n.max.z) && !(s = this.intersectBox(n, te, ti)))
                       return;
                   e && s > i || (t.hit || (t.hit = {
                       localPoint: new m,
                       point: new m
                   }),
                   t.hit.localPoint.copy(ti).multiply(s).add(te),
                   t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix),
                   t.hit.distance = t.hit.point.distance(this.origin),
                   r.push(t))
               }
               ),
               r.sort( (t, e) => t.hit.distance - e.hit.distance),
               r
           }
           intersectMeshes(t, {cullFace: e=!0, maxDistance: i, includeUV: r=!0, includeNormal: n=!0, output: s=[]}={}) {
               let a = this.intersectBounds(t, {
                   maxDistance: i,
                   output: s
               });
               if (!a.length)
                   return a;
               for (let t = a.length - 1; t >= 0; t--) {
                   let s, o, u, l;
                   let h = a[t];
                   td.inverse(h.worldMatrix),
                   i && (ti.copy(this.direction).scaleRotateMatrix4(td),
                   s = i * ti.len()),
                   te.copy(this.origin).applyMatrix4(td),
                   ti.copy(this.direction).transformDirection(td);
                   let c = 0
                     , d = h.geometry
                     , f = d.attributes
                     , p = f.index
                     , g = f.position
                     , v = Math.max(0, d.drawRange.start)
                     , x = Math.min(p ? p.count : g.count, d.drawRange.start + d.drawRange.count)
                     , y = g.size;
                   for (let t = v; t < x; t += 3) {
                       let r = p ? p.data[t] : t
                         , n = p ? p.data[t + 1] : t + 1
                         , a = p ? p.data[t + 2] : t + 2;
                       tr.fromArray(g.data, r * y),
                       tn.fromArray(g.data, n * y),
                       ts.fromArray(g.data, a * y);
                       let h = this.intersectTriangle(tr, tn, ts, e, te, ti, to);
                       h && (i && h > s || c && !(h < c) || (c = h,
                       o = r,
                       u = n,
                       l = a,
                       ta.copy(to)))
                   }
                   c || a.splice(t, 1),
                   h.hit.localPoint.copy(ti).multiply(c).add(te),
                   h.hit.point.copy(h.hit.localPoint).applyMatrix4(h.worldMatrix),
                   h.hit.distance = h.hit.point.distance(this.origin),
                   h.hit.faceNormal || (h.hit.localFaceNormal = new m,
                   h.hit.faceNormal = new m,
                   h.hit.uv = new W,
                   h.hit.localNormal = new m,
                   h.hit.normal = new m),
                   h.hit.localFaceNormal.copy(ta),
                   h.hit.faceNormal.copy(h.hit.localFaceNormal).transformDirection(h.worldMatrix),
                   (r || n) && (tr.fromArray(g.data, 3 * o),
                   tn.fromArray(g.data, 3 * u),
                   ts.fromArray(g.data, 3 * l),
                   this.getBarycoord(h.hit.localPoint, tr, tn, ts, tu)),
                   r && f.uv && (Q.fromArray(f.uv.data, 2 * o),
                   J.fromArray(f.uv.data, 2 * u),
                   tt.fromArray(f.uv.data, 2 * l),
                   h.hit.uv.set(Q.x * tu.x + J.x * tu.y + tt.x * tu.z, Q.y * tu.x + J.y * tu.y + tt.y * tu.z)),
                   n && f.normal && (tr.fromArray(f.normal.data, 3 * o),
                   tn.fromArray(f.normal.data, 3 * u),
                   ts.fromArray(f.normal.data, 3 * l),
                   h.hit.localNormal.set(tr.x * tu.x + tn.x * tu.y + ts.x * tu.z, tr.y * tu.x + tn.y * tu.y + ts.y * tu.z, tr.z * tu.x + tn.z * tu.y + ts.z * tu.z),
                   h.hit.normal.copy(h.hit.localNormal).transformDirection(h.worldMatrix))
               }
               return a.sort( (t, e) => t.hit.distance - e.hit.distance),
               a
           }
           intersectSphere(t, e=this.origin, i=this.direction) {
               tr.sub(t.center, e);
               let r = tr.dot(i)
                 , n = tr.dot(tr) - r * r
                 , s = t.radius * t.radius;
               if (n > s)
                   return 0;
               let a = Math.sqrt(s - n)
                 , o = r - a
                 , u = r + a;
               return o < 0 && u < 0 ? 0 : o < 0 ? u : o
           }
           intersectBox(t, e=this.origin, i=this.direction) {
               let r, n, s, a, o, u;
               let l = 1 / i.x
                 , h = 1 / i.y
                 , c = 1 / i.z
                 , d = t.min
                 , f = t.max;
               return (r = ((l >= 0 ? d.x : f.x) - e.x) * l,
               n = ((l >= 0 ? f.x : d.x) - e.x) * l,
               s = ((h >= 0 ? d.y : f.y) - e.y) * h,
               r > (a = ((h >= 0 ? f.y : d.y) - e.y) * h) || s > n) ? 0 : (s > r && (r = s),
               a < n && (n = a),
               o = ((c >= 0 ? d.z : f.z) - e.z) * c,
               r > (u = ((c >= 0 ? f.z : d.z) - e.z) * c) || o > n) ? 0 : (o > r && (r = o),
               u < n && (n = u),
               n < 0) ? 0 : r >= 0 ? r : n
           }
           intersectTriangle(t, e, i, r=!0, n=this.origin, s=this.direction, a=to) {
               let o;
               tu.sub(e, t),
               tl.sub(i, t),
               a.cross(tu, tl);
               let u = s.dot(a);
               if (!u)
                   return 0;
               if (u > 0) {
                   if (r)
                       return 0;
                   o = 1
               } else
                   o = -1,
                   u = -u;
               th.sub(n, t);
               let l = o * s.dot(tl.cross(th, tl));
               if (l < 0)
                   return 0;
               let h = o * s.dot(tu.cross(th));
               if (h < 0 || l + h > u)
                   return 0;
               let c = -o * th.dot(a);
               return c < 0 ? 0 : c / u
           }
           getBarycoord(t, e, i, r, n=tu) {
               tl.sub(r, e),
               th.sub(i, e),
               tc.sub(t, e);
               let s = tl.dot(tl)
                 , a = tl.dot(th)
                 , o = tl.dot(tc)
                 , u = th.dot(th)
                 , l = th.dot(tc)
                 , h = s * u - a * a;
               if (0 === h)
                   return n.set(-2, -1, -1);
               let c = 1 / h
                 , d = (u * o - a * l) * c
                 , f = (s * l - a * o) * c;
               return n.set(1 - d - f, f, d)
           }
       }
       let tp = {
           black: "#000000",
           white: "#ffffff",
           red: "#ff0000",
           green: "#00ff00",
           blue: "#0000ff",
           fuchsia: "#ff00ff",
           cyan: "#00ffff",
           yellow: "#ffff00",
           orange: "#ff8000"
       };
       function tm(t) {
           4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
           let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
           return e || console.warn(`Unable to convert hex string ${t} to rgb values`),
           [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
       }
       function tg(t) {
           if (void 0 === t)
               return [0, 0, 0];
           if (3 == arguments.length)
               return arguments;
           if (!isNaN(t)) {
               var e;
               return [((e = parseInt(e = t)) >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255]
           }
           return "#" === t[0] ? tm(t) : tp[t.toLowerCase()] ? tm(tp[t.toLowerCase()]) : (console.warn("Color format not recognised"),
           [0, 0, 0])
       }
       class tv extends Array {
           constructor(t) {
               if (Array.isArray(t))
                   return super(...t);
               return super(...tg(...arguments))
           }
           get r() {
               return this[0]
           }
           get g() {
               return this[1]
           }
           get b() {
               return this[2]
           }
           set r(t) {
               this[0] = t
           }
           set g(t) {
               this[1] = t
           }
           set b(t) {
               this[2] = t
           }
           set(t) {
               return Array.isArray(t) ? this.copy(t) : this.copy(tg(...arguments))
           }
           copy(t) {
               return this[0] = t[0],
               this[1] = t[1],
               this[2] = t[2],
               this
           }
       }
       let tx = 1
         , ty = {};
       class tD {
           constructor(t, {vertex: e, fragment: i, uniforms: r={}, transparent: n=!1, cullFace: s=t.BACK, frontFace: a=t.CCW, depthTest: o=!0, depthWrite: u=!0, depthFunc: l=t.LESS}={}) {
               t.canvas || console.error("gl not passed as first argument to Program"),
               this.gl = t,
               this.uniforms = r,
               this.id = tx++,
               e || console.warn("vertex shader not supplied"),
               i || console.warn("fragment shader not supplied"),
               this.transparent = n,
               this.cullFace = s,
               this.frontFace = a,
               this.depthTest = o,
               this.depthWrite = u,
               this.depthFunc = l,
               this.blendFunc = {},
               this.blendEquation = {},
               this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
               let h = t.createShader(t.VERTEX_SHADER);
               t.shaderSource(h, e),
               t.compileShader(h),
               "" !== t.getShaderInfoLog(h) && console.warn(`${t.getShaderInfoLog(h)}
Vertex Shader
${tb(e)}`);
               let c = t.createShader(t.FRAGMENT_SHADER);
               if (t.shaderSource(c, i),
               t.compileShader(c),
               "" !== t.getShaderInfoLog(c) && console.warn(`${t.getShaderInfoLog(c)}
Fragment Shader
${tb(i)}`),
               this.program = t.createProgram(),
               t.attachShader(this.program, h),
               t.attachShader(this.program, c),
               t.linkProgram(this.program),
               !t.getProgramParameter(this.program, t.LINK_STATUS))
                   return console.warn(t.getProgramInfoLog(this.program));
               t.deleteShader(h),
               t.deleteShader(c),
               this.uniformLocations = new Map;
               let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
               for (let e = 0; e < d; e++) {
                   let i = t.getActiveUniform(this.program, e);
                   this.uniformLocations.set(i, t.getUniformLocation(this.program, i.name));
                   let r = i.name.match(/(\w+)/g);
                   i.uniformName = r[0],
                   3 === r.length ? (i.isStructArray = !0,
                   i.structIndex = Number(r[1]),
                   i.structProperty = r[2]) : 2 === r.length && isNaN(Number(r[1])) && (i.isStruct = !0,
                   i.structProperty = r[1])
               }
               this.attributeLocations = new Map;
               let f = []
                 , p = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
               for (let e = 0; e < p; e++) {
                   let i = t.getActiveAttrib(this.program, e)
                     , r = t.getAttribLocation(this.program, i.name);
                   -1 !== r && (f[r] = i.name,
                   this.attributeLocations.set(i, r))
               }
               this.attributeOrder = f.join("")
           }
           setBlendFunc(t, e, i, r) {
               this.blendFunc.src = t,
               this.blendFunc.dst = e,
               this.blendFunc.srcAlpha = i,
               this.blendFunc.dstAlpha = r,
               t && (this.transparent = !0)
           }
           setBlendEquation(t, e) {
               this.blendEquation.modeRGB = t,
               this.blendEquation.modeAlpha = e
           }
           applyState() {
               this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
               this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
               this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
               this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
               this.gl.renderer.setFrontFace(this.frontFace),
               this.gl.renderer.setDepthMask(this.depthWrite),
               this.gl.renderer.setDepthFunc(this.depthFunc),
               this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
               this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
           }
           use({flipFaces: t=!1}={}) {
               let e = -1
                 , i = this.gl.renderer.state.currentProgram === this.id;
               i || (this.gl.useProgram(this.program),
               this.gl.renderer.state.currentProgram = this.id),
               this.uniformLocations.forEach( (t, i) => {
                   let r = i.uniformName
                     , n = this.uniforms[r];
                   if (i.isStruct && (n = n[i.structProperty],
                   r += `.${i.structProperty}`),
                   i.isStructArray && (n = n[i.structIndex][i.structProperty],
                   r += `[${i.structIndex}].${i.structProperty}`),
                   !n)
                       return tk(`Active uniform ${r} has not been supplied`);
                   if (n && void 0 === n.value)
                       return tk(`${r} uniform is missing a value parameter`);
                   if (n.value.texture)
                       return e += 1,
                       n.value.update(e),
                       tw(this.gl, i.type, t, e);
                   if (n.value.length && n.value[0].texture) {
                       let r = [];
                       return n.value.forEach(t => {
                           e += 1,
                           t.update(e),
                           r.push(e)
                       }
                       ),
                       tw(this.gl, i.type, t, r)
                   }
                   tw(this.gl, i.type, t, n.value)
               }
               ),
               this.applyState(),
               t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
           }
           remove() {
               this.gl.deleteProgram(this.program)
           }
       }
       function tw(t, e, i, r) {
           r = r.length ? function(t) {
               let e = t.length
                 , i = t[0].length;
               if (void 0 === i)
                   return t;
               let r = e * i
                 , n = ty[r];
               n || (ty[r] = n = new Float32Array(r));
               for (let r = 0; r < e; r++)
                   n.set(t[r], r * i);
               return n
           }(r) : r;
           let n = t.renderer.state.uniformLocations.get(i);
           if (r.length) {
               if (void 0 === n || n.length !== r.length)
                   t.renderer.state.uniformLocations.set(i, r.slice(0));
               else {
                   if (function(t, e) {
                       if (t.length !== e.length)
                           return !1;
                       for (let i = 0, r = t.length; i < r; i++)
                           if (t[i] !== e[i])
                               return !1;
                       return !0
                   }(n, r))
                       return;
                   n.set ? n.set(r) : function(t, e) {
                       for (let i = 0, r = t.length; i < r; i++)
                           t[i] = e[i]
                   }(n, r),
                   t.renderer.state.uniformLocations.set(i, n)
               }
           } else {
               if (n === r)
                   return;
               t.renderer.state.uniformLocations.set(i, r)
           }
           switch (e) {
           case 5126:
               return r.length ? t.uniform1fv(i, r) : t.uniform1f(i, r);
           case 35664:
               return t.uniform2fv(i, r);
           case 35665:
               return t.uniform3fv(i, r);
           case 35666:
               return t.uniform4fv(i, r);
           case 35670:
           case 5124:
           case 35678:
           case 35680:
               return r.length ? t.uniform1iv(i, r) : t.uniform1i(i, r);
           case 35671:
           case 35667:
               return t.uniform2iv(i, r);
           case 35672:
           case 35668:
               return t.uniform3iv(i, r);
           case 35673:
           case 35669:
               return t.uniform4iv(i, r);
           case 35674:
               return t.uniformMatrix2fv(i, !1, r);
           case 35675:
               return t.uniformMatrix3fv(i, !1, r);
           case 35676:
               return t.uniformMatrix4fv(i, !1, r)
           }
       }
       function tb(t) {
           let e = t.split("\n");
           for (let t = 0; t < e.length; t++)
               e[t] = t + 1 + ": " + e[t];
           return e.join("\n")
       }
       let t_ = 0;
       function tk(t) {
           !(t_ > 100) && (console.warn(t),
           ++t_ > 100 && console.warn("More than 100 program warnings - stopping logs."))
       }
       function tE(t, e, i) {
           let r = e[0]
             , n = e[1]
             , s = e[2]
             , a = e[3]
             , o = e[4]
             , u = e[5]
             , l = e[6]
             , h = e[7]
             , c = e[8]
             , d = i[0]
             , f = i[1]
             , p = i[2]
             , m = i[3]
             , g = i[4]
             , v = i[5]
             , x = i[6]
             , y = i[7]
             , D = i[8];
           return t[0] = d * r + f * a + p * l,
           t[1] = d * n + f * o + p * h,
           t[2] = d * s + f * u + p * c,
           t[3] = m * r + g * a + v * l,
           t[4] = m * n + g * o + v * h,
           t[5] = m * s + g * u + v * c,
           t[6] = x * r + y * a + D * l,
           t[7] = x * n + y * o + D * h,
           t[8] = x * s + y * u + D * c,
           t
       }
       class tT extends Array {
           constructor(t=1, e=0, i=0, r=0, n=1, s=0, a=0, o=0, u=1) {
               return super(t, e, i, r, n, s, a, o, u),
               this
           }
           set(t, e, i, r, n, s, a, o, u) {
               var l;
               return t.length ? this.copy(t) : (l = this,
               l[0] = t,
               l[1] = e,
               l[2] = i,
               l[3] = r,
               l[4] = n,
               l[5] = s,
               l[6] = a,
               l[7] = o,
               l[8] = u,
               this)
           }
           translate(t, e=this) {
               var i;
               let r, n, s, a, o, u, l, h, c, d, f;
               return i = this,
               r = e[0],
               n = e[1],
               s = e[2],
               a = e[3],
               o = e[4],
               u = e[5],
               l = e[6],
               h = e[7],
               c = e[8],
               d = t[0],
               f = t[1],
               i[0] = r,
               i[1] = n,
               i[2] = s,
               i[3] = a,
               i[4] = o,
               i[5] = u,
               i[6] = d * r + f * a + l,
               i[7] = d * n + f * o + h,
               i[8] = d * s + f * u + c,
               this
           }
           rotate(t, e=this) {
               var i;
               let r, n, s, a, o, u, l, h, c, d, f;
               return i = this,
               r = e[0],
               n = e[1],
               s = e[2],
               a = e[3],
               o = e[4],
               u = e[5],
               l = e[6],
               h = e[7],
               c = e[8],
               d = Math.sin(t),
               f = Math.cos(t),
               i[0] = f * r + d * a,
               i[1] = f * n + d * o,
               i[2] = f * s + d * u,
               i[3] = f * a - d * r,
               i[4] = f * o - d * n,
               i[5] = f * u - d * s,
               i[6] = l,
               i[7] = h,
               i[8] = c,
               this
           }
           scale(t, e=this) {
               var i;
               let r, n;
               return i = this,
               r = t[0],
               n = t[1],
               i[0] = r * e[0],
               i[1] = r * e[1],
               i[2] = r * e[2],
               i[3] = n * e[3],
               i[4] = n * e[4],
               i[5] = n * e[5],
               i[6] = e[6],
               i[7] = e[7],
               i[8] = e[8],
               this
           }
           multiply(t, e) {
               return e ? tE(this, t, e) : tE(this, this, t),
               this
           }
           identity() {
               var t;
               return t = this,
               t[0] = 1,
               t[1] = 0,
               t[2] = 0,
               t[3] = 0,
               t[4] = 1,
               t[5] = 0,
               t[6] = 0,
               t[7] = 0,
               t[8] = 1,
               this
           }
           copy(t) {
               var e;
               return e = this,
               e[0] = t[0],
               e[1] = t[1],
               e[2] = t[2],
               e[3] = t[3],
               e[4] = t[4],
               e[5] = t[5],
               e[6] = t[6],
               e[7] = t[7],
               e[8] = t[8],
               this
           }
           fromMatrix4(t) {
               var e;
               return e = this,
               e[0] = t[0],
               e[1] = t[1],
               e[2] = t[2],
               e[3] = t[4],
               e[4] = t[5],
               e[5] = t[6],
               e[6] = t[8],
               e[7] = t[9],
               e[8] = t[10],
               this
           }
           fromQuaternion(t) {
               var e;
               let i, r, n, s, a, o, u, l, h, c, d, f, p, m, g, v;
               return e = this,
               i = t[0],
               r = t[1],
               n = t[2],
               s = t[3],
               a = i + i,
               o = r + r,
               u = n + n,
               l = i * a,
               h = r * a,
               c = r * o,
               d = n * a,
               f = n * o,
               p = n * u,
               m = s * a,
               g = s * o,
               v = s * u,
               e[0] = 1 - c - p,
               e[3] = h - v,
               e[6] = d + g,
               e[1] = h + v,
               e[4] = 1 - l - p,
               e[7] = f - m,
               e[2] = d - g,
               e[5] = f + m,
               e[8] = 1 - l - c,
               this
           }
           fromBasis(t, e, i) {
               return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]),
               this
           }
           inverse(t=this) {
               var e;
               let i, r, n, s, a, o, u, l, h, c, d, f, p;
               return e = this,
               i = t[0],
               r = t[1],
               n = t[2],
               s = t[3],
               a = t[4],
               o = t[5],
               u = t[6],
               l = t[7],
               (p = i * (c = (h = t[8]) * a - o * l) + r * (d = -h * s + o * u) + n * (f = l * s - a * u)) && (p = 1 / p,
               e[0] = c * p,
               e[1] = (-h * r + n * l) * p,
               e[2] = (o * r - n * a) * p,
               e[3] = d * p,
               e[4] = (h * i - n * u) * p,
               e[5] = (-o * i + n * s) * p,
               e[6] = f * p,
               e[7] = (-l * i + r * u) * p,
               e[8] = (a * i - r * s) * p),
               this
           }
           getNormalMatrix(t) {
               var e;
               let i, r, n, s, a, o, u, l, h, c, d, f, p, m, g, v, x, y, D, w, b, _, k, E, T, C, A, S, M;
               return e = this,
               i = t[0],
               r = t[1],
               n = t[2],
               s = t[3],
               a = t[4],
               o = t[5],
               u = t[6],
               l = t[7],
               h = t[8],
               c = t[9],
               d = t[10],
               f = t[11],
               p = t[12],
               m = t[13],
               g = t[14],
               v = t[15],
               x = i * o - r * a,
               y = i * u - n * a,
               D = i * l - s * a,
               w = r * u - n * o,
               b = r * l - s * o,
               _ = n * l - s * u,
               k = h * m - c * p,
               E = h * g - d * p,
               T = h * v - f * p,
               C = c * g - d * m,
               A = c * v - f * m,
               (M = x * (S = d * v - f * g) - y * A + D * C + w * T - b * E + _ * k) && (M = 1 / M,
               e[0] = (o * S - u * A + l * C) * M,
               e[1] = (u * T - a * S - l * E) * M,
               e[2] = (a * A - o * T + l * k) * M,
               e[3] = (n * A - r * S - s * C) * M,
               e[4] = (i * S - n * T + s * E) * M,
               e[5] = (r * T - i * A - s * k) * M,
               e[6] = (m * _ - g * b + v * w) * M,
               e[7] = (g * D - p * _ - v * y) * M,
               e[8] = (p * b - m * D + v * x) * M),
               this
           }
       }
       let tC = 0;
       class tA extends L {
           constructor(t, {geometry: e, program: i, mode: r=t.TRIANGLES, frustumCulled: n=!0, renderOrder: s=0}={}) {
               super(),
               t.canvas || console.error("gl not passed as first argument to Mesh"),
               this.gl = t,
               this.id = tC++,
               this.geometry = e,
               this.program = i,
               this.mode = r,
               this.frustumCulled = n,
               this.renderOrder = s,
               this.modelViewMatrix = new P,
               this.normalMatrix = new tT,
               this.beforeRenderCallbacks = [],
               this.afterRenderCallbacks = []
           }
           onBeforeRender(t) {
               return this.beforeRenderCallbacks.push(t),
               this
           }
           onAfterRender(t) {
               return this.afterRenderCallbacks.push(t),
               this
           }
           draw({camera: t}={}) {
               t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                   modelMatrix: {
                       value: null
                   },
                   viewMatrix: {
                       value: null
                   },
                   modelViewMatrix: {
                       value: null
                   },
                   normalMatrix: {
                       value: null
                   },
                   projectionMatrix: {
                       value: null
                   },
                   cameraPosition: {
                       value: null
                   }
               }),
               this.program.uniforms.projectionMatrix.value = t.projectionMatrix,
               this.program.uniforms.cameraPosition.value = t.worldPosition,
               this.program.uniforms.viewMatrix.value = t.viewMatrix,
               this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
               this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
               this.program.uniforms.modelMatrix.value = this.worldMatrix,
               this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
               this.program.uniforms.normalMatrix.value = this.normalMatrix),
               this.beforeRenderCallbacks.forEach(e => e && e({
                   mesh: this,
                   camera: t
               }));
               let e = this.program.cullFace && 0 > this.worldMatrix.determinant();
               this.program.use({
                   flipFaces: e
               }),
               this.geometry.draw({
                   mode: this.mode,
                   program: this.program
               }),
               this.afterRenderCallbacks.forEach(e => e && e({
                   mesh: this,
                   camera: t
               }))
           }
       }
       let tS = new Uint8Array(4)
         , tM = 1;
       class tF {
           constructor(t, {image: e, target: i=t.TEXTURE_2D, type: r=t.UNSIGNED_BYTE, format: n=t.RGBA, internalFormat: s=n, wrapS: a=t.CLAMP_TO_EDGE, wrapT: o=t.CLAMP_TO_EDGE, generateMipmaps: u=!0, minFilter: l=u ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR, magFilter: h=t.LINEAR, premultiplyAlpha: c=!1, unpackAlignment: d=4, flipY: f=i == t.TEXTURE_2D, anisotropy: p=0, level: m=0, width: g, height: v=g}={}) {
               this.gl = t,
               this.id = tM++,
               this.image = e,
               this.target = i,
               this.type = r,
               this.format = n,
               this.internalFormat = s,
               this.minFilter = l,
               this.magFilter = h,
               this.wrapS = a,
               this.wrapT = o,
               this.generateMipmaps = u,
               this.premultiplyAlpha = c,
               this.unpackAlignment = d,
               this.flipY = f,
               this.anisotropy = Math.min(p, this.gl.renderer.parameters.maxAnisotropy),
               this.level = m,
               this.width = g,
               this.height = v,
               this.texture = this.gl.createTexture(),
               this.store = {
                   image: null
               },
               this.glState = this.gl.renderer.state,
               this.state = {},
               this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
               this.state.magFilter = this.gl.LINEAR,
               this.state.wrapS = this.gl.REPEAT,
               this.state.wrapT = this.gl.REPEAT,
               this.state.anisotropy = 0
           }
           bind() {
               this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
               this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
           }
           update(t=0) {
               let e = !(this.image === this.store.image && !this.needsUpdate);
               if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t),
               this.bind()),
               e) {
                   if (this.needsUpdate = !1,
                   this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                   this.glState.flipY = this.flipY),
                   this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
                   this.glState.premultiplyAlpha = this.premultiplyAlpha),
                   this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
                   this.glState.unpackAlignment = this.unpackAlignment),
                   this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
                   this.state.minFilter = this.minFilter),
                   this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
                   this.state.magFilter = this.magFilter),
                   this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
                   this.state.wrapS = this.wrapS),
                   this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
                   this.state.wrapT = this.wrapT),
                   this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
                   this.state.anisotropy = this.anisotropy),
                   this.image) {
                       if (this.image.width && (this.width = this.image.width,
                       this.height = this.image.height),
                       this.target === this.gl.TEXTURE_CUBE_MAP)
                           for (let t = 0; t < 6; t++)
                               this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
                       else if (ArrayBuffer.isView(this.image))
                           this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                       else if (this.image.isCompressedTexture)
                           for (let t = 0; t < this.image.length; t++)
                               this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
                       else
                           this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                       if (this.generateMipmaps) {
                           var i, r;
                           this.gl.renderer.isWebgl2 || ((i = this.image.width) & i - 1) == 0 && ((r = this.image.height) & r - 1) == 0 ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1,
                           this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                           this.minFilter = this.gl.LINEAR)
                       }
                       this.onUpdate && this.onUpdate()
                   } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                       for (let t = 0; t < 6; t++)
                           this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, tS);
                   else
                       this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, tS);
                   this.store.image = this.image
               }
           }
       }
       function tO({font: t, text: e, width: i=1 / 0, align: r="left", size: n=1, letterSpacing: s=0, lineHeight: a=1.4, wordSpacing: o=0, wordBreak: u=!1}) {
           let l, h, c;
           let d = this
             , f = /\n/
             , p = /\s/;
           function m() {
               t.common.lineHeight,
               c = n / t.common.base;
               let i = e.replace(/[ \n]/g, "").length;
               h = {
                   position: new Float32Array(12 * i),
                   uv: new Float32Array(8 * i),
                   id: new Float32Array(4 * i),
                   index: new Uint16Array(6 * i)
               };
               for (let t = 0; t < i; t++)
                   h.id.set([t, t, t, t], 4 * t),
                   h.index.set([4 * t, 4 * t + 2, 4 * t + 1, 4 * t + 1, 4 * t + 2, 4 * t + 3], 6 * t);
               g()
           }
           function g() {
               let m = []
                 , g = 0
                 , v = 0
                 , x = 0
                 , y = D();
               function D() {
                   let t = {
                       width: 0,
                       glyphs: []
                   };
                   return m.push(t),
                   v = g,
                   x = 0,
                   t
               }
               let w = 0;
               for (; g < e.length && w < 100; ) {
                   w++;
                   let r = e[g];
                   if (!y.width && p.test(r)) {
                       v = ++g,
                       x = 0;
                       continue
                   }
                   if (f.test(r)) {
                       g++,
                       y = D();
                       continue
                   }
                   let a = l[r] || l[" "];
                   if (y.glyphs.length) {
                       let e = y.glyphs[y.glyphs.length - 1][0]
                         , i = function(e, i) {
                           for (let r = 0; r < t.kernings.length; r++) {
                               let n = t.kernings[r];
                               if (!(n.first < e) && !(n.second < i)) {
                                   if (n.first > e || n.first === e && n.second > i)
                                       return 0;
                                   return n.amount
                               }
                           }
                           return 0
                       }(a.id, e.id) * c;
                       y.width += i,
                       x += i
                   }
                   y.glyphs.push([a, y.width]);
                   let h = 0;
                   if (p.test(r) ? (v = g,
                   x = 0,
                   h += o * n) : h += s * n,
                   h += a.xadvance * c,
                   y.width += h,
                   x += h,
                   y.width > i) {
                       if (u && y.glyphs.length > 1) {
                           y.width -= h,
                           y.glyphs.pop(),
                           y = D();
                           continue
                       }
                       if (!u && x !== y.width) {
                           let t = g - v + 1;
                           y.glyphs.splice(-t, t),
                           g = v,
                           y.width -= x,
                           y = D();
                           continue
                       }
                   }
                   g++,
                   w = 0
               }
               y.width || m.pop(),
               function(e) {
                   let i = t.common.scaleW
                     , s = t.common.scaleH
                     , o = .07 * n
                     , u = 0;
                   for (let t = 0; t < e.length; t++) {
                       let l = e[t];
                       for (let t = 0; t < l.glyphs.length; t++) {
                           let e = l.glyphs[t][0]
                             , n = l.glyphs[t][1];
                           if ("center" === r ? n -= .5 * l.width : "right" === r && (n -= l.width),
                           p.test(e.char))
                               continue;
                           n += e.xoffset * c,
                           o -= e.yoffset * c;
                           let a = e.width * c
                             , d = e.height * c;
                           h.position.set([n, o - d, 0, n, o, 0, n + a, o - d, 0, n + a, o, 0], 12 * u);
                           let f = e.x / i
                             , m = e.width / i
                             , g = 1 - e.y / s
                             , v = e.height / s;
                           h.uv.set([f, g - v, f, g, f + m, g - v, f + m, g], 8 * u),
                           o += e.yoffset * c,
                           u++
                       }
                       o -= n * a
                   }
                   d.buffers = h,
                   d.numLines = e.length,
                   d.height = d.numLines * n * a,
                   d.width = Math.max(...e.map(t => t.width))
               }(m)
           }
           l = {},
           t.chars.forEach(t => l[t.char] = t),
           m(),
           this.resize = function(t) {
               ({width: i} = t),
               g()
           }
           ,
           this.update = function(t) {
               ({text: e} = t),
               m()
           }
       }
       var tP = "precision highp float;\n#define GLSLIFY 1\n \nattribute vec3 position;\nattribute vec2 uv;\n \nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n \nvarying vec2 vUv;\n \nvoid main() {\n  vUv = uv;\n \n  vec3 p = position;\n \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);\n}";
       let tR = new tv("#eee")
         , tB = new tv("#ffffff");
       class tL {
           createShader() {
               let {texture: t, imageLoaded: e, isFromCache: i, isFirstLoad: r} = this.getTexture();
               if (this.program = new tD(this.gl,{
                   depthTest: !1,
                   depthWrite: !1,
                   fragment: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform sampler2D tMap;\nuniform float uHover;\nuniform float uFocus;\nuniform float uComingSoon;\nuniform float uOverflowLeft;\nuniform float uOverflowRight;\nuniform float uHidden;\nuniform float uMaskRight;\nuniform float uMaskTop;\nuniform float uMaskBottom;\nuniform float uParallax;\nuniform float uProgress;\nuniform float uDebug;\nuniform vec3 uBgColor;\nuniform vec3 uProgressColor;\n\nvarying vec2 vUv;\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n	return base*blend;\n}\n\nvoid main() {\n\n  vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n\n  \n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );  \n\n  // scale texture uv if hovered\n  float scaleHoverNotFocus = 1.03;\n  float scaleHoverFocus = 1.05;\n  float isFocusHovered = uFocus * uHover * (1.0 - uComingSoon);\n  float isNotFocusHovered = (1.0 - uFocus) * uHover;\n  float scale = 1.0 - ((scaleHoverNotFocus - 1.0) * isNotFocusHovered) - ((scaleHoverFocus - 1.0) * isFocusHovered);\n  uv = vec2(\n    uv.x * scale + (1.0 - scale) * 0.5,\n    uv.y * scale + (1.0 - scale) * 0.5\n  );\n\n  vec4 raw = texture2D(tMap, uv);\n\n  // Parallax - X only\n  // goes from 0 to 1, 0.5 is no parallax\n  float parallax = uParallax;\n  float parallaxValue = abs(parallax - 0.5);\n  float parallaxDirection = parallax > 0.5 ? 1.0 : -1.0;\n  vec2 parallaxUv = vec2(\n    uv.x + parallaxValue * parallaxDirection * 0.5,\n    uv.y\n  );\n  raw = texture2D(tMap, parallaxUv);\n\n  // Image de base en texture\n  gl_FragColor = raw;\n  \n  // grayscale\n  float uGrayscale = max(0.0, (1.0 - uFocus - uHover * 0.7));\n  float gray = 0.21 * raw.r + 0.71 * raw.g + 0.07 * raw.b;\n  gl_FragColor = vec4(raw.rgb * (1.0 - uGrayscale) + (gray * uGrayscale), raw.a);\n\n  gl_FragColor.rgb = mix(\n    blendMultiply(uBgColor, gl_FragColor.rgb), \n    gl_FragColor.rgb,\n    uFocus\n  );\n\n  // global hidden mask\n  gl_FragColor.a *= 1.0 - uHidden;\n  // gl_FragColor.a *= 1.0 - (uHidden * 0.2);\n\n  // animation masks\n  gl_FragColor.a -= step(1.0 - uMaskRight, vUv.x);\n  gl_FragColor.a -= step(vUv.y, uMaskBottom);\n  gl_FragColor.a -= step((1.0 - uMaskTop), vUv.y);\n\n  // mask according to overflow value\n  // gl_FragColor.a -= step(vUv.x, uOverflowLeft) * 0.5;\n  // gl_FragColor.a -= step(1.0 - uOverflowRight, vUv.x) * 0.5;\n  gl_FragColor.a -= step(vUv.x, uOverflowLeft);\n  gl_FragColor.a -= step(1.0 - uOverflowRight, vUv.x);\n\nif (uProgress > 0.0) {\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, uProgressColor, uFocus * step(vUv.x, uProgress) * 0.2);\n} else {\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, uProgressColor,  uFocus * step(1.0 + uProgress, vUv.x) * 0.2);\n}\n\n  if (uDebug == 1.0) {\n\n    gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 0.4), step(vUv.x, uOverflowLeft) + step(1.0 - uOverflowRight, vUv.x)); \n\n    if (abs(uv.x-0.5) < 0.001) {\n      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n\n      if (uOverflowLeft > 0.01 || uOverflowRight > 0.01) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);\n      }\n    }\n  }\n\n}",
                   vertex: tP,
                   uniforms: {
                       tMap: {
                           value: t
                       },
                       uPlaneSizes: {
                           value: [0, 0]
                       },
                       uImageSizes: {
                           value: [0, 0]
                       },
                       uViewportSizes: {
                           value: [this.viewport.width, this.viewport.height]
                       },
                       uFocus: {
                           value: 1
                       },
                       uHover: {
                           value: 0
                       },
                       uComingSoon: {
                           value: this.comingSoon
                       },
                       uOverflowLeft: {
                           value: 0
                       },
                       uOverflowRight: {
                           value: 0
                       },
                       uHidden: {
                           value: 0
                       },
                       uMaskRight: {
                           value: 0
                       },
                       uMaskBottom: {
                           value: 0
                       },
                       uMaskTop: {
                           value: 0
                       },
                       uParallax: {
                           value: .5
                       },
                       uProgress: {
                           value: 0
                       },
                       uDebug: {
                           value: this.debug ? 1 : 0
                       },
                       uProgressColor: {
                           value: [...tB]
                       },
                       uBgColor: {
                           value: [...tR]
                       }
                   },
                   transparent: !0
               }),
               i && !e && this.addProgramToUpdate(this.program),
               r) {
                   this.addTextureToCache(t);
                   let e = new Image;
                   e.crossOrigin = "anonymous",
                   e.src = this.image,
                   e.onload = () => {
                       t.image = e,
                       t.width = e.naturalWidth,
                       t.height = e.naturalHeight,
                       this.program.uniforms.uImageSizes.value = [e.naturalWidth, e.naturalHeight],
                       t.imageLoaded = !0,
                       this.updatePendingPrograms({
                           width: e.naturalWidth,
                           height: e.naturalHeight
                       }),
                       this.onLoad()
                   }
               }
               !r && e && this.updateProgram({
                   program: this.program,
                   width: t.width,
                   height: t.height
               })
           }
           createMesh() {
               this.plane = new tA(this.gl,{
                   geometry: this.geometry,
                   program: this.program
               }),
               this.plane.isFocus = 0,
               this.plane.isHover = 0,
               this.plane.index = this.index,
               this.plane.extra = 0;
               let t = t => {
                   let {mesh: e} = t;
                   this.program.uniforms.uHover.value = e.isHover,
                   this.program.uniforms.uFocus.value = e.isFocus
               }
               ;
               this.plane.onBeforeRender(t),
               this.plane.setParent(this.scene),
               this.debug && this.createTextMesh()
           }
           async createTextMesh() {
               let t = "\n        attribute vec2 uv;\n        attribute vec3 position;\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 projectionMatrix;\n\n        varying vec2 vUv;\n\n        void main() {\n            vUv = uv;\n\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n    "
                 , e = "\n      precision highp float;\n      uniform sampler2D tMap;\n\n      varying vec2 vUv;\n\n      void main() {\n          vec3 tex = texture2D(tMap, vUv).rgb;\n          float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;\n          float d = fwidth(signedDist);\n          float alpha = smoothstep(-d, d, signedDist);\n\n          if (alpha < 0.01) discard;\n\n          gl_FragColor.rgb = vec3(0.0);\n          gl_FragColor.a = alpha;\n      }\n    "
                 , i = new tF(this.gl,{
                   generateMipmaps: !1
               })
                 , r = new Image;
               r.onload = () => i.image = r,
               r.src = "/ogl/FiraSans-Bold.png";
               let n = new tD(this.gl,{
                   vertex: this.renderer.isWebgl2 ? "#version 300 es\n        #define attribute in\n        #define varying out\n    " + t : "\n    " + t,
                   fragment: this.renderer.isWebgl2 ? "#version 300 es\n        precision highp float;\n        #define varying in\n        #define texture2D texture\n        #define gl_FragColor FragColor\n        out vec4 FragColor;\n    " + e : "#extension GL_OES_standard_derivatives : enable\n        precision highp float;\n    " + e,
                   uniforms: {
                       tMap: {
                           value: i
                       }
                   },
                   transparent: !0,
                   cullFace: !1,
                   depthWrite: !1
               })
                 , s = await (await fetch("/ogl/FiraSans-Bold.json")).json()
                 , a = new tO({
                   font: s,
                   text: this.index.toString(),
                   width: .4,
                   align: "center",
                   letterSpacing: -.05,
                   size: .4,
                   lineHeight: 1.1
               })
                 , o = new D(this.gl,{
                   position: {
                       size: 3,
                       data: a.buffers.position
                   },
                   uv: {
                       size: 2,
                       data: a.buffers.uv
                   },
                   id: {
                       size: 1,
                       data: a.buffers.id
                   },
                   index: {
                       data: a.buffers.index
                   }
               });
               this.number = new tA(this.gl,{
                   geometry: o,
                   program: n
               }),
               this.number.position.y = 1.3 * a.height;
               let u = t => {
                   let {mesh: e} = t;
                   e.scale.x = 1 / e.parent.scale.x,
                   e.scale.y = 1 / e.parent.scale.y
               }
               ;
               this.number.onBeforeRender(u),
               this.number.setParent(this.plane)
           }
           getTexture() {
               let t = this.getTextureFromCache()
                 , e = t || new tF(this.gl,{
                   generateMipmaps: !1
               })
                 , i = !!t
                 , r = e.imageLoaded;
               return {
                   texture: e,
                   imageLoaded: r,
                   isFromCache: i,
                   isFirstLoad: !i
               }
           }
           addProgramToUpdate(t) {
               window._glProgramesToUpdate.has(this.cacheKey) || window._glProgramesToUpdate.set(this.cacheKey, new Set),
               window._glProgramesToUpdate.get(this.cacheKey).add(t)
           }
           updatePendingPrograms(t) {
               let {width: e, height: i} = t;
               window._glProgramesToUpdate && window._glProgramesToUpdate.has(this.cacheKey) && window._glProgramesToUpdate.get(this.cacheKey).forEach(t => {
                   this.updateProgram({
                       program: t,
                       width: e,
                       height: i
                   })
               }
               )
           }
           updateProgram(t) {
               let {program: e, width: i, height: r} = t;
               e.uniforms.uImageSizes.value = [i, r]
           }
           setupCache() {
               window._glTexturesCached = window._glTexturesCached || new Map,
               window._glProgramesToUpdate = window._glProgramesToUpdate || new Map
           }
           isTextureCached() {
               return !!this.getTextureFromCache()
           }
           getTextureFromCache() {
               return window._glTexturesCached.get(this.cacheKey)
           }
           addTextureToCache(t) {
               window._glTexturesCached.set(this.cacheKey, t)
           }
           removeTextureFromCache() {
               window._glTexturesCached.delete(this.cacheKey)
           }
           destroy() {
               this.removeTextureFromCache()
           }
           update() {}
           onResize() {
               let {screen: t, viewport: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
               t && (this.screen = t),
               e && (this.viewport = e,
               this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height])
           }
           constructor({geometry: t, gl: e, image: i, index: r, renderer: n, scene: s, screen: a, viewport: o, onLoad: u, comingSoon: l=0, debug: h=!1}) {
               this.geometry = t,
               this.gl = e,
               this.image = i,
               this.index = r,
               this.renderer = n,
               this.scene = s,
               this.screen = a,
               this.viewport = o,
               this.onLoad = u,
               this.comingSoon = l,
               this.debug = h,
               this.cacheKey = "".concat(this.image, "-").concat(this.gl.renderer.id),
               this.setupCache(),
               this.createShader(),
               this.createMesh()
           }
       }
       let tI = new tv("#eee")
         , tj = new tv("#c9c0b5");
       class tz {
           createShader() {
               this.program = new tD(this.gl,{
                   depthTest: !1,
                   depthWrite: !1,
                   fragment: "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform float uHidden;\nuniform float uDebug;\nuniform float uProgress;\nuniform vec3 uBgColor;\nuniform vec3 uFgColor;\n\nvarying vec2 vUv;\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n	return base*blend;\n}\n\nvoid main() {\n\n  vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n\n  \n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );  \n\n  // gl_FragColor.rgb = mix(\n  //   blendMultiply(uBgColor, gl_FragColor.rgb), \n  //   gl_FragColor.rgb,\n  //   uFocus\n  // );\n  // animation masks\n  // gl_FragColor.a -= step(1.0 - uMaskRight, vUv.x);\n  // gl_FragColor.a -= step(vUv.y, uMaskBottom);\n  // gl_FragColor.a -= step((1.0 - uMaskTop), vUv.y);\n\n  gl_FragColor.rgb = mix(uBgColor, uFgColor, step(vUv.x, uProgress));\n\n  gl_FragColor.a = .4;\n}",
                   vertex: tP,
                   uniforms: {
                       uPlaneSizes: {
                           value: [0, 0]
                       },
                       uImageSizes: {
                           value: [0, 0]
                       },
                       uViewportSizes: {
                           value: [this.viewport.width, this.viewport.height]
                       },
                       uProgress: {
                           value: 0
                       },
                       uHidden: {
                           value: 0
                       },
                       uDebug: {
                           value: 0
                       },
                       uBgColor: {
                           value: [...tI]
                       },
                       uFgColor: {
                           value: [...tj]
                       }
                   },
                   transparent: !0
               })
           }
           createMesh() {
               this.plane = new tA(this.gl,{
                   geometry: this.geometry,
                   program: this.program
               }),
               this.plane.setParent(this.scene)
           }
           destroy() {}
           update() {}
           onResize() {
               let {screen: t, viewport: e} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
               t && (this.screen = t),
               e && (this.viewport = e,
               this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height])
           }
           constructor({geometry: t, gl: e, renderer: i, scene: r, screen: n, viewport: s, onLoad: a}) {
               this.geometry = t,
               this.gl = e,
               this.renderer = i,
               this.scene = r,
               this.screen = n,
               this.viewport = s,
               this.onLoad = a,
               this.createShader(),
               this.createMesh(),
               this.onLoad()
           }
       }
       r.p8.registerPlugin(n.CustomEase),
       n.CustomEase.create("intro", "M0,0 C0.084,0.61 0.164,0.826 0.226,0.9 0.288,0.975 0.374,1 1,1");
       class tN {
           toGlScale(t) {
               return this.viewport.width * (t * this.scale) / this.screen.width
           }
           fromGlScale(t) {
               return t * this.screen.width / (this.viewport.width * this.scale)
           }
           toScreenGlScale(t) {
               return t / this.renderer.width * 2
           }
           orderProjects() {
               this.homeDataProjects.forEach( (t, e) => {
                   let i = t.item.id
                     , r = this.projectsDuplicated.reduce( (t, e, r) => (e.id === i && t.push(r),
                   t), [])
                     , n = this.projectsDuplicated[this.middleIndex + Math.ceil(e / 2) * (e % 2 == 0 ? -1 : 1)].id
                     , s = this.projectsDuplicated.reduce( (t, e, i) => (e.id === n && t.push(i),
                   t), []);
                   r.forEach( (t, e) => {
                       let i = s[e]
                         , r = this.projectsDuplicated[i];
                       this.projectsDuplicated.splice(i, 1, this.projectsDuplicated[t]),
                       this.projectsDuplicated.splice(t, 1, r)
                   }
                   )
               }
               )
           }
           onMediaLoad() {
               this.loaded += 1,
               this.loaded === this.projects.length && (this.allLoaded = !0,
               this.onAllMediaLoaded())
           }
           onAllMediaLoaded() {
               this.onReady && this.onReady()
           }
           createPreloader() {
               let t = this.medias.map(t => t.program.uniforms.uMaskBottom)
                 , e = this.medias.map(t => t.program.uniforms.uMaskTop);
               r.p8.set([...t, ...e], {
                   value: 1
               })
           }
           createMiddleChecker() {
               if (document.getElementById("middleChecker") && document.getElementById("middleChecker").remove(),
               this.debug) {
                   let t = document.createElement("div");
                   t.id = "middleChecker",
                   t.style.position = "fixed",
                   t.style.marginLeft = "-1px",
                   t.style.top = "0",
                   t.style.left = "50%",
                   t.style.width = "2px",
                   t.style.height = "100%",
                   t.style.backgroundColor = "green",
                   t.style.zIndex = "100",
                   document.body.appendChild(t)
               }
           }
           createScrollIndicator() {
               this.scrollIndicator = new tz({
                   geometry: new w(this.gl,{
                       heightSegments: 1,
                       widthSegments: 1
                   }),
                   gl: this.gl,
                   renderer: this.renderer,
                   scene: this.scene,
                   screen: this.screen,
                   viewport: this.viewport,
                   onLoad: () => {}
               }),
               this.scrollIndicator.plane.scale.x = this.toGlScale(this.sizes.itemWidthByDistance[0].value),
               this.scrollIndicator.plane.scale.y = this.viewport.height * (this.sizes.itemHeight * this.scale) / this.screen.height
           }
           computeVisibleLength() {
               let t = this.screen.width
                 , e = this.screen.height
                 , i = t / e;
               this.visibleLength = 15,
               i > 1.6 ? this.visibleLength = Math.floor(t / (60 - 10 * Math.abs(i - 1.6))) : i < 1 ? this.visibleLength = Math.floor(t / 100) : this.visibleLength = Math.floor(t / 50),
               this.visibleLength = Math.min(this.visibleLength, this.projectsDuplicated.length),
               this.visibleLength % 2 == 0 && (this.visibleLength = this.visibleLength - 1),
               this.middleIndex = Math.floor(this.visibleLength / 2)
           }
           computeSizes() {
               this.totalGap = this.gap * (this.visibleLength - 1);
               let t = this.screen.height > this.screen.width;
               this.sizes = {
                   baseItemWidth: (this.containerWidth - this.totalGap) / this.visibleLength,
                   itemHeight: t ? 390 / 900 * this.screen.width : 390 / 900 * this.screen.height,
                   itemWidthByDistance: [{
                       value: t ? 390 / 900 * this.screen.width * (16 / 9) : 390 / 900 * this.screen.height * (16 / 9),
                       count: 1
                   }, {
                       value: 133 / 1440 * this.screen.width,
                       count: 2
                   }, {
                       value: 66 / 1440 * this.screen.width,
                       count: 2
                   }, {
                       value: 50 / 1440 * this.screen.width,
                       count: 2
                   }, {
                       value: 40 / 1440 * this.screen.width,
                       count: 2
                   }, {
                       value: 35 / 1440 * this.screen.width,
                       count: 2
                   }, {
                       value: 15 / 1440 * this.screen.width,
                       count: 2
                   }]
               };
               let e = 0
                 , i = 0;
               this.sizes.itemWidthByDistance = this.sizes.itemWidthByDistance.map(t => {
                   let r = !1
                     , n = this.containerWidth - this.totalGap
                     , s = n - e
                     , a = this.visibleLength - i
                     , o = this.gap;
                   return s - a * o >= t.value * t.count && (r = !0,
                   e += t.value * t.count,
                   i += t.count),
                   {
                       ...t,
                       enabled: r
                   }
               }
               ),
               this.sizes.itemWidthByDistance = this.sizes.itemWidthByDistance.sort( (t, e) => t.enabled && !e.enabled ? -1 : !t.enabled && e.enabled ? 1 : 0),
               requestAnimationFrame( () => {
                   document.documentElement.style.setProperty("--gl-large-width", this.sizes.itemWidthByDistance[0].value + "px"),
                   document.documentElement.style.setProperty("--gl-large-width-rounded", Math.round(this.sizes.itemWidthByDistance[0].value) + "px")
               }
               )
           }
           getMediasToAnimate() {
               var t;
               let e = null !== (t = this.focusIndex) && void 0 !== t ? t : this.middleIndex
                 , i = this.visibleLength % 2 != 0
                 , r = i ? 1 : 0
                 , n = [];
               for (let t = 0; t < this.middleIndex; t++) {
                   let i = e - this.middleIndex + t;
                   i < 0 && (i = this.medias.length + i),
                   n.push(this.medias[i])
               }
               n.push(this.medias[e]);
               for (let t = 1; t <= this.middleIndex + r; t++) {
                   let i = e + t;
                   i >= this.medias.length && (i -= this.medias.length),
                   n.push(this.medias[i])
               }
               return n
           }
           getAnimateCenterIndex(t) {
               let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
               return Math.floor(t.length / 2) + -1 * e
           }
           landingAnimation() {
               var t;
               let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                 , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                 , n = null !== (t = this.focusIndex) && void 0 !== t ? t : this.middleIndex
                 , s = this.visibleLength % 2 != 0;
               r.p8.set(this.medias.map(t => t.program.uniforms.uMaskBottom), {
                   value: 1
               }),
               r.p8.set(this.medias.map(t => t.program.uniforms.uMaskTop), {
                   value: 1
               }),
               this.needsUpdate = !0;
               let a = this.getMediasToAnimate()
                 , o = this.medias.filter(t => !a.includes(t))
                 , u = r.p8.timeline({
                   delay: .2,
                   ...i,
                   onUpdate: () => {
                       this.needsUpdate = !0,
                       i.onUpdate && i.onUpdate(u)
                   }
               })
                 , l = this.getAnimateCenterIndex(a, s ? 1 : 0)
                 , h = e ? "expo.out" : "intro"
                 , c = e ? 1.2 : 2;
               return e || (r.p8.set(a.map(t => t.program.uniforms.uMaskTop), {
                   value: 0
               }),
               u.to(a.map(t => t.program.uniforms.uMaskBottom), {
                   value: 0,
                   duration: c,
                   stagger: e ? 0 : {
                       from: l,
                       each: .03
                   },
                   ease: h
               })),
               e && (this.focusIndex !== n && this.setItemActive(n, {
                   force: !0,
                   duration: 0
               }),
               r.p8.set(a.map(t => t.program.uniforms.uMaskBottom), {
                   value: 0
               }),
               r.p8.set(a.map(t => t.program.uniforms.uMaskTop), {
                   value: 1
               }),
               u.to(a.map(t => t.program.uniforms.uMaskTop), {
                   value: 0,
                   duration: c,
                   ease: h
               }, "<")),
               u.add( () => {
                   this.isReady = !0,
                   r.p8.set(o.map(t => t.program.uniforms.uMaskBottom), {
                       value: 0
                   }),
                   r.p8.set(o.map(t => t.program.uniforms.uMaskTop), {
                       value: 0
                   }),
                   e || this.focusIndex === n || this.setItemActive(n, {
                       force: !0,
                       ease: function(t, e, i) {
                           var n;
                           let s = r.p8.parseEase(t)
                             , a = r.p8.parseEase(e);
                           return i = "function" == typeof (n = i) ? n : r.p8.parseEase("power4.inOut"),
                           function(t) {
                               let e = i(t);
                               return s(t) * (1 - e) + a(t) * e
                           }
                       }("power2.in", "expo.out"),
                       duration: 1.6
                   })
               }
               , ">-1.6"),
               u
           }
           leave() {
               let t = this.getMediasToAnimate()
                 , e = this.getAnimateCenterIndex(t, 0)
                 , i = r.p8.timeline({
                   onUpdate: () => {
                       this.needsUpdate = !0
                   }
               });
               return r.p8.set(t.map(t => t.program.uniforms.uMaskBottom), {
                   value: 0
               }),
               i.fromTo(t.map(t => t.program.uniforms.uMaskTop), {
                   value: 0
               }, {
                   value: 1,
                   duration: 1,
                   ease: "power4.out",
                   stagger: {
                       from: e,
                       each: .03
                   }
               }),
               i
           }
           enter() {
               let t = this.getMediasToAnimate()
                 , e = this.getAnimateCenterIndex(t, 0)
                 , i = r.p8.timeline({
                   delay: .6,
                   onUpdate: () => {
                       this.needsUpdate = !0
                   }
               });
               return r.p8.set(t.map(t => t.program.uniforms.uMaskBottom), {
                   value: 0
               }),
               r.p8.set(t.map(t => t.program.uniforms.uMaskTop), {
                   value: 1
               }),
               i.to(t.map(t => t.program.uniforms.uMaskTop), {
                   value: 0,
                   duration: 1.2,
                   ease: "power4.out",
                   stagger: {
                       from: e,
                       each: .03
                   }
               }),
               i
           }
           createLogger() {
               this.logger = new Proxy({},{
                   set: (t, e, i) => {
                       if (i = Math.round(1e3 * i) / 1e3,
                       t[e] === i)
                           return !0;
                       t[e] = i;
                       let r = document.getElementById("logger");
                       if (!r)
                           return !0;
                       let n = document.querySelector('[data-log="'.concat(e, '"]'));
                       return n || ((n = document.createElement("div")).classList.add("c-log_item"),
                       n.setAttribute("data-log", e),
                       r.appendChild(n)),
                       n.innerHTML = i,
                       !0
                   }
               })
           }
           createRenderer() {
               let t = window.devicePixelRatio || 1;
               this.renderer = new k({
                   dpr: t,
                   alpha: !0
               }),
               this.gl = this.renderer.gl,
               this.gl.clearColor(0, 0, 0, 0)
           }
           createCamera() {
               this.camera = new N(this.gl),
               this.camera.fov = 45,
               this.camera.position.z = 20
           }
           createControls() {
               this.controls = new K(this.camera,{
                   enabled: !0,
                   enableRotate: !1,
                   enableZoom: !0,
                   target: new m(0,0,0)
               })
           }
           createRaycast() {
               this.mouse = new W(-1,-1),
               this.raycast = new tf(this.gl),
               this.hits = [],
               this.raycastMeshes = this.medias.map(t => t.plane)
           }
           createScene() {
               this.scene = new L
           }
           createGeometry() {
               this.planeGeometry = new w(this.gl,{
                   heightSegments: 1,
                   widthSegments: 1
               })
           }
           createMedias() {
               this.medias = this.projectsDuplicated.map( (t, e) => {
                   let {data: i} = t
                     , {image: r} = i
                     , n = new tL({
                       geometry: this.planeGeometry,
                       gl: this.gl,
                       image: r.url,
                       index: e,
                       renderer: this.renderer,
                       scene: this.scene,
                       screen: this.screen,
                       viewport: this.viewport,
                       onLoad: this.onMediaLoad,
                       comingSoon: i.comingSoon ? 1 : 0,
                       debug: this.debug
                   });
                   return n.width = this.sizes.baseItemWidth,
                   n.plane.scale.x = this.toGlScale(n.width),
                   n.plane.scale.y = this.viewport.height * (this.sizes.itemHeight * this.scale) / this.screen.height,
                   n
               }
               )
           }
           checkHits() {
               if (!this.isReady || !this.isInteractive)
                   return;
               this.isOutside = !1;
               let t = this.toScreenGlScale(this.containerWidth - this.sizes.itemWidthByDistance[0].value) * this.maskingOffset / 2
                 , e = this.mouse[0] < -1 + this.toScreenGlScale(this.screenMargin) + t
                 , i = this.mouse[0] > 1 - this.toScreenGlScale(this.screenMargin) - t;
               if ((e || i) && (this.isOutside = !0),
               this.isOutside) {
                   this.isHovering = !1,
                   this.onHover();
                   return
               }
               this.raycast.castMouse(this.camera, this.mouse);
               let n = this.raycast.intersectMeshes(this.raycastMeshes);
               this.raycastMeshes.forEach(t => {
                   let e = this.hits.includes(t)
                     , i = n.includes(t);
                   e && !i && (r.p8.killTweensOf(t, "isHover"),
                   r.p8.to(t, {
                       isHover: 0,
                       duration: .6,
                       onUpdate: () => {
                           this.needsUpdate = !0
                       }
                   })),
                   !e && i && r.p8.to(t, {
                       isHover: 1,
                       ease: "power2.out",
                       duration: 1.2,
                       onUpdate: () => {
                           this.needsUpdate = !0
                       }
                   })
               }
               ),
               this.isHovering = n.length > 0,
               this.onHover();
               let s = this.raycastMeshes.indexOf(n[0]);
               if (this.focusIndex === s && !this.isHoveringFocus) {
                   this.isHoveringFocus = !0;
                   let t = this.projectsDuplicated[this.focusIndex];
                   this.onActiveMouseEnter(t)
               }
               s !== this.hoverIndex && this.isHoveringFocus && (this.onActiveMouseLeave(),
               this.isHoveringFocus = !1),
               this.isHovering && s !== this.hoverIndex && s !== this.focusIndex && this.onNonActiveMouseEnter(s),
               !this.isHovering && this.hoverIndex > -1 && this.onNonActiveMouseLeave(),
               this.hits = n,
               this.hoverIndex = s
           }
           clearHits() {
               let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
               this.raycastMeshes.forEach(e => {
                   r.p8.to(e, {
                       isHover: 0,
                       duration: t,
                       onUpdate: () => {
                           this.needsUpdate = !0
                       }
                   })
               }
               ),
               this.hits = [],
               this.isHovering = !1,
               this.isHoveringFocus = !1,
               this.hoverIndex = null,
               this.onHover()
           }
           prev() {
               let t = 0 === this.focusIndex ? this.raycastMeshes.length - 1 : this.focusIndex - 1;
               this.setItemActive(t)
           }
           next() {
               let t = this.focusIndex === this.raycastMeshes.length - 1 ? 0 : this.focusIndex + 1;
               this.setItemActive(t)
           }
           onKeyUp(t) {
               if (null === this.focusIndex || !this.isInteractive)
                   return;
               let e = 38 === t.keyCode
                 , i = 40 === t.keyCode
                 , r = 39 === t.keyCode
                 , n = 37 === t.keyCode
                 , s = 32 === t.keyCode
                 , a = 8 === t.keyCode;
               (i || r || s) && this.next(),
               (e || n || a) && this.prev()
           }
           onTouchDown(t) {
               if (this.isDown = !0,
               this.startX = t.touches ? t.touches[0].clientX : t.clientX,
               this.startY = t.touches ? t.touches[0].clientY : t.clientY,
               this.isTouchDevice && (this.mouse.set(2 * (t.x / this.renderer.width) - 1, 2 * (1 - t.y / this.renderer.height) - 1),
               this.checkHits(),
               this.onCheck(t)),
               this.hits && this.hits.length) {
                   let t = this.hits[0];
                   this.itemClickedDown = t,
                   this.itemClickedDownTime = performance.now()
               }
           }
           onTouchMove(t) {
               this.mouse.set(2 * (t.x / this.renderer.width) - 1, 2 * (1 - t.y / this.renderer.height) - 1)
           }
           onHover() {
               this.isReady && (this.isHovering ? document.documentElement.classList.add("is-hovering") : document.documentElement.classList.remove("is-hovering"))
           }
           onTouchUp(t) {
               this.onCheck(t)
           }
           onCheck(t) {
               if (!this.isOutside && this.isInteractive) {
                   if (this.itemClickedDown) {
                       let e = t.touches && t.touches[0] ? t.touches[0].clientX : t.clientX
                         , i = t.touches && t.touches[0] ? t.touches[0].clientY : t.clientY
                         , r = Math.sqrt(Math.pow(e - this.startX, 2) + Math.pow(i - this.startY, 2))
                         , n = this.hits[0]
                         , s = performance.now() - this.itemClickedDownTime;
                       n === this.itemClickedDown && s < 300 && r < 50 && this.onItemClick(n)
                   }
                   this.itemClickedDown && (this.itemClickedDown = null)
               }
           }
           getScrollTo(t) {
               let e = this.raycastMeshes[t];
               if (!e)
                   return {
                       from: this.scroll,
                       to: this.scroll
                   };
               let i = this.raycastMeshes.slice(0, t)
                 , n = this.computePlanesWidthByDistance(t)
                 , s = this.sizes.itemWidthByDistance[0].value
                 , a = i.reduce( (t, e, i) => t + this.fromGlScale(n[i]) + this.gap, 0)
                 , o = this.fromGlScale(e.extra);
               r.p8.killTweensOf(this, "scroll");
               let u = -this.toGlScale(a + o + s / 2);
               u += this.toGlScale(this.containerWidth) / 2 + this.scroll;
               let l = this.scroll
                 , h = u;
               return u + this.widthTotal < 0 && (l += this.widthTotal,
               h += this.widthTotal),
               {
                   from: l,
                   to: h,
                   planesWidths: n
               }
           }
           onRouteChange(t) {
               let e = this.projectsDuplicated.findIndex(e => e.uid === t);
               this.setItemActive(e, {
                   force: !0,
                   duration: 0,
                   ease: "none"
               })
           }
           setItemActive(t) {
               let {force: e, ease: i, duration: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
               if (null === t || this.focusIndex === t && !e)
                   return;
               this.focusIndex = t,
               i = null != i ? i : "expo.out",
               n = null != n ? n : 1.2;
               let s = this.projectsDuplicated[t];
               this.onActive && this.onActive(s.uid);
               let a = r.p8.timeline({
                   id: "click",
                   onStart: () => {
                       this.isAnimating = !0
                   }
                   ,
                   onUpdate: () => {
                       this.isAnimating = !0,
                       this.needsUpdate = !0
                   }
                   ,
                   onComplete: () => {
                       this.isAnimating = !1
                   }
               })
                 , {from: o, to: u, planesWidths: l} = this.getScrollTo(t);
               a.fromTo(this, {
                   scroll: o
               }, {
                   scroll: u,
                   ease: i,
                   duration: n,
                   onUpdate: () => {
                       this.offsetController && this.debug && this.offsetController.updateDisplay()
                   }
               }, 0),
               a.to(this.raycastMeshes, {
                   isFocus: e => e === t ? 1 : 0,
                   ease: i,
                   duration: n
               }, 0),
               a.to(this.raycastMeshes.map(t => t.scale), {
                   x: t => l[t],
                   ease: i,
                   duration: n
               }, 0)
           }
           onItemClick(t) {
               if (!this.isReady)
                   return;
               let e = this.raycastMeshes.indexOf(t)
                 , i = this.projectsDuplicated[e];
               this.focusIndex === e ? this.onActiveClick && this.onActiveClick(i) : this.setItemActive(e)
           }
           onResize() {
               if (this.computeScreen(),
               this.computeVisibleLength(),
               this.computeSizes(),
               this.medias && (this.medias.forEach(t => {
                   t.onResize({
                       screen: this.screen,
                       viewport: this.viewport
                   }),
                   t.plane.scale.y = this.viewport.height * (this.sizes.itemHeight * this.scale) / this.screen.height
               }
               ),
               null !== this.focusIndex)) {
                   let {to: t, planesWidths: e} = this.getScrollTo(this.focusIndex);
                   this.scroll = t,
                   this.raycastMeshes.forEach( (t, i) => {
                       t.scale.x = e[i]
                   }
                   ),
                   this.needsUpdate = !0
               }
               this.scrollIndicator && (this.scrollIndicator.plane.scale.x = this.toGlScale(this.sizes.itemWidthByDistance[0].value),
               this.scrollIndicator.plane.scale.y = this.viewport.height * (this.sizes.itemHeight * this.scale) / this.screen.height,
               this.scrollIndicator.onResize({
                   screen: this.screen,
                   viewport: this.viewport
               }))
           }
           computeScreen() {
               this.screen = {
                   height: window.innerHeight,
                   width: window.innerWidth
               },
               this.scale = 1,
               this.screenMargin = 0,
               this.containerWidth = this.screen.width - 2 * this.screenMargin,
               this.renderer.setSize(this.screen.width, this.screen.height),
               this.camera.perspective({
                   aspect: this.gl.canvas.width / this.gl.canvas.height
               });
               let t = this.camera.fov * (Math.PI / 180)
                 , e = 2 * Math.tan(t / 2) * this.camera.position.z
                 , i = e * this.camera.aspect;
               this.viewport = {
                   height: e,
                   width: i
               }
           }
           computePlanesWidthByDistance(t) {
               let e = this.raycastMeshes;
               return e.map(e => {
                   var i;
                   let r = this.raycastMeshes.indexOf(e)
                     , n = function(t, e, i) {
                       let r = Math.abs(i - e);
                       return Math.min(r, t - r)
                   }(this.raycastMeshes.length, t, r);
                   if (null === (i = this.sizes.itemWidthByDistance[n]) || void 0 === i ? void 0 : i.enabled)
                       return this.toGlScale(this.sizes.itemWidthByDistance[n].value);
                   let {count: s, total: a} = this.sizes.itemWidthByDistance.reduce( (t, e) => e.enabled ? {
                       count: t.count + e.count,
                       total: t.total + e.value * e.count
                   } : t, {
                       count: 0,
                       total: 0
                   })
                     , o = this.gap * (s - 1)
                     , u = this.visibleLength - s
                     , l = this.gap * u
                     , h = this.containerWidth - a - o - l;
                   return 0 === u ? 0 : Math.max(0, this.toGlScale(h / u))
               }
               )
           }
           computePlanes() {
               let t = this.toGlScale(this.gap)
                 , e = this.medias.map(t => (t.plane.program.uniforms.uPlaneSizes.value = [t.plane.scale.x, t.plane.scale.y],
               {
                   scale: {
                       x: t.plane.scale.x,
                       y: t.plane.scale.y
                   }
               }));
               this.widthTotal = e.reduce( (e, i) => {
                   let {scale: {x: r}} = i;
                   return e + r + t
               }
               , 0),
               this.medias.forEach( (i, n) => {
                   let s = e[n]
                     , a = s.scale.x + t
                     , o = e.slice(0, n).reduce( (e, i) => {
                       let {scale: {x: r}} = i;
                       return e + r + t
                   }
                   , 0)
                     , u = o;
                   u += s.scale.x / 2;
                   let {x: l, extra: h} = this.calcPos({
                       index: n,
                       scroll: this.scroll,
                       pos: u,
                       gap: t,
                       widthItem: s.scale.x,
                       widthTotal: this.widthTotal
                   });
                   i.extra = h,
                   i.plane.extra = i.extra,
                   l -= this.toGlScale(this.containerWidth) / 2;
                   let c = this.toGlScale(this.containerWidth - this.sizes.itemWidthByDistance[0].value) * this.maskingOffset / 2
                     , d = l - s.scale.x / 2 + this.toGlScale(this.containerWidth / 2) - c
                     , f = l + s.scale.x / 2 - this.toGlScale(this.containerWidth / 2) + c;
                   if (i.program.uniforms.uOverflowLeft.value = d < 0 ? Math.abs(d / a) : 0,
                   i.program.uniforms.uOverflowRight.value = f > 0 ? Math.abs(f / a) : 0,
                   i.program.uniforms.uHidden.value = this.maskingOffset >= 1 && n !== this.focusIndex ? 1 : 0,
                   this.useScrollIndicator) {
                       let t = this.wheel % this.wheelNextThreshold / this.wheelNextThreshold;
                       i.program.uniforms.uProgress.value = t
                   }
                   i.plane.position.x = l;
                   let p = r.p8.utils.mapRange(-this.toGlScale(this.containerWidth / 2), this.toGlScale(this.containerWidth / 2), 0, 1, l);
                   i.program.uniforms.uParallax.value = p
               }
               )
           }
           computeScrollIndicator() {
               let t = this.wheel % this.wheelNextThreshold / this.wheelNextThreshold;
               t < 0 && (t = 1 + t),
               this.scrollIndicator.program.uniforms.uProgress.value = t
           }
           calcPos(t) {
               let {scroll: e, pos: i, widthItem: r, widthTotal: n, gap: s} = t
                 , a = r / 2 + s / 2
                 , o = (e + i + 65536 * n + a) % n - a;
               return {
                   x: o,
                   extra: o - i
               }
           }
           update() {
               this.allLoaded && (this.checkHits(),
               this.controls && this.controls.update(),
               this.medias && this.computePlanes(),
               this.scrollIndicator && this.computeScrollIndicator(),
               this.needsUpdate && (this.renderer.render({
                   scene: this.scene,
                   camera: this.camera
               }),
               this.needsUpdate = !1))
           }
           setDebug(t) {
               this.debug = t,
               this.medias.forEach(e => {
                   e.program.uniforms.uDebug.value = t ? 1 : 0
               }
               ),
               t || (this.controls.offset = new m,
               this.controls.forcePosition(),
               this.camera.position.x = 0,
               this.camera.position.y = 0,
               this.camera.position.z = 20),
               this.controls && (this.controls.enabled = !!t)
           }
           onWheel(t) {
               this.isReady && this.isInteractive && (this.wheel += .1 * t.deltaY,
               this.wheel > this.wheelNextThreshold && (this.wheel = 0,
               this.next()),
               this.wheel < this.wheelPrevThreshold && (this.wheel = 0,
               this.prev()),
               clearTimeout(this.wheelTimeout),
               r.p8.killTweensOf(this, "wheel"),
               this.wheelTimeout = setTimeout( () => {
                   this.wheelTween = r.p8.to(this, {
                       wheel: 0,
                       duration: .4,
                       ease: "power2.inOut",
                       onUpdate: () => {
                           this.needsUpdate = !0
                       }
                   })
               }
               , 100),
               this.needsUpdate = !0)
           }
           onMqTouchChange(t) {
               this.isTouchDevice = t.matches
           }
           addEventListeners() {
               window.addEventListener("resize", this.onResize),
               window.addEventListener("keydown", this.onKeyUp),
               window.addEventListener("mousedown", this.onTouchDown),
               window.addEventListener("mousemove", this.onTouchMove),
               window.addEventListener("mouseup", this.onTouchUp),
               window.addEventListener("touchstart", this.onTouchDown),
               window.addEventListener("touchmove", this.onTouchMove),
               window.addEventListener("touchend", this.onTouchUp),
               window.addEventListener("wheel", this.onWheel),
               this.mqTouch = window.matchMedia("(pointer: coarse)"),
               this.isTouchDevice = this.mqTouch.matches,
               this.mqTouch.addEventListener("change", this.onMqTouchChange)
           }
           removeEventListeners() {
               window.removeEventListener("resize", this.onResize),
               window.removeEventListener("keydown", this.onKeyUp),
               window.removeEventListener("mousedown", this.onTouchDown),
               window.removeEventListener("mousemove", this.onTouchMove),
               window.removeEventListener("mouseup", this.onTouchUp),
               window.removeEventListener("touchstart", this.onTouchDown),
               window.removeEventListener("touchmove", this.onTouchMove),
               window.removeEventListener("touchend", this.onTouchUp),
               window.removeEventListener("wheel", this.onWheel),
               this.mqTouch && this.mqTouch.removeEventListener("change", this.onMqTouchChange)
           }
           destroy() {
               this.removeEventListeners(),
               this.medias.forEach(t => {
                   t && (null == t || t.destroy())
               }
               )
           }
           constructor({focusIndex: t=null, projects: e, homeDataProjects: i, onActive: r, onActiveClick: n, onActiveMouseEnter: s, onActiveMouseLeave: a, onNonActiveMouseEnter: o, onNonActiveMouseLeave: u, onReady: l, debug: h=!1}) {
               this.update = this.update.bind(this),
               this.onMediaLoad = this.onMediaLoad.bind(this),
               this.onActive = r,
               this.onActiveClick = n,
               this.onActiveMouseEnter = s,
               this.onActiveMouseLeave = a,
               this.onNonActiveMouseEnter = o,
               this.onNonActiveMouseLeave = u,
               this.onReady = l,
               this.isHovering = !1,
               this.isHoveringFocus = !1,
               this.isOutside = !1,
               this.isReady = !1,
               this.isInteractive = !0,
               this.isAnimating = !1,
               this.isTouchDevice = !1,
               this.debug = h,
               this.loaded = 0,
               this.allLoaded = !1,
               this.scroll = 0;
               let c = new URLSearchParams(window.location.search)
                 , d = c.get("scroll");
               this.useScrollIndicator = !!d,
               this.wheel = 0,
               this.wheelNextThreshold = 50,
               this.wheelPrevThreshold = -this.wheelNextThreshold,
               this.focusIndex = t,
               this.hoverIndex = null,
               this.gap = 2,
               this.maskingOffset = 0,
               this.projects = e || [],
               this.projectsDuplicated = [...this.projects, ...this.projects, ...this.projects],
               this.homeDataProjects = i || [],
               this.visibleLength = this.projects.length,
               this.totalGap = this.gap * (this.visibleLength - 1),
               this.middleIndex = Math.floor(this.visibleLength / 2),
               this.needsUpdate = !1,
               this.onResize = this.onResize.bind(this),
               this.onWheel = this.onWheel.bind(this),
               this.onKeyUp = this.onKeyUp.bind(this),
               this.onTouchDown = this.onTouchDown.bind(this),
               this.onTouchMove = this.onTouchMove.bind(this),
               this.onTouchUp = this.onTouchUp.bind(this),
               this.onMqTouchChange = this.onMqTouchChange.bind(this),
               this.createRenderer(),
               this.createCamera(),
               this.createScene(),
               this.computeScreen(),
               this.computeVisibleLength(),
               this.computeSizes(),
               this.orderProjects(),
               this.createGeometry(),
               this.createMedias(),
               this.createRaycast(),
               this.removeEventListeners(),
               this.addEventListeners(),
               this.createPreloader(),
               this.createMiddleChecker()
           }
       }
       function tV() {
           return 10
       }
   },
   1218: function(t, e, i) {
       "use strict";
       i.d(e, {
           k: function() {
               return u
           },
           q: function() {
               return o
           }
       });
       var r = i(6162)
         , n = i(3439)
         , s = i(2206)
         , a = i(959);
       let o = (0,
       a.createContext)({
           timelines: new Map,
           addTimeline: function() {
               let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "global"
                 , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
               return s.p8.timeline({
                   id: t,
                   paused: !0,
                   ...e
               })
           },
           setTimelines: () => {}
           ,
           resetTimelines: () => {}
       })
         , u = t => {
           let {children: e} = t
             , [i,u] = (0,
           a.useState)(new Map)
             , l = (0,
           n.LZ)(null)
             , h = (0,
           a.useCallback)( () => {
               i.forEach(t => {
                   t.clear()
               }
               ),
               u(new Map)
           }
           , [i])
             , c = (0,
           a.useCallback)(function() {
               let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "global"
                 , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                   onStart: () => {}
                   ,
                   onComplete: () => {}
               };
               if (i.has(t))
                   return i.get(t);
               let r = s.p8.timeline({
                   id: t,
                   paused: !0,
                   onStart: () => {
                       null == l || l.stop(),
                       e.onStart && e.onStart()
                   }
                   ,
                   onComplete: () => {
                       null == l || l.start(),
                       e.onComplete && e.onComplete()
                   }
                   ,
                   ...e
               });
               return u(e => {
                   let i = new Map(e);
                   return i.set(t, r),
                   i
               }
               ),
               r
           }, []);
           return (0,
           r.jsx)(o.Provider, {
               value: {
                   timelines: i,
                   addTimeline: c,
                   setTimelines: u,
                   resetTimelines: h
               },
               children: e
           })
       }
   },
   3106: function(t, e, i) {
       "use strict";
       i.d(e, {
           s: function() {
               return n
           }
       });
       var r = i(959);
       function n() {
           let {root: t=null, rootMargin: e="0px", threshold: i=0, once: n=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
             , [s,a] = (0,
           r.useState)(null)
             , [o,u] = (0,
           r.useState)(!1);
           return (0,
           r.useEffect)( () => {
               if (!s)
                   return;
               let r = new IntersectionObserver(t => {
                   let[{isIntersecting: e}] = t;
                   u(e),
                   n && e && r.disconnect()
               }
               ,{
                   root: t,
                   rootMargin: e,
                   threshold: i
               });
               return r.observe(s),
               () => {
                   r.disconnect()
               }
           }
           , [s, t, e, i, n]),
           [o, a]
       }
   },
   5949: function(t, e, i) {
       "use strict";
       i.d(e, {
           Ro: function() {
               return s
           }
       }),
       i(959),
       i(4478);
       var r = i(528);
       function n(t) {
           if (!t)
               return [];
           let e = t.split("-");
           return 2 === e.length ? e : []
       }
       let s = (0,
       r.Ue)( (t, e) => ({
           cursor: void 0,
           prevCursor: void 0,
           setCursor: i => {
               if (!i)
                   return;
               let r = e()
                 , s = r.cursor
                 , [a,o] = n(s)
                 , [u,l] = n(i)
                 , h = !!i && i.includes("-")
                 , c = !1;
               a === l && o === u && h && (c = !0),
               t({
                   cursor: "active",
                   prevCursor: s,
                   isMorphing: h,
                   reverseMorphing: c
               })
           }
           ,
           clearCursor: () => {
               t({
                   cursor: void 0,
                   prevCursor: void 0,
                   isMorphing: !1,
                   reverseMorphing: !1
               }),
               document.documentElement.classList.remove("cursor-larger")
           }
           ,
           isAnimating: !1,
           setIsAnimating: e => t({
               isAnimating: e
           }),
           isMorphing: !1,
           setIsMorphing: e => t({
               isMorphing: e
           }),
           reverseMorphing: !1,
           setReverseMorphing: e => t({
               reverseMorphing: e
           })
       }))
   },
   1172: function(t, e, i) {
       "use strict";
       i.d(e, {
           o: function() {
               return n
           }
       });
       var r = i(528);
       let n = (0,
       r.Ue)(t => ({
           headerData: void 0,
           setHeaderData: e => t({
               headerData: e
           }),
           footerData: void 0,
           setFooterData: e => t({
               footerData: e
           }),
           navIsOpened: !1,
           setNavIsOpened: e => t({
               navIsOpened: e
           }),
           triggerTransition: !1,
           setTriggerTransition: e => t({
               triggerTransition: e
           }),
           isRouteTransitioning: !1,
           setIsRouteTransitioning: e => t({
               isRouteTransitioning: e
           }),
           routeHistory: [],
           addRouteToHistory: e => t(t => {
               let i = [...t.routeHistory]
                 , r = i[i.length - 1];
               return r === e || "/project/[uid]" === e ? {
                   routeHistory: i
               } : {
                   routeHistory: [...t.routeHistory, e]
               }
           }
           ),
           isPreloaded: !1,
           setIsPreloaded: e => t({
               isPreloaded: e
           }),
           isHeroScrolled: !1,
           setIsHeroScrolled: e => t({
               isHeroScrolled: e
           }),
           fontsLoaded: !1,
           setFontsLoaded: e => t({
               fontsLoaded: e
           }),
           glMaskingOffset: 0,
           setGlMaskingOffset: e => t({
               glMaskingOffset: e
           }),
           glIsInteractive: !0,
           setGlIsInteractive: e => t({
               glIsInteractive: e
           }),
           glProjects: [],
           setGlProjects: e => t({
               glProjects: e
           }),
           mobileProjects: [],
           setMobileProjects: e => t({
               mobileProjects: e
           }),
           glIsHidden: !1,
           setGlIsHidden: e => t({
               glIsHidden: e
           }),
           lineSpacing: 20,
           setLineSpacing: e => t({
               lineSpacing: e
           })
       }))
   },
   592: function(t, e, i) {
       "use strict";
       i.d(e, {
           _: function() {
               return n
           }
       });
       var r = i(4899);
       let n = t => r.S(t).replace(/\n/g, "<br />")
   },
   2354: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.createAsyncLocalStorage = function() {
           return globalThis.AsyncLocalStorage ? new globalThis.AsyncLocalStorage : new i
       }
       ;
       class i {
           disable() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
           getStore() {}
           run() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
           exit() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
           enterWith() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
       }
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   6057: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.bailoutToClientRendering = function() {
           let t = n.staticGenerationAsyncStorage.getStore();
           return null != t && !!t.forceStatic || ((null == t ? void 0 : t.isStaticGeneration) && r.suspense(),
           !1)
       }
       ;
       var r = i(500)
         , n = i(2792);
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   3506: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.clientHookInServerComponentError = function(t) {}
       ,
       (0,
       i(1322).Z)(i(959)),
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   8926: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.headers = function() {
           if (s.staticGenerationBailout("headers"))
               return new Headers({});
           let t = n.requestAsyncStorage.getStore();
           if (!t)
               throw Error("Invariant: Method expects to have requestAsyncStorage, none available");
           return t.headers
       }
       ,
       e.previewData = function() {
           let t = n.requestAsyncStorage.getStore();
           if (!t)
               throw Error("Invariant: Method expects to have requestAsyncStorage, none available");
           return t.previewData
       }
       ,
       e.cookies = function() {
           if (s.staticGenerationBailout("cookies"))
               return new r.RequestCookies(new Headers({}));
           let t = n.requestAsyncStorage.getStore();
           if (!t)
               throw Error("Invariant: Method expects to have requestAsyncStorage, none available");
           return t.cookies
       }
       ;
       var r = i(8142)
         , n = i(7605)
         , s = i(8016);
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   8419: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.DYNAMIC_ERROR_CODE = void 0;
       let i = "DYNAMIC_SERVER_USAGE";
       e.DYNAMIC_ERROR_CODE = i,
       e.DynamicServerError = class extends Error {
           constructor(t) {
               super("Dynamic server usage: ".concat(t)),
               this.digest = i
           }
       }
       ,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   1413: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.useSearchParams = function() {
           o.clientHookInServerComponentError("useSearchParams");
           let t = r.useContext(s.SearchParamsContext)
             , e = r.useMemo( () => new f(t || new URLSearchParams), [t]);
           if (a.bailoutToClientRendering())
               return e;
           if (!t)
               throw Error("invariant expected search params to be mounted");
           return e
       }
       ,
       e.usePathname = function() {
           return o.clientHookInServerComponentError("usePathname"),
           r.useContext(s.PathnameContext)
       }
       ,
       Object.defineProperty(e, "ServerInsertedHTMLContext", {
           enumerable: !0,
           get: function() {
               return u.ServerInsertedHTMLContext
           }
       }),
       Object.defineProperty(e, "useServerInsertedHTML", {
           enumerable: !0,
           get: function() {
               return u.useServerInsertedHTML
           }
       }),
       e.useRouter = function() {
           o.clientHookInServerComponentError("useRouter");
           let t = r.useContext(n.AppRouterContext);
           if (null === t)
               throw Error("invariant expected app router to be mounted");
           return t
       }
       ,
       e.useSelectedLayoutSegments = p,
       e.useSelectedLayoutSegment = function() {
           let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "children";
           o.clientHookInServerComponentError("useSelectedLayoutSegment");
           let e = p(t);
           return 0 === e.length ? null : e[0]
       }
       ,
       Object.defineProperty(e, "redirect", {
           enumerable: !0,
           get: function() {
               return l.redirect
           }
       }),
       Object.defineProperty(e, "notFound", {
           enumerable: !0,
           get: function() {
               return h.notFound
           }
       });
       var r = i(959)
         , n = i(8052)
         , s = i(1863)
         , a = i(6057)
         , o = i(3506)
         , u = i(4532)
         , l = i(3877)
         , h = i(2838);
       let c = Symbol("internal for urlsearchparams readonly");
       function d() {
           return Error("ReadonlyURLSearchParams cannot be modified")
       }
       class f {
           [Symbol.iterator]() {
               return this[c][Symbol.iterator]()
           }
           append() {
               throw d()
           }
           delete() {
               throw d()
           }
           set() {
               throw d()
           }
           sort() {
               throw d()
           }
           constructor(t) {
               this[c] = t,
               this.entries = t.entries.bind(t),
               this.forEach = t.forEach.bind(t),
               this.get = t.get.bind(t),
               this.getAll = t.getAll.bind(t),
               this.has = t.has.bind(t),
               this.keys = t.keys.bind(t),
               this.values = t.values.bind(t),
               this.toString = t.toString.bind(t)
           }
       }
       function p() {
           let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "children";
           o.clientHookInServerComponentError("useSelectedLayoutSegments");
           let {tree: e} = r.useContext(n.LayoutRouterContext);
           return function t(e, i) {
               let r, n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
               if (n)
                   r = e[1][i];
               else {
                   var a;
                   let t = e[1];
                   r = null != (a = t.children) ? a : Object.values(t)[0]
               }
               if (!r)
                   return s;
               let o = r[0]
                 , u = Array.isArray(o) ? o[1] : o;
               return u ? (s.push(u),
               t(r, i, !1, s)) : s
           }(e, t)
       }
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   2838: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.notFound = function() {
           let t = Error(i);
           throw t.digest = i,
           t
       }
       ,
       e.NOT_FOUND_ERROR_CODE = void 0;
       let i = "NEXT_NOT_FOUND";
       e.NOT_FOUND_ERROR_CODE = i,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   3877: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.redirect = function(t) {
           let e = Error(i);
           throw e.digest = i + ";" + t,
           e
       }
       ,
       e.REDIRECT_ERROR_CODE = void 0;
       let i = "NEXT_REDIRECT";
       e.REDIRECT_ERROR_CODE = i,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   7605: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.requestAsyncStorage = void 0;
       var r = i(2354);
       let n = r.createAsyncLocalStorage();
       e.requestAsyncStorage = n,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   8016: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.staticGenerationBailout = function(t) {
           let e = n.staticGenerationAsyncStorage.getStore();
           if (null == e ? void 0 : e.forceStatic)
               return !0;
           if (null == e ? void 0 : e.isStaticGeneration) {
               e.revalidate = 0;
               let i = new r.DynamicServerError(t);
               throw e.dynamicUsageDescription = t,
               e.dynamicUsageStack = i.stack,
               i
           }
           return !1
       }
       ;
       var r = i(8419)
         , n = i(2792);
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   5761: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.getDomainLocale = function(t, e, i, r) {
           return !1
       }
       ,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   8564: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.default = void 0;
       var r = i(1322).Z
         , n = i(6239).Z
         , s = r(i(959))
         , a = i(666)
         , o = i(425)
         , u = i(2958)
         , l = i(8907)
         , h = i(8052)
         , c = i(6882)
         , d = i(5761)
         , f = i(383);
       let p = new Set;
       function m(t, e, i, r) {
           if (a.isLocalURL(e)) {
               if (!r.bypassPrefetchedCheck) {
                   let n = void 0 !== r.locale ? r.locale : "locale"in t ? t.locale : void 0
                     , s = e + "%" + i + "%" + n;
                   if (p.has(s))
                       return;
                   p.add(s)
               }
               Promise.resolve(t.prefetch(e, i, r)).catch(t => {}
               )
           }
       }
       function g(t) {
           return "string" == typeof t ? t : o.formatUrl(t)
       }
       let v = s.default.forwardRef(function(t, e) {
           let i, r;
           let {href: o, as: p, children: v, prefetch: x, passHref: y, replace: D, shallow: w, scroll: b, locale: _, onClick: k, onMouseEnter: E, onTouchStart: T, legacyBehavior: C=!1} = t
             , A = n(t, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
           i = v,
           C && ("string" == typeof i || "number" == typeof i) && (i = s.default.createElement("a", null, i));
           let S = !1 !== x
             , M = s.default.useContext(l.RouterContext)
             , F = s.default.useContext(h.AppRouterContext)
             , O = null != M ? M : F
             , P = !M
             , {href: R, as: B} = s.default.useMemo( () => {
               if (!M) {
                   let t = g(o);
                   return {
                       href: t,
                       as: p ? g(p) : t
                   }
               }
               let[t,e] = a.resolveHref(M, o, !0);
               return {
                   href: t,
                   as: p ? a.resolveHref(M, p) : e || t
               }
           }
           , [M, o, p])
             , L = s.default.useRef(R)
             , I = s.default.useRef(B);
           C && (r = s.default.Children.only(i));
           let j = C ? r && "object" == typeof r && r.ref : e
             , [z,N,V] = c.useIntersection({
               rootMargin: "200px"
           })
             , G = s.default.useCallback(t => {
               (I.current !== B || L.current !== R) && (V(),
               I.current = B,
               L.current = R),
               z(t),
               j && ("function" == typeof j ? j(t) : "object" == typeof j && (j.current = t))
           }
           , [B, j, R, V, z]);
           s.default.useEffect( () => {
               O && N && S && m(O, R, B, {
                   locale: _
               })
           }
           , [B, R, N, _, S, null == M ? void 0 : M.locale, O]);
           let U = {
               ref: G,
               onClick(t) {
                   C || "function" != typeof k || k(t),
                   C && r.props && "function" == typeof r.props.onClick && r.props.onClick(t),
                   O && !t.defaultPrevented && function(t, e, i, r, n, o, u, l, h, c) {
                       let {nodeName: d} = t.currentTarget
                         , f = "A" === d.toUpperCase();
                       if (f && (function(t) {
                           let {target: e} = t.currentTarget;
                           return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                       }(t) || !a.isLocalURL(i)))
                           return;
                       t.preventDefault();
                       let p = () => {
                           "beforePopState"in e ? e[n ? "replace" : "push"](i, r, {
                               shallow: o,
                               locale: l,
                               scroll: u
                           }) : e[n ? "replace" : "push"](r || i, {
                               forceOptimisticNavigation: !c
                           })
                       }
                       ;
                       h ? s.default.startTransition(p) : p()
                   }(t, O, R, B, D, w, b, _, P, S)
               },
               onMouseEnter(t) {
                   C || "function" != typeof E || E(t),
                   C && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(t),
                   O && (S || !P) && m(O, R, B, {
                       locale: _,
                       priority: !0,
                       bypassPrefetchedCheck: !0
                   })
               },
               onTouchStart(t) {
                   C || "function" != typeof T || T(t),
                   C && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(t),
                   O && (S || !P) && m(O, R, B, {
                       locale: _,
                       priority: !0,
                       bypassPrefetchedCheck: !0
                   })
               }
           };
           if (!C || y || "a" === r.type && !("href"in r.props)) {
               let t = void 0 !== _ ? _ : null == M ? void 0 : M.locale
                 , e = (null == M ? void 0 : M.isLocaleDomain) && d.getDomainLocale(B, t, null == M ? void 0 : M.locales, null == M ? void 0 : M.domainLocales);
               U.href = e || f.addBasePath(u.addLocale(B, t, null == M ? void 0 : M.defaultLocale))
           }
           return C ? s.default.cloneElement(r, U) : s.default.createElement("a", Object.assign({}, A, U), i)
       });
       e.default = v,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   6882: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.useIntersection = function(t) {
           let {rootRef: e, rootMargin: i, disabled: u} = t
             , l = u || !s
             , [h,c] = r.useState(!1)
             , d = r.useRef(null)
             , f = r.useCallback(t => {
               d.current = t
           }
           , []);
           r.useEffect( () => {
               if (s) {
                   if (l || h)
                       return;
                   let t = d.current;
                   if (t && t.tagName) {
                       let r = function(t, e, i) {
                           let {id: r, observer: n, elements: s} = function(t) {
                               let e;
                               let i = {
                                   root: t.root || null,
                                   margin: t.rootMargin || ""
                               }
                                 , r = o.find(t => t.root === i.root && t.margin === i.margin);
                               if (r && (e = a.get(r)))
                                   return e;
                               let n = new Map
                                 , s = new IntersectionObserver(t => {
                                   t.forEach(t => {
                                       let e = n.get(t.target)
                                         , i = t.isIntersecting || t.intersectionRatio > 0;
                                       e && i && e(i)
                                   }
                                   )
                               }
                               ,t);
                               return e = {
                                   id: i,
                                   observer: s,
                                   elements: n
                               },
                               o.push(i),
                               a.set(i, e),
                               e
                           }(i);
                           return s.set(t, e),
                           n.observe(t),
                           function() {
                               if (s.delete(t),
                               n.unobserve(t),
                               0 === s.size) {
                                   n.disconnect(),
                                   a.delete(r);
                                   let t = o.findIndex(t => t.root === r.root && t.margin === r.margin);
                                   t > -1 && o.splice(t, 1)
                               }
                           }
                       }(t, t => t && c(t), {
                           root: null == e ? void 0 : e.current,
                           rootMargin: i
                       });
                       return r
                   }
               } else if (!h) {
                   let t = n.requestIdleCallback( () => c(!0));
                   return () => n.cancelIdleCallback(t)
               }
           }
           , [l, i, e, h, d.current]);
           let p = r.useCallback( () => {
               c(!1)
           }
           , []);
           return [f, h, p]
       }
       ;
       var r = i(959)
         , n = i(3860);
       let s = "function" == typeof IntersectionObserver
         , a = new Map
         , o = [];
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   500: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.suspense = function() {
           let t = Error(r.NEXT_DYNAMIC_NO_SSR_CODE);
           throw t.digest = r.NEXT_DYNAMIC_NO_SSR_CODE,
           t
       }
       ,
       e.NoSSR = function(t) {
           let {children: e} = t;
           return e
       }
       ,
       (0,
       i(1322).Z)(i(959));
       var r = i(6188)
   },
   8146: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.default = function(t, e) {
           let i = s.default
             , n = {
               loading: t => {
                   let {error: e, isLoading: i, pastDelay: r} = t;
                   return null
               }
           };
           t instanceof Promise ? n.loader = () => t : "function" == typeof t ? n.loader = t : "object" == typeof t && (n = r({}, n, t)),
           n = r({}, n, e);
           let o = n.loader
             , u = () => null != o ? o().then(a) : Promise.resolve(a( () => null));
           return n.loadableGenerated && delete (n = r({}, n, n.loadableGenerated)).loadableGenerated,
           "boolean" != typeof n.ssr || n.ssr || (delete n.webpack,
           delete n.modules),
           i(r({}, n, {
               loader: u
           }))
       }
       ;
       var r = i(5321).Z
         , n = i(1322).Z;
       n(i(959));
       var s = n(i(9179));
       function a(t) {
           return {
               default: (null == t ? void 0 : t.default) || t
           }
       }
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   1372: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.LoadableContext = void 0;
       var r = (0,
       i(1322).Z)(i(959));
       let n = r.default.createContext(null);
       e.LoadableContext = n
   },
   9179: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.default = void 0;
       var r = i(9219).Z
         , n = i(5321).Z
         , s = (0,
       i(1322).Z)(i(959))
         , a = i(500)
         , o = i(1372);
       let u = []
         , l = []
         , h = !1;
       function c(t) {
           let e = t()
             , i = {
               loading: !0,
               loaded: null,
               error: null
           };
           return i.promise = e.then(t => (i.loading = !1,
           i.loaded = t,
           t)).catch(t => {
               throw i.loading = !1,
               i.error = t,
               t
           }
           ),
           i
       }
       class d {
           promise() {
               return this._res.promise
           }
           retry() {
               this._clearTimeouts(),
               this._res = this._loadFn(this._opts.loader),
               this._state = {
                   pastDelay: !1,
                   timedOut: !1
               };
               let {_res: t, _opts: e} = this;
               t.loading && ("number" == typeof e.delay && (0 === e.delay ? this._state.pastDelay = !0 : this._delay = setTimeout( () => {
                   this._update({
                       pastDelay: !0
                   })
               }
               , e.delay)),
               "number" == typeof e.timeout && (this._timeout = setTimeout( () => {
                   this._update({
                       timedOut: !0
                   })
               }
               , e.timeout))),
               this._res.promise.then( () => {
                   this._update({}),
                   this._clearTimeouts()
               }
               ).catch(t => {
                   this._update({}),
                   this._clearTimeouts()
               }
               ),
               this._update({})
           }
           _update(t) {
               this._state = n({}, this._state, {
                   error: this._res.error,
                   loaded: this._res.loaded,
                   loading: this._res.loading
               }, t),
               this._callbacks.forEach(t => t())
           }
           _clearTimeouts() {
               clearTimeout(this._delay),
               clearTimeout(this._timeout)
           }
           getCurrentValue() {
               return this._state
           }
           subscribe(t) {
               return this._callbacks.add(t),
               () => {
                   this._callbacks.delete(t)
               }
           }
           constructor(t, e) {
               this._loadFn = t,
               this._opts = e,
               this._callbacks = new Set,
               this._delay = null,
               this._timeout = null,
               this.retry()
           }
       }
       function f(t) {
           return function(t, e) {
               let i = Object.assign({
                   loader: null,
                   loading: null,
                   delay: 200,
                   timeout: null,
                   webpack: null,
                   modules: null,
                   ssr: !0
               }, e)
                 , n = null;
               function u() {
                   if (!n) {
                       let e = new d(t,i);
                       n = {
                           getCurrentValue: e.getCurrentValue.bind(e),
                           subscribe: e.subscribe.bind(e),
                           retry: e.retry.bind(e),
                           promise: e.promise.bind(e)
                       }
                   }
                   return n.promise()
               }
               if (i.lazy = s.default.lazy(r(function*() {
                   if (i.ssr && n) {
                       let t = n.getCurrentValue()
                         , e = yield t.loaded;
                       if (e)
                           return e
                   }
                   return yield i.loader()
               })),
               !h) {
                   let t = i.webpack ? i.webpack() : i.modules;
                   t && l.push(e => {
                       for (let i of t)
                           if (-1 !== e.indexOf(i))
                               return u()
                   }
                   )
               }
               function c(t) {
                   !function() {
                       u();
                       let t = s.default.useContext(o.LoadableContext);
                       t && Array.isArray(i.modules) && i.modules.forEach(e => {
                           t(e)
                       }
                       )
                   }();
                   let e = i.loading
                     , r = s.default.createElement(e, {
                       isLoading: !0,
                       pastDelay: !0,
                       error: null
                   })
                     , n = i.ssr ? s.default.Fragment : a.NoSSR
                     , l = i.lazy;
                   return s.default.createElement(s.default.Suspense, {
                       fallback: r
                   }, s.default.createElement(n, null, s.default.createElement(l, Object.assign({}, t))))
               }
               return c.preload = () => u(),
               c.displayName = "LoadableComponent",
               c
           }(c, t)
       }
       function p(t, e) {
           let i = [];
           for (; t.length; ) {
               let r = t.pop();
               i.push(r(e))
           }
           return Promise.all(i).then( () => {
               if (t.length)
                   return p(t, e)
           }
           )
       }
       f.preloadAll = () => new Promise( (t, e) => {
           p(u).then(t, e)
       }
       ),
       f.preloadReady = function() {
           let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
           return new Promise(e => {
               let i = () => (h = !0,
               e());
               p(l, t).then(i, i)
           }
           )
       }
       ,
       window.__NEXT_PRELOADREADY = f.preloadReady,
       e.default = f
   },
   4532: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.useServerInsertedHTML = function(t) {
           let e = r.useContext(n);
           e && e(t)
       }
       ,
       e.ServerInsertedHTMLContext = void 0;
       var r = (0,
       i(6687).Z)(i(959));
       let n = r.default.createContext(null);
       e.ServerInsertedHTMLContext = n
   },
   3878: function(t, e, i) {
       "use strict";
       i.r(e),
       i.d(e, {
           default: function() {
               return ey
           }
       });
       var r, n, s = i(6162), a = i(1527), o = i(3864), u = i.n(o), l = i(6261), h = i(959), c = i(1517), d = i(8111);
       let f = "io.prismic.preview"
         , p = t => t.replace(/%3B/g, ";")
         , m = t => {
           let e;
           let i = t.split("; ");
           for (let t of i) {
               let i = t.split("=")
                 , r = p(i[0]).replace(/%3D/g, "=");
               if (r === f) {
                   e = p(i.slice(1).join("="));
                   continue
               }
           }
           return e
       }
         , g = t => (decodeURIComponent(t).match(/"([^"]+)\.prismic\.io"/) || [])[1];
       function v({repositoryName: t, updatePreviewURL: e="/api/preview", exitPreviewURL: i="/api/exit-preview", isDraftMode: r}) {
           let n, s = r, a = !0, o = "";
           try {
               let t = (0,
               c.useRouter)();
               a = !1,
               o = t.basePath,
               s || (s = t.isPreview),
               n = () => t.replace(t.asPath, void 0, {
                   scroll: !1
               })
           } catch {
               let t = (0,
               d.useRouter)();
               n = t.refresh
           }
           return (0,
           h.useEffect)( () => {
               let r = async () => {
                   let t = o + e
                     , i = await globalThis.fetch(t);
                   i.redirected ? n() : console.error(`[<PrismicPreview>] Failed to start or update Preview Mode using the "${t}" API endpoint. Does it exist?`)
               }
                 , u = async t => {
                   t.preventDefault(),
                   a ? n() : await r()
               }
                 , l = async t => {
                   t.preventDefault();
                   let e = o + i
                     , r = await globalThis.fetch(e);
                   r.ok ? n() : console.error(`[<PrismicPreview>] Failed to exit Preview Mode using the "${e}" API endpoint. Does it exist?`)
               }
               ;
               if (window.addEventListener("prismicPreviewUpdate", u),
               window.addEventListener("prismicPreviewEnd", l),
               !s) {
                   let e = m(globalThis.document.cookie);
                   if (e) {
                       let i = window.location.href.startsWith(window.location.origin + o)
                         , n = g(e);
                       i && n === t && r()
                   }
               }
               return () => {
                   window.removeEventListener("prismicPreviewUpdate", u),
                   window.removeEventListener("prismicPreviewEnd", l)
               }
           }
           , [o, i, a, s, n, t, e]),
           null
       }
       var x = Object.defineProperty
         , y = (t, e, i) => e in t ? x(t, e, {
           enumerable: !0,
           configurable: !0,
           writable: !0,
           value: i
       }) : t[e] = i
         , D = (t, e, i) => (y(t, "symbol" != typeof e ? e + "" : e, i),
       i);
       class w extends Error {
           constructor(t="An invalid API response was returned", e, i) {
               super(t),
               D(this, "url"),
               D(this, "response"),
               this.url = e,
               this.response = i
           }
       }
       let b = t => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(t)
         , _ = t => {
           if (b(t))
               return `https://static.cdn.prismic.io/prismic.js?new=true&repo=${t}`;
           throw new w(`An invalid Prismic repository name was given: ${t}`,void 0,void 0)
       }
       ;
       function k({repositoryName: t, children: e, ...i}) {
           let r = _(t)
             , n = !1;
           try {
               n = (0,
               l.draftMode)().isEnabled
           } catch {}
           return (0,
           a.jsxs)(a.Fragment, {
               children: [e, (0,
               a.jsx)(v, {
                   repositoryName: t,
                   isDraftMode: n,
                   ...i
               }), (0,
               a.jsx)(u(), {
                   src: r,
                   strategy: "lazyOnload"
               })]
           })
       }
       var E = i(5320)
         , T = i(6624)
         , C = i(3439)
         , A = i(4439)
         , S = i(2206)
         , M = i(8269)
         , F = i(2110)
         , O = i.n(F)
         , P = i(3551)
         , R = i.n(P)
         , B = i(3001)
         , L = i(9845)
         , I = i(3952)
         , j = i(1218)
         , z = i(5927);
       let N = "G-WV6X4XN27X";
       z.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
       let V = t => {
           window && window.dataLayer && window.dataLayer.push({
               event: "page_view",
               page: t
           })
       }
       ;
       var G = i(1172);
       function U(t) {
           let {children: e} = t
             , [i,r] = (0,
           h.useState)(e)
             , n = (0,
           h.useMemo)( () => e, [e])
             , {timelines: a, resetTimelines: o} = (0,
           h.useContext)(j.q)
             , {setTriggerTransition: u, setIsRouteTransitioning: l} = (0,
           G.o)(t => {
               let {setTriggerTransition: e, setIsRouteTransitioning: i} = t;
               return {
                   setTriggerTransition: e,
                   setIsRouteTransitioning: i
               }
           }
           , B.X);
           return (0,
           I.Z)( () => {
               let t = n.props.id === i.props.id
                 , s = n.props.uid === i.props.uid;
               if (!t || !s) {
                   let t = a.get(n.props.id) || a.get("global");
                   if (!t || 0 === t.duration()) {
                       u(!0),
                       l(!0),
                       S.p8.to({}, {
                           duration: .5
                       }).then( () => {
                           r(e)
                       }
                       );
                       return
                   }
                   let s = "home" === i.props.id
                     , h = "project" === i.props.id
                     , c = "home" === n.props.id
                     , d = "project" === n.props.id;
                   l(!0),
                   s && d || h && c || u(!0),
                   .5 > t.duration() && t.to({
                       value: 0
                   }, {
                       value: 1,
                       duration: .5 - t.duration()
                   }, t.duration()),
                   t.play().then( () => {
                       o(),
                       r(e)
                   }
                   )
               }
           }
           , [n]),
           (0,
           I.Z)( () => {
               requestAnimationFrame( () => {
                   u(!1),
                   l(!1),
                   V(window.location.href)
               }
               )
           }
           , [i]),
           (0,
           s.jsx)("div", {
               children: i
           })
       }
       var H = function() {
           let t, e, i, r, n, s, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = Object.assign({
               faviconLoopText: !1,
               timeout: 0,
               interval: 600
           }, a), u = 0, l = document.querySelectorAll('link[rel$="icon"]'), h = () => {
               l.forEach(t => {
                   t && t.parentNode && t.parentNode.removeChild(t)
               }
               ),
               (t = document.createElement("link")).setAttribute("rel", "icon"),
               t.setAttribute("type", "image/png"),
               t.setAttribute("href", e),
               document.head.appendChild(t),
               o.faviconLoopText && (c(),
               r = setInterval(c, o.interval))
           }
           , c = () => {
               u >= o.faviconLoopText.length && (u = 0),
               n || (s = (n = document.createElement("canvas")).getContext("2d"),
               n.width = 16,
               n.height = 16);
               let e = o.faviconLoopText[u];
               s.clearRect(0, 0, n.width, n.height),
               s.fillStyle = "#ee3d34",
               s.font = "10px 'PP Telegraf', Assistant",
               s.textAlign = "center",
               s.textBaseline = "middle",
               s.fillText(e, n.width / 2, n.height / 2);
               let i = n.toDataURL("image/png");
               t.setAttribute("href", i),
               u++
           }
           ;
           document.addEventListener("visibilitychange", () => {
               "hidden" === document.visibilityState ? o.timeout > 0 ? i = setTimeout(h, o.timeout) : h() : (t && t.parentNode && (t.parentNode.removeChild(t),
               t = null),
               l.forEach(t => {
                   document.head.appendChild(t)
               }
               ),
               clearTimeout(i),
               clearInterval(r),
               u = 0)
           }
           )
       };
       function q() {
           let t = (0,
           G.o)(t => {
               let {isPreloaded: e} = t;
               return e
           }
           );
           return (0,
           h.useEffect)( () => {
               t && H({
                   faviconLoopText: "REDOT"
               })
           }
           , [t]),
           null
       }
       var W = i(5924)
         , Y = i(422)
         , X = i(6061)
         , Z = i(5949)
         , $ = i(1194)
         , K = i.n($);
       function Q() {
           let t = (0,
           h.useRef)()
             , [e,i] = (0,
           h.useState)(!1)
             , {isRouteTransitioning: r, isPreloaded: n} = (0,
           G.o)(t => {
               let {isRouteTransitioning: e, isPreloaded: i} = t;
               return {
                   isRouteTransitioning: e,
                   isPreloaded: i
               }
           }
           , B.X)
             , {cursor: a, setCursor: o, clearCursor: u} = (0,
           Z.Ro)(t => t, B.X);
           return (0,
           h.useEffect)( () => {
               if (!a)
                   return;
               let t = "is-cursor-".concat(a);
               return document.documentElement.classList.add(t),
               () => {
                   document.documentElement.classList.remove(t)
               }
           }
           , [a]),
           (0,
           X.Z)( () => {
               let e = S.ZP.quickSetter(t.current, "x", "px")
                 , r = S.ZP.quickSetter(t.current, "y", "px")
                 , n = t => {
                   let {clientX: n, clientY: s} = t;
                   e(n),
                   r(s),
                   i(!0)
               }
               ;
               return document.documentElement.classList.add("has-custom-cursor"),
               window.addEventListener("mousemove", n, !1),
               () => {
                   document.documentElement.classList.remove("has-custom-cursor"),
                   window.removeEventListener("mousemove", n, !1)
               }
           }
           ),
           (0,
           h.useEffect)( () => {
               if (r) {
                   document.documentElement.classList.remove("is-cursor-move"),
                   u();
                   return
               }
               if (!n)
                   return;
               function t() {
                   o("active")
               }
               function e() {
                   u()
               }
               let i = [];
               return requestAnimationFrame( () => {
                   (i = Array.from(document.querySelectorAll("button,a")).filter(t => !t.closest("[data-cursor]"))).forEach(i => {
                       i.addEventListener("mouseenter", t),
                       i.addEventListener("mouseleave", e)
                   }
                   )
               }
               ),
               () => {
                   i.forEach(i => {
                       i.removeEventListener("mouseenter", t),
                       i.removeEventListener("mouseleave", e)
                   }
                   )
               }
           }
           , [r, n]),
           (0,
           s.jsx)("div", {
               style: {
                   opacity: e ? 1 : 0
               },
               className: K().container,
               children: (0,
               s.jsx)("div", {
                   ref: t,
                   children: (0,
                   s.jsx)("div", {
                       className: (0,
                       W.Z)(K().cursor)
                   })
               })
           })
       }
       function J() {
           let[t,e] = (0,
           h.useState)(null);
           return (0,
           X.Z)( () => {
               let t = () => {
                   e(document.fullscreenElement)
               }
               ;
               return document.addEventListener("fullscreenchange", t, !1),
               () => {
                   document.removeEventListener("fullscreenchange", t, !1)
               }
           }
           ),
           t ? (0,
           Y.createPortal)((0,
           s.jsx)(Q, {}), t) : (0,
           s.jsx)(Q, {})
       }
       let tt = [{
           name: "freightdispcmp-pro",
           style: "italic",
           weight: 300
       }, {
           name: "freightdispcmp-pro",
           style: "normal",
           weight: 300
       }, {
           name: "PP Telegraf",
           style: "normal",
           weight: 400
       }, {
           name: "PP Telegraf",
           style: "normal",
           weight: 700
       }];
       async function te(t, e) {
           let i = [];
           if (t.length) {
               t.forEach(t => {
                   var e, r, n;
                   let s = (e = t.name,
                   r = t.style,
                   n = t.weight,
                   new Promise(t => {
                       let i = null
                         , s = () => {
                           i && (clearInterval(i),
                           i = null)
                       }
                         , a = () => {
                           let i = !1;
                           try {
                               i = document.fonts.check("".concat(r, " ").concat(n, " 16px ").concat(e))
                           } catch (e) {
                               s(),
                               t()
                           }
                           i && (s(),
                           t())
                       }
                       ;
                       i = setInterval(a, 500)
                   }
                   ));
                   i.push(s)
               }
               );
               try {
                   await Promise.all(i),
                   null == e || e()
               } catch (t) {}
           }
       }
       let ti = () => {
           let t = (0,
           G.o)(t => {
               let {setFontsLoaded: e} = t;
               return e
           }
           );
           return (0,
           h.useEffect)( () => (te(tt).then( () => {
               requestAnimationFrame( () => {
                   t(!0)
               }
               )
           }
           ),
           () => {}
           ), []),
           (0,
           s.jsx)("div", {
               children: tt.map(t => (0,
               s.jsx)("div", {
                   "aria-hidden": "true",
                   className: "sr-only",
                   style: {
                       fontFamily: t.name,
                       fontStyle: t.style,
                       fontWeight: t.weight
                   },
                   children: "\xa0"
               }, "".concat(t.name, "-").concat(t.weight, "-").concat(t.style)))
           })
       }
       ;
       var tr = i(3521);
       function tn(t) {
           let {animation: e, speed: r=1, loop: n=0, autoplay: a=!0, playInView: o=!1, playOnHover: u=!1, playReverseOnLanding: l=!1, className: c="", onComplete: d= () => {}
           } = t
             , {isPreloaded: f} = (0,
           G.o)(t => {
               let {isPreloaded: e} = t;
               return {
                   isPreloaded: e
               }
           }
           , B.X)
             , p = (0,
           h.useRef)(null)
             , m = (0,
           h.useRef)(null)
             , [g,v] = (0,
           h.useState)()
             , {setRef: x, inView: y} = (0,
           T.Or)({
               threshold: 0
           })
             , D = (0,
           T.h7)();
           return (0,
           h.useEffect)( () => {
               "complete" === D && i.e(109).then(i.t.bind(i, 6443, 23)).then(t => v(t.default))
           }
           , [D]),
           (0,
           h.useEffect)( () => {
               var t, i;
               if (g)
                   return m.current = null == g ? void 0 : g.loadAnimation({
                       container: p.current,
                       animationData: e,
                       renderer: "svg",
                       loop: n,
                       autoplay: a
                   }),
                   null === (t = m.current) || void 0 === t || t.addEventListener("complete", d),
                   null === (i = m.current) || void 0 === i || i.setSpeed(r),
                   () => {
                       var t;
                       return null === (t = m.current) || void 0 === t ? void 0 : t.destroy()
                   }
           }
           , [g]),
           (0,
           h.useEffect)( () => {
               var t, e;
               o && (m.current && y ? null === (t = m.current) || void 0 === t || t.play() : null === (e = m.current) || void 0 === e || e.pause())
           }
           , [o, y]),
           (0,
           h.useEffect)( () => {
               if (u && m.current) {
                   let t = () => {
                       var t, e;
                       null === (t = m.current) || void 0 === t || t.setDirection(1),
                       null === (e = m.current) || void 0 === e || e.goToAndPlay(0)
                   }
                     , e = () => {
                       var t, e;
                       null === (t = m.current) || void 0 === t || t.setDirection(-1),
                       null === (e = m.current) || void 0 === e || e.play()
                   }
                   ;
                   return p.current && (p.current.addEventListener("mouseenter", t),
                   p.current.addEventListener("mouseleave", e)),
                   () => {
                       p.current && (p.current.removeEventListener("mouseenter", t),
                       p.current.removeEventListener("mouseleave", e))
                   }
               }
           }
           , [u, m.current]),
           (0,
           h.useEffect)( () => {
               if (!g)
                   return;
               let t = () => {
                   g.resize()
               }
               ;
               return window.addEventListener("resize", t),
               () => window.removeEventListener("resize", t)
           }
           , [g]),
           (0,
           h.useEffect)( () => {
               if (!g || !l)
                   return;
               if (!f) {
                   var t, e;
                   let i = (null === (t = m.current) || void 0 === t ? void 0 : t.totalFrames) - 1;
                   null === (e = m.current) || void 0 === e || e.goToAndStop(i, !0),
                   window.animator = m.current;
                   return
               }
               let i = getComputedStyle(document.documentElement).getPropertyValue("--landing-delay")
                 , r = 1e3 * parseInt(i, 10) + 300
                 , n = setTimeout( () => {
                   var t, e;
                   null === (t = m.current) || void 0 === t || t.setDirection(-1),
                   null === (e = m.current) || void 0 === e || e.play()
               }
               , r);
               return () => clearTimeout(n)
           }
           , [g, f, l]),
           (0,
           s.jsx)("div", {
               "aria-hidden": "true",
               className: c,
               ref: t => {
                   p.current = t,
                   x(t)
               }
           })
       }
       var ts = i(2464)
         , ta = i.n(ts);
       let to = t => {
           let {href: e, label: i, index: r} = t;
           return (0,
           s.jsx)("li", {
               className: ta().item,
               style: {
                   "--item-index": r
               },
               children: (0,
               s.jsx)(tr.r, {
                   href: e,
                   children: i
               })
           })
       }
       ;
       function tu(t) {
           let {className: e} = t;
           return (0,
           s.jsx)("nav", {
               className: (0,
               W.Z)(e, ta().wrapper, {}),
               children: (0,
               s.jsxs)("ul", {
                   className: (0,
                   W.Z)(ta().list),
                   children: [(0,
                   s.jsx)(to, {
                       href: "/about",
                       label: "About",
                       index: 0
                   }), (0,
                   s.jsx)(to, {
                       href: "/contact",
                       label: "Contact",
                       index: 1
                   })]
               })
           })
       }
       var tl = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.3.6","a":"","k":"","d":"","tc":""},"fr":60,"ip":31,"op":135,"w":3438,"h":510,"nm":"RDT","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"R - INI","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[210.154,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-70.779],[0,0],[-5.161,-23.593],[0,0],[0,40.55],[0,0],[48.66,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-79.626],[58.245,-12.534]],"o":[[0,0],[0,40.55],[0,0],[-5.898,-17.695],[0,0],[0,-55.296],[0,0],[0,0],[0,0],[0,0],[0,0],[108.38,0],[0,69.304],[50.135,12.534]],"v":[[197.222,125.706],[197.222,158.883],[206.807,245.145],[94.74,245.145],[85.156,160.358],[85.156,134.553],[3.318,55.664],[-97.689,55.664],[-97.689,245.145],[-210.493,245.145],[-210.493,-245.145],[48.292,-245.145],[210.493,-110.96],[108.011,17.326]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,45.711],[48.66,0]],"o":[[0,0],[0,0],[50.872,0],[0,-41.288],[0,0]],"v":[[-97.689,-158.146],[-97.689,-24.699],[23.224,-24.699],[93.266,-94.74],[23.224,-158.146]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":49,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"R 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[392.154,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-70.779],[0,0],[-5.161,-23.593],[0,0],[0,40.55],[0,0],[48.66,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-79.626],[58.245,-12.534]],"o":[[0,0],[0,40.55],[0,0],[-5.898,-17.695],[0,0],[0,-55.296],[0,0],[0,0],[0,0],[0,0],[0,0],[108.38,0],[0,69.304],[50.135,12.534]],"v":[[197.222,125.706],[197.222,158.883],[206.807,245.145],[94.74,245.145],[85.156,160.358],[85.156,134.553],[3.318,55.664],[-97.689,55.664],[-97.689,245.145],[-210.493,245.145],[-210.493,-245.145],[48.292,-245.145],[210.493,-110.96],[108.011,17.326]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,45.711],[48.66,0]],"o":[[0,0],[0,0],[50.872,0],[0,-41.288],[0,0]],"v":[[-97.689,-158.146],[-97.689,-24.699],[23.224,-24.699],[93.266,-94.74],[23.224,-158.146]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":100,"op":135,"st":50,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"R","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[392.154,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-70.779],[0,0],[-5.161,-23.593],[0,0],[0,40.55],[0,0],[48.66,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-79.626],[58.245,-12.534]],"o":[[0,0],[0,40.55],[0,0],[-5.898,-17.695],[0,0],[0,-55.296],[0,0],[0,0],[0,0],[0,0],[0,0],[108.38,0],[0,69.304],[50.135,12.534]],"v":[[197.222,125.706],[197.222,158.883],[206.807,245.145],[94.74,245.145],[85.156,160.358],[85.156,134.553],[3.318,55.664],[-97.689,55.664],[-97.689,245.145],[-210.493,245.145],[-210.493,-245.145],[48.292,-245.145],[210.493,-110.96],[108.011,17.326]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,45.711],[48.66,0]],"o":[[0,0],[0,0],[50.872,0],[0,-41.288],[0,0]],"v":[[-97.689,-158.146],[-97.689,-24.699],[23.224,-24.699],[93.266,-94.74],[23.224,-158.146]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":60,"op":83,"st":54,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"E 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[915.124,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[169.205,36.495],[-81.469,36.495],[-81.469,155.934],[193.536,155.934],[193.536,245.145],[-193.536,245.145],[-193.536,-245.145],[191.324,-245.145],[191.324,-156.672],[-81.469,-156.672],[-81.469,-46.817],[169.205,-46.817]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":104,"op":135,"st":37,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"E 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[915.124,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[169.205,36.495],[-81.469,36.495],[-81.469,155.934],[193.536,155.934],[193.536,245.145],[-193.536,245.145],[-193.536,-245.145],[191.324,-245.145],[191.324,-156.672],[-81.469,-156.672],[-81.469,-46.817],[169.205,-46.817]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":88,"op":98,"st":21,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"E 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[915.124,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[169.205,36.495],[-81.469,36.495],[-81.469,155.934],[193.536,155.934],[193.536,245.145],[-193.536,245.145],[-193.536,-245.145],[191.324,-245.145],[191.324,-156.672],[-81.469,-156.672],[-81.469,-46.817],[169.205,-46.817]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":71,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"E 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[915.124,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[169.205,36.495],[-81.469,36.495],[-81.469,155.934],[193.536,155.934],[193.536,245.145],[-193.536,245.145],[-193.536,-245.145],[191.324,-245.145],[191.324,-156.672],[-81.469,-156.672],[-81.469,-46.817],[169.205,-46.817]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":43,"op":61,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"D 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1458.977,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[159.252,0],[0,0],[0,0],[0,0],[0,-129.024]],"o":[[0,0],[0,0],[0,0],[159.252,0],[0,129.761]],"v":[[2.212,245.145],[-233.717,245.145],[-233.717,-245.145],[2.212,-245.145],[233.717,-1.106]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,103.956],[99.533,0]],"o":[[0,0],[0,0],[100.27,0],[0,-104.693],[0,0]],"v":[[-121.651,-156.672],[-121.651,155.934],[-22.856,155.934],[117.227,-1.106],[-22.856,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":65,"op":73,"st":131,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"D 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1458.977,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[159.252,0],[0,0],[0,0],[0,0],[0,-129.024]],"o":[[0,0],[0,0],[0,0],[159.252,0],[0,129.761]],"v":[[2.212,245.145],[-233.717,245.145],[-233.717,-245.145],[2.212,-245.145],[233.717,-1.106]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,103.956],[99.533,0]],"o":[[0,0],[0,0],[100.27,0],[0,-104.693],[0,0]],"v":[[-121.651,-156.672],[-121.651,155.934],[-22.856,155.934],[117.227,-1.106],[-22.856,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":114,"op":135,"st":160,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"D 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1458.977,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[159.252,0],[0,0],[0,0],[0,0],[0,-129.024]],"o":[[0,0],[0,0],[0,0],[159.252,0],[0,129.761]],"v":[[2.212,245.145],[-233.717,245.145],[-233.717,-245.145],[2.212,-245.145],[233.717,-1.106]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,103.956],[99.533,0]],"o":[[0,0],[0,0],[100.27,0],[0,-104.693],[0,0]],"v":[[-121.651,-156.672],[-121.651,155.934],[-22.856,155.934],[117.227,-1.106],[-22.856,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":92,"op":105,"st":160,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"D","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1458.977,255.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[159.252,0],[0,0],[0,0],[0,0],[0,-129.024]],"o":[[0,0],[0,0],[0,0],[159.252,0],[0,129.761]],"v":[[2.212,245.145],[-233.717,245.145],[-233.717,-245.145],[2.212,-245.145],[233.717,-1.106]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,103.956],[99.533,0]],"o":[[0,0],[0,0],[100.27,0],[0,-104.693],[0,0]],"v":[[-121.651,-156.672],[-121.651,155.934],[-22.856,155.934],[117.227,-1.106],[-22.856,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-14,"op":61,"st":50,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"O 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2018.948,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[390,390,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-132.71],[188.006,0],[0,135.659],[-188.006,0]],"o":[[0,134.922],[-188.006,0],[0,-133.447],[188.006,0]],"v":[[258.416,0.737],[0.369,257.31],[-258.416,0.737],[0.369,-257.31]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[107.643,0],[0,-108.38],[-107.643,0],[0,106.905]],"o":[[-107.643,0],[0,106.905],[107.643,0],[0,-108.38]],"v":[[0.369,-165.888],[-141.189,0.737],[0.369,165.888],[141.926,0.737]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":124,"op":135,"st":91,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"O 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2018.948,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[390,390,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-132.71],[188.006,0],[0,135.659],[-188.006,0]],"o":[[0,134.922],[-188.006,0],[0,-133.447],[188.006,0]],"v":[[258.416,0.737],[0.369,257.31],[-258.416,0.737],[0.369,-257.31]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[107.643,0],[0,-108.38],[-107.643,0],[0,106.905]],"o":[[-107.643,0],[0,106.905],[107.643,0],[0,-108.38]],"v":[[0.369,-165.888],[-141.189,0.737],[0.369,165.888],[141.926,0.737]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":107,"op":117,"st":91,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"O 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2018.948,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[390,390,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-132.71],[188.006,0],[0,135.659],[-188.006,0]],"o":[[0,134.922],[-188.006,0],[0,-133.447],[188.006,0]],"v":[[258.416,0.737],[0.369,257.31],[-258.416,0.737],[0.369,-257.31]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[107.643,0],[0,-108.38],[-107.643,0],[0,106.905]],"o":[[-107.643,0],[0,106.905],[107.643,0],[0,-108.38]],"v":[[0.369,-165.888],[-141.189,0.737],[0.369,165.888],[141.926,0.737]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":76,"op":96,"st":66,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"O","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2018.948,255,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[390,390,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-132.71],[188.006,0],[0,135.659],[-188.006,0]],"o":[[0,134.922],[-188.006,0],[0,-133.447],[188.006,0]],"v":[[258.416,0.737],[0.369,257.31],[-258.416,0.737],[0.369,-257.31]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[107.643,0],[0,-108.38],[-107.643,0],[0,106.905]],"o":[[-107.643,0],[0,106.905],[107.643,0],[0,-108.38]],"v":[[0.369,-165.888],[-141.189,0.737],[0.369,165.888],[141.926,0.737]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":54,"op":66,"st":54,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"T - INI 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2724.505,257,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[56.402,245.145],[-55.664,245.145],[-55.664,-156.672],[-217.866,-156.672],[-217.866,-245.145],[217.866,-245.145],[217.866,-156.672],[56.402,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":56,"op":66,"st":56,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"T - INI 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2724.505,257,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[56.402,245.145],[-55.664,245.145],[-55.664,-156.672],[-217.866,-156.672],[-217.866,-245.145],[217.866,-245.145],[217.866,-156.672],[56.402,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":91,"op":105,"st":16,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"T - INI 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2724.505,257,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[56.402,245.145],[-55.664,245.145],[-55.664,-156.672],[-217.866,-156.672],[-217.866,-245.145],[217.866,-245.145],[217.866,-156.672],[56.402,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":50,"op":53,"st":9,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"T - INI","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2724.505,257,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[56.402,245.145],[-55.664,245.145],[-55.664,-156.672],[-217.866,-156.672],[-217.866,-245.145],[217.866,-245.145],[217.866,-156.672],[56.402,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":44,"st":0,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"T 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2544.505,257,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[56.402,245.145],[-55.664,245.145],[-55.664,-156.672],[-217.866,-156.672],[-217.866,-245.145],[217.866,-245.145],[217.866,-156.672],[56.402,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":115,"op":135,"st":91,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"T","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2544.505,257,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[56.402,245.145],[-55.664,245.145],[-55.664,-156.672],[-217.866,-156.672],[-217.866,-245.145],[217.866,-245.145],[217.866,-156.672],[56.402,-156.672]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"REDOT","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":70,"op":86,"st":73,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"\xae  -FINAL 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2965.611,110.582,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-54.577],[55.018,0],[0,55.898],[-55.458,0]],"o":[[0,55.898],[-55.018,0],[0,-54.577],[55.458,0]],"v":[[99.692,-0.66],[-0.22,99.692],[-99.692,-0.66],[-0.22,-99.692]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[43.134,0],[0,-42.694],[-44.014,0],[0,43.134]],"o":[[-44.014,0],[0,43.134],[43.134,0],[0,-43.134]],"v":[[0.22,-78.565],[-77.685,-0.66],[0.22,78.125],[77.685,-0.66]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-18.046],[12.764,-2.641],[0,-12.324],[0,0],[-1.32,-4.842],[0,0],[0,8.803],[0,0],[11.884,0],[0,0]],"o":[[0,0],[0,0],[0,0],[20.687,0],[0,12.324],[12.324,2.201],[0,0],[0,7.042],[0,0],[-1.32,-4.401],[0,0],[0,-11.003],[0,0],[0,0]],"v":[[-18.266,51.276],[-38.072,51.276],[-38.072,-51.276],[10.783,-51.276],[44.234,-23.107],[24.428,1.54],[40.713,23.547],[40.713,32.79],[42.914,51.276],[23.988,51.276],[21.347,33.231],[21.347,24.428],[5.062,8.143],[-18.266,8.143]],"c":true},"ix":2},"nm":"Trac\xe9 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,9.243],[10.123,0]],"o":[[0,0],[0,0],[11.004,0],[0,-8.803],[0,0]],"v":[[-18.266,-34.991],[-18.266,-7.262],[6.822,-7.262],[22.667,-21.347],[8.143,-34.991]],"c":true},"ix":2},"nm":"Trac\xe9 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"\xae","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":105,"op":135,"st":83,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"\xae  -FINAL 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2965.611,110.582,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-54.577],[55.018,0],[0,55.898],[-55.458,0]],"o":[[0,55.898],[-55.018,0],[0,-54.577],[55.458,0]],"v":[[99.692,-0.66],[-0.22,99.692],[-99.692,-0.66],[-0.22,-99.692]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[43.134,0],[0,-42.694],[-44.014,0],[0,43.134]],"o":[[-44.014,0],[0,43.134],[43.134,0],[0,-43.134]],"v":[[0.22,-78.565],[-77.685,-0.66],[0.22,78.125],[77.685,-0.66]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-18.046],[12.764,-2.641],[0,-12.324],[0,0],[-1.32,-4.842],[0,0],[0,8.803],[0,0],[11.884,0],[0,0]],"o":[[0,0],[0,0],[0,0],[20.687,0],[0,12.324],[12.324,2.201],[0,0],[0,7.042],[0,0],[-1.32,-4.401],[0,0],[0,-11.003],[0,0],[0,0]],"v":[[-18.266,51.276],[-38.072,51.276],[-38.072,-51.276],[10.783,-51.276],[44.234,-23.107],[24.428,1.54],[40.713,23.547],[40.713,32.79],[42.914,51.276],[23.988,51.276],[21.347,33.231],[21.347,24.428],[5.062,8.143],[-18.266,8.143]],"c":true},"ix":2},"nm":"Trac\xe9 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,9.243],[10.123,0]],"o":[[0,0],[0,0],[11.004,0],[0,-8.803],[0,0]],"v":[[-18.266,-34.991],[-18.266,-7.262],[6.822,-7.262],[22.667,-21.347],[8.143,-34.991]],"c":true},"ix":2},"nm":"Trac\xe9 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"\xae","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":83,"op":91,"st":83,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"\xae  -FINAL","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2965.611,110.582,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-54.577],[55.018,0],[0,55.898],[-55.458,0]],"o":[[0,55.898],[-55.018,0],[0,-54.577],[55.458,0]],"v":[[99.692,-0.66],[-0.22,99.692],[-99.692,-0.66],[-0.22,-99.692]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[43.134,0],[0,-42.694],[-44.014,0],[0,43.134]],"o":[[-44.014,0],[0,43.134],[43.134,0],[0,-43.134]],"v":[[0.22,-78.565],[-77.685,-0.66],[0.22,78.125],[77.685,-0.66]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-18.046],[12.764,-2.641],[0,-12.324],[0,0],[-1.32,-4.842],[0,0],[0,8.803],[0,0],[11.884,0],[0,0]],"o":[[0,0],[0,0],[0,0],[20.687,0],[0,12.324],[12.324,2.201],[0,0],[0,7.042],[0,0],[-1.32,-4.401],[0,0],[0,-11.003],[0,0],[0,0]],"v":[[-18.266,51.276],[-38.072,51.276],[-38.072,-51.276],[10.783,-51.276],[44.234,-23.107],[24.428,1.54],[40.713,23.547],[40.713,32.79],[42.914,51.276],[23.988,51.276],[21.347,33.231],[21.347,24.428],[5.062,8.143],[-18.266,8.143]],"c":true},"ix":2},"nm":"Trac\xe9 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,9.243],[10.123,0]],"o":[[0,0],[0,0],[11.004,0],[0,-8.803],[0,0]],"v":[[-18.266,-34.991],[-18.266,-7.262],[6.822,-7.262],[22.667,-21.347],[8.143,-34.991]],"c":true},"ix":2},"nm":"Trac\xe9 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"\xae","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":50,"st":44,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"\xae  - INI 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[3333.611,110.582,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-54.577],[55.018,0],[0,55.898],[-55.458,0]],"o":[[0,55.898],[-55.018,0],[0,-54.577],[55.458,0]],"v":[[99.692,-0.66],[-0.22,99.692],[-99.692,-0.66],[-0.22,-99.692]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[43.134,0],[0,-42.694],[-44.014,0],[0,43.134]],"o":[[-44.014,0],[0,43.134],[43.134,0],[0,-43.134]],"v":[[0.22,-78.565],[-77.685,-0.66],[0.22,78.125],[77.685,-0.66]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-18.046],[12.764,-2.641],[0,-12.324],[0,0],[-1.32,-4.842],[0,0],[0,8.803],[0,0],[11.884,0],[0,0]],"o":[[0,0],[0,0],[0,0],[20.687,0],[0,12.324],[12.324,2.201],[0,0],[0,7.042],[0,0],[-1.32,-4.401],[0,0],[0,-11.003],[0,0],[0,0]],"v":[[-18.266,51.276],[-38.072,51.276],[-38.072,-51.276],[10.783,-51.276],[44.234,-23.107],[24.428,1.54],[40.713,23.547],[40.713,32.79],[42.914,51.276],[23.988,51.276],[21.347,33.231],[21.347,24.428],[5.062,8.143],[-18.266,8.143]],"c":true},"ix":2},"nm":"Trac\xe9 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,9.243],[10.123,0]],"o":[[0,0],[0,0],[11.004,0],[0,-8.803],[0,0]],"v":[[-18.266,-34.991],[-18.266,-7.262],[6.822,-7.262],[22.667,-21.347],[8.143,-34.991]],"c":true},"ix":2},"nm":"Trac\xe9 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"\xae","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":69,"op":78,"st":71,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"\xae  - INI 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[3333.611,110.582,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-54.577],[55.018,0],[0,55.898],[-55.458,0]],"o":[[0,55.898],[-55.018,0],[0,-54.577],[55.458,0]],"v":[[99.692,-0.66],[-0.22,99.692],[-99.692,-0.66],[-0.22,-99.692]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[43.134,0],[0,-42.694],[-44.014,0],[0,43.134]],"o":[[-44.014,0],[0,43.134],[43.134,0],[0,-43.134]],"v":[[0.22,-78.565],[-77.685,-0.66],[0.22,78.125],[77.685,-0.66]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-18.046],[12.764,-2.641],[0,-12.324],[0,0],[-1.32,-4.842],[0,0],[0,8.803],[0,0],[11.884,0],[0,0]],"o":[[0,0],[0,0],[0,0],[20.687,0],[0,12.324],[12.324,2.201],[0,0],[0,7.042],[0,0],[-1.32,-4.401],[0,0],[0,-11.003],[0,0],[0,0]],"v":[[-18.266,51.276],[-38.072,51.276],[-38.072,-51.276],[10.783,-51.276],[44.234,-23.107],[24.428,1.54],[40.713,23.547],[40.713,32.79],[42.914,51.276],[23.988,51.276],[21.347,33.231],[21.347,24.428],[5.062,8.143],[-18.266,8.143]],"c":true},"ix":2},"nm":"Trac\xe9 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,9.243],[10.123,0]],"o":[[0,0],[0,0],[11.004,0],[0,-8.803],[0,0]],"v":[[-18.266,-34.991],[-18.266,-7.262],[6.822,-7.262],[22.667,-21.347],[8.143,-34.991]],"c":true},"ix":2},"nm":"Trac\xe9 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"\xae","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":55,"op":62,"st":52,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"\xae  - INI","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[3333.611,110.582,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[395,395,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-54.577],[55.018,0],[0,55.898],[-55.458,0]],"o":[[0,55.898],[-55.018,0],[0,-54.577],[55.458,0]],"v":[[99.692,-0.66],[-0.22,99.692],[-99.692,-0.66],[-0.22,-99.692]],"c":true},"ix":2},"nm":"Trac\xe9 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[43.134,0],[0,-42.694],[-44.014,0],[0,43.134]],"o":[[-44.014,0],[0,43.134],[43.134,0],[0,-43.134]],"v":[[0.22,-78.565],[-77.685,-0.66],[0.22,78.125],[77.685,-0.66]],"c":true},"ix":2},"nm":"Trac\xe9 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-18.046],[12.764,-2.641],[0,-12.324],[0,0],[-1.32,-4.842],[0,0],[0,8.803],[0,0],[11.884,0],[0,0]],"o":[[0,0],[0,0],[0,0],[20.687,0],[0,12.324],[12.324,2.201],[0,0],[0,7.042],[0,0],[-1.32,-4.401],[0,0],[0,-11.003],[0,0],[0,0]],"v":[[-18.266,51.276],[-38.072,51.276],[-38.072,-51.276],[10.783,-51.276],[44.234,-23.107],[24.428,1.54],[40.713,23.547],[40.713,32.79],[42.914,51.276],[23.988,51.276],[21.347,33.231],[21.347,24.428],[5.062,8.143],[-18.266,8.143]],"c":true},"ix":2},"nm":"Trac\xe9 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,9.243],[10.123,0]],"o":[[0,0],[0,0],[11.004,0],[0,-8.803],[0,0]],"v":[[-18.266,-34.991],[-18.266,-7.262],[6.822,-7.262],[22.667,-21.347],[8.143,-34.991]],"c":true},"ix":2},"nm":"Trac\xe9 4","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Fusionner les trac\xe9s 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.050980392157,0.050980392157,0.050980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[25.276,25.276],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformer "}],"nm":"\xae","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":44,"st":0,"bm":0}],"markers":[]}')
         , th = i(9574)
         , tc = i.n(th);
       let td = () => (0,
       s.jsx)("div", {
           className: tc().dot
       })
         , tf = () => {
           let[t,e] = (0,
           T.EL)()
             , i = (0,
           h.useRef)(0)
             , r = (0,
           h.useRef)(!1)
             , n = (0,
           h.useRef)(null)
             , a = (0,
           c.useRouter)()
             , o = "/" === a.pathname
             , [u,l] = (0,
           h.useState)(!1);
           return (0,
           C.LZ)(t => {
               let {scroll: e, limit: s} = t;
               if (e !== i.current && !r.current) {
                   if (i.current = e,
                   e < 10 || e > s - 10) {
                       n.current && clearTimeout(n.current),
                       n.current = setTimeout( () => {
                           l(!1)
                       }
                       , 375);
                       return
                   }
                   l(!0),
                   n.current && clearTimeout(n.current),
                   n.current = setTimeout( () => {
                       l(!1)
                   }
                   , 375)
               }
           }
           ),
           (0,
           h.useEffect)( () => {
               if (!e)
                   return;
               let {height: t} = e
                 , i = () => {
                   n.current && clearTimeout(n.current),
                   l(!1)
               }
                 , s = () => {}
                 , a = e => {
                   let {clientY: n} = e;
                   if (n < t && !r.current) {
                       r.current = !0,
                       i();
                       return
                   }
                   if (r.current && n > t) {
                       r.current = !1,
                       s();
                       return
                   }
               }
               ;
               return window.addEventListener("mousemove", a),
               () => {
                   window.removeEventListener("mousemove", a),
                   r.current = !1
               }
           }
           , [e]),
           (0,
           s.jsx)(s.Fragment, {
               children: (0,
               s.jsx)("header", {
                   className: (0,
                   W.Z)(tc().header),
                   ref: e => {
                       t(e)
                   }
                   ,
                   children: (0,
                   s.jsx)("div", {
                       className: (0,
                       W.Z)(tc().headerInner, {
                           [tc().hidden]: u
                       }),
                       children: (0,
                       s.jsxs)("div", {
                           className: (0,
                           W.Z)("layout-block", tc().head),
                           children: [(0,
                           s.jsxs)("div", {
                               className: (0,
                               W.Z)(tc().left),
                               children: [o && (0,
                               s.jsx)("h1", {
                                   className: "sr-only",
                                   children: "Redot Studio"
                               }), (0,
                               s.jsx)(tr.r, {
                                   href: "/",
                                   className: tc().logoLink,
                                   "aria-label": "Homepage",
                                   children: (0,
                                   s.jsx)(tn, {
                                       animation: tl,
                                       playOnHover: !0,
                                       playReverseOnLanding: !0,
                                       autoplay: !1,
                                       className: tc().logo
                                   })
                               }), (0,
                               s.jsx)(tu, {
                                   className: (0,
                                   W.Z)(tc().navigation)
                               })]
                           }), (0,
                           s.jsx)("div", {
                               className: (0,
                               W.Z)(tc().right),
                               children: (0,
                               s.jsx)(td, {})
                           })]
                       })
                   })
               })
           })
       }
       ;
       var tp = i(3727)
         , tm = i.n(tp);
       let tg = () => {
           let t = (0,
           h.useRef)()
             , e = (0,
           h.useRef)(!1)
             , {triggerTransition: i, isPreloaded: r} = (0,
           G.o)(t => {
               let {triggerTransition: e, isPreloaded: i} = t;
               return {
                   triggerTransition: e,
                   isPreloaded: i
               }
           }
           , B.X);
           return (0,
           h.useEffect)( () => {
               r && (e.current = !0)
           }
           , [r]),
           (0,
           h.useEffect)( () => {
               e.current && (i || window.scrollTo(0, 0),
               document.documentElement.classList.toggle("is-transitioning", i))
           }
           , [i]),
           (0,
           s.jsx)("div", {
               className: tm().transition,
               ref: t
           })
       }
       ;
       var tv = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.3.6","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":50.0000020365418,"w":1080,"h":1080,"nm":"LOGO-retime-LOOP","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":5,"nm":"R 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[634.44,448.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":68.0000027696968,"op":72.0000029326201,"st":58.0000023623884,"bm":0},{"ddd":0,"ind":2,"ty":5,"nm":"T 15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[447.44,633.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":67.0000027289659,"op":72.0000029326201,"st":57.0000023216576,"bm":0},{"ddd":0,"ind":3,"ty":5,"nm":"T 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.459,633.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":61.0000024845809,"op":70.0000028511584,"st":57.0000023216576,"bm":0},{"ddd":0,"ind":4,"ty":5,"nm":"R 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[541.432,448.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":60.0000024438501,"op":69.0000028104276,"st":56.0000022809268,"bm":0},{"ddd":0,"ind":5,"ty":5,"nm":"T 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[635.129,633.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":59.0000024031193,"op":66.0000026882351,"st":49.0000019958109,"bm":0},{"ddd":0,"ind":6,"ty":5,"nm":"R 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[447.432,448.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":58.0000023623884,"op":63.0000025660426,"st":48.0000019550801,"bm":0},{"ddd":0,"ind":7,"ty":5,"nm":"T 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[634.44,448.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":55.0000022401959,"op":57.0000023216576,"st":43.0000017514259,"bm":0},{"ddd":0,"ind":8,"ty":5,"nm":"T 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[634.44,448.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":50.0000020365418,"op":54.0000021994651,"st":40.0000016292334,"bm":0},{"ddd":0,"ind":9,"ty":5,"nm":"R 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[447.44,633.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":55.0000022401959,"op":57.0000023216576,"st":42.0000017106951,"bm":0},{"ddd":0,"ind":10,"ty":5,"nm":"R 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[447.44,633.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":49.0000019958109,"op":54.0000021994651,"st":39.0000015885026,"bm":0},{"ddd":0,"ind":11,"ty":5,"nm":"T 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.44,635.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":48.0000019550801,"op":49.0000019958109,"st":38.0000015477717,"bm":0},{"ddd":0,"ind":12,"ty":5,"nm":"T 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.44,635.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":42.0000017106951,"op":47.0000019143492,"st":38.0000015477717,"bm":0},{"ddd":0,"ind":13,"ty":5,"nm":"T 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.44,635.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":40.0000016292334,"op":41.0000016699642,"st":38.0000015477717,"bm":0},{"ddd":0,"ind":14,"ty":5,"nm":"T","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.44,635.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":38.0000015477717,"op":39.0000015885026,"st":38.0000015477717,"bm":0},{"ddd":0,"ind":15,"ty":5,"nm":"R 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[541.432,448.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":48.0000019550801,"op":49.0000019958109,"st":38.0000015477717,"bm":0},{"ddd":0,"ind":16,"ty":5,"nm":"R 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[541.432,448.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":42.0000017106951,"op":47.0000019143492,"st":38.0000015477717,"bm":0},{"ddd":0,"ind":17,"ty":5,"nm":"R 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[541.432,448.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":41.0000016699642,"op":42.0000017106951,"st":39.0000015885026,"bm":0},{"ddd":0,"ind":18,"ty":5,"nm":"R","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[541.432,448.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":39.0000015885026,"op":40.0000016292334,"st":39.0000015885026,"bm":0},{"ddd":0,"ind":19,"ty":5,"nm":"T 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[635.23,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":73.000002973351,"op":477.000019428608,"st":75.0000030548126,"bm":0},{"ddd":0,"ind":20,"ty":5,"nm":"R 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[448.888,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":71.0000028918893,"op":476.000019387878,"st":74.0000030140818,"bm":0},{"ddd":0,"ind":21,"ty":5,"nm":"T 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[635.23,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":38.0000015477717,"op":39.0000015885026,"st":33.0000013441176,"bm":0},{"ddd":0,"ind":22,"ty":5,"nm":"T 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[635.23,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":35.0000014255792,"op":37.0000015070409,"st":33.0000013441176,"bm":0},{"ddd":0,"ind":23,"ty":5,"nm":"T 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[635.23,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"T","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":31.0000012626559,"op":34.0000013848484,"st":33.0000013441176,"bm":0},{"ddd":0,"ind":24,"ty":5,"nm":"R 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[448.888,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":38.0000015477717,"op":39.0000015885026,"st":33.0000013441176,"bm":0},{"ddd":0,"ind":25,"ty":5,"nm":"R 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[448.888,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":35.0000014255792,"op":37.0000015070409,"st":33.0000013441176,"bm":0},{"ddd":0,"ind":26,"ty":5,"nm":"R 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[448.888,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"R","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":30.0000012219251,"op":34.0000013848484,"st":33.0000013441176,"bm":0},{"ddd":0,"ind":27,"ty":5,"nm":"O","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[589.888,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"O","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":68.0000027696968,"op":73.0000029733509,"st":70.0000028511585,"bm":0},{"ddd":0,"ind":28,"ty":5,"nm":"E","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[494.62,542.698,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"E","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":68.0000027696968,"op":73.0000029733509,"st":70.0000028511585,"bm":0},{"ddd":0,"ind":31,"ty":5,"nm":"D 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.94,542.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"D","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":26.0000010590017,"op":3012.00012268128,"st":14.0000005702317,"bm":0},{"ddd":0,"ind":32,"ty":5,"nm":"D 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.94,542.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"D","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":21.0000008553475,"op":25.0000010182709,"st":14.0000005702317,"bm":0},{"ddd":0,"ind":33,"ty":5,"nm":"D 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.94,542.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"D","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":18.000000733155,"op":20.0000008146167,"st":18.000000733155,"bm":0},{"ddd":0,"ind":34,"ty":5,"nm":"D","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542.94,542.45,0],"ix":2},"a":{"a":0,"k":[1.915,-65.102,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"sz":[532,176],"ps":[-266,-88],"s":56,"f":"PPTelegraf-Bold","t":"D","j":2,"tr":1000,"lh":67.2,"ls":0,"fc":[0.051,0.051,0.051]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":14.0000005702317,"op":17.0000006924242,"st":14.0000005702317,"bm":0}]}],"fonts":{"list":[{"fName":"PPTelegraf-Bold","fFamily":"PP Telegraf","fStyle":"Bold","ascent":69.9996948242188}]},"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":700.000028511585,"op":750.000030548126,"st":700.000028511585,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":650.000026475043,"op":700.000028511585,"st":650.000026475043,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":600.000024438501,"op":650.000026475043,"st":600.000024438501,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":550.000022401959,"op":600.000024438501,"st":550.000022401959,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":500.000020365417,"op":550.000022401959,"st":500.000020365417,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":450.000018328876,"op":500.000020365417,"st":450.000018328876,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":400.000016292334,"op":450.000018328876,"st":400.000016292334,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":350.000014255792,"op":400.000016292334,"st":350.000014255792,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":300.00001221925,"op":350.000014255792,"st":300.00001221925,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":250.000010182709,"op":300.00001221925,"st":250.000010182709,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":200.000008146167,"op":250.000010182709,"st":200.000008146167,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":150.000006109625,"op":200.000008146167,"st":150.000006109625,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":100.000004073084,"op":150.000006109625,"st":100.000004073084,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":50.0000020365418,"op":100.000004073084,"st":50.0000020365418,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"LOGO","refId":"comp_0","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2},"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[250,250,100],"ix":6}},"ao":0,"w":1080,"h":1080,"ip":0,"op":50.0000020365418,"st":0,"bm":0}],"markers":[],"chars":[{"ch":"D","size":56,"style":"Bold","w":72.3,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,17.725],[21.753,0],[0,0]],"o":[[0,0],[21.753,0],[0,-17.624],[0,0],[0,0]],"v":[[5.841,0],[38.068,0],[69.69,-33.636],[38.068,-66.971],[5.841,-66.971]],"c":true},"ix":2},"nm":"D","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-14.301],[13.696,0]],"o":[[0,0],[0,0],[13.596,0],[0,14.2],[0,0]],"v":[[21.149,-12.186],[21.149,-54.886],[34.644,-54.886],[53.778,-33.636],[34.644,-12.186]],"c":true},"ix":2},"nm":"D","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"D","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Telegraf"},{"ch":"E","size":56,"style":"Bold","w":62.8,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[21.149,-28.5],[55.389,-28.5],[55.389,-39.88],[21.149,-39.88],[21.149,-54.886],[58.411,-54.886],[58.411,-66.971],[5.841,-66.971],[5.841,0],[58.713,0],[58.713,-12.186],[21.149,-12.186]],"c":true},"ix":2},"nm":"E","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"E","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Telegraf"},{"ch":"O","size":56,"style":"Bold","w":76.3,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-25.681,0],[0,18.43],[25.681,0],[0,-18.228]],"o":[[25.681,0],[0,-18.127],[-25.681,0],[0,18.53]],"v":[[38.47,1.611],[73.718,-33.435],[38.47,-68.683],[3.122,-33.435]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,14.603],[-14.703,0],[0,-14.804],[14.703,0]],"o":[[0,-14.804],[14.703,0],[0,14.603],[-14.703,0]],"v":[[19.135,-33.435],[38.47,-56.195],[57.806,-33.435],[38.47,-10.876]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"O","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Telegraf"},{"ch":"R","size":56,"style":"Bold","w":67.1,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,5.539],[0,0],[6.848,1.712],[0,9.467],[14.804,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-7.553],[0,0],[-0.806,-2.417],[0,0]],"o":[[0,0],[0,-9.668],[7.956,-1.712],[0,-10.876],[0,0],[0,0],[0,0],[0,0],[0,0],[6.647,0],[0,0],[0,5.539],[0,0],[-0.705,-3.223]],"v":[[61.533,-11.783],[61.533,-16.315],[49.347,-31.119],[63.345,-48.642],[41.19,-66.971],[5.841,-66.971],[5.841,0],[21.249,0],[21.249,-25.882],[35.046,-25.882],[46.225,-15.106],[46.225,-11.581],[47.534,0],[62.842,0]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,-5.64],[6.949,0]],"o":[[0,0],[0,0],[6.647,0],[0,6.244],[0,0]],"v":[[21.249,-36.859],[21.249,-55.087],[37.766,-55.087],[47.333,-46.426],[37.766,-36.859]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"R","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Telegraf"},{"ch":"T","size":56,"style":"Bold","w":61.1,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[23.163,0],[38.47,0],[38.47,-54.886],[60.526,-54.886],[60.526,-66.971],[1.007,-66.971],[1.007,-54.886],[23.163,-54.886]],"c":true},"ix":2},"nm":"T","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"T","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"PP Telegraf"}]}')
         , tx = i(1089)
         , ty = i.n(tx);
       function tD() {
           let {isPreloaded: t, setIsPreloaded: e} = (0,
           G.o)(t => {
               let {isPreloaded: e, setIsPreloaded: i} = t;
               return {
                   isPreloaded: e,
                   setIsPreloaded: i
               }
           }
           , B.X)
             , i = () => {
               e(!0)
           }
           ;
           return t ? null : (0,
           s.jsx)("div", {
               className: ty().wrapper,
               children: (0,
               s.jsx)(tn, {
                   animation: tv,
                   loop: 1,
                   onComplete: i,
                   className: ty().lottie
               })
           })
       }
       function tw() {
           return (0,
           h.useEffect)( () => {
               function t() {
                   document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px")
               }
               return window.addEventListener("resize", t, !1),
               t(),
               () => {
                   window.removeEventListener("resize", t, !1)
               }
           }
           , []),
           null
       }
       tD.displayName = "Preloader";
       let tb = () => (0,
       s.jsxs)("svg", {
           style: {
               display: "none",
               width: 0,
               height: 0
           },
           children: [(0,
           s.jsx)("symbol", {
               id: "arrow-angle",
               viewBox: "0 0 3 3",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
               children: (0,
               s.jsx)("path", {
                   d: "M0.366 -0.00585938H3.006V2.63414H2.406V1.04414L0.45 3.00014L0 2.55014L1.956 0.594141H0.366V-0.00585938Z",
                   fill: "currentColor"
               })
           }), (0,
           s.jsxs)("symbol", {
               id: "volume",
               viewBox: "0 0 12 13.5",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
               children: [(0,
               s.jsx)("style", {
                   children: ".svg-volume-rect {\n    transform-origin: center;\n    transition: transform .4s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n    }"
               }), (0,
               s.jsx)("rect", {
                   className: "svg-volume-rect",
                   fill: "currentColor",
                   width: "0.75",
                   height: "13.5",
                   style: {
                       transform: "scaleY(calc(0.1 + 0.05*var(--volume, 1))"
                   },
                   "transform-origin": "center"
               }), (0,
               s.jsx)("rect", {
                   className: "svg-volume-rect",
                   fill: "currentColor",
                   x: "2.81",
                   width: "0.75",
                   height: "13.5",
                   style: {
                       transform: "scaleY(calc(0.1 + 0.46*var(--volume, 1))"
                   },
                   "transform-origin": "center"
               }), (0,
               s.jsx)("rect", {
                   className: "svg-volume-rect",
                   fill: "currentColor",
                   x: "5.63",
                   width: "0.75",
                   height: "13.5",
                   style: {
                       transform: "scaleY(calc(0.1 + 0.9*var(--volume, 1))"
                   },
                   "transform-origin": "center"
               }), (0,
               s.jsx)("rect", {
                   className: "svg-volume-rect",
                   fill: "currentColor",
                   x: "8.44",
                   width: "0.75",
                   height: "13.5",
                   style: {
                       transform: "scaleY(calc(0.1 + 0.46*var(--volume, 1))"
                   },
                   "transform-origin": "center"
               }), (0,
               s.jsx)("rect", {
                   className: "svg-volume-rect",
                   fill: "currentColor",
                   x: "11.25",
                   width: "0.75",
                   height: "13.5",
                   style: {
                       transform: "scaleY(calc(0.1 + 0.05*var(--volume, 1))"
                   },
                   "transform-origin": "center"
               })]
           }), (0,
           s.jsxs)("symbol", {
               id: "fullscreen-enter",
               viewBox: "0 0 12 12",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
               children: [(0,
               s.jsx)("path", {
                   d: "M1 11H5V10H2V7H1V11Z",
                   fill: "currentColor"
               }), (0,
               s.jsx)("path", {
                   d: "M7 11H11V7H10V10H7V11Z",
                   fill: "currentColor"
               }), (0,
               s.jsx)("path", {
                   d: "M2 5V2H5V1H1V5H2Z",
                   fill: "currentColor"
               }), (0,
               s.jsx)("path", {
                   d: "M11 5V1H7V2H10V5H11Z",
                   fill: "currentColor"
               })]
           }), (0,
           s.jsxs)("symbol", {
               id: "fullscreen-exit",
               viewBox: "0 0 12 12",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
               children: [(0,
               s.jsx)("path", {
                   d: "M5 1V5H1V4H4V1H5Z",
                   fill: "currentColor"
               }), (0,
               s.jsx)("path", {
                   d: "M8 1V4H11V5H7V1H8Z",
                   fill: "currentColor"
               }), (0,
               s.jsx)("path", {
                   d: "M1 7H5V11H4V8H1V7Z",
                   fill: "currentColor"
               }), (0,
               s.jsx)("path", {
                   d: "M7 7H11V8H8V11H7V7Z",
                   fill: "currentColor"
               })]
           }), (0,
           s.jsx)("symbol", {
               id: "circle",
               viewBox: "0 0 12 12",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
               children: (0,
               s.jsx)("circle", {
                   cx: "6",
                   cy: "6",
                   r: "6",
                   fill: "currentColor"
               })
           })]
       });
       var t_ = Object.defineProperty
         , tk = (t, e, i) => e in t ? t_(t, e, {
           enumerable: !0,
           configurable: !0,
           writable: !0,
           value: i
       }) : t[e] = i
         , tE = (t, e, i) => (tk(t, "symbol" != typeof e ? e + "" : e, i),
       i);
       class tT extends Error {
           constructor(t="An invalid API response was returned", e, i) {
               super(t),
               tE(this, "url"),
               tE(this, "response"),
               this.url = e,
               this.response = i
           }
       }
       let tC = t => Array.isArray(t) ? t : [t]
         , tA = (t={}, e) => ({
           ...t,
           filters: [...t.filters || [], ...tC(e)]
       })
         , tS = t => "function" == typeof t ? t : () => t
         , tM = t => Array.isArray(t) ? `[${t.map(tM).join(", ")}]` : "string" == typeof t ? `"${t}"` : t instanceof Date ? `${t.getTime()}` : `${t}`
         , tF = t => {
           let e = (e, ...i) => {
               let r = i.map(tM).join(", ")
                 , n = e && i.length ? ", " : "";
               return `[${t}(${e}${n}${r})]`
           }
           ;
           return e
       }
         , tO = t => {
           let e = tF(t)
             , i = t => e(t);
           return i
       }
         , tP = {
           at: tF("at"),
           not: tF("not"),
           any: tF("any"),
           in: tF("in"),
           fulltext: tF("fulltext"),
           has: tO("has"),
           missing: tO("missing"),
           similar: (t => {
               let e = tF(t)
                 , i = (...t) => e("", ...t);
               return i
           }
           )("similar"),
           geopointNear: tF("geopoint.near"),
           numberLessThan: tF("number.lt"),
           numberGreaterThan: tF("number.gt"),
           numberInRange: tF("number.inRange"),
           dateAfter: tF("date.after"),
           dateBefore: tF("date.before"),
           dateBetween: tF("date.between"),
           dateDayOfMonth: tF("date.day-of-month"),
           dateDayOfMonthAfter: tF("date.day-of-month-after"),
           dateDayOfMonthBefore: tF("date.day-of-month-before"),
           dateDayOfWeek: tF("date.day-of-week"),
           dateDayOfWeekAfter: tF("date.day-of-week-after"),
           dateDayOfWeekBefore: tF("date.day-of-week-before"),
           dateMonth: tF("date.month"),
           dateMonthAfter: tF("date.month-after"),
           dateMonthBefore: tF("date.month-before"),
           dateYear: tF("date.year"),
           dateHour: tF("date.hour"),
           dateHourAfter: tF("date.hour-after"),
           dateHourBefore: tF("date.hour-before")
       }
         , tR = t => tP.at("document.tags", tC(t))
         , tB = (t, e) => {
           let i = t.find(t => e(t));
           if (!i)
               throw new tT("Ref could not be found.",void 0,void 0);
           return i
       }
         , tL = t => tB(t, t => t.isMasterRef)
         , tI = (t, e) => tB(t, t => t.id === e)
         , tj = (t, e) => tB(t, t => t.label === e)
         , tz = t => t.replace(/%3B/g, ";")
         , tN = t => {
           let e;
           let i = t.split("; ");
           for (let t of i) {
               let i = t.split("=")
                 , r = tz(i[0]).replace(/%3D/g, "=");
               if ("io.prismic.preview" === r) {
                   e = tz(i.slice(1).join("="));
                   break
               }
           }
           return e
       }
         , tV = t => t.replace(/(\n| )*( |{|})(\n| )*/gm, (t, e, i) => i)
         , tG = t => tP.any("document.tags", tC(t))
         , tU = t => tP.at("document.type", t);
       class tH extends tT {
       }
       class tq extends tT {
       }
       class tW extends tT {
       }
       class tY extends tH {
       }
       class tX extends tH {
       }
       class tZ extends tH {
       }
       class t$ extends tq {
       }
       let tK = {
           Any: "Any",
           Document: "Document",
           Media: "Media",
           Web: "Web"
       }
         , tQ = t => {
           var e;
           return {
               link_type: tK.Document,
               id: t.id,
               uid: t.uid || void 0,
               type: t.type,
               tags: t.tags,
               lang: t.lang,
               url: null == t.url ? void 0 : t.url,
               slug: null == (e = t.slugs) ? void 0 : e[0],
               ...t.data && Object.keys(t.data).length > 0 ? {
                   data: t.data
               } : {}
           }
       }
         , tJ = (t, ...e) => {
           let i;
           if (!t)
               return null;
           let r = "link_type"in t ? t : tQ(t)
             , [n] = e;
           switch (i = "function" == typeof n || null == n ? {
               linkResolver: n
           } : {
               ...n
           },
           r.link_type) {
           case tK.Media:
           case tK.Web:
               return "url"in r ? r.url : null;
           case tK.Document:
               if ("id"in r && i.linkResolver) {
                   let t = i.linkResolver(r);
                   if (null != t)
                       return t
               }
               if ("url"in r && r.url)
                   return r.url;
               return null;
           case tK.Any:
           default:
               return null
           }
       }
         , t0 = {
           accessToken: "access_token"
       }
         , t1 = t => "string" == typeof t ? t : "desc" === t.direction ? `${t.field} desc` : t.field
         , t2 = (t, e) => {
           let {filters: i, predicates: r, ...n} = e
             , s = new URL("documents/search",`${t}/`);
           if (i)
               for (let t of tC(i))
                   s.searchParams.append("q", `[${t}]`);
           if (r)
               for (let t of tC(r))
                   s.searchParams.append("q", `[${t}]`);
           for (let t in n) {
               let e = t0[t] || t
                 , i = n[t];
               if ("orderings" === e) {
                   let t = n[e];
                   if (null != t) {
                       let e = tC(t).map(t => t1(t)).join(",");
                       i = `[${e}]`
                   }
               } else
                   "routes" === e && "object" == typeof n[e] && (i = JSON.stringify(tC(n[e])));
               null != i && s.searchParams.set(e, tC(i).join(","))
           }
           return s.toString()
       }
         , t5 = t => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(t)
         , t6 = t => {
           if (t5(t))
               return `https://${t}.cdn.prismic.io/api/v2`;
           throw new tT(`An invalid Prismic repository name was given: ${t}`,void 0,void 0)
       }
         , t3 = t => {
           try {
               return new URL(t),
               !0
           } catch {
               return !1
           }
       }
       ;
       var t4 = Object.defineProperty
         , t8 = (t, e, i) => e in t ? t4(t, e, {
           enumerable: !0,
           configurable: !0,
           writable: !0,
           value: i
       }) : t[e] = i
         , t9 = (t, e, i) => (t8(t, "symbol" != typeof e ? e + "" : e, i),
       i);
       (r = n || (n = {})).Master = "Master",
       r.ReleaseID = "ReleaseID",
       r.ReleaseLabel = "ReleaseLabel",
       r.Manual = "Manual";
       let t7 = (t, e) => new et(t,e);
       class et {
           constructor(t, e={}) {
               if (t9(this, "endpoint"),
               t9(this, "accessToken"),
               t9(this, "routes"),
               t9(this, "brokenRoute"),
               t9(this, "fetchFn"),
               t9(this, "fetchOptions"),
               t9(this, "defaultParams"),
               t9(this, "refState", {
                   mode: n.Master,
                   autoPreviewsEnabled: !0
               }),
               t9(this, "cachedRepository"),
               t9(this, "cachedRepositoryExpiration", 0),
               t9(this, "fetchJobs", {}),
               t3(t) ? this.endpoint = t : this.endpoint = t6(t),
               this.accessToken = e.accessToken,
               this.routes = e.routes,
               this.brokenRoute = e.brokenRoute,
               this.fetchOptions = e.fetchOptions,
               this.defaultParams = e.defaultParams,
               e.ref && this.queryContentFromRef(e.ref),
               "function" == typeof e.fetch)
                   this.fetchFn = e.fetch;
               else if ("function" == typeof globalThis.fetch)
                   this.fetchFn = globalThis.fetch;
               else
                   throw new tT("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.",void 0,void 0);
               this.fetchFn === globalThis.fetch && (this.fetchFn = this.fetchFn.bind(globalThis)),
               this.graphQLFetch = this.graphQLFetch.bind(this)
           }
           enableAutoPreviews() {
               this.refState.autoPreviewsEnabled = !0
           }
           enableAutoPreviewsFromReq(t) {
               this.refState.httpRequest = t,
               this.refState.autoPreviewsEnabled = !0
           }
           disableAutoPreviews() {
               this.refState.autoPreviewsEnabled = !1
           }
           async get(t) {
               let e = await this.buildQueryURL(t);
               return await this.fetch(e, t)
           }
           async getFirst(t) {
               var e;
               let i = {
                   ...t
               };
               t && t.page || (null == t ? void 0 : t.pageSize) || (i.pageSize = (null == (e = this.defaultParams) ? void 0 : e.pageSize) ?? 1);
               let r = await this.buildQueryURL(i)
                 , n = await this.fetch(r, t)
                 , s = n.results[0];
               if (s)
                   return s;
               throw new tq("No documents were returned",r,void 0)
           }
           async dangerouslyGetAll(t={}) {
               var e;
               let i;
               let {limit: r=1 / 0, ...n} = t
                 , s = {
                   ...n,
                   pageSize: Math.min(r, n.pageSize || (null == (e = this.defaultParams) ? void 0 : e.pageSize) || 100)
               }
                 , a = [];
               for (; (!i || i.next_page) && a.length < r; ) {
                   let t = i ? i.page + 1 : void 0;
                   i = await this.get({
                       ...s,
                       page: t
                   }),
                   a.push(...i.results),
                   i.next_page && await new Promise(t => setTimeout(t, 500))
               }
               return a.slice(0, r)
           }
           async getByID(t, e) {
               return await this.getFirst(tA(e, tP.at("document.id", t)))
           }
           async getByIDs(t, e) {
               return await this.get(tA(e, tP.in("document.id", t)))
           }
           async getAllByIDs(t, e) {
               return await this.dangerouslyGetAll(tA(e, tP.in("document.id", t)))
           }
           async getByUID(t, e, i) {
               return await this.getFirst(tA(i, [tU(t), tP.at(`my.${t}.uid`, e)]))
           }
           async getByUIDs(t, e, i) {
               return await this.get(tA(i, [tU(t), tP.in(`my.${t}.uid`, e)]))
           }
           async getAllByUIDs(t, e, i) {
               return await this.dangerouslyGetAll(tA(i, [tU(t), tP.in(`my.${t}.uid`, e)]))
           }
           async getSingle(t, e) {
               return await this.getFirst(tA(e, tU(t)))
           }
           async getByType(t, e) {
               return await this.get(tA(e, tU(t)))
           }
           async getAllByType(t, e) {
               return await this.dangerouslyGetAll(tA(e, tU(t)))
           }
           async getByTag(t, e) {
               return await this.get(tA(e, tG(t)))
           }
           async getAllByTag(t, e) {
               return await this.dangerouslyGetAll(tA(e, tG(t)))
           }
           async getByEveryTag(t, e) {
               return await this.get(tA(e, tR(t)))
           }
           async getAllByEveryTag(t, e) {
               return await this.dangerouslyGetAll(tA(e, tR(t)))
           }
           async getBySomeTags(t, e) {
               return await this.get(tA(e, tG(t)))
           }
           async getAllBySomeTags(t, e) {
               return await this.dangerouslyGetAll(tA(e, tG(t)))
           }
           async getRepository(t) {
               let e = new URL(this.endpoint);
               return this.accessToken && e.searchParams.set("access_token", this.accessToken),
               await this.fetch(e.toString(), t)
           }
           async getRefs(t) {
               let e = await this.getRepository(t);
               return e.refs
           }
           async getRefByID(t, e) {
               let i = await this.getRefs(e);
               return tI(i, t)
           }
           async getRefByLabel(t, e) {
               let i = await this.getRefs(e);
               return tj(i, t)
           }
           async getMasterRef(t) {
               let e = await this.getRefs(t);
               return tL(e)
           }
           async getReleases(t) {
               let e = await this.getRefs(t);
               return e.filter(t => !t.isMasterRef)
           }
           async getReleaseByID(t, e) {
               let i = await this.getReleases(e);
               return tI(i, t)
           }
           async getReleaseByLabel(t, e) {
               let i = await this.getReleases(e);
               return tj(i, t)
           }
           async getTags(t) {
               try {
                   let e = await this.getCachedRepositoryForm("tags", t)
                     , i = new URL(e.action);
                   return this.accessToken && i.searchParams.set("access_token", this.accessToken),
                   await this.fetch(i.toString(), t)
               } catch {
                   let e = await this.getRepository(t);
                   return e.tags
               }
           }
           async buildQueryURL({signal: t, fetchOptions: e, ...i}={}) {
               let r = i.ref || await this.getResolvedRefString({
                   signal: t,
                   fetchOptions: e
               })
                 , n = i.integrationFieldsRef || (await this.getCachedRepository({
                   signal: t,
                   fetchOptions: e
               })).integrationFieldsRef || void 0;
               return t2(this.endpoint, {
                   ...this.defaultParams,
                   ...i,
                   ref: r,
                   integrationFieldsRef: n,
                   routes: i.routes || this.routes,
                   brokenRoute: i.brokenRoute || this.brokenRoute,
                   accessToken: i.accessToken || this.accessToken
               })
           }
           async resolvePreviewURL(t) {
               var e, i;
               let r = t.documentID
                 , n = t.previewToken;
               if (void 0 !== globalThis.location) {
                   let t = new URLSearchParams(globalThis.location.search);
                   r = r || t.get("documentId"),
                   n = n || t.get("token")
               } else if (this.refState.httpRequest) {
                   if ("query"in this.refState.httpRequest)
                       r = r || (null == (e = this.refState.httpRequest.query) ? void 0 : e.documentId),
                       n = n || (null == (i = this.refState.httpRequest.query) ? void 0 : i.token);
                   else if ("url"in this.refState.httpRequest && this.refState.httpRequest.url) {
                       let t = new URL(this.refState.httpRequest.url,"missing-host://").searchParams;
                       r = r || t.get("documentId"),
                       n = n || t.get("token")
                   }
               }
               if (null != r && null != n) {
                   let e = await this.getByID(r, {
                       ref: n,
                       lang: "*",
                       signal: t.signal,
                       fetchOptions: t.fetchOptions
                   })
                     , i = tJ(e, {
                       linkResolver: t.linkResolver
                   });
                   if ("string" == typeof i)
                       return i
               }
               return t.defaultURL
           }
           queryLatestContent() {
               this.refState.mode = n.Master
           }
           queryContentFromReleaseByID(t) {
               this.refState = {
                   ...this.refState,
                   mode: n.ReleaseID,
                   releaseID: t
               }
           }
           queryContentFromReleaseByLabel(t) {
               this.refState = {
                   ...this.refState,
                   mode: n.ReleaseLabel,
                   releaseLabel: t
               }
           }
           queryContentFromRef(t) {
               this.refState = {
                   ...this.refState,
                   mode: n.Manual,
                   ref: t
               }
           }
           async graphQLFetch(t, e) {
               let i = await this.getCachedRepository()
                 , r = await this.getResolvedRefString()
                 , n = {
                   "Prismic-ref": r,
                   Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
                   ...e ? e.headers : {}
               };
               i.integrationFieldsRef && (n["Prismic-integration-field-ref"] = i.integrationFieldsRef);
               let s = {};
               for (let t in n)
                   n[t] && (s[t.toLowerCase()] = n[t]);
               let a = new URL(t);
               a.searchParams.set("ref", r);
               let o = a.searchParams.get("query");
               return o && a.searchParams.set("query", tV(o)),
               await this.fetchFn(a.toString(), {
                   ...e,
                   headers: s
               })
           }
           async getCachedRepository(t) {
               return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + 5e3,
               this.cachedRepository = await this.getRepository(t)),
               this.cachedRepository
           }
           async getCachedRepositoryForm(t, e) {
               let i = await this.getCachedRepository(e)
                 , r = i.forms[t];
               if (!r)
                   throw new tT(`Form with name "${t}" could not be found`,void 0,void 0);
               return r
           }
           async getResolvedRefString(t) {
               var e, i;
               if (this.refState.autoPreviewsEnabled) {
                   let t, r;
                   if ((null == (e = this.refState.httpRequest) ? void 0 : e.headers) ? "get"in this.refState.httpRequest.headers && "function" == typeof this.refState.httpRequest.headers.get ? r = this.refState.httpRequest.headers.get("cookie") : "cookie"in this.refState.httpRequest.headers && (r = this.refState.httpRequest.headers.cookie) : (null == (i = globalThis.document) ? void 0 : i.cookie) && (r = globalThis.document.cookie),
                   r && (t = tN(r)),
                   t)
                       return t
               }
               let r = await this.getCachedRepository(t)
                 , s = this.refState.mode;
               if (s === n.ReleaseID)
                   return tI(r.refs, this.refState.releaseID).ref;
               if (s === n.ReleaseLabel)
                   return tj(r.refs, this.refState.releaseLabel).ref;
               if (s === n.Manual) {
                   let t = await tS(this.refState.ref)();
                   if ("string" == typeof t)
                       return t
               }
               return tL(r.refs).ref
           }
           async fetch(t, e={}) {
               var i, r, n, s;
               let a;
               let o = {
                   ...this.fetchOptions,
                   ...e.fetchOptions,
                   headers: {
                       ...null == (i = this.fetchOptions) ? void 0 : i.headers,
                       ...null == (r = e.fetchOptions) ? void 0 : r.headers
                   },
                   signal: (null == (n = e.fetchOptions) ? void 0 : n.signal) || e.signal || (null == (s = this.fetchOptions) ? void 0 : s.signal)
               };
               this.fetchJobs[t] && this.fetchJobs[t].has(o.signal) ? a = this.fetchJobs[t].get(o.signal) : (this.fetchJobs[t] = this.fetchJobs[t] || new Map,
               a = this.fetchFn(t, o).then(async t => {
                   let e;
                   try {
                       e = await t.json()
                   } catch {}
                   return {
                       status: t.status,
                       headers: t.headers,
                       json: e
                   }
               }
               ).finally( () => {
                   this.fetchJobs[t].delete(o.signal),
                   0 === this.fetchJobs[t].size && delete this.fetchJobs[t]
               }
               ),
               this.fetchJobs[t].set(o.signal, a));
               let u = await a;
               if (404 !== u.status && null == u.json)
                   throw new tT(void 0,t,u.json);
               switch (u.status) {
               case 200:
                   return u.json;
               case 400:
                   throw new tW(u.json.message,t,u.json);
               case 401:
               case 403:
                   throw new tH(u.json.error || u.json.message,t,u.json);
               case 404:
                   if (void 0 === u.json)
                       throw new t$(`Prismic repository not found. Check that "${this.endpoint}" is pointing to the correct repository.`,t,void 0);
                   if ("api_notfound_error" === u.json.type)
                       throw new tZ(u.json.message,t,u.json);
                   if ("api_security_error" === u.json.type && /preview token.*expired/i.test(u.json.message))
                       throw new tY(u.json.message,t,u.json);
                   throw new tq(u.json.message,t,u.json);
               case 410:
                   throw new tX(u.json.message,t,u.json);
               case 429:
                   {
                       let i = Number(u.headers.get("retry-after"))
                         , r = Number.isNaN(i) ? 1e3 : i;
                       return await new Promise( (i, n) => {
                           setTimeout(async () => {
                               try {
                                   i(await this.fetch(t, e))
                               } catch (t) {
                                   n(t)
                               }
                           }
                           , r)
                       }
                       )
                   }
               }
               throw new tT(void 0,t,u.json)
           }
       }
       let ee = t => "object" == typeof t && null !== t && "ref"in t
         , ei = t => {
           "previewData"in t && t.previewData ? ee(t.previewData) && t.client.queryContentFromRef(t.previewData.ref) : "req"in t && t.req ? t.client.enableAutoPreviewsFromReq(t.req) : t.client.queryContentFromRef( () => {
               var t;
               let e;
               let i = !1;
               try {
                   i = (0,
                   l.draftMode)().isEnabled
               } catch {
                   return
               }
               if (i) {
                   try {
                       e = null == (t = (0,
                       l.cookies)().get(f)) ? void 0 : t.value
                   } catch {
                       return
                   }
                   if (e && /\.prismic\.io/.test(e))
                       return e
               }
           }
           )
       }
       ;
       var er = JSON.parse('{"o":"https://redot-website.cdn.prismic.io/api/v2"}');
       let en = (t => {
           try {
               return new URL(t).hostname.split(".")[0]
           } catch {
               throw new tT(`An invalid Prismic Rest API V2 endpoint was provided: ${t}`,void 0,void 0)
           }
       }
       )(er.o)
         , es = [{
           type: "homepage",
           path: "/"
       }, {
           type: "about",
           path: "/about"
       }, {
           type: "contact",
           path: "/contact"
       }, {
           type: "project",
           path: "/project/:uid"
       }]
         , ea = function() {
           let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
             , e = t7(er.o, {
               routes: es,
               ...t
           });
           return ei({
               client: e,
               previewData: t.previewData,
               req: t.req
           }),
           e
       };
       var eo = i(7650)
         , eu = i(592)
         , el = i(3227)
         , eh = i(4539)
         , ec = i(112)
         , ed = i(1586)
         , ef = i.n(ed);
       let ep = t => {
           let {index: e, active: i, client: r, title: n, date: a} = t;
           return (0,
           s.jsx)("div", {
               className: ef().texts_wrapper_item,
               children: (0,
               s.jsx)(el.v, {
                   className: ef().title,
                   number: e + 1,
                   client: r,
                   date: a,
                   delayIn: .3,
                   delayInCounter: .6,
                   title: (0,
                   eu._)(n),
                   active: i
               })
           })
       }
       ;
       function em() {
           let t = (0,
           c.useRouter)()
             , e = t.pathname
             , i = "/" === t.pathname
             , r = t.pathname.includes("/project/")
             , n = r && t.query.uid
             , a = (0,
           h.useRef)(null)
             , o = (0,
           h.useRef)(null)
             , [u,l] = (0,
           h.useState)(null)
             , [d,f] = (0,
           h.useState)(!1)
             , [p,m] = (0,
           h.useState)(!1)
             , [g,v] = (0,
           h.useState)([])
             , [x,y] = (0,
           h.useState)(!1)
             , D = (0,
           h.useRef)(null)
             , {isPreloaded: w, isHeroScrolled: b, glMaskingOffset: _, glIsInteractive: k, setGlIsInteractive: E, setGlProjects: A, glIsHidden: M, routeHistory: F, isRouteTransitioning: O} = (0,
           G.o)(t => ({
               isPreloaded: t.isPreloaded,
               isHeroScrolled: t.isHeroScrolled,
               glMaskingOffset: t.glMaskingOffset,
               glIsInteractive: t.glIsInteractive,
               setGlIsInteractive: t.setGlIsInteractive,
               setGlProjects: t.setGlProjects,
               glIsHidden: t.glIsHidden,
               routeHistory: t.routeHistory,
               isRouteTransitioning: t.isRouteTransitioning
           }), B.X)
             , [P,R] = (0,
           Z.Ro)(t => {
               let {setCursor: e, clearCursor: i} = t;
               return [e, i]
           }
           )
             , L = (0,
           T.O_)();
           (0,
           h.useEffect)( () => {
               if (!L || !p)
                   return;
               let e = ea()
                 , i = async () => {
                   if (!o.current)
                       return;
                   let i = await (await e.getAllByType("project")).filter(t => t.data.image.url)
                     , r = await e.getSingle("homepage")
                     , s = r.data.projects
                     , a = S.p8.utils.shuffle(i);
                   v(a),
                   A(a);
                   let u = n ? a.findIndex(t => t.uid === n) : null
                     , h = e => {
                       let {comingSoon: i} = e.data;
                       i || (E(!1),
                       t.push("/project/".concat(e.uid)))
                   }
                     , c = t => {
                       P("stars");
                       let {comingSoon: e} = t.data;
                       e || document.documentElement.classList.add("cursor-larger")
                   }
                     , d = () => {
                       P("stars")
                   }
                     , p = () => {
                       R()
                   }
                     , m = () => {
                       R()
                   }
                   ;
                   D.current = new ec.Z({
                       focusIndex: u,
                       projects: a,
                       homeDataProjects: s,
                       onActive: l,
                       onActiveClick: h,
                       onActiveMouseEnter: c,
                       onActiveMouseLeave: m,
                       onNonActiveMouseEnter: d,
                       onNonActiveMouseLeave: p,
                       onReady: () => {
                           f(!0)
                       }
                   }),
                   D.current && D.current.gl && D.current.gl.canvas && (o.current.appendChild(D.current.gl.canvas),
                   D.current.gl.canvas.style = "position: absolute; top:0; left:0; height:100%; width: 100%;")
               }
               ;
               return i().catch(t => console.error(t)),
               () => {
                   D.current && (D.current.destroy(),
                   D.current.gl.canvas.remove(),
                   document.documentElement.classList.remove("is-hovering"),
                   f(!1))
               }
           }
           , [L, p]),
           (0,
           T.xQ)( () => {
               D.current && D.current.update()
           }
           , 0),
           (0,
           h.useEffect)( () => {
               D && r && d && n && !D.current.isAnimating && n !== u && D.current.onRouteChange(n)
           }
           , [r, d, n]),
           (0,
           h.useEffect)( () => {
               d && (D.current.maskingOffset = _,
               D.current.needsUpdate = !0)
           }
           , [d, _]),
           (0,
           h.useEffect)( () => {
               d && (D.current.isInteractive = k,
               k || document.documentElement.classList.remove("is-hovering"))
           }
           , [d, k]);
           let I = F[F.length - 2]
             , j = null == I ? void 0 : I.includes("/project/")
             , z = (i || r) && "/" !== I && !j || i && j && b
             , N = M && !r
             , V = d && w;
           return (0,
           C.LZ)(t => {
               let {scroll: e} = t;
               N || (a.current.style.transform = "translate3d(0,".concat(-e, "px,0)"))
           }
           , [N]),
           (0,
           h.useEffect)( () => {
               r || i || y(!1)
           }
           , [e]),
           (0,
           h.useEffect)( () => {
               O && (D.current.isHovering && D.current.clearHits(),
               ("/" === I && "/project/[uid]" !== e || j && "/" !== e) && D.current.leave(),
               "/project/[uid]" === e && "/" !== I && D.current.enter())
           }
           , [O]),
           (0,
           h.useEffect)( () => {
               V && z && (D.current.landingAnimation(r, {}),
               y(!0))
           }
           , [V, z, I]),
           (0,
           s.jsxs)("div", {
               ref: a,
               className: ef().section,
               style: {},
               children: [(0,
               s.jsx)("div", {
                   ref: t => {
                       o.current = t,
                       p || m(!0)
                   }
                   ,
                   style: {
                       height: "100%",
                       width: "100%",
                       position: "relative"
                   }
               }), (0,
               s.jsx)("div", {
                   className: (0,
                   W.Z)("theme-light", "theme-consumer", ef().infos_wrapper),
                   children: g.map( (t, e) => {
                       let {data: r} = t
                         , n = x && u === t.uid && i;
                       return !!r.comingSoon && (0,
                       s.jsx)("div", {
                           className: ef().infos_row,
                           children: (0,
                           s.jsx)("div", {
                               className: ef().infos_item,
                               children: (0,
                               s.jsx)(eo.g, {
                                   active: n,
                                   delayIn: 1,
                                   className: ef().comingSoon,
                                   yPercent: 200,
                                   children: (0,
                                   s.jsxs)("span", {
                                       className: ef().comingSoonText,
                                       children: [(0,
                                       s.jsx)(eh.l, {
                                           name: "circle"
                                       }), (0,
                                       s.jsx)("span", {
                                           children: "Coming soon"
                                       })]
                                   })
                               })
                           })
                       }, "".concat(e, "_inforow"))
                   }
                   )
               }), (0,
               s.jsx)("div", {
                   className: (0,
                   W.Z)("theme-light", "theme-consumer", ef().texts_wrapper),
                   children: g.map( (t, e) => {
                       let {data: r} = t
                         , n = x && u === t.uid && i
                         , a = (0,
                       eu._)(r.title);
                       return (0,
                       s.jsx)(ep, {
                           index: e,
                           active: n,
                           client: r.client,
                           title: r.title,
                           date: r.date
                       }, "".concat(r.client, "-").concat(a))
                   }
                   )
               })]
           })
       }
       let eg = () => (0,
       h.useEffect)( () => {
           let t = Array.from(document.querySelectorAll('link[rel="stylesheet"][data-n-p]')).map(t => ({
               element: t,
               href: t.getAttribute("href")
           }));
           t.forEach(t => {
               let {element: e} = t;
               return e.removeAttribute("data-n-p")
           }
           );
           let e = []
             , i = i => {
               let r = i.filter(t => {
                   let {target: e} = t;
                   return "STYLE" === e.nodeName && e.hasAttribute("data-n-href")
               }
               ).map(t => {
                   let {target: e} = t;
                   return {
                       element: e,
                       href: e.getAttribute("data-n-href")
                   }
               }
               );
               r.forEach(t => {
                   let {element: i, href: r} = t
                     , n = e.includes(r);
                   n ? i.remove() : (i.setAttribute("data-fouc-fix-n-href", r),
                   i.removeAttribute("data-n-href"),
                   e.push(r))
               }
               ),
               t = t.reduce( (t, i) => {
                   let {element: r, href: n} = i
                     , s = e.includes(n);
                   return s ? r.remove() : t.push(i),
                   t
               }
               , [])
           }
             , r = new MutationObserver(i);
           return r.observe(document.head, {
               subtree: !0,
               attributeFilter: ["media"]
           }),
           () => r.disconnect()
       }
       , []);
       i(3988);
       let ev = O()( () => i.e(56).then(i.bind(i, 8056)).then(t => {
           let {Stats: e} = t;
           return e
       }
       ), {
           loadableGenerated: {
               webpack: () => [8056]
           },
           ssr: !1
       })
         , ex = O()( () => i.e(516).then(i.bind(i, 5516)).then(t => {
           let {GridDebugger: e} = t;
           return e
       }
       ), {
           loadableGenerated: {
               webpack: () => [5516]
           },
           ssr: !1
       });
       S.p8.registerPlugin(M.ScrollTrigger),
       M.ScrollTrigger.defaults({
           markers: !1
       }),
       S.p8.ticker.lagSmoothing(0),
       S.p8.ticker.remove(S.p8.updateRoot),
       A.W.add(t => {
           S.p8.updateRoot(t / 1e3)
       }
       , 0);
       var ey = function(t) {
           let {Component: e, pageProps: i} = t
             , r = (0,
           T.qi)()
             , n = (0,
           C.LZ)()
             , {navIsOpened: a, isPreloaded: o, setLineSpacing: l} = (0,
           G.o)(t => {
               let {navIsOpened: e, isPreloaded: i, setLineSpacing: r} = t;
               return {
                   navIsOpened: e,
                   isPreloaded: i,
                   setLineSpacing: r
               }
           }
           , B.X);
           eg(),
           (0,
           h.useEffect)( () => {
               a ? null == n || n.stop() : null == n || n.start()
           }
           , [n, a]),
           (0,
           h.useEffect)( () => {
               document.documentElement.classList.toggle("is-preloaded", o),
               o ? null == n || n.start() : null == n || n.stop()
           }
           , [n, o]),
           (0,
           h.useEffect)( () => {
               M.ScrollTrigger.refresh(),
               window.scrollTo(0, 0),
               requestAnimationFrame( () => {
                   window.scrollTo(0, 0)
               }
               )
           }
           , [n]),
           (0,
           h.useEffect)( () => {
               window.history.scrollRestoration = "manual"
           }
           , []);
           let c = (0,
           T.ac)("(max-width: 800px)");
           return (0,
           h.useEffect)( () => {
               if ("undefined" == typeof document)
                   return;
               let t = () => {
                   let t = getComputedStyle(document.documentElement).getPropertyValue("--line-spacing")
                     , e = parseFloat(t);
                   l(e)
               }
               ;
               return t(),
               window.addEventListener("resize", t),
               () => {
                   window.removeEventListener("resize", t)
               }
           }
           , [l]),
           (0,
           h.useEffect)( () => {
               "undefined" != typeof document && L.Dt && document.documentElement.classList.add("is-android")
           }
           , []),
           (0,
           s.jsxs)(s.Fragment, {
               children: [r && (0,
               s.jsxs)(s.Fragment, {
                   children: [(0,
                   s.jsx)(ex, {}), (0,
                   s.jsx)(ev, {})]
               }), (0,
               s.jsxs)(s.Fragment, {
                   children: [(0,
                   s.jsx)(u(), {
                       src: "https://www.googletagmanager.com/gtag/js?id=".concat(N),
                       defer: !0
                   }), (0,
                   s.jsx)(u(), {
                       id: "gtm-base",
                       dangerouslySetInnerHTML: {
                           __html: "window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat(N, "');")
                       }
                   })]
               }), (0,
               s.jsx)(tD, {}), (0,
               s.jsx)(tg, {}), (0,
               s.jsx)(tw, {}), (0,
               s.jsx)(q, {}), (0,
               s.jsx)(J, {}), (0,
               s.jsx)(tf, {}), (0,
               s.jsx)(ti, {}), (0,
               s.jsx)(tb, {}), (0,
               s.jsx)("div", {
                   id: "full-vh"
               }), (0,
               s.jsxs)(E.c, {
                   internalLinkComponent: t => (0,
                   s.jsx)(R(), {
                       ...t
                   }),
                   children: [(0,
                   s.jsx)(k, {
                       repositoryName: en,
                       children: (0,
                       s.jsx)(j.k, {
                           children: (0,
                           s.jsx)(U, {
                               children: (0,
                               s.jsx)(e, {
                                   ...i
                               })
                           })
                       })
                   }), void 0 !== c && !c && (0,
                   s.jsx)(em, {})]
               })]
           })
       }
   },
   3988: function() {},
   2317: function(t) {
       t.exports = {
           animation: "animation_animation__bOn7H",
           childrenAsIB: "animation_childrenAsIB__13gRT",
           "not-ready": "animation_not-ready__RRSBg",
           appear: "animation_appear__Zana6",
           appear_line: "animation_appear_line__4beQO",
           appear_inner: "animation_appear_inner__i0GwY",
           "is-active": "animation_is-active__Ilk0W",
           parent: "animation_parent__pnMxW",
           "on-parent-hover": "animation_on-parent-hover__kcqiL",
           controller: "animation_controller__EzG_N",
           "is-controlled": "animation_is-controlled__KAxdo",
           "no-pointer-events": "animation_no-pointer-events__5saCK",
           "-instant": "animation_-instant__RAySv",
           slideInner: "animation_slideInner__b7Vks",
           slide: "animation_slide__EtKxi",
           reversed: "animation_reversed__eTySa",
           diagonal: "animation_diagonal__nu1b5"
       }
   },
   1194: function(t) {
       t.exports = {
           container: "cursor_container__x_n9C",
           cursor: "cursor_cursor__Gs2Iw",
           canvas: "cursor_canvas__FkJcY",
           canvasActive: "cursor_canvasActive__vbE08",
           canvasHidden: "cursor_canvasHidden__4BVVw",
           portal: "cursor_portal__3seXq",
           illustration: "cursor_illustration__BZT3i",
           illustrationImage: "cursor_illustrationImage__qYOf5",
           illustrationActive: "cursor_illustrationActive__Nx4_x"
       }
   },
   9574: function(t) {
       t.exports = {
           header: "header_header__GSKJx",
           head: "header_head__dyG_u",
           headerInner: "header_headerInner__tTE_R",
           hidden: "header_hidden__kP_eh",
           logoLink: "header_logoLink__I_hFt",
           navigation: "header_navigation__YgNBr",
           logo: "header_logo__d4jIK",
           left: "header_left__h7UAD",
           right: "header_right__b_CJu",
           dot: "header_dot___NKJZ",
           illustration: "header_illustration__zbAPO",
           illustrationImage: "header_illustrationImage__DMQXK",
           illustrationActive: "header_illustrationActive__L8LqO"
       }
   },
   2464: function(t) {
       t.exports = {
           wrapper: "navigation_wrapper__D6WHq",
           list: "navigation_list__4Sxuz",
           item: "navigation_item__zf_6C"
       }
   },
   3727: function(t) {
       t.exports = {
           transition: "page-transition_transition__2RWRG"
       }
   },
   1089: function(t) {
       t.exports = {
           wrapper: "preloader_wrapper__NrANa",
           lottie: "preloader_lottie__ks_IW"
       }
   },
   6036: function(t) {
       t.exports = {
           inner: "project-counter_inner__8YVd9",
           dot: "project-counter_dot__CTW2F"
       }
   },
   9178: function(t) {
       t.exports = {
           wrapper: "project-title_wrapper__bBHng",
           header: "project-title_header__1ku_1",
           counter: "project-title_counter___7jkM",
           infos: "project-title_infos__RbCF1",
           title: "project-title_title___vVwO"
       }
   },
   1586: function(t) {
       t.exports = {
           section: "webgl-slider_section__0_uCZ",
           hidden: "webgl-slider_hidden__XWh_5",
           prefetch: "webgl-slider_prefetch__4_DC6",
           texts_wrapper: "webgl-slider_texts_wrapper__zsBnq",
           texts_wrapper_item: "webgl-slider_texts_wrapper_item__HCIok",
           infos_wrapper: "webgl-slider_infos_wrapper__96xyx",
           infos_row: "webgl-slider_infos_row__kly_X",
           title: "webgl-slider_title__hQNtD",
           comingSoon: "webgl-slider_comingSoon__D0DLr",
           comingSoonText: "webgl-slider_comingSoonText__9_X6w"
       }
   },
   597: function(t) {
       !function() {
           var e = {
               229: function(t) {
                   var e, i, r, n = t.exports = {};
                   function s() {
                       throw Error("setTimeout has not been defined")
                   }
                   function a() {
                       throw Error("clearTimeout has not been defined")
                   }
                   function o(t) {
                       if (e === setTimeout)
                           return setTimeout(t, 0);
                       if ((e === s || !e) && setTimeout)
                           return e = setTimeout,
                           setTimeout(t, 0);
                       try {
                           return e(t, 0)
                       } catch (i) {
                           try {
                               return e.call(null, t, 0)
                           } catch (i) {
                               return e.call(this, t, 0)
                           }
                       }
                   }
                   !function() {
                       try {
                           e = "function" == typeof setTimeout ? setTimeout : s
                       } catch (t) {
                           e = s
                       }
                       try {
                           i = "function" == typeof clearTimeout ? clearTimeout : a
                       } catch (t) {
                           i = a
                       }
                   }();
                   var u = []
                     , l = !1
                     , h = -1;
                   function c() {
                       l && r && (l = !1,
                       r.length ? u = r.concat(u) : h = -1,
                       u.length && d())
                   }
                   function d() {
                       if (!l) {
                           var t = o(c);
                           l = !0;
                           for (var e = u.length; e; ) {
                               for (r = u,
                               u = []; ++h < e; )
                                   r && r[h].run();
                               h = -1,
                               e = u.length
                           }
                           r = null,
                           l = !1,
                           function(t) {
                               if (i === clearTimeout)
                                   return clearTimeout(t);
                               if ((i === a || !i) && clearTimeout)
                                   return i = clearTimeout,
                                   clearTimeout(t);
                               try {
                                   i(t)
                               } catch (e) {
                                   try {
                                       return i.call(null, t)
                                   } catch (e) {
                                       return i.call(this, t)
                                   }
                               }
                           }(t)
                       }
                   }
                   function f(t, e) {
                       this.fun = t,
                       this.array = e
                   }
                   function p() {}
                   n.nextTick = function(t) {
                       var e = Array(arguments.length - 1);
                       if (arguments.length > 1)
                           for (var i = 1; i < arguments.length; i++)
                               e[i - 1] = arguments[i];
                       u.push(new f(t,e)),
                       1 !== u.length || l || o(d)
                   }
                   ,
                   f.prototype.run = function() {
                       this.fun.apply(null, this.array)
                   }
                   ,
                   n.title = "browser",
                   n.browser = !0,
                   n.env = {},
                   n.argv = [],
                   n.version = "",
                   n.versions = {},
                   n.on = p,
                   n.addListener = p,
                   n.once = p,
                   n.off = p,
                   n.removeListener = p,
                   n.removeAllListeners = p,
                   n.emit = p,
                   n.prependListener = p,
                   n.prependOnceListener = p,
                   n.listeners = function(t) {
                       return []
                   }
                   ,
                   n.binding = function(t) {
                       throw Error("process.binding is not supported")
                   }
                   ,
                   n.cwd = function() {
                       return "/"
                   }
                   ,
                   n.chdir = function(t) {
                       throw Error("process.chdir is not supported")
                   }
                   ,
                   n.umask = function() {
                       return 0
                   }
               }
           }
             , i = {};
           function r(t) {
               var n = i[t];
               if (void 0 !== n)
                   return n.exports;
               var s = i[t] = {
                   exports: {}
               }
                 , a = !0;
               try {
                   e[t](s, s.exports, r),
                   a = !1
               } finally {
                   a && delete i[t]
               }
               return s.exports
           }
           r.ab = "//";
           var n = r(229);
           t.exports = n
       }()
   },
   8142: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       Object.defineProperty(e, "RequestCookies", {
           enumerable: !0,
           get: function() {
               return r.RequestCookies
           }
       }),
       Object.defineProperty(e, "ResponseCookies", {
           enumerable: !0,
           get: function() {
               return n.ResponseCookies
           }
       });
       var r = i(3435)
         , n = i(9749)
   },
   3435: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       });
       var r = i(5172);
       class n {
           _parsed = new Map;
           constructor(t) {
               this._headers = t;
               let e = t.get("cookie");
               if (e) {
                   let t = r.parseCookieString(e);
                   for (let[e,i] of t)
                       this._parsed.set(e, {
                           name: e,
                           value: i
                       })
               }
           }
           [Symbol.iterator]() {
               return this._parsed[Symbol.iterator]()
           }
           get size() {
               return this._parsed.size
           }
           get(...t) {
               let e = "string" == typeof t[0] ? t[0] : t[0].name;
               return this._parsed.get(e)
           }
           getAll(...t) {
               var e;
               let i = Array.from(this._parsed);
               if (!t.length)
                   return i.map( ([t,e]) => e);
               let r = "string" == typeof t[0] ? t[0] : null == (e = t[0]) ? void 0 : e.name;
               return i.filter( ([t]) => t === r).map( ([t,e]) => e)
           }
           has(t) {
               return this._parsed.has(t)
           }
           set(...t) {
               let[e,i] = 1 === t.length ? [t[0].name, t[0].value] : t
                 , n = this._parsed;
               return n.set(e, {
                   name: e,
                   value: i
               }),
               this._headers.set("cookie", Array.from(n).map( ([t,e]) => r.serialize(e)).join("; ")),
               this
           }
           delete(t) {
               let e = this._parsed
                 , i = Array.isArray(t) ? t.map(t => e.delete(t)) : e.delete(t);
               return this._headers.set("cookie", Array.from(e).map( ([t,e]) => r.serialize(e)).join("; ")),
               i
           }
           clear() {
               return this.delete(Array.from(this._parsed.keys())),
               this
           }
           [Symbol.for("edge-runtime.inspect.custom")]() {
               return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
           }
       }
       e.RequestCookies = n
   },
   9749: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       });
       var r = i(5172);
       class n {
           _parsed = new Map;
           constructor(t) {
               this._headers = t;
               let e = this._headers.getAll("set-cookie");
               for (let t of e) {
                   let e = r.parseSetCookieString(t);
                   e && this._parsed.set(e.name, e)
               }
           }
           get(...t) {
               let e = "string" == typeof t[0] ? t[0] : t[0].name;
               return this._parsed.get(e)
           }
           getAll(...t) {
               var e;
               let i = Array.from(this._parsed.values());
               if (!t.length)
                   return i;
               let r = "string" == typeof t[0] ? t[0] : null == (e = t[0]) ? void 0 : e.name;
               return i.filter(t => t.name === r)
           }
           set(...t) {
               let[e,i,n] = 1 === t.length ? [t[0].name, t[0].value, t[0]] : t
                 , s = this._parsed;
               return s.set(e, function(t={
                   name: "",
                   value: ""
               }) {
                   return t.maxAge && (t.expires = new Date(Date.now() + 1e3 * t.maxAge)),
                   (null === t.path || void 0 === t.path) && (t.path = "/"),
                   t
               }({
                   name: e,
                   value: i,
                   ...n
               })),
               !function(t, e) {
                   for (let[,i] of (e.delete("set-cookie"),
                   t)) {
                       let t = r.serialize(i);
                       e.append("set-cookie", t)
                   }
               }(s, this._headers),
               this
           }
           delete(...t) {
               let e = "string" == typeof t[0] ? t[0] : t[0].name;
               return this.set({
                   name: e,
                   value: "",
                   expires: new Date(0)
               })
           }
           [Symbol.for("edge-runtime.inspect.custom")]() {
               return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
           }
       }
       e.ResponseCookies = n
   },
   5172: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.serialize = function(t) {
           let e = ["path"in t && t.path && `Path=${t.path}`, "expires"in t && t.expires && `Expires=${t.expires.toUTCString()}`, "maxAge"in t && t.maxAge && `Max-Age=${t.maxAge}`, "domain"in t && t.domain && `Domain=${t.domain}`, "secure"in t && t.secure && "Secure", "httpOnly"in t && t.httpOnly && "HttpOnly", "sameSite"in t && t.sameSite && `SameSite=${t.sameSite}`].filter(Boolean);
           return `${t.name}=${encodeURIComponent(t.value ?? "")}; ${e.join("; ")}`
       }
       ,
       e.parseCookieString = r,
       e.parseSetCookieString = function(t) {
           var e;
           if (!t)
               return;
           let[[n,s],...a] = r(t)
             , {domain: o, expires: u, httponly: l, maxage: h, path: c, samesite: d, secure: f} = Object.fromEntries(a.map( ([t,e]) => [t.toLowerCase(), e]))
             , p = {
               name: n,
               value: decodeURIComponent(s),
               domain: o,
               ...u && {
                   expires: new Date(u)
               },
               ...l && {
                   httpOnly: !0
               },
               ..."string" == typeof h && {
                   maxAge: Number(h)
               },
               path: c,
               ...d && {
                   sameSite: i.includes(e = (e = d).toLowerCase()) ? e : void 0
               },
               ...f && {
                   secure: !0
               }
           };
           return function(t) {
               let e = {};
               for (let i in t)
                   t[i] && (e[i] = t[i]);
               return e
           }(p)
       }
       ;
       let i = ["strict", "lax", "none"];
       function r(t) {
           let e = new Map;
           for (let i of t.split(/; */)) {
               if (!i)
                   continue;
               let t = i.indexOf("=")
                 , r = i.slice(0, t)
                 , n = i.slice(t + 1);
               e.set(r, decodeURIComponent(n ?? "true"))
           }
           return e
       }
   },
   2110: function(t, e, i) {
       t.exports = i(8146)
   },
   6261: function(t, e, i) {
       t.exports = i(8926)
   },
   3551: function(t, e, i) {
       t.exports = i(8564)
   },
   8111: function(t, e, i) {
       t.exports = i(1413)
   },
   1517: function(t, e, i) {
       t.exports = i(6084)
   },
   3864: function(t, e, i) {
       t.exports = i(6920)
   },
   4049: function(t, e, i) {
       "use strict";
       var r = i(6257);
       function n() {}
       function s() {}
       s.resetWarningCache = n,
       t.exports = function() {
           function t(t, e, i, n, s, a) {
               if (a !== r) {
                   var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                   throw o.name = "Invariant Violation",
                   o
               }
           }
           function e() {
               return t
           }
           t.isRequired = t;
           var i = {
               array: t,
               bigint: t,
               bool: t,
               func: t,
               number: t,
               object: t,
               string: t,
               symbol: t,
               any: t,
               arrayOf: e,
               element: t,
               elementType: t,
               instanceOf: e,
               node: t,
               objectOf: e,
               oneOf: e,
               oneOfType: e,
               shape: e,
               exact: e,
               checkPropTypes: s,
               resetWarningCache: n
           };
           return i.PropTypes = i,
           i
       }
   },
   507: function(t, e, i) {
       t.exports = i(4049)()
   },
   6257: function(t) {
       "use strict";
       t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
   },
   9845: function(t, e, i) {
       "use strict";
       var r, n, s, a, o, u, l = i(959);
       l && "object" == typeof l && "default"in l && l.default;
       var h = i(3405)
         , c = new h
         , d = c.getBrowser()
         , f = c.getCPU()
         , p = c.getDevice()
         , m = c.getEngine()
         , g = c.getOS()
         , v = c.getUA()
         , x = {
           Mobile: "mobile",
           Tablet: "tablet",
           SmartTv: "smarttv",
           Console: "console",
           Wearable: "wearable",
           Embedded: "embedded",
           Browser: void 0
       }
         , y = {
           Chrome: "Chrome",
           Firefox: "Firefox",
           Opera: "Opera",
           Yandex: "Yandex",
           Safari: "Safari",
           InternetExplorer: "Internet Explorer",
           Edge: "Edge",
           Chromium: "Chromium",
           Ie: "IE",
           MobileSafari: "Mobile Safari",
           EdgeChromium: "Edge Chromium",
           MIUI: "MIUI Browser",
           SamsungBrowser: "Samsung Browser"
       }
         , D = {
           IOS: "iOS",
           Android: "Android",
           WindowsPhone: "Windows Phone",
           Windows: "Windows",
           MAC_OS: "Mac OS"
       }
         , w = function(t) {
           var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
           return t || e
       }
         , b = function() {
           return !!("undefined" != typeof window && (window.navigator || navigator)) && (window.navigator || navigator)
       }
         , _ = function(t) {
           var e = b();
           return e && e.platform && (-1 !== e.platform.indexOf(t) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream)
       }
         , k = function(t) {
           return t.type === x.Browser
       }
         , E = function(t) {
           return t.name === y.Edge
       }
         , T = function(t) {
           return "string" == typeof t && -1 !== t.indexOf("Edg/")
       }
         , C = function() {
           return _("iPad")
       };
       p.type,
       x.SmartTv,
       p.type,
       x.Console,
       p.type,
       x.Wearable,
       p.type,
       x.Embedded,
       d.name === y.MobileSafari || C(),
       d.name,
       y.Chromium,
       (r = p.type) === x.Mobile || r === x.Tablet || C(),
       p.type,
       x.Mobile,
       p.type === x.Tablet || C(),
       k(p),
       k(p);
       var A = g.name === D.Android;
       g.name,
       D.WindowsPhone,
       g.name === D.IOS || C(),
       d.name,
       y.Chrome,
       d.name,
       y.Firefox,
       (n = d.name) === y.Safari || y.MobileSafari,
       d.name,
       y.Opera,
       (s = d.name) === y.InternetExplorer || y.Ie,
       w(g.version),
       w(g.name),
       w(d.version),
       w(d.major),
       w(d.name),
       w(p.vendor),
       w(p.model),
       w(m.name),
       w(m.version),
       w(v),
       E(d) || T(v),
       d.name,
       y.Yandex,
       w(p.type, "browser"),
       (a = b()) && (/iPad|iPhone|iPod/.test(a.platform) || "MacIntel" === a.platform && a.maxTouchPoints > 1) && window.MSStream,
       C(),
       _("iPhone"),
       _("iPod"),
       "string" == typeof (u = (o = b()) && o.userAgent && o.userAgent.toLowerCase()) && /electron/.test(u),
       T(v),
       E(d) && T(v),
       g.name,
       D.Windows,
       g.name,
       D.MAC_OS,
       d.name,
       y.MIUI,
       d.name,
       y.SamsungBrowser,
       e.Dt = A
   },
   2982: function(t, e, i) {
       "use strict";
       function r(t) {
           for (var e = [], i = 1; i < arguments.length; i++)
               e[i - 1] = arguments[i];
           t && t.addEventListener && t.addEventListener.apply(t, e)
       }
       function n(t) {
           for (var e = [], i = 1; i < arguments.length; i++)
               e[i - 1] = arguments[i];
           t && t.removeEventListener && t.removeEventListener.apply(t, e)
       }
       i.d(e, {
           S1: function() {
               return n
           },
           jU: function() {
               return s
           },
           on: function() {
               return r
           }
       });
       var s = "undefined" != typeof window
   },
   6061: function(t, e, i) {
       "use strict";
       var r = i(959);
       e.Z = function(t) {
           (0,
           r.useEffect)(t, [])
       }
   },
   3952: function(t, e, i) {
       "use strict";
       var r = i(959)
         , n = i(2982).jU ? r.useLayoutEffect : r.useEffect;
       e.Z = n
   },
   8263: function(t, e, i) {
       "use strict";
       var r = i(6061);
       e.Z = function(t) {
           (0,
           r.Z)(function() {
               t()
           })
       }
   },
   8791: function(t, e, i) {
       "use strict";
       i.d(e, {
           Z: function() {
               return n
           }
       });
       var r = i(959)
         , n = function(t, e) {
           var i, n = (i = (0,
           r.useRef)(!0)).current ? (i.current = !1,
           !0) : i.current;
           (0,
           r.useEffect)(function() {
               if (!n)
                   return t()
           }, e)
       }
   },
   3405: function(t, e, i) {
       var r;
       !function(n, s) {
           "use strict";
           var a = "function"
             , o = "undefined"
             , u = "object"
             , l = "string"
             , h = "major"
             , c = "model"
             , d = "name"
             , f = "type"
             , p = "vendor"
             , m = "version"
             , g = "architecture"
             , v = "console"
             , x = "mobile"
             , y = "tablet"
             , D = "smarttv"
             , w = "wearable"
             , b = "embedded"
             , _ = "Amazon"
             , k = "Apple"
             , E = "ASUS"
             , T = "BlackBerry"
             , C = "Browser"
             , A = "Chrome"
             , S = "Firefox"
             , M = "Google"
             , F = "Huawei"
             , O = "Microsoft"
             , P = "Motorola"
             , R = "Opera"
             , B = "Samsung"
             , L = "Sharp"
             , I = "Sony"
             , j = "Xiaomi"
             , z = "Zebra"
             , N = "Facebook"
             , V = "Chromium OS"
             , G = "Mac OS"
             , U = function(t, e) {
               var i = {};
               for (var r in t)
                   e[r] && e[r].length % 2 == 0 ? i[r] = e[r].concat(t[r]) : i[r] = t[r];
               return i
           }
             , H = function(t) {
               for (var e = {}, i = 0; i < t.length; i++)
                   e[t[i].toUpperCase()] = t[i];
               return e
           }
             , q = function(t, e) {
               return typeof t === l && -1 !== W(e).indexOf(W(t))
           }
             , W = function(t) {
               return t.toLowerCase()
           }
             , Y = function(t, e) {
               if (typeof t === l)
                   return t = t.replace(/^\s\s*/, ""),
                   typeof e === o ? t : t.substring(0, 500)
           }
             , X = function(t, e) {
               for (var i, r, n, o, l, h, c = 0; c < e.length && !l; ) {
                   var d = e[c]
                     , f = e[c + 1];
                   for (i = r = 0; i < d.length && !l && d[i]; )
                       if (l = d[i++].exec(t))
                           for (n = 0; n < f.length; n++)
                               h = l[++r],
                               typeof (o = f[n]) === u && o.length > 0 ? 2 === o.length ? typeof o[1] == a ? this[o[0]] = o[1].call(this, h) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== a || o[1].exec && o[1].test ? this[o[0]] = h ? h.replace(o[1], o[2]) : s : this[o[0]] = h ? o[1].call(this, h, o[2]) : s : 4 === o.length && (this[o[0]] = h ? o[3].call(this, h.replace(o[1], o[2])) : s) : this[o] = h || s;
                   c += 2
               }
           }
             , Z = function(t, e) {
               for (var i in e)
                   if (typeof e[i] === u && e[i].length > 0) {
                       for (var r = 0; r < e[i].length; r++)
                           if (q(e[i][r], t))
                               return "?" === i ? s : i
                   } else if (q(e[i], t))
                       return "?" === i ? s : i;
               return t
           }
             , $ = {
               ME: "4.90",
               "NT 3.11": "NT3.51",
               "NT 4.0": "NT4.0",
               2e3: "NT 5.0",
               XP: ["NT 5.1", "NT 5.2"],
               Vista: "NT 6.0",
               7: "NT 6.1",
               8: "NT 6.2",
               8.1: "NT 6.3",
               10: ["NT 6.4", "NT 10.0"],
               RT: "ARM"
           }
             , K = {
               browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, m], [/opios[\/ ]+([\w\.]+)/i], [m, [d, R + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [d, R]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [m, [d, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [d, "UC" + C]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [m, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [m, [d, "Smart Lenovo " + C]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure " + C], m], [/\bfocus\/([\w\.]+)/i], [m, [d, S + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [d, R + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [d, R + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [d, "MIUI " + C]], [/fxios\/([-\w\.]+)/i], [m, [d, S]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 " + C]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 " + C], m], [/samsungbrowser\/([\w\.]+)/i], [m, [d, B + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], m], [/metasr[\/ ]?([\d\.]+)/i], [m, [d, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [d, m], [/(lbbrowser)/i, /\[(TV)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, N], m], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|PHOTOGRAPHY|snapchat)[\/ ]([-\w\.]+)/i], [d, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [d, A + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, A + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [d, "Android " + C]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [d, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [m, Z, {
                   "1.0": "/8",
                   1.2: "/1",
                   1.3: "/3",
                   "2.0": "/412",
                   "2.0.2": "/416",
                   "2.0.3": "/417",
                   "2.0.4": "/419",
                   "?": "/"
               }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [d, S + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, m], [/(cobalt)\/([\w\.]+)/i], [d, [m, /master.|lts./, ""]]],
               cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, W]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[g, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[g, "armhf"]], [/windows (ce|mobile); ppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[g, /ower/, "", W]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[g, W]]],
               device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [p, B], [f, y]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [p, B], [f, x]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [p, k], [f, x]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [p, k], [f, y]], [/(macintosh);/i], [c, [p, k]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [p, L], [f, x]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [p, F], [f, y]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [p, F], [f, x]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [p, j], [f, x]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [p, j], [f, y]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [p, "OPPO"], [f, x]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [p, "Vivo"], [f, x]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [p, "Realme"], [f, x]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [p, P], [f, x]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [p, P], [f, y]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [p, "LG"], [f, y]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [p, "LG"], [f, x]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [p, "Lenovo"], [f, y]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [p, "Nokia"], [f, x]], [/(pixel c)\b/i], [c, [p, M], [f, y]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [p, M], [f, x]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [p, I], [f, x]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [p, I], [f, y]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [p, "OnePlus"], [f, x]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [p, _], [f, y]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [p, _], [f, x]], [/(playbook);[-\w\),; ]+(rim)/i], [c, p, [f, y]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [p, T], [f, x]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [p, E], [f, y]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [p, E], [f, x]], [/(nexus 9)/i], [c, [p, "HTC"], [f, y]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [p, [c, /_/g, " "], [f, x]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [p, "Acer"], [f, y]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [p, "Meizu"], [f, x]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [p, "Ulefone"], [f, x]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [p, c, [f, x]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [p, c, [f, y]], [/(surface duo)/i], [c, [p, O], [f, y]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [p, "Fairphone"], [f, x]], [/(u304aa)/i], [c, [p, "AT&T"], [f, x]], [/\bsie-(\w*)/i], [c, [p, "Siemens"], [f, x]], [/\b(rct\w+) b/i], [c, [p, "RCA"], [f, y]], [/\b(venue[\d ]{2,7}) b/i], [c, [p, "Dell"], [f, y]], [/\b(q(?:mv|ta)\w+) b/i], [c, [p, "Verizon"], [f, y]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [p, "Barnes & Noble"], [f, y]], [/\b(tm\d{3}\w+) b/i], [c, [p, "NuVision"], [f, y]], [/\b(k88) b/i], [c, [p, "ZTE"], [f, y]], [/\b(nx\d{3}j) b/i], [c, [p, "ZTE"], [f, x]], [/\b(gen\d{3}) b.+49h/i], [c, [p, "Swiss"], [f, x]], [/\b(zur\d{3}) b/i], [c, [p, "Swiss"], [f, y]], [/\b((zeki)?tb.*\b) b/i], [c, [p, "Zeki"], [f, y]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[p, "Dragon Touch"], c, [f, y]], [/\b(ns-?\w{0,9}) b/i], [c, [p, "Insignia"], [f, y]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [p, "NextBook"], [f, y]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[p, "Voice"], c, [f, x]], [/\b(lvtel\-)?(v1[12]) b/i], [[p, "LvTel"], c, [f, x]], [/\b(ph-1) /i], [c, [p, "Essential"], [f, x]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [p, "Envizen"], [f, y]], [/\b(trio[-\w\. ]+) b/i], [c, [p, "MachSpeed"], [f, y]], [/\btu_(1491) b/i], [c, [p, "Rotor"], [f, y]], [/(shield[\w ]+) b/i], [c, [p, "Nvidia"], [f, y]], [/(sprint) (\w+)/i], [p, c, [f, x]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [p, O], [f, x]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [p, z], [f, y]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [p, z], [f, x]], [/smart-tv.+(samsung)/i], [p, [f, D]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [p, B], [f, D]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[p, "LG"], [f, D]], [/(apple) ?tv/i], [p, [c, k + " TV"], [f, D]], [/crkey/i], [[c, A + "cast"], [p, M], [f, D]], [/droid.+aft(\w+)( bui|\))/i], [c, [p, _], [f, D]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [p, L], [f, D]], [/(bravia[\w ]+)( bui|\))/i], [c, [p, I], [f, D]], [/(mitv-\w{5}) bui/i], [c, [p, j], [f, D]], [/Hbbtv.*(technisat) (.*);/i], [p, c, [f, D]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[p, Y], [c, Y], [f, D]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[f, D]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [p, c, [f, v]], [/droid.+; (shield) bui/i], [c, [p, "Nvidia"], [f, v]], [/(playstation [345portablevi]+)/i], [c, [p, I], [f, v]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [p, O], [f, v]], [/((pebble))app/i], [p, c, [f, w]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [p, k], [f, w]], [/droid.+; (glass) \d/i], [c, [p, M], [f, w]], [/droid.+; (wt63?0{2,3})\)/i], [c, [p, z], [f, w]], [/(quest( 2| pro)?)/i], [c, [p, N], [f, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [p, [f, b]], [/(aeobc)\b/i], [c, [p, _], [f, b]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [f, x]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [f, y]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[f, y]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[f, x]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [p, "Generic"]]],
               engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, d]],
               os: [[/microsoft (windows) (vista|xp)/i], [d, m], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [d, [m, Z, $]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, Z, $], [d, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, G], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, m], [/\(bb(10);/i], [m, [d, T]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [d, S + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [d, A + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, V], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, m], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, m]]
           }
             , Q = function(t, e) {
               if (typeof t === u && (e = t,
               t = s),
               !(this instanceof Q))
                   return new Q(t,e).getResult();
               var i = typeof n !== o && n.navigator ? n.navigator : s
                 , r = t || (i && i.userAgent ? i.userAgent : "")
                 , v = i && i.userAgentData ? i.userAgentData : s
                 , D = e ? U(K, e) : K
                 , w = i && i.userAgent == r;
               return this.getBrowser = function() {
                   var t, e = {};
                   return e[d] = s,
                   e[m] = s,
                   X.call(e, r, D.browser),
                   e[h] = typeof (t = e[m]) === l ? t.replace(/[^\d\.]/g, "").split(".")[0] : s,
                   w && i && i.brave && typeof i.brave.isBrave == a && (e[d] = "Brave"),
                   e
               }
               ,
               this.getCPU = function() {
                   var t = {};
                   return t[g] = s,
                   X.call(t, r, D.cpu),
                   t
               }
               ,
               this.getDevice = function() {
                   var t = {};
                   return t[p] = s,
                   t[c] = s,
                   t[f] = s,
                   X.call(t, r, D.device),
                   w && !t[f] && v && v.mobile && (t[f] = x),
                   w && "Macintosh" == t[c] && i && typeof i.standalone !== o && i.maxTouchPoints && i.maxTouchPoints > 2 && (t[c] = "iPad",
                   t[f] = y),
                   t
               }
               ,
               this.getEngine = function() {
                   var t = {};
                   return t[d] = s,
                   t[m] = s,
                   X.call(t, r, D.engine),
                   t
               }
               ,
               this.getOS = function() {
                   var t = {};
                   return t[d] = s,
                   t[m] = s,
                   X.call(t, r, D.os),
                   w && !t[d] && v && "Unknown" != v.platform && (t[d] = v.platform.replace(/chrome os/i, V).replace(/macos/i, G)),
                   t
               }
               ,
               this.getResult = function() {
                   return {
                       ua: this.getUA(),
                       browser: this.getBrowser(),
                       engine: this.getEngine(),
                       os: this.getOS(),
                       device: this.getDevice(),
                       cpu: this.getCPU()
                   }
               }
               ,
               this.getUA = function() {
                   return r
               }
               ,
               this.setUA = function(t) {
                   return r = typeof t === l && t.length > 500 ? Y(t, 500) : t,
                   this
               }
               ,
               this.setUA(r),
               this
           };
           Q.VERSION = "1.0.37",
           Q.BROWSER = H([d, m, h]),
           Q.CPU = H([g]),
           Q.DEVICE = H([c, p, f, v, x, D, y, w, b]),
           Q.ENGINE = Q.OS = H([d, m]),
           typeof e !== o ? (t.exports && (e = t.exports = Q),
           e.UAParser = Q) : i.amdO ? (r = (function() {
               return Q
           }
           ).call(e, i, e, t),
           s !== r && (t.exports = r)) : typeof n !== o && (n.UAParser = Q);
           var J = typeof n !== o && (n.jQuery || n.Zepto);
           if (J && !J.ua) {
               var tt = new Q;
               J.ua = tt.getResult(),
               J.ua.get = function() {
                   return tt.getUA()
               }
               ,
               J.ua.set = function(t) {
                   tt.setUA(t);
                   var e = tt.getResult();
                   for (var i in e)
                       J.ua[i] = e[i]
               }
           }
       }("object" == typeof window ? window : this)
   },
   2415: function(t, e, i) {
       "use strict";
       /**
* @license React
* use-sync-external-store-shim.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
       var r = i(959)
         , n = "function" == typeof Object.is ? Object.is : function(t, e) {
           return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
       }
         , s = r.useState
         , a = r.useEffect
         , o = r.useLayoutEffect
         , u = r.useDebugValue;
       function l(t) {
           var e = t.getSnapshot;
           t = t.value;
           try {
               var i = e();
               return !n(t, i)
           } catch (t) {
               return !0
           }
       }
       var h = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, e) {
           return e()
       }
       : function(t, e) {
           var i = e()
             , r = s({
               inst: {
                   value: i,
                   getSnapshot: e
               }
           })
             , n = r[0].inst
             , h = r[1];
           return o(function() {
               n.value = i,
               n.getSnapshot = e,
               l(n) && h({
                   inst: n
               })
           }, [t, i, e]),
           a(function() {
               return l(n) && h({
                   inst: n
               }),
               t(function() {
                   l(n) && h({
                       inst: n
                   })
               })
           }, [t]),
           u(i),
           i
       }
       ;
       e.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : h
   },
   2179: function(t, e, i) {
       "use strict";
       /**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
       var r = i(959)
         , n = i(4322)
         , s = "function" == typeof Object.is ? Object.is : function(t, e) {
           return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
       }
         , a = n.useSyncExternalStore
         , o = r.useRef
         , u = r.useEffect
         , l = r.useMemo
         , h = r.useDebugValue;
       e.useSyncExternalStoreWithSelector = function(t, e, i, r, n) {
           var c = o(null);
           if (null === c.current) {
               var d = {
                   hasValue: !1,
                   value: null
               };
               c.current = d
           } else
               d = c.current;
           c = l(function() {
               function t(t) {
                   if (!u) {
                       if (u = !0,
                       a = t,
                       t = r(t),
                       void 0 !== n && d.hasValue) {
                           var e = d.value;
                           if (n(e, t))
                               return o = e
                       }
                       return o = t
                   }
                   if (e = o,
                   s(a, t))
                       return e;
                   var i = r(t);
                   return void 0 !== n && n(e, i) ? e : (a = t,
                   o = i)
               }
               var a, o, u = !1, l = void 0 === i ? null : i;
               return [function() {
                   return t(e())
               }
               , null === l ? void 0 : function() {
                   return t(l())
               }
               ]
           }, [e, i, r, n]);
           var f = a(t, c[0], c[1]);
           return u(function() {
               d.hasValue = !0,
               d.value = f
           }, [f]),
           h(f),
           f
       }
   },
   4322: function(t, e, i) {
       "use strict";
       t.exports = i(2415)
   },
   7231: function(t, e, i) {
       "use strict";
       t.exports = i(2179)
   },
   6658: function(t, e) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.createAsyncLocalStorage = function() {
           return globalThis.AsyncLocalStorage ? new globalThis.AsyncLocalStorage : new i
       }
       ;
       class i {
           disable() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
           getStore() {}
           run() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
           exit() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
           enterWith() {
               throw Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available")
           }
       }
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   2792: function(t, e, i) {
       "use strict";
       Object.defineProperty(e, "__esModule", {
           value: !0
       }),
       e.staticGenerationAsyncStorage = void 0;
       var r = i(6658);
       let n = r.createAsyncLocalStorage();
       e.staticGenerationAsyncStorage = n,
       ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
           value: !0
       }),
       Object.assign(e.default, e),
       t.exports = e.default)
   },
   4899: function(t, e, i) {
       "use strict";
       i.d(e, {
           S: function() {
               return n
           }
       });
       let r = (t, e=" ") => {
           let i = "";
           for (let r = 0; r < t.length; r++)
               "text"in t[r] && (i += (i ? e : "") + t[r].text);
           return i
       }
         , n = (t, e) => t ? r(t, e) : null
   },
   6624: function(t, e, i) {
       "use strict";
       i.d(e, {
           EL: function() {
               return f
           },
           O_: function() {
               return a
           },
           Or: function() {
               return h
           },
           ac: function() {
               return c
           },
           h7: function() {
               return u
           },
           qi: function() {
               return o
           },
           xQ: function() {
               return l
           }
       });
       var r = i(959)
         , n = i(4439)
         , s = i(2909);
       function a() {
           let[t,e] = (0,
           r.useState)(!1);
           return (0,
           r.useEffect)( () => {
               e(!0)
           }
           , []),
           t
       }
       function o() {
           let t = a();
           return (0,
           r.useMemo)( () => t && (window.location.href.includes("#debug") || !1) && !window.location.href.includes("#production"), [t])
       }
       function u() {
           let[t,e] = (0,
           r.useState)( () => "undefined" != typeof document ? document.readyState : "loading");
           return (0,
           r.useEffect)( () => {
               if ("undefined" != typeof document)
                   return e(document.readyState),
                   document.addEventListener("readystatechange", t, !1),
                   () => document.removeEventListener("readystatechange", t, !1);
               function t() {
                   e(document.readyState)
               }
           }
           , []),
           t
       }
       function l(t, e=0) {
           (0,
           r.useEffect)( () => {
               if (t)
                   return n.W.add(t, e),
                   () => n.W.remove(t)
           }
           , [t, e])
       }
       function h({root: t=null, rootMargin: e="0px", threshold: i=1, once: n=!1}={}) {
           let s = (0,
           r.useRef)()
             , a = (0,
           r.useRef)()
             , [o,u] = (0,
           r.useState)(!1)
             , l = (0,
           r.useCallback)(t => {
               a.current || (a.current = t)
           }
           , [])
             , h = (0,
           r.useCallback)(t => {
               let[e] = t;
               u(e.isIntersecting)
           }
           , []);
           return (0,
           r.useEffect)( () => (a.current && (s.current = new IntersectionObserver(h,{
               root: t,
               rootMargin: e,
               threshold: i
           }),
           s.current.observe(a.current)),
           () => {
               s.current && s.current.disconnect()
           }
           ), [h]),
           (0,
           r.useEffect)( () => {
               n && o && s.current.disconnect()
           }
           , [o]),
           {
               setRef: l,
               inView: o
           }
       }
       function c(t) {
           let e = a()
             , i = (0,
           r.useMemo)( () => {
               if (e)
                   try {
                       return window.matchMedia(t)
                   } catch (t) {}
               return null
           }
           , [t, e])
             , [n,s] = (0,
           r.useState)(void 0)
             , o = (0,
           r.useCallback)( ({matches: t}) => {
               s(t)
           }
           , []);
           return (0,
           r.useEffect)( () => {
               if (i)
                   return o(i),
                   i.addEventListener("change", o, {
                       passive: !0
                   }),
                   () => {
                       i.removeEventListener("change", o, {
                           passive: !0
                       })
                   }
           }
           , [i, o, e]),
           n
       }
       function d() {
           return (d = Object.assign ? Object.assign.bind() : function(t) {
               for (var e = 1; e < arguments.length; e++) {
                   var i = arguments[e];
                   for (var r in i)
                       Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
               }
               return t
           }
           ).apply(this, arguments)
       }
       function f({lazy: t=!1, debounce: e=1e3}={}) {
           let i = (0,
           r.useRef)()
             , n = (0,
           r.useRef)()
             , [a,o] = (0,
           r.useState)({})
             , u = (0,
           r.useRef)(a)
             , l = (0,
           r.useCallback)( () => {
               if (i.current) {
                   let e = function t(e, i=0) {
                       let r = i + e.offsetTop;
                       return e.offsetParent ? t(e.offsetParent, r) : r
                   }(i.current)
                     , r = function t(e, i=0) {
                       let r = i + e.offsetLeft;
                       return e.offsetParent ? t(e.offsetParent, r) : r
                   }(i.current);
                   u.current = d({}, u.current, {
                       top: e,
                       left: r
                   }),
                   t || o(u.current)
               }
           }
           , [t]);
           (0,
           r.useEffect)( () => {
               let t = (0,
               s.P)(e, l)
                 , i = new ResizeObserver(t);
               return i.observe(document.body),
               () => {
                   i.disconnect(),
                   t.cancel({
                       upcomingOnly: !0
                   })
               }
           }
           , [e, l]);
           let h = (0,
           r.useCallback)( ([e]) => {
               let {width: i, height: r} = e.contentRect;
               u.current = d({}, u.current, {
                   width: i,
                   height: r
               }),
               t || o(u.current)
           }
           , [t])
             , c = (0,
           r.useCallback)( () => u.current, []);
           return (0,
           r.useEffect)( () => () => {
               var t;
               null == (t = n.current) || t.disconnect()
           }
           , []),
           [(0,
           r.useCallback)(t => {
               var e;
               t && t !== i.current && (null == (e = n.current) || e.disconnect(),
               n.current = new ResizeObserver(h),
               n.current.observe(t),
               i.current = t)
           }
           , [l]), t ? c : a]
       }
   },
   3439: function(t, e, i) {
       "use strict";
       i.d(e, {
           Ei: function() {
               return F
           },
           LZ: function() {
               return S
           }
       });
       var r = i(6624);
       let n = () => ({
           events: {},
           emit(t, ...e) {
               let i = this.events[t] || [];
               for (let t = 0, r = i.length; t < r; t++)
                   i[t](...e)
           },
           on(t, e) {
               return this.events[t]?.push(e) || (this.events[t] = [e]),
               () => {
                   this.events[t] = this.events[t]?.filter(t => e !== t)
               }
           }
       });
       function s(t, e, i) {
           return Math.max(t, Math.min(e, i))
       }
       class a {
           advance(t) {
               var e, i;
               if (!this.isRunning)
                   return;
               let r = !1;
               if (this.lerp)
                   this.value = (1 - (i = this.lerp)) * this.value + i * this.to,
                   Math.round(this.value) === this.to && (this.value = this.to,
                   r = !0);
               else {
                   this.currentTime += t;
                   let e = s(0, this.currentTime / this.duration, 1);
                   r = e >= 1;
                   let i = r ? 1 : this.easing(e);
                   this.value = this.from + (this.to - this.from) * i
               }
               null == (e = this.onUpdate) || e.call(this, this.value, {
                   completed: r
               }),
               r && this.stop()
           }
           stop() {
               this.isRunning = !1
           }
           fromTo(t, e, {lerp: i=.1, duration: r=1, easing: n=t => t, onUpdate: s}) {
               this.from = this.value = t,
               this.to = e,
               this.lerp = i,
               this.duration = r,
               this.easing = n,
               this.currentTime = 0,
               this.isRunning = !0,
               this.onUpdate = s
           }
       }
       var o = 0;
       function u(t) {
           return "__private_" + o++ + "_" + t
       }
       function l(t, e) {
           if (!Object.prototype.hasOwnProperty.call(t, e))
               throw TypeError("attempted to use private field on non-instance");
           return t
       }
       var h = u("resizeObserver")
         , c = u("onResize")
         , d = u("onWindowResize");
       class f {
           constructor(t) {
               Object.defineProperty(this, h, {
                   writable: !0,
                   value: void 0
               }),
               Object.defineProperty(this, c, {
                   writable: !0,
                   value: ([t]) => {
                       if (t) {
                           let {width: e, height: i} = t.contentRect;
                           this.width = e,
                           this.height = i
                       }
                   }
               }),
               Object.defineProperty(this, d, {
                   writable: !0,
                   value: () => {
                       this.width = window.innerWidth,
                       this.height = window.innerHeight
                   }
               }),
               this.element = t,
               t === window ? (window.addEventListener("resize", l(this, d)[d]),
               l(this, d)[d]()) : (this.width = this.element.offsetWidth,
               this.height = this.element.offsetHeight,
               l(this, h)[h] = new ResizeObserver(l(this, c)[c]),
               l(this, h)[h].observe(this.element))
           }
           destroy() {
               window.removeEventListener("resize", this.onWindowResize),
               l(this, h)[h].disconnect()
           }
       }
       var p = u("wheelMultiplier")
         , m = u("touchMultiplier")
         , g = u("normalizeWheel")
         , v = u("touchStart")
         , x = u("emitter")
         , y = u("onTouchStart")
         , D = u("onTouchMove")
         , w = u("onWheel");
       class b {
           constructor(t, {wheelMultiplier: e=1, touchMultiplier: i=2, normalizeWheel: r=!1}) {
               Object.defineProperty(this, p, {
                   writable: !0,
                   value: void 0
               }),
               Object.defineProperty(this, m, {
                   writable: !0,
                   value: void 0
               }),
               Object.defineProperty(this, g, {
                   writable: !0,
                   value: void 0
               }),
               Object.defineProperty(this, v, {
                   writable: !0,
                   value: void 0
               }),
               Object.defineProperty(this, x, {
                   writable: !0,
                   value: void 0
               }),
               Object.defineProperty(this, y, {
                   writable: !0,
                   value: t => {
                       let {pageX: e, pageY: i} = t.targetTouches ? t.targetTouches[0] : t;
                       l(this, v)[v].x = e,
                       l(this, v)[v].y = i
                   }
               }),
               Object.defineProperty(this, D, {
                   writable: !0,
                   value: t => {
                       let {pageX: e, pageY: i} = t.targetTouches ? t.targetTouches[0] : t
                         , r = -(e - l(this, v)[v].x) * l(this, m)[m]
                         , n = -(i - l(this, v)[v].y) * l(this, m)[m];
                       l(this, v)[v].x = e,
                       l(this, v)[v].y = i,
                       l(this, x)[x].emit("scroll", {
                           type: "touch",
                           deltaX: r,
                           deltaY: n,
                           event: t
                       })
                   }
               }),
               Object.defineProperty(this, w, {
                   writable: !0,
                   value: t => {
                       let {deltaX: e, deltaY: i} = t;
                       l(this, g)[g] && (e = s(-100, e, 100),
                       i = s(-100, i, 100)),
                       e *= l(this, p)[p],
                       i *= l(this, p)[p],
                       l(this, x)[x].emit("scroll", {
                           type: "wheel",
                           deltaX: e,
                           deltaY: i,
                           event: t
                       })
                   }
               }),
               this.element = t,
               l(this, p)[p] = e,
               l(this, m)[m] = i,
               l(this, g)[g] = r,
               l(this, v)[v] = {
                   x: null,
                   y: null
               },
               l(this, x)[x] = n(),
               this.element.addEventListener("wheel", l(this, w)[w], {
                   passive: !1
               }),
               this.element.addEventListener("touchstart", l(this, y)[y], {
                   passive: !1
               }),
               this.element.addEventListener("touchmove", l(this, D)[D], {
                   passive: !1
               })
           }
           on(t, e) {
               return l(this, x)[x].on(t, e)
           }
           destroy() {
               l(this, x)[x].events = {},
               this.element.removeEventListener("wheel", l(this, w)[w], {
                   passive: !1
               }),
               this.element.removeEventListener("touchstart", l(this, y)[y], {
                   passive: !1
               }),
               this.element.removeEventListener("touchmove", l(this, D)[D], {
                   passive: !1
               })
           }
       }
       class _ {
           constructor({direction: t, gestureDirection: e, mouseMultiplier: i, smooth: r, wrapper: s=window, content: o=document.documentElement, smoothWheel: u=null == r || r, smoothTouch: l=!1, duration: h, easing: c=t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), lerp: d=h ? null : .1, infinite: p=!1, orientation: m=null != t ? t : "vertical", gestureOrientation: g=null != e ? e : "vertical", touchMultiplier: v=2, wheelMultiplier: x=null != i ? i : 1, normalizeWheel: y=!0}={}) {
               this.onVirtualScroll = ({type: t, deltaX: e, deltaY: i, event: r}) => {
                   if (r.ctrlKey || "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e || r.composedPath().find(t => null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")))
                       return;
                   if (this.isStopped || this.isLocked)
                       return void r.preventDefault();
                   if (this.isSmooth = this.options.smoothTouch && "touch" === t || this.options.smoothWheel && "wheel" === t,
                   !this.isSmooth)
                       return this.isScrolling = !1,
                       void this.animate.stop();
                   r.preventDefault();
                   let n = i;
                   "both" === this.options.gestureOrientation ? n = e + i : "horizontal" === this.options.gestureOrientation && (n = e),
                   this.scrollTo(this.targetScroll + n, {
                       programmatic: !1
                   })
               }
               ,
               this.onScroll = () => {
                   if (!this.isScrolling) {
                       let t = this.animatedScroll;
                       this.animatedScroll = this.targetScroll = this.actualScroll,
                       this.velocity = 0,
                       this.direction = Math.sign(this.animatedScroll - t),
                       this.emit()
                   }
               }
               ,
               t && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),
               e && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),
               i && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),
               r && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),
               window.lenisVersion = "1.0.0-dev.7",
               s !== document.documentElement && s !== document.body || (s = window),
               this.options = {
                   wrapper: s,
                   content: o,
                   smoothWheel: u,
                   smoothTouch: l,
                   duration: h,
                   easing: c,
                   lerp: d,
                   infinite: p,
                   gestureOrientation: g,
                   orientation: m,
                   touchMultiplier: v,
                   wheelMultiplier: x,
                   normalizeWheel: y
               },
               this.wrapper = new f(s),
               this.content = new f(o),
               this.rootElement.classList.add("lenis"),
               this.velocity = 0,
               this.isStopped = !1,
               this.isSmooth = u || l,
               this.isScrolling = !1,
               this.targetScroll = this.animatedScroll = this.actualScroll,
               this.animate = new a,
               this.emitter = n(),
               this.wrapper.element.addEventListener("scroll", this.onScroll, {
                   passive: !1
               }),
               this.virtualScroll = new b(s,{
                   touchMultiplier: v,
                   wheelMultiplier: x,
                   normalizeWheel: y
               }),
               this.virtualScroll.on("scroll", this.onVirtualScroll)
           }
           destroy() {
               this.emitter.events = {},
               this.wrapper.element.removeEventListener("scroll", this.onScroll, {
                   passive: !1
               }),
               this.virtualScroll.destroy()
           }
           on(t, e) {
               return this.emitter.on(t, e)
           }
           off(t, e) {
               var i;
               this.emitter.events[t] = null == (i = this.emitter.events[t]) ? void 0 : i.filter(t => e !== t)
           }
           setScroll(t) {
               this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
           }
           emit() {
               this.emitter.emit("scroll", this)
           }
           reset() {
               this.isLocked = !1,
               this.isScrolling = !1,
               this.velocity = 0
           }
           start() {
               this.isStopped = !1,
               this.reset()
           }
           stop() {
               this.isStopped = !0,
               this.animate.stop(),
               this.reset()
           }
           raf(t) {
               let e = t - (this.time || t);
               this.time = t,
               this.animate.advance(.001 * e)
           }
           scrollTo(t, {offset: e=0, immediate: i=!1, lock: r=!1, duration: n=this.options.duration, easing: a=this.options.easing, lerp: o=!n && this.options.lerp, onComplete: u, force: l=!1, programmatic: h=!0}={}) {
               if (!this.isStopped || l) {
                   if (["top", "left", "start"].includes(t))
                       t = 0;
                   else if (["bottom", "right", "end"].includes(t))
                       t = this.limit;
                   else {
                       var c;
                       let i;
                       if ("string" == typeof t ? i = document.querySelector(t) : null != (c = t) && c.nodeType && (i = t),
                       i) {
                           if (this.wrapper.element !== window) {
                               let t = this.wrapper.element.getBoundingClientRect();
                               e -= this.isHorizontal ? t.left : t.top
                           }
                           let r = i.getBoundingClientRect();
                           t = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
                       }
                   }
                   if ("number" == typeof t) {
                       if (t += e,
                       t = Math.round(t),
                       this.options.infinite ? h && (this.targetScroll = this.animatedScroll = this.scroll) : t = s(0, t, this.limit),
                       i)
                           return this.animatedScroll = this.targetScroll = t,
                           this.setScroll(this.scroll),
                           this.animate.stop(),
                           this.reset(),
                           this.emit(),
                           void (null == u || u());
                       h || (this.targetScroll = t),
                       this.animate.fromTo(this.animatedScroll, t, {
                           duration: n,
                           easing: a,
                           lerp: o,
                           onUpdate: (t, {completed: e}) => {
                               r && (this.isLocked = !0),
                               this.isScrolling = !0,
                               this.velocity = t - this.animatedScroll,
                               this.direction = Math.sign(this.velocity),
                               this.animatedScroll = t,
                               this.setScroll(this.scroll),
                               h && (this.targetScroll = t),
                               e && (r && (this.isLocked = !1),
                               requestAnimationFrame( () => {
                                   this.isScrolling = !1
                               }
                               ),
                               this.velocity = 0,
                               null == u || u()),
                               this.emit()
                           }
                       })
                   }
               }
           }
           get rootElement() {
               return this.wrapper.element === window ? this.content.element : this.wrapper.element
           }
           get limit() {
               return Math.round(this.isHorizontal ? this.content.width - this.wrapper.width : this.content.height - this.wrapper.height)
           }
           get isHorizontal() {
               return "horizontal" === this.options.orientation
           }
           get actualScroll() {
               return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
           }
           get scroll() {
               var t;
               let e;
               return this.options.infinite ? (e = this.animatedScroll % (t = this.limit),
               (t > 0 && e < 0 || t < 0 && e > 0) && (e += t),
               e) : this.animatedScroll
           }
           get progress() {
               return this.scroll / this.limit
           }
           get isSmooth() {
               return this.__isSmooth
           }
           set isSmooth(t) {
               this.__isSmooth !== t && (this.rootElement.classList.toggle("lenis-smooth", t),
               this.__isSmooth = t)
           }
           get isScrolling() {
               return this.__isScrolling
           }
           set isScrolling(t) {
               this.__isScrolling !== t && (this.rootElement.classList.toggle("lenis-scrolling", t),
               this.__isScrolling = t)
           }
           get isStopped() {
               return this.__isStopped
           }
           set isStopped(t) {
               this.__isStopped !== t && (this.rootElement.classList.toggle("lenis-stopped", t),
               this.__isStopped = t)
           }
       }
       var k = i(507)
         , E = i(959)
         , T = i(528);
       function C() {
           return (C = Object.assign ? Object.assign.bind() : function(t) {
               for (var e = 1; e < arguments.length; e++) {
                   var i = arguments[e];
                   for (var r in i)
                       Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
               }
               return t
           }
           ).apply(this, arguments)
       }
       let A = (0,
       T.Ue)( () => ({}));
       function S(t, e=[], i=0) {
           let {lenis: r, addCallback: n, removeCallback: s} = function() {
               let t = (0,
               E.useContext)(M)
                 , e = A();
               return null != t ? t : e
           }();
           return (0,
           E.useEffect)( () => {
               if (t && n && s && r)
                   return n(t, i),
                   t(r),
                   () => {
                       s(t)
                   }
           }
           , [r, t, n, s, i, e]),
           r
       }
       let M = (0,
       E.createContext)()
         , F = (0,
       E.forwardRef)( ({children: t, root: e=!1, options: i={}, isStopped: n=!1, className: s}, a) => {
           let o = (0,
           E.useRef)()
             , u = (0,
           E.useRef)()
             , [l,h] = (0,
           E.useState)()
             , c = (0,
           E.useRef)([])
             , d = (0,
           E.useCallback)( (t, e) => {
               c.current.push({
                   callback: t,
                   priority: e
               }),
               c.current.sort( (t, e) => t.priority - e.priority)
           }
           , [])
             , f = (0,
           E.useCallback)(t => {
               c.current = c.current.filter(e => e.callback !== t)
           }
           , []);
           (0,
           E.useImperativeHandle)(a, () => l, [l]),
           (0,
           E.useEffect)( () => {
               e || (i.wrapper = o.current,
               i.content = u.current);
               let t = new _(C({}, i));
               return h(t),
               () => {
                   t.destroy(),
                   h(void 0)
               }
           }
           , [e]),
           (0,
           r.xQ)(t => {
               null == l || l.raf(t)
           }
           ),
           (0,
           E.useEffect)( () => {
               l && (n ? l.stop() : l.start())
           }
           , [l, n]),
           (0,
           E.useEffect)( () => {
               e && l && A.setState({
                   lenis: l,
                   addCallback: d,
                   removeCallback: f
               })
           }
           , [e, l, d, f]);
           let p = (0,
           E.useCallback)(t => {
               for (let e = 0; e < c.current.length; e++)
                   c.current[e].callback(t)
           }
           , []);
           return (0,
           E.useEffect)( () => {
               if (l)
                   return l.on("scroll", p),
                   () => {
                       l.off("scroll", p)
                   }
           }
           , [l, p]),
           E.createElement(M.Provider, {
               value: {
                   lenis: l,
                   addCallback: d,
                   removeCallback: f
               }
           }, e ? t : E.createElement("div", {
               ref: o,
               className: s
           }, E.createElement("div", {
               ref: u
           }, t)))
       }
       );
       F.displayName = "ReactLenis",
       F.propTypes = {
           children: k.node,
           root: k.bool,
           options: k.object,
           isStopped: k.bool,
           className: k.string
       }
   },
   4439: function(t, e, i) {
       "use strict";
       i.d(e, {
           W: function() {
               return r
           }
       });
       let r = new class {
           constructor() {
               this.raf = t => {
                   requestAnimationFrame(this.raf);
                   let e = t - this.now;
                   this.now = t;
                   for (let i = 0; i < this.callbacks.length; i++)
                       this.callbacks[i].callback(t, e)
               }
               ,
               "undefined" != typeof window && (this.callbacks = [],
               this.now = performance.now(),
               requestAnimationFrame(this.raf))
           }
           add(t, e=0) {
               return this.callbacks.push({
                   callback: t,
                   priority: e
               }),
               this.callbacks.sort( (t, e) => t.priority - e.priority),
               () => this.remove(t)
           }
           remove(t) {
               this.callbacks = this.callbacks.filter( ({callback: e}) => t !== e)
           }
       }
   },
   2909: function(t, e, i) {
       "use strict";
       function r(t, e, i) {
           var r, n = i || {}, s = n.noTrailing, a = void 0 !== s && s, o = n.noLeading, u = void 0 !== o && o, l = n.debounceMode, h = void 0 === l ? void 0 : l, c = !1, d = 0;
           function f() {
               r && clearTimeout(r)
           }
           function p() {
               for (var i = arguments.length, n = Array(i), s = 0; s < i; s++)
                   n[s] = arguments[s];
               var o = this
                 , l = Date.now() - d;
               function p() {
                   d = Date.now(),
                   e.apply(o, n)
               }
               function m() {
                   r = void 0
               }
               !c && (u || !h || r || p(),
               f(),
               void 0 === h && l > t ? u ? (d = Date.now(),
               a || (r = setTimeout(h ? m : p, t))) : p() : !0 !== a && (r = setTimeout(h ? m : p, void 0 === h ? t - l : t)))
           }
           return p.cancel = function(t) {
               var e = (t || {}).upcomingOnly;
               f(),
               c = !(void 0 !== e && e)
           }
           ,
           p
       }
       function n(t, e, i) {
           var n = (i || {}).atBegin;
           return r(t, e, {
               debounceMode: !1 !== (void 0 !== n && n)
           })
       }
       i.d(e, {
           D: function() {
               return n
           },
           P: function() {
               return r
           }
       })
   },
   528: function(t, e, i) {
       "use strict";
       i.d(e, {
           Ue: function() {
               return l
           }
       });
       let r = t => {
           let e;
           let i = new Set
             , r = (t, r) => {
               let n = "function" == typeof t ? t(e) : t;
               if (!Object.is(n, e)) {
                   let t = e;
                   e = (null != r ? r : "object" != typeof n) ? n : Object.assign({}, e, n),
                   i.forEach(i => i(e, t))
               }
           }
             , n = () => e
             , s = t => (i.add(t),
           () => i.delete(t))
             , a = () => {
               console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."),
               i.clear()
           }
             , o = {
               setState: r,
               getState: n,
               subscribe: s,
               destroy: a
           };
           return e = t(r, n, o),
           o
       }
         , n = t => t ? r(t) : r;
       var s = i(959)
         , a = i(7231);
       let {useSyncExternalStoreWithSelector: o} = a
         , u = t => {
           "function" != typeof t && console.warn('[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.');
           let e = "function" == typeof t ? n(t) : t
             , i = (t, i) => (function(t, e=t.getState, i) {
               let r = o(t.subscribe, t.getState, t.getServerState || t.getState, e, i);
               return (0,
               s.useDebugValue)(r),
               r
           }
           )(e, t, i);
           return Object.assign(i, e),
           i
       }
         , l = t => t ? u(t) : u
   },
   3001: function(t, e, i) {
       "use strict";
       function r(t, e) {
           if (Object.is(t, e))
               return !0;
           if ("object" != typeof t || null === t || "object" != typeof e || null === e)
               return !1;
           if (t instanceof Map && e instanceof Map) {
               if (t.size !== e.size)
                   return !1;
               for (let[i,r] of t)
                   if (!Object.is(r, e.get(i)))
                       return !1;
               return !0
           }
           if (t instanceof Set && e instanceof Set) {
               if (t.size !== e.size)
                   return !1;
               for (let i of t)
                   if (!e.has(i))
                       return !1;
               return !0
           }
           let i = Object.keys(t);
           if (i.length !== Object.keys(e).length)
               return !1;
           for (let r = 0; r < i.length; r++)
               if (!Object.prototype.hasOwnProperty.call(e, i[r]) || !Object.is(t[i[r]], e[i[r]]))
                   return !1;
           return !0
       }
       i.d(e, {
           X: function() {
               return r
           }
       })
   }
}, function(t) {
   var e = function(e) {
       return t(t.s = e)
   };
   t.O(0, [774, 179], function() {
       return e(14),
       e(6084)
   }),
   _N_E = t.O()
}
]);
