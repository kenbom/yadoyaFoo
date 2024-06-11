import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C3nOu5et.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_qTJMzNug.mjs');
const _page1 = () => import('./chunks/about_8M4Tn5Dg.mjs');
const _page2 = () => import('./chunks/around_Ey6iHdYP.mjs');
const _page3 = () => import('./chunks/littleFar_DUgcn85V.mjs');
const _page4 = () => import('./chunks/index_CHC5R1_Y.mjs');
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
    "middlewareSecret": "496d5c6e-46ce-42a7-afe3-0c1749e1e30a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
