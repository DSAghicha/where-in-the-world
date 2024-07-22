import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

const Home = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState(data);

    return (
        <>
            <div className="search-cr">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    aria-labelledby="Search for a country"
                    onChange={(e) => {
                        const value = e.target.value;
                        const results = data.filter((country) =>
                            country.name
                                .toLowerCase()
                                .includes(value.toLowerCase())
                        );
                        setCountries(results);
                    }}
                />
                <select
                    aria-labelledby="Filter by Region"
                    onChange={(e) => {
                        const value = e.target.value;
                        const results = data.filter((country) =>
                            country.region.includes(value)
                        );
                        setCountries(results);
                    }}
                >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className="items-cr">
                {countries.map((item, index) => (
                    <div
                        className="item bg-sec"
                        key={index}
                        onClick={() => navigate(`/${item.alpha3Code}`)}
                    >
                        <img src={item.flag} alt={item.name} />
                        <h2>{item.name}</h2>
                        <div className="details">
                            <p>
                                <strong>Population:</strong> {item.population}
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
            </div>
        </>
    );
};

export default Home;
