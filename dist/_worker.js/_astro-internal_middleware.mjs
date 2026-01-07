globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_rAn8FEFL.mjs';
import './chunks/astro/server_3CODEi8Y.mjs';
import { s as sequence } from './chunks/index_BvO9efou.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
