import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({topText:"One does not simply", bottomText:"Walk into Mordor", imageUrl:"http://i.imgflip.com/1bij.jpg"})
    const [memes, setMemes] = useState([])
    const [random, setRandom] = useState(0)

    function handleChange(event){
        const {name, value} = (event.currentTarget)
        setMeme({
            ...meme,
            [name]:value
        })
    }

    useEffect(() => {
        fetch(` https://api.imgflip.com/get_memes`)
        .then(response => response.json())
        .then(data => setMemes(data.data.memes))
    }, [])

    
    function getImage(){
        setRandom(Math.floor(Math.random() * 100));
        setMeme(prev => ({
            ...prev,
            imageUrl:memes[random].url
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value = {meme.bottomText}
                    />
                </label>
                <button onClick={getImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}