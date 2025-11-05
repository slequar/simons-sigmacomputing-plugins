import { useState } from "react";
import { landingStyles } from "../styles/landingStyles";

interface CopyUrlButtonProps {
  url: string;
}

/**
 * CopyUrlButton Component
 * Reusable button for copying URLs to clipboard
 * Shows "✓ Copied!" feedback for 3 seconds after clicking
 * Manages its own state internally
 */
export function CopyUrlButton({ url }: CopyUrlButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <button
      style={landingStyles.copyButton}
      onClick={handleCopy}
      title="Copy URL to clipboard"
    >
      {isCopied ? "✓ Copied!" : "Copy"}
    </button>
  );
}

