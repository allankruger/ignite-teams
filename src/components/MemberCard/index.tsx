import { Container, Icon, Name } from "./styles";
import ButtonIcon from "@components/ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function MemberCard(props: Props) {
  const { name, onRemove } = props;

  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
