<script setup>
defineProps({
  problem: { type: String, required: true },
  solution: { type: String, required: true },
})
</script>

<template>
  <li class="border-l border-neutral-200 pl-4 dark:border-neutral-800">
    <p class="text-sm leading-relaxed text-neutral-500 dark:text-neutral-500">
      {{ problem }}
    </p>
    <p class="mt-2 flex gap-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
      <span aria-hidden="true" class="select-none text-neutral-300 dark:text-neutral-700">→</span>
      <span>{{ solution }}</span>
    </p>
  </li>
</template>
