# Pankaj Shah - Portfolio Website

A modern, interactive, and responsive portfolio website built with Next.js 15, TypeScript, and Ant Design.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional UI with gradient accents
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🚀 **Performance Optimized**: Built with Next.js 15 for blazing-fast performance
- 💬 **AI Chatbot**: Interactive chatbot to answer questions about experience and skills
- 📧 **Contact Form**: Functional contact form with email notifications
- ⚡ **Smooth Animations**: Engaging animations and transitions throughout
- 🎯 **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- 🌐 **Modern Tech Stack**: Next.js, TypeScript, Ant Design, Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: Ant Design 5.x
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **Icons**: React Icons, Ant Design Icons

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Navbar.tsx                # Navigation bar
│   ├── Hero.tsx                  # Hero section
│   ├── About.tsx                 # About section
│   ├── Skills.tsx                # Skills section
│   ├── Experience.tsx            # Work experience
│   ├── Projects.tsx              # Projects showcase
│   ├── Education.tsx             # Education & certifications
│   ├── Contact.tsx               # Contact form
│   ├── Footer.tsx                # Footer
│   ├── Chatbot.tsx               # AI chatbot assistant
│   └── *.module.css              # Component styles
├── lib/
│   └── data.ts                   # Portfolio data
├── public/
│   └── images/
│       └── profile.jpg           # Profile image
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the repository**
   ```bash
   cd "c:\Users\Pankaj\Downloads\Pankaj Shah\Portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   # Email Configuration (for contact form)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=pankajshah2941999@gmail.com
   ```

   **Note**: For Gmail, you need to use an [App Password](https://support.google.com/accounts/answer/185833):
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password for "Mail"
   - Use that password in the `EMAIL_PASS` variable

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal information
- Skills
- Work experience
- Projects
- Education
- Certifications

### Update Profile Image

Replace `public/images/profile.jpg` with your own image.

### Customize Theme

Edit `app/layout.tsx` to modify the Ant Design theme:
```typescript
const theme = {
  token: {
    colorPrimary: '#667eea',  // Change primary color
    borderRadius: 8,          // Change border radius
    fontFamily: '...',        // Change font family
  },
};
```

### Update Chatbot Responses

Edit `components/Chatbot.tsx` to modify the chatbot's quick responses and behavior.

## 🔧 Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Deploy to AWS/Digital Ocean

1. Build: `npm run build`
2. Copy files to server
3. Install dependencies: `npm install --production`
4. Set up environment variables
5. Run with PM2: `pm2 start npm --name "portfolio" -- start`

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. To enable it:

1. **Gmail Setup**:
   - Enable 2-Step Verification
   - Generate an App Password
   - Add credentials to `.env` file

2. **Other Email Providers**:
   - Update the transporter configuration in `app/api/contact/route.ts`

3. **Test the Form**:
   - Fill out the contact form
   - Check your email for notifications

## 🎨 Features Breakdown

### Interactive Sections
- **Hero**: Animated hero section with profile image
- **About**: Personal introduction with highlights
- **Skills**: Categorized technical skills
- **Experience**: Timeline of work experience
- **Projects**: Featured projects with achievements
- **Education**: Academic background and certifications
- **Contact**: Functional contact form

### AI Chatbot
- Answers questions about experience, skills, projects
- Context-aware responses
- Smooth animations
- Mobile responsive

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 968px
- Touch-friendly interface
- Optimized images

## 🐛 Troubleshooting

### Contact form not working
- Check `.env` file is configured correctly
- Verify email credentials
- Check console for error messages
- Ensure API route is accessible

### Images not loading
- Verify image paths in `public/images/`
- Check Next.js image optimization settings
- Clear `.next` cache and rebuild

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (18+ required)

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

**Pankaj Shah**
- Email: pankajshah2941999@gmail.com
- LinkedIn: [linkedin.com/in/ps29](https://linkedin.com/in/ps29/)
- Location: Jodhpur, Rajasthan, India

---

Built with ❤️ using Next.js and Ant Design
