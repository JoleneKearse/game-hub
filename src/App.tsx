import { useState } from "react";

import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { PlatformSelector } from "./components/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      bgColor="brand.950"
      templateColumns={{
        base: "1fr",
        lg: "12rem 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
