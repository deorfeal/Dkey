//*** Aos ***
jQuery(document).ready(function () {
  (function () {
    // your page initialization code here
    // the DOM will be available here
    AOS.init({
      duration: 750,
      offset: 0, // offset (in px) from the original trigger point
      anchorPlacement: "top-bottom", // define where the AOS animations will be triggered
    });
  })();
});
//*** Aos ***

new Swiper(".partners-swiper", {
  slidesPerView: 6,
  loop: true,
  speed: 750,
  spaceBetween: 15,
  centeredSlides: false,
  autoplay: {
    delay: 1500, // пауза между сменой слайдов
    disableOnInteraction: false, // не останавливать при свайпе
    pauseOnMouseEnter: true, // останавливать при наведении (если хочешь отключить — убери)
  },
  breakpoints: {
    301: {
      slidesPerView: 2.5,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: true,
    },
    451: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: true,
    },
    501: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: false,
    },
    993: {
      slidesPerView: 6,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: false,
    },
  },
});

new Swiper(".recalls-swiper", {
  slidesPerView: 3,
  loop: true,
  speed: 750,
  spaceBetween: 24,
  pagination: {
    el: ".recalls-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    1201: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
  },
});

// Внутренний слайдер
new Swiper(".card-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  nested: true, // 🔥 ключевой параметр
  navigation: {
    prevEl: ".card-swiper__arrow--prev",
    nextEl: ".card-swiper__arrow--next",
  },
});

// Внешний слайдер
new Swiper(".offers-swiper", {
  slidesPerView: 3,
  loop: true,
  speed: 750,
  spaceBetween: 24,
  watchSlidesProgress: true,
  grabCursor: true,
  pagination: {
    el: ".offers-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 24,
      watchSlidesProgress: true,
      grabCursor: true,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 24,
      watchSlidesProgress: true,
      grabCursor: true,
    },
    1201: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 24,
      watchSlidesProgress: true,
      grabCursor: true,
    },
  },
});

new Swiper(".popular-swiper", {
  slidesPerView: 4,
  loop: false,
  speed: 750,
  spaceBetween: 32,
  navigation: {
    prevEl: ".arrow--popular-prev",
    nextEl: ".arrow--popular-next",
  },
  pagination: {
    el: ".pagination--popular",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
    },
    formatFractionCurrent: function (number) {
      return number < 10 ? `0${number}` : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? `0${number}` : number;
    },
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: false,
      speed: 750,
      spaceBetween: 32,
    },
    651: {
      slidesPerView: 2,
      loop: false,
      speed: 750,
      spaceBetween: 32,
    },
    993: {
      slidesPerView: 3,
      loop: false,
      speed: 750,
      spaceBetween: 32,
    },
    1201: {
      slidesPerView: 4,
      loop: false,
      speed: 750,
      spaceBetween: 32,
    },
  },
});

//

document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".recall");

  blocks.forEach((block) => {
    const textElement = block.querySelector(".recall__text");
    const toggleButton = block.querySelector(".recall__text-toggle");

    if (!textElement || !toggleButton) return;

    const fullText = textElement.getAttribute("data-full-text");
    const shortText = fullText.substring(0, 200) + "...";

    let isExpanded = false;

    // Инициализация: сворачиваем текст при загрузке
    textElement.classList.add("collapsed");
    textElement.innerHTML =
      shortText + '<span class="recall__text-toggle">more</span>';

    function toggleHandler(e) {
      e.preventDefault();
      isExpanded = !isExpanded;

      if (isExpanded) {
        textElement.classList.remove("collapsed");
        textElement.innerHTML =
          fullText + '<span class="recall__text-toggle">less</span>';
      } else {
        textElement.classList.add("collapsed");
        textElement.innerHTML =
          shortText + '<span class="recall__text-toggle">more</span>';
      }

      const newToggle = textElement.querySelector(".recall__text-toggle");
      newToggle.addEventListener("click", toggleHandler);
    }

    // Добавляем обработчик на новую кнопку после инициализации
    const initialToggle = textElement.querySelector(".recall__text-toggle");
    initialToggle.addEventListener("click", toggleHandler);
  });
});

