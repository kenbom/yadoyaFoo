import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, h as createAstro, j as renderHead, k as renderTransition, n as fade } from '../astro_B_mBtWip.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, c as $$ViewTransitions } from './about_C7qZgLtQ.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$1 = createAstro();
const $$CardTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardTop;
  const { href, title, body, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-4t4fymkn> <div class="card-top" data-astro-cid-4t4fymkn> <h2 data-astro-cid-4t4fymkn> ${title} </h2> <p data-astro-cid-4t4fymkn> ${body} <br data-astro-cid-4t4fymkn><br data-astro-cid-4t4fymkn><a${addAttribute(href, "href")} data-astro-cid-4t4fymkn> >>さらに詳しく</a> </p> ${renderComponent($$result, "Image", $$Image, { "class": "photo-card", "src": image, "alt": `cottage`, "quality": "mid", "data-astro-cid-4t4fymkn": true })} </div> </li> `;
}, "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/components/Card-top.astro", void 0);

const imgLeftUp = new Proxy({"src":"/_astro/chochin.BZWKZYBA.jpg","width":2028,"height":3045,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/chochin.jpg";
							}
							
							return target[name];
						}
					});

const imgRightUp = new Proxy({"src":"/_astro/umiyama.B7QiPMRf.jpg","width":6000,"height":4000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/umiyama.jpg";
							}
							
							return target[name];
						}
					});

const imgLeftDown = new Proxy({"src":"/_astro/tobira2.pLPaaBeE.png","width":3655,"height":3002,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/tobira2.png";
							}
							
							return target[name];
						}
					});

const imgRightDown = new Proxy({"src":"/_astro/hasu.BITZ3TUa.jpg","width":1080,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/hasu.jpg";
							}
							
							return target[name];
						}
					});

const imgCenter = new Proxy({"src":"/_astro/foo-kanban.CqzdEM2y.jpg","width":3897,"height":5846,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/foo-kanban.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-bbe6dxrz> <div class="main-title" data-astro-cid-bbe6dxrz> <p data-astro-cid-bbe6dxrz>小田原の四季に遊ぶ</p> <h3 data-astro-cid-bbe6dxrz>宿屋</h3> <h2 data-astro-cid-bbe6dxrz>ふう</h2> </div> <div class="imgLeftUp" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Image", $$Image, { "src": imgLeftUp, "alt": "\u63D0\u706F", "data-astro-cid-bbe6dxrz": true })}</div> <div class="imgRightUp" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Image", $$Image, { "src": imgRightUp, "alt": "\u6D77\u3068\u5C71", "data-astro-cid-bbe6dxrz": true })}</div> <div class="imgLeftDown" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Image", $$Image, { "src": imgLeftDown, "alt": "\u6D77\u3078\u306E\u6249", "data-astro-cid-bbe6dxrz": true })}</div> <div class="imgRightDown" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Image", $$Image, { "src": imgRightDown, "alt": "\u84EE\u306E\u82B1", "data-astro-cid-bbe6dxrz": true })}</div> <div class="imgCenter" data-astro-cid-bbe6dxrz>${renderComponent($$result, "Image", $$Image, { "src": imgCenter, "alt": "\u7C60\u6E05\u3055\u3093", "data-astro-cid-bbe6dxrz": true })}</div>  </div>`;
}, "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/components/Hero.astro", void 0);

const image1 = new Proxy({"src":"/_astro/foo-gaikan.fLVzyms-.png","width":2333,"height":1915,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/foo-gaikan.png";
							}
							
							return target[name];
						}
					});

const image2 = new Proxy({"src":"/_astro/minaka.-9AWiHdt.png","width":4899,"height":3132,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/minaka.png";
							}
							
							return target[name];
						}
					});

const image3 = new Proxy({"src":"/_astro/kagosei.DUvcxveg.jpg","width":5110,"height":3407,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/assets/index/kagosei.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="ja" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/src/styles/reset.css" type="text/css"><meta name="generator" conYadoya-Fooo.generator><title>${"\u5BBF\u5C4B \u3075\u3046"}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6${addAttribute(renderTransition($$result, "np4g3e25", fade({ duration: "1s" })), "data-astro-transition-scope")}> ${renderComponent($$result, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} <hero class="top-page" data-astro-cid-j7pv25f6> <div class="card-tops" data-astro-cid-j7pv25f6> ${renderComponent($$result, "CardTop", $$CardTop, { "href": "/about/", "title": "\u5BBF\u5C4B \u3075\u3046 \u306E\u3054\u7D39\u4ECB", "body": "\u5C0F\u7530\u539F\u306E\u3069\u3053\u3078\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u306A\u5357\u753A\u3001\u89B3\u5149\u540D\u6240\u304B\u307E\u307C\u3053\u901A\u308A\u306E\u3059\u3050\u305D\u3070\u306B\u30AA\u30FC\u30D7\u30F3\u3057\u307E\u3057\u305F", "image": image1, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "CardTop", $$CardTop, { "href": "/around/", "title": "\u8FD1\u5834\u306E\u304A\u697D\u3057\u307F", "body": "\u5F92\u6B695\u5206\u5185\u306B\u305F\u304F\u3055\u3093\u306E\u81EA\u7136\u3001\u305D\u3057\u3066\u7F8E\u5473\u3057\u3055\u3042\u3075\u308C\u308B\u8001\u8217\u3084\u30AB\u30D5\u30A7\u304C\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059", "image": image3, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result, "CardTop", $$CardTop, { "href": "/littleFar/", "title": "\u8DB3\u3092\u306E\u3070\u305B\u3070", "body": "\u5C0F\u7530\u539F\u99C5\u3078\u5F92\u6B6910\u5206\u3001\u99C5\u304B\u3089\u7BB1\u6839\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u81EA\u7531\u81EA\u5728\u3001\u3055\u3089\u306B\u6F01\u6E2F\u3084\u77F3\u57A3\u5C71\u306A\u3069\u697D\u3057\u3055\u6E80\u8F09\u306E\u5C0F\u7530\u539F\u3067\u3059", "image": image2, "data-astro-cid-j7pv25f6": true })} </div> <div class="operater" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>©宿屋 ふう</p> </div> </hero>  </body> </html>`;
}, "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/pages/index.astro", "self");

const $$file = "/Users/kimuratsutomu/DevProjects/astro-projects/yadoyaFoo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
