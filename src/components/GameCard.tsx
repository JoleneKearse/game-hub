import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/imgUrl";

import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { Emoji } from "./Emoji";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card height={["26rem", "24rem"]}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" color="brand.400" noOfLines={1} title={game.name}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}
