/**
 * Utility functions and types for the Registration Form component
 */

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'number';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface RegistrationFormProps {
  eventTitle: string;
  eventId?: string;
  submitUrl?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
  accentColor?: string;
  fields?: FormField[];
}

// Pre-defined form field sets for common event types
export const FORM_FIELD_PRESETS = {
  // Standard event registration
  standard: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: 'Enter your phone number' },
    { name: 'studentId', label: 'Student ID', type: 'text', required: false, placeholder: 'Enter your student ID (if applicable)' },
    { name: 'year', label: 'Academic Year', type: 'select', required: false, options: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Graduate', 'Other'] },
    { name: 'experience', label: 'Relevant Experience', type: 'textarea', required: false, placeholder: 'Tell us about your relevant experience or expectations...' }
  ] as FormField[],

  // Workshop registration
  workshop: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: 'Enter your phone number' },
    { name: 'experience', label: 'Experience Level', type: 'select', required: true, options: ['Beginner', 'Intermediate', 'Advanced'] },
    { name: 'expectations', label: 'What do you hope to learn?', type: 'textarea', required: false, placeholder: 'Tell us what you hope to gain from this workshop...' }
  ] as FormField[],

  // Hackathon registration
  hackathon: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: 'Enter your phone number' },
    { name: 'teamName', label: 'Team Name', type: 'text', required: false, placeholder: 'Enter your team name (leave blank if individual)' },
    { name: 'skillLevel', label: 'Programming Experience', type: 'select', required: true, options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
    { name: 'technologies', label: 'Preferred Technologies', type: 'textarea', required: false, placeholder: 'List technologies you\'re comfortable with...' },
    { name: 'projectIdea', label: 'Project Idea (Optional)', type: 'textarea', required: false, placeholder: 'Briefly describe what you want to build...' },
    { name: 'dietaryRestrictions', label: 'Dietary Restrictions', type: 'text', required: false, placeholder: 'Any dietary restrictions or allergies?' }
  ] as FormField[],

  // Society membership
  membership: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'studentId', label: 'Student ID', type: 'text', required: true, placeholder: 'Enter your student ID' },
    { name: 'year', label: 'Academic Year', type: 'select', required: true, options: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Graduate'] },
    { name: 'interests', label: 'Areas of Interest', type: 'textarea', required: false, placeholder: 'Tell us about your interests and goals...' }
  ] as FormField[],

  // Conference registration
  conference: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: 'Enter your phone number' },
    { name: 'organization', label: 'Organization/Institution', type: 'text', required: false, placeholder: 'Your company or university' },
    { name: 'jobTitle', label: 'Job Title/Position', type: 'text', required: false, placeholder: 'Your current position' },
    { name: 'interests', label: 'Sessions of Interest', type: 'textarea', required: false, placeholder: 'Which sessions or topics are you most interested in?' },
    { name: 'networking', label: 'Networking Preferences', type: 'select', required: false, options: ['Interested in networking', 'Prefer focused learning', 'Open to both'] }
  ] as FormField[],

  // Competition registration
  competition: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: 'Enter your phone number' },
    { name: 'studentId', label: 'Student ID', type: 'text', required: true, placeholder: 'Enter your student ID' },
    { name: 'teamMembers', label: 'Team Members', type: 'textarea', required: false, placeholder: 'List other team members (name, email) if participating as a team...' },
    { name: 'experience', label: 'Relevant Experience', type: 'textarea', required: false, placeholder: 'Tell us about your relevant experience...' },
    { name: 'category', label: 'Competition Category', type: 'select', required: true, options: ['Individual', 'Team (2-3 members)', 'Team (4+ members)'] }
  ] as FormField[]
};

// Color schemes for different event types
export const COLOR_SCHEMES = {
  workshop: {
    gradientColors: { from: 'from-blue-500', to: 'to-purple-600' },
    accentColor: 'blue'
  },
  hackathon: {
    gradientColors: { from: 'from-green-500', to: 'to-blue-600' },
    accentColor: 'green'
  },
  conference: {
    gradientColors: { from: 'from-purple-500', to: 'to-pink-600' },
    accentColor: 'purple'
  },
  competition: {
    gradientColors: { from: 'from-orange-500', to: 'to-red-600' },
    accentColor: 'orange'
  },
  seminar: {
    gradientColors: { from: 'from-cyan-500', to: 'to-blue-600' },
    accentColor: 'cyan'
  },
  membership: {
    gradientColors: { from: 'from-indigo-500', to: 'to-purple-600' },
    accentColor: 'indigo'
  },
  meetup: {
    gradientColors: { from: 'from-teal-500', to: 'to-green-600' },
    accentColor: 'teal'
  }
};

/**
 * Helper function to create registration form props quickly
 */
export function createRegistrationForm(
  eventTitle: string,
  eventType: keyof typeof FORM_FIELD_PRESETS,
  options: {
    eventId?: string;
    submitUrl?: string;
    customFields?: FormField[];
    customColors?: {
      gradientColors?: { from: string; to: string };
      accentColor?: string;
    };
  } = {}
): RegistrationFormProps {
  const {
    eventId,
    submitUrl = 'https://example.com',
    customFields,
    customColors = {}
  } = options;

  const fields = customFields || FORM_FIELD_PRESETS[eventType] || FORM_FIELD_PRESETS.standard;
  const colorKey = (eventType in COLOR_SCHEMES ? eventType : 'workshop') as keyof typeof COLOR_SCHEMES;
  const colors = COLOR_SCHEMES[colorKey];

  return {
    eventTitle,
    eventId,
    submitUrl,
    gradientColors: customColors.gradientColors || colors.gradientColors,
    accentColor: customColors.accentColor || colors.accentColor,
    fields
  };
}

/**
 * Validate form data on the client side
 */
export function validateFormData(formData: FormData, fields: FormField[]): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};
  let isValid = true;

  fields.forEach(field => {
    const value = formData.get(field.name) as string;
    
    if (field.required && (!value || value.trim() === '')) {
      errors[field.name] = 'This field is required';
      isValid = false;
      return;
    }

    if (value && field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[field.name] = 'Please enter a valid email address';
        isValid = false;
      }
    }

    if (value && field.type === 'tel') {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        errors[field.name] = 'Please enter a valid phone number';
        isValid = false;
      }
    }
  });

  return { isValid, errors };
}

/**
 * Format form data for submission
 */
export function formatFormData(formData: FormData, eventId?: string): Record<string, any> {
  const data: Record<string, any> = {};
  
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Add metadata
  data.submittedAt = new Date().toISOString();
  data.userAgent = navigator.userAgent;
  data.referrer = document.referrer;
  
  if (eventId) {
    data.eventId = eventId;
  }

  return data;
}

export default {
  FORM_FIELD_PRESETS,
  COLOR_SCHEMES,
  createRegistrationForm,
  validateFormData,
  formatFormData
};
