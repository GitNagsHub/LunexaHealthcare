# Lunexa Healthcare Website - Complete Requirements Document

## 1. PROJECT OVERVIEW

### Company Information
- **Company Name**: Lunexa Healthcare Limited
- **Industry**: Medical Supply & Healthcare Equipment
- **Target Market**: Hospitals, birthing centers, clinics, healthcare professionals
- **Specialization**: Maternal and neonatal care products
- **Experience**: 15+ years in healthcare supply industry
- **Geographic Presence**: United Kingdom (operational), India (expansion planned)

### Website Purpose
Professional corporate website representing Lunexa Healthcare's global operations, showcasing services, company information, and providing contact channels for healthcare professionals and institutions.

## 2. WEBSITE ARCHITECTURE & STRUCTURE

### 2.1 Navigation Structure
- **Single Page Application (SPA)**: Hash-based routing system
- **Main Navigation**: Sticky header with logo and navigation menu
- **Pages**: Home, Company Profile, Contact Us
- **Footer Navigation**: Quick links mirroring main navigation

### 2.2 Page Hierarchy
```
Lunexa Healthcare Website
├── Home (#home)
├── Company Profile (#company)
└── Contact Us (#contact)
```

## 3. COMPLETE FEATURE SPECIFICATIONS

### 3.1 HOME PAGE FEATURES

#### Hero Section
- **Main Headline**: "Welcome to Lunexa Healthcare"
- **Subtitle**: "Your trusted partner in healthcare supply solutions"
- **Hero Content**: Centered professional layout with company description
- **Key Features Grid**:
  - FDA Approved Products (with checkmark icon)
  - Fast & Reliable Delivery (with checkmark icon)
  - 24/7 Customer Support (with checkmark icon)
  - Competitive Pricing (with checkmark icon)

