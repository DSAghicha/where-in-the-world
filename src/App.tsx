import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import Layout from "./layouts";
import { Country, Home } from "./pages";

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
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout theme={theme} setTheme={setTheme} />}
                    >
                        <Route index element={<Home />} />
                        <Route path=":country" element={<Country />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
