import React, { useState, useEffect } from "react";
import ReactUV from "../../src";

const DEFAULT_CONFIG = {
  debug: true,
  colors: {
    test: false,
  },
};

function App() {
  const [assumeLoaded, setAssumeLoaded] = useState(false);

  const options = {
    debug: true,
    src: "https://{YOUR_ORG}.uservoice.com/widget_environment/{YOUR_ORG_JS_UNIQUE_CODE}.js",
    trigger: { mode: "feedback", trigger_position: "top-right" },
    colors: {
      accent_color: "#2B78C5",
      trigger_color: "white",
      trigger_background_color: "rgba(46, 49, 51, 0.6)",
    },
  };


  const handleLoaded = (didLoad) => {

    setAssumeLoaded(didLoad);

    // -- Triggers --
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
  };

  useEffect(() => {
    // when we are ready load in UV with a callback so we can know it loaded ok
    ReactUV.initialize(options, handleLoaded);
  }, []);

  return (
    <div>
      <h4>
        App is Initialised. You should see UV displayed. Refresh page to
        reset.
      </h4>
      <p>Hej! 👋</p>
      <>Assume loaded: {assumeLoaded ? 'yes' : 'no'}</>
    </div>
  );
}

export default App;
