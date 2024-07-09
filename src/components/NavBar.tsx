import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { SearchInput } from "./SearchInput";
import { ColorModeSwitch } from "./ColorModeSwitch";

export function NavBar() {
  return (
    <HStack padding="2rem">
      <Image src={logo} boxSize="3.5rem" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
