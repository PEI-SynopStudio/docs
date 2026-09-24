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
    description: 'Acompanhe as fases de Inception, Elaboration e Construction do projeto.',
    link: '/docs/milestones/milestone1',
  },
  {
    icon: '📝',
    title: 'Minutes',
    description: 'Registo completo de todas as reuniões de equipa',
    link: '/docs/minutes',
  },
  {
    icon: '📅',
    title: 'Calendário',
    description: 'Datas-chave, prazos de entrega e planeamento temporal do semestre.',
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
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button button--secondary button--lg" to="/docs/milestones/milestone1">
              Ver Milestones 🚀
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/reports/relatorio_final.pdf">
              Relatório Final (PDF) 📄
            </Link>
          </div>
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
                        Aceder &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-color-emphasis-100)' }}>
          <div className="container text--center">
            <Heading as="h2" style={{ marginBottom: '1rem' }}>
              About Us
            </Heading>

            <div className="row" style={{ justifyContent: 'center' }}>
              <TeamSection />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
