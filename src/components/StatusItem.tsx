import type { CSSProperties } from "react";
import {
  pluginStatusItemStyles,
  pluginLabelStyles,
  pluginValueStyles,
} from "../styles/pluginStyles";

interface StatusItemProps {
  label: string;
  value: string | number;
  valueStyle?: CSSProperties;
}

/**
 * StatusItem Component
 * Reusable component for displaying status information in plugins
 * Displays a label-value pair with consistent styling
 */
export function StatusItem({
  label,
  value,
  valueStyle,
}: StatusItemProps) {
  return (
    <div style={pluginStatusItemStyles}>
      <span style={pluginLabelStyles}>{label}</span>
      <span style={{ ...pluginValueStyles, ...valueStyle }}>{value}</span>
    </div>
  );
}

