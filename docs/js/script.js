"use strict";
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function (e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
  }

  var f = "3.5.1",
      S = function (e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function (e) {
      var t;

      for (t in e) return !1;

      return !0;
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;

      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);

      return r;
    },
    map: function (e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function (e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function () {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]);

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) b.attrHandle[n[r]] = t;
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) a.unshift(n);

        n = t;

        while (n = n.parentNode) s.unshift(n);

        while (a[r] === s[r]) r++;

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));

        while (r--) e.splice(n[r], 1);
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break;
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);

    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) if (!i[r](e, t, n)) return !1;

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) (a = p[o]) && i.push(f[o] = a);

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;

          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
        }

        c.push(t);
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break;
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) s(c, f, t, n);

            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f);
            }

            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function (e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && S(e).is(n)) break;
      r.push(e);
    }

    return r;
  },
      T = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function (e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function (e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);

    return e;
  }

  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return h(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function (e) {
      return O(e, "nextSibling");
    },
    prev: function (e) {
      return O(e, "previousSibling");
    },
    nextAll: function (e) {
      return h(e, "nextSibling");
    },
    prevAll: function (e) {
      return h(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return T(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function () {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
        }), this;
      },
      has: function (e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function () {
        return s && (s = []), this;
      },
      disable: function () {
        return a = u = [], s = t = "", this;
      },
      disabled: function () {
        return !s;
      },
      lock: function () {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function () {
        return !!a;
      },
      fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function () {
        return f.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function () {
          return i;
        },
        always: function () {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function (e) {
          return a.then(null, e);
        },
        pipe: function () {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function (t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function () {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function (e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) I(i[t], a(t), o.reject);

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function (e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) delete r[t[n]];
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == typeof n ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));

    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);

    return e;
  }

  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

      while (c--) a = a.lastChild;

      S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));

    f.textContent = "", d = 0;

    while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;

      while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));

          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);

        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Ae(this, e, Se), !1;
      },
      trigger: function () {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : b(u.textContent.replace(je, ""), u, l));
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));

    return e;
  }

  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }

        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Re(this, e, !0);
    },
    remove: function (e) {
      return Re(this, e);
    },
    text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function (e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) o[i] = e.style[i], e.style[i] = t[i];

    for (i in r = n.call(e), t) e.style[i] = o[i];

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) if ((e = _e[n] + t) in ze) return e;
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function () {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function (e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) l.tweens[t].run(1);

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ot.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }

        d[r] = v && v[r] || S.style(e, r);
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
      })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);

        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));

        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), pt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;

        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;

        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i,
          a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t);
          }

          return s;
        },
        set: function (e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return h ? p : null;
        },
        setRequestHeader: function (e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function (e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
          return this;
        },
        abort: function (e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();

          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) e = e.firstElementChild;

        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || zt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);

        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) e = e.offsetParent;

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
;

(function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
})(function (i) {
  "use strict";

  var e = window.Slick || {};
  e = function () {
    function e(e, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    }

    var t = 0;
    return e;
  }(), e.prototype.activateADA = function () {
    var i = this;
    i.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function (i) {
        i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function () {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this,
        o = t.getNavTarget();
    null !== o && "object" == typeof o && o.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e,
        t,
        o = this;
    if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var s in e) {
      if (i < e[s]) {
        i = t;
        break;
      }

      t = e[s];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    var e = this;
    e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    t.cssTransitions === !1 ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    e.cssTransitions === !1 ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) {
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay());
      }, 0);
    }).on("blur.slick", "*", function (t) {
      i(this);
      e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay());
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    var i = this;
    return i.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (i.options.infinite === !0) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else if (i.options.centerMode === !0) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    var e = this;
    return e.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o,
        s,
        n = this;
    return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, s) {
      var r, l, d;
      if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1;
    }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    var t = this;
    t.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);

      if (i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), s !== -1) {
        var n = "slick-slide-control" + e.instanceUid + s;
        i("#" + n).length && i(this).attr({
          "aria-describedby": n
        });
      }
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
      tabindex: "0"
    }) : e.$slides.eq(s).removeAttr("tabindex");

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
            n = document.createElement("img");
        n.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), r.$slider.trigger("lazyLoaded", [r, e, t]);
          });
        }, n.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]);
        }, n.src = t;
      });
    }

    var t,
        o,
        s,
        n,
        r = this;
    if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad) for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
    e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    var i = this;
    i.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;

    if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
      var o = i(t.$slides.get(t.currentSlide));
      o.attr("tabindex", 0).focus();
    }
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    var i = this;
    i.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
        for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;

        s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit());
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
      for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;

      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
      var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");

      for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
      a.postSlide(s);
    })) : a.postSlide(s), void a.animateHeight()) : void (t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () {
      a.postSlide(s);
    }) : a.postSlide(s)));
  }, e.prototype.startLoad = function () {
    var i = this;
    i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void (t.dragging = !0));
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i,
        e = this;
    i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;

    return o;
  };
});

; // Проверка поддержки webp браузером и добавление класса webp

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;

class Validator {
  constructor(form) {
    this.$form = form;
    this.initCallbacks();
  }

  validate() {
    this.errors = [];
    let $formFields = $(this.$form).find("._field");
    let hasErrors = false;
    $formFields.each((fieldIndex, field) => {
      const $field = $(field);
      $field.removeClass("error");
      let callbacks = $field.data("call");
      if (!callbacks) return true;
      callbacks = callbacks.replace(/ +/g, " ").trim().split(" ");
      callbacks.forEach(callback => {
        if (!this.callbacks[callback].call(this, $field)) {
          hasErrors = true;
          $field.addClass("error");
        }
      });
    });
    return !hasErrors;
  }

  initCallbacks() {
    this.callbacks = {
      /**
       * @return bool
       */
      phone($field) {
        let $input = $field.find("input");
        const regex = /^((\+7|7|8)+\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2})$/;
        if (regex.test($input.val())) return true;
        this.setMessage($field);
        return false;
      },

      empty($field) {
        let $input = $field.find("input");
        let $textarea = $field.find("textarea");

        if ($input.val() == "" || $textarea.val() == "") {
          this.setMessage($field);
          return false;
        }

        return true;
      },

      selected($field) {
        let $input = $field.find("input");

        if ($input.val() == "") {
          this.setMessage($field);
          return false;
        }

        return true;
      },

      checked($field) {
        let $input = $field.find("input");
        let checker = false;
        $input.each(function () {
          if ($(this).prop("checked")) checker = true;
        });
        if (checker) return true;
        this.setMessage($field);
        return false;
      }

    };
  }

  setMessage($field) {
    const $errorMsg = $field.find("._error-msg");
    $errorMsg.html($field.data("msg"));
    $errorMsg.slideDown();
  }

}

;
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/

