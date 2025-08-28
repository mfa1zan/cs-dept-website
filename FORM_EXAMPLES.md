# 🚀 Custom Form Fields - Complete Examples

This file contains complete examples showing the custom form fields feature in action.

## Example 1: Simple Workshop

**File: `src/content/events/python-basics.md`**

```markdown
---
title: "Python Programming Basics"
description: "Learn Python fundamentals in this beginner-friendly workshop"
date: 2025-09-10
time: "2:00 PM"
endTime: "5:00 PM"
location: "Computer Lab 101"
type: "workshop"
registrationRequired: true
organizer: "Programming Society"
capacity: 25
customFormFields:
  - name: "programmingExperience"
    label: "Programming Experience"
    type: "select"
    required: true
    options:
      - "Never programmed before"
      - "Some experience with other languages"
      - "Basic Python knowledge"
  - name: "laptopAvailable"
    label: "Will you bring a laptop?"
    type: "select" 
    required: true
    options: ["Yes", "No - need lab computer"]
---

# Python Programming Basics

Learn the fundamentals of Python programming in this hands-on workshop perfect for beginners.

## What You'll Learn
- Python syntax and basic concepts
- Variables, data types, and operations
- Control structures (if/else, loops)
- Functions and basic debugging

## Requirements
- No prior programming experience needed
- Laptop recommended (lab computers available)
- Enthusiasm to learn!
```

## Example 2: Complex Hackathon

**File: `src/content/events/ai-hackathon-2025.md`**

```markdown
---
title: "AI Innovation Hackathon 2025"
description: "48-hour hackathon focused on AI solutions for real-world problems"
date: 2025-10-15
time: "6:00 PM"
endTime: "2025-10-17T18:00:00"
location: "Innovation Hub, Main Campus"
type: "hackathon"
registrationRequired: true
organizer: "CS Department & TechCorp"
capacity: 100
formSubmitUrl: "https://hackathon-backend.example.com/register"
customFormFields:
  - name: "teamFormation"
    label: "Team Status"
    type: "select"
    required: true
    options:
      - "I have a team (2-4 members)"
      - "I need a team - match me with others"
      - "I want to participate solo"
  
  - name: "aiExperience"
    label: "AI/ML Experience Level"
    type: "select"
    required: true
    options:
      - "Beginner - basic understanding"
      - "Intermediate - some projects/courses"
      - "Advanced - professional experience"
      - "Expert - research/industry background"
  
  - name: "programmingLanguages"
    label: "Programming Languages (most comfortable)"
    type: "textarea"
    required: true
    placeholder: "List languages you're proficient in (e.g., Python, JavaScript, Java...)"
  
  - name: "problemDomain"
    label: "Preferred Problem Domain"
    type: "select"
    required: false
    options:
      - "Healthcare & Medicine"
      - "Environmental Solutions"
      - "Education Technology"
      - "Financial Technology"
      - "Social Impact"
      - "No preference - open to all"
  
  - name: "specialSkills"
    label: "Special Skills or Expertise"
    type: "textarea"
    required: false
    placeholder: "Any special skills, frameworks, or domains you can contribute (UI/UX, data science, cloud platforms, etc.)"
  
  - name: "dietaryRestrictions"
    label: "Dietary Restrictions/Allergies"
    type: "text"
    required: false
    placeholder: "We'll provide meals throughout the event"
  
  - name: "tshirtSize"
    label: "T-shirt Size"
    type: "select"
    required: true
    options: ["XS", "S", "M", "L", "XL", "XXL"]
  
  - name: "emergencyContact"
    label: "Emergency Contact Name"
    type: "text"
    required: true
    placeholder: "Full name of emergency contact"
  
  - name: "emergencyPhone"
    label: "Emergency Contact Phone"
    type: "tel"
    required: true
    placeholder: "Phone number of emergency contact"
---

# AI Innovation Hackathon 2025

Join us for the biggest AI hackathon of the year! 48 hours of intense coding, learning, and innovation.

## Challenge Themes
1. **Healthcare AI**: Diagnostic tools, treatment optimization, health monitoring
2. **Climate Tech**: Environmental monitoring, sustainability solutions
3. **EdTech**: Personalized learning, accessibility tools
4. **Social Good**: Community impact, accessibility, inclusion

## Schedule
### Friday, October 15
- **6:00 PM**: Registration & Welcome
- **7:00 PM**: Opening Ceremony & Challenge Presentations
- **8:00 PM**: Team Formation & Networking
- **9:00 PM**: Hacking Begins!

### Saturday, October 16
- **8:00 AM**: Breakfast & Mentor Check-ins
- **12:00 PM**: Lunch & Sponsor Showcases
- **6:00 PM**: Dinner & Mid-point Demos
- **All Night**: Hacking Continues

### Sunday, October 17
- **8:00 AM**: Final Sprint Breakfast
- **2:00 PM**: Code Freeze & Submission Deadline
- **3:00 PM**: Project Presentations
- **5:00 PM**: Awards Ceremony
- **6:00 PM**: Closing & Networking

## Prizes
- **1st Place**: $5,000 + Internship opportunities
- **2nd Place**: $3,000 + Mentorship program
- **3rd Place**: $2,000 + TechCorp swag package
- **Best AI Innovation**: $1,000 + Publication opportunity
- **People's Choice**: $500 + Community recognition

## What's Provided
- Meals and snacks throughout the event
- Swag bags and t-shirts
- Mentor support from industry experts
- Cloud credits and API access
- Workspace and equipment
```

