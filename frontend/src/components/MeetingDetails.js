import React from 'react';
import styles from './MeetingDetails.module.css';

const Members = [
    { name: 'David Monteiro', fullname: 'David Saraiva Monteiro', role: 'Scrum Master', img: 'images/David.jpeg', link: 'https://github.com/DavidMonteiro11', nmec: '125793'},
    { name: 'Tomás Lopes', fullname: 'Tomás Manuel Chaves Lopes', role: 'Architect', img: 'images/Tomas.png', link: 'https://github.com/tomaslopes11', nmec: '125596'},
    { name: 'Murilo Frezzato', fullname: 'Murilo Francisco Frezzato', role: 'DevOps', img: 'images/Murilo.jpeg', link: 'https://github.com/mfrezzato', nmec: '125487'},
    { name: 'Daniel Duque', fullname: 'Daniel Fidalgo Duque', role: 'QA and Testing', img: 'images/Daniel.jpeg', link: 'https://github.com/DukDani', nmec: '124880'},
    { name: 'Lucas Reis', fullname: 'Lucas Morgado dos Reis', role: 'Product Owner', img: 'images/Lucas.jpeg', link: 'https://github.com/LMorgsdR', nmec: '126287'},
]


// Information
export function MeetingDetails({date, time, location, group = 15, supervisors = 'No'}) {
    const items = [
        { label: 'Date', value: date },
        { label: 'Time', value: time },
        { label: 'Location', value: location },
        { label: 'Group', value: group },
        { label: 'With supervisors', value: typeof supervisors === 'boolean' ? (supervisors ? 'Yes' : 'No') : supervisors },
    ]

    return (
        <div className={styles.details}>
            {items.map((item) => (
                <div key={item.label} className={styles.detail}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.value}>{item.value}</span>
                </div>
            ))}
        </div>
    )
}

// Attendance
export function Attendance({absent = [], justification = {}}) {
    const presentCount = Members.filter((m) => !absent.includes(m.nmec)).length;

    return (
        <>
            <p className={styles.summary}>
                {presentCount === Members.length
                    ? `Everyone was present (${presentCount} of ${Members.length}).`
                    : `${presentCount} of ${Members.length} present.`}
            </p>
            <ul className={styles.people}>
                {Members.map((m) => {
                    const isAbsent = absent.includes(m.nmec);
                    return (
                        <li key={m.nmec} className={`${styles.person} ${isAbsent ? styles.absent : styles.present}`}>
                            <span className={styles.status}>{isAbsent ? 'Absent' : 'Present'}</span>
                            <span>{m.fullname}</span>
                            <span className={styles.nmec}>{m.nmec}</span>
                            {isAbsent && justification[m.nmec] && (
                                <span className={styles.justification}>({justification[m.nmec]})</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
