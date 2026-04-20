# Mithun Construction Website - Deployment Guide

## 🚀 Project Overview
This is a modern, responsive construction website built with React, Vite, and Tailwind CSS. The website features:
- Fully responsive design for all devices
- Modern construction theme with orange accent colors
- Interactive 3D animations (desktop only)
- Contact form with backend API integration
- Professional navigation and sections

## 📋 Prerequisites
- Node.js 18+ installed
- Git installed and configured
- Hosting service (Vercel, Netlify, GitHub Pages, or custom server)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/mithun-construction.git
   git push -u origin master
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Vercel will automatically detect it's a Vite/React project
   - Deploy with one click

### Option 2: Netlify
1. **Build the project**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `frontend/dist` folder
   - Or connect GitHub repository for automatic deployments

### Option 3: GitHub Pages
1. **Update vite.config.js**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/mithun-construction/', // Add your repo name
     build: {
       outDir: 'dist'
     }
   })
   ```

2. **Build and deploy**:
   ```bash
   cd frontend
   npm run build
   git add dist -f
   git commit -m "Add build files"
   git push
   ```

3. **Enable GitHub Pages** in repository settings

### Option 4: Custom Server
1. **Build the project**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Upload files**:
   - Upload `frontend/dist` folder contents to your web server
   - Configure server to serve static files

## 🔧 Environment Variables
For production, set these environment variables:
- `VITE_API_URL`: Your backend API URL
- `VITE_CONTACT_EMAIL`: Contact email address

## 📱 Backend API (Optional)
The project includes a Node.js backend for the contact form:
```bash
cd backend
npm install
npm start
```
Backend runs on `http://localhost:5000` by default.

## 🌍 Domain Configuration
After deployment:
1. Update your DNS settings to point to your hosting provider
2. Configure SSL certificate for HTTPS
3. Test all functionality including contact form

## 📊 Performance Optimization
- Images are optimized for web
- 3D scene is disabled on mobile for performance
- CSS and JS are minified in production build
- Lazy loading implemented for better performance

## 🛠️ Troubleshooting
- **Build fails**: Check Node.js version and run `npm install`
- **3D not working**: Ensure WebGL is enabled in browser
- **Contact form not working**: Check backend API is running
- **Styles not loading**: Verify Tailwind CSS build process

## 📞 Support
For deployment issues, check:
1. Hosting provider documentation
2. Build logs for error messages
3. Browser console for JavaScript errors

---
**Ready to deploy! 🎉**
