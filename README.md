# Dynamic POC - NextJS with Dynamic Labs Integration

This is a proof of concept implementing Dynamic Labs wallet authentication with Next.js 14.2.5.

## Features

- Dynamic Labs wallet integration
- Ethereum and Solana wallet support
- TypeScript support
- Tailwind CSS styling

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env.local`
   - Replace `YOUR_ENVIRONMENT_ID_HERE` with your actual Dynamic Labs environment ID

4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID`: Your Dynamic Labs environment ID (found in your Dynamic Labs dashboard)

## Security Note

⚠️ **Important**: Never commit your actual environment ID to version control. The `.env.local` file is already in `.gitignore` to prevent accidental commits.
