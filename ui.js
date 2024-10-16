(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ui_atlas_1", frames: [[412,1199,64,159],[54,1423,46,95],[800,850,49,105],[626,850,85,175],[208,1313,33,10],[818,957,38,11],[0,1313,206,108],[626,1027,191,47],[245,1121,165,237],[0,1121,243,190],[713,944,55,42],[713,988,48,29],[770,957,46,35],[713,850,85,92],[0,1423,52,95],[412,1121,249,76],[208,1360,254,86],[0,850,624,269],[0,0,858,848],[860,0,834,834],[860,836,552,530]]},
		{name:"ui_atlas_2", frames: [[0,760,1284,724],[0,0,1296,758]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2393,218);


(lib.Activitycompletedimg = function() {
	this.initialize(ss["ui_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,4320);


(lib.Bitmap10 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BlueBG_img = function() {
	this.initialize(ss["ui_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.h1 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.h2 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hill = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.rotation_img = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.shine_main2 = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Start_Btn_img = function() {
	this.initialize(ss["ui_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1196.5,109), null);


(lib.shine_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_main2();
	this.instance.setTransform(-416.9,-416.9,0.9998,0.9998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shine_03, new cjs.Rectangle(-416.9,-416.9,833.9,833.9), null);


(lib.root_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.root_bg, new cjs.Rectangle(0,0,1280,720), null);


(lib.RAYS1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.rotation_img();
	this.instance.setTransform(-429,-424);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429,-424,858,848);


(lib.pocket = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-29,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,55,42);


(lib.Mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-24,-14);

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(-23,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-22,48,37);


(lib.mcTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(126,162,163,0.008)").s().p("AhFBVIAAipICLAAIAACpg");
	this.shape.setTransform(7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcTxt, new cjs.Rectangle(0,0,14,17), null);


(lib.Gsk1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("ARvAAQAACwlMB8QlNB8nWAAQnVAAlNh8QlMh8AAiwQAAivFMh8QFNh8HVAAQHWAAFNB8QFMB8AACvg");
	this.shape.setTransform(-0.0006,37.4987,0.9492,0.8836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#932442").s().p("AshEsQlNh8AAiwQAAivFNh8QFMh8HVAAQHWAAFNB8QFMB8AACvQAACwlMB8QlNB8nWAAQnVAAlMh8g");
	this.shape_1.setTransform(-0.0006,37.4987,0.9492,0.8836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.7,-1,217.5,77);


(lib.GL3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-43,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-1,85,92);


(lib.GL2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-26,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-1,52,95);


(lib.GL1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-32,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-1,64,159);


(lib.GHair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-103,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-54,206,108);


(lib.GH3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-42,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-1,85,175);


(lib.GH2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-25,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-1,49,105);


(lib.Gh1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-23,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-1,46,95);


(lib.GBody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-83,-237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-237,165,237);


(lib.Eyebrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-32,-9);

	this.instance_1 = new lib.Bitmap15();
	this.instance_1.setTransform(-37,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-10,38,11);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.blue_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueBG_img();
	this.instance.setTransform(-648,-379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-648,-379,1296,758);


(lib.Blinker_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.h2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Blinker_2, new cjs.Rectangle(0,0,254,86), null);


(lib.blinker_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.h1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blinker_1, new cjs.Rectangle(0,0,249,76), null);


(lib.BG_Anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_Anim, new cjs.Rectangle(0,0,1280,4320), null);


(lib.Activity_Completed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Activitycompletedimg();
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Activity_Completed, new cjs.Rectangle(-640,-360,1284,724), null);


(lib.StartAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Start_Btn_img();
	this.instance.setTransform(337,78);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(640.1,517.8,0.7679,0.7679,0,0,0,598.4,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.bg = new lib.root_bg();
	this.bg.name = "bg";
	this.bg.cache(-2,-2,1284,724);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StartAnim, new cjs.Rectangle(0,0,1280,720), null);


(lib.skwrong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.pocket("synched",0);
	this.instance.setTransform(69.1,163,1,1,0,0,180,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).to({x:73.3,y:162.7},13).wait(48).to({startPosition:0},0).to({x:69.1,y:163},21).wait(6).to({startPosition:0},0).to({_off:true},1).wait(292));

	// Layer_2
	this.instance_1 = new lib.pocket("synched",0);
	this.instance_1.setTransform(-65.8,161.6,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({startPosition:0},0).to({x:-68.8},13).wait(48).to({startPosition:0},0).to({x:-65.8},21).wait(6).to({startPosition:0},0).to({_off:true},1).wait(292));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("An11YIRNA0QApEnBQFdQAjCVByHAQBbFnAsDaQA+E7ATEMQiRB+kxBNQkfBIlaAIQlbAJkeg7Qk0g/iTh+QAEnfDGrQQA3jICFm1QCDmtA/jog");
	this.shape.setTransform(2.4125,150.2346);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F73C6F").s().p("Ap2UmQk0g/iTh+QAEnfDGrQQA3jICFm1QCDmtA/joIRNA0QApEnBQFdQAjCVByHAQBbFnAsDaQA+E7ATEMQiRB+kxBNQkfBIlaAIIhaABQknAAj4gzg");
	this.shape_1.setTransform(2.4125,150.2346);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RqQABk8BSmWQAtjgBHj9QAOgxARg9QA+jMBilAQAKgfAJgdQB0l9A7jeIRMAzQACAJACAKQApEkBMFKQAEAPAEARQAdB7BJETQAUBOAWBZQAsCpAgCMQAjCYAXB1QA9E3ATERQgCACgCACQiEBqkSBJQgWAGgWAFQkiBJlBALQgJABgKAAQlUANkTg1QgJgCgJgCQk0g9iSiBg");
	this.shape_2.setTransform(2.425,150.153);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F73C6F").s().p("AplUsIgSgEQk0g9iSiBQABk8BSmWQAtjgBHj9IAfhuICgoMIATg8QB0l9A7jeIRMAzIAEATQApEkBMFKIAIAgQAdB7BJETIAqCnQAsCpAgCMQAjCYAXB1QA9E3ATERIgEAEQiEBqkSBJIgsALQkiBJlBALIgTABQhCADhBAAQkHAAjdgrg");
	this.shape_3.setTransform(2.425,150.153);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgBlBBRmRQAsjgBJj9QANgxASg8QBCjVBgk2QAJgeAKgdQB0l5A6jjIRLAxQADAJADAJQApEpBMFEQADAPAEARQAdB4BLEWQAVBOAXBYQAsCoAgCOQAiCVAXB4QA6EzAUEXQgCACgCABQiCBhkXBKQgWAGgWAGQktBKk0ANQgKABgKAAQlWARkRgzQgJgBgIgCQkzg7iSiFg");
	this.shape_4.setTransform(2.4244,150.0891);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F73C6F").s().p("ApnUuIgRgDQkzg7iSiFQgBlBBRmRQAsjgBJj9IAfhtICioLIATg7QB0l5A6jjIRLAxIAGASQApEpBMFEIAHAgQAdB4BLEWIAsCmQAsCoAgCOQAiCVAXB4QA6EzAUEXIgEADQiCBhkXBKIgsAMQktBKk0ANIgUABQhVAEhSAAQj0AAjMgmg");
	this.shape_5.setTransform(2.4244,150.0891);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgClGBOmMQAsjfBKj+QAOgxASg8QBGjdBdkrQAKgeAJgdQB0l0A7jpIRJAvQAEAIAEAIQApEwBLE9QADAPAEARQAdB1BOEZQAVBOAXBXQAsCnAgCPQAiCUAWB7QA4EuAVEcQgCACgBACQiBBYkdBLQgVAFgWAGQk4BNkoAOQgJABgJAAQlaAVkOgwQgJgBgJgCQkyg5iRiJg");
	this.shape_6.setTransform(2.4211,150.0552);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F73C6F").s().p("ApoUwIgSgDQkyg5iRiJQgClGBOmMQAsjfBKj+IAghtQBGjdBdkrIATg7QB0l0A7jpIRJAvIAIAQQApEwBLE9IAHAgQAdB1BOEZIAsClQAsCnAgCPQAiCUAWB7QA4EuAVEcIgDAEQiBBYkdBLIgrALQk4BNkoAOIgSABQhqAHhjAAQjgAAi7gig");
	this.shape_7.setTransform(2.4211,150.0552);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgElLBNmGQAsjfBKj+QAOgxASg7QBMjnBakfQAKgfAJgdQB0lvA7juIRIAsQAEAHAEAIQAqE1BKE4QAEAPAEAQQAcByBREcQAWBOAXBXQAsClAgCRQAgCSAXB+QA2EqAVEhQgCACgBACQh/BPkiBLQgWAGgVAGQlEBOkaAQQgKABgJABQlcAZkLguQgJgBgJgCQkyg3iQiNg");
	this.shape_8.setTransform(2.4151,150.0433);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F73C6F").s().p("AppUyIgSgDQkyg3iQiNQgElLBNmGQAsjfBKj+IAghsQBMjnBakfIATg8QB0lvA7juIRIAsIAIAPQAqE1BKE4IAIAfQAcByBREcIAtClQAsClAgCRQAgCSAXB+QA2EqAVEhIgDAEQh/BPkiBLIgrAMQlEBOkaAQIgTACQh7AIhxAAQjOAAitgdg");
	this.shape_9.setTransform(2.4151,150.0433);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgGlQBMmBQArjeBLj/QAPgxASg7QBQjvBYkVQAKgeAJgdQB0lqA6j0IRHAqQAFAHAFAGQAqE8BJExQAEAPAEAQQAbBvBVEfQAWBOAXBWQAtCkAfCTQAgCPAWCCQA0ElAWEnQgBACgCACQh9BGknBMQgWAFgWAGQlOBRkOARQgJABgJABQlfAdkJgrQgJgCgIgBQkyg1iPiRg");
	this.shape_10.setTransform(2.4029,150.0461);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F73C6F").s().p("AprU0IgRgDQkyg1iPiRQgGlQBMmBQArjeBLj/IAhhsQBQjvBYkVIATg7QB0lqA6j0IRHAqIAKANQAqE8BJExIAIAfQAbBvBVEfQAWBOAXBWQAtCkAfCTQAgCPAWCCQA0ElAWEnIgDAEQh9BGknBMIgsALQlOBRkOARIgSACQiOALh/AAQi9AAiegZg");
	this.shape_11.setTransform(2.4029,150.0461);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgIlWBKl7QAqjeBNj/QAPgyASg6QBVj4BVkJQAKgfAKgcQBzlmA6j6IRGAoQAGAGAFAGQArFBBIErQADAPAEARQAcBsBXEhQAXBOAXBVQAtCkAfCUQAfCNAWCFQAyEhAWEsQgBACgBACQh7A+ktBMQgWAFgVAFQlaBUkBATQgJABgJAAQlhAikHgpQgJgCgIgBQkxgziOiUg");
	this.shape_12.setTransform(2.3903,150.0656);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F73C6F").s().p("ApsU1IgRgDQkxgziOiUQgIlWBKl7QAqjeBNj/IAhhsQBVj4BVkJIAUg7QBzlmA6j6IRGAoIALAMQArFBBIErIAHAgQAcBsBXEhQAXBOAXBVQAtCkAfCUQAfCNAWCFQAyEhAWEsIgCAEQh7A+ktBMIgrAKQlaBUkBATIgSABQifAQiNAAQisAAiQgXg");
	this.shape_13.setTransform(2.3903,150.0656);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgJlbBHl2QAqjeBOj/QAQgyASg5QBZkBBTj+QAKgfAJgdQB0lgA6kAIREAmQAHAFAGAFQAqFIBIElQAEAOAEAQQAaBpBbElQAXBOAXBVQAuChAfCXQAeCLAWCIQAvEcAXEyQgBACgBACQh5A0kzBNQgVAFgWAGQlkBVj0AUQgKABgIABQllAmkDgnQgJgBgJgBQkwgxiNiYg");
	this.shape_14.setTransform(2.3747,150.0627);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F73C6F").s().p("AptU2IgSgCQkwgxiNiYQgJlbBHl2QAqjeBOj/IAihrQBZkBBTj+IATg8QB0lgA6kAIREAmIANAKQAqFIBIElIAIAeQAaBpBbElQAXBOAXBVQAuChAfCXQAeCLAWCIQAvEcAXEyIgCAEQh5A0kzBNIgrALQlkBVj0AUIgSACQiwATiYAAQidAAiDgUg");
	this.shape_15.setTransform(2.3747,150.0627);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgLlgBGlxQApjdBQj/QAPgzASg4QBfkKBQjzQAKgfAJgcQBzlcA7kGIRDAlQAHAEAHAEQAqFNBHEfQAEAPAEAQQAaBmBdEnQAZBPAXBTQAtChAgCYQAcCJAWCLQAuEYAXE3QgBACAAACQh4Ask4BNQgWAFgVAFQlwBYjnAWQgJABgJABQlnAqkAglQgJgBgJgBQkwgviMicg");
	this.shape_16.setTransform(2.3561,150.111);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F73C6F").s().p("ApuU3IgSgCQkwgviMicQgLlgBGlxQApjdBQj/IAhhrQBfkKBQjzIATg7QBzlcA7kGIRDAlIAOAIQAqFNBHEfIAIAfQAaBmBdEnQAZBPAXBTQAtChAgCYQAcCJAWCLQAuEYAXE3IgBAEQh4Ask4BNIgrAKQlwBYjnAWIgSACQi/AXijAAQiOAAh3gSg");
	this.shape_17.setTransform(2.3561,150.111);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgMlmBElrQApjdBQj/QAQgzATg4QBjkTBNjoQAKgeAKgdQBylXA7kLIRCAiQAHAEAIADQArFTBGEZQADAOAEAQQAaBjBhEqQAZBPAXBTQAtCfAgCaQAcCHAVCOQAsEUAYE8QgBACAAADQh3Aik9BOQgVAFgWAFQl7BajaAXQgJABgJABQlpAvj+gjQgJgBgJgBQkvgsiMigg");
	this.shape_18.setTransform(2.328,150.172);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F73C6F").s().p("ApvU4IgSgCQkvgsiMigQgMlmBElrQApjdBQj/IAjhrQBjkTBNjoIAUg7QBylXA7kLIRCAiIAPAHQArFTBGEZIAHAeQAaBjBhEqQAZBPAXBTQAtCfAgCaQAcCHAVCOQAsEUAYE8IgBAFQh3Aik9BOIgrAKQl7BajaAXIgSACQjPAbisAAQiAAAhsgPg");
	this.shape_19.setTransform(2.328,150.172);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RpQgOlrBDllQAojcBSkBQAQgzASg3QBokcBLjcQAKgfAKgcQBylTA6kRIRBAgQAJADAIADQArFZBFESQAEAPAEAQQAZBgBjEsQAaBPAXBSQAuCfAfCbQAbCFAWCRQApEQAZFBQgBACAAADQh0AZlDBOQgWAGgVAFQmGBcjNAZQgJABgJABQlsAzj8ggQgJgCgIgBQkvgqiLikg");
	this.shape_20.setTransform(2.3033,150.2456);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F73C6F").s().p("ApxU6IgRgDQkvgqiLikQgOlrBDllQAojcBSkBIAihqQBokcBLjcIAUg7QBylTA6kRIRBAgIARAGQArFZBFESIAIAfQAZBgBjEsQAaBPAXBSQAuCfAfCbQAbCFAWCRQApEQAZFBIgBAFQh0AZlDBOIgrALQmGBcjNAZIgSACQjfAfi1AAQhyAAhigMg");
	this.shape_21.setTransform(2.3033,150.2456);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RoQgQlwBBlgQAojcBSkAQARg0ASg2QBtklBIjRQALgfAJgcQBylOA7kXIQ/AeQAJACAJACQArFfBEEMQAEAPAEAPQAZBeBnEvQAaBPAXBSQAuCdAfCcQAaCDAWCVQAnELAZFGQAAADAAADQhzAQlIBPQgWAFgVAFQmRBejAAaQgJACgJABQlvA3j4geQgJgBgJgBQkvgoiJiog");
	this.shape_22.setTransform(2.2748,150.3294);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F73C6F").s().p("ApxU6IgSgCQkvgoiJioQgQlwBBlgQAojcBSkAIAjhqQBtklBIjRIAUg7QBylOA7kXIQ/AeIASAEQArFfBEEMIAIAeQAZBeBnEvQAaBPAXBSQAuCdAfCcQAaCDAWCVQAnELAZFGIAAAGQhzAQlIBPIgrAKQmRBejAAaIgSADQjtAki8AAQhnAAhXgLg");
	this.shape_23.setTransform(2.2748,150.3294);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RnQgRl1A/lbQAnjbBUkBQARg0ATg2QBxktBFjHQALgfAJgbQBzlKA6kcIQ+AcQAKACAJABQAsFkBDEGQAEAPAEAPQAZBbBpEyQAbBPAXBRQAvCcAeCeQAaCBAVCXQAlEHAaFMQAAADgBACQhwAIlOBPQgVAFgVAFQmdBhizAbQgJACgJABQlxA7j2gbQgJgBgJgBQkugniJirg");
	this.shape_24.setTransform(2.2348,150.4121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F73C6F").s().p("ApyU7IgSgCQkugniJirQgRl1A/lbQAnjbBUkBQARg0ATg2QBxktBFjHIAUg6QBzlKA6kcIQ+AcIATADQAsFkBDEGIAIAeQAZBbBpEyQAbBPAXBRQAvCcAeCeQAaCBAVCXQAlEHAaFMIgBAFQhwAIlOBPIgqAKQmdBhizAbIgSADQj8ApjDAAQhaAAhOgJg");
	this.shape_25.setTransform(2.2348,150.4121);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Any1OIRNA0QAuGABIEIQAYBYBsE1QBSDpAuDwQBCFWApIdQhvgBlTBPQnKBsiuAeQmABDj5gaQk7ghiNi0QgSl7A9lVQAvkHBxk+QCJlrBEjBQB3lUA6ksg");
	this.shape_26.setTransform(2.1921,149.2384);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F73C6F").s().p("ApzVIQk7ghiNi0QgSl7A9lVQAvkHBxk+QCJlrBEjBQB3lUA6ksIRNA0QAuGABIEIQAYBYBsE1QBSDpAuDwQBCFWApIdQhvgBlTBPQnKBsiuAeQkUAwjPAAQhRAAhFgHg");
	this.shape_27.setTransform(2.1921,149.2384);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RnQgSl4A+lYQAojcBUkAQARg0ATg2QBzkxBEjCQALgfAJgcQBylHA6keIQ+AbQAKABAKABQAsFnBDEDQAEAPAEAPQAYBZBrE0QAbBPAXBQQAvCcAeCeQAZCBAVCYQAlEGAaFNQAAADAAADQhxAElPBPQgWAFgVAFQmgBiivAcQgIABgKACQlyA9j1gbQgJgBgIgBQkugmiJisg");
	this.shape_28.setTransform(2.2225,150.4642);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F73C6F").s().p("ApzU7IgRgCQkugmiJisQgSl4A+lYQAojcBUkAIAkhqQBzkxBEjCIAUg7QBylHA6keIQ+AbIAUACQAsFnBDEDIAIAeQAYBZBrE0QAbBPAXBQQAvCcAeCeQAZCBAVCYQAlEGAaFNIAAAGQhxAElPBPIgrAKQmgBiivAcIgSADQkAAqjFAAQhXAAhLgIg");
	this.shape_29.setTransform(2.2225,150.4642);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RoQgRl1A/lbQAojcBUkBQAQgzATg2QBwksBGjJQALgfAJgbQBzlLA6kbIQ+AdQAKABAKACQArFjBDEHQAEAPAEAPQAZBbBpEyQAaBPAYBRQAuCcAfCeQAZCBAVCXQAmEIAaFKQAAADgBADQhxAKlMBPQgWAFgVAFQmZBgi3AbQgIABgKACQlwA6j3gcQgJgBgJgBQkugniJiqg");
	this.shape_30.setTransform(2.2444,150.3918);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F73C6F").s().p("ApyU7IgSgCQkugniJiqQgRl1A/lbQAojcBUkBQAQgzATg2QBwksBGjJIAUg6QBzlLA6kbIQ+AdIAUADQArFjBDEHIAIAeQAZBbBpEyQAaBPAYBRQAuCcAfCeQAZCBAVCXQAmEIAaFKIgBAGQhxAKlMBPIgrAKQmZBgi3AbIgSADQj4AnjBAAQheAAhQgJg");
	this.shape_31.setTransform(2.2444,150.3918);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RoQgQlxBAlfQAojcBTkAQAQg0ATg2QBtkmBIjQQALgfAJgcQBylNA6kXIRAAdQAJACAJACQArFgBEELQAEAPAEAPQAZBdBnEwQAaBPAYBRQAuCdAfCdQAaCDAVCUQAnELAZFHQAAADAAADQhzAPlJBOQgVAGgVAFQmTBei+AbQgJABgKABQluA4j5geQgJgBgIgBQkvgoiJiog");
	this.shape_32.setTransform(2.266,150.3483);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F73C6F").s().p("ApyU6IgRgCQkvgoiJioQgQlxBAlfQAojcBTkAIAjhqQBtkmBIjQIAUg7QBylNA6kXIRAAdIASAEQArFgBEELIAIAeQAZBdBnEwQAaBPAYBRQAuCdAfCdQAaCDAVCUQAnELAZFHIAAAGQhzAPlJBOIgqALQmTBei+AbIgTACQjuAki9AAQhlAAhXgKg");
	this.shape_33.setTransform(2.266,150.3483);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RpQgPluBBljQAojcBTkAQAQgzATg3QBqkhBJjWQALgfAJgcQBzlRA6kTIRAAfQAJACAIADQArFcBFEPQAEAPAEAPQAZBfBlEuQAaBPAXBRQAuCeAfCcQAbCEAVCTQAoENAZFEQAAADgBACQhzAVlFBOQgWAFgVAGQmMBdjHAZQgIACgKABQltA1j6gfQgJgBgIgBQkvgqiKilg");
	this.shape_34.setTransform(2.2852,150.272);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F73C6F").s().p("ApxU6IgRgCQkvgqiKilQgPluBBljQAojcBTkAQAQgzATg3QBqkhBJjWIAUg7QBzlRA6kTIRAAfIARAFQArFcBFEPIAIAeQAZBfBlEuQAaBPAXBRQAuCeAfCcQAbCEAVCTQAoENAZFEIgBAFQhzAVlFBOIgrALQmMBdjHAZIgSADQjmAhi5AAQhsAAhcgLg");
	this.shape_35.setTransform(2.2852,150.272);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RpQgOlqBDlmQAojdBSkAQAQgzATg3QBnkbBLjeQAKgeAKgcQBylUA6kQIRBAgQAJADAIADQArFZBFESQAEAPAEAQQAZBgBjEtQAaBOAXBTQAuCeAfCbQAbCFAWCRQApEQAZFBQgBACAAADQh1AalCBOQgVAFgWAGQmFBcjOAYQgJABgJABQlsAzj7ghQgJgBgJgBQkvgriLijg");
	this.shape_36.setTransform(2.3033,150.2363);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F73C6F").s().p("ApwU5IgSgCQkvgriLijQgOlqBDlmQAojdBSkAIAjhqQBnkbBLjeIAUg6QBylUA6kQIRBAgIARAGQArFZBFESIAIAfQAZBgBjEtQAaBOAXBTQAuCeAfCbQAbCFAWCRQApEQAZFBIgBAFQh1AalCBOIgrALQmFBcjOAYIgSACQjdAfi0AAQh0AAhigNg");
	this.shape_37.setTransform(2.3033,150.2363);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgNloBElpQApjcBRkAQAPgzATg4QBkkVBNjlQAKgfAKgcQBylWA7kNIRBAiQAIADAIAEQArFUBFEXQAEAPAEAQQAaBiBhErQAZBOAYBTQAtCfAfCaQAcCGAWCPQArETAYE9QgBADAAADQh2Afk/BOQgVAFgWAFQl+BbjWAYQgKABgIABQlqAwj+giQgJgBgIgCQkwgriLihg");
	this.shape_38.setTransform(2.32,150.1842);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F73C6F").s().p("ApwU5IgRgDQkwgriLihQgNloBElpQApjcBRkAIAihrQBkkVBNjlIAUg7QBylWA7kNIRBAiIAQAHQArFUBFEXIAIAfQAaBiBhErQAZBOAYBTQAtCfAfCaQAcCGAWCPQArETAYE9IgBAGQh2Afk/BOIgrAKQl+BbjWAYIgSACQjTAciuAAQh9AAhqgOg");
	this.shape_39.setTransform(2.32,150.1842);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgMlkBFltQApjdBQj/QAQgzASg4QBikQBOjsQAKgeAKgdQBzlZA6kJIRCAjQAIAEAHAEQArFRBGEaQAEAPAEAQQAaBkBfEpQAZBPAXBTQAuCgAfCYQAcCIAWCNQAsEWAYE6QgBACgBADQh2Alk8BNQgVAGgWAFQl3BZjeAXQgKABgIABQlpAtj/gjQgJgBgIgCQkwgtiMieg");
	this.shape_40.setTransform(2.3361,150.1578);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F73C6F").s().p("ApvU4IgRgDQkwgtiMieQgMlkBFltQApjdBQj/IAihrQBikQBOjsIAUg7QBzlZA6kJIRCAjIAPAIQArFRBGEaIAIAfQAaBkBfEpQAZBPAXBTQAuCgAfCYQAcCIAWCNQAsEWAYE6IgCAFQh2Alk8BNIgrALQl3BZjeAXIgSACQjKAaioAAQiFAAhxgQg");
	this.shape_41.setTransform(2.3361,150.1578);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgLlgBGlxQApjdBPj/QAQgzASg4QBfkLBQjyQAKgfAJgcQBzlcA7kFIRDAkQAHAEAHAEQAqFOBHEeQAEAPAEAQQAaBmBdEnQAZBOAXBUQAtChAgCXQAdCKAVCLQAuEYAXE3QgBACAAACQh4Ark4BNQgWAGgVAFQlxBYjmAWQgJABgJABQlnAqkAglQgJgBgJgBQkwgviMicg");
	this.shape_42.setTransform(2.3503,150.136);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F73C6F").s().p("ApuU3IgSgCQkwgviMicQgLlgBGlxQApjdBPj/IAihrQBfkLBQjyIATg7QB0lcA6kFIRDAkIAOAIQAqFOBHEeIAIAfQAaBmBdEnQAZBOAYBUQAsChAgCXQAdCKAVCLQAuEYAXE3IgBAEQh4Ark4BNIgrALQlxBYjmAWIgSACQjAAWiiAAQiOAAh3gRg");
	this.shape_43.setTransform(2.3503,150.136);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgKleBHlzQAqjdBOkAQAPgyATg5QBbkFBSj5QAKgfAJgcQBzlfA7kCIREAlQAGAFAHAFQAqFJBHEjQAEAOAEARQAbBnBbEmQAYBOAYBUQAtCiAfCWQAeCLAVCJQAvEbAXEzQgBADAAACQh5Awk1BNQgWAGgVAFQlqBWjuAVQgJABgJABQllAokDgmQgJgBgIgCQkxgviMiag");
	this.shape_44.setTransform(2.3633,150.0941);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F73C6F").s().p("ApuU3IgRgDQkxgviMiaQgKleBHlzQAqjdBOkAQAPgyATg5QBbkFBSj5IATg7QBzlfA7kCIREAlIANAKQAqFJBHEjIAIAfQAbBnBbEmQAYBOAYBUQAtCiAfCWQAeCLAVCJQAvEbAXEzIgBAFQh5Awk1BNIgrALQlqBWjuAVIgSACQi2AUicAAQiXAAh/gSg");
	this.shape_45.setTransform(2.3633,150.0941);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgJlaBIl3QAqjeBOj/QAPgyASg5QBZkABTkAQAKgfAJgcQB0liA6j+IRFAmQAGAFAGAGQAqFGBIEmQAEAPAEAQQAbBpBZEkQAYBPAXBUQAtCiAgCWQAeCMAVCHQAxEdAWExQgBACgBACQh6A2kxBNQgWAFgVAFQljBVj2AUQgJABgJABQlkAmkEgoQgJgBgIgCQkxgxiNiXg");
	this.shape_46.setTransform(2.375,150.0823);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F73C6F").s().p("AptU2IgRgDQkxgxiNiXQgJlaBIl3QAqjeBOj/IAhhrQBZkABTkAIATg7QB0liA6j+IRFAmIAMALQAqFGBIEmIAIAfQAbBpBZEkQAYBPAXBUQAtCiAgCWQAeCMAVCHQAxEdAWExIgCAEQh6A2kxBNIgrAKQljBVj2AUIgSACQisASiWAAQigAAiGgUg");
	this.shape_47.setTransform(2.375,150.0823);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgIlXBJl6QAqjeBOj/QAPgxASg6QBWj6BUkHQAKgfAKgcQBzllA6j7IRGAoQAGAGAFAFQArFDBIEqQADAOAEARQAbBrBYEiQAYBOAWBVQAtCjAgCVQAeCNAXCFQAxEhAWEsQgBADgBACQh7A7kuBMQgVAGgWAFQlcBUj+ATQgKABgIABQliAikGgoQgJgCgJgBQkwgziOiVg");
	this.shape_48.setTransform(2.3901,150.0435);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F73C6F").s().p("ApsU2IgSgDQkwgziOiVQgIlXBJl6QAqjeBOj/IAhhrQBWj6BUkHIAUg7QBzllA6j7IRGAoIALALQArFDBIEqIAHAfQAbBrBYEiQAYBOAWBVQAtCjAgCVQAeCNAXCFQAxEhAWEsIgCAFQh7A7kuBMIgrALQlcBUj+ATIgSACQijAPiQAAQioAAiNgVg");
	this.shape_49.setTransform(2.3901,150.0435);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgHlTBKl+QArjeBMj/QAPgxASg7QBTj0BWkOQAKgfAKgcQBzloA7j3IRGApQAFAGAFAGQArE/BIEuQAEAPAEAQQAbBtBWEgQAXBPAXBVQAtCkAfCUQAfCOAXCDQAyEjAWEqQgBACgBACQh8BBkrBMQgVAFgWAGQlVBSkGASQgKABgIABQlhAgkHgqQgJgCgJgBQkxg0iOiTg");
	this.shape_50.setTransform(2.3988,150.0419);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F73C6F").s().p("AprU1IgSgDQkxg0iOiTQgHlTBKl+QArjeBMj/IAhhsQBTj0BWkOIAUg7QBzloA7j3IRGApIAKAMQArE/BIEuIAIAfQAbBtBWEgQAXBPAXBVQAtCkAfCUQAfCOAXCDQAyEjAWEqIgCAEQh8BBkrBMIgrALQlVBSkGASIgSACQiZANiIAAQiyAAiVgXg");
	this.shape_51.setTransform(2.3988,150.0419);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgFlQBLmBQArjeBMj/QAOgxASg7QBQjvBYkVQAKgeAJgdQB0lrA6j0IRHArQAFAHAFAGQAqE7BJEyQAEAPAEAQQAbBvBVEfQAWBOAXBWQAtCkAfCTQAgCPAWCCQA0EmAWEmQgBACgCACQh9BHknBLQgWAGgVAFQlOBRkPARQgJABgJABQlfAdkJgrQgJgCgIgBQkyg1iPiRg");
	this.shape_52.setTransform(2.4062,150.0211);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F73C6F").s().p("AprU0IgRgDQkyg1iPiRQgFlQBLmBQArjeBMj/IAghsQBQjvBYkVIATg7QB0lrA6j0IRHArIAKANQAqE7BJEyIAIAfQAbBvBVEfQAWBOAXBWQAtCkAfCTQAgCPAWCCQA0EmAWEmIgDAEQh9BHknBLIgrALQlOBRkPARIgSACQiNAMiAAAQi9AAiegag");
	this.shape_53.setTransform(2.4062,150.0211);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgElNBMmEQArjfBLj+QAPgxASg7QBNjqBZkbQAKgfAJgdQB0ltA7jxIRHAsQAFAHAEAHQAqE4BKE1QADAPAEARQAcBwBSEdQAXBOAWBXQAtClAgCSQAgCQAWCAQA2EoAVEjQgCACgBACQh+BMkkBMQgWAFgVAGQlIBPkWARQgJAAgJABQldAbkLgtQgJgCgJgBQkxg3iQiOg");
	this.shape_54.setTransform(2.4124,150.0313);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F73C6F").s().p("ApqUzIgSgDQkxg3iQiOQgElNBMmEQArjfBLj+IAhhsQBNjqBZkbIATg8QB0ltA7jxIRHAsIAJAOQAqE4BKE1IAHAgQAcBwBSEdQAXBOAWBXQAtClAgCSQAgCQAWCAQA2EoAVEjIgDAEQh+BMkkBMIgrALQlIBPkWARIgSABQiDAKh3AAQjHAAingcg");
	this.shape_55.setTransform(2.4124,150.0313);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgDlJBNmIQAsjfBKj+QAOgxASg8QBKjkBbkiQAKgfAJgdQB0lwA7jtIRIAtQAEAIAEAHQAqE0BKE5QAEAPAEARQAcBzBQEaQAWBPAXBXQAsClAgCRQAhCSAWB+QA3ErAVEgQgCABgBACQiABSkgBLQgWAGgVAFQlBBOkeAQQgJABgJAAQlcAYkMguQgJgCgJgBQkyg4iQiMg");
	this.shape_56.setTransform(2.4174,150.0477);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F73C6F").s().p("AppUyIgSgDQkyg4iQiMQgDlJBNmIQAsjfBKj+IAghtQBKjkBbkiIATg8QB0lwA7jtIRIAtIAIAPQAqE0BKE5IAIAgQAcBzBQEaQAWBPAXBXQAsClAgCRQAhCSAWB+QA3ErAVEgIgDADQiABSkgBLIgrALQlBBOkeAQIgSABQh4AIhvAAQjRAAiwgeg");
	this.shape_57.setTransform(2.4174,150.0477);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgClHBOmLQAsjfBKj+QAOgxARg7QBIjfBckpQAKgfAJgdQB0lzA7jqIRJAvQAEAIAEAIQApEwBLE9QADAPAEARQAdB0BOEZQAWBPAWBXQAtCmAgCQQAhCTAWB8QA4EuAVEcQgCACgBACQiBBXkdBLQgWAGgVAFQk6BNkmAOQgJABgJABQlaAVkOgwQgJgBgJgCQkyg5iRiJg");
	this.shape_58.setTransform(2.4211,150.0576);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F73C6F").s().p("ApoUwIgSgDQkyg5iRiJQgClHBOmLQAsjfBKj+IAfhsQBIjfBckpIATg8QB0lzA7jqIRJAvIAIAQQApEwBLE9IAHAgQAdB0BOEZIAsCmQAtCmAgCQQAhCTAWB8QA4EuAVEcIgDAEQiBBXkdBLIgrALQk6BNkmAOIgSACQhrAHhkAAQjfAAi6gig");
	this.shape_59.setTransform(2.4211,150.0576);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgBlDBPmPQAtjfBIj+QAOgxASg8QBEjZBfkwQAJgfAJgdQB0l2A7jmIRKAwQADAIAEAJQApEsBLFBQAEAPAEARQAdB2BMEYQAVBOAXBYQAsCnAgCPQAiCUAWB6QA6EwAUEaQgCABgBACQiCBdkaBKQgWAGgVAFQkzBMkuAOQgJAAgKABQlYATkPgyQgJgBgJgCQkzg6iRiHg");
	this.shape_60.setTransform(2.4236,150.0885);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F73C6F").s().p("ApnUvIgSgDQkzg6iRiHQgBlDBPmPQAtjfBIj+IAghtICjoJIASg8QB0l2A7jmIRKAwIAHARQApEsBLFBIAIAgQAdB2BMEYIAsCmQAsCnAgCPQAiCUAWB6QA6EwAUEaIgDADQiCBdkaBKIgrALQkzBMkuAOIgTABQhfAFhaAAQjqAAjEgkg");
	this.shape_61.setTransform(2.4236,150.0885);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQAAlABQmSQAtjgBIj9QAOgxARg8QBCjUBgk3QAJgfAKgdQB0l5A7jiIRKAxQADAJADAJQApEpBMFFQADAOAEARQAdB4BLEWQAVBOAWBYQAsCoAgCOQAjCWAXB4QA6EzAUEWQgCACgCABQiCBjkXBKQgVAFgWAGQksBKk2ANQgKAAgJABQlWAQkRgzQgJgBgJgCQkzg8iSiEg");
	this.shape_62.setTransform(2.4248,150.0925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F73C6F").s().p("ApmUuIgSgDQkzg8iSiEQAAlABQmSQAtjgBIj9IAfhtICioLIATg8QB0l5A7jiIRKAxIAGASQApEpBMFFIAHAfQAdB4BLEWIArCmQAsCoAgCOQAjCWAXB4QA6EzAUEWIgEADQiCBjkXBKIgrALQksBKk2ANIgTABQhSADhOAAQj4AAjPgmg");
	this.shape_63.setTransform(2.4248,150.0925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RqQABk8BSmWQAsjgBIj9QANgwASg9QA+jOBik+QAKgfAJgdQB0l8A7jfIRLAyQADAKACAJQApEmBMFIQAEAPAEARQAdB6BJEUQAUBOAXBZQAsCoAgCNQAjCXAXB2QA7E2AUETQgCABgCACQiEBokTBJQgVAGgWAGQklBJk+ALQgKABgKAAQlUAOkSg0QgJgCgJgCQk0g9iSiCg");
	this.shape_64.setTransform(2.425,150.1391);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F73C6F").s().p("AplUtIgSgEQk0g9iSiCQABk8BSmWQAsjgBIj9IAfhtICgoMIATg8QB0l8A7jfIRLAyIAFATQApEmBMFIIAIAgQAdB6BJEUIArCnQAsCoAgCNQAjCXAXB2QA7E2AUETIgEADQiEBokTBJIgrAMQklBJk+ALIgUABQhFADhDAAQkEAAjagpg");
	this.shape_65.setTransform(2.425,150.1391);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RqQACk6BTmYQAtjgBHj+QANgwARg9QA8jIBjlFQAKgfAJgdQB0l/A7jcIRMA0QACAKACAKQApEhBNFNQADAPAEARQAeB8BHESQAUBOAWBZQAsCpAgCMQAkCYAXB0QA9E5ATEPQgCACgCACQiFBtkQBJQgVAGgWAGQkeBHlGALQgKABgKAAQlSALkVg2QgJgBgJgCQkzg+iTiAg");
	this.shape_66.setTransform(2.425,150.1688);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F73C6F").s().p("AplUrIgSgDQkzg+iTiAQACk6BTmYQAtjgBHj+IAehtQA8jIBjlFIATg8QB0l/A7jcIRMA0IAEAUQApEhBNFNIAHAgQAeB8BHESIAqCnQAsCpAgCMQAkCYAXB0QA9E5ATEPIgEAEQiFBtkQBJIgrAMQkeBHlGALIgUABQg5ACg4AAQkQAAjmgtg");
	this.shape_67.setTransform(2.425,150.1688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},24).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},48).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[]},1).wait(292));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.6,0,219.6,288.2);


(lib.Sk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.pocket("synched",0);
	this.instance.setTransform(69.1,163,1,1,0,0,180,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({x:73.3,y:162.7},21).wait(7).to({startPosition:0},0).to({x:72.8,y:158.7},25).wait(31).to({startPosition:0},0).to({x:73.3,y:162.7},21).wait(2).to({startPosition:0},0).to({x:70.5,y:162.9},12).to({_off:true},1).wait(11).to({_off:false,x:69.1,y:163},0).wait(285));

	// Layer_2
	this.instance_1 = new lib.pocket("synched",0);
	this.instance_1.setTransform(-65.8,161.6,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({x:-68.8},21).wait(7).to({startPosition:0},0).to({rotation:2.9695,x:-74,y:152.95},25).wait(31).to({startPosition:0},0).to({rotation:0,x:-68.4,y:161.6},21).wait(2).to({startPosition:0},0).to({x:-66.65},12).to({_off:true},1).wait(11).to({_off:false,x:-65.8},0).to({_off:true},279).wait(6));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("An11YIRNA0QApEnBQFdQAjCVByHAQBbFnAsDaQA+E7ATEMQiRB+kxBNQkfBIlaAIQlbAJkeg7Qk0g/iTh+QAEnfDGrQQA3jICFm1QCDmtA/jog");
	this.shape.setTransform(2.4125,150.2346);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F73C6F").s().p("Ap2UmQk0g/iTh+QAEnfDGrQQA3jICFm1QCDmtA/joIRNA0QApEnBQFdQAjCVByHAQBbFnAsDaQA+E7ATEMQiRB+kxBNQkfBIlaAIIhaABQknAAj4gzg");
	this.shape_1.setTransform(2.4125,150.2346);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RqQACk6BTmYQAtjgBHj+QANgwARg9QA8jIBjlFQAKgfAJgdQB0l/A7jcIRMA0QACAKACAKQApEhBNFNQADAPAEARQAeB8BHESQAUBOAWBZQAsCpAgCMQAkCYAXB0QA9E5ATEPQgCACgCACQiFBtkQBJQgVAGgWAGQkeBHlGALQgKABgKAAQlSALkVg2QgJgBgJgCQkzg+iTiAg");
	this.shape_2.setTransform(2.425,150.1688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F73C6F").s().p("AplUrIgSgDQkzg+iTiAQACk6BTmYQAtjgBHj+IAehtQA8jIBjlFIATg8QB0l/A7jcIRMA0IAEAUQApEhBNFNIAHAgQAeB8BHESIAqCnQAsCpAgCMQAkCYAXB0QA9E5ATEPIgEAEQiFBtkQBJIgrAMQkeBHlGALIgUABQg5ACg4AAQkQAAjmgtg");
	this.shape_3.setTransform(2.425,150.1688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RqQABk8BSmWQAsjgBIj9QANgwASg9QA+jOBik+QAKgfAJgdQB0l8A7jfIRLAyQADAKACAJQApEmBMFIQAEAPAEARQAdB6BJEUQAUBOAXBZQAsCoAgCNQAjCXAXB2QA7E2AUETQgCABgCACQiEBokTBJQgVAGgWAGQklBJk+ALQgKABgKAAQlUAOkSg0QgJgCgJgCQk0g9iSiCg");
	this.shape_4.setTransform(2.425,150.1391);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F73C6F").s().p("AplUtIgSgEQk0g9iSiCQABk8BSmWQAsjgBIj9IAfhtICgoMIATg8QB0l8A7jfIRLAyIAFATQApEmBMFIIAIAgQAdB6BJEUIArCnQAsCoAgCNQAjCXAXB2QA7E2AUETIgEADQiEBokTBJIgrAMQklBJk+ALIgUABQhFADhDAAQkEAAjagpg");
	this.shape_5.setTransform(2.425,150.1391);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQAAlABQmSQAtjgBIj9QAOgxARg8QBCjUBgk3QAJgfAKgdQB0l5A7jiIRKAxQADAJADAJQApEpBMFFQADAOAEARQAdB4BLEWQAVBOAWBYQAsCoAgCOQAjCWAXB4QA6EzAUEWQgCACgCABQiCBjkXBKQgVAFgWAGQksBKk2ANQgKAAgJABQlWAQkRgzQgJgBgJgCQkzg8iSiEg");
	this.shape_6.setTransform(2.4248,150.0925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F73C6F").s().p("ApmUuIgSgDQkzg8iSiEQAAlABQmSQAtjgBIj9IAfhtICioLIATg8QB0l5A7jiIRKAxIAGASQApEpBMFFIAHAfQAdB4BLEWIArCmQAsCoAgCOQAjCWAXB4QA6EzAUEWIgEADQiCBjkXBKIgrALQksBKk2ANIgTABQhSADhOAAQj4AAjPgmg");
	this.shape_7.setTransform(2.4248,150.0925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgBlDBPmPQAtjfBIj+QAOgxASg8QBEjZBfkwQAJgfAJgdQB0l2A7jmIRKAwQADAIAEAJQApEsBLFBQAEAPAEARQAdB2BMEYQAVBOAXBYQAsCnAgCPQAiCUAWB6QA6EwAUEaQgCABgBACQiCBdkaBKQgWAGgVAFQkzBMkuAOQgJAAgKABQlYATkPgyQgJgBgJgCQkzg6iRiHg");
	this.shape_8.setTransform(2.4236,150.0885);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F73C6F").s().p("ApnUvIgSgDQkzg6iRiHQgBlDBPmPQAtjfBIj+IAghtICjoJIASg8QB0l2A7jmIRKAwIAHARQApEsBLFBIAIAgQAdB2BMEYIAsCmQAsCnAgCPQAiCUAWB6QA6EwAUEaIgDADQiCBdkaBKIgrALQkzBMkuAOIgTABQhfAFhaAAQjqAAjEgkg");
	this.shape_9.setTransform(2.4236,150.0885);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgClHBOmLQAsjfBKj+QAOgxARg7QBIjfBckpQAKgfAJgdQB0lzA7jqIRJAvQAEAIAEAIQApEwBLE9QADAPAEARQAdB0BOEZQAWBPAWBXQAtCmAgCQQAhCTAWB8QA4EuAVEcQgCACgBACQiBBXkdBLQgWAGgVAFQk6BNkmAOQgJABgJABQlaAVkOgwQgJgBgJgCQkyg5iRiJg");
	this.shape_10.setTransform(2.4211,150.0576);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F73C6F").s().p("ApoUwIgSgDQkyg5iRiJQgClHBOmLQAsjfBKj+IAfhsQBIjfBckpIATg8QB0lzA7jqIRJAvIAIAQQApEwBLE9IAHAgQAdB0BOEZIAsCmQAtCmAgCQQAhCTAWB8QA4EuAVEcIgDAEQiBBXkdBLIgrALQk6BNkmAOIgSACQhrAHhkAAQjfAAi6gig");
	this.shape_11.setTransform(2.4211,150.0576);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgDlJBNmIQAsjfBKj+QAOgxASg8QBKjkBbkiQAKgfAJgdQB0lwA7jtIRIAtQAEAIAEAHQAqE0BKE5QAEAPAEARQAcBzBQEaQAWBPAXBXQAsClAgCRQAhCSAWB+QA3ErAVEgQgCABgBACQiABSkgBLQgWAGgVAFQlBBOkeAQQgJABgJAAQlcAYkMguQgJgCgJgBQkyg4iQiMg");
	this.shape_12.setTransform(2.4174,150.0477);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F73C6F").s().p("AppUyIgSgDQkyg4iQiMQgDlJBNmIQAsjfBKj+IAghtQBKjkBbkiIATg8QB0lwA7jtIRIAtIAIAPQAqE0BKE5IAIAgQAcBzBQEaQAWBPAXBXQAsClAgCRQAhCSAWB+QA3ErAVEgIgDADQiABSkgBLIgrALQlBBOkeAQIgSABQh4AIhvAAQjRAAiwgeg");
	this.shape_13.setTransform(2.4174,150.0477);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgElNBMmEQArjfBLj+QAPgxASg7QBNjqBZkbQAKgfAJgdQB0ltA7jxIRHAsQAFAHAEAHQAqE4BKE1QADAPAEARQAcBwBSEdQAXBOAWBXQAtClAgCSQAgCQAWCAQA2EoAVEjQgCACgBACQh+BMkkBMQgWAFgVAGQlIBPkWARQgJAAgJABQldAbkLgtQgJgCgJgBQkxg3iQiOg");
	this.shape_14.setTransform(2.4124,150.0313);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F73C6F").s().p("ApqUzIgSgDQkxg3iQiOQgElNBMmEQArjfBLj+IAhhsQBNjqBZkbIATg8QB0ltA7jxIRHAsIAJAOQAqE4BKE1IAHAgQAcBwBSEdQAXBOAWBXQAtClAgCSQAgCQAWCAQA2EoAVEjIgDAEQh+BMkkBMIgrALQlIBPkWARIgSABQiDAKh3AAQjHAAingcg");
	this.shape_15.setTransform(2.4124,150.0313);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RrQgFlQBLmBQArjeBMj/QAOgxASg7QBQjvBYkVQAKgeAJgdQB0lrA6j0IRHArQAFAHAFAGQAqE7BJEyQAEAPAEAQQAbBvBVEfQAWBOAXBWQAtCkAfCTQAgCPAWCCQA0EmAWEmQgBACgCACQh9BHknBLQgWAGgVAFQlOBRkPARQgJABgJABQlfAdkJgrQgJgCgIgBQkyg1iPiRg");
	this.shape_16.setTransform(2.4062,150.0211);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F73C6F").s().p("AprU0IgRgDQkyg1iPiRQgFlQBLmBQArjeBMj/IAghsQBQjvBYkVIATg7QB0lrA6j0IRHArIAKANQAqE7BJEyIAIAfQAbBvBVEfQAWBOAXBWQAtCkAfCTQAgCPAWCCQA0EmAWEmIgDAEQh9BHknBLIgrALQlOBRkPARIgSACQiNAMiAAAQi9AAiegag");
	this.shape_17.setTransform(2.4062,150.0211);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgHlTBKl+QArjeBMj/QAPgxASg7QBTj0BWkOQAKgfAKgcQBzloA7j3IRGApQAFAGAFAGQArE/BIEuQAEAPAEAQQAbBtBWEgQAXBPAXBVQAtCkAfCUQAfCOAXCDQAyEjAWEqQgBACgBACQh8BBkrBMQgVAFgWAGQlVBSkGASQgKABgIABQlhAgkHgqQgJgCgJgBQkxg0iOiTg");
	this.shape_18.setTransform(2.3988,150.0419);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F73C6F").s().p("AprU1IgSgDQkxg0iOiTQgHlTBKl+QArjeBMj/IAhhsQBTj0BWkOIAUg7QBzloA7j3IRGApIAKAMQArE/BIEuIAIAfQAbBtBWEgQAXBPAXBVQAtCkAfCUQAfCOAXCDQAyEjAWEqIgCAEQh8BBkrBMIgrALQlVBSkGASIgSACQiZANiIAAQiyAAiVgXg");
	this.shape_19.setTransform(2.3988,150.0419);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgIlXBJl6QAqjeBOj/QAPgxASg6QBWj6BUkHQAKgfAKgcQBzllA6j7IRGAoQAGAGAFAFQArFDBIEqQADAOAEARQAbBrBYEiQAYBOAWBVQAtCjAgCVQAeCNAXCFQAxEhAWEsQgBADgBACQh7A7kuBMQgVAGgWAFQlcBUj+ATQgKABgIABQliAikGgoQgJgCgJgBQkwgziOiVg");
	this.shape_20.setTransform(2.3901,150.0435);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F73C6F").s().p("ApsU2IgSgDQkwgziOiVQgIlXBJl6QAqjeBOj/IAhhrQBWj6BUkHIAUg7QBzllA6j7IRGAoIALALQArFDBIEqIAHAfQAbBrBYEiQAYBOAWBVQAtCjAgCVQAeCNAXCFQAxEhAWEsIgCAFQh7A7kuBMIgrALQlcBUj+ATIgSACQijAPiQAAQioAAiNgVg");
	this.shape_21.setTransform(2.3901,150.0435);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgJlaBIl3QAqjeBOj/QAPgyASg5QBZkABTkAQAKgfAJgcQB0liA6j+IRFAmQAGAFAGAGQAqFGBIEmQAEAPAEAQQAbBpBZEkQAYBPAXBUQAtCiAgCWQAeCMAVCHQAxEdAWExQgBACgBACQh6A2kxBNQgWAFgVAFQljBVj2AUQgJABgJABQlkAmkEgoQgJgBgIgCQkxgxiNiXg");
	this.shape_22.setTransform(2.375,150.0823);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F73C6F").s().p("AptU2IgRgDQkxgxiNiXQgJlaBIl3QAqjeBOj/IAhhrQBZkABTkAIATg7QB0liA6j+IRFAmIAMALQAqFGBIEmIAIAfQAbBpBZEkQAYBPAXBUQAtCiAgCWQAeCMAVCHQAxEdAWExIgCAEQh6A2kxBNIgrAKQljBVj2AUIgSACQisASiWAAQigAAiGgUg");
	this.shape_23.setTransform(2.375,150.0823);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RrQgKleBHlzQAqjdBOkAQAPgyATg5QBbkFBSj5QAKgfAJgcQBzlfA7kCIREAlQAGAFAHAFQAqFJBHEjQAEAOAEARQAbBnBbEmQAYBOAYBUQAtCiAfCWQAeCLAVCJQAvEbAXEzQgBADAAACQh5Awk1BNQgWAGgVAFQlqBWjuAVQgJABgJABQllAokDgmQgJgBgIgCQkxgviMiag");
	this.shape_24.setTransform(2.3633,150.0941);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F73C6F").s().p("ApuU3IgRgDQkxgviMiaQgKleBHlzQAqjdBOkAQAPgyATg5QBbkFBSj5IATg7QBzlfA7kCIREAlIANAKQAqFJBHEjIAIAfQAbBnBbEmQAYBOAYBUQAtCiAfCWQAeCLAVCJQAvEbAXEzIgBAFQh5Awk1BNIgrALQlqBWjuAVIgSACQi2AUicAAQiXAAh/gSg");
	this.shape_25.setTransform(2.3633,150.0941);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgLlgBGlxQApjdBPj/QAQgzASg4QBfkLBQjyQAKgfAJgcQBzlcA7kFIRDAkQAHAEAHAEQAqFOBHEeQAEAPAEAQQAaBmBdEnQAZBOAXBUQAtChAgCXQAdCKAVCLQAuEYAXE3QgBACAAACQh4Ark4BNQgWAGgVAFQlxBYjmAWQgJABgJABQlnAqkAglQgJgBgJgBQkwgviMicg");
	this.shape_26.setTransform(2.3503,150.136);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F73C6F").s().p("ApuU3IgSgCQkwgviMicQgLlgBGlxQApjdBPj/IAihrQBfkLBQjyIATg7QB0lcA6kFIRDAkIAOAIQAqFOBHEeIAIAfQAaBmBdEnQAZBOAYBUQAsChAgCXQAdCKAVCLQAuEYAXE3IgBAEQh4Ark4BNIgrALQlxBYjmAWIgSACQjAAWiiAAQiOAAh3gRg");
	this.shape_27.setTransform(2.3503,150.136);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgMlkBFltQApjdBQj/QAQgzASg4QBikQBOjsQAKgeAKgdQBzlZA6kJIRCAjQAIAEAHAEQArFRBGEaQAEAPAEAQQAaBkBfEpQAZBPAXBTQAuCgAfCYQAcCIAWCNQAsEWAYE6QgBACgBADQh2Alk8BNQgVAGgWAFQl3BZjeAXQgKABgIABQlpAtj/gjQgJgBgIgCQkwgtiMieg");
	this.shape_28.setTransform(2.3361,150.1578);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F73C6F").s().p("ApvU4IgRgDQkwgtiMieQgMlkBFltQApjdBQj/IAihrQBikQBOjsIAUg7QBzlZA6kJIRCAjIAPAIQArFRBGEaIAIAfQAaBkBfEpQAZBPAXBTQAuCgAfCYQAcCIAWCNQAsEWAYE6IgCAFQh2Alk8BNIgrALQl3BZjeAXIgSACQjKAaioAAQiFAAhxgQg");
	this.shape_29.setTransform(2.3361,150.1578);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RqQgNloBElpQApjcBRkAQAPgzATg4QBkkVBNjlQAKgfAKgcQBylWA7kNIRBAiQAIADAIAEQArFUBFEXQAEAPAEAQQAaBiBhErQAZBOAYBTQAtCfAfCaQAcCGAWCPQArETAYE9QgBADAAADQh2Afk/BOQgVAFgWAFQl+BbjWAYQgKABgIABQlqAwj+giQgJgBgIgCQkwgriLihg");
	this.shape_30.setTransform(2.32,150.1842);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F73C6F").s().p("ApwU5IgRgDQkwgriLihQgNloBElpQApjcBRkAIAihrQBkkVBNjlIAUg7QBylWA7kNIRBAiIAQAHQArFUBFEXIAIAfQAaBiBhErQAZBOAYBTQAtCfAfCaQAcCGAWCPQArETAYE9IgBAGQh2Afk/BOIgrAKQl+BbjWAYIgSACQjTAciuAAQh9AAhqgOg");
	this.shape_31.setTransform(2.32,150.1842);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RpQgOlqBDlmQAojdBSkAQAQgzATg3QBnkbBLjeQAKgeAKgcQBylUA6kQIRBAgQAJADAIADQArFZBFESQAEAPAEAQQAZBgBjEtQAaBOAXBTQAuCeAfCbQAbCFAWCRQApEQAZFBQgBACAAADQh1AalCBOQgVAFgWAGQmFBcjOAYQgJABgJABQlsAzj7ghQgJgBgJgBQkvgriLijg");
	this.shape_32.setTransform(2.3033,150.2363);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F73C6F").s().p("ApwU5IgSgCQkvgriLijQgOlqBDlmQAojdBSkAIAjhqQBnkbBLjeIAUg6QBylUA6kQIRBAgIARAGQArFZBFESIAIAfQAZBgBjEtQAaBOAXBTQAuCeAfCbQAbCFAWCRQApEQAZFBIgBAFQh1AalCBOIgrALQmFBcjOAYIgSACQjdAfi0AAQh0AAhigNg");
	this.shape_33.setTransform(2.3033,150.2363);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RpQgPluBBljQAojcBTkAQAQgzATg3QBqkhBJjWQALgfAJgcQBzlRA6kTIRAAfQAJACAIADQArFcBFEPQAEAPAEAPQAZBfBlEuQAaBPAXBRQAuCeAfCcQAbCEAVCTQAoENAZFEQAAADgBACQhzAVlFBOQgWAFgVAGQmMBdjHAZQgIACgKABQltA1j6gfQgJgBgIgBQkvgqiKilg");
	this.shape_34.setTransform(2.2852,150.272);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F73C6F").s().p("ApxU6IgRgCQkvgqiKilQgPluBBljQAojcBTkAQAQgzATg3QBqkhBJjWIAUg7QBzlRA6kTIRAAfIARAFQArFcBFEPIAIAeQAZBfBlEuQAaBPAXBRQAuCeAfCcQAbCEAVCTQAoENAZFEIgBAFQhzAVlFBOIgrALQmMBdjHAZIgSADQjmAhi5AAQhsAAhcgLg");
	this.shape_35.setTransform(2.2852,150.272);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RoQgQlxBAlfQAojcBTkAQAQg0ATg2QBtkmBIjQQALgfAJgcQBylNA6kXIRAAdQAJACAJACQArFgBEELQAEAPAEAPQAZBdBnEwQAaBPAYBRQAuCdAfCdQAaCDAVCUQAnELAZFHQAAADAAADQhzAPlJBOQgVAGgVAFQmTBei+AbQgJABgKABQluA4j5geQgJgBgIgBQkvgoiJiog");
	this.shape_36.setTransform(2.266,150.3483);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F73C6F").s().p("ApyU6IgRgCQkvgoiJioQgQlxBAlfQAojcBTkAIAjhqQBtkmBIjQIAUg7QBylNA6kXIRAAdIASAEQArFgBEELIAIAeQAZBdBnEwQAaBPAYBRQAuCdAfCdQAaCDAVCUQAnELAZFHIAAAGQhzAPlJBOIgqALQmTBei+AbIgTACQjuAki9AAQhlAAhXgKg");
	this.shape_37.setTransform(2.266,150.3483);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RoQgRl1A/lbQAojcBUkBQAQgzATg2QBwksBGjJQALgfAJgbQBzlLA6kbIQ+AdQAKABAKACQArFjBDEHQAEAPAEAPQAZBbBpEyQAaBPAYBRQAuCcAfCeQAZCBAVCXQAmEIAaFKQAAADgBADQhxAKlMBPQgWAFgVAFQmZBgi3AbQgIABgKACQlwA6j3gcQgJgBgJgBQkugniJiqg");
	this.shape_38.setTransform(2.2444,150.3918);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F73C6F").s().p("ApyU7IgSgCQkugniJiqQgRl1A/lbQAojcBUkBQAQgzATg2QBwksBGjJIAUg6QBzlLA6kbIQ+AdIAUADQArFjBDEHIAIAeQAZBbBpEyQAaBPAYBRQAuCcAfCeQAZCBAVCXQAmEIAaFKIgBAGQhxAKlMBPIgrAKQmZBgi3AbIgSADQj4AnjBAAQheAAhQgJg");
	this.shape_39.setTransform(2.2444,150.3918);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RnQgSl4A+lYQAojcBUkAQARg0ATg2QBzkxBEjCQALgfAJgcQBylHA6keIQ+AbQAKABAKABQAsFnBDEDQAEAPAEAPQAYBZBrE0QAbBPAXBQQAvCcAeCeQAZCBAVCYQAlEGAaFNQAAADAAADQhxAElPBPQgWAFgVAFQmgBiivAcQgIABgKACQlyA9j1gbQgJgBgIgBQkugmiJisg");
	this.shape_40.setTransform(2.2225,150.4642);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F73C6F").s().p("ApzU7IgRgCQkugmiJisQgSl4A+lYQAojcBUkAIAkhqQBzkxBEjCIAUg7QBylHA6keIQ+AbIAUACQAsFnBDEDIAIAeQAYBZBrE0QAbBPAXBQQAvCcAeCeQAZCBAVCYQAlEGAaFNIAAAGQhxAElPBPIgrAKQmgBiivAcIgSADQkAAqjFAAQhXAAhLgIg");
	this.shape_41.setTransform(2.2225,150.4642);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Any1OIRNA0QAuGABIEIQAYBYBsE1QBSDpAuDwQBCFWApIdQhvgBlTBPQnKBsiuAeQmABDj5gaQk7ghiNi0QgSl7A9lVQAvkHBxk+QCJlrBEjBQB3lUA6ksg");
	this.shape_42.setTransform(2.1921,149.2384);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F73C6F").s().p("ApzVIQk7ghiNi0QgSl7A9lVQAvkHBxk+QCJlrBEjBQB3lUA6ksIRNA0QAuGABIEIQAYBYBsE1QBSDpAuDwQBCFWApIdQhvgBlTBPQnKBsiuAeQkUAwjPAAQhRAAhFgHg");
	this.shape_43.setTransform(2.1921,149.2384);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw/RyQgRlxA7lNQAwkHBpkpQAGgRAGgRQAyiCAnhqQA/imAohyQAHgUAHgSQBzlFA5kjQADgLADgLQIkAbImAaQAEAaAEAZQAsFcBDD1QAKAlAYBKQAiBqA/CyQAXBDAVBDQA0CnAhCrQALA3AKA7QA2E4AkHFQhwgJlOBLQlCBKi+AoQhKAQg1AKQhZAQhVALQi3AZiTgBQhFAAg+gGQk6geiRiwg");
	this.shape_44.setTransform(2.0748,148.3505);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F73C6F").s().p("AnxVGQhFAAg+gGQk6geiRiwQgRlxA7lNQAwkHBpkpIAMgiIBZjsQA/imAohyIAOgmQBzlFA5kjIAGgWIRKA1IAIAzQAsFcBDD1QAKAlAYBKQAiBqA/CyQAXBDAVBDQA0CnAhCrQALA3AKA7QA2E4AkHFQhwgJlOBLQlCBKi+AoIh/AaQhZAQhVALQi0AZiQAAIgGgBg");
	this.shape_45.setTransform(2.0748,148.3505);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxDRzQgQlyA7lMQAykEBqkpQAGgRAGgRQAyiCAohpQA/ikAohyQAIgUAGgTQBzlDA6kjQADgKADgLQIjAbIkAaQAEAZAGAYQAsFbBCD0QAKAmAXBJQAiBqA/CxQAXBCAVBEQA1CnAhCpQAMA3AKA6QA3E4AlHDQhwgRlMBIQk9BHjGArQhKAQg1AKQhaAQhVAMQi4AaiTABQhFAAg+gGQk7gbiUiqg");
	this.shape_46.setTransform(1.9709,147.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F73C6F").s().p("Ap0U4Qk7gbiUirQgQlwA7lNQAykEBqkpIAMgiQAyiBAohpQA/ilAohyIAOgnQBzlDA6kjIAGgUIRHA0IAKAxQAsFbBCD1QAKAlAXBJQAiBqA/CxQAXBDAVBDQA1CnAhCpQAMA3AKA6QA3E4AlHDQhwgRlMBIQk9BHjGArIh/AaQhaAQhVAMQi4AaiTABQhFgBg+gFg");
	this.shape_47.setTransform(1.9709,147.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxHRyQgPlwA9lLQAykDBrkoQAGgRAGgRQA0iCAnhnQA/ikAphyQAHgUAHgTQBzlBA5kjQAEgKADgKQIiAbIiAaQAGAXAGAYQAsFaBBD0QAKAmAXBIQAiBqA+CwQAXBCAWBDQA1CoAiCnQALA2ALA7QA4E2AnHCQhxgZlJBEQk4BEjPAuQhIAPg3ALQhZARhXANQi4AaiTACQhGABg+gFQk6gZiZilg");
	this.shape_48.setTransform(1.843,146.5525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F73C6F").s().p("Ap0UwQk6gZiZilQgPlwA9lLQAykDBrkoIAMgiQA0iCAnhnQA/ikAphyIAOgnQBzlBA5kjIAHgUIREA1IAMAvQAsFaBBD0QAKAmAXBIQAiBqA+CwQAXBCAWBDQA1CoAiCnQALA2ALA7QA4E2AnHCQhxgZlJBEQk4BEjPAuIh/AaQhZARhXANQi4AaiTACIgOABQg+AAg4gFg");
	this.shape_49.setTransform(1.843,146.5525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxLRxQgOlvA+lJQAzkCBsknQAHgRAGgRQA0iCAnhmQA/ijAqhyQAHgTAHgTQBylAA6kiQAEgKADgKQIgAbIiAZQAGAXAHAXQAsFZBADzQALAnAWBGQAiBsA9CuQAYBCAVBDQA2CoAiCkQAMA3ALA6QA5E1ApHAQhzgglGBBQkyBAjXAxQhIAPg5AMQhYARhXANQi6AciTADQhFABg+gEQk7gWidihg");
	this.shape_50.setTransform(1.6885,145.66);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F73C6F").s().p("ApzUoQk7gWidihQgOlvA+lJQAzkCBsknIANgiIBbjoQA/ijAqhyIAOgmQBylAA6kiIAHgUIRCA0IANAuQAsFZBADzQALAnAWBGQAiBsA9CuQAYBCAVBDQA2CoAiCkQAMA3ALA6QA5E1ApHAQhzgglGBBQkyBAjXAxIiBAbQhYARhXANQi6AciTADIgbABQg3AAgxgEg");
	this.shape_51.setTransform(1.6885,145.66);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxPRxQgNluA/lIQA0kBBtkmQAHgRAGgQQA1iDAnhlQA/iiAqhxQAHgUAHgTQBzk+A5kiQAEgJAEgKQIfAbIgAZQAHAWAIAWQArFYBADyQAKAoAWBFQAiBsA9CtQAXBBAWBDQA2CoAkCjQAMA3AKA5QA7E0AqG/QhzgolEA+QktA9jfAzQhHAQg6AMQhYARhZAOQi5AdiTAEQhGACg/gEQk6gTihicg");
	this.shape_52.setTransform(1.5817,144.7725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F73C6F").s().p("Ap0UgQk6gTihicQgNluA/lIQA0kBBtkmIANghQA1iDAnhlQA/iiAqhxIAOgnQBzk+A5kiIAIgTIQ/A0IAPAsQArFYBADyQAKAoAWBFQAiBsA9CtQAXBBAWBDQA2CoAkCjQAMA3AKA5QA7E0AqG/QhzgolEA+QktA9jfAzIiBAcQhYARhZAOQi5AdiTAEIgqABQgvAAgsgDg");
	this.shape_53.setTransform(1.5817,144.7725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxTRxQgMluBAlHQA1j+BvkmQAGgQAGgRQA2iDAnhjQBAihAphyQAIgUAHgSQByk9A6kiQAEgJAFgJQIdAbIeAZQAIAVAJAUQArFYBADyQAKAoAVBEQAiBsA9CrQAXBCAVBDQA4CoAjChQANA3AKA5QA9EyArG+Qh0gwlCA6QknA6jnA2QhHAQg7AMQhYAShZAPQi7AeiTAFQhGACg+gDQk7gQiliXg");
	this.shape_54.setTransform(1.4485,143.89);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F73C6F").s().p("ApzUYQk7gQiliXQgMluBAlHQA1j+BvkmIAMghQA2iDAnhjQBAihAphyIAPgmQByk9A6kiIAJgSIQ7A0IARApQArFYBADyQAKAoAVBEQAiBsA9CrQAXBCAVBDQA4CoAjChQANA3AKA5QA9EyArG+Qh0gwlCA6QknA6jnA2IiCAcQhYAShZAPQi7AeiTAFIg3ABQgoAAglgCg");
	this.shape_55.setTransform(1.4485,143.89);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxXRvQgMlsBClGQA1j9BxklQAGgQAGgRQA3iDAmhiQBBigAqhxQAHgUAHgTQBzk7A5kiQAFgIAEgIQIcAaIdAZQAJAUAKATQArFXA+DxQALApAVBDQAhBtA8CpQAXBBAWBDQA4CpAkCfQANA3ALA4QA9EyAuG7Qh2g4k/A4QkiA3jvA4QhGAQg9ANQhXAShaAQQi7AfiTAGQhGADhAgCQk6gOipiTg");
	this.shape_56.setTransform(1.3147,143.0568);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F73C6F").s().p("Ap0UQQk6gOipiTQgMlsBClGQA1j9BxklIAMghQA3iDAmhiQBBigAqhxIAOgnQBzk7A5kiIAJgQIQ5AzIATAnQArFXA+DxQALApAVBDQAhBtA8CpIAtCEQA4CpAkCfQANA3ALA4QA9EyAuG7Qh2g4k/A4QkiA3jvA4IiDAdQhXAShaAQQi7AfiTAGQgmACglAAIg7gBg");
	this.shape_57.setTransform(1.3147,143.0568);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxbRvQgLlsBDlEQA2j8BykkQAGgQAGgRQA3iDAnhhQBAifArhxQAHgUAHgTQBzk4A5kjQAFgIAFgHQIbAaIbAZQAKATALASQAqFWA+DwQALAqAUBCQAhBtA8CoQAXBBAWBCQA5CqAkCdQANA3ALA3QA/ExAvG6Qh2hAk9A0QkdA0j3A8QhFAPg+AOQhXAShcAQQi7AhiTAHQhGAEhAgCQk6gLitiOg");
	this.shape_58.setTransform(1.2039,142.1864);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F73C6F").s().p("Ap0UIQk6gLitiOQgLlsBDlEQA2j8BykkIAMghIBejkQBAifArhxIAOgnQBzk4A5kjIAKgPIQ2AzIAVAlQAqFWA+DwQALAqAUBCQAhBtA8CoQAXBBAWBCQA5CqAkCdQANA3ALA3QA/ExAvG6Qh2hAk9A0QkdA0j3A8IiDAdQhXAShcAQQi7AhiTAHQgtACgqAAIgvAAg");
	this.shape_59.setTransform(1.2039,142.1864);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxfRuQgKlrBElDQA3j6BzkjQAHgQAGgRQA4iEAmhfQBBieAqhxQAIgUAHgTQBzk3A5kjQAFgHAGgHQIZAaIZAaQALARAMARQAqFVA+DwQAKAqAUBBQAhBuA7CmQAXBBAXBCQA5CqAlCcQANA2ALA3QBBEvAwG5Qh3hHk6AwQkYAxkAA+QhEAQg/AOQhXAShcASQi8AhiUAJQhGAEhAgCQk6gIixiJg");
	this.shape_60.setTransform(1.0668,141.3205);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F73C6F").s().p("Ap0T/Qk6gIixiJQgKlrBElDQA3j6BzkjIANghQA4iEAmhfQBBieAqhxIAPgnQBzk3A5kjIALgOIQyA0IAXAiQAqFVA+DwQAKAqAUBBQAhBuA7CmIAuCDQA5CqAlCcQANA2ALA3QBBEvAwG5Qh3hHk6AwQkYAxkAA+IiDAeIizAkQi8AhiUAJQgzADgvAAIgkgBg");
	this.shape_61.setTransform(1.0668,141.3205);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxjRtQgJlqBGlCQA3j4B0kjQAHgQAGgQQA5iEAmheQBBidArhxQAIgUAHgTQByk1A6kjQAFgHAGgGQIXAaIZAZQAMARAMAQQAqFTA9DwQALArATA/QAhBvA7ClQAWBAAXBCQA6CqAlCaQAOA3ALA2QBCEuAyG3Qh5hPk3AtQkSAukIBBQhDAPhCAPQhWAThdASQi8AjiUAJQhGAFhBgBQk6gFi1iFg");
	this.shape_62.setTransform(0.9037,140.4591);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F73C6F").s().p("Ap0T3Qk6gFi1iFQgJlqBGlCQA3j4B0kjIANggQA5iEAmheQBBidArhxIAPgnQByk1A6kjIALgNIQwAzIAYAhQAqFTA9DwQALArATA/QAhBvA7ClIAtCCQA6CqAlCaQAOA3ALA2QBCEuAyG3Qh5hPk3AtQkSAukIBBIiFAeIizAlQi8AjiUAJQg5AEg2AAIgYAAg");
	this.shape_63.setTransform(0.9037,140.4591);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxnRsQgHlpBGlAQA5j4B1khQAHgQAGgQQA5iFAmhcQBCidArhwQAHgUAHgTQBzk0A5kiQAGgHAGgGQIWAaIXAZQANAQANAPQAqFTA8DvQALArATA/QAhBuA6CkQAXBAAWBCQA7CqAmCYQAOA3ALA2QBDEtA0G1Qh6hXk1AqQkNArkQBEQhCAPhDAQQhVAShfATQi9AkiTALQhHAFhAAAQk6gDi6iAg");
	this.shape_64.setTransform(0.7889,139.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F73C6F").s().p("AxnRsQgHlpBGlAQA5j4B1khIANggQA5iFAmhcQBCidArhwIAOgnQBzk0A5kiIAMgNIQtAzIAaAfQAqFTA8DvQALArATA/QAhBuA6CkIAtCCQA7CqAmCYQAOA3ALA2QBDEtA0G1Qh6hXk1AqQkNArkQBEIiFAfIi0AlQi9AkiTALQhHAFhAAAQk6gDi6iAg");
	this.shape_65.setTransform(0.7889,139.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxrRrQgGloBIk/QA5j2B2khQAHgQAGgQQA7iEAlhbQBCicArhwQAIgUAHgTQBzkyA5kjQAGgGAHgFQIUAaIWAZQAOAOAOAPQApFRA8DvQALAsASA9QAhBvA5CjQAXA/AXBCQA7CrAmCWQAPA2ALA1QBFEsA1G0Qh7hekyAmQkIAokYBGQhCAQhEAQQhVAThfAUQi+AliUALQhGAGhBAAQk6AAi+h7g");
	this.shape_66.setTransform(0.6481,138.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F73C6F").s().p("AxrRrQgGloBIk/QA5j2B2khIANggQA7iEAlhbQBCicArhwIAPgnQBzkyA5kjIANgLIQqAzIAcAdQApFRA8DvQALAsASA9QAhBvA5CjIAuCBQA7CrAmCWQAPA2ALA1QBFEsA1G0Qh7hekyAmQkIAokYBGIiGAgIi0AnQi+AliUALQhGAGhBAAQk6AAi+h7g");
	this.shape_67.setTransform(0.6481,138.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxvRrQgGloBJk+QA6j0B4kgQAHgQAHgQQA6iFAmhaQBCiaArhwQAIgUAHgTQBzkwA5kjQAHgFAHgGQITAaIUAZQAOAOAPANQAqFRA7DuQAKAsASA8QAhBwA5ChQAXA/AXBCQA8CrAnCUQAOA3AMA0QBGErA2GzQh7hnkwAkQkDAjkgBKQhBAPhFARQhVAThgAVQi/AmiTANQhHAGhBABQk6ADjCh2g");
	this.shape_68.setTransform(0.5057,137.9287);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F73C6F").s().p("AxvRrQgGloBJk+QA6j0B4kgIAOggIBgjfQBCiaArhwIAPgnQBzkwA5kjIAOgLIQnAzIAdAbQAqFRA7DuQAKAsASA8QAhBwA5ChIAuCBQA8CrAnCUQAOA3AMA0QBGErA2GzQh7hnkwAkQkDAjkgBKIiGAgIi1AoQi/AmiTANQhHAGhBABIgQAAQkvAAi9hzg");
	this.shape_69.setTransform(0.5057,137.9287);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxzRqQgFlnBLk9QA6jyB6kfQAGgQAHgQQA8iGAlhYQBCiZAshwQAIgUAHgTQBzkvA5kjQAHgEAHgFQISAZISAaQAQAMAQAMQApFQA6DuQALAsARA7QAhBxA4CfQAXA/AXBCQA9CrAnCTQAPA2AMA0QBHEqA4GxQh8hukuAgQj9AgkoBMQhAAQhHARQhVAUhhAVQi/AniUAOQhHAHhBABQk6AGjGhxg");
	this.shape_70.setTransform(0.3622,137.0901);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F73C6F").s().p("AxzRqQgFlnBLk9QA6jyB6kfIANggQA8iGAlhYQBCiZAshwIAPgnQBzkvA5kjIAOgJIQkAzIAgAYQApFQA6DuQALAsARA7QAhBxA4CfIAuCBQA9CrAnCTQAPA2AMA0QBHEqA4GxQh8hukuAgQj9AgkoBMIiHAhIi2ApQi/AniUAOQhHAHhBABIgfAAQklAAi8hrg");
	this.shape_71.setTransform(0.3622,137.0901);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Ax3RoQgDllBLk8QA8jxB6keQAHgQAHgQQA8iGAlhWQBDiZAshwQAHgUAIgTQBzktA4kjQAIgEAHgEQIRAZIRAaQAQALARALQApFPA5DtQALAtARA6QAgBxA5CeQAWA/AYBCQA9CrAoCRQAPA2AMAzQBIEpA6GvQh9h2krAdQj4AekxBPQg/APhIASQhUAUhjAWQi/AoiUAPQhHAHhCADQk6AIjKhtg");
	this.shape_72.setTransform(0.2422,136.2775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F73C6F").s().p("Ax3RoQgDllBLk8QA8jxB6keIAOggIBhjcQBDiZAshwIAPgnQBzktA4kjIAPgIIQiAzIAhAWQApFPA5DtQALAtARA6QAgBxA5CeIAuCBQA9CrAoCRQAPA2AMAzQBIEpA6GvQh9h2krAdQj4AekxBPIiHAhIi3AqQi/AoiUAPQhHAHhCADIgrAAQkdAAi8hlg");
	this.shape_73.setTransform(0.2422,136.2775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Ax7RnQgCllBNk6QA8jwB7kdQAHgQAHgQQA9iGAlhVQBDiYAshwQAIgTAIgTQByksA5kiQAIgEAIgEQIOAZIQAZQASALARAKQApFOA5DsQALAuAQA5QAgByA4CcQAWA/AYBBQA+CsAoCOQAQA3AMAzQBKEnA7GuQh/h+koAaQjyAak5BSQg/APhKATQhTAUhjAXQjAApiUAQQhIAIhCADQk5ALjPhog");
	this.shape_74.setTransform(0.0711,135.4526);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F73C6F").s().p("Ax7RnQgCllBNk6QA8jwB7kdIAOggQA9iGAlhVQBDiYAshwIAQgmQByksA5kiIAQgIIQeAyIAjAVQApFOA5DsQALAuAQA5QAgByA4CcIAuCAQA+CsAoCOQAQA3AMAzQBKEnA7GuQh/h+koAaQjyAak5BSIiJAiIi2ArQjAApiUAQQhIAIhCADIg7ABQkSAAi7heg");
	this.shape_75.setTransform(0.0711,135.4526);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Ax/RmQgBlkBOk5QA9juB9kdQAHgPAHgQQA+iGAkhUQBEiXAshwQAIgTAHgTQBzkqA5kjQAIgDAIgEQINAaIPAZQASAJASAJQApFNA4DsQALAvAQA3QAgBzA3CaQAWA/AYBBQBACsAoCNQAQA2AMAyQBLEnA9GsQiAiFkmAWQjtAXlBBUQg9AQhMATQhTAUhkAYQjAAriVARQhHAIhDADQk5AOjThjg");
	this.shape_76.setTransform(-0.0764,134.6367);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F73C6F").s().p("Ax/RmQgBlkBOk5QA9juB9kdIAOgfQA+iGAkhUQBEiXAshwIAPgmQBzkqA5kjIAQgHIQcAzIAkASQApFNA4DsQALAvAQA3QAgBzA3CaIAuCAQBACsAoCNQAQA2AMAyQBLEnA9GsQiAiFkmAWQjtAXlBBUIiJAjIi3AsQjAAriVARQhHAIhDADQgnACglAAQkHAAi5hXg");
	this.shape_77.setTransform(-0.0764,134.6367);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyCRlQgBljBPk4QA+jtB+kcQAHgPAHgQQA/iGAlhTQBDiWAshvQAIgUAIgTQBzkoA4kjQAJgDAJgDQILAaINAZQATAIAUAIQAoFMA4DrQALAwAPA2QAgBzA3CZQAWA+AYBCQBACsAoCLQARA2AMAyQBNElA+GrQiBiNkjASQjoAUlJBYQg9APhNAUQhSAUhmAZQjBAriUATQhIAIhCAEQk6ARjWheg");
	this.shape_78.setTransform(-0.2002,133.8296);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F73C6F").s().p("AyCRlQgBljBPk4QA+jtB+kcIAOgfIBkjZQBDiWAshvIAQgnQBzkoA4kjIARgGIQZAzIAnAQQAoFMA4DrQALAwAPA2QAgBzA2CZIAuCAQBBCsAoCLQARA2AMAyQBMElA/GrQiBiNkjASQjoAUlJBYIiKAjIi4AtQjBAriUATQhIAIhCAEQgwADguAAQj9AAi1hQg");
	this.shape_79.setTransform(-0.2002,133.8296);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyHRjQABliBQk3QA/jrB/kbQAHgQAIgPQA/iHAlhRQBDiVAthvQAIgUAHgTQBzkmA5kjQAJgDAIgCQILAZILAZQAVAHAUAIQAoFLA2DqQAMAwAPA1QAgB0A2CYQAWA9AYBBQBBCtApCJQAQA2ANAxQBOElBAGpQiCiVkhAPQjiARlSBaQg8AQhOAUQhSAVhnAZQjBAtiVATQhHAKhEAEQk5ATjbhZg");
	this.shape_80.setTransform(-0.35,133.0664);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F73C6F").s().p("AyGRjQAAliBRk3QA+jrCAkbIANgfQBAiHAlhRQBDiVAthvIAQgnQBykmA5kjIASgFIQVAyIApAPQAoFLA2DqQAMAwAPA1QAgB0A2CYIAuB+QBACtApCJQARA2ANAxQBOElA/GpQiBiVkhAPQjiARlSBaIiKAkIi5AuQjBAtiVATQhHAKhDAEQg3AEg0AAQj1AAi0hKg");
	this.shape_81.setTransform(-0.35,133.0664);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyLRiQACliBRk1QBAjqCBkaQAHgPAHgQQBAiHAkhQQBEiUAthvQAIgTAIgUQBzkkA4kjQAKgCAJgCQIJAZIKAZQAVAGAVAGQAoFLA2DqQAMAwAOA0QAfB0A2CWQAWA+AZBBQBBCtApCHQARA2ANAxQBPEjBCGoQiDidkeAMQjdAOlaBcQg7AQhQAVQhSAVhnAaQjDAuiUAUQhIAKhDAFQk6AWjfhUg");
	this.shape_82.setTransform(-0.5,132.2772);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F73C6F").s().p("AyKRiQABliBSk1QA/jqCBkaIAOgfQBAiHAkhQQBEiUAuhvIAPgnQBzkkA4kjIATgEIQSAyIArAMQAoFLA2DqQAMAwAOA0QAfB0A2CWIAvB/QBBCtApCHQARA2ANAxQBPEjBBGoQiCidkeAMQjdAOlaBcIiLAlIi5AvQjCAuiVAUQhHAKhEAFQhBAFg9AAQjqAAiwhDg");
	this.shape_83.setTransform(-0.5,132.2772);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyORgQAClgBTk0QBAjpCCkZQAHgPAHgPQBBiIAkhPQBFiTAthuQAIgUAIgTQBzkjA4kjQAKgBAJgCQIIAZIIAZQAWAFAWAFQAoFKA1DpQALAxAOAzQAgB0A1CVQAWA9AZBBQBCCtAqCGQARA2ANAwQBQEiBDGmQiDikkcAJQjYAKliBgQg7APhQAWQhSAVhoAbQjDAviUAVQhIALhEAFQk5AZjjhQg");
	this.shape_84.setTransform(-0.625,131.4976);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F73C6F").s().p("AyORgQAClgBTk0QBAjpCCkZIAOgeQBBiIAkhPQBFiTAthuIAQgnQBzkjA4kjIATgDIQQAyIAsAKQAoFKA1DpQALAxAOAzQAgB0A1CVQAWA9AZBBQBCCtAqCGQARA2ANAwQBQEiBDGmQiDikkcAJQjYAKliBgIiLAlIi6AwQjDAviUAVQhIALhEAFQhLAGhFAAQjfAAitg9g");
	this.shape_85.setTransform(-0.625,131.4976);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AySReQADlfBUkzQBBjnCDkYQAIgQAHgPQBBiIAkhNQBFiSAthvQAJgTAIgTQBykiA5kiQAKgBAKgBQIGAZIHAYQAXAFAXAEQAnFIA1DpQALAxAOAyQAfB1A1CUQAWA9AYBAQBDCuArCDQARA3ANAvQBSEhBEGkQiEiskaAGQjSAHlqBiQg6AQhSAWQhRAVhpAcQjEAwiVAXQhIALhEAGQk5AcjnhMg");
	this.shape_86.setTransform(-0.8,130.7287);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F73C6F").s().p("AySReQADlfBUkzQBBjnCDkYIAPgfIBmjVQBEiSAuhvIAQgmQBykiA5kiIAUgCIQNAxIAtAJQAoFIA1DpQALAxAOAyQAeB1A1CUIAvB9QBDCuArCDQARA3ANAvQBSEhBEGkQiFiskZAGQjSAHlqBiIiMAmIi6AxQjEAwiUAXQhJALhEAGQhUAHhPAAQjUAAipg3g");
	this.shape_87.setTransform(-0.8,130.7287);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyWRcQAEleBWkyQBBjlCFkYQAHgPAHgPQBDiIAkhMQBFiRAthvQAIgTAIgUQBzkfA5kjQAKAAAKgBQIFAZIFAZQAYADAYADQAnFHA0DpQAMAyANAxQAfB1A0CSQAWA9AZBAQBDCuArCCQASA2ANAvQBTEfBGGjQiFi0kXADQjNAElyBlQg5APhUAXQhRAWhqAcQjEAxiVAYQhIAMhFAHQk5AejrhHg");
	this.shape_88.setTransform(-0.95,129.9728);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F73C6F").s().p("AyWRcQAFleBVkyQBCjlCEkYIAOgeIBnjUQBFiRAthvIARgnQBykfA5kjIAUgBIQKAyIAvAGQAoFHA0DpQALAyANAxQAgB1A0CSQAWA9AZBAQBDCuArCCQARA2AOAvQBTEfBGGjQiGi0kWADQjOAElxBlIiOAmIi6AyQjEAxiVAYQhIAMhFAHQhdAJhWAAQjMAAilgyg");
	this.shape_89.setTransform(-0.95,129.9728);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyaRbQAGleBWkxQBDjjCFkXQAIgPAHgPQBDiJAkhKQBFiQAuhvQAIgTAIgUQBzkdA4kjQALAAAKAAQIDAZIEAYQAZACAZACQAnFHAzDnQAMAzAMAwQAfB2A0CQQAWA9AZBAQBECuArCAQASA2AOAuQBUEfBIGiQiHi8kUgBQjIABl6BoQg5APhVAXQhQAWhrAdQjFAziUAZQhJAMhEAHQk6AhjvhBg");
	this.shape_90.setTransform(-1.075,129.2278);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F73C6F").s().p("AyaRbQAGleBWkxQBDjjCFkXIAPgeIBnjTQBFiQAuhvIAQgnQBzkdA4kjIAVAAIQHAxIAyAEQAnFHAzDnQAMAzAMAwQAfB2A0CQIAvB9QBECuArCAQASA2AOAuQBUEfBIGiQiHi8kUgBQjIABl6BoIiOAmIi7AzQjFAziUAZQhJAMhEAHQhpALhhAAQjAAAifgrg");
	this.shape_91.setTransform(-1.075,129.2278);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AnQx+IRNA0QAvGOBCEBQArCoBWDaQBjD4AuCYQBWEdBJGgQiIjDkSgFQi/gDmGBsQhrAdjfA+QjFA0iVAaQmQBGkqhLQAHldBXkvQA/jZCMkfQBOifAohRQBFiPAuhuQCAkvA8k3g");
	this.shape_92.setTransform(-1.225,128.4455);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F73C6F").s().p("AyeRZQAHldBXkvQA/jZCMkfIB2jwQBFiPAuhuQCAkvA8k3IRNA0QAvGOBCEBQArCoBWDaQBjD4AuCYQBWEdBJGgQiIjDkSgFQi/gDmGBsIlKBbQjFA0iVAaQjCAhiqAAQi0AAiagmg");
	this.shape_93.setTransform(-1.225,128.4455);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyZRbQAFleBWkxQBDjkCFkXQAIgPAHgQQBDiHAjhLQBFiQAuhvQAJgUAHgUQBzkdA5kjQALAAALAAQIDAZIFAZQAYACAYACQAnFHA0DpQALAyANAvQAeB3A1CRQAVA8AZBAQBFCuAqCCQASA1AOAtQBUEfBHGiQiHi6kUgBQjMADl2BmQg5AQhXAYQhPAVhpAdQjFAyiVAZQhJAMhGAHQk3AhjuhDg");
	this.shape_94.setTransform(-1.05,129.3808);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F73C6F").s().p("AyZRbQAFleBWkxQBDjkCFkXIAPgfIBmjSQBFiQAuhvIARgoQBykdA5kjIAWAAIQHAyIAwAEQAnFHA1DpQALAyAMAvQAfB3A0CRQAWA8AZBAQBFCuAqCCIAfBiQBVEfBHGiQiHi6kUgBQjMADl1BmIiQAoIi5AyQjFAyiUAZQhKAMhGAHQhlALheAAQjCAAiggtg");
	this.shape_95.setTransform(-1.05,129.3808);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyVRdQAFlfBUkyQBCjmCEkYQAIgQAHgPQBBiHAkhMQBFiSAthvQAJgUAIgTQBzkgA4kiQAKgBALgBQIFAZIHAZQAWADAXAEQAoFIA1DpQALAxANAxQAfB2A0CTQAXA8AYBAQBECvAqCDQASA2ANAtQBTEhBFGjQiGixkXAEQjSAGlsBjQg7AQhVAXQhPAVhpAcQjDAxiVAXQhJAMhGAGQk3AdjqhIg");
	this.shape_96.setTransform(-0.9,130.2663);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F73C6F").s().p("AyVRdQAFlfBUkyQBCjmCEkYIAPgfIBmjTQBEiSAuhvIAQgnQBzkgA4kiIAWgCIQLAyIAtAHQAnFIA1DpQAMAxANAxQAeB2A1CTIAvB8QBECvAqCDQARA2AOAtQBTEhBFGjQiGixkXAEQjTAGlsBjIiPAnIi3AxQjEAxiVAXQhJAMhFAGQhaAJhTAAQjOAAing0g");
	this.shape_97.setTransform(-0.9,130.2663);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyQRfQADlgBTkzQBBjoCCkZQAIgQAHgPQBBiHAkhOQBEiTAthvQAJgUAHgTQBzkiA5kiQAKgCAKgBQIHAZIIAZQAWAFAVAEQAoFKA2DpQALAxANAyQAgB1A1CVQAWA9AZBAQBCCuAqCGQARA1ANAuQBSEiBDGlQiFinkaAHQjYAKljBgQg7AQhTAWQhQAVhnAbQjDAviVAWQhJAMhFAFQk4AajkhOg");
	this.shape_98.setTransform(-0.7,131.175);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F73C6F").s().p("AyQRfQADlgBTkzQBBjoCCkZIAQgfIBkjVQBFiTAthvIAPgnQB0kiA4kiIAUgDIQOAyIAsAJQAoFKA2DpQALAxANAyQAfB1A3CVQAVA9AZBAQBCCuArCGQAQA1ANAuQBSEiBDGlQiFinkZAHQjZAKljBgIiOAmIi3AwQjDAviUAWQhKAMhEAFQhOAHhJAAQjbAAirg7g");
	this.shape_99.setTransform(-0.7,131.175);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyLRhQABlhBSk1QBAjqCBkaQAHgPAIgQQA/iHAlhPQBEiUAthvQAIgUAIgUQBzkjA4kjQAKgCAJgBQIJAZIJAZQAVAFAVAGQAoFLA2DqQALAwAPAzQAfB1A2CXQAWA9AYBAQBCCuAqCIQAQA1ANAvQBQEjBBGnQiDiekdALQjfAOlYBdQg8APhSAWQhRAVhmAZQjCAviUAUQhJALhFAFQk4AWjfhTg");
	this.shape_100.setTransform(-0.525,132.1044);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F73C6F").s().p("AyLRhQABlhBSk1QBAjqCBkaIAPgfIBkjWQBEiUAthvIAQgoQBzkjA4kjIATgDIQSAyIAqALQAoFLA2DqQALAwAPAzQAfB1A2CXQAWA9AYBAQBCCuAqCIQAQA1ANAvQBQEjBBGnQiDiekdALQjfAOlYBdIiOAlIi3AuQjCAviUAUQhJALhFAFQhBAFg9AAQjoAAixhCg");
	this.shape_101.setTransform(-0.525,132.1044);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyHRjQABliBQk3QA/jrB/kbQAIgQAHgPQA/iHAlhRQBDiVAthvQAIgUAHgUQBzklA5kjQAJgCAJgCQILAZILAZQAUAHAUAHQAoFLA3DrQALAwAPA0QAfB0A3CZQAWA9AYBAQBBCuApCKQAQA1ANAwQBOEkBAGpQiCiUkgAPQjlARlPBaQg9APhQAVQhRAVhlAYQjBAtiVAUQhJAKhEAEQk4ATjbhZg");
	this.shape_102.setTransform(-0.35,133.0414);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F73C6F").s().p("AyGRjQAAliBQk3QA/jrCAkbIAOgfQA/iHAlhRQBDiVAthvIAQgoQByklA5kjIATgEIQVAyIAoAOQAoFLA3DrQALAwAPA0QAfB0A3CZIAuB9QBBCuApCKIAdBlQBOEkA/GpQiBiUkgAPQjlARlQBaIiMAkIi2AtQjBAtiVAUQhJAKhEAEQg3ADgzAAQj0AAi0hJg");
	this.shape_103.setTransform(-0.35,133.0414);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AyCRlQAAlkBPk4QA9jtB+kbQAIgQAHgQQA+iGAlhTQBDiWAshvQAIgUAIgUQBzkoA4kiQAJgDAJgDQIMAZINAZQATAJATAIQAoFMA4DsQALAvAPA2QAgBzA3CbQAWA9AYBAQBACtApCNQAQA1AMAxQBMElA+GrQiAiLkjATQjrAVlGBWQg+AQhOAUQhRAUhkAYQjBAsiUASQhJAJhEAEQk4AQjWhfg");
	this.shape_104.setTransform(-0.2002,133.9653);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F73C6F").s().p("AyCRlQAAlkBPk4QA9jtB+kbIAPggQA+iGAlhTQBDiWAshvIAQgoQBzkoA4kiIASgGIQZAyIAmARQAoFMA4DsQALAvAPA2QAgBzA3CbIAtB9QBBCtApCNQAQA1AMAxQBMElA+GrQiAiLkjATQjsAVlFBWIiMAkIi1AsQjBAsiUASQhJAJhEAEQgtACgrAAQj/AAi3hRg");
	this.shape_105.setTransform(-0.2002,133.9653);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Ax9RmQgClkBNk5QA9jvB9kdQAHgQAHgQQA9iFAlhVQBDiXAshwQAIgUAIgTQBzkqA4kiQAJgEAIgEQIOAaIOAZQASAJASAKQApFOA4DsQALAuAQA3QAgBzA4CcQAWA+AXBAQBACtAoCPQAPA1ANAxQBKEnA9GtQiAiCklAXQjyAZk8BTQg/APhMAUQhSAThjAYQjAAqiUARQhJAIhDADQk5ANjQhlg");
	this.shape_106.setTransform(-0.0025,134.9191);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F73C6F").s().p("Ax9RmQgClkBNk5QA9jvB9kdIAOggQA9iFAlhVQBDiXAshwIAQgnQBzkqA4kiIARgIIQcAzIAkATQApFOA4DsQALAuAQA3QAgBzA4CcIAtB+QBACtAoCPQAPA1ANAxQBKEnA9GtQiAiCklAXQjyAZk8BTIiLAjIi1ArQjAAqiUARQhJAIhDADIhEACQkMAAi5hag");
	this.shape_107.setTransform(-0.0025,134.9191);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Ax5RoQgDllBMk7QA8jxB7kdQAHgRAHgQQA8iFAmhWQBCiYAshwQAIgUAHgUQBzkrA5kjQAIgEAIgEQIPAZIRAaQAQAKARALQApFPA6DtQAKAtARA5QAgBxA5CfQAWA+AXBAQA+CtAoCQQAPA2AMAyQBJEoA7GvQh/h5koAbQj4AckyBQQhAAQhKASQhTAUhhAWQjAApiUAPQhIAIhDADQk5AJjMhqg");
	this.shape_108.setTransform(0.1693,135.8889);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F73C6F").s().p("Ax5RoQgDllBMk7QA8jxB7kdIAOghQA8iFAmhWQBCiYAshwIAPgoQBzkrA5kjIAQgIIQgAzIAhAVQApFPA6DtQAKAtARA5QAgBxA5CfIAtB+QA+CtAoCQQAPA2AMAyQBJEoA7GvQh/h5koAbQj4AckyBQIiKAiIi0AqQjAApiUAPQhIAIhDADIgzAAQkXAAi7hhg");
	this.shape_109.setTransform(0.1693,135.8889);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Ax0RpQgElmBKk9QA7jyB6keQAHgRAHgQQA7iFAmhYQBCiZArhwQAIgUAIgTQBykuA5kiQAIgFAHgFQISAZISAaQAPAMAQALQApFQA7DuQAKAtARA6QAhBxA5CgQAWA+AXBBQA9CsAoCTQAOA1AMAzQBIEqA4GwQh9hwkrAfQj+AhkpBMQhBAQhIASQhTAThhAVQi+AoiUAOQhJAHhCACQk5AGjHhwg");
	this.shape_110.setTransform(0.3148,136.8678);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F73C6F").s().p("Ax0RpQgElmBKk9QA7jyB6keIAOghQA7iFAmhYQBCiZArhwIAQgnQBykuA5kiIAPgKIQkAzIAfAXQApFQA7DuQAKAtARA6QAhBxA5CgIAtB/QA9CsAoCTQAOA1AMAzQBIEqA4GwQh9hwkrAfQj+AhkpBMIiJAiIi0AoQi+AoiUAOQhJAHhCACIgiAAQkiAAi8hqg");
	this.shape_111.setTransform(0.3148,136.8678);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxvRqQgGlnBKk+QA6j0B3kfQAHgRAHgQQA7iFAmhZQBBibAshwQAIgUAHgTQBzkwA4kiQAIgGAHgFQITAZIUAaQAOANAPANQApFRA7DuQALAsASA8QAgBwA6CiQAWA+AXBBQA8CsAnCVQAPA2ALAzQBGErA3GyQh8hmkuAjQkEAkkfBJQhCAQhHARQhUAThfAUQi+AmiUANQhIAHhCABQk5ADjCh2g");
	this.shape_112.setTransform(0.4809,137.8537);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F73C6F").s().p("AxvRqQgGlnBKk+QA6j0B3kfIAOghQA7iFAmhZQBBibAshwIAPgnQBzkwA4kiIAPgLIQnAzIAdAaQApFRA7DuQALAsASA8QAgBwA6CiIAtB/QA8CsAnCVQAPA2ALAzQBGErA3GyQh8hmkuAjQkEAkkfBJIiJAhIizAnQi+AmiUANQhIAHhCABIgQAAQkuAAi9hzg");
	this.shape_113.setTransform(0.4809,137.8537);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxrRrQgGloBHk/QA5j2B3khQAHgQAHgRQA5iEAmhbQBCibArhxQAHgUAIgTQBykyA5kiQAHgGAHgGQIUAaIWAZQANAOAOAOQAqFTA8DvQAKArATA8QAgBwA6CkQAXA/AWBBQA8CrAmCXQAOA2AMA0QBEEsA1G0Qh7hckxAnQkKAnkWBGQhCAQhFAQQhVATheATQi9AliUAMQhIAGhBAAQk6AAi9h8g");
	this.shape_114.setTransform(0.6729,138.875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F73C6F").s().p("AxrRrQgGloBHk/QA5j2B3khIAOghQA5iEAmhbQBCibArhxIAPgnQBykyA5kiIAOgMIQqAzIAbAcQAqFTA8DvQAKArATA8QAgBwA6CkIAtCAQA8CrAmCXQAOA2AMA0QBEEsA1G0Qh7hckxAnQkKAnkWBGIiHAgIizAmQi9AliUAMQhIAGhBAAQk6AAi9h8g");
	this.shape_115.setTransform(0.6729,138.875);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxmRsQgIlpBHlBQA4j3B0kiQAHgQAHgRQA5iEAmhcQBBidArhxQAIgUAHgTQBzk0A4kiQAHgHAGgGQIWAaIYAZQAMAPANAQQAqFTA8DwQALAqATA+QAhBvA6CmQAXA/AWBCQA7CrAmCZQAOA1ALA1QBDEuAzG2Qh6hUk0ArQkQArkMBDQhEAQhDAPQhVAThdASQi9AkiTAKQhIAFhBAAQk6gEi4iBg");
	this.shape_116.setTransform(0.8342,139.875);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F73C6F").s().p("AxmRsQgIlpBHlBQA4j3B0kiIAOghQA5iEAmhcQBBidArhxIAPgnQBzk0A4kiIANgNIQuAzIAZAfQAqFTA8DwQALAqATA+QAhBvA6CmIAtCBQA7CrAmCZQAOA1ALA1QBDEuAzG2Qh6hUk0ArQkQArkMBDIiHAfIiyAlQi9AkiTAKQhIAFhBAAQk6gEi4iBg");
	this.shape_117.setTransform(0.8342,139.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxhRuQgJlrBFlCQA3j6BzkiQAHgQAHgRQA4iEAmheQBBieAqhxQAIgUAHgTQBzk2A5kiQAGgHAGgHQIYAaIZAZQALARAMAQQAqFVA9DwQALAqATA/QAhBvA7CnQAXA/AWBCQA6CrAlCbQAOA2ALA1QBBEvAxG4Qh4hKk3AvQkWAvkDA/QhFAQhBAPQhVAShcARQi8AjiUAJQhHAEhBgBQk6gHiziGg");
	this.shape_118.setTransform(0.9731,140.8841);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F73C6F").s().p("Ap0T7Qk6gHiziGQgJlrBFlCQA3j6BzkiIAOghQA4iEAmheQBBieAqhxIAPgnQBzk2A5kiIAMgOIQxAzIAXAhQAqFVA9DwQALAqATA/QAhBvA7CnIAtCBQA6CrAlCbQAOA2ALA1QBBEvAxG4Qh4hKk3AvQkWAvkDA/IiGAfQhVAShcARQi8AjiUAJQg6ADg2AAIgYAAg");
	this.shape_119.setTransform(0.9731,140.8841);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxcRvQgKlsBDlEQA2j7BykjQAHgRAGgRQA3iDAnhgQBAieArhyQAHgUAHgTQBzk4A5kiQAFgIAGgHQIaAaIbAZQAKASALASQAqFVA+DyQAKApAVBAQAhBuA8CpQAWBAAWBCQA5CqAlCdQANA2ALA2QBAExAvG5Qh3hBk6AzQkdAzj5A8QhFAQhAAOQhWAShaAQQi8AhiTAIQhHAEhBgCQk6gKiuiMg");
	this.shape_120.setTransform(1.1355,141.8955);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F73C6F").s().p("Ap0UFQk6gKiuiMQgKlsBDlEQA2j7BykjIANgiQA3iDAnhgQBAieArhyIAOgnQBzk4A5kiIALgPIQ1AzIAVAkQAqFVA+DyQAKApAVBAQAhBuA8CpIAsCCQA5CqAlCdQANA2ALA2QBAExAvG5Qh3hBk6AzQkdAzj5A8IiFAeQhWAShaAQQi8AhiTAIQg0ACgwAAIgkAAg");
	this.shape_121.setTransform(1.1355,141.8955);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxYRvQgLlsBClFQA1j9BwkkQAHgRAHgRQA2iDAmhiQBBigAqhxQAHgUAHgTQBzk6A5kiQAFgJAFgIQIbAaIdAaQAJATAKATQArFXA+DxQALApAVBCQAhBtA8CqQAXBBAWBCQA4CqAkCfQANA2ALA3QA+EyAtG7Qh2g4k8A3QkjA2jwA5QhGAQg+AOQhXARhZAQQi7AfiTAHQhHADhAgCQk6gOiqiSg");
	this.shape_122.setTransform(1.3147,142.9271);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F73C6F").s().p("Ap0UPQk6gOiqiSQgLlsBClFQA1j9BwkkIAOgiQA2iDAmhiQBBigAqhxIAOgnQBzk6A5kiIAKgRIQ4A0IATAmQArFXA+DxQALApAVBCQAhBtA8CqIAtCDQA4CqAkCfQANA2ALA3QA+EyAtG7Qh2g4k8A3QkjA2jwA5IiEAeQhXARhZAQQi7AfiTAHQgpACgoAAIg2gBg");
	this.shape_123.setTransform(1.3147,142.9271);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxTRxQgMluBBlHQA0j/BukkQAHgRAHgSQA1iCAnhjQBAihAphyQAIgUAHgTQByk8A5kiQAFgJAFgJQIdAaIeAaQAJAUAIAUQArFYBADzQAKAnAVBEQAiBsA9CtQAWBAAWBCQA3CqAkCiQANA1AKA4QA8EzAsG9Qh0gulAA7QkpA6jmA1QhIAQg8ANQhWARhZAPQi6AeiTAFQhHADhAgDQk6gRiliXg");
	this.shape_124.setTransform(1.4492,143.9318);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F73C6F").s().p("Ap0UZQk6gRiliXQgMluBBlHQA0j/BukkIAOgjQA1iCAnhjQBAihAphyIAPgnQByk8A5kiIAKgSIQ7A0IARAoQArFYBADzQAKAnAVBEQAiBsA9CtQAWBAAWBCQA3CqAkCiQANA1AKA4QA8EzAsG9Qh0gulAA7QkpA6jmA1IiEAdQhWARhZAPQi6AeiTAFIg/ABQglAAgjgBg");
	this.shape_125.setTransform(1.4492,143.9318);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxORxQgOluA/lJQA0kABtkmQAGgRAHgSQA0iBAnhlQBAiiAphzQAIgUAGgSQBzk+A5kiQAEgKAFgKQIfAbIgAZQAHAWAIAVQArFZBAD0QAKAmAWBFQAiBsA9CuQAXBBAVBCQA3CpAjCkQAMA2ALA4QA6E1AqG/QhzgllCA/QkwA9jcAzQhJAQg6AMQhXAQhXAPQi6AciTAEQhHACg/gEQk7gTifieg");
	this.shape_126.setTransform(1.6059,144.9833);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F73C6F").s().p("Ap0UiQk7gTifieQgOluA/lJQA0kABtkmIANgjQA0iBAnhlQBAiiAphzIAOgmQBzk+A5kiIAJgUIQ/A0IAPArQArFZBAD0QAKAmAWBFQAiBsA9CuQAXBBAVBCQA3CpAjCkQAMA2ALA4QA6E1AqG/QhzgllCA/QkwA9jcAzIiDAcQhXAQhXAPQi6AciTAEIguABQguAAgqgDg");
	this.shape_127.setTransform(1.6059,144.9833);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxJRyQgPlwA+lKQAykCBrknQAHgRAGgRQA0iCAnhmQA/ikAqhyQAHgUAHgTQBylAA5kiQAEgKAEgKQIhAaIiAaQAGAXAGAWQAsFaBBD0QAKAmAXBGQAiBrA9CxQAXBBAVBCQA2CpAjCmQAMA2AKA5QA5E2AoHBQhygclFBDQk2BBjTAvQhJAQg5ALQhYARhWANQi4AciTACQhHABg/gEQk7gXiaijg");
	this.shape_128.setTransform(1.7539,146.035);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F73C6F").s().p("Ap0UsQk7gXiaijQgPlwA+lKQAykCBrknIANgiIBbjoQA/ikAqhyIAOgnQBylAA5kiIAIgUIRDA0IAMAtQAsFaBBD0QAKAmAXBGQAiBrA9CxQAXBBAVBCQA2CpAjCmQAMA2AKA5QA5E2AoHBQhygclFBDQk2BBjTAvQhJAQg5ALQhYARhWANQi4AciTACIgcAAQg3AAgzgDg");
	this.shape_129.setTransform(1.7539,146.035);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxERyQgRlwA9lLQAxkEBqkoQAGgRAHgSQAziBAnhpQA/ikAphyQAHgUAHgTQBylCA6kiQADgLADgLQIjAbIjAaQAGAYAFAXQAsFcBCD0QAKAmAXBHQAiBqA/CyQAWBCAVBCQA1CpAjCoQALA2AKA6QA3E3AnHCQhxgSlIBHQk8BFjJAsQhLAQg3AKQhYAQhVANQi4AaiSABQhHABg/gFQk7gbiVipg");
	this.shape_130.setTransform(1.9232,147.0833);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F73C6F").s().p("Ap0U2Qk7gbiVipQgRlwA9lLQAxkEBqkoIANgjIBajqQA/ikAphyIAOgnQBylCA6kiIAGgWIRGA1IALAvQAsFcBCD0QAKAmAXBHQAiBqA/CyQAWBCAVBCQA1CpAjCoIAVBwQA3E3AnHCQhxgSlIBHIoFBxIiCAaQhYAQhVANQi4AaiSABIgYAAQg6AAg0gEg");
	this.shape_131.setTransform(1.9232,147.0833);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AxARzQgRlyA7lNQAwkGBpkoQAGgSAHgRQAxiBAohqQA/imAohyQAHgUAHgTQBzlEA5kiQADgLADgMQIkAbIlAaQAEAZAFAZQAsFcBCD1QAKAlAYBJQAjBpA/C0QAXBCAUBDQA0CoAiCqQALA2AKA7QA2E4AkHFQhvgJlLBKQlDBJi/ApQhMAQg1AJQhYAQhUAMQi3AZiTgBQhGAAg/gFQk7geiRiug");
	this.shape_132.setTransform(2.0599,148.1505);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F73C6F").s().p("AnvVEQhGAAg/gFQk7geiRiuQgRlyA7lNQAwkGBpkoIANgjIBZjrQA/imAohyIAOgnQBzlEA5kiIAGgXIRJA1IAJAyQAsFcBCD1QAKAlAYBJQAjBpA/C0QAXBCAUBDQA0CoAiCqQALA2AKA7QA2E5AkHEQhvgJlLBKQlDBJi/ApQhMAQg1AJQhYAQhUAMQi0AZiQAAIgGgBg");
	this.shape_133.setTransform(2.0599,148.1505);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RzQgSl3A/lZQAojeBUkCQAQgxATg1QB0k2BEjBQAKgdAJgaQBzlLA6kfQADgJADgKIQ2AzQASACADAAQArFjBCECQAEAQAFARQAAABABACQAYBZBqEwQAcBTAYBRQAtCbAfCdQAaCCAVCaQAlEHAZFPQgDAAgDAAQhzAHlHBNQgBAAgBAAQgVAFgUAFQmfBhiwAcQgIACgJABQlwA8j1gaQgBAAgCAAQgIgBgIgBQkvgmiJisg");
	this.shape_134.setTransform(2.2238,149.2809);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F73C6F").s().p("ApwVHIgDAAIgQgCQkvgmiJisQgSl3A/lZQAojeBUkCIAjhmQB0k2BEjBIATg3QBzlLA6kfIAGgTIQ2AzIAVACQArFjBCECIAJAhIABADQAYBZBqEwQAcBTAYBRQAtCbAfCdQAaCCAVCaQAlEHAZFPIgGAAQhzAHlHBNIgCAAIgpAKQmfBhiwAcIgRADQj/AqjFAAQhWAAhLgIg");
	this.shape_135.setTransform(2.2238,149.2809);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RzQgRlzBAldQAojfBUkBQAQgxASg1QBxkvBGjKQAKgdAJgaQBzlPA6kaQAEgJADgJIQ1AyQASAEADABQArFeBDEHQAEAQAEAQQABACAAACQAZBbBnEuQAcBSAXBSQAuCcAfCcQAaCEAVCXQAnEKAYFKQgCABgDAAQh0ANlEBNQgBAAgBAAQgVAFgUAFQmXBgi5AbQgJACgJABQluA5j3gdQgBAAgBAAQgIgBgJgBQkvgmiJiqg");
	this.shape_136.setTransform(2.2548,149.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F73C6F").s().p("ApwVFIgCAAIgRgCQkvgniJipQgRl0BAlcQAojfBUkBIAihmQBxkwBGjKIATg2QBzlPA6kaIAHgSIQ1AyIAVAFQArFeBDEHIAIAgIABAEQAZBbBnEuQAcBSAXBSQAuCcAfCbQAaCEAVCYQAnEKAYFKIgFABQh0ANlEBNIgCAAIgpAKQmXBgi5AbIgSACQj0Ami/ABQhfAAhTgKg");
	this.shape_137.setTransform(2.2548,149.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw7RyQgQlvBBlhQApjfBTkAQAPgyASg0QBukqBIjSQAKgdAJgaQBzlSA6kWQAFgIAEgHIQ1AxQARAFADABQAqFaBEELQADAQAFAQQAAACABACQAZBdBlEsQAbBSAYBSQAtCcAfCbQAbCGAVCVQAoENAYFGQgCABgDAAQh1AUlABMQgBABgBAAQgVAFgUAFQmQBejCAaQgIABgKABQlsA2j5geQgBAAgBAAQgJgBgIgBQkvgoiKing");
	this.shape_138.setTransform(2.2758,149.3607);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F73C6F").s().p("ApvVDIgCAAIgRgCQkvgoiKinQgQlvBBlhQApjfBTkAIAhhmQBukqBIjSIATg3QBzlSA6kWIAJgPIQ1AxIAUAGQAqFaBEELIAIAgIABAEQAZBdBlEsQAbBSAYBSQAtCcAfCbQAbCGAVCVQAoENAYFGIgFABQh1AUlABMIgCABIgpAKQmQBejCAaIgSACQjqAji6AAQhoAAhZgLg");
	this.shape_139.setTransform(2.2758,149.3607);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RxQgOlrBCllQApjeBSkBQAPgxASg1QBrkjBKjaQAJgdAJgaQB0lWA6kRQAFgHAFgHIQ1AwQAQAHACABQArFWBEEPQAEAQAEAQQAAACABACQAaBgBiEpQAbBSAXBSQAtCeAfCaQAcCGAVCTQAqEQAYFDQgDAAgCABQh2AZk9BNQgBAAgBAAQgVAGgVAEQmHBdjLAZQgJABgJABQlrAzj7gfQgBAAgBAAQgIgBgIgCQkwgpiLilg");
	this.shape_140.setTransform(2.3025,149.4014);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F73C6F").s().p("ApvVCIgCAAIgQgDQkwgpiLilQgOlrBCllQApjeBSkBIAhhmQBrkjBKjaIASg3QB0lWA6kRIAKgOIQ1AwIASAIQArFWBEEPIAIAgIABAEQAaBgBiEpQAbBSAXBSQAtCeAfCaQAcCGAVCTQAqEQAYFDIgFABQh2AZk9BNIgCAAIgqAKQmHBdjLAZIgSACQjgAgi2AAQhwAAhggMg");
	this.shape_141.setTransform(2.3025,149.4014);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RxQgNloBEloQApjfBRkAQAPgxASg1QBnkdBMjiQAJgdAJgbQB0lYA6kOQAGgGAGgGIQ0AwQAPAIADACQAqFRBFEUQADAPAFARQAAACABACQAaBiBgEnQAaBRAXBTQAtCeAgCZQAbCIAWCQQArEUAYE+QgDABgCABQh3Afk5BNQgBAAgBAAQgWAFgUAFQl/BcjVAXQgKABgIABQlpAwj9ghQgBAAgBAAQgIgBgJgBQkvgsiMihg");
	this.shape_142.setTransform(2.32,149.4722);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F73C6F").s().p("ApuVAIgCAAIgRgCQkvgsiMihQgNloBEloQApjfBRkAIAhhmQBnkdBMjiIASg4QB0lYA6kOIAMgMIQ0AwIASAKQAqFRBFEUIAIAgIABAEQAaBiBgEnQAaBRAXBTQAtCeAgCZQAbCIAWCQQArEUAYE+IgFACQh3Afk5BNIgCAAIgqAKQl/BcjVAXIgSACQjWAdiwAAQh5AAhngOg");
	this.shape_143.setTransform(2.32,149.4722);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RwQgLlkBElsQAqjfBQkAQAPgwASg2QBjkWBOjrQAKgdAIgaQB0lcA7kKQAGgFAHgFIQzAvQAPAKACABQAqFOBFEYQAEAPAEARQABACAAACQAbBkBeElQAaBRAXBTQAtCfAfCYQAcCJAWCOQAtEWAXE7QgCABgCABQh4Amk3BMQgBAAgBABQgVAFgVAFQl3BZjeAXQgKABgIABQlnAtj/gjQgBAAgBAAQgIgBgJgBQkwgtiMifg");
	this.shape_144.setTransform(2.3423,149.5656);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F73C6F").s().p("AptU+IgCAAIgRgCQkwgtiMifQgLlkBElsQAqjfBQkAIAhhmQBjkWBOjrIASg3QB0lcA7kKIANgKIQzAvIARALQAqFOBFEYIAIAgIABAEQAbBkBeElQAaBRAXBTQAtCfAfCYQAcCJAWCOQAtEWAXE7IgEACQh4Amk3BMIgCABIgqAKQl3BZjeAXIgSACQjKAaipAAQiEAAhvgQg");
	this.shape_145.setTransform(2.3423,149.5656);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RvQgLlfBGlwQAqjgBPkAQAPgwASg2QBgkPBPjzQAKgdAJgbQB0lfA6kGQAHgEAIgEIQzAvQAOAKABACQArFKBFEcQAEAPAEARQABACAAACQAbBmBcEjQAZBRAXBTQAtCgAfCXQAeCLAVCLQAuEZAXE3QgCABgCABQh5AtkzBMQgBAAgBAAQgVAGgVAFQlvBXjnAWQgKABgJABQllAqkBglQgBAAgBAAQgIgBgIgBQkxgviMicg");
	this.shape_146.setTransform(2.3561,149.6165);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F73C6F").s().p("AptU8IgCAAIgQgCQkxgviMicQgLlfBGlwQAqjgBPkAQAPgwASg2QBgkPBPjzIATg4QB0lfA6kGIAPgIIQzAvIAPAMQArFKBFEcIAIAgIABAEQAbBmBcEjQAZBRAXBTQAtCgAfCXQAeCLAVCLQAuEZAXE3IgEACQh5AtkzBMIgCAAIgqALQlvBXjnAWIgTACQi+AXihAAQiPAAh4gSg");
	this.shape_147.setTransform(2.3561,149.6165);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RuQgKlbBHl0QArjgBOkAQAPgvARg3QBdkJBRj7QAKgdAJgbQB0liA6kCQAIgDAIgDIQzAuQANAMACACQAqFFBGEhQAEAPAEARQABACAAACQAbBpBaEgQAZBQAWBUQAtChAgCWQAdCMAWCJQAwEcAWEzQgCABgBACQh6AykwBMQgBAAgBABQgVAFgVAFQloBWjwAVQgKABgJABQlkAnkCgnQgBAAgBAAQgIgBgJgBQkwgxiNiZg");
	this.shape_148.setTransform(2.3689,149.7063);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F73C6F").s().p("ApsU6IgCAAIgRgCQkwgxiNiZQgKlbBHl0QArjgBOkAIAghmQBdkJBRj7IATg4QB0liA6kCIAQgGIQzAuIAPAOQAqFFBGEhIAIAgIABAEQAbBpBaEgQAZBQAWBUQAtChAgCWQAdCMAWCJQAwEcAWEzIgDADQh6AykwBMIgCABIgqAKQloBWjwAVIgTACQizAUiaAAQiZAAiAgUg");
	this.shape_149.setTransform(2.3689,149.7063);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RuQgIlYBIl4QArjgBNj/QAOgvASg3QBZkDBUkDQAJgdAJgbQB0lmA7j9QAIgCAJgDIQzAtQAMAOABADQAqFABHElQAEAPAEARQAAACABACQAcBrBWEeQAZBRAWBUQAtCiAgCVQAeCMAWCHQAxEgAWEuQgCACgBABQh7A5ksBMQgBAAgBAAQgWAGgVAFQlfBVj6ATQgKABgJABQliAkkEgoQgBAAgBAAQgIgCgJgBQkwgyiOiWg");
	this.shape_150.setTransform(2.385,149.7776);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F73C6F").s().p("AprU5IgCAAIgRgDQkwgyiOiWQgIlYBIl4QArjgBNj/IAghmQBZkDBUkDIASg4QB0lmA7j9IARgFIQzAtIANARQAqFABHElIAIAgIABAEQAcBrBWEeQAZBRAWBUQAtCiAgCVQAeCMAWCHQAxEgAWEuIgDADQh7A5ksBMIgCAAIgrALQlfBVj6ATIgTACQioARiSAAQijAAiJgVg");
	this.shape_151.setTransform(2.385,149.7776);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw8RtQgHlUBJl8QArjgBNj/QAOgvARg3QBWj8BWkLQAJgeAJgbQB0lpA7j5QAJgBAKgCIQyAsQALAPABADQAqE9BIEpQADAPAEARQABACAAACQAdBtBUEcQAYBQAXBUQAsCjAgCUQAfCOAWCFQAyEiAWErQgCACgBABQh8A/kpBMQgBAAgBABQgVAFgWAFQlXBTkDATQgKAAgJABQlgAhkHgpQAAAAgBAAQgJgCgIgBQkxg0iOiTg");
	this.shape_152.setTransform(2.3946,149.8809);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F73C6F").s().p("AprU3IgBAAIgRgDQkxg0iOiTQgHlUBJl8QArjgBNj/IAfhmQBWj8BWkLIASg5QB0lpA7j5IATgDIQyAsQALAPABADQAqE9BIEpIAHAgIABAEQAdBtBUEcQAYBQAXBUQAsCjAgCUQAfCOAWCFQAyEiAWErIgDADQh8A/kpBMIgCABIgrAKQlXBTkDATIgTABQicAPiLAAQiuAAiSgXg");
	this.shape_153.setTransform(2.3946,149.8809);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("Aw9RsQgFlQBKmAQAsjgBLj/QAOgvARg3QBTj2BXkTQAKgeAIgbQB1ltA7j0QAKgBAKAAIQyArQAKARABADQAqE4BIEuQAEAPAEAQQAAADABACQAcBwBSEZQAYBQAWBUQAtCkAgCTQAfCQAWCCQA0ElAWEnQgCACgBACQh9BFkmBLQgBABgBAAQgVAFgWAGQlPBRkMASQgKAAgJABQlfAekIgsQgBAAgBAAQgIgBgJgCQkxg0iPiRg");
	this.shape_154.setTransform(2.4061,149.9622);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F73C6F").s().p("ApqU0IgCAAIgRgDQkxg0iPiRQgFlQBKmAQAsjgBLj/IAfhmQBTj2BXkTIASg5QB1ltA7j0IAUgBIQyArQAKARABADQAqE4BIEuIAIAfIABAFQAcBwBSEZQAYBQAWBUQAtCkAgCTQAfCQAWCCQA0ElAWEnIgDAEQh9BFkmBLIgCABIgrALQlPBRkMASIgTABQiPAMiBAAQi7AAicgag");
	this.shape_155.setTransform(2.4061,149.9622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},7).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},31).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},11).wait(285));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,0,238.6,288.2);


(lib.shine_mov = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RAYS1("synched",0);
	this.instance.setTransform(0,0,1.0936,1.0936);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},549).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-659.6,-659.6,1319.2,1319.3000000000002);


(lib.shine_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416.9,-416.9,833.9,833.9);


(lib.shine_01B = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_02("synched",0);
	this.instance.setTransform(0,0,1,1,27.1914);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-630},1064).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589.6,-589.6,1179.3000000000002,1179.3000000000002);


(lib.shine_01A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine_mov();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.1,-463.7,938.3,927.4);


(lib.screen_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.blue_bg("synched",0);
	this.instance.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-648,-379,1296,758);


(lib.option4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(117,37,0.1828,0.1324,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(3));

	// mcTT
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(117,38);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(3));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB9741").s().p("AyRGBIAAsBMAkjAAAIAAKGQAAB7h6AAg");
	this.shape.setTransform(117,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54AD1E").s().p("AyRGBIAAsBMAkjAAAIAAKGQAAB7h6AAg");
	this.shape_1.setTransform(117,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F94144").s().p("AyRGBIAAsBMAkjAAAIAAKGQAAB7h6AAg");
	this.shape_2.setTransform(117,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.7,234,95.4);


(lib.option3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(117,37,0.1828,0.1324,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(3));

	// mcTT
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(117.2,38);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(3));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB9741").s().p("AyTGBIAAsBMAkmAAAIAAMBg");
	this.shape.setTransform(117.15,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53AD1D").s().p("AyTGBIAAsBMAkmAAAIAAMBg");
	this.shape_1.setTransform(117.15,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F94144").s().p("AyTGBIAAsBMAkmAAAIAAMBg");
	this.shape_2.setTransform(117.15,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.7,234.3,95.4);


(lib.option2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(117,37,0.1828,0.1324,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(3));

	// mcTT
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(117,38);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(3));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB9741").s().p("AyTGBIAAsBMAkmAAAIAAMBg");
	this.shape.setTransform(117.15,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53AD1D").s().p("AyTGBIAAsBMAkmAAAIAAMBg");
	this.shape_1.setTransform(117.15,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F94144").s().p("AyTGBIAAsBMAkmAAAIAAMBg");
	this.shape_2.setTransform(117.15,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.7,234.3,95.4);


(lib.option1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(117,37,0.1828,0.1324,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(3));

	// mcTT
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(117,38);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(3));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB9741").s().p("AwXGBQh6AAAAh7IAAqGIIgAAITkAAIIfAAIAAMBg");
	this.shape.setTransform(117,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53AD1D").s().p("AwXGBQh6AAAAh7IAAqGIIgAAITkAAIIfAAIAAMBg");
	this.shape_1.setTransform(117,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F94144").s().p("AwXGBQh6AAAAh7IAAqGIIgAAITkAAIIfAAIAAMBg");
	this.shape_2.setTransform(117,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.7,234,95.4);


(lib.mcQuestion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(22.6,41.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE7AD").s().p("EhFFALGIAA2LMCIRAAAQB6AAAAB4IAASbQAAB4h6AAg");
	this.shape.setTransform(442.15,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mcTT}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcQuestion, new cjs.Rectangle(0,0,884.3,142), null);


(lib.mcQn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(23.4,42.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB83D").s().p("AiMLGQh7AAAAh4IAAybQAAh4B7AAIGUAAIAAWLg");
	this.shape.setTransform(26.35,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mcTT}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcQn, new cjs.Rectangle(0,0,52.7,142), null);


(lib.highlighter2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* js
		//this.stop();
		//*/
	}
	this.frame_28 = function() {
		///* js
		//this.gotoAndPlay(1);
		//*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer_1
	this.instance = new lib.Blinker_2();
	this.instance.setTransform(116,32,1,1,0,0,0,127,43);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(6).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,254,86);


(lib.highlighter1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		///* js
		//this.stop();
		//*/
	}
	this.frame_28 = function() {
		///* js
		//this.gotoAndPlay(1);
		//*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// Layer_1
	this.instance = new lib.blinker_1();
	this.instance.setTransform(118.5,32,1,1,0,0,0,124.5,38);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(6).to({alpha:0},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,249,76);


(lib.Eys = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.Eyebrow("single",0);
	this.instance.setTransform(15.6,-8.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10.2201},19).wait(1).to({startPosition:0},0).to({rotation:0},19).wait(59).to({startPosition:0},0).to({_off:true},1).wait(29).to({_off:false},0).to({regX:0.1,regY:-0.1,rotation:-13.4317,x:15.7,y:-8.85,startPosition:1},15).wait(1).to({startPosition:1},0).to({regX:0,regY:0,rotation:0,x:15.6,y:-8.75},16).wait(41).to({startPosition:1},0).to({_off:true},1).wait(6).to({_off:false},0).to({regX:0.1,regY:-0.1,rotation:-13.4317,x:15.7,y:-8.85},15).wait(1).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:15.6,y:-8.75},16).wait(47));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F3A576").ss(1,1,1).p("AAAh4QAsAAAeAkQAeAjAAAxQAAAygeAjQgeAkgsAAQgqAAgfgkQgegjAAgyQAAgxAegjQAfgkAqAAg");
	this.shape.setTransform(-1.05,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(98).to({_off:true},1).wait(29).to({_off:false},0).wait(73).to({_off:true},1).wait(6).to({_off:false},0).wait(79));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");
	var mask_graphics_39 = new cjs.Graphics().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");
	var mask_graphics_98 = new cjs.Graphics().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");
	var mask_graphics_128 = new cjs.Graphics().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");
	var mask_graphics_201 = new cjs.Graphics().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");
	var mask_graphics_208 = new cjs.Graphics().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.05,y:4.75}).wait(39).to({graphics:mask_graphics_39,x:-1.05,y:4.75}).wait(59).to({graphics:mask_graphics_98,x:-1.05,y:4.75}).wait(1).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_128,x:-1.05,y:4.75}).wait(73).to({graphics:mask_graphics_201,x:-1.05,y:4.75}).wait(1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_208,x:-1.05,y:4.75}).wait(79));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F3A576").ss(1,1,1).p("AjggpIHBAAIAABTInBAAg");
	this.shape_1.setTransform(-0.325,-13.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7B893").s().p("AjgAqIAAhTIHBAAIAABTg");
	this.shape_2.setTransform(-0.325,-13.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F3A576").ss(1,1,1).p("AjggwIHBAAIAABdQjgAIjhgIg");
	this.shape_3.setTransform(-0.325,-12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7B893").s().p("AjgAtIAAhdIHBAAIAABdQhwAEhxAAQhvAAhxgEg");
	this.shape_4.setTransform(-0.325,-12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgg3IHBAAIAABnQjgAQjhgQg");
	this.shape_5.setTransform(-0.325,-12.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7B893").s().p("AjgAwIAAhnIHBAAIAABnQhwAIhwAAQhwAAhxgIg");
	this.shape_6.setTransform(-0.325,-12.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgg/IHBAAIAAByQjfAZjigZg");
	this.shape_7.setTransform(-0.325,-11.4375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7B893").s().p("AjgAzIAAhyIHBAAIAAByQhvANhxAAQhwAAhxgNg");
	this.shape_8.setTransform(-0.325,-11.4375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F3A576").ss(1,1,1).p("AjghGIHBAAIAAB9QjfAgjiggg");
	this.shape_9.setTransform(-0.325,-10.7125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7B893").s().p("AjgA3IAAh9IHBAAIAAB9QhvAQhxAAQhwAAhxgQg");
	this.shape_10.setTransform(-0.325,-10.7125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3A576").ss(1,1,1).p("AjghNIHBAAIAACHQjfAojigog");
	this.shape_11.setTransform(-0.325,-9.9875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7B893").s().p("AjgA6IAAiHIHBAAIAACHQhvAUhxAAQhwAAhxgUg");
	this.shape_12.setTransform(-0.325,-9.9875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F3A576").ss(1,1,1).p("AjghUIHBAAIAACRQjeAxjjgxg");
	this.shape_13.setTransform(-0.325,-9.2625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7B893").s().p("AjgA9IAAiRIHBAAIAACRQhvAYhxAAQhvAAhygYg");
	this.shape_14.setTransform(-0.325,-9.2625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F3A576").ss(1,1,1).p("AjghcIHBAAIAACcQjeA5jjg5g");
	this.shape_15.setTransform(-0.325,-8.5375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7B893").s().p("AjgBAIAAicIHBAAIAACcQhvAdhwAAQhwAAhygdg");
	this.shape_16.setTransform(-0.325,-8.5375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F3A576").ss(1,1,1).p("AjghjIHBAAIAACnQjdBBjkhBg");
	this.shape_17.setTransform(-0.325,-7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7B893").s().p("AjgBDIAAimIHBAAIAACmQhvAhhwAAQhwAAhyghg");
	this.shape_18.setTransform(-0.325,-7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F3A576").ss(1,1,1).p("AjghqIHBAAIAACxQjdBJjkhJg");
	this.shape_19.setTransform(-0.325,-7.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7B893").s().p("AjgBHIAAixIHBAAIAACxQhuAkhxAAQhwAAhygkg");
	this.shape_20.setTransform(-0.325,-7.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F3A576").ss(1,1,1).p("AjghyIHBAAIAAC8QjcBRjlhRg");
	this.shape_21.setTransform(-0.325,-6.3375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7B893").s().p("AjgBKIAAi8IHBAAIAAC8QhuAphxAAQhvAAhzgpg");
	this.shape_22.setTransform(-0.325,-6.3375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgh5IHBAAIAADHQjcBYjlhYg");
	this.shape_23.setTransform(-0.325,-5.6125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7B893").s().p("AjgBOIAAjHIHBAAIAADHQhuAshwAAQhwAAhzgsg");
	this.shape_24.setTransform(-0.325,-5.6125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiAIHBAAIAADRQjbBhjmhhg");
	this.shape_25.setTransform(-0.325,-4.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7B893").s().p("AjgBRIAAjRIHBAAIAADRQhuAwhwAAQhwAAhzgwg");
	this.shape_26.setTransform(-0.325,-4.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiIIHBAAIAADcQjbBpjmhpg");
	this.shape_27.setTransform(-0.325,-4.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7B893").s().p("AjgBUIAAjcIHBAAIAADcQhtA0hxAAQhwAAhzg0g");
	this.shape_28.setTransform(-0.325,-4.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiPIHBAAIAADmQjaBxjnhxg");
	this.shape_29.setTransform(-0.325,-3.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7B893").s().p("AjgBXIAAjmIHBAAIAADmQhtA5hxAAQhvAAh0g5g");
	this.shape_30.setTransform(-0.325,-3.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiWIHBAAIAADxQjaB5jnh5g");
	this.shape_31.setTransform(-0.325,-2.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7B893").s().p("AjgBbIAAjxIHBAAIAADxQhtA8hxAAQhvAAh0g8g");
	this.shape_32.setTransform(-0.325,-2.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F3A576").ss(1,1,1).p("AjgidIHBAAIAAD7QjaCBjniBg");
	this.shape_33.setTransform(-0.325,-1.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7B893").s().p("AjgBeIAAj7IHBAAIAAD7QhtBAhwAAQhwAAh0hAg");
	this.shape_34.setTransform(-0.325,-1.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F3A576").ss(1,1,1).p("AjgilIHBAAIAAEGQjZCJjoiJg");
	this.shape_35.setTransform(-0.325,-1.2375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7B893").s().p("AjgBhIAAkGIHBAAIAAEGQhsBFhxAAQhwAAh0hFg");
	this.shape_36.setTransform(-0.325,-1.2375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F3A576").ss(1,1,1).p("AjgisIHBAAIAAEQQjZCSjoiSg");
	this.shape_37.setTransform(-0.325,-0.5125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7B893").s().p("AjgBkIAAkQIHBAAIAAEQQhsBJhxAAQhwAAh0hJg");
	this.shape_38.setTransform(-0.325,-0.5125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F3A576").ss(1,1,1).p("AjgizIHBAAIAAEaQjYCajpiag");
	this.shape_39.setTransform(-0.325,0.2092);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7B893").s().p("AjgBnIAAkaIHBAAIAAEaQhsBNhxAAQhvAAh1hNg");
	this.shape_40.setTransform(-0.325,0.2092);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F3A576").ss(1,1,1).p("AjggyIHBAAIAABgQjgAKjhgKg");
	this.shape_41.setTransform(-0.325,-12.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7B893").s().p("AjgAuIAAhgIHBAAIAABgQhwAFhxAAQhvAAhxgFg");
	this.shape_42.setTransform(-0.325,-12.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgg7IHBAAIAABtQjgAUjhgUg");
	this.shape_43.setTransform(-0.325,-11.7875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7B893").s().p("AjgAyIAAhtIHBAAIAABtQhwAKhwAAQhwAAhxgKg");
	this.shape_44.setTransform(-0.325,-11.7875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F3A576").ss(1,1,1).p("AjghEIHBAAIAAB6QjfAfjigfg");
	this.shape_45.setTransform(-0.325,-10.8625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7B893").s().p("AjgA2IAAh6IHBAAIAAB6QhvAPhxAAQhwAAhxgPg");
	this.shape_46.setTransform(-0.325,-10.8625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F3A576").ss(1,1,1).p("AjghOIHBAAIAACIQjeApjjgpg");
	this.shape_47.setTransform(-0.325,-9.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F7B893").s().p("AjgA6IAAiIIHBAAIAACIQhvAVhxAAQhvAAhygVg");
	this.shape_48.setTransform(-0.325,-9.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F3A576").ss(1,1,1).p("AjghXIHBAAIAACVQjeA0jjg0g");
	this.shape_49.setTransform(-0.325,-9.0125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7B893").s().p("AjgA+IAAiVIHBAAIAACVQhvAahwAAQhwAAhygag");
	this.shape_50.setTransform(-0.325,-9.0125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F3A576").ss(1,1,1).p("AjghgIHBAAIAACiQjdA+jkg+g");
	this.shape_51.setTransform(-0.325,-8.0875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7B893").s().p("AjgBCIAAiiIHBAAIAACiQhvAfhwAAQhwAAhygfg");
	this.shape_52.setTransform(-0.325,-8.0875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F3A576").ss(1,1,1).p("AjghpIHBAAIAACwQjdBHjkhHg");
	this.shape_53.setTransform(-0.325,-7.1625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7B893").s().p("AjgBHIAAiwIHBAAIAACwQhuAjhxAAQhwAAhygjg");
	this.shape_54.setTransform(-0.325,-7.1625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F3A576").ss(1,1,1).p("AjghzIHBAAIAAC+QjcBSjlhSg");
	this.shape_55.setTransform(-0.325,-6.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7B893").s().p("AjgBKIAAi9IHBAAIAAC9QhuAphxAAQhvAAhzgpg");
	this.shape_56.setTransform(-0.325,-6.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgh8IHBAAIAADLQjcBcjlhcg");
	this.shape_57.setTransform(-0.325,-5.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7B893").s().p("AjgBPIAAjLIHBAAIAADLQhuAuhwAAQhwAAhzgug");
	this.shape_58.setTransform(-0.325,-5.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiFIHBAAIAADYQjbBmjmhmg");
	this.shape_59.setTransform(-0.325,-4.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7B893").s().p("AjgBTIAAjYIHBAAIAADYQhuAzhwAAQhwAAhzgzg");
	this.shape_60.setTransform(-0.325,-4.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiOIHBAAIAADlQjbBwjmhwg");
	this.shape_61.setTransform(-0.325,-3.4875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F7B893").s().p("AjgBXIAAjlIHBAAIAADlQhtA4hxAAQhwAAhzg4g");
	this.shape_62.setTransform(-0.325,-3.4875);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiYIHBAAIAADzQjaB7jnh7g");
	this.shape_63.setTransform(-0.325,-2.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7B893").s().p("AjgBbIAAjzIHBAAIAADzQhtA+hwAAQhwAAh0g+g");
	this.shape_64.setTransform(-0.325,-2.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F3A576").ss(1,1,1).p("AjgihIHBAAIAAEAQjZCFjoiFg");
	this.shape_65.setTransform(-0.325,-1.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7B893").s().p("AjgBfIAAkAIHBAAIAAEAQhsBDhxAAQhwAAh0hDg");
	this.shape_66.setTransform(-0.325,-1.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiqIHBAAIAAENQjZCQjoiQg");
	this.shape_67.setTransform(-0.325,-0.7125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7B893").s().p("AjgBjIAAkNIHBAAIAAENQhsBIhxAAQhwAAh0hIg");
	this.shape_68.setTransform(-0.325,-0.7125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F3A576").ss(1,1,1).p("AjgirIHBAAIAAEPQjZCQjoiQg");
	this.shape_69.setTransform(-0.325,-0.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7B893").s().p("AjgBjIAAkOIHBAAIAAEOQhsBIhxAAQhwAAh0hIg");
	this.shape_70.setTransform(-0.325,-0.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiiIHBAAIAAECQjZCGjoiGg");
	this.shape_71.setTransform(-0.325,-1.5125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7B893").s().p("AjgBgIAAkCIHBAAIAAECQhsBDhxAAQhwAAh0hDg");
	this.shape_72.setTransform(-0.325,-1.5125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiZIHBAAIAAD1QjaB8jnh8g");
	this.shape_73.setTransform(-0.325,-2.3875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F7B893").s().p("AjgBcIAAj1IHBAAIAAD1QhtA+hwAAQhwAAh0g+g");
	this.shape_74.setTransform(-0.325,-2.3875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiRIHBAAIAADpQjaBzjnhzg");
	this.shape_75.setTransform(-0.325,-3.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7B893").s().p("AjgBYIAAjpIHBAAIAADpQhtA5hxAAQhvAAh0g5g");
	this.shape_76.setTransform(-0.325,-3.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#F3A576").ss(1,1,1).p("AjgiIIHBAAIAADcQjbBqjmhqg");
	this.shape_77.setTransform(-0.325,-4.1125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F7B893").s().p("AjgBUIAAjcIHBAAIAADcQhtA1hxAAQhwAAhzg1g");
	this.shape_78.setTransform(-0.325,-4.1125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgh/IHBAAIAADPQjbBgjmhgg");
	this.shape_79.setTransform(-0.325,-4.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F7B893").s().p("AjgBQIAAjPIHBAAIAADPQhuAwhwAAQhwAAhzgwg");
	this.shape_80.setTransform(-0.325,-4.975);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgh3IHBAAIAADDQjcBXjlhXg");
	this.shape_81.setTransform(-0.325,-5.8375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F7B893").s().p("AjgBMIAAjDIHBAAIAADDQhuAshwAAQhwAAhzgsg");
	this.shape_82.setTransform(-0.325,-5.8375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F3A576").ss(1,1,1).p("AjghuIHBAAIAAC3QjcBNjlhNg");
	this.shape_83.setTransform(-0.325,-6.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7B893").s().p("AjgBIIAAi2IHBAAIAAC2QhuAnhxAAQhvAAhzgng");
	this.shape_84.setTransform(-0.325,-6.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F3A576").ss(1,1,1).p("AjghlIHBAAIAACqQjdBDjkhDg");
	this.shape_85.setTransform(-0.325,-7.575);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7B893").s().p("AjgBFIAAiqIHBAAIAACqQhvAhhwAAQhwAAhyghg");
	this.shape_86.setTransform(-0.325,-7.575);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F3A576").ss(1,1,1).p("AjghdIHBAAIAACeQjeA5jjg5g");
	this.shape_87.setTransform(-0.325,-8.4375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F7B893").s().p("AjgBBIAAieIHBAAIAACeQhvAdhwAAQhwAAhygdg");
	this.shape_88.setTransform(-0.325,-8.4375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F3A576").ss(1,1,1).p("AjghUIHBAAIAACRQjeAwjjgwg");
	this.shape_89.setTransform(-0.325,-9.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F3A576").ss(1,1,1).p("AjghLIHBAAIAACEQjfAnjigng");
	this.shape_90.setTransform(-0.325,-10.1625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F7B893").s().p("AjgA5IAAiEIHBAAIAACEQhvAThxAAQhwAAhxgTg");
	this.shape_91.setTransform(-0.325,-10.1625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#F3A576").ss(1,1,1).p("AjghDIHBAAIAAB4QjfAdjigdg");
	this.shape_92.setTransform(-0.325,-11.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F7B893").s().p("AjgA1IAAh4IHBAAIAAB4QhvAPhxAAQhwAAhxgPg");
	this.shape_93.setTransform(-0.325,-11.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#F3A576").ss(1,1,1).p("Ajgg6IHBAAIAABsQjgATjhgTg");
	this.shape_94.setTransform(-0.325,-11.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F7B893").s().p("AjgAyIAAhsIHBAAIAABsQhwAJhwAAQhwAAhxgJg");
	this.shape_95.setTransform(-0.325,-11.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#F3A576").ss(1,1,1).p("AjggxIHBAAIAABfQjgAJjhgJg");
	this.shape_96.setTransform(-0.325,-12.7625);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F7B893").s().p("AjgAuIAAhfIHBAAIAABfQhwAEhxAAQhvAAhxgEg");
	this.shape_97.setTransform(-0.325,-12.7625);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14,p:{y:-9.2625}},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_14,p:{y:-9.2625}},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},59).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},29).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_14,p:{y:-9.3}},{t:this.shape_89}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},41).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_14,p:{y:-9.3}},{t:this.shape_89}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(47));

	// Layer_4
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAAJQAAALgHAHQgHAHgLAAQgJAAgIgHg");
	this.shape_98.setTransform(-1.5564,2.2909,0.738,0.959);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgkAkQgOgPAAgVQAAgUAOgPQAQgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgQgPg");
	this.shape_99.setTransform(-1.4,5.9,1.25,1.25);

	var maskedShapeInstanceList = [this.shape_98,this.shape_99];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98}]}).to({state:[{t:this.shape_99},{t:this.shape_98}]},98).to({state:[]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},29).to({state:[{t:this.shape_99},{t:this.shape_98}]},73).to({state:[]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},6).wait(79));

	// Layer_5
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F3A576").ss(1,1,1).p("AAAh4QAsAAAeAkQAeAjAAAxQAAAygeAjQgeAkgsAAQgqAAgfgkQgegjAAgyQAAgxAegjQAfgkAqAAg");
	this.shape_100.setTransform(-1.05,4.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AhIBVQgfgjAAgyQAAgxAfgjQAegjAqAAQAsAAAdAjQAfAjAAAxQAAAygfAjQgdAkgsAAQgqAAgegkg");
	this.shape_101.setTransform(-1.05,4.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100}]}).to({state:[{t:this.shape_101},{t:this.shape_100}]},98).to({state:[]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},29).to({state:[{t:this.shape_101},{t:this.shape_100}]},73).to({state:[]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},6).wait(79));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-18.8,39.7,36.6);


(lib.end_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_101 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(1));

	// Isolation_Mode
	this.instance = new lib.Activity_Completed();
	this.instance.setTransform(954.2,545,0.75,0.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleX:1.6537,scaleY:1.6537,alpha:1},15,cjs.Ease.get(1)).to({scaleX:1.5,scaleY:1.5},9).wait(55));

	// Layer_24
	this.instance_1 = new lib.shine_01B();
	this.instance_1.setTransform(963.5,452,0.5805,0.5805);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({scaleX:1.5,scaleY:1.5,alpha:0.8008},26,cjs.Ease.get(1)).wait(48));

	// shine1
	this.instance_2 = new lib.shine_01A("synched",0);
	this.instance_2.setTransform(943.6,423.55,1.5,1.5,19.9988);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({rotation:0,alpha:1},30).wait(68));

	// Layer_27
	this.instance_3 = new lib.screen_bg("synched",0);
	this.instance_3.setTransform(951.85,546.2,1.5,1.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},30).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-470.7,2123.3,1788.6000000000001);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hill();
	this.instance.setTransform(454,3386,0.512,0.512);

	this.instance_1 = new lib.hill();
	this.instance_1.setTransform(454,1226,0.512,0.512);

	this.instance_2 = new lib.hill();
	this.instance_2.setTransform(454,2666,0.512,0.512);

	this.instance_3 = new lib.hill();
	this.instance_3.setTransform(454,1946,0.512,0.512);

	this.instance_4 = new lib.hill();
	this.instance_4.setTransform(454,505,0.512,0.512);

	this.instance_5 = new lib.BG_Anim();
	this.instance_5.setTransform(640,1800.3,1,1,0,0,0,640,1800.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,1280,4320), null);


(lib.start_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
		this.parent.fStartGamneAnim();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(621.85,279.45,0.2292,0.3989,0,0,0,0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(41));

	// Layer_1
	this.instance = new lib.StartAnim();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.0117},29).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blinker2
	this.mcGlow_3 = new lib.highlighter2();
	this.mcGlow_3.name = "mcGlow_3";
	this.mcGlow_3.setTransform(587.3,112,1,1,0,0,0,116.3,30);
	this.mcGlow_3.visible = false;

	this.mcGlow_2 = new lib.highlighter2();
	this.mcGlow_2.name = "mcGlow_2";
	this.mcGlow_2.setTransform(352.3,112,1,1,0,0,0,116.3,30);
	this.mcGlow_2.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcGlow_2},{t:this.mcGlow_3}]}).wait(1));

	// Blinker1
	this.mcGlow_4 = new lib.highlighter1();
	this.mcGlow_4.name = "mcGlow_4";
	this.mcGlow_4.setTransform(937,81.75,1,1,0,0,180);
	this.mcGlow_4.visible = false;

	this.mcGlow_1 = new lib.highlighter1();
	this.mcGlow_1.name = "mcGlow_1";
	this.mcGlow_1.setTransform(0,81.75);
	this.mcGlow_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcGlow_1},{t:this.mcGlow_4}]}).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("EAkngGAIAAMBAAAmAIAAMBEgkmgGAIAAMB");
	this.shape.setTransform(468.3,121.9);

	this.mcOption4 = new lib.option4();
	this.mcOption4.name = "mcOption4";
	this.mcOption4.setTransform(827.3,113.4,1,1,0,0,0,124.7,30);

	this.mcOption3 = new lib.option3();
	this.mcOption3.name = "mcOption3";
	this.mcOption3.setTransform(585.5,113.4,1,1,0,0,0,117.2,30);

	this.mcOption2 = new lib.option2();
	this.mcOption2.name = "mcOption2";
	this.mcOption2.setTransform(351.2,113.4,1,1,0,0,0,117.2,30);

	this.mcOption1 = new lib.option1();
	this.mcOption1.name = "mcOption1";
	this.mcOption1.setTransform(117,113.4,1,1,0,0,0,117,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcOption1},{t:this.mcOption2},{t:this.mcOption3},{t:this.mcOption4},{t:this.shape}]}).wait(1));

	// Layer_5
	this.mcQn = new lib.mcQn();
	this.mcQn.name = "mcQn";
	this.mcQn.setTransform(26.4,71,1,1,0,0,0,26.4,71);

	this.mcQ = new lib.mcQuestion();
	this.mcQ.name = "mcQ";
	this.mcQ.setTransform(494.9,71,1,1,0,0,0,442.2,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcQ},{t:this.mcQn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-6,0,949,168.1), null);


(lib.GFace1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mouth
	this.instance = new lib.Mouth("single",0);
	this.instance.setTransform(10,-22.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(11).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(73).to({startPosition:0},0).wait(21).to({startPosition:0},0).to({_off:true},1).wait(150));

	// Eye_2
	this.instance_1 = new lib.Eys("single",0);
	this.instance_1.setTransform(-20.7,-76.5,1,1,0,0,180,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({mode:"synched"},0).wait(86).to({startPosition:86},0).to({_off:true},1).wait(1).to({_off:false,startPosition:88},0).wait(11).to({startPosition:128},0).wait(74).to({startPosition:208},0).wait(27).to({startPosition:235},0).to({_off:true},1).wait(150));

	// Eys
	this.instance_2 = new lib.Eys("single",0);
	this.instance_2.setTransform(36.7,-77.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({mode:"synched"},0).wait(86).to({startPosition:86},0).to({_off:true},1).wait(1).to({_off:false,startPosition:88},0).wait(11).to({startPosition:128},0).wait(74).to({startPosition:208},0).wait(27).to({startPosition:235},0).to({_off:true},1).wait(150));

	// Nose
	this.instance_3 = new lib.Bitmap4();
	this.instance_3.setTransform(-122,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:true},1).wait(1).to({_off:false},0).wait(112).to({_off:true},1).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-189,243,190);


(lib.Wrong_Girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Face
	this.instance = new lib.GFace1("synched",122);
	this.instance.setTransform(-2.9,-642.4,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:123},1).to({x:-1.2,y:-614.9,startPosition:139},16,cjs.Ease.get(0.5)).to({rotation:-6.1558,x:-60.05,y:-644,startPosition:149},10,cjs.Ease.get(0.5)).to({regY:-0.1,scaleX:1.0999,scaleY:1.0999,rotation:-11.1247,x:-100.85,y:-647.45,startPosition:163},14).to({regX:-0.1,regY:-0.5,rotation:-7.3427,x:-84.5,y:-646.45,startPosition:174},11).to({regX:0,regY:-0.1,rotation:-11.1247,x:-101.4,y:-647.45,startPosition:185},11).to({regY:0,scaleX:1.1,scaleY:1.1,rotation:-6.1558,x:-60.05,y:-644,startPosition:197},12).to({rotation:0,x:-0.3,y:-614.9,startPosition:207},10,cjs.Ease.get(0.5)).to({x:-2.9,y:-642.4,startPosition:228},21,cjs.Ease.get(0.5)).wait(7));

	// Body
	this.instance_1 = new lib.GBody("synched",0);
	this.instance_1.setTransform(-1.9,-454.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({y:-429.2},16,cjs.Ease.get(0.5)).to({regX:-0.1,regY:-0.1,rotation:-6.1564,x:-41.45,y:-456.7},10,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:-118.5,rotation:-6.5936,x:-57.2,y:-574.75},0).wait(1).to({rotation:-7.0183,x:-59.85,y:-575.1},0).wait(1).to({rotation:-7.4302,x:-62.35,y:-575.5},0).wait(1).to({rotation:-7.8294,x:-64.85,y:-575.85},0).wait(1).to({rotation:-8.216,x:-67.2,y:-576.2},0).wait(1).to({rotation:-8.5899,x:-69.5,y:-576.5},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-8.9512,x:-71.7,y:-576.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.2997,x:-73.85,y:-577.05},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-9.6356,x:-75.9,y:-577.3},0).wait(1).to({rotation:-9.9588,x:-77.9,y:-577.55},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.2694,x:-79.75,y:-577.85},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-10.5672,x:-81.65,y:-578.05},0).wait(1).to({rotation:-10.8524,x:-83.35,y:-578.25},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-11.1249,x:-61.75,y:-462.45},0).wait(1).to({regX:-0.5,regY:-118.5,rotation:-10.6919,x:-83.9,y:-578.45},0).wait(1).to({rotation:-10.2767,x:-82.85,y:-578.35},0).wait(1).to({rotation:-9.8794,x:-81.85,y:-578.3},0).wait(1).to({rotation:-9.5,x:-80.85,y:-578.15},0).wait(1).to({rotation:-9.1384,x:-79.9,y:-578.1},0).wait(1).to({rotation:-8.7947,x:-79,y:-578},0).wait(1).to({rotation:-8.4688,x:-78.2},0).wait(1).to({rotation:-8.1608,x:-77.4,y:-577.9},0).wait(1).to({rotation:-7.8706,x:-76.65,y:-577.8},0).wait(1).to({rotation:-7.5983,x:-75.95,y:-577.75},0).wait(1).to({regX:-0.2,regY:-0.4,rotation:-7.3439,x:-59.75,y:-460.3},0).to({regX:-0.1,regY:-0.1,rotation:-11.1249,x:-62.25,y:-462.45},11,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:-118.5,rotation:-10.6024,x:-82.25,y:-578.05},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.0997,x:-79.1,y:-577.7},0).wait(1).to({rotation:-9.6166,x:-76.1,y:-577.35},0).wait(1).to({rotation:-9.1533,x:-73.2,y:-576.95},0).wait(1).to({rotation:-8.7096,x:-70.45,y:-576.6},0).wait(1).to({rotation:-8.2857,x:-67.75,y:-576.25},0).wait(1).to({rotation:-7.8816,x:-65.25,y:-575.85},0).wait(1).to({rotation:-7.4971,x:-62.85,y:-575.6},0).wait(1).to({rotation:-7.1323,x:-60.55,y:-575.25},0).wait(1).to({rotation:-6.7873,x:-58.4,y:-574.9},0).wait(1).to({rotation:-6.462,x:-56.4,y:-574.65},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-6.1564,x:-41.45,y:-456.7},0).to({regX:0,regY:0,rotation:0,x:-1.9,y:-429.2},10,cjs.Ease.get(0.5)).to({y:-454.5},21,cjs.Ease.get(0.5)).wait(7));

	// s
	this.instance_2 = new lib.skwrong("synched",0);
	this.instance_2.setTransform(-6.95,-502.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:1},1).to({y:-484,startPosition:17},16,cjs.Ease.get(0.5)).to({rotation:-2.4513,x:-48.45,y:-508.75,startPosition:27},10,cjs.Ease.get(0.5)).to({scaleX:0.9999,scaleY:0.9999,rotation:-8.3372,x:-73.25,y:-516.35,startPosition:41},14).to({regX:-0.1,regY:-0.2,rotation:-9.5003,x:-72.55,y:-519.2,startPosition:52},11).to({regX:0,regY:0,rotation:-8.3372,x:-73.25,y:-516.35,startPosition:63},11,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,rotation:-2.4513,x:-48.45,y:-508.75,startPosition:75},12).to({rotation:0,x:-6.95,y:-484,startPosition:85},10,cjs.Ease.get(0.5)).to({y:-502.4,startPosition:106},21,cjs.Ease.get(0.5)).wait(7));

	// R_F_
	this.instance_3 = new lib.GL3("synched",0);
	this.instance_3.setTransform(-84.95,-113.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleY:0.9006,skewX:-3.7175,skewY:176.2825,x:-88.9,y:-105.5},16,cjs.Ease.get(0.5)).to({scaleX:1.0007,scaleY:0.9782,skewX:-10.2072,skewY:168.9568,x:-99.15,y:-112.75},10,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:45,skewX:-9.9642,skewY:169.2,x:-90.85,y:-69.65},0).wait(1).to({skewX:-9.7284,skewY:169.4361,x:-90.95,y:-69.85},0).wait(1).to({skewX:-9.4995,skewY:169.6652,x:-91.05,y:-70.1},0).wait(1).to({skewX:-9.2777,skewY:169.8872,x:-91.15,y:-70.3},0).wait(1).to({skewX:-9.063,skewY:170.1021,x:-91.25,y:-70.55},0).wait(1).to({scaleY:0.9781,skewX:-8.8552,skewY:170.3101,x:-91.3,y:-70.7},0).wait(1).to({scaleY:0.9782,skewX:-8.6546,skewY:170.5109,x:-91.45,y:-70.95},0).wait(1).to({skewX:-8.4609,skewY:170.7047,x:-91.5,y:-71.1},0).wait(1).to({skewX:-8.2743,skewY:170.8915,x:-91.6,y:-71.3},0).wait(1).to({scaleX:1.0006,scaleY:0.9781,skewX:-8.0948,skewY:171.0712,x:-91.7,y:-71.45},0).wait(1).to({skewX:-7.9223,skewY:171.2439,x:-91.8,y:-71.65},0).wait(1).to({skewX:-7.7568,skewY:171.4095,x:-91.85,y:-71.8},0).wait(1).to({skewX:-7.5984,skewY:171.5681,x:-91.95,y:-71.9},0).wait(1).to({regX:0.1,regY:-0.2,skewX:-7.447,skewY:171.7196,x:-98.35,y:-115.85},0).wait(1).to({regX:-0.5,regY:45,skewX:-7.195,skewY:171.9715,x:-91.85,y:-72.2},0).wait(1).to({skewX:-6.9535,skewY:172.2129,x:-91.7,y:-72.25},0).wait(1).to({skewX:-6.7223,skewY:172.4439,x:-91.6,y:-72.4},0).wait(1).to({skewX:-6.5016,skewY:172.6646,x:-91.5,y:-72.5},0).wait(1).to({skewX:-6.2912,skewY:172.8749,x:-91.4,y:-72.65},0).wait(1).to({skewX:-6.0912,skewY:173.0748,x:-91.3,y:-72.75},0).wait(1).to({skewX:-5.9016,skewY:173.2643,x:-91.2,y:-72.8},0).wait(1).to({skewX:-5.7224,skewY:173.4434,x:-91.1,y:-72.9},0).wait(1).to({skewX:-5.5536,skewY:173.6122,x:-91.05,y:-73},0).wait(1).to({skewX:-5.3952,skewY:173.7705,x:-90.95,y:-73.1},0).wait(1).to({regX:0.1,regY:-0.4,skewX:-5.2471,skewY:173.9185,x:-95.45,y:-117.2},0).to({regY:-0.2,skewX:-7.447,skewY:171.7196,x:-98.35,y:-115.85},11,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:45,skewX:-7.7372,skewY:171.4291,x:-91.8,y:-71.75},0).wait(1).to({skewX:-8.0165,skewY:171.1495,x:-91.7,y:-71.5},0).wait(1).to({scaleX:1.0007,scaleY:0.9782,skewX:-8.2849,skewY:170.8809,x:-91.6,y:-71.25},0).wait(1).to({skewX:-8.5423,skewY:170.6233,x:-91.45,y:-70.95},0).wait(1).to({skewX:-8.7887,skewY:170.3766,x:-91.35,y:-70.75},0).wait(1).to({skewX:-9.0242,skewY:170.1409,x:-91.25,y:-70.55},0).wait(1).to({skewX:-9.2488,skewY:169.9161,x:-91.15,y:-70.3},0).wait(1).to({skewX:-9.4623,skewY:169.7024,x:-91.05,y:-70.1},0).wait(1).to({skewX:-9.665,skewY:169.4995,x:-90.95,y:-69.9},0).wait(1).to({skewX:-9.8567,skewY:169.3077,x:-90.85,y:-69.7},0).wait(1).to({skewX:-10.0374,skewY:169.1268,x:-90.8,y:-69.5},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-10.2072,skewY:168.9568,x:-99.15,y:-112.75},0).to({scaleX:1,scaleY:0.9006,skewX:-3.7175,skewY:176.2825,x:-88.9,y:-105.5},10,cjs.Ease.get(0.5)).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:180,x:-84.95,y:-113.5},21,cjs.Ease.get(0.5)).wait(7));

	// R__lg_
	this.instance_4 = new lib.GL2("synched",0);
	this.instance_4.setTransform(-64.05,-184.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleY:0.9006,skewX:-3.7175,skewY:176.2825,x:-72.2,y:-171.05},16,cjs.Ease.get(0.5)).to({regX:0.2,scaleX:1.0007,scaleY:0.9782,skewX:-10.2072,skewY:168.9568,x:-91.05,y:-185.5},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,skewX:-9.9642,skewY:169.2,x:-82.6,y:-140.85},0).wait(1).to({skewX:-9.7284,skewY:169.4361,x:-82.4,y:-141},0).wait(1).to({skewX:-9.4995,skewY:169.6652,x:-82.25,y:-141.2},0).wait(1).to({skewX:-9.2777,skewY:169.8872,x:-82.05,y:-141.35},0).wait(1).to({skewX:-9.063,skewY:170.1021,x:-81.9,y:-141.55},0).wait(1).to({scaleY:0.9781,skewX:-8.8552,skewY:170.3101,x:-81.75,y:-141.7},0).wait(1).to({scaleY:0.9782,skewX:-8.6546,skewY:170.5109,x:-81.6,y:-141.9},0).wait(1).to({skewX:-8.4609,skewY:170.7047,x:-81.45,y:-142},0).wait(1).to({skewX:-8.2743,skewY:170.8915,x:-81.3,y:-142.2},0).wait(1).to({scaleX:1.0006,scaleY:0.9781,skewX:-8.0948,skewY:171.0712,x:-81.15,y:-142.3},0).wait(1).to({skewX:-7.9223,skewY:171.2439,x:-81.05,y:-142.45},0).wait(1).to({skewX:-7.7568,skewY:171.4095,x:-80.9,y:-142.6},0).wait(1).to({skewX:-7.5984,skewY:171.5681,x:-80.8,y:-142.7},0).wait(1).to({regX:0.2,regY:-0.1,skewX:-7.447,skewY:171.7196,x:-86.8,y:-188},0).wait(1).to({regX:0,regY:46.5,skewX:-7.195,skewY:171.9715,x:-80.25,y:-142.95},0).wait(1).to({skewX:-6.9535,skewY:172.2129,x:-79.85},0).wait(1).to({skewX:-6.7223,skewY:172.4439,x:-79.45,y:-143.05},0).wait(1).to({skewX:-6.5016,skewY:172.6646,x:-79.05,y:-143.1},0).wait(1).to({skewX:-6.2912,skewY:172.8749,x:-78.7,y:-143.2},0).wait(1).to({skewX:-6.0912,skewY:173.0748,x:-78.35,y:-143.25},0).wait(1).to({skewX:-5.9016,skewY:173.2643,x:-78,y:-143.3},0).wait(1).to({skewX:-5.7224,skewY:173.4434,x:-77.7,y:-143.35},0).wait(1).to({skewX:-5.5536,skewY:173.6122,x:-77.45,y:-143.45},0).wait(1).to({skewX:-5.3952,skewY:173.7705,x:-77.15},0).wait(1).to({regX:0.5,regY:-0.3,skewX:-5.2471,skewY:173.9185,x:-81.45,y:-188.95},0).to({regX:0.2,regY:-0.1,skewX:-7.447,skewY:171.7196,x:-86.8,y:-188},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,skewX:-7.7372,skewY:171.4291,x:-80.9,y:-142.6},0).wait(1).to({skewX:-8.0165,skewY:171.1495,x:-81.1,y:-142.35},0).wait(1).to({scaleX:1.0007,scaleY:0.9782,skewX:-8.2849,skewY:170.8809,x:-81.3,y:-142.15},0).wait(1).to({skewX:-8.5423,skewY:170.6233,x:-81.5,y:-141.95},0).wait(1).to({skewX:-8.7887,skewY:170.3766,x:-81.7,y:-141.75},0).wait(1).to({skewX:-9.0242,skewY:170.1409,x:-81.85,y:-141.6},0).wait(1).to({skewX:-9.2488,skewY:169.9161,x:-82.05,y:-141.4},0).wait(1).to({skewX:-9.4623,skewY:169.7024,x:-82.2,y:-141.25},0).wait(1).to({skewX:-9.665,skewY:169.4995,x:-82.35,y:-141.05},0).wait(1).to({skewX:-9.8567,skewY:169.3077,x:-82.5,y:-140.95},0).wait(1).to({skewX:-10.0374,skewY:169.1268,x:-82.6,y:-140.8},0).wait(1).to({regX:0.2,regY:-0.1,skewX:-10.2072,skewY:168.9568,x:-91.05,y:-185.5},0).to({regX:0.1,scaleX:1,scaleY:0.9006,skewX:-3.7175,skewY:176.2825,x:-72.2,y:-171.05},10,cjs.Ease.get(0.5)).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:180,x:-64.05,y:-184.9},21,cjs.Ease.get(0.5)).wait(7));

	// __r__Lage_
	this.instance_5 = new lib.GL1("synched",0);
	this.instance_5.setTransform(-59.2,-318.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleY:0.9006,skewX:-3.7175,skewY:176.2825,x:-75.15,y:-291.65},16,cjs.Ease.get(0.5)).to({regY:-0.2,scaleX:1.0007,scaleY:0.9782,skewX:-10.2072,skewY:168.9568,x:-109.5,y:-319.95},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:78.5,skewX:-9.9642,skewY:169.2,x:-95.1,y:-244.35},0).wait(1).to({skewX:-9.7284,skewY:169.4361,x:-94.5,y:-244.6},0).wait(1).to({skewX:-9.4995,skewY:169.6652,x:-93.9,y:-244.8},0).wait(1).to({skewX:-9.2777,skewY:169.8872,x:-93.3,y:-245},0).wait(1).to({skewX:-9.063,skewY:170.1021,x:-92.75,y:-245.2},0).wait(1).to({scaleY:0.9781,skewX:-8.8552,skewY:170.3101,x:-92.25,y:-245.45},0).wait(1).to({scaleY:0.9782,skewX:-8.6546,skewY:170.5109,x:-91.7,y:-245.6},0).wait(1).to({skewX:-8.4609,skewY:170.7047,x:-91.2,y:-245.8},0).wait(1).to({skewX:-8.2743,skewY:170.8915,x:-90.7,y:-245.95},0).wait(1).to({scaleX:1.0006,scaleY:0.9781,skewX:-8.0948,skewY:171.0712,x:-90.25,y:-246.15},0).wait(1).to({skewX:-7.9223,skewY:171.2439,x:-89.8,y:-246.3},0).wait(1).to({skewX:-7.7568,skewY:171.4095,x:-89.4,y:-246.45},0).wait(1).to({skewX:-7.5984,skewY:171.5681,x:-88.95,y:-246.65},0).wait(1).to({regX:0.1,regY:-0.3,skewX:-7.447,skewY:171.7196,x:-98.7,y:-323.2},0).wait(1).to({regX:0,regY:78.5,skewX:-7.195,skewY:171.9715,x:-87.7,y:-246.8},0).wait(1).to({skewX:-6.9535,skewY:172.2129,x:-86.85,y:-246.95},0).wait(1).to({skewX:-6.7223,skewY:172.4439,x:-86.05,y:-247.05},0).wait(1).to({skewX:-6.5016,skewY:172.6646,x:-85.3,y:-247.1},0).wait(1).to({skewX:-6.2912,skewY:172.8749,x:-84.6,y:-247.2},0).wait(1).to({skewX:-6.0912,skewY:173.0748,x:-83.9,y:-247.3},0).wait(1).to({skewX:-5.9016,skewY:173.2643,x:-83.2,y:-247.4},0).wait(1).to({skewX:-5.7224,skewY:173.4434,x:-82.6,y:-247.45},0).wait(1).to({skewX:-5.5536,skewY:173.6122,x:-82,y:-247.55},0).wait(1).to({skewX:-5.3952,skewY:173.7705,x:-81.5},0).wait(1).to({regX:0.4,regY:-0.4,skewX:-5.2471,skewY:173.9185,x:-88.25,y:-324.4},0).to({regX:0.1,regY:-0.3,skewX:-7.447,skewY:171.7196,x:-98.7,y:-323.2},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:78.5,skewX:-7.7372,skewY:171.4291,x:-89.3,y:-246.45},0).wait(1).to({skewX:-8.0165,skewY:171.1495,x:-90.05,y:-246.15},0).wait(1).to({scaleX:1.0007,scaleY:0.9782,skewX:-8.2849,skewY:170.8809,x:-90.75,y:-245.9},0).wait(1).to({skewX:-8.5423,skewY:170.6233,x:-91.4,y:-245.65},0).wait(1).to({skewX:-8.7887,skewY:170.3766,x:-92,y:-245.4},0).wait(1).to({skewX:-9.0242,skewY:170.1409,x:-92.65,y:-245.2},0).wait(1).to({skewX:-9.2488,skewY:169.9161,x:-93.2,y:-245},0).wait(1).to({skewX:-9.4623,skewY:169.7024,x:-93.8,y:-244.8},0).wait(1).to({skewX:-9.665,skewY:169.4995,x:-94.3,y:-244.6},0).wait(1).to({skewX:-9.8567,skewY:169.3077,x:-94.8,y:-244.45},0).wait(1).to({skewX:-10.0374,skewY:169.1268,x:-95.25,y:-244.25},0).wait(1).to({regX:0.1,regY:-0.2,skewX:-10.2072,skewY:168.9568,x:-109.5,y:-319.95},0).to({regY:-0.1,scaleX:1,scaleY:0.9006,skewX:-3.7175,skewY:176.2825,x:-75.15,y:-291.65},10,cjs.Ease.get(0.5)).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:180,x:-59.2,y:-318.7},21,cjs.Ease.get(0.5)).wait(7));

	// R_Plum
	this.instance_6 = new lib.Gh1("synched",0);
	this.instance_6.setTransform(-131.45,-384.15,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,rotation:2.9249,x:-142.65,y:-365.05},16,cjs.Ease.get(0.5)).to({scaleX:0.9999,scaleY:0.9999,rotation:9.7308,x:-226.35,y:-390.2},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,rotation:9.7254,x:-237,y:-344.1},0).wait(1).to({rotation:9.7202,x:-239.8,y:-344.05},0).wait(1).to({rotation:9.7151,x:-242.55,y:-343.95},0).wait(1).to({rotation:9.7102,x:-245.25,y:-343.85},0).wait(1).to({rotation:9.7055,x:-247.8,y:-343.75},0).wait(1).to({rotation:9.7008,x:-250.3,y:-343.65},0).wait(1).to({rotation:9.6964,x:-252.7,y:-343.6},0).wait(1).to({rotation:9.6921,x:-255.05,y:-343.5},0).wait(1).to({rotation:9.688,x:-257.25,y:-343.45},0).wait(1).to({rotation:9.684,x:-259.4,y:-343.35},0).wait(1).to({rotation:9.6802,x:-261.45,y:-343.3},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:9.6765,x:-263.45,y:-343.2},0).wait(1).to({rotation:9.673,x:-265.35,y:-343.15},0).wait(1).to({regX:-0.2,regY:-0.1,rotation:9.6696,x:-259.55,y:-389.05},0).wait(1).to({regX:0,regY:46.5,rotation:8.6677,x:-261.5,y:-342.35},0).wait(1).to({rotation:7.7071,x:-256.1,y:-341.65},0).wait(1).to({rotation:6.7878,x:-250.9,y:-341},0).wait(1).to({rotation:5.9098,x:-246,y:-340.4},0).wait(1).to({rotation:5.0732,x:-241.25,y:-339.85},0).wait(1).to({rotation:4.2778,x:-236.75,y:-339.3},0).wait(1).to({rotation:3.5238,x:-232.55,y:-338.85},0).wait(1).to({rotation:2.8111,x:-228.55,y:-338.35},0).wait(1).to({rotation:2.1397,x:-224.75,y:-337.95},0).wait(1).to({rotation:1.5096,x:-221.15,y:-337.6},0).wait(1).to({regX:-0.5,regY:-0.2,rotation:0.9209,x:-217.35,y:-383.75},0).to({regX:-0.2,regY:-0.1,rotation:9.6696,x:-261.55,y:-388.3},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,rotation:9.6761,x:-265.45,y:-342.45},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:9.6822,x:-261.85,y:-342.6},0).wait(1).to({rotation:9.6882,x:-258.45,y:-342.8},0).wait(1).to({rotation:9.6939,x:-255.25,y:-342.95},0).wait(1).to({rotation:9.6994,x:-252.1,y:-343.1},0).wait(1).to({rotation:9.7046,x:-249.1,y:-343.25},0).wait(1).to({rotation:9.7096,x:-246.25,y:-343.4},0).wait(1).to({rotation:9.7143,x:-243.5,y:-343.5},0).wait(1).to({rotation:9.7188,x:-240.95,y:-343.65},0).wait(1).to({rotation:9.7231,x:-238.5,y:-343.75},0).wait(1).to({rotation:9.7271,x:-236.2,y:-343.85},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:9.7308,x:-226.35,y:-390},0).to({scaleX:1,scaleY:1,rotation:2.9249,x:-142.65,y:-365.05},10,cjs.Ease.get(0.5)).to({regX:0,regY:0,rotation:3.4529,x:-131.45,y:-384.15},21,cjs.Ease.get(0.5)).wait(7));

	// R_4_Arm
	this.instance_7 = new lib.GH2("synched",0);
	this.instance_7.setTransform(-111.4,-483.85,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).to({rotation:2.9249,x:-123.45,y:-464.85},16,cjs.Ease.get(0.5)).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:9.7308,x:-195.55,y:-487.15},10,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:51.5,rotation:9.7865,x:-207.5,y:-436.25},0).wait(1).to({rotation:9.8405,x:-210.25,y:-436.1},0).wait(1).to({rotation:9.8929,x:-212.95,y:-435.95},0).wait(1).to({rotation:9.9437,x:-215.55,y:-435.85},0).wait(1).to({rotation:9.9928,x:-218.1,y:-435.75},0).wait(1).to({rotation:10.0404,x:-220.55,y:-435.6},0).wait(1).to({rotation:10.0864,x:-222.85,y:-435.5},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:10.1307,x:-225.15,y:-435.4},0).wait(1).to({rotation:10.1734,x:-227.35,y:-435.3},0).wait(1).to({rotation:10.2145,x:-229.45,y:-435.2},0).wait(1).to({rotation:10.254,x:-231.45,y:-435.1},0).wait(1).to({rotation:10.2919,x:-233.4,y:-435},0).wait(1).to({rotation:10.3282,x:-235.3,y:-434.9},0).wait(1).to({regX:-0.1,regY:0,rotation:10.3629,x:-227.35,y:-485.45},0).wait(1).to({regX:-0.5,regY:51.5,rotation:9.3922,x:-232.95,y:-434.5},0).wait(1).to({rotation:8.4615,x:-229.15,y:-434.05},0).wait(1).to({rotation:7.5708,x:-225.45,y:-433.75},0).wait(1).to({rotation:6.7202,x:-221.9,y:-433.45},0).wait(1).to({rotation:5.9096,x:-218.55,y:-433.2},0).wait(1).to({rotation:5.139,x:-215.35,y:-432.9},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:4.4085,x:-212.35,y:-432.7},0).wait(1).to({rotation:3.718,x:-209.5,y:-432.5},0).wait(1).to({rotation:3.0675,x:-206.8,y:-432.3},0).wait(1).to({rotation:2.4571,x:-204.25,y:-432.1},0).wait(1).to({regX:-0.6,regY:-0.4,rotation:1.8867,x:-199.9,y:-483.45},0).to({regX:-0.1,regY:0,scaleX:0.9998,scaleY:0.9998,rotation:10.3629,x:-229.35,y:-484.7},11,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:51.5,rotation:10.2964,x:-235.35,y:-434.35},0).wait(1).to({rotation:10.2325,x:-231.9,y:-434.6},0).wait(1).to({rotation:10.171,x:-228.55,y:-434.75},0).wait(1).to({rotation:10.1121,x:-225.35,y:-434.95},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:10.0556,x:-222.25,y:-435.15},0).wait(1).to({rotation:10.0017,x:-219.35,y:-435.35},0).wait(1).to({rotation:9.9503,x:-216.5,y:-435.5},0).wait(1).to({rotation:9.9014,x:-213.85,y:-435.6},0).wait(1).to({rotation:9.855,x:-211.3,y:-435.8},0).wait(1).to({rotation:9.8111,x:-208.9,y:-435.95},0).wait(1).to({rotation:9.7697,x:-206.7,y:-436.1},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:9.7308,x:-195.55,y:-486.95},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:2.9249,x:-123.45,y:-464.85},10,cjs.Ease.get(0.5)).to({rotation:3.4529,x:-111.4,y:-483.85},21,cjs.Ease.get(0.5)).wait(7));

	// R_Arm
	this.instance_8 = new lib.GH3("synched",0);
	this.instance_8.setTransform(-81.3,-623.2,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0},0).to({regX:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:8.8994,x:-80.2,y:-598.95},16,cjs.Ease.get(0.5)).to({regY:-0.1,rotation:15.7033,x:-136.6,y:-615.2},10,cjs.Ease.get(0.5)).wait(1).to({regX:0.5,regY:86.5,rotation:15.7591,x:-162.2,y:-531.45},0).wait(1).to({rotation:15.8132,x:-164.85,y:-531.3},0).wait(1).to({rotation:15.8658,x:-167.5,y:-531.1},0).wait(1).to({rotation:15.9167,x:-170,y:-530.95},0).wait(1).to({rotation:15.966,x:-172.45,y:-530.8},0).wait(1).to({rotation:16.0137,x:-174.8,y:-530.65},0).wait(1).to({rotation:16.0598,x:-177.1,y:-530.5},0).wait(1).to({rotation:16.1043,x:-179.3,y:-530.35},0).wait(1).to({rotation:16.1471,x:-181.4,y:-530.25},0).wait(1).to({rotation:16.1883,x:-183.45,y:-530.1},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:16.2279,x:-185.4,y:-529.95},0).wait(1).to({rotation:16.2659,x:-187.25,y:-529.9},0).wait(1).to({rotation:16.3023,x:-189.1,y:-529.75},0).wait(1).to({regX:-0.2,regY:-0.1,rotation:16.3371,x:-167.1,y:-612.95},0).wait(1).to({regX:0.5,regY:86.5,rotation:15.3665,x:-188.4,y:-529.75},0).wait(1).to({rotation:14.4359,x:-186.15,y:-530},0).wait(1).to({rotation:13.5454,x:-184,y:-530.1},0).wait(1).to({rotation:12.6949,x:-181.95,y:-530.35},0).wait(1).to({rotation:11.8844,x:-179.95,y:-530.5},0).wait(1).to({rotation:11.1139,x:-178.1,y:-530.7},0).wait(1).to({rotation:10.3835,x:-176.35,y:-530.9},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:9.6931,x:-174.6,y:-531.1},0).wait(1).to({rotation:9.0427,x:-173.05,y:-531.3},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:8.4323,x:-171.55,y:-531.55},0).wait(1).to({regX:-0.6,regY:-0.4,scaleX:0.9997,scaleY:0.9997,rotation:7.862,x:-159.1,y:-617.6},0).to({regX:-0.2,regY:-0.1,scaleX:0.9998,scaleY:0.9998,rotation:16.3371,x:-169.1,y:-612.2},11,cjs.Ease.get(0.5)).wait(1).to({regX:0.5,regY:86.5,rotation:16.2704,x:-189.25,y:-529.15},0).wait(1).to({rotation:16.2063,x:-185.9,y:-529.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:16.1447,x:-182.6,y:-529.65},0).wait(1).to({rotation:16.0856,x:-179.5,y:-529.9},0).wait(1).to({rotation:16.029,x:-176.55,y:-530.15},0).wait(1).to({rotation:15.9749,x:-173.7,y:-530.3},0).wait(1).to({rotation:15.9233,x:-171,y:-530.55},0).wait(1).to({rotation:15.8743,x:-168.4,y:-530.7},0).wait(1).to({rotation:15.8278,x:-165.95,y:-530.9},0).wait(1).to({rotation:15.7838,x:-163.65,y:-531.05},0).wait(1).to({rotation:15.7423,x:-161.4,y:-531.25},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:15.7033,x:-136.6,y:-615},0).to({regY:0,rotation:8.8994,x:-80.2,y:-598.95},10,cjs.Ease.get(0.5)).to({regX:0,scaleX:1,scaleY:1,rotation:3.4529,x:-81.3,y:-623.2},21,cjs.Ease.get(0.5)).wait(7));

	// L_F
	this.instance_9 = new lib.GL3("synched",0);
	this.instance_9.setTransform(58.7,-111.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).to({scaleY:0.9649,rotation:5.0487,x:67.4,y:-109.2},16,cjs.Ease.get(0.5)).to({regX:0.2,regY:-0.2,scaleX:0.9999,rotation:-16.0962,x:89.15,y:-144.5},10,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:45,rotation:-16.2661,x:100.85,y:-104.25},0).wait(1).to({rotation:-16.431,x:101.25,y:-106.15},0).wait(1).to({rotation:-16.5911,x:101.6,y:-107.95},0).wait(1).to({rotation:-16.7462,x:101.9,y:-109.7},0).wait(1).to({rotation:-16.8963,x:102.25,y:-111.4},0).wait(1).to({rotation:-17.0416,x:102.55,y:-113.05},0).wait(1).to({scaleY:0.9648,rotation:-17.1819,x:102.9,y:-114.6},0).wait(1).to({rotation:-17.3173,x:103.15,y:-116.15},0).wait(1).to({rotation:-17.4478,x:103.45,y:-117.65},0).wait(1).to({rotation:-17.5733,x:103.7,y:-119.05},0).wait(1).to({rotation:-17.694,x:104,y:-120.45},0).wait(1).to({rotation:-17.8097,x:104.25,y:-121.75},0).wait(1).to({rotation:-17.9205,x:104.45,y:-123},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.9998,rotation:-18.0263,x:91.9,y:-165.9},0).wait(1).to({regX:-0.5,regY:45,rotation:-17.983,x:105.65,y:-124.45},0).wait(1).to({rotation:-17.9416,x:106.55,y:-124.7},0).wait(1).to({rotation:-17.9019,x:107.5,y:-124.95},0).wait(1).to({rotation:-17.864,x:108.35,y:-125.2},0).wait(1).to({rotation:-17.8278,x:109.2,y:-125.4},0).wait(1).to({rotation:-17.7935,x:109.95,y:-125.6},0).wait(1).to({rotation:-17.7609,x:110.7,y:-125.8},0).wait(1).to({rotation:-17.7302,x:111.4,y:-126},0).wait(1).to({rotation:-17.7012,x:112.1,y:-126.2},0).wait(1).to({rotation:-17.674,x:112.7,y:-126.35},0).wait(1).to({regX:0.5,regY:-0.4,scaleY:0.9647,rotation:-17.6486,x:100.9,y:-168.35},0).to({regX:0.2,regY:-0.2,scaleY:0.9648,rotation:-18.0263,x:91.9,y:-165.9},11,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:45,scaleX:0.9999,rotation:-17.8233,x:104.25,y:-121.85},0).wait(1).to({rotation:-17.628,x:103.8,y:-119.65},0).wait(1).to({rotation:-17.4404,x:103.4,y:-117.55},0).wait(1).to({rotation:-17.2604,x:103,y:-115.55},0).wait(1).to({scaleY:0.9649,rotation:-17.0881,x:102.6,y:-113.55},0).wait(1).to({rotation:-16.9234,x:102.3,y:-111.7},0).wait(1).to({rotation:-16.7664,x:101.9,y:-109.95},0).wait(1).to({rotation:-16.6171,x:101.6,y:-108.25},0).wait(1).to({rotation:-16.4754,x:101.3,y:-106.6},0).wait(1).to({rotation:-16.3413,x:101,y:-105.15},0).wait(1).to({rotation:-16.215,x:100.7,y:-103.7},0).wait(1).to({regX:0.2,regY:-0.2,rotation:-16.0962,x:89.15,y:-144.5},0).to({regX:0,regY:0,scaleX:1,rotation:5.0487,x:67.4,y:-109.2},10,cjs.Ease.get(0.5)).to({scaleY:1,rotation:0,x:58.7,y:-111.55},21,cjs.Ease.get(0.5)).wait(7));

	// L__lg
	this.instance_10 = new lib.GL2("synched",0);
	this.instance_10.setTransform(37.8,-182.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0},0).to({regY:-0.1,scaleY:0.9649,rotation:5.0487,x:52.65,y:-179.75},16,cjs.Ease.get(0.5)).to({regX:0.1,scaleX:0.9999,rotation:-16.0962,x:49.85,y:-204.75},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,rotation:-16.2661,x:62.4,y:-163.3},0).wait(1).to({rotation:-16.431,x:62.6,y:-165},0).wait(1).to({rotation:-16.5911,x:62.8,y:-166.75},0).wait(1).to({rotation:-16.7462,x:63,y:-168.4},0).wait(1).to({rotation:-16.8963,x:63.15,y:-169.95},0).wait(1).to({rotation:-17.0416,x:63.3,y:-171.5},0).wait(1).to({scaleY:0.9648,rotation:-17.1819,x:63.45,y:-173.05},0).wait(1).to({rotation:-17.3173,x:63.6,y:-174.45},0).wait(1).to({rotation:-17.4478,x:63.75,y:-175.85},0).wait(1).to({rotation:-17.5733,x:63.95,y:-177.2},0).wait(1).to({rotation:-17.694,x:64.05,y:-178.45},0).wait(1).to({rotation:-17.8097,x:64.15,y:-179.7},0).wait(1).to({rotation:-17.9205,x:64.3,y:-180.85},0).wait(1).to({regX:0.1,regY:-0.2,scaleX:0.9998,rotation:-18.0263,x:50.65,y:-224.9},0).wait(1).to({regX:0,regY:46.5,rotation:-17.983,x:65.5,y:-182.25},0).wait(1).to({rotation:-17.9416,x:66.45,y:-182.5},0).wait(1).to({rotation:-17.9019,x:67.45,y:-182.75},0).wait(1).to({rotation:-17.864,x:68.3,y:-183},0).wait(1).to({rotation:-17.8278,x:69.2,y:-183.25},0).wait(1).to({rotation:-17.7935,x:70,y:-183.5},0).wait(1).to({rotation:-17.7609,x:70.8,y:-183.7},0).wait(1).to({rotation:-17.7302,x:71.5,y:-183.85},0).wait(1).to({rotation:-17.7012,x:72.2,y:-184.05},0).wait(1).to({rotation:-17.674,x:72.85,y:-184.25},0).wait(1).to({regX:0.5,regY:-0.4,scaleY:0.9647,rotation:-17.6486,x:60,y:-227.45},0).to({regX:0.1,regY:-0.2,scaleY:0.9648,rotation:-18.0263,x:50.65,y:-224.9},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,scaleX:0.9999,rotation:-17.8233,x:64.25,y:-179.8},0).wait(1).to({rotation:-17.628,x:64,y:-177.75},0).wait(1).to({rotation:-17.4404,x:63.8,y:-175.7},0).wait(1).to({rotation:-17.2604,x:63.55,y:-173.8},0).wait(1).to({scaleY:0.9649,rotation:-17.0881,x:63.4,y:-171.95},0).wait(1).to({rotation:-16.9234,x:63.2,y:-170.25},0).wait(1).to({rotation:-16.7664,x:63,y:-168.55},0).wait(1).to({rotation:-16.6171,x:62.85,y:-166.95},0).wait(1).to({rotation:-16.4754,x:62.65,y:-165.5},0).wait(1).to({rotation:-16.3413,x:62.5,y:-164.05},0).wait(1).to({rotation:-16.215,x:62.4,y:-162.65},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-16.0962,x:49.85,y:-204.75},0).to({regX:0,scaleX:1,rotation:5.0487,x:52.65,y:-179.75},10,cjs.Ease.get(0.5)).to({regY:0,scaleY:1,rotation:0,x:37.8,y:-182.95},21,cjs.Ease.get(0.5)).wait(7));

	// __L__Lage
	this.instance_11 = new lib.GL1("synched",0);
	this.instance_11.setTransform(32.95,-316.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).to({regX:0.1,scaleY:0.9649,rotation:5.0487,x:59.25,y:-308.75},16,cjs.Ease.get(0.5)).to({regX:0.2,scaleX:0.9999,rotation:-20.5855,x:0.65,y:-322.2},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:78.5,rotation:-20.7552,x:27,y:-252.9},0).wait(1).to({rotation:-20.9199,y:-254.55},0).wait(1).to({rotation:-21.0797,x:26.95,y:-256.15},0).wait(1).to({rotation:-21.2345,x:26.85,y:-257.7},0).wait(1).to({rotation:-21.3845,x:26.8,y:-259.15},0).wait(1).to({rotation:-21.5295,x:26.75,y:-260.65},0).wait(1).to({rotation:-21.6697,x:26.65,y:-262},0).wait(1).to({rotation:-21.8049,y:-263.4},0).wait(1).to({scaleY:0.9648,rotation:-21.9352,x:26.6,y:-264.7},0).wait(1).to({rotation:-22.0605,x:26.55,y:-265.95},0).wait(1).to({rotation:-22.181,x:26.5,y:-267.1},0).wait(1).to({rotation:-22.2965,x:26.45,y:-268.25},0).wait(1).to({rotation:-22.4072,x:26.4,y:-269.4},0).wait(1).to({regX:0.2,regY:-0.1,scaleX:0.9998,rotation:-22.5129,x:-2.5,y:-340.6},0).wait(1).to({regX:0,regY:78.5,scaleX:0.9999,rotation:-22.4697,x:27.5,y:-270.7},0).wait(1).to({rotation:-22.4283,x:28.55,y:-271.05},0).wait(1).to({scaleX:0.9998,rotation:-22.3887,x:29.5,y:-271.3},0).wait(1).to({rotation:-22.3509,x:30.45,y:-271.6},0).wait(1).to({rotation:-22.3148,x:31.4,y:-271.85},0).wait(1).to({rotation:-22.2806,x:32.25,y:-272.1},0).wait(1).to({rotation:-22.2481,x:33.1,y:-272.35},0).wait(1).to({rotation:-22.2174,x:33.9,y:-272.6},0).wait(1).to({rotation:-22.1885,x:34.65,y:-272.8},0).wait(1).to({scaleY:0.9647,rotation:-22.1613,x:35.3,y:-272.95},0).wait(1).to({regX:0.4,regY:-0.2,rotation:-22.1359,x:7.7,y:-343.45},0).to({regX:0.2,regY:-0.1,scaleY:0.9648,rotation:-22.5129,x:-2.5,y:-340.6},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:78.5,scaleX:0.9999,rotation:-22.3102,x:26.45,y:-268.4},0).wait(1).to({scaleX:0.9998,rotation:-22.1152,x:26.5,y:-266.45},0).wait(1).to({scaleX:0.9999,rotation:-21.9278,x:26.6,y:-264.55},0).wait(1).to({scaleY:0.9649,rotation:-21.7481,x:26.65,y:-262.75},0).wait(1).to({rotation:-21.576,x:26.75,y:-261.05},0).wait(1).to({rotation:-21.4115,x:26.8,y:-259.4},0).wait(1).to({rotation:-21.2547,x:26.85,y:-257.85},0).wait(1).to({rotation:-21.1056,x:26.9,y:-256.35},0).wait(1).to({rotation:-20.9641,x:27,y:-254.9},0).wait(1).to({rotation:-20.8303,y:-253.6},0).wait(1).to({rotation:-20.7041,x:27.05,y:-252.35},0).wait(1).to({regX:0.2,regY:0,rotation:-20.5855,x:0.65,y:-322.2},0).to({regX:0.1,scaleX:1,rotation:5.0487,x:59.25,y:-308.75},10,cjs.Ease.get(0.5)).to({regX:0,scaleY:1,rotation:0,x:32.95,y:-316.75},21,cjs.Ease.get(0.5)).wait(7));

	// L_Plum
	this.instance_12 = new lib.Gh1("synched",0);
	this.instance_12.setTransform(116.3,-384.55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).to({skewX:-2.0165,skewY:177.9835,x:128.4,y:-365.2},16,cjs.Ease.get(0.5)).to({regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:-23.0426,skewY:156.9574,x:162.5,y:-446},10,cjs.Ease.get(0.5)).wait(1).to({regY:46.5,skewX:-24.5423,skewY:155.4577,x:182.05,y:-408.2},0).wait(1).to({skewX:-25.9985,skewY:154.0015,x:183.3,y:-413.3},0).wait(1).to({skewX:-27.4112,skewY:152.5888,x:184.45,y:-418.3},0).wait(1).to({skewX:-28.7805,skewY:151.2195,x:185.6,y:-423.1},0).wait(1).to({skewX:-30.1063,skewY:149.8937,x:186.65,y:-427.85},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,skewX:-31.3886,skewY:148.6114,x:187.7,y:-432.4},0).wait(1).to({skewX:-32.6275,skewY:147.3725,x:188.7,y:-436.85},0).wait(1).to({skewX:-33.8229,skewY:146.1771,x:189.7,y:-441.2},0).wait(1).to({skewX:-34.9748,skewY:145.0252,x:190.55,y:-445.3},0).wait(1).to({skewX:-36.0833,skewY:143.9167,x:191.45,y:-449.35},0).wait(1).to({skewX:-37.1483,skewY:142.8517,x:192.2,y:-453.2},0).wait(1).to({skewX:-38.1698,skewY:141.8302,x:193,y:-456.95},0).wait(1).to({skewX:-39.1479,skewY:140.8521,x:193.75,y:-460.5},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-40.0825,skewY:139.9175,x:164.4,y:-499.7},0).wait(1).to({regX:0,regY:46.5,skewX:-38.2345,skewY:141.7655,x:190.8,y:-457.9},0).wait(1).to({skewX:-36.4627,skewY:143.5373,x:187.3,y:-452},0).wait(1).to({skewX:-34.7672,skewY:145.2328,x:183.85,y:-446.4},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,skewX:-33.1478,skewY:146.8522,x:180.6,y:-441.1},0).wait(1).to({skewX:-31.6047,skewY:148.3953,x:177.45,y:-436.05},0).wait(1).to({skewX:-30.1378,skewY:149.8622,x:174.45,y:-431.3},0).wait(1).to({skewX:-28.747,skewY:151.253,x:171.6,y:-426.85},0).wait(1).to({skewX:-27.4325,skewY:152.5675,x:168.9,y:-422.6},0).wait(1).to({skewX:-26.1942,skewY:153.8058,x:166.3,y:-418.65},0).wait(1).to({skewX:-25.0321,skewY:154.9679,x:163.9,y:-415},0).wait(1).to({regX:0.6,regY:-0.2,skewX:-23.9462,skewY:156.0538,x:142.65,y:-454.1},0).to({regX:0.1,regY:-0.1,scaleX:0.9998,scaleY:0.9998,skewX:-37.7699,skewY:142.2301,x:153.65,y:-480.6},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:46.5,skewX:-35.8915,skewY:144.1085,x:181.95,y:-439.1},0).wait(1).to({skewX:-34.0841,skewY:145.9159,x:181.65,y:-434.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:-32.3474,skewY:147.6526,x:181.4,y:-430.35},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,skewX:-30.6817,skewY:149.3183,x:181,y:-426.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:-29.0869,skewY:150.9131,x:180.7,y:-422.45},0).wait(1).to({skewX:-27.5629,skewY:152.4371,x:180.4,y:-418.85},0).wait(1).to({skewX:-26.1098,skewY:153.8902,x:180.05,y:-415.35},0).wait(1).to({skewX:-24.7276,skewY:155.2724,x:179.75,y:-412.1},0).wait(1).to({skewX:-23.4163,skewY:156.5837,x:179.45,y:-409.05},0).wait(1).to({skewX:-22.1759,skewY:157.8241,x:179.1,y:-406.15},0).wait(1).to({skewX:-21.0063,skewY:158.9937,x:178.8,y:-403.5},0).wait(1).to({regX:0.1,regY:-0.2,skewX:-19.9077,skewY:160.0923,x:162.6,y:-444.8},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-2.0165,skewY:177.9835,x:130.15,y:-365.2},10,cjs.Ease.get(0.5)).to({skewX:0,skewY:180,x:116.3,y:-384.55},21,cjs.Ease.get(0.5)).wait(7));

	// L_4Arm
	this.instance_13 = new lib.GH2("synched",0);
	this.instance_13.setTransform(102.3,-485.25,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0},0).to({regY:-0.1,skewX:1.6885,skewY:181.6885,x:118.05,y:-466.45},16,cjs.Ease.get(0.5)).to({regX:0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9999,skewX:-23.6156,skewY:156.3844,x:109.8,y:-531.8},10,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:51.5,skewX:-24.9551,skewY:155.0449,x:130.6,y:-488.35},0).wait(1).to({skewX:-26.2559,skewY:153.7441,x:130.15,y:-492},0).wait(1).to({skewX:-27.5178,skewY:152.4822,x:129.65,y:-495.6},0).wait(1).to({skewX:-28.7409,skewY:151.2591,x:129.2,y:-499.05},0).wait(1).to({skewX:-29.9251,skewY:150.0749,x:128.75,y:-502.4},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,skewX:-31.0705,skewY:148.9295,x:128.25,y:-505.7},0).wait(1).to({skewX:-32.1771,skewY:147.8229,x:127.8,y:-508.85},0).wait(1).to({skewX:-33.2449,skewY:146.7551,x:127.4,y:-512},0).wait(1).to({skewX:-34.2738,skewY:145.7262,x:126.95,y:-515},0).wait(1).to({skewX:-35.2639,skewY:144.7361,x:126.55,y:-517.9},0).wait(1).to({skewX:-36.2152,skewY:143.7848,x:126.05,y:-520.7},0).wait(1).to({skewX:-37.1277,skewY:142.8723,x:125.7,y:-523.4},0).wait(1).to({skewX:-38.0013,skewY:141.9987,x:125.3,y:-526},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-38.8361,skewY:141.1639,x:92.05,y:-568.35},0).wait(1).to({regX:-0.5,regY:51.5,skewX:-37.1872,skewY:142.8128,x:123.25,y:-524.25},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,skewX:-35.6062,skewY:144.3938,x:121.7,y:-520.2},0).wait(1).to({skewX:-34.0932,skewY:145.9068,x:120.15,y:-516.4},0).wait(1).to({skewX:-32.6482,skewY:147.3518,x:118.7,y:-512.7},0).wait(1).to({skewX:-31.2713,skewY:148.7287,x:117.35,y:-509.3},0).wait(1).to({skewX:-29.9623,skewY:150.0377,x:115.95,y:-506.05},0).wait(1).to({skewX:-28.7213,skewY:151.2787,x:114.65,y:-503},0).wait(1).to({skewX:-27.5483,skewY:152.4517,x:113.4,y:-500.15},0).wait(1).to({skewX:-26.4433,skewY:153.5567,x:112.25,y:-497.45},0).wait(1).to({skewX:-25.4064,skewY:154.5936,x:111.15,y:-494.95},0).wait(1).to({regX:0.6,regY:-0.4,skewX:-24.4374,skewY:155.5626,x:88.2,y:-539.4},0).to({regX:0,regY:-0.2,scaleX:0.9998,scaleY:0.9998,skewX:-33.2632,skewY:146.7368,x:87.95,y:-557.5},11,cjs.Ease.get(0.5)).wait(1).to({regX:-0.5,regY:51.5,skewX:-32.1991,skewY:147.8009,x:118.2,y:-511.3},0).wait(1).to({skewX:-31.1752,skewY:148.8248,x:119.65,y:-508.2},0).wait(1).to({skewX:-30.1914,skewY:149.8086,x:121.05,y:-505.25},0).wait(1).to({skewX:-29.2478,skewY:150.7522,x:122.35,y:-502.4},0).wait(1).to({skewX:-28.3443,skewY:151.6557,x:123.6,y:-499.75},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:-27.481,skewY:152.519,x:124.75,y:-497.15},0).wait(1).to({skewX:-26.6578,skewY:153.3422,x:125.9,y:-494.7},0).wait(1).to({skewX:-25.8748,skewY:154.1252,x:126.95,y:-492.35},0).wait(1).to({skewX:-25.1319,skewY:154.8681,x:127.95,y:-490.2},0).wait(1).to({skewX:-24.4292,skewY:155.5708,x:128.9,y:-488.1},0).wait(1).to({skewX:-23.7667,skewY:156.2333,x:129.8,y:-486.2},0).wait(1).to({regX:0.1,regY:-0.2,skewX:-23.1443,skewY:156.8557,x:109.85,y:-531.7},0).to({regY:-0.1,scaleX:1,scaleY:1,skewX:2.2064,skewY:182.2064,x:119.7,y:-466.45},10,cjs.Ease.get(0.5)).to({regX:0,regY:0,skewX:0,skewY:180,x:102.3,y:-485.25},21,cjs.Ease.get(0.5)).wait(7));

	// L_Arm
	this.instance_14 = new lib.GH3("synched",0);
	this.instance_14.setTransform(80.65,-626.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0},0).to({skewX:-7.2656,skewY:172.7344,x:78.6,y:-600.5},16,cjs.Ease.get(0.5)).to({regX:-0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,skewX:-33.3304,skewY:146.6696,x:15.1,y:-636.25},10,cjs.Ease.get(0.5)).wait(1).to({regX:0.5,regY:86.5,skewX:-34.6351,skewY:145.3649,x:60.1,y:-565.35},0).wait(1).to({skewX:-35.9018,skewY:144.0982,x:58.05,y:-567.2},0).wait(1).to({skewX:-37.1308,skewY:142.8692,x:56.1,y:-568.95},0).wait(1).to({skewX:-38.322,skewY:141.678,x:54.2,y:-570.75},0).wait(1).to({skewX:-39.4753,skewY:140.5247,x:52.35,y:-572.5},0).wait(1).to({skewX:-40.5909,skewY:139.4091,x:50.45,y:-574.2},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,skewX:-41.6686,skewY:138.3314,x:48.7,y:-575.85},0).wait(1).to({skewX:-42.7085,skewY:137.2915,x:46.9,y:-577.5},0).wait(1).to({skewX:-43.7106,skewY:136.2894,x:45.15,y:-579.1},0).wait(1).to({skewX:-44.6749,skewY:135.3251,x:43.5,y:-580.65},0).wait(1).to({skewX:-45.6013,skewY:134.3987,x:41.9,y:-582.15},0).wait(1).to({skewX:-46.49,skewY:133.51,x:40.25,y:-583.6},0).wait(1).to({skewX:-47.3408,skewY:132.6592,x:38.75,y:-585.05},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-48.1538,skewY:131.8462,x:-26.8,y:-644.6},0).wait(1).to({regX:0.5,regY:86.5,skewX:-46.5828,skewY:133.4172,x:37.85,y:-584.45},0).wait(1).to({skewX:-45.0766,skewY:134.9234,x:38.25,y:-582.5},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,skewX:-43.6351,skewY:136.3649,x:38.55,y:-580.65},0).wait(1).to({skewX:-42.2584,skewY:137.7416,x:38.85,y:-579},0).wait(1).to({skewX:-40.9465,skewY:139.0535,x:39,y:-577.4},0).wait(1).to({skewX:-39.6994,skewY:140.3006,x:39.25,y:-575.95},0).wait(1).to({skewX:-38.5171,skewY:141.4829,x:39.4,y:-574.6},0).wait(1).to({skewX:-37.3996,skewY:142.6004,x:39.5,y:-573.3},0).wait(1).to({skewX:-36.3468,skewY:143.6532,x:39.6,y:-572.1},0).wait(1).to({skewX:-35.3589,skewY:144.6411,x:39.7,y:-571.05},0).wait(1).to({regX:0.2,regY:-0.6,skewX:-34.4357,skewY:145.5643,x:-8.9,y:-641.85},0).to({regX:0.1,regY:-0.2,skewX:-42.2151,skewY:137.7849,x:-22.9,y:-646},11,cjs.Ease.get(0.5)).wait(1).to({regX:0.5,regY:86.5,scaleX:0.9998,scaleY:0.9998,skewX:-41.2605,skewY:138.7395,x:37.95,y:-579.55},0).wait(1).to({skewX:-40.3418,skewY:139.6582,x:40.75,y:-577.75},0).wait(1).to({skewX:-39.4592,skewY:140.5408,x:43.4,y:-575.95},0).wait(1).to({skewX:-38.6127,skewY:141.3873,x:45.95,y:-574.25},0).wait(1).to({skewX:-37.8021,skewY:142.1979,x:48.35,y:-572.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,skewX:-37.0276,skewY:142.9724,x:50.7,y:-571.15},0).wait(1).to({skewX:-36.2891,skewY:143.7109,x:52.85,y:-569.75},0).wait(1).to({skewX:-35.5866,skewY:144.4134,x:54.95,y:-568.35},0).wait(1).to({skewX:-34.9202,skewY:145.0798,x:56.85,y:-567.1},0).wait(1).to({skewX:-34.2897,skewY:145.7103,x:58.75,y:-565.9},0).wait(1).to({skewX:-33.6953,skewY:146.3047,x:60.5,y:-564.8},0).wait(1).to({regX:0.1,regY:-0.1,skewX:-33.1369,skewY:146.8631,x:15,y:-636.6},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:-7.7453,skewY:172.2547,x:78.6,y:-601.9},10,cjs.Ease.get(0.5)).to({skewX:0,skewY:180,x:80.65,y:-626.2},21,cjs.Ease.get(0.5)).wait(7));

	// bani_hair
	this.instance_15 = new lib.GHair("single",0);
	this.instance_15.setTransform(2.1,-748.65,1.1,1.1,0,0,0,0,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0},0).to({x:3.8,y:-721.15},16,cjs.Ease.get(0.5)).to({regX:-0.1,rotation:-6.1558,x:-66.5,y:-750.15},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:0,rotation:-6.5931,x:-64.1168,y:-692.3421},0).wait(1).to({rotation:-7.0177,x:-67.9689,y:-692.5805},0).wait(1).to({rotation:-7.4297,x:-71.7065,y:-692.8147},0).wait(1).to({scaleX:1.0999,scaleY:1.0999,rotation:-7.829,x:-75.3294,y:-693.0446},0).wait(1).to({rotation:-8.2156,x:-78.8377,y:-693.2699},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-8.5896,x:-82.2313,y:-693.4902},0).wait(1).to({scaleX:1.0999,scaleY:1.0999,rotation:-8.9508,x:-85.5103,y:-693.7055},0).wait(1).to({rotation:-9.2994,x:-88.6745,y:-693.9154},0).wait(1).to({rotation:-9.6353,x:-91.7241,y:-694.1196},0).wait(1).to({rotation:-9.9586,x:-94.6588,y:-694.3181},0).wait(1).to({rotation:-10.2691,x:-97.4788,y:-694.5104},0).wait(1).to({rotation:-10.567,x:-100.184,y:-694.6965},0).wait(1).to({rotation:-10.8522,x:-102.7744,y:-694.8762},0).wait(1).to({regX:-0.1,regY:-53.1,rotation:-11.1247,x:-116.6,y:-752.35},0).wait(1).to({regX:0,regY:0,rotation:-10.6916,x:-103.0224,y:-694.9202},0).wait(1).to({rotation:-10.2764,x:-100.8875,y:-694.7996},0).wait(1).to({rotation:-9.8789,x:-98.8448,y:-694.6871},0).wait(1).to({rotation:-9.4994,x:-96.8944,y:-694.5821},0).wait(1).to({rotation:-9.1377,x:-95.0362,y:-694.4845},0).wait(1).to({rotation:-8.7939,x:-93.2702,y:-694.3939},0).wait(1).to({rotation:-8.4679,x:-91.5961,y:-694.3098},0).wait(1).to({rotation:-8.1598,x:-90.014,y:-694.2321},0).wait(1).to({rotation:-7.8696,x:-88.5239,y:-694.1604},0).wait(1).to({rotation:-7.5972,x:-87.1257,y:-694.0945},0).wait(1).to({regX:-0.4,regY:-53.5,rotation:-7.3427,x:-93.4,y:-752.05},0).to({regX:-0.1,regY:-53.1,rotation:-11.1247,x:-117.15,y:-752.35},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,regY:0,rotation:-10.6022,x:-100.996,y:-694.7186},0).wait(1).to({rotation:-10.0994,x:-96.3742,y:-694.4051},0).wait(1).to({rotation:-9.6163,x:-91.9345,y:-694.108},0).wait(1).to({rotation:-9.1529,x:-87.6766,y:-693.8269},0).wait(1).to({rotation:-8.7093,x:-83.6005,y:-693.5613},0).wait(1).to({rotation:-8.2853,x:-79.7061,y:-693.3108},0).wait(1).to({rotation:-7.8811,x:-75.9932,y:-693.0748},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-7.4966,x:-72.4619,y:-692.853},0).wait(1).to({scaleX:1.0999,scaleY:1.0999,rotation:-7.1318,x:-69.1119,y:-692.645},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-6.7868,x:-65.9433,y:-692.4504},0).wait(1).to({rotation:-6.4614,x:-62.9561,y:-692.2689},0).wait(1).to({regX:-0.1,regY:-53.1,rotation:-6.1558,x:-66.5,y:-750.15},0).to({regX:0,rotation:0,x:4.7,y:-721.15},10,cjs.Ease.get(0.5)).to({x:2.1,y:-748.65},21,cjs.Ease.get(0.5)).wait(7));

	// Layer_20
	this.instance_16 = new lib.Gsk1("synched",0);
	this.instance_16.setTransform(-5.05,-242.8,0.99,0.99,0,0,0,-0.1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({startPosition:0},0).to({y:-224.4},16,cjs.Ease.get(0.5)).to({rotation:-2.4505,x:-35.4,y:-249.45},10,cjs.Ease.get(0.5)).wait(1).to({regX:0,rotation:-2.9685,x:-35.15,y:-250.4},0).wait(1).to({rotation:-3.4716,x:-35,y:-251.3},0).wait(1).to({rotation:-3.9596,x:-34.9,y:-252.15},0).wait(1).to({rotation:-4.4326,x:-34.75,y:-253.05},0).wait(1).to({rotation:-4.8906,x:-34.6,y:-253.85},0).wait(1).to({rotation:-5.3335,x:-34.5,y:-254.7},0).wait(1).to({rotation:-5.7615,x:-34.35,y:-255.45},0).wait(1).to({scaleX:0.9899,scaleY:0.9899,rotation:-6.1744,x:-34.25,y:-256.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6.5723,x:-34.15,y:-256.9},0).wait(1).to({scaleX:0.9899,scaleY:0.9899,rotation:-6.9552,x:-34,y:-257.65},0).wait(1).to({rotation:-7.3231,x:-33.9,y:-258.3},0).wait(1).to({rotation:-7.676,x:-33.85,y:-258.95},0).wait(1).to({rotation:-8.0139,x:-33.7,y:-259.55},0).wait(1).to({regX:-0.1,rotation:-8.3367,y:-260.15},0).wait(1).to({regX:0,rotation:-8.4699,x:-32.95,y:-260.55},0).wait(1).to({rotation:-8.5975,x:-32.25,y:-260.85},0).wait(1).to({rotation:-8.7197,x:-31.6,y:-261.2},0).wait(1).to({rotation:-8.8364,x:-31.05,y:-261.5},0).wait(1).to({rotation:-8.9476,x:-30.5,y:-261.85},0).wait(1).to({rotation:-9.0533,x:-29.9,y:-262.15},0).wait(1).to({rotation:-9.1535,x:-29.45,y:-262.4},0).wait(1).to({rotation:-9.2483,x:-28.95,y:-262.65},0).wait(1).to({rotation:-9.3375,x:-28.5,y:-262.9},0).wait(1).to({rotation:-9.4212,x:-28.05,y:-263.15},0).wait(1).to({regX:-0.2,regY:37.4,scaleX:0.9898,scaleY:0.9898,rotation:-9.4995,x:-27.8,y:-263.4},0).to({regX:-0.1,regY:37.5,scaleX:0.9899,scaleY:0.9899,rotation:-8.3367,x:-33.7,y:-260.15},11,cjs.Ease.get(0.5)).wait(1).to({regX:0,rotation:-7.7177,x:-33.75,y:-259},0).wait(1).to({rotation:-7.1221,x:-33.95,y:-257.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6.5498,x:-34.1,y:-256.9},0).wait(1).to({rotation:-6.0009,x:-34.25,y:-255.9},0).wait(1).to({rotation:-5.4753,x:-34.4,y:-254.95},0).wait(1).to({rotation:-4.9732,x:-34.55,y:-254},0).wait(1).to({rotation:-4.4943,x:-34.7,y:-253.15},0).wait(1).to({rotation:-4.0388,x:-34.8,y:-252.3},0).wait(1).to({rotation:-3.6067,x:-34.9,y:-251.55},0).wait(1).to({rotation:-3.198,x:-35.05,y:-250.8},0).wait(1).to({rotation:-2.8125,x:-35.15,y:-250.1},0).wait(1).to({regX:-0.1,rotation:-2.4505,x:-35.4,y:-249.45},0).to({rotation:0,x:-5.05,y:-224.4},10,cjs.Ease.get(0.5)).to({y:-242.8},21,cjs.Ease.get(0.5)).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.8,-876.9,542.4,859.9);


