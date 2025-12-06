import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Disabling default features for now to focus on custom design
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Interactive Master Classes in Networking, Cloud, and Engineering">
      <HomepageHeader />
      <main>
        <Features />
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <h1 className="hero-title">Elevate Your Tech Career</h1>
        <p className="hero-subtitle">Interactive Master Classes in Networking, Cloud, and Engineering.</p>

        <div className={styles.buttons} style={{ marginTop: '2.5rem', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning 📚
          </Link>
          <Link
            className="button button--lg button-primary-gradient"
            to="/docs/interactive-features">
            Launch Master Class 🚀
          </Link>
          <Link
            className="button button--secondary button--outline button--lg"
            to="/blog">
            Read My Blog ✍️
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding--md card-glass" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'var(--ifm-color-primary-lightest)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>{icon}</div>
        <Heading as="h3" style={{ marginBottom: '1rem' }}>{title}</Heading>
        <p style={{ opacity: 0.9 }}>{description}</p>
      </div>
    </div>
  )
}

function Features() {
  const features = [
    {
      title: 'Interactive Master Classes',
      icon: '🚀',
      description: 'Ditch passive reading. Engage with 400+ interactive Flashcards and Quizzes designed to cement your networking knowledge.',
    },
    {
      title: 'Deep Technical Dives',
      icon: '🔬',
      description: 'Explore complex protocols like BGP, OSPF, and MPLS with detailed breakdowns, packet flows, and real-world scenarios.',
    },
    {
      title: 'Community & Growth',
      icon: '🤝',
      description: 'Join the discussion on our Blog. Share insights, ask questions, and grow your professional network with like-minded engineers.',
    },
  ];

  return (
    <section className={styles.features} style={{ padding: '6rem 0', background: 'linear-gradient(180deg, var(--ifm-background-color) 0%, var(--ifm-color-emphasis-100) 100%)' }}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
