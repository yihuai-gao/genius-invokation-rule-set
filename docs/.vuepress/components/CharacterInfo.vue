<script lang="ts" setup>
import Description from "./Description.vue";
import SkillInfo from "./SkillInfo.vue";

const props = defineProps<{
  data: any;
  noImage?: boolean;
}>();
</script>

<template>
  <div class="info-box">
    <div v-if="!noImage && data.image" class="info-box-image">
      <img
        :src="`https://api.ambr.top/assets/UI/gcg/${data.image.filename_cardface}.png`"
      />
    </div>
    <div class="info-box-content">
      <div class="info-box-title">
        <span class="badge">角色</span>
        <span class="info-title-text">{{ data.name }}</span>
        <ul class="badge-group">
          <li v-for="t of data.tagstext" class="badge badge-ghost">{{ t }}</li>
        </ul>
        <p class="text-xs">ID: {{ data.id }}</p>
      </div>
      <p class="description">{{ data.storytext }}</p>
      <SkillInfo v-for="s of data.skills" :data="s">
      </SkillInfo>
    </div>
  </div>
</template>
