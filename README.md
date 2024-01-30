This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

"dependencies": {
"@mantine/core": "^7.4.2",
"@mantine/hooks": "^7.4.2",
"@prisma/client": "^5.8.1",
"@vercel/og": "^0.6.2",
"framer-motion": "^10.18.0",
"next": "^14.1.0",
"next-seo": "^6.4.0",
"next-sitemap": "^4.2.3",
"react": "^18",
"react-dom": "^18",
"react-hook-form": "7.48.2"
},
"devDependencies": {
"@next/bundle-analyzer": "^14.1.0",
"@svgr/webpack": "^8.1.0",
"@types/node": "^20",
"@types/react": "^18",
"@types/react-dom": "^18",
"eslint": "^8",
"eslint-config-next": "^14.1.0",
"postcss": "^8.4.33",
"postcss-preset-mantine": "^1.12.3",
"postcss-simple-vars": "^7.0.1",
"prettier": "^3.2.4",
"prisma": "^5.8.1",
"typescript": "^5"
},
