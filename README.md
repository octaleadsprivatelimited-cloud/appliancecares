# MrServiceExpert Clone

A pixel-perfect React clone of mrserviceexpert.com built with modern web technologies.

## 🚀 Features

- **Modern React 18+** with Vite for fast development
- **Responsive Design** - Mobile-first approach with full mobile, tablet, and desktop support
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **React Router v6+** - Client-side routing for seamless navigation
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **SEO Optimized** - Meta tags and SEO components for better search engine visibility
- **Contact Form** - Functional contact form with validation (ready for API integration)

## 📁 Project Structure

```
mrserviceexpert-clone/
├── public/
│   ├── images/          # Static images and assets
│   └── favicon.ico
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Testimonial.jsx
│   │   ├── ContactForm.jsx
│   │   └── SEO.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Tech Stack

- **React 19+** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client (for API calls)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mrserviceexpert-clone
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

## 🌐 Deployment

The application can be deployed to various platforms:

- **Netlify**: Connect your Git repository or drag and drop the `dist` folder
- **Vercel**: Import your Git repository or deploy via CLI
- **GitHub Pages**: Configure the build output directory as `dist`

## 📝 Available Pages

- **Home** (`/`) - Landing page with hero section, services overview, testimonials, and CTA
- **Services** (`/services`) - Detailed services page with all available services
- **Contact** (`/contact`) - Contact form and company information

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1e40af',
        dark: '#1e3a8a',
        light: '#3b82f6',
      },
      secondary: {
        DEFAULT: '#f59e0b',
        dark: '#d97706',
        light: '#fbbf24',
      },
    },
  },
}
```

### Content

- Update service information in `src/pages/Home.jsx` and `src/pages/Services.jsx`
- Modify testimonials in `src/pages/Home.jsx`
- Update contact information in `src/pages/Contact.jsx`
- Edit navigation links in `src/components/Header.jsx`

## 📞 Contact Form Integration

The contact form is ready for API integration. Update the API endpoint in `src/components/ContactForm.jsx`:

```javascript
await axios.post('/api/contact', formData);
```

Replace `/api/contact` with your actual backend endpoint.

## 🔍 SEO

SEO meta tags are implemented via:
- Base meta tags in `index.html`
- Dynamic meta tags using the `SEO` component in each page

## 📱 Responsive Breakpoints

- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

## 🎯 Features Implemented

✅ Responsive navigation with mobile menu
✅ Hero section with call-to-action
✅ Services showcase with animated cards
✅ Testimonials section
✅ Contact form with validation
✅ Footer with social links
✅ Smooth scrolling animations
✅ SEO optimization
✅ React Router navigation
✅ Mobile-first responsive design

## 📄 License

This project is for educational purposes.

## 👨‍💻 Development Notes

- All components use functional components with React Hooks
- Framer Motion is used for scroll-triggered animations
- Tailwind utility classes are used for styling
- Components are organized by feature and reusability
- SEO component dynamically updates meta tags per page
