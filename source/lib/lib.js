/**
 * Medium-like Image Plugin
 * Author: github.com/ele828
 */

;(function() {
    var loaded = [];
    var bannersObj = document.querySelectorAll('.banner');
    var banners = Array.prototype.slice.apply(bannersObj);

    function getPos(el) {
        for (var lx=0, ly=0; el != null;
             lx += el.offsetLeft,
             ly += el.offsetTop,
             el = el.offsetParent ) {}
        return {x: lx,y: ly};
    }

    function loadOneImage(banner, i) {
      var imgtop = getPos(banner).y
      var scrollY = window.scrollY;
      var vpheight = window.innerHeight;
      // console.log(imgtop, scrollY, vpheight)
      if (scrollY >= imgtop - vpheight) {
        // console.log('img showed');
        if (!loaded[i]) {
          loadLargeImage(banner);
          loaded[i] = true;
        }
      }
    }

    function loadSmallImage(banner) {
        var imgSmall = banner.querySelector('.img-small')
        var img = new Image(),
            width = imgSmall.dataset.width,
            height = imgSmall.dataset.height;

        img.src = imgSmall.src
        img.addEventListener('load', function (e) {
          imgSmall.classList.add('loaded')
        }, false)
    }

    function loadLargeImage(banner) {
        var imgSmall = banner.querySelector('.img-small')
        var imgLarge = new Image()
        imgLarge.src = imgSmall.dataset.large
        imgLarge.addEventListener('load',function (e) {
          imgLarge.classList.add('loaded')
          imgSmall.classList.add('faded')
        }, false)
        
        imgLarge.classList.add('img-large')
        imgSmall.parentNode.appendChild(imgLarge)
    }

    function throttle(fn, intv) {
      var __self = fn
        , timer
        , firstTime = true;

        return function() {
          var args = arguments
            , __me = this;

          if( firstTime ) {
              __self.apply(__me, args);
              return firstTime = false;
          }

          if( timer ) {
            return false;
          }

          timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
            __self.apply(__me, args);
          }, intv || 500);

        };
    };

    function onLoad() {
      banners.forEach(function(banner, i) {
        setTimeout(function() {
          loadOneImage(banner, i)
        }, 50);
      })
    }

    // Mobile Client Compatible
    var innerWidth = window.innerWidth;
    function reset(banner) {
      var width = parseInt(banner.style.width),
          height = parseInt(banner.style.height);

      if (innerWidth < 480) {
        if (width < innerWidth) return;
        var ratio = width / innerWidth;
        banner.style.width = width / ratio + 'px';
        banner.style.height = height / ratio + 'px';
      }

    }

    // Init images if needed
    onLoad();
    // Load all thumbnails
    banners.forEach(reset)
    banners.forEach(loadSmallImage);
    window.addEventListener('scroll', throttle(onLoad, 800));

})()
