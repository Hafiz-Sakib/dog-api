const loadDog = () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDogs(data));
};

const displayDogs = (dogs) => {
  const main = document.getElementById("main");
  const first20Data = dogs.slice(0, 20);
  for (const dog of first20Data) {
    console.log(dog);
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
    <div class="card h-100" id = "single-card">
    <img width = "400px" height = "350px" src="${dog.image.url}" class="card-img-top" alt""/>
    <div class="card-body">
      <h5 class="card-title text-danger fw-bolder">${dog.name}</h5>
      <p class="card-text">
        Breed: ${dog.bred_for}
      </p>
      <p class="card-text">Breed-Group: ${dog.breed_group}
      </p>
      <p class="card-text">Height: ${dog.height.imperial}</p>
      <p class="card-text">Weight: ${dog.weight.imperial}</p>
      <p class="card-text">Behave: ${dog.temperament}</p>
      <p class="card-text">Life Span:${dog.life_span}</p>
      <button class="btn btn-success" type="submit" id='details'>Details</button>
    </div>
    `;
    main.appendChild(newDiv);
  }
};
