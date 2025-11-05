import { landingStyles } from "../styles/landingStyles";

interface CopyButtonProps {
  url: string;
  copiedUrl: string | null;
  onCopy: (url: string) => void;
}

/**
 * CopyButton Component
 * Reusable button for copying URLs to clipboard
 * Shows "Copied!" feedback for 3 seconds after clicking
 */
export function CopyButton({
  url,
  copiedUrl,
  onCopy,
}: CopyButtonProps) {
  return (
    <button
      style={landingStyles.copyButton}
      onClick={() => {
        onCopy(url);
      }}
      title="Copy URL to clipboard"
    >
      {copiedUrl === url ? "✓ Copied!" : "Copy"}
    </button>
  );
}

