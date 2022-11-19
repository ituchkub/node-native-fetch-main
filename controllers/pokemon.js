exports.getPokemon = async (req, res) => {
    const api = await fetch('https://pokeapi.co/api/v2/pokemon/');

    if (api.ok) {
        const data = await api.json();

        console.log(data);

        try {
            res.json(data);
        } catch(error) {
            console.log(error);
        }

    }
}

exports.getPokemonMoves = async (req, res) => {
    const api = await fetch('https://pokeapi.co/api/v2/move/');

    if (api.ok) {
        const data = await api.json();

        console.log(data);

        try {
            res.json(data);
        } catch(error) {
            console.log(error);
        }

    }
}