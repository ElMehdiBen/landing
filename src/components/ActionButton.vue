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
      :class="[
        'w-12 h-12 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300',
        variant === 'header' 
          ? 'bg-gray-900 hover:bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200 hover:bg-gray-50'
      ]"
    >
             <Icon 
         :name="iconName" 
         :class="`w-5 h-5 ${props.variant === 'header' ? 'text-white' : 'text-gray-600'}`"
       />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icons.vue'
import type { IconName } from '../types'

interface Props {
  iconName: IconName
  animationDelay?: string
  variant?: 'default' | 'header'
}

interface Emits {
  click: []
}

const props = withDefaults(defineProps<Props>(), {
  animationDelay: '0s',
  variant: 'default'
})

const emit = defineEmits<Emits>()
</script> 