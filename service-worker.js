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
    "revision": "4491e176d758ef6d6c7a7883884ae357"
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
    "url": "assets/js/1.c1260343.js",
    "revision": "2dbbe991991150d2d2c327c787c0f1ac"
  },
  {
    "url": "assets/js/10.e166a897.js",
    "revision": "4ee64fa66eff129f9583f1908f8fd2f9"
  },
  {
    "url": "assets/js/11.0f1deaae.js",
    "revision": "c375ea33e01f0ea1c16592350c0ae1df"
  },
  {
    "url": "assets/js/12.0e6f288e.js",
    "revision": "1d9e11739e57a1ce6339af124ea89529"
  },
  {
    "url": "assets/js/13.b169a918.js",
    "revision": "17d5b07c68e38d8d759c5b805cfad80b"
  },
  {
    "url": "assets/js/14.17240503.js",
    "revision": "2dd465b3dc104e46e5b6ea8cee8902cb"
  },
  {
    "url": "assets/js/3.6c10322a.js",
    "revision": "0d6839eab601701afcd00ae5b2f8bef7"
  },
  {
    "url": "assets/js/4.9c9fd60d.js",
    "revision": "f4c48ed1cc77acecc378972939cd3fc0"
  },
  {
    "url": "assets/js/5.4e09dd2b.js",
    "revision": "096c76dfa31e3f158ca42b0bdc51f7a2"
  },
  {
    "url": "assets/js/6.62959b9b.js",
    "revision": "bc745b8a768a3bba3b334490dd49d604"
  },
  {
    "url": "assets/js/7.e653531f.js",
    "revision": "38837cca961db630d6df638dbc8416cc"
  },
  {
    "url": "assets/js/8.deff1a2a.js",
    "revision": "caae9e48911e152e1cee61fed9f44e2d"
  },
  {
    "url": "assets/js/9.1645ff1c.js",
    "revision": "c664a5a72ebb7b5d4439a37bea0bdc59"
  },
  {
    "url": "assets/js/app.5ccb1044.js",
    "revision": "f3ed81af2c2be03d1036ee4a1e644189"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/design/room-name_design.html",
    "revision": "e56e84963c31e2c810d39eca1f67488c"
  },
  {
    "url": "blogs/tools/spock.html",
    "revision": "09229fbe0df3b11a00b3c3f441a74be4"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "22fd471455ca5c1527a36a043d396302"
  },
  {
    "url": "categories/index.html",
    "revision": "62adea41cf430ea17677928d97da9859"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "5c9fae19a312a796a6f1aedaa218d417"
  },
  {
    "url": "categories/Tool/index.html",
    "revision": "410844268ee8dcf44e6bc60e225b1c5b"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e70852df5cd47ea22f06769b63c4b23b"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Design/index.html",
    "revision": "697c937ffeaffd033d27de7a67846308"
  },
  {
    "url": "tag/index.html",
    "revision": "dcbeac5f4f9f9d07d0448a883b0903aa"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "93f882ebe0e032a5a3b8450585e8e500"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "fe8472f18de2705c9981cfd4851a89f7"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "a2da38902f12166f5a7ba0ae1f7e399d"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d5e0901de4692affe58ca861dcf5f05"
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
