const universities = [
  { name: "Американски университет в България", city: "Благоевград", img: "ау.jpg", email: "admissions@aubg.edu", website: "https://www.aubg.edu/" },
  { name: "Бургаски свободен университет", city: "Бургас", img: "bfu_1000x450.jpg", email: "info@bfu.bg", website: "https://www.bfu.bg/" },
  { name: "Варненски свободен университет 'Черноризец Храбър'", city: "Варна", img: "vsu-panorama.jpg", email: "info@vfu.bg", website: "https://www.vfu.bg/" },
  { name: "ВВМУ 'Никола Йонков Вапцаров'", city: "Варна", img: "vvmu-800x600-1.jpg.webp", email: "info@naval-acad.bg", website: "https://www.naval-acad.bg/" },
  { name: "Великотърновски университет 'Св. св. Кирил и Методий'", city: "Велико Търново", img: "вту.jpg", email: "vtu@uni-vt.bg", website: "https://www.uni-vt.bg/" },
  { name: "Висше училище по застраховане и финанси", city: "София", img: "вузф.png", email: "info@vuzf.bg", website: "https://vuzf.bg/" },
  { name: "Висше училище по сигурност и икономика", city: "Пловдив", img: "вуси.jpg", email: "vusi@vusi.bg", website: "https://vusi.bg/" },
  { name: "Икономически университет – Варна", city: "Варна", img: "икономически.jpg", email: "info@ue-varna.bg", website: "https://www.ue-varna.bg/" },
  { name: "Медицински университет – Пловдив", city: "Пловдив", img: "Plovdiv_Medical_Unoversity.jfif", email: "rector@mu-plovdiv.bg", website: "https://mu-plovdiv.bg/" },
  { name: "Нов български университет", city: "София", img: "нбу.jpg", email: "inbox@nbu.bg", website: "https://www.nbu.bg/" },
  { name: "Пловдивски университет 'Паисий Хилендарски'", city: "Пловдив", img: "IMGP1292.jpg", email: "pu@uni-plovdiv.bg", website: "https://uni-plovdiv.bg/" },
  { name: "Русенски университет 'Ангел Кънчев'", city: "Русе", img: "ruse-uni.jpg", email: "info@uni-ruse.bg", website: "https://www.uni-ruse.bg/" },
  { name: "Софийски университет 'Св. Климент Охридски'", city: "София", img: "770-434-sofijski-universitet-kliment-ohridski.jpg", email: "rector@uni-sofia.bg", website: "https://www.uni-sofia.bg/" },
  { name: "Технически университет – София", city: "София", img: "ту.jpg", email: "tu@tu-sofia.bg", website: "https://tu-sofia.bg/" },
  { name: "Технически университет – Варна", city: "Варна", img: "TU_Picture_01.jpg", email: "tuvarna@tu-varna.bg", website: "https://www.tu-varna.bg/" },
  { name: "Тракийски университет – Стара Загора", city: "Стара Загора", img: "тракийски.jfif", email: "uni@trakia-uni.bg", website: "https://www.trakia-uni.bg/" },
  { name: "Университет 'Проф. д-р Асен Златаров'", city: "Бургас", img: "AZ5.jpg", email: "info@btu.bg", website: "https://btu.bg/index.php/bg/" },
  { name: "УНСС", city: "София", img: "унсссс.jpg", email: "unwe@unwe.bg", website: "https://www.unwe.bg/" },
  { name: "Югозападен университет 'Неофит Рилски'", city: "Благоевград", img: "юзу.jfif", email: "rector@swu.bg", website: "https://www.swu.bg/" },

  // ⭐ ДОБАВЕНО – СТОПАНСКА АКАДЕМИЯ
  { name: "Стопанска академия „Д. А. Ценов“ – Свищов", city: "Свищов", img: "стопака.webp", email: "info@uni-svishtov.bg", website: "https://www.uni-svishtov.bg/" }
];

// сортиране по азбучен ред
universities.sort((a, b) => a.name.localeCompare(b.name, 'bg'));

const list = document.getElementById("uniList");

universities.forEach(u => {
  const card = document.createElement("div");
  card.className = "university-card";
  card.style.backgroundImage = `url(${u.img})`;

  card.innerHTML = `
  <div class="card-overlay">
    <a class="btn-primary visit-btn" href="${u.website}" target="_blank">Посети сайт</a>

    <div class="card-content">
      <h3>${u.name}</h3>
      <p><b>Град:</b> ${u.city}</p>
      <p><b>Имейл:</b> ${u.email}</p>
    </div>
  </div>
`;

  list.appendChild(card);
});

