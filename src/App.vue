<script setup>
import Section from './components/Section.vue'
import Entry from './components/Entry.vue'
import Highlight from './components/Highlight.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import LineTrace from './components/LineTrace.vue'
import { profile, links, work, projects, stack, education } from './profile'

const year = new Date().getFullYear()

const delay = (i) => ({ '--d': `${i * 70}ms` })
</script>

<template>
  <LineTrace />

  <main class="mx-auto max-w-3xl px-6 py-20 sm:py-28">
    <header class="rise flex items-start justify-between gap-6" :style="delay(0)">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {{ profile.name }}
        </h1>
        <p class="mt-1 text-neutral-500 dark:text-neutral-400">
          {{ profile.role }} · {{ profile.location }}
        </p>
        <p
          v-if="profile.available"
          class="mt-3 flex items-center gap-2 font-mono text-xs text-neutral-400 dark:text-neutral-600"
        >
          <span class="relative flex size-1.5">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span class="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          Available for work
        </p>
      </div>
      <ThemeToggle />
    </header>

    <p class="rise mt-8 text-pretty leading-relaxed" :style="delay(1)">
      {{ profile.bio }}
    </p>

    <nav class="rise mt-6 flex flex-wrap gap-x-5 gap-y-2" :style="delay(2)">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition
               hover:text-neutral-900 hover:decoration-neutral-900
               dark:text-neutral-400 dark:decoration-neutral-700
               dark:hover:text-neutral-100 dark:hover:decoration-neutral-100"
      >
        {{ link.label }}
      </a>
    </nav>

    <div class="rise" :style="delay(3)">
      <Section title="Experience">
        <ul class="space-y-10">
          <Entry
            v-for="job in work"
            :key="job.org"
            :title="job.org"
            :subtitle="job.role"
            :context="job.context"
            :period="job.period"
          >
            <ul class="mt-4 space-y-5">
              <Highlight
                v-for="item in job.highlights"
                :key="item.solution"
                :problem="item.problem"
                :solution="item.solution"
              />
            </ul>
          </Entry>
        </ul>
      </Section>
    </div>

    <div class="rise" :style="delay(4)">
      <Section title="Projects">
        <div v-for="group in projects" :key="group.group" class="mt-8 first:mt-0">
          <p class="mb-5 font-mono text-xs text-neutral-400 sm:pl-42 dark:text-neutral-600">
            {{ group.group }}
          </p>
          <ul class="space-y-8">
            <Entry
              v-for="project in group.items"
              :key="project.name"
              :title="project.name"
              :subtitle="[project.role, project.client].filter(Boolean).join(' · ')"
              :period="project.period"
              :href="project.href"
            >
              <ul class="mt-3">
                <Highlight :problem="project.problem" :solution="project.solution" />
              </ul>
              <p class="mt-3 font-mono text-xs text-neutral-400 dark:text-neutral-600">
                {{ project.stack.join(' · ') }}
              </p>
            </Entry>
          </ul>
        </div>
      </Section>
    </div>

    <div class="rise" :style="delay(5)">
      <Section title="Stack">
        <dl class="space-y-5">
          <div v-for="row in stack" :key="row.label" class="sm:flex sm:gap-6">
            <dt class="text-accent mb-2 shrink-0 font-mono text-xs sm:mb-0 sm:w-36 sm:pt-1 sm:text-right">
              {{ row.label }}
            </dt>
            <dd class="flex flex-1 flex-wrap gap-2">
              <span
                v-for="item in row.items"
                :key="item"
                class="rounded-full border border-neutral-200 px-3 py-1 font-mono text-xs text-neutral-500
                       dark:border-neutral-800 dark:text-neutral-400"
              >
                {{ item }}
              </span>
            </dd>
          </div>
        </dl>
      </Section>
    </div>

    <div class="rise" :style="delay(6)">
      <Section title="Education">
        <ul class="space-y-6">
          <Entry
            v-for="entry in education"
            :key="entry.role"
            :title="entry.org"
            :subtitle="entry.role"
            :context="entry.context"
            :period="entry.period"
          />
        </ul>
      </Section>
    </div>

    <footer class="rise mt-20 border-t border-neutral-100 pt-6 dark:border-neutral-900" :style="delay(7)">
      <p class="font-mono text-xs text-neutral-400 dark:text-neutral-600">
        © {{ year }} {{ profile.name }}
      </p>
    </footer>
  </main>
</template>
