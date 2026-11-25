/**
 * Regions where Google requires consent before analytics or advertising storage is used:
 * the EEA (EU member states plus Iceland, Liechtenstein and Norway), the United Kingdom
 * and Switzerland. ISO 3166-1 alpha-2 codes, as Google Consent Mode expects.
 */
export const consentRegions = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT",
  "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  "IS", "LI", "NO", "GB", "CH",
] as const;

/** Consent Mode defaults: everything denied in the regions above until Google's consent message updates it. */
export const consentModeDefault = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  region: [...consentRegions],
  wait_for_update: 500,
} as const;
