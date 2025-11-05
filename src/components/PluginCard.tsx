import { landingStyles } from "../styles/landingStyles";
import { CopyUrlButton } from "./CopyButton";

interface PluginCardProps {
  title: string;
  description: string;
  features: string;
  url: string;
}

/**
 * PluginCard Component
 * Reusable card component for displaying plugin information on landing page
 * Includes title, description, features, URL display, and copy button
 */
export function PluginCard({
  title,
  description,
  features,
  url,
}: PluginCardProps) {
  return (
    <div style={landingStyles.pluginCard}>
      <h3 style={landingStyles.pluginCardTitle}>{title}</h3>
      <p style={landingStyles.pluginDescription}>{description}</p>
      <p style={landingStyles.pluginFeatures}>
        <strong>Features:</strong> {features}
      </p>
      <div style={landingStyles.urlContainer}>
        <strong>URL:</strong>{" "}
        <code style={landingStyles.pluginCode}>{url}</code>
        <CopyUrlButton url={url} />
      </div>
    </div>
  );
}

