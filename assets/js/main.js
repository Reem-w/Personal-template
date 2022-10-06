/**
 * General
 */

/**
 * Layout
 */

/**
 * Brands
 */

const swiper = new Swiper("#brands .swiper", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

/** 
 * Reviews
 */
const swiper2 = new Swiper("#reviews .swiper2", {
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    576: {
      slidesPerView: 1, 
  }, 
  768: {
      slidesPerView: 2,
    },
 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/**
 * Main Content
 */

/**
 * My Projects Section
 */

const filtersBtns = document.querySelectorAll("#my-projects [data-filter]");
const allProjects = document.querySelectorAll("#my-projects .project-card");

function filterBtnClickHandler(e) {
  const clickedFilterBtn = e.target;
  const projectsSelector = clickedFilterBtn.getAttribute("data-filter");
  const relatedProjects = document.querySelectorAll(
    `#my-projects [data-cat="${projectsSelector}"]`
  );

  if (projectsSelector === "all") {
    allProjects.forEach(function (project) {
      project.classList.remove("hide");
    });
  } else {
    allProjects.forEach(function (project) {
      project.classList.add("hide");
    });

    console.log(relatedProjects);

    relatedProjects.forEach(function (relatedProject) {
      relatedProject.classList.remove("hide");
    });
  }

  filtersBtns.forEach(function (filterBtn) {
    filterBtn.classList.remove("active");
  });

  clickedFilterBtn.classList.add("active");
}

filtersBtns.forEach(function (filterBtn) {
  filterBtn.addEventListener("click", filterBtnClickHandler);
});
