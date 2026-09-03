/**
 * Fixed depth layers: structural grid veil + film grain.
 * Pure CSS, zero JS cost, sits behind all content.
 */
const Atmosphere = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
    <div className="grid-veil absolute inset-0" />
    <div className="grain absolute inset-0 mix-blend-overlay" />
  </div>
);

export default Atmosphere;
