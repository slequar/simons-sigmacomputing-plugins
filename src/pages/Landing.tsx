import { useState } from "react";
import { landingStyles } from "../styles/landingStyles";
import { PluginCard } from "../components";

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
  const onchangeUrl = `${window.location.origin}/simons-sigmacomputing-plugins/#/onchange`;

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
          <a href="https://github.com/slequar/simons-sigmacomputing-plugins">
            Github
          </a>
          .
        </p>
      </header>
      <main style={landingStyles.mainContent}>
        <section style={landingStyles.pluginsSection}>
          <h2 style={landingStyles.pluginsSectionTitle}>Available Plugins</h2>

          <PluginCard
            title="Clock Plugin"
            description="A timer-based plugin that executes actions at regular intervals. Configure the tick rate in milliseconds, control the running state, and trigger actions automatically or manually through the 'Do One Tick' action."
            features="Configurable intervals, start/stop control, automatic and manual triggering"
            url={clockUrl}
            copiedUrl={copiedUrl}
            onCopy={copyToClipboard}
          />

          <PluginCard
            title="OnLoad Plugin"
            description="An initialization plugin that triggers an action when loaded, with optional configurable delay. Ideal for setting up workflows or executing startup actions automatically."
            features="Automatic on-load triggering, optional delay (currently broken due to Sigma-side bug), manual step execution"
            url={onloadUrl}
            copiedUrl={copiedUrl}
            onCopy={copyToClipboard}
          />

          <PluginCard
            title="Echo Plugin"
            description="A simple echo plugin that receives a trigger and immediately sends back an output effect. Useful for testing workflows or creating simple pass-through actions."
            features="Instant echo response, trigger counting, simple pass-through action"
            url={echoUrl}
            copiedUrl={copiedUrl}
            onCopy={copyToClipboard}
          />

          <PluginCard
            title="🔄 On Change Plugin"
            description="A change detection plugin that fires an action whenever a control value changes. Supports numbers and booleans, perfect for monitoring variable changes and triggering workflows."
            features="Real-time value monitoring, automatic trigger on any value change, change counting, supports numbers and booleans"
            url={onchangeUrl}
            copiedUrl={copiedUrl}
            onCopy={copyToClipboard}
          />
        </section>
      </main>
      <footer style={landingStyles.footer}>
        <p>&copy; 2025 Simon's Sigma Computing Plugins</p>
      </footer>
    </div>
  );
}
