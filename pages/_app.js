import '../styles/globals.css'
import AuthProvider from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

export const runtime = 'experimental-edge';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header/>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
