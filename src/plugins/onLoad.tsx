import { useEffect, useMemo, useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useActionEffect,
  useVariable,
} from "@sigmacomputing/plugin";

import type { ActualVariable_t } from "../types";
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

interface OnLoadConfig_t {
  tick: string;
  delayMs?: string;
  doOneStep: string;
}

function OnLoad() {
  const [hasFired, setHasFired] = useState(false);

  useEditorPanelConfig([
    { type: "action-trigger", name: "tick", label: "Tick" },
    {
      type: "variable",
      name: "delayMs",
      label: "Delay (milliseconds)",
      allowedTypes: ["number"],
    },
    { type: "action-effect", name: "doOneStep", label: "Do One Step" },
  ]);

  const config: OnLoadConfig_t = useConfig() as OnLoadConfig_t;
  const doTick = useActionTrigger(config.tick);
  const [delayMsVar] = useVariable(config.delayMs ?? "");

  // On receiving effect (input to plugin), do the trigger (output from plugin)
  useActionEffect(config.doOneStep, () => {
    doTick();
  });

  // Wait 1s by default
  const delayMs = useMemo(() => {
    const value = delayMsVar?.defaultValue as ActualVariable_t | undefined;
    return value?.type === "number" && value.value !== null
      ? value.value
      : 1000;
  }, [delayMsVar]);

  // Trigger tick once on load with optional delay
  useEffect(() => {
    if (hasFired) {
      return;
    }
    const timer = setTimeout(() => {
      doTick();
      setHasFired(true);
    }, delayMs);
    return () => {
      clearTimeout(timer);
    };
  }, [doTick, delayMs, hasFired]);

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>🚀 OnLoad Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Status:</span>
          <span style={{ ...pluginValueStyles, color: hasFired ? statusColors.fired : statusColors.waiting }}>
            {hasFired ? "Fired" : "Waiting"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Delay:</span>
          <span style={pluginValueStyles}>{delayMs}ms</span>
        </div>
      </div>
    </div>
  );
}

export default OnLoad;
