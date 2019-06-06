export const GA_TRACKING_ID = 'UA-141172940-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageView = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  })
}
