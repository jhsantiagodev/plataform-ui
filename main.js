const allVideos = document.querySelectorAll("video");
const sideBar = document.querySelector(".section__left");
const sidebarItems = document.querySelectorAll(".sidebar .item");
const categories = document.querySelectorAll(".separator__link");

//play videos
allVideos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});

//add class active o remove
sidebarItems.forEach((sideItem) => {
  sideItem.addEventListener("click", () => {
    sidebarItems.forEach((item) => {
      item.classList.remove("active");
    });
    sideItem.classList.add("active");
  });
});

//add class active o remove
categories.forEach((catItem) => {
  catItem.addEventListener("click", () => {
    categories.forEach((cat) => {
      cat.classList.remove("active");
    });
    catItem.classList.add("active");
  });
});
