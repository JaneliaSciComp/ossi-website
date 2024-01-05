function toggleOptions(e) {
    const tagListToToggle = document.getElementById(e.target.id).nextElementSibling;

    if (tagListToToggle) {
        tagListToToggle.classList.toggle('hidden');
    }
}

function handleOptionClick(e){
    const selectedTag = e.target.id
    const projectCards = document.getElementById('projectCards');

    Array.from(projectCards.children).forEach(card => {  
        if (card.classList.contains(selectedTag)) {
            card.style.display = 'flex';
            card.style.transition = 'transform 0.5s';
        } else if (!card.classList.contains(selectedTag)){
            card.style.display = 'none';
          }
      });

}

// Attach event listeners to tag category headers and individual tag options
document.querySelectorAll('.filter-menu h3').forEach(header => {
    header.addEventListener('click', toggleOptions(e));
});

document.querySelectorAll('.filter-menu li').forEach(option => {
    option.addEventListener('click', handleOptionClick(e))
});