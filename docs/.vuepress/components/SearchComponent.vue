<template>
  <div v-if="data">
    <input class="input" type="text" v-model="searchText" />
    <div v-for="d of shownData" class="item-box">
      <div style="display: flex; gap: 1em; align-items: end">
        <span style="border: solid 1px">{{ d.cardtypetext ?? "角色" }}</span>
        <h3>{{ d.name }}</h3>
        <ul style="display: flex; gap: 1em; list-style-type: none">
          <li v-for="t of d.tagstext ?? []" :key="t">{{ t }}</li>
        </ul>
      </div>
      <p>{{ d.description }}</p>
      <div v-if="d.skills">
        <div v-for="s of d.skills" class="item-box">
          <div style="display: flex; gap: 1em; align-items: end">
            <span style="border: solid 1px">
              {{ s.type }}
            </span>
            <h3>{{ s.name }}</h3>
          </div>
          <p>{{ s.description }}</p>
        </div>
      </div>
    </div>
    <div v-if="shownData.length === 0 && searchText">
      <p>没有找到相关数据</p>
    </div>
    <hr />
  </div>
  <div v-else>数据加载中……</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
const URL = "/genius-invokation-rule-set/official-data.json";

const data = ref();
const searchText = ref("");
const shownData = computed(() => {
  if (!searchText.value) return [];
  return data.value.filter((item) => {
    return item.name.includes(searchText.value);
  });
});

onMounted(async () => {
  const originalData = await fetch(URL).then((r) => r.json());
  data.value = [];
  data.value.push(...Object.values(originalData.tcgcharactercards));
  data.value.push(...Object.values(originalData.tcgactioncards));
  data.value.push(...Object.values(originalData.tcgdetailedrules));
  data.value.push(...Object.values(originalData.tcgkeywords));
  data.value.push(...Object.values(originalData.tcgstatuseffects));
  data.value.push(...Object.values(originalData.tcgsummons));
});
</script>

<style scoped>
.input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
}
.item-box {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
