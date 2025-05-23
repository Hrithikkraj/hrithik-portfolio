# 🌐 Personal Portfolio Website

This is an interactive, multimodal portfolio website built with **React + Vite**, showcasing projects, skills, and experiences through rich user interfaces and cognitive-friendly design principles.

## 🔧 Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 CSS
- 🧩 GSAP (GreenSock Animation Platform)
- 📱 SwiperJS (mobile gestures)
- 🧠 react-typing-effect
- ☁️ GitHub Pages for deployment

---

## 🚀 Features

### ✅ Core Requirements

#### 1. **Multimodal Interaction**
- **Visual**: Smooth animated transitions using GSAP.
- **Tactile**: Swipe gestures (SwiperJS) for project cards on mobile.
- **Hover-based**: 3D transformations on hover for desktop users.

#### 2. **Mixed Reality Integration**
- Pseudo-AR 3D effects on project cards via `transform: perspective`.
- Immersive card tilt animations based on cursor position.

#### 3. **Responsive & Context-Aware Design**
- Mobile-first design using Flexbox, Grid & media queries.
- Theme adapts based on time of day (light/dark mode auto toggle).

#### 4. **Intelligent Avatar Assistant**
- Virtual typing assistant greets users with messages.
- Adapts messages based on context.

#### 5. **Social Interaction**
- Includes a feedback/testimonial section.
- Google Form used for collecting visitor testimonials.

---

### 🧠 Cognitive Design Features

- **Memory & Attention**: Chunked content with consistent icon use.
- **Cognition & Action**: Clear hierarchy, intuitive buttons & interactions.
- **Perception & Navigation**: Navigation highlights, tooltips, scroll-linked active sections.

---


## 📂 Project Structure
```bash
portfolio/
├── public/                      # Static assets (e.g., favicon, images not imported in JS)
│   └── index.html               # Root HTML file
│
├── src/                         # Main source code
│   ├── assets/                  # Images, icons, fonts
│   ├── components/              # Reusable components (Navbar, home, ProjectCard, etc.)       
│   ├── index.css                # Global margins, padding, and box-sizing.
│   ├── App.jsx                  # Main application structure
│   └── main.jsx                 # React root render file
│
├── .gitignore                   # Git ignore rules
├── package.json                 # Project metadata and scripts
├── README.md                    # Project documentation
├── vite.config.js               # Vite configuration
└── index.html                   # May redirect to /public if not using Vite default

```

