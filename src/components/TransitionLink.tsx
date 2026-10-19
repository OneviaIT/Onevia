import { flushSync } from 'react-dom';
import { Link, useNavigate, type LinkProps } from 'react-router-dom';
import type { MouseEvent } from 'react';

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

/**
 * Link that morphs shared elements (those with a matching `view-transition-name`)
 * between pages using the View Transitions API. Falls back to a normal link
 * when the API is unavailable, the user prefers reduced motion, or the click is
 * a modified click (new tab, etc.).
 */
export function TransitionLink({ to, onClick, ...rest }: LinkProps) {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    const doc = document as ViewTransitionDocument;
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      modified ||
      reduceMotion ||
      !doc.startViewTransition ||
      (rest.target && rest.target !== '_self')
    ) {
      return;
    }
    event.preventDefault();
    doc.startViewTransition(() => {
      flushSync(() => navigate(to));
    });
  };

  return <Link to={to} onClick={handleClick} {...rest} />;
}
