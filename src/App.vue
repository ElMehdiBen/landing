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
        <ProfileCard :profile="profileData" />

        <!-- Back of main container (Dashboard Components) -->
        <DashboardView 
          :cards="cards" 
          :icons="icons" 
          :panel-buttons="panelButtons"
          @open-popup="openPopup"
          @open-side-panel="openSidePanel"
        />
      </div>
    </div>

    <!-- Popup Card -->
    <ModalPopup 
      :is-visible="!!activeIcon" 
      :active-icon="activeIcon"
      @close="closePopup"
    />

    <!-- Side Panel -->
    <SidePanel 
      :is-visible="!!activePanelButton" 
      :active-panel-button="activePanelButton"
      @close="closeSidePanel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from './components/Icons.vue'
import ProfileCard from './components/ProfileCard.vue'
import DashboardView from './components/DashboardView.vue'
import ModalPopup from './components/ModalPopup.vue'
import SidePanel from './components/SidePanel.vue'
import type { IconData, Card, PanelButton, ProfileData } from './types'

// Profile data
const profileData: ProfileData = {
  name: 'David Giant ®',
  description: 'David is a licensed CPA based in California, backed by years of experience in tax advisory, financial planning, and business structuring. With a deep understanding of California state laws and federal tax regulations, David is committed to offering transparent, compliant, and strategic financial guidance for both individuals and corporations.',
  license: {
    title: 'License Number',
    value: 'California CPA #54337'
  },
  location: {
    title: 'Location',
    value: 'Newport Beach, CA'
  }
}

// Cards data
const cards = ref<Card[]>([
  {
    id: 1,
    iconName: 'home',
    title: 'Growth',
    description: 'Track your business growth with comprehensive analytics and insights. Monitor key performance indicators and make data-driven decisions.'
  },
  {
    id: 2,
    iconName: 'lightbulb',
    title: 'Analytics',
    description: 'Advanced analytics tools to understand your data better. Get detailed reports and visualizations to identify trends and opportunities.'
  },
  {
    id: 3,
    iconName: 'star',
    title: 'Performance',
    description: 'Optimize your performance with our intelligent recommendations. Track metrics that matter and improve your business outcomes.'
  }
])

// Panel buttons data
const panelButtons = ref<PanelButton[]>([
  {
    id: 1,
    iconName: 'cog',
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
    iconName: 'user',
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
    iconName: 'globe',
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

// Icons data
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

// State
const activeIcon = ref<IconData | null>(null)
const activePanelButton = ref<PanelButton | null>(null)
const isContainerFlipped = ref(false)

// Methods
const flipContainer = () => {
  isContainerFlipped.value = !isContainerFlipped.value
}

const openPopup = (icon: IconData) => {
  activeIcon.value = icon
}

const closePopup = () => {
  activeIcon.value = null
}

const openSidePanel = (panelButton: PanelButton) => {
  activePanelButton.value = panelButton
}

const closeSidePanel = () => {
  activePanelButton.value = null
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>