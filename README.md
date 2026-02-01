# Kevin D'Souza - Data Analyst Portfolio

**Professional, HR-Ready Portfolio | BFSI Analytics Specialist**

---

## 🎯 **Overview**

A modern, eye-catching portfolio designed to showcase data analytics expertise in BFSI environments. Built with a professional aesthetic that **demands attention** while maintaining readability and enterprise credibility.

---

## ✨ **Key Features**

### **1. Enhanced Visual Design**
- **Brighter Accent Colors**: Cyan (#00d9ff) + Warm Gold (#ffb84d) + Purple accents
- **Eye-Catching Hover Effects**: Cards lift, glow, and transform on interaction
- **Professional Glow Effects**: Subtle shadows on interactive elements
- **Strong Visual Hierarchy**: Clear emphasis on important content

### **2. Professional Experience**
- **Dual Role Display**: Intern (Dec 2023 - May 2024) + Executive (Jun 2024 - Present)
- **Comprehensive Responsibilities**: All key achievements from your resume
- **Skills Grid**: Analytics & BI, Risk & Controls, Automation

### **3. Interactive Demo**
- **Statistical Analysis**: Real-time number crunching
- **Chart.js Visualization**: Beautiful, interactive charts
- **8 Key Metrics**: Count, Mean, Median, Std Dev, Min, Max, Range, Anomalies
- **Anomaly Detection**: Identifies outliers (>2 std devs)

### **4. Project Showcase - 5 Enterprise + 1 Personal**

#### **Enterprise Projects:**
1. **Wealth Management Audit Automation**
   - Icon: Building/Bank (Green #4ade80)
   - Tech: Python, Pandas, NumPy
   - Metrics: 100% Accuracy, 80% Time Saved

2. **ITGC Audit Automation Platform**
   - Icon: Shield (Orange #f59e0b)
   - Tech: Power BI, DAX, Azure AI
   - Metrics: AI-Powered, Risk-Based

3. **NBFC Loan Book Analytics**
   - Icon: Chart Line (Cyan #06b6d4)
   - Tech: Power BI, SQL, DAX
   - Metrics: Multi-Source, Real-Time KPIs

4. **Compliance PDF Extraction**
   - Icon: PDF File (Red #ef4444)
   - Tech: Python, OCR, Regex
   - Metrics: 95% Accuracy, 1000+ Docs

5. **Enterprise MIS Dashboard**
   - Icon: Chart Simple (Purple #8b5cf6)
   - Tech: Power BI, SQL, Excel
   - Metrics: Multi-Department, Period Analysis

#### **Personal Project:**
6. **ML Experiments** (Links to GitHub)
   - Icon: Brain (Purple #9d4edd)
   - Tech: Python, Scikit-learn, ML

### **5. Recognition**
- **Sparkle Award** - Q2 2024 - KKC & Associates LLP

---

## 📁 **File Structure**

```
portfolio/
├── index.html              # Main homepage
├── style.css              # Enhanced styling
├── script.js              # Interactive features
├── wealth-management.html # Project 1 details
├── itgc-ai.html          # Project 2 details
├── nbfc-dashboard.html   # Project 3 details
├── pdf-extractor.html    # Project 4 details
├── mis-dashboard.html    # Project 5 details
└── README.md             # This file
```

---

## 🚀 **Quick Start**

### **Option 1: Direct Open**
Simply open `index.html` in any modern browser.

### **Option 2: Local Server (Recommended)**

**Python:**
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

**Node.js:**
```bash
npx serve
# or
npm install -g live-server
live-server
```

**VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html` → Open with Live Server

---

## 🎨 **Design System**

### **Colors**
```css
--bg-primary: #0f1419        /* Deep dark background */
--accent-primary: #00d9ff    /* Bright cyan (main accent) */
--accent-secondary: #ffb84d  /* Warm gold (highlights) */
--accent-tertiary: #9d4edd   /* Purple (personal projects) */
--text-primary: #f0f3f7      /* High contrast text */
--text-secondary: #b4bcc7    /* Secondary text */
```

### **Typography**
- **Headings**: Inter (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Mono**: IBM Plex Mono (code/data)

### **Interactions**
- **Hover**: Cards lift 4-6px with cyan glow
- **Transitions**: 0.3s cubic-bezier(0.4,0,0.2,1)
- **Icons**: Scale 1.1x on hover
- **Links**: Underline animates from center

---

## 📝 **Customization Guide**

### **Update Contact Info** (index.html, lines ~385-410)
```html
<a href="mailto:YOUR_EMAIL@example.com" ...>
<a href="https://www.linkedin.com/in/YOUR_USERNAME" ...>
<a href="https://github.com/YOUR_USERNAME" ...>
```

### **Update GitHub Link** (index.html, line ~358)
```html
<a href="https://github.com/YOUR_USERNAME/ml-experiments" ...>
```

### **Modify Colors** (style.css, lines 1-20)
```css
:root {
  --accent-primary: #00d9ff;  /* Change main accent */
  --accent-secondary: #ffb84d; /* Change highlights */
}
```

### **Add More Facts** (script.js, lines 1-16)
```javascript
const dataFacts = [
  "Your new fact here...",
  // Add more
];
```

---

## 🛠️ **Technologies**

- **HTML5** - Semantic markup
- **CSS3** - Modern styling (Grid, Flexbox, Variables)
- **JavaScript (ES6+)** - Interactive features
- **Chart.js** - Data visualization
- **Typed.js** - Typing animation
- **Font Awesome** - Icons
- **Google Fonts** - Inter & IBM Plex Mono

---

## 📱 **Responsive Design**

Fully responsive across devices:
- **Desktop**: 1200px+ (3-column project grid)
- **Tablet**: 768-1024px (2-column grid)
- **Mobile**: <768px (Single column, hamburger menu)

---

## ✅ **What's Different from Previous Version**

### **Removed:**
- ❌ Pipeline Builder (entire section removed)
- ❌ Pipeline visualization code

### **Enhanced:**
- ✅ **Brighter accent colors** (cyan + gold)
- ✅ **More prominent hover effects** (larger transforms, glows)
- ✅ **Dual role timeline** (Intern + Executive periods)
- ✅ **Color-coded project icons** (each icon has unique color)
- ✅ **Stronger visual hierarchy** (bolder headings, better contrast)
- ✅ **Professional summary** from your actual resume

### **Updated:**
- ✅ Professional experience matches resume exactly
- ✅ Contact info ready for your details
- ✅ All project pages linked correctly
- ✅ Statistical demo kept and enhanced

---

## 🎯 **Key Metrics Displayed**

- **40-50M** Rows Analyzed
- **99%+** Accuracy
- **1000+** Documents Processed
- **100%** Reconciliation (Wealth Management)
- **95%** Extraction Accuracy (PDF)
- **80%** Time Saved (Automation)

---

## 🌟 **Interactive Elements**

1. **Smooth Navigation**: Scroll-spy with active highlighting
2. **Typed Roles**: Auto-cycling job titles
3. **Random Facts**: Refreshable data insights
4. **Statistical Demo**: Live number analysis with charts
5. **Hover Animations**: Cards, buttons, icons all respond
6. **Mobile Menu**: Smooth slide-in navigation

---

## 📊 **Statistical Demo Features**

- **Input**: Comma-separated numbers
- **Metrics**: Count, Mean, Median, Std Dev, Min, Max, Range
- **Anomaly Detection**: Flags outliers beyond 2σ
- **Visualization**: Interactive Chart.js line graph
- **Processing Animation**: Multi-stage loader

---

## 🔧 **Browser Support**

Tested and optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📦 **Deployment**

### **Netlify (Easiest)**
1. Drag folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant live URL

### **Vercel**
1. Import GitHub repo
2. Deploy automatically

### **GitHub Pages**
1. Create repo
2. Push files
3. Enable Pages in Settings
4. Live at `username.github.io/repo-name`

---

## 🎓 **Skills Highlighted**

### **Technical Skills:**
- Python (Pandas, NumPy)
- SQL & Data Modeling
- Power BI (DAX, RLS)
- CaseWare IDEA
- Excel (Advanced)
- OCR & Automation
- Process Automation
- Risk & Controls
- Data Validation

### **Domain Expertise:**
- BFSI Analytics
- IT Automated Controls
- Audit Automation
- Risk Identification
- Compliance Testing
- Management Reporting

---

## 💡 **Tips for Best Results**

1. **View on Desktop First**: Full experience optimized for larger screens
2. **Test Interactive Demo**: Try the statistical analysis feature
3. **Explore Project Pages**: Each has detailed breakdowns
4. **Check Mobile View**: Resize browser to see responsive design
5. **Hover Everything**: Discover all interactive elements

---

## 📄 **License**

This portfolio is free to use and modify for personal use. Please:
- Update all personal information
- Replace project details with your own
- Customize colors and branding
- Add your contact information

---

## 🤝 **Credits**

**Design & Development**: Kevin D'Souza  
**Fonts**: Google Fonts (Inter, IBM Plex Mono)  
**Icons**: Font Awesome  
**Charts**: Chart.js  
**Animation**: Typed.js  

---

**Built with precision. Designed to impress. Ready for HR.** 🚀

---

## 📞 **Questions?**

If you need help customizing or deploying, check:
- Inline comments in the code
- This README
- Browser console for any errors

**Good luck with your job search!** 🎯
