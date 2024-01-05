function toggleTagList(e) {
    const tagListToToggle = document.getElementById(e.target.id).nextElementSibling;
    const chevronIcon = e.target.querySelector('.chevron');

    if (tagListToToggle) {
        tagListToToggle.classList.toggle('hidden');
        chevronIcon.innerHTML = tagListToToggle.classList.contains('hidden') ? '&#9660;' : '&#9650;';
    }
}

function toggleSelected(e) {
    e.target.classList.toggle('selected');
    handleOptionClick();
  }

function handleOptionClick(){
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

function resetTags(){
    const projectCards = document.getElementById('projectCards');
    const allSelectedMenuItems = Array.from(document.querySelectorAll('.filter-menu li.selected'))
    console.log("before", allSelectedMenuItems)
    allSelectedMenuItems.forEach(item => item.classList.remove('selected'));
    console.log("after", allSelectedMenuItems)

    Array.from(projectCards.children).forEach(card => {
        card.classList.remove('hidden')
    })
}

// Attach event listeners to tag category headers and individual tag options
document.querySelectorAll('.filter-menu h3').forEach(header => {
    header.addEventListener('click', toggleTagList);
});

document.querySelectorAll('.filter-menu li').forEach(option => {
    option.addEventListener('click', toggleSelected)
});

document.getElementById("filter-menu-btn").addEventListener('click', resetTags)