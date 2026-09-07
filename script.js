const portfolioItems = [
  { src: "assets/optimized/August !st week/ayah of the day anwaar copy.webp", title: "Ayah of the day anwaar", category: "faith" },
  { src: "assets/optimized/August !st week/ayah of the day anwaar2 copy.webp", title: "Ayah of the day anwaar2", category: "faith" },
  { src: "assets/optimized/August !st week/Ayat of the day 1 copy.webp", title: "Ayat of the day 1", category: "faith" },
  { src: "assets/optimized/August !st week/challenge poster copy.webp", title: "Challenge poster", category: "community" },
  { src: "assets/optimized/August !st week/did you know copy 2.webp", title: "Did you know 2", category: "social" },
  { src: "assets/optimized/August !st week/did you know copy.webp", title: "Did you know", category: "social" },
  { src: "assets/optimized/August !st week/habaib quote Ali alfijr copy.webp", title: "Habaib quote Ali alfijr", category: "faith" },
  { src: "assets/optimized/August !st week/Habib Abubakar copy.webp", title: "Habib Abubakar", category: "faith" },
  { src: "assets/optimized/August !st week/hadith of the day copy nwmc.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/August !st week/Hadith of the day copy.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/August !st week/Hadith of the day nwmc copy.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/August !st week/hadith of the day1 copy nwmc.webp", title: "Hadith of the day1", category: "faith" },
  { src: "assets/optimized/August !st week/jumuah mubarak copy Anwaar center.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "assets/optimized/August !st week/jumuah mubarak minar copy.webp", title: "Jumuah mubarak minar", category: "faith" },
  { src: "assets/optimized/August !st week/Q&a 2 copy minar.webp", title: "Q&A 2 minar", category: "social" },
  { src: "assets/optimized/August !st week/q&a copy Minar.webp", title: "Q&A Minar", category: "social" },
  { src: "assets/optimized/july week 2/ayah of the week anwaar center.webp", title: "Ayah of the week", category: "faith" },
  { src: "assets/optimized/july week 2/ayah of the week copy nwmc.webp", title: "Ayah of the week", category: "faith" },
  { src: "assets/optimized/july week 2/Challenge poster Nwmc copy.webp", title: "Challenge poster", category: "community" },
  { src: "assets/optimized/july week 2/click and go 2 copy.webp", title: "Click and go 2", category: "social" },
  { src: "assets/optimized/july week 2/click_go_coming_soon_ copy.webp", title: "Click go coming soon", category: "social" },
  { src: "assets/optimized/july week 2/click_go_wolf_lubricants.webp", title: "Click go wolf lubricants", category: "social" },
  { src: "assets/optimized/july week 2/did you knowUmrah  Minar.webp", title: "Did you know Umrah Minar", category: "community" },
  { src: "assets/optimized/july week 2/habaib quote anwaar center.webp", title: "Habaib quote", category: "faith" },
  { src: "assets/optimized/july week 2/hadith of the day  Anwaar center.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/july week 2/hadith of the week copy nwmc.webp", title: "Hadith of the week", category: "faith" },
  { src: "assets/optimized/july week 2/Jumuah mubarak Anwaar center.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "assets/optimized/july week 2/jumuah mubarak Minar.webp", title: "Jumuah mubarak Minar", category: "faith" },
  { src: "assets/optimized/july week 2/Jumuah mubarak Nwmc copy.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "assets/optimized/july week 2/Masjid Anwaar Sheikh Abdullahi quote copy.webp", title: "Masjid Anwaar Sheikh Abdullahi quote", category: "faith" },
  { src: "assets/optimized/july week 2/Minar did you know safaris .webp", title: "Minar did you know safaris", category: "community" },
  { src: "assets/optimized/july week 4/Alhajun Jumuah Mubarak copy.webp", title: "Alhajun Jumuah Mubarak", category: "faith" },
  { src: "assets/optimized/july week 4/Alhajun Mistakes to avoid during umrah copy.webp", title: "Alhajun mistakes to avoid during umrah", category: "community" },
  { src: "assets/optimized/july week 4/Anwaar center Hadith of the day copy.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/july week 4/Ayat of the day Anwaar center .webp", title: "Ayat of the day", category: "faith" },
  { src: "assets/optimized/july week 4/Ayat of the day copy nwmc.webp", title: "Ayat of the day", category: "faith" },
  { src: "assets/optimized/july week 4/did you know copy.webp", title: "Did you know", category: "social" },
  { src: "assets/optimized/july week 4/Habaibs words Anwaar center .webp", title: "Habaibs words", category: "faith" },
  { src: "assets/optimized/july week 4/hadith of the day copy nwmc.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/july week 4/Jumuah mubarak Anwaar center copy.webp", title: "Jumuah mubarak", category: "faith" },
  { src: "assets/optimized/july week 4/sheikh Abdillahi Yusuf quote copy.webp", title: "Sheikh Abdillahi Yusuf quote", category: "faith" },
  { src: "assets/optimized/july week 4/zakat nwmc copy nwmc.webp", title: "Zakat", category: "community" },
  { src: "assets/optimized/July week3/Al-habib Quote Anwaar center copy.webp", title: "Al-habib quote", category: "faith" },
  { src: "assets/optimized/July week3/Alhajun Jumuah Mubarak copy.webp", title: "Alhajun Jumuah Mubarak", category: "faith" },
  { src: "assets/optimized/July week3/Ayat of the day Anwaar center copy.webp", title: "Ayat of the day", category: "faith" },
  { src: "assets/optimized/July week3/Ayat of the day nwmc copy.webp", title: "Ayat of the day", category: "faith" },
  { src: "assets/optimized/July week3/did you know copy.webp", title: "Did you know", category: "social" },
  { src: "assets/optimized/July week3/Egypt draft copy.webp", title: "Egypt draft", category: "social" },
  { src: "assets/optimized/July week3/hadith of the day Anwaar center copy.webp", title: "Hadith of the day", category: "faith" },
  { src: "assets/optimized/July week3/hadith of the week nwmc copy.webp", title: "Hadith of the week", category: "faith" },
  { src: "assets/optimized/July week3/Jumuah Mubarak Anwaar center copy.webp", title: "Jumuah Mubarak", category: "faith" },
  { src: "assets/optimized/July week3/Jumuah mubarak lamu bites copy.webp", title: "Jumuah mubarak lamu bites", category: "faith" },
  { src: "assets/optimized/July week3/Jumuah Mubarak Minar copy.webp", title: "Jumuah Mubarak Minar", category: "faith" },
  { src: "assets/optimized/July week3/Jumuah Mubarak nwmc Jumuah Mubarak.webp", title: "Jumuah Mubarak Nwmc", category: "faith" },
  { src: "assets/optimized/July week3/sheikh quote masjid anwar copy.webp", title: "Sheikh quote masjid anwar", category: "faith" },
  { src: "assets/optimized/July week3/week challenge nwmc.webp", title: "Week challenge", category: "community" },
  { src: "assets/optimized/week4/Abdullah Salih Quote June .week4 copy.webp", title: "Abdullah Salih Quote", category: "faith" },
  { src: "assets/optimized/week4/Alhajun Jumuah poster week4.webp", title: "Alhajun Jumuah poster", category: "faith" },
  { src: "assets/optimized/week4/ALMAWADDAH JUMA POSTER june 19 copy.webp", title: "Almawaddah Juma poster 19", category: "social" },
  { src: "assets/optimized/week4/ALMAWADDAH JUMA POSTER June Week4.webp", title: "Almawaddah Juma poster", category: "social" },
  { src: "assets/optimized/week4/Anwaaar sheikh Quote.webp", title: "Anwaaar sheikh Quote", category: "faith" },
  { src: "assets/optimized/week4/Anwaar foundation Habaib quote.webp", title: "Anwaar foundation Habaib quote", category: "faith" },
  { src: "assets/optimized/week4/Anwaar Foundation quote of the week copy.webp", title: "Anwaar Foundation quote of the week", category: "faith" },
  { src: "assets/optimized/week4/Anwar foundation Jumuah Mubarak wk4 copy.webp", title: "Jumuah Mubarak", category: "faith" },
  { src: "assets/optimized/week4/ayah of the week Anwar foundation week4 copy.webp", title: "Ayah of the week", category: "faith" },
  { src: "assets/optimized/week4/Did you know 2.webp", title: "Did you know 2", category: "social" },
  { src: "assets/optimized/week4/Did you know fact 1.webp", title: "Did you know fact 1", category: "social" },
  { src: "assets/optimized/week4/Did you know Minar.webp", title: "Did you know Minar", category: "social" },
  { src: "assets/optimized/week4/Hadith of the week 4 anwaar foundation .webp", title: "Hadith of the week 4 anwaar foundation", category: "faith" },
  { src: "assets/optimized/week4/Minar Jumuah Mubarak week 4 copy.webp", title: "Minar Jumuah Mubarak week 4", category: "faith" },
  { src: "assets/optimized/week4/nairobi west Jumuah mubarak June   week 4.webp", title: "Nairobi west Jumuah mubarak week 4", category: "faith" },
  { src: "assets/optimized/week4/nairobi west jumuah mubarak week 4 copy.webp", title: "Nairobi west jumuah mubarak week 4", category: "faith" },
  { src: "assets/optimized/week4/NWM Jumuah mubarak week 4 Copy.webp", title: "Jumuah mubarak week 4", category: "faith" },
  { src: "assets/optimized/week4/week challenge Nwm.webp", title: "Week challenge", category: "community" },
  { src: "assets/optimized/week4/weekday challenge masjid taqwa copy.webp", title: "Weekday challenge masjid taqwa", category: "community" }
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
        <img src="${item.src}" alt="${item.title} design" loading="lazy" decoding="async">
      </button>
      <div>
        <span>${titleCaseCategory(item.category)}</span>
        <h3>${item.title}</h3>
      </div>
    </article>
  `).join("");

  const reelItems = [...portfolioItems, ...portfolioItems.slice(0, 16)];
  reelTrack.innerHTML = reelItems.map((item) => `<img src="${item.src}" alt="${item.title} poster" loading="lazy" decoding="async">`).join("");
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
