/**
 * Fixed atmospheric depth and film grain, without a structural grid.
 * Pure CSS, zero JS cost, sits behind all content.
 */
const Atmosphere = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ backgroundImage: "var(--atmosphere)" }}>
    <div className="grain absolute inset-0 mix-blend-overlay" />
  </div>
);

export default Atmosphere;
