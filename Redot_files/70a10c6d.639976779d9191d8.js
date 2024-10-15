(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[109], {
    6443: function(module, exports, __webpack_require__) {
        "undefined" != typeof navigator && function(t, e) {
            module.exports = e()
        }(0, function() {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg"
              , locationHref = ""
              , _useWebWorker = !1
              , initialDefaultFrame = -999999
              , setWebWorker = function(t) {
                _useWebWorker = !!t
            }
              , getWebWorker = function() {
                return _useWebWorker
            }
              , setLocationHref = function(t) {
                locationHref = t
            }
              , getLocationHref = function() {
                return locationHref
            };
            function createTag(t) {
                return document.createElement(t)
            }
            function extendPrototype(t, e) {
                var i, s, r = t.length;
                for (i = 0; i < r; i += 1)
                    for (var a in s = t[i].prototype)
                        Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
            }
            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }
            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t,
                e
            }
            var audioControllerFactory = function() {
                function t(t) {
                    this.audios = [],
                    this.audioFactory = t,
                    this._volume = 1,
                    this._isMuted = !1
                }
                return t.prototype = {
                    addAudio: function(t) {
                        this.audios.push(t)
                    },
                    pause: function() {
                        var t, e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                            this.audios[t].pause()
                    },
                    resume: function() {
                        var t, e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                            this.audios[t].resume()
                    },
                    setRate: function(t) {
                        var e, i = this.audios.length;
                        for (e = 0; e < i; e += 1)
                            this.audios[e].setRate(t)
                    },
                    createAudio: function(t) {
                        return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                            src: [t]
                        }) : {
                            isPlaying: !1,
                            play: function() {
                                this.isPlaying = !0
                            },
                            seek: function() {
                                this.isPlaying = !1
                            },
                            playing: function() {},
                            rate: function() {},
                            setVolume: function() {}
                        }
                    },
                    setAudioFactory: function(t) {
                        this.audioFactory = t
                    },
                    setVolume: function(t) {
                        this._volume = t,
                        this._updateVolume()
                    },
                    mute: function() {
                        this._isMuted = !0,
                        this._updateVolume()
                    },
                    unmute: function() {
                        this._isMuted = !1,
                        this._updateVolume()
                    },
                    getVolume: function() {
                        return this._volume
                    },
                    _updateVolume: function() {
                        var t, e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                            this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                    }
                },
                function() {
                    return new t
                }
            }()
              , createTypedArray = function() {
                function t(t, e) {
                    var i, s = 0, r = [];
                    switch (t) {
                    case "int16":
                    case "uint8c":
                        i = 1;
                        break;
                    default:
                        i = 1.1
                    }
                    for (s = 0; s < e; s += 1)
                        r.push(i);
                    return r
                }
                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                    return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                }
                : t
            }();
            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                })
            }
            function _typeof$6(t) {
                return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var subframeEnabled = !0
              , expressionsPlugin = null
              , expressionsInterfaces = null
              , idPrefix$1 = ""
              , isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
              , _shouldRoundValues = !1
              , bmPow = Math.pow
              , bmSqrt = Math.sqrt
              , bmFloor = Math.floor
              , bmMax = Math.max
              , bmMin = Math.min
              , BMMath = {};
            function ProjectInterface$1() {
                return {}
            }
            !function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
                for (t = 0; t < i; t += 1)
                    BMMath[e[t]] = Math[e[t]]
            }(),
            BMMath.random = Math.random,
            BMMath.abs = function(t) {
                if ("object" === _typeof$6(t) && t.length) {
                    var e, i = createSizedArray(t.length), s = t.length;
                    for (e = 0; e < s; e += 1)
                        i[e] = Math.abs(t[e]);
                    return i
                }
                return Math.abs(t)
            }
            ;
            var defaultCurveSegments = 150
              , degToRads = Math.PI / 180
              , roundCorner = .5519;
            function roundValues(t) {
                _shouldRoundValues = !!t
            }
            function bmRnd(t) {
                return _shouldRoundValues ? Math.round(t) : t
            }
            function styleDiv(t) {
                t.style.position = "absolute",
                t.style.top = 0,
                t.style.left = 0,
                t.style.display = "block",
                t.style.transformOrigin = "0 0",
                t.style.webkitTransformOrigin = "0 0",
                t.style.backfaceVisibility = "visible",
                t.style.webkitBackfaceVisibility = "visible",
                t.style.transformStyle = "preserve-3d",
                t.style.webkitTransformStyle = "preserve-3d",
                t.style.mozTransformStyle = "preserve-3d"
            }
            function BMEnterFrameEvent(t, e, i, s) {
                this.type = t,
                this.currentTime = e,
                this.totalTime = i,
                this.direction = s < 0 ? -1 : 1
            }
            function BMCompleteEvent(t, e) {
                this.type = t,
                this.direction = e < 0 ? -1 : 1
            }
            function BMCompleteLoopEvent(t, e, i, s) {
                this.type = t,
                this.currentLoop = i,
                this.totalLoops = e,
                this.direction = s < 0 ? -1 : 1
            }
            function BMSegmentStartEvent(t, e, i) {
                this.type = t,
                this.firstFrame = e,
                this.totalFrames = i
            }
            function BMDestroyEvent(t, e) {
                this.type = t,
                this.target = e
            }
            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError",
                this.nativeError = t,
                this.currentTime = e
            }
            function BMConfigErrorEvent(t) {
                this.type = "configError",
                this.nativeError = t
            }
            function BMAnimationConfigErrorEvent(t, e) {
                this.type = t,
                this.nativeError = e
            }
            var _count, createElementID = (_count = 0,
            function() {
                return idPrefix$1 + "__lottie_element_" + (_count += 1)
            }
            );
            function HSVtoRGB(t, e, i) {
                var s, r, a, n, o, h, l, p;
                switch (h = i * (1 - e),
                l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e),
                p = i * (1 - (1 - o) * e),
                n % 6) {
                case 0:
                    s = i,
                    r = p,
                    a = h;
                    break;
                case 1:
                    s = l,
                    r = i,
                    a = h;
                    break;
                case 2:
                    s = h,
                    r = i,
                    a = p;
                    break;
                case 3:
                    s = h,
                    r = l,
                    a = i;
                    break;
                case 4:
                    s = p,
                    r = h,
                    a = i;
                    break;
                case 5:
                    s = i,
                    r = h,
                    a = l
                }
                return [s, r, a]
            }
            function RGBtoHSV(t, e, i) {
                var s, r = Math.max(t, e, i), a = Math.min(t, e, i), n = r - a, o = 0 === r ? 0 : n / r, h = r / 255;
                switch (r) {
                case a:
                    s = 0;
                    break;
                case t:
                    s = (e - i + n * (e < i ? 6 : 0)) / (6 * n);
                    break;
                case e:
                    s = (i - t + 2 * n) / (6 * n);
                    break;
                case i:
                    s = (t - e + 4 * n) / (6 * n)
                }
                return [s, o, h]
            }
            function addSaturationToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[1] += e,
                i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0),
                HSVtoRGB(i[0], i[1], i[2])
            }
            function addBrightnessToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[2] += e,
                i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0),
                HSVtoRGB(i[0], i[1], i[2])
            }
            function addHueToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[0] += e / 360,
                i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1),
                HSVtoRGB(i[0], i[1], i[2])
            }
            var rgbToHex = function() {
                var t, e, i = [];
                for (t = 0; t < 256; t += 1)
                    e = t.toString(16),
                    i[t] = 1 === e.length ? "0" + e : e;
                return function(t, e, s) {
                    return t < 0 && (t = 0),
                    e < 0 && (e = 0),
                    s < 0 && (s = 0),
                    "#" + i[t] + i[e] + i[s]
                }
            }()
              , setSubframeEnabled = function(t) {
                subframeEnabled = !!t
            }
              , getSubframeEnabled = function() {
                return subframeEnabled
            }
              , setExpressionsPlugin = function(t) {
                expressionsPlugin = t
            }
              , getExpressionsPlugin = function() {
                return expressionsPlugin
            }
              , setExpressionInterfaces = function(t) {
                expressionsInterfaces = t
            }
              , getExpressionInterfaces = function() {
                return expressionsInterfaces
            }
              , setDefaultCurveSegments = function(t) {
                defaultCurveSegments = t
            }
              , getDefaultCurveSegments = function() {
                return defaultCurveSegments
            }
              , setIdPrefix = function(t) {
                idPrefix$1 = t
            }
              , getIdPrefix = function() {
                return idPrefix$1
            };
            function createNS(t) {
                return document.createElementNS(svgNS, t)
            }
            function _typeof$5(t) {
                return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var dataManager = function() {
                var t, e, i = 1, s = [], r = {
                    onmessage: function() {},
                    postMessage: function(e) {
                        t({
                            data: e
                        })
                    }
                }, a = {
                    postMessage: function(t) {
                        r.onmessage({
                            data: t
                        })
                    }
                };
                function n() {
                    e || ((e = function(e) {
                        if (window.Worker && window.Blob && getWebWorker()) {
                            var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()],{
                                type: "text/javascript"
                            })
                              , s = URL.createObjectURL(i);
                            return new Worker(s)
                        }
                        return t = e,
                        r
                    }(function(t) {
                        if (a.dataManager || (a.dataManager = function() {
                            function t(r, a) {
                                var n, o, h, l, p, u, c = r.length;
                                for (o = 0; o < c; o += 1)
                                    if ("ks"in (n = r[o]) && !n.completed) {
                                        if (n.completed = !0,
                                        n.hasMask) {
                                            var m = n.masksProperties;
                                            for (l = m.length,
                                            h = 0; h < l; h += 1)
                                                if (m[h].pt.k.i)
                                                    s(m[h].pt.k);
                                                else
                                                    for (u = m[h].pt.k.length,
                                                    p = 0; p < u; p += 1)
                                                        m[h].pt.k[p].s && s(m[h].pt.k[p].s[0]),
                                                        m[h].pt.k[p].e && s(m[h].pt.k[p].e[0])
                                        }
                                        0 === n.ty ? (n.layers = e(n.refId, a),
                                        t(n.layers, a)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && f(n)
                                    }
                            }
                            function e(t, e) {
                                var i = function(t, e) {
                                    for (var i = 0, s = e.length; i < s; ) {
                                        if (e[i].id === t)
                                            return e[i];
                                        i += 1
                                    }
                                    return null
                                }(t, e);
                                return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0,
                                i.layers) : null
                            }
                            function i(t) {
                                var e, r, a;
                                for (e = t.length - 1; e >= 0; e -= 1)
                                    if ("sh" === t[e].ty) {
                                        if (t[e].ks.k.i)
                                            s(t[e].ks.k);
                                        else
                                            for (a = t[e].ks.k.length,
                                            r = 0; r < a; r += 1)
                                                t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]),
                                                t[e].ks.k[r].e && s(t[e].ks.k[r].e[0])
                                    } else
                                        "gr" === t[e].ty && i(t[e].it)
                            }
                            function s(t) {
                                var e, i = t.i.length;
                                for (e = 0; e < i; e += 1)
                                    t.i[e][0] += t.v[e][0],
                                    t.i[e][1] += t.v[e][1],
                                    t.o[e][0] += t.v[e][0],
                                    t.o[e][1] += t.v[e][1]
                            }
                            function r(t, e) {
                                var i = e ? e.split(".") : [100, 100, 100];
                                return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                            }
                            var a, n = function() {
                                var t = [4, 4, 14];
                                function e(t) {
                                    var e, i, s, r = t.length;
                                    for (e = 0; e < r; e += 1)
                                        5 === t[e].ty && (s = void 0,
                                        s = (i = t[e]).t.d,
                                        i.t.d = {
                                            k: [{
                                                s: s,
                                                t: 0
                                            }]
                                        })
                                }
                                return function(i) {
                                    if (r(t, i.v) && (e(i.layers),
                                    i.assets)) {
                                        var s, a = i.assets.length;
                                        for (s = 0; s < a; s += 1)
                                            i.assets[s].layers && e(i.assets[s].layers)
                                    }
                                }
                            }(), o = (a = [4, 7, 99],
                            function(t) {
                                if (t.chars && !r(a, t.v)) {
                                    var e, s = t.chars.length;
                                    for (e = 0; e < s; e += 1) {
                                        var n = t.chars[e];
                                        n.data && n.data.shapes && (i(n.data.shapes),
                                        n.data.ip = 0,
                                        n.data.op = 99999,
                                        n.data.st = 0,
                                        n.data.sr = 1,
                                        n.data.ks = {
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {
                                                k: [100, 100],
                                                a: 0
                                            },
                                            a: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            }
                                        },
                                        t.chars[e].t || (n.data.shapes.push({
                                            ty: "no"
                                        }),
                                        n.data.shapes[0].it.push({
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {
                                                k: [100, 100],
                                                a: 0
                                            },
                                            a: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            },
                                            sk: {
                                                k: 0,
                                                a: 0
                                            },
                                            sa: {
                                                k: 0,
                                                a: 0
                                            },
                                            ty: "tr"
                                        })))
                                    }
                                }
                            }
                            ), h = function() {
                                var t = [5, 7, 15];
                                function e(t) {
                                    var e, i, s = t.length;
                                    for (e = 0; e < s; e += 1)
                                        5 === t[e].ty && (i = void 0,
                                        "number" == typeof (i = t[e].t.p).a && (i.a = {
                                            a: 0,
                                            k: i.a
                                        }),
                                        "number" == typeof i.p && (i.p = {
                                            a: 0,
                                            k: i.p
                                        }),
                                        "number" == typeof i.r && (i.r = {
                                            a: 0,
                                            k: i.r
                                        }))
                                }
                                return function(i) {
                                    if (r(t, i.v) && (e(i.layers),
                                    i.assets)) {
                                        var s, a = i.assets.length;
                                        for (s = 0; s < a; s += 1)
                                            i.assets[s].layers && e(i.assets[s].layers)
                                    }
                                }
                            }(), l = function() {
                                var t = [4, 1, 9];
                                function e(t) {
                                    var i, s, r, a = t.length;
                                    for (i = 0; i < a; i += 1)
                                        if ("gr" === t[i].ty)
                                            e(t[i].it);
                                        else if ("fl" === t[i].ty || "st" === t[i].ty) {
                                            if (t[i].c.k && t[i].c.k[0].i)
                                                for (r = t[i].c.k.length,
                                                s = 0; s < r; s += 1)
                                                    t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255,
                                                    t[i].c.k[s].s[1] /= 255,
                                                    t[i].c.k[s].s[2] /= 255,
                                                    t[i].c.k[s].s[3] /= 255),
                                                    t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255,
                                                    t[i].c.k[s].e[1] /= 255,
                                                    t[i].c.k[s].e[2] /= 255,
                                                    t[i].c.k[s].e[3] /= 255);
                                            else
                                                t[i].c.k[0] /= 255,
                                                t[i].c.k[1] /= 255,
                                                t[i].c.k[2] /= 255,
                                                t[i].c.k[3] /= 255
                                        }
                                }
                                function i(t) {
                                    var i, s = t.length;
                                    for (i = 0; i < s; i += 1)
                                        4 === t[i].ty && e(t[i].shapes)
                                }
                                return function(e) {
                                    if (r(t, e.v) && (i(e.layers),
                                    e.assets)) {
                                        var s, a = e.assets.length;
                                        for (s = 0; s < a; s += 1)
                                            e.assets[s].layers && i(e.assets[s].layers)
                                    }
                                }
                            }(), p = function() {
                                var t = [4, 4, 18];
                                function e(t) {
                                    var i, s, r;
                                    for (i = t.length - 1; i >= 0; i -= 1)
                                        if ("sh" === t[i].ty) {
                                            if (t[i].ks.k.i)
                                                t[i].ks.k.c = t[i].closed;
                                            else
                                                for (r = t[i].ks.k.length,
                                                s = 0; s < r; s += 1)
                                                    t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed),
                                                    t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed)
                                        } else
                                            "gr" === t[i].ty && e(t[i].it)
                                }
                                function i(t) {
                                    var i, s, r, a, n, o, h = t.length;
                                    for (s = 0; s < h; s += 1) {
                                        if ((i = t[s]).hasMask) {
                                            var l = i.masksProperties;
                                            for (a = l.length,
                                            r = 0; r < a; r += 1)
                                                if (l[r].pt.k.i)
                                                    l[r].pt.k.c = l[r].cl;
                                                else
                                                    for (o = l[r].pt.k.length,
                                                    n = 0; n < o; n += 1)
                                                        l[r].pt.k[n].s && (l[r].pt.k[n].s[0].c = l[r].cl),
                                                        l[r].pt.k[n].e && (l[r].pt.k[n].e[0].c = l[r].cl)
                                        }
                                        4 === i.ty && e(i.shapes)
                                    }
                                }
                                return function(e) {
                                    if (r(t, e.v) && (i(e.layers),
                                    e.assets)) {
                                        var s, a = e.assets.length;
                                        for (s = 0; s < a; s += 1)
                                            e.assets[s].layers && i(e.assets[s].layers)
                                    }
                                }
                            }();
                            function f(t) {
                                0 === t.t.a.length && t.t.p
                            }
                            var u = {
                                completeData: function(i) {
                                    i.__complete || (l(i),
                                    n(i),
                                    o(i),
                                    h(i),
                                    p(i),
                                    t(i.layers, i.assets),
                                    function(i, s) {
                                        if (i) {
                                            var r = 0
                                              , a = i.length;
                                            for (r = 0; r < a; r += 1)
                                                1 === i[r].t && (i[r].data.layers = e(i[r].data.refId, s),
                                                t(i[r].data.layers, s))
                                        }
                                    }(i.chars, i.assets),
                                    i.__complete = !0)
                                }
                            };
                            return u.checkColors = l,
                            u.checkChars = o,
                            u.checkPathProperties = h,
                            u.checkShapes = p,
                            u.completeLayers = t,
                            u
                        }()),
                        a.assetLoader || (a.assetLoader = function() {
                            function t(t) {
                                var e = t.getResponseHeader("content-type");
                                return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                            }
                            return {
                                load: function(e, i, s, r) {
                                    var a, n = new XMLHttpRequest;
                                    try {
                                        n.responseType = "json"
                                    } catch (t) {}
                                    n.onreadystatechange = function() {
                                        if (4 === n.readyState) {
                                            if (200 === n.status)
                                                s(a = t(n));
                                            else
                                                try {
                                                    a = t(n),
                                                    s(a)
                                                } catch (t) {
                                                    r && r(t)
                                                }
                                        }
                                    }
                                    ;
                                    try {
                                        n.open("GET", e, !0)
                                    } catch (t) {
                                        n.open("GET", i + "/" + e, !0)
                                    }
                                    n.send()
                                }
                            }
                        }()),
                        "loadAnimation" === t.data.type)
                            a.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                                a.dataManager.completeData(e),
                                a.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success"
                                })
                            }, function() {
                                a.postMessage({
                                    id: t.data.id,
                                    status: "error"
                                })
                            });
                        else if ("complete" === t.data.type) {
                            var e = t.data.animation;
                            a.dataManager.completeData(e),
                            a.postMessage({
                                id: t.data.id,
                                payload: e,
                                status: "success"
                            })
                        } else
                            "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, function(e) {
                                a.postMessage({
                                    id: t.data.id,
                                    payload: e,
                                    status: "success"
                                })
                            }, function() {
                                a.postMessage({
                                    id: t.data.id,
                                    status: "error"
                                })
                            })
                    })).onmessage = function(t) {
                        var e = t.data
                          , i = e.id
                          , r = s[i];
                        s[i] = null,
                        "success" === e.status ? r.onComplete(e.payload) : r.onError && r.onError()
                    }
                    )
                }
                function o(t, e) {
                    var r = "processId_" + (i += 1);
                    return s[r] = {
                        onComplete: t,
                        onError: e
                    },
                    r
                }
                return {
                    loadAnimation: function(t, i, s) {
                        n();
                        var r = o(i, s);
                        e.postMessage({
                            type: "loadAnimation",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: r
                        })
                    },
                    loadData: function(t, i, s) {
                        n();
                        var r = o(i, s);
                        e.postMessage({
                            type: "loadData",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: r
                        })
                    },
                    completeAnimation: function(t, i, s) {
                        n();
                        var r = o(i, s);
                        e.postMessage({
                            type: "complete",
                            animation: t,
                            id: r
                        })
                    }
                }
            }()
              , ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1,
                    t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)",
                    e.fillRect(0, 0, 1, 1),
                    t
                }();
                function e() {
                    this.loadedAssets += 1,
                    this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }
                function i() {
                    this.loadedFootagesCount += 1,
                    this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }
                function s(t, e, i) {
                    var s = "";
                    if (t.e)
                        s = t.p;
                    else if (e) {
                        var r = t.p;
                        -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                        s = e + r
                    } else
                        s = i + (t.u ? t.u : "") + t.p;
                    return s
                }
                function r(t) {
                    var e = 0
                      , i = setInterval((function() {
                        (t.getBBox().width || e > 500) && (this._imageLoaded(),
                        clearInterval(i)),
                        e += 1
                    }
                    ).bind(this), 50)
                }
                function a(t) {
                    var e = {
                        assetData: t
                    }
                      , i = s(t, this.assetsPath, this.path);
                    return dataManager.loadData(i, (function(t) {
                        e.img = t,
                        this._footageLoaded()
                    }
                    ).bind(this), (function() {
                        e.img = {},
                        this._footageLoaded()
                    }
                    ).bind(this)),
                    e
                }
                function n() {
                    this._imageLoaded = e.bind(this),
                    this._footageLoaded = i.bind(this),
                    this.testImageLoaded = r.bind(this),
                    this.createFootageData = a.bind(this),
                    this.assetsPath = "",
                    this.path = "",
                    this.totalImages = 0,
                    this.totalFootages = 0,
                    this.loadedAssets = 0,
                    this.loadedFootagesCount = 0,
                    this.imagesLoadedCb = null,
                    this.images = []
                }
                return n.prototype = {
                    loadAssets: function(t, e) {
                        this.imagesLoadedCb = e;
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1)
                            t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1,
                            this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1,
                            this.images.push(this._createImageData(t[i]))))
                    },
                    setAssetsPath: function(t) {
                        this.assetsPath = t || ""
                    },
                    setPath: function(t) {
                        this.path = t || ""
                    },
                    loadedImages: function() {
                        return this.totalImages === this.loadedAssets
                    },
                    loadedFootages: function() {
                        return this.totalFootages === this.loadedFootagesCount
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null,
                        this.images.length = 0
                    },
                    getAsset: function(t) {
                        for (var e = 0, i = this.images.length; e < i; ) {
                            if (this.images[e].assetData === t)
                                return this.images[e].img;
                            e += 1
                        }
                        return null
                    },
                    createImgData: function(e) {
                        var i = s(e, this.assetsPath, this.path)
                          , r = createTag("img");
                        r.crossOrigin = "anonymous",
                        r.addEventListener("load", this._imageLoaded, !1),
                        r.addEventListener("error", (function() {
                            a.img = t,
                            this._imageLoaded()
                        }
                        ).bind(this), !1),
                        r.src = i;
                        var a = {
                            img: r,
                            assetData: e
                        };
                        return a
                    },
                    createImageData: function(e) {
                        var i = s(e, this.assetsPath, this.path)
                          , r = createNS("image");
                        isSafari ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1),
                        r.addEventListener("error", (function() {
                            a.img = t,
                            this._imageLoaded()
                        }
                        ).bind(this), !1),
                        r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i),
                        this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                        var a = {
                            img: r,
                            assetData: e
                        };
                        return a
                    },
                    imageLoaded: e,
                    footageLoaded: i,
                    setCacheType: function(t, e) {
                        "svg" === t ? (this._elementHelper = e,
                        this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                    }
                },
                n
            }();
            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t], s = 0; s < i.length; s += 1)
                            i[s](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []),
                    this._cbs[t].push(e),
                    (function() {
                        this.removeEventListener(t, e)
                    }
                    ).bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var i = 0, s = this._cbs[t].length; i < s; )
                                this._cbs[t][i] === e && (this._cbs[t].splice(i, 1),
                                i -= 1,
                                s -= 1),
                                i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else
                        this._cbs[t] = null
                }
            };
            var markerParser = function() {
                function t(t) {
                    for (var e, i = t.split("\r\n"), s = {}, r = 0, a = 0; a < i.length; a += 1)
                        2 === (e = i[a].split(":")).length && (s[e[0]] = e[1].trim(),
                        r += 1);
                    if (0 === r)
                        throw Error();
                    return s
                }
                return function(e) {
                    for (var i = [], s = 0; s < e.length; s += 1) {
                        var r = e[s]
                          , a = {
                            time: r.tm,
                            duration: r.dr
                        };
                        try {
                            a.payload = JSON.parse(e[s].cm)
                        } catch (i) {
                            try {
                                a.payload = t(e[s].cm)
                            } catch (t) {
                                a.payload = {
                                    name: e[s].cm
                                }
                            }
                        }
                        i.push(a)
                    }
                    return i
                }
            }()
              , ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t)
                }
                return function() {
                    function e(t) {
                        for (var e = 0, i = this.compositions.length; e < i; ) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t)
                                return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame),
                                this.compositions[e].compInterface;
                            e += 1
                        }
                        return null
                    }
                    return e.compositions = [],
                    e.currentFrame = 0,
                    e.registerComposition = t,
                    e
                }
            }()
              , renderers = {}
              , registerRenderer = function(t, e) {
                renderers[t] = e
            };
            function getRenderer(t) {
                return renderers[t]
            }
            function getRegisteredRenderer() {
                if (renderers.canvas)
                    return "canvas";
                for (var t in renderers)
                    if (renderers[t])
                        return t;
                return ""
            }
            function _typeof$4(t) {
                return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var AnimationItem = function() {
                this._cbs = [],
                this.name = "",
                this.path = "",
                this.isLoaded = !1,
                this.currentFrame = 0,
                this.currentRawFrame = 0,
                this.firstFrame = 0,
                this.totalFrames = 0,
                this.frameRate = 0,
                this.frameMult = 0,
                this.playSpeed = 1,
                this.playDirection = 1,
                this.playCount = 0,
                this.animationData = {},
                this.assets = [],
                this.isPaused = !0,
                this.autoplay = !1,
                this.loop = !0,
                this.renderer = null,
                this.animationID = createElementID(),
                this.assetsPath = "",
                this.timeCompleted = 0,
                this.segmentPos = 0,
                this.isSubframeEnabled = getSubframeEnabled(),
                this.segments = [],
                this._idle = !0,
                this._completedLoop = !1,
                this.projectInterface = ProjectInterface(),
                this.imagePreloader = new ImagePreloader,
                this.audioController = audioControllerFactory(),
                this.markers = [],
                this.configAnimation = this.configAnimation.bind(this),
                this.onSetupError = this.onSetupError.bind(this),
                this.onSegmentComplete = this.onSegmentComplete.bind(this),
                this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame",0,0,0)
            };
            extendPrototype([BaseEvent], AnimationItem),
            AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                var i = getRenderer(e);
                this.renderer = new i(this,t.rendererSettings),
                this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
                this.renderer.setProjectInterface(this.projectInterface),
                this.animType = e,
                "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
                this.autoplay = !("autoplay"in t) || t.autoplay,
                this.name = t.name ? t.name : "",
                this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments,
                this.assetsPath = t.assetsPath,
                this.initialSegment = t.initialSegment,
                t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
                t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
                this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
                this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
                dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
            }
            ,
            AnimationItem.prototype.onSetupError = function() {
                this.trigger("data_failed")
            }
            ,
            AnimationItem.prototype.setupAnimation = function(t) {
                dataManager.completeAnimation(t, this.configAnimation)
            }
            ,
            AnimationItem.prototype.setData = function(t, e) {
                e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                var i = {
                    wrapper: t,
                    animationData: e
                }
                  , s = t.attributes;
                i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "",
                i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                "false" === r ? i.loop = !1 : "true" === r ? i.loop = !0 : "" !== r && (i.loop = parseInt(r, 10));
                var a = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== a,
                i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "",
                "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1),
                i.path ? this.setParams(i) : this.trigger("destroy")
            }
            ,
            AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op,
                this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, i, s = this.animationData.layers, r = s.length, a = t.layers, n = a.length;
                for (i = 0; i < n; i += 1)
                    for (e = 0; e < r; ) {
                        if (s[e].id === a[i].id) {
                            s[e] = a[i];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
                t.assets)
                    for (r = t.assets.length,
                    e = 0; e < r; e += 1)
                        this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1,
                dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
            }
            ,
            AnimationItem.prototype.onSegmentComplete = function(t) {
                this.animationData = t;
                var e = getExpressionsPlugin();
                e && e.initExpressions(this),
                this.loadNextSegment()
            }
            ,
            AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments)
                    return this.trigger("data_ready"),
                    void (this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1,
                dataManager.loadData(i, this.includeLayers.bind(this), (function() {
                    this.trigger("data_failed")
                }
                ).bind(this))
            }
            ,
            AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames),
                this.loadNextSegment()
            }
            ,
            AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"),
                this.checkLoaded()
            }
            ,
            AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }
            ,
            AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer)
                    try {
                        this.animationData = t,
                        this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                        this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                        this.firstFrame = Math.round(this.animationData.ip)),
                        this.renderer.configAnimation(t),
                        t.assets || (t.assets = []),
                        this.assets = this.animationData.assets,
                        this.frameRate = this.animationData.fr,
                        this.frameMult = this.animationData.fr / 1e3,
                        this.renderer.searchExtraCompositions(t.assets),
                        this.markers = markerParser(t.markers || []),
                        this.trigger("config_ready"),
                        this.preloadImages(),
                        this.loadSegments(),
                        this.updaFrameModifier(),
                        this.waitForFontsLoaded(),
                        this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
            }
            ,
            AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }
            ,
            AnimationItem.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var t = getExpressionsPlugin();
                    t && t.initExpressions(this),
                    this.renderer.initItems(),
                    setTimeout((function() {
                        this.trigger("DOMLoaded")
                    }
                    ).bind(this), 0),
                    this.gotoFrame(),
                    this.autoplay && this.play()
                }
            }
            ,
            AnimationItem.prototype.resize = function(t, e) {
                var i = "number" == typeof t ? t : void 0
                  , s = "number" == typeof e ? e : void 0;
                this.renderer.updateContainerSize(i, s)
            }
            ,
            AnimationItem.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t
            }
            ,
            AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
                this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame(),
                this.trigger("drawnFrame")
            }
            ,
            AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded && this.renderer)
                    try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
            }
            ,
            AnimationItem.prototype.play = function(t) {
                t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1,
                this.trigger("_pause"),
                this.audioController.resume(),
                this._idle && (this._idle = !1,
                this.trigger("_active")))
            }
            ,
            AnimationItem.prototype.pause = function(t) {
                t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0,
                this.trigger("_play"),
                this._idle = !0,
                this.trigger("_idle"),
                this.audioController.pause())
            }
            ,
            AnimationItem.prototype.togglePause = function(t) {
                t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
            }
            ,
            AnimationItem.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(),
                this.playCount = 0,
                this._completedLoop = !1,
                this.setCurrentRawFrameValue(0))
            }
            ,
            AnimationItem.prototype.getMarkerData = function(t) {
                for (var e, i = 0; i < this.markers.length; i += 1)
                    if ((e = this.markers[i]).payload && e.payload.name === t)
                        return e;
                return null
            }
            ,
            AnimationItem.prototype.goToAndStop = function(t, e, i) {
                if (!i || this.name === i) {
                    if (isNaN(Number(t))) {
                        var s = this.getMarkerData(t);
                        s && this.goToAndStop(s.time, !0)
                    } else
                        e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause()
                }
            }
            ,
            AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                if (!i || this.name === i) {
                    var s = Number(t);
                    if (isNaN(s)) {
                        var r = this.getMarkerData(t);
                        r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
                    } else
                        this.goToAndStop(s, e, i);
                    this.play()
                }
            }
            ,
            AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier
                      , i = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1,
                    this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
                    this._completedLoop = !0,
                    this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0,
                    e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0,
                    e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
                    this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
                    i && (this.setCurrentRawFrameValue(e),
                    this.pause(),
                    this.trigger("complete"))
                }
            }
            ,
            AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0,
                t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                this.totalFrames = t[0] - t[1],
                this.timeCompleted = this.totalFrames,
                this.firstFrame = t[1],
                this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                this.totalFrames = t[1] - t[0],
                this.timeCompleted = this.totalFrames,
                this.firstFrame = t[0],
                this.setCurrentRawFrameValue(.001 + e)),
                this.trigger("segmentStart")
            }
            ,
            AnimationItem.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
                this.firstFrame = t,
                this.totalFrames = e - t,
                this.timeCompleted = this.totalFrames,
                -1 !== i && this.goToAndStop(i, !0)
            }
            ,
            AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0),
                "object" === _typeof$4(t[0])) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1)
                        this.segments.push(t[i])
                } else
                    this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play()
            }
            ,
            AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0,
                this.segments.push([this.animationData.ip, this.animationData.op]),
                t && this.checkSegments(0)
            }
            ,
            AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t),
                !0)
            }
            ,
            AnimationItem.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                this._cbs = null,
                this.onEnterFrame = null,
                this.onLoopComplete = null,
                this.onComplete = null,
                this.onSegmentStart = null,
                this.onDestroy = null,
                this.renderer = null,
                this.renderer = null,
                this.imagePreloader = null,
                this.projectInterface = null)
            }
            ,
            AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t,
                this.gotoFrame()
            }
            ,
            AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t,
                this.updaFrameModifier()
            }
            ,
            AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1,
                this.updaFrameModifier()
            }
            ,
            AnimationItem.prototype.setLoop = function(t) {
                this.loop = t
            }
            ,
            AnimationItem.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t)
            }
            ,
            AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }
            ,
            AnimationItem.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute()
            }
            ,
            AnimationItem.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute()
            }
            ,
            AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
                this.audioController.setRate(this.playSpeed * this.playDirection)
            }
            ,
            AnimationItem.prototype.getPath = function() {
                return this.path
            }
            ,
            AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e)
                    e = t.p;
                else if (this.assetsPath) {
                    var i = t.p;
                    -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                    e = this.assetsPath + i
                } else
                    e = this.path + (t.u ? t.u : "") + t.p;
                return e
            }
            ,
            AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, i = this.assets.length; e < i; ) {
                    if (t === this.assets[e].id)
                        return this.assets[e];
                    e += 1
                }
                return null
            }
            ,
            AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }
            ,
            AnimationItem.prototype.show = function() {
                this.renderer.show()
            }
            ,
            AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }
            ,
            AnimationItem.prototype.updateDocumentData = function(t, e, i) {
                try {
                    this.renderer.getElementByPath(t).updateDocumentData(e, i)
                } catch (t) {}
            }
            ,
            AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t])
                    switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame,
                        this.drawnFrameEvent.totalTime = this.totalFrames,
                        this.drawnFrameEvent.direction = this.frameModifier,
                        this.triggerEvent(t, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t,this));
                        break;
                    default:
                        this.triggerEvent(t)
                    }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
                "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
                "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
                "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
                "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
            }
            ,
            AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            }
            ,
            AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t,this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            }
            ;
            var animationManager = function() {
                var t = {}
                  , e = []
                  , i = 0
                  , s = 0
                  , r = 0
                  , a = !0
                  , n = !1;
                function o(t) {
                    for (var i = 0, r = t.target; i < s; )
                        e[i].animation === r && (e.splice(i, 1),
                        i -= 1,
                        s -= 1,
                        r.isPaused || p()),
                        i += 1
                }
                function h(t, i) {
                    if (!t)
                        return null;
                    for (var r = 0; r < s; ) {
                        if (e[r].elem === t && null !== e[r].elem)
                            return e[r].animation;
                        r += 1
                    }
                    var a = new AnimationItem;
                    return f(a, t),
                    a.setData(t, i),
                    a
                }
                function l() {
                    r += 1,
                    m()
                }
                function p() {
                    r -= 1
                }
                function f(t, i) {
                    t.addEventListener("destroy", o),
                    t.addEventListener("_active", l),
                    t.addEventListener("_idle", p),
                    e.push({
                        elem: i,
                        animation: t
                    }),
                    s += 1
                }
                function u(t) {
                    var o, h = t - i;
                    for (o = 0; o < s; o += 1)
                        e[o].animation.advanceTime(h);
                    i = t,
                    r && !n ? window.requestAnimationFrame(u) : a = !0
                }
                function c(t) {
                    i = t,
                    window.requestAnimationFrame(u)
                }
                function m() {
                    !n && r && a && (window.requestAnimationFrame(c),
                    a = !1)
                }
                return t.registerAnimation = h,
                t.loadAnimation = function(t) {
                    var e = new AnimationItem;
                    return f(e, null),
                    e.setParams(t),
                    e
                }
                ,
                t.setSpeed = function(t, i) {
                    var r;
                    for (r = 0; r < s; r += 1)
                        e[r].animation.setSpeed(t, i)
                }
                ,
                t.setDirection = function(t, i) {
                    var r;
                    for (r = 0; r < s; r += 1)
                        e[r].animation.setDirection(t, i)
                }
                ,
                t.play = function(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.play(t)
                }
                ,
                t.pause = function(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.pause(t)
                }
                ,
                t.stop = function(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.stop(t)
                }
                ,
                t.togglePause = function(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.togglePause(t)
                }
                ,
                t.searchAnimations = function(t, e, i) {
                    var s, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = r.length;
                    for (s = 0; s < a; s += 1)
                        i && r[s].setAttribute("data-bm-type", i),
                        h(r[s], t);
                    if (e && 0 === a) {
                        i || (i = "svg");
                        var n = document.getElementsByTagName("body")[0];
                        n.innerText = "";
                        var o = createTag("div");
                        o.style.width = "100%",
                        o.style.height = "100%",
                        o.setAttribute("data-bm-type", i),
                        n.appendChild(o),
                        h(o, t)
                    }
                }
                ,
                t.resize = function() {
                    var t;
                    for (t = 0; t < s; t += 1)
                        e[t].animation.resize()
                }
                ,
                t.goToAndStop = function(t, i, r) {
                    var a;
                    for (a = 0; a < s; a += 1)
                        e[a].animation.goToAndStop(t, i, r)
                }
                ,
                t.destroy = function(t) {
                    var i;
                    for (i = s - 1; i >= 0; i -= 1)
                        e[i].animation.destroy(t)
                }
                ,
                t.freeze = function() {
                    n = !0
                }
                ,
                t.unfreeze = function() {
                    n = !1,
                    m()
                }
                ,
                t.setVolume = function(t, i) {
                    var r;
                    for (r = 0; r < s; r += 1)
                        e[r].animation.setVolume(t, i)
                }
                ,
                t.mute = function(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.mute(t)
                }
                ,
                t.unmute = function(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.unmute(t)
                }
                ,
                t.getRegisteredAnimations = function() {
                    var t, i = e.length, s = [];
                    for (t = 0; t < i; t += 1)
                        s.push(e[t].animation);
                    return s
                }
                ,
                t
            }()
              , BezierFactory = function() {
                var t = {
                    getBezierEasing: function(t, i, s, r, a) {
                        var n = a || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
                        if (e[n])
                            return e[n];
                        var o = new l([t, i, s, r]);
                        return e[n] = o,
                        o
                    }
                }
                  , e = {}
                  , i = .1
                  , s = "function" == typeof Float32Array;
                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function a(t, e) {
                    return 3 * e - 6 * t
                }
                function n(t) {
                    return 3 * t
                }
                function o(t, e, i) {
                    return ((r(e, i) * t + a(e, i)) * t + n(e)) * t
                }
                function h(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * a(e, i) * t + n(e)
                }
                function l(t) {
                    this._p = t,
                    this._mSampleValues = s ? new Float32Array(11) : Array(11),
                    this._precomputed = !1,
                    this.get = this.get.bind(this)
                }
                return l.prototype = {
                    get: function(t) {
                        var e = this._p[0]
                          , i = this._p[1]
                          , s = this._p[2]
                          , r = this._p[3];
                        return this._precomputed || this._precompute(),
                        e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), i, r)
                    },
                    _precompute: function() {
                        var t = this._p[0]
                          , e = this._p[1]
                          , i = this._p[2]
                          , s = this._p[3];
                        this._precomputed = !0,
                        t === e && i === s || this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var t = this._p[0], e = this._p[2], s = 0; s < 11; ++s)
                            this._mSampleValues[s] = o(s * i, t, e)
                    },
                    _getTForX: function(t) {
                        for (var e = this._p[0], s = this._p[2], r = this._mSampleValues, a = 0, n = 1; 10 !== n && r[n] <= t; ++n)
                            a += i;
                        var l = a + (t - r[--n]) / (r[n + 1] - r[n]) * i
                          , p = h(l, e, s);
                        return p >= .001 ? function(t, e, i, s) {
                            for (var r = 0; r < 4; ++r) {
                                var a = h(e, i, s);
                                if (0 === a)
                                    break;
                                e -= (o(e, i, s) - t) / a
                            }
                            return e
                        }(t, l, e, s) : 0 === p ? l : function(t, e, i, s, r) {
                            var a, n, h = 0;
                            do
                                (a = o(n = e + (i - e) / 2, s, r) - t) > 0 ? i = n : e = n;
                            while (Math.abs(a) > 1e-7 && ++h < 10);
                            return n
                        }(t, a, a + i, e, s)
                    }
                },
                t
            }()
              , pooling = {
                double: function(t) {
                    return t.concat(createSizedArray(t.length))
                }
            }
              , poolFactory = function(t, e, i) {
                var s = 0
                  , r = t
                  , a = createSizedArray(r);
                return {
                    newElement: function() {
                        return s ? a[s -= 1] : e()
                    },
                    release: function(t) {
                        s === r && (a = pooling.double(a),
                        r *= 2),
                        i && i(t),
                        a[s] = t,
                        s += 1
                    }
                }
            }
              , bezierLengthPool = poolFactory(8, function() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                }
            })
              , segmentsLengthPool = poolFactory(8, function() {
                return {
                    lengths: [],
                    totalLength: 0
                }
            }, function(t) {
                var e, i = t.lengths.length;
                for (e = 0; e < i; e += 1)
                    bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0
            });
            function bezFunction() {
                var t = Math;
                function e(t, e, i, s, r, a) {
                    var n = t * s + e * r + i * a - r * s - a * t - i * e;
                    return n > -.001 && n < .001
                }
                var i = function(t, e, i, s) {
                    var r, a, n, o, h, l, p = getDefaultCurveSegments(), f = 0, u = [], c = [], m = bezierLengthPool.newElement();
                    for (n = i.length,
                    r = 0; r < p; r += 1) {
                        for (h = r / (p - 1),
                        l = 0,
                        a = 0; a < n; a += 1)
                            o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bmPow(h, 2) * s[a] + bmPow(h, 3) * e[a],
                            u[a] = o,
                            null !== c[a] && (l += bmPow(u[a] - c[a], 2)),
                            c[a] = u[a];
                        l && (f += l = bmSqrt(l)),
                        m.percents[r] = h,
                        m.lengths[r] = f
                    }
                    return m.addedLength = f,
                    m
                };
                function s(t) {
                    this.segmentLength = 0,
                    this.points = Array(t)
                }
                function r(t, e) {
                    this.partialLength = t,
                    this.point = e
                }
                var a, n = (a = {},
                function(t, i, n, o) {
                    var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                    if (!a[h]) {
                        var l, p, f, u, c, m, d, g = getDefaultCurveSegments(), y = 0, v = null;
                        2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                        var b = new s(g);
                        for (f = n.length,
                        l = 0; l < g; l += 1) {
                            for (d = createSizedArray(f),
                            c = l / (g - 1),
                            m = 0,
                            p = 0; p < f; p += 1)
                                u = bmPow(1 - c, 3) * t[p] + 3 * bmPow(1 - c, 2) * c * (t[p] + n[p]) + 3 * (1 - c) * bmPow(c, 2) * (i[p] + o[p]) + bmPow(c, 3) * i[p],
                                d[p] = u,
                                null !== v && (m += bmPow(d[p] - v[p], 2));
                            y += m = bmSqrt(m),
                            b.points[l] = new r(m,d),
                            v = d
                        }
                        b.segmentLength = y,
                        a[h] = b
                    }
                    return a[h]
                }
                );
                function o(t, e) {
                    var i = e.percents
                      , s = e.lengths
                      , r = i.length
                      , a = bmFloor((r - 1) * t)
                      , n = t * e.addedLength
                      , o = 0;
                    if (a === r - 1 || 0 === a || n === s[a])
                        return i[a];
                    for (var h = s[a] > n ? -1 : 1, l = !0; l; )
                        if (s[a] <= n && s[a + 1] > n ? (o = (n - s[a]) / (s[a + 1] - s[a]),
                        l = !1) : a += h,
                        a < 0 || a >= r - 1) {
                            if (a === r - 1)
                                return i[a];
                            l = !1
                        }
                    return i[a] + (i[a + 1] - i[a]) * o
                }
                var h = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) {
                        var e, s = segmentsLengthPool.newElement(), r = t.c, a = t.v, n = t.o, o = t.i, h = t._length, l = s.lengths, p = 0;
                        for (e = 0; e < h - 1; e += 1)
                            l[e] = i(a[e], a[e + 1], n[e], o[e + 1]),
                            p += l[e].addedLength;
                        return r && h && (l[e] = i(a[e], a[0], n[e], o[0]),
                        p += l[e].addedLength),
                        s.totalLength = p,
                        s
                    },
                    getNewSegment: function(e, i, s, r, a, n, l) {
                        a < 0 ? a = 0 : a > 1 && (a = 1);
                        var p, f = o(a, l), u = o(n = n > 1 ? 1 : n, l), c = e.length, m = 1 - f, d = 1 - u, g = m * m * m, y = f * m * m * 3, v = f * f * m * 3, b = f * f * f, _ = m * m * d, A = f * m * d + m * f * d + m * m * u, k = f * f * d + m * f * u + f * m * u, P = f * f * u, x = m * d * d, D = f * d * d + m * u * d + m * d * u, S = f * u * d + m * u * u + f * d * u, M = f * u * u, w = d * d * d, T = u * d * d + d * u * d + d * d * u, C = u * u * d + d * u * u + u * d * u, E = u * u * u;
                        for (p = 0; p < c; p += 1)
                            h[4 * p] = t.round(1e3 * (g * e[p] + y * s[p] + v * r[p] + b * i[p])) / 1e3,
                            h[4 * p + 1] = t.round(1e3 * (_ * e[p] + A * s[p] + k * r[p] + P * i[p])) / 1e3,
                            h[4 * p + 2] = t.round(1e3 * (x * e[p] + D * s[p] + S * r[p] + M * i[p])) / 1e3,
                            h[4 * p + 3] = t.round(1e3 * (w * e[p] + T * s[p] + C * r[p] + E * i[p])) / 1e3;
                        return h
                    },
                    getPointInSegment: function(e, i, s, r, a, n) {
                        var h = o(a, n)
                          , l = 1 - h;
                        return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * s[0] + (h * h * l + l * h * h + h * l * h) * r[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * s[1] + (h * h * l + l * h * h + h * l * h) * r[1] + h * h * h * i[1])) / 1e3]
                    },
                    buildBezierData: n,
                    pointOnLine2D: e,
                    pointOnLine3D: function(i, s, r, a, n, o, h, l, p) {
                        if (0 === r && 0 === o && 0 === p)
                            return e(i, s, a, n, h, l);
                        var f, u = t.sqrt(t.pow(a - i, 2) + t.pow(n - s, 2) + t.pow(o - r, 2)), c = t.sqrt(t.pow(h - i, 2) + t.pow(l - s, 2) + t.pow(p - r, 2)), m = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                        return (f = u > c ? u > m ? u - c - m : m - c - u : m > c ? m - c - u : c - u - m) > -.0001 && f < 1e-4
                    }
                }
            }
            var bez = bezFunction()
              , initFrame = initialDefaultFrame
              , mathAbs = Math.abs;
            function interpolateValue(t, e) {
                var i, s, r, a, n, o, h = this.offsetTime;
                "multidimensional" === this.propType && (o = createTypedArray("float32", this.pv.length));
                for (var l, p, f, u, c, m, d, g, y, v = e.lastIndex, b = v, _ = this.keyframes.length - 1, A = !0; A; ) {
                    if (l = this.keyframes[b],
                    p = this.keyframes[b + 1],
                    b === _ - 1 && t >= p.t - h) {
                        l.h && (l = p),
                        v = 0;
                        break
                    }
                    if (p.t - h > t) {
                        v = b;
                        break
                    }
                    b < _ - 1 ? b += 1 : (v = 0,
                    A = !1)
                }
                f = this.keyframesMetadata[b] || {};
                var k, P = p.t - h, x = l.t - h;
                if (l.to) {
                    f.bezierData || (f.bezierData = bez.buildBezierData(l.s, p.s || l.e, l.to, l.ti));
                    var D = f.bezierData;
                    if (t >= P || t < x) {
                        var S = t >= P ? D.points.length - 1 : 0;
                        for (c = D.points[S].point.length,
                        u = 0; u < c; u += 1)
                            o[u] = D.points[S].point[u]
                    } else {
                        f.__fnct ? y = f.__fnct : (y = BezierFactory.getBezierEasing(l.o.x, l.o.y, l.i.x, l.i.y, l.n).get,
                        f.__fnct = y),
                        m = y((t - x) / (P - x));
                        var M, w = D.segmentLength * m, T = e.lastFrame < t && e._lastKeyframeIndex === b ? e._lastAddedLength : 0;
                        for (g = e.lastFrame < t && e._lastKeyframeIndex === b ? e._lastPoint : 0,
                        A = !0,
                        d = D.points.length; A; ) {
                            if (T += D.points[g].partialLength,
                            0 === w || 0 === m || g === D.points.length - 1) {
                                for (c = D.points[g].point.length,
                                u = 0; u < c; u += 1)
                                    o[u] = D.points[g].point[u];
                                break
                            }
                            if (w >= T && w < T + D.points[g + 1].partialLength) {
                                for (M = (w - T) / D.points[g + 1].partialLength,
                                c = D.points[g].point.length,
                                u = 0; u < c; u += 1)
                                    o[u] = D.points[g].point[u] + (D.points[g + 1].point[u] - D.points[g].point[u]) * M;
                                break
                            }
                            g < d - 1 ? g += 1 : A = !1
                        }
                        e._lastPoint = g,
                        e._lastAddedLength = T - D.points[g].partialLength,
                        e._lastKeyframeIndex = b
                    }
                } else if (_ = l.s.length,
                k = p.s || l.e,
                this.sh && 1 !== l.h)
                    t >= P ? (o[0] = k[0],
                    o[1] = k[1],
                    o[2] = k[2]) : t <= x ? (o[0] = l.s[0],
                    o[1] = l.s[1],
                    o[2] = l.s[2]) : quaternionToEuler(o, slerp(createQuaternion(l.s), createQuaternion(k), (t - x) / (P - x)));
                else
                    for (b = 0; b < _; b += 1)
                        1 !== l.h && (t >= P ? m = 1 : t < x ? m = 0 : (l.o.x.constructor === Array ? (f.__fnct || (f.__fnct = []),
                        f.__fnct[b] ? y = f.__fnct[b] : (i = void 0 === l.o.x[b] ? l.o.x[0] : l.o.x[b],
                        s = void 0 === l.o.y[b] ? l.o.y[0] : l.o.y[b],
                        r = void 0 === l.i.x[b] ? l.i.x[0] : l.i.x[b],
                        a = void 0 === l.i.y[b] ? l.i.y[0] : l.i.y[b],
                        y = BezierFactory.getBezierEasing(i, s, r, a).get,
                        f.__fnct[b] = y)) : f.__fnct ? y = f.__fnct : (i = l.o.x,
                        s = l.o.y,
                        r = l.i.x,
                        a = l.i.y,
                        y = BezierFactory.getBezierEasing(i, s, r, a).get,
                        l.keyframeMetadata = y),
                        m = y((t - x) / (P - x)))),
                        k = p.s || l.e,
                        n = 1 === l.h ? l.s[b] : l.s[b] + (k[b] - l.s[b]) * m,
                        "multidimensional" === this.propType ? o[b] = n : o = n;
                return e.lastIndex = v,
                o
            }
            function slerp(t, e, i) {
                var s, r, a, n, o, h = [], l = t[0], p = t[1], f = t[2], u = t[3], c = e[0], m = e[1], d = e[2], g = e[3];
                return (r = l * c + p * m + f * d + u * g) < 0 && (r = -r,
                c = -c,
                m = -m,
                d = -d,
                g = -g),
                1 - r > 1e-6 ? (a = Math.sin(s = Math.acos(r)),
                n = Math.sin((1 - i) * s) / a,
                o = Math.sin(i * s) / a) : (n = 1 - i,
                o = i),
                h[0] = n * l + o * c,
                h[1] = n * p + o * m,
                h[2] = n * f + o * d,
                h[3] = n * u + o * g,
                h
            }
            function quaternionToEuler(t, e) {
                var i = e[0]
                  , s = e[1]
                  , r = e[2]
                  , a = e[3]
                  , n = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r)
                  , o = Math.asin(2 * i * s + 2 * r * a)
                  , h = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r);
                t[0] = n / degToRads,
                t[1] = o / degToRads,
                t[2] = h / degToRads
            }
            function createQuaternion(t) {
                var e = t[0] * degToRads
                  , i = t[1] * degToRads
                  , s = t[2] * degToRads
                  , r = Math.cos(e / 2)
                  , a = Math.cos(i / 2)
                  , n = Math.cos(s / 2)
                  , o = Math.sin(e / 2)
                  , h = Math.sin(i / 2)
                  , l = Math.sin(s / 2);
                return [o * h * n + r * a * l, o * a * n + r * h * l, r * h * n - o * a * l, r * a * n - o * h * l]
            }
            function getValueAtCurrentTime() {
                var t = this.comp.renderedFrame - this.offsetTime
                  , e = this.keyframes[0].t - this.offsetTime
                  , i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                    this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1,
                    this._caching.lastIndex = 0);
                    var s = this.interpolateValue(t, this._caching);
                    this.pv = s
                }
                return this._caching.lastFrame = t,
                this.pv
            }
            function setVValue(t) {
                var e;
                if ("unidimensional" === this.propType)
                    e = t * this.mult,
                    mathAbs(this.v - e) > 1e-5 && (this.v = e,
                    this._mdf = !0);
                else
                    for (var i = 0, s = this.v.length; i < s; )
                        e = t[i] * this.mult,
                        mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e,
                        this._mdf = !0),
                        i += 1
            }
            function processEffectsSequence() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                    if (this.lock)
                        this.setVValue(this.pv);
                    else {
                        this.lock = !0,
                        this._mdf = this._isFirstFrame;
                        var t, e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1)
                            i = this.effectsSequence[t](i);
                        this.setVValue(i),
                        this._isFirstFrame = !1,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
                }
            }
            function addEffect(t) {
                this.effectsSequence.push(t),
                this.container.addDynamicProperty(this)
            }
            function ValueProperty(t, e, i, s) {
                this.propType = "unidimensional",
                this.mult = i || 1,
                this.data = e,
                this.v = i ? e.k * i : e.k,
                this.pv = e.k,
                this._mdf = !1,
                this.elem = t,
                this.container = s,
                this.comp = t.comp,
                this.k = !1,
                this.kf = !1,
                this.vel = 0,
                this.effectsSequence = [],
                this._isFirstFrame = !0,
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.addEffect = addEffect
            }
            function MultiDimensionalProperty(t, e, i, s) {
                this.propType = "multidimensional",
                this.mult = i || 1,
                this.data = e,
                this._mdf = !1,
                this.elem = t,
                this.container = s,
                this.comp = t.comp,
                this.k = !1,
                this.kf = !1,
                this.frameId = -1;
                var r, a = e.k.length;
                for (this.v = createTypedArray("float32", a),
                this.pv = createTypedArray("float32", a),
                this.vel = createTypedArray("float32", a),
                r = 0; r < a; r += 1)
                    this.v[r] = e.k[r] * this.mult,
                    this.pv[r] = e.k[r];
                this._isFirstFrame = !0,
                this.effectsSequence = [],
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.addEffect = addEffect
            }
            function KeyframedValueProperty(t, e, i, s) {
                this.propType = "unidimensional",
                this.keyframes = e.k,
                this.keyframesMetadata = [],
                this.offsetTime = t.data.st,
                this.frameId = -1,
                this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                },
                this.k = !0,
                this.kf = !0,
                this.data = e,
                this.mult = i || 1,
                this.elem = t,
                this.container = s,
                this.comp = t.comp,
                this.v = initFrame,
                this.pv = initFrame,
                this._isFirstFrame = !0,
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.interpolateValue = interpolateValue,
                this.effectsSequence = [getValueAtCurrentTime.bind(this)],
                this.addEffect = addEffect
            }
            function KeyframedMultidimensionalProperty(t, e, i, s) {
                this.propType = "multidimensional";
                var r, a, n, o, h, l = e.k.length;
                for (r = 0; r < l - 1; r += 1)
                    e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (a = e.k[r].s,
                    n = e.k[r + 1].s,
                    o = e.k[r].to,
                    h = e.k[r].ti,
                    (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[r].to = null,
                    e.k[r].ti = null),
                    a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[r].to = null,
                    e.k[r].ti = null));
                this.effectsSequence = [getValueAtCurrentTime.bind(this)],
                this.data = e,
                this.keyframes = e.k,
                this.keyframesMetadata = [],
                this.offsetTime = t.data.st,
                this.k = !0,
                this.kf = !0,
                this._isFirstFrame = !0,
                this.mult = i || 1,
                this.elem = t,
                this.container = s,
                this.comp = t.comp,
                this.getValue = processEffectsSequence,
                this.setVValue = setVValue,
                this.interpolateValue = interpolateValue,
                this.frameId = -1;
                var p = e.k[0].s.length;
                for (this.v = createTypedArray("float32", p),
                this.pv = createTypedArray("float32", p),
                r = 0; r < p; r += 1)
                    this.v[r] = initFrame,
                    this.pv[r] = initFrame;
                this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: createTypedArray("float32", p)
                },
                this.addEffect = addEffect
            }
            var PropertyFactory = {
                getProp: function(t, e, i, s, r) {
                    var a;
                    if (e.sid && (e = t.globalData.slotManager.getProp(e)),
                    e.k.length) {
                        if ("number" == typeof e.k[0])
                            a = new MultiDimensionalProperty(t,e,s,r);
                        else
                            switch (i) {
                            case 0:
                                a = new KeyframedValueProperty(t,e,s,r);
                                break;
                            case 1:
                                a = new KeyframedMultidimensionalProperty(t,e,s,r)
                            }
                    } else
                        a = new ValueProperty(t,e,s,r);
                    return a.effectsSequence.length && r.addDynamicProperty(a),
                    a
                }
            };
            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t),
                    this.container.addDynamicProperty(this),
                    this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    this._mdf = !1;
                    var t, e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1)
                        this.dynamicProperties[t].getValue(),
                        this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t,
                    this.dynamicProperties = [],
                    this._mdf = !1,
                    this._isAnimated = !1
                }
            };
            var pointPool = poolFactory(8, function() {
                return createTypedArray("float32", 2)
            });
            function ShapePath() {
                this.c = !1,
                this._length = 0,
                this._maxLength = 8,
                this.v = createSizedArray(this._maxLength),
                this.o = createSizedArray(this._maxLength),
                this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t,
                this.setLength(e);
                for (var i = 0; i < e; )
                    this.v[i] = pointPool.newElement(),
                    this.o[i] = pointPool.newElement(),
                    this.i[i] = pointPool.newElement(),
                    i += 1
            }
            ,
            ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t; )
                    this.doubleArrayLength();
                this._length = t
            }
            ,
            ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)),
                this.i = this.i.concat(createSizedArray(this._maxLength)),
                this.o = this.o.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2
            }
            ,
            ShapePath.prototype.setXYAt = function(t, e, i, s, r) {
                var a;
                switch (this._length = Math.max(this._length, s + 1),
                this._length >= this._maxLength && this.doubleArrayLength(),
                i) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = []
                }
                a[s] && (!a[s] || r) || (a[s] = pointPool.newElement()),
                a[s][0] = t,
                a[s][1] = e
            }
            ,
            ShapePath.prototype.setTripleAt = function(t, e, i, s, r, a, n, o) {
                this.setXYAt(t, e, "v", n, o),
                this.setXYAt(i, s, "o", n, o),
                this.setXYAt(r, a, "i", n, o)
            }
            ,
            ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v
                  , i = this.o
                  , s = this.i
                  , r = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1),
                r = 1);
                var a, n = this._length - 1, o = this._length;
                for (a = r; a < o; a += 1)
                    t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], a, !1),
                    n -= 1;
                return t
            }
            ,
            ShapePath.prototype.length = function() {
                return this._length
            }
            ;
            var factory, shapePool = (factory = poolFactory(4, function() {
                return new ShapePath
            }, function(t) {
                var e, i = t._length;
                for (e = 0; e < i; e += 1)
                    pointPool.release(t.v[e]),
                    pointPool.release(t.i[e]),
                    pointPool.release(t.o[e]),
                    t.v[e] = null,
                    t.i[e] = null,
                    t.o[e] = null;
                t._length = 0,
                t.c = !1
            }),
            factory.clone = function(t) {
                var e, i = factory.newElement(), s = void 0 === t._length ? t.v.length : t._length;
                for (i.setLength(s),
                i.c = t.c,
                e = 0; e < s; e += 1)
                    i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                return i
            }
            ,
            factory);
            function ShapeCollection() {
                this._length = 0,
                this._maxLength = 4,
                this.shapes = createSizedArray(this._maxLength)
            }
            ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2),
                this.shapes[this._length] = t,
                this._length += 1
            }
            ,
            ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1)
                    shapePool.release(this.shapes[t]);
                this._length = 0
            }
            ;
            var ob, _length, _maxLength, pool, shapeCollectionPool = (ob = {
                newShapeCollection: function() {
                    return _length ? pool[_length -= 1] : new ShapeCollection
                },
                release: function(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1)
                        shapePool.release(t.shapes[e]);
                    t._length = 0,
                    _length === _maxLength && (pool = pooling.double(pool),
                    _maxLength *= 2),
                    pool[_length] = t,
                    _length += 1
                }
            },
            _length = 0,
            _maxLength = 4,
            pool = createSizedArray(_maxLength),
            ob), ShapePropertyFactory = function() {
                var t = -999999;
                function e(t, e, i) {
                    var s, r, a, n, o, h, l, p, f, u = i.lastIndex, c = this.keyframes;
                    if (t < c[0].t - this.offsetTime)
                        s = c[0].s[0],
                        a = !0,
                        u = 0;
                    else if (t >= c[c.length - 1].t - this.offsetTime)
                        s = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0],
                        a = !0;
                    else {
                        for (var m, d, g, y, v = u, b = c.length - 1, _ = !0; _ && (d = c[v],
                        !((g = c[v + 1]).t - this.offsetTime > t)); )
                            v < b - 1 ? v += 1 : _ = !1;
                        y = this.keyframesMetadata[v] || {},
                        u = v,
                        (a = 1 === d.h) || (t >= g.t - this.offsetTime ? p = 1 : t < d.t - this.offsetTime ? p = 0 : (y.__fnct ? m = y.__fnct : (m = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get,
                        y.__fnct = m),
                        p = m((t - (d.t - this.offsetTime)) / (g.t - this.offsetTime - (d.t - this.offsetTime)))),
                        r = g.s ? g.s[0] : d.e[0]),
                        s = d.s[0]
                    }
                    for (h = e._length,
                    l = s.i[0].length,
                    i.lastIndex = u,
                    n = 0; n < h; n += 1)
                        for (o = 0; o < l; o += 1)
                            f = a ? s.i[n][o] : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p,
                            e.i[n][o] = f,
                            f = a ? s.o[n][o] : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p,
                            e.o[n][o] = f,
                            f = a ? s.v[n][o] : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p,
                            e.v[n][o] = f
                }
                function i() {
                    var e = this.comp.renderedFrame - this.offsetTime
                      , i = this.keyframes[0].t - this.offsetTime
                      , s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                      , r = this._caching.lastFrame;
                    return r !== t && (r < i && e < i || r > s && e > s) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0,
                    this.interpolateShape(e, this.pv, this._caching)),
                    this._caching.lastFrame = e,
                    this.pv
                }
                function s() {
                    this.paths = this.localShapeCollection
                }
                function r(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c)
                            return !1;
                        var i, s = t._length;
                        for (i = 0; i < s; i += 1)
                            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1])
                                return !1;
                        return !0
                    }
                    )(this.v, t) || (this.v = shapePool.clone(t),
                    this.localShapeCollection.releaseShapes(),
                    this.localShapeCollection.addShape(this.v),
                    this._mdf = !0,
                    this.paths = this.localShapeCollection)
                }
                function a() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this.effectsSequence.length) {
                            if (this.lock)
                                this.setVValue(this.pv);
                            else {
                                this.lock = !0,
                                this._mdf = !1,
                                t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var t, e, i = this.effectsSequence.length;
                                for (e = 0; e < i; e += 1)
                                    t = this.effectsSequence[e](t);
                                this.setVValue(t),
                                this.lock = !1,
                                this.frameId = this.elem.globalData.frameId
                            }
                        } else
                            this._mdf = !1
                    }
                }
                function n(t, e, i) {
                    this.propType = "shape",
                    this.comp = t.comp,
                    this.container = t,
                    this.elem = t,
                    this.data = e,
                    this.k = !1,
                    this.kf = !1,
                    this._mdf = !1;
                    var r = 3 === i ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(r),
                    this.pv = shapePool.clone(this.v),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.paths.addShape(this.v),
                    this.reset = s,
                    this.effectsSequence = []
                }
                function o(t) {
                    this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this)
                }
                function h(e, r, a) {
                    this.propType = "shape",
                    this.comp = e.comp,
                    this.elem = e,
                    this.container = e,
                    this.offsetTime = e.data.st,
                    this.keyframes = 3 === a ? r.pt.k : r.ks.k,
                    this.keyframesMetadata = [],
                    this.k = !0,
                    this.kf = !0;
                    var n = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(),
                    this.v.setPathData(this.keyframes[0].s[0].c, n),
                    this.pv = shapePool.clone(this.v),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.paths.addShape(this.v),
                    this.lastFrame = t,
                    this.reset = s,
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    },
                    this.effectsSequence = [i.bind(this)]
                }
                n.prototype.interpolateShape = e,
                n.prototype.getValue = a,
                n.prototype.setVValue = r,
                n.prototype.addEffect = o,
                h.prototype.getValue = a,
                h.prototype.interpolateShape = e,
                h.prototype.setVValue = r,
                h.prototype.addEffect = o;
                var l = function() {
                    var t = roundCorner;
                    function e(t, e) {
                        this.v = shapePool.newElement(),
                        this.v.setPathData(!0, 4),
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.paths = this.localShapeCollection,
                        this.localShapeCollection.addShape(this.v),
                        this.d = e.d,
                        this.elem = t,
                        this.comp = t.comp,
                        this.frameId = -1,
                        this.initDynamicPropertyContainer(t),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertEllToPath())
                    }
                    return e.prototype = {
                        reset: s,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertEllToPath())
                        },
                        convertEllToPath: function() {
                            var e = this.p.v[0]
                              , i = this.p.v[1]
                              , s = this.s.v[0] / 2
                              , r = this.s.v[1] / 2
                              , a = 3 !== this.d
                              , n = this.v;
                            n.v[0][0] = e,
                            n.v[0][1] = i - r,
                            n.v[1][0] = a ? e + s : e - s,
                            n.v[1][1] = i,
                            n.v[2][0] = e,
                            n.v[2][1] = i + r,
                            n.v[3][0] = a ? e - s : e + s,
                            n.v[3][1] = i,
                            n.i[0][0] = a ? e - s * t : e + s * t,
                            n.i[0][1] = i - r,
                            n.i[1][0] = a ? e + s : e - s,
                            n.i[1][1] = i - r * t,
                            n.i[2][0] = a ? e + s * t : e - s * t,
                            n.i[2][1] = i + r,
                            n.i[3][0] = a ? e - s : e + s,
                            n.i[3][1] = i + r * t,
                            n.o[0][0] = a ? e + s * t : e - s * t,
                            n.o[0][1] = i - r,
                            n.o[1][0] = a ? e + s : e - s,
                            n.o[1][1] = i + r * t,
                            n.o[2][0] = a ? e - s * t : e + s * t,
                            n.o[2][1] = i + r,
                            n.o[3][0] = a ? e - s : e + s,
                            n.o[3][1] = i - r * t
                        }
                    },
                    extendPrototype([DynamicPropertyContainer], e),
                    e
                }()
                  , p = function() {
                    function t(t, e) {
                        this.v = shapePool.newElement(),
                        this.v.setPathData(!0, 0),
                        this.elem = t,
                        this.comp = t.comp,
                        this.data = e,
                        this.frameId = -1,
                        this.d = e.d,
                        this.initDynamicPropertyContainer(t),
                        1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this),
                        this.is = PropertyFactory.getProp(t, e.is, 0, .01, this),
                        this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                        this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                        this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                        this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.localShapeCollection.addShape(this.v),
                        this.paths = this.localShapeCollection,
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertToPath())
                    }
                    return t.prototype = {
                        reset: s,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertToPath())
                        },
                        convertStarToPath: function() {
                            var t, e, i, s, r = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / r, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, f = 2 * Math.PI * o / (2 * r), u = 2 * Math.PI * h / (2 * r), c = -Math.PI / 2;
                            c += this.r.v;
                            var m = 3 === this.data.d ? -1 : 1;
                            for (this.v._length = 0,
                            t = 0; t < r; t += 1) {
                                i = n ? l : p,
                                s = n ? f : u;
                                var d = (e = n ? o : h) * Math.cos(c)
                                  , g = e * Math.sin(c)
                                  , y = 0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g)
                                  , v = 0 === d && 0 === g ? 0 : -d / Math.sqrt(d * d + g * g);
                                d += +this.p.v[0],
                                g += +this.p.v[1],
                                this.v.setTripleAt(d, g, d - y * s * i * m, g - v * s * i * m, d + y * s * i * m, g + v * s * i * m, t, !0),
                                n = !n,
                                c += a * m
                            }
                        },
                        convertPolygonToPath: function() {
                            var t, e = Math.floor(this.pt.v), i = 2 * Math.PI / e, s = this.or.v, r = this.os.v, a = 2 * Math.PI * s / (4 * e), n = -(.5 * Math.PI), o = 3 === this.data.d ? -1 : 1;
                            for (n += this.r.v,
                            this.v._length = 0,
                            t = 0; t < e; t += 1) {
                                var h = s * Math.cos(n)
                                  , l = s * Math.sin(n)
                                  , p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l)
                                  , f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                h += +this.p.v[0],
                                l += +this.p.v[1],
                                this.v.setTripleAt(h, l, h - p * a * r * o, l - f * a * r * o, h + p * a * r * o, l + f * a * r * o, t, !0),
                                n += i * o
                            }
                            this.paths.length = 0,
                            this.paths[0] = this.v
                        }
                    },
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                }()
                  , f = function() {
                    function t(t, e) {
                        this.v = shapePool.newElement(),
                        this.v.c = !0,
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.localShapeCollection.addShape(this.v),
                        this.paths = this.localShapeCollection,
                        this.elem = t,
                        this.comp = t.comp,
                        this.frameId = -1,
                        this.d = e.d,
                        this.initDynamicPropertyContainer(t),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                        this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertRectToPath())
                    }
                    return t.prototype = {
                        convertRectToPath: function() {
                            var t = this.p.v[0]
                              , e = this.p.v[1]
                              , i = this.s.v[0] / 2
                              , s = this.s.v[1] / 2
                              , r = bmMin(i, s, this.r.v)
                              , a = r * (1 - roundCorner);
                            this.v._length = 0,
                            2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, !0),
                            this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, !0),
                            0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, !0),
                            this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, !0),
                            this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, !0),
                            this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, !0),
                            this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, !0),
                            this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2),
                            this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, !0),
                            0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, !0),
                            this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, !0),
                            this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, !0),
                            this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, !0),
                            this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, !0),
                            this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, !0),
                            this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, !0),
                            this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, !0),
                            this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, !0)))
                        },
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertRectToPath())
                        },
                        reset: s
                    },
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                }();
                return {
                    getShapeProp: function(t, e, i) {
                        var s;
                        return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new h(t,e,i) : new n(t,e,i) : 5 === i ? s = new f(t,e) : 6 === i ? s = new l(t,e) : 7 === i && (s = new p(t,e)),
                        s.k && t.addDynamicProperty(s),
                        s
                    },
                    getConstructorFunction: function() {
                        return n
                    },
                    getKeyframedConstructorFunction: function() {
                        return h
                    }
                }
            }(), Matrix = function() {
                var t = Math.cos
                  , e = Math.sin
                  , i = Math.tan
                  , s = Math.round;
                function r() {
                    return this.props[0] = 1,
                    this.props[1] = 0,
                    this.props[2] = 0,
                    this.props[3] = 0,
                    this.props[4] = 0,
                    this.props[5] = 1,
                    this.props[6] = 0,
                    this.props[7] = 0,
                    this.props[8] = 0,
                    this.props[9] = 0,
                    this.props[10] = 1,
                    this.props[11] = 0,
                    this.props[12] = 0,
                    this.props[13] = 0,
                    this.props[14] = 0,
                    this.props[15] = 1,
                    this
                }
                function a(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function n(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
                }
                function o(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
                }
                function h(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }
                function p(t, e) {
                    return this.shear(i(t), i(e))
                }
                function f(s, r) {
                    var a = t(r)
                      , n = e(r);
                    return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function u(t, e, i) {
                    return i || 0 === i || (i = 1),
                    1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                }
                function c(t, e, i, s, r, a, n, o, h, l, p, f, u, c, m, d) {
                    return this.props[0] = t,
                    this.props[1] = e,
                    this.props[2] = i,
                    this.props[3] = s,
                    this.props[4] = r,
                    this.props[5] = a,
                    this.props[6] = n,
                    this.props[7] = o,
                    this.props[8] = h,
                    this.props[9] = l,
                    this.props[10] = p,
                    this.props[11] = f,
                    this.props[12] = u,
                    this.props[13] = c,
                    this.props[14] = m,
                    this.props[15] = d,
                    this
                }
                function m(t, e, i) {
                    return i = i || 0,
                    0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                }
                function d(t, e, i, s, r, a, n, o, h, l, p, f, u, c, m, d) {
                    var g = this.props;
                    if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f)
                        return g[12] = g[12] * t + g[15] * u,
                        g[13] = g[13] * a + g[15] * c,
                        g[14] = g[14] * p + g[15] * m,
                        g[15] *= d,
                        this._identityCalculated = !1,
                        this;
                    var y = g[0]
                      , v = g[1]
                      , b = g[2]
                      , _ = g[3]
                      , A = g[4]
                      , k = g[5]
                      , P = g[6]
                      , x = g[7]
                      , D = g[8]
                      , S = g[9]
                      , M = g[10]
                      , w = g[11]
                      , T = g[12]
                      , C = g[13]
                      , E = g[14]
                      , F = g[15];
                    return g[0] = y * t + v * r + b * h + _ * u,
                    g[1] = y * e + v * a + b * l + _ * c,
                    g[2] = y * i + v * n + b * p + _ * m,
                    g[3] = y * s + v * o + b * f + _ * d,
                    g[4] = A * t + k * r + P * h + x * u,
                    g[5] = A * e + k * a + P * l + x * c,
                    g[6] = A * i + k * n + P * p + x * m,
                    g[7] = A * s + k * o + P * f + x * d,
                    g[8] = D * t + S * r + M * h + w * u,
                    g[9] = D * e + S * a + M * l + w * c,
                    g[10] = D * i + S * n + M * p + w * m,
                    g[11] = D * s + S * o + M * f + w * d,
                    g[12] = T * t + C * r + E * h + F * u,
                    g[13] = T * e + C * a + E * l + F * c,
                    g[14] = T * i + C * n + E * p + F * m,
                    g[15] = T * s + C * o + E * f + F * d,
                    this._identityCalculated = !1,
                    this
                }
                function g() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]),
                    this._identityCalculated = !0),
                    this._identity
                }
                function y(t) {
                    for (var e = 0; e < 16; ) {
                        if (t.props[e] !== this.props[e])
                            return !1;
                        e += 1
                    }
                    return !0
                }
                function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1)
                        t.props[e] = this.props[e];
                    return t
                }
                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1)
                        this.props[e] = t[e]
                }
                function _(t, e, i) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }
                }
                function A(t, e, i) {
                    return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                }
                function k(t, e, i) {
                    return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                }
                function P(t, e, i) {
                    return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                }
                function x() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                      , e = this.props[5] / t
                      , i = -this.props[1] / t
                      , s = -this.props[4] / t
                      , r = this.props[0] / t
                      , a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t
                      , n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t
                      , o = new Matrix;
                    return o.props[0] = e,
                    o.props[1] = i,
                    o.props[4] = s,
                    o.props[5] = r,
                    o.props[12] = a,
                    o.props[13] = n,
                    o
                }
                function D(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                }
                function S(t) {
                    var e, i = t.length, s = [];
                    for (e = 0; e < i; e += 1)
                        s[e] = D(t[e]);
                    return s
                }
                function M(t, e, i) {
                    var s = createTypedArray("float32", 6);
                    if (this.isIdentity())
                        s[0] = t[0],
                        s[1] = t[1],
                        s[2] = e[0],
                        s[3] = e[1],
                        s[4] = i[0],
                        s[5] = i[1];
                    else {
                        var r = this.props[0]
                          , a = this.props[1]
                          , n = this.props[4]
                          , o = this.props[5]
                          , h = this.props[12]
                          , l = this.props[13];
                        s[0] = t[0] * r + t[1] * n + h,
                        s[1] = t[0] * a + t[1] * o + l,
                        s[2] = e[0] * r + e[1] * n + h,
                        s[3] = e[0] * a + e[1] * o + l,
                        s[4] = i[0] * r + i[1] * n + h,
                        s[5] = i[0] * a + i[1] * o + l
                    }
                    return s
                }
                function w(t, e, i) {
                    return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                }
                function T(t, e) {
                    if (this.isIdentity())
                        return t + "," + e;
                    var i = this.props;
                    return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                }
                function C() {
                    for (var t = 0, e = this.props, i = "matrix3d("; t < 16; )
                        i += s(1e4 * e[t]) / 1e4 + (15 === t ? ")" : ","),
                        t += 1;
                    return i
                }
                function E(t) {
                    return t < 1e-6 && t > 0 || t > -.000001 && t < 0 ? s(1e4 * t) / 1e4 : t
                }
                function F() {
                    var t = this.props;
                    return "matrix(" + E(t[0]) + "," + E(t[1]) + "," + E(t[4]) + "," + E(t[5]) + "," + E(t[12]) + "," + E(t[13]) + ")"
                }
                return function() {
                    this.reset = r,
                    this.rotate = a,
                    this.rotateX = n,
                    this.rotateY = o,
                    this.rotateZ = h,
                    this.skew = p,
                    this.skewFromAxis = f,
                    this.shear = l,
                    this.scale = u,
                    this.setTransform = c,
                    this.translate = m,
                    this.transform = d,
                    this.applyToPoint = _,
                    this.applyToX = A,
                    this.applyToY = k,
                    this.applyToZ = P,
                    this.applyToPointArray = w,
                    this.applyToTriplePoints = M,
                    this.applyToPointStringified = T,
                    this.toCSS = C,
                    this.to2dCSS = F,
                    this.clone = v,
                    this.cloneFromProps = b,
                    this.equals = y,
                    this.inversePoints = S,
                    this.inversePoint = D,
                    this.getInverseMatrix = x,
                    this._t = this.transform,
                    this.isIdentity = g,
                    this._identity = !0,
                    this._identityCalculated = !1,
                    this.props = createTypedArray("float32", 16),
                    this.reset()
                }
            }();
            function _typeof$3(t) {
                return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var lottie = {}
              , standalone = "__[STANDALONE]__"
              , animationData = "__[ANIMATIONDATA]__"
              , renderer = "";
            function setLocation(t) {
                setLocationHref(t)
            }
            function searchAnimations() {
                !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
            }
            function setSubframeRendering(t) {
                setSubframeEnabled(t)
            }
            function setPrefix(t) {
                setIdPrefix(t)
            }
            function loadAnimation(t) {
                return !0 === standalone && (t.animationData = JSON.parse(animationData)),
                animationManager.loadAnimation(t)
            }
            function setQuality(t) {
                if ("string" == typeof t)
                    switch (t) {
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10)
                    }
                else
                    !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
            }
            function inBrowser() {
                return "undefined" != typeof navigator
            }
            function installPlugin(t, e) {
                "expressions" === t && setExpressionsPlugin(e)
            }
            function getFactory(t) {
                switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
                }
            }
            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval),
                searchAnimations())
            }
            function getQueryVariable(t) {
                for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                    var s = e[i].split("=");
                    if (decodeURIComponent(s[0]) == t)
                        return decodeURIComponent(s[1])
                }
                return null
            }
            lottie.play = animationManager.play,
            lottie.pause = animationManager.pause,
            lottie.setLocationHref = setLocation,
            lottie.togglePause = animationManager.togglePause,
            lottie.setSpeed = animationManager.setSpeed,
            lottie.setDirection = animationManager.setDirection,
            lottie.stop = animationManager.stop,
            lottie.searchAnimations = searchAnimations,
            lottie.registerAnimation = animationManager.registerAnimation,
            lottie.loadAnimation = loadAnimation,
            lottie.setSubframeRendering = setSubframeRendering,
            lottie.resize = animationManager.resize,
            lottie.goToAndStop = animationManager.goToAndStop,
            lottie.destroy = animationManager.destroy,
            lottie.setQuality = setQuality,
            lottie.inBrowser = inBrowser,
            lottie.installPlugin = installPlugin,
            lottie.freeze = animationManager.freeze,
            lottie.unfreeze = animationManager.unfreeze,
            lottie.setVolume = animationManager.setVolume,
            lottie.mute = animationManager.mute,
            lottie.unmute = animationManager.unmute,
            lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
            lottie.useWebWorker = setWebWorker,
            lottie.setIDPrefix = setPrefix,
            lottie.__getFactory = getFactory,
            lottie.version = "5.11.0";
            var queryString = "";
            if (standalone) {
                var scripts = document.getElementsByTagName("script")
                  , index = scripts.length - 1
                  , myScript = scripts[index] || {
                    src: ""
                };
                queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "",
                renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
                "object" === _typeof$3(exports) || __webpack_require__.amdO
            } catch (t) {}
            var ShapeModifiers = function() {
                var t = {}
                  , e = {};
                return t.registerModifier = function(t, i) {
                    e[t] || (e[t] = i)
                }
                ,
                t.getModifier = function(t, i, s) {
                    return new e[t](i,s)
                }
                ,
                t
            }();
            function ShapeModifier() {}
            function TrimModifier() {}
            function PuckerAndBloatModifier() {}
            ShapeModifier.prototype.initModifierProperties = function() {}
            ,
            ShapeModifier.prototype.addShapeToModifier = function() {}
            ,
            ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(e),
                    this.addShapeToModifier(e),
                    this._isAnimated && t.setAsAnimated()
                }
            }
            ,
            ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [],
                this.elem = t,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                this.frameId = initialDefaultFrame,
                this.closed = !1,
                this.k = !1,
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }
            ,
            ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                this.iterateDynamicProperties())
            }
            ,
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
                this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
                this.sValue = 0,
                this.eValue = 0,
                this.getValue = this.processKeys,
                this.m = e.m,
                this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }
            ,
            TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }
            ,
            TrimModifier.prototype.calculateShapeEdges = function(t, e, i, s, r) {
                var a = [];
                e <= 1 ? a.push({
                    s: t,
                    e: e
                }) : t >= 1 ? a.push({
                    s: t - 1,
                    e: e - 1
                }) : (a.push({
                    s: t,
                    e: 1
                }),
                a.push({
                    s: 0,
                    e: e - 1
                }));
                var n, o, h = [], l = a.length;
                for (n = 0; n < l; n += 1)
                    (o = a[n]).e * r < s || o.s * r > s + i || h.push([o.s * r <= s ? 0 : (o.s * r - s) / i, o.e * r >= s + i ? 1 : (o.e * r - s) / i]);
                return h.length || h.push([0, 0]),
                h
            }
            ,
            TrimModifier.prototype.releasePathsData = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    segmentsLengthPool.release(t[e]);
                return t.length = 0,
                t
            }
            ,
            TrimModifier.prototype.processShapes = function(t) {
                if (this._mdf || t) {
                    var e = this.o.v % 360 / 360;
                    if (e < 0 && (e += 1),
                    (s = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (r = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
                        var i = s;
                        s = r,
                        r = i
                    }
                    s = 1e-4 * Math.round(1e4 * s),
                    r = 1e-4 * Math.round(1e4 * r),
                    this.sValue = s,
                    this.eValue = r
                } else
                    s = this.sValue,
                    r = this.eValue;
                var s, r, a, n, o, h, l, p, f, u = this.shapes.length, c = 0;
                if (r === s)
                    for (n = 0; n < u; n += 1)
                        this.shapes[n].localShapeCollection.releaseShapes(),
                        this.shapes[n].shape._mdf = !0,
                        this.shapes[n].shape.paths = this.shapes[n].localShapeCollection,
                        this._mdf && (this.shapes[n].pathsData.length = 0);
                else if (1 === r && 0 === s || 0 === r && 1 === s) {
                    if (this._mdf)
                        for (n = 0; n < u; n += 1)
                            this.shapes[n].pathsData.length = 0,
                            this.shapes[n].shape._mdf = !0
                } else {
                    var m, d, g = [];
                    for (n = 0; n < u; n += 1)
                        if ((m = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (h = (a = m.shape.paths)._length,
                            f = 0,
                            !m.shape._mdf && m.pathsData.length)
                                f = m.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(m.pathsData),
                                o = 0; o < h; o += 1)
                                    p = bez.getSegmentsLength(a.shapes[o]),
                                    l.push(p),
                                    f += p.totalLength;
                                m.totalShapeLength = f,
                                m.pathsData = l
                            }
                            c += f,
                            m.shape._mdf = !0
                        } else
                            m.shape.paths = m.localShapeCollection;
                    var y, v = s, b = r, _ = 0;
                    for (n = u - 1; n >= 0; n -= 1)
                        if ((m = this.shapes[n]).shape._mdf) {
                            for ((d = m.localShapeCollection).releaseShapes(),
                            2 === this.m && u > 1 ? (y = this.calculateShapeEdges(s, r, m.totalShapeLength, _, c),
                            _ += m.totalShapeLength) : y = [[v, b]],
                            h = y.length,
                            o = 0; o < h; o += 1) {
                                v = y[o][0],
                                b = y[o][1],
                                g.length = 0,
                                b <= 1 ? g.push({
                                    s: m.totalShapeLength * v,
                                    e: m.totalShapeLength * b
                                }) : v >= 1 ? g.push({
                                    s: m.totalShapeLength * (v - 1),
                                    e: m.totalShapeLength * (b - 1)
                                }) : (g.push({
                                    s: m.totalShapeLength * v,
                                    e: m.totalShapeLength
                                }),
                                g.push({
                                    s: 0,
                                    e: m.totalShapeLength * (b - 1)
                                }));
                                var A = this.addShapes(m, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1) {
                                        if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                            var k = A.pop();
                                            this.addPaths(A, d),
                                            A = this.addShapes(m, g[1], k)
                                        } else
                                            this.addPaths(A, d),
                                            A = this.addShapes(m, g[1])
                                    }
                                    this.addPaths(A, d)
                                }
                            }
                            m.shape.paths = d
                        }
                }
            }
            ,
            TrimModifier.prototype.addPaths = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1)
                    e.addShape(t[i])
            }
            ,
            TrimModifier.prototype.addSegment = function(t, e, i, s, r, a, n) {
                r.setXYAt(e[0], e[1], "o", a),
                r.setXYAt(i[0], i[1], "i", a + 1),
                n && r.setXYAt(t[0], t[1], "v", a),
                r.setXYAt(s[0], s[1], "v", a + 1)
            }
            ,
            TrimModifier.prototype.addSegmentFromArray = function(t, e, i, s) {
                e.setXYAt(t[1], t[5], "o", i),
                e.setXYAt(t[2], t[6], "i", i + 1),
                s && e.setXYAt(t[0], t[4], "v", i),
                e.setXYAt(t[3], t[7], "v", i + 1)
            }
            ,
            TrimModifier.prototype.addShapes = function(t, e, i) {
                var s, r, a, n, o, h, l, p, f = t.pathsData, u = t.shape.paths.shapes, c = t.shape.paths._length, m = 0, d = [], g = !0;
                for (i ? (o = i._length,
                p = i._length) : (i = shapePool.newElement(),
                o = 0,
                p = 0),
                d.push(i),
                s = 0; s < c; s += 1) {
                    for (h = f[s].lengths,
                    i.c = u[s].c,
                    a = u[s].c ? h.length : h.length + 1,
                    r = 1; r < a; r += 1)
                        if (m + (n = h[r - 1]).addedLength < e.s)
                            m += n.addedLength,
                            i.c = !1;
                        else {
                            if (m > e.e) {
                                i.c = !1;
                                break
                            }
                            e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(u[s].v[r - 1], u[s].o[r - 1], u[s].i[r], u[s].v[r], i, o, g),
                            g = !1) : (l = bez.getNewSegment(u[s].v[r - 1], u[s].v[r], u[s].o[r - 1], u[s].i[r], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[r - 1]),
                            this.addSegmentFromArray(l, i, o, g),
                            g = !1,
                            i.c = !1),
                            m += n.addedLength,
                            o += 1
                        }
                    if (u[s].c && h.length) {
                        if (n = h[r - 1],
                        m <= e.e) {
                            var y = h[r - 1].addedLength;
                            e.s <= m && e.e >= m + y ? (this.addSegment(u[s].v[r - 1], u[s].o[r - 1], u[s].i[0], u[s].v[0], i, o, g),
                            g = !1) : (l = bez.getNewSegment(u[s].v[r - 1], u[s].v[0], u[s].o[r - 1], u[s].i[0], (e.s - m) / y, (e.e - m) / y, h[r - 1]),
                            this.addSegmentFromArray(l, i, o, g),
                            g = !1,
                            i.c = !1)
                        } else
                            i.c = !1;
                        m += n.addedLength,
                        o += 1
                    }
                    if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p),
                    i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)),
                    m > e.e)
                        break;
                    s < c - 1 && (i = shapePool.newElement(),
                    g = !0,
                    d.push(i),
                    o = 0)
                }
                return d
            }
            ,
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
                this._isAnimated = !!this.amount.effectsSequence.length
            }
            ,
            PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                var i = e / 100
                  , s = [0, 0]
                  , r = t._length
                  , a = 0;
                for (a = 0; a < r; a += 1)
                    s[0] += t.v[a][0],
                    s[1] += t.v[a][1];
                s[0] /= r,
                s[1] /= r;
                var n, o, h, l, p, f, u = shapePool.newElement();
                for (u.c = t.c,
                a = 0; a < r; a += 1)
                    n = t.v[a][0] + (s[0] - t.v[a][0]) * i,
                    o = t.v[a][1] + (s[1] - t.v[a][1]) * i,
                    h = t.o[a][0] + -((s[0] - t.o[a][0]) * i),
                    l = t.o[a][1] + -((s[1] - t.o[a][1]) * i),
                    p = t.i[a][0] + -((s[0] - t.i[a][0]) * i),
                    f = t.i[a][1] + -((s[1] - t.i[a][1]) * i),
                    u.setTripleAt(n, o, h, l, p, f, a);
                return u
            }
            ,
            PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a, n, o = this.shapes.length, h = this.amount.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (a = this.shapes[i]).localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            r = a.shape.paths._length,
                            s = 0; s < r; s += 1)
                                n.addShape(this.processPath(e[s], h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ;
            var TransformPropertyFactory = function() {
                var t = [0, 0];
                function e(t, e, i) {
                    if (this.elem = t,
                    this.frameId = -1,
                    this.propType = "transform",
                    this.data = e,
                    this.v = new Matrix,
                    this.pre = new Matrix,
                    this.appliedTransformations = 0,
                    this.initDynamicPropertyContainer(i || t),
                    e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this),
                    this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this),
                    e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this),
                        this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this),
                        this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this),
                        e.or.k[0].ti) {
                            var s, r = e.or.k.length;
                            for (s = 0; s < r; s += 1)
                                e.or.k[s].to = null,
                                e.or.k[s].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                        this.or.sh = !0
                    } else
                        this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this),
                    this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
                    this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this),
                    e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    },
                    this._isDirty = !0,
                    this.dynamicProperties.length || this.getValue(!0)
                }
                return e.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(),
                        this._mdf = this._mdf || e,
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(),
                            this._isDirty = !1),
                            this.iterateDynamicProperties(),
                            this._mdf || e) {
                                if (this.v.cloneFromProps(this.pre.props),
                                this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                                this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                                this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                                this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                                this.autoOriented) {
                                    if (i = this.elem.globalData.frameRate,
                                    this.p && this.p.keyframes && this.p.getValueAtTime)
                                        this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0),
                                        r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0),
                                        r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv,
                                        r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        s = [],
                                        r = [];
                                        var i, s, r, a = this.px, n = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (s[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0),
                                        s[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0),
                                        r[0] = a.getValueAtTime(a.keyframes[0].t / i, 0),
                                        r[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (s[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0),
                                        s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0),
                                        r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0),
                                        r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (s = [a.pv, n.pv],
                                        r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime),
                                        r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
                                    } else
                                        s = r = t;
                                    this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations = 1,
                        !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                            this.appliedTransformations = 2,
                            this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                                    return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                                this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v),
                            this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                            this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                },
                extendPrototype([DynamicPropertyContainer], e),
                e.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    this._isDirty = !0
                }
                ,
                e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty,
                {
                    getTransformProperty: function(t, i, s) {
                        return new e(t,i,s)
                    }
                }
            }();
            function RepeaterModifier() {}
            function RoundCornersModifier() {}
            function floatEqual(t, e) {
                return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
            }
            function floatZero(t) {
                return 1e-5 >= Math.abs(t)
            }
            function lerp(t, e, i) {
                return t * (1 - i) + e * i
            }
            function lerpPoint(t, e, i) {
                return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
            }
            function quadRoots(t, e, i) {
                if (0 === t)
                    return [];
                var s = e * e - 4 * t * i;
                if (s < 0)
                    return [];
                var r = -e / (2 * t);
                if (0 === s)
                    return [r];
                var a = Math.sqrt(s) / (2 * t);
                return [r - a, r + a]
            }
            function polynomialCoefficients(t, e, i, s) {
                return [3 * e - t - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
            }
            function singlePoint(t) {
                return new PolynomialBezier(t,t,t,t,!1)
            }
            function PolynomialBezier(t, e, i, s, r) {
                r && pointEqual(t, e) && (e = lerpPoint(t, s, 1 / 3)),
                r && pointEqual(i, s) && (i = lerpPoint(t, s, 2 / 3));
                var a = polynomialCoefficients(t[0], e[0], i[0], s[0])
                  , n = polynomialCoefficients(t[1], e[1], i[1], s[1]);
                this.a = [a[0], n[0]],
                this.b = [a[1], n[1]],
                this.c = [a[2], n[2]],
                this.d = [a[3], n[3]],
                this.points = [t, e, i, s]
            }
            function extrema(t, e) {
                var i = t.points[0][e]
                  , s = t.points[t.points.length - 1][e];
                if (i > s) {
                    var r = s;
                    s = i,
                    i = r
                }
                for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
                    if (a[n] > 0 && a[n] < 1) {
                        var o = t.point(a[n])[e];
                        o < i ? i = o : o > s && (s = o)
                    }
                return {
                    min: i,
                    max: s
                }
            }
            function intersectData(t, e, i) {
                var s = t.boundingBox();
                return {
                    cx: s.cx,
                    cy: s.cy,
                    width: s.width,
                    height: s.height,
                    bez: t,
                    t: (e + i) / 2,
                    t1: e,
                    t2: i
                }
            }
            function splitData(t) {
                var e = t.bez.split(.5);
                return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
            }
            function boxIntersect(t, e) {
                return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
            }
            function intersectsImpl(t, e, i, s, r, a) {
                if (boxIntersect(t, e)) {
                    if (i >= a || t.width <= s && t.height <= s && e.width <= s && e.height <= s)
                        r.push([t.t, e.t]);
                    else {
                        var n = splitData(t)
                          , o = splitData(e);
                        intersectsImpl(n[0], o[0], i + 1, s, r, a),
                        intersectsImpl(n[0], o[1], i + 1, s, r, a),
                        intersectsImpl(n[1], o[0], i + 1, s, r, a),
                        intersectsImpl(n[1], o[1], i + 1, s, r, a)
                    }
                }
            }
            function crossProduct(t, e) {
                return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
            }
            function lineIntersection(t, e, i, s) {
                var r = [t[0], t[1], 1]
                  , a = [e[0], e[1], 1]
                  , n = [i[0], i[1], 1]
                  , o = [s[0], s[1], 1]
                  , h = crossProduct(crossProduct(r, a), crossProduct(n, o));
                return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
            }
            function polarOffset(t, e, i) {
                return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
            }
            function pointDistance(t, e) {
                return Math.hypot(t[0] - e[0], t[1] - e[1])
            }
            function pointEqual(t, e) {
                return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
            }
            function ZigZagModifier() {}
            function setPoint(t, e, i, s, r, a, n) {
                var o = i - Math.PI / 2
                  , h = i + Math.PI / 2
                  , l = e[0] + Math.cos(i) * s * r
                  , p = e[1] - Math.sin(i) * s * r;
                t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
            }
            function getPerpendicularVector(t, e) {
                var i = [e[0] - t[0], e[1] - t[1]]
                  , s = -(.5 * Math.PI);
                return [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]]
            }
            function getProjectingAngle(t, e) {
                var i = 0 === e ? t.length() - 1 : e - 1
                  , s = (e + 1) % t.length()
                  , r = getPerpendicularVector(t.v[i], t.v[s]);
                return Math.atan2(0, 1) - Math.atan2(r[1], r[0])
            }
            function zigZagCorner(t, e, i, s, r, a, n) {
                var o = getProjectingAngle(e, i)
                  , h = e.v[i % e._length]
                  , l = e.v[0 === i ? e._length - 1 : i - 1]
                  , p = e.v[(i + 1) % e._length]
                  , f = 2 === a ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0
                  , u = 2 === a ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
                setPoint(t, e.v[i % e._length], o, n, s, u / (2 * (r + 1)), f / (2 * (r + 1)), a)
            }
            function zigZagSegment(t, e, i, s, r, a) {
                for (var n = 0; n < s; n += 1) {
                    var o = (n + 1) / (s + 1)
                      , h = 2 === r ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0
                      , l = e.normalAngle(o);
                    setPoint(t, e.point(o), l, a, i, h / (2 * (s + 1)), h / (2 * (s + 1)), r),
                    a = -a
                }
                return a
            }
            function linearOffset(t, e, i) {
                var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
                return [polarOffset(t, s, i), polarOffset(e, s, i)]
            }
            function offsetSegment(t, e) {
                i = (h = linearOffset(t.points[0], t.points[1], e))[0],
                s = h[1],
                r = (h = linearOffset(t.points[1], t.points[2], e))[0],
                a = h[1],
                n = (h = linearOffset(t.points[2], t.points[3], e))[0],
                o = h[1];
                var i, s, r, a, n, o, h, l = lineIntersection(i, s, r, a);
                null === l && (l = s);
                var p = lineIntersection(n, o, r, a);
                return null === p && (p = n),
                new PolynomialBezier(i,l,p,o)
            }
            function joinLines(t, e, i, s, r) {
                var a = e.points[3]
                  , n = i.points[0];
                if (3 === s || pointEqual(a, n))
                    return a;
                if (2 === s) {
                    var o = -e.tangentAngle(1)
                      , h = -i.tangentAngle(0) + Math.PI
                      , l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100))
                      , p = l ? pointDistance(l, a) : pointDistance(a, n) / 2
                      , f = polarOffset(a, o, 2 * p * roundCorner);
                    return t.setXYAt(f[0], f[1], "o", t.length() - 1),
                    f = polarOffset(n, h, 2 * p * roundCorner),
                    t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()),
                    n
                }
                var u = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, i.points[1]) ? i.points[3] : i.points[1]);
                return u && pointDistance(u, a) < r ? (t.setTripleAt(u[0], u[1], u[0], u[1], u[0], u[1], t.length()),
                u) : a
            }
            function getIntersection(t, e) {
                var i = t.intersections(e);
                return i.length && floatEqual(i[0][0], 1) && i.shift(),
                i.length ? i[0] : null
            }
            function pruneSegmentIntersection(t, e) {
                var i = t.slice()
                  , s = e.slice()
                  , r = getIntersection(t[t.length - 1], e[0]);
                return r && (i[t.length - 1] = t[t.length - 1].split(r[0])[0],
                s[0] = e[0].split(r[1])[1]),
                t.length > 1 && e.length > 1 && (r = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(r[0])[0]], [e[e.length - 1].split(r[1])[1]]] : [i, s]
            }
            function pruneIntersections(t) {
                for (var e, i = 1; i < t.length; i += 1)
                    e = pruneSegmentIntersection(t[i - 1], t[i]),
                    t[i - 1] = e[0],
                    t[i] = e[1];
                return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]),
                t[t.length - 1] = e[0],
                t[0] = e[1]),
                t
            }
            function offsetSegmentSplit(t, e) {
                var i, s, r, a, n = t.inflectionPoints();
                if (0 === n.length)
                    return [offsetSegment(t, e)];
                if (1 === n.length || floatEqual(n[1], 1))
                    return i = (r = t.split(n[0]))[0],
                    s = r[1],
                    [offsetSegment(i, e), offsetSegment(s, e)];
                i = (r = t.split(n[0]))[0];
                var o = (n[1] - n[0]) / (1 - n[0]);
                return a = (r = r[1].split(o))[0],
                s = r[1],
                [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)]
            }
            function OffsetPathModifier() {}
            function getFontProperties(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", r = e.length, a = 0; a < r; a += 1)
                    switch (e[a].toLowerCase()) {
                    case "italic":
                        s = "italic";
                        break;
                    case "bold":
                        i = "700";
                        break;
                    case "black":
                        i = "900";
                        break;
                    case "medium":
                        i = "500";
                        break;
                    case "regular":
                    case "normal":
                        i = "400";
                        break;
                    case "light":
                    case "thin":
                        i = "200"
                    }
                return {
                    style: s,
                    weight: t.fWeight || i
                }
            }
            extendPrototype([ShapeModifier], RepeaterModifier),
            RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
                this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
                this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
                this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
                this.data = e,
                this.dynamicProperties.length || this.getValue(!0),
                this._isAnimated = !!this.dynamicProperties.length,
                this.pMatrix = new Matrix,
                this.rMatrix = new Matrix,
                this.sMatrix = new Matrix,
                this.tMatrix = new Matrix,
                this.matrix = new Matrix
            }
            ,
            RepeaterModifier.prototype.applyTransforms = function(t, e, i, s, r, a) {
                var n = a ? -1 : 1
                  , o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r)
                  , h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
                t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]),
                e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                e.rotate(-s.r.v * n * r),
                e.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
                i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                i.scale(a ? 1 / o : o, a ? 1 / h : h),
                i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
            }
            ,
            RepeaterModifier.prototype.init = function(t, e, i, s) {
                for (this.elem = t,
                this.arr = e,
                this.pos = i,
                this.elemsData = s,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[i]); i > 0; )
                    i -= 1,
                    this._elements.unshift(e[i]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }
            ,
            RepeaterModifier.prototype.resetElements = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e]._processed = !1,
                    "gr" === t[e].ty && this.resetElements(t[e].it)
            }
            ,
            RepeaterModifier.prototype.cloneElements = function(t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e),
                e
            }
            ,
            RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1)
                    t[i]._render = e,
                    "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
            }
            ,
            RepeaterModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a, n = !1;
                if (this._mdf || t) {
                    var o, h = Math.ceil(this.c.v);
                    if (this._groups.length < h) {
                        for (; this._groups.length < h; ) {
                            var l = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            l.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }),
                            this.arr.splice(0, 0, l),
                            this._groups.splice(0, 0, l),
                            this._currentCopies += 1
                        }
                        this.elem.reloadShapes(),
                        n = !0
                    }
                    for (a = 0,
                    s = 0; s <= this._groups.length - 1; s += 1) {
                        if (o = a < h,
                        this._groups[s]._render = o,
                        this.changeGroupRender(this._groups[s].it, o),
                        !o) {
                            var p = this.elemsData[s].it
                              , f = p[p.length - 1];
                            0 !== f.transform.op.v ? (f.transform.op._mdf = !0,
                            f.transform.op.v = 0) : f.transform.op._mdf = !1
                        }
                        a += 1
                    }
                    this._currentCopies = h;
                    var u = this.o.v
                      , c = u % 1
                      , m = u > 0 ? Math.floor(u) : Math.ceil(u)
                      , d = this.pMatrix.props
                      , g = this.rMatrix.props
                      , y = this.sMatrix.props;
                    this.pMatrix.reset(),
                    this.rMatrix.reset(),
                    this.sMatrix.reset(),
                    this.tMatrix.reset(),
                    this.matrix.reset();
                    var v, b, _ = 0;
                    if (u > 0) {
                        for (; _ < m; )
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            _ += 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1),
                        _ += c)
                    } else if (u < 0) {
                        for (; _ > m; )
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                            _ -= 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0),
                        _ -= c)
                    }
                    for (s = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    r = 1 === this.data.m ? 1 : -1,
                    a = this._currentCopies; a; ) {
                        if (b = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length,
                        e[e.length - 1].transform.mProps._mdf = !0,
                        e[e.length - 1].transform.op._mdf = !0,
                        e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)),
                        0 !== _) {
                            for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]),
                            this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]),
                            this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
                            v = 0; v < b; v += 1)
                                i[v] = this.matrix.props[v];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(),
                            v = 0; v < b; v += 1)
                                i[v] = this.matrix.props[v];
                        _ += 1,
                        a -= 1,
                        s += r
                    }
                } else
                    for (a = this._currentCopies,
                    s = 0,
                    r = 1; a; )
                        i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props,
                        e[e.length - 1].transform.mProps._mdf = !1,
                        e[e.length - 1].transform.op._mdf = !1,
                        a -= 1,
                        s += r;
                return n
            }
            ,
            RepeaterModifier.prototype.addShape = function() {}
            ,
            extendPrototype([ShapeModifier], RoundCornersModifier),
            RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
                this._isAnimated = !!this.rd.effectsSequence.length
            }
            ,
            RoundCornersModifier.prototype.processPath = function(t, e) {
                var i, s = shapePool.newElement();
                s.c = t.c;
                var r, a, n, o, h, l, p, f, u, c, m, d, g = t._length, y = 0;
                for (i = 0; i < g; i += 1)
                    r = t.v[i],
                    n = t.o[i],
                    a = t.i[i],
                    r[0] === n[0] && r[1] === n[1] && r[0] === a[0] && r[1] === a[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1],
                    l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0,
                    p = m = r[0] + (o[0] - r[0]) * l,
                    f = d = r[1] - (r[1] - o[1]) * l,
                    u = p - (p - r[0]) * roundCorner,
                    c = f - (f - r[1]) * roundCorner,
                    s.setTripleAt(p, f, u, c, m, d, y),
                    y += 1,
                    o = i === g - 1 ? t.v[0] : t.v[i + 1],
                    l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0,
                    p = u = r[0] + (o[0] - r[0]) * l,
                    f = c = r[1] + (o[1] - r[1]) * l,
                    m = p - (p - r[0]) * roundCorner,
                    d = f - (f - r[1]) * roundCorner,
                    s.setTripleAt(p, f, u, c, m, d, y),
                    y += 1) : (s.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], y),
                    y += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y),
                    y += 1);
                return s
            }
            ,
            RoundCornersModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a, n, o = this.shapes.length, h = this.rd.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (a = this.shapes[i]).localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            r = a.shape.paths._length,
                            s = 0; s < r; s += 1)
                                n.addShape(this.processPath(e[s], h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ,
            PolynomialBezier.prototype.point = function(t) {
                return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
            }
            ,
            PolynomialBezier.prototype.derivative = function(t) {
                return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
            }
            ,
            PolynomialBezier.prototype.tangentAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[1], e[0])
            }
            ,
            PolynomialBezier.prototype.normalAngle = function(t) {
                var e = this.derivative(t);
                return Math.atan2(e[0], e[1])
            }
            ,
            PolynomialBezier.prototype.inflectionPoints = function() {
                var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(t))
                    return [];
                var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t
                  , i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                if (i < 0)
                    return [];
                var s = Math.sqrt(i);
                return floatZero(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(t) {
                    return t > 0 && t < 1
                })
            }
            ,
            PolynomialBezier.prototype.split = function(t) {
                if (t <= 0)
                    return [singlePoint(this.points[0]), this];
                if (t >= 1)
                    return [this, singlePoint(this.points[this.points.length - 1])];
                var e = lerpPoint(this.points[0], this.points[1], t)
                  , i = lerpPoint(this.points[1], this.points[2], t)
                  , s = lerpPoint(this.points[2], this.points[3], t)
                  , r = lerpPoint(e, i, t)
                  , a = lerpPoint(i, s, t)
                  , n = lerpPoint(r, a, t);
                return [new PolynomialBezier(this.points[0],e,r,n,!0), new PolynomialBezier(n,a,s,this.points[3],!0)]
            }
            ,
            PolynomialBezier.prototype.bounds = function() {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                }
            }
            ,
            PolynomialBezier.prototype.boundingBox = function() {
                var t = this.bounds();
                return {
                    left: t.x.min,
                    right: t.x.max,
                    top: t.y.min,
                    bottom: t.y.max,
                    width: t.x.max - t.x.min,
                    height: t.y.max - t.y.min,
                    cx: (t.x.max + t.x.min) / 2,
                    cy: (t.y.max + t.y.min) / 2
                }
            }
            ,
            PolynomialBezier.prototype.intersections = function(t, e, i) {
                void 0 === e && (e = 2),
                void 0 === i && (i = 7);
                var s = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, s, i),
                s
            }
            ,
            PolynomialBezier.shapeSegment = function(t, e) {
                var i = (e + 1) % t.length();
                return new PolynomialBezier(t.v[e],t.o[e],t.i[i],t.v[i],!0)
            }
            ,
            PolynomialBezier.shapeSegmentInverted = function(t, e) {
                var i = (e + 1) % t.length();
                return new PolynomialBezier(t.v[i],t.i[i],t.o[e],t.v[e],!0)
            }
            ,
            extendPrototype([ShapeModifier], ZigZagModifier),
            ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this),
                this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this),
                this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this),
                this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
            }
            ,
            ZigZagModifier.prototype.processPath = function(t, e, i, s) {
                var r = t._length
                  , a = shapePool.newElement();
                if (a.c = t.c,
                t.c || (r -= 1),
                0 === r)
                    return a;
                var n = -1
                  , o = PolynomialBezier.shapeSegment(t, 0);
                zigZagCorner(a, t, 0, e, i, s, n);
                for (var h = 0; h < r; h += 1)
                    n = zigZagSegment(a, o, e, i, s, -n),
                    o = h !== r - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % r) : null,
                    zigZagCorner(a, t, h + 1, e, i, s, n);
                return a
            }
            ,
            ZigZagModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a, n, o = this.shapes.length, h = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), p = this.pointsType.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (a = this.shapes[i]).localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            r = a.shape.paths._length,
                            s = 0; s < r; s += 1)
                                n.addShape(this.processPath(e[s], h, l, p));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ,
            extendPrototype([ShapeModifier], OffsetPathModifier),
            OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
                this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this),
                this.lineJoin = e.lj,
                this._isAnimated = 0 !== this.amount.effectsSequence.length
            }
            ,
            OffsetPathModifier.prototype.processPath = function(t, e, i, s) {
                var r = shapePool.newElement();
                r.c = t.c;
                var a, n, o, h = t.length();
                t.c || (h -= 1);
                var l = [];
                for (a = 0; a < h; a += 1)
                    o = PolynomialBezier.shapeSegment(t, a),
                    l.push(offsetSegmentSplit(o, e));
                if (!t.c)
                    for (a = h - 1; a >= 0; a -= 1)
                        o = PolynomialBezier.shapeSegmentInverted(t, a),
                        l.push(offsetSegmentSplit(o, e));
                l = pruneIntersections(l);
                var p = null
                  , f = null;
                for (a = 0; a < l.length; a += 1) {
                    var u = l[a];
                    for (f && (p = joinLines(r, f, u[0], i, s)),
                    f = u[u.length - 1],
                    n = 0; n < u.length; n += 1)
                        o = u[n],
                        p && pointEqual(o.points[0], p) ? r.setXYAt(o.points[1][0], o.points[1][1], "o", r.length() - 1) : r.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], r.length()),
                        r.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], r.length()),
                        p = o.points[3]
                }
                return l.length && joinLines(r, f, l[0][0], i, s),
                r
            }
            ,
            OffsetPathModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a, n, o = this.shapes.length, h = this.amount.v, l = this.miterLimit.v, p = this.lineJoin;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (n = (a = this.shapes[i]).localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            r = a.shape.paths._length,
                            s = 0; s < r; s += 1)
                                n.addShape(this.processPath(e[s], h, p, l));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ;
            var FontManager = function() {
                var t = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: {
                        shapes: []
                    }
                }
                  , e = [];
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"]
                  , s = [65039, 8205];
                function r(t, e) {
                    var i = createTag("span");
                    i.setAttribute("aria-hidden", !0),
                    i.style.fontFamily = e;
                    var s = createTag("span");
                    s.innerText = "giItT1WQy@!-/#",
                    i.style.position = "absolute",
                    i.style.left = "-10000px",
                    i.style.top = "-10000px",
                    i.style.fontSize = "300px",
                    i.style.fontVariant = "normal",
                    i.style.fontStyle = "normal",
                    i.style.fontWeight = "normal",
                    i.style.letterSpacing = "0",
                    i.appendChild(s),
                    document.body.appendChild(i);
                    var r = s.offsetWidth;
                    return s.style.fontFamily = function(t) {
                        var e, i = t.split(","), s = i.length, r = [];
                        for (e = 0; e < s; e += 1)
                            "sans-serif" !== i[e] && "monospace" !== i[e] && r.push(i[e]);
                        return r.join(",")
                    }(t) + ", " + e,
                    {
                        node: s,
                        w: r,
                        parent: i
                    }
                }
                function a(t, e) {
                    var i, s = document.body && e ? "svg" : "canvas", r = getFontProperties(t);
                    if ("svg" === s) {
                        var a = createNS("text");
                        a.style.fontSize = "100px",
                        a.setAttribute("font-family", t.fFamily),
                        a.setAttribute("font-style", r.style),
                        a.setAttribute("font-weight", r.weight),
                        a.textContent = "1",
                        t.fClass ? (a.style.fontFamily = "inherit",
                        a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily,
                        e.appendChild(a),
                        i = a
                    } else {
                        var n = new OffscreenCanvas(500,500).getContext("2d");
                        n.font = r.style + " " + r.weight + " 100px " + t.fFamily,
                        i = n
                    }
                    return {
                        measureText: function(t) {
                            return "svg" === s ? (i.textContent = t,
                            i.getComputedTextLength()) : i.measureText(t).width
                        }
                    }
                }
                var n = function() {
                    this.fonts = [],
                    this.chars = null,
                    this.typekitLoaded = 0,
                    this.isLoaded = !1,
                    this._warned = !1,
                    this.initTime = Date.now(),
                    this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                    this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                n.isModifier = function(t, e) {
                    var s = t.toString(16) + e.toString(16);
                    return -1 !== i.indexOf(s)
                }
                ,
                n.isZeroWidthJoiner = function(t, e) {
                    return e ? t === s[0] && e === s[1] : t === s[1]
                }
                ,
                n.isCombinedCharacter = function(t) {
                    return -1 !== e.indexOf(t)
                }
                ;
                var o = {
                    addChars: function(t) {
                        if (t) {
                            this.chars || (this.chars = []);
                            var e, i, s, r = t.length, a = this.chars.length;
                            for (e = 0; e < r; e += 1) {
                                for (i = 0,
                                s = !1; i < a; )
                                    this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0),
                                    i += 1;
                                s || (this.chars.push(t[e]),
                                a += 1)
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars)
                                return this.isLoaded = !0,
                                void (this.fonts = t.list);
                            if (!document.body)
                                return this.isLoaded = !0,
                                t.list.forEach(function(t) {
                                    t.helper = a(t),
                                    t.cache = {}
                                }),
                                void (this.fonts = t.list);
                            var i, s = t.list, n = s.length, o = n;
                            for (i = 0; i < n; i += 1) {
                                var h, l, p = !0;
                                if (s[i].loaded = !1,
                                s[i].monoCase = r(s[i].fFamily, "monospace"),
                                s[i].sansCase = r(s[i].fFamily, "sans-serif"),
                                s[i].fPath) {
                                    if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (p = !1),
                                        p) {
                                            var f = createTag("style");
                                            f.setAttribute("f-forigin", s[i].fOrigin),
                                            f.setAttribute("f-origin", s[i].origin),
                                            f.setAttribute("f-family", s[i].fFamily),
                                            f.type = "text/css",
                                            f.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}",
                                            e.appendChild(f)
                                        }
                                    } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                                        l = 0; l < h.length; l += 1)
                                            -1 !== h[l].href.indexOf(s[i].fPath) && (p = !1);
                                        if (p) {
                                            var u = createTag("link");
                                            u.setAttribute("f-forigin", s[i].fOrigin),
                                            u.setAttribute("f-origin", s[i].origin),
                                            u.type = "text/css",
                                            u.rel = "stylesheet",
                                            u.href = s[i].fPath,
                                            document.body.appendChild(u)
                                        }
                                    } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                                        l = 0; l < h.length; l += 1)
                                            s[i].fPath === h[l].src && (p = !1);
                                        if (p) {
                                            var c = createTag("link");
                                            c.setAttribute("f-forigin", s[i].fOrigin),
                                            c.setAttribute("f-origin", s[i].origin),
                                            c.setAttribute("rel", "stylesheet"),
                                            c.setAttribute("href", s[i].fPath),
                                            e.appendChild(c)
                                        }
                                    }
                                } else
                                    s[i].loaded = !0,
                                    o -= 1;
                                s[i].helper = a(s[i], e),
                                s[i].cache = {},
                                this.fonts.push(s[i])
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else
                            this.isLoaded = !0
                    },
                    getCharData: function(e, i, s) {
                        for (var r = 0, a = this.chars.length; r < a; ) {
                            if (this.chars[r].ch === e && this.chars[r].style === i && this.chars[r].fFamily === s)
                                return this.chars[r];
                            r += 1
                        }
                        return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0,
                        console.warn("Missing character from exported characters list: ", e, i, s)),
                        t
                    },
                    getFontByName: function(t) {
                        for (var e = 0, i = this.fonts.length; e < i; ) {
                            if (this.fonts[e].fName === t)
                                return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(t, e, i) {
                        var s = this.getFontByName(e)
                          , r = t.charCodeAt(0);
                        if (!s.cache[r + 1]) {
                            var a = s.helper;
                            if (" " === t) {
                                var n = a.measureText("|" + t + "|")
                                  , o = a.measureText("||");
                                s.cache[r + 1] = (n - o) / 100
                            } else
                                s.cache[r + 1] = a.measureText(t) / 100
                        }
                        return s.cache[r + 1] * i
                    },
                    checkLoadedFonts: function() {
                        var t, e, i, s = this.fonts.length, r = s;
                        for (t = 0; t < s; t += 1)
                            this.fonts[t].loaded ? r -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node,
                            i = this.fonts[t].monoCase.w,
                            e.offsetWidth !== i ? (r -= 1,
                            this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node,
                            i = this.fonts[t].sansCase.w,
                            e.offsetWidth !== i && (r -= 1,
                            this.fonts[t].loaded = !0)),
                            this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),
                            this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                };
                return n.prototype = o,
                n
            }();
            function SlotManager(t) {
                this.animationData = t
            }
            function slotFactory(t) {
                return new SlotManager(t)
            }
            function RenderableElement() {}
            SlotManager.prototype.getProp = function(t) {
                return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
            }
            ,
            RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1,
                    this.hidden = !1,
                    this.isTransparent = !1,
                    this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                    this.hide()) : this.isTransparent && (this.isTransparent = !1,
                    this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0,
                    this._mdf = !0,
                    this.isInRange = !0,
                    this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0,
                    this.isInRange = !1,
                    this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1)
                        this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            };
            var blendModeEnums, getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            },
            function(t) {
                return blendModeEnums[t] || ""
            }
            );
            function SliderEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function AngleEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function ColorEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }
            function PointEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }
            function LayerIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function MaskIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function CheckboxEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function NoValueEffect() {
                this.p = {}
            }
            function EffectsManager(t, e) {
                var i, s = t.ef || [];
                this.effectElements = [];
                var r, a = s.length;
                for (i = 0; i < a; i += 1)
                    r = new GroupEffect(s[i],e),
                    this.effectElements.push(r)
            }
            function GroupEffect(t, e) {
                this.init(t, e)
            }
            function BaseElement() {}
            function FrameElement() {}
            function FootageElement(t, e, i) {
                this.initFrame(),
                this.initRenderable(),
                this.assetData = e.getAssetData(t.refId),
                this.footageData = e.imageLoader.getAsset(this.assetData),
                this.initBaseData(t, e, i)
            }
            function AudioElement(t, e, i) {
                this.initFrame(),
                this.initRenderable(),
                this.assetData = e.getAssetData(t.refId),
                this.initBaseData(t, e, i),
                this._isPlaying = !1,
                this._canPlay = !1;
                var s = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(s),
                this._currentTime = 0,
                this.globalData.audioController.addAudio(this),
                this._volumeMultiplier = 1,
                this._volume = 1,
                this._previousVolume = null,
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                },
                this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                    k: [100]
                }, 1, .01, this)
            }
            function BaseRenderer() {}
            function TransformElement() {}
            function MaskElement(t, e, i) {
                this.data = t,
                this.element = e,
                this.globalData = i,
                this.storedData = [],
                this.masksProperties = this.data.masksProperties || [],
                this.maskElement = null;
                var s, r, a, n = this.globalData.defs, o = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(o),
                this.solidPath = "";
                var h, l, p, f, u, c, m = this.masksProperties, d = 0, g = [], y = createElementID(), v = "clipPath", b = "clip-path";
                for (r = 0; r < o; r += 1)
                    if (("a" !== m[r].mode && "n" !== m[r].mode || m[r].inv || 100 !== m[r].o.k || m[r].o.x) && (v = "mask",
                    b = "mask"),
                    "s" !== m[r].mode && "i" !== m[r].mode || 0 !== d ? p = null : ((p = createNS("rect")).setAttribute("fill", "#ffffff"),
                    p.setAttribute("width", this.element.comp.data.w || 0),
                    p.setAttribute("height", this.element.comp.data.h || 0),
                    g.push(p)),
                    a = createNS("path"),
                    "n" === m[r].mode)
                        this.viewData[r] = {
                            op: PropertyFactory.getProp(this.element, m[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, m[r], 3),
                            elem: a,
                            lastPath: ""
                        },
                        n.appendChild(a);
                    else {
                        if (d += 1,
                        a.setAttribute("fill", "s" === m[r].mode ? "#000000" : "#ffffff"),
                        a.setAttribute("clip-rule", "nonzero"),
                        0 !== m[r].x.k ? (v = "mask",
                        b = "mask",
                        c = PropertyFactory.getProp(this.element, m[r].x, 0, null, this.element),
                        s = createElementID(),
                        (f = createNS("filter")).setAttribute("id", s),
                        (u = createNS("feMorphology")).setAttribute("operator", "erode"),
                        u.setAttribute("in", "SourceGraphic"),
                        u.setAttribute("radius", "0"),
                        f.appendChild(u),
                        n.appendChild(f),
                        a.setAttribute("stroke", "s" === m[r].mode ? "#000000" : "#ffffff")) : (u = null,
                        c = null),
                        this.storedData[r] = {
                            elem: a,
                            x: c,
                            expan: u,
                            lastPath: "",
                            lastOperator: "",
                            filterId: s,
                            lastRadius: 0
                        },
                        "i" === m[r].mode) {
                            l = g.length;
                            var _ = createNS("g");
                            for (h = 0; h < l; h += 1)
                                _.appendChild(g[h]);
                            var A = createNS("mask");
                            A.setAttribute("mask-type", "alpha"),
                            A.setAttribute("id", y + "_" + d),
                            A.appendChild(a),
                            n.appendChild(A),
                            _.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"),
                            g.length = 0,
                            g.push(_)
                        } else
                            g.push(a);
                        m[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        this.viewData[r] = {
                            elem: a,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, m[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, m[r], 3),
                            invRect: p
                        },
                        this.viewData[r].prop.k || this.drawPath(m[r], this.viewData[r].prop.v, this.viewData[r])
                    }
                for (this.maskElement = createNS(v),
                o = g.length,
                r = 0; r < o; r += 1)
                    this.maskElement.appendChild(g[r]);
                d > 0 && (this.maskElement.setAttribute("id", y),
                this.element.maskedElement.setAttribute(b, "url(" + getLocationHref() + "#" + y + ")"),
                n.appendChild(this.maskElement)),
                this.viewData.length && this.element.addRenderableComponent(this)
            }
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
            GroupEffect.prototype.init = function(t, e) {
                this.data = t,
                this.effectElements = [],
                this.initDynamicPropertyContainer(e);
                var i, s, r = this.data.ef.length, a = this.data.ef;
                for (i = 0; i < r; i += 1) {
                    switch (s = null,
                    a[i].ty) {
                    case 0:
                        s = new SliderEffect(a[i],e,this);
                        break;
                    case 1:
                        s = new AngleEffect(a[i],e,this);
                        break;
                    case 2:
                        s = new ColorEffect(a[i],e,this);
                        break;
                    case 3:
                        s = new PointEffect(a[i],e,this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(a[i],e,this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(a[i],e,this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(a[i],e,this);
                        break;
                    case 5:
                        s = new EffectsManager(a[i],e,this);
                        break;
                    default:
                        s = new NoValueEffect(a[i],e,this)
                    }
                    s && this.effectElements.push(s)
                }
            }
            ,
            BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask)
                        return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                            return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    var t = getExpressionInterfaces();
                    if (t) {
                        var e = t("layer")
                          , i = t("effects")
                          , s = t("shape")
                          , r = t("text")
                          , a = t("comp");
                        this.layerInterface = e(this),
                        this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var n = i.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(n),
                        0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface),
                        this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = r(this),
                        this.layerInterface.text = this.layerInterface.textInterface)
                    }
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) {
                    this.globalData = e,
                    this.comp = i,
                    this.data = t,
                    this.layerId = createElementID(),
                    this.data.sr || (this.data.sr = 1),
                    this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            },
            FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1,
                    this.dynamicProperties = [],
                    this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var i, s = this.dynamicProperties.length;
                    for (i = 0; i < s; i += 1)
                        (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(),
                        this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0,
                        this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            },
            FootageElement.prototype.prepareFrame = function() {}
            ,
            extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
            FootageElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            FootageElement.prototype.renderFrame = function() {}
            ,
            FootageElement.prototype.destroy = function() {}
            ,
            FootageElement.prototype.initExpressions = function() {
                var t = getExpressionInterfaces();
                if (t) {
                    var e = t("footage");
                    this.layerInterface = e(this)
                }
            }
            ,
            FootageElement.prototype.getFootageData = function() {
                return this.footageData
            }
            ,
            AudioElement.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0),
                this.prepareProperties(t, !0),
                this.tm._placeholder)
                    this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e
                }
                this._volume = this.lv.v[0];
                var i = this._volume * this._volumeMultiplier;
                this._previousVolume !== i && (this._previousVolume = i,
                this.audio.volume(i))
            }
            ,
            extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
            AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(),
                this.audio.seek(this._currentTime / this.globalData.frameRate),
                this._isPlaying = !0))
            }
            ,
            AudioElement.prototype.show = function() {}
            ,
            AudioElement.prototype.hide = function() {
                this.audio.pause(),
                this._isPlaying = !1
            }
            ,
            AudioElement.prototype.pause = function() {
                this.audio.pause(),
                this._isPlaying = !1,
                this._canPlay = !1
            }
            ,
            AudioElement.prototype.resume = function() {
                this._canPlay = !0
            }
            ,
            AudioElement.prototype.setRate = function(t) {
                this.audio.rate(t)
            }
            ,
            AudioElement.prototype.volume = function(t) {
                this._volumeMultiplier = t,
                this._previousVolume = t * this._volume,
                this.audio.volume(this._previousVolume)
            }
            ,
            AudioElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            AudioElement.prototype.destroy = function() {}
            ,
            AudioElement.prototype.sourceRectAtTime = function() {}
            ,
            AudioElement.prototype.initExpressions = function() {}
            ,
            BaseRenderer.prototype.checkLayers = function(t) {
                var e, i, s = this.layers.length;
                for (this.completeLayers = !0,
                e = s - 1; e >= 0; e -= 1)
                    this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e),
                    this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }
            ,
            BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                default:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t)
                }
            }
            ,
            BaseRenderer.prototype.createCamera = function() {
                throw Error("You're using a 3d camera. Try the html renderer.")
            }
            ,
            BaseRenderer.prototype.createAudio = function(t) {
                return new AudioElement(t,this.globalData,this)
            }
            ,
            BaseRenderer.prototype.createFootage = function(t) {
                return new FootageElement(t,this.globalData,this)
            }
            ,
            BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.buildItem(t);
                this.checkPendingElements()
            }
            ,
            BaseRenderer.prototype.includeLayers = function(t) {
                this.completeLayers = !1;
                var e, i, s = t.length, r = this.layers.length;
                for (e = 0; e < s; e += 1)
                    for (i = 0; i < r; ) {
                        if (this.layers[i].id === t[e].id) {
                            this.layers[i] = t[e];
                            break
                        }
                        i += 1
                    }
            }
            ,
            BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }
            ,
            BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }
            ,
            BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                for (var s = this.elements, r = this.layers, a = 0, n = r.length; a < n; )
                    r[a].ind == e && (s[a] && !0 !== s[a] ? (i.push(s[a]),
                    s[a].setAsParent(),
                    void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a),
                    this.addPendingElement(t))),
                    a += 1
            }
            ,
            BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }
            ,
            BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var s = this.createComp(t[e]);
                        s.initExpressions(),
                        this.globalData.projectInterface.registerComposition(s)
                    }
            }
            ,
            BaseRenderer.prototype.getElementById = function(t) {
                var e, i = this.elements.length;
                for (e = 0; e < i; e += 1)
                    if (this.elements[e].data.ind === t)
                        return this.elements[e];
                return null
            }
            ,
            BaseRenderer.prototype.getElementByPath = function(t) {
                var e, i = t.shift();
                if ("number" == typeof i)
                    e = this.elements[i];
                else {
                    var s, r = this.elements.length;
                    for (s = 0; s < r; s += 1)
                        if (this.elements[s].data.nm === i) {
                            e = this.elements[s];
                            break
                        }
                }
                return 0 === t.length ? e : e.getElementByPath(t)
            }
            ,
            BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager,
                this.globalData.slotManager = slotFactory(t),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
                this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
                this.globalData.imageLoader = this.animationItem.imagePreloader,
                this.globalData.audioController = this.animationItem.audioController,
                this.globalData.frameId = 0,
                this.globalData.frameRate = t.fr,
                this.globalData.nm = t.nm,
                this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            }
            ,
            TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    },
                    this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                    this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                    this.hierarchy) {
                        var t, e = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; i < s; ) {
                                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                i += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props,
                            e.cloneFromProps(t),
                            i = 0; i < s; i += 1)
                                t = this.hierarchy[i].finalTransform.mProp.v.props,
                                e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var i, s = !0, r = this.comp; s; )
                        r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform),
                        r = r.comp) : s = !1;
                    var a, n = e.length;
                    for (i = 0; i < n; i += 1)
                        a = e[i].mat.applyToPointArray(0, 0, 0),
                        t = [t[0] - a[0], t[1] - a[1], 0];
                    return t
                },
                mHelper: new Matrix
            },
            MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }
            ,
            MaskElement.prototype.renderFrame = function(t) {
                var e, i = this.element.finalTransform.mat, s = this.masksProperties.length;
                for (e = 0; e < s; e += 1)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                    (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v),
                    "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()),
                    this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var r = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode",
                        this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")),
                        r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate",
                        this.storedData[e].elem.setAttribute("filter", null)),
                        this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }
            ,
            MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }
            ,
            MaskElement.prototype.createLayerSolidPath = function() {
                return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + " v-") + this.globalData.compSize.h + " "
            }
            ,
            MaskElement.prototype.drawPath = function(t, e, i) {
                var s, r, a = " M" + e.v[0][0] + "," + e.v[0][1];
                for (r = e._length,
                s = 1; s < r; s += 1)
                    a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                if (e.c && r > 1 && (a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
                i.lastPath !== a) {
                    var n = "";
                    i.elem && (e.c && (n = t.inv ? this.solidPath + a : a),
                    i.elem.setAttribute("d", n)),
                    i.lastPath = a
                }
            }
            ,
            MaskElement.prototype.destroy = function() {
                this.element = null,
                this.globalData = null,
                this.maskElement = null,
                this.data = null,
                this.masksProperties = null
            }
            ;
            var filtersFactory = function() {
                var t = {};
                return t.createFilter = function(t, e) {
                    var i = createNS("filter");
                    return i.setAttribute("id", t),
                    !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"),
                    i.setAttribute("x", "0%"),
                    i.setAttribute("y", "0%"),
                    i.setAttribute("width", "100%"),
                    i.setAttribute("height", "100%")),
                    i
                }
                ,
                t.createAlphaToLuminanceFilter = function() {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"),
                    t.setAttribute("color-interpolation-filters", "sRGB"),
                    t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                    t
                }
                ,
                t
            }()
              , featureSupport = function() {
                var t = {
                    maskType: !0,
                    svgLumaHidden: !0,
                    offscreenCanvas: "undefined" != typeof OffscreenCanvas
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
                /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1),
                t
            }()
              , registeredEffects = {}
              , idPrefix = "filter_result_";
            function SVGEffects(t) {
                var e, i, s = "SourceGraphic", r = t.data.ef ? t.data.ef.length : 0, a = createElementID(), n = filtersFactory.createFilter(a, !0), o = 0;
                for (this.filters = [],
                e = 0; e < r; e += 1) {
                    i = null;
                    var h = t.data.ef[e].ty;
                    registeredEffects[h] && (i = new registeredEffects[h].effect(n,t.effectsManager.effectElements[e],t,idPrefix + o,s),
                    s = idPrefix + o,
                    registeredEffects[h].countsAsEffect && (o += 1)),
                    i && this.filters.push(i)
                }
                o && (t.globalData.defs.appendChild(n),
                t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")),
                this.filters.length && t.addRenderableComponent(this)
            }
            function registerEffect(t, e, i) {
                registeredEffects[t] = {
                    effect: e,
                    countsAsEffect: i
                }
            }
            function SVGBaseElement() {}
            function HierarchyElement() {}
            function RenderableDOMElement() {}
            function IImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)),
                this.initElement(t, e, i),
                this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }
            function ProcessedElement(t, e) {
                this.elem = t,
                this.pos = e
            }
            function IShapeElement() {}
            SVGEffects.prototype.renderFrame = function(t) {
                var e, i = this.filters.length;
                for (e = 0; e < i; e += 1)
                    this.filters[e].renderFrame(t)
            }
            ,
            SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"),
                    this.transformedElement = this.layerElement,
                    this.maskedElement = this.layerElement,
                    this._sizeChanged = !1;
                    var t = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var e = createNS("g");
                        e.setAttribute("id", this.layerId),
                        e.appendChild(this.layerElement),
                        t = e,
                        this.globalData.defs.appendChild(e)
                    } else
                        this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                        t = this.matteElement,
                        this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                    0 === this.data.ty && !this.data.hd) {
                        var i = createNS("clipPath")
                          , s = createNS("path");
                        s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var r = createElementID();
                        if (i.setAttribute("id", r),
                        i.appendChild(s),
                        this.globalData.defs.appendChild(i),
                        this.checkMasks()) {
                            var a = createNS("g");
                            a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")"),
                            a.appendChild(this.layerElement),
                            this.transformedElement = a,
                            t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else
                            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
                    this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                },
                destroyBaseElement: function() {
                    this.layerElement = null,
                    this.matteElement = null,
                    this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data,this,this.globalData),
                    this.renderableEffectsManager = new SVGEffects(this)
                },
                getMatte: function(t) {
                    if (this.matteMasks || (this.matteMasks = {}),
                    !this.matteMasks[t]) {
                        var e, i, s, r, a = this.layerId + "_" + t;
                        if (1 === t || 3 === t) {
                            var n = createNS("mask");
                            n.setAttribute("id", a),
                            n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"),
                            (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                            n.appendChild(s),
                            this.globalData.defs.appendChild(n),
                            featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"),
                            e = createElementID(),
                            i = filtersFactory.createFilter(e),
                            this.globalData.defs.appendChild(i),
                            i.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                            (r = createNS("g")).appendChild(s),
                            n.appendChild(r),
                            r.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
                        } else if (2 === t) {
                            var o = createNS("mask");
                            o.setAttribute("id", a),
                            o.setAttribute("mask-type", "alpha");
                            var h = createNS("g");
                            o.appendChild(h),
                            e = createElementID(),
                            i = filtersFactory.createFilter(e);
                            var l = createNS("feComponentTransfer");
                            l.setAttribute("in", "SourceGraphic"),
                            i.appendChild(l);
                            var p = createNS("feFuncA");
                            p.setAttribute("type", "table"),
                            p.setAttribute("tableValues", "1.0 0.0"),
                            l.appendChild(p),
                            this.globalData.defs.appendChild(i);
                            var f = createNS("rect");
                            f.setAttribute("width", this.comp.data.w),
                            f.setAttribute("height", this.comp.data.h),
                            f.setAttribute("x", "0"),
                            f.setAttribute("y", "0"),
                            f.setAttribute("fill", "#ffffff"),
                            f.setAttribute("opacity", "0"),
                            h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"),
                            h.appendChild(f),
                            (s = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                            h.appendChild(s),
                            featureSupport.maskType || (o.setAttribute("mask-type", "luminance"),
                            i.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                            r = createNS("g"),
                            h.appendChild(f),
                            r.appendChild(this.layerElement),
                            h.appendChild(r)),
                            this.globalData.defs.appendChild(o)
                        }
                        this.matteMasks[t] = a
                    }
                    return this.matteMasks[t]
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
                }
            },
            HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [],
                    this._isParent = !1,
                    this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            },
            extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(t, e, i) {
                    this.initFrame(),
                    this.initBaseData(t, e, i),
                    this.initTransform(t, e, i),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none",
                    this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"),
                    this.hidden = !1,
                    this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1,
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null,
                    this.destroyBaseElement()
                }
            })], RenderableDOMElement),
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
            IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
                this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.innerElem)
            }
            ,
            IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }
            ,
            IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, i = this.shapeModifiers.length;
                    for (e = 0; e < i; e += 1)
                        this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e; )
                        if (this.shapeModifiers[0].isAnimatedWithShape(t))
                            return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1)
                            this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
                            ;
                    }
                },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, i = 0, s = e.length; i < s; ) {
                        if (e[i].elem === t)
                            return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var i = this.processedElements, s = i.length; s; )
                        if (i[s -= 1].elem === t)
                            return void (i[s].pos = e);
                    i.push(new ProcessedElement(t,e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange)
                }
            };
            var lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            }
              , lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            };
            function SVGShapeData(t, e, i) {
                this.caches = [],
                this.styles = [],
                this.transformers = t,
                this.lStr = "",
                this.sh = i,
                this.lvl = e,
                this._isAnimated = !!i.k;
                for (var s = 0, r = t.length; s < r; ) {
                    if (t[s].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    s += 1
                }
            }
            function SVGStyleData(t, e) {
                this.data = t,
                this.type = t.ty,
                this.d = "",
                this.lvl = e,
                this._mdf = !1,
                this.closed = !0 === t.hd,
                this.pElem = createNS("path"),
                this.msElem = null
            }
            function DashProperty(t, e, i, s) {
                this.elem = t,
                this.frameId = -1,
                this.dataProps = createSizedArray(e.length),
                this.renderer = i,
                this.k = !1,
                this.dashStr = "",
                this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
                this.dashoffset = createTypedArray("float32", 1),
                this.initDynamicPropertyContainer(s);
                var r, a, n = e.length || 0;
                for (r = 0; r < n; r += 1)
                    a = PropertyFactory.getProp(t, e[r].v, 0, 0, this),
                    this.k = a.k || this.k,
                    this.dataProps[r] = {
                        n: e[r].n,
                        p: a
                    };
                this.k || this.getValue(!0),
                this._isAnimated = this.k
            }
            function SVGStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t,e.d || {},"svg",this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = i,
                this._isAnimated = !!this._isAnimated
            }
            function SVGFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = i
            }
            function SVGNoStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.style = i
            }
            function GradientProperty(t, e, i) {
                this.data = e,
                this.c = createTypedArray("uint8c", 4 * e.p);
                var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", s),
                this._cmdf = !1,
                this._omdf = !1,
                this._collapsable = this.checkCollapsable(),
                this._hasOpacity = s,
                this.initDynamicPropertyContainer(i),
                this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
                this.k = this.prop.k,
                this.getValue(!0)
            }
            function SVGGradientFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.initGradientData(t, e, i)
            }
            function SVGGradientStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t,e.d || {},"svg",this),
                this.initGradientData(t, e, i),
                this._isAnimated = !!this._isAnimated
            }
            function ShapeGroupData() {
                this.it = [],
                this.prevViewData = [],
                this.gr = createNS("g")
            }
            function SVGTransformData(t, e, i) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: i
                },
                this.elements = [],
                this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }
            ,
            SVGStyleData.prototype.reset = function() {
                this.d = "",
                this._mdf = !1
            }
            ,
            DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId,
                this.iterateDynamicProperties(),
                this._mdf = this._mdf || t,
                this._mdf)) {
                    var e = 0
                      , i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""),
                    e = 0; e < i; e += 1)
                        "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], DashProperty),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
            GradientProperty.prototype.comparePoints = function(t, e) {
                for (var i = 0, s = this.o.length / 2; i < s; ) {
                    if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01)
                        return !1;
                    i += 1
                }
                return !0
            }
            ,
            GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4)
                    return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e; ) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                            return !1;
                        t += 1
                    }
                else if (!this.comparePoints(this.data.k.k, this.data.p))
                    return !1;
                return !0
            }
            ,
            GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(),
                this._mdf = !1,
                this._cmdf = !1,
                this._omdf = !1,
                this.prop._mdf || t) {
                    var e, i, s, r = 4 * this.data.p;
                    for (e = 0; e < r; e += 1)
                        i = e % 4 == 0 ? 100 : 255,
                        s = Math.round(this.prop.v[e] * i),
                        this.c[e] !== s && (this.c[e] = s,
                        this._cmdf = !t);
                    if (this.o.length)
                        for (r = this.prop.v.length,
                        e = 4 * this.data.p; e < r; e += 1)
                            i = e % 2 == 0 ? 100 : 1,
                            s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                            this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s,
                            this._omdf = !t);
                    this._mdf = !t
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], GradientProperty),
            SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
                this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
                this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this),
                this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this),
                this.g = new GradientProperty(t,e.g,this),
                this.style = i,
                this.stops = [],
                this.setGradientData(i.pElem, e),
                this.setGradientOpacity(e, i),
                this._isAnimated = !!this._isAnimated
            }
            ,
            SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var i = createElementID()
                  , s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                s.setAttribute("id", i),
                s.setAttribute("spreadMethod", "pad"),
                s.setAttribute("gradientUnits", "userSpaceOnUse");
                var r, a, n, o = [];
                for (n = 4 * e.g.p,
                a = 0; a < n; a += 4)
                    r = createNS("stop"),
                    s.appendChild(r),
                    o.push(r);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"),
                this.gf = s,
                this.cst = o
            }
            ,
            SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i, s, r, a = createNS("mask"), n = createNS("path");
                    a.appendChild(n);
                    var o = createElementID()
                      , h = createElementID();
                    a.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o),
                    l.setAttribute("spreadMethod", "pad"),
                    l.setAttribute("gradientUnits", "userSpaceOnUse"),
                    r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var p = this.stops;
                    for (s = 4 * t.g.p; s < r; s += 2)
                        (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                        l.appendChild(i),
                        p.push(i);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"),
                    "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                    n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                    1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
                    this.of = l,
                    this.ms = a,
                    this.ost = p,
                    this.maskId = h,
                    e.msElem = n
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var buildShapeString = function(t, e, i, s) {
                if (0 === e)
                    return "";
                var r, a = t.o, n = t.i, o = t.v, h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                for (r = 1; r < e; r += 1)
                    h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[r][0], n[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
                return i && e && (h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]) + "z"),
                h
            }
              , SVGElementsRenderer = function() {
                var t = new Matrix
                  , e = new Matrix;
                function i(t, e, i) {
                    (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
                    (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                }
                function s() {}
                function r(i, s, r) {
                    var a, n, o, h, l, p, f, u, c, m, d, g = s.styles.length, y = s.lvl;
                    for (p = 0; p < g; p += 1) {
                        if (h = s.sh._mdf || r,
                        s.styles[p].lvl < y) {
                            for (u = e.reset(),
                            m = y - s.styles[p].lvl,
                            d = s.transformers.length - 1; !h && m > 0; )
                                h = s.transformers[d].mProps._mdf || h,
                                m -= 1,
                                d -= 1;
                            if (h)
                                for (m = y - s.styles[p].lvl,
                                d = s.transformers.length - 1; m > 0; )
                                    c = s.transformers[d].mProps.v.props,
                                    u.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]),
                                    m -= 1,
                                    d -= 1
                        } else
                            u = t;
                        if (n = (f = s.sh.paths)._length,
                        h) {
                            for (o = "",
                            a = 0; a < n; a += 1)
                                (l = f.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, u));
                            s.caches[p] = o
                        } else
                            o = s.caches[p];
                        s.styles[p].d += !0 === i.hd ? "" : o,
                        s.styles[p]._mdf = h || s.styles[p]._mdf
                    }
                }
                function a(t, e, i) {
                    var s = e.style;
                    (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                    (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                }
                function n(t, e, i) {
                    o(t, e, i),
                    h(t, e, i)
                }
                function o(t, e, i) {
                    var s, r, a, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, f = e.e.v;
                    if (e.o._mdf || i) {
                        var u = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(u, e.o.v)
                    }
                    if (e.s._mdf || i) {
                        var c = 1 === t.t ? "x1" : "cx"
                          , m = "x1" === c ? "y1" : "cy";
                        h.setAttribute(c, p[0]),
                        h.setAttribute(m, p[1]),
                        l && !e.g._collapsable && (e.of.setAttribute(c, p[0]),
                        e.of.setAttribute(m, p[1]))
                    }
                    if (e.g._cmdf || i) {
                        s = e.cst;
                        var d = e.g.c;
                        for (a = s.length,
                        r = 0; r < a; r += 1)
                            (n = s[r]).setAttribute("offset", d[4 * r] + "%"),
                            n.setAttribute("stop-color", "rgb(" + d[4 * r + 1] + "," + d[4 * r + 2] + "," + d[4 * r + 3] + ")")
                    }
                    if (l && (e.g._omdf || i)) {
                        var g = e.g.o;
                        for (a = (s = e.g._collapsable ? e.cst : e.ost).length,
                        r = 0; r < a; r += 1)
                            n = s[r],
                            e.g._collapsable || n.setAttribute("offset", g[2 * r] + "%"),
                            n.setAttribute("stop-opacity", g[2 * r + 1])
                    }
                    if (1 === t.t)
                        (e.e._mdf || i) && (h.setAttribute("x2", f[0]),
                        h.setAttribute("y2", f[1]),
                        l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]),
                        e.of.setAttribute("y2", f[1])));
                    else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)),
                    h.setAttribute("r", o),
                    l && !e.g._collapsable && e.of.setAttribute("r", o)),
                    e.e._mdf || e.h._mdf || e.a._mdf || i) {
                        o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                        var y = Math.atan2(f[1] - p[1], f[0] - p[0])
                          , v = e.h.v;
                        v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                        var b = o * v
                          , _ = Math.cos(y + e.a.v) * b + p[0]
                          , A = Math.sin(y + e.a.v) * b + p[1];
                        h.setAttribute("fx", _),
                        h.setAttribute("fy", A),
                        l && !e.g._collapsable && (e.of.setAttribute("fx", _),
                        e.of.setAttribute("fy", A))
                    }
                }
                function h(t, e, i) {
                    var s = e.style
                      , r = e.d;
                    r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute("stroke-dasharray", r.dashStr),
                    s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])),
                    e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                    (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v),
                    (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v),
                    s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                }
                return {
                    createRenderFunction: function(t) {
                        switch (t.ty) {
                        case "fl":
                            return a;
                        case "gf":
                            return o;
                        case "gs":
                            return n;
                        case "st":
                            return h;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return r;
                        case "tr":
                            return i;
                        case "no":
                            return s;
                        default:
                            return null
                        }
                    }
                }
            }();
            function SVGShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.initElement(t, e, i),
                this.prevViewData = []
            }
            function LetterProps(t, e, i, s, r, a) {
                this.o = t,
                this.sw = e,
                this.sc = i,
                this.fc = s,
                this.m = r,
                this.p = a,
                this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!i,
                    fc: !!s,
                    m: !0,
                    p: !0
                }
            }
            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame,
                this.pv = "",
                this.v = "",
                this.kf = !1,
                this._isFirstFrame = !0,
                this._mdf = !1,
                e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
                this.data = e,
                this.elem = t,
                this.comp = this.elem.comp,
                this.keysIndex = 0,
                this.canResize = !1,
                this.minimumFontSize = 1,
                this.effectsSequence = [],
                this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                },
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() || this.completeTextData(this.currentData)
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
            SVGShapeElement.prototype.initSecondaryElement = function() {}
            ,
            SVGShapeElement.prototype.identityMatrix = new Matrix,
            SVGShapeElement.prototype.buildExpressionInterface = function() {}
            ,
            SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes()
            }
            ,
            SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, i, s, r = this.shapes.length, a = this.stylesList.length, n = [], o = !1;
                for (i = 0; i < a; i += 1) {
                    for (s = this.stylesList[i],
                    o = !1,
                    n.length = 0,
                    t = 0; t < r; t += 1)
                        -1 !== (e = this.shapes[t]).styles.indexOf(s) && (n.push(e),
                        o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n)
                }
            }
            ,
            SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e].setAsAnimated()
            }
            ,
            SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var i, s = new SVGStyleData(t,e), r = s.pElem;
                return "st" === t.ty ? i = new SVGStrokeStyleData(this,t,s) : "fl" === t.ty ? i = new SVGFillStyleData(this,t,s) : "gf" === t.ty || "gs" === t.ty ? (i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this,t,s),
                this.globalData.defs.appendChild(i.gf),
                i.maskId && (this.globalData.defs.appendChild(i.ms),
                this.globalData.defs.appendChild(i.of),
                r.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new SVGNoStyleData(this,t,s)),
                "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                r.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                r.setAttribute("fill-opacity", "0"),
                1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && r.setAttribute("fill-rule", "evenodd"),
                t.ln && r.setAttribute("id", t.ln),
                t.cl && r.setAttribute("class", t.cl),
                t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)),
                this.stylesList.push(s),
                this.addToAnimatedContents(t, i),
                i
            }
            ,
            SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln),
                t.cl && e.gr.setAttribute("class", t.cl),
                t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                e
            }
            ,
            SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var i = TransformPropertyFactory.getTransformProperty(this, t, this)
                  , s = new SVGTransformData(i,i.o,e);
                return this.addToAnimatedContents(t, s),
                s
            }
            ,
            SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                var s = 4;
                "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                var r = new SVGShapeData(e,i,ShapePropertyFactory.getShapeProp(this, t, s, this));
                return this.shapes.push(r),
                this.addShapeToModifiers(r),
                this.addToAnimatedContents(t, r),
                r
            }
            ,
            SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var i = 0, s = this.animatedContents.length; i < s; ) {
                    if (this.animatedContents[i].element === e)
                        return;
                    i += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }
            ,
            SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, i = t.styles, s = this.stylesList.length;
                for (e = 0; e < s; e += 1)
                    this.stylesList[e].closed || i.push(this.stylesList[e])
            }
            ,
            SVGShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                var t, e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }
            ,
            SVGShapeElement.prototype.searchShapes = function(t, e, i, s, r, a, n) {
                var o, h, l, p, f, u, c = [].concat(a), m = t.length - 1, d = [], g = [];
                for (o = m; o >= 0; o -= 1) {
                    if ((u = this.searchProcessedElement(t[o])) ? e[o] = i[u - 1] : t[o]._render = n,
                    "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
                        u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r),
                        t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem),
                        d.push(e[o].style);
                    else if ("gr" === t[o].ty) {
                        if (u)
                            for (l = e[o].it.length,
                            h = 0; h < l; h += 1)
                                e[o].prevViewData[h] = e[o].it[h];
                        else
                            e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, c, n),
                        t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
                    } else
                        "tr" === t[o].ty ? (u || (e[o] = this.createTransformElement(t[o], s)),
                        p = e[o].transform,
                        c.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (u || (e[o] = this.createShapeElement(t[o], c, r)),
                        this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (u ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                        e[o] = f,
                        this.shapeModifiers.push(f)),
                        g.push(f)) : "rp" === t[o].ty && (u ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty),
                        e[o] = f,
                        f.init(this, t, o, e),
                        this.shapeModifiers.push(f),
                        n = !1),
                        g.push(f));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (m = d.length,
                o = 0; o < m; o += 1)
                    d[o].closed = !0;
                for (m = g.length,
                o = 0; o < m; o += 1)
                    g[o].closed = !0
            }
            ,
            SVGShapeElement.prototype.renderInnerContent = function() {
                this.renderModifiers();
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].reset();
                for (this.renderShape(),
                t = 0; t < e; t += 1)
                    (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
                    this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
                    this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }
            ,
            SVGShapeElement.prototype.renderShape = function() {
                var t, e, i = this.animatedContents.length;
                for (t = 0; t < i; t += 1)
                    e = this.animatedContents[t],
                    (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            }
            ,
            SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(),
                this.shapesData = null,
                this.itemsData = null
            }
            ,
            LetterProps.prototype.update = function(t, e, i, s, r, a) {
                this._mdf.o = !1,
                this._mdf.sw = !1,
                this._mdf.sc = !1,
                this._mdf.fc = !1,
                this._mdf.m = !1,
                this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t,
                this._mdf.o = !0,
                n = !0),
                this.sw !== e && (this.sw = e,
                this._mdf.sw = !0,
                n = !0),
                this.sc !== i && (this.sc = i,
                this._mdf.sc = !0,
                n = !0),
                this.fc !== s && (this.fc = s,
                this._mdf.fc = !0,
                n = !0),
                this.m !== r && (this.m = r,
                this._mdf.m = !0,
                n = !0),
                a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a,
                this._mdf.p = !0,
                n = !0),
                n
            }
            ,
            TextProperty.prototype.defaultBoxWidth = [0, 0],
            TextProperty.prototype.copyData = function(t, e) {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t),
                this.currentData = t,
                this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
                this._mdf = !0
            }
            ,
            TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }
            ,
            TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1,
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
            }
            ,
            TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData
                      , i = this.keysIndex;
                    if (this.lock)
                        this.setCurrentData(this.currentData);
                    else {
                        this.lock = !0,
                        this._mdf = !1;
                        var s, r = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                        for (s = 0; s < r; s += 1)
                            a = i !== this.keysIndex ? this.effectsSequence[s](a, a.t) : this.effectsSequence[s](this.currentData, a.t);
                        e !== a && this.setCurrentData(a),
                        this.v = this.currentData,
                        this.pv = this.v,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
                }
            }
            ,
            TextProperty.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e); )
                    i += 1;
                return this.keysIndex !== i && (this.keysIndex = i),
                this.data.d.k[this.keysIndex].s
            }
            ,
            TextProperty.prototype.buildFinalText = function(t) {
                for (var e, i, s = [], r = 0, a = t.length, n = !1; r < a; )
                    e = t.charCodeAt(r),
                    FontManager.isCombinedCharacter(e) ? s[s.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343 ? (n || FontManager.isModifier(e, i) ? (s[s.length - 1] += t.substr(r, 2),
                    n = !1) : s.push(t.substr(r, 2)),
                    r += 1) : s.push(t.charAt(r)) : e > 56319 ? (i = t.charCodeAt(r + 1),
                    FontManager.isZeroWidthJoiner(e, i) ? (n = !0,
                    s[s.length - 1] += t.substr(r, 2),
                    r += 1) : s.push(t.charAt(r))) : FontManager.isZeroWidthJoiner(e) ? (s[s.length - 1] += t.charAt(r),
                    n = !0) : s.push(t.charAt(r)),
                    r += 1;
                return s
            }
            ,
            TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, i, s, r, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], f = 0, u = l.m.g, c = 0, m = 0, d = 0, g = [], y = 0, v = 0, b = h.getFontByName(t.f), _ = 0, A = getFontProperties(b);
                t.fWeight = A.weight,
                t.fStyle = A.style,
                t.finalSize = t.s,
                t.finalText = this.buildFinalText(t.t),
                i = t.finalText.length,
                t.finalLineHeight = t.lh;
                var k, P = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var x, D, S = !0, M = t.sz[0], w = t.sz[1]; S; ) {
                        x = 0,
                        y = 0,
                        i = (D = this.buildFinalText(t.t)).length,
                        P = t.tr / 1e3 * t.finalSize;
                        var T = -1;
                        for (e = 0; e < i; e += 1)
                            k = D[e].charCodeAt(0),
                            s = !1,
                            " " === D[e] ? T = e : 13 !== k && 3 !== k || (y = 0,
                            s = !0,
                            x += t.finalLineHeight || 1.2 * t.finalSize),
                            h.chars ? (o = h.getCharData(D[e], b.fStyle, b.fFamily),
                            _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(D[e], t.f, t.finalSize),
                            y + _ > M && " " !== D[e] ? (-1 === T ? i += 1 : e = T,
                            x += t.finalLineHeight || 1.2 * t.finalSize,
                            D.splice(e, T === e ? 1 : 0, "\r"),
                            T = -1,
                            y = 0) : y += _ + P;
                        x += b.ascent * t.finalSize / 100,
                        this.canResize && t.finalSize > this.minimumFontSize && w < x ? (t.finalSize -= 1,
                        t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = D,
                        i = t.finalText.length,
                        S = !1)
                    }
                y = -P,
                _ = 0;
                var C, E = 0;
                for (e = 0; e < i; e += 1)
                    if (s = !1,
                    13 === (k = (C = t.finalText[e]).charCodeAt(0)) || 3 === k ? (E = 0,
                    g.push(y),
                    v = y > v ? y : v,
                    y = -2 * P,
                    r = "",
                    s = !0,
                    d += 1) : r = C,
                    h.chars ? (o = h.getCharData(C, b.fStyle, h.getFontByName(t.f).fFamily),
                    _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(r, t.f, t.finalSize),
                    " " === C ? E += _ + P : (y += _ + P + E,
                    E = 0),
                    p.push({
                        l: _,
                        an: _,
                        add: c,
                        n: s,
                        anIndexes: [],
                        val: r,
                        line: d,
                        animatorJustifyOffset: 0
                    }),
                    2 == u) {
                        if (c += _,
                        "" === r || " " === r || e === i - 1) {
                            for ("" !== r && " " !== r || (c -= _); m <= e; )
                                p[m].an = c,
                                p[m].ind = f,
                                p[m].extra = _,
                                m += 1;
                            f += 1,
                            c = 0
                        }
                    } else if (3 == u) {
                        if (c += _,
                        "" === r || e === i - 1) {
                            for ("" === r && (c -= _); m <= e; )
                                p[m].an = c,
                                p[m].ind = f,
                                p[m].extra = _,
                                m += 1;
                            c = 0,
                            f += 1
                        }
                    } else
                        p[f].ind = f,
                        p[f].extra = 0,
                        f += 1;
                if (t.l = p,
                v = y > v ? y : v,
                g.push(y),
                t.sz)
                    t.boxWidth = t.sz[0],
                    t.justifyOffset = 0;
                else
                    switch (t.boxWidth = v,
                    t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                    }
                t.lineWidths = g;
                var F, I, L, V, R = l.a;
                n = R.length;
                var O = [];
                for (a = 0; a < n; a += 1) {
                    for ((F = R[a]).a.sc && (t.strokeColorAnim = !0),
                    F.a.sw && (t.strokeWidthAnim = !0),
                    (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0),
                    V = 0,
                    L = F.s.b,
                    e = 0; e < i; e += 1)
                        (I = p[e]).anIndexes[a] = V,
                        (1 == L && "" !== I.val || 2 == L && "" !== I.val && " " !== I.val || 3 == L && (I.n || " " == I.val || e == i - 1) || 4 == L && (I.n || e == i - 1)) && (1 === F.s.rn && O.push(V),
                        V += 1);
                    l.a[a].s.totalChars = V;
                    var z, B = -1;
                    if (1 === F.s.rn)
                        for (e = 0; e < i; e += 1)
                            B != (I = p[e]).anIndexes[a] && (B = I.anIndexes[a],
                            z = O.splice(Math.floor(Math.random() * O.length), 1)[0]),
                            I.anIndexes[a] = z
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
                t.ls = t.ls || 0,
                t.ascent = b.ascent * t.finalSize / 100
            }
            ,
            TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                i = this.copyData(i, t),
                this.data.d.k[e].s = i,
                this.recalculate(e),
                this.setCurrentData(i),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1,
                this.keysIndex = 0,
                this._isFirstFrame = !0,
                this.getValue(e)
            }
            ,
            TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            }
            ;
            var TextSelectorProp = function() {
                var t = Math.max
                  , e = Math.min
                  , i = Math.floor;
                function s(t, e) {
                    this._currentTextLength = -1,
                    this.k = !1,
                    this.data = e,
                    this.elem = t,
                    this.comp = t.comp,
                    this.finalS = 0,
                    this.finalE = 0,
                    this.initDynamicPropertyContainer(t),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this),
                    this.e = "e"in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    },
                    this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this),
                    this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this),
                    this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this),
                    this.sm = PropertyFactory.getProp(t, e.sm || {
                        k: 100
                    }, 0, 0, this),
                    this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
                    this.dynamicProperties.length || this.getValue()
                }
                return s.prototype = {
                    getMult: function(s) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var r = 0
                          , a = 0
                          , n = 1
                          , o = 1;
                        this.ne.v > 0 ? r = this.ne.v / 100 : a = -this.ne.v / 100,
                        this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var h = BezierFactory.getBezierEasing(r, a, n, o).get
                          , l = 0
                          , p = this.finalS
                          , f = this.finalE
                          , u = this.data.sh;
                        if (2 === u)
                            l = h(l = f === p ? s >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                        else if (3 === u)
                            l = h(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (s - p) / (f - p), 1)));
                        else if (4 === u)
                            f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (s - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5),
                            l = h(l);
                        else if (5 === u) {
                            if (f === p)
                                l = 0;
                            else {
                                var c = f - p
                                  , m = -c / 2 + (s = e(t(0, s + .5 - p), f - p))
                                  , d = c / 2;
                                l = Math.sqrt(1 - m * m / (d * d))
                            }
                            l = h(l)
                        } else
                            6 === u ? l = h(l = f === p ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (s = e(t(0, s + .5 - p), f - p)) / (f - p))) / 2) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1))),
                            l = h(l));
                        if (100 !== this.sm.v) {
                            var g = .01 * this.sm.v;
                            0 === g && (g = 1e-8);
                            var y = .5 - .5 * g;
                            l < y ? l = 0 : (l = (l - y) / g) > 1 && (l = 1)
                        }
                        return l * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(),
                        this._mdf = t || this._mdf,
                        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                        t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars
                          , i = this.o.v / e
                          , s = this.s.v / e + i
                          , r = this.e.v / e + i;
                        if (s > r) {
                            var a = s;
                            s = r,
                            r = a
                        }
                        this.finalS = s,
                        this.finalE = r
                    }
                },
                extendPrototype([DynamicPropertyContainer], s),
                {
                    getTextSelectorProp: function(t, e, i) {
                        return new s(t,e,i)
                    }
                }
            }();
            function TextAnimatorDataProperty(t, e, i) {
                var s = {
                    propType: !1
                }
                  , r = PropertyFactory.getProp
                  , a = e.a;
                this.a = {
                    r: a.r ? r(t, a.r, 0, degToRads, i) : s,
                    rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
                    ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
                    sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
                    sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
                    s: a.s ? r(t, a.s, 1, .01, i) : s,
                    a: a.a ? r(t, a.a, 1, 0, i) : s,
                    o: a.o ? r(t, a.o, 0, .01, i) : s,
                    p: a.p ? r(t, a.p, 1, 0, i) : s,
                    sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
                    sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
                    fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
                    fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
                    fs: a.fs ? r(t, a.fs, 0, .01, i) : s,
                    fb: a.fb ? r(t, a.fb, 0, .01, i) : s,
                    t: a.t ? r(t, a.t, 0, 0, i) : s
                },
                this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i),
                this.s.t = e.s.t
            }
            function TextAnimatorProperty(t, e, i) {
                this._isFirstFrame = !0,
                this._hasMaskedPath = !1,
                this._frameId = -1,
                this._textData = t,
                this._renderType = e,
                this._elem = i,
                this._animatorsData = createSizedArray(this._textData.a.length),
                this._pathData = {},
                this._moreOptions = {
                    alignment: {}
                },
                this.renderedLetters = [],
                this.lettersChangedFlag = !1,
                this.initDynamicPropertyContainer(i)
            }
            function ITextElement() {}
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, i = this._textData.a.length, s = PropertyFactory.getProp;
                for (t = 0; t < i; t += 1)
                    e = this._textData.a[t],
                    this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,e,this);
                this._textData.p && "m"in this._textData.p ? (this._pathData = {
                    a: s(this._elem, this._textData.p.a, 0, 0, this),
                    f: s(this._elem, this._textData.p.f, 0, 0, this),
                    l: s(this._elem, this._textData.p.l, 0, 0, this),
                    r: s(this._elem, this._textData.p.r, 0, 0, this),
                    p: s(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                },
                this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
                this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
            }
            ,
            TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e,
                this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i, s, r, a, n, o, h, l, p, f, u, c, m, d, g, y, v, b, _, A = this._moreOptions.alignment.v, k = this._animatorsData, P = this._textData, x = this.mHelper, D = this._renderType, S = this.renderedLetters.length, M = t.l;
                    if (this._hasMaskedPath) {
                        if (_ = this._pathData.m,
                        !this._pathData.n || this._pathData._mdf) {
                            var w, T = _.v;
                            for (this._pathData.r.v && (T = T.reverse()),
                            n = {
                                tLength: 0,
                                segments: []
                            },
                            a = T._length - 1,
                            y = 0,
                            r = 0; r < a; r += 1)
                                w = bez.buildBezierData(T.v[r], T.v[r + 1], [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]], [T.i[r + 1][0] - T.v[r + 1][0], T.i[r + 1][1] - T.v[r + 1][1]]),
                                n.tLength += w.segmentLength,
                                n.segments.push(w),
                                y += w.segmentLength;
                            r = a,
                            _.v.c && (w = bez.buildBezierData(T.v[r], T.v[0], [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]),
                            n.tLength += w.segmentLength,
                            n.segments.push(w),
                            y += w.segmentLength),
                            this._pathData.pi = n
                        }
                        if (n = this._pathData.pi,
                        o = this._pathData.f.v,
                        u = 0,
                        f = 1,
                        l = 0,
                        p = !0,
                        d = n.segments,
                        o < 0 && _.v.c)
                            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                            f = (m = d[u = d.length - 1].points).length - 1; o < 0; )
                                o += m[f].partialLength,
                                (f -= 1) < 0 && (f = (m = d[u -= 1].points).length - 1);
                        c = (m = d[u].points)[f - 1],
                        g = (h = m[f]).partialLength
                    }
                    a = M.length,
                    i = 0,
                    s = 0;
                    var C, E, F, I, L, V = 1.2 * t.finalSize * .714, R = !0;
                    F = k.length;
                    var O, z, B, N, G, j, q, W, X, Y, H, K, J = -1, Z = o, U = u, Q = f, $ = -1, tt = "", te = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var ti = 0
                          , ts = 0
                          , tr = 2 === t.j ? -.5 : -1
                          , ta = 0
                          , tn = !0;
                        for (r = 0; r < a; r += 1)
                            if (M[r].n) {
                                for (ti && (ti += ts); ta < r; )
                                    M[ta].animatorJustifyOffset = ti,
                                    ta += 1;
                                ti = 0,
                                tn = !0
                            } else {
                                for (E = 0; E < F; E += 1)
                                    (C = k[E].a).t.propType && (tn && 2 === t.j && (ts += C.t.v * tr),
                                    (L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars)).length ? ti += C.t.v * L[0] * tr : ti += C.t.v * L * tr);
                                tn = !1
                            }
                        for (ti && (ti += ts); ta < r; )
                            M[ta].animatorJustifyOffset = ti,
                            ta += 1
                    }
                    for (r = 0; r < a; r += 1) {
                        if (x.reset(),
                        N = 1,
                        M[r].n)
                            i = 0,
                            s += t.yOffset + (R ? 1 : 0),
                            o = Z,
                            R = !1,
                            this._hasMaskedPath && (f = Q,
                            c = (m = d[u = U].points)[f - 1],
                            g = (h = m[f]).partialLength,
                            l = 0),
                            tt = "",
                            H = "",
                            X = "",
                            K = "",
                            te = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if ($ !== M[r].line) {
                                    switch (t.j) {
                                    case 1:
                                        o += y - t.lineWidths[M[r].line];
                                        break;
                                    case 2:
                                        o += (y - t.lineWidths[M[r].line]) / 2
                                    }
                                    $ = M[r].line
                                }
                                J !== M[r].ind && (M[J] && (o += M[J].extra),
                                o += M[r].an / 2,
                                J = M[r].ind),
                                o += A[0] * M[r].an * .005;
                                var to = 0;
                                for (E = 0; E < F; E += 1)
                                    (C = k[E].a).p.propType && ((L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars)).length ? to += C.p.v[0] * L[0] : to += C.p.v[0] * L),
                                    C.a.propType && ((L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars)).length ? to += C.a.v[0] * L[0] : to += C.a.v[0] * L);
                                for (p = !0,
                                this._pathData.a.v && (o = .5 * M[0].an + (y - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * J / (a - 1) + this._pathData.f.v); p; )
                                    l + g >= o + to || !m ? (v = (o + to - l) / h.partialLength,
                                    z = c.point[0] + (h.point[0] - c.point[0]) * v,
                                    B = c.point[1] + (h.point[1] - c.point[1]) * v,
                                    x.translate(-A[0] * M[r].an * .005, -A[1] * V * .01),
                                    p = !1) : m && (l += h.partialLength,
                                    (f += 1) >= m.length && (f = 0,
                                    d[u += 1] ? m = d[u].points : _.v.c ? (f = 0,
                                    m = d[u = 0].points) : (l -= h.partialLength,
                                    m = null)),
                                    m && (c = h,
                                    g = (h = m[f]).partialLength));
                                O = M[r].an / 2 - M[r].add,
                                x.translate(-O, 0, 0)
                            } else
                                O = M[r].an / 2 - M[r].add,
                                x.translate(-O, 0, 0),
                                x.translate(-A[0] * M[r].an * .005, -A[1] * V * .01, 0);
                            for (E = 0; E < F; E += 1)
                                (C = k[E].a).t.propType && (L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars),
                                0 === i && 0 === t.j || (this._hasMaskedPath ? L.length ? o += C.t.v * L[0] : o += C.t.v * L : L.length ? i += C.t.v * L[0] : i += C.t.v * L));
                            for (t.strokeWidthAnim && (j = t.sw || 0),
                            t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                            t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]),
                            E = 0; E < F; E += 1)
                                (C = k[E].a).a.propType && ((L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars)).length ? x.translate(-C.a.v[0] * L[0], -C.a.v[1] * L[1], C.a.v[2] * L[2]) : x.translate(-C.a.v[0] * L, -C.a.v[1] * L, C.a.v[2] * L));
                            for (E = 0; E < F; E += 1)
                                (C = k[E].a).s.propType && ((L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars)).length ? x.scale(1 + (C.s.v[0] - 1) * L[0], 1 + (C.s.v[1] - 1) * L[1], 1) : x.scale(1 + (C.s.v[0] - 1) * L, 1 + (C.s.v[1] - 1) * L, 1));
                            for (E = 0; E < F; E += 1) {
                                if (C = k[E].a,
                                L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars),
                                C.sk.propType && (L.length ? x.skewFromAxis(-C.sk.v * L[0], C.sa.v * L[1]) : x.skewFromAxis(-C.sk.v * L, C.sa.v * L)),
                                C.r.propType && (L.length ? x.rotateZ(-C.r.v * L[2]) : x.rotateZ(-C.r.v * L)),
                                C.ry.propType && (L.length ? x.rotateY(C.ry.v * L[1]) : x.rotateY(C.ry.v * L)),
                                C.rx.propType && (L.length ? x.rotateX(C.rx.v * L[0]) : x.rotateX(C.rx.v * L)),
                                C.o.propType && (L.length ? N += (C.o.v * L[0] - N) * L[0] : N += (C.o.v * L - N) * L),
                                t.strokeWidthAnim && C.sw.propType && (L.length ? j += C.sw.v * L[0] : j += C.sw.v * L),
                                t.strokeColorAnim && C.sc.propType)
                                    for (W = 0; W < 3; W += 1)
                                        L.length ? G[W] += (C.sc.v[W] - G[W]) * L[0] : G[W] += (C.sc.v[W] - G[W]) * L;
                                if (t.fillColorAnim && t.fc) {
                                    if (C.fc.propType)
                                        for (W = 0; W < 3; W += 1)
                                            L.length ? q[W] += (C.fc.v[W] - q[W]) * L[0] : q[W] += (C.fc.v[W] - q[W]) * L;
                                    C.fh.propType && (q = L.length ? addHueToRGB(q, C.fh.v * L[0]) : addHueToRGB(q, C.fh.v * L)),
                                    C.fs.propType && (q = L.length ? addSaturationToRGB(q, C.fs.v * L[0]) : addSaturationToRGB(q, C.fs.v * L)),
                                    C.fb.propType && (q = L.length ? addBrightnessToRGB(q, C.fb.v * L[0]) : addBrightnessToRGB(q, C.fb.v * L))
                                }
                            }
                            for (E = 0; E < F; E += 1)
                                (C = k[E].a).p.propType && (L = k[E].s.getMult(M[r].anIndexes[E], P.a[E].s.totalChars),
                                this._hasMaskedPath ? L.length ? x.translate(0, C.p.v[1] * L[0], -C.p.v[2] * L[1]) : x.translate(0, C.p.v[1] * L, -C.p.v[2] * L) : L.length ? x.translate(C.p.v[0] * L[0], C.p.v[1] * L[1], -C.p.v[2] * L[2]) : x.translate(C.p.v[0] * L, C.p.v[1] * L, -C.p.v[2] * L));
                            if (t.strokeWidthAnim && (X = j < 0 ? 0 : j),
                            t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"),
                            t.fillColorAnim && t.fc && (H = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"),
                            this._hasMaskedPath) {
                                if (x.translate(0, -t.ls),
                                x.translate(0, A[1] * V * .01 + s, 0),
                                this._pathData.p.v) {
                                    var th = 180 * Math.atan(b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0])) / Math.PI;
                                    h.point[0] < c.point[0] && (th += 180),
                                    x.rotate(-th * Math.PI / 180)
                                }
                                x.translate(z, B, 0),
                                o -= A[0] * M[r].an * .005,
                                M[r + 1] && J !== M[r + 1].ind && (o += M[r].an / 2 + .001 * t.tr * t.finalSize)
                            } else {
                                switch (x.translate(i, s, 0),
                                t.ps && x.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                                t.j) {
                                case 1:
                                    x.translate(M[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[r].line]), 0, 0);
                                    break;
                                case 2:
                                    x.translate(M[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[r].line]) / 2, 0, 0)
                                }
                                x.translate(0, -t.ls),
                                x.translate(O, 0, 0),
                                x.translate(A[0] * M[r].an * .005, A[1] * V * .01, 0),
                                i += M[r].l + .001 * t.tr * t.finalSize
                            }
                            "html" === D ? tt = x.toCSS() : "svg" === D ? tt = x.to2dCSS() : te = [x.props[0], x.props[1], x.props[2], x.props[3], x.props[4], x.props[5], x.props[6], x.props[7], x.props[8], x.props[9], x.props[10], x.props[11], x.props[12], x.props[13], x.props[14], x.props[15]],
                            K = N
                        }
                        S <= r ? (I = new LetterProps(K,X,Y,H,tt,te),
                        this.renderedLetters.push(I),
                        S += 1,
                        this.lettersChangedFlag = !0) : (I = this.renderedLetters[r],
                        this.lettersChangedFlag = I.update(K, X, Y, H, tt, te) || this.lettersChangedFlag)
                    }
                }
            }
            ,
            TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
                this.iterateDynamicProperties())
            }
            ,
            TextAnimatorProperty.prototype.mHelper = new Matrix,
            TextAnimatorProperty.prototype.defaultPropsArray = [],
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            ITextElement.prototype.initElement = function(t, e, i) {
                this.lettersChangedFlag = !0,
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
                this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties)
            }
            ,
            ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
                this.textProperty._isFirstFrame = !1,
                this.textProperty._mdf = !1)
            }
            ,
            ITextElement.prototype.createPathShape = function(t, e) {
                var i, s, r = e.length, a = "";
                for (i = 0; i < r; i += 1)
                    "sh" === e[i].ty && (a += buildShapeString(s = e[i].ks.k, s.i.length, !0, t));
                return a
            }
            ,
            ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }
            ,
            ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }
            ,
            ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }
            ,
            ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, r) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                e.translate(0, -t.ls, 0),
                t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                }
                e.translate(s, r, 0)
            }
            ,
            ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }
            ,
            ITextElement.prototype.emptyProp = new LetterProps,
            ITextElement.prototype.destroy = function() {}
            ;
            var emptyShapeData = {
                shapes: []
            };
            function SVGTextLottieElement(t, e, i) {
                this.textSpans = [],
                this.renderType = "svg",
                this.initElement(t, e, i)
            }
            function ISolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function NullElement(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initFrame(),
                this.initTransform(t, e, i),
                this.initHierarchy()
            }
            function SVGRendererBase() {}
            function ICompElement() {}
            function SVGCompElement(t, e, i) {
                this.layers = t.layers,
                this.supports3d = !0,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function SVGRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.svgElement = createNS("svg");
                var i = "";
                if (e && e.title) {
                    var s = createNS("title")
                      , r = createElementID();
                    s.setAttribute("id", r),
                    s.textContent = e.title,
                    this.svgElement.appendChild(s),
                    i += r
                }
                if (e && e.description) {
                    var a = createNS("desc")
                      , n = createElementID();
                    a.setAttribute("id", n),
                    a.textContent = e.description,
                    this.svgElement.appendChild(a),
                    i += " " + n
                }
                i && this.svgElement.setAttribute("aria-labelledby", i);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h),
                this.layerElement = h,
                this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: e && e.contentVisibility || "visible",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    },
                    width: e && e.width,
                    height: e && e.height,
                    runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                },
                this.elements = [],
                this.pendingElements = [],
                this.destroyed = !1,
                this.rendererType = "svg"
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
            SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }
            ,
            SVGTextLottieElement.prototype.buildTextContents = function(t) {
                for (var e = 0, i = t.length, s = [], r = ""; e < i; )
                    "\r" === t[e] || "\x03" === t[e] ? (s.push(r),
                    r = "") : r += t[e],
                    e += 1;
                return s.push(r),
                s
            }
            ,
            SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                if (t.shapes && t.shapes.length) {
                    var i = t.shapes[0];
                    if (i.it) {
                        var s = i.it[i.it.length - 1];
                        s.s && (s.s.k[0] = e,
                        s.s.k[1] = e)
                    }
                }
                return t
            }
            ,
            SVGTextLottieElement.prototype.buildNewText = function() {
                this.addDynamicProperty(this);
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t ? t.l.length : 0),
                t.fc ? this.layerElement.setAttribute("fill", this.buildColor(t.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                t.sc && (this.layerElement.setAttribute("stroke", this.buildColor(t.sc)),
                this.layerElement.setAttribute("stroke-width", t.sw)),
                this.layerElement.setAttribute("font-size", t.finalSize);
                var e = this.globalData.fontManager.getFontByName(t.f);
                if (e.fClass)
                    this.layerElement.setAttribute("class", e.fClass);
                else {
                    this.layerElement.setAttribute("font-family", e.fFamily);
                    var i = t.fWeight
                      , s = t.fStyle;
                    this.layerElement.setAttribute("font-style", s),
                    this.layerElement.setAttribute("font-weight", i)
                }
                this.layerElement.setAttribute("aria-label", t.t);
                var r, a, n, o = t.l || [], h = !!this.globalData.fontManager.chars;
                a = o.length;
                var l = this.mHelper
                  , p = this.data.singleShape
                  , f = 0
                  , u = 0
                  , c = !0
                  , m = .001 * t.tr * t.finalSize;
                if (!p || h || t.sz) {
                    var d, g = this.textSpans.length;
                    for (r = 0; r < a; r += 1) {
                        if (this.textSpans[r] || (this.textSpans[r] = {
                            span: null,
                            childSpan: null,
                            glyph: null
                        }),
                        !h || !p || 0 === r) {
                            if (n = g > r ? this.textSpans[r].span : createNS(h ? "g" : "text"),
                            g <= r) {
                                if (n.setAttribute("stroke-linecap", "butt"),
                                n.setAttribute("stroke-linejoin", "round"),
                                n.setAttribute("stroke-miterlimit", "4"),
                                this.textSpans[r].span = n,
                                h) {
                                    var y, v = createNS("g");
                                    n.appendChild(v),
                                    this.textSpans[r].childSpan = v
                                }
                                this.textSpans[r].span = n,
                                this.layerElement.appendChild(n)
                            }
                            n.style.display = "inherit"
                        }
                        if (l.reset(),
                        p && (o[r].n && (f = -m,
                        u += t.yOffset + (c ? 1 : 0),
                        c = !1),
                        this.applyTextPropertiesToMatrix(t, l, o[r].line, f, u),
                        f += (o[r].l || 0) + m),
                        h) {
                            if (1 === (d = this.globalData.fontManager.getCharData(t.finalText[r], e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)).t)
                                y = new SVGCompElement(d.data,this.globalData,this);
                            else {
                                var b = emptyShapeData;
                                d.data && d.data.shapes && (b = this.buildShapeData(d.data, t.finalSize)),
                                y = new SVGShapeElement(b,this.globalData,this)
                            }
                            if (this.textSpans[r].glyph) {
                                var _ = this.textSpans[r].glyph;
                                this.textSpans[r].childSpan.removeChild(_.layerElement),
                                _.destroy()
                            }
                            this.textSpans[r].glyph = y,
                            y._debug = !0,
                            y.prepareFrame(0),
                            y.renderFrame(),
                            this.textSpans[r].childSpan.appendChild(y.layerElement),
                            1 === d.t && this.textSpans[r].childSpan.setAttribute("transform", "scale(" + t.finalSize / 100 + "," + t.finalSize / 100 + ")")
                        } else
                            p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"),
                            n.textContent = o[r].val,
                            n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                    }
                    p && n && n.setAttribute("d", "")
                } else {
                    var A = this.textContainer
                      , k = "start";
                    switch (t.j) {
                    case 1:
                        k = "end";
                        break;
                    case 2:
                        k = "middle";
                        break;
                    default:
                        k = "start"
                    }
                    A.setAttribute("text-anchor", k),
                    A.setAttribute("letter-spacing", m);
                    var P = this.buildTextContents(t.finalText);
                    for (a = P.length,
                    u = t.ps ? t.ps[1] + t.ascent : 0,
                    r = 0; r < a; r += 1)
                        (n = this.textSpans[r].span || createNS("tspan")).textContent = P[r],
                        n.setAttribute("x", 0),
                        n.setAttribute("y", u),
                        n.style.display = "inherit",
                        A.appendChild(n),
                        this.textSpans[r] || (this.textSpans[r] = {
                            span: null,
                            glyph: null
                        }),
                        this.textSpans[r].span = n,
                        u += t.finalLineHeight;
                    this.layerElement.appendChild(A)
                }
                for (; r < this.textSpans.length; )
                    this.textSpans[r].span.style.display = "none",
                    r += 1;
                this._sizeChanged = !0
            }
            ,
            SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    }
                }
                return this.bbox
            }
            ,
            SVGTextLottieElement.prototype.getValue = function() {
                var t, e, i = this.textSpans.length;
                for (this.renderedFrame = this.comp.renderedFrame,
                t = 0; t < i; t += 1)
                    (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st),
                    e._mdf && (this._mdf = !0))
            }
            ,
            SVGTextLottieElement.prototype.renderInnerContent = function() {
                if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    this._sizeChanged = !0;
                    var t, e, i, s, r, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                    for (e = n.length,
                    t = 0; t < e; t += 1)
                        n[t].n || (i = a[t],
                        s = this.textSpans[t].span,
                        (r = this.textSpans[t].glyph) && r.renderFrame(),
                        i._mdf.m && s.setAttribute("transform", i.m),
                        i._mdf.o && s.setAttribute("opacity", i.o),
                        i._mdf.sw && s.setAttribute("stroke-width", i.sw),
                        i._mdf.sc && s.setAttribute("stroke", i.sc),
                        i._mdf.fc && s.setAttribute("fill", i.fc))
                }
            }
            ,
            extendPrototype([IImageElement], ISolidElement),
            ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t)
            }
            ,
            NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }
            ,
            NullElement.prototype.renderFrame = function() {}
            ,
            NullElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            NullElement.prototype.destroy = function() {}
            ,
            NullElement.prototype.sourceRectAtTime = function() {}
            ,
            NullElement.prototype.hide = function() {}
            ,
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            extendPrototype([BaseRenderer], SVGRendererBase),
            SVGRendererBase.prototype.createNull = function(t) {
                return new NullElement(t,this.globalData,this)
            }
            ,
            SVGRendererBase.prototype.createShape = function(t) {
                return new SVGShapeElement(t,this.globalData,this)
            }
            ,
            SVGRendererBase.prototype.createText = function(t) {
                return new SVGTextLottieElement(t,this.globalData,this)
            }
            ,
            SVGRendererBase.prototype.createImage = function(t) {
                return new IImageElement(t,this.globalData,this)
            }
            ,
            SVGRendererBase.prototype.createSolid = function(t) {
                return new ISolidElement(t,this.globalData,this)
            }
            ,
            SVGRendererBase.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
                this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                this.svgElement.style.width = "100%",
                this.svgElement.style.height = "100%",
                this.svgElement.style.transform = "translate3d(0,0,0)",
                this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility),
                this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
                this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
                this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
                void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
                this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
                this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e),
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.data = t;
                var i = createNS("clipPath")
                  , s = createNS("rect");
                s.setAttribute("width", t.w),
                s.setAttribute("height", t.h),
                s.setAttribute("x", 0),
                s.setAttribute("y", 0);
                var r = createElementID();
                i.setAttribute("id", r),
                i.appendChild(s),
                this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + r + ")"),
                e.appendChild(i),
                this.layers = t.layers,
                this.elements = createSizedArray(t.layers.length)
            }
            ,
            SVGRendererBase.prototype.destroy = function() {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                this.layerElement = null,
                this.globalData.defs = null;
                var t, e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            }
            ,
            SVGRendererBase.prototype.updateContainerSize = function() {}
            ,
            SVGRendererBase.prototype.findIndexByInd = function(t) {
                var e = 0
                  , i = this.layers.length;
                for (e = 0; e < i; e += 1)
                    if (this.layers[e].ind === t)
                        return e;
                return -1
            }
            ,
            SVGRendererBase.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    e[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    if (e[t] = i,
                    getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i),
                    i.initExpressions()),
                    this.appendElementInPos(i, t),
                    this.layers[t].tt) {
                        var s = "tp"in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                        if (-1 === s)
                            return;
                        if (this.elements[s] && !0 !== this.elements[s]) {
                            var r = e[s].getMatte(this.layers[t].tt);
                            i.setMatte(r)
                        } else
                            this.buildItem(s),
                            this.addPendingElement(i)
                    }
                }
            }
            ,
            SVGRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length; ) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(),
                    t.data.tt)
                        for (var e = 0, i = this.elements.length; e < i; ) {
                            if (this.elements[e] === t) {
                                var s = "tp"in t.data ? this.findIndexByInd(t.data.tp) : e - 1
                                  , r = this.elements[s].getMatte(this.layers[e].tt);
                                t.setMatte(r);
                                break
                            }
                            e += 1
                        }
                }
            }
            ,
            SVGRendererBase.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    null === t ? t = this.renderedFrame : this.renderedFrame = t,
                    this.globalData.frameNum = t,
                    this.globalData.frameId += 1,
                    this.globalData.projectInterface.currentFrame = t,
                    this.globalData._mdf = !1;
                    var e, i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t),
                    e = i - 1; e >= 0; e -= 1)
                        (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)
                            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }
            ,
            SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    for (var s, r = 0; r < e; )
                        this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()),
                        r += 1;
                    s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                }
            }
            ,
            SVGRendererBase.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }
            ,
            SVGRendererBase.prototype.show = function() {
                this.layerElement.style.display = "block"
            }
            ,
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
            ICompElement.prototype.initElement = function(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                !this.data.xt && e.progressiveLoad || this.buildAllItems(),
                this.hide()
            }
            ,
            ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt) {
                    if (this.tm._placeholder)
                        this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1),
                        this.renderedFrame = e
                    }
                    var i, s = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame),
                    i = s - 1; i >= 0; i -= 1)
                        (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st),
                        this.elements[i]._mdf && (this._mdf = !0))
                }
            }
            ,
            ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }
            ,
            ICompElement.prototype.setElements = function(t) {
                this.elements = t
            }
            ,
            ICompElement.prototype.getElements = function() {
                return this.elements
            }
            ,
            ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy()
            }
            ,
            ICompElement.prototype.destroy = function() {
                this.destroyElements(),
                this.destroyBaseElement()
            }
            ,
            extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
            SVGCompElement.prototype.createComp = function(t) {
                return new SVGCompElement(t,this.globalData,this)
            }
            ,
            extendPrototype([SVGRendererBase], SVGRenderer),
            SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t,this.globalData,this)
            }
            ,
            registerRenderer("svg", SVGRenderer),
            ShapeModifiers.registerModifier("tm", TrimModifier),
            ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            ShapeModifiers.registerModifier("zz", ZigZagModifier),
            ShapeModifiers.registerModifier("op", OffsetPathModifier);
            var CompExpressionInterface = function(t) {
                function e(e) {
                    for (var i = 0, s = t.layers.length; i < s; ) {
                        if (t.layers[i].nm === e || t.layers[i].ind === e)
                            return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }),
                e.layer = e,
                e.pixelAspect = 1,
                e.height = t.data.h || t.globalData.compSize.h,
                e.width = t.data.w || t.globalData.compSize.w,
                e.pixelAspect = 1,
                e.frameDuration = 1 / t.globalData.frameRate,
                e.displayStartTime = 0,
                e.numLayers = t.layers.length,
                e
            }
              , Expressions = function() {
                var t = {};
                return t.initExpressions = function(t) {
                    var e = 0
                      , i = [];
                    t.renderer.compInterface = CompExpressionInterface(t.renderer),
                    t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                    t.renderer.globalData.pushExpression = function() {
                        e += 1
                    }
                    ,
                    t.renderer.globalData.popExpression = function() {
                        0 == (e -= 1) && function() {
                            var t, e = i.length;
                            for (t = 0; t < e; t += 1)
                                i[t].release();
                            i.length = 0
                        }()
                    }
                    ,
                    t.renderer.globalData.registerExpressionProperty = function(t) {
                        -1 === i.indexOf(t) && i.push(t)
                    }
                }
                ,
                t
            }()
              , MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t,
                    this._data = e
                }
                return Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(),
                        this._mask.prop
                    }
                }),
                Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(),
                        100 * this._mask.op.v
                    }
                }),
                function(e) {
                    var i, s = createSizedArray(e.viewData.length), r = e.viewData.length;
                    for (i = 0; i < r; i += 1)
                        s[i] = new t(e.viewData[i],e.masksProperties[i]);
                    return function(t) {
                        for (i = 0; i < r; ) {
                            if (e.masksProperties[i].nm === t)
                                return s[i];
                            i += 1
                        }
                        return null
                    }
                }
            }()
              , ExpressionPropertyInterface = function() {
                var t = {
                    pv: 0,
                    v: 0,
                    mult: 1
                }
                  , e = {
                    pv: [0, 0, 0],
                    v: [0, 0, 0],
                    mult: 1
                };
                function i(t, e, i) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }),
                    t.numKeys = e.keyframes ? e.keyframes.length : 0,
                    t.key = function(s) {
                        if (!t.numKeys)
                            return 0;
                        var r = "";
                        r = "s"in e.keyframes[s - 1] ? e.keyframes[s - 1].s : "e"in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s;
                        var a = "unidimensional" === i ? new Number(r) : Object.assign({}, r);
                        return a.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate,
                        a.value = "unidimensional" === i ? r[0] : r,
                        a
                    }
                    ,
                    t.valueAtTime = e.getValueAtTime,
                    t.speedAtTime = e.getSpeedAtTime,
                    t.velocityAtTime = e.getVelocityAtTime,
                    t.propertyGroup = e.propertyGroup
                }
                function s() {
                    return t
                }
                return function(r) {
                    return r ? "unidimensional" === r.propType ? function(e) {
                        e && "pv"in e || (e = t);
                        var s = 1 / e.mult
                          , r = e.pv * s
                          , a = new Number(r);
                        return a.value = r,
                        i(a, e, "unidimensional"),
                        function() {
                            return e.k && e.getValue(),
                            r = e.v * s,
                            a.value !== r && ((a = new Number(r)).value = r,
                            i(a, e, "unidimensional")),
                            a
                        }
                    }(r) : function(t) {
                        t && "pv"in t || (t = e);
                        var s = 1 / t.mult
                          , r = t.data && t.data.l || t.pv.length
                          , a = createTypedArray("float32", r)
                          , n = createTypedArray("float32", r);
                        return a.value = n,
                        i(a, t, "multidimensional"),
                        function() {
                            t.k && t.getValue();
                            for (var e = 0; e < r; e += 1)
                                n[e] = t.v[e] * s,
                                a[e] = n[e];
                            return a
                        }
                    }(r) : s
                }
            }()
              , TransformExpressionInterface = function(t) {
                var e, i, s, r;
                function a(t) {
                    switch (t) {
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return a.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return a.rotation;
                    case "ADBE Rotate X":
                        return a.xRotation;
                    case "ADBE Rotate Y":
                        return a.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return a.position;
                    case "ADBE Position_0":
                        return a.xPosition;
                    case "ADBE Position_1":
                        return a.yPosition;
                    case "ADBE Position_2":
                        return a.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return a.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return a.opacity;
                    default:
                        return null
                    }
                }
                return Object.defineProperty(a, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }),
                Object.defineProperty(a, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }),
                Object.defineProperty(a, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }),
                Object.defineProperty(a, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }),
                Object.defineProperty(a, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }),
                t.p ? r = ExpressionPropertyInterface(t.p) : (e = ExpressionPropertyInterface(t.px),
                i = ExpressionPropertyInterface(t.py),
                t.pz && (s = ExpressionPropertyInterface(t.pz))),
                Object.defineProperty(a, "position", {
                    get: function() {
                        return t.p ? r() : [e(), i(), s ? s() : 0]
                    }
                }),
                Object.defineProperty(a, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }),
                Object.defineProperty(a, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }),
                Object.defineProperty(a, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }),
                Object.defineProperty(a, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }),
                Object.defineProperty(a, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }),
                Object.defineProperty(a, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }),
                Object.defineProperty(a, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }),
                Object.defineProperty(a, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }),
                a
            }
              , LayerExpressionInterface = function() {
                function t(t) {
                    var e = new Matrix;
                    return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e),
                    e
                }
                function e(t, e) {
                    var i = this.getMatrix(e);
                    return i.props[12] = 0,
                    i.props[13] = 0,
                    i.props[14] = 0,
                    this.applyPoint(i, t)
                }
                function i(t, e) {
                    var i = this.getMatrix(e);
                    return this.applyPoint(i, t)
                }
                function s(t, e) {
                    var i = this.getMatrix(e);
                    return i.props[12] = 0,
                    i.props[13] = 0,
                    i.props[14] = 0,
                    this.invertPoint(i, t)
                }
                function r(t, e) {
                    var i = this.getMatrix(e);
                    return this.invertPoint(i, t)
                }
                function a(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, s = this._elem.hierarchy.length;
                        for (i = 0; i < s; i += 1)
                            this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.applyToPointArray(e[0], e[1], e[2] || 0)
                }
                function n(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, s = this._elem.hierarchy.length;
                        for (i = 0; i < s; i += 1)
                            this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.inversePoint(e)
                }
                function o(t) {
                    var e = new Matrix;
                    if (e.reset(),
                    this._elem.finalTransform.mProp.applyToMatrix(e),
                    this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, s = this._elem.hierarchy.length;
                        for (i = 0; i < s; i += 1)
                            this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e)
                    }
                    return e.inversePoint(t)
                }
                function h() {
                    return [1, 1, 1, 1]
                }
                return function(l) {
                    function p(t) {
                        switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return p.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return f;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return p.effect;
                        case "ADBE Text Properties":
                            return p.textInterface;
                        default:
                            return null
                        }
                    }
                    p.getMatrix = t,
                    p.invertPoint = n,
                    p.applyPoint = a,
                    p.toWorld = i,
                    p.toWorldVec = e,
                    p.fromWorld = r,
                    p.fromWorldVec = s,
                    p.toComp = i,
                    p.fromComp = o,
                    p.sampleImage = h,
                    p.sourceRectAtTime = l.sourceRectAtTime.bind(l),
                    p._elem = l;
                    var f, u = getDescriptor(f = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(p, {
                        hasParent: {
                            get: function() {
                                return l.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return l.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(f, "rotation"),
                        scale: getDescriptor(f, "scale"),
                        position: getDescriptor(f, "position"),
                        opacity: getDescriptor(f, "opacity"),
                        anchorPoint: u,
                        anchor_point: u,
                        transform: {
                            get: function() {
                                return f
                            }
                        },
                        active: {
                            get: function() {
                                return l.isInRange
                            }
                        }
                    }),
                    p.startTime = l.data.st,
                    p.index = l.data.ind,
                    p.source = l.data.refId,
                    p.height = 0 === l.data.ty ? l.data.h : 100,
                    p.width = 0 === l.data.ty ? l.data.w : 100,
                    p.inPoint = l.data.ip / l.comp.globalData.frameRate,
                    p.outPoint = l.data.op / l.comp.globalData.frameRate,
                    p._name = l.data.nm,
                    p.registerMaskInterface = function(t) {
                        p.mask = new MaskManagerInterface(t,l)
                    }
                    ,
                    p.registerEffectsInterface = function(t) {
                        p.effect = t
                    }
                    ,
                    p
                }
            }()
              , propertyGroupFactory = function(t, e) {
                return function(i) {
                    return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                }
            }
              , PropertyInterface = function(t, e) {
                var i = {
                    _name: t
                };
                return function(t) {
                    return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                }
            }
              , EffectsExpressionInterface = function() {
                function t(i, s, r, a) {
                    function n(t) {
                        for (var e = i.ef, s = 0, r = e.length; s < r; ) {
                            if (t === e[s].nm || t === e[s].mn || t === e[s].ix)
                                return 5 === e[s].ty ? l[s] : l[s]();
                            s += 1
                        }
                        throw Error()
                    }
                    var o, h = propertyGroupFactory(n, r), l = [], p = i.ef.length;
                    for (o = 0; o < p; o += 1)
                        5 === i.ef[o].ty ? l.push(t(i.ef[o], s.effectElements[o], s.effectElements[o].propertyGroup, a)) : l.push(e(s.effectElements[o], i.ef[o].ty, a, h));
                    return "ADBE Color Control" === i.mn && Object.defineProperty(n, "color", {
                        get: function() {
                            return l[0]()
                        }
                    }),
                    Object.defineProperties(n, {
                        numProperties: {
                            get: function() {
                                return i.np
                            }
                        },
                        _name: {
                            value: i.nm
                        },
                        propertyGroup: {
                            value: h
                        }
                    }),
                    n.enabled = 0 !== i.en,
                    n.active = n.enabled,
                    n
                }
                function e(t, e, i, s) {
                    var r = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", s)),
                    function() {
                        return 10 === e ? i.comp.compInterface(t.p.v) : r()
                    }
                }
                return {
                    createEffectsInterface: function(e, i) {
                        if (e.effectsManager) {
                            var s, r = [], a = e.data.ef, n = e.effectsManager.effectElements.length;
                            for (s = 0; s < n; s += 1)
                                r.push(t(a[s], e.effectsManager.effectElements[s], i, e));
                            var o = e.data.ef || []
                              , h = function(t) {
                                for (s = 0,
                                n = o.length; s < n; ) {
                                    if (t === o[s].nm || t === o[s].mn || t === o[s].ix)
                                        return r[s];
                                    s += 1
                                }
                                return null
                            };
                            return Object.defineProperty(h, "numProperties", {
                                get: function() {
                                    return o.length
                                }
                            }),
                            h
                        }
                        return null
                    }
                }
            }()
              , ShapePathInterface = function(t, e, i) {
                var s = e.sh;
                function r(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null
                }
                var a = propertyGroupFactory(r, i);
                return s.setGroupProperty(PropertyInterface("Path", a)),
                Object.defineProperties(r, {
                    path: {
                        get: function() {
                            return s.k && s.getValue(),
                            s
                        }
                    },
                    shape: {
                        get: function() {
                            return s.k && s.getValue(),
                            s
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    },
                    propertyGroup: {
                        value: i
                    }
                }),
                r
            }
              , ShapeExpressionInterface = function() {
                function t(t, o, c) {
                    var m, d = [], g = t ? t.length : 0;
                    for (m = 0; m < g; m += 1)
                        "gr" === t[m].ty ? d.push(e(t[m], o[m], c)) : "fl" === t[m].ty ? d.push(i(t[m], o[m], c)) : "st" === t[m].ty ? d.push(a(t[m], o[m], c)) : "tm" === t[m].ty ? d.push(n(t[m], o[m], c)) : "tr" === t[m].ty || ("el" === t[m].ty ? d.push(h(t[m], o[m], c)) : "sr" === t[m].ty ? d.push(l(t[m], o[m], c)) : "sh" === t[m].ty ? d.push(ShapePathInterface(t[m], o[m], c)) : "rc" === t[m].ty ? d.push(p(t[m], o[m], c)) : "rd" === t[m].ty ? d.push(f(t[m], o[m], c)) : "rp" === t[m].ty ? d.push(u(t[m], o[m], c)) : "gf" === t[m].ty ? d.push(s(t[m], o[m], c)) : d.push(r(t[m], o[m])));
                    return d
                }
                function e(e, i, s) {
                    var r = function(t) {
                        switch (t) {
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return r.content;
                        default:
                            return r.transform
                        }
                    };
                    r.propertyGroup = propertyGroupFactory(r, s);
                    var a = function(e, i, s) {
                        var r, a = function(t) {
                            for (var e = 0, i = r.length; e < i; ) {
                                if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t)
                                    return r[e];
                                e += 1
                            }
                            return "number" == typeof t ? r[t - 1] : null
                        };
                        a.propertyGroup = propertyGroupFactory(a, s),
                        r = t(e.it, i.it, a.propertyGroup),
                        a.numProperties = r.length;
                        var n = o(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
                        return a.transform = n,
                        a.propertyIndex = e.cix,
                        a._name = e.nm,
                        a
                    }(e, i, r.propertyGroup)
                      , n = o(e.it[e.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
                    return r.content = a,
                    r.transform = n,
                    Object.defineProperty(r, "_name", {
                        get: function() {
                            return e.nm
                        }
                    }),
                    r.numProperties = e.np,
                    r.propertyIndex = e.ix,
                    r.nm = e.nm,
                    r.mn = e.mn,
                    r
                }
                function i(t, e, i) {
                    function s(t) {
                        return "Color" === t || "color" === t ? s.color : "Opacity" === t || "opacity" === t ? s.opacity : null
                    }
                    return Object.defineProperties(s, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.c.setGroupProperty(PropertyInterface("Color", i)),
                    e.o.setGroupProperty(PropertyInterface("Opacity", i)),
                    s
                }
                function s(t, e, i) {
                    function s(t) {
                        return "Start Point" === t || "start point" === t ? s.startPoint : "End Point" === t || "end point" === t ? s.endPoint : "Opacity" === t || "opacity" === t ? s.opacity : null
                    }
                    return Object.defineProperties(s, {
                        startPoint: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.s.setGroupProperty(PropertyInterface("Start Point", i)),
                    e.e.setGroupProperty(PropertyInterface("End Point", i)),
                    e.o.setGroupProperty(PropertyInterface("Opacity", i)),
                    s
                }
                function r() {
                    return function() {
                        return null
                    }
                }
                function a(t, e, i) {
                    var s, r = propertyGroupFactory(l, i), a = propertyGroupFactory(h, r);
                    function n(i) {
                        Object.defineProperty(h, t.d[i].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                        })
                    }
                    var o = t.d ? t.d.length : 0
                      , h = {};
                    for (s = 0; s < o; s += 1)
                        n(s),
                        e.d.dataProps[s].p.setGroupProperty(a);
                    function l(t) {
                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                    }
                    return Object.defineProperties(l, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return h
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.c.setGroupProperty(PropertyInterface("Color", r)),
                    e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                    e.w.setGroupProperty(PropertyInterface("Stroke Width", r)),
                    l
                }
                function n(t, e, i) {
                    function s(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : null
                    }
                    var r = propertyGroupFactory(s, i);
                    return s.propertyIndex = t.ix,
                    e.s.setGroupProperty(PropertyInterface("Start", r)),
                    e.e.setGroupProperty(PropertyInterface("End", r)),
                    e.o.setGroupProperty(PropertyInterface("Offset", r)),
                    s.propertyIndex = t.ix,
                    s.propertyGroup = i,
                    Object.defineProperties(s, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.mn = t.mn,
                    s
                }
                function o(t, e, i) {
                    function s(e) {
                        return t.a.ix === e || "Anchor Point" === e ? s.anchorPoint : t.o.ix === e || "Opacity" === e ? s.opacity : t.p.ix === e || "Position" === e ? s.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : t.s.ix === e || "Scale" === e ? s.scale : t.sk && t.sk.ix === e || "Skew" === e ? s.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? s.skewAxis : null
                    }
                    var r = propertyGroupFactory(s, i);
                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)),
                    e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)),
                    e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)),
                    e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)),
                    e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)),
                    e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)),
                    e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))),
                    e.transform.op.setGroupProperty(PropertyInterface("Opacity", r)),
                    Object.defineProperties(s, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.ty = "tr",
                    s.mn = t.mn,
                    s.propertyGroup = i,
                    s
                }
                function h(t, e, i) {
                    function s(e) {
                        return t.p.ix === e ? s.position : t.s.ix === e ? s.size : null
                    }
                    var r = propertyGroupFactory(s, i);
                    s.propertyIndex = t.ix;
                    var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return a.s.setGroupProperty(PropertyInterface("Size", r)),
                    a.p.setGroupProperty(PropertyInterface("Position", r)),
                    Object.defineProperties(s, {
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.mn = t.mn,
                    s
                }
                function l(t, e, i) {
                    function s(e) {
                        return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : t.ir && (t.ir.ix === e || "ADBE Vector Star Inner Radius" === e) ? s.innerRadius : t.is && t.is.ix === e ? s.innerRoundness : null
                    }
                    var r = propertyGroupFactory(s, i)
                      , a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return s.propertyIndex = t.ix,
                    a.or.setGroupProperty(PropertyInterface("Outer Radius", r)),
                    a.os.setGroupProperty(PropertyInterface("Outer Roundness", r)),
                    a.pt.setGroupProperty(PropertyInterface("Points", r)),
                    a.p.setGroupProperty(PropertyInterface("Position", r)),
                    a.r.setGroupProperty(PropertyInterface("Rotation", r)),
                    t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", r)),
                    a.is.setGroupProperty(PropertyInterface("Inner Roundness", r))),
                    Object.defineProperties(s, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(a.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(a.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(a.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(a.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(a.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.mn = t.mn,
                    s
                }
                function p(t, e, i) {
                    function s(e) {
                        return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : null
                    }
                    var r = propertyGroupFactory(s, i)
                      , a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return s.propertyIndex = t.ix,
                    a.p.setGroupProperty(PropertyInterface("Position", r)),
                    a.s.setGroupProperty(PropertyInterface("Size", r)),
                    a.r.setGroupProperty(PropertyInterface("Rotation", r)),
                    Object.defineProperties(s, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.mn = t.mn,
                    s
                }
                function f(t, e, i) {
                    function s(e) {
                        return t.r.ix === e || "Round Corners 1" === e ? s.radius : null
                    }
                    var r = propertyGroupFactory(s, i)
                      , a = e;
                    return s.propertyIndex = t.ix,
                    a.rd.setGroupProperty(PropertyInterface("Radius", r)),
                    Object.defineProperties(s, {
                        radius: {
                            get: ExpressionPropertyInterface(a.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.mn = t.mn,
                    s
                }
                function u(t, e, i) {
                    function s(e) {
                        return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : null
                    }
                    var r = propertyGroupFactory(s, i)
                      , a = e;
                    return s.propertyIndex = t.ix,
                    a.c.setGroupProperty(PropertyInterface("Copies", r)),
                    a.o.setGroupProperty(PropertyInterface("Offset", r)),
                    Object.defineProperties(s, {
                        copies: {
                            get: ExpressionPropertyInterface(a.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(a.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    s.mn = t.mn,
                    s
                }
                return function(e, i, s) {
                    var r;
                    function a(t) {
                        if ("number" == typeof t)
                            return 0 === (t = void 0 === t ? 1 : t) ? s : r[t - 1];
                        for (var e = 0, i = r.length; e < i; ) {
                            if (r[e]._name === t)
                                return r[e];
                            e += 1
                        }
                        return null
                    }
                    return a.propertyGroup = propertyGroupFactory(a, function() {
                        return s
                    }),
                    r = t(e, i, a.propertyGroup),
                    a.numProperties = r.length,
                    a._name = "Contents",
                    a
                }
            }()
              , TextExpressionInterface = function(t) {
                var e;
                function i(t) {
                    return "ADBE Text Document" === t ? i.sourceText : null
                }
                return Object.defineProperty(i, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var i = t.textProperty.currentData.t;
                        return e && i === e.value || ((e = new String(i)).value = i || new String(i),
                        Object.defineProperty(e, "style", {
                            get: function() {
                                return {
                                    fillColor: t.textProperty.currentData.fc
                                }
                            }
                        })),
                        e
                    }
                }),
                i
            };
            function _typeof$2(t) {
                return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var dataInterfaceFactory, FootageInterface = (dataInterfaceFactory = function(t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null
                }
                return e._name = "Outline",
                e.outlineInterface = function(t) {
                    var e = ""
                      , i = t.getFootageData();
                    function s(t) {
                        if (i[t])
                            return e = t,
                            "object" === _typeof$2(i = i[t]) ? s : i;
                        var r = t.indexOf(e);
                        return -1 !== r ? "object" === _typeof$2(i = i[parseInt(t.substr(r + e.length), 10)]) ? s : i : ""
                    }
                    return function() {
                        return e = "",
                        i = t.getFootageData(),
                        s
                    }
                }(t),
                e
            }
            ,
            function(t) {
                function e(t) {
                    return "Data" === t ? e.dataInterface : null
                }
                return e._name = "Data",
                e.dataInterface = dataInterfaceFactory(t),
                e
            }
            ), interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface
            };
            function getInterface(t) {
                return interfaces[t] || null
            }
            function _typeof$1(t) {
                return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function seedRandom(t, e) {
                var i = this
                  , s = 256
                  , r = e.pow(s, 6)
                  , a = e.pow(2, 52)
                  , n = 2 * a
                  , o = 255;
                function h(t) {
                    var e, i = t.length, r = this, a = 0, n = r.i = r.j = 0, h = r.S = [];
                    for (i || (t = [i++]); a < s; )
                        h[a] = a++;
                    for (a = 0; a < s; a++)
                        h[a] = h[n = o & n + t[a % i] + (e = h[a])],
                        h[n] = e;
                    r.g = function(t) {
                        for (var e, i = 0, a = r.i, n = r.j, h = r.S; t--; )
                            e = h[a = o & a + 1],
                            i = i * s + h[o & (h[a] = h[n = o & n + e]) + (h[n] = e)];
                        return r.i = a,
                        r.j = n,
                        i
                    }
                }
                function l(t, e) {
                    return e.i = t.i,
                    e.j = t.j,
                    e.S = t.S.slice(),
                    e
                }
                function p(t, e) {
                    var i, s = [], r = _typeof$1(t);
                    if (e && "object" == r)
                        for (i in t)
                            try {
                                s.push(p(t[i], e - 1))
                            } catch (t) {}
                    return s.length ? s : "string" == r ? t : t + "\x00"
                }
                function f(t, e) {
                    for (var i, s = t + "", r = 0; r < s.length; )
                        e[o & r] = o & (i ^= 19 * e[o & r]) + s.charCodeAt(r++);
                    return u(e)
                }
                function u(t) {
                    return String.fromCharCode.apply(0, t)
                }
                e.seedrandom = function(o, c, m) {
                    var d = []
                      , g = f(p((c = !0 === c ? {
                        entropy: !0
                    } : c || {}).entropy ? [o, u(t)] : null === o ? function() {
                        try {
                            var e = new Uint8Array(s);
                            return (i.crypto || i.msCrypto).getRandomValues(e),
                            u(e)
                        } catch (e) {
                            var r = i.navigator
                              , a = r && r.plugins;
                            return [+new Date, i, a, i.screen, u(t)]
                        }
                    }() : o, 3), d)
                      , y = new h(d)
                      , v = function() {
                        for (var t = y.g(6), e = r, i = 0; t < a; )
                            t = (t + i) * s,
                            e *= s,
                            i = y.g(1);
                        for (; t >= n; )
                            t /= 2,
                            e /= 2,
                            i >>>= 1;
                        return (t + i) / e
                    };
                    return v.int32 = function() {
                        return 0 | y.g(4)
                    }
                    ,
                    v.quick = function() {
                        return y.g(4) / 4294967296
                    }
                    ,
                    v.double = v,
                    f(u(y.S), t),
                    (c.pass || m || function(t, i, s, r) {
                        return r && (r.S && l(r, y),
                        t.state = function() {
                            return l(y, {})
                        }
                        ),
                        s ? (e.random = t,
                        i) : t
                    }
                    )(v, g, "global"in c ? c.global : this == e, c.state)
                }
                ,
                f(e.random(), t)
            }
            function initialize$2(t) {
                seedRandom([], t)
            }
            var propTypes = {
                SHAPE: "shape"
            };
            function _typeof(t) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            var ExpressionManager = function() {
                var ob = {}
                  , Math = BMMath
                  , window = null
                  , document = null
                  , XMLHttpRequest = null
                  , fetch = null
                  , frames = null;
                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }
                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }
                function $bm_neg(t) {
                    var e = _typeof(t);
                    if ("number" === e || "boolean" === e || t instanceof Number)
                        return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var i, s = t.length, r = [];
                        for (i = 0; i < s; i += 1)
                            r[i] = -t[i];
                        return r
                    }
                    return t.propType ? t.v : -t
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
                  , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
                  , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                function sum(t, e) {
                    var i = _typeof(t)
                      , s = _typeof(e);
                    if ("string" === i || "string" === s || isNumerable(i, t) && isNumerable(s, e))
                        return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                        return (t = t.slice(0))[0] += e,
                        t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                        return (e = e.slice(0))[0] = t + e[0],
                        e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n; )
                            ("number" == typeof t[r] || t[r]instanceof Number) && ("number" == typeof e[r] || e[r]instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r],
                            r += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;
                function sub(t, e) {
                    var i = _typeof(t)
                      , s = _typeof(e);
                    if (isNumerable(i, t) && isNumerable(s, e))
                        return "string" === i && (t = parseInt(t, 10)),
                        "string" === s && (e = parseInt(e, 10)),
                        t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                        return (t = t.slice(0))[0] -= e,
                        t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                        return (e = e.slice(0))[0] = t - e[0],
                        e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n; )
                            ("number" == typeof t[r] || t[r]instanceof Number) && ("number" == typeof e[r] || e[r]instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r],
                            r += 1;
                        return o
                    }
                    return 0
                }
                function mul(t, e) {
                    var i, s, r, a = _typeof(t), n = _typeof(e);
                    if (isNumerable(a, t) && isNumerable(n, e))
                        return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (i = createTypedArray("float32", r = t.length),
                        s = 0; s < r; s += 1)
                            i[s] = t[s] * e;
                        return i
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (i = createTypedArray("float32", r = e.length),
                        s = 0; s < r; s += 1)
                            i[s] = t * e[s];
                        return i
                    }
                    return 0
                }
                function div(t, e) {
                    var i, s, r, a = _typeof(t), n = _typeof(e);
                    if (isNumerable(a, t) && isNumerable(n, e))
                        return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (i = createTypedArray("float32", r = t.length),
                        s = 0; s < r; s += 1)
                            i[s] = t[s] / e;
                        return i
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (i = createTypedArray("float32", r = e.length),
                        s = 0; s < r; s += 1)
                            i[s] = t / e[s];
                        return i
                    }
                    return 0
                }
                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t, 10)),
                    "string" == typeof e && (e = parseInt(e, 10)),
                    t % e
                }
                var $bm_sum = sum
                  , $bm_sub = sub
                  , $bm_mul = mul
                  , $bm_div = div
                  , $bm_mod = mod;
                function clamp(t, e, i) {
                    if (e > i) {
                        var s = i;
                        i = e,
                        e = s
                    }
                    return Math.min(Math.max(t, e), i)
                }
                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees
                  , helperLengthArray = [0, 0, 0, 0, 0, 0];
                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number)
                        return e = e || 0,
                        Math.abs(t - e);
                    e || (e = helperLengthArray);
                    var i, s = Math.min(t.length, e.length), r = 0;
                    for (i = 0; i < s; i += 1)
                        r += Math.pow(e[i] - t[i], 2);
                    return Math.sqrt(r)
                }
                function normalize(t) {
                    return div(t, length(t))
                }
                function rgbToHsl(t) {
                    var e, i, s = t[0], r = t[1], a = t[2], n = Math.max(s, r, a), o = Math.min(s, r, a), h = (n + o) / 2;
                    if (n === o)
                        e = 0,
                        i = 0;
                    else {
                        var l = n - o;
                        switch (i = h > .5 ? l / (2 - n - o) : l / (n + o),
                        n) {
                        case s:
                            e = (r - a) / l + (r < a ? 6 : 0);
                            break;
                        case r:
                            e = (a - s) / l + 2;
                            break;
                        case a:
                            e = (s - r) / l + 4
                        }
                        e /= 6
                    }
                    return [e, i, h, t[3]]
                }
                function hue2rgb(t, e, i) {
                    return i < 0 && (i += 1),
                    i > 1 && (i -= 1),
                    i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                function hslToRgb(t) {
                    var e, i, s, r = t[0], a = t[1], n = t[2];
                    if (0 === a)
                        e = n,
                        s = n,
                        i = n;
                    else {
                        var o = n < .5 ? n * (1 + a) : n + a - n * a
                          , h = 2 * n - o;
                        e = hue2rgb(h, o, r + 1 / 3),
                        i = hue2rgb(h, o, r),
                        s = hue2rgb(h, o, r - 1 / 3)
                    }
                    return [e, i, s, t[3]]
                }
                function linear(t, e, i, s, r) {
                    if (void 0 !== s && void 0 !== r || (s = e,
                    r = i,
                    e = 0,
                    i = 1),
                    i < e) {
                        var a = i;
                        i = e,
                        e = a
                    }
                    if (t <= e)
                        return s;
                    if (t >= i)
                        return r;
                    var n, o = i === e ? 0 : (t - e) / (i - e);
                    if (!s.length)
                        return s + (r - s) * o;
                    var h = s.length
                      , l = createTypedArray("float32", h);
                    for (n = 0; n < h; n += 1)
                        l[n] = s[n] + (r[n] - s[n]) * o;
                    return l
                }
                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0,
                    e = 1) : (e = t,
                    t = void 0)),
                    e.length) {
                        var i, s = e.length;
                        t || (t = createTypedArray("float32", s));
                        var r = createTypedArray("float32", s)
                          , a = BMMath.random();
                        for (i = 0; i < s; i += 1)
                            r[i] = t[i] + a * (e[i] - t[i]);
                        return r
                    }
                    return void 0 === t && (t = 0),
                    t + BMMath.random() * (e - t)
                }
                function createPath(t, e, i, s) {
                    var r, a = t.length, n = shapePool.newElement();
                    n.setPathData(!!s, a);
                    var o, h, l = [0, 0];
                    for (r = 0; r < a; r += 1)
                        o = e && e[r] ? e[r] : l,
                        h = i && i[r] ? i[r] : l,
                        n.setTripleAt(t[r][0], t[r][1], h[0] + t[r][0], h[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
                    return n
                }
                function initiateExpression(elem, data, property) {
                    function noOp(t) {
                        return t
                    }
                    if (!elem.globalData.renderConfig.runExpressions)
                        return noOp;
                    var transform, $bm_transform, content, effect, val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime,
                    Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }),
                    elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                    elem.comp.displayStartTime = 0;
                    var loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = (function(t, e) {
                        var i, s, r = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", r), n = Math.floor(5 * time);
                        for (i = 0,
                        s = 0; i < n; ) {
                            for (s = 0; s < r; s += 1)
                                a[s] += -e + 2 * e * BMMath.random();
                            i += 1
                        }
                        var o = 5 * time
                          , h = o - Math.floor(o)
                          , l = createTypedArray("float32", r);
                        if (r > 1) {
                            for (s = 0; s < r; s += 1)
                                l[s] = this.pv[s] + a[s] + (-e + 2 * e * BMMath.random()) * h;
                            return l
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                    }
                    ).bind(this);
                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }
                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                    loop_in = loopIn),
                    thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                    loop_out = loopOut),
                    thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                    this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                    this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var time, velocity, value, text, textIndex, textTotal, selectorValue, comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                    function lookAt(t, e) {
                        var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                          , s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                        return [-Math.atan2(i[1], i[2]) / degToRads, s, 0]
                    }
                    function easeOut(t, e, i, s, r) {
                        return applyEase(easeOutBez, t, e, i, s, r)
                    }
                    function easeIn(t, e, i, s, r) {
                        return applyEase(easeInBez, t, e, i, s, r)
                    }
                    function ease(t, e, i, s, r) {
                        return applyEase(easeInOutBez, t, e, i, s, r)
                    }
                    function applyEase(t, e, i, s, r, a) {
                        void 0 === r ? (r = i,
                        a = s) : e = (e - i) / (s - i),
                        e > 1 ? e = 1 : e < 0 && (e = 0);
                        var n = t(e);
                        if ($bm_isInstanceOfArray(r)) {
                            var o, h = r.length, l = createTypedArray("float32", h);
                            for (o = 0; o < h; o += 1)
                                l[o] = (a[o] - r[o]) * n + r[o];
                            return l
                        }
                        return (a - r) * n + r
                    }
                    function nearestKey(t) {
                        var e, i, s, r = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0]) {
                            if (i = -1,
                            (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                                i = 1,
                                s = data.k[0].t;
                            else {
                                for (e = 0; e < r - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        i = e + 1,
                                        s = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2,
                                        s = data.k[e + 1].t) : (i = e + 1,
                                        s = data.k[e].t);
                                        break
                                    }
                                }
                                -1 === i && (i = e + 1,
                                s = data.k[e].t)
                            }
                        } else
                            i = 0,
                            s = 0;
                        var a = {};
                        return a.index = i,
                        a.time = s / elem.comp.globalData.frameRate,
                        a
                    }
                    function key(t) {
                        if (!data.k.length || "number" == typeof data.k[0])
                            throw Error("The property has no keyframe at index " + t);
                        t -= 1,
                        e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var e, i, s, r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (s = r.length,
                        i = 0; i < s; i += 1)
                            e[i] = r[i],
                            e.value[i] = r[i];
                        return e
                    }
                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate),
                        t / e
                    }
                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time),
                        e || (e = elem.comp.globalData.frameRate),
                        t * e
                    }
                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }
                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }
                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }
                    function posterizeTime(t) {
                        value = valueAtTime(time = 0 === t ? 0 : Math.floor(time * t) / t)
                    }
                    var parent, index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                    function executeExpression(t) {
                        return value = t,
                        this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex,
                        textTotal = this.textTotal,
                        selectorValue = this.selectorValue),
                        thisLayer || (text = elem.layerInterface.text,
                        thisLayer = elem.layerInterface,
                        thisComp = elem.comp.compInterface,
                        toWorld = thisLayer.toWorld.bind(thisLayer),
                        fromWorld = thisLayer.fromWorld.bind(thisLayer),
                        fromComp = thisLayer.fromComp.bind(thisLayer),
                        toComp = thisLayer.toComp.bind(thisLayer),
                        mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                        fromCompToSurface = fromComp),
                        transform || ($bm_transform = transform = elem.layerInterface("ADBE Transform Group"),
                        transform && (anchorPoint = transform.anchorPoint)),
                        4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                        effect || (effect = thisLayer(4)),
                        (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface),
                        time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        _needsRandom && seedRandom(randSeed + time),
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        this.frameExpressionId = elem.globalData.frameId,
                        scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                    }
                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData],
                    executeExpression
                }
                return ob.initiateExpression = initiateExpression,
                ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath],
                ob
            }()
              , expressionHelpers = {
                searchExpressions: function(t, e, i) {
                    e.x && (i.k = !0,
                    i.x = !0,
                    i.initiateExpression = ExpressionManager.initiateExpression,
                    i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                },
                getSpeedAtTime: function(t) {
                    var e, i = this.getValueAtTime(t), s = this.getValueAtTime(t + -.01), r = 0;
                    if (i.length) {
                        for (e = 0; e < i.length; e += 1)
                            r += Math.pow(s[e] - i[e], 2);
                        r = 100 * Math.sqrt(r)
                    } else
                        r = 0;
                    return r
                },
                getVelocityAtTime: function(t) {
                    if (void 0 !== this.vel)
                        return this.vel;
                    var e, i, s = -.001, r = this.getValueAtTime(t), a = this.getValueAtTime(t + s);
                    if (r.length)
                        for (e = createTypedArray("float32", r.length),
                        i = 0; i < r.length; i += 1)
                            e[i] = (a[i] - r[i]) / s;
                    else
                        e = (a - r) / s;
                    return e
                },
                getValueAtTime: function(t) {
                    return t *= this.elem.globalData.frameRate,
                    (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0,
                    this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime),
                    this._cachingAtTime.lastFrame = t),
                    this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(t) {
                    this.propertyGroup = t
                }
            };
            function addPropertyDecorator() {
                function t(t, e, i) {
                    if (!this.k || !this.keyframes)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var s, r, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
                    if (h <= p)
                        return this.pv;
                    if (i ? r = p - (s = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1),
                    s = p - (r = l[l.length - 1 - e].t)),
                    "pingpong" === t) {
                        if (Math.floor((h - r) / s) % 2 != 0)
                            return this.getValueAtTime((s - (h - r) % s + r) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var f = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                              , u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , c = this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
                              , m = Math.floor((h - r) / s);
                            if (this.pv.length) {
                                for (n = (o = Array(f.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = (u[a] - f[a]) * m + c[a];
                                return o
                            }
                            return (u - f) * m + c
                        }
                        if ("continue" === t) {
                            var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = Array(d.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = d[a] + (d[a] - g[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                return o
                            }
                            return d + (h - p) / .001 * (d - g)
                        }
                    }
                    return this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
                }
                function e(t, e, i) {
                    if (!this.k)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var s, r, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
                    if (h >= p)
                        return this.pv;
                    if (i ? r = p + (s = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1),
                    s = (r = l[e].t) - p),
                    "pingpong" === t) {
                        if (Math.floor((p - h) / s) % 2 == 0)
                            return this.getValueAtTime(((p - h) % s + p) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , u = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                              , c = this.getValueAtTime((s - (p - h) % s + p) / this.comp.globalData.frameRate, 0)
                              , m = Math.floor((p - h) / s) + 1;
                            if (this.pv.length) {
                                for (n = (o = Array(f.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = c[a] - (u[a] - f[a]) * m;
                                return o
                            }
                            return c - (u - f) * m
                        }
                        if ("continue" === t) {
                            var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = Array(d.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = d[a] + (d[a] - g[a]) * (p - h) / .001;
                                return o
                            }
                            return d + (d - g) * (p - h) / .001
                        }
                    }
                    return this.getValueAtTime((s - ((p - h) % s + p)) / this.comp.globalData.frameRate, 0)
                }
                function i(t, e) {
                    if (!this.k || (t = .5 * (t || .4),
                    (e = Math.floor(e || 5)) <= 1))
                        return this.pv;
                    var i, s, r = this.comp.renderedFrame / this.comp.globalData.frameRate, a = r - t, n = e > 1 ? (r + t - a) / (e - 1) : 1, o = 0, h = 0;
                    for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e; ) {
                        if (s = this.getValueAtTime(a + o * n),
                        this.pv.length)
                            for (h = 0; h < this.pv.length; h += 1)
                                i[h] += s[h];
                        else
                            i += s;
                        o += 1
                    }
                    if (this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1)
                            i[h] /= e;
                    else
                        i /= e;
                    return i
                }
                function s(t) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var e = this._transformCachingAtTime.v;
                    if (e.cloneFromProps(this.pre.props),
                    this.appliedTransformations < 1) {
                        var i = this.a.getValueAtTime(t);
                        e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var s = this.s.getValueAtTime(t);
                        e.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var r = this.sk.getValueAtTime(t)
                          , a = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-r * this.sk.mult, a * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var n = this.r.getValueAtTime(t);
                        e.rotate(-n * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var o = this.rz.getValueAtTime(t)
                          , h = this.ry.getValueAtTime(t)
                          , l = this.rx.getValueAtTime(t)
                          , p = this.or.getValueAtTime(t);
                        e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var f = this.px.getValueAtTime(t)
                          , u = this.py.getValueAtTime(t);
                        if (this.data.p.z) {
                            var c = this.pz.getValueAtTime(t);
                            e.translate(f * this.px.mult, u * this.py.mult, -c * this.pz.mult)
                        } else
                            e.translate(f * this.px.mult, u * this.py.mult, 0)
                    } else {
                        var m = this.p.getValueAtTime(t);
                        e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
                    }
                    return e
                }
                function r() {
                    return this.v.clone(new Matrix)
                }
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                    var n = a(t, e, i);
                    return n.dynamicProperties.length ? n.getValueAtTime = s.bind(n) : n.getValueAtTime = r.bind(n),
                    n.setGroupProperty = expressionHelpers.setGroupProperty,
                    n
                }
                ;
                var n = PropertyFactory.getProp;
                PropertyFactory.getProp = function(s, r, a, o, h) {
                    var l = n(s, r, a, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l),
                    l.setGroupProperty = expressionHelpers.setGroupProperty,
                    l.loopOut = t,
                    l.loopIn = e,
                    l.smooth = i,
                    l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l),
                    l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l),
                    l.numKeys = 1 === r.a ? r.k.length : 0,
                    l.propertyIndex = r.ix;
                    var p = 0;
                    return 0 !== a && (p = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)),
                    l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p
                    },
                    expressionHelpers.searchExpressions(s, r, l),
                    l.k && h.addDynamicProperty(l),
                    l
                }
                ;
                var o = ShapePropertyFactory.getConstructorFunction()
                  , h = ShapePropertyFactory.getKeyframedConstructorFunction();
                function l() {}
                l.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var i, s = this.v;
                        void 0 !== e && (s = this.getValueAtTime(e, 0));
                        var r = s._length
                          , a = s[t]
                          , n = s.v
                          , o = createSizedArray(r);
                        for (i = 0; i < r; i += 1)
                            o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
                        return o
                    },
                    points: function(t) {
                        return this.vertices("v", t)
                    },
                    inTangents: function(t) {
                        return this.vertices("i", t)
                    },
                    outTangents: function(t) {
                        return this.vertices("o", t)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(t, e) {
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0)),
                        this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                        for (var s, r = this._segmentsLength, a = r.lengths, n = r.totalLength * t, o = 0, h = a.length, l = 0; o < h; ) {
                            if (l + a[o].addedLength > n) {
                                var p = o
                                  , f = i.c && o === h - 1 ? 0 : o + 1
                                  , u = (n - l) / a[o].addedLength;
                                s = bez.getPointInSegment(i.v[p], i.v[f], i.o[p], i.i[f], u, a[o]);
                                break
                            }
                            l += a[o].addedLength,
                            o += 1
                        }
                        return s || (s = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                        s
                    },
                    vectorOnPath: function(t, e, i) {
                        1 == t ? t = this.v.c : 0 == t && (t = .999);
                        var s = this.pointOnPath(t, e)
                          , r = this.pointOnPath(t + .001, e)
                          , a = r[0] - s[0]
                          , n = r[1] - s[1]
                          , o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                        return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o]
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent")
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                },
                extendPrototype([l], o),
                extendPrototype([l], h),
                h.prototype.getValueAtTime = function(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }),
                    t *= this.elem.globalData.frameRate,
                    (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0,
                    this._cachingAtTime.lastTime = t,
                    this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                    this._cachingAtTime.shapeValue
                }
                ,
                h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var p = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, i, s, r) {
                    var a = p(t, e, i, s, r);
                    return a.propertyIndex = e.ix,
                    a.lock = !1,
                    3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a),
                    a.k && t.addDynamicProperty(a),
                    a
                }
            }
            function initialize$1() {
                addPropertyDecorator()
            }
            function addDecorator() {
                TextProperty.prototype.getExpressionValue = function(t, e) {
                    var i = this.calculateExpression(e);
                    if (t.t !== i) {
                        var s = {};
                        return this.copyData(s, t),
                        s.t = i.toString(),
                        s.__complete = !1,
                        s
                    }
                    return t
                }
                ,
                TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes()
                      , e = this.searchExpressions();
                    return this.kf = t || e,
                    this.kf
                }
                ,
                TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
                    this.addEffect(this.getExpressionValue.bind(this)),
                    !0) : null
                }
            }
            function initialize() {
                addDecorator()
            }
            function SVGComposableEffect() {}
            SVGComposableEffect.prototype = {
                createMergeNode: function(t, e) {
                    var i, s, r = createNS("feMerge");
                    for (r.setAttribute("result", t),
                    s = 0; s < e.length; s += 1)
                        (i = createNS("feMergeNode")).setAttribute("in", e[s]),
                        r.appendChild(i),
                        r.appendChild(i);
                    return r
                }
            };
            var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
            function SVGTintFilter(t, e, i, s, r) {
                this.filterManager = e;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"),
                a.setAttribute("color-interpolation-filters", "linearRGB"),
                a.setAttribute("values", linearFilterValue + " 1 0"),
                this.linearFilter = a,
                a.setAttribute("result", s + "_tint_1"),
                t.appendChild(a),
                (a = createNS("feColorMatrix")).setAttribute("type", "matrix"),
                a.setAttribute("color-interpolation-filters", "sRGB"),
                a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                a.setAttribute("result", s + "_tint_2"),
                t.appendChild(a),
                this.matrixFilter = a;
                var n = this.createMergeNode(s, [r, s + "_tint_1", s + "_tint_2"]);
                t.appendChild(n)
            }
            function SVGFillFilter(t, e, i, s) {
                this.filterManager = e;
                var r = createNS("feColorMatrix");
                r.setAttribute("type", "matrix"),
                r.setAttribute("color-interpolation-filters", "sRGB"),
                r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                r.setAttribute("result", s),
                t.appendChild(r),
                this.matrixFilter = r
            }
            function SVGStrokeEffect(t, e, i) {
                this.initialized = !1,
                this.filterManager = e,
                this.elem = i,
                this.paths = []
            }
            function SVGTritoneFilter(t, e, i, s) {
                this.filterManager = e;
                var r = createNS("feColorMatrix");
                r.setAttribute("type", "matrix"),
                r.setAttribute("color-interpolation-filters", "linearRGB"),
                r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
                t.appendChild(r);
                var a = createNS("feComponentTransfer");
                a.setAttribute("color-interpolation-filters", "sRGB"),
                a.setAttribute("result", s),
                this.matrixFilter = a;
                var n = createNS("feFuncR");
                n.setAttribute("type", "table"),
                a.appendChild(n),
                this.feFuncR = n;
                var o = createNS("feFuncG");
                o.setAttribute("type", "table"),
                a.appendChild(o),
                this.feFuncG = o;
                var h = createNS("feFuncB");
                h.setAttribute("type", "table"),
                a.appendChild(h),
                this.feFuncB = h,
                t.appendChild(a)
            }
            function SVGProLevelsFilter(t, e, i, s) {
                this.filterManager = e;
                var r = this.filterManager.effectElements
                  , a = createNS("feComponentTransfer");
                (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)),
                (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)),
                (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)),
                (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)),
                (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(a)),
                (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"),
                a.setAttribute("result", s),
                t.appendChild(a),
                this.feFuncRComposed = this.createFeFunc("feFuncR", a),
                this.feFuncGComposed = this.createFeFunc("feFuncG", a),
                this.feFuncBComposed = this.createFeFunc("feFuncB", a))
            }
            function SVGDropShadowEffect(t, e, i, s, r) {
                var a = e.container.globalData.renderConfig.filterSize
                  , n = e.data.fs || a;
                t.setAttribute("x", n.x || a.x),
                t.setAttribute("y", n.y || a.y),
                t.setAttribute("width", n.width || a.width),
                t.setAttribute("height", n.height || a.height),
                this.filterManager = e;
                var o = createNS("feGaussianBlur");
                o.setAttribute("in", "SourceAlpha"),
                o.setAttribute("result", s + "_drop_shadow_1"),
                o.setAttribute("stdDeviation", "0"),
                this.feGaussianBlur = o,
                t.appendChild(o);
                var h = createNS("feOffset");
                h.setAttribute("dx", "25"),
                h.setAttribute("dy", "0"),
                h.setAttribute("in", s + "_drop_shadow_1"),
                h.setAttribute("result", s + "_drop_shadow_2"),
                this.feOffset = h,
                t.appendChild(h);
                var l = createNS("feFlood");
                l.setAttribute("flood-color", "#00ff00"),
                l.setAttribute("flood-opacity", "1"),
                l.setAttribute("result", s + "_drop_shadow_3"),
                this.feFlood = l,
                t.appendChild(l);
                var p = createNS("feComposite");
                p.setAttribute("in", s + "_drop_shadow_3"),
                p.setAttribute("in2", s + "_drop_shadow_2"),
                p.setAttribute("operator", "in"),
                p.setAttribute("result", s + "_drop_shadow_4"),
                t.appendChild(p);
                var f = this.createMergeNode(s, [s + "_drop_shadow_4", r]);
                t.appendChild(f)
            }
            extendPrototype([SVGComposableEffect], SVGTintFilter),
            SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v
                      , i = this.filterManager.effectElements[1].p.v
                      , s = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute("values", linearFilterValue + " " + s + " 0"),
                    this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
                }
            }
            ,
            SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v
                      , i = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                }
            }
            ,
            SVGStrokeEffect.prototype.initialize = function() {
                var t, e, i, s, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length,
                i = 0) : s = (i = this.filterManager.effectElements[0].p.v - 1) + 1,
                (e = createNS("g")).setAttribute("fill", "none"),
                e.setAttribute("stroke-linecap", "round"),
                e.setAttribute("stroke-dashoffset", 1); i < s; i += 1)
                    t = createNS("path"),
                    e.appendChild(t),
                    this.paths.push({
                        p: t,
                        m: i
                    });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS("mask")
                      , n = createElementID();
                    a.setAttribute("id", n),
                    a.setAttribute("mask-type", "alpha"),
                    a.appendChild(e),
                    this.elem.globalData.defs.appendChild(a);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); r[0]; )
                        o.appendChild(r[0]);
                    this.elem.layerElement.appendChild(o),
                    this.masker = a,
                    e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length; )
                            this.elem.layerElement.removeChild(r[0]);
                    this.elem.layerElement.appendChild(e),
                    this.elem.layerElement.removeAttribute("mask"),
                    e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0,
                this.pathMasker = e
            }
            ,
            SVGStrokeEffect.prototype.renderFrame = function(t) {
                this.initialized || this.initialize();
                var e, i, s, r = this.paths.length;
                for (e = 0; e < r; e += 1)
                    if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m],
                    s = this.paths[e].p,
                    (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath),
                    t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                              , n = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                              , o = s.getTotalLength();
                            h = "0 0 0 " + o * a + " ";
                            var h, l, p = Math.floor(o * (n - a) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
                            for (l = 0; l < p; l += 1)
                                h += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            h += "0 " + 10 * o + " 0 0"
                        } else
                            h = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        s.setAttribute("stroke-dasharray", h)
                    }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
                (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
                (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var f = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
                }
            }
            ,
            SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v
                      , i = this.filterManager.effectElements[1].p.v
                      , s = this.filterManager.effectElements[2].p.v
                      , r = s[0] + " " + i[0] + " " + e[0]
                      , a = s[1] + " " + i[1] + " " + e[1]
                      , n = s[2] + " " + i[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", r),
                    this.feFuncG.setAttribute("tableValues", a),
                    this.feFuncB.setAttribute("tableValues", n)
                }
            }
            ,
            SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var i = createNS(t);
                return i.setAttribute("type", "table"),
                e.appendChild(i),
                i
            }
            ,
            SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, s, r) {
                for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                    length: 256
                }), f = 0, u = r - s, c = e - t; o <= 256; )
                    n = (a = o / 256) <= h ? c < 0 ? r : s : a >= l ? c < 0 ? s : r : s + u * Math.pow((a - t) / c, 1 / i),
                    p[f] = n,
                    f += 1,
                    o += 256 / 255;
                return p.join(" ")
            }
            ,
            SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, i = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v),
                    this.feFuncRComposed.setAttribute("tableValues", e),
                    this.feFuncGComposed.setAttribute("tableValues", e),
                    this.feFuncBComposed.setAttribute("tableValues", e)),
                    this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v),
                    this.feFuncR.setAttribute("tableValues", e)),
                    this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v),
                    this.feFuncG.setAttribute("tableValues", e)),
                    this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v),
                    this.feFuncB.setAttribute("tableValues", e)),
                    this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v),
                    this.feFuncA.setAttribute("tableValues", e))
                }
            }
            ,
            extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
            SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                    t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                    t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var i = this.filterManager.effectElements[3].p.v
                          , s = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                          , r = i * Math.cos(s)
                          , a = i * Math.sin(s);
                        this.feOffset.setAttribute("dx", r),
                        this.feOffset.setAttribute("dy", a)
                    }
                }
            }
            ;
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, i) {
                this.initialized = !1,
                this.filterManager = e,
                this.filterElem = t,
                this.elem = i,
                i.matteElement = createNS("g"),
                i.matteElement.appendChild(i.layerElement),
                i.matteElement.appendChild(i.transformedElement),
                i.baseElement = i.matteElement
            }
            function SVGGaussianBlurEffect(t, e, i, s) {
                t.setAttribute("x", "-100%"),
                t.setAttribute("y", "-100%"),
                t.setAttribute("width", "300%"),
                t.setAttribute("height", "300%"),
                this.filterManager = e;
                var r = createNS("feGaussianBlur");
                r.setAttribute("result", s),
                t.appendChild(r),
                this.feGaussianBlur = r
            }
            return SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
                    if (_svgMatteSymbols[e] === t)
                        return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }
            ,
            SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    for (var s, r = i.children, a = 0, n = r.length; a < n && r[a] !== t.layerElement; )
                        a += 1;
                    a <= n - 2 && (s = r[a + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e),
                    s ? i.insertBefore(o, s) : i.appendChild(o)
                }
            }
            ,
            SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var i = createElementID()
                      , s = createNS("mask");
                    s.setAttribute("id", e.layerId),
                    s.setAttribute("mask-type", "alpha"),
                    _svgMatteSymbols.push(e);
                    var r = t.globalData.defs;
                    r.appendChild(s);
                    var a = createNS("symbol");
                    a.setAttribute("id", i),
                    this.replaceInParent(e, i),
                    a.appendChild(e.layerElement),
                    r.appendChild(a);
                    var n = createNS("use");
                    n.setAttribute("href", "#" + i),
                    s.appendChild(n),
                    e.data.hd = !1,
                    e.show()
                }
                t.setMatte(e.layerId)
            }
            ,
            SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s; )
                    e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]),
                    i += 1;
                this.initialized = !0
            }
            ,
            SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }
            ,
            SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v
                      , i = this.filterManager.effectElements[1].p.v
                      , s = 3 == i ? 0 : e
                      , r = 2 == i ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", s + " " + r);
                    var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a)
                }
            }
            ,
            setExpressionsPlugin(Expressions),
            setExpressionInterfaces(getInterface),
            initialize$1(),
            initialize(),
            registerEffect(20, SVGTintFilter, !0),
            registerEffect(21, SVGFillFilter, !0),
            registerEffect(22, SVGStrokeEffect, !1),
            registerEffect(23, SVGTritoneFilter, !0),
            registerEffect(24, SVGProLevelsFilter, !0),
            registerEffect(25, SVGDropShadowEffect, !0),
            registerEffect(28, SVGMatte3Effect, !1),
            registerEffect(29, SVGGaussianBlurEffect, !0),
            lottie
        })
    }
}]);
