!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.AOS = t());
})(this, function () {
  "use strict";
  function w() {
    return d.Date.now();
  }
  var e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    y = "Expected a function",
    n = NaN,
    i = "[object Symbol]",
    a = /^\s+|\s+$/g,
    r = /^[-+]0x[0-9a-f]+$/i,
    s = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    u = parseInt,
    t = "object" == typeof e && e && e.Object === Object && e,
    o = "object" == typeof self && self && self.Object === Object && self,
    d = t || o || Function("return this")(),
    l = Object.prototype.toString,
    h = Math.max,
    k = Math.min;
  function m(n, o, e) {
    var i,
      a,
      r,
      s,
      c,
      u,
      d = 0,
      l = !1,
      m = !1,
      t = !0;
    if ("function" != typeof n) throw new TypeError(y);
    function f(e) {
      var t = i,
        o = a;
      return (i = a = void 0), (d = e), (s = n.apply(o, t));
    }
    function p(e) {
      var t = e - u;
      return void 0 === u || o <= t || t < 0 || (m && r <= e - d);
    }
    function b() {
      var e,
        t = w();
      if (p(t)) return v(t);
      c = setTimeout(b, ((e = o - (t - u)), m ? k(e, r - (t - d)) : e));
    }
    function v(e) {
      return (c = void 0), t && i ? f(e) : ((i = a = void 0), s);
    }
    function g() {
      var e = w(),
        t = p(e);
      if (((i = arguments), (a = this), (u = e), t)) {
        if (void 0 === c)
          return (d = t = u), (c = setTimeout(b, o)), l ? f(t) : s;
        if (m) return (c = setTimeout(b, o)), f(u);
      }
      return void 0 === c && (c = setTimeout(b, o)), s;
    }
    return (
      (o = O(o) || 0),
      x(e) &&
        ((l = !!e.leading),
        (r = (m = "maxWait" in e) ? h(O(e.maxWait) || 0, o) : r),
        (t = "trailing" in e ? !!e.trailing : t)),
      (g.cancel = function () {
        void 0 !== c && clearTimeout(c), (i = u = a = c = void (d = 0));
      }),
      (g.flush = function () {
        return void 0 === c ? s : v(w());
      }),
      g
    );
  }
  function x(e) {
    var t = typeof e;
    return e && ("object" == t || "function" == t);
  }
  function O(e) {
    if ("number" == typeof e) return e;
    if (
      "symbol" == typeof (t = e) ||
      (t && "object" == typeof t && l.call(t) == i)
    )
      return n;
    var t;
    if (
      "string" !=
      typeof (e = x(e)
        ? x((o = "function" == typeof e.valueOf ? e.valueOf() : e))
          ? o + ""
          : o
        : e)
    )
      return 0 === e ? e : +e;
    e = e.replace(a, "");
    var o = s.test(e);
    return o || c.test(e) ? u(e.slice(2), o ? 2 : 8) : r.test(e) ? n : +e;
  }
  function j() {
    return N.Date.now();
  }
  var f = /^\s+|\s+$/g,
    p = /^[-+]0x[0-9a-f]+$/i,
    b = /^0b[01]+$/i,
    v = /^0o[0-7]+$/i,
    g = parseInt,
    o = "object" == typeof e && e && e.Object === Object && e,
    e = "object" == typeof self && self && self.Object === Object && self,
    N = o || e || Function("return this")(),
    E = Object.prototype.toString,
    z = Math.max,
    C = Math.min;
  function A(e) {
    var t = typeof e;
    return e && ("object" == t || "function" == t);
  }
  function q(e) {
    if ("number" == typeof e) return e;
    if (
      "symbol" == typeof (t = e) ||
      (t && "object" == typeof t && "[object Symbol]" == E.call(t))
    )
      return NaN;
    var t;
    if (
      "string" !=
      typeof (e = A(e)
        ? A((o = "function" == typeof e.valueOf ? e.valueOf() : e))
          ? o + ""
          : o
        : e)
    )
      return 0 === e ? e : +e;
    e = e.replace(f, "");
    var o = b.test(e);
    return o || v.test(e) ? g(e.slice(2), o ? 2 : 8) : p.test(e) ? NaN : +e;
  }
  function L(n, o, e) {
    var i,
      a,
      r,
      s,
      c,
      u,
      d = 0,
      l = !1,
      m = !1,
      t = !0;
    if ("function" != typeof n) throw new TypeError("Expected a function");
    function f(e) {
      var t = i,
        o = a;
      return (i = a = void 0), (d = e), (s = n.apply(o, t));
    }
    function p(e) {
      var t = e - u;
      return void 0 === u || o <= t || t < 0 || (m && r <= e - d);
    }
    function b() {
      var e,
        t = j();
      if (p(t)) return v(t);
      c = setTimeout(b, ((e = o - (t - u)), m ? C(e, r - (t - d)) : e));
    }
    function v(e) {
      return (c = void 0), t && i ? f(e) : ((i = a = void 0), s);
    }
    function g() {
      var e = j(),
        t = p(e);
      if (((i = arguments), (a = this), (u = e), t)) {
        if (void 0 === c)
          return (d = t = u), (c = setTimeout(b, o)), l ? f(t) : s;
        if (m) return (c = setTimeout(b, o)), f(u);
      }
      return void 0 === c && (c = setTimeout(b, o)), s;
    }
    return (
      (o = q(o) || 0),
      A(e) &&
        ((l = !!e.leading),
        (r = (m = "maxWait" in e) ? z(q(e.maxWait) || 0, o) : r),
        (t = "trailing" in e ? !!e.trailing : t)),
      (g.cancel = function () {
        void 0 !== c && clearTimeout(c), (i = u = a = c = void (d = 0));
      }),
      (g.flush = function () {
        return void 0 === c ? s : v(j());
      }),
      g
    );
  }
  var T = function () {};
  function M(e) {
    e &&
      e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          e = Array.prototype.slice.call(e.removedNodes);
        if (
          (function e(t) {
            for (var o, n = void 0, n = 0; n < t.length; n += 1) {
              if ((o = t[n]).dataset && o.dataset.aos) return 1;
              if (o.children && e(o.children)) return 1;
            }
          })(t.concat(e))
        )
          return T();
      });
  }
  function S() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }
  var D = function () {
      return !!S();
    },
    H = function (e, t) {
      var o = window.document,
        n = new (S())(M);
      (T = t),
        n.observe(o.documentElement, {
          childList: !0,
          subtree: !0,
          removedNodes: !0,
        });
    },
    $ = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    e = function (e, t, o) {
      return t && F(e.prototype, t), o && F(e, o), e;
    },
    W =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o,
            n = arguments[t];
          for (o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    P =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    Y =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    _ =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    B =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function F(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function I() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }
  function K(e, t) {
    var o = void 0;
    return (
      Z.ie11()
        ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
            detail: t,
          })
        : (o = new CustomEvent(e, { detail: t })),
      document.dispatchEvent(o)
    );
  }
  function G(e) {
    return e.forEach(function (e, t) {
      var o, n, i, a, r, s;
      (o = e),
        (n = window.pageYOffset),
        (a = o.options),
        (r = o.position),
        (s = o.node),
        o.data,
        (e = function () {
          var t, e;
          o.animated &&
            ((t = s),
            (e = a.animatedClassNames) &&
              e.forEach(function (e) {
                return t.classList.remove(e);
              }),
            K("aos:out", s),
            o.options.id && K("aos:in:" + o.options.id, s),
            (o.animated = !1));
        }),
        a.mirror && n >= r.out && !a.once
          ? e()
          : n >= r.in
          ? o.animated ||
            ((i = s),
            (r = a.animatedClassNames) &&
              r.forEach(function (e) {
                return i.classList.add(e);
              }),
            K("aos:in", s),
            o.options.id && K("aos:in:" + o.options.id, s),
            (o.animated = !0))
          : o.animated && !a.once && e();
    });
  }
  function J(e) {
    for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
      (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
        (o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
        (e = e.offsetParent);
    return { top: o, left: t };
  }
  function Q(e, t, o) {
    if (void 0 !== (t = e.getAttribute("data-aos-" + t))) {
      if ("true" === t) return !0;
      if ("false" === t) return !1;
    }
    return t || o;
  }
  function R() {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (e) {
      return { node: e };
    });
  }
  function U() {
    return document.all && !window.atob;
  }
  function V() {
    var e, r;
    (te =
      0 < arguments.length && void 0 !== arguments[0] && arguments[0]
        ? !0
        : te) &&
      ((r = oe),
      (e = ee).forEach(function (e, t) {
        var o = Q(e.node, "mirror", r.mirror),
          n = Q(e.node, "once", r.once),
          i = Q(e.node, "id"),
          a = r.useClassNames && e.node.getAttribute("data-aos"),
          a = [r.animatedClassName]
            .concat(a ? a.split(" ") : [])
            .filter(function (e) {
              return "string" == typeof e;
            });
        r.initClassName && e.node.classList.add(r.initClassName),
          (e.position = {
            in: (function (e, t, o) {
              var n = window.innerHeight,
                i = Q(e, "anchor"),
                a = Q(e, "anchor-placement"),
                t = Number(Q(e, "offset", a ? 0 : t)),
                o = a || o,
                r = e;
              i &&
                document.querySelectorAll(i) &&
                (r = document.querySelectorAll(i)[0]);
              var s = J(r).top - n;
              switch (o) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  s += r.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  s += r.offsetHeight;
                  break;
                case "top-center":
                  s += n / 2;
                  break;
                case "center-center":
                  s += n / 2 + r.offsetHeight / 2;
                  break;
                case "bottom-center":
                  s += n / 2 + r.offsetHeight;
                  break;
                case "top-top":
                  s += n;
                  break;
                case "bottom-top":
                  s += n + r.offsetHeight;
                  break;
                case "center-top":
                  s += n + r.offsetHeight / 2;
              }
              return s + t;
            })(e.node, r.offset, r.anchorPlacement),
            out:
              o &&
              (function (e, t) {
                window.innerHeight;
                var o = Q(e, "anchor"),
                  t = Q(e, "offset", t),
                  e = e;
                return (
                  o &&
                    document.querySelectorAll(o) &&
                    (e = document.querySelectorAll(o)[0]),
                  J(e).top + e.offsetHeight - t
                );
              })(e.node, r.offset),
          }),
          (e.options = { once: n, mirror: o, animatedClassNames: a, id: i });
      }),
      G((ee = e)),
      window.addEventListener(
        "scroll",
        (function (e, t, o) {
          var n = !0,
            i = !0;
          if ("function" != typeof e) throw new TypeError(y);
          return (
            x(o) &&
              ((n = "leading" in o ? !!o.leading : n),
              (i = "trailing" in o ? !!o.trailing : i)),
            m(e, t, { leading: n, maxWait: t, trailing: i })
          );
        })(function () {
          G(ee, oe.once);
        }, oe.throttleDelay)
      ));
  }
  function X() {
    if (((ee = R()), ie(oe.disable) || U())) return ne();
    V();
  }
  var Z =
      (e(ae, [
        {
          key: "phone",
          value: function () {
            var e = I();
            return !(!P.test(e) && !Y.test(e.substr(0, 4)));
          },
        },
        {
          key: "mobile",
          value: function () {
            var e = I();
            return !(!_.test(e) && !B.test(e.substr(0, 4)));
          },
        },
        {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          },
        },
        {
          key: "ie11",
          value: function () {
            return (
              "-ms-scroll-limit" in document.documentElement.style &&
              "-ms-ime-align" in document.documentElement.style
            );
          },
        },
      ]),
      new ae()),
    ee = [],
    te = !1,
    oe = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      mirror: !1,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
      useClassNames: !1,
      disableMutationObserver: !1,
      throttleDelay: 99,
      debounceDelay: 50,
    },
    ne = function () {
      ee.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"),
          e.node.removeAttribute("data-aos-easing"),
          e.node.removeAttribute("data-aos-duration"),
          e.node.removeAttribute("data-aos-delay"),
          oe.initClassName && e.node.classList.remove(oe.initClassName),
          oe.animatedClassName && e.node.classList.remove(oe.animatedClassName);
      });
    },
    ie = function (e) {
      return (
        !0 === e ||
        ("mobile" === e && Z.mobile()) ||
        ("phone" === e && Z.phone()) ||
        ("tablet" === e && Z.tablet()) ||
        ("function" == typeof e && !0 === e())
      );
    };
  function ae() {
    $(this, ae);
  }
  return {
    init: function (e) {
      return (
        (oe = W(oe, e)),
        (ee = R()),
        oe.disableMutationObserver ||
          D() ||
          (console.info(
            '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
          ),
          (oe.disableMutationObserver = !0)),
        oe.disableMutationObserver || H("[data-aos]", X),
        ie(oe.disable) || U()
          ? ne()
          : (document
              .querySelector("body")
              .setAttribute("data-aos-easing", oe.easing),
            document
              .querySelector("body")
              .setAttribute("data-aos-duration", oe.duration),
            document
              .querySelector("body")
              .setAttribute("data-aos-delay", oe.delay),
            -1 === ["DOMContentLoaded", "load"].indexOf(oe.startEvent)
              ? document.addEventListener(oe.startEvent, function () {
                  V(!0);
                })
              : window.addEventListener("load", function () {
                  V(!0);
                }),
            "DOMContentLoaded" === oe.startEvent &&
              -1 < ["complete", "interactive"].indexOf(document.readyState) &&
              V(!0),
            window.addEventListener("resize", L(V, oe.debounceDelay, !0)),
            window.addEventListener(
              "orientationchange",
              L(V, oe.debounceDelay, !0)
            ),
            ee)
      );
    },
    refresh: V,
    refreshHard: X,
  };
});
