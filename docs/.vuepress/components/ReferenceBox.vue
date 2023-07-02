<script lang="ts" setup>
import { onMounted, ref, shallowRef } from "vue";
import { data as allData, loaded } from "./data";
import SkillInfo from "./SkillInfo.vue";
import ItemInfo from "./ItemInfo.vue";
import CharacterInfo from "./CharacterInfo.vue";

const props = defineProps<{
  type: string;
  id: number;
}>();

const title = ref(props.id.toString());
const data = ref();
const showTooltip = ref(false);

const comp = shallowRef(ItemInfo);

onMounted(async () => {
  await loaded;
  const skills = Object.values<any>(allData.tcgcharactercards).flatMap(
    (c) => c.skills
  );
  if (props.type === "K") {
    data.value = Object.values<any>(allData.tcgkeywords).find(
      (c) => c.id === props.id
    );
    title.value = data.value.name;
  } else if (props.type === "S") {
    data.value = skills.find((c) => c.id === props.id);
    title.value = data.value.name;
    comp.value = SkillInfo;
  } else if (props.type === "C") {
    data.value = Object.values<any>(allData.tcgstatuseffects).find(
      (c) => c.id === props.id
    );
    data.value ??= Object.values<any>(allData.tcgsummons).find(
      (c) => c.id === props.id
    );
    title.value = data.value.name;
  } else if (props.type === "A") {
    data.value = Object.values<any>(allData.tcgcharactercards).find(
      (c) => c.id === props.id
    );
    title.value = data.value.name;
    comp.value = CharacterInfo;
  }
});
</script>

<template>
  <div class="clickable-container">
    <span
      class="keyword clickable"
      @click="showTooltip = !showTooltip"
    >
      {{ title }}
    </span>
    <div
      v-if="showTooltip"
    >
      <component :is="comp" :data="data" noImage 
      class="popup"></component>
    </div>
  </div>
</template>
