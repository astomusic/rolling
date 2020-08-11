import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { fromEvent, interval, Subscription } from 'rxjs';
import { throttle } from 'rxjs/operators';

export function useInterval(callback, delay) {
  const [intervalState, setIntervalState] = useState(true);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && intervalState) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, intervalState]);

  return {
    start: () => {
      setIntervalState(true);
    },
    stop: () => {
      setIntervalState(false);
    },
  };
}

export function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export function useOnWindowScroll(callback, when = true) {
  const savedHandler = useRef(callback);
  let subscription: Subscription;

  useEffect(() => (savedHandler.current = callback));
  useEffect(() => {
    if (when) {
      const scrollEvent = fromEvent(window, 'scroll');
      const result = scrollEvent.pipe(throttle(() => interval(100)));
      subscription = result.subscribe(() => {
        savedHandler.current();
      });
      return () => subscription.unsubscribe();
    }
  }, [when]);
}

export const useToggle = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(
    (nextValue?: any) => {
      if (typeof nextValue === 'boolean') {
        setValue(nextValue);
      } else {
        setValue((currentValue) => !currentValue);
      }
    },
    [setValue],
  );

  return [value, toggle];
};

export const useComponentSize = (ref) => {
  const getSize = (el) => {
    if (!el) {
      return {};
    }

    return {
      width: el.offsetWidth,
      height: el.offsetHeight,
    };
  };
  const [ComponentSize, setComponentSize] = useState(getSize(ref.current));

  function handleResize() {
    if (ref && ref.current) {
      setComponentSize(getSize(ref.current));
    }
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return ComponentSize;
};
