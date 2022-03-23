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
        <img className={clsx('logo-full')} src="img/openaire-login-logo.jpg" alt="OpenAIRE Login Logo (Full)"/>
      </div>
      <div className="text--center padding-horiz--md">
        <p>
        OpenAIRE Login is an authentication and authorisation platform that enables
        researchers to securely access and share common resources and services
        using their existing academic or social identities.
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
      description="OpenAIRE Login Documentation"
    >
      <main>
        <HomepageGreeting />
      </main>
    </Layout>
  );
}
