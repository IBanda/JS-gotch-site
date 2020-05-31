import App from 'next/app';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/static/nprogress.css';
import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
export default App;
