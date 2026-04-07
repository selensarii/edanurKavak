export const fastScrollTo = (id: string, offset = 90) => {
  // Ana Sayfa: doğrudan sayfanın en tepesine git
  if (id === '#home' || id === 'home') {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  const element = document.getElementById(id.replace('#', ''));
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: Math.max(0, targetPosition), behavior: 'instant' });
};
