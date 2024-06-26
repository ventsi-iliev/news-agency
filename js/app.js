// Sticky banner
const main = document.querySelector("main.main-section--index");
const asideSection = document.querySelector(".aside-section");
const asideContent = document.querySelector(".aside-content");
const stickyAdBannerAside = document.querySelector(
  "aside .aside-sticky-ad-banner"
);

stickyAdBannerAside.style.height =
  main.clientHeight -
  asideContent.clientHeight -
  stickyAdBannerAside.clientHeight +
  "px";

// Mobile menus
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

// Search
const searchIcons = document.querySelectorAll(".search-icon");
const searchWrapper = document.querySelector(".search__wrapper");
const searchInput = document.querySelector(".search__wrapper input");
const searchButton = document.querySelector(
  '.search__wrapper button[type="submit"]'
);

searchIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if (searchInput.value !== "") {
      searchButton.classList.add("active-search-button");
    }
    searchWrapper.classList.add("show-search__wrapper");
  });
});

searchWrapper.addEventListener("click", (e) => {
  if (e.target.closest(".close-search__wrapper")) {
    searchWrapper.classList.remove("show-search__wrapper");
  }
});

searchInput.addEventListener("input", (e) => {
  if (e.target.closest("input").value !== "") {
    searchButton.classList.add("active-search-button");
  } else {
    searchButton.classList.remove("active-search-button");
  }
});

// Notifications
const notificationsIcon = document.querySelector(".notifications-icon");
const notificationWrapper = document.querySelector(".notification__wrapper");

// Tabs
const tabs = document.querySelector(".mobile-tabs");
const accents = document.querySelector(".tab__accents--content");
const latest = document.querySelector(".tab__latest--content");
const forYou = document.querySelector(".tab__for-you--content");
const topNewsWrapper = document.querySelector(".top-news__wrapper");

tabs.addEventListener("click", (e) => {
  const div = e.target.closest("div");

  if (!e.target.closest(".tab")) {
    return;
  }

  if (!div.classList.contains("active-tab")) {
    const id = div.id;
    alert(id);
    const getRestOfTabs = tabs.querySelectorAll(`div:not(#${id})`);
    getRestOfTabs.forEach((tab) => tab.classList.remove("active-tab"));

    // Hide and show sections
    if (id.includes("__accents")) {
      topNewsWrapper.style.display = "block";
      accents.style.display = "block";
      latest.style.display = "none";
      forYou.style.display = "none";
    } else if (id.includes("__latest")) {
      topNewsWrapper.style.display = "block";
      accents.style.display = "none";
      latest.style.display = "grid";
      forYou.style.display = "none";
    } else if (id.includes("__for-you")) {
      topNewsWrapper.style.display = "none";
      accents.style.display = "none";
      latest.style.display = "none";
      forYou.style.display = "block";
    }

    div.classList.add("active-tab");
  }
});

// Check for click in the document
document.body.addEventListener("click", (e) => {
  // If the target is the hamburger menu
  const hamburgerIcon = e.target.closest(".hamburger-icon");

  if (hamburgerIcon) {
    notificationWrapper.classList.remove("show-notifications");

    if (!mobileMenu.classList.contains("show-mobile-menu")) {
      hamburgerIcon.querySelector(".close-menu").style.display = "block";
      hamburgerIcon.querySelector("i:not(.close-menu)").style.display = "none";

      mobileMenu.classList.add("show-mobile-menu");
      document.body.style.overflow = "hidden";
    } else {
      hamburgerIcon.querySelector(".close-menu").style.display = "none";
      hamburgerIcon.querySelector("i:not(.close-menu)").style.display = "block";

      mobileMenu.style.top =
        document.querySelector("header.main-header").scrollHeight + "px";
      mobileMenu.classList.remove("show-mobile-menu");
      document.body.style.overflow = "auto";
    }
  }

  // If it is notification icon
  if (e.target.closest(".notifications-icon")) {
    if (notificationWrapper.classList.contains("show-notifications")) {
      notificationWrapper.classList.remove("show-notifications");
    } else {
      notificationWrapper.classList.add("show-notifications");
    }
  }

  // If it is close icon
  if (e.target.closest(".close-notification-icon")) {
    notificationWrapper.classList.remove("show-notifications");
  }
});

// Detect switch orientation
let landscape = window.matchMedia("(orientation: landscape)");
landscape.addEventListener("change", (e) => {
  const allSections = document.querySelectorAll(
    ".main-section--index > section"
  );

  allSections.forEach((section) => (section.style.display = "grid"));
  asideSection.style.display = "grid";
  topNewsWrapper.style.display = "grid";
  accents.style.display = "grid";
  latest.style.display = "grid";
  forYou.style.display = "grid";
});

// Go to top
const goToTopButton = document.getElementById("back-to-top");
goToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
