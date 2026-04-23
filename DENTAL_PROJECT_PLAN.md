# Dentiste - Modern Dental Website (Service Plan Focus)

## 1. Project Vision
To build a high-conversion, premium dental website that shifts focus from one-off appointments to **recurring wellness plans**. The site must feel modern, trustworthy, and technologically advanced.

## 2. Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Vanilla CSS (CSS Modules) for maximum performance and design flexibility.
- **Interactivity**: Framer Motion for premium animations & transitions.
- **Iconography**: Lucide React.
- **Fonts**: Outfit (Headlines) & Inter (Body).

## 3. Core Design System (Tokens)
- **Primary**: `#0EA5E9` (Clinical Cyan)
- **Secondary**: `#0F172A` (Professional Navy)
- **Background**: `#FFFFFF` / `#F8FAF8` (Clean White)
- **Surface**: Glassmorphism (Blurred backgrounds for headers/modals)
- **Radius**: `1rem` (Rounded, friendly edges)

## 4. Website Architecture (Page Sections)

### A. Hero Section (The Hook)
- **Value Proposition**: "Modern Dentistry via Wellness Plans."
- **Visuals**: Floating medical badges + High-end dental imagery.
- **CTAs**: "Explore Plans" vs. "Book Now."

### B. Wellness Plans Section (The Core)
- **Tiered Model**: 
  - **Base Plan**: Essential cleaning & exams.
  - **Premium Care**: Adds fluoride, whitening credits, and higher discounts.
  - **Elite Health**: Adds priority booking and cosmetic consultations.
- **Interactive Cards**: Highlighting "Most Popular" options.

### C. Service Catalog
- **Interactive Grid**: Visual cards for General, Cosmetic, Orthodontics, and Surgery.
- **Hover Transitions**: Icons change state on hover for a "live" feel.

### D. Patient Trust & Proof
- **Testimonials**: Clean cards with real patient photos (optimized via `next/image`).
- **Stats**: "15k+ Patients", "99% Success Rate."

### E. Conversion & Footer
- **CTA Section**: High-impact banner with booking shortcuts.
- **Footer**: Comprehensive navigation + newsletter sign-up for dental tips.

## 5. Development Roadmap (Milestones)

### Phase 1: Foundation (Current Status)
- [x] Project Structure & Global Styles.
- [x] Header & Navigation.
- [x] Modern Hero Section.

### Phase 2: Plan Focus (Next Steps)
- [x] Detailed "Plans" component implementation.
- [ ] Comparison table for plan features.
- [ ] Plan selection interaction (Modal/Form).

### Phase 3: Content & Conversion
- [x] Core Service Grid.
- [x] Testimonial Section.
- [x] Dynamic CTA Section.
- [ ] Appointment Booking Form integration.

### Phase 4: Optimization & SEO
- [ ] Mobile responsiveness audit.
- [ ] Performance optimization (Image compression, font loading).
- [ ] SEO Metadata & Schema.org markup.

## 6. UX Principles
1. **Speed First**: Minimalist code, no heavy frameworks like Tailwind if not needed.
2. **Clarity**: Plan prices and benefits must be visible in 2 seconds.
3. **Mobile-First**: Smooth touch interactions for all card elements.
