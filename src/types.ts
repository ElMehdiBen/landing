export interface IconData {
  id: number
  iconName: 'home' | 'user' | 'cog' | 'heart' | 'lightbulb' | 'star' | 'globe' | 'x-mark' | 'arrow-right'
  title: string
  description: string
  position: string
  delay: string
}

export interface Card {
  id: number
  iconName: 'home' | 'user' | 'cog' | 'heart' | 'lightbulb' | 'star' | 'globe' | 'x-mark' | 'arrow-right'
  title: string
  description: string
}

export interface PanelButton {
  id: number
  iconName: 'home' | 'user' | 'cog' | 'heart' | 'lightbulb' | 'star' | 'globe' | 'x-mark' | 'arrow-right'
  title: string
  subtitle: string
  description: string
  stats: {
    metric1: { value: string; label: string }
    metric2: { value: string; label: string }
  }
  chartData: number[]
}

export interface ProfileData {
  name: string
  description: string
  license: {
    title: string
    value: string
  }
  location: {
    title: string
    value: string
  }
}

export type IconName = 'home' | 'user' | 'cog' | 'heart' | 'lightbulb' | 'star' | 'globe' | 'x-mark' | 'arrow-right' 