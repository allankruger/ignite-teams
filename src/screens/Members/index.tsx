import { Container } from "./style";
import PageInfo from "@components/PageInfo";
import Header from "@components/Header";
import ButtonIcon from "@components/ButtonIcon";

export default function Members() {
  return (
    <Container>
      <Header showBackButton />
      <PageInfo
        title="Team name"
        subtitle="Add members and assemble your team"
      />
      <ButtonIcon icon="home" />
    </Container>
  );
}
