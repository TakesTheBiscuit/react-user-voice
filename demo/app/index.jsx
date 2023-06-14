import React, { PureComponent } from "react";
import ReactUV from "../../src";

const DEFAULT_CONFIG = {
  debug: true,
  colors: {
    test: false,
  },
};

export default class App extends PureComponent {
  constructor(props, context) {
    super(props, context);

    const uvOptions = {
      debug: true,
      src: "https://nominet.uservoice.com/widget_environment/zLIKKOOpXIyhLFgX0I9TQ.js",
      trigger: { mode: "satisfaction", trigger_position: "top-right" },
      colors: {
        accent_color: "#2B78C5",
        trigger_color: "white",
        trigger_background_color: "rgba(46, 49, 51, 0.6)",
      },
    };

    ReactUV.initialize(uvOptions);
  }

  render() {
    return (
      <div>
        <h4>
          App is Initialised. You should see UV displayed. Refresh page to
          reset.
        </h4>
        <p>Hej! 👋</p>
      </div>
    );
  }
}
