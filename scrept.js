function showPerson(person) {
  const info = document.getElementById("info");

  if (person === "mom") {
    info.innerHTML = `
      <h2>Мама</h2>
      <p>Имя: Айжан</p>
      <p>Возраст: 33</p>
      <p>Любит: готовить, семью, чистоту в доме и нас</p>
    `;
  } else if (person === "dad") {
    info.innerHTML = `
      <h2>Папа</h2>
      <p>Имя: Виктор</p>
      <p>Возраст: 42</p>
      <p>Любит: работать и нас</p>
    `;
  } else if (person === "brother") {
    info.innerHTML = `
      <h2>Братишка</h2>
      <p>Имя: Даниель</p>
      <p>Возраст: 4</p>
      <p>Любит: играть в садике и смотреть мультики</p>
    `;
  } else if (person === "me") {
    info.innerHTML = `
      <h2>Я</h2>
      <p>Имя:Кайырлы</p>
      <p>Возраст:15</p>
      <p>Любит:играть,пить кока-колу и лежать без дела</p>
    `;
  }
}
