
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement | null;
const hiddenSkills = document.querySelectorAll('.hidden-skill') as NodeListOf<HTMLElement>;

if (toggleButton && hiddenSkills) {
  let isExpanded = false;

  const toggleSkills = (): void => {
    if (isExpanded) {
      hiddenSkills.forEach(skill => {
        skill.style.display = 'none';
      });
      toggleButton.textContent = 'Show More Skills';
    } else {
      hiddenSkills.forEach(skill => {
        skill.style.display = 'list-item';
      });
      toggleButton.textContent = 'Hide Skills';
    }
    isExpanded = !isExpanded;
  };

  toggleButton.addEventListener('click', toggleSkills);
}
