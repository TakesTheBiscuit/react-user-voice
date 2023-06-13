let isLoaded = false;
export default function (options) {
  if (isLoaded) return;
  isLoaded = true;
  
  if (options && options.debug) {
    console.info('UserVoice initialize starting');
  }

  const onerror = options && options.onerror;

  // UserVoice Javascript SDK developer documentation:
  // https://help.uservoice.com/hc/en-us/articles/360035418493?utm_source=feedback&utm_medium=referral

  /* eslint-disable */

  // Include the UserVoice JavaScript SDK (only needed once on a page)
  const UserVoice = window.UserVoice || [];
  (function () {
    var uv = document.createElement('script');
    uv.type = 'text/javascript';
    uv.async = true;
    uv.src = options.src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(uv, s);
  })();

  // Set colors
  if (options.colors) {
    if (options.colors) {
        console.info('UV Colors ON', options.colors);
    }
    UserVoice.push([
        'set',
        options.colors,
      ]);
  }
  
  // Identify the user and pass traits
  if (options.identify) {
    if (options.debug) {
        console.info('UV Identify ON', options.identify);
    }
    UserVoice.push([
        'identify',
        options.identify
      ]);
  }
  
  // Set the trigger
  if (options.trigger) {
    if (options.debug) {
        console.info('UV trigger has been set', options.trigger);
    }
    // Add default trigger to the bottom-right corner of the window:
    UserVoice.push(['addTrigger', options.trigger]);
  }
 
  /* eslint-enable */
}
