# Vaikunta Brundavanam - Premium Devotional Landing Page

A beautifully designed, fully responsive mobile-first landing page for Vaikunta Brundavanam. This static website serves as a central hub connecting to all social media platforms with an elegant devotional aesthetic.

## 🌟 Features

- **Fixed Animated Mantra Bar**: Continuous looping scrolling text with interactive pause/speed controls
- **Mobile-First Design**: Optimized for mobile devices with full desktop responsiveness
- **Premium Aesthetic**: Temple-inspired design with saffron, gold, and warm orange color palette
- **Social Media Integration**: Quick links to WhatsApp, Instagram, YouTube, Facebook, and X (Twitter)
- **Touch-Friendly**: Minimum 44px touch targets with smooth hover/tap animations
- **Lightweight**: Pure HTML/CSS/JavaScript - no frameworks or dependencies
- **Accessibility**: Semantic HTML, ARIA labels, and proper link handling
- **SEO Optimized**: Open Graph and Twitter Card meta tags for social sharing
- **GitHub Pages Ready**: Static site that deploys instantly to GitHub Pages

## 📋 Tech Stack

- **HTML5**: Semantic markup and proper document structure
- **CSS3**: Flexbox layout, CSS animations, CSS variables, and media queries
- **Vanilla JavaScript**: Pure JS for interactivity (no libraries required)
- **Google Fonts**: Cinzel (headings) + Poppins (body text)
- **Font Awesome 6.6.0**: Icon library for social media icons

**No Build Tools Required** - This project runs as-is with no build step, transpilation, or dependencies.

## 🎯 How to Run Locally

### Option 1: Python HTTP Server (Python 3.x)
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Node.js HTTP Server
```bash
npx http-server
```
Then open the URL provided in your terminal.

### Option 3: Live Server (VS Code Extension)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Open
Simply open `index.html` directly in your browser (works for most modern browsers).

## 📁 Project Structure

```
vaikunta-brundavanam/
├── index.html              # Main HTML document - page structure
├── css/
│   └── styles.css         # All CSS styling and animations
├── js/
│   └── script.js          # Interactive JavaScript functionality
├── assets/
│   ├── logo.png           # Brand logo image
│   └── bg.png             # Devotional background texture
├── README.md              # This file
└── .gitignore             # Git ignore configuration
```

### File Descriptions

- **index.html**: Contains semantic HTML structure, meta tags for SEO, and links to external resources (fonts, icons, stylesheets, scripts)

- **css/styles.css**: 
  - CSS variables for consistent theming (colors, fonts, spacing)
  - Responsive layout using Flexbox
  - CSS animations for the mantra bar
  - Mobile-first media queries
  - Brand-specific color palette

- **js/script.js**:
  - Mantra bar animation controls (pause/speed toggle)
  - Desktop hover interaction (pause on hover)
  - Mobile tap interaction (toggle speed on tap)
  - Enhanced accessibility features

- **assets/logo.png**: Circular brand logo with gradient border
- **assets/bg.png**: Ornamental devotional background texture

## 🎨 Design Details

### Color Palette
- **Saffron**: `#FF7722` - Primary accent
- **Gold**: `#FFD700` - Highlights and decorative elements
- **Deep Orange**: `#CC4400` - Text accents and secondary elements
- **Cream**: `#FFF5E0` - Background color

### Typography
- **Headings**: Cinzel (serif) - Premium, elegant, temple-inspired
- **Body**: Poppins (sans-serif) - Clean, readable, modern
- **Font Weights**: 300-700 for visual hierarchy

### Spacing Scale
- `--spacing-xs`: 8px
- `--spacing-sm`: 16px
- `--spacing-md`: 24px
- `--spacing-lg`: 32px

## ✨ Key Features Explained

### 1. Fixed Mantra Bar
- Displays: "ఓం నమో వేంకటేశాయ నమః     Om Namo Venkatesaya namaha"
- Animated continuous scroll from left to right
- **Desktop**: Hover to pause animation
- **Mobile**: Tap to toggle between normal/fast speed
- Always visible at top of page with fixed positioning

### 2. Responsive Header
- Circular logo with gold gradient border
- Brand name with subtle text shadow
- Decorative radial gradient glow effect

### 3. Social Media Row
- 5 branded social icons (WhatsApp, Instagram, YouTube, Facebook, X)
- Hover/tap animation with scale and color change
- Brand-specific colors for visual recognition

### 4. CTA Buttons
- Full-width pill-shaped buttons with gradient backgrounds
- Decorative "knot" elements on sides
- Inner decorative border line
- Smooth hover/tap animations with shadow effects
- Minimum 64px height for accessibility

## 📱 Responsive Breakpoints

- **Mobile (< 480px)**: Single column, optimized touch targets
- **Tablet/Desktop (480px+)**: Enhanced spacing and sizing

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository** named `vaikunta-brundavanam` (or your preferred name)

2. **Clone and push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Vaikunta Brundavanam landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vaikunta-brundavanam.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

4. **Access your site** at: `https://YOUR_USERNAME.github.io/vaikunta-brundavanam`

### Deploy to Other Static Hosting

- **Netlify**: Drag and drop the folder
- **Vercel**: Import the GitHub repo
- **Cloudflare Pages**: Connect GitHub repo
- **AWS Amplify**: Connect GitHub repo

## ♿ Accessibility

- Semantic HTML5 elements (`header`, `main`, `nav`)
- ARIA labels on all external links
- Proper heading hierarchy (single `<h1>`)
- Minimum color contrast ratios (WCAG AA)
- Touch targets minimum 44x44px
- Focus states on interactive elements
- `rel="noopener noreferrer"` on external links for security

## 🔍 SEO Optimization

- Descriptive page title and meta description
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URL ready for customization
- Proper semantic HTML structure
- Mobile viewport configuration

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project, make improvements, and submit pull requests. Please maintain the design aesthetic and ensure all changes are tested across mobile, tablet, and desktop devices.

## 📞 Social Links

Connect with Vaikunta Brundavanam across social platforms:

- **WhatsApp**: [Join Channel](https://whatsapp.com/channel/0029Vb7NRft5EjxxzHauP01P)
- **Instagram**: [@vaikunta_brundavanam](https://www.instagram.com/vaikunta_brundavanam)
- **YouTube**: [@Vaikunta_Brundavanam](https://www.youtube.com/@Vaikunta_Brundavanam)
- **Facebook**: [Vaikunta Brundavanam](https://www.facebook.com/profile.php?id=61584862378437)
- **X (Twitter)**: [@vaikuntabhc](https://x.com/vaikuntabhc)

---

**Built with ❤️ for the Vaikunta Brundavanam community**

*Last Updated: December 2024*
