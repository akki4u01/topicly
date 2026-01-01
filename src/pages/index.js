import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Disabling default features for now to focus on custom design
import Heading from '@theme/Heading';
// import NetworkAnimation from '@site/src/components/NetworkAnimation';
import NetworkPacketFlow from '@site/src/components/NetworkPacketFlow';

import styles from './index.module.css';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OSILayersAnimation from '@site/src/components/OSILayersAnimation';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Interactive Master Classes in Networking, Cloud, and Engineering">
      <main>
        <div style={{ paddingTop: '2rem' }}>
          <AnimationGallery />
          <TopicCategories />
        </div>
      </main>
    </Layout>
  );
}

function AnimationGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: <NetworkPacketFlow />, title: "Packet Flow" },
    { component: <OSILayersAnimation />, title: "OSI Model" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {/* Main Content */}
      <div className="w-full">
        {slides[currentSlide].component}
      </div>

      {/* Navigation Overlays */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-50">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-slate-800/50 text-white hover:bg-slate-700/80 transition-all backdrop-blur-sm border border-slate-600"
          aria-label="Previous Animation"
        >
          <ChevronLeft size={32} />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-50">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-slate-800/50 text-white hover:bg-slate-700/80 transition-all backdrop-blur-sm border border-slate-600"
          aria-label="Next Animation"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50 mb-8">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-blue-500 w-8' : 'bg-slate-500 hover:bg-slate-400'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}



function CategoryCard({ title, icon, link, color }) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div className="card-glass padding--lg h-100 display-flex flex-dir-column align-items-center cursor-pointer"
          style={{
            height: '100%',
            transition: 'transform 0.2s ease',
            borderTop: `4px solid ${color || 'var(--ifm-color-primary)'}`
          }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            background: 'var(--ifm-color-emphasis-100)',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </div>
          <Heading as="h3" className="text--center margin-bottom--sm" style={{ color: 'var(--ifm-color-emphasis-900)' }}>{title}</Heading>
          <div className="button button--link">Explore &rarr;</div>
        </div>
      </Link>
    </div>
  )
}

function TopicCategories() {
  const categories = [
    {
      title: 'Layer 2 (Switching)',
      icon: '🔌',
      link: '/docs/category/layer-2-switching',
      color: '#3b82f6' // Blue
    },
    {
      title: 'Layer 3 (Routing)',
      icon: '🌐',
      link: '/docs/IPv4',
      color: '#10b981' // Green
    },
    {
      title: 'Transport & Services',
      icon: '🚚',
      link: '/docs/TCP-UDP',
      color: '#f59e0b' // Amber
    },
    {
      title: 'Automation',
      icon: '🐍',
      link: '/docs/Python-Fundamental',
      color: '#8b5cf6' // Violet
    },
    {
      title: 'Interview Prep',
      icon: '💼',
      link: '/docs/FAANG-Style',
      color: '#ec4899' // Pink
    },
    {
      title: 'OSI Model Layers',
      icon: '📶',
      link: '/osi-model',
      color: '#ec4899' // Pink
    },
    {
      title: 'Interactive Learning',
      icon: '🚀',
      link: '/docs/interactive-features',
      color: '#f43f5e' // Rose
    }
  ];

  return (
    <section className={styles.features} style={{ padding: '6rem 0', background: 'linear-gradient(180deg, var(--ifm-background-color) 0%, var(--ifm-color-emphasis-100) 100%)' }}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" style={{ fontSize: '2.5rem' }}>Explore Topics</Heading>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem' }}>Jump straight into the master class categories</p>
        </div>
        <div className="row justify-center">
          {categories.map((props, idx) => (
            <CategoryCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