#### Visual Design
- **Background**: Gradient overlay with subtle SVG pattern
- **Color Scheme**: Professional blue gradient (#2c5aa0 to #1e3d73)
- **Interactive Elements**: Hover effects on feature cards
- **Typography**: Inter font family for modern, professional appearance

### 3.2 COMPANY PROFILE PAGE FEATURES

#### About Us Section
- **Company History**: 15+ years of experience
- **Specialization**: Maternal and neonatal care products
- **Target Customers**: Hospitals, birthing centers, clinics
- **Product Range**: Comprehensive medical supplies

#### Mission Statement
- **Core Mission**: Provide reliable, high-quality medical supplies
- **Service Goal**: Enable healthcare facilities to focus on patient care

#### Vision Statement
- **Future Aspiration**: Most trusted healthcare supply partner
- **Recognition Goals**: Quality, innovation, customer satisfaction

#### Core Values (Interactive Grid)
1. **Quality** (Shield icon): Highest standards in products and services
2. **Reliability** (Handshake icon): Consistent, dependable service
3. **Care** (Heart icon): Improving healthcare outcomes
4. **Innovation** (Lightbulb icon): Continuously seeking better service methods

#### Services Offered
- **Maternity Care Supplies** (Baby icon)
- **Neonatal Equipment** (Stethoscope icon)
- **Surgical Instruments** (Band-aid icon)
- **Disposable Medical Supplies** (Syringe icon)
- **Hospital Equipment** (Hospital icon)
- **Emergency Supply Services** (Truck icon)

### 3.3 CONTACT US PAGE FEATURES

#### Dual Office Structure

##### United Kingdom Office (Operational)
- **Address**: 2 Speirs Gardens, Dagenham, RM8 1EJ, United Kingdom
- **Phone**: +44 (0) 7424734721
- **Email**: info@lunexahc.com
- **Business Hours**: 
  - Monday-Friday: 8:00 AM - 6:00 PM GMT
  - Saturday: 9:00 AM - 4:00 PM GMT
  - Sunday: Closed

##### India Office (Expansion)
- **Address**: Coming Soon, New Delhi, India
- **Phone**: +91 (Coming Soon)
- **Email**: india@lunexahc.com
- **Business Hours**: 
  - Monday-Friday: 9:30 AM - 6:30 PM IST
  - Saturday: 9:30 AM - 2:00 PM IST
  - Sunday: Closed

#### Contact Form Features
- **Form Fields**:
  - Full Name* (Required, text input)
  - Email Address* (Required, email validation)
  - Phone Number (Optional, tel input)
  - Company/Organization (Optional, text input)
  - Subject* (Required, text input)
  - Message* (Required, textarea, 5 rows)
- **Validation**: Client-side and server-side validation
- **Submission**: AJAX form submission with loading states
- **Feedback**: Success/error messages with auto-dismiss

## 4. TECHNICAL SPECIFICATIONS

### 4.1 Frontend Technologies
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Modern JavaScript for interactivity
- **Font Libraries**: 
  - Google Fonts (Inter family: 300,400,500,600,700)
  - Font Awesome 6.0.0 for icons

### 4.2 Design System

#### Color Palette
- **Primary Blue**: #2c5aa0 to #1e3d73 (gradients)
- **Secondary Green**: #4CAF50 (accent color)
- **Background**: #f5f7fa to #c3cfe2 (gradient)
- **Text Colors**: 
  - Primary: #333
  - Secondary: #666
  - Light: rgba(255, 255, 255, 0.9)
- **Card Backgrounds**: White with subtle shadows

#### Typography Scale
- **Hero Title**: 3.5rem (mobile: 2.5rem)
- **Section Headers**: 2.5rem (mobile: 2rem)
- **Subsection Headers**: 1.8-2rem
- **Body Text**: 1.1-1.2rem
- **Small Text**: 0.95rem

#### Spacing System
- **Container Max Width**: 1200px
- **Section Padding**: 40-80px
- **Card Padding**: 25-40px
- **Grid Gaps**: 15-40px
- **Border Radius**: 8-20px

### 4.3 Responsive Design

#### Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted grid)
- **Mobile**: <768px (stacked layout)
- **Small Mobile**: <480px (compressed spacing)

#### Responsive Features
- **Navigation**: Collapsible menu on mobile
- **Grid Systems**: Auto-fit with minimum widths
- **Typography**: Scalable font sizes
- **Spacing**: Reduced padding on smaller screens
- **Forms**: Full-width inputs on mobile

### 4.4 Interactive Features

#### Navigation System
- **Hash-based Routing**: Single-page application behavior
- **Active States**: Visual indication of current page
- **Browser History**: Back/forward button support
- **Smooth Scrolling**: Enhanced user experience

#### Animation System
- **Scroll Animations**: Elements fade in on scroll
- **Hover Effects**: Cards lift and transform
- **Loading States**: Form submission feedback
- **Transitions**: Smooth 0.3s ease transitions

#### Form Functionality
- **Real-time Validation**: Immediate feedback on input
- **AJAX Submission**: No page reload required
- **Error Handling**: Network and validation error messages
- **Loading States**: Visual feedback during submission
- **Auto-reset**: Form clears after successful submission

## 5. FILE STRUCTURE

### 5.1 Core Files
```
project/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling system
├── script.js           # JavaScript functionality
├── logo.jpg            # Company logo (header)
└── Requirements.md     # This document
```

### 5.2 External Dependencies
- **Google Fonts**: Inter font family (preconnected)
- **Font Awesome CDN**: 6.0.0 icon library
- **Modern Browser APIs**: Fetch, FormData, Promise

## 6. FUNCTIONALITY SPECIFICATIONS

### 6.1 Navigation Features
- **Page Switching**: Instant navigation between sections
- **URL Management**: Hash-based routing with history support
- **Active States**: Visual indication of current section
- **Cross-linking**: Footer navigation synchronization

### 6.2 Form Processing
- **Client Validation**: Real-time field validation
- **Email Validation**: Regex-based email format checking
- **Required Field Handling**: Visual error indicators
- **Server Communication**: POST requests to `/send-email` endpoint
- **Response Handling**: Success/error message display

### 6.3 User Experience Features
- **Smooth Animations**: CSS transitions and transforms
- **Loading Feedback**: Spinner during form submission
- **Error Recovery**: Clear error messages and retry options
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized images and efficient CSS

## 7. CONTENT MANAGEMENT

### 7.1 Editable Content Areas
- **Company Information**: Easy to update contact details
- **Service Descriptions**: Modular service listings
- **Business Hours**: Flexible time zone handling
- **Office Information**: Expandable for additional locations

### 7.2 SEO Considerations
- **Meta Tags**: Title, description, viewport settings
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Image descriptions for accessibility
- **Clean URLs**: Hash-based navigation for indexing

## 8. BROWSER COMPATIBILITY

### 8.1 Supported Browsers
- **Chrome**: 90+ (primary target)
- **Firefox**: 88+ (full support)
- **Safari**: 14+ (WebKit compatibility)
- **Edge**: 90+ (Chromium-based)

### 8.2 Progressive Enhancement
- **Core Functionality**: Works without JavaScript
- **Enhanced Experience**: Full interactivity with JS enabled
- **Fallback Styles**: CSS-only styling for unsupported features

## 9. PERFORMANCE SPECIFICATIONS

### 9.1 Loading Optimization
- **Font Preloading**: Google Fonts with preconnect
- **CSS Minification**: Optimized stylesheet delivery
- **Image Optimization**: Properly sized logo assets
- **Script Defer**: JavaScript loaded after DOM

### 9.2 User Experience Metrics
- **Page Load**: <2 seconds on broadband
- **Form Submission**: <1 second feedback
- **Navigation**: Instant page switching
- **Mobile Performance**: Optimized for 3G networks

## 10. MAINTENANCE & UPDATES

### 10.1 Content Updates
- **Contact Information**: Easily updateable in HTML
- **Business Hours**: Simple text modifications
- **Services**: Expandable list structure
- **Office Locations**: Scalable for additional offices

### 10.2 Technical Maintenance
- **Dependency Updates**: Regular library updates
- **Security**: Form validation and sanitization
- **Analytics**: Ready for tracking integration
- **Backup**: Version control recommended

## 11. DEPLOYMENT REQUIREMENTS

### 11.1 Server Requirements
- **Static Hosting**: Standard web server capability
- **Email Processing**: Backend API for form handling
- **SSL Certificate**: HTTPS for secure form submission
- **CDN**: Content delivery for global performance

### 11.2 Domain & Hosting
- **Domain**: Professional domain name required
- **Hosting**: Standard web hosting with PHP/Node.js support
- **Email**: Business email setup for form processing
- **Analytics**: Google Analytics integration ready

## 12. FUTURE ENHANCEMENTS

### 12.1 Planned Features
- **Product Catalog**: Detailed product listings
- **Online Ordering**: E-commerce integration
- **Customer Portal**: Account management system
- **Multi-language**: Hindi translation for India market

### 12.2 Technical Improvements
- **CMS Integration**: Content management system
- **Database**: Dynamic content management
- **Search Functionality**: Product and content search
- **Mobile App**: Progressive web app conversion

---

**Document Version**: 1.0  
**Last Updated**: Current Date  
**Prepared For**: Lunexa Healthcare Limited  
**Document Type**: Complete Technical Requirements Specification