/*!
 * pixi.js - v5.0.0-alpha.3
 * Compiled Sat, 13 Oct 2018 04:44:26 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var accessibility = require('@pixi/accessibility');
var app = require('@pixi/app');
var constants = require('@pixi/constants');
var core = require('@pixi/core');
var display = require('@pixi/display');
var extract = require('@pixi/extract');
var graphics = require('@pixi/graphics');
var interaction = require('@pixi/interaction');
var loaders = require('@pixi/loaders');
var math = require('@pixi/math');
var mesh = require('@pixi/mesh');
var meshExtras = require('@pixi/mesh-extras');
var particles = require('@pixi/particles');
var prepare = require('@pixi/prepare');
var sprite = require('@pixi/sprite');
var spriteAnimated = require('@pixi/sprite-animated');
var spritesheet = require('@pixi/spritesheet');
var spriteTiling = require('@pixi/sprite-tiling');
var text = require('@pixi/text');
var textBitmap = require('@pixi/text-bitmap');
var ticker = require('@pixi/ticker');
var utils = require('@pixi/utils');
var settings = require('@pixi/settings');
var filterAlpha = require('@pixi/filter-alpha');
var filterBlur = require('@pixi/filter-blur');
var filterColorMatrix = require('@pixi/filter-color-matrix');
var filterDisplacement = require('@pixi/filter-displacement');
var filterFxaa = require('@pixi/filter-fxaa');
var filterNoise = require('@pixi/filter-noise');
require('@pixi/mixin-cache-as-bitmap');
require('@pixi/mixin-get-child-by-name');
require('@pixi/mixin-get-global-position');

var v5 = '5.0.0';

function deprecated(PIXI)
{
    Object.defineProperties(PIXI, {
        /**
         * @constant
         * @name SVG_SIZE
         * @memberof PIXI
         * @see PIXI.SVGResource.SVG_SIZE
         * @deprecated since 5.0.0
         */
        SVG_SIZE: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.utils.SVG_SIZE has moved to PIXI.SVGResource.SVG_SIZE');

                return PIXI.SVGResource.SVG_SIZE;
            },
        },

        /**
         * @class PIXI.TransformStatic
         * @deprecated since 5.0.0
         * @see PIXI.Transform
         */
        TransformStatic: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.TransformStatic has been removed, use PIXI.Transform');

                return PIXI.Transform;
            },
        },

        /**
         * @class PIXI.TransformBase
         * @deprecated since 5.0.0
         * @see PIXI.Transform
         */
        TransformBase: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.TransformBase has been removed, use PIXI.Transform');

                return PIXI.Transform;
            },
        },

        /**
         * Constants that specify the transform type.
         *
         * @static
         * @constant
         * @name TRANSFORM_MODE
         * @memberof PIXI
         * @type {object}
         * @deprecated since 5.0.0
         * @property {number} STATIC
         * @property {number} DYNAMIC
         */
        TRANSFORM_MODE: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.TRANSFORM_MODE has been removed');

                return { STATIC: 0, DYNAMIC: 1 };
            },
        },

        /**
         * @class PIXI.WebGLRenderer
         * @see PIXI.Renderer
         * @deprecated since 5.0.0
         */
        WebGLRenderer: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.WebGLRenderer has moved to PIXI.Renderer');

                return PIXI.Renderer;
            },
        },

        /**
         * @class PIXI.CanvasRenderTarget
         * @see PIXI.utils.CanvasRenderTarget
         * @deprecated since 5.0.0
         */
        CanvasRenderTarget: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.CanvasRenderTarget has moved to PIXI.utils.CanvasRenderTarget');

                return PIXI.utils.CanvasRenderTarget;
            },
        },

        /**
         * @memberof PIXI
         * @name loader
         * @type {PIXI.Loader}
         * @see PIXI.Loader.shared
         * @deprecated since 5.0.0
         */
        loader: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loader has moved to PIXI.Loader.shared');

                return PIXI.Loader.shared;
            },
        },

        /**
         * @class PIXI.FilterManager
         * @see PIXI.systems.FilterSystem
         * @deprecated since 5.0.0
         */
        FilterManager: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.FilterManager has moved to PIXI.systems.FilterSystem');

                return PIXI.systems.FilterManager;
            },
        },
    });

    /**
     * This namespace has been removed. All classes previous nested
     * under this namespace have been moved to the top-level `PIXI` object.
     * @namespace PIXI.extras
     * @deprecated since 5.0.0
     */
    PIXI.extras = {};

    Object.defineProperties(PIXI.extras, {
        /**
         * @class PIXI.extras.TilingSprite
         * @see PIXI.TilingSprite
         * @deprecated since 5.0.0
         */
        TilingSprite: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.extras.TilingSprite has moved to PIXI.TilingSprite');

                return PIXI.TilingSprite;
            },
        },
        /**
         * @class PIXI.extras.TilingSpriteRenderer
         * @see PIXI.TilingSpriteRenderer
         * @deprecated since 5.0.0
         */
        TilingSpriteRenderer: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.extras.TilingSpriteRenderer has moved to PIXI.TilingSpriteRenderer');

                return PIXI.TilingSpriteRenderer;
            },
        },
        /**
         * @class PIXI.extras.AnimatedSprite
         * @see PIXI.AnimatedSprite
         * @deprecated since 5.0.0
         */
        AnimatedSprite: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.extras.AnimatedSprite has moved to PIXI.AnimatedSprite');

                return PIXI.AnimatedSprite;
            },
        },
        /**
         * @class PIXI.extras.BitmapText
         * @see PIXI.BitmapText
         * @deprecated since 5.0.0
         */
        BitmapText: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.extras.BitmapText has moved to PIXI.BitmapText');

                return PIXI.BitmapText;
            },
        },
    });

    Object.defineProperties(PIXI.utils, {
        /**
         * @function PIXI.utils.getSvgSize
         * @see PIXI.SVGResource.getSize
         * @deprecated since 5.0.0
         */
        getSvgSize: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.utils.getSvgSize has moved to PIXI.SVGResource.getSize');

                return PIXI.SVGResource.getSize;
            },
        },
    });

    /**
     * All classes on this namespace have moved to the high-level `PIXI` object.
     * @namespace PIXI.mesh
     * @deprecated since 5.0.0
     */
    PIXI.mesh = {};

    Object.defineProperties(PIXI.mesh, {
        /**
         * @class PIXI.mesh.Mesh
         * @see PIXI.Mesh2d
         * @deprecated since 5.0.0
         */
        Mesh: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.Mesh has moved to PIXI.Mesh2d');

                return PIXI.Mesh2d;
            },
        },
        /**
         * @class PIXI.mesh.NineSlicePlane
         * @see PIXI.NineSlicePlane
         * @deprecated since 5.0.0
         */
        NineSlicePlane: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.NineSlicePlane has moved to PIXI.NineSlicePlane');

                return PIXI.NineSlicePlane;
            },
        },
        /**
         * @class PIXI.mesh.Plane
         * @see PIXI.Plane
         * @deprecated since 5.0.0
         */
        Plane: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.Plane has moved to PIXI.Plane');

                return PIXI.Plane;
            },
        },
        /**
         * @class PIXI.mesh.Rope
         * @see PIXI.Rope
         * @deprecated since 5.0.0
         */
        Rope: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.Rope has moved to PIXI.Rope');

                return PIXI.Rope;
            },
        },
        /**
         * @class PIXI.mesh.RawMesh
         * @see PIXI.Mesh
         * @deprecated since 5.0.0
         */
        RawMesh: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.RawMesh has moved to PIXI.Mesh');

                return PIXI.Mesh;
            },
        },
        /**
         * @class PIXI.mesh.CanvasMeshRenderer
         * @see PIXI.CanvasMeshRenderer
         * @deprecated since 5.0.0
         */
        CanvasMeshRenderer: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.CanvasMeshRenderer has moved to PIXI.CanvasMeshRenderer');

                return PIXI.CanvasMeshRenderer;
            },
        },
        /**
         * @class PIXI.mesh.MeshRenderer
         * @see PIXI.MeshRenderer
         * @deprecated since 5.0.0
         */
        MeshRenderer: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.mesh.MeshRenderer has moved to PIXI.MeshRenderer');

                return PIXI.MeshRenderer;
            },
        },
    });

    /*
     * This namespace has been removed and items have been moved to
     * the top-level `PIXI` object.
     * @namespace PIXI.particles
     * @deprecated since 5.0.0
     */
    PIXI.particles = {};

    Object.defineProperties(PIXI.particles, {
        /**
         * @class PIXI.particles.ParticleContainer
         * @deprecated since 5.0.0
         * @see PIXI.ParticleContainer
         */
        ParticleContainer: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.particles.ParticleContainer has moved to PIXI.ParticleContainer');

                return PIXI.ParticleContainer;
            },
        },
        /**
         * @class PIXI.particles.ParticleRenderer
         * @deprecated since 5.0.0
         * @see PIXI.ParticleRenderer
         */
        ParticleRenderer: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.particles.ParticleRenderer has moved to PIXI.ParticleRenderer');

                return PIXI.ParticleRenderer;
            },
        },
    });

    /*
     * This namespace has been removed and items have been moved to
     * the top-level `PIXI` object.
     * @namespace PIXI.ticker
     * @deprecated since 5.0.0
     */
    PIXI.ticker = {};

    Object.defineProperties(PIXI.ticker, {
        /**
         * @class PIXI.ticker.Ticker
         * @deprecated since 5.0.0
         * @see PIXI.Ticker
         */
        Ticker: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.ticker.Ticker has moved to PIXI.Ticker');

                return PIXI.Ticker;
            },
        },
        /**
         * @name PIXI.ticker.shared
         * @type {PIXI.Ticker}
         * @deprecated since 5.0.0
         * @see PIXI.Ticker.shared
         */
        shared: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.ticker.shared has moved to PIXI.Ticker.shared');

                return PIXI.Ticker.shared;
            },
        },
    });

    /**
     * All classes on this namespace have moved to the high-level `PIXI` object.
     * @namespace PIXI.loaders
     * @deprecated since 5.0.0
     */
    PIXI.loaders = {};

    Object.defineProperties(PIXI.loaders, {
        /**
         * @class PIXI.loaders.Loader
         * @see PIXI.Loader
         * @deprecated since 5.0.0
         */
        Loader: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loaders.Loader has moved to PIXI.Loader');

                return PIXI.Loader;
            },
        },
        /**
         * @class PIXI.loaders.Resource
         * @see PIXI.LoaderResource
         * @deprecated since 5.0.0
         */
        Resource: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loaders.Resource has moved to PIXI.LoaderResource');

                return PIXI.LoaderResource;
            },
        },
        /**
         * @function PIXI.loaders.bitmapFontParser
         * @see PIXI.BitmapFontLoader.use
         * @deprecated since 5.0.0
         */
        bitmapFontParser: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loaders.bitmapFontParser has moved to PIXI.BitmapFontLoader.use');

                return PIXI.BitmapFontLoader.use;
            },
        },
        /**
         * @function PIXI.loaders.parseBitmapFontData
         * @see PIXI.BitmapFontLoader.parse
         * @deprecated since 5.0.0
         */
        parseBitmapFontData: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loaders.parseBitmapFontData has moved to PIXI.BitmapFontLoader.parse');

                return PIXI.BitmapFontLoader.parse;
            },
        },
        /**
         * @function PIXI.loaders.spritesheetParser
         * @see PIXI.SpritesheetLoader.use
         * @deprecated since 5.0.0
         */
        spritesheetParser: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loaders.spritesheetParser has moved to PIXI.SpritesheetLoader.use');

                return PIXI.SpritesheetLoader.use;
            },
        },
        /**
         * @function PIXI.loaders.getResourcePath
         * @see PIXI.SpritesheetLoader.getResourcePath
         * @deprecated since 5.0.0
         */
        getResourcePath: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.loaders.getResourcePath has moved to PIXI.SpritesheetLoader.getResourcePath');

                return PIXI.SpritesheetLoader.getResourcePath;
            },
        },
    });

    /**
     * @function PIXI.loaders.Loader.addPixiMiddleware
     * @see PIXI.Loader.registerPlugin
     * @deprecated since 5.0.0
     * @param {function} middleware
     */
    PIXI.Loader.addPixiMiddleware = function addPixiMiddleware(middleware)
    {
        utils.deprecation(v5, 'PIXI.loaders.Loader.addPixiMiddleware is deprecated, use PIXI.loaders.Loader.registerPlugin');

        return PIXI.loaders.Loader.registerPlugin({ use: middleware() });
    };

    /**
     * @class PIXI.extract.WebGLExtract
     * @deprecated since 5.0.0
     * @see PIXI.extract.Prepare
     */
    Object.defineProperty(PIXI.extract, 'WebGLExtract', {
        get: function get()
        {
            utils.deprecation(v5, 'PIXI.extract.WebGLExtract has moved to PIXI.extract.Extract');

            return PIXI.extract.Extract;
        },
    });

    /**
     * @class PIXI.prepare.WebGLPrepare
     * @deprecated since 5.0.0
     * @see PIXI.prepare.Prepare
     */
    Object.defineProperty(PIXI.prepare, 'WebGLPrepare', {
        get: function get()
        {
            utils.deprecation(v5, 'PIXI.prepare.WebGLPrepare has moved to PIXI.prepare.Prepare');

            return PIXI.prepare.Prepare;
        },
    });

    /**
     * @method PIXI.Container#_renderWebGL
     * @private
     * @deprecated since 5.0.0
     * @see PIXI.Container#render
     * @param {PIXI.Renderer} renderer Instance of renderer
     */
    PIXI.Container.prototype._renderWebGL = function _renderWebGL(renderer)
    {
        utils.deprecation(v5, 'PIXI.Container#_renderWebGL has moved to PIXI.Container#_render');

        this._render(renderer);
    };

    /**
     * @method PIXI.Container#renderWebGL
     * @deprecated since 5.0.0
     * @see PIXI.Container#render
     * @param {PIXI.Renderer} renderer Instance of renderer
     */
    PIXI.Container.prototype.renderWebGL = function renderWebGL(renderer)
    {
        utils.deprecation(v5, 'PIXI.Container#renderWebGL has moved to PIXI.Container#render');

        this.render(renderer);
    };

    /**
     * @method PIXI.DisplayObject#renderWebGL
     * @deprecated since 5.0.0
     * @see PIXI.DisplayObject#render
     * @param {PIXI.Renderer} renderer Instance of renderer
     */
    PIXI.DisplayObject.prototype.renderWebGL = function renderWebGL(renderer)
    {
        utils.deprecation(v5, 'PIXI.DisplayObject#renderWebGL has moved to PIXI.DisplayObject#render');

        this.render(renderer);
    };

    /**
     * @method PIXI.Container#renderAdvancedWebGL
     * @deprecated since 5.0.0
     * @see PIXI.Container#renderAdvanced
     * @param {PIXI.Renderer} renderer Instance of renderer
     */
    PIXI.Container.prototype.renderAdvancedWebGL = function renderAdvancedWebGL(renderer)
    {
        utils.deprecation(v5, 'PIXI.Container#renderAdvancedWebGL has moved to PIXI.Container#renderAdvanced');

        this.renderAdvanced(renderer);
    };

    Object.defineProperties(PIXI.settings, {
        /**
         * Default transform type.
         *
         * @static
         * @deprecated since 5.0.0
         * @memberof PIXI.settings
         * @type {PIXI.TRANSFORM_MODE}
         * @default PIXI.TRANSFORM_MODE.STATIC
         */
        TRANSFORM_MODE: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.settings.TRANSFORM_MODE has been removed.');

                return 0;
            },
            set: function set()
            {
                utils.deprecation(v5, 'PIXI.settings.TRANSFORM_MODE has been removed.');
            },
        },
    });

    var BaseTexture = PIXI.BaseTexture;

    /**
     * @method fromImage
     * @static
     * @memberof PIXI.BaseTexture
     * @deprecated since 5.0.0
     * @see PIXI.BaseTexture.from
     */
    BaseTexture.fromImage = function fromImage(canvas, crossorigin, scaleMode, scale)
    {
        utils.deprecation(v5, 'PIXI.BaseTexture.fromImage has been replaced with PIXI.BaseTexture.from');

        var resourceOptions = { scale: scale, crossorigin: crossorigin };

        return BaseTexture.from(canvas, { scaleMode: scaleMode, resourceOptions: resourceOptions });
    };

    /**
     * @method fromCanvas
     * @static
     * @memberof PIXI.BaseTexture
     * @deprecated since 5.0.0
     * @see PIXI.BaseTexture.from
     */
    BaseTexture.fromCanvas = function fromCanvas(canvas, scaleMode)
    {
        utils.deprecation(v5, 'PIXI.BaseTexture.fromCanvas has been replaced with PIXI.BaseTexture.from');

        return BaseTexture.from(canvas, { scaleMode: scaleMode });
    };

    /**
     * @method fromSVG
     * @static
     * @memberof PIXI.BaseTexture
     * @deprecated since 5.0.0
     * @see PIXI.BaseTexture.from
     */
    BaseTexture.fromSVG = function fromSVG(canvas, crossorigin, scaleMode, scale)
    {
        utils.deprecation(v5, 'PIXI.BaseTexture.fromSVG has been replaced with PIXI.BaseTexture.from');

        var resourceOptions = { scale: scale, crossorigin: crossorigin };

        return BaseTexture.from(canvas, { scaleMode: scaleMode, resourceOptions: resourceOptions });
    };

    /**
     * @method PIXI.Point#copy
     * @deprecated since 5.0.0
     * @see PIXI.Point#copyFrom
     */
    PIXI.Point.prototype.copy = function copy(p)
    {
        utils.deprecation(v5, 'PIXI.Point.copy has been replaced with PIXI.Point#copyFrom');

        return this.copyFrom(p);
    };

    /**
     * @method PIXI.ObservablePoint#copy
     * @deprecated since 5.0.0
     * @see PIXI.ObservablePoint#copyFrom
     */
    PIXI.ObservablePoint.prototype.copy = function copy(p)
    {
        utils.deprecation(v5, 'PIXI.ObservablePoint.copy has been replaced with PIXI.ObservablePoint#copyFrom');

        return this.copyFrom(p);
    };

    /**
     * @method PIXI.Rectangle#copy
     * @deprecated since 5.0.0
     * @see PIXI.Rectangle#copyFrom
     */
    PIXI.Rectangle.prototype.copy = function copy(p)
    {
        utils.deprecation(v5, 'PIXI.Rectangle.copy has been replaced with PIXI.Rectangle#copyFrom');

        return this.copyFrom(p);
    };

    /**
     * @method PIXI.Matrix#copy
     * @deprecated since 5.0.0
     * @see PIXI.Matrix#copyTo
     */
    PIXI.Matrix.prototype.copy = function copy(p)
    {
        utils.deprecation(v5, 'PIXI.Matrix.copy has been replaced with PIXI.Matrix#copyTo');

        return this.copyTo(p);
    };

    Object.assign(PIXI.systems.FilterSystem.prototype, {
        /**
         * @method PIXI.FilterManager#getRenderTarget
         * @deprecated since 5.0.0
         * @see PIXI.systems.FilterSystem#getFilterTexture
         */
        getRenderTarget: function getRenderTarget(clear, resolution)
        {
            utils.deprecation(v5, 'FilterManager#getRenderTarget has been replaced with FilterSystem#getFilterTexture');

            return this.getFilterTexture(resolution);
        },

        /**
         * @method PIXI.FilterManager#returnRenderTarget
         * @deprecated since 5.0.0
         * @see PIXI.systems.FilterSystem#returnFilterTexture
         */
        returnRenderTarget: function returnRenderTarget(renderTexture)
        {
            utils.deprecation(v5, 'FilterManager#returnRenderTarget has been replaced with FilterSystem#returnFilterTexture');

            this.returnFilterTexture(renderTexture);
        },
    });

    Object.defineProperties(PIXI.RenderTexture.prototype, {
        /**
         * @name PIXI.RenderTexture#sourceFrame
         * @type {PIXI.Rectangle}
         * @deprecated since 5.0.0
         * @readonly
         */
        sourceFrame: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.RenderTexture#sourceFrame has been removed');

                return this.filterFrame;
            },
        },
        /**
         * @name PIXI.RenderTexture#size
         * @type {PIXI.Rectangle}
         * @deprecated since 5.0.0
         * @readonly
         */
        size: {
            get: function get()
            {
                utils.deprecation(v5, 'PIXI.RenderTexture#size has been removed');

                return this._frame;
            },
        },
    });

    /**
     * @class BlurXFilter
     * @memberof PIXI.filters
     * @deprecated since 5.0.0
     * @see PIXI.filters.BlurFilterPass
     */
    var BlurXFilter = (function (superclass) {
        function BlurXFilter(strength, quality, resolution, kernelSize)
        {
            utils.deprecation(v5, 'PIXI.filters.BlurXFilter is deprecated, use PIXI.filters.BlurFilterPass');

            superclass.call(this, true, strength, quality, resolution, kernelSize);
        }

        if ( superclass ) BlurXFilter.__proto__ = superclass;
        BlurXFilter.prototype = Object.create( superclass && superclass.prototype );
        BlurXFilter.prototype.constructor = BlurXFilter;

        return BlurXFilter;
    }(PIXI.filters.BlurFilterPass));

    /**
     * @class BlurYFilter
     * @memberof PIXI.filters
     * @deprecated since 5.0.0
     * @see PIXI.filters.BlurFilterPass
     */
    var BlurYFilter = (function (superclass) {
        function BlurYFilter(strength, quality, resolution, kernelSize)
        {
            utils.deprecation(v5, 'PIXI.filters.BlurYFilter is deprecated, use PIXI.filters.BlurFilterPass');

            superclass.call(this, false, strength, quality, resolution, kernelSize);
        }

        if ( superclass ) BlurYFilter.__proto__ = superclass;
        BlurYFilter.prototype = Object.create( superclass && superclass.prototype );
        BlurYFilter.prototype.constructor = BlurYFilter;

        return BlurYFilter;
    }(PIXI.filters.BlurFilterPass));

    Object.assign(PIXI.filters, {
        BlurXFilter: BlurXFilter,
        BlurYFilter: BlurYFilter,
    });

    var Sprite = PIXI.Sprite;
    var Texture = PIXI.Texture;

    // Use these to deprecate all the Sprite from* methods
    function spriteFrom(name, source, crossorigin, scaleMode)
    {
        utils.deprecation(v5, ("PIXI.Sprite." + name + " is deprecated, use PIXI.Sprite.from"));

        return Sprite.from(source, {
            resourceOptions: {
                scale: scaleMode,
                crossorigin: crossorigin,
            },
        });
    }

    /**
     * @deprecated since 5.0.0
     * @see PIXI.Sprite.from
     * @method PIXI.Sprite.fromImage
     * @return {PIXI.Sprite}
     */
    Sprite.fromImage = spriteFrom.bind(null, 'fromImage');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Sprite.fromSVG
     * @see PIXI.Sprite.from
     * @return {PIXI.Sprite}
     */
    Sprite.fromSVG = spriteFrom.bind(null, 'fromSVG');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Sprite.fromCanvas
     * @see PIXI.Sprite.from
     * @return {PIXI.Sprite}
     */
    Sprite.fromCanvas = spriteFrom.bind(null, 'fromCanvas');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Sprite.fromVideo
     * @see PIXI.Sprite.from
     * @return {PIXI.Sprite}
     */
    Sprite.fromVideo = spriteFrom.bind(null, 'fromVideo');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Sprite.fromFrame
     * @see PIXI.Sprite.from
     * @return {PIXI.Sprite}
     */
    Sprite.fromFrame = spriteFrom.bind(null, 'fromFrame');

    // Use these to deprecate all the Texture from* methods
    function textureFrom(name, source, crossorigin, scaleMode)
    {
        utils.deprecation(v5, ("PIXI.Texture." + name + " is deprecated, use PIXI.Texture.from"));

        return Texture.from(source, {
            resourceOptions: {
                scale: scaleMode,
                crossorigin: crossorigin,
            },
        });
    }

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Texture.fromImage
     * @see PIXI.Texture.from
     * @return {PIXI.Texture}
     */
    Texture.fromImage = textureFrom.bind(null, 'fromImage');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Texture.fromSVG
     * @see PIXI.Texture.from
     * @return {PIXI.Texture}
     */
    Texture.fromSVG = textureFrom.bind(null, 'fromSVG');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Texture.fromCanvas
     * @see PIXI.Texture.from
     * @return {PIXI.Texture}
     */
    Texture.fromCanvas = textureFrom.bind(null, 'fromCanvas');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Texture.fromVideo
     * @see PIXI.Texture.from
     * @return {PIXI.Texture}
     */
    Texture.fromVideo = textureFrom.bind(null, 'fromVideo');

    /**
     * @deprecated since 5.0.0
     * @method PIXI.Texture.fromFrame
     * @see PIXI.Texture.from
     * @return {PIXI.Texture}
     */
    Texture.fromFrame = textureFrom.bind(null, 'fromFrame');

    /**
     * @deprecated since 5.0.0
     * @member {boolean} PIXI.AbstractRenderer#autoResize
     * @see PIXI.AbstractRenderer#autoDensity
     */
    Object.defineProperty(PIXI.AbstractRenderer.prototype, 'autoResize', {
        get: function get()
        {
            utils.deprecation(v5, 'PIXI.AbstractRenderer autoResize is deprecated, use autoDensity');

            return this.autoDensity;
        },
        set: function set(value)
        {
            utils.deprecation(v5, 'PIXI.AbstractRenderer autoResize is deprecated, use autoDensity');

            this.autoDensity = value;
        },
    });
}

