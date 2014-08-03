/*
 *  Sugar Library v1.4.1
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2013 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function() {
    function aa(a) {
        return function() {
            return a
        }
    }
    var m = Object,
        p = Array,
        q = RegExp,
        r = Date,
        s = String,
        t = Number,
        u = Math,
        ba = "undefined" !== typeof global ? global : this,
        v = m.prototype.toString,
        da = m.prototype.hasOwnProperty,
        ea = m.defineProperty && m.defineProperties,
        fa = "function" === typeof q(),
        ga = !("0" in new s("a")),
        ia = {},
        ja = /^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/,
        w = "Boolean Number String Array Date RegExp Function".split(" "),
        la = ka("boolean", w[0]),
        y = ka("number", w[1]),
        z = ka("string", w[2]),
        A = ma(w[3]),
        C = ma(w[4]),
        D = ma(w[5]),
        F = ma(w[6]);

    function ma(a) {
        var b = "Array" === a && p.isArray || function(b, d) {
            return (d || v.call(b)) === "[object " + a + "]"
        };
        return ia[a] = b
    }

    function ka(a, b) {
        function c(c) {
            return G(c) ? v.call(c) === "[object " + b + "]" : typeof c === a
        }
        return ia[b] = c
    }

    function na(a) {
        a.SugarMethods || (oa(a, "SugarMethods", {}), H(a, !1, !0, {
            extend: function(b, c, d) {
                H(a, !1 !== d, c, b)
            },
            sugarRestore: function() {
                return pa(this, a, arguments, function(a, c, d) {
                    oa(a, c, d.method)
                })
            },
            sugarRevert: function() {
                return pa(this, a, arguments, function(a, c, d) {
                    d.existed ? oa(a, c, d.original) : delete a[c]
                })
            }
        }))
    }

    function H(a, b, c, d) {
        var e = b ? a.prototype : a;
        na(a);
        I(d, function(d, f) {
            var h = e[d],
                l = J(e, d);
            F(c) && h && (f = qa(h, f, c));
            !1 === c && h || oa(e, d, f);
            a.SugarMethods[d] = {
                method: f,
                existed: l,
                original: h,
                instance: b
            }
        })
    }

    function K(a, b, c, d, e) {
        var g = {};
        d = z(d) ? d.split(",") : d;
        d.forEach(function(a, b) {
            e(g, a, b)
        });
        H(a, b, c, g)
    }

    function pa(a, b, c, d) {
        var e = 0 === c.length,
            g = L(c),
            f = !1;
        I(b.SugarMethods, function(b, c) {
            if (e || -1 !== g.indexOf(b)) f = !0, d(c.instance ? a.prototype : a, b, c)
        });
        return f
    }

    function qa(a, b, c) {
        return function(d) {
            return c.apply(this, arguments) ? b.apply(this, arguments) : a.apply(this, arguments)
        }
    }

    function oa(a, b, c) {
        ea ? m.defineProperty(a, b, {
            value: c,
            configurable: !0,
            enumerable: !1,
            writable: !0
        }) : a[b] = c
    }

    function L(a, b, c) {
        var d = [];
        c = c || 0;
        var e;
        for (e = a.length; c < e; c++) d.push(a[c]), b && b.call(a, a[c], c);
        return d
    }

    function sa(a, b, c) {
        var d = a[c || 0];
        A(d) && (a = d, c = 0);
        L(a, b, c)
    }

    function ta(a) {
        if (!a || !a.call) throw new TypeError("Callback is not callable");
    }

    function M(a) {
        return void 0 !== a
    }

    function N(a) {
        return void 0 === a
    }

    function J(a, b) {
        return !!a && da.call(a, b)
    }

    function G(a) {
        return !!a && ("object" === typeof a || fa && D(a))
    }

    function ua(a) {
        var b = typeof a;
        return null == a || "string" === b || "number" === b || "boolean" === b
    }

    function va(a, b) {
        b = b || v.call(a);
        try {
            if (a && a.constructor && !J(a, "constructor") && !J(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        return !!a && "[object Object]" === b && "hasOwnProperty" in a
    }

    function I(a, b) {
        for (var c in a)
            if (J(a, c) && !1 === b.call(a, c, a[c], a)) break
    }

    function wa(a, b) {
        for (var c = 0; c < a; c++) b(c)
    }

    function xa(a, b) {
        I(b, function(c) {
            a[c] = b[c]
        });
        return a
    }

    function ya(a) {
        ua(a) && (a = m(a));
        if (ga && z(a))
            for (var b = a, c = 0, d; d = b.charAt(c);) b[c++] = d;
        return a
    }

    function O(a) {
        xa(this, ya(a))
    }
    O.prototype.constructor = m;
    var P = u.abs,
        za = u.pow,
        Aa = u.ceil,
        Q = u.floor,
        R = u.round,
        Ca = u.min,
        S = u.max;

    function Da(a, b, c) {
        var d = za(10, P(b || 0));
        c = c || R;
        0 > b && (d = 1 / d);
        return c(a * d) / d
    }
    var Ea = 48,
        Fa = 57,
        Ga = 65296,
        Ha = 65305,
        Ia = ".",
        Ja = "",
        Ka = {},
        La;

    function Ma() {
        return "\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u2028\u2029\u3000\ufeff"
    }

    function Na(a, b) {
        var c = "";
        for (a = a.toString(); 0 < b;)
            if (b & 1 && (c += a), b >>= 1) a += a;
        return c
    }

    function Oa(a, b) {
        var c, d;
        c = a.replace(La, function(a) {
            a = Ka[a];
            a === Ia && (d = !0);
            return a
        });
        return d ? parseFloat(c) : parseInt(c, b || 10)
    }

    function T(a, b, c, d) {
        d = P(a).toString(d || 10);
        d = Na("0", b - d.replace(/\.\d+/, "").length) + d;
        if (c || 0 > a) d = (0 > a ? "-" : "+") + d;
        return d
    }

    function Pa(a) {
        if (11 <= a && 13 >= a) return "th";
        switch (a % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th"
        }
    }

    function Qa(a, b) {
        function c(a, c) {
            if (a || -1 < b.indexOf(c)) d += c
        }
        var d = "";
        b = b || "";
        c(a.multiline, "m");
        c(a.ignoreCase, "i");
        c(a.global, "g");
        c(a.u, "y");
        return d
    }

    function Ra(a) {
        z(a) || (a = s(a));
        return a.replace(/([\\/\'*+?|()\[\]{}.^$])/g, "\\$1")
    }

    function U(a, b) {
        return a["get" + (a._utc ? "UTC" : "") + b]()
    }

    function Sa(a, b, c) {
        return a["set" + (a._utc && "ISOWeek" != b ? "UTC" : "") + b](c)
    }

    function Ta(a, b) {
        var c = typeof a,
            d, e, g, f, h, l, n;
        if ("string" === c) return a;
        g = v.call(a);
        d = va(a, g);
        e = A(a, g);
        if (null != a && d || e) {
            b || (b = []);
            if (1 < b.length)
                for (l = b.length; l--;)
                    if (b[l] === a) return "CYC";
            b.push(a);
            d = a.valueOf() + s(a.constructor);
            f = e ? a : m.keys(a).sort();
            l = 0;
            for (n = f.length; l < n; l++) h = e ? l : f[l], d += h + Ta(a[h], b);
            b.pop()
        } else d = -Infinity === 1 / a ? "-0" : s(a && a.valueOf ? a.valueOf() : a);
        return c + g + d
    }

    function Ua(a, b) {
        return a === b ? 0 !== a || 1 / a === 1 / b : Va(a) && Va(b) ? Ta(a) === Ta(b) : !1
    }

    function Va(a) {
        var b = v.call(a);
        return ja.test(b) || va(a, b)
    }

    function Wa(a, b, c) {
        var d, e = a.length,
            g = b.length,
            f = !1 !== b[g - 1];
        if (!(g > (f ? 1 : 2))) return Xa(a, e, b[0], f, c);
        d = [];
        L(b, function(b) {
            if (la(b)) return !1;
            d.push(Xa(a, e, b, f, c))
        });
        return d
    }

    function Xa(a, b, c, d, e) {
        d && (c %= b, 0 > c && (c = b + c));
        return e ? a.charAt(c) : a[c]
    }

    function Ya(a, b) {
        K(b, !0, !1, a, function(a, b) {
            a[b + ("equal" === b ? "s" : "")] = function() {
                return m[b].apply(null, [this].concat(L(arguments)))
            }
        })
    }
    na(m);
    I(w, function(a, b) {
        na(ba[b])
    });
    var Za, $a;
    for ($a = 0; 9 >= $a; $a++) Za = s.fromCharCode($a + Ga), Ja += Za, Ka[Za] = s.fromCharCode($a + Ea);
    Ka[","] = "";
    Ka["\uff0e"] = Ia;
    Ka[Ia] = Ia;
    La = q("[" + Ja + "\uff0e," + Ia + "]", "g");
    "use strict";
    H(m, !1, !1, {
        keys: function(a) {
            var b = [];
            if (!G(a) && !D(a) && !F(a)) throw new TypeError("Object required");
            I(a, function(a) {
                b.push(a)
            });
            return b
        }
    });

    function ab(a, b, c, d) {
        var e = a.length,
            g = -1 == d,
            f = g ? e - 1 : 0;
        c = isNaN(c) ? f : parseInt(c >> 0);
        0 > c && (c = e + c);
        if (!g && 0 > c || g && c >= e) c = f;
        for (; g && 0 <= c || !g && c < e;) {
            if (a[c] === b) return c;
            c += d
        }
        return -1
    }

    function bb(a, b, c, d) {
        var e = a.length,
            g = 0,
            f = M(c);
        ta(b);
        if (0 != e || f) f || (c = a[d ? e - 1 : g], g++);
        else throw new TypeError("Reduce called on empty array with no initial value");
        for (; g < e;) f = d ? e - g - 1 : g, f in a && (c = b(c, a[f], f, a)), g++;
        return c
    }

    function cb(a) {
        if (0 === a.length) throw new TypeError("First argument must be defined");
    }
    H(p, !1, !1, {
        isArray: function(a) {
            return A(a)
        }
    });
    H(p, !0, !1, {
        every: function(a, b) {
            var c = this.length,
                d = 0;
            for (cb(arguments); d < c;) {
                if (d in this && !a.call(b, this[d], d, this)) return !1;
                d++
            }
            return !0
        },
        some: function(a, b) {
            var c = this.length,
                d = 0;
            for (cb(arguments); d < c;) {
                if (d in this && a.call(b, this[d], d, this)) return !0;
                d++
            }
            return !1
        },
        map: function(a, b) {
            b = arguments[1];
            var c = this.length,
                d = 0,
                e = Array(c);
            for (cb(arguments); d < c;) d in this && (e[d] = a.call(b, this[d], d, this)), d++;
            return e
        },
        filter: function(a) {
            var b = arguments[1],
                c = this.length,
                d = 0,
                e = [];
            for (cb(arguments); d < c;) d in
                this && a.call(b, this[d], d, this) && e.push(this[d]), d++;
            return e
        },
        indexOf: function(a, b) {
            return z(this) ? this.indexOf(a, b) : ab(this, a, b, 1)
        },
        lastIndexOf: function(a, b) {
            return z(this) ? this.lastIndexOf(a, b) : ab(this, a, b, -1)
        },
        forEach: function(a, b) {
            var c = this.length,
                d = 0;
            for (ta(a); d < c;) d in this && a.call(b, this[d], d, this), d++
        },
        reduce: function(a, b) {
            return bb(this, a, b)
        },
        reduceRight: function(a, b) {
            return bb(this, a, b, !0)
        }
    });
    H(Function, !0, !1, {
        bind: function(a) {
            var b = this,
                c = L(arguments, null, 1),
                d;
            if (!F(this)) throw new TypeError("Function.prototype.bind called on a non-function");
            d = function() {
                return b.apply(b.prototype && this instanceof b ? this : a, c.concat(L(arguments)))
            };
            d.prototype = this.prototype;
            return d
        }
    });
    H(r, !1, !1, {
        now: function() {
            return (new r).getTime()
        }
    });
    (function() {
        var a = Ma().match(/^\s+$/);
        try {
            s.prototype.trim.call([1])
        } catch (b) {
            a = !1
        }
        H(s, !0, !a, {
            trim: function() {
                return this.toString().trimLeft().trimRight()
            },
            trimLeft: function() {
                return this.replace(q("^[" + Ma() + "]+"), "")
            },
            trimRight: function() {
                return this.replace(q("[" + Ma() + "]+$"), "")
            }
        })
    })();
    (function() {
        var a = new r(r.UTC(1999, 11, 31)),
            a = a.toISOString && "1999-12-31T00:00:00.000Z" === a.toISOString();
        K(r, !0, !a, "toISOString,toJSON", function(a, c) {
            a[c] = function() {
                return T(this.getUTCFullYear(), 4) + "-" + T(this.getUTCMonth() + 1, 2) + "-" + T(this.getUTCDate(), 2) + "T" + T(this.getUTCHours(), 2) + ":" + T(this.getUTCMinutes(), 2) + ":" + T(this.getUTCSeconds(), 2) + "." + T(this.getUTCMilliseconds(), 3) + "Z"
            }
        })
    })();
    "use strict";

    function db(a) {
        a = q(a);
        return function(b) {
            return a.test(b)
        }
    }

    function eb(a) {
        var b = a.getTime();
        return function(a) {
            return !(!a || !a.getTime) && a.getTime() === b
        }
    }

    function fb(a) {
        return function(b, c, d) {
            return b === a || a.call(this, b, c, d)
        }
    }

    function gb(a) {
        return function(b, c, d) {
            return b === a || a.call(d, c, b, d)
        }
    }

    function hb(a, b) {
        var c = {};
        return function(d, e, g) {
            var f;
            if (!G(d)) return !1;
            for (f in a)
                if (c[f] = c[f] || ib(a[f], b), !1 === c[f].call(g, d[f], e, g)) return !1;
            return !0
        }
    }

    function jb(a) {
        return function(b) {
            return b === a || Ua(b, a)
        }
    }

    function ib(a, b) {
        if (!ua(a)) {
            if (D(a)) return db(a);
            if (C(a)) return eb(a);
            if (F(a)) return b ? gb(a) : fb(a);
            if (va(a)) return hb(a, b)
        }
        return jb(a)
    }

    function kb(a, b, c, d) {
        return b ? b.apply ? b.apply(c, d || []) : F(a[b]) ? a[b].call(a) : a[b] : a
    }

    function V(a, b, c, d) {
        var e = +a.length;
        0 > c && (c = a.length + c);
        c = isNaN(c) ? 0 : c;
        for (!0 === d && (e += c); c < e;) {
            d = c % a.length;
            if (!(d in a)) {
                lb(a, b, c);
                break
            }
            if (!1 === b.call(a, a[d], d, a)) break;
            c++
        }
    }

    function lb(a, b, c) {
        var d = [],
            e;
        for (e in a) e in a && (e >>> 0 == e && 4294967295 != e) && e >= c && d.push(parseInt(e));
        d.sort().each(function(c) {
            return b.call(a, a[c], c, a)
        })
    }

    function mb(a, b, c, d, e, g) {
        var f, h, l;
        0 < a.length && (l = ib(b), V(a, function(b, c) {
            if (l.call(g, b, c, a)) return f = b, h = c, !1
        }, c, d));
        return e ? h : f
    }

    function nb(a, b) {
        var c = [],
            d = {},
            e;
        V(a, function(g, f) {
            e = b ? kb(g, b, a, [g, f, a]) : g;
            ob(d, e) || c.push(g)
        });
        return c
    }

    function pb(a, b, c) {
        var d = [],
            e = {};
        b.each(function(a) {
            ob(e, a)
        });
        a.each(function(a) {
            var b = Ta(a),
                h = !Va(a);
            if (qb(e, b, a, h) !== c) {
                var l = 0;
                if (h)
                    for (b = e[b]; l < b.length;) b[l] === a ? b.splice(l, 1) : l += 1;
                else delete e[b];
                d.push(a)
            }
        });
        return d
    }

    function rb(a, b, c) {
        b = b || Infinity;
        c = c || 0;
        var d = [];
        V(a, function(a) {
            A(a) && c < b ? d = d.concat(rb(a, b, c + 1)) : d.push(a)
        });
        return d
    }

    function sb(a) {
        var b = [];
        L(a, function(a) {
            b = b.concat(a)
        });
        return b
    }

    function qb(a, b, c, d) {
        var e = b in a;
        d && (a[b] || (a[b] = []), e = -1 !== a[b].indexOf(c));
        return e
    }

    function ob(a, b) {
        var c = Ta(b),
            d = !Va(b),
            e = qb(a, c, b, d);
        d ? a[c].push(b) : a[c] = b;
        return e
    }

    function tb(a, b, c, d) {
        var e, g, f, h = [],
            l = "max" === c,
            n = "min" === c,
            x = p.isArray(a);
        for (e in a)
            if (a.hasOwnProperty(e)) {
                c = a[e];
                f = kb(c, b, a, x ? [c, parseInt(e), a] : []);
                if (N(f)) throw new TypeError("Cannot compare with undefined");
                if (f === g) h.push(c);
                else if (N(g) || l && f > g || n && f < g) h = [c], g = f
            }
        x || (h = rb(h, 1));
        return d ? h : h[0]
    }

    function ub(a, b) {
        var c, d, e, g, f = 0,
            h = 0;
        c = p[xb];
        d = p[yb];
        var l = p[zb],
            n = p[Ab],
            x = p[Bb];
        a = Cb(a, c, d);
        b = Cb(b, c, d);
        do c = a.charAt(f), e = l[c] || c, c = b.charAt(f), g = l[c] || c, c = e ? n.indexOf(e) : null, d = g ? n.indexOf(g) : null, -1 === c || -1 === d ? (c = a.charCodeAt(f) || null, d = b.charCodeAt(f) || null, x && ((c >= Ea && c <= Fa || c >= Ga && c <= Ha) && (d >= Ea && d <= Fa || d >= Ga && d <= Ha)) && (c = Oa(a.slice(f)), d = Oa(b.slice(f)))) : (e = e !== a.charAt(f), g = g !== b.charAt(f), e !== g && 0 === h && (h = e - g)), f += 1; while (null != c && null != d && c === d);
        return c === d ? h : c - d
    }

    function Cb(a, b, c) {
        z(a) || (a = s(a));
        c && (a = a.toLowerCase());
        b && (a = a.replace(b, ""));
        return a
    }
    var Ab = "AlphanumericSortOrder",
        xb = "AlphanumericSortIgnore",
        yb = "AlphanumericSortIgnoreCase",
        zb = "AlphanumericSortEquivalents",
        Bb = "AlphanumericSortNatural";
    H(p, !1, !0, {
        create: function() {
            var a = [];
            L(arguments, function(b) {
                if (!ua(b) && "length" in b && ("[object Arguments]" === v.call(b) || b.callee) || !ua(b) && "length" in b && !z(b) && !va(b)) b = p.prototype.slice.call(b, 0);
                a = a.concat(b)
            });
            return a
        }
    });
    H(p, !0, !1, {
        find: function(a, b) {
            ta(a);
            return mb(this, a, 0, !1, !1, b)
        },
        findIndex: function(a, b) {
            var c;
            ta(a);
            c = mb(this, a, 0, !1, !0, b);
            return N(c) ? -1 : c
        }
    });
    H(p, !0, !0, {
        findFrom: function(a, b, c) {
            return mb(this, a, b, c)
        },
        findIndexFrom: function(a, b, c) {
            b = mb(this, a, b, c, !0);
            return N(b) ? -1 : b
        },
        findAll: function(a, b, c) {
            var d = [],
                e;
            0 < this.length && (e = ib(a), V(this, function(a, b, c) {
                e(a, b, c) && d.push(a)
            }, b, c));
            return d
        },
        count: function(a) {
            return N(a) ? this.length : this.findAll(a).length
        },
        removeAt: function(a, b) {
            if (N(a)) return this;
            N(b) && (b = a);
            this.splice(a, b - a + 1);
            return this
        },
        include: function(a, b) {
            return this.clone().add(a, b)
        },
        exclude: function() {
            return p.prototype.remove.apply(this.clone(),
                arguments)
        },
        clone: function() {
            return xa([], this)
        },
        unique: function(a) {
            return nb(this, a)
        },
        flatten: function(a) {
            return rb(this, a)
        },
        union: function() {
            return nb(this.concat(sb(arguments)))
        },
        intersect: function() {
            return pb(this, sb(arguments), !1)
        },
        subtract: function(a) {
            return pb(this, sb(arguments), !0)
        },
        at: function() {
            return Wa(this, arguments)
        },
        first: function(a) {
            if (N(a)) return this[0];
            0 > a && (a = 0);
            return this.slice(0, a)
        },
        last: function(a) {
            return N(a) ? this[this.length - 1] : this.slice(0 > this.length - a ? 0 : this.length - a)
        },
        from: function(a) {
            return this.slice(a)
        },
        to: function(a) {
            N(a) && (a = this.length);
            return this.slice(0, a)
        },
        min: function(a, b) {
            return tb(this, a, "min", b)
        },
        max: function(a, b) {
            return tb(this, a, "max", b)
        },
        least: function(a, b) {
            return tb(this.groupBy.apply(this, [a]), "length", "min", b)
        },
        most: function(a, b) {
            return tb(this.groupBy.apply(this, [a]), "length", "max", b)
        },
        sum: function(a) {
            a = a ? this.map(a) : this;
            return 0 < a.length ? a.reduce(function(a, c) {
                return a + c
            }) : 0
        },
        average: function(a) {
            a = a ? this.map(a) : this;
            return 0 < a.length ? a.sum() /
                a.length : 0
        },
        inGroups: function(a, b) {
            var c = 1 < arguments.length,
                d = this,
                e = [],
                g = Aa(this.length / a);
            wa(a, function(a) {
                a *= g;
                var h = d.slice(a, a + g);
                c && h.length < g && wa(g - h.length, function() {
                    h = h.add(b)
                });
                e.push(h)
            });
            return e
        },
        inGroupsOf: function(a, b) {
            var c = [],
                d = this.length,
                e = this,
                g;
            if (0 === d || 0 === a) return e;
            N(a) && (a = 1);
            N(b) && (b = null);
            wa(Aa(d / a), function(d) {
                for (g = e.slice(a * d, a * d + a); g.length < a;) g.push(b);
                c.push(g)
            });
            return c
        },
        isEmpty: function() {
            return 0 == this.compact().length
        },
        sortBy: function(a, b) {
            var c = this.clone();
            c.sort(function(d, e) {
                var g, f;
                g = kb(d, a, c, [d]);
                f = kb(e, a, c, [e]);
                return (z(g) && z(f) ? ub(g, f) : g < f ? -1 : g > f ? 1 : 0) * (b ? -1 : 1)
            });
            return c
        },
        randomize: function() {
            for (var a = this.concat(), b = a.length, c, d; b;) c = u.random() * b | 0, d = a[--b], a[b] = a[c], a[c] = d;
            return a
        },
        zip: function() {
            var a = L(arguments);
            return this.map(function(b, c) {
                return [b].concat(a.map(function(a) {
                    return c in a ? a[c] : null
                }))
            })
        },
        sample: function(a) {
            var b = this.randomize();
            return 0 < arguments.length ? b.slice(0, a) : b[0]
        },
        each: function(a, b, c) {
            V(this, a, b, c);
            return this
        },
        add: function(a, b) {
            if (!y(t(b)) || isNaN(b)) b = this.length;
            p.prototype.splice.apply(this, [b, 0].concat(a));
            return this
        },
        remove: function() {
            var a = this;
            L(arguments, function(b) {
                var c = 0;
                for (b = ib(b); c < a.length;) b(a[c], c, a) ? a.splice(c, 1) : c++
            });
            return a
        },
        compact: function(a) {
            var b = [];
            V(this, function(c) {
                A(c) ? b.push(c.compact()) : a && c ? b.push(c) : a || (null == c || c.valueOf() !== c.valueOf()) || b.push(c)
            });
            return b
        },
        groupBy: function(a, b) {
            var c = this,
                d = {},
                e;
            V(c, function(b, f) {
                e = kb(b, a, c, [b, f, c]);
                d[e] || (d[e] = []);
                d[e].push(b)
            });
            b && I(d, b);
            return d
        },
        none: function() {
            return !this.any.apply(this, arguments)
        }
    });
    H(p, !0, !0, {
        all: p.prototype.every,
        any: p.prototype.some,
        insert: p.prototype.add
    });

    function Db(a, b) {
        K(m, !1, !0, a, function(a, d) {
            a[d] = function(a, c, f) {
                var h = m.keys(ya(a)),
                    l;
                b || (l = ib(c, !0));
                f = p.prototype[d].call(h, function(d) {
                    var f = a[d];
                    return b ? kb(f, c, a, [d, f, a]) : l(f, d, a)
                }, f);
                A(f) && (f = f.reduce(function(b, c) {
                    b[c] = a[c];
                    return b
                }, {}));
                return f
            }
        });
        Ya(a, O)
    }
    H(m, !1, !0, {
        map: function(a, b) {
            var c = {},
                d, e;
            for (d in a) J(a, d) && (e = a[d], c[d] = kb(e, b, a, [d, e, a]));
            return c
        },
        reduce: function(a) {
            var b = m.keys(ya(a)).map(function(b) {
                return a[b]
            });
            return b.reduce.apply(b, L(arguments, null, 1))
        },
        each: function(a, b) {
            ta(b);
            I(a, b);
            return a
        },
        size: function(a) {
            return m.keys(ya(a)).length
        }
    });
    var Eb = "any all none count find findAll isEmpty".split(" "),
        Fb = "sum average min max least most".split(" "),
        Gb = ["map", "reduce", "size"],
        Hb = Eb.concat(Fb).concat(Gb);
    (function() {
        function a() {
            var a = arguments;
            return 0 < a.length && !F(a[0])
        }
        var b = p.prototype.map;
        K(p, !0, a, "every,all,some,filter,any,none,find,findIndex", function(a, b) {
            var e = p.prototype[b];
            a[b] = function(a) {
                var b = ib(a);
                return e.call(this, function(a, c) {
                    return b(a, c, this)
                })
            }
        });
        H(p, !0, a, {
            map: function(a) {
                return b.call(this, function(b, e) {
                    return kb(b, a, this, [b, e, this])
                })
            }
        })
    })();
    (function() {
        p[Ab] = "A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(a) {
            return a + a.toLowerCase()
        }).join("");
        var a = {};
        V("A\u00c1\u00c0\u00c2\u00c3\u00c4 C\u00c7 E\u00c9\u00c8\u00ca\u00cb I\u00cd\u00cc\u0130\u00ce\u00cf O\u00d3\u00d2\u00d4\u00d5\u00d6 S\u00df U\u00da\u00d9\u00db\u00dc".split(" "),
            function(b) {
                var c = b.charAt(0);
                V(b.slice(1).split(""), function(b) {
                    a[b] = c;
                    a[b.toLowerCase()] = c.toLowerCase()
                })
            });
        p[Bb] = !0;
        p[yb] = !0;
        p[zb] = a
    })();
    Db(Eb);
    Db(Fb, !0);
    Ya(Gb, O);
    p.AlphanumericSort = ub;
})();