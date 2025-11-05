import { useEffect, useMemo, useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useActionEffect,
  useVariable,
} from "@sigmacomputing/plugin";

import type { ActualVariable } from "../types";
import { PluginContainer, StatusItem } from "../components";
import { statusColors } from "../styles/pluginStyles";

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
    const value = delayMsVar?.defaultValue as ActualVariable | undefined;
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
    <PluginContainer title="🚀 OnLoad Plugin">
      <StatusItem
        label="Status:"
        value={hasFired ? "Fired" : "Waiting"}
        valueStyle={{
          color: hasFired ? statusColors.fired : statusColors.waiting,
        }}
      />
      <StatusItem label="Delay:" value={`${String(delayMs)}ms`} />
    </PluginContainer>
  );
}

export default OnLoad;
