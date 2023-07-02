<script lang="ts" setup>
import Description from "./Description.vue";

const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <div class="info-box-skill">
    <div class="info-box-title">
      <span class="badge">
        {{ data.type }}
      </span>
      <span class="info-title-text">{{ data.name }}</span>
      <p class="text-xs">ID: {{ data.id }}</p>
    </div>
    <Description
      :text="data.descriptionraw"
      :basedamage="data.basedamage"
      :baseelement="data.baseelement"
    ></Description>
  </div>
</template>
