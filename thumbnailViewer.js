const thumbnailViewer = () => { // eslint-disable-line no-unused-vars
  const bindThumbnail = (main, thumb) => {
    if (!window.main && main) {
      window.main = main;
    }
    if (!window.thumb && thumb) {
      window.thumb = thumb;
    }
    if (!window.main || !window.thumb) {
      return;
    }

    let resizeTimer;
    const interval = 300; // msec
    window.addEventListener('resize', () => {
      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        window.main.resize();
        window.thumb.resize();
      }, interval);
    });

    window.main.setOnZoom(() => {
      window.thumb.updateThumbScope();
    });

    window.main.setOnPan(() => {
      window.thumb.updateThumbScope();
    });

    const _updateThumbScope = (main, thumb, scope, line1, line2) => {
      const mainPanX = main.getPan().x,
        mainPanY = main.getPan().y,
        mainWidth = main.getSizes().width,
        mainHeight = main.getSizes().height,
        mainZoom = main.getSizes().realZoom,
        thumbPanX = thumb.getPan().x,
        thumbPanY = thumb.getPan().y,
        thumbZoom = thumb.getSizes().realZoom;

      const thumByMainZoomRatio = thumbZoom / mainZoom;

      const scopeX = thumbPanX - (mainPanX * thumByMainZoomRatio);
      const scopeY = thumbPanY - (mainPanY * thumByMainZoomRatio);
      const scopeWidth = mainWidth * thumByMainZoomRatio;
      const scopeHeight = mainHeight * thumByMainZoomRatio;

      scope.setAttribute('x', scopeX + 1);
      scope.setAttribute('y', scopeY + 1);
      scope.setAttribute('width', scopeWidth - 2);
      scope.setAttribute('height', scopeHeight - 2);
      /*
                    line1.setAttribute("x1", scopeX + 1);
                    line1.setAttribute("y1", scopeY + 1);
                    line1.setAttribute("x2", scopeX + 1 + scopeWidth - 2);
                    line1.setAttribute("y2", scopeY + 1 + scopeHeight - 2);
                    line2.setAttribute("x1", scopeX + 1);
                    line2.setAttribute("y1", scopeY + 1 + scopeHeight - 2);
                    line2.setAttribute("x2", scopeX + 1 + scopeWidth - 2);
                    line2.setAttribute("y2", scopeY + 1);
                  */
    };

    window.thumb.updateThumbScope = () => {
      const scope = document.getElementById('scope');
      const line1 = document.getElementById('line1');
      const line2 = document.getElementById('line2');
      _updateThumbScope(window.main, window.thumb, scope, line1, line2);
    };
    window.thumb.updateThumbScope();

    const _updateMainViewPan = (clientX, clientY, scopeContainer, main, thumb) => {
      const dim = scopeContainer.getBoundingClientRect(),
        mainWidth = main.getSizes().width,
        mainHeight = main.getSizes().height,
        mainZoom = main.getSizes().realZoom,
        thumbWidth = thumb.getSizes().width,
        thumbHeight = thumb.getSizes().height,
        thumbZoom = thumb.getSizes().realZoom;

      const thumbPanX = clientX - dim.left - (thumbWidth / 2);
      const thumbPanY = clientY - dim.top - (thumbHeight / 2);
      const mainPanX = -(thumbPanX * mainZoom) / thumbZoom;
      const mainPanY = -(thumbPanY * mainZoom) / thumbZoom;
      main.pan({ x: mainPanX, y: mainPanY });
    };

    const updateMainViewPan = (evt) => {
      if (evt.which === 0 && evt.button === 0) {
        return false;
      }
      const scopeContainer = document.getElementById('scopeContainer');
      return _updateMainViewPan(evt.clientX, evt.clientY, scopeContainer, window.main, window.thumb);
    };

    const scopeContainer = document.getElementById('scopeContainer');
    scopeContainer.addEventListener('click', (evt) => {
      updateMainViewPan(evt);
    });

    scopeContainer.addEventListener('mousemove', (evt) => {
      updateMainViewPan(evt);
    });
  };

  // Do stuff with the graph
  const beforePan = function (oldPan, newPan) { // eslint-disable-line func-names
    const gutterWidth = 100,
      gutterHeight = 100,
      // Computed variables
      sizes = this.getSizes(),
      leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth,
      rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom),
      topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight,
      bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom);
    const customPan = {};
    customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
    customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));
    return customPan;
  }
