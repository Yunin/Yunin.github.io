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
    "revision": "0401b229286b024742951a01d7afc143"
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
    "url": "assets/js/15.5f54da14.js",
    "revision": "62b411c91bc0d0b99a6c4dc55b3a5f40"
  },
  {
    "url": "assets/js/16.542e058a.js",
    "revision": "0d3ef6ef0dbe28e0914af923fc1f0783"
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
    "url": "assets/js/9.ab715315.js",
    "revision": "71365e71a8ea12aa9bedcc8167f783c0"
  },
  {
    "url": "assets/js/app.c029e44c.js",
    "revision": "a6d23d2bfd4a964e2eaaf41aa161517c"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/design/flit.html",
    "revision": "d7b90b223f090b50c1f1ca5255c7a499"
  },
  {
    "url": "blogs/design/room-name_design.html",
    "revision": "13b4e5ef17afe4f194e2e5572b6d652a"
  },
  {
    "url": "blogs/tools/spock.html",
    "revision": "42445754ef5359bb0dc78afb40e3e19b"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "6d857fdc25b0b10570044d9801006ba1"
  },
  {
    "url": "categories/index.html",
    "revision": "30f5989f39e18a208881dca1b25db5fb"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "3f851f6cbf2ff859af6070e70ee23605"
  },
  {
    "url": "categories/Tool/index.html",
    "revision": "8d7a09755c280b056794f30a1b629149"
  },
  {
    "url": "docs/tuma.html",
    "revision": "4ec2558ad89fc359b8c7d9b32af94afd"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "518ca5516be070280d08a2644f727ae1"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Design/index.html",
    "revision": "f39f0a4ed429149267a09f051bf75194"
  },
  {
    "url": "tag/index.html",
    "revision": "ce4e13f589d748d1b940dae129457859"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "cba42b2aa89242eb0aae70a9fd8e0b22"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "ce0a4a7435150b01a27ac3475fc97d9a"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "5a0e7fd0ab1d465b93cc5984bc56068a"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2a2070d531a719b55a69c9d70f69c92"
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
