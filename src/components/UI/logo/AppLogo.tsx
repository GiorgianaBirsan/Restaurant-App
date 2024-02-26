import { Image } from "@chakra-ui/react";

export default function AppLogo() {
  return (
    <Image
      src="../../../../public/assets/Experikitchen Logo - Original with Transparent Background.svg"
      alt="restaurant logo"
      boxSize="300px"
      objectFit="cover"
      m="auto"
      mt={50}
      mb={50}
    />
  );
}
