<template>
  <Transition 
    name="popup" 
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-95 opacity-0" 
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in" 
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div 
      v-if="isVisible && activeIcon" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="$emit('close')"
    >
      <div 
        class="bg-white text-black p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl border border-gray-200"
        @click.stop
      >
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Icon :name="activeIcon.iconName" class="w-5 h-5 text-white" />
            </div>
            <h2 class="text-xl font-semibold text-gray-900">{{ activeIcon.title }}</h2>
          </div>
          <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
            <Icon name="x-mark" class="w-6 h-6" />
          </button>
        </div>
        <p class="text-gray-600 leading-relaxed mb-6 text-sm">{{ activeIcon.description }}</p>
        <div class="flex space-x-3">
          <button 
            @click="$emit('close')"
            class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            Close
          </button>
          <button
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Icon from './Icons.vue'
import type { IconData } from '../types'

interface Props {
  isVisible: boolean
  activeIcon: IconData | null
}

interface Emits {
  close: []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style> 