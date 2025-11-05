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
  statusColors,
} from "../styles/pluginStyles";

interface ComparatorConfig {
  condition: string;
  onTrue: string;
}

function Comparator() {
  const [isTrue, setIsTrue] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);
  const [previousValue, setPreviousValue] = useState<boolean | null>(null);

  useEditorPanelConfig([
    {
      type: "variable",
      name: "condition",
      label: "Condition",
      allowedTypes: ["boolean"],
    },
    { type: "action-trigger", name: "onTrue", label: "On True" },
  ]);

  const config: ComparatorConfig = useConfig() as ComparatorConfig;

  // Set up action trigger (sending data out)
  const fireOnTrue = useActionTrigger(config.onTrue);

  // Extract variable
  const [conditionVar] = useVariable(config.condition);

  // Get the actual value
  const conditionValue = useMemo(() => {
    const value = conditionVar?.defaultValue as ActualVariable | undefined;
    return value?.type === "boolean" ? value.value : null;
  }, [conditionVar]);

  // Fire action when condition becomes true
  useEffect(() => {
    setIsTrue(conditionValue === true);

    // Only fire if the value changed from false/null to true
    if (conditionValue === true && previousValue !== true) {
      setTriggerCount((prev) => prev + 1);
      fireOnTrue();
    }

    setPreviousValue(conditionValue);
  }, [conditionValue, previousValue, fireOnTrue]);

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>✓ Condition Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Condition:</span>
          <span
            style={{
              ...pluginValueStyles,
              color: isTrue ? statusColors.running : statusColors.stopped,
            }}
          >
            {isTrue ? "True" : "False"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Triggers Fired:</span>
          <span style={pluginValueStyles}>{triggerCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Comparator;
