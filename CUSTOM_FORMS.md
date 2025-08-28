# Custom Form Fields in Event Markdown

This guide explains how to add custom form fields directly to your event markdown files.

## Overview

You can now easily add custom registration form fields to any event by adding them directly to the event's markdown frontmatter. The system automatically includes the required default fields (Full Name, Email, Phone, Student ID, and Gender) and appends your custom fields.

## Basic Usage

Add custom fields to your event markdown file using the `customFormFields` property in the frontmatter:

```yaml
---
title: "My Workshop"
# ... other event properties
customFormFields:
  - name: "experience"
    label: "Programming Experience"
    type: "select"
    required: true
    options:
      - "Beginner"
      - "Intermediate"
      - "Advanced"
  - name: "goals"
    label: "What are your goals?"
    type: "textarea"
    required: false
    placeholder: "Tell us what you hope to achieve..."
---
```

## Field Configuration

Each custom field supports the following properties:

### Required Properties

- **`name`**: Unique identifier for the field (letters, numbers, underscores only)
- **`label`**: Display name shown to users
- **`type`**: Field type (see supported types below)

### Optional Properties

- **`required`**: Whether the field is mandatory (default: `false`)
- **`placeholder`**: Hint text shown in the field
- **`options`**: Array of options for select fields (required for select type)

## Supported Field Types

### Text Input (`text`)
```yaml
- name: "specialRequests"
  label: "Special Requests"
  type: "text"
  required: false
  placeholder: "Any special accommodations needed?"
```

### Email (`email`)
```yaml
- name: "emergencyContact"
  label: "Emergency Contact Email"
  type: "email"
  required: false
  placeholder: "emergency@example.com"
```

### Phone Number (`tel`)
```yaml
- name: "emergencyPhone"
  label: "Emergency Contact Phone"
  type: "tel"
  required: false
  placeholder: "+1 (555) 123-4567"
```

### Number (`number`)
```yaml
- name: "yearsExperience"
  label: "Years of Experience"
  type: "number"
  required: false
  placeholder: "0"
```

### Dropdown Select (`select`)
```yaml
- name: "tshirtSize"
  label: "T-shirt Size"
  type: "select"
  required: true
  options:
    - "XS"
    - "S"
    - "M"
    - "L"
    - "XL"
    - "XXL"
```

### Text Area (`textarea`)
```yaml
- name: "motivation"
  label: "Why do you want to attend?"
  type: "textarea"
  required: true
  placeholder: "Tell us about your motivation and what you hope to learn..."
```

## Complete Example

Here's a complete event markdown file with custom form fields:

```yaml
---
title: "Advanced React Workshop"
description: "Learn advanced React patterns and best practices"
date: 2025-09-20
time: "10:00 AM"
endTime: "4:00 PM"
location: "Tech Hub Conference Room"
type: "workshop"
registrationRequired: true
organizer: "Programming Society"
capacity: 30
formSubmitUrl: "https://your-backend.com/register"
customFormFields:
  - name: "reactExperience"
    label: "React Experience Level"
    type: "select"
    required: true
    options:
      - "Complete Beginner"
      - "Basic (< 1 year)"
      - "Intermediate (1-3 years)"
      - "Advanced (3+ years)"
  
  - name: "currentProjects"
    label: "Current Projects"
    type: "textarea"
    required: false
    placeholder: "Tell us about any React projects you're working on..."
  
  - name: "laptopBrand"
    label: "Laptop Operating System"
    type: "select"
    required: true
    options:
      - "Windows"
      - "macOS"
      - "Linux"
      - "I need a lab computer"
  
  - name: "learningGoals"
    label: "Learning Goals"
    type: "textarea"
    required: true
    placeholder: "What specific React concepts do you want to master?"
  
  - name: "githubUsername"
    label: "GitHub Username"
    type: "text"
    required: false
    placeholder: "your-username"
  
  - name: "dietaryRestrictions"
    label: "Dietary Restrictions"
    type: "text"
    required: false
    placeholder: "Any allergies or dietary preferences?"
---

# Workshop content goes here...
```

## Default Required Fields

Every registration form automatically includes these required fields:

1. **Full Name** (text, required)
2. **Email Address** (email, required)
3. **Phone Number** (tel, required)
4. **Student ID** (text, required)
5. **Gender** (select: Male/Female, required)

Your custom fields will appear after these default fields.

## Form Submission

### Custom Submit URL
You can specify where the form data should be sent using the `formSubmitUrl` property:

```yaml
formSubmitUrl: "https://your-backend.com/api/register"
```

### Form Data Structure
The submitted form data will include:

- All default field values
- All custom field values
- Event metadata (eventId, submittedAt, etc.)

Example submission data:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "studentId": "CS123456",
  "gender": "Male",
  "reactExperience": "Intermediate (1-3 years)",
  "currentProjects": "Building a todo app with React hooks",
  "laptopBrand": "macOS",
  "learningGoals": "Want to learn about React performance optimization",
  "githubUsername": "johndoe",
  "dietaryRestrictions": "",
  "eventId": "advanced-react-workshop",
  "submittedAt": "2025-08-28T15:30:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "referrer": "https://yoursite.com/events"
}
```

## Best Practices

### Field Naming
- Use camelCase for field names: `firstName`, `phoneNumber`, `tshirtSize`
- Keep names descriptive but concise
- Avoid spaces and special characters

### Field Ordering
- Put most important custom fields first
- Group related fields together
- Consider the user experience when ordering fields

### Required vs Optional
- Only mark fields as required if they're truly necessary
- Provide helpful placeholder text for optional fields
- Consider privacy implications of required fields

### Select Options
- Keep option lists concise and relevant
- Order options logically (alphabetical, by importance, etc.)
- Consider adding an "Other" option when appropriate

## Troubleshooting

### Common Issues

1. **Field not appearing**: Check field name doesn't conflict with default fields
2. **Select field empty**: Ensure `options` array is provided for select fields
3. **Form not submitting**: Verify `formSubmitUrl` is a valid URL
4. **Styling issues**: Custom fields inherit the same styling as default fields

### Field Name Conflicts
If you use a field name that matches a default field, the default field takes precedence. Avoid these names:
- `fullName`
- `email` 
- `phone`
- `studentId`
- `gender`

### Validation
The system automatically validates:
- Required fields are filled
- Email fields contain valid email addresses
- Phone fields contain valid phone numbers
- Select fields have valid options selected

## Migration from Hardcoded Forms

If you previously had hardcoded forms in components, you can now move those fields to the event markdown:

1. Identify the custom fields in your component
2. Add them to the event's `customFormFields` array
3. Remove the hardcoded component code
4. Test the registration form

This approach makes your events more maintainable and allows content creators to customize forms without touching code.
