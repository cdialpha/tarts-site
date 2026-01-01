globalThis.process ??= {}; globalThis.process.env ??= {};
const projectsHero = new Proxy({"src":"/_astro/projects-hero.Bq-ryDZb.jpeg","width":3984,"height":2656,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/cdial/OneDrive/Desktop/code/tarts-site/src/assets/projects-hero.jpeg";
							}
							
							return target[name];
						}
					});

export { projectsHero as p };
