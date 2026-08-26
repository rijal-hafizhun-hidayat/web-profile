<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  context: { type: String, default: '' },
  period: { type: String, default: '' },
  href: { type: String, default: '' },
})
</script>

<template>
  <li class="sm:flex sm:gap-6">
    <span
      class="text-accent mb-1 block shrink-0 font-mono text-xs sm:mb-0 sm:w-36 sm:pt-1
             sm:text-right"
    >
      {{ period }}
    </span>

    <div class="min-w-0 flex-1">
      <component
        :is="href ? 'a' : 'p'"
        :href="href || null"
        :target="href ? '_blank' : null"
        :rel="href ? 'noopener noreferrer' : null"
        class="font-medium text-neutral-900 dark:text-neutral-100"
        :class="href && 'group inline-flex items-center gap-1.5 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900 dark:decoration-neutral-700 dark:hover:decoration-neutral-100'"
      >
        {{ title }}
        <span v-if="href" class="text-neutral-300 transition group-hover:translate-x-0.5 dark:text-neutral-600">↗</span>
      </component>

      <p v-if="subtitle" class="text-sm text-neutral-500 dark:text-neutral-400">
        {{ subtitle }}
      </p>
      <p v-if="context" class="mt-0.5 font-mono text-xs text-neutral-400 dark:text-neutral-600">
        {{ context }}
      </p>

      <slot />
    </div>
  </li>
</template>
