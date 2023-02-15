This is an exmaple E-Commerce website made with NextJS 13 [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1) clone this repository and run "npm install" in order to install dependencies

2) Rename "next.config.js_template" into "next.config.js" and replace "env" portion with your data
    - EMAIL_HOST: the SMTP server address for Nodemailer to use
    - EMAIL_USER: e-mail for nodemailer to send from
    - EMAIL_PASS: e-mail send from password
    - EMAIL_FEEDBACK: e-mail for nodemailer to send to
    - STRIPE_PRIVATE_KEY: Your secret key for Stripe. You need to register on https://stripe.com/. Then on the page https://dashboard.stripe.com/test/apikeys you can find your secret key. WARNING: do not share this key with anyone.
    - CLIENT_URL: URL of the deployed application. Uncomment http://localhost:3000 line in app/[lng]/layout.tsx for dev run

3) launch with command "npm run dev"

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
