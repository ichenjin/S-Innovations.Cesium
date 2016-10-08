declare module 'cesium/Promise' {
	class Promise<T>
	{
	constructor(doneHandler?:(obj:T)=>void,errorHandler?:(obj:any)=>void)
	then(result:T);
	}
	export = Promise

}
declare module 'cesium/when' {
	import Promise = require('cesium/Promise');
	function when<T>(promise:Promise<T>, succes:(result)=>void, fail:(result)=>void) : void
	export = when;

}
declare module 'cesium/Core/BingMapsApi' {
	export class BingMapsApi 
	{
		constructor();
		//Members
		static defaultKey: string


		//Methods

	}

}
declare module 'cesium/Core/BoundingSphere' {
	export class BoundingSphere 
	{
		constructor(center? : Cartesian3, radius? : number);
		//Members
		static packedLength: number
		center: Cartesian3
		radius: number


		//Methods
		static clone(sphere : BoundingSphere, result? : BoundingSphere) : BoundingSphere
		static computePlaneDistances(sphere : BoundingSphere, position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		static distanceSquaredTo(sphere : BoundingSphere, cartesian : Cartesian3) : number
		static equals(left? : BoundingSphere, right? : BoundingSphere) : boolean
		static expand(sphere : BoundingSphere, point : Cartesian3, result? : BoundingSphere) : BoundingSphere
		static fromBoundingSpheres(boundingSpheres : Array<BoundingSphere>, result? : BoundingSphere) : BoundingSphere
		static fromCornerPoints(corner? : Cartesian3, oppositeCorner? : Cartesian3, result? : BoundingSphere) : BoundingSphere
		static fromEllipsoid(ellipsoid : Ellipsoid, result? : BoundingSphere) : BoundingSphere
		static fromEncodedCartesianVertices(positionsHigh : Array<number>, positionsLow : Array<number>, result? : BoundingSphere) : BoundingSphere
		static fromOrientedBoundingBox(orientedBoundingBox : OrientedBoundingBox, result? : BoundingSphere) : BoundingSphere
		static fromPoints(positions : Array<Cartesian3>, result? : BoundingSphere) : BoundingSphere
		static fromRectangle2D(rectangle : Rectangle, projection? : any, result? : BoundingSphere) : BoundingSphere
		static fromRectangle3D(rectangle : Rectangle, ellipsoid? : Ellipsoid, surfaceHeight? : number, result? : BoundingSphere) : BoundingSphere
		static fromRectangleWithHeights2D(rectangle : Rectangle, projection? : any, minimumHeight? : number, maximumHeight? : number, result? : BoundingSphere) : BoundingSphere
		static fromVertices(positions : Array<number>, center? : Cartesian3, stride? : number, result? : BoundingSphere) : BoundingSphere
		static intersectPlane(sphere : BoundingSphere, plane : Plane) : Intersect
		static isOccluded(sphere : BoundingSphere, occluder : Occluder) : boolean
		static pack(value : BoundingSphere, array : Array<number>, startingIndex? : number) : Array<number>
		static projectTo2D(sphere : BoundingSphere, projection? : any, result? : BoundingSphere) : BoundingSphere
		static transform(sphere : BoundingSphere, transform : Matrix4, result? : BoundingSphere) : BoundingSphere
		static transformWithoutScale(sphere : BoundingSphere, transform : Matrix4, result? : BoundingSphere) : BoundingSphere
		static union(left : BoundingSphere, right : BoundingSphere, result? : BoundingSphere) : BoundingSphere
		static unpack(array : Array<number>, startingIndex? : number, result? : BoundingSphere) : BoundingSphere
		clone(result? : BoundingSphere) : BoundingSphere
		computePlaneDistances(position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		distanceSquaredTo(cartesian : Cartesian3) : number
		equals(right? : BoundingSphere) : boolean
		intersectPlane(plane : Plane) : Intersect
		isOccluded(occluder : Occluder) : boolean

	}

}
declare module 'cesium/Core/Cartesian2' {
	export class Cartesian2 
	{
		constructor(x? : number, y? : number);
		//Members
		x: number
		y: number
		static packedLength: number
		static UNIT_X: Cartesian2
		static UNIT_Y: Cartesian2
		static ZERO: Cartesian2


