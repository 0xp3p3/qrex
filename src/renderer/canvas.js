import * as Utils from './utils'

function clearCanvas(ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = `${size}px`;
  canvas.style.width = `${size}px`;
}

function getCanvasElement() {
  try {
    return document.createElement("canvas");
  } catch (e) {
    throw new Error("You need to specify a canvas element");
  }
}

export function render(qrData, canvas, options) {
  let opts = options;
  let canvasEl = canvas;

  if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!canvas) {
    canvasEl = getCanvasElement();
  }

  opts = Utils.getOptions(opts);
  const size = Utils.getImageWidth(qrData.modules.size, opts);

  const ctx = canvasEl.getContext("2d");
  const image = ctx.createImageData(size, size);
  Utils.qrToImageData(image.data, qrData, opts);

  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);

  if (opts.image) {
    const img = new Image();
    img.onload = () => {
      const scale = Utils.getScale(qrData.modules.size, opts);
      // Draw the image to fit the canvas
      ctx.clearRect(size / 2 - scale * 6, size / 2 - scale * 6, scale * 12, scale * 12);
      ctx.drawImage(img, size / 2 - scale * 5, size / 2 - scale * 5, scale * 10, scale * 10);
      // Revoke the blob URL after using it to free memory
      URL.revokeObjectURL(opts.image);
    };

    img.onerror = () => {
      console.error('Error loading the image from the blob URL.');
    };
    // Set the image source to the blob URL
    img.src = opts.image;
  }

  return canvasEl;
}

export function renderToDataURL(qrData, canvas, options) {
  let opts = options;

  if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!opts) opts = {};

  const canvasEl = render(qrData, canvas, opts);

  const type = opts.type || "image/png";
  const rendererOpts = opts.rendererOpts || {};

  return canvasEl.toDataURL(type, rendererOpts.quality);
}
