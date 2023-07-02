<script lang="ts" setup>
import Description from "./Description.vue";

const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <div class="info-box">
    <div v-if="data.image" class="info-box-image">
      <img
        :src="`https://api.ambr.top/assets/UI/gcg/${data.image.filename_cardface}.png`"
      />
    </div>
    <div class="info-box-content">
      <div class="info-box-title">
        <span class="badge">{{ data.cardtypetext ?? "规则解释" }}</span>
        <span class="info-title-text">{{ data.name }}</span>
        <ul class="badge-group">
          <li v-for="t of data.tagstext ?? []" class="badge badge-ghost">{{ t }}</li>
        </ul>
        <p class="text-xs">ID: {{ data.id }}</p>
      </div>
      <Description :text="data.descriptionraw"></Description>
    </div>
  </div>
</template>
