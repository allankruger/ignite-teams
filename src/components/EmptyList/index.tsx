import { Container, Message } from "./styles";

type Props = {
  message: string;
};

export default function EmptyList(props: Props) {
  const { message } = props;

  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
