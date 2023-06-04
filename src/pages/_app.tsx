import '../styles/global.css';
import '@/scss/globals.css';
import '@/scss/index.scss';

import type { AppProps } from 'next/app';
import { Fira_Code, Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
const firaCode = Fira_Code({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      :root {
        --raleway: ${raleway.style.fontFamily};
        --fira-code: ${firaCode.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />;
  </>
);

export default MyApp;
