import App from 'next/app';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as gtag from '../lib/gtag';
// const _App = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
// _App.propTypes = {
//   Component: propTypes.func,
//   pageProps: propTypes.object,
// };
export default App;
