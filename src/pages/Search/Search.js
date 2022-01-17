import Header from "../../components/Header/Header";
import { SearchContainer } from "./styles";
import Footer from "../../components/Footer/Footer";

import axios from "axios";
import { useState, useEffect } from "react";

function Search() {
    var timeout = null;
    var isReady = true;
    var link = undefined;

    const [display, setDisplay] = useState(undefined);

    const searchApi = async (input) => {
        let contentContainer =
            document.getElementsByClassName("content__display")[0];
        clearInterval(timeout);

        if (input !== "") {
            contentContainer.style.display = "flex";
            clearInterval(timeout);

            timeout = setInterval(async function () {
                if (isReady == true) {
                    getArrayWithResult(input);
                    isReady = false;
                }
            }, 1000);
        } else {
            contentContainer.style.display = "none";
        }
    };

    const getArrayWithResult = async (input) => {
        let response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${input}&include_adult=false`
        );

        response.data.results !== [] && setDisplay(response.data.results);
    };

    return (
        <>
            <Header></Header>
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Search by title"
                    onInput={(e) => searchApi(e.target.value)}
                ></input>
                <div className="content__display">
                    {display !== undefined &&
                        display.map((index, keyValue) => {
                            {
                                index.title &&
                                    (link = index.title
                                        .toLowerCase()
                                        .replace(/([ :])/g, "-"));
                                index.name &&
                                    (link = index.name
                                        .toLowerCase()
                                        .replace(/([ :])/g, "-"));
                            }
                            if (index.poster_path) {
                                return (
                                    <a href={`/${link}`} key={keyValue}>
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${index.poster_path}`}
                                        ></img>
                                    </a>
                                );
                            }
                        })}
                </div>
            </SearchContainer>
            <Footer></Footer>
        </>
    );
}

export default Search;
