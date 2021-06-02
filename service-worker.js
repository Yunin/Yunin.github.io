/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "091e738bac46ac1c9503c34d9f150b98"
  },
  {
    "url": "assets/css/0.styles.511a40cd.css",
    "revision": "398d08d21673ec60e661f8cede1f040a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/image-20210512143312472.68296dfa.png",
    "revision": "68296dfa4472922d172845a51da0d4dc"
  },
  {
    "url": "assets/img/image-20210512143401039.15813ee5.png",
    "revision": "15813ee5e7a443172b0186dd21b19643"
  },
  {
    "url": "assets/js/1.c1260343.js",
    "revision": "2dbbe991991150d2d2c327c787c0f1ac"
  },
  {
    "url": "assets/js/10.7ec1b5d1.js",
    "revision": "25fd92d668c8afd2211d638267a72f81"
  },
  {
    "url": "assets/js/11.0ec65f7b.js",
    "revision": "93dc2e08ec7bb68af68bafc183498da6"
  },
  {
    "url": "assets/js/12.347b1262.js",
    "revision": "76d5c8c67fe1eae753b5798b68d3efca"
  },
  {
    "url": "assets/js/13.ae4429db.js",
    "revision": "25fdf2d2ac343d0ebdddf3c34081a8f8"
  },
  {
    "url": "assets/js/14.a05fd8e2.js",
    "revision": "2d1c4346a80597a73b70007b6fbfa31d"
  },
  {
    "url": "assets/js/15.01fd7f02.js",
    "revision": "ef37c3d2478a2f52ef837586f76cc5b7"
  },
  {
    "url": "assets/js/3.33d7f2db.js",
    "revision": "3facb2677ab5e69f1cf828f37dc91fad"
  },
  {
    "url": "assets/js/4.444d7c9f.js",
    "revision": "dfceefe70b0a4684f75ce3fc3304d613"
  },
  {
    "url": "assets/js/5.d622ff65.js",
    "revision": "fcce2f97e1af297c8a02369a0535ffbe"
  },
  {
    "url": "assets/js/6.7d133c20.js",
    "revision": "77d0d08990a1005cff7f246abad25027"
  },
  {
    "url": "assets/js/7.d3861278.js",
    "revision": "87fb971af24dfa0c9e02d60365927ca9"
  },
  {
    "url": "assets/js/8.3fa24ff3.js",
    "revision": "b202f8866edca41ca86e19c201ca1065"
  },
  {
    "url": "assets/js/9.b93d2da0.js",
    "revision": "4ba7eabcec40ab6a692506c063b1a1bd"
  },
  {
    "url": "assets/js/app.28467d71.js",
    "revision": "e29dbe328c7e0bb6605c4d726155e7dd"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/design/flit.html",
    "revision": "3b44ded6644bacba5299bd42196f5929"
  },
  {
    "url": "blogs/design/room-name_design.html",
    "revision": "06fe2fddae5e0d4880aa3d2a0dad2dc0"
  },
  {
    "url": "blogs/tools/spock.html",
    "revision": "3d4331c4ad36c9914653fc120028b75a"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "9bd29c33bc1207e7a2e2f34ed0b361e3"
  },
  {
    "url": "categories/index.html",
    "revision": "5dc4a3380be205c405d7eede25822a9e"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "47c5114dc91ce58026079503bf2dac18"
  },
  {
    "url": "categories/Tool/index.html",
    "revision": "fd547e189a33580a2e27cab2bcd81494"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "730747be6e37fcc2d368ec81df290932"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Design/index.html",
    "revision": "a971f728589ea969d10e4cc91f6e1d4c"
  },
  {
    "url": "tag/index.html",
    "revision": "3cba40487b38377ae50a35fad7467f03"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "bbbb28464582f6dd515d315b2e7ae6fc"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "d6e8266ba494527faf6aa85cc6b370dd"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "0cd324f6d832354153871d905d8a5973"
  },
  {
    "url": "timeline/index.html",
    "revision": "40d9f8cd9e9c76cddb10c1c83aa1be9a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
