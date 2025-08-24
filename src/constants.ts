export const TEMPLATE_THEMES_MAP = {
  COLORFUL: 'colorful',
  DARK: 'dark',
  MONOCHROME: 'monochrome',
} as const;

export type TemplateTheme =
  (typeof TEMPLATE_THEMES_MAP)[keyof typeof TEMPLATE_THEMES_MAP];

export const TEMPLATE_THEMES_LIST = Object.values(TEMPLATE_THEMES_MAP);
