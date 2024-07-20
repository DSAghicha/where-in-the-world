import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

const Home = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState(data);

    return (
        <>
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
