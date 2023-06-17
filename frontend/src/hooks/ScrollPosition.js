/*import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updateScrollPosition = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', updateScrollPosition);

		updateScrollPosition();

		return () => window.removeEventListener('scroll', updateScrollPosition);
	}, []);

    return scrollPosition;
};*/
import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    updateScrollPosition();

    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return scrollPosition;
};