// Install renderer plugins
core.Renderer.registerPlugin('accessibility', accessibility.AccessibilityManager);
core.Renderer.registerPlugin('extract', extract.Extract);
core.Renderer.registerPlugin('graphics', graphics.GraphicsRenderer);
core.Renderer.registerPlugin('interaction', interaction.InteractionManager);
core.Renderer.registerPlugin('mesh', mesh.MeshRenderer);
core.Renderer.registerPlugin('particle', particles.ParticleRenderer);
core.Renderer.registerPlugin('prepare', prepare.Prepare);
core.Renderer.registerPlugin('sprite', sprite.SpriteRenderer);
core.Renderer.registerPlugin('tilingSprite', spriteTiling.TilingSpriteRenderer);

loaders.Loader.registerPlugin(textBitmap.BitmapFontLoader);
loaders.Loader.registerPlugin(spritesheet.SpritesheetLoader);

app.Application.registerPlugin(ticker.TickerPlugin);
app.Application.registerPlugin(loaders.LoaderPlugin);

// Apply deplayed mixins
utils.mixins.performMixins();

/**
 * String of the current PIXI version.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name VERSION
 * @type {string}
 */
var VERSION = '5.0.0-alpha.3';

/**
 * @namespace PIXI
 */
var PIXI = { VERSION: VERSION };

