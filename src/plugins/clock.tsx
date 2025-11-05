import { useEffect, useMemo } from "react";
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

interface ClockConfig_t {
  MSPT: string;
  isRunning: string;
  tick: string;
  doOneTick: string;
}

function Clock() {
  useEditorPanelConfig([
    {
      type: "variable",
      name: "MSPT",
      label: "Milliseconds per Tick",
      allowedTypes: ["number"],
    },
    {
      type: "variable",
      name: "isRunning",
      label: "Is Running?",
      allowedTypes: ["boolean"],
    },
    { type: "action-effect", name: "doOneTick", label: "Do One Tick" },
    { type: "action-trigger", name: "tick", label: "Tick" },
  ]);

  const config: ClockConfig_t = useConfig() as ClockConfig_t;

  // Extract the variables from config panel
  const [msptVar] = useVariable(config.MSPT);
  const [isRunningVar] = useVariable(config.isRunning);
  const mspt = useMemo(() => {
    const value = msptVar?.defaultValue as ActualVariable | undefined;
    return value?.type === "number" && value.value !== null
      ? value.value
      : 1000;
  }, [msptVar]);
  const isRunning = useMemo(() => {
    const value = isRunningVar?.defaultValue as ActualVariable | undefined;
    return value?.type === "boolean" && value.value !== null
      ? value.value
      : false;
  }, [isRunningVar]);

  // Set up action trigger (sending data out)
  const doTick = useActionTrigger(config.tick);
  // On receiving effect (input to plugin), do the trigger (output from plugin)
  useActionEffect(config.doOneTick, () => {
    doTick();
  });

  // Set up the interval
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      doTick();
    }, mspt);
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, mspt, doTick]);

  return (
    <PluginContainer title="⏱️ Clock Plugin">
      <StatusItem
        label="Status:"
        value={isRunning ? "Running" : "Stopped"}
        valueStyle={{
          color: isRunning ? statusColors.running : statusColors.stopped,
        }}
      />
      <StatusItem label="Tick Rate:" value={`${String(mspt)}ms`} />
    </PluginContainer>
  );
}

export default Clock;
