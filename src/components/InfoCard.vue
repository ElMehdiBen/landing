<template>
  <div class="cursor-pointer perspective-1000 flex-1" @click="handleFlip">
    <div :class="[
      'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
      isFlipped ? 'rotate-x-180' : ''
    ]">
      <!-- Front of card -->
      <div class="absolute inset-0 w-full h-full bg-gray-50 rounded-2xl p-6 backface-hidden">
        <div class="flex items-center mb-3">
          <div class="w-6 h-6 bg-gray-400 rounded mr-3 flex items-center justify-center">
            <Icon :name="info.iconName" class="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 class="font-semibold text-gray-900 mb-2 text-lg">{{ info.title }}</h3>
        <p class="text-gray-600">{{ info.value }}</p>
      </div>

      <!-- Back of card -->
      <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 backface-hidden rotate-x-180 text-white">
        <div class="flex items-center mb-3">
          <div class="w-6 h-6 bg-white/20 rounded mr-3 flex items-center justify-center">
            <Icon :name="info.iconName" class="w-4 h-4 text-gray-900" />
          </div>
        </div>
        <h3 class="font-semibold mb-2 text-lg text-gray-900">{{ info.title }}</h3>
        <p class="text-gray-900 text-sm leading-relaxed">{{ info.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icons.vue'
import type { IconName } from '../types'

interface InfoCardData {
  title: string
  value: string
  description: string
  iconName: IconName
}

interface Props {
  info: InfoCardData
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

.rotate-x-180 {
  transform: rotateX(180deg);
}
</style> 