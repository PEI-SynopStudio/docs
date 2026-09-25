import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import TeamSection from '../components/TeamSection';


const projectHighlights = [
  {
    icon: '🚩',
    title: 'Milestones',
    description: 'Track the progress of the project and important deliverables.',
    link: '/docs/milestones/milestone1',
  },
  {
    icon: '📝',
    title: 'Minutes',
    description: 'Meeting notes and summaries of the project meetings.',
    link: '/docs/minutes',
  },
  {
    icon: '📅',
    title: 'Calendar',
    description: 'Upcoming events and deadlines.',
    link: '/docs/calendar',
  },
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

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="row">
              {projectHighlights.map((item, idx) => (
                <div key={idx} className="col col--4 margin-bottom--lg">
                  <div className="card shadow--md" style={{ height: '100%', textAlign: 'center', padding: '1.5rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <Heading as="h3">{item.title}</Heading>
                    <p style={{ color: 'var(--ifm-color-emphasis-700)' }}>{item.description}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <Link className="button button--link" to={item.link}>
                        Access &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section style={{ padding: '4rem 0', backgroundColor: 'var(--sy-navy-dark)', color: '#ffffff' }}> 
          <div className="container">
            <Heading as="h2" style={{ fontSize: '2.6rem', marginBottom: '1rem', textAlign: 'center' }}>
              About Us
            </Heading>
            <p style={{fontSize: '1.15rem',maxWidth: '100%',margin: '0 0 3rem 0',color: 'var(--ifm-color-emphasis-700)',lineHeight: 1.6, textAlign: 'left'}}>
              We are a team of students from the University of Aveiro, working on the SynopStudio project as part of our PEI (Projeto de Engenharia Informática) course.<br/>
              Our goal is to develop an AI tool that can help to edit and summarize large videos to create short and concise summaries, making it easier for users to consume the content.
            </p>
            <div className="row" style={{ justifyContent: 'center' }}>
              <TeamSection />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
