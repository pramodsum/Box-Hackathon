/*!
 * @license PreloadJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2013 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
;
this.createjs = this.createjs || {},
    function() {
        $('#gameOverModal').modal({ show: false});
        var a = createjs.PreloadJS = createjs.PreloadJS || {};
        a.version = "NEXT", a.buildDate = "Thu, 12 Dec 2013 23:37:07 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function(a, b, c) {
                this.initialize(a, b, c)
            },
            b = a.prototype;
        b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function(a, b, c) {
            this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = (new Date).getTime()
        }, b.preventDefault = function() {
            this.defaultPrevented = !0
        }, b.stopPropagation = function() {
            this.propagationStopped = !0
        }, b.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, b.remove = function() {
            this.removed = !0
        }, b.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, b.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function() {},
            b = a.prototype;
        a.initialize = function(a) {
            a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
        }, b._listeners = null, b._captureListeners = null, b.initialize = function() {}, b.addEventListener = function(a, b, c) {
            var d;
            d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var e = d[a];
            return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
        }, b.on = function(a, b, c, d, e, f) {
            return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
                b.call(c, a, e), d && a.remove()
            }, f)
        }, b.removeEventListener = function(a, b, c) {
            var d = c ? this._captureListeners : this._listeners;
            if (d) {
                var e = d[a];
                if (e) {
                    for (var f = 0, g = e.length; g > f; f++) {
                        if (e[f] == b) {
                            1 == g ? delete d[a] : e.splice(f, 1);
                            break
                        }
                    }
                }
            }
        }, b.off = b.removeEventListener, b.removeAllEventListeners = function(a) {
            a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
        }, b.dispatchEvent = function(a, b) {
            if ("string" == typeof a) {
                var c = this._listeners;
                if (!c || !c[a]) {
                    return !1
                }
                a = new createjs.Event(a)
            }
            if (a.target = b || this, a.bubbles && this.parent) {
                for (var d = this, e = [d]; d.parent;) {
                    e.push(d = d.parent)
                }
                var f, g = e.length;
                for (f = g - 1; f >= 0 && !a.propagationStopped; f--) {
                    e[f]._dispatchEvent(a, 1 + (0 == f))
                }
                for (f = 1; g > f && !a.propagationStopped; f++) {
                    e[f]._dispatchEvent(a, 3)
                }
            } else {
                this._dispatchEvent(a, 2)
            }
            return a.defaultPrevented
        }, b.hasEventListener = function(a) {
            var b = this._listeners,
                c = this._captureListeners;
            return !!(b && b[a] || c && c[a])
        }, b.willTrigger = function(a) {
            for (var b = this; b;) {
                if (b.hasEventListener(a)) {
                    return !0
                }
                b = b.parent
            }
            return !1
        }, b.toString = function() {
            return "[EventDispatcher]"
        }, b._dispatchEvent = function(a, b) {
            var c, d = 1 == b ? this._captureListeners : this._listeners;
            if (a && d) {
                var e = d[a.type];
                if (!e || !(c = e.length)) {
                    return
                }
                a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();
                for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
                    var g = e[f];
                    g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1)
                }
            }
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        createjs.indexOf = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (b === a[c]) {
                    return c
                }
            }
            return -1
        }
    }(), this.createjs = this.createjs || {},
    function() {
        createjs.proxy = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function() {
                return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function() {
            this.init()
        };
        a.prototype = new createjs.EventDispatcher;
        var b = a.prototype,
            c = a;
        c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/, b.loaded = !1, b.canceled = !1, b.progress = 0, b._item = null, b.getItem = function() {
            return this._item
        }, b.init = function() {}, b.load = function() {}, b.close = function() {}, b._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, b._sendProgress = function(a) {
            if (!this._isCanceled()) {
                var b = null;
                "number" == typeof a ? (this.progress = a, b = new createjs.Event("progress"), b.loaded = this.progress, b.total = 1) : (b = a, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), b.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(b)
            }
        }, b._sendComplete = function() {
            this._isCanceled() || this.dispatchEvent("complete")
        }, b._sendError = function(a) {
            !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.Event("error")), this.dispatchEvent(a))
        }, b._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, b._parseURI = function(a) {
            return a ? a.match(c.FILE_PATTERN) : null
        }, b._parsePath = function(a) {
            return a ? a.match(c.PATH_PATTERN) : null
        }, b._formatQueryString = function(a, b) {
            if (null == a) {
                throw new Error("You must specify data.")
            }
            var c = [];
            for (var d in a) {
                c.push(d + "=" + escape(a[d]))
            }
            return b && (c = c.concat(b)), c.join("&")
        }, b.buildPath = function(a, b) {
            if (null == b) {
                return a
            }
            var c = [],
                d = a.indexOf("?");
            if (-1 != d) {
                var e = a.slice(d + 1);
                c = c.concat(e.split("&"))
            }
            return -1 != d ? a.slice(0, d) + "?" + this._formatQueryString(b, c) : a + "?" + this._formatQueryString(b, c)
        }, b._isCrossDomain = function(a) {
            var b = document.createElement("a");
            b.href = a.src;
            var c = document.createElement("a");
            c.href = location.href;
            var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
            return d
        }, b._isLocal = function(a) {
            var b = document.createElement("a");
            return b.href = a.src, "" == b.hostname && "file:" == b.protocol
        }, b.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function(a, b, c) {
                this.init(a, b, c)
            },
            b = a.prototype = new createjs.AbstractLoader,
            c = a;
        c.loadTimeout = 8000, c.LOAD_TIMEOUT = 0, c.BINARY = "binary", c.CSS = "css", c.IMAGE = "image", c.JAVASCRIPT = "javascript", c.JSON = "json", c.JSONP = "jsonp", c.MANIFEST = "manifest", c.SOUND = "sound", c.SVG = "svg", c.TEXT = "text", c.XML = "xml", c.POST = "POST", c.GET = "GET", b._basePath = null, b._crossOrigin = "", b.useXHR = !0, b.stopOnError = !1, b.maintainScriptOrder = !0, b.next = null, b._typeCallbacks = null, b._extensionCallbacks = null, b._loadStartWasDispatched = !1, b._maxConnections = 1, b._currentlyLoadingScript = null, b._currentLoads = null, b._loadQueue = null, b._loadQueueBackup = null, b._loadItemsById = null, b._loadItemsBySrc = null, b._loadedResults = null, b._loadedRawResults = null, b._numItems = 0, b._numItemsLoaded = 0, b._scriptOrder = null, b._loadedScripts = null, b.init = function(a, b, c) {
            this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = b, this.setUseXHR(a), this._crossOrigin = c === !0 ? "Anonymous" : c === !1 || null == c ? "" : c
        }, b.setUseXHR = function(a) {
            return this.useXHR = 0 != a && null != window.XMLHttpRequest, this.useXHR
        }, b.removeAll = function() {
            this.remove()
        }, b.remove = function(a) {
            var b = null;
            if (!a || a instanceof Array) {
                if (a) {
                    b = a
                } else {
                    if (arguments.length > 0) {
                        return
                    }
                }
            } else {
                b = [a]
            }
            var c = !1;
            if (b) {
                for (; b.length;) {
                    var d = b.pop(),
                        e = this.getResult(d);
                    for (f = this._loadQueue.length - 1; f >= 0; f--) {
                        if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueue.splice(f, 1)[0].cancel();
                            break
                        }
                    }
                    for (f = this._loadQueueBackup.length - 1; f >= 0; f--) {
                        if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
                            this._loadQueueBackup.splice(f, 1)[0].cancel();
                            break
                        }
                    }
                    if (e) {
                        delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src], this._disposeItem(e)
                    } else {
                        for (var f = this._currentLoads.length - 1; f >= 0; f--) {
                            var g = this._currentLoads[f].getItem();
                            if (g.id == d || g.src == d) {
                                this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
                                break
                            }
                        }
                    }
                }
                c && this._loadNext()
            } else {
                this.close();
                for (var h in this._loadItemsById) {
                    this._disposeItem(this._loadItemsById[h])
                }
                this.init(this.useXHR)
            }
        }, b.reset = function() {
            this.close();
            for (var a in this._loadItemsById) {
                this._disposeItem(this._loadItemsById[a])
            }
            for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) {
                b.push(this._loadQueueBackup[c].getItem())
            }
            this.loadManifest(b, !1)
        }, c.isBinary = function(a) {
            switch (a) {
                case createjs.LoadQueue.IMAGE:
                case createjs.LoadQueue.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, c.isText = function(a) {
            switch (a) {
                case createjs.LoadQueue.TEXT:
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.HTML:
                case createjs.LoadQueue.CSS:
                case createjs.LoadQueue.SVG:
                case createjs.LoadQueue.JAVASCRIPT:
                    return !0;
                default:
                    return !1
            }
        }, b.installPlugin = function(a) {
            if (null != a && null != a.getPreloadHandlers) {
                var b = a.getPreloadHandlers();
                if (b.scope = a, null != b.types) {
                    for (var c = 0, d = b.types.length; d > c; c++) {
                        this._typeCallbacks[b.types[c]] = b
                    }
                }
                if (null != b.extensions) {
                    for (c = 0, d = b.extensions.length; d > c; c++) {
                        this._extensionCallbacks[b.extensions[c]] = b
                    }
                }
            }
        }, b.setMaxConnections = function(a) {
            this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, b.loadFile = function(a, b, c) {
            if (null == a) {
                var d = new createjs.Event("error");
                return d.text = "PRELOAD_NO_FILE", this._sendError(d), void 0
            }
            this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.loadManifest = function(a, b, d) {
            var e = null,
                f = null;
            if (a instanceof Array) {
                if (0 == a.length) {
                    var g = new createjs.Event("error");
                    return g.text = "PRELOAD_MANIFEST_EMPTY", this._sendError(g), void 0
                }
                e = a
            } else {
                if ("string" == typeof a) {
                    e = [{
                        src: a,
                        type: c.MANIFEST
                    }]
                } else {
                    if ("object" != typeof a) {
                        var g = new createjs.Event("error");
                        return g.text = "PRELOAD_MANIFEST_NULL", this._sendError(g), void 0
                    }
                    if (void 0 !== a.src) {
                        if (null == a.type) {
                            a.type = c.MANIFEST
                        } else {
                            if (a.type != c.MANIFEST) {
                                var g = new createjs.Event("error");
                                g.text = "PRELOAD_MANIFEST_ERROR", this._sendError(g)
                            }
                        }
                        e = [a]
                    } else {
                        void 0 !== a.manifest && (e = a.manifest, f = a.path)
                    }
                }
            }
            for (var h = 0, i = e.length; i > h; h++) {
                this._addItem(e[h], f, d)
            }
            b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
        }, b.load = function() {
            this.setPaused(!1)
        }, b.getItem = function(a) {
            return this._loadItemsById[a] || this._loadItemsBySrc[a]
        }, b.getResult = function(a, b) {
            var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
            if (null == c) {
                return null
            }
            var d = c.id;
            return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
        }, b.setPaused = function(a) {
            this._paused = a, this._paused || this._loadNext()
        }, b.close = function() {
            for (; this._currentLoads.length;) {
                this._currentLoads.pop().cancel()
            }
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
        }, b._addItem = function(a, b, c) {
            var d = this._createLoadItem(a, b, c);
            if (null != d) {
                var e = this._createLoader(d);
                null != e && (this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT && e instanceof createjs.XHRLoader && (this._scriptOrder.push(d), this._loadedScripts.push(null)))
            }
        }, b._createLoadItem = function(a, b, c) {
            var d = null;
            switch (typeof a) {
                case "string":
                    d = {
                        src: a
                    };
                    break;
                case "object":
                    d = window.HTMLAudioElement && a instanceof window.HTMLAudioElement ? {
                        tag: a,
                        src: d.tag.src,
                        type: createjs.LoadQueue.SOUND
                    } : a;
                    break;
                default:
                    return null
            }
            var e = this._parseURI(d.src);
            null != e && (d.ext = e[6]), null == d.type && (d.type = this._getTypeByExtension(d.ext));
            var f = "",
                g = c || this._basePath,
                h = d.src;
            if (e && null == e[1] && null == e[3]) {
                if (b) {
                    f = b;
                    var i = this._parsePath(b);
                    h = b + h, null != g && i && null == i[1] && null == i[2] && (f = g + f)
                } else {
                    null != g && (f = g)
                }
            }
            if (d.src = f + d.src, d.path = f, (d.type == createjs.LoadQueue.JSON || d.type == createjs.LoadQueue.MANIFEST) && (d._loadAsJSONP = null != d.callback), d.type == createjs.LoadQueue.JSONP && null == d.callback) {
                throw new Error("callback is required for loading JSONP requests.")
            }(void 0 === d.tag || null === d.tag) && (d.tag = this._createTag(d)), (void 0 === d.id || null === d.id || "" === d.id) && (d.id = h);
            var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
            if (j) {
                var k = j.callback.call(j.scope, d.src, d.type, d.id, d.data, f, this);
                if (k === !1) {
                    return null
                }
                k === !0 || (null != k.src && (d.src = k.src), null != k.id && (d.id = k.id), null != k.tag && (d.tag = k.tag), null != k.completeHandler && (d.completeHandler = k.completeHandler), k.type && (d.type = k.type), e = this._parseURI(d.src), null != e && null != e[6] && (d.ext = e[6].toLowerCase()))
            }
            return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, d
        }, b._createLoader = function(a) {
            var b = this.useXHR;
            switch (a.type) {
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                    b = !a._loadAsJSONP;
                    break;
                case createjs.LoadQueue.XML:
                case createjs.LoadQueue.TEXT:
                    b = !0;
                    break;
                case createjs.LoadQueue.SOUND:
                case createjs.LoadQueue.JSONP:
                    b = !1;
                    break;
                case null:
                    return null
            }
            return b ? new createjs.XHRLoader(a, this._crossOrigin) : new createjs.TagLoader(a)
        }, b._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
                    var b = this._loadQueue[a];
                    if (this.maintainScriptOrder && b instanceof createjs.TagLoader && b.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
                        if (this._currentlyLoadingScript) {
                            continue
                        }
                        this._currentlyLoadingScript = !0
                    }
                    this._loadQueue.splice(a, 1), a--, this._loadItem(b)
                }
            }
        }, b._loadItem = function(a) {
            a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
        }, b._handleFileError = function(a) {
            var b = a.target;
            this._numItemsLoaded++, this._updateProgress();
            var c = new createjs.Event("error");
            c.text = "FILE_LOAD_ERROR", c.item = b.getItem(), this._sendError(c), this.stopOnError || (this._removeLoadItem(b), this._loadNext())
        }, b._handleFileComplete = function(a) {
            var b = a.target,
                c = b.getItem();
            if (this._loadedResults[c.id] = b.getResult(), b instanceof createjs.XHRLoader && (this._loadedRawResults[c.id] = b.getResult(!0)), this._removeLoadItem(b), this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT) {
                if (!(b instanceof createjs.TagLoader)) {
                    return this._loadedScripts[createjs.indexOf(this._scriptOrder, c)] = c, this._checkScriptLoadOrder(b), void 0
                }
                this._currentlyLoadingScript = !1
            }
            if (delete c._loadAsJSONP, c.type == createjs.LoadQueue.MANIFEST) {
                var d = b.getResult();
                null != d && void 0 !== d.manifest && this.loadManifest(d, !0)
            }
            this._processFinishedLoad(c, b)
        }, b._processFinishedLoad = function(a, b) {
            this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
        }, b._checkScriptLoadOrder = function() {
            for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
                var c = this._loadedScripts[b];
                if (null === c) {
                    break
                }
                if (c !== !0) {
                    var d = this._loadedResults[c.id];
                    (document.body || document.getElementsByTagName("body")[0]).appendChild(d), this._processFinishedLoad(c), this._loadedScripts[b] = !0
                }
            }
        }, b._removeLoadItem = function(a) {
            for (var b = this._currentLoads.length, c = 0; b > c; c++) {
                if (this._currentLoads[c] == a) {
                    this._currentLoads.splice(c, 1);
                    break
                }
            }
        }, b._handleProgress = function(a) {
            var b = a.target;
            this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
        }, b._updateProgress = function() {
            var a = this._numItemsLoaded / this._numItems,
                b = this._numItems - this._numItemsLoaded;
            if (b > 0) {
                for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) {
                    c += this._currentLoads[d].progress
                }
                a += c / b * (b / this._numItems)
            }
            this._sendProgress(a)
        }, b._disposeItem = function(a) {
            delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
        }, b._createTag = function(a) {
            var b = null;
            switch (a.type) {
                case createjs.LoadQueue.IMAGE:
                    return b = document.createElement("img"), "" == this._crossOrigin || this._isLocal(a) || (b.crossOrigin = this._crossOrigin), b;
                case createjs.LoadQueue.SOUND:
                    return b = document.createElement("audio"), b.autoplay = !1, b;
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.JSONP:
                case createjs.LoadQueue.JAVASCRIPT:
                case createjs.LoadQueue.MANIFEST:
                    return b = document.createElement("script"), b.type = "text/javascript", b;
                case createjs.LoadQueue.CSS:
                    return b = this.useXHR ? document.createElement("style") : document.createElement("link"), b.rel = "stylesheet", b.type = "text/css", b;
                case createjs.LoadQueue.SVG:
                    return this.useXHR ? b = document.createElement("svg") : (b = document.createElement("object"), b.type = "image/svg+xml"), b
            }
            return null
        }, b._getTypeByExtension = function(a) {
            if (null == a) {
                return createjs.LoadQueue.TEXT
            }
            switch (a.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.LoadQueue.IMAGE;
                case "ogg":
                case "mp3":
                case "wav":
                    return createjs.LoadQueue.SOUND;
                case "json":
                    return createjs.LoadQueue.JSON;
                case "xml":
                    return createjs.LoadQueue.XML;
                case "css":
                    return createjs.LoadQueue.CSS;
                case "js":
                    return createjs.LoadQueue.JAVASCRIPT;
                case "svg":
                    return createjs.LoadQueue.SVG;
                default:
                    return createjs.LoadQueue.TEXT
            }
        }, b._sendFileProgress = function(a, b) {
            if (this._isCanceled()) {
                return this._cleanUp(), void 0
            }
            if (this.hasEventListener("fileprogress")) {
                var c = new createjs.Event("fileprogress");
                c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
            }
        }, b._sendFileComplete = function(a, b) {
            if (!this._isCanceled()) {
                var c = new createjs.Event("fileload");
                c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
            }
        }, b._sendFileStart = function(a) {
            var b = new createjs.Event("filestart");
            b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
        }, b.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = a;
        var d = function() {};
        d.init = function() {
            var a = navigator.userAgent;
            d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1
        }, d.init(), createjs.LoadQueue.BrowserDetect = d
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function(a) {
                this.init(a)
            },
            b = a.prototype = new createjs.AbstractLoader;
        b._loadTimeout = null, b._tagCompleteProxy = null, b._isAudio = !1, b._tag = null, b._jsonResult = null, b.init = function(a) {
            this._item = a, this._tag = a.tag, this._isAudio = window.HTMLAudioElement && a.tag instanceof window.HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
        }, b.getResult = function() {
            return this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST ? this._jsonResult : this._tag
        }, b.cancel = function() {
            this.canceled = !0, this._clean()
        }, b.load = function() {
            var a = this._item,
                b = this._tag;
            clearTimeout(this._loadTimeout);
            var c = createjs.LoadQueue.LOAD_TIMEOUT;
            0 == c && (c = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), c), this._isAudio && (b.src = null, b.preload = "auto"), b.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (b.onstalled = createjs.proxy(this._handleStalled, this), b.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (b.onload = createjs.proxy(this._handleLoad, this), b.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
            var d = this.buildPath(a.src, a.values);
            switch (a.type) {
                case createjs.LoadQueue.CSS:
                    b.href = d;
                    break;
                case createjs.LoadQueue.SVG:
                    b.data = d;
                    break;
                default:
                    b.src = d
            }
            if (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST) {
                if (null == a.callback) {
                    throw new Error("callback is required for loading JSONP requests.")
                }
                if (null != window[a.callback]) {
                    throw new Error('JSONP callback "' + a.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.')
                }
                window[a.callback] = createjs.proxy(this._handleJSONPLoad, this)
            }(a.type == createjs.LoadQueue.SVG || a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST || a.type == createjs.LoadQueue.JAVASCRIPT || a.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = b.style.visibility, b.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(b)), null != b.load && b.load()
        }, b._handleJSONPLoad = function(a) {
            this._jsonResult = a
        }, b._handleTimeout = function() {
            this._clean();
            var a = new createjs.Event("error");
            a.text = "PRELOAD_TIMEOUT", this._sendError(a)
        }, b._handleStalled = function() {}, b._handleError = function() {
            this._clean();
            var a = new createjs.Event("error");
            this._sendError(a)
        }, b._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var a = this.getItem().tag;
            ("loaded" == a.readyState || "complete" == a.readyState) && this._handleLoad()
        }, b._handleLoad = function() {
            if (!this._isCanceled()) {
                var a = this.getItem(),
                    b = a.tag;
                if (!(this.loaded || this._isAudio && 4 !== b.readyState)) {
                    switch (this.loaded = !0, a.type) {
                        case createjs.LoadQueue.SVG:
                        case createjs.LoadQueue.JSON:
                        case createjs.LoadQueue.JSONP:
                        case createjs.LoadQueue.MANIFEST:
                        case createjs.LoadQueue.CSS:
                            b.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(b)
                    }
                    this._clean(), this._sendComplete()
                }
            }
        }, b._clean = function() {
            clearTimeout(this._loadTimeout);
            var a = this.getItem(),
                b = a.tag;
            null != b && (b.onload = null, b.removeEventListener && b.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), b.onstalled = null, b.onprogress = null, b.onerror = null, null != b.parentNode && a.type == createjs.LoadQueue.SVG && a.type == createjs.LoadQueue.JSON && a.type == createjs.LoadQueue.MANIFEST && a.type == createjs.LoadQueue.CSS && a.type == createjs.LoadQueue.JSONP && b.parentNode.removeChild(b));
            var a = this.getItem();
            (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.MANIFEST) && (window[a.callback] = null)
        }, b.toString = function() {
            return "[PreloadJS TagLoader]"
        }, createjs.TagLoader = a
    }(), this.createjs = this.createjs || {},
    function() {
        var a = function(a, b) {
                this.init(a, b)
            },
            b = a.prototype = new createjs.AbstractLoader;
        b._request = null, b._loadTimeout = null, b._xhrLevel = 1, b._response = null, b._rawResponse = null, b._crossOrigin = "", b.init = function(a, b) {
            this._item = a, this._crossOrigin = b, !this._createXHR(a)
        }, b.getResult = function(a) {
            return a && this._rawResponse ? this._rawResponse : this._response
        }, b.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, b.load = function() {
            if (null == this._request) {
                return this._handleError(), void 0
            }
            if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel) {
                var a = createjs.LoadQueue.LOAD_TIMEOUT;
                if (0 == a) {
                    a = createjs.LoadQueue.loadTimeout
                } else {
                    try {
                        console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")
                    } catch (b) {}
                }
                this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), a)
            }
            this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
            try {
                this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
            } catch (c) {
                var d = new createjs.Event("error");
                d.error = c, this._sendError(d)
            }
        }, b.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, b.getResponseHeader = function(a) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
        }, b._handleProgress = function(a) {
            if (a && !(a.loaded > 0 && 0 == a.total)) {
                var b = new createjs.Event("progress");
                b.loaded = a.loaded, b.total = a.total, this._sendProgress(b)
            }
        }, b._handleLoadStart = function() {
            clearTimeout(this._loadTimeout), this._sendLoadStart()
        }, b._handleAbort = function() {
            this._clean();
            var a = new createjs.Event("error");
            a.text = "XHR_ABORTED", this._sendError(a)
        }, b._handleError = function() {
            this._clean();
            var a = new createjs.Event("error");
            this._sendError(a)
        }, b._handleReadyStateChange = function() {
            4 == this._request.readyState && this._handleLoad()
        }, b._handleLoad = function() {
            if (!this.loaded) {
                if (this.loaded = !0, !this._checkError()) {
                    return this._handleError(), void 0
                }
                this._response = this._getResponse(), this._clean();
                var a = this._generateTag();
                a && this._sendComplete()
            }
        }, b._handleTimeout = function(a) {
            this._clean();
            var b = new createjs.Event("error");
            b.text = "PRELOAD_TIMEOUT", this._sendError(a)
        }, b._checkError = function() {
            var a = parseInt(this._request.status);
            switch (a) {
                case 404:
                case 0:
                    return !1
            }
            return !0
        }, b._getResponse = function() {
            if (null != this._response) {
                return this._response
            }
            if (null != this._request.response) {
                return this._request.response
            }
            try {
                if (null != this._request.responseText) {
                    return this._request.responseText
                }
            } catch (a) {}
            try {
                if (null != this._request.responseXML) {
                    return this._request.responseXML
                }
            } catch (a) {}
            return null
        }, b._createXHR = function(a) {
            var b = this._isCrossDomain(a),
                c = null;
            if (b && window.XDomainRequest) {
                c = new XDomainRequest
            } else {
                if (window.XMLHttpRequest) {
                    c = new XMLHttpRequest
                } else {
                    try {
                        c = new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (d) {
                        try {
                            c = new ActiveXObject("Msxml2.XMLHTTP.3.0")
                        } catch (d) {
                            try {
                                c = new ActiveXObject("Msxml2.XMLHTTP")
                            } catch (d) {
                                return !1
                            }
                        }
                    }
                }
            }
            createjs.LoadQueue.isText(a.type) && c.overrideMimeType && c.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof c.responseType ? 2 : 1;
            var e = null;
            return e = a.method == createjs.LoadQueue.GET ? this.buildPath(a.src, a.values) : a.src, c.open(a.method || createjs.LoadQueue.GET, e, !0), b && c instanceof XMLHttpRequest && 1 == this._xhrLevel && c.setRequestHeader("Origin", location.origin), a.values && a.method == createjs.LoadQueue.POST && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(a.type) && (c.responseType = "arraybuffer"), this._request = c, !0
        }, b._clean = function() {
            clearTimeout(this._loadTimeout);
            var a = this._request;
            a.onloadstart = null, a.onprogress = null, a.onabort = null, a.onerror = null, a.onload = null, a.ontimeout = null, a.onloadend = null, a.onreadystatechange = null
        }, b._generateTag = function() {
            var a = this._item.type,
                b = this._item.tag;
            switch (a) {
                case createjs.LoadQueue.IMAGE:
                    return b.onload = createjs.proxy(this._handleTagReady, this), "" != this._crossOrigin && (b.crossOrigin = "Anonymous"), b.src = this.buildPath(this._item.src, this._item.values), this._rawResponse = this._response, this._response = b, !1;
                case createjs.LoadQueue.JAVASCRIPT:
                    return b = document.createElement("script"), b.text = this._response, this._rawResponse = this._response, this._response = b, !0;
                case createjs.LoadQueue.CSS:
                    var c = document.getElementsByTagName("head")[0];
                    if (c.appendChild(b), b.styleSheet) {
                        b.styleSheet.cssText = this._response
                    } else {
                        var d = document.createTextNode(this._response);
                        b.appendChild(d)
                    }
                    return this._rawResponse = this._response, this._response = b, !0;
                case createjs.LoadQueue.XML:
                    var e = this._parseXML(this._response, "text/xml");
                    return this._rawResponse = this._response, this._response = e, !0;
                case createjs.LoadQueue.SVG:
                    var e = this._parseXML(this._response, "image/svg+xml");
                    return this._rawResponse = this._response, null != e.documentElement ? (b.appendChild(e.documentElement), this._response = b) : this._response = e, !0;
                case createjs.LoadQueue.JSON:
                case createjs.LoadQueue.MANIFEST:
                    var f = {};
                    try {
                        f = JSON.parse(this._response)
                    } catch (g) {
                        f = g
                    }
                    return this._rawResponse = this._response, this._response = f, !0
            }
            return !0
        }, b._parseXML = function(a, b) {
            var c = null;
            try {
                if (window.DOMParser) {
                    var d = new DOMParser;
                    c = d.parseFromString(a, b)
                } else {
                    c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a)
                }
            } catch (e) {}
            return c
        }, b._handleTagReady = function() {
            this._sendComplete()
        }, b.toString = function() {
            return "[PreloadJS XHRLoader]"
        }, createjs.XHRLoader = a
    }(), "object" != typeof JSON && (JSON = {}),
    function() {
        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) {
                        return "null"
                    }
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) {
                            g[c] = str(c, i) || "null"
                        }
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep) {
                        for (f = rep.length, c = 0; f > c; c += 1) {
                            "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e))
                        }
                    } else {
                        for (d in i) {
                            Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e))
                        }
                    }
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c) {
                for (d = 0; c > d; d += 1) {
                    indent += " "
                }
            } else {
                "string" == typeof c && (indent = c)
            } if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": a
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e) {
                    for (c in e) {
                        Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c])
                    }
                }
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        })
    }();
this.ndgmr = this.ndgmr || {};
(function() {
    var collisionCanvas = document.createElement("canvas");
    var collisionCtx = collisionCanvas.getContext("2d");
    collisionCtx.save();
    var collisionCanvas2 = document.createElement("canvas");
    var collisionCtx2 = collisionCanvas2.getContext("2d");
    collisionCtx2.save();
    var cachedBAFrames = [];
    var checkRectCollision = function(bitmap1, bitmap2) {
        var b1, b2;
        b1 = getBounds(bitmap1);
        b2 = getBounds(bitmap2);
        return calculateIntersection(b1, b2)
    };
    ndgmr.checkRectCollision = checkRectCollision;
    var checkPixelCollision = function(bitmap1, bitmap2, alphaThreshold, getRect) {
        if (ndgmr.DEBUG || ndgmr.DEBUG_COLLISION) {
            document.body.appendChild(collisionCanvas);
            document.body.appendChild(collisionCanvas2)
        }
        getRect = getRect || false;
        var areObjectsCloseEnough, intersetion, imageData1, imageData2, pixelIntersection;
        areObjectsCloseEnough = _collisionDistancePrecheck(bitmap1, bitmap2);
        if (!areObjectsCloseEnough) {
            return false
        }
        intersection = checkRectCollision(bitmap1, bitmap2);
        if (!intersection) {
            return false
        }
        alphaThreshold = alphaThreshold || 0;
        alphaThreshold = Math.min(0.99999, alphaThreshold);
        collisionCanvas.width = intersection.width;
        collisionCanvas.height = intersection.height;
        collisionCanvas2.width = intersection.width;
        collisionCanvas2.height = intersection.height;
        imageData1 = _intersectingImagePart(intersection, bitmap1, collisionCtx, 1);
        imageData2 = _intersectingImagePart(intersection, bitmap2, collisionCtx2, 2);
        pixelIntersection = _compareAlphaValues(imageData1, imageData2, intersection.width, intersection.height, alphaThreshold, getRect);
        if (pixelIntersection) {
            pixelIntersection.x += intersection.x;
            pixelIntersection.x2 += intersection.x;
            pixelIntersection.y += intersection.y;
            pixelIntersection.y2 += intersection.y
        } else {
            return false
        }
        return pixelIntersection
    };
    ndgmr.checkPixelCollision = checkPixelCollision;
    var _collisionDistancePrecheck = function(bitmap1, bitmap2) {
        var ir1, ir2, b1, b2;
        b1 = bitmap1.localToGlobal(0, 0);
        b2 = bitmap2.localToGlobal(0, 0);
        ir1 = bitmap1 instanceof createjs.Bitmap ? {
            width: bitmap1.image.width,
            height: bitmap1.image.height
        } : bitmap1.spriteSheet.getFrame(bitmap1.currentFrame).rect;
        ir2 = bitmap2 instanceof createjs.Bitmap ? {
            width: bitmap2.image.width,
            height: bitmap2.image.height
        } : bitmap2.spriteSheet.getFrame(bitmap2.currentFrame).rect;
        return (Math.abs(b2.x - b1.x) < ir2.width * bitmap2.scaleX + ir1.width * bitmap1.scaleX && Math.abs(b2.y - b1.y) < ir2.height * bitmap2.scaleY + ir1.height * bitmap2.scaleY)
    };
    var _intersectingImagePart = function(intersetion, bitmap, ctx, i) {
        var bl, image, frameName, sr;
        if (bitmap instanceof createjs.Bitmap) {
            image = bitmap.image
        } else {
            if (bitmap instanceof createjs.Sprite) {
                frame = bitmap.spriteSheet.getFrame(bitmap.currentFrame);
                frameName = frame.image.src + ":" + frame.rect.x + ":" + frame.rect.y + ":" + frame.rect.width + ":" + frame.rect.height;
                if (cachedBAFrames[frameName]) {
                    image = cachedBAFrames[frameName]
                } else {
                    cachedBAFrames[frameName] = image = createjs.SpriteSheetUtils.extractFrame(bitmap.spriteSheet, bitmap.currentFrame)
                }
            }
        }
        bl = bitmap.globalToLocal(intersetion.x, intersetion.y);
        ctx.restore();
        ctx.save();
        ctx.rotate(_getParentalCumulatedProperty(bitmap, "rotation") * (Math.PI / 180));
        ctx.scale(_getParentalCumulatedProperty(bitmap, "scaleX", "*"), _getParentalCumulatedProperty(bitmap, "scaleY", "*"));
        ctx.translate(-bl.x - intersetion["rect" + i].regX, -bl.y - intersetion["rect" + i].regY);
        if ((sr = bitmap.sourceRect) != undefined) {
            ctx.drawImage(image, sr.x, sr.y, sr.width, sr.height, 0, 0, sr.width, sr.height)
        } else {
            ctx.drawImage(image, 0, 0, image.width, image.height)
        }
        return ctx.getImageData(0, 0, intersetion.width, intersetion.height).data
    };
    var _compareAlphaValues = function(imageData1, imageData2, width, height, alphaThreshold, getRect) {
        var alpha1, alpha2, x, y, offset = 3,
            pixelRect = {
                x: Infinity,
                y: Infinity,
                x2: -Infinity,
                y2: -Infinity
            };
        for (y = 0; y < height; ++y) {
            for (x = 0; x < width; ++x) {
                alpha1 = imageData1.length > offset + 1 ? imageData1[offset] / 255 : 0;
                alpha2 = imageData2.length > offset + 1 ? imageData2[offset] / 255 : 0;
                if (alpha1 > alphaThreshold && alpha2 > alphaThreshold) {
                    if (getRect) {
                        if (x < pixelRect.x) {
                            pixelRect.x = x
                        }
                        if (x > pixelRect.x2) {
                            pixelRect.x2 = x
                        }
                        if (y < pixelRect.y) {
                            pixelRect.y = y
                        }
                        if (y > pixelRect.y2) {
                            pixelRect.y2 = y
                        }
                    } else {
                        return {
                            x: x,
                            y: y,
                            width: 1,
                            height: 1
                        }
                    }
                }
                offset += 4
            }
        }
        if (pixelRect.x != Infinity) {
            pixelRect.width = pixelRect.x2 - pixelRect.x + 1;
            pixelRect.height = pixelRect.y2 - pixelRect.y + 1;
            return pixelRect
        }
        return null
    };
    var _getParentalCumulatedProperty = function(child, propName, operation) {
        operation = operation || "+";
        if (child.parent && child.parent[propName]) {
            var cp = child[propName];
            var pp = _getParentalCumulatedProperty(child.parent, propName, operation);
            if (operation == "*") {
                return cp * pp
            } else {
                return cp + pp
            }
        }
        return child[propName]
    };
    var calculateIntersection = function(rect1, rect2) {
        var dx, dy, r1 = {},
            r2 = {};
        r1.cx = rect1.x + (r1.hw = (rect1.width / 2));
        r1.cy = rect1.y + (r1.hh = (rect1.height / 2));
        r2.cx = rect2.x + (r2.hw = (rect2.width / 2));
        r2.cy = rect2.y + (r2.hh = (rect2.height / 2));
        dx = Math.abs(r1.cx - r2.cx) - (r1.hw + r2.hw);
        dy = Math.abs(r1.cy - r2.cy) - (r1.hh + r2.hh);
        if (dx < 0 && dy < 0) {
            dx = Math.min(Math.min(rect1.width, rect2.width), -dx);
            dy = Math.min(Math.min(rect1.height, rect2.height), -dy);
            return {
                x: Math.max(rect1.x, rect2.x),
                y: Math.max(rect1.y, rect2.y),
                width: dx,
                height: dy,
                rect1: rect1,
                rect2: rect2
            }
        } else {
            return null
        }
    };
    ndgmr.calculateIntersection = calculateIntersection;
    var getBounds = function(obj) {
        var bounds = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0
        };
        if (obj instanceof createjs.Container) {
            bounds.x2 = -Infinity;
            bounds.y2 = -Infinity;
            var children = obj.children,
                l = children.length,
                cbounds, c;
            for (c = 0; c < l; c++) {
                cbounds = getBounds(children[c]);
                if (cbounds.x < bounds.x) {
                    bounds.x = cbounds.x
                }
                if (cbounds.y < bounds.y) {
                    bounds.y = cbounds.y
                }
                if (cbounds.x + cbounds.width > bounds.x2) {
                    bounds.x2 = cbounds.x + cbounds.width
                }
                if (cbounds.y + cbounds.height > bounds.y2) {
                    bounds.y2 = cbounds.y + cbounds.height
                }
            }
            if (bounds.x == Infinity) {
                bounds.x = 0
            }
            if (bounds.y == Infinity) {
                bounds.y = 0
            }
            if (bounds.x2 == Infinity) {
                bounds.x2 = 0
            }
            if (bounds.y2 == Infinity) {
                bounds.y2 = 0
            }
            bounds.width = bounds.x2 - bounds.x;
            bounds.height = bounds.y2 - bounds.y;
            delete bounds.x2;
            delete bounds.y2
        } else {
            var gp, gp2, gp3, gp4, imgr = {},
                sr;
            if (obj instanceof createjs.Bitmap) {
                sr = obj.sourceRect || obj.image;
                imgr.width = sr.width;
                imgr.height = sr.height
            } else {
                if (obj instanceof createjs.Sprite) {
                    if (obj.spriteSheet._frames && obj.spriteSheet._frames[obj.currentFrame] && obj.spriteSheet._frames[obj.currentFrame].image) {
                        var cframe = obj.spriteSheet.getFrame(obj.currentFrame);
                        imgr.width = cframe.rect.width;
                        imgr.height = cframe.rect.height;
                        imgr.regX = cframe.regX;
                        imgr.regY = cframe.regY
                    } else {
                        bounds.x = obj.x || 0;
                        bounds.y = obj.y || 0
                    }
                } else {
                    bounds.x = obj.x || 0;
                    bounds.y = obj.y || 0
                }
            }
            imgr.regX = imgr.regX || 0;
            imgr.width = imgr.width || 0;
            imgr.regY = imgr.regY || 0;
            imgr.height = imgr.height || 0;
            bounds.regX = imgr.regX;
            bounds.regY = imgr.regY;
            gp = obj.localToGlobal(0 - imgr.regX, 0 - imgr.regY);
            gp2 = obj.localToGlobal(imgr.width - imgr.regX, imgr.height - imgr.regY);
            gp3 = obj.localToGlobal(imgr.width - imgr.regX, 0 - imgr.regY);
            gp4 = obj.localToGlobal(0 - imgr.regX, imgr.height - imgr.regY);
            bounds.x = Math.min(Math.min(Math.min(gp.x, gp2.x), gp3.x), gp4.x);
            bounds.y = Math.min(Math.min(Math.min(gp.y, gp2.y), gp3.y), gp4.y);
            bounds.width = Math.max(Math.max(Math.max(gp.x, gp2.x), gp3.x), gp4.x) - bounds.x;
            bounds.height = Math.max(Math.max(Math.max(gp.y, gp2.y), gp3.y), gp4.y) - bounds.y
        }
        return bounds
    };
    ndgmr.getBounds = getBounds
}());
var stage, w, h, loader, pipe1height, pipe2height, pipe3height, startX, startY, wiggleDelta, topFill;
var background, bird, ground, pipe, bottomPipe, pipes, rotationDelta, counter, counterOutline, highScore, highScoreOutline;
var started = false;
var startJump = false;
var jumpAmount = 120;
var jumpTime = 266;
var dead = false;
var KEYCODE_SPACE = 32;
var gap = 250;
var masterPipeDelay = 1.5;
var pipeDelay = masterPipeDelay;
var restartable = false;
var rd = 0;
var counterShow = false;

function init() {
    document.onkeydown = handleKeyDown;
    stage = new createjs.Stage("testCanvas");
    createjs.Touch.enable(stage);
    w = stage.canvas.width;
    h = stage.canvas.height;
    manifest = [{
        src: "img/bird.png",
        id: "bird"
    }, {
        src: "img/background.png",
        id: "background"
    }, {
        src: "img/ground.png",
        id: "ground"
    }, {
        src: "img/pipe.png",
        id: "pipe"
    }, {
        src: "img/restart.png",
        id: "start"
    }, {
        src: "img/score.png",
        id: "score"
    }, {
        src: "img/share.png",
        id: "share"
    }, {
        src: "img/add-to-leaderboard.png",
        id: "leaderboard"
    }];
    loader = new createjs.LoadQueue(true);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest)
}

function handleComplete() {
    background = new createjs.Shape();
    background.graphics.beginBitmapFill(loader.getResult("background")).drawRect(0, 0, w, h);
    background.y = 0 + outerPadding;
    var groundImg = loader.getResult("ground");
    ground = new createjs.Shape();
    ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height);
    ground.tileW = groundImg.width;
    ground.y = h - groundImg.height - outerPadding;
    var data = new createjs.SpriteSheet({
        images: [loader.getResult("bird")],
        frames: {
            width: 92,
            height: 64,
            regX: 46,
            regY: 32,
            count: 3
        },
        animations: {
            fly: [0, 2, "fly", 0.21],
            dive: [1, 1, "dive", 1]
        }
    });
    bird = new createjs.Sprite(data, "fly");
    startX = (w / 2) - (92 / 2);
    startY = 512 + outerPadding;
    wiggleDelta = 18;
    bird.setTransform(startX, startY, 1, 1);
    bird.framerate = 30;
    createjs.Tween.get(bird, {
        loop: true
    }).to({
        y: startY + wiggleDelta
    }, 380, createjs.Ease.sineInOut).to({
        y: startY
    }, 380, createjs.Ease.sineInOut);
    stage.addChild(background);
    topFill = new createjs.Graphics();
    topFill.beginFill("#70c5ce").rect(0, 0, w, outerPadding);
    topFill = new createjs.Shape(topFill);
    stage.addChild(topFill);
    pipes = new createjs.Container();
    stage.addChild(pipes);
    stage.addChild(bird, ground);
    stage.addEventListener("stagemousedown", handleJumpStart);
    bottomFill = new createjs.Graphics();
    bottomFill.beginFill("#ded895").rect(0, h - outerPadding, w, outerPadding);
    bottomFill = new createjs.Shape(bottomFill);
    stage.addChild(bottomFill);
    counter = createText(false, "#ffffff", 1, "86px");
    counterOutline = createText(true, "#000000", 1, "86px");
    highScore = createText(false, "#ffffff", 0, "60px");
    highScoreOutline = createText(true, "#000000", 0, "60px");
    stage.addChild(counter, counterOutline);
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.setInterval(100);
    createjs.Ticker.addEventListener("tick", tick);
    if (supports_html5_storage()) {
        var storage = localStorage.getItem("highScore");
        if (storage) {
            highScore.text = storage;
            highScoreOutline.text = storage
        } else {
            localStorage.setItem("highScore", 0)
        }
    } else {
        var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)highScore\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (myCookie) {
            highScore.text = myCookie;
            highScoreOutline.text = myCookie
        } else {
            document.cookie = "highScore=0"
        }
    }
}

function handleKeyDown(e) {
    if (!e) {
        var e = window.event
    }
    if (e.keyCode == KEYCODE_SPACE) {
        spacebar();
        return false
    }
}

function spacebar() {
    handleJumpStart();
    if (dead && restartable) {
        restart();
        restartable = false
    }
    return false
}

function handleJumpStart() {
    if (!dead) {
        createjs.Tween.removeTweens(bird);
        bird.gotoAndPlay("fly");
        if (bird.y < -200) {
            bird.y = -200
        }
        if (bird.roation < 0) {
            rotationDelta = (-bird.rotation - 20) / 5
        } else {
            rotationDelta = (bird.rotation + 20) / 5
        }
        createjs.Tween.get(bird).to({
            y: bird.y - rotationDelta,
            rotation: -20
        }, rotationDelta, createjs.Ease.linear).to({
            y: bird.y - jumpAmount,
            rotation: -20
        }, jumpTime - rotationDelta, createjs.Ease.quadOut).to({
            y: bird.y
        }, jumpTime, createjs.Ease.quadIn).to({
            y: bird.y + 200,
            rotation: 90
        }, (380) / 1.5, createjs.Ease.linear).call(diveBird).to({
            y: ground.y - 30
        }, (h - (bird.y + 200)) / 1.5, createjs.Ease.linear);
        if (!started) {
            started = true;
            counterShow = true;
            bird.framerate = 60
        }
    }
}

function diveBird() {
    bird.gotoAndPlay("dive")
}

function restart() {
    $("canvas").trigger("gameRestart");
    pipes.removeAllChildren();
    createjs.Tween.get(start).to({
        y: start.y + 10
    }, 50).call(removeStart);
    counter.text = 0;
    counterOutline.text = 0;
    counterOutline.alpha = 0;
    counter.alpha = 0;
    counter.font = "86px 'Flappy Bird'";
    counterOutline.font = counter.font;
    counter.y = 150 + outerPadding;
    counterOutline.y = counter.y;
    counterShow = false;
    highScore.alpha = 0;
    highScoreOutline.alpha = 0;
    pipeDelay = masterPipeDelay;
    dead = false;
    started = false;
    startJump = false;
    createjs.Tween.removeTweens(bird);
    bird.x = startX;
    bird.y = startY;
    bird.rotation = 0;
    rd = 0;
    createjs.Tween.get(bird, {
        loop: true
    }).to({
        y: startY + wiggleDelta
    }, 380, createjs.Ease.sineInOut).to({
        y: startY
    }, 380, createjs.Ease.sineInOut)
}

var app = angular.module('leaderboard', ['firebase']);

app.controller('MainCtrl', ['$scope', 'ContestantsService', '$firebase', function ($scope, ContestantsService, $firebase) {

    $scope.newContestant = { email: '', name: '', score: '' };
    $scope.currentContestant = null;

    // Explicit
    $scope.contestants = ContestantsService.getContestants();

    $scope.addContestant = function () {
        ContestantsService.addContestant(angular.copy($scope.newContestant));
        $scope.newContestant = { lane: '', name: '', score: '' };
    };

    $scope.updateContestant = function (contestant) {
        ContestantsService.updateContestant(contestant);
    };

    $scope.removeContestant = function (contestant) {
        ContestantsService.removeContestant(contestant);
    };
}]);

app.factory('ContestantsService', ['$firebase', function ($firebase) {
    var ref = new Firebase('https://box-arcade.firebaseio.com/contestants/');
    var contestants = $firebase(ref);

    contestants.$on('loaded', function(){
        // console.log('contestants', contestants);
    })

    var getContestants = function() {
        return contestants;
    }

    var addContestant = function (contestant) {
        contestants.$add(contestant);
    };

    var updateContestant = function (id) {
        contestants.$save(id);
    };

    var removeContestant = function (id) {
        contestants.$remove(id);
    };

    return {
        getContestants: getContestants,
        addContestant: addContestant,
        updateContestant: updateContestant,
        removeContestant: removeContestant
    }
}]);

function updateLeaderboard(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)) {

    }
}

function updateLeaderboard(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)) {
        var ref = new Firebase('https://box-arcade.firebaseio.com/contestants/');
        var contestants = $firebase(ref);
        contestants.$asArray().$add(email, score);
    }
}

function die() {
    $("canvas").trigger("gameEnd");
    dead = true;
    bird.gotoAndPlay("dive");

    if (counter.text > highScore.text) {
        highScore.text = counter.text;
        highScoreOutline.text = counterOutline.text;
        if (supports_html5_storage()) {
            localStorage.setItem("highScore", counter.text)
        } else {
            document.cookie = "highScore=" + counter.text
        }
    }

    $('#gameOverModal').modal('show');
}

function removeStart() {
    stage.removeChild(start);
    stage.removeChild(share);
    stage.removeChild(score);
    stage.removeChild(leaderboard)
}

function addClickToStart(item) {
    start.addEventListener("click", restart);
    share.addEventListener("click", goShare);
    leaderboard.addEventListener("click", submitScore);
    restartable = true
}

function dropIn(item) {
    createjs.Tween.get(item).to({
        alpha: 1,
        y: item.y + 50
    }, 400, createjs.Ease.sineIn)
}

function addImageAtCenter(id, xOffset, yOffset) {
    var image = new createjs.Bitmap(loader.getResult(id));
    image.alpha = 0;
    image.x = w / 2 - image.image.width / 2 + xOffset;
    image.y = h / 2 - image.image.height / 2 + yOffset;
    return image
}

function createText(isOutline, color, alpha, fontSize) {
    var text = new createjs.Text(0, fontSize + " 'Flappy Bird'", color);
    if (isOutline) {
        text.outline = 5
    }
    text.color = color;
    text.textAlign = "center";
    text.x = w / 2;
    text.y = 150 + outerPadding;
    text.alpha = alpha;
    return text
}

function supports_html5_storage() {
    try {
        localStorage.setItem("test", "foo");
        return "localStorage" in window && window.localStorage !== null
    } catch (e) {
        return false
    }
}

function tick(event) {
    var deltaS = event.delta / 1000;
    var l = pipes.getNumChildren();
    if (bird.y > (ground.y - 40)) {
        if (!dead) {
            die()
        }
        if (bird.y > (ground.y - 30)) {
            createjs.Tween.removeTweens(bird)
        }
    }
    if (!dead) {
        ground.x = (ground.x - deltaS * 300) % ground.tileW
    }
    if (started && !dead) {
        rd = rd + deltaS;
        if (pipeDelay < 0) {
            pipe = new createjs.Bitmap(loader.getResult("pipe"));
            pipe.x = w + 600;
            pipe.y = (ground.y - gap * 2) * Math.random() + gap * 1.5;
            pipes.addChild(pipe);
            pipe2 = new createjs.Bitmap(loader.getResult("pipe"));
            pipe2.scaleX = -1;
            pipe2.rotation = 180;
            pipe2.x = pipe.x;
            pipe2.y = pipe.y - gap;
            pipes.addChild(pipe2);
            pipeDelay = masterPipeDelay
        } else {
            pipeDelay = pipeDelay - 1 * deltaS
        }
        for (var i = 0; i < l; i++) {
            pipe = pipes.getChildAt(i);
            if (pipe) {
                if (true) {
                    var collision = ndgmr.checkRectCollision(pipe, bird, 1, true);
                    if (collision) {
                        if (collision.width > 8 && collision.height > 8) {
                            die()
                        }
                    }
                }
                pipe.x = (pipe.x - deltaS * 300);
                if (pipe.x <= 338 && pipe.rotation === 0 && pipe.name != "counted") {
                    pipe.name = "counted";
                    counter.text = counter.text + 1;
                    counterOutline.text = counterOutline.text + 1
                }
                if (pipe.x + pipe.image.width <= -pipe.w) {
                    pipes.removeChild(pipe)
                }
            }
        }
        if (counterShow) {
            counter.alpha = 1;
            counterOutline.alpha = 1;
            counterShow = false
        }
    }
    stage.update(event)
}
var apiUrl = "social.flappybird.io";
var rootUrl = "flappybird.io";

function retreiveScore() {
    var hash = location.hash.substring(1);
    $.post("http://" + apiUrl + "/leaderboard/show/" + hash, {}, function(data) {
        $(".score").html(data.count)
    }, "json")
}

function submitScore() {
    ga("send", "event", "Flappy Bird", "Score Time", counter.text + " - " + rd, rd);
    $.post("http://" + apiUrl + "/leaderboard/", {
        s: counter.text,
        t: rd
    }, function(data) {
        console.log(data);
        window.location = "http://" + rootUrl + "/leaderboard/new/#" + data.token
    }, "json")
}

function updateScore(name) {
    var hash = location.hash.substring(1);
    $.post("http://" + apiUrl + "/leaderboard/update/" + hash, {
        name: name
    }, function(data) {
        if (data.success) {
            $(".error").hide();
            window.location = "http://" + rootUrl + "/leaderboard/"
        } else {
            $(".error").show().text(data.message);
            ga("send", "event", "Flappy Bird", "Name", name)
        }
    }, "json")
}

function listScores() {
    $.post("http://" + apiUrl + "/leaderboard/list", {}, function(data) {
        $(".loading").remove();
        for (var i = 0; i < data.day.length; i++) {
            var element = $("<tr><td></td><td>" + data.day[i].count + "</td></tr>");
            element.children("td").eq(0).text(data.day[i].name);
            $(".day").append(element)
        }
        for (var i = 0; i < data.hour.length; i++) {
            var element = $("<tr><td></td><td>" + data.hour[i].count + "</td></tr>");
            element.children("td").eq(0).text(data.hour[i].name);
            $(".hour").append(element)
        }
    }, "json")
};