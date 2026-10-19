# Contact Form Setup: deliver discovery call requests to your inbox

Goal: when someone submits the form on `/contact`, the details (name, email, company, service, message) arrive at `hello@onevialabs.com`, which forwards to `hello.onevialabs@gmail.com`.

The site uses [Web3Forms](https://web3forms.com) (free, no backend needed). The code is already in `src/pages/Contact.tsx`. You only need to create a key and configure it.

## Step 1: Make sure hello@onevialabs.com forwards to Gmail

1. Open your domain/email provider (Cloudflare Email Routing, Zoho, Namecheap, Google Workspace, etc.).
2. Create the forwarding rule: `hello@onevialabs.com` -> `hello.onevialabs@gmail.com`.
3. Verify the destination (Gmail sends a confirmation link; click it).
4. Test: send an email to `hello@onevialabs.com` from another account and confirm it lands in Gmail.

## Step 2: Create a Web3Forms access key

1. Go to https://web3forms.com and click **Create your Access Key**.
2. Enter the email to receive submissions. Use `hello.onevialabs@gmail.com` (the real inbox). Using the forwarding address `hello@onevialabs.com` also works once Step 1 is done.
3. Open the confirmation email and verify.
4. Copy the access key you receive.

## Step 3: Add the key locally

1. Copy `.env.example` to `.env.local` in the project root.
2. Set:

   ```
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```

3. Restart `npm run dev`.

## Step 4: Test locally

1. Open http://localhost:5173/contact.
2. Fill out the form and click **Request discovery call**.
3. You should see "Thank you!" and receive an email titled `Discovery call request from <name>` within a minute. Check Spam on the first run.

## Step 5: Add the key in production (Vercel)

1. Vercel dashboard -> your project -> **Settings** -> **Environment Variables**.
2. Add `VITE_WEB3FORMS_KEY` with the same value, for Production (and Preview if desired).
3. **Redeploy** (Vite bakes env vars in at build time).
4. Submit a test from the live site.

## Step 6 (optional): Harden it

- In the Web3Forms dashboard, restrict the key to your domain (`onevialabs.com`).
- Enable reCAPTCHA/hCaptcha in the dashboard if you receive spam. The form already has a hidden honeypot field (`botcheck`).
- To receive the discovery call requests in a Gmail label, create a filter on subject `Discovery call request`.

## Behaviour notes

- The access key is public by design (it ships in the browser bundle). It can only send to the email you registered.
- If `VITE_WEB3FORMS_KEY` is missing, the form falls back to opening the visitor's email client with a prefilled message to `hello@onevialabs.com`.
- On failure, the user sees an error pointing to `hello@onevialabs.com`.

## Form changes made

- **Company** is optional (labelled "Company (optional)", not `required`).
- **Message** placeholder is now: "We'd love to hear your story. Tell us about you, your idea, and where you'd like to go."
