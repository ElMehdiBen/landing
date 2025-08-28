<template>
  <div class="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg backface-hidden flex p-12">
    <div class="flex w-full h-full">
      <!-- Profile Image - Takes up left side -->
      <div class="flex-shrink-0 w-2/5 pr-12 flex items-center">
        <div class="w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
          <div class="w-full h-full bg-gray-900 flex items-center justify-center">
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
          <div class="w-7 h-7 bg-yellow-400 rounded flex items-center justify-center mr-4">
            <span class="text-white text-sm font-bold">+</span>
          </div>
          <span class="text-gray-900 font-semibold text-lg">About Me</span>
        </div>

        <!-- Name -->
        <h1 class="text-5xl font-bold text-gray-900 mb-8 leading-tight">{{ profile.name }}</h1>

        <!-- Description -->
        <p class="text-gray-600 leading-relaxed mb-10 text-lg">
          {{ profile.description }}
        </p>

        <!-- Read My Full Story Button -->
        <button class="group inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-colors mb-12 text-lg w-fit">
          Read My Full Story
          <div class="ml-3 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
            <Icon name="arrow-right" class="w-4 h-4 text-white group-hover:text-gray-900 transition-colors" />
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
            <h3 class="font-semibold text-gray-900 mb-2 text-lg">{{ profile.license.title }}</h3>
            <p class="text-gray-600">{{ profile.license.value }}</p>
          </div>

          <!-- Location Card -->
          <div class="bg-gray-50 rounded-2xl p-6 flex-1">
            <div class="flex items-center mb-3">
              <div class="w-6 h-6 bg-gray-400 rounded mr-3 flex items-center justify-center">
                <Icon name="globe" class="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2 text-lg">{{ profile.location.title }}</h3>
            <p class="text-gray-600">{{ profile.location.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icons.vue'
import type { ProfileData } from '../types'

interface Props {
  profile: ProfileData
}

const props = defineProps<Props>()
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}
</style> 