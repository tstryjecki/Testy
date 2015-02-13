//node
//var script = require("../lib/afterTest.js");
//var expect = require("chai").expect;

//browser
var expect = chai.expect;

describe("thumbnails", function() {
	expect(thumbnails).to.be.an('object');
	describe("#makeCanvas", function() {
		var	img = new Image(),
			width = 150,
			height = 150;
			img.src = "http://thigrand.pl/";
		var	insideCanvas = thumbnails.makeCanvas(img, width, height),// muszę wymyślić przykładowe wartości, i je tu przekazać, żeby test się udał?
			aHref = insideCanvas.getAttribute("href"),
			aTarget = insideCanvas.getAttribute('target'),
			canvasWidth = insideCanvas.childNodes[0].getAttribute('width'),
			canvasHeight = insideCanvas.childNodes[0].getAttribute('height');
		it("should give canvas with attributes: width, height, href, target", function() {
			expect(aHref).to.equal('http://thigrand.pl/');
			expect(aTarget).to.equal('_blank');
			expect(canvasWidth).to.equal('150');
			expect(canvasHeight).to.equal('150');
		});

	});
});

/*TO DO:

*/

describe("handleFile", function() {
	describe("#select", function() {
		var listener = sinon.spy();
	/*	var evt = 
		if(evt.dataTransfer.files || evt.target.files) {
			it("if get a file, should append canvas", function() {

			});
		}*/
		// var stopPropagationSpy = sinon.spy();
		// var evt = { stopPropagation: stopPropagationSpy };

		// select(evt);


	});
	describe("#setConfig", function() {
		var exampleId = "",
			configure = handleFile.setConfig({galleryElement : exampleId});

		it("should return default value", function() {
			expect(configure.galleryElement).to.equal('#gallery');
		});
		it("should return passed value", function() {
			var exampleId = "#tararara";
			expect(handleFile.setConfig({
        		galleryElement : exampleId,        
    		}).galleryElement).to.equal('#tararara');
		});
	});
});

/*TO DO:

*/

describe("fileUp", function() {
	describe("#input", function() {
		it("should handle event", function() {
		handleFile.select = sinon.spy();
		conf.file.dispatchEvent("change");

		sinon.assert.calledOnce(stopPropagationSpy);

		expect(handleFile.select.calledOnce).to.be.true;


		});
	});
	describe("#setConfig", function() {
		var exampleId = "",
			configure = fileUp.setConfig({fileElement : exampleId});

		it("should return default value", function() {
			expect(configure.fileElement).to.equal('#files');
		});
		it("should return passed value", function() {
			var exampleId = "#tararara";
			expect(fileUp.setConfig({
        		fileElement : exampleId,        
    		}).fileElement).to.equal('#tararara');
		});
	});
});


/*TO DO:

*/

describe("dragAndDrop", function() {
	describe("#drag", function() {
		it("should check dragover and drop events", function() {

		});
	});
	describe("#setConfig", function() {
		var exampleId = "",
			configure = dragAndDrop.setConfig({dragElement : exampleId});

		it("should return default value", function() {
			expect(configure.dragElement).to.equal('#drag');
		});
		it("should return passed value", function() {
			var exampleId = "#tararara";
			expect(dragAndDrop.setConfig({
        		dragElement : exampleId,        
    		}).dragElement).to.equal('#tararara');
		});
	});
});
