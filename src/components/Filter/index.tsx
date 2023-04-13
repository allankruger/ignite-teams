import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export default function Filter(props: Props) {
  const { title, isActive = false, ...rest } = props;
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
