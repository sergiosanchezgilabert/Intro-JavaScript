//const getImagePromesa=()=> new Promise(resolve=>resolve(''))

const getImage = async () => {

    try {
        const apiKey = 'K8THWaSLTXQoE4k6WGNDMm6cow9Ode4E'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await resp.json()
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    } catch (error) {
        //manejo de error
        console.error(error);
    }

}

getImage()

/*const apiKey = 'K8THWaSLTXQoE4k6WGNDMm6cow9Ode4E'





peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        
    })
    .catch(console.warn())*/