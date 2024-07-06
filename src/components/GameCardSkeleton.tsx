import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export function GameCardSkelton() {
  return (
    <Card width="300px" borderRadius="2rem" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}