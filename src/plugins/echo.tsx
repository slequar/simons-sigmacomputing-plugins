import { useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useActionEffect,
} from "@sigmacomputing/plugin";

import { PluginContainer } from "../components/PluginContainer";
import { StatusItem } from "../components/StatusItem";
import { statusColors } from "../styles/pluginStyles";

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
    <PluginContainer title="🔊 Echo Plugin">
      <StatusItem
        label="Status:"
        value="Ready"
        valueStyle={{ color: statusColors.running }}
      />
      <StatusItem label="Triggers Received:" value={triggerCount} />
    </PluginContainer>
  );
}

export default Echo;
