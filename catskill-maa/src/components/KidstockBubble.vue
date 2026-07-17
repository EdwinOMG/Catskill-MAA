<template>
  <div v-if="visible" class="ks-root" :class="{ 'is-open': open }">
    <!-- Collapsed tab -->
    <button
      class="ks-tab"
      @click="open = true"
      aria-label="Open Kidstock event details"
      v-show="!open"
    >
      <span class="ks-tab-dot"></span>
      <span class="ks-tab-text">Kidstock<br />Aug 22</span>
    </button>

    <!-- Expanded card -->
    <div class="ks-card" v-show="open" role="dialog" aria-label="Kidstock event announcement">
      <button class="ks-close" @click="dismiss" aria-label="Close">&times;</button>

      <div class="ks-eyebrow">Community Event</div>
      <h3 class="ks-title">KIDSTOCK</h3>
      <p class="ks-sub">A Family Music &amp; Arts Festival</p>

      <ul class="ks-facts">
        <li><span class="ks-icon">&#9733;</span> Saturday, August 22, 2026</li>
        <li><span class="ks-icon">&#9733;</span> Bethel Woods Center for the Arts</li>
        <li><span class="ks-icon">&#9733;</span> Live music, crafts &amp; camping — all day</li>
      </ul>

      <p class="ks-blurb">
        Featuring Ninja Kidz! Live on Stage, plus Rock &amp; Roll Playhouse,
        Story Pirates, Bubble Dad and more. A fun family day trip for our
        students and their siblings.
      </p>

      <a
        class="ks-cta"
        href="https://bethelwoodscenter.org/kidstock"
        target="_blank"
        rel="noopener noreferrer"
      >
        See full lineup &amp; tickets &#8594;
      </a>

      <button class="ks-dismiss-link" @click="dismiss">Maybe later</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const EVENT_END = new Date('2026-08-23T00:00:00')

const visible = ref(false)
const open = ref(false)

function dismiss() {
  open.value = false
  visible.value = false
  // Not persisted anywhere on purpose: this only hides it for the current
  // page view. Reloading or coming back later brings it right back until
  // the event date passes.
}

onMounted(() => {
  const now = new Date()
  if (now >= EVENT_END) return

  visible.value = true
})
</script>

<style scoped>
.ks-root {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* Collapsed ribbon tab, styled like a folded belt-end */
.ks-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(160deg, #c8202f 0%, #9c1522 100%);
  color: #faf7f0;
  border: none;
  padding: 14px 10px 14px 14px;
  border-radius: 10px 0 0 10px;
  box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  writing-mode: horizontal-tb;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.ks-tab:hover {
  transform: translateX(-4px);
  box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.35);
}

.ks-tab-text {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.04em;
  text-align: left;
  text-transform: uppercase;
}

.ks-tab-dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  border-radius: 50%;
  background: #e8a93e;
  box-shadow: 0 0 0 0 rgba(232, 169, 62, 0.7);
  animation: ks-pulse 2.2s infinite;
}

@keyframes ks-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(232, 169, 62, 0.55);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(232, 169, 62, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(232, 169, 62, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ks-tab-dot {
    animation: none;
  }
}

/* Expanded card */
.ks-card {
  position: relative;
  width: 280px;
  max-width: 84vw;
  background: #161512;
  color: #faf7f0;
  border-radius: 12px 0 0 12px;
  border-left: 4px solid #c8202f;
  box-shadow: -6px 6px 24px rgba(0, 0, 0, 0.4);
  padding: 20px 18px 18px;
  margin-left: auto;
}

.ks-close {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  color: #a8a49a;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
}

.ks-close:hover {
  color: #faf7f0;
}

.ks-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #e8a93e;
  margin-bottom: 4px;
}

.ks-title {
  margin: 0 0 2px;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.ks-sub {
  margin: 0 0 12px;
  font-size: 13px;
  color: #cfcac0;
}

.ks-facts {
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
  font-size: 13px;
  line-height: 1.6;
}

.ks-facts li {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.ks-icon {
  color: #e8a93e;
  font-size: 10px;
}

.ks-blurb {
  font-size: 12.5px;
  line-height: 1.5;
  color: #d8d4ca;
  margin: 0 0 14px;
}

.ks-cta {
  display: block;
  text-align: center;
  background: #c8202f;
  color: #faf7f0;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 7px;
  transition: background 0.15s ease;
}

.ks-cta:hover {
  background: #a91824;
}

.ks-dismiss-link {
  display: block;
  width: 100%;
  text-align: center;
  background: none;
  border: none;
  color: #8f8b81;
  font-size: 11px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
  padding: 2px;
}

.ks-dismiss-link:hover {
  color: #cfcac0;
}

@media (max-width: 480px) {
  .ks-card {
    width: 240px;
  }
}
</style>