import { ChakraProps, Text } from "@chakra-ui/react";

interface RpTitleProps {
  text: string;
}

export default function RpTitle({
  text,
  ...props
}: RpTitleProps & ChakraProps) {
  return (
    <Text
      fontSize={"18px"}
      fontWeight={600}
      p={"5px 0px"}
      margin={"10px 0px"}
      {...props}
    >
      {text}
    </Text>
  );
}
