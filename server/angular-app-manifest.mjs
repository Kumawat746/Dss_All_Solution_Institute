
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Dss_All_Solution_Institute/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Dss_All_Solution_Institute"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 514, hash: 'bb4120c1b62e5d54787b5e11dad28d88d2ea518b7250f9b13593a1fade1217c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'b0345dd792e877068e6dbd5ba1ce74ddc13e56ffd8a31f6e1a1becaf6424e398', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20849, hash: '394afcfd892ed92c7287fc04bdce32740d84d313105945da68ac560755b68bb3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