		//Methods
		clone(result? : Cartesian2) : Cartesian2
		equals(right? : Cartesian2) : boolean
		equalsEpsilon(right? : Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static add(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static angleBetween(left : Cartesian2, right : Cartesian2) : number
		static clone(cartesian : Cartesian2, result? : Cartesian2) : Cartesian2
		static distance(left : Cartesian2, right : Cartesian2) : number
		static distanceSquared(left : Cartesian2, right : Cartesian2) : number
		static divideByScalar(cartesian : Cartesian2, scalar : number, result : Cartesian2) : Cartesian2
		static dot(left : Cartesian2, right : Cartesian2) : number
		static equals(left? : Cartesian2, right? : Cartesian2) : boolean
		static equalsEpsilon(left? : Cartesian2, right? : Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Cartesian2) : Cartesian2
		static fromCartesian3(cartesian : Cartesian3, result? : Cartesian2) : Cartesian2
		static fromCartesian4(cartesian : Cartesian4, result? : Cartesian2) : Cartesian2
		static fromElements(x : number, y : number, result? : Cartesian2) : Cartesian2
		static lerp(start : Cartesian2, end : Cartesian2, t : number, result : Cartesian2) : Cartesian2
		static magnitude(cartesian : Cartesian2) : number
		static magnitudeSquared(cartesian : Cartesian2) : number
		static maximumByComponent(first : Cartesian2, second : Cartesian2, result : Cartesian2) : Cartesian2
		static maximumComponent(cartesian : Cartesian2) : number
		static minimumByComponent(first : Cartesian2, second : Cartesian2, result : Cartesian2) : Cartesian2
		static minimumComponent(cartesian : Cartesian2) : number
		static mostOrthogonalAxis(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static multiplyByScalar(cartesian : Cartesian2, scalar : number, result : Cartesian2) : Cartesian2
		static multiplyComponents(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static negate(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static normalize(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static pack(value : Cartesian2, array : Array<number>, startingIndex? : number) : Array<number>
		static packArray(array : Array<Cartesian2>, result : Array<number>) : Array<number>
		static subtract(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static unpack(array : Array<number>, startingIndex? : number, result? : Cartesian2) : Cartesian2
		static unpackArray(array : Array<number>, result : Array<Cartesian2>) : Array<Cartesian2>

	}

}
declare module 'cesium/Core/Cartesian3' {
	export class Cartesian3 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_X: Cartesian3
		static UNIT_Y: Cartesian3
		static UNIT_Z: Cartesian3
		static ZERO: Cartesian3


		//Methods
		clone(result? : Cartesian3) : Cartesian3
		equals(right? : Cartesian3) : boolean
		equalsEpsilon(right? : Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static add(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static angleBetween(left : Cartesian3, right : Cartesian3) : number
		static clone(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		static cross(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static distance(left : Cartesian3, right : Cartesian3) : number
		static distanceSquared(left : Cartesian3, right : Cartesian3) : number
		static divideByScalar(cartesian : Cartesian3, scalar : number, result : Cartesian3) : Cartesian3
		static dot(left : Cartesian3, right : Cartesian3) : number
		static equals(left? : Cartesian3, right? : Cartesian3) : boolean
		static equalsEpsilon(left? : Cartesian3, right? : Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Cartesian3) : Cartesian3
		static fromCartesian4(cartesian : Cartesian4, result? : Cartesian3) : Cartesian3
		static fromDegrees(longitude : number, latitude : number, height? : number, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		static fromDegreesArray(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromDegreesArrayHeights(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromElements(x : number, y : number, z : number, result? : Cartesian3) : Cartesian3
		static fromRadians(longitude : number, latitude : number, height? : number, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		static fromRadiansArray(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromRadiansArrayHeights(coordinates : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromSpherical(spherical : Spherical, result? : Cartesian3) : Cartesian3
		static lerp(start : Cartesian3, end : Cartesian3, t : number, result : Cartesian3) : Cartesian3
		static magnitude(cartesian : Cartesian3) : number
		static magnitudeSquared(cartesian : Cartesian3) : number
		static maximumByComponent(first : Cartesian3, second : Cartesian3, result : Cartesian3) : Cartesian3
		static maximumComponent(cartesian : Cartesian3) : number
		static minimumByComponent(first : Cartesian3, second : Cartesian3, result : Cartesian3) : Cartesian3
		static minimumComponent(cartesian : Cartesian3) : number
		static mostOrthogonalAxis(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByScalar(cartesian : Cartesian3, scalar : number, result : Cartesian3) : Cartesian3
		static multiplyComponents(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static negate(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static normalize(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static pack(value : Cartesian3, array : Array<number>, startingIndex? : number) : Array<number>
		static packArray(array : Array<Cartesian3>, result : Array<number>) : Array<number>
		static subtract(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static unpack(array : Array<number>, startingIndex? : number, result? : Cartesian3) : Cartesian3
		static unpackArray(array : Array<number>, result : Array<Cartesian3>) : Array<Cartesian3>

	}

}
declare module 'cesium/Core/Cartesian4' {
	export class Cartesian4 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		w: number
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_W: Cartesian4
		static UNIT_X: Cartesian4
		static UNIT_Y: Cartesian4
		static UNIT_Z: Cartesian4
		static ZERO: Cartesian4


		//Methods
		clone(result? : Cartesian4) : Cartesian4
		equals(right? : Cartesian4) : boolean
		equalsEpsilon(right? : Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static add(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static clone(cartesian : Cartesian4, result? : Cartesian4) : Cartesian4
		static distance(left : Cartesian4, right : Cartesian4) : number
		static distanceSquared(left : Cartesian4, right : Cartesian4) : number
		static divideByScalar(cartesian : Cartesian4, scalar : number, result : Cartesian4) : Cartesian4
		static dot(left : Cartesian4, right : Cartesian4) : number
		static equals(left? : Cartesian4, right? : Cartesian4) : boolean
		static equalsEpsilon(left? : Cartesian4, right? : Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Cartesian4) : Cartesian4
		static fromColor(color : Color, result? : Cartesian4) : Cartesian4
		static fromElements(x : number, y : number, z : number, w : number, result? : Cartesian4) : Cartesian4
		static lerp(start : Cartesian4, end : Cartesian4, t : number, result : Cartesian4) : Cartesian4
		static magnitude(cartesian : Cartesian4) : number
		static magnitudeSquared(cartesian : Cartesian4) : number
		static maximumByComponent(first : Cartesian4, second : Cartesian4, result : Cartesian4) : Cartesian4
		static maximumComponent(cartesian : Cartesian4) : number
		static minimumByComponent(first : Cartesian4, second : Cartesian4, result : Cartesian4) : Cartesian4
		static minimumComponent(cartesian : Cartesian4) : number
		static mostOrthogonalAxis(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static multiplyByScalar(cartesian : Cartesian4, scalar : number, result : Cartesian4) : Cartesian4
		static multiplyComponents(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static negate(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static normalize(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static pack(value : Cartesian4, array : Array<number>, startingIndex? : number) : Array<number>
		static packArray(array : Array<Cartesian4>, result : Array<number>) : Array<number>
		static subtract(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static unpack(array : Array<number>, startingIndex? : number, result? : Cartesian4) : Cartesian4
		static unpackArray(array : Array<number>, result : Array<Cartesian4>) : Array<Cartesian4>

	}

}
declare module 'cesium/Core/Cartographic' {
	export class Cartographic 
	{
		constructor(longitude? : number, latitude? : number, height? : number);
		//Members
		static ZERO: Cartographic
		height: number
		latitude: number
		longitude: number


		//Methods
		static clone(cartographic : Cartographic, result? : Cartographic) : Cartographic
		static equals(left? : Cartographic, right? : Cartographic) : boolean
		static equalsEpsilon(left? : Cartographic, right? : Cartographic, epsilon? : number) : boolean
		static fromCartesian(cartesian : Cartesian3, ellipsoid? : Ellipsoid, result? : Cartographic) : Cartographic
		static fromDegrees(longitude : number, latitude : number, height? : number, result? : Cartographic) : Cartographic
		static fromRadians(longitude : number, latitude : number, height? : number, result? : Cartographic) : Cartographic
		clone(result? : Cartographic) : Cartographic
		equals(right? : Cartographic) : boolean
		equalsEpsilon(right? : Cartographic, epsilon? : number) : boolean
		toString() : string

	}

}
declare module 'cesium/Core/CesiumTerrainProvider' {
	export class CesiumTerrainProvider implements TerrainProvider
	{
		constructor(options? : CesiumTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		requestVertexNormals: boolean
		requestWaterMask: boolean
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests? : boolean) : Promise<TerrainData>|void

	}

}
declare module 'cesium/Core/Clock' {
	export class Clock 
	{
		constructor(options? : ClockOptions);
		//Members
		canAnimate: boolean
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		onTick: Event
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		tick() : JulianDate

	}

}
declare module 'cesium/Core/ClockRange' {
	export class ClockRange 
	{
		constructor();
		//Members
		static CLAMPED: number
		static LOOP_STOP: number
		static UNBOUNDED: number


		//Methods

	}

}
declare module 'cesium/Core/ClockStep' {
	export class ClockStep 
	{
		constructor();
		//Members
		static SYSTEM_CLOCK: number
		static SYSTEM_CLOCK_MULTIPLIER: number
		static TICK_DEPENDENT: number


		//Methods

	}

}
declare module 'cesium/Core/Color' {
	export class Color 
	{
		constructor(red? : number, green? : number, blue? : number, alpha? : number);
		//Members
		static ALICEBLUE: Color
		static ANTIQUEWHITE: Color
		static AQUA: Color
		static AQUAMARINE: Color
		static AZURE: Color
		static BEIGE: Color
		static BISQUE: Color
		static BLACK: Color
		static BLANCHEDALMOND: Color
		static BLUE: Color
		static BLUEVIOLET: Color
		static BROWN: Color
		static BURLYWOOD: Color
		static CADETBLUE: Color
		static CHARTREUSE: Color
		static CHOCOLATE: Color
		static CORAL: Color
		static CORNFLOWERBLUE: Color
		static CORNSILK: Color
		static CRIMSON: Color
		static CYAN: Color
		static DARKBLUE: Color
		static DARKCYAN: Color
		static DARKGOLDENROD: Color
		static DARKGRAY: Color
		static DARKGREEN: Color
		static DARKGREY: Color
		static DARKKHAKI: Color
		static DARKMAGENTA: Color
		static DARKOLIVEGREEN: Color
		static DARKORANGE: Color
		static DARKORCHID: Color
		static DARKRED: Color
		static DARKSALMON: Color
		static DARKSEAGREEN: Color
		static DARKSLATEBLUE: Color
		static DARKSLATEGRAY: Color
		static DARKSLATEGREY: Color
		static DARKTURQUOISE: Color
		static DARKVIOLET: Color
		static DEEPPINK: Color
		static DEEPSKYBLUE: Color
		static DIMGRAY: Color
		static DIMGREY: Color
		static DODGERBLUE: Color
		static FIREBRICK: Color
		static FLORALWHITE: Color
		static FORESTGREEN: Color
		static FUSCHIA: Color
		static GAINSBORO: Color
		static GHOSTWHITE: Color
		static GOLD: Color
		static GOLDENROD: Color
		static GRAY: Color
		static GREEN: Color
		static GREENYELLOW: Color
		static GREY: Color
		static HONEYDEW: Color
		static HOTPINK: Color
		static INDIANRED: Color
		static INDIGO: Color
		static IVORY: Color
		static KHAKI: Color
		static LAVENDAR_BLUSH: Color
		static LAVENDER: Color
		static LAWNGREEN: Color
		static LEMONCHIFFON: Color
		static LIGHTBLUE: Color
		static LIGHTCORAL: Color
		static LIGHTCYAN: Color
		static LIGHTGOLDENRODYELLOW: Color
		static LIGHTGRAY: Color
		static LIGHTGREEN: Color
		static LIGHTGREY: Color
		static LIGHTPINK: Color
		static LIGHTSEAGREEN: Color
		static LIGHTSKYBLUE: Color
		static LIGHTSLATEGRAY: Color
		static LIGHTSLATEGREY: Color
		static LIGHTSTEELBLUE: Color
		static LIGHTYELLOW: Color
		static LIME: Color
		static LIMEGREEN: Color
		static LINEN: Color
		static MAGENTA: Color
		static MAROON: Color
		static MEDIUMAQUAMARINE: Color
		static MEDIUMBLUE: Color
		static MEDIUMORCHID: Color
		static MEDIUMPURPLE: Color
		static MEDIUMSEAGREEN: Color
		static MEDIUMSLATEBLUE: Color
		static MEDIUMSPRINGGREEN: Color
		static MEDIUMTURQUOISE: Color
		static MEDIUMVIOLETRED: Color
		static MIDNIGHTBLUE: Color
		static MINTCREAM: Color
		static MISTYROSE: Color
		static MOCCASIN: Color
		static NAVAJOWHITE: Color
		static NAVY: Color
		static OLDLACE: Color
		static OLIVE: Color
		static OLIVEDRAB: Color
		static ORANGE: Color
		static ORANGERED: Color
		static ORCHID: Color
		static packedLength: number
		static PALEGOLDENROD: Color
		static PALEGREEN: Color
		static PALETURQUOISE: Color
		static PALEVIOLETRED: Color
		static PAPAYAWHIP: Color
		static PEACHPUFF: Color
		static PERU: Color
		static PINK: Color
		static PLUM: Color
		static POWDERBLUE: Color
		static PURPLE: Color
		static RED: Color
		static ROSYBROWN: Color
		static ROYALBLUE: Color
		static SADDLEBROWN: Color
		static SALMON: Color
		static SANDYBROWN: Color
		static SEAGREEN: Color
		static SEASHELL: Color
		static SIENNA: Color
		static SILVER: Color
		static SKYBLUE: Color
		static SLATEBLUE: Color
		static SLATEGRAY: Color
		static SLATEGREY: Color
		static SNOW: Color
		static SPRINGGREEN: Color
		static STEELBLUE: Color
		static TAN: Color
		static TEAL: Color
		static THISTLE: Color
		static TOMATO: Color
		static TRANSPARENT: Color
		static TURQUOISE: Color
		static VIOLET: Color
		static WHEAT: Color
		static WHITE: Color
		static WHITESMOKE: Color
		static YELLOW: Color
		static YELLOWGREEN: Color
		alpha: number
		blue: number
		green: number
		red: number


		//Methods
		static add(left : Color, right : Color, result : Color) : Color
		static byteToFloat(number : number) : number
		static clone(color : Color, result? : Color) : Color
		static divide(left : Color, right : Color, result : Color) : Color
		static divideByScalar(color : Color, scalar : number, result : Color) : Color
		static equals(left : Color, right : Color) : boolean
		static floatToByte(number : number) : number
		static fromAlpha(color : Color, alpha : number, result? : Color) : Color
		static fromBytes(red? : number, green? : number, blue? : number, alpha? : number, result? : Color) : Color
		static fromCartesian4(cartesian : Cartesian4, result? : Color) : Color
		static fromCssColorString(color : string, result? : Color) : Color
		static fromHsl(hue? : number, saturation? : number, lightness? : number, alpha? : number, result? : Color) : Color
		static fromRandom(options? : fromRandomOptions, result? : Color) : Color
		static fromRgba(rgba : number, result? : Color) : Color
		static mod(left : Color, right : Color, result : Color) : Color
		static multiply(left : Color, right : Color, result : Color) : Color
		static multiplyByScalar(color : Color, scalar : number, result : Color) : Color
		static pack(value : Color, array : Array<number>, startingIndex? : number) : Array<number>
		static subtract(left : Color, right : Color, result : Color) : Color
		static unpack(array : Array<number>, startingIndex? : number, result? : Color) : Color
		brighten(magnitude : number, result : Color) : Color
		clone(result? : Color) : Color
		darken(magnitude : number, result : Color) : Color
		equals(other : Color) : boolean
		equalsEpsilon(other : Color, epsilon? : number) : boolean
		toBytes(result? : Array<number>) : Array<number>
		toCssColorString() : string
		toRgba() : number
		toString() : string
		withAlpha(alpha : number, result? : Color) : Color

	}

}
declare module 'cesium/Core/Credit' {
	export class Credit 
	{
		constructor(text? : string, imageUrl? : string, link? : string);
		//Members
		imageUrl: string
		link: string
		text: string


		//Methods
		static equals(left : Credit, right : Credit) : boolean
		equals(credits : Credit) : boolean
		hasImage() : boolean
		hasLink() : boolean

	}

}
declare module 'cesium/Core/DefaultProxy' {
	export class DefaultProxy 
	{
		constructor(proxy : string);
		//Members


		//Methods
		getURL(resource : string) : string

	}

}
declare module 'cesium/Core/defaultValue' {
	function defaultValue<T>(a,b:T) : T;
	export = defaultValue

}
declare module 'cesium/Core/DeveloperError' {
	export class DeveloperError 
	{
		constructor(message? : string);
		//Members
		message: string
		name: string
		stack: string


		//Methods

	}

}
declare module 'cesium/Core/DistanceDisplayCondition' {
	export class DistanceDisplayCondition 
	{
		constructor(near? : number, far? : number);
		//Members
		far: number
		near: number


		//Methods
		static clone(value? : DistanceDisplayCondition, result? : DistanceDisplayCondition) : DistanceDisplayCondition
		static equals(left : DistanceDisplayCondition, right : DistanceDisplayCondition) : boolean
		clone(result? : DistanceDisplayCondition) : DistanceDisplayCondition
		equals(other : DistanceDisplayCondition) : boolean

	}

}
declare module 'cesium/Core/EasingFunction' {
	export class EasingFunction 
	{
		constructor();
		//Members
		static BACK_IN: any
		static BACK_IN_OUT: any
		static BACK_OUT: any
		static BOUNCE_IN: any
		static BOUNCE_IN_OUT: any
		static BOUNCE_OUT: any
		static CIRCULAR_IN: any
		static CIRCULAR_IN_OUT: any
		static CIRCULAR_OUT: any
		static CUBIC_IN: any
		static CUBIC_IN_OUT: any
		static CUBIC_OUT: any
		static ELASTIC_IN: any
		static ELASTIC_IN_OUT: any
		static ELASTIC_OUT: any
		static EXPONENTIAL_IN: any
		static EXPONENTIAL_IN_OUT: any
		static EXPONENTIAL_OUT: any
		static LINEAR_NONE: any
		static QUADRACTIC_IN: any
		static QUADRACTIC_IN_OUT: any
		static QUADRACTIC_OUT: any
		static QUARTIC_IN: any
		static QUARTIC_IN_OUT: any
		static QUARTIC_OUT: any
		static QUINTIC_IN: any
		static QUINTIC_IN_OUT: any
		static QUINTIC_OUT: any
		static SINUSOIDAL_IN: any
		static SINUSOIDAL_IN_OUT: any
		static SINUSOIDAL_OUT: any


		//Methods

	}

}
declare module 'cesium/Core/Ellipsoid' {
	export class Ellipsoid 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		static MOON: Ellipsoid
		static packedLength: number
		static UNIT_SPHERE: Ellipsoid
		static WGS84: Ellipsoid
		maximumRadius: number
		minimumRadius: number
		oneOverRadii: Cartesian3
		oneOverRadiiSquared: Cartesian3
		radii: Cartesian3
		radiiSquared: Cartesian3
		radiiToTheFourth: Cartesian3


		//Methods
		static clone(ellipsoid : Ellipsoid, result? : Ellipsoid) : Ellipsoid
		static fromCartesian3(radii? : Cartesian3) : Ellipsoid
		static pack(value : Ellipsoid, array : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array : Array<number>, startingIndex? : number, result? : Ellipsoid) : Ellipsoid
		cartesianArrayToCartographicArray(cartesians : Array<Cartesian3>, result? : Array<Cartographic>) : Array<Cartographic>
		cartesianToCartographic(cartesian : Cartesian3, result? : Cartographic) : Cartographic
		cartographicArrayToCartesianArray(cartographics : Array<Cartographic>, result? : Array<Cartesian3>) : Array<Cartesian3>
		cartographicToCartesian(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		clone(result? : Ellipsoid) : Ellipsoid
		equals(right? : Ellipsoid) : boolean
		geocentricSurfaceNormal(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		geodeticSurfaceNormal(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		geodeticSurfaceNormalCartographic(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		scaleToGeocentricSurface(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		scaleToGeodeticSurface(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		toString() : string
		transformPositionFromScaledSpace(position : Cartesian3, result? : Cartesian3) : Cartesian3
		transformPositionToScaledSpace(position : Cartesian3, result? : Cartesian3) : Cartesian3

	}

}
declare module 'cesium/Core/Event' {
	export class Event 
	{
		constructor();
		//Members
		numberOfListeners: number


		//Methods
		addEventListener(listener : (()=>void), scope? : any) : any
		raiseEvent(args : any) : void
		removeEventListener(listener : (()=>void), scope? : any) : boolean

	}

}
declare module 'cesium/Core/ExtrapolationType' {
	export class ExtrapolationType 
	{
		constructor();
		//Members
		static EXTRAPOLATE: number
		static HOLD: number
		static NONE: number


		//Methods

	}

}
declare module 'cesium/Core/GeographicTilingScheme' {
	export class GeographicTilingScheme 
	{
		constructor(options? : GeographicTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result? : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result? : any) : Rectangle

	}

}
declare module 'cesium/Core/GregorianDate' {
	export class GregorianDate 
	{
		constructor();
		//Members
		day: number
		hour: number
		isLeapSecond: boolean
		millisecond: number
		minute: number
		month: number
		second: number
		year: number


		//Methods

	}

}
declare module 'cesium/Core/HeadingPitchRange' {
	export class HeadingPitchRange 
	{
		constructor(heading? : number, pitch? : number, range? : number);
		//Members
		heading: number
		pitch: number
		range: number


		//Methods
		static clone(hpr : HeadingPitchRange, result? : HeadingPitchRange) : HeadingPitchRange

	}

}
declare module 'cesium/Core/InterpolationAlgorithm' {
	export interface InterpolationAlgorithm 
	{
		//Members
		type: string


		//Methods
		getRequiredDataPoints(degree : number) : number
		interpolate(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, inputOrder : number, outputOrder : number, result? : Array<number>) : Array<number>
		interpolateOrderZero(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, result? : Array<number>) : Array<number>

	}

}
declare module 'cesium/Core/Intersect' {
	export class Intersect 
	{
		constructor();
		//Members
		static INSIDE: number
		static INTERSECTING: number
		static OUTSIDE: number


		//Methods

	}

}
declare module 'cesium/Core/Interval' {
	export class Interval 
	{
		constructor(start? : number, stop? : number);
		//Members
		start: number
		stop: number


		//Methods

	}

}
declare module 'cesium/Core/isArray' {
	function isArray(value : any) : boolean;
	export = isArray

}
declare module 'cesium/Core/JulianDate' {
	export class JulianDate 
	{
		constructor(julianDayNumber? : number, secondsOfDay? : number, timeStandard? : TimeStandard);
		//Members
		static leapSeconds: Array<LeapSecond>
		dayNumber: number
		secondsOfDay: number


		//Methods
		static addDays(julianDate : JulianDate, days : number, result : JulianDate) : JulianDate
		static addHours(julianDate : JulianDate, hours : number, result : JulianDate) : JulianDate
		static addMinutes(julianDate : JulianDate, minutes : number, result : JulianDate) : JulianDate
		static addSeconds(julianDate : JulianDate, seconds : number, result : JulianDate) : JulianDate
		static clone(julianDate : JulianDate, result? : JulianDate) : JulianDate
		static compare(left : JulianDate, right : JulianDate) : number
		static computeTaiMinusUtc(julianDate : JulianDate) : number
		static daysDifference(left : JulianDate, right : JulianDate) : number
		static equals(left? : JulianDate, right? : JulianDate) : boolean
		static equalsEpsilon(left? : JulianDate, right? : JulianDate, epsilon? : number) : boolean
		static fromDate(date : Date, result? : JulianDate) : JulianDate
		static fromIso8601(iso8601String : string, result? : JulianDate) : JulianDate
		static greaterThan(left : JulianDate, right : JulianDate) : boolean
		static greaterThanOrEquals(left : JulianDate, right : JulianDate) : boolean
		static lessThan(left : JulianDate, right : JulianDate) : boolean
		static lessThanOrEquals(left : JulianDate, right : JulianDate) : boolean
		static now(result? : JulianDate) : JulianDate
		static secondsDifference(left : JulianDate, right : JulianDate) : number
		static toDate(julianDate : JulianDate) : Date
		static toGregorianDate(julianDate : JulianDate, result? : GregorianDate) : GregorianDate
		static toIso8601(julianDate : JulianDate, precision? : number) : string
		static totalDays(julianDate : JulianDate) : number
		clone(result? : JulianDate) : JulianDate
		equals(right? : JulianDate) : boolean
		equalsEpsilon(right? : JulianDate, epsilon? : number) : boolean
		toString() : string

	}

}
declare module 'cesium/Core/LeapSecond' {
	export class LeapSecond 
	{
		constructor(date? : JulianDate, offset? : number);
		//Members
		julianDate: JulianDate
		offset: number


		//Methods

	}

}
declare module 'cesium/Core/MapProjection' {
	export class MapProjection 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid


		//Methods
		project(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result? : Cartographic) : Cartographic

	}

}
declare module 'cesium/Core/Math' {
	export class Math 
	{
		constructor();
		//Members
		static DEGREES_PER_RADIAN: number
		static EPSILON1: number
		static EPSILON2: number
		static EPSILON3: number
		static EPSILON4: number
		static EPSILON5: number
		static EPSILON6: number
		static EPSILON7: number
		static EPSILON8: number
		static EPSILON9: number
		static EPSILON10: number
		static EPSILON11: number
		static EPSILON12: number
		static EPSILON13: number
		static EPSILON14: number
		static EPSILON15: number
		static EPSILON16: number
		static EPSILON17: number
		static EPSILON18: number
		static EPSILON19: number
		static EPSILON20: number
		static GRAVITATIONALPARAMETER: number
		static LUNAR_RADIUS: number
		static ONE_OVER_PI: number
		static ONE_OVER_TWO_PI: number
		static PI: number
		static PI_OVER_FOUR: number
		static PI_OVER_SIX: number
		static PI_OVER_THREE: number
		static PI_OVER_TWO: number
		static RADIANS_PER_ARCSECOND: number
		static RADIANS_PER_DEGREE: number
		static SIXTY_FOUR_KILOBYTES: number
		static SOLAR_RADIUS: number
		static THREE_PI_OVER_TWO: number
		static TWO_PI: number


		//Methods
		static acosClamped(value : number) : number
		static asinClamped(value : number) : number
		static chordLength(angle : number, radius : number) : number
		static clamp(value : number, min : number, max : number) : number
		static clampToLatitudeRange(angle : number) : number
		static convertLongitudeRange(angle : number) : number
		static cosh(value : number) : number
		static equalsEpsilon(left : number, right : number, relativeEpsilon : number, absoluteEpsilon? : number) : boolean
		static factorial(n : number) : number
		static fromSNorm(value : number, rangeMax? : number) : number
		static incrementWrap(n? : number, maximumValue? : number, minimumValue? : number) : number
		static isPowerOfTwo(n : number) : boolean
		static lerp(p : number, q : number, time : number) : number
		static logBase(number : number, base : number) : number
		static mod(m : number, n : number) : number
		static negativePiToPi(angle : number) : number
		static nextPowerOfTwo(n : number) : number
		static nextRandomNumber() : number
		static setRandomNumberSeed(seed : number) : void
		static sign(value : number) : number
		static signNotZero(value : number) : number
		static sinh(value : number) : number
		static toDegrees(radians : number) : number
		static toRadians(degrees : number) : number
		static toSNorm(value : number, rangeMax? : number) : number
		static zeroToTwoPi(angle : number) : number

	}

}
declare module 'cesium/Core/Matrix3' {
	export class Matrix3 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static IDENTITY: Matrix3
		static packedLength: number
		static ZERO: Matrix3


		//Methods
		clone(result? : Matrix3) : Matrix3
		equals(right? : Matrix3) : boolean
		equalsEpsilon(right? : Matrix3, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix3, result : Matrix3) : Matrix3
		static add(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static clone(matrix : Matrix3, result? : Matrix3) : Matrix3
		static computeEigenDecomposition(matrix : Matrix3, result? : any) : Object
		static determinant(matrix : Matrix3) : number
		static equals(left? : Matrix3, right? : Matrix3) : boolean
		static equalsEpsilon(left? : Matrix3, right? : Matrix3, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Matrix3) : Matrix3
		static fromColumnMajorArray(values : Array<number>, result? : Matrix3) : Matrix3
		static fromCrossProduct(the : Cartesian3, result? : Matrix3) : Matrix3
		static fromQuaternion(quaternion : Quaternion, result? : Matrix3) : Matrix3
		static fromRotationX(angle : number, result? : Matrix3) : Matrix3
		static fromRotationY(angle : number, result? : Matrix3) : Matrix3
		static fromRotationZ(angle : number, result? : Matrix3) : Matrix3
		static fromRowMajorArray(values : Array<number>, result? : Matrix3) : Matrix3
		static fromScale(scale : Cartesian3, result? : Matrix3) : Matrix3
		static fromUniformScale(scale : number, result? : Matrix3) : Matrix3
		static getColumn(matrix : Matrix3, index : number, result : Cartesian3) : Cartesian3
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix3) : number
		static getRow(matrix : Matrix3, index : number, result : Cartesian3) : Cartesian3
		static getScale(matrix : Matrix3, result : Cartesian3) : Cartesian3
		static inverse(matrix : Matrix3, result : Matrix3) : Matrix3
		static multiply(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static multiplyByScalar(matrix : Matrix3, scalar : number, result : Matrix3) : Matrix3
		static multiplyByScale(matrix : Matrix3, scale : Cartesian3, result : Matrix3) : Matrix3
		static multiplyByVector(matrix : Matrix3, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static negate(matrix : Matrix3, result : Matrix3) : Matrix3
		static pack(value : Matrix3, array : Array<number>, startingIndex? : number) : Array<number>
		static setColumn(matrix : Matrix3, index : number, cartesian : Cartesian3, result : Matrix3) : Matrix3
		static setRow(matrix : Matrix3, index : number, cartesian : Cartesian3, result : Matrix3) : Matrix3
		static subtract(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static toArray(matrix : Matrix3, result? : Array<number>) : Array<number>
		static transpose(matrix : Matrix3, result : Matrix3) : Matrix3
		static unpack(array : Array<number>, startingIndex? : number, result? : Matrix3) : Matrix3

	}

}
declare module 'cesium/Core/Matrix4' {
	export class Matrix4 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column3Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column3Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number, column3Row2? : number, column0Row3? : number, column1Row3? : number, column2Row3? : number, column3Row3? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN0ROW3: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN1ROW3: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static COLUMN2ROW3: number
		static COLUMN3ROW0: number
		static COLUMN3ROW1: number
		static COLUMN3ROW2: number
		static COLUMN3ROW3: number
		static IDENTITY: Matrix4
		static packedLength: number
		static ZERO: Matrix4


		//Methods
		clone(result? : Matrix4) : Matrix4
		equals(right? : Matrix4) : boolean
		equalsEpsilon(right? : Matrix4, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix4, result : Matrix4) : Matrix4
		static add(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static clone(matrix : Matrix4, result? : Matrix4) : Matrix4
		static computeInfinitePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, result : Matrix4) : Matrix4
		static computeOrthographicOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computePerspectiveFieldOfView(fovY : number, aspectRatio : number, near : number, far : number, result : Matrix4) : Matrix4
		static computePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computeView(position : Cartesian3, direction : Cartesian3, up : Cartesian3, right : Cartesian3, result : Matrix4) : Matrix4
		static computeViewportTransformation(viewport? : any, nearDepthRange? : number, farDepthRange? : number, result? : Matrix4) : Matrix4
		static equals(left? : Matrix4, right? : Matrix4) : boolean
		static equalsEpsilon(left? : Matrix4, right? : Matrix4, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex? : number, result? : Matrix4) : Matrix4
		static fromCamera(camera : Camera, result? : Matrix4) : Matrix4
		static fromColumnMajorArray(values : Array<number>, result? : Matrix4) : Matrix4
		static fromRotationTranslation(rotation : Matrix3, translation? : Cartesian3, result? : Matrix4) : Matrix4
		static fromRowMajorArray(values : Array<number>, result? : Matrix4) : Matrix4
		static fromScale(scale : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslation(translation : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslationQuaternionRotationScale(translation : Cartesian3, rotation : Quaternion, scale : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslationRotationScale(translationRotationScale : TranslationRotationScale, result? : Matrix4) : Matrix4
		static fromUniformScale(scale : number, result? : Matrix4) : Matrix4
		static getColumn(matrix : Matrix4, index : number, result : Cartesian4) : Cartesian4
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix4) : number
		static getRotation(matrix : Matrix4, result : Matrix3) : Matrix3
		static getRow(matrix : Matrix4, index : number, result : Cartesian4) : Cartesian4
		static getScale(matrix : Matrix4, result : Cartesian3) : Cartesian3
		static getTranslation(matrix : Matrix4, result : Cartesian3) : Cartesian3
		static inverse(matrix : Matrix4, result : Matrix4) : Matrix4
		static inverseTransformation(matrix : Matrix4, result : Matrix4) : Matrix4
		static multiply(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static multiplyByMatrix3(matrix : Matrix4, rotation : Matrix3, result : Matrix4) : Matrix4
		static multiplyByPoint(matrix : Matrix4, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByPointAsVector(matrix : Matrix4, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByScalar(matrix : Matrix4, scalar : number, result : Matrix4) : Matrix4
		static multiplyByScale(matrix : Matrix4, scale : Cartesian3, result : Matrix4) : Matrix4
		static multiplyByTranslation(matrix : Matrix4, translation : Cartesian3, result : Matrix4) : Matrix4
		static multiplyByUniformScale(matrix : Matrix4, scale : number, result : Matrix4) : Matrix4
		static multiplyByVector(matrix : Matrix4, cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static multiplyTransformation(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static negate(matrix : Matrix4, result : Matrix4) : Matrix4
		static pack(value : Matrix4, array : Array<number>, startingIndex? : number) : Array<number>
		static setColumn(matrix : Matrix4, index : number, cartesian : Cartesian4, result : Matrix4) : Matrix4
		static setRow(matrix : Matrix4, index : number, cartesian : Cartesian4, result : Matrix4) : Matrix4
		static setTranslation(matrix : Matrix4, translation : Cartesian3, result : Cartesian4) : Matrix4
		static subtract(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static toArray(matrix : Matrix4, result? : Array<number>) : Array<number>
		static transpose(matrix : Matrix4, result : Matrix4) : Matrix4
		static unpack(array : Array<number>, startingIndex? : number, result? : Matrix4) : Matrix4

	}

}
declare module 'cesium/Core/Occluder' {
	export class Occluder 
	{
		constructor(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3);
		//Members
		cameraPosition: Cartesian3
		position: Cartesian3
		radius: number


		//Methods
		static computeOccludeePoint(occluderBoundingSphere : BoundingSphere, occludeePosition : Cartesian3, positions : Array<Cartesian3>) : Object
		static computeOccludeePointFromRectangle(rectangle : Rectangle, ellipsoid? : Ellipsoid) : Object
		static fromBoundingSphere(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3, result? : Occluder) : Occluder
		computeVisibility(occludeeBS : BoundingSphere) : number
		isBoundingSphereVisible(occludee : BoundingSphere) : boolean
		isPointVisible(occludee : Cartesian3) : boolean

	}

}
declare module 'cesium/Core/OrientedBoundingBox' {
	export class OrientedBoundingBox 
	{
		constructor(center? : Cartesian3, halfAxes? : Matrix3);
		//Members
		center: Cartesian3
		halfAxes: Matrix3


		//Methods
		static clone(box : OrientedBoundingBox, result? : OrientedBoundingBox) : OrientedBoundingBox
		static computePlaneDistances(box : OrientedBoundingBox, position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		static distanceSquaredTo(box : OrientedBoundingBox, cartesian : Cartesian3) : number
		static equals(left : OrientedBoundingBox, right : OrientedBoundingBox) : boolean
		static fromPoints(positions : Array<Cartesian3>, result? : OrientedBoundingBox) : OrientedBoundingBox
		static fromRectangle(rectangle : Rectangle, minimumHeight? : number, maximumHeight? : number, ellipsoid? : Ellipsoid, result? : OrientedBoundingBox) : OrientedBoundingBox
		static intersectPlane(box : OrientedBoundingBox, plane : Plane) : Intersect
		static isOccluded(box : OrientedBoundingBox, occluder : Occluder) : boolean
		clone(result? : OrientedBoundingBox) : OrientedBoundingBox
		computePlaneDistances(position : Cartesian3, direction : Cartesian3, result? : Interval) : Interval
		distanceSquaredTo(cartesian : Cartesian3) : number
		equals(right? : OrientedBoundingBox) : boolean
		intersectPlane(plane : Plane) : Intersect
		isOccluded(occluder : Occluder) : boolean

	}

}
declare module 'cesium/Core/Packable' {
	export interface Packable 
	{
		//Members
		packedLength: number


		//Methods
		pack(value : any, array : Array<number>, startingIndex? : number) : void
		unpack(array : Array<number>, startingIndex? : number, result? : any) : Object

	}

}
declare module 'cesium/Core/Plane' {
	export class Plane 
	{
		constructor(normal : Cartesian3, distance : number);
		//Members
		static ORIGIN_XY_PLANE: Plane
		static ORIGIN_YZ_PLANE: Plane
		static ORIGIN_ZX_PLANE: Plane
		distance: number
		normal: Cartesian3


		//Methods
		static fromCartesian4(coefficients : Cartesian4, result? : Plane) : Plane
		static fromPointNormal(point : Cartesian3, normal : Cartesian3, result? : Plane) : Plane
		static getPointDistance(plane : Plane, point : Cartesian3) : number

	}

}
declare module 'cesium/Core/Quaternion' {
	export class Quaternion 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		static IDENTITY: Quaternion
		static packedInterpolationLength: number
		static packedLength: number
		static ZERO: Quaternion
		w: number
		x: number
		y: number
		z: number


		//Methods
		static add(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static clone(quaternion : Quaternion, result? : Quaternion) : Quaternion
		static computeAngle(quaternion : Quaternion) : number
		static computeAxis(quaternion : Quaternion, result : Cartesian3) : Cartesian3
		static computeInnerQuadrangle(q0 : Quaternion, q1 : Quaternion, q2 : Quaternion, result : Quaternion) : Quaternion
		static conjugate(quaternion : Quaternion, result : Quaternion) : Quaternion
		static convertPackedArrayForInterpolation(packedArray : Array<number>, startingIndex? : number, lastIndex? : number, result? : Array<number>) : void
		static divideByScalar(quaternion : Quaternion, scalar : number, result : Quaternion) : Quaternion
		static dot(left : Quaternion, right : Quaternion) : number
		static equals(left? : Quaternion, right? : Quaternion) : boolean
		static equalsEpsilon(left? : Quaternion, right? : Quaternion, epsilon? : number) : boolean
		static exp(cartesian : Cartesian3, result : Quaternion) : Quaternion
		static fastSlerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static fastSquad(q0 : Quaternion, q1 : Quaternion, s0 : Quaternion, s1 : Quaternion, t : number, result : Quaternion) : Quaternion
		static fromAxisAngle(axis : Cartesian3, angle : number, result? : Quaternion) : Quaternion
		static fromHeadingPitchRoll(heading : number, pitch : number, roll : number, result? : Quaternion) : Quaternion
		static fromRotationMatrix(matrix : Matrix3, result? : Quaternion) : Quaternion
		static inverse(quaternion : Quaternion, result : Quaternion) : Quaternion
		static lerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static log(quaternion : Quaternion, result : Cartesian3) : Cartesian3
		static magnitude(quaternion : Quaternion) : number
		static magnitudeSquared(quaternion : Quaternion) : number
		static multiply(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static multiplyByScalar(quaternion : Quaternion, scalar : number, result : Quaternion) : Quaternion
		static negate(quaternion : Quaternion, result : Quaternion) : Quaternion
		static normalize(quaternion : Quaternion, result : Quaternion) : Quaternion
		static pack(value : Quaternion, array : Array<number>, startingIndex? : number) : Array<number>
		static slerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static squad(q0 : Quaternion, q1 : Quaternion, s0 : Quaternion, s1 : Quaternion, t : number, result : Quaternion) : Quaternion
		static subtract(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static unpack(array : Array<number>, startingIndex? : number, result? : Quaternion) : Quaternion
		static unpackInterpolationResult(array : Array<number>, sourceArray : Array<number>, startingIndex? : number, lastIndex? : number, result? : Quaternion) : Quaternion
		clone(result? : Quaternion) : Quaternion
		equals(right? : Quaternion) : boolean
		equalsEpsilon(right? : Quaternion, epsilon? : number) : boolean
		toString() : string

	}

}
declare module 'cesium/Core/Ray' {
	export class Ray 
	{
		constructor(origin? : Cartesian3, direction? : Cartesian3);
		//Members
		direction: Cartesian3
		origin: Cartesian3


		//Methods
		static getPoint(ray : Ray, t : number, result? : Cartesian3) : Cartesian3

	}

}
declare module 'cesium/Core/Rectangle' {
	export class Rectangle 
	{
		constructor(west? : number, south? : number, east? : number, north? : number);
		//Members
		static MAX_VALUE: Rectangle
		static packedLength: number
		east: number
		height: number
		north: number
		south: number
		west: number
		width: number


		//Methods
		static center(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static clone(rectangle : Rectangle, result? : Rectangle) : Rectangle
		static computeHeight(rectangle : Rectangle) : number
		static computeWidth(rectangle : Rectangle) : number
		static contains(rectangle : Rectangle, cartographic : Cartographic) : boolean
		static equals(left? : Rectangle, right? : Rectangle) : boolean
		static expand(rectangle : Rectangle, cartographic : Cartographic, result? : Rectangle) : Rectangle
		static fromCartesianArray(cartesians : Array<Cartesian3>, ellipsoid? : Ellipsoid, result? : Rectangle) : Rectangle
		static fromCartographicArray(cartographics : Array<Cartographic>, result? : Rectangle) : Rectangle
		static fromDegrees(west? : number, south? : number, east? : number, north? : number, result? : Rectangle) : Rectangle
		static intersection(rectangle : Rectangle, otherRectangle : Rectangle, result? : Rectangle) : Rectangle|void
		static northeast(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static northwest(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static pack(value : Rectangle, array : Array<number>, startingIndex? : number) : Array<number>
		static southeast(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static southwest(rectangle : Rectangle, result? : Cartographic) : Cartographic
		static subsample(rectangle : Rectangle, ellipsoid? : Ellipsoid, surfaceHeight? : number, result? : Array<Cartesian3>) : Array<Cartesian3>
		static union(rectangle : Rectangle, otherRectangle : Rectangle, result? : Rectangle) : Rectangle
		static unpack(array : Array<number>, startingIndex? : number, result? : Rectangle) : Rectangle
		static validate(rectangle : Rectangle) : void
		clone(result? : Rectangle) : Rectangle
		equals(other? : Rectangle) : boolean
		equalsEpsilon(other? : Rectangle, epsilon? : number) : boolean

	}

}
declare module 'cesium/Core/ReferenceFrame' {
	export class ReferenceFrame 
	{
		constructor();
		//Members
		static FIXED: number
		static INERTIAL: number


		//Methods

	}

}
declare module 'cesium/Core/requestAnimationFrame' {
	function requestAnimationFrame(callback : any) : number;
	export = requestAnimationFrame

}
declare module 'cesium/Core/ScreenSpaceEventHandler' {
	export class ScreenSpaceEventHandler 
	{
		constructor(element? : HTMLCanvasElement);
		//Members
		static mouseEmulationIgnoreMilliseconds: any


		//Methods
		destroy() : void
		getInputAction(type : number, modifier? : number) : void
		isDestroyed() : boolean
		removeInputAction(type : number, modifier? : number) : void
		setInputAction(action : (()=>void), type : number, modifier? : number) : void

	}

}
declare module 'cesium/Core/ScreenSpaceEventType' {
	export class ScreenSpaceEventType 
	{
		constructor();
		//Members
		static LEFT_CLICK: number
		static LEFT_DOUBLE_CLICK: number
		static LEFT_DOWN: number
		static LEFT_UP: number
		static MIDDLE_CLICK: number
		static MIDDLE_DOUBLE_CLICK: number
		static MIDDLE_DOWN: number
		static MIDDLE_UP: number
		static MOUSE_MOVE: number
		static PINCH_END: number
		static PINCH_MOVE: number
		static PINCH_START: number
		static RIGHT_CLICK: number
		static RIGHT_DOUBLE_CLICK: number
		static RIGHT_DOWN: number
		static RIGHT_UP: number
		static WHEEL: number


		//Methods

	}

}
declare module 'cesium/Core/Spherical' {
	export class Spherical 
	{
		constructor(clock? : number, cone? : number, magnitude? : number);
		//Members


		//Methods
		static clone(spherical : Spherical, result? : Spherical) : Spherical
		static equals(left : Spherical, right : Spherical) : boolean
		static equalsEpsilon(left : Spherical, right : Spherical, epsilon? : number) : boolean
		static fromCartesian3(cartesian3 : Cartesian3, spherical? : Spherical) : Spherical
		static normalize(spherical : Spherical, result? : Spherical) : Spherical
		clone(result? : Spherical) : Spherical
		equals(other : Spherical) : boolean
		equalsEpsilon(other : Spherical, epsilon : number) : boolean
		toString() : string

	}

}
declare module 'cesium/Core/TerrainData' {
	export class TerrainData 
	{
		constructor();
		//Members
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle : Rectangle, longitude : number, latitude : number) : number
		isChildAvailable(thisX : number, thisY : number, childX : number, childY : number) : boolean
		upsample(tilingScheme : TilingScheme, thisX : number, thisY : number, thisLevel : number, descendantX : number, descendantY : number, descendantLevel : number) : Promise<TerrainData>|void
		wasCreatedByUpsampling() : boolean

	}

}
declare module 'cesium/Core/TerrainProvider' {
	export class TerrainProvider 
	{
		constructor();
		//Members
		static heightmapTerrainQuality: number
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: TilingScheme


		//Methods
		static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid : Ellipsoid, tileImageWidth : number, numberOfTilesAtLevelZero : number) : number
		static getRegularGridIndices(width : number, height : number) : Uint16Array
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests? : boolean) : Promise<TerrainData>|void

	}

}
declare module 'cesium/Core/TilingScheme' {
	export class TilingScheme 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result? : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result? : any) : Rectangle

	}

}
declare module 'cesium/Core/TimeInterval' {
	export class TimeInterval 
	{
		constructor(options? : TimeIntervalOptions);
		//Members
		static EMPTY: TimeInterval
		data: Object
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		start: JulianDate
		stop: JulianDate


		//Methods
		static clone(timeInterval? : TimeInterval, result? : TimeInterval) : TimeInterval
		static contains(timeInterval : TimeInterval, julianDate : JulianDate) : boolean
		static equals(left? : TimeInterval, right? : TimeInterval, dataComparer? : any) : boolean
		static equalsEpsilon(left? : TimeInterval, right? : TimeInterval, epsilon? : number, dataComparer? : any) : boolean
		static fromIso8601(options? : fromIso8601Options, result? : TimeInterval) : TimeInterval
		static intersect(left : TimeInterval, right? : TimeInterval, result? : TimeInterval, mergeCallback? : any) : TimeInterval
		static toIso8601(timeInterval : TimeInterval, precision? : number) : string
		clone(result? : TimeInterval) : TimeInterval
		equals(right? : TimeInterval, dataComparer? : any) : boolean
		equalsEpsilon(right? : TimeInterval, epsilon? : number, dataComparer? : any) : boolean
		toString() : string

	}

}
declare module 'cesium/Core/TimeIntervalCollection' {
	export class TimeIntervalCollection 
	{
		constructor(intervals? : Array<TimeInterval>);
		//Members
		changedEvent: Event
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		length: number
		start: JulianDate
		stop: JulianDate


		//Methods
		addInterval(interval : TimeInterval, dataComparer? : any) : void
		contains(julianDate : JulianDate) : boolean
		equals(right? : TimeIntervalCollection, dataComparer? : any) : boolean
		findDataForIntervalContainingDate(date : JulianDate) : Object
		findInterval(options? : findIntervalOptions) : TimeInterval
		findIntervalContainingDate(date : JulianDate) : TimeInterval|void
		get(index : number) : TimeInterval
		indexOf(date : JulianDate) : number
		intersect(other : TimeIntervalCollection, dataComparer? : any, mergeCallback? : any) : TimeIntervalCollection
		removeAll() : void
		removeInterval(interval : TimeInterval) : void

	}

}
declare module 'cesium/Core/TimeStandard' {
	export class TimeStandard 
	{
		constructor();
		//Members
		static TAI: any
		static UTC: any


		//Methods

	}

}
declare module 'cesium/Core/Transforms' {
	export class Transforms 
	{
		constructor();
		//Members


		//Methods
		static computeFixedToIcrfMatrix(date : JulianDate, result? : Matrix3) : Matrix3
		static computeIcrfToFixedMatrix(date : JulianDate, result? : Matrix3) : Matrix3
		static computeTemeToPseudoFixedMatrix(date : JulianDate, result? : Matrix3) : Matrix3
		static eastNorthUpToFixedFrame(origin : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static headingPitchRollQuaternion(origin : Cartesian3, heading : number, pitch : number, roll : number, ellipsoid? : Ellipsoid, result? : Quaternion) : Quaternion
		static headingPitchRollToFixedFrame(origin : Cartesian3, heading : number, pitch : number, roll : number, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static northEastDownToFixedFrame(origin : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static northUpEastToFixedFrame(origin : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static pointToWindowCoordinates(modelViewProjectionMatrix : Matrix4, viewportTransformation : Matrix4, point : Cartesian3, result? : Cartesian2) : Cartesian2
		static preloadIcrfFixed(timeInterval : TimeInterval) : Promise<void>

	}

}
declare module 'cesium/Core/TranslationRotationScale' {
	export class TranslationRotationScale 
	{
		constructor(translation? : Cartesian3, rotation? : Quaternion, scale? : Cartesian3);
		//Members
		rotation: Quaternion
		scale: Cartesian3
		translation: Cartesian3


		//Methods
		equals(right? : TranslationRotationScale) : boolean

	}

}
declare module 'cesium/Core/WebMercatorProjection' {
	export class WebMercatorProjection 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		static MaximumLatitude: number
		ellipsoid: Ellipsoid


		//Methods
		static geodeticLatitudeToMercatorAngle(latitude : number) : number
		static mercatorAngleToGeodeticLatitude(mercatorAngle : number) : number
		project(cartographic : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result? : Cartographic) : Cartographic

	}

}
declare module 'cesium/Core/WebMercatorTilingScheme' {
	export class WebMercatorTilingScheme 
	{
		constructor(options? : WebMercatorTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result? : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result? : any) : Rectangle

	}

}
declare module 'cesium/DataSources/BillboardGraphics' {
	export class BillboardGraphics 
	{
		constructor(options? : BillboardGraphicsOptions);
		//Members
		alignedAxis: Property|any
		color: Property|any
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		distanceDisplayCondition: Property|any
		eyeOffset: Property|any
		height: Property|any
		heightReference: Property|any
		horizontalOrigin: Property|any
		image: Property|any
		imageSubRegion: Property|any
		pixelOffset: Property|any
		pixelOffsetScaleByDistance: Property|any
		rotation: Property|any
		scale: Property|any
		scaleByDistance: Property|any
		show: Property|any
		sizeInMeters: Property|any
		translucencyByDistance: Property|any
		verticalOrigin: Property|any
		width: Property|any


		//Methods
		clone(result? : BillboardGraphics) : BillboardGraphics
		merge(source : BillboardGraphics) : void

	}

}
declare module 'cesium/DataSources/BoxGraphics' {
	export class BoxGraphics 
	{
		constructor(options? : BoxGraphicsOptions);
		//Members
		definitionChanged: Event
		dimensions: Property|any
		distanceDisplayCondition: Property|any
		fill: Property|any
		material: MaterialProperty
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		shadows: Property|any
		show: Property|any


		//Methods
		clone(result? : BoxGraphics) : BoxGraphics
		merge(source : BoxGraphics) : void

	}

}
declare module 'cesium/DataSources/CompositeEntityCollection' {
	export class CompositeEntityCollection 
	{
		constructor(collections? : Array<EntityCollection>, owner? : DataSource|CompositeEntityCollection);
		//Members
		collectionChanged: Event
		id: string
		owner: DataSource|CompositeEntityCollection
		values: Array<Entity>


		//Methods
		addCollection(collection : EntityCollection, index? : number) : void
		computeAvailability() : TimeInterval
		contains(entity : Entity) : boolean
		containsCollection(collection : EntityCollection) : boolean
		getById(id : any) : Entity
		getCollection(index : number) : void
		getCollectionsLength() : void
		indexOfCollection(collection : EntityCollection) : number
		lowerCollection(collection : EntityCollection) : void
		lowerCollectionToBottom(collection : EntityCollection) : void
		raiseCollection(collection : EntityCollection) : void
		raiseCollectionToTop(collection : EntityCollection) : void
		removeAllCollections() : void
		removeCollection(collection : EntityCollection) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}

}
declare module 'cesium/DataSources/ConstantPositionProperty' {
	export class ConstantPositionProperty implements PositionProperty
	{
		constructor(value? : Cartesian3, referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : any) : Object
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result? : Cartesian3) : Cartesian3
		setValue(value : Cartesian3, referenceFrame? : ReferenceFrame) : void

	}

}
declare module 'cesium/DataSources/CorridorGraphics' {
	export class CorridorGraphics 
	{
		constructor(options? : CorridorGraphicsOptions);
		//Members
		cornerType: Property|any
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		extrudedHeight: Property|any
		fill: Property|any
		granularity: Property|any
		height: Property|any
		material: MaterialProperty
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		positions: Property|any
		shadows: Property|any
		show: Property|any
		width: Property|any


		//Methods
		clone(result? : CorridorGraphics) : CorridorGraphics
		merge(source : CorridorGraphics) : void

	}

}
declare module 'cesium/DataSources/CustomDataSource' {
	export class CustomDataSource implements DataSource
	{
		constructor(name? : string);
		//Members
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods

	}

}
declare module 'cesium/DataSources/CylinderGraphics' {
	export class CylinderGraphics 
	{
		constructor(options? : CylinderGraphicsOptions);
		//Members
		bottomRadius: Property|any
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		fill: Property|any
		length: Property|any
		material: MaterialProperty
		numberOfVerticalLines: Property|any
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		shadows: Property|any
		show: Property|any
		slices: Property|any
		topRadius: Property|any


		//Methods
		clone(result? : CylinderGraphics) : CylinderGraphics
		merge(source : CylinderGraphics) : void

	}

}
declare module 'cesium/DataSources/CzmlDataSource' {
	export class CzmlDataSource implements DataSource
	{
		constructor(name? : string);
		//Members
		static updaters: Array<any>
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		static load(data : string|any, options? : loadOptions) : Promise<CzmlDataSource>
		static processMaterialPacketData(object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		static processPacketData(type : (()=>void), object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		static processPositionPacketData(object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		load(czml : string|any, options? : loadOptions) : Promise<CzmlDataSource>
		process(czml : string|any, options? : processOptions) : Promise<CzmlDataSource>

	}

}
declare module 'cesium/DataSources/DataSource' {
	export interface DataSource 
	{
		//Members
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		update(time : JulianDate) : boolean

	}

}
declare module 'cesium/DataSources/DataSourceClock' {
	export class DataSourceClock 
	{
		constructor();
		//Members
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		definitionChanged: Event
		multiplier: number
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		clone(result? : DataSourceClock) : DataSourceClock
		equals(other : DataSourceClock) : boolean
		getValue() : Clock
		merge(source : DataSourceClock) : void

	}

}
declare module 'cesium/DataSources/DataSourceCollection' {
	export class DataSourceCollection 
	{
		constructor();
		//Members
		dataSourceAdded: Event
		dataSourceRemoved: Event
		length: number


		//Methods
		add(dataSource : DataSource|Promise<DataSource>) : Promise<DataSource>
		contains(dataSource : DataSource) : boolean
		destroy() : void
		get(index : number) : void
		indexOf(dataSource : DataSource) : number
		isDestroyed() : boolean
		remove(dataSource : DataSource, destroy? : boolean) : boolean
		removeAll(destroy? : boolean) : void

	}

}
declare module 'cesium/DataSources/DataSourceDisplay' {
	export class DataSourceDisplay 
	{
		constructor(options? : DataSourceDisplayOptions);
		//Members
		static defaultVisualizersCallback: any
		dataSources: DataSourceCollection
		defaultDataSource: CustomDataSource
		ready: boolean
		scene: Scene


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}

}
declare module 'cesium/DataSources/EllipseGraphics' {
	export class EllipseGraphics 
	{
		constructor(options? : EllipseGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		extrudedHeight: Property|any
		fill: Property|any
		granularity: Property|any
		height: Property|any
		material: MaterialProperty
		numberOfVerticalLines: Property|any
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		rotation: Property|any
		semiMajorAxis: Property|any
		semiMinorAxis: Property|any
		shadows: Property|any
		show: Property|any
		stRotation: Property|any


		//Methods
		clone(result? : EllipseGraphics) : EllipseGraphics
		merge(source : EllipseGraphics) : void

	}

}
declare module 'cesium/DataSources/EllipsoidGraphics' {
	export class EllipsoidGraphics 
	{
		constructor(options? : EllipsoidGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		fill: Property|any
		material: MaterialProperty
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		radii: Property|any
		shadows: Property|any
		show: Property|any
		slicePartitions: Property|any
		stackPartitions: Property|any
		subdivisions: Property|any


		//Methods
		clone(result? : EllipsoidGraphics) : EllipsoidGraphics
		merge(source : EllipsoidGraphics) : void

	}

}
declare module 'cesium/DataSources/Entity' {
	export class Entity 
	{
		constructor(options? : EntityOptions);
		//Members
		availability: TimeIntervalCollection
		billboard: BillboardGraphics
		box: BoxGraphics
		corridor: CorridorGraphics
		cylinder: CylinderGraphics
		definitionChanged: Event
		description: Property|any
		ellipse: EllipseGraphics
		ellipsoid: EllipsoidGraphics
		entityCollection: EntityCollection
		id: string
		isShowing: boolean
		label: LabelGraphics
		model: ModelGraphics
		name: string
		orientation: Property|any
		parent: Entity
		path: PathGraphics
		point: PointGraphics
		polygon: PolygonGraphics
		polyline: PolylineGraphics
		polylineVolume: PolylineVolumeGraphics
		position: PositionProperty
		propertyNames: Array<any>
		rectangle: RectangleGraphics
		show: boolean
		viewFrom: Property|any
		wall: WallGraphics


		//Methods
		addProperty(propertyName : string) : void
		isAvailable(time : JulianDate) : boolean
		merge(source : Entity) : void
		removeProperty(propertyName : string) : void

	}

}
declare module 'cesium/DataSources/EntityCluster' {
	export class EntityCluster 
	{
		constructor(options? : EntityClusterOptions);
		//Members
		clusterEvent: Event
		enabled: boolean
		minimumClusterSize: number
		pixelRange: number


		//Methods
		destroy() : void

	}

}
declare module 'cesium/DataSources/EntityCollection' {
	export class EntityCollection 
	{
		constructor(owner? : DataSource|CompositeEntityCollection);
		//Members
		collectionChanged: Event
		id: string
		owner: DataSource|CompositeEntityCollection
		show: boolean
		values: Array<Entity>


		//Methods
		static collectionChangedEventCallback(collection : EntityCollection, added : Array<Entity>, removed : Array<Entity>, changed : Array<Entity>) : void
		add(entity : Entity) : Entity
		computeAvailability() : TimeInterval
		contains(entity : Entity) : boolean
		getById(id : any) : Entity
		getOrCreateEntity(id : any) : Entity
		remove(entity : Entity) : boolean
		removeAll() : void
		removeById(id : any) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}

}
declare module 'cesium/DataSources/EntityView' {
	export class EntityView 
	{
		constructor(entity : Entity, scene : Scene, ellipsoid? : Ellipsoid);
		//Members
		static defaultOffset3D: Cartesian3
		boundingSphere: BoundingSphere
		ellipsoid: Ellipsoid
		entity: Entity
		scene: Scene


		//Methods
		update(time : JulianDate, current : BoundingSphere) : void

	}

}
declare module 'cesium/DataSources/LabelGraphics' {
	export class LabelGraphics 
	{
		constructor(options? : LabelGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		eyeOffset: Property|any
		fillColor: Property|any
		font: Property|any
		heightReference: Property|any
		horizontalOrigin: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		pixelOffset: Property|any
		pixelOffsetScaleByDistance: Property|any
		scale: Property|any
		show: Property|any
		style: Property|any
		text: Property|any
		translucencyByDistance: Property|any
		verticalOrigin: Property|any


		//Methods
		clone(result? : LabelGraphics) : LabelGraphics
		merge(source : LabelGraphics) : void

	}

}
declare module 'cesium/DataSources/MaterialProperty' {
	export interface MaterialProperty 
	{
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other? : Property|any) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result? : any) : Object

	}

}
declare module 'cesium/DataSources/ModelGraphics' {
	export class ModelGraphics 
	{
		constructor(options? : ModelGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		heightReference: Property|any
		incrementallyLoadTextures: Property|any
		maximumScale: Property|any
		minimumPixelSize: Property|any
		nodeTransformations: PropertyBag
		runAnimations: Property|any
		scale: Property|any
		shadows: Property|any
		show: Property|any
		uri: Property|any


		//Methods
		clone(result? : ModelGraphics) : ModelGraphics
		merge(source : ModelGraphics) : void

	}

}
declare module 'cesium/DataSources/PathGraphics' {
	export class PathGraphics 
	{
		constructor(options? : PathGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		leadTime: Property|any
		material: MaterialProperty
		resolution: Property|any
		show: Property|any
		trailTime: Property|any
		width: Property|any


		//Methods
		clone(result? : PathGraphics) : PathGraphics
		merge(source : PathGraphics) : void

	}

}
declare module 'cesium/DataSources/PointGraphics' {
	export class PointGraphics 
	{
		constructor(options? : PointGraphicsOptions);
		//Members
		color: Property|any
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		heightReference: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		pixelSize: Property|any
		scaleByDistance: Property|any
		show: Property|any
		translucencyByDistance: Property|any


		//Methods
		clone(result? : PointGraphics) : PointGraphics
		merge(source : PointGraphics) : void

	}

}
declare module 'cesium/DataSources/PolygonGraphics' {
	export class PolygonGraphics 
	{
		constructor(options? : PolygonGraphicsOptions);
		//Members
		closeBottom: Property|any
		closeTop: Property|any
		definitionChanged: Event
		extrudedHeight: Property|any
		fill: Property|any
		granularity: Property|any
		height: Property|any
		hierarchy: Property|any
		material: MaterialProperty
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		perPositionHeight: Property|any
		shadows: Property|any
		show: Property|any
		stRotation: Property|any


		//Methods
		clone(result? : PolygonGraphics) : PolygonGraphics
		merge(source : PolygonGraphics) : void

	}

}
declare module 'cesium/DataSources/PolylineGraphics' {
	export class PolylineGraphics 
	{
		constructor(options? : PolylineGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		followSurface: Property|any
		granularity: Property|any
		material: MaterialProperty
		positions: Property|any
		shadows: Property|any
		show: Property|any
		width: Property|any


		//Methods
		clone(result? : PolylineGraphics) : PolylineGraphics
		merge(source : PolylineGraphics) : void

	}

}
declare module 'cesium/DataSources/PolylineVolumeGraphics' {
	export class PolylineVolumeGraphics 
	{
		constructor(options? : PolylineVolumeGraphicsOptions);
		//Members
		cornerType: Property|any
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		fill: Property|any
		granularity: Property|any
		material: MaterialProperty
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		positions: Property|any
		shadows: Property|any
		shape: Property|any
		show: Property|any


		//Methods
		clone(result? : PolylineVolumeGraphics) : PolylineVolumeGraphics
		merge(source : PolylineVolumeGraphics) : void

	}

}
declare module 'cesium/DataSources/PositionProperty' {
	export interface PositionProperty 
	{
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result? : Cartesian3) : Cartesian3

	}

}
declare module 'cesium/DataSources/Property' {
	export interface Property 
	{
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : any) : Object

	}

}
declare module 'cesium/DataSources/PropertyBag' {
	export class PropertyBag implements Property
	{
		constructor(value? : any, createPropertyCallback? : (()=>void));
		//Members
		definitionChanged: Event
		isConstant: boolean
		propertyNames: Array<any>


		//Methods
		addProperty(propertyName : string, value? : any, createPropertyCallback? : (()=>void)) : void
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : any) : Object
		hasProperty(propertyName : string) : boolean
		merge(source : any, createPropertyCallback? : (()=>void)) : void
		removeProperty(propertyName : string) : void

	}

}
declare module 'cesium/DataSources/RectangleGraphics' {
	export class RectangleGraphics 
	{
		constructor(options? : RectangleGraphicsOptions);
		//Members
		closeBottom: Property|any
		closeTop: Property|any
		coordinates: Property|any
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		extrudedHeight: Property|any
		fill: Property|any
		granularity: Property|any
		height: Property|any
		material: MaterialProperty
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		rotation: Property|any
		shadows: Property|any
		show: Property|any
		stRotation: Property|any


		//Methods
		clone(result? : RectangleGraphics) : RectangleGraphics
		merge(source : RectangleGraphics) : void

	}

}
declare module 'cesium/DataSources/SampledPositionProperty' {
	export class SampledPositionProperty extends SampledProperty implements PositionProperty
	{
		constructor(referenceFrame? : ReferenceFrame, numberOfDerivatives? : number);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		numberOfDerivatives: boolean
		referenceFrame: ReferenceFrame


		//Methods
		addSample(time : JulianDate, position : Cartesian3, derivatives? : Array<Cartesian3>) : void
		addSamples(times : Array<JulianDate>, positions : Array<Cartesian3>, derivatives? : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples : Array<number>, epoch? : JulianDate) : void
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result? : Cartesian3) : Cartesian3
		setInterpolationOptions(options? : setInterpolationOptionsOptions) : void

	}

}
declare module 'cesium/DataSources/SampledProperty' {
	export class SampledProperty implements Property
	{
		constructor(type : number|Packable, derivativeTypes? : Array<Packable>);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		derivativeTypes: Array<Packable>
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		type: Object


		//Methods
		addSample(time : JulianDate, value : Packable, derivatives? : Array<Packable>) : void
		addSamples(times : Array<JulianDate>, values : Array<Packable>, derivativeValues? : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples : Array<number>, epoch? : JulianDate) : void
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : any) : Object
		setInterpolationOptions(options? : setInterpolationOptionsOptions) : void

	}

}
declare module 'cesium/DataSources/TimeIntervalCollectionProperty' {
	export class TimeIntervalCollectionProperty implements Property
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other? : Property|any) : boolean
		getValue(time : JulianDate, result? : any) : Object

	}

}
declare module 'cesium/DataSources/VelocityOrientationProperty' {
	export class VelocityOrientationProperty implements Property
	{
		constructor(position? : Property|any, ellipsoid? : Ellipsoid);
		//Members
		definitionChanged: Event
		ellipsoid: Property|any
		isConstant: boolean
		position: Property|any


		//Methods
		equals(other? : Property|any) : boolean
		getValue(time? : JulianDate, result? : Quaternion) : Quaternion

	}

}
declare module 'cesium/DataSources/WallGraphics' {
	export class WallGraphics 
	{
		constructor(options? : WallGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|any
		fill: Property|any
		granularity: Property|any
		material: MaterialProperty
		maximumHeights: Property|any
		minimumHeights: Property|any
		outline: Property|any
		outlineColor: Property|any
		outlineWidth: Property|any
		positions: Property|any
		shadows: Property|any
		show: Property|any


		//Methods
		clone(result? : WallGraphics) : WallGraphics
		merge(source : WallGraphics) : void

	}

}
declare module 'cesium/Scene/Camera' {
	export class Camera 
	{
		constructor(scene : Scene);
		//Members
		static DEFAULT_VIEW_FACTOR: number
		static DEFAULT_VIEW_RECTANGLE: Rectangle
		changed: Event
		constrainedAxis: Cartesian3
		defaultLookAmount: number
		defaultMoveAmount: number
		defaultRotateAmount: number
		defaultZoomAmount: number
		direction: Cartesian3
		directionWC: Cartesian3
		frustum: PerspectiveFrustum
		heading: number
		inverseTransform: Matrix4
		inverseViewMatrix: Matrix4
		maximumZoomFactor: number
		moveEnd: Event
		moveStart: Event
		percentageChanged: number
		pitch: number
		position: Cartesian3
		positionCartographic: Cartographic
		positionWC: Cartesian3
		right: Cartesian3
		rightWC: Cartesian3
		roll: number
		transform: Matrix4
		up: Cartesian3
		upWC: Cartesian3
		viewMatrix: Matrix4


		//Methods
		cameraToWorldCoordinates(cartesian : Cartesian4, result? : Cartesian4) : Cartesian4
		cameraToWorldCoordinatesPoint(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		cameraToWorldCoordinatesVector(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		cancelFlight() : void
		computeViewRectangle(ellipsoid? : Ellipsoid, result? : Rectangle) : Rectangle|void
		distanceToBoundingSphere(boundingSphere : BoundingSphere) : number
		flyHome(duration? : number) : void
		flyTo(options? : flyToOptions) : void
		flyToBoundingSphere(boundingSphere : BoundingSphere, options? : flyToBoundingSphereOptions) : void
		getMagnitude() : number
		getPickRay(windowPosition : Cartesian2, result? : Ray) : Ray
		getPixelSize(boundingSphere : BoundingSphere, drawingBufferWidth : number, drawingBufferHeight : number) : number
		getRectangleCameraCoordinates(rectangle : Rectangle, result? : Cartesian3) : Cartesian3
		look(axis : Cartesian3, angle? : number) : void
		lookAt(target : Cartesian3, offset : Cartesian3|HeadingPitchRange) : void
		lookAtTransform(transform : Matrix4, offset? : Cartesian3|HeadingPitchRange) : void
		lookDown(amount? : number) : void
		lookLeft(amount? : number) : void
		lookRight(amount? : number) : void
		lookUp(amount? : number) : void
		move(direction : Cartesian3, amount? : number) : void
		moveBackward(amount? : number) : void
		moveDown(amount? : number) : void
		moveForward(amount? : number) : void
		moveLeft(amount? : number) : void
		moveRight(amount? : number) : void
		moveUp(amount? : number) : void
		pickEllipsoid(windowPosition : Cartesian2, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		rotate(axis : Cartesian3, angle? : number) : void
		rotateDown(angle? : number) : void
		rotateLeft(angle? : number) : void
		rotateRight(angle? : number) : void
		rotateUp(angle? : number) : void
		setView(options? : setViewOptions) : void
		twistLeft(amount? : number) : void
		twistRight(amount? : number) : void
		viewBoundingSphere(boundingSphere : BoundingSphere, offset? : HeadingPitchRange) : void
		worldToCameraCoordinates(cartesian : Cartesian4, result? : Cartesian4) : Cartesian4
		worldToCameraCoordinatesPoint(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		worldToCameraCoordinatesVector(cartesian : Cartesian3, result? : Cartesian3) : Cartesian3
		zoomIn(amount? : number) : void
		zoomOut(amount? : number) : void

	}

}
declare module 'cesium/Scene/CameraEventType' {
	export class CameraEventType 
	{
		constructor();
		//Members
		static LEFT_DRAG: number
		static MIDDLE_DRAG: number
		static PINCH: number
		static RIGHT_DRAG: number
		static WHEEL: number


		//Methods

	}

}
declare module 'cesium/Scene/CullingVolume' {
	export class CullingVolume 
	{
		constructor(planes? : Array<Cartesian4>);
		//Members
		planes: Array<Cartesian4>


		//Methods
		static fromBoundingSphere(boundingSphere : BoundingSphere, result? : CullingVolume) : CullingVolume
		computeVisibility(boundingVolume : any) : Intersect

	}

}
declare module 'cesium/Scene/Fog' {
	export class Fog 
	{
		constructor();
		//Members
		density: number
		enabled: boolean
		screenSpaceErrorFactor: number


		//Methods

	}

}
declare module 'cesium/Scene/FrameRateMonitor' {
	export class FrameRateMonitor 
	{
		constructor(options? : FrameRateMonitorOptions);
		//Members
		static defaultSettings: Object
		lastFramesPerSecond: number
		lowFrameRate: Event
		minimumFrameRateAfterWarmup: number
		minimumFrameRateDuringWarmup: number
		nominalFrameRate: Event
		quietPeriod: number
		samplingWindow: number
		scene: Scene
		warmupPeriod: number


		//Methods
		static fromScene(scene : Scene) : FrameRateMonitor
		destroy() : void
		isDestroyed() : boolean
		pause() : void
		unpause() : void

	}

}
declare module 'cesium/Scene/Globe' {
	export class Globe 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		baseColor: Color
		depthTestAgainstTerrain: boolean
		ellipsoid: Ellipsoid
		enableLighting: boolean
		imageryLayers: ImageryLayerCollection
		lightingFadeInDistance: number
		lightingFadeOutDistance: number
		maximumScreenSpaceError: number
		oceanNormalMapUrl: string
		shadows: ShadowMode
		show: boolean
		showWaterEffect: boolean
		terrainProvider: TerrainProvider
		terrainProviderChanged: Event
		tileCacheSize: number
		tileLoadProgressEvent: Event


		//Methods
		destroy() : void
		getHeight(cartographic : Cartographic) : number|void
		isDestroyed() : boolean
		pick(ray : Ray, scene : Scene, result? : Cartesian3) : Cartesian3|void

	}

}
declare module 'cesium/Scene/HeightReference' {
	export class HeightReference 
	{
		constructor();
		//Members
		static CLAMP_TO_GROUND: number
		static NONE: number
		static RELATIVE_TO_GROUND: number


		//Methods

	}

}
declare module 'cesium/Scene/ImageryLayer' {
	export class ImageryLayer 
	{
		constructor(imageryProvider : ImageryProvider, options? : ImageryLayerOptions);
		//Members
		static DEFAULT_BRIGHTNESS: number
		static DEFAULT_CONTRAST: number
		static DEFAULT_GAMMA: number
		static DEFAULT_HUE: number
		static DEFAULT_SATURATION: number
		alpha: number
		brightness: number
		contrast: number
		gamma: number
		hue: number
		imageryProvider: ImageryProvider
		rectangle: Rectangle
		saturation: number
		show: boolean


		//Methods
		destroy() : void
		getViewableRectangle() : Promise<Rectangle>
		isBaseLayer() : boolean
		isDestroyed() : boolean

	}

}
declare module 'cesium/Scene/ImageryLayerCollection' {
	export class ImageryLayerCollection 
	{
		constructor();
		//Members
		layerAdded: Event
		layerMoved: Event
		layerRemoved: Event
		layerShownOrHidden: Event
		length: number


		//Methods
		add(layer : ImageryLayer, index? : number) : void
		addImageryProvider(imageryProvider : ImageryProvider, index? : number) : ImageryLayer
		contains(layer : ImageryLayer) : boolean
		destroy() : void
		get(index : number) : ImageryLayer
		indexOf(layer : ImageryLayer) : number
		isDestroyed() : boolean
		lower(layer : ImageryLayer) : void
		lowerToBottom(layer : ImageryLayer) : void
		pickImageryLayerFeatures(ray : Ray, scene : Scene) : Promise<Array<ImageryLayerFeatureInfo>>|void
		raise(layer : ImageryLayer) : void
		raiseToTop(layer : ImageryLayer) : void
		remove(layer : ImageryLayer, destroy? : boolean) : boolean
		removeAll(destroy? : boolean) : void

	}

}
declare module 'cesium/Scene/ImageryLayerFeatureInfo' {
	export class ImageryLayerFeatureInfo 
	{
		constructor();
		//Members
		data: Object
		description: string
		imageryLayer: Object
		name: string
		position: Cartographic


		//Methods
		configureDescriptionFromProperties(properties : any) : void
		configureNameFromProperties(properties : any) : void

	}

}
declare module 'cesium/Scene/ImageryProvider' {
	export class ImageryProvider 
	{
		constructor();
		//Members
		credit: Credit
		defaultAlpha: number
		defaultBrightness: number
		defaultContrast: number
		defaultGamma: number
		defaultHue: number
		defaultSaturation: number
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		static loadImage(url : string) : Promise<HTMLImageElement|HTMLCanvasElement>|void
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}

}
declare module 'cesium/Scene/MapMode2D' {
	export class MapMode2D 
	{
		constructor();
		//Members
		static INFINITE_SCROLL: number
		static ROTATE: number


		//Methods

	}

}
declare module 'cesium/Scene/Model' {
	export class Model 
	{
		constructor(options? : ModelOptions);
		//Members
		activeAnimations: ModelAnimationCollection
		allowPicking: boolean
		asynchronous: boolean
		basePath: string
		boundingSphere: BoundingSphere
		debugShowBoundingVolume: boolean
		debugWireframe: boolean
		distanceDisplayCondition: DistanceDisplayCondition
		gltf: Object
		id: Object
		incrementallyLoadTextures: boolean
		maximumScale: number
		minimumPixelSize: number
		modelMatrix: Matrix4
		pendingTextureLoads: number
		ready: boolean
		readyPromise: Promise<Model>
		scale: number
		shadows: ShadowMode
		show: boolean


		//Methods
		static fromGltf(options? : fromGltfOptions) : Model
		destroy() : void
		getMaterial(name : string) : ModelMaterial
		getMesh(name : string) : ModelMesh
		getNode(name : string) : ModelNode
		isDestroyed() : boolean
		update() : void

	}

}
declare module 'cesium/Scene/ModelAnimation' {
	export class ModelAnimation 
	{
		constructor();
		//Members
		delay: number
		loop: ModelAnimationLoop
		name: string
		removeOnStop: boolean
		reverse: boolean
		speedup: number
		start: Event
		startTime: JulianDate
		stop: Event
		stopTime: JulianDate
		update: Event


		//Methods

	}

}
declare module 'cesium/Scene/ModelAnimationCollection' {
	export class ModelAnimationCollection 
	{
		constructor();
		//Members
		animationAdded: Event
		animationRemoved: Event
		length: number


		//Methods
		add(options? : addOptions) : ModelAnimation
		addAll(options? : addAllOptions) : Array<ModelAnimation>
		contains(animation : ModelAnimation) : boolean
		get(index : number) : ModelAnimation
		remove(animation : ModelAnimation) : boolean
		removeAll() : void

	}

}
declare module 'cesium/Scene/ModelAnimationLoop' {
	export class ModelAnimationLoop 
	{
		constructor();
		//Members
		static MIRRORED_REPEAT: number
		static NONE: number
		static REPEAT: number


		//Methods

	}

}
declare module 'cesium/Scene/ModelMaterial' {
	export class ModelMaterial 
	{
		constructor();
		//Members
		id: string
		name: string


		//Methods
		getValue(name : string) : Object
		setValue(name : string, value? : any) : void

	}

}
declare module 'cesium/Scene/ModelMesh' {
	export class ModelMesh 
	{
		constructor();
		//Members
		id: string
		materials: Array<ModelMaterial>
		name: string


		//Methods

	}

}
declare module 'cesium/Scene/ModelNode' {
	export class ModelNode 
	{
		constructor();
		//Members
		id: string
		matrix: Matrix4
		name: string
		show: boolean


		//Methods

	}

}
declare module 'cesium/Scene/Moon' {
	export class Moon 
	{
		constructor(options? : MoonOptions);
		//Members
		ellipsoid: Ellipsoid
		onlySunLighting: boolean
		show: boolean
		textureUrl: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Scene/PerspectiveFrustum' {
	export class PerspectiveFrustum 
	{
		constructor();
		//Members
		aspectRatio: number
		far: number
		fov: number
		fovy: number
		infiniteProjectionMatrix: Matrix4
		near: number
		projectionMatrix: Matrix4
		xOffset: number
		yOffset: number


		//Methods
		clone(result? : PerspectiveFrustum) : PerspectiveFrustum
		computeCullingVolume(position : Cartesian3, direction : Cartesian3, up : Cartesian3) : CullingVolume
		equals(other? : PerspectiveFrustum) : boolean
		getPixelDimensions(drawingBufferWidth : number, drawingBufferHeight : number, distance : number, result : Cartesian2) : Cartesian2

	}

}
declare module 'cesium/Scene/PrimitiveCollection' {
	export class PrimitiveCollection 
	{
		constructor(options? : PrimitiveCollectionOptions);
		//Members
		destroyPrimitives: boolean
		length: number
		show: boolean


		//Methods
		add(primitive : any) : Object
		contains(primitive? : any) : boolean
		destroy() : void
		get(index : number) : Object
		isDestroyed() : boolean
		lower(primitive? : any) : void
		lowerToBottom(primitive? : any) : void
		raise(primitive? : any) : void
		raiseToTop(primitive? : any) : void
		remove(primitive? : any) : boolean
		removeAll() : void

	}

}
declare module 'cesium/Scene/Scene' {
	export class Scene 
	{
		constructor(options? : SceneOptions);
		//Members
		backgroundColor: Color
		camera: Camera
		canvas: HTMLCanvasElement
		completeMorphOnUserInput: boolean
		debugCommandFilter: (()=>void)
		debugFrustumStatistics: Object
		debugShowCommands: boolean
		debugShowDepthFrustum: number
		debugShowFramesPerSecond: boolean
		debugShowFrustums: boolean
		debugShowGlobeDepth: boolean
		drawingBufferHeight: number
		drawingBufferWidth: number
		farToNearRatio: number
		fog: Fog
		fxaa: boolean
		globe: Globe
		groundPrimitives: PrimitiveCollection
		id: string
		imageryLayers: ImageryLayerCollection
		mapMode2D: boolean
		mapProjection: MapProjection
		maximumAliasedLineWidth: number
		maximumCubeMapSize: number
		mode: SceneMode
		moon: Moon
		morphComplete: Event
		morphStart: Event
		morphTime: number
		nearToFarDistance2D: number
		orderIndependentTranslucency: boolean
		pickPositionSupported: boolean
		postRender: Event
		preRender: Event
		primitives: PrimitiveCollection
		renderError: Event
		rethrowRenderErrors: boolean
		scene3DOnly: boolean
		screenSpaceCameraController: ScreenSpaceCameraController
		shadowMap: ShadowMap
		skyAtmosphere: SkyAtmosphere
		skyBox: SkyBox
		sun: Sun
		sunBloom: boolean
		terrainExaggeration: number
		terrainProvider: TerrainProvider
		terrainProviderChanged: Event
		useDepthPicking: boolean
		useWebVR: boolean


		//Methods
		completeMorph() : void
		destroy() : void
		drillPick(windowPosition : Cartesian2, limit? : number) : Array<Object>
		isDestroyed() : boolean
		morphTo2D(duration? : number) : void
		morphTo3D(duration? : number) : void
		morphToColumbusView(duration? : number) : void
		pick(windowPosition : Cartesian2) : Object
		pickPosition(windowPosition : Cartesian2, result? : Cartesian3) : Cartesian3

	}

}
declare module 'cesium/Scene/SceneMode' {
	export class SceneMode 
	{
		constructor();
		//Members
		static COLUMBUS_VIEW: number
		static MORPHING: number
		static SCENE2D: number
		static SCENE3D: number


		//Methods
		static getMorphTime(value : SceneMode) : number

	}

}
declare module 'cesium/Scene/ScreenSpaceCameraController' {
	export class ScreenSpaceCameraController 
	{
		constructor(scene : Scene);
		//Members
		bounceAnimationTime: number
		enableCollisionDetection: boolean
		enableInputs: boolean
		enableLook: boolean
		enableRotate: boolean
		enableTilt: boolean
		enableTranslate: boolean
		enableZoom: boolean
		inertiaSpin: number
		inertiaTranslate: number
		inertiaZoom: number
		lookEventTypes: CameraEventType|Array<any>|void
		maximumMovementRatio: number
		maximumZoomDistance: number
		minimumCollisionTerrainHeight: number
		minimumPickingTerrainHeight: number
		minimumTrackBallHeight: number
		minimumZoomDistance: number
		rotateEventTypes: CameraEventType|Array<any>|void
		tiltEventTypes: CameraEventType|Array<any>|void
		translateEventTypes: CameraEventType|Array<any>|void
		zoomEventTypes: CameraEventType|Array<any>|void


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Scene/ShadowMap' {
	export class ShadowMap 
	{
		constructor(options? : ShadowMapOptions);
		//Members
		darkness: number
		enabled: boolean
		maximumDistance: number
		size: number
		softShadows: boolean


		//Methods

	}

}
declare module 'cesium/Scene/ShadowMode' {
	export class ShadowMode 
	{
		constructor();
		//Members
		static CAST_ONLY: number
		static DISABLED: number
		static ENABLED: number
		static RECEIVE_ONLY: number


		//Methods

	}

}
declare module 'cesium/Scene/SkyAtmosphere' {
	export class SkyAtmosphere 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		brightnessShift: number
		ellipsoid: Ellipsoid
		hueShift: number
		saturationShift: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Scene/SkyBox' {
	export class SkyBox 
	{
		constructor(options? : SkyBoxOptions);
		//Members
		show: boolean
		sources: Object


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update() : void

	}

}
declare module 'cesium/Scene/Sun' {
	export class Sun 
	{
		constructor();
		//Members
		glowFactor: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Scene/TileDiscardPolicy' {
	export class TileDiscardPolicy 
	{
		constructor();
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image : HTMLImageElement) : boolean

	}

}
declare module 'cesium/Scene/WebMapTileServiceImageryProvider' {
	export class WebMapTileServiceImageryProvider 
	{
		constructor(options? : WebMapTileServiceImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		format: string
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}

}
declare module 'cesium/Widgets/ClockViewModel' {
	export class ClockViewModel 
	{
		constructor(clock? : Clock);
		//Members
		canAnimate: boolean
		clock: Clock
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate
		systemTime: JulianDate


		//Methods
		destroy() : void
		isDestroyed() : boolean
		synchronize() : void

	}

}
declare module 'cesium/Widgets/Command' {
	export class Command 
	{
		constructor();
		//Members
		afterExecute: Event
		beforeExecute: Event
		canExecute: boolean


		//Methods

	}

}
declare module 'cesium/Widgets/ToggleButtonViewModel' {
	export class ToggleButtonViewModel 
	{
		constructor(command : Command, options? : ToggleButtonViewModelOptions);
		//Members
		command: Command
		toggled: boolean
		tooltip: string


		//Methods

	}

}
declare module 'cesium/Widgets/Animation/Animation' {
	export class Animation 
	{
		constructor(container : Element|string, viewModel : AnimationViewModel);
		//Members
		container: Element
		viewModel: AnimationViewModel


		//Methods
		applyThemeChanges() : void
		destroy() : void
		isDestroyed() : boolean
		resize() : void

	}

}
declare module 'cesium/Widgets/Animation/AnimationViewModel' {
	export class AnimationViewModel 
	{
		constructor(clockViewModel : ClockViewModel);
		//Members
		static defaultDateFormatter: any
		static defaultTicks: Array<number>
		static defaultTimeFormatter: any
		clockViewModel: ClockViewModel
		dateFormatter: any
		dateLabel: string
		faster: Command
		multiplierLabel: string
		pauseViewModel: ToggleButtonViewModel
		playForwardViewModel: ToggleButtonViewModel
		playRealtimeViewModel: ToggleButtonViewModel
		playReverseViewModel: ToggleButtonViewModel
		shuttleRingAngle: number
		shuttleRingDragging: boolean
		slower: Command
		snapToTicks: boolean
		timeFormatter: any
		timeLabel: string


		//Methods
		getShuttleRingTicks() : Array<number>
		setShuttleRingTicks(positiveTicks : Array<number>) : void

	}

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPicker' {
	export class BaseLayerPicker 
	{
		constructor(container : Element|string, options? : BaseLayerPickerOptions);
		//Members
		container: Element
		viewModel: BaseLayerPickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel' {
	export class BaseLayerPickerViewModel 
	{
		constructor(options? : BaseLayerPickerViewModelOptions);
		//Members
		buttonImageUrl: string
		buttonTooltip: string
		dropDownVisible: boolean
		globe: Globe
		imageryProviderViewModels: Array<ProviderViewModel>
		selectedImagery: ProviderViewModel
		selectedTerrain: ProviderViewModel
		terrainProviderViewModels: Array<ProviderViewModel>
		toggleDropDown: Command


		//Methods

	}

}
declare module 'cesium/Widgets/BaseLayerPicker/ProviderViewModel' {
	export class ProviderViewModel 
	{
		constructor(options : ProviderViewModelOptions);
		//Members
		creationCommand: Command
		iconUrl: string
		name: string
		tooltip: string


		//Methods

	}

}
declare module 'cesium/Widgets/CesiumWidget/CesiumWidget' {
	export class CesiumWidget 
	{
		constructor(container : Element|string, options? : CesiumWidgetOptions);
		//Members
		camera: Camera
		canvas: HTMLCanvasElement
		clock: Clock
		container: Element
		creditContainer: Element
		imageryLayers: ImageryLayerCollection
		resolutionScale: number
		scene: Scene
		screenSpaceEventHandler: ScreenSpaceEventHandler
		targetFrameRate: number
		terrainProvider: TerrainProvider
		useDefaultRenderLoop: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		showErrorPanel(title : string, message : string, error? : string) : void

	}

}
declare module 'cesium/Widgets/FullscreenButton/FullscreenButton' {
	export class FullscreenButton 
	{
		constructor(container : Element|string, fullscreenElement? : Element|string);
		//Members
		container: Element
		viewModel: FullscreenButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/FullscreenButton/FullscreenButtonViewModel' {
	export class FullscreenButtonViewModel 
	{
		constructor(fullscreenElement? : Element|string);
		//Members
		command: Command
		fullscreenElement: Element
		isFullscreen: boolean
		isFullscreenEnabled: boolean
		tooltip: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/Geocoder/Geocoder' {
	export class Geocoder 
	{
		constructor(options? : GeocoderOptions);
		//Members
		container: Element
		viewModel: GeocoderViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/Geocoder/GeocoderViewModel' {
	export class GeocoderViewModel 
	{
		constructor(options? : GeocoderViewModelOptions);
		//Members
		complete: Event
		flightDuration: number|void
		isSearchInProgress: boolean
		keepExpanded: boolean
		key: string
		scene: Scene
		search: Command
		searchText: string
		url: string


		//Methods

	}

}
declare module 'cesium/Widgets/HomeButton/HomeButton' {
	export class HomeButton 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: HomeButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/HomeButton/HomeButtonViewModel' {
	export class HomeButtonViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		command: Command
		duration: number|void
		scene: Scene
		tooltip: string


		//Methods

	}

}
declare module 'cesium/Widgets/InfoBox/InfoBox' {
	export class InfoBox 
	{
		constructor(container : Element|string);
		//Members
		container: Element
		frame: HTMLIFrameElement
		viewModel: InfoBoxViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/InfoBox/InfoBoxViewModel' {
	export class InfoBoxViewModel 
	{
		constructor();
		//Members
		cameraClicked: Event
		cameraIconPath: string
		closeClicked: Event
		description: string
		enableCamera: boolean
		isCameraTracking: boolean
		maxHeight: number
		showInfo: boolean
		titleText: string


		//Methods
		maxHeightOffset(offset : number) : string

	}

}
declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButton' {
	export class NavigationHelpButton 
	{
		constructor(options? : NavigationHelpButtonOptions);
		//Members
		container: Element
		viewModel: NavigationHelpButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel' {
	export class NavigationHelpButtonViewModel 
	{
		constructor();
		//Members
		command: Command
		showClick: Command
		showInstructions: boolean
		showTouch: Command
		tooltip: string


		//Methods

	}

}
declare module 'cesium/Widgets/SceneModePicker/SceneModePicker' {
	export class SceneModePicker 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: SceneModePickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/SceneModePicker/SceneModePickerViewModel' {
	export class SceneModePickerViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		dropDownVisible: boolean
		duration: number
		morphTo2D: Command
		morphTo3D: Command
		morphToColumbusView: Command
		scene: Scene
		sceneMode: SceneMode
		selectedTooltip: string
		toggleDropDown: Command
		tooltip2D: string
		tooltip3D: string
		tooltipColumbusView: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/SelectionIndicator/SelectionIndicator' {
	export class SelectionIndicator 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: SelectionIndicatorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel' {
	export class SelectionIndicatorViewModel 
	{
		constructor(scene : Scene, selectionIndicatorElement : Element, container : Element);
		//Members
		computeScreenSpacePosition: any
		container: Element
		isVisible: boolean
		position: Cartesian3
		scene: Scene
		selectionIndicatorElement: Element
		showSelection: boolean


		//Methods
		animateAppear() : void
		animateDepart() : void
		update() : void

	}

}
declare module 'cesium/Widgets/Timeline/Timeline' {
	export class Timeline 
	{
		constructor(container : Element, clock : Clock);
		//Members
		container: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean
		resize() : void
		zoomTo(startTime : JulianDate, stopTime : JulianDate) : void

	}

}
declare module 'cesium/Widgets/Viewer/Viewer' {
	export class Viewer 
	{
		constructor(container : Element|string, options? : ViewerOptions);
		//Members
		allowDataSourcesToSuspendAnimation: boolean
		animation: Animation
		baseLayerPicker: BaseLayerPicker
		bottomContainer: Element
		camera: Camera
		canvas: HTMLCanvasElement
		cesiumLogo: Element
		cesiumWidget: CesiumWidget
		clock: Clock
		container: Element
		dataSourceDisplay: DataSourceDisplay
		dataSources: DataSourceCollection
		entities: EntityCollection
		fullscreenButton: FullscreenButton
		geocoder: Geocoder
		homeButton: HomeButton
		imageryLayers: ImageryLayerCollection
		infoBox: InfoBox
		navigationHelpButton: NavigationHelpButton
		resolutionScale: number
		scene: Scene
		sceneModePicker: SceneModePicker
		screenSpaceEventHandler: ScreenSpaceEventHandler
		selectedEntity: Entity
		selectionIndicator: SelectionIndicator
		shadowMap: ShadowMap
		shadows: boolean
		targetFrameRate: number
		terrainProvider: TerrainProvider
		terrainShadows: ShadowMode
		timeline: Timeline
		trackedEntity: Entity
		useDefaultRenderLoop: boolean
		vrButton: VRButton


		//Methods
		destroy() : void
		extend(mixin : any, options? : any) : void
		flyTo(target : Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Promise<Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer>, options? : flyToOptions) : Promise<boolean>
		forceResize() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		zoomTo(target : Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Promise<Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer>, offset? : HeadingPitchRange) : Promise<boolean>

	}

}
declare module 'cesium/Widgets/Viewer/viewerCesiumInspectorMixin' {
	import Viewer = require('cesium/Widgets/Viewer/Viewer')
	function viewerCesiumInspectorMixin(viewer : Viewer) : void;
	export = viewerCesiumInspectorMixin

}
declare module 'cesium/Widgets/VRButton/VRButton' {
	export class VRButton 
	{
		constructor(container : Element|string, scene : Scene, vrElement? : Element|string);
		//Members
		container: Element
		viewModel: VRButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Widgets/VRButton/VRButtonViewModel' {
	export class VRButtonViewModel 
	{
		constructor(scene : Scene, vrElement? : Element|string);
		//Members
		command: Command
		isVREnabled: boolean
		isVRMode: boolean
		tooltip: string
		vrElement: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}

}
declare module 'cesium/Cesium' {
	export import Promise = require('cesium/Promise')
	export import when = require('cesium/when')
	export import BingMapsApi = require('cesium/Core/BingMapsApi')
	export import BoundingSphere = require('cesium/Core/BoundingSphere')
	export import Cartesian2 = require('cesium/Core/Cartesian2')
	export import Cartesian3 = require('cesium/Core/Cartesian3')
	export import Cartesian4 = require('cesium/Core/Cartesian4')
	export import Cartographic = require('cesium/Core/Cartographic')
	export import CesiumTerrainProvider = require('cesium/Core/CesiumTerrainProvider')
	export import Clock = require('cesium/Core/Clock')
	export import ClockRange = require('cesium/Core/ClockRange')
	export import ClockStep = require('cesium/Core/ClockStep')
	export import Color = require('cesium/Core/Color')
	export import Credit = require('cesium/Core/Credit')
	export import DefaultProxy = require('cesium/Core/DefaultProxy')
	export import defaultValue = require('cesium/Core/defaultValue')
	export import DeveloperError = require('cesium/Core/DeveloperError')
	export import DistanceDisplayCondition = require('cesium/Core/DistanceDisplayCondition')
	export import EasingFunction = require('cesium/Core/EasingFunction')
	export import Ellipsoid = require('cesium/Core/Ellipsoid')
	export import Event = require('cesium/Core/Event')
	export import ExtrapolationType = require('cesium/Core/ExtrapolationType')
	export import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	export import GregorianDate = require('cesium/Core/GregorianDate')
	export import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	export import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	export import Intersect = require('cesium/Core/Intersect')
	export import Interval = require('cesium/Core/Interval')
	export import isArray = require('cesium/Core/isArray')
	export import JulianDate = require('cesium/Core/JulianDate')
	export import LeapSecond = require('cesium/Core/LeapSecond')
	export import MapProjection = require('cesium/Core/MapProjection')
	export import Math = require('cesium/Core/Math')
	export import Matrix3 = require('cesium/Core/Matrix3')
	export import Matrix4 = require('cesium/Core/Matrix4')
	export import Occluder = require('cesium/Core/Occluder')
	export import OrientedBoundingBox = require('cesium/Core/OrientedBoundingBox')
	export import Packable = require('cesium/Core/Packable')
	export import Plane = require('cesium/Core/Plane')
	export import Quaternion = require('cesium/Core/Quaternion')
	export import Ray = require('cesium/Core/Ray')
	export import Rectangle = require('cesium/Core/Rectangle')
	export import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	export import requestAnimationFrame = require('cesium/Core/requestAnimationFrame')
	export import ScreenSpaceEventHandler = require('cesium/Core/ScreenSpaceEventHandler')
	export import ScreenSpaceEventType = require('cesium/Core/ScreenSpaceEventType')
	export import Spherical = require('cesium/Core/Spherical')
	export import TerrainData = require('cesium/Core/TerrainData')
	export import TerrainProvider = require('cesium/Core/TerrainProvider')
	export import TilingScheme = require('cesium/Core/TilingScheme')
	export import TimeInterval = require('cesium/Core/TimeInterval')
	export import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	export import TimeStandard = require('cesium/Core/TimeStandard')
	export import Transforms = require('cesium/Core/Transforms')
	export import TranslationRotationScale = require('cesium/Core/TranslationRotationScale')
	export import WebMercatorProjection = require('cesium/Core/WebMercatorProjection')
	export import WebMercatorTilingScheme = require('cesium/Core/WebMercatorTilingScheme')
	export import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	export import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	export import CompositeEntityCollection = require('cesium/DataSources/CompositeEntityCollection')
	export import ConstantPositionProperty = require('cesium/DataSources/ConstantPositionProperty')
	export import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	export import CustomDataSource = require('cesium/DataSources/CustomDataSource')
	export import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	export import CzmlDataSource = require('cesium/DataSources/CzmlDataSource')
	export import DataSource = require('cesium/DataSources/DataSource')
	export import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	export import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	export import DataSourceDisplay = require('cesium/DataSources/DataSourceDisplay')
	export import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	export import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	export import Entity = require('cesium/DataSources/Entity')
	export import EntityCluster = require('cesium/DataSources/EntityCluster')
	export import EntityCollection = require('cesium/DataSources/EntityCollection')
	export import EntityView = require('cesium/DataSources/EntityView')
	export import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	export import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	export import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	export import PathGraphics = require('cesium/DataSources/PathGraphics')
	export import PointGraphics = require('cesium/DataSources/PointGraphics')
	export import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	export import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	export import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	export import PositionProperty = require('cesium/DataSources/PositionProperty')
	export import Property = require('cesium/DataSources/Property')
	export import PropertyBag = require('cesium/DataSources/PropertyBag')
	export import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	export import SampledPositionProperty = require('cesium/DataSources/SampledPositionProperty')
	export import SampledProperty = require('cesium/DataSources/SampledProperty')
	export import TimeIntervalCollectionProperty = require('cesium/DataSources/TimeIntervalCollectionProperty')
	export import VelocityOrientationProperty = require('cesium/DataSources/VelocityOrientationProperty')
	export import WallGraphics = require('cesium/DataSources/WallGraphics')
	export import Camera = require('cesium/Scene/Camera')
	export import CameraEventType = require('cesium/Scene/CameraEventType')
	export import CullingVolume = require('cesium/Scene/CullingVolume')
	export import Fog = require('cesium/Scene/Fog')
	export import FrameRateMonitor = require('cesium/Scene/FrameRateMonitor')
	export import Globe = require('cesium/Scene/Globe')
	export import HeightReference = require('cesium/Scene/HeightReference')
	export import ImageryLayer = require('cesium/Scene/ImageryLayer')
	export import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	export import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	export import ImageryProvider = require('cesium/Scene/ImageryProvider')
	export import MapMode2D = require('cesium/Scene/MapMode2D')
	export import Model = require('cesium/Scene/Model')
	export import ModelAnimation = require('cesium/Scene/ModelAnimation')
	export import ModelAnimationCollection = require('cesium/Scene/ModelAnimationCollection')
	export import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	export import ModelMaterial = require('cesium/Scene/ModelMaterial')
	export import ModelMesh = require('cesium/Scene/ModelMesh')
	export import ModelNode = require('cesium/Scene/ModelNode')
	export import Moon = require('cesium/Scene/Moon')
	export import PerspectiveFrustum = require('cesium/Scene/PerspectiveFrustum')
	export import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	export import Scene = require('cesium/Scene/Scene')
	export import SceneMode = require('cesium/Scene/SceneMode')
	export import ScreenSpaceCameraController = require('cesium/Scene/ScreenSpaceCameraController')
	export import ShadowMap = require('cesium/Scene/ShadowMap')
	export import ShadowMode = require('cesium/Scene/ShadowMode')
	export import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	export import SkyBox = require('cesium/Scene/SkyBox')
	export import Sun = require('cesium/Scene/Sun')
	export import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	export import WebMapTileServiceImageryProvider = require('cesium/Scene/WebMapTileServiceImageryProvider')
	export import ClockViewModel = require('cesium/Widgets/ClockViewModel')
	export import Command = require('cesium/Widgets/Command')
	export import ToggleButtonViewModel = require('cesium/Widgets/ToggleButtonViewModel')
	export import Animation = require('cesium/Widgets/Animation/Animation')
	export import AnimationViewModel = require('cesium/Widgets/Animation/AnimationViewModel')
	export import BaseLayerPicker = require('cesium/Widgets/BaseLayerPicker/BaseLayerPicker')
	export import BaseLayerPickerViewModel = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel')
	export import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	export import CesiumWidget = require('cesium/Widgets/CesiumWidget/CesiumWidget')
	export import FullscreenButton = require('cesium/Widgets/FullscreenButton/FullscreenButton')
	export import FullscreenButtonViewModel = require('cesium/Widgets/FullscreenButton/FullscreenButtonViewModel')
	export import Geocoder = require('cesium/Widgets/Geocoder/Geocoder')
	export import GeocoderViewModel = require('cesium/Widgets/Geocoder/GeocoderViewModel')
	export import HomeButton = require('cesium/Widgets/HomeButton/HomeButton')
	export import HomeButtonViewModel = require('cesium/Widgets/HomeButton/HomeButtonViewModel')
	export import InfoBox = require('cesium/Widgets/InfoBox/InfoBox')
	export import InfoBoxViewModel = require('cesium/Widgets/InfoBox/InfoBoxViewModel')
	export import NavigationHelpButton = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButton')
	export import NavigationHelpButtonViewModel = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel')
	export import SceneModePicker = require('cesium/Widgets/SceneModePicker/SceneModePicker')
	export import SceneModePickerViewModel = require('cesium/Widgets/SceneModePicker/SceneModePickerViewModel')
	export import SelectionIndicator = require('cesium/Widgets/SelectionIndicator/SelectionIndicator')
	export import SelectionIndicatorViewModel = require('cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel')
	export import Timeline = require('cesium/Widgets/Timeline/Timeline')
	export import Viewer = require('cesium/Widgets/Viewer/Viewer')
	export import viewerCesiumInspectorMixin = require('cesium/Widgets/Viewer/viewerCesiumInspectorMixin')
	export import VRButton = require('cesium/Widgets/VRButton/VRButton')
	export import VRButtonViewModel = require('cesium/Widgets/VRButton/VRButtonViewModel')

}
declare module 'cesium/Core/CesiumTerrainProviderOptions' {
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface CesiumTerrainProviderOptions
	{
		url: string;
		proxy?: DefaultProxy;
		requestVertexNormals?: boolean;
		requestWaterMask?: boolean;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = CesiumTerrainProviderOptions

}
declare module 'cesium/Core/ClockOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ClockStep = require('cesium/Core/ClockStep')
	import ClockRange = require('cesium/Core/ClockRange')
	interface ClockOptions
	{
		startTime?: JulianDate;
		stopTime?: JulianDate;
		currentTime?: JulianDate;
		multiplier?: number;
		clockStep?: ClockStep;
		clockRange?: ClockRange;
		canAnimate?: boolean;
		shouldAnimate?: boolean;
	}
	export = ClockOptions

}
declare module 'cesium/Core/GeographicTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Rectangle = require('cesium/Core/Rectangle')
	interface GeographicTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		rectangle?: Rectangle;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
	}
	export = GeographicTilingSchemeOptions

}
declare module 'cesium/Core/TimeIntervalOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	interface TimeIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = TimeIntervalOptions

}
declare module 'cesium/Core/WebMercatorTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	interface WebMercatorTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
		rectangleSouthwestInMeters?: Cartesian2;
		rectangleNortheastInMeters?: Cartesian2;
	}
	export = WebMercatorTilingSchemeOptions

}
declare module 'cesium/Core/findIntervalOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	interface findIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
	}
	export = findIntervalOptions

}
declare module 'cesium/Core/fromIso8601Options' {
	interface fromIso8601Options
	{
		iso8601: string;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = fromIso8601Options

}
declare module 'cesium/Core/fromRandomOptions' {
	interface fromRandomOptions
	{
		red?: number;
		minimumRed?: number;
		maximumRed?: number;
		green?: number;
		minimumGreen?: number;
		maximumGreen?: number;
		blue?: number;
		minimumBlue?: number;
		maximumBlue?: number;
		alpha?: number;
		minimumAlpha?: number;
		maximumAlpha?: number;
	}
	export = fromRandomOptions

}
declare module 'cesium/DataSources/BillboardGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface BillboardGraphicsOptions
	{
		image?: Property|any;
		show?: Property|any;
		scale?: Property|any;
		horizontalOrigin?: Property|any;
		verticalOrigin?: Property|any;
		eyeOffset?: Property|any;
		pixelOffset?: Property|any;
		rotation?: Property|any;
		alignedAxis?: Property|any;
		width?: Property|any;
		height?: Property|any;
		color?: Property|any;
		scaleByDistance?: Property|any;
		translucencyByDistance?: Property|any;
		pixelOffsetScaleByDistance?: Property|any;
		imageSubRegion?: Property|any;
		sizeInMeters?: Property|any;
		heightReference?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = BillboardGraphicsOptions

}
declare module 'cesium/DataSources/BoxGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface BoxGraphicsOptions
	{
		dimensions?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = BoxGraphicsOptions

}
declare module 'cesium/DataSources/CorridorGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface CorridorGraphicsOptions
	{
		positions?: Property|any;
		width?: Property|any;
		cornerType?: Property|any;
		height?: Property|any;
		extrudedHeight?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		granularity?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = CorridorGraphicsOptions

}
declare module 'cesium/DataSources/CylinderGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface CylinderGraphicsOptions
	{
		length?: Property|any;
		topRadius?: Property|any;
		bottomRadius?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		numberOfVerticalLines?: Property|any;
		slices?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = CylinderGraphicsOptions

}
declare module 'cesium/DataSources/DataSourceDisplayOptions' {
	import Scene = require('cesium/Scene/Scene')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	interface DataSourceDisplayOptions
	{
		scene: Scene;
		dataSourceCollection: DataSourceCollection;
		visualizersCallback?: any;
	}
	export = DataSourceDisplayOptions

}
declare module 'cesium/DataSources/EllipseGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface EllipseGraphicsOptions
	{
		semiMajorAxis?: Property|any;
		semiMinorAxis?: Property|any;
		height?: Property|any;
		extrudedHeight?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		numberOfVerticalLines?: Property|any;
		rotation?: Property|any;
		stRotation?: Property|any;
		granularity?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = EllipseGraphicsOptions

}
declare module 'cesium/DataSources/EllipsoidGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface EllipsoidGraphicsOptions
	{
		radii?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		subdivisions?: Property|any;
		stackPartitions?: Property|any;
		slicePartitions?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = EllipsoidGraphicsOptions

}
declare module 'cesium/DataSources/EntityClusterOptions' {
	interface EntityClusterOptions
	{
		enabled?: boolean;
		pixelRange?: number;
		minimumClusterSize?: number;
	}
	export = EntityClusterOptions

}
declare module 'cesium/DataSources/EntityOptions' {
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import PositionProperty = require('cesium/DataSources/PositionProperty')
	import Entity = require('cesium/DataSources/Entity')
	import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/DataSources/PathGraphics')
	import PointGraphics = require('cesium/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/DataSources/WallGraphics')
	interface EntityOptions
	{
		id?: string;
		name?: string;
		availability?: TimeIntervalCollection;
		show?: boolean;
		description?: Property|any;
		position?: PositionProperty;
		orientation?: Property|any;
		viewFrom?: Property|any;
		parent?: Entity;
		billboard?: BillboardGraphics;
		box?: BoxGraphics;
		corridor?: CorridorGraphics;
		cylinder?: CylinderGraphics;
		ellipse?: EllipseGraphics;
		ellipsoid?: EllipsoidGraphics;
		label?: LabelGraphics;
		model?: ModelGraphics;
		path?: PathGraphics;
		point?: PointGraphics;
		polygon?: PolygonGraphics;
		polyline?: PolylineGraphics;
		polylineVolume?: PolylineVolumeGraphics;
		rectangle?: RectangleGraphics;
		wall?: WallGraphics;
	}
	export = EntityOptions

}
declare module 'cesium/DataSources/LabelGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface LabelGraphicsOptions
	{
		text?: Property|any;
		font?: Property|any;
		style?: Property|any;
		fillColor?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		show?: Property|any;
		scale?: Property|any;
		horizontalOrigin?: Property|any;
		verticalOrigin?: Property|any;
		eyeOffset?: Property|any;
		pixelOffset?: Property|any;
		translucencyByDistance?: Property|any;
		pixelOffsetScaleByDistance?: Property|any;
		heightReference?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = LabelGraphicsOptions

}
declare module 'cesium/DataSources/ModelGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface ModelGraphicsOptions
	{
		uri?: Property|any;
		show?: Property|any;
		scale?: Property|any;
		minimumPixelSize?: Property|any;
		maximumScale?: Property|any;
		incrementallyLoadTextures?: Property|any;
		runAnimations?: Property|any;
		nodeTransformations?: Property|any;
		shadows?: Property|any;
		heightReference?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = ModelGraphicsOptions

}
declare module 'cesium/DataSources/PathGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PathGraphicsOptions
	{
		leadTime?: Property|any;
		trailTime?: Property|any;
		show?: Property|any;
		width?: Property|any;
		material?: MaterialProperty;
		resolution?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = PathGraphicsOptions

}
declare module 'cesium/DataSources/PointGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface PointGraphicsOptions
	{
		color?: Property|any;
		pixelSize?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		show?: Property|any;
		scaleByDistance?: Property|any;
		translucencyByDistance?: Property|any;
		heightReference?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = PointGraphicsOptions

}
declare module 'cesium/DataSources/PolygonGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolygonGraphicsOptions
	{
		hierarchy?: Property|any;
		height?: Property|any;
		extrudedHeight?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		stRotation?: Property|any;
		granularity?: Property|any;
		perPositionHeight?: Property|any;
		closeTop?: boolean;
		closeBottom?: boolean;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = PolygonGraphicsOptions

}
declare module 'cesium/DataSources/PolylineGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolylineGraphicsOptions
	{
		positions?: Property|any;
		followSurface?: Property|any;
		width?: Property|any;
		show?: Property|any;
		material?: MaterialProperty;
		granularity?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = PolylineGraphicsOptions

}
declare module 'cesium/DataSources/PolylineVolumeGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolylineVolumeGraphicsOptions
	{
		positions?: Property|any;
		shape?: Property|any;
		cornerType?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		granularity?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = PolylineVolumeGraphicsOptions

}
declare module 'cesium/DataSources/RectangleGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface RectangleGraphicsOptions
	{
		coordinates?: Property|any;
		height?: Property|any;
		extrudedHeight?: Property|any;
		closeTop?: Property|any;
		closeBottom?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		rotation?: Property|any;
		stRotation?: Property|any;
		granularity?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = RectangleGraphicsOptions

}
declare module 'cesium/DataSources/WallGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface WallGraphicsOptions
	{
		positions?: Property|any;
		maximumHeights?: Property|any;
		minimumHeights?: Property|any;
		show?: Property|any;
		fill?: Property|any;
		material?: MaterialProperty;
		outline?: Property|any;
		outlineColor?: Property|any;
		outlineWidth?: Property|any;
		granularity?: Property|any;
		shadows?: Property|any;
		distanceDisplayCondition?: Property|any;
	}
	export = WallGraphicsOptions

}
declare module 'cesium/DataSources/loadOptions' {
	interface loadOptions
	{
		sourceUri?: string;
	}
	export = loadOptions

}
declare module 'cesium/DataSources/processOptions' {
	interface processOptions
	{
		sourceUri?: string;
	}
	export = processOptions

}
declare module 'cesium/DataSources/setInterpolationOptionsOptions' {
	import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	interface setInterpolationOptionsOptions
	{
		interpolationAlgorithm?: InterpolationAlgorithm;
		interpolationDegree?: number;
	}
	export = setInterpolationOptionsOptions

}
declare module 'cesium/Scene/FrameRateMonitorOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface FrameRateMonitorOptions
	{
		scene: Scene;
		samplingWindow?: number;
		quietPeriod?: number;
		warmupPeriod?: number;
		minimumFrameRateDuringWarmup?: number;
		minimumFrameRateAfterWarmup?: number;
	}
	export = FrameRateMonitorOptions

}
declare module 'cesium/Scene/ImageryLayerOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	interface ImageryLayerOptions
	{
		rectangle?: Rectangle;
		alpha?: number|(()=>void);
		brightness?: number|(()=>void);
		contrast?: number|(()=>void);
		hue?: number|(()=>void);
		saturation?: number|(()=>void);
		gamma?: number|(()=>void);
		show?: boolean;
		maximumAnisotropy?: number;
		minimumTerrainLevel?: number;
		maximumTerrainLevel?: number;
	}
	export = ImageryLayerOptions

}
declare module 'cesium/Scene/ModelOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import HeightReference = require('cesium/Scene/HeightReference')
	import Scene = require('cesium/Scene/Scene')
	import DistanceDisplayCondition = require('cesium/Core/DistanceDisplayCondition')
	interface ModelOptions
	{
		gltf?: Object|ArrayBuffer|Uint8Array;
		basePath?: string;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		maximumScale?: number;
		id?: Object;
		allowPicking?: boolean;
		incrementallyLoadTextures?: boolean;
		asynchronous?: boolean;
		shadows?: ShadowMode;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
		heightReference?: HeightReference;
		scene?: Scene;
		istanceDisplayCondition?: DistanceDisplayCondition;
	}
	export = ModelOptions

}
declare module 'cesium/Scene/MoonOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface MoonOptions
	{
		show?: boolean;
		textureUrl?: string;
		ellipsoid?: Ellipsoid;
		onlySunLighting?: boolean;
	}
	export = MoonOptions

}
declare module 'cesium/Scene/PrimitiveCollectionOptions' {
	interface PrimitiveCollectionOptions
	{
		show?: boolean;
		destroyPrimitives?: boolean;
	}
	export = PrimitiveCollectionOptions

}
declare module 'cesium/Scene/SceneOptions' {
	import MapProjection = require('cesium/Core/MapProjection')
	import MapMode2D = require('cesium/Scene/MapMode2D')
	interface SceneOptions
	{
		canvas: HTMLCanvasElement;
		contextOptions?: Object;
		creditContainer?: Element;
		mapProjection?: MapProjection;
		orderIndependentTranslucency?: boolean;
		scene3DOnly?: boolean;
		terrainExaggeration?: number;
		shadows?: boolean;
		mapMode2D?: MapMode2D;
	}
	export = SceneOptions

}
declare module 'cesium/Scene/ShadowMapOptions' {
	import Camera = require('cesium/Scene/Camera')
	interface ShadowMapOptions
	{
		context: any;
		lightCamera: Camera;
		enabled?: boolean;
		isPointLight?: boolean;
		pointLightRadius?: boolean;
		cascadesEnabled?: boolean;
		numberOfCascades?: number;
		maximumDistance?: number;
		size?: number;
		softShadows?: boolean;
		darkness?: number;
	}
	export = ShadowMapOptions

}
declare module 'cesium/Scene/SkyBoxOptions' {
	interface SkyBoxOptions
	{
		sources?: Object;
		show?: boolean;
	}
	export = SkyBoxOptions

}
declare module 'cesium/Scene/WebMapTileServiceImageryProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface WebMapTileServiceImageryProviderOptions
	{
		url: string;
		format?: string;
		layer: string;
		style: string;
		tileMatrixSetID: string;
		tileMatrixLabels?: Array<any>;
		tileWidth?: number;
		tileHeight?: number;
		tilingScheme?: TilingScheme;
		proxy?: Object;
		rectangle?: Rectangle;
		minimumLevel?: number;
		maximumLevel?: number;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
		subdomains?: string|Array<string>;
	}
	export = WebMapTileServiceImageryProviderOptions

}
declare module 'cesium/Scene/addAllOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	interface addAllOptions
	{
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = addAllOptions

}
declare module 'cesium/Scene/addOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	interface addOptions
	{
		name: string;
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = addOptions

}
declare module 'cesium/Scene/flyToBoundingSphereOptions' {
	import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	import Matrix4 = require('cesium/Core/Matrix4')
	import EasingFunction = require('cesium/Core/EasingFunction')
	interface flyToBoundingSphereOptions
	{
		duration?: number;
		offset?: HeadingPitchRange;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = flyToBoundingSphereOptions

}
declare module 'cesium/Scene/flyToOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Matrix4 = require('cesium/Core/Matrix4')
	import EasingFunction = require('cesium/Core/EasingFunction')
	interface flyToOptions
	{
		destination: Cartesian3|Rectangle;
		orientation?: Object;
		duration?: number;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = flyToOptions

}
declare module 'cesium/Scene/fromGltfOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	interface fromGltfOptions
	{
		url: string;
		headers?: Object;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		maximumScale?: number;
		id?: Object;
		allowPicking?: boolean;
		incrementallyLoadTextures?: boolean;
		asynchronous?: boolean;
		shadows?: ShadowMode;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
	}
	export = fromGltfOptions

}
declare module 'cesium/Scene/setViewOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Matrix4 = require('cesium/Core/Matrix4')
	interface setViewOptions
	{
		destination?: Cartesian3|Rectangle;
		orientation?: Object;
		endTransform?: Matrix4;
	}
	export = setViewOptions

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerOptions' {
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	interface BaseLayerPickerOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = BaseLayerPickerOptions

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModelOptions' {
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	interface BaseLayerPickerViewModelOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = BaseLayerPickerViewModelOptions

}
declare module 'cesium/Widgets/BaseLayerPicker/ProviderViewModelOptions' {
	import Command = require('cesium/Widgets/Command')
	interface ProviderViewModelOptions
	{
		name: string;
		tooltip: string;
		iconUrl: string;
		creationFunction: any|Command;
	}
	export = ProviderViewModelOptions

}
declare module 'cesium/Widgets/CesiumWidget/CesiumWidgetOptions' {
	import Clock = require('cesium/Core/Clock')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import SkyBox = require('cesium/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Scene/SceneMode')
	import MapProjection = require('cesium/Core/MapProjection')
	import Globe = require('cesium/Scene/Globe')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import MapMode2D = require('cesium/Scene/MapMode2D')
	interface CesiumWidgetOptions
	{
		clock?: Clock;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		sceneMode?: SceneMode;
		scene3DOnly?: boolean;
		orderIndependentTranslucency?: boolean;
		mapProjection?: MapProjection;
		globe?: Globe;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		contextOptions?: Object;
		creditContainer?: Element|string;
		terrainExaggeration?: number;
		shadows?: boolean;
		terrainShadows?: ShadowMode;
		mapMode2D?: MapMode2D;
	}
	export = CesiumWidgetOptions

}
declare module 'cesium/Widgets/Geocoder/GeocoderOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface GeocoderOptions
	{
		container: Element|string;
		scene: Scene;
		url?: string;
		key?: string;
		flightDuration?: number;
	}
	export = GeocoderOptions

}
declare module 'cesium/Widgets/Geocoder/GeocoderViewModelOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface GeocoderViewModelOptions
	{
		scene: Scene;
		url?: string;
		key?: string;
		flightDuration?: number;
	}
	export = GeocoderViewModelOptions

}
declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButtonOptions' {
	interface NavigationHelpButtonOptions
	{
		container: Element|string;
		instructionsInitiallyVisible?: boolean;
	}
	export = NavigationHelpButtonOptions

}
declare module 'cesium/Widgets/ToggleButtonViewModelOptions' {
	interface ToggleButtonViewModelOptions
	{
		toggled?: boolean;
		tooltip?: string;
	}
	export = ToggleButtonViewModelOptions

}
declare module 'cesium/Widgets/Viewer/ViewerOptions' {
	import Clock = require('cesium/Core/Clock')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import SkyBox = require('cesium/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Scene/SceneMode')
	import MapProjection = require('cesium/Core/MapProjection')
	import Globe = require('cesium/Scene/Globe')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import MapMode2D = require('cesium/Scene/MapMode2D')
	interface ViewerOptions
	{
		animation?: boolean;
		baseLayerPicker?: boolean;
		fullscreenButton?: boolean;
		vrButton?: boolean;
		geocoder?: boolean;
		homeButton?: boolean;
		infoBox?: boolean;
		sceneModePicker?: boolean;
		selectionIndicator?: boolean;
		timeline?: boolean;
		navigationHelpButton?: boolean;
		navigationInstructionsInitiallyVisible?: boolean;
		scene3DOnly?: boolean;
		clock?: Clock;
		selectedImageryProviderViewModel?: ProviderViewModel;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		fullscreenElement?: Element|string;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		automaticallyTrackDataSourceClocks?: boolean;
		contextOptions?: Object;
		sceneMode?: SceneMode;
		mapProjection?: MapProjection;
		globe?: Globe;
		orderIndependentTranslucency?: boolean;
		creditContainer?: Element|string;
		dataSources?: DataSourceCollection;
		terrainExaggeration?: number;
		shadows?: boolean;
		terrainShadows?: ShadowMode;
		mapMode2D?: MapMode2D;
	}
	export = ViewerOptions

}
declare module 'cesium/Widgets/Viewer/flyToOptions' {
	import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	interface flyToOptions
	{
		duration?: number;
		maximumHeight?: number;
		offset?: HeadingPitchRange;
	}
	export = flyToOptions

}
declare module 'cesium' {
	}
