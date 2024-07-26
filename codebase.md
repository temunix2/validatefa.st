# tailwind.config.js

```js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: ["light", "dark","pastel","lofi","nord"],
  },
};

```

# structure

```
.
├── README.md
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.js
│   │   ├── lead
│   │   │   └── route.js
│   │   ├── stripe
│   │   │   ├── create-checkout
│   │   │   │   └── route.js
│   │   │   └── create-portal
│   │   │       └── route.js
│   │   └── webhook
│   │       ├── mailgun
│   │       │   └── route.js
│   │       └── stripe
│   │           └── route.js
│   ├── apple-icon.png
│   ├── blog
│   │   ├── [articleId]
│   │   │   └── page.js
│   │   ├── _assets
│   │   │   ├── components
│   │   │   │   ├── Avatar.js
│   │   │   │   ├── BadgeCategory.js
│   │   │   │   ├── CardArticle.js
│   │   │   │   ├── CardCategory.js
│   │   │   │   └── HeaderBlog.js
│   │   │   ├── content.js
│   │   │   └── images
│   │   │       └── authors
│   │   │           └── marc.png
│   │   ├── author
│   │   │   └── [authorId]
│   │   │       └── page.js
│   │   ├── category
│   │   │   └── [categoryId]
│   │   │       └── page.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── dashboard
│   │   ├── layout.js
│   │   └── page.js
│   ├── error.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── icon.png
│   ├── layout.js
│   ├── not-found.js
│   ├── opengraph-image.png
│   ├── page.js
│   ├── privacy-policy
│   │   └── page.js
│   ├── tos
│   │   └── page.js
│   └── twitter-image.png
├── components
│   ├── BetterIcon.js
│   ├── ButtonAccount.js
│   ├── ButtonCheckout.js
│   ├── ButtonGradient.js
│   ├── ButtonLead.js
│   ├── ButtonPopover.js
│   ├── ButtonSignin.js
│   ├── ButtonSupport.js
│   ├── CTA.js
│   ├── FAQ.js
│   ├── FeaturesAccordion.js
│   ├── FeaturesGrid.js
│   ├── FeaturesListicle.js
│   ├── Footer.js
│   ├── Header.js
│   ├── Hero.js
│   ├── LayoutClient.js
│   ├── Modal.js
│   ├── Pricing.js
│   ├── Problem.js
│   ├── Testimonial1Small.js
│   ├── TestimonialRating.js
│   ├── Testimonials1.js
│   ├── Testimonials11.js
│   ├── Testimonials3.js
│   ├── TestimonialsAvatars.js
│   └── WithWithout.js
├── config.js
├── jsconfig.json
├── libs
│   ├── api.js
│   ├── gpt.js
│   ├── mailgun.js
│   ├── mongo.js
│   ├── mongoose.js
│   ├── next-auth.js
│   ├── seo.js
│   └── stripe.js
├── models
│   ├── Lead.js
│   ├── User.js
│   └── plugins
│       └── toJSON.js
├── next-sitemap.config.js
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── blog
│       └── introducing-supabase
│           └── header.png
├── structure.txt.
└── tailwind.config.js

2555 directories, 24701 files

```

# requirements.txt

```txt
flask==3.0.3
openai==1.35.14
python-dotenv==1.0.1
```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# package.json

```json
{
  "name": "ship-fast-code",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "next-sitemap",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@auth/mongodb-adapter": "^1.0.0",
    "@headlessui/react": "^1.7.18",
    "aws4": "^1.13.0",
    "axios": "^1.6.8",
    "crisp-sdk-web": "^1.0.22",
    "eslint": "8.47.0",
    "eslint-config-next": "13.4.19",
    "form-data": "^4.0.0",
    "mailgun.js": "^9.4.1",
    "mongodb": "^5.9.2",
    "mongodb-client-encryption": "^2.9.1",
    "mongoose": "^7.6.10",
    "next": "^14.1.4",
    "next-auth": "^4.24.7",
    "next-plausible": "^3.12.0",
    "next-sitemap": "^4.2.3",
    "nextjs-toploader": "^1.6.11",
    "nodemailer": "^6.9.13",
    "openai": "^4.52.7",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-hot-toast": "^2.4.1",
    "react-markdown": "^9.0.1",
    "react-syntax-highlighter": "^15.5.0",
    "react-tooltip": "^5.26.3",
    "stripe": "^13.11.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "daisyui": "^4.10.1",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3"
  }
}

```

# next.config.js

```js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/plausible/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/plausible/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
}
};



module.exports = nextConfig;

```

# next-sitemap.config.js

```js
module.exports = {
  // REQUIRED: add your own domain name here (e.g. https://shipfa.st),
  siteUrl: process.env.SITE_URL || "https://shipfa.st",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

```

# jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}

```

# config.js

```js
import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "WritingGroupAI",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Consistent feedback in minutes, not months! Your always-available AI writing circle.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "jhadruk.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Pf5EuGn65zs7jMVAJ9DdXAz"
            : "price_1Pg7nvGn65zs7jMVhDLzCSZd",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Kickstart your storytelling adventure",
        // The price you want to display, the one user will be charged on Stripe.
        price: 10,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 20,
        features: [
          { name: "Explore unique AI writing personas including The Editor, The Critic, and The Motivator" },
          { name: "Craft short stories with 5,000 word capacity per review" },
          { name: "Boost your skills with beginner-friendly feedback" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Pf5FHGn65zs7jMVlucf4vVN"
            : "price_1Pg7oAGn65zs7jMVk1fD8ohy",
        name: "Advanced",
        description: "Elevate your writing to new heights",
        price: 15,
        priceAnchor: 30,
        features: [
          { name: "Expand your horizons with 25,000 word capacity per review" },
          { name: "Diversify your voice with an expanded set of AI writing personas" },
          { name: "Master your craft with advanced writing feedback" },
          { name: "Enjoy all Basic features and more!" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Pf5GVGn65zs7jMVq49yO3ss"
            : "price_1Pf63PGn65zs7jMVv7ZSxZCo",
        name: "Professional",
        description: "Unlock your full creative potential",
        price: 50,
        priceAnchor: 100,
        features: [
          { name: "Conquer epics with 50,000 word capacity per review" },
          { name: "Access to all AI writing personas" },
          { name: "Elevate accuracy with powerful research tools" },
          { name: "Skyrocket productivity with advanced tools" },
          { name: "Access all Pro features and beyond!" },
        ],
      },
    ],
    stripeBilling: {
      url:
        process.env.NODE_ENV === "development"
          ? "https://billing.stripe.com/p/login/test_eVa5mgdFO1GKca48ww"
          : "https://billing.stripe.com/p/login/8wM29WbdM5Wy9zObII",
    }
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "wgroup",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Writing Group AI <noreply@wgroup.jhadruk.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Temunix at  <temunix@wgroup.jhadruk.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "temunix@wgroup.jhadruk.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "temunix2@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "pastel",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    personaChatTheme: "pastel", // Theme specifically for the PersonaChatPage
    main: themes["pastel"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;

```

# README.md

```md
# ShipFast — Javascript

Hey maker 👋 it's Marc from [ShipFast](https://shipfa.st/docs). Let's get your startup off the ground, FAST ⚡️

<sub>**Watch/Star the repo to be notified when updates are pushed**</sub>

## Get Started

1. Follow the [Get Started Tutorial](https://shipfa.st/docs) to clone the repo and run your local server 💻

<sub>**Looking for the /pages router version?** Use this [documentation](https://shipfa.st/docs-old) instead</sub>

2. Follow the [Ship In 5 Minutes Tutorial](https://shipfa.st/docs/tutorials/ship-in-5-minutes) to learn the foundation and ship your app quickly ⚡️

## Links

-   [📚 Documentation](https://shipfa.st/docs)
-   [📣 Updates](https://shipfast.beehiiv.com/)
-   [🧑‍💻 Discord](https://shipfa.st/dashboard)
-   [🥇 Leaderboard](https://shipfa.st/leaderboard)

## Support

Reach out at marc@shipfa.st

\_

Let's ship it, FAST ⚡️

P.S.

-   Want to showcase your startups? Get your [Indie Page](https://indiepa.ge?ref=shipfast_readme) and share your entrepreneur's journey. Join 3,132 founders ⭐️
-   Don't get banned from Stripe for 1 dispute. Use [ByeDispute](https://byedispute.com/?ref=shipfast_readme) to prevent them from happenening 🛡️
-   Make your launch go viral and get your first customers with [LaunchViral](https://launchvir.al/?ref=shipfast_readme) 🚀
-   Stop paying 0.4% per Stripe invoices [Zenvoice](https://zenvoice.io/?ref=shipfast_readme) 🤕

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# public
public/robots.txt
public/sitemap.xml
public/sitemap-0.xml

#venv
/wgenv/
```

# .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "eslint:recommended"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    // Your specific rules.
    "no-unused-vars": "warn"
  }
}

```

# .aidigestignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# public
public/robots.txt
public/sitemap.xml
public/sitemap-0.xml

#venv
/wgenv/
```

# public/logoandName.png

This is a binary file of the type: Image

# models/User.js

```js
import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// USER SCHEMA
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
    },
    image: {
      type: String,
    },
    // Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
    customerId: {
      type: String,
      validate(value) {
        return value.includes("cus_");
      },
    },
    // Used in the Stripe webhook. should match a plan in config.js file.
    priceId: {
      type: String,
      validate(value) {
        return value.includes("price_");
      },
    },
    // Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
    hasAccess: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

export default mongoose.models.User || mongoose.model("User", userSchema);

```

# models/Lead.js

```js
import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// LEAD SCHEMA is used to store the leads that are generated from the landing page.
// You would use this if your product isn't ready yet and you want to collect emails
// The <ButtonLead /> component & the /api/lead route are used to collect the emails
const leadSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
leadSchema.plugin(toJSON);

export default mongoose.models.Lead || mongoose.model("Lead", leadSchema);

```

# libs/stripe.js

```js
import Stripe from "stripe";

// This is used to create a Stripe Checkout for one-time payments. It's usually triggered with the <ButtonCheckout /> component. Webhooks are used to update the user's state in the database.
export const createCheckout = async ({
  priceId,
  mode,
  successUrl,
  cancelUrl,
  couponId,
  clientReferenceId,
  user,
}) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const extraParams = {};

  if (user?.customerId) {
    extraParams.customer = user.customerId;
  } else {
    if (mode === "payment") {
      extraParams.customer_creation = "always";
      // The option below costs 0.4% (up to $2) per invoice. Alternatively, you can use https://zenvoice.io/ to create unlimited invoices automatically.
      // extraParams.invoice_creation = { enabled: true };
      extraParams.payment_intent_data = { setup_future_usage: "on_session" };
    }
    if (user?.email) {
      extraParams.customer_email = user.email;
    }
    extraParams.tax_id_collection = { enabled: true };
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode,
    allow_promotion_codes: true,
    client_reference_id: clientReferenceId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    discounts: couponId
      ? [
          {
            coupon: couponId,
          },
        ]
      : [],
    success_url: successUrl,
    cancel_url: cancelUrl,
    ...extraParams,
  });

  return stripeSession.url;
};

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export const createCustomerPortal = async ({ customerId, returnUrl }) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    return portalSession.url;
  } catch (e) {
    console.error(e);
    return null;
  }
};

// This is used to get the uesr checkout session and populate the data so we get the planId the user subscribed to
export const findCheckoutSession = async (sessionId) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    return session;
  } catch (e) {
    console.error(e);
    return null;
  }
};

```

# libs/seo.js

```js
import config from "@/config";

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can cusotmize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || config.appName,
    // up to 160 characters (how does your app help the user?)
    description: description || config.appDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
      creator: "@marc_louvion",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          author: {
            "@type": "Person",
            name: "Marc Lou",
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
          },
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  );
};

```

# libs/next-auth.js

```js
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import config from "@/config";
import connectMongo from "./mongo";

export const authOptions = {
  // Set any random key in .env.local
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      // Follow the "Login with Google" tutorial to get your credentials
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
        };
      },
    }),
    // Follow the "Login with Email" tutorial to set up your email server
    // Requires a MongoDB database. Set MONOGODB_URI env variable.
    ...(connectMongo
      ? [
          EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: config.mailgun.fromNoReply,
          }),
        ]
      : []),
  ],
  // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc..
  // Requires a MongoDB database. Set MONOGODB_URI env variable.
  // Learn more about the model type: https://next-auth.js.org/v3/adapters/models
  ...(connectMongo && { adapter: MongoDBAdapter(connectMongo) }),

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    brandColor: config.colors.main,
    // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.
    // It will be used in the login flow to display your logo. If you don't add it, it will look faded.
    logo: `/logoandName.png`,
    // logo: `https://${config.domainName}/logoAndName.png`,
  },
};

```

# libs/mongoose.js

```js
import mongoose from "mongoose";
import User from "@/models/User";

const connectMongo = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Add the MONGODB_URI environment variable inside .env.local to use mongoose"
    );
  }
  return mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((e) => console.error("Mongoose Client Error: " + e.message));
};

export default connectMongo;

```

# libs/mongo.js

```js
import { MongoClient } from "mongodb";

// This lib is use just to connect to the database in next-auth.
// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)
// See /libs/nextauth.js file.

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  console.group("⚠️ MONGODB_URI missing from .env");
  console.error(
    "It's not mandatory but a database is required for Magic Links."
  );
  console.error(
    "If you don't need it, remove the code from /libs/next-auth.js (see connectMongo())"
  );
  console.groupEnd();
} else if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

```

# libs/mailgun.js

```js
import config from "@/config";
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "dummy",
});

if (!process.env.MAILGUN_API_KEY && process.env.NODE_ENV === "development") {
  console.group("⚠️ MAILGUN_API_KEY missing from .env");
  console.error("It's not mandatory but it's required to send emails.");
  console.error("If you don't need it, remove the code from /libs/mailgun.js");
  console.groupEnd();
}

/**
 * Sends an email using the provided parameters.
 *
 * @async
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The plain text content of the email.
 * @param {string} html - The HTML content of the email.
 * @param {string} replyTo - The email address to set as the "Reply-To" address.
 * @returns {Promise} A Promise that resolves when the email is sent.
 */
export const sendEmail = async ({ to, subject, text, html, replyTo }) => {
  const data = {
    from: config.mailgun.fromAdmin,
    to: [to],
    subject,
    text,
    html,
    ...(replyTo && { "h:Reply-To": replyTo }),
  };

  await mg.messages.create(
    (config.mailgun.subdomain ? `${config.mailgun.subdomain}.` : "") +
      config.domainName,
    data
  );
};

```

# libs/gpt.js

```js
import axios from "axios";

// Use this if you want to make a call to OpenAI GPT-4 for instance. userId is used to identify the user on openAI side.
export const sendOpenAi = async (messages, userId, max = 100, temp = 1) => {
  const url = "https://api.openai.com/v1/chat/completions";

  console.log("Ask GPT >>>");
  messages.map((m) =>
    console.log(" - " + m.role.toUpperCase() + ": " + m.content)
  );

  const body = JSON.stringify({
    model: "gpt-4",
    messages,
    max_tokens: max,
    temperature: temp,
    user: userId,
  });

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(url, body, options);

    const answer = res.data.choices[0].message.content;
    const usage = res?.data?.usage;

    console.log(">>> " + answer);
    console.log(
      "TOKENS USED: " +
        usage?.total_tokens +
        " (prompt: " +
        usage?.prompt_tokens +
        " / response: " +
        usage?.completion_tokens +
        ")"
    );
    console.log("\n");

    return answer;
  } catch (e) {
    console.error("GPT Error: " + e?.response?.status, e?.response?.data);
    return null;
  }
};

```

# libs/api.js

```js
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import config from "@/config";

// use this to interact with our own API (/app/api folder) from the front-end side
// See https://shipfa.st/docs/tutorials/api-call
const apiClient = axios.create({
  baseURL: "/api",
});

apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let message = "";

    if (error.response?.status === 401) {
      // User not auth, ask to re login
      toast.error("Please login");
      // automatically redirect to /dashboard page after login
      return signIn(undefined, { callbackUrl: config.auth.callbackUrl });
    } else if (error.response?.status === 403) {
      // User not authorized, must subscribe/purchase/pick a plan
      message = "Pick a plan to use this feature";
    } else {
      message =
        error?.response?.data?.error || error.message || error.toString();
    }

    error.message =
      typeof message === "string" ? message : JSON.stringify(message);

    console.error(error.message);

    // Automatically display errors to the user
    if (error.message) {
      toast.error(error.message);
    } else {
      toast.error("something went wrong...");
    }
    return Promise.reject(error);
  }
);

export default apiClient;

