import { AppProvider } from '@/context';
import '@/styles/globals.css'
import ThemeRegistry from '@/theme/ThemeRegistry';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
          <ThemeRegistry>
            <Component {...pageProps} />
          </ThemeRegistry>
      </AppProvider>
    </>
  )

}

