import { useEffect, useMemo, useState } from "react";
import {
  useConfig,
  useEditorPanelConfig,
  useActionTrigger,
  useVariable,
} from "@sigmacomputing/plugin";

import type { ActualVariable } from "../types";
import {
  pluginContainerStyles,
  pluginHeaderStyles,
  pluginTitleStyles,
  pluginContentStyles,
  pluginStatusItemStyles,
  pluginLabelStyles,
  pluginValueStyles,
} from "../styles/pluginStyles";

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

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>🔄 On Change Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Current Value:</span>
          <span style={pluginValueStyles}>
            {currentValue !== null
              ? typeof currentValue === "object"
                ? JSON.stringify(currentValue)
                : // eslint-disable-next-line @typescript-eslint/no-base-to-string
                  String(currentValue)
              : "—"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Changes Detected:</span>
          <span style={pluginValueStyles}>{changeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default OnChange;
