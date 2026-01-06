export interface FormData {
  name: string
  email: string
  message: string
}

export interface ValidationErrors {
  name?: string
  email?: string
  message?: string
}

export const validateForm = (formData: FormData): { isValid: boolean; errors: ValidationErrors } => {
  const errors: ValidationErrors = {}
  
  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required'
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const handleFormSubmit = async (
  formData: FormData,
  onSuccess: () => void,
  onError: (error: string) => void
): Promise<void> => {
  try {
    // Simulate API call - replace with actual endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      onSuccess()
    } else {
      onError('Failed to send message. Please try again.')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    onError('Network error. Please check your connection and try again.')
  }
} 