# Digital Forensics Expert Portfolio

![Portfolio Preview](./images/image-me.jpg) <!-- Update this path if you have a full screenshot of your site -->

> **Live Site:** [Insert Live Site Link Here]

A highly professional, fully responsive, and visually striking portfolio website built specifically for a Digital Forensics and Incident Response (DFIR) professional. It leverages a modern dark theme, glassmorphism design principles, and smooth scroll animations to create an immersive "cyber" dashboard feel.

---

## 🚀 Key Features

- **Modern Glassmorphism UI:** Semi-transparent cards with subtle borders to mimic a high-tech investigation environment.
- **Dedicated DFIR Sections:** Specialized layouts for showcasing tools, investigation reports, case studies, and methodologies.
- **Detailed Pages:** Multi-page architecture allowing deep dives into specific case files (e.g., Insider Threats, Ransomware Analysis).
- **Responsive Design:** 100% mobile-friendly grids and navigation using Bootstrap 5.
- **Dynamic Animations:** Scroll-triggered element reveals via AOS (Animate On Scroll) and an interactive particles background.
- **Functional Contact Form:** Pre-configured to easily link with EmailJS for serverless email forwarding.

---

## 🛠️ Technology Stack

- **Core:** HTML5, CSS3, Vanilla JavaScript
- **Framework:** Bootstrap 5 (via CDN)
- **Icons:** Bootstrap Icons
- **Animations:** AOS (Animate On Scroll) library, Particles.js
- **Form Handling:** EmailJS (Client-side API)

---

## 📁 Project Structure

The project is structured as a multi-page static site to ensure excellent SEO, fast loading times, and clear navigation.

```text
📂 Portfolio/
├── 📄 index.html                # Main landing page (Hero, About, Certifications, Contact)
├── 📄 services.html             # Breakdown of professional offerings
├── 📄 projects.html             # Grid of technical projects and labs
├── 📄 toolkit.html              # Interactive display of hardware/software tools
├── 📄 blogs.html                # Insights, research, and methodology articles
├── 📄 reports.html              # Investigation Reports hub
│   ├── 📄 report-insider-threat.html   # Detailed page for Case #2024-001
│   └── 📄 report-ransomware.html       # Detailed page for Case #2024-002
├── 📄 case-studies.html         # Real-world scenarios hub
│   ├── 📄 case-study-insider.html      # Deep dive into Insider Theft case
│   └── 📄 case-study-ransomware.html   # Deep dive into Ransomware Response
├── 📂 css/
│   └── 📄 style.css             # Custom styling, color variables, and glassmorphism utilities
├── 📂 js/
│   └── 📄 script.js             # Sticky navbar logic, scroll spy, active links, counter animations
└── 📂 images/                   # Asset directory for photos and backgrounds
```

---

## ⚙️ Setup & Customization

Since this is a static website, no backend server or build steps are required.

1. **Clone or Download** the repository to your local machine.
2. **Open** `index.html` in any modern web browser to view the site locally.
3. **Customize Content**: 
   - Open the HTML files in your preferred text editor (e.g., VS Code).
   - Replace placeholder text (`[Your Name]`, `[Your Bio]`) with your actual information.
   - Update the `<img src="...">` tags in the `images/` folder to use your actual project screenshots and profile picture.
4. **Configure EmailJS**:
   - Create a free account at [EmailJS](https://www.emailjs.com/).
   - Add your `Public Key` to the `<head>` of `index.html`.
   - Update `script.js` with your specific `SERVICE_ID` and `TEMPLATE_ID` to activate the contact form.

---

## 📝 License

This project is open for personal portfolio use. All sensitive case data provided in the template is simulated for demonstration purposes.
