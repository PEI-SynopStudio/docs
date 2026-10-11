import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import TeamSection from '../components/TeamSection';
import styles from './index.module.css';


const highlights = [
  {icon: '🚩', title: 'Milestones', description: 'Reports and slides for each phase of the project.', to: '/milestones'},
  {icon: '📝', title: 'Minutes', description: 'Notes from every team meeting.', to: '/minutes'},
  {icon: '📅', title: 'Calendar', description: 'Deadlines, events and the task list.', to: '/calendar'},
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Official Documentation Website of SynopStudio">
      

      <header className="hero hero--primary text--center" style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <Heading as="h1" className="hero__title" style={{ fontSize: '3.5rem' }}>
            {siteConfig.title}
          </Heading>
          <p style={{ fontSize: '1.5rem', fontWeight: 500, marginTop: '-0.5rem' }}>
            PEI - Universidade de Aveiro
          </p>
        </div>
      </header>

      <main>

        <section className={styles.highlightsSection}>
          <div className="container">
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item.title}>
                  <Link to={item.to} className={`card ${styles.highlight}`}>
                    <span className={styles.icon} aria-hidden="true">{item.icon}</span>
                    <Heading as="h3" className={styles.highlightTitle}>{item.title}</Heading>
                    <span className={styles.highlightText}>{item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>


        <section className={styles.aboutSection}> 
          <div className="container">
            <Heading as="h2" style={{ fontSize: '2.6rem', marginBottom: '1rem', textAlign: 'center', color: '#ffffff' }}>
              About Us
            </Heading>
            <div className={styles.aboutText}>
              <p>
                We are a team of students from the University of Aveiro, working on the SynopStudio
                project as part of our PEI (Projeto de Engenharia Informática) course.
              </p>
              <p>
                Our goal is to develop an AI tool that helps edit and summarize large videos into
                short, concise summaries, making the content easier to consume.
              </p>
            </div>
          </div>
        </section>


        <section className={styles.highlightsSection}>
            <div>
              <TeamSection />
            </div>
        </section>
      </main>
    </Layout>
  );
}
