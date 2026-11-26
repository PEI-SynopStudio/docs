import React from 'react';
import Link from '@docusaurus/Link';
import styles from './TeamSection.module.css';

const Members = [
    { name: 'David Monteiro', fullname: 'David Saraiva Monteiro', role: 'Scrum Master', img: 'images/David.jpeg', link: 'https://github.com/DavidMonteiro11', nmec: '125793'},
    { name: 'Tomás Lopes', fullname: 'Tomás Manuel Chaves Lopes', role: 'Architect', img: 'images/Tomas.png', link: 'https://github.com/tomaslopes11', nmec: '125596'},
    { name: 'Murilo Frezzato', fullname: 'Murilo Francisco Frezzato', role: 'DevOps', img: 'images/Murilo.jpeg', link: 'https://github.com/mfrezzato', nmec: '125487'},
    { name: 'Daniel Duque', fullname: 'Daniel Fidalgo Duque', role: 'QA and Testing', img: 'images/Daniel.jpeg', link: 'https://github.com/DukDani', nmec: '124880'},
    { name: 'Lucas Reis', fullname: 'Lucas Morgado dos Reis', role: 'Product Owner', img: 'images/Lucas.jpeg', link: 'https://github.com/LMorgsdR', nmec: '126287'},
]

const Supervisors = [
    { name: 'Diogo Gomes', role: 'Supervisor', img: 'images/diogogomes.png', link: 'https://diogogomes.com/', nmec: ''},
    { name: 'Rui Raposo', role: 'Supervisor', img: 'images/raposo.png', link: 'https://www.ua.pt/pt/p/10315353', nmec: ''},
]

function PersonCard({name, role, img, link, nmec}) {
    const initials = name.split(' ').map((n) => n[0]).slice(0,2).join('')

    return (
        <li className={`card ${styles.card}`}>
        {img ? (
            <img className={styles.img} src={img} alt={name} width="110" height="110" loading="lazy" />
        ) : (
            <span className={styles.initials} aria-hidden="true">{initials}</span>
        )}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        {nmec && <p className={styles.nmec}>{nmec}</p>}
        {link && (
            <Link className={`button button--secondary button--sm ${styles.link}`} href={link} target="_blank" rel="noopener noreferrer">
                Profile
            </Link>
        )}
        </li>
    );
}

export default function TeamSection() {
    return (
        <>
            <h3 className={styles.heading}>Team Members</h3>
            <ul className={styles.list}>
                {Members.map((m) => <PersonCard key={m.nmec} {...m} />)}
            </ul>
            <h3 className={`${styles.heading} ${styles.second}`}>Supervisors</h3>
            <ul className={styles.list}>
                {Supervisors.map((s) => <PersonCard key={s.name} {...s} />)}
            </ul>
        </>
    );
}