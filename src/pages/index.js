import React from 'react';

import { Layout, SEO, Hero, CardGrid } from '../components/elements';

export default function indexPage() {
  return (
    <Layout>
      <SEO
        title="Anto Wiranto"
        description="My website persoanl for portfolio"
      />
      <Hero />

    </Layout>
  );
}
