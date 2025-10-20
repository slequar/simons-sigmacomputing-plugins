import { colors, spacing, typography, borderRadius } from "./theme";

export const pluginContainerStyles = {
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
  background: colors.bgGradient,
  color: colors.textPrimary,
  fontFamily: typography.fontFamily,
};

export const pluginHeaderStyles = {
  padding: spacing.lg,
  borderBottom: `1px solid ${colors.borderLight}`,
  textAlign: "center" as const,
};

export const pluginTitleStyles = {
  margin: 0,
  fontSize: typography.fontSize.xxl,
  fontWeight: typography.fontWeight.semibold,
};

export const pluginContentStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.lg,
  padding: spacing.lg,
};

export const pluginStatusItemStyles = {
  display: "flex",
  alignItems: "center",
  gap: spacing.md,
  fontSize: typography.fontSize.lg,
  padding: `${spacing.md} ${spacing.lg}`,
  background: colors.accentLight,
  border: `1px solid ${colors.accentBorder}`,
  borderRadius: borderRadius.md,
  minWidth: "300px",
  justifyContent: "space-between" as const,
};

export const pluginLabelStyles = {
  fontWeight: typography.fontWeight.medium,
  color: colors.textSecondary,
};

export const pluginValueStyles = {
  fontWeight: typography.fontWeight.semibold,
  color: colors.primary,
  fontFamily: typography.fontFamilyMono,
};

// Status-specific value colors
export const statusColors = {
  running: colors.success,
  stopped: colors.error,
  fired: colors.success,
  waiting: colors.warning,
};

