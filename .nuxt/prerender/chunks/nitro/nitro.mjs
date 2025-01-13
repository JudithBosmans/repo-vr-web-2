import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { getRequestHeader, splitCookiesString, setResponseStatus, setResponseHeader, send, getRequestHeaders, eventHandler, appendResponseHeader, removeResponseHeader, createError, getResponseHeader, getQuery, getCookie, defineEventHandler, handleCacheHeaders, createEvent, fetchWithEvent, isEvent, getResponseStatus, setResponseHeaders, setHeaders, sendRedirect, proxyRequest, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/h3/dist/index.mjs';
import { withQuery, joinURL, decodePath, withLeadingSlash, withoutTrailingSlash, parseURL, isRelative, withoutBase, getQuery as getQuery$1, joinRelativeURL } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ufo/dist/index.mjs';
import destr$1, { destr } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unenv/runtime/fetch/index.mjs';
import { klona } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/klona/dist/index.mjs';
import defu$1, { defu, defuFn } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/defu/dist/defu.mjs';
import { kebabCase, pascalCase, camelCase, snakeCase } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/scule/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unstorage/drivers/lru-cache.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/radix3/dist/index.mjs';
import { getContext } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unctx/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, isAbsolute } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/pathe/dist/index.mjs';
import { hash } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ohash/dist/index.mjs';
import { unified } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unified/index.js';
import { toString } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark/index.js';
import { stringifyPosition } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/micromark-util-sanitize-uri/index.js';
import slugify from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/slugify/slugify.js';
import remarkParse from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-mdc/dist/index.mjs';
import remarkEmoji from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/rehype-raw/index.js';
import { detab } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/detab/index.js';
import { toString as toString$1 } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/github-slugger/index.js';
import MiniSearch from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/minisearch/dist/es/index.js';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/ipx/dist/index.mjs';

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"-mode\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"-mode\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _QLb2zdXEJJ = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _QLb2zdXEJJ
];

