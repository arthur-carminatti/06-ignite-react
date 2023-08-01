import '../lib/dayjs'
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { globalStyles } from '@/styles/global'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.google-calendar.arthucarminatti.com.br',
            siteName: 'Google Calendar',
          }}
        />

        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
