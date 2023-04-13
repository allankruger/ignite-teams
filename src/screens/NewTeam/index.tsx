import { Container, Content, Icon } from "@screens/NewTeam/styles";
import Header from "@components/Header";
import PageInfo from "@components/PageInfo";
import Button from "@components/Button";
import Input from "@components/Input";

export default function NewTeam() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <PageInfo
          title="New team"
          subtitle="Create a new and start adding people"
        />
        <Input placeholder="Team name" />
        <Button title="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
