(function() {
    function g(a) {
        throw a;
    }
    var j = void 0,
        k = !0,
        l = null,
        o = !1;

    function aa(a) {
        return function() {
            return this[a]
        }
    }

    function r(a) {
        return function() {
            return a
        }
    }
    var t, ba = this;

    function ca() {}

    function da(a) {
        a.xc = function() {
            return a.bd ? a.bd : a.bd = new a
        }
    }

    function ea(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function u(a) {
        return a !== j
    }

    function fa(a) {
        var b = ea(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function v(a) {
        return "string" == typeof a
    }

    function ga(a) {
        return "number" == typeof a
    }

    function ha(a) {
        var b = typeof a;
        return "object" == b && a != l || "function" == b
    }
    Math.floor(2147483648 * Math.random()).toString(36);

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
        a || g(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function w(a, b, c) {
        w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return w.apply(l, arguments)
    }

    function ka(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Vd = b.prototype;
        a.prototype = new c
    };

    function la(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        g(Error("Invalid JSON string: " + a))
    }

    function ma() {
        this.cc = j
    }

    function na(a, b, c) {
        switch (typeof b) {
            case "string":
                oa(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == l) {
                    c.push("null");
                    break
                }
                if ("array" == ea(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], na(a, a.cc ? a.cc.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d),
                    oa(f, c), c.push(":"), na(a, a.cc ? a.cc.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                g(Error("Unknown type: " + typeof b))
        }
    }
    var pa = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        qa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function oa(a, b) {
        b.push('"', a.replace(qa, function(a) {
            if (a in pa) return pa[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return pa[a] = e + b.toString(16)
        }), '"')
    };

    function y(a) {
        if ("undefined" !== typeof JSON && u(JSON.stringify)) a = JSON.stringify(a);
        else {
            var b = [];
            na(new ma, a, b);
            a = b.join("")
        }
        return a
    };

    function ra(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            55296 <= e && 56319 >= e && (e -= 55296, d++, z(d < a.length, "Surrogate pair missing trail surrogate."), e = 65536 + (e << 10) + (a.charCodeAt(d) - 56320));
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (65536 > e ? b[c++] = e >> 12 | 224 : (b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128), b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function A(a, b, c, d) {
        var e;
        d < b ? e = "at least " + b : d > c && (e = 0 === c ? "none" : "no more than " + c);
        e && g(Error(a + " failed: Was called with " + d + (1 === d ? " argument." : " arguments.") + " Expects " + e + "."))
    }

    function B(a, b, c) {
        var d = "";
        switch (b) {
            case 1:
                d = c ? "first" : "First";
                break;
            case 2:
                d = c ? "second" : "Second";
                break;
            case 3:
                d = c ? "third" : "Third";
                break;
            case 4:
                d = c ? "fourth" : "Fourth";
                break;
            default:
                sa.assert(o, "errorPrefix_ called with argumentNumber > 4.  Need to update it?")
        }
        return a + " failed: " + (d + " argument ")
    }

    function C(a, b, c, d) {
        (!d || u(c)) && "function" != ea(c) && g(Error(B(a, b, d) + "must be a valid function."))
    }

    function ta(a, b, c) {
        u(c) && (!ha(c) || c === l) && g(Error(B(a, b, k) + "must be a valid context object."))
    };

    function D(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function ua(a, b) {
        if (Object.prototype.hasOwnProperty.call(a, b)) return a[b]
    };
    var sa = {},
        va = /[\[\].#$\/]/,
        wa = /[\[\].#$]/;

    function xa(a) {
        return v(a) && 0 !== a.length && !va.test(a)
    }

    function ya(a, b, c) {
        (!c || u(b)) && za(B(a, 1, c), b)
    }

    function za(a, b, c, d) {
        c || (c = 0);
        d || (d = []);
        u(b) || g(Error(a + "contains undefined" + Aa(d)));
        "function" == ea(b) && g(Error(a + "contains a function" + Aa(d) + " with contents: " + b.toString()));
        Ba(b) && g(Error(a + "contains " + b.toString() + Aa(d)));
        1E3 < c && g(new TypeError(a + "contains a cyclic object value (" + d.slice(0, 100).join(".") + "...)"));
        v(b) && (b.length > 10485760 / 3 && 10485760 < ra(b).length) && g(Error(a + "contains a string greater than 10485760 utf8 bytes" + Aa(d) + " ('" + b.substring(0, 50) + "...')"));
        if (ha(b))
            for (var e in b) D(b,
                e) && (".priority" !== e && (".value" !== e && ".sv" !== e && !xa(e)) && g(Error(a + "contains an invalid key (" + e + ")" + Aa(d) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')), d.push(e), za(a, b[e], c + 1, d), d.pop())
    }

    function Aa(a) {
        return 0 == a.length ? "" : " in property '" + a.join(".") + "'"
    }

    function Ca(a, b) {
        ha(b) || g(Error(B(a, 1, o) + " must be an object containing the children to replace."));
        ya(a, b, o)
    }

    function Da(a, b, c, d) {
        if (!d || u(c)) c !== l && (!ga(c) && !v(c) && (!ha(c) || !D(c, ".sv"))) && g(Error(B(a, b, d) + "must be a valid firebase priority (a string, number, or null)."))
    }

    function Ea(a, b, c) {
        if (!c || u(b)) switch (b) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
                break;
            default:
                g(Error(B(a, 1, c) + 'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".'))
        }
    }

    function Fa(a, b) {
        u(b) && !xa(b) && g(Error(B(a, 2, k) + 'was an invalid key: "' + b + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'))
    }

    function Ga(a, b) {
        (!v(b) || 0 === b.length || wa.test(b)) && g(Error(B(a, 1, o) + 'was an invalid path: "' + b + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'))
    }

    function E(a, b) {
        ".info" === F(b) && g(Error(a + " failed: Can't modify data under /.info/"))
    };

    function H(a, b, c, d, e, f, h) {
        this.n = a;
        this.path = b;
        this.Ba = c;
        this.ca = d;
        this.ua = e;
        this.za = f;
        this.Ra = h;
        u(this.ca) && (u(this.za) && u(this.Ba)) && g("Query: Can't combine startAt(), endAt(), and limit().")
    }
    H.prototype.Kc = function() {
        A("Query.ref", 0, 0, arguments.length);
        return new J(this.n, this.path)
    };
    H.prototype.ref = H.prototype.Kc;
    H.prototype.Ya = function(a, b) {
        A("Query.on", 2, 4, arguments.length);
        Ea("Query.on", a, o);
        C("Query.on", 2, b, o);
        var c = Ha("Query.on", arguments[2], arguments[3]);
        this.n.Mb(this, a, b, c.cancel, c.S);
        return b
    };
    H.prototype.on = H.prototype.Ya;
    H.prototype.tb = function(a, b, c) {
        A("Query.off", 0, 3, arguments.length);
        Ea("Query.off", a, k);
        C("Query.off", 2, b, k);
        ta("Query.off", 3, c);
        this.n.bc(this, a, b, c)
    };
    H.prototype.off = H.prototype.tb;
    H.prototype.Id = function(a, b) {
        function c(h) {
            f && (f = o, e.tb(a, c), b.call(d.S, h))
        }
        A("Query.once", 2, 4, arguments.length);
        Ea("Query.once", a, o);
        C("Query.once", 2, b, o);
        var d = Ha("Query.once", arguments[2], arguments[3]),
            e = this,
            f = k;
        this.Ya(a, c, function(b) {
            e.tb(a, c);
            d.cancel && d.cancel.call(d.S, b)
        })
    };
    H.prototype.once = H.prototype.Id;
    H.prototype.Bd = function(a) {
        A("Query.limit", 1, 1, arguments.length);
        (!ga(a) || Math.floor(a) !== a || 0 >= a) && g("Query.limit: First argument must be a positive integer.");
        return new H(this.n, this.path, a, this.ca, this.ua, this.za, this.Ra)
    };
    H.prototype.limit = H.prototype.Bd;
    H.prototype.Rd = function(a, b) {
        A("Query.startAt", 0, 2, arguments.length);
        Da("Query.startAt", 1, a, k);
        Fa("Query.startAt", b);
        u(a) || (b = a = l);
        return new H(this.n, this.path, this.Ba, a, b, this.za, this.Ra)
    };
    H.prototype.startAt = H.prototype.Rd;
    H.prototype.wd = function(a, b) {
        A("Query.endAt", 0, 2, arguments.length);
        Da("Query.endAt", 1, a, k);
        Fa("Query.endAt", b);
        return new H(this.n, this.path, this.Ba, this.ca, this.ua, a, b)
    };
    H.prototype.endAt = H.prototype.wd;

    function Ia(a) {
        var b = {};
        u(a.ca) && (b.sp = a.ca);
        u(a.ua) && (b.sn = a.ua);
        u(a.za) && (b.ep = a.za);
        u(a.Ra) && (b.en = a.Ra);
        u(a.Ba) && (b.l = a.Ba);
        u(a.ca) && (u(a.ua) && a.ca === l && a.ua === l) && (b.vf = "l");
        return b
    }
    H.prototype.Ka = function() {
        var a = Ja(Ia(this));
        return "{}" === a ? "default" : a
    };

    function Ha(a, b, c) {
        var d = {};
        b && c ? (d.cancel = b, C(a, 3, d.cancel, k), d.S = c, ta(a, 4, d.S)) : b && ("object" === typeof b && b !== l ? d.S = b : "function" === typeof b ? d.cancel = b : g(Error(B(a, 3, k) + "must either be a cancel callback or a context object.")));
        return d
    };

    function K(a) {
        if (a instanceof K) return a;
        if (1 == arguments.length) {
            this.m = a.split("/");
            for (var b = 0, c = 0; c < this.m.length; c++) 0 < this.m[c].length && (this.m[b] = this.m[c], b++);
            this.m.length = b;
            this.Z = 0
        } else this.m = arguments[0], this.Z = arguments[1]
    }

    function F(a) {
        return a.Z >= a.m.length ? l : a.m[a.Z]
    }

    function Ka(a) {
        var b = a.Z;
        b < a.m.length && b++;
        return new K(a.m, b)
    }
    t = K.prototype;
    t.toString = function() {
        for (var a = "", b = this.Z; b < this.m.length; b++) "" !== this.m[b] && (a += "/" + this.m[b]);
        return a || "/"
    };
    t.parent = function() {
        if (this.Z >= this.m.length) return l;
        for (var a = [], b = this.Z; b < this.m.length - 1; b++) a.push(this.m[b]);
        return new K(a, 0)
    };
    t.F = function(a) {
        for (var b = [], c = this.Z; c < this.m.length; c++) b.push(this.m[c]);
        if (a instanceof K)
            for (c = a.Z; c < a.m.length; c++) b.push(a.m[c]);
        else {
            a = a.split("/");
            for (c = 0; c < a.length; c++) 0 < a[c].length && b.push(a[c])
        }
        return new K(b, 0)
    };
    t.f = function() {
        return this.Z >= this.m.length
    };

    function La(a, b) {
        var c = F(a);
        if (c === l) return b;
        if (c === F(b)) return La(Ka(a), Ka(b));
        g("INTERNAL ERROR: innerPath (" + b + ") is not within outerPath (" + a + ")")
    }
    t.contains = function(a) {
        var b = 0;
        if (this.m.length > a.m.length) return o;
        for (; b < this.m.length;) {
            if (this.m[b] !== a.m[b]) return o;
            ++b
        }
        return k
    };

    function Ma() {
        this.children = {};
        this.oc = 0;
        this.value = l
    }

    function Na(a, b, c) {
        this.Ca = a ? a : "";
        this.zb = b ? b : l;
        this.z = c ? c : new Ma
    }

    function L(a, b) {
        for (var c = b instanceof K ? b : new K(b), d = a, e;
            (e = F(c)) !== l;) d = new Na(e, d, ua(d.z.children, e) || new Ma), c = Ka(c);
        return d
    }
    t = Na.prototype;
    t.k = function() {
        return this.z.value
    };

    function M(a, b) {
        z("undefined" !== typeof b);
        a.z.value = b;
        Oa(a)
    }
    t.lb = function() {
        return 0 < this.z.oc
    };
    t.f = function() {
        return this.k() === l && !this.lb()
    };
    t.w = function(a) {
        for (var b in this.z.children) a(new Na(b, this, this.z.children[b]))
    };

    function Pa(a, b, c, d) {
        c && !d && b(a);
        a.w(function(a) {
            Pa(a, b, k, d)
        });
        c && d && b(a)
    }

    function Qa(a, b, c) {
        for (a = c ? a : a.parent(); a !== l;) {
            if (b(a)) return k;
            a = a.parent()
        }
        return o
    }
    t.path = function() {
        return new K(this.zb === l ? this.Ca : this.zb.path() + "/" + this.Ca)
    };
    t.name = aa("Ca");
    t.parent = aa("zb");

    function Oa(a) {
        if (a.zb !== l) {
            var b = a.zb,
                c = a.Ca,
                d = a.f(),
                e = D(b.z.children, c);
            d && e ? (delete b.z.children[c], b.z.oc--, Oa(b)) : !d && !e && (b.z.children[c] = a.z, b.z.oc++, Oa(b))
        }
    };

    function Ra(a, b) {
        this.Oa = a ? a : Sa;
        this.ba = b ? b : Ta
    }

    function Sa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    t = Ra.prototype;
    t.na = function(a, b) {
        return new Ra(this.Oa, this.ba.na(a, b, this.Oa).copy(l, l, o, l, l))
    };
    t.remove = function(a) {
        return new Ra(this.Oa, this.ba.remove(a, this.Oa).copy(l, l, o, l, l))
    };
    t.get = function(a) {
        for (var b, c = this.ba; !c.f();) {
            b = this.Oa(a, c.key);
            if (0 === b) return c.value;
            0 > b ? c = c.left : 0 < b && (c = c.right)
        }
        return l
    };

    function Ua(a, b) {
        for (var c, d = a.ba, e = l; !d.f();) {
            c = a.Oa(b, d.key);
            if (0 === c) {
                if (d.left.f()) return e ? e.key : l;
                for (d = d.left; !d.right.f();) d = d.right;
                return d.key
            }
            0 > c ? d = d.left : 0 < c && (e = d, d = d.right)
        }
        g(Error("Attempted to find predecessor key for a nonexistent key.  What gives?"))
    }
    t.f = function() {
        return this.ba.f()
    };
    t.count = function() {
        return this.ba.count()
    };
    t.rb = function() {
        return this.ba.rb()
    };
    t.Wa = function() {
        return this.ba.Wa()
    };
    t.Aa = function(a) {
        return this.ba.Aa(a)
    };
    t.La = function(a) {
        return this.ba.La(a)
    };
    t.Ua = function(a) {
        return new Va(this.ba, a)
    };

    function Va(a, b) {
        this.jd = b;
        for (this.Qb = []; !a.f();) this.Qb.push(a), a = a.left
    }

    function Wa(a) {
        if (0 === a.Qb.length) return l;
        var b = a.Qb.pop(),
            c;
        c = a.jd ? a.jd(b.key, b.value) : {
            key: b.key,
            value: b.value
        };
        for (b = b.right; !b.f();) a.Qb.push(b), b = b.left;
        return c
    }

    function Xa(a, b, c, d, e) {
        this.key = a;
        this.value = b;
        this.color = c != l ? c : k;
        this.left = d != l ? d : Ta;
        this.right = e != l ? e : Ta
    }
    t = Xa.prototype;
    t.copy = function(a, b, c, d, e) {
        return new Xa(a != l ? a : this.key, b != l ? b : this.value, c != l ? c : this.color, d != l ? d : this.left, e != l ? e : this.right)
    };
    t.count = function() {
        return this.left.count() + 1 + this.right.count()
    };
    t.f = r(o);
    t.Aa = function(a) {
        return this.left.Aa(a) || a(this.key, this.value) || this.right.Aa(a)
    };
    t.La = function(a) {
        return this.right.La(a) || a(this.key, this.value) || this.left.La(a)
    };

    function Ya(a) {
        return a.left.f() ? a : Ya(a.left)
    }
    t.rb = function() {
        return Ya(this).key
    };
    t.Wa = function() {
        return this.right.f() ? this.key : this.right.Wa()
    };
    t.na = function(a, b, c) {
        var d, e;
        e = this;
        d = c(a, e.key);
        e = 0 > d ? e.copy(l, l, l, e.left.na(a, b, c), l) : 0 === d ? e.copy(l, b, l, l, l) : e.copy(l, l, l, l, e.right.na(a, b, c));
        return Za(e)
    };

    function bb(a) {
        if (a.left.f()) return Ta;
        !a.left.N() && !a.left.left.N() && (a = cb(a));
        a = a.copy(l, l, l, bb(a.left), l);
        return Za(a)
    }
    t.remove = function(a, b) {
        var c, d;
        c = this;
        if (0 > b(a, c.key))!c.left.f() && (!c.left.N() && !c.left.left.N()) && (c = cb(c)), c = c.copy(l, l, l, c.left.remove(a, b), l);
        else {
            c.left.N() && (c = db(c));
            !c.right.f() && (!c.right.N() && !c.right.left.N()) && (c = eb(c), c.left.left.N() && (c = db(c), c = eb(c)));
            if (0 === b(a, c.key)) {
                if (c.right.f()) return Ta;
                d = Ya(c.right);
                c = c.copy(d.key, d.value, l, l, bb(c.right))
            }
            c = c.copy(l, l, l, l, c.right.remove(a, b))
        }
        return Za(c)
    };
    t.N = aa("color");

    function Za(a) {
        a.right.N() && !a.left.N() && (a = fb(a));
        a.left.N() && a.left.left.N() && (a = db(a));
        a.left.N() && a.right.N() && (a = eb(a));
        return a
    }

    function cb(a) {
        a = eb(a);
        a.right.left.N() && (a = a.copy(l, l, l, l, db(a.right)), a = fb(a), a = eb(a));
        return a
    }

    function fb(a) {
        var b;
        b = a.copy(l, l, k, l, a.right.left);
        return a.right.copy(l, l, a.color, b, l)
    }

    function db(a) {
        var b;
        b = a.copy(l, l, k, a.left.right, l);
        return a.left.copy(l, l, a.color, l, b)
    }

    function eb(a) {
        var b, c;
        b = a.left.copy(l, l, !a.left.color, l, l);
        c = a.right.copy(l, l, !a.right.color, l, l);
        return a.copy(l, l, !a.color, b, c)
    }

    function gb() {}
    t = gb.prototype;
    t.copy = function() {
        return this
    };
    t.na = function(a, b) {
        return new Xa(a, b, j, j, j)
    };
    t.remove = function() {
        return this
    };
    t.count = r(0);
    t.f = r(k);
    t.Aa = r(o);
    t.La = r(o);
    t.rb = r(l);
    t.Wa = r(l);
    t.N = r(o);
    var Ta = new gb;
    var hb = Array.prototype,
        ib = hb.forEach ? function(a, b, c) {
            hb.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        jb = hb.map ? function(a, b, c) {
            return hb.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        };

    function kb() {};

    function lb() {
        this.B = [];
        this.nc = [];
        this.rd = [];
        this.Wb = [];
        this.Wb[0] = 128;
        for (var a = 1; 64 > a; ++a) this.Wb[a] = 0;
        this.reset()
    }
    ka(lb, kb);
    lb.prototype.reset = function() {
        this.B[0] = 1732584193;
        this.B[1] = 4023233417;
        this.B[2] = 2562383102;
        this.B[3] = 271733878;
        this.B[4] = 3285377520;
        this.Sc = this.mb = 0
    };

    function mb(a, b) {
        var c;
        c || (c = 0);
        for (var d = a.rd, e = c; e < c + 64; e += 4) d[e / 4] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3];
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        c = a.B[0];
        for (var h = a.B[1], i = a.B[2], m = a.B[3], n = a.B[4], p, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = m ^ h & (i ^ m), p = 1518500249) : (f = h ^ i ^ m, p = 1859775393) : 60 > e ? (f = h & i | m & (h | i), p = 2400959708) : (f = h ^ i ^ m, p = 3395469782), f = (c << 5 | c >>> 27) + f + n + p + d[e] & 4294967295, n = m, m = i, i = (h << 30 | h >>> 2) & 4294967295, h = c, c = f;
        a.B[0] = a.B[0] + c & 4294967295;
        a.B[1] = a.B[1] + h &
            4294967295;
        a.B[2] = a.B[2] + i & 4294967295;
        a.B[3] = a.B[3] + m & 4294967295;
        a.B[4] = a.B[4] + n & 4294967295
    }
    lb.prototype.update = function(a, b) {
        u(b) || (b = a.length);
        var c = this.nc,
            d = this.mb,
            e = 0;
        if (v(a))
            for (; e < b;) c[d++] = a.charCodeAt(e++), 64 == d && (mb(this, c), d = 0);
        else
            for (; e < b;) c[d++] = a[e++], 64 == d && (mb(this, c), d = 0);
        this.mb = d;
        this.Sc += b
    };

    function nb() {
        this.Na = {};
        this.length = 0
    }
    nb.prototype.setItem = function(a, b) {
        D(this.Na, a) || (this.length += 1);
        this.Na[a] = b
    };
    nb.prototype.getItem = function(a) {
        return D(this.Na, a) ? this.Na[a] : l
    };
    nb.prototype.removeItem = function(a) {
        D(this.Na, a) && (this.length -= 1, delete this.Na[a])
    };
    var ob = l;
    try {
        "undefined" !== typeof sessionStorage && (sessionStorage.setItem("firebase-sentinel", "cache"), sessionStorage.removeItem("firebase-sentinel"), ob = sessionStorage)
    } catch (pb) {}
    ob = ob || new nb;

    function qb(a, b, c, d) {
        this.host = a.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf(".") + 1);
        this.dc = b;
        this.sb = c;
        this.ea = d || ob.getItem(a) || this.host
    }

    function rb(a, b) {
        b !== a.ea && (a.ea = b, "s-" === a.ea.substr(0, 2) && ob.setItem(a.host, a.ea))
    }
    qb.prototype.toString = function() {
        return (this.dc ? "https://" : "http://") + this.host
    };
    var sb, tb, ub, vb;

    function wb() {
        return ba.navigator ? ba.navigator.userAgent : l
    }
    vb = ub = tb = sb = o;
    var xb;
    if (xb = wb()) {
        var yb = ba.navigator;
        sb = 0 == xb.indexOf("Opera");
        tb = !sb && -1 != xb.indexOf("MSIE");
        ub = !sb && -1 != xb.indexOf("WebKit");
        vb = !sb && !ub && "Gecko" == yb.product
    }
    var zb = tb,
        Ab = vb,
        Bb = ub;
    var Cb;
    if (sb && ba.opera) {
        var Db = ba.opera.version;
        "function" == typeof Db && Db()
    } else Ab ? Cb = /rv\:([^\);]+)(\)|;)/ : zb ? Cb = /MSIE\s+([^\);]+)(\)|;)/ : Bb && (Cb = /WebKit\/(\S+)/), Cb && Cb.exec(wb());
    var Eb = l,
        Fb = l;

    function Gb(a, b) {
        fa(a) || g(Error("encodeByteArray takes an array as a parameter"));
        if (!Eb) {
            Eb = {};
            Fb = {};
            for (var c = 0; 65 > c; c++) Eb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), Fb[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        for (var c = b ? Fb : Eb, d = [], e = 0; e < a.length; e += 3) {
            var f = a[e],
                h = e + 1 < a.length,
                i = h ? a[e + 1] : 0,
                m = e + 2 < a.length,
                n = m ? a[e + 2] : 0,
                p = f >> 2,
                f = (f & 3) << 4 | i >> 4,
                i = (i & 15) << 2 | n >> 6,
                n = n & 63;
            m || (n = 64, h || (i = 64));
            d.push(c[p], c[f], c[i], c[n])
        }
        return d.join("")
    };
    var Hb, Ib = 1;
    Hb = function() {
        return Ib++
    };

    function z(a, b) {
        a || g(Error("Firebase INTERNAL ASSERT FAILED:" + b))
    }

    function Jb(a) {
        var b = ra(a),
            a = new lb;
        a.update(b);
        var b = [],
            c = 8 * a.Sc;
        56 > a.mb ? a.update(a.Wb, 56 - a.mb) : a.update(a.Wb, 64 - (a.mb - 56));
        for (var d = 63; 56 <= d; d--) a.nc[d] = c & 255, c /= 256;
        mb(a, a.nc);
        for (d = c = 0; 5 > d; d++)
            for (var e = 24; 0 <= e; e -= 8) b[c++] = a.B[d] >> e & 255;
        return Gb(b)
    }

    function Kb() {
        for (var a = "", b = 0; b < arguments.length; b++) a = fa(arguments[b]) ? a + Kb.apply(l, arguments[b]) : "object" === typeof arguments[b] ? a + y(arguments[b]) : a + arguments[b], a += " ";
        return a
    }
    var Lb = l,
        Mb = k;

    function N() {
        Mb === k && (Mb = o, Lb === l && "true" === ob.getItem("logging_enabled") && Nb(k));
        if (Lb) {
            var a = Kb.apply(l, arguments);
            Lb(a)
        }
    }

    function Ob(a) {
        return function() {
            N(a, arguments)
        }
    }

    function Pb() {
        if ("undefined" !== typeof console) {
            var a = "FIREBASE INTERNAL ERROR: " + Kb.apply(l, arguments);
            "undefined" !== typeof console.error ? console.error(a) : console.log(a)
        }
    }

    function Qb() {
        var a = Kb.apply(l, arguments);
        g(Error("FIREBASE FATAL ERROR: " + a))
    }

    function P() {
        if ("undefined" !== typeof console) {
            var a = "FIREBASE WARNING: " + Kb.apply(l, arguments);
            "undefined" !== typeof console.warn ? console.warn(a) : console.log(a)
        }
    }

    function Ba(a) {
        return ga(a) && (a != a || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY)
    }

    function Rb(a, b) {
        return a !== b ? a === l ? -1 : b === l ? 1 : typeof a !== typeof b ? "number" === typeof a ? -1 : 1 : a > b ? 1 : -1 : 0
    }

    function Sb(a, b) {
        if (a === b) return 0;
        var c = Tb(a),
            d = Tb(b);
        return c !== l ? d !== l ? c - d : -1 : d !== l ? 1 : a < b ? -1 : 1
    }

    function Ub(a, b) {
        if (b && a in b) return b[a];
        g(Error("Missing required key (" + a + ") in object: " + y(b)))
    }

    function Ja(a) {
        if ("object" !== typeof a || a === l) return y(a);
        var b = [],
            c;
        for (c in a) b.push(c);
        b.sort();
        c = "{";
        for (var d = 0; d < b.length; d++) 0 !== d && (c += ","), c += y(b[d]), c += ":", c += Ja(a[b[d]]);
        return c + "}"
    }

    function Vb(a, b) {
        if (a.length <= b) return [a];
        for (var c = [], d = 0; d < a.length; d += b) d + b > a ? c.push(a.substring(d, a.length)) : c.push(a.substring(d, d + b));
        return c
    }

    function Wb(a, b) {
        if ("array" == ea(a))
            for (var c = 0; c < a.length; ++c) b(c, a[c]);
        else Xb(a, b)
    }

    function Yb(a) {
        z(!Ba(a));
        var b, c, d, e;
        0 === a ? (d = c = 0, b = -Infinity === 1 / a ? 1 : 0) : (b = 0 > a, a = Math.abs(a), a >= Math.pow(2, -1022) ? (d = Math.min(Math.floor(Math.log(a) / Math.LN2), 1023), c = d + 1023, d = Math.round(a * Math.pow(2, 52 - d) - Math.pow(2, 52))) : (c = 0, d = Math.round(a / Math.pow(2, -1074))));
        e = [];
        for (a = 52; a; a -= 1) e.push(d % 2 ? 1 : 0), d = Math.floor(d / 2);
        for (a = 11; a; a -= 1) e.push(c % 2 ? 1 : 0), c = Math.floor(c / 2);
        e.push(b ? 1 : 0);
        e.reverse();
        b = e.join("");
        c = "";
        for (a = 0; 64 > a; a += 8) d = parseInt(b.substr(a, 8), 2).toString(16), 1 === d.length && (d = "0" + d), c += d;
        return c.toLowerCase()
    }
    var Zb = /^-?\d{1,10}$/;

    function Tb(a) {
        return Zb.test(a) && (a = parseInt(a), -2147483648 <= a && 2147483647 >= a) ? a : l
    }

    function $b(a) {
        try {
            a()
        } catch (b) {
            setTimeout(function() {
                g(b)
            })
        }
    };

    function ac(a, b) {
        this.D = a;
        z(this.D !== l, "LeafNode shouldn't be created with null value.");
        this.Za = "undefined" !== typeof b ? b : l
    }
    t = ac.prototype;
    t.M = r(k);
    t.j = aa("Za");
    t.Ea = function(a) {
        return new ac(this.D, a)
    };
    t.L = function() {
        return Q
    };
    t.P = function(a) {
        return F(a) === l ? this : Q
    };
    t.da = r(l);
    t.G = function(a, b) {
        return (new R).G(a, b).Ea(this.Za)
    };
    t.xa = function(a, b) {
        var c = F(a);
        return c === l ? b : this.G(c, Q.xa(Ka(a), b))
    };
    t.f = r(o);
    t.Rb = r(0);
    t.U = function(a) {
        return a && this.j() !== l ? {
            ".value": this.k(),
            ".priority": this.j()
        } : this.k()
    };
    t.hash = function() {
        var a = "";
        this.j() !== l && (a += "priority:" + bc(this.j()) + ":");
        var b = typeof this.D,
            a = a + (b + ":"),
            a = "number" === b ? a + Yb(this.D) : a + this.D;
        return Jb(a)
    };
    t.k = aa("D");
    t.toString = function() {
        return "string" === typeof this.D ? '"' + this.D + '"' : this.D
    };

    function cc(a, b) {
        return Rb(a.ha, b.ha) || Sb(a.name, b.name)
    }

    function dc(a, b) {
        return Sb(a.name, b.name)
    }

    function ec(a, b) {
        return Sb(a, b)
    };

    function R(a, b) {
        this.o = a || new Ra(ec);
        this.Za = "undefined" !== typeof b ? b : l
    }
    t = R.prototype;
    t.M = r(o);
    t.j = aa("Za");
    t.Ea = function(a) {
        return new R(this.o, a)
    };
    t.G = function(a, b) {
        var c = this.o.remove(a);
        b && b.f() && (b = l);
        b !== l && (c = c.na(a, b));
        return b && b.j() !== l ? new fc(c, l, this.Za) : new R(c, this.Za)
    };
    t.xa = function(a, b) {
        var c = F(a);
        if (c === l) return b;
        var d = this.L(c).xa(Ka(a), b);
        return this.G(c, d)
    };
    t.f = function() {
        return this.o.f()
    };
    t.Rb = function() {
        return this.o.count()
    };
    var gc = /^\d+$/;
    t = R.prototype;
    t.U = function(a) {
        if (this.f()) return l;
        var b = {},
            c = 0,
            d = 0,
            e = k;
        this.w(function(f, h) {
            b[f] = h.U(a);
            c++;
            e && gc.test(f) ? d = Math.max(d, Number(f)) : e = o
        });
        if (!a && e && d < 2 * c) {
            var f = [],
                h;
            for (h in b) f[h] = b[h];
            return f
        }
        a && this.j() !== l && (b[".priority"] = this.j());
        return b
    };
    t.hash = function() {
        var a = "";
        this.j() !== l && (a += "priority:" + bc(this.j()) + ":");
        this.w(function(b, c) {
            var d = c.hash();
            "" !== d && (a += ":" + b + ":" + d)
        });
        return "" === a ? "" : Jb(a)
    };
    t.L = function(a) {
        a = this.o.get(a);
        return a === l ? Q : a
    };
    t.P = function(a) {
        var b = F(a);
        return b === l ? this : this.L(b).P(Ka(a))
    };
    t.da = function(a) {
        return Ua(this.o, a)
    };
    t.$c = function() {
        return this.o.rb()
    };
    t.ad = function() {
        return this.o.Wa()
    };
    t.w = function(a) {
        return this.o.Aa(a)
    };
    t.uc = function(a) {
        return this.o.La(a)
    };
    t.Ua = function() {
        return this.o.Ua()
    };
    t.toString = function() {
        var a = "{",
            b = k;
        this.w(function(c, d) {
            b ? b = o : a += ", ";
            a += '"' + c + '" : ' + d.toString()
        });
        return a += "}"
    };
    var Q = new R;

    function fc(a, b, c) {
        R.call(this, a, c);
        b === l && (b = new Ra(cc), a.Aa(function(a, c) {
            b = b.na({
                name: a,
                ha: c.j()
            }, c)
        }));
        this.ta = b
    }
    ka(fc, R);
    t = fc.prototype;
    t.G = function(a, b) {
        var c = this.L(a),
            d = this.o,
            e = this.ta;
        c !== l && (d = d.remove(a), e = e.remove({
            name: a,
            ha: c.j()
        }));
        b && b.f() && (b = l);
        b !== l && (d = d.na(a, b), e = e.na({
            name: a,
            ha: b.j()
        }, b));
        return new fc(d, e, this.j())
    };
    t.da = function(a, b) {
        var c = Ua(this.ta, {
            name: a,
            ha: b.j()
        });
        return c ? c.name : l
    };
    t.w = function(a) {
        return this.ta.Aa(function(b, c) {
            return a(b.name, c)
        })
    };
    t.uc = function(a) {
        return this.ta.La(function(b, c) {
            return a(b.name, c)
        })
    };
    t.Ua = function() {
        return this.ta.Ua(function(a, b) {
            return {
                key: a.name,
                value: b
            }
        })
    };
    t.$c = function() {
        return this.ta.f() ? l : this.ta.rb().name
    };
    t.ad = function() {
        return this.ta.f() ? l : this.ta.Wa().name
    };

    function S(a, b) {
        if (a === l) return Q;
        var c = l;
        "object" === typeof a && ".priority" in a ? c = a[".priority"] : "undefined" !== typeof b && (c = b);
        z(c === l || "string" === typeof c || "number" === typeof c || "object" === typeof c && ".sv" in c);
        "object" === typeof a && (".value" in a && a[".value"] !== l) && (a = a[".value"]);
        if ("object" !== typeof a || ".sv" in a) return new ac(a, c);
        if (a instanceof Array) {
            var d = Q,
                e;
            for (e in a)
                if (D(a, e) && "." !== e.substring(0, 1)) {
                    var f = S(a[e]);
                    if (f.M() || !f.f()) d = d.G(e, f)
                }
            return d.Ea(c)
        }
        var h = [],
            i = {},
            m = o;
        Wb(a, function(b,
            c) {
            if ("string" !== typeof c || "." !== c.substring(0, 1)) {
                var d = S(a[c]);
                d.f() || (m = m || d.j() !== l, h.push({
                    name: c,
                    ha: d.j()
                }), i[c] = d)
            }
        });
        d = hc(h, i, o);
        return m ? (e = hc(h, i, k), new fc(d, e, c)) : new R(d, c)
    }
    var ic = Math.log(2);

    function jc(a) {
        this.count = parseInt(Math.log(a + 1) / ic);
        this.Xc = this.count - 1;
        this.td = a + 1 & parseInt(Array(this.count + 1).join("1"), 2)
    }

    function hc(a, b, c) {
        function d(d, f) {
            var h = n - d,
                p = n;
            n -= d;
            var q = a[h].name,
                h = new Xa(c ? a[h] : q, b[q], f, l, e(h + 1, p));
            i ? i.left = h : m = h;
            i = h
        }

        function e(d, f) {
            var h = f - d;
            if (0 == h) return l;
            if (1 == h) {
                var h = a[d].name,
                    i = c ? a[d] : h;
                return new Xa(i, b[h], o, l, l)
            }
            var i = parseInt(h / 2) + d,
                m = e(d, i),
                n = e(i + 1, f),
                h = a[i].name,
                i = c ? a[i] : h;
            return new Xa(i, b[h], o, m, n)
        }
        var f = c ? cc : dc;
        a.sort(f);
        var h, f = new jc(a.length),
            i = l,
            m = l,
            n = a.length;
        for (h = 0; h < f.count; ++h) {
            var p = !(f.td & 1 << f.Xc);
            f.Xc--;
            var q = Math.pow(2, f.count - (h + 1));
            p ? d(q, o) : (d(q, o), d(q, k))
        }
        h =
            m;
        f = c ? cc : ec;
        return h !== l ? new Ra(f, h) : new Ra(f)
    }

    function bc(a) {
        return "number" === typeof a ? "number:" + Yb(a) : "string:" + a
    };

    function T(a, b) {
        this.z = a;
        this.ac = b
    }
    T.prototype.U = function() {
        A("Firebase.DataSnapshot.val", 0, 0, arguments.length);
        return this.z.U()
    };
    T.prototype.val = T.prototype.U;
    T.prototype.xd = function() {
        A("Firebase.DataSnapshot.exportVal", 0, 0, arguments.length);
        return this.z.U(k)
    };
    T.prototype.exportVal = T.prototype.xd;
    T.prototype.F = function(a) {
        A("Firebase.DataSnapshot.child", 0, 1, arguments.length);
        ga(a) && (a = String(a));
        Ga("Firebase.DataSnapshot.child", a);
        var b = new K(a),
            c = this.ac.F(b);
        return new T(this.z.P(b), c)
    };
    T.prototype.child = T.prototype.F;
    T.prototype.zc = function(a) {
        A("Firebase.DataSnapshot.hasChild", 1, 1, arguments.length);
        Ga("Firebase.DataSnapshot.hasChild", a);
        var b = new K(a);
        return !this.z.P(b).f()
    };
    T.prototype.hasChild = T.prototype.zc;
    T.prototype.j = function() {
        A("Firebase.DataSnapshot.getPriority", 0, 0, arguments.length);
        return this.z.j()
    };
    T.prototype.getPriority = T.prototype.j;
    T.prototype.forEach = function(a) {
        A("Firebase.DataSnapshot.forEach", 1, 1, arguments.length);
        C("Firebase.DataSnapshot.forEach", 1, a, o);
        if (this.z.M()) return o;
        var b = this;
        return this.z.w(function(c, d) {
            return a(new T(d, b.ac.F(c)))
        })
    };
    T.prototype.forEach = T.prototype.forEach;
    T.prototype.lb = function() {
        A("Firebase.DataSnapshot.hasChildren", 0, 0, arguments.length);
        return this.z.M() ? o : !this.z.f()
    };
    T.prototype.hasChildren = T.prototype.lb;
    T.prototype.name = function() {
        A("Firebase.DataSnapshot.name", 0, 0, arguments.length);
        return this.ac.name()
    };
    T.prototype.name = T.prototype.name;
    T.prototype.Rb = function() {
        A("Firebase.DataSnapshot.numChildren", 0, 0, arguments.length);
        return this.z.Rb()
    };
    T.prototype.numChildren = T.prototype.Rb;
    T.prototype.Kc = function() {
        A("Firebase.DataSnapshot.ref", 0, 0, arguments.length);
        return this.ac
    };
    T.prototype.ref = T.prototype.Kc;

    function kc(a) {
        z("array" == ea(a) && 0 < a.length);
        this.sd = a;
        this.qb = {}
    }
    kc.prototype.wc = function() {};
    kc.prototype.Uc = function(a) {
        for (var b = this.qb[a] || [], c = 0; c < b.length; c++) b[c].W.apply(b[c].S, Array.prototype.slice.call(arguments, 1))
    };
    kc.prototype.Ya = function(a, b, c) {
        mc(this, a);
        this.qb[a] = this.qb[a] || [];
        this.qb[a].push({
            W: b,
            S: c
        });
        (a = this.wc(a)) && b.apply(c, a)
    };
    kc.prototype.tb = function(a, b, c) {
        mc(this, a);
        for (var a = this.qb[a] || [], d = 0; d < a.length; d++)
            if (a[d].W === b && (!c || c === a[d].S)) {
                a.splice(d, 1);
                break
            }
    };

    function mc(a, b) {
        var c = a.sd,
            d;
        a: {
            d = function(a) {
                return a === b
            };
            for (var e = c.length, f = v(c) ? c.split("") : c, h = 0; h < e; h++)
                if (h in f && d.call(j, f[h])) {
                    d = h;
                    break a
                }
            d = -1
        }
        z(0 > d ? l : v(c) ? c.charAt(d) : c[d], "Unknown event: " + b)
    };

    function nc() {
        kc.call(this, ["visible"]);
        var a, b;
        "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document.hidden ? (b = "visibilitychange", a = "hidden") : "undefined" !== typeof document.mozHidden ? (b = "mozvisibilitychange", a = "mozHidden") : "undefined" !== typeof document.msHidden ? (b = "msvisibilitychange", a = "msHidden") : "undefined" !== typeof document.webkitHidden && (b = "webkitvisibilitychange", a = "webkitHidden"));
        this.gb = k;
        if (b) {
            var c = this;
            document.addEventListener(b,
                function() {
                    var b = !document[a];
                    if (b !== c.gb) {
                        c.gb = b;
                        c.Uc("visible", b)
                    }
                }, o)
        }
    }
    ka(nc, kc);
    da(nc);
    nc.prototype.wc = function(a) {
        z("visible" === a);
        return [this.gb]
    };

    function oc(a) {
        this.Gc = a;
        this.Yb = [];
        this.Qa = 0;
        this.pc = -1;
        this.Ia = l
    };

    function Xb(a, b) {
        for (var c in a) b.call(j, a[c], c, a)
    }

    function pc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };

    function qc() {
        this.ib = {}
    }

    function rc(a, b, c) {
        u(c) || (c = 1);
        D(a.ib, b) || (a.ib[b] = 0);
        a.ib[b] += c
    }
    qc.prototype.get = function() {
        return pc(this.ib)
    };

    function sc(a) {
        this.ud = a;
        this.Pb = l
    }
    sc.prototype.get = function() {
        var a = this.ud.get(),
            b = pc(a);
        if (this.Pb)
            for (var c in this.Pb) b[c] -= this.Pb[c];
        this.Pb = a;
        return b
    };

    function tc(a, b) {
        this.Pc = {};
        this.gc = new sc(a);
        this.u = b;
        setTimeout(w(this.gd, this), 10 + 6E4 * Math.random())
    }
    tc.prototype.gd = function() {
        var a = this.gc.get(),
            b = {},
            c = o,
            d;
        for (d in a) 0 < a[d] && D(this.Pc, d) && (b[d] = a[d], c = k);
        c && (a = this.u, a.V && (b = {
            c: b
        }, a.e("reportStats", b), a.Da("s", b)));
        setTimeout(w(this.gd, this), 6E5 * Math.random())
    };
    var uc = {},
        vc = {};

    function wc(a) {
        a = a.toString();
        uc[a] || (uc[a] = new qc);
        return uc[a]
    };
    var xc = l;
    "undefined" !== typeof MozWebSocket ? xc = MozWebSocket : "undefined" !== typeof WebSocket && (xc = WebSocket);

    function yc(a, b, c) {
        this.qc = a;
        this.e = Ob(this.qc);
        this.frames = this.ob = l;
        this.Rc = 0;
        this.$ = wc(b);
        this.Pa = (b.dc ? "wss://" : "ws://") + b.ea + "/.ws?v=5";
        b.host !== b.ea && (this.Pa = this.Pa + "&ns=" + b.sb);
        c && (this.Pa = this.Pa + "&s=" + c)
    }
    var zc;
    yc.prototype.open = function(a, b) {
        this.ga = b;
        this.Fd = a;
        this.e("websocket connecting to " + this.Pa);
        this.Y = new xc(this.Pa);
        this.jb = o;
        var c = this;
        this.Y.onopen = function() {
            c.e("Websocket connected.");
            c.jb = k
        };
        this.Y.onclose = function() {
            c.e("Websocket connection was disconnected.");
            c.Y = l;
            c.Ja()
        };
        this.Y.onmessage = function(a) {
            if (c.Y !== l)
                if (a = a.data, rc(c.$, "bytes_received", a.length), Ac(c), c.frames !== l) Bc(c, a);
                else {
                    a: {
                        z(c.frames === l, "We already have a frame buffer");
                        if (4 >= a.length) {
                            var b = Number(a);
                            if (!isNaN(b)) {
                                c.Rc =
                                    b;
                                c.frames = [];
                                a = l;
                                break a
                            }
                        }
                        c.Rc = 1;
                        c.frames = []
                    }
                    a !== l && Bc(c, a)
                }
        };
        this.Y.onerror = function(a) {
            c.e("WebSocket error.  Closing connection.");
            a.data && c.e(a.data);
            c.Ja()
        }
    };
    yc.prototype.start = function() {};
    yc.isAvailable = function() {
        return !("undefined" !== typeof navigator && "Opera" === navigator.appName) && xc !== l && !zc
    };

    function Bc(a, b) {
        a.frames.push(b);
        if (a.frames.length == a.Rc) {
            var c = a.frames.join("");
            a.frames = l;
            c = "undefined" !== typeof JSON && u(JSON.parse) ? JSON.parse(c) : la(c);
            a.Fd(c)
        }
    }
    yc.prototype.send = function(a) {
        Ac(this);
        a = y(a);
        rc(this.$, "bytes_sent", a.length);
        a = Vb(a, 16384);
        1 < a.length && this.Y.send(String(a.length));
        for (var b = 0; b < a.length; b++) this.Y.send(a[b])
    };
    yc.prototype.Ib = function() {
        this.Ha = k;
        this.ob && (clearInterval(this.ob), this.ob = l);
        this.Y && (this.Y.close(), this.Y = l)
    };
    yc.prototype.Ja = function() {
        this.Ha || (this.e("WebSocket is closing itself"), this.Ib(), this.ga && (this.ga(this.jb), this.ga = l))
    };
    yc.prototype.close = function() {
        this.Ha || (this.e("WebSocket is being closed"), this.Ib())
    };

    function Ac(a) {
        clearInterval(a.ob);
        a.ob = setInterval(function() {
            a.Y.send("0");
            Ac(a)
        }, 45E3)
    };

    function Cc() {
        this.set = {}
    }
    t = Cc.prototype;
    t.add = function(a, b) {
        this.set[a] = b !== l ? b : k
    };
    t.contains = function(a) {
        return D(this.set, a)
    };
    t.get = function(a) {
        return this.contains(a) ? this.set[a] : j
    };
    t.remove = function(a) {
        delete this.set[a]
    };
    t.f = function() {
        var a;
        a: {
            for (a in this.set) {
                a = o;
                break a
            }
            a = k
        }
        return a
    };
    t.count = function() {
        var a = 0,
            b;
        for (b in this.set) a++;
        return a
    };

    function U(a, b) {
        for (var c in a.set) D(a.set, c) && b(c, a.set[c])
    }
    t.keys = function() {
        var a = [],
            b;
        for (b in this.set) D(this.set, b) && a.push(b);
        return a
    };
    var Dc = "pLPCommand",
        Ec = "pRTLPCB";

    function Fc(a, b, c) {
        this.qc = a;
        this.e = Ob(a);
        this.Ud = b;
        this.$ = wc(b);
        this.fc = c;
        this.jb = o;
        this.Lb = function(a) {
            b.host !== b.ea && (a.ns = b.sb);
            var c = [],
                f;
            for (f in a) a.hasOwnProperty(f) && c.push(f + "=" + a[f]);
            return (b.dc ? "https://" : "http://") + b.ea + "/.lp?" + c.join("&")
        }
    }
    var Gc, Hc;
    Fc.prototype.open = function(a, b) {
        function c() {
            if (!d.Ha) {
                d.ja = new Ic(function(a, b, c, e, f) {
                    rc(d.$, "bytes_received", y(arguments).length);
                    if (d.ja)
                        if (d.Fa && (clearTimeout(d.Fa), d.Fa = l), d.jb = k, "start" == a) d.id = b, d.fd = c;
                        else if ("close" === a)
                        if (b) {
                            d.ja.ec = o;
                            var h = d.cd;
                            h.pc = b;
                            h.Ia = function() {
                                d.Ja()
                            };
                            h.pc < h.Qa && (h.Ia(), h.Ia = l)
                        } else d.Ja();
                    else g(Error("Unrecognized command received: " + a))
                }, function(a, b) {
                    rc(d.$, "bytes_received", y(arguments).length);
                    var c = d.cd;
                    for (c.Yb[a] = b; c.Yb[c.Qa];) {
                        var e = c.Yb[c.Qa];
                        delete c.Yb[c.Qa];
                        for (var f = 0; f < e.length; ++f)
                            if (e[f]) {
                                var h = c;
                                $b(function() {
                                    h.Gc(e[f])
                                })
                            }
                        if (c.Qa === c.pc) {
                            c.Ia && (clearTimeout(c.Ia), c.Ia(), c.Ia = l);
                            break
                        }
                        c.Qa++
                    }
                }, function() {
                    d.Ja()
                }, d.Lb);
                var a = {
                    start: "t"
                };
                a.ser = Math.floor(1E8 * Math.random());
                d.ja.ic && (a.cb = d.ja.ic);
                a.v = "5";
                d.fc && (a.s = d.fc);
                a = d.Lb(a);
                d.e("Connecting via long-poll to " + a);
                Jc(d.ja, a, function() {})
            }
        }
        this.Wc = 0;
        this.Q = b;
        this.cd = new oc(a);
        this.Ha = o;
        var d = this;
        this.Fa = setTimeout(function() {
            d.e("Timed out trying to connect.");
            d.Ja();
            d.Fa = l
        }, 3E4);
        if ("complete" ===
            document.readyState) c();
        else {
            var e = o,
                f = function() {
                    document.body ? e || (e = k, c()) : setTimeout(f, 10)
                };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", f, o), window.addEventListener("load", f, o)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && f()
            }, o), window.attachEvent("onload", f, o))
        }
    };
    Fc.prototype.start = function() {
        var a = this.ja,
            b = this.fd;
        a.Dd = this.id;
        a.Ed = b;
        for (a.lc = k; Kc(a););
        a = this.id;
        b = this.fd;
        this.Xa = document.createElement("iframe");
        var c = {
            dframe: "t"
        };
        c.id = a;
        c.pw = b;
        a = this.Lb(c);
        this.Xa.src = a;
        this.Xa.style.display = "none";
        document.body.appendChild(this.Xa)
    };
    Fc.isAvailable = function() {
        return !Hc && !("object" === typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" === typeof Windows && "object" === typeof Windows.Td) && (Gc || k)
    };
    Fc.prototype.Ib = function() {
        this.Ha = k;
        this.ja && (this.ja.close(), this.ja = l);
        this.Xa && (document.body.removeChild(this.Xa), this.Xa = l);
        this.Fa && (clearTimeout(this.Fa), this.Fa = l)
    };
    Fc.prototype.Ja = function() {
        this.Ha || (this.e("Longpoll is closing itself"), this.Ib(), this.Q && (this.Q(this.jb), this.Q = l))
    };
    Fc.prototype.close = function() {
        this.Ha || (this.e("Longpoll is being closed."), this.Ib())
    };
    Fc.prototype.send = function(a) {
        a = y(a);
        rc(this.$, "bytes_sent", a.length);
        for (var a = ra(a), a = Gb(a, k), a = Vb(a, 1840), b = 0; b < a.length; b++) {
            var c = this.ja;
            c.Bb.push({
                Nd: this.Wc,
                Sd: a.length,
                Yc: a[b]
            });
            c.lc && Kc(c);
            this.Wc++
        }
    };

    function Ic(a, b, c, d) {
        this.Lb = d;
        this.ga = c;
        this.Ic = new Cc;
        this.Bb = [];
        this.rc = Math.floor(1E8 * Math.random());
        this.ec = k;
        this.ic = Hb();
        window[Dc + this.ic] = a;
        window[Ec + this.ic] = b;
        a = document.createElement("iframe");
        a.style.display = "none";
        if (document.body) {
            document.body.appendChild(a);
            try {
                a.contentWindow.document || N("No IE domain setting required")
            } catch (e) {
                a.src = "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())"
            }
        } else g("Document body has not initialized. Wait to initialize Firebase until after the document is ready.");
        a.contentDocument ? a.ya = a.contentDocument : a.contentWindow ? a.ya = a.contentWindow.document : a.document && (a.ya = a.document);
        this.X = a;
        a = "";
        this.X.src && "javascript:" === this.X.src.substr(0, 11) && (a = '<script>document.domain="' + document.domain + '";<\/script>');
        a = "<html><body>" + a + "</body></html>";
        try {
            this.X.ya.open(), this.X.ya.write(a), this.X.ya.close()
        } catch (f) {
            N("frame writing exception"), f.stack && N(f.stack), N(f)
        }
    }
    Ic.prototype.close = function() {
        this.lc = o;
        if (this.X) {
            this.X.ya.body.innerHTML = "";
            var a = this;
            setTimeout(function() {
                a.X !== l && (document.body.removeChild(a.X), a.X = l)
            }, 0)
        }
        var b = this.ga;
        b && (this.ga = l, b())
    };

    function Kc(a) {
        if (a.lc && a.ec && a.Ic.count() < (0 < a.Bb.length ? 2 : 1)) {
            a.rc++;
            var b = {};
            b.id = a.Dd;
            b.pw = a.Ed;
            b.ser = a.rc;
            for (var b = a.Lb(b), c = "", d = 0; 0 < a.Bb.length;)
                if (1870 >= a.Bb[0].Yc.length + 30 + c.length) {
                    var e = a.Bb.shift(),
                        c = c + "&seg" + d + "=" + e.Nd + "&ts" + d + "=" + e.Sd + "&d" + d + "=" + e.Yc;
                    d++
                } else break;
            var b = b + c,
                f = a.rc;
            a.Ic.add(f);
            var h = function() {
                    a.Ic.remove(f);
                    Kc(a)
                },
                i = setTimeout(h, 25E3);
            Jc(a, b, function() {
                clearTimeout(i);
                h()
            });
            return k
        }
        return o
    }

    function Jc(a, b, c) {
        setTimeout(function() {
            try {
                if (a.ec) {
                    var d = a.X.ya.createElement("script");
                    d.type = "text/javascript";
                    d.async = k;
                    d.src = b;
                    d.onload = d.onreadystatechange = function() {
                        var a = d.readyState;
                        if (!a || "loaded" === a || "complete" === a) d.onload = d.onreadystatechange = l, d.parentNode && d.parentNode.removeChild(d), c()
                    };
                    d.onerror = function() {
                        N("Long-poll script failed to load: " + b);
                        a.ec = o;
                        a.close()
                    };
                    a.X.ya.body.appendChild(d)
                }
            } catch (e) {}
        }, 1)
    };

    function Lc() {
        var a = [];
        Wb(Mc, function(b, c) {
            c && c.isAvailable() && a.push(c)
        });
        this.hc = a
    }
    var Mc = [Fc, {
            isAvailable: r(o)
        },
        yc
    ];

    function Nc(a, b, c, d, e, f) {
        this.id = a;
        this.e = Ob("c:" + this.id + ":");
        this.Gc = c;
        this.wb = d;
        this.Q = e;
        this.Fc = f;
        this.O = b;
        this.Xb = [];
        this.Vc = 0;
        this.Tc = new Lc;
        this.va = 0;
        this.e("Connection created");
        Oc(this)
    }

    function Oc(a) {
        var b;
        var c = a.Tc;
        0 < c.hc.length ? b = c.hc[0] : g(Error("No transports available"));
        a.K = new b("c:" + a.id + ":" + a.Vc++, a.O);
        var d = Pc(a, a.K),
            e = Qc(a, a.K);
        a.Jb = a.K;
        a.Hb = a.K;
        a.A = l;
        setTimeout(function() {
            a.K && a.K.open(d, e)
        }, 0)
    }

    function Qc(a, b) {
        return function(c) {
            b === a.K ? (a.K = l, !c && 0 === a.va ? (a.e("Realtime connection failed."), "s-" === a.O.ea.substr(0, 2) && (ob.removeItem(a.O.sb), a.O.ea = a.O.host)) : 1 === a.va && a.e("Realtime connection lost."), a.close()) : b === a.A ? (c = a.A, a.A = l, (a.Jb === c || a.Hb === c) && a.close()) : a.e("closing an old connection")
        }
    }

    function Pc(a, b) {
        return function(c) {
            if (2 != a.va)
                if (b === a.Hb) {
                    var d = Ub("t", c),
                        c = Ub("d", c);
                    if ("c" == d) {
                        if (d = Ub("t", c), "d" in c)
                            if (c = c.d, "h" === d) {
                                var d = c.ts,
                                    e = c.v,
                                    f = c.h;
                                a.fc = c.s;
                                rb(a.O, f);
                                if (0 == a.va && (a.K.start(), c = a.K, a.e("Realtime connection established."), a.K = c, a.va = 1, a.wb && (a.wb(d), a.wb = l), "5" !== e && P("Protocol version mismatch detected"), c = 1 < a.Tc.hc.length ? a.Tc.hc[1] : l)) a.A = new c("c:" + a.id + ":" + a.Vc++, a.O, a.fc), a.A.open(Pc(a, a.A), Qc(a, a.A))
                            } else if ("n" === d) {
                            a.e("recvd end transmission on primary");
                            a.Hb =
                                a.A;
                            for (c = 0; c < a.Xb.length; ++c) a.Ub(a.Xb[c]);
                            a.Xb = [];
                            Rc(a)
                        } else "s" === d ? (a.e("Connection shutdown command received. Shutting down..."), a.Fc && (a.Fc(c), a.Fc = l), a.Q = l, a.close()) : "r" === d ? (a.e("Reset packet received.  New host: " + c), rb(a.O, c), 1 === a.va ? a.close() : (Sc(a), Oc(a))) : "e" === d ? Pb("Server Error: " + c) : Pb("Unknown control packet command: " + d)
                    } else "d" == d && a.Ub(c)
                } else b === a.A ? (d = Ub("t", c), c = Ub("d", c), "c" == d ? "t" in c && (c = c.t, "a" === c ? (a.A.start(), a.e("sending client ack on secondary"), a.A.send({
                    t: "c",
                    d: {
                        t: "a",
                        d: {}
                    }
                }), a.e("Ending transmission on primary"), a.K.send({
                    t: "c",
                    d: {
                        t: "n",
                        d: {}
                    }
                }), a.Jb = a.A, Rc(a)) : "r" === c && (a.e("Got a reset on secondary, closing it"), a.A.close(), (a.Jb === a.A || a.Hb === a.A) && a.close())) : "d" == d ? a.Xb.push(c) : g(Error("Unknown protocol layer: " + d))) : a.e("message on old connection")
        }
    }
    Nc.prototype.ld = function(a) {
        a = {
            t: "d",
            d: a
        };
        1 !== this.va && g("Connection is not connected");
        this.Jb.send(a)
    };

    function Rc(a) {
        a.Jb === a.A && a.Hb === a.A && (a.e("cleaning up and promoting a connection: " + a.A.qc), a.K = a.A, a.A = l)
    }
    Nc.prototype.Ub = function(a) {
        this.Gc(a)
    };
    Nc.prototype.close = function() {
        2 !== this.va && (this.e("Closing realtime connection."), this.va = 2, Sc(this), this.Q && (this.Q(), this.Q = l))
    };

    function Sc(a) {
        a.e("Shutting down all connections");
        a.K && (a.K.close(), a.K = l);
        a.A && (a.A.close(), a.A = l)
    };

    function Tc() {
        kc.call(this, ["online"]);
        this.xb = k;
        if ("undefined" !== typeof window && "undefined" !== typeof window.addEventListener) {
            var a = this;
            window.addEventListener("online", function() {
                a.xb || a.Uc("online", k);
                a.xb = k
            }, o);
            window.addEventListener("offline", function() {
                a.xb && a.Uc("online", o);
                a.xb = o
            }, o)
        }
    }
    ka(Tc, kc);
    da(Tc);
    Tc.prototype.wc = function(a) {
        z("online" === a);
        return [this.xb]
    };

    function Vc(a, b, c, d, e, f) {
        this.id = Wc++;
        this.e = Ob("p:" + this.id + ":");
        this.Ma = k;
        this.fa = {};
        this.T = [];
        this.yb = 0;
        this.vb = [];
        this.V = o;
        this.pa = 1E3;
        this.Vb = b || ca;
        this.Tb = c || ca;
        this.ub = d || ca;
        this.Hc = e || ca;
        this.yc = f || ca;
        this.O = a;
        this.Lc = l;
        this.Fb = {};
        this.Md = 0;
        this.pb = this.Cc = l;
        Xc(this, 0);
        nc.xc().Ya("visible", this.Hd, this); - 1 === a.host.indexOf("fblocal") && Tc.xc().Ya("online", this.Gd, this)
    }
    var Wc = 0,
        Yc = 0;
    t = Vc.prototype;
    t.Da = function(a, b, c) {
        var d = ++this.Md,
            a = {
                r: d,
                a: a,
                b: b
            };
        this.e(y(a));
        z(this.V, "sendRequest_ call when we're not connected not allowed.");
        this.ia.ld(a);
        c && (this.Fb[d] = c)
    };

    function Zc(a, b, c, d, e) {
        a.e("Listen on " + b + " for " + c);
        var f = {
                p: b
            },
            d = jb(d, function(a) {
                return Ia(a)
            });
        "{}" !== c && (f.q = d);
        f.h = a.yc(b);
        a.Da("l", f, function(d) {
            a.e("listen response", d);
            d = d.s;
            "ok" !== d && $c(a, b, c);
            e && e(d)
        })
    }
    t.hb = function(a, b, c) {
        this.Ga = {
            vd: a,
            Zc: o,
            W: b,
            Nb: c
        };
        this.e("Authenticating using credential: " + this.Ga);
        ad(this)
    };
    t.Kb = function() {
        delete this.Ga;
        this.ub(o);
        this.V && this.Da("unauth", {})
    };

    function ad(a) {
        var b = a.Ga;
        a.V && b && a.Da("auth", {
            cred: b.vd
        }, function(c) {
            var d = c.s,
                c = c.d || "error";
            "ok" !== d && a.Ga === b && delete a.Ga;
            a.ub("ok" === d);
            b.Zc ? "ok" !== d && b.Nb && b.Nb(d, c) : (b.Zc = k, b.W && b.W(d, c))
        })
    }

    function bd(a, b, c, d) {
        b = b.toString();
        $c(a, b, c) && a.V && (a.e("Unlisten on " + b + " for " + c), b = {
            p: b
        }, d = jb(d, function(a) {
            return Ia(a)
        }), "{}" !== c && (b.q = d), a.Da("u", b))
    }

    function cd(a, b, c, d) {
        a.V ? dd(a, "o", b, c, d) : a.vb.push({
            Jc: b,
            action: "o",
            data: c,
            C: d
        })
    }
    t.Ec = function(a, b) {
        this.V ? dd(this, "oc", a, l, b) : this.vb.push({
            Jc: a,
            action: "oc",
            data: l,
            C: b
        })
    };

    function dd(a, b, c, d, e) {
        c = {
            p: c,
            d: d
        };
        a.e("onDisconnect " + b, c);
        a.Da(b, c, function(a) {
            e && setTimeout(function() {
                e(a.s)
            }, 0)
        })
    }
    t.put = function(a, b, c, d) {
        ed(this, "p", a, b, c, d)
    };

    function ed(a, b, c, d, e, f) {
        c = {
            p: c,
            d: d
        };
        u(f) && (c.h = f);
        a.T.push({
            action: b,
            hd: c,
            C: e
        });
        a.yb++;
        b = a.T.length - 1;
        a.V && fd(a, b)
    }

    function fd(a, b) {
        var c = a.T[b].action,
            d = a.T[b].hd,
            e = a.T[b].C;
        a.T[b].Jd = a.V;
        a.Da(c, d, function(d) {
            a.e(c + " response", d);
            delete a.T[b];
            a.yb--;
            0 === a.yb && (a.T = []);
            e && e(d.s)
        })
    }
    t.Ub = function(a) {
        if ("r" in a) {
            this.e("from server: " + y(a));
            var b = a.r,
                c = this.Fb[b];
            c && (delete this.Fb[b], c(a.b))
        } else "error" in a && g("A server-side error has occurred: " + a.error), "a" in a && (b = a.a, a = a.b, this.e("handleServerMessage", b, a), "d" === b ? this.Vb(a.p, a.d) : "m" === b ? this.Vb(a.p, a.d, k) : "c" === b ? (b = a.p, a = (a = a.q) ? jb(a, function(a) {
                return Ja(a)
            }).join("$") : "{}", (a = $c(this, b, a)) && a.C && a.C("permission_denied")) : "ac" === b ? (b = a.s, a = a.d, c = this.Ga, delete this.Ga, c && c.Nb && c.Nb(b, a), this.ub(o)) : "sd" === b ? this.Lc ? this.Lc(a) :
            "msg" in a && "undefined" !== typeof console && console.log("FIREBASE: " + a.msg.replace("\n", "\nFIREBASE: ")) : Pb("Unrecognized action received from server: " + y(b) + "\nAre you using the latest client?"))
    };
    t.wb = function(a) {
        this.e("connection ready");
        this.V = k;
        this.pb = (new Date).getTime();
        this.Hc({
            serverTimeOffset: a - (new Date).getTime()
        });
        ad(this);
        for (var b in this.fa)
            for (var c in this.fa[b]) a = this.fa[b][c], Zc(this, b, c, a.$a, a.C);
        for (b = 0; b < this.T.length; b++) this.T[b] && fd(this, b);
        for (; this.vb.length;) b = this.vb.shift(), dd(this, b.action, b.Jc, b.data, b.C);
        this.Tb(k)
    };

    function Xc(a, b) {
        z(!a.ia, "Scheduling a connect when we're already connected/ing?");
        a.Sa && clearTimeout(a.Sa);
        a.Sa = setTimeout(function() {
            a.Sa = l;
            if (a.Ma) {
                a.e("Making a connection attempt");
                a.Cc = (new Date).getTime();
                a.pb = l;
                var b = w(a.Ub, a),
                    d = w(a.wb, a),
                    e = w(a.dd, a),
                    f = a.id + ":" + Yc++;
                a.ia = new Nc(f, a.O, b, d, e, function(b) {
                    a.Ma = o;
                    g(Error(b))
                })
            }
        }, b)
    }
    t.Hd = function(a) {
        a && (!this.gb && 3E5 === this.pa) && (this.e("Window became visible.  Reducing delay."), this.pa = 1E3, this.ia || Xc(this, 0));
        this.gb = a
    };
    t.Gd = function(a) {
        a ? (this.e("Browser went online.  Reconnecting."), this.pa = 1E3, this.Ma = k, this.ia || Xc(this, 0)) : (this.e("Browser went offline.  Killing connection; don't reconnect."), this.Ma = o, this.ia && this.ia.close())
    };
    t.dd = function() {
        this.e("data client disconnected");
        this.V = o;
        this.ia = l;
        for (var a = 0; a < this.T.length; a++) {
            var b = this.T[a];
            b && ("h" in b.hd && b.Jd) && (b.C && b.C("disconnect"), delete this.T[a], this.yb--)
        }
        0 === this.yb && (this.T = []);
        if (this.Ma) this.gb ? this.pb && (3E4 < (new Date).getTime() - this.pb && (this.pa = 1E3), this.pb = l) : (this.e("Window isn't visible.  Delaying reconnect."), this.pa = 3E5, this.Cc = (new Date).getTime()), a = Math.max(0, this.pa - ((new Date).getTime() - this.Cc)), a *= Math.random(), this.e("Trying to reconnect in " +
            a + "ms"), Xc(this, a), this.pa = Math.min(3E5, 1.3 * this.pa);
        else
            for (var c in this.Fb) delete this.Fb[c];
        this.Tb(o)
    };
    t.Va = function() {
        this.Ma = o;
        this.ia ? this.ia.close() : (this.Sa && (clearTimeout(this.Sa), this.Sa = l), this.dd())
    };
    t.Gb = function() {
        this.Ma = k;
        this.pa = 1E3;
        Xc(this, 0)
    };

    function $c(a, b, c) {
        b = (new K(b)).toString();
        c || (c = "{}");
        var d = a.fa[b][c];
        delete a.fa[b][c];
        return d
    };

    function gd() {
        this.o = this.D = l
    }

    function hd(a, b, c) {
        if (b.f()) a.D = c, a.o = l;
        else if (a.D !== l) a.D = a.D.xa(b, c);
        else {
            a.o == l && (a.o = new Cc);
            var d = F(b);
            a.o.contains(d) || a.o.add(d, new gd);
            a = a.o.get(d);
            b = Ka(b);
            hd(a, b, c)
        }
    }

    function id(a, b) {
        if (b.f()) return a.D = l, a.o = l, k;
        if (a.D !== l) {
            if (a.D.M()) return o;
            var c = a.D;
            a.D = l;
            c.w(function(b, c) {
                hd(a, new K(b), c)
            });
            return id(a, b)
        }
        return a.o !== l ? (c = F(b), b = Ka(b), a.o.contains(c) && id(a.o.get(c), b) && a.o.remove(c), a.o.f() ? (a.o = l, k) : o) : k
    }

    function jd(a, b, c) {
        a.D !== l ? c(b, a.D) : a.w(function(a, e) {
            var f = new K(b.toString() + "/" + a);
            jd(e, f, c)
        })
    }
    gd.prototype.w = function(a) {
        this.o !== l && U(this.o, function(b, c) {
            a(b, c)
        })
    };

    function kd() {
        this.qa = Q
    }

    function V(a, b) {
        return a.qa.P(b)
    }

    function W(a, b, c) {
        a.qa = a.qa.xa(b, c)
    }
    kd.prototype.toString = function() {
        return this.qa.toString()
    };

    function ld() {
        this.ra = new kd;
        this.I = new kd;
        this.la = new kd;
        this.Ab = new Na
    }

    function md(a, b) {
        for (var c = V(a.ra, b), d = V(a.I, b), e = L(a.Ab, b), f = o, h = e; h !== l;) {
            if (h.k() !== l) {
                f = k;
                break
            }
            h = h.parent()
        }
        if (f) return o;
        c = nd(c, d, e);
        return c !== d ? (W(a.I, b, c), k) : o
    }

    function nd(a, b, c) {
        if (c.f()) return a;
        if (c.k() !== l) return b;
        a = a || Q;
        c.w(function(d) {
            var d = d.name(),
                e = a.L(d),
                f = b.L(d),
                h = L(c, d),
                e = nd(e, f, h);
            a = a.G(d, e)
        });
        return a
    }
    ld.prototype.set = function(a, b) {
        var c = this,
            d = [];
        ib(b, function(a) {
            var b = a.path,
                a = a.oa,
                h = Hb();
            M(L(c.Ab, b), h);
            W(c.I, b, a);
            d.push({
                path: b,
                Od: h
            })
        });
        return d
    };

    function od(a, b) {
        ib(b, function(b) {
            var d = b.Od,
                b = L(a.Ab, b.path),
                e = b.k();
            z(e !== l, "pendingPut should not be null.");
            e === d && M(b, l)
        })
    };

    function pd() {
        this.Ta = []
    }

    function qd(a, b) {
        if (0 !== b.length)
            for (var c = 0; c < b.length; c++) a.Ta.push(b[c])
    }
    pd.prototype.Db = function() {
        for (var a = 0; a < this.Ta.length; a++)
            if (this.Ta[a]) {
                var b = this.Ta[a];
                this.Ta[a] = l;
                rd(b)
            }
        this.Ta = []
    };

    function rd(a) {
        var b = a.W,
            c = a.md,
            d = a.Cb;
        $b(function() {
            b(c, d)
        })
    };

    function X(a, b, c, d) {
        this.type = a;
        this.sa = b;
        this.aa = c;
        this.Cb = d
    };

    function sd(a) {
        this.J = a;
        this.ma = [];
        this.tc = new pd
    }

    function td(a, b, c, d, e) {
        a.ma.push({
            type: b,
            W: c,
            cancel: d,
            S: e
        });
        var d = [],
            f = ud(a.i);
        a.nb && f.push(new X("value", a.i));
        for (var h = 0; h < f.length; h++)
            if (f[h].type === b) {
                var i = new J(a.J.n, a.J.path);
                f[h].aa && (i = i.F(f[h].aa));
                d.push({
                    W: e ? w(c, e) : c,
                    md: new T(f[h].sa, i),
                    Cb: f[h].Cb
                })
            }
        qd(a.tc, d)
    }
    sd.prototype.Zb = function(a, b) {
        b = this.$b(a, b);
        b != l && vd(this, b)
    };

    function vd(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e.type,
                h = new J(a.J.n, a.J.path);
            b[d].aa && (h = h.F(b[d].aa));
            h = new T(b[d].sa, h);
            "value" === e.type && !h.lb() ? f += "(" + h.U() + ")" : "value" !== e.type && (f += " " + h.name());
            N(a.J.n.u.id + ": event:" + a.J.path + ":" + a.J.Ka() + ":" + f);
            for (f = 0; f < a.ma.length; f++) {
                var i = a.ma[f];
                b[d].type === i.type && c.push({
                    W: i.S ? w(i.W, i.S) : i.W,
                    md: h,
                    Cb: e.Cb
                })
            }
        }
        qd(a.tc, c)
    }
    sd.prototype.Db = function() {
        this.tc.Db()
    };

    function ud(a) {
        var b = [];
        if (!a.M()) {
            var c = l;
            a.w(function(a, e) {
                b.push(new X("child_added", e, a, c));
                c = a
            })
        }
        return b
    }

    function wd(a) {
        a.nb || (a.nb = k, vd(a, [new X("value", a.i)]))
    };

    function xd(a, b) {
        sd.call(this, a);
        this.i = b
    }
    ka(xd, sd);
    xd.prototype.$b = function(a, b) {
        this.i = a;
        this.nb && b != l && b.push(new X("value", this.i));
        return b
    };
    xd.prototype.kb = function() {
        return {}
    };

    function zd(a, b) {
        this.Ob = a;
        this.Dc = b
    }

    function Ad(a, b, c, d, e) {
        var f = a.P(c),
            h = b.P(c),
            d = new zd(d, e),
            e = Bd(d, c, f, h),
            h = !f.f() && !h.f() && f.j() !== h.j();
        if (e || h) {
            f = c;
            for (c = e; f.parent() !== l;) {
                var i = a.P(f),
                    e = b.P(f),
                    m = f.parent();
                if (!d.Ob || L(d.Ob, m).k()) {
                    var n = b.P(m),
                        p = [],
                        f = f.Z < f.m.length ? f.m[f.m.length - 1] : l;
                    i.f() ? (i = n.da(f, e), p.push(new X("child_added", e, f, i))) : e.f() ? p.push(new X("child_removed", i, f)) : (i = n.da(f, e), h && p.push(new X("child_moved", e, f, i)), c && p.push(new X("child_changed", e, f, i)));
                    d.Dc(m, n, p)
                }
                h && (h = o, c = k);
                f = m
            }
        }
    }

    function Bd(a, b, c, d) {
        var e, f = [];
        c === d ? e = o : c.M() && d.M() ? e = c.k() !== d.k() : c.M() ? (Cd(a, b, Q, d, f), e = k) : d.M() ? (Cd(a, b, c, Q, f), e = k) : e = Cd(a, b, c, d, f);
        e ? a.Dc(b, d, f) : c.j() !== d.j() && a.Dc(b, d, l);
        return e
    }

    function Cd(a, b, c, d, e) {
        var f = o,
            h = !a.Ob || !L(a.Ob, b).f(),
            i = [],
            m = [],
            n = [],
            p = [],
            q = {},
            s = {},
            x, O, I, G;
        x = c.Ua();
        I = Wa(x);
        O = d.Ua();
        for (G = Wa(O); I !== l || G !== l;) {
            c = I === l ? 1 : G === l ? -1 : I.key === G.key ? 0 : cc({
                name: I.key,
                ha: I.value.j()
            }, {
                name: G.key,
                ha: G.value.j()
            });
            if (0 > c) f = ua(q, I.key), u(f) ? (n.push({
                vc: I,
                Qc: i[f]
            }), i[f] = l) : (s[I.key] = m.length, m.push(I)), f = k, I = Wa(x);
            else {
                if (0 < c) f = ua(s, G.key), u(f) ? (n.push({
                    vc: m[f],
                    Qc: G
                }), m[f] = l) : (q[G.key] = i.length, i.push(G)), f = k;
                else {
                    c = b.F(G.key);
                    if (c = Bd(a, c, I.value, G.value)) p.push(G), f = k;
                    I.value.j() !==
                        G.value.j() && (n.push({
                            vc: I,
                            Qc: G
                        }), f = k);
                    I = Wa(x)
                }
                G = Wa(O)
            } if (!h && f) return k
        }
        for (h = 0; h < m.length; h++)
            if (q = m[h]) c = b.F(q.key), Bd(a, c, q.value, Q), e.push(new X("child_removed", q.value, q.key));
        for (h = 0; h < i.length; h++)
            if (q = i[h]) c = b.F(q.key), m = d.da(q.key, q.value), Bd(a, c, Q, q.value), e.push(new X("child_added", q.value, q.key, m));
        for (h = 0; h < n.length; h++) q = n[h].vc, i = n[h].Qc, c = b.F(i.key), m = d.da(i.key, i.value), e.push(new X("child_moved", i.value, i.key, m)), (c = Bd(a, c, q.value, i.value)) && p.push(i);
        for (h = 0; h < p.length; h++) a = p[h],
            m = d.da(a.key, a.value), e.push(new X("child_changed", a.value, a.key, m));
        return f
    };

    function Dd() {
        this.R = this.wa = l;
        this.set = {}
    }
    ka(Dd, Cc);
    t = Dd.prototype;
    t.setActive = function(a) {
        this.wa = a
    };

    function Ed(a) {
        return a.contains("default")
    }

    function Fd(a) {
        return a.wa != l && Ed(a)
    }
    t.defaultView = function() {
        return Ed(this) ? this.get("default") : l
    };
    t.path = aa("R");
    t.toString = function() {
        return jb(this.keys(), function(a) {
            return "default" === a ? "{}" : a
        }).join("$")
    };
    t.$a = function() {
        var a = [];
        U(this, function(b, c) {
            a.push(c.J)
        });
        return a
    };

    function Gd(a, b) {
        sd.call(this, a);
        this.i = Q;
        this.$b(b, ud(b))
    }
    ka(Gd, sd);
    Gd.prototype.$b = function(a, b) {
        if (b === l) return b;
        var c = [],
            d = this.J;
        u(d.ca) && (u(d.ua) && d.ua != l ? c.push(function(a, b) {
            var c = Rb(b, d.ca);
            return 0 < c || 0 === c && 0 <= Sb(a, d.ua)
        }) : c.push(function(a, b) {
            return 0 <= Rb(b, d.ca)
        }));
        u(d.za) && (u(d.Ra) ? c.push(function(a, b) {
            var c = Rb(b, d.za);
            return 0 > c || 0 === c && 0 >= Sb(a, d.Ra)
        }) : c.push(function(a, b) {
            return 0 >= Rb(b, d.za)
        }));
        var e = l,
            f = l;
        if (u(this.J.Ba))
            if (u(this.J.ca)) {
                if (e = Hd(a, c, this.J.Ba, o)) {
                    var h = a.L(e).j();
                    c.push(function(a, b) {
                        var c = Rb(b, h);
                        return 0 > c || 0 === c && 0 >= Sb(a, e)
                    })
                }
            } else if (f =
            Hd(a, c, this.J.Ba, k)) {
            var i = a.L(f).j();
            c.push(function(a, b) {
                var c = Rb(b, i);
                return 0 < c || 0 === c && 0 <= Sb(a, f)
            })
        }
        for (var m = [], n = [], p = [], q = [], s = 0; s < b.length; s++) {
            var x = b[s].aa,
                O = b[s].sa;
            switch (b[s].type) {
                case "child_added":
                    Id(c, x, O) && (this.i = this.i.G(x, O), n.push(b[s]));
                    break;
                case "child_removed":
                    this.i.L(x).f() || (this.i = this.i.G(x, l), m.push(b[s]));
                    break;
                case "child_changed":
                    !this.i.L(x).f() && Id(c, x, O) && (this.i = this.i.G(x, O), q.push(b[s]));
                    break;
                case "child_moved":
                    var I = !this.i.L(x).f(),
                        G = Id(c, x, O);
                    I ? G ? (this.i =
                        this.i.G(x, O), p.push(b[s])) : (m.push(new X("child_removed", this.i.L(x), x)), this.i = this.i.G(x, l)) : G && (this.i = this.i.G(x, O), n.push(b[s]))
            }
        }
        var Uc = e || f;
        if (Uc) {
            var yd = (s = f !== l) ? this.i.$c() : this.i.ad(),
                lc = o,
                $a = o,
                ab = this;
            (s ? a.uc : a.w).call(a, function(a, b) {
                !$a && yd === l && ($a = k);
                if ($a && lc) return k;
                lc ? (m.push(new X("child_removed", ab.i.L(a), a)), ab.i = ab.i.G(a, l)) : $a && (n.push(new X("child_added", b, a)), ab.i = ab.i.G(a, b));
                yd === a && ($a = k);
                a === Uc && (lc = k)
            })
        }
        for (s = 0; s < n.length; s++) c = n[s], x = this.i.da(c.aa, c.sa), m.push(new X("child_added",
            c.sa, c.aa, x));
        for (s = 0; s < p.length; s++) c = p[s], x = this.i.da(c.aa, c.sa), m.push(new X("child_moved", c.sa, c.aa, x));
        for (s = 0; s < q.length; s++) c = q[s], x = this.i.da(c.aa, c.sa), m.push(new X("child_changed", c.sa, c.aa, x));
        this.nb && 0 < m.length && m.push(new X("value", this.i));
        return m
    };

    function Hd(a, b, c, d) {
        if (a.M()) return l;
        var e = l;
        (d ? a.uc : a.w).call(a, function(a, d) {
            if (Id(b, a, d) && (e = a, c--, 0 === c)) return k
        });
        return e
    }

    function Id(a, b, c) {
        for (var d = 0; d < a.length; d++)
            if (!a[d](b, c.j())) return o;
        return k
    }
    Gd.prototype.zc = function(a) {
        return this.i.L(a) !== Q
    };
    Gd.prototype.kb = function(a, b, c) {
        var d = {};
        this.i.M() || this.i.w(function(a) {
            d[a] = 3
        });
        var e = this.i,
            c = V(c, new K("")),
            f = new Na;
        M(L(f, this.J.path), k);
        var b = Q.xa(a, b),
            h = this;
        Ad(c, b, a, f, function(a, b, c) {
            c !== l && a.toString() === h.J.path.toString() && h.$b(b, c)
        });
        this.i.M() ? Xb(d, function(a, b) {
            d[b] = 2
        }) : (this.i.w(function(a) {
            D(d, a) || (d[a] = 1)
        }), Xb(d, function(a, b) {
            h.i.L(b).f() && (d[b] = 2)
        }));
        this.i = e;
        return d
    };

    function Jd(a, b) {
        this.u = a;
        this.g = b;
        this.Sb = b.qa;
        this.ka = new Na
    }
    Jd.prototype.Mb = function(a, b, c, d, e) {
        var f = a.path,
            h = L(this.ka, f),
            i = h.k();
        i === l ? (i = new Dd, M(h, i)) : z(!i.f(), "We shouldn't be storing empty QueryMaps");
        var m = a.Ka();
        if (i.contains(m)) a = i.get(m), td(a, b, c, d, e);
        else {
            var n = this.g.qa.P(f),
                n = a = "default" === a.Ka() ? new xd(a, n) : new Gd(a, n);
            if (Fd(i) || Kd(h)) i.add(m, n), i.R || (i.R = n.J.path);
            else {
                var p, q;
                i.f() || (p = i.toString(), q = i.$a());
                i.add(m, n);
                i.R || (i.R = n.J.path);
                i.setActive(Ld(this, i));
                p && q && bd(this.u, i.path(), p, q)
            }
            Fd(i) && Pa(h, function(a) {
                if (a = a.k()) {
                    a.wa && a.wa();
                    a.wa = l
                }
            });
            td(a, b, c, d, e);
            (b = (b = Qa(L(this.ka, f), function(a) {
                var b;
                if (b = a.k())
                    if (b = a.k().defaultView()) b = a.k().defaultView().nb;
                if (b) return k
            }, k)) || this.u === l && !V(this.g, f).f()) && wd(a)
        }
        a.Db()
    };

    function Md(a, b, c, d, e) {
        var f = a.get(b),
            h;
        if (h = f) {
            h = o;
            for (var i = f.ma.length - 1; 0 <= i; i--) {
                var m = f.ma[i];
                if ((!c || m.type === c) && (!d || m.W === d) && (!e || m.S === e))
                    if (f.ma.splice(i, 1), h = k, c && d) break
            }
            h = h && !(0 < f.ma.length)
        }(c = h) && a.remove(b);
        return c
    }
    Jd.prototype.bc = function(a, b, c, d) {
        var e = L(this.ka, a.path).k();
        return e === l ? l : Nd(this, e, a, b, c, d)
    };

    function Nd(a, b, c, d, e, f) {
        var h = b.path(),
            h = L(a.ka, h),
            c = c ? c.Ka() : l,
            i = [];
        c && "default" !== c ? Md(b, c, d, e, f) && i.push(c) : ib(b.keys(), function(a) {
            Md(b, a, d, e, f) && i.push(a)
        });
        b.f() && M(h, l);
        c = Kd(h);
        if (0 < i.length && !c) {
            for (var m = h, n = h.parent(), c = o; !c && n;) {
                var p = n.k();
                if (p) {
                    z(!Fd(p));
                    var q = m.name(),
                        s = o;
                    U(p, function(a, b) {
                        s = b.zc(q) || s
                    });
                    s && (c = k)
                }
                m = n;
                n = n.parent()
            }
            m = l;
            if (!Fd(b)) {
                n = b.wa;
                b.wa = l;
                var x = [],
                    O = function(b) {
                        var c = b.k();
                        if (c && Ed(c)) x.push(c.path()), c.wa == l && c.setActive(Ld(a, c));
                        else {
                            if (c) {
                                c.wa != l || c.setActive(Ld(a,
                                    c));
                                var d = {};
                                U(c, function(a, b) {
                                    b.i.w(function(a) {
                                        D(d, a) || (d[a] = k, a = c.path().F(a), x.push(a))
                                    })
                                })
                            }
                            b.w(O)
                        }
                    };
                O(h);
                m = x;
                n && n()
            }
            return c ? l : m
        }
        return l
    }

    function Od(a, b, c) {
        Pa(L(a.ka, b), function(a) {
            (a = a.k()) && U(a, function(a, b) {
                wd(b)
            })
        }, c, k)
    }

    function Y(a, b, c) {
        function d(a) {
            for (var b = 0; b < c.length; ++b)
                if (c[b].contains(a)) return k;
            return o
        }
        var e = a.Sb,
            f = a.g.qa;
        a.Sb = f;
        Ad(e, f, b, a.ka, function(c, e, f) {
            if (b.contains(c)) {
                var n = d(c);
                n && Od(a, c, o);
                a.Zb(c, e, f);
                n && Od(a, c, k)
            } else a.Zb(c, e, f)
        });
        d(b) && Od(a, b, k);
        Pd(a, b)
    }

    function Pd(a, b) {
        var c = L(a.ka, b);
        Pa(c, function(a) {
            (a = a.k()) && U(a, function(a, b) {
                b.Db()
            })
        }, k, k);
        Qa(c, function(a) {
            (a = a.k()) && U(a, function(a, b) {
                b.Db()
            })
        }, o)
    }
    Jd.prototype.Zb = function(a, b, c) {
        a = L(this.ka, a).k();
        a !== l && U(a, function(a, e) {
            e.Zb(b, c)
        })
    };

    function Kd(a) {
        return Qa(a, function(a) {
            return a.k() && Fd(a.k())
        })
    }

    function Ld(a, b) {
        if (a.u) {
            var c = a.u,
                d = b.path(),
                e = b.toString(),
                f = b.$a(),
                h, i = b.keys(),
                m = Ed(b),
                n = a.u,
                p = function(c) {
                    if ("ok" !== c) {
                        var d = "Unknown Error";
                        "too_big" === c ? d = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == c && (d = "Client doesn't have permission to access the desired data.");
                        var e = Error(c + ": " + d);
                        e.code = c.toUpperCase();
                        P("on() or once() for " + b.path().toString() + " failed: " + e.toString());
                        b && (U(b, function(a, b) {
                            for (var c = 0; c < b.ma.length; c++) {
                                var d =
                                    b.ma[c];
                                d.cancel && (d.S ? w(d.cancel, d.S) : d.cancel)(e)
                            }
                        }), Nd(a, b))
                    } else h || (m ? Od(a, b.path(), k) : ib(i, function(a) {
                        (a = b.get(a)) && wd(a)
                    }), Pd(a, b.path()))
                },
                q = b.toString(),
                s = b.path().toString();
            n.fa[s] = n.fa[s] || {};
            z(!n.fa[s][q], "listen() called twice for same path/queryId.");
            n.fa[s][q] = {
                $a: b.$a(),
                C: p
            };
            n.V && Zc(n, s, q, b.$a(), p);
            return function() {
                h = k;
                bd(c, d, e, f)
            }
        }
        return ca
    }
    Jd.prototype.kb = function(a, b, c, d) {
        var e = {};
        U(b, function(b, h) {
            var i = h.kb(a, c, d);
            Xb(i, function(a, b) {
                e[b] = 3 === a ? 3 : (ua(e, b) || a) === a ? a : 3
            })
        });
        c.M() || c.w(function(a) {
            D(e, a) || (e[a] = 4)
        });
        return e
    };

    function Qd(a, b, c, d, e) {
        var f = b.path(),
            b = a.kb(f, b, d, e),
            h = Q,
            i = [];
        Xb(b, function(b, n) {
            var p = new K(n);
            3 === b || 1 === b ? h = h.G(n, d.P(p)) : (2 === b && i.push({
                path: f.F(n),
                oa: Q
            }), i = i.concat(Rd(a, d.P(p), L(c, p), e)))
        });
        return [{
            path: f,
            oa: h
        }].concat(i)
    }

    function Sd(a, b, c, d) {
        var e;
        a: {
            var f = L(a.ka, b);
            e = f.parent();
            for (var h = []; e !== l;) {
                var i = e.k();
                if (i !== l) {
                    if (Ed(i)) {
                        e = [{
                            path: b,
                            oa: c
                        }];
                        break a
                    }
                    i = a.kb(b, i, c, d);
                    f = f.name();
                    f = ua(i, f);
                    if (3 === f || 1 === f) {
                        e = [{
                            path: b,
                            oa: c
                        }];
                        break a
                    }
                    2 === f && h.push({
                        path: b,
                        oa: Q
                    })
                }
                f = e;
                e = e.parent()
            }
            e = h
        }
        if (1 == e.length && (!e[0].oa.f() || c.f())) return e;
        h = L(a.ka, b);
        f = h.k();
        f !== l ? Ed(f) ? e.push({
            path: b,
            oa: c
        }) : e = e.concat(Qd(a, f, h, c, d)) : e = e.concat(Rd(a, c, h, d));
        return e
    }

    function Rd(a, b, c, d) {
        var e = c.k();
        if (e !== l) return Ed(e) ? [{
            path: c.path(),
            oa: b
        }] : Qd(a, e, c, b, d);
        var f = [];
        c.w(function(c) {
            var e = b.M() ? Q : b.L(c.name()),
                c = Rd(a, e, c, d);
            f = f.concat(c)
        });
        return f
    };

    function Td(a, b) {
        if (!a || "object" !== typeof a) return a;
        z(".sv" in a, "Unexpected leaf node or priority contents");
        return b[a[".sv"]]
    }

    function Ud(a, b) {
        var c = Td(a.j(), b),
            d;
        if (a.M()) {
            var e = Td(a.k(), b);
            return e !== a.k() || c !== a.j() ? new ac(e, c) : a
        }
        d = a;
        c !== a.j() && (d = d.Ea(c));
        a.w(function(a, c) {
            var e = Ud(c, b);
            e !== c && (d = d.G(a, e))
        });
        return d
    };

    function Vd(a) {
        this.O = a;
        this.$ = wc(a);
        this.u = new Vc(this.O, w(this.Vb, this), w(this.Tb, this), w(this.ub, this), w(this.Hc, this), w(this.yc, this));
        var b = w(function() {
                return new tc(this.$, this.u)
            }, this),
            a = a.toString();
        vc[a] || (vc[a] = b());
        this.nd = vc[a];
        this.eb = new Na;
        this.fb = new kd;
        this.g = new ld;
        this.H = new Jd(this.u, this.g.la);
        this.Ac = new kd;
        this.Bc = new Jd(l, this.Ac);
        Wd(this, "connected", o);
        Wd(this, "authenticated", o);
        this.Q = new gd;
        this.sc = 0
    }
    t = Vd.prototype;
    t.toString = function() {
        return (this.O.dc ? "https://" : "http://") + this.O.host
    };
    t.name = function() {
        return this.O.sb
    };

    function Xd(a) {
        a = V(a.Ac, new K(".info/serverTimeOffset")).U() || 0;
        return (new Date).getTime() + a
    }

    function Yd(a) {
        a = a = {
            timestamp: Xd(a)
        };
        a.timestamp = a.timestamp || (new Date).getTime();
        return a
    }
    t.Vb = function(a, b, c) {
        this.sc++;
        var d = [];
        if (9 <= a.length && a.lastIndexOf(".priority") === a.length - 9) a = new K(a.substring(0, a.length - 9)), c = V(this.g.ra, a).Ea(b), d.push(a);
        else if (c) {
            var a = new K(a),
                c = V(this.g.ra, a),
                e;
            for (e in b) {
                var f = new K(e),
                    c = c.xa(f, S(b[e]));
                d.push(a.F(e))
            }
        } else a = new K(a), c = S(b), d.push(a);
        b = Sd(this.H, a, c, this.g.I);
        e = o;
        for (c = 0; c < b.length; ++c) {
            var f = b[c],
                h = this.g,
                i = f.path;
            W(h.ra, i, f.oa);
            e = md(h, i) || e
        }
        e && (a = Zd(this, a));
        Y(this.H, a, d)
    };
    t.Tb = function(a) {
        Wd(this, "connected", a);
        if (a === o) {
            this.e("onDisconnectEvents");
            var b = this,
                c = [],
                d = Yd(this),
                a = jd,
                e = new gd;
            jd(this.Q, new K(""), function(a, b) {
                hd(e, a, Ud(b, d))
            });
            a(e, new K(""), function(a, d) {
                var e = Sd(b.H, a, d, b.g.I);
                c.push.apply(c, b.g.set(a, e));
                e = $d(b, a);
                Zd(b, e);
                Y(b.H, e, [a])
            });
            od(this.g, c);
            this.Q = new gd
        }
    };
    t.Hc = function(a) {
        var b = this;
        Wb(a, function(a, d) {
            Wd(b, d, a)
        })
    };
    t.yc = function(a) {
        a = new K(a);
        return V(this.g.ra, a).hash()
    };
    t.ub = function(a) {
        Wd(this, "authenticated", a)
    };

    function Wd(a, b, c) {
        b = new K("/.info/" + b);
        W(a.Ac, b, S(c));
        Y(a.Bc, b, [b])
    }
    t.hb = function(a, b, c) {
        "firebaseio-demo.com" === this.O.domain && P("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");
        this.u.hb(a, function(a, c) {
            ae(b, a, c)
        }, function(a, b) {
            P("auth() was canceled: " + b);
            if (c) {
                var f = Error(b);
                f.code = a.toUpperCase();
                c(f)
            }
        })
    };
    t.Kb = function() {
        this.u.Kb()
    };
    t.bb = function(a, b, c, d) {
        this.e("set", {
            path: a.toString(),
            value: b,
            ha: c
        });
        var e = Yd(this),
            b = S(b, c),
            e = Ud(b, e),
            e = Sd(this.H, a, e, this.g.I),
            f = this.g.set(a, e),
            h = this;
        this.u.put(a.toString(), b.U(k), function(b) {
            "ok" !== b && P("set at " + a + " failed: " + b);
            od(h.g, f);
            md(h.g, a);
            var c = Zd(h, a);
            Y(h.H, c, []);
            ae(d, b)
        });
        e = $d(this, a);
        Zd(this, e);
        Y(this.H, e, [a])
    };
    t.update = function(a, b, c) {
        this.e("update", {
            path: a.toString(),
            value: b
        });
        var d = V(this.g.la, a),
            e = k,
            f = [],
            h = Yd(this),
            i = [],
            m;
        for (m in b) {
            var e = o,
                n = S(b[m]),
                n = Ud(n, h),
                d = d.G(m, n),
                p = a.F(m);
            f.push(p);
            n = Sd(this.H, p, n, this.g.I);
            i = i.concat(this.g.set(a, n))
        }
        if (e) N("update() called with empty data.  Don't do anything."), ae(c, "ok");
        else {
            var q = this;
            ed(this.u, "m", a.toString(), b, function(b) {
                z("ok" === b || "permission_denied" === b, "merge at " + a + " failed.");
                "ok" !== b && P("update at " + a + " failed: " + b);
                od(q.g, i);
                md(q.g, a);
                var d =
                    Zd(q, a);
                Y(q.H, d, []);
                ae(c, b)
            }, j);
            b = $d(this, a);
            Zd(this, b);
            Y(q.H, b, f)
        }
    };
    t.Mc = function(a, b, c) {
        this.e("setPriority", {
            path: a.toString(),
            ha: b
        });
        var d = Yd(this),
            d = Td(b, d),
            d = V(this.g.I, a).Ea(d),
            d = Sd(this.H, a, d, this.g.I),
            e = this.g.set(a, d),
            f = this;
        this.u.put(a.toString() + "/.priority", b, function(a) {
            od(f.g, e);
            ae(c, a)
        });
        a = Zd(this, a);
        Y(f.H, a, [])
    };
    t.Ec = function(a, b) {
        var c = this;
        this.u.Ec(a.toString(), function(d) {
            "ok" === d && id(c.Q, a);
            ae(b, d)
        })
    };

    function be(a, b, c, d) {
        var e = S(c);
        cd(a.u, b.toString(), e.U(k), function(c) {
            "ok" === c && hd(a.Q, b, e);
            ae(d, c)
        })
    }

    function ce(a) {
        rc(a.$, "deprecated_on_disconnect");
        a.nd.Pc.deprecated_on_disconnect = k
    }
    t.Mb = function(a, b, c, d, e) {
        ".info" === F(a.path) ? this.Bc.Mb(a, b, c, d, e) : this.H.Mb(a, b, c, d, e)
    };
    t.bc = function(a, b, c, d) {
        if (".info" === F(a.path)) this.Bc.bc(a, b, c, d);
        else {
            b = this.H.bc(a, b, c, d);
            if (c = b !== l) {
                for (var c = this.g, d = a.path, e = [], f = 0; f < b.length; ++f) e[f] = V(c.ra, b[f]);
                W(c.ra, d, Q);
                for (f = 0; f < b.length; ++f) W(c.ra, b[f], e[f]);
                c = md(c, d)
            }
            c && (z(this.g.la.qa === this.H.Sb, "We should have raised any outstanding events by now.  Else, we'll blow them away."), W(this.g.la, a.path, V(this.g.I, a.path)), this.H.Sb = this.g.la.qa)
        }
    };
    t.Va = function() {
        this.u.Va()
    };
    t.Gb = function() {
        this.u.Gb()
    };
    t.Nc = function(a) {
        if ("undefined" !== typeof console) {
            a ? (this.gc || (this.gc = new sc(this.$)), a = this.gc.get()) : a = this.$.get();
            var b = a,
                c = [],
                d = 0,
                e;
            for (e in b) c[d++] = e;
            var f = function(a, b) {
                return Math.max(b.length, a)
            };
            if (c.reduce) e = c.reduce(f, 0);
            else {
                var h = 0;
                ib(c, function(a) {
                    h = f.call(j, h, a)
                });
                e = h
            }
            for (var i in a) {
                b = a[i];
                for (c = i.length; c < e + 2; c++) i += " ";
                console.log(i + b)
            }
        }
    };
    t.Oc = function(a) {
        rc(this.$, a);
        this.nd.Pc[a] = k
    };
    t.e = function() {
        N("r:" + this.u.id + ":", arguments)
    };

    function ae(a, b, c) {
        a && $b(function() {
            if ("ok" == b) a(l, c);
            else {
                var d = (b || "error").toUpperCase(),
                    e = d;
                c && (e += ": " + c);
                e = Error(e);
                e.code = d;
                a(e)
            }
        })
    };

    function de(a, b) {
        var c = b || a.eb;
        b || ee(a, c);
        if (c.k() !== l) {
            var d = fe(a, c);
            z(0 < d.length);
            if (2 !== d[0].status && 4 !== d[0].status) {
                for (var e = c.path(), f = 0; f < d.length; f++) z(1 === d[f].status, "tryToSendTransactionQueue_: items in queue should all be run."), d[f].status = 2, d[f].kd++;
                c = V(a.g.I, e).hash();
                W(a.g.I, e, V(a.g.la, e));
                for (var h = V(a.fb, e).U(k), i = Hb(), m = {}, n = 0; n < d.length; n++) d[n].mc && (m[d[n].path.toString()] = d[n].path);
                var p = [],
                    q;
                for (q in m) p.push(m[q]);
                for (f = 0; f < p.length; f++) M(L(a.g.Ab, p[f]), i);
                a.u.put(e.toString(),
                    h, function(b) {
                        a.e("transaction put response", {
                            path: e.toString(),
                            status: b
                        });
                        for (f = 0; f < p.length; f++) {
                            var c = L(a.g.Ab, p[f]),
                                h = c.k();
                            z(h !== l, "sendTransactionQueue_: pendingPut should not be null.");
                            h === i && (M(c, l), W(a.g.I, p[f], V(a.g.ra, p[f])))
                        }
                        if ("ok" === b) {
                            b = [];
                            for (f = 0; f < d.length; f++) d[f].status = 3, d[f].C && (c = ge(a, d[f].path), b.push(w(d[f].C, l, l, k, c))), d[f].jc();
                            ee(a, L(a.eb, e));
                            de(a);
                            for (f = 0; f < b.length; f++) $b(b[f])
                        } else {
                            if ("datastale" === b)
                                for (f = 0; f < d.length; f++) d[f].status = 4 === d[f].status ? 5 : 1;
                            else {
                                P("transaction at " +
                                    e + " failed: " + b);
                                for (f = 0; f < d.length; f++) d[f].status = 5, d[f].kc = b
                            }
                            b = Zd(a, e);
                            Y(a.H, b, [e])
                        }
                    }, c)
            }
        } else c.lb() && c.w(function(b) {
            de(a, b)
        })
    }

    function Zd(a, b) {
        var c = he(a, b),
            d = c.path(),
            e = fe(a, c);
        W(a.g.la, d, V(a.g.I, d));
        W(a.fb, d, V(a.g.I, d));
        if (0 !== e.length) {
            for (var f = c = V(a.g.la, d), h = [], i = 0; i < e.length; i++) {
                var m = La(d, e[i].path),
                    n = o,
                    p;
                z(m !== l, "rerunTransactionsUnderNode_: relativePath should not be null.");
                if (5 === e[i].status) n = k, p = e[i].kc;
                else if (1 === e[i].status)
                    if (25 <= e[i].kd) n = k, p = "maxretry";
                    else {
                        var q = e[i].update(c.P(m).U());
                        u(q) ? (za("transaction failed: Data returned ", q), q = S(q), c = c.xa(m, q), e[i].mc && (f = f.xa(m, q))) : (n = k, p = "nodata")
                    }
                n && (e[i].status =
                    3, setTimeout(e[i].jc, 0), e[i].C && (n = new J(a, e[i].path), m = new T(c.P(m), n), "nodata" === p ? h.push(w(e[i].C, l, l, o, m)) : h.push(w(e[i].C, l, Error(p), o, m))))
            }
            p = V(a.g.I, d).j();
            c = c.Ea(p);
            f = f.Ea(p);
            W(a.fb, d, c);
            W(a.g.la, d, f);
            ee(a, a.eb);
            for (i = 0; i < h.length; i++) $b(h[i]);
            de(a)
        }
        return d
    }

    function he(a, b) {
        for (var c, d = a.eb;
            (c = F(b)) !== l && d.k() === l;) d = L(d, c), b = Ka(b);
        return d
    }

    function fe(a, b) {
        var c = [];
        ie(a, b, c);
        c.sort(function(a, b) {
            return a.ed - b.ed
        });
        return c
    }

    function ie(a, b, c) {
        var d = b.k();
        if (d !== l)
            for (var e = 0; e < d.length; e++) c.push(d[e]);
        b.w(function(b) {
            ie(a, b, c)
        })
    }

    function ee(a, b) {
        var c = b.k();
        if (c) {
            for (var d = 0, e = 0; e < c.length; e++) 3 !== c[e].status && (c[d] = c[e], d++);
            c.length = d;
            M(b, 0 < c.length ? c : l)
        }
        b.w(function(b) {
            ee(a, b)
        })
    }

    function $d(a, b) {
        var c = he(a, b).path(),
            d = L(a.eb, b);
        Qa(d, function(a) {
            je(a)
        });
        je(d);
        Pa(d, function(a) {
            je(a)
        });
        return c
    }

    function je(a) {
        var b = a.k();
        if (b !== l) {
            for (var c = [], d = -1, e = 0; e < b.length; e++) 4 !== b[e].status && (2 === b[e].status ? (z(d === e - 1, "All SENT items should be at beginning of queue."), d = e, b[e].status = 4, b[e].kc = "set") : (z(1 === b[e].status), b[e].jc(), b[e].C && c.push(w(b[e].C, l, Error("set"), o, l)))); - 1 === d ? M(a, l) : b.length = d + 1;
            for (e = 0; e < c.length; e++) $b(c[e])
        }
    }

    function ge(a, b) {
        var c = new J(a, b);
        return new T(V(a.fb, b), c)
    };

    function ke() {
        this.ab = {}
    }
    da(ke);
    ke.prototype.Va = function() {
        for (var a in this.ab) this.ab[a].Va()
    };
    ke.prototype.interrupt = ke.prototype.Va;
    ke.prototype.Gb = function() {
        for (var a in this.ab) this.ab[a].Gb()
    };
    ke.prototype.resume = ke.prototype.Gb;
    var Z = {
        Ad: function(a) {
            var b = R.prototype.hash;
            R.prototype.hash = a;
            var c = ac.prototype.hash;
            ac.prototype.hash = a;
            return function() {
                R.prototype.hash = b;
                ac.prototype.hash = c
            }
        }
    };
    Z.hijackHash = Z.Ad;
    Z.Ka = function(a) {
        return a.Ka()
    };
    Z.queryIdentifier = Z.Ka;
    Z.Cd = function(a) {
        return a.n.u.fa
    };
    Z.listens = Z.Cd;
    Z.Kd = function(a) {
        return a.n.u.ia
    };
    Z.refConnection = Z.Kd;
    Z.pd = Vc;
    Z.DataConnection = Z.pd;
    Vc.prototype.sendRequest = Vc.prototype.Da;
    Vc.prototype.interrupt = Vc.prototype.Va;
    Z.qd = Nc;
    Z.RealTimeConnection = Z.qd;
    Nc.prototype.sendRequest = Nc.prototype.ld;
    Nc.prototype.close = Nc.prototype.close;
    Z.od = qb;
    Z.ConnectionTarget = Z.od;
    Z.yd = function() {
        Gc = zc = k
    };
    Z.forceLongPolling = Z.yd;
    Z.zd = function() {
        Hc = k
    };
    Z.forceWebSockets = Z.zd;
    Z.Qd = function(a, b) {
        a.n.u.Lc = b
    };
    Z.setSecurityDebugCallback = Z.Qd;
    Z.Nc = function(a, b) {
        a.n.Nc(b)
    };
    Z.stats = Z.Nc;
    Z.Oc = function(a, b) {
        a.n.Oc(b)
    };
    Z.statsIncrementCounter = Z.Oc;
    Z.sc = function(a) {
        return a.n.sc
    };

    function $(a, b, c) {
        this.Eb = a;
        this.R = b;
        this.Ca = c
    }
    $.prototype.cancel = function(a) {
        A("Firebase.onDisconnect().cancel", 0, 1, arguments.length);
        C("Firebase.onDisconnect().cancel", 1, a, k);
        this.Eb.Ec(this.R, a)
    };
    $.prototype.cancel = $.prototype.cancel;
    $.prototype.remove = function(a) {
        A("Firebase.onDisconnect().remove", 0, 1, arguments.length);
        E("Firebase.onDisconnect().remove", this.R);
        C("Firebase.onDisconnect().remove", 1, a, k);
        be(this.Eb, this.R, l, a)
    };
    $.prototype.remove = $.prototype.remove;
    $.prototype.set = function(a, b) {
        A("Firebase.onDisconnect().set", 1, 2, arguments.length);
        E("Firebase.onDisconnect().set", this.R);
        ya("Firebase.onDisconnect().set", a, o);
        C("Firebase.onDisconnect().set", 2, b, k);
        be(this.Eb, this.R, a, b)
    };
    $.prototype.set = $.prototype.set;
    $.prototype.bb = function(a, b, c) {
        A("Firebase.onDisconnect().setWithPriority", 2, 3, arguments.length);
        E("Firebase.onDisconnect().setWithPriority", this.R);
        ya("Firebase.onDisconnect().setWithPriority", a, o);
        Da("Firebase.onDisconnect().setWithPriority", 2, b, o);
        C("Firebase.onDisconnect().setWithPriority", 3, c, k);
        (".length" === this.Ca || ".keys" === this.Ca) && g("Firebase.onDisconnect().setWithPriority failed: " + this.Ca + " is a read-only object.");
        var d = this.Eb,
            e = this.R,
            f = S(a, b);
        cd(d.u, e.toString(), f.U(k), function(a) {
            "ok" ===
            a && hd(d.Q, e, f);
            ae(c, a)
        })
    };
    $.prototype.setWithPriority = $.prototype.bb;
    $.prototype.update = function(a, b) {
        A("Firebase.onDisconnect().update", 1, 2, arguments.length);
        E("Firebase.onDisconnect().update", this.R);
        Ca("Firebase.onDisconnect().update", a);
        C("Firebase.onDisconnect().update", 2, b, k);
        var c = this.Eb,
            d = this.R,
            e = k,
            f;
        for (f in a) e = o;
        if (e) N("onDisconnect().update() called with empty data.  Don't do anything."), ae(b, k);
        else {
            e = c.u;
            f = d.toString();
            var h = function(e) {
                if ("ok" === e)
                    for (var f in a) {
                        var h = S(a[f]);
                        hd(c.Q, d.F(f), h)
                    }
                ae(b, e)
            };
            e.V ? dd(e, "om", f, a, h) : e.vb.push({
                Jc: f,
                action: "om",
                data: a,
                C: h
            })
        }
    };
    $.prototype.update = $.prototype.update;
    var le, me = 0,
        ne = [];
    le = function(a) {
        var b = a === me;
        me = a;
        for (var c = Array(8), d = 7; 0 <= d; d--) c[d] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(a % 64), a = Math.floor(a / 64);
        z(0 === a);
        a = c.join("");
        if (b) {
            for (d = 11; 0 <= d && 63 === ne[d]; d--) ne[d] = 0;
            ne[d]++
        } else
            for (d = 0; 12 > d; d++) ne[d] = Math.floor(64 * Math.random());
        for (d = 0; 12 > d; d++) a += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(ne[d]);
        z(20 === a.length, "NextPushId: Length should be 20.");
        return a
    };

    function J() {
        var a, b, c;
        if (arguments[0] instanceof Vd) c = arguments[0], a = arguments[1];
        else {
            A("new Firebase", 1, 2, arguments.length);
            var d = arguments[0];
            b = a = "";
            var e = k,
                f = "";
            if (v(d)) {
                var h = d.indexOf("//");
                if (0 <= h) var i = d.substring(0, h - 1),
                    d = d.substring(h + 2);
                h = d.indexOf("/"); - 1 === h && (h = d.length);
                a = d.substring(0, h);
                var d = d.substring(h + 1),
                    m = a.split(".");
                if (3 == m.length) {
                    h = m[2].indexOf(":");
                    e = 0 <= h ? "https" === i : k;
                    if ("firebase" === m[1]) Qb(a + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
                    else {
                        b = m[0];
                        f = "";
                        d = ("/" + d).split("/");
                        for (i = 0; i < d.length; i++)
                            if (0 < d[i].length) {
                                h = d[i];
                                try {
                                    h = decodeURIComponent(h.replace(/\+/g, " "))
                                } catch (n) {}
                                f += "/" + h
                            }
                    }
                    b = b.toLowerCase()
                } else b = l
            }
            e || "undefined" !== typeof window && (window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:")) && P("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
            a = new qb(a, e, b);
            b = new K(f);
            e = b.toString();
            if (!(d = !v(a.host)))
                if (!(d = 0 === a.host.length))
                    if (!(d = !xa(a.sb)))
                        if (d =
                            0 !== e.length) e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), d = !(v(e) && 0 !== e.length && !wa.test(e));
            d && g(Error(B("new Firebase", 1, o) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'));
            arguments[1] ? arguments[1] instanceof ke ? c = arguments[1] : g(Error("Expected a valid Firebase.Context for second argument to new Firebase()")) : c = ke.xc();
            e = a.toString();
            d = ua(c.ab, e);
            d || (d = new Vd(a), c.ab[e] = d);
            c = d;
            a = b
        }
        H.call(this, c, a)
    }
    ka(J, H);
    var oe = J,
        pe = ["Firebase"],
        qe = ba;
    !(pe[0] in qe) && qe.execScript && qe.execScript("var " + pe[0]);
    for (var re; pe.length && (re = pe.shift());)!pe.length && u(oe) ? qe[re] = oe : qe = qe[re] ? qe[re] : qe[re] = {};
    J.prototype.name = function() {
        A("Firebase.name", 0, 0, arguments.length);
        return this.path.f() ? l : this.path.Z < this.path.m.length ? this.path.m[this.path.m.length - 1] : l
    };
    J.prototype.name = J.prototype.name;
    J.prototype.F = function(a) {
        A("Firebase.child", 1, 1, arguments.length);
        if (ga(a)) a = String(a);
        else if (!(a instanceof K))
            if (F(this.path) === l) {
                var b = a;
                b && (b = b.replace(/^\/*\.info(\/|$)/, "/"));
                Ga("Firebase.child", b)
            } else Ga("Firebase.child", a);
        return new J(this.n, this.path.F(a))
    };
    J.prototype.child = J.prototype.F;
    J.prototype.parent = function() {
        A("Firebase.parent", 0, 0, arguments.length);
        var a = this.path.parent();
        return a === l ? l : new J(this.n, a)
    };
    J.prototype.parent = J.prototype.parent;
    J.prototype.root = function() {
        A("Firebase.ref", 0, 0, arguments.length);
        for (var a = this; a.parent() !== l;) a = a.parent();
        return a
    };
    J.prototype.root = J.prototype.root;
    J.prototype.toString = function() {
        A("Firebase.toString", 0, 0, arguments.length);
        var a;
        if (this.parent() === l) a = this.n.toString();
        else {
            a = this.parent().toString() + "/";
            var b = this.name();
            a += encodeURIComponent(String(b))
        }
        return a
    };
    J.prototype.toString = J.prototype.toString;
    J.prototype.set = function(a, b) {
        A("Firebase.set", 1, 2, arguments.length);
        E("Firebase.set", this.path);
        ya("Firebase.set", a, o);
        C("Firebase.set", 2, b, k);
        return this.n.bb(this.path, a, l, b)
    };
    J.prototype.set = J.prototype.set;
    J.prototype.update = function(a, b) {
        A("Firebase.update", 1, 2, arguments.length);
        E("Firebase.update", this.path);
        Ca("Firebase.update", a);
        C("Firebase.update", 2, b, k);
        return this.n.update(this.path, a, b)
    };
    J.prototype.update = J.prototype.update;
    J.prototype.bb = function(a, b, c) {
        A("Firebase.setWithPriority", 2, 3, arguments.length);
        E("Firebase.setWithPriority", this.path);
        ya("Firebase.setWithPriority", a, o);
        Da("Firebase.setWithPriority", 2, b, o);
        C("Firebase.setWithPriority", 3, c, k);
        (".length" === this.name() || ".keys" === this.name()) && g("Firebase.setWithPriority failed: " + this.name() + " is a read-only object.");
        return this.n.bb(this.path, a, b, c)
    };
    J.prototype.setWithPriority = J.prototype.bb;
    J.prototype.remove = function(a) {
        A("Firebase.remove", 0, 1, arguments.length);
        E("Firebase.remove", this.path);
        C("Firebase.remove", 1, a, k);
        this.set(l, a)
    };
    J.prototype.remove = J.prototype.remove;
    J.prototype.transaction = function(a, b, c) {
        function d() {}
        A("Firebase.transaction", 1, 3, arguments.length);
        E("Firebase.transaction", this.path);
        C("Firebase.transaction", 1, a, o);
        C("Firebase.transaction", 2, b, k);
        u(c) && "boolean" != typeof c && g(Error(B("Firebase.transaction", 3, k) + "must be a boolean."));
        (".length" === this.name() || ".keys" === this.name()) && g("Firebase.transaction failed: " + this.name() + " is a read-only object.");
        "undefined" === typeof c && (c = k);
        var e = this.n,
            f = this.path,
            h = c;
        e.e("transaction on " + f);
        var i =
            new J(e, f);
        i.Ya("value", d);
        var h = {
                path: f,
                update: a,
                C: b,
                status: l,
                ed: Hb(),
                mc: h,
                kd: 0,
                jc: function() {
                    i.tb("value", d)
                },
                kc: l
            },
            m = h.update(V(e.fb, f).U());
        if (u(m)) {
            za("transaction failed: Data returned ", m);
            h.status = 1;
            var n = L(e.eb, f),
                p = n.k() || [];
            p.push(h);
            M(n, p);
            n = "object" === typeof m && D(m, ".priority") ? m[".priority"] : V(e.g.I, f).j();
            W(e.fb, f, S(m, n));
            h.mc && (W(e.g.la, f, S(m, n)), Y(e.H, f, [f]));
            de(e)
        } else h.jc(), h.C && (e = ge(e, f), h.C(l, o, e))
    };
    J.prototype.transaction = J.prototype.transaction;
    J.prototype.Mc = function(a, b) {
        A("Firebase.setPriority", 1, 2, arguments.length);
        E("Firebase.setPriority", this.path);
        Da("Firebase.setPriority", 1, a, o);
        C("Firebase.setPriority", 2, b, k);
        this.n.Mc(this.path, a, b)
    };
    J.prototype.setPriority = J.prototype.Mc;
    J.prototype.push = function(a, b) {
        A("Firebase.push", 0, 2, arguments.length);
        E("Firebase.push", this.path);
        ya("Firebase.push", a, k);
        C("Firebase.push", 2, b, k);
        var c = Xd(this.n),
            c = le(c),
            c = this.F(c);
        "undefined" !== typeof a && a !== l && c.set(a, b);
        return c
    };
    J.prototype.push = J.prototype.push;
    J.prototype.ga = function() {
        return new $(this.n, this.path, this.name())
    };
    J.prototype.onDisconnect = J.prototype.ga;
    J.prototype.Ld = function() {
        P("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");
        this.ga().remove();
        ce(this.n)
    };
    J.prototype.removeOnDisconnect = J.prototype.Ld;
    J.prototype.Pd = function(a) {
        P("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");
        this.ga().set(a);
        ce(this.n)
    };
    J.prototype.setOnDisconnect = J.prototype.Pd;
    J.prototype.hb = function(a, b, c) {
        A("Firebase.auth", 1, 3, arguments.length);
        v(a) || g(Error(B("Firebase.auth", 1, o) + "must be a valid credential (a string)."));
        C("Firebase.auth", 2, b, k);
        C("Firebase.auth", 3, b, k);
        this.n.hb(a, b, c)
    };
    J.prototype.auth = J.prototype.hb;
    J.prototype.Kb = function() {
        this.n.Kb()
    };
    J.prototype.unauth = J.prototype.Kb;

    function Nb(a, b) {
        z(!b || a === k || a === o, "Can't turn on custom loggers persistently.");
        a === k ? ("undefined" !== typeof console && ("function" === typeof console.log ? Lb = w(console.log, console) : "object" === typeof console.log && (Lb = function(a) {
            console.log(a)
        })), b && ob.setItem("logging_enabled", "true")) : a ? Lb = a : (Lb = l, ob.removeItem("logging_enabled"))
    }
    J.enableLogging = Nb;
    J.ServerValue = {
        TIMESTAMP: {
            ".sv": "timestamp"
        }
    };
    J.INTERNAL = Z;
    J.Context = ke;
})();