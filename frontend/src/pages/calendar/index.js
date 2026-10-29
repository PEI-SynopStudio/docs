import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import PdfViewer from '../../components/PdfViewer';

export default function Calendar() {

  return (
    <Layout title="Calendar" description="SynopStudio calendar and task list.">
      <main className={`container ${styles.page}`}>
        <Heading as="h1" className={styles.title}>Task List and Calendar</Heading>
        <p className={styles.intro}>The current task list and the project calendar, as PDFs.</p>
        <Tabs queryString="view" lazy>
          <TabItem value="tasks" label="Task list" default>
            <PdfViewer
              title="Task List"
              src="/docs/files/PEI-Tasklist-SynopStudio.pdf"
              downloadName="PEI-Tasklist-SynopStudio.pdf"
              height={800}
            />
          </TabItem>
          <TabItem value="calendar" label="Calendar">
            <PdfViewer
              title="Project Calendar"
              src="/docs/files/PEI-Calendar-SynopStudio.pdf"
              downloadName="PEI-Calendar-SynopStudio.pdf"
              height={800}
            />
          </TabItem>
        </Tabs>
      </main>
    </Layout>
  );
}