"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, m } from "motion/react";

const dimensions = [
  { title: "Product UI", tools: "Responsive design · Menu discovery · Gallery", project: "Al Khalifa Signature", detail: "A clear restaurant interface that helps customers explore signature dishes, complete menu sections and visual content." },
  { title: "Customer journeys", tools: "Table reservations · Contact access · Events", project: "Al Khalifa Signature", detail: "Focused paths help customers book tables, understand event services and find the restaurant’s contact details." },
  { title: "Multilingual access", tools: "Multilingual support · Structured content", project: "Al Khalifa Signature", detail: "Language support makes the restaurant experience more useful to its diverse audience in Johor Bahru." },
  { title: "Direct communication", tools: "WhatsApp chat · Contact details", project: "Al Khalifa Signature", detail: "Direct WhatsApp access gives customers a familiar, low-friction way to connect with the restaurant." },
];

export function CapabilityProof() {
  const [active, setActive] = useState(0);
  const item = dimensions[active];
  return (
    <LayoutGroup id="capability-proof">
      <div className="proof-rail">
        <div className="proof-tabs" role="tablist" aria-label="Delivery dimensions">
          {dimensions.map((dimension, index) => (
            <button type="button" role="tab" aria-selected={active === index} aria-controls="proof-panel" id={`proof-tab-${index}`} key={dimension.title} onClick={() => setActive(index)} onFocus={() => setActive(index)} onMouseEnter={() => setActive(index)}>
              {active === index ? <m.span className="proof-active" layoutId="proof-active" /> : null}<span>{dimension.title}</span>
            </button>
          ))}
        </div>
        <div className="proof-panel" id="proof-panel" role="tabpanel" aria-labelledby={`proof-tab-${active}`}>
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={item.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: .2 }}>
              <span className="project-kicker">{item.project}</span><h3>{item.title}</h3><p>{item.detail}</p><small>{item.tools}</small>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </LayoutGroup>
  );
}
