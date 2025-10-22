import { useState } from "react";
import { landingStyles } from "../styles/landingStyles";

export default function Landing() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    void navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => {
      setCopiedUrl(null);
    }, 3000);
  };

  const clockUrl = `${window.location.origin}/simons-sigmacomputing-plugins/#/clock`;
  const onloadUrl = `${window.location.origin}/simons-sigmacomputing-plugins/#/onload`;
  const echoUrl = `${window.location.origin}/simons-sigmacomputing-plugins/#/echo`;

  return (
    <div style={landingStyles.container}>
      <header style={landingStyles.header}>
        <h1 style={landingStyles.headerTitle}>
          Simon's Sigma Computing Plugins
        </h1>
        <p style={landingStyles.subtitle}>
          This is a Github Pages site for Simon's utility plugins, usually
          focused around action integrations in Sigma. The source code is
          available under an open license on{" "}
          <a href="https://github.com/simonsigmacomputing/simons-sigmacomputing-plugins">
            Github
          </a>
          .
        </p>
      </header>
      <main style={landingStyles.mainContent}>
        <section style={landingStyles.pluginsSection}>
          <h2 style={landingStyles.pluginsSectionTitle}>Available Plugins</h2>

          <div style={landingStyles.pluginCard}>
            <h3 style={landingStyles.pluginCardTitle}>Clock Plugin</h3>
            <p style={landingStyles.pluginDescription}>
              A timer-based plugin that executes actions at regular intervals.
              Configure the tick rate in milliseconds, control the running
              state, and trigger actions automatically or manually through the
              "Do One Tick" action.
            </p>
            <p style={landingStyles.pluginFeatures}>
              <strong>Features:</strong> Configurable intervals, start/stop
              control, automatic and manual triggering
            </p>
            <div style={landingStyles.urlContainer}>
              <strong>URL:</strong>{" "}
              <code style={landingStyles.pluginCode}>{clockUrl}</code>
              <button
                style={landingStyles.copyButton}
                onClick={() => {
                  copyToClipboard(clockUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === clockUrl ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div style={landingStyles.pluginCard}>
            <h3 style={landingStyles.pluginCardTitle}>OnLoad Plugin</h3>
            <p style={landingStyles.pluginDescription}>
              An initialization plugin that triggers an action when loaded, with
              optional configurable delay. Ideal for setting up workflows or
              executing startup actions automatically.
            </p>
            <p style={landingStyles.pluginFeatures}>
              <strong>Features:</strong> Automatic on-load triggering, optional
              delay (currently broken due to Sigma-side bug), manual step
              execution
            </p>
            <div style={landingStyles.urlContainer}>
              <strong>URL:</strong>{" "}
              <code style={landingStyles.pluginCode}>{onloadUrl}</code>
              <button
                style={landingStyles.copyButton}
                onClick={() => {
                  copyToClipboard(onloadUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === onloadUrl ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div style={landingStyles.pluginCard}>
            <h3 style={landingStyles.pluginCardTitle}>Echo Plugin</h3>
            <p style={landingStyles.pluginDescription}>
              A simple echo plugin that receives a trigger and immediately sends
              back an output effect. Useful for testing workflows or creating
              simple pass-through actions.
            </p>
            <p style={landingStyles.pluginFeatures}>
              <strong>Features:</strong> Instant echo response, trigger
              counting, simple pass-through action
            </p>
            <div style={landingStyles.urlContainer}>
              <strong>URL:</strong>{" "}
              <code style={landingStyles.pluginCode}>{echoUrl}</code>
              <button
                style={landingStyles.copyButton}
                onClick={() => {
                  copyToClipboard(echoUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === echoUrl ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer style={landingStyles.footer}>
        <p>&copy; 2025 Simon's Sigma Computing Plugins</p>
      </footer>
    </div>
  );
}
