import { PokemonProvider } from "./context/PokemonProvider";
import { AppRouter } from "./router/AppRouter";

export function App() {
  return (
    <>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </>
  );
}
