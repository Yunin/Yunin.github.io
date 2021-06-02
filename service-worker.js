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
    "revision": "479fdb284bc9701db07756ebc90e1972"
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
    "url": "assets/js/11.d54fb40b.js",
    "revision": "277fd27d64f950c6aa5cc89ba38c2cf3"
  },
  {
    "url": "assets/js/12.347b1262.js",
    "revision": "76d5c8c67fe1eae753b5798b68d3efca"
  },
  {
    "url": "assets/js/13.7adae7c0.js",
    "revision": "715c4bb7be561dba5439627d496b99f9"
  },
  {
    "url": "assets/js/14.4d1829bb.js",
    "revision": "40853e7579071f22a4da347f008040c9"
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
    "url": "assets/js/app.dc77388d.js",
    "revision": "6ea0d0a3434e3849c02a8ed7adb55357"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/design/flit.html",
    "revision": "24b42494026d267c787e84c2008f3f57"
  },
  {
    "url": "blogs/design/room-name_design.html",
    "revision": "bc04287d64f90431d9e2287659a6e8a8"
  },
  {
    "url": "blogs/tools/spock.html",
    "revision": "9450645b4a634c506822f4a644325252"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "880072e27eb336fb86a25f807d1b85a5"
  },
  {
    "url": "categories/index.html",
    "revision": "a6a94bb24a7854deabfb04bd4be180c0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e771297a40c24c413a536bf00c4ec8b5"
  },
  {
    "url": "categories/Tool/index.html",
    "revision": "66ab848464fddd7f0e6dc8189b536ec3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a0314c943b681ece395a3262fa6b66cd"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Design/index.html",
    "revision": "d64e724855c854fc8465c056838d02a4"
  },
  {
    "url": "tag/index.html",
    "revision": "178289b628d22193737e79313ccc82e2"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "3a61ae7ecba8cdb0ecc46c8cb78292b6"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "94fb559808bb0026a40492c468408ff2"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "51a233c80d205d2d46d782372e4fd832"
  },
  {
    "url": "timeline/index.html",
    "revision": "502042c9f31b7a44eeb7bdf12080f60d"
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
