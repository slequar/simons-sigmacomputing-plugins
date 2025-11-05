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
  testValue: string;
  listenerValue: string;
  onMatch: string;
}

function Comparator() {
  const [isMatching, setIsMatching] = useState(false);
  const [matchCount, setMatchCount] = useState(0);

  useEditorPanelConfig([
    {
      type: "variable",
      name: "testValue",
      label: "Test Value",
      allowedTypes: ["number", "boolean"],
    },
    {
      type: "variable",
      name: "listenerValue",
      label: "Listener Value",
      allowedTypes: ["number", "boolean"],
    },
    { type: "action-trigger", name: "onMatch", label: "On Match" },
  ]);

  const config: ComparatorConfig = useConfig() as ComparatorConfig;

  // Set up action trigger (sending data out)
  const fireMatch = useActionTrigger(config.onMatch);

  // Extract variables
  const [testValueVar] = useVariable(config.testValue);
  const [listenerValueVar] = useVariable(config.listenerValue);

  // Get the actual values
  const testValue = useMemo(() => {
    const value = testValueVar?.defaultValue as ActualVariable | undefined;
    return value?.value;
  }, [testValueVar]);

  const listenerValue = useMemo(() => {
    const value = listenerValueVar?.defaultValue as ActualVariable | undefined;
    return value?.value;
  }, [listenerValueVar]);

  // Check for match and fire action
  useEffect(() => {
    const matches =
      testValue !== null &&
      listenerValue !== null &&
      testValue === listenerValue;
    setIsMatching(matches);

    if (matches) {
      setMatchCount((prev) => prev + 1);
      fireMatch();
    }
  }, [testValue, listenerValue, fireMatch]);

  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>⚖️ Comparator Plugin</h2>
      </div>
      <div style={pluginContentStyles}>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Status:</span>
          <span
            style={{
              ...pluginValueStyles,
              color: isMatching ? statusColors.running : statusColors.stopped,
            }}
          >
            {isMatching ? "Matching" : "Not Matching"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Test Value:</span>
          <span style={pluginValueStyles}>
            {testValue !== null && testValue !== undefined
              ? String(testValue)
              : "—"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Listener Value:</span>
          <span style={pluginValueStyles}>
            {listenerValue !== null && listenerValue !== undefined
              ? String(listenerValue)
              : "—"}
          </span>
        </div>
        <div style={pluginStatusItemStyles}>
          <span style={pluginLabelStyles}>Matches Fired:</span>
          <span style={pluginValueStyles}>{matchCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Comparator;
