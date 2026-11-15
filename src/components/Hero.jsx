import { profile } from "../data";

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <p className="status">
        <span className="status__dot" /> Open to new roles
      </p>

      <div className="hero__heading">
        <img
          className="hero__avatar"
          width="200"
          height="200"
          src={profile.avatar}
          alt={profile.name}
        />

        <h1 className="hero__title">
          Hi, I’m {profile.name.split(" ")[0]}.
          <br />I build things that think.
        </h1>
      </div>

      <p className="hero__role">{profile.role}</p>
      <p className="hero__intro">{profile.intro}</p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">
          See my work
        </a>
        <a className="btn" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  );
}
