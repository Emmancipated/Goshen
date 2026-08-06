# Goshen Shelters

Website for **Goshen Shelters** — a refuge run by **God's Home for Women Foundation**, a registered Nigerian NGO supporting women and children affected by domestic violence and sexual abuse.

The site provides safe, confidential information and help:

- Emergency helpline and **"Exit site"** quick escape button
- Guidance for survivors, worried friends/family, and professional referrals
- Details of the shelter's services (housing, counselling, skills training, reintegration)
- Online and bank-transfer donations via Paystack
- Contact form powered by Resend

Built with [Next.js](https://nextjs.org) (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or your preferred package manager)

### Installation

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  page.tsx          Home page
  about/            Our story and impact
  contact/          Contact form + page
  donate/           Donation page (Paystack + bank transfer)
  get-help/         Help for survivors, worried others, and referrals
  api/contact/      Server route that sends contact-form emails via Resend
components/         Shared UI (header, footer, icons, animations, etc.)
public/             Static assets and images
```

## Key Pages

- **Home** — hero, services, warning signs, impact stats, donate CTAs
- **Get Help** — confidential help for survivors, worried friends/family, and referrals
- **About** — the foundation's story and impact
- **Donate** — online card donations (Paystack) and bank transfer details
- **Contact** — phone, WhatsApp, and a message form sent via Resend

## Privacy & Safety

The site prioritises the safety of visitors: the hero banner includes a prominent **Exit site** button, and the helpline is promoted as confidential and available 24 hours a day. Keep any survivor-facing copy reassuring and free of judgement.

## Deployment

The app can be deployed to any Node.js host. The easiest path is [Vercel](https://vercel.com/new):

```bash
npm run build
```

Set your environment variables in your hosting platform's dashboard before deploying.

## License

Private project — not licensed for redistribution.
