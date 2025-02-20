//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

//Import bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: "Real Estate Agency App",
  description: "Real Estate App By Saad Farah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SearchForm />
        <Nav />
        {children}
        <BackToTopBtn />
        <Footer />
        <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
        crossOrigin="anonymous">
        </script>
      </body>
    </html>
  );
}
