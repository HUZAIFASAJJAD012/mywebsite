import { describe, expect, it } from "vitest";
import { consentModeDefault, consentRegions } from "./consent";

describe("consent mode defaults", () => {
  it("covers the EEA, the UK and Switzerland without duplicates", () => {
    expect(new Set(consentRegions).size).toBe(consentRegions.length);
    expect(consentRegions).toHaveLength(32); // 27 EU + IS, LI, NO + GB + CH
    for (const code of ["DE", "FR", "NO", "GB", "CH"]) expect(consentRegions).toContain(code);
    for (const code of consentRegions) expect(code).toMatch(/^[A-Z]{2}$/);
  });

  it("denies all storage by default in those regions, and nowhere else", () => {
    expect(consentModeDefault.analytics_storage).toBe("denied");
    expect(consentModeDefault.ad_storage).toBe("denied");
    expect(consentModeDefault.ad_user_data).toBe("denied");
    expect(consentModeDefault.ad_personalization).toBe("denied");
    expect(consentModeDefault.region.length).toBeGreaterThan(0);
    expect(consentModeDefault.region).not.toContain("US");
    expect(consentModeDefault.region).not.toContain("PK");
  });
});
