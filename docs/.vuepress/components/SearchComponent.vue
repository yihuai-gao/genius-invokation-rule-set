<template>
  <div v-if="data">
    <input
      type="text"
      class="input"
      placeholder="键入以检索"
      v-model="searchText"
    />
    <div v-for="d of shownData">
      <CharacterInfo v-if="d.skills" :data="d"></CharacterInfo>
      <ItemInfo v-else :data="d"></ItemInfo>
    </div>
    <div v-if="shownData.length === 0 && searchText">
      <hr class="mt-3" />
      <p>没有找到相关数据</p>
    </div>
  </div>
  <div v-else>数据加载中……</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import CharacterInfo from "./CharacterInfo.vue";
import ItemInfo from "./ItemInfo.vue";
import { data as originalData, loaded } from "./data";

const data = ref();
const searchText = ref("");
const shownData = computed(() => {
  if (!searchText.value) return [];
  return data.value.filter((item) => {
    return item.name.includes(searchText.value);
  });
});

onMounted(async () => {
  await loaded;
  data.value = [];
  data.value.push(...Object.values(originalData.tcgcharactercards));
  data.value.push(...Object.values(originalData.tcgactioncards));
  data.value.push(...Object.values(originalData.tcgdetailedrules));
  data.value.push(...Object.values(originalData.tcgkeywords));
  data.value.push(...Object.values(originalData.tcgstatuseffects));
  data.value.push(...Object.values(originalData.tcgsummons));
});
</script>

<style>
:root {
  --c-brand: #3eaf7c;
  --c-bg: #ffffff;
  --c-text: #2c3e50;
  --border-color: #e5e7eb;
}

*,
:before,
:after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}

.input {
  font-size: 100%;
  margin: 0;
  padding: 0;
  flex-shrink: 1;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-width: 1px;
  border-radius: 0.5rem;
  border-color: var(--border-color);
  width: 100%;
}

.input:focus {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--border-color);
}

.info-box {
  display: flex;
  margin-top: 0.75rem;
  border-radius: 1rem;
  border: solid 1px var(--border-color);
}

.info-box-skill {
  margin-top: 0.75rem;
  border-radius: 0.75rem;
  padding: 0.5rem 1rem;
  border: solid 1px var(--border-color);
}

.info-box-image {
  flex-shrink: 0;
  max-width: 200px;
}

.info-box-content {
  flex-grow: 1;
  padding: 1.5rem;
}

.info-box-title {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.description {
  margin-top: 1rem;
  white-space: pre-wrap;
}

.keyword {
  margin: 0 2px;
  font-weight: 700;
}

.clickable {
  cursor: pointer;
  user-select: none;
  text-decoration: underline;
}

.clickable-container {
  display: inline-block;
  position: relative;
}

.badge {
  color: inherit;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 600;
  height: 1.25rem;
  line-height: 1.25rem;
  border-radius: 1.9rem;
  padding: 0 6px;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding-left: 0.563rem;
  padding-right: 0.563rem;
  border-width: 1px;
}

.badge-group {
  display: flex;
  flex-direction: row;
  gap: 2;
}

.info-title-text {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
}

.info-box ul {
  padding-left: 1.2em;
  line-height: 1.7;
  overflow-wrap: break-word;
  list-style: none;
  margin: 0;
  padding: 0;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.badge-ghost {
  border-color: var(--border-color);
  background-color: var(--border-color);
}

.popup {
  position: absolute;
  background-color: var(--c-bg);
  width: 400px;
  left: 50%;
  top: 1.2em;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.18);
}
</style>
