import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export default function ButtonIcon(props: Props) {
  const { icon, type = "PRIMARY", ...rest } = props;

  return (
    <Container>
      <Icon name={icon} type={type} />
    </Container>
  );
}
