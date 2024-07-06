import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

export function CriticScore({ score }: CriticScoreProps) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="1.05rem" paddingX={2} borderRadius={6}>
      {score}
    </Badge>
  );
}
