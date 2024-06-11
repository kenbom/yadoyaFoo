import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_B_mBtWip.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$CardSub, d as image0, b as $$Layout } from './about_C7qZgLtQ.mjs';
/* empty css                          */
/* empty css                              */

const image2 = new Proxy({"src":"/_astro/ishigakiyama.D1QmZ6mM.png","width":1830,"height":1671,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/littleFar/ishigakiyama.png";
							}
							
							return target[name];
						}
					});

const image6 = new Proxy({"src":"/_astro/minaka.-9AWiHdt.png","width":4899,"height":3132,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/littleFar/minaka.png";
							}
							
							return target[name];
						}
					});

const $$LittleFar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8DB3\u3092\u306E\u3070\u305B\u3070", "data-astro-cid-f6kmnzb7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<hero class="page-subs" data-astro-cid-f6kmnzb7> ${renderComponent($$result2, "Image", $$Image, { "class": "photo-hero", "src": image6, "alt": `\u30DF\u30CA\u30AB\u5C0F\u7530\u539F`, "quality": "mid", "data-astro-cid-f6kmnzb7": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u5C0F\u7530\u539F\u99C5", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image0, "data-astro-cid-f6kmnzb7": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u5C0F\u7530\u539F\u6F01\u6E2F", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image0, "data-astro-cid-f6kmnzb7": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u77F3\u57A3\u5C71", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image2, "data-astro-cid-f6kmnzb7": true })} </hero>  ` })}`;
}, "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/pages/littleFar.astro", void 0);

const $$file = "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/pages/littleFar.astro";
const $$url = "/littleFar";

export { $$LittleFar as default, $$file as file, $$url as url };