!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function (a) {
  var b,
      c = navigator.userAgent,
      d = /iphone/i.test(c),
      e = /chrome/i.test(c),
      f = /android/i.test(c);
  a.mask = {
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, a.fn.extend({
    caret: function (a, b) {
      var c;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
      })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
        begin: a,
        end: b
      });
    },
    unmask: function () {
      return this.trigger("unmask");
    },
    mask: function (c, g) {
      var h, i, j, k, l, m, n, o;

      if (!c && this.length > 0) {
        h = a(this[0]);
        var p = h.data(a.mask.dataName);
        return p ? p() : void 0;
      }

      return g = a.extend({
        autoclear: a.mask.autoclear,
        placeholder: a.mask.placeholder,
        completed: null
      }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
        "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
      }), this.trigger("unmask").each(function () {
        function h() {
          if (g.completed) {
            for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return;

            g.completed.call(B);
          }
        }

        function p(a) {
          return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
        }

        function q(a) {
          for (; ++a < n && !j[a];);

          return a;
        }

        function r(a) {
          for (; --a >= 0 && !j[a];);

          return a;
        }

        function s(a, b) {
          var c, d;

          if (!(0 > a)) {
            for (c = a, d = q(b); n > c; c++) if (j[c]) {
              if (!(n > d && j[c].test(C[d]))) break;
              C[c] = C[d], C[d] = p(d), d = q(d);
            }

            z(), B.caret(Math.max(l, a));
          }
        }

        function t(a) {
          var b, c, d, e;

          for (b = a, c = p(a); n > b; b++) if (j[b]) {
            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
            c = e;
          }
        }

        function u() {
          var a = B.val(),
              b = B.caret();

          if (o && o.length && o.length > a.length) {
            for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;

            if (0 === b.begin) for (; b.begin < l && !j[b.begin];) b.begin++;
            B.caret(b.begin, b.begin);
          } else {
            for (A(!0); b.begin < n && !j[b.begin];) b.begin++;

            B.caret(b.begin, b.begin);
          }

          h();
        }

        function v() {
          A(), B.val() != E && B.change();
        }

        function w(a) {
          if (!B.prop("readonly")) {
            var b,
                c,
                e,
                f = a.which || a.keyCode;
            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
          }
        }

        function x(b) {
          if (!B.prop("readonly")) {
            var c,
                d,
                e,
                g = b.which || b.keyCode,
                i = B.caret();

            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
              if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                if (t(c), C[c] = d, z(), e = q(c), f) {
                  var k = function () {
                    a.proxy(a.fn.caret, B, e)();
                  };

                  setTimeout(k, 0);
                } else B.caret(e);

                i.begin <= m && h();
              }

              b.preventDefault();
            }
          }
        }

        function y(a, b) {
          var c;

          for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c));
        }

        function z() {
          B.val(C.join(""));
        }

        function A(a) {
          var b,
              c,
              d,
              e = B.val(),
              f = -1;

          for (b = 0, d = 0; n > b; b++) if (j[b]) {
            for (C[b] = p(b); d++ < e.length;) if (c = e.charAt(d - 1), j[b].test(c)) {
              C[b] = c, f = b;
              break;
            }

            if (d > e.length) {
              y(b + 1, n);
              break;
            }
          } else C[b] === e.charAt(d) && d++, k > b && (f = b);

          return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
        }

        var B = a(this),
            C = a.map(c.split(""), function (a, b) {
          return "?" != a ? i[a] ? p(b) : a : void 0;
        }),
            D = C.join(""),
            E = B.val();
        B.data(a.mask.dataName, function () {
          return a.map(C, function (a, b) {
            return j[b] && a != p(b) ? a : null;
          }).join("");
        }), B.one("unmask", function () {
          B.off(".mask").removeData(a.mask.dataName);
        }).on("focus.mask", function () {
          if (!B.prop("readonly")) {
            clearTimeout(b);
            var a;
            E = B.val(), a = A(), b = setTimeout(function () {
              B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
            }, 10);
          }
        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
          B.prop("readonly") || setTimeout(function () {
            var a = A(!0);
            B.caret(a), h();
          }, 0);
        }), e && f && B.off("input.mask").on("input.mask", u), A();
      });
    }
  });
});
;
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AirDatepicker = t() : e.AirDatepicker = t();
}(this, function () {
  return function () {
    "use strict";

    var e = {
      d: function (t, i) {
        for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
          enumerable: !0,
          get: i[s]
        });
      },
      o: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
    },
        t = {};
    e.d(t, {
      default: function () {
        return K;
      }
    });
    var i = {
      days: "days",
      months: "months",
      years: "years",
      day: "day",
      month: "month",
      year: "year",
      eventChangeViewDate: "changeViewDate",
      eventChangeCurrentView: "changeCurrentView",
      eventChangeFocusDate: "changeFocusDate",
      eventChangeSelectedDate: "changeSelectedDate",
      eventChangeTime: "changeTime",
      eventChangeLastSelectedDate: "changeLastSelectedDate",
      actionSelectDate: "selectDate",
      actionUnselectDate: "unselectDate",
      cssClassWeekend: "-weekend-"
    },
        s = {
      classes: "",
      inline: !1,
      locale: {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        dateFormat: "dd.MM.yyyy",
        timeFormat: "HH:mm",
        firstDay: 1
      },
      startDate: new Date(),
      firstDay: "",
      weekends: [6, 0],
      dateFormat: "",
      altField: "",
      altFieldDateFormat: "T",
      toggleSelected: !0,
      keyboardNav: !0,
      selectedDates: !1,
      container: "",
      isMobile: !1,
      visible: !1,
      position: "bottom left",
      offset: 12,
      view: i.days,
      minView: i.days,
      showOtherMonths: !0,
      selectOtherMonths: !0,
      moveToOtherMonthsOnSelect: !0,
      showOtherYears: !0,
      selectOtherYears: !0,
      moveToOtherYearsOnSelect: !0,
      minDate: "",
      maxDate: "",
      disableNavWhenOutOfRange: !0,
      multipleDates: !1,
      multipleDatesSeparator: ", ",
      range: !1,
      dynamicRange: !0,
      buttons: !1,
      monthsField: "monthsShort",
      showEvent: "focus",
      autoClose: !1,
      prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
      nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
      navTitles: {
        days: "MMMM, <i>yyyy</i>",
        months: "yyyy",
        years: "yyyy1 - yyyy2"
      },
      timepicker: !1,
      onlyTimepicker: !1,
      dateTimeSeparator: " ",
      timeFormat: "",
      minHours: 0,
      maxHours: 24,
      minMinutes: 0,
      maxMinutes: 59,
      hoursStep: 1,
      minutesStep: 1,
      onSelect: !1,
      onChangeViewDate: !1,
      onChangeView: !1,
      onRenderCell: !1,
      onShow: !1,
      onHide: !1
    };

    function a(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      return "string" == typeof e ? t.querySelector(e) : e;
    }

    function n() {
      let {
        tagName: e = "div",
        className: t = "",
        innerHtml: i = "",
        id: s = "",
        attrs: a = {}
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = document.createElement(e);
      if (t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), a) for (let e in a) n.setAttribute(e, a[e]);
      return n;
    }

    function r(e, t) {
      for (let [i, s] of Object.entries(t)) e.setAttribute(i, s);

      return e;
    }

    function h(e) {
      return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    }

    function o(e) {
      let t = e.getHours(),
          i = t % 12 == 0 ? 12 : t % 12;
      return {
        year: e.getFullYear(),
        month: e.getMonth(),
        fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
        date: e.getDate(),
        fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
        day: e.getDay(),
        hours: t,
        fullHours: l(t),
        hours12: i,
        fullHours12: l(i),
        minutes: e.getMinutes(),
        fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
      };
    }

    function l(e) {
      return e < 10 ? "0" + e : e;
    }

    function d(e) {
      let t = 10 * Math.floor(e.getFullYear() / 10);
      return [t, t + 9];
    }

    function c() {
      let e = [];

      for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];

      return i.forEach(t => {
        if ("object" == typeof t) for (let i in t) t[i] && e.push(i);else t && e.push(t);
      }), e.join(" ");
    }

    function u(e, t) {
      let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
      if (!e || !t) return !1;
      let a = o(e),
          n = o(t),
          r = {
        [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
        [i.months]: a.month === n.month && a.year === n.year,
        [i.years]: a.year === n.year
      };
      return r[s];
    }

    function p(e, t, i) {
      let s = g(e, !1).getTime(),
          a = g(t, !1).getTime();
      return i ? s >= a : s > a;
    }

    function m(e, t) {
      return !p(e, t, !0);
    }

    function g(e) {
      let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = new Date(e.getTime());
      return "boolean" != typeof t || t || D(i), i;
    }

    function D(e) {
      return e.setHours(0, 0, 0, 0), e;
    }

    function v(e, t, i) {
      e.length ? e.forEach(e => {
        e.addEventListener(t, i);
      }) : e.addEventListener(t, i);
    }

    function y(e, t) {
      return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
    }

    function f(e, t, i) {
      return e > i ? i : e < t ? t : e;
    }

    function w(e) {
      for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];

      return i.filter(e => e).forEach(t => {
        for (let [i, s] of Object.entries(t)) if (void 0 !== s && "[object Object]" === s.toString()) {
          let t = void 0 !== e[i] ? e[i].toString() : void 0,
              a = s.toString(),
              n = Array.isArray(s) ? [] : {};
          e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
        } else e[i] = s;
      }), e;
    }

    function b(e) {
      let t = e;
      return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), t = !1), t;
    }

    function k(e) {
      let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
      return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
    }

    function C(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    class _ {
      constructor() {
        let {
          type: e,
          date: t,
          dp: i,
          opts: s,
          body: a
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        C(this, "focus", () => {
          this.$cell.classList.add("-focus-"), this.focused = !0;
        }), C(this, "removeFocus", () => {
          this.$cell.classList.remove("-focus-"), this.focused = !1;
        }), C(this, "select", () => {
          this.$cell.classList.add("-selected-"), this.selected = !0;
        }), C(this, "removeSelect", () => {
          this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
        }), C(this, "onChangeSelectedDate", () => {
          this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
        }), C(this, "onChangeFocusDate", e => {
          if (!e) return void (this.focused && this.removeFocus());
          let t = u(e, this.date, this.type);
          t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
        }), C(this, "render", () => (this.$cell.innerHTML = this._getHtml(), this.$cell.adpCell = this, this.$cell)), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
      }

      init() {
        let {
          range: e,
          onRenderCell: t
        } = this.opts;
        t && (this.customData = t({
          date: this.date,
          cellType: this.singleType,
          datepicker: this.dp
        })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
      }

      _bindDatepickerEvents() {
        this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
      }

      unbindDatepickerEvents() {
        this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
      }

      _createElement() {
        let {
          year: e,
          month: t,
          date: i
        } = o(this.date);
        this.$cell = n({
          className: this._getClassName(),
          attrs: {
            "data-year": e,
            "data-month": t,
            "data-date": i
          }
        });
      }

      _getClassName() {
        var e, t;

        let s = new Date(),
            {
          selectOtherMonths: a,
          selectOtherYears: n
        } = this.opts,
            {
          minDate: r,
          maxDate: h
        } = this.dp,
            {
          day: l
        } = o(this.date),
            d = this._isOutOfMinMaxRange(),
            p = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled,
            m = c("air-datepicker-cell", "-".concat(this.singleType, "-"), {
          "-current-": u(s, this.date, this.type),
          "-min-date-": r && u(r, this.date, this.type),
          "-max-date-": h && u(h, this.date, this.type)
        }),
            g = "";

        switch (this.type) {
          case i.days:
            g = c({
              "-weekend-": this.dp.isWeekend(l),
              "-other-month-": this.isOtherMonth,
              "-disabled-": this.isOtherMonth && !a || d || p
            });
            break;

          case i.months:
            g = c({
              "-disabled-": d || p
            });
            break;

          case i.years:
            g = c({
              "-other-decade-": this.isOtherDecade,
              "-disabled-": d || this.isOtherDecade && !n || p
            });
        }

        return c(m, g, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
      }

      _getHtml() {
        var e;
        let {
          year: t,
          month: s,
          date: a
        } = o(this.date),
            {
          showOtherMonths: n,
          showOtherYears: r
        } = this.opts;
        if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;

        switch (this.type) {
          case i.days:
            return !n && this.isOtherMonth ? "" : a;

          case i.months:
            return this.dp.locale[this.opts.monthsField][s];

          case i.years:
            return !r && this.isOtherDecade ? "" : t;
        }
      }

      _isOutOfMinMaxRange() {
        let {
          minDate: e,
          maxDate: t
        } = this.dp,
            {
          type: s,
          date: a
        } = this,
            {
          month: n,
          year: r,
          date: h
        } = o(a),
            l = s === i.days,
            d = s === i.years,
            c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()),
            u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
        return e && t ? m(c, e) || p(u, t) : e ? m(c, e) : t ? p(u, t) : void 0;
      }

      destroy() {
        this.unbindDatepickerEvents();
      }

      _handleRangeStatus() {
        let {
          rangeDateFrom: e,
          rangeDateTo: t
        } = this.dp,
            i = c({
          "-in-range-": e && t && (s = this.date, a = e, n = t, p(s, a) && m(s, n)),
          "-range-from-": e && u(this.date, e, this.type),
          "-range-to-": t && u(this.date, t, this.type)
        });
        var s, a, n;
        this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i && this.$cell.classList.add(...i.split(" "));
      }

      _handleSelectedStatus() {
        let e = this.dp._checkIfDateIsSelected(this.date, this.type);

        e ? this.select() : !e && this.selected && this.removeSelect();
      }

      _handleInitialFocusStatus() {
        u(this.dp.focusDate, this.date, this.type) && this.focus();
      }

      get isDisabled() {
        return this.$cell.matches(".-disabled-");
      }

      get isOtherMonth() {
        return this.dp.isOtherMonth(this.date);
      }

      get isOtherDecade() {
        return this.dp.isOtherDecade(this.date);
      }

    }

    function M(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    let $ = {
      [i.days]: '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i.days, '-"></div>'),
      [i.months]: '<div class="air-datepicker-body--cells -'.concat(i.months, '-"></div>'),
      [i.years]: '<div class="air-datepicker-body--cells -'.concat(i.years, '-"></div>')
    };

    class S {
      constructor(e) {
        let {
          dp: t,
          type: s,
          opts: a
        } = e;
        M(this, "handleClick", e => {
          let t = y(e.target, ".air-datepicker-cell");
          if (!t) return;
          let i = t.adpCell;
          if (i.isDisabled) return;
          if (!this.dp.isMinViewReached) return void this.dp.down();

          let s = this.dp._checkIfDateIsSelected(i.date, i.type);

          s ? this.dp._handleAlreadySelectedDates(s, i.date) : this.dp.selectDate(i.date);
        }), M(this, "onChangeCurrentView", e => {
          e !== this.type ? this.hide() : (this.show(), this.render());
        }), M(this, "onMouseOverCell", e => {
          let t = y(e.target, ".air-datepicker-cell");
          this.dp.setFocusDate(!!t && t.adpCell.date);
        }), M(this, "onMouseOutCell", () => {
          this.dp.setFocusDate(!1);
        }), M(this, "onClickCell", e => {
          this.handleClick(e);
        }), M(this, "onMouseDown", e => {
          this.pressed = !0;
          let t = y(e.target, ".air-datepicker-cell"),
              i = t && t.adpCell;
          u(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), u(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
        }), M(this, "onMouseMove", e => {
          if (!this.pressed || !this.dp.isMinViewReached) return;
          e.preventDefault();
          let t = y(e.target, ".air-datepicker-cell"),
              i = t && t.adpCell,
              {
            selectedDates: s,
            rangeDateTo: a,
            rangeDateFrom: n
          } = this.dp;
          if (!i || i.isDisabled) return;
          let {
            date: r
          } = i;

          if (2 === s.length) {
            if (this.rangeFromFocused && !p(r, a)) {
              let {
                hours: e,
                minutes: t
              } = o(n);
              r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
            }

            if (this.rangeToFocused && !m(r, n)) {
              let {
                hours: e,
                minutes: t
              } = o(a);
              r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
            }
          }
        }), M(this, "onMouseUp", () => {
          this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
        }), M(this, "onChangeViewDate", (e, t) => {
          if (!this.isVisible) return;
          let s = d(e),
              a = d(t);

          switch (this.dp.currentView) {
            case i.days:
              if (u(e, t, i.months)) return;
              break;

            case i.months:
              if (u(e, t, i.years)) return;
              break;

            case i.years:
              if (s[0] === a[0] && s[1] === a[1]) return;
          }

          this.render();
        }), M(this, "render", () => {
          this.destroyCells(), this._generateCells(), this.cells.forEach(e => {
            this.$cells.appendChild(e.render());
          });
        }), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
      }

      init() {
        this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
      }

      _bindEvents() {
        let {
          range: e,
          dynamicRange: t
        } = this.opts;
        v(this.$el, "mouseover", this.onMouseOverCell), v(this.$el, "mouseout", this.onMouseOutCell), v(this.$el, "click", this.onClickCell), e && t && (v(this.$el, "mousedown", this.onMouseDown), v(this.$el, "mousemove", this.onMouseMove), v(window.document, "mouseup", this.onMouseUp));
      }

      _bindDatepickerEvents() {
        this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
      }

      _buildBaseHtml() {
        this.$el = n({
          className: "air-datepicker-body -".concat(this.type, "-"),
          innerHtml: $[this.type]
        }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
      }

      _getDayNamesHtml() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay,
            t = "",
            s = this.dp.isWeekend,
            a = e,
            n = 0;

        for (; n < 7;) {
          let e = a % 7,
              r = c("air-datepicker-body--day-name", {
            [i.cssClassWeekend]: s(e)
          }),
              h = this.dp.locale.daysMin[e];
          t += '<div class="'.concat(r, '">').concat(h, "</div>"), n++, a++;
        }

        return t;
      }

      _getDaysCells() {
        let {
          viewDate: e,
          locale: {
            firstDay: t
          }
        } = this.dp,
            i = h(e),
            {
          year: s,
          month: a
        } = o(e),
            n = new Date(s, a, 1),
            r = new Date(s, a, i),
            l = n.getDay() - t,
            d = 6 - r.getDay() + t;
        l = l < 0 ? l + 7 : l, d = d > 6 ? d - 7 : d;

        let c = function (e, t) {
          let {
            year: i,
            month: s,
            date: a
          } = o(e);
          return new Date(i, s, a - t);
        }(n, l),
            u = i + l + d,
            p = c.getDate(),
            {
          year: m,
          month: g
        } = o(c),
            D = 0;

        for (; D < u;) {
          let e = new Date(m, g, p + D);
          this._generateCell(e), D++;
        }
      }

      _generateCell(e) {
        let {
          type: t,
          dp: i,
          opts: s
        } = this,
            a = new _({
          type: t,
          dp: i,
          opts: s,
          date: e,
          body: this
        });
        return this.cells.push(a), a;
      }

      _generateDayCells() {
        this._getDaysCells();
      }

      _generateMonthCells() {
        let {
          year: e
        } = this.dp.parsedViewDate,
            t = 0;

        for (; t < 12;) this.cells.push(this._generateCell(new Date(e, t))), t++;
      }

      _generateYearCells() {
        let e = d(this.dp.viewDate),
            t = e[0] - 1,
            i = e[1] + 1,
            s = t;

        for (; s <= i;) this.cells.push(this._generateCell(new Date(s, 0))), s++;
      }

      renderDayNames() {
        this.$names.innerHTML = this._getDayNamesHtml();
      }

      _generateCells() {
        switch (this.type) {
          case i.days:
            this._generateDayCells();

            break;

          case i.months:
            this._generateMonthCells();

            break;

          case i.years:
            this._generateYearCells();

        }
      }

      show() {
        this.isVisible = !0, this.$el.classList.remove("-hidden-");
      }

      hide() {
        this.isVisible = !1, this.$el.classList.add("-hidden-");
      }

      destroyCells() {
        this.cells.forEach(e => e.destroy()), this.cells = [], this.$cells.innerHTML = "";
      }

      destroy() {
        this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
      }

    }

    function T(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    class F {
      constructor(e) {
        let {
          dp: t,
          opts: i
        } = e;
        T(this, "onClickNav", e => {
          let t = y(e.target, ".air-datepicker-nav--action");
          if (!t) return;
          let i = t.dataset.action;
          this.dp[i]();
        }), T(this, "onChangeViewDate", () => {
          this.render(), this._resetNavStatus(), this.handleNavStatus();
        }), T(this, "onChangeCurrentView", () => {
          this.render(), this._resetNavStatus(), this.handleNavStatus();
        }), T(this, "onClickNavTitle", () => {
          this.dp.isFinalView || this.dp.up();
        }), T(this, "update", () => {
          let {
            prevHtml: e,
            nextHtml: t
          } = this.opts;
          this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), this.handleNavStatus();
        }), T(this, "renderDelay", () => {
          setTimeout(this.render);
        }), T(this, "render", () => {
          this.$title.innerHTML = this._getTitle(), function (e, t) {
            for (let i in t) t[i] ? e.classList.add(i) : e.classList.remove(i);
          }(this.$title, {
            "-disabled-": this.dp.isFinalView
          });
        }), this.dp = t, this.opts = i, this.init();
      }

      init() {
        this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
      }

      _defineDOM() {
        this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
      }

      _bindEvents() {
        this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
      }

      _bindDatepickerEvents() {
        this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
      }

      destroy() {
        this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
      }

      _createElement() {
        this.$el = n({
          tagName: "nav",
          className: "air-datepicker-nav"
        });
      }

      _getTitle() {
        let {
          dp: e,
          opts: t
        } = this,
            i = t.navTitles[e.currentView];
        return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
      }

      handleNavStatus() {
        let {
          disableNavWhenOutOfRange: e
        } = this.opts,
            {
          minDate: t,
          maxDate: s
        } = this.dp;
        if (!t && !s || !e) return;
        let {
          year: a,
          month: n
        } = this.dp.parsedViewDate,
            r = !!t && o(t),
            h = !!s && o(s);

        switch (this.dp.currentView) {
          case i.days:
            t && r.month >= n && r.year >= a && this._disableNav("prev"), s && h.month <= n && h.year <= a && this._disableNav("next");
            break;

          case i.months:
            t && r.year >= a && this._disableNav("prev"), s && h.year <= a && this._disableNav("next");
            break;

          case i.years:
            {
              let e = d(this.dp.viewDate);
              t && r.year >= e[0] && this._disableNav("prev"), s && h.year <= e[1] && this._disableNav("next");
              break;
            }
        }
      }

      _disableNav(e) {
        a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
      }

      _resetNavStatus() {
        !function (e) {
          for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];

          e.length ? e.forEach(e => {
            e.classList.remove(...i);
          }) : e.classList.remove(...i);
        }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
      }

      _buildBaseHtml() {
        let {
          prevHtml: e,
          nextHtml: t
        } = this.opts;
        this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t, "</div>");
      }

      get isNavIsFunction() {
        let {
          navTitles: e
        } = this.opts;
        return Object.keys(e).find(t => "function" == typeof e[t]);
      }

    }

    var V = {
      today: {
        content: e => e.locale.today,
        onClick: e => e.setViewDate(new Date())
      },
      clear: {
        content: e => e.locale.clear,
        onClick: e => e.clear()
      }
    };

    class H {
      constructor(e) {
        let {
          dp: t,
          opts: i
        } = e;
        this.dp = t, this.opts = i, this.init();
      }

      init() {
        this.createElement(), this.render();
      }

      createElement() {
        this.$el = n({
          className: "air-datepicker-buttons"
        });
      }

      destroy() {
        this.$el.parentNode.removeChild(this.$el);
      }

      clearHtml() {
        return this.$el.innerHTML = "", this;
      }

      generateButtons() {
        let {
          buttons: e
        } = this.opts;
        Array.isArray(e) || (e = [e]), e.forEach(e => {
          let t = e;
          "string" == typeof e && V[e] && (t = V[e]);
          let i = this.createButton(t);
          t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
        });
      }

      attachEventToButton(e, t) {
        e.addEventListener("click", () => {
          t(this.dp);
        });
      }

      createButton(e) {
        let {
          content: t,
          className: i,
          tagName: s = "button",
          attrs: a = {}
        } = e,
            r = "function" == typeof t ? t(this.dp) : t;
        return n({
          tagName: s,
          innerHtml: "<span tabindex='-1'>".concat(r, "</span>"),
          className: c("air-datepicker-button", i),
          attrs: a
        });
      }

      render() {
        this.generateButtons();
      }

    }

    function x(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    class L {
      constructor() {
        let {
          opts: e,
          dp: t
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        x(this, "toggleTimepickerIsActive", e => {
          this.dp.timepickerIsActive = e;
        }), x(this, "onChangeSelectedDate", e => {
          let {
            date: t,
            updateTime: i = !1
          } = e;
          t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
        }), x(this, "onChangeLastSelectedDate", e => {
          e && (this.setTime(e), this.render());
        }), x(this, "onChangeInputRange", e => {
          let t = e.target;
          this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
            hours: this.hours,
            minutes: this.minutes
          });
        }), x(this, "onMouseEnterLeave", e => {
          let t = e.target.getAttribute("name"),
              i = this.$minutesText;
          "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
        }), x(this, "onFocus", () => {
          this.toggleTimepickerIsActive(!0);
        }), x(this, "onBlur", () => {
          this.toggleTimepickerIsActive(!1);
        }), this.opts = e, this.dp = t;
        let {
          timeFormat: s
        } = this.dp.locale;
        s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
      }

      init() {
        this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
      }

      bindDatepickerEvents() {
        this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
      }

      bindDOMEvents() {
        let e = "input";
        navigator.userAgent.match(/trident/gi) && (e = "change"), v(this.$ranges, e, this.onChangeInputRange), v(this.$ranges, "mouseenter", this.onMouseEnterLeave), v(this.$ranges, "mouseleave", this.onMouseEnterLeave), v(this.$ranges, "focus", this.onFocus), v(this.$ranges, "mousedown", this.onFocus), v(this.$ranges, "blur", this.onBlur);
      }

      createElement() {
        this.$el = n({
          className: c("air-datepicker-time", {
            "-am-pm-": this.dp.ampm
          })
        });
      }

      destroy() {
        this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
      }

      buildHtml() {
        let {
          ampm: e,
          hours: t,
          displayHours: i,
          minutes: s,
          minHours: a,
          minMinutes: n,
          maxHours: r,
          maxMinutes: h,
          dayPeriod: o,
          opts: {
            hoursStep: d,
            minutesStep: c
          }
        } = this;
        this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(l(i), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(l(s), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(o, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(a, '" max="').concat(r, '" step="').concat(d, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(s, '" min="').concat(n, '" max="').concat(h, '" step="').concat(c, '"/>') + "   </div></div>";
      }

      defineDOM() {
        let e = e => a(e, this.$el);

        this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
      }

      setTime(e) {
        this.setMinMaxTime(e), this.setCurrentTime(e);
      }

      addTimeToDate(e) {
        e && (e.setHours(this.hours), e.setMinutes(this.minutes));
      }

      setMinMaxTime(e) {
        if (this.setMinMaxTimeFromOptions(), e) {
          let {
            minDate: t,
            maxDate: i
          } = this.dp;
          t && u(e, t) && this.setMinTimeFromMinDate(t), i && u(e, i) && this.setMaxTimeFromMaxDate(i);
        }
      }

      setCurrentTime(e) {
        let {
          hours: t,
          minutes: i
        } = e ? o(e) : this;
        this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
      }

      setMinMaxTimeFromOptions() {
        let {
          minHours: e,
          minMinutes: t,
          maxHours: i,
          maxMinutes: s
        } = this.opts;
        this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), this.maxMinutes = f(s, 0, 59);
      }

      setMinTimeFromMinDate(e) {
        let {
          lastSelectedDate: t
        } = this.dp;
        this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
      }

      setMaxTimeFromMaxDate(e) {
        let {
          lastSelectedDate: t
        } = this.dp;
        this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
      }

      getDayPeriod(e, t) {
        let i = e,
            s = Number(e);
        e instanceof Date && (i = o(e), s = Number(i.hours));
        let a = "am";

        if (t || this.ampm) {
          switch (!0) {
            case 12 === s:
            case s > 11:
              a = "pm";
          }

          s = s % 12 == 0 ? 12 : s % 12;
        }

        return {
          hours: s,
          dayPeriod: a
        };
      }

      updateSliders() {
        r(this.$hours, {
          min: this.minHours,
          max: this.maxHours
        }).value = this.hours, r(this.$minutes, {
          min: this.minMinutes,
          max: this.maxMinutes
        }).value = this.minutes;
      }

      updateText() {
        this.$hoursText.innerHTML = l(this.displayHours), this.$minutesText.innerHTML = l(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
      }

      set hours(e) {
        this._hours = e;
        let {
          hours: t,
          dayPeriod: i
        } = this.getDayPeriod(e);
        this.displayHours = t, this.dayPeriod = i;
      }

      get hours() {
        return this._hours;
      }

      render() {
        this.updateSliders(), this.updateText();
      }

    }

    function O(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    class E {
      constructor(e) {
        let {
          dp: t,
          opts: i
        } = e;
        O(this, "pressedKeys", new Set()), O(this, "hotKeys", new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], e => e.month++], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], e => e.month--], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], e => e.year++], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], e => e.year--], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], e => e.year += 10], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], e => e.year -= 10], [["Control", "Shift", "ArrowUp"], (e, t) => t.up()]])), O(this, "handleHotKey", e => {
          let t = this.hotKeys.get(e),
              i = o(this.getInitialFocusDate());
          t(i, this.dp);
          let {
            year: s,
            month: a,
            date: n
          } = i,
              r = h(new Date(s, a));
          r < n && (n = r);
          let l = this.dp.getClampedDate(new Date(s, a, n));
          this.dp.setFocusDate(l, {
            viewDateTransition: !0
          });
        }), O(this, "isHotKeyPressed", () => {
          let e = !1,
              t = this.pressedKeys.size,
              i = e => this.pressedKeys.has(e);

          for (let [s] of this.hotKeys) {
            if (e) break;
            if (Array.isArray(s[0])) s.forEach(a => {
              e || t !== a.length || (e = a.every(i) && s);
            });else {
              if (t !== s.length) continue;
              e = s.every(i) && s;
            }
          }

          return e;
        }), O(this, "isArrow", e => e >= 37 && e <= 40), O(this, "onKeyDown", e => {
          let {
            key: t,
            which: i
          } = e,
              {
            dp: s,
            dp: {
              focusDate: a
            },
            opts: n
          } = this;
          this.registerKey(t);
          let r = this.isHotKeyPressed();
          if (r) return e.preventDefault(), void this.handleHotKey(r);
          if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);

          if ("Enter" === t) {
            if (s.currentView !== n.minView) return void s.down();

            if (a) {
              let e = s._checkIfDateIsSelected(a);

              return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
            }
          }

          "Escape" === t && this.dp.hide();
        }), O(this, "onKeyUp", e => {
          this.removeKey(e.key);
        }), this.dp = t, this.opts = i, this.init();
      }

      init() {
        this.bindKeyboardEvents();
      }

      bindKeyboardEvents() {
        let {
          $el: e
        } = this.dp;
        e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
      }

      destroy() {
        let {
          $el: e
        } = this.dp;
        e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
      }

      getInitialFocusDate() {
        let {
          focusDate: e,
          currentView: t,
          selectedDates: s,
          parsedViewDate: {
            year: a,
            month: n
          }
        } = this.dp,
            r = e || s[s.length - 1];
        if (!r) switch (t) {
          case i.days:
            r = new Date(a, n, new Date().getDate());
            break;

          case i.months:
            r = new Date(a, n, 1);
            break;

          case i.years:
            r = new Date(a, 0, 1);
        }
        return r;
      }

      focusNextCell(e) {
        let t = this.getInitialFocusDate(),
            {
          currentView: s
        } = this.dp,
            {
          days: a,
          months: n,
          years: r
        } = i,
            h = o(t),
            l = h.year,
            d = h.month,
            c = h.date;

        switch (e) {
          case "ArrowLeft":
            s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
            break;

          case "ArrowUp":
            s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
            break;

          case "ArrowRight":
            s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
            break;

          case "ArrowDown":
            s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
        }

        let u = this.dp.getClampedDate(new Date(l, d, c));
        this.dp.setFocusDate(u, {
          viewDateTransition: !0
        });
      }

      registerKey(e) {
        this.pressedKeys.add(e);
      }

      removeKey(e) {
        this.pressedKeys.delete(e);
      }

    }

    let A = {
      on(e, t) {
        this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [t];
      },

      off(e, t) {
        this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter(e => e !== t));
      },

      removeAllEvents() {
        this.__events = {};
      },

      trigger(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];

        this.__events && this.__events[e] && this.__events[e].forEach(e => {
          e(...i);
        });
      }

    };

    function N(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }

    let I = "",
        R = "",
        P = "",
        B = !1;

    class K {
      constructor(e, t) {
        var r = this;
        if (N(this, "viewIndexes", [i.days, i.months, i.years]), N(this, "next", () => {
          let {
            year: e,
            month: t
          } = this.parsedViewDate;

          switch (this.currentView) {
            case i.days:
              this.setViewDate(new Date(e, t + 1, 1));
              break;

            case i.months:
              this.setViewDate(new Date(e + 1, t, 1));
              break;

            case i.years:
              this.setViewDate(new Date(e + 10, 0, 1));
          }
        }), N(this, "prev", () => {
          let {
            year: e,
            month: t
          } = this.parsedViewDate;

          switch (this.currentView) {
            case i.days:
              this.setViewDate(new Date(e, t - 1, 1));
              break;

            case i.months:
              this.setViewDate(new Date(e - 1, t, 1));
              break;

            case i.years:
              this.setViewDate(new Date(e - 10, 0, 1));
          }
        }), N(this, "_finishHide", () => {
          this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
        }), N(this, "setPosition", function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
            $datepicker: r.$datepicker,
            $target: r.$el,
            $pointer: r.$pointer,
            isViewChange: t,
            done: r._finishHide
          }));
          let i,
              s,
              {
            isMobile: a
          } = r.opts,
              n = r.$el.getBoundingClientRect(),
              h = r.$el.getBoundingClientRect(),
              o = r.$datepicker.offsetParent,
              l = r.$el.offsetParent,
              d = r.$datepicker.getBoundingClientRect(),
              c = e.split(" "),
              u = window.scrollY,
              p = window.scrollX,
              m = r.opts.offset,
              g = c[0],
              D = c[1];
          if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";else {
            if (o === l && o !== document.body && (h = {
              top: r.$el.offsetTop,
              left: r.$el.offsetLeft,
              width: n.width,
              height: r.$el.offsetHeight
            }, u = 0, p = 0), o !== l && o !== document.body) {
              let e = o.getBoundingClientRect();
              h = {
                top: n.top - e.top,
                left: n.left - e.left,
                width: n.width,
                height: n.height
              }, u = 0, p = 0;
            }

            switch (g) {
              case "top":
                i = h.top - d.height - m;
                break;

              case "right":
                s = h.left + h.width + m;
                break;

              case "bottom":
                i = h.top + h.height + m;
                break;

              case "left":
                s = h.left - d.width - m;
            }

            switch (D) {
              case "top":
                i = h.top;
                break;

              case "right":
                s = h.left + h.width - d.width;
                break;

              case "bottom":
                i = h.top + h.height - d.height;
                break;

              case "left":
                s = h.left;
                break;

              case "center":
                /left|right/.test(g) ? i = h.top + h.height / 2 - d.height / 2 : s = h.left + h.width / 2 - d.width / 2;
            }

            r.$datepicker.style.cssText = "left: ".concat(s + p, "px; top: ").concat(i + u, "px");
          }
        }), N(this, "_setInputValue", () => {
          let {
            opts: e,
            $altField: t,
            locale: {
              dateFormat: i
            }
          } = this,
              {
            altFieldDateFormat: s,
            altField: a
          } = e;
          a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
        }), N(this, "_getInputValue", e => {
          let {
            selectedDates: t,
            opts: i
          } = this,
              {
            multipleDates: s,
            multipleDatesSeparator: a
          } = i;
          if (!t.length) return "";
          let n = "function" == typeof e,
              r = n ? e(s ? t : t[0]) : t.map(t => this.formatDate(t, e));
          return r = n ? r : r.join(a), r;
        }), N(this, "_checkIfDateIsSelected", function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days,
              s = !1;
          return r.selectedDates.some(i => {
            let a = u(e, i, t);
            return s = a && i, a;
          }), s;
        }), N(this, "_scheduleCallAfterTransition", e => {
          this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = () => {
            e && e(!0);
          }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
            once: !0
          });
        }), N(this, "_cancelScheduledCall", () => {
          this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
        }), N(this, "setViewDate", e => {
          if (!((e = b(e)) instanceof Date)) return;
          if (u(e, this.viewDate)) return;
          let t = this.viewDate;
          this.viewDate = e;
          let {
            onChangeViewDate: s
          } = this.opts;

          if (s) {
            let {
              month: e,
              year: t
            } = this.parsedViewDate;
            s({
              month: e,
              year: t,
              decade: this.curDecade
            });
          }

          this.trigger(i.eventChangeViewDate, e, t);
        }), N(this, "setFocusDate", function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), r.trigger(i.eventChangeFocusDate, e, t));
        }), N(this, "setCurrentView", e => {
          if (this.viewIndexes.includes(e)) {
            if (this.currentView = e, this.elIsInput && this.visible && this.setPosition(void 0, !0), this.trigger(i.eventChangeCurrentView, e), !this.views[e]) {
              let t = this.views[e] = new S({
                dp: this,
                opts: this.opts,
                type: e
              });
              this.$content.appendChild(t.$el);
            }

            this.opts.onChangeView && this.opts.onChangeView(e);
          }
        }), N(this, "_updateLastSelectedDate", e => {
          this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
        }), N(this, "destroy", () => {
          let {
            showEvent: e,
            isMobile: t
          } = this.opts,
              i = this.$datepicker.parentNode;
          i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, this.rangeDateTo = null;
        }), N(this, "update", e => {
          let t = w({}, this.opts);
          w(this.opts, e);
          let {
            timepicker: s,
            buttons: a,
            range: n,
            selectedDates: r,
            isMobile: h
          } = this.opts,
              o = this.visible || this.treatAsInline;
          this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this._handleLocale(), !t.selectedDates && r && this.selectDate(r), e.view && this.setCurrentView(e.view), this._setInputValue(), t.range && !n ? (this.rangeDateTo = !1, this.rangeDateFrom = !1) : !t.range && n && this.selectedDates.length && (this.rangeDateFrom = this.selectedDates[0], this.rangeDateTo = this.selectedDates[1]), t.timepicker && !s ? (o && this.timepicker.destroy(), this.timepicker = !1, this.$timepicker.parentNode.removeChild(this.$timepicker)) : !t.timepicker && s && this._addTimepicker(), !t.buttons && a ? this._addButtons() : t.buttons && !a ? (this.buttons.destroy(), this.$buttons.parentNode.removeChild(this.$buttons)) : o && t.buttons && a && this.buttons.clearHtml().render(), !t.isMobile && h ? (this.treatAsInline || P || this._createMobileOverlay(), this._addMobileAttributes(), this.visible && this._showMobileOverlay()) : t.isMobile && !h && (this._removeMobileAttributes(), this.visible && (P.classList.remove("-active-"), "function" != typeof this.opts.position && this.setPosition())), o && (this.nav.update(), this.views[this.currentView].render(), this.currentView === i.days && this.views[this.currentView].renderDayNames());
        }), N(this, "isOtherMonth", e => {
          let {
            month: t
          } = o(e);
          return t !== this.parsedViewDate.month;
        }), N(this, "isOtherYear", e => {
          let {
            year: t
          } = o(e);
          return t !== this.parsedViewDate.year;
        }), N(this, "isOtherDecade", e => {
          let {
            year: t
          } = o(e),
              [i, s] = d(this.viewDate);
          return t < i || t > s;
        }), N(this, "_onChangeSelectedDate", e => {
          let {
            silent: t
          } = e;
          setTimeout(() => {
            this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
          });
        }), N(this, "_onChangeFocusedDate", function (e) {
          let {
            viewDateTransition: t
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e) return;
          let i = !1;
          t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e);
        }), N(this, "_onChangeTime", e => {
          let {
            hours: t,
            minutes: i
          } = e,
              s = new Date(),
              {
            lastSelectedDate: a,
            opts: {
              onSelect: n
            }
          } = this,
              r = a;
          a || (r = s);
          let h = this.getCell(r, this.currentViewSingular),
              o = h && h.adpCell;
          o && o.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), n && this._triggerOnSelect()) : this.selectDate(r));
        }), N(this, "_onFocus", e => {
          this.visible || this.show();
        }), N(this, "_onBlur", e => {
          this.inFocus || !this.visible || this.opts.isMobile || this.hide();
        }), N(this, "_onMouseDown", e => {
          this.inFocus = !0;
        }), N(this, "_onMouseUp", e => {
          this.inFocus = !1, this.$el.focus();
        }), N(this, "_onResize", () => {
          this.visible && "function" != typeof this.opts.position && this.setPosition();
        }), N(this, "_onClickOverlay", () => {
          this.visible && this.hide();
        }), N(this, "isWeekend", e => this.opts.weekends.includes(e)), N(this, "getClampedDate", e => {
          let {
            minDate: t,
            maxDate: i
          } = this,
              s = e;
          return i && p(e, i) ? s = i : t && m(e, t) && (s = t), s;
        }), this.$el = a(e), !this.$el) return;
        this.$datepicker = n({
          className: "air-datepicker"
        }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || !1), I || (I = a("body"));
        let {
          view: h,
          startDate: l
        } = this.opts;
        l || (this.opts.startDate = new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
      }

      init() {
        let {
          opts: e,
          treatAsInline: t,
          opts: {
            inline: i,
            isMobile: s,
            selectedDates: a,
            keyboardNav: r,
            onlyTimepicker: h
          }
        } = this;
        var o;
        B || i || !this.elIsInput || (B = !0, R = n({
          className: o = K.defaultContainerId,
          id: o
        }), I.appendChild(R)), !s || P || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i || this._bindEvents(), r && !h && (this.keyboardNav = new E({
          dp: this,
          opts: e
        }))), a && this.selectDate(a, {
          silent: !0
        }), this.opts.visible && !t && this.show(), t && this._createComponents();
      }

      _createMobileOverlay() {
        P = n({
          className: "air-datepicker-overlay"
        }), R.appendChild(P);
      }

      _createComponents() {
        let {
          opts: e,
          treatAsInline: t,
          opts: {
            inline: i,
            buttons: s,
            timepicker: a,
            position: n,
            classes: r,
            onlyTimepicker: h,
            isMobile: o
          }
        } = this;
        this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), r && this.$datepicker.classList.add(...r.split(" ")), h && this.$datepicker.classList.add("-only-timepicker-"), o && !t && this._addMobileAttributes(), this.views[this.currentView] = new S({
          dp: this,
          type: this.currentView,
          opts: e
        }), this.nav = new F({
          dp: this,
          opts: e
        }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
      }

      _destroyComponents() {
        for (let e in this.views) this.views[e].destroy();

        this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
      }

      _addMobileAttributes() {
        P.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
      }

      _removeMobileAttributes() {
        P.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
      }

      _createMinMaxDates() {
        let {
          minDate: e,
          maxDate: t
        } = this.opts;
        this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
      }

      _addTimepicker() {
        this.$timepicker = n({
          className: "air-datepicker--time"
        }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
          dp: this,
          opts: this.opts
        }), this.$timepicker.appendChild(this.timepicker.$el);
      }

      _addButtons() {
        this.$buttons = n({
          className: "air-datepicker--buttons"
        }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({
          dp: this,
          opts: this.opts
        }), this.$buttons.appendChild(this.buttons.$el);
      }

      _bindSubEvents() {
        this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
      }

      _buildBaseHtml() {
        let {
          inline: e
        } = this.opts;
        var t, i;
        this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
      }

      _handleLocale() {
        let {
          locale: e,
          dateFormat: t,
          firstDay: i,
          timepicker: s,
          onlyTimepicker: a,
          timeFormat: n,
          dateTimeSeparator: r
        } = this.opts;
        var h;
        this.locale = (h = e, JSON.parse(JSON.stringify(h))), t && (this.locale.dateFormat = t), void 0 !== n && "" !== n && (this.locale.timeFormat = n);
        let {
          timeFormat: o
        } = this.locale;

        if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
          let e = o ? r : "";
          this.locale.dateFormat = [this.locale.dateFormat, o || ""].join(e);
        }

        a && (this.locale.dateFormat = this.locale.timeFormat);
      }

      _setPositionClasses(e) {
        if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
        let t = (e = e.split(" "))[0],
            i = e[1],
            s = "air-datepicker -".concat(t, "-").concat(i, "- -from-").concat(t, "-");
        this.$datepicker.classList.add(...s.split(" "));
      }

      _bindEvents() {
        this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
      }

      _limitViewDateByMaxMinDates() {
        let {
          viewDate: e,
          minDate: t,
          maxDate: i
        } = this;
        i && p(e, i) && this.setViewDate(i), t && m(e, t) && this.setViewDate(t);
      }

      formatDate() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate,
            t = arguments.length > 1 ? arguments[1] : void 0;
        if (e = b(e), !(e instanceof Date)) return;
        let i = t,
            s = this.locale,
            a = o(e),
            n = d(e),
            r = K.replacer,
            h = "am";
        this.opts.timepicker && this.timepicker && (h = this.timepicker.getDayPeriod(e).dayPeriod);
        let l = {
          T: e.getTime(),
          m: a.minutes,
          mm: a.fullMinutes,
          h: a.hours12,
          hh: a.fullHours12,
          H: a.hours,
          HH: a.fullHours,
          aa: h,
          AA: h.toUpperCase(),
          E: s.daysShort[a.day],
          EEEE: s.days[a.day],
          d: a.date,
          dd: a.fullDate,
          M: a.month + 1,
          MM: a.fullMonth,
          MMM: s.monthsShort[a.month],
          MMMM: s.months[a.month],
          yy: a.year.toString().slice(-2),
          yyyy: a.year,
          yyyy1: n[0],
          yyyy2: n[1]
        };

        for (let [e, t] of Object.entries(l)) i = r(i, k(e), t);

        return i;
      }

      down(e) {
        this._handleUpDownActions(e, "down");
      }

      up(e) {
        this._handleUpDownActions(e, "up");
      }

      selectDate(e) {
        let t,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
          currentView: a,
          parsedViewDate: n,
          selectedDates: r
        } = this,
            {
          updateTime: h
        } = s,
            {
          moveToOtherMonthsOnSelect: o,
          moveToOtherYearsOnSelect: l,
          multipleDates: d,
          range: c,
          autoClose: u
        } = this.opts,
            m = r.length;
        if (Array.isArray(e)) return e.forEach(e => {
          this.selectDate(e, s);
        }), new Promise(e => {
          setTimeout(e);
        });

        if ((e = b(e)) instanceof Date) {
          if (a === i.days && e.getMonth() !== n.month && o && (t = new Date(e.getFullYear(), e.getMonth(), 1)), a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), d && !c) {
            if (m === d) return;
            this._checkIfDateIsSelected(e) || r.push(e);
          } else if (c) switch (m) {
            case 1:
              r.push(e), this.rangeDateTo || (this.rangeDateTo = e), p(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
              break;

            case 2:
              this.selectedDates = [e], this.rangeDateFrom = e, this.rangeDateTo = "";
              break;

            default:
              this.selectedDates = [e], this.rangeDateFrom = e;
          } else this.selectedDates = [e];

          return this.trigger(i.eventChangeSelectedDate, {
            action: i.actionSelectDate,
            silent: null == s ? void 0 : s.silent,
            date: e,
            updateTime: h
          }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === m && this.hide() : this.hide()), new Promise(e => {
            setTimeout(e);
          });
        }
      }

      unselectDate(e) {
        let t = this.selectedDates,
            s = this;
        if ((e = b(e)) instanceof Date) return t.some((a, n) => {
          if (u(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
            action: i.actionUnselectDate,
            date: e
          }), !0;
        });
      }

      replaceDate(e, t) {
        let s = this.selectedDates.find(t => u(t, e, this.currentView)),
            a = this.selectedDates.indexOf(s);
        a < 0 || u(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, this.trigger(i.eventChangeSelectedDate, {
          action: i.actionSelectDate,
          date: t,
          updateTime: !0
        }), this._updateLastSelectedDate(t));
      }

      clear() {
        this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.trigger(i.eventChangeSelectedDate, {
          action: i.actionUnselectDate
        });
      }

      show() {
        let {
          onShow: e,
          isMobile: t
        } = this.opts;
        this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
      }

      hide() {
        let {
          onHide: e,
          isMobile: t
        } = this.opts,
            i = this._hasTransition();

        this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition(t => {
          !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
        }), t && P.classList.remove("-active-");
      }

      _triggerOnSelect() {
        let e = [],
            t = [],
            {
          selectedDates: i,
          locale: s,
          opts: {
            onSelect: a,
            multipleDates: n,
            range: r
          }
        } = this,
            h = n || r,
            o = "function" == typeof s.dateFormat;
        i.length && (e = i.map(g), t = o ? n ? s.dateFormat(e) : e.map(e => s.dateFormat(e)) : e.map(e => this.formatDate(e, s.dateFormat))), a({
          date: h ? e : e[0],
          formattedDate: h ? t : t[0],
          datepicker: this
        });
      }

      _handleAlreadySelectedDates(e, t) {
        let {
          range: i,
          toggleSelected: s
        } = this.opts;
        i ? s ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : s && this.unselectDate(t), s || this._updateLastSelectedDate(e);
      }

      _handleUpDownActions(e, t) {
        if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
        let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
        i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
      }

      _handleRangeOnFocus() {
        1 === this.selectedDates.length && (p(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
      }

      getCell(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
        if (!((e = b(e)) instanceof Date)) return;
        let {
          year: s,
          month: a,
          date: n
        } = o(e),
            r = '[data-year="'.concat(s, '"]'),
            h = '[data-month="'.concat(a, '"]'),
            l = '[data-date="'.concat(n, '"]'),
            d = {
          [i.day]: "".concat(r).concat(h).concat(l),
          [i.month]: "".concat(r).concat(h),
          [i.year]: "".concat(r)
        };
        return this.views[this.currentView].$el.querySelector(d[t]);
      }

      _showMobileOverlay() {
        P.classList.add("-active-");
      }

      _hasTransition() {
        return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e, t) => parseFloat(t) + e, 0) > 0;
      }

      get parsedViewDate() {
        return o(this.viewDate);
      }

      get currentViewSingular() {
        return this.currentView.slice(0, -1);
      }

      get curDecade() {
        return d(this.viewDate);
      }

      get viewIndex() {
        return this.viewIndexes.indexOf(this.currentView);
      }

      get isFinalView() {
        return this.currentView === i.years;
      }

      get hasSelectedDates() {
        return this.selectedDates.length > 0;
      }

      get isMinViewReached() {
        return this.currentView === this.opts.minView || this.currentView === i.days;
      }

      get $container() {
        return this.$customContainer || R;
      }

      static replacer(e, t, i) {
        return e.replace(t, function (e, t, s, a) {
          return t + i + a;
        });
      }

    }

    var j;
    return N(K, "defaults", s), N(K, "version", "3.1.0"), N(K, "defaultContainerId", "air-datepicker-global-container"), j = K.prototype, Object.assign(j, A), t.default;
  }();
});
;
const grummer = {
  animal: null,
  currentServices: [],
  currentBreed: undefined,
  breesTemplate: null,

  goToBlock(target, event, isMobile = false) {
    if (event) event.preventDefault();
    if (isMobile) this.header.toggleMenu();
    $("html,body").animate({
      scrollTop: typeof target === "string" ? target : $(target.hash).offset().top
    });
  },

  setBreeds(arr) {
    const list = $("._breeds-items");

    if (!this.breesTemplate) {
      const template = $.trim($(".__breeds-temp").html());
      this.breesTemplate = template;
    }

    list.html("");
    let frag = arr.reduce((acc, item) => {
      return acc += this.breesTemplate.replace(/{{title}}/gi, item.title).replace(/{{value}}/gi, item.value);
    }, "");
    list.append(frag);
  }

};
const arrow = `
  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 8H15.6667" stroke="#243138" stroke-width="2" stroke-linecap="round"/>
  <path d="M9.83337 1.33337L16.5 8.00004L9.83337 14.6667" stroke="#243138" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
grummer.tlg = {
  init() {
    this.URL = `https://grummer-sender.herokuapp.com/sendMessage`;
  },

  async sendCallBack(form) {
    let msg = '*Заказ звонка*\n\n';
    msg += this.createMsg(form).replace('name', 'Клиент').replace('tel', 'Тел');
    return await this.sendMessage(msg);
  },

  createMsg(form) {
    const inputs = $(form).find('input').toArray();
    return inputs.reduce((acc, input) => acc += `#${input.name}: ${input.value}\n`, '');
  },

  async sendMessage(msg) {
    return await fetch(this.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    }).then(response => response.status === 200);
  }

};
grummer.popup = {
  init() {
    this.body = $("body");
    this.lockPadding = $(".lock-padding"); // for fixed elements

    this.unlock = true;
    this.timeOut = 300;
    this.closeOnEsc();
  },

  open(popup) {
    if (!(popup && this.unlock)) return;
    this.$popupActive = $(".popup.open"); // Close old popup

    !!this.$popupActive[0] ? this.close(this.$popupActive, false) : this.bodyLock();
    let $popup; // Open

    typeof popup === "string" ? $popup = $(`.${popup}`).addClass("open") : $popup = popup.addClass("open"); // Close on click outside

    $popup.on("click", e => {
      if (!$(e.target).closest(".popup__content")[0]) this.close($popup);
    });
  },

  close(popup, doUnlock = true) {
    if (this.unlock) {
      typeof popup === "string" ? $(`.${popup}`).removeClass("open") : popup.removeClass("open");
      if (doUnlock) this.bodyUnlock();
    }

    this.body.css({
      overflow: "auto"
    });
  },

  back(popup) {
    this.close(popup, false);
    if (this.$popupActive) this.$popupActive.addClass("open");
  },

  bodyLock() {
    const lockPaddingValue = window.innerWidth - this.body.innerWidth() + "px";
    this.body.css({
      paddingRight: lockPaddingValue
    });
    this.body.addClass("lock");

    if (this.lockPadding.length) {
      this.lockPadding.each((i, el) => {
        $(el).css({
          paddingRight: lockPaddingValue
        });
      });
    }

    this.unlock = false;
    setTimeout(() => {
      this.unlock = true;
    }, this.timeOut);
  },

  bodyUnlock() {
    setTimeout(() => {
      if (this.lockPadding.length) {
        this.lockPadding.each((i, el) => {
          $(el).css({
            paddingRight: "0px"
          });
        });
      }

      this.body.css({
        paddingRight: "0px"
      });
      this.body.removeClass("lock");
    }, this.timeOut);
    this.unlock = false;
    setTimeout(() => {
      this.unlock = true;
    }, this.timeOut);
  },

  closeOnEsc() {
    $(":root").on("keydown", e => {
      if (e.which === 27) this.close("popup.open");
    });
  }

};
;
grummer.popupMain = {
  init() {
    const svg = path => `
      <svg
        width="6"
        height="12"
        viewBox="0 0 8 14"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="${path}"
          stroke="#ECEFEF"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    `;

    new AirDatepicker("#datepicker", {
      dateFormat(date) {
        return date.toLocaleString("ru", {
          year: "numeric",
          day: "2-digit",
          month: "long"
        });
      },

      position: "bottom right",
      prevHtml: svg("M7.04199 12.8713L1.04199 6.87134L7.04199 0.871338"),
      nextHtml: svg("M1 12.8713L7 6.87134L1 0.871338"),
      navTitles: {
        days: "MMMM yyyy"
      }
    });
  },

  open() {
    this.init();
    this.$popupMain = $("._popup-main");
    this.$services = this.$popupMain.find(".popup-main__form-services");
    this.$servicesUl = this.$popupMain.find(".popup-main__form-services-ul");
    this.$lastLi = this.$servicesUl.find("li").last()[0]; // const breed = grummer.currentBreed

    const html = this.createServicesListHtml();
    this.$servicesUl.html(html).append(this.$lastLi);
    grummer.currentServices.length > 1 ? this.$services.removeClass("one") : this.$services.addClass("one"); // if (breed)
    // {
    //   const b = $('._breed')
    //   b.find('input[name="breed"]').val(breed)
    //   b.find('._selected-text').text(breed)
    // }

    this.setFinalPrice(this.calculateFinalPrice());
    grummer.popup.open(this.$popupMain);
  },

  createServicesListHtml() {
    const template = $.trim($("#popup-main__form-services").html());
    return grummer.currentServices.reduce((acc, service) => {
      return acc += template.replace(/{{title}}/gi, service.title).replace(/{{price}}/gi, service.price);
    }, "");
  },

  calculateFinalPrice() {
    return grummer.currentServices.reduce((acc, el) => {
      return el.price.includes("-") ? acc += +el.price.split("-")[0] : el.price.includes("от") ? acc += +el.price.replace("от", "") : acc += +el.price;
    }, 0);
  },

  setFinalPrice(price) {
    this.$popupMain.find("._final-price").html(price);
    this.$popupMain.find("input#_final-price").val(price);
  },

  removeService(title) {
    // because popup click outside....
    setTimeout(() => {
      grummer.currentServices = grummer.currentServices.filter(el => {
        return el.title !== title;
      });
      if (grummer.currentServices.length === 1) this.$services.addClass("one");
      this.$servicesUl.html(this.createServicesListHtml()).append(this.$lastLi);
      this.setFinalPrice(this.calculateFinalPrice());
    }, 0);
  },

  createServicesStr(nodeList) {
    return Array.from(nodeList).map(el => {
      return el.value;
    }).join(", ");
  },

  async submit(form, event) {
    event.preventDefault();
    const validator = new Validator(form);
    const v = validator.validate();
    if (!v) return;
    let services;
    form.services instanceof RadioNodeList ? services = this.createServicesStr(form.services) : services = form.services.value;
    let breed = grummer.breeds.find(el => el.value === form.breed.value);
    const data = {
      Услуги: services,
      Клиент: `${form.name.value} ${form.lastname.value}`,
      Тел: form.tel.value,
      Порода: breed ? breed.title : "",
      Дата: form.date.value,
      Комментарий: form.comment.value,
      "Мин цена": form.price.value
    };
    let msg = "*Запись*\n\n";

    for (let key in data) {
      msg += `#${key}: ${data[key]}\n`;
    }

    const res = await grummer.tlg.sendMessage(msg); // console.log(res);

    if (res) setTimeout(() => {
      console.log(res);
      form.reset();
      grummer.popup.open("_popup-ok");
    }, 300);
  }

};
;
grummer.popupServices = {
  init() {
    this.servicesList = grummer.animal ? [...grummer.servicesList[grummer.animal], ...grummer.servicesList.additional] : Object.keys(grummer.servicesList).reduce((acc, key) => {
      return [...acc, ...grummer.servicesList[key]];
    }, []);
    this.setCategories(grummer.categories);
    this.sliderList = $(".popup-services__slider-services").removeClass("slick-initialized slick-slider").html("");
    this.sliderListAdd = $(".popup-services__slider-add-services").removeClass("slick-initialized slick-slider").html(""); // templates

    this.sliderTemplate = $.trim($("#popup-services__slider-temp").html());
    this.sliderTemplateAdd = $.trim($("#popup-services__slider-add-temp").html());
    this.mobileListTemplate = $.trim($("#popup-services__mobile-list-temp").html());
    this.setSlides(this.servicesList.filter(el => el.category !== "add-services"), this.sliderList, this.sliderTemplate);
    this.initSlider(this.sliderList);
    this.initSlider(this.sliderListAdd);
  },

  open() {
    this.counter = 1;
    this.slidesOnPage = 6;
    this.mobilefilter = "";
    this.mobileList = $(".popup-services__mobile-list");
    this.init();
    this.setMobileSlides(this.slidesOnPage, this.servicesList, this.mobilefilter);
    grummer.popup.open("_popup-services");
  },

  setCategories(arr) {
    const list = $(".popup-services .g-select__items");
    const template = $.trim($(".popup-services .popup-services__filter-temp").html());
    const lastLi = $.trim($(".popup-services .popup-services__filter-last-temp").html());
    list.html(lastLi + arr.reduce((acc, item) => {
      return acc += template.replace(/{{title}}/gi, item.title).replace(/{{value}}/gi, item.value).replace(/{{icon}}/gi, item.icon);
    }, ""));
  },

  filter(arr) {
    this.setSlides(arr, this.sliderList, this.sliderTemplate);
    this.sliderList.removeClass("slick-initialized slick-slider");
    this.initSlider(this.sliderList);
  },

  filterServices(val, type) {
    return this.servicesList.filter(service => {
      return service[type] === val;
    });
  },

  filterServicesByCategory(val) {
    this.mobilefilter = val;
    this.counter = 1;
    this.setMobileSlides(this.counter * this.slidesOnPage, this.servicesList, this.mobilefilter);
    !val ? this.filter(this.servicesList.filter(el => el.category !== "add-services")) : this.filter(this.filterServices(val, "category"));
  },

  createHtmlList(arr, template) {
    return arr.reduce((acc, slide) => {
      return acc += template.replace(/{{title}}/gi, slide.title).replace(/{{text}}/gi, slide.text).replace(/{{price}}/gi, slide.price).replace(/{{time}}/gi, slide.time).replace(/{{img}}/gi, slide.img);
    }, "");
  },

  setSlides(slides, list, template) {
    list.html("");
    list.append(this.createHtmlList(slides, template));
  },

  initSlider($el) {
    $el.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      // prevArrow: '<div class="prev-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
      // nextArrow: '<div class="next-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
      prevArrow: `<div class="prev-arrow slider-arrow">${arrow}</div>`,
      nextArrow: `<div class="next-arrow slider-arrow">${arrow}</div>`
    });
  },

  addService(title, text) {
    const service = this.servicesList.find(obj => {
      return obj.title === title && obj.text === text;
    });

    if (!grummer.currentServices.includes(service)) {
      grummer.currentServices.push(service);
    }

    grummer.popupMain.open();
  },

  setMobileSlides(slidesCounter, arr, filter) {
    this.setSlides(arr.filter(el => {
      return el.category === filter || filter === "";
    }).slice(0, slidesCounter), this.mobileList, this.mobileListTemplate);
  },

  addMore() {
    this.counter += 1;
    this.setMobileSlides(this.counter * this.slidesOnPage, this.servicesList, this.mobilefilter);
  }

};
;
grummer.popupOk = {
  gotoMain() {
    grummer.popup.close('_popup-ok');
    grummer.goToBlock('#header');
  }

};
"use strict";

