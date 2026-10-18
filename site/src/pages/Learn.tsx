import { Link } from "react-router-dom";
import { img } from "../content";
import { Footer, Scene, TopNav, useScrollTopOnMount } from "../components";

// The ambition door: not an occasion but a ladder — first lesson to Level 7.
const LADDER = [
  { step: "First lesson", line: "Beginner Archery Training — one hour, real bows, a coach beside you." },
  { step: "The 8-week course", line: "One hour a week, level by level. Technique, scoring, consistency." },
  { step: "Advanced levels", line: "The course ladder runs deep — cohorts are training at Level 6 and 7 right now." },
  { step: "Metal tip", line: "Competition-grade training when you've earned it." },
];

export default function Learn() {
  useScrollTopOnMount();
  return (
    <>
      <TopNav bookTo="#book" />
      <Scene photo={img.archery} alt="Archer in a face mask drawing a bow" eyebrow="The learn door"
        title={<>From first arrow<br />to Level 7.</>}
        copy="Archery training is the most-booked thing at the arena. It starts with one lesson, usually two of you, and a coach who takes it from there."
        cue>
        <div className="cta"><a href="#book" className="pillbtn pb-red">Book a first lesson</a></div>
      </Scene>

      <section className="scene lite">
        <div className="fg gut doors-fg">
          <p className="eyebrow red">The ladder</p>
          <h2>Every archer here<br />started at step one.</h2>
          <ol className="ladder">
            {LADDER.map((l, i) => (
              <li key={l.step}>
                <span className="lno">{i + 1}</span>
                <span className="ltx"><b>{l.step}</b><span>{l.line}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="scene lite" id="book">
        <div className="fg gut book-fg">
          <p className="eyebrow red">Step one</p>
          <h2>Book the first lesson.</h2>
          <p className="copy">Lessons run through the week; course cohorts open regularly. Live times are being wired in — until then, booking runs through the current system.</p>
          <div className="cta">
            <a href="https://archersarena.com" className="pillbtn pb-red">Book on the current site</a>
            <Link to="/" className="pillbtn pb-ghost">Back to the lobby</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
