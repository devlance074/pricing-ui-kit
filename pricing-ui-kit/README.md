# Modern Responsive Pricing UI Kit

A comprehensive collection of 5 uniquely styled, production-ready pricing page designs built with React, TypeScript, and Tailwind CSS. Perfect for SaaS, startups, agencies, and product websites.

![Modern Pricing UI Kit](https://modern-pricing.netlify.app)

## 🚀 Live Demo

**[View Live Demo](https://modern-pricing.netlify.app)**

## ✨ Features

- **5 Unique Pricing Designs**: Classic Cards, Glassmorphism, Minimal Centered, Split Layout, and Dark Tech Style
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Light/Dark Mode**: Each design includes both light and dark theme variants
- **Modern UI/UX**: Streamlined navigation with elegant hover effects and transitions
- **Production Ready**: Clean, maintainable code with TypeScript support
- **Conversion Optimized**: Designed with clear CTAs and user-friendly layouts
- **Accessible**: Proper contrast ratios and keyboard navigation support

## 🎨 Pricing Page Styles

1. **Classic Cards** - Traditional 3-card layout with soft gradients and hover animations
2. **Glassmorphism** - Frosted glass effects with vibrant gradient overlays
3. **Minimal Centered** - Clean single-column design with monthly/yearly toggle
4. **Split Layout** - Left intro section with right-side pricing grid and FAQ
5. **Dark Tech** - Dark theme with electric highlights, perfect for dev tools

## 📋 Requirements

- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher (or yarn equivalent)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

## 🛠️ Installation

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/devlance074/pricing-ui-kit.git
   cd modern-pricing-ui-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Pricing page components
│   ├── ClassicCards.tsx
│   ├── GlassmorphismStyle.tsx
│   ├── CenteredColumn.tsx
│   ├── SplitLayout.tsx
│   └── DarkTechStyle.tsx
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎯 Usage

### Integrating Individual Components

You can easily extract and use individual pricing components in your own projects:

```tsx
import ClassicCards from './components/ClassicCards';

function MyApp() {
  return (
    <div>
      <ClassicCards darkMode={false} />
    </div>
  );
}
```

### Customizing Themes

Each component accepts a `darkMode` prop to toggle between light and dark themes:

```tsx
<GlassmorphismStyle darkMode={true} />
```

### Modifying Pricing Plans

Edit the pricing data within each component file to match your specific needs:

```tsx
const plans = [
  {
    name: 'Basic',
    price: '$9',
    period: '/month',
    features: ['Feature 1', 'Feature 2'],
    // ... more configuration
  }
];
```

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons

## 📱 Responsive Design

All pricing pages are fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Each pricing style uses a unique color palette. You can customize colors by modifying the theme objects within each component.

### Typography
The project uses system fonts with Tailwind's typography scale. Modify font sizes and weights in the component files or global CSS.

### Animations
Hover effects and transitions can be customized by adjusting the Tailwind classes or adding custom CSS animations.

## 📧 Support

For questions, issues, or feature requests, please contact us at **info@devlance.org**

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Thank You!

Thank you for downloading the Modern Responsive Pricing UI Kit! We hope this collection helps you create beautiful, conversion-optimized pricing pages for your projects.

### Help Us Grow! 🌱

If you found this UI kit useful, please help us grow the developer community by sharing **[devlance.org](https://devlance.org)** with your network. Devlance is a marketplace dedicated to connecting talented developers with amazing opportunities.

**Ways to support:**
- ⭐ Star this repository
- 🔗 Share [devlance.org](https://devlance.org) on social media
- 💬 Tell other developers about our marketplace
- 📝 Write a review or blog post about your experience

Together, we can build a stronger, more connected developer community!

---

**Built with ❤️ by the Devlance Team**

Visit us at [devlance.org](https://devlance.org) | Contact: info@devlance.org