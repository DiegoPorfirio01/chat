import React from 'react'

import FeatureCard from './feature-card'

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 lg:grid-cols-3"
    >
      <FeatureCard
        icon="🚀"
        titleKey="instantSetup"
        descriptionKey="instantSetup"
      />
      <FeatureCard icon="🔒" titleKey="secure" descriptionKey="secure" />
      <FeatureCard
        icon="💻"
        titleKey="crossPlatform"
        descriptionKey="crossPlatform"
      />
    </section>
  )
}
