document.addEventListener('click', e => {
  if (!e.target) return;
  if (!e.target.classList.contains('view-more')) return;

  const moreIcons = Array.from(e.target.parentElement.children).find(e => e.classList.contains('more-icons'));
  
  if (moreIcons.classList.contains('d-none')) {
    moreIcons.classList.remove('d-none');
    e.target.innerHTML = 'View less';
  } else {
    moreIcons.classList.add('d-none');
    e.target.innerHTML = 'View more';
  }
})