globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_IgC5kHL1.mjs';
import { manifest } from './manifest_vHUIY7ow.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/blog.astro.mjs');
const _page2 = () => import('./pages/blogs/resisting-urge-to-clean.astro.mjs');
const _page3 = () => import('./pages/donate.astro.mjs');
const _page4 = () => import('./pages/fr/about.astro.mjs');
const _page5 = () => import('./pages/fr/blog.astro.mjs');
const _page6 = () => import('./pages/fr/donate.astro.mjs');
const _page7 = () => import('./pages/fr/projects/animals.astro.mjs');
const _page8 = () => import('./pages/fr/projects/community.astro.mjs');
const _page9 = () => import('./pages/fr/projects/foodsystems.astro.mjs');
const _page10 = () => import('./pages/fr/projects/soil.astro.mjs');
const _page11 = () => import('./pages/fr/projects.astro.mjs');
const _page12 = () => import('./pages/fr.astro.mjs');
const _page13 = () => import('./pages/projects/animals.astro.mjs');
const _page14 = () => import('./pages/projects/community.astro.mjs');
const _page15 = () => import('./pages/projects/foodsystems.astro.mjs');
const _page16 = () => import('./pages/projects/soil.astro.mjs');
const _page17 = () => import('./pages/projects.astro.mjs');
const _page18 = () => import('./pages/resources.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/blog.astro", _page1],
    ["src/pages/blogs/resisting-urge-to-clean.astro", _page2],
    ["src/pages/donate.astro", _page3],
    ["src/pages/fr/about.astro", _page4],
    ["src/pages/fr/blog.astro", _page5],
    ["src/pages/fr/donate.astro", _page6],
    ["src/pages/fr/projects/animals.astro", _page7],
    ["src/pages/fr/projects/community.astro", _page8],
    ["src/pages/fr/projects/foodsystems.astro", _page9],
    ["src/pages/fr/projects/soil.astro", _page10],
    ["src/pages/fr/projects.astro", _page11],
    ["src/pages/fr/index.astro", _page12],
    ["src/pages/projects/animals.astro", _page13],
    ["src/pages/projects/community.astro", _page14],
    ["src/pages/projects/foodsystems.astro", _page15],
    ["src/pages/projects/soil.astro", _page16],
    ["src/pages/projects.astro", _page17],
    ["src/pages/resources.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
