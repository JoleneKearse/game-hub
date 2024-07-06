import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

import { GameCard } from "./GameCard";
import { GameCardSkelton } from "./GameCardSkeleton";

export function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing="2rem"
        padding="1rem"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkelton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
