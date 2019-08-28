const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Fredrik/Documents/Sealab Ocean Group/kildekode/glowing-octo-couscous/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Fredrik/Documents/Sealab Ocean Group/kildekode/glowing-octo-couscous/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Fredrik/Documents/Sealab Ocean Group/kildekode/glowing-octo-couscous/src/pages/index.js"))),
  "component---src-pages-shop-positioning-js": hot(preferDefault(require("/Users/Fredrik/Documents/Sealab Ocean Group/kildekode/glowing-octo-couscous/src/pages/shop/positioning.js")))
}

