import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { SearchInput } from "./SearchInput";
import { ColorModeSwitch } from "./ColorModeSwitch";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

export function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack padding="2rem">
      <Image src={logo} boxSize="3.5rem" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
