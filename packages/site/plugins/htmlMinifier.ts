import type { Site } from "https://deno.land/x/lume@v1.7.3/core.ts";
import { Language, minify } from "https://deno.land/x/minifier@v1.1.1/mod.ts";

export const htmlMinifier = () => {
  return (site: Site) => {
    site.process([".html"], (page) => {
      page.content = minify(Language.HTML, page.content as string);
    });
  };
};
