import '../styles/globals.css';
import SocialIcon from '@/components/SocialIcon';
import { Open_Sans, Source_Sans_3 } from 'next/font/google';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sourceSans = Source_Sans_3({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});

// const openSans = Open_Sans({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   style: ['normal', 'italic'],
//   display: 'swap',
// });

export const metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Portfolio | Portfolio', // a default is required when creating a template
  },
  description: "Portfolio website of Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        {children}
        <SocialIcon />
      </body>
    </html>
  )
};
