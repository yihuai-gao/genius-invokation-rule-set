<script lang="ts" setup>
import Description from "./Description.vue";
import { toDiceTypeClass } from "./utils";
import { imageData } from "./data";

const props = defineProps<{
  data: any;
  noImage?: boolean;
}>();
</script>

<template>
  <div class="info-box">
    <div v-if="!noImage && data.id in imageData" class="info-box-image">
      <img
        :src="imageData[data.id]"
      />
    </div>
    <div class="info-box-content">
      <div class="info-box-title">
        <span class="badge">{{ data.cardtypetext ?? "规则解释" }}</span>
        <span class="info-title-text">{{ data.name }}</span>
        <ul class="badge-group">
          <li v-for="t of data.tagstext ?? []" class="badge badge-ghost">{{ t }}</li>
        </ul>
      <span>
        <span
          v-for="dice of data.playcost"
          class="cost"
          :class="toDiceTypeClass(dice.costtype)"
        >
          {{ dice.count }}
        </span>
      </span>
        <p class="text-xs">ID: {{ data.id }}</p>
      </div>
      <Description :text="data.descriptionraw"></Description>
    </div>
  </div>
</template>
