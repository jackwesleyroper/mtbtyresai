export default async function Page() {
  // Works under /mtbtyresai thanks to basePath; we fetch relative to /public
  const res = await fetch('data/tyres.json', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main style={{ maxWidth: 720, margin: '4rem auto', fontFamily: 'system-ui' }}>
      <h1>MTB Tyre Finder</h1>
      <p>Manufacturers loaded: {data.manufacturers?.length ?? 0}</p>
      <ul>
        {(data.manufacturers ?? []).map((m: any) => (
          <li key={m.id}><a href={m.website} target="_blank">{m.name}</a></li>
        ))}
      </ul>
      <p style={{marginTop: '1rem'}}>Site URL: <code>/mtbtyresai</code> on GitHub Pages.</p>
    </main>
  );
}