const assets$1 = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-KwLLU0R6nPp+zjvjc+Wox3OeKSQ\"",
    "mtime": "2025-01-13T16:05:41.517Z",
    "size": 6148,
    "path": "../../.output/public/.DS_Store"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2025-01-13T16:05:41.517Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/_data/homepage.json": {
    "type": "application/json",
    "etag": "\"56-A7OCLMWs45lu1hRadIn674dtPx8\"",
    "mtime": "2025-01-13T16:05:41.470Z",
    "size": 86,
    "path": "../../.output/public/_data/homepage.json"
  },
  "/_data/menus.json": {
    "type": "application/json",
    "etag": "\"15a-tChNkENLib2CoW0jxMcRV2q6FGM\"",
    "mtime": "2025-01-13T16:05:41.470Z",
    "size": 346,
    "path": "../../.output/public/_data/menus.json"
  },
  "/_data/settings.json": {
    "type": "application/json",
    "etag": "\"9b-dFd4Xzbf06sZjo1eZdxOjENHj4g\"",
    "mtime": "2025-01-13T16:05:41.471Z",
    "size": 155,
    "path": "../../.output/public/_data/settings.json"
  },
  "/_data/tags.json": {
    "type": "application/json",
    "etag": "\"5e-kD8FCqc7k8Ksx1rbJe4mGFfBcpI\"",
    "mtime": "2025-01-13T16:05:41.471Z",
    "size": 94,
    "path": "../../.output/public/_data/tags.json"
  },
  "/admin/config.yml": {
    "type": "text/yaml; charset=utf-8",
    "etag": "\"35c7-u5xfzKyTMjJ7qY6v3buLUXnqqoA\"",
    "mtime": "2025-01-13T16:05:41.517Z",
    "size": 13767,
    "path": "../../.output/public/admin/config.yml"
  },
  "/admin/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"213-9Mm933KalA0fubBQkmPQ4lX0XB4\"",
    "mtime": "2025-01-13T16:05:41.516Z",
    "size": 531,
    "path": "../../.output/public/admin/index.html"
  },
  "/img/alexandre-lallemand-vn9s31R3n4Q-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"429c14-K7s6vYCCSSJeT3VWr6u1lUzYR5M\"",
    "mtime": "2025-01-13T16:05:41.484Z",
    "size": 4365332,
    "path": "../../.output/public/img/alexandre-lallemand-vn9s31R3n4Q-unsplash.jpg"
  },
  "/img/egor-myznik-4LKNEltLkU4-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"bb177-jPCfupUIB0FUnhlWtYok8GTtfko\"",
    "mtime": "2025-01-13T16:05:41.474Z",
    "size": 766327,
    "path": "../../.output/public/img/egor-myznik-4LKNEltLkU4-unsplash.jpg"
  },
  "/img/elimende-inagella-oj8ahnj18gc-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"13050f-AstDpSc7wVTc44IeZhEqP+YejHw\"",
    "mtime": "2025-01-13T16:05:41.508Z",
    "size": 1246479,
    "path": "../../.output/public/img/elimende-inagella-oj8ahnj18gc-unsplash.jpg"
  },
  "/img/jake-noble-yF8r-mICZ78-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"147a36-XG2riauVCNPkeGwcMqOg1KEpaTc\"",
    "mtime": "2025-01-13T16:05:41.477Z",
    "size": 1342006,
    "path": "../../.output/public/img/jake-noble-yF8r-mICZ78-unsplash.jpg"
  },
  "/img/jonthesquirrel-nF1ISirk37Q-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad082-8eLFJ2hGINij7o++0qjpXHT8SZ8\"",
    "mtime": "2025-01-13T16:05:41.502Z",
    "size": 708738,
    "path": "../../.output/public/img/jonthesquirrel-nF1ISirk37Q-unsplash.jpg"
  },
  "/img/kajetan-powolny-B46b4P8bOqE-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"135f48-eJmRDcn4bLBtfvsLMyjsqcC1hUs\"",
    "mtime": "2025-01-13T16:05:41.481Z",
    "size": 1269576,
    "path": "../../.output/public/img/kajetan-powolny-B46b4P8bOqE-unsplash.jpg"
  },
  "/img/kajetan-powolny-_u7b6IVZV8Q-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"215352-N2MGHjjQExN9SjqX9kGCYyR2DfY\"",
    "mtime": "2025-01-13T16:05:41.481Z",
    "size": 2184018,
    "path": "../../.output/public/img/kajetan-powolny-_u7b6IVZV8Q-unsplash.jpg"
  },
  "/img/marten-bjork-z2eglcjob40-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"17f14b-MLt/GFL8h+3RIrPYd6ptkHmw8rk\"",
    "mtime": "2025-01-13T16:05:41.490Z",
    "size": 1569099,
    "path": "../../.output/public/img/marten-bjork-z2eglcjob40-unsplash.jpg"
  },
  "/img/matze-bob-rq8i6_hg_og-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ac5c2-FP54oJrOYghityoGWQV1m8OWCX0\"",
    "mtime": "2025-01-13T16:05:41.499Z",
    "size": 1754562,
    "path": "../../.output/public/img/matze-bob-rq8i6_hg_og-unsplash.jpg"
  },
  "/img/mika-korhonen--xiyLfBYy_Q-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b1c2f-2xiDOuolDOZcbuWLgqeOEy2MRVA\"",
    "mtime": "2025-01-13T16:05:41.493Z",
    "size": 2825263,
    "path": "../../.output/public/img/mika-korhonen--xiyLfBYy_Q-unsplash.jpg"
  },
  "/img/pan-polanscii-sdmvpx5jh4u-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"a8830-DU6ByIaM2XFuSLmopCVAn5Bk4KA\"",
    "mtime": "2025-01-13T16:05:41.497Z",
    "size": 690224,
    "path": "../../.output/public/img/pan-polanscii-sdmvpx5jh4u-unsplash.jpg"
  },
  "/img/parrish-freeman-Wi_Kun_mstU-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"239a55-+fX+1ExJvF/i/LWmCeipc49svEo\"",
    "mtime": "2025-01-13T16:05:41.495Z",
    "size": 2333269,
    "path": "../../.output/public/img/parrish-freeman-Wi_Kun_mstU-unsplash.jpg"
  },
  "/img/pat-krupa-oM9L2V90-i4-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"a383c-ZpR1Bd8oykVK7gCg03wKwYOmp3c\"",
    "mtime": "2025-01-13T16:05:41.502Z",
    "size": 669756,
    "path": "../../.output/public/img/pat-krupa-oM9L2V90-i4-unsplash.jpg"
  },
  "/img/pierre-chatel-innocenti-2MoEcGNUj-I-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"a9010-LGN8/+Jsy1vQK74u9k4BxFf+iH0\"",
    "mtime": "2025-01-13T16:05:41.503Z",
    "size": 692240,
    "path": "../../.output/public/img/pierre-chatel-innocenti-2MoEcGNUj-I-unsplash.jpg"
  },
  "/img/pierre-chatel-innocenti-amlcrqr6wns-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"c6c19-JPgvhpZXAt1brJPS2hycsg+/mhg\"",
    "mtime": "2025-01-13T16:05:41.507Z",
    "size": 814105,
    "path": "../../.output/public/img/pierre-chatel-innocenti-amlcrqr6wns-unsplash.jpg"
  },
  "/img/pierre-chatel-innocenti-dWBoc5jWYhY-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"85ee9-kSGTlEZjLYlrnlnOROwhitJzCc8\"",
    "mtime": "2025-01-13T16:05:41.507Z",
    "size": 548585,
    "path": "../../.output/public/img/pierre-chatel-innocenti-dWBoc5jWYhY-unsplash.jpg"
  },
  "/img/pierre-chatel-innocenti-xovRcLRpX20-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"cb758-tzeEEDfNs3l/6GLf+2keHGlTQrI\"",
    "mtime": "2025-01-13T16:05:41.509Z",
    "size": 833368,
    "path": "../../.output/public/img/pierre-chatel-innocenti-xovRcLRpX20-unsplash.jpg"
  },
  "/img/pierre-chatel-innocenti-zR2dp_ICXlg-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"17fc18-9AIML+SDSlgZJJG6K5UolCQrL7Y\"",
    "mtime": "2025-01-13T16:05:41.518Z",
    "size": 1571864,
    "path": "../../.output/public/img/pierre-chatel-innocenti-zR2dp_ICXlg-unsplash.jpg"
  },
  "/img/profile.png": {
    "type": "image/png",
    "etag": "\"115718-wDjaH13cCOX4xrwdM9v51o92I9o\"",
    "mtime": "2025-01-13T16:05:41.515Z",
    "size": 1136408,
    "path": "../../.output/public/img/profile.png"
  },
  "/img/uve-sanchez-sILW2r09wOk-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"38cdc7-hCCaTpeJFiIfQpAZWy/k+mET5yg\"",
    "mtime": "2025-01-13T16:05:41.519Z",
    "size": 3722695,
    "path": "../../.output/public/img/uve-sanchez-sILW2r09wOk-unsplash.jpg"
  },
  "/img/vlado-paunovic-N5wxAd5FUVo-unsplash.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf2ea-yknPgqAZiAfStV1e9PMkxwW0GaA\"",
    "mtime": "2025-01-13T16:05:41.514Z",
    "size": 848618,
    "path": "../../.output/public/img/vlado-paunovic-N5wxAd5FUVo-unsplash.jpg"
  },
  "/_nuxt/3mjM42ye.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"780-TzSjuWvTVI8ezEr3YbY8J8C/W+k\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 1920,
    "path": "../../.output/public/_nuxt/3mjM42ye.js"
  },
  "/_nuxt/B613G7JW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"243-IZ1TreukTACWcgE/OnuQJa+Am1w\"",
    "mtime": "2025-01-13T16:05:41.447Z",
    "size": 579,
    "path": "../../.output/public/_nuxt/B613G7JW.js"
  },
  "/_nuxt/B6FGx6D7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e4c-1iOnJ1VV9jX666AxMO03ew7t+tA\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 24140,
    "path": "../../.output/public/_nuxt/B6FGx6D7.js"
  },
  "/_nuxt/B8RuK_Wa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b6-iJfXoSilU1rdpAQkcxJM+4Bx07g\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 694,
    "path": "../../.output/public/_nuxt/B8RuK_Wa.js"
  },
  "/_nuxt/BAo_IcFU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"405-uMJZstadS8dBiQk5o39AOcvd4sg\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 1029,
    "path": "../../.output/public/_nuxt/BAo_IcFU.js"
  },
  "/_nuxt/BIycKfD8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64-43feQCGyw2PyaZT05/VubqEROao\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 100,
    "path": "../../.output/public/_nuxt/BIycKfD8.js"
  },
  "/_nuxt/BKA_JlKK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"af6-mD0RUoXAdATWUCXd2FROSMSOsxI\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 2806,
    "path": "../../.output/public/_nuxt/BKA_JlKK.js"
  },
  "/_nuxt/BLQdVnOl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b0-6pyz9HTDkbYz4l/nolhRuMEujXo\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 176,
    "path": "../../.output/public/_nuxt/BLQdVnOl.js"
  },
  "/_nuxt/BMkI4rwF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2aa-suo8PFIacKkJivfVPRJyDNF58ms\"",
    "mtime": "2025-01-13T16:05:41.448Z",
    "size": 682,
    "path": "../../.output/public/_nuxt/BMkI4rwF.js"
  },
  "/_nuxt/BNJJ2eaP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"551-QjTXoBPvKK8NCOkXQsCbJ1a1oCc\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 1361,
    "path": "../../.output/public/_nuxt/BNJJ2eaP.js"
  },
  "/_nuxt/BPi3SZrI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d52-h8hbtsz+IX6euMFvf3u0COJhqfo\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 3410,
    "path": "../../.output/public/_nuxt/BPi3SZrI.js"
  },
  "/_nuxt/BX8F7uLt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a388-9eAriiCmODwWZ2tjM2CqesXN4sA\"",
    "mtime": "2025-01-13T16:05:41.450Z",
    "size": 238472,
    "path": "../../.output/public/_nuxt/BX8F7uLt.js"
  },
  "/_nuxt/BXMlkd5k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d4-w83dk1R2dXQBWFjfYtPQWXKs/lM\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 724,
    "path": "../../.output/public/_nuxt/BXMlkd5k.js"
  },
  "/_nuxt/Bd33shbQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"626f-NsLgJZTHFLihgdgnNXRW/zAGCwo\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 25199,
    "path": "../../.output/public/_nuxt/Bd33shbQ.js"
  },
  "/_nuxt/BdJbEgD-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d13-aFIfaf4Ks5EHQdmMbDrNwMSI8FE\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 3347,
    "path": "../../.output/public/_nuxt/BdJbEgD-.js"
  },
  "/_nuxt/BjhXvy5f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-f6K1pihsgF+4e3ZD/UocxaPF+Aw\"",
    "mtime": "2025-01-13T16:05:41.449Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/BjhXvy5f.js"
  },
  "/_nuxt/BlJLm-Ip.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"261-CoyWIL3/yHRdXWlJ9gbDKpB0rWs\"",
    "mtime": "2025-01-13T16:05:41.450Z",
    "size": 609,
    "path": "../../.output/public/_nuxt/BlJLm-Ip.js"
  },
  "/_nuxt/BmoQ9d9m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"334-ucJOYbrn81Z6u8RFkY0BgYGXg5s\"",
    "mtime": "2025-01-13T16:05:41.451Z",
    "size": 820,
    "path": "../../.output/public/_nuxt/BmoQ9d9m.js"
  },
  "/_nuxt/Bn3Y2fE0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"449-oisgRRZuAl3GBv99m83ZO+781vY\"",
    "mtime": "2025-01-13T16:05:41.451Z",
    "size": 1097,
    "path": "../../.output/public/_nuxt/Bn3Y2fE0.js"
  },
  "/_nuxt/BnUT7S_l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1458-embDz6iYdxksWesWFFYR/2039z8\"",
    "mtime": "2025-01-13T16:05:41.450Z",
    "size": 5208,
    "path": "../../.output/public/_nuxt/BnUT7S_l.js"
  },
  "/_nuxt/BoSerzur.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"45ac-ivYeJME3jJ196Bi7jB7N/dT5sFI\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 17836,
    "path": "../../.output/public/_nuxt/BoSerzur.js"
  },
  "/_nuxt/Buyg_8SU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"794f-v10VJpUHVZvcZp2Cu9O9ZqfoGmQ\"",
    "mtime": "2025-01-13T16:05:41.450Z",
    "size": 31055,
    "path": "../../.output/public/_nuxt/Buyg_8SU.js"
  },
  "/_nuxt/BvGKj8Q3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"449-i8WgvvNW6yzP95n//v7O8dVAQZI\"",
    "mtime": "2025-01-13T16:05:41.451Z",
    "size": 1097,
    "path": "../../.output/public/_nuxt/BvGKj8Q3.js"
  },
  "/_nuxt/BvgrRXiS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5c4-43w0Nu050xzjcdLsrEpVP4N9psc\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 1476,
    "path": "../../.output/public/_nuxt/BvgrRXiS.js"
  },
  "/_nuxt/BvtTgf-P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"405-uMJZstadS8dBiQk5o39AOcvd4sg\"",
    "mtime": "2025-01-13T16:05:41.451Z",
    "size": 1029,
    "path": "../../.output/public/_nuxt/BvtTgf-P.js"
  },
  "/_nuxt/Bz9Uipfm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f4-1HwkiJD6smYCQu1i2D6IoNqzaaU\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 500,
    "path": "../../.output/public/_nuxt/Bz9Uipfm.js"
  },
  "/_nuxt/C14DItHk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d6-07rjukuGAGj7161ULVS6TpXg6iY\"",
    "mtime": "2025-01-13T16:05:41.451Z",
    "size": 470,
    "path": "../../.output/public/_nuxt/C14DItHk.js"
  },
  "/_nuxt/C1QY5MzJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ea1b-lx/zu+vjkp/ZR2Mst61KZdRfubk\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 256539,
    "path": "../../.output/public/_nuxt/C1QY5MzJ.js"
  },
  "/_nuxt/C5V9pHyo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17c-KlJr8sEm4buEU4KDx5MMhQO7in8\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 380,
    "path": "../../.output/public/_nuxt/C5V9pHyo.js"
  },
  "/_nuxt/C5ezr94g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b1-9DqVa09/nYJc08yOKpO5oqfYDpw\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 689,
    "path": "../../.output/public/_nuxt/C5ezr94g.js"
  },
  "/_nuxt/CB8KplN9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"445-XauNTfkLRemfD5putiP/lzz1uWg\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 1093,
    "path": "../../.output/public/_nuxt/CB8KplN9.js"
  },
  "/_nuxt/CGcSDOu9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b4-mtZ3/lBt2mD5JYy029WyZ1fL/cc\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 180,
    "path": "../../.output/public/_nuxt/CGcSDOu9.js"
  },
  "/_nuxt/CJJyI23R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33f6-5imqtc53V+1L7Gh5yrcE/WN6WwE\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 13302,
    "path": "../../.output/public/_nuxt/CJJyI23R.js"
  },
  "/_nuxt/CKXQtoxr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"55c2-78HxywfbrXqGbwayvBchWXWEGrI\"",
    "mtime": "2025-01-13T16:05:41.452Z",
    "size": 21954,
    "path": "../../.output/public/_nuxt/CKXQtoxr.js"
  },
  "/_nuxt/COr1qvbD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b7-lnBRPmq+QDpgxguh7Phrud3IfrI\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 183,
    "path": "../../.output/public/_nuxt/COr1qvbD.js"
  },
  "/_nuxt/CRu6j5i4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-vKW1ttsfW5/nerhSOjJDSzCe77I\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/CRu6j5i4.js"
  },
  "/_nuxt/CSHsXBwE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14e-N259lkuaT6Xo8SWauZ85Eid4B0U\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 334,
    "path": "../../.output/public/_nuxt/CSHsXBwE.js"
  },
  "/_nuxt/CStji3o9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"106-NJZBonhgUL6MLcX/BKmDKoPR0QQ\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 262,
    "path": "../../.output/public/_nuxt/CStji3o9.js"
  },
  "/_nuxt/CWPI0Jzt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"99-EAVZM/pHv0PGJjjdnjLumwxzo/Q\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 153,
    "path": "../../.output/public/_nuxt/CWPI0Jzt.js"
  },
  "/_nuxt/CcKEZQ2m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-gSUITqQ7eM5R1MjcFIbUsRKtok4\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 184,
    "path": "../../.output/public/_nuxt/CcKEZQ2m.js"
  },
  "/_nuxt/Cgq0FY3w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23d-qX10x5JPTZrPx9+R4I9rVHp+g48\"",
    "mtime": "2025-01-13T16:05:41.453Z",
    "size": 573,
    "path": "../../.output/public/_nuxt/Cgq0FY3w.js"
  },
  "/_nuxt/CrG5wEdY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec4-0iF//r5y+1pvka5cbNjxKE+0BIg\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 3780,
    "path": "../../.output/public/_nuxt/CrG5wEdY.js"
  },
  "/_nuxt/CucNZsiT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"185-ZHpRlGijeSi6LYhjUxs9LPsUuhQ\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 389,
    "path": "../../.output/public/_nuxt/CucNZsiT.js"
  },
  "/_nuxt/Cz9bHLh-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ed-nMDpAae3zRik7X2l+e1J1cZKync\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 1517,
    "path": "../../.output/public/_nuxt/Cz9bHLh-.js"
  },
  "/_nuxt/CztbaQnP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e-NQHPFjFubRBJrAOZcXllLhIubJI\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 78,
    "path": "../../.output/public/_nuxt/CztbaQnP.js"
  },
  "/_nuxt/D0a5EfXW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"976-L77CjmsT++JGnjgQFziwy/LuE18\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 2422,
    "path": "../../.output/public/_nuxt/D0a5EfXW.js"
  },
  "/_nuxt/D2RnDBdR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b1-9DqVa09/nYJc08yOKpO5oqfYDpw\"",
    "mtime": "2025-01-13T16:05:41.454Z",
    "size": 689,
    "path": "../../.output/public/_nuxt/D2RnDBdR.js"
  },
  "/_nuxt/D4OV-TuU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-8zhryNKN0ssjHjPwPg7/sc5O6oM\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/D4OV-TuU.js"
  },
  "/_nuxt/DA97T1GL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-Wqtt1PAukt7mILHwwQFVh/UESxk\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 184,
    "path": "../../.output/public/_nuxt/DA97T1GL.js"
  },
  "/_nuxt/DIoHPmwO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4ae-w6ThgBCNSjKg580ujyUDwftuLmA\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 1198,
    "path": "../../.output/public/_nuxt/DIoHPmwO.js"
  },
  "/_nuxt/DJMzVIIv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-B8AjHZModSyCQGGOpl+viM8WvBw\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/DJMzVIIv.js"
  },
  "/_nuxt/DLROXqiY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe-Wk0j6C3p/XWaRXgH8nwIzbKh5ws\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 510,
    "path": "../../.output/public/_nuxt/DLROXqiY.js"
  },
  "/_nuxt/DQ0TxoX5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"372-PLzt/3Egn6JhBehUAElgtXDpY84\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 882,
    "path": "../../.output/public/_nuxt/DQ0TxoX5.js"
  },
  "/_nuxt/DQN3XGOj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"243-Fc44QEssfdLVwtrEqmvZjKTuB9U\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 579,
    "path": "../../.output/public/_nuxt/DQN3XGOj.js"
  },
  "/_nuxt/DSXSKy3o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-cOXH20OX5GXoEjKgPbFK1KTaV+k\"",
    "mtime": "2025-01-13T16:05:41.455Z",
    "size": 184,
    "path": "../../.output/public/_nuxt/DSXSKy3o.js"
  },
  "/_nuxt/DYaqzFr_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b9-dC+iUOqOPX2td5/wWagrfW9MFSI\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 185,
    "path": "../../.output/public/_nuxt/DYaqzFr_.js"
  },
  "/_nuxt/DdtyMz1S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd-l1heqJXg2rk4LGNcV7d6o2SqpRw\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 973,
    "path": "../../.output/public/_nuxt/DdtyMz1S.js"
  },
  "/_nuxt/DfeSSdJq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3389-ObDkeiY7mH3/hYfpHihA+ZerojQ\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 13193,
    "path": "../../.output/public/_nuxt/DfeSSdJq.js"
  },
  "/_nuxt/DgGNv4sy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"106-Sb9iPOAx8O3CkFnU85mUEOYjdy4\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 262,
    "path": "../../.output/public/_nuxt/DgGNv4sy.js"
  },
  "/_nuxt/DhMU2YP4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34c-G+JQmPZFIUt72zQjZnNRqOn4Afc\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 844,
    "path": "../../.output/public/_nuxt/DhMU2YP4.js"
  },
  "/_nuxt/Dnd51l0P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"454-nRFS6XJvhFXjKl5SUYB6FRqWSOU\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 1108,
    "path": "../../.output/public/_nuxt/Dnd51l0P.js"
  },
  "/_nuxt/Dr1nINwe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13c-IdNs3DZPPJGVfPU7Jy6kFr2ub4c\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 316,
    "path": "../../.output/public/_nuxt/Dr1nINwe.js"
  },
  "/_nuxt/Dr3n6qPa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"71b-UqfIEcwP3muwSIf8Cl3aMPqKAIU\"",
    "mtime": "2025-01-13T16:05:41.456Z",
    "size": 1819,
    "path": "../../.output/public/_nuxt/Dr3n6qPa.js"
  },
  "/_nuxt/Drawer.DSzPfeqc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b0f-xsym8cD3IrK6JtnFQHKqKVENKr4\"",
    "mtime": "2025-01-13T16:05:41.457Z",
    "size": 2831,
    "path": "../../.output/public/_nuxt/Drawer.DSzPfeqc.css"
  },
  "/_nuxt/Dsv8qCeY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c0-6+wye23r+nvFz0/NFr4boPIaHJA\"",
    "mtime": "2025-01-13T16:05:41.457Z",
    "size": 448,
    "path": "../../.output/public/_nuxt/Dsv8qCeY.js"
  },
  "/_nuxt/Dt52gG-4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"725-aD+ItvEvQEWE+af+XegDGnra5WE\"",
    "mtime": "2025-01-13T16:05:41.457Z",
    "size": 1829,
    "path": "../../.output/public/_nuxt/Dt52gG-4.js"
  },
  "/_nuxt/DziJipHI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11a-zdeo03AwrzAadgQasbnOj/IL6Is\"",
    "mtime": "2025-01-13T16:05:41.457Z",
    "size": 282,
    "path": "../../.output/public/_nuxt/DziJipHI.js"
  },
  "/_nuxt/GhgGlPzT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"243-XhfbYxPpDkS4GkzwDJlvzwcakSg\"",
    "mtime": "2025-01-13T16:05:41.457Z",
    "size": 579,
    "path": "../../.output/public/_nuxt/GhgGlPzT.js"
  },
  "/_nuxt/ImageGallery.DkO3zC9n.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"107b-7pKF3rQKyfvg0TLDUJWt2JS9t9E\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 4219,
    "path": "../../.output/public/_nuxt/ImageGallery.DkO3zC9n.css"
  },
  "/_nuxt/Layout5.qUw1GU-l.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"651-qILP2o4RH7epr9JKO/Z2ErHnmUY\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 1617,
    "path": "../../.output/public/_nuxt/Layout5.qUw1GU-l.css"
  },
  "/_nuxt/ProseCode.B_fgAJq0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 46,
    "path": "../../.output/public/_nuxt/ProseCode.B_fgAJq0.css"
  },
  "/_nuxt/TjsYvWtT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"243-+VWh3cPJaOS/kf29LiaU+er2UZk\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 579,
    "path": "../../.output/public/_nuxt/TjsYvWtT.js"
  },
  "/_nuxt/XFi03LUo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b-RduwVuH3/KOx2qFuOzZT7buwlqk\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/XFi03LUo.js"
  },
  "/_nuxt/XzFXVk-K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a2-dNa88i5BHqKABzDuCv8UzfQrU7g\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 674,
    "path": "../../.output/public/_nuxt/XzFXVk-K.js"
  },
  "/_nuxt/_...BHaimxk7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c-ItKXU6ok8QfhbB2Y4w1uJtYPYEc\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 44,
    "path": "../../.output/public/_nuxt/_...BHaimxk7.css"
  },
  "/_nuxt/_TXFwxH1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b54-Ljxcwlrfu2109LR5L4LHhDWwwRo\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 2900,
    "path": "../../.output/public/_nuxt/_TXFwxH1.js"
  },
  "/_nuxt/_slug_.snYpRpJi.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"46-Asz2f9j0q/K8x3aou4w4BSDi7M4\"",
    "mtime": "2025-01-13T16:05:41.459Z",
    "size": 70,
    "path": "../../.output/public/_nuxt/_slug_.snYpRpJi.css"
  },
  "/_nuxt/aPnHgADT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-c467LtO5UOJAKwolOrWctsbH898\"",
    "mtime": "2025-01-13T16:05:41.458Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/aPnHgADT.js"
  },
  "/_nuxt/adMnWXFJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15ec-Y6Sm1mHf836PIUt4Y6mh612ll0U\"",
    "mtime": "2025-01-13T16:05:41.459Z",
    "size": 5612,
    "path": "../../.output/public/_nuxt/adMnWXFJ.js"
  },
  "/_nuxt/base.L8-VYUOd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e80-fw1G7rFYoq7iLuSYl/uYPt+9hFw\"",
    "mtime": "2025-01-13T16:05:41.459Z",
    "size": 7808,
    "path": "../../.output/public/_nuxt/base.L8-VYUOd.css"
  },
  "/_nuxt/dNkl5jSu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ed-nMDpAae3zRik7X2l+e1J1cZKync\"",
    "mtime": "2025-01-13T16:05:41.459Z",
    "size": 1517,
    "path": "../../.output/public/_nuxt/dNkl5jSu.js"
  },
  "/_nuxt/dash.CNhYCo1-.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4689-wstYigM5MWXdRQiMjQlSTowZVCo\"",
    "mtime": "2025-01-13T16:05:41.460Z",
    "size": 18057,
    "path": "../../.output/public/_nuxt/dash.CNhYCo1-.css"
  },
  "/_nuxt/eJMeK-Df.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"84b-FpKyoQGrtP724aJLrGt6IwofP1g\"",
    "mtime": "2025-01-13T16:05:41.459Z",
    "size": 2123,
    "path": "../../.output/public/_nuxt/eJMeK-Df.js"
  },
  "/_nuxt/error-404.C3V-3Mc4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-tk05rgubWwonEl8hX4lgLuosKN0\"",
    "mtime": "2025-01-13T16:05:41.460Z",
    "size": 3556,
    "path": "../../.output/public/_nuxt/error-404.C3V-3Mc4.css"
  },
  "/_nuxt/error-500.dGVH929u.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-KF6NWZfD3QI/4EI5b2MfK1uNuAg\"",
    "mtime": "2025-01-13T16:05:41.459Z",
    "size": 1884,
    "path": "../../.output/public/_nuxt/error-500.dGVH929u.css"
  },
  "/_nuxt/glPsucrE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8-4dCkfzj4ZnXVXu5fY5GTL1M8nRg\"",
    "mtime": "2025-01-13T16:05:41.461Z",
    "size": 184,
    "path": "../../.output/public/_nuxt/glPsucrE.js"
  },
  "/_nuxt/obo8V1vi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5-rKQaDBBvfuY/fEcrkCci7QI/rVk\"",
    "mtime": "2025-01-13T16:05:41.461Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/obo8V1vi.js"
  },
  "/_nuxt/r2uecKGO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"243-FcKDzk5Dq6J1Ta3ALK+IxmZiKs0\"",
    "mtime": "2025-01-13T16:05:41.460Z",
    "size": 579,
    "path": "../../.output/public/_nuxt/r2uecKGO.js"
  },
  "/_nuxt/t2RydUMo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a2-dNa88i5BHqKABzDuCv8UzfQrU7g\"",
    "mtime": "2025-01-13T16:05:41.461Z",
    "size": 674,
    "path": "../../.output/public/_nuxt/t2RydUMo.js"
  },
  "/api/_content/cache.1736784316045.json": {
    "type": "application/json",
    "etag": "\"25a1-zo/uWlQC5DelYxDUbkgRfnQppDA\"",
    "mtime": "2025-01-13T16:05:41.390Z",
    "size": 9633,
    "path": "../../.output/public/api/_content/cache.1736784316045.json"
  },
  "/api/_content/search-1736784316045": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1f32-JT5DXPQMuk9qNij7ObezNAnIxO4\"",
    "mtime": "2025-01-13T16:05:41.384Z",
    "size": 7986,
    "path": "../../.output/public/api/_content/search-1736784316045"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-Xo4k2Tqhrc4O4Sblh9LzkoA70xg\"",
    "mtime": "2025-01-13T16:05:41.413Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/bbcc77b3-f5c2-4cd1-b9c0-3e5789d3cb19.json": {
    "type": "application/json",
    "etag": "\"c2-Z0gxDWLPg2tKWZGsZ8DGZIj4eU8\"",
    "mtime": "2025-01-13T16:05:41.407Z",
    "size": 194,
    "path": "../../.output/public/_nuxt/builds/meta/bbcc77b3-f5c2-4cd1-b9c0-3e5789d3cb19.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _sDdS9b = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab) continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument });
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[((\\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => Number.parseInt(i));
    }
  }
  return props;
};

