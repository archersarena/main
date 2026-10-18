import { Link, useLocation } from "react-router-dom";
import { FITNESS_URL, STUBS } from "../content";
import { Footer, TopNav, useScrollTopOnMount } from "../components";

/** A door whose full walkthrough is still being built: one strong full-screen scene, honest copy, a way to act. */
export default function DoorStub() {
  const { pathname } = useLocation();
  useScrollTopOnMount();
  const s = STUBS[pathname];
  if (!s) return null;
  const isTrain = pathname === "/train";
  return (
    <>
      <TopNav bookTo="/birthday#book" />
      <section className={`scene ${s.photo ? "dark" : "lite"} stub`}>
        {s.photo && <div className="bg"><img src={s.photo} alt="" /></div>}
        <div className="fg gut">
          <p className={`eyebrow${s.photo ? "" : " red"}`}>{s.name}</p>
          <h1>{s.head}</h1>
          <p className="copy">{s.copy}</p>
          <div className="cta">
            {isTrain ? (
              <a href={FITNESS_URL} className="pillbtn pb-red">Start at Arena Fitness</a>
            ) : (
              <Link to="/birthday#book" className="pillbtn pb-red">Book a party instead</Link>
            )}
            <Link to="/" className={`pillbtn ${s.photo ? "pb-light" : "pb-ghost"}`}>Back to the lobby</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