grummer.store = {
  init() {
    grummer.breeds = this.breeds.sort((a, b) => a.title > b.title);
    grummer.categories = this.categories;
    grummer.servicesList = this.servicesList;
    grummer.ourWorks = this.ourWorks;
    grummer.questionsList = this.questions;
    grummer.feedbacksList = this.feedbacks;
  },

  breeds: [{
    title: "Помски",
    value: "pomski",
    type: "dog"
  }, {
    title: "Эрдельтерьер",
    value: "erdenterier",
    type: "dog"
  }, {
    title: "Йоркширский терьер, бивер-йорк",
    value: "york",
    type: "dog"
  }, {
    title: "Шпиц",
    value: "shpits",
    type: "dog"
  }, {
    title: "Шпиц малый",
    value: "shpits",
    type: "dog"
  }, {
    title: "Шпиц японский",
    value: "shpits",
    type: "dog"
  }, {
    title: "Шпиц карликовый (померанский)",
    value: "shpits",
    type: "dog"
  }, {
    title: "Ши-Тцу",
    value: "shitsy",
    type: "dog"
  }, {
    title: "Норвич-терьер",
    value: "norvich_terier",
    type: "dog"
  }, {
    title: "Норфолк-терьер",
    value: "norfolk_terier",
    type: "dog"
  }, {
    title: "Миттельшнауцер",
    value: "mittelshnatser",
    type: "dog"
  }, {
    title: "Японский хин",
    value: "japan_hin",
    type: "dog"
  }, {
    title: "Русская цветная болонка",
    value: "rus_color_balonka",
    type: "dog"
  }, {
    title: "Мальтийская болонка (Мальтезе)",
    value: "malt_bolonka",
    type: "dog"
  }, {
    title: "Бишон Фризе",
    value: "bishon_frieze",
    type: "dog"
  }, {
    title: "Афганская борзая (АФГАН)",
    value: "afgan_borzaya",
    type: "dog"
  }, {
    title: "Пекинес",
    value: "pekinez",
    type: "dog"
  }, {
    title: "Русский охотничий спаниель",
    value: "rus_spaniel",
    type: "dog"
  }, {
    title: "Американский Кокер-спаниель",
    value: "american_koker_spaniel",
    type: "dog"
  }, {
    title: "Аффенпинчер",
    value: "affenpitcher",
    type: "dog"
  }, {
    title: "Бассет-Хаунд",
    value: "basset_haund",
    type: "dog"
  }, {
    title: "Английский Кокер-спаниель",
    value: "england_koker_spaniel",
    type: "dog"
  }, {
    title: "Бобтейл",
    value: "bobtail",
    type: "dog"
  }, {
    title: "Акита-Ину",
    value: "akita_inu",
    type: "dog"
  }, {
    title: "Бульдог Английский",
    value: "buldog_england",
    type: "dog"
  }, {
    title: "Бульдог Французский",
    value: "buldog_franch",
    type: "dog"
  }, {
    title: "Бедлингтон-терьер",
    value: "bedlington_terier",
    type: "dog"
  }, {
    title: "Вельш-Корги Пемброк",
    value: "velsh_korgi",
    type: "dog"
  }, {
    title: "Китайская хохлатая",
    value: "сhinese_hohlataya",
    type: "dog"
  }, {
    title: "Вельштерьер",
    value: "velshterier",
    type: "dog"
  }, {
    title: "Бультерьер",
    value: "bulterier",
    type: "dog"
  }, {
    title: "Пудель КОРОЛЕВСКИЙ",
    value: "pudel_king",
    type: "dog"
  }, {
    title: "Пудель большой",
    value: "pudel_big",
    type: "dog"
  }, {
    title: "Русский той-терьер",
    value: "rus_toi",
    type: "dog"
  }, {
    title: "Пудель (той и карликовый)",
    value: "pudel_toy_and_karlick",
    type: "dog"
  }, {
    title: "Пудель (Малый. До 55см в холке)",
    value: "pudel_litle",
    type: "dog"
  }, {
    title: "Метис/Дворняга",
    value: "metis_dvor",
    type: "dog"
  }, {
    title: "Бриар",
    value: "briar",
    type: "dog"
  }, {
    title: "Папильон",
    value: "papilion",
    type: "dog"
  }, {
    title: "Фокстерьер жескошерстный",
    value: "foxterier_hardhair",
    type: "dog"
  }, {
    title: "Гриффон (брюсельский, бельгийский)",
    value: "griffon",
    type: "dog"
  }, {
    title: "Золотистый ретривер (голден)",
    value: "gold_retriver",
    type: "dog"
  }, {
    title: "Алабай (средне-азиатская овчарка)",
    value: "alabai",
    type: "dog"
  }, {
    title: "Бордер колли",
    value: "kolli",
    type: "dog"
  }, {
    title: "Вест-хайленд-вайт-терьер",
    value: "vest_hailend",
    type: "dog"
  }, {
    title: "Чау-Чау",
    value: "chau_chau",
    type: "dog"
  }, {
    title: "Ньюфаундленд",
    value: "newfaunlend",
    type: "dog"
  }, {
    title: "Сеттер (ирл, гордон, англ)",
    value: "setter",
    type: "dog"
  }, {
    title: "Мопс",
    value: "mops",
    type: "dog"
  }, {
    title: "Сиба-ину",
    value: "siba_inu",
    type: "dog"
  }, {
    title: "Скотч-терьер",
    value: "scotch_terier",
    type: "dog"
  }, {
    title: "Силихем-терьер",
    value: "silihem_terier",
    type: "dog"
  }, {
    title: "Грифон",
    value: "grifon",
    type: "dog"
  }, {
    title: "Такса гладкошерстная",
    value: "taksa",
    type: "dog"
  }, {
    title: "Такса жесткошерстная",
    value: "taksa_hard",
    type: "dog"
  }, {
    title: "Такса длинношерстная",
    value: "taksa_longhair",
    type: "dog"
  }, {
    title: "Цвергшнауцер",
    value: "shwergshnautser",
    type: "dog"
  }, {
    title: "Ризеншнауцер",
    value: "risenshnautser",
    type: "dog"
  }, {
    title: "Самоед",
    value: "samoed",
    type: "dog"
  }, {
    title: "Хаски",
    value: "haski",
    type: "dog"
  }, {
    title: "Ротвейлер",
    value: "rotveiler",
    type: "dog"
  }, {
    title: "Чихуахуа",
    value: "chihuahua",
    type: "dog"
  }, {
    title: "Шарпей",
    value: "sharpei",
    type: "dog"
  }, {
    title: "Шелти",
    value: "shelti",
    type: "dog"
  }, {
    title: "Бигль",
    value: "bigle",
    type: "dog"
  }, {
    title: "Московская сторожевая",
    value: "moskow_storogevaya",
    type: "dog"
  }, {
    title: "Спрингер-спаниель",
    value: "springer_spaniel",
    type: "dog"
  }, {
    title: "Джек-рассел-терьер",
    value: "jack_rassel",
    type: "dog"
  }, {
    title: "Лабрадор",
    value: "labrador",
    type: "dog"
  }, {
    title: "Лабрадудель",
    value: "labradudel",
    type: "dog"
  }, {
    title: "Мальтипу",
    value: "maltipu",
    type: "dog"
  }, {
    title: "Аляскинский маламут",
    value: "malamut",
    type: "dog"
  }, {
    title: "Черный русский терьер",
    value: "black_rus_terier",
    type: "dog"
  }, {
    title: "Ирландский терьер",
    value: "ireland_terier",
    type: "dog"
  }, {
    title: "Ирландский мягкошерстный пшеничный терьер",
    value: "ireland_terier_soft",
    type: "dog"
  }, {
    title: "Немецкая овчарка",
    value: "deutsch_ovcharka",
    type: "dog"
  }, {
    title: "Пиренейская овчарка",
    value: "pireneiskaya_ovcharka",
    type: "dog"
  }, {
    title: "Сенбернар",
    value: "senbernar",
    type: "dog"
  }, {
    title: "Далматин",
    value: "dalmatin",
    type: "dog"
  }, {
    title: "Кавалер Кинг Чарльз спаниель",
    value: "kavaler_king_spaniel",
    type: "dog"
  }, {
    title: "Бернский Зенненхунд",
    value: "bern_zennenhund",
    type: "dog"
  }, {
    title: "Боксер",
    value: "boxer",
    type: "dog"
  }],
  categories: [{
    title: "Все",
    value: "",
    icon: ""
  }, {
    title: "Гигиена",
    value: "hygiene",
    icon: "wash"
  }, {
    title: "Шерсть",
    value: "wool",
    icon: "barbershop"
  }, {
    title: "Когти",
    value: "claw",
    icon: "foot"
  }, {
    title: "Зубы",
    value: "tooth",
    icon: "tooth"
  }, {
    title: "Доп. услуги",
    value: "additional",
    icon: "plus-box"
  }],
  servicesList: {
    dogs: [{
      title: "SPA-комплекс",
      animal: "dog",
      price: "1350 - 2400",
      time: "1.5 часа",
      category: "hygiene",
      text: "по восстановлению шерсти с маслом арганы",
      img: "spa.svg"
    }, {
      title: "Озонотерапия",
      animal: "dog",
      price: "1700 - 2100",
      time: "2.5 часа",
      category: "hygiene",
      text: "с маской",
      img: "ozon-mask.svg"
    }, {
      title: "Озонотерапия",
      animal: "dog",
      price: "1000",
      time: "1 час",
      category: "hygiene",
      text: "без маски",
      img: "ozon-nomask.svg"
    }, {
      title: "Вычесывание",
      animal: "dog",
      price: "1000",
      time: "1 час",
      category: "wool",
      text: "",
      img: "comb-out.svg"
    }, {
      title: "Расчёсывание колтунов",
      animal: "dog",
      price: "1000",
      time: "1 час",
      category: "hygwooliene",
      text: "Дополнительная услуга без релаксанта (2мм) (в присутствии хозяина)",
      img: "comb-kolts.svg"
    }, {
      title: "Стрижка под машику",
      price: "0",
      animal: "dog",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "wool"
    }, {
      title: "Подстригание когтей",
      price: "0",
      animal: "dog",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "claw"
    }, {
      title: "Чистка параанальных желез",
      price: "300",
      animal: "additional",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "hygiene"
    }, {
      title: "Модельная стрижка",
      price: "300",
      animal: "dog",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "wool"
    }, {
      title: "Полный тримминг",
      animal: "dog",
      price: "2000",
      time: "1 час",
      category: "wool",
      text: "ручная щипка",
      img: "trim.svg"
    }, {
      title: "Сбривание колтунов",
      animal: "dog",
      price: "500",
      time: "30 мин",
      category: "wool",
      text: "без релаксанта (2мм) (в присутствии хозяина)",
      img: "trim-kolt.svg"
    }, {
      title: "Подпил когтей",
      animal: "dog",
      price: "400 - 600",
      time: "1 час",
      category: "claw",
      text: "",
      img: "foot.svg"
    }, {
      title: "Ультразвуковая чистка зубов",
      animal: "dog",
      price: "2500 - 4500",
      time: "1.5 часа",
      category: "tooth",
      text: "",
      img: "tooth.svg"
    }, {
      title: "Снятие зубного камня и налета",
      animal: "dog",
      price: "1000 - 1500",
      time: "30 мин",
      category: "tooth",
      text: "механически",
      img: "tooth.svg"
    }, {
      title: "Чистка зубов пастой",
      animal: "dog",
      price: "350 - 550",
      time: "30 мин",
      category: "tooth",
      text: "",
      img: "toothpaste.svg"
    }, {
      title: "Полировка зубов пастой",
      animal: "dog",
      price: "1000",
      time: "1 час",
      category: "tooth",
      text: "",
      img: "toothpaste.svg"
    }, {
      title: "Антипаразитальный комплекс",
      animal: "dog",
      price: "400",
      time: "30 мин",
      category: "additional",
      text: "",
      img: "antiparasite.svg"
    }, {
      title: "Обработка РЕК",
      animal: "dog",
      price: "200",
      time: "30 мин",
      category: "additional",
      text: "",
      img: "rek.svg"
    }, {
      title: "Снятий клеща + обработка раны",
      animal: "dog",
      price: "100",
      time: "15 мин",
      category: "additional",
      text: "",
      img: "tick.svg"
    }, {
      title: "Агрессивность животного",
      animal: "dog",
      price: "500 - 1000",
      time: "",
      category: "additional",
      text: "на усмотрение мастера",
      img: "bad-animal.svg"
    }],
    cats: [{
      title: "Стрижка",
      animal: "cat",
      price: "от 850",
      time: "1 час",
      category: "wool",
      text: "",
      img: "barbershop.svg"
    }, {
      title: "Экспресс линька",
      animal: "cat",
      price: "1300",
      time: "1 час",
      category: "wool",
      text: "",
      img: "express-linka.svg"
    }, {
      title: "Окрашивание шерсти",
      animal: "cat",
      price: "от 1500",
      time: "",
      category: "wool",
      text: "Дополнительная услуга",
      img: "color-wool.svg"
    }, {
      title: "Расчёсывание колтунов",
      animal: "cat",
      price: "600",
      time: "",
      category: "wool",
      text: "В присутствии хозяина",
      img: "comb-kolts.svg"
    }, {
      title: "Сбривание колтунов",
      animal: "cat",
      price: "200 - 500",
      time: "",
      category: "wool",
      text: "В присутствии хозяина",
      img: "trim-kolt.svg"
    }, {
      title: "Гигиена-комплекс",
      animal: "cat",
      price: "1500",
      time: "",
      category: "hygiene",
      text: "Стрижка когтей,чистка ушей,ультразвуковая чистка зубов,чистка анальных желёз",
      img: "wash-plus.svg"
    }, {
      title: "Мытьё",
      animal: "cat",
      price: "250",
      time: "30 мин",
      category: "hygiene",
      text: "",
      img: "wash.svg"
    }, {
      title: "Стрижка под машику",
      price: "0",
      animal: "cat",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "wool"
    }, {
      title: "Подстригание когтей",
      price: "от 200",
      animal: "cat",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "claw"
    }, {
      title: "Подпил когтей",
      animal: "cat",
      price: "400 - 600",
      time: "1 час",
      category: "claw",
      text: "",
      img: "foot.svg"
    }, {
      title: "Модельная стрижка",
      price: "300",
      animal: "cat",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "wool"
    }, {
      title: "Ультразвуковая чистка зубов",
      animal: "cat",
      price: "2500 - 4500",
      time: "1.5 часа",
      category: "tooth",
      text: "",
      img: "tooth.svg"
    }, {
      title: "Снятие зубного камня и налета",
      animal: "cat",
      price: "1000 - 1500",
      time: "30 мин",
      category: "tooth",
      text: "механически",
      img: "tooth.svg"
    }, {
      title: "Чистка зубов пастой",
      animal: "cat",
      price: "350 - 550",
      time: "30 мин",
      category: "tooth",
      text: "",
      img: "toothpaste.svg"
    }, {
      title: "Полировка зубов пастой",
      animal: "cat",
      price: "1000",
      time: "1 час",
      category: "tooth",
      text: "",
      img: "toothpaste.svg"
    }],
    additional: [{
      title: "Чистка параанальных желез",
      price: "300",
      animal: "",
      time: "1",
      img: "spa.svg",
      text: "",
      category: "additional"
    }, {
      title: "Выведение блох и удаление клещей",
      animal: "",
      price: "300",
      time: "",
      category: "additional",
      text: "Дополнительная услуга",
      img: "tick.svg"
    }, {
      title: "Помощь второго грумера",
      animal: "",
      price: "600",
      time: "",
      category: "additional",
      text: "Дополнительная услуга",
      img: "help-grummer.svg"
    }, {
      title: "Сушка",
      price: "0",
      animal: "",
      time: "0",
      img: "spa.svg",
      text: "",
      category: "additional"
    } // {
    //   title: "Зоотакси",
    //   animal: "",
    //   price: "от 300",
    //   time: "",
    //   category: "additional",
    //   text: "заберем и привезем обратно после процедуры",
    //   img: "zootaxi.svg",
    // },
    ]
  },
  // servicesList: [
  // ],
  ourWorks: ["slide_1.jpg", "slide_2.jpg", "slide_3.jpg", "slide_4.jpg", "slide_5.jpg", "slide_6.jpg", "slide_7.jpg"],
  feedbacks: [{
    img: "ava-1.jpg",
    text: "Большое спасибо мастеру Марии. Бережно и профессионально выполнила свою работу. Быстро нашла подход к моей собаке со сложным характером :)"
  }, {
    img: "ava-1.jpg",
    text: "Раньше ходила в другие салоны, но только в этом салоне девочки поняли, что я хочу. Вожу 2х собак и кота, все довольны! Всегда качественная работа"
  }, {
    img: "ava-1.jpg",
    text: "Наконец мы нашли то что искали ! И в общении и в отношении и в сервисе и в качестве работы ! Во всем! Наша крошечная йорочка приведена в порядок специалистами салона безупречно!!! Это ювелирная работа!наша Симка весом 1,5 кг, то есть очень хрупкая, но подвижная девица теперь выглядит аккуратно и вот прям как нужно было !!!! Только в этот салон ! Всегда! Всем будем советовать только к ним! Девочкам терпения в работе и больше клиентов !"
  }, {
    img: "ava-1.jpg",
    text: "Хожу в этот салон с самого открытия, привожу сразу трёх собак. Очень профессиональные Мастера, удобное расположение салона. Девочки спасибо вам огромное за красоту!!!"
  }, {
    img: "ava-1.jpg",
    text: "Приходили на вычесывание. Мастер Елена смогла привести в порядок огромную дворнягу, которая сначала боялась всего, помыть и вычесать шерсть. Собака первый раз в салоне. Благодаря Елене собака к концу процедуры была спокойна, чистая, вычесанная и красивая. Ушла довольная!"
  }, {
    img: "ava-1.jpg",
    text: "Моего старичка привели в порядок и сделали настоящее собачье счастье - он начал чувствовать прикосновения и ласку хозяйских рук. И вся эта красота благодаря моей волшебнице Елене и ее салону. Несколько часов высококвалифицированные грумеры трудились не покладая ножниц✂️ над сбитой до валенка шерстью. Чем только его не пытались стричь🤪🙈 Честно скажу, огромные ножницы для плотной ткани, не брали его шерсть, когда я пыталась обкрамсать Лучика дома. Мозоли...нервы...куча времени, а собака так и ходила с колтунами.... Шерсть настолько сложная, забитая, что полностью закрыла слуховой канал и спровоцировала боль ушек😭 Он не давался не мне, не ветеринару....я понятия не имею, как девочки выстрегли шерсть в ушках..... В общем огромное человеческое и сабачье спасибо♥️"
  }, {
    img: "ava-1.jpg",
    text: "Хочу выразить благодарность грумерам салона ГрумЛета 🤗 сегодня мы почистили зубы нашей долматинке. Результат превосходный. Без наркоза, без боли моя собака доверилась мастерам. Так же нас намыли и подстригла ноготки. Ещё раз огромное спасибо. Вся работа выполнена профессионально и оперативно. 👍"
  }, {
    img: "ava-1.jpg",
    text: "Не в первый раз посещаем данный салон. Сотрудники всегда вежливые. Приходила когда у лайки начиналась сезонная линька. У тех кто лайки или хаски, маламуты, самоеды и т.д. поймут что шерсть в такие дни просто везде. Его в салоне вымывают, вычесывают и выдувают, он по объему сразу становить легче, лишней шерсти нет, да и машина с квартирой сразу становиться чище. Так что во время линек мы там) Недавно возила щенка малинуа на помывку. Мылась она в салоне и выдувалась в первый раз. Работники салона конечно намучились с ней, щенок вел себя не очень хорошо, но они справились и закончили всю процедуру) Вышли оба чистенькие, вкусно пахнущие и с блестящей шерсткой) Приходить сюда будем еще однозначно."
  }]
};
;
"use strict";

