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
            : "price_1Pf63SGn65zs7jMV5p68kZfW",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Kickstart your storytelling adventure",
        // The price you want to display, the one user will be charged on Stripe.
        price: 15,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 30,
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
            : "price_1Pf63RGn65zs7jMVMCcFJzuo",
        name: "Advanced",
        description: "Elevate your writing to new heights",
        price: 25,
        priceAnchor: 50,
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
          { name: "Conquer epics with 100,000 word capacity per review" },
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
