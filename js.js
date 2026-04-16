const apiHamsters = "https://api.pexels.com/v1/search?query=hamsters";
const key = "BHcPyzIycHPf3X3vPfe241uV67ifUs6ZmbLdG2JrfmdIfJXwt8gpxNQb";
const rowContainer = document.querySelector(".album .row");

const caricaImg = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Response non ok");
      }
    })
    .then((data) => {
      console.log(data);
      scambioImg(data.photos);
    })
    .catch((err) => console.error("Errore nel caricamento:", err));
};

const scambioImg = (immagini) => {
  ((rowContainer.innerHTML = ""),
    immagini.forEach((immagine) => {
      rowContainer.innerHTML += `            
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="${immagine.src.medium}"
                  class="bd-placeholder-img card-img-top imgCard"
                 style="height: 150px; widht: 200px; object-fit: cover;"
                />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary btn-hide"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${immagine.id}</small>
                  </div>
                </div>
              </div>
            </div>`;
    }));
  nascondi();
};

const loadBtn = document.querySelector(".btn-primary");
const secondaryBtn = document.querySelector(".btn-secondary");

loadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  caricaImg("hamsters");
});

secondaryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  caricaImg("tigers");
});

const nascondi = () => {
  const hideBtn = document.querySelectorAll(".btn-hide");
  hideBtn.forEach((btn) => {
    btn.onclick = (e) => {
      e.target.closest(".col-md-4").remove();
    };
  });
};
