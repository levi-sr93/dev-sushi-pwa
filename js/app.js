const container = document.querySelector(".container");
const coffees = [
    { name: 'Salmon Nigiri', image: "../imgs/SalmonNigiri.jpg" },
    { name: 'Salmon roll', image: "../imgs/Salmonroll.jpg" },
    { name: 'Skin roll', image: "../imgs/skinroll.jpg" },
    { name: 'California Tako', image: "../imgs/CaliforniaTako.jpg" },
    { name: 'California', image: "../imgs/california.jpg" },
    { name: 'Niu Oriental', image: "../imgs/NiuOrientalSalmao.jpg" },
]

const showCoffees = () => {
    let output = "";

    coffees.forEach(({ name, image }) =>
        (output += `
            <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title"> ${name}</h1>
                <a class="card--link" href="#"> Taste </a>
            </div>
        `)
    )

        container.innerHTML = output;
}

    document.addEventListener("DOMContentLoaded", showCoffees);
