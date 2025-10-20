import { useState } from "react";

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

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Simon's Sigma Computing Plugins</h1>
        <p>
          This is a Github Pages site for Simon's utility plugins, usually
          focused around action integrations in Sigma. The source code is
          available under an open license on{" "}
          <a href="https://github.com/simonsigmacomputing/simons-sigmacomputing-plugins">
            Github
          </a>
          .
        </p>
      </header>
      <main className="main-content">
        <section className="plugins">
          <h2>Available Plugins</h2>

          <div className="plugin-card">
            <h3>Clock Plugin</h3>
            <p className="plugin-description">
              A timer-based plugin that executes actions at regular intervals.
              Configure the tick rate in milliseconds, control the running
              state, and trigger actions automatically or manually through the
              "Do One Tick" action.
            </p>
            <p className="plugin-features">
              <strong>Features:</strong> Configurable intervals, start/stop
              control, automatic and manual triggering
            </p>
            <div className="url-container">
              <strong>URL:</strong> <code>{clockUrl}</code>
              <button
                className="copy-button"
                onClick={() => {
                  copyToClipboard(clockUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === clockUrl ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="plugin-card">
            <h3>OnLoad Plugin</h3>
            <p className="plugin-description">
              An initialization plugin that triggers an action when loaded, with
              optional configurable delay. Ideal for setting up workflows or
              executing startup actions automatically.
            </p>
            <p className="plugin-features">
              <strong>Features:</strong> Automatic on-load triggering, optional
              delay (currently broken due to Sigma-side bug), manual step
              execution
            </p>
            <div className="url-container">
              <strong>URL:</strong> <code>{onloadUrl}</code>
              <button
                className="copy-button"
                onClick={() => {
                  copyToClipboard(onloadUrl);
                }}
                title="Copy URL to clipboard"
              >
                {copiedUrl === onloadUrl ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Simon's Sigma Computing Plugins</p>
      </footer>
    </div>
  );
}
