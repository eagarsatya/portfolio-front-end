import './globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Nav from '../components/Nav';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee);

export const metadata = {
  title: 'AllofAKind',
  description: 'Eagar Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link 
          rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="App">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
