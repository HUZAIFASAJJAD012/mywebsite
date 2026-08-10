"use client";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <div className="not-found"><div><h1>!</h1><h2>Something interrupted the build.</h2><p className="section-copy">Please try this view again.</p><button className="button button-primary" onClick={reset}>Try again</button></div></div>; }
