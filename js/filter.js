(() => {
  const refs = {
    filterButtons: document.querySelectorAll('.portfolio__filter-button'),
    portfolioItems: document.querySelectorAll('.portfolio__item'),
  };

    refs.filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
      refs.filterButtons.forEach((btn) => btn.classList.remove("portfolio__filter-button--active"));
        button.classList.add("portfolio__filter-button--active");

      const filterText = button.textContent.trim();

      refs.portfolioItems.forEach((item) => {
        const itemText = item.querySelector('.portfolio__text').textContent.trim();

        if (filterText === 'Всі' || filterText === itemText) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();





