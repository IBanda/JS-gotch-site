import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer= window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js',new Date());

                        gtag('config','${GA_TRACKING_ID}',{
                            page_path: window.location.pathname
                        });
                        `,
            }}
          />
          <script src="js/vendor/fontfaceobserver.js" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function() { try {
          var mode = localStorage.getItem('theme');
          if(mode){
          document.body.className=mode;
          }
          document.body.className += " wf-inactive";
                if(sessionStorage.foutFontsLoaded){
                  document.body.classList.remove("wf-inactive");
                  document.body.classList.add("wf-active");
                  return
                }

                var normal = new FontFaceObserver('gilroymedium')
                var bold= new FontFaceObserver('gilroybold')

                Promise.all([normal.load(),bold.load()]).then(function(){
                  document.body.classList.remove("wf-inactive");
                  document.body.classList.add("wf-active")
                }).catch(function(error){
                  console.log(error.message)
                })
              sessionStorage.foutFontsLoaded = true;
      } catch (e) {} })();
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
