/* eslint-disable no-undef */
import { VisionCameraProxy } from 'react-native-vision-camera';

/**
 * Scans OCR.
 */
const plugin = VisionCameraProxy.getFrameProcessorPlugin('scanOCR');
export function scanOCR(frame) {
  'worklet';

  if (plugin == null) {
    throw new Error('Failed to load Frame Processor Plugin "scanOCR"!');
  }

  return plugin.call(frame);
}
//# sourceMappingURL=index.js.map