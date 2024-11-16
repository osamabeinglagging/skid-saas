document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (event) => {
    const groupHeader = event.target.closest('.faq-group-header');
    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    groupBody.classList.toggle('open');

    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    otherGroups.forEach((otherGroup) => {
      if(otherGroup !== group){
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.toggle('open');
        otherIcon.classList.toggle('fa-plus');
        otherIcon.classList.toggle('fa-minus');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamb = document.querySelector('.hamburger-button');
  const mobilemenu = document.querySelector('.mobile-menu');

  hamb.addEventListener('click', () => {
    mobilemenu.classList.toggle('active');
  });
});
