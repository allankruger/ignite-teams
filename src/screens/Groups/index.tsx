import { Container } from "./styles";
import Header from "@components/Header";
import PageInfo from "@components/PageInfo";

export default function Groups() {
  return (
    <Container>
      <Header />
      <PageInfo title="Teams" subtitle="Play with your team" />
    </Container>
  );
}
