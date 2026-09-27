import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Calendar() {
  const [tab, setTab] = useState('calendar');

  return (
    <Layout title="Calendar" description="SynopStudio Calendar and Task List.">
      <main className={styles.page}>
        <div className={styles.tabs}>
          <button
            className={`button ${tab === 'calendar' ? 'button--primary' : 'button--secondary'}`}
            onClick={() => setTab('calendar')}
          >
            📅 Calendar
          </button>
          <button
            className={`button ${tab === 'tasks' ? 'button--primary' : 'button--secondary'}`}
            onClick={() => setTab('tasks')}
          >
            📝 Task List
          </button>
        </div>

        {tab === 'calendar' && (
          <div>
            <div className={styles.header}>
              <h1 className={styles.title}>Calendar</h1>
              <a
                href="/docs/files/PEI-Calendar-SynopStudio.pdf"
                download
                className={`button button--primary ${styles.downloadBtn}`}
              >
                Download Calendar (PDF)
              </a>
            </div>
            <p>Below you can check the project's calendar (PDF).</p>
            <iframe
              src="/docs/files/PEI-Calendar-SynopStudio.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className={styles.viewer}
              title="Calendar"
            />
          </div>
        )}

        {tab === 'tasks' && (
          <div>
            <div className={styles.header}>
              <h1 className={styles.title}>Task List</h1>
              <a
                href="/docs/files/TaskList.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`button button--primary ${styles.downloadBtn}`}
              >
                Download Task List (PDF)
              </a>
            </div>
            <p>Below you can check our task list (PDF).</p>
            <iframe
              src="/docs/files/TaskList.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className={styles.viewer}
              title="Task List"
            />
          </div>
        )}
      </main>
    </Layout>
  );
}