import axios from "axios";
import { useState, useEffect } from "react";

import { ContentContainer } from "./styles";
import Footer from "../../components/Footer/Footer";

// import components
import Header from "../../components/Header/Header";

function Content() {
    let split = window.location.href.split("/");
    const name = split[split.length - 1];

    const [data, setData] = useState(undefined);
    const [dataType, setDataType] = useState(undefined);
    const [trailer, setTrailer] = useState(undefined);

    const getData = async (query) => {
        let dataResult = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
        );

        setData(dataResult.data.results[0]);

        if (dataResult.data.results[0]) {
            getDataType(dataResult.data.results[0]);
        }
    };

    const getDataType = async (data) => {
        if (data.media_type === "movie") {
            let dataTypeResult = await axios.get(
                `https://api.themoviedb.org/3/movie/${data.id}?api_key=${process.env.REACT_APP_API_KEY}`
            );

            setDataType(dataTypeResult.data);
            getMovieTrailer(dataTypeResult.data);
        } else {
            let dataTypeResult = await axios.get(
                `https://api.themoviedb.org/3/tv/${data.id}?api_key=${process.env.REACT_APP_API_KEY}`
            );

            setDataType(dataTypeResult.data);
            getTvTrailer(dataTypeResult.data);
        }
    };

    const getMovieTrailer = async (movie) => {
        let trailerResult = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        );
        let trailerData = trailerResult.data.results;
        for (let i = 0; i < trailerData.length; i++) {
            if (trailerData[i].name.toLowerCase().includes("trailer")) {
                setTrailer(`https://youtube.com/watch?v=${trailerData[i].key}`);
                return;
            }
        }
        if (trailer === undefined) {
            setTrailer(
                `https://youtube.com/results?search_query=${movie.name.replace(
                    /[\u0300-\u036f]/g,
                    "+"
                )}+trailer`
            );
        }
    };

    const getTvTrailer = async (tv) => {
        let trailerResult = await axios.get(
            `https://api.themoviedb.org/3/tv/${tv.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        );
        let trailerData = trailerResult.data.results;
        for (let i = 0; i < trailerData.length; i++) {
            if (trailerData[i].name.toLowerCase().includes("trailer")) {
                setTrailer(`https://youtube.com/watch?v=${trailerData[i].key}`);
                return;
            }
        }
        if (trailer === undefined) {
            setTrailer(
                `https://youtube.com/results?search_query=${tv.name.replace(
                    /[\u0300-\u036f]/g,
                    "+"
                )}+trailer`
            );
        }
    };

    const addWatchList = (span) => {
        span.classList.toggle("added");
        span.textContent === "+"
            ? (span.textContent = "✓")
            : (span.textContent = "+");
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
            if (document.getElementsByClassName("content__bg")[0]) {
                const bg = document.getElementsByClassName("content__bg")[0];
                bg.style.opacity = "0.6";
                bg.style.filter = "brightness(0.4)";
            }
        } else {
            if (document.getElementsByClassName("content__bg")[0]) {
                const bg = document.getElementsByClassName("content__bg")[0];
                bg.style.opacity = "0.8";
                bg.style.filter = "brightness(0.525)";
            }
        }
    });

    const shouldDisplayContent = data && dataType;

    useEffect(() => {
        getData(name);
    }, [name]);

    return (
        <>
            <Header></Header>
            {shouldDisplayContent ? (
                <>
                    <ContentContainer>
                        {
                            <>
                                <div
                                    className="content__bg"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
                                    }}
                                ></div>
                                <div className="content__header">
                                    <h1>{data.title || data.original_name}</h1>
                                    <span>
                                        {data.media_type}
                                        {dataType.runtime &&
                                            ` • ${dataType.runtime} minutes`}
                                        {dataType.number_of_seasons &&
                                            ` • ${
                                                dataType.number_of_seasons == 1
                                                    ? `${dataType.number_of_episodes} Episodes`
                                                    : `${dataType.number_of_seasons} Seasons`
                                            }`}
                                        {dataType.first_air_date &&
                                            ` • ${
                                                dataType.first_air_date.split(
                                                    "-"
                                                )[0]
                                            }`}
                                        {dataType.release_date &&
                                            ` • ${
                                                dataType.release_date.split(
                                                    "-"
                                                )[0]
                                            }`}
                                    </span>
                                    <p>{data.overview}</p>

                                    <div className="btn__container">
                                        <a
                                            href={trailer}
                                            className="trailer"
                                            target="_blank"
                                        >
                                            <button className="open">
                                                <svg className="open__icon">
                                                    <path d="M27.147 20.421L11.27 29.274A2.2 2.2 0 0 1 8 27.353V9.647a2.2 2.2 0 0 1 3.271-1.921l15.876 8.852a2.2 2.2 0 0 1 0 3.843z"></path>
                                                </svg>
                                                <span className="open__text">
                                                    Play
                                                </span>
                                            </button>
                                        </a>
                                        <button
                                            className="watchlist_add"
                                            onClick={(e) =>
                                                addWatchList(
                                                    e.target.firstChild
                                                )
                                            }
                                        >
                                            <span>+</span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    </ContentContainer>
                </>
            ) : (
                <>
                    <ContentContainer style={{ justifyContent: "center" }}>
                        <h1>Error 404</h1>
                        <h2>Not found!</h2>
                        <a href="/">
                            <button className="btn__error404">Go back!</button>
                        </a>
                    </ContentContainer>
                </>
            )}
            <Footer></Footer>
        </>
    );
}

export default Content;
