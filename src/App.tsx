import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./App.sass";
import data from "./data/data.json";

export default function App() {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    const [theme, setTheme] = useState<"light" | "dark">(preferredTheme);

    useEffect(() => {
        console.log("Theme changed to", theme);
    }, [theme]);

    return (
        <div className={`App ${theme}-theme`}>
            <header className="App-header">
                <h1>Where in the world?</h1>
                <div
                    className="theme-switcher"
                    onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }}
                >
                    <FontAwesomeIcon
                        icon={theme === "light" ? faMoon : faSun}
                    />
                    <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
                </div>
            </header>
            <main>
                {/* TODO */}
                <div className="items-cr">
                    {data.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.flag} alt={item.name} />
                            <h2>{item.name}</h2>
                            <div className="details">
                                <p>
                                    <strong>Population:</strong>{" "}
                                    {item.population}
                                </p>
                                <p>
                                    <strong>Region:</strong> {item.region}
                                </p>
                                <p>
                                    <strong>Capital:</strong> {item.capital}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* <div className="item">
                        <img src="https://flagcdn.com/zw.svg" alt="" />
                        <h2>Zimbabwe</h2>
                        <div className="details">
                            <p>
                                <strong>Population:</strong> 14,862,924
                            </p>
                            <p>
                                <strong>Region:</strong> Africa
                            </p>
                            <p>
                                <strong>Capital:</strong> Harare
                            </p>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    );
}
