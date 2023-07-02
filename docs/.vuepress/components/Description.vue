<script lang="ts" setup>
import { computed } from 'vue';
import ReferenceBox from './ReferenceBox.vue';

const props = defineProps<{
  text: string,
  baseelement?: string,
  basedamage?: number
}>();

type Item = {
  type: "text",
  content?: string
} | {
  type: "key",
  content?: string
} | {
  type: "reference",
  rType: string // "C" | "K" | "S" | "A"
  id: number
};

const items = computed(() => {
  const text = props.text.replace(/<.*?>/g, "").replace(/\\n/g, "\n").replace(/\{.*?\}/g, "");
  const segs = text.replace(/\$\[(.*?)\]/g, "$$[$1$$[").split("$[");
  const result: Item[] = [];
  for (let i = 0; i < segs.length; i++) {
    result.push({ type: "text", content: segs[i] });
    i++;
    if (i >= segs.length) break;
    if (segs[i] === "D__KEY__ELEMENT") {
      segs[i] = ELEMENT_DESC_MAP[props.baseelement] ?? props.baseelement;
    }
    if (segs[i] === "D__KEY__DAMAGE") {
      result.push({ type: "key", content: props.basedamage.toString() });
    } else if (segs[i].startsWith("D__KEY__DAMAGE_")) {
      const val = segs[i].substring(15);
      result.push({ type: "key", content: val });
    } else {
      const rType = segs[i][0];
      const id = Number(segs[i].substring(1));
      result.push({ type: "reference", rType, id });
    }
  }
  return result;
});

const ELEMENT_DESC_MAP = {
  GCG_ELEMENT_NONE: "K100",
  GCG_ELEMENT_CRYO: "K101",
  GCG_ELEMENT_HYDRO: "K102",
  GCG_ELEMENT_PYRO: "K103",
  GCG_ELEMENT_ELECTRO: "K104",
  GCG_ELEMENT_ANEMO: "K105",
  GCG_ELEMENT_GEO: "K106",
  GCG_ELEMENT_DENDRO: "K107",
}

</script>

<template>
  <p class="description">
    <span v-for="item of items">
      <span v-if="item.type === 'text'">{{ item.content }}</span>
      <span v-else-if="item.type === 'key'" class="keyword">{{ item.content }}</span>
      <ReferenceBox v-else :type="item.rType" :id="item.id">
      </ReferenceBox>
    </span>
  </p>
</template>
