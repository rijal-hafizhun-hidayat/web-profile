<script setup>
defineProps({ title: { type: String, required: true } })
</script>

<template>
  <section class="mt-16">
    <h2 class="text-accent mb-6 font-mono text-xs tracking-widest uppercase">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
