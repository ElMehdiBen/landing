<template>
  <div>
    <!-- Side Panel -->
    <Transition 
      name="slide" 
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="transform translate-x-full" 
      enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in" 
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <div 
        v-if="isVisible && activePanelButton"
        class="fixed top-6 right-6 bottom-6 w-96 bg-white shadow-2xl z-50 border-l border-gray-200 rounded-xl"
      >
        <div class="h-full flex flex-col">
          <!-- Panel Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Icon :name="activePanelButton.iconName" class="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900">{{ activePanelButton.title }}</h2>
                <p class="text-xs text-gray-500">{{ activePanelButton.subtitle }}</p>
              </div>
            </div>
            <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="x-mark" class="w-6 h-6" />
            </button>
          </div>

          <!-- Panel Content -->
          <div class="flex-1 p-6 overflow-y-auto">
            <div class="space-y-6">
              <!-- Stats Section -->
              <div class="bg-gray-50 rounded-xl p-4">
                <h3 class="text-sm font-medium text-gray-700 mb-3">Key Metrics</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-gray-900">{{ activePanelButton.stats.metric1.value }}</div>
                    <div class="text-xs text-gray-500">{{ activePanelButton.stats.metric1.label }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-gray-900">{{ activePanelButton.stats.metric2.value }}</div>
                    <div class="text-xs text-gray-500">{{ activePanelButton.stats.metric2.label }}</div>
                  </div>
                </div>
              </div>

              <!-- Chart Placeholder -->
              <div class="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-white">
                <h3 class="text-sm font-medium mb-4">Performance Overview</h3>
                <div class="h-32 flex items-end justify-between space-x-2">
                  <div 
                    v-for="(bar, index) in activePanelButton.chartData" 
                    :key="index"
                    class="bg-white bg-opacity-30 rounded-t" 
                    :style="{ height: bar + '%', width: '20px' }"
                  ></div>
                </div>
              </div>

              <!-- Description -->
              <div>
                <h3 class="text-sm font-medium text-gray-700 mb-2">Analysis</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ activePanelButton.description }}</p>
              </div>

              <!-- Action Button -->
              <button
                class="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                View Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Overlay for side panel -->
    <div 
      v-if="isVisible && activePanelButton" 
      class="fixed inset-0 bg-black bg-opacity-25 z-40" 
      @click="$emit('close')"
    ></div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icons.vue'
import type { PanelButton } from '../types'

interface Props {
  isVisible: boolean
  activePanelButton: PanelButton | null
}

interface Emits {
  close: []
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script> 