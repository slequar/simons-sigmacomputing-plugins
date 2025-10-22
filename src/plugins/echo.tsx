import { useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useActionEffect,
} from "@sigmacomputing/plugin";

import {
  pluginContainerStyles,
  pluginHeaderStyles,
  pluginTitleStyles,
  pluginContentStyles,
  pluginStatusItemStyles,
  pluginLabelStyles,
  pluginValueStyles,
  statusColors,
} from "../styles/pluginStyles";

interface EchoConfig {
  trigger: string;
  output: string;
}

function Echo() {
  const [triggerCount, setTriggerCount] = useState(0);

  useEditorPanelConfig([
    { type: "action-effect", name: "trigger", label: "Trigger" },
    { type: "action-trigger", name: "output", label: "Output" },
  ]);

  const config: EchoConfig = useConfig() as EchoConfig;

  // Set up action trigger (sending data out)
  const sendOutput = useActionTrigger(config.output);

  // On receiving effect (input to plugin), send output
  useActionEffect(config.trigger, () => {
    setTriggerCount((prev) => prev + 1);
    sendOutput();
  });

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>🔊 Echo Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Status:</span>
          <span
            style={{
              ...pluginValueStyles,
              color: statusColors.running,
            }}
          >
            Ready
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Triggers Received:</span>
          <span style={pluginValueStyles}>{triggerCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Echo;

