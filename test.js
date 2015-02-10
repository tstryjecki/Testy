
//node
//var script = require("../lib/afterTest.js");
//var expect = require("chai").expect;


//browser
var expect = chai.expect;



/*TO DO:
Czy sprawdzać jakie argumenty wchodzą do funkcji?
Przetestować wartość zwracaną czyli powstały element canvas
*/

describe("thumbnails", function() {

	expect(thumbnails).to.be.an('object');
	describe("#makeCanvas", function() {
		var	img = new Image(),
			width = 150,
			height = 150,
			makeCanvas = thumbnails.makeCanvas(img, width, height);// muszę wymyślić przykładowe wartości, i je tu przekazać, żeby test się udał?
			img.src = "http://thigrand.pl/";
		it("should take img object, and dimensions of canvas", function() { 
			expect(img).to.be.an("object").and.to.be.an.instanceof(Image);
			expect(width).exist.and.be.a('number');
			expect(height).exist.and.be.a('number');
		});

		var aHref = makeCanvas.attributes['0'],
			aTarget = makeCanvas.attributes['1'],
			canvasWidth = makeCanvas.childNodes[0].attributes['0'],
			canvasHeight = makeCanvas.childNodes[0].attributes['1'];
		it("should give canvas with attributes: width, height, href, target", function() {
			expect(aHref.name).to.equal('href');
			expect(aTarget.name).to.equal('target');
			expect(canvasWidth.name).to.include('width');
			expect(canvasHeight.name).to.include('height');
		});
		it("and not to be null", function() {
			expect(aHref.value).to.exist;
			expect(aTarget.value).to.exist;
			expect(canvasWidth.value).to.exist;
			expect(canvasHeight.value).to.exist;
		});
	});
});

/*TTO DO:

*/

describe("handleFile", function() {
	describe("#select", function() {
	/*	var evt =
		if(evt.dataTransfer.files || evt.target.files) {
			it("if get a file, should append canvas", function() {

			});
		}*/
	});
	describe("#getConfig", function() {
		var exampleId = "",
			configure = handleFile.getConfig({galleryElement : exampleId});

		it("should return default value", function() {
			expect(configure.galleryElement).to.equal('#gallery');
		});
		it("should return passed value", function() {
			var exampleId = "#tararara";
			expect(handleFile.getConfig({
        		galleryElement : exampleId,        
    		}).galleryElement).to.equal('#tararara');
		});
	});
});



/*TTO DO:

*/
/*
describe("fileUp", function() {
	describe("#input", function() {
		it("", function() {

		});
	});
	describe("#getConfig", function() {
		var exampleId = "",
			configure = handleFile.getConfig({fileElement : exampleId});

		it("should return default value", function() {
			expect(configure.fileElement).to.equal('#files');
		});
		it("should return passed value", function() {
			var exampleId = "#tararara";
			expect(handleFile.getConfig({
        		fileElement : exampleId,        
    		}).fileElement).to.equal('#tararara');
		});
	});
});
*/

/*TTO DO:

*/

/*
describe("dragAndDrop", function() {
	describe("#drag", function() {
		it("", function() {

		});
	});
	describe("#getConfig", function() {
		var exampleId = "",
			configure = handleFile.getConfig({dragElement : exampleId});

		it("should return default value", function() {
			expect(configure.dragElement).to.equal('#drag');
		});
		it("should return passed value", function() {
			var exampleId = "#tararara";
			expect(handleFile.getConfig({
        		dragElement : exampleId,        
    		}).dragElement).to.equal('#tararara');
		});
	});
});
*/
