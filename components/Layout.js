import React from 'react';
import Head from 'next/head';
import Header from './Header';
import AttributeFooter from './AttributeFooter';
import { Container } from 'react-bootstrap';
import propTypes from 'prop-types';
const Layout = ({ themeHandler, children }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico"></link>
        <title>JS Gotcha</title>
      </Head>
      <Header onThemeHandler={themeHandler} />
      <Container>
        {children}
        <AttributeFooter />
      </Container>

      <style global jsx>{`
        * {
          box-sizing: border-box;
        }

        @font-face {
          font-family: 'gilroybold';
          src: url('/fonts/radomir_tinkov_-_gilroy-bold-webfont.woff2')
              format('woff2'),
            url('/fonts/radomir_tinkov_-_gilroy-bold-webfont.woff')
              format('woff'),
            url('/fonts/radomir_tinkov_-_gilroy-bold-webfont.OTF') format('otf');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'gilroymedium';
          src: url('/fonts/radomir_tinkov_-_gilroy-medium-webfont.woff2')
              format('woff2'),
            url('/fonts/radomir_tinkov_-_gilroy-medium-webfont.woff')
              format('woff'),
            url('/fonts/radomir_tinkov_-_gilroy-medium-webfont.OTF')
              format('otf');
          font-weight: normal;
          font-style: normal;
        }
        body {
          font-family: Georgia, serif;
          font-size: 1em;
          font-weight: 400;
          line-height: 1.25;

          transition: background-color 0.5s linear;
          position: relative;
        }
        body.wf-active {
          font-family: Lora, Georgia, serif;
        }
        body.wf-active h1,
        body.wf-active h2,
        body.wf-active h3,
        body.wf-active h4,
        body.wf-active h5 {
          font-family: Lora, Georgia, serif;
          font-weight: 700;
        }
        body.wf-inactive h1,
        body.wf-inactive h2,
        body.wf-inactive h3,
        body.wf-inactive h4,
        body.wf-inactive h5 {
          font-family: Georgia, serif;
          font-weight: 700;
        }

        body.wf-inactive {
          font-family: Georgia, serif;
          font-weight: 500;
        }
        .code-block {
          background-color: #333;
          width: 100%;
          padding: 1em;
          margin:1em 0;
        }
        .quote-block {
          padding: 0.2em 1em;
          border-left: 2px solid #f7e032;
          margin:1em 0;
        }
        pre {
          color: #fff;
        }
        svg.icon,
        svg.arrow {
          width: 1em;
          height: 1em;
        }
        svg.icon {
          margin-right: 0.5em;
        }
        .dark p {
          color: #fff;
        }
        .dark a {
          color: #f7e032 !important;
        }
        .dark {
          background-color: #263238;
        }
        .dark svg.icon {
          fill: #f7e032;
        }
        .dark svg.arrow {
          fill: #fff;
        }
        .light h1,
        .light h2,
        .light h3,
        .light h4,
        .light h5 {
          font-family: gilroybold;
          color: #000;
        }
        .dark h1,
        .dark h2,
        .dark h3,
        .dark h4,
        .dark h5 {
          color: #f7e032;
        }

        a {
          color: #000 !important;
          text-decoration: none;
          padding-bottom: 0.4em;
        }

        img {
          width: 100%;
        }
        @media (min-width: 1200px) {
          .container,
          .container-lg,
          .container-md,
          .container-sm,
          .container-xl {
            max-width: 100%;
            padding: 0 20%;
          }
        }
        h1,
        h2,
        h3,
        p {
          max-width: 40em;
        }
        h1 {
          font-size: 2em;
          line-height: 1.25;
        }
        h2 {
          font-size: 1.625em;
          line-height: 1.15384615;
        }
        h3 {
          font-size: 1.375em;
          line-height: 1.13636364;
        }

        @media only screen and (min-width: 43.75em) {
          h1,
          h2,
          h3,
          p {
            max-width: 75em;
          }
        }

        @media only screen and (min-width: 56.25em) {
          body {
            line-height: 1.375;
          }
          h1,
          h2,
          h3,
          p {
            max-width: 75em;
          }
          h1 {
            font-size: 2.5em;
            line-height: 1.125;
          }
          h2 {
            font-size: 2em;
            line-height: 1.25;
          }
          h3 {
            font-size: 1.5em;
            line-height: 1.25;
          }
        }

        @media only screen and (min-width: 71.875em) {
          body {
            line-height: 1.375;
          }
          h1,
          h2,
          h3,
          p {
            max-width: 75em;
          }
          h1 {
            font-size: 3em;
            line-height: 1.05;
          }
          h2 {
            font-size: 2.25em;
            line-height: 1.25;
          }
          h3 {
            font-size: 1.75em;
            line-height: 1.25;
          }
        }

        @media only screen and (min-width: 81.25em) {
          body {
            font-size: 1.2rem;

            line-height: 1.75;
          }
          h1,
          h2,
          h3,
          p {
            max-width: 75em;
          }
          h1 {
            font-size: 3em;
            line-height: 1.05;
          }
          h2 {
            font-size: 2.25em;

            line-height: 1.25;
          }
          h3 {
            font-size: 1.75em;
            line-height: 1.25;
          }
        }
      `}</style>
    </div>
  );
};
Layout.propTypes = {
  themeHandler: propTypes.func,
  children: propTypes.array,
};
export default Layout;
