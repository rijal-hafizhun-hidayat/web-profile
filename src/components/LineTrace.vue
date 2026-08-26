<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const SPEED = 230
const MAX_BOUNCES = 46
const SCATTER = 0.5
const FADE = 800

const w = ref(0)
const h = ref(0)
const trail = ref('')
const head = ref('')
const visible = ref(true)

let x = 0
let y = 0
let vx = 0
let vy = 0
let verts = []
let bounces = 0
let raf = 0
let fadeTimer = 0
let last = 0
let running = true

const rand = (a, b) => a + Math.random() * (b - a)

const start = () => {
  x = rand(w.value * 0.25, w.value * 0.75)
  y = rand(h.value * 0.25, h.value * 0.75)
  const a = rand(0, Math.PI * 2)
  vx = Math.cos(a) * SPEED
  vy = Math.sin(a) * SPEED
  verts = [{ x, y }]
  bounces = 0
  render()
}

const render = () => {
  if (verts.length > 1) {
    trail.value = verts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join('')
  } else {
    trail.value = ''
  }
  const from = verts[verts.length - 1]
  head.value = `M${from.x.toFixed(1)} ${from.y.toFixed(1)}L${x.toFixed(1)} ${y.toFixed(1)}`
}

const advance = (dt) => {
  let left = dt
  let guard = 0
  while (left > 0 && guard++ < 8) {
    const tx = vx > 0 ? (w.value - x) / vx : vx < 0 ? -x / vx : Infinity
    const ty = vy > 0 ? (h.value - y) / vy : vy < 0 ? -y / vy : Infinity
    const hit = Math.min(tx, ty)

    if (!(hit < left)) {
      x += vx * left
      y += vy * left
      break
    }

    x += vx * hit
    y += vy * hit
    left -= hit

    if (tx <= ty) vx = -vx
    else vy = -vy

    const a = rand(-SCATTER, SCATTER)
    const nx = vx * Math.cos(a) - vy * Math.sin(a)
    const ny = vx * Math.sin(a) + vy * Math.cos(a)
    vx = nx
    vy = ny

    x = Math.min(Math.max(x + vx * 0.001, 0), w.value)
    y = Math.min(Math.max(y + vy * 0.001, 0), h.value)

    verts.push({ x, y })
    if (++bounces >= MAX_BOUNCES) return true
  }
  return false
}

const reset = () => {
  running = false
  visible.value = false
  fadeTimer = setTimeout(() => {
    start()
    visible.value = true
    running = true
  }, FADE)
}

const measure = () => {
  w.value = window.innerWidth
  h.value = window.innerHeight
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure)
  start()

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    while (!advance(0.1));
    render()
    return
  }

  const tick = (now) => {
    raf = requestAnimationFrame(tick)
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    if (!running || document.hidden || !dt) return
    if (advance(dt)) reset()
    render()
  }
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  clearTimeout(fadeTimer)
  window.removeEventListener('resize', measure)
})
</script>

<template>
  <svg
    class="trace pointer-events-none fixed inset-0 -z-10 h-full w-full"
    :viewBox="`0 0 ${w} ${h}`"
    :style="{ opacity: visible ? null : 0 }"
    aria-hidden="true"
  >
    <path :d="trail" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round" />
    <path :d="head" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" class="trace-head" />
  </svg>
</template>
