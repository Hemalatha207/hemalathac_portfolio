import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  Smartphone,
  ExternalLink,
  Send
} from "lucide-react";


// ========================================
// SKILLS
// ========================================

const skills = [
  {
    name: "React",
    level: "Advanced",
    icon: Code2
  },
  {
    name: "Python",
    level: "Advanced",
    icon: BrainCircuit
  },
  {
    name: "Java",
    level: "Intermediate",
    icon: Code2
  },
  {
    name: "SQL",
    level: "Advanced",
    icon: Database
  },
  {
    name: "UI / UX",
    level: "Intermediate",
    icon: Sparkles
  },
  {
    name: "Mobile",
    level: "Intermediate",
    icon: Smartphone
  }
];


// ========================================
// PROJECTS
// ========================================

const projects = [
  {
    n: "01",

    title: "AI Assistant",

    type: "AI • React • Python",

    text:
      "A conversational assistant designed to make everyday tasks easier through a clean and friendly interface.",

    gradient:
      "linear-gradient(135deg,#ff3cac,#7c3aed)"
  },

  {
    n: "02",

    title: "Smart Agriculture",

    type: "React Native • Python • APIs",

    text:
      "A practical agriculture platform combining weather information, data and intelligent recommendations.",

    gradient:
      "linear-gradient(135deg,#a855f7,#ec4899)"
  },

  {
    n: "03",

    title: "Data Dashboard",

    type: "Python • SQL • Visualization",

    text:
      "An interactive dashboard that turns raw datasets into useful insights and easy-to-understand visual stories.",

    gradient:
      "linear-gradient(135deg,#7c3aed,#ff3cac)"
  }
];


// ========================================
// JOURNEY
// ========================================

const journey = [
  [
    "2026",
    "Building real-world AI & full-stack projects"
  ],

  [
    "2025",
    "Hackathons, certifications & technical projects"
  ],

  [
    "2024",
    "Started the journey into software development"
  ]
];


// ========================================
// APP
// ========================================

