function render(source) {
  const graph = document.getElementById('graph');
  const container = document.getElementById('container');


  const eventsHandler = {
    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
    init(options) {
      const { instance } = options;
      let initialScale = 1;
      let pannedX = 0;
      let pannedY = 0;
      // Init Hammer
      // Listen only for pointer and touch events
      this.hammer = Hammer(options.svgElement, {
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
      });
      // Enable pinch
      this.hammer.get('pinch').set({ enable: true });
      // Handle double tap
      this.hammer.on('doubletap', () => {
        instance.zoomIn();
      });
      // Handle pan
      this.hammer.on('panstart panmove', (ev) => {
        // On pan start reset panned variables
        if (ev.type === 'panstart') {
          pannedX = 0;
          pannedY = 0;
        }
        // Pan only the difference
        instance.panBy({ x: ev.deltaX - pannedX, y: ev.deltaY - pannedY });
        pannedX = ev.deltaX;
        pannedY = ev.deltaY;
      });
      // Handle pinch
      this.hammer.on('pinchstart pinchmove', (ev) => {
        // On pinch start remember initial zoom
        if (ev.type === 'pinchstart') {
          initialScale = instance.getZoom();
          instance.zoomAtPoint(initialScale * ev.scale, ev.center);
        }

        instance.zoomAtPoint(initialScale * ev.scale, ev.center);
      });
      // Prevent moving the page on some devices when panning over SVG
      options.svgElement.addEventListener('touchmove', (e) => { e.preventDefault(); });
    },
    destroy() {
      this.hammer.destroy();
    },
  };

  // Set up observer to create minimap when the graph is rendered
  const observer = new MutationObserver(() => {

    const zoom = svgPanZoom('#graph > svg', {
      minZoom: 0.1,
      zoomScaleSensitivity: 0.3,
      dblClickZoomEnabled: false,
      controlIconsEnabled: true,
      customEventsHandler: eventsHandler,
    });

    const sizes = zoom.getSizes();

    function updateMinimap() {
      const pan = zoom.getPan();
      const zoomRatio = zoom.getZoom();
      const aX = -pan.x / zoomRatio;
      const aY = -pan.y / zoomRatio;

      const xPercentage = aX / sizes.width;
      const yPercentage = aY / sizes.height;

      const minimap = document.getElementById('minimap-square');
      const minimapWidth = minimap.getAttribute('width');
      const minimapHeight = minimap.getAttribute('height');

      const rect = document.getElementById('minimap-rect');
      rect.setAttribute('width', ((container.clientWidth / sizes.width) * minimapWidth) / zoom.getZoom());
      rect.setAttribute('height', ((container.clientHeight / sizes.height) * minimapHeight) / zoom.getZoom());
      rect.setAttribute('x', xPercentage * minimapWidth);
      rect.setAttribute('y', yPercentage * minimapHeight);
    }


    zoom.setOnZoom(() => {
      updateMinimap();
    });

    zoom.setOnPan(() => {
      updateMinimap();
    });

    const svgString = new XMLSerializer().serializeToString(document.querySelector('#graph > svg'));

    const canvas = document.createElement('canvas');
    canvas.id = 'minimap-canvas';

    const canvasWidth = (window.innerWidth > 768) ?
      window.innerWidth * 0.20 :
      window.innerWidth * 0.475;

    canvas.width = canvasWidth;
    canvas.height = canvas.width * (sizes.height / sizes.width);

    canvas.classList.add('minimap');

    document.getElementById('minimap-container').appendChild(canvas);

    const minimapSquare = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    minimapSquare.id = 'minimap-square';
    minimapSquare.setAttribute('width', canvas.width);
    minimapSquare.setAttribute('height', canvas.height);
    minimapSquare.classList.add('minimap');

    minimapSquare.innerHTML =
      '<g><rect id="minimap-rect" fill="red" fill-opacity="0.1" stroke="red" stroke-width="2px" x="0" y="0" width="" height="" /></g>';

    minimapSquare.onclick = ev => {
      const zoomRatio = zoom.getZoom();
      const x = -(ev.offsetX / canvas.width) * sizes.width * zoomRatio;
      const y = -(ev.offsetY / canvas.height) * sizes.height * zoomRatio;

      zoom.pan({
        x: (x + ((container.clientWidth / 2) * zoomRatio)),
        y: (y + ((container.clientHeight / 2) * zoomRatio)),
      });
    };

    document.getElementById('minimap-container').appendChild(minimapSquare);

    const ctx = canvas.getContext('2d');
    const img = new Image();
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
    };
    img.src = url;

    zoom.pan({
      x: -(sizes.width / 2), y: -(sizes.height / 2),
    });
    updateMinimap();
  });

  observer.observe(graph, {
    attributes: true,
    characterData: true,
    childList: true,
  });



  graph.innerHTML = Viz(source, {
    format: 'svg',
    engine: 'fdp',
  });
}

function getParams(query) {
  if (!query) {
    return {};
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      const [key, value] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, {});
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loading-js-spinner').remove();
  const params = getParams(window.location.search);
  const renderingGraphSpinner = document.getElementById('rendering-graph-spinner');
  renderingGraphSpinner.style.display = 'initial';

  if ('thread' in params) {
    fetch(`${params.thread}.txt`)
      .then(res => {
        if (res.ok) {
          return res.text();
        }
        throw new Error(res.status);
      })
      .then(source => {
        render(source);
        renderingGraphSpinner.remove();
      })
      .catch(err => alert(err));
  } else {
    alert('thread not found in querystring, eg. ?thread=42064745');
  }
});
