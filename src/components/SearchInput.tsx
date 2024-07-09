import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} color="brand.200" />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
}
