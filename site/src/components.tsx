import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function TopNav({ bookTo }: { bookTo: string }) {
  return (
    <div className="topnav">
      <Link to="/" className="brand">ARCHERS ARENA</Link>
      <Link to={bookTo} className="pillbtn pb-light" style={{ minWidth: 0, padding: "9px 18px" }}>Book</Link>
    </div>
  );
}

/** One full-screen beat. With a photo it is the dark cinematic scene; without, the light panel. */
export function Scene(props: {
  photo?: string;
  alt?: string;
  mid?: boolean;
  game?: boolean;
  ghost?: string;
  eyebrow: string;
  eyebrowRed?: boolean;
  title: ReactNode;
  copy?: string;
  chips?: string[];
  children?: ReactNode;
  fgClass?: string;
  cue?: boolean;
}) {
  const dark = !!props.photo;
  return (
    <section className={`scene ${dark ? "dark" : "lite"}${props.mid ? " mid" : ""}${props.game ? " game" : ""}`}>
      {props.photo && (
        <div className="bg"><img src={props.photo} alt={props.alt ?? ""} /></div>
      )}
      {props.ghost && <div className="ghosttime" aria-hidden="true">{props.ghost}</div>}
      <div className={`fg gut ${props.fgClass ?? ""}`}>
        <p className={`eyebrow${props.eyebrowRed ? " red" : ""}`}>{props.eyebrow}</p>
        <h2>{props.title}</h2>
        {props.copy && <p className="copy">{props.copy}</p>}
        {props.chips && (
          <div className="minichips">{props.chips.map((c) => <span key={c}>{c}</span>)}</div>
        )}
        {props.children}
      </div>
      {props.cue && <span className="scrollcue" aria-hidden="true">⌄</span>}
    </section>
  );
}

/** The signature moment: 3 · 2 · 1 · GO, then the page drops into the blacklight world. */
export function Countdown() {
  const wrap = useRef<HTMLElement>(null);
  const [step, setStep] = useState("3");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      setStep(p < 0.25 ? "3" : p < 0.5 ? "2" : p < 0.75 ? "1" : "GO");
      setDark(p >= 0.72);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="count" ref={wrap} aria-label="Countdown">
      <div className={`stick${dark ? " dark" : ""}`}>
        <div className="inner">
          <p className="lead">{dark ? "LIGHTS DOWN · ARENA ON" : "They step onto the court"}</p>
          <div className="num">{step}</div>
        </div>
      </div>
    </section>
  );
}

/** Floating Book pill, shown while the visitor is inside a journey. */
export function BookPill({ label, targetId }: { label: string; targetId: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const end = document.getElementById(targetId);
      setOn(h.scrollTop > window.innerHeight * 1.2 && (!end || h.scrollTop < end.offsetTop - 400));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);
  const go = () => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className={`bookpill${on ? " on" : ""}`}>
      <button className="pillbtn pb-dark" onClick={go}>{label}</button>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="in gut">
        Archers Arena · North York, Toronto · Blacklight combat archery, parties, team events, archery training.
        {" "}Preview build — availability, inclusions and the 3D walkthrough scenes are still being wired in.
      </div>
    </footer>
  );
}

/** Scroll to top on route change. */
export function useScrollTopOnMount() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
}
