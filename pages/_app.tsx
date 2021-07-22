import "tailwindcss/tailwind.css";
import "@celo-tools/use-contractkit/lib/styles.css";
import type { AppProps } from "next/app";
import { ContractKitProvider } from "@celo-tools/use-contractkit";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <>
          <ContractKitProvider
            dapp={{
              name: "Celo x WalletConnect",
              description: "Example Dapp showcasing WalletConnect and Celo",
              url: "https://eth-cc-celo-walletconnect.com",
              icon: "https://walletconnect.org/walletconnect-logo.png",
            }}
          >
            <Component {...pageProps} />
          </ContractKitProvider>
        </>
      )}
    </div>
  );
}
export default MyApp;
