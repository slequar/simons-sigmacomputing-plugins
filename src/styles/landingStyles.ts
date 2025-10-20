import { colors, spacing, typography, borderRadius, transitions } from "./theme";

export const landingStyles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
  },

  header: {
    textAlign: "center" as const,
    padding: `${spacing.xxl} ${spacing.lg}`,
    borderBottom: `1px solid ${colors.borderLight}`,
  },

  headerTitle: {
    margin: 0,
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.semibold,
  },

  subtitle: {
    margin: 0,
    opacity: 0.8,
  },

  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },

  hero: {
    textAlign: "center" as const,
    maxWidth: "600px",
    marginBottom: spacing.xxl,
  },

  heroTitle: {
    marginTop: 0,
  },

  pluginsSection: {
    width: "100%",
    maxWidth: "900px",
  },

  pluginsSectionTitle: {
    textAlign: "center" as const,
    marginBottom: spacing.lg,
  },

  pluginCard: {
    background: colors.accentLight,
    border: `1px solid ${colors.borderLight}`,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    transition: transitions.normal,
    cursor: "pointer",

    "&:hover": {
      background: colors.accentMedium,
      borderColor: colors.borderMedium,
    },
  },

  pluginCardTitle: {
    marginTop: 0,
    marginBottom: spacing.md,
    color: colors.primary,
  },

  pluginCardParagraph: {
    margin: `${spacing.sm} 0`,
    lineHeight: 1.6,
  },

  pluginDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.textTertiary,
    marginBottom: `${spacing.md} !important`,
  },

  pluginFeatures: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: `${spacing.md} !important`,
    padding: spacing.md,
    background: colors.accentLight,
    borderLeft: `3px solid ${colors.accentBorder}`,
    borderRadius: borderRadius.sm,
  },

  pluginCode: {
    background: colors.codeBackground,
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.sm,
    fontFamily: typography.fontFamilyMono,
    color: colors.codeText,
  },

  urlContainer: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    flexWrap: "wrap" as const,
    marginTop: spacing.md,
  },

  copyButton: {
    background: colors.accentLight,
    border: `1px solid ${colors.accentBorder}`,
    color: colors.primary,
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.sm,
    cursor: "pointer",
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    transition: transitions.fast,

    "&:hover": {
      background: colors.accentMedium,
      borderColor: colors.accentBorderHover,
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  },

  footer: {
    textAlign: "center" as const,
    padding: spacing.lg,
    borderTop: `1px solid ${colors.borderLight}`,
    opacity: 0.7,
    fontSize: typography.fontSize.sm,
  },
};

