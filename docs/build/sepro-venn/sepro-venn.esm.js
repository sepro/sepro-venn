import { p as patchBrowser, b as bootstrapLazy } from './index-a73d3637.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["sepro-venn-2",[[1,"sepro-venn-2",{"labels":[1],"values":[1],"scale":[2]}]]],["sepro-venn-3",[[1,"sepro-venn-3",{"labels":[1],"values":[1],"scale":[2]}]]],["sepro-venn-4",[[1,"sepro-venn-4",{"labels":[1],"values":[1],"scale":[2]}]]],["sepro-venn",[[1,"sepro-venn",{"labels":[1],"values":[1],"scale":[2]}]]]], options);
});
