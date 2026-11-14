/*
 * Re-mounts on every navigation (unlike layout.tsx), so each new page fades
 * up into place and a gold line sweeps across the top of the window.
 * Styles: "Page transitions" in globals.css. Reduced motion turns both off.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="route-sweep" aria-hidden="true" />
      <div className="page-enter">{children}</div>
    </>
  );
}
