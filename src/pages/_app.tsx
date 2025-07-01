import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId:
          process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ||
          "YOUR_ENVIRONMENT_ID_HERE",
        walletConnectors: [EthereumWalletConnectors, SolanaWalletConnectors],
      }}
    >
      <Component {...pageProps} />
    </DynamicContextProvider>
  );
}
