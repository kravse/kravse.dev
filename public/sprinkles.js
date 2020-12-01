var Main = (function() {
  var faviconImg = "data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAGBQTFRFAAAA4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf4Hpf////NWHjhwAAAB50Uk5TAAAZRklKNgVS6vPy9bQQVva+Eb1T7PT3thtNUE87S/BE0QAAAAFiS0dEHwUNEL0AAAAJcEhZcwAAFiUAABYlAUlSJPAAAABxSURBVGje7dlHEoAgFARRMAcMmBX1/sf0ArD7bKzuC7ya9ShFRET0x3SSZoHyotQCQFU3rT/T9RLAML6h7BQZmGMvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQBqwIsKxm87cfIsB5udufeyQ+HCKK0AesWdZsmFZgOgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0wMVQxODo1OToxNSswMDowMGf7UH4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMDFUMTg6NTk6MTUrMDA6MDAWpujCAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MDY4NDkxNTUJ20uDAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMjAtMTItMDEvNmQwODU2ZDJiNmE1MjU5NDE1Y2Y2OTYyZWRjMTc1NWEuaWNvLnBuZ90hWnYAAAAASUVORK5CYII="
  var clearImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaGVYSWZNTQAqAAAACAAEAQYAAwAAAAEAAgAAARIAAwAAAAEAAQAAASgAAwAAAAEAAgAAh2kABAAAAAEAAAA+AAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABgoAMABAAAAAEAAABgAAAAACvM2nUAAALiaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+OTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjk2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CoDIgs4AAAC5SURBVHgB7dAxAQAAAMKg9U9tCF+IQGHAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgy8AwOQYAABzcDL5wAAAABJRU5ErkJggg=="
  var interval;
  var favicon = document.querySelector('link[rel*="icon"]');

  var init = function () {
    animateFavicon();
    window.addEventListener("focus", animateFavicon);
    window.addEventListener("blur", resetFavicon);
    threeJS();
  }
  var resetFavicon = function () {
    clearInterval(interval);
    favicon.href = faviconImg;
  }

  var animateFavicon = function () {
    if (!document.hasFocus()) {
      clearInterval(interval);
      favicon.href = faviconImg;
      return;
    }

    let isFavicon = true;
    clearInterval(interval);
    interval = setInterval(function () {
      favicon.href = isFavicon ? clearImg : faviconImg;
      isFavicon = !isFavicon;
    }, 500);
  };

  var threeJS = function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(-40, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(4, 10, 10);
    var material = new THREE.MeshBasicMaterial({
      color: "#f2dcb8",
      wireframe: true
    });
    var sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);
    camera.position.z = 6;

    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.0005;
      sphere.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }
  }

  return {
    init: init
  }
})();

Main.init();