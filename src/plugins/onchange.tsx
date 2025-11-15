import { useEffect, useMemo, useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useVariable,
} from "@sigmacomputing/plugin";

import { PluginContainer } from "../components/PluginContainer";
import { StatusItem } from "../components/StatusItem";

interface OnChangeConfig {
  control: string;
  onChange: string;
}

function OnChange() {
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const [changeCount, setChangeCount] = useState(0);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

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
  console.log({ currentValue, previousValue, changeCount, config });

  // Set up action trigger (sending data out)
  const fireOnChange = useActionTrigger(config.onChange);

  // Extract variable
  const [controlVar] = useVariable(config.control);

  // Get the actual value
  const controlValue = useMemo(() => {
    return JSON.stringify(controlVar?.defaultValue);
  }, [controlVar]);
  console.log({ controlVar, controlValue });

  // Fire action when control value changes
  useEffect(() => {
    setCurrentValue(controlValue);

    // Only fire if the value actually changed
    // Use JSON.stringify to handle array comparisons (text-list, number-list, etc.)
    if (controlValue !== previousValue && previousValue !== null) {
      setChangeCount((prev) => prev + 1);
      fireOnChange();
    }

    setPreviousValue(controlValue);
  }, [controlValue, previousValue, fireOnChange]);

  const displayValue =
    currentValue !== null ? JSON.stringify(currentValue) : "—";

  return (
    <PluginContainer title="🔄 On Change Plugin">
      <StatusItem label="Current Value:" value={displayValue} maxLength={50} />
      <StatusItem label="Changes Detected:" value={changeCount} />
    </PluginContainer>
  );
}

export default OnChange;
