import { useState, useEffect } from 'react';

export const leastSquaresFitCalc = (map: Map<number, number>) => {
  const length = map.size;
  if (length < 2) {
    throw new Error('leastSquaresFit() map must be at least 2 values');
  }
  let resTotal = 0;
  let valueTotal = 0;
  map.forEach((value, res) => {
    resTotal += res;
    valueTotal += value;
  });
  const resMean = resTotal / length;
  const valueMean = valueTotal / length;
  let multipliedDiff = 0;
  let squaredDiff = 0;
  map.forEach((value, res) => {
    const resDiff = res - resMean;
    const valueDiff = value - valueMean;
    multipliedDiff += resDiff * valueDiff;
    squaredDiff += resDiff * resDiff;
  });
  const m = multipliedDiff / squaredDiff;
  const b = valueMean - m * resMean;
  return `calc(${m * 100}vw + ${b}px)`;
};

// eslint-disable-next-line no-undef
export const ReferHomeInitialValues: ReferValues = {
  MaleFriend: '',
  FemaleFriend: '',
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
