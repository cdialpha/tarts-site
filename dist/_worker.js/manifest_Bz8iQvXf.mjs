globalThis.process ??= {}; globalThis.process.env ??= {};
import { q as decodeKey } from './chunks/astro/server_3CODEi8Y.mjs';
import './chunks/astro-designed-error-pages_rAn8FEFL.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DjVdYPIN.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/","cacheDir":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/node_modules/.astro/","outDir":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/dist/","srcDir":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/","publicDir":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/public/","buildClientDir":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/dist/","buildServerDir":"file:///C:/Users/cdial/OneDrive/Desktop/code/tarts-site/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/about","isIndex":false,"type":"page","pattern":"^\\/fr\\/about\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/about.astro","pathname":"/fr/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/projects","isIndex":false,"type":"page","pattern":"^\\/fr\\/projects\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/projects.astro","pathname":"/fr/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/resources","isIndex":false,"type":"page","pattern":"^\\/fr\\/resources\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/resources.astro","pathname":"/fr/resources","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":false,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/fr/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/fr/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/fr/resources.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/pages/resources.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/fr/about@_@astro":"pages/fr/about.astro.mjs","\u0000@astro-page:src/pages/fr/projects@_@astro":"pages/fr/projects.astro.mjs","\u0000@astro-page:src/pages/fr/resources@_@astro":"pages/fr/resources.astro.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"pages/fr.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/resources@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bz8iQvXf.mjs","C:/Users/cdial/OneDrive/Desktop/code/tarts-site/node_modules/.pnpm/unstorage@1.17.1/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:/Users/cdial/OneDrive/Desktop/code/tarts-site/node_modules/.pnpm/astro@5.15.3_@types+node@24_96ebfd6ab75e050308d71ec787578d96/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Z-WtaBLP.mjs","C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.CP4c0bXi.js","C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/components/LanguageToggle.astro?astro&type=script&index=0&lang.ts":"_astro/LanguageToggle.astro_astro_type_script_index_0_lang.D2WwQt0p.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const c=window.location.pathname,e=c.startsWith(\"/fr\")?\"fr\":\"en\",t=document.getElementById(\"home\");t&&(t.href=e===\"en\"?\"/\":\"/fr\");const o=document.getElementById(\"about\");o&&(o.href=e===\"en\"?\"/about\":\"/fr/about\");const r=document.getElementById(\"resources\");r&&(r.href=e===\"en\"?\"/resources\":\"/fr/resources\");const n=document.getElementById(\"projects\");n&&(n.href=e===\"en\"?\"/projects\":\"/fr/projects\");"],["C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/components/LanguageToggle.astro?astro&type=script&index=0&lang.ts","function h(c){const e=window.location.pathname,i=e.startsWith(\"/fr/\"),s=navigator.language.toLowerCase().startsWith(\"fr\");if(!i&&s&&c===\"en\"){window.location.replace(`/fr/${e}`);return}const r=document.getElementById(\"lang-select\");r&&r.addEventListener(\"change\",f=>{const a=f.target.value,t=window.location.pathname,o=t===\"/fr\"||t.startsWith(\"/fr/\");if(a===\"fr\"&&!o){const n=`/fr${t===\"/\"?\"/\":t}`;window.location.href=n;return}if(a===\"en\"&&o){const n=t.replace(/^\\/fr/,\"\");window.location.href=n||\"/\";return}})}const l=window.location.pathname.startsWith(\"/fr\")?\"fr\":\"en\";h(l);"]],"assets":["/_astro/east.DY50t-Vr.png","/_astro/man-profile.CQ_NJCvI.png","/_astro/woman-profile.CQ-gBlDb.png","/_astro/adelia.DtGkfT7o.png","/_astro/ed.9P0H2eCy.png","/_astro/global.S8Ly1iwT.png","/_astro/cmr.CyS3TXMz.png","/_astro/clouds.DPbwvonl.avif","/_astro/thanks-community.DcTyH5km.jpeg","/_astro/home2.DeRkjH_3.jpeg","/_astro/lab.CSQsN_-3.jpeg","/_astro/plant.Dm8UxfMH.png","/_astro/protect.DBG6t-dU.png","/_astro/teach.CZcahLC2.png","/_astro/book.Dc_lTTSM.png","/_astro/dragonfruit.BcQhAQbg.jpeg","/_astro/team-reading.RvvU1KiK.jpeg","/_astro/womens-group.CudD4txA.jpeg","/_astro/thanks-community.ffPpOQ7_.webp","/_astro/thanks-students-wide.Bg0MI66e.png","/_astro/calvin-tarts.C4wQXE4h.png","/_astro/library.DyZdsH5E.jpeg","/_astro/home1.DljbASQD.jpeg","/_astro/thanks-community-wide.Cyljux5H.webp","/_astro/farm.BImOkIgs.jpeg","/_astro/about-hero.Bf7OptVG.jpg","/_astro/farm_2.DALCNhdB.jpeg","/_astro/ndam-tarts.BYv_BnCd.png","/_astro/resource-hero.2pdlC77q.jpeg","/_astro/soil-texture-7.ClevjGDh.avif","/_astro/projects-hero.Bq-ryDZb.jpeg","/_astro/thanks-students.CHQdyVlw.jpg","/_astro/farm-no-sky.Gc5uvAFn.png","/_astro/tarts-logo-only.CSqRUtmg.png","/_astro/about.Be4zHvTL.css","/favicon.svg","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_astro/fonts/2aa74d20f8ca713c.woff2","/_astro/fonts/a1f0033b9f5ba04c.woff2","/_astro/fonts/a496c38eaf0e5b58.woff2","/_worker.js/chunks/astro-designed-error-pages_rAn8FEFL.mjs","/_worker.js/chunks/astro_C_cUQvbG.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/cmr_BO8RvJ1e.mjs","/_worker.js/chunks/Hero_BQbheifh.mjs","/_worker.js/chunks/index_BvO9efou.mjs","/_worker.js/chunks/Layout_vqfNLlX8.mjs","/_worker.js/chunks/noop-middleware_DjVdYPIN.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/projects-hero_DHnFvgii.mjs","/_worker.js/chunks/remote_BC1y8RCW.mjs","/_worker.js/chunks/resource-hero_MTfErZfa.mjs","/_worker.js/chunks/sharp_Z-WtaBLP.mjs","/_worker.js/chunks/team-reading_luPRHJVM.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_C6lcMdfM.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/fr.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/projects.astro.mjs","/_worker.js/pages/resources.astro.mjs","/_worker.js/_astro/about-hero.Bf7OptVG.jpg","/_worker.js/_astro/about.Be4zHvTL.css","/_worker.js/_astro/adelia.DtGkfT7o.png","/_worker.js/_astro/book.Dc_lTTSM.png","/_worker.js/_astro/calvin-tarts.C4wQXE4h.png","/_worker.js/_astro/clouds.DPbwvonl.avif","/_worker.js/_astro/cmr.CyS3TXMz.png","/_worker.js/_astro/dragonfruit.BcQhAQbg.jpeg","/_worker.js/_astro/east.DY50t-Vr.png","/_worker.js/_astro/ed.9P0H2eCy.png","/_worker.js/_astro/farm-no-sky.Gc5uvAFn.png","/_worker.js/_astro/farm.BImOkIgs.jpeg","/_worker.js/_astro/farm_2.DALCNhdB.jpeg","/_worker.js/_astro/global.S8Ly1iwT.png","/_worker.js/_astro/home1.DljbASQD.jpeg","/_worker.js/_astro/home2.DeRkjH_3.jpeg","/_worker.js/_astro/lab.CSQsN_-3.jpeg","/_worker.js/_astro/library.DyZdsH5E.jpeg","/_worker.js/_astro/man-profile.CQ_NJCvI.png","/_worker.js/_astro/ndam-tarts.BYv_BnCd.png","/_worker.js/_astro/plant.Dm8UxfMH.png","/_worker.js/_astro/projects-hero.Bq-ryDZb.jpeg","/_worker.js/_astro/protect.DBG6t-dU.png","/_worker.js/_astro/resource-hero.2pdlC77q.jpeg","/_worker.js/_astro/soil-texture-7.ClevjGDh.avif","/_worker.js/_astro/tarts-logo-only.CSqRUtmg.png","/_worker.js/_astro/teach.CZcahLC2.png","/_worker.js/_astro/team-reading.RvvU1KiK.jpeg","/_worker.js/_astro/thanks-community-wide.Cyljux5H.webp","/_worker.js/_astro/thanks-community.DcTyH5km.jpeg","/_worker.js/_astro/thanks-community.ffPpOQ7_.webp","/_worker.js/_astro/thanks-students-wide.Bg0MI66e.png","/_worker.js/_astro/thanks-students.CHQdyVlw.jpg","/_worker.js/_astro/woman-profile.CQ-gBlDb.png","/_worker.js/_astro/womens-group.CudD4txA.jpeg","/_worker.js/chunks/astro/server_3CODEi8Y.mjs","/_worker.js/pages/fr/about.astro.mjs","/_worker.js/pages/fr/projects.astro.mjs","/_worker.js/pages/fr/resources.astro.mjs","/about/index.html","/fr/about/index.html","/fr/projects/index.html","/fr/resources/index.html","/fr/index.html","/projects/index.html","/resources/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"Pr6bVdnUTmAVLvfnMn9uFKaguGoLEdtxd9Z15LjIfnU=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
