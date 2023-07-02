import { withBase } from "@vuepress/client";
const URL = withBase("/official-data.json");
const IMAGE_URL = withBase("/image-data.json");

export let data: any = null;

export const loaded = (async () => {
  data = await fetch(URL).then((r) => r.json());

  const imageData = await fetch(IMAGE_URL).then((r) => r.json());
  for (const k1 in imageData) {
    for (const k2 in imageData[k1]) {
      if (data[k1][k2]) {
        data[k1][k2].image = imageData[k1][k2];
      }
    }
  }
})();
