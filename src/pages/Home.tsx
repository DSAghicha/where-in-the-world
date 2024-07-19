import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="items-cr">
                {data.map((item, index) => (
                    <div
                        className="item"
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
