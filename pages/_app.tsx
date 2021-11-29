import { StyledApplicationBackground } from '../src/operatorslist/style';
import 'normalize.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledApplicationBackground>
      <Component {...pageProps} />
    </StyledApplicationBackground>
  );
}

export default MyApp;
