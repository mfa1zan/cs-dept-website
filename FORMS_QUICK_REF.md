# Custom Form Fields - Quick Reference

## Schema Definition

```typescript
// In src/content/config.ts
customFormFields: z.array(z.object({
  name: z.string(),
  label: z.string(),
  type: z.enum(['text', 'email', 'tel', 'select', 'textarea', 'number']),
  required: z.boolean().default(false),
  placeholder: z.string().optional(),
  options: z.array(z.string()).optional(), // for select fields
})).optional(),
formSubmitUrl: z.string().url().optional(),
```

## Quick Examples

### Simple Text Field

```yaml
customFormFields:
  - name: 'company'
    label: 'Company/Organization'
    type: 'text'
    required: false
    placeholder: 'Your current workplace'
```

### Required Select Field

```yaml
customFormFields:
  - name: 'experience'
    label: 'Experience Level'
    type: 'select'
    required: true
    options: ['Beginner', 'Intermediate', 'Advanced']
```

### Optional Textarea

```yaml
customFormFields:
  - name: 'questions'
    label: 'Questions or Comments'
    type: 'textarea'
    required: false
    placeholder: 'Any questions about the event?'
```

## Default Fields (Always Included)

1. Full Name (text, required)
2. Email Address (email, required)
3. Phone Number (tel, required)
4. Student ID (text, required)
5. Gender (select: Male/Female, required)

## Field Types

- `text`: Single-line text input
- `email`: Email validation
- `tel`: Phone number input
- `number`: Numeric input
- `select`: Dropdown (requires `options`)
- `textarea`: Multi-line text input

## Processing Flow

1. Event markdown → content schema validation
2. Default fields + custom fields merged in `createFormWithDefaults()`
3. Form rendered with all fields
4. Submission to `formSubmitUrl` or default endpoint
