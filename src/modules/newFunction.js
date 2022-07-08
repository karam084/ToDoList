export default function newFunction(description, li) {
  description.addEventListener('focusout', () => {
    description.readOnly = true;
    li.classList.remove('active');
  });
}
