export default function (options, callback) {
  if (options && options.debug) {
    console.info('UserVoice initialize starting');
  }
  var loadedUvEvent = new Event("loadedUV");
  var onerror = options && options.onerror;

  // UserVoice Javascript SDK developer documentation:
  // https://help.uservoice.com/hc/en-us/articles/360035418493?utm_source=feedback&utm_medium=referral

  /* eslint-disable */

  // Include the UserVoice JavaScript SDK (only needed once on a page)
  var UserVoice = window.UserVoice || [];
  (function () {
    var uv = document.createElement('script');
    uv.type = 'text/javascript';
    uv.async = true;
    uv.src = options.src;
    // user tracking (assumed)
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(uv, s);

    // Once the script finishes loading fire the event
    uv.onload = function () {
      if (options && options.debug) {
        console.log('UV script has loaded, triggering event');
      }
      // Dispatch the event indicating that the UserVoice script has loaded
      var loadedUvEvent = new Event('loadedUV');
      document.dispatchEvent(loadedUvEvent);
    };

    // Setup a listener for later
    document.addEventListener('loadedUV', function (e) {
      if (options && options.debug) {
        console.log('UV loaded and calling back true');
        console.log(UserVoice);
      }
      callback(true); // Callback function when the script has finished loading
    });
  })();

  /* eslint-enable */
}