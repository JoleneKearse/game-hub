import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";

import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius="2rem" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl" color="brand.400">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
