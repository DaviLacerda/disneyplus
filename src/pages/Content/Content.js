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

    async function getInfos(query) {
        let response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);

        let auxData = response.data.results[0];

        setData(auxData)
        setBgImage(auxData.backdrop_path)

        if(auxData.media_type == 'movie'){
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${auxData.id}?api_key=${process.env.REACT_APP_API_KEY}`);

            setRuntime(response.data.runtime)
            setRelease(response.data.release_date.split('-')[0]);
        }

        else{
            let response = await axios.get(`https://api.themoviedb.org/3/tv/${auxData.id}?api_key=${process.env.REACT_APP_API_KEY}`);

            setSeasons(response.data.number_of_seasons);
            setEpisodes(response.data.number_of_episodes);
            setRelease(response.data.first_air_date.split('-')[0])
        }
    }

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0){
            const bg = document.getElementsByClassName('content__bg')[0]
            bg.style.opacity = '0.6';
            bg.style.filter = 'brightness(0.4)';
        }
        else{
            const bg = document.getElementsByClassName('content__bg')[0]
            bg.style.opacity = '0.8';
            bg.style.filter = 'brightness(0.525)';
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