//

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video");

  videos.forEach((videoSection) => {
    const video = videoSection.querySelector(".video__player");
    const playBtn = videoSection.querySelector(".video__play");

    // Функция для переключения состояния
    const toggleVideo = () => {
      if (video.paused) {
        // Ставим на паузу все остальные
        videos.forEach((vs) => {
          const v = vs.querySelector(".video__player");
          if (v !== video) {
            v.pause();
            vs.classList.remove("video--active");
          }
        });

        video.play();
        videoSection.classList.add("video--active");
      } else {
        video.pause();
        videoSection.classList.remove("video--active");
      }
    };

    // Клик по кнопке или по самому видео
    playBtn.addEventListener("click", toggleVideo);
    video.addEventListener("click", toggleVideo);

    // При паузе вручную или по окончанию
    video.addEventListener("pause", () => {
      videoSection.classList.remove("video--active");
    });

    // При воспроизведении
    video.addEventListener("play", () => {
      videoSection.classList.add("video--active");
    });
  });
});

//

document.querySelectorAll(".change__list").forEach((list) => {
  list.addEventListener("change", (e) => {
    if (!e.target.matches('input[type="radio"]')) return;

    list
      .querySelectorAll(".change-list__item")
      .forEach((el) => el.classList.remove("change-list__item--active"));

    e.target
      .closest(".change-list__item")
      .classList.add("change-list__item--active");
  });
});

//

document.querySelectorAll(".units__list").forEach((list) => {
  list.addEventListener("change", (e) => {
    if (!e.target.matches('input[type="radio"]')) return;

    list
      .querySelectorAll(".units-list__item")
      .forEach((el) => el.classList.remove("units-list__item--active"));

    e.target
      .closest(".units-list__item")
      .classList.add("units-list__item--active");
  });
});

//

document.querySelectorAll(".popular-head").forEach((head) => {
  head.addEventListener("click", () => {
    const item = head.closest(".popular-item");
    item.classList.toggle("popular-item--active");
  });
});

//

const plansItems = document.querySelectorAll(".plans-item");

plansItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("plans-item--active")) {
      item.classList.remove("plans-item--active");
    } else {
      plansItems.forEach((i) => i.classList.remove("plans-item--active"));
      item.classList.add("plans-item--active");
    }
  });
});

//

document.querySelectorAll(".tub[data-tubs]").forEach((tab, index, tabList) => {
  tab.addEventListener("click", () => {
    const group = tab.dataset.tubs;

    // Найдём все табы и элементы контента с тем же data-tubs
    const tabs = Array.from(
      document.querySelectorAll(`.tub[data-tubs="${group}"]`)
    );
    const contents = Array.from(
      document.querySelectorAll(`.tub-element[data-tubs="${group}"]`)
    );

    const tabIndex = tabs.indexOf(tab);

    // Сброс классов у всех табов этой группы
    tabs.forEach((t) => t.classList.remove("tub--active"));
    tab.classList.add("tub--active");

    // Сброс классов у всех элементов этой группы
    contents.forEach((el) => el.classList.remove("tub-element--active"));
    if (contents[tabIndex]) {
      contents[tabIndex].classList.add("tub-element--active");
    }
  });
});

//

document.addEventListener("DOMContentLoaded", function () {
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
          create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
              and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
          and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
      except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
});

