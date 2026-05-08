export default function Footer() {
  return (
    <footer style={{ background:'var(--bg2)', borderTop:'1px solid var(--subtle)', padding:'2.5rem 2rem', textAlign:'center' }}>
      <p style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:'1.2rem', fontWeight:300, color:'var(--accent)', letterSpacing:'0.15em', marginBottom:'0.5rem' }}>
        FERLENS
      </p>
      <p style={{ fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.12em', color:'var(--muted)', textTransform:'uppercase' }}>
        Photography & Visual Storytelling · New Zealand
      </p>
      <p style={{ fontFamily:'Jost', fontSize:'0.65rem', color:'var(--subtle)', marginTop:'1.5rem', letterSpacing:'0.08em' }}>
        © {new Date().getFullYear()} Ferlens Photography. All rights reserved.
      </p>
    </footer>
  );
}
