import { ActionIcon, AppShell, BackgroundImage, Group, Header, Title } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BackgroundImage src="/sunny-background.jpg">

      <AppShell
        miw="100vw"
        mih="100vh"
        header={
          <Header height={60} style={{ borderBottom: 0, backgroundColor: "rgba(0,0,0,0.4)" }}>
            <Group h="100%" align="center">
              <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
                <IconHome color="white" size={40} />
                <Title color="gray.1">WeatherApp</Title>
              </Link>
            </Group>


          </Header>
        }
      >
        <Component {...pageProps} />
      </AppShell>
    </BackgroundImage>
  )
}
