import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

export function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="2rem">
      <Image src={logo} boxSize="3.5rem" />
      <ColorModeSwitch />
    </HStack>
  );
}
