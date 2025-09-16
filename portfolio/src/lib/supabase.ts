import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if we have valid environment variables
const hasValidConfig = supabaseUrl !== 'https://placeholder.supabase.co' && supabaseAnonKey !== 'placeholder-key'

export const supabase = hasValidConfig ? createClient(supabaseUrl, supabaseAnonKey) : null

export interface ContactMessage {
  id?: number
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
  status?: 'new' | 'read' | 'replied'
}

export interface Project {
  id?: number
  title: string
  description: string
  short_description: string
  image_url?: string
  demo_url?: string
  github_url?: string
  tech_stack: string[]
  featured: boolean
  created_at?: string
}

export interface Skill {
  id?: number
  name: string
  category: string
  level: number
  icon_url?: string
}