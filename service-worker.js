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
    "revision": "b5a681c8bc241b8bfd27488a6a9021d8"
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
    "url": "assets/js/14.3abfc232.js",
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
    "url": "assets/js/app.cade9c2b.js",
    "revision": "245d061a9aed89f1c7c9f70a7678b5d9"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/design/flit.html",
    "revision": "b73019700775a3b73362ae1580184c47"
  },
  {
    "url": "blogs/design/room-name_design.html",
    "revision": "963461b5018858e217ae3ab1cb2258fa"
  },
  {
    "url": "blogs/tools/spockce-shi-kuang-jia-shi-yong-zhi-bei.html",
    "revision": "aeab462b9c1a0ceb9567c7d0aa40d552"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "5548135b665f8113ddd1e11cc97e0977"
  },
  {
    "url": "categories/index.html",
    "revision": "0e652c073c0ad0c4e3fc17477e9c594b"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "f6392bb781c388a896c2977895f83adf"
  },
  {
    "url": "categories/Tool/index.html",
    "revision": "ea60d16048e674bbaaa5907e06246259"
  },
  {
    "url": "docs/tuma.html",
    "revision": "c4b1cedeedd823bfded0f5c2b3eda3fb"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "9f68c5e9ba18031d8787e3ffd6fbed7c"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Design/index.html",
    "revision": "5be7e910f77aa641f5e6c21966fac500"
  },
  {
    "url": "tag/index.html",
    "revision": "34bff855a6790183e90e93ffcc85a1d7"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "5d43254027256690868ba6607043415e"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "24ebadf1f720c66120e895efe18911bb"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "c6a1ce4c5ad010cda04470b8bdb4735d"
  },
  {
    "url": "timeline/index.html",
    "revision": "57cdb6854d1758085ffa600addc99165"
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