grummer.gSelect = {
  open($select) {
    $select.children("._options").first().slideDown(300);
    $select.toggleClass("opened");
    $(window).on("click", () => {
      this.close($select);
    });
    $select.on("click", e => {
      e.stopPropagation();
    });
  },

  close($select) {
    $select.children("._options").first().slideUp(300);
    $select.toggleClass("opened");
    $(window).off("click");
    $select.off("click");
    $select.find("._dog-select").addClass("hide");
    $select.find("span._selected-text").removeClass("hide");
  },

  toggle(instance) {
    let $select = $(instance).parents("._select");

    if (!$select.hasClass("opened")) {
      this.open($select);
    } else {
      this.close($select);
    }
  },

  setName($select, name) {
    $select.find("._selected-text").html(name);
  },

  setInputValue($select, value) {
    $select.find("._select-input").val(value).trigger("change");
  },

  selectItem(instance) {
    const $inst = $(instance);
    const $select = $inst.parents("._select");
    $select.removeClass("error");
    $select.find("._option").removeClass("active");
    $inst.addClass("active");
    const name = $inst.text();
    const selectedValue = $inst.data("value");
    this.setName($select, name);
    this.setInputValue($select, selectedValue);
    this.close($select);
  }

};
;
'use strict';

grummer.header = {
  init() {
    this.dataInit();
    this.linksTemplating(this.navList);
    this.linksTemplating(this.mobileMenuLinks);
    this.changeBg();
  },

  dataInit() {
    this.backgrounds = ['1_dog.jpg', '2_cat.jpg', '3_dog.jpg', '4_cat.jpg'];
    this.headerBg = $('div.header__bg');
    this.links = [{
      title: 'О салоне',
      value: 'about'
    }, {
      title: 'Услуги',
      value: 'services'
    }, {
      title: 'Наши работы',
      value: 'ourworks'
    }, {
      title: 'Акции',
      value: 'promo'
    }, {
      title: 'Отзывы',
      value: 'feedbacks'
    }, {
      title: 'Контакты',
      value: 'footer'
    }];
    this.navList = $('.header__links');
    this.mobileMenuLinks = $('.header__mobile-menu-links');
    this.linksTemplate = $.trim($('#header__links').html());
    this.menu = $('.header__mobile-menu');
    this.burger = $('.header__burger');
  },

  changeBg() {
    let count = 1;
    const timeFade = 1000;
    const timeChange = 9000;
    const arrLen = this.backgrounds.length;
    return setInterval(() => {
      if (count > arrLen - 1) count = 0;
      this.headerBg.fadeOut(timeFade, () => {
        this.headerBg.css({
          background: `url(img/main/${this.backgrounds[count]}) bottom / cover no-repeat`
        });
        this.headerBg.fadeIn(timeFade);
        count++;
      });
    }, timeChange);
  },

  linksTemplating(list) {
    const isMobile = list.hasClass('header__mobile-menu-links');
    let frag = '';
    $.each(this.links, (index, obj) => {
      frag += this.linksTemplate.replace(/{{title}}/ig, obj.title).replace(/{{value}}/ig, obj.value).replace(/{{isMobile}}/ig, isMobile);
    });
    list.append(frag);
  },

  toggleMenu() {
    this.menu.slideToggle(300);
    this.burger.toggleClass('active');
    $('body').css('overflow') === 'visible' ? $('body').css({
      overflow: 'hidden'
    }) : $('body').css({
      overflow: 'auto'
    });
  }

};
"use strict";

