<template>
  <div class="h-screen w-screen bg-white text-gray-800 overflow-hidden relative p-5">
    <!-- Main Container with Flip Functionality -->
    <div class="h-full w-full perspective-1000">
      <div :class="[
        'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
        isContainerFlipped ? 'rotate-y-180' : ''
      ]">
        <!-- Single Flip Icon Button (visible on both sides) -->
        <button @click="flipContainer"
          :class="[
            'absolute top-6 right-6 z-30 w-12 h-12 rounded-xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105',
            isContainerFlipped 
              ? 'bg-white bg-opacity-20 border border-white border-opacity-30 hover:bg-opacity-30' 
              : 'bg-gray-900 border border-gray-800 hover:bg-gray-800'
          ]">
          <Icon
            name="arrow-right"
            class="w-5 h-5 transition-transform duration-300"
            :class="isContainerFlipped ? 'text-gray-900' : 'text-white'"
          />
        </button>
        <!-- Front of main container (Profile Layout) -->
        <div
          class="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg backface-hidden flex p-12">
          <div class="flex w-full h-full">
            <!-- Profile Image - Takes up left side -->
            <div class="flex-shrink-0 w-2/5 pr-12 flex items-center">
              <div class="w-full aspect-square bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 rounded-2xl overflow-hidden shadow-xl">
                <div class="w-full h-full bg-gradient-to-br from-black/20 to-black/40 flex items-center justify-center">
                  <div class="text-center text-white">
                    <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="user" class="w-16 h-16 text-white" />
                    </div>
                    <p class="text-xl font-medium">Professional Portrait</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Profile Information - Takes up right side -->
            <div class="flex-1 flex flex-col justify-center">
              <!-- Header with Plus Icon -->
              <div class="flex items-center mb-8">
                <div class="w-7 h-7 bg-gray-900 rounded flex items-center justify-center mr-4">
                  <span class="text-white text-sm font-bold">+</span>
                </div>
                <span class="text-gray-900 font-semibold text-lg">About Me</span>
              </div>

              <!-- Name -->
              <h1 class="text-5xl font-bold text-gray-900 mb-8 leading-tight">David Giant ®</h1>

              <!-- Description -->
              <p class="text-gray-600 leading-relaxed mb-10 text-lg">
                David is a licensed CPA based in California, backed by years of experience in tax advisory, 
                financial planning, and business structuring. With a deep understanding of California state 
                laws and federal tax regulations, David is committed to offering transparent, compliant, 
                and strategic financial guidance for both individuals and corporations.
              </p>

              <!-- Read My Full Story Button -->
              <button class="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors mb-12 text-lg w-fit">
                Read My Full Story
                <div class="ml-3 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="arrow-right" class="w-4 h-4 text-white" />
                </div>
              </button>

              <!-- Info Cards -->
              <div class="flex space-x-8">
                <!-- License Number Card -->
                <div class="bg-gray-50 rounded-2xl p-6 flex-1">
                  <div class="flex items-center mb-3">
                    <div class="w-6 h-6 bg-gray-400 rounded mr-3 flex items-center justify-center">
                      <Icon name="cog" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 class="font-semibold text-gray-900 mb-2 text-lg">License Number</h3>
                  <p class="text-gray-600">California CPA #54337</p>
                </div>

                <!-- Location Card -->
                <div class="bg-gray-50 rounded-2xl p-6 flex-1">
                  <div class="flex items-center mb-3">
                    <div class="w-6 h-6 bg-gray-400 rounded mr-3 flex items-center justify-center">
                      <Icon name="globe" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 class="font-semibold text-gray-900 mb-2 text-lg">Location</h3>
                  <p class="text-gray-600">Newport Beach, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Back of main container (Dashboard Components) -->
        <div
          class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-2xl shadow-lg backface-hidden rotate-y-180">

          <!-- Main Content -->
          <div class="relative z-10 h-full w-full flex flex-col">
            <!-- Top Section - Cards and Modal Buttons -->
            <div class="flex-1 flex justify-between px-8 py-12">
              <!-- Left Side - Cards -->
              <div class="flex flex-col justify-center space-y-6">
                <div v-for="card in cards" :key="card.id" class="relative w-80 h-48 cursor-pointer perspective-1000"
                  @click="flipCard(card.id)">
                  <div :class="[
                    'relative w-full h-full transition-transform duration-700 transform-style-preserve-3d',
                    flippedCards.includes(card.id) ? 'rotate-y-180' : ''
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
              </div>

              <!-- Right Side - Modal Buttons Column -->
              <div class="flex flex-col justify-center space-y-6">
                <div v-for="icon in icons" :key="icon.id" :class="[
                  'cursor-pointer transition-all duration-300 hover:scale-105',
                  'animate-float'
                ]" :style="{ animationDelay: icon.delay }" @click="openPopup(icon)">
                  <div
                    class="w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gray-50">
                    <Icon :name="icon.iconName" class="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Section - Side Panel Buttons Row -->
            <div class="px-8 pb-8">
              <div class="flex justify-center space-x-6">
                <div v-for="(panelButton, index) in panelButtons" :key="panelButton.id" :class="[
                  'cursor-pointer transition-all duration-300 hover:scale-105',
                  'animate-float'
                ]" :style="{ animationDelay: (index * 0.5) + 's' }" @click="openSidePanel(panelButton)">
                  <div
                    class="w-16 h-16 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:bg-gray-50">
                    <Icon :name="panelButton.iconName" class="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup Card -->
    <Transition name="popup" enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0">
      <div v-if="activeIcon" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click="closePopup">
        <div class="bg-white text-black p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl border border-gray-200"
          @click.stop>
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Icon :name="activeIcon.iconName" class="w-5 h-5 text-white" />
              </div>
              <h2 class="text-xl font-semibold text-gray-900">{{ activeIcon.title }}</h2>
            </div>
            <button @click="closePopup" class="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="x-mark" class="w-6 h-6" />
            </button>
          </div>
          <p class="text-gray-600 leading-relaxed mb-6 text-sm">{{ activeIcon.description }}</p>
          <div class="flex space-x-3">
            <button @click="closePopup"
              class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
              Close
            </button>
            <button
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Side Panel -->
    <Transition name="slide" enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="transform translate-x-full" enter-to-class="transform translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in" leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full">
      <div v-if="activePanelButton"
        class="fixed top-6 right-6 bottom-6 w-96 bg-white shadow-2xl z-50 border-l border-gray-200 rounded-xl">
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
            <button @click="closeSidePanel" class="text-gray-400 hover:text-gray-600 transition-colors">
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
                  <div v-for="(bar, index) in activePanelButton.chartData" :key="index"
                    class="bg-white bg-opacity-30 rounded-t" :style="{ height: bar + '%', width: '20px' }"></div>
                </div>
              </div>

              <!-- Description -->
              <div>
                <h3 class="text-sm font-medium text-gray-700 mb-2">Analysis</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ activePanelButton.description }}</p>
              </div>

              <!-- Action Button -->
              <button
                class="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium">
                View Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Overlay for side panel -->
    <div v-if="activePanelButton" class="fixed inset-0 bg-black bg-opacity-25 z-40" @click="closeSidePanel"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from './components/Icons.vue'

