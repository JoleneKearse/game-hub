import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imgUrl";
import { GenreListSkeleton } from "./GenreListSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

export function GenreList({ onSelectGenre }: GenreListProps) {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  if (error) return null;
  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY=".5rem">
            <HStack>
              <Image
                boxSize={6}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
