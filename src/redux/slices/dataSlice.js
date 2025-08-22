import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  skills: [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-green-500' },
    { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-600' }
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with React, Redux, and Stripe integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=480&fit=crop',
      tech: ['React', 'Redux', 'Stripe', 'Tailwind'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative productivity tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=480&fit=crop',
      tech: ['React', 'Firebase', 'Framer Motion'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive analytics dashboard with beautiful data visualizations',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=480&fit=crop',
      tech: ['React', 'D3.js', 'TypeScript'],
      github: '#',
      demo: '#'
    }
  ],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {}
})

export default dataSlice.reducer
