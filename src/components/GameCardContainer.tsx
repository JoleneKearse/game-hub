import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

export function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box width="18rem" borderRadius="2rem" overflow="hidden">
      {children}
    </Box>
  );
}
