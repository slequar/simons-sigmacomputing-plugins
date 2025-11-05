import { useEffect, useMemo, useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useVariable,
} from "@sigmacomputing/plugin";

import type { ActualVariable } from "../types";
import { PluginContainer, StatusItem } from "../components";

interface OnChangeConfig {
  control: string;
  onChange: string;
}

function OnChange() {
  const [currentValue, setCurrentValue] = useState<unknown>(null);
  const [changeCount, setChangeCount] = useState(0);
  const [previousValue, setPreviousValue] = useState<unknown>(null);

  useEditorPanelConfig([
    {
      type: "variable",
      name: "control",
      label: "Control",
      allowedTypes: [
        "boolean",
        "date",
        "number",
        "text",
        "text-list",
        "number-list",
        "date-list",
        "number-range",
        "date-range",
      ],
    },
    { type: "action-trigger", name: "onChange", label: "On Change" },
  ]);

  const config: OnChangeConfig = useConfig() as OnChangeConfig;

  // Set up action trigger (sending data out)
  const fireOnChange = useActionTrigger(config.onChange);

  // Extract variable
  const [controlVar] = useVariable(config.control);

  // Get the actual value
  const controlValue = useMemo(() => {
    const value = controlVar?.defaultValue as ActualVariable | undefined;
    return value?.value ?? null;
  }, [controlVar]);

  // Fire action when control value changes
  useEffect(() => {
    setCurrentValue(controlValue);

    // Only fire if the value actually changed
    if (controlValue !== previousValue && previousValue !== null) {
      setChangeCount((prev) => prev + 1);
      fireOnChange();
    }

    setPreviousValue(controlValue);
  }, [controlValue, previousValue, fireOnChange]);

  const displayValue =
    currentValue !== null
      ? typeof currentValue === "object"
        ? JSON.stringify(currentValue)
        : // eslint-disable-next-line @typescript-eslint/no-base-to-string
          String(currentValue)
      : "—";

  return (
    <PluginContainer title="🔄 On Change Plugin">
      <StatusItem label="Current Value:" value={displayValue} />
      <StatusItem label="Changes Detected:" value={changeCount} />
    </PluginContainer>
  );
}

export default OnChange;
