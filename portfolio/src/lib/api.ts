import { supabase, ContactMessage, Project, Skill } from './supabase'

// Re-export types from supabase
export type { ContactMessage, Project, Skill } from './supabase'

// Contact Messages API
export const contactAPI = {
  // Create new contact message
  async create(data: Omit<ContactMessage, 'id' | 'created_at' | 'status'>) {
    if (!supabase) {
      console.warn('Supabase not configured, simulating message save')
      return { id: 1, ...data, status: 'new', created_at: new Date().toISOString() }
    }
    
    const { data: result, error } = await supabase
      .from('contact_messages')
      .insert([{ ...data, status: 'new' }])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Get all contact messages (admin)
  async getAll() {
    if (!supabase) {
      console.warn('Supabase not configured, returning empty array')
      return []
    }
    
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Update message status
  async updateStatus(id: number, status: 'new' | 'read' | 'replied') {
    if (!supabase) {
      console.warn('Supabase not configured')
      return null
    }
    
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ status })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Delete message
  async delete(id: number) {
    if (!supabase) {
      console.warn('Supabase not configured')
      return
    }
    
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Projects API
export const projectsAPI = {
  // Get all projects
  async getAll() {
    if (!supabase) return []
    
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Get featured projects
  async getFeatured() {
    if (!supabase) return []
    
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Create project
  async create(data: Omit<Project, 'id' | 'created_at'>) {
    if (!supabase) return null
    
    const { data: result, error } = await supabase
      .from('projects')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  },

  // Update project
  async update(id: number, data: Partial<Project>) {
    if (!supabase) return null
    
    const { data: result, error } = await supabase
      .from('projects')
      .update(data)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return result[0]
  }
}

// Skills API
export const skillsAPI = {
  // Get all skills
  async getAll() {
    if (!supabase) return []
    
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true })
    
    if (error) throw error
    return data
  },

  // Create skill
  async create(data: Omit<Skill, 'id'>) {
    if (!supabase) return null
    
    const { data: result, error } = await supabase
      .from('skills')
      .insert([data])
      .select()
    
    if (error) throw error
    return result[0]
  }
}