grummer.services = {
  sliderList: [],
  sliderTemplate: null,
  currentServicesList: [],
  currentCategory: null,

  init() {
    // this.breed = "";
    this.setCategories(grummer.categories);
    this.sliderList = $(".services__slider");
    this.sliderTemplate = $.trim($("#services__slider-temp").html());
    this.setSlides(null, this.sliderList, this.sliderTemplate);
    this.initSlider();
  },

  setCategories(arr) {
    const list = $(".services__categories .g-select__items");
    const template = $.trim($(".services__categories .services__filter-temp").html());
    let frag = "";
    arr.forEach(item => {
      frag += template.replace(/{{title}}/gi, item.title).replace(/{{value}}/gi, item.value); // .replace(/{{icon}}/gi, item.icon);
    });
    list.append(frag);
  },

  initSlider() {
    $(".services__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      // prevArrow: '<div class="prev-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
      // nextArrow: '<div class="next-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
      prevArrow: `<div class="prev-arrow slider-arrow">${arrow}</div>`,
      nextArrow: `<div class="next-arrow slider-arrow">${arrow}</div>`,
      responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }]
    });
  },

  setSlides(arr, list, template) {
    list.html("");
    let frag = "";
    let slides = arr ? arr : null;

    if (!slides) {
      if (grummer.animal) {
        this.currentServicesList = [...grummer.servicesList[grummer.animal], ...grummer.servicesList.additional];
      } else {
        this.currentServicesList = Object.keys(grummer.servicesList).reduce((acc, key) => {
          return [...acc, ...grummer.servicesList[key]];
        }, []);
      }

      slides = this.currentServicesList;
    }

    if (this.currentCategory) {
      slides = slides.filter(service => {
        return service.category === this.currentCategory;
      });
    }

    slides.forEach(slide => {
      frag += template.replace(/{{title}}/gi, slide.title).replace(/{{text}}/gi, slide.text).replace(/{{price}}/gi, slide.price).replace(/{{time}}/gi, slide.time).replace(/{{img}}/gi, slide.img);
    });
    list.append(frag);
  },

  setBreed(val) {
    this.breed = val;
  },

  filter(arr) {
    this.setSlides(arr, this.sliderList, this.sliderTemplate);
    this.sliderList.removeClass("slick-initialized slick-slider");
    this.initSlider();
  },

  filterServices(val, type = "category") {
    if (!val) {
      return this.currentServicesList;
    }

    return this.currentServicesList.filter(service => service[type] === val);
  },

  filterServicesByBreed(el, animal = null) {
    const $el = $(el);
    if ($el.hasClass("active")) return;
    $el.parent().children("div").removeClass("active");
    $el.addClass("active");
    grummer.animal = animal;
    this.filter();
  },

  clearBreedFilter(el, e) {
    e.stopPropagation();
    $(el).parent().removeClass("active");
    grummer.animal = null;
    this.filter();
  },

  filterServicesByCategory(category) {
    this.currentCategory = category;
    const filteredServicesByCategory = this.filterServices(category);

    if (filteredServicesByCategory.length === this.currentServicesList.length) {
      this.cleanFilter();
    } else {
      // this.showCleaner();
      $('.services__categories._select').addClass('active');
    }

    this.filter([...filteredServicesByCategory, ...grummer.servicesList.additional]);
  },

  cleanFilter() {
    this.currentCategory = null;
    this.filter(); // this.hideCleaner();

    const $categories = $(".services__categories");
    $categories.find("._selected-text").html("Выберите категорию");
    $categories.find("._option").removeClass("active");
    $('.services__categories._select').removeClass('active');
  },

  // showCleaner() {
  //   $(".services__filters-cleaner").addClass("active");
  // },
  // hideCleaner() {
  //   $(".services__filters-cleaner").removeClass("active");
  // },
  openPopup(title) {
    const service = this.currentServicesList.find(obj => {
      return obj.title === title;
    });
    const breed = grummer.breeds.find(obj => {
      return obj.value === this.breed;
    });
    grummer.currentServices = [service];
    if (breed) grummer.currentBreed = breed.title;
    grummer.popupMain.open();
  }

};
;
grummer.ourworks = {
  init() {
    this.nav = $('.ourworks__nav');
    this.title = $('.ourworks__title');
    this.text = $('.ourworks__text');
    this.initSlides();
    this.initSlider(); // this.changeSlide(0)
    // this.initNavs()
  },

  initSlides() {
    const template = $.trim($('#ourworks__slider-temp').html());
    const html = grummer.ourWorks.reduce((acc, img) => {
      return acc += template.replace(/{{img}}/ig, img);
    }, '');
    $('.ourworks__slider').html(html);
  },

  initSlider() {
    this.slider = $('.ourworks__slider');
    this.slider.on('init', this.moveArrows);
    this.slider.slick({
      mobileFirst: true,
      infinite: true,
      dots: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: `<div class="prev-arrow slider-arrow">${arrow}</div>`,
      nextArrow: `<div class="next-arrow slider-arrow">${arrow}</div>`,
      responsive: [{
        breakpoint: 768,
        settings: {
          variableWidth: true
        }
      }]
    });
    this.slider.on('afterChange', this.moveArrows);
    this.slider.on('setPosition', this.moveArrows);
  },

  moveArrows() {
    if (window.innerWidth < 1024) {
      $('.ourworks .prev-arrow').css('left', 12);
      $('.ourworks .next-arrow').css('right', 12);
      return;
    }

    setTimeout(() => {
      const CurrentSlide = $('.ourworks .slick-active.slick-center').get(0);
      console.log('CurrentSlide', CurrentSlide);
      const slideData = CurrentSlide.getBoundingClientRect();
      $('.ourworks .prev-arrow').css('left', slideData.left - 25);
      $('.ourworks .next-arrow').css('right', slideData.right - slideData.width - 25);
    }, 0);
  }

};
grummer.questions = {
  init() {
    this.$spoiler = $('.questions__spoiler');
    this.items = this.$spoiler.find('.questions__item');
  },

  toggleText(el) {
    const $el = $(el);
    const $parent = $el.parent('.questions__item');
    const $text = $el.siblings('.questions__item-text');
    $parent.hasClass('active') ? this.slideUp($parent, $text) : this.slideDown($parent, $text);
  },

  slideUp($parent, $text) {
    $parent.removeClass('active');
    $text.slideUp(300);
  },

  slideDown($parent, $text) {
    this.items.removeClass('active').find('.questions__item-text').slideUp(300);
    $parent.addClass('active');
    $text.slideDown(300);
  }

};
grummer.feedbacks = {
  init() {
    this.initSlides();
    this.initSlider();
  },

  initSlides() {
    const template = $.trim($('#feedbacks__slider-temp').html());
    const html = grummer.feedbacksList.reduce((acc, item) => {
      return acc += template.replace(/{{img}}/ig, item.img).replace(/{{text}}/ig, item.text);
    }, '');
    $('.feedbacks__slider').html(html);
  },

  initSlider() {
    $('.feedbacks__slider').slick({
      mobileFirst: true,
      infinite: false,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          // prevArrow: `<div class="prev-arrow slider-arrow"><img src="img/arrow.svg"/></div>`,
          // nextArrow: '<div class="next-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
          prevArrow: `<div class="prev-arrow slider-arrow">${arrow}</div>`,
          nextArrow: `<div class="next-arrow slider-arrow">${arrow}</div>`
        }
      }]
    });
  }

};
grummer.callback = {
  init() {
    $("._input-phone").mask("+7(999)999-99-99");
  },

  async submit(form, event) {
    event.preventDefault();
    const validator = new Validator(form);
    const v = validator.validate();
    if (!v) return;
    const res = await grummer.tlg.sendCallBack(form);
    console.log(res);
    if (res) setTimeout(() => {
      grummer.popup.open('_popup-ok');
      form.reset();
    }, 100);
  }

};

grummer.init = function () {
  this.store.init();
  $("._input-phone").mask("+7(999)999-99-99");
  this.setBreeds(grummer.breeds);
  this.tlg.init();
  this.popup.init(); // this.popupServices.init()

  this.header.init();
  this.services.init();
  this.ourworks.init();
  this.questions.init();
  this.feedbacks.init(); // grummer.popupMain.init()
};

$(document).ready(() => {
  grummer.init();
});