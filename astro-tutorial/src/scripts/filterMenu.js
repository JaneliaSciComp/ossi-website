function toggleOptions(e) {
    const tagListToToggle = document.getElementById(e.target.id).nextElementSibling;

    if (tagListToToggle) {
        tagListToToggle.classList.toggle('hidden');
    }
}

function handleOptionClick(e){
    const projectCards = document.getElementById('projectCards');
    const allSelectedTags = Array.from(document.querySelectorAll('.filter-menu li.selected')).map(tag => tag.id);

    Array.from(projectCards.children).forEach(card => {  
        const cardTags = Array.from(card.classList);
        const shouldShow = allSelectedTags.some(tag => cardTags.includes(tag));

        if (shouldShow) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
      });

}

// Attach event listeners to tag category headers and individual tag options
document.querySelectorAll('.filter-menu h3').forEach(header => {
    header.addEventListener('click', toggleOptions);
});

document.querySelectorAll('.filter-menu li').forEach(option => {
    option.addEventListener('click', (e =>{
        e.target.classList.toggle('selected')
        handleOptionClick(e)
        })
    )
});