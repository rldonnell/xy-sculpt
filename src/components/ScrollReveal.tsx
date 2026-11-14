'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/*
 * Site-wide scroll reveal. Every direct child of a section's .wrap (except
 * the homepage hero) rises in as it enters the viewport, using the .fade-up
 * styles in globals.css. Nothing is hidden until this runs, so content never
 * goes missing without JavaScript, and visitors who ask for reduced motion
 * are left alone entirely.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('main section:not(.hero) .wrap > *'),
    ).filter(el => !el.classList.contains('visible'));

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(el => {
      // Stagger siblings slightly: kicker, title, text, then content.
      const index = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
      el.style.transitionDelay = `${Math.min(index, 3) * 80}ms`;
      el.classList.add('fade-up');
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
