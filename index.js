const axiosRequest = require('axios')

async function tellJoke()
{
    try
    {
        let response = await axiosRequest
                            .get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single');

        console.log ('Here\'s a little programming joke to lighten your mood:\n')
        console.log (`${response.data.joke}`)
    }
    catch (error)
    {
        console.error (`ERROR: ${error}`);
    }
}

tellJoke();