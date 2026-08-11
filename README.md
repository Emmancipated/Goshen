# Goshen Shelters

Website for **Goshen Shelters** — a refuge run by **God's Home for Women Foundation**, a registered Nigerian NGO supporting women and children affected by domestic violence and sexual abuse.

Built to the Foundation's **Homepage Functional Requirements**, **Support/Donate Page Functional Requirements (FRS)** and **Non-Functional Requirements Specification**, inspired by the WARIF website's survivor-centred structure.

## Site structure

- **Urgent Help Bar** — always visible at the top; `Get Help Now` opens a Call / WhatsApp / Email help modal
- **Navigation** — Home · About Us · Our Services · Impact · Media · Contact Us · Donate
- **Home** — hero ("A safe place. A new beginning."), three quick-action cards, impact stats + Founder's message video, survivor testimonial carousel
- **About Us** — story, mission, values, services, impact, challenges
- **Our Services** — the full list of shelter services and the restoration journey
- **Impact** — impact statistics and stories of change
- **Media** — founder's videos and photo gallery (extensible)
- **Donate** — "Give Hope. Restore Dignity. Change Lives." hero plus five support options (Make a Donation, Volunteer, Donate Items, Corporate Partnership, Fundraise for Goshen), each opened via modal
- **Get Help** — confidential help for survivors, worried friends/family, and referrals
- **Contact** — phone, WhatsApp, email and a message form sent via Resend

## Key features

- Emergency helpline and **"Exit site"** quick-escape buttons
- Reusable **help modal** (Call | WhatsApp | Email) throughout the site
- Donation flow: frequency (one-time / monthly) → secure payment via **Paystack** or direct bank transfer
- Survivor testimonials carousel (anonymised, consent-aware)
- Founder's message video in a lightbox (`NEXT_PUBLIC_FOUNDER_VIDEO`)
- WCAG-minded accessibility, reduced-motion support and responsive images

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
  services/         Our Services
  impact/           Impact statistics and stories
  media/            Videos and photo gallery
  donate/           Support / Donate page (hero + 5 support cards + modals)
  donate/           donate-form.tsx, donate-modal.tsx, support-options.tsx
  contact/          Contact form + page
  get-help/         Help for survivors, worried others, and referrals
  api/contact/      Server route that sends contact-form emails via Resend
components/         Shared UI (header, footer, modals, icons, animations, etc.)
public/             Static assets and images
```

## Environment Variables

See `.env.example`. Key variables:

- `NEXT_PUBLIC_PAYSTACK_KEY` — Paystack public key (secure card donations)
- `NEXT_PUBLIC_BANK_NAME` / `NEXT_PUBLIC_BANK_ACCOUNT` / `NEXT_PUBLIC_BANK_ACCOUNT_NAME` — bank transfer details
- `NEXT_PUBLIC_FOUNDER_VIDEO` — URL of the Founder's message video (optional)
- `RESEND_API_KEY` — for the contact form emails
- `CONTACT_FROM_EMAIL` — sender address for contact emails

## Privacy & Safety

The site prioritises visitor safety: the urgent-help bar and hero include prominent **Exit site** buttons, the helpline is confidential and available 24/7, the shelter's residential address is never displayed, and survivor testimonials are anonymised. Keep all survivor-facing copy reassuring and free of judgement.

## Deployment

The app can be deployed to any Node.js host. The easiest path is [Vercel](https://vercel.com/new):

```bash
npm run build
```

Set your environment variables in your hosting platform's dashboard before deploying.

## License

Private project — not licensed for redistribution.
