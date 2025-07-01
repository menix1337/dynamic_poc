# Dynamic Labs Wallet Switching Crash - Reproduction Steps

## Bug Description

After page refresh (F5), attempting to switch between connected MetaMask wallets without logging out causes the application to crash.

## Error Message & Stack Trace

**Error:**

```
TypeError: lastSelectedWalletCredential.lastSelectedAt.getTime is not a function
```

**Stack Trace:**

- updatePrimaryWalletId (Dynamic Labs SDK)
- useWalletConnectors (Dynamic Labs SDK)
- ... (see screenshot for full trace)

**Screenshot:**
![Error Screenshot](https://i.imgur.com/vPnuOdp.png)

## Prerequisites

- Chrome browser
- Two different MetaMask wallets with different accounts
- Dynamic Labs environment properly configured

## Reproduction Steps

### Step 1: Initial Login

1. Open the application in Chrome
2. Click "Connect Wallet" using Dynamic Widget
3. Connect with MetaMask
4. Verify you are logged in and can see your primary wallet address

### Step 2: Connect Second Wallet

1. While still logged in, click on the Dynamic Widget
2. Connect a second MetaMask wallet (different account)
3. Verify both wallets are now connected to the user
4. Test switching between the two wallets - this should work normally

### Step 3: Page Refresh

1. Press F5 to refresh the page
2. Verify you are still logged in (session persists)
3. Verify you can see your primary wallet address

### Step 4: Crash Trigger

1. **WITHOUT logging out**, try to switch between the connected wallets using the Dynamic Widget
2. **CRASH OCCURS**: The application will crash/freeze

## Expected vs Actual Behavior

**Expected**: Should be able to switch between connected wallets after page refresh
**Actual**: Application crashes when attempting to switch wallets after page refresh

## Technical Details

- Dynamic Labs SDK version: 4.20.11
- Next.js version: 14.2.5
- Browser: Chrome
- Wallet: MetaMask with multiple accounts

## Notes

- The crash only occurs after page refresh
- Logging out and back in resolves the issue temporarily
- The crash appears to be related to wallet state management after session restoration
