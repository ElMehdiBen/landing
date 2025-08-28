<template>
  <div 
    :class="[
      'cursor-pointer transition-all duration-300 hover:scale-105',
      'animate-float'
    ]" 
    :style="{ animationDelay: animationDelay }" 
    @click="$emit('click')"
  >
    <div
      class="w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
    >
      <Icon :name="iconName" class="w-6 h-6 text-gray-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icons.vue'
import type { IconName } from '../types'

interface Props {
  iconName: IconName
  animationDelay?: string
}

interface Emits {
  click: []
}

const props = withDefaults(defineProps<Props>(), {
  animationDelay: '0s'
})

const emit = defineEmits<Emits>()
</script> 