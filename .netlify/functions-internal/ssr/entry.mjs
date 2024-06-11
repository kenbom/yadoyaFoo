import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DukAJUFB.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Cax7kT__.mjs');
const _page1 = () => import('./chunks/about_7Vxfy3Tp.mjs');
const _page2 = () => import('./chunks/around_Dvsw2jCR.mjs');
const _page3 = () => import('./chunks/littleFar_0wiYFTEb.mjs');
const _page4 = () => import('./chunks/index_CgDInLjG.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/around.astro", _page2],
    ["src/pages/littleFar.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "72e86731-1918-4073-ba2b-eb78e7b9cf43"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
