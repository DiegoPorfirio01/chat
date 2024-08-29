import React from 'react';
import FeatureCard from './feature-card';

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <FeatureCard
        icon="🚀"
        titleKey="instantSetup"
        descriptionKey="instantSetup"
      />
      <FeatureCard
        icon="🔒"
        titleKey="secure"
        descriptionKey="secure"
      />
      <FeatureCard
        icon="💻"
        titleKey="crossPlatform"
        descriptionKey="crossPlatform"
      />
    </section>
  );
}