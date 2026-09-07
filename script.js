const portfolioItems = [
  { src: "August !st week/ayah of the day anwaar copy.png", title: "Ayah of the day anwaar", category: "faith" },
  { src: "August !st week/ayah of the day anwaar2 copy.png", title: "Ayah of the day anwaar2", category: "faith" },
  { src: "August !st week/Ayat of the day 1 copy.png", title: "Ayat of the day 1", category: "faith" },
  { src: "August !st week/challenge poster copy.png", title: "Challenge poster", category: "community" },
  { src: "August !st week/did you know copy 2.png", title: "Did you know 2", category: "social" },
  { src: "August !st week/did you know copy.png", title: "Did you know", category: "social" },
  { src: "August !st week/habaib quote Ali alfijr copy.png", title: "Habaib quote Ali alfijr", category: "faith" },
  { src: "August !st week/Habib Abubakar copy.png", title: "Habib Abubakar", category: "faith" },
  { src: "August !st week/hadith of the day copy nwmc.png", title: "Hadith of the day", category: "faith" },
  { src: "August !st week/Hadith of the day copy.png", title: "Hadith of the day", category: "faith" },
  { src: "August !st week/Hadith of the day nwmc copy.png", title: "Hadith of the day", category: "faith" },
  { src: "August !st week/hadith of the day1 copy nwmc.png", title: "Hadith of the day1", category: "faith" },
  { src: "August !st week/jumuah mubarak copy Anwaar center.png", title: "Jumuah mubarak", category: "faith" },
  { src: "August !st week/jumuah mubarak minar copy.png", title: "Jumuah mubarak minar", category: "faith" },
  { src: "August !st week/Q&a 2 copy minar.png", title: "Q&A 2 minar", category: "social" },
  { src: "August !st week/q&a copy Minar.png", title: "Q&A Minar", category: "social" },
  { src: "july week 2/ayah of the week anwaar center.png", title: "Ayah of the week", category: "faith" },
  { src: "july week 2/ayah of the week copy nwmc.png", title: "Ayah of the week", category: "faith" },
  { src: "july week 2/Challenge poster Nwmc copy.png", title: "Challenge poster", category: "community" },
  { src: "july week 2/click and go 2 copy.png", title: "Click and go 2", category: "social" },
  { src: "july week 2/click_go_coming_soon_ copy.png", title: "Click go coming soon", category: "social" },
  { src: "july week 2/click_go_wolf_lubricants.png", title: "Click go wolf lubricants", category: "social" },
  { src: "july week 2/did you knowUmrah  Minar.png", title: "Did you know Umrah Minar", category: "community" },
  { src: "july week 2/habaib quote anwaar center.png", title: "Habaib quote", category: "faith" },
  { src: "july week 2/hadith of the day  Anwaar center.png", title: "Hadith of the day", category: "faith" },
  { src: "july week 2/hadith of the week copy nwmc.png", title: "Hadith of the week", category: "faith" },
  { src: "july week 2/Jumuah mubarak Anwaar center.png", title: "Jumuah mubarak", category: "faith" },
  { src: "july week 2/jumuah mubarak Minar.png", title: "Jumuah mubarak Minar", category: "faith" },
  { src: "july week 2/Jumuah mubarak Nwmc copy.png", title: "Jumuah mubarak", category: "faith" },
  { src: "july week 2/Masjid Anwaar Sheikh Abdullahi quote copy.png", title: "Masjid Anwaar Sheikh Abdullahi quote", category: "faith" },
  { src: "july week 2/Minar did you know safaris .png", title: "Minar did you know safaris", category: "community" },
  { src: "july week 4/Alhajun Jumuah Mubarak copy.png", title: "Alhajun Jumuah Mubarak", category: "faith" },
  { src: "july week 4/Alhajun Mistakes to avoid during umrah copy.png", title: "Alhajun mistakes to avoid during umrah", category: "community" },
  { src: "july week 4/Anwaar center Hadith of the day copy.png", title: "Hadith of the day", category: "faith" },
  { src: "july week 4/Ayat of the day Anwaar center .png", title: "Ayat of the day", category: "faith" },
  { src: "july week 4/Ayat of the day copy nwmc.png", title: "Ayat of the day", category: "faith" },
  { src: "july week 4/did you know copy.png", title: "Did you know", category: "social" },
  { src: "july week 4/Habaibs words Anwaar center .png", title: "Habaibs words", category: "faith" },
  { src: "july week 4/hadith of the day copy nwmc.png", title: "Hadith of the day", category: "faith" },
  { src: "july week 4/Jumuah mubarak Anwaar center copy.png", title: "Jumuah mubarak", category: "faith" },
  { src: "july week 4/sheikh Abdillahi Yusuf quote copy.png", title: "Sheikh Abdillahi Yusuf quote", category: "faith" },
  { src: "july week 4/zakat nwmc copy nwmc.png", title: "Zakat", category: "community" },
  { src: "July week3/Al-habib Quote Anwaar center copy.png", title: "Al-habib quote", category: "faith" },
  { src: "July week3/Alhajun Jumuah Mubarak copy.png", title: "Alhajun Jumuah Mubarak", category: "faith" },
  { src: "July week3/Ayat of the day Anwaar center copy.png", title: "Ayat of the day", category: "faith" },
  { src: "July week3/Ayat of the day nwmc copy.png", title: "Ayat of the day", category: "faith" },
  { src: "July week3/did you know copy.png", title: "Did you know", category: "social" },
  { src: "July week3/Egypt draft copy.png", title: "Egypt draft", category: "social" },
  { src: "July week3/hadith of the day Anwaar center copy.png", title: "Hadith of the day", category: "faith" },
  { src: "July week3/hadith of the week nwmc copy.png", title: "Hadith of the week", category: "faith" },
  { src: "July week3/Jumuah Mubarak Anwaar center copy.png", title: "Jumuah Mubarak", category: "faith" },
  { src: "July week3/Jumuah mubarak lamu bites copy.png", title: "Jumuah mubarak lamu bites", category: "faith" },
  { src: "July week3/Jumuah Mubarak Minar copy.png", title: "Jumuah Mubarak Minar", category: "faith" },
  { src: "July week3/Jumuah Mubarak nwmc Jumuah Mubarak.png", title: "Jumuah Mubarak Nwmc", category: "faith" },
  { src: "July week3/sheikh quote masjid anwar copy.png", title: "Sheikh quote masjid anwar", category: "faith" },
  { src: "July week3/week challenge nwmc.png", title: "Week challenge", category: "community" },
  { src: "week4/Abdullah Salih Quote June .week4 copy.png", title: "Abdullah Salih Quote", category: "faith" },
  { src: "week4/Alhajun Jumuah poster week4.png", title: "Alhajun Jumuah poster", category: "faith" },
  { src: "week4/ALMAWADDAH JUMA POSTER june 19 copy.png", title: "Almawaddah Juma poster 19", category: "social" },
  { src: "week4/ALMAWADDAH JUMA POSTER June Week4.png", title: "Almawaddah Juma poster", category: "social" },
  { src: "week4/Anwaaar sheikh Quote.png", title: "Anwaaar sheikh Quote", category: "faith" },
  { src: "week4/Anwaar foundation Habaib quote.png", title: "Anwaar foundation Habaib quote", category: "faith" },
  { src: "week4/Anwaar Foundation quote of the week copy.png", title: "Anwaar Foundation quote of the week", category: "faith" },
  { src: "week4/Anwar foundation Jumuah Mubarak wk4 copy.png", title: "Jumuah Mubarak", category: "faith" },
  { src: "week4/ayah of the week Anwar foundation week4 copy.png", title: "Ayah of the week", category: "faith" },
  { src: "week4/Did you know 2.png", title: "Did you know 2", category: "social" },
  { src: "week4/Did you know fact 1.png", title: "Did you know fact 1", category: "social" },
  { src: "week4/Did you know Minar.png", title: "Did you know Minar", category: "social" },
  { src: "week4/Hadith of the week 4 anwaar foundation .png", title: "Hadith of the week 4 anwaar foundation", category: "faith" },
  { src: "week4/Minar Jumuah Mubarak week 4 copy.png", title: "Minar Jumuah Mubarak week 4", category: "faith" },
  { src: "week4/nairobi west Jumuah mubarak June   week 4.png", title: "Nairobi west Jumuah mubarak week 4", category: "faith" },
  { src: "week4/nairobi west jumuah mubarak week 4 copy.png", title: "Nairobi west jumuah mubarak week 4", category: "faith" },
  { src: "week4/NWM Jumuah mubarak week 4 Copy.png", title: "Jumuah mubarak week 4", category: "faith" },
  { src: "week4/week challenge Nwm.png", title: "Week challenge", category: "community" },
  { src: "week4/weekday challenge masjid taqwa copy.png", title: "Weekday challenge masjid taqwa", category: "community" }
];

