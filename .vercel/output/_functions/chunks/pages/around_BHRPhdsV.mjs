import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_0Fb2eD6u.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$CardSub, b as $$Layout } from './about_dWlD34jG.mjs';
/* empty css                          */
/* empty css                           */

const image2 = new Proxy({"src":"/_astro/tobira2.pLPaaBeE.png","width":3655,"height":3002,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/around/tobira2.png";
							}
							
							return target[name];
						}
					});

const image3 = new Proxy({"src":"/_astro/umi.D-sxkXJI.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/around/umi.jpg";
							}
							
							return target[name];
						}
					});

const image4 = new Proxy({"src":"/_astro/odawara-joe.C1V6dVb1.png","width":2384,"height":1505,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/around/odawara-joe.png";
							}
							
							return target[name];
						}
					});

const image5 = new Proxy({"src":"/_astro/shop.Dc9jOSSu.png","width":4528,"height":3019,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/around/shop.png";
							}
							
							return target[name];
						}
					});

const image6 = new Proxy({"src":"/_astro/kagosei.DUvcxveg.jpg","width":5110,"height":3407,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/around/kagosei.jpg";
							}
							
							return target[name];
						}
					});

const $$Around = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u8FD1\u5834\u306E\u304A\u697D\u3057\u307F", "data-astro-cid-te7ldjmx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<hero class="page-subs" data-astro-cid-te7ldjmx> ${renderComponent($$result2, "Image", $$Image, { "class": "photo-hero", "src": image6, "alt": `\u7C60\u6E05\u3055\u3093`, "quality": "mid", "data-astro-cid-te7ldjmx": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u6D77\u3078\u306E\u6249", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image2, "data-astro-cid-te7ldjmx": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u5FA1\u5E78\u306E\u6D5C\u304B\u3089", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image3, "data-astro-cid-te7ldjmx": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u5C0F\u7530\u539F\u57CE\u5740\u516C\u5712", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image4, "data-astro-cid-te7ldjmx": true })} ${renderComponent($$result2, "CardSub", $$CardSub, { "title": "\u30AB\u30D5\u30A7\u3082\u8001\u8217\u3082", "body": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ", "image": image5, "data-astro-cid-te7ldjmx": true })} </hero>  ` })}`;
}, "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/pages/around.astro", void 0);

const $$file = "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/pages/around.astro";
const $$url = "/around";

export { $$Around as default, $$file as file, $$url as url };
