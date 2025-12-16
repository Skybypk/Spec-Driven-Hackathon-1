import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ModuleFeatures from '@site/src/components/ModuleFeatures';
import SearchBar from '@site/src/components/SearchBar';
import Heading from '@theme/Heading';
import React from 'react';



import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`${styles['button--custom']} button button--lg`}
            to="/docs/intro">
            Start Reading Now
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to My Book from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.searchSection}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <ModuleFeatures />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
 