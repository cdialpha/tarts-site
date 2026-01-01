globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_3CODEi8Y.mjs';
import { a as $$Image } from './Layout_vqfNLlX8.mjs';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { heroTitle, heroImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero-gradient background-image:url('/src/assets/farm.jpeg') bg-cover bg-center relative overflow-hidden h-[500px] flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "Hero Background", "class": "absolute object-cover w-full h-full", "loading": "eager" })} <div class="absolute z-10 max-w-2xl top-1/4 left-1/10 mx-auto"> <h1 class="text-4xl text-b1 font-bold">${heroTitle}</h1> </div> </section>`;
}, "C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/components/Hero.astro", void 0);

export { $$Hero as $ };
