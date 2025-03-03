// node_modules/preact/dist/preact.module.js
var n;
var l;
var t;
var u;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n3, l5) {
  for (var t4 in l5) n3[t4] = l5[t4];
  return n3;
}
function g(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l5, t4, u5) {
  var i5, r4, o4, e4 = {};
  for (o4 in t4) "key" == o4 ? i5 = t4[o4] : "ref" == o4 ? r4 = t4[o4] : e4[o4] = t4[o4];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : u5), "function" == typeof l5 && null != l5.defaultProps) for (o4 in l5.defaultProps) void 0 === e4[o4] && (e4[o4] = l5.defaultProps[o4]);
  return m(l5, e4, i5, r4, null);
}
function m(n3, u5, i5, r4, o4) {
  var e4 = { type: n3, props: u5, key: i5, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++t : o4, __i: -1, __u: 0 };
  return null == o4 && null != l.vnode && l.vnode(e4), e4;
}
function k(n3) {
  return n3.children;
}
function x(n3, l5) {
  this.props = n3, this.context = l5;
}
function S(n3, l5) {
  if (null == l5) return n3.__ ? S(n3.__, n3.__i + 1) : null;
  for (var t4; l5 < n3.__k.length; l5++) if (null != (t4 = n3.__k[l5]) && null != t4.__e) return t4.__e;
  return "function" == typeof n3.type ? S(n3) : null;
}
function C(n3) {
  var l5, t4;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++) if (null != (t4 = n3.__k[l5]) && null != t4.__e) {
      n3.__e = n3.__c.base = t4.__e;
      break;
    }
    return C(n3);
  }
}
function M(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n3, t4, u5, r4, o4, f5, c4, s5 = 1; i.length; ) i.length > s5 && i.sort(e), n3 = i.shift(), s5 = i.length, n3.__d && (u5 = void 0, o4 = (r4 = (t4 = n3).__v).__e, f5 = [], c4 = [], t4.__P && ((u5 = w({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(u5), O(t4.__P, u5, r4, t4.__n, t4.__P.namespaceURI, 32 & r4.__u ? [o4] : null, f5, null == o4 ? S(r4) : o4, !!(32 & r4.__u), c4), u5.__v = r4.__v, u5.__.__k[u5.__i] = u5, z(f5, u5, c4), u5.__e != o4 && C(u5)));
  $.__r = 0;
}
function I(n3, l5, t4, u5, i5, r4, o4, e4, f5, c4, s5) {
  var a4, h4, y5, d4, w5, g4, _4 = u5 && u5.__k || v, m4 = l5.length;
  for (f5 = P(t4, l5, _4, f5, m4), a4 = 0; a4 < m4; a4++) null != (y5 = t4.__k[a4]) && (h4 = -1 === y5.__i ? p : _4[y5.__i] || p, y5.__i = a4, g4 = O(n3, y5, h4, i5, r4, o4, e4, f5, c4, s5), d4 = y5.__e, y5.ref && h4.ref != y5.ref && (h4.ref && q(h4.ref, null, y5), s5.push(y5.ref, y5.__c || d4, y5)), null == w5 && null != d4 && (w5 = d4), 4 & y5.__u || h4.__k === y5.__k ? f5 = A(y5, f5, n3) : "function" == typeof y5.type && void 0 !== g4 ? f5 = g4 : d4 && (f5 = d4.nextSibling), y5.__u &= -7);
  return t4.__e = w5, f5;
}
function P(n3, l5, t4, u5, i5) {
  var r4, o4, e4, f5, c4, s5 = t4.length, a4 = s5, h4 = 0;
  for (n3.__k = new Array(i5), r4 = 0; r4 < i5; r4++) null != (o4 = l5[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? (f5 = r4 + h4, (o4 = n3.__k[r4] = "string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? m(null, o4, null, null, null) : d(o4) ? m(k, { children: o4 }, null, null, null) : void 0 === o4.constructor && o4.__b > 0 ? m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : o4).__ = n3, o4.__b = n3.__b + 1, e4 = null, -1 !== (c4 = o4.__i = L(o4, t4, f5, a4)) && (a4--, (e4 = t4[c4]) && (e4.__u |= 2)), null == e4 || null === e4.__v ? (-1 == c4 && (i5 > s5 ? h4-- : i5 < s5 && h4++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f5 && (c4 == f5 - 1 ? h4-- : c4 == f5 + 1 ? h4++ : (c4 > f5 ? h4-- : h4++, o4.__u |= 4))) : n3.__k[r4] = null;
  if (a4) for (r4 = 0; r4 < s5; r4++) null != (e4 = t4[r4]) && 0 == (2 & e4.__u) && (e4.__e == u5 && (u5 = S(e4)), B(e4, e4));
  return u5;
}
function A(n3, l5, t4) {
  var u5, i5;
  if ("function" == typeof n3.type) {
    for (u5 = n3.__k, i5 = 0; u5 && i5 < u5.length; i5++) u5[i5] && (u5[i5].__ = n3, l5 = A(u5[i5], l5, t4));
    return l5;
  }
  n3.__e != l5 && (l5 && n3.type && !t4.contains(l5) && (l5 = S(n3)), t4.insertBefore(n3.__e, l5 || null), l5 = n3.__e);
  do {
    l5 = l5 && l5.nextSibling;
  } while (null != l5 && 8 == l5.nodeType);
  return l5;
}
function L(n3, l5, t4, u5) {
  var i5, r4, o4 = n3.key, e4 = n3.type, f5 = l5[t4];
  if (null === f5 && null == n3.key || f5 && o4 == f5.key && e4 === f5.type && 0 == (2 & f5.__u)) return t4;
  if (u5 > (null != f5 && 0 == (2 & f5.__u) ? 1 : 0)) for (i5 = t4 - 1, r4 = t4 + 1; i5 >= 0 || r4 < l5.length; ) {
    if (i5 >= 0) {
      if ((f5 = l5[i5]) && 0 == (2 & f5.__u) && o4 == f5.key && e4 === f5.type) return i5;
      i5--;
    }
    if (r4 < l5.length) {
      if ((f5 = l5[r4]) && 0 == (2 & f5.__u) && o4 == f5.key && e4 === f5.type) return r4;
      r4++;
    }
  }
  return -1;
}
function T(n3, l5, t4) {
  "-" == l5[0] ? n3.setProperty(l5, null == t4 ? "" : t4) : n3[l5] = null == t4 ? "" : "number" != typeof t4 || y.test(l5) ? t4 : t4 + "px";
}
function j(n3, l5, t4, u5, i5) {
  var r4;
  n: if ("style" == l5) if ("string" == typeof t4) n3.style.cssText = t4;
  else {
    if ("string" == typeof u5 && (n3.style.cssText = u5 = ""), u5) for (l5 in u5) t4 && l5 in t4 || T(n3.style, l5, "");
    if (t4) for (l5 in t4) u5 && t4[l5] === u5[l5] || T(n3.style, l5, t4[l5]);
  }
  else if ("o" == l5[0] && "n" == l5[1]) r4 = l5 != (l5 = l5.replace(f, "$1")), l5 = l5.toLowerCase() in n3 || "onFocusOut" == l5 || "onFocusIn" == l5 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + r4] = t4, t4 ? u5 ? t4.t = u5.t : (t4.t = c, n3.addEventListener(l5, r4 ? a : s, r4)) : n3.removeEventListener(l5, r4 ? a : s, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i5) l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && "popover" != l5 && l5 in n3) try {
      n3[l5] = null == t4 ? "" : t4;
      break n;
    } catch (n4) {
    }
    "function" == typeof t4 || (null == t4 || false === t4 && "-" != l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, "popover" == l5 && 1 == t4 ? "" : t4));
  }
}
function F(n3) {
  return function(t4) {
    if (this.l) {
      var u5 = this.l[t4.type + n3];
      if (null == t4.u) t4.u = c++;
      else if (t4.u < u5.t) return;
      return u5(l.event ? l.event(t4) : t4);
    }
  };
}
function O(n3, t4, u5, i5, r4, o4, e4, f5, c4, s5) {
  var a4, h4, p5, v4, y5, _4, m4, b3, S2, C3, M2, $2, P2, A4, H, L2, T3, j3 = t4.type;
  if (void 0 !== t4.constructor) return null;
  128 & u5.__u && (c4 = !!(32 & u5.__u), o4 = [f5 = t4.__e = u5.__e]), (a4 = l.__b) && a4(t4);
  n: if ("function" == typeof j3) try {
    if (b3 = t4.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a4 = j3.contextType) && i5[a4.__c], M2 = a4 ? C3 ? C3.props.value : a4.__ : i5, u5.__c ? m4 = (h4 = t4.__c = u5.__c).__ = h4.__E : (S2 ? t4.__c = h4 = new j3(b3, M2) : (t4.__c = h4 = new x(b3, M2), h4.constructor = j3, h4.render = D), C3 && C3.sub(h4), h4.props = b3, h4.state || (h4.state = {}), h4.context = M2, h4.__n = i5, p5 = h4.__d = true, h4.__h = [], h4._sb = []), S2 && null == h4.__s && (h4.__s = h4.state), S2 && null != j3.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = w({}, h4.__s)), w(h4.__s, j3.getDerivedStateFromProps(b3, h4.__s))), v4 = h4.props, y5 = h4.state, h4.__v = t4, p5) S2 && null == j3.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), S2 && null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
    else {
      if (S2 && null == j3.getDerivedStateFromProps && b3 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(b3, M2), !h4.__e && (null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(b3, h4.__s, M2) || t4.__v == u5.__v)) {
        for (t4.__v != u5.__v && (h4.props = b3, h4.state = h4.__s, h4.__d = false), t4.__e = u5.__e, t4.__k = u5.__k, t4.__k.some(function(n4) {
          n4 && (n4.__ = t4);
        }), $2 = 0; $2 < h4._sb.length; $2++) h4.__h.push(h4._sb[$2]);
        h4._sb = [], h4.__h.length && e4.push(h4);
        break n;
      }
      null != h4.componentWillUpdate && h4.componentWillUpdate(b3, h4.__s, M2), S2 && null != h4.componentDidUpdate && h4.__h.push(function() {
        h4.componentDidUpdate(v4, y5, _4);
      });
    }
    if (h4.context = M2, h4.props = b3, h4.__P = n3, h4.__e = false, P2 = l.__r, A4 = 0, S2) {
      for (h4.state = h4.__s, h4.__d = false, P2 && P2(t4), a4 = h4.render(h4.props, h4.state, h4.context), H = 0; H < h4._sb.length; H++) h4.__h.push(h4._sb[H]);
      h4._sb = [];
    } else do {
      h4.__d = false, P2 && P2(t4), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
    } while (h4.__d && ++A4 < 25);
    h4.state = h4.__s, null != h4.getChildContext && (i5 = w(w({}, i5), h4.getChildContext())), S2 && !p5 && null != h4.getSnapshotBeforeUpdate && (_4 = h4.getSnapshotBeforeUpdate(v4, y5)), L2 = a4, null != a4 && a4.type === k && null == a4.key && (L2 = N(a4.props.children)), f5 = I(n3, d(L2) ? L2 : [L2], t4, u5, i5, r4, o4, e4, f5, c4, s5), h4.base = t4.__e, t4.__u &= -161, h4.__h.length && e4.push(h4), m4 && (h4.__E = h4.__ = null);
  } catch (n4) {
    if (t4.__v = null, c4 || null != o4) if (n4.then) {
      for (t4.__u |= c4 ? 160 : 128; f5 && 8 == f5.nodeType && f5.nextSibling; ) f5 = f5.nextSibling;
      o4[o4.indexOf(f5)] = null, t4.__e = f5;
    } else for (T3 = o4.length; T3--; ) g(o4[T3]);
    else t4.__e = u5.__e, t4.__k = u5.__k;
    l.__e(n4, t4, u5);
  }
  else null == o4 && t4.__v == u5.__v ? (t4.__k = u5.__k, t4.__e = u5.__e) : f5 = t4.__e = V(u5.__e, t4, u5, i5, r4, o4, e4, c4, s5);
  return (a4 = l.diffed) && a4(t4), 128 & t4.__u ? void 0 : f5;
}
function z(n3, t4, u5) {
  for (var i5 = 0; i5 < u5.length; i5++) q(u5[i5], u5[++i5], u5[++i5]);
  l.__c && l.__c(t4, n3), n3.some(function(t5) {
    try {
      n3 = t5.__h, t5.__h = [], n3.some(function(n4) {
        n4.call(t5);
      });
    } catch (n4) {
      l.__e(n4, t5.__v);
    }
  });
}
function N(n3) {
  return "object" != typeof n3 || null == n3 ? n3 : d(n3) ? n3.map(N) : w({}, n3);
}
function V(t4, u5, i5, r4, o4, e4, f5, c4, s5) {
  var a4, h4, v4, y5, w5, _4, m4, b3 = i5.props, k4 = u5.props, x3 = u5.type;
  if ("svg" == x3 ? o4 = "http://www.w3.org/2000/svg" : "math" == x3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a4 = 0; a4 < e4.length; a4++) if ((w5 = e4[a4]) && "setAttribute" in w5 == !!x3 && (x3 ? w5.localName == x3 : 3 == w5.nodeType)) {
      t4 = w5, e4[a4] = null;
      break;
    }
  }
  if (null == t4) {
    if (null == x3) return document.createTextNode(k4);
    t4 = document.createElementNS(o4, x3, k4.is && k4), c4 && (l.__m && l.__m(u5, e4), c4 = false), e4 = null;
  }
  if (null === x3) b3 === k4 || c4 && t4.data === k4 || (t4.data = k4);
  else {
    if (e4 = e4 && n.call(t4.childNodes), b3 = i5.props || p, !c4 && null != e4) for (b3 = {}, a4 = 0; a4 < t4.attributes.length; a4++) b3[(w5 = t4.attributes[a4]).name] = w5.value;
    for (a4 in b3) if (w5 = b3[a4], "children" == a4) ;
    else if ("dangerouslySetInnerHTML" == a4) v4 = w5;
    else if (!(a4 in k4)) {
      if ("value" == a4 && "defaultValue" in k4 || "checked" == a4 && "defaultChecked" in k4) continue;
      j(t4, a4, null, w5, o4);
    }
    for (a4 in k4) w5 = k4[a4], "children" == a4 ? y5 = w5 : "dangerouslySetInnerHTML" == a4 ? h4 = w5 : "value" == a4 ? _4 = w5 : "checked" == a4 ? m4 = w5 : c4 && "function" != typeof w5 || b3[a4] === w5 || j(t4, a4, w5, b3[a4], o4);
    if (h4) c4 || v4 && (h4.__html === v4.__html || h4.__html === t4.innerHTML) || (t4.innerHTML = h4.__html), u5.__k = [];
    else if (v4 && (t4.innerHTML = ""), I("template" === u5.type ? t4.content : t4, d(y5) ? y5 : [y5], u5, i5, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o4, e4, f5, e4 ? e4[0] : i5.__k && S(i5, 0), c4, s5), null != e4) for (a4 = e4.length; a4--; ) g(e4[a4]);
    c4 || (a4 = "value", "progress" == x3 && null == _4 ? t4.removeAttribute("value") : void 0 !== _4 && (_4 !== t4[a4] || "progress" == x3 && !_4 || "option" == x3 && _4 !== b3[a4]) && j(t4, a4, _4, b3[a4], o4), a4 = "checked", void 0 !== m4 && m4 !== t4[a4] && j(t4, a4, m4, b3[a4], o4));
  }
  return t4;
}
function q(n3, t4, u5) {
  try {
    if ("function" == typeof n3) {
      var i5 = "function" == typeof n3.__u;
      i5 && n3.__u(), i5 && null == t4 || (n3.__u = n3(t4));
    } else n3.current = t4;
  } catch (n4) {
    l.__e(n4, u5);
  }
}
function B(n3, t4, u5) {
  var i5, r4;
  if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current !== n3.__e || q(i5, null, t4)), null != (i5 = n3.__c)) {
    if (i5.componentWillUnmount) try {
      i5.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, t4);
    }
    i5.base = i5.__P = null;
  }
  if (i5 = n3.__k) for (r4 = 0; r4 < i5.length; r4++) i5[r4] && B(i5[r4], t4, u5 || "function" != typeof n3.type);
  u5 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function D(n3, l5, t4) {
  return this.constructor(n3, t4);
}
function E(t4, u5, i5) {
  var r4, o4, e4, f5;
  u5 == document && (u5 = document.documentElement), l.__ && l.__(t4, u5), o4 = (r4 = "function" == typeof i5) ? null : i5 && i5.__k || u5.__k, e4 = [], f5 = [], O(u5, t4 = (!r4 && i5 || u5).__k = _(k, null, [t4]), o4 || p, p, u5.namespaceURI, !r4 && i5 ? [i5] : o4 ? null : u5.firstChild ? n.call(u5.childNodes) : null, e4, !r4 && i5 ? i5 : o4 ? o4.__e : u5.firstChild, r4, f5), z(e4, t4, f5);
}
n = v.slice, l = { __e: function(n3, l5, t4, u5) {
  for (var i5, r4, o4; l5 = l5.__; ) if ((i5 = l5.__c) && !i5.__) try {
    if ((r4 = i5.constructor) && null != r4.getDerivedStateFromError && (i5.setState(r4.getDerivedStateFromError(n3)), o4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, u5 || {}), o4 = i5.__d), o4) return i5.__E = i5;
  } catch (l6) {
    n3 = l6;
  }
  throw n3;
} }, t = 0, u = function(n3) {
  return null != n3 && null == n3.constructor;
}, x.prototype.setState = function(n3, l5) {
  var t4;
  t4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n3 && (n3 = n3(w({}, t4), this.props)), n3 && w(t4, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), M(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l5) {
  return n3.__v.__b - l5.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n3, t4) {
  c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
  var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n3 >= u5.__.length && u5.__.push({}), u5.__[n3];
}
function y2(n3, u5) {
  var i5 = p2(t2++, 3);
  !c2.__s && C2(i5.__H, u5) && (i5.__ = n3, i5.u = u5, r2.__H.__h.push(i5));
}
function A2(n3) {
  return o2 = 5, T2(function() {
    return { current: n3 };
  }, []);
}
function T2(n3, r4) {
  var u5 = p2(t2++, 7);
  return C2(u5.__H, r4) && (u5.__ = n3(), u5.__H = r4, u5.__h = n3), u5.__;
}
function j2() {
  for (var n3; n3 = f2.shift(); ) if (n3.__P && n3.__H) try {
    n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
  } catch (t4) {
    n3.__H.__h = [], c2.__e(t4, n3.__v);
  }
}
c2.__b = function(n3) {
  r2 = null, e2 && e2(n3);
}, c2.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
}, c2.__r = function(n3) {
  a2 && a2(n3), t2 = 0;
  var i5 = (r2 = n3.__c).__H;
  i5 && (u2 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
  })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n3) {
  v2 && v2(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n4) {
    n4.u && (n4.__H = n4.u), n4.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B2(n5);
      });
    } catch (r4) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c2.__e(r4, n4.__v);
    }
  }), l2 && l2(n3, t4);
}, c2.unmount = function(n3) {
  m2 && m2(n3);
  var t4, r4 = n3.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n4) {
    try {
      z2(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r4.__H = void 0, t4 && c2.__e(t4, r4.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n3) {
  var t4, r4 = function() {
    clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u5 = setTimeout(r4, 100);
  k2 && (t4 = requestAnimationFrame(r4));
}
function z2(n3) {
  var t4 = r2, u5 = n3.__c;
  "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t4;
}
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
    return t5 !== n3[r4];
  });
}

// node_modules/@preact/signals-core/dist/signals-core.module.js
var i3 = Symbol.for("preact-signals");
function t3() {
  if (!(s3 > 1)) {
    var i5, t4 = false;
    while (void 0 !== h2) {
      var r4 = h2;
      h2 = void 0;
      f3++;
      while (void 0 !== r4) {
        var o4 = r4.o;
        r4.o = void 0;
        r4.f &= -3;
        if (!(8 & r4.f) && c3(r4)) try {
          r4.c();
        } catch (r5) {
          if (!t4) {
            i5 = r5;
            t4 = true;
          }
        }
        r4 = o4;
      }
    }
    f3 = 0;
    s3--;
    if (t4) throw i5;
  } else s3--;
}
function r3(i5) {
  if (s3 > 0) return i5();
  s3++;
  try {
    return i5();
  } finally {
    t3();
  }
}
var o3 = void 0;
var h2 = void 0;
var s3 = 0;
var f3 = 0;
var v3 = 0;
function e3(i5) {
  if (void 0 !== o3) {
    var t4 = i5.n;
    if (void 0 === t4 || t4.t !== o3) {
      t4 = { i: 0, S: i5, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t4 };
      if (void 0 !== o3.s) o3.s.n = t4;
      o3.s = t4;
      i5.n = t4;
      if (32 & o3.f) i5.S(t4);
      return t4;
    } else if (-1 === t4.i) {
      t4.i = 0;
      if (void 0 !== t4.n) {
        t4.n.p = t4.p;
        if (void 0 !== t4.p) t4.p.n = t4.n;
        t4.p = o3.s;
        t4.n = void 0;
        o3.s.n = t4;
        o3.s = t4;
      }
      return t4;
    }
  }
}
function u3(i5) {
  this.v = i5;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
}
u3.prototype.brand = i3;
u3.prototype.h = function() {
  return true;
};
u3.prototype.S = function(i5) {
  if (this.t !== i5 && void 0 === i5.e) {
    i5.x = this.t;
    if (void 0 !== this.t) this.t.e = i5;
    this.t = i5;
  }
};
u3.prototype.U = function(i5) {
  if (void 0 !== this.t) {
    var t4 = i5.e, r4 = i5.x;
    if (void 0 !== t4) {
      t4.x = r4;
      i5.e = void 0;
    }
    if (void 0 !== r4) {
      r4.e = t4;
      i5.x = void 0;
    }
    if (i5 === this.t) this.t = r4;
  }
};
u3.prototype.subscribe = function(i5) {
  var t4 = this;
  return E2(function() {
    var r4 = t4.value, n3 = o3;
    o3 = void 0;
    try {
      i5(r4);
    } finally {
      o3 = n3;
    }
  });
};
u3.prototype.valueOf = function() {
  return this.value;
};
u3.prototype.toString = function() {
  return this.value + "";
};
u3.prototype.toJSON = function() {
  return this.value;
};
u3.prototype.peek = function() {
  var i5 = o3;
  o3 = void 0;
  try {
    return this.value;
  } finally {
    o3 = i5;
  }
};
Object.defineProperty(u3.prototype, "value", { get: function() {
  var i5 = e3(this);
  if (void 0 !== i5) i5.i = this.i;
  return this.v;
}, set: function(i5) {
  if (i5 !== this.v) {
    if (f3 > 100) throw new Error("Cycle detected");
    this.v = i5;
    this.i++;
    v3++;
    s3++;
    try {
      for (var r4 = this.t; void 0 !== r4; r4 = r4.x) r4.t.N();
    } finally {
      t3();
    }
  }
} });
function d2(i5) {
  return new u3(i5);
}
function c3(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i) return true;
  return false;
}
function a3(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) {
    var r4 = t4.S.n;
    if (void 0 !== r4) t4.r = r4;
    t4.S.n = t4;
    t4.i = -1;
    if (void 0 === t4.n) {
      i5.s = t4;
      break;
    }
  }
}
function l3(i5) {
  var t4 = i5.s, r4 = void 0;
  while (void 0 !== t4) {
    var o4 = t4.p;
    if (-1 === t4.i) {
      t4.S.U(t4);
      if (void 0 !== o4) o4.n = t4.n;
      if (void 0 !== t4.n) t4.n.p = o4;
    } else r4 = t4;
    t4.S.n = t4.r;
    if (void 0 !== t4.r) t4.r = void 0;
    t4 = o4;
  }
  i5.s = r4;
}
function y3(i5) {
  u3.call(this, void 0);
  this.x = i5;
  this.s = void 0;
  this.g = v3 - 1;
  this.f = 4;
}
(y3.prototype = new u3()).h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === v3) return true;
  this.g = v3;
  this.f |= 1;
  if (this.i > 0 && !c3(this)) {
    this.f &= -2;
    return true;
  }
  var i5 = o3;
  try {
    a3(this);
    o3 = this;
    var t4 = this.x();
    if (16 & this.f || this.v !== t4 || 0 === this.i) {
      this.v = t4;
      this.f &= -17;
      this.i++;
    }
  } catch (i6) {
    this.v = i6;
    this.f |= 16;
    this.i++;
  }
  o3 = i5;
  l3(this);
  this.f &= -2;
  return true;
};
y3.prototype.S = function(i5) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.S(t4);
  }
  u3.prototype.S.call(this, i5);
};
y3.prototype.U = function(i5) {
  if (void 0 !== this.t) {
    u3.prototype.U.call(this, i5);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
    }
  }
};
y3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i5 = this.t; void 0 !== i5; i5 = i5.x) i5.t.N();
  }
};
Object.defineProperty(y3.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i5 = e3(this);
  this.h();
  if (void 0 !== i5) i5.i = this.i;
  if (16 & this.f) throw this.v;
  return this.v;
} });
function w3(i5) {
  return new y3(i5);
}
function _2(i5) {
  var r4 = i5.u;
  i5.u = void 0;
  if ("function" == typeof r4) {
    s3++;
    var n3 = o3;
    o3 = void 0;
    try {
      r4();
    } catch (t4) {
      i5.f &= -2;
      i5.f |= 8;
      g2(i5);
      throw t4;
    } finally {
      o3 = n3;
      t3();
    }
  }
}
function g2(i5) {
  for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) t4.S.U(t4);
  i5.x = void 0;
  i5.s = void 0;
  _2(i5);
}
function p3(i5) {
  if (o3 !== this) throw new Error("Out-of-order effect");
  l3(this);
  o3 = i5;
  this.f &= -2;
  if (8 & this.f) g2(this);
  t3();
}
function b(i5) {
  this.x = i5;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
}
b.prototype.c = function() {
  var i5 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t4 = this.x();
    if ("function" == typeof t4) this.u = t4;
  } finally {
    i5();
  }
};
b.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _2(this);
  a3(this);
  s3++;
  var i5 = o3;
  o3 = this;
  return p3.bind(this, i5);
};
b.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h2;
    h2 = this;
  }
};
b.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) g2(this);
};
function E2(i5) {
  var t4 = new b(i5);
  try {
    t4.c();
  } catch (i6) {
    t4.d();
    throw i6;
  }
  return t4.d.bind(t4);
}

