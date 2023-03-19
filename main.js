const app = document.getElementById('app');

const games = [
    {
        name: "Naruto Shippuden: Ultimate Ninja Storm 4",
        year:2018,
        genre:"Versus",
        stock: 200,
    },
    {
        name: "Final Fantasy 7",
        year:2022,
        genre:"RPG",
        stock: 0,
    },
    {
        name: "Apex Legend",
        year:2023,
        genre:"Battle Royal",
        stock: 200,
    }
];

const[gameOne, gameTwo, gameThree] = games;

const btnClass = (stock) => (stock > 0 ? "btn-primary" : "btn-danger disabled");

function Card ({ name, year, genre, stock = 0 }) {
    return `
        <div class="card shadow-sm p-3 mb-5 bg-body rounded border-0">
            <div class="card-body">
            <h5 class="card-title">${name.toUpperCase()}</h5>
            <p class="card-text">${year} - ${genre}</p>
            <a href="#" class="btn ${btnClass(stock)}">Purchase</a>
        </div>
    </div>
  `;
}


app.innerHTML = Card(gameOne);
app.innerHTML += Card(gameTwo);
app.innerHTML += Card(gameThree);