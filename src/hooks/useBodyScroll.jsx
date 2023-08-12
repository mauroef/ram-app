import { useEffect, useState } from 'react';

const useBodyScroll = () => {
  const [scrollIsBlocked, setScrollIsBlocked] = useState(false);

  useEffect(() => {
    if (scrollIsBlocked) {
      setScrollIsBlocked(true);
      document.body.style.overflow = 'hidden';
    } else {
      setScrollIsBlocked(false);
      document.body.style.overflow = 'auto';
    }
  }, [scrollIsBlocked]);

  return [scrollIsBlocked, setScrollIsBlocked];
};

export default useBodyScroll;
