<template>
  <div
    class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl shadow-lg backface-hidden rotate-y-180"
  >
    <!-- Main Content -->
    <div class="relative z-10 h-full w-full flex flex-col p-8">
      
      <!-- Header Section - Cover + Picture + Buttons -->
      <div class="h-40 mb-8">
        <!-- Cover Background with Light Gradient -->
        <div class="relative h-full w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg">
          <!-- Subtle pattern overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-gray-100/30"></div>
          
          <!-- Content -->
          <div class="relative h-full flex items-center justify-between px-8">
            <!-- Left: Profile Picture + Info -->
            <div class="flex items-center space-x-6">
              <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 shadow-md">
                <Icon name="user" class="w-10 h-10 text-gray-600" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">David Giant ®</h2>
                <p class="text-gray-600">Licensed CPA & Financial Advisor</p>
              </div>
            </div>
            
            <!-- Right: Action Buttons -->
            <div class="flex space-x-4">
              <ActionButton
                v-for="icon in icons"
                :key="icon.id"
                :icon-name="icon.iconName"
                :animation-delay="icon.delay"
                variant="header"
                @click="$emit('open-popup', icon)"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Flip Cards Section (Central) -->
      <div class="flex-1 flex space-x-6 h-full mb-8">
        <div 
          v-for="card in cards.slice(0, 2)" 
          :key="card.id"
          class="flex-1 h-full cursor-pointer perspective-1000" 
          @click="flipCard(card.id)"
        >
          <div :class="[
            'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
            flippedCards.includes(card.id) ? 'rotate-y-180' : ''
          ]">
            <!-- Front of card -->
            <div class="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg backface-hidden flex flex-col justify-center items-center p-8 hover:bg-white/25 transition-all">
              <!-- Icon and Title -->
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <Icon :name="card.iconName" class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white">{{ card.title }} Details</h3>
              </div>

              <!-- Description -->
              <p class="text-white/80 text-center text-lg leading-relaxed mb-6 max-w-prose">
                {{ card.description }}
              </p>

              <!-- Key Metrics -->
              <div class="bg-white/10 rounded-lg p-4 mb-6 w-full max-w-sm">
                <h4 class="font-semibold text-white mb-2 text-lg text-left">Key Metrics:</h4>
                <ul class="space-y-1 text-white/80 text-sm list-disc list-inside text-left">
                  <li>Performance increased by 23% this quarter</li>
                  <li>User engagement up 15% compared to last month</li>
                  <li>Customer satisfaction rating: 4.8/5</li>
                </ul>
              </div>

              <!-- Premium insights -->
              <div class="flex items-center text-yellow-400 text-sm font-medium">
                <Icon name="star" class="w-4 h-4 mr-2" />
                Premium insights available
              </div>
            </div>

            <!-- Back of card -->
            <div class="absolute inset-0 w-full h-full bg-white backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center p-8">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  <Icon :name="card.iconName" class="w-5 h-5 text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-900">{{ card.title }} Details</h3>
              </div>
              <div class="space-y-4 text-gray-700">
                <p class="leading-relaxed">{{ card.description }}</p>
                <div class="bg-gray-50 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• Performance increased by 23% this quarter</li>
                    <li>• User engagement up 15% compared to last month</li>
                    <li>• Customer satisfaction rating: 4.8/5</li>
                  </ul>
                </div>
                <div class="flex items-center text-yellow-600 text-sm font-medium">
                  <Icon name="star" class="w-4 h-4 mr-2" />
                  Premium insights available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Side Panel Cards Row at Bottom -->
      <div class="flex-col flex items-end">
        <div class="w-full flex justify-center space-x-6">
          <div 
            v-for="(panelButton, index) in panelButtons" 
            :key="panelButton.id"
            class="bg-white/90 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-white transition-all duration-300 border border-gray-200 shadow-lg w-64"
            @click="$emit('open-side-panel', panelButton)"
          >
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-yellow-400 rounded-lg mr-4 flex items-center justify-center shadow-sm">
                <Icon :name="panelButton.iconName" class="w-5 h-5 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ panelButton.title }}</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">{{ panelButton.subtitle }}</p>
            <div class="mt-4 flex items-center text-gray-500 text-xs">
              <span>Click to view details</span>
              <Icon name="arrow-right" class="w-3 h-3 ml-2" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FlipCard from './FlipCard.vue'
import ActionButton from './ActionButton.vue'
import Icon from './Icons.vue'
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

// State for flippable cards
const flippedCards = ref<number[]>([])

const flipCard = (cardId: number) => {
  if (flippedCards.value.includes(cardId)) {
    flippedCards.value = flippedCards.value.filter(id => id !== cardId)
  } else {
    flippedCards.value.push(cardId)
  }
}
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
</style> 