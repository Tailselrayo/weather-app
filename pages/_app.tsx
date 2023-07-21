import { AppShell } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell bg="blue.3" miw="100vw" mih="100vh">
      <Component {...pageProps} />
    </AppShell>
  )
}
