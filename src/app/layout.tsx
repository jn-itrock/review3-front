"use client";
import type { Metadata } from 'next'
import {  Mulish} from 'next/font/google'
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { publicProvider } from 'wagmi/providers/public';
import { LensConfig, development } from '@lens-protocol/react-web';
import { bindings as wagmiBindings } from '@lens-protocol/wagmi';
import { LensProvider } from '@lens-protocol/react-web';

const mulish = Mulish({ subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai, polygon],
    [publicProvider()],
  );

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [
      new InjectedConnector({
        options: {
          shimDisconnect: false,
        },
      }),
    ],
  });

  const lensConfig: LensConfig = {
    bindings: wagmiBindings(),
    environment: development,
  };

  return (
    <html lang="en">
      <body className={mulish.className}>
        <WagmiConfig config={config}>
          <LensProvider config={lensConfig}>
            {children}
          </LensProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