/**
 * This namespace contains WebGL-only display filters that can be applied
 * to DisplayObjects using the {@link PIXI.DisplayObject#filters filters} property.
 *
 * Since PixiJS only had a handful of built-in filters, additional filters
 * can be downloaded {@link https://github.com/pixijs/pixi-filters here} from the
 * PixiJS Filters repository.
 *
 * All filters must extend {@link PIXI.Filter}.
 *
 * @example
 * // Create a new application
 * const app = new PIXI.Application();
 *
 * // Draw a green rectangle
 * const rect = new PIXI.Graphics()
 *     .beginFill(0x00ff00)
 *     .drawRect(40, 40, 200, 200);
 *
 * // Add a blur filter
 * rect.filters = [new PIXI.filters.BlurFilter()];
 *
 * // Display rectangle
 * app.stage.addChild(rect);
 * document.body.appendChild(app.view);
 * @namespace PIXI.filters
 */
var filters = {
    AlphaFilter: filterAlpha.AlphaFilter,
    BlurFilter: filterBlur.BlurFilter,
    BlurFilterPass: filterBlur.BlurFilterPass,
    ColorMatrixFilter: filterColorMatrix.ColorMatrixFilter,
    DisplacementFilter: filterDisplacement.DisplacementFilter,
    FXAAFilter: filterFxaa.FXAAFilter,
    NoiseFilter: filterNoise.NoiseFilter,
};

