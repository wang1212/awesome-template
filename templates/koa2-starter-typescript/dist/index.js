// eslint-disable-next-line no-console
console.log();
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
        // eslint-disable-next-line node/no-unsupported-features/es-syntax, import/no-extraneous-dependencies, node/no-unpublished-import
        const dotenv = await import('dotenv');
        dotenv.config( /* { debug: false } */);
    })();
}
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import('./src/server');
//# sourceMappingURL=index.js.map