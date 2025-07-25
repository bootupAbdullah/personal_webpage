# Abdullah Durrani's Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-akddev.co-blue?style=for-the-badge)](https://akddev.co)
[![GitHub Release](https://img.shields.io/github/v/release/bootupAbdullah/personal_webpage?style=for-the-badge&color=4CAF50)](https://github.com/bootupAbdullah/personal_webpage/releases)
[![License](https://img.shields.io/github/license/bootupAbdullah/personal_webpage?style=for-the-badge&color=2196F3)](https://github.com/bootupAbdullah/personal_webpage/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/bootupAbdullah/personal_webpage?style=for-the-badge)](https://github.com/bootupAbdullah/personal_webpage)
[![Build Status](https://img.shields.io/badge/Build-Passing-green?style=for-the-badge)](https://akddev.co)

> A modern, responsive portfolio showcasing web development projects and skills in front-end technologies and interactive applications.

## 🚀 Live Demo
**[Visit Portfolio →](https://akddev.co)**

## 🛠️ Tech Stack
- **Frontend:** React, JavaScript, CSS3, HTML5
- **Styling:** CSS Flexbox, Responsive Design
- **Hosting:** [Your hosting platform]
- **Deployment:** Automated via [platform]

## ✨ Features
- **Single-page layout** - All content visible without scrolling
- **Responsive design** - Optimized for all device sizes
- **Modern UI** - Clean, professional styling with pill-shaped buttons
- **Component-based architecture** - Organized React components
- **Smooth navigation** - Intuitive user experience

## 📁 Project Structure
```
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── Nav/
│   │   └── Footer/
│   ├── images/
│   └── styles/
├── public/
└── README.md
```


## 📈 Development Journey

### Latest Updates (June 14th, 2025)
- ✅ Single-page viewport layout implementation
- ✅ Responsive flexbox architecture
- ✅ Footer integration and positioning
- ✅ Modern button styling and spacing
- ✅ Clean CSS optimization

<details>
<summary>📸 View Current Build</summary>

![Current Portfolio Build](images/webpage_snapshot_june_14th_2025.png)
</details>

<details>
<summary>🔧 Technical Implementation Details</summary>

**Layout Architecture:**
```jsx
<main className='main-component'>
  <div id='navbar-component'><Nav /></div>
  <div id='home-component'>{page === "Home" && <Home setPage={setPage} />}</div>
  <Footer />
</main>
```

**Key CSS:**
```css
.main-component {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```
</details>

## ✉️ Contact
- **Website:** [akddev.co](https://akddev.co)
- **Email:** [akddev.co@gmail.com](mailto:akddev.co@gmail.com)
- **[LinkedIn](www.linkedin.com/in/abdullah-durrani)**

---

# July 1st, 2025:

## 📋 Recent Feature Additions

### New Pages & Functionality
- **About Page** - Provides context and insights into my development journey and background
- **Experience Page** - Brief overview of professional experience with downloadable resume functionality
- **Resume Download** - Integrated download icon for accessing full resume PDF

### Deployment & Domain
- **Hosting Platform:** Netlify with automated deployments
- **Custom Domain:** [akddev.co](https://akddev.co) - Professional domain setup
- **SSL Certificate:** Secure HTTPS connection enabled
- **Continuous Deployment:** Automatic updates from repository pushes

### Enhanced User Experience
- **Multi-page navigation** between Home, About, and Experience sections
- **Professional presentation** with downloadable resources
- **Fast loading** optimized through Netlify's CDN


# July 25th, 2025:
## 🎨 Design & Responsive Enhancement Update
### Visual Design Overhaul
- **Color Palette Refinement** - Transitioned from bright golden theme to sophisticated earth-tone palette with neutral white background
- **Professional Aesthetics** - Implemented clean, minimal design following industry feedback for better readability and reduced visual noise
- **Typography Enhancement** - Improved text contrast and hierarchy with dark gray (#333333) text on neutral backgrounds
- **Interactive Elements** - Added subtle hover effects and smooth transitions across buttons and navigation

### Complete Responsive Design Implementation
- **Mobile-First Approach** - Comprehensive media queries ensuring optimal experience across all device sizes
- **Breakpoint Coverage** - Mobile (≤768px), Tablet (769px-1024px), and Desktop (1024px+) optimizations
- **Touch-Friendly Interface** - Appropriately sized interactive elements for mobile devices
- **Flexible Layouts** - Stacked layouts on mobile, optimized spacing and typography scaling

### Performance & Accessibility Improvements
- **Image Optimization** - Converted profile image to WebP format for faster loading
- **Enhanced Accessibility** - Improved color contrast ratios meeting WCAG guidelines
- **Cross-Device Compatibility** - Consistent user experience from mobile to desktop
- **Clean Architecture** - Organized CSS with component-specific responsive queries

### User Experience Enhancements
- **Clickable Profile Image** - Direct LinkedIn integration for seamless professional networking
- **Improved Contact Page** - Added SVG icons with hover effects for better visual engagement
- **Refined Navigation** - Enhanced nav hover effects with consistent color theming