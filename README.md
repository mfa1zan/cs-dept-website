[![Netlify Status](https://api.netlify.com/api/v1/badges/0c1f2cae-cb76-47c1-8632-86c7644d9257/deploy-status)](https://app.netlify.com/projects/csdeptuos/deploys)

# CS Department Website

This is the official website for the Computer Science Department, built with Astro. The site focuses on tools, society pages, and static content managed via a lightweight CMS.

## 🆕 Latest Changes

- Removed custom forms and event/news system in favor of a simpler workflow
- Added Decap CMS admin at `/admin/` for future content editing
- Kept tools like the interactive `/timetable` page with instant search and filters

> Timetable quick use: Go to `/timetable`, pick a dataset (e.g. `full_parsed2`), optionally click day / semester / program pills to narrow, and just start typing — results update on every key press across all fields (course, code, teacher, room, etc.).

## 📚 Table of Contents

- [CS Department Website](#cs-department-website)
  - [🆕 Latest Features](#-latest-features)
  - [📚 Table of Contents](#-table-of-contents)
  - [🏗️ How the Website Works](#️-how-the-website-works)
    - [Project Structure](#project-structure)
  - [🧩 Admin (Decap CMS)](#-admin-decap-cms)
    - [Basic Registration](#basic-registration)
    - [Custom Form Fields 🆕](#custom-form-fields-)
    - [Form Submission](#form-submission)
  - [🔧 Using MDX for Enhanced Content](#-using-mdx-for-enhanced-content)
    - [When to Use MDX:](#when-to-use-mdx)
    - [MDX Example:](#mdx-example)
  - [🤖 Using AI/LLMs to Generate Content](#-using-aillms-to-generate-content)
    - [Generating News Articles:](#generating-news-articles)
    - [Generating Events:](#generating-events)
    - [AI Content Generation Tips:](#ai-content-generation-tips)
    - [Sample AI Prompts:](#sample-ai-prompts)
  - [🚀 Development Commands](#-development-commands)
  - [🔧 Quick Start Guide](#-quick-start-guide)
  - [📝 Content Guidelines](#-content-guidelines)
  - [🆘 Need Help?](#-need-help)

## 🏗️ How the Website Works

The website is built using **Astro**, a modern web framework that generates fast, content-focused websites. Here's what you need to know:

- **Static Site Generation**: The website pre-builds all pages for fast loading
- **Content Management**: News and events are written in Markdown (.md) or MDX (.mdx) files with metadata
- **Component-Based**: Reusable UI components for consistent design
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **MDX Support**: Enhanced Markdown with React components for interactive content

### Project Structure (simplified)

```text
cs-dept-website/
├── public/                    # Static assets (images, etc.)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── CGPACalculator.astro
│   │   ├── Header.astro
│   │   └── ...
│   ├── content/              # Content files (THIS IS WHERE YOU'LL WORK!)
│   │   ├── config.ts        # Defines content structure
│   │   └── (collections managed later via CMS)
│   ├── layouts/             # Page templates
│   ├── pages/               # Website pages
│   │   ├── timetable.astro  # Interactive searchable timetable (new)
│   │   ├── tools/           # Tools like CGPA calculator, room finder
│   │   └── societies/       # Society pages
│   └── styles/              # CSS styling
└── package.json
```

## 🧩 Admin (Decap CMS)

This project includes a minimal Decap CMS setup available at `/admin/`. It's currently configured with Git Gateway and an empty collections list. You can extend `public/admin/config.yml` to add collections when you're ready to manage content via the CMS.

## 🔧 Using MDX for Enhanced Content

The website supports **MDX** (`.mdx` files), which allows you to use interactive components within your Markdown content. This is useful for:

### When to Use MDX:

- **Interactive Elements**: Embed forms, buttons, or interactive components
- **Custom Styling**: Use React components for special layouts
- **Dynamic Content**: Display data from APIs or databases
- **Rich Media**: Embed complex visualizations or interactive demos

### MDX Example:

```mdx
---
title: 'Interactive Workshop Guide'
description: 'A hands-on guide with interactive elements'
publishDate: 2025-08-28
category: 'workshop'
---

// Example MDX usage below (forms have been removed)

# Interactive Workshop

This workshop includes hands-on coding exercises.

{/* Example interactive component would go here */}

## Code Example

Here's an interactive example you can try:

function greet(name) {
return `Hello, ${name}!`;
}

Regular Markdown content works normally in MDX files.
```

**Note**: Use regular `.md` files for simple content and `.mdx` when you need interactive components.

## 🤖 Using AI/LLMs to Generate Content

You can leverage AI tools like ChatGPT, Claude, or GitHub Copilot to help create content efficiently:

### Generating News Articles:

**Prompt Template for News:**

```
Create a news article for a Computer Science department website about [topic].

Format the response with proper frontmatter followed by the article content.

Required frontmatter fields:
---
title: "Engaging Article Title"
description: "Brief 1-2 sentence summary"
publishDate: 2025-08-28
category: "announcement"  # Choose: research, achievement, event, partnership, announcement
featured: false  # Set to true only for major announcements
author: "Your Name"
---

Article requirements:
- Professional tone suitable for CS students and faculty
- 300-500 words
- Use Markdown formatting (headers, lists, links, etc.)
- Include specific details and actionable information
- End with relevant contact information if applicable

Topic: [Describe your news topic here]
```

**Example Prompt:**

```
Create a news article for a Computer Science department website about a new AI research lab opening. Include details about equipment, research focus, and student opportunities.
```

### Generating Events:

**Prompt Template for Events:**

```
Create an event listing for a Computer Science department website.

Format the response with proper frontmatter followed by the event description.

Required frontmatter fields:
---
title: "Event Name"
description: "Brief description of what attendees will learn/do"
date: 2025-09-15  # Event date (YYYY-MM-DD)
time: "2:00 PM"
endTime: "5:00 PM"  # Optional
location: "Specific room/building location"
type: "workshop"  # Choose: workshop, conference, competition, seminar, hackathon, meetup
registrationRequired: true
formSubmitUrl: "https://example.com/register"  # Optional custom endpoint
organizer: "Department/Society Name"
society: "ps"  # Optional: cms, pas, ps, sports, egaming, ems, blood-donation
capacity: 50  # Optional
customFormFields:  # Optional: Add event-specific registration fields
  - name: "experience"
    label: "Experience Level"
    type: "select"
    required: true
    options: ["Beginner", "Intermediate", "Advanced"]
  - name: "goals"
    label: "Learning Goals"
    type: "textarea"
    required: false
    placeholder: "What do you hope to achieve?"
---

Event details to include:
- Event: [event name and type]
- Date & Time: [when and duration]
- Target Audience: [who should attend]
- Prerequisites: [any requirements]
- What to bring: [if applicable]

Content requirements:
- Detailed event description
- Clear agenda with timeline
- Learning objectives or outcomes
- Registration form fields relevant to the event
- Contact information for questions
```

### AI Content Generation Tips:

1. **Be Specific with Details**: Provide exact dates, times, locations, and requirements
2. **Request Complete Frontmatter**: Ask for the full YAML frontmatter block with all required fields
3. **Specify Content Structure**: Request specific sections like agenda, prerequisites, contact info
4. **Review and Customize**: Always verify dates, links, and department-specific information
5. **Check Field Values**: Ensure categories and types match the allowed options exactly
6. **Add Missing Information**: Fill in any placeholder links, contact details, or specific requirements
7. **Validate Formatting**: Make sure the frontmatter uses correct YAML syntax with proper quotes and dates

### Sample AI Prompts:

**For Workshop Events:**

```
Create an event listing for a "Python for Beginners" workshop.

Event details:
- Date: Next Friday (September 1, 2025)
- Time: 6:00 PM - 8:00 PM
- Location: CS Lab 101
- Capacity: 30 people maximum
- Registration required with custom fields
- Target: Complete beginners to programming

Custom registration fields needed:
- Programming experience level (dropdown)
- Laptop availability (yes/no dropdown)
- Learning goals (optional text area)
- Dietary restrictions for refreshments (optional text)

Include hands-on coding exercises and laptop requirements in the description.
```

**For Achievement News:**

```
Create a news article about CS student Sarah Ahmed winning first place in the National Cybersecurity Competition.

Details to include:
- Competition was held at University of Technology
- She competed against 150+ students nationwide
- Prize was $5000 and internship opportunity
- Her project focused on network security algorithms
- Make it inspiring for other students
- Include quote from department head if possible
```

**For Research News:**

```
Create a news article about a new research partnership between our CS department and TechCorp Inc.

Partnership details:
- Focus: Machine learning applications in healthcare
- Duration: 3-year collaboration
- Funding: $500K research grant
- Student opportunities: 10 paid internship positions
- Faculty lead: Dr. Jane Smith
- Include application process for interested students
```

## 🚀 Development Commands

All commands are run from the project root:

| Command       | Action                                       |
| :------------ | :------------------------------------------- |
| `bun install` | Install dependencies (first time setup)      |
| `bun dev`     | Start development server at `localhost:4321` |
| `bun build`   | Build production site to `./dist/`           |
| `bun preview` | Preview production build locally             |

### Code Quality & Formatting

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun run format`       | Format all files with Prettier                   |
| `bun run format:check` | Check if files are properly formatted            |
| `bun run lint`         | Run ESLint to check for code issues              |
| `bun run lint:fix`     | Fix ESLint issues automatically (where possible) |
| `bun run check-format` | Run both formatting and linting checks           |

**Note**: Pull requests automatically check code formatting and linting. Make sure to run `bun run format` and `bun run lint:fix` before submitting your changes.

## 🔧 Quick Start Guide

1. **Clone the repository** (if you haven't already)
2. **Install dependencies**: `bun install`
3. **Start development server**: `bun dev`
4. **Open your browser**: Go to `http://localhost:4321`
5. **Make changes**: Edit files and see changes instantly
6. **Add content**: Create new `.md` files in `src/content/news/` or `src/content/events/`

## 📝 Content Guidelines

- **Write in Markdown or MDX**: Use `.md` for simple content, `.mdx` for interactive elements
- **Use descriptive filenames**: `ai-workshop-2025.md` not `event1.md`
- **Include all required fields**: Check the examples above
- **Add custom form fields**: Use `customFormFields` for event-specific registration
- **Optimize images**: Keep image files under 1MB
- **Test your content**: Always run `bun dev` to preview changes
- **Leverage AI tools**: Use LLMs to help generate initial content with custom forms
- **Review AI content**: Always verify and edit AI-generated content for accuracy
- **Validate form fields**: Ensure field names are unique and types are correct

## 🆘 Need Help?

- **Markdown Guide**: [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- **MDX Documentation**: [MDX Guide](https://mdxjs.com/docs/)
- **Astro Documentation**: [docs.astro.build](https://docs.astro.build)
- <!-- Forms guides removed as forms are no longer part of the project -->
- **AI Content Tools**: ChatGPT, Claude, GitHub Copilot, or other LLMs
- **Ask Questions**: Reach out to the web development team

---

_This website is maintained by CS students for CS students. Contributions and suggestions are always welcome!_
