console.log();

if (process.env.NODE_ENV === 'development') {
  const dotenv = await import('dotenv');
  dotenv.config(/* { debug: false } */);
}

import('./src/app.js');
