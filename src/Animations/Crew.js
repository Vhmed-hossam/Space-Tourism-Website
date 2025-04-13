export const CrewAnimationSettings = {
  initial: { opacity: 0, x: 70 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 70, scale: 0.9 },
  transition: { duration: 0.7 },
};

export const textAnimationSettings = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};
