globalThis.process ??= {}; globalThis.process.env ??= {};
const resourceHero = new Proxy({"src":"/_astro/resource-hero.2pdlC77q.jpeg","width":3984,"height":2656,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/assets/resource-hero.jpeg";
							}
							
							return target[name];
						}
					});

export { resourceHero as r };
