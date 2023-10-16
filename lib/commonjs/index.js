"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanOCR = scanOCR;

var _reactNativeVisionCamera = require("react-native-vision-camera");

/* eslint-disable no-undef */

/**
 * Scans OCR.
 */
const plugin = _reactNativeVisionCamera.VisionCameraProxy.getFrameProcessorPlugin('scanOCR');

function scanOCR(frame) {
  'worklet';

  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin "scanOCR"!');
  }

  return plugin.call(frame);
}
//# sourceMappingURL=index.js.map