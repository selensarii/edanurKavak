export const fastScrollTo = (id: string, offset = 80) => {
  const element = document.getElementById(id.replace('#', ''));
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: targetPosition, behavior: 'instant' });
};