function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString$1(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}

let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await import(
      '../build/mdc-configs.mjs'
      /* @vite-ignore */
    ).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  return async (md) => {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      processedFile?.data || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, inlineOptions = {}) => {
  const parser = await createMarkdownParser(inlineOptions);
  return parser(md);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, basename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (basename) {
    parts[parts.length - 1] = basename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path,
    _basename: basename || ""
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension, _basename } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(_basename)),
      _source,
      _file,
      _stem: _path,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const highlightOptions = options.highlight ? {
      ...options.highlight,
      // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
      highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
    } : void 0;
    const parsed = await parseMarkdown(content, {
      ...config,
      highlight: highlightOptions,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or match every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched?.[1] ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr$1(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "b0ce46b5-c387-4a06-81da-2fc97dd9c090",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/_content/search-1736784922230": {
        "prerender": true,
        "headers": {
          "Content-Type": "text/plain"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "mdc": {
      "useNuxtImage": true,
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1736784922230,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "layout"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
      "host": "",
      "trailingSlash": false,
      "search": {
        "indexed": true,
        "ignoredTags": [],
        "filterQuery": {},
        "options": {
          "fields": [
            "title",
            "content",
            "titles"
          ],
          "storeFields": [
            "title",
            "content",
            "titles"
          ],
          "searchOptions": {
            "prefix": true,
            "fuzzy": 0.2,
            "boost": {
              "title": 4,
              "content": 2,
              "titles": 1
            }
          }
        }
      },
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    },
    "socialShare": {
      "baseUrl": "https://bpdecapstudents.netlify.app",
      "styled": false,
      "label": true,
      "icon": true
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "dLYeSFVwsx",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "layout"
      ]
    },
    "contentHead": true,
    "documentDriven": true,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": {
        "indexed": true,
        "ignoredTags": [],
        "filterQuery": {},
        "options": {
          "fields": [
            "title",
            "content",
            "titles"
          ],
          "storeFields": [
            "title",
            "content",
            "titles"
          ],
          "searchOptions": {
            "prefix": true,
            "fuzzy": 0.2,
            "boost": {
              "title": 4,
              "content": 2,
              "titles": 1
            }
          }
        }
      }
    }
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
const normalizeFsKey = item => item.replaceAll(':', '_');

/**
 * @param {{ base: string }} opts
 */
const _47Users_47judith_46b_47Desktop_4724_4525_47LUCA_47WEB_45DESIGN_47repo_45vr_45web_452_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1000 });

  return {
    ...fs, // fall back to file system - only the bottom three methods are used in renderer
    async setItem (key, value, opts) {
      await Promise.all([
        fs.setItem?.(normalizeFsKey(key), value, opts),
        lru.setItem?.(key, value, opts),
      ]);
    },
    async hasItem (key, opts) {
      return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
    },
    async getItem (key, opts) {
      return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
    },
  }
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('internal:nuxt:prerender', _47Users_47judith_46b_47Desktop_4724_4525_47LUCA_47WEB_45DESIGN_47repo_45vr_45web_452_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/.data/kv"}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/judith.b/Desktop/24-25/LUCA/WEB-DESIGN/repo-vr-web-2/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu$1({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function baseURL() {
  return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage().getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage().setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for await (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

let _sourceStorage;
let _cacheStorage;
let _cacheParsedStorage;
const sourceStorage = () => {
  if (!_sourceStorage) {
    _sourceStorage = prefixStorage(useStorage(), "content:source");
  }
  return _sourceStorage;
};
const cacheStorage = () => {
  if (!_cacheStorage) {
    _cacheStorage = prefixStorage(useStorage(), "cache:content");
  }
  return _cacheStorage;
};
const cacheParsedStorage = () => {
  if (!_cacheParsedStorage) {
    _cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
  }
  return _cacheParsedStorage;
};
const contentConfig = () => useRuntimeConfig().content;
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  const isIgnored = makeIgnored(contentConfig().ignores);
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  const source = sourceStorage();
  if (keys.length === 0) {
    keys = await source.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await source.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await source.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
let cachedContents = [];
const getContentsList = /* @__PURE__ */ (() => {
  let pendingContentsListPromise = null;
  const _getContentsList = async (event, prefix) => {
    const keys = await getContentsIds(event, prefix);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents.filter((c) => c && c._path);
  };
  return (event, prefix) => {
    if (event.context.__contentList) {
      return event.context.__contentList;
    }
    if (cachedContents.length) {
      return cachedContents;
    }
    if (!pendingContentsListPromise) {
      pendingContentsListPromise = _getContentsList(event, prefix);
      pendingContentsListPromise.then((result) => {
        {
          cachedContents = result;
        }
        event.context.__contentList = result;
        pendingContentsListPromise = null;
      });
    }
    return pendingContentsListPromise;
  };
})();
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  const source = sourceStorage();
  const cache = cacheParsedStorage();
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await source.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cache.getItem(id);
  const config = contentConfig();
  const meta = await source.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: config.cacheVersion,
    integrity: config.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await source.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cache.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const config = contentConfig();
  const options = defu$1(
    opts,
    {
      markdown: {
        ...config.markdown,
        highlight: config.highlight
      },
      csv: config.csv,
      yaml: config.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: config.defaultLocale,
        locales: config.locales,
        respectPathCase: config.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent$1(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const config = contentConfig();
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _stem: 1, $numeric: true }];
    }
    {
      params.where = params.where || [];
      if (!params.where.find((item) => typeof item._draft !== "undefined")) {
        params.where.push({ _draft: { $ne: true } });
      }
    }
    if (config.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: config.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2]?.match(/\/(.*)\/([dgimsuy]*)$/);
    return regex?.[1] ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid]?.where && !Array.isArray(memory[qid]?.where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, Number.parseInt(order || "0", 10)];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _IyNiRi = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent$1(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent$1(event, query).count();
  }
  return serverQueryContent$1(event, query).find();
});