// node_modules/@preact/signals/dist/signals.module.js
var s4;
var h3;
var l4;
var d3 = [];
var p4 = [];
E2(function() {
  s4 = this.N;
})();
function _3(i5, r4) {
  l[i5] = r4.bind(null, l[i5] || function() {
  });
}
function m3(i5) {
  if (l4) l4();
  l4 = i5 && i5.S();
}
function g3(i5) {
  var n3 = this, f5 = i5.data, o4 = useSignal(f5);
  o4.value = f5;
  var u5 = T2(function() {
    var i6 = n3, t4 = n3.__v;
    while (t4 = t4.__) if (t4.__c) {
      t4.__c.__$f |= 4;
      break;
    }
    var f6 = w3(function() {
      var i7 = o4.value.value;
      return 0 === i7 ? 0 : true === i7 ? "" : i7 || "";
    }), u6 = w3(function() {
      return !u(f6.value);
    }), c5 = E2(function() {
      this.N = A3;
      if (u6.value) {
        var n4 = f6.value;
        if (i6.base && 3 === i6.base.nodeType) i6.base.data = n4;
      }
    }), v5 = n3.__$u.d;
    n3.__$u.d = function() {
      c5();
      v5.call(this);
    };
    return [u6, f6];
  }, []), c4 = u5[0], v4 = u5[1];
  return c4.value ? v4.peek() : v4.value;
}
g3.displayName = "_st";
Object.defineProperties(u3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: g3 }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
_3("__b", function(i5, n3) {
  if ("string" == typeof n3.type) {
    var r4, t4 = n3.props;
    for (var f5 in t4) if ("children" !== f5) {
      var o4 = t4[f5];
      if (o4 instanceof u3) {
        if (!r4) n3.__np = r4 = {};
        r4[f5] = o4;
        t4[f5] = o4.peek();
      }
    }
  }
  i5(n3);
});
_3("__r", function(i5, n3) {
  m3();
  var r4, t4 = n3.__c;
  if (t4) {
    t4.__$f &= -2;
    if (void 0 === (r4 = t4.__$u)) t4.__$u = r4 = function(i6) {
      var n4;
      E2(function() {
        n4 = this;
      });
      n4.c = function() {
        t4.__$f |= 1;
        t4.setState({});
      };
      return n4;
    }();
  }
  h3 = t4;
  m3(r4);
  i5(n3);
});
_3("__e", function(i5, n3, r4, t4) {
  m3();
  h3 = void 0;
  i5(n3, r4, t4);
});
_3("diffed", function(i5, n3) {
  m3();
  h3 = void 0;
  var r4;
  if ("string" == typeof n3.type && (r4 = n3.__e)) {
    var t4 = n3.__np, f5 = n3.props;
    if (t4) {
      var o4 = r4.U;
      if (o4) for (var e4 in o4) {
        var u5 = o4[e4];
        if (void 0 !== u5 && !(e4 in t4)) {
          u5.d();
          o4[e4] = void 0;
        }
      }
      else {
        o4 = {};
        r4.U = o4;
      }
      for (var a4 in t4) {
        var c4 = o4[a4], v4 = t4[a4];
        if (void 0 === c4) {
          c4 = b2(r4, a4, v4, f5);
          o4[a4] = c4;
        } else c4.o(v4, f5);
      }
    }
  }
  i5(n3);
});
function b2(i5, n3, r4, t4) {
  var f5 = n3 in i5 && void 0 === i5.ownerSVGElement, o4 = d2(r4);
  return { o: function(i6, n4) {
    o4.value = i6;
    t4 = n4;
  }, d: E2(function() {
    this.N = A3;
    var r5 = o4.value.value;
    if (t4[n3] !== r5) {
      t4[n3] = r5;
      if (f5) i5[n3] = r5;
      else if (r5) i5.setAttribute(n3, r5);
      else i5.removeAttribute(n3);
    }
  }) };
}
_3("unmount", function(i5, n3) {
  if ("string" == typeof n3.type) {
    var r4 = n3.__e;
    if (r4) {
      var t4 = r4.U;
      if (t4) {
        r4.U = void 0;
        for (var f5 in t4) {
          var o4 = t4[f5];
          if (o4) o4.d();
        }
      }
    }
  } else {
    var e4 = n3.__c;
    if (e4) {
      var u5 = e4.__$u;
      if (u5) {
        e4.__$u = void 0;
        u5.d();
      }
    }
  }
  i5(n3);
});
_3("__h", function(i5, n3, r4, t4) {
  if (t4 < 3 || 9 === t4) n3.__$f |= 2;
  i5(n3, r4, t4);
});
x.prototype.shouldComponentUpdate = function(i5, n3) {
  var r4 = this.__$u, t4 = r4 && void 0 !== r4.s;
  for (var f5 in n3) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    var o4 = 2 & this.__$f;
    if (!(t4 || o4 || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(t4 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var e4 in i5) if ("__source" !== e4 && i5[e4] !== this.props[e4]) return true;
  for (var u5 in this.props) if (!(u5 in i5)) return true;
  return false;
};
function useSignal(i5) {
  return T2(function() {
    return d2(i5);
  }, []);
}
var y4 = "undefined" == typeof requestAnimationFrame ? setTimeout : requestAnimationFrame;
var k3 = function(i5) {
  queueMicrotask(function() {
    queueMicrotask(i5);
  });
};
function q2() {
  r3(function() {
    var i5;
    while (i5 = d3.shift()) s4.call(i5);
  });
}
function w4() {
  if (1 === d3.push(this)) (l.requestAnimationFrame || y4)(q2);
}
function x2() {
  r3(function() {
    var i5;
    while (i5 = p4.shift()) s4.call(i5);
  });
}
function A3() {
  if (1 === p4.push(this)) (l.requestAnimationFrame || k3)(x2);
}
function useSignalEffect(i5) {
  var n3 = A2(i5);
  n3.current = i5;
  y2(function() {
    return E2(function() {
      this.N = w4;
      return n3.current();
    });
  }, []);
}

// lib/istat.ts
var statsFormat = "0.2.1";
var newAggr = () => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var initStat = (time, wlid2, disc) => ({
  time,
  total: newAggr(),
  task: newAggr(),
  wlid: wlid2,
  disc
});
var initStats = () => ({
  format: statsFormat,
  stats: []
});
var addTaskToStat = (stat, item) => {
  stat.total[item.level]++;
  if (item.next < stat.time) stat.task[item.level]++;
};
var BLevelName = ["\u672A\u5B66", "\u65B0\u5B66", "\u4E2D\u7B49", "\u719F\u6089", "\u719F\u7EC3", "\u5B8C\u6210"];
var aggrToBAggr = (aggr) => [
  aggr[0],
  aggr[1] + aggr[2] + aggr[3] + aggr[4] + aggr[5],
  aggr[6] + aggr[7] + aggr[8] + aggr[9],
  aggr[10] + aggr[11] + aggr[12],
  aggr[13] + aggr[14],
  aggr[15]
];
var isBLevelIncludesLevel = (blevel2, level) => {
  switch (blevel2) {
    case 0:
      return level <= 0;
    case 1:
      return level >= 1 && level <= 5;
    case 2:
      return level >= 6 && level <= 9;
    case 3:
      return level >= 10 && level <= 12;
    case 4:
      return level >= 13 && level <= 14;
    case 5:
      return level >= 15;
    default:
      return true;
  }
};

// node_modules/@sholvoir/generic/http.js
var STATUS_CODE;
(function(STATUS_CODE2) {
  STATUS_CODE2[STATUS_CODE2["Continue"] = 100] = "Continue";
  STATUS_CODE2[STATUS_CODE2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  STATUS_CODE2[STATUS_CODE2["Processing"] = 102] = "Processing";
  STATUS_CODE2[STATUS_CODE2["EarlyHints"] = 103] = "EarlyHints";
  STATUS_CODE2[STATUS_CODE2["OK"] = 200] = "OK";
  STATUS_CODE2[STATUS_CODE2["Created"] = 201] = "Created";
  STATUS_CODE2[STATUS_CODE2["Accepted"] = 202] = "Accepted";
  STATUS_CODE2[STATUS_CODE2["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
  STATUS_CODE2[STATUS_CODE2["NoContent"] = 204] = "NoContent";
  STATUS_CODE2[STATUS_CODE2["ResetContent"] = 205] = "ResetContent";
  STATUS_CODE2[STATUS_CODE2["PartialContent"] = 206] = "PartialContent";
  STATUS_CODE2[STATUS_CODE2["MultiStatus"] = 207] = "MultiStatus";
  STATUS_CODE2[STATUS_CODE2["AlreadyReported"] = 208] = "AlreadyReported";
  STATUS_CODE2[STATUS_CODE2["IMUsed"] = 226] = "IMUsed";
  STATUS_CODE2[STATUS_CODE2["MultipleChoices"] = 300] = "MultipleChoices";
  STATUS_CODE2[STATUS_CODE2["MovedPermanently"] = 301] = "MovedPermanently";
  STATUS_CODE2[STATUS_CODE2["Found"] = 302] = "Found";
  STATUS_CODE2[STATUS_CODE2["SeeOther"] = 303] = "SeeOther";
  STATUS_CODE2[STATUS_CODE2["NotModified"] = 304] = "NotModified";
  STATUS_CODE2[STATUS_CODE2["UseProxy"] = 305] = "UseProxy";
  STATUS_CODE2[STATUS_CODE2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  STATUS_CODE2[STATUS_CODE2["PermanentRedirect"] = 308] = "PermanentRedirect";
  STATUS_CODE2[STATUS_CODE2["BadRequest"] = 400] = "BadRequest";
  STATUS_CODE2[STATUS_CODE2["Unauthorized"] = 401] = "Unauthorized";
  STATUS_CODE2[STATUS_CODE2["PaymentRequired"] = 402] = "PaymentRequired";
  STATUS_CODE2[STATUS_CODE2["Forbidden"] = 403] = "Forbidden";
  STATUS_CODE2[STATUS_CODE2["NotFound"] = 404] = "NotFound";
  STATUS_CODE2[STATUS_CODE2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  STATUS_CODE2[STATUS_CODE2["NotAcceptable"] = 406] = "NotAcceptable";
  STATUS_CODE2[STATUS_CODE2["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
  STATUS_CODE2[STATUS_CODE2["RequestTimeout"] = 408] = "RequestTimeout";
  STATUS_CODE2[STATUS_CODE2["Conflict"] = 409] = "Conflict";
  STATUS_CODE2[STATUS_CODE2["Gone"] = 410] = "Gone";
  STATUS_CODE2[STATUS_CODE2["LengthRequired"] = 411] = "LengthRequired";
  STATUS_CODE2[STATUS_CODE2["PreconditionFailed"] = 412] = "PreconditionFailed";
  STATUS_CODE2[STATUS_CODE2["ContentTooLarge"] = 413] = "ContentTooLarge";
  STATUS_CODE2[STATUS_CODE2["URITooLong"] = 414] = "URITooLong";
  STATUS_CODE2[STATUS_CODE2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  STATUS_CODE2[STATUS_CODE2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
  STATUS_CODE2[STATUS_CODE2["ExpectationFailed"] = 417] = "ExpectationFailed";
  STATUS_CODE2[STATUS_CODE2["Teapot"] = 418] = "Teapot";
  STATUS_CODE2[STATUS_CODE2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  STATUS_CODE2[STATUS_CODE2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  STATUS_CODE2[STATUS_CODE2["Locked"] = 423] = "Locked";
  STATUS_CODE2[STATUS_CODE2["FailedDependency"] = 424] = "FailedDependency";
  STATUS_CODE2[STATUS_CODE2["TooEarly"] = 425] = "TooEarly";
  STATUS_CODE2[STATUS_CODE2["UpgradeRequired"] = 426] = "UpgradeRequired";
  STATUS_CODE2[STATUS_CODE2["PreconditionRequired"] = 428] = "PreconditionRequired";
  STATUS_CODE2[STATUS_CODE2["TooManyRequests"] = 429] = "TooManyRequests";
  STATUS_CODE2[STATUS_CODE2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  STATUS_CODE2[STATUS_CODE2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  STATUS_CODE2[STATUS_CODE2["InternalServerError"] = 500] = "InternalServerError";
  STATUS_CODE2[STATUS_CODE2["NotImplemented"] = 501] = "NotImplemented";
  STATUS_CODE2[STATUS_CODE2["BadGateway"] = 502] = "BadGateway";
  STATUS_CODE2[STATUS_CODE2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  STATUS_CODE2[STATUS_CODE2["GatewayTimeout"] = 504] = "GatewayTimeout";
  STATUS_CODE2[STATUS_CODE2["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
  STATUS_CODE2[STATUS_CODE2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  STATUS_CODE2[STATUS_CODE2["InsufficientStorage"] = 507] = "InsufficientStorage";
  STATUS_CODE2[STATUS_CODE2["LoopDetected"] = 508] = "LoopDetected";
  STATUS_CODE2[STATUS_CODE2["NotExtended"] = 510] = "NotExtended";
  STATUS_CODE2[STATUS_CODE2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(STATUS_CODE || (STATUS_CODE = {}));
var requestInit = (body, method = "POST", headers) => {
  const h4 = new Headers(headers);
  if (!h4.has("Content-Type")) h4.append("Content-Type", "application/json");
  return {
    method,
    headers: h4,
    body: JSON.stringify(body)
  };
};
var getRes = async (path, params, init2) => {
  const url = new URL(path, location.href);
  if (params) {
    for (const [key, value] of Object.entries(params)) if (value) url.searchParams.append(key, value);
  }
  return await fetch(url, init2);
};
var getJson = async (path, params, init2) => {
  const res = await getRes(path, params, init2);
  if (!res.ok) return void 0;
  return await res.json();
};

// node_modules/@jsr/wok__djwt/node_modules/@jsr/std__encoding/_util.js
var encoder = new TextEncoder();
function getTypeName(value) {
  const type = typeof value;
  if (type !== "object") {
    return type;
  } else if (value === null) {
    return "null";
  } else {
    return value?.constructor?.name ?? "object";
  }
}
function validateBinaryLike(source) {
  if (typeof source === "string") {
    return encoder.encode(source);
  } else if (source instanceof Uint8Array) {
    return source;
  } else if (source instanceof ArrayBuffer) {
    return new Uint8Array(source);
  }
  throw new TypeError(`The input must be a Uint8Array, a string, or an ArrayBuffer. Received a value of the type ${getTypeName(source)}.`);
}

// node_modules/@jsr/wok__djwt/node_modules/@jsr/std__encoding/base64.js
var base64abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
];
function encodeBase64(data) {
  const uint8 = validateBinaryLike(data);
  let result = "";
  let i5;
  const l5 = uint8.length;
  for (i5 = 2; i5 < l5; i5 += 3) {
    result += base64abc[uint8[i5 - 2] >> 2];
    result += base64abc[(uint8[i5 - 2] & 3) << 4 | uint8[i5 - 1] >> 4];
    result += base64abc[(uint8[i5 - 1] & 15) << 2 | uint8[i5] >> 6];
    result += base64abc[uint8[i5] & 63];
  }
  if (i5 === l5 + 1) {
    result += base64abc[uint8[i5 - 2] >> 2];
    result += base64abc[(uint8[i5 - 2] & 3) << 4];
    result += "==";
  }
  if (i5 === l5) {
    result += base64abc[uint8[i5 - 2] >> 2];
    result += base64abc[(uint8[i5 - 2] & 3) << 4 | uint8[i5 - 1] >> 4];
    result += base64abc[(uint8[i5 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
function decodeBase64(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i5 = 0; i5 < size; i5++) {
    bytes[i5] = binString.charCodeAt(i5);
  }
  return bytes;
}

// node_modules/@jsr/wok__djwt/node_modules/@jsr/std__encoding/base64url.js
function addPaddingToBase64url(base64url) {
  if (base64url.length % 4 === 2) return base64url + "==";
  if (base64url.length % 4 === 3) return base64url + "=";
  if (base64url.length % 4 === 1) {
    throw new TypeError("Illegal base64url string!");
  }
  return base64url;
}
function convertBase64urlToBase64(b64url) {
  if (!/^[-_A-Z0-9]*?={0,2}$/i.test(b64url)) {
    throw new TypeError("Failed to decode base64url: invalid character");
  }
  return addPaddingToBase64url(b64url).replace(/\-/g, "+").replace(/_/g, "/");
}
function convertBase64ToBase64url(b64) {
  return b64.endsWith("=") ? b64.endsWith("==") ? b64.replace(/\+/g, "-").replace(/\//g, "_").slice(0, -2) : b64.replace(/\+/g, "-").replace(/\//g, "_").slice(0, -1) : b64.replace(/\+/g, "-").replace(/\//g, "_");
}
function encodeBase64Url(data) {
  return convertBase64ToBase64url(encodeBase64(data));
}
function decodeBase64Url(b64url) {
  return decodeBase64(convertBase64urlToBase64(b64url));
}

// node_modules/@jsr/wok__djwt/util.js
var encoder2 = new TextEncoder();
var decoder = new TextDecoder();
function isArray(input) {
  return Array.isArray(input);
}
function isDefined(input) {
  return input !== void 0;
}
function isNotNull(input) {
  return input !== null;
}
function isNotNumber(input) {
  return typeof input !== "number";
}
function isNotString(input) {
  return typeof input !== "string";
}
function isNull(input) {
  return input === null;
}
function isNumber(input) {
  return typeof input === "number";
}
function isNotTrue(input) {
  return input !== true;
}
function isObject(input) {
  return input !== null && typeof input === "object" && Array.isArray(input) === false;
}
function isString(input) {
  return typeof input === "string";
}
function isUndefined(input) {
  return input === void 0;
}

// node_modules/@jsr/wok__djwt/algorithm.js
function isHashedKeyAlgorithm(algorithm) {
  return isString(algorithm.hash?.name);
}
function isEcKeyAlgorithm(algorithm) {
  return isString(algorithm.namedCurve);
}
function verify(alg, key) {
  if (alg === "none") {
    if (isNotNull(key)) {
      throw new Error(`The alg '${alg}' does not allow a key.`);
    } else return true;
  } else {
    if (!key) throw new Error(`The alg '${alg}' demands a key.`);
    const keyAlgorithm = key.algorithm;
    const algAlgorithm = getAlgorithm(alg);
    if (keyAlgorithm.name === algAlgorithm.name) {
      if (isHashedKeyAlgorithm(keyAlgorithm)) {
        return keyAlgorithm.hash.name === algAlgorithm.hash.name;
      } else if (isEcKeyAlgorithm(keyAlgorithm)) {
        return keyAlgorithm.namedCurve === algAlgorithm.namedCurve;
      }
    }
    return false;
  }
}
function getAlgorithm(alg) {
  switch (alg) {
    case "HS256":
      return {
        hash: {
          name: "SHA-256"
        },
        name: "HMAC"
      };
    case "HS384":
      return {
        hash: {
          name: "SHA-384"
        },
        name: "HMAC"
      };
    case "HS512":
      return {
        hash: {
          name: "SHA-512"
        },
        name: "HMAC"
      };
    case "PS256":
      return {
        hash: {
          name: "SHA-256"
        },
        name: "RSA-PSS",
        saltLength: 256 >> 3
      };
    case "PS384":
      return {
        hash: {
          name: "SHA-384"
        },
        name: "RSA-PSS",
        saltLength: 384 >> 3
      };
    case "PS512":
      return {
        hash: {
          name: "SHA-512"
        },
        name: "RSA-PSS",
        saltLength: 512 >> 3
      };
    case "RS256":
      return {
        hash: {
          name: "SHA-256"
        },
        name: "RSASSA-PKCS1-v1_5"
      };
    case "RS384":
      return {
        hash: {
          name: "SHA-384"
        },
        name: "RSASSA-PKCS1-v1_5"
      };
    case "RS512":
      return {
        hash: {
          name: "SHA-512"
        },
        name: "RSASSA-PKCS1-v1_5"
      };
    case "ES256":
      return {
        hash: {
          name: "SHA-256"
        },
        name: "ECDSA",
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        hash: {
          name: "SHA-384"
        },
        name: "ECDSA",
        namedCurve: "P-384"
      };
    // case "ES512":
    // return { hash: { name: "SHA-512" }, name: "ECDSA", namedCurve: "P-521" };
    default:
      throw new Error(`The jwt's alg '${alg}' is not supported.`);
  }
}

// node_modules/@jsr/wok__djwt/signature.js
async function verify2(signature, key, alg, signingInput) {
  return isNull(key) ? signature.length === 0 : await crypto.subtle.verify(getAlgorithm(alg), key, signature, encoder2.encode(signingInput));
}
async function create(alg, key, signingInput) {
  return isNull(key) ? "" : encodeBase64Url(new Uint8Array(await crypto.subtle.sign(getAlgorithm(alg), key, encoder2.encode(signingInput))));
}

// node_modules/@jsr/wok__djwt/mod.js
function isExpired(exp, leeway) {
  return exp + leeway < Date.now() / 1e3;
}
function isTooEarly(nbf, leeway) {
  return nbf - leeway > Date.now() / 1e3;
}
function is3Tuple(arr) {
  return arr.length === 3;
}
function hasInvalidTimingClaims(...claimValues) {
  return claimValues.some((claimValue) => isDefined(claimValue) && isNotNumber(claimValue));
}
function validateTimingClaims(payload, { expLeeway = 1, nbfLeeway = 1, ignoreExp, ignoreNbf } = {}) {
  if (hasInvalidTimingClaims(payload.exp, payload.nbf)) {
    throw new Error(`The jwt has an invalid 'exp' or 'nbf' claim.`);
  }
  if (isNumber(payload.exp) && isNotTrue(ignoreExp) && isExpired(payload.exp, expLeeway)) {
    throw RangeError("The jwt is expired.");
  }
  if (isNumber(payload.nbf) && isNotTrue(ignoreNbf) && isTooEarly(payload.nbf, nbfLeeway)) {
    throw RangeError("The jwt is used too early.");
  }
}
function hasValidAudClaim(claimValue) {
  if (isUndefined(claimValue) || isString(claimValue)) return true;
  else return isArray(claimValue) && claimValue.every(isString);
}
function validateAudClaim(aud, audience) {
  if (hasValidAudClaim(aud)) {
    if (isUndefined(aud)) {
      throw new Error("The jwt has no 'aud' claim.");
    }
    const audArray = isString(aud) ? [
      aud
    ] : aud;
    const audienceArrayOrRegex = isString(audience) ? [
      audience
    ] : audience;
    if (!audArray.some((audString) => isArray(audienceArrayOrRegex) ? audienceArrayOrRegex.includes(audString) : audienceArrayOrRegex.test(audString))) {
      throw new Error("The identification with the value in the 'aud' claim has failed.");
    }
  } else {
    throw new Error(`The jwt has an invalid 'aud' claim.`);
  }
}
function decode(jwt) {
  try {
    const arr = jwt.split(".").map(decodeBase64Url).map((uint8Array, index) => index === 0 || index === 1 ? JSON.parse(decoder.decode(uint8Array)) : uint8Array);
    if (is3Tuple(arr)) return arr;
    else throw new Error();
  } catch {
    throw Error("The serialization of the jwt is invalid.");
  }
}
function validate([header, payload, signature], options) {
  if (isNotString(header?.alg)) {
    throw new Error(`The jwt's 'alg' header parameter value must be a string.`);
  }
  if (isObject(payload)) {
    validateTimingClaims(payload, options);
    if (isDefined(options?.audience)) {
      validateAudClaim(payload.aud, options.audience);
    }
    return {
      header,
      payload,
      signature
    };
  } else {
    throw new Error(`The jwt claims set is not a JSON object.`);
  }
}
async function verify3(jwt, key, options) {
  const { header, payload, signature } = validate(decode(jwt), options);
  if (verify(header.alg, key)) {
    if (!await verify2(signature, key, header.alg, jwt.slice(0, jwt.lastIndexOf(".")))) {
      throw new Error("The jwt's signature does not match the verification signature.");
    }
    if (!(options?.predicates || []).every((predicate) => predicate(payload))) {
      throw new Error("The payload does not satisfy all passed predicates.");
    }
    return payload;
  } else {
    throw new Error(`The jwt's alg '${header.alg}' does not match the key's algorithm.`);
  }
}
function createSigningInput(header, payload) {
  return `${encodeBase64Url(encoder2.encode(JSON.stringify(header)))}.${encodeBase64Url(encoder2.encode(JSON.stringify(payload)))}`;
}
async function create2(header, payload, key) {
  if (isObject(payload)) {
    if (verify(header.alg, key)) {
      const signingInput = createSigningInput(header, payload);
      const signature = await create(header.alg, key, signingInput);
      return `${signingInput}.${signature}`;
    } else {
      throw new Error(`The jwt's alg '${header.alg}' does not match the key's algorithm.`);
    }
  } else {
    throw new Error(`The jwt claims set is not a JSON object.`);
  }
}
function getNumericDate(exp) {
  return Math.round((exp instanceof Date ? exp.getTime() : Date.now() + exp * 1e3) / 1e3);
}

// node_modules/@jsr/std__encoding/_validate_binary_like.js
var encoder3 = new TextEncoder();
function getTypeName2(value) {
  const type = typeof value;
  if (type !== "object") {
    return type;
  } else if (value === null) {
    return "null";
  } else {
    return value?.constructor?.name ?? "object";
  }
}
function validateBinaryLike2(source) {
  if (typeof source === "string") {
    return encoder3.encode(source);
  } else if (source instanceof Uint8Array) {
    return source;
  } else if (source instanceof ArrayBuffer) {
    return new Uint8Array(source);
  }
  throw new TypeError(`Cannot validate the input as it must be a Uint8Array, a string, or an ArrayBuffer: received a value of the type ${getTypeName2(source)}`);
}

// node_modules/@jsr/std__encoding/base32.js
var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("");
var revLookup = [];
lookup.forEach((c4, i5) => revLookup[c4.charCodeAt(0)] = i5);

// node_modules/@jsr/std__encoding/base58.js
var base58alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split("");

// node_modules/@jsr/std__encoding/base64.js
var base64abc2 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
];
function encodeBase642(data) {
  const uint8 = validateBinaryLike2(data);
  let result = "";
  let i5;
  const l5 = uint8.length;
  for (i5 = 2; i5 < l5; i5 += 3) {
    result += base64abc2[uint8[i5 - 2] >> 2];
    result += base64abc2[(uint8[i5 - 2] & 3) << 4 | uint8[i5 - 1] >> 4];
    result += base64abc2[(uint8[i5 - 1] & 15) << 2 | uint8[i5] >> 6];
    result += base64abc2[uint8[i5] & 63];
  }
  if (i5 === l5 + 1) {
    result += base64abc2[uint8[i5 - 2] >> 2];
    result += base64abc2[(uint8[i5 - 2] & 3) << 4];
    result += "==";
  }
  if (i5 === l5) {
    result += base64abc2[uint8[i5 - 2] >> 2];
    result += base64abc2[(uint8[i5 - 2] & 3) << 4 | uint8[i5 - 1] >> 4];
    result += base64abc2[(uint8[i5 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
function decodeBase642(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i5 = 0; i5 < size; i5++) {
    bytes[i5] = binString.charCodeAt(i5);
  }
  return bytes;
}

// node_modules/@jsr/std__encoding/hex.js
var hexTable = new TextEncoder().encode("0123456789abcdef");
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// node_modules/@jsr/std__encoding/varint.js
var AB = new ArrayBuffer(8);
var U32_VIEW = new Uint32Array(AB);
var U64_VIEW = new BigUint64Array(AB);

// node_modules/@sholvoir/generic/jwt.js
var JWT = class {
  template;
  #key;
  algorithm;
  keyUsages;
  tokenHeader;
  constructor(template) {
    this.template = template;
    this.algorithm = {
      name: "HMAC",
      hash: "SHA-256"
    };
    this.keyUsages = [
      "sign",
      "verify"
    ];
    this.tokenHeader = {
      alg: "HS256",
      typ: "JWT"
    };
  }
  async importKey(key) {
    this.#key = key ? await crypto.subtle.importKey("raw", decodeBase642(key), this.algorithm, false, this.keyUsages) : await crypto.subtle.generateKey(this.algorithm, true, this.keyUsages);
  }
  async exportKey() {
    return encodeBase642(await crypto.subtle.exportKey("raw", this.#key));
  }
  async createToken(exp, payload) {
    return await create2(this.tokenHeader, {
      ...this.template,
      exp: getNumericDate(exp || 5 * 60),
      ...payload
    }, this.#key);
  }
  async verifyToken(token) {
    try {
      return await verify3(token, this.#key);
    } catch {
      return null;
    }
  }
  static decode(token) {
    return decode(token);
  }
};

// ../memword-server/lib/isetting.ts
var settingFormat = "0.2.0";
var defaultSetting = () => ({
  format: settingFormat,
  version: 0,
  books: []
});

// ../memword-server/lib/common.ts
var B2_BASE_URL = "https://f005.backblazeb2.com/file/vocabulary";
var now = () => Math.floor(Date.now() / 1e3);
var maxAge = 180 * 24 * 60 * 60;

// lib/wordlists.ts
var wordlists = /* @__PURE__ */ new Map();
var updateWordlist = async (wlid2) => {
  const cwl = wordlists.get(wlid2);
  const [swl] = await getWordlists((wl) => wl.wlid == wlid2);
  if (!swl) return;
  if (!cwl || cwl.version != swl.version) {
    const res1 = await getB2File(`${wlid2}-${swl.version}.txt`);
    if (!res1.ok) return;
    const wordSet = /* @__PURE__ */ new Set();
    for (let word of (await res1.text()).split("\n")) if (word = word.trim()) wordSet.add(word);
    wordlists.set(wlid2, { wlid: wlid2, version: swl.version, disc: swl.disc, wordSet });
  }
};
var getClientWordlist = async (wlid2) => wordlists.has(wlid2) ? (updateWordlist(wlid2), wordlists.get(wlid2)) : (await updateWordlist(wlid2), wordlists.get(wlid2));

// lib/iitem.ts
var neverItem = (word, time) => ({ word, last: time, next: time, level: 0 });
var newItem = (dict) => {
  const time = now();
  return {
    word: dict.word,
    cards: dict.cards,
    dversion: time,
    last: time,
    next: time,
    level: 0
  };
};
var item2task = ({ word, last, next, level }) => ({ word, last, next, level });
var itemMergeTask = (item, task) => {
  item.last = task.last;
  item.next = task.next;
  item.level = task.level;
  return item;
};
var itemMergeDict = (item, dict) => {
  item.cards = dict.cards;
  return item;
};

// lib/common.ts
var API_URL = "https://memword.micinfotech.com";

// package.json
var version = "0.7.4";

// ../memword-server/lib/itask.ts
var MAX_NEXT = 2e9;
var studyTask = (task, level) => {
  if (level === void 0) level = ++task.level;
  if (level > 15) task.level = level = 15;
  if (level <= 0) task.level = level = 1;
  task.last = now();
  task.next = level >= 15 ? MAX_NEXT : task.last + Math.round(39 * level ** 3 * 1.5 ** level);
  return task;
};

// lib/indexdb.ts
var tempItems = /* @__PURE__ */ new Map();
var db;
var run = (reject, func) => {
  if (db) return func(db);
  const request = indexedDB.open("memword", 1);
  request.onerror = reject;
  request.onsuccess = () => func(db = request.result);
  request.onupgradeneeded = () => {
    const d4 = request.result;
    d4.createObjectStore("mata", { keyPath: "key" });
    d4.createObjectStore("wordlist", { keyPath: "wlid" });
    d4.createObjectStore("issue", { keyPath: "id", autoIncrement: true });
    const iStore = d4.createObjectStore("item", { keyPath: "word" });
    iStore.createIndex("last", "last");
    iStore.createIndex("next", "next");
  };
};
var clear = () => new Promise((resolve, reject) => run(reject, (db2) => {
  db2.close();
  const request = indexedDB.deleteDatabase("memword");
  request.onerror = reject;
  request.onsuccess = () => resolve();
}));
var getMeta = (key) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("mata", "readonly").objectStore("mata").get(key);
  request.onerror = reject;
  request.onsuccess = () => resolve(request.result && request.result.value);
}));
var setMeta = (key, value) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("mata", "readwrite").objectStore("mata").put({ key, value });
  request.onerror = reject;
  request.onsuccess = () => resolve();
}));
var getIssues = () => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("issue", "readonly").objectStore("issue").getAll();
  request.onerror = reject;
  request.onsuccess = () => resolve(request.result);
}));
var addIssue = (issue) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("issue", "readwrite").objectStore("issue").add({ issue });
  request.onerror = reject;
  request.onsuccess = () => resolve();
}));
var deleteIssue = (id) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("issue", "readwrite").objectStore("issue").delete(id);
  request.onerror = reject;
  request.onsuccess = () => resolve();
}));
var putWordlist = (wl) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("wordlist", "readwrite").objectStore("wordlist").put(wl);
  request.onerror = reject;
  request.onsuccess = () => resolve();
}));
var getWordlists2 = (filter) => new Promise((resolve, reject) => run(reject, (db2) => {
  const wls = [];
  const transaction = db2.transaction("wordlist", "readonly");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve(wls);
  transaction.objectStore("wordlist").openCursor().onsuccess = (e4) => {
    const cursor = e4.target.result;
    if (!cursor) return;
    const wl = cursor.value;
    if (filter(wl)) wls.push(wl);
    cursor.continue();
  };
}));
var syncWordlists = (wls) => new Promise((resolve, reject) => run(reject, (db2) => {
  const wlMap = /* @__PURE__ */ new Map();
  for (const wl of wls) wlMap.set(wl.wlid, wl);
  const deleted = /* @__PURE__ */ new Set();
  const transaction = db2.transaction("wordlist", "readwrite");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve(deleted);
  const wStore = transaction.objectStore("wordlist");
  wStore.openCursor().onsuccess = (e4) => {
    const cursor = e4.target.result;
    if (!cursor) {
      for (const [_4, wl] of wlMap)
        wStore.add(wl);
      return;
    }
    const cwl = cursor.value;
    if (wlMap.has(cwl.wlid)) {
      const swl = wlMap.get(cwl.wlid);
      if (swl.version != cwl.version)
        wStore.put(swl);
      wlMap.delete(cwl.wlid);
    } else {
      deleted.add(cwl.wlid);
      cursor.delete();
    }
    cursor.continue();
  };
}));
var deleteWordlist = (wlid2) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("wordlist", "readwrite").objectStore("wordlist").delete(wlid2);
  request.onerror = reject;
  request.onsuccess = () => resolve();
}));
var getItem = (word) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("item", "readonly").objectStore("item").get(word);
  request.onerror = reject;
  request.onsuccess = () => resolve(request.result);
}));
var getItems = (last) => new Promise((resolve, reject) => run(reject, (db2) => {
  const request = db2.transaction("item", "readonly").objectStore("item").index("last").getAll(IDBKeyRange.lowerBound(last));
  request.onerror = reject;
  request.onsuccess = () => resolve(request.result);
}));
var addTasks = (words) => new Promise((resolve, reject) => run(reject, (db2) => {
  const time = now();
  const transaction = db2.transaction("item", "readwrite");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve();
  const iStore = transaction.objectStore("item");
  for (const word of words) iStore.get(word).onsuccess = (e4) => {
    const item = e4.target.result;
    if (!item) iStore.add(neverItem(word, time));
  };
}));
var mergeTasks = (tasks) => new Promise((resolve, reject) => run(reject, (db2) => {
  const transaction = db2.transaction("item", "readwrite");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve();
  const iStore = transaction.objectStore("item");
  for (const task of tasks) iStore.get(task.word).onsuccess = (e4) => {
    const item = e4.target.result;
    if (!item) iStore.add(task);
    else if (task.last > item.last) iStore.put(itemMergeTask(item, task));
  };
}));
var updateDict = (dict) => new Promise((resolve, reject) => run(reject, (db2) => {
  let item;
  const transaction = db2.transaction("item", "readwrite");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve(item);
  const iStore = transaction.objectStore("item");
  iStore.get(dict.word).onsuccess = (e1) => {
    item = e1.target.result;
    if (item) {
      itemMergeDict(item, dict);
      item.dversion = now();
      iStore.put(item);
    }
  };
}));
var getEpisode = (wordList, blevel2) => new Promise((resolve, reject) => run(reject, (db2) => {
  let result;
  const transaction = db2.transaction("item", "readonly");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve(result);
  transaction.objectStore("item").index("next").openCursor(IDBKeyRange.upperBound(now()), "prev").onsuccess = (e4) => {
    const cursor = e4.target.result;
    if (!cursor) return;
    const item = cursor.value;
    if ((!wordList || wordList.has(item.word)) && (blevel2 === void 0 || isBLevelIncludesLevel(blevel2, item.level)))
      return result = item;
    cursor.continue();
  };
}));
var getStats = (wls) => new Promise((resolve, reject) => run(reject, (db2) => {
  const time = now();
  const tstat = initStat(time, void 0, "\u5168\u90E8\u8BCD\u6C47");
  const stats2 = wls.map((wl) => initStat(time, wl?.wlid, wl?.disc));
  const wordSets = wls.map((wl) => new Set(wl?.wordSet));
  const transaction = db2.transaction("item", "readonly");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve([tstat, ...stats2]);
  transaction.objectStore("item").openCursor().onsuccess = (e4) => {
    const cursor = e4.target.result;
    if (!cursor) return stats2.forEach((stat, i5) => stat.total[0] += wordSets[i5].size);
    const item = cursor.value;
    addTaskToStat(tstat, item);
    stats2.forEach((stat, i5) => wordSets[i5].has(item.word) && (addTaskToStat(stat, item), wordSets[i5].delete(item.word)));
    cursor.continue();
  };
}));
var studied = (word, level) => new Promise((resolve, reject) => run(reject, (db2) => {
  const transaction = db2.transaction("item", "readwrite");
  transaction.onerror = reject;
  transaction.oncomplete = () => resolve();
  const iStore = transaction.objectStore("item");
  if (tempItems.has(word)) {
    iStore.put(studyTask(tempItems.get(word), level));
    tempItems.delete(word);
  } else iStore.get(word).onsuccess = (e22) => {
    const item = e22.target.result;
    if (item) iStore.put(studyTask(item, level));
  };
}));

// lib/mem.ts
var dictExpire = 7 * 24 * 60 * 60;
var auth;
var authHead = () => ({ "Authorization": `Bearer ${auth}` });
var getAuth = async () => auth ?? (auth = await getMeta("_auth"));
var getServerDict = (word) => getJson(`${API_URL}/pub/dict?q=${encodeURIComponent(word)}`, void 0, { cache: "reload" });
var getServerAndUpdateLocalDict = async (word) => {
  const dict = await getServerDict(word);
  if (dict) return await updateDict(dict);
};
var itemUpdateDict = async (item) => {
  if (!item.dversion) return await getServerAndUpdateLocalDict(item.word) ?? item;
  if (item.dversion + dictExpire < now()) getServerAndUpdateLocalDict(item.word);
  return item;
};
var submitIssues = async () => {
  const issues = await getIssues();
  for (const issue of issues) {
    const res = await fetch(`${API_URL}/api/issue`, requestInit(issue, "POST", authHead()));
    if (!res.ok) break;
    await deleteIssue(issue.id);
  }
};
var setting = defaultSetting();
var getUser = async () => {
  if (!auth) await getAuth();
  if (auth) return JWT.decode(auth)[1]?.aud;
};
var getDict = async (word) => {
  try {
    const dict = await getServerDict(word);
    if (!dict) return;
    updateDict(dict);
    return dict;
  } catch {
    return;
  }
};
var putDict = async (dict) => {
  updateDict(dict);
  try {
    const res = await fetch(`${API_URL}/admin/dict`, requestInit(dict, "PUT", authHead()));
    return res.ok;
  } catch {
    return false;
  }
};
var deleteDict = async (word) => {
  try {
    const res = await getRes(`${API_URL}/admin/dict`, { q: word }, { method: "DELETE", headers: authHead() });
    return res.ok;
  } catch {
    return false;
  }
};
var syncSetting = async (cSetting) => {
  if (cSetting && cSetting.version > setting.version) setting = cSetting;
  const lSetting = await getMeta("_setting");
  if (lSetting && lSetting.version > setting.version) setting = lSetting;
  else await setMeta("_setting", setting);
  try {
    const res = await fetch(`${API_URL}/api/setting`, requestInit(setting, "POST", authHead()));
    if (!res.ok) return;
    const sSetting = await res.json();
    if (sSetting.version > setting.version)
      await setMeta("_setting", setting = sSetting);
  } catch {
  }
};
var search = async (word) => {
  if (tempItems.has(word)) return tempItems.get(word);
  const item = await getItem(word);
  if (!item) {
    try {
      const dict = await getServerDict(word);
      if (!dict) return;
      const nitem = newItem(dict);
      tempItems.set(word, nitem);
      return nitem;
    } catch {
      return;
    }
  }
  ;
  return await itemUpdateDict(item);
};
var getUpdatedItem = (word) => getServerAndUpdateLocalDict(word);
var getEpisode2 = async (wlid2, blevel2) => {
  const item = await getEpisode(wlid2 ? (await getClientWordlist(wlid2))?.wordSet : void 0, blevel2);
  if (item) return await itemUpdateDict(item);
};
var studied2 = (word, level) => studied(word, level);
var addTasks2 = async (wlid2) => {
  const wordlist = await getClientWordlist(wlid2);
  if (!wordlist) return false;
  await addTasks(wordlist.wordSet);
  return true;
};
var syncTasks = async () => {
  try {
    const thisTime = now();
    const lastTime = await getMeta("_sync-time") ?? 1;
    const tasks = (await getItems(lastTime)).map(item2task);
    const resp = await fetch(`${API_URL}/api/task?lastgt=${lastTime}`, requestInit(tasks, "POST", authHead()));
    if (!resp.ok) return console.error("Network Error: get sync task data error.");
    const ntasks = await resp.json();
    await mergeTasks(ntasks);
    await setMeta("_sync-time", thisTime);
    return true;
  } catch {
    return false;
  }
};
var downTasks = async () => {
  try {
    await mergeTasks(await getJson(
      `${API_URL}/api/task`,
      { lastgt: "0" },
      requestInit([], "POST", authHead())
    ));
    return true;
  } catch {
    return false;
  }
};
var submitIssue = async (issue) => {
  await addIssue(issue);
  submitIssues();
};
var totalStats = async () => {
  const cwls = [];
  for (const wlid2 of setting.books) cwls.push(await getClientWordlist(wlid2));
  return { format: statsFormat, stats: await getStats(cwls) };
};
var getVocabulary = async () => {
  const wordlist = await getClientWordlist("system/vocabulary");
  if (wordlist) return Array.from(wordlist.wordSet).sort();
};
var getServerWordlist = async () => {
  const wls = await getJson(`${API_URL}/pub/wordlist`);
  if (!wls) return [];
  (async () => {
    const time = now();
    await setMeta("_wl-time", time);
    const deleted = await syncWordlists(wls);
    const setting2 = await getMeta("_setting");
    const nbooks = setting2.books.filter((wlid2) => !deleted.has(wlid2));
    if (nbooks.length != setting2.books.length) {
      setting2.books = nbooks;
      setting2.version = time;
      await setMeta("_setting", setting2);
    }
  })();
  return wls;
};
var getWordlists = async (filter) => {
  try {
    const owlTime = await getMeta("_wl-time");
    const nwlTime = now();
    if (nwlTime - owlTime > 3600 * 24)
      return (await getServerWordlist()).filter(filter);
  } catch {
  }
  return getWordlists2(filter);
};
var postSysWordList = async (name2, words, disc) => {
  try {
    const res = await getRes(
      `${API_URL}/admin/wordlist`,
      { name: name2, disc },
      { body: words, method: "POST", headers: authHead() }
    );
    return res.ok;
  } catch {
    return false;
  }
};
var postMyWordList = async (name2, words, disc) => {
  const res = await getRes(`${API_URL}/api/wordlist`, { name: name2, disc }, { body: words, method: "POST", headers: authHead() });
  switch (res.status) {
    case STATUS_CODE.NotAcceptable:
      return [res.status, await res.json()];
    // @ts-expect-error
    case STATUS_CODE.OK:
      putWordlist(await res.json());
    default:
      return [res.status];
  }
};
var deleteWordList = async (wlid2) => {
  try {
    await getRes(`${API_URL}/api/wordlist`, { wlid: wlid2 }, { method: "DELETE" });
    await deleteWordlist(wlid2);
    return true;
  } catch {
    return false;
  }
};
var otp = async (name2) => {
  try {
    const res = await getRes(`${API_URL}/pub/otp`, { name: name2 });
    return res.status;
  } catch {
    return -1;
  }
};
var signup = async (phone, name2) => {
  try {
    const res = await getRes(`${API_URL}/pub/signup`, { phone, name: name2 });
    return res.status;
  } catch {
    return -1;
  }
};
var signin = async (name2, code) => {
  try {
    const res = await getRes(`${API_URL}/pub/signin`, { name: name2, code });
    if (res.ok) await setMeta("_auth", (await res.json()).auth);
    console.log(`signin ${res.status}`);
    return res.status;
  } catch {
    return -1;
  }
};
var signout = async () => {
  localStorage.clear();
  await clear();
};
var getB2File = (fileName) => fetch(`${B2_BASE_URL}/${fileName}`);

// src/app.tsx
var backs = [];
var user = d2("");
var stats = d2(initStats());
var tips = d2("");
var isPhaseAnswer = d2(false);
var citem = d2();
var wlid = d2();
var blevel = d2();
var sprint = d2(-1);
var name = d2("");
var loading = d2(false);
var loca = d2("#about");
var vocabulary = [];
var totalStats2 = async () => stats.value = await totalStats();
var isAdmin = () => user.value == "hua";
var hideTips = () => tips.value = "";
var go = (d4) => loca.value = d4 ? (backs.push(loca.value), d4) : backs.pop() ?? (user.value ? "#home" : "#about");
var showTips = (content, autohide = true) => (tips.value = content, autohide && setTimeout(hideTips, 3e3));
var startStudy = async (wl, bl) => {
  loading.value = true;
  const item = await getEpisode2(wlid.value = wl, blevel.value = bl);
  loading.value = false;
  if (item) {
    citem.value = item;
    isPhaseAnswer.value = false;
    sprint.value = 0;
    go("#study");
  } else {
    showTips("Congratulations! There are no more task need to do.");
    totalStats2();
  }
};
var init = async () => {
  if (user.value = await getUser() ?? "") {
    go("#home");
    await syncSetting();
    const v4 = await getVocabulary();
    if (v4) vocabulary = v4;
    await syncTasks();
    await totalStats2();
  } else go("#about");
};

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f4 = 0;
var i4 = Array.isArray;
function u4(e4, t4, n3, o4, i5, u5) {
  t4 || (t4 = {});
  var a4, c4, p5 = t4;
  if ("ref" in p5) for (c4 in p5 = {}, t4) "ref" == c4 ? a4 = t4[c4] : p5[c4] = t4[c4];
  var l5 = { type: e4, props: p5, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i5, __self: u5 };
  if ("function" == typeof e4 && (a4 = e4.defaultProps)) for (c4 in a4) void 0 === p5[c4] && (p5[c4] = a4[c4]);
  return l.vnode && l.vnode(l5), l5;
}

// components/button-base.tsx
var button_base_default = ({ class: className, children, disabled, onClick, ...rest }) => {
  const enabled = useSignal(true);
  const handleClick = async (e4) => {
    e4.stopPropagation();
    enabled.value = false;
    if (onClick) await onClick(e4);
    enabled.value = true;
  };
  return /* @__PURE__ */ u4(
    "button",
    {
      type: "button",
      class: `disabled:opacity-50 ${className ?? ""}`,
      ...rest,
      onClick: handleClick,
      disabled: !enabled.value || disabled,
      children
    }
  );
};

// src/dialog.tsx
var dialog_default = ({
  title,
  children,
  leftElem,
  rightElem,
  className,
  onBackClick,
  onMenuClick
}) => /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("div", { class: "title shrink-0 px-2 flex justify-between items-center font-bold", children: [
    /* @__PURE__ */ u4("div", { class: "w-6 [app-region:no-drag]", children: leftElem ?? (onBackClick && /* @__PURE__ */ u4(button_base_default, { class: "w-full h-6 i-material-symbols-chevron-left text-[150%]", onClick: onBackClick })) }),
    /* @__PURE__ */ u4("div", { class: "grow font-bold text-center [app-region:drag]", children: tips.value || title }),
    /* @__PURE__ */ u4("div", { class: "w-6 [app-region:no-drag]", children: rightElem ?? (onMenuClick && /* @__PURE__ */ u4(button_base_default, { class: "w-full h-6 i-heroicons-outline-dots-horizontal", onClick: onMenuClick })) })
  ] }),
  /* @__PURE__ */ u4("div", { class: `body grow overflow-y-auto flex flex-col ${className ?? ""}`, children })
] });

// components/button-ripple.tsx
var button_ripple_default = (props) => {
  const { class: className, children, onClick, ...rest } = props;
  const showRipple = useSignal(false);
  const rippleStyle = useSignal({});
  const handleClick = (e4) => {
    const btn = e4.currentTarget;
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    rippleStyle.value = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${e4.offsetX - radius}px`,
      top: `${e4.offsetY - radius}px`
    };
    showRipple.value = true;
    setTimeout(() => showRipple.value = false, 580);
    if (onClick) onClick(e4);
  };
  return /* @__PURE__ */ u4(
    button_base_default,
    {
      ...rest,
      class: `overflow-hidden relative ${className ?? ""}`,
      onClick: handleClick,
      children: [
        children,
        showRipple.value && /* @__PURE__ */ u4("span", { class: "absolute transform-[scale(0)] rounded-[50%] bg-[var(--bg-ripple,gray)]:80 animate-[ripple_600ms_linear_0s]", style: rippleStyle.value })
      ]
    }
  );
};

// ../memword-server/lib/iwordlist.ts
var compareWL = (a4, b3) => a4.wlid.localeCompare(b3.wlid);
var regex = /^(.+?)\/(.+)$/;
var splitID = (id) => {
  const m4 = regex.exec(id);
  if (m4) return [m4[1], m4[2]];
  return ["", ""];
};

// src/stat.tsx
var sum = (s5, b3) => s5 + b3;
var max = (a4, b3) => a4 > b3 ? a4 : b3;
var stat_default = ({ stat }) => {
  const totals = aggrToBAggr(stat.total);
  const tasks = aggrToBAggr(stat.task);
  const width = totals.reduce(max) * 1.2;
  const totalSum = stat.total.reduce(sum);
  const taskSum = stat.task.reduce(sum);
  const wlname = stat.wlid ? splitID(stat.wlid)[1] : "";
  const title = `${stat.disc ?? wlname} - ${taskSum}|${totalSum}`;
  const blevelBar = (blevel2) => {
    const total = totals[blevel2];
    const task = tasks[blevel2];
    return /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4("div", { class: "text-left", children: BLevelName[blevel2] }),
      /* @__PURE__ */ u4(
        "div",
        {
          class: "relative bg-slate-300 dark:bg-slate-700 h-6 py-1 w-full hover:cursor-pointer",
          onClick: () => startStudy(stat.wlid, blevel2),
          children: [
            /* @__PURE__ */ u4("div", { class: "my-auto h-4 bg-slate-400", style: { width: `${width ? total * 100 / width : 100}%` }, children: /* @__PURE__ */ u4("div", { class: "ml-auto h-full bg-orange-500", style: { width: `${total ? task * 100 / total : 0}%` } }) }),
            /* @__PURE__ */ u4("div", { class: "absolute top-0 right-1", children: [
              task,
              "|",
              total
            ] })
          ]
        }
      )
    ] });
  };
  return /* @__PURE__ */ u4("div", { class: "grow min-w-80 grid gap-x-1 grid-cols-[max-content_1fr] items-center", children: [
    /* @__PURE__ */ u4("div", { class: "col-span-2 text-center font-bold", children: /* @__PURE__ */ u4("a", { class: "hover:cursor-pointer hover:underline", onClick: () => startStudy(stat.wlid), children: title }) }),
    [0, 1, 2, 3, 4, 5].map(blevelBar)
  ] });
};

// src/icon-dict.tsx
var icon_dict_default = (props) => /* @__PURE__ */ u4("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", children: [
  /* @__PURE__ */ u4("path", { d: "M18.938 93.37c.121-26.895.24-53.753.355-80.572.01-1.78 1.007-3.302 2.379-3.635 7.656-2.032 19.724-1.521 27.918 2.485 5.77 2.655 10.828 7.348 14.583 13.53 3.875-5.886 8.908-10.355 14.584-12.949 7.738-3.763 19.477-4.668 27.89-3.066 1.436.248 2.51 1.801 2.525 3.647v80.898c-.005 2.063-1.325 3.729-2.944 3.716a2.521 2.521 0 01-.675-.105c-7.184-1.187-14.486-.318-21.373 2.544-5.088 2.416-9.918 5.639-14.374 9.592 6.267-2.478 12.798-3.692 19.36-3.6 8.418.17 16.797 1.526 24.982 4.041v-84.66h2.926c1.616 0 2.926 1.669 2.926 3.728v85.81c0 2.059-1.31 3.728-2.926 3.728a2.357 2.357 0 01-.911-.198c-8.818-3.089-17.9-4.778-27.043-5.028-8.08-.13-16.087 1.953-23.48 6.109-1.011.82-2.305.82-3.317 0-7.392-4.157-15.4-6.24-23.48-6.109-9.121.265-18.182 1.961-26.978 5.052a2.343 2.343 0 01-.912.197c-1.634.02-2.963-1.67-2.953-3.75V28.963c0-2.059 1.31-3.728 2.926-3.728h2.926v84.66c8.185-2.515 16.564-3.87 24.983-4.04 7.033-.107 14.03 1.295 20.699 4.145-4.212-4.341-9.013-7.663-14.164-9.802-6.38-2.67-16.115-3.565-23.233-2.787-1.625.202-3.065-1.33-3.2-3.402a7.394 7.394 0 010-.64zm84.364-77.239c-6.763-.813-16.46.14-22.54 3.078-5.652 2.524-10.497 7.342-13.79 13.715v69.981c4.736-4.136 9.854-7.514 15.239-10.057 6.806-2.777 13.96-3.908 21.091-3.333zM61.12 102.185V32.82c-3.063-6.886-8.012-11.485-13.608-14.214-6.38-3.101-16.179-3.798-22.386-2.671l-.328 73.814c6.772-.314 16.124.79 22.35 3.379 5.001 2.066 9.716 5.123 13.972 9.058z" }),
  /* @__PURE__ */ u4("path", { d: "M48.602 50.572c-1.248 3.52-3.008 6.432-5.216 8.864-2.464-2.528-4.384-5.504-5.76-8.864zm9.184 0V46.86h-13.92l2.752-.864c-.384-1.312-1.344-3.36-2.176-4.832l-4.064 1.184c.736 1.408 1.44 3.2 1.792 4.512H28.666v3.712h5.024c1.728 4.512 3.936 8.352 6.816 11.52-3.328 2.592-7.456 4.416-12.448 5.664.768.864 1.888 2.656 2.304 3.552 5.152-1.472 9.44-3.584 12.96-6.464 3.36 2.816 7.488 4.928 12.512 6.272.576-1.056 1.696-2.72 2.56-3.552-4.768-1.12-8.8-2.976-12.096-5.536 2.784-3.104 4.96-6.848 6.592-11.456zM81.702 58.432l.743-2.737c.743-2.601 1.486-5.439 2.128-8.175h.135c.744 2.702 1.42 5.574 2.196 8.175l.743 2.737zm8.783 10.304h5.237l-8.04-25h-5.88l-8.006 25h5.068l1.756-6.42h8.109z" })
] });

// src/icon-study.tsx
var icon_study_default = (props) => /* @__PURE__ */ u4("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", children: [
  /* @__PURE__ */ u4("path", { d: "M63.99 45.64c11.482 0 20.83-9.347 20.83-20.83C84.82 13.328 75.473 4 63.99 4c-11.482 0-20.83 9.347-20.83 20.83 0 11.483 9.347 20.81 20.83 20.81zm0-34.98c7.826 0 14.17 6.364 14.17 14.17C78.16 32.638 71.796 39 63.99 39c-7.807 0-14.17-6.362-14.17-14.168 0-7.807 6.345-14.171 14.17-14.171z" }),
  /* @__PURE__ */ u4("path", { d: "M113.97 72.637h-2.548l1.205-16.7c.099-1.244-.514-2.43-1.6-3.103-13.875-8.418-32.077-7.371-47.056 2.49-14.96-9.842-33.183-10.889-47.057-2.49-1.068.633-1.68 1.838-1.6 3.104l1.204 16.7h-2.51c-3.675 0-6.66 3.003-6.66 6.658v10.396c0 3.675 3.004 6.66 6.66 6.66h4.23c.593 8.182 1.187 16.324 1.78 24.507.158 2.49 3.359 4.367 5.671 2.133 10.375-10.316 25.475-13.339 36.74-7.331 1.225.494 2.253.435 3.143 0 11.264-6.028 26.383-3.004 36.739 7.331 2.292 2.373 5.692.1 5.672-2.133.573-8.183 1.186-16.325 1.779-24.507h4.23c3.675 0 6.66-3.004 6.66-6.66V79.296c-.021-3.656-2.985-6.66-6.681-6.66zM23.93 85.503a4.226 4.226 0 01-4.21 4.21H14.01V79.318h5.73a4.226 4.226 0 014.21 4.209v1.976zm36.72 22.173c-11.107-3.714-24.071-1.363-34.467 6.167-.454-6.205-.89-12.43-1.344-18.637v-.118c3.419-1.818 5.77-5.435 5.77-9.585v-1.977c0-4.743-3.063-8.795-7.331-10.256l-1.127-15.693c11.522-6.027 26.265-4.684 38.499 3.539zm41.147 6.167c-10.396-7.529-23.36-9.88-34.467-6.166V87.835h6.56a3.336 3.336 0 003.341-3.34 3.323 3.323 0 00-3.34-3.34H67.33v-6.027h14.624a3.336 3.336 0 003.34-3.34 3.336 3.336 0 00-3.34-3.34H67.349v-7.37c12.254-8.222 26.997-9.566 38.5-3.519l-1.128 15.693c-4.249 1.461-7.332 5.513-7.332 10.256v1.977c0 4.15 2.332 7.746 5.77 9.585 0 .02-.929 12.727-1.362 18.774zm6.442-24.15a4.226 4.226 0 01-4.21-4.21v-1.976a4.226 4.226 0 014.21-4.21h5.732v10.396z" })
] });

// src/icon-me.tsx
var icon_me_default = (props) => /* @__PURE__ */ u4("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", children: [
  /* @__PURE__ */ u4("path", { d: "m 32,3.5 c -9.094931,0 -16.5,7.405069 -16.5,16.5 0,9.094931 7.405069,16.5 16.5,16.5 9.094931,0 16.5,-7.405069 16.5,-16.5 C 48.5,10.905069 41.094931,3.5 32,3.5 Z m 0,3 c 7.473611,0 13.5,6.026389 13.5,13.5 0,7.473611 -6.026389,13.5 -13.5,13.5 C 24.526389,33.5 18.5,27.473611 18.5,20 18.5,12.526389 24.526389,6.5 32,6.5 Z" }),
  /* @__PURE__ */ u4("path", { d: "M 32,26.5 C 15.173084,26.5 1.5000002,40.173072 1.5,57 v 1.5 h 61 V 57 C 62.5,40.173072 48.826916,26.5 32,26.5 Z m 0,3 c 14.691629,0 26.556927,11.508874 27.349609,26 H 4.6503906 C 5.4430732,41.008874 17.308371,29.5 32,29.5 Z" })
] });

// src/home.tsx
var home_default = () => /* @__PURE__ */ u4(dialog_default, { title: "\u5B66\u4E60\u8FDB\u5EA6", children: [
  /* @__PURE__ */ u4("div", { class: "body grow overflow-y-auto", children: /* @__PURE__ */ u4("div", { class: "p-2 flex flex-wrap justify-between gap-4", children: stats.value.stats.map((stat, i5) => /* @__PURE__ */ u4(stat_default, { stat }, i5)) }) }),
  /* @__PURE__ */ u4("div", { class: "tail shrink-0 px-4 pt-2 pb-4 flex gap-3 justify-between [&>button]:grow font-bold", children: [
    /* @__PURE__ */ u4(button_ripple_default, { onClick: () => go("#search"), children: [
      /* @__PURE__ */ u4(icon_dict_default, { class: "w-9 h-9 inline-block" }),
      "\u8BCD\u5178"
    ] }),
    /* @__PURE__ */ u4(button_ripple_default, { onClick: () => startStudy(), children: [
      /* @__PURE__ */ u4(icon_study_default, { class: "w-9 h-9 inline-block" }),
      "\u5B66\u4E60"
    ] }),
    /* @__PURE__ */ u4(button_ripple_default, { onClick: () => go("#menu"), children: [
      /* @__PURE__ */ u4(icon_me_default, { class: "w-9 h-9 inline-block" }),
      "\u6211"
    ] })
  ] })
] });

// src/help.tsx
var help_default = () => /* @__PURE__ */ u4(dialog_default, { title: "\u5E2E\u52A9", children: /* @__PURE__ */ u4("ol", { class: "list-decimal py-2 pr-2 pl-8 [&>li]:mx-2", children: [
  /* @__PURE__ */ u4("li", { children: [
    "\u5982\u4F55\u4F7F\u7528\u672C\u8F6F\u4EF6\uFF1F",
    /* @__PURE__ */ u4("br", {}),
    "\u7B54\uFF1A\u70B9\u51FB\u300C\u5B66\u4E60\u300D\uFF0C\u5F00\u59CB\u5B66\u4E60\u5373\u53EF\uFF1B\u5728\u5B66\u4E60\u754C\u9762\uFF0C (1)\u5F53\u7EC3\u4E60\u542C\u529B\u65F6\uFF0C\u4F1A\u5148\u64AD\u653E\u4E00\u5C0F\u6BB5\u58F0\u97F3\uFF0C\u6CA1\u6709\u542C\u6E05\u53EF\u4EE5\u70B9\u51FB",
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block", children: "\u2023" }),
    "\u6216\u6309\u4E0B\u300CB\u6216C\u300D\u5FEB\u6377\u952E\u6216\u89E6\u6478\u5C4F\u5E55\u7684\u4E0A\u534A\u90E8\u5206\u8FDB\u884C\u91CD\u542C\uFF0C (2)\u5F53\u7EC3\u4E60\u9605\u8BFB\u65F6\uFF0C\u4F1A\u5148\u663E\u793A\u4E00\u4E2A\u5355\u8BCD\uFF1B \u7136\u540E\u5728\u5FC3\u91CC\u9ED8\u60F3\u4E00\u4E2A\u6982\u5FF5\uFF08\u610F\u601D\uFF09\uFF0C\u70B9\u51FB\u300C\u7B54\u300D\u6216\u6309\u4E0B\u300C\u7A7A\u683C\u952E\u300D\u6216\u89E6\u6478\u5C4F\u5E55\u4E0B\u534A\u533A\u57DF\uFF0C\u663E\u793A\u5355\u8BCD\u7684\u97F3\u6807\u548C\u89E3\u91CA\uFF0C \u5E76\u540C\u65F6\u663E\u793A\u4E00\u4E2A\u4E0E\u8BE5\u8BCD\u76F8\u5173\u7684\u80CC\u666F\u56FE\u7247\uFF0C\u68C0\u67E5\u662F\u5426\u548C\u81EA\u5DF1\u9ED8\u60F3\u7684\u7B54\u6848\u4E00\u81F4\uFF0C\u5982\u679C\u4E00\u81F4\uFF0C\u70B9\u51FB\u300C\u77E5\u300D\u6216\u6309\u4E0B\u300CN\u6216X\u300D\u5FEB\u6377\u952E\u6216\u5411\u4E0A\u6ED1\u52A8\u5C4F\u5E55\uFF0C \u5426\u5219\u70B9\u51FB\u300C\u4E0D\u300D\u6216\u6309\u4E0B\u300CM\u6216Z\u300D\u5FEB\u6377\u952E\u6216\u5411\u4E0B\u6ED1\u52A8\u5C4F\u5E55\u3002\u8BB0\u4F4F\uFF0C\u8981\u5FEB\u901F\u5B8C\u6210\uFF0C\u4E0D\u8981\u5728\u4E00\u4E2A\u8BCD\u4E0A\u957F\u65F6\u95F4\u505C\u7559\uFF0C\u90A3\u6837\u53EA\u4F1A\u964D\u4F4E\u6548\u7387\uFF0C \u6211\u4EEC\u7684\u65B9\u6CD5\u662F\u5FEB\u901F/\u591A\u6B21\uFF0C\u4ECE\u8BB0\u5FC6\u6548\u7387\u6765\u8BB2\uFF0C\u6B21\u6570\u7684\u4F5C\u7528\u8FDC\u8FDC\u5927\u4E8E\u65F6\u957F\u3002\u8FD9\u4E2A\u65B9\u6CD5\u79F0\u4E3A\u5927\u8111\u6309\u6469\uFF0C\u76F4\u63A5\u5728\u62FC\u5199/\u58F0\u97F3\u548C\u6982\u5FF5\u4E4B\u95F4\u5EFA\u7ACB\u53CD\u5C04\u5F27\uFF0C \u6240\u4EE5\u4E0D\u8981\u72B9\u8C6B\uFF0C\u5FEB\u901F\u5B8C\u6210\u4E00\u4E2A\u5C0F\u51B2\u523A\u3002"
  ] }),
  /* @__PURE__ */ u4("li", { children: [
    "\u6211\u5E94\u8BE5\u5B66\u4E60\u54EA\u4E9B\u8BCD\u6C47\uFF1F",
    /* @__PURE__ */ u4("br", {}),
    "\u7B54\uFF1A\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5728\u672A\u6765\u80FD\u591F\u81EA\u7531\u4F7F\u7528\u82F1\u8BED\uFF0C\u5E94\u8BE5\u5148\u5B66\u91CD\u8981\u7684\u8BCD\u6C47\uFF0C\u56E0\u4E3A20%\u7684\u82F1\u8BED\u8BCD\u6C47\u8868\u8FBE\u4E8680%\u7684\u610F\u601D\uFF0C \u6293\u4F4F\u5C11\u6570\u57FA\u672C\u8BCD\uFF0C\u5C06\u80FD\u591F\u5FEB\u901F\u63D0\u9AD8\u82F1\u8BED\u6C34\u5E73\u3002\u672C\u8F6F\u4EF6\u63D0\u4F9B\u591A\u672C\u8BCD\u4E66\u4F9B\u60A8\u9009\u62E9\uFF0C\u4EE5\u9002\u5E94\u60A8\u5F53\u4E0B\u7684\u9700\u6C42\u3002\u4F46\u4E0D\u8981\u592A\u591A\u5173\u6CE8\u8BCD\u4E66\uFF0C \u4E00\u4E2A\u5E38\u7528\u8BCD\u901A\u5E38\u4F1A\u51FA\u73B0\u5728\u591A\u672C\u8BCD\u4E66\u4E2D\uFF0C\u4E0D\u5FC5\u4ECB\u610F\u5B83\u5230\u5E95\u4ECE\u54EA\u91CC\u6765\u3002\u4E5F\u53EF\u4EE5\u4E0D\u9009\u62E9\u8BCD\u4E66\uFF0C\u76F4\u63A5\u57FA\u4E8E\u8BCD\u5178 \uFF08\u672C\u8BCD\u5178\u6536\u5F5525000\u591A\u6761\u5E38\u7528\u8BCD\uFF0C\u4E0D\u5728\u8BCD\u5178\u4E2D\u7684\u8BCD\uFF0C\u5BF9\u4E8E\u5B66\u751F\u800C\u8A00\uFF0C\u53EF\u4EE5\u4E0D\u5FC5\u8BB0\u5FC6\u4E86\uFF09\uFF0C\u5728\u8BCD\u5178\u4E2D\u67E5\u5230\u81EA\u5DF1\u5728\u751F\u6D3B\u4E2D\u9047\u5230\uFF0C \u4F46\u4E0D\u4F1A\u7684\u8BCD\uFF0C\u76F4\u63A5\u5F00\u59CB\u5B66\u5B83\uFF0C\u80CC\u5B83\uFF0C\u7EC8\u6709\u4E00\u65E5\uFF0C\u4F60\u518D\u4E5F\u9047\u4E0D\u5230\u751F\u8BCD\u7684\u65F6\u5019\uFF0C\u4F60\u5C31\u5DF2\u7ECF\u529F\u6CD5\u5927\u6210\u4E86\u3002"
  ] }),
  /* @__PURE__ */ u4("li", { children: [
    "\u6211\u8BE5\u5982\u4F55\u590D\u4E60\uFF1F",
    /* @__PURE__ */ u4("br", {}),
    "\u7B54\uFF1A\u5B8C\u5168\u4E0D\u5FC5\u64CD\u5FC3\u8FD9\u4E2A\u4E8B\u60C5\uFF0C\u8BA9\u7CFB\u7EDF\u51B3\u5B9A\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u6839\u636E\u300C\u827E\u5BBE\u6D69\u65AF\u300D\u9057\u5FD8\u66F2\u7EBF\u6765\u51B3\u5B9A\u6B64\u65F6\u7684\u6700\u4F73\u590D\u4E60\u5185\u5BB9\uFF0C \u4F60\u8981\u505A\u7684\u4E8B\u662F\u6BCF\u5929\u5229\u7528\u788E\u7247\u65F6\u95F4\uFF0C\u62FF\u51FA\u624B\u673A\uFF0C\u5F00\u59CB\u300C\u5B66\u4E60\u300D\u3002"
  ] }),
  /* @__PURE__ */ u4("li", { children: [
    "\u754C\u9762\u4E0A\u7684\u6309\u94AE\u662F\u4EC0\u4E48\u610F\u601D\uFF1F",
    /* @__PURE__ */ u4("br", {}),
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block", children: "\u2611" }),
    "\u6211\u8BA4\u8BC6\u8FD9\u4E2A\u8BCD\uFF1B",
    /* @__PURE__ */ u4("br", {}),
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block bg-slate-500", children: "\u2612" }),
    "\u6211\u4E0D\u8BA4\u8BC6\u8FD9\u4E2A\u8BCD\uFF1B",
    /* @__PURE__ */ u4("br", {}),
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block", children: "\u25B6" }),
    ": \u518D\u64AD\u4E00\u904D\u58F0\u97F3\uFF1B",
    /* @__PURE__ */ u4("br", {}),
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block", children: "\u2609" }),
    ": \u8FD9\u4E2A\u8BCD\u6211\u5DF2\u7ECF\u638C\u63E1\uFF0C\u76F4\u63A5\u6807\u8BB0\u4E3A\u300C\u5DF2\u5B8C\u6210\u300D\uFF1B",
    /* @__PURE__ */ u4("br", {}),
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block", children: "\u26A0" }),
    ": \u8FD9\u4E2A\u8BCD\u7684\u7FFB\u8BD1/\u58F0\u97F3/\u97F3\u6807\uFF0C\u6709\u95EE\u9898/\u9519\u8BEF\uFF0C\u8BF7\u4EBA\u5DE5\u5904\u7406\u3002",
    /* @__PURE__ */ u4("br", {}),
    /* @__PURE__ */ u4("div", { class: "w-6 h-6 inline-block", children: "\u27F3" }),
    ": \u5FFD\u7565\u672C\u5730\u8BCD\u5178\u7F13\u51B2\uFF0C\u4ECE\u670D\u52A1\u5668\u91CD\u65B0\u4E0B\u8F7D\u8FD9\u4E2A\u8BCD\u7684\u7FFB\u8BD1/\u58F0\u97F3/\u97F3\u6807\u3002"
  ] }),
  /* @__PURE__ */ u4("li", { children: [
    "\u5173\u4E8E\u300C\u5B66\u4E60\u8BCD\u4E66\u300D",
    /* @__PURE__ */ u4("br", {}),
    "\u7B54\uFF1A\u5B66\u4E60\u8BCD\u4E66\u5C06\u4E00\u672C\u8BCD\u4E66\u7684\u5168\u90E8\u8BCD\u6DFB\u52A0\u8FDB\u6211\u7684\u5B66\u4E60\u4EFB\u52A1\u3002\u4F46\u6211\u4EEC\u901A\u5E38\u5E76\u4E0D\u4F1A\u76F4\u63A5\u5F00\u59CB\u5B66\u8FD9\u4E9B\u65B0\u8BCD\uFF0C\u800C\u662F\u4F18\u5148\u590D\u4E60\u65E7\u8BCD\uFF0C \u638C\u63E1\u5DE9\u56FA\u4E00\u4E2A\u65E7\u8BCD\u6BD4\u5B66\u4E60\u4E00\u6279\u65B0\u8BCD\u66F4\u91CD\u8981\uFF0C\u8FD9\u4E9B\u65B0\u52A0\u7684\u4EFB\u52A1\u5C06\u4F1A\u6210\u4E3A\u4F18\u5148\u7EA7\u6700\u4F4E\u7684\u4EFB\u52A1\u3002"
  ] }),
  /* @__PURE__ */ u4("li", { children: [
    "\u5173\u4E8E\u767B\u5F55\u548C\u591A\u8BBE\u5907",
    /* @__PURE__ */ u4("br", {}),
    "\u7B54\uFF1A\u24F5\u8F6F\u4EF6\u8BBE\u8BA1\u4E3A\u514D\u5BC6\u6A21\u5F0F\uFF08\u4E0D\u9700\u8981\u5BC6\u7801\uFF09\uFF0C\u5728\u4E00\u4E2A\u8BBE\u5907\u4E0A\u53EA\u8981\u7528\u7535\u5B50\u90AE\u4EF6\u9A8C\u8BC1\u8EAB\u4EFD\u4E4B\u540E\uFF0C\u5C31\u518D\u4E5F\u4E0D\u9700\u8981\u5BC6\u7801\u4E86\uFF0C\u6253\u5F00\u8F6F\u4EF6\u7ACB\u5373\u53EF\u4EE5\u5F00\u59CB\u5B66\u4E60\u3002",
    /* @__PURE__ */ u4("br", {}),
    "\u24F6\u5728\u7B2C\u4E8C\u53F0\u8BBE\u5907\u4E0A\u767B\u5F55\u65F6\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u540C\u6B65\u5B66\u4E60\u8BB0\u5F55\u548C\u8BBE\u7F6E\uFF0C\u4F60\u5B8C\u5168\u53EF\u4EE5\u540C\u65F6\u5728\u7535\u8111\u548C\u624B\u673A\u4E0A\u5B66\u4E60\u3002"
  ] }),
  /* @__PURE__ */ u4("li", { children: [
    "\u4EE5\u540E\u6709AI\u7FFB\u8BD1\u4E86\uFF0C\u6211\u8FD8\u7528\u5F97\u7740\u5B66\u82F1\u8BED\u5417\uFF1F",
    /* @__PURE__ */ u4("br", {}),
    "\u7B54\uFF1AAI\u6216\u8005\u4EFB\u610F\u7FFB\u8BD1\u5DE5\u5177\u751A\u81F3\u5305\u62EC\u4EBA\u5DE5\u7FFB\u8BD1\uFF0C\u90FD\u53EA\u80FD\u89E3\u51B3\u6D45\u8868\u95EE\u9898\uFF0C\u56E0\u4E3A\u4E00\u95E8\u8BED\u8A00\u662F\u65E0\u6CD5\u51C6\u786E\u8868\u8FBE\u53E6\u4E00\u95E8\u8BED\u8A00\u7684\u542B\u4E49\u7684\uFF0C \u4E00\u95E8\u8BED\u8A00\u7684\u80CC\u540E\u4EE3\u8868\u7740\u6587\u5316\u548C\u601D\u7EF4\u6A21\u5F0F\uFF0C\u8FD9\u4E9B\u6DF1\u5C42\u6B21\u7684\u4E1C\u897F\u662F\u4EFB\u4F55\u7FFB\u8BD1\u90FD\u65E0\u6CD5\u89E3\u51B3\u7684\u3002\u5982\u679C\u4F60\u6709\u8BA1\u5212\u53BB\u82F1\u8BED\u6587\u534E\u5708\u751F\u6D3B/\u5B66\u4E60/\u5DE5\u4F5C\uFF0C \u90A3\u4F60\u5FC5\u9700\u4EB2\u81EA\u7528\u4EBA\u8111\u5B66\u597D\u5B83\uFF0C\u4EC5\u4EC5\u7FFB\u8BD1\u5DE5\u5177\u662F\u4E0D\u591F\u7684\u3002"
  ] })
] }) });

// src/about.tsx
var about_default = () => /* @__PURE__ */ u4(dialog_default, { title: "\u5FEB\u4E50\u80CC\u5355\u8BCD", onBackClick: user.value ? () => go("#home") : void 0, children: /* @__PURE__ */ u4("div", { class: "about", children: [
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u5FEB\u4E50\u80CC\u5355\u8BCD" }),
    /* @__PURE__ */ u4("p", { children: [
      "\u7248\u672C\uFF1A",
      version
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u8BED\u8A00\u57FA\u7840" }),
    /* @__PURE__ */ u4("p", { children: [
      "\u8BCD\u6C47\u662F",
      /* @__PURE__ */ u4("b", { children: "\u8BED\u8A00\u7684\u57FA\u7840" }),
      "\uFF0C\u5B66\u4E60\u8BED\u8A00\u5E94\u8BE5\u638C\u63E1\u4E00\u5B9A\u6570\u91CF\u7684\u57FA\u7840\u8BCD\u6C47\u3002"
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u9AD8\u9891\u8BCD\u6C47" }),
    /* @__PURE__ */ u4("p", { children: [
      "\u6BCF\u4E2A\u8BCD\u6C47\u7684\u91CD\u8981\u7A0B\u5EA6\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u8D8A\u662F\u4F7F\u7528",
      /* @__PURE__ */ u4("b", { children: "\u9891\u7387\u9AD8\u7684\u8BCD\u6C47" }),
      "\uFF0C\u5176\u91CD\u8981\u7A0B\u5EA6\u8D8A\u9AD8\uFF0C\u672C\u5DE5\u5177\u63D0\u4F9B\u591A\u79CD\u8BCD\u9891\u5DE5\u5177\u7EDF\u8BA1\u7684\u7ED3\u679C\u8BCD\u4E66\u3002"
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u9057\u5FD8\u66F2\u7EBF" }),
    /* @__PURE__ */ u4("p", { children: [
      "\u8BB0\u5FC6\u6700\u5927\u7684\u654C\u4EBA\u662F\u9057\u5FD8\uFF0C\u672C\u5DE5\u5177\u4F9D\u636E\u300C\u827E\u5BBE\u6D69\u65AF\u300D",
      /* @__PURE__ */ u4("b", { children: "\u9057\u5FD8\u66F2\u7EBF" }),
      "\u8BBE\u8BA1\u5927\u8111\u523A\u6FC0\u9891\u7387\uFF0C\u4EE5\u6700\u5927\u5316\u8BB0\u5FC6\u6548\u7387\u3002"
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u788E\u7247\u65F6\u95F4" }),
    /* @__PURE__ */ u4("p", { children: [
      "\u73B0\u4EE3\u4EBA\u5DE5\u4F5C\u5B66\u4E60\u90FD\u975E\u5E38\u5FD9\u788C\uFF0C\u5145\u5206\u5229\u7528\u597D",
      /* @__PURE__ */ u4("b", { children: "\u788E\u7247\u65F6\u95F4" }),
      "\uFF0C\u662F\u6210\u529F\u7684\u5173\u952E\u3002"
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u5F00\u59CB\u5B66\u4E60" }),
    /* @__PURE__ */ u4("p", { children: [
      "\u4F7F\u7528\u4F60\u7684\u7535\u5B50\u90AE\u4EF6\uFF0C\u5355\u51FB",
      /* @__PURE__ */ u4(
        button_ripple_default,
        {
          class: "button btn-prime",
          title: "login",
          onClick: () => go("#signup"),
          children: "\u767B\u5F55"
        }
      ),
      "\u5F00\u59CB\u514D\u8D39\u5B66\u4E60\u5427\u3002"
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u5FAE\u4FE1" }),
    /* @__PURE__ */ u4("p", { children: [
      "*\u63D0\u793A\u4E00\uFF1A\u8BF7\u4F7F\u7528",
      /* @__PURE__ */ u4("b", { children: "\u9664\u5FAE\u4FE1\u4EE5\u5916" }),
      "\u7684\u5176\u4ED6\u6D4F\u89C8\u5668\uFF0C\u5982\u679C\u5F53\u524D\u662F\u5728\u5FAE\u4FE1\u4E2D\uFF0C\u70B9\u51FB\u5C4F\u5E55\u53F3\u4E0A(...)\uFF0C\u7136\u540E\u9009\u62E9\u300C\u5728\u9ED8\u8BA4\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u300D\u3002"
    ] })
  ] }),
  /* @__PURE__ */ u4("div", { children: [
    /* @__PURE__ */ u4("h1", { children: "\u684C\u9762" }),
    /* @__PURE__ */ u4("p", { children: [
      "*\u63D0\u793A\u4E8C\uFF1A\u8BF7\u4F7F\u7528\u300C\u5171\u4EAB\u300D-\u300C\u6DFB\u52A0\u5230\u4E3B\u5C4F\u5E55\u300D\uFF08iOS\uFF09\u6216\u300C...\u300D-\u300C\u5B89\u88C5\u5E94\u7528\u300D\uFF08Android\uFF09\u5B89\u88C5 ",
      /* @__PURE__ */ u4("b", { children: "Web\u5E94\u7528" }),
      " \u5230\u684C\u9762\uFF0C\u4EE5\u4FBF\u4E0B\u6B21\u76F4\u63A5\u70B9\u51FB\u8FDB\u5165\u3002"
    ] })
  ] })
] }) });

// src/menu.tsx
var menu_default = () => {
  const open = (e4) => {
    e4.stopPropagation();
    go(e4.currentTarget.title);
  };
  const down = async (e4) => {
    e4.stopPropagation();
    await downTasks();
    await totalStats2();
    go();
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u83DC\u5355", onBackClick: () => go(), children: /* @__PURE__ */ u4("div", { class: "menu", children: [
    isAdmin() && /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4("menu", { title: "#lookup", onClick: open, children: "\u8F9E\u5178\u7F16\u8F91" }),
      /* @__PURE__ */ u4("div", {}),
      /* @__PURE__ */ u4("menu", { title: "#syswordlist", onClick: open, children: "\u7CFB\u7EDF\u8BCD\u4E66" }),
      /* @__PURE__ */ u4("div", {})
    ] }),
    /* @__PURE__ */ u4("menu", { title: "#issue", onClick: open, children: "\u62A5\u544A\u95EE\u9898" }),
    /* @__PURE__ */ u4("div", {}),
    /* @__PURE__ */ u4("menu", { onClick: down, children: "\u5B8C\u5168\u540C\u6B65" }),
    /* @__PURE__ */ u4("div", {}),
    /* @__PURE__ */ u4("menu", { title: "#wordlists", onClick: open, children: "\u6211\u7684\u8BCD\u4E66" }),
    /* @__PURE__ */ u4("div", {}),
    /* @__PURE__ */ u4("menu", { title: "#setting", onClick: open, children: "\u8BBE\u7F6E" }),
    /* @__PURE__ */ u4("div", {}),
    /* @__PURE__ */ u4("menu", { title: "#about", onClick: open, children: "\u5173\u4E8E" }),
    /* @__PURE__ */ u4("div", {}),
    /* @__PURE__ */ u4("menu", { title: "#help", onClick: open, children: "\u5E2E\u52A9" }),
    /* @__PURE__ */ u4("div", {}),
    /* @__PURE__ */ u4("menu", { title: "#logout", onClick: open, children: "\u767B\u51FA" })
  ] }) });
};

// components/input-textarea.tsx
var input_textarea_default = ({ binding, ...rest }) => /* @__PURE__ */ u4("textarea", { ...rest, value: binding.value, onInput: (e4) => binding.value = e4.currentTarget.value });

// src/issue.tsx
var issue_default = () => {
  const issue = useSignal("");
  const handleSubmitClick = async () => {
    await submitIssue(issue.value);
    showTips("\u63D0\u4EA4\u6210\u529F!");
    go();
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u63D0\u4EA4\u95EE\u9898", children: /* @__PURE__ */ u4("div", { class: "p-2 h-full flex flex-col gap-2", children: [
    /* @__PURE__ */ u4("label", { children: "\u8BF7\u5728\u8FD9\u91CC\u63CF\u8FF0\u4F60\u7684\u95EE\u9898:" }),
    /* @__PURE__ */ u4(input_textarea_default, { name: "issue", class: "w-full grow", binding: issue, children: issue.value }),
    /* @__PURE__ */ u4("div", { class: "flex gap-2 mt-2 pb-2 justify-end", children: [
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-32 button btn-normal", onClick: () => go(), children: "\u53D6\u6D88" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-32 button btn-prime", onClick: handleSubmitClick, children: "\u63D0\u4EA4" })
    ] })
  ] }) });
};

// components/input-simple.tsx
var input_simple_default = ({ binding, ...rest }) => /* @__PURE__ */ u4("input", { ...rest, value: binding.value?.toString(), onInput: (e4) => binding.value = e4.currentTarget.value });

// components/list.tsx
var list_default = ({ options, cindex, class: className, activeClass }) => options.map((option, i5) => /* @__PURE__ */ u4(
  "div",
  {
    onClick: (e4) => (e4.stopPropagation(), cindex.value = i5),
    class: `${className ?? ""} ${cindex.value == i5 ? activeClass : ""}`,
    children: option
  },
  i5
));

// src/setting.tsx
var setting_default = () => {
  const filter = useSignal("^common");
  const mindex = useSignal(0);
  const wls = useSignal([]);
  const cindex = useSignal(0);
  const mwls = useSignal([]);
  const handleAddSubClick = () => {
    mwls.value = [...mwls.value, wls.value[cindex.value]];
  };
  const handleDeleteSubClick = () => {
    mwls.value = [...mwls.value.slice(0, mindex.value), ...mwls.value.slice(mindex.value + 1)];
  };
  const handleAddTaskClick = async () => {
    loading.value = true;
    await addTasks2(mwls.value[mindex.value].wlid);
    await totalStats2();
    loading.value = false;
    go("#home");
  };
  const handleOKClick = async () => {
    await syncSetting({ format: settingFormat, version: now(), books: mwls.value.map((wl) => wl.wlid) });
    await totalStats2();
    go();
  };
  const init2 = async () => {
    wls.value = (await getServerWordlist()).filter((wl) => wl.wlid.startsWith("common")).sort(compareWL);
    mwls.value = await getWordlists((wl) => setting.books.includes(wl.wlid));
  };
  useSignalEffect(() => {
    (async () => {
      const regex2 = new RegExp(filter.value);
      wls.value = (await getWordlists((wl) => regex2.test(wl.wlid) || wl.disc && regex2.test(wl.disc))).sort(compareWL);
    })();
  });
  y2(() => {
    init2();
  }, []);
  return /* @__PURE__ */ u4(dialog_default, { className: "p-2 gap-2", title: "\u8BBE\u7F6E", onBackClick: () => go(), children: [
    /* @__PURE__ */ u4("div", { class: "flex gap-2", children: [
      /* @__PURE__ */ u4("label", { for: "filter", children: "\u8BBE\u7F6E\u8FC7\u6EE4" }),
      /* @__PURE__ */ u4(input_simple_default, { class: "grow", name: "filter", binding: filter })
    ] }),
    /* @__PURE__ */ u4("fieldset", { class: "px-2 border rounded max-h-[50%] grow overflow-y-auto", children: [
      /* @__PURE__ */ u4("legend", { children: "\u53EF\u7528\u7684\u8BCD\u4E66" }),
      /* @__PURE__ */ u4(list_default, { cindex, options: wls.value.map((wl) => wl.disc ?? wl.wlid), activeClass: "bg-[var(--bg-tail)]" })
    ] }),
    /* @__PURE__ */ u4("div", { class: "flex justify-between gap-2", children: [
      /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-normal grow", onClick: handleAddSubClick, children: "\u6DFB\u52A0\u8BA2\u9605" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-normal grow", onClick: handleDeleteSubClick, children: "\u5220\u9664\u8BA2\u9605" })
    ] }),
    /* @__PURE__ */ u4("fieldset", { class: "px-2 border rounded max-h-[50%] grow overflow-y-auto", children: [
      /* @__PURE__ */ u4("legend", { children: "\u6211\u8BA2\u9605\u7684\u8BCD\u4E66" }),
      /* @__PURE__ */ u4(list_default, { cindex: mindex, options: mwls.value.map((wl) => wl.disc ?? wl.wlid), activeClass: "bg-[var(--bg-tail)]" })
    ] }),
    /* @__PURE__ */ u4("div", { class: "flex justify-between gap-2", children: [
      /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-normal grow", onClick: handleAddTaskClick, children: "\u6DFB\u52A0\u4EFB\u52A1" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-normal grow", onClick: () => go(), children: "\u53D6\u6D88" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-prime grow", onClick: handleOKClick, children: "\u4FDD\u5B58" })
    ] })
  ] });
};

// components/input-text.tsx
var input_text_default = ({ binding, options, maxSuggest, class: className, onChange, ...rest }) => {
  const max2 = maxSuggest ?? 12;
  const suggestions = useSignal([]);
  const handleBlur = () => setTimeout(() => suggestions.value = [], 200);
  const handleKeyPress = (e4) => {
    e4.stopPropagation();
    e4.key == "Enter" && handleBlur() && onChange && onChange();
  };
  const handleInput = (e4) => {
    const text = binding.value = e4.currentTarget.value;
    if (!text) return suggestions.value = [];
    const first = [];
    const second = [];
    for (const option of options) {
      if (option.startsWith(text)) first.push(option);
      else if (option.includes(text)) second.push(option);
      if (first.length >= max2) break;
    }
    suggestions.value = first.concat(second.slice(0, max2 - first.length));
  };
  const suggestionClicked = (e4) => {
    binding.value = e4.currentTarget.textContent ?? "";
    onChange && onChange();
  };
  return /* @__PURE__ */ u4("div", { class: `inline-block relative ${className ?? ""}`, children: [
    /* @__PURE__ */ u4("input", { class: "w-full px-2", ...rest, value: binding.value?.toString(), onInput: handleInput, onBlur: handleBlur, onKeyUp: handleKeyPress }),
    suggestions.value.length ? /* @__PURE__ */ u4("div", { class: "absolute border bg-[var(--bg-body)] z-100 top-[calc(100%_+_4px)] inset-x-0 px-2", children: suggestions.value.map((s5, i5) => /* @__PURE__ */ u4("div", { onClick: suggestionClicked, children: s5 }, i5)) }) : ""
  ] });
};

// components/tab.tsx
var tab_default = ({ class: className, cindex, children }) => {
  const childs = Array.isArray(children) ? children : [children];
  return childs.length ? /* @__PURE__ */ u4(k, { children: [
    /* @__PURE__ */ u4("header", { class: "flex gap-2", children: childs?.map(
      (child, i5) => /* @__PURE__ */ u4(
        "div",
        {
          class: `min-w-16 px-2 py-1 cursor-pointer text-center rounded-t-md ${cindex.value == i5 ? className ?? "" : ""}`,
          onClick: (e4) => (e4.stopPropagation(), cindex.value = i5),
          children: child.props.title ?? i5
        },
        i5
      )
    ) }),
    /* @__PURE__ */ u4("section", { class: `relative grow p-2 overflow-y-auto ${className ?? ""}`, children: childs[cindex.value] })
  ] }) : /* @__PURE__ */ u4(k, {});
};

// src/ecard.tsx
var ecard_default = ({ card, class: className }) => {
  const phonetic = useSignal(card.phonetic);
  const trans = useSignal(card.trans);
  const def = useSignal(card.def);
  const sound = useSignal(card.sound);
  const player = A2(null);
  const handlePlayClick = () => {
    if (!sound.value) showTips("no sound to play!");
    else player.current?.play();
  };
  return /* @__PURE__ */ u4("div", { class: `flex flex-col h-full gap-2 ${className ?? ""}`, children: [
    /* @__PURE__ */ u4(
      "input",
      {
        name: "phonetic",
        placeholder: "phonetic",
        value: phonetic,
        onInput: (e4) => card.phonetic = phonetic.value = e4.currentTarget.value
      }
    ),
    /* @__PURE__ */ u4(
      "textarea",
      {
        name: "trans",
        placeholder: "trans",
        class: "h-32 grow",
        value: trans,
        onInput: (e4) => card.trans = trans.value = e4.currentTarget.value
      }
    ),
    /* @__PURE__ */ u4(
      "textarea",
      {
        name: "def",
        placeholder: "def",
        class: "h-32 grow",
        value: def,
        onInput: (e4) => card.def = def.value = e4.currentTarget.value
      }
    ),
    /* @__PURE__ */ u4("div", { class: "flex", children: [
      /* @__PURE__ */ u4(
        "textarea",
        {
          name: "sound",
          placeholder: "sound",
          class: "h-32 grow",
          value: sound,
          onInput: (e4) => card.sound = sound.value = e4.currentTarget.value
        }
      ),
      /* @__PURE__ */ u4(
        button_base_default,
        {
          class: "button btn-normal ml-2 i-material-symbols-chevron-right",
          onClick: handlePlayClick,
          disabled: !sound.value
        }
      )
    ] }),
    /* @__PURE__ */ u4("audio", { ref: player, src: sound })
  ] });
};

// src/lookup.tsx
function Lookup() {
  const word = useSignal("");
  const cindex = useSignal(0);
  const cards = useSignal([]);
  const handleSearchClick = async () => {
    const dict = await getDict(word.value);
    if (!dict) return showTips(`Error`);
    cindex.value = 0;
    cards.value = dict.cards ?? [];
  };
  const handleAddCardClick = () => {
    cards.value = [...cards.value, {}];
  };
  const handleDeleteCardClick = () => {
    if (cards.value.length > 1) cards.value = cards.value.toSpliced(cindex.value, 1);
  };
  const handleUpdateClick = async () => {
    const dict = { word: word.value, cards: cards.value };
    showTips(await putDict(dict) ? `success update word "${word.value}"!` : `Error`);
  };
  const handleDeleteClick = async () => {
    showTips(await deleteDict(word.value) ? `success delete word "${word.value}"!` : `Error`);
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u8F9E\u5178\u7F16\u8F91", className: "gap-2 p-2", onBackClick: () => go(), children: [
    /* @__PURE__ */ u4("div", { class: "flex gap-2", children: [
      /* @__PURE__ */ u4(
        input_text_default,
        {
          name: "word",
          placeholder: "word",
          class: "grow",
          binding: word,
          options: vocabulary,
          onChange: handleSearchClick
        }
      ),
      /* @__PURE__ */ u4(
        button_ripple_default,
        {
          class: "button btn-normal",
          disabled: !word.value,
          onClick: handleSearchClick,
          children: "Search"
        }
      )
    ] }),
    /* @__PURE__ */ u4("div", { class: "flex flex-col grow", children: /* @__PURE__ */ u4(tab_default, { class: "bg-[var(--bg-tab)]", cindex, children: cards.value.map((card, i5) => /* @__PURE__ */ u4(ecard_default, { card }, i5)) }) }),
    isAdmin() && /* @__PURE__ */ u4("div", { class: "flex justify-between gap-2", children: [
      /* @__PURE__ */ u4(
        button_ripple_default,
        {
          class: "button btn-normal",
          disabled: !word.value,
          onClick: handleAddCardClick,
          children: "Add Card"
        }
      ),
      /* @__PURE__ */ u4(
        button_ripple_default,
        {
          class: "button btn-normal",
          disabled: !word.value || cards.value.length <= 1,
          onClick: handleDeleteCardClick,
          children: "Delete Card"
        }
      ),
      /* @__PURE__ */ u4(
        button_ripple_default,
        {
          class: "button btn-normal",
          disabled: !word.value,
          onClick: handleDeleteClick,
          children: "Delete"
        }
      ),
      /* @__PURE__ */ u4(
        button_ripple_default,
        {
          class: "button btn-normal",
          disabled: !word.value,
          onClick: handleUpdateClick,
          children: "Update"
        }
      )
    ] })
  ] });
}

// src/search.tsx
var search_default = () => {
  const word = useSignal("");
  const handleSearchClick = async () => {
    const text = word.peek().trim();
    if (!text) return;
    const item = await search(text);
    if (!item) return showTips("Not Found!");
    citem.value = item;
    isPhaseAnswer.value = true;
    sprint.value = -1;
    go("#study");
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u8BCD\u5178", onBackClick: () => go(), children: /* @__PURE__ */ u4(
    input_text_default,
    {
      autoCapitalize: "none",
      type: "search",
      name: "word",
      placeholder: "word",
      class: "m-2 w-[calc(100%-16px)]",
      binding: word,
      onChange: handleSearchClick,
      options: vocabulary
    }
  ) });
};

// node_modules/@sholvoir/generic/wait.js
var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// src/scard.tsx
var scard_default = ({ card }) => card && /* @__PURE__ */ u4(k, { children: [
  /* @__PURE__ */ u4("div", { class: "text-2xl flex items-center", children: card.phonetic }),
  card.trans?.split("\n").map((t4, i5) => /* @__PURE__ */ u4("p", { class: "text-2xl", children: t4 }, i5)),
  card.def?.split("\n").map(
    (t4, i5) => t4.startsWith(" ") ? /* @__PURE__ */ u4("p", { class: "text-lg", children: [
      "\u2002\u2022",
      t4
    ] }, i5) : /* @__PURE__ */ u4("p", { class: "text-xl font-bold", children: t4 }, i5)
  )
] });

// src/study.tsx
var study_default = () => {
  const finish = async () => {
    go();
    await syncTasks();
    totalStats2();
  };
  if (!citem.value) return go(), /* @__PURE__ */ u4("div", {});
  const cindex = useSignal(0);
  const startY = useSignal(0);
  const endY = useSignal(0);
  const player = A2(null);
  const handleIKnown = (level) => studied2(citem.value.word, level);
  const studyNext = async () => {
    if (++sprint.value <= 0) return finish();
    const item = await getEpisode2(wlid.value, blevel.value);
    if (!item) return finish();
    citem.value = item;
    isPhaseAnswer.value = false;
  };
  const continueMove = async (y5, max2) => {
    endY.value += y5;
    const diff = Math.abs(endY.value - startY.value);
    if (diff < max2) {
      await wait(30);
      await continueMove(y5, max2);
    }
    ;
  };
  const handleRefresh = async () => {
    showTips("Get Server Data...");
    const item = await getUpdatedItem(citem.value.word);
    if (!item) return showTips(`Not Found ${citem.value.word}`);
    citem.value = item;
  };
  const handleReportIssue = async () => {
    showTips("Submiting...", false);
    await submitIssue(citem.value.word);
    showTips("Submit Success!");
  };
  const handleKeyPress = (e4) => {
    e4.stopPropagation();
    if (e4.ctrlKey || e4.altKey) return;
    switch (e4.key) {
      case " ":
        handleClick(e4);
        break;
      case "N":
      case "X":
      case "n":
      case "x":
        if (isPhaseAnswer.value) handleIKnown().then(studyNext);
        break;
      case "M":
      case "Z":
      case "m":
      case "z":
        if (isPhaseAnswer.value) handleIKnown(0).then(studyNext);
        break;
    }
  };
  const handleTouchStart = (e4) => {
    e4.stopPropagation();
    e4.preventDefault();
    isPhaseAnswer.value && (endY.value = startY.value = e4.touches[0].clientY);
  };
  const handleTouchMove = (e4) => {
    e4.stopPropagation();
    e4.preventDefault();
    isPhaseAnswer.value && (endY.value = e4.touches[0].clientY);
  };
  const handleTouchCancel = (e4) => {
    e4.stopPropagation();
    e4.preventDefault();
    isPhaseAnswer.value && (endY.value = startY.value = 0);
  };
  const handleTouchEnd = async (e4) => {
    e4.stopPropagation();
    e4.preventDefault();
    if (isPhaseAnswer.value) {
      const h4 = e4.currentTarget.scrollHeight + 60;
      const diff = endY.value - startY.value;
      const max2 = Math.max(globalThis.innerHeight, h4);
      if (Math.abs(diff) >= globalThis.innerHeight / 6) {
        if (diff > 0) {
          await handleIKnown(0);
          await continueMove(60, max2);
        } else {
          await handleIKnown();
          await continueMove(-60, max2);
        }
        await studyNext();
        endY.value = startY.value = 0;
      } else {
        endY.value = startY.value = 0;
        if (Math.abs(diff) < 5) player.current?.play();
      }
    } else {
      endY.value = startY.value = 0;
      isPhaseAnswer.value = true;
      player.current?.play();
    }
  };
  const handleClick = (e4) => {
    e4.stopPropagation();
    if (!isPhaseAnswer.value) isPhaseAnswer.value = true;
    player.current?.play();
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u5B66\u4E60", onBackClick: finish, children: /* @__PURE__ */ u4(
    "div",
    {
      class: `relative grow flex flex-col outline-none`,
      tabIndex: -1,
      onKeyUp: handleKeyPress,
      style: { top: `${endY.value - startY.value}px` },
      children: [
        /* @__PURE__ */ u4("div", { class: "p-2 flex gap-4 text-[150%] items-center", children: [
          /* @__PURE__ */ u4(
            button_base_default,
            {
              disabled: !isPhaseAnswer.value,
              title: "X/N",
              onClick: () => handleIKnown().then(studyNext),
              class: "i-material-symbols-check-circle text-green"
            }
          ),
          /* @__PURE__ */ u4(
            button_base_default,
            {
              disabled: !isPhaseAnswer.value,
              title: "Z/M",
              onClick: () => handleIKnown(0).then(studyNext),
              class: "i-gridicons-cross-circle text-fuchsia"
            }
          ),
          /* @__PURE__ */ u4(
            button_base_default,
            {
              disabled: !isPhaseAnswer.value,
              onClick: () => player.current?.play(),
              class: "i-material-symbols-volume-up text-blue"
            }
          ),
          /* @__PURE__ */ u4("div", { class: "grow text-center text-xl", children: sprint.value > 0 ? sprint.value : "" }),
          /* @__PURE__ */ u4(
            button_base_default,
            {
              disabled: !isPhaseAnswer.value,
              onClick: () => handleIKnown(13).then(studyNext),
              class: "i-material-symbols-light-family-star text-yellow"
            }
          ),
          /* @__PURE__ */ u4(
            button_base_default,
            {
              disabled: !isPhaseAnswer.value,
              onClick: handleReportIssue,
              class: "i-material-symbols-error text-red"
            }
          ),
          /* @__PURE__ */ u4(
            button_base_default,
            {
              disabled: !isPhaseAnswer.value,
              onClick: handleRefresh,
              class: "i-material-symbols-refresh text-purple"
            }
          ),
          /* @__PURE__ */ u4("div", { class: "text-xl", children: citem.value.level })
        ] }),
        /* @__PURE__ */ u4(
          "div",
          {
            class: "grow px-2 pb-2 flex flex-col",
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
            onTouchCancel: handleTouchCancel,
            onClick: handleClick,
            children: [
              /* @__PURE__ */ u4("div", { class: "pb-2 flex gap-2 flex-wrap justify-between text-4xl font-bold", children: (console.log(citem.value), citem.value.word) }),
              isPhaseAnswer.value && /* @__PURE__ */ u4("div", { class: "grow h-0 flex flex-col", children: [
                /* @__PURE__ */ u4(tab_default, { class: "bg-[var(--bg-tab)]", cindex, children: citem.value.cards?.map((card, i5) => /* @__PURE__ */ u4(scard_default, { card }, i5)) }),
                /* @__PURE__ */ u4("audio", { ref: player, src: citem.value.cards?.at(cindex.value)?.sound ? `${API_URL}/sound?q=${encodeURIComponent(citem.value.cards[cindex.value].sound)}` : "" })
              ] })
            ]
          }
        )
      ]
    }
  ) });
};

// src/signup.tsx
var namePattern = /^[_\w-]+$/;
var fonePattern = /^\+\d+$/;
var signup_default = () => {
  const phone = useSignal("");
  const handleSignin = () => {
    go("#signin");
  };
  const handleSignup = async () => {
    if (!namePattern.test(name.value))
      return showTips("Name can only include _, letter, number and -");
    const fone = phone.value.replaceAll(/[\(\) -]/g, "");
    if (!fonePattern.test(fone))
      return showTips("Invalid phone number!");
    switch (await signup(fone, name.value)) {
      case STATUS_CODE.BadRequest:
        return showTips("\u7528\u6237\u540D\u5DF2\u6CE8\u518C");
      case STATUS_CODE.Conflict:
        return showTips("\u7535\u8BDD\u53F7\u7801\u5DF2\u6CE8\u518C");
      case STATUS_CODE.OK:
        showTips("\u6CE8\u518C\u6210\u529F\uFF0C\u8BF7\u767B\u5F55");
        go("#signin");
    }
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u6CE8\u518C", onBackClick: () => go(), children: /* @__PURE__ */ u4("div", { class: "p-2 h-full w-64 mx-auto flex flex-col", children: [
    /* @__PURE__ */ u4("label", { children: "\u7528\u6237\u540D" }),
    /* @__PURE__ */ u4(
      input_simple_default,
      {
        name: "name",
        placeholder: "name",
        autoCapitalize: "none",
        binding: name,
        class: "mb-3"
      }
    ),
    /* @__PURE__ */ u4("label", { children: "\u624B\u673A\u53F7\u7801(\u542B\u56FD\u9645\u533A\u53F7)" }),
    /* @__PURE__ */ u4(
      input_simple_default,
      {
        name: "phone",
        placeholder: "+1(987)765-5432",
        autoCapitalize: "none",
        binding: phone,
        class: "mb-3"
      }
    ),
    /* @__PURE__ */ u4("div", { class: "text-right mb-3", children: [
      "\u5DF2\u7ECF\u6CE8\u518C\uFF0C\u8BF7",
      /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-normal mx-1", onClick: handleSignin, children: "\u767B\u5F55" })
    ] }),
    /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-prime py-1", onClick: handleSignup, children: "\u6CE8\u518C" })
  ] }) });
};

// src/signin.tsx
var timer;
var signin_default = () => {
  const code = useSignal("");
  const counter = useSignal(0);
  const canSendOTP = useSignal(true);
  const handleSend = async () => {
    canSendOTP.value = false;
    counter.value = 60;
    timer = setInterval(() => {
      if (--counter.value <= 0) {
        clearInterval(timer);
        timer = void 0;
        canSendOTP.value = true;
      }
    }, 1e3);
    switch (await otp(name.value)) {
      case STATUS_CODE.BadRequest:
        return showTips("\u8BF7\u8F93\u5165\u7528\u6237\u540D");
      case STATUS_CODE.NotFound:
        return showTips("\u672A\u627E\u5230\u7528\u6237");
      case STATUS_CODE.FailedDependency:
        return showTips("\u6B64\u7528\u6237\u672A\u6CE8\u518C\u624B\u673A\u53F7\u7801");
      case STATUS_CODE.TooEarly:
        return showTips("\u8BF7\u6C42OTP\u8FC7\u4E8E\u9891\u7E41");
      case STATUS_CODE.OK:
        return showTips("OTP\u5DF2\u53D1\u9001");
      default:
        return showTips("\u672A\u77E5\u670D\u52A1\u5668\u9519\u8BEF");
    }
  };
  const handleClickLogin = async () => {
    switch (await signin(name.value, code.value)) {
      case STATUS_CODE.BadRequest:
        return showTips("\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801");
      case STATUS_CODE.NotFound:
        return showTips("\u672A\u627E\u5230\u7528\u6237");
      case STATUS_CODE.Unauthorized:
        return showTips("\u9519\u8BEF\u7684\u5BC6\u7801");
      case STATUS_CODE.OK:
        showTips("\u5DF2\u767B\u5F55");
        if (timer) clearInterval(timer);
        location.reload();
    }
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u767B\u5F55", onBackClick: () => go(), children: /* @__PURE__ */ u4("div", { class: "p-2 h-full w-64 mx-auto flex flex-col", children: [
    /* @__PURE__ */ u4("label", { for: "name", children: "\u7528\u6237\u540D" }),
    /* @__PURE__ */ u4(input_simple_default, { name: "name", class: "mb-3", placeholder: "name", autoCapitalize: "none", binding: name }),
    /* @__PURE__ */ u4("label", { for: "code", children: "\u4E34\u65F6\u5BC6\u7801" }),
    /* @__PURE__ */ u4(input_simple_default, { name: "code", placeholder: "code", autoCapitalize: "none", binding: code }),
    /* @__PURE__ */ u4(button_base_default, { class: "btn-anchor block text-right mb-3", onClick: handleSend, disabled: !canSendOTP.value, children: [
      "Send One-Time Passcode ",
      counter.value > 0 ? `(${counter.value})` : ""
    ] }),
    /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-prime", onClick: handleClickLogin, children: "\u767B\u5F55" })
  ] }) });
};

// src/signout.tsx
var signout_default = () => {
  const handleSignoutClick = () => {
    user.value = "";
    go();
    signout();
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u767B\u51FA", onBackClick: () => go(), children: /* @__PURE__ */ u4("div", { class: "p-2 h-full w-64 mx-auto flex flex-col gap-4", children: /* @__PURE__ */ u4("div", { class: "flex gap-2", children: [
    /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-normal grow", onClick: () => go(), children: "\u53D6\u6D88" }),
    /* @__PURE__ */ u4(button_ripple_default, { class: "button btn-prime grow", onClick: handleSignoutClick, children: "\u767B\u51FA" })
  ] }) }) });
};

// src/syswordlist.tsx
var syswordlist_default = () => {
  const name2 = useSignal("");
  const disc = useSignal("");
  const words = useSignal("");
  const handleOKClick = async () => {
    const result = await postSysWordList(name2.value, words.value, disc.value);
    showTips(result ? "\u8BCD\u4E66\u4E0A\u4F20\u6210\u529F" : "\u8BCD\u4E66\u4E0A\u4F20\u5931\u8D25");
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u7CFB\u7EDF\u8BCD\u4E66", className: "p-2", onBackClick: () => go(), children: [
    /* @__PURE__ */ u4("label", { for: "name", children: "\u540D\u79F0" }),
    /* @__PURE__ */ u4("input", { name: "name", value: name2, onChange: (e4) => name2.value = e4.currentTarget.value }),
    /* @__PURE__ */ u4("label", { for: "disc", class: "mt-2", children: "\u63CF\u8FF0" }),
    /* @__PURE__ */ u4("input", { name: "disc", value: disc, onChange: (e4) => disc.value = e4.currentTarget.value }),
    /* @__PURE__ */ u4("label", { for: "disc", class: "mt-2", children: "\u8BCD\u8868" }),
    /* @__PURE__ */ u4("textarea", { class: "grow", value: words, onChange: (e4) => words.value = e4.currentTarget.value }),
    /* @__PURE__ */ u4("div", { class: "flex justify-end gap-2 mt-2", children: [
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-32 button btn-normal", onClick: () => go(), children: "\u53D6\u6D88" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-32 button btn-prime", onClick: handleOKClick, children: "\u4E0A\u4F20" })
    ] })
  ] });
};

// src/wordlists.tsx
var wordlists_default = () => {
  const cindex = useSignal(0);
  const wls = useSignal([]);
  const handleNewClick = () => {
    wlid.value = "";
    go("#wordlist");
  };
  const handleDeleteClick = async () => {
    await deleteWordList(wls.value[cindex.value].wlid);
    wls.value = [...wls.value.slice(0, cindex.value), ...wls.value.slice(cindex.value + 1)];
  };
  const handleUpdateClick = () => {
    wlid.value = wls.value[cindex.value].wlid;
    go("#wordlist");
  };
  const init2 = async () => {
    wls.value = await getWordlists((wl) => wl.wlid.startsWith(user.value));
  };
  y2(() => {
    init2();
  }, []);
  return /* @__PURE__ */ u4(dialog_default, { title: "\u6211\u7684\u8BCD\u4E66", onBackClick: () => go(), children: /* @__PURE__ */ u4("div", { class: "p-2 h-full flex flex-col gap-2", children: [
    /* @__PURE__ */ u4("div", { class: "shrink grow border overflow-y-auto", children: /* @__PURE__ */ u4(list_default, { cindex, options: wls.value.map((wl) => wl.disc ?? wl.wlid) }) }),
    /* @__PURE__ */ u4("div", { class: "flex justify-end gap-2 pb-2", children: [
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-24 button btn-normal", name: "new", onClick: handleNewClick, children: "\u65B0\u5EFA" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-24 button btn-normal", name: "delete", disabled: !wls.value.length, onClick: handleDeleteClick, children: "\u5220\u9664" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-24 button btn-normal", name: "update", disabled: !wls.value.length, onClick: handleUpdateClick, children: "\u66F4\u65B0" })
    ] })
  ] }) });
};

// src/wordlist.tsx
var wordlist_default = () => {
  const name2 = useSignal("");
  const disc = useSignal("");
  const words = useSignal("");
  const replace = useSignal("");
  const handleOKClick = async () => {
    const [status, result] = await postMyWordList(name2.value, words.value, disc.value);
    switch (status) {
      case STATUS_CODE.BadRequest:
        return showTips("Error: \u65E0\u540D\u79F0\u6216\u65E0\u5185\u5BB9");
      case STATUS_CODE.NotAcceptable:
        replace.value = Object.entries(result).map(([key, value]) => `${key}: ${value.join(",")}`).join("\n");
        return showTips("\u672A\u901A\u8FC7\u62FC\u5199\u68C0\u67E5");
      case STATUS_CODE.OK: {
        showTips("\u8BCD\u4E66\u4E0A\u4F20\u6210\u529F");
        go();
      }
    }
  };
  return /* @__PURE__ */ u4(dialog_default, { title: "\u4E0A\u4F20\u6211\u7684\u8BCD\u4E66", className: "p-2", onBackClick: () => go(), children: [
    /* @__PURE__ */ u4("label", { for: "name", children: "\u540D\u79F0" }),
    /* @__PURE__ */ u4("input", { name: "name", value: name2, onChange: (e4) => name2.value = e4.currentTarget.value }),
    /* @__PURE__ */ u4("label", { for: "disc", class: "mt-2", children: "\u63CF\u8FF0" }),
    /* @__PURE__ */ u4("input", { name: "disc", value: disc, onChange: (e4) => disc.value = e4.currentTarget.value }),
    /* @__PURE__ */ u4("label", { for: "words", class: "mt-2", children: "\u8BCD\u8868" }),
    /* @__PURE__ */ u4("textarea", { name: "words", class: "grow", value: words, onChange: (e4) => words.value = e4.currentTarget.value }),
    replace.value.length ? /* @__PURE__ */ u4(k, { children: [
      /* @__PURE__ */ u4("label", { for: "replace", class: "text-red-500 mt-2", children: "\u8BF7\u8003\u8651\u7528\u4E0B\u9762\u7684\u8BCD\u66FF\u6362" }),
      /* @__PURE__ */ u4("textarea", { name: "replace", class: "grow", value: replace, onChange: (e4) => replace.value = e4.currentTarget.value })
    ] }) : void 0,
    /* @__PURE__ */ u4("div", { class: "flex justify-end gap-2 mt-2", children: [
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-32 button btn-normal", onClick: () => go(), children: "\u53D6\u6D88" }),
      /* @__PURE__ */ u4(button_ripple_default, { class: "w-32 button btn-prime", onClick: handleOKClick, children: "\u4E0A\u4F20" })
    ] })
  ] });
};

// src/icon-loading.tsx
var icon_loading_default = (props) => /* @__PURE__ */ u4("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", ...props, children: /* @__PURE__ */ u4("g", { children: [
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#000000" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#555555", transform: "rotate(45,64,64)" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#949494", transform: "rotate(90,64,64)" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#cccccc", transform: "rotate(135,64,64)" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#e1e1e1", transform: "rotate(180,64,64)" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#e1e1e1", transform: "rotate(225,64,64)" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#e1e1e1", transform: "rotate(270,64,64)" }),
  /* @__PURE__ */ u4("circle", { cx: "16", cy: "64", r: "16", fill: "#e1e1e1", transform: "rotate(315,64,64)" }),
  /* @__PURE__ */ u4(
    "animateTransform",
    {
      attributeName: "transform",
      type: "rotate",
      values: "45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64;0 64 64;",
      calcMode: "discrete",
      dur: "720ms",
      repeatCount: "indefinite"
    }
  )
] }) });

// src/root.tsx
var root_default = () => {
  const dialogs = /* @__PURE__ */ new Map();
  dialogs.set("#home", /* @__PURE__ */ u4(home_default, {}));
  dialogs.set("#help", /* @__PURE__ */ u4(help_default, {}));
  dialogs.set("#about", /* @__PURE__ */ u4(about_default, {}));
  dialogs.set("#menu", /* @__PURE__ */ u4(menu_default, {}));
  dialogs.set("#issue", /* @__PURE__ */ u4(issue_default, {}));
  dialogs.set("#setting", /* @__PURE__ */ u4(setting_default, {}));
  dialogs.set("#lookup", /* @__PURE__ */ u4(Lookup, {}));
  dialogs.set("#search", /* @__PURE__ */ u4(search_default, {}));
  dialogs.set("#study", /* @__PURE__ */ u4(study_default, {}));
  dialogs.set("#signup", /* @__PURE__ */ u4(signup_default, {}));
  dialogs.set("#signin", /* @__PURE__ */ u4(signin_default, {}));
  dialogs.set("#signout", /* @__PURE__ */ u4(signout_default, {}));
  dialogs.set("#syswordlist", /* @__PURE__ */ u4(syswordlist_default, {}));
  dialogs.set("#wordlists", /* @__PURE__ */ u4(wordlists_default, {}));
  dialogs.set("#wordlist", /* @__PURE__ */ u4(wordlist_default, {}));
  y2(() => {
    init();
  }, []);
  return /* @__PURE__ */ u4(k, { children: [
    dialogs.get(loca.value),
    loading.value && /* @__PURE__ */ u4("div", { class: "absolute inset-0 bg-[var(--bg-half)] flex justify-center content-center flex-wrap", children: /* @__PURE__ */ u4(icon_loading_default, { class: "w-16 h-16" }) })
  ] });
};

// src/main1.tsx
E(/* @__PURE__ */ u4(root_default, {}), document.getElementById("root"));
//# sourceMappingURL=index.js.map
