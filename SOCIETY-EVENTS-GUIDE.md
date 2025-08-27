# Society Events Integration Guide

## Overview

Your Astro website now supports dynamic event display on both the main news/events page and individual society pages. Events can be associated with specific societies and will automatically appear in the relevant sections.

## How It Works

### 1. Content Collections Schema

Events now support a `society` field that links them to specific society pages:

```typescript
// src/content/config.ts
society: z.enum(['cms', 'pas', 'ps', 'sports', 'egaming', 'ems', 'blood-donation']).optional(),
```

### 2. Creating Society Events

When creating events in `src/content/events/`, add the `society` field to the frontmatter:

```markdown
---
title: "Digital Media Showcase"
description: "Annual showcase of student digital media projects"
date: 2025-09-28
time: "3:00 PM"
location: "Art Gallery, Student Union"
type: "conference"
society: "cms"  # This links the event to the CMS society page
---
```

### 3. Available Society Values

- `cms` - Computing Media Society
- `ps` - Programming Society  
- `pas` - ?
- `sports` - Sports Society
- `egaming` - E-Gaming Society
- `ems` - ?
- `blood-donation` - Blood Donation Society

## Adding Events to Society Pages

### Option 1: Reusable Component (Recommended)

Use the `SocietyEvents` component for consistent styling:

```astro
---
import SocietyEvents from '../../components/SocietyEvents.astro';
---

<SocietyEvents 
  society="cms" 
  gradientColors={{
    from: "from-cyan-400",
    to: "to-teal-600"
  }}
  accentColor="cyan"
/>
```

### Option 2: Custom Implementation

For more control, implement custom event fetching:

```astro
---
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

const allEvents = await getCollection('events');
const societyEvents = allEvents.filter((event: CollectionEntry<'events'>) => 
  event.data.society === 'your-society-id'
);

const upcomingEvents = societyEvents
  .filter((event: CollectionEntry<'events'>) => event.data.date >= new Date())
  .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
---
```

## Event Display Features

### Automatic Categorization
- **Upcoming Events**: Shows events with future dates
- **Past Events**: Shows recent past events (up to 3)
- **Automatic Sorting**: Events are sorted by date

### Event Information Displayed
- Event title and description
- Date, time, and location
- Event type (workshop, conference, hackathon, etc.)
- Registration links (if available)
- Capacity information
- Organizer details

### Responsive Design
- Mobile-friendly layout
- Hover effects and transitions
- Consistent styling with society branding

## Examples

### Current Events Created

1. **CMS Society Events:**
   - Digital Media Showcase (Sep 28, 2025)

2. **Programming Society Events:**
   - Annual Hackathon (Oct 5, 2025)
   - Competitive Programming Bootcamp (Sep 12, 2025)

3. **General Department Events:**
   - AI Ethics Workshop Series (Sep 20, 2025)
   - Quantum Computing Talk (Sep 15, 2025)

## Best Practices

### Event Content Structure
```markdown
---
# Required fields
title: "Event Title"
description: "Brief event description"
date: 2025-MM-DD
time: "HH:MM AM/PM"
location: "Venue Name"
type: "workshop" # or conference, seminar, hackathon, etc.

# Optional society linking
society: "cms" # Links to society page

# Optional registration
registrationRequired: true
registrationLink: "https://registration-url.com"

# Optional additional info
organizer: "Society Name"
capacity: 50
endTime: "HH:MM AM/PM"
---

# Event Content Here

Detailed event information in Markdown format...
```

### Styling Guidelines

Each society should use consistent colors:
- **CMS**: Cyan to Teal gradient
- **PS**: Green to Blue gradient
- **Sports**: Orange to Red gradient
- etc.

## File Structure

```
src/
├── content/
│   ├── config.ts          # Content collections schema
│   ├── events/            # Event markdown files
│   └── news/              # News markdown files
├── components/
│   └── SocietyEvents.astro # Reusable events component
└── pages/
    ├── news.astro         # Main news/events page
    ├── societies/
    │   ├── cms.astro      # CMS society page (with events)
    │   └── ps.astro       # PS society page (with events)
    ├── news/[slug].astro  # Individual news article pages
    └── events/[slug].astro # Individual event pages
```