## Example 3: Conference Registration

**File: `src/content/events/tech-conference-2025.md`**

```markdown
---
title: "Future of Technology Conference 2025"
description: "Annual conference featuring industry leaders and cutting-edge research"
date: 2025-11-20
time: "9:00 AM"
endTime: "6:00 PM"
location: "Grand Auditorium, University Center"
type: "conference"
registrationRequired: true
organizer: "CS Department"
capacity: 500
customFormFields:
  - name: "attendeeType"
    label: "Attendee Category"
    type: "select"
    required: true
    options:
      - "Undergraduate Student"
      - "Graduate Student"
      - "Faculty/Staff"
      - "Industry Professional"
      - "Researcher"
  
  - name: "organization"
    label: "Organization/Company"
    type: "text"
    required: false
    placeholder: "Your university, company, or organization"
  
  - name: "jobTitle"
    label: "Job Title/Position"
    type: "text"
    required: false
    placeholder: "Your current role or area of study"
  
  - name: "sessionInterests"
    label: "Sessions of Interest"
    type: "textarea"
    required: false
    placeholder: "Which sessions or topics are you most interested in attending?"
  
  - name: "networkingInterest"
    label: "Networking Preference"
    type: "select"
    required: true
    options:
      - "Very interested in networking opportunities"
      - "Open to meeting new people"
      - "Prefer to focus on presentations"
      - "Attending virtually"
  
  - name: "accessibilityNeeds"
    label: "Accessibility Requirements"
    type: "textarea"
    required: false
    placeholder: "Any accessibility accommodations needed (mobility, hearing, vision, etc.)"
---

# Future of Technology Conference 2025

The premier annual conference bringing together students, faculty, and industry leaders to explore the latest in technology innovation.

## Keynote Speakers
- **Dr. Sarah Chen** - AI Ethics Researcher, Stanford University
- **Michael Rodriguez** - CTO, TechGiant Inc.
- **Prof. Amanda Kim** - Quantum Computing Pioneer, MIT

## Session Tracks
### Track A: Artificial Intelligence
- Machine Learning in Healthcare
- Ethical AI Development
- Natural Language Processing Advances

### Track B: Cybersecurity
- Zero Trust Architecture
- Blockchain Security
- Incident Response Strategies

### Track C: Emerging Technologies
- Quantum Computing Applications
- AR/VR in Education
- IoT and Edge Computing

## Registration Includes
- Access to all sessions and keynotes
- Conference materials and swag bag
- Breakfast, lunch, and networking reception
- Digital access to presentation recordings
- Certificate of attendance
```

## Form Data Examples

### Submitted Data Structure

When a user submits the Python workshop form above, the data would look like:

```json
{
  // Default required fields (always included)
  "fullName": "Jane Smith",
  "email": "jane.smith@student.university.edu",
  "phone": "+1-555-123-4567",
  "studentId": "CS202401234",
  "gender": "Female",
  
  // Custom fields from the event
  "programmingExperience": "Never programmed before",
  "laptopAvailable": "No - need lab computer",
  
  // System metadata
  "eventId": "python-basics",
  "submittedAt": "2025-08-28T19:30:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "referrer": "https://cs-dept.university.edu/events/python-basics"
}
```

### AI Hackathon Submission Example

```json
{
  "fullName": "Alex Johnson",
  "email": "alex.johnson@university.edu", 
  "phone": "+1-555-987-6543",
  "studentId": "CS202401567",
  "gender": "Male",
  "teamFormation": "I need a team - match me with others",
  "aiExperience": "Intermediate - some projects/courses",
  "programmingLanguages": "Python, JavaScript, some experience with TensorFlow and React",
  "problemDomain": "Healthcare & Medicine",
  "specialSkills": "Data visualization with D3.js, REST API development, basic UI/UX design",
  "dietaryRestrictions": "Vegetarian",
  "tshirtSize": "L",
  "emergencyContact": "Maria Johnson",
  "emergencyPhone": "+1-555-123-9876",
  "eventId": "ai-hackathon-2025",
  "submittedAt": "2025-08-28T20:15:00.000Z"
}
```

## Best Practices Demonstrated

1. **Progressive Complexity**: Start with simple required fields, add optional details
2. **User Experience**: Group related fields logically
3. **Data Quality**: Use dropdowns for standardized responses
4. **Flexibility**: Mix required and optional fields based on necessity
5. **Context**: Tailor fields to the specific event type and needs
6. **Validation**: Use appropriate field types for automatic validation
7. **Privacy**: Only collect necessary information

These examples show how the custom form fields feature can be adapted to any type of event while maintaining consistency and user experience.
