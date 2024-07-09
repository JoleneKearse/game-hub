import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} color="brand.200" />
        <Input borderRadius={20} placeholder="Search games..." variant="filled" ref={ref} />
      </InputGroup>
    </form>
  );
}
