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
  maxLength?: number; // Maximum length before truncation
}

/**
 * StatusItem Component
 * Reusable component for displaying status information in plugins
 * Displays a label-value pair with consistent styling
 * Supports truncation with tooltip for long values
 */
export function StatusItem({
  label,
  value,
  valueStyle,
  maxLength,
}: StatusItemProps) {
  const valueStr = String(value);
  const shouldTruncate = maxLength && valueStr.length > maxLength;
  const displayValue = shouldTruncate
    ? `${valueStr.slice(0, maxLength)}...`
    : valueStr;

  return (
    <div style={pluginStatusItemStyles}>
      <span style={pluginLabelStyles}>{label}</span>
      <span
        style={{ ...pluginValueStyles, ...valueStyle }}
        title={shouldTruncate ? valueStr : undefined}
      >
        {displayValue}
      </span>
    </div>
  );
}

