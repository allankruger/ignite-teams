import { Container, Form } from "./style";
import PageInfo from "@components/PageInfo";
import Header from "@components/Header";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";

export default function Members() {
  return (
    <Container>
      <Header showBackButton />

      <PageInfo
        title="Team name"
        subtitle="Add members and assemble your team"
      />

      <Form>
        <Input placeholder="Name" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}