(lib.Right_Girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Face
	this.instance = new lib.GFace1("synched",0);
	this.instance.setTransform(-2.9,-642.4,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:1},1).to({rotation:6.4509,x:-2.05,y:-588.95,startPosition:19},18).to({scaleX:1.1187,scaleY:1.1187,rotation:-2.9914,x:-23.05,y:-653.15,startPosition:44},25,cjs.Ease.get(0.5)).to({regX:-0.1,regY:-0.3,rotation:-2.9914,x:-23.1,y:-669.2,startPosition:61},17).to({x:-23.15,y:-648.75,startPosition:75},14).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,rotation:6.4509,x:-5.95,y:-539.9,startPosition:96},21,cjs.Ease.get(-0.5)).wait(2).to({rotation:6.4509},0).to({rotation:0,x:-2.9,y:-642.4,startPosition:116},18).wait(5));

	// Body
	this.instance_1 = new lib.GBody("synched",0);
	this.instance_1.setTransform(-1.9,-454.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({scaleY:0.9126,x:-2.5,y:-421.1},18).to({regX:-0.1,regY:-0.2,scaleX:1.017,scaleY:0.8153,x:-18.6,y:-508.25},25,cjs.Ease.get(0.5)).to({regX:0,regY:0,x:-18.45,y:-522.45},17,cjs.Ease.get(0.5)).to({x:-18.5,y:-507.4},14).to({regY:-0.1,scaleX:1,scaleY:0.8452,x:-2.5,y:-388.45},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({regY:0,scaleY:1,x:-1.9,y:-454.5},18).wait(5));

	// s
	this.instance_2 = new lib.Sk("synched",0);
	this.instance_2.setTransform(-6.95,-502.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:1},1).to({scaleY:0.9126,y:-474.05,startPosition:19},18).to({regX:-0.3,regY:-0.2,scaleX:1.017,scaleY:0.9282,x:-23.25,y:-568.2,startPosition:44},25,cjs.Ease.get(0.5)).to({x:-23.2,y:-582.5,startPosition:61},17).to({x:-23.25,y:-567.45,startPosition:75},14).to({regX:0,regY:0,scaleX:1,scaleY:0.8452,x:-8.95,y:-427.3,startPosition:96},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:98},0).to({scaleY:1,x:-6.95,y:-502.4,startPosition:116},18).wait(5));

	// R_F_
	this.instance_3 = new lib.GL3("synched",0);
	this.instance_3.setTransform(-84.95,-113.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({startPosition:0},18).to({regX:0.2,regY:-0.5,scaleX:1.0168,scaleY:0.9133,skewX:-12.2418,skewY:168.3928,x:-104.9,y:-259.1},25,cjs.Ease.get(0.5)).to({regX:0.3,x:-113.55,y:-273.35},17,cjs.Ease.get(0.5)).to({regX:0.4,scaleY:0.9134,skewX:-5.2989,skewY:175.336,x:-116.35,y:-258.05},14).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:-84.95,y:-113.5},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({startPosition:0},18).wait(5));

	// R__lg_
	this.instance_4 = new lib.GL2("synched",0);
	this.instance_4.setTransform(-64.05,-184.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({scaleY:1.0133,skewX:-9.2949,x:-76.75},18).to({regX:0.4,regY:-0.4,scaleX:1.0168,scaleY:0.9302,skewX:-22.5467,skewY:168.3928,x:-110.8,y:-324.4},25,cjs.Ease.get(0.5)).to({x:-119.3,y:-338.65},17,cjs.Ease.get(0.5)).to({regY:-0.5,skewX:-20.3316,skewY:170.6078,x:-119.55,y:-323.2},14).to({regX:0,regY:0,scaleX:1,scaleY:1.0133,skewX:-9.2949,skewY:180,x:-76.75,y:-184.9},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({scaleY:1,skewX:0,x:-64.05},18).wait(5));

	// __r__Lage_
	this.instance_5 = new lib.GL1("synched",0);
	this.instance_5.setTransform(-59.2,-318.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).to({skewX:7.896,skewY:187.896,x:-53.95},18).to({regX:0.5,regY:-0.2,scaleX:1.017,scaleY:1.017,skewX:14.3892,skewY:194.3892,x:-74.1,y:-458.9},25,cjs.Ease.get(0.5)).to({regY:-0.1,x:-82.65,y:-473.15},17,cjs.Ease.get(0.5)).to({regY:-0.2,x:-82.7,y:-458.15},14).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:7.896,skewY:187.896,x:-53.95,y:-318.7},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({skewX:0,skewY:180,x:-59.2},18).wait(5));

	// R_Plum
	this.instance_6 = new lib.Gh1("synched",0);
	this.instance_6.setTransform(-131.45,-384.15,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0},0).to({regX:-0.2,regY:-0.1,scaleX:0.9997,scaleY:0.9129,rotation:0,skewX:13.2981,skewY:12.6678,x:-163.45,y:-376.05},18).to({regX:-0.7,regY:0,scaleX:1.0109,scaleY:0.8218,skewX:54.8095,skewY:50.9188,x:-226.1,y:-534.6},25,cjs.Ease.get(0.5)).to({x:-226.05,y:-548.85},17,cjs.Ease.get(0.5)).to({x:-226.1,y:-533.2},14).to({regX:-0.2,regY:-0.1,scaleX:0.9962,scaleY:0.8492,skewX:23.758,skewY:21.2001,x:-173.45,y:-353.3},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:3.4529,skewX:0,skewY:0,x:-131.45,y:-384.15},18).wait(5));

	// R_4_Arm
	this.instance_7 = new lib.GH2("synched",0);
	this.instance_7.setTransform(-111.4,-483.85,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).to({scaleX:0.9997,scaleY:0.913,rotation:0,skewX:5.3167,skewY:4.6867,x:-141.85,y:-464.55},18).to({regX:-0.5,regY:-0.3,scaleX:1.0158,scaleY:0.8165,skewX:27.8369,skewY:25.9065,x:-180.05,y:-596.1},25,cjs.Ease.get(0.5)).to({x:-180,y:-610.35},17,cjs.Ease.get(0.5)).to({x:-180.05,y:-594.7},14).to({regX:0,regY:0,scaleX:0.9992,scaleY:0.8461,skewX:15.1802,skewY:13.7824,x:-138.7,y:-430.65},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:3.4529,skewX:0,skewY:0,x:-111.4,y:-483.85},18).wait(5));

	// R_Arm
	this.instance_8 = new lib.GH3("synched",0);
	this.instance_8.setTransform(-81.3,-623.2,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:-0.1,scaleX:0.9997,scaleY:0.913,rotation:0,skewX:22.007,skewY:21.3769,x:-70.05,y:-577.75},18).to({regX:-0.5,scaleX:1.0011,scaleY:0.8323,skewX:57.4241,skewY:51.6883,x:-62.2,y:-641.2},25,cjs.Ease.get(0.5)).to({skewX:57.4241,x:-62.15,y:-655.45},17,cjs.Ease.get(0.5)).to({x:-62.2,y:-639.8},14).to({regX:-0.1,scaleX:0.9902,scaleY:0.8553,skewX:23.5776,skewY:19.9255,x:-68.95,y:-534.7},21,cjs.Ease.get(-0.5)).wait(2).to({skewX:23.5776},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:3.4529,skewX:0,skewY:0,x:-81.3,y:-623.2},18).wait(5));

	// L_F
	this.instance_9 = new lib.GL3("synched",0);
	this.instance_9.setTransform(58.7,-111.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).to({startPosition:0},18).to({regX:0.4,regY:-0.4,scaleX:1.0155,scaleY:0.9429,skewX:-1.4254,skewY:-0.1696,x:72.3,y:-275.6},25,cjs.Ease.get(0.5)).to({x:79,y:-289.85},17,cjs.Ease.get(0.5)).to({regX:0.5,scaleY:0.9428,skewX:-2.6929,skewY:-1.4371,x:83.9,y:-273.9},14).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:58.7,y:-111.55},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({startPosition:0},18).wait(5));

	// L__lg
	this.instance_10 = new lib.GL2("synched",0);
	this.instance_10.setTransform(37.8,-182.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0},0).to({scaleY:1.0064,skewX:13.2063,skewY:6.7404,x:55,y:-175.1},18).to({regX:0.4,regY:-0.3,scaleX:1.0169,scaleY:0.9478,skewX:12.8218,skewY:6.0689,x:67,y:-335.35},25,cjs.Ease.get(0.5)).to({x:73.7,y:-349.65},17,cjs.Ease.get(0.5)).to({regY:-0.5,skewX:8.8688,skewY:2.1145,x:73.85,y:-333.25},14).to({regX:0,regY:0,scaleX:1,scaleY:1.0064,skewX:13.2063,skewY:6.7404,x:55,y:-175.1},21,cjs.Ease.get(-0.5)).wait(2).to({skewY:6.7404},0).to({scaleY:1,skewX:0,skewY:0,x:37.8,y:-182.95},18).wait(5));

	// __L__Lage
	this.instance_11 = new lib.GL1("synched",0);
	this.instance_11.setTransform(32.95,-316.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,rotation:-0.9985,x:48.35,y:-310.25},18).to({regX:0.5,regY:-0.3,scaleX:1.017,scaleY:1.017,rotation:-21.9642,x:12.35,y:-461.1},25,cjs.Ease.get(0.5)).to({regY:-0.2,x:19.05,y:-475.3},17,cjs.Ease.get(0.5)).to({x:19,y:-460.25},14).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-0.9985,x:48.35,y:-310.25},21,cjs.Ease.get(-0.5)).wait(2).to({rotation:-0.9985},0).to({regX:0,regY:0,rotation:0,x:32.95,y:-316.75},18).wait(5));

	// L_Plum
	this.instance_12 = new lib.Gh1("synched",0);
	this.instance_12.setTransform(116.3,-384.55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.1,scaleY:0.9126,skewX:-1.7333,skewY:178.2669,x:168.2,y:-381.45},18).to({regX:0.5,regY:0,scaleX:1.0082,scaleY:0.8239,skewX:-35.2186,skewY:140.8966,x:202.15,y:-543.75},25,cjs.Ease.get(0.5)).to({regY:-0.1,skewX:-36.2315,skewY:139.884,x:203,y:-557.45},17,cjs.Ease.get(0.5)).to({regX:0.4,regY:0,skewX:-36.7277,skewY:139.387,x:202.85,y:-543.25},14).to({regX:0.1,regY:-0.2,scaleX:0.9947,scaleY:0.8502,skewX:-30.1035,skewY:147.5986,x:193.25,y:-370.6},21,cjs.Ease.get(-0.5)).wait(2).to({skewX:-31.2995,skewY:146.4016,x:193.85,y:-369.75},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:116.3,y:-384.55},18).wait(5));

	// L_4Arm
	this.instance_13 = new lib.GH2("synched",0);
	this.instance_13.setTransform(102.3,-485.25,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0},0).to({scaleY:0.9126,skewX:-8.2268,skewY:171.7743,x:141.75,y:-467.4},18).to({regX:0.6,regY:-0.2,scaleX:1.0151,scaleY:0.8171,skewX:-33.5512,skewY:144.5869,x:147.5,y:-600.75},25,cjs.Ease.get(0.5)).to({scaleX:1.015,skewX:-33.7556,skewY:144.3832,x:148.15,y:-614.4},17,cjs.Ease.get(0.5)).to({skewX:-33.3007,skewY:144.8392,x:148,y:-599.55},14).to({regX:0.1,regY:-0.1,scaleX:0.9988,scaleY:0.8462,skewX:-23.7583,skewY:155.142,x:147.95,y:-440.6},21,cjs.Ease.get(-0.5)).wait(2).to({skewX:-24.2427,skewY:154.6564,x:147.9,y:-440.65},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:102.3,y:-485.25},18).wait(5));

	// L_Arm
	this.instance_14 = new lib.GH3("synched",0);
	this.instance_14.setTransform(80.65,-626.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:0.9999,scaleY:0.9126,skewX:-23.0325,skewY:156.9672,x:68.2,y:-580.4},18).to({regX:0.3,regY:-0.1,scaleX:0.9995,scaleY:0.8408,skewX:-59.0427,skewY:116.1011,x:31.5,y:-641.6},25,cjs.Ease.get(0.5)).to({regX:0.2,regY:-0.2,scaleY:0.8549,skewX:-58.9971,skewY:117.565,x:32.25,y:-655.55},17,cjs.Ease.get(0.5)).to({regY:-0.1,scaleY:0.8618,skewX:-60.0713,skewY:116.0197,x:29.75,y:-639.95},14).to({regX:0,regY:-0.2,scaleX:0.9893,scaleY:0.8555,skewX:-30.6644,skewY:146.2021,x:64.65,y:-536.1},21,cjs.Ease.get(-0.5)).wait(2).to({startPosition:0},0).to({regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:80.65,y:-626.2},18).wait(5));

	// bani_hair
	this.instance_15 = new lib.GHair("single",0);
	this.instance_15.setTransform(2.1,-748.65,1.1,1.1,0,0,0,0,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0},0).to({regX:0.1,rotation:6.4509,x:14.9,y:-694},18).to({regX:-0.3,regY:-53.5,scaleX:1.1187,scaleY:1.1187,rotation:-2.9914,x:-23.8,y:-761.75},25,cjs.Ease.get(0.5)).to({rotation:-2.9914,x:-23.75,y:-777.5},17,cjs.Ease.get(0.5)).to({x:-23.8,y:-757.05},14).to({regX:0.1,regY:-53.1,scaleX:1.1,scaleY:1.1,rotation:6.4509,x:11,y:-644.95},21,cjs.Ease.get(-0.5)).wait(2).to({rotation:6.4509},0).to({regX:0,rotation:0,x:2.1,y:-748.65},18).wait(5));

	// Layer_20
	this.instance_16 = new lib.Gsk1("synched",0);
	this.instance_16.setTransform(-4.9,-243.45,1.007,0.99,0,0,0,-0.1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({startPosition:0},0).to({regY:37.4,scaleX:1.0099,scaleY:1,skewY:1.0147,x:-4.95,y:-240.85},18).wait(1).to({regX:0,regY:37.5,scaleX:1.0109,scaleY:1.0049,skewY:1.237,x:-5.55,y:-245.45},0).wait(1).to({scaleX:1.0118,scaleY:1.0097,skewY:1.4563,x:-6.25,y:-250.2},0).wait(1).to({scaleX:1.0127,scaleY:1.0145,skewY:1.6727,x:-6.95,y:-254.8},0).wait(1).to({scaleX:1.0136,scaleY:1.0191,skewY:1.886,x:-7.6,y:-259.4},0).wait(1).to({scaleX:1.0145,scaleY:1.0238,skewY:2.0964,x:-8.3,y:-263.85},0).wait(1).to({scaleX:1.0154,scaleY:1.0283,skewY:2.3038,x:-8.95,y:-268.3},0).wait(1).to({scaleX:1.0163,scaleY:1.0328,skewY:2.5082,x:-9.6,y:-272.65},0).wait(1).to({scaleX:1.0171,scaleY:1.0372,skewY:2.7097,x:-10.25,y:-276.95},0).wait(1).to({scaleX:1.018,scaleY:1.0416,skewY:2.9081,x:-10.9,y:-281.25},0).wait(1).to({scaleX:1.0189,scaleY:1.0459,skewY:3.1036,x:-11.5,y:-285.4},0).wait(1).to({regX:-0.2,regY:37.1,scaleX:1.0197,scaleY:1.0501,skewY:3.2961,x:-12.15,y:-289.7},0).wait(1).to({regX:0,regY:37.5,scaleX:1.0231,scaleY:1.0543,skewY:3.173,x:-12.7,y:-293.85},0).wait(1).to({scaleX:1.0264,scaleY:1.0584,skewY:3.0518,x:-13.5,y:-298.4},0).wait(1).to({scaleX:1.0297,scaleY:1.0624,skewY:2.9326,x:-14.25,y:-302.9},0).wait(1).to({scaleX:1.0329,scaleY:1.0664,skewY:2.8154,x:-15,y:-307.3},0).wait(1).to({scaleX:1.036,scaleY:1.0703,skewY:2.7,x:-15.75,y:-311.65},0).wait(1).to({scaleX:1.0392,scaleY:1.0741,skewY:2.5866,x:-16.45,y:-315.9},0).wait(1).to({scaleX:1.0422,scaleY:1.0779,skewY:2.4752,x:-17.2,y:-320.15},0).wait(1).to({scaleX:1.0453,scaleY:1.0816,skewY:2.3657,x:-17.9,y:-324.25},0).wait(1).to({scaleX:1.0482,scaleY:1.0852,skewY:2.2581,x:-18.6,y:-328.3},0).wait(1).to({scaleX:1.0511,scaleY:1.0888,skewY:2.1525,x:-19.25,y:-332.25},0).wait(1).to({scaleX:1.054,scaleY:1.0923,skewY:2.0488,x:-19.9,y:-336.15},0).wait(1).to({scaleX:1.0568,scaleY:1.0958,skewY:1.947,x:-20.6,y:-339.95},0).wait(1).to({scaleX:1.0595,scaleY:1.0991,skewY:1.8472,x:-21.2,y:-343.75},0).wait(1).to({regX:-0.6,regY:36.9,scaleX:1.0622,scaleY:1.1025,skewY:1.7493,x:-22.2,y:-347.85},0).to({regX:-0.5,regY:37,scaleX:1.0785,skewY:-4.3223,x:-27.35,y:-373.9},17,cjs.Ease.get(0.5)).to({regX:-0.4,scaleX:1.0887,skewY:-4.3229,x:-28.4,y:-358.8},14).wait(1).to({regX:0,regY:37.5,scaleX:1.0902,scaleY:1.0997,skewY:-3.6255,x:-26.95,y:-353.65},0).wait(1).to({scaleX:1.0919,scaleY:1.0966,skewY:-2.8648,x:-25.9,y:-348.65},0).wait(1).to({scaleX:1.0937,scaleY:1.0933,skewY:-2.0406,x:-24.75,y:-343.15},0).wait(1).to({scaleX:1.0957,scaleY:1.0897,skewY:-1.153,x:-23.55,y:-337.3},0).wait(1).to({scaleX:1.0978,scaleY:1.0859,skewY:-0.202,x:-22.25,y:-331},0).wait(1).to({scaleX:1.1,scaleY:1.0818,skewY:0.8124,x:-20.85,y:-324.3},0).wait(1).to({regX:-0.6,regY:36.9,scaleX:1.1024,scaleY:1.0775,skewY:1.8902,x:-19.85,y:-317.65},0).wait(1).to({regX:0,regY:37.5,scaleX:1.0973,scaleY:1.0729,skewY:1.9291,x:-18.35,y:-311.65},0).wait(1).to({scaleX:1.092,scaleY:1.068,skewY:1.9701,x:-17.5,y:-306.05},0).wait(1).to({scaleX:1.0863,scaleY:1.0629,skewY:2.0133,x:-16.55,y:-300.1},0).wait(1).to({scaleX:1.0804,scaleY:1.0576,skewY:2.0586,x:-15.6,y:-293.9},0).wait(1).to({scaleX:1.0742,scaleY:1.0519,skewY:2.1061,x:-14.6,y:-287.4},0).wait(1).to({scaleX:1.0677,scaleY:1.0461,skewY:2.1557,x:-13.55,y:-280.55},0).wait(1).to({regX:-0.7,regY:36.5,scaleX:1.0609,scaleY:1.04,skewY:2.2075,x:-13.05,y:-274.25},0).wait(1).to({regX:0,regY:37.5,scaleX:1.0592,scaleY:1.0336,skewY:1.8859,x:-11.7,y:-265.8},0).wait(1).to({scaleX:1.0576,scaleY:1.027,skewY:1.5513,x:-11.15,y:-258.2},0).wait(1).to({scaleX:1.0558,scaleY:1.0201,skewY:1.2039,x:-10.55,y:-250.3},0).wait(1).to({scaleX:1.054,scaleY:1.0129,skewY:0.8436,x:-9.9,y:-242.1},0).wait(1).to({scaleX:1.0521,scaleY:1.0055,skewY:0.4704,x:-9.25,y:-233.6},0).wait(1).to({scaleX:1.0501,scaleY:0.9979,skewY:0.0844,x:-8.6,y:-224.85},0).wait(1).to({regX:-0.2,regY:37.1,scaleX:1.0481,scaleY:0.99,skewY:-0.3145,y:-216.75},0).to({regX:-0.3,scaleX:1.0449,skewY:-0.3138,x:-8.3},2).to({regX:-0.1,regY:37.5,scaleX:1.007,skewY:0,x:-4.9,y:-243.45},18).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.4,-887,570.5999999999999,866.5);


