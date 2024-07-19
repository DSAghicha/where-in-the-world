import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";
import { Outlet } from "react-router-dom";

type Props = {
    theme: string;
    setTheme: Dispatch<SetStateAction<"dark" | "light">>;
};

const Layout: FC<Props> = ({ theme, setTheme }) => {
    return (
        <>
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
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
