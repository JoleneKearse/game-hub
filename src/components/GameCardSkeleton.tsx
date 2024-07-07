import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export function GameCardSkelton() {
  return (
    <Card>
      <Skeleton height="14rem" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}