(lib.Normal_Girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Face
	this.instance = new lib.GFace1("synched",0);
	this.instance.setTransform(-2.9,-642.4,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({startPosition:118},0).to({_off:true},1).wait(1));

	// Body
	this.instance_1 = new lib.GBody("synched",0);
	this.instance_1.setTransform(-1.9,-454.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// s
	this.instance_2 = new lib.Sk("single",0);
	this.instance_2.setTransform(-6.95,-502.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// R_F_
	this.instance_3 = new lib.GL3("synched",0);
	this.instance_3.setTransform(-84.95,-113.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// R__lg_
	this.instance_4 = new lib.GL2("synched",0);
	this.instance_4.setTransform(-64.05,-184.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// __r__Lage_
	this.instance_5 = new lib.GL1("synched",0);
	this.instance_5.setTransform(-59.2,-318.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// R_Plum
	this.instance_6 = new lib.Gh1("synched",0);
	this.instance_6.setTransform(-131.45,-384.15,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// R_4_Arm
	this.instance_7 = new lib.GH2("synched",0);
	this.instance_7.setTransform(-111.4,-483.85,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// R_Arm
	this.instance_8 = new lib.GH3("synched",0);
	this.instance_8.setTransform(-81.3,-623.2,1,1,3.4529);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// L_F
	this.instance_9 = new lib.GL3("synched",0);
	this.instance_9.setTransform(58.7,-111.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// L__lg
	this.instance_10 = new lib.GL2("synched",0);
	this.instance_10.setTransform(37.8,-182.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// __L__Lage
	this.instance_11 = new lib.GL1("synched",0);
	this.instance_11.setTransform(32.95,-316.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// L_Plum
	this.instance_12 = new lib.Gh1("synched",0);
	this.instance_12.setTransform(116.3,-384.55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// L_4Arm
	this.instance_13 = new lib.GH2("synched",0);
	this.instance_13.setTransform(102.3,-485.25,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// L_Arm
	this.instance_14 = new lib.GH3("synched",0);
	this.instance_14.setTransform(80.65,-626.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// bani_hair
	this.instance_15 = new lib.GHair("single",0);
	this.instance_15.setTransform(2.1,-748.65,1.1,1.1,0,0,0,0,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer_20
	this.instance_16 = new lib.Gsk1("synched",0);
	this.instance_16.setTransform(-5.05,-242.8,0.99,0.99,0,0,0,-0.1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(118).to({startPosition:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-850.2,299.3,829.7);


(lib.Girl_Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {normal:0,right:119,wrong:241};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_118 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_240 = function() {
		//this.parent.fChangeQuestion();
		this.gotoAndPlay(1);
	}
	this.frame_353 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(118).call(this.frame_118).wait(122).call(this.frame_240).wait(113).call(this.frame_353).wait(1));

	// Layer_1
	this.instance = new lib.Normal_Girl("synched",0);
	this.instance.setTransform(929.35,1045.9,0.9412,0.9412,0,0,0,0.3,0.3);

	this.instance_1 = new lib.Right_Girl("synched",0);
	this.instance_1.setTransform(928.65,1046.4,0.9413,0.9413,0,0,0,0.2,0.2);

	this.instance_2 = new lib.Wrong_Girl("synched",0);
	this.instance_2.setTransform(928.75,1046.5,0.9413,0.9413,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},119).to({state:[{t:this.instance_2}]},122).wait(113));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(642.7,211.2,537.2,819.0999999999999);


(lib.game_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.mcGirl = new lib.Girl_Animation();
	this.mcGirl.name = "mcGirl";
	this.mcGirl.setTransform(612.1,522.65,0.405,0.405,0,0,0,911.4,1021.4);

	this.timeline.addTween(cjs.Tween.get(this.mcGirl).wait(1));

	// Layer_3
	this.text_con = new lib.text();
	this.text_con.name = "text_con";
	this.text_con.setTransform(163.55,20.5);

	this.timeline.addTween(cjs.Tween.get(this.text_con).wait(1));

	// Layer_2
	this.mcBG = new lib.bg();
	this.mcBG.name = "mcBG";

	this.timeline.addTween(cjs.Tween.get(this.mcBG).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.game_screen, new cjs.Rectangle(0,0,1280,4320), null);


// stage content:
(lib.ui = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.fGenerateCreateJSText = function(mc, strText, xx, yy, nLineHeight, nLineWidth, strFont, strColor, strAlign)
		{	
			var tt = new createjs.Text();
			//tt.shadow = new createjs.Shadow("#000000", 2, 2, 3);
			tt.text = strText;
			tt.font = strFont;
			tt.color = strColor;
			tt.textAlign = strAlign;
			tt.mouseEnabled = false;
			tt.x = xx;
			tt.y = yy;
			tt.y = -(tt.getMeasuredHeight()/3);
			tt.lineHeight = nLineHeight;
			tt.lineWidth = nLineWidth;
			mc.tt = tt;
			mc.addChild(tt);
			mc.strText = strText;
			mc.nW += tt.getMeasuredWidth();
			return tt;
		}
		
		//this.mcCurrentScreen.mcRubric.tt = this.fGenerateCreateJSText(this.mcCurrentScreen.mcRubric, this.currentRubricTxt, 0, 0, 0,  "25px Poppins", "#000", "center");
		
		this.audio = new Audio();
		this.playAudio = function (name)
		{
			this.name = name;	
			this.audio.src = "sounds/" + name + ".mp3";
			this.audio.play();	
		}
		
		this.onCompleteAudio = function(strName)
		{
			this.audio.addEventListener("ended", this.var1 = this[strName].bind(this));	
		}
		this.fRemoveChiled = function(name)
		{
			this.removeChild(name);
		}
		this.randomInteger = function (min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		this.fGetRandomNum = function()
		{
			this.leftNum = this.randomInteger(1, 9)
			var rNum =  this.maxNum - this.leftNum;
			this.rightNum = this.randomInteger(1, rNum);
			this.fOptionNum();
			console.log(this.leftNum + "  ---  " + this.rightNum);
		
		}
		
		this.shuffleItems = function (arr) 
		{
			//return arr.sort(function() {return .5 - Math.random()});
			var newMcOrder = [];
			var end = false;
			while (!end) 
			{
				var myRandom = Math.floor(Math.random()*arr.length);
				var _selected = arr[myRandom];
				arr.splice(myRandom,1);
				newMcOrder.push(_selected);
				if (arr.length == 0) 
				{
					end = true;
				}
			}
			//this.arrSuffleArray = newMcOrder;
			return newMcOrder;
		}
		this.fOptionNum = function()
		{
			var lan = this.numArray.length;
			sum = this.leftNum  + this.rightNum;
			rndArr = [];
			console.log(" sum " + sum);
			for(var i = 1; i <= lan;  i++)
			{
				if(sum != this.numArray[i-1])
				{
					rndArr.push(i);
				}
			}
			rndArr = this.shuffleItems(rndArr);
			this.newNumArr = [sum, rndArr[0], rndArr[1]]
			this.newNumArr = this.shuffleItems(this.newNumArr);
			console.log(rndArr + "  -newNumArr-  " + this.newNumArr);
		}
		this.stop();
		this.QuesArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
		var jumpPos = [0,-720,-1440,-2160,-2880, -3600];
		this.currentQuestion = 1;
		var correctAns;
		var rightCount = 0;
		var wrongCnt = 0;
		stage.enableMouseOver();
		this.initFunction = function () {
			this.newQuesArr = this.shuffleItems(this.QuesArray);
			this.mcStart = new lib.start_screen();
			this.mcStart.btn.addEventListener('mousedown', this.fPlayInitScreen.bind(this));
			this.addChild(this.mcStart);
			this.mcStart.btn.cursor = 'pointer';
			//var insText = this.mcRubric.mcRubricAnim.mcTT;
			//insText.tt = this.fGenerateCreateJSText(insText, ins_txt, 0, 0, 60, 1000,  "45px Roboto", "#FFF", "center");
		}
		this.fPlayInitScreen = function () {
			this.mcStart.play();
		}
		this.fStartGamneAnim = function () {
			this.removeChild(this.mcStart);
			this.fLoadGameScreen();
			this.fPrintOptionText();
			this.playAudio("instruction");	
			this.onCompleteAudio("fAddListener");
		}
		this.fLoadGameScreen = function () {
			//this.currentQnum = this.newQuesArr[this.currentQuestion-1];
			if(this.currentQuestion <= 1){
				this.mcGameScreen = new lib["game_screen"];
				this.addChild(this.mcGameScreen);
				this.mcGameScreen.alpha = 0;
				createjs.Tween.get(this.mcGameScreen, { loop: false }).to({ alpha: 1}, 500, createjs.Ease.getPowInOut(4));
			}else{
				this.fAddListener();
			}
			//this.fPrintOptionText();
		}
		this.startBgAnim = function()
		{
			createjs.Tween.get(this.mcGameScreen.mcBG, { loop: false }).to({ y: jumpPos[this.currentQuestion-1]}, 2000, createjs.Ease.getPowInOut(2.5));
			if(this.currentQuestion == maxQue+1){
				var girlY = this.mcGameScreen.mcGirl.y;
				createjs.Tween.get(this.mcGameScreen.mcGirl, { loop: false }).to({ y: girlY + 100}, 2000, createjs.Ease.getPowInOut(2.5));
			}
		}
		this.fAddListener = function(){
			console.log("fAddListener -- ");
			for(var i = 1; this.mcGameScreen.text_con["mcOption" + i] != undefined; i++)
			{
				this.Options = this.mcGameScreen.text_con["mcOption" + i].btn;
				this.Options.addEventListener("mousedown",this.Options.mseDwnEvnt = this.fPressOptions.bind(this));
				this.Options.cursor = "pointer"
				this.Options.id = i;
			}
		}
		this.fPressOptions = function(e){
			correctAns = arrQText[this.newQuesArr[this.currentQuestion-1]-1].answer;
			console.log("fPressOptions ---  " + "    ---this.newQuesArr ---  " + this.newQuesArr + "correctAns -- " + correctAns);
			this.mcCurrentOption = e.currentTarget;
			console.log(e.currentTarget.id + "  --this.mcGameScreen.id-- " + correctAns)
			if(this.mcCurrentOption.id == correctAns)
			{
				//this.fPrintAnswerTxt();
				this.currentQuestion++;
				this.playAudio("right");
				this.mcGameScreen.mcGirl.gotoAndPlay("right");
				this.mcCurrentOption.parent.gotoAndStop(1);
				this.startBgAnim();
				this.removeButtonEvent();
				setTimeout(function () {
				 this.fRemoveCurrentQue();
				//this.fstartActivity();
				}.bind(this), 2500);
				//this.onCompleteAudio("fRemoveCurrentQue");
				
			}
			else
			{
				this.playAudio("wrong");
				this.mcGameScreen.mcGirl.gotoAndPlay("wrong");
				this.mcCurrentOption.parent.gotoAndStop(2);
				this.mcGameScreen.mouseEnabled = false;
				setTimeout(function () {
					this.fRefreshFunction();
				//this.fstartActivity();
				}.bind(this), 1000);
			}
		}
		this.fRefreshFunction = function()
		{
			this.mcGameScreen.mouseEnabled = true;
			this.mcCurrentOption.parent.gotoAndStop(0);
			this.audio.removeEventListener("ended", this.var1, false);
		}
		this.fRemoveCurrentQue = function()
		{
			if(this.currentQuestion <= maxQue)
			{
				createjs.Tween.get(this.mcGameScreen.text_con.mcQ.mcTT, { loop: false }).to({ alpha: 0}, 500, createjs.Ease.getPowInOut(4)).call(this.fChangeQuestion.bind(this));
				createjs.Tween.get(this.mcGameScreen.text_con.mcQn.mcTT, { loop: false }).to({ alpha: 0}, 500, createjs.Ease.getPowInOut(4));
			}else{
				this.showEndScreen();
			}
			this.mcCurrentOption.parent.gotoAndStop(0);
			for (var i = 1; this.mcGameScreen.text_con["mcOption" + i] != undefined; i++)
			{
				var currentOption = this.mcGameScreen.text_con["mcOption" + i].mcTT;
				createjs.Tween.get(currentOption, { loop: false }).to({ alpha: 0}, 500, createjs.Ease.getPowInOut(2.5));
			}
			this.audio.removeEventListener("ended", this.var1, false);
		}
		this.fChangeQuestion = function()
		{
			this.fPrintOptionText();
			this.fAddListener();
			console.log(this.currentQuestion  + "  currentQuestion---  maxNum = " + maxQue);
		}
		this.showEndScreen = function()
		{
			this.playAudio("welldone");
			this.endScreen = new lib.end_screen();
			this.addChild(this.endScreen);
			this.endScreen.scaleX = 0.67;
			this.endScreen.scaleY = 0.67;
		}
		this.removeButtonEvent = function()
		{
			for(var i = 1; this.mcGameScreen.text_con["mcOption" + i] != undefined; i++)
			{
				this.Options = this.mcGameScreen.text_con["mcOption" + i].btn;
				this.Options.removeEventListener("mousedown", this.Options.mseDwnEvnt);
				this.Options.cursor = null;
			}
			
		}
		this.fPrintOptionText = function(){
			this.currentQnum = this.newQuesArr[this.currentQuestion-1];
			console.log("currentQnum --  "  + this.currentQnum + " Answer :- " + arrQText[this.newQuesArr[this.currentQuestion-1]-1].answer);
			for (var i = 1; this.mcGameScreen.text_con["mcOption" + i] != undefined; i++)
			{
				var currentOption = this.mcGameScreen.text_con["mcOption" + i].mcTT;
				if(this.currentQuestion > 1)
				{
					this.mcGameScreen.text_con.mcQ.mcTT.tt.text = "";
					this.mcGameScreen.text_con.mcQn.mcTT.tt.text = "";
					this.mcGameScreen.text_con["mcOption" + i].mcTT.tt.text = "";
				}
				currentOption.tt = this.fGenerateCreateJSText(currentOption, arrQText[this.currentQnum-1]["option" + i], 0, 0, 0, 230,  "30px Roboto", "#FFF", "center");
				createjs.Tween.get(currentOption, { loop: false }).to({ alpha: 1}, 500, createjs.Ease.getPowInOut(2.5));
			}
			this.mcGameScreen.text_con.mcQ.mcTT.tt = this.fGenerateCreateJSText(this.mcGameScreen.text_con.mcQ.mcTT, arrQText[this.currentQnum-1].question, 0, 0, 0, 880,  "30px Roboto", "#3C1B03", "left");
			this.mcGameScreen.text_con.mcQn.mcTT.tt = this.fGenerateCreateJSText(this.mcGameScreen.text_con.mcQn.mcTT, this.currentQuestion, 0, 0, 0, 0,  "40px Roboto", "#3C1B03", "center");
			if(this.mcGameScreen.text_con.mcQ.mcTT.tt.getBounds().width > 780)this.mcGameScreen.text_con.mcQ.mcTT.y = 30;
			createjs.Tween.get(this.mcGameScreen.text_con.mcQ.mcTT, { loop: false }).to({ alpha: 1}, 500, createjs.Ease.getPowInOut(2.5));
			createjs.Tween.get(this.mcGameScreen.text_con.mcQn.mcTT, { loop: false }).to({ alpha: 1}, 500, createjs.Ease.getPowInOut(2.5));
			console.log("---width1 ---" + this.mcGameScreen.text_con.mcOption1.mcTT.tt.getBounds().width)
			console.log("---width2 ---" + this.mcGameScreen.text_con.mcOption2.mcTT.tt.getBounds().width)
			console.log("---width3 ---" + this.mcGameScreen.text_con.mcOption3.mcTT.tt.getBounds().width)
			console.log("---width4 ---" + this.mcGameScreen.text_con.mcOption4.mcTT.tt.getBounds().width)
			/*for (var i = 1; this.mcGameScreen.text_con["mcOption" + i] != undefined; i++)
			{
				var mcOption = this.mcGameScreen.text_con["mcOption" + i]
				if(mcOption.mcTT.tt.getBounds().width > 230)mcOption.mcTT.y = 24;
				console.log("---width ---" + mcOption.mcTT.tt.getBounds().width)
			}*/
		}
		this.initFunction();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49F8DF").s().p("EhjzA4UMAAAhwnMDHnAAAMAAABwng");
	this.shape.setTransform(639.175,360.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640.4,360,637.6,360.70000000000005);
// library properties:
lib.properties = {
	id: '43D59298A37CE247BFAC71FF180991A9',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_9.png?1729120720503", id:"CachedBmp_9"},
		{src:"images/Bitmap1.png?1729120720503", id:"Bitmap1"},
		{src:"images/ui_atlas_1.png?1729120720379", id:"ui_atlas_1"},
		{src:"images/ui_atlas_2.png?1729120720379", id:"ui_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['43D59298A37CE247BFAC71FF180991A9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;