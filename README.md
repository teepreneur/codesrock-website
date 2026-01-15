# CodesRock React Website

> **"Play. Think. Code. Grow."** — Screen-free computational thinking education for African children

A modern React web application for CodesRock, providing a marketing platform and onboarding system for schools and parents interested in screen-free computational thinking education in Ghana.

**Live Site:** [https://teepreneur.github.io/codesrock-website](https://teepreneur.github.io/codesrock-website)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [Database Integration](#database-integration)
- [Styling & Design System](#styling--design-system)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

CodesRock is a screen-free computational thinking program designed to help every African child speak the language of the future, regardless of access to computers. This React application serves as the primary marketing and onboarding platform, enabling:

- **Schools** to apply for institutional partnerships
- **Parents** to order home learning kits
- **Visitors** to learn about the program and book demos

### Key Metrics

| Metric | Value |
|--------|-------|
| Schools Targeted (2026) | 150+ |
| Children Impacted | 317+ |
| Partner Schools | 9 |
| Low-Income Reach | 68% |
| Problem-Solving Improvement | +200% |

---

## Features

### Core Functionality

- ✅ **Fully Responsive Design** — Works seamlessly on mobile, tablet, and desktop
- ✅ **Multi-Page Application** — Home page and role-based signup page
- ✅ **Form Management** — Demo requests, school applications, and parent orders
- ✅ **Real-Time Database** — Supabase integration for data persistence
- ✅ **Smooth Navigation** — Hash-based routing with smooth scroll sections

### User Experience

- ✅ **Animated Elements** — Floating characters, pulsing effects, and smooth transitions
- ✅ **WhatsApp Integration** — Quick support access via floating button
- ✅ **Mobile CTA Bar** — Sticky call-to-action for mobile users
- ✅ **Form Validation** — Client-side validation with clear error messages
- ✅ **Loading States** — Visual feedback during form submissions

### Design

- ✅ **Custom Brand Colors** — Six-color palette matching CodesRock identity
- ✅ **Custom Animations** — Float, wub, and wiggle keyframe animations
- ✅ **Glass Morphism** — Modern glassmorphism effects on UI elements
- ✅ **Grid Patterns** — Decorative background patterns

---

## Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library |
| Vite | 7.2.4 | Build tool & dev server |
| React Router DOM | 7.9.6 | Client-side routing |

### Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 4.1.17 | Utility-first CSS framework |
| PostCSS | 8.5.6 | CSS processing |
| Autoprefixer | 10.4.22 | CSS vendor prefixing |

### Backend & Database

| Technology | Version | Purpose |
|------------|---------|---------|
| Supabase | 2.84.0 | Backend-as-a-Service |

### Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| ESLint | 9.39.1 | Code quality linting |
| gh-pages | 6.3.0 | GitHub Pages deployment |

### UI Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Lucide React | 0.554.0 | Icon library |

### Fonts

- **Inter** — Body text (clean, readable)
- **Nunito** — Headings (bold, confident)

---

## Project Structure

```
codesrock-react/
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navigation.jsx       # Sticky top navigation bar
│   │   ├── Hero.jsx             # Hero section with animated characters
│   │   ├── BackgroundElements.jsx # Decorative blobs & floating icons
│   │   ├── SocialProof.jsx      # Trusted partner logos
│   │   ├── WhyScreenFree.jsx    # Benefits explanation section
│   │   ├── KitSection.jsx       # Grid showcase of kit contents
│   │   ├── Impact.jsx           # Statistics & metrics section
│   │   ├── Testimonials.jsx     # User testimonials
│   │   ├── About.jsx            # Founder information
│   │   ├── ContactForm.jsx      # Demo booking form
│   │   ├── Footer.jsx           # Footer with social links
│   │   ├── FloatingCTA.jsx      # WhatsApp button & mobile CTA
│   │   ├── SignupNavigation.jsx # Signup page navigation
│   │   ├── SignupFooter.jsx     # Signup page footer
│   │   ├── RoleSelector.jsx     # School/Parent role toggle
│   │   ├── SchoolContent.jsx    # School partnership form & pricing
│   │   └── ParentContent.jsx    # Parent home kit form & pricing
│   ├── pages/
│   │   ├── HomePage.jsx         # Main landing page
│   │   └── SignupPage.jsx       # Multi-role signup page
│   ├── lib/
│   │   └── supabase.js          # Supabase client initialization
│   ├── App.jsx                  # Main routing component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & Tailwind directives
├── .env.example                 # Environment variables template
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS customization
└── vite.config.js               # Vite build configuration
```

---

## Pages & Components

### Home Page (`/`)

The main landing page with the following sections:

#### 1. Navigation Bar
- Sticky positioning with glass-panel effect
- Desktop menu: Why Screen-Free, The Kit, Impact, About Us
- Mobile hamburger menu with overlay
- CTA button: "Book Free Demo"

#### 2. Hero Section
- Animated badge with current progress
- Main headline: "Play. Think. Code. Grow."
- Gradient text effects
- Three animated character illustrations
- Dual CTA buttons

#### 3. Social Proof
- Partner logos (GES, Mastercard Foundation, etc.)
- Grayscale to color hover effect

#### 4. Why Screen-Free
- Cognitive development benefits
- Social & collaborative learning
- Image showcase

#### 5. Kit Section
- 6 colorful cards:
  - The Robot (red)
  - Activity Books (yellow)
  - Flashcards (cyan)
  - Songs & Audio (purple)
  - Teacher Portal (blue)
  - Unplugged Games (orange)

#### 6. Impact Section
- Purple background with statistics
- Glass-morphism stat cards
- Link to detailed impact report

#### 7. Testimonials
- Teacher testimonial
- Parent testimonial
- Quote icons and profile information

#### 8. About Section
- Founder photos (Triumph & Ellen)
- Mission statement

#### 9. Contact Form
- Name, phone, email fields
- School Rep / Parent role selector
- Form validation and submission
- Success/error feedback

#### 10. Footer
- Logo and social links
- Privacy and Terms links
- Copyright notice

#### 11. Floating Elements
- WhatsApp support button (fixed bottom-right)
- Mobile sticky CTA bar

---

### Signup Page (`/signup`)

Role-based application page with dynamic content:

#### Role Selector
Toggle between School and Parent roles with visual feedback.

#### School Content (when "School" is selected)

**Left Column — Benefits & Pricing:**
- Why Partner Schools Love Us (4 benefits)
- Comprehensive School Kit pricing:
  - Classroom Bot Activity Set: 1,200₵
  - Classroom Coding Activity Set: 900₵
  - Training, Evaluation & Validation: 1,200₵
  - Curriculum Access: 1,500₵
  - Training Content: 1,050₵
  - Teacher Portal Access (3 years): Free
  - Support & Maintenance (3 years): Free
  - **Total Investment: 5,850₵**

**Right Column — Application Form:**
- Representative name & role
- Principal name & contact
- School name & location
- Maximum students per class
- School phone & email

#### Parent Content (when "Parent" is selected)

**Left Column — Benefits & Pricing:**
- Why Parents Love It (3 benefits)
- Home Starter Kit pricing:
  - 1x Interactive Robot: 1,200₵
  - CodesRock Activity Book: 280₵
  - Kinesthetic Coding Activity Set: 950₵
  - Teacher/Parent Portal: Free
  - **Total Price: 2,430₵**

**Right Column — Order Form:**
- Parent name
- Number of children (1, 2, 3+)
- Child's age range (3-5, 5-7, Mixed)
- Phone & email
- Delivery location

---

## Database Integration

### Supabase Configuration

The application uses Supabase for backend services:

```javascript
// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Database Tables

#### `demo_requests`
Stores demo booking requests from the contact form.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| name | text | Contact name |
| phone | text | Phone number |
| email | text | Email address |
| role | text | "school" or "parent" |
| created_at | timestamp | Submission timestamp |

#### `school_applications`
Stores school partnership applications.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| representative_name | text | Rep's full name |
| representative_role | text | Rep's position |
| principal_name | text | Principal's name |
| principal_phone | text | Principal's contact |
| school_name | text | School name |
| location | text | School location |
| max_students | integer | Max students per class |
| school_phone | text | School contact |
| email | text | Email for invoicing |
| created_at | timestamp | Submission timestamp |

#### `parent_orders`
Stores home kit orders from parents.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| parent_name | text | Parent's name |
| number_of_children | text | "1", "2", or "3+" |
| child_age_range | text | Age range selection |
| phone | text | Phone number |
| email | text | Email address |
| delivery_location | text | Delivery address |
| created_at | timestamp | Submission timestamp |

---

## Styling & Design System

### Brand Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Blue | `#46C5D5` | `brand-blue` | Primary, trust |
| Orange | `#FF7340` | `brand-orange` | CTAs, energy |
| Pink | `#EC4899` | `brand-pink` | Creativity |
| Yellow | `#FDC82F` | `brand-yellow` | Highlights |
| Purple | `#5D3B98` | `brand-purple` | Stats section |
| Red | `#CE3845` | `brand-red` | Accents |

### Custom Animations

```css
/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

/* Wub Animation (Pulsing) */
@keyframes wub {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Wiggle Animation */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
```

### Glass Morphism

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
}
```

### Typography

- **Headings:** Nunito (weights: 600, 700, 800)
- **Body:** Inter (weights: 400, 500, 600)

---

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/teepreneur/codesrock-website.git
   cd codesrock-website/codesrock-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your Supabase credentials.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

---

## Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Getting Supabase Credentials

1. Create a project at [supabase.com](https://supabase.com)
2. Go to Settings → API
3. Copy the Project URL and anon/public key

---

## Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
# Build and deploy
npm run deploy
```

This runs:
1. `npm run build` — Creates production build in `dist/`
2. `gh-pages -d dist` — Publishes to GitHub Pages

### Manual Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Build Configuration

Vite is configured with hash-based routing for GitHub Pages compatibility:

```javascript
// vite.config.js
export default defineConfig({
  base: '/codesrock-website/',
  // ...
})
```

---

## API Reference

### Form Submission Functions

#### Demo Request
```javascript
await supabase
  .from('demo_requests')
  .insert([{ name, phone, email, role }])
  .select()
```

#### School Application
```javascript
await supabase
  .from('school_applications')
  .insert([{
    representative_name,
    representative_role,
    principal_name,
    principal_phone,
    school_name,
    location,
    max_students,
    school_phone,
    email
  }])
  .select()
```

#### Parent Order
```javascript
await supabase
  .from('parent_orders')
  .insert([{
    parent_name,
    number_of_children,
    child_age_range,
    phone,
    email,
    delivery_location
  }])
  .select()
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Project Status

### Current Features ✅
- [x] Responsive landing page
- [x] Role-based signup page
- [x] Demo booking form
- [x] School application form
- [x] Parent order form
- [x] Supabase integration
- [x] WhatsApp support button
- [x] Mobile-optimized CTA
- [x] Smooth scroll navigation
- [x] Animated UI elements

### Potential Future Enhancements
- [ ] User authentication system
- [ ] Order tracking dashboard
- [ ] Payment integration
- [ ] Multi-language support (French, local languages)
- [ ] Blog/news section
- [ ] Teacher portal preview
- [ ] Analytics dashboard

---

## License

© 2025 Starters Technology – CodesRock. All rights reserved.

---

## Contact

- **Website:** [codesrock.com](https://teepreneur.github.io/codesrock-website)
- **WhatsApp:** Available via floating button on site
- **Social Media:** Instagram, Twitter, LinkedIn (links in footer)

---

<p align="center">
  Made with ❤️ in Ghana
</p>
