# Email integration (Contact form)

This project uses EmailJS to send contact form messages from the client to your personal email.

Setup steps:

1. Create an account at https://www.emailjs.com/ and set up an Email Service and an Email Template.
2. In the Email Template include variables: `from_name`, `from_email`, and `message`.
3. Get these values from the EmailJS dashboard:
   - Service ID
   - Template ID
   - Public Key (formerly user ID)
4. Create a Vite environment file at the project root (e.g. `.env` or `.env.local`) and add:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

5. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Notes:
- Environment variables must start with `VITE_` for Vite to expose them to the client.
- If you prefer not to use EmailJS, you can implement a server-side endpoint to send email via SMTP or an email provider API.
