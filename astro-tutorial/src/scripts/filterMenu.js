export function toggleOptions(key) {
    const tagListToToggle = key.currentTarget.getAttribute('data-tag-category').nextElementSibling;

    if (tagListToToggle) {
        tagListToToggle.classList.toggle('hidden');
    }
}

export function handleOptionClick(projectCards, tag) {
    

    Array.from(projectCards.children).forEach(card => {
      const cardTags = card.getAttribute('data-tag-names').split(',');

      if (cardTags.includes(tag)) {
          card.style.display = 'flex';
          card.style.transition = 'transform 0.5s';
      } else if (!cardTags.includes(tag)){
          card.style.display = 'none';
        }
    });
  }

document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.getElementById('projectCards');
    // Attach event listeners to header and option elements
    document.querySelectorAll('.filter-menu h3').forEach(header => {
        header.addEventListener('click', function () {
          toggleOptions(key);
        });
      });

      document.querySelectorAll('.filter-menu li').forEach(option => {
        option.addEventListener('click', function () {
          handleOptionClick(projectCards, tag);
        });
      });
      
    })