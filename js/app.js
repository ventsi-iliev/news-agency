// Sticky banner
const main = document.querySelector("main.main-section--index");
const aside = document.querySelector(".aside-content");
const stickyAdBannerAside = document.querySelector(
  "aside .aside-sticky-ad-banner"
);

stickyAdBannerAside.style.height =
  main.clientHeight -
  aside.clientHeight -
  stickyAdBannerAside.clientHeight +
  "px";

// Mobile menus
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

// Search
const searchIcons = document.querySelectorAll(".search-icon");
const searchWrapper = document.querySelector(".search__wrapper");
const searchInput = document.querySelector(".search__wrapper input");
const searchButton = document.querySelector('.search__wrapper button[type="submit"]');

searchIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if(searchInput.value !== '') {
      searchButton.classList.add('active-search-button');
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
const notificationsIcon = document.querySelector('.notifications-icon');
const notificationWrapper = document.querySelector(
  ".notification__wrapper"
);

// Tabs
const tabs = document.querySelector('.mobile-tabs');
const accents = document.querySelector('.tab__accents--content');
const latest = document.querySelector('.tab__latest--content');
const forYou = document.querySelector('.tab__for-you--content');
const topNewsWrapper = document.querySelector('.top-news__wrapper');

tabs.addEventListener('click', e => {
  const div = e.target.closest('div');

  if(!div.classList.contains('active-tab')) {
    const id = div.id;
    const getRestOfTabs = tabs.querySelectorAll(`div:not(#${id})`);
    getRestOfTabs.forEach(tab => tab.classList.remove('active-tab'));

    // Hide and show sections
    if(id.includes('__accents')) {
      topNewsWrapper.style.display = 'block';
      accents.style.display = 'block';
      latest.style.display = 'none';
      forYou.style.display = 'none';
    } else if(id.includes('__latest')) {
      topNewsWrapper.style.display = 'block';
      accents.style.display = 'none';
      latest.style.display = 'block';
      forYou.style.display = 'none';
    } else if(id.includes('__for-you')) {
      topNewsWrapper.style.display = 'none';
      accents.style.display = 'none';
      latest.style.display = 'none';
      forYou.style.display = 'block';
    }

    div.classList.add('active-tab');
  }
})

// Check for click in the document
document.body.addEventListener("click", (e) => {
  // If the target is the hamburger menu
  if(e.target.closest('.hamburger-icon')) {
    notificationWrapper.classList.remove("show-notifications");

    if (!mobileMenu.classList.contains("show-mobile-menu")) {
      mobileMenu.classList.add("show-mobile-menu");
      document.body.style.overflow = "hidden";
    } else {
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
  if(e.target.closest('.close-notification-icon')) {
    notificationWrapper.classList.remove("show-notifications");
  }
});

window.addEventListener('load', e => {

});

