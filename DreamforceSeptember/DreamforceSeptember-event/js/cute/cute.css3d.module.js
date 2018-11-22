var Sprite3D = Sprite3D || {
        isSupported: function () {
            return this._isInit || this._init(), this._isSupported
        },
        stage: function (n) {
            this._isInit || this._init();
            var i, t;
            return n ? (i = n, t = n.style, t.position === "static" && (t.position = "relative")) : (i = document.createElement("div"), t = i.style, t.position = "absolute", t.margin = "0px", t.padding = "0px"), t[this._browserPrefix + "Perspective"] = "800px", t[this._browserPrefix + "Transform"] = "translateZ(0px)", t[this._browserPrefix + "TransformStyle"] = "preserve-3d", this.create(i)
        },
        create: function (n) {
            if (this._isInit || this._init(), arguments.length === 0) n = document.createElement("div"), n.style.margin = "0px", n.style.padding = "0px", n.style.position = "absolute"; else if (typeof n == "string") {
                var t = n;
                n = document.createElement("div"), n.style.margin = "0px", n.style.padding = "0px", n.style.position = "absolute", this._handleStringArgument(n, t)
            } else n.style.position == "static" && (n.style.position = "relative");
            n.style[this._browserPrefix + "TransformStyle"] = "preserve-3d", n.style[this._transformProperty] = "translateZ(0px)", n.style[this._browserPrefix + "BackfaceVisibility"] = "hidden";
            for (prop in this._props)this._props.hasOwnProperty(prop) && (n[prop] = this._props[prop]);
            return n._string = ["translate3d(", 0, "px,", 0, "px,", 0, "px) ", "rotateX(", 0, "deg) ", "rotateY(", 0, "deg) ", "rotateZ(", 0, "deg) ", "scale3d(", 1, ", ", 1, ", ", 1, ") "], n._positions = [1, 3, 5, 8, 11, 14, 17, 19, 21], n._ox = 0, n._oy = 0, n._oz = 0, n
        },
        box: function (n, t, i, r) {
            var u;
            this._isInit || this._init(), u = this.create(), arguments.length === 1 ? (t = n, i = n) : arguments.length === 2 && typeof arguments[1] == "string" ? (this._handleStringArgument(u, arguments[1]), t = n, i = n) : r && typeof r == "string" && this._handleStringArgument(u, r);
            var f = n * .5, e = t * .5, o = i * .5;
            return u.appendChild(Sprite3D.create(".front").position(-f, -e, o).size(n, t).update()), u.appendChild(Sprite3D.create(".back").position(-f, -e, -o).size(n, t).rotationY(180).update()), u.appendChild(Sprite3D.create(".left").position(-f - o, -e, 0).size(i, t).rotationY(-90).update()), u.appendChild(Sprite3D.create(".right").position(f - o, -e, 0).size(i, t).rotationY(90).update()), u.appendChild(Sprite3D.create(".bottom").position(-f, e - o, 0).size(n, i).rotationX(-90).update()), u.appendChild(Sprite3D.create(".top").position(-f, -e - o, 0).size(n, i).rotationX(90).update()), u
        },
        prefix: function (n) {
            return Sprite3D._browserPrefix + n
        },
        _isInit: !1,
        _isSupported: !1,
        _browserPrefix: "webkit",
        _transformProperty: "webkitTransform",
        _init: function () {
            var i = document.createElement("div"), t = ["", "webkit", "Moz", "O", "ms"], r = t.length, n;
            for (Sprite3D._isInit = !0, n = 0; n < r; n++)if (t[n] + "Perspective" in i.style)return Sprite3D._transformProperty = t[n] + "Transform", Sprite3D._isSupported = !0, Sprite3D._browserPrefix = t[n], n == 2 && (Sprite3D._props.update = Sprite3D._props.updateJoin), !0;
            return !1
        },
        _handleStringArgument: function (n, t) {
            switch (t[0]) {
                case".":
                    n.className = t.substr(1);
                    break;
                case"#":
                    n.id = t.substr(1);
                    break;
                default:
                    n.id = t
            }
        },
        _props: {
            x: function (n) {
                return arguments.length ? (this._string[this._positions[0]] = n - this._ox, this) : this._string[this._positions[0]] + this._ox
            }, y: function (n) {
                return arguments.length ? (this._string[this._positions[1]] = n - this._oy, this) : this._string[this._positions[1]] + this._oy
            }, z: function (n) {
                return arguments.length ? (this._string[this._positions[2]] = n - this._oz, this) : this._string[this._positions[2]] + this._oz
            }, position: function (n, t, i) {
                return this._string[this._positions[0]] = n - this._ox, this._string[this._positions[1]] = t - this._oy, arguments.length >= 3 && (this._string[this._positions[2]] = i - this._oz), this
            }, move: function (n, t, i) {
                return this._string[this._positions[0]] += n, this._string[this._positions[1]] += t, arguments.length >= 3 && (this._string[this._positions[2]] += i), this
            }, rotationX: function (n) {
                return arguments.length ? (this._string[this._positions[3]] = n, this) : this._string[this._positions[3]]
            }, rotationY: function (n) {
                return arguments.length ? (this._string[this._positions[4]] = n, this) : this._string[this._positions[4]]
            }, rotationZ: function (n) {
                return arguments.length ? (this._string[this._positions[5]] = n, this) : this._string[this._positions[5]]
            }, rotation: function (n, t, i) {
                return this._string[this._positions[3]] = n, this._string[this._positions[4]] = t, this._string[this._positions[5]] = i, this
            }, rotate: function (n, t, i) {
                return this._string[this._positions[3]] += n, this._string[this._positions[4]] += t, this._string[this._positions[5]] += i, this
            }, scaleX: function (n) {
                return arguments.length ? (this._string[this._positions[6]] = n, this) : this._string[this._positions[6]]
            }, scaleY: function (n) {
                return arguments.length ? (this._string[this._positions[7]] = n, this) : this._string[this._positions[7]]
            }, scaleZ: function (n) {
                return arguments.length ? (this._string[this._positions[8]] = n, this) : this._string[this._positions[8]]
            }, scale: function (n, t, i) {
                switch (arguments.length) {
                    case 0:
                        return this._string[this._positions[6]];
                    case 1:
                        return this._string[this._positions[6]] = n, this._string[this._positions[7]] = n, this._string[this._positions[8]] = n, this;
                    case 2:
                        return this._string[this._positions[6]] = n, this._string[this._positions[7]] = t, this;
                    case 3:
                        return this._string[this._positions[6]] = n, this._string[this._positions[7]] = t, this._string[this._positions[8]] = i, this
                }
                return this
            }, origin: function (n, t, i) {
                if (typeof n == "string") {
                    var r = window.getComputedStyle(this, null);
                    console.log(r), console.log("w:" + r.getPropertyValue("width") + " || h: " + r.height)
                } else arguments.length < 3 && (i = 0), this._string[this._positions[0]] += this._ox - n, this._string[this._positions[1]] += this._oy - t, this._string[this._positions[2]] += this._oz - i, this._ox = n, this._oy = t, this._oz = i;
                return this
            }, transformOrigin: function (n, t) {
                return this.style[Sprite3D._browserPrefix + "TransformOrigin"] = (Number(n) ? n + "px" : n) + " " + (Number(t) ? t + "px" : t), this
            }, transformString: function (n) {
                var f = n.toLowerCase().split(" "), e = f.length, u = 0, r = [], i = [0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0;
                for (u; u < e; u++)switch (f[u]) {
                    case"p":
                    case"position":
                    case"translate":
                        t = r.push("translate3d(", this._string[this._positions[0]], "px,", this._string[this._positions[1]], "px,", this._string[this._positions[2]], "px) "), i[0] = t - 6, i[1] = t - 4, i[2] = t - 2;
                        break;
                    case"rx":
                    case"rotatex":
                    case"rotationx":
                        t = r.push("rotateX(", this._string[this._positions[3]], "deg) "), i[3] = t - 2;
                        break;
                    case"ry":
                    case"rotatey":
                    case"rotationy":
                        t = r.push("rotateY(", this._string[this._positions[4]], "deg) "), i[4] = t - 2;
                        break;
                    case"rz":
                    case"rotatez":
                    case"rotationz":
                        t = r.push("rotateZ(", this._string[this._positions[5]], "deg) "), i[5] = t - 2;
                        break;
                    case"s":
                    case"scale":
                        t = r.push("scale3d(", this._string[this._positions[6]], ",", this._string[this._positions[7]], ",", this._string[this._positions[8]], ") "), i[6] = t - 6, i[7] = t - 4, i[8] = t - 2
                }
                return this._string = r, this._positions = i, this
            }, updateJoin: function () {
                return this.style[Sprite3D._transformProperty] = this._string.join(""), this
            }, update: function () {
                var n = "";
                return this._string.every(function (t) {
                    return n += t, !0
                }), this.style[Sprite3D._transformProperty] = n, this
            }, perspective: function (n) {
                switch (arguments.length) {
                    case 0:
                        return this.style[Sprite3D._browserPrefix + "Perspective"];
                    case 1:
                        return this.style[Sprite3D._browserPrefix + "Perspective"] = typeof n == "string" ? n : n + "px", this
                }
            }, css: function (n, t) {
                switch (arguments.length) {
                    case 0:
                        return this.style;
                    case 1:
                        return this.style[n];
                    case 2:
                        return this.style[n] = t, this;
                    case 3:
                        return this.style[Sprite3D._browserPrefix + n] = t, this
                }
            }, html: function (n) {
                return arguments.length ? (this.innerHTML = n, this) : this.innerHTML
            }, size: function (n, t) {
                return this.style.width = Number(n) ? n + "px" : n, this.style.height = Number(t) ? t + "px" : t, this
            }, bind: function (n) {
                if (typeof n == "object")for (var t in n)this.addEventListener(t, n[t], !1); else arguments.length === 2 && this.addEventListener(arguments[0], arguments[1], !1);
                return this
            }, unbind: function (n) {
                if (typeof n == "object")for (var t in n)this.removeEventListener(t, n[t], !1); else arguments.length === 2 && this.removeEventListener(arguments[0], arguments[1], !1);
                return this
            }, tileWidth: 0, tileHeight: 0, tileSize: function (n, t) {
                return this.tileWidth = n, this.tileHeight = t, this
            }, tilePosition: function (n, t) {
                return this.style.backgroundPosition = "-" + n * this.tileWidth + "px -" + t * this.tileHeight + "px", this
            }, set: function (n, t) {
                return this[n] = t, this
            }
        }
    };
Aroma.Vector3D = function (n, t, i) {
    this.x = n, this.y = t, this.z = i
}, Aroma.Vector3D.prototype.toString = function () {
    return String("[" + this.x + " ," + this.y + " ," + this.z + "]")
}, Aroma.Vector3D.dotProduct = function (n, t) {
    return n.x * t.x + n.y * t.y + n.z * t.z
}, Aroma.Vector3D.rotate = function (n, t, i, r) {
    return n = Aroma.Vector3D.rotateAxis(n, "x", t), n = Aroma.Vector3D.rotateAxis(n, "y", i), Aroma.Vector3D.rotateAxis(n, "z", r)
}, Aroma.Vector3D.rotateAxis = function (n, t, i) {
    i = i * Math.PI / 180;
    var r = Math.cos(i), u = Math.sin(i);
    switch (t) {
        case"x":
            return new Aroma.Vector3D(n.x, n.y * r - n.z * u, n.y * u + n.z * r);
        case"y":
            return new Aroma.Vector3D(n.z * u + n.x * r, n.y, n.z * r - n.x * u);
        case"z":
            return new Aroma.Vector3D(n.x * r - n.y * u, n.x * u + n.y * r, n.z)
    }
}, Aroma.CSS3DView = function (n, t) {
    Aroma.AbstractView.call(this, n, t), this.viewport = document.createElement("div"), this.viewport.style.overflow = "hidden", this.sort = !0, this.stage = Sprite3D.stage(), this.stage.className = "css3d-stage", this.alignstage = function () {
        this.stage.style.position = "relative", this.stage.style.left = (this.vpWidth - this.width) / 2 + "px", this.stage.style.top = (this.vpHeight - this.height) / 2 + "px"
    }
}, Aroma.CSS3DView.prototype = new Aroma.AbstractView, Aroma.CSS3DView.prototype.constructor = Aroma.CSS3DView, Aroma.CSS3DView.prototype.setup = function () {
    this.stage.perspective(1500), this.stage.style[Sprite3D._browserPrefix + "PerspectiveOrigin"] = "50% 50%", this.stage.style[Sprite3D._browserPrefix + "Transform"] = "translateZ(0px) rotateY(0.1deg)", this.stage.style[Sprite3D._browserPrefix + "TransformStyle"] = "", this.viewport.appendChild(this.stage)
}, Aroma.CSS3DView.prototype.setSize = function (n, t) {
    Aroma.AbstractView.prototype.setSize.call(this, n, t), this.stage.style.width = n + "px", this.stage.style.height = t + "px", this.alignstage()
}, Aroma.CSS3DView.prototype.setViewPortSize = function (n, t) {
    this.vpWidth = n, this.vpHeight = t, this.viewport.style.width = n + "px", this.viewport.style.height = t + "px", this.alignstage()
}, Aroma.CSS3DView.prototype.dispose = function () {
    this.stage.setAttribute("style", ""), Aroma.AbstractView.prototype.dispose.call(this)
}, Aroma.CSS3DView.prototype.getPieceAt = function (n, t, i) {
    var u = this.posToID(n, t), r, f;
    return this._pieceList[u] != null ? this._pieceList[u] : (r = new Aroma.CSS3DCube, f = this.getPieceBounds(n, t), r.col = n, r.row = t, r.bounds = f, r.view = this, r.stage = this.stage, i.piece = r, ConcatObject.concat(r.options, i.getPieceOptions()), r.setup(this.newSource, this.oldSource), this.stage.appendChild(r.cube_cont), this._pieceList[u] = r, r)
}, Aroma.CSS3DView.prototype.sortParts = function () {
    Aroma.AbstractView.prototype.sortParts.call(this);
    for (var n = 0, t = this._pieceList.length; n < t; ++n)this._pieceList[n].cube_cont.style.zIndex = n
}, Aroma.CSS3DCube = function () {
    Aroma.Piece.call(this), this.proxy = null, this.cube = null, this.stage = null, this.depth = 0, this.options = {
        flipX: !1,
        flipY: !1,
        sideColor: 11184810,
        newImageLocation: 1,
        depth: 800
    }, this.side_dic = {right: 3, front: 0, left: 2, back: 1, top: 5, bottom: 4}, this.getImage = function (n, t, i) {
        var r = new Image;
        return r.src = n.src, r.style.width = this.view.width + "px", r.style.height = this.view.height + "px", r.style.position = "relative", r.style.left = -this.bounds.x + "px", r.style.top = -this.bounds.y + "px", t && (r.style[Sprite3D._browserPrefix + "Transform"] += " rotateX(180deg)", r.style.left = -this.view.width + (this.bounds.x + this.bounds.width) + "px"), i && (r.style[Sprite3D._browserPrefix + "Transform"] += " rotateY(180deg)", r.style.top = -this.view.height + (this.bounds.y + this.bounds.height) + "px"), r
    }
}, Aroma.CSS3DCube.normals = [new Aroma.Vector3D(0, 0, 1), new Aroma.Vector3D(0, 0, -1), new Aroma.Vector3D(-1, 0, 0), new Aroma.Vector3D(1, 0, 0), new Aroma.Vector3D(0, 1, 0), new Aroma.Vector3D(0, -1, 0)], Aroma.CSS3DCube.prototype = new Aroma.Piece, Aroma.CSS3DCube.prototype.constructor = Aroma.CSS3DCube, Aroma.CSS3DCube.light = !0, Aroma.CSS3DCube.prototype.setup = function (n, t) {
    this.proxy = {
        x: 0,
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        piece: this
    }, this.newSource = n, this.oldSource = t, this.depth = this.options.depth, this.bounds.width = this.bounds.width, this.bounds.height = this.bounds.height, this.bounds.x = this.bounds.x, this.bounds.y = this.bounds.y, this.cube = Sprite3D.box(this.bounds.width, this.bounds.height, this.depth), this.sides = this.cube.children;
    for (var i = 0; i < 6; ++i)i == 0 ? (this.sides[0].style.overflow = "hidden", this.sides[0].appendChild(this.getImage(this.oldSource))) : i == this.options.newImageLocation ? (this.sides[i].style.overflow = "hidden", this.sides[i].appendChild(this.getImage(this.newSource, this.options.flipX, this.options.flipY))) : this.sides[i].style.backgroundColor = "#" + this.options.sideColor.toString(16);
    this.origin_x = this.bounds.x + this.bounds.width / 2, this.origin_y = this.bounds.y + this.bounds.height / 2, this.origin_z = -this.depth >> 1, this.cube.z(this.origin_z), this.cube.update(), this.cube_cont = document.createElement("div"), this.cube_cont.className = "cute-cubebox", this.cube_cont.style.position = "absolute", this.cube_cont.style[Sprite3D._browserPrefix + "Transform"] = "rotateY(0.1deg)", this.cube_cont.style[Sprite3D._browserPrefix + "TransformStyle"] = "preserve-3d", this.cube_cont.appendChild(this.cube), this.cube_cont.style.left = this.origin_x + "px", this.cube_cont.style.top = this.origin_y + "px"
}, Aroma.CSS3DCube.prototype.dispose = function () {
    this.stage.removeChild(this.cube_cont), this.cube.html(""), this.cube = null, this.stage = null, this.scene = null, this.proxy = null
}, Aroma.CSS3DCube.prototype.proxyUpdate = function () {
    var n;
    if (this.piece.cube.x(this.x), this.piece.cube.y(this.y), this.piece.cube.z(this.z + this.piece.origin_z), this.piece.cube.rotationX(-this.rotationX), this.piece.cube.rotationY(-this.rotationY), this.piece.cube.rotationZ(-this.rotationZ), this.piece.cube.update(), Aroma.CSS3DCube.light)for (n = 1; n < 6; ++n)if (n != this.piece.options.newImageLocation) {
        var r = Aroma.Vector3D.rotate(Aroma.CSS3DCube.normals[n], -this.rotationX, -this.rotationY, -this.rotationZ),
            t = Aroma.Vector3D.dotProduct(r, Aroma.CSS3DCube.normals[0]) * 50, i = this.piece.options.sideColor;
        t < 0 && (t = 0), this.piece.cube.children[n].style.backgroundColor = "rgb(" + parseInt((i & 255) + t) + "," + parseInt((i >> 8 & 255) + t) + "," + parseInt((i >> 16 & 255) + t) + ")", r = null
    }
};