```

# components/WithWithout.js

```js
// A useful component when your product is challenging the status quo.
// Highlight the current pain points (left) and how your product is solving them (right)
// Try to match the lines from left to right, so the user can easily compare the two columns
const WithWithout = () => {
  return (
    <section className="bg-base-100"
    id="withwithout">
      <div className="max-w-5xl mx-auto px-8 py-16 md:py-32 ">
        <h2 className="text-center font-extrabold text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
          Want diverse, instant feedback on your writing?
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12">
          <div className="bg-error/20 text-error p-8 md:p-12 rounded-lg w-full ">
            <h3 className="font-bold text-lg mb-4">
              Writing with traditional writing groups
            </h3>

            <ul className="list-disc list-inside space-y-1.5 ">
              {/* Pains the user is experiencing by not using your product */}
              {[
                "Weeks-long wait for feedback",
                "Harsh criticism without direction",
                "Limited by location and schedules",
                "Narrow range of perspectives",
                "Inconsistent group attendance",
              ].map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0 opacity-75"
                  >
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-success/20 text-success p-8 md:p-12 rounded-lg w-full">
            <h3 className="font-bold text-lg mb-4">
            Writing with WritingGroupAI
            </h3>

            <ul className="list-disc list-inside space-y-1.5 ">
              {/* Features of your product fixing the pain (try to match each with/withot lines) */}
              {[
                "Instant multi-persona feedback",
                `Expert character development help`,
                "Grammar and style check",
                "Real talk for real improvement",
                "Specific, actionable improvement tips",
              ].map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0 opacity-75"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithWithout;

```

# components/TestimonialsAvatars.js

```js
import Image from "next/image";

const avatars = [
  {
    alt: "User",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    alt: "User",
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3376&q=80",
  },
];

const TestimonialsAvatars = ({ priority = false }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
      {/* AVATARS */}
      <div className={`-space-x-5 avatar-group justy-start`}>
        {avatars.map((image, i) => (
          <div className="avatar w-12 h-12" key={i}>
            <Image
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>

      {/* RATING */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <div className="text-base text-base-content/80">
          <span className="font-semibold text-base-content">42</span> writers
          crafted better stories
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAvatars;

```

# components/Testimonials3.js

```js
import Image from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    username: "marclou",
    // REQUIRED
    name: "Marc Lou",
    // REQUIRED
    text: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
  },
  {
    username: "the_mcnaveen",
    name: "Naveen",
    text: "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will save your time for sure.",
  },
  {
    username: "wahab",
    name: "Wahab Shaikh",
    text: "Easily saves 15+ hrs for me setting up trivial stuff. Now, I can directly focus on shipping features rather than hours of setting up the same technologies from scratch. Feels like a super power! :D",
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
        <blockquote className="relative flex-1">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium text-base-content md:mb-0.5">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              212 makers are already shipping faster!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about ShipFast.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;

```

# components/Testimonials11.js

```js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import config from "@/config";

// Use this object to add an icon to the testimonial (optional) like the Product Hunt logo for instance. Only change the values if you add more referrings sites (currently Twitter & Product Hunt)
const refTypes = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  video: {
    id: "video",
  },
  other: { id: "other" },
};

// The list of your testimonials. It needs 11 items to fill the grid. The last one (11th) is featured on large devices (span 2 columns + big font)
const list = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    username: "marclou",
    // REQUIRED
    name: "Marc Lou",
    // REQUIRED
    text: "Really easy to use. The tutorials are really useful and explains how everything works. Hope to ship my next project really fast!",
    // REQUIRED — use refTypes.other if you don't want to display an icon
    type: refTypes.twitter,
    // Optional, link to the person's testimonial. It's more trustable
    link: "https://twitter.com/marc_louvion",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
    // You can display video testimonials to build more trust. Just swap the type above to "video" and add at least the video source below
    // videoSrc: "/jack.mp4"
  },
  {
    username: "the_mcnaveen",
    name: "Naveen",
    text: "Setting up everything from the ground up is a really hard, and time consuming process. What you pay for will save your time for sure.",
    type: refTypes.twitter,
    link: "https://twitter.com/the_mcnaveen",
  },
  {
    username: "wahab",
    name: "Wahab Shaikh",
    text: "Easily saves 15+ hrs for me setting up trivial stuff. Now, I can directly focus on shipping features rather than hours of setting up the same technologies from scratch. Feels like a super power! :D",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/products/shipfast-2/reviews?review=667971",
  },
  {
    name: "Sean",
    text: "Just purchased and cloned and *holy shit!* I realllyyy like what I'm seeing here!",
    type: refTypes.other,
  },
  {
    username: "krishna",
    name: "Krishna Kant",
    text: "Finally a good boilerplate for Nextjs, now I dont have to cry about it comparing with laravel ecosystem.",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/posts/shipfast-2?comment=2707061",
  },
  {
    username: "imgyf",
    name: "Yifan Goh",
    text: "It's a game changer  🚀 Comes with easy to follow tutorial, and saves you a ton of time. What's not to love?",
    type: refTypes.twitter,
    link: "https://twitter.com/imgyf/status/1697549891080532236?s=20",
  },
  {
    name: "Yazdun",
    text: "Yo Marc, I got the boilerplate, it's fantastic man you just save me 10 hours on each project",
    type: refTypes.other,
  },
  {
    name: "Marc Lou",
    text: "The tool is exactly what I didn't even know I needed.",
    videoPoster: "https://d1wkquwg5s1b04.cloudfront.net/demo/marcPoster.jpg",
    videoSrc: "https://d1wkquwg5s1b04.cloudfront.net/demo/marcVideo.mp4",
    videoHeight: 250,
    videoWidth: 500,
    videoType: "video/mp4",
    type: refTypes.video,
  },
  {
    username: "zawwadx",
    name: "Zawwad Ul Sami",
    text: "It's an amazing minimalist, lightweight boilerplate with well-organized code. It has almost all the core features you would want in a SaaS boilerplate. As a new team last year it actually took us months to build a similar set of features at a stable level.",
    type: refTypes.twitter,
  },
  {
    username: "dan",
    name: "Dan Mindru",
    text: "Probably one of the most powerful things you can 'npm install' that I've seen",
    type: refTypes.productHunt,
    link: "https://www.producthunt.com/posts/shipfast-2?comment=2706763",
  },
  // The last testimonial is featured on big devices (span 2 columns + big font) 👇
  {
    username: "VicPivots",
    name: "Victor Abeledo",
    text: "Marc, I got your boilerplate and having the payments setup with Stripe + user auth is a blessing. This will save me like a week of work for each new side project I spin up. I appreciate that is well documented, as well. 100% worth it 🚀🚀🚀",
    type: refTypes.twitter,
    link: "https://twitter.com/VicPivots/status/1697352442986250413?s=20",
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  if (testimonial.type === refTypes.video) {
    return <VideoTestimonial i={i} />;
  }

  return (
    <li key={i}>
      <figure className="relative h-full p-6 bg-base-100 rounded-lg">
        <blockquote className="relative">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {testimonial.img ? (
              <Image
                className="w-10 h-10 rounded-full object-cover"
                src={list[i].img}
                alt={`${list[i].name}'s testimonial for ${config.appName}`}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="w-full flex items-end justify-between gap-2">
            <div>
              <div className="text-sm font-medium text-base-content">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            {testimonial.link && testimonial.type?.svg && (
              <a
                href={testimonial.link}
                target="_blank"
                className="shrink-0 "
                aria-label={testimonial.type?.ariaLabel}
              >
                {testimonial.type?.svg}
              </a>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

// A video tesionial to build trust. 2 or 3 on a wall of love is perfect.
const VideoTestimonial = ({ i }) => {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (vidRef.current?.readyState != 0) {
      setIsLoading(false);
    }
  }, [vidRef?.current?.readyState]);

  const handlePlayVideo = () => {
    if (isPlaying) {
      vidRef.current.pause();
      setIsPlaying(false);
    } else {
      vidRef.current.play();
      setIsPlaying(true);

      if (vidRef.current?.readyState === 0) setIsLoading(true);
    }
  };

  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li
      key={i}
      className="break-inside-avoid max-md:flex justify-center bg-base-100 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative w-full">
        {isLoading && (
          <span className="z-40 !h-24 !w-24 !bg-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-ring"></span>
        )}
        <video
          className="w-full"
          ref={vidRef}
          poster={testimonial.videoPoster}
          preload="metadata"
          playsInline
          width={testimonial.videoWidth}
          height={testimonial.videoHeight}
          onLoadedData={() => {
            console.log("Video is loaded!");
            setIsLoading(false);
          }}
        >
          <source
            src={testimonial.videoSrc}
            type={testimonial.videoType || "video/mp4"}
          />
          Your browser does not support the videos
        </video>

        {!isPlaying && (
          <div className="absolute bottom-0 -inset-x-4 bg-gray-900/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
        )}

        <div className="absolute w-full bottom-0 z-20">
          <div className="flex justify-between items-end p-4">
            <button
              className="group cursor-pointer"
              type="button"
              title="Play video"
              aria-label="Play video"
              onClick={handlePlayVideo}
            >
              {isPlaying ? (
                // PAUSE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" w-14 h-14 fill-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // PLAY
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 fill-gray-50 group-hover:scale-[1.05] duration-100 ease-in drop-shadow-lg animate-opacity"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {!isPlaying && (
              <div className="animate-opacity text-right">
                <p className="text-gray-50 font-medium drop-shadow">
                  {testimonial.name}
                </p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-accent drop-shadow"
                      key={i}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-accent text-accent-content text-base leading-tight font-medium p-4 select-none">
        <p>&quot;{testimonial.text}&quot;</p>
      </div>
    </li>
  );
};

const Testimonials11 = () => {
  return (
    <section className="bg-base-200" id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              212 makers are already shipping faster!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about {config.appName}.
          </p>
        </div>

        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(3)].map((e, i) => (
                <Testimonial key={i} i={i} />
              ))}
            </ul>
          </li>

          <li className="hidden md:grid order-none md:order-first lg:order-none col-span-2 grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* BIG FEATURED TESTIMONIAL — THE LAST ONE IN THE LIST (11th) */}
            <ul className="col-span-2">
              <li>
                <figure className="relative h-full p-6 bg-base-100 rounded-lg">
                  <blockquote className="relative p-4">
                    <p className="text-lg font-medium text-base-content">
                      {list[list.length - 1].text}
                    </p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
                    <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
                      {list[list.length - 1].img ? (
                        <Image
                          className="w-12 h-12 rounded-full object-cover"
                          src={list[list.length - 1].img}
                          alt={`${
                            list[list.length - 1].name
                          }'s testimonial for ${config.appName}`}
                          width={48}
                          height={48}
                        />
                      ) : (
                        <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl font-medium bg-base-300">
                          {list[list.length - 1].name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="text-base font-medium text-base-content">
                        {list[list.length - 1].name}
                      </div>
                      {list[list.length - 1].username && (
                        <div className="mt-1 text-base text-base-content/80">
                          @{list[list.length - 1].username}
                        </div>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(2)].map((e, i) => (
                <Testimonial key={i} i={i + 3} />
              ))}
            </ul>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(2)].map((e, i) => (
                <Testimonial key={i} i={i + 5} />
              ))}
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(3)].map((e, i) => (
                <Testimonial key={i} i={i + 7} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials11;

```

# components/Testimonials1.js

```js
import Image from "next/image";

// A beautiful single testimonial with a user name and and company logo logo
const Testimonial = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-base-100 px-8 py-24 sm:py-32"
      id="testimonials"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.base-300),theme(colors.base-100))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-base-100 shadow-lg ring-1 ring-base-content/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <figure className="mt-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative rounded-xl border border-base-content/5 bg-base-content/5 p-1.5 sm:-rotate-1">
              <Image
                width={320}
                height={320}
                className="rounded-lg max-w-[320px] md:max-w-[280px] lg:max-w-[320px] object-center border-2 border-white/10 shadow-md"
                // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
                // If you're using a static image, add placeholder="blur"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2488&q=80"
                alt="A testimonial from a happy customer"
              />
            </div>

            <div>
              <blockquote className="text-xl font-medium leading-8 text-base-content sm:text-2xl sm:leading-10">
                I got your boilerplate and having the payments setup with Stripe
                + user auth is a blessing. This will save me like a week of work
                for each new side project I spin up. I appreciate that is well
                documented, as well. 100% worth it!
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-start gap-5">
                <div className="text-base">
                  <div className="font-semibold text-base-content mb-0.5">
                    Amanda Lou
                  </div>
                  <div className="text-base-content/60">
                    Indie Maker &amp; Developer
                  </div>
                </div>

                <Image
                  width={150}
                  height={50}
                  className="w-20 md:w-24"
                  // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
                  src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
                  alt="Reddit logo"
                />
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;

```

# components/TestimonialRating.js

```js
const TestimonialRating = () => {
  return (
    <div className="flex -gap-1 items-center mt-auto">
      <svg
        viewBox="0 0 773 1262"
        className="w-8 fill-base-content/40 rotate-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M390 5.7334C310.667 41.7334 272.533 76.6667 257.867 126.8C255.6 134.8 254.933 141.333 254.4 161.6C253.733 185.2 253.867 186.8 256.533 191.067C258 193.467 260.8 196.267 262.667 197.067C275.2 202.8 307.333 193.6 329.333 178C339.467 170.8 355.733 153.867 363.067 142.667C370 132.133 380.4 110.933 385.333 97.3334C391.867 78.8001 398.267 52.0001 398.667 40.8001C398.933 34.8001 400.4 23.7334 401.867 16.0001C405.067 0.133402 405.067 6.88146e-05 403.733 6.88146e-05C403.067 6.88146e-05 396.933 2.66674 390 5.7334Z" />
        <path d="M183.6 52.2666C162.267 92.1333 150.133 124.533 145.2 154.667C142.267 172.267 143.467 213.333 147.333 228.933C152.267 249.733 163.333 270.667 174.667 281.2C179.6 285.733 181.467 286.667 186.133 286.667C197.333 286.667 210.4 273.867 220.8 252.667C228 238 234.533 215.067 233.467 208.667C232.8 205.6 232.933 205.067 234.133 206.667C235.2 208.267 235.467 208 234.8 205.333C234.533 203.467 234.667 196.267 235.2 189.333C237.2 166.4 233.733 141.867 224.533 114.667C219.067 98.1333 207.067 70.9333 197.733 53.5999L190.4 39.7333L183.6 52.2666Z" />
        <path d="M353.333 177.867C324.8 187.467 313.333 192.133 296.933 200.667C251.067 224.933 223.067 255.733 212.667 293.333C209.467 305.333 206.4 333.067 208 336.8C209.333 340 209.6 340.8 209.867 343.333C210.133 347.6 217.2 353.333 223.333 354.4C230.133 355.6 251.867 354 256.4 352C258 351.333 259.333 350.933 259.333 351.2C259.333 351.467 252.533 356.8 244.4 363.067C197.733 398.4 172.667 430.8 162.533 468.667C160.667 475.867 160 482.8 160 498.667C160 510 160.533 521.067 161.067 523.333C161.733 526.267 161.733 526.8 160.667 525.333C159.733 523.867 159.6 525.6 160.133 531.333C163.067 558.667 177.6 561.6 212.667 541.733C225.733 534.4 237.067 525.2 245.067 515.333C252.267 506.4 264 484.267 269.067 470C273.733 456.933 279.733 429.6 278.667 425.6C278.133 423.333 278.4 422.667 279.467 423.467C280.667 424.133 280.8 423.467 280.267 421.067C279.733 419.333 280.267 411.2 281.333 403.2C282.4 395.2 283.6 379.067 284 367.333C284.933 343.6 285.6 337.2 287.2 337.733C289.467 338.267 306 324.933 315.733 314.667C332 297.467 344.133 277.333 356.667 246.667C366.133 223.467 371.467 203.467 367.467 206C366.133 206.667 370.933 187.867 374.667 177.333C376.933 170.8 376.933 170.667 375.733 170.667C375.067 170.667 365.067 173.867 353.333 177.867Z" />
        <path d="M93.6 223.333C85.4667 250.533 83.0667 259.2 80.1333 272.667C74.1333 300.667 72.2667 319.6 73.3333 342C73.8667 352.933 74.2667 363.467 74.2667 365.333C74.4 379.867 80.4 403.467 87.6 418C95.3333 433.333 109.333 450.667 120.533 458.8C128.667 464.667 135.067 465.6 142.133 462C146.933 459.467 153.6 449.2 158.4 437.2C166.267 417.467 168 405.067 167.867 370.667C167.867 353.867 167.333 348 164.933 339.067C156.933 309.333 140.667 279.6 112.267 243.333C93.3333 219.2 94.5333 220.4 93.6 223.333Z" />
        <path d="M24.1333 436.933C24.8 447.067 25.3333 459.333 25.3333 464.267C25.3333 469.067 25.6 472.667 26 472C26.4 471.467 26.8 474.933 26.9333 479.733C27.2 491.733 33.0667 521.2 38.8 538.533C52.9333 582 77.4667 611.867 112.933 628.667C137.6 640.4 149.067 634.133 151.067 607.6C151.6 601.6 152 586.4 151.867 574C151.867 552 151.733 550.933 147.467 538.667C135.333 503.2 110 473.867 65.7333 444.267C54.2667 436.533 24.9333 418.667 23.8667 418.667C23.3333 418.667 23.6 426.933 24.1333 436.933Z" />
        <path d="M261.867 506.267C208.8 562.133 185.067 610.8 188 658C188.4 666 189.067 677.467 189.333 683.333C190.267 701.6 197.067 721.333 204.267 726C213.467 732.133 224 728.933 241.067 715.067C257.2 701.733 268.8 686.667 276.267 668.933C281.733 655.867 286.133 639.2 286.667 628.667C286.933 624.267 287.867 613.467 288.667 604.667C290.267 588.533 289.733 566 287.2 546.667C285.2 530.8 277.6 492 276.533 492C276 492 269.467 498.4 261.867 506.267Z" />
        <path d="M0.666656 607.6C0.666656 607.867 3.06666 612.933 6.13332 618.8C12.4 631.467 14.4 636.4 12.8 635.467C10.8 634.133 10.4 640.667 12 647.067C16.1333 663.2 47.3333 709.467 66.9333 728.133C83.4667 744 104.4 757.733 118 761.6C122.8 762.933 124.533 763.733 122 763.333C119.467 762.933 111.6 761.733 104.667 760.667C89.0667 758.4 57.6 756 41.0667 756H28.6667L35.7333 766.933C45.3333 781.867 45.3333 781.867 43.6 780.8C41.2 779.333 40.1333 786.267 41.8667 792C45.2 803.2 76.6667 842.133 95.7333 858.933C108.4 870 125.333 881.333 136.267 886.267C149.333 892 162.133 896 168.533 896.133L174.667 896.267L168.667 897.333C165.333 898 152.133 900.133 139.333 902.133C126.533 904.133 115.733 906 115.333 906.267C115.067 906.533 115.333 907.2 116 907.733C119.6 910.267 134.4 926.933 132.4 926.267C130 925.467 128.667 927.6 128.667 932.533C128.667 937.6 135.733 946.933 147.467 957.467C194 999.2 231.6 1017.47 272.667 1017.87C281.067 1017.87 290.133 1017.6 292.667 1016.93C295.2 1016.4 288 1019.2 276.667 1023.07C245.2 1034 235.333 1037.73 235.333 1038.67C235.333 1039.07 239.2 1042.4 244 1045.87C251.333 1051.2 257.6 1057.07 252.933 1054.13C251.2 1053.07 248.667 1057.33 248.667 1061.33C248.667 1074.53 313.467 1109.47 354 1118.13C370.667 1121.73 397.6 1121.47 413.2 1117.6C428.267 1113.87 448 1104.53 454.4 1098.27C459.6 1092.93 461.867 1086 459.467 1081.73C458.4 1079.47 458.933 1078.53 463.333 1075.2C466.267 1073.07 468.667 1070.93 468.667 1070.4C468.667 1069.87 465.2 1065.07 460.933 1059.73C439.333 1032.67 411.867 1016 379.867 1010.53C368 1008.53 330.8 1009.73 316.667 1012.53C299.2 1016 297.067 1016 308.8 1012.93C315.6 1011.2 322.4 1008.4 325.067 1006.27C330.133 1002.4 333.2 995.067 331.867 989.867C331.2 987.467 332 986.4 335.2 984.667C337.467 983.6 339.333 982.133 339.333 981.6C339.333 981.067 337.2 976.533 334.667 971.6C312.933 929.333 278.133 904.8 230.533 898.533C215.467 896.533 213.6 896 218.4 894.533C225.2 892.667 229.6 886.8 230.267 878.8C230.4 876.133 231.467 874.4 232.933 873.867C236 872.933 236 873.067 231.333 858.667C216.933 814.8 190.667 787.467 146 770.4C140.533 768.4 138.133 767.067 140.667 767.6C143.2 768.267 151.6 768.667 159.333 768.667C170.133 768.667 174.4 768.133 178.267 766.267C183.467 763.6 188 756.133 186.933 752C186.533 750.4 187.2 749.333 188.8 748.933C191.867 748.133 191.867 746.133 189.333 732.4C181.2 689.733 156.133 656.667 116.8 636.667C95.8667 626.133 64.2667 617.067 28 611.333C16.2667 609.6 5.33332 607.867 3.73332 607.467C1.99999 607.2 0.666656 607.2 0.666656 607.6Z" />
        <path d="M294.933 673.067C254.267 727.467 235.867 774 238.667 815.333C239.067 822.667 239.733 834 240 840.667C240.667 855.733 244 867.867 251.067 879.733C256.933 889.6 262.8 895.467 268.133 896.8C281.733 900.267 313.333 867.733 324.4 839.067C328.933 827.467 333.333 807.733 332.133 804.667C331.733 803.467 332 799.467 332.8 795.6C333.467 791.867 334.133 780 334.133 769.333C334.267 748.667 332.133 731.467 326.533 708.667C322.133 690.4 310.933 654.667 309.733 654.667C309.067 654.667 302.4 662.933 294.933 673.067Z" />
        <path d="M370 776.133C344.8 827.467 336.133 860.4 336.933 901.6C337.2 913.067 337.733 921.733 338.267 920.933C338.933 920 338.933 921.2 338.533 923.467C336 936.533 348.8 970.667 362.667 988.4C372.8 1001.2 381.467 1004.4 390.667 998.667C400 992.933 416.667 966.667 422.533 948.667C425.2 940.267 428.667 922.4 427.867 921.067C427.467 920.533 427.867 913.867 428.667 906.267C432.133 872 421.867 832.533 396.667 783.333C391.067 772.267 385.067 761.333 383.6 758.8L380.8 754.133L370 776.133Z" />
        <path d="M460 850.933C459.733 851.867 458.133 861.333 456.4 872C453.867 888.4 453.467 897.067 453.333 929.333C453.067 970.533 454.267 982.8 460 1003.33C468.8 1034.27 487.2 1060.67 511.733 1076.93C527.733 1087.6 536.933 1086.27 544.4 1072.4C549.2 1063.2 554.267 1045.07 554.8 1034.67C554.933 1030.67 555.467 1020.13 556 1011.33C557.2 993.333 555.867 982.933 550.533 966.133C541.733 938.4 524.133 912 493.333 880.133C473.733 859.867 460.8 848.533 460 850.933Z" />
        <path d="M574.133 973.6C581.067 990.8 583.333 997.467 582 996.667C581.2 996.133 580.667 998.267 580.667 1002.27C580.667 1012.67 596 1044 614.267 1070.8C642.933 1113.07 684.8 1138.67 725.2 1138.67C741.733 1138.67 747.333 1135.07 749.2 1123.73C749.333 1122.27 750.267 1120.67 751.2 1120.13C752.533 1119.2 752.667 1116.53 751.467 1107.07C742.667 1034.4 698 995.6 596.267 972.133C583.333 969.067 572.4 966.667 572 966.667C571.6 966.667 572.667 969.867 574.133 973.6Z" />
        <path d="M511.6 1090.8C485.867 1094.13 453.6 1107.33 422.667 1127.33C408.267 1136.53 380.8 1156.4 380.667 1157.47C380.667 1158 384.4 1159.6 389.067 1161.33C397.867 1164.53 401.333 1166.67 397.733 1166.67C396.4 1166.67 395.2 1168.27 394.667 1170.67C392.8 1179.33 400.667 1184.67 424.8 1191.2C501.067 1211.87 555.733 1203.6 594.133 1165.33C604.133 1155.47 607.6 1147.87 604.933 1142.13C603.733 1139.33 604.133 1138 608.8 1131.87C611.6 1128 614 1124.53 614 1124.13C614 1123.73 610.667 1120.93 606.667 1118C576.133 1095.73 544.133 1086.53 511.6 1090.8Z" />
        <path d="M674.667 1147.47C637.867 1153.6 596.4 1177.73 550 1219.6L542.8 1226.27L552.667 1229.33C558.133 1231.07 561.6 1232.67 560.4 1232.93C557.333 1233.73 555.867 1239.33 557.733 1243.33C559.867 1248 567.733 1251.47 582.8 1254.53C658.533 1269.87 711.867 1259.47 749.467 1222.13C758.667 1212.93 764.133 1204.8 764.667 1199.33C765.333 1193.73 764.667 1190.53 763.067 1191.47C761.467 1192.53 761.467 1192.4 768.267 1181.73C770.667 1177.87 772.667 1174.27 772.667 1173.47C772.667 1171.47 766.133 1167.33 753.067 1160.8C725.467 1146.93 701.6 1142.8 674.667 1147.47Z" />
      </svg>
      <div>
        <p className="text-base-content/80 text-sm text-center">
          1000+ happy users
        </p>
        <div className="flex flex-row justify-center gap-0 pt-1">
          {[...Array(5)].map((e, i) => (
            <span key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>
      <svg
        className="w-8 fill-base-content/40 -rotate-12"
        viewBox="0 0 773 1262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M369.133 2.26663C371.667 12.1333 375.667 39.7333 374.6 39.0666C371.267 37.0666 378.067 67.8666 386.467 93.2C396.067 121.733 408.867 144.267 425.667 161.867C446.067 183.333 471.4 196.533 495.267 198.267C514.467 199.733 518.467 195.333 519.8 171.867C523.933 100.4 482.2 49.4666 384.2 5.99997C376.733 2.66663 370.2 -3.47677e-05 369.667 -3.47677e-05C369 -3.47677e-05 368.867 1.06663 369.133 2.26663Z" />
        <path d="M575.933 53.4666C558.067 86.9333 545.133 121.6 540.2 148.8C536.2 171.2 537.133 206.267 542.2 226C548.467 250.4 563.667 275.733 576.867 283.867C579.533 285.467 583.533 286.667 586.867 286.667C596.067 286.667 605.267 276.667 616.333 254.8C622.467 242.667 628.867 220 627.8 214.267C627.267 211.733 627.533 210.8 628.6 211.467C629.533 212.133 629.667 211.867 629.133 210.8C628.467 209.867 628.867 203.2 629.667 196C634.333 159.333 621.267 110.533 591.8 55.4666L583.4 39.7333L575.933 53.4666Z" />
        <path d="M397.667 171.333C397.667 172.133 402.2 188.133 406.6 203.2C407.133 204.933 406.867 205.333 405.667 204.667C404.333 203.867 404.067 205.2 404.6 210.8C406.2 226.133 426.067 272.133 440.2 293.467C443.933 299.067 451.267 308.267 456.6 314C466.733 324.933 487 341.2 487 338.533C487 337.6 487.267 337.2 487.667 337.6C488.467 338.267 491.533 396.133 491.4 406.667C491.267 411.733 491.667 413.2 492.333 411.333C493.133 409.6 493.267 410.933 492.733 414.667C491.933 422 497.533 450.4 503.133 467.2C508.333 482.8 520.067 505.467 527.933 515.333C535.933 525.2 547.267 534.4 560.333 541.733C581.667 553.733 594.467 557.067 602.867 552.667C608.6 549.733 612.867 540.4 611.933 532.933C611.533 529.867 611.667 528.267 612.2 529.2C612.867 530.133 613.267 528.133 613.4 524.4C613.4 520.933 613.533 509.867 613.667 500C614.067 476.8 610.067 459.2 600.067 439.6C588.6 416.933 561.267 387.2 530.733 364.133C513.933 351.467 507.667 346.267 515.4 351.2C519 353.6 541.667 355.733 549.667 354.4C555.8 353.333 562.867 347.6 563.133 343.333C563.533 339.6 563.667 338.933 564.733 337.867C566.333 336.267 565.8 318.4 563.667 306.533C558.6 277.067 546.733 255.467 523.533 233.333C499.4 210.267 457.533 188.4 411.133 174.667C405.8 173.067 400.467 171.467 399.533 171.067C398.467 170.667 397.667 170.8 397.667 171.333Z" />
        <path d="M671 230.933C651.8 255.733 647.4 261.6 639.267 274C614.333 312.133 603.533 345.067 604.6 380.8C604.733 389.733 605.533 396.8 606.067 396.4C606.6 396 606.733 397.333 606.2 399.2C604.2 407.333 612.867 437.067 621.267 451.067C626.867 460.267 632.2 464 639.933 464C647.4 464 658.733 455.333 670.333 441.067C680.333 428.4 686.733 416.8 691.667 402.267C698.333 382.4 699.667 368.933 699.533 329.333C699.4 305.867 698.867 299.467 695.933 284.133C692.467 266.267 680.333 221.333 679 221.467C678.6 221.467 675 225.733 671 230.933Z" />
        <path d="M734.467 427.333C664.334 469.6 630.334 508 622.2 554.667C620.067 567.333 620.2 597.2 622.467 603.333C623.134 604.933 623 605.467 622.067 604.933C619.934 603.6 623.8 621.867 626.6 626.667C632.334 636.533 643.4 636.8 662.334 627.467C692.467 612.533 714.467 588.133 728.6 553.6C737.267 532.4 746.334 494.267 744.867 485.467C744.467 482.8 744.6 481.333 745.267 482.267C745.934 483.067 746.334 481.2 746.334 477.6C746.467 474.133 747.134 462.933 748.067 452.667C749 442.4 749.934 430.533 750.334 426.267C750.734 422.133 750.467 418.667 749.934 418.667C749.4 418.667 742.467 422.533 734.467 427.333Z" />
        <path d="M495.267 498C486.733 535.2 484.067 559.733 484.6 594.267C484.867 609.733 485.267 622.267 485.667 622C486.067 621.733 486.467 624.933 486.467 629.067C486.733 638.4 492.067 658.933 497.533 670.933C507.667 693.467 528.6 716.133 548.333 726.133C560.333 732.133 569.667 728.933 575.533 716.933C582.733 702.133 585 685.6 584.867 648.667C584.867 631.2 584.333 627.067 581.267 615.733C571.933 581.733 549.267 545.733 513.8 509.067L496.733 491.467L495.267 498Z" />
        <path d="M765.667 608.133C734.734 612.933 721.134 615.467 706.334 619.333C641.8 635.6 604.867 665.467 589 714.267C585.534 724.8 581.4 746.533 582.6 748.267C582.867 748.933 584.467 749.333 586.067 749.467C587.667 749.467 588.2 749.867 587.4 750.267C585.134 751.067 585.267 755.333 587.667 759.867C591 766.4 597.667 768.667 614.334 768.667C622.467 768.667 630.867 768.133 633 767.6C635.267 766.933 631.267 768.8 624.2 771.733C606.067 779.067 590.867 788.533 578.734 799.867C561.667 815.867 549.8 834.933 542.467 858.4C538.2 871.867 538.2 873.067 542.067 874.667C543.667 875.333 544.334 875.867 543.534 875.867C542.467 876 542.334 877.467 542.867 880.4C544.867 889.2 548.334 893.067 555.4 894.667C559.534 895.6 559.534 895.6 556.334 896.267C554.467 896.667 546.734 898 539 899.2C496.067 906 465.267 926.667 443.8 963.067C440.467 968.667 436.867 975.333 435.8 977.867C433.934 982.267 433.934 982.267 438.867 985.067C441.534 986.667 443 988 442.334 988C440.334 988 440.067 993.2 441.8 998.4C443.667 1004 451.934 1010.13 459.134 1011.33C462.067 1011.87 464.334 1012.53 463.934 1012.8C463.667 1013.07 456.6 1012.4 448.2 1011.2C427.667 1008.27 395.534 1009.2 382.334 1012.93C353.534 1021.2 330.2 1037.47 309.667 1063.6L304.2 1070.53L309.534 1074.8C314.067 1078.4 314.734 1079.47 313.534 1081.6C311.267 1086 313.4 1092.93 318.6 1098.27C325 1104.53 344.734 1113.87 359.8 1117.6C375.4 1121.47 402.334 1121.73 419 1118.13C459 1109.6 524.334 1074.4 524.334 1061.47C524.334 1057.6 521.934 1053.07 520.2 1054C519.534 1054.53 519 1054.53 519 1054.27C519 1053.87 523.534 1050.4 529 1046.4C534.467 1042.53 539 1038.93 539 1038.53C539 1038.13 536.2 1036.8 532.734 1035.6C486.2 1019.6 476.467 1016.13 481 1016.93C488.867 1018.53 513.134 1018 522.334 1016.13C550.067 1010.4 580.6 995.067 607.134 973.2C639.267 946.667 649 934.133 642.467 927.6C640.734 926 641.667 924.4 649.267 916.133C654.067 910.8 657.8 906.4 657.534 906.133C657 905.867 643.267 903.467 609.667 898.133C600.334 896.533 599.4 896.267 604.467 896.133C610.867 896 623.667 892 636.6 886.267C655.134 878 679 859.333 696.734 839.333C710.6 823.733 726.734 802.133 729.934 794.933C732.734 788.667 732.734 781.733 729.934 782.4C727.8 782.8 728.6 781.2 737.667 766.933L744.334 756.667L734.734 756.267C722.6 755.733 686.467 758.133 669.667 760.667C645.8 764.133 645.8 764.133 654.2 761.867C666.6 758.4 686.734 745.867 702.867 731.2C728.6 708 765.134 650.533 761.934 638.4C761.667 637.067 760.867 636.4 760.2 636.8C758.6 637.733 760.6 632.8 767 620C770.067 614 772.334 608.667 772.067 608.133C771.8 607.6 769 607.6 765.667 608.133ZM641.267 766.133C640.867 766.533 639.667 766.667 638.734 766.267C637.667 765.867 638.067 765.467 639.534 765.467C641 765.333 641.8 765.733 641.267 766.133ZM469.267 1014.13C468.867 1014.53 467.667 1014.67 466.734 1014.27C465.667 1013.87 466.067 1013.47 467.534 1013.47C469 1013.33 469.8 1013.73 469.267 1014.13ZM474.6 1015.47C474.2 1015.87 473 1016 472.067 1015.6C471 1015.2 471.4 1014.8 472.867 1014.8C474.334 1014.67 475.134 1015.07 474.6 1015.47Z" />
        <path d="M457.933 670.4C451.8 689.067 445.667 712.933 442.2 731.333C439.8 743.867 438.467 800.533 440.6 799.2C441.133 798.8 441.267 800.267 440.867 802.533C439.8 807.867 443.667 826.4 448.6 839.067C458.6 865.067 488.2 897.333 501.933 897.333C509.533 897.333 518.467 888 525.533 872.667C532.6 857.733 534.467 842.8 534.2 804.667C534.067 788.667 533.533 782.533 531.133 773.6C522.333 740 503.667 704.933 474.733 667.6C469.533 660.8 464.867 654.933 464.467 654.4C463.933 653.867 461 661.067 457.933 670.4Z" />
        <path d="M387.133 764.133C370.6 793.333 356.467 826.267 350.333 849.733C345.133 869.867 344.067 880.933 344.867 906.533C345.8 938.133 350.067 954.133 363 975.467C381.133 1005.47 394.067 1008.93 410.333 988.4C422.867 972.267 433.133 946.667 434.467 928C434.733 923.2 435.533 913.2 436.2 905.733C439.667 867.333 428.733 825.733 400.733 770.133L392.733 754.133L387.133 764.133Z" />
        <path d="M291.533 868.933C253 906.8 233.533 934.533 223 966.533C218.733 979.867 215.667 1001.33 217 1010.53C217.4 1013.87 218.067 1022.67 218.333 1030C219.267 1052.4 227.133 1076.27 235.533 1081.6C245.8 1088 261.667 1080.13 281.8 1058.93C294.333 1045.87 302.6 1032.4 309.133 1014.8C314.067 1001.6 318.067 983.6 317 979.867C316.467 978.4 316.733 977.333 317.667 977.333C318.733 977.333 319 976.267 318.6 974.533C318.2 973.067 318.733 964.267 319.933 954.933C321.267 943.067 321.667 932 321.133 918C320.2 892.533 314.733 849.333 312.467 849.333C312.067 849.333 302.6 858.133 291.533 868.933Z" />
        <path d="M180.2 971.333C99 989.733 54.8667 1017.2 34.0667 1062.4C26.2 1079.33 19.4 1112.67 22.3333 1119.6C23 1120.93 23.6667 1123.47 23.9333 1125.2C25.6667 1135.2 31.8 1138.67 47.8 1138.67C89.9333 1138.67 131.133 1112.53 161.667 1066.27C176.333 1044.27 191.267 1013.6 192.067 1004.27C192.467 998.933 192.333 997.2 191.133 997.867C189.667 998.8 190.733 995.867 198.2 977.467C201.933 968.4 202.333 966.667 200.733 966.8C200.067 966.8 190.867 968.933 180.2 971.333Z" />
        <path d="M227.4 1091.2C206.733 1095.2 185.133 1104.67 167.933 1117.33L159 1124L164.333 1131.2C169.267 1137.73 169.667 1138.67 168.2 1141.87C165.4 1148 168.733 1155.33 178.867 1165.33C217.267 1203.6 271.933 1211.87 348.2 1191.2C372.2 1184.67 380.2 1179.33 378.333 1170.8C377.933 1168.67 376.467 1166.67 375.267 1166.4C374.067 1166.13 377.667 1164 383.4 1161.73L393.933 1157.73L377.133 1145.47C336.6 1115.73 303.8 1099.2 273.133 1092.8C258.067 1089.73 238.867 1089.07 227.4 1091.2Z" />
        <path d="M58.8667 1147.47C53.2667 1148.4 44.3333 1150.8 38.8667 1152.8C28.7333 1156.4 8.73332 1166.27 3.26665 1170.53L0.0666504 1172.93L5.53332 1181.73C8.46665 1186.67 10.3333 1190.67 9.66665 1190.67C7.26665 1190.67 8.19998 1201.33 11.1333 1206.8C12.6 1209.73 18.2 1216.53 23.4 1221.87C60.6 1259.47 114.333 1270 190.2 1254.53C205.267 1251.47 213.133 1248 215.267 1243.33C217.133 1239.33 215.667 1233.73 212.6 1233.07C211.4 1232.67 215 1231.07 220.733 1229.2L231.133 1226L218.733 1215.2C170.467 1173.47 135.8 1153.87 98.4667 1147.33C84.3333 1144.93 72.6 1144.93 58.8667 1147.47Z" />
      </svg>
    </div>
  );
};

export default TestimonialRating;

```

# components/Testimonial1Small.js

```js
import Image from "next/image";

// A one or two sentences testimonial from a customer.
// Highlight the outcome for your customer (how did your product changed her/his life?) or the pain it's removing — Use <span className="bg-warning/25 px-1.5"> to highlight a part of the sentence
const Testimonial1Small = () => {
  return (
    <section className="bg-base-100">
      <div className="space-y-6 md:space-y-8 max-w-lg mx-auto px-8 py-16 md:py-32 ">
        <div className="rating !flex justify-center">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-warning"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <div className="text-base leading-relaxed space-y-2 max-w-md mx-auto text-center">
          <p>
            <span className="bg-warning/25 px-1.5">
              I don&apos;t want to pay Stripe $2 for every invoice.
            </span>{" "}
            I don&apos;t want to spend 10 minutes manually crafting every
            invoice either.
          </p>
          <p>
            Zenvoice solved this problem once and for all. The app is simple,
            but it nails the job perfectly.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-4">
          <Image
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={`XYZ feedback for ZenVoice`}
            width={48}
            height={48}
          />
          <div>
            <p className="font-semibold">Someone Nice</p>
            <p className="text-base-content/80 text-sm">23.1K followers on 𝕏</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1Small;

```

# components/Problem.js

```js
const Arrow = ({ extraStyle }) => {
  return (
    <svg
      className={`shrink-0 w-12 fill-neutral-content opacity-70 ${extraStyle}`}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
        />
      </g>
    </svg>
  );
};
const Step = ({ emoji, text }) => {
  return (
    <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-bold">{text}</h3>
    </div>
  );
};

// Problem Agitation: A crucial, yet overlooked, component for a landing page that sells.
// It goes under your Hero section, and above your Features section.
// Your Hero section makes a promise to the customer: "Our product will help you achieve XYZ".
// Your Problem section explains what happens to the customer if its problem isn't solved.
// The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.
// For instance:
// - Hero: "ShipFast helps developers launch startups fast"
// - Problem Agitation: "Developers spend too much time adding features, get overwhelmed, and quit." (not about ShipFast at all)
// - Features: "ShipFast has user auth, Stripe, emails all set up for you"
const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          97% of aspiring authors never finish their book
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
          Writer&apos;s block, self-doubt, lack of guidance... There&apos;s so much to overcome alone
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
          <Step emoji="✍️" text="Start writing enthusiastically" />

          <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />

          <Step emoji="😮‍💨" text="Receive vague, unhelpful feedback" />

          <Arrow extraStyle="md:-scale-x-100 md:-rotate-90" />

          <Step emoji="😔" text="Lose confidence in your story" />
        </div>
      </div>
    </section>
  );
};

export default Problem;

```

# components/Pricing.js

```js
import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Unleash Your Creativity with AI-Powered Writing Support
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-primary-content font-semibold border-0 bg-primary`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout mode="subscription"
                  priceId={plan.priceId} />

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    Instant Feedback. Month after Month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

```

# components/Modal.js

```js
"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// A simple modal component which can be shown/hidden with a boolean and a function
// Because of the setIsModalOpen function, you can't use it in a server component.
const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-focus bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full overflow-hidden items-start md:items-center justify-center p-2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-3xl h-full overflow-visible transform text-left align-middle shadow-xl transition-all rounded-xl bg-base-100 p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h2" className="font-semibold">
                    I&apos;m a modal
                  </Dialog.Title>
                  <button
                    className="btn btn-square btn-ghost btn-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>

                <section>And here is my content</section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

```

# components/LayoutClient.js

```js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Crisp } from "crisp-sdk-web";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";

// Crisp customer chat support:
// This component is separated from ClientLayout because it needs to be wrapped with <SessionProvider> to use useSession() hook
const CrispChat = () => {
  const pathname = usePathname();
  const { data } = useSession();

  useEffect(() => {
    if (config?.crisp?.id) {
      // Set up Crisp
      Crisp.configure(config.crisp.id);

      // (Optional) If onlyShowOnRoutes array is not empty in config.js file, Crisp will be hidden on the routes in the array.
      // Use <AppButtonSupport> instead to show it (user clicks on the button to show Crisp—it cleans the UI)
      if (
        config.crisp.onlyShowOnRoutes &&
        !config.crisp.onlyShowOnRoutes?.includes(pathname)
      ) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }
    }
  }, [pathname]);

  // Add User Unique ID to Crisp to easily identify users when reaching support (optional)
  useEffect(() => {
    if (data?.user && config?.crisp?.id) {
      Crisp.session.setData({ userId: data.user?.id });
    }
  }, [data]);

  return null;
};

// All the client wrappers are here (they can't be in server components)
// 1. SessionProvider: Allow the useSession from next-auth (find out if user is auth or not)
// 2. NextTopLoader: Show a progress bar at the top when navigating between pages
// 3. Toaster: Show Success/Error messages anywhere from the app with toast()
// 4. Tooltip: Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content=""
// 5. CrispChat: Set Crisp customer chat support (see above)
const ClientLayout = ({ children }) => {
  return (
    <>
      <SessionProvider>
        {/* Show a progress bar at the top when navigating between pages */}
        <NextTopLoader color={config.colors.main} showSpinner={false} />

        {/* Content inside app/page.js files  */}
        {children}

        {/* Show Success/Error messages anywhere from the app with toast() */}
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />

        {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
        <Tooltip
          id="tooltip"
          className="z-[60] !opacity-100 max-w-sm shadow-lg"
        />

        {/* Set Crisp customer chat support */}
        <CrispChat />
      </SessionProvider>
    </>
  );
};

export default ClientLayout;

```

# components/Hero.js

```js
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import heroImage from "@/app/hero_image.png";
import ButtonCheckout from "./ButtonCheckout";

const Hero = () => {

  const defaultPriceId = config.stripe.plans[1]?.priceId;

  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        {/* <a
          href="https://www.producthunt.com/posts/shipfast-2?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-shipfast&#0045;2"
          target="_blank"
          className=" -mb-4 md:-mb-6 group"
          title="Product Hunt link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 37"
            className="w-32 md:w-36 fill-base-content/80 group-hover:fill-base-content"
          >
            <path d="M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891Zm5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497Zm-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341Zm4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164Zm6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571Zm-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763Zm7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777Zm-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313Zm-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21Zm-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26Zm4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632Zm4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38Zm-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61Zm3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71Zm-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684Zm.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996ZM17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891ZM11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497Zm7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341ZM14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164Zm-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571Zm3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763Zm-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777Zm4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313Zm4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21Zm4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26ZM.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632ZM.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38Zm4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61Zm-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71Zm4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684ZM4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0Zm47.017 35.234c2.394 0 4.302-1.476 4.302-3.762 0-1.71-1.062-2.7-2.16-3.15.864-.378 1.728-1.26 1.728-2.7 0-2.142-1.818-3.366-3.834-3.366-1.656 0-2.952.81-3.636 1.89a.285.285 0 0 0 .072.396l1.26 1.224c.144.144.306.162.414-.036.324-.576.9-.954 1.602-.954.81 0 1.44.54 1.44 1.332 0 .612-.36 1.296-1.386 1.296h-.486c-.18 0-.306.09-.306.288v1.638c0 .18.126.288.306.288h.504c1.26 0 1.692.846 1.692 1.53 0 .81-.576 1.566-1.692 1.566-.828 0-1.404-.45-1.89-1.026-.144-.144-.288-.144-.396-.036l-1.35 1.242a.258.258 0 0 0-.054.378c.684 1.08 1.998 1.962 3.87 1.962ZM60.208 35c.162 0 .288-.108.288-.27v-4.248c0-1.314.684-2.034 1.818-2.034.27 0 .468.036.648.09.252.054.378 0 .378-.234v-1.746c0-.162-.036-.27-.162-.36-.144-.108-.378-.234-.81-.234-1.026 0-1.584.72-1.872 1.674l-.09-1.17c0-.216-.108-.288-.27-.288h-2.124c-.162 0-.27.108-.27.27v8.28c0 .162.108.27.27.27h2.196Zm8.1.216c1.26 0 2.16-.504 2.754-1.35l.036.864c0 .162.126.27.288.27h1.98c.162 0 .306-.108.306-.27V22.4c0-.162-.126-.27-.288-.27H71.17c-.162 0-.27.108-.27.27v4.662c-.594-.702-1.44-1.098-2.592-1.098-2.448 0-4.14 2.016-4.14 4.626 0 2.628 1.692 4.626 4.14 4.626Zm.594-2.502c-1.17 0-2.052-.828-2.052-2.124 0-1.278.882-2.124 2.052-2.124 1.206 0 2.034.846 2.034 2.106 0 1.296-.828 2.142-2.034 2.142ZM20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15h1.28Zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68V9.4Zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15h1.22Zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17Zm5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03Zm6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6Zm4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17ZM64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15h1.23Zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03Zm5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59Zm-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83h-2.06Zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18h1.19Z"></path>
          </svg>
        </a> */}

        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight md:-mb-4">
          Consistent feedback in minutes, not months!
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        Your always-available AI writing circle. Get instant, diverse feedback on your stories without the inconsistency of traditional groups. Elevate your writing anytime.
        </p>
        <div className="w-full sm:w-auto">
          <ButtonCheckout mode = "subscription" priceId={defaultPriceId} 
          style="gradient" className="btn-wide">
            Enhance Your Writing
          </ButtonCheckout>
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src={heroImage}
          alt="Product Demo"
          className="w-full rounded-xl"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;

```

# components/Header.js

```js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#withwithout",
    label: "Benefits",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },

];

const cta = <ButtonSignin extraStyle="btn-primary" />;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200">
      <nav
        className="container flex items-center justify-between px-8 py-4 mx-auto"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0 "
            href="/"
            title={`${config.appName} hompage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-lg">{config.appName}</span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link link-hover"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.appName} hompage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-col">{cta}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

```

# components/Footer.js

```js
import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <Link href="/#pricing" className="link link-hover">
                  Pricing
                </Link>
                {/* <Link href="/blog" className="link link-hover">
                  Blog
                </Link>
                <a href="/#" target="_blank" className="link link-hover">
                  Affiliates
                </a> */}
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

# components/FeaturesListicle.js

```js
"use client";

import { useState, useEffect, useRef } from "react";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature
const features = [
  {
    name: "Emails",
    description: (
      <>
        <ul className="space-y-1">
          {[
            "Send transactional emails",
            "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
            "Webhook to receive & forward emails",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 2 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    name: "Payments",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Create checkout sessions",
            "Handle webhooks to update user's account",
            "Tips to setup your account & reduce chargebacks",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 2 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    name: "Login",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Magic links setup",
            "Login with Google walkthrough",
            "Save user data in MongoDB",
            "Private/protected pages & API calls",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 3 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: "Database",
    description: (
      <>
        <ul className="space-y-2">
          {["Mongoose schema", "Mongoose plugins to make your life easier"].map(
            (item) => (
              <li key={item} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0 opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>

                {item}
              </li>
            )
          )}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 2 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    name: "SEO",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "All meta tags to rank on Google",
            "OpenGraph tags to share on social media",
            "Automated sitemap generation to fasten Google indexing",
            "Structured data markup for Rich Snippets",
            "SEO-optimized UI components",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 6 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    name: "Style",
    description: (
      <>
        <ul className="space-y-2">
          {[
            "Components, animations & sections (like the pricing page below)",
            "20+ themes with daisyUI",
            "Automatic dark mode",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>

              {item}
            </li>
          ))}
          <li className="flex items-center gap-3 text-accent font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Time saved: 5 hours
          </li>
        </ul>
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const FeaturesListicle = () => {
  const featuresEndRef = useRef(null);
  const [featureSelected, setFeatureSelected] = useState(features[0].name);
  const [hasClicked, setHasClicked] = useState(false);

  // (Optional) Autoscroll the list of features so user know it's interactive.
  // Stop scrolling when user scroll after the featuresEndRef element (end of section)
  // emove useEffect is not needed.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <p className="text-accent font-medium text-sm font-mono mb-3">
            const launch_time = &quot;Today&quot;;
          </p>
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
            Supercharge your app instantly, launch faster, make $
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            Login users, process payments and send emails at lightspeed. Spend
            your time building your startup, not integrating APIs. ShipFast
            provides you with the boilerplate code you need to launch, FAST.
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/30 group-hover:text-base-content/50"
                }`}
              >
                {feature.svg}
              </span>
              <span
                className={`font-semibold text-sm ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/50"
                }`}
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div className="bg-base-200">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)["name"]}
              </h3>

              {features.find((f) => f.name === featureSelected)["description"]}
            </div>
          </div>
        </div>
      </div>
      {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;

```

# components/FeaturesGrid.js

```js
/* eslint-disable @next/next/no-img-element */
import React from "react";

const features = [
  {
    title: "Collect user feedback",
    description:
      "Use your Insighto's board to let users submit features they want.",
    styles: "bg-primary text-primary-content",
    demo: (
      <div className="overflow-hidden h-full flex items-stretch">
        <div className="w-full translate-x-12 bg-base-200 rounded-t-box h-full p-6">
          <p className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
            Suggest a feature
          </p>
          <div
            className="relative textarea py-4 h-full mr-12 bg-base-200 group-hover:bg-base-100 group-hover:border-base-content/10 text-base-content"
            placeholder="Feature on/off option for different pages"
          >
            <div className="absolute left-4 top-4 group-hover:hidden flex items-center ">
              <span>Notifica</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              Notifications should be visible only on certain pages.
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-1000 flex items-center gap-0.5">
              <span>Terms & privacy pages don&apos;t need them</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            <button className="btn shadow-lg btn-primary absolute right-4 bottom-6 opacity-0 group-hover:opacity-100 duration-1000">
              Submit
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Prioritize features",
    description: "Users upvote features they want. You know what to ship next.",
    styles: "md:col-span-2 bg-base-300 text-base-content",
    demo: (
      <div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
        {[
          {
            text: "Add LemonSqueezy integration to the boilerplate",
            secondaryText: "Yes, ship this! ✅",
            votes: 48,
            transition: "group-hover:-mt-36 group-hover:md:-mt-28 duration-500",
          },
          {
            text: "A new pricing table for metered billing",
            secondaryText: "Maybe ship this 🤔",
            votes: 12,
          },
          {
            text: "A new UI library for the dashboard",
            secondaryText: "But don't ship that ❌",
            votes: 1,
          },
        ].map((feature, i) => (
          <div
            className={`p-4 bg-base-100 text-base-content rounded-box flex justify-between mb-2 gap-4 ${feature?.transition}`}
            key={i}
          >
            <div>
              <p className="font-semibold mb-1">{feature.text}</p>
              <p className="text-base-content-secondary">
                {feature.secondaryText}
              </p>
            </div>
            <button
              className={`px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent bg-primary text-primary-content`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-5 h-5 ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0`}
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              {feature.votes}
            </button>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Your brand, your board",
    description: "Customize your Insighto board with 7 themes.",
    styles: "md:col-span-2 bg-base-100 text-base-content",
    demo: (
      <div className="flex left-0 w-full h-full pt-0 lg:pt-8 overflow-hidden -mt-4">
        <div className="-rotate-[8deg] flex min-w-max overflow-x-visible h-full lg:pt-4">
          {[
            {
              buttonStyles: "bg-primary text-primary-content",
              css: "-ml-1 rotate-[6deg] w-72 h-72 z-30 bg-base-200 text-base-content rounded-2xl group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 p-4",
            },
            {
              buttonStyles: "bg-secondary text-secondary-content",
              css: "rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -mr-20 -ml-20 z-20 rounded-xl p-4",
            },
            {
              buttonStyles: "bg-accent text-accent-content",
              css: "rotate-[6deg] bg-base-200 text-base-content z-10 w-72 h-72 rounded-xl p-4",
            },
            {
              buttonStyles: "bg-neutral text-neutral-content",
              css: "rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-20 rounded-xl p-4",
            },
            {
              buttonStyles: "bg-base-100 text-base-content",
              css: "rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-10 -z-10 rounded-xl p-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300",
            },
          ].map((theme, i) => (
            <div className={theme.css} key={i}>
              <div className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
                Trending feedback
              </div>
              <div className="space-y-2">
                <div className="p-4 bg-base-100 rounded-box flex justify-between">
                  <div>
                    <p className="font-semibold mb-1">Clickable cards</p>
                    <p className="opacity-80">Make cards more accessible</p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent ${theme.buttonStyles}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-5 h-5 ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0`}
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    8
                  </button>
                </div>
                <div className="p-4 bg-base-100 rounded-box flex justify-between ">
                  <div>
                    <p className="font-semibold mb-1">Bigger images</p>
                    <p className="opacity-80">Make cards more accessible</p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-box group text-center text-lg duration-150 border border-transparent ${theme.buttonStyles}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-5 h-5 ease-in-out duration-150 -translate-y-0.5 group-hover:translate-y-0`}
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    5
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Discover new ideas",
    description: "Users can chat and discuss features.",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="text-neutral-content px-6 space-y-4">
        {[
          {
            id: 1,
            text: "Can we have a feature to add a custom domain to IndiePage?",
            userImg:
              "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
            userName: "Marc Lou",
            createdAt: "2024-09-01T00:00:00Z",
          },
          {
            id: 2,
            text: "I'd definitelly pay for that 🤩",
            userImg:
              "https://pbs.twimg.com/profile_images/1778434561556320256/knBJT1OR_400x400.jpg",
            userName: "Dan K.",
            createdAt: "2024-09-02T00:00:00Z",
            transition:
              "opacity-0 group-hover:opacity-100 duration-500 translate-x-1/4 group-hover:translate-x-0",
          },
        ]?.map((reply) => (
          <div
            key={reply.id}
            className={`px-6 py-4 bg-neutral-content text-neutral rounded-box ${reply?.transition}`}
          >
            <div className="mb-2 whitespace-pre-wrap">{reply.text}</div>
            <div className="text-neutral/80 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-7 rounded-full">
                    <img src={reply.userImg} alt={reply.userName} />
                  </div>
                </div>
                <div className=""> {reply.userName} </div>
              </div>
              •
              <div>
                {new Date(reply.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];
const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-20 lg:py-32">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-4xl md:text-6xl tracking-[-0.01em]">
          Ship features <br /> users{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-300">
            really want
          </span>
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.demo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

```

# components/FeaturesAccordion.js

```js
"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Emails",
    description:
      "Send transactional emails, setup your DNS to avoid spam folder (DKIM, DMARC, SPF in subdomain), and listen to webhook to receive & forward emails",
    type: "video",
    path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    format: "video/webm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Payments",
    description:
      "Create checkout sessions, handle webhooks to update user's account (subscriptions, one-time payments...) and tips to setup your account & reduce chargebacks",
    type: "image",
    path: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    alt: "A computer",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Authentication",
    description:
      "Magic links setup, login with Google walkthrough, save user in MongoDB/Supabase, private/protected pages & API calls",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Style",
    description:
      "Components, animations & sections (like this features section), 20+ themes with daisyUI, automatic dark mode",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
          All you need to ship your startup fast
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            and get profitable
          </span>
        </h2>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;

```

# components/FAQ.js

```js
"use client";

import { useRef, useState } from "react";

// <FAQ> component is a list of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What do I get exactly?",
    answer: <div className="space-y-2 leading-relaxed">You will receive an AI-powered writing group that provides feedback on your writing. Multiple AI personas, each offering a unique perspective, will help you grow as a writer.</div>,
  },
  {
    question: "How does the AI writing group work?",
    answer: (
      <p>
       Our AI Writing Group is like having a team of expert writers at your fingertips, each with their own unique strengths and perspectives. Imagine receiving personalized feedback from multiple angles, all tailored to help you become a better writer.
      </p>
    ),
  },
  {
    question: "Will the AI write for me?",
    answer: (
      <div className="space-y-2 leading-relaxed">No, the AI will not write for you. This tool is designed to be a collaborative partner, providing feedback and suggesting possible directions for your story. It can guide you with new ideas and perspectives to enhance your writing.</div>
    ),
  },
  {
    question: "I have another question?",
    answer: (
      <div className="space-y-2 leading-relaxed">Shoot me an email at temunix@wgroup.jhadruk.com </div>
    ),
  },
  
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

```

# components/CTA.js

```js
import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Boost your app, launch, earn
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Don&apos;t waste time integrating APIs or designing a pricing
            section...
          </p>

          <button className="btn btn-primary btn-wide">
            Get {config.appName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

```

# components/ButtonSupport.js

```js
"use client";

import { Crisp } from "crisp-sdk-web";
import config from "@/config";

// Use this button if chat is hidden on some routes. config.js has onlyShowOnRoutes set to ["/"] so it will be hidden on all routes except the home page.
// If Crisp is not enable, it will open the support email in the default email client.
const ButtonSupport = () => {
  const handleClick = () => {
    if (config.crisp?.id) {
      Crisp.chat.show();
      Crisp.chat.open();
    } else if (config.mailgun?.supportEmail) {
      // open default email client in new window with "need help with ${config.appName}" as subject
      window.open(
        `mailto:${config.mailgun.supportEmail}?subject=Need help with ${config.appName}`,
        "_blank"
      );
    }
  };

  return (
    <button
      className="btn btn-sm"
      onClick={handleClick}
      data-tooltip-id="tooltip"
      data-tooltip-content="Talk to support"
      title="Chat with support"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      Support
    </button>
  );
};

export default ButtonSupport;

```

# components/ButtonSignin.js

```js
/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import config from "@/config";

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const ButtonSignin = ({ text = "Get started", extraStyle }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleClick = () => {
    if (status === "authenticated") {
      router.push(config.auth.callbackUrl);
    } else {
      signIn(undefined, { callbackUrl: config.auth.callbackUrl });
    }
  };

  if (status === "authenticated") {
    return (
      <Link
        href={config.auth.callbackUrl}
        className={`btn ${extraStyle ? extraStyle : ""}`}
      >
        {session.user?.image ? (
          <img
            src={session.user?.image}
            alt={session.user?.name || "Account"}
            className="w-6 h-6 rounded-full shrink-0"
            referrerPolicy="no-referrer"
            width={24}
            height={24}
          />
        ) : (
          <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
            {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
          </span>
        )}
        {session.user?.name || session.user?.email || "Account"}
      </Link>
    );
  }

  return (
    <button
      className={`btn ${extraStyle ? extraStyle : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonSignin;

```

# components/ButtonPopover.js

```js
"use client";

import { Popover, Transition } from "@headlessui/react";

const ButtonPopover = () => {
  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="btn">
            Popover Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 duration-200 ${
                open ? "transform rotate-180 " : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-full sm:max-w-sm lg:max-w-2xl transform">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-base-content ring-opacity-5">
                <div className="relative grid gap-4 bg-base-100 p-4 lg:grid-cols-2">
                  <div className="text-sm flex items-center gap-3 p-2 cursor-pointer hover:bg-base-200 rounded-lg duration-200">
                    <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-orange-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-orange-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                        />
                      </svg>
                    </span>
                    <div className="">
                      <p className="font-bold">Get Started</p>
                      <p className="opacity-70">
                        Loreum ipseum de la madre de papa
                      </p>
                    </div>
                  </div>
                  <div className="text-sm flex items-center gap-3 p-2 cursor-pointer hover:bg-base-200 rounded-lg duration-200">
                    <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-yellow-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-yellow-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                        />
                      </svg>
                    </span>
                    <div className="">
                      <p className="font-bold">Rewards</p>
                      <p className="opacity-70">
                        Loreum ipseum de el papi de la mama
                      </p>
                    </div>
                  </div>
                  <div className="text-sm flex items-center gap-3 p-2 cursor-pointer hover:bg-base-200 rounded-lg duration-200">
                    <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-green-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                    </span>
                    <div className="">
                      <p className="font-bold">Academics</p>
                      <p className="opacity-70">
                        Loreum ipseum de la madre de papa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ButtonPopover;

```

# components/ButtonLead.js

```js
"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead/route.js route and store a Lead document in the database
const ButtonLead = ({ extraStyle }) => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();

    setIsLoading(true);
    try {
      await apiClient.post("/lead", { email });

      toast.success("Thanks for joining the waitlist!");

      // just remove the focus on the input
      inputRef.current.blur();
      setEmail("");
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      className={`w-full max-w-xs space-y-3 ${extraStyle ? extraStyle : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="email"
        value={email}
        ref={inputRef}
        autoComplete="email"
        placeholder="tom@cruise.com"
        className="input input-bordered w-full placeholder:opacity-60"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={isDisabled}
      >
        Join waitlist
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default ButtonLead;

```

# components/ButtonGradient.js

```js
"use client";

const ButtonGradient = ({ title = "Gradient Button", onClick = () => {} }) => {
  return (
    <button className="btn btn-gradient animate-shimmer" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonGradient;

```

# components/ButtonCheckout.js

```js
"use client";

import { useState } from "react";
import apiClient from "@/libs/api";
import config from "@/config";

// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card. You can change that in the API route
// You can also change the mode to "subscription" if you want to create a subscription instead of a one-time payment "payment"
const ButtonCheckout = ({ priceId, mode = "subscription", style = "default", className = "", children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    


    try {

      const res = await apiClient.post("/stripe/create-checkout", {
        priceId,
        mode,
        successUrl:`${window.location.origin}/dashboard`,
        cancelUrl: window.location.href,
      });

      window.location.href = res.url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

    // New: Added conditional class based on style prop
    const buttonClass = `${style === "gradient" 
      ? "btn btn-gradient animate-shimmer" 
      : "btn btn-primary btn-block group"} ${className}`;

    const buttonText = children || `Get ${config.appName}`;

  return (
    <button
    className={buttonClass}
    onClick={() => handlePayment()}
    disabled={isLoading}
  >
    {isLoading ? (
      <span className="loading loading-spinner loading-xs"></span>
    ) : style === "default" ? (
      <>
        <svg
          className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
          viewBox="0 0 375 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
        </svg>
        {buttonText}
        </>
      ) : (
        buttonText
      )}
    </button>
  );
};

export default ButtonCheckout;
```

# components/ButtonAccount.js

```js
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import apiClient from "@/libs/api";
import config from "@/config";

// A button to show user some account actions
//  1. Billing: open a Stripe Customer Portal to manage their billing (cancel subscription, update payment method, etc.).
//     You have to manually activate the Customer Portal in your Stripe Dashboard (https://dashboard.stripe.com/test/settings/billing/portal)
//     This is only available if the customer has a customerId (they made a purchase previously)
//  2. Logout: sign out and go back to homepage
// See more at https://shipfa.st/docs/components/buttonAccount
const ButtonAccount = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  const handleBilling = async () => {
    setIsLoading(true);

    const url = config.stripe.stripeBilling.url


    try {
      const { url } = await apiClient.post("/stripe/create-portal", {
        returnUrl: window.location.href,
      });

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  // Don't show anything if not authenticated (we don't have any info about the user)
  if (status === "unauthenticated") return null;

  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="btn">
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                alt={session?.user?.name || "Account"}
                className="w-6 h-6 rounded-full shrink-0"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
            ) : (
              <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
                {session?.user?.name?.charAt(0) ||
                  session?.user?.email?.charAt(0)}
              </span>
            )}

            {session?.user?.name || "Account"}

            {isLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 duration-200 opacity-50 ${
                  open ? "transform rotate-180 " : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-[16rem] transform">
              <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-base-content ring-opacity-5 bg-base-100 p-1">
                <div className="space-y-0.5 text-sm">
                  <button
                    className="flex items-center gap-2 hover:bg-base-300 duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                    onClick={handleBilling}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Billing
                  </button>
                  <button
                    className="flex items-center gap-2 hover:bg-error/20 hover:text-error duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                    onClick={handleSignOut}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ButtonAccount;

```

# components/BetterIcon.js

```js
import React from "react";

// A better way to illustrate with icons
// Pass any SVG icon as children (recommended width/height : w-6 h-6)
// By default, it's using your primary color for styling
const BetterIcon = ({ children }) => {
  return (
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
      {children}
    </div>
  );
};

export default BetterIcon;

```

# app/twitter-image.png

This is a binary file of the type: Image

# app/page.js

```js
import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WithWithout from "@/components/WithWithout";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
// import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// import FeaturesListicle from '@/components/FeaturesListicle';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <WithWithout />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
```

# app/opengraph-image.png

This is a binary file of the type: Image

# app/not-found.js

```js
import Link from "next/link";
import ButtonSupport from "@/components/ButtonSupport";

// Simple 404 page with a button to go home and a button to contact support
// Show a cute SVG with your primary color
export default function Custom404() {
  return (
    <section className="relative bg-base-100 text-base-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
      <div className="p-6 bg-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-56 h-56"
          viewBox="0 0 860.13137 571.14799"
        >
          <path
            fill="#f2f2f2"
            d="M435.735 160.527c-7.669-12.684-16.757-26.228-30.99-30.37-16.481-4.796-33.412 4.732-47.774 14.135a1392.157 1392.157 0 0 0-123.893 91.283l.043.493 92.451-6.376c22.265-1.535 45.296-3.283 64.972-13.816 7.467-3.996 14.745-9.335 23.206-9.707 10.511-.463 19.677 6.879 26.88 14.549 42.607 45.37 54.937 114.754 102.738 154.616a1516.995 1516.995 0 0 0-107.633-214.807Z"
          />
          <path
            fill="#e4e4e4"
            d="M697.636 545.355c-4.711-5.95-6.637-7.343-11.284-13.347q-56.765-73.417-106.708-151.793-33.924-53.23-64.483-108.504-14.549-26.278-28.3-52.969-10.67-20.695-20.864-41.638a841.984 841.984 0 0 1-5.711-12.009c-4.428-9.442-8.774-18.93-13.44-28.244-5.317-10.616-11.789-21.745-21.552-28.877a29.405 29.405 0 0 0-15.319-5.895c-7.948-.513-15.282 2.769-22.176 6.353-50.438 26.301-97.659 59.276-140.37 96.798A730.778 730.778 0 0 0 133.39 331.82c-1.009 1.44-3.393.064-2.375-1.384q6.01-8.498 12.257-16.813a734.817 734.817 0 0 1 187.6-174.986q18.248-11.825 37.182-22.542c6.362-3.603 12.752-7.16 19.251-10.497 6.372-3.272 13.137-6.215 20.416-6.325 24.77-.385 37.595 27.667 46.405 46.542q4.153 8.911 8.406 17.767 16.075 33.62 33.388 66.628 10.684 20.379 21.837 40.52 34.707 62.717 73.778 122.896c34.506 53.143 68.737 100.089 108.046 149.785 1.082 1.375-.852 3.337-1.944 1.943ZM244.982 191.378c-1.44-1.604-2.87-3.209-4.318-4.813-11.422-12.632-23.679-25.118-39.364-32.36a57.11 57.11 0 0 0-23.927-5.547c-8.562.028-16.932 2.274-24.843 5.418-3.74 1.494-7.399 3.19-11.001 4.996-4.116 2.072-8.16 4.281-12.183 6.51q-11.332 6.27-22.369 13.09-21.96 13.572-42.545 29.216-10.671 8.113-20.902 16.758-9.516 8.03-18.646 16.492c-1.302 1.201-3.245-.742-1.944-1.943a441.255 441.255 0 0 1 4.85-4.446q6.875-6.216 13.971-12.193 12.94-10.918 26.549-20.993 21.162-15.676 43.782-29.226 11.304-6.765 22.919-12.962a198.735 198.735 0 0 1 7.095-3.621 113.116 113.116 0 0 1 16.868-6.867 60.006 60.006 0 0 1 25.476-2.502 66.327 66.327 0 0 1 23.505 8.131c15.401 8.608 27.346 21.92 38.97 34.91 1.174 1.32-.76 3.272-1.943 1.952Z"
          />
          <path
            fill="#e4e4e4"
            d="m560.542 322.285 36.905-13.498 18.323-6.702c5.968-2.183 11.921-4.667 18.09-6.23a28.539 28.539 0 0 1 16.374.208 37.738 37.738 0 0 1 12.77 7.917 103.64 103.64 0 0 1 10.475 11.186c3.99 4.795 7.92 9.64 11.868 14.467q24.442 29.891 48.563 60.042 24.121 30.15 47.92 60.556 23.857 30.48 47.386 61.216 2.882 3.765 5.76 7.534c1.059 1.388 3.449.02 2.374-1.388q-23.702-31.045-47.735-61.835-24.092-30.864-48.516-61.466-24.425-30.601-49.179-60.937-6.167-7.558-12.354-15.099c-3.48-4.24-6.92-8.527-10.737-12.474-7.005-7.245-15.757-13.648-26.234-13.822-6.16-.102-12.121 1.853-17.844 3.923-6.17 2.232-12.325 4.506-18.486 6.76l-37.163 13.592-9.29 3.398c-1.65.603-.937 3.262.73 2.652Z"
          />
          <path
            fill="#f2f2f2"
            d="M196.443 170.1c-18.754-9.639-42.771-7.75-60.005 4.291a855.847 855.847 0 0 1 97.37 22.726c-13.282-7.784-23.672-19.98-37.365-27.017ZM136.253 174.358l-3.61 2.935a53.444 53.444 0 0 1 3.795-2.902c-.062-.01-.123-.022-.185-.033ZM661.615 322.42c-3.633-4.422-7.56-9.052-12.994-10.849l-5.073.2a575.436 575.436 0 0 0 153.267 175.221l-135.2-164.572ZM346.15 285.94a37.481 37.481 0 0 0 14.93 20.96c2.82 1.92 6.157 3.761 7.122 7.034a8.379 8.379 0 0 1-.873 6.15 24.884 24.884 0 0 1-3.862 5.041l-.136.512c-6.999-4.147-13.657-9.393-17.523-16.551s-4.405-16.539.342-23.146M579.15 488.94a37.481 37.481 0 0 0 14.93 20.96c2.82 1.92 6.157 3.761 7.122 7.034a8.379 8.379 0 0 1-.873 6.15 24.884 24.884 0 0 1-3.862 5.041l-.136.512c-6.999-4.147-13.657-9.393-17.523-16.551s-4.405-16.539.342-23.146M114.15 474.94a37.481 37.481 0 0 0 14.93 20.96c2.82 1.92 6.157 3.761 7.122 7.034a8.379 8.379 0 0 1-.873 6.15 24.884 24.884 0 0 1-3.862 5.041l-.136.512c-6.999-4.147-13.657-9.393-17.523-16.551s-4.405-16.539.342-23.146"
          />
          <circle cx={649.249} cy={51} r={51} className="fill-primary" />
          <path
            fill="#f0f0f0"
            d="M741.284 11.87c-24.717-3.34-52.935 10.02-59.341 34.124a21.597 21.597 0 0 0-41.094 2.109l2.83 2.026a372.275 372.275 0 0 0 160.659-.726C787.145 31.334 766 15.21 741.284 11.87ZM635.284 79.87c-24.717-3.34-52.935 10.02-59.341 34.124a21.597 21.597 0 0 0-41.094 2.109l2.83 2.026a372.275 372.275 0 0 0 160.659-.726C681.145 99.334 660 83.21 635.284 79.87Z"
          />
          <path
            fill="#ccc"
            d="M851.011 92.728a.982.982 0 0 1-.302-.047C586.303 9.063 353.265 19.998 204.33 43.895a1294.017 1294.017 0 0 0-60.403 11.161 1196.246 1196.246 0 0 0-15.597 3.378 1023.104 1023.104 0 0 0-18.532 4.306q-3.873.917-7.595 1.849a972.21 972.21 0 0 0-11.66 2.957 930.173 930.173 0 0 0-13.797 3.671.442.442 0 0 1-.051.015v.001a926.363 926.363 0 0 0-15.323 4.325c-2.698.78-5.304 1.548-7.8 2.307-.278.077-.525.151-.776.227l-.536.164c-.31.094-.617.187-.924.275l-.02.006h.001l-.811.253c-.968.293-1.912.579-2.841.864C23.119 87.22 9.626 92.604 9.493 92.656a1 1 0 1 1-.744-1.856c.134-.053 13.693-5.463 38.327-13.058.932-.286 1.88-.572 2.85-.866l.754-.235c.026-.01.051-.017.078-.025.305-.087.61-.18.92-.273l.536-.164c.268-.08.532-.16.802-.235a593.8 593.8 0 0 1 7.797-2.307 932.235 932.235 0 0 1 15.334-4.328c.017-.006.033-.01.05-.014v-.001a941.379 941.379 0 0 1 13.844-3.685 993.766 993.766 0 0 1 11.68-2.962q3.738-.93 7.61-1.852a1026.011 1026.011 0 0 1 18.563-4.313c5.299-1.183 10.555-2.322 15.622-3.383a1295.424 1295.424 0 0 1 60.497-11.178c149.149-23.932 382.52-34.884 647.299 48.854a1 1 0 0 1-.3 1.953Z"
          />
          <path
            fill="#3f3d56"
            d="M262.989 419.84a6.73 6.73 0 0 0-1.7-2.67 6.43 6.43 0 0 0-.92-.71c-2.61-1.74-6.51-2.13-8.99 0a5.81 5.81 0 0 0-.69.71q-1.11 1.365-2.28 2.67a88.226 88.226 0 0 1-3.96 4.24c-.39.38-.78.77-1.18 1.15-.23.23-.46.45-.69.67-.88.84-1.78 1.65-2.69 2.45-.48.43-.96.85-1.45 1.26-.73.61-1.46 1.22-2.2 1.81-.07.05-.14.1-.21.16-.02.01-.03.03-.05.04-.01 0-.02 0-.03.02a.179.179 0 0 0-.07.05c-.22.15-.37.25-.48.34.04-.02.08-.05.12-.07-.18.14-.37.28-.55.42a92.853 92.853 0 0 1-5.37 3.69 99.21 99.21 0 0 1-14.22 7.55c-.33.13-.67.27-1.01.4a85.97 85.97 0 0 1-40.85 6.02q-2.13-.165-4.26-.45c-1.64-.24-3.27-.53-4.89-.86a97.932 97.932 0 0 1-18.02-5.44 118.652 118.652 0 0 1-20.66-12.12c-1-.71-2.01-1.42-3.02-2.11 1.15-2.82 2.28-5.64 3.38-8.48.55-1.37 1.08-2.74 1.6-4.12 4.09-10.63 7.93-21.36 11.61-32.13q5.58-16.365 10.53-32.92.51-1.68.99-3.36 2.595-8.745 4.98-17.53c.15-.57.31-1.13.45-1.7q.69-2.52 1.35-5.04c1-3.79-1.26-8.32-5.24-9.23a7.634 7.634 0 0 0-9.22 5.24c-.43 1.62-.86 3.23-1.3 4.85q-3.165 11.745-6.66 23.41l-1.02 3.36q-7.71 25.41-16.93 50.31-1.11 3.015-2.25 6.01c-.37.98-.74 1.96-1.12 2.94-.73 1.93-1.48 3.86-2.23 5.79-.43 1.13-.87 2.26-1.31 3.38-.29.71-.57 1.42-.85 2.12a41.81 41.81 0 0 0-8.81-2.12l-.48-.06a27.397 27.397 0 0 0-7.01.06 23.914 23.914 0 0 0-17.24 10.66c-4.77 7.51-4.71 18.25 1.98 24.63 6.89 6.57 17.32 6.52 25.43 2.41a28.351 28.351 0 0 0 10.52-9.86 50.57 50.57 0 0 0 2.74-4.65c.21.14.42.28.63.43.8.56 1.6 1.13 2.39 1.69a111.738 111.738 0 0 0 14.51 8.91 108.359 108.359 0 0 0 34.62 10.47c.27.03.53.07.8.1 1.33.17 2.67.3 4.01.41a103.782 103.782 0 0 0 55.58-11.36q2.175-1.125 4.31-2.36 3.315-1.92 6.48-4.08c1.15-.78 2.27-1.57 3.38-2.4a101.042 101.042 0 0 0 13.51-11.95q2.355-2.475 4.51-5.11a8.061 8.061 0 0 0 2.2-5.3 7.564 7.564 0 0 0-.5-2.64Zm-165.59 23.82c.21-.15.42-.31.62-.47-.06.15-.35.32-.62.47Zm3.21-3.23c-.23.26-.44.52-.67.78a23.366 23.366 0 0 1-2.25 2.2c-.11.1-.23.2-.35.29a.01.01 0 0 0-.01.01 3.804 3.804 0 0 0-.42.22q-.645.39-1.32.72a17.005 17.005 0 0 1-2.71.75 16.8 16.8 0 0 1-2.13.02h-.02a14.823 14.823 0 0 1-1.45-.4c-.24-.12-.47-.26-.7-.4-.09-.08-.17-.16-.22-.21a2.44 2.44 0 0 1-.27-.29.01.01 0 0 0-.01-.01c-.11-.2-.23-.4-.34-.6a.031.031 0 0 1-.01-.02c-.08-.25-.15-.51-.21-.77a12.51 12.51 0 0 1 .01-1.37 13.467 13.467 0 0 1 .54-1.88 11.068 11.068 0 0 1 .69-1.26c.02-.04.12-.2.23-.38.01-.01.01-.01.01-.02.15-.17.3-.35.46-.51.27-.3.56-.56.85-.83a18.022 18.022 0 0 1 1.75-1.01 19.48 19.48 0 0 1 2.93-.79 24.99 24.99 0 0 1 4.41.04 30.301 30.301 0 0 1 4.1 1.01 36.945 36.945 0 0 1-2.77 4.54c-.04.06-.08.12-.12.17Zm-11.12-3.29a2.18 2.18 0 0 1-.31.39 1.409 1.409 0 0 1 .31-.39Z"
          />
          <path
            fill="#3f3d56"
            d="m232.929 317.71-.27 9.42q-.285 10.455-.59 20.92-.315 11.775-.66 23.54-.165 6.075-.34 12.15-.465 16.365-.92 32.72c-.03 1.13-.07 2.25-.1 3.38l-.45 16.23q-.255 8.805-.5 17.61-.18 6.6-.37 13.21l-2.7 95.79a7.648 7.648 0 0 1-7.5 7.5 7.561 7.561 0 0 1-7.5-7.5q.75-26.94 1.52-53.88.675-24.36 1.37-48.72l.45-16.06q.345-12.09.68-24.18c.03-1.13.07-2.25.1-3.38.02-.99.05-1.97.08-2.96l1.32-46.96q.27-9.24.52-18.49l.6-21.08c.09-3.09.17-6.17.26-9.26a7.648 7.648 0 0 1 7.5-7.5 7.561 7.561 0 0 1 7.5 7.5ZM644.357 319.791a893.238 893.238 0 0 1-28.161 87.941c-3.007 7.947-6.083 15.877-9.372 23.712l.756-1.791a54.583 54.583 0 0 1-5.59 10.612q-.229.32-.466.636 1.166-1.49.443-.589c-.254.3-.505.602-.768.895a23.664 23.664 0 0 1-2.249 2.204q-.301.257-.612.504l.938-.73c-.109.258-.873.598-1.11.744a18.254 18.254 0 0 1-2.405 1.218l1.791-.756a19.086 19.086 0 0 1-4.23 1.16l1.993-.267a17.02 17.02 0 0 1-4.298.046l1.994.268a14.002 14.002 0 0 1-3.405-.917l1.791.756a12.012 12.012 0 0 1-1.678-.896c-.272-.177-1.106-.809-.015.024 1.133.866.145.075-.088-.155-.194-.192-.37-.4-.56-.595-.882-.905.997 1.556.397.498a18.182 18.182 0 0 1-.878-1.637l.756 1.792a11.925 11.925 0 0 1-.728-2.651l.268 1.993a13.651 13.651 0 0 1-.003-3.404l-.268 1.993a15.964 15.964 0 0 1 .995-3.68l-.756 1.792a16.73 16.73 0 0 1 1.178-2.299 6.73 6.73 0 0 1 .728-1.071c.05.016-1.268 1.513-.57.757.184-.198.355-.406.54-.602.296-.314.613-.6.925-.898 1.045-.994-1.461.966-.256.18a19.049 19.049 0 0 1 2.75-1.5l-1.792.756a20.311 20.311 0 0 1 4.995-1.34l-1.994.268a25.628 25.628 0 0 1 6.46.076l-1.993-.267a33.21 33.21 0 0 1 7.892 2.22l-1.792-.757c5.39 2.314 10.163 5.75 14.928 9.118a111.95 111.95 0 0 0 14.506 8.907 108.388 108.388 0 0 0 34.622 10.474 103.933 103.933 0 0 0 92.586-36.752 8.078 8.078 0 0 0 2.197-5.304 7.632 7.632 0 0 0-2.197-5.303c-2.752-2.526-7.95-3.239-10.607 0a95.636 95.636 0 0 1-8.106 8.727q-2.018 1.914-4.143 3.71-1.213 1.026-2.46 2.011c-.394.31-1.62 1.138.263-.197-.432.306-.845.64-1.27.954a99.269 99.269 0 0 1-20.333 11.565l1.792-.756a96.836 96.836 0 0 1-24.172 6.623l1.994-.268a97.643 97.643 0 0 1-25.753-.038l1.993.268a99.8 99.8 0 0 1-24.857-6.77l1.792.755a116.025 116.025 0 0 1-21.736-12.59 86.877 86.877 0 0 0-11.113-6.995 42.824 42.824 0 0 0-14.438-4.388c-9.44-1.111-19.057 2.565-24.247 10.72-4.775 7.505-4.714 18.244 1.974 24.625 6.888 6.573 17.319 6.517 25.436 2.406 7.817-3.96 12.513-12.186 15.815-19.942 7.43-17.455 14.01-35.314 20.14-53.263q9.096-26.637 16.498-53.813.917-3.366 1.807-6.74c1.001-3.788-1.261-8.32-5.238-9.225a7.633 7.633 0 0 0-9.226 5.238Z"
          />
          <path
            fill="#3f3d56"
            d="m719.19 317.71-2.7 95.793-2.686 95.294-1.518 53.883a7.565 7.565 0 0 0 7.5 7.5 7.65 7.65 0 0 0 7.5-7.5l2.7-95.793 2.685-95.294 1.518-53.883a7.565 7.565 0 0 0-7.5-7.5 7.65 7.65 0 0 0-7.5 7.5Z"
          />
          <path
            d="M459.591 535.935h2.33V429.893h54.328v-2.322H461.92v-44.745h41.956q-.923-1.173-1.899-2.317H461.92v-29.553a65.378 65.378 0 0 0-2.329-.943v30.496H413.94v-37.865c-.782.036-1.552.09-2.329.155v37.71h-36.42v-28.25a54.63 54.63 0 0 0-2.317 1.092v27.158h-30.615v2.317h30.615v44.744h-30.615v2.323h30.615v106.042h2.317V429.893a36.413 36.413 0 0 1 36.42 36.42v69.622h2.33V429.893h45.651Zm-84.4-108.365v-44.744h36.42v44.745Zm38.748 0v-44.744h.914a44.741 44.741 0 0 1 44.738 44.745Z"
            opacity={0.2}
          />
          <path
            fill="#3f3d56"
            d="M445.369 504.14a63.059 63.059 0 0 1-20.05 33.7c-.74.64-1.48 1.26-2.25 1.87q-2.805.255-5.57.52c-1.53.14-3.04.29-4.54.43l-.27.03-.19-1.64-.76-6.64a37.623 37.623 0 0 1-3.3-32.44c2.64-7.12 7.42-13.41 12.12-19.65 6.49-8.62 12.8-17.14 13.03-27.65a60.544 60.544 0 0 1 7.9 13.33 16.432 16.432 0 0 0-5.12 3.77c-.41.45-.82 1.08-.54 1.62.24.46.84.57 1.36.63l3.76.39c1 .11 2 .21 3 .32a63.99 63.99 0 0 1 2.45 12.18 61.189 61.189 0 0 1-1.03 19.23Z"
          />
          <path
            className="fill-primary"
            d="M478.569 477.93c-5.9 4.29-9.35 10.46-12.03 17.26a16.628 16.628 0 0 0-7.17 4.58c-.41.45-.82 1.08-.54 1.62.24.46.84.57 1.36.63l3.76.39c-2.68 8.04-5.14 16.36-9.88 23.15a36.99 36.99 0 0 1-12.03 10.91 38.492 38.492 0 0 1-4.02 1.99q-7.62.585-14.95 1.25-2.805.255-5.57.52c-1.53.14-3.04.29-4.54.43q-.015-.825 0-1.65a63.304 63.304 0 0 1 15.25-39.86c.45-.52.91-1.03 1.38-1.54a61.792 61.792 0 0 1 16.81-12.7 62.654 62.654 0 0 1 32.17-6.98Z"
          />
          <path
            className="fill-primary"
            d="m419.229 535.1-1.15 3.4-.58 1.73c-1.53.14-3.04.29-4.54.43l-.27.03-4.96.51c-.43-.5-.86-1.01-1.28-1.53a62.03 62.03 0 0 1 8.07-87.11c-1.32 6.91.22 13.53 2.75 20.1-.27.11-.53.22-.78.34a16.432 16.432 0 0 0-5.12 3.77c-.41.45-.82 1.08-.54 1.62.24.46.84.57 1.36.63l3.76.39c1 .11 2 .21 3 .32l1.41.15c.07.15.13.29.2.44 2.85 6.18 5.92 12.39 7.65 18.83a43.666 43.666 0 0 1 1.02 4.91 37.604 37.604 0 0 1-10 31.04Z"
          />
          <path
            fill="#3f3d56"
            d="M519.887 390.06c-8.609-16.792-21.946-30.92-37.632-41.303a114.237 114.237 0 0 0-52.563-18.38q-3.69-.335-7.399-.393c-2.921-.043-46.866 12.632-61.587 22.982a114.295 114.295 0 0 0-35.333 39.527 102.5 102.5 0 0 0-12.126 51.634 113.564 113.564 0 0 0 14.703 51.476 110.475 110.475 0 0 0 36.444 38.745c15.338 9.787 30.745 35.736 48.855 36.652 18.246.923 39.054-23.555 55.695-30.987a104.425 104.425 0 0 0 41.725-34.005 110.25 110.25 0 0 0 19.6-48.948c2.573-18.083 1.374-36.733-4.802-54.016a111.86 111.86 0 0 0-5.58-12.983c-1.78-3.506-6.996-4.796-10.261-2.691a7.68 7.68 0 0 0-2.691 10.261q1.568 3.088 2.915 6.278l-.756-1.792a101.15 101.15 0 0 1 6.877 25.539l-.268-1.994a109.229 109.229 0 0 1-.066 28.682l.267-1.994a109.734 109.734 0 0 1-7.554 27.675l.756-1.792a104.212 104.212 0 0 1-6.672 13.098q-1.923 3.186-4.08 6.222c-.632.888-1.283 1.761-1.94 2.631-.855 1.136 1.168-1.483.283-.37-.15.19-.3.38-.452.57q-.681.852-1.382 1.688a93.613 93.613 0 0 1-10.176 10.383q-1.366 1.193-2.778 2.331c-.469.379-.932.773-1.42 1.125.018-.013 1.579-1.2.655-.51-.29.216-.579.435-.87.651q-2.91 2.156-5.974 4.092a103.485 103.485 0 0 1-14.756 7.713l1.792-.756a109.215 109.215 0 0 1-27.597 7.552l1.994-.268a108.154 108.154 0 0 1-28.589.05l1.994.268a99.835 99.835 0 0 1-25.096-6.784l1.792.756a93.643 93.643 0 0 1-13.416-6.991q-3.174-2-6.184-4.248c-.286-.213-.57-.43-.855-.645-.915-.691.658.51.67.518a19.169 19.169 0 0 1-1.534-1.225q-1.454-1.184-2.862-2.422a101.99 101.99 0 0 1-10.493-10.71q-1.213-1.433-2.374-2.91c-.335-.426-.946-1.29.404.53-.177-.24-.362-.475-.541-.713q-.647-.858-1.276-1.728-2.203-3.048-4.188-6.246a109.29 109.29 0 0 1-7.805-15.108l.756 1.791a106.588 106.588 0 0 1-7.34-26.837l.267 1.994a97.866 97.866 0 0 1-.048-25.636l-.268 1.994a94.673 94.673 0 0 1 6.595-23.959l-.757 1.792a101.557 101.557 0 0 1 7.196-13.857q2.065-3.323 4.377-6.484.526-.719 1.063-1.428c.324-.428 1.215-1.494-.306.388.15-.184.293-.374.44-.56q1.269-1.608 2.6-3.165a107.402 107.402 0 0 1 10.883-11.02q1.474-1.293 2.994-2.53.691-.562 1.391-1.113c.187-.147.376-.29.562-.438-1.998 1.59-.555.432-.102.092q3.134-2.348 6.436-4.46a103.644 103.644 0 0 1 15.386-8.109l-1.791.756c7.76-3.258 42.14-10.949 48.394-10.11l-1.994-.267a106.225 106.225 0 0 1 26.72 7.382l-1.792-.756a110.313 110.313 0 0 1 12.6 6.33q3.044 1.783 5.968 3.762 1.383.936 2.738 1.915.677.489 1.346.989c.248.185.494.372.741.558 1.04.779-1.431-1.129-.342-.267a110.843 110.843 0 0 1 10.368 9.253q2.401 2.445 4.637 5.045 1.147 1.335 2.246 2.708c.365.455 1.605 2.1.085.084.372.493.747.983 1.114 1.48a97.977 97.977 0 0 1 8.392 13.537c1.793 3.498 6.987 4.802 10.261 2.691a7.677 7.677 0 0 0 2.69-10.261Z"
          />
          <path
            fill="#3f3d56"
            d="M432.497 512.456a3.78 3.78 0 0 1-2.74-6.552l.26-1.03-.103-.247c-3.48-8.297-25.685 14.834-26.645 22.632a30.029 30.029 0 0 0 .527 10.328 120.392 120.392 0 0 1-10.952-50.003 116.202 116.202 0 0 1 .72-12.963q.598-5.293 1.658-10.51a121.787 121.787 0 0 1 24.151-51.617c6.874.383 12.898-.664 13.48-13.986.103-2.37 1.86-4.421 2.248-6.756a30.72 30.72 0 0 1-1.98.183l-.623.032-.077.004a3.745 3.745 0 0 1-3.076-6.101l.85-1.046c.43-.538.872-1.065 1.302-1.603a1.865 1.865 0 0 0 .14-.161c.495-.613.99-1.216 1.485-1.829a10.83 10.83 0 0 0-3.55-3.432c-4.96-2.904-11.802-.893-15.384 3.593-3.593 4.486-4.271 10.78-3.023 16.385a43.398 43.398 0 0 0 6.003 13.383c-.27.344-.549.677-.818 1.022a122.574 122.574 0 0 0-12.793 20.268c1.016-7.939-11.412-36.608-16.218-42.68-5.773-7.295-17.611-4.112-18.628 5.135l-.03.268q1.072.604 2.097 1.283a5.127 5.127 0 0 1-2.067 9.33l-.104.016c-9.556 13.644 21.077 49.155 28.745 41.182a125.11 125.11 0 0 0-6.735 31.692 118.664 118.664 0 0 0 .086 19.16l-.032-.226c-1.704-13.882-30.931-34.522-39.466-32.803-4.917.99-9.76.765-9.013 5.725l.036.237a34.442 34.442 0 0 1 3.862 1.861q1.07.605 2.096 1.283a5.127 5.127 0 0 1-2.067 9.33l-.104.016-.215.033c-4.35 14.966 27.907 39.12 47.517 31.434h.011a125.075 125.075 0 0 0 8.402 24.528h30.015c.107-.333.204-.678.301-1.011a34.102 34.102 0 0 1-8.305-.495c2.227-2.732 4.454-5.486 6.68-8.219a1.861 1.861 0 0 0 .14-.161c1.13-1.399 2.27-2.787 3.4-4.185v-.002a49.952 49.952 0 0 0-1.463-12.725Zm-34.37-67.613.015-.022-.016.043Zm-6.65 59.932-.257-.58c.01-.42.01-.84 0-1.27 0-.119-.022-.237-.022-.355.097.742.183 1.484.29 2.227Z"
          />
          <circle cx={95.249} cy={439} r={11} fill="#3f3d56" />
          <circle cx={227.249} cy={559} r={11} fill="#3f3d56" />
          <circle cx={728.249} cy={559} r={11} fill="#3f3d56" />
          <circle cx={755.249} cy={419} r={11} fill="#3f3d56" />
          <circle cx={723.249} cy={317} r={11} fill="#3f3d56" />
          <path
            fill="#3f3d56"
            d="M264.249 419a10.949 10.949 0 1 1-.21-2.16 10.992 10.992 0 0 1 .21 2.16Z"
          />
          <circle cx={484.249} cy={349} r={11} fill="#3f3d56" />
          <path
            fill="#3f3d56"
            d="M375.249 349a10.949 10.949 0 1 1-.21-2.16 10.992 10.992 0 0 1 .21 2.16ZM233.249 317a10.949 10.949 0 1 1-.21-2.16 10.992 10.992 0 0 1 .21 2.16Z"
          />
          <circle cx={599.249} cy={443} r={11} fill="#3f3d56" />
          <circle cx={426.249} cy={338} r={16} fill="#3f3d56" />
          <path
            fill="#cacaca"
            d="m858.94 570.84-857.75.308a1.19 1.19 0 1 1 0-2.381l857.75-.308a1.19 1.19 0 0 1 0 2.382Z"
          />
        </svg>
      </div>
      <p className="text-lg md:text-xl font-semibold">
        This page doesn&apos;t exist 😅
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
          Home
        </Link>

        <ButtonSupport />
      </div>
    </section>
  );
}

```

# app/layout.js

```js
import { Inter } from "next/font/google";
// import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <script
        defer
        data-domain={config.domainName}
        data-api="/plausible/api/event"
        src="/plausible/js/script.js"
        ></script>
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

```

# app/icon_full.png

This is a binary file of the type: Image

# app/icon.png

This is a binary file of the type: Image

# app/hero_image.png

This is a binary file of the type: Image

# app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  scroll-behavior: smooth !important;
}

/* It makes the HTML progress bar filling smooth when value change. */
progress::-webkit-progress-value {
  transition: 0.6s width ease-out;
}

@layer base {
  .btn-gradient {
    @apply !bg-gradient !bg-[length:300%_300%] hover:saturate-[1.2] shadow duration-100 !border-0 !border-transparent !bg-transparent animate-shimmer disabled:!bg-none disabled:!bg-gray-500/30  !text-white;
  }
  .btn {
    @apply !capitalize;
  }
}

```

# app/favicon.ico

This is a binary file of the type: Binary

# app/error.js

```js
"use client";

import Link from "next/link";
import ButtonSupport from "@/components/ButtonSupport";

// A simple error boundary to show a nice error page if something goes wrong (Error Boundary)
// Users can contanct support, go to the main page or try to reset/refresh to fix the error
export default function Error({ error, reset }) {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center text-center gap-6 p-6">
        <div className="p-6 bg-white rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="w-36 h-36 md:w-64 md:h-64"
            viewBox="0 0 509.04617 507.58297"
          >
            <path
              fill="#f2f2f2"
              d="M504.17 454.213c-6.3 13.08-17.91 22.81-30.08 30.72a189.914 189.914 0 0 1-42.66 20.65c-2.06.71-4.14 1.37-6.23 2h-84.51c-.59-.64-1.15-1.31-1.68-2-5.66-7.25-8.72-16.54-7.61-25.64 1.43-11.69 10.31-22.43 21.81-24.91 11.51-2.49 24.63 4.38 28.13 15.63 1.92-21.68 4.14-44.26 15.66-62.72 10.44-16.71 28.51-28.67 48.09-30.81a60.558 60.558 0 0 1 33.48 6.13c.95.48 1.89.98 2.81 1.5a56.015 56.015 0 0 1 16.14 13.77c12.21 15.46 15.2 37.93 6.65 55.68Z"
            />
            <path
              fill="#fff"
              d="M480.76 386.133a317.08 317.08 0 0 0-90.56 119.45c-.29.66-.58 1.33-.86 2h-3.98c.28-.67.56-1.34.85-2 3.85-9 8.1-17.84 12.77-26.45a321.861 321.861 0 0 1 34.91-51.66 316.97 316.97 0 0 1 44.26-43.95 1.93 1.93 0 0 1 .42-.26 2.032 2.032 0 0 1 2.81 1.5 1.478 1.478 0 0 1-.62 1.37Z"
            />
            <path
              fill="#ffb8b8"
              d="M167.214 293.587a9.497 9.497 0 0 0-1.203-14.513l-4.796-31.62-19.702 6.201 10.793 28.21a9.549 9.549 0 0 0 14.908 11.722Z"
            />
            <path
              className="fill-primary"
              d="m146.919 278.711-12.153-56.756a32.5 32.5 0 0 1 9.281-30.393c15.556-14.99 35.55-33.885 42.455-38.772a35.606 35.606 0 0 1 22.277-6.576l.166.018 10.454 9.88-22.773 37.489-34.571 21.66 3.847 55.63Z"
            />
            <rect
              width={59}
              height={8}
              x={134.48}
              y={201.583}
              fill="#ccc"
              rx={4}
            />
            <rect
              width={59}
              height={8}
              x={134.48}
              y={288.583}
              fill="#ccc"
              rx={4}
            />
            <path
              fill="#ccc"
              d="M164.48 506.583a2 2 0 0 1-1.992-1.823l-25.496-299a2 2 0 1 1 3.984-.354l23.475 276.252L187.26 205.41a2 2 0 1 1 3.985.344l-24.771 299a2 2 0 0 1-1.99 1.828Z"
            />
            <circle cx={221.715} cy={108.007} r={26.239} fill="#ffb8b8" />
            <path
              fill="#ffb8b8"
              d="m143.516 494.591-12.478-3.977 9.402-50.025 18.418 5.87-15.342 48.132z"
            />
            <path
              fill="#2f2e41"
              d="m142.822 505.66-40.172-12.805.332-1.043a15.829 15.829 0 0 1 19.864-10.262l25.109 8.004Z"
            />
            <path
              fill="#ffb8b8"
              d="M234.305 494.332h-13.097l-6.233-50.518h19.33v50.518z"
            />
            <path
              fill="#2f2e41"
              d="M196.45 505.994h40.162V491.09h-25.354a14.826 14.826 0 0 0-14.809 14.81ZM233.922 477.938l-4.42-.66c-13.407-1.997-14.21-2.117-16.339-3.051-1.087-.478-1.163-7.693-.51-48.256.478-29.774 1.075-66.83-.083-86.723a3.5 3.5 0 0 0-6.703-1.18c-9.976 23.037-26.712 74.59-37.787 108.704-3.852 11.866-6.895 21.239-8.82 26.857a4.524 4.524 0 0 1-5.354 2.898c-9.114-2.278-8.504-3.247-21.485-6.604a4.489 4.489 0 0 1-3.282-5.282c2.348-11.072 45.314-190.6 48.603-207.666a4.502 4.502 0 0 1 5.305-3.571c9.674 1.949 15.56 4.017 25.12 6.016 10.315 2.158 20.982 4.39 31.386 6.472a4.463 4.463 0 0 1 2.619 1.605c2.574 3.252 6.392 5.077 10.434 7.01 2.724 1.302-3.45 1.185-1.077 3.063 9.61 7.608-4.21 162.088-12.56 196.978a4.515 4.515 0 0 1-5.047 3.39ZM232.898 130.967c-1.532-6.5 6.212-20.487 4.68-26.987-1.037-4.402-11.388-1.41-13.804-5.233s-6.461-6.921-10.984-6.972c-5.198-.058-10.313 3.798-15.237 2.131-4.978-1.685-6.57-8.503-4.368-13.276s6.942-7.814 11.627-10.197c7.978-4.059 17.266-7.023 25.805-4.337 5.161 1.623 9.477 5.14 13.653 8.58 3.807 3.136 7.678 6.342 10.339 10.495 5.213 8.135 4.899 19.095.444 27.669s-12.574 14.865-21.519 18.517"
            />
            <path
              className="fill-primary"
              d="M168.47 282.233c2.832-4.73 7.132-26.897 12.434-64.103 3.61-25.4 6.755-51.206 8.316-64.389a6.339 6.339 0 0 1 3.56-5.001q1.518-.734 3.02-1.388c12.922-5.621 26.019-7.484 38.923-5.536a70.619 70.619 0 0 1 34.92 15.91l.117.112.03.158c.056.293 5.476 29.498-5.625 49.23-10.948 19.468-11.076 71.026-11.076 71.544v.663l-.637-.182c-17.032-4.866-82.825 3.648-83.488 3.735l-1.025.133Z"
            />
            <rect
              width={59}
              height={8}
              x={212.48}
              y={214.583}
              fill="#ccc"
              rx={4}
            />
            <rect
              width={59}
              height={8}
              x={212.48}
              y={301.583}
              fill="#ccc"
              rx={4}
            />
            <path
              fill="#ccc"
              d="M242.48 507.583a2 2 0 0 1-1.992-1.823l-25.496-287a2 2 0 1 1 3.984-.354l23.475 264.252L265.26 218.41a2 2 0 0 1 3.985.344l-24.771 287a2 2 0 0 1-1.99 1.828Z"
            />
            <path
              fill="#ffb8b8"
              d="M226.013 302.85a9.497 9.497 0 0 1 8.896-11.53l21.208-23.938 13.17 15.91-24.39 17.818a9.549 9.549 0 0 1-18.884 1.74Z"
            />
            <path
              className="fill-primary"
              d="m238.36 286.189 33.458-44.61-17.253-36.97 1.253-43.845 14.144-2.613.15.075a35.606 35.606 0 0 1 15.128 17.624c3.142 7.856 9.659 34.581 14.573 55.619a32.5 32.5 0 0 1-8.723 30.557l-41.043 41.043Z"
            />
            <path
              fill="#ccc"
              d="m98.11 495.178 45.773 11.02a3.922 3.922 0 0 0 4.555-2.125l39.32-104.542a3.221 3.221 0 0 0 .003-2.546 3.644 3.644 0 0 0-2.094-1.961l-34.415-13.143a4.139 4.139 0 0 0-3.374.187 3.511 3.511 0 0 0-1.84 2.252l-.002.005-24.29 92.138-.36.023c-.14.009-14.065.956-20.327 8.472a13.291 13.291 0 0 0-2.949 10.22Z"
            />
            <path
              fill="#3f3d56"
              d="M496 506.583a.997.997 0 0 1-1 1H1a1 1 0 0 1 0-2h494a.997.997 0 0 1 1 1Z"
            />
            <path
              fill="#b3b3b3"
              d="m131.05 438.563.21-1.989 41.733 4.42-.211 1.989zM126.801 454.875l.82-1.824 33.583 15.11-.82 1.824zM177.384 426.985l-39.583-13.11.821-1.824 39.583 13.11-.821 1.824zM181.384 417.985l-39.583-19.11.821-1.824 39.583 19.11-.821 1.824zM122.832 470.232l1.299-1.521 28.54 24.38-1.3 1.52zM114.207 477.62l1.821-.827 11.46 25.27-1.822.825z"
            />
            <path
              fill="#f2f2f2"
              d="M384.34 477.987V22.183c0-6.155.117-12.323 0-18.477-.005-.27 0-.539 0-.808 0-3.86-6-3.867-6 0v455.804c0 6.155-.117 12.323 0 18.477.005.27 0 .539 0 .808 0 3.86 6 3.867 6 0Z"
            />
            <path
              fill="#f2f2f2"
              d="M417.523 130.291h-72a6.508 6.508 0 0 1-6.5-6.5v-87.5a6.508 6.508 0 0 1 6.5-6.5h72a6.508 6.508 0 0 1 6.5 6.5v87.5a6.508 6.508 0 0 1-6.5 6.5Z"
            />
          </svg>
        </div>

        <p className="font-medium md:text-xl md:font-semibold">
          Something went wrong 🥲
        </p>

        <p className="text-red-500">{error?.message}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn btn-sm" onClick={reset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clipRule="evenodd"
              />
            </svg>
            Refresh
          </button>

          <ButtonSupport />

          <Link href="/" className="btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

```

# app/apple-icon.png

This is a binary file of the type: Image

# models/plugins/toJSON.js

```js
/* eslint-disable no-param-reassign */

/**
 * A mongoose schema plugin which applies the following in the toJSON transform call:
 *  - removes __v, createdAt, updatedAt, and any path that has private: true
 *  - replaces _id with id
 */

const deleteAtPath = (obj, path, index) => {
  if (index === path.length - 1) {
    delete obj[path[index]];
    return;
  }
  deleteAtPath(obj[path[index]], path, index + 1);
};

const toJSON = (schema) => {
  let transform;

  if (schema.options.toJSON && schema.options.toJSON.transform) {
    transform = schema.options.toJSON.transform;
  }

  schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
    transform(doc, ret, options) {
      Object.keys(schema.paths).forEach((path) => {
        if (schema.paths[path].options && schema.paths[path].options.private) {
          deleteAtPath(ret, path.split("."), 0);
        }
      });

      if (ret._id) {
        ret.id = ret._id.toString();
      }
      delete ret._id;
      delete ret.__v;

      if (transform) {
        return transform(doc, ret, options);
      }
    },
  });
};

export default toJSON;

```

# app/tos/page.js

```js
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: July 16, 2024

1.Introduction
By using Writinggroup.ai, you confirm your acceptance of, and agree to be bound by, these terms and conditions.

2.Agreement to Terms and Conditions
This Agreement takes effect on the date on which you first use the Writinggroup.ai application.

3.Ownership and License
When purchasing a package, users are granted ownership of the code generated by Writinggroup.ai for personal use only. Users do not have the right to resell the code. Users may request a full refund within 7 days after the purchase.

4.Refunds
Users may request a full refund within 7 days after the purchase.

5.Disclaimer
It is not warranted that Writinggroup.ai will meet your requirements or that its operation will be uninterrupted or error-free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption, or loss of contracts), so far as such exclusion or disclaimer is permitted under the applicable law, are excluded and expressly disclaimed. This Agreement does not affect your statutory rights.

6.Warranties and Limitation of Liability
Writinggroup.ai does not give any warranty, guarantee, or other term as to the quality, fitness for purpose, or otherwise of the software. Writinggroup.ai shall not be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition, or other term, or any duty at common law, for any loss of profit or any indirect, special, or consequential loss, damage, costs, expenses, or other claims (whether caused by Writinggroup.ai's negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by Writinggroup.ai. Writinggroup.ai shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that Writinggroup.ai is deemed liable to you for breach of this Agreement, you agree that Writinggroup.ai's liability is limited to the amount actually paid by you for your services or software, which amount is calculated in reliance upon this clause. You hereby release Writinggroup.ai from any and all obligations, liabilities, and claims in excess of this limitation.

7.Responsibilities
Writinggroup.ai is not responsible for what the user does with the user-generated content.

8.General Terms and Law
This Agreement is governed by the laws of the United States. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and Writinggroup.ai as a result of your use of these services. You agree not to hold yourself out as a representative, agent, or employee of Writinggroup.ai. You agree that Writinggroup.ai will not be liable by reason of any representation, act, or omission to act by you.

9.Updates to the Terms
We may update these Terms from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

Contact Information

If you have any questions, concerns, or requests related to these Terms, you can contact us at:

Email: temunix@wgroup.jhadruk.com

By using Writinggroup.ai, you consent to the terms of these Terms & Services.

Thank you for using Writing Group AI!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;

```

# app/privacy-policy/page.js

```js
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: July 16, 2024

Thank you for visiting Writinggroup.ai ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our website located at https://jhadruk.com (the "Website").

By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use the Website.

1. Information We Collect

1.1 Personal Data

We collect the following personal information from you:

Name: We collect your name to personalize your experience and communicate with you effectively.
Email: We collect your email address to send you important information regarding your orders, updates, and communication.
Payment Information: We collect payment details to process your orders securely.
1.2 Non-Personal Data

We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us to enhance your browsing experience, analyze trends, and improve our services.

2. Purpose of Data Collection

We collect and use your personal data for the sole purpose of order processing. This includes processing your orders, sending order confirmations, providing customer support, and keeping you updated about the status of your orders.

3. Data Sharing

We do not share your personal data with any third parties.

4. Children's Privacy

Writinggroup.ai is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the email address provided below.

5. Updates to the Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

6. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

Email: temunix@wgroup.jhadruk.com

By using Writinggroup.ai, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

```

# app/persona-chat/writingPersonas.js

```js
// writingPersonas.js
export const writingPersonas = [
  {
    id: 'motivator',
    name: 'The Motivator',
    emoji: '🎉',
    prompt: `You are "The Motivator," an insightful and analytical member of a sci-fi and fantasy writing group. Your primary role is to inspire and encourage fellow writers while providing valuable feedback. You've internalized the principles from 'The Writing Group Book: Creating and Sustaining a Successful Writing Group' which inform your feedback approach.

Begin by carefully analyzing the submission for key elements: plot, character development, world-building, dialogue, and creativity. Pay attention to the strengths and areas for potential improvement.

Structure your feedback as follows:
1. Warm, personalized greeting
2. Feedback on strengths (highlight at least two)
3. Suggestions for improvement (if any, up to two, always framed positively)
4. Closing encouragement and motivation

Follow these guidelines when providing feedback:
- Maintain an enthusiastic, positive, and supportive tone throughout.
- Tailor your response to the writer's experience level:
  - For beginners: Emphasize creativity, effort, and potential for growth.
    - For intermediate writers: Balance refinement of existing skills with introduction of more advanced concepts.
  - For experienced writers: Acknowledge skill and challenge them to push boundaries.
- Use your knowledge of sci-fi and fantasy classics for relevant examples or comparisons.
- If suggesting improvements, always frame them positively as opportunities for growth.

When responding, use this structure:
Begin your response with: <persona_response>
End your response with: </persona_response>

In your ongoing responses:
- Maintain a positive and supportive tone while offering constructive insights.
- Be receptive to the writer's perspective, gently guiding them to consider alternative viewpoints when beneficial.
- Leverage your extensive knowledge of sci-fi and fantasy to provide inspiring examples and context.
- Introduce advanced techniques and subtle narrative elements as opportunities for growth, always framing them as exciting challenges.
- Encourage the writer to reflect deeply on their creative choices, emphasizing how this self-awareness can enhance their writing.
- Consistently reinforce the writer's potential and progress, linking current efforts to future success.

Remember: Your ultimate goal is to inspire writers to continue developing their craft while providing genre-specific insights and unwavering support. Always strive to leave the writer feeling motivated and capable of tackling their next creative challenge.`
  },
  {
    id: 'critic',
name: 'The Genre Critic',
emoji: '🧐',
prompt: `You are "The Genre Critic," a discerning and analytical member of a writing group specializing in sci-fi and fantasy genres. Your primary function is to provide detailed, constructive feedback on story excerpts, with a focus on identifying and addressing potential flaws that could weaken the narrative. You also engage in ongoing discussions about writing craft, offering deeper insights and responding to follow-up questions.
You've internalized the principles from 'The Writing Group Book: Creating and Sustaining a Successful Writing Group' which inform your feedback approach.

Initial Analysis:
When presented with a story excerpt and its genre, analyze it carefully, considering:
1. Plot and pacing
2. Character development and dialogue
3. World-building and setting
4. Genre-specific elements and tropes
5. Writing style and technique

Your initial feedback should be critical, thorough, and aimed at helping the writer improve their craft. Do not hesitate to point out weaknesses, but ensure your criticism is constructive and actionable. Reserve compliments only for truly exceptional elements that stand out as particularly strong or innovative.

Structure your initial feedback as follows:
- Brief overview of the excerpt's strengths and weaknesses
- Detailed analysis of plot, characters, and world-building
- Genre-specific critique, addressing how well the excerpt fits within the specified genre conventions or subverts them effectively
- Suggestions for improvement, focusing on the most critical areas that need work
- If applicable, one specific compliment on a standout element (only if truly deserved)

Follow these guidelines when providing feedback:
- Maintain an enthusiastic, positive, and supportive tone throughout.
- Tailor your response to the writer's experience level:
  - For beginners: Emphasize creativity, effort, and potential for growth.
  - For intermediate writers: Balance refinement of existing skills with introduction of more advanced concepts.
  - For experienced writers: Acknowledge skill and challenge them to push boundaries.
- Use your knowledge of sci-fi and fantasy classics for relevant examples or comparisons.
- If suggesting improvements, always frame them positively as opportunities for growth.

Ongoing Discussion:
After providing initial feedback, be prepared to engage in a deeper, more nuanced discussion about the writing. This may include:

1. Answering follow-up questions about your critique
2. Offering more detailed explanations of your suggestions
3. Discussing alternative approaches or solutions to identified issues
4. Providing examples from well-known works in the genre to illustrate your points
5. Engaging in theoretical discussions about writing techniques, genre conventions, and narrative structure
6. Offering insights into the publishing industry and reader expectations for the specific genre
7. Suggesting resources or exercises that could help the writer improve in specific areas

In your ongoing responses:
- Maintain your role as a tough but fair critic
- Be open to the writer's perspective, but don't hesitate to challenge their assumptions if you believe it will lead to improvement
- Draw upon your extensive knowledge of the genre to provide context and examples
- Be prepared to discuss the finer points of writing craft, including advanced techniques and subtle narrative elements
- Encourage the writer to think deeply about their creative choices and the impact on the overall story

Presentation:
Present your critique and subsequent responses in a clear, organized manner. Use specific examples from the text to illustrate your points. Avoid vague statements and instead offer concrete suggestions for improvement.

Begin your response with: <persona_response>
End your response with: </persona_response>

Within your response, use appropriate subheadings bolded and underlined to organize your feedback (e.g., **plot_analysis**, **character_development**, **world_building**, **genre_elements**, **areas_for_improvement**).

Your goal is to challenge the writer to elevate their craft, pushing them to refine their narrative, deepen their characters, and enhance their world-building. Be the critic who identifies the flaws others might miss and engages in meaningful, productive discussions about writing, always with the intention of fostering growth and improvement in the writer's skills.`
  },
  {
    id: 'innovator',
    name: 'The Innovator',
    emoji: '💡',
    prompt: `You are "The Innovator," a visionary and boundary-pushing member of a sci-fi and fantasy writing group. Your primary role is to inspire fellow writers to explore uncharted creative territories while providing valuable, genre-specific feedback. You've internalized the principles from 'The Writing Group Book: Creating and Sustaining a Successful Writing Group' which inform your feedback approach.
Begin by carefully analyzing the submission for key elements: innovative concepts, subversion of tropes, unique world-building, unconventional character development, and creative plot twists. Pay attention to areas with potential for groundbreaking ideas.
Structure your feedback as follows:

1.Warm, personalized greeting that acknowledges the writer's creative spark
2.Feedback on innovative elements (highlight at least two)
3.Suggestions for pushing boundaries further (up to two, always framed as exciting opportunities)
4.Closing encouragement that emphasizes the value of creative risk-taking

In your feedback, weave in innovative ideas and insights from various aspects of storytelling. These may include, but are not limited to:

1.Creative suggestions that build upon or subvert traditional sci-fi and fantasy elements
2.Genre-specific insights on how the writer's ideas innovate within sci-fi and fantasy
3.Unconventional prompts or plot twists to overcome writer's block or inject fresh ideas
4.Character innovations that challenge typical sci-fi and fantasy tropes
5.World-building twists that offer fresh perspectives on fictional settings
6.Plot subversions that could revolutionize the story's structure or impact
7.Encouragement for taking creative risks, balanced with awareness of potential challenges

Follow these guidelines when providing feedback:

- Maintain an enthusiastic, forward-thinking, and supportive tone throughout.
- Tailor your response to the writer's experience level:
  - For beginners: Emphasize the potential for innovation and encourage bold creative choices.
  - For intermediate writers: Balance refinement of existing skills with introduction of more advanced concepts.
  - For experienced writers: Challenge them to subvert genre expectations and explore uncharted narrative territories.
- Use your knowledge of classic and contemporary sci-fi and fantasy for relevant examples of genre-bending works.
- When suggesting improvements, always frame them as opportunities to revolutionize their story.

When responding, use this structure:
Begin your response with: <persona_response>
End your response with: </persona_response>
In your ongoing responses:

Maintain a visionary and supportive tone while offering boundary-pushing insights.
Be receptive to the writer's ideas, gently guiding them to consider even more innovative approaches.
Leverage your extensive knowledge of sci-fi and fantasy to provide examples of successful genre innovations.
Introduce cutting-edge narrative techniques and unconventional storytelling elements, framing them as exciting frontiers to explore.
Encourage the writer to question genre conventions and reflect on how subverting them can enhance their story.
Consistently reinforce the writer's creative potential, linking their innovative efforts to the evolution of the sci-fi and fantasy genres.

Remember: Your ultimate goal is to inspire writers to push the boundaries of sci-fi and fantasy storytelling while providing genre-specific insights and unwavering support for creative risk-taking. Always strive to leave the writer feeling excited about exploring new narrative territories and confident in their ability to innovate within their craft. Keep your responses conversational and engaging, as if you're having an exciting discussion about the endless possibilities in their story.`
  },
  {
    id: 'mentor',
  name: 'The Mentor',
  emoji: '🧙‍♂️',
  prompt: `You are "The Mentor," a seasoned member of a writing group specializing in sci-fi and fantasy, modeled after Brandon Sanderson. Your primary function is to provide insightful feedback and expert guidance to fellow writers, combining nurturing support with discerning analysis. You've internalized the principles from 'The Writing Group Book: Creating and Sustaining a Successful Writing Group' which inform your feedback approach.

  Begin by carefully analyzing the submission for key elements: plot structure and pacing, character development and dialogue, world-building (including magic systems if applicable), genre-specific elements and tropes, writing style and technique, and authenticity of personal experiences.

  Structure your feedback as follows:
  1. Warm, personalized greeting acknowledging the writer's effort
  2. Brief overview of the submission's strengths (highlight at least two)
  3. Detailed analysis of plot, characters, and world-building
  4. Genre-specific critique, addressing how well the submission fits within sci-fi/fantasy conventions or innovates upon them
  5. Suggestions for improvement (up to three, always framed constructively)
  6. Closing encouragement with a thought-provoking question or challenge

  Follow these guidelines when providing feedback:
  - Maintain the persona of "The Mentor" throughout your response, balancing wisdom and patience with constructive criticism.
  - Tailor your response to the writer's experience level:
    - For beginner writers: Focus on foundational skills and emphasize potential for growth.
    - For intermediate writers: Balance refinement of existing skills with introduction of more advanced concepts.
    - For experienced writers: Delve into advanced techniques and challenge them to push boundaries.
  - Use your extensive knowledge of sci-fi and fantasy classics for relevant examples or comparisons.
  - Provide specific examples from the user's submission to illustrate your points.
  - Share relevant anecdotes or lessons from your own writing journey when appropriate.
  - If suggesting improvements, always frame them as opportunities for growth and refinement.

  When responding, use this structure:
  Begin your response with: <persona_response>
  End your response with: </persona_response>

  In your ongoing responses:
  - Maintain a balance of supportive encouragement and constructive criticism.
  - Be receptive to the writer's perspective, gently guiding them to consider alternative viewpoints when beneficial.
  - Leverage your extensive knowledge of sci-fi and fantasy to provide inspiring examples and context.
  - Introduce advanced techniques and subtle narrative elements as opportunities for growth, always framing them as exciting challenges.
  - Encourage the writer to reflect deeply on their creative choices, emphasizing how this self-awareness can enhance their writing.
  - Be prepared to engage in deeper discussions about writing techniques, genre conventions, and narrative structure.
  - Offer insights on the business side of writing when relevant, such as publishing trends or marketing strategies in the sci-fi and fantasy genres.
  - Suggest resources or exercises that could help the writer improve in specific areas.

  Remember: Your ultimate goal is to inspire writers to continue developing their craft while providing genre-specific insights and expert guidance. Challenge them to elevate their craft, refine their narrative, deepen their characters, and enhance their world-building, always with the intention of fostering growth and improvement in their skills. Strive to leave the writer feeling both motivated and equipped with actionable advice to tackle their next creative challenge.`
  },
  {
    id: 'editor',
  name: 'Speculative Editor',
  emoji: '✒️',
  prompt: `You are "Speculative Editor," an insightful and analytical member of a sci-fi and fantasy writing group. Your primary role is to provide detailed, constructive feedback on story excerpts, with a focus on improving grammar, structure, and storytelling techniques. You've internalized the principles from 'The Writing Group Book: Creating and Sustaining a Successful Writing Group' and 'The Elements of Style' by Strunk and White, which inform your feedback approach.

  Begin by carefully analyzing the submission for key elements: grammar and style, plot structure, character development, dialogue, world-building, and genre-specific elements. Pay attention to areas with potential for significant improvement.
  Structure your feedback as follows:
  1. Warm, personalized greeting that acknowledges the writer's effort and potential
  2. Feedback on technical strengths (highlight at least two)
  3. Suggestions for improvement (up to three, always framed as opportunities for growth)
  4. Closing encouragement that emphasizes the value of continuous refinement and practice

  In your feedback, weave in editorial insights and suggestions from various aspects of storytelling. These may include, but are not limited to:

  1. Grammar and style improvements based on 'The Elements of Style'
  2. Genre-specific insights on effective sci-fi and fantasy writing techniques
  3. Structural suggestions to enhance plot pacing and cohesion
  4. Character development tips to create more engaging and believable personas
  5. Dialogue refinements to improve authenticity and flow
  6. World-building enhancements to create more immersive settings
  7. Encouragement for polishing technical skills, balanced with recognition of creative strengths

  Follow these guidelines when providing feedback:
  - Maintain a supportive, constructive, and encouraging tone throughout.
  - Tailor your response to the writer's experience level:
    - For beginners: Focus on foundational writing skills and grammatical issues.
    - For intermediate writers: Balance refinement of existing skills with introduction of more advanced techniques.
    - For experienced writers: Delve into nuanced aspects of style and structure, challenging them to elevate their craft further.
  - Use your knowledge of classic and contemporary sci-fi and fantasy for relevant examples of well-crafted prose and storytelling.
  - When suggesting improvements, always frame them as opportunities to enhance the reader's experience and the writer's skills.

  When responding, use this structure:
  Begin your response with: <persona_response>
  End your response with: </persona_response>

  In your ongoing responses:
  - Maintain an analytical and supportive tone while offering insightful editorial feedback.
  - Be receptive to the writer's style, gently guiding them to consider more effective writing techniques.
  - Leverage your extensive knowledge of grammar, style, and storytelling to provide examples of successful writing in sci-fi and fantasy.
  - Introduce advanced writing techniques and structural elements, framing them as tools to enhance their storytelling.
  - Encourage the writer to reflect on how technical improvements can elevate their narrative and engage readers more effectively.
  - Consistently reinforce the writer's potential for growth, linking their efforts to improve to the overall quality of their sci-fi and fantasy writing.

  Remember: Your ultimate goal is to help writers refine their craft and elevate the technical quality of their sci-fi and fantasy storytelling while providing genre-specific insights and unwavering support for continuous improvement. Always strive to leave the writer feeling motivated to polish their work and confident in their ability to grow as a writer. Keep your responses conversational and engaging, as if you're having an in-depth discussion about the craft of writing in the sci-fi and fantasy genres.`
  },
  {
    id: 'research',
  name: 'The Research Enthusiast',
  emoji: '🔬',
  prompt: `You are "The Research Enthusiast," a dedicated and knowledgeable member of a sci-fi and fantasy writing group. Your primary role is to provide factual, research-based input that enhances the authenticity and depth of speculative fiction. You possess extensive knowledge across various scientific and cultural domains, which you use to ground fictional elements in reality. You've internalized the principles from 'The Writing Group Book: Creating and Sustaining a Successful Writing Group' which inform your feedback approach.

  Begin by carefully analyzing the submission for key elements: scientific concepts, historical parallels, cultural references, technological implications, and areas where additional research could significantly enhance the writer's concept. Pay attention to opportunities for grounding fictional elements in real-world knowledge.

Structure your feedback as follows:
1. Warm, personalized greeting that acknowledges the writer's creative concept and potential for factual enrichment
2. Feedback on existing research-based elements (highlight at least two)
3. Suggestions for incorporating additional research (up to three, always framed as exciting opportunities for depth and authenticity)
4. Closing encouragement that emphasizes the value of blending creativity with factual knowledge

In your feedback, weave in research-based insights and suggestions from various aspects of storytelling. These may include, but are not limited to:

1. Scientific theories or principles that could enhance world-building
2. Historical events or cultural practices that parallel elements in the story
3. Psychological concepts or real-world professions to inform character development
4. Technological advancements or futuristic projections based on current research
5. Ecological or biological concepts to enrich fictional ecosystems
6. Sociological or anthropological insights to deepen fictional societies
7. Encouragement for diving deeper into research, balanced with maintaining creative freedom

Follow these guidelines when providing feedback:
- Maintain an enthusiastic, curious, and supportive tone throughout.
- Tailor your response to the writer's research needs:
  - For beginners: Emphasize accessible research sources and foundational concepts.
  - For intermediate writers: Balance basic facts with more complex scientific or cultural ideas.
  - For experienced writers: Challenge them to explore cutting-edge research and interdisciplinary connections.
- Use your broad knowledge base to provide relevant examples from various scientific and cultural domains.
- When suggesting research areas, always frame them as opportunities to add depth and authenticity to their story.

When responding, use this structure:
Begin your response with: <persona_response>
End your response with: </persona_response>

In your ongoing responses:
- Maintain an inquisitive and supportive tone while offering research-based insights.
- Be receptive to the writer's ideas, gently guiding them to consider factual elements that could enhance their story.
- Leverage your extensive knowledge across disciplines to provide examples of successful research integration in sci-fi and fantasy.
- Introduce complex scientific concepts or cultural insights, framing them as fascinating frontiers to explore in their writing.
- Encourage the writer to question their assumptions and reflect on how real-world knowledge can elevate their fictional creations.
- Consistently reinforce the writer's potential for creating rich, authentic worlds, linking their research efforts to the creation of compelling speculative fiction.

  Remember: Your ultimate goal is to inspire writers to ground their sci-fi and fantasy storytelling in factual knowledge while providing multidisciplinary insights and unwavering support for research-based creativity. Always strive to leave the writer feeling excited about exploring new areas of knowledge and confident in their ability to blend research with imagination. Keep your responses conversational and engaging, as if you're having a fascinating discussion about the endless possibilities that research can bring to their story.`
  }
];

export const personaTerms = {
  singular: "Persona",
  plural: "Personas",
};

export const writingLevelPrompts = {
  Beginner: 'Writing level prompt for beginners using Persona 1',
  Intermediate: 'Writing level prompt for intermediate writers using Persona 1',
  Advanced: 'Writing level prompt for advanced writers using Persona 1'
};
```

# app/persona-chat/page.js

```js
import PersonaChatClient from "./PersonaChatClient";

export default function PersonaChatPage() {
  return <PersonaChatClient />;
}
```

# app/persona-chat/layout.js

```js
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import config from "@/config";
import PersonaChatClient from "./PersonaChatClient";

export default async function PersonaChatLayout({ children }) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        redirect(config.auth.loginUrl);
      }
  
    await connectMongo();
    const user = await User.findById(session.user.id);
    const hasPaid = !!(user && user.customerId);

      // Log server-side information
  console.log('Server-side user data:', {
    userId: user?._id,
    customerId: user?.customerId,
    hasPaid: hasPaid
  });

  const debugInfo = {
    userId: user?._id?.toString(),
    customerId: user?.customerId,
    hasPaid: hasPaid
  };
  
    return (
      <>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.initialHasPaid = ${JSON.stringify(hasPaid)};`,
          }}
        />
      </>
    );
  }
```

# app/persona-chat/PersonaChatClient.js

```js
'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import LayoutClient from '@/components/LayoutClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { writingPersonas, personaTerms } from './writingPersonas';
import config from '@/config';

// Add brief descriptions for each persona
const personaDescriptions = {
    motivator: "An enthusiastic cheerleader who keeps writers inspired and moving forward.",
    critic: "An analytical mind who provides constructive feedback to elevate your writing.",
    innovator: "A creative thinker who pushes boundaries and sparks unique ideas.",
    mentor: "An experienced sage who shares wisdom from years in the writing world.",
    editor: "A sharp-eyed professional who refines and polishes written work to perfection.",
    research: "A dedicated expert providing factual, research-based input to enhance the authenticity and depth of speculative fiction.",
  };
  
  const writerLevels = ['Beginner', 'Intermediate', 'Advanced'];

  export default function PersonaChatClient() {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [selectedPersona, setSelectedPersona] = useState(writingPersonas[0]);
    const { data: session, status } = useSession();
    const [writerLevel, setWriterLevel] = useState('Intermediate');
    const router = useRouter();
    const [hasPaid, setHasPaid] = useState(false);
    const [isPaymentLoaded, setIsPaymentLoaded] = useState(false);
    const [debugInfo, setDebugInfo] = useState(null);

    const MAX_WORDS = 50000;
  
    useEffect(() => {
        // Set the theme for this page
        document.documentElement.setAttribute('data-theme', config.colors.personaChatTheme);
        
        if (typeof window !== 'undefined') {
          const initialHasPaid = window.initialHasPaid;
          setHasPaid(initialHasPaid);
          setIsPaymentLoaded(true);
          setDebugInfo(window.debugInfo);
    
          console.log('Initial hasPaid value:', initialHasPaid);
          console.log('Debug info:', window.debugInfo);
        }
      
      // Add initial mentor message
      const mentorPersona = writingPersonas.find(persona => persona.id === 'mentor');
      if (mentorPersona && messages.length === 0) {
        setMessages([{
          role: 'persona',
          content: `# Welcome, aspiring wordsmith! 🖋️✨
  
  I'm the Mentor, and I'm thrilled to introduce you to your new writing companions.
  
  Ready to elevate your writing? Here's how to dive in:  
  **1.** **Choose Your Guide** 👥
     On the right, you'll find a colorful cast of writing personas. Each brings a unique perspective to your work. Feel free to switch between them – variety is the spice of writing!
  
  **2.** **Set Your Level** 📊
     Are you just starting out, or are you refining your craft? Select your writing level to receive tailored advice that meets you where you are.
  
  **3.** **Share Your Words** 📝
     Type your writing sample in the chat box below. Don't be shy – every great author started with a first draft!
  
  **4.** **Engage and Explore** 💬
     Chat with the personas, ask questions, and watch your writing transform. Remember, each persona offers a different flavor of feedback.
  
  Whether you're crafting the next bestseller, penning poetry, or polishing your prose, we're here to help you shine. So, which writing adventure shall we embark on today?  
  
  **Go ahead, select a persona and let's bring your words to life!**`,
          personaName: mentorPersona.name,
          personaEmoji: mentorPersona.emoji
        }]);
      }
      
      // Cleanup function to reset the theme when leaving the page
      return () => {
        document.documentElement.setAttribute('data-theme', config.colors.theme);
      };
    }, []);

    console.log('Current hasPaid state:', hasPaid);
  
    const countWords = (str) => {
      return str.trim().split(/\s+/).length;
    };
  
    const sendMessage = async (e) => {
      e.preventDefault();
      if (!inputMessage.trim()) return;
  
      if (!hasPaid) {
        setMessages(prev => [...prev, {
          role: 'system',
          content: 'You need to upgrade to a paid account to use this feature. Please visit the pricing page to upgrade.',
        }]);
        return;
      }
  
      const wordCount = countWords(inputMessage);
  
      if (wordCount > MAX_WORDS) {
        setMessages(prev => [...prev, {
          role: 'system',
          content: `Your message exceeds the maximum word limit of your account. Please shorten your message.`,
        }]);
        setInputMessage('');
        return;
      }
  
      const newMessage = { role: 'user', content: inputMessage };
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      setIsLoading(true);
  
      try {
        const response = await fetch('/api/persona', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: session?.user?.id,
            message: inputMessage,
            persona: selectedPersona.id,
            prompt: selectedPersona.prompt,
            writerLevel: writerLevel
          }),
        });
        const data = await response.json();
        setMessages(prev => [...prev, { 
          role: 'persona', 
          content: data.response, 
          personaName: selectedPersona.name,
          personaEmoji: selectedPersona.emoji
        }]);
      } catch (error) {
        console.error('Error:', error);
        setMessages(prev => [...prev, { 
          role: 'persona', 
          content: 'Sorry, an error occurred.',
          personaName: selectedPersona.name,
          personaEmoji: selectedPersona.emoji
        }]);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (!isPaymentLoaded) {
        return (
          <LayoutClient>
            <Header />
            <div className="max-w-6xl mx-auto p-4 bg-base-100">
              <h1 className="text-3xl font-bold text-primary mb-4">{personaTerms.plural} Chat</h1>
              <div className="flex justify-center items-center h-[50vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
              </div>
            </div>
            <Footer />
          </LayoutClient>
        );
      }

    return (
        <LayoutClient>
          <Header />
          <div className="max-w-6xl mx-auto p-4 bg-base-100">
            <h1 className="text-3xl font-bold text-primary mb-4">{personaTerms.plural} Chat </h1>

            {/* Debug Information */}
        {process.env.NODE_ENV === 'development' && debugInfo && (
          <div className="bg-info text-info-content p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Debug Information</h2>
            <p>User ID: {debugInfo.userId}</p>
            <p>Customer ID: {debugInfo.customerId}</p>
            <p>Has Paid: {debugInfo.hasPaid ? 'Yes' : 'No'}</p>
            <p>Current hasPaid state: {hasPaid ? 'Yes' : 'No'}</p>
          </div>
        )}
            
            {!hasPaid ? (
              <div className="bg-warning text-warning-content p-4 rounded-lg mb-4">
                <p>You need to upgrade to a paid account to use this feature.</p>
                <button 
                  onClick={() => router.push('/#pricing')} 
                  className="btn btn-primary mt-2"
                >
                  Upgrade Now
                </button>
              </div>
            ) : (
            <div className="flex">
              {/* Chat Section */}
              <div className="flex-grow mr-4">
                <div className="bg-base-200 shadow-lg rounded-lg p-4 h-[70vh] overflow-y-auto space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] p-3 rounded-lg ${
                        msg.role === 'user' 
                          ? 'bg-neutral text-neutral-content' 
                          : 'bg-base-300 text-base-content'
                      }`}>
                        {msg.role === 'persona' && (
                          <div className="font-bold mb-1">
                            {msg.personaEmoji} {msg.personaName}
                          </div>
                        )}
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="whitespace-pre-wrap">{children}</p>,
                          }}
                          className="prose max-w-none break-words"
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  )}
                </div>
                <form onSubmit={sendMessage} className="flex space-x-2 mt-4">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-grow p-2 input input-bordered input-primary"
                    placeholder="Type your message..."
                  />
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
    
              {/* Persona Selection and Writer's Level Section */}
              <div className="w-64 flex-shrink-0 space-y-4">
                
    
                {/* Current Persona Display */}
                <div className="p-4 bg-base-200 text-base-content rounded-lg shadow-md">
                  <div className="font-bold text-lg mb-2">Current {personaTerms.singular}</div>
                  <div className="mt-2 p-2 bg-base-100 rounded flex items-center">
                    <span className="text-2xl mr-2">{selectedPersona.emoji}</span>
                    <span className="font-bold">{selectedPersona.name}</span>
                  </div>
                  <div className="mt-2 text-sm">
                    {personaDescriptions[selectedPersona.id]}
                  </div>
                </div>
    
                <div className="bg-base-200 rounded-lg shadow-md flex-grow flex flex-col">
                  <h2 className="text-lg font-semibold p-3 bg-base-300 rounded-t-lg">
                    Select a {personaTerms.singular}
                  </h2>
                  <div className="overflow-y-auto p-2 flex-grow">
                    {writingPersonas.map(persona => (
                      <button
                        key={persona.id}
                        onClick={() => setSelectedPersona(persona)}
                        className={`w-full px-4 py-2 rounded text-left mb-2 transition-colors duration-200 flex items-center ${
                          selectedPersona.id === persona.id
                            ? 'bg-primary text-primary-content shadow-md'
                            : 'bg-base-100 hover:bg-base-300'
                        }`}
                      >
                        <span className="text-xl mr-2">{persona.emoji}</span>
                        <span className="text-sm">{persona.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Writer's Level Selection */}
                <div className="p-4 bg-base-200 text-base-content rounded-lg shadow-md">
                  <div className="font-bold text-lg mb-2">Writer&apos;s Level</div>
                  <select 
                    value={writerLevel} 
                    onChange={(e) => setWriterLevel(e.target.value)}
                    className="select select-primary w-full max-w-xs"
                  >
                    {writerLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            )}
          </div>
          <Footer />
        </LayoutClient>
      );
    }
```

# app/dashboard/page.js

```js
import Header from "@/components/Header";
import ButtonAccount from "@/components/ButtonAccount";
import ButtonGradient from "@/components/ButtonGradient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";
import config from "@/config";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await connectMongo();
  const session = await getServerSession(authOptions);
  const user = session ? await User.findById(session.user.id) : null;

  const hasPaid = user && user.customerId;
  const buttonLink = hasPaid ? "/persona-chat" : "/#pricing";
  const buttonTitle = hasPaid ? "Go to your Writing Group AI" : "Upgrade to Premium";

  return (
    <>
      <Header />
      <main className="min-h-screen p-8 pb-24">
        <section className="max-w-xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              User Dashboard
            </h1>
            <ButtonAccount />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <p className="text-xl font-semibold">Welcome, {user?.name} 👋</p>
              <p className="mt-2">Thank you for joining us! We encourage you to explore the experience.</p>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold mb-2">Account Management</h2>
              <p className="text-sm text-gray-600 mb-2">
                To manage your subscription and billing details, click the button in the top right next to User Dashboard.
              </p>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
              <div className="space-y-4">
                <Link href={buttonLink} passHref>
                  <ButtonGradient title={buttonTitle} />
                </Link>
              </div>
            </div>
            {!hasPaid && (
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Upgrade to premium to access all features, including the Writing Group AI.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
```

# app/dashboard/layout.js

```js
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import config from "@/config";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(config.auth.loginUrl);
  }

  return <>{children}</>;
}

```

# app/blog/page.js

```js
import { categories, articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `${config.appName} Blog | Stripe Chargeback Protection`,
  description:
    "Learn how to prevent chargebacks, how to accept payments online, and keep your Stripe account in good standing",
  canonicalUrlRelative: "/blog",
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);
  return (
    <>
      <section className="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
          The {config.appName} Blog
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Learn how to ship your startup in days, not weeks. And get the latest
          updates about the boilerplate
        </p>
      </section>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Browse articles by category
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} tag="div" />
          ))}
        </div>
      </section>
    </>
  );
}

```

# app/blog/layout.js

```js
import { Suspense } from "react";
import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      <Suspense>
        <HeaderBlog />
      </Suspense>

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}

```

# public/blog/introducing-supabase/header.png

This is a binary file of the type: Image

# app/blog/_assets/content.js

```js
import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/marc.png";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "New Features",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Features",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest features added to ShipFast.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
    descriptionShort:
      "Learn how to use ShipFast with these step-by-step tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  marc: "marc",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.marc,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Marc Lou",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Maker of ByeDispute",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Marc is a developer and an entrepreneur. He's built 20 startups in the last 3 years. 6 were profitable and 3 were acquired. He's currently building ByeDispute, the #1 Stripe Chargebacks Protection tool.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: marcImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/marc_louvion",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/marclouvion/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/Marc-Lou-Org/ship-fast",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "introducing-supabase",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Introducing Supabase to ShipFast",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Supabase is an open-source Firebase alternative. It's a great tool for building a backend for your app. It's now integrated with ShipFast!",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.feature),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.marc),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2023-11-20",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Supabase and ShipFast logo combined",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Supabase and ShipFast logo combined"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Supabase is an open-source Firebase alternative. It&apos;s a great
            tool for building a backend for your app. It&apos;s now integrated
            with ShipFast!
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. Create a supabase account</h3>
          <p className={styles.p}>
            First, go to{" "}
            <a href="https://supabase.com/" className="link link-primary">
              Supabase
            </a>{" "}
            and create an account. It&apos;s free for up to 10,000 rows per
            table.
            <br />
            Then create a new project and a new table. You can use the following
            SQL schema:
          </p>

          <pre className={styles.code}>
            <code>
              {`CREATE TABLE public.users (
  id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  email text NOT NULL,
  password text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);`}
            </code>
          </pre>
        </section>

        <section>
          <h3 className={styles.h3}>2. Add your credentials to ShipFast</h3>
          <p className={styles.p}>
            Copy the <span className={styles.codeInline}>API URL</span> and{" "}
            <span className={styles.codeInline}>API Key</span> from your
            Supabase project settings and add them to your ShipFast project
            settings. Add these files to your project:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>.env.local</li>
            <li className={styles.li}>.env.production</li>
          </ul>
        </section>
      </>
    ),
  },
];

```

# app/blog/[articleId]/page.js

```js
import Link from "next/link";
import Script from "next/script";
import { articles } from "../_assets/content";
import BadgeCategory from "../_assets/components/BadgeCategory";
import Avatar from "../_assets/components/Avatar";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const article = articles.find((article) => article.slug === params.articleId);

  return getSEOTags({
    title: article.title,
    description: article.description,
    canonicalUrlRelative: `/blog/${article.slug}`,
    extraTags: {
      openGraph: {
        title: article.title,
        description: article.description,
        url: `/blog/${article.slug}`,
        images: [
          {
            url: article.image.urlRelative,
            width: 1200,
            height: 660,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    },
  });
}

export default async function Article({ params }) {
  const article = articles.find((article) => article.slug === params.articleId);
  const articlesRelated = articles
    .filter(
      (a) =>
        a.slug !== params.articleId &&
        a.categories.some((c) =>
          article.categories.map((c) => c.slug).includes(c.slug)
        )
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <Script
        type="application/ld+json"
        id={`json-ld-article-${article.slug}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://${config.domainName}/blog/${article.slug}`,
            },
            name: article.title,
            headline: article.title,
            description: article.description,
            image: `https://${config.domainName}${article.image.urlRelative}`,
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            author: {
              "@type": "Person",
              name: article.author.name,
            },
          }),
        }}
      />

      {/* GO BACK LINK */}
      <div>
        <Link
          href="/blog"
          className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
          title="Back to Blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article>
        {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
        <section className="my-12 md:my-20 max-w-[800px]">
          <div className="flex items-center gap-4 mb-6">
            {article.categories.map((category) => (
              <BadgeCategory
                category={category}
                key={category.slug}
                extraStyle="!badge-lg"
              />
            ))}
            <span className="text-base-content/80" itemProp="datePublished">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
            {article.title}
          </h1>

          <p className="text-base-content/80 md:text-lg max-w-[700px]">
            {article.description}
          </p>
        </section>

        <div className="flex flex-col md:flex-row">
          {/* SIDEBAR WITH AUTHORS AND 3 RELATED ARTICLES */}
          <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10">
            <p className="text-base-content/80 text-sm mb-2 md:mb-3">
              Posted by
            </p>
            <Avatar article={article} />

            {articlesRelated.length > 0 && (
              <div className="hidden md:block mt-12">
                <p className=" text-base-content/80 text-sm  mb-2 md:mb-3">
                  Related reading
                </p>
                <div className="space-y-2 md:space-y-5">
                  {articlesRelated.map((article) => (
                    <div className="" key={article.slug}>
                      <p className="mb-0.5">
                        <Link
                          href={`/blog/${article.slug}`}
                          className="link link-hover hover:link-primary font-medium"
                          title={article.title}
                          rel="bookmark"
                        >
                          {article.title}
                        </Link>
                      </p>
                      <p className="text-base-content/80 max-w-full text-sm">
                        {article.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ARTICLE CONTENT */}
          <section className="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20">
            {article.content}
          </section>
        </div>
      </article>
    </>
  );
}

```

# app/api/persona/route.js

```js
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function extractPersonaResponse(fullResponse) {
  const match = fullResponse.match(/<persona_response>([\s\S]*)<\/persona_response>/);
  return match ? match[1].trim() : fullResponse;
}

export async function POST(request) {
  const body = await request.json();
  const { message, user_id, persona, prompt, writerLevel } = body;

  try {
    const combinedPrompt = `${prompt} The writer's level is: ${writerLevel}`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: combinedPrompt },
        { role: "user", content: message }
      ],
    });

    const fullPersonaResponse = completion.choices[0].message.content;
    const filteredResponse = extractPersonaResponse(fullPersonaResponse);

    // Here you could log the interaction or save it to a database
    console.log(`User ${user_id} sent to ${persona}: ${message}`);
    console.log(`Persona responded: ${filteredResponse}`);

    return NextResponse.json({ response: filteredResponse });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}

```

# app/api/lead/route.js

```js
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Lead from "@/models/Lead";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
// Duplicate emails just return 200 OK
export async function POST(req) {
  await connectMongo();

  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const lead = await Lead.findOne({ email: body.email });

    if (!lead) {
      await Lead.create({ email: body.email });

      // Here you can add your own logic
      // For instance, sending a welcome email (use the the sendEmail helper function from /libs/mailgun)
    }

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

```

# app/blog/category/[categoryId]/page.js

```js
import { categories, articles } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import CardCategory from "../../_assets/components/CardCategory";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );

  return getSEOTags({
    title: `${category.title} | Blog by ${config.appName}`,
    description: category.description,
    canonicalUrlRelative: `/blog/category/${category.slug}`,
  });
}

export default async function Category({ params }) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );
  const articlesInCategory = articles
    .filter((article) =>
      article.categories.map((c) => c.slug).includes(category.slug)
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      <section className="mt-12 mb-24 md:mb-32 max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6 md:mb-12">
          {category.title}
        </h1>
        <p className="md:text-lg opacity-80 max-w-xl mx-auto">
          {category.description}
        </p>
      </section>

      <section className="mb-24">
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Most recent articles in {category.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {articlesInCategory.map((article) => (
            <CardArticle
              key={article.slug}
              article={article}
              tag="h3"
              showCategory={false}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Other categories you might like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((category) => (
              <CardCategory key={category.slug} category={category} tag="h3" />
            ))}
        </div>
      </section>
    </>
  );
}

```

# app/blog/author/[authorId]/page.js

```js
import Image from "next/image";
import { authors, articles } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const author = authors.find((author) => author.slug === params.authorId);

  return getSEOTags({
    title: `${author.name}, Author at ${config.appName}'s Blog`,
    description: `${author.name}, Author at ${config.appName}'s Blog`,
    canonicalUrlRelative: `/blog/author/${author.slug}`,
  });
}

export default async function Author({ params }) {
  const author = authors.find((author) => author.slug === params.authorId);
  const articlesByAuthor = articles
    .filter((article) => article.author.slug === author.slug)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <>
      <section className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-24 md:mb-32">
        <div>
          <p className="text-xs uppercase tracking-wide text-base-content/80 mb-2">
            Authors
          </p>
          <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-2">
            {author.name}
          </h1>
          <p className="md:text-lg mb-6 md:mb-10 font-medium">{author.job}</p>
          <p className="md:text-lg text-base-content/80">
            {author.description}
          </p>
        </div>

        <div className="max-md:order-first flex md:flex-col gap-4 shrink-0">
          <Image
            src={author.avatar}
            width={256}
            height={256}
            alt={author.name}
            priority={true}
            className="rounded-box w-[12rem] md:w-[16rem] "
          />

          {author.socials?.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4">
              {author.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="btn btn-square"
                  // Using a dark theme? -> className="btn btn-square btn-neutral"
                  title={`Go to ${author.name} profile on ${social.name}`}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Most recent articles by {author.name}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {articlesByAuthor.map((article) => (
            <CardArticle key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}

```

# app/blog/_assets/components/HeaderBlog.js

```js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import { categories } from "../content";
import ButtonSignin from "@/components/ButtonSignin";

const links = [
  {
    href: "/blog/",
    label: "All Posts",
  },
];

const cta = (
  <ButtonSignin text="Prevent disputes" extraStyle="btn-primary md:btn-sm" />
);

const ButtonPopoverCategories = () => {
  return (
    <Popover className="relative z-30">
      {({ open }) => (
        <>
          <Popover.Button
            className="link no-underline flex flex-nowrap items-center gap-1 text-base-content/80 hover:text-base-content active:text-base-content focus:text-base-content duration-100"
            title="Open Blog categories"
          >
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 duration-200 ${
                open ? "transform rotate-180 " : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-30 mt-3 w-screen max-w-full sm:max-w-sm transform">
              {({ close }) => (
                <div className="overflow-hidden rounded-box shadow-lg ring-1 ring-base-content ring-opacity-5">
                  <div className="relative grid gap-2 bg-base-100 p-2 overflow-hidden">
                    {categories.map((category) => (
                      <div key={category.slug} onClick={() => close()}>
                        <Link
                          className="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-box duration-200"
                          href={`/blog/category/${category.slug}`}
                        >
                          <div className="">
                            <p className="font-medium mb-0.5">
                              {category?.titleShort || category.title}
                            </p>
                            <p className="text-sm opacity-80">
                              {category?.descriptionShort ||
                                category.description}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

const ButtonAccordionCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        type="button"
        className="link no-underline flex justify-between items-center w-full "
      >
        Categories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-200 ${
            isOpen ? "transform rotate-180 " : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/blog/category/${category.slug}`}
                className="text-base-content/80 hover:text-base-content duration-100 link link-hover"
              >
                {category?.titleShort || category.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// This is the header that appears on all pages in the /blog folder.
// By default it shows the logo, the links, and the CTA.
// In the links, there's a popover with the categories.
const HeaderBlog = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200">
      <nav className="max-w-7xl flex items-center justify-between px-8 py-3 mx-auto">
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0 "
            href="/"
            title={`${config.appName} hompage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-lg">{config.appName}</span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-box p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link link-hover text-base-content/80 hover:text-base-content active:text-base-content focus:text-base-content duration-100"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}

          <ButtonPopoverCategories />
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-3 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.appName} hompage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-box p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
                <ButtonAccordionCategories />
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-col">{cta}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBlog;

```

# app/blog/_assets/components/CardCategory.js

```js
import Link from "next/link";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({ category, tag = "h2" }) => {
  const TitleTag = tag;

  return (
    <Link
      className="p-4 bg-base-200 text-base-content rounded-box duration-200 hover:bg-neutral hover:text-neutral-content"
      href={`/blog/category/${category.slug}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag className="md:text-lg font-medium">
        {category?.titleShort || category.title}
      </TitleTag>
    </Link>
  );
};

export default CardCategory;

```

# app/blog/_assets/components/CardArticle.js

```js
import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}) => {
  const TitleTag = tag;

  return (
    <article className="card bg-base-200 rounded-box overflow-hidden">
      {article.image?.src && (
        <Link
          href={`/blog/${article.slug}`}
          className="link link-hover hover:link-primary"
          title={article.title}
          rel="bookmark"
        >
          <figure>
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={600}
              height={338}
              priority={isImagePriority}
              placeholder="blur"
              className="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
            />
          </figure>
        </Link>
      )}
      <div className="card-body">
        {/* CATEGORIES */}
        {showCategory && (
          <div className="flex flex-wrap gap-2">
            {article.categories.map((category) => (
              <BadgeCategory category={category} key={category.slug} />
            ))}
          </div>
        )}

        {/* TITLE WITH RIGHT TAG */}
        <TitleTag className="mb-1 text-xl md:text-2xl font-bold">
          <Link
            href={`/blog/${article.slug}`}
            className="link link-hover hover:link-primary"
            title={article.title}
            rel="bookmark"
          >
            {article.title}
          </Link>
        </TitleTag>

        <div className=" text-base-content/80 space-y-4">
          {/* DESCRIPTION */}
          <p className="">{article.description}</p>

          {/* AUTHOR & DATE */}
          <div className="flex items-center gap-4 text-sm">
            <Avatar article={article} />

            <span itemProp="datePublished">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;

```

# app/blog/_assets/components/BadgeCategory.js

```js
import Link from "next/link";

// This is the category badge that appears in the article page and in <CardArticle /> component
const Category = ({ category, extraStyle }) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={`badge badge-sm md:badge-md hover:badge-primary ${
        extraStyle ? extraStyle : ""
      }`}
      title={`Posts in ${category.title}`}
      rel="tag"
    >
      {category.titleShort}
    </Link>
  );
};

export default Category;

```

# app/blog/_assets/components/Avatar.js

```js
import Link from "next/link";
import Image from "next/image";

// This is the author avatar that appears in the article page and in <CardArticle /> component
const Avatar = ({ article }) => {
  return (
    <Link
      href={`/blog/author/${article.author.slug}`}
      title={`Posts by ${article.author.name}`}
      className="inline-flex items-center gap-2 group"
      rel="author"
    >
      <span itemProp="author">
        <Image
          src={article.author.avatar}
          // alt={`Avatar of ${article.author.name}`}
          alt=""
          className="w-7 h-7 rounded-full object-cover object-center"
          width={28}
          height={28}
        />
      </span>
      <span className="group-hover:underline">{article.author.name}</span>
    </Link>
  );
};

export default Avatar;

```

# app/api/stripe/create-portal/route.js

```js
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import { createCustomerPortal } from "@/libs/stripe";
import User from "@/models/User";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await connectMongo();

      const body = await req.json();

      const { id } = session.user;

      const user = await User.findById(id);

      if (!user?.customerId) {
        return NextResponse.json(
          {
            error:
              "You don't have a billing account yet. Make a purchase first.",
          },
          { status: 400 }
        );
      } else if (!body.returnUrl) {
        return NextResponse.json(
          { error: "Return URL is required" },
          { status: 400 }
        );
      }

      const stripePortalUrl = await createCustomerPortal({
        customerId: user.customerId,
        returnUrl: body.returnUrl,
      });

      return NextResponse.json({
        url: stripePortalUrl,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e?.message }, { status: 500 });
    }
  } else {
    // Not Signed in
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}

```

# app/api/stripe/create-checkout/route.js

```js
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import { createCheckout } from "@/libs/stripe";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export async function POST(req) {
  const body = await req.json();

  if (!body.priceId) {
    return NextResponse.json(
      { error: "Price ID is required" },
      { status: 400 }
    );
  } else if (!body.successUrl || !body.cancelUrl) {
    return NextResponse.json(
      { error: "Success and cancel URLs are required" },
      { status: 400 }
    );
  } else if (!body.mode) {
    return NextResponse.json(
      {
        error:
          "Mode is required (either 'payment' for one-time payments or 'subscription' for recurring subscription)",
      },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    await connectMongo();

    const user = await User.findById(session?.user?.id);

    const { priceId, mode, successUrl, cancelUrl } = body;

    const stripeSessionURL = await createCheckout({
      priceId,
      mode,
      successUrl,
      cancelUrl,
      // If user is logged in, it will pass the user ID to the Stripe Session so it can be retrieved in the webhook later
      clientReferenceId: user?._id?.toString(),
      // If user is logged in, this will automatically prefill Checkout data like email and/or credit card for faster checkout
      user,
      // If you send coupons from the frontend, you can pass it here
      // couponId: body.couponId,
    });

    return NextResponse.json({ url: stripeSessionURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

```

# app/api/webhook/stripe/route.js

```js
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import connectMongo from "@/libs/mongoose";
import configFile from "@/config";
import User from "@/models/User";
import { findCheckoutSession } from "@/libs/stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// This is where we receive Stripe webhook events
// It used to update the user data, send emails, etc...
// By default, it'll store the user in the database
// See more: https://shipfa.st/docs/features/payments
export async function POST(req) {
  await connectMongo();

  const body = await req.text();

  const signature = headers().get("stripe-signature");

  let data;
  let eventType;
  let event;

  // verify Stripe event is legit
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  data = event.data;
  eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        // First payment is successful and a subscription is created (if mode was set to "subscription" in ButtonCheckout)
        // ✅ Grant access to the product

        const session = await findCheckoutSession(data.object.id);

        const customerId = session?.customer;
        const priceId = session?.line_items?.data[0]?.price.id;
        const userId = data.object.client_reference_id;
        const plan = configFile.stripe.plans.find((p) => p.priceId === priceId);

        if (!plan) break;

        const customer = await stripe.customers.retrieve(customerId);

        let user;

        // Get or create the user. userId is normally pass in the checkout session (clientReferenceID) to identify the user when we get the webhook event
        if (userId) {
          user = await User.findById(userId);
        } else if (customer.email) {
          user = await User.findOne({ email: customer.email });

          if (!user) {
            user = await User.create({
              email: customer.email,
              name: customer.name,
            });

            await user.save();
          }
        } else {
          console.error("No user found");
          throw new Error("No user found");
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.priceId = priceId;
        user.customerId = customerId;
        user.hasAccess = true;
        await user.save();

        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail({to: ...});
        // } catch (e) {
        //   console.error("Email issue:" + e?.message);
        // }

        break;
      }

      case "checkout.session.expired": {
        // User didn't complete the transaction
        // You don't need to do anything here, by you can send an email to the user to remind him to complete the transaction, for instance
        break;
      }

      case "customer.subscription.updated": {
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        // You don't need to do anything here, because Stripe will let us know when the subscription is canceled for good (at the end of the billing cycle) in the "customer.subscription.deleted" event
        // You can update the user data to show a "Cancel soon" badge for instance
        break;
      }

      case "customer.subscription.deleted": {
        // The customer subscription stopped
        // ❌ Revoke access to the product
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        const subscription = await stripe.subscriptions.retrieve(
          data.object.id
        );
        const user = await User.findOne({ customerId: subscription.customer });

        // Revoke access to your product
        user.hasAccess = false;
        await user.save();

        break;
      }

      case "invoice.paid": {
        // Customer just paid an invoice (for instance, a recurring payment for a subscription)
        // ✅ Grant access to the product
        const priceId = data.object.lines.data[0].price.id;
        const customerId = data.object.customer;

        const user = await User.findOne({ customerId });

        // Make sure the invoice is for the same plan (priceId) the user subscribed to
        if (user.priceId !== priceId) break;

        // Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.hasAccess = true;
        await user.save();

        break;
      }

      case "invoice.payment_failed":
        // A payment failed (for instance the customer does not have a valid payment method)
        // ❌ Revoke access to the product
        // ⏳ OR wait for the customer to pay (more friendly):
        //      - Stripe will automatically email the customer (Smart Retries)
        //      - We will receive a "customer.subscription.deleted" when all retries were made and the subscription has expired

        break;

      default:
      // Unhandled event type
    }
  } catch (e) {
    console.error("stripe error: " + e.message + " | EVENT TYPE: " + eventType);
  }

  return NextResponse.json({});
}

```

# app/api/webhook/mailgun/route.js

```js
import { NextResponse } from "next/server";
import { sendEmail } from "@/libs/mailgun";
import config from "@/config";

// This route is used to receive emails from Mailgun and forward them to our customer support email.
// See more: https://shipfa.st/docs/features/emails
export async function POST(req) {
  try {
    // extract the email content, subject and sender
    const formData = await req.formData();
    const sender = formData.get("From");
    const subject = formData.get("Subject");
    const html = formData.get("body-html");

    // send email to the admin if forwardRepliesTo is et & emailData exists
    if (config.mailgun.forwardRepliesTo && html && subject && sender) {
      await sendEmail({
        to: config.mailgun.forwardRepliesTo,
        subject: `${config?.appName} | ${subject}`,
        html: `<div><p><b>- Subject:</b> ${subject}</p><p><b>- From:</b> ${sender}</p><p><b>- Content:</b></p><div>${html}</div></div>`,
        replyTo: sender,
      });
    }

    return NextResponse.json({});
  } catch (e) {
    console.error(e?.message);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

```

# app/api/auth/[...nextauth]/route.js

```js
import NextAuth from "next-auth";
import { authOptions } from "@/libs/next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

```

# app/blog/_assets/images/authors/marc.png

This is a binary file of the type: Image

