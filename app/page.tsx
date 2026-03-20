export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>VentureWorks Pipeline Test</h1>
      <p style={{ color: '#666', lineHeight: 1.6 }}>
        If you can see this page, the deployment pipeline is working.
      </p>
      <p style={{ marginTop: '1rem', padding: '1rem', background: '#f0f9ff', borderRadius: '8px', fontSize: '0.875rem' }}>
        Deployed at: {new Date().toISOString()}
      </p>
    </main>
  );
}
