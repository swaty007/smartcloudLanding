var THREE = THREE || {REVISION: "49"};
self.Int32Array || (self.Int32Array = Array, self.Float32Array = Array), THREE.Color = function (n) {
    return n !== undefined && this.setHex(n), this
}, THREE.Color.prototype = {
    constructor: THREE.Color, r: 1, g: 1, b: 1, copy: function (n) {
        return this.r = n.r, this.g = n.g, this.b = n.b, this
    }, setRGB: function (n, t, i) {
        return this.r = n, this.g = t, this.b = i, this
    }, setHex: function (n) {
        return n = Math.floor(n), this.r = (n >> 16 & 255) / 255, this.g = (n >> 8 & 255) / 255, this.b = (n & 255) / 255, this
    }, lerpSelf: function (n, t) {
        return this.r += (n.r - this.r) * t, this.g += (n.g - this.g) * t, this.b += (n.b - this.b) * t, this
    }, getHex: function () {
        return Math.floor(this.r * 255) << 16 ^ Math.floor(this.g * 255) << 8 ^ Math.floor(this.b * 255)
    }, getContextStyle: function () {
        return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")"
    }, clone: function () {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
}, THREE.Vector2 = function (n, t) {
    this.x = n || 0, this.y = t || 0
}, THREE.Vector2.prototype = {constructor: THREE.Vector2}, THREE.Vector3 = function (n, t, i) {
    this.x = n || 0, this.y = t || 0, this.z = i || 0
}, THREE.Vector3.prototype = {
    constructor: THREE.Vector3, set: function (n, t, i) {
        return this.x = n, this.y = t, this.z = i, this
    }, setX: function (n) {
        return this.x = n, this
    }, setY: function (n) {
        return this.y = n, this
    }, setZ: function (n) {
        return this.z = n, this
    }, copy: function (n) {
        return this.x = n.x, this.y = n.y, this.z = n.z, this
    }, add: function (n, t) {
        return this.x = n.x + t.x, this.y = n.y + t.y, this.z = n.z + t.z, this
    }, addSelf: function (n) {
        return this.x += n.x, this.y += n.y, this.z += n.z, this
    }, addScalar: function (n) {
        return this.x += n, this.y += n, this.z += n, this
    }, sub: function (n, t) {
        return this.x = n.x - t.x, this.y = n.y - t.y, this.z = n.z - t.z, this
    }, multiply: function (n, t) {
        return this.x = n.x * t.x, this.y = n.y * t.y, this.z = n.z * t.z, this
    }, multiplyScalar: function (n) {
        return this.x *= n, this.y *= n, this.z *= n, this
    }, divideScalar: function (n) {
        return n ? (this.x /= n, this.y /= n, this.z /= n) : (this.x = 0, this.y = 0, this.z = 0), this
    }, negate: function () {
        return this.multiplyScalar(-1)
    }, dot: function (n) {
        return this.x * n.x + this.y * n.y + this.z * n.z
    }, lengthSq: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }, length: function () {
        return Math.sqrt(this.lengthSq())
    }, lengthManhattan: function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }, normalize: function () {
        return this.divideScalar(this.length())
    }, cross: function (n, t) {
        return this.x = n.y * t.z - n.z * t.y, this.y = n.z * t.x - n.x * t.z, this.z = n.x * t.y - n.y * t.x, this
    }, distanceTo: function (n) {
        return Math.sqrt(this.distanceToSquared(n))
    }, distanceToSquared: function (n) {
        return (new THREE.Vector3).sub(this, n).lengthSq()
    }, clone: function () {
        return new THREE.Vector3(this.x, this.y, this.z)
    }
}, THREE.Vector4 = function (n, t, i, r) {
    this.x = n || 0, this.y = t || 0, this.z = i || 0, this.w = r !== undefined ? r : 1
}, THREE.Vector4.prototype = {
    constructor: THREE.Vector4, set: function (n, t, i, r) {
        return this.x = n, this.y = t, this.z = i, this.w = r, this
    }, copy: function (n) {
        return this.x = n.x, this.y = n.y, this.z = n.z, this.w = n.w !== undefined ? n.w : 1, this
    }, add: function (n, t) {
        return this.x = n.x + t.x, this.y = n.y + t.y, this.z = n.z + t.z, this.w = n.w + t.w, this
    }, addSelf: function (n) {
        return this.x += n.x, this.y += n.y, this.z += n.z, this.w += n.w, this
    }, sub: function (n, t) {
        return this.x = n.x - t.x, this.y = n.y - t.y, this.z = n.z - t.z, this.w = n.w - t.w, this
    }, subSelf: function (n) {
        return this.x -= n.x, this.y -= n.y, this.z -= n.z, this.w -= n.w, this
    }, multiplyScalar: function (n) {
        return this.x *= n, this.y *= n, this.z *= n, this.w *= n, this
    }, divideScalar: function (n) {
        return n ? (this.x /= n, this.y /= n, this.z /= n, this.w /= n) : (this.x = 0, this.y = 0, this.z = 0, this.w = 1), this
    }, negate: function () {
        return this.multiplyScalar(-1)
    }, dot: function (n) {
        return this.x * n.x + this.y * n.y + this.z * n.z + this.w * n.w
    }, lengthSq: function () {
        return this.dot(this)
    }, length: function () {
        return Math.sqrt(this.lengthSq())
    }, normalize: function () {
        return this.divideScalar(this.length())
    }
}, THREE.Frustum = function () {
    this.planes = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4]
}, THREE.Frustum.prototype.setFromMatrix = function (n) {
    var s, i, r = this.planes, t = n.elements, h = t[0], c = t[1], l = t[2], u = t[3], a = t[4], v = t[5], y = t[6],
        f = t[7], p = t[8], w = t[9], b = t[10], e = t[11], k = t[12], d = t[13], g = t[14], o = t[15];
    for (r[0].set(u - h, f - a, e - p, o - k), r[1].set(u + h, f + a, e + p, o + k), r[2].set(u + c, f + v, e + w, o + d), r[3].set(u - c, f - v, e - w, o - d), r[4].set(u - l, f - y, e - b, o - g), r[5].set(u + l, f + y, e + b, o + g), s = 0; s < 6; s++)i = r[s], i.divideScalar(Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z))
}, THREE.Frustum.prototype.contains = function (n) {
    for (var u, i = this.planes, f = n.matrixWorld, r = f.elements,
             e = -n.geometry.boundingSphere.radius * f.getMaxScaleOnAxis(),
             t = 0; t < 6; t++)if (u = i[t].x * r[12] + i[t].y * r[13] + i[t].z * r[14] + i[t].w, u <= e)return !1;
    return !0
}, THREE.Frustum.__v1 = new THREE.Vector3, THREE.Rectangle = function () {
    function u() {
        e = i - n, o = r - t
    }

    var n, t, i, r, e, o, f = !0;
    this.getX = function () {
        return n
    }, this.getY = function () {
        return t
    }, this.getWidth = function () {
        return e
    }, this.getHeight = function () {
        return o
    }, this.getLeft = function () {
        return n
    }, this.getTop = function () {
        return t
    }, this.getRight = function () {
        return i
    }, this.getBottom = function () {
        return r
    }, this.set = function (e, o, s, h) {
        f = !1, n = e, t = o, i = s, r = h, u()
    }, this.addPoint = function (e, o) {
        f ? (f = !1, n = e, t = o, i = e, r = o, u()) : (n = n < e ? n : e, t = t < o ? t : o, i = i > e ? i : e, r = r > o ? r : o, u())
    }, this.addRectangle = function (e) {
        f ? (f = !1, n = e.getLeft(), t = e.getTop(), i = e.getRight(), r = e.getBottom(), u()) : (n = n < e.getLeft() ? n : e.getLeft(), t = t < e.getTop() ? t : e.getTop(), i = i > e.getRight() ? i : e.getRight(), r = r > e.getBottom() ? r : e.getBottom(), u())
    }, this.inflate = function (f) {
        n -= f, t -= f, i += f, r += f, u()
    }, this.minSelf = function (f) {
        n = n > f.getLeft() ? n : f.getLeft(), t = t > f.getTop() ? t : f.getTop(), i = i < f.getRight() ? i : f.getRight(), r = r < f.getBottom() ? r : f.getBottom(), u()
    }, this.intersects = function (u) {
        return i < u.getLeft() ? !1 : n > u.getRight() ? !1 : r < u.getTop() ? !1 : t > u.getBottom() ? !1 : !0
    }, this.empty = function () {
        f = !0, n = 0, t = 0, i = 0, r = 0, u()
    }, this.isEmpty = function () {
        return f
    }
}, THREE.Matrix3 = function () {
    this.elements = new Float32Array(9)
}, THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3, getInverse: function (n) {
        var t = n.elements, u = t[10] * t[5] - t[6] * t[9], s = -t[10] * t[1] + t[2] * t[9],
            h = t[6] * t[1] - t[2] * t[5], f = -t[10] * t[4] + t[6] * t[8], c = t[10] * t[0] - t[2] * t[8],
            l = -t[6] * t[0] + t[2] * t[4], e = t[9] * t[4] - t[5] * t[8], a = -t[9] * t[0] + t[1] * t[8],
            v = t[5] * t[0] - t[1] * t[4], o = t[0] * u + t[1] * f + t[2] * e, i, r;
        return o === 0 && console.warn("Matrix3.getInverse(): determinant == 0"), i = 1 / o, r = this.elements, r[0] = i * u, r[1] = i * s, r[2] = i * h, r[3] = i * f, r[4] = i * c, r[5] = i * l, r[6] = i * e, r[7] = i * a, r[8] = i * v, this
    }
}, THREE.Matrix4 = function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
    this.elements = new Float32Array(16), this.set(n !== undefined ? n : 1, t || 0, i || 0, r || 0, u || 0, f !== undefined ? f : 1, e || 0, o || 0, s || 0, h || 0, c !== undefined ? c : 1, l || 0, a || 0, v || 0, y || 0, p !== undefined ? p : 1)
}, THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
        var w = this.elements;
        return w[0] = n, w[4] = t, w[8] = i, w[12] = r, w[1] = u, w[5] = f, w[9] = e, w[13] = o, w[2] = s, w[6] = h, w[10] = c, w[14] = l, w[3] = a, w[7] = v, w[11] = y, w[15] = p, this
    },
    copy: function (n) {
        var t = n.elements;
        return this.set(t[0], t[4], t[8], t[12], t[1], t[5], t[9], t[13], t[2], t[6], t[10], t[14], t[3], t[7], t[11], t[15]), this
    },
    lookAt: function (n, t, i) {
        var u = this.elements, f = THREE.Matrix4.__v1, e = THREE.Matrix4.__v2, r = THREE.Matrix4.__v3;
        return r.sub(n, t).normalize(), r.length() === 0 && (r.z = 1), f.cross(i, r).normalize(), f.length() === 0 && (r.x += .0001, f.cross(i, r).normalize()), e.cross(r, f), u[0] = f.x, u[4] = e.x, u[8] = r.x, u[1] = f.y, u[5] = e.y, u[9] = r.y, u[2] = f.z, u[6] = e.z, u[10] = r.z, this
    },
    multiply: function (n, t) {
        var i = n.elements, r = t.elements, u = this.elements, f = i[0], e = i[4], o = i[8], s = i[12], h = i[1],
            c = i[5], l = i[9], a = i[13], v = i[2], y = i[6], p = i[10], w = i[14], b = i[3], k = i[7], d = i[11],
            g = i[15], nt = r[0], tt = r[4], it = r[8], rt = r[12], ut = r[1], ft = r[5], et = r[9], ot = r[13],
            st = r[2], ht = r[6], ct = r[10], lt = r[14], at = r[3], vt = r[7], yt = r[11], pt = r[15];
        return u[0] = f * nt + e * ut + o * st + s * at, u[4] = f * tt + e * ft + o * ht + s * vt, u[8] = f * it + e * et + o * ct + s * yt, u[12] = f * rt + e * ot + o * lt + s * pt, u[1] = h * nt + c * ut + l * st + a * at, u[5] = h * tt + c * ft + l * ht + a * vt, u[9] = h * it + c * et + l * ct + a * yt, u[13] = h * rt + c * ot + l * lt + a * pt, u[2] = v * nt + y * ut + p * st + w * at, u[6] = v * tt + y * ft + p * ht + w * vt, u[10] = v * it + y * et + p * ct + w * yt, u[14] = v * rt + y * ot + p * lt + w * pt, u[3] = b * nt + k * ut + d * st + g * at, u[7] = b * tt + k * ft + d * ht + g * vt, u[11] = b * it + k * et + d * ct + g * yt, u[15] = b * rt + k * ot + d * lt + g * pt, this
    },
    multiplyScalar: function (n) {
        var t = this.elements;
        return t[0] *= n, t[4] *= n, t[8] *= n, t[12] *= n, t[1] *= n, t[5] *= n, t[9] *= n, t[13] *= n, t[2] *= n, t[6] *= n, t[10] *= n, t[14] *= n, t[3] *= n, t[7] *= n, t[11] *= n, t[15] *= n, this
    },
    multiplyVector3: function (n) {
        var t = this.elements, i = n.x, r = n.y, u = n.z, f = 1 / (t[3] * i + t[7] * r + t[11] * u + t[15]);
        return n.x = (t[0] * i + t[4] * r + t[8] * u + t[12]) * f, n.y = (t[1] * i + t[5] * r + t[9] * u + t[13]) * f, n.z = (t[2] * i + t[6] * r + t[10] * u + t[14]) * f, n
    },
    multiplyVector4: function (n) {
        var t = this.elements, i = n.x, r = n.y, u = n.z, f = n.w;
        return n.x = t[0] * i + t[4] * r + t[8] * u + t[12] * f, n.y = t[1] * i + t[5] * r + t[9] * u + t[13] * f, n.z = t[2] * i + t[6] * r + t[10] * u + t[14] * f, n.w = t[3] * i + t[7] * r + t[11] * u + t[15] * f, n
    },
    determinant: function () {
        var n = this.elements, t = n[0], i = n[4], r = n[8], u = n[12], f = n[1], e = n[5], o = n[9], s = n[13],
            h = n[2], c = n[6], l = n[10], a = n[14], v = n[3], y = n[7], p = n[11], w = n[15];
        return u * o * c * v - r * s * c * v - u * e * l * v + i * s * l * v + r * e * a * v - i * o * a * v - u * o * h * y + r * s * h * y + u * f * l * y - t * s * l * y - r * f * a * y + t * o * a * y + u * e * h * p - i * s * h * p - u * f * c * p + t * s * c * p + i * f * a * p - t * e * a * p - r * e * h * w + i * o * h * w + r * f * c * w - t * o * c * w - i * f * l * w + t * e * l * w
    },
    getPosition: function () {
        var n = this.elements;
        return THREE.Matrix4.__v1.set(n[12], n[13], n[14])
    },
    setPosition: function (n) {
        var t = this.elements;
        return t[12] = n.x, t[13] = n.y, t[14] = n.z, this
    },
    getInverse: function (n) {
        var b = this.elements, k = n.elements, t = k[0], i = k[4], r = k[8], u = k[12], f = k[1], e = k[5], o = k[9],
            s = k[13], h = k[2], c = k[6], l = k[10], a = k[14], v = k[3], y = k[7], p = k[11], w = k[15];
        return b[0] = o * a * y - s * l * y + s * c * p - e * a * p - o * c * w + e * l * w, b[4] = u * l * y - r * a * y - u * c * p + i * a * p + r * c * w - i * l * w, b[8] = r * s * y - u * o * y + u * e * p - i * s * p - r * e * w + i * o * w, b[12] = u * o * c - r * s * c - u * e * l + i * s * l + r * e * a - i * o * a, b[1] = s * l * v - o * a * v - s * h * p + f * a * p + o * h * w - f * l * w, b[5] = r * a * v - u * l * v + u * h * p - t * a * p - r * h * w + t * l * w, b[9] = u * o * v - r * s * v - u * f * p + t * s * p + r * f * w - t * o * w, b[13] = r * s * h - u * o * h + u * f * l - t * s * l - r * f * a + t * o * a, b[2] = e * a * v - s * c * v + s * h * y - f * a * y - e * h * w + f * c * w, b[6] = u * c * v - i * a * v - u * h * y + t * a * y + i * h * w - t * c * w, b[10] = i * s * v - u * e * v + u * f * y - t * s * y - i * f * w + t * e * w, b[14] = u * e * h - i * s * h - u * f * c + t * s * c + i * f * a - t * e * a, b[3] = o * c * v - e * l * v - o * h * y + f * l * y + e * h * p - f * c * p, b[7] = i * l * v - r * c * v + r * h * y - t * l * y - i * h * p + t * c * p, b[11] = r * e * v - i * o * v - r * f * y + t * o * y + i * f * p - t * e * p, b[15] = i * o * h - r * e * h + r * f * c - t * o * c - i * f * l + t * e * l, this.multiplyScalar(1 / n.determinant()), this
    },
    setRotationFromEuler: function (n, t) {
        var i = this.elements, nt = n.x, tt = n.y, it = n.z, e = Math.cos(nt), r = Math.sin(nt), o = Math.cos(tt),
            u = Math.sin(tt), s = Math.cos(it), f = Math.sin(it);
        switch (t) {
            case"YXZ":
                var h = o * s, c = o * f, l = u * s, a = u * f;
                i[0] = h + a * r, i[4] = l * r - c, i[8] = e * u, i[1] = e * f, i[5] = e * s, i[9] = -r, i[2] = c * r - l, i[6] = a + h * r, i[10] = e * o;
                break;
            case"ZXY":
                var h = o * s, c = o * f, l = u * s, a = u * f;
                i[0] = h - a * r, i[4] = -e * f, i[8] = l + c * r, i[1] = c + l * r, i[5] = e * s, i[9] = a - h * r, i[2] = -e * u, i[6] = r, i[10] = e * o;
                break;
            case"ZYX":
                var v = e * s, y = e * f, p = r * s, w = r * f;
                i[0] = o * s, i[4] = p * u - y, i[8] = v * u + w, i[1] = o * f, i[5] = w * u + v, i[9] = y * u - p, i[2] = -u, i[6] = r * o, i[10] = e * o;
                break;
            case"YZX":
                var b = e * o, k = e * u, d = r * o, g = r * u;
                i[0] = o * s, i[4] = g - b * f, i[8] = d * f + k, i[1] = f, i[5] = e * s, i[9] = -r * s, i[2] = -u * s, i[6] = k * f + d, i[10] = b - g * f;
                break;
            case"XZY":
                var b = e * o, k = e * u, d = r * o, g = r * u;
                i[0] = o * s, i[4] = -f, i[8] = u * s, i[1] = b * f + g, i[5] = e * s, i[9] = k * f - d, i[2] = d * f - k, i[6] = r * s, i[10] = g * f + b;
                break;
            default:
                var v = e * s, y = e * f, p = r * s, w = r * f;
                i[0] = o * s, i[4] = -o * f, i[8] = u, i[1] = y + p * u, i[5] = v - w * u, i[9] = -r * o, i[2] = w - v * u, i[6] = p + y * u, i[10] = e * o
        }
        return this
    },
    setRotationFromQuaternion: function (n) {
        var t = this.elements, i = n.x, r = n.y, f = n.z, e = n.w, s = i + i, o = r + r, u = f + f, h = i * s,
            c = i * o, l = i * u, a = r * o, v = r * u, y = f * u, p = e * s, w = e * o, b = e * u;
        return t[0] = 1 - (a + y), t[4] = c - b, t[8] = l + w, t[1] = c + b, t[5] = 1 - (h + y), t[9] = v - p, t[2] = l - w, t[6] = v + p, t[10] = 1 - (h + a), this
    },
    extractRotation: function (n) {
        var i = this.elements, t = n.elements, r = THREE.Matrix4.__v1, u = 1 / r.set(t[0], t[1], t[2]).length(),
            f = 1 / r.set(t[4], t[5], t[6]).length(), e = 1 / r.set(t[8], t[9], t[10]).length();
        return i[0] = t[0] * u, i[1] = t[1] * u, i[2] = t[2] * u, i[4] = t[4] * f, i[5] = t[5] * f, i[6] = t[6] * f, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, this
    },
    translate: function (n) {
        var t = this.elements, i = n.x, r = n.y, u = n.z;
        return t[12] = t[0] * i + t[4] * r + t[8] * u + t[12], t[13] = t[1] * i + t[5] * r + t[9] * u + t[13], t[14] = t[2] * i + t[6] * r + t[10] * u + t[14], t[15] = t[3] * i + t[7] * r + t[11] * u + t[15], this
    },
    rotateX: function (n) {
        var t = this.elements, u = t[4], f = t[5], e = t[6], o = t[7], s = t[8], h = t[9], c = t[10], l = t[11],
            i = Math.cos(n), r = Math.sin(n);
        return t[4] = i * u + r * s, t[5] = i * f + r * h, t[6] = i * e + r * c, t[7] = i * o + r * l, t[8] = i * s - r * u, t[9] = i * h - r * f, t[10] = i * c - r * e, t[11] = i * l - r * o, this
    },
    rotateY: function (n) {
        var t = this.elements, u = t[0], f = t[1], e = t[2], o = t[3], s = t[8], h = t[9], c = t[10], l = t[11],
            i = Math.cos(n), r = Math.sin(n);
        return t[0] = i * u - r * s, t[1] = i * f - r * h, t[2] = i * e - r * c, t[3] = i * o - r * l, t[8] = i * s + r * u, t[9] = i * h + r * f, t[10] = i * c + r * e, t[11] = i * l + r * o, this
    },
    rotateZ: function (n) {
        var t = this.elements, u = t[0], f = t[1], e = t[2], o = t[3], s = t[4], h = t[5], c = t[6], l = t[7],
            i = Math.cos(n), r = Math.sin(n);
        return t[0] = i * u + r * s, t[1] = i * f + r * h, t[2] = i * e + r * c, t[3] = i * o + r * l, t[4] = i * s - r * u, t[5] = i * h - r * f, t[6] = i * c - r * e, t[7] = i * l - r * o, this
    },
    rotateByAxis: function (n, t) {
        var i = this.elements;
        if (n.x === 1 && n.y === 0 && n.z === 0)return this.rotateX(t);
        if (n.x === 0 && n.y === 1 && n.z === 0)return this.rotateY(t);
        if (n.x === 0 && n.y === 0 && n.z === 1)return this.rotateZ(t);
        var r = n.x, u = n.y, f = n.z, w = Math.sqrt(r * r + u * u + f * f);
        r /= w, u /= w, f /= w;
        var ct = r * r, lt = u * u, at = f * f, e = Math.cos(t), b = Math.sin(t), k = 1 - e, vt = r * u * k,
            yt = r * f * k, pt = u * f * k, wt = r * b, bt = u * b, kt = f * b, o = ct + (1 - ct) * e, s = vt + kt,
            h = yt - bt, c = vt - kt, l = lt + (1 - lt) * e, a = pt + wt, v = yt + bt, y = pt - wt,
            p = at + (1 - at) * e, d = i[0], g = i[1], nt = i[2], tt = i[3], it = i[4], rt = i[5], ut = i[6], ft = i[7],
            et = i[8], ot = i[9], st = i[10], ht = i[11], dt = i[12], gt = i[13], ni = i[14], ti = i[15];
        return i[0] = o * d + s * it + h * et, i[1] = o * g + s * rt + h * ot, i[2] = o * nt + s * ut + h * st, i[3] = o * tt + s * ft + h * ht, i[4] = c * d + l * it + a * et, i[5] = c * g + l * rt + a * ot, i[6] = c * nt + l * ut + a * st, i[7] = c * tt + l * ft + a * ht, i[8] = v * d + y * it + p * et, i[9] = v * g + y * rt + p * ot, i[10] = v * nt + y * ut + p * st, i[11] = v * tt + y * ft + p * ht, this
    },
    scale: function (n) {
        var t = this.elements, i = n.x, r = n.y, u = n.z;
        return t[0] *= i, t[4] *= r, t[8] *= u, t[1] *= i, t[5] *= r, t[9] *= u, t[2] *= i, t[6] *= r, t[10] *= u, t[3] *= i, t[7] *= r, t[11] *= u, this
    },
    getMaxScaleOnAxis: function () {
        var n = this.elements, t = n[0] * n[0] + n[1] * n[1] + n[2] * n[2], i = n[4] * n[4] + n[5] * n[5] + n[6] * n[6],
            r = n[8] * n[8] + n[9] * n[9] + n[10] * n[10];
        return Math.sqrt(Math.max(t, Math.max(i, r)))
    },
    makeFrustum: function (n, t, i, r, u, f) {
        var e = this.elements, o = 2 * u / (t - n), s = 2 * u / (r - i), h = (t + n) / (t - n), c = (r + i) / (r - i),
            l = -(f + u) / (f - u), a = -2 * f * u / (f - u);
        return e[0] = o, e[4] = 0, e[8] = h, e[12] = 0, e[1] = 0, e[5] = s, e[9] = c, e[13] = 0, e[2] = 0, e[6] = 0, e[10] = l, e[14] = a, e[3] = 0, e[7] = 0, e[11] = -1, e[15] = 0, this
    },
    makePerspective: function (n, t, i, r) {
        var u = i * Math.tan(n * Math.PI / 360), f = -u, e = f * t, o = u * t;
        return this.makeFrustum(e, o, f, u, i, r)
    },
    clone: function () {
        var n = this.elements;
        return new THREE.Matrix4(n[0], n[4], n[8], n[12], n[1], n[5], n[9], n[13], n[2], n[6], n[10], n[14], n[3], n[7], n[11], n[15])
    }
}, THREE.Matrix4.__v1 = new THREE.Vector3, THREE.Matrix4.__v2 = new THREE.Vector3, THREE.Matrix4.__v3 = new THREE.Vector3, THREE.Matrix4.__m1 = new THREE.Matrix4, THREE.Matrix4.__m2 = new THREE.Matrix4, THREE.Object3D = function () {
    this.id = THREE.Object3DCount++, this.name = "", this.parent = undefined, this.children = [], this.up = new THREE.Vector3(0, 1, 0), this.position = new THREE.Vector3, this.rotation = new THREE.Vector3, this.eulerOrder = "XYZ", this.scale = new THREE.Vector3(1, 1, 1), this.doubleSided = !1, this.flipSided = !1, this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4, this.matrixRotationWorld = new THREE.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !0, this.useQuaternion = !1, this.boundRadius = 0, this.boundRadiusScale = 1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this._vector = new THREE.Vector3
}, THREE.Object3D.prototype = {
    constructor: THREE.Object3D, add: function (n) {
        if (n === this) {
            console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
            return
        }
        if (n instanceof THREE.Object3D) {
            n.parent !== undefined && n.parent.remove(n), n.parent = this, this.children.push(n);
            for (var t = this; t.parent !== undefined;)t = t.parent;
            t !== undefined && t instanceof THREE.Scene && t.__addObject(n)
        }
    }, remove: function (n) {
        var i = this.children.indexOf(n), t;
        if (i !== -1) {
            for (n.parent = undefined, this.children.splice(i, 1), t = this; t.parent !== undefined;)t = t.parent;
            t !== undefined && t instanceof THREE.Scene && t.__removeObject(n)
        }
    }, updateMatrix: function () {
        this.matrix.setPosition(this.position), this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder), (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) && (this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))), this.matrixWorldNeedsUpdate = !0
    }, updateMatrixWorld: function (n) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, n = !0);
        for (var t = 0, i = this.children.length; t < i; t++)this.children[t].updateMatrixWorld(n)
    }
}, THREE.Object3DCount = 0, THREE.Projector = function () {
    function k() {
        var n = l[e] = l[e] || new THREE.RenderableObject;
        return e++, n
    }

    function d() {
        var n = r[o] = r[o] || new THREE.RenderableVertex;
        return o++, n
    }

    function g() {
        var n = a[s] = a[s] || new THREE.RenderableFace3;
        return s++, n
    }

    function nt() {
        var n = v[h] = v[h] || new THREE.RenderableFace4;
        return h++, n
    }

    function p(n, t) {
        return t.z - n.z
    }

    var f, e, l = [], i, o, r = [], n, s, a = [], h, v = [], w, b,
        t = {objects: [], sprites: [], lights: [], elements: []}, c = new THREE.Vector3, tt = new THREE.Vector4,
        u = new THREE.Matrix4, it = new THREE.Matrix4, y = new THREE.Frustum, rt = new THREE.Vector4,
        ut = new THREE.Vector4;
    this.projectGraph = function (n, i) {
        e = 0, t.objects.length = 0, t.sprites.length = 0, t.lights.length = 0;
        var r = function (n) {
            if (n.visible !== !1) {
                n instanceof THREE.Mesh && (n.frustumCulled === !1 || y.contains(n)) ? (c.copy(n.matrixWorld.getPosition()), u.multiplyVector3(c), f = k(), f.object = n, f.z = c.z, t.objects.push(f)) : n instanceof THREE.Light && t.lights.push(n);
                for (var i = 0, e = n.children.length; i < e; i++)r(n.children[i])
            }
        };
        return r(n), i && t.objects.sort(p), t
    }, this.projectScene = function (f, e, c) {
        var fi = e.near, ei = e.far, rt = !1, st, dt, ht, gt, ut, ni, ft, ti, et, ii, ot, ri, l, ct, yt, lt, ui, pt, wt,
            a, bt, at, kt, vt, v, k, tt, it;
        for (s = 0, h = 0, w = 0, b = 0, t.elements.length = 0, e.parent === undefined && (console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it..."), f.add(e)), f.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), u.multiply(e.projectionMatrix, e.matrixWorldInverse), y.setFromMatrix(u), t = this.projectGraph(f, !1), st = 0, dt = t.objects.length; st < dt; st++)if (l = t.objects[st].object, ct = l.matrixWorld, o = 0, l instanceof THREE.Mesh) {
            for (lt = l.geometry, ui = l.geometry.materials, pt = lt.vertices, wt = lt.faces, kt = lt.faceVertexUvs, yt = l.matrixRotationWorld.extractRotation(ct), ht = 0, gt = pt.length; ht < gt; ht++)i = d(), i.positionWorld.copy(pt[ht]), ct.multiplyVector3(i.positionWorld), i.positionScreen.copy(i.positionWorld), u.multiplyVector4(i.positionScreen), i.positionScreen.x /= i.positionScreen.w, i.positionScreen.y /= i.positionScreen.w, i.visible = i.positionScreen.z > fi && i.positionScreen.z < ei;
            for (ut = 0, ni = wt.length; ut < ni; ut++) {
                if (a = wt[ut], a instanceof THREE.Face3)if (v = r[a.a], k = r[a.b], tt = r[a.c], v.visible && k.visible && tt.visible)if (rt = (tt.positionScreen.x - v.positionScreen.x) * (k.positionScreen.y - v.positionScreen.y) - (tt.positionScreen.y - v.positionScreen.y) * (k.positionScreen.x - v.positionScreen.x) < 0, l.doubleSided || rt != l.flipSided) n = g(), n.v1.copy(v), n.v2.copy(k), n.v3.copy(tt); else continue; else continue; else if (a instanceof THREE.Face4)if (v = r[a.a], k = r[a.b], tt = r[a.c], it = r[a.d], v.visible && k.visible && tt.visible && it.visible)if (rt = (it.positionScreen.x - v.positionScreen.x) * (k.positionScreen.y - v.positionScreen.y) - (it.positionScreen.y - v.positionScreen.y) * (k.positionScreen.x - v.positionScreen.x) < 0 || (k.positionScreen.x - tt.positionScreen.x) * (it.positionScreen.y - tt.positionScreen.y) - (k.positionScreen.y - tt.positionScreen.y) * (it.positionScreen.x - tt.positionScreen.x) < 0, l.doubleSided || rt != l.flipSided) n = nt(), n.v1.copy(v), n.v2.copy(k), n.v3.copy(tt), n.v4.copy(it); else continue; else continue;
                for (n.normalWorld.copy(a.normal), !rt && (l.flipSided || l.doubleSided) && n.normalWorld.negate(), yt.multiplyVector3(n.normalWorld), n.centroidWorld.copy(a.centroid), ct.multiplyVector3(n.centroidWorld), n.centroidScreen.copy(n.centroidWorld), u.multiplyVector3(n.centroidScreen), bt = a.vertexNormals, ft = 0, ti = bt.length; ft < ti; ft++)at = n.vertexNormalsWorld[ft], at.copy(bt[ft]), !rt && (l.flipSided || l.doubleSided) && at.negate(), yt.multiplyVector3(at);
                for (et = 0, ii = kt.length; et < ii; et++)if (vt = kt[et][ut], vt)for (ot = 0, ri = vt.length; ot < ri; ot++)n.uvs[et][ot] = vt[ot];
                n.material = l.material, n.faceMaterial = a.materialIndex !== null ? ui[a.materialIndex] : null, n.z = n.centroidScreen.z, t.elements.push(n)
            }
        }
        return c && t.elements.sort(p), t
    }
}, THREE.Face3 = function (n, t, i, r, u, f) {
    this.a = n, this.b = t, this.c = i, this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3, this.vertexNormals = r instanceof Array ? r : [], this.color = u instanceof THREE.Color ? u : new THREE.Color, this.vertexColors = u instanceof Array ? u : [], this.vertexTangents = [], this.materialIndex = f, this.centroid = new THREE.Vector3
}, THREE.Face3.prototype = {
    constructor: THREE.Face3, clone: function () {
        var t = new THREE.Face3(this.a, this.b, this.c), n, i;
        for (t.normal.copy(this.normal), t.color.copy(this.color), t.centroid.copy(this.centroid), t.materialIndex = this.materialIndex, n = 0, i = this.vertexNormals.length; n < i; n++)t.vertexNormals[n] = this.vertexNormals[n].clone();
        for (n = 0, i = this.vertexColors.length; n < i; n++)t.vertexColors[n] = this.vertexColors[n].clone();
        for (n = 0, i = this.vertexTangents.length; n < i; n++)t.vertexTangents[n] = this.vertexTangents[n].clone();
        return t
    }
}, THREE.Face4 = function (n, t, i, r, u, f, e) {
    this.a = n, this.b = t, this.c = i, this.d = r, this.normal = u instanceof THREE.Vector3 ? u : new THREE.Vector3, this.vertexNormals = u instanceof Array ? u : [], this.color = f instanceof THREE.Color ? f : new THREE.Color, this.vertexColors = f instanceof Array ? f : [], this.vertexTangents = [], this.materialIndex = e, this.centroid = new THREE.Vector3
}, THREE.Face4.prototype = {
    constructor: THREE.Face4, clone: function () {
        var t = new THREE.Face4(this.a, this.b, this.c, this.d), n, i;
        for (t.normal.copy(this.normal), t.color.copy(this.color), t.centroid.copy(this.centroid), t.materialIndex = this.materialIndex, n = 0, i = this.vertexNormals.length; n < i; n++)t.vertexNormals[n] = this.vertexNormals[n].clone();
        for (n = 0, i = this.vertexColors.length; n < i; n++)t.vertexColors[n] = this.vertexColors[n].clone();
        for (n = 0, i = this.vertexTangents.length; n < i; n++)t.vertexTangents[n] = this.vertexTangents[n].clone();
        return t
    }
}, THREE.UV = function (n, t) {
    this.u = n || 0, this.v = t || 0
}, THREE.UV.prototype = {
    constructor: THREE.UV, set: function (n, t) {
        return this.u = n, this.v = t, this
    }, copy: function (n) {
        return this.u = n.u, this.v = n.v, this
    }, lerpSelf: function (n, t) {
        return this.u += (n.u - this.u) * t, this.v += (n.v - this.v) * t, this
    }, clone: function () {
        return new THREE.UV(this.u, this.v)
    }
}, THREE.Geometry = function () {
    this.id = THREE.GeometryCount++, this.vertices = [], this.colors = [], this.materials = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !1
}, THREE.Geometry.prototype = {
    constructor: THREE.Geometry, computeCentroids: function () {
        for (var n, t = 0,
                 i = this.faces.length; t < i; t++)n = this.faces[t], n.centroid.set(0, 0, 0), n instanceof THREE.Face3 ? (n.centroid.addSelf(this.vertices[n.a]), n.centroid.addSelf(this.vertices[n.b]), n.centroid.addSelf(this.vertices[n.c]), n.centroid.divideScalar(3)) : n instanceof THREE.Face4 && (n.centroid.addSelf(this.vertices[n.a]), n.centroid.addSelf(this.vertices[n.b]), n.centroid.addSelf(this.vertices[n.c]), n.centroid.addSelf(this.vertices[n.d]), n.centroid.divideScalar(4))
    }, computeBoundingSphere: function () {
        var i, n, t, r;
        for (this.boundingSphere || (this.boundingSphere = {radius: 0}), n = 0, t = 0, r = this.vertices.length; t < r; t++)i = this.vertices[t].length(), i > n && (n = i);
        this.boundingSphere.radius = n
    }, mergeVertices: function () {
        for (var c = {}, f = [], i = [], e, o, l = Math.pow(10, 4), n, u, r, h, v, a, y, t = 0,
                 s = this.vertices.length; t < s; t++)e = this.vertices[t], o = [Math.round(e.x * l), Math.round(e.y * l), Math.round(e.z * l)].join("_"), c[o] === undefined ? (c[o] = t, f.push(this.vertices[t]), i[t] = f.length - 1) : i[t] = i[c[o]];
        for (t = 0, s = this.faces.length; t < s; t++)if (n = this.faces[t], n instanceof THREE.Face3) n.a = i[n.a], n.b = i[n.b], n.c = i[n.c]; else if (n instanceof THREE.Face4)for (n.a = i[n.a], n.b = i[n.b], n.c = i[n.c], n.d = i[n.d], u = [n.a, n.b, n.c, n.d], r = 3; r > 0; r--)if (u.indexOf(n["abcd"[r]]) != r) {
            for (u.splice(r, 1), this.faces[t] = new THREE.Face3(u[0], u[1], u[2]), h = 0, v = this.faceVertexUvs.length; h < v; h++)a = this.faceVertexUvs[h][t], a && a.splice(r, 1);
            break
        }
        return y = this.vertices.length - f.length, this.vertices = f, y
    }
}, THREE.GeometryCount = 0, THREE.Camera = function () {
    THREE.Object3D.call(this), this.matrixWorldInverse = new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4, this.projectionMatrixInverse = new THREE.Matrix4
}, THREE.Camera.prototype = new THREE.Object3D, THREE.Camera.prototype.constructor = THREE.Camera, THREE.Camera.prototype.lookAt = function (n) {
    this.matrix.lookAt(this.position, n, this.up), this.rotationAutoUpdate && this.rotation.getRotationFromMatrix(this.matrix)
}, THREE.PerspectiveCamera = function (n, t, i, r) {
    THREE.Camera.call(this), this.fov = n !== undefined ? n : 50, this.aspect = t !== undefined ? t : 1, this.near = i !== undefined ? i : .1, this.far = r !== undefined ? r : 2e3, this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype = new THREE.Camera, THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera, THREE.PerspectiveCamera.prototype.setLens = function (n, t) {
    t = t !== undefined ? t : 24, this.fov = 2 * Math.atan(t / (n * 2)) * (180 / Math.PI), this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype.setViewOffset = function (n, t, i, r, u, f) {
    this.fullWidth = n, this.fullHeight = t, this.x = i, this.y = r, this.width = u, this.height = f, this.updateProjectionMatrix()
}, THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    if (this.fullWidth) {
        var i = this.fullWidth / this.fullHeight, n = Math.tan(this.fov * Math.PI / 360) * this.near, r = -n, t = i * r,
            e = i * n, u = Math.abs(e - t), f = Math.abs(n - r);
        this.projectionMatrix.makeFrustum(t + this.x * u / this.fullWidth, t + (this.x + this.width) * u / this.fullWidth, n - (this.y + this.height) * f / this.fullHeight, n - this.y * f / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
}, THREE.Light = function (n) {
    THREE.Object3D.call(this), this.color = new THREE.Color(n)
}, THREE.Light.prototype = new THREE.Object3D, THREE.Light.prototype.constructor = THREE.Light, THREE.Light.prototype.supr = THREE.Object3D.prototype, THREE.AmbientLight = function (n) {
    THREE.Light.call(this, n)
}, THREE.AmbientLight.prototype = new THREE.Light, THREE.AmbientLight.prototype.constructor = THREE.AmbientLight, THREE.PointLight = function (n, t, i) {
    THREE.Light.call(this, n), this.position = new THREE.Vector3(0, 0, 0), this.intensity = t !== undefined ? t : 1, this.distance = i !== undefined ? i : 0
}, THREE.PointLight.prototype = new THREE.Light, THREE.PointLight.prototype.constructor = THREE.PointLight, THREE.Material = function (n) {
    n = n || {}, this.id = THREE.MaterialCount++, this.name = "", this.opacity = n.opacity !== undefined ? n.opacity : 1, this.transparent = n.transparent !== undefined ? n.transparent : !1, this.blending = n.blending !== undefined ? n.blending : THREE.NormalBlending, this.blendSrc = n.blendSrc !== undefined ? n.blendSrc : THREE.SrcAlphaFactor, this.blendDst = n.blendDst !== undefined ? n.blendDst : THREE.OneMinusSrcAlphaFactor, this.blendEquation = n.blendEquation !== undefined ? n.blendEquation : THREE.AddEquation, this.depthTest = n.depthTest !== undefined ? n.depthTest : !0, this.depthWrite = n.depthWrite !== undefined ? n.depthWrite : !0, this.polygonOffset = n.polygonOffset !== undefined ? n.polygonOffset : !1, this.polygonOffsetFactor = n.polygonOffsetFactor !== undefined ? n.polygonOffsetFactor : 0, this.polygonOffsetUnits = n.polygonOffsetUnits !== undefined ? n.polygonOffsetUnits : 0, this.alphaTest = n.alphaTest !== undefined ? n.alphaTest : 0, this.overdraw = n.overdraw !== undefined ? n.overdraw : !1, this.visible = !0, this.needsUpdate = !0
}, THREE.MaterialCount = 0, THREE.NoShading = 0, THREE.FlatShading = 1, THREE.SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors = 2, THREE.NormalBlending = 1, THREE.AdditiveBlending = 2, THREE.SubtractiveBlending = 3, THREE.MultiplyBlending = 4, THREE.AdditiveAlphaBlending = 5, THREE.CustomBlending = 6, THREE.AddEquation = 100, THREE.SubtractEquation = 101, THREE.ReverseSubtractEquation = 102, THREE.MeshBasicMaterial = function (n) {
    THREE.Material.call(this, n), n = n || {}, this.color = n.color !== undefined ? new THREE.Color(n.color) : new THREE.Color(16777215), this.map = n.map !== undefined ? n.map : null, this.lightMap = n.lightMap !== undefined ? n.lightMap : null, this.envMap = n.envMap !== undefined ? n.envMap : null, this.combine = n.combine !== undefined ? n.combine : THREE.MultiplyOperation, this.reflectivity = n.reflectivity !== undefined ? n.reflectivity : 1, this.refractionRatio = n.refractionRatio !== undefined ? n.refractionRatio : .98, this.fog = n.fog !== undefined ? n.fog : !0, this.shading = n.shading !== undefined ? n.shading : THREE.SmoothShading, this.wireframe = n.wireframe !== undefined ? n.wireframe : !1, this.wireframeLinewidth = n.wireframeLinewidth !== undefined ? n.wireframeLinewidth : 1, this.wireframeLinecap = n.wireframeLinecap !== undefined ? n.wireframeLinecap : "round", this.wireframeLinejoin = n.wireframeLinejoin !== undefined ? n.wireframeLinejoin : "round", this.vertexColors = n.vertexColors !== undefined ? n.vertexColors : THREE.NoColors, this.skinning = n.skinning !== undefined ? n.skinning : !1, this.morphTargets = n.morphTargets !== undefined ? n.morphTargets : !1
}, THREE.MeshBasicMaterial.prototype = new THREE.Material, THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshLambertMaterial = function (n) {
    THREE.Material.call(this, n), n = n || {}, this.color = n.color !== undefined ? new THREE.Color(n.color) : new THREE.Color(16777215), this.ambient = n.ambient !== undefined ? new THREE.Color(n.ambient) : new THREE.Color(16777215), this.emissive = n.emissive !== undefined ? new THREE.Color(n.emissive) : new THREE.Color(0), this.wrapAround = n.wrapAround !== undefined ? n.wrapAround : !1, this.wrapRGB = new THREE.Vector3(1, 1, 1), this.map = n.map !== undefined ? n.map : null, this.lightMap = n.lightMap !== undefined ? n.lightMap : null, this.envMap = n.envMap !== undefined ? n.envMap : null, this.combine = n.combine !== undefined ? n.combine : THREE.MultiplyOperation, this.reflectivity = n.reflectivity !== undefined ? n.reflectivity : 1, this.refractionRatio = n.refractionRatio !== undefined ? n.refractionRatio : .98, this.fog = n.fog !== undefined ? n.fog : !0, this.shading = n.shading !== undefined ? n.shading : THREE.SmoothShading, this.wireframe = n.wireframe !== undefined ? n.wireframe : !1, this.wireframeLinewidth = n.wireframeLinewidth !== undefined ? n.wireframeLinewidth : 1, this.wireframeLinecap = n.wireframeLinecap !== undefined ? n.wireframeLinecap : "round", this.wireframeLinejoin = n.wireframeLinejoin !== undefined ? n.wireframeLinejoin : "round", this.vertexColors = n.vertexColors !== undefined ? n.vertexColors : THREE.NoColors, this.skinning = n.skinning !== undefined ? n.skinning : !1, this.morphTargets = n.morphTargets !== undefined ? n.morphTargets : !1, this.morphNormals = n.morphNormals !== undefined ? n.morphNormals : !1
}, THREE.MeshLambertMaterial.prototype = new THREE.Material, THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshNormalMaterial = function (n) {
    THREE.Material.call(this, n), n = n || {}, this.shading = n.shading ? n.shading : THREE.FlatShading, this.wireframe = n.wireframe ? n.wireframe : !1, this.wireframeLinewidth = n.wireframeLinewidth ? n.wireframeLinewidth : 1
}, THREE.MeshNormalMaterial.prototype = new THREE.Material, THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshFaceMaterial = function () {
}, THREE.Texture = function (n, t, i, r, u, f, e, o) {
    this.id = THREE.TextureCount++, this.image = n, this.mapping = t !== undefined ? t : new THREE.UVMapping, this.wrapS = i !== undefined ? i : THREE.ClampToEdgeWrapping, this.wrapT = r !== undefined ? r : THREE.ClampToEdgeWrapping, this.magFilter = u !== undefined ? u : THREE.LinearFilter, this.minFilter = f !== undefined ? f : THREE.LinearMipMapLinearFilter, this.format = e !== undefined ? e : THREE.RGBAFormat, this.type = o !== undefined ? o : THREE.UnsignedByteType, this.offset = new THREE.Vector2(0, 0), this.repeat = new THREE.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.needsUpdate = !1, this.onUpdate = null
}, THREE.Texture.prototype = {
    constructor: THREE.Texture, clone: function () {
        var n = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter, this.format, this.type);
        return n.offset.copy(this.offset), n.repeat.copy(this.repeat), n
    }
}, THREE.TextureCount = 0, THREE.MultiplyOperation = 0, THREE.MixOperation = 1, THREE.UVMapping = function () {
}, THREE.CubeReflectionMapping = function () {
}, THREE.CubeRefractionMapping = function () {
}, THREE.SphericalReflectionMapping = function () {
}, THREE.SphericalRefractionMapping = function () {
}, THREE.RepeatWrapping = 0, THREE.ClampToEdgeWrapping = 1, THREE.MirroredRepeatWrapping = 2, THREE.DataTexture = function (n, t, i, r, u, f, e, o, s, h) {
    THREE.Texture.call(this, null, f, e, o, s, h, r, u), this.image = {data: n, width: t, height: i}
}, THREE.DataTexture.prototype = new THREE.Texture, THREE.DataTexture.prototype.constructor = THREE.DataTexture, THREE.DataTexture.prototype.clone = function () {
    var n = new THREE.DataTexture(this.image.data, this.image.width, this.image.height, this.format, this.type, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
    return n.offset.copy(this.offset), n.repeat.copy(this.repeat), n
}, THREE.Mesh = function (n, t) {
    if (THREE.Object3D.call(this), this.geometry = n, this.material = t !== undefined ? t : new THREE.MeshBasicMaterial({
            color: Math.random() * 16777215,
            wireframe: !0
        }), this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = n.boundingSphere.radius, this.geometry.morphTargets.length)) {
        this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (var i = 0; i < this.geometry.morphTargets.length; i++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[i].name] = i
    }
},THREE.Mesh.prototype = new THREE.Object3D,THREE.Mesh.prototype.constructor = THREE.Mesh,THREE.Mesh.prototype.supr = THREE.Object3D.prototype,THREE.Scene = function () {
    THREE.Object3D.call(this), this.fog = null, this.overrideMaterial = null, this.matrixAutoUpdate = !1, this.__objects = [], this.__lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
},THREE.Scene.prototype = new THREE.Object3D,THREE.Scene.prototype.constructor = THREE.Scene,THREE.Scene.prototype.__addObject = function (n) {
    var i, t;
    for (n instanceof THREE.Light ? this.__lights.indexOf(n) === -1 && this.__lights.push(n) : n instanceof THREE.Camera || this.__objects.indexOf(n) === -1 && (this.__objects.push(n), this.__objectsAdded.push(n), i = this.__objectsRemoved.indexOf(n), i !== -1 && this.__objectsRemoved.splice(i, 1)), t = 0; t < n.children.length; t++)this.__addObject(n.children[t])
},THREE.Scene.prototype.__removeObject = function (n) {
    var t, r, i;
    for (n instanceof THREE.Light ? (t = this.__lights.indexOf(n), t !== -1 && this.__lights.splice(t, 1)) : n instanceof THREE.Camera || (t = this.__objects.indexOf(n), t !== -1 && (this.__objects.splice(t, 1), this.__objectsRemoved.push(n), r = this.__objectsAdded.indexOf(n), r !== -1 && this.__objectsAdded.splice(r, 1))), i = 0; i < n.children.length; i++)this.__removeObject(n.children[i])
},THREE.CanvasRenderer = function (n) {
    function or(n) {
        gt != n && (t.globalAlpha = gt = n)
    }

    function sr(n) {
        ii != n && (t.lineWidth = ii = n)
    }

    function hr(n) {
        ri != n && (t.lineCap = ri = n)
    }

    function cr(n) {
        ui != n && (t.lineJoin = ui = n)
    }

    function lr(n) {
        ni != n && (t.strokeStyle = ni = n)
    }

    function wi(n) {
        ti != n && (t.fillStyle = ti = n)
    }

    n = n || {};
    var ut = this, wt, bt, it, rr = new THREE.Projector,
        lt = n.canvas !== undefined ? n.canvas : document.createElement("canvas"), kt, dt, f, e,
        t = lt.getContext("2d"), st = new THREE.Color(0), ht = 0, gt = 1, ur = 0, ni = null, ti = null, ii = null,
        ri = null, ui = null, r, i, o, tt, fi = new THREE.RenderableVertex, ei = new THREE.RenderableVertex, p, w, b, k,
        d, g, ft, et, oi, si, hi, ci, h = new THREE.Color, l = new THREE.Color, a = new THREE.Color,
        v = new THREE.Color, y = new THREE.Color, li = [], ai = [], vi, rt, bi, ki, di, gi, nr, tr,
        ct = new THREE.Rectangle, s = new THREE.Rectangle, c = new THREE.Rectangle, yi = !1, nt = new THREE.Color,
        fr = new THREE.Color, at = new THREE.Color, ar = Math.PI * 2, u = new THREE.Vector3, vt, yt, ir, er, pt, pi,
        ot = 16;
    vt = document.createElement("canvas"), vt.width = vt.height = 2, yt = vt.getContext("2d"), yt.fillStyle = "rgba(0,0,0,1)", yt.fillRect(0, 0, 2, 2), ir = yt.getImageData(0, 0, 2, 2), er = ir.data, pt = document.createElement("canvas"), pt.width = pt.height = ot, pi = pt.getContext("2d"), pi.translate(-ot / 2, -ot / 2), pi.scale(ot, ot), ot--, this.domElement = lt, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    }, this.setSize = function (n, t) {
        kt = n, dt = t, f = Math.floor(kt / 2), e = Math.floor(dt / 2), lt.width = kt, lt.height = dt, ct.set(-f, -e, f, e), s.set(-f, -e, f, e), gt = 1, ur = 0, ni = null, ti = null, ii = null, ri = null, ui = null
    }, this.setClearColor = function (n, t) {
        st.copy(n), ht = t !== undefined ? t : 1, s.set(-f, -e, f, e)
    }, this.setClearColorHex = function (n, t) {
        st.setHex(n), ht = t !== undefined ? t : 1, s.set(-f, -e, f, e)
    }, this.clear = function () {
        t.setTransform(1, 0, 0, -1, f, e), s.isEmpty() || (s.minSelf(ct), s.inflate(2), ht < 1 && t.clearRect(Math.floor(s.getX()), Math.floor(s.getY()), Math.floor(s.getWidth()), Math.floor(s.getHeight())), ht > 0 && (setBlending(THREE.NormalBlending), or(1), wi("rgba(" + Math.floor(st.r * 255) + "," + Math.floor(st.g * 255) + "," + Math.floor(st.b * 255) + "," + ht + ")"), t.fillRect(Math.floor(s.getX()), Math.floor(s.getY()), Math.floor(s.getWidth()), Math.floor(s.getHeight()))), s.empty())
    }, this.render = function (n, ot) {
        function ri(n) {
            var i, u, r, t;
            for (nt.setRGB(0, 0, 0), fr.setRGB(0, 0, 0), at.setRGB(0, 0, 0), i = 0, u = n.length; i < u; i++)r = n[i], t = r.color, r instanceof THREE.AmbientLight ? (nt.r += t.r, nt.g += t.g, nt.b += t.b) : r instanceof THREE.PointLight && (at.r += t.r, at.g += t.g, at.b += t.b)
        }

        function vt(n, t, i, r) {
            for (var e, s, h, f, o = 0,
                     c = n.length; o < c; o++)if (e = n[o], s = e.color, e instanceof THREE.PointLight) {
                if (h = e.matrixWorld.getPosition(), f = i.dot(u.sub(h, t).normalize()), f <= 0)continue;
                if (f *= e.distance == 0 ? 1 : 1 - Math.min(t.distanceTo(h) / e.distance, 1), f == 0)continue;
                f *= e.intensity, r.r += s.r * f, r.g += s.g * f, r.b += s.b * f
            }
        }

        function dt(n, t, i, r, f, e, o, s) {
            if (ut.info.render.vertices += 3, ut.info.render.faces++, p = n.positionScreen.x, w = n.positionScreen.y, b = t.positionScreen.x, k = t.positionScreen.y, d = i.positionScreen.x, g = i.positionScreen.y, gt(p, w, b, k, d, g), s instanceof THREE.MeshBasicMaterial)if (s.map) s.map.mapping instanceof THREE.UVMapping && (rt = o.uvs[0], ii(p, w, b, k, d, g, rt[r].u, rt[r].v, rt[f].u, rt[f].v, rt[e].u, rt[e].v, s.map)); else if (s.envMap) {
                if (s.envMap.mapping instanceof THREE.SphericalReflectionMapping) {
                    var h = ot.matrixWorldInverse;
                    u.copy(o.vertexNormalsWorld[r]), bi = (u.x * h.elements[0] + u.y * h.elements[4] + u.z * h.elements[8]) * .5 + .5, ki = -(u.x * h.elements[1] + u.y * h.elements[5] + u.z * h.elements[9]) * .5 + .5, u.copy(o.vertexNormalsWorld[f]), di = (u.x * h.elements[0] + u.y * h.elements[4] + u.z * h.elements[8]) * .5 + .5, gi = -(u.x * h.elements[1] + u.y * h.elements[5] + u.z * h.elements[9]) * .5 + .5, u.copy(o.vertexNormalsWorld[e]), nr = (u.x * h.elements[0] + u.y * h.elements[4] + u.z * h.elements[8]) * .5 + .5, tr = -(u.x * h.elements[1] + u.y * h.elements[5] + u.z * h.elements[9]) * .5 + .5, ii(p, w, b, k, d, g, bi, ki, di, gi, nr, tr, s.envMap)
                }
            } else s.wireframe ? kt(s.color, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin) : yt(s.color)
        }

        function ui(n, t, i, r, u, f, e, o, s) {
            if (ut.info.render.vertices += 4, ut.info.render.faces++, o.map || o.envMap) {
                dt(n, t, r, 0, 1, 3, e, o, s), dt(u, i, f, 1, 2, 3, e, o, s);
                return
            }
            p = n.positionScreen.x, w = n.positionScreen.y, b = t.positionScreen.x, k = t.positionScreen.y, d = i.positionScreen.x, g = i.positionScreen.y, ft = r.positionScreen.x, et = r.positionScreen.y, oi = u.positionScreen.x, si = u.positionScreen.y, hi = f.positionScreen.x, ci = f.positionScreen.y, o instanceof THREE.MeshBasicMaterial ? (ni(p, w, b, k, d, g, ft, et), o.wireframe ? kt(o.color, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : yt(o.color)) : o instanceof THREE.MeshLambertMaterial && (yi ? o.wireframe || o.shading != THREE.SmoothShading || e.vertexNormalsWorld.length != 4 ? (h.r = nt.r, h.g = nt.g, h.b = nt.b, vt(it, e.centroidWorld, e.normalWorld, h), h.r = Math.max(0, Math.min(o.color.r * h.r, 1)), h.g = Math.max(0, Math.min(o.color.g * h.g, 1)), h.b = Math.max(0, Math.min(o.color.b * h.b, 1)), ni(p, w, b, k, d, g, ft, et), o.wireframe ? kt(h, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : yt(h)) : (l.r = a.r = v.r = y.r = nt.r, l.g = a.g = v.g = y.g = nt.g, l.b = a.b = v.b = y.b = nt.b, vt(it, e.v1.positionWorld, e.vertexNormalsWorld[0], l), vt(it, e.v2.positionWorld, e.vertexNormalsWorld[1], a), vt(it, e.v4.positionWorld, e.vertexNormalsWorld[3], v), vt(it, e.v3.positionWorld, e.vertexNormalsWorld[2], y), l.r = Math.max(0, Math.min(o.color.r * l.r, 1)), l.g = Math.max(0, Math.min(o.color.g * l.g, 1)), l.b = Math.max(0, Math.min(o.color.b * l.b, 1)), a.r = Math.max(0, Math.min(o.color.r * a.r, 1)), a.g = Math.max(0, Math.min(o.color.g * a.g, 1)), a.b = Math.max(0, Math.min(o.color.b * a.b, 1)), v.r = Math.max(0, Math.min(o.color.r * v.r, 1)), v.g = Math.max(0, Math.min(o.color.g * v.g, 1)), v.b = Math.max(0, Math.min(o.color.b * v.b, 1)), y.r = Math.max(0, Math.min(o.color.r * y.r, 1)), y.g = Math.max(0, Math.min(o.color.g * y.g, 1)), y.b = Math.max(0, Math.min(o.color.b * y.b, 1)), vi = getGradientTexture(l, a, v, y), gt(p, w, b, k, ft, et), clipImage(p, w, b, k, ft, et, 0, 0, 1, 0, 0, 1, vi), gt(oi, si, d, g, hi, ci), clipImage(oi, si, d, g, hi, ci, 1, 0, 1, 1, 0, 1, vi)) : (ni(p, w, b, k, d, g, ft, et), o.wireframe ? kt(o.color, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : yt(o.color)))
        }

        function gt(n, i, r, u, f, e) {
            t.beginPath(), t.moveTo(n, i), t.lineTo(r, u), t.lineTo(f, e), t.lineTo(n, i), t.closePath()
        }

        function ni(n, i, r, u, f, e, o, s) {
            t.beginPath(), t.moveTo(n, i), t.lineTo(r, u), t.lineTo(f, e), t.lineTo(o, s), t.lineTo(n, i), t.closePath()
        }

        function kt(n, i, r, u) {
            sr(i), hr(r), cr(u), lr(n.getContextStyle()), t.stroke(), c.inflate(i * 2)
        }

        function yt(n) {
            wi(n.getContextStyle()), t.fill()
        }

        function ii(n, i, r, u, f, e, o, s, c, l, a, v, y) {
            var w, b, k, ht, d, g;
            if (y.image.width != 0) {
                (y.needsUpdate == !0 || li[y.id] == undefined) && (w = y.wrapS == THREE.RepeatWrapping, b = y.wrapT == THREE.RepeatWrapping, li[y.id] = t.createPattern(y.image, w && b ? "repeat" : w && !b ? "repeat-x" : !w && b ? "repeat-y" : "no-repeat"), y.needsUpdate = !1), wi(li[y.id]);
                var nt, tt, it, rt, ct, lt, ut, p, ft = y.offset.x / y.repeat.x, et = y.offset.y / y.repeat.y,
                    ot = y.image.width * y.repeat.x, st = y.image.height * y.repeat.y;
                if (o = (o + ft) * ot, s = (s + et) * st, c = (c + ft) * ot, l = (l + et) * st, a = (a + ft) * ot, v = (v + et) * st, r -= n, u -= i, f -= n, e -= i, c -= o, l -= s, a -= o, v -= s, ut = c * v - a * l, ut == 0) {
                    ai[y.id] === undefined && (k = document.createElement("canvas"), k.width = y.image.width, k.height = y.image.height, ht = k.getContext("2d"), ht.drawImage(y.image, 0, 0), ai[y.id] = ht.getImageData(0, 0, y.image.width, y.image.height).data), d = ai[y.id], g = (Math.floor(o) + Math.floor(s) * y.image.width) * 4, h.setRGB(d[g] / 255, d[g + 1] / 255, d[g + 2] / 255), yt(h);
                    return
                }
                p = 1 / ut, nt = (v * r - l * f) * p, tt = (v * u - l * e) * p, it = (c * f - a * r) * p, rt = (c * e - a * u) * p, ct = n - nt * o - it * s, lt = i - tt * o - rt * s, t.save(), t.transform(nt, tt, it, rt, ct, lt), THREE.removeGaps ? t.drawImage(y.image, 0, 0) : t.fill(), t.restore()
            }
        }

        function lt(n, t) {
            if (!THREE.removeGaps) {
                var i = t.x - n.x, r = t.y - n.y, f = i * i + r * r, u;
                f != 0 && (u = 1 / Math.sqrt(f) / 2, i *= u, r *= u, t.x += i, t.y += r, n.x -= i, n.y -= r)
            }
        }

        var pt, ti, st, ht;
        for (this.autoClear ? this.clear() : t.setTransform(1, 0, 0, -1, f, e), ut.info.render.vertices = 0, ut.info.render.faces = 0, wt = rr.projectScene(n, ot, this.sortElements), bt = wt.elements, it = wt.lights, yi = it.length > 0, yi && ri(it), pt = 0, ti = bt.length; pt < ti; pt++)(st = bt[pt], ht = st.material, ht = ht instanceof THREE.MeshFaceMaterial ? st.faceMaterial : ht, ht !== undefined && ht.visible !== !1) && (c.empty(), st instanceof THREE.RenderableLine ? (r = st.v1, i = st.v2, r.positionScreen.x *= f, r.positionScreen.y *= e, i.positionScreen.x *= f, i.positionScreen.y *= e, c.addPoint(r.positionScreen.x, r.positionScreen.y), c.addPoint(i.positionScreen.x, i.positionScreen.y), ct.intersects(c) && renderLine(r, i, st, ht, n)) : st instanceof THREE.RenderableFace3 ? (r = st.v1, i = st.v2, o = st.v3, r.positionScreen.x *= f, r.positionScreen.y *= e, i.positionScreen.x *= f, i.positionScreen.y *= e, o.positionScreen.x *= f, o.positionScreen.y *= e, ht.overdraw && (lt(r.positionScreen, i.positionScreen), lt(i.positionScreen, o.positionScreen), lt(o.positionScreen, r.positionScreen)), c.add3Points(r.positionScreen.x, r.positionScreen.y, i.positionScreen.x, i.positionScreen.y, o.positionScreen.x, o.positionScreen.y), ct.intersects(c) && dt(r, i, o, 0, 1, 2, st, ht, n)) : st instanceof THREE.RenderableFace4 && (r = st.v1, i = st.v2, o = st.v3, tt = st.v4, r.positionScreen.x *= f, r.positionScreen.y *= e, i.positionScreen.x *= f, i.positionScreen.y *= e, o.positionScreen.x *= f, o.positionScreen.y *= e, tt.positionScreen.x *= f, tt.positionScreen.y *= e, fi.positionScreen.copy(i.positionScreen), ei.positionScreen.copy(tt.positionScreen), ht.overdraw && (lt(r.positionScreen, i.positionScreen), lt(i.positionScreen, tt.positionScreen), lt(tt.positionScreen, r.positionScreen), lt(o.positionScreen, fi.positionScreen), lt(o.positionScreen, ei.positionScreen)), c.addPoint(r.positionScreen.x, r.positionScreen.y), c.addPoint(i.positionScreen.x, i.positionScreen.y), c.addPoint(o.positionScreen.x, o.positionScreen.y), c.addPoint(tt.positionScreen.x, tt.positionScreen.y), ct.intersects(c) && ui(r, i, o, tt, fi, ei, st, ht, n)), s.addRectangle(c));
        t.setTransform(1, 0, 0, 1, 0, 0)
    }
},THREE.RenderableVertex = function () {
    this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
},THREE.RenderableVertex.prototype.copy = function (n) {
    this.positionWorld.copy(n.positionWorld), this.positionScreen.copy(n.positionScreen)
},THREE.RenderableFace3 = function () {
    this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.material = null, this.faceMaterial = null, this.uvs = [[]], this.z = null
},THREE.RenderableFace4 = function () {
    this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.v4 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.material = null, this.faceMaterial = null, this.uvs = [[]], this.z = null
},THREE.RenderableObject = function () {
    this.object = null, this.z = null
},THREE.RenderableLine = function () {
    this.z = null, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.material = null
},THREE.CubeGeometry = function (n, t, i, r, u, f, e, o) {
    function s(n, t, i, e, o, s, c, l) {
        var b, a, v, y = r || 1, p = u || 1, tt = o / 2, it = s / 2, g = h.vertices.length, d;
        n === "x" && t === "y" || n === "y" && t === "x" ? b = "z" : n === "x" && t === "z" || n === "z" && t === "x" ? (b = "y", p = f || 1) : (n === "z" && t === "y" || n === "y" && t === "z") && (b = "x", y = f || 1);
        var k = y + 1, rt = p + 1, ut = o / y, ft = s / p, w = new THREE.Vector3;
        for (w[b] = c > 0 ? 1 : -1, v = 0; v < rt; v++)for (a = 0; a < k; a++)d = new THREE.Vector3, d[n] = (a * ut - tt) * i, d[t] = (v * ft - it) * e, d[b] = c, h.vertices.push(d);
        for (v = 0; v < p; v++)for (a = 0; a < y; a++) {
            var et = a + k * v, ot = a + k * (v + 1), st = a + 1 + k * (v + 1), ht = a + 1 + k * v,
                nt = new THREE.Face4(et + g, ot + g, st + g, ht + g);
            nt.normal.copy(w), nt.vertexNormals.push(w.clone(), w.clone(), w.clone(), w.clone()), nt.materialIndex = l, h.faces.push(nt), h.faceVertexUvs[0].push([new THREE.UV(a / y, v / p), new THREE.UV(a / y, (v + 1) / p), new THREE.UV((a + 1) / y, (v + 1) / p), new THREE.UV((a + 1) / y, v / p)])
        }
    }

    var l, c;
    THREE.Geometry.call(this);
    var h = this, a = n / 2, v = t / 2, y = i / 2, p, w, b, k, d, g;
    if (e !== undefined) {
        if (e instanceof Array) this.materials = e; else for (this.materials = [], l = 0; l < 6; l++)this.materials.push(e);
        p = 0, k = 1, w = 2, d = 3, b = 4, g = 5
    } else this.materials = [];
    if (this.sides = {
            px: !0,
            nx: !0,
            py: !0,
            ny: !0,
            pz: !0,
            nz: !0
        }, o != undefined)for (c in o)this.sides[c] !== undefined && (this.sides[c] = o[c]);
    this.sides.px && s("z", "y", -1, -1, i, t, a, p), this.sides.nx && s("z", "y", 1, -1, i, t, -a, k), this.sides.py && s("x", "z", 1, 1, n, i, v, w), this.sides.ny && s("x", "z", 1, -1, n, i, -v, d), this.sides.pz && s("x", "y", 1, -1, n, t, y, b), this.sides.nz && s("x", "y", -1, -1, n, t, -y, g), this.computeCentroids(), this.mergeVertices()
},THREE.CubeGeometry.prototype = new THREE.Geometry,THREE.CubeGeometry.prototype.constructor = THREE.CubeGeometry,Aroma.CanvasTools = {},Aroma.CanvasTools.createBitmapSlice = function (n, t) {
    var i = document.createElement("canvas"), r;
    return i.setAttribute("width", n.width), i.setAttribute("height", n.height), r = i.getContext("2d"), r.drawImage(t, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i
},Aroma.CanvasTools.resizeImage = function (n, t, i) {
    var r = document.createElement("canvas"), u;
    return r.setAttribute("width", Math.floor(i.width) + 1), r.setAttribute("height", Math.floor(i.height) + 1), u = r.getContext("2d"), u.drawImage(n, 0, 0, t.width, t.height, 0, 0, i.width, i.height), r
},Aroma.CanvasTools.flip = function (n, t, i, r) {
    if (i || r) {
        var u = n.getContext("2d");
        u.save(), u.translate(i ? t.width : 0, r ? t.height : 0), u.scale(i ? -1 : 1, r ? -1 : 1), u.drawImage(n, 0, 0), u.restore()
    }
},Aroma.ThreeView = function (n, t) {
    Aroma.AbstractView.call(this, n, t), this.sort = !0, this.needRendering = !0, this.viewport = document.createElement("canvas"), this.viewport_cx = this.viewport.getContext("2d"), this.renderer = new THREE.CanvasRenderer({canvas: this.viewport}), this.renderer.autoClear = !1, THREE.removeGaps = n > 3 && t > 3
},Aroma.ThreeView.prototype = new Aroma.AbstractView,Aroma.ThreeView.prototype.constructor = Aroma.ThreeView,Aroma.ThreeView.prototype.setup = function () {
    var i = 1500, r = 360 * Math.atan(this.vpHeight / (2 * i)) / Math.PI, n, t;
    this.camera = new THREE.PerspectiveCamera(r, this.vpWidth / this.vpHeight, .1, 1e4), this.camera.position.z = i, n = new Image, n.src = this.oldSource.src, t = {
        width: n.width,
        height: n.height
    }, n = null, this.oldSource = Aroma.CanvasTools.resizeImage(this.oldSource, t, {
        width: this.width,
        height: this.height
    }), this.newSource = Aroma.CanvasTools.resizeImage(this.newSource, t, {width: this.width, height: this.height})
},Aroma.ThreeView.prototype.setViewPortSize = function (n, t) {
    Aroma.AbstractView.prototype.setViewPortSize.call(this, n, t), this.renderer.setSize(n, t)
},Aroma.ThreeView.prototype.getPieceAt = function (n, t, i) {
    var f = this.posToID(n, t), r, u;
    return this._pieceList[f] != null ? this._pieceList[f] : (r = new Aroma.ThreeCubePiece, u = this.getPieceBounds(n, t), r.col = n, r.row = t, r.bounds = u, r.view = this, i.piece = r, ConcatObject.concat(r.options, i.getPieceOptions()), r.setup(Aroma.CanvasTools.createBitmapSlice(u, this.newSource), Aroma.CanvasTools.createBitmapSlice(u, this.oldSource)), this._pieceList[f] = r, r)
},Aroma.ThreeView.prototype.dispose = function () {
    Aroma.AbstractView.prototype.dispose.call(this), this.renderer.clear()
},Aroma.ThreeView.prototype.render = function () {
    this.renderer.clear(), this.viewport_cx.clearRect(0, 0, this.vpWidth, this.vpHeight);
    for (var n = 0, t = this._pieceList.length; n < t; ++n)this.renderer.render(this._pieceList[n].scene, this.camera)
},Aroma.ThreeCubePiece = function () {
    Aroma.Piece.call(this), this.depth = 0, this.options = {
        flipX: !1,
        flipY: !1,
        fillSides: !0,
        sideColor: 3355443,
        newImageLocation: 5,
        depth: 800
    }, this.side_dic = {right: 0, front: 4, left: 1, back: 5, top: 2, bottom: 3}
},Aroma.ThreeCubePiece.prototype = new Aroma.Piece,Aroma.ThreeCubePiece.prototype.constructor = Aroma.ThreeCubePiece,Aroma.ThreeCubePiece.prototype.setup = function (n, t, i) {
    var r, u, f;
    for (this.proxy = {
        x: 0,
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        piece: this
    }, this.newSource = n, this.oldSource = t, this.depth = i || this.options.depth, this.scene = new THREE.Scene, this.scene.add(this.view.camera), light1 = new THREE.PointLight(16777215, .3, 11e4), light1.position.z = 500, light1.position.x = 0, light1.position.y = 0, light2 = new THREE.AmbientLight(this.options.sideColor), this.scene.add(light2), this.scene.add(light1), r = [], Aroma.CanvasTools.flip(this.newSource, this.bounds, this.options.flipX, this.options.flipY), u = 0; u < 6; ++u)u == 4 ? r.push(new THREE.MeshBasicMaterial({
        map: new THREE.Texture(t),
        overdraw: !0
    })) : u == this.options.newImageLocation ? r.push(new THREE.MeshBasicMaterial({
        map: new THREE.Texture(n),
        overdraw: !0
    })) : r.push(new THREE.MeshLambertMaterial({shading: THREE.FlatShading, overdraw: !0}));
    f = new THREE.CubeGeometry(this.bounds.width, this.bounds.height, this.depth, 1, 1, 1, r), this.cube = new THREE.Mesh(f, new THREE.MeshFaceMaterial), this.cube.position.x = this.origin_x = -this.view.width / 2 + this.bounds.x + this.bounds.width / 2, this.cube.position.y = this.origin_y = this.view.height / 2 - this.bounds.y - this.bounds.height / 2, this.cube.position.z = this.origin_z = -this.depth >> 1, this.scene.add(this.cube)
},Aroma.ThreeCubePiece.prototype.dispose = function () {
    this.scene.remove(this.cube), this.cube = null, this.scene = null, this.proxy = null
},Aroma.ThreeCubePiece.prototype.proxyUpdate = function () {
    this.piece.cube.position.x = this.x + this.piece.origin_x, this.piece.cube.position.y = -this.y + this.piece.origin_y, this.piece.cube.position.z = this.z + this.piece.origin_z, this.piece.cube.rotation.x = this.rotationX * Math.PI / 180, this.piece.cube.rotation.y = -this.rotationY * Math.PI / 180, this.piece.cube.rotation.z = -this.rotationZ * Math.PI / 180
};