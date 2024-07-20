import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";

const Country = () => {
    const { country } = useParams<{ country: string }>();
    const navigate = useNavigate();
    const [countryData, setCountryData] = useState<CountryData | null>(null);

    useEffect(() => {
        console.log("Country changed to", country);
        const countryData = data.find((item) => item.alpha3Code === country);
        if (!countryData) return;
        const requiredInfo = {
            flag: countryData.flag,
            name: countryData.name,
            nativeName: countryData.nativeName,
            population: countryData.population,
            region: countryData.region,
            subRegion: countryData.subregion,
            capital: countryData.capital ?? "N/A",
            tld: countryData.topLevelDomain.join(", "),
            currencies:
                countryData.currencies
                    ?.map((currency) => currency.name)
                    .join(", ") ?? "",
            languages:
                countryData.languages
                    .map((language) => language.name)
                    .join(", ") ?? "",
            borders: countryData.borders?.map((border) => {
                return {
                    name: data.find((item) => item.alpha3Code === border)!.name,
                    code: border,
                };
            }),
        };
        setCountryData(requiredInfo);
    }, [country]);

    return (
        <>
            <div
                className="back-btn bg-sec"
                onClick={() => navigate("/", { replace: true })}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back</span>
            </div>
            <div className="cr">
                {countryData ? (
                    <>
                        <img src={countryData.flag} alt="Flag" />
                        <div className="details">
                            <h2>{countryData.name}</h2>
                            <div className="row1">
                                <p>
                                    <strong>Native Name:&nbsp;</strong>
                                    {countryData.nativeName}
                                </p>
                                <p>
                                    <strong>Population:&nbsp;</strong>
                                    {countryData.population}
                                </p>
                                <p>
                                    <strong>Region:&nbsp;</strong>
                                    {countryData.region}
                                </p>
                                <p>
                                    <strong>Sub Region:&nbsp;</strong>
                                    {countryData.subRegion}
                                </p>
                                <p>
                                    <strong>Capital:&nbsp;</strong>
                                    {countryData.capital}
                                </p>
                            </div>
                            <div className="row2">
                                <p>
                                    <strong>Top Level Domain:</strong>{" "}
                                    {countryData.tld}
                                </p>
                                <p>
                                    <strong>Currencies:</strong>{" "}
                                    {countryData.currencies}
                                </p>
                                <p>
                                    <strong>Languages:</strong>{" "}
                                    {countryData.languages}
                                </p>
                            </div>
                            <div className="borders">
                                <strong>Border Countries:&nbsp;</strong>
                                <div className="borderCr">
                                    {countryData.borders?.map((border) => (
                                        <span
                                            className="borderCountry bg-sec"
                                            key={border.code}
                                            onClick={() =>
                                                navigate(`/${border.code}`)
                                            }
                                        >
                                            {border.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </>
    );
};

interface CountryData {
    flag: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    tld: string;
    currencies: string;
    languages: string;
    borders: { name: string; code: string }[] | undefined;
}

export default Country;