const gallery = document.querySelector(".gallery-grid");
const reelTrack = document.querySelector(".reel-track");
const filterButtons = document.querySelectorAll(".filter-chip");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const motionFrames = document.querySelectorAll(".motion-frame");

function titleCaseCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function renderPortfolio() {
  gallery.innerHTML = portfolioItems.map((item, index) => `
    <article class="work-card" data-category="${item.category}">
      <button type="button" class="work-open" aria-label="Open ${item.title} design">
        <img src="${item.src}" alt="${item.title} design" loading="lazy">
      </button>
      <div>
        <span>${titleCaseCategory(item.category)}</span>
        <h3>${item.title}</h3>
      </div>
    </article>
  `).join("");

  const reelItems = [...portfolioItems, ...portfolioItems.slice(0, 16)];
  reelTrack.innerHTML = reelItems.map((item) => `<img src="${item.src}" alt="${item.title} poster" loading="lazy">`).join("");
}

renderPortfolio();

motionFrames.forEach((frame, frameIndex) => {
  const images = frame.querySelectorAll("img");
  let activeIndex = 0;

  window.setInterval(() => {
    images[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add("active");
  }, frameIndex === 0 ? 3200 : 4100);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    const workCards = document.querySelectorAll(".work-card");

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    workCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      if (shouldShow) {
        card.hidden = false;
        requestAnimationFrame(() => {
          card.style.opacity = "1";
          card.style.transform = "";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.96) translateY(12px)";
        window.setTimeout(() => {
          card.hidden = true;
        }, 260);
      }
    });
  });
});

gallery.addEventListener("click", (event) => {
  const button = event.target.closest(".work-open");

  if (button) {
    const image = button.querySelector("img");
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
  }
});

lightboxClose.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
});
