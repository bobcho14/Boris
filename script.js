// ======== ДАННИ С ОПИСАНИЯ ========
const data = {
  sofia: {
    "Информатика / Компютърни науки": [
      {
        name: "Софийски университет 'Св. Климент Охридски'",
        type: "state",
        form: "regular",
        fee: 300,
        img: "770-434-sofijski-universitet-kliment-ohridski.jpg",
        website: "https://www.uni-sofia.bg/",
        description: "Най-старото и най-престижно висше училище в България, известно с високо качество на обучение и силни академични традиции."
      },
      {
        name: "Нов български университет",
        type: "private",
        form: "regular",
        fee: 1800,
        img: "нбу.jpg",
        website: "https://www.nbu.bg/",
        description: "Модерен частен университет, ориентиран към иновативни програми и практическо обучение."
      },
      {
        name: "Технически университет – София",
        type: "state",
        form: "regular",
        fee: 350,
        img: "ту.jpg",
        website: "https://tu-sofia.bg/",
        description: "Водещ технически университет в България с широк профил инженерни специалности."
      }
    ],
    "Икономика / Финанси": [
      {
        name: "УНСС",
        type: "state",
        form: "regular",
        fee: 400,
        img: "унсссс.jpg",
        website: "https://www.unwe.bg/",
        description: "Най-големият икономически университет в България – лидер в сферата на финансите, бизнеса и управлението."
      },
      {
        name: "Висше училище по застраховане и финанси",
        type: "private",
        form: "regular",
        fee: 1200,
        img: "вузф.png",
        website: "https://vuzf.bg/",
        description: "Университет, специализиран в застраховане, финанси и предприемачество."
      }
    ]
  },

  plovdiv: {
    "Медицина": [
      {
        name: "Медицински университет – Пловдив",
        type: "state",
        form: "regular",
        fee: 800,
        img: "Plovdiv_Medical_Unoversity.jfif",
        website: "https://mu-plovdiv.bg/",
        description: "Водещ медицински университет с модерна клинична база и международно признание."
      }
    ],
    "Икономика / Бизнес": [
      {
        name: "Пловдивски университет 'Паисий Хилендарски'",
        type: "state",
        form: "regular",
        fee: 350,
        img: "IMGP1292.jpg",
        website: "https://uni-plovdiv.bg/",
        description: "Много профилиран университет с разнообразие от специалности."
      },
      {
        name: "Висше училище по сигурност и икономика",
        type: "private",
        form: "regular",
        fee: 900,
        img: "вуси.jpg",
        website: "https://vusi.bg/",
        description: "Частен университет, специализиран в сигурност, икономика и бизнес."
      }
    ]
  },

  varna: {
    "Бизнес / Икономика": [
      {
        name: "Икономически университет – Варна",
        type: "state",
        form: "regular",
        fee: 500,
        img: "икономически.jpg",
        website: "https://www.ue-varna.bg/",
        description: "Първият икономически университет в България и водещ избор за бизнес специалности."
      },
      {
        name: "Варненски свободен университет 'Черноризец Храбър'",
        type: "private",
        form: "regular",
        fee: 1400,
        img: "vsu-panorama.jpg",
        website: "https://www.vfu.bg/",
        description: "Модерен университет с интернационална студентска среда."
      }
    ],
    "Информатика": [
      {
        name: "Технически университет – Варна",
        type: "state",
        form: "regular",
        fee: 400,
        img: "TU_Picture_01.jpg",
        website: "https://www.tu-varna.bg/",
        description: "Престижен технически университет, ориентиран към инженерни специалности."
      },
      {
        name: "ВВМУ 'Никола Йонков Вапцаров'",
        type: "state",
        form: "regular",
        fee: 350,
        img: "vvmu-800x600-1.jpg.webp",
        website: "https://www.naval-acad.bg/",
        description: "Елитно морско училище, известно с морски и инженерни програми."
      }
    ]
  },

  burgas: {
    "Туризъм": [
      {
        name: "Бургаски свободен университет",
        type: "private",
        form: "regular",
        fee: 1000,
        img: "bfu_1000x450.jpg",
        website: "https://www.bfu.bg/",
        description: "Модерен университет със силни програми по право, туризъм и публична администрация."
      },
      {
        name: "Университет 'Проф. д-р Асен Златаров'",
        type: "state",
        form: "regular",
        fee: 400,
        img: "AZ5.jpg",
        website: "https://btu.bg/index.php/bg/",
        description: "Държавен университет с профил в природни науки и технологии."
      }
    ],
    "Инженерни науки": [
      {
        name: "Университет 'Проф. д-р Асен Златаров'",
        type: "state",
        form: "regular",
        fee: 450,
        img: "AZ5.jpg",
        website: "https://btu.bg/index.php/bg/",
        description: "Известен с инженерни и технически специалности."
      }
    ]
  },

  ruse: {
    "Инженерство": [
      {
        name: "Русенски университет 'Ангел Кънчев'",
        type: "state",
        form: "regular",
        fee: 400,
        img: "ruse-uni.jpg",
        website: "https://www.uni-ruse.bg/",
        description: "Силен инженерно-технически университет с модерна база."
      }
    ],
    "Бизнес администрация": [
      {
        name: "Русенски университет 'Ангел Кънчев'",
        type: "state",
        form: "regular",
        fee: 380,
        img: "ruse-uni.jpg",
        website: "https://www.uni-ruse.bg/",
        description: "Университетът предлага и разнообразни програми в сферата на бизнеса."
      }
    ]
  },

  velikotarnovo: {
    "Филология / Хуманитарни науки": [
      {
        name: "Великотърновски университет 'Св. св. Кирил и Методий'",
        type: "state",
        form: "regular",
        fee: 350,
        img: "вту.jpg",
        website: "https://www.uni-vt.bg/",
        description: "Водещ хуманитарен университет с богати традиции."
      }
    ],
    "Педагогика": [
      {
        name: "ВТУ 'Св. св. Кирил и Методий'",
        type: "state",
        form: "regular",
        fee: 320,
        img: "вту.jpg",
        website: "https://www.uni-vt.bg/",
        description: "Силен в педагогически и социални специалности."
      }
    ]
  },

  blagoevgrad: {
    "Бизнес администрация": [
      {
        name: "Американски университет в България",
        type: "private",
        form: "regular",
        fee: 2500,
        img: "ау.jpg",
        website: "https://www.aubg.edu/",
        description: "Елитен университет с американска система и международна студентска среда."
      },
      {
        name: "Югозападен университет 'Неофит Рилски'",
        type: "state",
        form: "regular",
        fee: 350,
        img: "юзу.jfif",
        website: "https://www.swu.bg/",
        description: "Голям държавен университет с богат избор от специалности."
      }
    ],
    "Журналистика": [
      {
        name: "ЮЗУ 'Неофит Рилски'",
        type: "state",
        form: "regular",
        fee: 300,
        img: "юзу.jfif",
        website: "https://www.swu.bg/",
        description: "Развит факултет по журналистика и социални науки."
      }
    ]
  },

  stzagora: {
    "Медицина": [
      {
        name: "Тракийски университет – Стара Загора",
        type: "state",
        form: "regular",
        fee: 700,
        img: "тракийски.jfif",
        website: "https://www.trakia-uni.bg/",
        description: "Престижен университет с водещи програми в медицината."
      }
    ],
    "Ветеринарна медицина": [
      {
        name: "Тракийски университет – Стара Загора",
        type: "state",
        form: "regular",
        fee: 600,
        img: "тракийски.jfif",
        website: "https://www.trakia-uni.bg/",
        description: "Най-силният университет по ветеринарна медицина в България."
      }
    ]
  },

  // ========== ДОБАВЕНО: СТОПАНСКА АКАДЕМИЯ – СВИЩОВ ==========
  svishtov: {
    "Икономика": [
      {
        name: "Стопанска академия 'Димитър А. Ценов' – Свищов",
        type: "state",
        form: "regular",
        fee: 350,
        img: "стопака.webp",
        website: "https://www.uni-svishtov.bg/",
        description: "Един от водещите икономически университети в България с дългогодишни традиции."
      }
    ],
    "Финанси": [
      {
        name: "Стопанска академия 'Димитър А. Ценов' – Свищов",
        type: "state",
        form: "regular",
        fee: 360,
        img: "стопака.webp",
        website: "https://www.uni-svishtov.bg/",
        description: "Силна програма във финанси, счетоводство и стопанско управление."
      }
    ]
  }
};