interface IconData {
  id: number
  iconName: 'home' | 'user' | 'cog' | 'heart' | 'lightbulb' | 'star' | 'globe' | 'x-mark' | 'arrow-right'
  title: string
  description: string
  position: string
  delay: string
}

const cards = ref([
  {
    id: 1,
    iconName: 'home' as const,
    title: 'Growth',
    description: 'Track your business growth with comprehensive analytics and insights. Monitor key performance indicators and make data-driven decisions.'
  },
  {
    id: 2,
    iconName: 'lightbulb' as const,
    title: 'Analytics',
    description: 'Advanced analytics tools to understand your data better. Get detailed reports and visualizations to identify trends and opportunities.'
  },
  {
    id: 3,
    iconName: 'star' as const,
    title: 'Performance',
    description: 'Optimize your performance with our intelligent recommendations. Track metrics that matter and improve your business outcomes.'
  }
])

const panelButtons = ref([
  {
    id: 1,
    iconName: 'cog' as const,
    title: 'Market Analysis',
    subtitle: 'Contextualizing Growth',
    description: 'Our market analysis reveals strong growth potential in emerging sectors. The data shows a 15% increase in market share over the last quarter, with particular strength in digital transformation services.',
    stats: {
      metric1: { value: '85%', label: 'Market Share' },
      metric2: { value: '2.9%', label: 'Growth Rate' }
    },
    chartData: [65, 78, 82, 91, 88, 95, 92, 87]
  },
  {
    id: 2,
    iconName: 'user' as const,
    title: 'User Insights',
    subtitle: 'Understanding Behavior',
    description: 'User engagement metrics show positive trends across all platforms. Customer satisfaction has improved by 23% this quarter, with notable increases in retention rates.',
    stats: {
      metric1: { value: '92%', label: 'Satisfaction' },
      metric2: { value: '156K', label: 'Active Users' }
    },
    chartData: [45, 52, 68, 74, 82, 79, 85, 90]
  },
  {
    id: 3,
    iconName: 'globe' as const,
    title: 'Global Reach',
    subtitle: 'Worldwide Impact',
    description: 'Our global expansion strategy is showing excellent results. We have successfully entered 12 new markets this year, with revenue growing 34% internationally.',
    stats: {
      metric1: { value: '47', label: 'Countries' },
      metric2: { value: '$2.1M', label: 'Revenue' }
    },
    chartData: [30, 42, 58, 65, 72, 78, 85, 88]
  }
])

const icons = ref<IconData[]>([
  {
    id: 1,
    iconName: 'lightbulb',
    title: 'Insights',
    description: 'Get actionable insights from your data with our advanced analytics engine. Discover patterns and trends that drive business growth.',
    position: '',
    delay: '0s'
  },
  {
    id: 2,
    iconName: 'heart',
    title: 'Favorites',
    description: 'Save and organize your most important metrics and reports. Quick access to the data that matters most to your business.',
    position: '',
    delay: '0.5s'
  },
  {
    id: 3,
    iconName: 'star',
    title: 'Featured',
    description: 'Explore our featured analytics tools and premium insights. Access exclusive data visualizations and advanced reporting features.',
    position: '',
    delay: '1s'
  }
])

const activeIcon = ref<IconData | null>(null)
const flippedCards = ref<number[]>([])
const activePanelButton = ref<typeof panelButtons.value[0] | null>(null)
const isContainerFlipped = ref(false)

const flipCard = (cardId: number) => {
  if (flippedCards.value.includes(cardId)) {
    flippedCards.value = flippedCards.value.filter(id => id !== cardId)
  } else {
    flippedCards.value.push(cardId)
  }
}

const flipContainer = () => {
  isContainerFlipped.value = !isContainerFlipped.value
}

const openPopup = (icon: IconData) => {
  activeIcon.value = icon
}

const closePopup = () => {
  activeIcon.value = null
}

const openSidePanel = (panelButton: typeof panelButtons.value[0]) => {
  activePanelButton.value = panelButton
}

const closeSidePanel = () => {
  activePanelButton.value = null
}
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