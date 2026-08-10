import Link from "next/link";
export default function NotFound() { return <div className="not-found"><div><h1>404</h1><h2>This route hasn’t been forged.</h2><p className="section-copy">The page may have moved or never existed.</p><Link className="button button-primary" href="/">Return home</Link></div></div>; }
