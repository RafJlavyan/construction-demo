import React from 'react';
import Hero from '@/components/Hero/Hero';
import FeaturedProject from '@/components/FeaturedProject/FeaturedProject';
import ProjectsFilter from '@/components/ProjectsFilter/ProjectsFilter';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import ServicesAccordion from '@/components/ServicesAccordion/ServicesAccordion';
import ConstructionTimeline from '@/components/ConstructionTimeline/ConstructionTimeline';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import AboutEditorial from '@/components/AboutEditorial/AboutEditorial';
import SafetyMatrix from '@/components/SafetyMatrix/SafetyMatrix';
import InsightsSection from '@/components/InsightsSection/InsightsSection';
import PreFooterCTA from '@/components/PreFooterCTA/PreFooterCTA';
import { PROJECTS } from '@/data';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Project Showcase */}
      <FeaturedProject />

      {/* 3. Filterable Projects Portfolio */}
      <ProjectsFilter projects={PROJECTS} />

      {/* 4. From Blueprint to Reality Process */}
      <ProcessSection />

      {/* 5. Services Panels */}
      <ServicesAccordion />

      {/* 6. Construction Progress Timeline */}
      <ConstructionTimeline />

      {/* 7. Numbers & Company Scale */}
      <StatsCounter />

      {/* 8. About & Philosophy Editorial */}
      <AboutEditorial />

      {/* 9. Safety & Engineering Standards */}
      <SafetyMatrix />

      {/* 10. Featured Insights & Journal */}
      <InsightsSection />

      {/* 11. Pre-Footer Call to Action */}
      <PreFooterCTA />
    </>
  );
}
