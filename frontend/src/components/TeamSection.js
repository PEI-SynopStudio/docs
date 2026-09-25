import React from 'react';
import Link from '@docusaurus/Link';

const Members = [
    { name: 'David Monteiro', role: 'Scrum Master', img: '', link: 'https://github.com/DavidMonteiro11', nmec: '125794'},
    { name: 'Tomás Lopes', role: 'Architect', img: '', link: 'https://github.com/tomaslopes11', nmec: '125596'},
    { name: 'Murilo Frezzato', role: 'DevOps', img: '', link: 'https://github.com/mfrezzato', nmec: '125487'},
    { name: 'Daniel Duque', role: 'QA and Testing', img: '', link: 'https://github.com/DukDani', nmec: '124880'},
    { name: 'Lucas Reis', role: 'Product Owner', img: '', link: 'https://github.com/LMorgsdR', nmec: '126287'},
]

const Advisors = [
    { name: 'Diogo Gomes', role: 'Advisor', img: '', link: 'https://diogogomes.com/', nmec: ''},
    { name: 'Rui Raposo', role: 'Advisor', img: '', link: '', nmec: ''},
]

function PersonCard({name, role, img, link, nmec}) {
    const initials = name.split(' ').map((n) => n[0]).slice(0,2).join('')

    return (
        <div className="col person-col-5 margin-bottom--lg">
            <div className="card shadow--md" style={{ height: '100%', minHeight: '260px', minWidth: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.2rem 1.5rem',borderRadius: '12px'}}>
                {img ? (
                <img src={img} alt={name} style={{width: '110px',height: '110px',borderRadius: '50%',objectFit: 'cover',marginBottom: '1rem',boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}/>
                ) : (
                <div style={{width: '110px',height: '110px',borderRadius: '50%',backgroundColor: 'var(--ifm-color-primary-lightest)',color: 'var(--ifm-color-primary-darkest)',display: 'flex',alignItems: 'center',justifyContent: 'center',fontSize: '1.8rem',fontWeight: 'bold',marginBottom: '1rem',}}>
                    {initials}
                </div>
                )}
                
                <div className="card__body" style={{ padding: 0, width: '100%' }}>
                <h3 style={{ marginBottom: '0.25rem', fontSize: '1.25rem' }}>{name}</h3>
                {nmec && (
                    <p style={{ margin: 0, fontWeight: '500', color: 'var(--sy-blue)', fontSize: '1rem' }}>({nmec})</p>
                )}
                {role && (
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--ifm-color-primary)', fontSize: '0.95rem' }}>{role}</p>
                )}
                </div>


                {link && (
                    <div style={{ marginTop: 'auto', paddingTop: '1.2rem' }}>
                        <Link className="button button--secondary button--sm" href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span>GitHub</span> &rarr;
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function TeamSection() {
    return (
        <section style={{ padding: '3rem 0' }}>
            <div className="container">
                <div className="text--center margin-bottom--xl">
                    <h2 style={{ fontSize: '2.2rem', color: '#ffffff' }}>Team Members</h2>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                {Members.map((member, idx) => (
                    <PersonCard key={idx} {...member} />
                ))}
                </div>
                <div className="text--center margin-bottom--lg" style={{ marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '1.8rem', color: '#ffffff' }}>Advisors</h3>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                {Advisors.map((advisor, idx) => (
                    <PersonCard key={idx} {...advisor} />
                ))}
                </div>
            </div>
        </section>
    );
}