import { Globe2, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { CountryTicker } from "./country-ticker";
import styles from "./home-global-reach.module.css";

export function HomeGlobalReach() {
  return (
    <section className={styles.section} aria-labelledby="global-reach-heading">
      <div className={styles.shell}>
        <div className={styles.introduction}>
          <span className={styles.eyebrow}>
            <Globe2 size={15} aria-hidden="true" /> Global client reach
          </span>
          <h2 id="global-reach-heading">{profile.clientReach.title}</h2>
          <p>{profile.clientReach.summary}</p>
          <span className={styles.base}>
            <MapPin size={15} aria-hidden="true" /> Based in {profile.location} · Built for remote collaboration
          </span>
        </div>

        <ul className={styles.markets} aria-label="Regions served">
          {profile.clientReach.markets.map((market, index) => (
            <li className={styles.market} key={market.name}>
              <span className={styles.index} aria-hidden="true">0{index + 1}</span>
              <strong>{market.name}</strong>
              <span>{market.detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <CountryTicker countries={profile.clientReach.countries} />
    </section>
  );
}
