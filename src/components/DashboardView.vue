<template>
  <div
    class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl shadow-lg backface-hidden rotate-y-180"
  >
    <!-- Main Content -->
    <div class="relative z-10 h-full w-full flex flex-col">
      <!-- Top Section - Cards and Modal Buttons -->
      <div class="flex-1 flex justify-between px-8 py-12">
        <!-- Left Side - Cards -->
        <div class="flex flex-col justify-center space-y-6">
          <FlipCard
            v-for="card in cards"
            :key="card.id"
            :card="card"
          />
        </div>

        <!-- Right Side - Modal Buttons Column -->
        <div class="flex flex-col justify-center space-y-6">
          <ActionButton
            v-for="icon in icons"
            :key="icon.id"
            :icon-name="icon.iconName"
            :animation-delay="icon.delay"
            @click="$emit('open-popup', icon)"
          />
        </div>
      </div>

      <!-- Bottom Section - Side Panel Buttons Row -->
      <div class="px-8 pb-8">
        <div class="flex justify-center space-x-6">
          <ActionButton
            v-for="(panelButton, index) in panelButtons"
            :key="panelButton.id"
            :icon-name="panelButton.iconName"
            :animation-delay="(index * 0.5) + 's'"
            @click="$emit('open-side-panel', panelButton)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlipCard from './FlipCard.vue'
import ActionButton from './ActionButton.vue'
import type { Card, IconData, PanelButton } from '../types'

interface Props {
  cards: Card[]
  icons: IconData[]
  panelButtons: PanelButton[]
}

interface Emits {
  'open-popup': [icon: IconData]
  'open-side-panel': [panelButton: PanelButton]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style> 