import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageGreeting() {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img className={clsx('logo-full')} src="img/rciam-logo-full.svg" alt="RCIAM Logo (Full)"/>
      </div>
      <div className="text--center padding-horiz--md">
        <p>
          RCIAM is an identity and access management solution that supports
          multiple identity protocols and frameworks, such as SAML 2.0, OpenID
          Connect, and OAuth 2.0.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/overview"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="RCIAM Documentation"
    >
      <main>
        <HomepageGreeting />
      </main>
    </Layout>
  );
}