const _sSc2Uy = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent$1(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage().setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

const serverQueryContent = serverQueryContent$1;

async function serverSearchContent(event, filterQuery) {
  if (filterQuery) {
    return await serverQueryContent(event).where(filterQuery).find();
  } else {
    return await serverQueryContent(event).find();
  }
}
const HEADING = /^h([1-6])$/;
const isHeading = (tag) => HEADING.test(tag);
function splitPageIntoSections(page, { ignoredTags }) {
  const path = page._path ?? "";
  const sections = [{
    id: path,
    title: page.title || "",
    titles: [],
    content: (page.description || "").trim(),
    level: 1
  }];
  if (!page?.body?.children) {
    return sections;
  }
  let section = 1;
  let previousHeadingLevel = 0;
  const titles = [page.title ?? ""];
  for (const item of page.body.children) {
    const tag = item.tag || "";
    if (isHeading(tag)) {
      const currentHeadingLevel = Number(tag.match(HEADING)?.[1] ?? 0);
      const title = extractTextFromAst(item).trim();
      if (currentHeadingLevel === 1) {
        titles.splice(0, titles.length);
      } else if (currentHeadingLevel < previousHeadingLevel) {
        titles.splice(currentHeadingLevel - 1, titles.length - 1);
      } else if (currentHeadingLevel === previousHeadingLevel) {
        titles.pop();
      }
      sections.push({
        id: `${path}#${item.props?.id}`,
        title,
        titles: [...titles],
        content: "",
        level: currentHeadingLevel
      });
      titles.push(title);
      previousHeadingLevel = currentHeadingLevel;
      section += 1;
    } else {
      const content = extractTextFromAst(item, ignoredTags).trim();
      if (section === 1 && sections[section - 1]?.content === content) {
        continue;
      }
      sections[section - 1].content = `${sections[section - 1].content} ${content}`.trim();
    }
  }
  return sections;
}
function extractTextFromAst(node, ignoredTags = []) {
  let text = "";
  if (node.type === "text") {
    text += node.value || "";
  }
  if (ignoredTags.includes(node.tag ?? "")) {
    return "";
  }
  if (node.children?.length) {
    text += node.children.map((child) => extractTextFromAst(child, ignoredTags)).filter(Boolean).join("");
  }
  return text;
}

const _bPuD6t = defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { ignoredTags = [], filterQuery, indexed, options } = runtimeConfig.public.content.search;
  const files = await serverSearchContent(event, filterQuery);
  const sections = files.map((page) => splitPageIntoSections(page, { ignoredTags })).flat();
  if (indexed) {
    const miniSearch = new MiniSearch(options);
    miniSearch.addAll(sections);
    return JSON.stringify(miniSearch);
  }
  return sections;
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1]?.match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      if (dirConfig) {
        Object.assign(
          navItem,
          pickNavigationFields(dirConfig)
        );
      }
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...conf && pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  nav.forEach((item) => {
    item._file = item._file.split(".").slice(0, -1).join(".");
  });
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _1EVwOk = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage().getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent$1(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent$1(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _3IAM3v = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_ARU6Bk = () => import('../_/renderer.mjs');

const handlers = [
  { route: '', handler: _sDdS9b, lazy: false, middleware: true, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _IyNiRi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _IyNiRi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _IyNiRi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1736784922230.json', handler: _sSc2Uy, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/search-1736784922230', handler: _bPuD6t, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _1EVwOk, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _1EVwOk, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _1EVwOk, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _3IAM3v, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ARU6Bk, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr$1(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, buildAssetsURL as b, useNitroApp as c, defineRenderHandler as d, baseURL as e, closePrerenderer as f, getRouteRules as g, localFetch as l, publicAssetsURL as p, useStorage as u };
//# sourceMappingURL=nitro.mjs.map