// ===== ELEMENTS =====
const startBtn = document.getElementById("startBtn");
const finder = document.getElementById("finder");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const citySelect = document.getElementById("city");
const specialtySelect = document.getElementById("specialty");
const typeSelect = document.getElementById("type");
const formSelect = document.getElementById("form");
const maxFeeInput = document.getElementById("maxFee");
const showResultsBtn = document.getElementById("showResults");
const resultsSection = document.getElementById("results");
const resultsContainer = document.querySelector(".results-container");
const noResults = document.getElementById("noResults");

// ===== MODAL ELEMENTS =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalType = document.getElementById("modalType");
const modalForm = document.getElementById("modalForm");
const modalFee = document.getElementById("modalFee");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");
const modalVisit = document.getElementById("modalVisit");

// ===== Start Finder =====
startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  finder.classList.remove("hidden");
  q1.classList.add("show");
  finder.scrollIntoView({ behavior: "smooth" });
});

// ===== City Selection =====
citySelect.addEventListener("change", () => {
  const city = citySelect.value;
  specialtySelect.innerHTML = "";

  if (data[city]) {
    Object.keys(data[city]).forEach(spec => {
      const opt = document.createElement("option");
      opt.value = spec;
      opt.textContent = spec;
      specialtySelect.appendChild(opt);
    });

    q2.classList.remove("hidden");
    setTimeout(() => q2.classList.add("show"), 50);

    q3.classList.remove("hidden");
    setTimeout(() => q3.classList.add("show"), 50);
  }
});

