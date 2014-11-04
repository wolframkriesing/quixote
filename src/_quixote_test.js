// Copyright (c) 2014 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
"use strict";

var assert = require("./util/assert.js");
var quixote = require("./quixote.js");
var QFrame = require("./q_frame.js");

describe("Quixote", function() {

	it("creates frame", function(done) {
		var frame = quixote.createFrame({ src: "/base/src/_q_frame_test.html" }, function(err, callbackFrame) {
			assert.noException(function() {
				callbackFrame.get("#exists");
			});
			frame.remove();
			done(err);
		});
		assert.type(frame, QFrame, "createFrame() returns frame object immediately");
	});

});

describe("Browser capability", function() {

	it("detects whether browser expands frame to fit size of page", function() {
		var mobileSafari = navigator.userAgent.match(/(iPad|iPhone|iPod touch);/i) !== null;

		assert.equal(
			quixote.browser.enlargesFrameToPageSize(),
			mobileSafari,
			"everything but Mobile Safari should respect frame size"
		);
	});

});