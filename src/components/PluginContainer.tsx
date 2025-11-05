import type { ReactNode } from "react";
import {
  pluginContainerStyles,
  pluginHeaderStyles,
  pluginTitleStyles,
  pluginContentStyles,
} from "../styles/pluginStyles";

interface PluginContainerProps {
  title: string;
  children: ReactNode;
}

/**
 * PluginContainer Component
 * Reusable layout component for all plugins
 * Provides consistent header, title, and content area styling
 */
export function PluginContainer({
  title,
  children,
}: PluginContainerProps) {
  return (
    <div style={pluginContainerStyles}>
      <div style={pluginHeaderStyles}>
        <h2 style={pluginTitleStyles}>{title}</h2>
      </div>
      <div style={pluginContentStyles}>{children}</div>
    </div>
  );
}

