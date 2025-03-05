document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animation");

  const showSequentially = (groups, groupIndex = 0) => {
    if (groupIndex >= groups.length) return; 

    const currentGroup = groups[groupIndex];

    currentGroup.forEach((element) => {
      const animationName = element.dataset.animation;
      const animationDuration = element.dataset.duration;
      const animationTimingFunction = element.dataset.timing;
      const display = element.dataset.display;
      element.style.display = display; 
      element.style.animation = `${animationName} ${animationDuration} ${animationTimingFunction}`; 
    });

    const lastElement = currentGroup[currentGroup.length - 1];
    lastElement.addEventListener(
      "animationend",
      () => showSequentially(groups, groupIndex + 1),
      { once: true }
    );
  };

  const groups = [
    [elements[0]],
    [elements[1], elements[2]],
    [elements[3], elements[4]],
    [elements[5], elements[6]],
    [elements[7], elements[8]],
    [elements[9]],
    [elements[10]]

  ];

  showSequentially(groups);
});