// ===== Specialty Selection =====
specialtySelect.addEventListener("change", () => {
  q3.classList.remove("hidden");
  setTimeout(() => q3.classList.add("show"), 50);
});

// ===== Type Selection =====
typeSelect.addEventListener("change", () => {
  q4.classList.remove("hidden");
  setTimeout(() => q4.classList.add("show"), 50);
});

// ===== Form Selection =====
formSelect.addEventListener("change", () => {
  q5.classList.remove("hidden");
  setTimeout(() => q5.classList.add("show"), 50);
});

// ===== BGN to EUR =====
function toEuro(bgn) {
  return (bgn / 1.95583).toFixed(2);
}

// ===== Show Results =====
showResultsBtn.addEventListener("click", () => {
  const city = citySelect.value;
  const specialty = specialtySelect.value;
  const type = typeSelect.value;
  const form = formSelect.value;
  const maxFee = parseFloat(maxFeeInput.value);

  if (!city || !specialty) return;

  let universities = data[city][specialty];
  if (type) universities = universities.filter(u => u.type === type);
  if (form) universities = universities.filter(u => u.form === form);
  if (maxFee) universities = universities.filter(u => u.fee <= maxFee);

  resultsContainer.innerHTML = "";
  noResults.classList.add("hidden");

  if (!universities.length) {
    noResults.classList.remove("hidden");
  } else {
    universities.forEach(u => {
      const card = document.createElement("div");
      card.className = "university-card";
      card.style.backgroundImage = `url(${u.img})`;

      card.innerHTML = `
        <div class="card-overlay">
          <div class="card-content">
            <h3>${u.name}</h3>
            <p>Тип: ${u.type === "state" ? "Държавен" : "Частен"}</p>
            <p>Форма: ${u.form === "regular" ? "Редовна" : "Задочна"}</p>
            <p>Такса: ${u.fee} лв / ${toEuro(u.fee)} €</p>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        modalImg.src = u.img;
        modalName.textContent = u.name;
        modalType.textContent = u.type === "state" ? "Държавен университет" : "Частен университет";
        modalForm.textContent = u.form === "regular" ? "Редовна форма" : "Задочна форма";
        modalFee.textContent = `Такса: ${u.fee} лв (${toEuro(u.fee)} €)`;
        modalDescription.textContent = u.description;
        modalVisit.href = u.website;

        modal.classList.remove("hidden");
      });

      resultsContainer.appendChild(card);
    });
  }

  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth" });
});

// ===== Close Modal =====
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});
