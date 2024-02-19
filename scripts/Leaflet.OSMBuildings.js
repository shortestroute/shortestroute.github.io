(function (ba) {
  function Q(a, b) {
    var c = a.x - b.x,
      d = a.y - b.y;
    return c * c + d * d;
  }
  function ua(a) {
    var b = a.length;
    if (16 > b) return !1;
    var c,
      d = Infinity,
      e = -Infinity,
      g = Infinity,
      f = -Infinity;
    for (c = 0; c < b - 1; c += 2)
      (d = Math.min(d, a[c])),
        (e = Math.max(e, a[c])),
        (g = Math.min(g, a[c + 1])),
        (f = Math.max(f, a[c + 1]));
    c = e - d;
    f -= g;
    e = c / f;
    if (0.85 > e || 1.15 < e) return !1;
    d = { x: d + c / 2, y: g + f / 2 };
    c = (c + f) / 4;
    g = c * c;
    for (c = 0; c < b - 1; c += 2)
      if (((f = Q({ x: a[c], y: a[c + 1] }, d)), 0.8 > f / g || 1.2 < f / g))
        return !1;
    return !0;
  }
  function ia(a, b) {
    var c = {};
    a /= R;
    b /= R;
    var d;
    d =
      0 >= b
        ? 90
        : 1 <= b
        ? -90
        : ((2 * va(wa(D * (1 - 2 * b))) - H) / D) * 180;
    c.latitude = d;
    c.longitude = 360 * (1 === a ? 1 : ((a % 1) + 1) % 1) - 180;
    return c;
  }
  function ca(a, b) {
    var c = S(1, I(0, 0.5 - xa(ja(ya + (H * a) / 180)) / D / 2));
    return { x: ((b / 360 + 0.5) * R) << 0, y: (c * R) << 0 };
  }
  function T(a) {
    for (var b = B + n, c = z + p, d = 0, e = a.length - 3; d < e; d += 2)
      if (a[d] > n && a[d] < b && a[d + 1] > p && a[d + 1] < c) return !0;
    return !1;
  }
  function za() {
    Y ||
      (Y = setInterval(function () {
        for (var a = E.items, b = !1, c = 0, d = a.length; c < d; c++)
          1 > a[c].scale &&
            ((a[c].scale += 0.1), 1 < a[c].scale && (a[c].scale = 1), (b = !0));
        A.render();
        b || (clearInterval(Y), (Y = null));
      }, 33));
  }
  function da(a) {
    J = U + a.x;
    K = z + a.y;
    A.render(!0);
  }
  function ka(a) {
    B = a.width;
    z = a.height;
    U = (B / 2) << 0;
    ea = (z / 2) << 0;
    J = U;
    K = z;
    A.setSize(B, z);
    fa = 400;
  }
  function la(a) {
    x = a;
    R = 256 << x;
    a = ia(n + U, p + ea);
    var b = ca(a.latitude, 0);
    ma = ca(a.latitude, 1).x - b.x;
    C = na(0.95, x - 15);
    ga = "" + G.alpha(C);
    Z = "" + aa.alpha(C);
    V = "" + M.alpha(C);
  }
  var u = Math,
    wa = u.exp,
    xa = u.log,
    Aa = u.sin,
    Ba = u.cos,
    ja = u.tan,
    va = u.atan,
    N = u.atan2,
    S = u.min,
    I = u.max,
    oa = u.sqrt,
    pa = u.ceil,
    na = u.pow,
    qa = qa || Array,
    ra = ra || Array,
    u = /iP(ad|hone|od)/g.test(navigator.userAgent),
    w = !!~navigator.userAgent.indexOf("Trident"),
    Ca =
      !ba.requestAnimationFrame || u || w
        ? function (a) {
            a();
          }
        : ba.requestAnimationFrame,
    F = (function () {
      function a(b, a, c) {
        0 > c && (c += 1);
        1 < c && --c;
        return c < 1 / 6
          ? b + 6 * (a - b) * c
          : 0.5 > c
          ? a
          : c < 2 / 3
          ? b + (a - b) * (2 / 3 - c) * 6
          : b;
      }
      function b(b, a) {
        if (void 0 !== b) return Math.min(a, Math.max(0, b || 0));
      }
      var c = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgrey: "#a9a9a9",
          darkgreen: "#006400",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          grey: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgrey: "#d3d3d3",
          lightgreen: "#90ee90",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        },
        d = function (a, c, d, k) {
          this.r = b(a, 1);
          this.g = b(c, 1);
          this.b = b(d, 1);
          this.a = b(k, 1) || 1;
        };
      d.parse = function (b) {
        if ("string" === typeof b) {
          b = b.toLowerCase();
          b = c[b] || b;
          var a;
          if ((a = b.match(/^#?(\w{2})(\w{2})(\w{2})$/)))
            return new d(
              parseInt(a[1], 16) / 255,
              parseInt(a[2], 16) / 255,
              parseInt(a[3], 16) / 255
            );
          if ((a = b.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/)))
            return new d(
              parseFloat(a[1]) / 255,
              parseFloat(a[2]) / 255,
              parseFloat(a[3]) / 255,
              a[4] ? parseFloat(a[5]) : 1
            );
        }
        return new d();
      };
      d.fromHSL = function (b, c, f, k) {
        if (0 === c) return new d(f, f, f, k);
        c = 0.5 > f ? f * (1 + c) : f + c - f * c;
        f = 2 * f - c;
        b /= 360;
        return new d(a(f, c, b + 1 / 3), a(f, c, b), a(f, c, b - 1 / 3), k);
      };
      d.prototype = {
        toHSL: function () {
          if (void 0 !== this.r && void 0 !== this.g && void 0 !== this.b) {
            var b = Math.max(this.r, this.g, this.b),
              a = Math.min(this.r, this.g, this.b),
              c,
              d = (b + a) / 2,
              h = b - a;
            if (h) {
              a = 0.5 < d ? h / (2 - b - a) : h / (b + a);
              switch (b) {
                case this.r:
                  c = (this.g - this.b) / h + (this.g < this.b ? 6 : 0);
                  break;
                case this.g:
                  c = (this.b - this.r) / h + 2;
                  break;
                case this.b:
                  c = (this.r - this.g) / h + 4;
              }
              c *= 60;
            } else c = a = 0;
            return { h: c, s: a, l: d, a: this.a };
          }
        },
        toString: function () {
          if (void 0 !== this.r && void 0 !== this.g && void 0 !== this.b)
            return 1 === this.a
              ? "#" +
                  (
                    16777216 +
                    (Math.round(255 * this.r) << 16) +
                    (Math.round(255 * this.g) << 8) +
                    Math.round(255 * this.b)
                  )
                    .toString(16)
                    .slice(1, 7)
              : "rgba(" +
                  [
                    Math.round(255 * this.r),
                    Math.round(255 * this.g),
                    Math.round(255 * this.b),
                    this.a.toFixed(2),
                  ].join() +
                  ")";
        },
        toArray: function () {
          if (void 0 !== this.r && void 0 !== this.g && void 0 !== this.b)
            return [this.r, this.g, this.b];
        },
        hue: function (b) {
          var a = this.toHSL();
          return d.fromHSL(a.h + b, a.s, a.l);
        },
        saturation: function (b) {
          var a = this.toHSL();
          return d.fromHSL(a.h, a.s * b, a.l);
        },
        lightness: function (b) {
          var a = this.toHSL();
          return d.fromHSL(a.h, a.s, a.l * b);
        },
        red: function (a) {
          return new d(this.r * a, this.g, this.b, this.a);
        },
        green: function (a) {
          return new d(this.r, this.g * a, this.b, this.a);
        },
        blue: function (a) {
          return new d(this.r, this.g, this.b * a, this.a);
        },
        alpha: function (a) {
          return new d(this.r, this.g, this.b, this.a * a);
        },
        copy: function () {
          return new d(this.r, this.g, this.b, this.a);
        },
      };
      return d;
    })();
  "object" === typeof module && (module.exports = F);
  var Da = (function () {
      var a = Math,
        b = a.PI,
        c = a.sin,
        d = a.cos,
        e = a.tan,
        g = a.asin,
        f = a.atan2,
        k = b / 180,
        h = 23.4397 * k;
      return function (a, m, q) {
        q = k * -q;
        m *= k;
        a = a.valueOf() / 864e5 - 0.5 + 2440588 - 2451545;
        var r = k * (357.5291 + 0.98560028 * a),
          n;
        n = k * (1.9148 * c(r) + 0.02 * c(2 * r) + 3e-4 * c(3 * r));
        n = r + n + 102.9372 * k + b;
        r = g(c(0) * d(h) + d(0) * c(h) * c(n));
        n = f(c(n) * d(h) - e(0) * c(h), d(n));
        a = k * (280.16 + 360.9856235 * a) - q - n;
        q = g(c(m) * c(r) + d(m) * d(r) * d(a));
        m = f(c(a), d(a) * c(m) - e(r) * d(m));
        return { altitude: q, azimuth: m - b / 2 };
      };
    })(),
    Fa = (function () {
      function a(a) {
        a = a.toLowerCase();
        return "#" === a[0] ? a : d[e[a] || a] || null;
      }
      function b(a, b) {
        var c,
          d,
          e,
          m,
          q = 0,
          r,
          n;
        r = 0;
        for (n = a.length - 3; r < n; r += 2)
          (c = a[r]),
            (d = a[r + 1]),
            (e = a[r + 2]),
            (m = a[r + 3]),
            (q += c * m - e * d);
        if ((0 < q / 2 ? "CW" : "CCW") === b) return a;
        c = [];
        for (d = a.length - 2; 0 <= d; d -= 2) c.push(a[d], a[d + 1]);
        return c;
      }
      function c(a) {
        var d,
          e,
          h = [],
          l;
        switch (a.type) {
          case "GeometryCollection":
            h = [];
            d = 0;
            for (e = a.geometries.length; d < e; d++)
              (l = c(a.geometries[d])) && h.push.apply(h, l);
            return h;
          case "MultiPolygon":
            h = [];
            d = 0;
            for (e = a.coordinates.length; d < e; d++)
              (l = c({ type: "Polygon", coordinates: a.coordinates[d] })) &&
                h.push.apply(h, l);
            return h;
          case "Polygon":
            a = a.coordinates;
            break;
          default:
            return [];
        }
        var m,
          q = [],
          r = [];
        m = a[0];
        d = 0;
        for (e = m.length; d < e; d++) q.push(m[d][1], m[d][0]);
        q = b(q, "CW");
        d = 0;
        for (e = a.length - 1; d < e; d++) {
          m = a[d + 1];
          r[d] = [];
          h = 0;
          for (l = m.length; h < l; h++) r[d].push(m[h][1], m[h][0]);
          r[d] = b(r[d], "CCW");
        }
        return [{ outer: q, inner: r.length ? r : null }];
      }
      var d = {
          brick: "#cc7755",
          bronze: "#ffeecc",
          canvas: "#fff8f0",
          concrete: "#999999",
          copper: "#a0e0d0",
          glass: "#e8f8f8",
          gold: "#ffcc00",
          plants: "#009933",
          metal: "#aaaaaa",
          panel: "#fff8f0",
          plaster: "#999999",
          roof_tiles: "#f08060",
          silver: "#cccccc",
          slate: "#666666",
          stone: "#996666",
          tar_paper: "#333333",
          wood: "#deb887",
        },
        e = {
          asphalt: "tar_paper",
          bitumen: "tar_paper",
          block: "stone",
          bricks: "brick",
          glas: "glass",
          glassfront: "glass",
          grass: "plants",
          masonry: "stone",
          granite: "stone",
          panels: "panel",
          paving_stones: "stone",
          plastered: "plaster",
          rooftiles: "roof_tiles",
          roofingfelt: "tar_paper",
          sandstone: "stone",
          sheet: "canvas",
          sheets: "canvas",
          shingle: "tar_paper",
          shingles: "tar_paper",
          slates: "slate",
          steel: "metal",
          tar: "tar_paper",
          tent: "canvas",
          thatch: "plants",
          tile: "roof_tiles",
          tiles: "roof_tiles",
        };
      return {
        read: function (b) {
          if (!b || "FeatureCollection" !== b.type) return [];
          b = b.features;
          var d,
            e,
            h,
            l,
            m = [],
            q,
            r,
            n,
            p;
          d = 0;
          for (e = b.length; d < e; d++)
            if (((q = b[d]), "Feature" === q.type && !1 !== sa(q))) {
              h = q.properties;
              l = {};
              h = h || {};
              l.height = h.height || (h.levels ? 3 * h.levels : Ea);
              l.minHeight = h.minHeight || (h.minLevel ? 3 * h.minLevel : 0);
              if ((r = h.material ? a(h.material) : h.wallColor || h.color))
                l.wallColor = r;
              if ((r = h.roofMaterial ? a(h.roofMaterial) : h.roofColor))
                l.roofColor = r;
              switch (h.shape) {
                case "cylinder":
                case "cone":
                case "dome":
                case "sphere":
                  l.shape = h.shape;
                  l.isRotational = !0;
                  break;
                case "pyramid":
                  l.shape = h.shape;
              }
              switch (h.roofShape) {
                case "cone":
                case "dome":
                  l.roofShape = h.roofShape;
                  l.isRotational = !0;
                  break;
                case "pyramid":
                  l.roofShape = h.roofShape;
              }
              l.roofShape && h.roofHeight
                ? ((l.roofHeight = h.roofHeight),
                  (l.height = I(0, l.height - l.roofHeight)))
                : (l.roofHeight = 0);
              n = l;
              r = c(q.geometry);
              h = 0;
              for (l = r.length; h < l; h++) {
                p = n;
                var w = {},
                  v = void 0;
                for (v in p) p.hasOwnProperty(v) && (w[v] = p[v]);
                p = w;
                p.footprint = r[h].outer;
                if (p.isRotational) {
                  for (
                    var w = p,
                      v = p.footprint,
                      t = 180,
                      u = -180,
                      x = 0,
                      y = v.length;
                    x < y;
                    x += 2
                  )
                    (t = S(t, v[x + 1])), (u = I(u, v[x + 1]));
                  w.radius = (u - t) / 2;
                }
                r[h].inner && (p.holes = r[h].inner);
                if (q.id || q.properties.id) p.id = q.id || q.properties.id;
                q.properties.relationId &&
                  (p.relationId = q.properties.relationId);
                m.push(p);
              }
            }
          return m;
        },
      };
    })(),
    D = Math.PI,
    H = D / 2,
    ya = D / 4,
    x,
    R,
    B = 0,
    z = 0,
    U = 0,
    ea = 0,
    n = 0,
    p = 0,
    G = F.parse("rgba(200, 190, 180)"),
    aa = G.lightness(0.8),
    M = G.lightness(1.2),
    ga = "" + G,
    Z = "" + aa,
    V = "" + M,
    ma = 0,
    C = 1,
    fa,
    Ea = 5,
    J,
    K,
    O,
    Ga = (function () {
      function a(a, g) {
        if (b[a]) g && g(b[a]);
        else {
          var f = new XMLHttpRequest();
          f.onreadystatechange = function () {
            if (
              4 === f.readyState &&
              !(!f.status || 200 > f.status || 299 < f.status) &&
              g &&
              f.responseText
            ) {
              var k = f.responseText;
              b[a] = k;
              c.push({ url: a, size: k.length });
              d += k.length;
              for (g(k); 5242880 < d; )
                (k = c.shift()), (d -= k.size), delete b[k.url];
            }
          };
          f.open("GET", a);
          f.send(null);
          return f;
        }
      }
      var b = {},
        c = [],
        d = 0;
      return {
        loadJSON: function (b, c) {
          return a(b, function (a) {
            var b;
            try {
              b = JSON.parse(a);
            } catch (d) {}
            c(b);
          });
        },
      };
    })(),
    E = {
      loadedItems: {},
      items: [],
      getPixelFootprint: function (a) {
        for (
          var b = new qa(a.length), c, d = 0, e = a.length - 1;
          d < e;
          d += 2
        )
          (c = ca(a[d], a[d + 1])), (b[d] = c.x), (b[d + 1] = c.y);
        a = b;
        b = a.length / 2;
        c = new ra(b);
        var d = 0,
          e = b - 1,
          g,
          f,
          k,
          h,
          l = [],
          m = [],
          q = [];
        for (c[d] = c[e] = 1; e; ) {
          f = 0;
          for (g = d + 1; g < e; g++) {
            k = a[2 * g];
            var r = a[2 * g + 1],
              n = a[2 * d],
              p = a[2 * d + 1],
              v = a[2 * e],
              w = a[2 * e + 1],
              t = v - n,
              u = w - p,
              x = void 0;
            if (0 !== t || 0 !== u)
              (x = ((k - n) * t + (r - p) * u) / (t * t + u * u)),
                1 < x
                  ? ((n = v), (p = w))
                  : 0 < x && ((n += t * x), (p += u * x));
            t = k - n;
            u = r - p;
            k = t * t + u * u;
            k > f && ((h = g), (f = k));
          }
          2 < f && ((c[h] = 1), l.push(d), m.push(h), l.push(h), m.push(e));
          d = l.pop();
          e = m.pop();
        }
        for (g = 0; g < b; g++) c[g] && q.push(a[2 * g], a[2 * g + 1]);
        b = q;
        if (!(8 > b.length)) return b;
      },
      resetItems: function () {
        this.items = [];
        this.loadedItems = {};
        W.reset();
      },
      addRenderItems: function (a, b) {
        for (var c, d, e, g = Fa.read(a), f = 0, k = g.length; f < k; f++)
          (c = g[f]),
            (e =
              c.id ||
              [c.footprint[0], c.footprint[1], c.height, c.minHeight].join()),
            !this.loadedItems[e] &&
              (d = this.scale(c)) &&
              ((d.scale = b ? 0 : 1),
              this.items.push(d),
              (this.loadedItems[e] = 1));
        za();
      },
      scale: function (a) {
        var b = {},
          c = 6 / na(2, x - 15);
        a.id && (b.id = a.id);
        b.height = S(a.height / c, fa);
        b.minHeight = isNaN(a.minHeight) ? 0 : a.minHeight / c;
        if (
          !(b.minHeight > fa) &&
          ((b.footprint = this.getPixelFootprint(a.footprint)), b.footprint)
        ) {
          for (
            var d = b.footprint,
              e = Infinity,
              g = -Infinity,
              f = Infinity,
              k = -Infinity,
              h = 0,
              l = d.length - 3;
            h < l;
            h += 2
          )
            (e = S(e, d[h])),
              (g = I(g, d[h])),
              (f = S(f, d[h + 1])),
              (k = I(k, d[h + 1]));
          b.center = { x: (e + (g - e) / 2) << 0, y: (f + (k - f) / 2) << 0 };
          a.radius && (b.radius = a.radius * ma);
          a.shape && (b.shape = a.shape);
          a.roofShape && (b.roofShape = a.roofShape);
          ("cone" !== b.roofShape && "dome" !== b.roofShape) ||
            b.shape ||
            !ua(b.footprint) ||
            (b.shape = "cylinder");
          if (a.holes) {
            b.holes = [];
            for (var m, d = 0, e = a.holes.length; d < e; d++)
              (m = this.getPixelFootprint(a.holes[d])) && b.holes.push(m);
          }
          var q;
          a.wallColor &&
            (q = F.parse(a.wallColor)) &&
            ((q = q.alpha(C)),
            (b.altColor = "" + q.lightness(0.8)),
            (b.wallColor = "" + q));
          a.roofColor &&
            (q = F.parse(a.roofColor)) &&
            (b.roofColor = "" + q.alpha(C));
          a.relationId && (b.relationId = a.relationId);
          b.hitColor = W.idToColor(a.relationId || a.id);
          b.roofHeight = isNaN(a.roofHeight) ? 0 : a.roofHeight / c;
          if (!(b.height + b.roofHeight <= b.minHeight)) return b;
        }
      },
      set: function (a) {
        this.isStatic = !0;
        this.resetItems();
        this._staticData = a;
        this.addRenderItems(this._staticData, !0);
      },
      load: function (a, b) {
        this.src =
          a ||
          "https://{s}.data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json".replace(
            "{k}",
            b || "anonymous"
          );
        this.update();
      },
      update: function () {
        function a(a) {
          f.addRenderItems(a);
        }
        this.resetItems();
        if (!(15 > x))
          if (this.isStatic && this._staticData)
            this.addRenderItems(this._staticData);
          else if (this.src) {
            var b = 16 < x ? 256 << (x - 16) : 256 >> (16 - x),
              c = (n / b) << 0,
              d = (p / b) << 0,
              e = pa((n + B) / b),
              b = pa((p + z) / b),
              g,
              f = this;
            for (g = d; g <= b; g++)
              for (d = c; d <= e; d++) this.loadTile(d, g, 16, a);
          }
      },
      loadTile: function (a, b, c, d) {
        a = this.src
          .replace("{s}", "abcd"[(a + b) % 4])
          .replace("{x}", a)
          .replace("{y}", b)
          .replace("{z}", c);
        return Ga.loadJSON(a, d);
      },
    },
    X = {
      draw: function (a, b, c, d, e, g, f, k) {
        var h,
          l = this._extrude(a, b, d, e, g, f),
          m = [];
        if (c)
          for (b = 0, h = c.length; b < h; b++)
            m[b] = this._extrude(a, c[b], d, e, g, f);
        a.fillStyle = k;
        a.beginPath();
        this._ring(a, l);
        if (c) for (b = 0, h = m.length; b < h; b++) this._ring(a, m[b]);
        a.closePath();
        a.stroke();
        a.fill();
      },
      _extrude: function (a, b, c, d, e, g) {
        c = 450 / (450 - c);
        for (
          var f = 450 / (450 - d),
            k = { x: 0, y: 0 },
            h = { x: 0, y: 0 },
            l,
            m,
            q = [],
            r = 0,
            t = b.length - 3;
          r < t;
          r += 2
        )
          (k.x = b[r] - n),
            (k.y = b[r + 1] - p),
            (h.x = b[r + 2] - n),
            (h.y = b[r + 3] - p),
            (l = v.project(k, c)),
            (m = v.project(h, c)),
            d && ((k = v.project(k, f)), (h = v.project(h, f))),
            (h.x - k.x) * (l.y - k.y) > (l.x - k.x) * (h.y - k.y) &&
              ((a.fillStyle =
                (k.x < h.x && k.y < h.y) || (k.x > h.x && k.y > h.y) ? g : e),
              a.beginPath(),
              this._ring(a, [h.x, h.y, k.x, k.y, l.x, l.y, m.x, m.y]),
              a.closePath(),
              a.fill()),
            (q[r] = l.x),
            (q[r + 1] = l.y);
        return q;
      },
      _ring: function (a, b) {
        a.moveTo(b[0], b[1]);
        for (var c = 2, d = b.length - 1; c < d; c += 2)
          a.lineTo(b[c], b[c + 1]);
      },
      simplified: function (a, b, c) {
        a.beginPath();
        this._ringAbs(a, b);
        if (c) {
          b = 0;
          for (var d = c.length; b < d; b++) this._ringAbs(a, c[b]);
        }
        a.closePath();
        a.stroke();
        a.fill();
      },
      _ringAbs: function (a, b) {
        a.moveTo(b[0] - n, b[1] - p);
        for (var c = 2, d = b.length - 1; c < d; c += 2)
          a.lineTo(b[c] - n, b[c + 1] - p);
      },
      shadow: function (a, b, c, d, e) {
        for (
          var g = null,
            f = { x: 0, y: 0 },
            k = { x: 0, y: 0 },
            h,
            l,
            m = 0,
            q = b.length - 3;
          m < q;
          m += 2
        )
          (f.x = b[m] - n),
            (f.y = b[m + 1] - p),
            (k.x = b[m + 2] - n),
            (k.y = b[m + 3] - p),
            (h = y.project(f, d)),
            (l = y.project(k, d)),
            e && ((f = y.project(f, e)), (k = y.project(k, e))),
            (k.x - f.x) * (h.y - f.y) > (h.x - f.x) * (k.y - f.y)
              ? (1 === g && a.lineTo(f.x, f.y),
                (g = 0),
                m || a.moveTo(f.x, f.y),
                a.lineTo(k.x, k.y))
              : (0 === g && a.lineTo(h.x, h.y),
                (g = 1),
                m || a.moveTo(h.x, h.y),
                a.lineTo(l.x, l.y));
        if (c) for (m = 0, q = c.length; m < q; m++) this._ringAbs(a, c[m]);
      },
      shadowMask: function (a, b, c) {
        this._ringAbs(a, b);
        if (c) {
          b = 0;
          for (var d = c.length; b < d; b++) this._ringAbs(a, c[b]);
        }
      },
      hitArea: function (a, b, c, d, e, g) {
        c = null;
        var f = { x: 0, y: 0 },
          k = { x: 0, y: 0 };
        d = 450 / (450 - d);
        var h = 450 / (450 - e),
          l;
        a.fillStyle = g;
        a.beginPath();
        for (var m = 0, q = b.length - 3; m < q; m += 2)
          (f.x = b[m] - n),
            (f.y = b[m + 1] - p),
            (k.x = b[m + 2] - n),
            (k.y = b[m + 3] - p),
            (g = v.project(f, d)),
            (l = v.project(k, d)),
            e && ((f = v.project(f, h)), (k = v.project(k, h))),
            (k.x - f.x) * (g.y - f.y) > (g.x - f.x) * (k.y - f.y)
              ? (1 === c && a.lineTo(f.x, f.y),
                (c = 0),
                m || a.moveTo(f.x, f.y),
                a.lineTo(k.x, k.y))
              : (0 === c && a.lineTo(g.x, g.y),
                (c = 1),
                m || a.moveTo(g.x, g.y),
                a.lineTo(l.x, l.y));
        a.closePath();
        a.fill();
      },
    },
    t = {
      draw: function (a, b, c, d, e, g, f, k, h) {
        b = { x: b.x - n, y: b.y - p };
        var l = 450 / (450 - e),
          m = 450 / (450 - g);
        e = v.project(b, l);
        d *= l;
        g && ((b = v.project(b, m)), (c *= m));
        (l = this._tangents(b, c, e, d))
          ? ((g = N(l[0].y1 - b.y, l[0].x1 - b.x)),
            (l = N(l[1].y1 - b.y, l[1].x1 - b.x)))
          : ((g = 1.5 * D), (l = 1.5 * D));
        a.fillStyle = f;
        a.beginPath();
        a.arc(e.x, e.y, d, H, g, !0);
        a.arc(b.x, b.y, c, g, H);
        a.closePath();
        a.fill();
        a.fillStyle = k;
        a.beginPath();
        a.arc(e.x, e.y, d, l, H, !0);
        a.arc(b.x, b.y, c, H, l);
        a.closePath();
        a.fill();
        a.fillStyle = h;
        this._circle(a, e, d);
      },
      simplified: function (a, b, c) {
        this._circle(a, { x: b.x - n, y: b.y - p }, c);
      },
      shadow: function (a, b, c, d, e, g) {
        b = { x: b.x - n, y: b.y - p };
        e = y.project(b, e);
        var f;
        g && (b = y.project(b, g));
        var k = this._tangents(b, c, e, d);
        k
          ? ((g = N(k[0].y1 - b.y, k[0].x1 - b.x)),
            (f = N(k[1].y1 - b.y, k[1].x1 - b.x)),
            a.moveTo(k[1].x2, k[1].y2),
            a.arc(e.x, e.y, d, f, g),
            a.arc(b.x, b.y, c, g, f))
          : (a.moveTo(b.x + c, b.y), a.arc(b.x, b.y, c, 0, 2 * D));
      },
      shadowMask: function (a, b, c) {
        var d = b.x - n;
        b = b.y - p;
        a.moveTo(d + c, b);
        a.arc(d, b, c, 0, 2 * D);
      },
      hitArea: function (a, b, c, d, e, g, f) {
        b = { x: b.x - n, y: b.y - p };
        var k = 450 / (450 - e),
          h = 450 / (450 - g);
        e = v.project(b, k);
        d *= k;
        g && ((b = v.project(b, h)), (c *= h));
        g = this._tangents(b, c, e, d);
        a.fillStyle = f;
        a.beginPath();
        g
          ? ((f = N(g[0].y1 - b.y, g[0].x1 - b.x)),
            (k = N(g[1].y1 - b.y, g[1].x1 - b.x)),
            a.moveTo(g[1].x2, g[1].y2),
            a.arc(e.x, e.y, d, k, f),
            a.arc(b.x, b.y, c, f, k))
          : (a.moveTo(b.x + c, b.y), a.arc(b.x, b.y, c, 0, 2 * D));
        a.closePath();
        a.fill();
      },
      _circle: function (a, b, c) {
        a.beginPath();
        a.arc(b.x, b.y, c, 0, 2 * D);
        a.stroke();
        a.fill();
      },
      _tangents: function (a, b, c, d) {
        var e = a.x - c.x,
          g = a.y - c.y,
          f = b - d,
          k = e * e + g * g;
        if (!(k <= f * f)) {
          var k = oa(k),
            e = -e / k,
            g = -g / k,
            f = f / k,
            k = [],
            h,
            l,
            m;
          h = oa(I(0, 1 - f * f));
          for (var q = 1; -1 <= q; q -= 2)
            (l = e * f - q * h * g),
              (m = g * f + q * h * e),
              k.push({
                x1: (a.x + b * l) << 0,
                y1: (a.y + b * m) << 0,
                x2: (c.x + d * l) << 0,
                y2: (c.y + d * m) << 0,
              });
          return k;
        }
      },
    },
    P = {
      draw: function (a, b, c, d, e, g, f) {
        var k = 450 / (450 - e);
        c = v.project({ x: c.x - n, y: c.y - p }, 450 / (450 - d));
        d = { x: 0, y: 0 };
        for (var h = { x: 0, y: 0 }, l = 0, m = b.length - 3; l < m; l += 2)
          (d.x = b[l] - n),
            (d.y = b[l + 1] - p),
            (h.x = b[l + 2] - n),
            (h.y = b[l + 3] - p),
            e && ((d = v.project(d, k)), (h = v.project(h, k))),
            (h.x - d.x) * (c.y - d.y) > (c.x - d.x) * (h.y - d.y) &&
              ((a.fillStyle =
                (d.x < h.x && d.y < h.y) || (d.x > h.x && d.y > h.y) ? f : g),
              a.beginPath(),
              this._triangle(a, d, h, c),
              a.closePath(),
              a.fill());
      },
      _triangle: function (a, b, c, d) {
        a.moveTo(b.x, b.y);
        a.lineTo(c.x, c.y);
        a.lineTo(d.x, d.y);
      },
      _ring: function (a, b) {
        a.moveTo(b[0] - n, b[1] - p);
        for (var c = 2, d = b.length - 1; c < d; c += 2)
          a.lineTo(b[c] - n, b[c + 1] - p);
      },
      shadow: function (a, b, c, d, e) {
        var g = { x: 0, y: 0 },
          f = { x: 0, y: 0 };
        c = y.project({ x: c.x - n, y: c.y - p }, d);
        d = 0;
        for (var k = b.length - 3; d < k; d += 2)
          (g.x = b[d] - n),
            (g.y = b[d + 1] - p),
            (f.x = b[d + 2] - n),
            (f.y = b[d + 3] - p),
            e && ((g = y.project(g, e)), (f = y.project(f, e))),
            (f.x - g.x) * (c.y - g.y) > (c.x - g.x) * (f.y - g.y) &&
              this._triangle(a, g, f, c);
      },
      shadowMask: function (a, b) {
        this._ring(a, b);
      },
      hitArea: function (a, b, c, d, e, g) {
        var f = 450 / (450 - e);
        c = v.project({ x: c.x - n, y: c.y - p }, 450 / (450 - d));
        d = { x: 0, y: 0 };
        var k = { x: 0, y: 0 };
        a.fillStyle = g;
        a.beginPath();
        g = 0;
        for (var h = b.length - 3; g < h; g += 2)
          (d.x = b[g] - n),
            (d.y = b[g + 1] - p),
            (k.x = b[g + 2] - n),
            (k.y = b[g + 3] - p),
            e && ((d = v.project(d, f)), (k = v.project(k, f))),
            (k.x - d.x) * (c.y - d.y) > (c.x - d.x) * (k.y - d.y) &&
              this._triangle(a, d, k, c);
        a.closePath();
        a.fill();
      },
    },
    v = {
      project: function (a, b) {
        return { x: ((a.x - J) * b + J) << 0, y: ((a.y - K) * b + K) << 0 };
      },
      render: function () {
        var a = this.context;
        a.clearRect(0, 0, B, z);
        if (!(15 > x || O)) {
          var b,
            c,
            d,
            e = { x: J + n, y: K + p },
            g,
            f,
            k,
            h,
            l = E.items;
          l.sort(function (a, b) {
            return (
              a.minHeight - b.minHeight ||
              Q(b.center, e) - Q(a.center, e) ||
              b.height - a.height
            );
          });
          for (var m = 0, q = l.length; m < q; m++)
            if (((b = l[m]), !ha.isSimple(b) && ((g = b.footprint), T(g)))) {
              c = 1 > b.scale ? b.height * b.scale : b.height;
              d = 0;
              b.minHeight &&
                (d = 1 > b.scale ? b.minHeight * b.scale : b.minHeight);
              f = b.wallColor || ga;
              k = b.altColor || Z;
              h = b.roofColor || V;
              a.strokeStyle = k;
              switch (b.shape) {
                case "cylinder":
                  t.draw(a, b.center, b.radius, b.radius, c, d, f, k, h);
                  break;
                case "cone":
                  t.draw(a, b.center, b.radius, 0, c, d, f, k);
                  break;
                case "dome":
                  t.draw(a, b.center, b.radius, b.radius / 2, c, d, f, k);
                  break;
                case "sphere":
                  t.draw(a, b.center, b.radius, b.radius, c, d, f, k, h);
                  break;
                case "pyramid":
                  P.draw(a, g, b.center, c, d, f, k);
                  break;
                default:
                  X.draw(a, g, b.holes, c, d, f, k, h);
              }
              switch (b.roofShape) {
                case "cone":
                  t.draw(
                    a,
                    b.center,
                    b.radius,
                    0,
                    c + b.roofHeight,
                    c,
                    h,
                    "" + F.parse(h).lightness(0.9)
                  );
                  break;
                case "dome":
                  t.draw(
                    a,
                    b.center,
                    b.radius,
                    b.radius / 2,
                    c + b.roofHeight,
                    c,
                    h,
                    "" + F.parse(h).lightness(0.9)
                  );
                  break;
                case "pyramid":
                  P.draw(
                    a,
                    g,
                    b.center,
                    c + b.roofHeight,
                    c,
                    h,
                    F.parse(h).lightness(0.9)
                  );
              }
            }
        }
      },
    },
    ha = {
      maxZoom: 17,
      maxHeight: 5,
      isSimple: function (a) {
        return x <= this.maxZoom && a.height + a.roofHeight < this.maxHeight;
      },
      render: function () {
        var a = this.context;
        a.clearRect(0, 0, B, z);
        if (!(15 > x || O || x > this.maxZoom))
          for (var b, c, d = E.items, e = 0, g = d.length; e < g; e++)
            if (
              ((b = d[e]),
              !(b.height >= this.maxHeight) && ((c = b.footprint), T(c)))
            )
              switch (
                ((a.strokeStyle = b.altColor || Z),
                (a.fillStyle = b.roofColor || V),
                b.shape)
              ) {
                case "cylinder":
                case "cone":
                case "dome":
                case "sphere":
                  t.simplified(a, b.center, b.radius);
                  break;
                default:
                  X.simplified(a, c, b.holes);
              }
      },
    },
    y = {
      enabled: !0,
      color: "#666666",
      blurColor: "#000000",
      blurSize: 15,
      date: new Date(),
      direction: { x: 0, y: 0 },
      project: function (a, b) {
        return { x: a.x + this.direction.x * b, y: a.y + this.direction.y * b };
      },
      render: function () {
        var a = this.context,
          b,
          c,
          d;
        a.clearRect(0, 0, B, z);
        if (
          !(
            !this.enabled ||
            15 > x ||
            O ||
            ((b = ia(U + n, ea + p)),
            (b = Da(this.date, b.latitude, b.longitude)),
            0 >= b.altitude)
          )
        ) {
          c = 1 / ja(b.altitude);
          d = 5 > c ? 0.75 : (1 / c) * 5;
          this.direction.x = Ba(b.azimuth) * c;
          this.direction.y = Aa(b.azimuth) * c;
          var e, g, f, k;
          b = E.items;
          a.canvas.style.opacity = d / (2 * C);
          a.shadowColor = this.blurColor;
          a.shadowBlur = (C / 2) * this.blurSize;
          a.fillStyle = this.color;
          a.beginPath();
          d = 0;
          for (c = b.length; d < c; d++)
            if (((e = b[d]), (k = e.footprint), T(k))) {
              g = 1 > e.scale ? e.height * e.scale : e.height;
              f = 0;
              e.minHeight &&
                (f = 1 > e.scale ? e.minHeight * e.scale : e.minHeight);
              switch (e.shape) {
                case "cylinder":
                  t.shadow(a, e.center, e.radius, e.radius, g, f);
                  break;
                case "cone":
                  t.shadow(a, e.center, e.radius, 0, g, f);
                  break;
                case "dome":
                  t.shadow(a, e.center, e.radius, e.radius / 2, g, f);
                  break;
                case "sphere":
                  t.shadow(a, e.center, e.radius, e.radius, g, f);
                  break;
                case "pyramid":
                  P.shadow(a, k, e.center, g, f);
                  break;
                default:
                  X.shadow(a, k, e.holes, g, f);
              }
              switch (e.roofShape) {
                case "cone":
                  t.shadow(a, e.center, e.radius, 0, g + e.roofHeight, g);
                  break;
                case "dome":
                  t.shadow(
                    a,
                    e.center,
                    e.radius,
                    e.radius / 2,
                    g + e.roofHeight,
                    g
                  );
                  break;
                case "pyramid":
                  P.shadow(a, k, e.center, g + e.roofHeight, g);
              }
            }
          a.closePath();
          a.fill();
          a.shadowBlur = null;
          a.globalCompositeOperation = "destination-out";
          a.beginPath();
          d = 0;
          for (c = b.length; d < c; d++)
            if (((e = b[d]), (k = e.footprint), T(k) && !e.minHeight))
              switch (e.shape) {
                case "cylinder":
                case "cone":
                case "dome":
                  t.shadowMask(a, e.center, e.radius);
                  break;
                default:
                  X.shadowMask(a, k, e.holes);
              }
          a.fillStyle = "#00ff00";
          a.fill();
          a.globalCompositeOperation = "source-over";
        }
      },
    },
    W = {
      _idMapping: [null],
      reset: function () {
        this._idMapping = [null];
      },
      render: function () {
        if (!this._timer) {
          var a = this;
          this._timer = setTimeout(function () {
            a._timer = null;
            a._render();
          }, 500);
        }
      },
      _render: function () {
        var a = this.context;
        a.clearRect(0, 0, B, z);
        if (!(15 > x || O)) {
          var b,
            c,
            d,
            e = { x: J + n, y: K + p },
            g,
            f,
            k = E.items;
          k.sort(function (a, b) {
            return (
              a.minHeight - b.minHeight ||
              Q(b.center, e) - Q(a.center, e) ||
              b.height - a.height
            );
          });
          for (var h = 0, l = k.length; h < l; h++)
            if (((b = k[h]), (f = b.hitColor)))
              if (((g = b.footprint), T(g))) {
                c = b.height;
                d = 0;
                b.minHeight && (d = b.minHeight);
                switch (b.shape) {
                  case "cylinder":
                    t.hitArea(a, b.center, b.radius, b.radius, c, d, f);
                    break;
                  case "cone":
                    t.hitArea(a, b.center, b.radius, 0, c, d, f);
                    break;
                  case "dome":
                    t.hitArea(a, b.center, b.radius, b.radius / 2, c, d, f);
                    break;
                  case "sphere":
                    t.hitArea(a, b.center, b.radius, b.radius, c, d, f);
                    break;
                  case "pyramid":
                    P.hitArea(a, g, b.center, c, d, f);
                    break;
                  default:
                    X.hitArea(a, g, b.holes, c, d, f);
                }
                switch (b.roofShape) {
                  case "cone":
                    t.hitArea(a, b.center, b.radius, 0, c + b.roofHeight, c, f);
                    break;
                  case "dome":
                    t.hitArea(
                      a,
                      b.center,
                      b.radius,
                      b.radius / 2,
                      c + b.roofHeight,
                      c,
                      f
                    );
                    break;
                  case "pyramid":
                    P.hitArea(a, g, b.center, c + b.roofHeight, c, f);
                }
              }
          B &&
            z &&
            (this._imageData = this.context.getImageData(0, 0, B, z).data);
        }
      },
      getIdFromXY: function (a, b) {
        var c = this._imageData;
        if (c) {
          var d = 4 * ((b | 0) * B + (a | 0));
          return this._idMapping[c[d] | (c[d + 1] << 8) | (c[d + 2] << 16)];
        }
      },
      idToColor: function (a) {
        var b = this._idMapping.indexOf(a);
        -1 === b && (this._idMapping.push(a), (b = this._idMapping.length - 1));
        return "rgb(" + [b & 255, (b >> 8) & 255, (b >> 16) & 255].join() + ")";
      },
    },
    Y,
    A = {
      container: document.createElement("DIV"),
      items: [],
      init: function () {
        this.container.style.pointerEvents = "none";
        this.container.style.position = "absolute";
        this.container.style.left = 0;
        this.container.style.top = 0;
        y.context = this.createContext(this.container);
        ha.context = this.createContext(this.container);
        v.context = this.createContext(this.container);
        W.context = this.createContext();
      },
      render: function (a) {
        Ca(function () {
          a || (y.render(), ha.render(), W.render());
          v.render();
        });
      },
      createContext: function (a) {
        var b = document.createElement("CANVAS");
        b.style.transform = "translate3d(0, 0, 0)";
        b.style.imageRendering = "optimizeSpeed";
        b.style.position = "absolute";
        b.style.left = 0;
        b.style.top = 0;
        var c = b.getContext("2d");
        c.lineCap = "round";
        c.lineJoin = "round";
        c.lineWidth = 1;
        c.imageSmoothingEnabled = !1;
        this.items.push(b);
        a && a.appendChild(b);
        return c;
      },
      appendTo: function (a) {
        a.appendChild(this.container);
      },
      remove: function () {
        this.container.parentNode.removeChild(this.container);
      },
      setSize: function (a, b) {
        for (var c = 0, d = this.items.length; c < d; c++)
          (this.items[c].width = a), (this.items[c].height = b);
      },
      setPosition: function (a, b) {
        this.container.style.left = a + "px";
        this.container.style.top = b + "px";
      },
    };
  A.init();
  u = function (a) {
    this.offset = { x: 0, y: 0 };
    a && a.addLayer(this);
  };
  w = u.prototype = L.Layer ? new L.Layer() : {};
  w.addTo = function (a) {
    a.addLayer(this);
    return this;
  };
  w.onAdd = function (a) {
    this.map = a;
    A.appendTo(a._panes.overlayPane);
    var b = this.getOffset(),
      c = a.getPixelOrigin();
    ka({ width: a._size.x, height: a._size.y });
    var d = c.y - b.y;
    n = c.x - b.x;
    p = d;
    la(a._zoom);
    A.setPosition(-b.x, -b.y);
    a.on(
      {
        move: this.onMove,
        moveend: this.onMoveEnd,
        zoomstart: this.onZoomStart,
        zoomend: this.onZoomEnd,
        resize: this.onResize,
        viewreset: this.onViewReset,
        click: this.onClick,
      },
      this
    );
    if (a.options.zoomAnimation) a.on("zoomanim", this.onZoom, this);
    a.attributionControl &&
      a.attributionControl.addAttribution(
        '&copy; <a href="https://osmbuildings.org">OSM Buildings</a>'
      );
    E.update();
  };
  w.onRemove = function () {
    var a = this.map;
    a.attributionControl &&
      a.attributionControl.removeAttribution(
        '&copy; <a href="https://osmbuildings.org">OSM Buildings</a>'
      );
    a.off(
      {
        move: this.onMove,
        moveend: this.onMoveEnd,
        zoomstart: this.onZoomStart,
        zoomend: this.onZoomEnd,
        resize: this.onResize,
        viewreset: this.onViewReset,
        click: this.onClick,
      },
      this
    );
    a.options.zoomAnimation && a.off("zoomanim", this.onZoom, this);
    A.remove();
  };
  w.onMove = function (a) {
    a = this.getOffset();
    da({ x: this.offset.x - a.x, y: this.offset.y - a.y });
  };
  w.onMoveEnd = function (a) {
    if (this.noMoveEnd) this.noMoveEnd = !1;
    else {
      var b = this.map;
      a = this.getOffset();
      var c = b.getPixelOrigin();
      this.offset = a;
      A.setPosition(-a.x, -a.y);
      da({ x: 0, y: 0 });
      ka({ width: b._size.x, height: b._size.y });
      b = c.y - a.y;
      n = c.x - a.x;
      p = b;
      A.render();
      E.update();
    }
  };
  w.onZoomStart = function (a) {
    O = !0;
    A.render();
  };
  w.onZoom = function (a) {};
  w.onZoomEnd = function (a) {
    a = this.map;
    var b = this.getOffset(),
      c = a.getPixelOrigin(),
      d = c.y - b.y;
    n = c.x - b.x;
    p = d;
    a = a._zoom;
    O = !1;
    la(a);
    E.update();
    A.render();
    this.noMoveEnd = !0;
  };
  w.onResize = function () {};
  w.onViewReset = function () {
    var a = this.getOffset();
    this.offset = a;
    A.setPosition(-a.x, -a.y);
    da({ x: 0, y: 0 });
  };
  w.onClick = function (a) {
    var b = W.getIdFromXY(a.containerPoint.x, a.containerPoint.y);
    b && ta({ feature: b, lat: a.latlng.lat, lon: a.latlng.lng });
  };
  w.getOffset = function () {
    return L.DomUtil.getPosition(this.map._mapPane);
  };
  w.style = function (a) {
    a = a || {};
    var b;
    if ((b = a.color || a.wallColor))
      (G = F.parse(b)),
        (ga = "" + G.alpha(C)),
        (aa = G.lightness(0.8)),
        (Z = "" + aa.alpha(C)),
        (M = G.lightness(1.2)),
        (V = "" + M.alpha(C));
    a.roofColor && ((M = F.parse(a.roofColor)), (V = "" + M.alpha(C)));
    void 0 !== a.shadows && (y.enabled = !!a.shadows);
    A.render();
    return this;
  };
  w.date = function (a) {
    y.date = a;
    y.render();
    return this;
  };
  w.load = function (a) {
    E.load(a);
    return this;
  };
  w.set = function (a) {
    E.set(a);
    return this;
  };
  var sa = function () {};
  w.each = function (a) {
    sa = function (b) {
      return a(b);
    };
    return this;
  };
  var ta = function () {};
  w.click = function (a) {
    ta = function (b) {
      return a(b);
    };
    return this;
  };
  u.VERSION = "0.2.2b";
  u.ATTRIBUTION = '&copy; <a href="https://osmbuildings.org">OSM Buildings</a>';
  ba.OSMBuildings = u;
})(this);