// Add to namespace window object for people doing `import 'pixi.js'`
if (typeof window !== 'undefined')
{
    var namespaces = {
        accessibility: accessibility,
        extract: extract,
        filters: filters,
        interaction: interaction,
        prepare: prepare,
        settings: settings.settings,
        utils: utils,
    };

    window.PIXI = Object.assign(
        PIXI,
        namespaces,
        app,
        constants,
        core,
        display,
        graphics,
        loaders,
        math,
        mesh,
        meshExtras,
        particles,
        sprite,
        spriteAnimated,
        spritesheet,
        spriteTiling,
        text,
        textBitmap,
        ticker
    );

    // Deprecations only apply to Window object
    deprecated(PIXI);
}

exports.PIXI = PIXI;
exports.VERSION = VERSION;
exports.accessibility = accessibility;
exports.extract = extract;
exports.filters = filters;
exports.interaction = interaction;
exports.prepare = prepare;
exports.settings = settings.settings;
exports.utils = utils;
Object.keys(app).forEach(function (key) { exports[key] = app[key]; });
Object.keys(constants).forEach(function (key) { exports[key] = constants[key]; });
Object.keys(core).forEach(function (key) { exports[key] = core[key]; });
Object.keys(display).forEach(function (key) { exports[key] = display[key]; });
Object.keys(graphics).forEach(function (key) { exports[key] = graphics[key]; });
Object.keys(loaders).forEach(function (key) { exports[key] = loaders[key]; });
Object.keys(math).forEach(function (key) { exports[key] = math[key]; });
Object.keys(mesh).forEach(function (key) { exports[key] = mesh[key]; });
Object.keys(meshExtras).forEach(function (key) { exports[key] = meshExtras[key]; });
Object.keys(particles).forEach(function (key) { exports[key] = particles[key]; });
Object.keys(sprite).forEach(function (key) { exports[key] = sprite[key]; });
Object.keys(spritesheet).forEach(function (key) { exports[key] = spritesheet[key]; });
Object.keys(spriteAnimated).forEach(function (key) { exports[key] = spriteAnimated[key]; });
Object.keys(spriteTiling).forEach(function (key) { exports[key] = spriteTiling[key]; });
Object.keys(text).forEach(function (key) { exports[key] = text[key]; });
Object.keys(textBitmap).forEach(function (key) { exports[key] = textBitmap[key]; });
Object.keys(ticker).forEach(function (key) { exports[key] = ticker[key]; });
//# sourceMappingURL=pixi.js.map
