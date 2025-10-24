# Calculus Learning Platform

A comprehensive AP Calculus learning platform built with Next.js 14, featuring both free ad-supported content and premium subscription features.

## 🌟 Features

### Free Tier
- **Comprehensive Text Explanations**: Clear, detailed content for all AP Calculus topics
- **Example Problems**: Hundreds of practice problems with detailed solutions
- **Basic Flashcards**: Quick review flashcards for all topics
- **Ad-Supported**: Monetized through Google AdSense integration

### Premium Tier ($9.99/month)
- **All Free Features** plus:
- **Video Explanations**: Comprehensive video tutorials for every topic
- **Anki-Style Spaced Repetition**: Flashcards with SM-2 algorithm for optimal retention
- **Progress Tracking**: Detailed analytics and learning progress
- **Adaptive Learning Modules**: Personalized learning paths based on diagnostic tests
- **Additional Quizzes & Problems**: Extended problem sets
- **Ad-Free Experience**: Clean, distraction-free learning
- **Achievement System**: Gamified learning with achievements and streaks

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Math Rendering**: KaTeX (via react-markdown)
- **State Management**: Zustand + React Query

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or use Prisma's local dev database)
- Stripe account (for payment processing)
- Google AdSense account (for ad monetization)

## 🚀 Getting Started

### 1. Clone and Install

```bash
# Navigate to the project directory
cd "AP Calculus Website - Ad Revenue Based"

# Install dependencies
npm install
```

### 2. Set Up Environment Variables

Create or update your `.env` file with the following:

```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret-key"

# Google OAuth (Optional - for social login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
STRIPE_PREMIUM_PRICE_ID="your-stripe-price-id"

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT_ID="your-adsense-client-id"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Set Up the Database

```bash
# Start Prisma's local PostgreSQL database (optional)
npx prisma dev

# Or configure your own PostgreSQL connection in DATABASE_URL

# Run migrations
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate

# Seed the database with sample content
npm run seed
```

### 4. Configure Stripe

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Create a subscription product and price
4. Set up webhook endpoint at `/api/stripe/webhook`
5. Add the webhook secret to your `.env`

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── auth/           # NextAuth endpoints
│   │   └── stripe/         # Stripe checkout & webhooks
│   ├── topics/             # Topic pages
│   ├── flashcards/         # Flashcard system
│   ├── premium/            # Premium subscription page
│   └── layout.tsx          # Root layout
├── components/              # React components
│   ├── navbar.tsx          # Navigation
│   ├── providers.tsx       # Context providers
│   └── ad-banner.tsx       # AdSense integration
├── lib/                    # Utility libraries
│   ├── prisma.ts          # Prisma client
│   ├── auth.ts            # NextAuth configuration
│   └── stripe.ts          # Stripe configuration
└── types/                  # TypeScript type definitions

prisma/
├── schema.prisma           # Database schema
└── seed.ts                # Sample data seeder
```

## 🗄️ Database Schema

The platform uses a comprehensive schema including:

- **Users & Authentication**: NextAuth-compatible user management
- **Content**: Topics, Categories, Example Problems
- **Flashcards**: With spaced-repetition support
- **Quizzes**: Multiple choice and free response
- **Progress Tracking**: User progress, mastery levels, streaks
- **Adaptive Learning**: Diagnostic tests and personalized paths
- **Subscriptions**: Stripe integration for premium features

## 🎯 Key Features Implementation

### Spaced Repetition System
Premium flashcards use the SM-2 algorithm (similar to Anki) to optimize review schedules based on user performance.

### Adaptive Learning
1. Users take diagnostic tests on specific topics
2. System identifies weak areas and strengths
3. Generates personalized learning path
4. Tracks progress and adjusts recommendations

### Ad Integration
- Ad banners shown only to free-tier users
- Premium users get completely ad-free experience
- Configurable ad placements throughout the site

## 📝 Available Scripts

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm start                  # Start production server

# Database
npx prisma studio          # Open Prisma Studio GUI
npx prisma migrate dev     # Run database migrations
npm run seed              # Seed database with sample data

# Code Quality
npm run lint              # Run ESLint
```

## 🎨 Customization

### Adding New Topics

1. Add content to the database using Prisma Studio or the seed script
2. Topics automatically appear on the `/topics` page
3. Individual topic pages are generated dynamically

### Modifying Pricing

Update the plans in `src/lib/stripe.ts`:

```typescript
export const PLANS = {
  FREE: { /* ... */ },
  PREMIUM: {
    price: 9.99,  // Change price here
    features: [ /* ... */ ]
  }
}
```

### Customizing Ads

Modify ad placements in `src/components/ad-banner.tsx` and update AdSense configuration.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform, especially:
- `NEXTAUTH_SECRET` (generate a secure random string)
- `DATABASE_URL` (production database)
- Stripe keys and webhook secret
- AdSense client ID

## 📚 Content Management

### Adding Math Equations

Use LaTeX syntax with KaTeX:

```markdown
Inline: $f(x) = x^2$

Display: $$\int_0^1 x^2 dx = \frac{1}{3}$$
```

### Creating Flashcards

Flashcards support markdown and math:

```typescript
{
  front: "What is the derivative of $x^n$?",
  back: "$nx^{n-1}$ (Power Rule)",
  hint: "Multiply by exponent, subtract 1"
}
```

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is for educational purposes.

## 🆘 Support

For issues or questions:
1. Check the documentation
2. Review the code comments
3. Open an issue on GitHub

## 🎓 Learning Resources

This platform covers:
- **AP Calculus AB**: All standard topics
- **AP Calculus BC**: Extended topics including series and parametrics
- **Exam Prep**: Practice problems aligned with AP exam format

## 🔮 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] AI-powered problem generator
- [ ] Live tutoring integration
- [ ] Collaborative study groups
- [ ] Practice exam simulator
- [ ] Video upload for premium content
- [ ] Multiple language support

---

Built with ❤️ for AP Calculus students
