
import { useEffect, useRef, useState } from "react";
import {
  categories,
  links,
  mainGear,
  projects,
  sideGear,
  text,
} from "./content.js";
import MusicPlayer from "./MusicPlayer.jsx";

const BASE = import.meta.env.BASE_URL;

// ========================================
// IDIOMA
// ========================================

function readLang() {
  try {
    const saved = localStorage.getItem("lang");

    if (saved === "pt" || saved === "en") {
      return saved;
    }
  } catch {
    // Navegador sem acesso ao localStorage.
  }

  return navigator.language?.toLowerCase().startsWith("pt")
    ? "pt"
    : "en";
}

// ========================================
// MENU PRINCIPAL ESTILO RPG
// ========================================

function TitleMenu({ t, lang }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  const items = [
    {
      label: t.hero.menu[0],
      href: "#projetos",
    },
    {
      label: t.hero.menu[1],
      href: BASE + (lang === "pt" ? links.cvPt : links.cvEn),
      download: true,
    },
    {
      label: t.hero.menu[2],
      href: "#contato",
    },
  ];

  function onKeyDown(event) {
    if (
      event.key !== "ArrowDown" &&
      event.key !== "ArrowUp"
    ) {
      return;
    }

    event.preventDefault();

    const step = event.key === "ArrowDown" ? 1 : -1;

    const next =
      (active + step + items.length) % items.length;

    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <nav
      className="title-menu"
      aria-label={t.hero.menuLabel}
      onKeyDown={onKeyDown}
    >
      <ul>
        {items.map((item, i) => (
          <li key={item.label}>
            <a
              ref={(el) => {
                refs.current[i] = el;
              }}
              href={item.href}
              download={item.download || undefined}
              className={
                i === active ? "is-active" : undefined
              }
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span
                className="cursor"
                aria-hidden="true"
              >
                ▶
              </span>

              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="title-hint">{t.hero.hint}</p>
    </nav>
  );
}

// ========================================
// CARDS DOS PROJETOS
// ========================================

function ProjectCard({ project, lang, t }) {
  const copy = project[lang];

  return (
    <article className="quest">
      <header className="quest-head">
        <p className="quest-type">{copy.type}</p>

        <h3>{project.name}</h3>

        <p
          className={`quest-party quest-party--${project.team}`}
        >
          {project.team === "solo"
            ? t.projects.solo
            : t.projects.team}
        </p>
      </header>

      <p className="quest-summary">
        {copy.summary}
      </p>

      <p className="quest-reward">
        <strong>{t.projects.learned}:</strong>{" "}
        {copy.reward}
      </p>

      <ul
        className="quest-stack"
        aria-label="Stack"
      >
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <p className="quest-links">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
          >
            {l.kind === "code"
              ? t.projects.code
              : t.projects.site}
          </a>
        ))}
      </p>
    </article>
  );
}

// ========================================
// APLICAÇÃO PRINCIPAL
// ========================================