//

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".popup");
  const popups = {
    contact: document.querySelector(".popup--contact"),
  };

  // Функция для показа попапа
  function showPopup(popupToShow) {
    popupToShow.classList.add("popup--active");
    popupToShow.style.display = "block";
    popupToShow.style.opacity = "0";

    // Анимация появления
    fadeIn(popupToShow, 250, function () {
      fadeOpacity(popupToShow, 1, 250);
    });

    document.body.classList.add("body--popup");
  }

  // Функция для скрытия попапа
  function hidePopup(popupToHide) {
    popupToHide.classList.remove("popup--active");

    // Анимация исчезновения
    fadeOut(popupToHide, 250, function () {
      fadeOpacity(popupToHide, 1, 250);
    });

    document.body.classList.remove("body--popup");
  }

  // Функция для анимации появления
  function fadeIn(element, duration, callback) {
    element.style.opacity = "0";
    element.style.display = "block";

    const start = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (callback) {
        callback();
      }
    }

    requestAnimationFrame(animate);
  }

  // Функция для анимации исчезновения
  function fadeOut(element, duration, callback) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = startOpacity * (1 - progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = "none";
        if (callback) {
          callback();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  // Функция для анимации прозрачности
  function fadeOpacity(element, targetOpacity, duration) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);
    const difference = targetOpacity - startOpacity;

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = startOpacity + difference * progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // Обработчики кликов для показа попапов
  const openQuestionButtons = document.querySelectorAll(".open-contact");
  openQuestionButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      showPopup(popups.contact);
    });
  });

  // Обработчик кликов для скрытия попапов
  const closeButtons = document.querySelectorAll(".cls");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      hidePopup(popup);
    });
  });

  // Скрываем попап при клике вне его области
  document.addEventListener("click", function (event) {
    Object.keys(popups).forEach((key) => {
      const popupToCheck = popups[key];
      if (popupToCheck && popupToCheck.classList.contains("popup--active")) {
        const popupInner = popupToCheck.querySelector(".popup__inner");
        if (popupInner && !popupInner.contains(event.target)) {
          hidePopup(popupToCheck);
        }
      }
    });
  });
});

//

// Находим кнопки и body
const catalogButton = document.querySelector('.catalog-form__button');
const filtersClose = document.querySelector('.filters__close');
const body = document.body;

// Клик по кнопке — добавляем класс
catalogButton.addEventListener('click', () => {
  body.classList.add('filters--active');
});

// Клик по крестику — убираем класс
filtersClose.addEventListener('click', () => {
  body.classList.remove('filters--active');
});


//

