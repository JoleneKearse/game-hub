import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface HeadingProps {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery }: HeadingProps) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Titles`;
  return (
    <Heading as="h1" marginBottom={8} fontSize="5xl">
      {heading}
    </Heading>
  );
}
