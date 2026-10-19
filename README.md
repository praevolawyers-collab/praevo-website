# Praevo Lawyers website

Next.js website for praevo.com.au.

## Editing text
Almost all wording, practice areas and team profiles are in `content/site.ts`. Items in `[square brackets]` must be confirmed before launch. Legal pages (privacy, disclaimer, costs, terms) are drafts in `app/legal/[doc]/page.tsx` and must be reviewed by the principal.

## Before launch
1. Fill every `[placeholder]` (search the project for `[`).
2. Download team photos from the old site into `public/team/` and update the `photo` paths in `content/site.ts`.
3. Review and finalise the four legal pages.
4. Migrate and update the blog articles listed in `app/insights/page.tsx`.

## Deploying on Vercel
1. Sign in to vercel.com with the `praevolawyers-collab` GitHub account and import this repository.
2. Add the environment variables in `.env.example` (Calendly link, Resend key and email addresses).
3. Deploy. Check the preview URL, then add the domain `praevo.com.au` in Vercel → Domains and update the DNS records at your domain registrar as Vercel instructs.
4. Old WordPress URLs redirect automatically (see `next.config.ts`).

## Enquiry emails
Forms send email through Resend. Create a free Resend account, verify the praevo.com.au domain, and set `RESEND_API_KEY`, `ENQUIRY_TO` and `ENQUIRY_FROM`. Enquiries are not stored on the website.

## Local development
```
npm install
npm run dev
```
Open http://localhost:3000.
