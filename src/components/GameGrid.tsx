import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";

import { GameCard } from "./GameCard";
import { GameCardSkelton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
}

export function GameGrid({ gameQuery }: GameGridProps) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="1.75rem"
        padding="1rem"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkelton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
