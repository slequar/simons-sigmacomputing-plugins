import { landingStyles } from "../styles/landingStyles";
import { CopyButton } from "./CopyButton";

interface PluginCardProps {
  title: string;
  description: string;
  features: string;
  url: string;
  copiedUrl: string | null;
  onCopy: (url: string) => void;
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
  copiedUrl,
  onCopy,
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
        <CopyButton url={url} copiedUrl={copiedUrl} onCopy={onCopy} />
      </div>
    </div>
  );
}

