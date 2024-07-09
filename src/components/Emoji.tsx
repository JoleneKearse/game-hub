import BullsEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

export function Emoji({ rating }: EmojiProps) {
  if (rating < 3) return null;
  const emojiMap: { [key:number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "2.25rem"},
    4: { src: ThumbsUp, alt: "Recommended", boxSize: "2.25rem"},
    5: { src: BullsEye, alt: "On fire!", boxSize: "2.75rem"},
  }

  return (
    <Image {...emojiMap[rating]} marginTop={5} />
  ) 
}