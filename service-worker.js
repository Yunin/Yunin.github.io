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
    "revision": "b4797f5ac7a71b25aaeff133fd215bc6"
  },
  {
    "url": "assets/css/0.styles.1eb03091.css",
    "revision": "05df7833a1b07d8fbe0245f7b74af7f0"
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
    "url": "assets/img/search.77214953.svg",
    "revision": "7721495388609799a2917d9392789f58"
  },
  {
    "url": "assets/js/1.b04ffbe0.js",
    "revision": "920882518e80297dc63bfc5e84240f14"
  },
  {
    "url": "assets/js/10.2cde7547.js",
    "revision": "166cb841ae3e07ba834db6b75f3ccd10"
  },
  {
    "url": "assets/js/11.286a0ebc.js",
    "revision": "d3e6ec931b4bc706fdf7ef1e1529200e"
  },
  {
    "url": "assets/js/12.91671fb9.js",
    "revision": "7ddd959b44b302f621a67563962c6b3b"
  },
  {
    "url": "assets/js/13.7eda21e6.js",
    "revision": "883c6cb1c7b10855dcce78f370f4196f"
  },
  {
    "url": "assets/js/14.604d9a74.js",
    "revision": "50a86133287aec1cb27a1a931abfbe5e"
  },
  {
    "url": "assets/js/15.ac7e15df.js",
    "revision": "c42659903204d3508b83f02effa41a51"
  },
  {
    "url": "assets/js/16.423cd8bc.js",
    "revision": "c2a46238e6f84fb54723e73bca2efa55"
  },
  {
    "url": "assets/js/3.b43d3268.js",
    "revision": "62693bcc70ce69c5fc896b0128d52dcd"
  },
  {
    "url": "assets/js/4.74dd391f.js",
    "revision": "a1c6997ecdd2a65bf4f762b6b16f7cfc"
  },
  {
    "url": "assets/js/5.c4a2a838.js",
    "revision": "5adf25c4d23a65858c3ab1417fdc07e7"
  },
  {
    "url": "assets/js/6.60b556de.js",
    "revision": "6c3240d8246c635fd2866a2ec96fe5e8"
  },
  {
    "url": "assets/js/7.440d5bf9.js",
    "revision": "103f4c3b28538c96c5ae6371a7fac7cb"
  },
  {
    "url": "assets/js/8.b7d4adf4.js",
    "revision": "cb0d8e6aa9442e5bad2ac690317c1832"
  },
  {
    "url": "assets/js/9.a1561351.js",
    "revision": "6087f0e823a548c941142d4205358d0e"
  },
  {
    "url": "assets/js/app.87a2dc73.js",
    "revision": "e66d526d14a33b9194491d617223633e"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/design/flit.html",
    "revision": "a41d90408ef1172ce80b88be025aff2b"
  },
  {
    "url": "blogs/design/room-name_design.html",
    "revision": "7f62dd508a261415446e37b65aa2ead2"
  },
  {
    "url": "blogs/tools/spock.html",
    "revision": "e9e396642252c3e7f0ddb7f04fc188b9"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "4b457ae6e2ba7917fdf562dc47ffb5ca"
  },
  {
    "url": "categories/index.html",
    "revision": "d2d84fcc5bca967c2f54ccca92430b65"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "37fd9a6aff4519ea9b299bf380b1bc47"
  },
  {
    "url": "categories/Tool/index.html",
    "revision": "43ad74f8ed0e039650a6ae7015793c84"
  },
  {
    "url": "docs/tuma.html",
    "revision": "37891c0430dea7b47b275bc4014cb8f0"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "add95cb2f070df38c919ef700d440f99"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Design/index.html",
    "revision": "3ecf95755e3c8909f69f14a11797bdea"
  },
  {
    "url": "tag/index.html",
    "revision": "58cc12286864ac70acfd3abc5d5b5652"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "e9e70eb260faebdc888f7957ed389562"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "eac3b0bb12f8bb3f5305bd646aeeebba"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "1ba350743ac54ebbb55044d5b656cc0d"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb363fce065411dcbc1f10066464a285"
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
