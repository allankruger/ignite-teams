import { Container, Title, Subtitle } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export default function PageInfo(props: Props) {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
