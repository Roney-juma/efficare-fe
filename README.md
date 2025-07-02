# EfficCare - Mental Health Counseling Platform

A modern, professional mental health counseling platform built with Next.js 15, TypeScript, and Tailwind CSS. EfficCare connects clients with certified mental health professionals in a secure and user-friendly environment.

## 🌟 Features

### For Clients
- **Find Counselors**: Browse and connect with licensed mental health professionals
- **Session Management**: Schedule, reschedule, and manage counseling sessions
- **Secure Communication**: HIPAA-compliant messaging system
- **Progress Tracking**: Monitor your mental health journey
- **Resource Library**: Access to mental health resources and materials

### For Counselors
- **Client Management**: Comprehensive client dashboard and profiles
- **Session Scheduling**: Flexible appointment management system
- **Session Notes**: Secure note-taking and progress tracking
- **Analytics**: Track session statistics and client progress
- **Professional Tools**: Built-in tools for mental health professionals

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **UI Components**: Custom component library
- **Development**: Turbopack for fast development builds

## 📋 Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd efficare
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages (login, signup)
│   ├── dashboard/         # Protected dashboard area
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard-specific components
│   ├── layout/           # Layout components (Header, Sidebar)
│   └── ui/               # Base UI components
├── lib/                  # Utility functions and configurations
├── styles/              # Additional CSS styles
└── types/               # TypeScript type definitions
```

## 🎨 Design System

The application uses a consistent design system with:
- **Colors**: Blue primary, Gray neutrals, Status colors (green, orange, red)
- **Typography**: Geist Sans for UI, systematic font sizes
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first responsive design

## 🔒 Security Features

- Client-side form validation
- Secure authentication flow
- Protected routes for dashboard areas
- HIPAA-compliant design considerations

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🧪 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

The easiest way to deploy EfficCare is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the EfficCare team.

---

Built with ❤️ for better mental health accessibility
