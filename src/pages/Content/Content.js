import axios from "axios"
import { useState, useEffect } from "react";

import { ContentContainer } from "./styles";
import Footer from '../../components/Footer/Footer'

// import components
import Header from "../../components/Header/Header"

function Content() {
    let split = window.location.href.split('/');
    const name = split[split.length-1];

    const [data, setData] = useState(undefined);
    const [bgImage, setBgImage] = useState(null);
    const [release, setRelease] = useState(undefined)

    // useState for movies
    const [runtime, setRuntime] = useState(undefined);

    // useState for tv / series
    const [seasons, setSeasons] = useState(undefined);
    const [episodes, setEpisodes] = useState(undefined);

    // useState for get trailer
    const [trailer, setTrailer] = useState(undefined);

    async function getInfos(query) {
        let response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);

        let auxData = response.data.results[0];

        setData(auxData)
        setBgImage(auxData.backdrop_path)

        if(auxData.media_type == 'movie'){
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${auxData.id}?api_key=${process.env.REACT_APP_API_KEY}`);
    
            setRuntime(response.data.runtime)
            setRelease(response.data.release_date.split('-')[0]);

            // get trailer
            let trailerResponse = await axios.get(`https://api.themoviedb.org/3/movie/${auxData.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            let trailerData = trailerResponse.data.results
            for(let i = 0; i < trailerData.length; i++){
                if(trailerData[i].name.toLowerCase().includes('trailer')){
                    setTrailer(`https://youtube.com/watch?v=${trailerData[i].key}`)
                    return;
                }
            }
            if(trailer === undefined){
                setTrailer(`https://youtube.com/results?search_query=${auxData.name.replace
                (/[\u0300-\u036f]/g,'+')}+trailer`)
            }
        }

        else{
            let response = await axios.get(`https://api.themoviedb.org/3/tv/${auxData.id}?api_key=${process.env.REACT_APP_API_KEY}`);

            setSeasons(response.data.number_of_seasons);
            setEpisodes(response.data.number_of_episodes);
            setRelease(response.data.first_air_date.split('-')[0])

            // get series trailer
            let trailerResponse = await axios.get(`https://api.themoviedb.org/3/tv/${auxData.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            let trailerData = trailerResponse.data.results;
            for(let i = 0; i < trailerData.length; i++){
                if(trailerData[i].name.toLowerCase().includes('trailer')){
                    console.log(trailer);
                    setTrailer(`https://youtube.com/watch?v=${trailerData[i].key}`)
                    return;
                }
            }
            if(trailer === undefined){
                setTrailer(`https://youtube.com/results?search_query=${auxData.name.replace
                (/[\u0300-\u036f]/g,'+')}+trailer`)
            }
        }
    }

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0){
            if(document.getElementsByClassName('content__bg')[0]){
                const bg = document.getElementsByClassName('content__bg')[0]
                bg.style.opacity = '0.6';
                bg.style.filter = 'brightness(0.4)';
            }
        }
        else{
            if(document.getElementsByClassName('content__bg')[0]){
                const bg = document.getElementsByClassName('content__bg')[0]
                bg.style.opacity = '0.8';
                bg.style.filter = 'brightness(0.525)';
            }
        }
    })

    useEffect(() => {
        getInfos(name);
    }, [])

    return (
        <>
            <Header></Header>
            {
                data == undefined && (
                    <>
                        <ContentContainer style={{justifyContent:'center'}}>
                            <h1>Error 404</h1>
                            <h2>Not found!</h2>
                            <a href="/">
                                <button className="btn__error404">Go back!</button>
                            </a>
                        </ContentContainer>
                    </>
                )
            }
            {data !== undefined && (
                <>
                    <ContentContainer>
                    {
                        bgImage && <div className="content__bg" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${bgImage})`}}></div>
                    }
                    {
                        runtime !== undefined && (
                            <div className="content__header">
                                <h1>{data.title || data.original_name}</h1>
                                <span>{data.media_type} • {runtime} minutes • {release}</span>
                                <p>{data.overview}</p>
                                <a href={trailer} className="trailer" target='_blank'>
                                    <button className="open">
                                        <svg className="open__icon">
                                            <path d="M27.147 20.421L11.27 29.274A2.2 2.2 0 0 1 8 27.353V9.647a2.2 2.2 0 0 1 3.271-1.921l15.876 8.852a2.2 2.2 0 0 1 0 3.843z"></path>
                                        </svg>
                                        <span className="open__text">Play</span>
                                    </button>
                                </a>
                            </div> 
                        )
                    }            
                    {
                        runtime == null && (
                            <div className="content__header">
                                <h1>{data.title || data.original_name}</h1>
                                {
                                    seasons == 1 && (
                                        <span>{data.media_type} • {episodes} Episodes • {release}</span>
                                    )
                                }
                                {
                                    seasons !== 1 && (
                                        <span>{data.media_type} • {seasons} Seasons • {release}</span>
                                    )
                                }
                                <p>{data.overview}</p>
                                <a href={trailer} className="trailer" target='_blank'>
                                    <button className="open">
                                        <svg className="open__icon">
                                            <path d="M27.147 20.421L11.27 29.274A2.2 2.2 0 0 1 8 27.353V9.647a2.2 2.2 0 0 1 3.271-1.921l15.876 8.852a2.2 2.2 0 0 1 0 3.843z"></path>
                                        </svg>
                                        <span className="open__text">Play</span>
                                    </button>
                                </a>
                            </div> 
                        )
                    }
                    </ContentContainer>
                </>
            )}
            <Footer></Footer>
        </>
    )
}

export default Content