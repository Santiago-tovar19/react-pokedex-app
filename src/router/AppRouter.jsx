import { Route, Routes } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { PokemonPage } from "../pages/PokemonPage";
import { SearchPage } from "../pages/SearchPage";
import { HomePage } from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route index element={<HomePage />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="*" element={<Navigation to="/" />} />
      </Routes>
    </>
  );
};
