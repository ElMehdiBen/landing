<template>
  <div class="relative w-80 h-48 cursor-pointer perspective-1000" @click="handleFlip">
    <div :class="[
      'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
      isFlipped ? 'rotate-y-180' : ''
    ]">
      <!-- Front of card -->
      <div
        class="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-2xl shadow-sm backface-hidden flex flex-col justify-center items-start p-8 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
            <Icon :name="card.iconName" class="w-5 h-5 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900">{{ card.title }}</h3>
        </div>
        <p class="text-gray-500 text-sm">Click to explore details</p>
      </div>

      <!-- Back of card -->
      <div
        class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl shadow-sm backface-hidden rotate-y-180 flex flex-col justify-center items-start p-8">
        <div class="flex items-center mb-4">
          <div class="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
            <Icon :name="card.iconName" class="w-4 h-4 text-white" />
          </div>
          <h3 class="text-lg font-semibold">{{ card.title }}</h3>
        </div>
        <p class="text-gray-300 text-sm leading-relaxed">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icons.vue'
import type { Card } from '../types'

interface Props {
  card: Card
}

const props = defineProps<Props>()
const isFlipped = ref(false)

const handleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style> 