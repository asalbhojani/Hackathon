var toggleButton = document.getElementById('toggleButton');
var hiddenSkills = document.querySelectorAll('.hidden-skill');
if (toggleButton && hiddenSkills) {
    var isExpanded_1 = false;
    var toggleSkills = function () {
        if (isExpanded_1) {
            hiddenSkills.forEach(function (skill) {
                skill.style.display = 'none';
            });
            toggleButton.textContent = 'Show More Skills';
        }
        else {
            hiddenSkills.forEach(function (skill) {
                skill.style.display = 'list-item';
            });
            toggleButton.textContent = 'Hide Skills';
        }
        isExpanded_1 = !isExpanded_1;
    };
    toggleButton.addEventListener('click', toggleSkills);
}
