import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Globe2, Newspaper } from "lucide-react";
import { initiativeTeams, leadership, people, type TeamPerson } from "@/data/team";
import "./team.css";

function Portrait({ person, compact = false }: { person: TeamPerson; compact?: boolean }) {
  return (
    <div className={compact ? "team-portrait team-portrait--compact" : "team-portrait"}>
      <Image src={person.image ?? "/team/portrait-placeholder.svg"}
        alt={person.image ? person.name : `Portrait placeholder for ${person.name}`}
        fill sizes={compact ? "48px" : "(max-width: 700px) 90vw, 400px"}
        className={person.image ? "team-portrait__photo" : "team-portrait__placeholder"} />
      {!person.image && <span className="team-portrait__initials" aria-hidden="true">{person.initials}</span>}
      {!compact && !person.image && <span className="team-portrait__note">Portrait coming soon</span>}
    </div>
  );
}

const icons = [Newspaper, BookOpen, Globe2];

export default function TeamPage() {
  return (
    <div className="team-page">
      <div className="team-page__inner">
        <header className="team-intro">
          <div>
            <p className="team-eyebrow"><span /> Meet the team</p>
            <h1>The people behind<br /><em>DS Identity.</em></h1>
            <p className="team-intro__description">Different strengths. A shared ambition. Meet the people bringing our community and its initiatives to life.</p>
          </div>
          <div className="team-intro__aside">
            <span className="team-intro__edition">One collective / Three initiatives</span>
            <p>Connected by purpose.<br />Defined by people.</p>
            <a href="#initiative-teams">Explore our teams <ArrowDown size={14} /></a>
          </div>
        </header>

        <section className="team-organization" aria-label="DS Identity leadership and initiative teams">
          <div className="team-root" aria-hidden="true"><span className="team-root__mark">DS</span><span>DS IDENTITY<small>One community. Shared direction.</small></span></div>
          <section id="leadership" className="team-leadership" aria-labelledby="leadership-heading">
            <div className="team-section-label"><h2 id="leadership-heading">The leadership collective</h2><span>01 / Direction</span></div>
            <div className="team-leaders">
              {leadership.map(({ person: id, role }, index) => {
                const person = people[id];
                const appointments = initiativeTeams.filter(team => team.members.some(member => member.person === id));
                return <article key={id} id={`person-${id}`} className="team-leader">
                  <div className="team-leader__image"><Portrait person={person} /><span className="team-leader__number">0{index + 1}</span></div>
                  <div className="team-leader__details">
                    <p className="team-leader__role">{role}</p>
                    <h3>{person.name}</h3>
                    <div className="team-leader__appointments">{appointments.map(team => <a key={team.id} href={`#team-${team.id}`}>{team.name}<ArrowUpRight size={12} /></a>)}</div>
                  </div>
                </article>;
              })}
            </div>
          </section>

          <section id="initiative-teams" className="team-initiatives" aria-labelledby="initiative-heading">
            <div className="team-branch-node" aria-hidden="true"><span />Our initiatives<span /></div>
            <div className="team-section-label"><h2 id="initiative-heading">Three teams. One identity.</h2><span>02 / The initiatives</span></div>
            <div className="team-branches">
              {initiativeTeams.map((team, index) => {
                const Icon = icons[index];
                return <article key={team.id} id={`team-${team.id}`} className="team-branch">
                  <header className="team-branch__header"><span className="team-branch__icon"><Icon size={21} strokeWidth={1.5} /></span><span className="team-branch__index">0{index + 1}</span><h3>{team.name}</h3><p>{team.focus}</p></header>
                  <ul className="team-members">
                    {team.members.map(({ person: id, role }) => <li key={id}>
                      <Portrait person={people[id]} compact />
                      <div><h4>{people[id].name}</h4><p>{role}</p></div>
                      {leadership.some(leader => leader.person === id) && <a href={`#person-${id}`} className="team-member__profile" aria-label={`View ${people[id].name}'s leadership profile`}><ArrowUpRight size={15} /></a>}
                    </li>)}
                  </ul>
                  <Link href={`/${team.id}`} className="team-branch__link">Explore {team.name}<ArrowUpRight size={15} /></Link>
                </article>;
              })}
            </div>
          </section>
        </section>
        <footer className="team-closing"><span>DS Identity / The collective</span><p>Many roles.<br /><strong>One shared vision.</strong></p><span>{Object.keys(people).length} people. Endless possibility.</span></footer>
      </div>
    </div>
  );
}
