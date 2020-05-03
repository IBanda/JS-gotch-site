export const GA_TRACKING_ID = 'UA-112852641-6';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