export default function App() {
  const [lang, setLang] = useState(readLang);
  const [filter, setFilter] = useState("all");

  const t = text[lang];

  // Atualiza e salva o idioma.
  useEffect(() => {
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : "en";

    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Ignora indisponibilidade do armazenamento.
    }
  }, [lang]);

  // Filtragem dos projetos.
  const visible =
    filter === "all"
      ? projects
      : projects.filter(
          (p) => p.category === filter
        );

  return (
    <>
      {/* ACESSIBILIDADE */}
      <a className="skip" href="#conteudo">
        {t.skip}
      </a>

      {/* =================================
          CABEÇALHO
      ================================= */}

      <header className="hud">
        <a className="hud-name" href="#inicio">
          Gabriel Coelho
        </a>

        <nav
          className="hud-nav"
          aria-label="Menu"
        >
          <a href="#projetos">
            {t.nav.projects}
          </a>

          <a href="#sobre">
            {t.nav.about}
          </a>

          <a href="#jornada">
            {t.nav.journey}
          </a>

          <a href="#contato">
            {t.nav.contact}
          </a>
        </nav>

        <button
          type="button"
          className="lang"
          onClick={() =>
            setLang(
              lang === "pt" ? "en" : "pt"
            )
          }
          aria-label={t.switchTo}
        >
          <span
            className={
              lang === "pt" ? "on" : undefined
            }
          >
            PT
          </span>

          <span
            className={
              lang === "en" ? "on" : undefined
            }
          >
            EN
          </span>
        </button>
      </header>

      <main id="conteudo">

        {/* =================================
            TELA INICIAL
        ================================= */}

        <section
          id="inicio"
          className="title-screen"
        >
          <div className="title-copy">
            <p className="title-role">
              {t.hero.role}
            </p>

            <h1>
              Gabriel
              <br />
              Coelho
            </h1>

            <p className="title-intro">
              {t.hero.intro}
            </p>

            <TitleMenu
              t={t}
              lang={lang}
            />
          </div>

          <figure className="title-art">
            <img
              src={BASE + "img/retrato.jpg"}
              alt={t.hero.portraitAlt}
              width="820"
              height="1230"
            />
          </figure>
        </section>

        {/* =================================
            PROJETOS
        ================================= */}

        <section
          id="projetos"
          className="section"
        >
          <div className="section-head">
            <h2>{t.projects.title}</h2>

            <p>{t.projects.lead}</p>
          </div>

          <div
            className="filters"
            role="group"
            aria-label={t.projects.title}
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {t.projects.filters[c]}
              </button>
            ))}
          </div>

          {visible.length ? (
            <div className="quest-grid">
              {visible.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  lang={lang}
                  t={t}
                />
              ))}
            </div>
          ) : (
            <p className="empty">
              {t.projects.empty}
            </p>
          )}
        </section>

        {/* =================================
            SOBRE / FICHA RPG
        ================================= */}

        <section
          id="sobre"
          className="section about"
        >
          <div className="section-head">
            <h2>{t.about.title}</h2>
          </div>

          <div className="sheet">
            <img
              className="sheet-art"
              src={BASE + "img/perfil.jpg"}
              alt={t.about.portraitAlt}
              width="1100"
              height="733"
            />

            <dl className="sheet-stats">
              {t.about.sheet.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="sheet-body">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="gear">
              <h3>{t.about.mainGear}</h3>

              <ul className="gear-main">
                {mainGear.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>

              <h3>{t.about.sideGear}</h3>

              <ul className="gear-side">
                {sideGear.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =================================
            JORNADA
        ================================= */}

        <section
          id="jornada"
          className="section"
        >
          <div className="section-head">
            <h2>{t.journey.title}</h2>
          </div>

          <ol className="journey">
            {t.journey.items.map(
              ([when, what, where]) => (
                <li key={when + what}>
                  <span className="journey-when">
                    {when}
                  </span>

                  <span className="journey-what">
                    {what}
                  </span>

                  <span className="journey-where">
                    {where}
                  </span>
                </li>
              )
            )}
          </ol>

          <div className="writing">
            <h3>{t.writing.title}</h3>

            <p>{t.writing.lead}</p>

            <ul>
              {t.writing.posts.map((post) => (
                <li key={post}>
                  {post}
                </li>
              ))}
            </ul>

            <a
              href={links.devto}
              target="_blank"
              rel="noreferrer"
            >
              {t.writing.all}
            </a>
          </div>
        </section>

        {/* =================================
            CONTATO
        ================================= */}

        <section
          id="contato"
          className="section contact"
        >
          <div className="dialog">
            <h2>{t.contact.title}</h2>

            <p>{t.contact.lead}</p>

            <a
              className="contact-email"
              href={`mailto:${links.email}`}
            >
              {links.email}
            </a>

            <ul className="contact-links">
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href={links.devto}
                  target="_blank"
                  rel="noreferrer"
                >
                  dev.to
                </a>
              </li>

              <li>
                <a
                  href={
                    BASE +
                    (lang === "pt"
                      ? links.cvPt
                      : links.cvEn)
                  }
                  download
                >
                  {t.contact.cv}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* =================================
          RODAPÉ
      ================================= */}

      <footer className="footer">
        <p>
          {t.footer} · {new Date().getFullYear()}
        </p>
      </footer>

      {/* =================================
          PLAYER DE MÚSICA RPG
      ================================= */}

      <MusicPlayer />

    </>
  );
}