$(function () {
  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

//

if (document.querySelector(".phone")) {
  const countries = [
    { code: "af", name: "Afghanistan", dial: "+93", mask: "## ### ####" },
    { code: "al", name: "Albania", dial: "+355", mask: "## ### ####" },
    { code: "dz", name: "Algeria", dial: "+213", mask: "### ## ## ##" },
    { code: "ad", name: "Andorra", dial: "+376", mask: "### ###" },
    { code: "ao", name: "Angola", dial: "+244", mask: "### ### ###" },
    { code: "ar", name: "Argentina", dial: "+54", mask: "## #### ####" },
    { code: "am", name: "Armenia", dial: "+374", mask: "## ######" },
    { code: "au", name: "Australia", dial: "+61", mask: "### ### ###" },
    { code: "at", name: "Austria", dial: "+43", mask: "### ######" },
    { code: "az", name: "Azerbaijan", dial: "+994", mask: "## ### ## ##" },
    { code: "bh", name: "Bahrain", dial: "+973", mask: "#### ####" },
    { code: "bd", name: "Bangladesh", dial: "+880", mask: "#### ######" },
    { code: "by", name: "Belarus", dial: "+375", mask: "## ###-##-##" },
    { code: "be", name: "Belgium", dial: "+32", mask: "### ## ## ##" },
    { code: "bz", name: "Belize", dial: "+501", mask: "###-####" },
    { code: "bo", name: "Bolivia", dial: "+591", mask: "# ### ####" },
    { code: "ba", name: "Bosnia", dial: "+387", mask: "## ####-###" },
    { code: "br", name: "Brazil", dial: "+55", mask: "## #####-####" },
    { code: "bg", name: "Bulgaria", dial: "+359", mask: "## ### ###" },
    { code: "kh", name: "Cambodia", dial: "+855", mask: "## ### ###" },
    { code: "cm", name: "Cameroon", dial: "+237", mask: "#### ####" },
    { code: "ca", name: "Canada", dial: "+1", mask: "(###) ###-####" },
    { code: "cl", name: "Chile", dial: "+56", mask: "# #### ####" },
    { code: "cn", name: "China", dial: "+86", mask: "### #### ####" },
    { code: "co", name: "Colombia", dial: "+57", mask: "### ### ####" },
    { code: "cr", name: "Costa Rica", dial: "+506", mask: "#### ####" },
    { code: "hr", name: "Croatia", dial: "+385", mask: "## ### ####" },
    { code: "cu", name: "Cuba", dial: "+53", mask: "# ### ####" },
    { code: "cy", name: "Cyprus", dial: "+357", mask: "## ######" },
    { code: "cz", name: "Czech Republic", dial: "+420", mask: "### ### ###" },
    { code: "dk", name: "Denmark", dial: "+45", mask: "## ## ## ##" },
    { code: "do", name: "Dominican Rep.", dial: "+1", mask: "(###) ###-####" },
    { code: "ec", name: "Ecuador", dial: "+593", mask: "## ### ####" },
    { code: "eg", name: "Egypt", dial: "+20", mask: "### ### ####" },
    { code: "sv", name: "El Salvador", dial: "+503", mask: "#### ####" },
    { code: "ee", name: "Estonia", dial: "+372", mask: "#### ####" },
    { code: "et", name: "Ethiopia", dial: "+251", mask: "## ### ####" },
    { code: "fi", name: "Finland", dial: "+358", mask: "## ### ## ##" },
    { code: "fr", name: "France", dial: "+33", mask: "# ## ## ## ##" },
    { code: "ge", name: "Georgia", dial: "+995", mask: "### ## ## ##" },
    { code: "de", name: "Germany", dial: "+49", mask: "#### #######" },
    { code: "gh", name: "Ghana", dial: "+233", mask: "## ### ####" },
    { code: "gr", name: "Greece", dial: "+30", mask: "## #### ####" },
    { code: "gt", name: "Guatemala", dial: "+502", mask: "#### ####" },
    { code: "hn", name: "Honduras", dial: "+504", mask: "####-####" },
    { code: "hk", name: "Hong Kong", dial: "+852", mask: "#### ####" },
    { code: "hu", name: "Hungary", dial: "+36", mask: "## ### ####" },
    { code: "is", name: "Iceland", dial: "+354", mask: "### ####" },
    { code: "in", name: "India", dial: "+91", mask: "##### #####" },
    { code: "id", name: "Indonesia", dial: "+62", mask: "###-###-####" },
    { code: "ir", name: "Iran", dial: "+98", mask: "### ### ####" },
    { code: "iq", name: "Iraq", dial: "+964", mask: "### ### ####" },
    { code: "ie", name: "Ireland", dial: "+353", mask: "## ### ####" },
    { code: "il", name: "Israel", dial: "+972", mask: "##-###-####" },
    { code: "it", name: "Italy", dial: "+39", mask: "### ### ####" },
    { code: "jm", name: "Jamaica", dial: "+1", mask: "(###) ###-####" },
    { code: "jp", name: "Japan", dial: "+81", mask: "##-####-####" },
    { code: "jo", name: "Jordan", dial: "+962", mask: "# #### ####" },
    { code: "kz", name: "Kazakhstan", dial: "+7", mask: "### ###-##-##" },
    { code: "ke", name: "Kenya", dial: "+254", mask: "### ######" },
    { code: "kw", name: "Kuwait", dial: "+965", mask: "#### ####" },
    { code: "kg", name: "Kyrgyzstan", dial: "+996", mask: "### ######" },
    { code: "lv", name: "Latvia", dial: "+371", mask: "## ### ###" },
    { code: "lb", name: "Lebanon", dial: "+961", mask: "## ### ###" },
    { code: "ly", name: "Libya", dial: "+218", mask: "##-#######" },
    { code: "lt", name: "Lithuania", dial: "+370", mask: "### #####" },
    { code: "lu", name: "Luxembourg", dial: "+352", mask: "### ### ###" },
    { code: "my", name: "Malaysia", dial: "+60", mask: "##-### ####" },
    { code: "mv", name: "Maldives", dial: "+960", mask: "###-####" },
    { code: "mt", name: "Malta", dial: "+356", mask: "#### ####" },
    { code: "mx", name: "Mexico", dial: "+52", mask: "## #### ####" },
    { code: "md", name: "Moldova", dial: "+373", mask: "#### ####" },
    { code: "mc", name: "Monaco", dial: "+377", mask: "## ## ## ##" },
    { code: "mn", name: "Mongolia", dial: "+976", mask: "##-##-####" },
    { code: "me", name: "Montenegro", dial: "+382", mask: "## ### ###" },
    { code: "ma", name: "Morocco", dial: "+212", mask: "##-####-###" },
    { code: "mm", name: "Myanmar", dial: "+95", mask: "## ### ####" },
    { code: "np", name: "Nepal", dial: "+977", mask: "##-### ####" },
    { code: "nl", name: "Netherlands", dial: "+31", mask: "## ### ####" },
    { code: "nz", name: "New Zealand", dial: "+64", mask: "##-### ####" },
    { code: "ni", name: "Nicaragua", dial: "+505", mask: "#### ####" },
    { code: "ng", name: "Nigeria", dial: "+234", mask: "### ### ####" },
    { code: "kp", name: "North Korea", dial: "+850", mask: "### ### ####" },
    { code: "no", name: "Norway", dial: "+47", mask: "### ## ###" },
    { code: "om", name: "Oman", dial: "+968", mask: "## ### ###" },
    { code: "pk", name: "Pakistan", dial: "+92", mask: "### #######" },
    { code: "ps", name: "Palestine", dial: "+970", mask: "## ### ####" },
    { code: "pa", name: "Panama", dial: "+507", mask: "####-####" },
    { code: "py", name: "Paraguay", dial: "+595", mask: "### ######" },
    { code: "pe", name: "Peru", dial: "+51", mask: "### ### ###" },
    { code: "ph", name: "Philippines", dial: "+63", mask: "### ### ####" },
    { code: "pl", name: "Poland", dial: "+48", mask: "### ### ###" },
    { code: "pt", name: "Portugal", dial: "+351", mask: "### ### ###" },
    { code: "pr", name: "Puerto Rico", dial: "+1", mask: "(###) ###-####" },
    { code: "qa", name: "Qatar", dial: "+974", mask: "#### ####" },
    { code: "ro", name: "Romania", dial: "+40", mask: "## ### ####" },
    { code: "ru", name: "Russia", dial: "+7", mask: "(###) ###-##-##" },
    { code: "sa", name: "Saudi Arabia", dial: "+966", mask: "## ### ####" },
    { code: "rs", name: "Serbia", dial: "+381", mask: "## ### ####" },
    { code: "sg", name: "Singapore", dial: "+65", mask: "#### ####" },
    { code: "sk", name: "Slovakia", dial: "+421", mask: "### ### ###" },
    { code: "si", name: "Slovenia", dial: "+386", mask: "## ### ###" },
    { code: "za", name: "South Africa", dial: "+27", mask: "## ### ####" },
    { code: "kr", name: "South Korea", dial: "+82", mask: "##-####-####" },
    { code: "es", name: "Spain", dial: "+34", mask: "### ### ###" },
    { code: "lk", name: "Sri Lanka", dial: "+94", mask: "## ### ####" },
    { code: "se", name: "Sweden", dial: "+46", mask: "##-### ## ##" },
    { code: "ch", name: "Switzerland", dial: "+41", mask: "## ### ## ##" },
    { code: "sy", name: "Syria", dial: "+963", mask: "## #### ###" },
    { code: "tw", name: "Taiwan", dial: "+886", mask: "#### ### ###" },
    { code: "tj", name: "Tajikistan", dial: "+992", mask: "## ### ####" },
    { code: "tz", name: "Tanzania", dial: "+255", mask: "## ### ####" },
    { code: "th", name: "Thailand", dial: "+66", mask: "##-###-####" },
    { code: "tr", name: "Turkey", dial: "+90", mask: "### ### ## ##" },
    { code: "tm", name: "Turkmenistan", dial: "+993", mask: "# ### ####" },
    { code: "ua", name: "Ukraine", dial: "+380", mask: "## ### ## ##" },
    { code: "ae", name: "UAE", dial: "+971", mask: "## ### ####" },
    { code: "gb", name: "United Kingdom", dial: "+44", mask: "#### ### ####" },
    { code: "us", name: "USA", dial: "+1", mask: "(###) ###-####" },
    { code: "uy", name: "Uruguay", dial: "+598", mask: "# ### ## ##" },
    { code: "uz", name: "Uzbekistan", dial: "+998", mask: "## ### ####" },
    { code: "ve", name: "Venezuela", dial: "+58", mask: "###-#######" },
    { code: "vn", name: "Vietnam", dial: "+84", mask: "## #### ####" },
    { code: "ye", name: "Yemen", dial: "+967", mask: "### ### ###" },
    { code: "zw", name: "Zimbabwe", dial: "+263", mask: "## ### ####" },
  ];

  let selectedCountry = countries[40]; // Germany by default

  const countrySelector = document.getElementById("countrySelector");
  const selectedFlag = document.getElementById("selectedFlag");
  const countryCode = document.getElementById("countryCode");
  const phoneNumber = document.getElementById("phoneNumber");
  const dropdown = document.getElementById("dropdown");
  const dropdownArrow = document.getElementById("dropdownArrow");

  // Создание выпадающего списка
  countries.forEach((country) => {
    const item = document.createElement("div");
    item.className = "phone__dropdown-item";
    item.innerHTML = `
          <span class="phone__dropdown-flag fi fi-${country.code}"></span>
          <span class="phone__dropdown-name">${country.name}</span>
          <span class="phone__dropdown-code">${country.dial}</span>
        `;
    item.addEventListener("click", () => selectCountry(country));
    dropdown.appendChild(item);
  });

  // Открытие/закрытие выпадающего списка
  countrySelector.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("phone__dropdown--show");
    dropdownArrow.classList.toggle("phone__arrow--open");
  });

  // Закрытие при клике вне
  document.addEventListener("click", () => {
    dropdown.classList.remove("phone__dropdown--show");
    dropdownArrow.classList.remove("phone__arrow--open");
  });

  // Выбор страны
  function selectCountry(country) {
    selectedCountry = country;
    selectedFlag.className = `phone__flag fi fi-${country.code}`;
    countryCode.textContent = country.dial;
    phoneNumber.value = "";
    phoneNumber.placeholder = country.mask.replace(/#/g, "0");
    dropdown.classList.remove("phone__dropdown--show");
    dropdownArrow.classList.remove("phone__arrow--open");
  }

  // Маска для номера телефона
  phoneNumber.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    let formatted = "";
    let maskIndex = 0;

    for (
      let i = 0;
      i < value.length && maskIndex < selectedCountry.mask.length;
      i++
    ) {
      while (
        maskIndex < selectedCountry.mask.length &&
        selectedCountry.mask[maskIndex] !== "#"
      ) {
        formatted += selectedCountry.mask[maskIndex];
        maskIndex++;
      }
      if (maskIndex < selectedCountry.mask.length) {
        formatted += value[i];
        maskIndex++;
      }
    }

    e.target.value = formatted;
  });

  // Запрет ввода нецифровых символов
  phoneNumber.addEventListener("keypress", (e) => {
    if (
      !/\d/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  });
}
