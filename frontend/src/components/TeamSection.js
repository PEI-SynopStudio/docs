import React from 'react';
import Link from '@docusaurus/Link';

const Members = [
    { name: 'David Monteiro', role: 'Scrum Master', img: '', github: 'https://github.com/DavidMonteiro11'},
    { name: 'Tomás Lopes', role: '', img: '', github: 'https://github.com/tomaslopes11'},
    { name: 'Murilo Frezzato', role: 'DevOps', img: '', github: 'https://github.com/mfrezzato'},
    { name: 'Daniel Duque', role: '', img: '', github: 'https://github.com/DukDani'},
    { name: 'Lucas Reis', role: 'Product Owner', img: '', github: 'https://github.com/LMorgsdR'},
]

const Advisors = [
    { name: 'Diogo Gomes', role: 'Advisor', img: '', github: ''},
    { name: 'Rui Raposo', role: 'Advisor', img: '', github: ''},
]

function PersonCard({name, role, img, github}) {
    const initials = name.split(' ').map((n) => n[0]).slice(0,2).join('')

    return (
        <div className="col col--4 margin-bottom--lg">
            <div className="card shadow--md" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem',borderRadius: '12px'}}>
                {img ? (
                <img src={img} alt={name} style={{width: '85px',height: '85px',borderRadius: '50%',objectFit: 'cover',marginBottom: '1rem',boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}/>
                ) : (
                <div style={{width: '85px',height: '85px',borderRadius: '50%',backgroundColor: 'var(--ifm-color-primary-lightest)',color: 'var(--ifm-color-primary-darkest)',display: 'flex',alignItems: 'center',justifyContent: 'center',fontSize: '1.8rem',fontWeight: 'bold',marginBottom: '1rem',}}>
                    {initials}
                </div>
                )}
                
                <div className="card__body" style={{ padding: 0, width: '100%' }}>
                <h3 style={{ marginBottom: '0.25rem', fontSize: '1.25rem' }}>{name}</h3>
                {role && (
                    <p style={{ margin: 0, fontWeight: '600', color: 'var(--ifm-color-primary)', fontSize: '0.95rem' }}>{role}</p>
                )}
                </div>

                {github && (
                    <div style={{ marginTop: 'auto', paddingTop: '1.2rem' }}>
                        <Link className="button button--secondary button--sm" href={github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
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
                    <h2 style={{ fontSize: '2.2rem' }}>Team Members</h2>
                </div>
                <div className="row" style={{ justifyContent: 'center' }}>
                {Members.map((member, idx) => (
                    <PersonCard key={idx} {...member} />
                ))}
                </div>
                <div className="text--center margin-bottom--lg" style={{ marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '1.8rem' }}>Advisors</h3>
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