export default function App() {

  const [open, setOpen] = useState(false);


  // ========================================
  // SMOOTH SCROLL
  // ========================================

  const go = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setOpen(false);
  };


  return (

    <div className="site">

      {/* BACKGROUND */}

      <div className="noise" />

      <div className="orb orb-a" />

      <div className="orb orb-b" />


      {/* ========================================
          NAVIGATION
      ======================================== */}

      <header className="nav-wrap">

        <nav className="nav">

          <button
            className="brand"
            onClick={() => go("home")}
          >

            <span className="brand-mark">
              ✦
            </span>

            HEMA LATHA C

          </button>


          <div
            className={`links ${
              open ? "show" : ""
            }`}
          >

            {[
              "about",
              "skills",
              "projects",
              "journey",
              "contact"
            ].map((x) => (

              <button
                key={x}
                onClick={() => go(x)}
              >

                {x}

              </button>

            ))}

          </div>


          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >

            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </nav>

      </header>


      <main>


        {/* ========================================
            HERO
        ======================================== */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-copy">


            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="eyebrow"
            >

              <span className="pulse-dot" />

              HELLO, I'M

            </motion.div>


            <motion.h1
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.1
              }}
            >

              HEMA LATHA

              <br />

              <span>C.</span>

            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
            >

              Creative developer crafting thoughtful
              digital experiences where

              <b>
                {" "}
                technology meets creativity.
              </b>

            </motion.p>


            <div className="actions">

              <button
                className="primary"
                onClick={() => go("projects")}
              >

                View my work

                <ArrowUpRight size={18} />

              </button>


              <button
                className="ghost"
                onClick={() => go("contact")}
              >

                Let's talk

              </button>

            </div>

          </div>


          {/* ========================================
              PROFILE PHOTO
          ======================================== */}

          <motion.div
            className="portrait-card"

            initial={{
              opacity: 0,
              scale: 0.92,
              rotate: 2
            }}

            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}

            transition={{
              duration: 0.7
            }}
          >

            <div className="portrait-ring">

              <img
                src="/profile.png"
                alt="Hema Latha C"
                className="profile-photo"
              />

            </div>


            <span className="float-tag tag-one">
              React ✦
            </span>


            <span className="float-tag tag-two">
              AI / ML
            </span>


            <span className="float-tag tag-three">
              Creative
            </span>

          </motion.div>


          <div className="scroll-hint">

            SCROLL TO EXPLORE

            <span>↓</span>

          </div>

        </section>



        {/* ========================================
            ABOUT
        ======================================== */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-label">
            01 / ABOUT
          </div>


          <div className="about-grid">


            <div>

              <div className="big-number">
                01
              </div>


              <h2>

                Building with

                <br />

                <span>
                  purpose.
                </span>

              </h2>

            </div>


            <div className="about-text">

              <p className="lead">

                I'm a developer who enjoys
                turning ideas into useful,
                beautiful products.

              </p>


              <p>

                I work across frontend development,
                backend systems, databases and
                AI-powered applications.

                I care about clean interfaces,
                practical solutions and learning
                something new with every project.

              </p>


              <div className="mini-stats">


                <div>

                  <b>∞</b>

                  <span>
                    Curiosity
                  </span>

                </div>


                <div>

                  <b>24/7</b>

                  <span>
                    Learning
                  </span>

                </div>


                <div>

                  <b>✦</b>

                  <span>
                    Creating
                  </span>

                </div>


              </div>

            </div>

          </div>

        </section>



        {/* ========================================
            SKILLS
        ======================================== */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-label">
            02 / TOOLKIT
          </div>


          <div className="section-head">

            <h2>

              Things I

              <span>
                work with.
              </span>

            </h2>


            <p>

              Technologies I use to design,
              build and ship ideas.

            </p>

          </div>


          <div className="skills-grid">


            {skills.map((s, i) => {

              const Icon = s.icon;


              return (

                <motion.div
                  className="skill-card"
                  key={s.name}

                  whileHover={{
                    y: -8
                  }}
                >

                  <div className="skill-icon">

                    <Icon size={22} />

                  </div>


                  <div>

                    <h3>
                      {s.name}
                    </h3>

                    <span>
                      {s.level}
                    </span>

                  </div>


                  <small>

                    0{i + 1}

                  </small>

                </motion.div>

              );

            })}

          </div>

        </section>



        {/* ========================================
            PROJECTS
        ======================================== */}

        <section
          id="projects"
          className="section projects"
        >

          <div className="section-label">
            03 / SELECTED WORK
          </div>


          <div className="section-head">

            <h2>

              Ideas turned into

              <span>
                products.
              </span>

            </h2>

          </div>


          <div className="project-list">


            {projects.map((p, i) => (

              <motion.article

                className={`project ${
                  i % 2
                    ? "reverse"
                    : ""
                }`}

                key={p.n}

                initial={{
                  opacity: 0,
                  y: 35
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true,
                  amount: 0.2
                }}

              >


                <div
                  className="project-art"
                  style={{
                    background:
                      p.gradient
                  }}
                >

                  <div className="art-grid" />


                  <span>
                    {p.n}
                  </span>


                  <div className="art-word">

                    {p.title}

                  </div>


                  <a
                    href="#contact"
                    onClick={(e) => {

                      e.preventDefault();

                      go("contact");

                    }}
                  >

                    <ExternalLink
                      size={18}
                    />

                  </a>

                </div>



                <div className="project-info">

                  <span className="project-type">

                    {p.type}

                  </span>


                  <h3>

                    {p.title}

                  </h3>


                  <p>

                    {p.text}

                  </p>


                  <button
                    onClick={() =>
                      go("contact")
                    }
                  >

                    Discuss project

                    <ArrowUpRight
                      size={17}
                    />

                  </button>

                </div>


              </motion.article>

            ))}

          </div>

        </section>



        {/* ========================================
            JOURNEY
        ======================================== */}

        <section
          id="journey"
          className="section journey"
        >

          <div className="section-label">
            04 / JOURNEY
          </div>


          <div className="journey-grid">


            <div>

              <h2>

                A little

                <br />

                <span>
                  timeline.
                </span>

              </h2>


              <p>

                Every project, course and
                experiment adds another layer.

              </p>

            </div>


            <div className="timeline">


              {journey.map(
                ([year, text]) => (

                  <div
                    className="timeline-row"
                    key={year}
                  >

                    <b>
                      {year}
                    </b>

                    <i />

                    <p>
                      {text}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>


          {/* CERTIFICATES */}

          <div className="certs">


            <div className="cert">

              <span>✦</span>

              <div>

                <b>
                  Certification
                </b>

                <small>
                  Add your certificate here
                </small>

              </div>

            </div>


            <div className="cert">

              <span>✦</span>

              <div>

                <b>
                  Hackathon / Award
                </b>

                <small>
                  Add your achievement here
                </small>

              </div>

            </div>


            <div className="cert">

              <span>✦</span>

              <div>

                <b>
                  Course / Workshop
                </b>

                <small>
                  Add your credential here
                </small>

              </div>

            </div>


          </div>

        </section>



        {/* ========================================
            CONTACT
        ======================================== */}

        <section
          id="contact"
          className="section contact"
        >

          <div className="contact-card">


            <div className="section-label">

              05 / CONTACT

            </div>


            <h2>

              Have an idea?

              <br />

              <span>
                Let's build it.
              </span>

            </h2>


            <p>

              Open to collaborations,
              internships, projects and
              interesting conversations.

            </p>


            <a
              className="primary inline"
              href="mailto:chemalatha382@gmail.com"
            >

              Send me a message

              <Send size={17} />

            </a>


            <div className="socials">


              <a
                href="https://github.com/Hemalatha207"
                target="_blank"
                rel="noreferrer"
              >

                <Github size={18} />

                GitHub

              </a>


              <a
                href="https://www.linkedin.com/in/hemalatha-c-35527a401/"
                target="_blank"
                rel="noreferrer"
              >

                <Linkedin size={18} />

                LinkedIn

              </a>


              <a
                href="mailto:chemalatha382@gmail.com"
              >

                <Mail size={18} />

                Email

              </a>


            </div>

          </div>

        </section>

      </main>



      {/* ========================================
          FOOTER
      ======================================== */}

      <footer>

        <span>
          ✦ HEMA LATHA C
        </span>


        <span>
          Designed & developed with intention.
        </span>


        <span>
          © 2026
        </span>

      </footer>

    </div>
  );
}