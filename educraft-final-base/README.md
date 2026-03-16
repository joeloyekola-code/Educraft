# Educraft - Modern SaaS Course Platform Landing Page

A beautiful, fully responsive landing page for an online learning platform built with React, Framer Motion, and modern design principles.

## Features

✨ **Modern SaaS Design** - Clean, minimalist interface inspired by Linear, Stripe, and Framer
🎨 **Smooth Animations** - Framer Motion animations throughout
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
🚀 **Fast & Lightweight** - Built with Vite for optimal performance
🔍 **Course Search** - Functional search with routing to course pages
📝 **Form Validation** - Complete signup form with validation
🎯 **Interactive Elements** - Hover effects, scroll animations, and micro-interactions

## Tech Stack

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with CSS variables

## Installation & Setup

### Prerequisites

Make sure you have Node.js (version 16 or higher) installed on your machine.

### Quick Start

1. **Clone or download the project**

2. **Navigate to the project directory**
   ```bash
   cd educraft-landing
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   The application will be running at `http://localhost:5173`

### Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
educraft-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustedStats.jsx
│   │   ├── Courses.jsx
│   │   ├── LearningPaths.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Instructors.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTA.jsx
│   │   ├── SignupForm.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CoursePage.jsx
│   ├── data/
│   │   └── courses.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── index.html
```

## Features Breakdown

### Navigation
- Sticky navbar with smooth scroll
- Responsive hamburger menu for mobile
- Animated menu transitions

### Hero Section
- Eye-catching headline and CTA
- Course category shortcuts
- Functional search bar with course routing
- Video demo placeholder with controls

### Course Search
- Search for courses by name or title
- Automatic routing to course detail pages
- Error handling for invalid searches
- Example courses: "UI/UX Design", "React Development", "Digital Marketing", "Product Management"

### Course Pages
- Detailed course information
- Instructor details
- Skills breakdown
- Pricing and enrollment options
- Responsive layout

### Signup Form
- Modal overlay with smooth animations
- Form validation (name, email, password matching)
- Error messages and success states
- Accessible form controls

### Animations
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth page transitions
- Loading states and micro-interactions

## Customization

### Colors
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #8b5cf6;
  /* ... more variables */
}
```

### Course Data
Add or modify courses in `src/data/courses.js`:

```javascript
export const courses = [
  {
    id: 1,
    name: "Your Course Name",
    title: "Course Title",
    instructor: "Instructor Name",
    // ... more properties
  }
];
```

### Content
All text content can be easily modified within each component file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for optimal performance
- Code splitting with React Router
- Optimized animations with Framer Motion
- Minimal bundle size

## License

This project is free to use for personal and commercial purposes.

## Credits

Designed and developed with ❤️ for modern online learning platforms.

---

**Need help?** Check the comments in the code or refer to the component files for detailed implementation notes.
