import { Link } from "react-router-dom";
import { DOORS, img } from "../content";
import { Footer, TopNav, useScrollTopOnMount } from "../components";

export default function Lobby() {
  useScrollTopOnMount();
  return (
    <>
      <TopNav bookTo="/birthday#book" />
      <section className="scene dark">
        <div className="bg"><img src={img.heroCourt} alt="The blacklight court at Archers Arena, two teams in glowing pinnies" /></div>
        <div className="fg gut">
          <p className="eyebrow">North York · Toronto</p>
          <h1>Blacklight<br />Combat Archery</h1>
          <p className="copy">Foam-tipped arrows. Glowing courts. Coaches who run the whole thing.</p>
          <div className="cta">
            <Link to="/birthday#book" className="pillbtn pb-red">Book a party</Link>
            <a href="#doors" className="pillbtn pb-light">Walk through</a>
          </div>
        </div>
        <span className="scrollcue" aria-hidden="true">⌄</span>
      </section>

      <section className="scene lite" id="doors">
        <div className="fg gut doors-fg">
          <p className="eyebrow red">The lobby</p>
          <h2>What brings you in?</h2>
          <div className="doorlist">
            {DOORS.map((d) => (
              <Link key={d.path} to={d.path} className={`doorrow${d.photo ? "" : " red"}`}>
                {d.photo && <img src={d.photo} alt="" />}
                {d.photo && <span className="sc" />}
                <span className="tx">
                  <span className="dn">{d.name}</span>
                  <span className="dd">{d.line}</span>
                </span>
                <span className="ar">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
