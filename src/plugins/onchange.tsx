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

// Delay before onChange events can fire to work around Sigma bug where controls
// initialize as null and then immediately update to their actual value
const INITIALIZATION_DELAY_MS = 200;

function OnChange() {
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const [changeCount, setChangeCount] = useState(0);
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [hasSeenFirstValue, setHasSeenFirstValue] = useState(false);

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
    return JSON.stringify(controlVar?.defaultValue);
  }, [controlVar]);

  // Set initialization flag after delay to prevent firing during Sigma's initial null->value transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, INITIALIZATION_DELAY_MS);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Fire action when control value changes
  useEffect(() => {
    setCurrentValue(controlValue);

    // Only fire if:
    // 1. We're past the initialization period (prevents initial load bug)
    // 2. The value actually changed
    // 3. This isn't the very first value we're seeing
    if (isInitialized && controlValue !== previousValue && hasSeenFirstValue) {
      setChangeCount((prev) => prev + 1);
      fireOnChange();
    }

    setHasSeenFirstValue(true);
    setPreviousValue(controlValue);
  }, [
    controlValue,
    previousValue,
    fireOnChange,
    isInitialized,
    hasSeenFirstValue,
  ]);

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
