import React from "react";
import styles from "./PdfViewer.module.css";

export default function PdfViewer({ src, title, downloadName, height = "100%", width = "100%", toolbar = true }) {
    const frameSrc = `${src}#${toolbar ? "view=FitH" : "toolbar=0&navpanes=0&scrollbar=0"}`;

    return (
        <figure className={styles.viewer}>
            <figcaption className={styles.bar}>
                <span className={styles.name}>{title}</span>
                <span className={styles.actions}>
                    <a className="button button--primary button--sm" href={src} target="_blank" rel="noopener noreferrer">
                        Open in new tab
                    </a>
                    <a className="button button--secondary button--sm" href={src} download={downloadName}>
                        Download PDF
                    </a>
                </span>
            </figcaption>
            <iframe
                className={styles.frame}
                src={frameSrc}
                title={title}
            />
        </figure>
    )
}