import { withBase } from "@vuepress/client";
const URL = withBase("/official-data.json");
const IMAGE_URL = withBase("/image-data.json");

export let data: any = null;
export let imageData: Record<string, string> = {};

export const loaded = (async () => {
  data = await fetch(URL).then((r) => r.json());
  imageData = await fetch(IMAGE_URL).then((r) => r.json());
})();
