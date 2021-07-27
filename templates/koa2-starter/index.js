// eslint-disable-next-line no-console
console.log();

if (process.env.NODE_ENV === 'development') {
  (async () => {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax, import/no-extraneous-dependencies, node/no-unpublished-import
    const dotenv = await import('dotenv');
    dotenv.config(/* { debug: false } */);
  })();
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
import('./src/server.js');
