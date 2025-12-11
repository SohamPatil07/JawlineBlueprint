# JawlineBlueprint - Professional Jawline Enhancement Website

A clean, minimalistic, and professional React website inspired by dappermix.com, featuring a sharp jawline image and modern design.

## Features

- **Modern Design**: Clean and minimalistic interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Professional Look**: Uses Inter font family and a sophisticated color scheme
- **Hero Section**: Large hero section with a professional jawline image from Unsplash
- **Feature Cards**: Showcases key benefits with elegant card designs
- **Smooth Scrolling**: Fixed header with smooth scroll effects
- **Professional Footer**: Multi-column footer with links and social media

## Tech Stack

- React 19.2.1
- React Scripts 5.0.1
- CSS3 with modern animations
- Google Fonts (Inter)

## Installation

1. Navigate to the project directory:
```bash
cd dapper-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open in your browser at `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

To serve the production build:

```bash
npx serve -s build
```

## Project Structure

```
dapper-website/
├── public/
│   └── index.html          # HTML template with Google Fonts
├── src/
│   ├── components/
│   │   ├── Header.js       # Fixed navigation header
│   │   ├── Header.css
│   │   ├── Hero.js         # Hero section with image
│   │   ├── Hero.css
│   │   ├── Features.js     # Feature cards section
│   │   ├── Features.css
│   │   ├── Footer.js       # Footer with links
│   │   └── Footer.css
│   ├── App.js              # Main app component
│   ├── App.css
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
└── package.json

```

## Customization

### Changing the Hero Image

In `src/components/Hero.js`, update the image URL:

```javascript
<img 
  src="YOUR_IMAGE_URL_HERE" 
  alt="Sharp Jawline Profile" 
/>
```

### Updating Colors

The main colors are defined in the CSS files:
- Primary color: `#1a1a1a` (dark)
- Accent gradient: `#667eea` to `#764ba2` (purple gradient)
- Background: `#ffffff` (white)

### Modifying Content

Edit the content in the respective component files:
- `Header.js` - Navigation menu items
- `Hero.js` - Hero title, description, and stats
- `Features.js` - Feature cards
- `Footer.js` - Footer links and information

## Design Highlights

- **Typography**: Inter font family for modern, professional look
- **Layout**: Grid-based layout with proper spacing
- **Animations**: Smooth fade-in animations and hover effects
- **Image**: High-quality stock image showcasing a sharp jawline
- **Color Scheme**: Minimalistic black and white with purple accent
- **Shadows**: Subtle shadows for depth and professional feel

## Browser Support

- Chrome (last version)
- Firefox (last version)
- Safari (last version)
- Edge (last version)

## License

This project is open source and available for personal and commercial use.
